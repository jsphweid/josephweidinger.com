import axios from "axios";
import lsCache from "lscache";

import * as Utils from "./utils";

export interface RawActivityLog {
  vendorType: string;
  date: string;
  basicHtml: string;
}

export interface ActivityLog {
  vendorType: string;
  date: Date;
  basicHtml: string;
}

interface ActivityLogsRequest {
  start?: Date;
  end?: Date;
  first?: number;
}

const mapRawActivityLog = (rawActivityLog: RawActivityLog): ActivityLog => ({
  ...rawActivityLog,
  date: new Date(rawActivityLog.date)
});

// could've used react-static cache if I didn't misuse it I think, but it's easy
// enough just to quickly write my own...
// NOTE: where this breaks down is that each day that passes, a new set of start/end
// keys are made for previous days, which isn't 100% ideal. Maybe a better way
// would be to have a static past date fetching algorithm such that it always
// looks for the same dates/keys. This will do for now, however...
class ActivityLogsCache {
  private prefix: string;
  constructor(prefix: string) {
    this.prefix = prefix;
  }

  private makeCacheKey = (start: Date, end: Date): string =>
    `${this.prefix}${start.toISOString()}-${end.toISOString()}`;

  get = (req: ActivityLogsRequest): ActivityLog[] | null => {
    if (req.start && req.end) {
      const key = this.makeCacheKey(req.start, req.end);
      const maybeItem = lsCache.get(key);
      return maybeItem ? JSON.parse(maybeItem).map(mapRawActivityLog) : null;
    }
    return null;
  };

  set = (req: ActivityLogsRequest, data: ActivityLog[]): void => {
    if (req.start && req.end) {
      const key = this.makeCacheKey(req.start, req.end);
      const minutesToExpire = 60 * 24 * 3; // 3 days
      lsCache.set(key, JSON.stringify(data), minutesToExpire);
    }
  };
}

const activityLogsCache = new ActivityLogsCache("activityLogs");

export const getActivityLogs = async (
  req: ActivityLogsRequest = {}
): Promise<ActivityLog[]> => {
  // TODO: clean all this bullshit up (use lib?)
  const startDateString = `?start=${(
    req.start || Utils.getRecentStartDate()
  ).toISOString()}`;
  const endDateString = req.end ? `&end=${req.end.toISOString()}` : "";
  const firstString = req.first ? `&first=${req.first}` : "";
  const cacheResult = activityLogsCache.get(req);

  if (cacheResult) {
    return Promise.resolve(cacheResult);
  }

  const result = await axios
    .get<RawActivityLog[]>(
      `${process.env.GATSBY_LOGS_API_BASE_URL}/logs${startDateString}${endDateString}${firstString}`
    )
    .then(r => r.data.map(mapRawActivityLog));

  activityLogsCache.set(req, result);
  return result;
};

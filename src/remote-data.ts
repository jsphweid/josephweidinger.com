import axios from "axios";
import * as Utils from "./utils";

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

export const getActivityLogs = (
  req: ActivityLogsRequest = {}
): Promise<ActivityLog[]> => {
  // TODO: clean all this bullshit up (use lib?)
  const startDateString = `?start=${(
    req.start || Utils.getRecentStartDate()
  ).toISOString()}`;
  const endDateString = req.end ? `&end=${req.end.toISOString()}` : "";
  const firstString = req.first ? `&first=${req.first}` : "";
  return axios
    .get<ActivityLog[]>(
      `https://rd2o5zpumc.execute-api.us-west-2.amazonaws.com/prod/logs${startDateString}${endDateString}${firstString}`
    )
    .then(r => r.data.map(item => ({ ...item, date: new Date(item.date) })));
};

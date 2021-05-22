import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";

// I don't think I should have to put this here, but the way I've misused gatsby project
// layout probably necessitates this for now
import "./index.scss";

import RootLayout from "../layouts/root";
import ActivityLog from "../components/activity-log/activity-log";
import * as RemoteData from "../remote-data";
import * as Utils from "../utils";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const LOG_START_DATE = new Date("2021-01-01");

const Component = () => {
  const [startDate, setStartDate] = useState(Utils.getRecentStartDate());
  const [endDate, setEndDate] = useState(new Date());
  const [logs, setLogs] = useState([]);

  // NOTE: as this evolved (or devolved...), I found myself using react-query as it's
  // supposed to be used less and less
  const {
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery(
    "recent-activities",
    async () => {
      let newLogs: RemoteData.ActivityLog[] = [];
      let thisStart = startDate;
      let thisEnd = endDate;
      while (thisStart > LOG_START_DATE) {
        newLogs = await RemoteData.getActivityLogs({
          start: thisStart,
          end: thisEnd
        });
        thisEnd = thisStart;
        thisStart = Utils.subtractDaysFromDate(thisStart, 5);
        if (newLogs.length) {
          setLogs([...logs, ...newLogs]);
          break;
        }
      }

      // Setting this in the while loop yields odd results
      setEndDate(thisEnd);
      setStartDate(thisStart);
    },
    {
      getNextPageParam: () => {
        // in this fetching algorithm, the next page "param" is not as a thing
        // only that more exist because the date hasn't reached the beginning
        return startDate > LOG_START_DATE;
      },
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );

  const loadMoreButtonRef = React.useRef();

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage
  });

  const renderLoadingMore = () => {
    if (isFetching && !logs.length) {
      return <p>Loading logs...</p>;
    } else if (isFetching || hasNextPage) {
      return (
        <button
          className="jlw-rap-loadMoreButton"
          ref={loadMoreButtonRef}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load Newer"
            : "Nothing more to load"}
        </button>
      );
    } else {
      return <p>No more logs to load.</p>;
    }
  };

  return (
    <div className="jlw-rap">
      <h1>Joseph's Activity Log</h1>
      <div>
        <>
          {logs.map((log, i) => (
            <ActivityLog activityLog={log} key={`activity-log-${i}`} />
          ))}
        </>
        {error && <p>{"An error has occurred: " + error.message}</p>}
        {renderLoadingMore()}
      </div>
    </div>
  );
};

export default () => (
  <RootLayout>
    <Component />
  </RootLayout>
);

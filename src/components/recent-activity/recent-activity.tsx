import React from "react";
import { useQuery } from "react-query";

import Section from "../common/section/section";
import * as RemoteData from "../../remote-data";
import ActivityLog from "../activity-log/activity-log";

export interface RecentActivityProps {
  className?: string;
}

const RecentActivity: React.SFC<RecentActivityProps> = props => {
  const { isLoading, error, data } = useQuery<RemoteData.ActivityLog[], any>(
    "activityLogData",
    () => RemoteData.getActivityLogs({ first: 5 })
  );

  const renderData = () => {
    if (isLoading) {
      return <div>Loading recent activity...</div>;
    } else if (error) {
      return <div>{"An error has occurred: " + error.message}</div>;
    } else if (data) {
      return (
        <div>
          {data.map((log, i) => (
            <ActivityLog activityLog={log} key={`activity-log-${i}`} />
          ))}
        </div>
      );
    }
  };

  return (
    <Section
      title="recent activity"
      titleUrl="/recent-activity"
      className={`jlw-recentActivity ${props.className || ""}`}
    >
      <div className="jlw-recentActivity-content">{renderData()}</div>
    </Section>
  );
};

export default RecentActivity;

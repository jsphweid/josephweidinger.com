import React from "react";
import DOMPurify from "dompurify";
import { SiNotion, SiGithub } from "react-icons/si";

import * as Utils from "../../utils";
import * as RemoteData from "../../remote-data";

export interface ActivityLogProps {
  className?: string;
  activityLog: RemoteData.ActivityLog;
}

const ActivityLog: React.SFC<ActivityLogProps> = props => {
  const icon = (() => {
    if (props.activityLog.vendorType == "Notion") {
      return <SiNotion />;
    } else if (props.activityLog.vendorType == "Github") {
      return <SiGithub />;
    } else {
      return null;
    }
  })();
  return (
    <div className="jlw-activityLog">
      <div className="jlw-activityLog-icon">{icon}</div>
      <div className="jlw-activityLog-content">
        <div className="jlw-activityLog-content-date">
          {Utils.getTimeSince(props.activityLog.date)}
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(props.activityLog.basicHtml)
          }}
        />
      </div>
    </div>
  );
};

export default ActivityLog;

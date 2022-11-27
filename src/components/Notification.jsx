import React from "react";
import Reaction from "../baseComponents/Reaction";
import Follow from "../baseComponents/Follow";
import data from "../data.json";
import Group from "../baseComponents/Group";
import Message from "../baseComponents/Message";
import Comment from "../baseComponents/Comment";

function Notifications() {
  let unreadNotif = 0;
  for (let index = 0; index < data.results.length; index++) {
    if (JSON.parse(data.results[index].read) === false) {
      unreadNotif++;
    }
  }

  const renderNotifications = data.results.map((result) => {
    switch (result.type) {
      case "reaction":
        return <Reaction />;

      case "follow":
        return <Follow />;

      case "group":
        return <Group />;

      case "message":
        return <Message />;

      case "comment":
        return <Comment />;

      default:
        break;
    }
  });

  return (
    <div className="mx-auto w-screen bg-white md:w-[680px] md:rounded-2xl lg:w-[680px] lg:rounded-2xl">
      {/* Header section for notifications and masrk all button */}
      <div className="mx-6 my-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-left text-xl font-semibold">Notifications</h1>
          <div className="rounded-md bg-primBlue text-center text-sm text-white">
            <p className="px-3 py-[2px]">{unreadNotif}</p>
          </div>
        </div>
        <button
          type="button"
          className="text-sm font-medium text-grayishBlue hover:text-primBlue"
        >
          Mark all as read
        </button>
      </div>
      {/* Header section ends here */}

      {/* Notifications section start */}
      <div id="notifications-section" className="mx-6 mb-6 grid gap-2">
        {/* <Reaction />
        <Follow />
        <Group />
        <Message />
        <Comment /> */}
        {renderNotifications}
      </div>
      {/* Notifications section end */}
    </div>
  );
}

export default Notifications;

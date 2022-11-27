import React from "react";
import Reaction from "../baseComponents/Reaction";
import Follow from "../baseComponents/Follow";
import Group from "../baseComponents/Group";
import Message from "../baseComponents/Message";
import Comment from "../baseComponents/Comment";

function Notifications({ jsData, onHandleReadAll, handleSingleNotifClick }) {
  let unreadNotif = 0;
  for (let index = 0; index < jsData.length; index++) {
    if (JSON.parse(jsData[index].read) === false) {
      unreadNotif++;
    }
  }

  const renderNotifications = jsData.map((result) => {
    let element;
    switch (result.type) {
      case "reaction":
        element = (
          <Reaction
            key={result.id}
            id={result.id}
            person={result.person}
            pic={result.pic}
            post={result.post}
            time={result.time}
            read={result.read}
            handleClick={handleSingleNotifClick}
          />
        );
        break;
      case "follow":
        element = (
          <Follow
            key={result.id}
            id={result.id}
            person={result.person}
            pic={result.pic}
            time={result.time}
            read={result.read}
            handleClick={handleSingleNotifClick}
          />
        );
        break;
      case "group":
        element = (
          <Group
            key={result.id}
            id={result.id}
            person={result.person}
            pic={result.pic}
            time={result.time}
            read={result.read}
            action={result.action}
            group={result.group}
            handleClick={handleSingleNotifClick}
          />
        );
        break;
      case "message":
        element = (
          <Message
            key={result.id}
            id={result.id}
            person={result.person}
            pic={result.pic}
            time={result.time}
            read={result.read}
            message={result.message}
            handleClick={handleSingleNotifClick}
          />
        );
        break;
      case "comment":
        element = (
          <Comment
            key={result.id}
            id={result.id}
            person={result.person}
            pic={result.pic}
            time={result.time}
            read={result.read}
            url={result.url}
            handleClick={handleSingleNotifClick}
          />
        );
        break;
      default:
        break;
    }
    return element;
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
          onClick={onHandleReadAll}
        >
          Mark all as read
        </button>
      </div>
      {/* Header section ends here */}

      {/* Notifications section start */}
      <div id="notifications-section" className="mx-6 mb-6 grid gap-2">
        {renderNotifications}
      </div>
      {/* Notifications section end */}
    </div>
  );
}

export default Notifications;

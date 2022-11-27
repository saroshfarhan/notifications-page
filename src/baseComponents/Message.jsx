import React from "react";

function Message({ id, person, pic, time, read, message, handleClick }) {
  return (
    <div
      className={`flex items-start justify-start gap-4 rounded-md px-3  py-3 hover:cursor-pointer ${
        JSON.parse(read) === false ? "bg-vlGrayBlue" : ""
      }`}
      onClick={() => handleClick(id)}
    >
      <img src={pic} alt="profile" className="h-[40px] w-[40px] rounded-full" />

      <div>
        <p className="text-base text-grayishBlue">
          <a
            href="www.google.com"
            className="font-semibold text-vdBlue hover:text-primBlue"
          >
            {person}
          </a>{" "}
          sent you a private message{" "}
          {JSON.parse(read) === false ? (
            <span className="ml-1 inline-block h-2 w-2 rounded-full bg-primRed"></span>
          ) : (
            ""
          )}
        </p>
        <p className="text-sm text-grayishBlue">{time}</p>
        <div
          id="message-preview-box"
          className="mt-2 rounded-lg border border-grayishBlue hover:cursor-pointer hover:border-none hover:bg-lGrayBlue-200"
        >
          <p className="px-4 py-4 font-medium text-dGrayBlue ">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;

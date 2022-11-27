import React from "react";
import data from "../data.json";

function Message() {
  return (
    <div
      className={`flex items-start justify-start gap-4 rounded-md  px-3 py-3 ${
        JSON.parse(data.results[3].read) === false ? "bg-vlGrayBlue" : ""
      }`}
    >
      <img
        src={data.results[3].pic}
        alt="profile"
        className="h-[40px] w-[40px] rounded-full"
      />

      <div>
        <p className="text-base text-grayishBlue">
          <a
            href="www.google.com"
            className="font-semibold text-vdBlue hover:text-primBlue"
          >
            {data.results[3].person}
          </a>{" "}
          sent you a private message{" "}
          {JSON.parse(data.results[3].read) === false ? (
            <span className="ml-1 inline-block h-2 w-2 rounded-full bg-primRed"></span>
          ) : (
            ""
          )}
        </p>
        <p className="text-sm text-grayishBlue">{data.results[3].time}</p>
        <div
          id="message-preview-box"
          className="mt-2 rounded-lg border border-grayishBlue"
        >
          <p className="px-4 py-4 font-medium text-dGrayBlue">
            {data.results[3].message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;

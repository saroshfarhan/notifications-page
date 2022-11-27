import React from "react";

function Comment({ person, pic, time, read, url }) {
  return (
    <div
      className={`flex items-start justify-start gap-4 rounded-md  px-3 py-3 md:items-center lg:items-center ${
        JSON.parse(read) === false ? "bg-vlGrayBlue" : ""
      }`}
    >
      <img src={pic} alt="profile" className="h-[40px] w-[40px] rounded-full" />
      <div className="flex items-start justify-between md:w-[600px] lg:w-[600px] lg:items-center ">
        <div id="content">
          <p className="text-base text-grayishBlue">
            <a
              href="www.google.com"
              className="font-semibold text-vdBlue hover:text-primBlue"
            >
              {person}
            </a>{" "}
            commented on your picture{" "}
            {JSON.parse(read) === false ? (
              <span className="ml-1 inline-block h-2 w-2 rounded-full bg-primRed"></span>
            ) : (
              ""
            )}
          </p>
          <p className="text-sm text-grayishBlue">{time}</p>
        </div>
        <img
          src={url}
          alt="commeted post"
          className="h-[45px] w-[45px] rounded-lg hover:cursor-pointer hover:border-2 hover:border-lGrayBlue-200"
        />
      </div>
    </div>
  );
}

export default Comment;

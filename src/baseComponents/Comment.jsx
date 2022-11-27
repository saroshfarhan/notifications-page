import React from "react";
import data from "../data.json";

function Comment() {
  return (
    <div
      className={`flex items-start justify-start gap-4 rounded-md  px-3 py-3 md:items-center lg:items-center ${
        JSON.parse(data.results[4].read) === false ? "bg-vlGrayBlue" : ""
      }`}
    >
      <img
        src={data.results[4].pic}
        alt="profile"
        className="h-[40px] w-[40px] rounded-full"
      />
      <div className="flex items-start justify-between md:w-[600px] lg:w-[600px] lg:items-center ">
        <div id="content">
          <p className="text-base text-grayishBlue">
            <a
              href="www.google.com"
              className="font-semibold text-vdBlue hover:text-primBlue"
            >
              {data.results[4].person}
            </a>{" "}
            commented on your picture{" "}
            {JSON.parse(data.results[4].read) === false ? (
              <span className="ml-1 inline-block h-2 w-2 rounded-full bg-primRed"></span>
            ) : (
              ""
            )}
          </p>
          <p className="text-sm text-grayishBlue">{data.results[4].time}</p>
        </div>
        <img
          src={data.results[4].url}
          alt="commeted post"
          className="h-[45px] w-[45px]"
        />
      </div>
    </div>
  );
}

export default Comment;

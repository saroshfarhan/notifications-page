import React from "react";
import data from "../data.json";

function Reaction() {
  return (
    <div
      className={`flex items-start justify-center gap-4 rounded-md  px-3 py-3 md:items-center lg:items-center ${
        JSON.parse(data.results[0].read) === false ? "bg-vlGrayBlue" : ""
      }`}
    >
      <img
        src={data.results[0].pic}
        alt="profile"
        className="h-[40px] w-[40px] rounded-full"
      />
      <div>
        <p className="text-base text-grayishBlue">
          <a
            href="www.google.com"
            className="font-semibold text-vdBlue hover:text-primBlue"
          >
            {data.results[0].person}
          </a>{" "}
          reacted to your recent post{" "}
          <span className="font-semibold text-dGrayBlue hover:cursor-pointer hover:text-primBlue">
            {data.results[0].post}
          </span>
          {JSON.parse(data.results[0].read) === false ? (
            <span className="ml-1 inline-block h-2 w-2 rounded-full bg-primRed"></span>
          ) : (
            ""
          )}
        </p>
        <p className="text-sm text-grayishBlue">{data.results[0].time}</p>
      </div>
    </div>
  );
}

export default Reaction;
import React from "react";
import data from "../data.json";

function Group() {
  return (
    <div
      className={`flex items-start justify-start gap-4 rounded-md  px-3 py-3 md:items-center lg:items-center ${
        JSON.parse(data.results[2].read) === false ? "bg-vlGrayBlue" : ""
      }`}
    >
      <img
        src={data.results[2].pic}
        alt="profile"
        className="h-[40px] w-[40px] rounded-full"
      />
      <div>
        <p className="text-base text-grayishBlue">
          <a
            href="www.google.com"
            className="font-semibold text-vdBlue hover:text-primBlue"
          >
            {data.results[2].person}
          </a>{" "}
          has {data.results[2].action} your group{" "}
          <a
            href="www.google.com"
            className="font-semibold text-primBlue hover:cursor-pointer"
          >
            {data.results[2].group}
          </a>
          {JSON.parse(data.results[2].read) === false ? (
            <span className="ml-1 inline-block h-2 w-2 rounded-full bg-primRed"></span>
          ) : (
            ""
          )}
        </p>
        <p className="text-sm text-grayishBlue">{data.results[2].time}</p>
      </div>
    </div>
  );
}

export default Group;

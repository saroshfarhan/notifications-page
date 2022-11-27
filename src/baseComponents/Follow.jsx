import React from "react";

function Follow({ person, pic, time, read }) {
  return (
    <div
      className={`flex items-start justify-start gap-4 rounded-md  px-3 py-3 md:items-center lg:items-center ${
        JSON.parse(read) === false ? "bg-vlGrayBlue" : ""
      }`}
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
          followed you{" "}
          {JSON.parse(read) === false ? (
            <span className="ml-1 inline-block h-2 w-2 rounded-full bg-primRed"></span>
          ) : (
            ""
          )}
        </p>
        <p className="text-sm text-grayishBlue">{time}</p>
      </div>
    </div>
  );
}

export default Follow;

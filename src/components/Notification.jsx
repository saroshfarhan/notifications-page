import React from "react";

function Notifications() {
  return (
    <div className="mx-auto w-screen bg-white md:w-[640px] md:rounded-2xl lg:w-[640px] lg:rounded-2xl">
      {/* Header section for notifications and masrk all button */}
      <div className="mx-6 my-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-left text-xl font-semibold">Notifications</h1>
          <div className="rounded-md bg-primBlue text-center text-sm text-white">
            <p className="px-3 py-[2px]">3</p>
          </div>
        </div>
        <button type="button" className="text-sm font-medium text-grayishBlue">
          Mark all as read
        </button>
      </div>
      {/* Header section ends here */}

      {/* Notifications section start */}
      <div id="notifications-section" className="mx-6 mb-6">
        <h1>Notifications from base components</h1>
      </div>
      {/* Notifications section end */}
    </div>
  );
}

export default Notifications;

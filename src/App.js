import { useState } from "react";
import Notifications from "./components/Notification";
import data from "./data.json";
//import dataValidated from "./dataValidated.json";

function App() {
  const dataObj = JSON.parse(JSON.stringify(data.results));
  const [dataArray, setDataArray] = useState(dataObj);

  function handleAllRead() {
    const makeAllRead = dataArray.map((obj) => {
      if (obj.read === "false") {
        return { ...obj, read: true };
      }
      return obj;
    });
    setDataArray(makeAllRead);
  }

  function handleSingleNotifClick(id) {
    const notifRead = dataArray.map((obj) => {
      if (obj.id === id) {
        return { ...obj, read: true };
      } else {
        return obj;
      }
    });
    setDataArray(notifRead);
  }

  return (
    <main className="container mx-auto flex items-center justify-center">
      <Notifications
        jsData={dataArray}
        onHandleReadAll={handleAllRead}
        handleSingleNotifClick={handleSingleNotifClick}
      />
    </main>
  );
}

export default App;

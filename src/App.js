import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

/* Visit www.reactchallenges.live */

/* Instructions: 
   Create a Progress Bar that should fill based on the input percentage value
*/

export default function App() {
  const [lightStatus, setLightStatus] = useState([true, true, true]);
  const [lightShow, setLightShow] = useState(false);

  useEffect(() => {
    if (lightShow) {
      let iv = setInterval(() => {
        let index = lightStatus.indexOf(true);
        console.log(index);
        let newStatus = [false, false, false];
        if (index == 2) {
          index = 0;
          newStatus[index] = true;
        } else {
          newStatus[index + 1] = true;
        }
        setLightStatus(newStatus);
      }, 1000);

      return () => clearInterval(iv);
    }
  }, [lightShow, lightStatus]);

  let toggleLight = function (index) {
    let newStatus = [...lightStatus];
    newStatus[index] = !newStatus[index];
    setLightStatus(newStatus);
    console.log(newStatus);
  };

  let turnOnShow = function () {
    setLightStatus([true, false, false]);
    setLightShow(true);
  };

  return (
    <>
      <div className="App">
        <h1>Traffic Light</h1>
        <div className="trafficlight">
          <div
            className="light"
            onClick={() => toggleLight(0)}
            style={{ backgroundColor: lightStatus[0] ? "red" : "black" }}
          ></div>
          <div
            className="light"
            onClick={() => toggleLight(1)}
            style={{ backgroundColor: lightStatus[1] ? "yellow" : "black" }}
          ></div>
          <div
            className="light"
            onClick={() => toggleLight(2)}
            style={{ backgroundColor: lightStatus[2] ? "green" : "black" }}
          ></div>
        </div>

        <button onClick={turnOnShow}>Light show</button>
      </div>
    </>
  );
}

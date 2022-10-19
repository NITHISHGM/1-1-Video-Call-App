import React, { useEffect, useRef, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { generateToken, randomId, randomName } from "./Util";

const App = () => {
  const myMeeting = useRef("");
  const [token, settoken] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { token } = await generateToken(randomId(6), "7667", randomName());
      settoken(token);
    };
    getData();
  }, []);

  useEffect(() => {
    if (token && myMeeting.current) {
      const inst = ZegoUIKitPrebuilt.create(token);
      inst.joinRoom({
        container: myMeeting.current,
      });
    }
  }, [token, myMeeting.current]);

  return (
    <div>
      <div ref={myMeeting}></div>
    </div>
  );
};

export default App;

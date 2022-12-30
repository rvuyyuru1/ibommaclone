import React, { Suspense } from "react";
import ReactPlayer from "react-player";
const Palyer = () => {
  return (
    <Suspense>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="100%"
        />
      </div>
    </Suspense>
  );
};

export default Palyer;

import React from "react";
import Header from "../components/header";

const about = () => {
  return (
    <div>
      <Header />

      <h1 className="text-3xl font-bold my-4 p-4">About</h1>
      <div className="my-2 p-4 ">
        <p className="my-1">
          Imovies is an exclusive Telugu Movies online video streaming and
          download platform.
        </p>
        <p className="my-1">
          Our extensive content library includes Telugu movies across genres.
          Out content is regularly added and is suited exclusively for the
          Telugu audience.
        </p>
        <p className="my-1">
          Available on devices including Mobile, Tablet, Web, Laptop and PCs,
          now discover and watch Imovies anywhere and everywhere. Download and
          watch your favorite content offline at your convenience.
        </p>
        <p className="my-1">
          We offer a comfortable and friendly user experience with highly
          evolved video streaming technology at amazing speed and clear sounds.
          Navigation, Seamless Video playback, Smart Content Search &amp;
          recommendation and much more. All you need is a compatible smart
          mobile.
        </p>
        <p className="my-1">Imovies – Where Quality and Clarity Matters.</p>
      </div>
    </div>
  );
};

export default about;

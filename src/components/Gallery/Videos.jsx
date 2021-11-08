import React from "react";

export const Videos = () => {
  return (
    <div className="videos p">
      <h1>Videók</h1>
      <div class="video-wrap">
        <div className="video-container">
          <iframe
            title="bme-napok"
            src="https://www.youtube.com/embed/P-L-grmh8-U"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

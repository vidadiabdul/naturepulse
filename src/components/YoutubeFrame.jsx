import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./etc.css"

const YoutubeEmbed = ({ embedId, quality }) => {
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player("youtube-player", {
        videoId: embedId,
        events: {
          onReady: (event) => {
            event.target.setPlaybackQuality(quality);
            event.target.playVideo();
          }
        },
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          loop: 1,
          playlist: embedId,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
               }
      });
    };
  }, [embedId, quality]);

  return (
    <div className="video-container">
      <div className="video-responsive">
        <div id="youtube-player"></div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  quality: PropTypes.oneOf([
    "default",
    "small",
    "medium",
    "large",
    "hd720",
    "hd1080",
    "hd1440",
    "hd2160"
  ])
};

YoutubeEmbed.defaultProps = {
  quality: "hd1080"
};


export default YoutubeEmbed;
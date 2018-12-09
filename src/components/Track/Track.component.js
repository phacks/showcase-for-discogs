import React from 'react';
import Style from './Track.style';

const Track = (props) => (
  <Style>
    <button
      type="button"
      className="play-pause"
      onClick={() => props.playTitle(props.track.title)}
    >
      {props.id !== props.nowPlaying ? (
        <span className="play-pause__playhead" />
      ) : (
        <span className="play-pause__pausehead" />
      )}
    </button>
    {props.track.title}
  </Style>
);

export default Track;

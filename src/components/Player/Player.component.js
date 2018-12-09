import React from 'react';

const Player = ({ playerQuery }) => (
  <iframe
    title={`${playerQuery}`}
    id="ytplayer"
    type="text/html"
    width="318"
    height="318"
    src={`https://www.youtube.com/embed?listType=search&amp;color=white&amp;autoplay=1&amp;list=${playerQuery}`}
    frameborder="0"
    allow="autoplay; encrypted-media"
  />
);

export default Player;

import React, { Component } from 'react';
import Track from '../Track';
import Player from '../Player';
import Style from './Release.style';

class Release extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTracklistOpen: false,
      isPlayerOpen: false,
      playerQuery: ''
    };
  }

  toggleTracklist = () =>
    this.setState({ isTracklistOpen: !this.state.isTracklistOpen });

  playTitle = (title) => {
    const playerQuery = encodeURIComponent(
      `${this.props.release.artist} ${title}`
    );
    const isPlayerOpen = !(playerQuery === this.state.playerQuery);
    this.setState({
      isPlayerOpen,
      playerQuery
    });
  };

  render() {
    return (
      <Style>
        {!this.state.isPlayerOpen ? (
          <img
            src={this.props.release.imageUrl}
            alt={`${this.props.release.artist} - ${this.props.release.title}`}
          />
        ) : (
          <Player playerQuery={this.state.playerQuery} />
        )}
        <figcaption>
          <span className="artist">{this.props.release.artist}</span>
          <br />
          <span className="title">{this.props.release.title}</span>
        </figcaption>
        <button onClick={this.toggleTracklist}>
          {this.state.isTracklistOpen ? 'Hide' : 'See'} tracklist
        </button>
        {this.state.isTracklistOpen && (
          <ul>
            {this.props.release.tracklist.map((track, index) => {
              const id = encodeURIComponent(
                `${this.props.release.artist} ${track.title}`
              );
              return (
                <Track
                  key={id}
                  id={id}
                  track={track}
                  playTitle={this.playTitle}
                  nowPlaying={
                    this.state.isPlayerOpen ? this.state.playerQuery : null
                  }
                />
              );
            })}
          </ul>
        )}
      </Style>
    );
  }
}

export default Release;

import styled from 'styled-components';

export default styled.li`
  list-style-type: none;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  .play-pause {
    font-family: 'Lato', sans-serif;
    display: inline-block;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 5px 10px 5px 0px;
    border: 1px solid #444;
    border-radius: 50%;
    outline: 0;
    background: transparent;
    position: relative;
    top: 2px;
  }

  .play-pause__playhead {
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 0 8px 15px;
    border-color: transparent transparent transparent #444;
    margin: auto;
    position: relative;
    left: 1px;
  }

  .play-pause__pausehead {
    display: flex;
    width: 15px;
    height: 15px;
    position: relative;
    margin: auto;

    &:before,
    &:after {
      content: '';
      flex: 1;
      width: 50%;
      height: 100%;
      background: #444;
    }

    &:after {
      margin-left: 4px;
    }
  }
`;

import styled from 'styled-components';

export default styled.figure`
  border: 4px solid #444;
  margin: 0 2px 15px;
  padding: 15px;
  padding-bottom: 10px;
  display: inline-block;
  -webkit-column-break-inside: avoid;
  -webkit-backface-visibility: hidden;

  .artist {
    font-weight: bold;
    font-size: 2em;
  }
  .title {
    font-size: 1.5em;
  }
  ul {
    margin: 10px 0;
    padding: 0;
    text-align: left;
  }
  button {
    background-color: white;
    font-size: 0.9em;
    border: none;
    background-position: 0 22px;
    padding: 0;
    padding-bottom: 10px;
    margin-top: 10px;
    background-repeat: repeat-x;
    background-size: auto 3px;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='Squiggle-svg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cpath fill='none' stroke='%23444' stroke-width='1' class='st0' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
    cursor: pointer;
    &:hover {
      transition: background-position 1s;
      background-position: 60px 22px;
    }
  }

  img {
    width: 100%;
    height: auto;
    padding-bottom: 15px;
    margin-bottom: 5px;
  }
  
  figcaption {
    font-size: 0.9rem;
    color: #444;
    line-height: 1.5;
  }
  
  small {
    font-size: 1rem;
    float: right;
    text-transform: uppercase;
    color: #aaa;
  }
  
  small a {
    color: #666;
    text-decoration: none;
    transition: 0.4s color;
  }
`;

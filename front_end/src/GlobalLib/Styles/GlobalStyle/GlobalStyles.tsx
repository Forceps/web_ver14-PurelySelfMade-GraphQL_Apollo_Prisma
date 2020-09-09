import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

interface GlobalStyleProps {
  theme: any;
}
export default createGlobalStyle<GlobalStyleProps>`
  ${reset};
  * {
    box-sizing: border-box;
    transition-property: background-color;
    transition-duration: 0.12s;
    transition-timing-function: ease;
  }
  *::selection {
    background: rgba(45, 52, 54, 0.2);
  }
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.balckColor};
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  textarea {
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a {
    color: ${(props) => props.theme.blueColor};
    text-decoration: none;
  }
  input:focus{
    outline:none;
  }
  input {    
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  img {
    border: 0;
  }
  button {
    border: 1px solid black;
    background-color: transparent;
  }
  video {    
    object-fit: cover;
  }
`;

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../IteratePattern/WH100per.scss";

interface GlobalStyleProps {
  theme: any;
}
export default createGlobalStyle<GlobalStyleProps>`
  ${reset};
  * {
    box-sizing: border-box;
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
  img {
    border: 0;
  }
`;

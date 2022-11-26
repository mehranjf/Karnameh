import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import { size } from "./size";

const GlobalStyle = createGlobalStyle`
html{
        font-size: 8px;
        box-sizing: border-box;
        font-family: 'IRANSans';
    }
  body {
    margin: 0;
    padding: 0;
    font-family: IRANSans;
    background-color: ${colors.gray.light};
  }
  *{
        box-sizing: border-box;
    }
  li{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
  .container{
    width: ${size.constainer};
    margin: 0 auto;
    max-width: 100%;
  }
`;

export default GlobalStyle;

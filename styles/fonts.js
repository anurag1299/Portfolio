import { css } from "styled-components";

import JETBRAINSMONORegularTTF from "@fonts/JetBrainsMono-Regular.ttf";
import JETBRAINSMONORegularWOFF from "@fonts/JetBrainsMono-Regular.woff";
import JETBRAINSMONORegularWOFF2 from "@fonts/JetBrainsMono-Regular.woff2";
import JETBRAINSMONOMediumTTF from "@fonts/JetBrainsMono-Medium.ttf";
import JETBRAINSMONOMediumWOFF from "@fonts/JetBrainsMono-Medium.woff";
import JETBRAINSMONOMediumWOFF2 from "@fonts/JetBrainsMono-Medium.woff2";
import JETBRAINSMONOMediumItalicTTF from "@fonts/JetBrainsMono-Medium-Italic.ttf";
import JETBRAINSMONOMediumItalicWOFF from "@fonts/JetBrainsMono-Medium-Italic.woff";
import JETBRAINSMONOMediumItalicWOFF2 from "@fonts/JetBrainsMono-Medium-Italic.woff2";
import JETBRAINSMONOItalicTTF from "@fonts/JetBrainsMono-Italic.ttf";
import JETBRAINSMONOItalicWOFF from "@fonts/JetBrainsMono-Italic.woff";
import JETBRAINSMONOItalicWOFF2 from "@fonts/JetBrainsMono-Italic.woff2";
import JETBRAINSMONOExtraBoldTTF from "@fonts/JetBrainsMono-ExtraBold.ttf";
import JETBRAINSMONOExtraBoldWOFF from "@fonts/JetBrainsMono-ExtraBold.woff";
import JETBRAINSMONOExtraBoldWOFF2 from "@fonts/JetBrainsMono-ExtraBold.woff2";
import JETBRAINSMONOExtraBoldItalicTTF from "@fonts/JetBrainsMono-ExtraBold-Italic.ttf";
import JETBRAINSMONOExtraBoldItalicWOFF from "@fonts/JetBrainsMono-ExtraBold-Italic.woff";
import JETBRAINSMONOExtraBoldItalicWOFF2 from "@fonts/JetBrainsMono-ExtraBold-Italic.woff2";
import JETBRAINSMONOBoldTTF from "@fonts/JetBrainsMono-Bold.ttf";
import JETBRAINSMONOBoldWOFF from "@fonts/JetBrainsMono-Bold.woff";
import JETBRAINSMONOBoldWOFF2 from "@fonts/JetBrainsMono-Bold.woff2";
import JETBRAINSMONOBoldItalicTTF from "@fonts/JetBrainsMono-Bold-Italic.ttf";
import JETBRAINSMONOBoldItalicWOFF from "@fonts/JetBrainsMono-Bold-Italic.woff";
import JETBRAINSMONOBoldItalicWOFF2 from "@fonts/JetBrainsMono-Bold-Italic.woff2";

const FontFaces = css`
  @font-face {
    font-family: "JetBrains Mono";
    src: url(${JETBRAINSMONORegularWOFF2}) format("woff2"),
      url(${JETBRAINSMONORegularTTF}) format("truetype"),
      url(${JETBRAINSMONORegularWOFF}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "JetBrains Mono";
    src: url(${JETBRAINSMONOItalicWOFF2}) format("woff2"),
      url(${JETBRAINSMONOItalicTTF}) format("truetype"),
      url(${JETBRAINSMONOItalicWOFF}) format("woff");
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: "JetBrains Mono";
    src: url(${JETBRAINSMONOMediumWOFF2}) format("woff2"),
      url(${JETBRAINSMONOMediumTTF}) format("truetype"),
      url(${JETBRAINSMONOMediumWOFF}) format("woff");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "JetBrains Mono";
    src: url(${JETBRAINSMONOMediumItalicWOFF2}) format("woff2"),
      url(${JETBRAINSMONOMediumItalicTTF}) format("truetype"),
      url(${JETBRAINSMONOMediumItalicWOFF}) format("woff");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "JetBrains Mono";
    src: url(${JETBRAINSMONOBoldWOFF2}) format("woff2"),
      url(${JETBRAINSMONOBoldTTF}) format("truetype"),
      url(${JETBRAINSMONOBoldWOFF}) format("woff");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "JetBrains Mono";
    src: url(${JETBRAINSMONOBoldItalicWOFF2}) format("woff2"),
      url(${JETBRAINSMONOBoldItalicTTF}) format("truetype"),
      url(${JETBRAINSMONOBoldItalicWOFF}) format("woff");
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: "JetBrains Mono";
    src: url(${JETBRAINSMONOExtraBoldWOFF2}) format("woff2"),
      url(${JETBRAINSMONOExtraBoldTTF}) format("truetype"),
      url(${JETBRAINSMONOExtraBoldWOFF}) format("woff");
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: "JetBrains Mono";
    src: url(${JETBRAINSMONOExtraBoldItalicWOFF2}) format("woff2"),
      url(${JETBRAINSMONOExtraBoldItalicTTF}) format("truetype"),
      url(${JETBRAINSMONOExtraBoldItalicWOFF}) format("woff");
    font-weight: 800;
    font-style: italic;
  }
`;

export default FontFaces;

import { createGlobalStyle } from "styled-components";
import Agrandir from "./assets/Agrandir-Regular.otf";
import ArgestaHairline from "./assets/ArgestaHairline-Regular.otf";

export default createGlobalStyle`

  @font-face {
    font-family: "Agrandir";
    src: url(${Agrandir}) format("opentype");
    font-display: auto;
  }

  @font-face {
    font-family: "Argesta Hairline";
    src: url(${ArgestaHairline}) format("opentype");
    font-display: auto;
  }

  :root {
    /* Colors */
    --primary: #FFFFFF;
    --secondary:#272925;
    --tertiary:#C6FFAB;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, button, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
  }

  body {
    line-height: 1;
    font-size: 1.6rem;
    color: var(--primary);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
    font-family: "Agrandir";
    overflow-x: hidden;
  }

  h1, h2, i {
    font-family: "Argesta Hairline";
  }

  h1 {
    font-size: 15.6rem;
  }

  h2 {
    font-size: 5.4rem;
    padding: 2.5rem 0;
  }

  h3 {
  }

  h4 {
  }

  p {
  }

  ol, ul {
    list-style: none;
  }

  a, button {
    text-decoration: none;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  button {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  // Scrollbar

  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--secondary) transparent;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--secondary);
    border: 3px solid transparent;
  }
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,700,800,900&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
}

html {
  scroll-behavior: smooth;
}

body {
  width: 100vw;
  height: 100vh;
  position: relative;
}

h1 {
  font-size: 3rem;
  font-weight: 200;
}

`;

export default GlobalStyle;

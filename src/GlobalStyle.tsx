import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
	margin:0;
	padding:0;
	box-sizing:border-box;
  }
  
  body, html {
	background:#f7f1f1;
	font-size:1.1rem;
	font-family:'Quicksand', sans-serif;
	height:100%;
  }
`;

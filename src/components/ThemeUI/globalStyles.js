import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'JinduInuFont', sans-serif;
  }

  h1 {

  }

  h2 {
    line-height: 1.5;
    font-size: 17px;
    color: ${({ theme }) => theme.p} !important;
  }

  h3 {

  }

  p {
    color: ${({ theme }) => theme.p} !important;
  }

  .backgroundColor {
    background: ${({ theme }) => theme.backgroundColor};
  }



span {
    color: ${({ theme }) => theme.p} !important;
  }

  span.tagline {
  color: ${({ theme }) => theme.tagline} !important;
}

i.underline {
  color: ${({ theme }) => theme.p} !important;

}


ul.nav_list .bx{
  color: ${({ theme }) => theme.icons} ;
 }


  ul.nav_list {
    background: ${({ theme }) => theme.nav_list};
    border-right: 1px solid rgba(133,133,133,0.1);
  }

 .footerBg{
  background: ${({ theme }) => theme.footer} ;
 }
 .footerColor{
  color: ${({ theme }) => theme.footercolor} ;
 }

  .navbar {
    background: ${({ theme }) => theme.nav} ;
  }

  h2.logoMain {
    color: ${({ theme }) => theme.logoMain} !important;
  }

  p.descriptionSwap {
    color: ${({ theme }) => theme.descriptionSwap} !important;
  }

  a.linkcolor {
    color: ${({ theme }) => theme.pa} !important;
  }
 .linkcolor {
    color: ${({ theme }) => theme.pa} !important;
  }
  `;

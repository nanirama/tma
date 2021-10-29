import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif !important;
    font-weight:400;
    background: #fcfcfc;
    color:#7C838E;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Roboto', sans-serif !important; color:#2D3748; font-weight:900; margin-bottom:15px;
  }
  h1{
      font-size:40px;
      line-height:50px;
      @media (max-width: 767px) {
        font-size:22px;
        line-height:30px;
      }
  }
  h2{
    font-size:34px !important;
    line-height:46px;
    text-transform:capitalize;
    @media (max-width: 767px) {
      font-size:22px !important;
      line-height:32px;
    }
}
h3{
  font-size:30px;
  line-height:40px;
  @media (max-width: 767px) {
    font-size:23px;
    line-height:26px;
  }

}
h4{
    font-size:20px;
    line-height:24px;
    @media (max-width: 767px) {
      font-size:18px;
      line-height:20px;
    }

}
p{
    font-size:18px;
    line-height:30px;
    font-weight:400;
    color:#7C838E;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 767px) {
      font-size:16px;
      line-height:26px;
    }
}
p b{ 
  font-weight:500;
}
p.small{ 
  font-size:14px; 
  line-height:24px;
}

`;
 
export default GlobalStyle;
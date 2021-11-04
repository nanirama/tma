import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import astore from "../images/astore.svg";
import gplay from "../images/gplay.svg";

const Footer = () => {
  return (
  <Wrapper>
     <Container>
        <FooterTop>
           <Grid>
              <Item>
                 <Heading>Take Me Abroad</Heading>
              </Item>
              <Item>
                 <Appstore>
                    <Image>
                       <a href="https://play.google.com/store/apps/details?id=com.takemeabroad&hl=en_IN&gl=US" target="_blank" rel="noreferrer">
                       <img src={astore}/>
                        </a>
                    </Image>
                    <Image>
                    <img src={gplay}/>
                    </Image>
                 </Appstore>
              </Item>
           </Grid>
        </FooterTop>
     </Container>
     <FooterBottom>
        <Container>
           <Grid>
              <Item>
                 <Links id="f_nav">
                    <li>
                       <Link to="/terms-and-conditions">
                       Terms and Conditions
                       </Link>
                    </li>
                    <li>
                       <Link to="/privacy-policy">
                       Privacy Policy
                       </Link>
                    </li>
                    <li className="show-desk">
                       <a href="mailto:info@takemeabroad.in">
                       info@takemeabroad.in
                       </a>
                    </li>
                    <li className="show-mobile">
                       <a href="mailto:info@takemeabroad.in">
                       Contact
                       </a>
                    </li>
                 </Links>
              </Item>
              <Item>
                 <SocialIcons>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                      <SvgIcon>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7463 26.2462V16.0012H20.2025L20.7163 11.99H16.7463V9.43497C16.7463 8.27747 17.0688 7.48497 18.73 7.48497H20.835V3.90872C19.8108 3.79896 18.7813 3.74596 17.7513 3.74997C14.6963 3.74997 12.5988 5.61497 12.5988 9.03872V11.9825H9.16504V15.9937H12.6063V26.2462H16.7463Z" fill="#455A64"/>
</svg>
</SvgIcon>
                    </a>
                    <a href="https://twitter.com/takemeabroad_?t=QOxYOYpaz8VF3MdOhCPYmg&s=09" target="_blank" rel="noreferrer">
                    <SvgIcon>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.5412 9.99618C24.5575 10.2149 24.5575 10.4324 24.5575 10.6499C24.5575 17.3062 19.4912 24.9762 10.2325 24.9762C7.38 24.9762 4.73 24.1499 2.5 22.7149C2.905 22.7612 3.295 22.7774 3.71625 22.7774C5.98249 22.7829 8.18456 22.0251 9.9675 20.6262C8.91678 20.6072 7.89822 20.2605 7.05405 19.6346C6.20987 19.0087 5.58223 18.1348 5.25875 17.1349C5.57 17.1812 5.8825 17.2124 6.21 17.2124C6.66125 17.2124 7.115 17.1499 7.53625 17.0412C6.39595 16.8109 5.37059 16.1929 4.63452 15.292C3.89845 14.3912 3.49712 13.2632 3.49875 12.0999V12.0374C4.17 12.4112 4.94875 12.6449 5.77375 12.6762C5.08261 12.2169 4.5159 11.5937 4.12417 10.8622C3.73245 10.1306 3.52789 9.3135 3.52875 8.48368C3.52875 7.54868 3.7775 6.69118 4.21375 5.94368C5.47892 7.49996 7.05688 8.77313 8.84542 9.68075C10.634 10.5884 12.5932 11.1102 14.5962 11.2124C14.5187 10.8374 14.4712 10.4487 14.4712 10.0587C14.4709 9.39738 14.6009 8.7425 14.8538 8.13148C15.1068 7.52046 15.4776 6.96528 15.9452 6.49767C16.4128 6.03006 16.968 5.6592 17.579 5.40628C18.1901 5.15336 18.8449 5.02335 19.5062 5.02368C20.9562 5.02368 22.265 5.63118 23.185 6.61368C24.3122 6.3957 25.3932 5.98421 26.38 5.39743C26.0043 6.56095 25.2172 7.54756 24.1662 8.17243C25.166 8.05841 26.143 7.7955 27.065 7.39243C26.3764 8.39631 25.5231 9.27661 24.5412 9.99618V9.99618Z" fill="#455A64"/>
</svg>
</SvgIcon>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    <SvgIcon>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.22865 8.99637C7.73915 8.99637 8.96365 7.77187 8.96365 6.26137C8.96365 4.75087 7.73915 3.52637 6.22865 3.52637C4.71815 3.52637 3.49365 4.75087 3.49365 6.26137C3.49365 7.77187 4.71815 8.99637 6.22865 8.99637Z" fill="#455A64"/>
<path d="M11.5462 11.0688V26.2426H16.2574V18.7388C16.2574 16.7588 16.6299 14.8413 19.0849 14.8413C21.5061 14.8413 21.5362 17.1051 21.5362 18.8638V26.2438H26.2499V17.9226C26.2499 13.8351 25.3699 10.6938 20.5924 10.6938C18.2987 10.6938 16.7612 11.9526 16.1324 13.1438H16.0687V11.0688H11.5462V11.0688ZM3.86865 11.0688H8.5874V26.2426H3.86865V11.0688Z" fill="#455A64"/>
</svg>
</SvgIcon>
                    </a>
                    <a href="https://www.instagram.com/invites/contact/?i=13dy99h2b6dr9&utm_content=mny4qx0" target="_blank" rel="noreferrer">
                    <SvgIcon>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.1836 10.3813C26.171 9.4346 25.9938 8.49729 25.6598 7.61132C25.3703 6.86401 24.928 6.18532 24.3613 5.61861C23.7946 5.0519 23.1159 4.60963 22.3686 4.32007C21.494 3.99176 20.5701 3.81424 19.6361 3.79507C18.4336 3.74132 18.0523 3.72632 14.9998 3.72632C11.9473 3.72632 11.5561 3.72632 10.3623 3.79507C9.42879 3.81439 8.50528 3.9919 7.63109 4.32007C6.88367 4.60943 6.20487 5.05162 5.63813 5.61836C5.0714 6.18509 4.6292 6.86389 4.33984 7.61132C4.01088 8.48523 3.83375 9.40896 3.81609 10.3426C3.76234 11.5463 3.74609 11.9276 3.74609 14.9801C3.74609 18.0326 3.74609 18.4226 3.81609 19.6176C3.83484 20.5526 4.01109 21.4751 4.33984 22.3513C4.62969 23.0985 5.07221 23.777 5.63914 24.3435C6.20606 24.91 6.88492 25.352 7.63234 25.6413C8.50413 25.9828 9.42781 26.173 10.3636 26.2038C11.5673 26.2576 11.9486 26.2738 15.0011 26.2738C18.0536 26.2738 18.4448 26.2738 19.6386 26.2038C20.5725 26.1854 21.4965 26.0083 22.3711 25.6801C23.1182 25.3902 23.7967 24.9478 24.3634 24.3811C24.9301 23.8145 25.3724 23.1359 25.6623 22.3888C25.9911 21.5138 26.1673 20.5913 26.1861 19.6551C26.2398 18.4526 26.2561 18.0713 26.2561 15.0176C26.2536 11.9651 26.2536 11.5776 26.1836 10.3813ZM14.9923 20.7526C11.7998 20.7526 9.21359 18.1663 9.21359 14.9738C9.21359 11.7813 11.7998 9.19507 14.9923 9.19507C16.525 9.19507 17.9948 9.8039 19.0785 10.8876C20.1623 11.9714 20.7711 13.4412 20.7711 14.9738C20.7711 16.5064 20.1623 17.9763 19.0785 19.06C17.9948 20.1437 16.525 20.7526 14.9923 20.7526ZM21.0011 10.3288C20.2548 10.3288 19.6536 9.72632 19.6536 8.98132C19.6536 8.80444 19.6884 8.6293 19.7561 8.46589C19.8238 8.30248 19.923 8.154 20.0481 8.02893C20.1732 7.90386 20.3216 7.80465 20.485 7.73697C20.6484 7.66928 20.8236 7.63444 21.0005 7.63444C21.1773 7.63444 21.3525 7.66928 21.5159 7.73697C21.6793 7.80465 21.8278 7.90386 21.9529 8.02893C22.0779 8.154 22.1771 8.30248 22.2448 8.46589C22.3125 8.6293 22.3473 8.80444 22.3473 8.98132C22.3473 9.72632 21.7448 10.3288 21.0011 10.3288Z" fill="#455A64"/>
<path d="M14.9925 18.7275C17.0657 18.7275 18.7463 17.0469 18.7463 14.9737C18.7463 12.9006 17.0657 11.22 14.9925 11.22C12.9194 11.22 11.2388 12.9006 11.2388 14.9737C11.2388 17.0469 12.9194 18.7275 14.9925 18.7275Z" fill="#455A64"/>
</svg>
</SvgIcon>
                    </a>
                 </SocialIcons>
              </Item>
           </Grid>
        </Container>
     </FooterBottom>
     <CopyRight>
        All rights reserved to NORVEL Technologies
     </CopyRight>
  </Wrapper>
  );
  };
export default Footer;
   
const Wrapper = styled.div`
background:#fafafa;
width:100%;
float:left;
 }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding:0 15px
`;
const FooterTop = styled.div`
padding:50px 0;
@media (max-width: 991px) {
    padding:30px 0;
 }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 10px 10px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Item = styled.div`

`;
const Heading = styled.h3`
color:#F84663;
font-weight:700;
font-family: 'Sen', sans-serif !important              ;
margin:15px 0 0 0;
font-size:25px;
@media (max-width: 991px) {
    margin-bottom:20px;
    justify-content:center;
    display:flex;
    
 }
 @media (max-width: 767px) {
  font-size:22px;
  line-height:26px
 }
`;

const Appstore = styled.div`
display:flex;
flex-directon:row;
justify-content:end;
    @media (max-width: 991px) {
       justify-content:center;
    }
`;
const Image = styled.div`
margin-right:20px;
padding:0px;
width:162px;
height:50px;
`;
const FooterBottom = styled.div`
border-top:1px solid #eee;
border-bottom:1px solid #eee;
padding:15px 0;
`;
const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display:flex;
  flex-direction:row;
  @media (max-width: 991px) {
    justify-content:center;
 }
  a {
    text-decoration: none;
    color: #7C838E;
  
  }
  > li.show-desk{
   @media (min-width: 991px) {
      display:block
   }  
   @media (max-width: 991px) {
      display:none
   }  
  }

  > li.show-mobile{
   @media (min-width: 991px) {
      display:none
   }  
   @media (max-width: 991px) {
      display:block
   }  
  }

  > li {
    margin:0;
    &:nth-of-type(1) a{
      padding-left:0;
     }
     &:nth-of-type(1) a:before{
       display:none;
     }

    > a {
      display: grid;
      padding:0 20px;
      height: 100%;
      font-size:16px;
    font-weight:500;
    position:relative;
    line-height:20px;
    margin-top:5px;
    @media (max-width: 767px) {
        font-size:14px;
      }

    }
    a:before{
     content:''; 
     position:absolute;
     left:0;
     top:7px;
     border:3px solid #7C838E;
     border-radius:16px;
    }
  }
`;
const SocialIcons = styled.div`
justify-content:end;
display:flex;
flex-direction:row;
@media (max-width: 991px) {
    justify-content:center;
    margin-top:15px;
}
`;
const SvgIcon = styled.div`
width:30px;
height:30px;
margin-right:30px;
`;
const CopyRight = styled.div`
display:flex;
justify-content:center;
padding:30px 0;
color:#7C838E;
font-size:16px;
line-height:22px;
font-weight: 500;
text-align:center;
@media (max-width: 767px) {
    font-size:14px;
  }
`;
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = ({bgcolor}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
  const el = document.getElementById("nav");
  if (el.style.display === "flex") {
  closeMenu();
  } else {
  openMenu();
  }
  };
  const openMenu = () => {
  const el = document.getElementById("nav");
  el.style.display = "flex";
  setMenuVisible(true);
  };
  const closeMenu = () => {
  const el = document.getElementById("nav");
  el.style.display = "none";
  setMenuVisible(false);
  };
  useEffect(() => {
  const hamburger = document.getElementById("hamburger-icon");
  if (menuVisible) hamburger.classList.add("cross");
  else hamburger.classList.remove("cross");
  }, [menuVisible]);
  return (
  <Wrapper bgcolor={bgcolor}>
     <Container>
        <LogoAndLinks>
           <Logo>
             <Link to="/">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M0 8.78136L16.6217 0V41.2186L0 50V8.78136Z" fill="url(#paint0_linear_322:375)"/>
                 <path d="M33.3779 8.78136L49.9997 0L49.9101 41.2186L33.3779 50V8.78136Z" fill="url(#paint1_linear_322:375)"/>
                 <path d="M33.333 8.78136L16.6663 0V41.2186L33.333 50V8.78136Z" fill="#BF0D07"/>
                 <rect x="16.6221" width="0.0448029" height="41.2186" fill="#D43438"/>
                 <rect x="33.333" y="8.78125" width="0.0448029" height="41.2186" fill="#D43438"/>
                 <defs>
                    <linearGradient id="paint0_linear_322:375" x1="0" y1="50" x2="16.5413" y2="-0.0265979" gradientUnits="userSpaceOnUse">
                       <stop offset="0.114583" stop-color="#BA0F08"/>
                       <stop offset="1" stop-color="#FF020A"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_322:375" x1="33.3331" y1="7.70609" x2="49.9999" y2="40.8153" gradientUnits="userSpaceOnUse">
                       <stop stop-color="#FF020A"/>
                       <stop offset="0.90625" stop-color="#BA0F08"/>
                    </linearGradient>
                 </defs>
              </svg>
              </Link>
           </Logo>
           <MenuIcon onClick={toggleMenu} id="hamburger-icon">
              <div />
              <div />
              <div />
              <div />
           </MenuIcon>
           <Links id="nav">
              <AnchorLink href='#about'>About Us</AnchorLink>
              <AnchorLink href='#features'>Features</AnchorLink>
              {/* <li>
                 <Link to="/aboutus">
                 About Us
                 </Link>
              </li>
              <li>
                 <Link to="/">
                 Features
                 </Link>
              </li> */}
              <LoginBtn>
                 <Link to="/">
                 <span>Home</span>
                 </Link>
              </LoginBtn>
           </Links>
        </LogoAndLinks>
     </Container>
  </Wrapper>
  );
  };
  export default Header;

const Wrapper = styled.div`
background:${props => props.bgcolor};
padding: 10px 0px;
 }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding:20px 15px
`;

const LogoAndLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;

  @media (max-width: 1200px) {
    align-items: center;
  }
`;

const Logo = styled.div`
  display: grid;
  place-items: center;
  width: auto;
`;

const MenuIcon = styled.div`
  width: 36px;
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    height: 3px;
    width: 100%;
    background-color: black;
    transition: 0.3s;
    border-radius: 30px;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

const Links = styled.ul`
  list-style: none;
  grid-auto-flow: column;
  align-items: stretch;
  grid-gap: 10px;
  padding: 0;
  margin: 0;
  display: grid;

  @media (max-width: 991px) {
    display: none;
    flex-direction: column;
    position: absolute;
    background: white;
    left: 0;
    top: 65px;
    width: 100%;
    box-shadow: 0 31px 26px -12px rgb(0 0 0 / 15%);
    padding: 20px 0;
    z-index:999;
  }

  a {
    text-decoration: none;
    color: #2D3748;
    display: grid;
      place-items: center;
      padding: 5px 20px;
      height: 100%;
      font-size:16px;
    font-weight:500;
     
      @media (max-width: 992px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
  }

  > li {
    margin:0;

    > a {
      display: grid;
      place-items: center;
      padding: 5px 20px;
      height: 100%;
      font-size:16px;
    font-weight:500;
     
      @media (max-width: 992px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;

const LoginBtn = styled.li`
  display: grid;
  span {
    transition: 0.3s;
    background:#F84663;
    border-radius: 90px;
    width: 100px;
    height: 100%;
    display: grid;
    place-items: center;
    color:#fff;
    font-size:16px;
    font-weight:500;
    line-height:37px;
     }
`;

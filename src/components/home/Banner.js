import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";
import img from '../../images/banner_bg.png';
import bimg from '../../images/banner_img.png';

import astore from "../../images/astore.svg";
import gplay from "../../images/gplay.svg";
import banImage from "../../images/bannerimg.svg";
import whyUs from "../../images/why-tma.svg";

const Banner = () => {   
   const { BImage } = useStaticQuery(
      graphql`
        query {
         BImage: file(relativePath: {eq: "homebanner.png"}) {
            childImageSharp {
               gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      `
    )
  return(
  <Wrapper>
     <Container>
        <Bannersection>
           <Grid>
              <Item>
                 <h1>Download Official Take Me Abroad App</h1>
                 <p><b>Keep yourself updated with Abroad career options on the go</b></p>
                 <Appstore>
                    <Image>
                        <a href="https://play.google.com/store/apps/details?id=com.takemeabroad&hl=en_IN&gl=US" target="_blank" rel="noreferrer">
                           <img src={gplay}/>
                        </a>
                    </Image>
                    <Image>
                        <a href="#" target="_blank" rel="noreferrer">
                           <img src={astore}/>
                        </a>
                    </Image>                    
                 </Appstore>
              </Item>
              <Item>
                 <BannerImage>
                 <img src={banImage}/> 
                 </BannerImage>
              </Item>
           </Grid>
        </Bannersection>
     </Container>
  </Wrapper>
  )
  }
  export default Banner;

const Wrapper = styled.div`
background:#fafafa;
padding: 10px 0px;
width:100%;
float:left;
 }
`;
const Container = styled.div`
  max-width: 1170px;
  margin: auto;
  padding:0 15px;
`;

const Bannersection = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:80px 0px;
display:flex;
width:100%;
float:left;

@media (max-width: 991px) {
    padding:50px 0;
    text-align:center;
}

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 20px 40px;
  justify-content:center;
align-items:center;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const BannerImage = styled.div`
background-image:url(${img});
background-position:center;
background-repeat:no-repeat;
width:100%;
text-align:center;
display:flex;
flex-directon:column;
@media only screen and (min-width:1199px) {
   padding:0px 6rem;
}
@media only screen and (min-width:992px) and (max-width:1199px) {
   padding:0px 3rem;
}
@media only screen and (min-width:768px) and (max-width:991px) {
   padding:0px 24%;
}
@media (max-width: 768px) {
  background-size:80%;
  padding:0px 20%;
}
img{
   display:flex;
   flex-directon:column;
   width:100% !important;
   background-image:url(${bimg});
   background-position:center;
   background-repeat:no-repeat;
   background-size:100% 100%;
}
`;
const Item = styled.div`

`;

const Appstore = styled.div`
display:flex;
flex-directon:row;
margin-top:50px;
    @media (max-width: 991px) {
       margin-bottom:40px;
       justify-content: center;
    }
`;

const Image = styled.div`
margin-right:20px;
padding:0px;
width:162px;
height:50px;
`;


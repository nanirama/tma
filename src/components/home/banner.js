import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components";
import img from '../../images/banner_bg.png';

const Banner = () => {   
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
                       <StaticImage src="../../images/play-store.png" alt="" />
                    </Image>
                    <StaticImage src="../../images/app-store.png" alt="" />
                 </Appstore>
              </Item>
              <Item>
                 <BannerImage>
                    <StaticImage src="../../images/banner_img.png" alt="" />
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
padding:80px 0;
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
@media (max-width: 479px) {
  background-size:100%;

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
margin-right:20px
`;


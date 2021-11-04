import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import img from '../../images/arrow.png';
import starIcon from "../../images/star-icon.svg";
const Testimonials = () => {
  return (
  <Wrapper>
     <Container>
        <TestimonialBlock>
           <h2>What our clients have to say?</h2>
           <Grid>
              <Item>
                 <div>
                 <ReviewBox>
                    <StarIcon>
                       <img src={starIcon}/>
                       <img src={starIcon}/>
                       <img src={starIcon}/>
                       <img src={starIcon}/>
                       <img src={starIcon}/>
                     </StarIcon>
                    <Paragraph>I am really satisfied with this application, jerin bro is really replying me back within an hour and his each point are damn correct...if any one out there trying to migrate by there own then I strongly recommend this application.....</Paragraph>
                 </ReviewBox>
                 <StaticImage src="../../images/testi-1.jpeg" alt="" />
                 <AuthorName>Murali kumar</AuthorName>
                 </div>
              </Item>
              <Item>
              <div>
                 <ReviewBox>
                     <StarIcon>
                       <img src={starIcon}/>
                       <img src={starIcon}/>
                       <img src={starIcon}/>
                       <img src={starIcon}/>
                       <img src={starIcon}/>
                     </StarIcon>
                    <Paragraph>This app helps us lot and it helped me lot. Big Thanks to Jerin he was so polite and was explaining clearly.</Paragraph>
                 </ReviewBox>
                 <StaticImage src="../../images/testi-2.jpeg" alt="" />
                 <AuthorName>Abin Jose</AuthorName>
                 </div>
              </Item>
              <Item>
              <div>
                 <ReviewBox>
                     <StarIcon>
                       <img src={starIcon}/>
                       <img src={starIcon}/>
                       <img src={starIcon}/>
                       <img src={starIcon}/>
                       <img src={starIcon}/>
                     </StarIcon>
                    <Paragraph>Jerin and this app is doing a great service.I am hundred percent satisfied for their immediate response .I also appreciate their expertise in resolving issues regarding premium payments ,within a short span of time</Paragraph>
                 </ReviewBox>
                 <StaticImage src="../../images/testi-3.jpeg" alt="" />
                 <AuthorName>Vedhu family</AuthorName>
                 </div>
              </Item>
           </Grid>
        </TestimonialBlock>
     </Container>
  </Wrapper>
  );
  };
  export default Testimonials;

const Wrapper = styled.section`
margin: 60px auto;
width:100%;
float:left;
@media (max-width: 991px) {
margin:30px 0 50px 0;
}
`;

const Container = styled.div`
max-width: 1170px;
margin: auto;
padding:0 15px;
`;
const TestimonialBlock = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
padding-bottom:20px;
@media (max-width: 991px) {
  padding-bottom:0px;
}
`;
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(1fr);
grid-gap: 20px 30px;
justify-content:center;
align-items: stretch;
width:100%;
margin-top:55px;

@media (min-width: 992px) {
  grid-template-columns: repeat(3, 1fr);
   }
  @media (max-width: 991px) {
   margin-top:30px;
   }
   @media only screen and (min-width:701px) and (max-width:991px){
      grid-template-columns: repeat(2, 1fr);
   }
  `;
const Item = styled.div`
display:flex;
justify-content:center;
align-items:stretch;
align-content:center;
flex-direction:column;
text-align:center;
   img{
      width:44px;
      height:44px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
   }
`;
const ReviewBox = styled.div`
background-color:#fff;
box-shadow: 0px 2px 13.3333px rgba(0, 0, 0, 0.04);
border: 1px solid #F84663;
border-radius:6px;
padding:50px 15px;
margin-bottom:40px;
position:relative;

&::before{
  position:absolute;
  content:'';
  width:26px;
  height:26px;
  background-image:url(${img});
background-position:bottom center;
background-repeat:no-repeat;
bottom:-22px;
margin:0 auto;
left:0;
right:0;
  
}
@media (min-width: 992px) {
   min-height:270px;
}

@media (max-width: 767px) {
  padding:30px 15px;
}
`;
const StarIcon = styled.div`
margin-bottom:10px;
img{
   width:25px;
   height:25px;
   margin:0px 3px;
}
`
const Paragraph = styled.p`
font-size:14px; 
line-height:24px;
margin:0;
@media only screen (max-width:991px){
br{
    display:none;
}
`;
const AuthorName = styled.p`
font-size:14px; 
line-height:24px;
font-weight:500;
color:#2D3748;
margin-top:15px;
`;
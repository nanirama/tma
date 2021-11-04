import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components";
import { Link } from "gatsby";
import whyUs from "../../images/why-tma.svg";
const WhyusBlock = () => {   
  return(
  <Wrapper>
     <Container>
        <Grid>
           <Item>
              <TextBlock>
                 <h2>Why Take Me Abroad!</h2>
                 <p>We offer value-based services to students & professionals seeking an opportunity to study/work abroad. Our services include educating and helping the students, as well as professionals, make the right decision based on their credentials, areas of expertise, course preferences, work experience budget and other requirements and providing them personalized counselling on courses, permanent residency and related processes, visa procurement and post landing services. </p>
                 <Button>
                    <Link to="/">
                    <span>Learn More</span>
                    </Link>
                 </Button>
              </TextBlock>
           </Item>
           <Item>
              <Image>
                 <img src={whyUs}/>
              </Image>
           </Item>
        </Grid>
     </Container>
  </Wrapper>
  )
  }      
  export default WhyusBlock;
  
  
const Wrapper = styled.section`
  margin: 60px auto;
  width:100%;
float:left;
@media (max-width: 991px) {
  margin:0 0 30px 0;
}
  `;
  const Container = styled.div`
  max-width: 1170px;
  margin: auto;
  padding:0 15px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 20px 20px;
  justify-content:center;
  align-items:center;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
     }
     @media (max-width: 991px) {
text-align:center;
     }
`;
const Item = styled.div`
`;
const TextBlock = styled.div`
padding-right:30px;
@media (max-width: 1100px) {
    padding-right:0px;
}
`;
const Image = styled.div`
display:flex;
justify-content:center;
  align-items:center;
  @media (max-width:991px) {
    margin-top:30px;
  }
`;
const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background:transparent;


  a {
    text-decoration: none;
  }
  &:hover {
    transition: 0.3s;
    
    
  }
  span {
    height: 100%;
    font-size: 16px;
    color: #F84663;
    padding:8px 30px;
    border-radius: 32px;
    border:2px solid #F84663;
    font-weight:500;
    &:hover {
        background:#F84663;
        color:#fff
    }
  }
`;

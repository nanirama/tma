import React from "react"
import styled from "styled-components";
// import Backpack from "../../svg/backpack.svg";

const Features = () => {   
    return(
    <Wrapper>
       <Container>
          <FeatureBlock>
             <h2>Our Top Features</h2>
             <Grid>
                <Item>
                   <Icon>
                      <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M30.9881 6.90234C27.7764 6.90234 25.1729 9.50591 25.1729 12.7176V19.7802H36.8033V12.7176C36.8033 9.50591 34.1997 6.90234 30.9881 6.90234ZM30.9881 9.33725C29.2808 9.33725 27.8968 10.7212 27.8968 12.4285V16.0345H34.0793V12.4285C34.0793 10.7212 32.6953 9.33725 30.9881 9.33725Z" fill="#FF5C58"/>
                         <path d="M12.0378 37.6175C12.1713 36.3381 13.2498 35.3663 14.5361 35.3663C15.9234 35.3663 17.048 36.4909 17.048 37.8781V43.9778C17.048 45.5404 15.7813 46.8071 14.2188 46.8071C12.54 46.8071 11.2305 45.3539 11.4047 43.6842L12.0378 37.6175Z" fill="white"/>
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0169 37.8781V43.9778C18.0169 46.0755 16.3164 47.7759 14.2189 47.7759C11.9654 47.7759 10.2075 45.825 10.4413 43.5837L11.0744 37.5169C11.2594 35.7441 12.7538 34.3975 14.5362 34.3975C16.4586 34.3975 18.0169 35.9559 18.0169 37.8781ZM14.5362 35.3663C13.2499 35.3663 12.1714 36.3381 12.0379 37.6175L11.4048 43.6842C11.2306 45.3539 12.5401 46.8071 14.2189 46.8071C15.7814 46.8071 17.0481 45.5404 17.0481 43.9778V37.8781C17.0481 36.4909 15.9235 35.3663 14.5362 35.3663Z" fill="#FF5C58"/>
                         <path d="M49.9618 37.6175C49.8285 36.3381 48.7498 35.3663 47.4635 35.3663C46.0763 35.3663 44.9517 36.4909 44.9517 37.8781V43.9778C44.9517 45.5404 46.2184 46.8071 47.7809 46.8071C49.4595 46.8071 50.7692 45.3539 50.5948 43.6842L49.9618 37.6175Z" fill="white"/>
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M43.9829 37.8781V43.9778C43.9829 46.0755 45.6834 47.7759 47.7809 47.7759C50.0344 47.7759 51.7922 45.825 51.5582 43.5837L50.9252 37.5169C50.7406 35.7441 49.2458 34.3975 47.4635 34.3975C45.5412 34.3975 43.9829 35.9559 43.9829 37.8781ZM47.4635 35.3663C48.7498 35.3663 49.8285 36.3381 49.9617 37.6175L50.5948 43.6842C50.7692 45.3539 49.4594 46.8071 47.7809 46.8071C46.2184 46.8071 44.9517 45.5404 44.9517 43.9778V37.8781C44.9517 36.4909 46.0763 35.3663 47.4635 35.3663Z" fill="#FF5C58"/>
                         <path d="M15.8938 25.4095C16.4838 18.3839 22.3584 12.9821 29.4086 12.9821H32.654C39.7043 12.9821 45.5788 18.3839 46.1689 25.4095L47.8689 45.6493C48.2959 50.7344 44.2838 55.0977 39.1807 55.0977H22.882C17.7789 55.0977 13.7667 50.7344 14.1938 45.6492L15.8938 25.4095Z" fill="white"/>
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M29.4087 12.0133H32.654C40.208 12.0133 46.5021 17.801 47.1343 25.3284L48.8341 45.5682C49.3087 51.2183 44.8508 56.0664 39.1807 56.0664H22.882C17.2119 56.0664 12.7539 51.2183 13.2285 45.5681L14.9284 25.3284C15.5606 17.801 21.8548 12.0133 29.4087 12.0133ZM29.4087 12.9821C22.3584 12.9821 16.4839 18.3839 15.8938 25.4095L14.1939 45.6492C13.7668 50.7344 17.7789 55.0977 22.882 55.0977H39.1807C44.2838 55.0977 48.296 50.7344 47.8689 45.6493L46.1689 25.4095C45.5789 18.3839 39.7044 12.9821 32.654 12.9821H29.4087Z" fill="#FF5C58"/>
                         <path d="M24.5811 22.2466C24.5811 21.1766 25.4485 20.3091 26.5186 20.3091H35.5452C36.6152 20.3091 37.4827 21.1766 37.4827 22.2466V24.1825C37.4827 25.2526 36.6152 26.12 35.5452 26.12H26.5186C25.4485 26.12 24.5811 25.2526 24.5811 24.1825V22.2466Z" fill="#FF5C58"/>
                         <path d="M21.332 49.9531C22.2157 51.1306 23.6231 51.8921 25.2083 51.8921H40.2817C42.9568 51.8921 45.1255 49.7235 45.1255 47.0483V41.2602C45.1255 39.675 44.3639 38.2676 43.1867 37.384C43.2973 37.7441 43.3568 38.1265 43.3568 38.5228V46.2484C43.3568 48.3885 41.6219 50.1236 39.4818 50.1236H22.4709C22.0746 50.1236 21.6922 50.064 21.332 49.9531Z" fill="#FF5C58"/>
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4707 33.6791H39.4816C42.1567 33.6791 44.3254 35.8477 44.3254 38.5228V46.2484C44.3254 48.9233 42.1567 51.0924 39.4816 51.0924H22.4707C19.7956 51.0924 17.627 48.9233 17.627 46.2484V38.5228C17.627 35.8477 19.7956 33.6791 22.4707 33.6791ZM22.4707 34.6478C20.3306 34.6478 18.5957 36.3827 18.5957 38.5228V46.2484C18.5957 48.3885 20.3306 50.1236 22.4707 50.1236H39.4816C41.6217 50.1236 43.3566 48.3885 43.3566 46.2484V38.5228C43.3566 36.3827 41.6217 34.6478 39.4816 34.6478H22.4707Z" fill="#FF5C58"/>
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0562 40.5616C18.0562 40.2941 18.273 40.0773 18.5405 40.0773H43.5225C43.79 40.0773 44.0069 40.2941 44.0069 40.5616C44.0069 40.8292 43.79 41.046 43.5225 41.046H18.5405C18.273 41.046 18.0562 40.8292 18.0562 40.5616Z" fill="#FF5C58"/>
                         <path d="M36.4844 39.6367C36.5392 39.2712 36.8954 38.9979 37.317 38.9979H37.4704C37.892 38.9979 38.2482 39.2712 38.303 39.6367L38.832 43.1632C38.9459 43.9227 38.2698 44.5964 37.3937 44.5964C36.5176 44.5964 35.8415 43.9227 35.9554 43.1632L36.4844 39.6367Z" fill="#FF5C58"/>
                      </svg>
                   </Icon>
                   <h4>Jobs</h4>
                   <Paragraph>Abroad job options through licensed<br/> Recruiters</Paragraph>
                </Item>
                <Item>
                   <Icon>
                      <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <g clip-path="url(#clip0_357:107)">
                            <path d="M9.63574 26.2922C9.63574 23.2077 12.1362 20.7072 15.2207 20.7072H49.8423C52.9268 20.7072 55.4272 23.2077 55.4272 26.2922V47.2538C55.4272 50.3382 52.9268 52.839 49.8423 52.839H15.2207C12.1362 52.839 9.63574 50.3382 9.63574 47.2538V26.2922Z" fill="#79B4B7"/>
                            <path d="M7.50342 22.2987C7.50342 20.2423 9.17039 18.5753 11.2268 18.5753H49.5716C51.6278 18.5753 53.295 20.2423 53.295 22.2987V46.9836C53.295 49.0401 51.6278 50.7068 49.5716 50.7068H11.2268C9.17039 50.7068 7.50342 49.0401 7.50342 46.9836V22.2987Z" fill="white"/>
                            <path d="M25.2583 21.2402C25.2583 20.4061 25.9344 19.73 26.7684 19.73H34.0302C34.8642 19.73 35.5403 20.4061 35.5403 21.2402C35.5403 22.0742 34.8642 22.7503 34.0302 22.7503H26.7684C25.9344 22.7503 25.2583 22.0742 25.2583 21.2402Z" fill="#79B4B7"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4287 26.8827H25.1402C26.6824 26.8827 27.9327 28.1329 27.9327 29.6752V43.9277C27.9327 45.4699 26.6824 46.7201 25.1402 46.7201H14.4287C12.8865 46.7201 11.6362 45.4699 11.6362 43.9277V29.6752C11.6362 28.1329 12.8865 26.8827 14.4287 26.8827ZM14.4287 27.8135C13.4006 27.8135 12.5671 28.647 12.5671 29.6752V43.9277C12.5671 44.9558 13.4006 45.7893 14.4287 45.7893H25.1402C26.1684 45.7893 27.0018 44.9558 27.0018 43.9277V29.6752C27.0018 28.647 26.1684 27.8135 25.1402 27.8135H14.4287Z" fill="#79B4B7"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3966 39.6688C16.6502 40.26 17.1891 40.695 17.9035 40.9927C18.6756 41.3143 19.5949 41.4486 20.394 41.4486C21.193 41.4486 22.1124 41.3143 22.8844 40.9927C23.5988 40.695 24.1377 40.26 24.3914 39.6688C24.1313 39.1003 23.4964 38.656 22.6856 38.3442C21.8268 38.0139 20.9001 37.8835 20.394 37.8835C19.8879 37.8835 18.9611 38.0139 18.1023 38.3442C17.2915 38.656 16.6567 39.1003 16.3966 39.6688ZM17.7682 37.4754C18.7359 37.1032 19.7761 36.9526 20.394 36.9526C21.0119 36.9526 22.0521 37.1032 23.0198 37.4754C23.968 37.8401 24.9822 38.471 25.3314 39.5189C25.3633 39.6144 25.3633 39.7177 25.3314 39.8132C24.9922 40.831 24.155 41.4717 23.2425 41.8519C22.3286 42.2327 21.2809 42.3794 20.394 42.3794C19.5071 42.3794 18.4594 42.2327 17.5455 41.8519C16.633 41.4717 15.7958 40.831 15.4565 39.8132C15.4247 39.7177 15.4247 39.6144 15.4565 39.5189C15.8058 38.471 16.82 37.8401 17.7682 37.4754Z" fill="#79B4B7"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6521 31.1209C18.4634 30.8336 18.1307 30.6727 17.7865 30.7053C17.4296 30.739 17.1239 30.9747 17.0003 31.3112C16.6992 32.1316 16.7723 32.9073 17.2628 33.4951C17.3776 33.6327 17.5057 33.7479 17.6402 33.8444C17.5821 34.0666 17.5512 34.2995 17.5512 34.5394C17.5512 36.0546 18.7795 37.2829 20.2947 37.2829C21.7917 37.2829 23.0087 36.0839 23.0376 34.5937C23.0518 34.4506 23.0718 34.1622 23.0396 33.9165C22.918 32.8367 22.397 32.0852 21.6087 31.6731C20.8937 31.2993 20.0709 31.2661 19.4214 31.3022C19.0941 31.3203 18.8872 31.2548 18.773 31.199C18.6963 31.1614 18.6605 31.1285 18.6521 31.1209ZM22.1157 34.0304C21.9381 32.4092 20.6722 32.1649 19.4731 32.2316C19.1671 32.2486 18.9072 32.2163 18.6909 32.1573C18.2287 32.0313 17.9649 31.7832 17.8742 31.632C17.6655 32.2003 17.7436 32.5985 17.9556 32.8716C17.9829 32.9067 18.0123 32.9397 18.0436 32.9707C18.2727 33.1977 18.6025 33.3195 18.9066 33.3735C18.7028 33.6159 18.5613 33.9125 18.5068 34.2385C18.4905 34.3363 18.482 34.4369 18.482 34.5394C18.482 35.5405 19.2936 36.3521 20.2947 36.3521C21.2958 36.3521 22.1074 35.5405 22.1074 34.5394C22.1195 34.4353 22.1382 34.1879 22.1157 34.0304Z" fill="#79B4B7"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8066 39.4046C20.8066 39.1475 21.015 38.9391 21.2721 38.9391H22.6045C22.8616 38.9391 23.0699 39.1475 23.0699 39.4046C23.0699 39.6616 22.8616 39.87 22.6045 39.87H21.2721C21.015 39.87 20.8066 39.6616 20.8066 39.4046Z" fill="#79B4B7"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.645 41.2664C30.645 41.0093 30.8534 40.801 31.1105 40.801H40.6144C40.8714 40.801 41.0798 41.0093 41.0798 41.2664C41.0798 41.5234 40.8714 41.7318 40.6144 41.7318H31.1105C30.8534 41.7318 30.645 41.5234 30.645 41.2664Z" fill="#79B4B7"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.645 38.4287C30.645 38.1716 30.8534 37.9633 31.1105 37.9633H48.521C48.7782 37.9633 48.9865 38.1716 48.9865 38.4287C48.9865 38.6857 48.7782 38.8941 48.521 38.8941H31.1105C30.8534 38.8941 30.645 38.6857 30.645 38.4287Z" fill="#79B4B7"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.645 35.5862C30.645 35.3291 30.8534 35.1207 31.1105 35.1207H48.521C48.7782 35.1207 48.9865 35.3291 48.9865 35.5862C48.9865 35.8432 48.7782 36.0516 48.521 36.0516H31.1105C30.8534 36.0516 30.645 35.8432 30.645 35.5862Z" fill="#79B4B7"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6445 32.7436C30.6445 32.4866 30.8529 32.2782 31.11 32.2782H48.5207C48.7774 32.2782 48.9862 32.4866 48.9862 32.7436C48.9862 33.0007 48.7774 33.2091 48.5207 33.2091H31.11C30.8529 33.2091 30.6445 33.0007 30.6445 32.7436Z" fill="#79B4B7"/>
                            <path d="M30.7324 28.4576C30.7324 27.9057 31.1798 27.4583 31.7317 27.4583H48.0763C48.6282 27.4583 49.0758 27.9057 49.0758 28.4576C49.0758 29.0095 48.6282 29.4569 48.0763 29.4569H31.7317C31.1798 29.4569 30.7324 29.0095 30.7324 28.4576Z" fill="#79B4B7"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2269 17.6444H49.5718C52.1424 17.6444 54.2261 19.7282 54.2261 22.2986V46.9835C54.2261 49.554 52.1424 51.6377 49.5718 51.6377H11.2269C8.65649 51.6377 6.57275 49.554 6.57275 46.9835V22.2986C6.57275 19.7282 8.65649 17.6444 11.2269 17.6444ZM11.2269 18.5753C9.17055 18.5753 7.50358 20.2423 7.50358 22.2986V46.9835C7.50358 49.04 9.17055 50.7068 11.2269 50.7068H49.5718C51.628 50.7068 53.2952 49.04 53.2952 46.9835V22.2986C53.2952 20.2423 51.628 18.5753 49.5718 18.5753H11.2269Z" fill="#79B4B7"/>
                            <path d="M27.8901 11.023C27.8901 10.5089 28.3069 10.0921 28.821 10.0921H31.9782C32.4923 10.0921 32.909 10.5089 32.909 11.023V21.1069H27.8901V11.023Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.8395 22.0377H26.959V11.0229C26.959 9.99472 27.7925 9.16125 28.8206 9.16125H31.9778C33.006 9.16125 33.8395 9.99472 33.8395 11.0229V22.0377ZM28.8206 10.0921C28.3066 10.0921 27.8898 10.5088 27.8898 11.0229V21.1069H32.9087V11.0229C32.9087 10.5088 32.492 10.0921 31.9778 10.0921H28.8206Z" fill="#79B4B7"/>
                            <path d="M31.6874 12.5794C31.6874 13.2907 31.1107 13.8674 30.3994 13.8674C29.688 13.8674 29.1113 13.2907 29.1113 12.5794C29.1113 11.868 29.688 11.2914 30.3994 11.2914C31.1107 11.2914 31.6874 11.868 31.6874 12.5794Z" fill="#79B4B7"/>
                         </g>
                         <defs>
                            <clipPath id="clip0_357:107">
                               <rect width="62" height="62" fill="white"/>
                            </clipPath>
                         </defs>
                      </svg>
                   </Icon>
                   <h4>Study Abroad</h4>
                   <Paragraph>Study Abroad destinations and latest<br/> Courses</Paragraph>
                </Item>
                <Item>
                   <Icon>
                      <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M5.625 49.0837H56.4589C56.4589 50.0219 55.6984 50.7824 54.7602 50.7824H7.32351C6.38547 50.7824 5.625 50.0219 5.625 49.0837Z" fill="#7C83FD"/>
                         <path d="M56.5266 46.5978H5.47328C4.73674 46.5978 4.13965 47.1949 4.13965 47.9314C4.13965 48.668 4.73674 49.265 5.47328 49.265H56.5266C57.2631 49.265 57.8602 48.668 57.8602 47.9314C57.8602 47.1949 57.2631 46.5978 56.5266 46.5978Z" fill="white" stroke="#7C83FD"/>
                         <path d="M13.8207 12.1796H8.33838C7.00081 12.1796 5.9165 13.2639 5.9165 14.6014V43.5869C5.9165 44.9245 7.00081 46.0088 8.33838 46.0088H13.8207C15.1583 46.0088 16.2426 44.9245 16.2426 43.5869V14.6014C16.2426 13.2639 15.1583 12.1796 13.8207 12.1796Z" fill="white" stroke="#7C83FD" stroke-linecap="round" stroke-linejoin="round"/>
                         <path d="M24.3295 12.1796H18.8472C17.5096 12.1796 16.4253 13.2639 16.4253 14.6014V43.5869C16.4253 44.9245 17.5096 46.0088 18.8472 46.0088H24.3295C25.6671 46.0088 26.7514 44.9245 26.7514 43.5869V14.6014C26.7514 13.2639 25.6671 12.1796 24.3295 12.1796Z" fill="white" stroke="#7C83FD" stroke-linecap="round" stroke-linejoin="round"/>
                         <path d="M11.0459 34.7656C12.1283 34.7656 13.0058 33.4961 13.0058 31.93C13.0058 30.3639 12.1283 29.0943 11.0459 29.0943C9.96344 29.0943 9.08594 30.3639 9.08594 31.93C9.08594 33.4961 9.96344 34.7656 11.0459 34.7656Z" stroke="#7C83FD"/>
                         <path d="M21.5884 34.7656C22.6708 34.7656 23.5483 33.4961 23.5483 31.93C23.5483 30.3639 22.6708 29.0943 21.5884 29.0943C20.5059 29.0943 19.6284 30.3639 19.6284 31.93C19.6284 33.4961 20.5059 34.7656 21.5884 34.7656Z" stroke="#7C83FD"/>
                         <path d="M6.12549 18.6273H15.8835" stroke="#7C83FD" stroke-linecap="round" stroke-linejoin="round"/>
                         <path d="M6.125 20.7957H15.8831" stroke="#7C83FD" stroke-linecap="round" stroke-linejoin="round"/>
                         <path d="M16.7095 18.6273H26.4675" stroke="#7C83FD" stroke-linecap="round" stroke-linejoin="round"/>
                         <path d="M16.709 20.7957H26.4671" stroke="#7C83FD" stroke-linecap="round" stroke-linejoin="round"/>
                         <path d="M34.8378 12.1796H29.3555C28.0179 12.1796 26.9336 13.2639 26.9336 14.6014V43.5869C26.9336 44.9245 28.0179 46.0088 29.3555 46.0088H34.8378C36.1754 46.0088 37.2597 44.9245 37.2597 43.5869V14.6014C37.2597 13.2639 36.1754 12.1796 34.8378 12.1796Z" fill="white" stroke="#7C83FD" stroke-linecap="round" stroke-linejoin="round"/>
                         <path d="M32.0967 34.7656C33.1791 34.7656 34.0566 33.4961 34.0566 31.93C34.0566 30.3639 33.1791 29.0943 32.0967 29.0943C31.0142 29.0943 30.1367 30.3639 30.1367 31.93C30.1367 33.4961 31.0142 34.7656 32.0967 34.7656Z" stroke="#7C83FD"/>
                         <path d="M27.0176 18.6273H36.7757" stroke="#7C83FD" stroke-linecap="round" stroke-linejoin="round"/>
                         <path d="M27.0171 20.7957H36.7752" stroke="#7C83FD" stroke-linecap="round" stroke-linejoin="round"/>
                         <path d="M44.531 11.8445L38.8979 13.3539C37.606 13.7001 36.8392 15.0281 37.1854 16.3201L44.7767 44.651C45.1229 45.943 46.4509 46.7097 47.7428 46.3635L53.3759 44.8541C54.6678 44.5079 55.4346 43.1799 55.0884 41.888L47.4971 13.557C47.151 12.2651 45.823 11.4983 44.531 11.8445Z" fill="#7C83FD"/>
                         <path d="M47.6066 34.5716C48.6522 34.2914 49.1712 32.838 48.7659 31.3253C48.3605 29.8125 47.1843 28.8133 46.1388 29.0935C45.0932 29.3737 44.5742 30.8271 44.9795 32.3398C45.3849 33.8526 46.5611 34.8518 47.6066 34.5716Z" fill="#7C83FD" stroke="white"/>
                         <path d="M39.1558 20.1284L47.6269 17.8586" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                         <path d="M39.7168 22.2229L48.1879 19.9531" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                   </Icon>
                   <h4>Academy</h4>
                   <Paragraph>Master classes on immigration<br/> procedures</Paragraph>
                </Item>
             </Grid>
          </FeatureBlock>
       </Container>
    </Wrapper>
    )
    }
    export default Features;

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
const FeatureBlock = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 20px 20px;
  justify-content:center;
  align-items:center;
  width:100%;
  margin-top:55px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
     }
     @media (max-width: 991px) {
     margin-top:30px;
     }
    `;
const Item = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
position:relative;
@media (min-width: 1200px) {
&::before{
position:absolute;
content:'';
top:30px;
right:-150px;
width:77%;
height:1px;
background-color:#e5e5e5;
}
}
&:nth-of-type(3)::before{
display:none;
    }
&:nth-of-type(1) div{
    background: rgba(255, 92, 88, 0.1);
}
&:nth-of-type(2) div{
    background: rgba(121, 180, 183, 0.13);
 }
&:nth-of-type(3) div{
    background: rgba(124, 131, 253, 0.1);
}
`;
const Icon = styled.div`

border-radius: 6px;
width: 65px;
height: 65px;
margin-bottom:20px;
`;

const Paragraph = styled.p`
font-size:14px; 
line-height:24px;
@media only screen and (min-width:768px) and (max-width:991px){
br{
    display:none;
}
`;
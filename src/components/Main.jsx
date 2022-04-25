import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import LinkButton from './common/LinkButton';
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { scrollArrowOnOffState, scrollContactOnOffState } from '../atom/atomState';
import { FaAngleDown } from 'react-icons/fa';

const Main = () => {
  const [isArrow, setIsArrow] = useRecoilState(scrollArrowOnOffState);
  const [, setIsContact] = useRecoilState(scrollContactOnOffState);
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  
  const txt = "Hello, I'm an Front-end Developer.";
 
  useEffect(() => { 
    const interval = setInterval(() => {
      setText(text + txt[count]);
      setCount(count + 1);
    }, 150);
      if (count === txt.length) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
  })

  return (
    <Container>
      <h1 className="main-tit">{text}</h1>
      <p className="main-txt">
        안녕하세요. 프론트엔드 개발자 이승연입니다. <br />
        배포를 통한 사용자 피드백과 비즈니스적 관점에서 고객 UI/UX에 대해 한번 더 생각하는 개발자입니다. <br />
        서버 api와 연결해 사이트 배포 경험을 통해서 설계와 협업에 대해 배울 수 있었습니다. <br />
        서비스에 대해 생각하고 몰입하여 디테일한 것도 놓치지 않는 개발자입니다.
      </p>
      <ContactBtn
        onClick={() => {
          setIsContact(true);
        }}
        className="contact-btn"
      >
        Contact me
      </ContactBtn>
      <ul className="about-list">
        <li>
          <LinkButton src={'./images/github-logo-white.png'} name="git" />
        </li>
        <li>
          <LinkButton src={'./images/velog-icon.png'} name="velog" />
        </li>
      </ul>
      <ImageBox>
        <img src="./images/main-img.png" alt="img" />
      </ImageBox>
      <motion.button
        animate={{ y: 60 }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        onClick={() => {
          setIsArrow(!isArrow);
        }}
        className="arrow-btn"
      >
        <FaAngleDown color="#fcfff6" size={70} />
      </motion.button>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  ${theme.common.height}
  padding: 15rem 2.4rem 2.4rem;
  box-sizing: border-box;
  .main-tit {
    font-size: 3rem;
    font-weight: bold;
    color: ${theme.colors.white};
  }
  .main-txt {
    margin-top: 10px;
    font-size: 1.2rem;
    line-height: 1.8;
    color: ${theme.colors.white};
  }
  .about-list {
    display: flex;
    align-items: center;
  }
  .arrow-btn {
    position: absolute;
    bottom: 10%;
    transform: translate(-50%, 0%);
    left: 50%;
    padding: 2rem;
    box-sizing: border-box;
    cursor: pointer;
  }
`;

const ContactBtn = styled.button`
  display: block;
  padding: 0.7rem 1rem;
  margin-top: 2rem;
  color: ${theme.colors.white};
  font-size: 1rem;
  border-radius: 3px;
  cursor: pointer;
  box-sizing: border-box;
  background: linear-gradient(-45deg, #fcd900, #eb606e, #0052cd, #5b5cfe);
  animation: gradientBackground 13s ease infinite;
  background-size: 400% 400%;
  @keyframes gradientBackground {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const ImageBox = styled.div`
  position: absolute;
  bottom: calc(100% - 850px);
  right: calc(1000px - 800px);
  width: 500px;
`;


export default Main;
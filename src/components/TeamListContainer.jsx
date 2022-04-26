import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { FaGithub, FaLink, FaYoutube } from 'react-icons/fa';


const TeamListContainer = () => {
  return (
    <ContentContainer>
      <img src="./images/link-snsproject.png" alt="팀프로젝트이미지" />
      <Content>
        <Title>
          <span className="date-text">2022.01.03 - 2022.01.18</span>
          <h3>청귤마켓</h3>
          <p className="deploy-text">
            <span>참여율</span>35% (팀 인원: 3명) <span>배포</span> gabia
          </p>
          <p>
            <span className="description">Description</span>멋쟁이 사자처럼 프론트엔드 스쿨에서 진행한 팀 프로젝트,
            <br />
            자신의 스토어에서 판매하고 있는 상품을 등록, 홍보할 수 있는 SNS입니다.
          </p>
          <GitLink href="https://github.com/seungyyy/team-sns-project">
            <FaGithub
              onClick={() => {
                window.open('https://github.com/seungyyy/team-sns-project', '_blank', 'noopener noreferrer');
              }}
            />
          </GitLink>
          <Link href="http://chungyul.shop/">
            <FaLink
              onClick={() => {
                window.open('http://chungyul.shop/', '_blank', 'noopener noreferrer');
              }}
            />
          </Link>
          <YoutubeLink href="https://www.youtube.com/watch?v=mvG_-Mhu-jM">
            <FaYoutube
              onClick={() => {
                window.open('https://www.youtube.com/watch?v=mvG_-Mhu-jM', '_blank', 'noopener noreferrer');
              }}
            />
          </YoutubeLink>
        </Title>
        <SubMenu>구현 기능</SubMenu>
        <ul>
          <li>서버 api를 활용해 서버에서 데이터 연결 및 전송</li>
          <li>로그인, 프로필(및 수정), 상품등록 페이지 유효성 검사 및 계정 ID 중복 검사</li>
          <li>회원 가입 시 토큰이 없어 문제가 발생하여 유저 데이터로 가입과 로그인을 같이 하게 구현</li>
          <li>검색 필터로 해당 단어의 유저만 검색되고 텍스트 하이라이트 표시</li>
          <li>ios input focus 폰트가 16px 작을시 자동 줌인을 웹 접근성을 위해 폰트 크기 조정</li>
          <li>피그마 디자인 수정, 모바일 프레젠테이션 제작</li>
          <li>유튜브 썸네일 이미지, 유튜브 영상 제작</li>
        </ul>
        <SubMenu>스택</SubMenu>
        <ul>
          <li>javascript</li>
          <li>css / html</li>
        </ul>
      </Content>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0 3rem;
  box-sizing: border-box;
  color: ${theme.colors.black};
  img {
    margin-right: 2rem;
    padding-left: 3rem;
    object-fit: cover;
    box-sizing: border-box;
  }
  ul {
    li {
      margin-left: 2rem;
      list-style: circle;
      line-height: 1.5;
    }
  }
  ${theme.device.laptop} {
    img {
      display: none;
    }
  }
`;

const Content = styled.div`
  padding-right: 3rem;
  box-sizing: border-box;
  ${theme.device.laptop} {
    padding: 2rem;
  }
  ${theme.device.custom} {
    padding-top: 0;
  }
`;

const Title = styled.div`
  position: relative;
  h3 {
    margin-top: 25px;
    font-size: 2rem;
    font-family: 'SpoqaHanSansNeo-Medium';
  }
  .date-text {
    position: absolute;
    top: -25px;
    left: 0;
  }
  p {
    margin-top: 14px;
    span {
      font-size: 1.2rem;
      margin-right: 1rem;
    }
    .description {
      float: left;
    }
  }
  .deploy-text {
    position: absolute;
    top: 0;
    right: 30%;
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  ${theme.device.laptop} {
    h3 {
      font-size: 1.4rem;
    }
    .date-text {
      font-size: 14px;
      top: -20px;
    }
    p {
      font-size: 14px;
      span {
        font-size: 14px;
        margin-right: 10px;
      }
    }
    .deploy-text {
      position: absolute;
      top: -10px;
      right: 30%;
      font-size: 0.8rem;
      margin-right: 0.5rem;
    }
  }
  ${theme.device.custom} {
    margin: 0;
    h3 {
      font-size: 1.4rem;
    }
    .deploy-text {
      position: static;
      font-size: 14px;
    }
  }
`;

const GitLink = styled.a`
  position: absolute;
  top: 0.5rem;
  right: 5rem;
  font-size: 1.2rem;
  z-index: 100;
`;

const Link = styled.a`
  position: absolute;
  top: 0.5rem;
  right: 2.5rem;
  font-size: 1.2rem;
  z-index: 100;
`;

const YoutubeLink = styled.a`
  position: absolute;
  top: 0.5rem;
  right: 0;
  font-size: 1.2rem;
  z-index: 100;
`;

const SubMenu = styled.p`
  font-size: 1.2rem;
  margin: 1rem 1rem 0.2rem 0;
  font-family: 'SpoqaHanSansNeo-Medium';
  ${theme.device.custom} {
    font-size: 16px;
  }
`;
export default TeamListContainer;

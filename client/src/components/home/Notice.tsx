import styled, { keyframes } from "styled-components";
import theme from "@src/styles/theme";
import { ReactComponent as NoticeIcon } from "@src/assets/icon/notice.svg";

const Notice = () => {
  return (
    <>
      <NoticeTitle>
        <StyledNoticeIcon />
        주인장 공지
      </NoticeTitle>
      <NoticeContainer>
        <NoticeText>방명록을 달고 가시면 답글을 남겨드립니다!</NoticeText>
      </NoticeContainer>
    </>
  );
};

export default Notice;

const NoticeContainer = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.primary};
`;

const NoticeTitle = styled.p`
  ${theme.fonts.Body2}
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const scrollText = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const NoticeText = styled.p`
  width: 100%;
  display: inline-block;
  ${theme.fonts.Body1}
  text-align: center;
  color: white;
  white-space: nowrap;
  animation: ${scrollText} 10s linear infinite;
`;

const StyledNoticeIcon = styled(NoticeIcon)`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  fill: ${theme.colors.primary};
`;

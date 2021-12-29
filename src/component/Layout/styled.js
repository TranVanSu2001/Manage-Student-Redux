import styled from "styled-components";
import { IoLogoOctocat } from "react-icons/io";

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 80vh;
`;

const TopbarWrapper = styled.div`
  /* padding: 1rem 2rem; */
  text-align: center;
  background: white;
  box-shadow: rgba(18, 38, 63, 0.03) 0px 0.75rem 1.5rem;
`;

const ContentWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
`;

const MainContentWrapper = styled.div`
  padding: 1rem 1rem;
  justify-content: center;
  /* align-items: stretch; */
  display: flex;
  /* height: 100%; */
  background: rgb(242, 242, 242);

  & > * {
    width: 100%;
    background: white;
    border-radius: 0.5rem;
    padding: 1rem 1.7rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

export const Icon = styled(IoLogoOctocat)`
  font-size: 45px;
  fill: #5e89fc;
`;

export { LayoutWrapper, ContentWrapper, TopbarWrapper, MainContentWrapper };

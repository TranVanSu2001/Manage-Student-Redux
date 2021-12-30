import {
  HeaderTotal,
  HomePageWrapper,
  HeaderHomePage,
  Icon,
  IconPage,
  IconText,
  Navigation,
  LiNavigation,
  ContentHeader,
  HeadingContent,
  ContentDescription,
  ContentButton,
  ButtonManage,
  ButtonView,
} from "./HeaderStyed";
import "antd/dist/antd.css";

import { Link } from "react-router-dom";
import "../style.css";

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

const Header = () => {
  const backTop = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <HeaderTotal>
      <HomePageWrapper className="home-Page_Wrapper">
        <HeaderHomePage>
          <Link to="/">
            <Icon>
              <IconPage />
              <IconText>Suwj</IconText>
            </Icon>
          </Link>

          <Navigation>
            <LiNavigation>
              <Link to="/" style={{ color: "#fff" }}>
                Home
              </Link>
            </LiNavigation>
            <LiNavigation>
              <Link to="/managestu" style={{ color: "#fff" }}>
                Manage
              </Link>
            </LiNavigation>
            <LiNavigation>
              <Link to="/cv" style={{ color: "#fff" }}>
                View
              </Link>
            </LiNavigation>
            <LiNavigation>
              <div style={{ color: "#fff" }} onClick={backTop}>
                About
              </div>
            </LiNavigation>
          </Navigation>
        </HeaderHomePage>

        <ContentHeader>
          <HeadingContent>Looking back at 2021 </HeadingContent>

          <ContentDescription>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sodales laoreet facilisis. Nunc sagittis purus ipsum, ac mollis
              elit iaculis ut. Mauris egestas arcu ut ex blandit pulvinar.
              Mauris nibh risus, imperdiet et mauris vitae, auctor vulputate
              est.
            </p>
          </ContentDescription>
          <ContentButton>
            <ButtonManage>
              <Link to="/managestu" style={{ color: "#fff" }}>
                ManageStudent
              </Link>
            </ButtonManage>
            <ButtonView>
              <Link to="/cv" style={{ color: "#fff" }}>
                View CV
              </Link>
            </ButtonView>
          </ContentButton>
        </ContentHeader>
      </HomePageWrapper>
    </HeaderTotal>
  );
};

export default Header;

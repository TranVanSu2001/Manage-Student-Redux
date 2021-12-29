import LayoutManage from "../../component/Layout/index";
import Details from "./Details";
import FooterHomePage from "./Footer";
import {
  HomePageTotal,
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
  ContentDetails,
  HeadingDetail,
} from "./styled";
import { BackTop } from "antd";
import "antd/dist/antd.css";
import { UpOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import bgHomePage from "../../image/bgHomePage.jpg";
import "./style.css";

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

const HomePage = () => {
  return (
    <HomePageTotal>
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
              <a href="#footer" style={{ color: "#fff" }}>
                About
              </a>
            </LiNavigation>
          </Navigation>
        </HeaderHomePage>

        <ContentHeader>
          <HeadingContent>Looking back at 2021 </HeadingContent>

          <ContentDescription>
            <p>
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
      <Details />
      <FooterHomePage id="footer"></FooterHomePage>
      <BackTop>
        <div style={style}>
          <UpOutlined />
        </div>
      </BackTop>
    </HomePageTotal>
  );
};

export default HomePage;

import { useEffect } from "react";
import { connect } from "react-redux";
import { LayoutManage } from "src/component";
import postApi from "src/api/post";
import { actSaveListPost } from "src/redux/action/post";
import { ListPostWrapper } from "./style";
import PostItem from "./PostItem";

const ListPost = (props) => {
  const { listPost } = props;

  useEffect(() => {
    getListPost();
  }, []);

  const getListPost = async () => {
    const res = await postApi.getPosts();

    console.log("res", res);
    props.actSaveListPost(res.data);
  };

  const renderListPost = () =>
    listPost.map((post, index) => (
      <PostItem
        title={post.title}
        content={post.body}
        key={index}
        index={index + 1}
      />
    ));

  return (
    <LayoutManage>
      <ListPostWrapper>{renderListPost()}</ListPostWrapper>
    </LayoutManage>
  );
};

export default connect(
  (state) => ({
    listPost: state.Post.listPost,
  }),
  {
    actSaveListPost,
  }
)(ListPost);

// bước 1: UI gọi action props.actSaveListPost()
// bước 2: reducer xử lí thông điệp @type SAVE_LIST_POST ứng với @action

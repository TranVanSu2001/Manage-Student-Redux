import { PostItemWrapper } from "./style";

const PostItem = (props) => {
  const { index, title, content } = props;

  return (
    <PostItemWrapper>
      <div className="index">{index}</div>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </PostItemWrapper>
  );
};

export default PostItem;

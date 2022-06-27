interface IPostProps {
  author: string;
  postMessage: string;
}

const Post = ({ author, postMessage }: IPostProps) => {
  return (
    <div>
      <h4>{author}</h4>
      <p>{postMessage}</p>
    </div>
  );
};

export default Post;

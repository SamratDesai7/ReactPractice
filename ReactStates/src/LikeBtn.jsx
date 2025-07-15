import { useState } from "react";

const LikeBtn = () => {
  const [isLiked, setIsLiked] = useState(false);
  let likeToggle = () => {
    setIsLiked(!isLiked);
  };
  let fill = { color: "red" };
  return (
    <>
      <h1 onClick={likeToggle}>
        {isLiked ? (
          <i className="fa-regular fa-heart"></i>
        ) : (
          <i className="fa-solid fa-heart" style={fill}></i>
        )}
      </h1>
    </>
  );
};
export default LikeBtn;

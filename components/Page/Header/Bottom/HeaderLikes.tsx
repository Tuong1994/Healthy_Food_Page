import React from "react";
import { CgHeart } from "react-icons/cg";

interface HeaderLikesProps {}

const HeaderLikes: React.FC<HeaderLikesProps> = () => {
  return (
    <button className="bottom-likes">
      <CgHeart size={25} />
    </button>
  );
};

export default HeaderLikes;

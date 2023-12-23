import React from "react";
import { HiHeart} from "react-icons/hi";

interface HeaderLikesProps {}

const HeaderLikes: React.FC<HeaderLikesProps> = () => {
  return (
    <button className="bottom-likes">
      <HiHeart size={20} />
    </button>
  );
};

export default HeaderLikes;

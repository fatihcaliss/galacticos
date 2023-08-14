import React from "react";
import Image from "next/image";
import lineUpBackGround from "../../public/lineUpBackGround.png";
import Draggable from "react-draggable";

const LineUP = () => {
  return (
    <Draggable>
      <div className="min-h-full max-w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <Image
          src={lineUpBackGround}
          width={"auto"}
          height={"auto"}
          alt="Picture of the author"
        />
        <div className="absolute bottom-0 left-0">1</div>
        <div className="absolute bottom-0 right-0">2</div>
        <div className="absolute bottom-0 left-0">3</div>
      </div>
    </Draggable>
  );
};

export default LineUP;

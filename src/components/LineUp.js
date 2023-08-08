import React from "react";
import Image from 'next/image'
import lineUpBackGround from '../../public/lineUpBackGround.png'

const LineUP = () => {
  return (
    <div className="h-auto max-w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
       <Image
      src={lineUpBackGround}
      width={"auto"}
      height={"auto"}
      alt="Picture of the author"
    />
    </div>
  );
};

export default LineUP;

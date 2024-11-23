import React from "react";

const IncreasingBlurCircle = () => {
  return (
    <div className="flex justify-center items-center h-fit w-fit bg-gray-900">
      {/* Circle with increasing blur */}
      <div className="relative">
        <div className="absolute -top-28 -left-14 w-96 h-96 rounded-full bg-gradient-radial from-indigo-500/20 via-pink-600/30 to-transparent blur-xl"></div>
      </div>
    </div>
  );
};

export default IncreasingBlurCircle;

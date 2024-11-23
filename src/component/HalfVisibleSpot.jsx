import React from "react";

const HalfVisibleSpot = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Red half-visible spot */}
      <div className="w-32 h-32 rounded-full bg-red-500 opacity-50"></div>
    </div>
  );
};

export default HalfVisibleSpot;

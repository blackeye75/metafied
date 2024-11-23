import React from "react";

const Card = ({ link, title, subtitle }) => {
  return (
    <div className="">
      <div className="card p-2 card-compact bg-blue-500 w-96 h-96 shadow-xl">
        <figure>
          <img src={link} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{subtitle}</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

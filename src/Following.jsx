import React from "react";
import { peopleImgs } from "./SuggestionData";
import "./insta.css";
import { Link } from "react-router-dom";
const Following = () => {
  const TruncateText = ({ text }) => {
    if (text.length <= 10) {
      return <span>{text}</span>;
    } else {
      return <span>{text.substring(0, 7)}...</span>;
    }
  };
  return (
    <div
      className="followings text-white position-relative w-100 gap-4 d-flex align-items-around justify-content-around p-2"
      style={{ maxWidth: "530px", zIndex: "22" }}
    >
      {peopleImgs.slice(0, 8).map((val, ind) => {
        return (
          <div key={ind} className="d-flex flex-column align-items-center">
            <Link to="/client/profile" className="text-decoration-none">
              <div className="position-relative w-100">
                <img
                  className="rounded-circle"
                  style={{
                    height: "56px",
                    width: "56px",
                    border: "2px solid white",
                  }}
                  src={val.img}
                  alt=""
                />
              </div>
              <p
                className="text-dark m-0"
                style={{ fontSize: "13px", height: "30px" }}
              >
                <TruncateText text={val.id} />
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Following;

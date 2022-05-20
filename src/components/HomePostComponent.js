import React from "react";
import { Link } from "react-router-dom";

// Styling and animation module import
import styled from "styled-components";
import { motion } from "framer-motion";
import { popAnimation } from "../animation";
import { dateFormatter } from "../utils";

const HomePostComponent = ({ postId, title, author, points, date }) => {
  // pre Checks, founded error in api that title was missing in some records
  if (title === null || title.length === 0) {
    title = "Title not mentioned";
  }
  if (title?.length >= 50) {
    title = title.substring(0, 40) + "...";
  }
  //Date formatting
  date = dateFormatter(date);

  return (
    <Link to={`/post/${postId}`}>
      <StyledDiv
        variants={popAnimation}
        whileHover={{ scale: 1.15 }}
        initial="hidden"
        animate="show"
      >
        <div className="details-container">
          <div className="title-author">
            <h2>{title}</h2>
            <h3> by {author}</h3>
          </div>
          <div className="points-date-container">
            <h3>
              {points}
              <i className="fa-solid fa-thumbs-up"></i>
            </h3>
            <p>{date}</p>
          </div>
        </div>
      </StyledDiv>
    </Link>
  );
};

// Styling
const StyledDiv = styled(motion.div)`
  height: 15rem;
  width: 20rem;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff0062;
  border-radius: 10px;
  .details-container {
    .title-author {
      h3 {
        font-style: italic;
        opacity: 0.8;
      }
    }
  }
`;

export default HomePostComponent;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPostDetailsById } from "../backend";

// Components import
import CommentComponent from "../components/CommentComponent";
import HomePostComponent from "../components/HomePostComponent";
import LoadingComponent from "../components/LoadingComponent";
import ScrollToTopComponent from "../components/ScrollToTopComponent";

// Styling and animation module import
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageRevealAnimation, popAnimation } from "../animation";
import { dateFormatter } from "../utils";

const PostDetails = () => {
  // getting parameters
  const parameters = useParams();

  //States
  const [postData, setpostData] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  // Initializing data
  useEffect(() => {
    getPostDetailsById(parameters.postid).then((res) => {
      console.log(res);
      setpostData(res);
      setisLoading(false);
    });
  }, [postData]);

  return (
    <StyledDiv>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <motion.div
          className="title-author-container"
          variants={popAnimation}
          initial="hidden"
          animate="show"
        >
          <div className="details-container">
            <div className="title-author">
              <h2>
                {postData.title ? postData.title : "Title not mentioned."}
              </h2>
            </div>
            <div className="post-data-container">
              <div>
                <h3 className="author">
                  {" "}
                  by <span>{postData.author}</span>
                </h3>
                <h3>
                  {postData.points}
                  <i className="fa-solid fa-thumbs-up"></i>
                </h3>
              </div>
              <div className="points-date-container">
                <p>{dateFormatter(postData.created_at)}</p>
              </div>
            </div>
          </div>
          <div className="comments-container">
            {postData.children.length > 0
              ? postData.children.map(({ id, author, text, children }) => (
                  <CommentComponent key={id} author={author} comment={text} />
                ))
              : "Nothing to show here"}
          </div>
        </motion.div>
      )}
      <div className="scroll-top-container">
        <ScrollToTopComponent />
      </div>
    </StyledDiv>
  );
};

// Styling
const StyledDiv = styled(motion.div)`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  padding-top: 2rem;
  .title-author-container {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  .post-data-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .author {
    font-style: italic;
    color: #3a3737;
    span {
      color: #ff0062;
    }
  }
  .comments-container {
    width: 80%;
    margin-top: 2rem;
  }
  .scroll-top-container {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
  }
`;

export default PostDetails;

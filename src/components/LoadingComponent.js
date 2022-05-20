import React from "react";

// Styling and animation module import
import styled from "styled-components";
import { motion } from "framer-motion";
import { loadingAnimation, popAnimationWrapper } from "../animation";

const LoadingComponent = () => {
  return (
    <StyledDiv>
      <div className="inner-div">
        <h1>Loading</h1>
        <motion.div
          variants={popAnimationWrapper}
          initial="hidden"
          animate="show"
          className="dots-container"
        >
          <motion.div variants={loadingAnimation} className="dot">
            .
          </motion.div>
          <motion.div variants={loadingAnimation} className="dot">
            .
          </motion.div>
          <motion.div variants={loadingAnimation} className="dot">
            .
          </motion.div>
        </motion.div>
      </div>
    </StyledDiv>
  );
};

// Styling
const StyledDiv = styled(motion.div)`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner-div {
    display: flex;
    align-items: baseline;
    .dots-container {
      display: flex;
      align-items: baseline;
    }
    .dot {
      font-size: 5rem;
    }
  }
`;

export default LoadingComponent;

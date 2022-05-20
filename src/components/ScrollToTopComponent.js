import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ScrollToTopComponent = () => {
  return (
    <StyledDiv
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      whileHover={{ scale: 1.15 }}
    >
      <i class="fa-solid fa-arrow-up"></i>
    </StyledDiv>
  );
};

// Styling
const StyledDiv = styled(motion.div)`
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #ff0062;
  font-size: 2rem;
  cursor: pointer;
`;

export default ScrollToTopComponent;

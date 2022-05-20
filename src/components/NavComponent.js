import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navAnimation } from "../animation";

const NavComponent = () => {
  return (
    <Link to={"/"}>
      <StyledNav>
        <motion.h1 variants={navAnimation} initial="hidden" animate="show">
          Made with ❤ by <span>Vikas</span>
        </motion.h1>
      </StyledNav>
    </Link>
  );
};

// Styling
const StyledNav = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  span {
    color: #ff0062;
  }
`;

export default NavComponent;

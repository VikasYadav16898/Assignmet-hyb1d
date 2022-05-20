import React from "react";
import styled from "styled-components";

const CommentComponent = ({ author, comment }) => {
  return (
    <StyledDiv>
      <h3>{author}</h3>
      <p>{comment}</p>
    </StyledDiv>
  );
};

// Styling
const StyledDiv = styled.div`
  margin-bottom: 1rem;
`;

export default CommentComponent;

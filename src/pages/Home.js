import React, { useEffect, useState } from "react";
import { getPosts } from "../backend";
// Components import
import HomePostComponent from "../components/HomePostComponent";
import ScrollToTopComponent from "../components/ScrollToTopComponent";
import LoadingComponent from "../components/LoadingComponent";

// Styling and animation module import
import styled from "styled-components";
import { motion } from "framer-motion";
import { popAnimationWrapper } from "../animation";

const Home = () => {
  //States
  const [postList, setpostList] = useState([]);
  const [inputdata, setInputdata] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  console.log("HERE", process.env.REACT_APP_URL);

  // Initializing data
  useEffect(() => {
    setpostList([]);
    setIsLoading(true);
    getPosts(inputdata)
      .then((res) => {
        console.log(res.hits);
        setpostList(res.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [inputdata]);

  //   Handlers
  const inputHandler = (e) => {
    setInputdata(e.target.value);
  };
  return (
    <StyledDiv>
      <div className="input-block">
        <input
          type="text"
          placeholder="Search Posts"
          onChange={inputHandler}
          value={inputdata}
        />
      </div>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <motion.section
          className="result-section"
          variants={popAnimationWrapper}
          initial="hidden"
          animate="show"
        >
          {postList.map(({ objectID, title, author, points, created_at }) => (
            <HomePostComponent
              key={objectID}
              postId={objectID}
              title={title}
              author={author}
              points={points}
              date={created_at}
            />
          ))}
        </motion.section>
      )}
      <div className="scroll-top-container">
        <ScrollToTopComponent />
      </div>
    </StyledDiv>
  );
};

// Styling
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
  .input-block {
    width: 80%;
    display: flex;
    justify-content: center;
    padding: 2rem;
    input {
      width: 25rem;
      height: 3rem;
      padding: 1rem;
      font-size: 1.5rem;
      border-radius: 10px;
      color: #000000;
      :focus {
        outline-color: #ff0062;
      }
    }
  }
  .result-section {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .scroll-top-container {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
  }
`;

export default Home;

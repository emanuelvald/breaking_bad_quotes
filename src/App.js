import React, { useState } from "react";
import styled from "@emotion/styled";
import Quote from "./components/Quote";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [breakingBadQuote, setBreakingBadQuote] = useState({});

  const handleClickQuotes = async () => {
    const apiRequest = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const quote = await apiRequest.json();

    setBreakingBadQuote(quote[0]);
  };

  return (
    <Container>
      <Quote breakingBadQuote={breakingBadQuote} />
      <Button onClick={handleClickQuotes}>Get quote</Button>
    </Container>
  );
}

export default App;

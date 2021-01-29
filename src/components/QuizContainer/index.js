import React from 'react';
import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 333px;
  padding-top: 45px;
  margin: auto 13%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;
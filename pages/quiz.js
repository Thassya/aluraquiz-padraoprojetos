import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import db from '../db.json';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function QuizPage(){
    const router = useRouter();
    console.log(router);

    return (
        <QuizBackground backgroundImage={db.bg}>
             <QuizContainer>
                <Widget>
                    <Widget.Header>
                    <h1>{router.query["name"]}</h1>
                    </Widget.Header>
                    <Widget.Content>
                      <img src={db.questions[0].image} />

                    </Widget.Content>
                </Widget>
             </QuizContainer>
        </QuizBackground>
    );
}

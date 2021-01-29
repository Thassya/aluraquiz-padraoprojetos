/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
    //dessa forma o conteúdo não vem pre-renderizado como vimos! 
    // const [db, setDb] React.useState({})
    // React.useEffect(() => {
    // });
    return (
        //igual ni _app.js... inclusive as cores
    <ThemeProvider theme={dbExterno.theme}>
        <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
        />
    </ThemeProvider>
    // {/* <pre style={{ color: 'black' }}>
    //   {JSON.stringify(dbExterno.questions, null, 4)}
    // </pre> */}
    );
}

export async function getServerSideProps(context) {
  const [nomeProjeto, usuarioGithub] = context.query.id.split('___');

  //como tem o await, da pra fazer esse try catch tradicional e externo
  try {
      //o fetch retorna uma promessa
    const dbExterno = await fetch(`https://${nomeProjeto}.${usuarioGithub}.vercel.app/api/db`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
      // .catch((err) => {
      //   // console.error(err);
      // });

    // console.log('dbExterno', dbExterno);
    // console.log('Infos que o Next da para nós', context.query.id);
    return {
      props: {
        dbExterno,
      },
    };
  } catch(err) {
    throw new Error(err);
  }
}
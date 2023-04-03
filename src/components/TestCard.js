import { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import questions from '../contents/question';
import '../styles/TestCard.css'


const TestCard = ({ match }) => {

  const [curTest, setCurTest] = useState({});

  useEffect(()=>{
    const num = parseInt(match.params.id);

    if(questions){
      setCurTest(questions[num-1]);
    }
 
  }, [match]);


  const answer1 = () => {
    questions[curTest.id-1].answer = 1;
  };

  const answer2 = () => {
    questions[curTest.id-1].answer = 2;
  };

  const answer3 = () => {
    questions[curTest.id-1].answer = 3;
  };

  const answer4 = () => {
    questions[curTest.id-1].answer = 4;
  };

  const answer5 = () => {
    questions[curTest.id-1].answer = 5;
  };



  return (
    <div>
      <div className='question'>
        <div>질문: {curTest.id}</div>
        <div>{curTest.question}</div>
      </div>
      {curTest.id < 16 ? (
        <Link to={`/test/${curTest.id+1}`} className='link'>
          <ol>
            <li onClick={() => answer1()}>매우 그렇다</li>
            <li onClick={() => answer2()}>그렇다</li>
            <li onClick={() => answer3()}>별 생각없다</li>
            <li onClick={() => answer4()}>아니다</li>
            <li onClick={() => answer5()}>전혀 아니다</li>
          </ol>
        </Link>
      ) : (
        <Link to={`/end`} className='link'>
          <ol>
            <li onClick={() => answer1()}>매우 그렇다</li>
            <li onClick={() => answer2()}>그렇다</li>
            <li onClick={() => answer3()}>별 생각없다</li>
            <li onClick={() => answer4()}>아니다</li>
            <li onClick={() => answer5()}>전혀 아니다</li>
          </ol>
        </Link>
      )}
    </div>
  );
}

export default withRouter(TestCard);


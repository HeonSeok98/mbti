import { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import questions from '../contents/question';


const TestCard = ({ match }) => {

  const [curTest, setCurTest] = useState({});
  const [id, setId] = useState(0);

  useEffect(()=>{
    const num = parseInt(match.params.id);

    if(questions){
      setCurTest(questions[num-1]);
      setId(num+1);
    }
 
  }, [match]);


  const answer1 = () => {
    questions[match.params.id-1].answer = 1;
  };

  const answer2 = () => {
    questions[match.params.id-1].answer = 2;
  };

  const answer3 = () => {
    questions[match.params.id-1].answer = 3;
  };

  const answer4 = () => {
    questions[match.params.id-1].answer = 4;
  };

  const answer5 = () => {
    questions[match.params.id-1].answer = 5;
  };



  return (
    <div>
      <div>질문: {match.params.id}</div>
      <div>{curTest.question}</div>
      {match.params.id < 16 &&
        <Link to={`/test/${id}`}>
          <button onClick={() => answer1()}>매우 그렇다</button>
          <button onClick={() => answer2()}>그렇다</button>
          <button onClick={() => answer3()}>별 생각없다</button>
          <button onClick={() => answer4()}>아니다</button>
          <button onClick={() => answer5()}>전혀 아니다</button>
        </Link>
      }
      {match.params.id == 16 &&
        <Link to={`/end`}>
          <button onClick={() => answer1()}>매우 그렇다</button>
          <button onClick={() => answer2()}>그렇다</button>
          <button onClick={() => answer3()}>별 생각없다</button>
          <button onClick={() => answer4()}>아니다</button>
          <button onClick={() => answer5()}>전혀 아니다</button>
        </Link>
      }
    </div>
  );
}

export default withRouter(TestCard);


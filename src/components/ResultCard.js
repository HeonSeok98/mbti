import questions from '../contents/question';
import score from '../contents/score';
import result from '../contents/result';
import '../styles/ResultCard.css';


const ResultCard = () => {

  console.log(questions);

  if (questions[0].answer === 1) {
    score.j +=2;
  } else if (questions[0].answer === 2) {
    score.j +=1;
  } else if (questions[0].answer === 4) {
    score.p +=1;
  } else if (questions[0].answer === 5) {
    score.p +=2;
  }

  if (questions[1].answer === 1) {
    score.i +=2;
    score.s +=2;
    score.f +=2;
    score.j +=2;
  } else if (questions[1].answer === 2) {
    score.i +=1;
    score.s +=1;
    score.f +=1;
    score.j +=1;
  } else if (questions[1].answer === 4) {
    score.e +=1;
    score.n +=1;
    score.t +=1;
    score.p +=1;
  } else if (questions[1].answer === 5) {
    score.e +=2;
    score.n +=2;
    score.t +=2;
    score.p +=2;
  }

  if (questions[2].answer === 1) {
    score.i +=2;
  } else if (questions[2].answer === 2) {
    score.i +=1;
  } else if (questions[2].answer === 4) {
    score.e +=1;
  } else if (questions[2].answer === 5) {
    score.e +=2;
  }

  if (questions[3].answer === 1) {
    score.f +=2;
  } else if (questions[3].answer === 2) {
    score.f +=1;
  } else if (questions[3].answer === 4) {
    score.t +=1;
  } else if (questions[3].answer === 5) {
    score.t +=2;
  }

  if (questions[4].answer === 1) {
    score.i +=2;
  } else if (questions[4].answer === 2) {
    score.i +=1;
  } else if (questions[4].answer === 4) {
    score.e +=1;
  } else if (questions[4].answer === 5) {
    score.e +=2;
  }

  if (questions[5].answer === 1) {
    score.n +=2;
  } else if (questions[5].answer === 2) {
    score.n +=1;
  } else if (questions[5].answer === 4) {
    score.s +=1;
  } else if (questions[5].answer === 5) {
    score.s +=2;
  }

  if (questions[6].answer === 1) {
    score.p +=2;
  } else if (questions[6].answer === 2) {
    score.p +=1;
  } else if (questions[6].answer === 4) {
    score.j +=1;
  } else if (questions[6].answer === 5) {
    score.j +=2;
  }

  if (questions[7].answer === 1) {
    score.n +=2;
  } else if (questions[7].answer === 2) {
    score.n +=1;
  } else if (questions[7].answer === 4) {
    score.s +=1;
  } else if (questions[7].answer === 5) {
    score.s +=2;
  }

  if (questions[8].answer === 1) {
    score.e +=2;
    score.n +=2;
    score.t +=2;
    score.j +=2;
  } else if (questions[8].answer === 2) {
    score.e +=1;
    score.n +=1;
    score.t +=1;
    score.j +=1;
  } else if (questions[8].answer === 4) {
    score.i +=1;
    score.s +=1;
    score.f +=1;
    score.p +=1;
  } else if (questions[8].answer === 5) {
    score.i +=2;
    score.s +=2;
    score.f +=2;
    score.p +=2;
  }

  if (questions[9].answer === 1) {
    score.e +=2;
  } else if (questions[9].answer === 2) {
    score.e +=1;
  } else if (questions[9].answer === 4) {
    score.i +=1;
  } else if (questions[9].answer === 5) {
    score.i +=2;
  }

  if (questions[10].answer === 1) {
    score.n +=2;
    score.f +=2;
  } else if (questions[10].answer === 2) {
    score.n +=1;
    score.f +=1;
  } else if (questions[10].answer === 4) {
    score.s +=1;
    score.t +=1;
  } else if (questions[10].answer === 5) {
    score.s +=2;
    score.t +=2;
  }

  if (questions[11].answer === 1) {
    score.e +=2;
    score.f +=2;
  } else if (questions[11].answer === 2) {
    score.e +=1;
    score.f +=1;
  } else if (questions[11].answer === 4) {
    score.i +=1;
    score.t +=1;
  } else if (questions[11].answer === 5) {
    score.i +=2;
    score.t +=2;
  }

  if (questions[12].answer === 1) {
    score.n +=2;
  } else if (questions[12].answer === 2) {
    score.n +=1;
  } else if (questions[12].answer === 4) {
    score.s +=1;
  } else if (questions[12].answer === 5) {
    score.s +=2;
  }

  if (questions[13].answer === 1) {
    score.j +=2;
  } else if (questions[13].answer === 2) {
    score.j +=1;
  } else if (questions[13].answer === 4) {
    score.p +=1;
  } else if (questions[13].answer === 5) {
    score.p +=2;
  }

  if (questions[14].answer === 1) {
    score.e +=2;
    score.n +=2;
  } else if (questions[14].answer === 2) {
    score.e +=1;
    score.n +=1;
  } else if (questions[14].answer === 4) {
    score.i +=1;
    score.s +=1;
  } else if (questions[14].answer === 5) {
    score.i +=2;
    score.s +=2;
  }

  if (questions[15].answer === 1) {
    score.f +=2;
  } else if (questions[15].answer === 2) {
    score.f +=1;
  } else if (questions[15].answer === 4) {
    score.t +=1;
  } else if (questions[15].answer === 5) {
    score.t +=2;
  }

  console.log(score);

  let mbti='';

  if (score.i>=score.e) {
    mbti +='I';
  } else {
    mbti +='E';
  }
  if (score.s>=score.n) {
    mbti +='S';
  } else {
    mbti +='N';
  }
  if (score.f>=score.t) {
    mbti +='F';
  } else {
    mbti +='T';
  }
  if (score.j>=score.p) {
    mbti +='J';
  } else {
    mbti +='P';
  }

  const you = result.find(item => item.name === mbti);
  console.log(you);

  return (
    <div className='endPage'>
      <img src = {you.image} alt="" className='image'/>
      <div className='explain'>
        <div>결과: {you.name}</div>
        <div className='detail'>{you.message}</div>
      </div>
    </div>
  );
}

export default ResultCard;
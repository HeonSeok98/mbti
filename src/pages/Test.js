import { useState } from "react";
import '../styles/test.css';
import '../styles/golbal.css';


let i=0, e=0, s=0, n=0, f=0, t=0, j=0, p=0;

class Question {
  constructor(name) {
    this.name = name;
  }

  plusI() {
    i++
  }

  plusE() {
    e++
  }

  plusS() {
    s++
  }

  plusN() {
    n++
  }

  plusF() {
    f++
  }

  plusT() {
    t++
  }

  plusJ() {
    j++
  }

  plusP() {
    p++
  }
}

let questionList = [];

const question1 = new Question("나는 내일 할일을 생각한다")
questionList.push(question1);
const question2 = new Question("나는 롤할때 서폿, 정글을 하는편이다")
questionList.push(question2);
const question3 = new Question("말 많은 사람 상대하기 힘들다")
questionList.push(question3);
const question4 = new Question("슬픈 영화, 드라마를 보고 운적이 있다")
questionList.push(question4);
const question5 = new Question("사람을 2주일 이상 안만나 본적이 있다")
questionList.push(question5);
const question6 = new Question("계획없는 여행을 떠나보고 싶다")
questionList.push(question6);
const question7 = new Question("사과를 보면 로빈후드, 백설공주 이런게 떠오른다")
questionList.push(question7);
const question8 = new Question("내가 사업을 하면 성공 시킬수 있다")
questionList.push(question8);
const question9 = new Question("술자리를 자주 나간다")
questionList.push(question9);
const question10 = new Question("소문난 맛집은 찾아가봐야 한다")
questionList.push(question10);
const question11 = new Question("팀장을 할때 팀원들을 캐어주는것이 제일 중요하다")
questionList.push(question11);
const question12 = new Question("로또에 당첨되는 상상해봤다")
questionList.push(question12);
const question13 = new Question("기한이 충분한 과제를 미리한다")
questionList.push(question13);
const question14 = new Question("처음보는 사람에게 궁금한것이 많다")
questionList.push(question14);


function Test() {

  const [count, setCount] = useState(0);

  function next() {
    setCount(count+1)
  }

  return (
    <div className="container">
        <div className="question">{questionList[count].name}</div>
        <ol>
          <li onClick={next}>매우 그렇다</li>
          <li onClick={next}>그렇다</li>
          <li onClick={next}>별 생각없다</li>
          <li onClick={next}>아니다</li>
          <li onClick={next}>전혀 아니다</li>
        </ol>
    </div>
  );
}

export default Test;


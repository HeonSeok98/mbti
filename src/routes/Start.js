import '../css/start.css';
import '../css/golbal.css';
import { Link } from "react-router-dom";


function Start() {


  return (
    <div className="container">
        <div className="a">당신의 MBTI를 알아봅시다</div>
        <Link to="/test" className="btn">검사하러 가기</Link>
    </div>
  );
}

export default Start;


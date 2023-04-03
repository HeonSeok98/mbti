import { Link } from 'react-router-dom';
import '../styles/StartButton.css';

const StartButton = () => {

   return (
    <Link to="/test/1" className='btn'>검사하러 가기</Link>
  );
}
  
export default StartButton;


import TestCard from '../components/TestCard';
import '../styles/golbal.css';


const Test = ({ match }) => {


  return (
    <div className='container'>
      <TestCard match={match}></TestCard>
    </div>
  );
}

export default Test;


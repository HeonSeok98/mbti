import { useState } from "react";
import TestCard from '../components/TestCard';



const Test = () => {

  const [count, setCount] = useState(0);

  const next = () => {
    setCount(count+1)
  }

  return (
    <div>
        <TestCard></TestCard>
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


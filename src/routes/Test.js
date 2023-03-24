import { useEffect, useState } from "react";
import '../css/test.css';
import '../css/golbal.css';


function Test() {

  return (
    <div className="container">
        <div className="answer">나는 인스타에 자랑질 하는 색끼덜 이해가 안된다</div>
        <ol>
          <li>매우 그렇다</li>
          <li>그렇다</li>
          <li>별 생각없다</li>
          <li>아니다</li>
          <li>전혀 아니다</li>
        </ol>
    </div>
  );
}

export default Test;


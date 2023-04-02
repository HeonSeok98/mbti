import { useState, useEffect } from "react";
import TestCard from '../components/TestCard';



const Test = ({ match }) => {


  return (
    <div>
        <TestCard match={match}></TestCard>
    </div>
  );
}

export default Test;


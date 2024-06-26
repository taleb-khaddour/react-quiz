import React from "react";
import { useQuize } from "../QuizContext";

export default function NextButton() {
  const { index, numQuestion, answer, dispatch  } = useQuize();

  if (answer === null) return null;
  if (index < numQuestion - 1){
      return (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      );

  }else if(index === numQuestion - 1){
    return(
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finished" })}
        >
          Finish
        </button>
    )
  }
  else{
    return(
        <></>
    )
  }
}

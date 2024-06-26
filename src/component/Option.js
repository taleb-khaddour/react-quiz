import React from "react";
import { useQuize } from "../QuizContext";

export default function Option() {
  const{ questions,index, dispatch, answer } = useQuize();
  const question =questions[index];
   const hasAnswered = answer !== null;
  function HandelAnswer(index) {
    dispatch({ type: "newAnswer", payload: index });
  
  }
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
        disabled={hasAnswered}
          className={`btn btn-option ${index === answer ? " answer" : ""} ${
            hasAnswered?index === question.correctOption ? "correct" : "wrong":""
          }`}
          onClick={() => HandelAnswer(index)}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

import React, { useState } from "react";
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  const uiHandler = () => {};
  return (
    <div className="questionCard">
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p className="questions" dangerouslySetInnerHTML={{ __html: question }} />

      {answers.map((answer) => (
        <div key={answer} className="answers">
          <button
            className={`answerBtn ${
              userAnswer?.correctAnswer === answer && "correctAnswer"
            } ${
              userAnswer?.correctAnswer !== answer &&
              userAnswer?.answer === answer &&
              "wrongAnswer"
            }`}
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;

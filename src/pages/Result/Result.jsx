import "../../css/main.css";
import "./Result.css";
import { ResultTrophy, oops, goodtry } from "../../Assets";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context";
import { Loader } from "../../components";
import { useScrollToTop, useDocumentTitle } from "../../utils";

export const Result = () => {
  useScrollToTop();
  useDocumentTitle("Cric Quiz | Result");

  const [correctAnswers, setCorrectAnswers] = useState([]);

  const { selectedQuiz, answers, setAnswers, score, setScore } = useQuiz();
  const { selectedQuizData, selectedQuizLoading } = selectedQuiz;

  useEffect(() => {
    const rightAnswers = selectedQuizData.questions.map(
      (question) => question.answer
    );
    setCorrectAnswers(rightAnswers);
    for (let i = 0; i < rightAnswers.length; i++) {
      if (rightAnswers[i] === answers[i]) setScore((prev) => Number(prev) + 1);
    }
  }, []);

  const finishHandler = () => {
    setScore(0);
    setAnswers([]);
  };

  return (
    <main className="flex flex-grow-1 flex-justify-center flex-align-center">
      {correctAnswers.length === 0 && <Loader />}
      {correctAnswers.length !== 0 && (
        <div className="flex flex-column flex-align-center flex-gap-2 mt-3 mb-3">
          <h3 className="result-header font-semibold">Result</h3>
          {Number(score) >= 4 && (
            <>
              <img
                className="prize-img"
                src={ResultTrophy}
                alt="result-trophy"
              />
              <div>Congratulations!!!!</div>
            </>
          )}
          {Number(score) === 3 && (
            <>
              <img className="prize-img" src={goodtry} alt="goodtry" />
              <div>Good Try!!!!</div>
            </>
          )}
          {Number(score) <= 2 && (
            <>
              <img className="prize-img" src={oops} alt="oops" />
              <div>Better Luck Next Time!!!</div>
            </>
          )}
          <p className="final-score-info text-lg font-semibold">
            Final Score: <span>{score * 20}/100</span>
          </p>
          {selectedQuizLoading && <Loader />}
          {!selectedQuizLoading &&
            selectedQuizData.questions.map((question, questionNumber) => {
              return (
                <div
                  className="result-container flex flex-column flex-align-center flex-gap-2 pd-2"
                  key={question._id}
                >
                  <p className="font-semibold">{question.question}</p>
                  <ul className="option-container list-style-none flex flex-column flex-align-center flex-gap-1">
                    {question.options.map((option, index) => {
                      return option === answers[questionNumber] &&
                        option === correctAnswers[questionNumber] ? (
                        <li
                          key={index}
                          className="option-label-result correct-ans"
                        >
                          {option}
                        </li>
                      ) : option === answers[questionNumber] ? (
                        <li
                          key={index}
                          className="option-label-result wrong-ans"
                        >
                          {option}
                        </li>
                      ) : option === correctAnswers[questionNumber] ? (
                        <li
                          key={index}
                          className="option-label-result correct-ans"
                        >
                          {option}
                        </li>
                      ) : (
                        <li key={index} className="option-label-result">
                          {option}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          <Link
            to="/"
            onClick={finishHandler}
            className="finish-btn btn-solid btn-medium flex flex-justify-center flex-align-center"
          >
            Finish
          </Link>
        </div>
      )}
    </main>
  );
};

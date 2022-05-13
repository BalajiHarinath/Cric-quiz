import "../../css/main.css";
import "./Question.css";
import { Link, useParams } from "react-router-dom";
import { useQuiz } from "../../context";
import { Loader } from "../../components";
import { useState, useEffect } from "react";
import { useScrollToTop, useDocumentTitle } from "../../utils";

export const Question = () => {
  useScrollToTop();
  useDocumentTitle("Cric Quiz | Question");
  const { selectedQuiz, answers, setAnswers } = useQuiz();
  const { selectedQuizData } = selectedQuiz;
  let { questionNumber } = useParams();
  const [questionData, setQuestionData] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const quizId = selectedQuizData._id;
  const getQuestionData = () => {
    const requiredQuestion = selectedQuizData.questions[questionNumber];
    setQuestionData(requiredQuestion);
    setSelectedAnswer("");
  };

  useEffect(() => {
    getQuestionData();
  }, [questionNumber, questionData]);

  const answersUpdateHandler = () => {
    setAnswers([...answers, selectedAnswer]);
  };

  return (
    <main className="flex flex-grow-1 flex-justify-center flex-align-center">
      {Object.keys(questionData).length === 0 && <Loader />}
      {Object.keys(questionData).length !== 0 && (
        <div className="main-container flex flex-column flex-gap-2 mt-3 mb-3 pd-2">
          <h4 className="flex flex-justify-center font-semibold">
            {selectedQuizData.quizTitle}
          </h4>
          <div className="flex flex-justify-space-between">
            <p className="question-info text-sm">
              Question: <span>{Number(questionNumber) + 1}/5</span>
            </p>
            <p className="question-info text-sm">
              Points: <span>20</span>
            </p>
          </div>
          <p className="font-semibold flex flex-justify-center">
            {questionData.question}
          </p>
          <div className="option-container flex flex-column flex-align-center flex-gap-1">
            <label
              htmlFor="option1"
              className={`${
                questionData.options[0] === selectedAnswer
                  ? "option-label option-selected"
                  : "option-label"
              }`}
            >
              {questionData.options[0]}
            </label>
            <input
              type="radio"
              id="option1"
              name="option"
              onClick={() => setSelectedAnswer(questionData.options[0])}
            />

            <label
              htmlFor="option2"
              className={`${
                questionData.options[1] === selectedAnswer
                  ? "option-label option-selected"
                  : "option-label"
              }`}
            >
              {questionData.options[1]}
            </label>
            <input
              type="radio"
              id="option2"
              name="option"
              onClick={() => setSelectedAnswer(questionData.options[1])}
            />

            <label
              htmlFor="option3"
              className={`${
                questionData.options[2] === selectedAnswer
                  ? "option-label option-selected"
                  : "option-label"
              }`}
            >
              {questionData.options[2]}
            </label>
            <input
              type="radio"
              id="option3"
              name="option"
              onClick={() => setSelectedAnswer(questionData.options[2])}
            />

            <label
              htmlFor="option4"
              className={`${
                questionData.options[3] === selectedAnswer
                  ? "option-label option-selected"
                  : "option-label"
              }`}
            >
              {questionData.options[3]}
            </label>
            <input
              type="radio"
              id="option4"
              name="option"
              onClick={() => setSelectedAnswer(questionData.options[3])}
            />
          </div>

          <div className="flex flex-justify-end">
            {Number(questionNumber) + 1 ===
            selectedQuizData.questions.length ? (
              <Link
                onClick={answersUpdateHandler}
                to="/result"
                className={`${
                  selectedAnswer === "" ? "pointer-events-none" : ""
                } next-btn btn-solid btn-medium flex flex-justify-center flex-align-center`}
              >
                Result
              </Link>
            ) : (
              <Link
                onClick={answersUpdateHandler}
                to={`/question/${quizId}/${Number(questionNumber) + 1}`}
                className={`${
                  selectedAnswer === "" ? "pointer-events-none" : ""
                } next-btn btn-solid btn-medium flex flex-justify-center flex-align-center`}
              >
                Next
              </Link>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

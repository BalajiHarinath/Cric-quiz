import { createContext, useContext, useState } from "react";
import axios from "axios";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState({
    quizzesData: [],
    quizzesLoading: false,
  });
  const [selectedQuiz, setSelectedQuiz] = useState({});
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const getAllQuizzes = async () => {
    setQuizzes({ ...quizzes, quizzesLoading: true });
    try {
      const response = await axios.get("/api/quizzes");
      if (response.status === 200) {
        setQuizzes({
          quizzesData: response.data.quizzes,
          quizzesLoading: false,
        });
      }
    } catch (error) {
      console.error(error);
      setQuizzes({ ...quizzes, quizzesLoading: false });
    }
  };

  return (
    <QuizContext.Provider
      value={{ getAllQuizzes, quizzes, answers, setAnswers, score, setScore }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };

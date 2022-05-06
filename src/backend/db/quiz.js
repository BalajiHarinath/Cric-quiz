import { v4 as uuid } from "uuid";

export const quizzes = [
  {
    _id: uuid(),
    name: "odi",
    questions: [
      {
        id: uuid(),
        question: "Who won the first ever world cup?",
        options: ["Australia", "England", "India", "West Indies"],
        answer: "West Indies",
      },
      {
        id: uuid(),
        question: "Who has won the most number of world cups?",
        options: ["India", "Australia", "West Indies", "Sri Lanka"],
        answer: "Australia",
      },
      {
        id: uuid(),
        questions: "When did India play it's first one day international?",
        options: ["1979", "1987", "1974", "1975"],
        answer: "1974",
      },
      {
        id: uuid(),
        question: "Who was India's first one day captain?",
        options: ["Ajith Wadekar", "Kapil Dev", "Gavaskar", "Bishen singh Bedi"],
        answer: "Ajith Wadekar",
      },
      {
        id: uuid(),
        question: "Who has the most number of runs in one day international?",
        options: ["Sangakkara", "Kallis", "Tendulkar", "B Lara"],
        answer: "Tendulkar",
      },
    ],
  },


  {
    _id: uuid(),
    name: "t20",
    questions: [
      {
        id: uuid(),
        question: "Who won the first T20 world cup?",
        options: ["India", "Pakistan","Australia", "West Indies"],
        answer: "India",
      },
      {
        id: uuid(),
        question: "Who scored the first T20 international century?",
        options: ["Brendon McCullum", "Chris Gayle", "Virat Kohli", "Suresh Raina"],
        answer: "Chris Gayle",
      },
      {
        id: uuid(),
        question: "Who is the first bowler to take a hat trick in T20 international?",
        options: ["Tim Southee", "Lasith Malinga", "Brett Lee", "Jacob Oram"],
        answer: "Brett Lee",
      },
      {
        id: uuid(),
        question: "Which country was the first to win the T20 world cup twice?",
        options:["Australia", "England", "India", "West Indies"],
        answer: "West Indies",
      },
      {
        id: uuid(),
        question: "Who has the most number of runs in T20 internationals?",
        options: ["Rohit Sharma", "Chris Gayle", "Virat Kohli", "David Warner"],
        answer: "Rohit Sharma",
      },
    ],
  },



  {
    _id: uuid(),
    name: "test",
    // difficulty: "hard",
    // genre: ["action", "adventure"],
    // poster: "",
    questions: [
      {
        id: uuid(),
        question: "When was the first ever test match played?",
        options: ["1876", "1877", "1878", "1879"],
        answer: "1877",
      },
      {
        id: uuid(),
        question: "Which country has the most number of test wins?",
        options: ["India","Australia","England","West Indies"],
        answer: "Australia",
      },
      {
        id: uuid(),
        question: "Who won the first world test championship?",
        options: ["India","Australia","New Zealand","West Indies"],
        answer: "New Zealand",
      },
      {
        id: uuid(),
        question: "Who has scored the most number of runs in test cricket?",
        options: ["Sangakkara", "Kallis", "Tendulkar", "B Lara"],
        answer: "Tendulkar",
      },
      {
        id: uuid(),
        question: "Who has taken the most number of wickets in test cricket?",
        options: ["Shane Warne", "Muralitharan", "Steyn", "Anil Kumble"],
        answer: "Muralitharan",
      },
    ],
  },

];
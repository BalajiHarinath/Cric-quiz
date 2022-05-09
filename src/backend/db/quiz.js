import { v4 as uuid } from "uuid";
import  { IPLTrophy, ODITrophy, T20Trophy, TestTrophy }  from "../../Assets/index";

export const quizzes = [
  {
    _id: uuid(),
    name: "odi",
    title: "One Day Cricket",
    img: {
            src: ODITrophy,
            alt: "ODI-trophy",
        },
    description: "Do you really love OneDay Cricket ? Lets check...",
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
    title: "T20 Cricket",
    img: {
            src: T20Trophy,
            alt: "t20-trophy",
        },
    description: "Are you a T20holic ? If so this quiz is for you...",
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
    title: "Test Cricket",
    img: {
        src: TestTrophy,
        alt: "test-trophy",
    },
    description: "Are you a great fan of Test Cricket ? Lets explore...",
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


  {
    _id: uuid(),
    name: "ipl",
    title: "IPL",
    img: {
        src: IPLTrophy,
        alt: "ipl-trophy",
    },
    description: "Play this quiz if you are an IPL fan.",
    questions: [
      {
        id: uuid(),
        question: "When was the inaugural edition of IPL played?",
        options: ["2007", "2008", "2009", "2010"],
        answer: "2008",
      },
      {
        id: uuid(),
        question: "Who one the first ever IPL?",
        options: ["RCB","CSK","RR","MI"],
        answer: "RR",
      },
      {
        id: uuid(),
        question: "Who has won the most number of IPLs?",
        options: ["CSK","MI","KKR","RCB"],
        answer: "MI",
      },
      {
        id: uuid(),
        question: "Who has scored the most number of runs in IPL?",
        options: ["Virat Kohli", "Rohit Sharma", "Chris Gayle", "Suresh Raina"],
        answer: "Virat Kohli",
      },
      {
        id: uuid(),
        question: "Who scored the first IPL century?",
        options: ["Virat Kohli", "Manish Pandey", "Brendon McCullum", "Chris Gayle"],
        answer: "Brendon McCullum",
      },
    ],
  },

];
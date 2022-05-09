import "../../css/main.css";
import "./Home.css";
import { useState, useEffect } from "react";
import { HeroImage } from "../../Assets/index";
import { useQuiz } from "../../context";
import { Loader } from "../../components";

export const Home = () => {
  const { getAllQuizzes, quizzes } = useQuiz();
  const { quizzesData, quizzesLoading } = quizzes;

  useEffect(() => {
    getAllQuizzes();
  }, []);

  return (
    <main className="flex flex-column">
      <div className="homepage-text-img-container flex flex-gap-2">
        <div className="homepage-text flex flex-column flex-gap-1 flex-justify-center">
          <p className="text-2xl font-semibold">
            Feeling bored? Lets have some fun. Are a cricket fan? If so lets
            test your Cric knowledge!!!
          </p>
          <a
            href="#Categories"
            className="home-category-btn btn-solid btn-small flex flex-align-center"
          >
            Explore Categories
          </a>
        </div>
        <div>
          <img className="homepage-img" src={HeroImage} alt="hero-image" />
        </div>
      </div>

      <div className="spacer-2"></div>

      <div className="flex flex-column flex-justify-center flex-align-center">
        <h3 id="Categories">Categories</h3>

        <div className="flex flex-wrap m-2">
          {quizzesLoading && <Loader />}
          {!quizzesLoading &&
            quizzesData.map((category) => (
              <div
                className="category-item flex flex-justify-center flex-align-center"
                id="oneday"
                key={category._id}
              >
                <div className="quiz-homepage-card flex flex-column m-2 ">
                  <div className="quiz-homepage-card-img-container">
                    <img
                      className="quiz-homepage-card-img"
                      loading="lazy"
                      src={category?.img?.src}
                      alt={category?.img?.alt}
                    />
                  </div>
                  <div className="homepage-category-textoverlay flex flex-justify-center flex-align-center font-semibold">
                    Play Now
                  </div>
                  <div className="flex flex-column flex-gap-0-5 pd-1">
                    <h5 className="font-semibold">{category.title}</h5>
                    <p className="text-sm">{category.description}</p>
                    <span className="font-semibold">5 Questions</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

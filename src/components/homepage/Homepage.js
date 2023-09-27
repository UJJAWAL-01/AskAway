import React, { useState } from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon you want to use

function HomePage() {
  const [classrooms, setClassrooms] = useState([
    "MERN Lab",
    "Data Science",
    "Blockchain",
    "Software Engineering",
    "Operating Systems",
    "Computer Networks",
  ]);

  const [doubts, setDoubts] = useState([]);
  const [newDoubt, setNewDoubt] = useState("");
  const [answers, setAnswers] = useState({});

  const handleDoubtSubmit = () => {
    if (newDoubt.trim() !== "") {
      setDoubts([...doubts, newDoubt]);
      setAnswers({ ...answers, [newDoubt]: "" }); // Initialize the answer as an empty string
      setNewDoubt("");
    }
  };

  const handleAnswerChange = (doubt, answer) => {
    // Update the answer for the specified doubt
    setAnswers({ ...answers, [doubt]: answer });
  };

  return (
    <>
      <div className="homepage-container">
        <div className="classrooms">
          <h2>Classrooms</h2>
          {classrooms.map((classroom, index) => (
            <Link className="nav-link" to="/login" key={index}>
              <div className="classroom-tile">{classroom}</div>
            </Link>
          ))}
        </div>

        <div className="forum">
          <div className="doubt-container">
            <h2>Doubts</h2>
            {doubts.map((doubt, index) => (
              <div className="doubt-tile" key={index}>
                <div>
                  Question: {doubt}
                  <FontAwesomeIcon
                    icon={faComment}
                    bounce
                    size="2xs"
                    className="solution-icon"
                  />
                </div>
                {answers[doubt] !== undefined && (
                  <textarea
                    placeholder="Type your answer here..."
                    value={answers[doubt]}
                    onChange={(e) => handleAnswerChange(doubt, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="post-doubt">
          <h2>Post a Doubt</h2>
          <textarea
            placeholder="Type your doubt here..."
            value={newDoubt}
            onChange={(e) => setNewDoubt(e.target.value)}
          />
          <button onClick={handleDoubtSubmit} type="submit">
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;

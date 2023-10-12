import React, { useEffect, useState } from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const [classrooms, setClassrooms] = useState(["MERN Lab"]);

  const [doubts, setDoubts] = useState([]);
  const [newDoubt, setNewDoubt] = useState("");
  const [answers, setAnswers] = useState({});
  const [submittedAnswers, setSubmittedAnswers] = useState({});

  const classStatistics = [
    { className: "MERN Lab", totalDoubts: 10, answeredDoubts: 7 },
    // Add more statistics as needed for other classes
  ];

  const handleDoubtSubmit = async () => {
    console.log("gg");
    if (newDoubt.trim() !== "") {
      try {
        const response = await fetch("http://localhost:3001/api/saveDoubt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: newDoubt }),
        });

        const data = await response.json();

        if (data.success) {
          console.log("Doubt saved successfully");
          setDoubts([...doubts, { text: newDoubt, _id: data._id }]);
          setAnswers({ ...answers, [newDoubt]: "" }); // Initialize the answer as an empty string
          setNewDoubt("");
        } else {
          console.error("Error saving doubt:", data.message);
        }
      } catch (error) {
        console.error("Error saving doubt:", error);
      }
    }
  };

  const handleAnswerChange = (doubt, answer) => {
    // Update the answer for the specified doubt
    setAnswers({ ...answers, [doubt.text]: answer });
  };
  console.log(answers);
  const handleAnswerSubmit = async (doubt) => {
    console.log(doubt);
    const answer = answers[doubt.text];
    console.log(`Submitting answer for doubt: ${doubt.text}`);
    const response = await fetch("http://localhost:3001/api/saveAnswer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: answer, id: doubt._id }),
    });
    setSubmittedAnswers({ ...submittedAnswers, [doubt.text]: answer });
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/GetDoubt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let b = [];
        let a = {};
        for (let i = 0; i < data.data.length; i++) {
          b.push(data.data[i]);
          a[data.data[i].text] = data.data[i].answer;
        }
        setDoubts(b);
        setSubmittedAnswers(a);
      });
  }, []);
  return (
    <>
      <div className="homepage-container">
        <div className="classrooms">
          <h2>Classrooms</h2>
          {classrooms.map((classroom, index) => (
            <Link className="nav-link" to="/" key={index}>
              <div className="classroom-tile">{classroom}</div>
            </Link>
          ))}
        </div>

        <div className="forum">
          <div className="doubt-container">
            <h2>Doubts</h2>
            {doubts.map((doubt, index) => (
              <div className="doubt-tile" key={index}>
                <div>Question: {doubt.text}</div>
                <div className="answer-container">
                  <textarea
                    placeholder="Type your answer here..."
                    value={answers[doubt.text]}
                    onChange={(e) => handleAnswerChange(doubt, e.target.value)}
                  />
                  <button
                    className="submit-answer"
                    onClick={() => handleAnswerSubmit(doubt)}
                  >
                    <FontAwesomeIcon icon={faCheckCircle} /> Submit
                  </button>
                </div>
                {submittedAnswers[doubt.text] && (
                  <div className="submitted-answer">
                    <strong>Your Answer:</strong> {submittedAnswers[doubt.text]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="right-coloum">
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

          <div className="statistics-container">
            <h2>Class Statistics</h2>
            {classStatistics.map((stat, index) => (
              <div className="class-stat" key={index}>
                <div>Class: {stat.className}</div>
                <div>Total Doubts: {stat.totalDoubts}</div>
                <div>Answered Doubts: {stat.answeredDoubts}</div>
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

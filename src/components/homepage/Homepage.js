import React, { useState } from "react";
import "./homepage.css";

function HomePage() {
  const [classrooms, setClassrooms] = useState([
    "Classroom 1",
    "Classroom 2",
    "Classroom 3",
  ]);

  const [doubts, setDoubts] = useState([]);
  const [newDoubt, setNewDoubt] = useState("");

  const handleDoubtSubmit = () => {
    if (newDoubt.trim() !== "") {
      setDoubts([...doubts, newDoubt]);
      setNewDoubt("");
    }
  };

  return (
    <>
      <div className="homepage-container">
        <div className="classrooms">
          <h2>Classrooms</h2>
          {classrooms.map((classroom, index) => (
            <div className="classroom-tile" key={index}>
              {classroom}
            </div>
          ))}
        </div>

        
          <div className="forum">
            <div className="doubt-container">
              <h2>Doubts</h2>
              <ul>
                {doubts.map((doubt, index) => (
                  <li key={index}>{doubt}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="post-doubt">
            <h2>Post a Doubt</h2>
            <textarea
              placeholder="Type your doubt here..."
              value={newDoubt}
              onChange={(e) => setNewDoubt(e.target.value)}
            />
            <button onClick={handleDoubtSubmit} type="submit">Post</button>
          </div>
        
      </div>
    </>
  );
}

export default HomePage;

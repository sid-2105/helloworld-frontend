import "./Help.css";
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [topics, setTopics] = useState([]);
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setTopics([...topics, value]);
    } else {
      setTopics(topics.filter((topic) => topic !== value));
    }
  };

  const handleSave = async (e) => {
    e.preventDefault()
    if(name === "" || email === "" || studentId === "" || topics.length === 0){
      return alert("Please fill all fields!!")
    }
    if(studentId<0){
      return alert("Enter valid StudentId!!")
    }
    
    const help = {
      name,
      email,
      studentID : parseInt(studentId),
      topics,
      description
    }

    try {
      const response = await fetch("http://localhost:3000/help", {
        method: "POST",
        body: JSON.stringify(help),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        return alert("Sent successfully");
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="Page">
      <h1>Help</h1>
      <div className="form">
        <form>
          <label> Your Name*</label>
          <input type="text" onChange={(e) => setName(e.target.value)}></input>
          <label>Email*</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Student ID*</label>
          <input
            type="number"
            onChange={(e) => setStudentId(e.target.value)}
          ></input>
          <label>Topics*</label>
          <div className="check">
            <input
              type="checkbox"
              id="topic1"
              name="topic1"
              value="AIML"
              onChange={handleChange}
            ></input>{" "}
            <label for="topic1">AIML</label>
            <input
              type="checkbox"
              id="topic2"
              name="topic2"
              value="CP"
              onChange={handleChange}
            ></input>
            <label for="topic2">Competitive Programming</label>
            <input
              type="checkbox"
              id="topic3"
              name="topic3"
              value="WD"
              onChange={handleChange}
            ></input>
            <label for="topic3">Web Development</label>
            <input
              type="checkbox"
              id="topic4"
              name="topic4"
              value="AD"
              onChange={handleChange}
            ></input>{" "}
            <label for="topic4">App Development</label>
            <input
              type="checkbox"
              id="topic5"
              name="topic5"
              value="Others"
              onChange={handleChange}
            ></input>{" "}
            <label for="topic5">Others</label>
          </div>
          <label>In case of others please specify</label>
          <textarea
            rows="4"
            placeholder="Type your message here"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="btn" onClick={handleSave}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

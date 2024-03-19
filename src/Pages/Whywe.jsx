import React from "react";
import "./Whywe.css";
import TypingEffect from "../Components/Typing Effect/TypingEffect";

const Whywe = () => {
  return (
    <div className="Page">
      <h1>Why He110 W0r1d</h1>
      <div className="whywe">
        <div className="whywe_left">
          <TypingEffect
            message={`We need He110 W0rld because it helps in following ways:

            ● Community Building - He110 Wor1d will serve as a platform for building a strong sense of community among students within the college. By bringing together individuals with similar interests in learning and mentorship, the club will foster connections and friendships that extend beyond academic pursuits.

            ● Supportive Environment - The club will create a supportive environment where students can seek guidance, share knowledge, and collaborate on academic and personal growth. This environment is essential for students to thrive and overcome challenges they may face during their college journey. 

            ● Learning Opportunities - He110 Wor1d will offer various learning opportunities through workshops, study groups, guest lectures, and skill-building activities. These opportunities will supplement formal education by providing practical insights, real-world experiences, and exposure to diverse perspectives. 

            ● Mentorship and Guidance - The club will facilitate mentorship programs where experienced students can mentor juniors, offering guidance, advice, and support in navigating academic and career challenges. Mentorship fosters personal development, boosts confidence, and helps students make informed decisions about their future.

            ● Networking - He110 Wor1d will provide a platform for students to network with peers, alumni, and professionals in their field of interest. Networking is crucial for exploring career opportunities, gaining insights into different industries, and building connections that can lead to internships, jobs, or collaborative projects.`} typingSpeed={30} />
        </div>
        <div className="whywe_right">
          <img src="./whywe.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Whywe;

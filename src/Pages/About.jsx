import React from "react";
import "./About.css";
import TypingEffect from "../Components/Typing Effect/TypingEffect";

const About = () => {
  return (
    <div className="Page">
      <h1>About Us</h1>
      <div className="about">
        <div className="about_left">
          <img src="./about-bg.png" alt="" />
        </div>
        <div className="about_right">
          <TypingEffect
            message={`Welcome to He110 W0r1d - Where Code Meets Community!

            What sets He110 W0r1d apart is our unwavering commitment to fostering a culture of creativity, collaboration, and continuous learning. We believe that coding is not just about writing lines of code; it's about unleashing your imagination, solving complex problems, and building solutions that make a difference.
            
            HelloWorld is a student-led coding and programming-oriented club at the United College of Engineering and Research Naini, with the aim of providing new and budding programmers as well as experienced ones with a common platform to share their interests, knowledge, and motivations so we can all learn, share, and grow together.
            The club provides you various workshops on trendy technologies like CyberSecurity, AIML, Competitive Coding, DS Algo etc.
            
            Joining He110 W0r1d means stepping into a world where you'll:
            1. Explore Boundless Opportunities
            2. Connect with Like-Minded Innovators
            3. Empower Yourself Through Learning
            4. Make an Impact
            
            So, whether you're here to sharpen your coding skills, expand your professional network, or simply connect with a community of like-minded individuals, we invite you to join us on this exciting journey. Together, let's unlock the boundless possibilities of code and create a brighter, more innovative future for us all.
            
            Ready to dive in? Join He110 W0r1d today and let's write the next chapter of our coding adventure together!`}
            typingSpeed={30}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./Community.css";
import TypingEffect from "../Components/Typing Effect/TypingEffect";

const Community = () => {
  return (
    <div className="Page">
      <h1>Community</h1>
      <div className="community">
        <div className="com_left">
          <TypingEffect
            message={`At He110 W0r1d, we're not just a society; we're a vibrant community of passionate coders and programmers united by our love for technology and innovation. Whether you're a seasoned developer, a curious beginner, or simply someone fascinated by the endless possibilities of coding, you'll find a home here.We're proud to have built a diverse and inclusive community of coders, programmers, and tech enthusiasts who come together to learn, collaborate, and grow.

            A community where you can ask questions to your seniors, faculty members through various social media platforms i.e Instagram, Discord, Whatsapp etc. to support in your ongoing journey.
            To have a platform where programmers and developers are made aware of the basic concepts that make a solid foundation as well as the new trends that keep us on our toes will not only allow us to have a better grasp on academic concepts but also give us a better perspective about our goals and future endeavors.
            
            As students and as fellow growing developers, we know the challenges faced by those in the early stages of CSE, from balancing academics with skill development to discovering our strengths, weaknesses, and areas of interest. Treading these waters can be easy for some yet dire for others. All we want to do is give a helping hand and, through the guidance of experts and professionals, the right direction and encouragement so that those who have the courage and determination to face such challenges reach their desired goal and then help others reach theirs as well.
            
            Ready to become a part of our vibrant community? Whether you're looking to connect with fellow coders, expand your professional network, or simply share your passion for technology, we invite you to join us at He110 W0r1d. Together, we'll learn, grow, and build the future of technology, one line of code at a time.
            
            Join He110 W0r1d today and let's embark on this exciting coding journey together!`} typingSpeed={30} />
        </div>
        <div className="com_right">
          <img src="./community-bg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Community;

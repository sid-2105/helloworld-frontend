import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import './TypingEffect.css'; 

function TypingEffect({ message, typingSpeed }) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < message.length) {
        setText(prevText => prevText + message.charAt(index));
        setIndex(prevIndex => prevIndex + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [index, message, typingSpeed]);

  const sanitizedText = DOMPurify.sanitize(text);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerText = sanitizedText;
    }
  }, [sanitizedText]);

  return (
    <div className="typing-container">
      <p ref={containerRef} className="typing-text" >{text}</p>
    </div>
  );
}

TypingEffect.propTypes = {
  message: PropTypes.string.isRequired,
  typingSpeed: PropTypes.number.isRequired,
};

TypingEffect.defaultProps = {
  typingSpeed: 100, 
};

export default TypingEffect;

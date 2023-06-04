"use client";
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = ({options: { strings, typeSpeed, loop = false }} ) => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed,
      loop,
    };

    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, loop]);

  return <span ref={typingRef}></span>;
};

export default TypingAnimation;

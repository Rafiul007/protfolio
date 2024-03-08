import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './Progressbar.css'; // Assuming your CSS file is in the same directory

const Progressbar = ({ skill, percentage }) => {
  const progress = useSpring({
    width: `${percentage}%`,
    from: { width: '0%' },
    config: { mass: 1, tension: 100, friction: 300, duration: 100 },
  });

  const [isScrolledIntoView, setIsScrolledIntoView] = useState(false);
  const progressbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (progressbarRef.current) {
        const rect = progressbarRef.current.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsScrolledIntoView(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [progressbarRef]);

  return (
    <div className="skill-progress-bar" ref={progressbarRef}>
      <animated.div className="progress-bar" style={{ width: isScrolledIntoView ? progress.width : 0 }}>
        <span>{skill}</span>
      </animated.div>
      <span className="percentage">{percentage}%</span>
    </div>
  );
};

export default Progressbar;

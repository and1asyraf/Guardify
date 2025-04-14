import React from 'react';
import { useSpring, animated } from 'react-spring';
import './TeamSlider.css';
import MAHDIL from './image/MAHDIL.png';
import AMIRUL from './image/AMIRUL.png';
import ARIF from './image/ARIF.png';

const LeadershipCard = ({ leader }) => {
  const [style, set] = useSpring(() => ({ opacity: 1, scale: 1 }));

  const handleMouseEnter = () => {
    set({ opacity: 0.8, scale: 1.2 });
  };

  const handleMouseLeave = () => {
    set({ opacity: 1, scale: 1 });
  };

  return (
     
    <animated.div
      className="leadership-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        backgroundImage: `url(${leader.image})`,
      }}
    >
      <div className="card-content">
        <h3>{leader.name}</h3>
        <p>{leader.position}</p>
      </div>

    </animated.div>
    

  );
};



const leaders = [
  {
    id: 1,
    name: 'ANDI',
    position: 'Chief Executive Officer',
    image: 'ANDI.png', // Replace with actual image file
  },  {
    id: 2,
    name: 'MAHDIL',
    position: 'Chief Technology Officer',
    image: MAHDIL, // Replace with actual image file
  },

  {
    id: 3,
    name: 'ARIF',
    position: 'Chief Financial Officer',
    image: ARIF, // Replace with actual image file
  },
  {
    id: 4,
    name: 'AMIRUL',
    position: 'Chief Operating Officer',
    image: AMIRUL, // Replace with actual image file
  },
];

const TeamSlider = () => {
  return (
    <div className='Container'>
      <h1>OUR BOARD OF DIRECTORS</h1>
    <div className="leadership-slider">
      {leaders.map((leader) => (
        <LeadershipCard key={leader.id} leader={leader} />
      ))}
    </div>
    </div>
  );
};

export default TeamSlider;


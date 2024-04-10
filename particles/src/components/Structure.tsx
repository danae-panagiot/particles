import React from "react";
import '../Structure.css';
import { motion } from "framer-motion";

const Structure: React.FC = () => {
  const spacingX = window.innerWidth / 4; 
  const spacingY = window.innerHeight / 4;
  return (
    <div className="structure">
      <motion.img
        src="/images/cat.png"
        initial={{ x: -spacingX, y: spacingY }} // Initial position
        animate={{ x: (window.innerWidth / 2 - spacingX/2), y: window.innerHeight / 4 }} // Animate to the middle
        transition={{ duration: 2 }}
      />
      <motion.img
        src="/images/hey.png"
        initial={{ x:spacingX, y: spacingY }} // Initial position
        animate={{ x: window.innerWidth - 2*spacingX,y: window.innerHeight / 4  }} // Animate to the middle
        transition={{ duration: 2 }}
      />
      <motion.img
        src="/images/heart.png"
        initial={{ x: window.innerWidth + spacingX , y: spacingY }} // Initial position
        animate={{ x: window.innerWidth /2 + spacingX/2, y: window.innerHeight / 4  }} // Animate to the middle
        transition={{ duration: 2 }}
        />
      <motion.img
        src="/images/go.png"
        style={{width: 200, height:200}}
        initial={{ x: -spacingX, y: -spacingY }} // Initial position
        animate={{ x: (window.innerWidth / 2 - spacingX/2) - 400, y: window.innerHeight / 2 }} // Animate to the middle
        transition={{ duration: 2 }}
      />
      <motion.img
        src="/images/smile.png"
        style={{width: 200, height:200}}
        initial={{ x:spacingX, y: -spacingY }} // Initial position
        animate={{ x: window.innerWidth - 2*spacingX - 100 , y: window.innerHeight / 2  }} // Animate to the middle
        transition={{ duration: 2 }}
      />
      <motion.img
        src="/images/hi.png"
        style={{width: 200, height:200}}
        initial={{ x: window.innerWidth + spacingX  , y: -spacingY }} // Initial position
        animate={{ x: window.innerWidth /2 + spacingX/2 + 200, y: window.innerHeight / 2  }} // Animate to the middle
        transition={{ duration: 2 }}

      />
    </div>
  );
};

export default Structure;

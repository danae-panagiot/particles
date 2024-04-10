import React from "react";
import { motion } from "framer-motion";

const Structure: React.FC = () => {
  return (
    <div className="structure">
      <motion.img
        src="/images/cat.png"
        style={{ width: 100, height: 100 }}
        initial={{ x: -100, y: -100 }}
        animate={{ x: 400, y: 100 }}
        transition={{ duration: 2 }}
      />
      <motion.img
        src="/images/hey.png"
        style={{ width: 100, height: 100 }}
        initial={{ x: 0, y: 0 }}
        animate={{ x: 400, y: 200 }}
        transition={{ duration: 2 }}
      />
      <motion.img
        src="/images/heart.png"
        style={{ width: 100, height: 100 }}
        initial={{ x: 100, y: 100 }}
        animate={{ x: 400, y: 300 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};

export default Structure;

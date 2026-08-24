import React from 'react'
import { motion } from 'motion/react'
import './Invitation2.css'
const Invitation2 = () => {
  return (
    
   <><main className="sudipta-invitation-page">
    <div className="element element-one"></div>
<div className="element element-two"></div>
<div className="element element-three"></div>
<div className="element element-four"></div>
 <div className="fiber-line fiber-line-1">
  <span></span>
  <i></i>
</div>

<div className="fiber-line fiber-line-2">
  <span></span>
  <i></i>
</div>

<div className="fiber-line fiber-line-3">
  <span></span>
  <i></i>
</div>

<div className="fiber-line fiber-line-4">
  <span></span>
  <i></i>
</div>

      <div className="fiber-node node-1"></div>
      <div className="fiber-node node-2"></div>
      <div className="fiber-node node-3"></div>
      <div className="fiber-node node-4"></div>

      <motion.div
        className="sudipta-invitation-card"
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="invitation-inner-border"></div>

        <motion.div
          className="invitation-top-line"
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
        />

        <motion.p
          className="sudipta-invitation-label"
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
          }}
        >
          YOU ARE CORDIALLY INVITED
        </motion.p>

        <motion.div
          className="fiber-emblem"
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -45,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 0.8,
            type: "spring",
            stiffness: 180,
            damping: 12,
          }}
        >
          <span></span>
          <b>✦</b>
          <span></span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
          }}
        >
          Happy
          <span>Teacher's Day</span>
        </motion.h1>

        <motion.div
          className="sudipta-divider"
          initial={{
            width: 0,
          }}
          animate={{
            width: 100,
          }}
          transition={{
            delay: 1.2,
            duration: 0.7,
          }}
        />

        <motion.p
          className="sudipta-invitation-message"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
          }}
        >
          To a teacher whose guidance helps us connect
          ideas, explore new possibilities, and see every
          challenge as an opportunity to learn.
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.6,
          }}
        >
          Sudipta Das
        </motion.h2>

        <motion.p
          className="sudipta-role"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
          }}
        >
          Faculty · Computer Networks
        </motion.p>

        <motion.div
          className="sudipta-event-details"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2,
          }}
        >
          <div>
            <span>DATE</span>
            <strong>03 SEPTEMBER</strong>
          </div>

          <div className="event-divider"></div>

          <div>
            <span>OCCASION</span>
            <strong>TEACHER'S DAY</strong>
          </div>
           <div className="event-divider"></div>
          <div>
            <span>VENUE</span>
            <strong>Room No.4201</strong>
          </div>
        </motion.div>

        <motion.p
          className="sudipta-bottom-note"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.3,
          }}
        >
          Connected by knowledge · Guided by you
        </motion.p>
      </motion.div>
    </main></>
  )
}

export default Invitation2
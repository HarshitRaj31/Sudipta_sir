import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import "./Envelope2.css";

const Envelope2 = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      navigate("/invitation");
    }, 2200);
  };
  return (
    <main className="envelope-page">
      <div className="fiber-bg fiber-bg-1" />
      <div className="fiber-bg fiber-bg-2" />
      <div className="fiber-bg fiber-bg-3" />

      <motion.div
        className="envelope-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.p
          className="invitation-label"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          A SPECIAL INVITATION
        </motion.p>

        <div
          className={`envelope ${opened ? "is-open" : ""}`}
          onClick={handleOpen}
        >
          <motion.div
            className="letter"
            animate={
              opened
                ? {
                    y: -145,
                    scale: 1.04,
                  }
                : {
                    y: 0,
                    scale: 1,
                  }
            }
            transition={{
              duration: 1.5,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span>A SPECIAL INVITATION</span>

            <h1>For Sudipta Das</h1>

            <div className="letter-line">✦</div>

            <p>
              With gratitude,
              <br />
              respect & love
            </p>
          </motion.div>

          <div className="envelope-back" />
          <div className="envelope-left" />
          <div className="envelope-right" />
          <div className="envelope-front" />

          <motion.div
            className="envelope-flap"
            animate={{
              rotateX: opened ? -180 : 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <AnimatePresence>
            {!opened && (
              <motion.div
                className="wax-seal"
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.4,
                  opacity: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 16,
                }}
              >
                <span>🔌</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              className="open-area"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              

              
            </motion.div>
          ) : (
            <motion.p
              className="opening-message"
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              A little surprise, specially created for you ✦
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
};

export default Envelope2;
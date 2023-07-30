import { motion } from "framer-motion";

import Fogs from "./components/Fogs";

const sportcarVariants = {
    wheelVariants: {
      initial: {
        transform: "rotate(15deg)"
      },
      animate: {
        transform: "rotate(360deg)",
        transition: {
          ease: "linear",
          duration: 0.5,
          repeat: Infinity
        }
      }
    },
    bodyVariants: {
      initial: {
        left: "0px",
        top: "0px"
      },
      animate: {
        left: "2500px",
        top: ["0px", "-50px", "0px"],
      }
    }
}


const SportCar = ({ delay }: { delay: number }) => {
    return (
        <motion.div
          variants={sportcarVariants.bodyVariants}
          initial="initial"
          animate="animate"
          className="sportcar"
          transition={{
            duration: 15,
            delay,
            ease: "linear",
            top: {   
                delay: delay + 2,
                duration: 5,
            }
          }}
        >
          <div className="sportcar_base">
            <div className="sportcar_cabin" />
            <motion.div 
              variants={sportcarVariants.wheelVariants}
              initial="initial"
              animate="animate"
              className="wheel wheel_forward"
              >
              <div className="wheel_rect wheel_rect_1" />
              <div className="wheel_rect wheel_rect_2" />
              <div className="wheel_rect wheel_rect_3" />
              <div className="wheel_rect wheel_rect_4" />
              <div className="wheel_rect wheel_rect_5" />
              <div className="wheel_rect wheel_rect_6" />
            </motion.div>
            <motion.div 
              variants={sportcarVariants.wheelVariants}
              initial="initial"
              animate="animate"
              className="wheel wheel_backward">
              <div className="wheel_rect wheel_rect_1" />
              <div className="wheel_rect wheel_rect_2" />
              <div className="wheel_rect wheel_rect_3" />
              <div className="wheel_rect wheel_rect_4" />
              <div className="wheel_rect wheel_rect_5" />
              <div className="wheel_rect wheel_rect_6" />
            </motion.div>
            <div className="pipe" />
            <Fogs zIndex={4}/>
          </div>
        </motion.div>
    )
}

export default SportCar;
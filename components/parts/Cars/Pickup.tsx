import { motion } from "framer-motion";

import Fogs from "./components/Fogs";

const pickupVariants = {
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
      left: "0px"
    },
    animate: {
      left: "2500px",
    }
  }
}

const Pickup = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      variants={pickupVariants.bodyVariants}
      initial="initial"
      animate="animate"
      className="pickup"
      transition={{
        ease: "linear",
        duration: 25,
        delay
      }}
    >
      <div className="pickup_base">
        <div className="pickup_cabin" />
        <motion.div 
          variants={pickupVariants.wheelVariants}
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
          variants={pickupVariants.wheelVariants}
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
        <Fogs zIndex={5}/>
      </div>
    </motion.div>
  )
}

export default Pickup;
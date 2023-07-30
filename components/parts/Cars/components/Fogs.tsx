import { motion } from "framer-motion";

const getRandomNumberWithPixels = (number:number, range:number) => number - range + Math.random() * number + "px";

const getFogVariants = () => ({
    initial:{
      width: "15px",
      height: "15px",
      borderRadius: "10px 15px 0px 20px"
    },
    animate: {
      width: ["15px", getRandomNumberWithPixels(15, 10), getRandomNumberWithPixels(15, 10)],
      height: ["15px", getRandomNumberWithPixels(15, 10), getRandomNumberWithPixels(15, 10)],
      borderRadius: ["10px 15px 0px 20px", `${getRandomNumberWithPixels(15, 10)} ${getRandomNumberWithPixels(15, 10)} ${getRandomNumberWithPixels(15, 10)} ${getRandomNumberWithPixels(15, 10)}`,
                     `${getRandomNumberWithPixels(15, 10)} ${getRandomNumberWithPixels(15, 10)} ${getRandomNumberWithPixels(15, 10)} ${getRandomNumberWithPixels(15, 10)}`],
      transition: {
        duration: 1,
        repeat: Infinity
      }
    }
});

const Fogs = ({zIndex}:{zIndex: number}) => (
    <div
    className="fogs">
      <motion.div 
        variants={getFogVariants()}
        className="fog fog_1"
        style={{
            zIndex
        }} />
      <motion.div
        variants={getFogVariants()}
        className="fog fog_2"
        style={{
            zIndex
        }} />
      <motion.div 
        variants={getFogVariants()}
        className="fog fog_3"
        style={{
            zIndex
        }} />
  </div>
)

export default Fogs;
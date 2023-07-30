import { motion } from "framer-motion";

const birdVariants = {
    bodyVariants: {
        initial: {
            right: "2100px"
        },
        animate: {
            right: "-400px",
        }
    },
    wingVariants: {
        initial: {
            transform: "rotateX(0deg)"
        },
        animate: {
            transform: ["rotateX(0deg)", "rotateX(180deg)", "rotateX(0deg)"],
        }
    }
}

export const flockDetails = [
    {
        top: 100,
        delay: 0.25
    },
    {
        top: 130,
        delay: 0.5
    },
    {
        top: 70,
        delay: 0.71
    }
];

const Bird = ({top, delay}:{delay: number, top: number}) =>  (
    <motion.div
        variants={birdVariants.bodyVariants}
        initial="initial"
        animate="animate"
        transition={{
            delay,
            duration: 10,
            ease: "linear",
        }}
        className="bird"
        style={{
            top: top + "px"
        }}
    >
        <div className="bird_head" />
        <div className="bird_body" />
        <div className="bird_tail" />
        <motion.div
            variants={birdVariants.wingVariants as any}
            initial="initial"
            animate="animate"
            transition={{
                duration: Math.random()/2 + 0.5,
                repeat: Infinity,
            }}
            className="bird_wing bird_wing_1">
            <div className="bird_wing_zigzag bird_wing_zigzag_1" />
            <div className="bird_wing_zigzag bird_wing_zigzag_2" />
            <div className="bird_wing_zigzag bird_wing_zigzag_3" />
        </motion.div>
    </motion.div>
);

export default ({delay}:{delay:number}) => <>
  {flockDetails.map(({ delay: relationalDelay, top }, index) =>
    <Bird
        key={index}
        delay={delay + relationalDelay}
        top={top} />)} </> ;
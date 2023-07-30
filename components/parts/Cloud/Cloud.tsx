import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Rain from "./components/Rain";

const getCloudVariants = (delay:number, direction: "right"|"left", duration:number) => {
    let initialOptions = {};
    let animateOptions = {};
    if (direction === "right") {
        initialOptions = {
            left: "-200px",
        }
    } else {
        initialOptions = {
            right: "-100px"
        }
    }
    if (direction === "right") {
        animateOptions = {
            left: "2500px",
            transition: {
                duration, 
                delay
            }
        }
    } else {
        animateOptions = {
            right: "2500px",
            transition: {
                delay, 
                duration
            }
        }
    }
    return {
        initial:initialOptions,
        animate:animateOptions,
    }
}

const Cloud = ({direction, duration, top, delay, rainOptions}:{
         direction: "right"|"left",
         duration: number,
         top: number,
         delay:number,
         rainOptions?:{
            duration: number,
            when:number,
            delay: number
         }}) => {
  const [showRain, setShowRain] = useState<boolean>(false);
  const cloudRef = useRef<any>(null);

  const cloudVariants = getCloudVariants(delay, direction, duration);

  useEffect(() => {
      if (rainOptions) {
        setInterval(() => {
            if (showRain) {
                return;
            }
            const styles = cloudRef.current?.style?.cssText;
            const { duration:rainDuration, when, delay}:any = rainOptions;
            let wentStyles = "";
            if (direction === "left") {
                wentStyles = styles.slice(styles.indexOf("right:"));  
            } else {
                wentStyles = styles.slice(styles.indexOf("left:"));
            }
            const wentPath = Number(wentStyles.match(/[+-]?\d+(\.\d+)?/g) as any[][0]);
            if(wentPath >= when) {
                setShowRain(true);
            }
        }, 500)
      }
  }, [cloudRef.current?.style?.cssText, setShowRain])
  
  return (
    <motion.div 
      variants={cloudVariants}
      initial="initial"
      animate="animate"
      ref={cloudRef}
      className="cloud_main"
      style={{
        top: top + "px"
      }}>
        <div className="cloud">
            <div className="cloud_part cloud_part_1" />
            <div className="cloud_part cloud_part_2" />
            <div className="cloud_part cloud_part_3" />
            <div className="cloud_part cloud_part_4" />
            <div className="cloud_part cloud_part_5" />
         </div>
         {showRain &&
           <Rain 
             delay={(rainOptions as any).delay} 
             duration={(rainOptions as any).duration} 
             width={80} 
             height={700}/>
         }   
    </motion.div>
)}

export default Cloud;
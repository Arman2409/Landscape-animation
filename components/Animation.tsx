import { motion } from "framer-motion";

import Birds from "./parts/Birds";
import Sun from "./parts/Sun";
import Mountains from "./parts/Mountains";
import Pickup from "./parts/Cars/Pickup";
import SportCar from "./parts/Cars/SportCar";
import Cloud from "./parts/Cloud/Cloud";

const Animation = () => (
        <motion.div
            className="main_cont"
            initial={{
                backgroundColor: "rgba(0, 0, 0)"
            }}
            animate={{
                backgroundColor: "rgb(135, 206, 235)",
                transition: {
                    duration: 6,
                    delay: 1,
                }
            }}>
            <Sun duration={4}/>
            <Cloud 
              direction="right" 
              top={100}
              delay={0} 
              duration={150}
              rainOptions={{
                duration: 16,
                when: 300,
                delay: 1
              }}/> 
             <Cloud 
              direction="left" 
              top={190}
              delay={0} 
              duration={180}
             />
            <Birds delay={5}/>
            <Mountains />
            <div
                className="land">
                <div className="road">
                <div className="road_line" />
                    <Pickup delay={12} />
                    <SportCar delay={15} />
                </div>
            </div>
        </motion.div>
);

export default Animation;
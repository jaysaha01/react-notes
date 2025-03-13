// Frammer Motion 

// npm i motion

import React from 'react'
import {motion} from 'motion/react'

const animation = () => {
  return (
    <div>
      <motion.div

      initial={{
        x:500
      }}
      animate={{
        x:1000,//[0,800,800,0,0] (keyframe animation)
        y:500,//[0,800,800,0,0] (keyframe animation)
        rotate: 360, //[0,800,800,0,0] (keyframe animation)
        scale:3
      }}

      transition={{
        duration:3,
        delay:1,
        repeat:Infinity,
        ease:"anticipate"
      }}
      >

      </motion.div>
    </div>
  )
}

export default animation


//Hover animation =================================

/*
<motion.div
whileHover={{
  backgoundColor:"green"
}}

whileTap={{
  scale:0.8
}}
>
</motion.div>

*/

//SCrolling animation =================================

import React from 'react'
import {motion, useScroll} from 'motion/react' 

const scrollYProgress= useScroll().scrollYProgress 

const animation = () => {
  return (
    <motion.div style={{
      scaleX:scrollYProgress
    }}>

      
    </motion.div>
  )
}

export default animation

import { motion } from "framer-motion"



const Test = () => {



  const variants = {
  visible: (i)=>( { 
    opacity:1, 
    x:100, 
    transition: { delay:i * 0.3 } 
    // transition: { staggerChildren: 0.2 } 
  }),
    hidden: { opacity:0 },
  }
  const items = [
    "Item 1","Item 2","Item 3","Item 4","Item 5",
  ]

  return (
    <div className="couser">
        <motion.ul 
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {items.map((item,i)=>(
            <motion.li variants={variants} key={item} custom={i}>{item}</motion.li>
          ))}
        </motion.ul>

    </div>
  )
}

export default Test
{/* <button onClick={()=>setOpen(prev=>!prev)}>Click</button> */}
// transition: { duration: 2 } },
      // transition: { type: "tween" } },
      // transition: { type: "spring", stiffness: 100, damping: 100 } },

      {/* <motion.div className="box"
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // whileHover={{opacity: 1, scale: 1}}
        // whileTap={{opacity: 1, scale: 1}}
        // whileInView={{ opacity: 1, scale: 2 }}
        // drag
        // initial="hidden"
        transition={{ duration: 2}}
        variants={variants}
        animate={open ? "visible" : "hidden"}
      >
        </motion.div> */}
import { motion, Variants } from "framer-motion";
const item: Variants = { hidden:{opacity:0,y:24,filter:"blur(4px)"}, show:{opacity:1,y:0,filter:"blur(0px)"} };
export function RevealGrid({ children }:{children:any}){
  const list = Array.isArray(children) ? children : [children];
  return (<motion.div initial="hidden" whileInView="show" viewport={{ once:false, amount:0.2 }} transition={{ staggerChildren:0.08 }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {list.map((c,i)=>(<motion.div key={i} variants={item}>{c}</motion.div>))}
  </motion.div>);
}
export function Reveal({ children }:{children:any}){
  return (<motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{ once:false, amount:0.3 }} transition={{ duration:0.5 }}>{children}</motion.div>);
}

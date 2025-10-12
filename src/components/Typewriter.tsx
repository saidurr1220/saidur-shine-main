import { useEffect, useState } from "react";
export default function Typewriter({ texts, speed=70, pause=1200 }:{texts:string[]; speed?:number; pause?:number}){
  const [i,setI] = useState(0), [j,setJ] = useState(0); const [f,setF] = useState(true);
  const cur = texts[i] || "";
  useEffect(()=>{
    let id:any;
    if (f){ if (j<cur.length) id=setTimeout(()=>setJ(j+1), speed); else id=setTimeout(()=>setF(false), pause); }
    else { if (j>0) id=setTimeout(()=>setJ(j-1), 35); else { setF(true); setI((i+1)%texts.length); } }
    return ()=>clearTimeout(id);
  }, [i,j,f,cur,speed,pause]);
  return (<span className="inline-flex items-center"><span>{cur.slice(0,j)}</span><span className="w-[1ch] ml-0.5 animate-blink">|</span></span>);
}

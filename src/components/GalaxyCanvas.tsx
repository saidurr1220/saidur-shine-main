import { useEffect, useRef } from "react";
export default function GalaxyCanvas({ density=0.0015, speed=0.15 }:{density?:number; speed?:number}){
  const ref = useRef<HTMLCanvasElement|null>(null);
  useEffect(()=>{
    const c = ref.current!, ctx = c.getContext("2d")!; let raf:number, W=0,H=0, stars:any[]=[];
    const dpr = Math.max(1, window.devicePixelRatio||1);
    const resize = ()=>{ W=c.clientWidth; H=c.clientHeight; c.width=Math.floor(W*dpr); c.height=Math.floor(H*dpr); ctx.setTransform(dpr,0,0,dpr,0,0);
      stars = Array.from({length: Math.floor(W*H*density)}, ()=>({x:Math.random()*W,y:Math.random()*H,z:Math.random()*1+0.2})); };
    const step=()=>{ ctx.clearRect(0,0,W,H); ctx.fillStyle="rgba(255,255,255,0.8)";
      for(const s of stars){ const sx=(s.x-W/2)*s.z+W/2, sy=(s.y-H/2)*s.z+H/2, r=(1.8-s.z)*1.1; ctx.beginPath(); ctx.arc(sx,sy,r,0,Math.PI*2); ctx.fill();
        s.z -= speed*0.002; if(s.z<0.2){ s.x=Math.random()*W; s.y=Math.random()*H; s.z=1; } } raf=requestAnimationFrame(step); };
    resize(); step(); window.addEventListener("resize", resize);
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [density, speed]);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-[0.45] pointer-events-none" />;
}

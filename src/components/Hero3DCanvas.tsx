import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Eye, Layers, RotateCcw, Sparkles } from "lucide-react";

export type RenderMode = "pbr" | "clay" | "wireframe";

export function Hero3DCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [renderMode, setRenderMode] = useState<RenderMode>("pbr");
  const [autoRotate, setAutoRotate] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    currentMount.appendChild(renderer.domElement);

    // 2. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffeedd, 2.8);
    keyLight.position.set(5, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x4488ff, 1.6);
    fillLight.position.set(-5, -2, -3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x10b981, 3.2); // Emerald neon rim
    rimLight.position.set(0, -6, -4);
    scene.add(rimLight);

    const cyanPointLight = new THREE.PointLight(0x06b6d4, 3, 12);
    cyanPointLight.position.set(2, -2, 2);
    scene.add(cyanPointLight);

    // 3. Central Kinetic 3D Mesh (Complex Multi-Layered Sculpture)
    const group = new THREE.Group();
    scene.add(group);

    // Core Geometry - Torus Knot with custom detailed segments
    const coreGeo = new THREE.TorusKnotGeometry(1.4, 0.42, 160, 32, 2, 3);
    
    // Materials
    const pbrMat = new THREE.MeshStandardMaterial({
      color: 0x111625,
      roughness: 0.15,
      metalness: 0.92,
      envMapIntensity: 1.5,
    });

    const clayMat = new THREE.MeshStandardMaterial({
      color: 0xd4d4d8,
      roughness: 0.85,
      metalness: 0.05,
    });

    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
    });

    const coreMesh = new THREE.Mesh(coreGeo, pbrMat);
    group.add(coreMesh);

    // Outer Geometric Gyro Cage
    const cageGeo = new THREE.IcosahedronGeometry(2.3, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    group.add(cageMesh);

    // Inner Radiant Core
    const innerGeo = new THREE.OctahedronGeometry(0.75, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x059669,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // 4. Floating Particle Dust Atmosphere
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 5. Mouse Interaction & Inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2.5;
      mouseY = y * 2.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotation & Physics
      if (autoRotate) {
        group.rotation.y += 0.008;
        group.rotation.x += 0.003;
      }

      // Smooth mouse tracking dampening
      targetRotationY += (mouseX - targetRotationY) * 0.05;
      targetRotationX += (mouseY - targetRotationX) * 0.05;
      group.rotation.y += targetRotationY * 0.02;
      group.rotation.x += targetRotationX * 0.02;

      // Cage independent counter-rotation
      cageMesh.rotation.y -= 0.005;
      cageMesh.rotation.z += 0.004;

      // Inner core pulsing
      innerMesh.rotation.x += 0.015;
      const pulse = Math.sin(elapsedTime * 2.5) * 0.12 + 1;
      innerMesh.scale.set(pulse, pulse, pulse);

      // Particle subtle drifting
      particleSystem.rotation.y = elapsedTime * 0.02;

      // Update materials on mode switch
      if (renderMode === "pbr") {
        coreMesh.material = pbrMat;
        cageMesh.visible = true;
        innerMesh.visible = true;
      } else if (renderMode === "clay") {
        coreMesh.material = clayMat;
        cageMesh.visible = false;
        innerMesh.visible = true;
      } else if (renderMode === "wireframe") {
        coreMesh.material = wireframeMat;
        cageMesh.visible = true;
        innerMesh.visible = false;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      cageGeo.dispose();
      innerGeo.dispose();
      particleGeo.dispose();
      pbrMat.dispose();
      clayMat.dispose();
      wireframeMat.dispose();
      cageMat.dispose();
      innerMat.dispose();
      particleMat.dispose();
    };
  }, [renderMode, autoRotate]);

  return (
    <div className="relative w-full h-full min-h-[480px] lg:min-h-[620px] flex items-center justify-center">
      {/* ThreeJS WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing z-0"
        onMouseDown={() => setIsInteracting(true)}
        onMouseUp={() => setIsInteracting(false)}
      />

      {/* Floating 3D Viewport Controls HUD */}
      <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-20 flex flex-wrap items-center gap-2 bg-gray-950/85 backdrop-blur-xl border border-border/80 px-3.5 py-2.5 rounded-2xl shadow-2xl">
        <div className="flex items-center gap-1 text-[11px] font-mono text-muted-foreground mr-1">
          <Eye className="w-3.5 h-3.5 text-primary" />
          <span>Lookdev:</span>
        </div>

        <button
          onClick={() => setRenderMode("pbr")}
          className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
            renderMode === "pbr"
              ? "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/30"
              : "bg-surface/80 text-muted-foreground hover:text-foreground border border-border/60"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          PBR Lit
        </button>

        <button
          onClick={() => setRenderMode("clay")}
          className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
            renderMode === "clay"
              ? "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/30"
              : "bg-surface/80 text-muted-foreground hover:text-foreground border border-border/60"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-zinc-300"></span>
          Clay
        </button>

        <button
          onClick={() => setRenderMode("wireframe")}
          className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
            renderMode === "wireframe"
              ? "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/30"
              : "bg-surface/80 text-muted-foreground hover:text-foreground border border-border/60"
          }`}
        >
          <Layers className="w-3 h-3 text-emerald-400" />
          Wireframe
        </button>

        <div className="h-4 w-px bg-border/80 mx-1 hidden sm:block"></div>

        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
            autoRotate
              ? "bg-surface text-primary border border-primary/40"
              : "bg-surface/80 text-muted-foreground border border-border/60"
          }`}
        >
          <RotateCcw className={`w-3 h-3 ${autoRotate ? "animate-spin" : ""}`} />
          <span>{autoRotate ? "Auto Spin On" : "Paused"}</span>
        </button>
      </div>

      {/* Real-time Viewport Info Tag */}
      <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-gray-950/80 backdrop-blur-md border border-border/80 px-3 py-1.5 rounded-xl text-[11px] font-mono text-muted-foreground">
        <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
        <span>Three.js WebGL ? 60 FPS ? Real-time Shaders</span>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Hero3DSceneProps {
  interactive?: boolean;
}

export function Hero3DScene({ interactive = true }: Hero3DSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    // WebGL Renderer with Alpha transparency
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Central Floating 3D Tech Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Geometric Icosahedron (Inner core data polyhedron)
    const innerGeom = new THREE.IcosahedronGeometry(3.2, 1);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x10b981, // Emerald neon
      emissive: 0x059669,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.1,
      transmission: 0.6,
      thickness: 1.2,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const innerCore = new THREE.Mesh(innerGeom, innerMat);
    coreGroup.add(innerCore);

    // 2. Outer Wireframe Sphere (Global telemetry orbit)
    const sphereGeom = new THREE.SphereGeometry(4.8, 24, 24);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x0f172a, // Slate-900 / dark graphite
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const outerSphere = new THREE.Mesh(sphereGeom, sphereMat);
    coreGroup.add(outerSphere);

    // 3. Floating Interactive Rings (Toruses representing trading engine orbits)
    const ring1Geom = new THREE.TorusGeometry(5.6, 0.04, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(6.4, 0.035, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x64748b, // Slate-500
      transparent: true,
      opacity: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    coreGroup.add(ring2);

    // 4. Floating Data Nodes / Satellites (Tiny spheres pulsing on the rings)
    const satelliteGroup = new THREE.Group();
    coreGroup.add(satelliteGroup);

    const satGeom = new THREE.SphereGeometry(0.2, 16, 16);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x34d399,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.8,
    });

    const satellites: THREE.Mesh[] = [];
    const satCount = 12;
    for (let i = 0; i < satCount; i++) {
      const sat = new THREE.Mesh(satGeom, satMat);
      const angle = (i / satCount) * Math.PI * 2;
      const radius = 5.6;
      sat.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * (radius * 0.45),
        Math.sin(angle) * radius
      );
      satelliteGroup.add(sat);
      satellites.push(sat);
    }

    // 5. Constellation Ambient Particles
    const particlesCount = 70;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 22;
      posArray[i + 1] = (Math.random() - 0.5) * 16;
      posArray[i + 2] = (Math.random() - 0.5) * 14;
    }
    const particlesGeom = new THREE.BufferGeometry();
    particlesGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x10b981,
      transparent: true,
      opacity: 0.4,
    });
    const particleMesh = new THREE.Points(particlesGeom, particlesMat);
    scene.add(particleMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x10b981, 3, 50);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x38bdf8, 2, 50);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      coreGroup.rotation.y = elapsedTime * 0.25 + mouseX * 0.8;
      coreGroup.rotation.x = elapsedTime * 0.15 + mouseY * 0.8;

      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.z = -elapsedTime * 0.25;

      // Pulse inner core scale
      const pulse = 1 + Math.sin(elapsedTime * 2) * 0.04;
      innerCore.scale.set(pulse, pulse, pulse);

      // Rotate particles slowly
      particleMesh.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60 sm:opacity-85"
      aria-hidden="true"
    />
  );
}

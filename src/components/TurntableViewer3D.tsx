import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RotateCw, ZoomIn, ZoomOut, Sun, Layers, Eye, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TurntableViewer3DProps {
  modelType?: "samurai" | "watch" | "cyberpunk" | "quantum" | "default";
  title?: string;
  initialMode?: "pbr" | "clay" | "wireframe";
}

export function TurntableViewer3D({
  modelType = "default",
  title = "3D Asset Turntable",
  initialMode = "pbr",
}: TurntableViewer3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"pbr" | "clay" | "wireframe">(initialMode);
  const [isRotating, setIsRotating] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(5.5);
  const [lightIntensity, setLightIntensity] = useState(2.5);

  const groupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const keyLightRef = useRef<THREE.DirectionalLight | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.5, zoomLevel);
    cameraRef.current = camera;

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

    // Grid Floor
    const gridHelper = new THREE.GridHelper(10, 20, 0x10b981, 0x27272a);
    gridHelper.position.y = -1.6;
    scene.add(gridHelper);

    // Studio Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, lightIntensity);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);
    keyLightRef.current = keyLight;

    const fillLight = new THREE.DirectionalLight(0x06b6d4, 2.0);
    fillLight.position.set(-4, 2, -3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x10b981, 2.5);
    rimLight.position.set(0, 5, -5);
    scene.add(rimLight);

    // 3D Model Group
    const group = new THREE.Group();
    scene.add(group);
    groupRef.current = group;

    // Create Detailed 3D Representative Model based on project
    let primaryMesh: THREE.Mesh;
    let secondaryMesh: THREE.Mesh | null = null;

    let pbrMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.2,
      metalness: 0.85,
    });

    let clayMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4d4d8,
      roughness: 0.9,
      metalness: 0.05,
    });

    let wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
    });

    if (modelType === "watch") {
      // Precision Chronograph Geometry
      const bodyGeo = new THREE.CylinderGeometry(1.6, 1.6, 0.4, 48);
      const bezelGeo = new THREE.TorusGeometry(1.65, 0.12, 24, 64);
      primaryMesh = new THREE.Mesh(bodyGeo, pbrMaterial);
      secondaryMesh = new THREE.Mesh(bezelGeo, new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.1, metalness: 0.95 }));
      group.add(primaryMesh);
      group.add(secondaryMesh);
    } else if (modelType === "cyberpunk" || modelType === "samurai") {
      // Hard-Surface Helm / Cyber Sculpture
      const helmGeo = new THREE.DodecahedronGeometry(1.5, 2);
      const visorGeo = new THREE.TorusGeometry(1.55, 0.15, 16, 32, Math.PI);
      primaryMesh = new THREE.Mesh(helmGeo, pbrMaterial);
      secondaryMesh = new THREE.Mesh(visorGeo, new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.8 }));
      group.add(primaryMesh);
      group.add(secondaryMesh);
    } else {
      // Futuristic Polyhedron Sculpt
      const mainGeo = new THREE.TorusKnotGeometry(1.2, 0.38, 128, 32);
      primaryMesh = new THREE.Mesh(mainGeo, pbrMaterial);
      group.add(primaryMesh);
    }

    // Drag Orbit interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !groupRef.current) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      groupRef.current.rotation.y += deltaX * 0.01;
      groupRef.current.rotation.x += deltaY * 0.01;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isRotating && !isDragging && groupRef.current) {
        groupRef.current.rotation.y += 0.008;
      }

      // Apply Shader mode
      if (mode === "pbr") {
        primaryMesh.material = pbrMaterial;
      } else if (mode === "clay") {
        primaryMesh.material = clayMaterial;
      } else if (mode === "wireframe") {
        primaryMesh.material = wireframeMaterial;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      dom.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [modelType, isRotating, mode]);

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = zoomLevel;
    }
  }, [zoomLevel]);

  useEffect(() => {
    if (keyLightRef.current) {
      keyLightRef.current.intensity = lightIntensity;
    }
  }, [lightIntensity]);

  return (
    <div className="relative w-full h-[480px] bg-gray-950/90 rounded-2xl border border-border/80 overflow-hidden shadow-2xl flex flex-col justify-between">
      {/* Header Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 z-20 flex items-center justify-between bg-gradient-to-b from-gray-950/90 via-gray-950/60 to-transparent pointer-events-none">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider">
            <RotateCw className="w-3.5 h-3.5 animate-spin" />
            <span>360? Real-time Turntable Lookdev</span>
          </div>
          <h4 className="text-base font-bold text-foreground pointer-events-auto">{title}</h4>
        </div>

        {/* Lookdev Mode Switcher Pills */}
        <div className="flex items-center gap-1.5 pointer-events-auto bg-gray-900/90 backdrop-blur-md p-1.5 rounded-xl border border-border/80">
          <button
            onClick={() => setMode("pbr")}
            className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
              mode === "pbr"
                ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Full PBR
          </button>
          <button
            onClick={() => setMode("clay")}
            className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
              mode === "clay"
                ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Clay
          </button>
          <button
            onClick={() => setMode("wireframe")}
            className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
              mode === "wireframe"
                ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Wireframe
          </button>
        </div>
      </div>

      {/* ThreeJS Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Footer Controls Toolbar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex flex-wrap items-center justify-between gap-3 bg-gradient-to-t from-gray-950/90 via-gray-950/60 to-transparent">
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsRotating(!isRotating)}
            className="h-8 text-xs font-mono bg-gray-900/80 border-border/80 hover:border-primary/50 text-foreground"
          >
            <RefreshCw className={`w-3.5 h-3.5 mr-1.5 ${isRotating ? "text-emerald-400 animate-spin" : "text-muted-foreground"}`} />
            {isRotating ? "Auto Turntable" : "Manual Orbit"}
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={() => setZoomLevel((z) => Math.max(3, z - 0.6))}
            className="h-8 w-8 p-0 bg-gray-900/80 border-border/80 hover:border-primary/50"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={() => setZoomLevel((z) => Math.min(8, z + 0.6))}
            className="h-8 w-8 p-0 bg-gray-900/80 border-border/80 hover:border-primary/50"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </Button>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-gray-900/80 px-3 py-1.5 rounded-xl border border-border/80">
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          <span>Light Rig:</span>
          <input
            type="range"
            min="1"
            max="5"
            step="0.5"
            value={lightIntensity}
            onChange={(e) => setLightIntensity(parseFloat(e.target.value))}
            className="w-20 accent-primary cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// The central "Digital Core" representing the backend engine
function DigitalCore() {
  const groupRef = useRef<THREE.Group>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle floating of the entire assembly
      groupRef.current.position.y = Math.sin(t * 0.5) * 10;
    }

    if (outerRef.current) {
      // Slow rotation of outer shell
      outerRef.current.rotation.y = t * 0.1;
      outerRef.current.rotation.z = Math.sin(t * 0.2) * 0.1;
    }

    if (innerRef.current) {
      // Counter-rotation of inner structure
      innerRef.current.rotation.y = -t * 0.15;
      innerRef.current.rotation.x = Math.cos(t * 0.3) * 0.1;
    }

    if (coreRef.current) {
      // Pulsing core
      const scale = 1 + Math.sin(t * 2) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Wireframe Sphere - The "Global" Network */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[220, 2]} />
        <meshBasicMaterial 
          color="#257ee1" 
          wireframe 
          transparent 
          opacity={0.15} 
        />
      </mesh>

      {/* Inner Geometric Structure - The "Logic" */}
      <mesh ref={innerRef}>
        <dodecahedronGeometry args={[160, 0]} />
        <meshStandardMaterial 
          color="#4a9eff" 
          wireframe 
          transparent 
          opacity={0.3}
          emissive="#257ee1"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Solid Core - The "Data" */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[80, 32, 32]} />
        <meshStandardMaterial 
          color="#000000"
          emissive="#257ee1"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Glowing Halo */}
      <pointLight distance={400} intensity={2} color="#257ee1" />
    </group>
  );
}

function AnimatedScene() {
  const groupRef = useRef<THREE.Group | null>(null);
  const { viewport, size } = useThree();
  const isMobile = viewport.width < 1000;

  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothMouseRef = useRef({ x: 0, y: 0 });

  const PARTICLE_COUNT = 6000;
  const RANGE = 2800;

  const starMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color("#257ee1") },
        opacity: { value: 0.9 },
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uScreenSize: { value: new THREE.Vector2(1, 1) }
      },
      vertexShader: `
        varying float vAlpha;
        uniform float uTime;
        uniform vec2 uMouse;
        attribute float aPhase;
        attribute vec3 aBasePosition;

        void main() {
          // Gentle floating movement
          float jitterX = sin(uTime * 0.1 + aPhase) * 10.0;
          float jitterY = cos(uTime * 0.1 + aPhase) * 10.0;
          
          // Mouse influence
          float depthFactor = aBasePosition.z / 2000.0;
          vec3 mouseOffset = vec3(
            uMouse.x * 50.0 * (0.5 + depthFactor),
            -uMouse.y * 50.0 * (0.5 + depthFactor),
            0.0
          );

          vec3 pos = aBasePosition + vec3(jitterX, jitterY, 0.0) + mouseOffset;
          
          vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );
          gl_PointSize = 5.0 * ( 400.0 / -mvPosition.z );
          gl_Position = projectionMatrix * mvPosition;
          
          // Twinkle effect
          float twinkle = sin(uTime * 1.5 + aPhase);
          vAlpha = 0.6 + 0.4 * twinkle;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float opacity;
        varying float vAlpha;
        
        void main() {
          // Circular particle
          float r = distance( gl_PointCoord, vec2(0.5, 0.5) );
          if ( r > 0.5 ) discard;
          gl_FragColor = vec4( color, opacity * vAlpha );
        }
      `,
      transparent: true,
      depthWrite: false,
    });
  }, []);

  // Generate particle positions once
  const [basePositions, phases] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const ph = new Float32Array(PARTICLE_COUNT);
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * RANGE;
      pos[i * 3 + 1] = (Math.random() - 0.5) * RANGE;
      pos[i * 3 + 2] = (Math.random() - 0.5) * RANGE;
      ph[i] = Math.random() * Math.PI * 2;
    }
    return [pos, ph];
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Smooth mouse interpolation
    smoothMouseRef.current.x += (mouseRef.current.x - smoothMouseRef.current.x) * 0.05;
    smoothMouseRef.current.y += (mouseRef.current.y - smoothMouseRef.current.y) * 0.05;

    // Update shader uniforms
    if (starMaterial.uniforms) {
      starMaterial.uniforms.uTime.value = t;
      starMaterial.uniforms.uMouse.value.set(smoothMouseRef.current.x, smoothMouseRef.current.y);
      starMaterial.uniforms.uScreenSize.value.set(size.width, size.height);
    }

    // Move the main group based on mouse and screen size
    if (groupRef.current) {
      const targetX = isMobile ? 0 : 350;
      const targetY = isMobile ? -50 : 0;
      
      // Parallax effect
      const parallaxX = smoothMouseRef.current.x * 20;
      const parallaxY = smoothMouseRef.current.y * 20;

      groupRef.current.position.x += (targetX + parallaxX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (targetY + parallaxY - groupRef.current.position.y) * 0.05;
      
      // Gentle rotation of the whole system
      groupRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 1000]} fov={45} />
      <Environment preset="city" />

      {/* Main 3D Object Group */}
      <group ref={groupRef}>
        <DigitalCore />
      </group>

      {/* Background Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={basePositions}
            count={PARTICLE_COUNT}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-aBasePosition"
            array={basePositions}
            count={PARTICLE_COUNT}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-aPhase"
            array={phases}
            count={PARTICLE_COUNT}
            itemSize={1}
          />
        </bufferGeometry>
        <primitive object={starMaterial} attach="material" />
      </points>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[200, 200, 100]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-200, -200, -200]} intensity={0.5} color="#257ee1" />
    </>
  );
}

export function Hero3D({ className }: { className?: string }) {
  return (
    <div className={`${className || "absolute inset-0 w-full h-full z-0"} pointer-events-none`}>
      <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <AnimatedScene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Hero3D;

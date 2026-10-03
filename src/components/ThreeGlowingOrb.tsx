import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeGlowingOrbProps {
  scrollProgress: number; // 0 to 1
  scrollY: number;
}

export const ThreeGlowingOrb: React.FC<ThreeGlowingOrbProps> = ({ scrollProgress, scrollY }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const ringsRef = useRef<THREE.Mesh[]>([]);
  const satellitesRef = useRef<THREE.Mesh[]>([]);
  const particlesRef = useRef<THREE.Points | null>(null);
  const blackCoreRef = useRef<THREE.Mesh | null>(null);

  // Mouse tilt tracking
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const targetRotRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;
    cameraRef.current = camera;

    // 3. Renderer with alpha transparency and antialiasing
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting setup
    const ambientLight = new THREE.AmbientLight(0xfff4e0, 1.2);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xffd166, 3.5);
    goldKeyLight.position.set(5, 5, 6);
    scene.add(goldKeyLight);

    const warmFillLight = new THREE.PointLight(0xf59e0b, 4, 15);
    warmFillLight.position.set(-4, -2, 4);
    scene.add(warmFillLight);

    const rimLight = new THREE.PointLight(0xffedd5, 2.5, 10);
    rimLight.position.set(0, 4, -3);
    scene.add(rimLight);

    // 5. Main 3D Object Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);
    groupRef.current = mainGroup;

    // 5.1 The Glowing Black Obsidian Core (User's "glowly black circle 3D element")
    const coreGeometry = new THREE.SphereGeometry(1.82, 64, 64);
    // Dark metallic obsidian material with subtle golden specular sheen
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0c0b0a,
      roughness: 0.18,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });
    const blackCore = new THREE.Mesh(coreGeometry, coreMaterial);
    // Slightly flatten into a dimensional lens/orb
    blackCore.scale.set(1.05, 1.05, 0.45);
    mainGroup.add(blackCore);
    blackCoreRef.current = blackCore;

    // 5.2 Primary Radiant Gold Ring (Matching the portrait bezel in reference)
    const ringGeometry1 = new THREE.TorusGeometry(2.15, 0.045, 32, 128);
    const goldMaterial1 = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0xd97706,
      emissiveIntensity: 0.45,
    });
    const mainRing = new THREE.Mesh(ringGeometry1, goldMaterial1);
    mainGroup.add(mainRing);
    ringsRef.current.push(mainRing);

    // 5.3 Inner Thin Bevel Ring with Specular Glint
    const ringGeometry2 = new THREE.TorusGeometry(2.05, 0.02, 24, 100);
    const goldMaterial2 = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 1.0,
      roughness: 0.05,
      emissive: 0xfde68a,
      emissiveIntensity: 0.3,
    });
    const innerRing = new THREE.Mesh(ringGeometry2, goldMaterial2);
    innerRing.position.z = 0.08;
    mainGroup.add(innerRing);
    ringsRef.current.push(innerRing);

    // 5.4 Outer Orbital Gyroscope Ring (Tilted)
    const gyroRingGeo = new THREE.TorusGeometry(2.55, 0.018, 24, 120);
    const gyroMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      metalness: 0.9,
      roughness: 0.25,
      transparent: true,
      opacity: 0.75,
    });
    const gyroRing = new THREE.Mesh(gyroRingGeo, gyroMat);
    gyroRing.rotation.x = Math.PI / 3.5;
    gyroRing.rotation.y = Math.PI / 6;
    mainGroup.add(gyroRing);
    ringsRef.current.push(gyroRing);

    // 5.5 Floating Golden Satellites (Spheres) matching reference image
    const satellites: THREE.Mesh[] = [];
    const satGeo1 = new THREE.SphereGeometry(0.12, 32, 32);
    const satMat1 = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.95,
      roughness: 0.1,
      emissive: 0xd97706,
      emissiveIntensity: 0.6,
    });

    // Satellite 1: Top right
    const sat1 = new THREE.Mesh(satGeo1, satMat1);
    sat1.position.set(2.4, 1.8, 0.3);
    mainGroup.add(sat1);
    satellites.push(sat1);

    // Satellite 2: Mid-left
    const satGeo2 = new THREE.SphereGeometry(0.09, 32, 32);
    const sat2 = new THREE.Mesh(satGeo2, satMat1);
    sat2.position.set(-2.5, -0.6, 0.4);
    mainGroup.add(sat2);
    satellites.push(sat2);

    // Satellite 3: Bottom right small beacon
    const satGeo3 = new THREE.SphereGeometry(0.07, 32, 32);
    const sat3 = new THREE.Mesh(satGeo3, satMat1);
    sat3.position.set(2.1, -1.9, 0.2);
    mainGroup.add(sat3);
    satellites.push(sat3);

    satellitesRef.current = satellites;

    // 5.6 Golden Dust Particles Cloud
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.7;

      particlePositions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi);
      particlePositions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);

      particleScales[i] = Math.random();
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 0.05,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);
    particlesRef.current = particles;

    // 6. Animation loop with smooth lerping & scroll integration
    let clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Dynamic orbital satellite movements
      if (sat1) {
        sat1.position.x = 2.5 * Math.cos(elapsedTime * 0.7);
        sat1.position.y = 1.9 * Math.sin(elapsedTime * 0.7);
        sat1.position.z = 0.5 * Math.sin(elapsedTime * 1.1);
      }
      if (sat2) {
        sat2.position.x = 2.4 * Math.cos(elapsedTime * -0.5 + 2);
        sat2.position.y = 1.2 * Math.sin(elapsedTime * 0.8 + 1);
        sat2.position.z = 0.6 * Math.cos(elapsedTime * 0.6);
      }
      if (sat3) {
        sat3.position.x = 2.2 * Math.cos(elapsedTime * 0.9 + 4);
        sat3.position.y = 2.1 * Math.sin(elapsedTime * -0.6 + 3);
        sat3.position.z = 0.4 * Math.sin(elapsedTime * 0.8);
      }

      // Gyro ring gentle precession
      if (gyroRing) {
        gyroRing.rotation.z += 0.003;
        gyroRing.rotation.y += 0.002;
      }

      // Particles ambient swirl
      if (particles) {
        particles.rotation.y += 0.0012;
      }

      // Main group responsiveness:
      // Combines mouse tilt + scroll animation smoothly!
      if (mainGroup) {
        // Smooth lerp to target rotation
        mainGroup.rotation.y += (targetRotRef.current.y - mainGroup.rotation.y) * 0.05;
        mainGroup.rotation.x += (targetRotRef.current.x - mainGroup.rotation.x) * 0.05;

        // Subtle ambient breathing float
        mainGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.08;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Handle window resize
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update 3D orientation & position based on scroll and mouse
  useEffect(() => {
    // Scroll progress drives continuous 3D rotation and dynamic tilt
    const scrollFactor = scrollY * 0.0025;
    const baseRotX = scrollFactor * 0.6;
    const baseRotY = scrollFactor * 0.85;

    targetRotRef.current = {
      x: baseRotX + mouseRef.current.y * 0.35,
      y: baseRotY + mouseRef.current.x * 0.45,
    };

    // Gently modulate core elevation based on scroll
    if (groupRef.current) {
      // 3D displacement on scroll
      groupRef.current.position.z = Math.sin(scrollProgress * Math.PI) * 0.6;
    }
  }, [scrollY, scrollProgress]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouseRef.current = { x, y };

    const scrollFactor = scrollY * 0.0025;
    targetRotRef.current = {
      x: scrollFactor * 0.6 + y * 0.4,
      y: scrollFactor * 0.85 + x * 0.5,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: 0, y: 0 };
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      title="Interactive 3D glowing element — drag or scroll to rotate"
    >
      {/* ThreeJS WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full min-w-[340px] min-h-[340px] sm:min-w-[420px] sm:min-h-[420px] lg:min-w-[480px] lg:min-h-[480px]"
      />

      {/* Atmospheric Backglow for true luxury depth */}
      <div
        className="absolute inset-0 pointer-events-none rounded-full bg-gradient-to-tr from-amber-500/20 via-orange-400/15 to-transparent blur-3xl -z-10 transition-opacity duration-500"
        style={{ opacity: isHovered ? 0.9 : 0.6 }}
      />
    </div>
  );
};

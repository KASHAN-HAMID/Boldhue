import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number | null>(null);
  const particleSystemRef = useRef<THREE.Points | null>(null);
  const linesRef = useRef<THREE.LineSegments | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.zIndex = '-1';
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const lightThemeColor = new THREE.Color(0x0a1e5e);
    const darkThemeColor = new THREE.Color(0xffffff);
    const getCurrentColor = () => (theme === 'dark' ? darkThemeColor : lightThemeColor);

    const particleCount = 30;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const opacities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      velocities[i * 3] = (Math.random() - 0.5) * 0.25;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.25;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.25;
      opacities[i] = 0.6 + Math.random() * 0.4;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));

    const particleMaterial = new THREE.PointsMaterial({
      color: getCurrentColor(),
      size: 1.5,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    particleSystemRef.current = particleSystem;
    scene.add(particleSystem);

    const maxConnections = 300;
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(maxConnections * 6);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: getCurrentColor(),
      transparent: true,
      opacity: 0.15
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    linesRef.current = lines;
    scene.add(lines);

    camera.position.z = 60;

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const time = Date.now() * 0.0005;

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3] + Math.sin(time + i * 0.1) * 0.1;
        positions[i * 3 + 1] += velocities[i * 3 + 1] + Math.cos(time + i * 0.15) * 0.1;
        positions[i * 3 + 2] += velocities[i * 3 + 2];
        opacities[i] = 0.6 + Math.sin(time + i * 0.2) * 0.2;

        if (
          positions[i * 3] > 40 || positions[i * 3] < -40 ||
          positions[i * 3 + 1] > 25 || positions[i * 3 + 1] < -25 ||
          positions[i * 3 + 2] > 25 || positions[i * 3 + 2] < -25
        ) {
          positions[i * 3] = (Math.random() - 0.5) * 80;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
          velocities[i * 3] = (Math.random() - 0.5) * 0.25;
          velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.25;
          velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.25;
        }
      }

      let lineIndex = 0;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount && lineIndex < maxConnections; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < 20) {
            linePositions[lineIndex * 6] = positions[i * 3];
            linePositions[lineIndex * 6 + 1] = positions[i * 3 + 1];
            linePositions[lineIndex * 6 + 2] = positions[i * 3 + 2];
            linePositions[lineIndex * 6 + 3] = positions[j * 3];
            linePositions[lineIndex * 6 + 4] = positions[j * 3 + 1];
            linePositions[lineIndex * 6 + 5] = positions[j * 3 + 2];
            lineIndex++;
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIndex * 2);
      particles.attributes.position.needsUpdate = true;
      particles.attributes.opacity.needsUpdate = true;
      lineGeometry.attributes.position.needsUpdate = true;

      // Update colors dynamically
      const color = getCurrentColor();
      (particleSystem.material as THREE.PointsMaterial).color = color;
      (lines.material as THREE.LineBasicMaterial).color = color;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!rendererRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (mount && rendererRef.current) mount.removeChild(rendererRef.current.domElement);
      if (rendererRef.current) rendererRef.current.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={mountRef}
      className="three-bg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
      }}
    />
  );
};

export default ThreeBackground;

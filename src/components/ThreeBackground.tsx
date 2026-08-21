import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const getViewportWidth = () => document.documentElement.clientWidth || window.innerWidth;
    const getViewportHeight = () => window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      getViewportWidth() / getViewportHeight(),
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(getViewportWidth(), getViewportHeight());
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.pointerEvents = 'none';
    mountNode.appendChild(renderer.domElement);

    // Particle Group
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color('#F59E0B');
    const leafColor = new THREE.Color('#10B981');
    const amberColor = new THREE.Color('#D97706');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const rand = Math.random();
      const pColor = rand > 0.4 ? goldColor : rand > 0.2 ? amberColor : leafColor;

      colors[i * 3] = pColor.r;
      colors[i * 3 + 1] = pColor.g;
      colors[i * 3 + 2] = pColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 3D Ambient Glowing Mesh Orbs
    const orbGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const orbMaterial = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.08,
      wireframe: true,
    });
    
    const orb1 = new THREE.Mesh(orbGeometry, orbMaterial);
    orb1.position.set(-6, 4, -5);
    scene.add(orb1);

    const orb2 = new THREE.Mesh(orbGeometry, orbMaterial);
    orb2.position.set(7, -5, -8);
    orb2.scale.setScalar(1.4);
    scene.add(orb2);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const vw = getViewportWidth();
      const vh = getViewportHeight();
      if (vw > 0 && vh > 0) {
        mouseX = (event.clientX / vw - 0.5) * 2;
        mouseY = (event.clientY / vh - 0.5) * 2;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      const vw = getViewportWidth();
      const vh = getViewportHeight();
      camera.aspect = vw / vh;
      camera.updateProjectionMatrix();
      renderer.setSize(vw, vh);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      particles.rotation.y = elapsedTime * 0.03 + targetX * 0.15;
      particles.rotation.x = elapsedTime * 0.01 + targetY * 0.15;

      orb1.rotation.x = elapsedTime * 0.2;
      orb1.rotation.y = elapsedTime * 0.3;
      orb1.position.y = 4 + Math.sin(elapsedTime * 0.8) * 0.5;

      orb2.rotation.x = -elapsedTime * 0.15;
      orb2.rotation.y = elapsedTime * 0.25;
      orb2.position.y = -5 + Math.cos(elapsedTime * 0.6) * 0.7;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      orbGeometry.dispose();
      orbMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden max-w-full opacity-80"
      aria-hidden="true"
    />
  );
};

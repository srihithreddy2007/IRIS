import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3D = () => {
  const mountRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) throw new Error('No WebGL');
    } catch (e) {
      setHasWebGL(false);
      return;
    }

    // 1. Scene & Camera Setup
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 15;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 3. Lighting (Soft Studio & Pastel Accents)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.5);
    mainLight.position.set(5, 10, 7);
    scene.add(mainLight);

    const blueLight = new THREE.PointLight(0x818CF8, 3, 30); // Soft Lavender Indigo
    blueLight.position.set(-6, 6, 6);
    scene.add(blueLight);

    const pinkLight = new THREE.PointLight(0xFB7185, 3, 30); // Soft Pastel Coral
    pinkLight.position.set(6, -6, 6);
    scene.add(pinkLight);

    // 4. Create Floating 3D Belongings Meshes
    const itemsGroup = new THREE.Group();

    // Vibrant Pastel Material Presets
    const blueMat = new THREE.MeshStandardMaterial({
      color: 0x6366F1, // Pastel Electric Indigo
      roughness: 0.2,
      metalness: 0.3,
    });

    const pinkMat = new THREE.MeshStandardMaterial({
      color: 0xF43F5E, // Pastel Rose/Coral
      roughness: 0.2,
      metalness: 0.3,
    });

    const lavenderMat = new THREE.MeshStandardMaterial({
      color: 0xA855F7, // Soft Purple/Lavender
      roughness: 0.3,
      metalness: 0.4,
    });

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xF59E0B, // Pastel Amber Gold
      roughness: 0.1,
      metalness: 0.8,
    });

    const whiteMat = new THREE.MeshStandardMaterial({
      color: 0xF8FAFC, // Crisp Soft White
      roughness: 0.1,
      metalness: 0.2,
    });

    // Object 1: Wallet / Cardholder (Rounded Box)
    const walletGeo = new THREE.BoxGeometry(2.4, 1.6, 0.4);
    const wallet = new THREE.Mesh(walletGeo, pinkMat);
    wallet.position.set(-3.5, 2, 0);
    itemsGroup.add(wallet);

    // Object 2: Key (Torus + Cylinder)
    const keyRingGeo = new THREE.TorusGeometry(0.5, 0.12, 16, 32);
    const keyRing = new THREE.Mesh(keyRingGeo, goldMat);
    const keyShaftGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.2, 16);
    const keyShaft = new THREE.Mesh(keyShaftGeo, goldMat);
    keyShaft.position.set(0.7, 0, 0);
    keyShaft.rotation.z = Math.PI / 2;
    const keyGroup = new THREE.Group();
    keyGroup.add(keyRing);
    keyGroup.add(keyShaft);
    keyGroup.position.set(3.8, 2.5, 1);
    itemsGroup.add(keyGroup);

    // Object 3: Headphones (Torus Arch + Earcups)
    const bandGeo = new THREE.TorusGeometry(1.6, 0.12, 16, 32, Math.PI);
    const headBand = new THREE.Mesh(bandGeo, blueMat);
    const cupGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.4, 32);
    const cupLeft = new THREE.Mesh(cupGeo, whiteMat);
    cupLeft.position.set(-1.6, 0, 0);
    cupLeft.rotation.z = Math.PI / 2;
    const cupRight = new THREE.Mesh(cupGeo, whiteMat);
    cupRight.position.set(1.6, 0, 0);
    cupRight.rotation.z = Math.PI / 2;
    const headphoneGroup = new THREE.Group();
    headphoneGroup.add(headBand);
    headphoneGroup.add(cupLeft);
    headphoneGroup.add(cupRight);
    headphoneGroup.position.set(0, 0.5, 2);
    headphoneGroup.rotation.x = 0.3;
    itemsGroup.add(headphoneGroup);

    // Object 4: Water Bottle (Cylinder + Cap)
    const bottleGeo = new THREE.CylinderGeometry(0.7, 0.7, 2.6, 32);
    const bottle = new THREE.Mesh(bottleGeo, blueMat);
    const capGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.5, 32);
    const cap = new THREE.Mesh(capGeo, lavenderMat);
    cap.position.y = 1.55;
    const bottleGroup = new THREE.Group();
    bottleGroup.add(bottle);
    bottleGroup.add(cap);
    bottleGroup.position.set(-4, -2.5, 1);
    bottleGroup.rotation.z = -0.4;
    itemsGroup.add(bottleGroup);

    // Object 5: ID Card Badge (Thin Box)
    const badgeGeo = new THREE.BoxGeometry(1.5, 2.2, 0.08);
    const badge = new THREE.Mesh(badgeGeo, pinkMat);
    badge.position.set(3.5, -2.2, 0);
    badge.rotation.z = 0.3;
    itemsGroup.add(badge);

    // Object 6: Backpack / Bag (Dodecahedron stylized)
    const bagGeo = new THREE.DodecahedronGeometry(1.4, 1);
    const bag = new THREE.Mesh(bagGeo, lavenderMat);
    bag.position.set(0.5, -3.2, -1);
    itemsGroup.add(bag);

    scene.add(itemsGroup);

    // 5. Mouse Parallax Effect
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = currentMount.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = (y / rect.height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 6. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      itemsGroup.rotation.y = targetX * 0.4;
      itemsGroup.rotation.x = -targetY * 0.4;

      // Floating oscillation per item
      wallet.position.y = 2 + Math.sin(elapsedTime * 1.5) * 0.3;
      wallet.rotation.y = elapsedTime * 0.6;
      wallet.rotation.x = Math.cos(elapsedTime * 0.5) * 0.2;

      keyGroup.position.y = 2.5 + Math.cos(elapsedTime * 1.8) * 0.25;
      keyGroup.rotation.y = elapsedTime * 0.8;

      headphoneGroup.position.y = 0.5 + Math.sin(elapsedTime * 1.2) * 0.35;
      headphoneGroup.rotation.y = Math.sin(elapsedTime * 0.4) * 0.3;

      bottleGroup.position.y = -2.5 + Math.sin(elapsedTime * 1.6 + 1) * 0.3;
      bottleGroup.rotation.y = elapsedTime * 0.5;

      badge.position.y = -2.2 + Math.cos(elapsedTime * 1.4 + 2) * 0.25;
      badge.rotation.y = elapsedTime * 0.7;

      bag.position.y = -3.2 + Math.sin(elapsedTime * 1.1 + 0.5) * 0.3;
      bag.rotation.y = elapsedTime * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newW = currentMount.clientWidth;
      const newH = currentMount.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="relative w-72 h-72 rounded-3xl bg-gradient-to-tr from-indigo-100 to-rose-100 border border-slate-200 flex items-center justify-center animate-pulse">
          <div className="text-center">
            <span className="text-5xl">🎒 🔑 🎧</span>
            <p className="mt-4 text-xs text-slate-500">Interactive Belongings Canvas</p>
          </div>
        </div>
      </div>
    );
  }

  return <div ref={mountRef} className="w-full h-full min-h-[420px] cursor-grab active:cursor-grabbing" />;
};

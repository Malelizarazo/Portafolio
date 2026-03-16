"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * MolecularScene — Three.js particle system resembling a protein/molecular structure.
 *
 * Architecture:
 * - Spheres represent atoms (nodes)
 * - Lines connect nearby atoms as molecular bonds (edges)
 * - The entire structure slowly rotates to feel alive
 *
 * Future improvements:
 * - Add realistic protein backbone (alpha-helix, beta-sheet)
 * - Load PDB data for real protein structures
 * - Add mouse interaction (hover glow, click to inspect)
 * - Implement depth-of-field post-processing
 * - Add atom type coloring (C, N, O, S)
 */

const ATOM_COUNT = 120;
const BOND_DISTANCE = 2.8; // Max distance to draw a bond
const STRUCTURE_RADIUS = 6;

interface Atom {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  mesh: THREE.Mesh;
}

export default function MolecularScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // --- Scene setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0x334466, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x3b82f6, 2, 30);
    pointLight.position.set(5, 5, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 1.5, 25);
    pointLight2.position.set(-5, -3, 8);
    scene.add(pointLight2);

    // --- Create atoms ---
    const atomGeometry = new THREE.SphereGeometry(0.12, 16, 16);
    const atomMaterials = [
      new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        emissive: 0x1e40af,
        emissiveIntensity: 0.5,
        roughness: 0.3,
        metalness: 0.7,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        emissive: 0x0e7490,
        emissiveIntensity: 0.4,
        roughness: 0.3,
        metalness: 0.7,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x8b5cf6,
        emissive: 0x6d28d9,
        emissiveIntensity: 0.3,
        roughness: 0.3,
        metalness: 0.7,
      }),
    ];

    // Generate atoms in a clustered molecular shape
    const atoms: Atom[] = [];
    const moleculeGroup = new THREE.Group();
    scene.add(moleculeGroup);

    for (let i = 0; i < ATOM_COUNT; i++) {
      // Use gaussian-like distribution for a more organic cluster
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = STRUCTURE_RADIUS * Math.pow(Math.random(), 0.5);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      const material =
        atomMaterials[Math.floor(Math.random() * atomMaterials.length)];
      const mesh = new THREE.Mesh(atomGeometry, material);
      mesh.position.set(x, y, z);

      // Vary atom sizes slightly for visual interest
      const scale = 0.6 + Math.random() * 0.8;
      mesh.scale.setScalar(scale);

      moleculeGroup.add(mesh);

      atoms.push({
        position: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002
        ),
        mesh,
      });
    }

    // --- Create bonds (lines between nearby atoms) ---
    const bondMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.15,
    });

    let bondLines: THREE.LineSegments;

    function updateBonds() {
      if (bondLines) moleculeGroup.remove(bondLines);

      const positions: number[] = [];

      for (let i = 0; i < atoms.length; i++) {
        for (let j = i + 1; j < atoms.length; j++) {
          const dist = atoms[i].position.distanceTo(atoms[j].position);
          if (dist < BOND_DISTANCE) {
            positions.push(
              atoms[i].position.x,
              atoms[i].position.y,
              atoms[i].position.z,
              atoms[j].position.x,
              atoms[j].position.y,
              atoms[j].position.z
            );
          }
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      bondLines = new THREE.LineSegments(geometry, bondMaterial);
      moleculeGroup.add(bondLines);
    }

    updateBonds();

    // --- Animation loop ---
    let frameCount = 0;
    let animationId: number;

    function animate() {
      animationId = requestAnimationFrame(animate);

      // Slow rotation of the entire molecular structure
      moleculeGroup.rotation.y += 0.002;
      moleculeGroup.rotation.x += 0.0005;

      // Subtle atom movement (thermal vibration effect)
      atoms.forEach((atom) => {
        atom.position.add(atom.velocity);
        atom.mesh.position.copy(atom.position);

        // Keep atoms within bounds
        const dist = atom.position.length();
        if (dist > STRUCTURE_RADIUS) {
          atom.velocity.multiplyScalar(-1);
        }
      });

      // Update bonds every 10 frames for performance
      frameCount++;
      if (frameCount % 10 === 0) {
        updateBonds();
      }

      renderer.render(scene, camera);
    }

    animate();

    // --- Handle resize ---
    function handleResize() {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }

    window.addEventListener("resize", handleResize);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}

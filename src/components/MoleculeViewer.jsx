import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Float, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';
import { ATOM_STYLES } from '../data/moleculesData';

// Component for a single atom
function Atom({ element, pos, scale = 1 }) {
  const style = ATOM_STYLES[element] || ATOM_STYLES.C;
  
  return (
    <mesh position={pos}>
      <sphereGeometry args={[style.radius * scale, 32, 32]} />
      <meshStandardMaterial 
        color={style.color} 
        roughness={0.3} 
        metalness={0.2}
        emissive={style.color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

// Component for a bond (cylinder between two points)
function Bond({ start, end, type = 1 }) {
  const distance = new THREE.Vector3(...start).distanceTo(new THREE.Vector3(...end));
  const midpoint = new THREE.Vector3(
    (start[0] + end[0]) / 2,
    (start[1] + end[1]) / 2,
    (start[2] + end[2]) / 2
  );
  
  // Calculate orientation
  const direction = new THREE.Vector3(...end).clone().sub(new THREE.Vector3(...start)).normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

  const radius = type === 2 ? 0.08 : 0.05;

  return (
    <group position={midpoint} quaternion={quaternion}>
      {/* For double bonds, we could offset them, but for simplicity we'll just make them thicker or use two cylinders */}
      {type === 2 ? (
        <>
          <mesh position={[0.1, 0, 0]}>
            <cylinderGeometry args={[0.04, 0.04, distance, 12]} />
            <meshStandardMaterial color="#888" metalness={0.5} roughness={0.2} />
          </mesh>
          <mesh position={[-0.1, 0, 0]}>
            <cylinderGeometry args={[0.04, 0.04, distance, 12]} />
            <meshStandardMaterial color="#888" metalness={0.5} roughness={0.2} />
          </mesh>
        </>
      ) : (
        <mesh>
          <cylinderGeometry args={[radius, radius, distance, 12]} />
          <meshStandardMaterial color="#888" metalness={0.5} roughness={0.2} />
        </mesh>
      )}
    </group>
  );
}

// Mirror plane component
function MirrorPlane() {
  return (
    <mesh rotation={[0, Math.PI / 2, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshPhysicalMaterial 
        transparent 
        opacity={0.15} 
        color="#88ccff" 
        transmission={0.5}
        thickness={0.5}
        roughness={0}
      />
    </mesh>
  );
}

// Internal scene component to handle auto-rotation and events
function SceneContent({ molecule, autoRotate, mirrorMode }) {
  const groupRef = useRef();
  const { camera } = useThree();

  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  // Handle camera reset event
  useEffect(() => {
    const handleReset = () => {
      camera.position.set(5, 5, 5);
      camera.lookAt(0, 0, 0);
    };
    window.addEventListener('reset-camera', handleReset);
    return () => window.removeEventListener('reset-camera', handleReset);
  }, [camera]);

  // Center the molecule by calculating its bounding center
  const centerPos = useMemo(() => {
    if (!molecule.atoms.length) return [0, 0, 0];
    const sum = molecule.atoms.reduce((acc, atom) => [acc[0] + atom.pos[0], acc[1] + atom.pos[1], acc[2] + atom.pos[2]], [0, 0, 0]);
    return sum.map(v => v / molecule.atoms.length);
  }, [molecule]);

  const mirroredMolecule = useMemo(() => {
    return {
      ...molecule,
      atoms: molecule.atoms.map(atom => ({ ...atom, pos: [-atom.pos[0], atom.pos[1], atom.pos[2]] }))
    };
  }, [molecule]);

  const renderMolecule = (mol, offset = [0, 0, 0], scale = 1) => (
    <group position={offset}>
      {mol.atoms.map((atom, i) => (
        <Atom key={i} element={atom.element} pos={[atom.pos[0] - centerPos[0], atom.pos[1] - centerPos[1], atom.pos[2] - centerPos[2]]} scale={scale} />
      ))}
      {mol.bonds.map((bond, i) => (
        <Bond 
          key={i} 
          start={[mol.atoms[bond.start].pos[0] - centerPos[0], mol.atoms[bond.start].pos[1] - centerPos[1], mol.atoms[bond.start].pos[2] - centerPos[2]]} 
          end={[mol.atoms[bond.end].pos[0] - centerPos[0], mol.atoms[bond.end].pos[1] - centerPos[1], mol.atoms[bond.end].pos[2] - centerPos[2]]}
          type={bond.type}
        />
      ))}
    </group>
  );

  return (
    <group ref={groupRef}>
      {mirrorMode ? (
        <>
          {renderMolecule(molecule, [2, 0, 0])}
          {renderMolecule(mirroredMolecule, [-2, 0, 0])}
          <MirrorPlane />
        </>
      ) : (
        renderMolecule(molecule)
      )}
    </group>
  );
}

export default function MoleculeViewer({ molecule, autoRotate, mirrorMode }) {
  return (
    <Canvas dpr={[1, 2]} shadows>
      <PerspectiveCamera makeDefault position={[5, 5, 5]} fov={40} />
      
      <color attach="background" args={['#020617']} />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      
      <Environment preset="city" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <SceneContent molecule={molecule} autoRotate={autoRotate} mirrorMode={mirrorMode} />

      <OrbitControls 
        minDistance={2} 
        maxDistance={15} 
        enablePan={true} 
        makeDefault
      />
      
      <ContactShadows 
        position={[0, -2, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={2.5} 
        far={4} 
      />
    </Canvas>
  );
}

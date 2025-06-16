import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, useTexture, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import './EarthBackground.css';

const Earth = () => {
  const earthRef = useRef();
  const groupRef = useRef();
  
  // Using textures from Three.js examples CDN
  const [colorMap, normalMap, specularMap] = useTexture([
    'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg',
    'https://threejs.org/examples/textures/planets/earth_normal_2048.jpg',
    'https://threejs.org/examples/textures/planets/earth_specular_2048.jpg'
  ], undefined, (error) => {
    if (error) {
      console.error('Error loading textures:', error);
    }
  });

  // Auto-rotation when not interacting
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} color="#ffffff" />
      <pointLight 
        color="#ffffff" 
        position={[5, 3, 5]} 
        intensity={1.5} 
        distance={25}
      />
      <Stars
        radius={100}
        depth={50}
        count={4000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          normalMap={normalMap}
          specularMap={specularMap}
          specular={new THREE.Color('lightgrey')}
          shininess={5}
          transparent={true}
          opacity={1}
          bumpMap={normalMap}
          bumpScale={0.5}
        />
      </mesh>
    </group>
  );
};

const VantaBackground = ({ children }) => {
  return (
    <div className="earth-container">
      <Canvas 
        camera={{ 
          position: [0, 0, 5], 
          fov: 45,
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <Suspense fallback={
          <mesh>
            <sphereGeometry args={[2, 32, 32]} />
            <meshBasicMaterial color="#0a0a1a" wireframe />
          </mesh>
        }>
          <Earth />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            rotateSpeed={0.8}
            autoRotate={true}
            autoRotateSpeed={0.5}
            minDistance={4}
            maxDistance={8}
          />
        </Suspense>
      </Canvas>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default VantaBackground;

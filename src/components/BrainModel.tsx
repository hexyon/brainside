import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { BrainRegion } from '@/data/brainRegions';

interface BrainModelProps {
  activeRegions: BrainRegion[];
  onRegionClick: (region: BrainRegion) => void;
  allRegions: BrainRegion[];
}

function BrainBase() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Left hemisphere */}
      <mesh position={[-0.3, 0, 0]}>
        <sphereGeometry args={[0.9, 64, 64]} />
        <meshStandardMaterial
          color="#1a1a2e"
          transparent
          opacity={0.4}
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
      {/* Right hemisphere */}
      <mesh position={[0.3, 0, 0]}>
        <sphereGeometry args={[0.9, 64, 64]} />
        <meshStandardMaterial
          color="#1a1a2e"
          transparent
          opacity={0.4}
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
      {/* Brain stem */}
      <mesh position={[0, -0.7, -0.2]} rotation={[0.3, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.15, 0.5, 16]} />
        <meshStandardMaterial
          color="#1a1a2e"
          transparent
          opacity={0.4}
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
    </group>
  );
}

interface NeuralConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
}

function NeuralConnection({ start, end }: NeuralConnectionProps) {
  const lineRef = useRef<THREE.Line>(null);
  
  const { geometry, material } = useMemo(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    const mid = startVec.clone().add(endVec).multiplyScalar(0.5);
    mid.y += 0.2;
    
    const curve = new THREE.QuadraticBezierCurve3(startVec, mid, endVec);
    const points = curve.getPoints(20);
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({
      color: '#00D4FF',
      transparent: true,
      opacity: 0.6,
    });
    
    return { geometry: geo, material: mat };
  }, [start, end]);

  return <primitive object={new THREE.Line(geometry, material)} ref={lineRef} />;
}

interface RegionMeshProps {
  region: BrainRegion;
  isActive: boolean;
  onClick: () => void;
}

function RegionMesh({ region, isActive, onClick }: RegionMeshProps) {
  const meshRef = useRef<THREE.Sprite>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      region.imagePath,
      (loadedTexture) => {
        setTexture(loadedTexture);
      },
      undefined,
      (error) => {
        console.error('Error loading texture:', region.imagePath, error);
      }
    );
  }, [region.imagePath]);
  
  useFrame((state) => {
    if (meshRef.current && isActive) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
      meshRef.current.scale.setScalar(region.scale * scale * 3);
    } else if (meshRef.current) {
      meshRef.current.scale.setScalar(region.scale * 3);
    }
    
    if (glowRef.current && isActive) {
      glowRef.current.scale.setScalar(region.scale * 2 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <group position={region.position}>
      {/* Glow effect for active regions */}
      {isActive && (
        <mesh ref={glowRef} scale={region.scale * 2}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial
            color={region.color}
            transparent
            opacity={0.3}
          />
        </mesh>
      )}
      
      {/* Image sprite */}
      {texture ? (
        <sprite
          ref={meshRef}
          scale={region.scale * 3}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'default';
          }}
        >
          <spriteMaterial
            map={texture}
            transparent={true}
            opacity={isActive ? 1 : 0.5}
            color={isActive ? region.color : '#ffffff'}
          />
        </sprite>
      ) : (
        // Fallback to sphere while texture loads
        <mesh
          scale={region.scale}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'default';
          }}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={isActive ? region.color : '#2a2a3e'}
            emissive={isActive ? region.color : '#000000'}
            emissiveIntensity={isActive ? 0.5 : 0}
            transparent
            opacity={isActive ? 0.9 : 0.3}
            roughness={0.3}
            metalness={0.5}
          />
        </mesh>
      )}
    </group>
  );
}

export function BrainModel({ activeRegions, onRegionClick, allRegions }: BrainModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const activeIds = useMemo(() => new Set(activeRegions.map(r => r.id)), [activeRegions]);

  return (
    <group ref={groupRef}>
      <BrainBase />
      
      {allRegions.map((region) => (
        <RegionMesh
          key={region.id}
          region={region}
          isActive={activeIds.has(region.id)}
          onClick={() => onRegionClick(region)}
        />
      ))}
      
      {/* Neural connections between active regions */}
      {activeRegions.length > 1 && activeRegions.map((region, i) => {
        if (i === 0) return null;
        const prevRegion = activeRegions[i - 1];
        
        return (
          <NeuralConnection
            key={`${region.id}-${prevRegion.id}`}
            start={region.position}
            end={prevRegion.position}
          />
        );
      })}
    </group>
  );
}


"use client"

import React, { useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Html } from '@react-three/drei';

function Timetable() {
  return (
    <div style={{
      position: 'fixed', // Fixed position to overlay it on the canvas
      top: 0,
      left: 0,
      width: '100vw', // Full viewport width
      height: '100vh', // Full viewport height
      background: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      zIndex: 1000, // High z-index to overlay above other elements
    }}>
      <img
        src="image.png" // Replace with the path to your image
        alt="Timetable"
        style={{
          maxWidth: '20%', // Maximum width of the image
          maxHeight: '20%', // Maximum height of the image
          objectFit: 'contain', // Maintain aspect ratio
        }}
      />
    </div>
  );
}


export function Explore(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/college_ap.glb');
  const { actions } = useAnimations(animations, group);

  const [showTimetable, setShowTimetable] = useState(false);

  const handleClick = () => {
    setShowTimetable((prev) => !prev);
  };

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="4d4281de40ef43db942a30a2f9dab2bdfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode">
              <group
                name="Low-1"
                position={[-282.341, 0, -137.079]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <group name="Object_4" position={[-2.106, -44.196, 15]}>
                  <mesh
                    name="Low-1_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Low-1_02_-_Default_0'].geometry}
                    material={materials['02_-_Default']}
                    position={[288.092, 752.156, -0.114]}
                    rotation={[0, 0, 3.131]}
                    onClick={handleClick}

                  />
                  <mesh
                    name="Low-1_02_-_Default_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes['Low-1_02_-_Default_0001'].geometry}
                    material={materials['02_-_Default']}
                    position={[404.352, 750.104, 0.181]}
                    rotation={[0, 0, 3.131]}
                  />
                  <mesh
                    name="Low-1_02_-_Default_0002"
                    castShadow
                    receiveShadow
                    geometry={nodes['Low-1_02_-_Default_0002'].geometry}
                    material={materials['02_-_Default']}
                    position={[283.909, 755.374, -12.451]}
                    rotation={[0, 0, 3.131]}
                  />
                  <mesh
                    name="Low-1_02_-_Default_0003"
                    castShadow
                    receiveShadow
                    geometry={nodes['Low-1_02_-_Default_0003'].geometry}
                    material={materials['02_-_Default']}
                    position={[400.169, 753.322, -12.155]}
                    rotation={[0, 0, 3.131]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model001"
          position={[0, 0.566, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.681}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="ElevatorCage_11" position={[-0.04, 1.015, 0]}>
                <group
                  name="ElevatorInteriorButtons_4"
                  position={[-3.115, 0.613, -7.028]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={0.724}>
                  <mesh
                    name="Object_15"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_15.geometry}
                    material={materials.Metal}
                  />
                  <mesh
                    name="Object_16"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials.Buttons}
                  />
                </group>
                <group name="HandleElevator001_6" position={[-5.625, 0.069, -0.028]}>
                  <mesh
                    name="Object_21"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_21.geometry}
                    material={materials.Metal}
                  />
                  <mesh
                    name="Object_22"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_22.geometry}
                    material={materials.DarkerMetal}
                  />
                </group>
                <group
                  name="HandleElevator002_7"
                  position={[-4.442, 0.069, -1.375]}
                  rotation={[0, -1.571, 0]}>
                  <mesh
                    name="Object_24"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_24.geometry}
                    material={materials.Metal}
                  />
                  <mesh
                    name="Object_25"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_25.geometry}
                    material={materials.DarkerMetal}
                  />
                </group>
                <group
                  name="HandleElevator_5"
                  position={[-1.407, 0.069, 1.294]}
                  rotation={[0, -1.571, 0]}>
                  <mesh
                    name="Object_18"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.Metal}
                    position={[0, 0, 3.035]}
                  />
                  <mesh
                    name="Object_19"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials.DarkerMetal}
                    position={[0, 0, 3.035]}
                  />
                </group>
                <group
                  name="LeftInteriorDoor_8"
                  position={[-0.008, 0, 0]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[1, 0.572, 1]}>
                  <mesh
                    name="Object_27"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_27.geometry}
                    material={materials.Metal}
                    position={[-0.082, -4.797, -6.011]}
                    scale={0.724}
                  />
                  <mesh
                    name="Object_27001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_27001.geometry}
                    material={materials.Metal}
                    position={[-0.568, -4.546, -2.92]}
                    scale={0.724}
                  />
                </group>
                <group
                  name="Mirror_9"
                  position={[-4.662, 1.137, -6.03]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[0.785, 0.724, 0.791]}>
                  <mesh
                    name="Object_29"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_29.geometry}
                    material={materials.Mirror}
                  />
                  <mesh
                    name="Object_30"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_30.geometry}
                    material={materials.DarkerMetal}
                  />
                </group>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Metal}
                  position={[-2.748, 0.082, -6.011]}
                  scale={0.724}
                />
                <mesh
                  name="Object_12001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12001.geometry}
                  material={materials.Metal}
                  position={[-2.605, 0.081, -3.962]}
                  scale={0.724}
                />
                <group
                  name="RightInteriorDoor_10"
                  position={[-0.01, 0.4, -0.003]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[0.724, 0.415, 0.724]}
                />
              </group>
              <group
                name="ElevatorCallingButtons003_15"
                position={[-2.847, 3.3, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1.322}
              />
              <group
                name="ElevatorCallingButtons006_14"
                position={[-2.847, 3.283, -0.072]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.01}>
                <mesh
                  name="Object_39"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_39.geometry}
                  material={materials.Emission}
                />
              </group>
              <group name="ElevatorCallingButtons007_13" position={[-2.847, 3.322, 0.086]}>
                <mesh
                  name="Object_37"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37.geometry}
                  material={materials.Emission}
                />
              </group>
              <group
                name="ElevatorCallingButtons_12"
                position={[-2.633, 1.421, -6.978]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.864}>
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.Metal}
                />
                <mesh
                  name="Object_35"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_35.geometry}
                  material={materials.Emission}
                />
              </group>
              <group
                name="ElevatorOutsideArmature_3"
                position={[0.114, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Metal}
                  position={[-0.086, -2.79, -5.557]}
                  scale={0.724}
                />
                <mesh
                  name="Object_10001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10001.geometry}
                  material={materials.Metal}
                  position={[-0.085, -2.647, -3.507]}
                  scale={0.724}
                />
              </group>
              <group
                name="LeftOutsideDoor_0"
                position={[0.026, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.438, 1]}>
                <mesh
                  name="Object_4001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4001.geometry}
                  material={materials.Metal}
                  position={[-0.086, -6.309, -5.565]}
                  scale={0.724}
                />
                <mesh
                  name="Object_4002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4002.geometry}
                  material={materials.Metal}
                  position={[-0.085, -5.984, -3.515]}
                  scale={0.724}
                />
              </group>
              <group name="Plane_16" position={[-0.785, 0, -0.114]} />
              <group
                name="RightOutsideDoor_1"
                position={[0.026, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.438, 1]}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Metal}
                  position={[-0.086, -6.309, -5.549]}
                  scale={0.724}
                />
                <mesh
                  name="Object_6001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6001.geometry}
                  material={materials.Metal}
                  position={[-0.079, -6.05, -3.477]}
                  scale={0.724}
                />
              </group>
              <group name="Wall_2" position={[0.225, 1, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Wall}
                  position={[0.017, -2.821, -5.557]}
                  scale={0.724}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model002"
          position={[6.469, 1.707, -7.573]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.65}>
          <group
            name="6f18c58abd454e8cac401bb7959f7216fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode001">
              <group name="Null" position={[0, 0, -12.571]}>
                <group name="01" position={[121.448, 0.103, 8.945]}>
                  <mesh
                    name="01_f_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['01_f_0'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="01_glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['01_glass_0'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="02" position={[43.106, 0.105, -1.013]}>
                  <mesh
                    name="02_f_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['02_f_0'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="02_glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['02_glass_0'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="03" position={[-42.695, 0.097, -1.013]}>
                  <mesh
                    name="03_f_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['03_f_0'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="03_glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['03_glass_0'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="04" position={[-121.448, 0.012, 8.945]}>
                  <mesh
                    name="04_f_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['04_f_0'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="04_glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['04_glass_0'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="f" position={[-0.048, -0.071, 0.001]}>
                  <mesh
                    name="f_f_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.f_f_0.geometry}
                    material={materials.material}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model003"
          position={[10.701, 1.758, -7.197]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.65}>
          <group
            name="6f18c58abd454e8cac401bb7959f7216fbx001"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode002">
              <group name="Null001" position={[0, 0, -12.571]}>
                <group name="01001" position={[121.448, 0.103, 8.945]}>
                  <mesh
                    name="01_f_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes['01_f_0001'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="01_glass_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes['01_glass_0001'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="02001" position={[43.106, 0.105, -1.013]}>
                  <mesh
                    name="02_f_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes['02_f_0001'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="02_glass_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes['02_glass_0001'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="03001" position={[-42.695, 0.097, -1.013]}>
                  <mesh
                    name="03_f_0001"
                    castShadow

                    receiveShadow
                    geometry={nodes['03_f_0001'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="03_glass_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes['03_glass_0001'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="04001" position={[-121.448, 0.012, 8.945]}>
                  <mesh
                    name="04_f_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes['04_f_0001'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="04_glass_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes['04_glass_0001'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="f001" position={[-0.048, -0.071, 0.001]}>
                  <mesh
                    name="f_f_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.f_f_0001.geometry}
                    material={materials.material}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model004"
          position={[-6.171, 1.861, -8.749]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.65}>
          <group
            name="6f18c58abd454e8cac401bb7959f7216fbx002"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode003">
              <group name="Null002" position={[0, 0, -12.571]}>
                <group name="01002" position={[121.448, 0.103, 8.945]} />
                <group name="02002" position={[43.106, 0.105, -1.013]} />
                <group name="03002" position={[-42.695, 0.097, -1.013]} />
                <group name="04002" position={[-121.448, 0.012, 8.945]} />
                <group name="f002" position={[-0.048, -0.071, 0.001]} />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model005"
          position={[11.091, 1.784, -7.165]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.65}>
          <group
            name="6f18c58abd454e8cac401bb7959f7216fbx003"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode004">
              <group name="Null003" position={[0, 0, -12.571]}>
                <group name="01003" position={[121.448, 0.103, 8.945]}>
                  <mesh
                    name="01_f_0003"
                    castShadow
                    receiveShadow
                    geometry={nodes['01_f_0003'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="01_glass_0003"
                    castShadow
                    receiveShadow
                    geometry={nodes['01_glass_0003'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="02003" position={[43.106, 0.105, -1.013]}>
                  <mesh
                    name="02_f_0003"
                    castShadow
                    receiveShadow
                    geometry={nodes['02_f_0003'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="02_glass_0003"
                    castShadow
                    receiveShadow
                    geometry={nodes['02_glass_0003'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="03003" position={[-42.695, 0.097, -1.013]}>
                  <mesh
                    name="03_f_0003"
                    castShadow
                    receiveShadow
                    geometry={nodes['03_f_0003'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="03_glass_0003"
                    castShadow
                    receiveShadow
                    geometry={nodes['03_glass_0003'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="04003" position={[-121.448, 0.012, 8.945]}>
                  <mesh
                    name="04_f_0003"
                    castShadow
                    receiveShadow
                    geometry={nodes['04_f_0003'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="04_glass_0003"
                    castShadow
                    receiveShadow
                    geometry={nodes['04_glass_0003'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="f003" position={[-0.048, -0.071, 0.001]}>
                  <mesh
                    name="f_f_0003"
                    castShadow
                    receiveShadow
                    geometry={nodes.f_f_0003.geometry}
                    material={materials.material}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model006"
          position={[-11.52, 1.784, -9.223]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.65}>
          <group
            name="6f18c58abd454e8cac401bb7959f7216fbx004"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode005">
              <group name="Null004" position={[0, 0, -12.571]}>
                <group name="01004" position={[121.448, 0.103, 8.945]}>
                  <mesh
                    name="01_f_0004"
                    castShadow
                    receiveShadow
                    geometry={nodes['01_f_0004'].geometry}
                    material={materials.material}
                    position={[0, 0, 269.502]}
                  />
                  <mesh
                    name="01_f_0006"
                    castShadow
                    receiveShadow
                    geometry={nodes['01_f_0006'].geometry}
                    material={materials.material}
                    position={[653.573, -5.44, 265.315]}
                  />
                  <mesh
                    name="01_glass_0004"
                    castShadow
                    receiveShadow
                    geometry={nodes['01_glass_0004'].geometry}
                    material={materials.glass}
                    position={[0, 0, 269.502]}
                  />
                  <mesh
                    name="01_glass_0006"
                    castShadow
                    receiveShadow
                    geometry={nodes['01_glass_0006'].geometry}
                    material={materials.glass}
                    position={[653.573, -5.44, 265.315]}
                  />
                </group>
                <group name="02004" position={[43.106, 0.105, -1.012]}>
                  <mesh
                    name="02_f_0004"
                    castShadow
                    receiveShadow
                    geometry={nodes['02_f_0004'].geometry}
                    material={materials.material}
                    position={[0, 0, 269.502]}
                  />
                  <mesh
                    name="02_f_0006"
                    castShadow
                    receiveShadow
                    geometry={nodes['02_f_0006'].geometry}
                    material={materials.material}
                    position={[653.573, -5.439, 265.315]}
                  />
                  <mesh
                    name="02_glass_0004"
                    castShadow
                    receiveShadow
                    geometry={nodes['02_glass_0004'].geometry}
                    material={materials.glass}
                    position={[0, 0, 269.502]}
                  />
                  <mesh
                    name="02_glass_0006"
                    castShadow
                    receiveShadow
                    geometry={nodes['02_glass_0006'].geometry}
                    material={materials.glass}
                    position={[653.573, -5.439, 265.315]}
                  />
                </group>
                <group name="03004" position={[-42.694, 0.097, -1.013]}>
                  <mesh
                    name="03_f_0004"
                    castShadow
                    receiveShadow
                    geometry={nodes['03_f_0004'].geometry}
                    material={materials.material}
                    position={[0, 0, 269.502]}
                  />
                  <mesh
                    name="03_f_0006"
                    castShadow
                    receiveShadow
                    geometry={nodes['03_f_0006'].geometry}
                    material={materials.material}
                    position={[653.573, -5.44, 265.315]}
                  />
                  <mesh
                    name="03_glass_0004"
                    castShadow
                    receiveShadow
                    geometry={nodes['03_glass_0004'].geometry}
                    material={materials.glass}
                    position={[0, 0, 269.502]}
                  />
                  <mesh
                    name="03_glass_0006"
                    castShadow
                    receiveShadow
                    geometry={nodes['03_glass_0006'].geometry}
                    material={materials.glass}
                    position={[653.573, -5.44, 265.315]}
                  />
                </group>
                <group name="04004" position={[-121.448, 0.012, 8.945]}>
                  <mesh
                    name="04_f_0004"
                    castShadow
                    receiveShadow
                    geometry={nodes['04_f_0004'].geometry}
                    material={materials.material}
                    position={[0, 0, 269.502]}
                  />
                  <mesh
                    name="04_f_0006"
                    castShadow
                    receiveShadow
                    geometry={nodes['04_f_0006'].geometry}
                    material={materials.material}
                    position={[653.573, -5.44, 265.315]}
                  />
                  <mesh
                    name="04_glass_0004"
                    castShadow
                    receiveShadow
                    geometry={nodes['04_glass_0004'].geometry}
                    material={materials.glass}
                    position={[0, 0, 269.502]}
                  />
                  <mesh
                    name="04_glass_0006"
                    castShadow
                    receiveShadow
                    geometry={nodes['04_glass_0006'].geometry}
                    material={materials.glass}
                    position={[653.573, -5.44, 265.315]}
                  />
                </group>
                <group name="f004" position={[-0.048, -0.071, 0.001]}>
                  <mesh
                    name="f_f_0004"
                    castShadow
                    receiveShadow
                    geometry={nodes.f_f_0004.geometry}
                    material={materials.material}
                    position={[0, 0, 269.502]}
                  />
                  <mesh
                    name="f_f_0006"
                    castShadow
                    receiveShadow
                    geometry={nodes.f_f_0006.geometry}
                    material={materials.material}
                    position={[653.573, -5.439, 265.315]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model007"
          position={[12.181, 1.81, -7.538]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.65}>
          <group
            name="6f18c58abd454e8cac401bb7959f7216fbx005"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode006">
              <group name="Null005" position={[0, 0, -12.571]}>
                <group name="01005" position={[121.448, 0.103, 8.945]}>
                  <mesh
                    name="01_f_0005"
                    castShadow
                    receiveShadow
                    geometry={nodes['01_f_0005'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="01_glass_0005"
                    castShadow
                    receiveShadow
                    geometry={nodes['01_glass_0005'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="02005" position={[43.106, 0.105, -1.013]}>
                  <mesh
                    name="02_f_0005"
                    castShadow
                    receiveShadow
                    geometry={nodes['02_f_0005'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="02_glass_0005"
                    castShadow
                    receiveShadow
                    geometry={nodes['02_glass_0005'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="03005" position={[-42.695, 0.097, -1.013]}>
                  <mesh
                    name="03_f_0005"
                    castShadow
                    receiveShadow
                    geometry={nodes['03_f_0005'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="03_glass_0005"
                    castShadow
                    receiveShadow
                    geometry={nodes['03_glass_0005'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="04005" position={[-121.448, 0.012, 8.945]}>
                  <mesh
                    name="04_f_0005"
                    castShadow
                    receiveShadow
                    geometry={nodes['04_f_0005'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="04_glass_0005"
                    castShadow
                    receiveShadow
                    geometry={nodes['04_glass_0005'].geometry}
                    material={materials.glass}
                  />
                </group>
                <group name="f005" position={[-0.048, -0.071, 0.001]}>
                  <mesh
                    name="f_f_0005"
                    castShadow
                    receiveShadow
                    geometry={nodes.f_f_0005.geometry}
                    material={materials.material}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model008" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root001">
            <group name="GLTF_SceneRootNode001" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="bottom_frame_136"
                position={[-4.199, 5.247, 3.481]}
                rotation={[-2.832, 1.071, 2.868]}
                scale={[0.473, 0.282, 2.467]}
              />
              <group
                name="Cube004_133"
                position={[14.104, 2.288, -0.236]}
                scale={[8.429, 9.834, 37.93]}
              />
              <group
                name="Cube005_132"
                position={[22.786, -6.842, -0.236]}
                scale={[0.702, 0.281, 42.144]}
              />
              <group
                name="leather_130"
                position={[-1.351, 6.521, 1.595]}
                rotation={[-Math.PI, 1.091, -Math.PI]}
                scale={[-0.663, -0.251, -0.092]}
              />
              <group
                name="office_workplace_74_obj022_127"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj023_126"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj024_125"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj025_124"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj026_123"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj027_122"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj028_121"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj271_115"
                position={[-16.1, -8.24, -25.059]}
                rotation={[Math.PI / 2, 0, -3.133]}
                scale={0.029}
              />
              <group
                name="office_workplace_74_obj272_114"
                position={[-16.1, -8.24, -25.059]}
                rotation={[Math.PI / 2, 0, -3.133]}
                scale={0.029}
              />
              <group
                name="office_workplace_74_obj273_113"
                position={[-16.1, -8.24, -25.059]}
                rotation={[Math.PI / 2, 0, -3.133]}
                scale={0.029}
              />
              <group
                name="office_workplace_74_obj295_98"
                position={[-16.1, -8.24, -25.059]}
                rotation={[Math.PI / 2, 0, -3.133]}
                scale={0.029}
              />
              <group
                name="office_workplace_74_obj296_97"
                position={[-16.1, -7.864, -25.059]}
                rotation={[Math.PI / 2, 0, -3.133]}
                scale={0.029}
              />
              <group
                name="office_workplace_74_obj682_15"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj683_14"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj684_13"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj685_12"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj686_11"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj687_10"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj688_9"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj689_8"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj690_7"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj691_6"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj692_5"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj693_4"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj694_3"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
              <group
                name="office_workplace_74_obj695_2"
                position={[32.307, -5.147, -34.557]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.027}
              />
            </group>
          </group>
        </group>
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['Material.002']}
          position={[8.86, 1.958, -7.52]}
          scale={[6.184, 1.83, 0.054]}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Material}
          position={[-10.75, 2.014, -7.473]}
          scale={[9.934, 1.884, 0.054]}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials['Material.013']}
          position={[-3.656, 0.22, 0.921]}
          scale={[18.069, 0.216, 8.381]}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials['Material.009']}
          position={[1.81, 1.607, -9.971]}
          scale={[0.121, 1.618, 0.082]}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['Material.010']}
          position={[-0.805, 1.63, -9.971]}
          scale={[0.121, 1.634, 0.082]}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={nodes.Cube005.material}
          position={[0.5, 3.339, -8.862]}
          scale={[2.024, 0.09, 1.417]}
        />
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['Material.001']}
          position={[0.494, 3.695, -10.219]}
          scale={[3.334, 0.537, 0.099]}
        />
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={nodes.Cube009.material}
          position={[5.291, 1.834, -4.615]}
          scale={[2.7, 1.428, 2.95]}
        />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          position={[10.748, 1.866, -4.593]}
          scale={[2.7, 1.428, 2.95]}
        />
{showTimetable && (
          <Html center>
            <Timetable />
          </Html>
        )}
        <mesh
          name="Text"
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials['Material.003']}
          position={[13.047, 3.477, -4.864]}
          rotation={[-Math.PI, 0.02, -Math.PI]}
          onClick={handleClick}

        />
        <mesh
          name="Text001"
          castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={materials['Material.003']}
          position={[7.397, 3.352, -5.023]}
          rotation={[-Math.PI, 0.02, -Math.PI]}
          onClick={handleClick}
        />
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={nodes.Cube011.material}
          position={[10.778, 2.206, 6.251]}
          scale={[2.7, 1.96, 2.95]}
        />
        <mesh
          name="Cube012"
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={nodes.Cube012.material}
          position={[5.388, 2.2, 6.261]}
          scale={[2.7, 1.96, 2.95]}
        />
        <mesh
          name="Text002"
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={materials['Material.003']}
          position={[12.988, 4.383, 5.906]}
          rotation={[-Math.PI, 0.02, -Math.PI]}
        />
        <mesh
          name="Text003"
          castShadow
          receiveShadow
          geometry={nodes.Text003.geometry}
          material={materials['Material.003']}
          position={[7.808, 4.182, 5.832]}
          rotation={[-Math.PI, 0.02, -Math.PI]}
          onClick={handleClick}

        />
        <mesh
          name="Text004"
          castShadow
          receiveShadow
          geometry={nodes.Text004.geometry}
          material={materials['Material.003']}
          position={[3.256, -2.296, 7.119]}
          rotation={[-Math.PI, 0.02, -Math.PI]}
          onClick={handleClick}

        />
        <mesh
          name="Text005"
          castShadow
          receiveShadow
          geometry={nodes.Text005.geometry}
          material={materials['Material.004']}
          position={[1.914, 3.698, -10.422]}
          rotation={[1.598, 0.007, -3.12]}
          scale={[0.564, 0.748, 0.564]}
          onClick={handleClick}

        />
        <mesh
          name="Text006"
          castShadow
          receiveShadow
          geometry={nodes.Text006.geometry}
          material={materials['Material.004']}
          position={[2.768, 3.369, -10.334]}
          rotation={[1.597, -0.01, -3.119]}
          scale={[0.486, 0.449, 0.338]}
          onClick={handleClick}

        />
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
          position={[-5.785, 2.306, -2.877]}
          scale={[3.84, 1.698, 4.58]}
        />
        <mesh
          name="Cube013"
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={nodes.Cube013.material}
          position={[-0.449, 2.294, 6.246]}
          scale={[2.993, 1.837, 2.937]}
        />
        <mesh
          name="Cube014"
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={nodes.Cube014.material}
          position={[-18.096, 1.913, -3.124]}
          scale={[2.824, 1.44, 4.355]}
        />
        <mesh
          name="Cube015"
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={nodes.Cube015.material}
          position={[-9.999, 2.189, 6.328]}
          scale={[6.378, 1.985, 2.892]}
        />
        <mesh
          name="Text007"
          castShadow
          receiveShadow
          geometry={nodes.Text007.geometry}
          material={materials['Material.003']}
          position={[2.1, 3.573, 5.966]}
          rotation={[-Math.PI, 0.02, -Math.PI]}
          onClick={handleClick}

        />
        <mesh
          name="Text008"
          castShadow
          receiveShadow
          geometry={nodes.Text008.geometry}
          material={materials['Material.003']}
          position={[-6.449, 3.697, 6.249]}
          rotation={[-Math.PI, 0.02, -Math.PI]}
          onClick={handleClick}

        />
        <mesh
          name="Text009"
          castShadow
          receiveShadow
          geometry={nodes.Text009.geometry}
          material={materials['Material.003']}
          position={[1.426, 4.321, 6.139]}
          rotation={[-Math.PI, 0.02, -Math.PI]}
          onClick={handleClick}

        />
        <mesh
          name="Text010"
          castShadow
          receiveShadow
          geometry={nodes.Text010.geometry}
          material={materials['Material.003']}
          position={[-6.512, 4.238, 6.15]}
          rotation={[-Math.PI, 0.02, -Math.PI]}
          scale={[1.357, 1, 1.357]}
          onClick={handleClick}

        />
        <mesh
          name="Text011"
          castShadow
          receiveShadow
          geometry={nodes.Text011.geometry}
          material={materials['Material.003']}
          position={[-2.254, 4.112, -4.135]}
          rotation={[-Math.PI, 0.007, -Math.PI]}
          onClick={handleClick}

        />
        <mesh
          name="Text012"
          castShadow
          receiveShadow
          geometry={nodes.Text012.geometry}
          material={materials['Material.003']}
          position={[-16.529, 3.427, -2.818]}
          rotation={[-Math.PI, 0.02, -Math.PI]}
          scale={[1.42, 1, 1.42]}
          onClick={handleClick}

        />
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials['Material.011']}
          position={[0, 1.021, 0.898]}
          scale={[2.136, 0.6, 0.564]}
        />
        <mesh
          name="Text013"
          castShadow
          receiveShadow
          geometry={nodes.Text013.geometry}
          material={materials['Material.004']}
          position={[1.164, 0.907, 0.305]}
          rotation={[1.598, 0.007, -3.12]}
          scale={[0.434, 0.577, 0.434]}
          onClick={handleClick}

        />
        <mesh
          name="Cube016"
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials['Material.012']}
          position={[0.518, 0, -8.741]}
          scale={[2.966, 0.133, 1.54]}
          onClick={handleClick}

        />
        <mesh
          name="Text014"
          castShadow
          receiveShadow
          geometry={nodes.Text014.geometry}
          material={materials['Material.003']}
          position={[9.538, 0.506, 0.752]}
          rotation={[-Math.PI, 0.02, -Math.PI]}
          onClick={handleClick}

        />
      </group>
    </group>
  )
}

useGLTF.preload('/college_ap.glb')

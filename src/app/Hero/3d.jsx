import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
    const { nodes, materials } = useGLTF('/medias/new.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Stylized_Steam_Engine.geometry}
                material={materials.Chess_White}
                position={[-16.278, -5.287, 15.112]}
                rotation={[0, -0.83, 0]}
                scale={0.405}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial015.geometry}
                material={materials.Chess_White}
                position={[6.094, -2.882, 6.897]}
                rotation={[0.117, 0.195, 0.197]}
                scale={[2.186, 2.186, 3.484]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Motor_Body.geometry}
                material={materials.Chess_White}
                position={[-14.836, -5.26, 2.744]}
                scale={0.193}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={materials.Material}
                position={[-4.053, 5.598, -18.464]}
                rotation={[-0.481, -0.729, -1.439]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002.geometry}
                material={materials.Material}
                position={[-6.034, -6.216, 14.107]}
                rotation={[2.399, 0.313, -0.236]}
                scale={2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder003.geometry}
                material={materials.Material}
                position={[-8.456, 8.426, 5.215]}
                rotation={[-2.315, -0.151, 3.056]}
                scale={[2.516, 0.42, 2.516]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder004.geometry}
                material={materials.Material}
                position={[0.002, 6.497, 20.481]}
                rotation={[2.129, -0.762, -0.858]}
                scale={2.445}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder006.geometry}
                material={materials.Material}
                position={[-8.888, 5.801, -13.725]}
                rotation={[-0.348, -1.393, -2.458]}
                scale={2.445}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder007.geometry}
                material={materials.Material}
                position={[-22.7, -0.152, -3.197]}
                rotation={[-2.008, 0.529, -3.025]}
                scale={[1.572, 0.263, 1.572]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009.geometry}
                material={materials.Chess_White}
                position={[-1.528, 2.962, 0.045]}
                rotation={[0, -0.543, 0]}
                scale={1.815}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.computer_plastic_0.geometry}
                material={materials.Chess_White}
                position={[-4.725, -2.965, -2.784]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={16.235}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.PCB_P1.geometry}
                material={materials.Chess_White}
                position={[-9.084, 0.232, -5.426]}
                rotation={[-0.603, 0, 0]}
                scale={0.17}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003_Material001_0.geometry}
                material={materials.Chess_White}
                position={[3.35, -3.626, -18.916]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={2.604}
            />
        </group>
    )
}

useGLTF.preload('/medias/new.glb')
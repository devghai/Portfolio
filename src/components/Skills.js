import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Box } from '@react-three/drei';

function Skills() {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
            </Canvas>
        </div>
    );
}

export default Skills;

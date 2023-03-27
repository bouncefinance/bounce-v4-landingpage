
import { Engine, Scene } from 'babylonjs';

export const createEngine = () => {
    const canvas = document.getElementById("renderCanvas")
    const engineOptions = {
        antialias: true,
        // limitDeviceRatio: 1.0,
        // preserveDrawingBuffer: false,
        disableWebGL2Support: false,
        xrCompatible: false,
    };
    // stencil: false };
    const engine = new Engine(
        canvas,
        true,
        engineOptions
    );
    window.addEventListener('resize', () => {
        if (engine) {
            engine.resize();
        }
    }
    )
    return engine
}

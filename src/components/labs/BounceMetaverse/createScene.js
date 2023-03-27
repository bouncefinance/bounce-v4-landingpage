import { Scene, SceneLoader } from 'babylonjs';
import 'babylonjs-loaders';

export const createScene = (engine, canvas) => {
    const scene = new Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 3, 20, new BABYLON.Vector3(0, 0, 0));
    camera.lowerRadiusLimit = 20;
    camera.upperRadiusLimit = 20;
    camera.lowerBetaLimit = Math.PI / 3.5;
    camera.upperBetaLimit = Math.PI / 2.5;
    camera.attachControl(canvas, true);

    const hem1 = new BABYLON.HemisphericLight("hem1", new BABYLON.Vector3(0, 5, 0), scene)
    hem1.intensity = 1

    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);


    //Light direction is directly down from a position one unit up, slow decay
    // var light = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 1, 7), new BABYLON.Vector3(0, -1, 0), Math.PI / 2, 10, scene);
    // light.diffuse = new BABYLON.Color3(0, 0, 1);
    // light.specular = new BABYLON.Color3(0, 0, 1);
    // light.intensity = 10
    // console.log(light)

    var pointLight = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0, 5, 0))
    pointLight.intensity = 10

    var dirLight = new BABYLON.DirectionalLight("DirectionalLight1", new BABYLON.Vector3(0, 5, 0), scene);
    dirLight.direction = new BABYLON.Vector3(0, -0.4, 1)
    dirLight.diffuse = new BABYLON.Color3(0, 0, 1);
    var dirLight2 = new BABYLON.DirectionalLight("DirectionalLight2", new BABYLON.Vector3(0, 4, 0), scene);
    dirLight2.direction = new BABYLON.Vector3(1, -0.4, 0)
    dirLight2.diffuse = new BABYLON.Color3(1, 0, 0);
    var dirLight3 = new BABYLON.DirectionalLight("DirectionalLight3", new BABYLON.Vector3(0, 5, 0), scene);
    dirLight3.direction = new BABYLON.Vector3(-1, -0.4, 0)
    dirLight3.diffuse = new BABYLON.Color3(0, 0, 1);
    var dirLight4 = new BABYLON.DirectionalLight("DirectionalLight4", new BABYLON.Vector3(0, 1, 0), scene);
    dirLight4.direction = new BABYLON.Vector3(0, -0.4, -1)
    dirLight4.diffuse = new BABYLON.Color3(1, 0, 0);

    // scene.environmentIntensity = 0.4


    loadGameArea(scene, pointLight)
    scene.debugLayer.hide();

    var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("/models/game-area/environmentSpecular.env", scene);
    scene.environmentTexture = hdrTexture;

    scene.imageProcessingConfiguration.exposure = 0.3

    engine.runRenderLoop(function () {
        if (scene) {
            scene.render();
            rotateCamera(camera, engine.getDeltaTime());
        }
    });
};
const loadGameArea = (scene, light) => {
    scene.ambientColor = new BABYLON.Color3(1, 1, 1);

    SceneLoader.ImportMesh("", "/models/game-area/", "Game_Area_Interior32.glb", scene, function (meshes) {
        meshes[0].position = new BABYLON.Vector3(0, 0, 8)
        meshes.forEach(mesh => {
            // console.log(mesh.name)
            if (mesh.material) {
                mesh.material.maxSimultaneousLights = 20;
            }
            if (mesh.name === "Floor-Mat.8") {
                console.log(mesh.name, mesh)
                mesh.receiveShadows = true
                mesh.material.specularColor = new BABYLON.Color3(0, 0, 0);
            }
            if (mesh.name === "Floor-Mat.001") {
                console.log(mesh.name, mesh)
                mesh.receiveShadows = true
                mesh.material.specularColor = new BABYLON.Color3(0, 0, 0);
            }
            if (mesh.name === "Floor") {
                console.log("Floor found")
            }
        })


        var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
        meshes.forEach(mesh => {
            shadowGenerator.getShadowMap().renderList.push(mesh);
        })
        const emissiveMat = scene.getMaterialByName("emissive");
        console.log(emissiveMat)
        emissiveMat.albedoColor = new BABYLON.Color3(1, 1, 1)
        emissiveMat.ambientColor = new BABYLON.Color3(1, 1, 1)

        // var gl = new BABYLON.GlowLayer("glow", scene);
        // gl.intensity = 0.25;
        // gl.customEmissiveColorSelector = function (mesh, subMesh, material, result) {
        //     if (material.name === "emissive") {
        //         result.set(1, 0, 1, 1);
        //     } else {
        //         // result.set(0, 0, 0, 0);
        //     }
        // }
    });

}

const rotateCamera = (camera, deltaT) => {
    camera.alpha = (camera.alpha % (2 * Math.PI)) + (0.0001) * deltaT;
}
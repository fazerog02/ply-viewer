window.onload = () => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(50, 50, 50);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);

  scene.add(new THREE.AmbientLight(0x222222));

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(20, 20, 0);
  scene.add(light);

  scene.add(new THREE.AxesHelper(20));

  const ply_loader = new THREE.PLYLoader();
  ply_loader.load("./media/j_building.ply", (geometry) => {
    console.log("loaded", geometry);

    const material = new THREE.PointsMaterial({
      size: 15,
      vertexColors: true,
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);
  });

  const animate = () => {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  };
  animate();
};

// Simple three.js example

// var mesh, renderer, scene, camera, controls;

// init();
// animate();

// function init() {
//   // renderer
//   renderer = new THREE.WebGLRenderer();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   // scene
//   scene = new THREE.Scene();

//   // camera
//   camera = new THREE.PerspectiveCamera(
//     45,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );
//   camera.position.set(50, 50, 50);

//   // controls
//   controls = new THREE.OrbitControls(camera, renderer.domElement);

//   // ambient
//   scene.add(new THREE.AmbientLight(0x222222));

//   // light
//   var light = new THREE.DirectionalLight(0xffffff, 1);
//   light.position.set(20, 20, 0);
//   scene.add(light);

//   // axes
//   scene.add(new THREE.AxesHelper(20));

//   // Geometry
//   var loader = new THREE.PLYLoader();
//   loader.load("./media/j_building.ply", viewGeometry);
// }

// function viewGeometry(geometry) {
//   const material = new THREE.MeshPhongMaterial({
//     color: 0xffffff,
//     flatShading: true,
//   });
//   const mesh = new THREE.Mesh(geometry, material);
//   mesh.scale.set(0.05, 0.05, 0.05);
//   mesh.rotation.x = -Math.PI * 0.5;
//   scene.add(mesh);
// }

// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }

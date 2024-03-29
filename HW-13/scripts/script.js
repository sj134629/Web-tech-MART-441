var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var cube, cube2, cube3;

var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);
var game1 = createBox();


function createBox() {

  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: 0x3440
  });
  cube = new THREE.Mesh(geometry, material);
  cube.position.set(50, 0, 0);
  scene.add(cube);
  cube.scale.x = 15;
  cube.scale.y = 15;
  cube.scale.z = 15;


  animate();
}


function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  createBox2();
  renderer.render(scene, camera);

}



function createBox2() {

  var geometry = new THREE.ConeGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: 0x9234ff
  });
  cube2 = new THREE.Mesh(geometry, material);
  cube2.position.set(2, 0);
  cube.add(cube2);
  cube2.scale.x = .5;
  cube2.scale.y = .5;
  cube2.scale.z = .5;

  animate2();
}


function animate2() {
  requestAnimationFrame(animate2);
  cube2.rotation.x += 0.5;
  cube2.rotation.y += 0.5;


}

function createBox3() {

  var geometry = new THREE.ConeGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: 0xafffaa
  });
  cube3 = new THREE.Mesh(geometry, material);
  cube3.position.set(4, 0);
  cube.add(cube3);
  cube3.scale.x = .7;
  cube3.scale.y = .7;
  cube3.scale.z = .1;

  animate3();
}


function animate3() {
  requestAnimationFrame(animate3);
  cube3.rotation.x += 0.1;
  cube3.rotation.y += 0.1;


}




function getScene() {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0xafff);
  return scene;
}



function getCamera() {
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(0, 100, -10);
  return camera;
}

/**
 * @param {obj} scene: the current scene object
 **/

function getLight(scene) {
  var light = new THREE.PointLight(0xffaaaf, 1, 0);
  light.position.set(20, 50, 20);
  scene.add(light);

  var ambientLight = new THREE.AmbientLight(0x100aaa);
  scene.add(ambientLight);
  return light;
}





function getRenderer() {

  var renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
  return renderer;
}

/**

 * @param {obj} camera: the three.js camera for the scene
 * @param {obj} renderer: the three.js renderer for the scene
 **/

function getControls(camera, renderer) {
  var controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.zoomSpeed = 0.4;
  controls.panSpeed = 0.4;
  return controls;
}



function loadModel() {
  var loader = new THREE.OBJLoader();
  loader.load('./models/Cerberus.obj', function (object) {
    object.rotation.z = Math.PI;
    object.rotation.x = Math.PI;
    object.rotation.y = Math.PI;

    scene.add(object);
animate();
animate2();
animate3();
  });
}

function loadModel2() {
  var loader = new THREE.OBJLoader();
  loader.load('./models/emerald.obj', function (object) {
    object.rotation.z = Math.PI;
    object.rotation.x = Math.PI;


    scene.add(object);
animate();
animate2();
animate3();
  });
}

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  controls.update();

};


createBox3();
loadModel();
loadModel2();
render();

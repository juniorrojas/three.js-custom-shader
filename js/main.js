const width = 400;
const height = 300;

const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbbbbbb);
camera.position.z = 300;

renderer.setSize(width, height);
const canvas = renderer.domElement;
canvas.style.border = "1px solid black";
document.body.appendChild(canvas);

const material = new THREE.ShaderMaterial({
  vertexShader: document.getElementById("vertexshader").text,
  fragmentShader: document.getElementById("fragmentshader").text
});

const radius = 50;
const widthSegments = 8;
const heightSegments = 5;
const geometry = new THREE.SphereGeometry(
  radius, widthSegments, heightSegments
);

const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);
renderer.render(scene, camera);
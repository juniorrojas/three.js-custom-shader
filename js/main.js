const vertexShaderSource = " \
  varying vec3 vNormal; \
  void main() { \
    vNormal = normal; \
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); \
  }";

const fragmentShaderSource = " \
  varying vec3 vNormal; \
  void main() { \
    vec3 light = vec3(3.0, 3.2, 5.0); \
    light = normalize(light); \
    float intensity = max(0.0, dot(vNormal, light)); \
    gl_FragColor = vec4(intensity, intensity, intensity, 1.0); \
  }";

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
  vertexShader: vertexShaderSource,
  fragmentShader: fragmentShaderSource
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
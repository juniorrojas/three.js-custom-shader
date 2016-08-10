var width = 400;
var height = 300;

var renderer = new THREE.WebGLRenderer();
var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
var scene = new THREE.Scene();
camera.position.z = 300;

renderer.setSize(width, height);
var canvas = renderer.domElement;
canvas.style.border = "1px solid black";
document.body.appendChild(canvas);

var material = new THREE.ShaderMaterial({
	vertexShader: document.getElementById("vertexshader").text,
	fragmentShader: document.getElementById("fragmentshader").text
});

var radius = 50;
var widthSegments = 8;
var heightSegments = 5;
var geometry = new THREE.SphereGeometry(
	radius, widthSegments, heightSegments
);

var sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);
renderer.render(scene, camera);
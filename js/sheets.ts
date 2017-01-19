/// <reference path="../typings.d.ts" />


function init() {
    var div = document.getElementById('scenediv');
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(div.clientWidth, div.clientHeight);
    div.appendChild(renderer.domElement);
}

function loadSprites() {
    var promise = new Promise((resolve, reject) => {
        var sprites = $
        sprites.forEach((sprite)=>{

        }).then(() => {
            resolve();
        })
    })
    return promise;
}
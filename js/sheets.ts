/// <reference path="../typings/index.d.ts" />

class spriteJson {
    name: string;
    imgurl: string;
}

function init() {
    var div = document.getElementById('scenediv');
    var scene = new THREE.Scene();
    var camera = new THREE.OrthographicCamera(div.clientWidth/2, div.clientWidth/2, div.clientHeight/2, div.clientHeight/2, 1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(div.clientWidth, div.clientHeight);
    div.appendChild(renderer.domElement);
}

var sprites: {[name: string]: Object} = { };

function loadSprites() {
    var promise = new Promise((resolve, reject) => {
        $.get('js/sprites.json')
        .then((spriteJson) => {
            var spriteMap;
            var spriteMat;
            spriteJson.forEach((sprite: spriteJson)=>{
                spriteMap = new THREE.TextureLoader().load(sprite.imgurl);
                spriteMat = new THREE.SpriteMaterial();

                sprites[sprite.name] = new THREE.Sprite();
            })
            .then(() => {
                resolve();
            });
        });
    });
    return promise;
}
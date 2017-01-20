/// <reference path="../typings/index.d.ts" />
// all caps why?
var Three = THREE;

class SpriteJson {
    name: string;
    imgurl: string;
}

function init() {
    var scene = new Three.Scene();

    var camera = new Three.PerspectiveCamera(
        90,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );

    scene.add(camera);

    camera.position.set(0,0,100);
    camera.lookAt(new Three.Vector3(0, 0, 0));

    var geometry = new Three.BoxGeometry(10, 10, 10);
    var material = new Three.MeshBasicMaterial();
    var mesh = new Three.Mesh(geometry, material);

    mesh.position.set(0,0,0);

    scene.add(mesh);


    var renderer = new Three.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.render(scene, camera);

    document.body.appendChild(renderer.domElement);
}

var sprites: {[name: string]: Object} = { };

function loadSprites() {
    var promise = new Promise((resolve, reject) => {
        $.get('js/sprites.json')
        .then((spriteJson) => {
            var spriteMap;
            var spriteMat;
            spriteJson.forEach((sprite: SpriteJson)=>{
                spriteMap = new Three.TextureLoader().load(sprite.imgurl);
                spriteMat = new Three.SpriteMaterial();

                sprites[sprite.name] = new Three.Sprite();
            })
            .then(() => {
                resolve();
            });
        });
    });
    return promise;
}

init();
//loadSprites();
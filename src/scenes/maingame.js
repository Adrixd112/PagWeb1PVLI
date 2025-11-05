import Bat from '../enemies/bat.js';
/**
 * Escena principal de juego.
 * @extends Phaser.Scene
 */
export default class Animation extends Phaser.Scene {

    constructor() {
        super({ key: 'maingame' });
    }

    init() {

    }

    /**
     * Carga de recursos
     */
    preload() {
        this.load.image('castle', 'assets/castle.gif');
        this.load.spritesheet('bat', 'assets/batIdle.png', { frameWidth: 32, frameHeight: 32 });



    }

    /**
    * Creación de los elementos de la escena principal de juego
    */
    create() {
        
        this.anims.create({
            key: 'bat_idle',
            frames: this.anims.generateFrameNumbers('bat', { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        });

        console.log('Anim keys:', this.anims.anims.entries)

        this.add.image(0, 0, 'castle').setOrigin(0, 0);

        // this es la escena
        // vamos a posicionarlo en el centro del canvas con this.sys.game.canvas.width*0.5, this.sys.game.canvas.height*0.5
        // nuestro enemigo va a tener 20 de vida y 1 de defensa
        // además vamos a pintarlo con un spritesheet que tendremos que haber cargado antes en el método preload y cuyo id será 'bat'. Lo primero que pintaremos es el primer frame (frame 0)
        new Bat(this, this.sys.game.canvas.width * 0.7, this.sys.game.canvas.height * 0.5);
    }

    update(time, dt) {

    }
}
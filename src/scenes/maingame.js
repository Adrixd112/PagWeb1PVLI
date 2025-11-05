
import Bat from '../enemies/bat.js';
import Slime from '../enemies/slime.js';
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
        this.load.spritesheet('slime', 'assets/greenSlime.png', { frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('batDeath', 'assets/batDeath.png', { frameWidth: 32, frameHeight: 32 });

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
        this.anims.create({
            key: 'slime_idle',
            frames: this.anims.generateFrameNumbers('slime', { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'bat_death',
            frames: this.anims.generateFrameNumbers('batDeath', { start: 0, end: 3 }),
            frameRate: 5,
            repeat: 0
        });
        this.anims.create({
            key: 'slime_death',
            frames: this.anims.generateFrameNumbers('slime', { start: 34, end: 39 }),
            frameRate: 5,
            repeat: 0
        });
        console.log('Anim keys:', this.anims.anims.entries)

        this.add.image(0, 0, 'castle').setOrigin(0, 0);

        // this es la escena
        // vamos a posicionarlo en el centro del canvas con this.sys.game.canvas.width*0.5, this.sys.game.canvas.height*0.5
        // nuestro enemigo va a tener 20 de vida y 1 de defensa
        // además vamos a pintarlo con un spritesheet que tendremos que haber cargado antes en el método preload y cuyo id será 'bat'. Lo primero que pintaremos es el primer frame (frame 0)
        this.bat = new Bat(this, this.sys.game.canvas.width * 0.7, this.sys.game.canvas.height * 0.5);
        
        
        

        this.slime = new Slime(this, this.sys.game.canvas.width * 0.5, this.sys.game.canvas.height * 0.5)
        
        
    }

    update(time, dt) {

    }
}
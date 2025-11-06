import LifeBar from "../lifebar.js";


export default class Enemy extends Phaser.GameObjects.Container {
    /**
     * Constructor de Enemigo
     * @param {Scene} scene - escena en la que aparece
     * @param {number} x - coordenada x
     * @param {number} y - coordenada y
     * @param {number} y - coordenada y
     */
    constructor(scene, x, y, life, defense, texture, frame) {
        super(scene, x, y); //En la doc de Phaser (https://newdocs.phaser.io/docs/3.86.0/Phaser.GameObjects.Sprite) veremos que
        /* el contructor de Sprite recibe 5 parámetros, siendo el último opcional (en la documentación se indica con[])
        el contructor de prite recibe: 
        
        scene - Phaser.Scene - The Scene to which this Game Object belongs. A Game Object can only belong to one Scene at a time.
        x - number - The horizontal position of this Game Object in the world.
        y - number - The vertical position of this Game Object in the world.
        texture - string | Phaser.Textures.Texture - The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager.
        frame - string | number     <optional>  - An optional frame from the Texture this Game Object is rendering with.
        */

        this.life = life; //La vida total que tendrá el enemigo.
        this.defense = defense; //La defensa que tendrá el enemigo, reducirá el daño de cada ataque.

        /**
         * @type {Phaser.GameObjects.sprite}
         */
        this.sprite = new Phaser.GameObjects.Sprite(scene, 0, 0, texture, frame)

        this.lifeBar = new LifeBar(this.scene, 0, -30, 100, 20, this.life, 2)

        

        //Nos añadimos a la escena para ser mostrados.


        this.scene.add.existing(this.lifeBar)

        this.scene.add.existing(this)
        this.add(this.sprite)
        this.add(this.lifeBar)

        this.sprite.setInteractive()


        this.scene.physics.add.existing(this);

        this.body.setSize(16, 16)

        console.log(this)
    }

    /**
     * Bucle principal del personaje, actualizamos su posición y ejecutamos acciones según el Input
     * @param {number} t - Tiempo total
     * @param {number} dt - Tiempo entre frames
     */
    preUpdate(t, dt) {
        // Es muy imporante llamar al preUpdate del padre (Sprite), sino no se ejecutará la animación

    }

    /**
     * Método al que se llamará cuando muera el enemigo
     */
    die() {

    }

    /**
    * Método llamado para golpear al enemigo. 
    * @param {number} damage - daño recibido, al que se aplicará una reducción por la defensa que tengamos.
    */
    hit(damage) {

        if (this.life > 0) {
            this.life -= (damage - this.defense);
            if (this.life <= 0)
            {
                this.life = 0;
                this.die();
            }

            console.log(this);
            this.lifeBar.targetValue = this.life;
            this.sprite.setTint(0xffff0000)
            this.scene.time.addEvent({
                delay: 500,
                callback: () => { this.sprite.setTint(0xffffffff) }  //después de 0.5 segundos modificamos a un tinte blanco que dejará la imagen igual
            })
        }
    }

    isAlive() {return this.life!=0 }
}
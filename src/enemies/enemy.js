export default class Enemy extends Phaser.GameObjects.Sprite {
    /**
     * Constructor de Enemigo
     * @param {Scene} scene - escena en la que aparece
     * @param {number} x - coordenada x
     * @param {number} y - coordenada y
     * @param {number} y - coordenada y
     */
    constructor(scene, x, y, life, defense, texture, frame) {
        super(scene, x, y, texture, frame); //En la doc de Phaser (https://newdocs.phaser.io/docs/3.86.0/Phaser.GameObjects.Sprite) veremos que
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

        this.scene.add.existing(this); //Nos añadimos a la escena para ser mostrados.
    }

    /**
     * Bucle principal del personaje, actualizamos su posición y ejecutamos acciones según el Input
     * @param {number} t - Tiempo total
     * @param {number} dt - Tiempo entre frames
     */
    preUpdate(t, dt) {
        // Es muy imporante llamar al preUpdate del padre (Sprite), sino no se ejecutará la animación
        super.preUpdate(t, dt); 
    }

    /**
     * Método al que se llamará cuando muera el enemigo
     */
    die(){
        
    }

    /**
    * Método llamado para golpear al enemigo. 
    * @param {number} damage - daño recibido, al que se aplicará una reducción por la defensa que tengamos.
    */
    hit(damage){
        this.life -= (damage - this.defense);
        console.log(this.life);
    }
}
import Enemy from "./enemy.js";

export default class Slime extends Enemy {
    constructor(scene, x, y) {
        super(scene, x, y, 20, 1, 'slime', 0); //Todos nuestros murciélagos tendrán 20 de vida y 1 de defensa. Estamos llamando al constructor de Enemy, que a su vez llamará al de Sprite de Phaser
        this.sprite.scale = 2
        this.sprite.on("pointerdown", function () { this.hit(12); }, this)
        this.sprite.play('slime_idle');
    }

    preUpdate(t,dt) {
        super.preUpdate(t, dt);
        //Aquí podríamos dar un movimiento especial a nuestro murciélago
    }

    die() {
        super.die();
        this.sprite.play('slime_death')
        //Aquí podríamos dar una muerte diferente a la de un enemigo común, lanzando alguna animación especial o explotando y haciendo daño a en emigos adyacentes....
    }
}

import Enemy from "./enemy.js";

export default class Bat extends Enemy {
    constructor(scene, x, y) {
        super(scene, x, y, 20, 1, 'bat', 0); //Todos nuestros murciélagos tendrán 20 de vida y 1 de defensa. Estamos llamando al constructor de Enemy, que a su vez llamará al de Sprite de Phaser
        this.sprite.scale = 2.5
        this.sprite.on("pointerdown", function () { this.hit(10); }, this)
        this.sprite.play('bat_idle');
        this.body.setAllowGravity(false);
    }

    preUpdate(t,dt) {
        super.preUpdate(t,dt);
        //Aquí podríamos dar un movimiento especial a nuestro murciélago
    }

    die() {
        super.die();
        this.sprite.play('bat_death')
        this.body.setAllowGravity(true);
        //Aquí podríamos dar una muerte diferente a la de un enemigo común, lanzando alguna animación especial o explotando y haciendo daño a en emigos adyacentes....
    }
}
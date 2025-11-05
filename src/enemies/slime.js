import Enemy from "./enemy.js";

export default class Bat extends Enemy {
    constructor(scene, x, y) {
        super(scene, x, y, 20, 1, 'bat', 0); //Todos nuestros murciélagos tendrán 20 de vida y 1 de defensa. Estamos llamando al constructor de Enemy, que a su vez llamará al de Sprite de Phaser
        this.play('bat_idle');
    }

    preUpdate() {
        super.preUpdate();
        //Aquí podríamos dar un movimiento especial a nuestro murciélago
    }

    die() {
        super.die();
        //Aquí podríamos dar una muerte diferente a la de un enemigo común, lanzando alguna animación especial o explotando y haciendo daño a en emigos adyacentes....
    }
}
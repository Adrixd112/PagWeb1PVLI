import Enemy from "./enemy.js";

export default class Bat extends Enemy {
    constructor(scene, x, y) {
        super(scene, x, y, 20, 1, 'bat', 0); //Todos nuestros murciélagos tendrán 20 de vida y 1 de defensa. Estamos llamando al constructor de Enemy, que a su vez llamará al de Sprite de Phaser
        scene.sys.updateList.add(this);

        console.log('Texture bat:', this.texture.exists('bat'));
        console.log('Frames for bat:', Object.keys(this.texture.get('bat').frames).length);
        console.log('Frame names (sample):', Object.keys(this.texture.get('bat').frames).slice(0, 10));

        // 2) ¿Existe la animación bat_idle?
        console.log('Anim bat_idle:', this.anims.get('bat_idle'));

        // 3) Intenta crear un sprite "de prueba" y reproducir la animación ahí
        let test = this.add.sprite(100, 100, 'bat').setScale(2);
        const played = test.play('bat_idle');
        console.log('test.play returned:', played);
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
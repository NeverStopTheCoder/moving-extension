
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/



/**
 * Custom blocks
 */
//% weight=75 color=#48A860 icon=""
//%block="Moving"
namespace moving {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% mySprite.shadow=variables_get
    //% mySprite.defl=mySprite
    //% block="Move $mySprite Left and right With Speed $n and wait time $t"
    //% t.shadow=timePicker
    //%group="Horizontal"
    export function move(mySprite: Sprite,n: number,t: number): void {
        forever(function () {
            mySprite.vx = -n
            pause(t)
            mySprite.vx = n
            pause(t)
        })

    }

    /**
   * TODO: describe your function here
   * @param n describe parameter here, eg: 5
   * @param s describe parameter here, eg: "Hello"
   * @param e describe parameter here
   */
    //% mySprite.shadow=variables_get
    //% mySprite.defl=mySprite
    //% block="Move $mySprite Up and down With Speed $n and wait time $t"
    //% t.shadow=timePicker
    //%group="Vertical"
    export function move2(mySprite: Sprite, n: number, t: number): void {
        forever(function () {
            mySprite.vy = -n
            pause(t)
            mySprite.vy = n
            pause(t)
        })

    }
}

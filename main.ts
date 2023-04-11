sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    banana.setPosition(randint(10, 160), randint(10, 120))
    info.startCountdown(10)
})
let banana: Sprite = null
scene.setBackgroundColor(5)
let mySprite = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f d d d d d d e f . . . . 
    . . f d f f d d f f d f f . . . 
    . c d d d e e d d d d e d f . . 
    . c d c d d d d c d d e f f . . 
    . c d d c c c c d d d e f f f f 
    . . c d d d d d d d e f f b d f 
    . . . c d d d d e e f f f d d f 
    . . . . f f f e e f e e e f f f 
    . . . . f e e e e e e e f f f . 
    . . . f e e e e e e f f f e f . 
    . . f f e e e e f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f f f f d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
banana = sprites.create(img`
    . . . . . . f 5 5 f . . . . . . 
    . . . . . . . f 5 f f . . . . . 
    . . . . . . . f f f f . . . . . 
    . . . . . . . f 5 5 f . . . . . 
    . . . . . . f f f 5 f . . . . . 
    . . . . . f f 5 f 5 f . . . . . 
    . . . . f f 5 f 7 f f . . . . . 
    . . . . f 5 f 5 5 f . . . . . . 
    . . f f 5 f 5 7 f f . . . . . . 
    . f 5 5 5 f 7 f f . . . . . . . 
    f 5 5 5 f 7 f f . . . . . . . . 
    f 5 5 f 5 7 f . . . . . . . . . 
    f f f 7 7 f f . . . . . . . . . 
    . f f f f f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)

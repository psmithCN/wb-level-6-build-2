controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . 8 . . . . . . 
        . . . . . . . . 8 9 . . . . . . 
        . . . . . . . . 6 9 6 . . . . . 
        . . . . . . . . 6 1 6 . . . . . 
        . . . . . . . . 8 1 6 . . . . . 
        . . . . . . . . 8 1 8 . . . . . 
        . . . . . . . . 8 9 8 . . . . . 
        . . . . . . . . 8 9 8 . . . . . 
        . . . . . . . . 8 1 8 . . . . . 
        . . . . . . . . 8 9 8 . . . . . 
        . . . . . . . . 8 9 8 . . . . . 
        . . . . . . . . . 6 8 . . . . . 
        . . . . . . . . . 9 . . . . . . 
        . . . . . . . . . 6 . . . . . . 
        . . . . . . . . . 6 . . . . . . 
        . . . . . . . . . 8 . . . . . . 
        `, spaceship, 0, -50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 500)
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.buzzer.play()
    info.changeLifeBy(-1)
})
let alien: Sprite = null
let projectile: Sprite = null
let spaceship: Sprite = null
scene.setBackgroundColor(15)
effects.starField.startScreenEffect()
spaceship = sprites.create(img`
    . . . . . . . . a . . . . . . . 
    . . . . . . . a b c . . . . . . 
    . . . . . . 2 a b c 2 . . . . . 
    . . . . . c f a b a f c . . . . 
    . . . . . a a b 9 8 a c . . . . 
    . . . . a a a 9 1 8 a a c . . . 
    . . . . a a a 1 9 6 a a c . . . 
    . . . a a d a 9 9 6 a d a c . . 
    . . . a b d a b 8 8 a d b c . . 
    . . a a 2 2 a b 8 a a 2 2 a c . 
    . a a a a a b b b a a a a a a c 
    . d 2 a c c c c c c c c c a 2 e 
    . a a c . 2 4 5 c 5 4 2 . c a c 
    . . c . . . . 4 4 4 . . . . c . 
    . . . . . . . 2 4 2 . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    `, SpriteKind.Player)
spaceship.setPosition(80, 100)
controller.moveSprite(spaceship, 100, 0)
spaceship.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    alien = sprites.create(img`
        . . . . . b b b b b b . . . . . 
        . . . b b c c c c c c b b . . . 
        . . b c c c 1 7 7 c c c c b . . 
        . . b c c 1 7 7 7 7 c c c b . . 
        . b c c c 7 5 1 1 5 7 c c c b . 
        . b 7 c c 7 1 f 1 1 7 c c 7 b . 
        . b c 7 c 7 1 f 1 1 7 c 7 c b . 
        . b c 7 c 7 5 1 1 5 7 c 7 c b . 
        . 8 c c 1 7 7 7 7 7 7 7 c 8 6 a 
        a 6 8 8 8 8 8 8 8 8 8 8 8 6 6 a 
        a 6 6 5 2 6 6 6 6 6 6 5 2 6 6 a 
        a 6 6 6 6 6 6 5 2 6 6 6 6 6 a . 
        . a 6 6 6 6 6 6 6 6 6 6 a a . . 
        7 . 7 7 a a a a a a a a 7 7 . 7 
        . 7 7 7 . . 7 7 7 7 . . 7 7 7 . 
        . . 7 . . . . 7 7 . . . . 7 . . 
        `, SpriteKind.Enemy)
    alien.setPosition(randint(0, 160), 0)
    alien.setVelocity(50, 50)
    alien.setBounceOnWall(true)
})

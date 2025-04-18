namespace SpriteKind {
    export const gladiaterlvl2 = SpriteKind.create()
    export const attack = SpriteKind.create()
    export const Final = SpriteKind.create()
}
namespace StatusBarKind {
    export const finalmapEH = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Final, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar2.value += -1
    }
})
statusbars.onZero(StatusBarKind.finalmapEH, function (status) {
    sprites.destroy(mySprite2, effects.spray, 500)
    pause(500)
    tiles.setTileAt(tiles.getTileLocation(12, 3), sprites.dungeon.stairLarge)
    fights += 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    game.splash("get ready")
    if (fights == 1 || fights == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorDarkDiamond)
        mySprite2 = sprites.create(assets.image`1`, SpriteKind.Enemy)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(16, 3))
        statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        statusbar2.max = 33
        statusbar2.value = 33
        statusbar2.attachToSprite(mySprite2)
    } else if (fights == 3 || fights == 2) {
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorDarkDiamond)
        mySprite2 = sprites.create(assets.image`2`, SpriteKind.Enemy)
        statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        statusbar2.attachToSprite(mySprite2)
        statusbar2.max = 44
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(15, 3))
    } else if (4 == fights || 5 == fights) {
        tiles.setCurrentTilemap(tilemap`level0`)
        mySprite2 = sprites.create(assets.image`3`, SpriteKind.gladiaterlvl2)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorDarkDiamond)
        tiles.placeOnRandomTile(mySprite2, sprites.dungeon.floorDark0)
        statusbar2 = statusbars.create(20, 4, StatusBarKind.finalmapEH)
        statusbar2.attachToSprite(mySprite2)
        statusbar2.max = 50
        statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    } else if (6 == fights) {
        tiles.setCurrentTilemap(tilemap`level0`)
        mySprite2 = sprites.create(assets.image`4`, SpriteKind.Final)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorDarkDiamond)
        tiles.placeOnRandomTile(mySprite2, sprites.dungeon.floorDark0)
        statusbar2 = statusbars.create(20, 4, StatusBarKind.finalmapEH)
        statusbar2.attachToSprite(mySprite2)
        statusbar2.max = 100
        statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    }
})
sprites.onOverlap(SpriteKind.gladiaterlvl2, SpriteKind.Player, function (sprite, otherSprite) {
    pause(150)
    statusbar.value += -2
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(16, 31), sprites.dungeon.floorMixed)
    tiles.setTileAt(tiles.getTileLocation(17, 31), sprites.dungeon.floorMixed)
    tiles.setTileAt(tiles.getTileLocation(18, 31), sprites.dungeon.floorMixed)
    tiles.setTileAt(tiles.getTileLocation(16, 32), sprites.dungeon.floorMixed)
    tiles.setTileAt(tiles.getTileLocation(17, 32), sprites.dungeon.floorMixed)
    tiles.setTileAt(tiles.getTileLocation(18, 32), sprites.dungeon.floorMixed)
    tiles.setTileAt(tiles.getTileLocation(16, 33), sprites.dungeon.purpleOuterSouth1)
    tiles.setTileAt(tiles.getTileLocation(18, 33), sprites.dungeon.purpleOuterSouth1)
    tiles.setWallAt(tiles.getTileLocation(16, 31), false)
    tiles.setWallAt(tiles.getTileLocation(16, 32), false)
    tiles.setWallAt(tiles.getTileLocation(17, 31), false)
    tiles.setWallAt(tiles.getTileLocation(17, 32), false)
    mySprite2.follow(mySprite, 82)
})
sprites.onOverlap(SpriteKind.Final, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -3
    pause(randint(99, 211))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Healertile`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.splash("hp restored")
        statusbar.value = 89
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight5)
        pause(100)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4squid`, function (sprite, location) {
    mySprite2.follow(mySprite, randint(75, 100))
    tiles.setWallAt(tiles.getTileLocation(7, 11), true)
    tiles.setWallAt(tiles.getTileLocation(8, 4), true)
    scene.cameraShake(4, 500)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 10))
    tiles.setTileAt(tiles.getTileLocation(7, 11), assets.tile`myTile4`)
    tiles.setTileAt(tiles.getTileLocation(7, 10), sprites.dungeon.floorLight1)
    tiles.setTileAt(tiles.getTileLocation(8, 4), assets.tile`myTile5`)
    mySprite.sayText("Meow", 100, true)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 5))
})
sprites.onOverlap(SpriteKind.attack, SpriteKind.gladiaterlvl2, function (sprite, otherSprite) {
    atatDsy.setFlag(SpriteFlag.Ghost, true)
    statusbar2.value += -2
    atatDsy.setFlag(SpriteFlag.Invisible, true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`WL`,
    330,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mySprite)
    mySprite.setImage(assets.image`JodimR`)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mySprite)
    mySprite.setImage(assets.image`JodimL`)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(mySprite2, effects.spray, 500)
    pause(500)
    fights += 1
    tiles.setTileAt(tiles.getTileLocation(3, 15), sprites.dungeon.stairLarge)
    tiles.setTileAt(tiles.getTileLocation(4, 15), sprites.dungeon.stairLarge)
    tiles.setWallAt(tiles.getTileLocation(3, 13), false)
})
info.onScore(100, function () {
    game.setGameOverEffect(true, effects.slash)
    game.setGameOverMessage(true, "You beat everyone!!")
    game.gameOver(true)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    info.changeLifeBy(-1)
    statusbar.value = 100
    sprites.destroy(mySprite2)
    tiles.setCurrentTilemap(tilemap`barracks`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gladiaterlvl2, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar2.value += -1
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`WR`,
    323,
    true
    )
})
sprites.onOverlap(SpriteKind.attack, SpriteKind.Final, function (sprite, otherSprite) {
    atatDsy.setFlag(SpriteFlag.Ghost, true)
    statusbar2.value += -1
    atatDsy.setFlag(SpriteFlag.Invisible, true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    pause(100)
    statusbar.value += -1
})
controller.combos.attachCombo("BB+A", function () {
    tiles.placeOnTile(atatDsy, mySprite.tilemapLocation())
    atatDsy.setFlag(SpriteFlag.Invisible, false)
    atatDsy.setFlag(SpriteFlag.Ghost, false)
    atatDsy.setFlag(SpriteFlag.GhostThroughWalls, true)
})
info.onLifeZero(function () {
    music.setVolume(255)
    game.setDialogCursor(assets.image`sad`)
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverMessage(false, "You failed...")
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
    game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), true)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`barracks`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 7))
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.attack, function (sprite, otherSprite) {
    atatDsy.setFlag(SpriteFlag.Ghost, true)
    statusbar2.value += -2
    atatDsy.setFlag(SpriteFlag.Invisible, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar2.value += -1
        pause(21)
    }
})
let mySprite2: Sprite = null
let statusbar2: StatusBarSprite = null
let atatDsy: Sprite = null
let statusbar: StatusBarSprite = null
let fights = 0
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`holey hole`)
game.splash("welcome to the arena")
pause(150)
game.splash("in this game ", "you are trying to advance and complete all 7 levels")
game.splash("and become the champion of the arena!")
pause(1000)
tiles.setCurrentTilemap(tilemap`barracks`)
mySprite = sprites.create(assets.image`JodimL`, SpriteKind.Player)
controller.moveSprite(mySprite, 102, 102)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight0)
scene.cameraFollowSprite(mySprite)
fights = 0
statusbar = statusbars.create(30, 3, StatusBarKind.Health)
statusbar.max = 89
atatDsy = sprites.create(assets.image`attack`, SpriteKind.attack)
statusbar.attachToSprite(mySprite)
tiles.placeOnTile(atatDsy, mySprite.tilemapLocation())
info.setLife(3)
atatDsy.setScale(1, ScaleAnchor.Middle)
atatDsy.follow(mySprite, 1000)
atatDsy.setFlag(SpriteFlag.Invisible, true)
atatDsy.setFlag(SpriteFlag.Ghost, true)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
game.onUpdate(function () {
    if (7 == fights) {
        tiles.setCurrentTilemap(tilemap`level4`)
        scene.setBackgroundImage(assets.image`end`)
        game.splash("Game beat in", game.runtime())
        game.splash("Miliseconds")
        info.setScore(100)
    }
})

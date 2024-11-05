scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    game.splash("get ready")
    if (fights == 0) {
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorDarkDiamond)
        mySprite2 = sprites.create(img`
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff......ccc.
            .ffefbf44fbfeff....cddc.
            .ffefbf44fbfeff...cddc..
            .fee4dddddd4eef.ccddc...
            fdfeeddddd4eeffecddc....
            fbffee4444ee4fddccc.....
            fbf4f222222f1edde.......
            fcf.f222222f44ee........
            .ff.f445544f............
            ....ffffffff............
            .....ff..ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(16, 3))
        statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        statusbar2.max = 20
        statusbar2.value = 20
        statusbar2.attachToSprite(mySprite2)
    } else if (fights == 1) {
    	
    }
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`Healertile`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.splash("hp restored")
        statusbar.value = 100
        mySprite.y += 60
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(mySprite2, effects.spray, 500)
    tiles.setCurrentTilemap(tilemap`barracks`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight0)
    fights += 1
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    info.changeLifeBy(-1)
    statusbar.value = 100
    sprites.destroy(mySprite2)
    tiles.setCurrentTilemap(tilemap`barracks`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    pause(100)
    statusbar.value += -1
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar2.value += -2
    }
})
let statusbar2: StatusBarSprite = null
let mySprite2: Sprite = null
let statusbar: StatusBarSprite = null
let fights = 0
let mySprite: Sprite = null
game.splash("welcome to the arena")
game.splash("in this game ", "you are trying to advance and complete all 9 levels")
game.splash("and become the champion of the arena")
tiles.setCurrentTilemap(tilemap`barracks`)
mySprite = sprites.create(assets.image`Jodim`, SpriteKind.Player)
controller.moveSprite(mySprite, 102, 102)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight0)
scene.cameraFollowSprite(mySprite)
fights = 0
statusbar = statusbars.create(30, 3, StatusBarKind.Health)
statusbar.max = 100
statusbar.attachToSprite(mySprite)
info.setLife(3)

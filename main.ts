namespace SpriteKind {
    export const gladiaterlvl2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    game.splash("get ready")
    if (fights == 1 || fights == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
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
    } else if (fights == 3 || fights == 2) {
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorDarkDiamond)
        mySprite2 = sprites.create(img`
            ........................
            ........................
            .......ff...............
            .....ff22ff.............
            ...fff2222fff...........
            ..fff222222fff..........
            ..fff222222fff..........
            ..feeeeeeeeeeff.........
            .ffe22222222eff.........
            .fffffeeeefffff.........
            fdfefbf44fbfeff.........
            fbfe41fddf14ef..........
            fbffe4dddd4efe..........
            fcfef22222f4e...........
            .ff4f44554f4e...........
            ....ffffffdde...........
            .....ffffedde...........
            ..........ee............
            .........ccc............
            ........cc1cc...........
            .........c1c............
            .........c1c............
            .........c1c............
            .........c1c............
            `, SpriteKind.Enemy)
        statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        statusbar2.attachToSprite(mySprite2)
        statusbar2.max = 29
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(15, 3))
    } else if (4 == fights || (6 == fights || 5 == fights)) {
        tiles.setCurrentTilemap(tilemap`level0`)
        mySprite2 = sprites.create(img`
            ..............ccccccccc........
            ............cc555555555cc......
            ...........c5555555555555c.....
            ..........c55555555555555dc....
            .........c555555555555b5bdc....
            .........555bc1555555555bdcccc.
            ........c555ccc55555555bbdccddc
            ........c555bcb5555555ccddcdddc
            .......c555555555551ccccddbdddc
            .......c555555b555c1cccbddbbdbc
            .......c5555555bbc33333ddddbcc.
            .......c555555555bc333555ddbc..
            .......c5555555555555555555c...
            .......cd555555555555cccc555c..
            .......cd55555555555c555c555c..
            .......cdd555555555b5555b555c..
            .......cddd55555ddbb555bb555c..
            .......cdddd55555555555b5555c..
            .......cddddd5555555ddb5555dc..
            c......cdddddd555555555555dcc..
            cc...ccddddddd555555555555dc...
            cdccccdddddd555555d55555ddcc...
            cdddddddddbd5555555ddddddccccc.
            ccdddddddbb55555555bddddccbddc.
            .ccddddddbd55555555bdddccdddc..
            ..cccddddbd5555555cddcccddbc...
            ....ccccccd555555bcccc.cccc....
            .........cc555555bc............
            .........cc55555555c...........
            ..........cccccccccc...........
            `, SpriteKind.gladiaterlvl2)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorDarkDiamond)
        tiles.placeOnRandomTile(mySprite2, sprites.dungeon.floorDark0)
        statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        statusbar2.attachToSprite(mySprite2)
        statusbar2.max = 42
        mySprite2.follow(mySprite)
    }
})
sprites.onOverlap(SpriteKind.gladiaterlvl2, SpriteKind.Player, function (sprite, otherSprite) {
    pause(100)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`Healertile`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.splash("hp restored")
        statusbar.value = 100
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight5)
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(mySprite2, effects.spray, 500)
    pause(500)
    fights += 1
    tiles.setTileAt(tiles.getTileLocation(3, 15), sprites.dungeon.stairLarge)
    tiles.setTileAt(tiles.getTileLocation(4, 15), sprites.dungeon.stairLarge)
    tiles.setWallAt(tiles.getTileLocation(3, 13), false)
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
        statusbar2.value += -2
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    pause(100)
    statusbar.value += -1
})
controller.combos.attachCombo("BB+A", function () {
	
})
info.onLifeZero(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`barracks`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 7))
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

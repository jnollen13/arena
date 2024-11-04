scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    if (fights == 0) {
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorDarkDiamond)
    }
})
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

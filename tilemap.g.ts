// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "barracks":
            case "level2":return tiles.createTilemap(hex`100010000201010103080b0b0402010101010103080e0e0e04080b0b04080e0e0e0e0e04080e0e0e04080b0b04080e0e0e0e0e04080e0e0e04080b0b04080e0e0e0e0e04080e0e0e04080b0b04080e0e0e0e0e04080e0e0e04070c0c05080e0e0e0e0e04080e0e0e09010d0d010a0e0e0e0e0e04080e0e0e0e0e0e0e0e0e0e0e0e0e0e04080e0e0e0e0e0e0e0e0e0e0e0e0e0e04080e0e0e0e0e0e0e0e0e0e0e0e0e0e04080e0e0e0e0e0e0e0e0e0e0e0e0e0e04080e0e0e0e0e0e0e0e0e0e0e0e0e0e04080e0e0e0e0e0e0e0e0e0e0e0e0e0e04080e0e0e0e0e0e0e0e0e0e0e0e0e0e04080e0e0e0e0e0e0e0e0e0e0e0e0e0e0407060606060606060606060606060605`, img`
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 
2 . . . 2 2 . . 2 2 . . . . . 2 
2 . . . 2 2 . . 2 2 . . . . . 2 
2 . . . 2 2 . . 2 2 . . . . . 2 
2 . . . 2 2 . . 2 2 . . . . . 2 
2 . . . 2 2 . . 2 2 . . . . . 2 
2 . . . 2 2 . . 2 2 . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.stairNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorOpenNorth,sprites.dungeon.floorLight0], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`2400240000000a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a000000000a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a00000b0b06040404040404040404040404040404040404040404040404040404040404090c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b050101010101010101110e0101010101010101010101010101110e01010101030c0c0b0b050101010101010101100f0101010101010101010101010101100f01010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b0501010101010101010101010101110e010101010101010101010101010101030c0c0b0b070202020202020e01010101011108070e0101010101010101010101010101030c0c0b0b060404040404040f01010101011009060f0101010101010101010101010101030c0c0b0b0501010101010101010101010101100f010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b05010101010101110e01010101010101010101010101010101010101010101030c0c0b0b05010101010101100f01010101010101010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101110e01010101030c0c0b0b05010101010101010101010101010101010101010101010101100f01010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b05010101010101010101010101010101010101010101010101010101010101030c0c0b0b050101010101010101010101010111120e0101010101010101010101010101030c0c0b0b05010101010101010101010101010313050101010101010101010101010101030c0c0b0b07020202020202020202020202020802070202020202020202020202020202080c0c00000d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d000000000d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0000`, img`
22................................22
22................................22
..22222222222222222222222222222222..
..2..............................2..
..2..............................2..
..2..............................2..
..2..............................2..
..2..............................2..
..2..............................2..
..2..............................2..
..2........22..............22....2..
..2........22..............22....2..
..2..............................2..
..2..............................2..
..2..............................2..
..2.............22...............2..
..22222222.....2222..............2..
..22222222.....2222..............2..
..2.............22...............2..
..2..............................2..
..2..............................2..
..2..............................2..
..2......22......................2..
..2......22......................2..
..2..............................2..
..2........................22....2..
..2........................22....2..
..2..............................2..
..2..............................2..
..2..............................2..
..2..............................2..
..2.............2.2..............2..
..2.............2.2..............2..
..22222222222222222222222222222222..
22................................22
22................................22
`, [myTiles.transparency16,sprites.dungeon.floorMixed,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorthEast,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile5,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.stairLadder,sprites.dungeon.floorDarkDiamond], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

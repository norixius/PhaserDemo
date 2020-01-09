demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){
      game.load.tilemap('field', 'assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
      game.load.image('grassTiles', 'assets/tilemaps/grassTiles.png');
      game.load.image('rockTiles', 'assets/tilemaps/rockTiles.png');
    },
    create: function(){
      game.stage.backgroundColor = '#DDDDDD';
      addChangeStateEventListeners();

      let map = game.add.tilemap('field');
      map.addTilesetImage('grassTiles');
      map.addTilesetImage('rockTiles');

      let grass = map.createLayer('grass');
      let rocks = map.createLayer('rocks');
    },
    update: function(){}
};

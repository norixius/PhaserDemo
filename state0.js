let demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
      game.stage.backgroundColor = '#80ff80';

      game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
    },
    update: function(){}
};

function changeState(i, stateNum){
  console.log(i);
  game.state.start('state' + stateNum);
}

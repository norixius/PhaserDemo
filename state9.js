demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
      game.stage.backgroundColor = '#ff3300';

      addChangeStateEventListeners();
    },
    update: function(){}
};

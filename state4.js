demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
      game.stage.backgroundColor = '#000099';

      addChangeStateEventListeners();
    },
    update: function(){}
};

var pp_preload = {
  preload : function(){
    // var progress = game.add.graphics(0,0);
    // game.load.onFileComplete.add(function(prg){
    //     progress.beginFill(0xFF3300);
    //     progress.drawRect(0,0, prg*4.8,100);
    //     progress.endFill();
    // });
    // game.load.audio('audioFondo', ['../../../packages/pp080916_audioGameOgg.ogg', '../../../packages/pp080916_audioGameMp3-min.mp3']);

    game.load.image('bgPartyRoom1', '../../../packages/images/games/pp080916_fondoPrincipal1.jpg');
    game.load.image('bgPartyRoom2', '../../../packages/images/games/pp080916_fondoPrincipal2.jpg');
    game.load.image('btnNextBack', '../../../packages/images/games/pp080916_btnNextBack.png');
    game.load.image('btnOmitir', '../../../packages/images/games/pp080916_btnOmitir.png');
    game.load.image('btnJugar', '../../../packages/images/games/pp080916_btn_Play.png');
    game.load.image('btnOpcion', '../../../packages/images/games/pp080916_btnOption.png');
    game.load.image('btnPausa', '../../../packages/images/games/pp080916_btnPausa.png');

    game.load.spritesheet('btnScreen', '../../../packages/images/games/pp080916_fullScreen.png', 100, 100);
    game.load.spritesheet('boy', '../../../packages/images/games/pp080916_boy_sprite.png', 250, 350);
    game.load.spritesheet('spritePizza', '../../../packages/images/games/pp080916_pizza1.png', 256, 256);
    game.load.spritesheet('spriteBebida1', '../../../packages/images/games/pp080916_bebida1.png', 256, 256);
    game.load.spritesheet('spritePanque1', '../../../packages/images/games/pp080916_panque1.png', 256, 256);
  },
  create : function(){
    // game.audioGame = this.game.add.audio('audioFondo');
    // game.audioGame.play();
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
    game.state.start('scene1');
  }
};

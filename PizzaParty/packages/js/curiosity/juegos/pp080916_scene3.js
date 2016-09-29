var pp_sc3 = {
  create : function(){
    this.fondo = game.add.tileSprite(0, 0, 900, 515, 'bgPartyRoom2');
    this.historia = this.game.add.text(
      game.width/2,
      200,
      "Ayudanos seleccionando \n" +
      "la porcion de comida que le toca \n" +
      "a cada niño en la fiesta. \n" +
      "¡Comenzemos!",
      {
        font : "5em kiddish",
        fill : "rgba(255, 255, 255, 0.9)",
        align : "center",
        stroke: "#320C3E",
        strokeThickness: 4
      }
    );
    this.historia.anchor.setTo(0.5);
    this.btnJugar = this.add.button(game.width/2, game.height/2+170, 'btnJugar', this.startGame, this);
    this.btnJugar.anchor.setTo(0.5);
    this.btnJugar.scale.setTo(0.75);
    this.btnJugar.input.useHandCursor = true;
    this.btnBack = this.add.button(game.width/2-150, game.height/2+170, 'btnNextBack', this.backSc, this);
    this.btnBack.anchor.setTo(0.5);
    this.btnBack.scale.setTo(-1, 1);
    this.btnBack.input.useHandCursor = true;
  },
  backSc : function(){
    game.state.start('scene2');
  },
  startGame : function(){
    game.state.start('level1');
  }
};

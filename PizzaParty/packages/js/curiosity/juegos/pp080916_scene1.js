var pp_sc1 = {
  create : function(){
    this.fondo = game.add.tileSprite(0, 0, 900, 515, 'bgPartyRoom2');
    this.historia = this.game.add.text(
      game.width/2,
      150,
      "Durante la fiesta de fin de ciclo escolar \n" +
      "se presentaron \n" +
      "unos pequeños problemas \n" +
      "al momento de organizar la comida...",
      {
        font : "4em kiddish",
        fill : "rgba(255, 255, 255, 0.9)",
        align : "center",
        stroke: "#320C3E",
        strokeThickness: 4
      }
    );
    this.historia.anchor.setTo(0.5);
    this.btnOmitir = this.add.button(game.width/2, game.height/2+170, 'btnOmitir', this.startGame, this);
    this.btnOmitir.anchor.setTo(0.5);
    this.btnOmitir.input.useHandCursor = true;
    this.btnNext = this.add.button(game.width/2+180, game.height/2+170, 'btnNextBack', this.nextSc, this);
    this.btnNext.anchor.setTo(0.5);
    this.btnNext.input.useHandCursor = true;
  },
  nextSc : function(){
    game.state.start('scene2');
  },
  startGame : function(){
    game.state.start('level1');
  }
};

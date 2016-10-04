var pp_sc2 = {
  create : function(){
    this.gameBackground = game.add.tileSprite(0, 0, 1024, 768, 'bgPartyRoom2');
    this.story = this.game.add.text(
      game.width/2,
      270,
      "Nos dimos cuenta que \nla comida se debería repartir \npor igual a cada niño",
      {
        font : "6em kiddish",
        fill : "rgba(255, 255, 255, 0.9)",
        align : "center",
        stroke: "#320C3E",
        strokeThickness: 4
      }
    );
    this.story.anchor.setTo(0.5);
    this.btnBack = this.add.button(game.width/2-150, game.height/2+210, 'btnNextBack', this.backSc, this);
    this.btnBack.anchor.setTo(0.5);
    this.btnBack.scale.setTo(-1, 1);
    this.btnBack.input.useHandCursor = true;
    this.btnOmitir = this.add.button(game.width/2, game.height/2+210, 'btnOmitir', pp_sc1.startGame, this);
    this.btnOmitir.anchor.setTo(0.5);
    this.btnOmitir.input.useHandCursor = true;
    this.btnNext = this.add.button(game.width/2+180, game.height/2+210, 'btnNextBack', this.nextSc, this);
    this.btnNext.anchor.setTo(0.5);
    this.btnNext.input.useHandCursor = true;
  },
  backSc : function(){
    game.state.start('scene1');
  },
  nextSc : function(){
    game.state.start('scene3');
  }
};

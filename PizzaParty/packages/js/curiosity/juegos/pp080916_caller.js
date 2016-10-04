var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'game');
game.state.add('preload', pp_preload);
game.state.add('scene1', pp_sc1);
game.state.add('scene2', pp_sc2);
game.state.add('scene3', pp_sc3);
game.state.add('level1', pp_lv1);
game.state.start('preload');

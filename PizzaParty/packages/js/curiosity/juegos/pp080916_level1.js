var $pausa;
var $opciones;
var $opcion;
var $ninios;
var $ninio;
var $comida;
var $tiempoTxt;
var $puntajeText;
var $opcionCorrecta;

var cantidadNinios;
var respuestas;
var subNivel = 1;
var tiempo = 60;
var puntos = 0;
var valorCorrecto = 100;
var valorError = 50;
var correctoContinuo = 0;
var errorContinuo = 0;
var contadorAciertos = 0;
var contadorErrores = 0;
var denOpc;

var pp_lv1 = {

  create : function (){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    // Fondo del escenario
    var $fondo = game.add.tileSprite(0, 0, 1024, 768, 'bgPartyRoom1');

    // Boton de pausa
    $pausa = game.add.button(game.width - 70, 70, 'btnPausa', pp_lv1.juegoPausa);
    $pausa.anchor.setTo(0.5);
    $pausa.scale.setTo(0.8);

    // Etiqueta de temporizador
    $tiempoTxt = game.add.text(20, 20, tiempo + " Segundos", {
      font : "4em kiddish",
      fill : "rgba(0, 120, 128, 1)",
      align : "center",
      stroke: "#fff",
      strokeThickness: 10
    });

    // Etiqueta de puntaje
    $puntajeText = game.add.text(20, game.height - 70, puntos + " Puntos", {
      font : "3em kiddish",
      fill : "rgba(0, 120, 128, 1)",
      align : "rigth",
      stroke: "#fff",
      strokeThickness: 8
    });

    // Creando un grupo para los ninios
    $ninios = game.add.group();
    // Grupo de botones de opciones
    $opciones = game.add.group();

    // FUNCIONES PARA GENERAR EL CONTENIDO INICIAL
    pp_lv1.crearComida();
    pp_lv1.crearNinios();
    pp_lv1.crearOpciones();

    // Descontar el contador cada segundo
    game.time.events.loop(Phaser.Timer.SECOND, pp_lv1.contarTiempo);

  },
  update : function(){

  },
  contarTiempo : function(){
    tiempo--;
    $tiempoTxt.text = tiempo + " Segundos";
  },
  crearComida : function(){
    var index = game.rnd.integerInRange(0, $comidaArray.length - 1)
    var $elemento = game.add.sprite(160, 300, $comidaArray[index]);
    $elemento.anchor.setTo(0.5);
    return $elemento;
  },
  crearNinios : function(){
    cantidadNinios = 0;
    var cantidad = game.rnd.integerInRange(2, 5);
    var posX = 400;
    for (var i = 0; i < cantidad; i++) {
      $ninio = $ninios.create(posX, game.height - 320, 'boy');
      $ninio.anchor.setTo(0.5);
      $ninio.scale.setTo(0.9);
      $ninio.animations.add('stand', [0,1,2,3,4,5,6,7]);
      $ninio.animations.play('stand', 10, true);
      cantidadNinios++;
      posX += 130;
    }
  },
  crearOpciones : function(){
    respuestas = [];
    var posX = 300;
    var posY = game.height - 140;
    var cantOpciones;
    var opcionEspacio;
    var esCorrecta = false;
    var rangoNum, rangoDen, rangoMult;

    switch (subNivel) {
      case 1:
        cantOpciones = 4;
        opcionEspacio = 200;
        rangoNum = [1, 1];
        rangoDen = [2, 9];
        rangoMult = 1;
      break;
      case 2:
        cantOpciones = 4;
        opcionEspacio = 200;
        rangoNum = [1, 2];
        rangoDen = [1, 6];
        rangoMult = 2;
      break;
      case 3:
        cantOpciones = 4;
        opcionEspacio = 200;
        rangoNum = [1, 3];
        rangoDen = [1, 8];
        rangoMult = game.rnd.integerInRange(1, 3);
      break;
      case 4:
        cantOpciones = 4;
        opcionEspacio = 200;
        rangoNum = [1, 6];
        rangoDen = [1, 10];
        rangoMult = game.rnd.integerInRange(1, 4);
      break;
    }
    var indexCorrecta = game.rnd.integerInRange(0, cantOpciones - 1);
    for (var i = 0; i < cantOpciones; i++) {
      if (indexCorrecta == i) { esCorrecta = true; }
      else { esCorrecta = false; }
      var $el = $opciones.create(posX, posY, 'btnOpcion');
      $el.anchor.setTo(0.5);
      $el.scale.setTo(0.9);
      $el.inputEnabled = true;
      $el.events.onInputDown.add(function(evt){ pp_lv1.esOpcionCorrecta(evt) });
      posX += opcionEspacio;
      $el.name = pp_lv1.crearOpcionText(rangoNum, rangoDen, rangoMult, esCorrecta, posX, posY, cantOpciones);
    }
  },
  crearOpcionText : function($num, $den, $mult, $correcta, $x, $y, $opcs){
    var hacerTexto = true;
    var longitud = respuestas.length;
    var multiplo = $mult;
    var valNum;
    var valDen;
    if ($correcta) {
      valNum = multiplo;
      valDen = cantidadNinios * multiplo;
    }
    else {
      valNum = game.rnd.integerInRange($num[0], $num[1]) * multiplo;
      valDen = game.rnd.integerInRange($den[0], $den[1]) * multiplo;
    }

    var opcion = valNum + "/" + valDen;
    if ($correcta) { $opcionCorrecta = opcion; }

    // if (longitud > 0){
    //   for (var i = 0; i < longitud; i++) {
    //     if (respuestas[i] == opcion){
    //       hacerTexto = false;
    //       break;
    //     }
    //   }
    // }

    if (hacerTexto){
      respuestas.push(opcion);
      var txtNumX, txtNumY;
      var txtDenX, txtDenY;
      txtNumX = $x - 235; txtNumY = $y - 73;
      txtDenX = $x - 235; txtDenY = $y + 5;
      var numOpc = game.add.text(txtNumX, txtNumY, valNum, {
        font : "2.5em kiddish",
        fill : "#fff",
        align : "center",
        stroke: "#4663c3",
        strokeThickness: 30
      });

      denOpc = game.add.text(txtDenX, txtDenY, valDen, {
        font : "2.5em kiddish",
        fill : "#fff",
        align : "center",
        stroke: "#4663c3",
        strokeThickness: 30
      });
      return opcion;
    }
    else{
      return pp_lv1.crearOpcionText($num, $den, $mult, $correcta, $x, $y, $opcs);
    }
  },
  esOpcionCorrecta : function(evt){
    if (evt.name == $opcionCorrecta){
      $opciones.callAll('kill');
      $ninios.callAll('kill');
      pp_lv1.crearNinios();
      denOpc.text="m";
      pp_lv1.crearOpciones();
      tiempo += 5;
      puntos += valorCorrecto;
      contadorAciertos++;
      errorContinuo = 0;
      correctoContinuo++;
    }
    else{
      correctoContinuo = 0;
      errorContinuo++;
      contadorErrores++;
      if (puntos > 50) { puntos -= valorError; }
    }

    if (correctoContinuo == 3){
      correctoContinuo = 0;
      if (subNivel < 4) { subNivel++; }
    }

    if (errorContinuo == 2){
      if (subNivel > 1) { subNivel--; }
    }
    $puntajeText.text = puntos + " Puntos";
  },
  makeFullScreen : function(){
    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }
  }

}

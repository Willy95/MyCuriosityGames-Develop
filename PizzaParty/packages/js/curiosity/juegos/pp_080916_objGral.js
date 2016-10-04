// var cantidadNinios;
// var respuestas;
//
// var $funciones = {
//
//   crearComida : function(){
//     var index = game.rnd.integerInRange(0, $comidaArray.length - 1)
//     var $elemento = game.add.sprite(160, 300, $comidaArray[index]);
//     $elemento.anchor.setTo(0.5);
//     return $elemento;
//   },
//   crearNinios : function($grupo){
//     cantidadNinios = 0;
//     var cantidad = game.rnd.integerInRange(2, 5);
//     var posX = 400;
//     for (var i = 0; i < cantidad; i++) {
//       var $el = $grupo.create(posX, game.height - 320, 'boy');
//       $el.anchor.setTo(0.5);
//       $el.scale.setTo(0.9);
//       $el.animations.add('stand', [0,1,2,3,4,5,6,7]);
//       // $el.animations.play('stand', 10, true);
//       cantidadNinios++;
//       posX += 130;
//     }
//   },
//   crearOpciones : function($grupo){
//     respuestas = [];
//     var posX = 300;
//     var posY = game.height - 140;
//     var cantOpciones = 3;
//     var opcionEspacio = 260;
//     var indexCorrecta = game.rnd.integerInRange(0, cantOpciones - 1);
//     var esCorrecta = false;
//
//     switch (expression) {
//       case expression:
//
//         break;
//       default:
//
//     }
//
//     for (var i = 0; i < cantOpciones; i++) {
//       if (indexCorrecta == i) { esCorrecta = true; }
//       else { esCorrecta = false; }
//       var $el = $grupo.create(posX, posY, 'btnOpcion');
//       $el.anchor.setTo(0.5);
//       $el.scale.setTo(0.7);
//       posX += opcionEspacio;
//       console.log(this.crearOpcionText([1,2], [1,7], [1,1], esCorrecta));
//     }
//
//     return $grupo;
//   },
//   crearOpcionText : function($num, $den, $mult, $correcta){
//     var hacerTexto = true;
//     var longitud = respuestas.length;
//     var multiplo = game.rnd.integerInRange($mult[0], $mult[1]);
//     var valNum;
//     var valDen;
//     var respuesta;
//     if ($correcta) {
//       valNum = multiplo;
//       valDen = cantidadNinios * multiplo;
//     }
//     else {
//       valNum = game.rnd.integerInRange($num[0], $num[1]) * multiplo;
//       valDen = game.rnd.integerInRange($den[0], $den[1]) * multiplo;
//     }
//     var opcion = opcion = valNum + "/" + valDen;
//     if (longitud > 0){
//       for (var i = 0; i < longitud; i++) {
//         if (respuestas[i] == opcion){
//           hacerTexto = false;
//         }
//       }
//     }
//     if (hacerTexto){
//       respuestas.push(opcion);
//       if ($correcta) { respuesta = opcion; console.log("la correcta es " + respuesta); }
//       else { respuesta = "0/0" }
//       return opcion;
//     }
//     else{
//       return this.crearOpcionText($num, $den, $mult);
//     }
//   }
//
// };

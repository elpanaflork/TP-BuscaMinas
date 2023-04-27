//Constantes del juego
const COLUMNAS = 10;
const FILAS = 10;
const CANTIDAD_MINAS = 10;

//Variables con colores para los casilleros (NO se pudieron declarar como constantes ya que  la fn color sólo está definida para el setup y el draw)
var COLOR_CASILLERO_CON_MINA;
var COLOR_CASILLERO_SIN_MINA;
var COLOR_CASILLERO_MARCADO;

//Variables controladas al hacer click con el mouse: mousePressed()
var columnaPresionada;
var filaPresionada;
var hizoClick = false;

//Otras variables
var casillerosSinDescubrir;

function setup()
{
  createCanvas(500, 500);   //crea un lienzo o panel donde estará el juego. El primer parámetro es el ancho y el segundo el alto del lienzo.
  laMagiaDeLosProfes();

  //Asigno colores que se utilizarán. La fn color solo está definida para el setup y el draw
  COLOR_CASILLERO_CON_MINA = color("#FF0000");
  COLOR_CASILLERO_SIN_MINA = color("#1CC932");
  COLOR_CASILLERO_MARCADO = color("#278EF2");

  // Modificar/completar
  ponerMinasTablero(); 
  casillerosSinDescubrir = FILAS * COLUMNAS;
}


function draw() {
  if (hizoClick == true)
  {

    if (mouseButton == LEFT)
    {
      if (tieneMinaCasillero(columnaPresionada, filaPresionada))
      {
        //toca una mina
        pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_CON_MINA);
        perder();
       
      }
      else
      {
        //no toca una mina
        pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_SIN_MINA);
        descubrirCasillero(columnaPresionada, filaPresionada);
        
      }
    }
    else
    {
        pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_MARCADO);
    }

    if (casillerosSinDescubrir == CANTIDAD_MINAS)
    {
      ganoElJuego();
    }

    hizoClick = false;  //Indico que ya "procesé" el click del usuario. NO modificar
  }
}


function ganoElJuego()
{
  console.log("gg");
  ganar();
  return true;  
}

function ponerMinasTablero()
{
  for (let contador = 0; contador < CANTIDAD_MINAS; contador++)
  {
    var columnamina = floor(random(0, COLUMNAS));
    var filamina = floor(random(0, FILAS));
    if(tieneMinaCasillero(columnamina, filamina))
    {
      //esto se ejecuta si la columna 4, fila 5 tiene una mina
      contador=contador-1
    }
    else
    {
      //esto se ejecuta si la columna 4, fila 5 NO tiene una mina
      console.log(columnamina+" , "+filamina);
      ponerMinaCasillero(columnamina,filamina);
    }
  }
}

function mostrarMinas()
{
  for(var contC = 0; contC < COLUMNAS; contC++){
    for(var contF = 0; contF < FILAS; contF++){
      if (tieneMinaCasillero(contC, contF)){
        pintarCasillero(contC, contF, COLOR_CASILLERO_CON_MINA);
      }
    }
  }
}


function contarMinasAlrededor(columna, fila)
{
 
}
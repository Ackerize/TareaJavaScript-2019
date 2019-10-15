var btn_lunes = document.getElementById("btn_lunes");
var btn_martes = document.getElementById("btn_martes");
var btn_miercoles = document.getElementById("btn_miercoles");
var btn_jueves = document.getElementById("btn_jueves");
var btn_viernes = document.getElementById("btn_viernes");

var btn_telefono = document.getElementsByClassName("navbar-toggler")[0];
var btn_inicio = document.getElementById("btn_inicio")

let hacerArticulo = (titulo, imagen, parrafo1, parrafo2) => {
  document.getElementById("01").innerHTML = titulo;
  document.querySelector("img").src = `assets/images/${imagen}.jpg`;
  document.getElementsByClassName("text-justify")[0].innerHTML = parrafo1;
  document.getElementsByClassName("text-justify")[1].innerHTML = parrafo2;
};

btn_lunes.addEventListener("click", () => {
  var parrafo1 = `El lunes previo a la tarea, fue un día tranquilo ya que el día siguiente no tenia actividad que previamente
    conociera. No me tocaba ir a la universidad. Luego de hacer los quehaceres del hogar y preparar el almuerzo,
    me puse a ver Netflix durante la tarde. No me apetecía jugar LoL por el momento. Pase más de 30 minutos
    buscando un titulo nuevo para mí y que me llamara la atención. Hasta que por fin encontré uno de mi agrado, y
    no se miraba aburrido a mi parecer. Era un documental sobre los 43 desaparecidos de Ayotzinapa, siendo
    sinceros nunca me había enterado sobre ese acontecimiento ocurrido en México hace aproximadamente 5 años`;

  var parrafo2 = `Posteriormente de ver ese documental, vi otro que se llamaba "Hasta los dientes" que de igual manera era sobre
    un hecho ocurrido en México en el Tecnológico de Monterrey. A eso de las 3 p.m. de la tarde, me aburrí de ver
    documentales y me puse a ver nuevamente un anime que se llama "The Seven Deadly Sins", porque el miércoles se
    estrena una nueva temporada, la número 3 por cierto. Así que quería tener "frescas" las temporadas pasadas.Por
    último vi unos episodios sobre una serie llamada "en pocas palabras" que cada episodio habla sobre un tema
    distintos con un estilo documental.`;

  hacerArticulo("lunes 07/octubre", "lunes", parrafo1, parrafo2);
  btn_telefono.click();
});

btn_martes.addEventListener("click", () => {
  var parrafo1 = `El martes tengo clase a las 7 a.m. La primera clase del día es "Seguridad en Entornos de Desarrollo". En esa
    clase nos enseñaron a como instalar Kerberos en linux, y al finalizar la clase dejo una actividad que
    consistía en hacer "ping" entre servidor-cliente, y como hora limite las 6 p.m. Posteriormente a esa clase,
    tengo "Análisis de Algoritmos" y vimos un problema de programación dinámica, se llama "Knapsack problem" que
    consistía en obtener en obtener el valor máximo de las posibles combinatorias de los productos sin superar el
    límite de peso.`;

  let parrafo2 = `Tengo tiempo muerto de 11 a.m. hasta 3:30 p.m. que es a la hora que empieza la clase de "Programación Web".
    Esa clase era distinta a las demás, ya que la dinámica era hacer grupos de trabajo y resolver algunos
    ejercicios usando los conocimientos previos y JavaScript. Eran 2 ejercicios para hacer durante la clase y 2
    para hacer durante la semana. El primero era tomar el parcial 1 y añadirle un evento a un icono para
    ocultar/mostrar el menú. El segundo era basarse en "The Journal" un ejercicio visto en clase, y hacer un
    formulario para ingresar el evento diario, y una tabla mostrando los eventos.`;

  hacerArticulo("martes 08/octubre", "martes", parrafo1, parrafo2);
  btn_telefono.click();
});


btn_miercoles.addEventListener("click", () => {
    var parrafo1 = `El miércoles no voy a la universidad. Pase todo el día en mi casa. El siguiente día tenia el taller 3 de
    algoritmos, entonces decidí dedicar cierta parte del día en prepararme para ese taller. La semana que se
    fueron a Guatemala no hubo clase de algoritmos porque Emmanuel también se fue a Guatemala con el grupo de
    estudiantes. Entonces previamente aviso que subiría videos a la plataforma de moodle. El martes subió el
    primer video que correspondía a la clase de ese día y el tema a tocar era sobre "Análisis probabilístico" y
    "aleatoriedad perfecta". El jueves subió el segundo y último video que trataba sobre "Programación dinámica"`;
  
    let parrafo2 = `En el primer video se realizaba el análisis probabilístico del algoritmo de Quicksort, y se explicaba más en
    fondo el tema con ejemplos y en uno de esos ejemplos salió el tema de la aleatoriedad perfecta. Comentaba que
    el humano tiene sesgo inconscientemente. Explicaba también el funcionamiento de la función srandom() que trae
    C++ incorporado. El otro video se basaba en el muy conocido ejercicio de la serie de Fibonacci ya que abarcaba
    la mayoría de conceptos que se utilizan, como el overlapping, recursividad, etc. El ejemplo consistía en pasar
    la función de Fibonacci de forma recursiva a su forma en programación dinámica.`;
  
    hacerArticulo("miercoles 09/octubre", "miercoles", parrafo1, parrafo2);
    btn_telefono.click();
});

btn_jueves.addEventListener("click", () => {
    var parrafo1 = `El jueves si voy a la universidad. Tengo clase a las 7 a.m. La primera clase terminó rápido porque nos dio
    tiempo para repasar para el taller 3 de algoritmos que tenia a las 9 a.m. Fui a desayunar mientra repasaba
    ciertas cosas que no me quedaban claras del todo. Posteriormente tuvimos el talle de 9 a.m. hasta las 11 a.m.
    Posteriormente, fuimos a almorzar hamburguesas. Luego tenia laboratorio de web y resolvimos el ejercicio del
    registro de llegada. Por último, tenia laboratorio de análisis numérico y explicaron y resolvieron el problema
    de "Assembly Line Scheduling".`;

    let parrafo2 = `Al llegar a mi casa me puse a avanzar en el ejercicio 3 de la tarea de JavaScript. Realmente me puse a pensar
    en como resolver el ejercicio, tuve varias ideas, entre ellas estaba la de ocultar/mostrar elementos de la
    página web. Me puse a indagar sobre como ejecutar la idea planteada, encontré una página que explicaba muy
    bien esa temática. También probé y experimente sobre el funcionamiento de GitHub Pages, haciendo uso de
    repositorios antiguos. Al finalizar el día, ya había creado una plantilla sobre como resolver el problema, ya
    solo quedaba de insertarle el texto y las imágenes.`;

    hacerArticulo("jueves 10/octubre", "jueves", parrafo1, parrafo2);
    btn_telefono.click();
});

btn_viernes.addEventListener("click", () => {
    var parrafo1 = `El viernes nuevamente es mi día de descanso de la universidad. Pase en la casa. Ese día no se me apetecía ver
    Netflix o ver televisión. Después de hacer los quehaceres del hogar y avanzar un poco sobre la tarea de
    JavaScript, decidí ponerme a jugar League of Legends. En lo personal, me gustaba mucho este juego a pesar de
    que no siempre se gana, y que cuando se pierde te genera estrés en exceso, mejor conocido como "tilt". Pero a
    pesar de eso, es muy adictivo e independientemente del resultado, te dan ganas de seguir jugando en la "Grieta
    del invocador".`;

    let parrafo2 = `Curiosamente este día, perdí mi promoción y no siendo suficiente eso, perdí 4 partidas clasificatorias más. En
    definitiva no fue un gran día en el SoloQueue para mí. He tenido mejores días. Aún no pierdo la esperanza de
    subir de liga antes del fin de temporada. Hay más de un mes todavía. Tengo que concentrarme más y no dejar de
    intentarlo, de tanto intentarlo se alcanzan los objetivos que uno se propone. El lolcito es en definitiva una
    relación de amor-odio. Es la relación tóxica que nunca terminas.`;

    hacerArticulo("viernes 11/octubre", "viernes", parrafo1, parrafo2);
    btn_telefono.click();
});
  
btn_telefono.addEventListener("click", () => {
  var oculto = document.querySelector(".navbar-collapse");
  if (oculto.className.match(/(?:^|\s)show(?!\S)/)) {
    oculto.className = oculto.className.replace(/(?:^|\s)show(?!\S)/g, "");
  } else {
    oculto.className += " show";
  }
});

btn_inicio.addEventListener("click", ()=>{
    hacerArticulo("blog diario de rudi", "blog", '', '')
    btn_telefono.click();
})

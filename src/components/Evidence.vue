<template>
  <section class="section project" id="project" aria-label="project">
    <div class="container">
      <h2 class="h2 section-title">Pruebas das Olimpiadas Rurais</h2>

      <p class="section-text">
        Descubre as distintas probas que celebran a tradición, a forza e a
        habilidade no ámbito rural galego.
      </p>

      <ul class="grid-list">
        <li
          v-for="(project, index) in projects"
          :key="index"
          class="project-item"
        >
          <div class="project-card animate-card">
            <figure
              class="card-banner img-holder"
              style="--width: 510; --height: 700"
            >
              <img
                width="510"
                height="700"
                loading="lazy"
                :alt="project.alt"
                class="img-cover"
                :src="project.img"
              />
            </figure>

            <div class="card-content">
              <p class="card-subtitle">{{ project.subtitle }}</p>

              <h3 class="h3">
                <a href="#" class="card-title">{{ project.title }}</a>
              </h3>

              <button @click="openModal(project)" class="btn btn-primary">
                Ver Detalles
              </button>
            </div>
          </div>
        </li>
      </ul>
      <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <ion-icon
            name="close-outline"
            class="close-icon"
            @click.stop="closeModal"
          ></ion-icon>
          <h2>{{ selectedProject.title }}</h2>
          <p :style="{ whiteSpace: 'pre-line' }">
            {{ selectedProject.description }}
          </p>
          <p>{{ selectedProject.participantes }}</p>
          <p :style="{ whiteSpace: 'pre-line' }">
            {{ selectedProject.Sistema }}
          </p>
          <button @click="goToGallery" class="btn btn-secondary">
            Ir a la galería
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import garrote from "@/assets/imagenes/fotos/pruebas/Garrote/garrote8.webp";
import mizos from "@/assets/imagenes/fotos/pruebas/Mizos/mizos1.webp";
import cucuña from "@/assets/imagenes/fotos/pruebas/Cucuña/cucuña4.webp";
import piolas from "@/assets/imagenes/fotos/pruebas/Piolas/piolas1.webp";
import carrerasacos from "@/assets/imagenes/fotos/pruebas/Carrera de sacos/saco1.webp";
import lanzamiento from "@/assets/imagenes/fotos/pruebas/Lanzamiento de adoquin/lanzamiento8.webp";
import Zancos from "@/assets/imagenes/fotos/pruebas/Zancos/zancos9.webp";
import cintas from "@/assets/imagenes/fotos/pruebas/Cintas/cintas7.webp";
import carretilla from "@/assets/imagenes/fotos/pruebas/Carretilla/carretilla4.webp";
import comba from "@/assets/imagenes/fotos/pruebas/Comba/comba6.webp";
import silliña from "@/assets/imagenes/fotos/pruebas/Silliña da raiña/silla11.webp";
import lazos from "@/assets/imagenes/fotos/pruebas/Carrera de Lazos/lazos1.webp";
import cuerda from "@/assets/imagenes/fotos/pruebas/Cuerdas/cuerdas7.webp";
export default {
  data() {
    return {
      projects: [
        {
          title: "El Garrote",
          subtitle: "Velocidade e Axilidade",
          alt: "Garrote",
          img: garrote,
          description:
            "Es un juego en el que sin hacerse daño dos participantes se pondrán frente a frente sentados enfrentando los dos pies de cada uno con los dos pies del contrario y agarrados a un palo con las dos manos, cada uno tirara hacia sí mismo del palo e intentará poner de pie al contrincante, cuando uno de los dos lo consiga será el ganador.",
          participantes: "Participantes: Un hombre y una mujer de cada equipo.",
          Sistema: "Sistema de puntuación: Eliminación directa",
        },
        {
          title: "Mizos",
          subtitle: "Forza e Precisión",
          alt: "Mizos",
          img: mizos,
          description:
            "Este juego consiste en intentar tirar cuatro tacos de madera alineados que están a una distancia del tirador/a de 1,5 - 3 - 4,5 y 7 metros respectivamente.\nCada jugador intentará derribar el número máximo de tacos en cada una de sus rondas.\n\nEn cada tirada será obligatorio:\n-Sobrepasar con la bola la linea del taco número 4 (7 metros).\n-Derribar el taco número 1 (1,5 metros).\n\nSi no se cumplen estás dos normas la tirada será nula y la puntuación será cero al igual que si se rebasa con los pies la linea de tirada que estará fija y bien marcada.",
          participantes:
            "Participantes: Dos hombres y dos mujeres de casa equipo.",
          Sistema: "Sistema de puntuación: Suma de puntos",
        },
        {
          title: "Cucaña",
          subtitle: "Traballo en Equipo",
          alt: "Cucaña",
          img: cucuña,
          description:
            "El juego de la cucaña consiste en escalar un palo circular hasta una altura de cinco metros y tocar una campana. Va por tiempo y gana el equipo que llegue a la cima empleando menos tiempo.",
          participantes: "Participantes: un hombre y una mujer de cada equipo.",
          Sistema: "Sistema de puntuación: Ganadores por tiempo.",
        },

        {
          title: "A Piola",
          subtitle: "Velocidade e Axilidade",
          alt: "Piolas",
          img: piolas,
          description:
            "Este es un juego tradicional que se lleva jugando hace mucho tiempo en las calles de todos los lugares.\nEn las olimpiadas rurales se formarán equipos de 6 hombres y 6 mujeres, tendrán que cruzar un campo de fútbol saltando todos al resto de sus compañeros. Tendrá que colocarse el primero agachado, doblándose por la cintura y apoyando los codos sobre los muslos, el segundo tiene que saltarlo y situarse de la misma manera en la siguiente linea, el tercero salta a los dos y se coloca en la tercera línea y así sucesivamente hasta que el décimo salta al primero, ahí el primero se levanta y vuelve a empezar la rueda. Al llegar al fondo del campo tendrán que cruzar de esta manera todos los corredores. Al cruzar la meta el último corredor se parará el reloj de su tiempo.",
          participantes: "Equipo de 6 hombres y 6 mujeres",
          Sistema: "Sistema de puntuación: Puntuación por tiempo",
        },
        {
          title: "Carrera de Sacos",
          subtitle: "Velocidade e Axilidade",
          alt: "Carrera de Sacos",
          img: carrerasacos,
          description:
            "Está prueba consistirá en una carrera de sacos por relevos entre los componentes, será de unos 200 metros. Las carreras estarán formadas por varios equipos de cuatro integrantes de cada uno de los equipos. Cada equipo participará dos veces, una vez con su equipo de cuatro chicas en la carrera femenina y otra con su equipo de cuatro chicos en la carrera masculina.\nEl primer corredor empezará cuando suene el silbato y dará el relevo al segundo en los 50 metros, el segundo se lo dará al tercero en los 100 metros, el tercero se lo dará cuarto en los 150 metros y este llegará a la meta. Para dar el relevo hay una zona delimitada, en esta zona tendrá que llegar el corredor que lleva el saco y dárselo a su compañero, el que se queda sin saco no podrá salir de esa zona hasta que acabe la carrera. El saco hay que sujetarlo con las manos por encima de la cintura y no se puede empujar a los contrarios.",
          participantes:
            "Participantes: cuatro chicas y cuatro chicos de cada equipo",
          Sistema:
            "Sistema de puntuación: se sumarán los tiempos de las carreras de chicas y de la chicos de cada equipo y se hará una clasificación.",
        },
        {
          title: "Lanzamiento de Adoquín",
          subtitle: "Habilidade e Forza",
          alt: "Lanzamiento de Adoquín",
          img: lanzamiento,
          description:
            "Está prueba consiste en lanzar un adoquín lo más lejos posible.\nSe lanzará con una mano mirando al frente (no se puede tirar de espaldas ni de lado) desde dentro de un circulo y si se pisa el circulo o se sale de el antes, durante o después del momento de lanzamiento hasta que el adoquín haya caído y se haya parado completamente en el suelo el lanzamiento será considerado nulo. También se considerara nulo si el adoquín toca las paredes que habrá a los lados de la zona de lanzamiento.\nCada participante tirará dos veces y se quedará para puntuación el tiro de mayor distancia.",
          participantes: "Participantes: una chica y un chico de cada equipo",
          Sistema:
            "Sistema de puntuación: se sumarán las dos mejores distancias de cada equipo (mejor tiro de la chica + mejor tiro del chico) y esa será la distancia del equipo. Se hará una clasificación por distancia alcanzada por equipos y el que mayor distancia alcance será el equipo que más puntuación se le asignará",
        },
        {
          title: "Zancos",
          subtitle: "Velocidade e Axilidade",
          img: Zancos,
          description:
            "Está prueba consistirá en una carrera subidos a unos zancos a la misma altura para todos l@s participantes.\nHabrá dos recorridos, uno de 60 metros liso y uno de 40 metros con unos troncos y una rampa como obstáculos, cada participante puede elegir cualquiera de los dos recorridos. A los que elijan el recorrido con obstáculos tendrán 10 segundos de bonificación al llegar a la meta. Participarán 2 hombres y 2 mujeres de cada equipo y saldrán los cuatro juntos, a medida que llegan a meta se irán parando los cronómetros de cada uno y se restarán las penalizaciones (por cada caída 4 segundos).\nUna vez que acaben todos se sumarán los tiempos de los cuatro participantes y ese será el tiempo del equipo.",
          participantes:
            "Participantes: dos chicas y dos chicos de cada equipo",
          Sistema:
            "Sistema de puntuación: se sumarán los tiempos de los cuatro participantes de cada equipo y ese será el resultado del equipo. Se hará una clasificación por tiempos en la que el equipo que menos tiempo emplee en realizar la prueba es el ganador.    ",
        },
        {
          title: "Cintas",
          subtitle: "Velocidade e Axilidade",
          alt: "Cintas",
          img: cintas,
          description:
            "Está prueba consiste en hacer un recorrido de 80 metros y atrapar con un puntero unas cintas que estarán colgadas a lo largo del recorrido en 4 estructuras.\nEstás cintas estarán atadas a una arandela que será en la que hay que introducir el puntero para que salga la cinta del cilindro donde está enrollada.Estás cintas tendrán cuatro colores y cada color tendrá una puntuación distinta debido a que las arandelas son de diferentes tamaños y cuanto más pequeñas sean más dificultad tiene introducir el puntero en la arandela. Este recorrido solo de ida y sin poder volver hacia atrás lo harán 4 personas de cada equipo (dos mujeres y dos hombres) y al llegar a la linea de meta se contabilizarán las cintas y se sumarán todos los puntos para saber la puntuación de cada equipo.\nSe penalizará a los equipos que tarden más de 40 segundos en hacer el recorrido en 1 segundo por cada 5 segundos con un máximo de 20 puntos de penalización.\nSi cae una cinta durante el recorrido podrán recogerlo al igual que apoyar los pies en el suelo excepto en la zona marcada debajo de las estructuras donde cuelgan las cintas que ahí sí se apoyan los pies tendrán una penalización y si cae la cinta no podrá recogerse.",
          participantes:
            "Participantes: dos chicas y dos chicos de cada equipo",
          Sistema:
            "Sistema de puntuación: se sumarán los puntos conseguidos por cada equipo una vez descontadas las penalizaciones. Y con ello se hará una clasificación que quedará de primero el que haya conseguido más puntos.\nSe cronometra el tiempo de cada equipo en realizar el recorrido y en caso de empate ganará quien menos tiempo emplee en hacerlo.",
        },
        {
          title: "Carretilla",
          subtitle: "Velocidade e Axilidade",
          alt: "Carretilla",
          img: carretilla,
          description:
            "Está prueba consiste en una carrera por relevos haciendo la carretilla.\nEl/la porteador/a será el/la mism@ y l@s participantes que hacen de carretilla se irán cambiando durante el recorrido.\nSerá en el campo de fútbol y la carrera total será de unos 100 metros en las que habrá 5 zonas de relevo marcadas cada 20 metros en las que los relevos tendrán que esperar tumbados boca abajo a que venga el porteador a recogerlos, los participantes que hacen de carretilla, una vez que acaban su tramo tendrán que quedar tumbados horizontalmente hasta que todos los equipos acaben la carrera. El porteador no podrá seguir la carrera con el nuevo relevo hasta que el anterior relevo que se queda en la zona de relevos esté tumbado en el suelo, salir de la zona de relevos sin que esté tumbado conllevara una penalización de 15 segundos en el tiempo cada vez que esto suceda.\nEl porteador tendrá que coger por los tobillos a quien haga de carretilla, cada vez que suelte uno de los pies o la carretilla los apoye en el suelo se sumara una penalización de 5 segundo al tiempo total.",
          participantes:
            "Participantes: seis chicas y seis chicos de cada equipo. Habrá una carrera de chicas y otra de chicos.",
          Sistema:
            "Sistema de puntuación: se sumarán los tiempos hechos por el equipo masculino y femenino y se descontarán las penalizaciones. Este es el tiempo del equipo y con este tiempo se hará una clasificación con puntos en la que el que más puntos obtenga el de menor tiempo hecho.",
        },
        {
          title: "Comba",
          subtitle: "Velocidade e Axilidade",
          alt: "Comba",
          img: comba,
          description:
            "Está prueba consiste en saltar a la comba en equipo.\nSerán 4 hombres y 4 mujeres l@s que participen en esta prueba, dos de ell@s serán l@s que den a la comba y 6 l@s que salten. La cuerda será de 25 metros de longitud y cada equipo tendrá que estar dentro de un campo de 20 metros marcado con líneas en el suelo.\nEmpezarán a dar a la comba y el resto de participantes irán entrando en ella como mucho uno en cada vuelta hasta que entren los 6, una vez que estén todos dentro se empezarán a contar los saltos (a partir de que el último participante que entró salte por primera vez).\nSe contarán los saltos y el tiempo con un máximo de 5 minutos desde que se empezaron a contar los saltos.\nDe ahí saldrá la clasificación, ganará el que más saltos dé y en caso de empate se mirará el tiempo, ganando el equipo que menos tiempo empleara en dar ese número de saltos.\nLos equipos tendrán 3 intentos desde que entra el primer participante hasta que entra el último, si fallan en ese intervalo podrían volver a intentarlo hasta un máximo de 3 veces.\nUna vez que entra el último participante y da el primer salto en cualquiera de los tres intentos aunque fallaran ya no podrían intentarlo de nuevo aunque solo hubieran dado un salto los 6 participantes.\nSi algunos equipos no llegan a entrar los 6 en ninguno de los 3 intentos para hacer su puntuación se tomará el mejor de los 3 intentos que ha realizado contando los participantes que había dentro y el tiempo que han empleado en ello.",
          participantes:
            "Participantes: cuatro chicas y cuatro chicos de cada equipo de los cuales 2 son los que dan a la comba y 6 son los que saltan.",
          Sistema:
            "Sistema de puntuación: se hará una clasificación por la puntuación que obtenga cada uno, siendo el equipo que más saltos dé el que más puntos obtenga.",
        },
        {
          title: "Silliña de Raiña",
          subtitle: "Velocidade e Axilidade",
          alt: "Silliña de Raiña",
          img: silliña,
          description:
            'Está prueba consistirá en una carrera que realizará 3 participantes (2 chicas y 1 chico o 2 chicos y 1 chica). Está carrera consistirá en qué dos de los participantes hacen de porteadores agarrándose las manos para que se siente el tercer participante que será "la reina".\nSerá un recorrido en el que habrá cuatro obstáculos y una "búsqueda del tesoro" en una piscina de agua a la cual solo entrará la reina. La reina no podrá tocar el suelo solamente en los lugares habilitados para ello con el objetivo de realizar alguna prueba.\nSe necesitarán 2 personas más (chico y chica) del equipo para colaborar con sus compañeros en la realización de una de las pruebas.\nSe penalizarán los fallos sumando segundos al tiempo final que emplee el equipo en realizar el recorrido, depende del fallo se sumarán 10, 20 o 30 segundos. Se os informará antes de las penalizaciones.\nSe premiará con 40 segundos extra al equipo que si reina venga disfrazada de reina con traje y corona y se premiará con 15 segundos extra al equipo que su reina venga con corona.',
          participantes:
            "Participantes: cinco participantes de cada equipo (3 mujeres y 2 hombres o 3 hombres y 2 mujeres)",
          Sistema:
            "Sistema de puntuación: se hará una clasificación con los tiempos empleados por cada equipo después de sumar los premios y restar las penalizaciones. El equipo que más puntos obtenga será el equipo que menos tiempo emplee en realizar el recorrido.",
        },
        {
          title: "Carrera de Lazos",
          subtitle: "Destreza e Velocidade",
          alt: "Carrera de Lazos",
          img: lazos,
          description:
            " Está prueba al igual que todas las olimpiadas intentará crear lazos de amistad, unión y diversión entre los participantes y que mejor que una carrera en la que los integrantes estarán unidos por unos lazos de los cuales no podrán soltarse. La realizarán 5 participantes (3 chicas y 2 chicos o 3 chicos y 2 chicas), tendrá unos 500 metros de distancia aproximadamente en la que los 5 integrantes del equipo irán atados a la altura del tobillo durante toda la carrera, los tres integrantes del medio llevarán atados los dos pies con sus compañeros y los dos de las esquinas solo llevarán atados uno de los pies. Deberán llegar atados igual que salieron a la meta y si en algún momento se les suelta uno de los lazos tendrán que parar y volverse atar. Por cada vez que se les desate un lazo se le sumara a su tiempo total 15 segundos.",
          participantes:
            "Participantes: cinco participantes de cada equipo (3 mujeres y 2 hombres o 3 hombres y 2 mujeres)",
          Sistema:
            "Sistema de puntuación: se hará una clasificación con los tiempos empleados por cada equipo después de restar las penalizaciones. El equipo que más puntos obtenga será el equipo que menos tiempo emplee en realizar el recorrido",
        },
        {
          title: "Cuerda",
          subtitle: "Velocidade e Axilidade",
          alt: "Cuerda",
          img: cuerda,
          description:
            "Está prueba consiste en una cuerda de 25 metros por la que tirarán 10 integrantes de cada equipo (5 chicas y 5 chicos).\nSe iniciará con el sonido de un silbato y se finalizará cuando la pañuelo que está en el medio de la cuerda entre en el terreno de uno de los dos equipos marcado con una linea en el suelo.",
          participantes:
            "Participantes: cinco chicas y cinco chicos de cada equipo tirando juntos en cada eliminatoria.",
          Sistema:
            "Sistema de puntuación: seran eliminatorias hasta llegar a una final y proclamar un ganador que será el que más puntos obtenga. Los equipos que queden eliminados en casa tanda llevarán la misma puntuación dependiendo de la tanda.\nSe cronometra por si hubiera que repescar algún equipo para cuadrar eliminatorias y se repescara al de la última tanda que más tiempo hayan tardado en eliminar",
        },
      ],
      selectedProject: null, // Proyecto seleccionado
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
    },
    closeModal() {
      this.selectedProject = null;
    },
    goToGallery() {
      this.$router.push("/galeria"); // Ajusta la ruta según sea necesario
    },
  },
};
</script>

<style scoped>
.project .section-text {
  margin-block: 5px 35px;
}

.project-card {
  position: relative;
  border-radius: var(--radius-8);
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: var(--transition-2);
}

.project-card.animate-card {
  animation: fadeInUp 0.6s ease-out forwards;
}

.project-card .card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  z-index: 1;
  transition: var(--transition-2);
}

.project-card:hover .card-content {
  transform: translateY(-20px);
}

.project-card .card-subtitle {
  color: var(--lavender-gray);
  font-size: var(--fs-6);
  line-height: 1;
}

.project-card .card-title {
  color: var(--white-1);
  margin-block: 12px 15px;
}

.project-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black);
  opacity: 0.5;
  transition: var(--transition-2);
}

.project-card:hover::after {
  opacity: 0.8;
}

.modal-content h2 {
  margin-bottom: 10px;
  text-align: center;
}

.modal-content p {
  margin-bottom: 20px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #ffffff;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  animation: fadeIn 0.3s ease-in-out;
}

.modal-content h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: bold;
}

.modal-content p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.btn {
  padding: 10px 20px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}

.btn-secondary {
  display: block;
  margin: 20px auto 0;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.modal-content .btn-secondary:hover {
  background-color: #0056b3;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cuersor: pointer;
  color: #333;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (min-width: 992px) {
  .project-card .card-subtitle {
    font-size: 1.5rem;
  }
}

@media (min-width: 1200px) {
  .project-card .card-content {
    padding: 30px;
  }

  .project-card .card-subtitle {
    font-size: 1.6rem;
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

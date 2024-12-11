<template>
    <section class="section project" id="project" aria-label="project">
      <div class="container">
        <h2 class="h2 section-title">Pruebas das Olimpiadas Rurais</h2>
  
        <p class="section-text">
          Descubre as distintas probas que celebran a tradición, a forza e a habilidade no ámbito rural galego.
        </p>
  
        <ul class="grid-list">
          <li v-for="(project, index) in projects" :key="index" class="project-item">
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
                />
              </figure>
  
              <div class="card-content">
                <p class="card-subtitle">{{ project.subtitle }}</p>
  
                <h3 class="h3">
                  <a href="#" class="card-title">{{ project.title }}</a>
                </h3>
  
                <a href="#" class="btn btn-primary">Ver Detalles</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </template>
  
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
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            title: "Proba de Corte de Troncos",
            subtitle: "Habilidade e Forza",
            alt: "Proba de Corte de Troncos",
          },
          {
            title: "Carreira con Sacos",
            subtitle: "Destreza e Velocidade",
            alt: "Carreira con Sacos",
          },
          {
            title: "Lanzamento de Sacho",
            subtitle: "Forza e Precisión",
            alt: "Lanzamento de Sacho",
          },
          {
            title: "Proba de Arrastre de Pedra",
            subtitle: "Resistencia",
            alt: "Proba de Arrastre de Pedra",
          },
          {
            title: "Tiro de Corda",
            subtitle: "Traballo en Equipo",
            alt: "Tiro de Corda",
          },
          {
            title: "Carrera de Obstáculos",
            subtitle: "Velocidade e Axilidade",
            alt: "Carrera de Obstáculos",
          },
        ],
      };
    },
  };
  </script>
  
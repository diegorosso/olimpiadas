<template>
    <section class="section project" id="project" aria-label="project">
      <div class="container">
        <h2 class="h2 section-title">Pruebas das Olimpiadas Rurais</h2>
  
        <p class="section-text">
          Descubre as distintas probas que celebran a tradición, a forza e a habilidade no ámbito rural galego.
        </p>
  
        <ul class="grid-list">
          <li>
            <div class="project-card">
              <figure
                class="card-banner img-holder"
                style="--width: 510; --height: 700"
              >
                <img
                  
                  width="510"
                  height="700"
                  loading="lazy"
                  alt="Proba de Corte de Troncos"
                  class="img-cover"
                />
              </figure>
  
              <div class="card-content">
                <p class="card-subtitle">Habilidade e Forza</p>
  
                <h3 class="h3">
                  <a href="#" class="card-title">Proba de Corte de Troncos</a>
                </h3>
  
                <a href="#" class="btn btn-primary">Ver Detalles</a>
              </div>
            </div>
          </li>
  
          <li>
            <div class="project-card">
              <figure
                class="card-banner img-holder"
                style="--width: 510; --height: 700"
              >
                <img
                  
                  width="510"
                  height="700"
                  loading="lazy"
                  alt="Carreira con Sacos"
                  class="img-cover"
                />
              </figure>
  
              <div class="card-content">
                <p class="card-subtitle">Destreza e Velocidade</p>
  
                <h3 class="h3">
                  <a href="#" class="card-title">Carreira con Sacos</a>
                </h3>
  
                <a href="#" class="btn btn-primary">Ver Detalles</a>
              </div>
            </div>
          </li>
  
          <li>
            <div class="project-card">
              <figure
                class="card-banner img-holder"
                style="--width: 510; --height: 700"
              >
                <img
                 
                  width="510"
                  height="700"
                  loading="lazy"
                  alt="Lanzamento de Sacho"
                  class="img-cover"
                />
              </figure>
  
              <div class="card-content">
                <p class="card-subtitle">Forza e Precisión</p>
  
                <h3 class="h3">
                  <a href="#" class="card-title">Lanzamento de Sacho</a>
                </h3>
  
                <a href="#" class="btn btn-primary">Ver Detalles</a>
              </div>
            </div>
          </li>
  
          <li>
            <div class="project-card">
              <figure
                class="card-banner img-holder"
                style="--width: 510; --height: 700"
              >
                <img
                  
                  width="510"
                  height="700"
                  loading="lazy"
                  alt="Proba de Arrastre de Pedra"
                  class="img-cover"
                />
              </figure>
  
              <div class="card-content">
                <p class="card-subtitle">Resistencia</p>
  
                <h3 class="h3">
                  <a href="#" class="card-title">Proba de Arrastre de Pedra</a>
                </h3>
  
                <a href="#" class="btn btn-primary">Ver Detalles</a>
              </div>
            </div>
          </li>
  
          <li>
            <div class="project-card">
              <figure
                class="card-banner img-holder"
                style="--width: 510; --height: 700"
              >
                <img
                  
                  width="510"
                  height="700"
                  loading="lazy"
                  alt="Tiro de Corda"
                  class="img-cover"
                />
              </figure>
  
              <div class="card-content">
                <p class="card-subtitle">Traballo en Equipo</p>
  
                <h3 class="h3">
                  <a href="#" class="card-title">Tiro de Corda</a>
                </h3>
  
                <a href="#" class="btn btn-primary">Ver Detalles</a>
              </div>
            </div>
          </li>
  
          <li>
            <div class="project-card">
              <figure
                class="card-banner img-holder"
                style="--width: 510; --height: 700"
              >
                <img
                 
                  width="510"
                  height="700"
                  loading="lazy"
                  alt="Carrera de Obstáculos"
                  class="img-cover"
                />
              </figure>
  
              <div class="card-content">
                <p class="card-subtitle">Velocidade e Axilidade</p>
  
                <h3 class="h3">
                  <a href="#" class="card-title">Carrera de Obstáculos</a>
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

.project-card:is(:hover, :focus-within)::after {
  opacity: 0.8;
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

.project-card:is(:hover, :focus-within) .card-content {
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

@media (min-width: 992px) {
  .project-card .card-subtitle {
    --fs-6: 1.5rem;
  }
}

@media (min-width: 1200px) {
  .project-card .card-content {
    padding: 30px;
  }

  .project-card .card-subtitle {
    --fs-6: 1.6rem;
  }
}
</style>

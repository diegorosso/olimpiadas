<template>
    <section class="section blog" id="blog" aria-label="blog">
      <div class="container">
        <h2 class="h2 section-title">Últimas Noticias de las Olimpiadas Rurais</h2>
  
        <p class="section-text">
          Mantente informado sobre los eventos, resultados y momentos destacados de las Olimpiadas Rurais.
        </p>
  
        <ul class="grid-list">
          <li>
            <div class="blog-card">
              <figure
                class="card-banner img-holder"
                style="--width: 860; --height: 646"
              >
                <img
                  src="../assets/imagenes/fotos/pruebas/speakers/spekers1.webp"
                  width="860"
                  height="646"
                  loading="lazy"
                  alt="Inauguración de las Olimpiadas Rurais 2025"
                  class="img-cover"
                />
              </figure>
  
              <div class="card-content">
                <time class="time" datetime="2025-12-01">Diciembre 1, 2025</time>
  
                <h3 class="h3">
                  <a href="#" class="card-title"
                    >Inauguración de las Olimpiadas Rurais 2025</a
                  >
                </h3>
              </div>
            </div>
          </li>
  
          <li>
            <div class="blog-card grid">
              <figure
                class="card-banner img-holder"
                style="--width: 860; --height: 646"
              >
                <img
                  src="../assets/imagenes/flyer2.jpeg"
                  width="860"
                  height="646"
                  loading="lazy"
                  alt="Competencias de Atletismo: Resultados Destacados"
                  class="img-cover"
                />
              </figure>
  
              <div class="card-content">
                <time class="time" datetime="2025-12-02">Diciembre 2, 2025</time>
  
                <h3 class="h3">
                  <a href="#" class="card-title"
                    >Competencias de Atletismo: Resultados Destacados</a
                  >
                </h3>
              </div>
            </div>
          </li>
  
          <li>
            <div class="blog-card grid">
              <figure
                class="card-banner img-holder"
                style="--width: 860; --height: 646"
              >
                <img
                  src="../assets/imagenes/flyer3.jpg"
                  width="860"
                  height="646"
                  loading="lazy"
                  alt="Exhibición de Tradiciones Culturales en las Olimpiadas"
                  class="img-cover"
                />
              </figure>
  
              <div class="card-content">
                <time class="time" datetime="2025-12-03">Diciembre 3, 2025</time>
  
                <h3 class="h3">
                  <a href="#" class="card-title"
                    >Exhibición de Tradiciones Culturales en las Olimpiadas</a
                  >
                </h3>
              </div>
            </div>
          </li>
  
          <li>
            <div class="blog-card grid">
              <figure
                class="card-banner img-holder"
                style="--width: 860; --height: 646"
              >
                <img
                  src="../assets/imagenes/fotos/pruebas/speakers/speker2.webp"
                  width="860"
                  height="646"
                  loading="lazy"
                  alt="Equipos Destacados: Historias de Superación"
                  class="img-cover"
                />
              </figure>
  
              <div class="card-content">
                <time class="time" datetime="2025-12-04">Diciembre 4, 2025</time>
  
                <h3 class="h3">
                  <a href="#" class="card-title"
                    >Equipos Destacados: Historias de Superación</a
                  >
                </h3>
              </div>
            </div>
          </li>
  
          <li>
            <div class="blog-card grid">
              <figure
                class="card-banner img-holder"
                style="--width: 860; --height: 646"
              >
                <img
                  src="../assets/imagenes/fotos/pruebas/Final/final8.webp"
                  width="860"
                  height="646"
                  loading="lazy"
                  alt="Cierre de las Olimpiadas: Premios y Celebración"
                  class="img-cover"
                />
              </figure>
  
              <div class="card-content">
                <time class="time" datetime="2025-12-05">Diciembre 5, 2025</time>
  
                <h3 class="h3">
                  <a href="#" class="card-title"
                    >Cierre de las Olimpiadas: Premios y Celebración</a
                  >
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </template>

<style scoped>
.blog .section-text {
  margin-block: 5px 35px;
}

.blog-card {
  background-color: var(--white-2);
}

.blog-card .card-banner {
  overflow: hidden;
}

.blog-card .card-banner img {
  transition: var(--transition-2);
}

.blog-card:is(:hover, :focus-within) .card-banner img {
  transform: scale(1.05);
}

.blog-card .card-content {
  padding: 15px;
}

.blog-card .time {
  color: var( --persian-rose);
  font-size: var(--fs-6);
  line-height: 1;
  margin-block-end: 10px;
}

.blog-card .card-title {
  transition: var(--transition-1);
}

.blog-card .card-title:is(:hover, :focus) {
  color: var( --persian-rose);
}

@media (min-width: 575px) {
  .blog .grid-list {
    grid-template-columns: 1fr;
  }

  .blog-card.grid {
    display: grid;
    grid-template-columns: 0.47fr 1fr;
    align-items: center;
    gap: 10px;
  }
}

@media (min-width: 992px) {
  .blog .grid-list {
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
  }

  .blog .grid-list > li:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / 5;
  }

  .blog-card:not(.grid) {
    height: 100%;
  }

  .blog-card .card-content {
    padding-block: 10px;
  }

  .blog-card:not(.grid) .card-content {
    padding: 25px;
  }

  .blog-card.grid .h3 {
    --fs-3: 2rem;
  }

  .blog-card .time {
    --fs-6: 1.6rem;
  }
}

@media (min-width: 1200px) {
  .blog-card .time {
    --fs-6: 1.6rem;
  }

  .blog-card.grid .h3 {
    --fs-3: 2.4rem;
  }
}
</style>

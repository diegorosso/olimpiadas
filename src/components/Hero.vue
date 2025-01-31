<template>
  <section class="section hero" id="home" aria-label="hero">
    <div class="container">
      <div class="hero-content">
        <p class="hero-subtitle">Olimpiadas Rurais</p>

        <h1 class="h1 hero-title">Un encontro de tradición e deporte</h1>

        <p class="hero-text">
          As olimpíadas rurais celebran a conexión coas nosas raíces e o
          espírito deportivo no campo.
        </p>

        <router-link to="/galeria" class="btn btn-primary">Galería de imágenes</router-link>
      </div>

      <figure class="hero-banner">
        <img
          src="../assets/imagenes/hero.jpg"
          width="720"
          height="673"
          alt="hero banner"
          class="w-100 image-animated"
        />
      </figure>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block-start: calc(var(--section-padding) + 50px);
  text-align: center;
}

.hero-content {
  margin-block-end: 30px;
}

.hero-subtitle {
  color: var(--eerie-black);
  font-size: var(--fs-5);
  font-weight: var(--fw-500);
  animation: fadeIn 1s ease-out;
}

.hero-title {
  margin-block: 12px 8px;
  animation: fadeIn 1.5s ease-out;
  font-size: 5rem;
}

.hero-text {
  font-size: var(--fs-5);
  animation: fadeIn 2s ease-out;
}

.hero .btn {
  margin-inline: auto;
  margin-block-start: 20px;
  animation: fadeIn 2.5s ease-out;
}

.hero-banner img {
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: zoomIn 2s ease-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zoomIn {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (min-width: 768px) {
  .hero-text {
    max-width: 60ch;
    margin-inline: auto;
  }
}

@media (min-width: 992px) {
  .hero .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 30px;
    text-align: left;
  }

  .hero-content {
    margin-block-end: 0;
  }

  .hero-subtitle {
    position: relative;
    padding-inline-start: 15px;
  }

  .hero-subtitle::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: var(--red-crayola);
  }

  .hero-text,
  .hero .btn {
    margin-inline: 0;
  }
}
</style>

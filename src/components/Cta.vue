<template>
  <section
    class="section cta"
    aria-label="cta"
    style="background-image: url('../assets/imagenes/Sin\ título-1.png')"
  >
    <div class="container">
      <p class="cta-subtitle">¿Listos para el desafío?</p>

      <h2 class="h2 section-title">¡Participa en las Olimpiadas Rurais!</h2>

      <a
        href="https://wa.me/34672523511?text=Hola%20quiero%20participar%20de%20las%20olimpiadas%20rurais%202025"
        class="btn btn-secondary"
        target="_blank"
        rel="noopener"
      >
        Únete ahora
      </a>
    </div>
  </section>
</template>

<style scoped>
.cta {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 1;
}

.cta::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: var(--gradient);
  opacity: 0.95;
  z-index: -1;
}

.cta-subtitle,
.cta .section-title {
  color: var(--white-1);
}

.cta-subtitle {
  font-size: var(--fs-6);
  font-weight: var(--fw-500);
  text-align: center;
}

.cta .section-title {
  margin-block: 12px 18px;
}

.cta .btn {
  margin-inline: auto;
}

@media (min-width: 1200px) {
  .cta .section-title {
    margin-block: 15px 24px;
  }
}
</style>

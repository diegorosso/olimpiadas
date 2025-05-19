<template>
  <section class="section about" id="olimpiadas" aria-label="about">
    <div class="container">
      <div class="about-banner img-holder" style="--width: 720; --height: 960" data-aos="fade-right">
        <img
          src="../assets/imagenes/fotos/pruebas/Final/final6.webp"
          width="720"
          height="960"
          loading="lazy"
          alt="Participantes das Olimpíadas Rurais"
          class="img-cover image-animated"
        />

        <a href="https://www.instagram.com/reel/DAG9khKt8zi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer">
          <button class="play-btn" aria-label="Ver video explicativo">
            <ion-icon name="play" aria-hidden="true"></ion-icon>
          </button>
        </a>
      </div>

      <div class="about-content" data-aos="fade-left">
        <h2 class="h2 section-title">Sobre as Olimpíadas Rurais</h2>

        <p class="section-text">
          As Olimpíadas Rurais son un evento único que combina tradición,
          deporte e comunidade. Celebramos as nosas raíces mentres fomentamos o
          espírito competitivo e a cooperación entre participantes.
        </p>

        <h3 class="h3">Qué son?</h3>

        <p class="section-text">
          As Olimpíadas Rurais buscan unir á comunidade rural a través de
          actividades deportivas e culturais que resaltan a conexión coas
          tradicións locais. É unha oportunidade para preservar o legado rural
          mentres disfrutamos de competicións saudables e divertidas.
        </p>

        <h3 class="h3">Actividades destacadas</h3>

        <ul class="about-list">
          <li class="about-item">
            <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

            <p class="section-text">
              Competicións deportivas como carreiras de sacos, tiro de corda e
              outros xogos tradicionais.
            </p>
          </li>

          <li class="about-item">
            <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

            <p class="section-text">
              Exhibicións culturais e artísticas que celebran as tradicións da
              comunidade rural.
            </p>
          </li>

          <li class="about-item">
            <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

            <p class="section-text">
              Espazos de convivencia onde os participantes poden compartir
              experiencias e fortalecer lazos comunitarios.
            </p>
          </li>
        </ul>

        <h3 class="h3">A nosa misión</h3>

        <p class="section-text">
          Promover a identidade cultural das comunidades rurais e fortalecer o
          seu papel na sociedade contemporánea a través dun evento inclusivo,
          dinámico e enriquecedor.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
.about {
  background-color: var(--white-2);
}

.about-banner {
  position: relative;
  border-radius: var(--radius-5);
  overflow: hidden;
  margin-block-end: 25px;
  animation: fadeIn 1s ease-out;
}

.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white-1);
  color: var(--safety-orange);
  font-size: 32px;
  padding: 16px;
  border-radius: 50%;
  animation: pulse 1.5s ease-out infinite;
}

.about-content {
  animation: fadeIn 2s ease-out;
}

.about :is(.section-title, .section-text) {
  text-align: left;
}

.about .section-title {
  margin-block-end: 5px;
  animation: fadeIn 2.5s ease-out;
}

.about .section-text:not(:last-child) {
  margin-block-end: 18px;
  animation: fadeIn 3s ease-out;
}

.about .h3 {
  margin-block-end: 8px;
  animation: fadeIn 3.5s ease-out;
}

.about-list {
  margin-block: 15px 18px;
}

.about-item {
  display: flex;
  align-items: flex-start;
  gap: 5px;
  animation: fadeIn 4s ease-out;
}

.about-item ion-icon {
  color: var(--safety-orange);
  flex-shrink: 0;
  margin-block-start: 2px;
}

.about-item:not(:last-child) {
  margin-block-end: 12px;
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

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 1px var(--white-1);
  }
  100% {
    box-shadow: 0 0 0 25px transparent;
  }
}

@media (min-width: 768px) {
  .about-banner {
    max-width: 550px;
  }

  .about .section-text {
    max-width: unset;
    margin-inline: 0;
  }
}

@media (min-width: 992px) {
  .about .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 30px;
  }

  .about-banner {
    margin-block-end: 0;
  }
}

@media (min-width: 1200px) {
  .about .container {
    gap: 60px;
  }

  .about-item {
    gap: 7px;
  }

  .about-item ion-icon {
    font-size: 20px;
  }
}
</style>

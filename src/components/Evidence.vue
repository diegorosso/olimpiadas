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
          <h2>{{ selectedProject.title }}</h2>
          <p>{{ selectedProject.description }}</p>
          <button @click="closeModal" class="btn btn-secondary">Cerrar</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import lazos from "@/assets/carreraDeLazos.WEBP";


export default {
  data() {
    return {
      projects: [

        {
          title: "Carrera de Lazos",
          subtitle: "Destreza e Velocidade",
          alt: "Carrera de Lazos",
          img: lazos,
          description:
            "Carrera donde los participantes deben completar un circuito con obstáculos mientras portan lazos.",
        },
      ],
      selectedProject: null, // Proyecto seleccionado
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project; // Asigna el proyecto seleccionado
    },
    closeModal() {
      this.selectedProject = null; // Limpia el proyecto seleccionado
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

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  text-align: center;
}

.modal-content h2 {
  margin-bottom: 10px;
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  text-align: center;
}

.modal-content h2 {
  margin-bottom: 10px;
}

.modal-content p {
  margin-bottom: 20px;
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
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
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

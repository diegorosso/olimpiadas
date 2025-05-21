<template>
  <section class="section contact" id="contact" aria-label="contact">
    <div class="container">
      <h2 class="h2 section-title">Contáctanos para las Olimpiadas Rurais</h2>

      <p class="section-text">
        ¿Tienes dudas o necesitas más información sobre las Olimpiadas Rurais?
        Envíanos un mensaje y estaremos encantados de ayudarte.
      </p>

      <form class="contact-form" @submit.prevent="sendEmail">
        <div class="input-wrapper">
          <input
            type="text"
            name="name"
            aria-label="name"
            placeholder="Tu nombre*"
            required
            class="input-field"
            v-model="formData.name"
          />

          <input
            type="email"
            name="email_address"
            aria-label="email"
            placeholder="Correo electrónico*"
            required
            class="input-field"
            v-model="formData.email"
          />
        </div>

        <div class="input-wrapper">
          <input
            type="number"
            name="phone"
            aria-label="phone"
            placeholder="Número de teléfono"
            class="input-field"
            v-model="formData.phone"
          />
        </div>

        <textarea
          name="message"
          aria-label="message"
          placeholder="Tu mensaje...*"
          required
          class="input-field"
          v-model="formData.message"
        ></textarea>

        <label v-if="guidedVisit" class="checkbox-container">
          <input type="checkbox" v-model="formData.guidedVisit" />
          Visita guiada
        </label>

        <button
          type="submit"
          class="btn btn-primary"
          :class="{ disabled: !isValidForm() }"
        >
          <span v-if="!showSpinner">
            <ion-icon class="padding" name="paper-plane-sharp"></ion-icon>
            Enviar mensaje
          </span>
          <VueSpinner v-if="showSpinner" size="30" color="#fff" />
        </button>
      </form>

      <!-- Modal interno -->
      <div v-if="showModal" class="modal-backdrop" @click="closeModal">
        <div class="modal" @click.stop>
          <h3>{{ modalTitle }}</h3>
          <p>{{ modalContent }}</p>
          <button @click="closeModal" class="btn btn-primary">Cerrar</button>
        </div>
      </div>

      <!-- Información de contacto -->
      <ul class="contact-list">
        <li class="contact-item">
          <div class="contact-card">
            <div class="card-icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>
            <div class="card-content">
              <h3 class="h3 card-title">Correo Electrónico</h3>
              <a href="mailto:colectivohercules@gmail.com" class="card-link">
                colectivohercules@gmail.com
              </a>
            </div>
          </div>
        </li>

        <li class="contact-item">
          <div class="contact-card">
            <div class="card-icon">
              <ion-icon name="headset-outline" aria-hidden="true"></ion-icon>
            </div>
            <div class="card-content">
              <h3 class="h3 card-title">¿Hablámos?</h3>
              <a href="https://wa.me/34672523511" target="_blank" class="card-link">
                +34 672 523 511
              </a>
            </div>
          </div>
        </li>

        <li class="contact-item">
          <div class="contact-card">
            <div class="card-icon">
              <ion-icon name="share-social-outline" aria-hidden="true"></ion-icon>
            </div>
            <div class="card-content">
              <h3 class="h3 card-title">Redes Sociales</h3>
              <a href="https://www.instagram.com/olimpiadasrurais" target="_blank" class="card-link social-link">
                <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                Instagram
              </a>
              <a href="https://www.facebook.com/profile.php?id=61561890093532" target="_blank" class="card-link social-link">
                <ion-icon name="logo-facebook" aria-hidden="true"></ion-icon>
                Facebook
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import axios from "axios";
import { VueSpinner } from "vue3-spinners";

const props = defineProps({
  guidedVisit: Boolean,
});

const guidedVisit = ref(props.guidedVisit);

const showSpinner = ref(false);
const showModal = ref(false);
const modalTitle = ref("");
const modalContent = ref("");

const formData = ref({
  name: "",
  phone: "",
  email: "",
  message: "",
  guidedVisit: false,
});

watch(
  () => props.guidedVisit,
  (newVal) => {
    guidedVisit.value = newVal;
    if (newVal) formData.value.guidedVisit = true;
  }
);

const isValidForm = () => {
  const { name, email, message } = formData.value;
  return name !== "" && email.includes("@") && message !== "";
};

function closeModal() {
  showModal.value = false;
}

async function sendEmail() {
  showSpinner.value = true;

  const data = {
    service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    user_id: import.meta.env.VITE_EMAILJS_USER_ID,
    accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
    template_params: {
      to_name: "Equipo Olimpiadas Rurais",
      from_name: formData.value.name.split(" ")[0] || "",
      from_lastname: formData.value.name.split(" ").slice(1).join(" ") || "",
      from_email: formData.value.email,
      from_phone: formData.value.phone,
      message: formData.value.message,
      guidedVisit: formData.value.guidedVisit ? "Sí" : "No especifica",
    },
  };

  try {
    await axios.post("https://api.emailjs.com/api/v1.0/email/send", data, {
      headers: { "Content-Type": "application/json" },
    });

    showSpinner.value = false;
    modalTitle.value = "¡Mensaje enviado con éxito!";
    modalContent.value = "Gracias por contactarnos. Te responderemos pronto.";
    showModal.value = true;

    formData.value = {
      name: "",
      phone: "",
      email: "",
      message: "",
      guidedVisit: false,
    };
  } catch (error) {
    showSpinner.value = false;
    console.error(error);
    modalTitle.value = "¡Error inesperado!";
    modalContent.value = "No se pudo enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.";
    showModal.value = true;
  }
}
</script>

<style scoped>


.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  max-width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.contact {
  background-color: var(--white-2);
}

.contact .section-text {
  margin-block: 5px 35px;
}

.contact-form {
  background-color: var(--white-1);
  padding: 20px;
  border-radius: var(--radius-2);
  margin-block-end: 30px;
  box-shadow: var(--shadow-1);
}

.input-field {
  background-color: var(--white-2);
  color: var(--eerie-black);
  font-size: var(--fs-5);
  padding: 15px;
  border-radius: var(--radius-2);
  outline: 1px solid transparent;
  outline-offset: 0;
  margin-block-end: 15px;
}

.input-field::-webkit-inner-spin-button {
  display: none;
}

.input-field:focus {
  outline-color: var(--persian-rose);
}

.input-field::placeholder {
  transition: var(--transition-1);
}

.input-field:focus::placeholder {
  opacity: 0;
}

textarea.input-field {
  resize: vertical;
  min-height: 80px;
  height: 100px;
  max-height: 200px;
  overscroll-behavior: contain;
}

.checkbox {
  width: max-content;
  margin-block-start: 5px;
  accent-color: var(--persian-rose);
}

.label-link {
  display: inline-block;
  color: var(--persian-rose);
}

.label-link:is(:hover, :focus) {
  text-decoration: underline;
}

.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-block-end: 15px;
}

.checkbox-wrapper .label {
  font-size: var(--fs-6);
}

.contact-list {
  display: flex;
  justify-content: center;
  gap: 30px 12px;
}

.contact-item {
  width: calc(50% - 12px);
}

.contact-card {
  background-color: var(--white-1);
  padding: 20px;
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-1);
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.contact-card .card-icon {
  background-color: var(--cultured-2);
  color: var(--persian-rose);
  font-size: 25px;
  padding: 13px;
  border-radius: 50%;
  transition: var(--transition-1);
}

.contact-card:is(:hover, :focus) .card-icon {
  background-color: var(--persian-rose);
  color: var(--white-1);
}

.contact-card .card-title {
  margin-block-end: 5px;
}

.contact-card :is(.card-link, .card-address) {
  font-size: var(--fs-6);
  transition: var(--transition-1);
}

.contact-card .card-link:is(:hover, :focus) {
  color: var(--persian-rose);
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
}

.social-link ion-icon {
  font-size: 18px;
  color: var(--persian-rose);
  transition: var(--transition-1);
}

.social-link:hover ion-icon {
  color: var(--eerie-black);
}

@media (max-width: 574px) {
  .contact-list {
    flex-direction: column;
    align-items: stretch;
  }

  .contact-item {
    width: 100%;
  }
}

@media (min-width: 575px) {
  .input-wrapper {
    display: flex;
    gap: 15px;
  }

  .contact-item {
    min-width: calc(50% - 18px);
  }

  .contact-card {
    width: 360px;
  }
}

@media (min-width: 768px) {
  .contact-form {
    padding: 30px;
  }

  .contact-item {
    min-width: calc(50% - 12px);
  }
}

@media (min-width: 992px) {
  .checkbox-wrapper {
    margin-block: 20px;
  }

  .contact-item {
    min-width: calc(33.33% - 16.66px);
  }

  .contact-card {
    padding: 30px;
  }

  .contact-card .card-icon {
    font-size: 32px;
  }
}

@media (min-width: 1200px) {
  .contact-form {
    padding: 50px;
  }

  .contact-card {
    gap: 20px;
  }

  .contact-card .card-icon {
    padding: 15px;
  }
}
</style>

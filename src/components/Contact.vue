<template>
    <section class="section contact" id="contact" aria-label="contact">
      <div class="container">
        <h2 class="h2 section-title">Contáctanos para las Olimpiadas Rurais</h2>
  
        <p class="section-text">
          ¿Tienes dudas o necesitas más información sobre las Olimpiadas Rurais? Envíanos un mensaje y estaremos encantados de ayudarte.
        </p>
  
        <form action="" class="contact-form">
          <div class="input-wrapper">
            <input
              type="text"
              name="name"
              aria-label="name"
              placeholder="Tu nombre*"
              required
              class="input-field"
            />
  
            <input
              type="email"
              name="email_address"
              aria-label="email"
              placeholder="Correo electrónico*"
              required
              class="input-field"
            />
          </div>
  
          <div class="input-wrapper">
            <input
              type="text"
              name="subject"
              aria-label="subject"
              placeholder="Asunto"
              class="input-field"
            />
  
            <input
              type="number"
              name="phone"
              aria-label="phone"
              placeholder="Número de teléfono"
              class="input-field"
            />
          </div>
  
          <textarea
            name="message"
            aria-label="message"
            placeholder="Tu mensaje...*"
            required
            class="input-field"
          ></textarea>
  
          <button type="submit" class="btn btn-primary">Enviar mensaje</button>
        </form>
  
        <ul class="contact-list">
          <li class="contact-item">
            <div class="contact-card">
              <div class="card-icon">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
              </div>
  
              <div class="card-content">
                <h3 class="h3 card-title">Correo Electrónico</h3>
  
                <a href="mailto:info@olimpiadasrurais.com" class="card-link">info@olimpiadasrurais.com</a>
                <a href="mailto:contacto@olimpiadasrurais.com" class="card-link">contacto@olimpiadasrurais.com</a>
              </div>
            </div>
          </li>
  
          <li class="contact-item">
            <div class="contact-card">
              <div class="card-icon">
                <ion-icon name="map-outline" aria-hidden="true"></ion-icon>
              </div>
  
              <div class="card-content">
                <h3 class="h3 card-title">Visítanos</h3>
  
                <address class="card-address">
                  Calle Rural 27, Monte Alegre,<br />
                  RS, Brasil
                </address>
              </div>
            </div>
          </li>
  
          <li class="contact-item">
            <div class="contact-card">
              <div class="card-icon">
                <ion-icon name="headset-outline" aria-hidden="true"></ion-icon>
              </div>
  
              <div class="card-content">
                <h3 class="h3 card-title">Llámanos</h3>
  
                <a href="tel:+5551998765432" class="card-link">+55 51 99876 5432</a>
                <a href="tel:+5551987654321" class="card-link">+55 51 98765 4321</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </template>
  

<style scoped>
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
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px 12px;
}

.contact-item {
  min-width: 100%;
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

@media (min-width: 575px) {
  .input-wrapper {
    display: flex;
    gap: 15px;
  }

  .contact-item {
    min-width: calc(50% - 18px);
  }
}

@media (min-width: 768px) {
  .contact-form {
    padding: 30px;
  }

  .contact-item {
    min-width: calc(50% - 12.5px);
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

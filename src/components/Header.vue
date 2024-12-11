<template>
  <header class="header" :class="{ active: headerActive }" data-header>
    <div class="container">
      <img  src="../assets/imagenes/Sin título-1.png" alt="">

      <nav
        class="navbar container"
        :class="{ active: navbarActive }"
        data-navbar
      >
        <ul class="navbar-list">
          <li>
            <a href="#olimpiadas" class="navbar-link" @click="closeNavbar"
              >Que son</a
            >
          </li>
          <li>
            <a href="#project" class="navbar-link" @click="closeNavbar"
              >Pruebas</a
            >
          </li>
          <li>
            <a href="#blog" class="navbar-link" @click="closeNavbar"
              >Blog</a
            >
          </li>
          <li>
            <a href="#contact" class="navbar-link" @click="closeNavbar"
              >Contacto</a
            >
          </li>
          <li><a href="#" class="btn btn-primary">Máis información</a></li>
        </ul>
      </nav>

      <button
        class="nav-toggle-btn"
        aria-label="Toggle menu"
        @click="toggleNavbar"
      >
        <ion-icon
          name="menu-outline"
          class="open"
          v-if="!navbarActive"
        ></ion-icon>
        <ion-icon
          name="close-outline"
          class="close"
          v-if="navbarActive"
        ></ion-icon>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navbarActive: false, // Controla si el navbar está activo
      headerActive: false, // Controla si el header está activo en scroll
    };
  },
  methods: {
    toggleNavbar() {
      this.navbarActive = !this.navbarActive; // Alterna el estado del navbar
    },
    closeNavbar() {
      this.navbarActive = false; // Cierra el navbar cuando se hace clic en un enlace
    },
    handleScroll() {
      // Cambia el estado de 'headerActive' según el desplazamiento de la página
      this.headerActive = window.scrollY > 100;
    },
  },
  mounted() {
    // Agrega el event listener para el scroll cuando el componente está montado
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    // Elimina el event listener para evitar fugas de memoria
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--white-1);
  padding-block: 15px;
  border-block-end: 1px solid var(--cultured);
  z-index: 4;
  transition: var(--transition-1);
}

.header.active {
  filter: drop-shadow(var(--shadow-2));
}

.header > .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--ff-league-spartan);
  color: var(--black);
  font-size: 3.5rem;
  font-weight: var(--fw-700);
  line-height: 1;
}

.nav-toggle-btn {
  font-size: 40px;
}

.nav-toggle-btn.active .open,
.nav-toggle-btn .close {
  display: none;
}

.nav-toggle-btn .open,
.nav-toggle-btn.active .close {
  display: block;
}

.navbar {
  background-color: var(--white-1);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  max-width: calc(100% - 30px);
  width: 100%;
  padding-inline: 0;
  border: 1px solid var(--cultured);
  transition: 0.3s var(--cubic-out);
  max-height: 0;
  visibility: hidden;
  overflow: hidden;
}

.navbar.active {
  max-height: 320px;
  visibility: visible;
  transition-duration: 0.5s;
}

.navbar-list {
  padding: 20px 15px;
  padding-block-start: 10px;
  opacity: 0;
  transition: var(--transition-1);
}

.navbar.active .navbar-list {
  opacity: 1;
}

.navbar-link {
  color: var(--eerie-black);
  font-family: var(--ff-league-spartan);
  font-size: var(--fs-4);
  line-height: 1.2;
  padding-block: 8px;
  transition: var(--transition-1);
}

.navbar-link:is(:hover, :focus) {
  color: var(--red-crayola);
}

.header .btn {
  margin-block-start: 10px;
}

@media (min-width: 992px) {
  .nav-toggle-btn {
    display: none;
  }

  .navbar,
  .navbar.active {
    all: unset;
  }

  .navbar-list {
    all: unset;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .navbar-link {
    position: relative;
  }

  .navbar-link:is(:hover, :focus) {
    color: var(--eerie-black);
  }

  .navbar-link::after {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-image: var(--gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: var(--transition-2);
  }

  .navbar-link:is(:hover, :focus)::after {
    transform: scaleX(1);
  }

  .header .btn {
    margin-block-start: 0;
  }
}

</style>

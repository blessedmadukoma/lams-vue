<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "app",
  components: {
    Navigation,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 10px 40px;
  background-color: #090682;
  color: #fff;
  border-radius: 15px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover {
    // background-color: rgba(80, 78, 78, 0.7);
    background-color: #1310ac;
  }
}

.error {
    text-align: center;
    font-size: 12px;
    color: red;
  }

// .button-ghost {
//   color: #000;
//   padding: 0;
//   border-radius: 0;
//   margin-top: 50px;
//   font-size: 15px;
//   font-weight: 500;
//   background-color: transparent;
//   @media (min-width: 700px) {
//     margin-top: 0;
//     margin-left: auto;
//   }
//   i {
//     margin-left: 8px;
//   }
// }
// .button-light {
//   background-color: transparent;
//   border: 2px solid #fff;
//   color: #fff;
// }
// .button-inactive {
//   pointer-events: none !important;
//   cursor: none !important;
//   background-color: rgba(128, 128, 128, 0.5) !important;
// }
</style>

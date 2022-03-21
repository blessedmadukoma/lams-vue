<template>
  <div>
    <div v-if="!user" class="no-user grid">
      <div class="content">
        <div>
          <br /><br /><br />
          <h2>Control your lights <span class="easily">easily</span></h2>
          <br />
          <h4 style="width: 90%">
            Making light management easier, faster and better
          </h4>
        </div>
        <br />
        <router-link :to="{ name: 'Register' }"
          ><button class="signup-button">Sign up</button></router-link
        >
        <br />
        <router-link :to="{ name: 'Login' }"
          ><button class="login-button">Sign in</button></router-link
        >
      </div>
      <div><img class="woman" src="../assets/Icons/woman.png" alt="" /></div>

      <!-- <div class="img">
      <womanIcon />
    </div> -->
    </div>
    <div v-else>
      <div class="greetingsArea">
        <h4>
          {{ currentDateTime() }}
          <sun v-if="showSun" />
          <moon v-else />
          <!-- <img
            src="../assets/sun.png"
            alt=""
            style="width: 35px; height: 35px"
          /> -->
        </h4>

        <!-- <p :firstName="firstName">{{ firstName }},</p> -->
        <p>{{ this.$store.state.profileFirstName }},</p>
      </div>
      <section>
        <div class="blue500">
          <p>Total Energy Used</p>
          <!-- <p><b>500.0</b> Watt</p> -->
          <p>
            <b>{{ this.$store.state.totalEnergyUsed }}</b> kg/hr
          </p>
        </div>

        <div class="lights">
          <h4>LIGHTS</h4>
          <div class="lightSwitchButton">
            <div class="light-name">Light 1</div>
            <div class="switchContainer">
              <!-- put switch inside here boss -->
              <div class="toggle">
                <label class="switch">
                  <input
                    type="checkbox"
                    @click="editLight1"
                    v-model="light1Computed"
                  />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
            <div>
              <router-link :to="{ name: 'Lights' }"
                ><button class="view">View</button></router-link
              >
            </div>
          </div>

          <div class="lightSwitchButton">
            <div class="light-name">Light 2</div>
            <div class="switchContainer">
              <!-- put switch inside here boss  -->
              <div class="toggle">
                <label class="switch">
                  <input
                    type="checkbox"
                    @click="editLight2"
                    v-model="light2Computed"
                  />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
            <div>
              <router-link :to="{ name: 'Lights' }"
                ><button class="view">View</button></router-link
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import womanIcon from "@/assets/Icons/womanbulb.svg";
import sun from "@/assets/Icons/sun.svg";
import moon from "@/assets/Icons/moon.svg";

// firebase
// import firebase from "firebase/app";
import "firebase/auth";
// import db from "@/firebase/firebaseInit";

export default {
  name: "Home",
  components: {
    sun,
    moon,
  },
  data() {
    return {
      showSun: null,
      // checked: null,
    };
  },
  methods: {
    currentDateTime() {
      let message = "";
      const current = new Date();
      let time = current.getHours();
      if (time < 12) {
        message = "Good morning";
        this.showSun = true;
      } else if (time >= 12 && time <= 17) {
        message = "Good afternoon";
        this.showSun = true;
      } else if (time >= 18) {
        message = "Good evening";
        this.showSun = false;
      }

      return message;
    },

    async editLight1() {
      this.$store.dispatch("updateLight1state");
    },
    editLight2() {
      this.$store.dispatch("updateLight2state");
    },
  },
  created() {},
  computed: {
    user() {
      return this.$store.state.user;
    },
    light1Computed: {
      get() {
        return this.$store.state.light1state;
      },
      // change the value
      set() {
        // payload is the value being returned: either true or false
      },
    },
    light2Computed: {
      get() {
        return this.$store.state.light2state;
      },
      // change the value
      set() {
        // payload is the value being returned: either true or false
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  justify-content: center;
  margin-top: 80px;
}
h4 {
  font-weight: 400;
}
h2 {
  font-size: 30px;
}
.easily {
  color: #2336e5;
  // font-size: 42px;
  font-weight: bolder;
}
.grid div.content {
  padding-left: 5%;
}

.grid div:last-child {
  width: 50%;
  margin-left: 35px;
}

@media screen and (max-width: 660px) {
  .grid div:last-child {
    display: none;
  }

  .grid {
    justify-content: center;
  }

  .content {
    width: 70%;
  }
}

.grid div:last-child img {
  width: 100%;
}

.signup-button {
  width: 90%;
  border-radius: 10px;
  border-color: #090682;
  height: 50px;
  margin: 10px 0;
  background-color: #090682;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.login-button {
  width: 90%;
  border-radius: 10px;
  border-color: #090682;
  height: 50px;
  margin: 10px 0;
  background-color: #efeeee;
  color: #090682;
  font-weight: semibold;
  cursor: pointer;
}

// Dashboard styling
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.isDay {
  top: 50px;
}
.toggle {
  position: absolute;
  // top: 50%;
  // left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
}
h1 {
  margin-bottom: 40px;
  font-family: sans-serif;
}
.switch {
  position: relative;
  display: inline-block;
  width: 110px;
  height: 60px;
  margin: 0 10px;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.switch input {
  display: none;
}

.slider:before {
  position: absolute;
  content: "";
  height: 50px;
  width: 50px;
  left: 5px;
  bottom: 5px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50px;
}

input:checked + .slider {
  background-color: #0cc61f;
}

input:checked + .slider:before {
  transform: translateX(50px);
}

.greetingsArea {
  width: 100vw;
  position: relative;
  top: 60px;
}

.greetingsArea h4 {
  padding-top: 5px;
  font-size: 2rem;
}

.greetingsArea p {
  padding-top: 15px;
  padding-bottom: 5px;
  font-size: 1.8rem;
}

.greetingsArea h4,
.greetingsArea p {
  position: relative;
  left: 5vw;
}

/* section that contains power used and lights flicker  */

section {
  position: relative;
  width: 100vw;
  top: 100px;
  display: flex;
  flex-direction: row;
}

section .blue500 {
  width: 40vw;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  left: 5vw;
  background-image: linear-gradient(to right, #5754f3, #141292);
  height: 290px;
  text-align: center;
  border-radius: 15px;
}

section .blue500 p {
  padding: 25px;
  font-size: 2rem;
}

section .lights {
  left: 10vw;
  width: 50vw;
  position: relative;
}

/* div that contains light text, the switch and the view button  */

.lightSwitchButton {
  display: flex;
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lights h4 {
  font-size: 2rem;
  padding-bottom: 5px;
}

.light-name {
  font-size: 30px;
}

.switchContainer {
  margin: auto;
}

button.view {
  position: relative;
  right: 5vw;
  background-color: transparent;
  border: 1px solid black;
  color: black;
  font-size: 20px;
  outline: none;
  padding: 15px 35px;
  border-radius: 6px;
}

@media (max-width: 870px) {
  html,
  body {
    position: relative;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }

  section .blue500 {
    width: 90vw;
    margin-bottom: 55px;
    position: relative;
    left: 0;
  }

  section .lights {
    width: 90vw;
    position: relative;
    left: 0;
  }
}
// Ends here

// }
// .woman {
//   width: 60%;
//   // @media (max-width: 500px) {
//   //   display: none;
//   // }
// }
// .grid {
//   margin-top: 90px;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 10px;
//   justify-content: space-between;
//   align-items: center;
//   height: 100%;
//   width: 100%;
//   border: 1px solid red;
// }

// .home {
//   .content {
//     margin-left: 70px;
//   }

//   .content button {
//     width: 40%;
//     border-radius: 20px;
//     height: 50px;
//     margin: 10px 0;
//     @media (max-width: 700px) {
//       justify-content: center;
//       align-items: center;
//     }
//     // @media (min-width: 700px) {
//     //   order: 1;
//     // }
//     // @media (min-width: 800px) {
//     //   flex: 3;
//     // }
//   }

//   .grid {
//     margin-top: 90px;
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 10px;
//     justify-content: space-between;
//     align-items: center;
//     height: 100%;
//   }
//   // @media (min-width: 700px) {
//   //   min-height: 650px;
//   //   max-height: 650px;
//   //   flex-direction: column;
//   // }

//   h2 {
//     font-size: 60;
//     .easily {
//       color: #2336e5;
//       font-weight: 900;
//     }
//   }

//   // i {
//   //   margin-left: 8px;
//   // }
// }
// // .no-user:first-child {
// //   .content {
// //     background-color: #303030;
// //     color: #fff;
// //   }
// // }
</style>

<template>
  <div>
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

      <p :firstName="firstName">{{ firstName }},</p>
    </div>
    <section>
      <div class="blue500">
        <p>Total Power Used</p>
        <p><b>500.0</b> Watt</p>
      </div>

      <div class="lights">
        <h4>LIGHTS</h4>
        <div class="lightSwitchButton">
          <div class="light-name">Light 1</div>
          <div class="switchContainer">
            <!-- put switch inside here boss -->
            <div class="toggle">
              <label class="switch">
                <input type="checkbox" v-model="editPost" />
                <span class="slider"></span>
              </label>
            </div>
          </div>
          <div><button class="view">View</button></div>
        </div>

        <div class="lightSwitchButton">
          <div class="light-name">Light 2</div>
          <div class="switchContainer">
            <!-- put switch inside here boss  -->
            <div class="toggle">
              <label class="switch">
                <input type="checkbox" v-model="editPost" />
                <span class="slider"></span>
              </label>
            </div>
          </div>
          <div><button class="view">View</button></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import womanIcon from "@/assets/Icons/womanbulb.svg";
import sun from "@/assets/Icons/sun.svg";
import moon from "@/assets/Icons/moon.svg";
export default {
  name: "Dashboard",
  components: {
    //     womanIcon,
    sun,
    moon,
  },
  // props: ["showSun"],
  data() {
    return {
      firstName: "Daniel",
      showSun: null,
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
  },
  created() {
  },
  computed: {
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      // change the value
      set(payload) {
        // payload is the value being returned: either true or false
        this.$store.commit("toggleLight", payload);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
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

@media (max-width: 660px) {
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

  // button.view {
  //   position: relative;
  //   right: 0;
  //   background-color: transparent;
  //   border: 1px solid black;
  //   outline: none;
  //   padding: 10px;
  //   border-radius: 5px;
  // }
}
// .gradient {
//   box-sizing: border-box;
//   background: linear-gradient(rgba(95, 92, 255, 1), rgba(8, 6, 129, 1));
//   width: 605px;
//   height: 306px;
// }

// .text {
//   padding-top: 50px;
//   color: white;
//   text-align: center;
// }

// h4 {
//   font-size: 34px;
// }

// .light1 {
//   position: relative;

//   .toggle-edit {
//     display: flex;
//     align-items: center;
//     position: absolute;
//     // top: -70px;
//     right: 0;

//     span {
//       margin-right: 16px;
//     }

//     input[type="checkbox"] {
//       position: relative;
//       border: none;
//       -webkit-appearance: none;
//       background: #c6bbbb;
//       outline: none;
//       width: 80px;
//       height: 30px;
//       border-radius: 20px;
//       box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//         0 2px 4px -1px rgba(0, 0, 0, 0.06);
//     }

//     input[type="checkbox"]:before {
//       content: "";
//       position: absolute;
//       width: 30px;
//       height: 30px;
//       border-radius: 20px;
//       top: 0;
//       left: 0;
//       background: #fdfdfd;
//       transform: scale(1.1);
//       transition: 300ms ease all;
//       box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//         0 2px 4px -1px rgba(0, 0, 0, 0.06);
//     }

//     input:checked[type="checkbox"]:before {
//       background: #0cc61f;
//       left: 52px;
//     }
//   }
// }
// // old
// .grid {
//   display: flex;
//   justify-content: center;
//   margin-top: 80px;
// }
// h4 {
//   font-weight: 400;
// }
// h2 {
//   font-size: 25px;
// }
// @media screen and (max-width: 660px) {
//   // .grid div:last-child {
//   //   display: none;
//   // }

//   .grid {
//     justify-content: center;
//   }
// }

// .grid div:last-child img {
//   width: 100%;
// }
</style>

<template>
  <div class="form-wrap">
    <form class="login">
      <div>
        <h1>Welcome Back!</h1>
        <h4 style="font-weight: 400">Sign in to continue</h4>
      </div>
      <br /><br />
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" :to="{ name: 'Register' }"
          >Register</router-link
        >
      </p>
      <div class="inputs">
        <label><span style="color: red">*</span> Email:</label>
        <div class="input" style="padding: 2px 0">
          <input
            type="text"
            placeholder="Enter your email..."
            v-model="email"
            required
          />
          <email class="icon" />
        </div>
        <div style="padding: 6px 0"></div>
        <label><span style="color: red">*</span> Password:</label>
        <div class="input" style="padding: 2px 0">
          <input
            type="password"
            placeholder="Enter your password..."
            v-model="password"
            required
          />
          <password class="icon" />
        </div>
        <div class="error" v-show="error">{{ this.errorMsg }}</div>
      </div>
      <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }"
        >Forgot your password?</router-link
      >
      <button @click.prevent="signIn">Sign In</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "@/assets/Icons/envelope-regular.svg";
import password from "@/assets/Icons/lock-alt-solid.svg";

// firebase
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Login",
  components: {
    email,
    password,
  },
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "Home" });
          this.error = false;
          this.errorMsg = "";
          // console.log(firebase.auth().currentUser.uid);
        })
        .catch((err) => {
          if (this.email == "" && this.password == "") {
            this.errorMsg = "Empty email and password fields!"
          } else if (this.email == "") {
            this.errorMsg = "Empty email field!"
          } else if (this.password == "") {
            this.errorMsg = "Empty password field!"
          } else {
            this.errorMsg = err.message;
          }
          this.error = true;
          // this.errorMsg = err.message;
        });
    },
  },
};
</script>

<style lang="scss">
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  justify-self: center;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 900px) {
    width: 100%;
  }

  .login-register {
    margin-bottom: 32px;

    .router-link {
      color: black;
    }
  }

  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    @media (min-width: 900px) {
      padding: 0 50px;
    }

    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;

      @media (min-width: 900px) {
        font-size: 40px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;

      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        border: red;
        border-radius: 5px;
        input {
          width: 100%;
          border: 1.4px solid #090682;
          border-radius: 6px;
          background-color: #ffffff;
          padding: 4px 4px 4px 30px;
          height: 40px;

          &:focus {
            outline: none; //border on the input field
          }
        }

        .icon {
          width: 12px;
          position: absolute;
          left: 6px;
        }
      }
    }

    .forgot-password {
      text-decoration: none;
      color: black;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;

      &:hover {
        border-color: #303030;
      }
    }

    .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      transform: rotateZ(3deg); // rotate the image
      width: 60px;
      right: -30px; // 30px from the right side ...not sure for this
      height: 101%;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }

  .background {
    display: none;
    flex: 2;
    background-size: cover;
    // background-color: #c8c5c5;
    background-image: url("../assets/background.png");
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>

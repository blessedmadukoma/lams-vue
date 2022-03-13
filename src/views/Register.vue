<template>
  <div class="form-wrap">
    <form class="register">
      <div>
        <h1>Welcome To LAMS!</h1>
        <h4 style="font-weight: 400">Create an account to begin</h4>
      </div>
      <br /><br />
      <div class="inputs">
        <label>First Name:</label>
        <div class="input" style="padding: 5px 0">
          <input
            type="text"
            placeholder="Enter first name..."
            v-model="firstName"
          />
          <user class="icon" />
        </div>
        <div style="padding: 6px 0"></div>
        <label>Last Name:</label>
        <div class="input" style="padding: 5px 0">
          <input
            type="text"
            placeholder="Enter last name..."
            v-model="lastName"
          />
          <user class="icon" />
        </div>
        <div style="padding: 6px 0"></div>
        <label>Email:</label>
        <div class="input" style="padding: 5px 0">
          <input type="text" placeholder="Enter Email..." v-model="email" />
          <email class="icon" />
        </div>
        <div style="padding: 6px 0"></div>
        <label>Password:</label>
        <div class="input" style="padding: 5px 0">
          <input
            type="password"
            placeholder="Enter Password..."
            v-model="password"
          />
          <password class="icon" />
        </div>
        <div class="error" v-show="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register">Sign Up</button><br /><br />
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }"
          >Login</router-link
        >
      </p>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "@/assets/Icons/envelope-regular.svg";
import password from "@/assets/Icons/lock-alt-solid.svg";
import user from "@/assets/Icons/user-alt-light.svg";

// firebase
import firebase from "firebase/app";
import "firebase/auth";
import db from "@/firebase/firebaseInit";
export default {
  name: "Register",
  components: {
    email,
    password,
    user,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    // Registration function
    async register() {
      console.log("Email:", this.email);
      if (
        this.email !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.password !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await createUser;

        // reach out to firebase collection to get our users -> if it doesn't exist, it creates a new one
        const dataBase = db.collection("users").doc(result.user.uid); // getting the ID of the result
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
        });

        const lights = db.collection("lights").doc(result.user.uid); // getting the ID of the result
        await lights.set({
          name: "Light 1",
          state: true,
        });
        await lights.set({
          name: "Light 2",
          state: false,
        });
        console.log(lights);

        this.$router.push({ name: "Home" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill all the fields";
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>

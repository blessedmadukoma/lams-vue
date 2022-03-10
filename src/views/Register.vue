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
      </div>
      <button>Sign Up</button><br /><br />
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
export default {
  name: "Register",
  components: {
    email,
    password,
    user,
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    };
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

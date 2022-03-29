<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link
          class="header"
          :to="{ name: 'Home' }"
          style="color: #2336e5"
          >LAMS</router-link
        >
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" v-if="user" :to="{ name: 'Home' }"
            >Dashboard</router-link
          >
          <!-- <router-link class="link" v-if="user" :to="{ name: 'Lights' }"
            >Lights</router-link 
          > -->
          <router-link class="link" v-if="!user" :to="{ name: 'Register' }"
            >Sign up</router-link
          >
          <router-link v-if="!user" class="link" :to="{ name: 'Login' }"
            >Sign in</router-link
          >
        </ul>
        <div
          v-if="user"
          v-show="!mobile"
          @click.prevent="toggleProfileMenu"
          class="profile"
          ref="profile"
        >
          <span>{{ this.$store.state.profileInitials }}</span>
          <div v-show="profileMenu" class="profile-menu">
            <div class="info">
              <p class="initials">{{ this.$store.state.profileInitials }}</p>
              <div class="right">
                <p>
                  {{ this.$store.state.profileFirstName }}
                  {{ this.$store.state.profileLastName }}
                </p>
                <p>{{ this.$store.state.profileEmail }}</p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link :to="{ name: 'Profile' }" class="option">
                  <userIcon class="icon" />
                  <p>Profile</p>
                </router-link>
              </div>
              <!-- <div class="option">
                <router-link :to="{ name: 'Admin' }" class="option">
                  <adminIcon class="icon" />
                  <p>Admin</p>
                </router-link>
              </div> -->
              <div @click="signOut" class="option">
                <signOutIcon class="icon" />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <!-- If the person is not signed in: do this on -->
        <router-link class="link" v-if="user" :to="{ name: 'Home' }"
          >Dashboard</router-link
        >
        <!-- <router-link class="link" v-if="user" :to="{ name: 'Lights' }"
          >Lights</router-link
        > -->
        <router-link v-if="user" :to="{ name: 'Profile' }" class="link">
          <p>Profile</p>
        </router-link>
        <p class="link" v-if="user" @click="signOut">Sign out</p>
        <router-link class="link" v-if="!user" :to="{ name: 'Register' }"
          >Sign up</router-link
        >
        <router-link class="link" v-if="!user" :to="{ name: 'Login' }"
          >Sign in</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "@/assets/Icons/bars-regular.svg";
import userIcon from "@/assets/Icons/user-alt-light.svg";
// import adminIcon from "@/assets/Icons/user-crown-light.svg";
import signOutIcon from "@/assets/Icons/sign-out-alt-regular.svg";

// firebase
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "navigation",
  components: {
    menuIcon,
    userIcon,
    // adminIcon,
    signOutIcon,
  },
  data() {
    return {
      profileMenu: null,
      mobile: null, // mobile version
      mobileNav: null, // mobile nav is open
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen;
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleProfileMenu() {
      this.profileMenu = !this.profileMenu;
    },
    signOut() {
      firebase.auth().signOut();
      window.location.reload();
      // redirect user to log in page
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      // color: #1eb8b8;
      color: #2723fa;
    }
  }
  nav {
    display: flex;
    padding: 20px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: black;
        text-decoration: none;
      }
    }
    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 32px;

        .link {
          margin-right: 32px;
        }

        .link:last-child {
          margin-right: 0;
        }
      }
      .profile {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #fff;
        background-color: #303030;
        span {
          pointer-events: none;
        }
        .profile-menu {
          position: absolute;
          top: 60px;
          right: 0;
          width: 250px;
          background-color: #303030;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          .info {
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #fff;
            .initials {
              position: initial;
              width: 40px;
              height: 40px;
              background-color: #fff;
              color: #303030;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
            }
            .right {
              flex: 1;
              margin-left: 24px;
              p:nth-child(1) {
                font-size: 14px;
              }
              p:nth-child(2),
              p:nth-child(3) {
                font-size: 12px;
              }
            }
          }
          .options {
            padding: 15px;
            .option {
              text-decoration: none;
              color: #fff;
              display: flex;
              align-items: center;
              margin-bottom: 12px;
              .icon {
                width: 18px;
                height: auto;
              }
              p {
                font-size: 14px;
                margin-left: 12px;
              }
              &:last-child {
                margin-bottom: 0px;
              }
            }
          }
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 35%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #090682;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: #fff;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 0.3s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}

// header {
//   background-color: #fff;
//   padding: 0 25px;
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//     0 2px 4px -1px rgba(0, 0, 0, 0.06);
//   z-index: 99;
//   width: 100% !important;

//   .link {
//     font-weight: 500;
//     padding: 0 8px;
//     transition: 0.3s color ease;

//     &:hover {
//       // color: #1eb8b8;
//       color: #2723fa;
//     }
//   }
//   nav {
//     display: flex;
//     padding: 15px 0;

//     .branding {
//       display: flex;
//       align-items: center;

//       .header {
//         font-weight: 600;
//         font-size: 24px;
//         color: black;
//         text-decoration: none;
//       }
//     }
//     .nav-links {
//       position: relative;
//       display: flex;
//       flex: 1;
//       align-items: center;
//       justify-content: flex-end;

//       ul {
//         margin-right: 32px;

//         .link {
//           margin-right: 32px;
//         }

//         .link:last-child {
//           margin-right: 0;
//         }
//       }
//     }
//   }

//   .menu-icon {
//     cursor: pointer;
//     position: absolute;
//     top: 20px;
//     right: 25px;
//     height: 25px;
//     width: auto;
//   }

//   .mobile-nav {
//     padding: 20px;
//     width: 50%;
//     max-width: 200px;
//     display: flex;
//     flex-direction: column;
//     position: fixed;
//     height: 100%;
//     background-color: #090682;
//     top: 0;
//     left: 0;

//     .link {
//       padding: 15px 0;
//       color: #fff;
//     }
//   }

//   .mobile-nav-enter-active,
//   .mobile-nav-leave-active {
//     transition: all 0.4s ease;
//   }

//   .mobile-nav-enter {
//     transform: translateX(-250px);
//   }

//   .mobile-nav-enter-to {
//     transform: translateX(0);
//   }
//   .mobile-nav-leave-to {
//     transform: translateX(-250px);
//   }
// }
</style>

<template>
  <div class="no-user grid">
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
      <router-link to="#"
        ><button class="signup-button">Sign up</button></router-link
      >
      <br />
      <router-link to="#"
        ><button class="login-button">Sign in</button></router-link
      >
    </div>
    <div><img class="woman" src="../assets/Icons/woman.png" alt="" /></div>

    <!-- <div class="img">
      <womanIcon />
    </div> -->
  </div>
</template>

<script>
// import womanIcon from "@/assets/Icons/womanbulb.svg";
export default {
  name: "Home",
  components: {
    //     womanIcon,
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
}
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

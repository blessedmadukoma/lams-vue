import Vue from "vue";
import Vuex from "vuex";

// firebase
import firebase from "firebase/app";
import "firebase/auth";
import db from "@/firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // to know if the user is logged in, add state
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileID: null,
    profileInitials: null,
    light1: null,
    light1state: null,
    light2: null,
    light2state: null,

    // remaining stuff for the lights
    currentEnergy1: null,
    currentTime1: null,
    currentEnergy2: null,
    currentTime2: null,
    totalEnergyUsed: null,
    totalTime: null,
  },

  mutations: {
    setToggleLight1(state, payload) {
      state.light1state = payload;
      // console.log("Light 1:", state.light1state);
    },
    setToggleLight2(state, payload) {
      state.light2state = payload;
      // console.log("Light 2:", state.light2state);
    },

    // set the name of the light
    setLight1Name(state, payload) {
      state.light1 = payload;
      // console.log("Light 1:", state.light1);
    },
    setLight2Name(state, payload) {
      state.light2 = payload;
      // console.log("Light 2:", state.light2state);
    },

    updateUser(state, payload) {
      state.user = payload;
    },

    setProfileInfo(state, doc) {
      // state.profileID = doc.id;
      // state.profileEmail = doc.data().email;
      // state.profileFirstName = doc.data().firstName;
      // state.profileLastName = doc.data().lastName;
      // state.light1 = doc.data().light1;
      // state.light1state = doc.data().light1state;
      // state.light2 = doc.data().light2;
      // state.light2state = doc.data().light2state;

      // // add these when you have the functions ready
      // state.currentEnergy1 = doc.data().currentEnergy1;
      // state.currentTime1 = doc.data().currentTime1;
      // state.currentEnergy2 = doc.data().currentEnergy2;
      // state.currentTime2 = doc.data().currentTime2;
      // state.totalEnergyUsed = doc.data().totalEnergyUsed;
      // state.totalTime = doc.data().totalTime;
      state.profileID = doc.id;
      state.profileEmail = doc.ref("users").email;
      state.profileFirstName = doc.ref("users").firstName;
      state.profileLastName = doc.ref("users").lastName;
      state.light1 = doc.ref("users").light1;
      state.light1state = doc.ref("users").light1state;
      state.light2 = doc.ref("users").light2;
      state.light2state = doc.ref("users").light2state;

      // add these when you have the functions ready
      state.currentEnergy1 = doc.ref("users").currentEnergy1;
      state.currentTime1 = doc.ref("users").currentTime1;
      state.currentEnergy2 = doc.ref("users").currentEnergy2;
      state.currentTime2 = doc.ref("users").currentTime2;
      state.totalEnergyUsed = doc.ref("users").totalEnergyUsed;
      state.totalTime = doc.ref("users").totalTime;
    },

    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      // const dataBase = await db
      //   .collection("users")
      //   .doc(firebase.auth().currentUser.uid);
      const dataBase = await db.ref(`/users/${firebase.auth().currentUser.uid}`)
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
    },

    async updateUserSettings({ commit, state }) {
      // const dataBase = await db.collection("users").doc(state.profileID);
      
      const dataBase = await db.ref(`/users/${state.profileID}`);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
      });
      commit("setProfileInitials");
    },

    async updateLight1state({ commit, state }) {
      // console.log("State opposite: ", !state.light1state);
      if (!state.light1state == true) {
        // const dataBase = await db
        //   .collection("users")
        //   .doc(firebase.auth().currentUser.uid);
        const dataBase = await db.ref(`/users/${firebase.auth().currentUser.uid}`)
        await dataBase.update({
          light1state: !state.light1state,
          light1Tag: "switch1on",
        });
        commit("setToggleLight1", !state.light1state);
      } else {
        // const dataBase = await db
        //   .collection("users")
        //   .doc(firebase.auth().currentUser.uid);
        const dataBase = await db.ref(`/users/${firebase.auth().currentUser.uid}`)
        await dataBase.update({
          light1state: !state.light1state,
          light1Tag: "switch1off",
        });
        commit("setToggleLight1", !state.light1state);
      }
    },

    async updateLight2state({ commit, state }) {
      if (!state.light2state == true) {
        // const dataBase = await db
        //   .collection("users")
        //   .doc(firebase.auth().currentUser.uid);
        const dataBase = await db.ref(`/users/${firebase.auth().currentUser.uid}`)
        await dataBase.update({
          light2state: !state.light2state,
          light2Tag: "switch2on",
        });
        commit("setToggleLight2", !state.light2state);
      } else {
        // const dataBase = await db
        //   .collection("users")
        //   .doc(firebase.auth().currentUser.uid);
        const dataBase = await db.ref(`/users/${firebase.auth().currentUser.uid}`)
        await dataBase.update({
          light2state: !state.light2state,
          light2Tag: "switch2off",
        });
        commit("setToggleLight2", !state.light2state);
      }
    },

    async updateLight1Name({ commit, state }) {
      // const dataBase = await db
      //   .collection("users")
      //   .doc(firebase.auth().currentUser.uid);
      const dataBase = await db.ref(`/users/${firebase.auth().currentUser.uid}`)
      await dataBase.update({
        light1: state.light1,
      });
      commit("setLight1Name", state.light1);
    },

    async updateLight2Name({ commit, state }) {
      // const dataBase = await db
      //   .collection("users")
      //   .doc(firebase.auth().currentUser.uid);
      const dataBase = await db.ref(`/users/${firebase.auth().currentUser.uid}`)
      await dataBase.update({
        light2: state.light2,
      });
      commit("setLight2Name", state.light2);
    },
  },
  modules: {},
});

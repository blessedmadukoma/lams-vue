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

    // state for lights either on or off
    light1SwitchState: null,
    light2SwitchState: null,

    // state for the energy
    switch1Energy: null,
    switch2Energy: null,
  },
  mutations: {
    toggleLight1(state, payload) {
      state.editLight1 = payload;
      console.log("Light 1:", state.editLight1);
    },
    toggleLight2(state, payload) {
      state.editLight2 = payload;
      console.log("Light 2:", state.editLight2);
    },

    updateUser(state, payload) {
      state.user = payload;
    },

    setProfileInfo(state, doc) {
      state.profileID = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
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
      const dataBase = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
    },

    async updateUserSettings({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileID);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
      });
      commit("setProfileInitials");
    },
    // get light 1, set the state - light1switchstate
    // get light 2, set the state - light2switchstate
  },
  modules: {},
});

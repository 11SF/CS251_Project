import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import jwt_decode from 'jwt-decode';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginStatus : "notLogin",
    userData : "",
    toggle: false,
    studentSelect: "",
    subjectSelect : ""
  },
  mutations: {
    LOGIN(state,payload) {
      state.loginStatus = 'Login'
      state.userData = jwt_decode(payload.data.token)
      localStorage.setItem('userKey', payload.data.token)
    },
    LOGOUT(state) {
      state.loginStatus = 'notLogin'
      state.userData = ""
      localStorage.removeItem('userKey')
    },
    CHECKLOGIN(state) {
      state.loginStatus = 'Login',
      state.userData = jwt_decode(localStorage.getItem('userKey'))
    },
    SETTOGGLE(state) {
      state.toggle = !state.toggle;
    },
    STUDENTSELECT(state,payload) {
      state.studentSelect = payload
    },
    SUBJECTSELECT(state,payload) {
      state.subjectSelect = payload
    }
  },
  actions: {
    async Login(context, forms) {
      let user = await axios.post("/login",forms)
      if(user.status) {
        context.commit('LOGIN', user) 
      } else {
        console.log(user.status)
      }
    },
    logout(context) {
      context.commit('LOGOUT')
    },
    checkLogin(context) {
      if(localStorage.getItem('userKey') != null) {
        context.commit('CHECKLOGIN')
      }
    },
    toggle(context) {
      context.commit('SETTOGGLE')
    },
    studentSelect(context,StudentCitizenID) {
      context.commit('STUDENTSELECT', StudentCitizenID)
    },
    SubjectSelect(context,subject) {
      context.commit('SUBJECTSELECT',subject)
    }
  },
  getters: {
    getLoginStatus(state) {
      return state.loginStatus
    },
    getUserData(state) {
      return state.userData
    },
    getMembersData(state) {
      return state.membersData
    },
    getLevelUser(state) {
      return state.userLevel
    },
    getLoadingStatus(state) {
      return state.loadingStatus
    },
    getToggle(state) {
      return state.toggle
    },
    getStudentSelect(state) {
      return state.studentSelect
    },
    getSubjectSelect(state) {
      return state.subjectSelect
    }
  },
  computed: {
    localStorage_data() {
      return localStorage.getItem('userKey')
    }
  },
  watch: {
    localStorage_data(newData,state)  {
      if(newData == null) {
        state.loginStatus = 'notLogin'
      }
    }
  },
});

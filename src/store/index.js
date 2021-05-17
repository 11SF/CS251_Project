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
    subjectSelect : "",
    academicData: {
      Term: "",
      Year: ""
    },
    systemData: {
      poll: ""
    }
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
    },
    ACADEMICSTATE(state,payload) {
      state.academicData.Term = payload.term[0].Status
      state.academicData.Year = payload.year[0].Status
    },
    POLLSTATE(state,payload) {
      state.systemData.poll = payload
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
    },
    academicData(context) {
      let result = {
        "year" : "",
        "term" : ""
      }
      axios.get('/user/get/state',{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userKey")}`,
        },
        params: {
          Name: "year"
        }
      }).then(res=> {
        result.year = res.data.data
        axios.get('/user/get/state',{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            Name: "term"
          }
        }).then(res=> {
          result.term = res.data.data
          context.commit('ACADEMICSTATE',result)
        })
      })
    },
    pollState(context) {
      axios.get('/user/get/state',{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userKey")}`,
        },
        params: {
          Name: "poll"
        }
      }).then(res => {
        context.commit('POLLSTATE',res.data.data[0].Status)
      })
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
    },
    getAcademicState(state) {
      return state.academicData
    },
    getPollState(state) {
      return state.systemData.poll
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

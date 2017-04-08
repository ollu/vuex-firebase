import Vuex from 'vuex'
import Vue from 'vue'
import Firebase from 'firebase'

Vue.use(Vuex)

let config = {
  live: {
    apiKey: 'XYZ',
    authDomain: 'YOUR-APP.firebaseapp.com',
    databaseURL: 'https://YOUR-APP.firebaseio.com',
    projectId: 'YOUR-APP',
    storageBucket: 'YOUR-APP.appspot.com',
    messagingSenderId: '666'
  },
  dev: {
    apiKey: 'XYZ',
    authDomain: 'YOUR-APP.firebaseapp.com',
    databaseURL: 'https://YOUR-APP.firebaseio.com',
    projectId: 'YOUR-APP',
    storageBucket: 'YOUR-APP.appspot.com',
    messagingSenderId: '666'
  }
}

let activeConfig = config.dev

if (window.location.host.indexOf('YOUR-DOMAIN.NU') !== -1) {
  activeConfig = config.live
}

Firebase.initializeApp(activeConfig)
let db = Firebase.database()

let store = new Vuex.Store({
  state: {
    data: ''
  },
  mutations: {
    updateData (state, data) {
      state.data = data
    }
  },
  actions: {
    loadData ({ commit }) {
      let statsRef = db.ref('TABLE-NAME')
      statsRef.on('value', data => {
        commit('updateData', data.val())
      })
    }
  }
})

export default store

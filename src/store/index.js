// add readonly to input statement from vue to export
// readonly copy of state to prevent two-way binding
import { reactive } from "vue";
// import path from 'path';
// import { getCompState } from 'point-of-vue';
//import { getCompState } from '../../node_modules/w-point-of-vue/dist/devtools.js';




const state = reactive({
  counter: 0,
  colorCode : 'blue'
})

//getCompState(state, 'state');

// console.log("state:", state);
// console.log('state.get', state.get);
//console.log(typeof state)

const methods = {
  decreaseCounter () {
    state.counter -= 1;
 },

  increaseCounter () {
    state.counter += 1;
 },
//  uncomment if using readonly
//  setColorCode (val) {
//   state.colorCode = val;
//  }
}

const getters = {
  counterSquared() {
    return state.counter * state.counter;
  } 
}

export default {
  // switch lines below to enable readonly
  // state: readonly(state,)
  state,
  methods,
  getters
}
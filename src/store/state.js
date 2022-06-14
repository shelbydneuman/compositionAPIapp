// add readonly to input statement from vue to export
// readonly copy of state to prevent two-way binding
import { reactive } from "vue";
// import path from 'path';





const state = reactive({
  counter: 0,
  colorCode : 'blue'
})


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

export {
  // switch lines below to enable readonly
  // state: readonly(state,)
  state,
  methods,
  getters
}
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div 
    :style="{ color: store.state.colorCode }"
    class="counter"  
    >
      {{ store.state.counter }}
    </div>
    <div class="squared">
      {{ store.state.counter }}
      <sup>2</sup> =
      {{ store.getters.counterSquared() }}
    </div>
    <div class="buttons">
      
      <button @click="store.methods.decreaseCounter">-</button>
      <button @click="store.methods.increaseCounter">+</button>
    </div>
    <div>
      <!-- change value of v-model to "colorCode" if using readonly(no two-way binding) -->
      <input v-model="store.state.colorCode" placeholder="Enter Color Code" type="text">
    </div>
    <!-- <div>
      user: {{store.users.user1}}
    </div> -->
    <div class="bestuser">Best User: {{store.bestUser.value}}</div>
    <div class="users">
      <div class="addUser">
        <label for="adduser">ADD USERNAME HERE</label>
        <input  id="adduser" type="text">
        <label for="addlocation">ADD USER LOCATION HERE</label>
        <input  id="addlocation" type="text">
        <button @click="store.usersMethods.addUser()">add user</button>
      </div>
      <div v-for="user in store.users" :key="user.userId">
        <p>{{user.username}}</p>
        <p>{{user.location}}</p>
        <p>{{user.counter}}</p>
        <div class="buttons">
          <button @click="store.usersMethods.decreaseCounter(user.userId)">-</button>
          <button @click="store.usersMethods.increaseCounter(user.userId)">+</button>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
// import computed from Vue if using read-only
import { inject } from 'vue';


export default {
  name: 'HomeView',
  setup() {
    const store = inject('store');
    console.log('store', store)
    // console.log("Homeview store:", store)
 
    
    // uncomment colorCode to change color of counter if using readonly
    // const colorCode = computed({
    //   get(){
    //     return store.state.colorCode;
    //   },
    //   set(val){
    //     store.methods.setColorCode(val);
    //   }  
    // })
    return {
      store
      //  colorCode

    }
  }
}
</script>
<style>

/* div {
  margin-bottom: 10px;
}
.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
} */

</style>

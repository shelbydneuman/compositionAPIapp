import { reactive, ref } from "vue";

const users = reactive([
  // user1: 'steve',
  // {
  //   userId: 0,
  //   username: 'Steve',
  //   location: 'New York',
  //   counter: 0
  // },
  // {
  //   userId: 1,
  //   username: 'Bob',
  //   location: 'Los Angeles',
  //   counter: 0
  // }
  
]);

const bestUser = ref('Will');

// let addUserName = ref("");

// let addUserLocation = ref("");


const usersMethods = {
  decreaseCounter (user) {
    users[user].counter -= 1;
  },

  increaseCounter (user) {
    users[user].counter += 1;
  },

  addUser () {
    const user = document.getElementById("adduser");
    const location = document.getElementById("addlocation");
    users.push({
      userId: users.length,
      username: user.value,
      location: location.value,
      counter: 0
    });
    user.value = '';
    location.value = '';
  }
}
const usersGetters = {
  // displayUsers () {
  //   userArray = []
  //   for (const key in users){
  //     userArray.push(
        
  //     )
  //   }
  //  }
  
}
export {
  users,
  usersMethods,
  usersGetters,
  bestUser
}
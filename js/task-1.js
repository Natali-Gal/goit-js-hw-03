const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
      
    updateHobby(newHobby) {
        this.hobby = newHobby;
        
    },

    updatePremium(newPremium) {
        this.premium = newPremium;
       
    },

};
user.mood = 'happy';


user.updateHobby('skydiving');
user.updatePremium('false');

console.log(user);  

for (const key in user) {
  console.log(`${key}:${user[key]}`);

}

const  keys = Object.keys(user);

for (const key of keys) {
    console.log(`${key}:${user[key]}`);
}


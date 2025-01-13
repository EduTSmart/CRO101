const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
console.log(getKeyByValue(person,"John"))
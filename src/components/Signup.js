import React from "react";


function createSignup(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function() {
      alert('Hi! I\'m ' + this.name + '.');
    };
    return obj;
  }
  
  export default Signup
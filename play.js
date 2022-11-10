// const { callbackify } = require("util");

const fetchDta = () => {
    const promise = new Promise((resolve, reject) => {


        setTimeout(() => {

        }, 1500);
    });
    return promise;
}



setTimeout(() => {
    console.log("Timer is done!");
    fetchDta()
    .then(text => {
        console.log(text);
      return fetchDta()
    })
    .then(text2 =>{
        console.log(text2);
    })
}, 2000);

console.log("Hello Annette");
console.log("Hi Bwemere");
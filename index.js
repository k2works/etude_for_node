var title = function(){
    /*
     _____ _             _      _____          _   _           _
     | ____| |_ _   _  __| | ___|  ___|__  _ __| \ | | ___   __| | ___
     |  _| | __| | | |/ _` |/ _ \ |_ / _ \| '__|  \| |/ _ \ / _` |/ _ \
     | |___| |_| |_| | (_| |  __/  _| (_) | |  | |\  | (_) | (_| |  __/
     |_____|\__|\__,_|\__,_|\___|_|  \___/|_|  |_| \_|\___/ \__,_|\___|
     */
}.toString().replace(/function+\W+\*[^]\n|\s+\*\/\s+}$/g, "");

console.log(title);

var FizzBuzz = require("./dist/FizzBuzz/FizzBuzz");
module.exports = FizzBuzz;
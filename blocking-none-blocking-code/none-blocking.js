var fs = require("fs");

fs.readFile('message.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

const os = require('os');
const path = require('path');
const fs = require('fs');
//const path = require('path');
const crypto = require('crypto');
const dns = require('dns');
const { getDefaultAutoSelectFamily } = require('net');
// const path = require('path');
// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)
// console.log(os.homedir)
// console.log(os.totalmem()/(1024*1024*1024)+ "GB");
// console.log(os.freemem()/(1024*1024) + "MB");

//  const filePath=path.resolve(___dirname,"core_modules.js");
//  console.log(__dirname);
//const filePath = path.join(os.homedir(), "documents");//"core_moduels.js");
//console.log(filePath);
// const file = "BCA -D/Lecture5/core_modules.js";
// console.log(path.basename(file));
// console.log(path.extname(file));
// console.log(path.dirname(file));
//console.log("a");
//const data = fs.readfilesync("./sample.txt", "utf-8");//synchronous behavior
//console.log(data);
// fs.readFile("./sample.txt", "utf-8", (err, data) => { // assynchronous behaviour
//     if (err) {
//         console.log(err);

//     } else {
//         console.log(data);
//     }
// })
//console.log("b")
// TO UPDATE
// fs.writeFileSync("./sample.txt", "hello world");//synchronous behavior
// console.log("file updated");
// fs.writeFile("./sample.txt", "hello pretttyyyy", (err, data) => { // assynchronous behaviour
//     if (err) {
//         console.log(err);

//     } else {
//         console.log("file updated");
//     }
// })
//console.log("b")
// TO APPEND FILE
//fs.appendFileSync("./sample.txt", "\nhello world! again");
//  to delete
// fs.unlinkSync("./SAMPLE .TXT");
// console.log("file deleted")


//const password = "tutiyi"
//const hash = crypto.createHash("dhfu").update(password).digest("hex");
//console.log(hash)
//const salt = crypto.randomBytes(16).toString("hex");

//const hash = crypto.createHmac("sha384", salt).update(password).digest("hex");
//console.log(hash)
//doesNotMatch.lookup("www"),(err,address,family);
// dns.lookup("www"),(err,address,family);
// dns.reverse("8.8.8.8", (err, hotnames) => { // assynchronous behaviour
//     if (err) {
//         console.log(err);

//     } else {
//         console.log("hostnames");
//     }
// })





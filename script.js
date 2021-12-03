const testFolder = ".";
const fs = require("fs");
var content;
// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });
content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name ="viewport" content="width=device-width, initial-scale=1.0">
  <title>Canvas basics</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>


`;
fs.writeFileSync("index.html", content);
fs.readdirSync(testFolder).forEach(file => {
  content = `<br/>
  <a href="${file}">${file}</a>`;
  fs.appendFileSync("index.html", content);
});

content = `</body>
</html>
`;
fs.appendFileSync("index.html", content);
console.log(content);

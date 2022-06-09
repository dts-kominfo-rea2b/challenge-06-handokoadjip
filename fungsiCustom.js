// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
// return array of data
// data1.json => halo dunia => hasil yang diambil adalah dunia
// data2.json => halo world => hasil yang diambil adalah world
// data3.json => halo sekai => hasil yang diambli adalah sekai
const bacaData = (fnCallback) => {
  const files = [file1, file2, file3],
    result = [];
  let cntr = 0;
  
  files.forEach((file) => {
    return fs.readFile(file, "utf8", (err, data) => {
      if (err) console.log(err);
      result.push(data.replace(/([^a-zA-Z]|data|message|halo)/gi, "").trim());
      ++cntr;

      if (cntr === files.length) fnCallback(null, result);
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};

const { readFileDir } = require('./travel');
const fse = require('fs-extra');
const path = require('path');

const pattern = /^---((.|[\r\n])*?)---/g;
const kvPattern = /(\w+):/;
const imgPattern = /\(\.(.*?\.(jpg|png))\)/g;

const readMD = async (list) => {
  const mds = [];
  await Promise.all(
    list
      .filter((item) => item.endsWith(".md"))
      .map(async (item) => {
        const res = await fse.readFile(item, "utf8");
        // console.log("res: ", res);
        const $1 = pattern.exec(res)?.at(1) || "";
        // console.log("$1: ", $1);
        const obj = $1
          .split("\n")
          .filter(Boolean)
          .reduce((acc, curr) => {
            const key = kvPattern.exec(curr.trim())?.at(1);
            const value = curr?.trim().replace(kvPattern, "");
            if (key && value) {
              acc[key?.trim()] = value?.trim();
            }
            return acc;
          }, {});
        // console.log(obj);
        mds.push({
          ...obj,
          tag: obj.tag ? obj.tag.split(",") : [],
          _content: res.replace(pattern, "").replace(imgPattern, ($0, $1) => {
            return `(../${obj.id}/${$1})`;
          }),
        });
      })
  );

  return mds;
};

module.exports = {
  readMD,
};

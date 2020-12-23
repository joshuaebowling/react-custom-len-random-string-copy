const alphanum = "aAbBcCdDeEfFgGHhIIJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
  ""
);
export const random = (size: number, usePrefix: boolean = false) => {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(alphanum[Math.floor(Math.random() * alphanum.length)]);
  }
  const base = result.join("");
  if (!usePrefix) return base;
  return "TEST" + base.substr(0, base.length - 4);
};

export const randomNum = (size: number) => {
  const result = [];
  for (let i = 0; i < size; i++) {
    let num = Math.ceil(Math.random() * 9);
    result.push(num);
  }
  return parseInt(result.join(""), 10);
};

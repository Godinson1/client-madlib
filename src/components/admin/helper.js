export const compareValues = (key, toggle) => {
  return function innerSort(a, b) {
    const A = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const B = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return !toggle ? comparison * -1 : comparison;
  };
};

export const convertToCsv = (data) => {
  const csvRow = [];
  const A = [
    ["S/N", "NAME", "EMAIL", "ZIPCODE", "UPDATES", "RULES", "CLICK-COUNT"],
  ];
  const re = data;

  //convert each object in DATA into an array and add it to our new array
  for (let item = 0; item < re.length; item++) {
    const { username, email, zipcode, rules, updates, clickCount } = re[item];
    A.push([item + 1, username, email, zipcode, rules, updates, clickCount]);
  }

  //convert "array of arrays" into "array of strings"
  for (let i = 0; i < A.length; ++i) {
    csvRow.push(A[i].join(","));
  }

  //Introduce line break for csv
  const csvString = csvRow.join("%0A");

  //Funtionality to download file
  const a = document.createElement("a");
  a.href = "data:attachment/csv," + csvString;
  a.target = "_Blank";
  a.download = "madlib.csv";
  document.body.appendChild(a);
  a.click();
};

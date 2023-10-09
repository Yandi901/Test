const Prima = (angka) => {
  let pembagi = 0;
  for (let i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      pembagi++;
    }
  }
  return pembagi === 2;
};

console.log(Prima(3));
console.log(Prima(10));

console.clear();
console.log("Reverse Bits");

var reverseBits = function (n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result <<= 1;
    result |= n & 1;
    n >>= 1;
  }

  return result >>> 0;
};

console.log(reverseBits(00000010100101000001111010011100));

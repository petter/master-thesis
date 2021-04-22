class T2 {
  static A = class {};
}

const P = class {};
for (let attr of Object.keys(T2)) {
  P[attr] = T2[attr];
}

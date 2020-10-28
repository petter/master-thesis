import { template } from "./common";

@template
class T3 {
  static A = class {
    i = 2;
  };
}

const renameField = (
  cl: T3,
  oldFieldName: string,
  newFieldName: string
): any => {
  const res = class {};
  res[newFieldName] = 1;
  return res;
};

const T4A = renameField(T3.A, "i", "j");
console.log(T4A);
console.log(T3.A.prototype.i);
console.log(new T4A().j);

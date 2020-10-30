import { template } from "./common";

@template
class T1 {
  A = class {
    i = 2;
  };

  B = class extends this.A {
    j = this.i;
  };
}

const rename = (template: T1) => {
  const renamings = { A: "C", B: "D" };
  type newType = { C: typeof T1.A; D: typeof T1.B };
  const res: newType = (class {}.prototype = Object.keys(renamings).reduce(
    (proto, oldClassName) => {
      proto[renamings[oldClassName]] = T1[oldClassName];
      return proto;
    },
    {}
  )) as newType;
  return res;
};

const T2 = rename(T1);
console.log(new T2.D().j);

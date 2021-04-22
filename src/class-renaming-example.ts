class T1 {
  static A = class {
    i = 0;
  };
  static B: any;
}

interface T1 {
  B: typeof T1.A;
}

const classRef = T1.A;
delete T1.A;
T1.B = classRef;

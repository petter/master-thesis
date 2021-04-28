class T1 {
  static A = class {
    i = 0;
  };
}


const classRef = T1.A;
delete T1.A;
T1.B = classRef;

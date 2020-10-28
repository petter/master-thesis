/* type Template = Object; */
/* interface PackageTemplates { */
/*   rename: (template: Template, oldName: string, newName: string) => Template; */
/*   package: (options: { */
/*     templates?: Template[]; */
/*     additions?: Template; */
/*   }) => Object; */
/* } */

/* const PT: PackageTemplates = { */
/*   rename: (template, oldName, newName) => { */
/*     return {}; */
/*   }, */
/*   package: ({ templates = [], additions = {} }) => */
/*     templates.reduce((prev, cur) => ({ ...prev, ...cur }), {}), */
/* }; */

/* const T1 = { */
/*   A: function () { */
/*     var i = 0; */
/*     function f() {} */
/*   }, */
/* }; */

/* const T2 = { */
/*   A: class A { */
/*     j = 1; */
/*   }, */
/* }; */

/* class A { */
/*   i = 0; */
/* } */

/* class B { */
/*   j = 0; */
/* } */

/* const T3 = [ */
/*     class A { */

/*     }, */
/*     class B { */
        

/*     } */
/* ] */

function template(constructor: Function) {
    console.log(constructor.prototype);
}

@template
class T1 {
   A = class {
    i = 2;
   }

   B =  class extends this.A {
    j = this.i
   }
}

const t1 = new T1();
const b = new t1.B();
console.log(b.j);

// const P = PT.package({ templates: [T1, T2] }) as { A: Function };
// console.log(P.A.toString());

/*

* Object Type

* Normal şartlarda typescript de bir object type ı mevvuttur. Object type ı ucu açık bir tip olduğu için kullanılması tercih edilmez

* JS nesne tabanlı birprogramlama diliolduğu için birçok yapı nesnelerden oluşur(diziler,fonksiyonlar,date). Object type kullanırsak net birşekilde type ını belirleyemiyoruz.

* Biz genelde daha spesifik birşekilde özellikleri olan nesneler ile çalışır. Bu noktada nesnenin özelliklerinin tipini belirteceğiz,hem ts hata durumu izleyecek hem de otomatik tamamlamaözelliği devreye girer.

*/

let data: object = {};
let data2: object = [];
let data3: object = new Date();
let data4: object = function () {};

// *değişkenin tipini tanımlama:

let student: object;

//* değişkenin değerini tanımlama

student = {};

//- yukarıdaki studenk object tanımlamayanlış , doğrusu aşağıda

let student1: {
  id: number;
  firstname: string;
  lastname: string;
  isGraduated: boolean;
  age?: number; // opsiyonel değer tanımlama,soru işareti varsa değergöndermeyebiliriz
};

//değişkenin değerini tanımlama

student1 = {
  id: 45,
  firstname: "ahmet",
  lastname: "Yıldırım",
  isGraduated: true,
};

// apı dan alınan verinin tipi:

let user: {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string | number;
    suite: string | number;
    city: string;
    zipcode: string | number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string | number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: -37.3159,
      lng: 81.1496,
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

// bunları kullanırken otomatik tanımlama desteği sunacak
//hem de hata ontrolü yapacak

// user.address.suite;

console.log(user.address.street);
console.log(user.company.name);

//js de derlemekiçin tsc dosya_adi

// consolda görmekk için
//node dosya_adi(js uzantılı olan)

//js olarak derlemeden consolda görmenin yolu:

//*npm i -g ts-node komutukonsola yazılıp paketi indirilir. indirdikten sonra ts-node dosya_adi yazilir

/*

* array Type:
* typescript de dizilerin tipini tanımlarken sadece bu değişken bir dizi olacak diyemiyoruz Bu dizinin içeriisnde şu tipte elemanlar olacak şeklinde tanım yapmalıyız. Sonuç olarak dizinin elemanlarının veri tipini söylememiz gerekiyor
* 
* Tanım:
* 
* type[]

*/

// tip atamasının kısıtlamarı sadece  değişkeni tanımlarken değil

const users: string[] = ["gül", "fatma", "ali"];

// bu değişkeni kullanırken/manipule ederken de karşımıza çıkıyor

users.push("mahmut");
users.push("ahmet");
// users.push(30);
// users.push(true);

//* ornek 2

const ages: number[] = [45, 15, 25, 55, 70];

const licenses: boolean[] = [true, false, true, false];

/*




* SORU: bir diiznin içerisinde birden fazla farklı veri tiği kullanmak istersek ne yaparız

normalde bir dizide tek türde veri olması beklenir
bazı drımlarda birden farklı türde verilalan diziler olabilir
birden fazla türde veri alan diziler tanımlayabilmek için unionTypes
string |number > "ya string olsun ya number olsun"

*/

let teachers: (string | null)[] = ["ugur", "ahmet", null, "Yasin"];

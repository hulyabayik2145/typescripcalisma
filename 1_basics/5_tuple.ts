/*

* tıple type:
//* bir dizideki elemanın sırasını ve tipini tanımlamamıza olanak sağlar
/* typescript ile birlikte hayatımızagiren birveri tipidr
* uzunnluğu sabit ve elemanlarınınsırası/ tpi belirli olan dizilerin tipini tanımlamakiçin kullanırız

* bir dizi içerisinde tipleri sıralarız
* örn. [numberistring,string,number]
* 
* 
* **uzunluğu sabit ise bu şekilde tanımlanabiir., 
* 
* soru |  bu union types kullanımı ile aynı şey mi
* 




*/

//* örnek2

const gradient: [string, number, number] = ["to right", 252525, 25655];
//* hayır benzer amaişlevsel anlamda biraz daha farklı unionTypes kullanımı dizideki elemanların sırası  ve sayısını belirleme gibi bir özelliğe sahip değil

const ders1: [string, number] = ["programlama", 3];

//örnek3

//bir css rgba/rgb renginin verilerini dizi içerisindetutmak istedik

//rgb (123,56,78)
//rgba(123,56,23,0.05)

//yukarıdaki ornekte opactiy değerinin opsiyonelolması gereklir
//tuple de birdeğeri opsiyonel yapmak için tipin sonuna ? işareti konur

let color: [number, number, number, number?];

//soru işareti olduğu zaman opsiyonel oluyor, ister değer atıyoruz , istersek atamıyoruz

//opsiyonel bir değerin ardında gelicekolan bütün değerler mutlaka opsiyonel olmallı,opsiyonel olanlar hep en sonda olmalı
//* let date: [number, string?, number?]; tanımlaması bu şekilde

let date: [number, string, number];

//* gerçek proje Örneği
//* useState | useSearchParams veya kendi yazmış olmuğumuz herhangibir react hooku genelde uzunluğu ve elemanları sırası bellilan diziler döndürür

//const [text,setText]=useState();
// type> [string,function]

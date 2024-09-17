/*

* type Annotion:
* javascript te değişkenin türünü belirleme gibi bir özellik söz konusu degil
* Fakat tyscript te tanımladığımız değişkenin tiğpini de tanımlayabiliyoruz
* * bu sayede değişkene değer ataması yaparken belirlenen tip kısıntlanmasının dışarısına çıkamıyoruz
* 


*/

let user: string = "mahmut";

// artık username string dışında bir veri alamaz
// aynı tipte veri atamada bir sorun yok
user = "ali";
//farklı tipte veri attttayamıyoruz
// user = 64;
// user=[];
// user={};

// Soru: typee beelirtmek zorundamıyız?
// age='elli';

/* *biz type tanımlamasak bile ts otomatikk  olarak değişkenin değerrrinin tipi  neyse onu dtipi larak tanımlar.Bu bizim için kolaylık gözüksede bazı durumlarda beklenmedik sonuçlar ortaya çıkaiblir ve biz öğrenme sürecinde olduğumuzdan dolayı en sağlıkl  yöntem bütün değişkenlerin tipini tanımlamak.

/*
? js de bulunan veri tipleri

* string
* number
*  boolean
* object
* array
* null
* undefined
* function
* symbol (pek kullanılmaz)
* bigint (pek kullanılmaz)
* 
* bu beri tiplerinin tamamını tip atamasında kullanılabilir
* 



*/

let project_name: string = "YemekSepeti Clone";
let person_age: number = 40;
let has_lisence: boolean = true;
let student:object ={
    id:2;
    name:"ali",
    year:2000,
}

let value:null=null;
let value2:undefined=undefined;

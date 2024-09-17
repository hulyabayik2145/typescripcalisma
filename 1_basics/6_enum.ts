/*

* enum(numaralandırma)
* Belirlideğerler kümesi
* *eleman sayısı vealabileceği değerler belirli olan değişkenlerin değerini bir grup halinde tutmak iin kullanıyoruz
* 
* * genelde azmiktarda farklı değer sahip verileringruplandırması için kullanırılır
* 
* * enum isimlendirirken sonuna "enum" takısı koymak aydalı,
*  ilk harfi büyük olmaı
* * isimlendirirken değişken isimlendirme kurallarına sadık kalırız

*/

// örn: trafik ışığının aşamalarını tutalım
//klasik js
const renkler = {
  red: 0,
  yellow: 1,
  green: 2,
};

//typescript ile nasıl yapılır

enum Colors {
  red,
  yellow,
  green,
}

let mevcut_trafik_isigi = Colors.red;

console.log(mevcut_trafik_isigi);

//örnek_2

enum Gunler {
  Pazartesi,
  Salı,
  Çarşamba,
  Perşembe,
  Cuma,
  Cumartesi,
  Pazar,
}

let day = Gunler.Pazartesi;

console.log("day", day);

let day2 = Gunler[0];

console.log("gün_adı", day2);

// ornek-3

enum Status {
  set = "hazılanıyor",
  travel = "Seyahat Ediyor",
  done = "Seyahat Tamamalandı",
}

console.log("sonuc_1", Status.set);
console.log("sonuc_2", Status.travel);
console.log("sonuc_3", Status.done);

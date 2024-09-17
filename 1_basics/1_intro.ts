/*
* ttscript , js in bası önemli açıklarını düzeltmek için microsoft tarfından geliştirilen bir programlama dilidir.

* Açıklar:

* * JS 'de tanımladığımız bir değişkeni daha sonra tanımlarken farklı tipte bir veri atayabiliyoruz ts bunun önüne geçer

* * otomatik tamamla desteği yok. örn: apiden gelen verileri konsoldan bakmadan kullanamıyoruz
* * istediğimiz sürüme derleme özelliği yok
* * değişkenlerde veya fonksiyonlarda tip atması özelliği yok
* * typescript dosyaları doğrudan çalıştırılamazlar , eger dosyayı çalıştırmak istiyorsak önce js e derlememiz gerekiyor
*  * js dosyaları typescript dosyalarına dönüştürülebilir mi? Evet
*  TSC : typpescript Compiler
* yazılan typescript kodnu js in istediğiniz sürümüne derler
* kullanabmek için typescript paketini bilgisayara indirmiş olmamız gerekir
*  typescript paketini indirmek için npm install -g typescript komutunu terminalde yazmalıyız
*   typescript paketini indirdikten sonra terminalde tsc komutunu yazarak
*    typescript dosyalarını js in istediğiniz sürümüne derleyebiliriz




*/

let surname: string = "yıldız";
console.log("kullanıcın soyyaaadı", surname);

/*

* Any Type:
* Bir değişkene any atandğı zaman değişken herhangi bir tür kısıtlamasına maruz kalmaz
* 
* ts , any type ile tanımlanmış olan değişken bir js değişken gibi davranır. yanı değişkene herhangi bir türde veri ataması yapılır
* 
* otomatik tamamlama any kullanılan değişkenlerde devre dıışı kalır
* 
* Normal şartlarda any kullanımı ts mantığına aykırıdır. Çünkü ts deki amaç her değişkenin türünün belli olması
* 
* any genelde geçici olarak acil urumlarda kullanılır orn aği dan gelen bir verri var ama verinin tiğini tanımlayacak kadar zaman yok ve hemen githuba puhslamamız gerekiyor, böyle durumlarda kullanabiliri
* 
* mutlaka any tipleri bir noktadan sonra kaldırılıp yerine doğru tipler tanımlanır
* 
* 
* 

*/

let foo: any;
foo = "string";
foo = undefined;
foo = [];
foo = null;

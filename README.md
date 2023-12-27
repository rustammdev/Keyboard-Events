## fUNCTION DECLARATION
Function declaration - oldidan hamdan undan keyin ham uni chaqirib ishlati
shimiz mumkin. Unda scope qoidalari boshqacha ishlaydi. TDZ unda yoq.

## FUNCTION DECLARATION 
fUNCTION DECLARATIONDA TDZ (temporal dead zone) qoidlariga amal qiladi,
biz funksiani o'zidan oldin chaqirib ishlata olmaymiz

## CallBack function
Calback function bu funksia argumentiga yana funksiya berish

## OBJECT  
Obyekt ichida arrov funktiondan foydalanish yomon natijalarga olib kelishi mumkin


## MATH
.round() - sonni eng yaqin butun qismga yaxlitledi
.floor() - sonni eng yaqin butun kichik qismga yaxlitledi
.ceil() - sonni katta qismga yaxlitledi 
.trunc() - sonni butun qimini tashlab yuboradi

## textContent vs InnerHTML
Farqi, text contentda faqatgina matnni o'zgartira olamiz, unga qandedur teglar orqali style ni o'zgartira olmaymiz. InnerHTML biz teglar ichida yozsak HTML kodlar to'liq support qilinadi

## setAtribute and getAtribute
Set atribute teglarga atribute qo'shish yoki mavjud atributni o'zgartirish uchun ishlatiladi.

Set attribut ikkita argement qabul qiladi, birinchisi atribut nomi (href, class, target), ikkinchini uni yangi qiymati.

Yangi atribut qo'shishda birinchi argumentni qo'shilmoqchi bo'lgan atribute nomi ikkinchi argumentga uni qiymati qo'shiladi

## styleni o'zgartirish
Html barcha teglarda javascriptda style xossasi mavjud, biz shu orqali uni css xossalarini ham o'zgartirishim mumkin

## classList (class, add and remove, toggle)
Class qo'shish va uni o'chirish uchun ishlatiladi, barcha HTML teglarda classlist xossasi mavjud

[add('className')] - malum tegga yangi class qo'shish uchun ishlatilaid
[remove('className')] - mavjud classni o'chirish uchun ishlatiladi
[toggle('className')] - tarjimasi almashtirish. argument sifatida className qabul qiladi. Agar ushbu class tegda mavjud bo'lsa uni o'chiradi, mavjud bo'lmasa unga ushbu classni qo'shadi

### Array.from() -> html-collection => array

## children, sibling
Malim bir bo'limlar ichidagi elementlarni barchasini tanlab olib ishlatishda foydalaniladi


## events, addEventListener
Eventlar click bo'lganda undagi textContentni target orqali ololamiz
```
item.addEventListener('click', (e) => {
       console.log(e.target); 
    })
```

## add and remove, target
`prepend` - tepadan element qoshish
`appendChild` - pasdan element qoshish
Qaysi element bosilayotganini target orqali aniqlanadi


## form
Formalarni to'ldirib enter tugmasini bosganimimzda saxifa qayta yuklanadi buning sababi formadagi malumotlar backendga jonatilladi va formani bosh xolatga olib kelinadi

## keydown va keyUp
Farqi `keydown` bosilish bilan qiymat qaytaradi, agar uni bosib turilaversa yani qo'yib yubormasak u to'xtovsiz qiymat qaytaradi. `keyup` es UP - bosilib qo'yib yuborganimizdan keyin qiymat qaytaradi.

Saxifa yangilanishini olish uchun `preventDefault()` xossasini yoqib qoyamiz forma sobmit bo'lganda callback funktiondan kelgan malumotni.

temporal - vaqtinchalik - temporal
temporal - vaqtinchalik - temporal
temporal - vaqtinchalik - temporal
temporal - vaqtinchalik - temporal
temporal - vaqtinchalik - temporal
temporal - vaqtinchalik - temporal
temporal - vaqtinchalik - temporal

argument - isbot - argument
argument - isbot - argument
argument - isbot - argument
argument - isbot - argument
agrument - isbot - argument
argument - isbot - argument

depreceted - eskirgan - depreceted
depreceted - eskirgan - depreceted
depreceted - eskirgan - depreceted
depreceted - eskirgan - depreceted
depreceted - eskirgan - depreceted
depreceted - eskirgan - depreceted
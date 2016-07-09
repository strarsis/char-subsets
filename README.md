# char-subsets
Lists of characters of common subsets (like Google Fonts API uses them)

[![david](https://david-dm.org/strarsis/char-subsets.svg)](https://david-dm.org/strarsis/char-subsets)

Usage
-----
``` sh
npm install char-subsets
````
``` js
var subsets = require('char-subsets')();
console.dir(subsets);
````
yields an array with subset name per key and their unicode characters
``` js
[ 
  greek: '\n !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿Æ×ØÞßæð÷øþıŒœˆ˚˜΄΅·ΓΔΘΛΞΠΣΦΨΩαβγδεζηθιλξπρςστυφψωϑϒϖ–—‘’‚“”„•‹›⁄⁴€− ­ÐÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿΆΈΉΊΌΎΏΐΑΒΕΖΗΙΚΜΝΟΡΤΥΧΪΫάέήίΰκομνχϊϋόύώ',
  'greek-ext': '\n !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿Æ×ØÞßæð÷øþıŒœˆ˚˜΄΅·ΓΔΘΛΞΠΣΦΨΩαβγδεζηθιλξπρςστυφψωϑϒϖ–—‘’‚“”„•‹›⁄⁴€− ­ÐÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿΆΈΉΊΌΎΏΐΑΒΕΖΗΙΚΜΝΟΡΤΥΧΪΫάέήίΰκομνχϊϋόύώὍ',
  latin: '\n !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿Æ×ØÞßæð÷øþıŒœˆ˚˜–—‘’‚“”„•‹›⁄⁴€− ­ÐÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ'
  ...
]
````

Available subsets
-----------------
(as used in Google Fonts API)

- greek
- greek-ext
- latin
- vietnamese
- cyrillic-ext
- latin-ext
- cyrillic


Note
----
Accessing array keys containing '-':
``` js
subsets['latin-ext']
````

It is also trivially possible to convert the unicode characters into unicode points.

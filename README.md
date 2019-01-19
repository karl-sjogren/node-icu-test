# Node ICU test

## Normal/Builtin ICU

```
$ npm run normal-icu

> icu-test@1.0.0 normal-icu C:\Users\Karl\Desktop\icu-test
> node index.js

[ 'ä1', 'å2', 'ö3' ]
```

## Full ICU
```
$ npm run full-icu

> icu-test@1.0.0 full-icu C:\Users\Karl\Desktop\icu-test
> node --icu-data-dir=node_modules\full-icu index.js

[ 'å2', 'ä1', 'ö3' ]
```
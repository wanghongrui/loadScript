# Load *.js && *.css

## usage

```javascript
npm install load-script-promise
```

```javascript
import {loadScript, loadCSS} from 'load-script-promise'

loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js')
  .then(() => {
    console.log('script loaded')
  })

loadCSS('https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css')
  .then(() => {
    console.log('style loaded')
  })
```
also
```javascript
await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js')
```

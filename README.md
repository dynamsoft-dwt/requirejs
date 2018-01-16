# Dynamic Web TWAIN with RequireJS

To use Dynamic Web TWAIN with RequireJS, add following code to **main.js**:

```javascript
require.config({
    paths: {
        "dwt": "https://www.dynamsoft.com/library/dwt/dynamsoft.webtwain.min",
    },
    shim: {
        'dwt': {　　　　　　　　
            exports: 'Dynamsoft'　　　　　　
        }
    }
});
```
Dynamically load Web TWAIN module in **main.js**:

```javascript
// Load Dynamic Web TWAIN.
requirejs(["dwt"], function (module) {
    Dynamsoft = module;
    initializeContainer(Dynamsoft);
});

// Initialize the container when Dynamic Web TWAIN is ready.
function initializeContainer(Dynamsoft) {
    Dynamsoft.WebTwainEnv.CreateDWTObject(docContainer.id, function(obj){
        dwtObject = obj;
        dwtObject.Width = 480;
        dwtObject.Height = 640;
    }, function(errorString){
        console.log(errorString);
    });
}
```
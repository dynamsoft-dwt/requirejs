# Dynamic Web TWAIN with RequireJS

To support RequireJS, add following code to the end of **dynamsoft.webtwain.min.js**:

```javascript
if ("function"==typeof define&&define.amd) {
    define({
        Dynamsoft: Dynamsoft
    });
}
```
Dynamically load Web TWAIN module in **main.js**:

```javascript
// Load Dynamic Web TWAIN.
requirejs(["dynamsoft.webtwain.min"], function(module) {
    Dynamsoft = module.Dynamsoft;
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
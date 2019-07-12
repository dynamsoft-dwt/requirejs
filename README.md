# Dynamic Web TWAIN with RequireJS

To use Dynamic Web TWAIN with RequireJS, steps are

1. Add following code to **main.js**:

```javascript
require.config({
    paths: {
        "dwt": "https://unpkg.com/dwt/dist/dynamsoft.webtwain.min",
    }
});
```
2. Dynamically load Dynamic Web TWAIN module in **main.js**:

```javascript
// Load Dynamic Web TWAIN.
requirejs(["dwt"], function (module) {
    initializeContainer(module);
});
```
3. Config and create an instance of Dynamic Web TWAIN to scan. Don't forget to add a good (trial/full) license key (replace **A-Valid-Product-Key**).

```javascript
// Initialize the container when Dynamic Web TWAIN is ready.
function initializeContainer(Dynamsoft) {
    Dynamsoft.WebTwainEnv.AutoLoad = false;
    /**
     * In order to use the full version, do the following
     * 1. Change Dynamsoft.WebTwainEnv.Trial to false
     * 2. Replace A-Valid-Product-Key with a full version key
     * 3. Change Dynamsoft.WebTwainEnv.ResourcesPath to point to the full version 
     *    resource files that you obtain after purchasing a key
     */
    Dynamsoft.WebTwainEnv.Trial = true;
    Dynamsoft.WebTwainEnv.ProductKey = "A-Valid-Product-Key";
    //Dynamsoft.WebTwainEnv.ResourcesPath = "https://tst.dynamsoft.com/libs/dwt/15.0";

    // Create a document container
    var docContainer = document.createElement('div');
    docContainer.id = "docContainer";
    document.body.appendChild(docContainer);
    
    Dynamsoft.WebTwainEnv.CreateDWTObject(docContainer.id, function (obj) {
        DWObject = obj;
    }, function (errorString) {
        console.log(errorString);
    });
}

```

## Blog
[Using Dynamic Web TWAIN with RequireJS](http://www.codepool.biz/web-twain-requirejs.html)

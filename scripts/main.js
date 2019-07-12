require.config({
    paths: {
        "dwt": "https://unpkg.com/dwt/dist/dynamsoft.webtwain.min",
    }
});

var DWObject = null;

// Load Dynamic Web TWAIN.
requirejs(["dwt"], function (module) {
    initializeContainer(module);
});

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

// Scan documents when clicking a button.
var scanButton = document.getElementById('scanButton');
scanButton.onclick = function () {
    if (DWObject == null) {
        alert("Dynamic Web TWAIN is not ready!");
        return;
    }

    DWObject.IfDisableSourceAfterAcquire = true;
    var bSelected = DWObject.SelectSource();

    if (bSelected) {
        var successCallback, failCallback;
        successCallback = failCallback = function () {
            DWObject.CloseSource();
        };

        DWObject.OpenSource();
        DWObject.AcquireImage(successCallback, failCallback);
    }
};
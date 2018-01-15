var Dynamsoft = null;
var dwtObject = null;

// Load Dynamic Web TWAIN.
requirejs(["dynamsoft.webtwain.min"], function(module) {
    Dynamsoft = module.Dynamsoft;
    initializeContainer(Dynamsoft);
});

// Create a document container
var docContainer = document.createElement('div');
docContainer.id = "docContainer";
document.body.appendChild(docContainer);

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

// Scan documents when clicking a button.
var scanButton = document.getElementById('scanButton');
scanButton.onclick = function () {
    if (Dynamsoft == null || dwtObject == null) {
        alert("Dynamic Web TWAIN is not ready!");
        return;
    }

    dwtObject.IfDisableSourceAfterAcquire = true;
    var bSelected = dwtObject.SelectSource(); 

    if(bSelected) {
        var successCallback, failCallback;
        successCallback = failCallback = function () {
            dwtObject.CloseSource();
    };

    dwtObject.OpenSource();
    dwtObject.AcquireImage(successCallback, failCallback);  
    }
};



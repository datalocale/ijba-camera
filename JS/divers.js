function hide() {
  if (browserType == "gecko" )
     document.poppedLayer =
         eval('document.getElementById("fenetre")');
  else if (browserType == "ie")
     document.poppedLayer =
        eval('document.getElementById("fenetre")');
  else
     document.poppedLayer =
        eval('document.layers["fenetre"]');
  document.poppedLayer.style.visibility = "hidden";
}

function show() {
  if (browserType == "gecko" )
     document.poppedLayer =
         eval('document.getElementById("fenetre")');
  else if (browserType == "ie")
     document.poppedLayer =
        eval('document.getElementById("fenetre")');
  else
     document.poppedLayer =
         eval('document.layers["fenetre"]');
  document.poppedLayer.style.visibility = "visible";
}


function hide_all() {
	
	$("#TXTCAM").hide();
	
	$("#intro2").hide();
	$("#conclutxt").hide();
	$("#credittxt").hide();
	
}



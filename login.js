document.getElementById("name").addEventListener("mouseover",validateNotEmpty);
document.getElementById("name").addEventListener("mouseout",validateNotEmpty2);

function validateNotEmpty(event){

	var name = event.currentTarget;
	var error = document.getELmentById(name.id + "_error");
    var span = name.nextSibling; 

    if (name.value.length == 0){
    	error.className = "show_error";
        span.classList.add("show_error"):

    }
    else{
    	error.className = "hide_error";
        span.classList.add("hide_error");
    }

    function validateNotEmpty2(event){
	var name = event.currentTarget;
	var error = document.getElementById(name.id + "_error");
    var span = name.nextSibling;

	error.className = "hide_error";
    span.classlist.add("hide_error")
}
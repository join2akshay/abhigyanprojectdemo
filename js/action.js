
$(document).ready(function(){
    
    $("#btn1").click(function(){
       var value=$("#date").val();
        
        alert("you select "+value);
        window.open("second.html");
        
    });
});
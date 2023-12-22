function func(){
   // alert("hi");
   console.log("ugly");
   document.getElementById("fwer").style.fontSize = "200%";
   document.getElementById("color").style.backgroundColor = "green";
   document.getElementById("two").style.display= "block";
   document.getElementById("one").style.display="none";

}
function closeWindow() {
  

    
    let my_window =
        open(location, '_self');

    my_window.close();

}
function bernie(){
    document.getElementById("two").style.display= "none";
    document.getElementById("one").style.display="block";
    document.getElementById("color").style.backgroundColor = "yellow";
}


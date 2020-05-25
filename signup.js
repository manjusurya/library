function validate(){
var n=document.getElementById("name").value;
var db=document.getElementById("dob").value;
var add=document.getElementById("address").value;
var em=document.getElementById("email").value;
var ph=document.getElementById("phone").value;
var p1=document.getElementById("password1").value;
var p2=document.getElementById("password2").value;


if (n=="") {
    alert("please enter your name");
    
}
else if (db=="") {
    alert("please enter your date of birth");
    
}
else if (add=="") {
    alert("please enter your address");
    
}
else if (em=="") {
    alert("please enter your email id");
    
}
else if (em.indexOf("@")<=0) {
    alert("invalid email id");
    
}
else if (em.charAt(em.length-4)!=".") {
    alert("invalid email id");
    
}
else if (ph=="") {
    alert("enter your phone number");
    
}
else if (p1=="") {
    alert("enter your password");
    
}
else if (p1.length<=4) {
    alert("password is weak");
    
}
else if (p1.length<=7) {
    alert("password not strong");
    
}
else if(p1!=p2){
    alert("PASSWORD MISMATCH");
}
else{
    alert("successfully signed up")
    
}



}
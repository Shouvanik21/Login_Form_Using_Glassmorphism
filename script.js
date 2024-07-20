const passwordbtn=document.getElementById("passeye");

passwordbtn.addEventListener("click",(e)=>{
    const passwrdinput=document.getElementById("pass");
    const icon=passwordbtn.querySelector("i");
    const isvisible =icon.classList.contains("ri-eye-line");
    passwrdinput.type=isvisible?"password":"text";
    icon.setAttribute("class",isvisible?"ri-eye-off-line":"ri-eye-line");
});
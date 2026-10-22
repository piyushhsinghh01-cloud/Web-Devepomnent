function addtask(){
    const newtask=document.getElementById("taskinput").value.trim();
    const LI= document.createElement("li");
    LI.classList.add("p-3");
    const SPAN = document.createElement("span");
    SPAN.textContent=newtask;
    
}
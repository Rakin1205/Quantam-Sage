const pswrdField = document.querySelector(".container #loginForm .input-group[type='password']"),
toggleIcon = document.querySelector(".container #loginForm .input-group i");

toggleIcon.onclick = () =>{
  if(pswrdField.type === "password"){
    pswrdField.type = "text";
    toggleIcon.classList.add("active");
  }else{
    pswrdField.type = "password";
    toggleIcon.classList.remove("active");
  }
}

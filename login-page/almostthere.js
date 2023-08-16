let userData = JSON.parse(localStorage.getItem("user-data")) || [];
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let data = {
        name: event.target.name.value,
        email:event.target.email.value
    };
userData.map((elem)=>{
    // console.log(elem.name===data.name,elem.email===data.email)
  if(data.name==elem.name && data.email==elem.email)
    window.location.assign('login.html')
  else{
    userData.push(data);
    localStorage.setItem("user-data", JSON.stringify(userData));
    window.location.assign('register.html')
}
})
});
const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
    validateInputs();
    e.preventDefault();
    
})
function validateInputs(){
    const usernameVal = username.Value.trim()
    const emailVal = email.Value.trim();
    const passwordVAl = password.Value.trim();
    const cpasswordVal = cpassword.Value.trim();
    let success = true

    if(usernameVal===''){
        seterror(username,'username is required')
    }
    else{
        setsuccess(username)
    }
    if(emailVal===''){
        seterror(email,'email is required')
    }
    else if(!validateEmail(emailVal)){
        seterror(email,'please enter a invalid email')
    }
    else{
        setsuccess(email)
    }
    if(passwordVal===''){
        seterror(password,'password is required')
    }
    else if(passwordVal.length<8){
        seterror(password,'password must beatleast 8 character')
    }
    else{
        setsuccess(password)
    }
    if(cpasswordVal ===''){
        seterror(cpassword,'confirm password is reqired')
    }
    else if(cpasswordVal!==passwordVAl){
        seterror(cpassword,'password does not match')
    }
    else{
        setsuccess(cpassword)
    }
}
function seterror(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = messge;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setsuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const validateEmail = (email)=>{
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
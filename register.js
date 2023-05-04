const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');


//show eror
function setError(element,message){
    const formbox = element.parentElement;
    formbox.className = 'form-box1 error';
    const small = formbox.querySelector('small');

    small.innerText = message;
    // formbox.classList.add('error');
    // formbox.classList.remove('success')
}

function setSuccess(element){
    const formbox = element.parentElement;
    formbox.className = 'form-box1 success';
    
};

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
  }

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function isFormValid(){
    const inputContainers = form.querySelectorAll('.form-box1 ');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;

        }
    });
    return result;
}

form.addEventListener('submit', e =>{
    e.preventDefault();

    if(email.value === ''){
        setError(email, "Email is required");
    }else if(!isValidEmail(email.value)){
        setError(email, "Email is not valid");
    }
    else{
        setSuccess(email);
    }

    if(username.value === ''){
        setError(username,'Username is required');
    }else if(username.value.length < 10){
        setError(username,'Username must be more than 10 character');
    }else{
        setSuccess(username);
    }

    if(password.value === ''){
        setError(password,'Password is required');
    }else if(password.value.length < 8){
        setError(password,'Password must be more than 8 character');
    }else{
        setSuccess(password);
    }

    if(isFormValid() == true){
        form.submit();
    }else{
        e.preventDefault();
    }


});







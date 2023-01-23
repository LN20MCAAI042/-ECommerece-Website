// form

let formBtn = document.querySelector('.submit-btn');
let loader = document.querySelector('.loader');

formBtn.addEventListener('click', () =>{
    let fullname = document.querySelector('#name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let number = document.querySelector('#number');
    let tac = document.querySelector('#tc')

    //form validation
    // if(fullname.value.length < 3){
    //     showFormError('Name Must Be 3 Letters Long');
    // } else if(!email.value.length){
    //     showFormError('Enter Your Email');
    // } else if(password.value.length < 8){
    //     showFormError('Password Must Be 8 Letters Long');
    // } else if(Number(number) || number.value.length < 10){
    //     showFormError('Invalid Number, Please Enter Valid Number');
    // } else if(!tac.checked){
    //     showFormError('You Must Agree To Our Terms And Conditions');
    // } else{


        // submit form
        loader.style.display = 'block';
        sendData('/signup', {
            name: fullname.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.checked
        })
    // }    
})


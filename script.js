// if email is emtpy "Whoops! It looks like you forgot to add your email."
// if email has wrong input "Please provide a valid email address."
const form = document.querySelector('form')
const button = document.querySelector('button')
const error = document.querySelector('.error-msg')


form.addEventListener('submit', e => {
    e.preventDefault()
    const email = form.input.value.trim()
    if(email === ''){
        error.textContent = 'Whoops! It looks like you forgot to add your email.'
        error.style.display = 'block'
        form.input.classList.add('error')
        form.input.classList.remove('success')
        error.classList.remove('success')

    }else if(!validateEmail(email)){
        error.textContent = 'Please provide a valid email address.'
        error.style.display = 'block'
        form.input.classList.add('error')
        form.input.classList.remove('success')
        error.classList.remove('success')

    }else if(validateEmail(email)){
        error.textContent = 'Success!.'
        error.style.display = 'block'
        form.input.classList.remove('error')
        form.input.classList.add('success')
        error.classList.add('success')
    }else{
        error.style.display = 'none'
        form.input.classList.remove('error')
        form.input.classList.remove('success')

    }

    //console.log(form.input.value)
})

//form validation func

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// const number = document.getElementById('Mail')
const btn = document.getElementById("btn")
const number = document.getElementById('no')
const email = document.getElementById('email')
const password=document.getElementById('password')
const guide = document.getElementById('follow-guide')
const wrapper=document.getElementById('container')

email.addEventListener("change", correct)
btn.addEventListener("click", test);
password.addEventListener("change", toggle);

// function test() {
// if (Number(number.value)>10) {
//     alert('we are progessing')
//     }
// else {
//     alert('keep trying')
//     }
// }


/// This validates whether the email and number are filled in correctly
function test() {
    const expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(expression) && Number(number.value)>10 ) {
        Swal.fire(
            'Awesome! You did it'
          )
    }
    else {
        Swal.fire(
            'Pls fill in right details'
          )
    }
}

//// this toggles the password
function toggle() {
    if (password.type==="password") {
        password.type='text'
    }
    else {
        password.type="password"
    }
}

function correct() {
  const expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(expression)) {
        email.classList.add("right")
        
    } else {
        email.classList.add("wrong")
        guide.innerHTML = "fill properly";
    }
    
}
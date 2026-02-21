let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveButton = document.getElementById("saveButton")
function togglePasswordVisibility() {
    const input = document.getElementById("password");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }
  

const generatePassword = (length) => {
 const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
 const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 const numeric = "0123456789"
 const symbol = "!@#$%^&*()_+{}[];:'/?.,<>~`"

 const data = lowerAlphabet + upperAlphabet + numeric + symbol
 let generator = '';
 for (let index = 0; index < length; index++) {
    generator += data [~~(Math.random() * data.length)];
 }
 return generator
}
const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    setTimeout(() =>{
        alert('password has been generated!')
    },1000)
}

const savePassword = () => {
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
    saveButton.setAttribute('download', 'myPasswordGeneratorLOG .txt')
    setTimeout(() => {
      alert('berhasil disimpan')
    } ,1000)
}
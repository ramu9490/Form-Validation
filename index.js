const myform = document.querySelector(".myform")
const myPassword = document.querySelector(".password")
const myCnfPaswrd = document.querySelector(".passwordconf")
let isValues = false
myform.addEventListener ("submit",function(event){
    console.log(event)
event.preventDefault()
    if(myPassword.value== myCnfPaswrd.value){

        isValues =true
        alert("Thanks for registration!")
    }else{
        isValues=false
        alert("password doesn't match")
    }
  
})
let regdata=JSON.parse(localStorage.getItem('registrationdata'))
console.log(regdata)

let email=document.getElementById('email')
let pswd=document.getElementById('pswd')
let btn=document.getElementById('btn')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let userdetails=regdata.find(ele=>ele.email==email.value);
    if( email.value=='' || pswd.value==''){
        alert('please fill out all the fields!!!')
    }
    else{
    if(userdetails){
        if(userdetails.pswd===pswd.value){
            alert('login successfull!!!')
            location.href='../HomePage/homepage.html'
        }
        else{
            alert('entered password is wrong.. try again!!!')
        }
    }
    else{
        alert('user not found. please register!!!')
        location.href='../RegisterPage/register.html'
    }
}
})
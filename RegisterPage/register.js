let fullname=document.getElementById('fullname')
let email=document.getElementById('email')
let pswd=document.getElementById('pswd')
let cpswd=document.getElementById('cpswd')
let btn=document.getElementById('btn')
let registrationdata=[];

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let jsondata=localStorage.getItem('registrationdata')
    if(jsondata){
        registrationdata=JSON.parse(jsondata)
        if(fullname.value=='' || email.value=='' || pswd.value=='' || cpswd.value==''){
            alert('please fill out all the fields!!!')
        }
        else{
            let repeated=registrationdata.find(ele=>ele.email===email.value)
            if(repeated){
                alert('user already exist. please login!!!')
                location.href='../LoginPage/login.html'
            }
            else{
                if(pswd.value!==cpswd.value){
                    alert('password is not matching. try again!!')
                }
                else{
                    registrationdata.push({fullname:fullname.value,email:email.value,pswd:pswd.value})
                    localStorage.setItem('registrationdata',JSON.stringify(registrationdata));
                    alert('registration successfull!!!')
                    location.href='../LoginPage/login.html'
                }
            }
        }
    }
    else{
        registrationdata.push({fullname:fullname.value,email:email.value,pswd:pswd.value})
        localStorage.setItem('registrationdata',JSON.stringify(registrationdata));
    }
})
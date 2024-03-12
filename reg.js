let details=[]
function solve() { 
    let name=getElementById('first').value;
    let password =  
        document.getElementById('password').value; 
    let repassword =  
        document.getElementById('repassword').value; 
    let mobile =  
        document.getElementById('mobile').value; 
    let maill = 
        document.getElementById('email').value; 
    let flag = 1; 
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
    if (!emailRegex.test(maill)) { 
        flag = 0; 
        pass.innerText =  
            'Please enter a valid email address.'; 
        setTimeout(() => { 
            pass.innerText = ""; 
        }, 3000); 
    } 
    
    if (password !== repassword) { 
        flag = 0; 
        pass.innerText = 
            "Passwords do not match. Please re-enter."; 
        setTimeout(() => { 
            pass.innerText = ""; 
        }, 3000); 
    } 
  
    let passwordRegex =  
        /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$/; 
  
    if (!passwordRegex.test(password)) { 
        flag = 0; 
        pass.innerText = 
            'Password must be at least 8 characters'+ 
            ' long and include at least one number,'+ 
            ' one alphabet, and one symbol.'; 
        setTimeout(() => { 
            pass.innerText = ""; 
        }, 3000); 
    } 
    if (flag) 
        alert("Form submitted"); 
    let detail={
        name:name,
        mail:maill
        

    };
        details.push(detail);
        alert("details");
        console.log(details)
}
function getdetails(){
    const mail=document.getElementById('mail').value
    let detail=null;
    for(let i=0;i<details.length;i++)
    {
        if(student[i]['mail']===mail){
            detail=details[i];
            break;
        }
    }
    if(detail){
        alert("HEY RIGHT");
    }
    else{
        alert('oops!');
    }
}

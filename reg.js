window.details=[]
function solve() { 
    let name=document.getElementById('first').value;
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
        window.details.push(detail)
        alert(JSON.stringify(window.details));
        console.log(window.details)
        flag-=0;
    
    
}
function getdetails(){
    let mail=document.getElementById('mail').value;
    alert(mail);
    let detail=null;
    alert(JSON.stringify(window.details));
    for(let i=0;i<window.details.length;i++)

    {
        console.log(window.details[i]['mail']);
        if(window.details[i]['mail']===mail){
            detail=window.details[i];
            alert(detail)
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

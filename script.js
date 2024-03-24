let txt=document.getElementById('txt');
let btn=document.querySelector('button');
let output_txt=document.getElementById('output_txt');
let output=document.getElementById('output');
let crossbtn=document.getElementById('crossbtn');
btn.addEventListener('click',()=>{
    let age=parseInt(txt.value);
    if(age>=18){
        output_txt.innerText="🧑🏻 You are Adult";
        output.style.display="block";
        if(age>=150)
        {
            output_txt.innerText="Sorry 🫡 Enter Valid Age";
        output.style.display="block";
        }
    }
    else if(isNaN(age)){
        output_txt.innerText="Sorry 🫡 Enter Valid Age";
        output.style.display="block";
    }

    else{
        output_txt.innerText="👶🏻 You are Child";
        output.style.display="block";
    }
    crossbtn.addEventListener('click',()=>{
        
        output.style.display="none";
    })
    txt.value="";
}
)
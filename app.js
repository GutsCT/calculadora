const botones = document.querySelectorAll('.boton')
const pantalla = document.querySelector('.display')
flag = false;
botones.forEach(boton=>{
    boton.addEventListener('click',()=>{
        const botonApretado = boton.textContent;

        switch(botonApretado){
            case "C":
                pantalla.textContent = "0"
                return;
                break;
            case "=":
                try {
                    const resultado = eval(pantalla.textContent)
                    pantalla.textContent = resultado
                    flag = true;
                } catch (error) {
                    pantalla.textContent = "ERROR"
                    console.log(error)
                }
                return;
                break;
            case "←":
                if(pantalla.textContent.length === 1 || pantalla.textContent === "ERROR"  ){
                    pantalla.textContent = "0"
                }
                pantalla.textContent = pantalla.textContent.slice(0, -1)
                if(pantalla.textContent ==="" ){
                    pantalla.textContent = "0"
                }
                return;
                break;
        }
        if(pantalla.textContent ==="0" || pantalla.textContent === "ERROR" || flag === true){
            flag = false
            pantalla.textContent = botonApretado
            
        }else{
            pantalla.textContent += botonApretado
        }        
    })
})


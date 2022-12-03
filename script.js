const botonNumero= document.querySelectorAll('[data-numero]');
const botonOperador= document.querySelectorAll('[data-operador]');
const botonBorrarTodo= document.querySelector('[data-borrar-todo]');
const botonBorrar= document.querySelector('[data-borrar]');
const botonIgual= document.querySelector('[data-igual]');
const textoValorSuperior= document.querySelector('[data-valor-superior]');
const textoValorInferior= document.querySelector('[data-valor-inferior]');



class Calculadora{
    constructor(textoValorInferior,textoValorSuperior){
        this.textoValorInferior = textoValorInferior
        this.textoValorSuperior = textoValorSuperior
        this.ValorInferior = ''
        this.ValorSuperior =  ''
        this.operador   = undefined
    }
    
    agregarNumero(numero){
        if(numero === '.' && this.ValorInferior.includes('.'))
        return
    this.ValorInferior = this.ValorInferior + numero
    }
    imprimirDisplay(){
        this.textoValorInferior.innerText = this.ValorInferior
        this.textoValorSuperior.innerText = this.ValorSuperior
    }
    borrar(){
      this.ValorInferior= this.ValorInferior.slice(0,-1)  
    }

    operaciones(operador){
        if(this.ValorInferior == '') 
        return
        if(this.ValorSuperior != ''){
            this.realizarCalculo()
        }
        this.operador = operador
        this.ValorSuperior = this.ValorInferior
        this.ValorInferior = ''
    }

    realizarCalculo(){
        let resultado
        let conversionValorSuper =  parseFloat(this.ValorSuperior)
        let conversionValorInfer = parseFloat(this.ValorInferior)

        if(isNaN(conversionValorSuper)|| isNaN(conversionValorInfer))
            return
        switch (this.operador) {
            case '+':
                
                resultado = conversionValorSuper + conversionValorInfer
                break;

            case '-':
                resultado = conversionValorSuper - conversionValorInfer
                break;
            
            case '÷':
                resultado =conversionValorSuper / conversionValorInfer
                break;
            case '*':
                resultado = conversionValorSuper * conversionValorInfer
                break;

            default:
                return;
        }
        this.ValorInferior = resultado
        this.operador = undefined
        this.ValorSuperior = ''

     }
     borrarTodo(){

        this.ValorInferior = ''
        this.ValorSuperior=''
        this.operador = undefined
     }
       

    }



const calculadora = new Calculadora(textoValorInferior,textoValorSuperior)

botonNumero.forEach(boton => {
    boton.addEventListener('click', ()=>{
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimirDisplay()
        
    })
})


botonBorrar.addEventListener('click',()=> {
    calculadora.borrar()
    calculadora.imprimirDisplay()
})

botonOperador.forEach(boton => {
    boton.addEventListener('click', ()=>{
        calculadora.operaciones(boton.innerText)
        calculadora.imprimirDisplay()
        
    })
})

botonIgual.addEventListener('click',()=> {
    calculadora.realizarCalculo()
    calculadora.imprimirDisplay()
})

botonBorrarTodo.addEventListener('click',()=> {
    calculadora.borrarTodo()
    calculadora.imprimirDisplay()
})


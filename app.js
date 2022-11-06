const random        = document.getElementById('random');
const creciente     = document.getElementById('creciente');
const decreciente   = document.getElementById('decreciente');
const pares         = document.getElementById('pares');
const newArray      = document.getElementById('button');

let numeros     = [];
let crecientE   = [];
let decrecientE = [];
let parr         =[];

newArray.addEventListener('click',(e)=>{
    limpiarDom();
    resetArray();
    creatArray()
})

function creatArray(){
    //Creamos el array
    for (let i = 0; i < 20; i++) {
        const nRandom = Math.round(Math.random()*100);
        numeros.push(nRandom)
    }
    //Insertamos el arrya al DOM
    const fragment1 = document.createDocumentFragment()
    numeros.forEach(n=>{
        const list = document.createElement('li');
        list.textContent = n;
        list.classList.add('block__item');
        fragment1.append(list)
    })
    random.append(fragment1);
    ordenar();
}

const limpiarDom =()=>{
    while(random.firstChild ){
        random      .removeChild(random.firstChild);
    }
    while(creciente.firstChild ){
        creciente   .removeChild(creciente.firstChild);
    }
    while(decreciente.firstChild ){
        decreciente .removeChild(decreciente.firstChild);
    }
    while(pares.firstChild ){
        pares       .removeChild(pares.firstChild);
    }
}
const resetArray =()=>{
    numeros      = [];
    crecientE    = [];
    decrecientE  = [];
    parr         = [];
}
const ordenar = ()=>{
    crecientE       = [...numeros.sort((a,b)=>a-b)];
    const fragment2 = document.createDocumentFragment()

    decrecientE     = [...numeros.sort((a,b)=>b-a)];
    const fragment3 = document.createDocumentFragment()

    crecientE.forEach(e=>{
        const list = document.createElement('li');
        list.textContent = e;
        list.classList.add('block__item');
        fragment2.append(list)
    })
    creciente.append(fragment2)

    decrecientE.forEach(e=>{
        const list = document.createElement('li');
        list.textContent = e;
        list.classList.add('block__item');
        fragment3.append(list)
    })
    decreciente.append(fragment3)

    numeros.forEach(n=>{
        if(esPar(n)===true){
            parr.push(n)
        }
    })
    const fragment4 = document.createDocumentFragment()
    parr.forEach(n=>{
        const list = document.createElement('li');
        list.textContent = n;
        list.classList.add('block__item');
        fragment4.append(list)
    })
    pares.append(fragment4);
}

const esPar = (n)=>{
    return n%2==0;
}

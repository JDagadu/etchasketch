let changesize = document.querySelector('.changesizebutton');
let mainbox = document.querySelector('.mainbox');
let size = 16;


create(size);



mainbox.addEventListener('mouseover',(event)=>{
    
    if( event.target.className =='boxes'){
        event.target.style.backgroundColor = `#${Math.ceil((Math.random() * 1000000))}`
    }

})



changesize.addEventListener('click',(event)=>{
    let sizetest;
    do{
        sizetest = Number(prompt("Please input size range between 1-64"));
    }while(sizetest<1 || sizetest>64||Number.isNaN(sizetest))

    size = sizetest;
    create(size);

    


})


function create(size){
    mainbox.innerHTML = "";
    if(!(size<1 || size>64)){
        mainbox.style.cssText = `grid-template-columns: repeat(${size}, auto);grid-template-rows: repeat(${size}, auto)`;
        for(let i = 1 ; i<= size; i++){
            for(let j = 1; j<=size; j++){
                let box = document.createElement('div');
                box.className = 'boxes';
            
                mainbox.appendChild(box);
            }
            
        }
    }
}


document.body.addEventListener('keyup',(envet)=>{
   let key = envet.code.toLocaleLowerCase()
   playSong(key);
   addCor(key)
})

document.querySelector('#play-sound').addEventListener('click',()=>{
    let input = document.querySelector('#input');
    let composition = input.value.split('')
    if(input !=='' ){
        playComposition (composition)
    }
    
})

function playSong(key){
    let song = document.querySelector(`#s_${key}`)
    
    if(song){
        song.currentTime = 0;
        song.play()
    }
    
}

function addCor(key){
    let keySong = document.querySelector(`.keys div[data-key="${key}"`)
    
    if(keySong){
        keySong.classList.add('active')

        setTimeout(()=>{
            keySong.classList.remove('active')
        },300)
    }
   
}

function  playComposition (composition){
    let wait = 0;
   
    for(let i = 0; i< composition.length;i++){  
        setTimeout(()=>{
            playSong('key'+composition[i])
            addCor('key'+composition[i])
        },wait)
        wait += 250 
    } 
}
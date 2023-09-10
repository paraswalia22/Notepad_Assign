let val1 = localStorage.getItem('store');
if(val1){
    document.querySelector('.text_area').value = val1; 
}

function set(){
    let val = document.querySelector('.text_area').value;
    localStorage.setItem('store',val);
}

function remove(){
    localStorage.removeItem('store');
    document.querySelector('.text_area').value = '';
}
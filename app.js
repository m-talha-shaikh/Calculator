let button = document.body.querySelector('#button');
let operands = Array.from(document.body.querySelectorAll('.op'));
let resultBox = document.querySelector('#result p');
let equal = document.querySelector('#eq');
let clear = document.querySelector('#clr');
let del = document.querySelector('#del');


clear.addEventListener('click', ()=>{
	resultBox.innerHTML = '';
})

equal.addEventListener('click', ()=>{
		try {
    		resultBox.innerHTML = eval(resultBox.innerHTML); 
    		if(resultBox.innerHTML == 'undefined'){
    			resultBox.innerHTML = '';
    		}
		} catch (e) {
   			 if (e instanceof SyntaxError) {
        		resultBox.innerHTML = "Error";
        		setTimeout(()=>{
        			resultBox.innerHTML = '';
        		}, 500)
    		} else {
        		throw e;
    		}
		}
})

del.addEventListener('click', ()=>{
	resultBox.innerHTML = resultBox.innerHTML.slice(0, -1);
})


for(let i = 0 ; i < operands.length ; i++){
	operands[i].addEventListener('click', (e)=>{
		resultBox.innerHTML += operands[i].innerHTML;
	})
}


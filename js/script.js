console.log('u a ' + window.location);

const form=document.forms[0];

let cr=document.querySelector('.total');
	
form.onsubmit=function(e){
	e.preventDefault();
	console.log('Submitted');
	let pp=Math.sin(form.elements.angle1.value);
	cr.innerHTML=pp

}


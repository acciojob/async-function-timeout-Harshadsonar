const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const btn = document.getElementById('btn');
const outputDiv = document.getElementById('output');

async function displayMessage(){
	const tect = textInput.value;
	const delay = delayInput.value;

	outputDiv.textContent = '';

	await new Promise(resolve = setTimeout(resolve, elay));

	outputDiv.tectContent = text;
}
btn.addEventListener('click', displayMessage);

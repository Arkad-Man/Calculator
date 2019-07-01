const inputs = document.getElementsByTagName('input');

let insert = (value) => {
    let textview = document.getElementById('textview');
    textview.value += value;
};

let equal = () => {
    let exp = document.getElementById('textview');
    event.preventDefault();
    if(exp.value) exp.value = eval(exp.value);
};

let clean = () => {
    let a = document.getElementById('textview');
    a.value = a.value = '';
};

let remove = () => {
    let textview = document.getElementById('textview');
    textview.value = textview.value.substring(0, textview.value.length - 1);
};

document.getElementById('form').onsubmit = () => equal();

for(let i = 0; i < inputs.length; i++){
    let input = inputs[i];

    if(
        input.className !== 'textview' &&
        input.value !== 'C' &&
        input.value !== '<' &&
        input.value !== '=' &&
        input.value !== '%'

    ) input.onclick = () => insert(input.value);

    if(input.value === '=') input.onclick = () => equal();

    if(input.value === 'C') input.onclick = () => clean();

    if(input.value === '<') input.onclick = () => remove();
};

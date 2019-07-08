(() => {
    const inputValue = [
        'C', 'del', '/', '*',
        '7', '8', '9', '-',
        '4', '5', '6', '+',
        '1', '2', '3', '%',
        '0', '.', '='];

    const root = document.getElementById('root');
    root.className = 'container';

    const form = document.createElement('form');
    form.id = "form";

    const input = document.createElement('input');
    input.id ='textview';
    input.className ='textview';

    const div = document.createElement('div');
    div.className = 'btn-wrapper';

    form.appendChild(input);

    for(let i = 0; i < inputValue.length; i++){
        const input = document.createElement('input');
        input.type = 'button';
        input.setAttribute('value', inputValue[i]);
        div.appendChild(input);
    };

    root.appendChild(form);
    root.appendChild(div);
})();

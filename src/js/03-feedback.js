
import throttle from "lodash.throttle";

const ref = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
    button: document.querySelector('.feedback-form button')
}

ref.form.addEventListener('input', throttle(onFormText, 500));
ref.form.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';

populateTextareaInput();

let formData = {};

ref.form.addEventListener('input', e => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    formData[e.target.name] = e.target.value;
    console.log(formData); 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
})

function onFormText(e) {
    const message = e.target.value;
    console.log(message);
    localStorage.setItem(STORAGE_KEY, message);
     
}
function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();
    // очищає форму після відправлення

    localStorage.removeItem(STORAGE_KEY);
    // очищає localStorage після відправлення


}

function populateTextareaInput() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);

    if (saveMessage) {
        console.log(saveMessage);
    }

    ref.textarea.value = saveMessage;
    ref.input.value = saveMessage;
}
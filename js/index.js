let rate_btns = document.querySelectorAll('#rate_btn');

for (const i of rate_btns) {
    i.addEventListener('click', (event) => {
        sessionStorage.setItem("rate", event.target.value);
    });
}

const submit_btn = document.querySelector('#submit_btn');
submit_btn.addEventListener('click', () => {
    window.location = 'ack.html';
});
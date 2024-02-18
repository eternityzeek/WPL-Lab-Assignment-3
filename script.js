const form = document.getElementById('dataForm');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    const newData = { name, address, contact };
    saveData(newData);
    form.reset();
    window.location.href = 'data.html';
});


function saveData(data) {
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push(data);
    localStorage.setItem('formData', JSON.stringify(formData));
}
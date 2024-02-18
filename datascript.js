
function displayStoredData() {
    const dataOutput = document.getElementById('dataOutput');
    dataOutput.innerHTML = '';
    const formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.forEach((data, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Address:</strong> ${data.address}</p>
            <p><strong>Contact:</strong> ${data.contact}</p>
            <button onclick="editData(${index})">Edit</button>
            <button onclick="deleteData(${index})">Delete</button>
        `;
        dataOutput.appendChild(div);
    });
}


function editData(index) {
    const formData = JSON.parse(localStorage.getItem('formData')) || [];
    const newData = formData[index];
    const newName = prompt('Enter new name:', newData.name);
    const newAddress = prompt('Enter new address:', newData.address);
    const newContact = prompt('Enter new contact:', newData.contact);
    formData[index] = { name: newName, address: newAddress, contact: newContact };
    localStorage.setItem('formData', JSON.stringify(formData));
    displayStoredData();
}


function deleteData(index) {
    const formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.splice(index, 1);
    localStorage.setItem('formData', JSON.stringify(formData));
    displayStoredData();
}


displayStoredData();

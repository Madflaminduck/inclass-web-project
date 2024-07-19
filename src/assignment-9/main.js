//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

let initial_users = [];

function hideForm() {
    document.querySelector("#userForm").classList.add('d-none');
    document.querySelector("#userTable").classList.remove('d-none');
}

function showForm() {
    document.querySelector("#userForm").classList.remove('d-none');
    document.querySelector("#userTable").classList.add('d-none');
}

function getUsers() {
    let storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        return JSON.parse(storedUsers);
    } else {
        return initial_users;
    }
}

function addUser(event) {
    event.preventDefault();

    let firstName = document.querySelector("#firstName").value.trim();
    let lastName = document.querySelector("#lastName").value.trim();

    let users = getUsers();
    
    let isDuplicate = users.some(user => user.firstName == firstName && user.lastName == lastName);
    if (isDuplicate) {
        alert(`User ${firstName} ${lastName} is already registered.`);
        return;
    }

    if (firstName && lastName) {
        let user = { firstName: firstName, lastName: lastName };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    document.querySelector("#userForm").reset();
    displayUsers();
}

function displayUsers() {
    let users = getUsers();
    let userTableBody = document.querySelector("#userTable tbody");
    userTableBody.innerHTML = '';

    users.forEach((user, index) => {
        let row = userTableBody.insertRow();
        row.insertCell(0).textContent = user.firstName;
        row.insertCell(1).textContent = user.lastName;
        row.setAttribute('data-index', index);
    });

}

function clearUsers() {
    localStorage.removeItem('users');
    let users = getUsers();
    users.length = 0;
    let userTableBody = document.querySelector("#userTable tbody");
    userTableBody.innerHTML = '';

}

document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.querySelector("#userForm");
    const cancelButton = document.querySelector("#cancelButton");
    const clearAllButton = document.querySelector("#clearAllButton");
    userForm.addEventListener("submit", addUser);
    cancelButton.addEventListener("click", () => userForm.reset());
    clearAllButton.addEventListener("click", clearUsers);

    displayUsers();
});
const contacts = document.querySelector('.contacts-list');
const personsData = JSON.parse(loadContacts());

for (let person of personsData) {
  contacts.innerHTML +=
    `<li data-email="${person.email}" data-phone="${person.phone}">
        <strong>${person.name}</strong>
    </li>`;
}
const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>New message</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;

document.querySelector('#msg-container').innerHTML += newMessage;

const messagesCount = document.querySelectorAll('p').length;
document.querySelector('#count').textContent = messagesCount;

let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`;
function count() {
  document.querySelector('#count').textContent = document.querySelectorAll('.row').length;
}
function deletMessage() {
  const delet = document.querySelectorAll('.delete');
  for (let i = 0; i < delet.length; i++) {
    delet[i].addEventListener('click', function() {
      this.parentNode.remove();
      count();
    });
  }
}
deletMessage();
document.querySelector('#btn-add').addEventListener('click', function() {
  document.querySelector('#msg-container').innerHTML += ` 
    <div class="row new-row">
      <img class="avatar" src="images/avatar-1.jpg" />
      <div class="text-container">
        <h6>John Doe</h6>
        <p>${document.querySelector('#add-message').value}</p>
      </div>
      <span class="delete">✖</span>
    </div>
  `;
  count();
  deletMessage();
  document.querySelector('#add-message').value = '';
});
const search = document.querySelector('#btn-search').addEventListener('click', function() {
  const textToCompare = document.querySelector('#search-message').value.toLowerCase();
  for (let i = 0; i < document.querySelectorAll('h6').length; i++) {
    document.querySelectorAll('h6')[i].parentNode.parentNode.style.display = 'flex'
    const name = document.querySelectorAll('h6')[i].textContent.toLowerCase();
    if (!name.includes(textToCompare)) {
      document.querySelectorAll('h6')[i].parentNode.parentNode.style.display = 'none';
    }
  }
  document.querySelector('#search-message').value = '';
})

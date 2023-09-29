import { postRegisterForm } from "./api";
const mainContainer = document.querySelector("main");

export class ModalWindow {
  constructor(eventWidget) {
    this.eventWidget = eventWidget;
    this.name = eventWidget.name;
    this.img = eventWidget.img;
    this.detailedDescription =
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.";
    this.modalWindow = document.createElement("div");
    this.refreshElement();
  }

  refreshElement() {
    // whole window
    this.modalWindow.classList.add("modal");
    this.modalWindow.id = `modal--${this.eventWidget.id}`;
    // add picture
    this.modalWindow.innerHTML += `<div class="modal__picture"><img src="${this.img}" alt="${this.name}"></div>`;
    // window title
    this.modalWindow.innerHTML += `<h2>${this.name}</h2>`;

    // text normal shoud be extra
    this.modalWindow.innerHTML += `<p>${this.eventWidget.description}</p>`;

    // Create the modal form
    const form = document.createElement("div");
    form.className = "modal__form";

    form.innerHTML = `
        <h2>Register</h2>
        <p>Fill out the form below to register:</p>
        <form id="registrationForm" method="post">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required><br><br>
          
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required><br><br>
          
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required><br><br>
  
          <label for="phone">Phone number:</label>
          <input type="phone" id="phone" name="phone" required><br><br>
  
          <label for="checkbox">I am older than 18 </label>
          <input type="checkbox" id="checkbox" name="checkbox" required><br><br>
  
          <label for="users-input">How did you hear about our event</label>
          <textarea id="users-input" name="users-input"></textarea><br><br>
          
          <button class="submit-btn" type="submit" value="Register">Register</button>
        </form>
      `;
    const submitBtn = form.querySelector('.submit-btn')
    
    submitBtn.addEventListener('click', (submit) => {
      postRegisterForm(this.eventWidget.id, this.createData(form));
      submit.preventDefault();
      console.log(this.createData(form))
    })
    this.modalWindow.appendChild(form);
    mainContainer.appendChild(this.modalWindow);
  }
  
  createData = (form) => {
    return{
      firstName: form.querySelector('#firstName').value,
      lastName: form.querySelector('#lastName').value,
      email: form.querySelector('#email').value,
      phone: form.querySelector('#phone').value,
      adult: form.querySelector('#checkbox').value,
     usersInput: form.querySelector('#users-input').value, 
    }
  }
}

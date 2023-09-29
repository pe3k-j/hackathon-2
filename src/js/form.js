console.log('hi');

const main = document.querySelector('body');


class modalWindow{   
    constructor(eventWidget) {
        this.eventWidget = eventWidget;

      this.detailedDescription = ' ';
      this.form = null;
      this.refreshElement();
      console.log('text');
    }
  
    refreshElement() {
      // Create the modal form
      this.form = document.createElement('div');
      this.form.className = 'modal__form';
  
      this.form.innerHTML = `
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
          
          <input type="submit" value="Register">
        </form>
      `;
  
      this.detailedDescription = document.createElement('div');
      this.detailedDescription.className = 'modal__description';
  
      this.detailedDescription.innerHTML = `
        ${this.description}
        <p>Families, couples and bunches of friends are always welcomed but feel free to come alone and get to know other people. We are excited to see you at our event. For more information, please contact us via email, which you can find in the contacts.</p>
      `;
  
      main.appendChild(this.detailedDescription)
      main.appendChild(this.form)


    }
  }
const modalWindow1 = new modalWindow('name', 'date', 'description', 'img');
console.log(modalWindow1);


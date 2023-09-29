

class EventWidget {
    constructor(name, date, description, img) {
        this.element = document.createElement('div')        //change on extension parent.cre.....
        this.name = name
        this.date = date
        this.description = description
        this.img = img
        this.refreshElement();
    } //end of contructor

    refreshElement() {
        this.element.innerHTML = 
        `<div class="event">
        <div class="event__title">${this.title}</div>
        <div class="event__date">Whenn? ${this.date}</div>
        <div class="event__description">${this.description}</div>
        div class="event__btn">Find out more</div>              
        <div class="event__img" ><img src="${this.img}" alt="${this.title}"></div>
        </div>`                                                 //add in extension the form element for submission & change button & eventlistener
        ;
        //querySelector for subsequent fucntionality
         const findOutMore = this.element.querySelector(".event__btn")
         const modalWindow = document.querySelector(".modal")
        
        // event listner for modal window to pop up
         findOutMore.addEventListener('click', ()=> {               //change eventlistner to post data from form
        modalWindow.className = "modal__display"
      })

    } // end of refresh element

    //querySelector for subsequent fucntionality
} //end of class

const eventTest = new EventWidget('foo', 'bar', 'bee-boo', 'pictures')

console.log(eventTest);
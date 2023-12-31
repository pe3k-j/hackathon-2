const mainContainer = document.querySelector('main')

 export class EventWidget {
    constructor(name, id,  date, description, img) {
        this.element = document.createElement('div')        //change on extension parent.cre.....
        this.name = name
        this.id = id
        this.date = date
        this.description = description
        this.img = img
        this.refreshElement();
    } //end of contructor

    refreshElement() {
        this.element.innerHTML = 
        `<div class="event">
        <div class="event__title">${this.name}</div>
        <div class="event__date">Date: <strong>${this.date}</strong></div>
        <div class="event__description">${this.description}</div>
        <div class="event__btn"><button>Find out more</button></div>              
        <div class="event__img" ><img src="${this.img}" alt="${this.title}"></div>
        </div>`                                                 //add in extension the form element for submission & change button & eventlistener
        ;
        //querySelector for subsequent fucntionality
         const findOutMore = this.element.querySelector(".event__btn")
         
        // event listner for modal window to pop up
         findOutMore.addEventListener('click', ()=> { 
        const modalWindow = document.getElementById(`modal--${this.id}`)              //change eventlistner to post data from form
        modalWindow.className += " modal__display"
      })

    //featured event selector
        if (this.id === 1) {
            const elementContainer = this.element.querySelector('.event')
            elementContainer.className = 'featured__event'
            const featuredBanner = document.createElement('div')
            featuredBanner.innerHTML = 'Featured Event!'
            featuredBanner.className = 'featured__banner'
            elementContainer.appendChild(featuredBanner)
        }
        mainContainer.appendChild(this.element)
    } // end of refresh element
    //querySelector for subsequent fucntionality
} //end of class


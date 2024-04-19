let contactViewOpen;


/**
 * This function controls the view of the options pop-up for editing and deleting contacts.
 * It delivers the click event necessary to determine the view and closing of the pop-up via if-Statement.
 * 
 * @param {event} event The event is triggered as a click-event 
 */


window.onclick = function(event) {
    if(event.target.classList.contains('open-opt')) showOptions();
    else closeOptions();
  }

/**
 * This function opens the view for the options pop-up for editing and deleting contacts.
 * It opens the view by changing the CSS property transform: translateX().
 */  

function showOptions(){
    document.getElementById('toggle-options').style = 'transform: translateX(0)';
}

/**
 * This function closes the view for the options pop-up for editing and deleting contacts.
 * It closes the view by changing the CSS property transform: translateX().
 */ 

function closeOptions(){
    document.getElementById('toggle-options').style = 'transform: translateX(200%)';
}

/**
 * This function shows the contact view container in the mobile version up to a width of 992 px.
 * It then also renders the information within the container depending on the contact viewed via the received parameters, in mobile as well as desktop.  
 * It changes the variable contactViewOpen to enable later closing of the container, in the event of display resizing.
 * 
 * @param {String} userName This is the name of the contact.
 * @param {String} email  This is the email of the contact. 
 * @param {String} phone  This is the phone number of the contact.
 * @param {String} colour This is the random color assigned to the contact.
 */

function viewContact(userName, email, phone, colour){
    contactViewOpen = true;
    renderViewedContact(userName, email, phone, colour);
    if(window.innerWidth < 992){
        document.getElementById('contact-list').classList.add('d-non')
        document.getElementById('viewedContact').classList.remove('d-non')
    }
    else showContactDesktop();
}


/**
 * This function shows the contact container in the desktop version with a slide effect, due to transform: translateX().
 */


function showContactDesktop(){
    let contactContainer = document.getElementById('contact-container-desktop')
    contactContainer.style = 'transform: translateX(0)'
}


/**
 * This function closes the contact view container in the mobile version. 
 * It also changes the variable contactViewOpen to signal the closure.
 */

function closeContact(){
    contactViewOpen = false;
    document.getElementById('viewedContact').classList.add('d-non')
    document.getElementById('contact-list').classList.remove('d-non')
}

/** 
 * This function enables responsiveness of the contact view container in the event of resizing of the display.
 * It relies on the contactViewOpen variable and display width as triggers.
 */

window.addEventListener("resize", () => {
    if(contactViewOpen && window.innerWidth > 992){
        document.getElementById('viewedContact').classList.add('d-non')
        document.getElementById('contact-list').classList.remove('d-non')
    }

    if(contactViewOpen && window.innerWidth < 992){
            document.getElementById("viewedContact").classList.remove("d-non");
            document.getElementById("contact-list").classList.add("d-non");
        }
});


/**
 * This function controls the visual events after a new contact is added, in mobile or desktop.
 * It renders the new contact information in the contact view container. 
 * It closes the add-contact container and shows the pop-up for success.
 * 
 * @param {String} userName This is the name of the contact.
 * @param {String} email  This is the email of the contact. 
 * @param {String} phone  This is the phone number of the contact.
 * @param {String} colour This is the random color assigned to the contact.
 */

function showNewContactInformation(userName, email, phone, colour){
    if(window.innerWidth < 992){
        viewContact(userName, email, phone, colour);
        closeAddContact();
        successPopUp();
    }
    else{
        closeAddContact();
        successPopUp();
    }
}

/**
 * This function shows the container for adding a new contact, in mobile or desktop.
 * It opens the container by changing the CSS property transform: translateY() or transform: translateX().
 */

function showAddContact(){
    let overlay = document.getElementById('overlay')
    overlay.classList.remove('d-non')
    overlay.style.opacity = "60%";
    if(window.innerWidth < 992 ){
        document.getElementById('add-contact').style = 'transform: translateY(0)'
    }
    else{
        document.getElementById('add-contact').style = 'transform: translateX(0)'
    }

};

/**
 * This function closes the container for adding a new contact, in mobile or desktop.
 * It closes the container by changing the CSS property transform: translateY() or transform: translateX().
 */

function closeAddContact(){
    let overlay = document.getElementById('overlay')
    overlay.classList.add('d-non')
    overlay.style.opacity = "0";
    if(window.innerWidth < 992 ){
        document.getElementById('add-contact').style = 'transform: translateY(275%)'
    }
    else{
        document.getElementById('add-contact').style = 'transform: translateX(200%)'
    }
}

/**
 * This function controls the visual pop-up for successfully adding a new contact, in mobile or desktop.
 */

function successPopUp(){
    if(window.innerWidth < 992) showSucessPopUpMobile();
    else showSuccessPopUpDesktop();
}


/**
 * This function shows the success pop-up in the mobile version.
 * It shows and hides the container by changing the CSS property transform: translateY().
 */

function showSucessPopUpMobile(){
    setTimeout(() => {
        document.getElementById('success-popup').style = `transform: translateY(0)`
        setTimeout(() => {
            document.getElementById('success-popup').style = `transform: translateY(275%)`
        }, 1000);
    }, 200);
}

/**
 * This function shows the success pop-up in the desktop version.
 * It shows and hides the container by changing the CSS property transform: translateX().
 */

function showSuccessPopUpDesktop(){
    setTimeout(() => {
        document.getElementById('success-popup-desktop').style = `transform: translateX(0)`
        setTimeout(() => {
            document.getElementById('success-popup-desktop').style = `transform: translateX(300%)`
        }, 1000);
    }, 200);
}

/**
 * This function shows the contact edit container, in mobile or desktop.
 * It shows the container by changing the CSS property transform: translateY() or transform: translateX().
 */

function showEditContact(){
    if(window.innerWidth < 992 ){
        document.getElementById('edit-contact').style.transform = 'translateY(0)'
    }
    else{
        document.getElementById('edit-contact').style.transform = 'translateX(0)'
    }
}

/**
 * This function closes the contact edit container, in mobile or desktop.
 * It closes the container by changing the CSS property transform: translateY() or transform: translateX().
 */

function closeEditContact(){
    if(window.innerWidth < 992 ){
        document.getElementById('edit-contact').style.transform = 'translateY(275%)'
    }
    else{
        document.getElementById('edit-contact').style.transform = 'translateX(200%)'
    }}



    
const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
const searchedHistory = {};
let storedHistory = [];

const themeIcon = document.querySelector('.theme');

// themeIcon.addEventListener("click", () => {
//   document.body.classList.toggle("light");
//   if (document.body.classList.contains("light")) {
//     themeIcon.src = "./assets/moon.svg";
//   } else {
//     themeIcon.src = "./assets/sun.svg";
//   }
// });

/**
 * DOMCONTENT LOADED
 * LOAD THE window
 */
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  const formEl = document.querySelector('.form-select');
  const firstNameEl = document.getElementById('firstname');
  const lastNameEl = document.getElementById('lastname');
  const commentsEl = document.getElementById('comments');
  const checkboxEl = document.getElementById('checkbox');
  const emailEl = document.getElementById('email');
  const emailErrorEl = document.getElementById('email-error');
  const submitBtnEl = document.getElementById('submit');

  let fName = '',
    lName = '',
    comment = '',
    email = '';

  /*check if name fields are populated and enable submit button
   */

  const inputNameValidation = (fName, lName) => {
    submitBtnEl.disabled = !(fName.length > 0 && lName.length > 0);
  };

  /**input validation of names
   *
   */
  const nameHandler = (e) => {
    if (e.target.id === 'firstname') {
      fName = e.target.value;
    }
    if (e.target.id === 'lastname') {
      lName = e.target.value;
    }
    if (fName || lName) inputNameValidation(fName, lName);
  };


  /**comments handler
   *
   */
  const commentsHandler = (e) => {
    if ((e.target.id = 'comments')) {
      comment = e.target.value;
    }
    
  };


  /**checkbox event handler
   */
  // checkboxEl.addEventListener("change", () => {
  const checkboxHandler = (e) => {
    if (checkboxEl.checked === true) {
      emailEl.style.display = 'block';
    } else {
      emailEl.style.display = 'none';
    }
    // });
  };

  /**email eventhandler
   */

  const validateEmail = (e) => {
    let valid = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    email = e.target.value;
    // console.log(email)
    const error = document.getElementById('error');
    if (!emailRegex.test(email)) {
      error.classList.add('visible');
      emailEl.classList.add('invalid');
      error.setAttribute('aria-hidden', false);
      error.setAttribute('aria-invalid', true);
    } else {
      error.classList.remove('visible');
      emailEl.classList.add('valid');
      error.setAttribute('aria-hidden', true);
      error.setAttribute('aria-invalid', false);
    }
  };

  const getFormData = () => {
    let formData = {
      firstName: fName,
      lastName: lName,
      comment: comment,
      isSubscribed: false,
    };

    if (checkboxEl.checked) {
      formData.isSubscribed = true;
      formData.email = emailEl.value;
    }

    return formData;
  };

  /**
   * using fetch make a POST request
   * @param   {String}  url  		 the url that the POST is being sent to
   * @param   {Object}  formData  Object with form Details
   */

  const  postUser=async(url, formData)=> {
   const response =await fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
     console.log(response.ok);
      if (!response.ok) {
        throw new Error('Oops something went wrong');
      }
      const data = await response.json();
      return data;
  }

  const resetForm = ()=>{
    firstNameEl.value = '';
		lastNameEl.value = '';
		submitBtnEl.disabled = true;
		
		if (commentsEl.value.length > 0) {
			commentsEl.value = '';
		}
		
		if (checkboxEl.checked) {
			checkboxEl.checked = false;
		}
	
		if (emailEl.value.length > 0) {
			emailEl.value = '';
			emailEl.classList.remove('visible');
		}
  }


  document.addEventListener('submit', async(event) => {
    event.preventDefault();
    let formData = getFormData();
    try {
      let data =  postUser(
        'https://jsonplaceholder.typicode.com/users',
        formData
      );
      
      if(data){
        message.textContent = `Thanks for the submission ${formData.firstName}!`;
        resetForm();
        setTimeout(() => (message.textContent = ''), 2000);
      } else {
        message.textContent = `Oops something went wrong`;
      }
    } catch (e) {
      message.textContent = `Oops something went wrong`;
      console.error(e);
    }
  });

  firstNameEl.addEventListener('input', nameHandler);
  lastNameEl.addEventListener('input', nameHandler);
  commentsEl.addEventListener('input', commentsHandler);
  checkboxEl.addEventListener('change', checkboxHandler);
  emailEl.addEventListener('change', validateEmail);
  
});

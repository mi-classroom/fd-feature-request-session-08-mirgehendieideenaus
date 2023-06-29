// Add event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
  const checkbox = document.getElementById('data');
  const checkboxLabel = document.querySelector('label[for="data"]');

  // Add event listener for form submit event
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    inputs.forEach(function (input) {
      // Check if the input value is less than 3 characters
      if (input.value.trim().length < 3) {
        input.classList.add('invalid');
        isValid = false;
      } else {
        input.classList.remove('invalid');
      }
    });

    // Check if the checkbox is not checked
    if (!checkbox.checked) {
      checkboxLabel.classList.add('invalid-label');
    } else {
      checkboxLabel.classList.remove('invalid-label');
    }

    // Check if all inputs are valid and the checkbox is checked
    if (isValid && checkbox.checked) {
      addComment(inputs[0].value, inputs[2].value);
      // form.submit();
    }
  });

  // Add event listener for form reset event
  form.addEventListener('reset', function () {
    inputs.forEach(function (input) {
      input.classList.remove('invalid');
    });

    checkboxLabel.classList.remove('invalid-label');
  });


});

function addComment(name, comment) {

  //creating elements
  const div = document.createElement('div');
  const divuserinfo = document.createElement('div');
  const img = document.createElement('img');
  const pusername = document.createElement('p');
  const pcomment = document.createElement('p');

  //adding content to elements
  img.src = '../images/user.png';
  img.alt = 'Logo';
  pusername.textContent = name;
  pcomment.textContent = comment;

  //adding elements to div
  divuserinfo.appendChild(img);
  divuserinfo.appendChild(pusername);
  div.appendChild(divuserinfo);
  div.appendChild(pcomment);

  //adding classes to elements
  divuserinfo.classList.add('comment-user-info');
  div.classList.add('comment');

  document.querySelector(".comments").appendChild(div);
}

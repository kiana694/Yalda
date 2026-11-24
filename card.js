// Find the envelope and the button on the page
var envelope = document.getElementById('envelope');
var button = document.getElementById('toggle');

// Open the envelope if it is closed, close it if it is open
function toggleEnvelope() {
  envelope.classList.toggle('open');

  if (envelope.classList.contains('open')) {
    button.textContent = 'بستن پاکت';
  } else {
    button.textContent = 'باز کردن پاکت';
  }
}

// Run the function when the envelope or the button is clicked
envelope.addEventListener('click', toggleEnvelope);
button.addEventListener('click', toggleEnvelope);

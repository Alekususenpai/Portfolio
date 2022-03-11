

const mail = document.getElementById('mail')

mail.onclick = function () {
  const tooltip = document.getElementById('tooltip');
  tooltip.style.visibility = "visible";
  navigator.clipboard.writeText('aleksandrajovanovska218@gmail.com');
  tooltip.innerHTML = "Copied!";
  setTimeout(() => { tooltip.innerHTML = "Copy e-mail"; tooltip.style.visibility = "hidden"; }, 2000);
};

const mail2 = document.getElementById('mail2')

mail2.onclick = function () {
  const tooltip2 = document.getElementById('tooltip2');
  tooltip2.style.visibility = "visible";
  navigator.clipboard.writeText('aleksandrajovanovska218@gmail.com');
  tooltip2.innerHTML = "Copied!";
  setTimeout(() => { tooltip2.innerHTML = "Copy e-mail"; tooltip2.style.visibility = "hidden"; }, 2000);
};


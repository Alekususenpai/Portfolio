const mail = document.getElementById('mail')
const mail2 = document.getElementById('mail2')
const tooltip = document.getElementById("tooltip");
const tooltip2 = document.getElementById("tooltip2");


function CopyMail(element, tooltip) {
  this.element = element;
  this.tooltip = tooltip;
  element.onclick = function () {
    tooltip.style.visibility = "visible";
    navigator.clipboard.writeText('aleksandrajovanovska218@gmail.com');
    tooltip.innerHTML = "Copied!";
    setTimeout(() => { tooltip.innerHTML = "Copy e-mail"; tooltip.style.visibility = "hidden"; }, 2000);
  };
}


const element1 = new CopyMail(mail, tooltip);
const element2 = new CopyMail(mail2, tooltip2);




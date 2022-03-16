function CopyMail(element) {
  this.element = element;
  element.onclick = function () {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.visibility = "visible";
    navigator.clipboard.writeText('aleksandrajovanovska218@gmail.com');
    tooltip.innerHTML = "Copied!";
    setTimeout(() => { tooltip.innerHTML = "Copy e-mail"; tooltip.style.visibility = "hidden"; }, 2000);
  };
}

const mail = document.getElementById('mail')
const mail2 = document.getElementById('mail2')


const element1 = new CopyMail(mail);
const element2 = new CopyMail(mail2);




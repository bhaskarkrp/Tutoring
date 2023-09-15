let btn = document.getElementById("btn");
btn.addEventListener("click", calculatePercent);
function calculatePercent() {
  //   let para = document.createElement("p");
  //   para.id = 'k';
  //   let fetchMath = document.getElementsByClassName("math")[0];
  //   para.style.color = "red";
  //   let isChek = fetchMath.childNodes;
  //   if(isChek[isChek.lengh - 1].id == 'k'){
  //     fetchMath.removeChild(para);
  //   }

  //  console.log(isChek[isChek.length-1]);
  let mathNum = document.getElementById("mathNum");
  let mathValue = parseInt(mathNum.value);

  let phyNum = document.getElementById("phyNum");
  let phyValue = parseInt(phyNum.value);

  let chemNum = document.getElementById("chemNum");
  let chemValue = parseInt(chemNum.value);

  let para = document.getElementById("par");
  let phyError = document.getElementById("phyErr");
  let chyError = document.getElementById("chyErr");

  let btnResult = document.getElementById("btn_tag");

  if (mathValue == "") {
    para.innerText = "Please Enter the Input";
    para.style.border = "thick solid red";
  } else if (mathValue > 100 || mathValue < 0) {
    para.innerText = "Your input should be from 0 to 100";
    para.style.border = "thick solid red";
  } else if (phyValue == "") {
    phyError.innerText = "Your input not be Empty!!";
    phyError.style.border = "thick solid red";
  } else if (phyValue > 100 || phyValue < 0) {
    phyError.innerText = "Your input should be from 0 to 100";
    phyError.style.border = "thick solid red";
  } else if (chemValue == "") {
    chyError.innerText = "Your Chemistry input not be Empty!!";
    chyError.border.style = "thick solid red";
  } else if (chemValue > 100 || chemValue < 0) {
    chyError.innerText = "Your input should be from 0 to 100!";
    chyError.border.style = "thick solid red";
  } else {
    let result = ((mathValue + chemValue + phyValue) / 300) * 100;

    btnResult.innerHTML = `Total Overall Percent : ${result.toFixed(2)}%`;
    btnResult.style.border = "solid green";
  }
}

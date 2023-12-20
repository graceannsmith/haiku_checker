import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import HaikuChecker from "./js/haiku_checker.js";


function handleForm(e){
    e.preventDefault();
    let line1 = document.querySelector("#line1").value;
    let line2 = document.querySelector("#line2").value;
    let line3 = document.querySelector("#line3").value;
    const resultOne = document.querySelector("#lineOneOutput");
    const resultTwo = document.querySelector("#lineTwoOutput");
    const resultThree = document.querySelector("#lineThreeOutput");
    const haikuObj = new HaikuChecker(line1, line2, line3);
    resultOne.textContent = haikuObj.syllableCounter(resultOne);
    resultTwo.textContent = haikuObj.syllableCounter(resultTwo);
    resultThree.textContent = haikuObj.syllableCounter(resultThree);
}

document.getElementById("haikuCheckerForm").addEventListener("submit", handleForm);




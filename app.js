function getNumber(num){
    var answer = document.getElementById("answer");
    answer.value += num;
}

function clrAnswer() {
    var answer = document.getElementById("answer");
    answer.value = ""
}

function getAnswer() {
    var answer = document.getElementById("answer");
    answer.value = eval(answer.value)
}
var answerArray = [];

function setAnswer(question_number, answer) {
    answerArray[question_number] = answer;
    answerSelection(question_number, answer);
}

function getFinalResult() {
    var counts = [0, 0,  0, 0];
    for (var i = 0; i < answerArray.length; i++) {
        counts[answerArray[i]]++;
    }
    
    var largestCount = 0;
    var largestCountIndex = 0;
    for (var i = 0; i < counts.length; i++) {
        if (counts[i] > largestCount) {
            largestCount = counts[i];
            largestCountIndex = i;
        }
    }
    
    return largestCountIndex;
}

function updateResult() {
    var answerTitle = document.getElementById("result_title");
    
    if (answerArray.length >= 6) {
        var answerImage = document.getElementById("result_image");
        var answerBody = document.getElementById("result_body");
        
        switch (getFinalResult()) {
            case 0:
                answerTitle.innerHTML = "You got: Wide-Ruled Notebook Paper!";
                answerImage.src = "resources/wide-ruled-paper.jpg";
                answerBody.innerHTML = "";
                break;
            case 1:
                answerTitle.innerHTML = "You got: Graph Paper!";
                answerImage.src = "resources/graph-paper.jpg";
                answerBody.innerHTML = "";
                break;
            case 2:
                answerTitle.innerHTML = "You got: Cardstock Paper!";
                answerImage.src = "resources/cardstock.jpg";
                answerBody.innerHTML = "";
                break;
            case 3:
                answerTitle.innerHTML = "You got: White Printer Paper!";
                answerImage.src = "resources/white-printer-paper.jpg";
                answerBody.innerHTML = "";
                break;
        }
    }
    else {
        answerTitle.innerHTML = "Please answer every question";
    }
}

function answerSelection(question_number, answer_choice) {
    var choiceNumber = question_number * 4 + answer_choice;
    var question_answer_array = document.getElementsByClassName("question_choice");
    
    for (var i = question_number * 4; i < question_number * 4 + 4; i++) {
        question_answer_array[i].classList.remove("selected");
    }
    
    question_answer_array[choiceNumber].classList.add("selected");
}
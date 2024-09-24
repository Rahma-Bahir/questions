var questions = [ 
    {  
        question: "What is programming language ?",  
        options: [ "java script", "html", "css"],  
        answer: "java script"  
    }, 
    {  
        question: "What is the best mobile ?",  
        options: ["nokia ", " samsung", " iphone"],  
        answer: "iphone"  
    }, 
    {  
        question: "What is the best language?",  
        options: ["english", " arabic", "frinch"],  
        answer: " english "  
    }, 
    {  
        question: "What is the personality ?",  
        options: [" american ", " egyptian ", " malisian"],  
        answer: "egyptian"  
    }, 
    {  
        question: "What is the traks not in web ?",  
        options: ["backend", " cyber security", " ui/ux"],  
        answer: " cyber security"  
    }, 
    {  
        question: "What is your name?",  
        options: ["rahma", " sara ", "nour"],  
        answer: "rahma"  
    }, 
    {  
        question: "What is the name of your father ?",  
        options: ["mohamed", " bashir", " samy"],  
        answer: "bashir"  
    }, 
    {  
        question: "What is your facualty?",  
        options: ["law", " fcis ", "arts "],  
        answer: "fcis"  
    }, 
    {  
        question: "What is your fav habit?",  
        options: ["codding", " reading ", " gamming"],  
        answer: "codding"  
    }, 
    { 
        question: "What is your city ?",  
        options: ["alex", " cairo", "damitta"],  
        answer: "damitta"  
    } 
]; 
var selectQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 5); 
var space = document.getElementById('exam'); 
selectQuestions.forEach((q, index) => { 
    var optionsHtml = q.options.map((option, i) => ` 
        <label> 
            <input type="radio" name="q${index}" value="${option}"> ${option} 
        </label><br>`).join(''); 
    space.innerHTML += ` 
        <div> 
            <p>${index + 1}. ${q.question}</p> 
            ${optionsHtml} 
        </div> 
    `; 
}); 
 
function submitQuiz() { 
    var correctAnswers = 0; 
    var incorrectAnswers = 0; 
     
    selectQuestions.forEach((q, index) => { 
        var userAnswer = document.querySelector(`input[name="q${index}"]:checked`); 
         
        if (userAnswer) { 
            var selectedValue = userAnswer.value.trim(); 
                if (selectedValue === q.answer) { 
                correctAnswers++; 
            } else { 
                incorrectAnswers++; 
            } 
        } else { 
            incorrectAnswers++; 
        } 
    }); 
 
    var totalQuestions = selectQuestions.length; 
    var scorePercentage = (correctAnswers / totalQuestions) * 100; 
    var resultElement = document.getElementById('result'); 
    if (scorePercentage > 50) { 
        resultElement.innerHTML =` Success! You got${correctAnswers} correct out of ${totalQuestions}`; 
    } else { 
        resultElement.innerHTML = `Fail! You got ${correctAnswers} correct out of ${totalQuestions}`;
    } 
}
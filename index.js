const quiz = [
        {
        
        'Question' : 'The most popular programming language.',
        'a' : 'Java',
        'b' : 'Python',
        'c' : 'JavaScript',
        'd' : 'C++',
        'answer' : 'b'
        },

        {
        
        'Question' : 'Which is the most popular Stack for web development?',
        'a' : 'Mern Stack',
        'b' : 'Stack Overflow',
        'c' : 'Mean Stack',
        'd' : 'Bean Stack',
        'answer': 'a'
        },

        {
        
        'Question' : 'The highest paid developer path.',
        'a' : 'Data Scientist',
        'b' : 'Web Developer',
        'c' : 'App Developer',
        'd' : 'iOS Developer',
        'answer' : 'a'
        },
        {
        
        'Question' : 'The most used code editor.',
        'a' : 'Sublime Text',
        'b' : 'Atom ',
        'c' : 'VS Code',
        'd' : 'Geddit',
        'answer' : 'c'
        },
        {
        
        'Question' : 'The best way to learn to code.',
        'a' : 'Copy code from the internet and use them',
        'b' : 'Procrastinate',
        'c' : 'Programming is hard so quit',
        'd' : 'Google everything!!',
        'answer' : 'd'
        }
]
// initialisation of variables from the html document
let question = document.getElementById('question')

let a = document.getElementById('a_choice')
let b = document.getElementById('b_choice')
let c = document.getElementById('c_choice')
let d = document.getElementById('d_choice')

let sub = document.getElementById("submit")
let choice = document.querySelectorAll('#choice')
let score = 0

let current = 0

let result = document.getElementById('quiz')



// This function loads the question to the card whenever called
function loadquiz(){
    deselected()

    let que = quiz[current].Question
    console.log(que);
    
    question.innerText = que

    let ca = quiz[current].a
    let cb = quiz[current].b
    let cc = quiz[current].c
    let cd = quiz[current].d

    a.innerText = ca
    b.innerText = cb
    c.innerText = cc
    d.innerText = cd

    
}
    
loadquiz()

// The following function will check if any answer is selected

function selected(){
    
    let ans 
    
    choice.forEach(rb => {
        
        if(rb.checked){
            ans = rb.value 
        }
    }); 
  return ans  

}

// deselecting all the answers

function deselected(){
    choice.forEach(rb => {
        rb.checked = false
        
    });
}

// This is the section that monitors the submit button

sub.addEventListener('click', ()=>{
    let ans = selected()
    if (ans == quiz[current].answer) {
        score++
    }
    current++
    
    if(current < quiz.length){
        loadquiz()
    }else{
        result.innerHTML = `
                <h2>You answered correctly at ${score}/${quiz.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>`
    }
})


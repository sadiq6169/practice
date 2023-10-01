// const students = [
//     {name : "umer", id : 1, subject : "maths", score : 80},
//     {name : "ali", id : 2, subject : "chemistry", score : 75},
//     {name : "shahmeer", id : 3, subject : "physics", score : 70},
//     {name : "danish", id : 4, subject : "english", score : 60},
//     {name : "waseem", id : 5, subject : "urdu", score : 90},

// ]

// let averageScore = students.reduce(function(acc , currItem){
//     acc += currItem.score
//     return acc;


// }, 0)

// averageScore = averageScore/students.length

// console.log(averageScore)

const students = [
    {name : "umer", id : 1, favrSubject : "maths", score : 80},
    {name : "ali", id : 2, favrSubject : "english", score : 75},
    {name : "shahmeer", id : 3, favrSubject : "physics", score : 70},
    {name : "danish", id : 4, favrSubject : "english", score : 60},
    {name : "waseem", id : 5, favrSubject : "maths", score : 90},

]

const survay = students.reduce(function(prev , curr){
        
console.log(prev ,"====>> perivous")
if(prev.hasownproperty(curr.favrSubject)){
    
}

})





// let nums = [3,3]
// let target = 6

// var twoSum = function(nums, target) {
//     let ms = []
//     owner : 
//     for (let i = 0; i < nums.length; i++){
//         for (let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] == target){
//                 ms.push(i)
//                 ms.push(j)
//                 break owner;
//             }
//         }
//     }
//     console.log(ms)
//     return ms
// };

// twoSum(nums, target)

// let num = 123

// let numString = num.toString()
// let numArr = numString.split('').reverse().join('') * 1

// console.log(numArr);

const ismlar = ['ahror', 'donyor', 'rustam', 'doston'];
const newIsmlar = [];

ismlar.forEach((name) => {
    const ism = name.charAt().toUpperCase() + name.slice(1) + 'bek';
    newIsmlar.push(ism)
})




const person = {
    name : 'Rustamjon',
    age : 21,
    location : 'Andijon',
    language : ['uz', 'ru', 'eng'],

    movies : [
        {name : "Titanic", likes : 1568, duration : "2 hour 12 min"},
        {name : "Avatar", likes : 1568, duration : "2 hour 12 min"},
        {name : "Mexanik", likes : 1568, duration : "2 hour 12 min"},
        {name : "Chuqur", likes : 1568, duration : "2 hour 12 min"},
        {name : "Forsaj", likes : 1568, duration : "2 hour 12 min"},
    ],

    // functions
    login : function (){
        console.log("You are welcome");
    },

    logut : function () {
        console.log("Your log out");
    },

    // methods
    speak : function () {
        this.language.forEach((name) => {
            console.log('I can speak', name);
        })
    },

    showMoviesList : function(){
        this.movies.forEach((movie) => {
            console.log(
                `Film name: ${movie.name}, likes: ${movie.likes}`)
        })
    }
}




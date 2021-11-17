//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]


function findWords(){
    // code goes here

    let names = dog_names.map(i=>{
        if(dog_string.toLowerCase().includes(i.toLowerCase())){
            console.log(i)
            console.log( 'Matched dog_name' )
        }else{
            console.log(i)
            console.log( 'No matches' )
        }      
    })
}

//Call method here with parameters

findWords()

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(){
        // code goes here
    for(let i = 0; i < given_arr.length; i++){
         if(i % 2 == 0){
            given_arr.splice(i,1, 'even index')
        }
    }
        return given_arr
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

console.log(replaceEvens())


//code wars: Exes and Ohs

let my_string = "xooxxo"

function exes_and_ohs(){

    let count = (my_string.match(/x/g)|| []).length; 
    let count2 = (my_string.match(/o/g)|| []).length;
    
    return (count == count2)
}

console.log(exes_and_ohs())

//code wars: opposite number

function opposite(number) {
    //your code here
    
    let product = number * -1
    return product
}
  
  console.log(opposite(5))


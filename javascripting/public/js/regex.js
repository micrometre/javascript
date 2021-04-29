//Exercises: Level 3
let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salary = income.slice(9, 13) 
let bonus = income.slice(42, 47) 
let courses = income.slice(67, 72) 
let moneyIn = []
salary = parseInt(salary) * 12
bonus = parseInt(bonus)
courses = parseInt(courses)
moneyIn.push(salary + bonus + courses)
console.log(moneyIn)


/*regex 001
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let wordsOfsentence = sentence.replace(/[^\w\s]/g, '')
let charaOfsentence = sentence.replace(/[\w\s]/g, '')
console.log(sentence)
console.log(wordsOfsentence)
console.log(charaOfsentence)
*/

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let newset = new Set([...myFriends].sort(function(a,b){
    return a.localeCompare(b);
}));
console.log(newset);

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
let start = 10;
let end = 100;
let exclude = 40;

// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

for(let i = start ;i<=end ; i=i+start)
{
    if(i!=exclude)
    console.log(i);
}




let start1 = 10;
let end1 = 0;
let stop = 3;

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

for(let i = start1 ;i>=stop ;i--)
{
    console.log(i<start1? `${end1}${i}`:i);
}


let start2 = 1;
let end2 = 6;
let breaker = 2;

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

for(let i = start2 ;i<=end2 ;i++)
{
    console.log(i);
    console.log(`--${breaker}`);
    console.log(`--${end2-breaker}`);
}


let index = 10;
let jump = 2;
let end3 = 0;


// Output
// 10
// 8
// 6
// 4

for (;;) {
    // Write Your Code Here
    console.log(index);
    index -=jump;
    if(index < jump+jump)
    break;
  }


let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

let mynew_array =[];
for(let i=0;i<friends.length;i++)
{
    if(friends[i].toLowerCase().startsWith(letter))
    continue;
    else
    mynew_array.push(friends[i]);
      

}
for(let j =0;j<mynew_array.length;j++)
{
    console.log(`${j} => ${mynew_array[j]}`);
}
  

let start3 = 0;
let swappedName = "elZerO";
let resultname="";

// Output
"ELzERo"

console.log(`original name : ${swappedName}`);
for(let i =start3;i<swappedName.length;i++)
{
    if(swappedName[i].toLowerCase()===swappedName[i])
    resultname+=swappedName[i].toUpperCase()
    else
    resultname+=swappedName[i].toLowerCase();


}
console.log(resultname);


let start4 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
// 2
// 3
// 4

for(let i=start4;i<mix.length;i++)
{
    if(i==start4)
    continue;
    if(typeof mix[i]==="number")
    console.log(mix[i]);
}
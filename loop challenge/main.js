let myAdmins = ["Ahmad","Osama","Sayed","Stop","Samera"];
let myEmployees = ["Amgad","Samah","Ammer","Omar","Othman","Amany","Samia","Anwar","Sony"];

let nbofAdmins = 0;
for(let i =0;i<myAdmins.length;i++)
{
    if(myAdmins[i]==="Stop")
    {   
        document.write(`<div>We have ${i} Admins</div>`);
        document.write(`<hr></hr>`);

        break;
    } 
}


for(let i =0;i<myAdmins.length;i++)
{
    if(myAdmins[i]==="Stop")
    {   
        break;
    } 


    document.write(`<div> the Admin for Team ${i+1} is ${myAdmins[i]}</div>`);
    document.write("<h3>Team Members :</h3>");
    let index_members = 1;
    for(let j =0;j<myEmployees.length;j++)
    {
        if(myAdmins[i].toLowerCase().startsWith(myEmployees[j][0].toLowerCase()))
        {
            document.write(`<p>- ${index_members} ${myEmployees[j]}</p>`);
            index_members++
        }
    }
    document.write(`<hr></hr>`);

    nbofAdmins++;
}
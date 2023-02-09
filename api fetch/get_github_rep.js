fetch('https://api.github.com/users/samih93/repos').then((result) =>{
    let mydata= result.json();
   return mydata;
    }).then((data)=>{
        console.log(data);
        data.forEach((element)=>{
            console.log( `name :${element['name']} , full name : ${element['full_name']}`);
            //document.body.appendChild(element['name']);
        });
    });

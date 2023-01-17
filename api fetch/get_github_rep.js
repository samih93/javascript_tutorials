fetch('https://api.github.com/users/samih93/repos').then((result) =>{
    let mydata= result.json();
   return mydata;
    }).then((data)=>{
        console.log(data);
        data.forEach((element)=>{
            console.log(element['name']);
            document.body.appendChild(element['name']);
        });
    });

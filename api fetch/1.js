let myobject = [
    {
      "userId": 10,
      "title": "Article Title Number 1",
      "description": "Article Description Number 1"
    },
    {
      "userId": 5,
      "title": "Article Title Number 2",
      "description": "Article Description Number 2"
    },
    {
      "userId": 5,
      "title": "Article Title Number 3",
      "description": "Article Description Number 3"
    },
    {
      "userId": 5,
      "title": "Article Title Number 4",
      "description": "Article Description Number 4"
    },
    {
      "userId": 5,
      "title": "Article Title Number 5",
      "description": "Article Description Number 5"
    },
    {
      "userId": 5,
      "title": "Article Title Number 6",
      "description": "Article Description Number 6"
    },
    {
      "userId": 25,
      "title": "Article Title Number 7",
      "description": "Article Description Number 7"
    },
    {
      "userId": 25,
      "title": "Article Title Number 8",
      "description": "Article Description Number 8"
    },
    {
      "userId": 15,
      "title": "Article Title Number 9",
      "description": "Article Description Number 9"
    },
    {
      "userId": 15,
      "title": "Article Title Number 10",
      "description": "Article Description Number 10"
    }
  ];

    let mypromise = new Promise((res,rej)=>{
        if(myobject.length>0)
        return res(myobject);
        else
        return rej(Error("Rejected"));
      }).then((data)=>{
        data.length=5;
        return data;
      });


mypromise.then((resolvedvalue)=>
    {
        console.log(resolvedvalue);
      

        resolvedvalue.forEach((element)=>{
            let el = document.createElement('div');
            let title = document.createElement('h2');
            let description = document.createElement('p');
            let titletextnode = document.createTextNode(element['title']);
            let descriptiontextnode = document.createTextNode(element['description']);
            title.appendChild(titletextnode);
            description.appendChild(descriptiontextnode);

            el.appendChild(title);
            el.appendChild(description);
            document.body.appendChild(el);
        });

    },(rejectedvalue)=>console.log(rejectedvalue));

    

 

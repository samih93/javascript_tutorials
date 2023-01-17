
fetch('http://127.0.0.1:5500/api%20fetch/api_object.js').then((result)=>{
    let mydata = result.json();
return mydata}).then((data)=>{
    data.length=5;
    return data;
}).then((d)=>{
    d.forEach((element)=>{
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
});
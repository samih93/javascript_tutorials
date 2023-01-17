// Edit The Class
class User {
  showData ;
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = `${card}`;
    this.showData = this.detailsdata();

  }


    getcard()
    {
        return this.#c;
    }

    detailsdata()
    {
      let res ="" ;

        if(this.#c.length>16)
        {
          console.log('>16');
          res =   `hello ${this.u} Your Credit Card Number Is ${this.#c}`;
        }
        else
        {
          console.log('=16');

          for(let i=0;i<this.#c.length;i=i+4)
          {
              res += i == 12 ? this.#c.substring(i,i+4) : this.#c.substring(i,i+4)+"-" ;
          }
          res = `hello ${this.u} Your Credit Card Number Is ${res}`;
        
      }
      return res;


    }
  


}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
 let userTwo = new User("Ahmed", "2222333344445555");
 let userThree = new User("Ghareeb", 7777999988884444);

console.log(userOne.showData);

// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);


// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);

// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

//console.log(userOne.getcard()); // Prevent Accessing To Card Property Here
// Undefined
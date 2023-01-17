
  class Car {
    constructor(name ,model , price)
    {   this.n = name;
        this.m = model;
        this.p = price;
    }
    run(){
        return 'Car Is Running Now';
    }
    stop(){
        return 'Car Is Stopped';
    }
  }


  let car1 = new Car('MG','2022',420000);
  let car2 = new Car('honda','2004',8000);
  let car3 = new Car('bmw','2015',15000);

  console.log(`car one Name is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
  console.log(car1.run());
  // Needed Output
  
//   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//   "Car Is Running Now"
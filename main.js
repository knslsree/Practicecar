class Car {
 constructor(name, model, year, color) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.currentSpeed = 0;
  }


  accelerate(speed) {
    this.currentSpeed += speed;
    console.log(`The ${this.year} ${this.make} ${this.model} is now traveling at ${this.currentSpeed} mph.`);
  }

  brake() {
    let speed=10;
    if(speed<10)
    {
        console.log('you have to stop');
    }
    else
    {
        console.log('continue driving');
    }


 
  }

  paint(newColor) {
    this.color = newColor;
    console.log(`The ${this.year}  ${this.model} has been painted ${this.color}.`);
  }
}
  const myCar = new Car('Toyota', 'Camry', 2021, 'black');

    myCar.accelerate(100);
    myCar.brake();
    myCar.paint('red');
   
    
    
    
   
   


 

  
  


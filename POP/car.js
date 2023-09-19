

class Car {
    constructor(model,speed,year) {
        this.model = model;
        this.speed = speed;
        this.year = year;
    }

    ShowInformation() {
        return `modelo ${this.model}\nvelocidad ${this.year}\naño ${this.year}`

    }
}

class Bus extends Car {
    constructor(model,speed,year,seats) {
        super(model,speed,year)
        this.seats = seats;
    }
}

const SendData = (object) => {
    var page = document.getElementById("car");
    let data = object.ShowInformation();
    console.log(data)
    page.innerHTML += `<p> ${data} </p>`

}

var toyota = new Car("Toyota","60",2003);
var Marcopolo = new Bus("Marcopolo",120,2018,60);

SendData(Marcopolo);
SendData(toyota);
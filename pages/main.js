

var name = "max";
var height = 185;
var age = 2003;

var info = name + " " + height;



function SendData(name, height) {
    const page = document.getElementById("data");

    page.innerHTML = `
    <p> mi nombre es ${name} </p>
    <p> mi altura es ${height} </p>
    `
};

SendData(name,height);

var cities = ["Temuco","Trelew","Valdivia"];

cities.forEach((citie) => {
    document.write(`${citie} </br>`)
});


var car  = {
    model: "Toyota",
    year : "2003",
    wheels : 4, 
    ShowData( ){
        console.log(this.model,this.year,this.wheels)
    }
};








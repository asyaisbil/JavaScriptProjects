
// Creating a Car

function getCarObject(id, model, yakit, vites, yas, fiyat, kilometre) {
    newCarObject = {
        id: id,
        model: model,
        yakit: yakit, 
        vites: vites, 
        uretimYili: new Date().getFullYear() - yas, 
        fiyat: fiyat, 
        kilometre: kilometre
    }
    return newCarObject;
}

//console.log(getCarObject(121, 'VW Passat', 'Benzin', 'Otomatik', 11, 800000, 153000));



// Reviews

function getBelowTheAverage(reviews) {
    let sumPoint = 0;
    for (i = 0; i < reviews.length; i++) {
        sumPoint = (sumPoint + reviews[i].point);
    }
    const avgPoint = sumPoint / reviews.length;
    //console.log(avgPoint);  
    const belowAverage = [];
    for (i = 0; i < reviews.length; i++) {
        if (avgPoint > reviews[i].point) {
            belowAverage.push(reviews[i].name);
            //console.log(reviews[i].name, reviews[i].point);
            //console.log(belowAverage);
        }
    }
    return belowAverage;
}

//console.log(getBelowTheAverage(reviews));



// Updating Car Infos

function newCar(car = {}) {
    let carCopy = {...car};
    carCopy.brand = car.model.split(" ")[0];
    carCopy.model = car.model.split(" ")[1];
    carCopy.otv = car.price < 1450000 ? 10 : 40;
    carCopy.mtv = car.age <= 10 && car.age >= 1 ? 1773 : 520;
    carCopy.isDomestic = carCopy.brand === 'TOGG' ? true : false;
    //carCopy.isDomestic = carCopy.brand === 'TOGG';
    carCopy = {
        id: car.id, 
        marka: carCopy.brand,
        model: carCopy.model,
        yakit: car.fuel,
        vites: car.gear,
        fiyat: car.price,
        otv: carCopy.otv,
        mtv: carCopy.mtv,
        isDomestic: carCopy.isDomestic
    }
    return carCopy
}


// Adding Methos

function addMethods(car = {}) {
return {
    ...car,
    getKilometers() {
    return `New km: ${this.kilometre}`;
    },
    getYear() {
    const year = new Date().getFullYear() - this.age;
    return `${year} model`;
    },
    changePrice(percentage) {
    this.price = (this.price * (percentage + 100)) / 100;
    return `New price: ${this.price}`;
    },
};
}


// Car Simulator

function carSimulator(brand, model, kilometer, price) {
const custCar = {
    brand: brand,
    model: model,
    kilometer: kilometer,
    price: price,
    tank: 50,
    getPrice: function () {
    return `Price: ${this.price}`;
    },
    refuel: function (fuel) {
    this.tank = this.tank + fuel;
    if (this.tank > 100) {
        this.tank = 100; 
    }
    return `Tank: %${this.tank}`;
    },
    drive: function (kmUsed) {
    this.kilometer = this.kilometer + kmUsed;
    for (let i = 0; i < kmUsed / 100; i++) {
        this.tank = this.tank - 5;
        this.price = this.price - 50;
    }
    return `New km: ${this.kilometer}`;
    },
};
return custCar;
}

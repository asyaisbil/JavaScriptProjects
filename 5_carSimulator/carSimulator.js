
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


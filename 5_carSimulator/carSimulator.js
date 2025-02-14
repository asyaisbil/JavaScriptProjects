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

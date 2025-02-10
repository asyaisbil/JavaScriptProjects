function lottery(names) {
    const tenTimes = [];
    tenTimes.push(names[9]);
    tenTimes.push(names[19]);
    tenTimes.push(names[29]);
    tenTimes.push(names[39]);
    tenTimes.push(names[49]);
    const firstFive = names.splice(0, 5);
    names.slice(6);
    names.splice(9, 1);
    names.splice(19, 1);
    names.splice(29, 1);
    names.splice(39, 1);
    names.splice(49, 1);
    const randomName = names[Math.floor(Math.random() * names.length)];
    const result = firstFive.concat(tenTimes, randomName);
    return result;
  }

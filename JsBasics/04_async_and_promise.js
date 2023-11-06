const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1000);
    });
    return promise;
};

setTimeout(() => {
  console.log('setTimeout');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);
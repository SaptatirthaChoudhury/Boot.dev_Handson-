const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 4000);
    });
};

const fetchMoreData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('More data fetched');
        }, 1000);
    });
};

const showData = () => {
    console.log('Fetching data...');
    // const data = await fetchData();
    fetchData().then((data) => {
        console.log(data);
    })

    console.log('Fetching more data...');
    // const moreData = await fetchMoreData();
    fetchMoreData().then((moreData) => {
        console.log(moreData);
    })

    console.log('Done fetching data.');
};

console.log('Starting...');
showData();
console.log('...Finished.');

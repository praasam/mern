function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(() => {             //callback function
            resolve("Data fetched!");
        }, 1000);
    });
}

async function getData(){
    const data = await fetchData();
    console.log(data);     // "data fetched" after 1 second
}

getData();

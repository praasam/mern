const fs = require('fs');

const readFile = fs.readFile('greet.txt', 'utf8', (err, data)=>{
//     if (err) throw err;
// console.log(data);
    if(err){
        console.log('Error:', err);
    }
    else{
        console.log(data);
    }
})

const writeFile = fs.writeFile('greet.txt', 'Hiiiiiiiiiiiii', (err)=>{
    //     if (err) throw err;
    // console.log(data);
        if(err){
            console.log('Error:', err);
        }
        else{
            console.log('File written successfully');
        }
    })

module.exports = {readFile};
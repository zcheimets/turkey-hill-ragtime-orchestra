import { readdir } from './node_modules/fs';


readdir('img', (err, files) => {
    if (err) console.log(err);
    else {
        files.forEach(file => {
            console.log(file);
        })
    }
})
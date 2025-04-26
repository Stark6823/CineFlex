const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const app = require('./app');
const port = process.env.PORT || 3000;

mongoose.connect(process.env.CONN_LOC).then((con)=>{
        console.log('DB connection successful');
    }).catch((err) => {
        console.error('DB connection error:', err);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})
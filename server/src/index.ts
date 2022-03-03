import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {connect} from 'mongoose';
import config from 'config';
import postRoutes from './routes/posts';
const app = express();

app.use('/posts', postRoutes);
app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

const PORT: number | any = process.env.PORT || 5000;
connect(config.get('mongoURI'))
    .then( () => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch( err => {
        console.log(config.get('mongoURI'));
        console.log('Connection error:', err.message);
    });




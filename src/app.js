import  express from 'express';
import path from 'path';
import morgan from 'morgan';
import multer from 'multer';
import router from './Routes/routes'



//iniciando express

const app = express();


//motor de html
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', "ejs");

app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('dev'));

app.use(express.urlencoded({extended:false}));

    const storage = multer.diskStorage({

        destination: path.join(__dirname,'public/upload/img'),
            filename:(req, file,cb,filename) => {
            cb(null, file.originalname)
    }
});

app.use(multer({
    storage: storage
}).single('jpg'));

app.use(router);








export default app;
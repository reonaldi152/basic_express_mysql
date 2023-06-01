require('dotenv').config();
const PORT = process.env.PORT || 5000; 
const express = require('express');

const usersRoutes = require('./routes/users');

const middlewareLogRequest = require('./middleware/logs');


const app = express();

// app.method(path, handler)

// app.use("/", (req, res, next) => {
//     res.send('Hello World');
// });

// app.get("/", (req, res) => {
//     res.send('Hello Get Method');
// });

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', usersRoutes);


app.listen(PORT, () =>{
    console.log(`Server berhasil di running di port 4000 ${PORT}`);
});


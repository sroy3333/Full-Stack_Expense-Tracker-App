const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const expenseRoutes = require('./routers/Expense');

const Expense = require('./models/Expense');

var cors = require('cors');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors());

app.expenseRoutes = require('./models/Expense');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/expense', expenseRoutes)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Expense.html'));
});

sequelize
.sync()
.then(result => {
    app.listen(4000);
})
.catch(error => {
    console.log(error);
});

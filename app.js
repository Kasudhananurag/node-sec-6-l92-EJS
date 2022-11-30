const express = require('express');
const bp = require('body-parser');
const path = require('path');

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop")

const app = express();

app.set('view engine','ejs')
app.set('views','views')

app.use(bp.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminData.router);
app.use(shopRoutes);

app.use((req,res) => {
    res.status(404).render('404',{pageTitle: 'Page Not Found'})
})

app.listen(3000);
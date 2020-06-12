const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //post edilen datanın obej olarak yakalanması
const cors = require('cors');
const mongoose = require('mongoose');
const routes = express.Router();
const PORT = 4000;


app.use(cors());
app.use(bodyParser.json());

let People = require('./kisilermodel');
let Address = require('./addressmodel');
let Category = require('./categorymodel');
let Products = require('./productmodel');
let Basket = require('./basket');
let Contact = require('./contact');
let ProductsImgModel = require('./productsImgModel');
let Orders =require('./orders');

//Veritabanı bağlantısı
mongoose.connect('mongodb://127.0.0.1:27017/shop', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDb bağlantı başarılı")
})


app.use(bodyParser.urlencoded({
    extended: false
}));



//Login işlemleri
routes.route('/login').post(function (req, res) {
    const { mailaddress, password } = req.body;  //Parametreleri alıyor
    People.findOne({ mailaddress }, function (err, people) {  //Mailadresine göre bir kayıt varsa fonk giriyor
        if (err) {
            console.log(err);
        }
        else {
            //res.json(people)
            if (people)
                if (people.password === password) {
                    res.status(200).json(people);
                    // res.status(200).json({'people':'Giriş Başarılı'});
                }
                else {
                    res.status(400).json({ error: "Hatalı Kullanıcı adı veya şifre" });

                }
            else {
                res.status(400).send('Hatalı Kullanıcı adı veya şifre')
                //res.json({error:"Hatalı Kullanıcı adı veya şifre"});

            }

        }

    });

});



//Database kişileri ekleme
routes.route('/addUser').post(function (req, res) {

    newPeople = {
        username: req.body.username,
        mailaddress: req.body.mailaddress,
        password: req.body.password,
        favorites : []
    }
    console.log(req.body)
    let people = new People(newPeople);

    people.save().then(people => {
        res.status(200).json(people);

    })
        .catch(err => {
            res.status(400).send(err.message)
            console.log(err)
        });

    console.log(people)
});

//Database İletişim Bilgilerini Ekleme
routes.route('/addContact').post(function (req, res) {

    newContact = {
        username: req.body.username,
        mailaddress: req.body.mailaddress,
        subject: req.body.subject,
        message: req.body.message,
        //favorites : []
    }
    console.log(req.body)
    let iletisim = new Contact(newContact);

    iletisim.save().then(iletisim => {
        res.status(200).json(iletisim);

    })
        .catch(err => {
            res.status(400).send(err.message)
            console.log(err)
        });

    console.log(iletisim)
});

//Adres Ekleme

routes.route('/addAddress').post(function (req, res) {
    let address = new Address(req.body);
    //let user_id= new People(req.body._id)
    // res.json(user_id)
    console.log(address)
    address.save().then(address => {
        res.status(200).json(address);

    })
        .catch(err => {
            res.status(400).send(err.message)

        });

    // console.log(address)
});

//user_id'ye göre adres bilgisi listeleme

routes.route('/user_id').get(function (req, res) {
    let adres = req.query

    console.log(adres)
    Address.find({ user_id: adres.user_id }, function (err, adres) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(adres);
        }

    });
});


//Kullanıcı Adres Bilgilerini Güncelleme
routes.route('/adres/:_id').get(function (req, res) {
    let user_id = req.params._id;
    console.log(user_id)
    Address.findById(user_id, function (err, address) {
        res.json(address);
    });


});


routes.put('/adres/guncelle/:id', function (req, res, next) {
    Address.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) {
            return next(err)
        }
        else {
            console.log("Güncelledi")
            res.json(post);
        }
    })


});



//Kullanıcı Adreslerini Silme

routes.route('/adres/delete/:id').delete(function (req, res) {
    Address.findByIdAndRemove({ _id: req.params.id }, function (err, address) {
        if (err) {
            res.json(err);
        }
        else {
            res.json('Başarıyla Silindi');
        }
    });
});


//Üye Güncelleme

routes.route('/kisiler/:id').get(function (req, res) {
    let personel_id = req.params.id;
    People.findById(personel_id, function (err, people) {
        res.json(people);
    });


});


routes.put('/guncelle/:id', function (req, res, next) {
    People.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) {
            return next(err)
        }
        else {
            console.log("Güncelledi")
            res.json(post);
        }
    })


});

//Kullanıcı Şfre Güncelleme
routes.route('/newpassword/:id').put(function (req, res) {
    const { password, new_password } = req.body
    People.findById(req.params.id, function (err, user) {
        console.log(user)
        if (err) {
            console.log(err);
        }
        else {
            if (user) {
                if (user.password === password) {
                    People.findByIdAndUpdate(req.params.id, { password: new_password }, function (err, people) {
                        res.status(200).json(people);
                    })
                }
                else {
                    console.log(req.body)
                    res.status(400).json({ error: "Hatalı Kullanıcı adı veya şifre" });

                }
            }
            else {
                res.status(400).json({ error: "Hatalı Kullanıcı adı veya şifre" });

            }
        }
    })


});



//Üyeleri Listeleme
routes.route('/kisiler').get(function (req, res) {
    People.find(function (err, people) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(people);
        }

    });

});

//Üyeleri Silme

routes.route('/kisiler/:id').delete(function (req, res) {
    console.log(req)
    People.findByIdAndRemove({ _id: req.params.id }, function (err, people) {
        if (err) {
            res.json(err);

        }
        else {
            res.json('Üye Silme Başarılı')

        }
    });


});

//Üye Güncelleme

routes.route('/kisiler/:id').get(function (req, res) {
    let personel_id = req.params.id;
    People.findById(personel_id, function (err, people) {
        res.json(people);
    });


});


routes.put('/guncelle/:id', function (req, res, next) {
    People.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) {
            return next(err)
        }
        else {
            console.log("Güncelledi")
            res.json(post);
        }
    })


});



//DataBase Kategori ekleme
routes.route('/category').post(function (req, res) {

    let category = new Category(req.body);
    category.save().then(category => {

        res.status(200).json(category);

    })
        .catch(err => {

            res.status(400).send(err.message);
            console.log(err)
        });
});


//DataBase Ürün ekleme
routes.route('/products').post(function (req, res) {

    let products = new Products(req.body);
    products.save().then(products => {

        res.status(200).json(products);

    })
        .catch(err => {

            res.status(400).send(err.message);
        });

    console.log(products)
});

//Kategorileri çekme
routes.route('/kategoriler').get(function (req, res) {
    Category.find(function (err, category) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(category);
        }

    });

});





routes.route('/submenu/:gender').get(function (req, res) {
    let gender = req.params.gender;
    Category.find({ gender: gender }, function (err, category) {
        res.json(category);
    });
})
//kategoriye göre Listeleme 
//ürünler ve resim tablosunu birleştirme
routes.route('/category').get(function (req, res) {
    let products = req.query
    console.log(products)
    if (products.subcategory === "Tamami") {
        Products.aggregate([
            {
                $match: {
                    category: products.category
                }
            },
            {
                $project: {
                    _id: {
                        $toString: "$_id"
                    },
                    feature: 1,
                    price: 1,
                    productsImg: 1,
                    code: 1,
                    brandname: 1,
                }
            },

            {
                $project: {
                    feature: 1,
                    price: 1,
                    productsImg: "$photos.productsImg",
                }
            }


        ], (err, products) => {
            if (err) {
                console.log("Hata: ", err);
            }
            else {
                console.log(products)
                res.json(products);
            }
        })
    } else {
        Products.aggregate([
            {
                $match: {
                    category: products.category,
                    productname: products.subcategory
                }
            },
            {
                $project: {
                    _id: {
                        $toString: "$_id"
                    },
                    feature: 1,
                    price: 1
                }
            },
            {
                $lookup: {
                    from: "imgschemas",
                    localField: "_id",
                    foreignField: "product_id",
                    as: "photos"
                },
            },
            {
                $unwind: {
                    path: "$photos",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    feature: 1,
                    price: 1,
                    productsImg: "$photos.productsImg",
                }
            }


        ], (err, products) => {
            if (err) {
                console.log("Hata: ", err);
            }
            else {
                console.log(products)
                res.json(products);
            }
        })
    }


});



//Admin Panel Ürünleri Listeleme
routes.route('/urunlistele').get(function (req, res) {
    Products.find(function (err, products) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(products);
        }

    });

});


//Kullanıcı İçin Ürünleri Listeleme
routes.route('/category_urunler/:category_id').get(function (req, res) {
    let category_id = req.params.category_id;
    if (category_id == "Kadın") {
        Category.find({ gender: "Kadın" }, function (err, category) {
            let category_id = []
            for (let i = 0; i < category.length; i++) {
                category_id.push(category[i]._id)
            }
            Products.find({ category_id: category_id }, function (err, products) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(products);
                }

            })
        })
    }
    else if (category_id == "Erkek") {
        Category.find({ gender: "Erkek" }, function (err, category) {
            let category_id = []
            for (let i = 0; i < category.length; i++) {
                category_id.push(category[i]._id)
            }
            Products.find({ category_id: category_id }, function (err, products) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(products);
                }

            });
        })
    }
    else if (category_id == "Çocuk") {
        Category.find({ gender: "Çocuk" }, function (err, category) {
            let category_id = []
            for (let i = 0; i < category.length; i++) {
                category_id.push(category[i]._id)
            }
            Products.find({ category_id: category_id }, function (err, products) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(products);
                }

            });
        })
    }


    else {
        Products.find({ category_id: category_id }, function (err, products) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(products);
            }

        });
    }


});

// Ürünleri Büyükten Küçüğe Doğru Sıralama
//Kullanıcı İçin Ürünleri Listeleme
routes.route('/category_urunler_buyuk/:category_id').get(function (req, res) {
    let category_id = req.params.category_id;
    if (category_id == "Kadın") {
        Category.find({ gender: "Kadın" }, function (err, category) {
            let category_id = []
            for (let i = 0; i < category.length; i++) {
                category_id.push(category[i]._id)
            }
            Products.find({ category_id: category_id }, function (err, products) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(products);
                }

            }).sort({price:-1});
        })
    }
    else if (category_id == "Erkek") {
        Category.find({ gender: "Erkek" }, function (err, category) {
            let category_id = []
            for (let i = 0; i < category.length; i++) {
                category_id.push(category[i]._id)
            }
            Products.find({ category_id: category_id }, function (err, products) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(products);
                }

            }).sort({price:-1});
        })
    }
    else if (category_id == "Çocuk") {
        Category.find({ gender: "Çocuk" }, function (err, category) {
            let category_id = []
            for (let i = 0; i < category.length; i++) {
                category_id.push(category[i]._id)
            }
            Products.find({ category_id: category_id }, function (err, products) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(products);
                }

            }).sort({price:-1});
        })
    }


    else {
        Products.find({ category_id: category_id }, function (err, products) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(products);
            }

        }).sort({price:-1});;
    }


});

// Ürünleri  Küçükten Büyüğe Doğru Sıralama
//Kullanıcı İçin Ürünleri Listeleme
routes.route('/category_urunler_kucuk/:category_id').get(function (req, res) {
    let category_id = req.params.category_id;
    if (category_id == "Kadın") {
        Category.find({ gender: "Kadın" }, function (err, category) {
            let category_id = []
            for (let i = 0; i < category.length; i++) {
                category_id.push(category[i]._id)
            }
            Products.find({ category_id: category_id }, function (err, products) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(products);
                }

            }).sort({price:1});
        })
    }
    else if (category_id == "Erkek") {
        Category.find({ gender: "Erkek" }, function (err, category) {
            let category_id = []
            for (let i = 0; i < category.length; i++) {
                category_id.push(category[i]._id)
            }
            Products.find({ category_id: category_id }, function (err, products) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(products);
                }

            }).sort({price:1});
        })
    }
    else if (category_id == "Çocuk") {
        Category.find({ gender: "Çocuk" }, function (err, category) {
            let category_id = []
            for (let i = 0; i < category.length; i++) {
                category_id.push(category[i]._id)
            }
            Products.find({ category_id: category_id }, function (err, products) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(products);
                }

            }).sort({price:1});
        })
    }


    else {
        Products.find({ category_id: category_id }, function (err, products) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(products);
            }

        }).sort({price:-1});;
    }


});





//Ürünleri Güncelleme

routes.route('/urun/:id').get(function (req, res) {
    let urun_id = req.params.id;
    Products.findById(urun_id, function (err, products) {
        res.json(products);
    });


});


routes.put('/urunguncelle/:id', function (req, res, next) {
    Products.findByIdAndUpdate(req.params.id, req.body, function (err, post) {

        if (err) {
            return next(err)
        }
        else {
            console.log("Güncelledi")
            console.log(req.body)
            res.json(post);
        }
    })


});


// //Ürün Silme
routes.route('/delete/:id').delete(function (req, res) {
    Products.findByIdAndRemove({ _id: req.params.id }, function (err, products) {
        if (err) {
            res.json(err);
        }
        else {
            res.json('Başarıyla Silindi');
        }
    });
});


//Ürünleri Sepete Ekleme

routes.route('/addbasket/:id').post(function (req, res) {
    let basket = new Basket(req.body);
    //let user_id= new People(req.body._id)
    // res.json(user_id)
    Basket.find({ $and: [{ user_id: basket.user_id }, { products_id: basket.products_id }] }, function (err, data) {
        console.log("Data: ", data)
        console.log("Basket: ", basket)

        if (data.length > 0) {
            Basket.findByIdAndUpdate({ _id: data[0]._id }, { stock: data[0].stock + 1 }, function (err, post) {
                if (err) {
                    console.log(err)
                }
                else {
                    res.json(post);
                }
            })

        } else {
            basket.save().then(basket => {
                res.status(200).json(basket);
            })
                .catch(err => {
                    res.status(400).send(err.message)

                });

        }
    });

    // console.log(address)
});



// //Ürünleri Sepette Listeleme
routes.route('/basketlist/:id').get(function (req, res) {
    let user_id = req.params.id   //user_id aldık
    console.log(user_id)
    Basket.aggregate([
        {
            $match: {
                user_id: user_id
            }
        },
        {
            $project: {
                "products_id": {
                    $toObjectId: "$products_id"
                },
                stock: 1
            }
        },
        {
            $lookup:
            {
                from: 'products',
                localField: 'products_id',
                foreignField: "_id",
                as: 'product'
            }
        }
    ], function (err, basket) {
        if (err) throw err;
        res.json(basket)
    });
   

});

// //Ürünleri Sepette Listeleme
routes.route('/basketcount/:id').get(function (req, res) {
    let user_id = req.params.id   //user_id aldık
    console.log(user_id)
    Basket.find({user_id: user_id},function (err, basket) {
        let count = 0;
        for(let i=0; i< basket.length; i++){
            count = count + basket[i].stock
        }
        res.json(count);
    });
   
   

});
//Sepetteki ürünleri id göre bulma
routes.route('/basket/:id/:user_id').get(function (req, res) {
    let products_id = req.params.id
    console.log(req.params)
    Basket.find({ products_id: products_id, user_id: req.params.user_id }, function (err, basket) {
        console.log(products_id)
        res.json(basket);
    });


});

// sepetteki adeti güncelle
routes.put('/basketstock/:id', function (req, res, next) {
    console.log(req.body.stock, req.params.id, req.body.user_id)
    Basket.update({ products_id: req.params.id, user_id: req.body.userId }, { stock: req.body.stock }, function (err, post) {
        console.log("sasd")
        if (err) {
            console.log(err)
        }
        else {
            console.log(post)
            res.json(post);
        }
    })


});

//Sepetten Ürün Çıkarma
routes.route('/basketlist/delete/:id').delete(function (req, res) {
    //res.json(basket);
    // let products_id=req.body.products_id
    // console.log(products_id)
    let user_id = req.params.id   //user_id aldık
    console.log("userId", user_id)
    console.log(req.body.products_id)
    Basket.findOneAndRemove({ products_id: req.body.products_id }, function (err, basket) {
        // console.log("ürün kodu",products_id)
        //console.log(_id)
        if (err) {
            res.json(err);
        }
        else {
            res.json('Başarıyla Silindi');
            console.log(basket)
        }
    });
});





//Ürünleri Favorilere Ekleme
routes.route('/favorite/:id').post(function (req, res) {
    //let product_id=Products(req.body._id);
    People.findById(req.params.id, function (err, people) {
        if (!people) {
            res.status(404).send("Veri bulunamadı");

        }
        else {

            //people.favorites=product_id;
            //people.favorites=req.body.favorites
            let userFavorites = [];
            let status = false;
            userFavorites = people.favorites;
            /*status = userFavorites.map((product_id) => {
                if(product_id === req.body.favorites){
                    return true
                }else{
                    return false
                }
                    
            })*/
            for (let i = 0; i < userFavorites.length; i++) {
                if (userFavorites[i] === req.body.favorites)
                    status = true;
            }
            if (!status)
                userFavorites.push(req.body.favorites);
            //console.log(status)
            people.favorites = userFavorites

            people.save().then(people => {

                console.log(people.favorites)
                res.json(people.favorites);


            })
                .catch(err => {

                    res.status(400).send("Ekleme Gerçekleşemedi");

                });

        }

    })

});


//favori urunleri listeleme
routes.route('/favorite/:id').get(function (req, res) {
    let user_id = req.params.id
    People.findById(user_id, function (err, people) {
        if (!people) {
            res.status(404).send("Veri bulunamadı");
        }
        else {
            let userFavorites = [];
            people.favorites.map((product_id) => {
                userFavorites.push(mongoose.Types.ObjectId(product_id))
            })
            Products.aggregate([
                {
                    $match: {
                        _id: { $in: userFavorites }
                    }
                },
                {
                    $project: {
                        _id: {
                            $toString: "$_id"
                        },
                        feature: 1,
                        price: 1,
                        brandname: 1,
                        productsImg: 1,
                        code: 1
                    }
                },
            ], (err, products) => {
                if (err) {
                    console.log("Hata: ", err);
                }
                else {
                    console.log(products)
                    res.json(products);
                }
            })
        }
    })
});


//Ürünleri Favorilerden Silme
routes.route('/favorite/delete/:id').delete(function (req, res) {

    console.log(req.body)

    People.update({ favorites: req.body.favorites }, { $pull: { favorites: req.body.favorites } }, function (err, people) {
        console.log(req.body.favorites)
        if (err) {

            err.json(err);
        }
        else {
            res.json('Başarıyla Silindi');
        }
    })

});


//Siparişleri Tamamlama
routes.route('/addOrders').post(function (req, res) {
    let orders = new Orders(req.body);
    console.log(req.body)
    orders.save().then(orders=> {
        Basket.deleteMany({user_id: orders.user_id},function(err,basket){  //Siparişler tablosuna eklerken
                                                                        //eklenen ürünleri sepet tablosundan silmek için
            console.log(basket)
        })
        res.status(200).json(orders);

    })
        .catch(err => {
            res.status(400).send(err.message)

        });
});

//Siparişleri Listeleme
routes.route('/siparisliste').get(function (req, res) {
    Orders.find(function (err, orders) {
        if (err) {
            console.log(err);
        }
        else {
          
            res.json(orders);
        }

    });

});





app.use('/people', routes);
app.use('/address', routes);
app.use('/photo', routes);
app.use('/urunler', routes);
app.use('/categories', routes);
app.use('/basket', routes);
app.use('/contact', routes);
app.use('/orders',routes)
app.use((req, res, next) => {
    setImmediate(() => {
        next(new Error('Bir şeyler ters gitti'));
    });
});
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});

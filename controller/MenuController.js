var express = require('express');
var router = express.Router();
var sql = require("mssql");
var conn = require("../connection/connect")();

var routes = function () {
    router.route('/')
        .get(function (req, res) {
            conn.connect().then(function () {
                var sqlQuery = "select kode_menu, nama_menu, link, icon from dbo.MS_WEBMENU";
                var req = new sql.Request(conn);
                req.query(sqlQuery).then(function (recordset) {
                     res.json(recordset.recordset);
                    conn.close();
                })
                    .catch(function (err) {
                        conn.close();
                        res.status(400).send("Error while inserting data");
                    });
            })
                .catch(function (err) {
                    conn.close();
                    res.status(400).send("Error while inserting data");
                });
        });


        //READ-SINGLE
        router.route('/:id').get(function (req, res) {
            const productID = req.params.id;
                conn.connect().then(function () {
                    //console.log(req.params.id);
                    var sqlQuery = " SELECT * FROM Products WHERE ProductID='"+productID+"' ";
                    var req = new sql.Request(conn);
                    // console.log('isi kueri apa ? : '+sqlQuery);
                    req.query(sqlQuery).then(function (recordset) {
                        res.json(recordset.recordset);
                        conn.close();
                    })
                        .catch(function (err) {
                            conn.close();
                            res.status(400).send("Error-1 while load data");
                        });
                })
                    .catch(function (err) {
                        conn.close();
                        res.status(400).send("Error 2 while load data");
                    });
        });

    // router.route('/')
    //     .post(function (req, res) {
    //         conn.connect().then(function () {
    //             var transaction = new sql.Transaction(conn);
    //             transaction.begin().then(function () {
    //                 var request = new sql.Request(transaction);
    //                 request.input("ProductName", sql.VarChar(50), req.body.ProductName)
    //                 request.input("ProductPrice", sql.Decimal(18, 0), req.body.ProductPrice)
    //                 request.execute("Usp_InsertProduct").then(function () {
    //                     transaction.commit().then(function (recordSet) {
    //                         conn.close();
    //                         res.status(200).send(req.body);
    //                     }).catch(function (err) {
    //                         conn.close();
    //                         res.status(400).send("Error while inserting data");
    //                     });
    //                 }).catch(function (err) {
    //                     conn.close();
    //                     res.status(400).send("Error while inserting data");
    //                 });
    //             }).catch(function (err) {
    //                 conn.close();
    //                 res.status(400).send("Error while inserting data");
    //             });
    //         }).catch(function (err) {
    //             conn.close();
    //             res.status(400).send("Error while inserting data");
    //         });
    //     });


    // router.route('/:id')
    //     .put(function (req, res) {
    //         var _productID = req.params.id;
    //         conn.connect().then(function () {
    //             var transaction = new sql.Transaction(conn);
    //             transaction.begin().then(function () {
    //                 var request = new sql.Request(transaction);
    //                 request.input("ProductID", sql.Int, _productID)
    //                 request.input("ProductPrice", sql.Decimal(18, 0), req.body.ProductPrice)
    //                 request.execute("Usp_UpdateProduct").then(function () {
    //                     transaction.commit().then(function (recordSet) {
    //                         conn.close();
    //                         res.status(200).send(req.body);
    //                     }).catch(function (err) {
    //                         conn.close();
    //                         res.status(400).send("Error while updating data");
    //                     });
    //                 }).catch(function (err) {
    //                     conn.close();
    //                     res.status(400).send("Error while updating data");
    //                 });
    //             }).catch(function (err) {
    //                 conn.close();
    //                 res.status(400).send("Error while updating data");
    //             });
    //         }).catch(function (err) {
    //             conn.close();
    //             res.status(400).send("Error while updating data");
    //         });
    //     });


        // router.route('/:id')
        // .delete(function (req, res) {
        //     var _productID = req.params.id;
        //     conn.connect().then(function () {
        //         var transaction = new sql.Transaction(conn);
        //         transaction.begin().then(function () {
        //             var request = new sql.Request(transaction);
        //             request.input("ProductID", sql.Int, _productID)
        //             request.execute("Usp_DeleteProduct").then(function () {
        //                 transaction.commit().then(function (recordSet) {
        //                     conn.close();
        //                     res.status(200).json("ProductID:" + _productID);
        //                 }).catch(function (err) {
        //                     conn.close();
        //                     res.status(400).send("Error while Deleting data");
        //                 });
        //             }).catch(function (err) {
        //                 conn.close();
        //                 res.status(400).send("Error while Deleting data");
        //             });
        //         }).catch(function (err) {
        //             conn.close();
        //             res.status(400).send("Error while Deleting data");
        //         });
        //     })
        // });

    return router;
};
module.exports = routes;
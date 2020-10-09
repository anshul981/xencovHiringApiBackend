const express = require("express");
const credentials = require("./credentials");
const app = express();

app.listen(5000,() =>{
    console.log("server is listening on port 5000");
});

var fs = require('fs');
var csv = require('fast-csv');
const pool = require('./pgdb');

pool.connect(function(err){
    if(err){
        console.log(err);
    }
});

let counter = 0;

let csvStream = csv.parseFile(".\\csv\\5m_Sales_Records.csv",{headers: true}).on("data", function(record){
        csvStream.pause();

        if(counter < 10){
            let region = record.Region;
            let country = record.Country;
            let item_type = record.ItemType;
            let sales_channel = record.SalesChannel;
            let order_priority = record.OrderPriority;
            let order_date = new Date(record.OrderDate);
            let order_id  = record.OrderID;
            let ship_date = new Date(record.ShipDate);
            let units_sold = record.UnitsSold;
            let unit_price = record.UnitPrice;
            let unit_cost = record.UnitCost;
            let total_revenue = record.TotalRevenue;
            let total_cost = record.TotalCost;
            let total_profit = record.TotalProfit;

            pool.query("INSERT INTO salesdata(region,country,item_type,sales_channel,order_priority,order_date,order_id,ship_date,units_sold,unit_price,unit_cost,total_revenue,total_cost,total_profit) \VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)", [region,country,item_type,sales_channel,order_priority,order_date,order_id,ship_date,units_sold,unit_price,unit_cost,total_revenue,total_cost,total_profit], function(err){
                if(err){
                    // console.log(err);
                    if (err.code !== undefined) {
                        console.log("pg error code:", err.code);
                      
                        // 42601 = 'syntax_error'
                        if (err.code === "22008") {
                          // return the position of the SQL syntax error
                          console.log(err);
                          console.log("SQL syntax error position:", err.position);
                        }
                      }
                }
            });
            ++counter;

        }
        csvStream.resume();
    }).on("end",function(){
        console.log("Job is done!");
    }).on("error",function(err){
        console.log(err);
    });
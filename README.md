# xencovHiringApiBackend
This is the backend application. Please find the README file to run, as well as database.sql file to create database and table in postgresql

Create the database and corresponding table in Postgresql using the commands in database.sql file. Note that the table must be public schema.

Navigate using terminal or command prompt to "PG-BASIC" folder which may be the name of cloned root folder. 

Create a folder named "csv" and save "5m_Sales_Records.csv" file inside it.(Note the headers of csv file should not have spaces, eg: "Sales Unit" should be changed to "SalesUnit") 

This application need node.js , express and nodemon to be installed in the system.

run the command in terminal "npm install -g nodemon".

run the command in terminal "npm install -save pg".

run the command in the terminal "npm install -save fast-csv".

run the command in terminal "nodemon index" to run the Application.

Finally check result  in Postgresql in the database named "testing_database", inside that table named "salesdata" the data will be populated there from csv file.

Note: I have added these additional steps because node_modules and csv file were exceeding the git hub upload limit.

# electron-crud-template-with-mysql-connected
Electron quick-starter , connected with bootstrap 5 , jquery-3.6.1, front awesome and mysql

1st step : 

clone this link 

````cmd
https://github.com/smhabibjr/electron-crud-template-with-mysql-connected.git
````

2nd step: run 

````
npm i install & npm start
````

3nd step : you will get an error like below
![image](https://user-images.githubusercontent.com/77357735/198300829-0c0a2cb2-df58-44b4-8486-f76f9903b13e.png)


4th step : To solve this problem. Open the database.js file and filled up database data according to your mysql.

example: 
````
const connection =  mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database: 'electrondb'
})
````

import mysql from 'mysql2';
import jwt from 'jsonwebtoken';

const conn=mysql.createConnection({
    host:'localhost',
    user:'Root',
    password:'Root',
    database:'ermproject'
});
conn.connect(err=>{
    if(err) console.log('database connection error:',err);
});
export default function handler(req, res){
    if(req.method==='POST'){
        const {name, password}=req.body;
        const trimmedname=name.trim();
        const trimmedpassword=password.trim();
        if(!name || !password){
            return res.status(400).json({error:'Missing credentials'});
        }
        const sql='SELECT * FROM user WHERE name=? and password=?';
        conn.query(sql,[trimmedname,trimmedpassword],(err,results)=>{
            if(err){
                console.error('Login error:',err);
                return res.status(500).json({error:'database error'})
            }
            if (results.length===0){
                return res.status(400).json({error:'invalid'})
            }
        })
    }
}
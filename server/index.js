import express from "express"
import { Sequelize, DataTypes } from "sequelize"

import {fileURLToPath} from "url"
import path from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

const app = express()
app.use(express.json())

const db = new Sequelize({
    dialect: "sqlite", 
    storage: path.join(__dirname, "DB.sqlite")
})

async function initDB(){
    await db.authenticate()
    const Projects = db.define('projects', {
        name:{
            type: DataTypes.STRING, 
            allowNull: false
        },
        shortDescription:{
            type: DataTypes.STRING, 
        },
        longDescription:{
            type: DataTypes.TEXT, 
        },
        image:{
            type: DataTypes.STRING, 
        }, 
        personId:{
            type: DataTypes.INTEGER, 
        }
    })
    await Projects.sync({force: true})
    Projects.create({
        name: "AI", 
        shortDescription: "This is a short description", 
        longDescription:"this is a way longer description that uses the text datatypes", 
        image:"./random/path",
        personId: "1"

    })

   
   
    const People = db.define('people', {
        name:{
            type: DataTypes.STRING, 
            allowNull: false
        },
        Description:{
            type: DataTypes.STRING, 
        },
        image:{
            type: DataTypes.STRING, 
        }, 
        email:{
            type: DataTypes.STRING, 
        }
    })
    await People.sync({force: true})
    People.create({
        name: "Jhon mayer", 
        Description: "This is a short description for a person", 
        image:"./random/path", 
        email: "youoiok@gmail.com"
    })

    
    
    const Area = db.define('area', {
        name:{
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        description:{
            type: DataTypes.STRING, 
            allowNull: false
        }
    })
    await Area.sync({force: true})
    Area.create({
        name: "Medicine", 
        description: "this is where you write the definition of medicine"
    })
}



async function initServer(){
    const model = await initDB() 

    app.get('/', async(req, res) => {
        res.send("Hello world");
    })

    app.get('/getprojects', async(req, res) => {
        const data= await model.Projects.findAll()
        res.status(200).json(data);
        console.log(json(data)); 
    })

    app.listen(3000, () =>{
        console.log("listening on port 3000")
    })

}
export default fromNodeMiddleware(app)
initServer(); 
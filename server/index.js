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
    const projectValues = [
        {
          name: "Resolving world Hunger", 
          shortDescription: "This is a short description"
        },
        {
            name: "Machine learning to cure cancer", 
            shortDescription: "This is a short description for the second time"
        }

    ]

    await Projects.bulkCreate(projectValues);  

   
   
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
    const peopleValues = [
    {
        name: "Sam Gentili", 
        Description: "Greatest person on earth", 
        image:"./random/path", 
        email: "exampel@gmail.com"
    },
    {
        name: "John", 
        Description: "meh not that good", 
        image:"./random/path", 
        email: "dfsdqdl@gmail.com"
    }]
    await People.bulkCreate(peopleValues); 

    

    
    
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
    const areaValues = [{
        name: "Medicine", 
        description: "this is where you write the definition of medicine"
    },
    {
        name: "Nature", 
        description: "What is the nature"
    }]
    await Area.bulkCreate(areaValues); 

    const tables = [Projects, People, Area];
    return tables
}



async function initServer(){
    const models = await initDB() 

    app.get('/', async(req, res) => {
        res.send("Hello world");
    })

    app.get('/getprojects', async(req, res) => {
        const data= await models[0].findAll()
        res.json(data);
        console.log(data);
    })

    app.get('/getareas', async(req, res) => {
        const data= await models[2].findAll()
        res.json(data);
        console.log(data);
    })

    app.get('/getpeople', async(req, res) => {
        const data= await models[1].findAll()
        res.json(data);
        console.log(data);
    })

    app.listen(3001, () =>{
        console.log("listening on port 3001")
    })

}
export default fromNodeMiddleware(app)
initServer();

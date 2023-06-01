import express from "express";
import { Sequelize, DataTypes } from "sequelize";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "DB.sqlite"),
});

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
"name": "Resolving world Hunger",
"shortDescription": "This is a short description",
"image": "https://i.postimg.cc/NG49tm0q/World-Hunger-Solutions.jpg",
"longDescription": "Resolving world Hunger is a global initiative aimed at addressing the pressing issue of hunger and food insecurity worldwide. The project brings together experts, organizations, and communities to develop sustainable and scalable solutions to eradicate hunger. Through research, innovation, and collaboration, the project seeks to improve agricultural practices, optimize food distribution systems, and empower vulnerable communities. By leveraging technology, such as machine learning and data analytics, the project aims to enhance food production, reduce waste, and ensure equitable access to nutritious food for all individuals. Resolving world Hunger envisions a future where no one suffers from hunger, and all individuals have access to sufficient and nutritious food to lead healthy and productive lives."
},
{
"name": "Machine learning to cure cancer",
"shortDescription": "This is a short description for the second time",
"image": "https://i.postimg.cc/fL4tT1SN/Esempi-pratici-di-Machine-learning.png",
"longDescription": "Machine learning to cure cancer is a groundbreaking research project that harnesses the power of artificial intelligence and machine learning to advance the diagnosis and treatment of cancer. The project combines vast amounts of medical data, including patient records, genetic information, and imaging data, with advanced algorithms to develop predictive models and personalized treatment plans. By analyzing patterns and identifying correlations in the data, machine learning algorithms can aid in early detection, improve accuracy in diagnosis, and optimize treatment strategies. This project aims to revolutionize cancer care by enabling tailored and precise interventions, ultimately leading to improved outcomes and increased survival rates for cancer patients."
},
{
"name": "GreenTech Solutions",
"shortDescription": "Developing sustainable technology solutions to reduce carbon emissions and promote environmental conservation",
"image": "https://i.postimg.cc/brzZbN3B/greentech.jpg",
"longDescription": "GreenTech Solutions is an innovative project dedicated to developing and implementing sustainable technology solutions that contribute to the reduction of carbon emissions and promote environmental conservation. The project focuses on leveraging cutting-edge technologies, such as renewable energy systems, energy-efficient devices, and smart grids, to optimize resource usage, minimize ecological footprints, and mitigate the impacts of climate change. Through research, design, and collaboration with industry partners, GreenTech Solutions aims to create a greener and more sustainable future. By integrating technology and environmental stewardship, the project envisions a world where sustainable practices are the norm and natural resources are preserved for future generations."
},
{
"name": "HealthTrack",
"shortDescription": "Building a mobile application that allows users to track and monitor their health metrics, including exercise, diet, and vital signs.",
"image": "https://i.postimg.cc/qqjzGVFM/healthtrack.jpg",
"longDescription": "HealthTrack is an innovative mobile application designed to empower users in tracking and monitoring their health metrics. The app provides a comprehensive platform for individuals to record and analyze various aspects of their well-being, including exercise routines, dietary habits, vital signs, and sleep patterns. With user-friendly interfaces and intuitive features, HealthTrack encourages users to take a proactive approach to their health and make informed decisions to improve their overall well-being. By leveraging data analytics and personalized insights, the app enables users to set health goals, track progress, and receive recommendations tailored to their specific needs. HealthTrack aims to empower individuals to take control of their health and lead healthier, more balanced lives."
},
{
"name": "SmartHome Automation",
"shortDescription": "Creating a system that integrates various smart devices in a home to automate tasks, enhance security, and improve energy efficiency.",
"image": "https://i.postimg.cc/9FQ4Q044/smart-home.png",
"longDescription": "SmartHome Automation is an ambitious project that aims to transform traditional homes into intelligent and efficient living spaces. By integrating various smart devices and systems, such as smart thermostats, lighting controls, security cameras, and voice assistants, SmartHome Automation enhances convenience, security, and energy efficiency. The project leverages cutting-edge technologies, including artificial intelligence, machine learning, and Internet of Things (IoT), to create a seamless and intuitive user experience. Through intelligent automation, residents can control and monitor their homes remotely, optimize energy consumption, and improve overall comfort and safety. SmartHome Automation envisions a future where technology simplifies daily routines, conserves energy, and enhances the quality of life within the home."
},
{
"name": "EduLearn",
"shortDescription": "Developing an online learning platform that offers interactive courses and personalized learning experiences for students of all ages",
"image": "https://picsum.photos/600/600",
"longDescription": "EduLearn is an innovative online learning platform that aims to revolutionize education by providing interactive courses and personalized learning experiences for students of all ages. The platform offers a diverse range of subjects, taught by expert instructors, and utilizes interactive multimedia content, gamification elements, and adaptive learning technologies to engage and inspire learners. EduLearn provides a flexible and accessible learning environment, enabling students to learn at their own pace and according to their individual learning styles. Through data-driven analytics, the platform continuously adapts and tailors the learning experience to meet each student's unique needs and optimize their learning outcomes. EduLearn strives to make education engaging, inclusive, and lifelong, empowering individuals to acquire knowledge and skills for personal growth and professional success."
},
{
"name": "FoodShare",
"shortDescription": "Building a mobile app that connects individuals and organizations to share excess food, reducing food waste and addressing hunger issues.",
"image": "https://i.postimg.cc/fL4tT1SN/Esempi-pratici-di-Machine-learning.png",
"longDescription": "FoodShare is a transformative project that tackles the pressing issues of food waste and hunger by connecting individuals and organizations through a mobile application. The app enables individuals, restaurants, and grocery stores to share their excess food with those in need, reducing food waste and ensuring that surplus resources reach individuals facing food insecurity. FoodShare provides a platform for users to list available food items, arrange pickups, and facilitate the redistribution process efficiently. By leveraging technology and fostering a sense of community, the project aims to address hunger at a local level and create a more sustainable and equitable food system. FoodShare envisions a future where no edible food goes to waste, and everyone has access to nutritious meals."
},
{
"name": "RoboGuard",
"shortDescription": "Designing an autonomous security robot equipped with advanced sensors and AI capabilities to enhance surveillance and protect premises.",
"image": "https://picsum.photos/600/600",
"longDescription": "RoboGuard is a cutting-edge project focused on designing an autonomous security robot that enhances surveillance capabilities and safeguards premises. The robot is equipped with advanced sensors, including cameras, motion detectors, and environmental sensors, enabling it to monitor and detect potential security threats in real-time. With the integration of artificial intelligence and machine learning algorithms, RoboGuard can analyze patterns, identify anomalies, and respond appropriately to varying situations. The robot can navigate autonomously, patrol designated areas, and provide remote monitoring and alerts to security personnel. RoboGuard aims to revolutionize the field of security by combining the power of robotics and AI to create a proactive and efficient surveillance solution, contributing to safer environments for both residential and commercial spaces."
}
]

    await Projects.bulkCreate(projectValues);  

  const People = db.define("people", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  });
  await People.sync({ force: true });
  const peopleValues = [
    {
      name: "Sam Gentili",
      Description: "Greatest person on earth",
      image: "./random/path",
      email: "exampel@gmail.com",
    },
    {
      name: "John",
      Description: "meh not that good",
      image: "./random/path",
      email: "dfsdqdl@gmail.com",
    },
  ];
  await People.bulkCreate(peopleValues);

  const Area = db.define("area", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  await Area.sync({ force: true });
  const areaValues = [
    {
      name: "Medicine",
      description: "this is where you write the definition of medicine",
    },
    {
      name: "Nature",
      description: "What is the nature",
    },
  ];
  await Area.bulkCreate(areaValues);

  const tables = [Projects, People, Area];
  return tables;
}

async function initServer() {
  const models = await initDB();

  app.get("/", async (req, res) => {
    res.send("Hello world");
  });

  app.get("/getprojects", async (req, res) => {
    const data = await models[0].findAll();
    res.json(data);
    console.log(data);
  });

  app.get("/getareas", async (req, res) => {
    const data = await models[2].findAll();
    res.json(data);
    console.log(data);
  });

  app.get("/getpeople", async (req, res) => {
    const data = await models[1].findAll();
    res.json(data);
    console.log(data);
  });

  app.get("/getprojects/:parameter", async (req, res) => {
    const parameter = req.params.parameter; // Access the parameter value
    const data = await models[0].findAll({
      where: {
        id: parameter, // Filter based on the ID value
      },
    })
    res.json(data);
    console.log(data);
  })

  app.listen(3001, () => {
    console.log("listening on port 3001");
  });
}
export default fromNodeMiddleware(app);
initServer();

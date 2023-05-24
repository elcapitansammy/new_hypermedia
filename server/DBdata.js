async function initializeDBdata(models){
    const projectValues = [
        {
          name: "AI", 
          shortDescription: "This is a short description"
        }
    ]

    await models.Dog.bulkCreate(projectValues);   
}
export default initializeDBdata
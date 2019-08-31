const Joi = require('joi');//'J' is caital coz Joi is a class
const express = require('express');
const app = express();// express() means application of express

app.use(express.json());//we are using a middleware here 

const courses = [
    {id: 1, course: 'OS'},
    {id: 2, course: 'DBMS'},
    {id: 3, course: 'DSA'},
];

app.get('/',(req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/courses',(req, res) => {
    res.send(courses);
})

function validateCourse(course)
{
    const schema = {
        name: Joi.string().min(2).required()
    };
    return Joi.validate(course, schema);//this func is saying that hey Joi validate the req.body wrt this schema
}

app.post('/api/courses', (req, res) => { //we use post to add a data to the server

    const {error} = validateCourse(req.body);
    if(error) return res.status(400).send(result.error.details[0].message);
        
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course); 
    //by convention when we post an object to the server or server creates new obj or resource
    //we should return that object in the body of that response
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return  res.status(404).send(`the course with id ${req.params.id} was not found`); //send func used toend message to client along with status code
    //send func used toend message to client along with status code
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    //look it up for the course corresponds to the id
    //if it doesn't exist , return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send(`the course with id ${req.params.id} was not found`); //send func used toend message to client along with status code
    //send func used toend message to client along with status code

    //otherwise validate the course 
    //If invalid, return 400 - Bad request
    const {error} = validateCourse(req.body);
    if(error) return res.status(400).send(result.error.details[0].message);

    //Update the course 
    //return the updated course
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    //look it up for the course corresponds to the id
    //if it doesn't exist , return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send(`the course with id ${req.params.id} was not found`); //send func used toend message to client along with status code
    //send func used toend message to client along with status code

    //delete the course
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: April Alastre Student ID: aralastre Date: 06/01/2024
*
********************************************************************************/ 


const collegeData = require('./collegeData'); //Imports the module collegeData

collegeData.initialize() //Initialize the data 
    .then(() => { //Handls promise resolution
        return collegeData.getAllStudents(); //Calling getAllStudents and getting students
    })
    .then(students => {  //Handls promise resolution after getting students
        console.log(`Successfully retrieved ${students.length} students`); //Logging the number of retrieved students
        return collegeData.getCourses(); //Calls the getCourse function and return the results
    })
    .then(courses => { 
        console.log(`Successfully retrieved ${courses.length} courses`); //Logging the number of retrieved students
        return collegeData.getTAs(); //Returns a promise to get all courses
    })
    .then(TAs => { //Handling promise resolution after getting Teaching Assistants
        console.log(`Successfully retrieved ${TAs.length} TAs`); //Logging the number of retrieved TAs
    })
    .catch(error => { //Handles errors happened during the process
        console.error("Error:", error); //Logging the error message
    });

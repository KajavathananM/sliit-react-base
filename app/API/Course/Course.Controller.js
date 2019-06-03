var mongoose= require('../DBSchema/SchemaMapper');
var CourseSchema= mongoose.model('Course');

var UserController = function(){
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var course = new CourseSchema({
                name: data.name,
                code: data.code,
                passMark:data.passMark,
                lecturer:data.lecturer,
                subjects:data.subjects
            });
            course.save().then(() => {
                resolve({status: 200, message: "Added new Course"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })

    };

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            CourseSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    };

    this.search = (code) => {
        return new Promise((resolve, reject) => {
            CourseSchema.find({code:code}).exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    };


};

module.exports = new UserController();
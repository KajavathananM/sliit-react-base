var mongoose = require('../DBSchema/SchemaMapper');
var SubjectSchema= mongoose.model('Subject');

var UserController = function(){
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var subject= new SubjectSchema({
                id:data.id,
                name: data.name,
                desc: data.desc,
                amount:data.amount
            });
            subject.save().then(() => {
                resolve({status: 200, message: "Added new Subject"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })

    };

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            SubjectSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    };

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            SubjectSchema.find({id:id}).exec().then(subject => {
                resolve({status: 200, data: subject});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    };


};

module.exports = new UserController();

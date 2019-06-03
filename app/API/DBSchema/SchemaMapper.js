var mongoose 		= require('mongoose');
const Schema        = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: true
    },
    passMark: {
        type: Number,
        require: true
    },
    lecturer: {
        type: String,
        require: true
    },
    subjects:[{type:String,require:true}],
    type:Object
});


const SubjectSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    }
});

mongoose.model('Course', CourseSchema );
mongoose.model('Subject',SubjectSchema);

module.exports = mongoose;
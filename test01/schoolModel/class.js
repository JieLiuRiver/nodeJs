
    var student = require('./student.js');
    var teacher = require("./teacher.js");
    function add(teachername, students){
        teacher.add( teachername );
        students.forEach(function(item,index){
            student.add( item );
        });
    }
    exports.add = add;
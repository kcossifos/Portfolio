app.service("sList", function(){
    
    //Array literal for pokemon with 3 objects corresponding to the pokemon
    var studentArr = [{"name" : "Kelsey",
                   "grade" : "Junior",
                   "program" : "Web"
                   },
                   {"name" : "Shrub",
                   "grade" : "Junior",
                   "program" : "Web"
                   },
                   {"name" : "Ka",
                   "grade" : "Junior",
                   "program" : "Web"
                   }
                  ];
    
    this.getStudents = function(){
        var list = localStorage.getItem('sList');
        studentArr = JSON.parse(list) || studentArr;
        return studentArr;
    }

    this.getList = function(idex){
      return this.getStudents()[idex];
    }

    this.addStudents= function(student){
        studentArr.push(student);
        updateLS();
    }
    
    this.removeStudent = function(sidex){ 
        studentArr.splice(sidex,1);  
        updateLS();    
    }

    this.updateStudent= function(student,sidex){
      studentArr.splice(sidex,1,student);
      updateLS();
    }
    
    function updateLS(){
       var lists = JSON.stringify(studentArr);
        localStorage.setItem('sList', lists);
    }
})
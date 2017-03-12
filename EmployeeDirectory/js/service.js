app.service("empDir", function(){
    var empsArr = [];
    this.getEmployees = function() {
       var gi = localStorage.getItem("empsArr"); 
        empsArr = JSON.parse(gi) || empsArr;    
       return empsArr;     
    }
    
    this.addEmp = function(employee) {
        empsArr.push(employee);
        updateLS();
    }
    
    this.removeEmp = function(eindex) {
        empsArr.splice(eindex, 1);
        updateLS();
    }
    
    function updateLS(){
        var ls = JSON.stringify(empsArr);
        localStorage.setItem("empsArr", ls);
    };
    
    
});
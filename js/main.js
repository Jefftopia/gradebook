var Gradebook;
(function (Gradebook) {
    (function () {
        $(document).ready(function () {
            var gradebookApp = new Gradebook.ViewModel.StudentsViewModel;
            ko.applyBindings(gradebookApp, document.getElementById('gradebook-app'));
        });
    })();
})(Gradebook || (Gradebook = {}));
var Gradebook;
(function (Gradebook) {
    (function (Model) {
        var StudentModel = (function () {
            function StudentModel(fullName) {
                var _this = this;
                this.fullName = ko.observable(fullName);
                this.editing = ko.observable(false);
                this.edit = function() { _this.editing(true); };            
                this.scores = ko.observableArray();
                this.lowest = ko.observableArray();
                this.mean = ko.computed(function() {
                        var sum  = 0;
                        var count = 0;
                        var n = 0;
                        for(n;n < _this.scores().length;n++) {
                            var score = _this.scores()[n];
                            if (_this.lowest.indexOf(score)<0) {
                                sum += parseFloat(score());
                                count++;
                            }
                        }
                        
                        if (count > 0) {
                            sum = sum / count;
                            return sum.toFixed(2);
                        } else {
                            return 'N/A';
                        }
                });
            }
            return StudentModel;
        })();
        Model.StudentModel = StudentModel;
    })(Gradebook.Model || (Gradebook.Model = {}));
    var Model = Gradebook.Model;
})(Gradebook || (Gradebook = {}));
var Gradebook;
(function (Gradebook) {
    (function (Model) {
        var WorkModel = (function () {
            function WorkModel(workName,workType) {
                var _this = this;
                this.workName = ko.observable(workName);
                this.workType = ko.observable(workType);
                this.editing = ko.observable(false);
                this.edit = function() { _this.editing(!_this.editing()); };            
            }
          
            return WorkModel;
        })();
        Model.WorkModel = WorkModel;
    })(Gradebook.Model || (Gradebook.Model = {}));
    var Model = Gradebook.Model;
})(Gradebook || (Gradebook = {}));
var Gradebook;
(function (Gradebook) {
    (function (ViewModel) {
        var StudentsViewModel = (function () {
            function StudentsViewModel() {
                var _this = this;
              
                this.workTypes = [
                  {workType: 'Homework'},
                  {workType: 'Quiz'},
                  {workType: 'Test'},
                  {workType:  'Project'},
                  {workType:  'Other'}
                ];
              
                this.students = ko.observableArray([
                    new Gradebook.Model.StudentModel("Jeff Smith"),
                    new Gradebook.Model.StudentModel("Gandalf")
                ]);
              
                this.assignments = ko.observableArray([
                    new Gradebook.Model.WorkModel("Math",_this.workTypes[0]),
                    new Gradebook.Model.WorkModel("Reading",_this.workTypes[0])
                ]);
              
                this.workMean = function (work, i) {
                  var m = 0;
                  var count = 0;
                  ko.utils.arrayForEach(_this.students(), function(student){
                    var score;
                    
                    if (typeof student.scores()[i] === 'function') {
                      score = parseFloat(student.scores()[i]());
                    }
                    
                    if (!isNaN(score)) {
                      m += score;
                      count += 1;
                    }
                  });
                  
                  if(count) {
                    m = m / count; 
                    return m.toFixed(2);
                  } else {
                    return 'N/A';
                  }
                };

                this.comparator = function(a,b){
                    if(a()<b()){
                        return -1;
                    } else if(a() > b()){
                        return 1;
                    } else {
                        return 0;
                    }
                }; 

               this.dropLowestScores = function() {
                    ko.utils.arrayForEach(_this.students(), function(student){
                        var tmp = student.scores().sort(_this.comparator).slice(0,1);
                        student.lowest(tmp);
                    });
               };              

                this.addStudent = function () {
                    this.students.push(new Gradebook.Model.StudentModel("Student "));
                    this.updateRows();
                };
              
                this.removeStudent = function (student) {
                    this.students.remove(student);
                };
              
                this.addWork = function () {
                    this.assignments.push(new Gradebook.Model.WorkModel("Assignment ",_this.workTypes[0]));
                    this.updateRows();
                };
              
                this.removeWork = function (workName) {
                    this.assignments.remove(workName);
                };
              
                this.updateRows = function () {
                    ko.utils.arrayForEach(_this.students(), function (student) {
                        while (student.scores().length < _this.assignments().length) {
                            student.scores.push(ko.observable(Math.floor(Math.random() * 100) + 1));
                        }
                    });
                };
              
            }
            return StudentsViewModel;
        })();
        ViewModel.StudentsViewModel = StudentsViewModel;
    })(Gradebook.ViewModel || (Gradebook.ViewModel = {}));
    var ViewModel = Gradebook.ViewModel;
})(Gradebook || (Gradebook = {}));

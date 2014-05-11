module Gradebook {

	export module ViewModel {

		export class StudentsViewModel {

            workTypes = [
              {workType: 'Homework'},
              {workType: 'Quiz'},
              {workType: 'Test'},
              {workType:  'Project'},
              {workType:  'Other'}
            ];

            students = ko.observableArray([
                new Gradebook.Model.StudentModel("Jeff Smith"),
                new Gradebook.Model.StudentModel("Gandalf")
            ]);

            assignments = ko.observableArray([
                new Gradebook.Model.WorkModel("Math",this.workTypes[0]),
                new Gradebook.Model.WorkModel("Reading",this.workTypes[0])
            ]);

            workMean = (work, i) => {
              var m = 0;
              var count = 0;
              ko.utils.arrayForEach(this.students(), function(student){
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
            }

			addStudent = function(){
				this.students.push(new Model.StudentModel("Student "));
				this.updateRows();
			}

			removeStudent = function(student) {
				this.students.remove(student);
			}

			addWork = function(){
				this.assignments.push(new Model.WorkModel("Assignment "));
				this.updateRows();
			}	

			removeWork = function(workName){
				this.assignments.remove(workName);
			}		

			updateRows = () => {
                ko.utils.arrayForEach(this.students(), (student) => {
                    while(student.scores().length < this.assignments().length){
                    	student.scores.push(ko.observable(100));
                    }  
                })
             }	
		}
	}
}
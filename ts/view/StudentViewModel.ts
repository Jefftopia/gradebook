module Gradebook {	
    
    export module ViewModel {
    
        export StudentsViewModel {
        
            var _this= this;
            
            this.num= [{n: 0},{n: 1},{n: 2},{n: 3},{n: 4},{n: 5}];
            
            this.workTypesTwo = [
                
                {id: 1, workType: 'Homework'}
                ,{id: 2, workType: 'Quiz'}
                ,{id: 3, workType: 'Test'}
                ,{id: 4, workType:'Project'}
                ,{id: 5, workType:'Other'}
                ,{id: 6, workType:'Also'}
                
             ];
            
            this.workType= ['Homework','Quiz','Test','Project','Other'];
            
            this.workType = ko.observableArray([_this.workTypesTwo[2]]);
            
            this.n = ko.observable(_this.nums[0]);
            
            this.student= ko.observableArray([
                
                new Gradebook.Model.StudentModel("Jeffmith")
            
               ,new Gradebook.Model.StudentModel("Gandalf")
                    
            ]);
            
            this.aignment= ko.observableArray([
            
                new Gradebook.Model.WorkModel("Math",_this.workTypesTwo[1])
            
               ,new Gradebook.Model.WorkModel("Reading",_this.workTypesTwo[2])
                   
            ]);
            
            this.workMean = function(work, i) {
            
                var m = 0;
                
                var count = 0;
                
                ko.utils.arrayForEach(_this.students(), function(student){
                
                    var score;
                    
                    if (typeoftudent.scores()[i] === 'function') {
                    
                            score = parseFloat(student.scores()[i]());
                        
                    }
                    
                    if (!isNaN(score)) {
                    
                        m +=core;count += 1;
                        
                    }
                
                });
                
                if(count) {
                
                    m = m / count;return m.toFixed(2);
                    
                } else  {
                        
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
            
            this.dropLowestScore= ko.computed({
                
                    read: function() {
                        
                        this.n = _this.n().n;
                        
                        this.workType = _this.workType().workType;
                        
                        return n,workType;
                        
                    },
                
                    write: function(n,workType) {
                        
                        ko.utils.arrayForEach(_this.students(), function(student){
                        
                            var tmp = [];
                            
                            ko.utils.arrayForEach(student.scores(), function(score){
                                
                                var i =tudent.scores.indexOf(score);console.log(_this.aignments()[i].workType().workType);
                                
                                if(this.workType.indexOf(_this.aignments()[i].workType().workType) > -1){
                                    
                                    console.log(score());tmp.push(score);}
                                });
                                    
                                var tmp = tmp.sort(_this.comparator).slice(0,this.n);
                                
                                console.log(tmp.length);tudent.lowest(tmp);});
                        
                     }
                
            });
            
            this.addStudent = function () {
                
                this.students.push(new Gradebook.Model.StudentModel("Student "));
                
                this.updateRows();
                
            };
            
            this.removeStudent = function (student) {
                
                this.students.remove(student);
                
            };
            
            this.addWork = function () {
            
                var t = _this.workTypesTwo[2].workType;console.log('t:' + t);
                
                _this.aignments.push(new Gradebook.Model.WorkModel("Aignment ",t));
                
                this.updateRows();console.log(_this.aignments()[2].workType());
                
            };
            
            this.removeWork = function (workName) {
            
                this.aignments.remove(workName);
                
            };
            
            this.updateRow= function () {
            
                ko.utils.arrayForEach(_this.students(), function(student) {
                
                    while (student.scores().length < _this.aignments().length) {
                    
                            student.scores.push(ko.observable(Math.floor(Math.random() * 100) + 1));
                        
                    }
                    
                });
                
            };		
        }	
    }
 }
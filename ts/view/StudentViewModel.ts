module gradebook {	
    
    export module ViewModel {
        
        export class StudentsViewModel {            
            
            nums: Array<any> = [
              
                {n: 0}
                ,{n: 1}
                ,{n: 2}
                ,{n: 3}
                ,{n: 4}
                ,{n: 5}
                
            ];
            
            workTypes: Array<any> = [
                
                {id: 1, workType: 'Homework'}
                ,{id: 2, workType: 'Quiz'}
                ,{id: 3, workType: 'Test'}
                ,{id: 4, workType:'Project'}
                ,{id: 5, workType:'Other'}
                ,{id: 6, workType:'Also'}
                
             ];
            
            // workType = ['Homework','Quiz','Test','Project','Other'];
            
            workType: KnockoutObservable<any> = ko.observable([this.workTypes[2]]);
            
            n: KnockoutObservable<any> = ko.observable(this.nums[0]);
            
            students: KnockoutObservableArray<gradebook.model.StudentModel> = ko.observableArray([
                
                new gradebook.model.StudentModel("Jeff Smith")
            
               ,new gradebook.model.StudentModel("Gandalf")
                    
            ]);
            
            assignments: KnockoutObservableArray<gradebook.model.WorkModel> = ko.observableArray([
            
                new gradebook.model.WorkModel("Math", this.workTypes[1])
            
               ,new gradebook.model.WorkModel("Reading", this.workTypes[2])
                   
            ]);
            
            workMean = (work, i) => {
            
                var m: number = 0;
                
                var count: number = 0;
                
                ko.utils.arrayForEach(this.students(), (student) => {
                
                    var score: number;
                    
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
                    
                } else  {
                        
                    return 'N/A';
                    
                }
                
            };
            
            comparator = (a,b) => {
                
                if(a()<b()){
                    
                    return -1;
                    
                } else if(a() > b()){
                    
                    return 1;
                    
                } else {
                    
                    return 0;
                    
                }
            };
            
            dropLowestScore = ko.computed({
                
                    read: () => {
                        
                        var n = this.n().n;
                        
                        var workType = this.workType().workType;
                        
                        return n, workType;
                        
                    },
                
                    write: (n,workType) => {
                        
                        ko.utils.arrayForEach(this.students(), (student) => {
                        
                            //unsure what type 
                            var tmp = [];
                            
                            ko.utils.arrayForEach(student.scores(), (score) => {
                                
                                var i: number = student.scores.indexOf(score);
                                
                                console.log(this.assignments()[i].workType().workType);
                                
                                if(this.workType.indexOf(this.assignments()[i].workType().workType) > -1){
                                    
                                    console.log(score());tmp.push(score);
                                }
                            });
                                    
                            var tmp = tmp.sort(this.comparator).slice(0,n);
                            
                            console.log(tmp.length);
                            
                            student.lowest(tmp);});
                        
                     }
                
            });
            
            addStudent = () => {
                
                this.students.push(new gradebook.model.StudentModel("Student "));
                
                this.updateRows();
                
            };
            
            removeStudent = (student) => {
                
                this.students.remove(student);
                
            };
            
            addWork = () => {
            
                var t: KnockoutObservable<string> = this.workTypes[2].workType;
                
                console.log('t:' + t);
                
                this.assignments.push(new gradebook.model.WorkModel("Assignment ", t));
                
                this.updateRows();console.log(this.assignments()[2].workType());
                
            };
            
            removeWork = (workName) => {
            
                this.assignments.remove(workName);
                
            };
            
            updateRows = () => {
            
                ko.utils.arrayForEach(this.students(), (student) => {
                
                    while (student.scores().length < this.assignments().length) {
                    
                            student.scores.push(ko.observable(Math.floor(Math.random() * 100) + 1));
                        
                    }
                    
                });
                
            };	
            	
        }	
        
    }
    
 }
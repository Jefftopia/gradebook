module gradebook {

    export module model {

        export class StudentModel {

            fullName: KnockoutObservable<string>;  
                      
            editing: KnockoutObservable<boolean>;
                        
            scores: KnockoutObservableArray<number>;
            
            lowest: KnockoutObservableArray<number>; 
            
            
            constructor(fullName: string) {

                this.fullName = ko.observable(fullName);
                
                this.editing = ko.observable(false);
                
                this.scores = ko.observableArray<number>();
                
                this.lowest = ko.observableArray<number>();
                
                //var self: gradebook.model.StudentModel = this;            
                
            }

            edit(): void {

                this.editing(true);

            }

            mean(): any {
            
                this.
                
                ko.computed(function() {

                    var sum: number = 0;

                    var count: number = 0;
    
                    var m: number = 0;
    
                    for (m; m < self.scores().length; m++) {
    
                        if (this.lowest.indexOf(self.scores()[m]) < 0) {
    
                            sum += self.scores()[m];
    
                            count++;
    
                        }
    
                    }
    
                    if (count > 0) {
    
                        sum = sum / count;
    
                        return sum.toFixed(2);
    
                    } else {
    
                        return 'N/A';
    
                    }
    
                })
            }

        }

    }

}
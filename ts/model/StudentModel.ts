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
                                
            }

            edit(): void {

                this.editing(true);

            }

            mean: any =  ko.computed(function() {

                    var sum: number = 0;

                    var count: number = 0;
    
                    var m: number = 0;
    
                    for (m; m < this.scores().length; m++) {
    
                        if (this.this.indexOf(this.scores()[m]) < 0) {
    
                            sum += this.scores()[m];
    
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

        }

    }
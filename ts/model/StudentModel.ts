module Gradebook {

	export module Model {

		export class StudentModel {
            
            //fullName: KnockoutObservable<string>;
            
			constructor(public fullName: KnockoutObservable<string>) {

                this.fullName = fullName;        
        
			}

            
            editing: KnockoutObservable<boolean> = ko.observable(false);
            
            edit = () => { this.editing(true); };
                    
            scores: KnockoutObservableArray<number> = ko.observableArray<number>();
            
            lowest: KnockoutObservableArray<number> = ko.observableArray<number>();
            
            mean = ko.computed( () => {
                    
                    var sum: number = 0;
                    
                    var count: number = 0;
                    
                    var m: number = 0;
                
                    for(m;m < this.scores().length;m++) {
                        
                        //var score: KnockoutObservableArrayStatic = this.scores()[m];
                        
                        if (this.lowest.indexOf(this.scores()[m])<0) {
                            
                            // sum += parseFloat(score());
                            
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
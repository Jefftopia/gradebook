module Gradebook {

	export module Model {

		export class StudentModel {
            
			constructor(public fullName: string) {
                
				this.fullName = ko.observable(fullName);
                
			}

            var _this = this;
                        
            this.editing = ko.observable(false);
            
            this.edit = function() { _this.editing(true); };
                    
            this.scores = ko.observableArray();
            
            this.lowest = ko.observableArray();
            
            this.mean = ko.computed(function() {
                    
                    var sum  = 0;
                    
                    var count = 0;
                    
                    var m = 0;
                
                    for(m;m < _this.scores().length;m++) {
                        
                        var score = _this.scores()[m];
                        
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
        
	}
    
}
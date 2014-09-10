module Gradebook {

	export module Model {

		export class WorkModel {
            
			constructor(public workName: string, public workType: string) {
                
				this.workName = ko.observable(workName);
                
                this.workType = ko.observable(workType);
                
			}
            
                this.dropped = ko.observable(false);
                                
                this.editing = ko.observable(false);
                
                this.edit = function() { _this.editing(!_this.editing()); };            
            
		}
        
	}
    
}
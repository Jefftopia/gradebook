module Gradebook {

	export module Model {

		export class WorkModel {
            
			constructor(public workName: KnockoutObservable<string>, public workType: KnockoutObservable<string>) {
                
				this.workName = workName;
                
                this.workType = workType;
                
			}
            
                dropped = ko.observable(false);
                                
                editing = ko.observable(false);
                
                edit = () => { this.editing(!this.editing()); };            
            
		}
        
	}
    
}
module Gradebook {

	export module Model {

		export class WorkModel {
                        
			constructor(workName: string, workType: KnockoutObservable<string>) {
                
				this.workName = ko.observable(workName);
                
                this.workType = workType;
                
			}
                workName: KnockoutObservable<string>;
                
                workType: KnockoutObservable<string>;
            
                dropped = ko.observable(false);
                                
                editing = ko.observable(false);
                
                edit = () => { this.editing(!this.editing()); };            
            
		}
        
	}
    
}
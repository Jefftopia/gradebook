module Gradebook {

	export module Model {

		export class WorkModel {
			constructor(public workName: string) {
				this.workName = ko.observable(workName);
			}

	        workType = ko.observable(workType);
	        editing = ko.observable(false);
	        edit = () => { this.editing(!this.editing()); };            

		}
	}
}
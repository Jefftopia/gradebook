module Gradebook {

	export module Model {

		export class StudentModel {
			constructor(public fullName: string) {
				this.fullName = ko.observable(fullName);
			}

            editing = ko.observable(false);

            edit = () => { this.editing(true); console.log(this.editing()); };   

            scores = ko.observableArray();

            mean = (scores) => {
                var m = 0;
                var count = 0;
                ko.utils.arrayForEach(this.scores(), function (score) {
                    if (!isNaN(parseFloat(score()))) {
                        m += parseFloat(score());
                        count += 1;
                    }
                });
              if(count) {
                m = m / count;
                return m.toFixed(2);
              } else {
                return 'N/A';
              }
            };
        }
	}
}
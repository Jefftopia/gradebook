module gradebook {

    export module model {

        export class WorkModel {

            workName: KnockoutObservable<string>;

            workType: KnockoutObservable<string>;

            dropped: KnockoutObservable<boolean>;

            editing: KnockoutObservable<boolean>;

            constructor(workName: string, workType: KnockoutObservable<string>) {

                this.workName = ko.observable(workName);

                this.workType = workType;

                this.dropped = ko.observable(false);

                this.editing = ko.observable(false);

            }


            edit(): void {

                this.editing(!this.editing());

            }

        }

    }

}
module Gradebook {

    export module Model {

        export class StudentModel {


            constructor(fullName: string) {

                this.fullName = ko.observable(fullName);

            }

            fullName: KnockoutObservable<string>;

            editing: KnockoutObservable<boolean> = ko.observable(false);

            edit(): void {

                this.editing(true);

            }

            scores: KnockoutObservableArray<number> = ko.observableArray<number>();

            lowest: KnockoutObservableArray<number> = ko.observableArray<number>();

            mean = ko.computed(() => {

                var sum: number = 0;

                var count: number = 0;

                var m: number = 0;

                for (m; m < this.scores().length; m++) {

                    var score: number = this.scores()[m];

                    if (this.lowest.indexOf(score) < 0) {

                        sum += score;

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
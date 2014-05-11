module Gradebook {

    (function () {
        $(document).ready(function () {
            var gradebookApp = new Gradebook.ViewModel.StudentsViewModel;
            ko.applyBindings(gradebookApp, document.getElementById('gradebook-app'));           
        });
    })()
}
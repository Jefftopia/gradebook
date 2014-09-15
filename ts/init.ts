module gradebook {

    (function () {
        
        $(document).ready(function () {
            
            var gradebookApp = new gradebook.ViewModel.StudentsViewModel;
            
            ko.applyBindings(gradebookApp, document.getElementById('gradebook-app'));
                       
        });
        
    })()
    
}
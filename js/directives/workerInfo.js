app.directive('workerInfo', function() { 
   return {
    restrict: 'A',
    scope: { 
      worker: '=' 
    }, 
    template: "\
              <td>{{worker.id}}</td>\
              <td>{{worker.firstName}}</td>\
              <td>{{worker.lastName}}</td>\
              <td>{{worker.dateOfBirth}}</td>\
              <td>{{worker.function}}</td>\
              <td>{{worker.experience}}</td>\
              "
  }; 
});
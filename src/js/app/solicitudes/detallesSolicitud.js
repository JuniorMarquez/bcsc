'use strict';

app.controller('IndexController', ['$scope', '$http', '$filter', '$modal', 'MyService', 'filterFilter', 'datepickerConfig',function($scope, $http, $filter,$modal, MyService,filterFilter, datepickerConfig) {
$scope.date = moment();
}]);

app.controller('detallesSolicitudCtrl', ['$scope', '$http', '$filter', '$modal', 'MyService', 'filterFilter', 'datepickerConfig',function($scope, $http, $filter,$modal, MyService,filterFilter, datepickerConfig) {
    // $scope.getGrafico =function(){
    //   $scope.nombre=MyService.data.animalConsultado.nombre;
    //   $http.get('http://localhost:1337/ordeno/?idAnimal='+MyService.data.animalConsultado.id).then(function (resp) {
    //     $scope.ordenosGrafico = resp.data.results;
    //     var cant = $scope.ordenosGrafico.length;
    //     $scope.ordenosGrafico.nombre=MyService.data.animalConsultado.nombre;
    //     $scope.ordenosGrafico.cant=cant;
    //     $scope.d=[]; 
    //     $scope.suma=0;
    //     $scope.promedio=0;
    //     $scope.ordenosGrafico=$scope.ordenosGrafico.reverse();
    //     if ($scope.ordenosGrafico.length>9){
    //       var e = 10;
    //       for (var i= 0; i < 10; i++){
    //         var ind = [];
    //         ind[i,1]= $scope.ordenosGrafico[i].cantidad;
    //         $scope.suma = $scope.suma +  $scope.ordenosGrafico[i].cantidad;
    //         $scope.promedio=$scope.suma/10;
    //         ind[e,0]=e;
    //         e=e-1;
    //         $scope.d[i]=ind;
    //         $scope.d3=$scope.d;
    //       }
    //     }
    //     var reverso =$scope.d3.reverse();
    //     $scope.d3=reverso;
    //   }); 
    // };
    // $scope.getGrafico();    


    $scope.today = function() {
      $scope.fechaInicio = new Date();
    };
    // $scope.today();

    $scope.clear = function () {
      $scope.fechaFin = null;
    };

    // Disable weekend selection
    // $scope.disabled = function(date, mode) {
    //   return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    // };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };
     $scope.open2 = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened2 = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      class: 'datepicker'
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = 'MM/dd/yyyy';
    $scope.tbOptions = {
    filterText: ''};
    $scope.filter = '';
      $scope.tbOptions = {
      bDestroy: true,
      pageLength: 5,
      data: []
                                                     
    };
    $scope.filter = '';
      $scope.tbOptions2 = {
      bDestroy: true,
      pageLength: 5,
      data: []
                                                     
    };
     $scope.tbOptions3 = {
      bDestroy: true,
      pageLength: 5,
      data: []
                                                     
    };
    $scope.tbOptions4 = {
      bDestroy: true,
      pageLength: 5,
      data: []
                                                     
    };
    $scope.tbOptions5 = {
      bDestroy: true,
      pageLength: 5,
      data: []
                                                     
    };
    $scope.tbOptions6 = {
      bDestroy: true,
      pageLength: 5,
      data: []
                                                     
    };
    $scope.tbOptions7 = {
      bDestroy: true,
      pageLength: 5,
      data: []
                                                     
    };

 
   


   



}]);

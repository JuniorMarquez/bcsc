'use strict';

/* Controllers */

app
  // Flot Chart controller 
  .controller('FlotChartDemoCtrl', ['$scope', '$http','$modal','MyService','$state','$filter',function($scope,$http,$modal,MyService,$state,$filter) {
    $scope.openListadoEspecialidades = function (item) {
    // var identificador=item.id;
    // MyService.data.identificador = identificador;
      var modalInstance = $modal.open({
        templateUrl: 'modalListadoEspecialidades.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };

$scope.totalConsultores=0;
    $scope.consultores=[];
    $scope.cargaConsultores = function(){
      $http.get('http://localhost:1345/consultor/').then(function (resp) {
        $scope.consultores = resp.data.results;
        // for (var i=0;i<$scope.consultores.length;++i){
        //   if($scope.consultores[i].sexo=='Macho'){
        //     $scope.consultores.push($scope.consultores[i]);
        //   }
        // }
        $scope.totalConsultores=$scope.consultores.length;
      });
    };
  $scope.cargaConsultores();
  $scope.totalClientes=0;
    $scope.consultores=[];
    $scope.cargaClientes = function(){
      $http.get('http://localhost:1345/cliente/').then(function (resp) {
        $scope.clientes = resp.data.results;
        // for (var i=0;i<$scope.consultores.length;++i){
        //   if($scope.consultores[i].sexo=='Macho'){
        //     $scope.consultores.push($scope.consultores[i]);
        //   }
        // }
        $scope.totalClientes=$scope.clientes.length;
      });
    };
  $scope.cargaClientes();

   $scope.openEspecialidad = function (item) {

      var modalInstance = $modal.open({
        templateUrl: 'modalEspecialidad.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };




    $scope.d = [ [1,12],[2,11],[3,12],[4,8],[5,7.5],[6,7],[7,6.8],[8,7],[9,7.2],[10,7] ];

    $scope.d0_1 = [ [0,7],[1,6.5],[2,12.5],[3,7],[4,9],[5,6],[6,11],[7,6.5],[8,8],[9,7] ];

    $scope.d0_2 = [ [0,4],[1,4.5],[2,7],[3,4.5],[4,3],[5,3.5],[6,6],[7,3],[8,4],[9,3] ];

    $scope.d1_1 = [ [10, 120], [20, 70], [30, 70], [40, 60] ];

    $scope.d1_2 = [ [10, 50], [20, 60], [30, 90], [40, 35] ];

    $scope.d1_3 = [ [10, 80], [20, 40], [30, 30], [40, 20] ];

    $scope.d2 = [];

    for (var i = 0; i < 20; ++i) {
      $scope.d2.push([i, Math.sin(i)]);
    }   
if (typeof MyService.data.email==="undefined"){

  $state.go('access.signin');
}
    $scope.d3 = [ 
      { label: "iPhone5S", data: 40 }, 
      { label: "iPad Mini", data: 10 },
      { label: "iPad Mini Retina", data: 20 },
      { label: "iPhone4S", data: 12 },
      { label: "iPad Air", data: 18 }
    ];

    $scope.refreshData = function(){
      $scope.d0_1 = $scope.d0_2;
    };

    $scope.getRandomData = function() {
      var data = [],
      totalPoints = 150;
      if (data.length > 0)
        data = data.slice(1);
      while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50,
          y = prev + Math.random() * 10 - 5;
        if (y < 0) {
          y = 0;
        } else if (y > 100) {
          y = 100;
        }
        data.push(y);
      }
      // Zip the generated y values with the x values
      var res = [];
      for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
      }
      return res;
    }
 function activate() {
       $scope.filter = '';
    

    };
 
  }]);
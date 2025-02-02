'use strict';

/* Controllers */

  // bootstrap controller
  app.controller('AccordionDemoCtrl', ['$scope', function($scope) {
    $scope.oneAtATime = true;
$scope.clientes=[];
    $scope.groups = [
      {
        title: 'Accordion group header - #1',
        content: 'Dynamic group body - #1'
      },
      {
        title: 'Accordion group header - #2',
        content: 'Dynamic group body - #2'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];
// $scope.ok = function(){
    
//   };
    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
  }])
  ; 
  app.controller('AlertDemoCtrl', ['$scope', function($scope) {
    $scope.alerts = [
      { type: 'success', msg: 'Well done! You successfully read this important alert message.' },
      { type: 'info', msg: 'Heads up! This alert needs your attention, but it is not super important.' },
      { type: 'warning', msg: 'Warning! Best check yo self, you are not looking too good...' }
    ];

    $scope.addAlert = function() {
      $scope.alerts.push({type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'});
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
  }])
  ; 
  app.controller('ButtonsDemoCtrl', ['$scope', function($scope) {
    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
      left: false,
      middle: true,
      right: false
    };
  }])
  ; 
  app.controller('CarouselDemoCtrl', ['$scope', function($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      slides.push({
        image: 'img/c' + slides.length + '.jpg'
        // text: ['Carousel text #0','Carousel text #1','Carousel text #2','Carousel text #3'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }
  }])
  ; 
  app.controller('DropdownDemoCtrl', ['$scope', function($scope) {
    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      //console.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };
  }])
  ;

  app.controller('ModalInstanceCtrl', ['$scope', '$http', '$modalInstance', 'items', 'MyService', '$filter','$modal', function($scope, $http, $modalInstance, items, MyService,$filter,$modal) {
    // $scope.item={};
    // $scope.items = items;
    // $scope.selected = {
    //   item: $scope.items[0]
    // };

$scope.item={};
$scope.filter={};
$scope.filter = '';
      $scope.tbOptionsListadoRazas = {
      bDestroy: true,
      pageLength: 5,
      data: []                                             
    };
 $scope.filter = '';
      $scope.tbOptions3 = {
      bDestroy: true,
      pageLength: 5,
      data: []                                              
    };
    
    $scope.filter = '';
      $scope.tbOptions4 = {
      bDestroy: true,
      pageLength: 5,
      data: []
                                                     
    };
// $scope.calculoExistenciaingredientes2=function(item){
//     var entradasingredientes=0;
//     var salidasingredientes=0;
//     var existenciaingredientes=0;
//     var idingrediente=item;
    
//     $http.get('http://localhost:1345/entradaingrediente/?idingrediente='+idingrediente).then(function (resp) {
//       $scope.entradasingredientes=resp.data.results;
//       for (var i=0;i<$scope.entradasingredientes.length;i++){
//         entradasingredientes=entradasingredientes+$scope.entradasingredientes[i].cantidad;
//         }
//         $http.get('http://localhost:1345/salidaingrediente/?idingrediente='+idingrediente).then(function (resp) {
//           $scope.salidasingredientes = resp.data.results;
//           for (var i=0;i<$scope.salidasingredientes.length;i++){
//             salidasingredientes=salidasingredientes+$scope.salidasingredientes[i].cantidad;
//             }
//         existenciaingredientes = entradasingredientes-salidasingredientes;
//        var equivalente = existenciaingredientes/1000;
//        equivalente = " g. ( "+equivalente+" Kg.)";

//        $scope.item.equivalente = equivalente;
//         $scope.item.existenciaingredientes=existenciaingredientes; 
//       });
//     });      
//   };
// $scope.calculoExistenciaingredientes2(MyService.data.identificador);

// $scope.calculoPrecioVenta=function(){
//   $scope.item.ganancia=$scope.item.precioCosto*$scope.item.porcentajeganancia/100;
//   $scope.item.precioVenta=$scope.item.precioCosto+$scope.item.ganancia;
// };

// $http.get('http://localhost:1345/porcentajeganancia/?idEstablecimiento='+MyService.data.idEstablecimiento).then(function (resp2) {
//     $scope.porcentajes = resp2.data.results;  
// });
// $http.get('http://localhost:1345/unidadingrediente/?idEstablecimiento='+MyService.data.idEstablecimiento).then(function (resp2) {
//     $scope.unidades = resp2.data.results;  
// });



// $http.get('http://localhost:1345/departamento/?idEstablecimiento='+MyService.data.idEstablecimiento).then(function (resp2) {
//     var bandera="";
//     var bandera2="";
//     $scope.departamentos = resp2.data.results;
//     for (var i  = 0; i<$scope.departamentos.length;i++){
//         bandera = $scope.departamentos[i].createdAt;
//         bandera2=$filter('date')(new Date(bandera),'dd/MM/yyyy');
//         $scope.departamentos[i].createdAtFormateada=bandera2;
        // $scope.departamentos[i].opciones='<button class="btn btn-danger" ng-click="borrar()">Borrar</button>';
        



        // $scope.departamentos[i].opciones='<button class="btn btn-danger" title="Borrar" ng-click="borrar($index)">Borrar</button>';
 
    // }
    // $scope.borrar=function(item){
    //   alert("cancelado"+item);
    // };
    // $scope.departamentos=$scope.departamentos.reverse();
    // $scope.tbOptionsListadoRazas.data = $scope.departamentos;
    // $scope.tbOptionsListadoRazas.aoColumns=[
    //   { mData: 'createdAtFormateada' },
    //   { mData: 'nombre' },
    //   // { mData: 'opciones'} , 
    //   // {
    //   //       title: 'Actions',
    //   //       data: null,
    //   //       className: 'center',
    //   //       defaultContent: '<button type="button" ng-click="edit()" class="btn btn-warning"><i class="fa fa-edit"></i></button><button type="button" ng-click="Delete()" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>'

    //   //       }                        
    // ];
// });


// $http.get('http://localhost:1345/alimento/?idUsuario='+MyService.data.idUsuario).then(function (resp2) {
//     var bandera="";
//     var bandera2="";
//     $scope.alimentos = resp2.data.results;
//     for (var i  = 0; i<$scope.alimentos.length;i++){
//         bandera = $scope.alimentos[i].createdAt;
//         bandera2=$filter('date')(new Date(bandera),'dd/MM/yyyy');
//         $scope.alimentos[i].createdAtFormateada=bandera2;
//             }
  
//     $scope.alimentos=$scope.alimentos.reverse();
   
// });
// $http.get('http://localhost:1345/tipoDepartamento/?idUsuario='+MyService.data.idUsuario).then(function (resp2) {
//     var bandera="";
//     var bandera2="";
//     $scope.tiposDepartamentos = resp2.data.results;
//     for (var i  = 0; i<$scope.tiposDepartamentos.length;i++){
//         bandera = $scope.tiposDepartamentos[i].createdAt;
//         bandera2=$filter('date')(new Date(bandera),'dd/MM/yyyy');
//         $scope.tiposDepartamentos[i].createdAtFormateada=bandera2;
//             }
  
//     $scope.tiposDepartamentos=$scope.tiposDepartamentos.reverse();
   
// });
// $http.get('http://localhost:1345/tipoAlimento/?idUsuario='+MyService.data.idUsuario).then(function (resp2) {
//     var bandera="";
//     var bandera2="";
//     $scope.tiposAlimentos = resp2.data.results;
//     for (var i  = 0; i<$scope.tiposAlimentos.length;i++){
//         bandera = $scope.tiposAlimentos[i].createdAt;
//         bandera2=$filter('date')(new Date(bandera),'dd/MM/yyyy');
//         $scope.tiposAlimentos[i].createdAtFormateada=bandera2;
//             }
  
//     $scope.tiposAlimentos=$scope.tiposAlimentos.reverse();
   
// });
$http.get('http://localhost:1345/especialidad/').then(function (resp2) {
    var bandera="";
    var bandera2="";
    $scope.categorias = resp2.data.results;
    for (var i  = 0; i<$scope.categorias.length;i++){
        bandera = $scope.categorias[i].createdAt;
        bandera2=$filter('date')(new Date(bandera),'dd/MM/yyyy');
        $scope.categorias[i].createdAtFormateada=bandera2;
            }
    $scope.categorias=$scope.categorias.reverse();
   
});

$http.get('http://localhost:1345/especialidad/').then(function (resp2) {
    var bandera="";
    var bandera2="";
    $scope.especialidades = resp2.data.results;
    for (var i  = 0; i<$scope.especialidades.length;i++){
        bandera = $scope.especialidades[i].createdAt;
        bandera2=$filter('date')(new Date(bandera),'dd/MM/yyyy');
        $scope.especialidades[i].createdAtFormateada=bandera2;
            }
  
    $scope.especialidades=$scope.especialidades.reverse();
   
});

// $http.get('http://localhost:1345/departamento/?idEstablecimiento='+MyService.data.idEstablecimiento).then(function (resp2) {
//     var bandera="";
//     var bandera2="";
//     $scope.departamentos = resp2.data.results;
//     for (var i  = 0; i<$scope.departamentos.length;i++){
//         bandera = $scope.departamentos[i].createdAt;
//         bandera2=$filter('date')(new Date(bandera),'dd/MM/yyyy');
//         $scope.departamentos[i].createdAtFormateada=bandera2;
//             }
  
//     $scope.departamentos=$scope.departamentos.reverse();
   
// });



    
$scope.borrar=function(item){
   var idRaza=item.id;
      $http.delete('http://localhost:1345/raza/'+idRaza , item)
      $modalInstance.dismiss('cancel');
};
$scope.borrarAlimento=function(item){
   var idAlimento=item.id;
      $http.delete('http://localhost:1345/alimento/'+idAlimento , item)
      $modalInstance.dismiss('cancel');
};
$scope.borrarEspecialidad=function(item){
   var idEspecialidad=item.id;
      $http.delete('http://localhost:1345/especialidad/'+idEspecialidad , item)
      $modalInstance.dismiss('cancel');
};
$scope.borrarDepartamento=function(item){
   var idDepartamento=item.id;
      $http.delete('http://localhost:1345/departamento/'+idDepartamento , item)
      $modalInstance.dismiss('cancel');
};
$scope.borrarTipoDepartamento=function(item){
   var idTipoDepartamento=item.id;
      $http.delete('http://localhost:1345/tipoDepartamento/'+idTipoDepartamento , item)
      $modalInstance.dismiss('cancel');
};
$scope.borrarTipoAlimento=function(item){
   var idTipoAlimento=item.id;
      $http.delete('http://localhost:1345/tipoAlimento/'+idTipoAlimento , item)
      $modalInstance.dismiss('cancel');
};
$scope.borrarTipoMedicamento=function(item){
   var idTipoMedicamento=item.id;
      $http.delete('http://localhost:1345/tipoMedicamento/'+idTipoMedicamento , item)
      $modalInstance.dismiss('cancel');
};
 $scope.filterOptions = {
        filterText: "",
        useExternalFilter: true
    }; 

    $scope.totalServerItems = 0;
    $scope.pagingOptions = {
        pageSizes: [250, 500, 1000],
        pageSize: 250,
        currentPage: 1
    }; 
    $scope.setPagingData = function(data, page, pageSize){  
        var pagedData = data.splice((page - 1) * pageSize, page * pageSize);
        $scope.myData = pagedData;
        $scope.totalServerItems = data.length;
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.getPagedDataAsync = function (pageSize, page, searchText) {
        setTimeout(function () {
           var data ;
          $http.get('http://localhost:1345/cliente/').then(function (resp2) {
            $scope.clientes = resp2.data.results;
          });
          data = $scope.clientes;
$scope.setPagingData(data,page,pageSize);


        }, 100);
    };

    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

    $scope.$watch('pagingOptions', function (newVal, oldVal) {
        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);
    $scope.$watch('filterOptions', function (newVal, oldVal) {
        if (newVal !== oldVal) {
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);
 
    $scope.gridOptions = {
        data: 'myData',
        enablePaging: true,
        showFooter: true,
        totalServerItems: 'totalServerItems',
        pagingOptions: $scope.pagingOptions,
        filterOptions: $scope.filterOptions
    };
  


    $scope.mensajeBorrado="Al borrar este articulo, se perderá de manera definitiva toda la información referente al mismo, está seguro de querer borrarlo?";
    $scope.mensajeBorradoConsultor="Al borrar este consultor, se perderá de manera definitiva toda la información referente al mismo, está seguro de querer borrarlo?";
   
    //  $http.get('http://localhost:1345/raza/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
    //   $scope.razas = resp.data.results;
    // });
    $scope.okSalto = function (item) {
      var idArticulo=MyService.data.identificador;
      item.idArticulo=idArticulo;
      item.idUsuario=MyService.data.idUsuario;
      item.hembra=MyService.data.hembra;
      item.numero=MyService.data.numero;
      $http.post('http://localhost:1345/salto/' ,item);  
      $modalInstance.close();
      // var pas = item._id;
      // $scope.ordenosFiltrados = $scope.ordenos.filter(function (ordeno) {
      //   return (ordeno.idArticulo == pas );
      // });
    };
    $scope.okNuevoCliente = function (item) {

      $http.post('http://localhost:1345/cliente/' ,item);  
      $modalInstance.close();
      // var pas = item._id;
      // $scope.ordenosFiltrados = $scope.ordenos.filter(function (ordeno) {
      //   return (ordeno.idArticulo == pas );
      // });
    };
    $scope.okNuevaSolicitud = function (item) {
      item.estado="Pendiente";
      $http.post('http://localhost:1345/solicitud/' ,item);  
      $modalInstance.close();

      // var pas = item._id;
      // $scope.ordenosFiltrados = $scope.ordenos.filter(function (ordeno) {
      //   return (ordeno.idArticulo == pas );
      // });
    };
$scope.calculoExistenciaingredientes=function(idingrediente){
    var entradasingredientes=0;
    var salidasingredientes=0;
    var existenciaingredientes=0;
    
    $http.get('http://localhost:1345/entradaingrediente/?idingrediente='+idingrediente).then(function (resp) {
      $scope.entradasingredientes=resp.data.results;
      for (var i=0;i<$scope.entradasingredientes.length;i++){
        entradasingredientes=entradasingredientes+$scope.entradasingredientes[i].cantidad;
        }
        $http.get('http://localhost:1345/salidaingrediente/?idingrediente='+idingrediente).then(function (resp) {
          $scope.salidasingredientes = resp.data.results;
          for (var i=0;i<$scope.salidasingredientes.length;i++){
            salidasingredientes=salidasingredientes+$scope.salidasingredientes[i].cantidad;
            }
        existenciaingredientes = entradasingredientes-salidasingredientes;
       var equivalente = existenciaingredientes/1000;
       equivalente = " g. ( "+equivalente+" Kg.)";

       $scope.item.equivalente = equivalente;
        $scope.item.existenciaingredientes=existenciaingredientes; 
      });
    }); 
    $scope.validador($scope.item);      
  };

  $scope.validador=function(item){
  var validador=item.stockMinimo*1000;
  $scope.alerts=null;
    if(item.existenciaingredientes<validador){
      $scope.alerts = [
      { type: 'danger', msg: 'La disponibilidad de este ingrediente se encuentra por debajo del stock minimo definido' }        ];
    };
  };
     $scope.calculoExistencia=function(idArticulo){
    var entradas=0;
    var salidas=0;
    var existencia=0;
    
    $http.get('http://localhost:1345/entrada/?idArticulo='+idArticulo).then(function (resp) {
      $scope.entradas=resp.data.results;
      for (var i=0;i<$scope.entradas.length;i++){
        entradas=entradas+$scope.entradas[i].cantidad;
        }
        $http.get('http://localhost:1345/salida/?idArticulo='+idArticulo).then(function (resp) {
          $scope.salidas = resp.data.results;
          for (var i=0;i<$scope.salidas.length;i++){
            salidas=salidas+$scope.salidas[i].cantidad;
            }
        existencia = entradas-salidas;   
        $scope.item.existencia=existencia; 
      });
    });    
  };
    $scope.okEntrada = function (item) {
      var idArticulo=MyService.data.identificador;
      item.idArticulo=idArticulo;
      item.idUsuario=MyService.data.idUsuario;
       item.idEstablecimiento=MyService.data.idEstablecimiento;
      $http.post('http://localhost:1345/entrada/' ,item);  
      $modalInstance.close();
      $scope.calculoExistencia(idArticulo);
      // var pas = item._id;
      // $scope.ordenosFiltrados = $scope.ordenos.filter(function (ordeno) {
      //   return (ordeno.idArticulo == pas );
      // });
    };
 $scope.okEntradaingrediente = function (item) {
      var idingrediente=MyService.data.identificador;
      item.idingrediente=idingrediente;

      var cantidad = parseInt(item.cantidadIngreso)*parseInt(item.unidad)
      item.cantidad=cantidad;
      item.idUsuario=MyService.data.idUsuario;

       item.idEstablecimiento=MyService.data.idEstablecimiento;
      $http.post('http://localhost:1345/entradaingrediente/' ,item);  
      $modalInstance.close();
      $scope.calculoExistenciaingredientes(idingrediente);
      // var pas = item._id;
      // $scope.ordenosFiltrados = $scope.ordenos.filter(function (ordeno) {
      //   return (ordeno.idingrediente == pas );
      // });
    };


      $scope.sexado =function (item){
    if (item.sexo=='Hembra'){item.avatar='img/cow.png';

    } 
    if (item.sexo=='Macho'){item.avatar='img/bull.png';
      
    }

  }
   $scope.okPeso = function (item) {

 // var item = {
 //      avatar:'img/cow.png',
 //      sexo:"Hembra",
 //      prenez:false,
 //      mensajeNuevo:"Presione \"Editar\" para ingresar datos",
 //      fechaNacimiento:"Por ingresar",
 //      idUsuario: MyService.data.idUsuario
 //    };



       var idArticulo=MyService.data.identificador;
      item.idArticulo=idArticulo;
      item.idUsuario=MyService.data.idUsuario;
      $http.post('http://localhost:1345/peso/' ,item);  
     
      $modalInstance.close();
      // var pas = item._id;
      // $scope.ordenosFiltrados = $scope.ordenos.filter(function (ordeno) {
      //   return (ordeno.idArticulo == pas );
      // });
    };
 $scope.okParto = function (item) {

 // var item = {
 //      avatar:'img/cow.png',
 //      sexo:"Hembra",
 //      prenez:false,
 //      mensajeNuevo:"Presione \"Editar\" para ingresar datos",
 //      fechaNacimiento:"Por ingresar",
 //      idUsuario: MyService.data.idUsuario
 //    };



       var idArticulo=MyService.data.identificador;
      item.idArticulo=idArticulo;
      item.idUsuario=MyService.data.idUsuario;
      $http.post('http://localhost:1345/parto/' ,item);  
     $scope.nuevoArticulo={};
     $scope.nuevoArticulo.barcode=item.barcode;
      $scope.nuevoArticulo.nombre=item.nombre;
       $scope.nuevoArticulo.fechaNacimiento= new Date();
       $scope.nuevoArticulo.raza=item.raza;
        $scope.nuevoArticulo.categoria='Becerros (as)';
        $scope.nuevoArticulo.idUsuario=MyService.data.idUsuario;
        $scope.nuevoArticulo.sexo=item.sexo;
        $scope.nuevoArticulo.avatar=item.avatar;
       $http.post('http://localhost:1345/articulo/' ,$scope.nuevoArticulo);
      $modalInstance.close();
      // var pas = item._id;
      // $scope.ordenosFiltrados = $scope.ordenos.filter(function (ordeno) {
      //   return (ordeno.idArticulo == pas );
      // });
    };


    $scope.okSalida = function (item) {
      var idArticulo=MyService.data.identificador;
      item.idArticulo=idArticulo;
      item.idUsuario=MyService.data.idUsuario;
      item.idEntrada=MyService.data.idEntrada;
      $http.post('http://localhost:1345/salida/' ,item);  
      $modalInstance.close();
      $scope.calculoExistenciaingredientes(idArticulo);
      // var pas = item._id;
      // $scope.ordenosFiltrados = $scope.ordenos.filter(function (ordeno) {
      //   return (ordeno.idArticulo == pas );
      // });
    };
     $scope.okSalidaingrediente = function (item) {
      var idingrediente=MyService.data.identificador;
     
      item.idingrediente=idingrediente;
       item.idEstablecimiento=MyService.data.idEstablecimiento;
      item.idUsuario=MyService.data.idUsuario;
        var cantidad = parseInt(item.cantidadSalida)*parseInt(item.unidad);
      item.cantidadSalida=cantidadSalida;
      item.cantidad=cantidad;
      item.idEntradaingrediente=MyService.data.idEntradaingrediente;
      $http.post('http://localhost:1345/salidaingrediente/' ,item);  
      $modalInstance.close();
      $scope.calculoExistenciaingredientes(idingrediente);
      // var pas = item._id;
      // $scope.ordenosFiltrados = $scope.ordenos.filter(function (ordeno) {
      //   return (ordeno.idArticulo == pas );
      // });
    };
    

// ##########################################################################
// ##########################################################################
// ##########################################################################

// Esta funcion es la que se ejecuta al aceptar (ok) en el modal nuevo departamento
// invocado desde el dashboard 

// ##########################################################################
// ##########################################################################
// ##########################################################################
$scope.okEspecialidad = function (item) {

    // $scope.items = items;
    // $scope.selected = {
    //   item: $scope.items[0]
    // };
      // var idArticulo=MyService.data.identificador;
      // item.idArticulo=idArticulo;
       item.idUsuario=MyService.data.idUsuario;
       // item.idEstablecimiento=MyService.data.idEstablecimiento;
      $http.post('http://localhost:1345/especialidad/' ,item);       
      $modalInstance.close();
    //   var pas = item._id;
    //   $scope.departamentosFiltrados = $scope.departamentos.filter(function (departamento) {  
    //   return (departamento.idArticulo == pas );
    // });


    };
    $scope.okAlimento = function (item) {

    // $scope.items = items;
    // $scope.selected = {
    //   item: $scope.items[0]
    // };
      // var idArticulo=MyService.data.identificador;
      // item.idArticulo=idArticulo;
       item.idUsuario=MyService.data.idUsuario;
      $http.post('http://localhost:1345/alimento/' ,item);       
      $modalInstance.close();
    //   var pas = item._id;
    //   $scope.departamentosFiltrados = $scope.departamentos.filter(function (departamento) {  
    //   return (departamento.idArticulo == pas );
    // });


    };
     $scope.okRaza = function (item) {


       item.idUsuario=MyService.data.idUsuario;
      $http.post('http://localhost:1345/raza/' ,item);       
      $modalInstance.close();
   

    };

    
    $scope.okSumAlimento = function (item) {

    // $scope.items = items;
    // $scope.selected = {
    //   item: $scope.items[0]
    // };
      var idArticulo=MyService.data.identificador;
       item.idArticulo=idArticulo;
       item.idUsuario=MyService.data.idUsuario;
      $http.post('http://localhost:1345/sumAlimento/' ,item);       
      $modalInstance.close();
    //   var pas = item._id;
    //   $scope.departamentosFiltrados = $scope.departamentos.filter(function (departamento) {  
    //   return (departamento.idArticulo == pas );
    // });
    };
    $scope.okSumMedicamento = function (item) {

    // $scope.items = items;
    // $scope.selected = {
    //   item: $scope.items[0]
    // };
      var idArticulo=MyService.data.identificador;
       item.idArticulo=idArticulo;
       item.idUsuario=MyService.data.idUsuario;
      $http.post('http://localhost:1345/sumMedicamento/' ,item);       
      $modalInstance.close();
    //   var pas = item._id;
    //   $scope.departamentosFiltrados = $scope.departamentos.filter(function (departamento) {  
    //   return (departamento.idArticulo == pas );
    // });
    };
 $scope.okSumDepartamento = function (item) {

    // $scope.items = items;
    // $scope.selected = {
    //   item: $scope.items[0]
    // };
      var idArticulo=MyService.data.identificador;
       item.idArticulo=idArticulo;
       item.idUsuario=MyService.data.idUsuario;
      $http.post('http://localhost:1345/sumDepartamento/' ,item);       
      $modalInstance.close();
    //   var pas = item._id;
    //   $scope.departamentosFiltrados = $scope.departamentos.filter(function (departamento) {  
    //   return (departamento.idArticulo == pas );
    // });


    };
// ##########################################################################
// ##########################################################################
// ##########################################################################

// FIN

// ##########################################################################
// ##########################################################################
// ##########################################################################
    $scope.okConfirm = function (item) { 
      var idArticulo=MyService.data.identificador;
      $http.delete('http://localhost:1345/articulo/'+idArticulo , item)
      // $scope.items.splice($scope.items.indexOf(item), 1);
      $scope.items = null;
      $scope.item = null;
      $scope.articulos = null;  
      $modalInstance.close();
    };
    $scope.okConfirmConsultor = function (item) { 
      var idConsultor=MyService.data.identificador;
      $http.delete('http://localhost:1345/consultor/'+idConsultor , item)
      // $scope.items.splice($scope.items.indexOf(item), 1);
      $scope.items = null;
      $scope.item = null;
      $scope.ingredientes = null;  
      $modalInstance.close();
    };

    $scope.okConfirm2 = function (item) { 
     var idEspecialidad=MyService.data.identificador;
    $http.delete('http://localhost:1345/especialidad/'+idEspecialidad, item)
    // $scope.groups.splice($scope.groups.indexOf(item), 1);
 $scope.item = null;
 $scope.items = null;
      $modalInstance.close();
    };


    $scope.ok = function (item) {
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }])
  ; 
  app.controller('ModalDemoCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
    $scope.items = ['item1', 'item2', 'item3'];

// $scope.openDepartamento = function () {
    
//       var modalInstance = $modal.open({
//         templateUrl: 'modalDepartamento.html',
//         controller: 'ModalInstanceCtrl',
//         size: 'sm',
//         resolve: {
//           items: function () {
//             return $scope.items;
//           }
//         }
//       });
//     modalInstance.result.then(function (selectedItem) {
//       $scope.selected = selectedItem;
//     }, function () {
//       $log.info('Modal dismissed at: ' + new Date());
//     });
//   };

    $scope.open = function (item) {
      var identificador =item.id;
      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
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
  }])
  ; 
  app.controller('PaginationDemoCtrl', ['$scope', '$log', function($scope, $log) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.info('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
  }])
  ; 
  app.controller('PopoverDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicPopover = 'Hello, World!';
    $scope.dynamicPopoverTitle = 'Title';
  }])
  ; 
  app.controller('ProgressDemoCtrl', ['$scope', function($scope) {
    $scope.max = 200;

    $scope.random = function() {
      var value = Math.floor((Math.random() * 100) + 1);
      var type;

      if (value < 25) {
        type = 'success';
      } else if (value < 50) {
        type = 'info';
      } else if (value < 75) {
        type = 'warning';
      } else {
        type = 'danger';
      }

      $scope.showWarning = (type === 'danger' || type === 'warning');

      $scope.dynamic = value;
      $scope.type = type;
    };
    $scope.random();

    $scope.randomStacked = function() {
      $scope.stacked = [];
      var types = ['success', 'info', 'warning', 'danger'];

      for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
          var index = Math.floor((Math.random() * 4));
          $scope.stacked.push({
            value: Math.floor((Math.random() * 30) + 1),
            type: types[index]
          });
      }
    };
    $scope.randomStacked();
  }])
  ; 
  app.controller('TabsDemoCtrl', ['$scope', function($scope) {
    $scope.tabs = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];
  }])
  ; 
  app.controller('RatingDemoCtrl', ['$scope', function($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };
  }])
  ; 
  app.controller('TooltipDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicTooltip = 'Hello, World!';
    $scope.dynamicTooltipText = 'dynamic';
    $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
  }])
  ; 
  app.controller('TypeaheadDemoCtrl', ['$scope', '$http','MyService','$state', '$filter', 'filterFilter',function($scope, $http, MyService, $state,$filter,filterFilter) {
    $scope.selected = undefined;
    // $http.get('http://localhost:1345/articulo/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
    //   $scope.items2 = resp.data.results;
    // });


    $scope.items = null;
 
    $scope.item=null;
    $scope.selectItem2 = function(item){ 

// $state.go('app.dashboard-v1');
    MyService.data.luz = 'on';
    
    $http.get('http://localhost:1345/articulo/?idUsuario='+MyService.data.idUsuario).then(function (resp) {
      $scope.items2 = resp.data.results;
    });
  
    $scope.group = item.categoria;
    // $scope.group.selected = true;
    $scope.filter = item.categoria;

      // alert ("dato: " +item.sexo);
      var identificador =item.id;
      var numero =item.barcode;
      var nombre =item.nombre;
      MyService.data.hembra = nombre;
      MyService.data.numero = numero;
      MyService.data.identificador = identificador;
      MyService.data.articulo = item;
   
 $scope.state = $state;
 // alert("estamos en "+$scope.state);
        $state.go('apps.articulo');
   $scope.sap=MyService.data.sap;
 
      };

   $scope.getLocation = function(val) {
      return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: val,
          sensor: false
        }
      }).then(function(res){
        var addresses = [];
        angular.forEach(res.data.results, function(item){
          addresses.push(item.formatted_address);
        });
        return addresses;
      });
    };
  }])
  ; 
  app.controller('DatepickerDemoCtrl', ['$scope', function($scope) {
    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      class: 'datepicker'
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
  }])
  ; 
  app.controller('TimepickerDemoCtrl', ['$scope', function($scope) {
    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.update = function() {
      var d = new Date();
      d.setHours( 14 );
      d.setMinutes( 0 );
      $scope.mytime = d;
    };

    $scope.changed = function () {
      //console.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function() {
      $scope.mytime = null;
    };
  }]);
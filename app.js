angular
  .module('miApp', [])
  .controller('miCtrl', ['$scope', aparte])
  function aparte($scope){
    var scope = this;
    scope.datos = {};
    scope.enviar = function(){
      alert(scope.datos.nombre)
    }
  }

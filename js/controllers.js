angular.module('starter.controllers', [])

.controller('perfilController', function($scope) {

  $scope.usuario = {logado:false}
  $scope.clicar = function(){
    $scope.usuario.logado = !$scope.usuario.logado;
  }
})

.controller('ChatsCtrl', function($scope, Chats) {


  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
$scope.mains = [
  {
    name: 'Spicy Chicken Tacos',
    description: '(2) Spicy chicken, lettuce, cojita cheese, and sour cream on yellow corn tortillas',
    price: 8.95
  },
  {
    name: 'Beau Bagel',
    description: 'Cream cheese, smoked salmon, capers, and dill, on an everything bagel',
    price: 7.95
  },
  {
    name: '420 Cereal Bowl',
    description: '60oz cereal bowl filled with your choice of 5 different cereal types',
    price: 7.50
  }
];
  $scope.extras = [
    {
      name: 'Dirty Donut',
      description: 'Truffles, fudge, and blackberry chocolate piled on a handmade donut',
      price: 3.50
    },
    {
    name: 'Proud Papa',
    description: 'Giant cripsy chicken nugget piled with hoison sauce, green onions, and seasonings',
      price: 5.95
    },
    {
      name: 'Pre-roll To Go',
      description: '1 gram pre-rolled joint filled with Tangie or Hawaiian Snow sativa\'s',
      price: 15
    }
  ];
}]);

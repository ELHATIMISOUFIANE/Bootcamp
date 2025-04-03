const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
  ];
  
  // 1. Utiliser map() pour créer un tableau avec messages de bienvenue
  const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
  console.log(welcomeStudents);
  
  // 2. Utiliser filter() pour créer un tableau avec seulement les Full Stack Residents
  const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
  console.log(fullStackResidents);
  
  // 3. Bonus: Chaîner filter() et map() pour obtenir les noms de famille des Full Stack Residents
  const fullStackLastNames = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName);
  console.log(fullStackLastNames);
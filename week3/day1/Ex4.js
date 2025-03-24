const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
      sarah: [3, 990],
      dan: [4, 1000],
      david: [1, 500],
    },
  };
  
  // 1. Nombre d'étages
  console.log(building.numberOfFloors); // 4
  
  // 2. Appartements aux étages 1 et 3
  console.log(
    building.numberOfAptByFloor.firstFloor + 
    building.numberOfAptByFloor.thirdFloor
  ); // 12
  
  // 3. Deuxième locataire et ses chambres
  const secondTenant = building.nameOfTenants[1]; // "Dan"
  console.log(`${secondTenant}: ${building.numberOfRoomsAndRent.dan[0]} chambres`);
  
  // 4. Ajustement du loyer de Dan
  const totalRent = building.numberOfRoomsAndRent.sarah[1] + 
                    building.numberOfRoomsAndRent.david[1];
  if (totalRent > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
  }
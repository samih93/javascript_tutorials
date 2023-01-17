let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };

  let newmap =new  Map([["username",myInfo.username],["role",myInfo.role],["country",myInfo.country]]);
  console.log(newmap);
  console.log(newmap.size);
  console.log(newmap.has("role"));
  
  // Needed Output
  //Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
  //3
//   true
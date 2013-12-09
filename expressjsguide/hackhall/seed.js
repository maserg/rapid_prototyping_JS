db.dropDatabase();
var seedUser ={
  firstName:'Azat',
  lastName:"Mardanov", 
  displayName:"Azat Mardanov",
  password:'1',
  email:'1@1.com',
  role:'admin',
  approved: true, 
  admin: true
};
db.users.save(seedUser);
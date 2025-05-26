const ItemListing = () => {
  const users = [
    { id: 1, name: "John", age: 12, gender: "M", role: "admin" },
    { id: 2, name: "Devid", age: 9, gender: "M", role: "cashier" },
    { id: 3, name: "Kimmy", age: 42, gender: "F", role: "student" },
    { id: 4, name: "Pheadkey", age: 32, gender: "M", role: "user" },
    { id: 5, name: "Jom Pa", age: 6, gender: "F", role: "user" },
  ];

  // map, filter, forEach, reduce
  // return only true
  const userAboveTen = users.filter((user) => user.age > 10);
  const userMaleOnly = users.filter((user) => user.gender === "M");

  return (
    <>
      <h5>User Above 10 Years Old</h5>
      {userAboveTen.map((user) => (
        <p key={user.id}>Username: {user.name}</p>
      ))}

      <h5>Male User Only</h5>
      {userMaleOnly.map((user) => (
        <div className="flex" key={user.id}>
          <p>Username: {user.name}</p>
          <p>Gender: {user.gender}</p>
        </div>
      ))}
    </>
  );
};

export default ItemListing;

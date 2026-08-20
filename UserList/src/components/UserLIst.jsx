const UserLIst = () => {

const users = [
    {
        id : 1,
        name : "Louis", 
        age : 24
    },
    {
        id : 2,
        name : "Ovie",
        age : 30
    },
    {
        id : 3,
        name : "Enakarhire",
        age : 45
    }
]

  return (
    <div>
   { users.map((user) => (
        <div key={user.id}>
            <li>Name:{user.name}</li>
            <li>Age:{user.age}</li>

        </div>
    ))}
    </div>
  )
}

export default UserLIst
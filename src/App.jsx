import { useRef, useState } from "react";

function App() {
  let counter = useRef(0);
  let getApiData = async () => {
    const url = "https://dummyjson.com/users";

    let response = await fetch(url);

    response = await response.json();

    let userDetails = response.users[counter.current];

    setUserData([
      {
        name: userDetails.firstName + " " + userDetails.lastName,
        age: userDetails.age,
        gender: userDetails.gender,
        dateOfBirth: userDetails.birthDate,
        phone: userDetails.phone,
        email: userDetails.email,
      },
    ]);

    console.log(userData);
    counter.current++;
  };

  const [userData, setUserData] = useState([
    {
      name: "Aditya Rai",
      age: 24,
      gender: "Male",
      dateOfBirth: "2023-12-23",
      phone: "+918181805651",
      email: "adityarai2312@gmail.com",
    },
  ]);
  return (
    <>
      <div className=" bg-black flex flex-col items-center justify-center w-full h-screen m-auto gap-5">
        <h1 className="text-3xl text-white">Playing with APIs in React.js</h1>
        <button
          className="  border-none outline-none bg-green-400 hover:bg-green-300 cursor-pointer rounded-md p-3 active:scale-95 transition-all duration-200  "
          onClick={getApiData}
        >
          Click Here
        </button>
        <div className="bg-white w-max h-max  rounded-md flex items-center justify-center p-2 ">
          {userData.map((item) => {
            {
              return (
                <div className="flex flex-col gap-2">
                  <p className="text-2xl">
                    <b>Name:</b> {item.name}
                  </p>
                  <p className="text-2xl">
                    <b>Age:</b> {item.age}
                  </p>
                  <p className="text-2xl">
                    <b>Gender:</b> {item.gender}
                  </p>
                  <p className="text-2xl">
                    <b>DOB:</b> {item.dateOfBirth}
                  </p>
                  <p className="text-2xl">
                    <b>Phone:</b> {item.phone}
                  </p>
                  <p className="text-2xl">
                    <b>Email:</b> {item.email}
                  </p>
                </div>
              );
            }
          })}

          <p>{userData.age}</p>
          <p>{userData.email}</p>
        </div>
      </div>
    </>
  );
}

export default App;

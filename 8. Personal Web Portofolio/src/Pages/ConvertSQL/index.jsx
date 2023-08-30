import { useState } from 'react';

export const ConvertSQL = () => {
  const [inputData, setInputData] = useState({
    name: null,
    email: null,
    password: null,
    role: null,
    created_at: null,
    updated_at: null,
  });

  // Fungsi ini akan dipanggil ketika nilai input berubah
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  return (
    <div className="p-10">
      <h1 className="mb-5">Users</h1>
      <div className=" ">
        <form className="grid grid-cols-1 gap-3" action="#">
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            className="input input-bordered w-full"
            name="name"
          />
          <input
            type="email"
            onChange={handleInputChange}
            placeholder="email"
            className="input input-bordered w-full "
            name="email"
          />
          <input
            type="password"
            onChange={handleInputChange}
            placeholder="password"
            className="input input-bordered w-full "
            name="password"
          />
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="role"
            className="input input-bordered w-full "
            name="role"
          />
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="created_at"
            className="input input-bordered w-full "
            name="created_at"
          />
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="updated_at"
            name="updated_at"
            className="input input-bordered w-full "
          />
          {/* <button className="bg-white text-black p-3">Generate</button> */}
        </form>
      </div>
      <br />
      <br />
      {inputData == {} ? null : (
        <h1 className="text-center">{`insert into users (name, email, password, role, created_at, updated_at) values
        (${inputData.name == null ? 'null' : `"${inputData.name}"`}, ${
          inputData.email == null ? 'null' : `"${inputData.email}"`
        }, ${
          inputData.password == null ? 'null' : `"${inputData.password}"`
        }, ${inputData.role == null ? 'null' : `"${inputData.role}"`}, ${
          inputData.created_at == null ? 'null' : `"${inputData.created_at}"`
        }, ${
          inputData.updated_at == null ? 'null' : `"${inputData.updated_at}"`
        })`}</h1>
      )}
    </div>
  );
};

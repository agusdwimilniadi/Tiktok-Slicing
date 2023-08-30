import { useState } from 'react';

export const ConvertSQL2 = () => {
  const [inputData, setInputData] = useState({
    nisn: null,
    kip: null,
    nik: null,
    jenis_kelamin: null,
    agama: null,
    kelas: null,
    jurusan: null,
    tempat_lahir: null,
    tanggal_lahir: null,
    nohp: null,
    ukuran_baju: null,
    jalan: null,
    no_rmh: null,
    rt_rw: null,
    kodepos: null,
    kelurahan: null,
    tim_id: null,
    user_id: null,
    foto: null,
    status: null,
    isLeader: null,
    created_at: null,
    updated_at: null,
    role_id: null,
    district_id: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  return (
    <div className="p-10">
      <h1 className="mb-5">Data Siswa</h1>
      <div className=" ">
        <form className="grid grid-cols-1 gap-3" action="#">
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="NISN"
            className="input input-bordered w-full"
            name="nisn"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="KIP"
            className="input input-bordered w-full "
            name="kip"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="NIK"
            className="input input-bordered w-full "
            name="nik"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Jenis Kelamin"
            className="input input-bordered w-full "
            name="jenis_kelamin"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Agama"
            className="input input-bordered w-full "
            name="agama"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Kelas"
            className="input input-bordered w-full "
            name="kelas"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Jurusan"
            className="input input-bordered w-full "
            name="jurusan"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Tempat Lahir"
            className="input input-bordered w-full "
            name="tempat_lahir"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Tanggal Lahir"
            className="input input-bordered w-full "
            name="tanggal_lahir"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="No HP"
            className="input input-bordered w-full "
            name="nohp"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Ukuran Baju"
            className="input input-bordered w-full "
            name="ukuran_baju"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Jalan"
            className="input input-bordered w-full "
            name="jalan"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="No Rumah"
            className="input input-bordered w-full "
            name="no_rmh"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="RT/RW"
            className="input input-bordered w-full "
            name="rt_rw"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Kode Pos"
            className="input input-bordered w-full "
            name="kodepos"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Kelurahan"
            className="input input-bordered w-full "
            name="kelurahan"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Tim ID"
            className="input input-bordered w-full "
            name="tim_id"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="User ID"
            className="input input-bordered w-full "
            name="user_id"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Foto"
            className="input input-bordered w-full "
            name="foto"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Status"
            className="input input-bordered w-full "
            name="status"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Is Leader"
            className="input input-bordered w-full "
            name="isLeader"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Created At"
            className="input input-bordered w-full "
            name="created_at"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Updated At"
            className="input input-bordered w-full "
            name="updated_at"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Role ID"
            className="input input-bordered w-full "
            name="role_id"
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="District ID"
            className="input input-bordered w-full "
            name="district_id"
          />
        </form>
      </div>
      <br />
      <br />
      {Object.keys(inputData).length === 0 ? null : (
        <h1 className="text-center">{`insert into nama_tabel (${Object.keys(
          inputData
        ).join(', ')}) values
        (${Object.keys(inputData)
          .map((key) =>
            inputData[key] == null ? 'null' : `"${inputData[key]}"`
          )
          .join(', ')})`}</h1>
      )}
    </div>
  );
};

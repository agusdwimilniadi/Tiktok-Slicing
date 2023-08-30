import { useEffect, useState } from 'react';
import { DATA_SUMMARY } from '../../utils/constant';
import { CardSummary } from '../atoms/CardSummary';

const dataJson = [
  {
    id: 1,
    nama: 'Kopi Torabika',
    kategori: 'minuman',
    deskirpsi: 'Kopi torabika ini sangatlah manis seperti madu',
    harga: 50000,
    terjual: 4,
  },
  {
    id: 2,
    nama: 'Kopi Robusta',
    kategori: 'minuman',
    deskirpsi: 'Kopi robusta ini sangatlah pahit seperti kehidupan',
    harga: 40000,
    terjual: 6,
  },
  {
    id: 3,
    nama: 'Kopi Toraja',
    kategori: 'minuman',
    deskirpsi: 'Kopi toraja ini berasal dari daerah toraja',
    harga: 65000,
    terjual: 2,
  },
];
export const Summary = () => {
  const [data, setData] = useState(dataJson);

  function filterProduk(data, nama, hargaMinimal, hargaMaksimal, kategori) {
    return data.filter((produk) => {
      // Mengecek apakah nama produk mengandung teks yang dicari (jika ada)
      const namaMatch =
        !nama || produk.nama.toLowerCase().includes(nama.toLowerCase());

      // Mengecek apakah harga produk berada dalam rentang yang diinginkan (jika diisi)
      const hargaMatch =
        (!hargaMinimal || produk.harga >= hargaMinimal) &&
        (!hargaMaksimal || produk.harga <= hargaMaksimal);

      // Mengecek apakah kategori produk sesuai (jika diisi)
      const kategoriMatch =
        !kategori || produk.kategori.toLowerCase() === kategori.toLowerCase();

      // Mengembalikan produk jika semua kriteria terpenuhi
      return namaMatch && hargaMatch && kategoriMatch;
    });
  }

  const handleSubmit = () => {
    const filtered = filterProduk(data, '', 50000, 0, '');
    setData(filtered);
  };

  useEffect(() => {
    setData(dataJson);
  }, []);
  console.log('data awal: ', data);
  return (
    <>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Filter now
      </button>
      {DATA_SUMMARY.map((item) => {
        return (
          <CardSummary
            key={item.value}
            color={item.color}
            value={item.value}
            text={item.text}
          />
        );
      })}
    </>
  );
};

import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container, Col, Row } from 'reactstrap';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Container>
          <div className="mt-5 text-center">
            <h2>Website Akreditasi Universitas Katolik Parahyangan</h2>
            <h2>Program Studi Informatika</h2>
            <hr></hr>
            <div className="mr-auto ml-auto" style={{ width: '65%' }}>
              <span>
                <h5 className="my-5 text-left">Website bertujuan untuk menampilkan tabel-tabel LKPS yang dibutuhkan pada akreditasi Program Studi Informatika tahun 2020.</h5>
                <h5>Tabel-tabel yang sudah tersedia dan lengkap adalah:</h5>
              </span>
              <Table className="my-3" striped bordered responsive>
                <thead>
                  <tr>
                    <th className="align-middle" style={{ width: '10%' }}>No.</th>
                    <th className="align-middle" style={{ width: '25%' }}>Tabel</th>
                    <th className="align-middle">Judul</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>1</b></td>
                    <td>Tabel 3.a.1</td>
                    <td className="text-left">Dosen Tetap Perguruan Tinggi yang ditugaskan sebagai pengampu mata kuliah di Program Studi yang diakreditasi</td>
                  </tr>
                  <tr>
                    <td><b>2</b></td>
                    <td>Tabel 3.a.2</td>
                    <td className="text-left">Ekuivalen Waktu Mengajar Penuh (EWMP) Dosen Tetap Perguruan Tinggi</td>
                  </tr>
                  <tr>
                    <td><b>3</b></td>
                    <td>Tabel 3.a.3</td>
                    <td className="text-left">Dosen Tidak Tetap yang ditugaskan sebagai pengampu mata kuliah di Program Studi yang Diakreditasi</td>
                  </tr>
                  <tr>
                    <td><b>4</b></td>
                    <td>Tabel 3.a.4</td>
                    <td className="text-left">Dosen Pembimbing Utama Tugas Akhir</td>
                  </tr>
                  <tr>
                    <td><b>5</b></td>
                    <td>Tabel 3.b.1</td>
                    <td className="text-left">Pengakuan/Rekognisi DTPS</td>
                  </tr>
                  <tr>
                    <td><b>6</b></td>
                    <td>Tabel 3.b.2</td>
                    <td className="text-left">Penelitian DTPS</td>
                  </tr>
                  <tr>
                    <td><b>7</b></td>
                    <td>Tabel 3.b.3</td>
                    <td className="text-left">Pengabdian Kepada Masyarakat (PkM) DTPS</td>
                  </tr>
                  <tr>
                    <td><b>8</b></td>
                    <td>Tabel 3.b.4</td>
                    <td className="text-left">Publikasi Ilmiah DTPS</td>
                  </tr>
                  <tr>
                    <td><b>9</b></td>
                    <td>Tabel 3.b.5</td>
                    <td className="text-left">Luaran Penelitian/PkM Lainnya oleh DTPS</td>
                  </tr>
                  <tr>
                    <td><b>10</b></td>
                    <td>Tabel 3.b.6</td>
                    <td className="text-left">Karya ilmiah DTPS yang disitasi dalam 3 tahun terakhir</td>
                  </tr>
                  <tr>
                    <td><b>11</b></td>
                    <td>Tabel 4</td>
                    <td className="text-left">Penggunaan Dana</td>
                  </tr>
                  <tr>
                    <td><b>12</b></td>
                    <td>Tabel 5.b</td>
                    <td className="text-left">Integrasi Kegiatan Penelitian/PkM dalam Pembelajaran</td>
                  </tr>
                  <tr>
                    <td><b>13</b></td>
                    <td>Tabel 6</td>
                    <td className="text-left">Penelitian DTPS yang melibatkan mahasiswa</td>
                  </tr>
                  <tr>
                    <td><b>14</b></td>
                    <td>Tabel 7</td>
                    <td className="text-left">PkM DTPS yang melibatkan mahasiswa</td>
                  </tr>
                  <tr>
                    <td><b>15</b></td>
                    <td>Tabel 8.f.1</td>
                    <td className="text-left">Publikasi Ilmiah mahasiswa</td>
                  </tr>
                  <tr>
                    <td><b>16</b></td>
                    <td>Tabel 8.f.3</td>
                    <td className="text-left">Luaran penelitian/PkM yang dihasilkan mahasiswa</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
      </>
    )
  }
}
Home.propTypes = {
}

export default Home;
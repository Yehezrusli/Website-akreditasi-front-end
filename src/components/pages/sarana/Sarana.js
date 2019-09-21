import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Table } from 'reactstrap';
import './Sarana.css';

class Sarana extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="Sarana">
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 4 Penggunaan Dana</h3>
        </div>
        <div className="cont_limit">
          <Container fluid="true">
            <Table striped bordered responsive>
              <thead className="text-center">
                <tr>
                  <th class="align-middle" rowSpan="2">No.</th>
                  <th class="align-middle" rowSpan="2">Jenis Kepengurusan</th>
                  <th class="align-middle" colSpan="4">Unit Pengelola Program Studi (Rp.)</th>
                  <th class="align-middle" colSpan="4">Program Studi (Rp.)</th>
                </tr>
                <tr>
                  <th class="align-middle">TS-2</th>
                  <th class="align-middle">TS-1</th>
                  <th class="align-middle">TS</th>
                  <th class="align-middle">Rata-rata</th>
                  <th class="align-middle">TS-2</th>
                  <th class="align-middle">TS-1</th>
                  <th class="align-middle">TS</th>
                  <th class="align-middle">Rata-rata</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Biaya Operasional Pendidikan</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>a</td>
                  <td>Biaya Dosen (Gaji, Honor)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>b</td>
                  <td>Biaya Tenaga Kependidikan (Gaji, Honor)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>c</td>
                  <td>Biaya Operasional Pembelajaran (Bahan dan Peralatan Habis Pakai)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>d</td>
                  <td>Biaya Operasional Tidak Langsung (Listrik, Gas, Air, Pemeliharaan Gedung, Pemeliharaan Sarana, Uang
                      Lembur, Telekomunikasi, Konsumsi,Transport Lokal, Pajak, Asuransi, dll.)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Biaya operasional kemahasiswaan (penalaran, minat, bakat, dan kesejahteraan).</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center"><strong>Jumlah</strong></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Biaya Peneliian</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Biaya PkM</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center"><strong>Jumlah</strong></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Biaya Investasi SDM</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Biaya Investasi Sarana</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Biaya Investasi Prasarana</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center"><strong>Jumlah</strong></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center"><strong>TOTAL</strong></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </div>
      </>
    )
  }
}
Sarana.propTypes = {
}

export default Sarana;
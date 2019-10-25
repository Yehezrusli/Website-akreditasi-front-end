import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import axios from "axios";
import './Tabel3b5.css';

class Tabel3b5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabel3b5: [],
    };
  }
  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel3b5').then(data => {
      this.setState({ tabel3b5: data.data.result });
    })
  }
  render() {
    const { tabel3b5 } = this.state;
    let tabel3_b_5 = tabel3b5.map((d, i) => <tr>
      <td>{i + 1}</td>
      <td>{d.NamaDosen}</td>
      <td className="text-left">{d.JudulArtikel}</td>
      <td>{d.JumlahSitasi}</td>
    </tr>);
    return (
      <>
        <div>
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.b.5 Karya ilmiah DTPS yang disitasi dalam 3 tahun terakhir</h3>
        </div>
        <div className="cont_limit">
          <Container fluid="false">
            <Table striped bordered className="text-center">
              <thead>
                <tr>
                  <th class="align-middle">No.</th>
                  <th class="align-middle">Nama Dosen</th>
                  <th class="align-middle max-width">Judul Artikel yang Disitasi (Jurnal/Buku, Volume, Tahun, Nomor, Halaman)</th>
                  <th class="align-middle">Jumlah Sitasi</th>
                </tr>
              </thead>
              <tbody>
                {tabel3_b_5}
              </tbody>
            </Table>
          </Container>
        </div>
      </>
    )
  }
}
Tabel3b5.propTypes = {
}

export default Tabel3b5;
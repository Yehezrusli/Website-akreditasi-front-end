import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import { If, Then, Else } from 'react-if';
import axios from "axios";
import './Tabel8f2.css';

class Tabel8f2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div>
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 8.f.2 Karya ilmiah mahasiswa yang disitasi</h3>
        </div>
        <div className="cont_limit">
          <Container fluid={true}>
            <Table striped bordered className="text-center">
              <thead>
                <tr>
                  <th className="align-middle">No.</th>
                  <th className="align-middle">Nama Mahasiswa</th>
                  <th className="align-middle">Judul Artikel yang Disitasi (Jurnal/Buku, Volume, Tahun, Nomor, Halaman) </th>
                  <th className="align-middle">Jumlah Sitasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
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
Tabel8f2.propTypes = {
}

export default Tabel8f2;
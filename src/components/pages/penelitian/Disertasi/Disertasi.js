import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap'; 
import './Disertasi.css';
import axios from "axios";


class Disertasi extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="TataPamong">
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 6.b Penelitian DTPS yang menjadi rujukan tema tesis/disertasi</h3>
        </div>
        <div className="cont_limit">
          <Container fluid="true">
            <Table striped bordered responsive className="text-center">
              <thead>
                <tr>
                  <th class="align-middle">No.</th>
                  <th class="align-middle">Nama Dosen</th>
                  <th class="align-middle">Tema Penelitian Sesuai Roadmap</th>
                  <th class="align-middle">Nama Mahasiswa</th>
                  <th class="align-middle">Judul Kegiatan</th>
                  <th class="align-middle">Tahun</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan="5">Jumlah </td>
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
Disertasi.propTypes = {
}

export default Disertasi;
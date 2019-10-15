import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import axios from "axios";
import './Kurikulum.css';

class Kurikulum extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="Penelitian">
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 5.a Kurikulum, Capaian Pembelajaran, dan Rencana Pembelajaran</h3>
        </div>
        <div className="cont_limit">
          <Container fluid="true">
            <Table striped bordered responsive className="text-center">
              <thead>
                <tr>
                  <th class="align-middle" rowSpan="2">No.</th>
                  <th class="align-middle" rowSpan="2">Semester</th>
                  <th class="align-middle" rowSpan="2">Kode Mata Kuliah</th>
                  <th class="align-middle" rowSpan="2">Nama Mata Kuliah</th>
                  <th class="align-middle" colSpan="3">Bobot Kredit (sks)</th>
                  <th class="align-middle" rowSpan="2">Konversi Kredit ke Jam</th>
                  <th class="align-middle" colSpan="4">Capaian Pembelajaran</th>
                  <th class="align-middle" rowSpan="2">Dokumen Rencana Pembelajaran</th>
                  <th class="align-middle" rowSpan="2">Unit Penyelengara</th>
                </tr>
                <tr>
                  <th class="align-middle">Kuliah/Responsi/Tutorial</th>
                  <th class="align-middle">Seminar</th>
                  <th class="align-middle">Praktikum/Praktik/Praktik Lapangan</th>
                  <th class="align-middle">Sikap</th>
                  <th class="align-middle">Pengetahuan</th>
                  <th class="align-middle">Keterampilan Umum</th>
                  <th class="align-middle">Keterampilan Khusus</th>
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
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
                  <td colSpan="4">Jumlah</td>
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
Kurikulum.propTypes = {
}

export default Kurikulum;
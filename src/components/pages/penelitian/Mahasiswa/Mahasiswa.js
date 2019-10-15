import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap'; 
import './Mahasiswa.css';
import axios from "axios";

class Mahasiswa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabel6a: []
    };
  }

  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel6a').then(data => {
      this.setState({ tabel6a: data.data.result });
    })
  }

  render() {
    const { tabel6a } = this.state;
    let tabel_6_a = tabel6a.map((d, i) => <tr>
      <td>{i + 1}</td>
      <td>{d.namaDosen}</td>
      <td>{d.temaPenelitian}</td>
      <td>{d.namaMahasiswa}</td>
      <td>{d.judulKegiatan}</td>
      <td>{d.tahun}</td>
    </tr>);

    return (
      <>
        <div className="Mahasiswa">
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 6.a Penelitian DTPS yang melibatkan mahasiswa </h3>
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
                {tabel_6_a}
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
Mahasiswa.propTypes = {
}

export default Mahasiswa;
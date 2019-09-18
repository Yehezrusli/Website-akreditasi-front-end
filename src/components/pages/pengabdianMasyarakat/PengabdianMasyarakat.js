import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import axios from "axios";
import './PengabdianMasyarakat.css';

class PengabdianMasyarakat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabel7: []
    };
  }

  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel7').then(data => {
      this.setState({ tabel7: data.data.result });
    })
  }

  render() {
    const { tabel7 } = this.state;
    let tabel = tabel7.map((d, i) => <tr>
      <td>{i + 1}</td>
      <td>{d.namaDosen}</td>
      <td>{d.temaPKM}</td>
      <td>{d.namaMahasiswa}</td>
      <td>{d.judulKegiatan}</td>
      <td>{d.tahun}</td>
    </tr>);

    return (
      <>
        <div className="TataPamong">
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 7 PkM DTPS yang melibatkan mahasiswa </h3>
        </div>
        <div className="cont_limit">
          <Container fluid="true">
            <Table striped bordered responsive className="text-center">
              <thead>
                <tr>
                  <th class="align-middle">No.</th>
                  <th class="align-middle">Nama Dosen</th>
                  <th class="align-middle">Tema PkM Sesuai Roadmap</th>
                  <th class="align-middle">Nama Mahasiswa</th>
                  <th class="align-middle">Judul Kegiatan</th>
                  <th class="align-middle">Tahun</th>
                </tr>
              </thead>
              <tbody>
                {tabel}
              </tbody>
            </Table>
          </Container>
        </div>
      </>
    )
  }
}
PengabdianMasyarakat.propTypes = {
}

export default PengabdianMasyarakat;
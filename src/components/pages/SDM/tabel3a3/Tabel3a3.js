import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { When } from 'react-if';
import { Modal, ModalHeader, ModalBody } from 'reactstrap'; import './Tabel3a3.css';

class Tabel3a3 extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      tabel3a3: [],
      modal: false,
    };
  }
  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel3a3').then(data => {
      this.setState({ tabel3a3: data.data.result });
    })
  }

  render() {
    const { tabel3a3 } = this.state;
    let tabel3_a_3 = tabel3a3.map((d, i) => <tr>
      <td>{d.Nomor}</td>
      <td>{d.NamaDosen}</td>
      <td>{d.Pendidikan}</td>
      <td>{d.BidangKeahlian}</td>
      <td>{d.JabatanAkademik}</td>
      <td>{d.SertifikatPendidik}</td>
      <td>{d.SertifikatKompetensi}</td>
      <td>{d.MataKuliahPSYangDiampu}</td>
      <td>
        <When condition={d.KesesuaianBidangKeahlian == "V"}>
          <FontAwesomeIcon icon={faCheck} />
        </When>
      </td>
    </tr>);
    return (
      <>
        <div>
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.a.3 Dosen Tidak Tetap Perguruan Tinggi yang ditugaskan sebagai
              pengampu mata kuliah di Program Studi yang diakreditasi</h3>
        </div>
        <div className="cont_limit">
          <Container fluid="true">
            <Table striped bordered className="text-center">
              <thead>
                <tr>
                  <th className="align-middle">No.</th>
                  <th className="align-middle">Nama Dosen</th>
                  <th className="align-middle">Pendidikan Pasca Sarjana</th>
                  <th className="align-middle">Bidang Keahlian</th>
                  <th className="align-middle">Jabatan Akademik</th>
                  <th className="align-middle">Sertifikat Pendidikan Profesional</th>
                  <th className="align-middle">Sertifikat Kompetensi/ Profesi/ Industri</th>
                  <th className="align-middle">Mata Kuliah yang Diampu pada PS yang Diakreditasi</th>
                  <th className="align-middle">Kesesuaian Bidang Keahlian dengan Mata  Kuliah yang Diampu</th>
                </tr>
              </thead>
              <tbody>
                {tabel3_a_3}
                <tr>
                  <td colSpan="7">Jumlah</td>
                  <td>NDTT = {tabel3_a_3.length}</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </div>
      </>
    )
  }
}
Tabel3a3.propTypes = {
}

export default Tabel3a3;
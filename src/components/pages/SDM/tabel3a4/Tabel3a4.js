import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { When } from 'react-if';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './Tabel3a4.css';

class Tabel3a4 extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      tabel3a4: [],
      modal: false,
      tabelNamaDosen: []
    };
  }
  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel3a4').then(data => {
      this.setState({ tabel3a4: data.data.result });
    })
  }
  render() {
    const { tabel3a4 } = this.state;
    let tabel3_a_4 = tabel3a4.map((d, i) => <tr>
      <td>{d.Nomor}</td>
      <td>{d.NamaDosen}</td>
      <td>{d.NIDN}</td>
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
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.a.4  Dosen Tidak Tetap yang ditugaskan sebagai pengampu mata kuliah di Program Studi yang Diakreditasi</h3>
        </div>
        <div className="cont_limit_tugas_akhir">
          <Container fluid={true}>
            <Table striped bordered className="text-center">
              <thead>
                <tr>
                  <th className="align-middle">No.</th>
                  <th className="align-middle">Nama Dosen</th>
                  <th className="align-middle">NIDN/NIDK</th>
                  <th className="align-middle">Pendidikan Pasca Sarjana</th>
                  <th className="align-middle">Bidang Keahlian</th>
                  <th className="align-middle">Jabatan Akademik</th>
                  <th className="align-middle">Sertifikat Pendidik Profesional</th>
                  <th className="align-middle">Sertifikat Profesi/ Kompensasi/ Industri</th>
                  <th className="align-middle">Mata Kuliah yang Diampu pada PS yang Diakreditasi</th>
                  <th className="align-middle">Kesesuaian Bidang Keahlian dengan Mata Kuliah yan Diampu</th>
                </tr>
              </thead>
              <tbody>
                {tabel3_a_4}
              </tbody>
            </Table>
          </Container>
        </div>
      </>
    )
  }
}
Tabel3a4.propTypes = {
}

export default Tabel3a4;
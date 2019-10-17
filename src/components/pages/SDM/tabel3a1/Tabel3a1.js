import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { When } from 'react-if';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './Tabel3a1.css';

class Tabel3a1 extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      tabel3a1: [],
      modal: false,
      tabelNamaDosen: []
    };
  }
  toggleModal(){
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel3a1').then(data => {
      this.setState({ tabel3a1: data.data.result });
    })
  }
  render() {
    const { tabel3a1, tabelNamaDosen } = this.state;
    let totalKomptensi = 0;
    let tabel3 = tabel3a1.map((d, i) => {
      if (d.KesesuaianKompetensi == 'V') {
        totalKomptensi++;
      }
      return <tr>
        <td>{i + 1}</td>
        <td>{d.NamaDosen}</td>
        <td>{d.Pendidikan}</td>
        <td>{d.BidangKeahlian}</td>
        <td>
          <When condition={d.KesesuaianKompetensi == "V"}>
            <FontAwesomeIcon icon={faCheck} />
          </When>
        </td>
        <td>{d.JabatanAkademik}</td>
        <td>{d.SertifikatPendidik}</td>
        <td>{d.SertifikatKompetensi}</td>
        <td>{d.MataKuliahPSYangDiampu}</td>
        <td>
          <When condition={d.KesesuaianBidangKeahlian == "V"}>
            <FontAwesomeIcon icon={faCheck} />
          </When>
        </td>
        <td>{d.MataKuliahLuarPSYangDiampu}</td>
      </tr>
    });

    let tabelModalNamaDosen = tabelNamaDosen.map((d, i) => {
      return <tr>
        <td>{i + 1}</td>
        <td>{d.NamaDosen}</td>
      </tr>
    })

    return (
      <>
        <div>
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.a.1 Dosen Tetap Perguruan Tinggi yang ditugaskan sebagai
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
                  <th className="align-middle">Kesesuaian dengan Kompetensi Inti PS</th>
                  <th className="align-middle">Jabatan Akademik</th>
                  <th className="align-middle">Sertifikat Pendidikan Profesional</th>
                  <th className="align-middle">Sertifikat Kompetensi/ Profesi/ Industri</th>
                  <th className="align-middle">Mata Kuliah yang Diampu pada PS yang Diakreditasi</th>
                  <th className="align-middle">Kesesuaian Bidang Keahlian dengan Mata  Kuliah yang Diampu</th>
                  <th className="align-middle">Mata Kuliah yang Diampu pada PS Lain</th>
                </tr>
              </thead>
              <tbody>
                {tabel3}
                <tr>
                  <th scope="row">Jumlah</th>
                  <td onClick={() => {
                    console.log("masuk");
                    this.setState({
                      tabelNamaDosen: tabel3a1,
                      modal: true
                    });
                  }}>{tabel3.length}</td>
                  <td></td>
                  <td></td>
                  <td onClick={() => {
                    this.setState({
                      tabelNamaDosen: tabel3a1.filter(d => d.KesesuaianKompetensi == "V"),
                      modal: true
                    });
                  }}>{totalKomptensi}</td>
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
        <div>
          {/* <Button color="danger" onClick={this.toggleModal}>Hallo</Button> */}
          <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
            <ModalHeader toggle={this.toggleModal}>Nama Dosen Tetap yang ditugaskan sebagai pengampu mata kuliah di Program Studi yang diakreditasi</ModalHeader>
            <ModalBody>
              <Table striped bordered>
                <thead className="text-center">
                  <tr>
                    <th className="align-middle" rowSpan="3">No.</th>
                    <th className="align-middle" rowSpan="3">Nama Dosen</th>
                  </tr>
                </thead>
                <tbody>
                  {tabelModalNamaDosen}
                </tbody>
              </Table>
            </ModalBody>
          </Modal>
        </div>
      </>
    )
  }
}
Tabel3a1.propTypes = {
}

export default Tabel3a1;
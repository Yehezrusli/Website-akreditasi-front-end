import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { When } from 'react-if';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Input, FormGroup } from 'reactstrap';
import './Tabel3a1.css';

class Tabel3a1 extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      tabel3a1: [],
      tabel3a1Filtered: [],
      modal: false,
      tabelNamaDosen: [],
      name: ""
    };
    this.toggleModal = this.toggleModal.bind(this);

  }
  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel3a1').then(data => {
      this.setState({ tabel3a1: data.data.result, tabel3a1Filtered: data.data.result });
    })
  }

  update(e) {
    // this.setState({ name: e.target.value });
    // console.log(this.state.name);
    var x = this.state.tabel3a;
    let searchQuery = e.target.value;
    let regexer = new RegExp(searchQuery, "i");
    console.log("UKULELE", searchQuery);
    this.setState({
      tabel3a1Filtered: this.state.tabel3a1.filter(d => searchQuery.length == 0 || d.NamaDosen.match(regexer) || d.NIDN.includes(searchQuery))
    });
  }

  render() {
    const {tabel3a1, tabel3a1Filtered, tabelNamaDosen } = this.state;
    let totalKomptensi = 0;
    let tabel3 = tabel3a1Filtered.map((d, i) => {
      if (d.KesesuaianKompetensi == 'V') {
        totalKomptensi++;
      }
      return <tr>
        <td>{i + 1}</td>
        <td>{d.NamaDosen}</td>
        <td>{d.NIDN}</td>
        <td>{d.Pendidikan}</td>
        <td>{d.Pendidikan_doctor}</td>
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
          <Container fluid={true}>
            <Col md={3} className="go-right input">
              <FormGroup className="input">
                <Input type="text" onChange={this.update.bind(this)} placeholder="Cari Dosen" />
              </FormGroup>
            </Col>
            <Table striped bordered className="text-center">
              <thead>
                <tr>
                  <th className="align-middle" rowSpan="2">No.</th>
                  <th className="align-middle" rowSpan="2">Nama Dosen</th>
                  <th className="align-middle" rowSpan="2">NIDN/NIDK</th>
                  <th className="align-middle" colSpan="2">Pendidikan Pasca Sarjana</th>
                  <th className="align-middle" rowSpan="2">Bidang Keahlian</th>
                  <th className="align-middle" rowSpan="2">Kesesuaian dengan Kompetensi Inti PS</th>
                  <th className="align-middle" rowSpan="2">Jabatan Akademik</th>
                  <th className="align-middle" rowSpan="2">Sertifikat Pendidik Profesional</th>
                  <th className="align-middle" rowSpan="2">Sertifikat Kompetensi/ Profesi/ Industri</th>
                  <th className="align-middle" rowSpan="2">Mata Kuliah yang Diampu pada PS yang Diakreditasi</th>
                  <th className="align-middle" rowSpan="2">Kesesuaian Bidang Keahlian dengan Mata  Kuliah yang Diampu</th>
                  <th className="align-middle" rowSpan="2">Mata Kuliah yang Diampu pada PS Lain</th>
                </tr>
                <tr>
                  <th className="align-middle">Magister/ Magister Terapan/Spesialis</th>
                  <th className="align-middle">Doktor/ Doktor Terapan/Spesialis</th>
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
                </tr>
              </tbody>
            </Table>

          </Container>
        </div>
        <div>
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
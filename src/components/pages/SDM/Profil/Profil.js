import React, { Component } from 'react';
import './Profil.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { When } from 'react-if';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Profil extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      activeTab: '1',
      tabel3a1: [],
      tabel3a2: [],
      tabel3a3: [],
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
    axios.get('/back-end/index.php/api/tabel3a1').then(data => {
      this.setState({ tabel3a1: data.data.result });
    })
    axios.get('/back-end/index.php/api/tabel3a2').then(data => {
      this.setState({ tabel3a2: data.data.result });
    })
    axios.get('/back-end/index.php/api/tabel3a3').then(data => {
      this.setState({ tabel3a3: data.data.result });
    })
    axios.get('/back-end/index.php/api/tabel3a4').then(data => {
      this.setState({ tabel3a4: data.data.result });
    })
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const { tabel3a1, tabelNamaDosen } = this.state;
    let totalKomptensi = 0;
    let tabel3 = tabel3a1.map((d, i) => {
      if (d.KesesuaianKompetensi == '1') {
        totalKomptensi++;
      }
      return <tr>
        <td>{i + 1}</td>
        <td>{d.NamaDosen}</td>
        <td>{d.Pendidikan}</td>
        <td>{d.BidangKeahlian}</td>
        <td>{d.KesesuaianKompetensi}</td>
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

    const { tabel3a2 } = this.state;
    let dtps = 0;
    let jumlah = 0;
    let jumlahdtps = 0;
    let tabel3_a_2 = tabel3a2.map((d, i) => {
      jumlah += d.Jumlah;
      if (d.isDTPS == '1') {
        dtps++;
        jumlahdtps += d.Jumlah;
      }
      return <tr>
        <td>{i + 1}</td>
        <td>{d.Nama}</td>
        <td>
          <When condition={d.isDTPS == "1"}>
            <FontAwesomeIcon icon={faCheck} />
          </When>
        </td>
        <td>{d.PembelajaranPS}</td>
        <td>{d.PembelajaranPSLain}</td>
        <td>{d.PembelajaranPSLuar}</td>
        <td>{d.Penelitian}</td>
        <td>{d.Pkm}</td>
        <td>{d.Tambahan}</td>
        <td>{d.Jumlah}</td>
        <td>{d.Rata2}</td>
      </tr>
    });

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

    const { tabel3a4 } = this.state;
    let tabel3_a_4 = tabel3a4.map((d, i) => <tr>
      <td>{d.Nomor}</td>
      <td>{d.NamaDosen}</td>
      <td>{d['TS-2']}</td>
      <td>{d['TS-1']}</td>
      <td>{d.TS}</td>
      <td>{d['TS-2b']}</td>
      <td>{d['TS-1b']}</td>
      <td>{d.TSb}</td>
      <td>{d.Rata2}</td>
      <td>{d.Rata2b}</td>
    </tr>);

    return (
      <>
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                T 3.a.1 Dosen Tetap Pengampuan Program Studi
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                T 3.a.2 Ekuivalen Waktu Mengajar Dosen
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
                T 3.a.3 Dosen Tidak Tetap  Pengampuan Program Studi
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '4' })} onClick={() => { this.toggle('4'); }}>
                T 3.a.4 Dosen Pembimbing Utama Tugas Akhir
            </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
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
                        <td onClick={()=>{
                            this.setState({
                              tabelNamaDosen: tabel3a1,
                              modal: true
                            });
                          }}>{tabel3.length}</td>
                        <td></td>
                        <td></td>
                        <td onClick={()=>{
                            this.setState({
                              tabelNamaDosen: tabel3a1.filter(d=>d.KesesuaianKompetensi > 0),
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
            </TabPane>
            <TabPane tabId="2">
              <div>
                <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.a.2 Ekuivalen Waktu Mengajar Penuh (EWMP) Dosen Tetap Perguruan Tinggi</h3>
              </div>
              <div className="cont_limit">
                <Container fluid="true">
                  <Table striped bordered className="text-center">
                    <thead>
                      <tr>
                        <th className="align-middle" rowSpan="3">No.</th>
                        <th className="align-middle" rowSpan="3">Nama Dosen</th>
                        <th className="align-middle" rowSpan="3">DTPS</th>
                        <th className="align-middle" colSpan="6">Ekuivalen Waktu Mengajar Penuh (EWMP) pada saat TS dalam satuan kredit semester (sks)</th>
                        <th className="align-middle" rowSpan="3">Jumlah (sks)</th>
                        <th className="align-middle" rowSpan="3">Rata-rata per Semester (sks)</th>
                      </tr>
                      <tr>
                        <th className="align-middle" colSpan="3">Pendidikan: Pembelajaran dan Pembimbingan</th>
                        <th className="align-middle" rowSpan="2">Penelitian</th>
                        <th className="align-middle" rowSpan="2">PkM</th>
                        <th className="align-middle" rowSpan="2">Tugas Tambahan dan/atau Penunjang</th>
                      </tr>
                      <tr>
                        <th className="align-middle">PS yang Diakreditasi</th>
                        <th className="align-middle">PS Lain di dalam PT</th>
                        <th className="align-middle">PS Lain di luar PT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tabel3_a_2}
                      <tr>
                        <td colSpan="9">Rata-rata DT</td>
                        <td>{jumlah / tabel3_a_2.length}</td>
                      </tr>
                      <tr>
                        <td colSpan="9">Rata-rata DTPS</td>
                        <td>{jumlahdtps / dtps}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Container>
              </div>
            </TabPane>
            <TabPane tabId="3">
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
            </TabPane>
            <TabPane tabId="4">
              <div>
                <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.a.4 Dosen Pembimbing Utama Tugas Akhir</h3>
              </div>
              <div className="cont_limit_tugas_akhir">
                <Container fluid="true">
                  <Table striped bordered className="text-center">
                    <thead>
                      <tr>
                        <th className="align-middle" rowSpan="3">No.</th>
                        <th className="align-middle" rowSpan="3">Nama Dosen</th>
                        <th className="align-middle" colSpan="6">Jumlah Mahasiswa yang Dibimbing</th>
                        <th className="align-middle" rowSpan="3">Rata-rata Jumlah Bimbingan/Tahun</th>
                        <th className="align-middle" rowSpan="3">Rata-rata Jumlah Bimbingan di seluruh Program/Tahun</th>
                      </tr>
                      <tr>
                        <th className="align-middle" colSpan="3">pada PS yang Diakreditasi</th>
                        <th className="align-middle" colSpan="3">pada PS Lain pada Program yang sama di PT</th>
                      </tr>
                      <tr>
                        <th className="align-middle">TS-2</th>
                        <th className="align-middle">TS-1</th>
                        <th className="align-middle">TS</th>
                        <th className="align-middle">TS-2</th>
                        <th className="align-middle">TS-1</th>
                        <th className="align-middle">TS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tabel3_a_4}
                    </tbody>
                  </Table>
                </Container>
              </div>
            </TabPane>
          </TabContent>
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
Profil.propTypes = {
}

export default Profil;
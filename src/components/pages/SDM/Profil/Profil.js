import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Profil.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import axios from "axios";
import { When } from 'react-if';
class Profil extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      tabel3a1: []
    };
  }

  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel3a1').then(data => {
      this.setState({ tabel3a1: data.data.result });
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
    const { tabel3a1 } = this.state;
    let tabel3 = tabel3a1.map((d, i) => <tr>
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
    </tr>);
    return (
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
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '5' })} onClick={() => { this.toggle('5'); }}>
              T 3.a.5 Dosen Industri/Praktisi
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <div>
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.a.1) Dosen Tetap Perguruan Tinggi yang ditugaskan sebagai
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
                      <td>NDT={tabel3.length}</td>
                      <td></td>
                      <td></td>
                      <td>NDTPS={tabel3.length}</td>
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
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.a.2) Ekuivalen Waktu Mengajar Penuh (EWMP) Dosen Tetap Perguruan Tinggi</h3>
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
                    <tr>
                      <th scope="row">1</th>
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
                      <th scope="row">2</th>
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
                      <th scope="row">3</th>
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
                      <th scope="row">4</th>
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
                      <th scope="row">Jumlah</th>
                      <td></td>
                      <td></td>
                      <td>NDTPS</td>
                      <td></td>
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
          <TabPane tabId="3">
            <div>
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.a.3) Dosen Tidak Tetap Perguruan Tinggi yang ditugaskan sebagai
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
                    <tr>
                      <th scope="row">1</th>
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
                      <th scope="row">2</th>
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
                      <th scope="row">3</th>
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
                      <th scope="row">4</th>
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
                      <th scope="row">Jumlah</th>
                      <td>NDTT=</td>
                      <td></td>
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
          <TabPane tabId="4">
            <div>
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.a.4) Dosen Pembimbing Utama Tugas Akhir</h3>
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
                    <tr>
                      <th scope="row">1</th>
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
                      <th scope="row">2</th>
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
                      <th scope="row">3</th>
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
                      <th scope="row">4</th>
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
                  </tbody>
                </Table>
              </Container>
            </div>
          </TabPane>
          <TabPane tabId="5">
            <div>
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.a.5) Dosen Industri/Praktisi</h3>
            </div>
            <div className="cont_limit_tugas_akhir">
              <Container fluid="true">
                <Table striped bordered className="text-center">
                  <thead>
                    <tr>
                      <th className="align-middle">No.</th>
                      <th className="align-middle">Nama Dosen Industri/Praktisi</th>
                      <th className="align-middle">Pendidikan Tertinggi</th>
                      <th className="align-middle">Bidang Keahlian</th>
                      <th className="align-middle">NIDK</th>
                      <th className="align-middle">Mata Kuliah yang Diampu</th>
                      <th className="align-middle">Bobot Akreditasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
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
        </TabContent>
      </div>
    )
  }
}
Profil.propTypes = {
}

export default Profil;
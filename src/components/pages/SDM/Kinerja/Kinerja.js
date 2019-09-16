import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import './Kinerja.css';

class Kinerja extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >T 3.b.1 Pengakuan/Rekognisi
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >T 3.b.2 Penelitian
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >T 3.b.3 PkM DTPS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >T 3.b.4 Publikasi Ilmiah
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '8' })}
              onClick={() => { this.toggle('8'); }}
            >T 3.b.4 Pagelaran/Pameran/Presentasi/Publikasi
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >T 3.b.5 Luaran Penelitian/PkM Lainnya
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >T 3.b.6 Karya Ilmiah
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => { this.toggle('7'); }}
            >T 3.b.7 Produk/Jasa
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <div>
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.b.1) Pengakuan/Rekognisi DTPS</h3>
            </div>
            <div className="cont_limit">
              <Container fluid="true">
                <Table striped bordered className="text-center">
                  <thead>
                    <tr>
                      <th class="align-middle" rowSpan="2">No.</th>
                      <th class="align-middle" rowSpan="2">Nama Dosen</th>
                      <th class="align-middle" rowSpan="2">Bidang Keahlian</th>
                      <th class="align-middle" rowSpan="2">Rekognisi dan Bukti Pendukung</th>
                      <th class="align-middle" colSpan="3">Tingkat</th>
                      <th class="align-middle" rowSpan="2">Tahun</th>
                    </tr>
                    <tr>
                      <th class="align-middle">Wilayah</th>
                      <th class="align-middle">Nasional</th>
                      <th class="align-middle">Internasional</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Raymond Chandra Putra S.T., M.T</td>
                      <td>Rekayasa Perangkat Lunak</td>
                      <td></td>
                      <td>Sesuai</td>
                      <td>Kepala Laboratorium Informatika UNPAR</td>
                      <td>-</td>
                      <td>-</td>
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
                    </tr>
                    <tr>
                      <th scope="row" colSpan="4">Jumlah</th>
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
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.b.2) Penelitian DTPS</h3>
            </div>
            <div className="cont_limit">
              <Container fluid="true">
                <Table striped bordered className="text-center">
                  <thead>
                    <tr>
                      <th class="align-middle" rowSpan="2">No.</th>
                      <th class="align-middle" rowSpan="2">Sumber Pembiayaan</th>
                      <th class="align-middle" colSpan="3">Jumlah Judul</th>
                      <th class="align-middle" rowSpan="2">Jumlah</th>
                    </tr>
                    <tr>
                      <th class="align-middle">TS-2</th>
                      <th class="align-middle">TS-1</th>
                      <th class="align-middle">TS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="align-middle" rowSpan="2">1</th>
                      <td className="text-left">a. Perguruan Tinggi</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-left">b. Mandiri</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td className="text-left">Lembaga Dalam Negeri (di luar PT)</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td className="text-left">Lembaga Luar Negeri</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row" colSpan="2">Jumlah</th>
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
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.b.3) Pengabdian Kepada Masyarakat (PkM) DTPS</h3>
            </div>
            <div className="cont_limit">
              <Container fluid="true">
                <Table striped bordered className="text-center">
                  <thead>
                    <tr>
                      <th class="align-middle" rowSpan="2">No.</th>
                      <th class="align-middle" rowSpan="2">Sumber Pembiayaan</th>
                      <th class="align-middle" colSpan="3">Jumlah Judul</th>
                      <th class="align-middle" rowSpan="2">Jumlah</th>
                    </tr>
                    <tr>
                      <th class="align-middle">TS-2</th>
                      <th class="align-middle">TS-1</th>
                      <th class="align-middle">TS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="align-middle" rowSpan="2">1</th>
                      <td className="text-left">a. Perguruan Tinggi</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-left">b. Mandiri</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td className="text-left">Lembaga Dalam Negeri (di luar PT)</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td className="text-left">Lembaga Luar Negeri</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row" colSpan="2">Jumlah</th>
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
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.b.4) Publikasi Ilmiah DTPS</h3>
            </div>
            <div className="cont_limit">
              <Container fluid="true">
                <Table striped bordered className="text-center">
                  <thead>
                    <tr>
                      <th class="align-middle" rowSpan="2">No.</th>
                      <th class="align-middle" rowSpan="2">Media Publikasi</th>
                      <th class="align-middle" colSpan="3">Jumlah Judul</th>
                      <th class="align-middle" rowSpan="2">Jumlah</th>
                    </tr>
                    <tr>
                      <th class="align-middle">TS-2</th>
                      <th class="align-middle">TS-1</th>
                      <th class="align-middle">TS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td class="text-left">Jurnal nasional tidak terakreditasi </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td class="text-left">Jurnal nasional terakreditasi </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td class="text-left">Jurnal internasional</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td class="text-left">Jurnal internasional bereputasi </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td class="text-left">Seminar wilayah/lokal/perguruan tinggi</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td class="text-left">Seminar nasional</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td class="text-left">Seminar internasional</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td class="text-left">Tulisan di media massa wilayah</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td class="text-left">Tulisan di media massa nasional</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td class="text-left">Tulisan di media massa internasional </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row" colSpan="2">Jumlah</th>
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
          <TabPane tabId="8">
          <div>
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.b.4) Pagelaran/pameran/presentasi/publikasi Ilmiah DTPS</h3>
            </div>
            <div className="cont_limit">
              <Container fluid="true">
                <Table striped bordered className="text-center">
                  <thead>
                    <tr>
                      <th class="align-middle" rowSpan="2">No.</th>
                      <th class="align-middle" rowSpan="2">Media Publikasi</th>
                      <th class="align-middle" colSpan="3">Jumlah Judul</th>
                      <th class="align-middle" rowSpan="2">Jumlah</th>
                    </tr>
                    <tr>
                      <th class="align-middle">TS-2</th>
                      <th class="align-middle">TS-1</th>
                      <th class="align-middle">TS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td class="text-left">Publikasi di jurnal nasional tidak terakreditasi </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td class="text-left">Publikasi di jurnal nasional terakreditasi</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td class="text-left">Publikasi di jurnal internasiona</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td class="text-left">Publikasi di jurnal internasional bereputasi</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td class="text-left">Publikasi di seminar wilayah/lokal/perguruan tinggi</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td class="text-left">Publikasi di seminar nasional</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td class="text-left">Publikasi di seminar internasiona</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td class="text-left">Pagelaran/pameran/presentasi dalam forum di tingkat wilayah</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td class="text-left">Pagelaran/pameran/presentasi dalam forum di tingkat nasional</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td class="text-left"> Pagelaran/pameran/presentasi dalam forum di tingkat internasional</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row" colSpan="2">Jumlah</th>
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
    );
  }
}
Kinerja.propTypes = {
}

export default Kinerja;
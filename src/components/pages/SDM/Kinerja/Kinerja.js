import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import axios from "axios";
import { If, Then, Else } from 'react-if';
import './Kinerja.css';


class Kinerja extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      tabel3b1: [],
      tabel3b2: [],
      tabel3b3: [],
      tabel3b4Jurnal: [],
      tabel3b4Seminar: [],
      tabel3b4Tulisan: [],
      tabel3b6: [],
      tabel3b5: []
    };
  }

  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel3b1').then(data => {
      this.setState({ tabel3b1: data.data.result });
    })
    axios.get('/back-end/index.php/api/tabel3b2').then(data => {
      this.setState({ tabel3b2: data.data.result });
    })
    axios.get('/back-end/index.php/api/tabel3b3').then(data => {
      this.setState({ tabel3b3: data.data.result });
    })
    axios.get('/back-end/index.php/api/tabel3b4Jurnal').then(data => {
      this.setState({ tabel3b4Jurnal: data.data.result });
    })
    axios.get('/back-end/index.php/api/tabel3b4Seminar').then(data => {
      this.setState({ tabel3b4Seminar: data.data.result });
    })
    axios.get('/back-end/index.php/api/tabel3b4Tulisan').then(data => {
      this.setState({ tabel3b4Tulisan: data.data.result });
    })
    axios.get('/back-end/index.php/api/tabel3b5').then(data => {
      this.setState({ tabel3b5: data.data.result });
    })
    axios.get('/back-end/index.php/api/tabel3b6').then(data => {
      this.setState({ tabel3b6: data.data.result });
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
    const { tabel3b1 } = this.state;
    let tabel3_b_1 = tabel3b1.map((d, i) => <tr>
      <td>{d.Nomor}</td>
      <td>{d.NamaDosen}</td>
      <td>{d["Bidang Keahlian"]}</td>
      <td>{d.Rekognisi}</td>
      <td>{d.Wilayah}</td>
      <td>{d.Nasional}</td>
      <td>{d.Internasional}</td>
      <td>{d.Tahun}</td>
    </tr>);

    const { tabel3b2 } = this.state;
    let tabel3_b_2 = tabel3b2.map((d, i) => <tr>
      <If condition={d.sumberPembiayaan == "Jumlah"}>
        <Then>
          <td colSpan="2">{d.sumberPembiayaan}</td>
          <td>{d.ts2}</td>
          <td>{d.ts1}</td>
          <td>{d.ts}</td>
          <td>{d.jumlah}</td>
        </Then>
        <Else>
          <td>{i + 1}</td>
          <td className="text-left">{d.sumberPembiayaan}</td>
          <td>{d.ts2}</td>
          <td>{d.ts1}</td>
          <td>{d.ts}</td>
          <td>{d.jumlah}</td>
        </Else>
      </If>
    </tr>);

    const { tabel3b3 } = this.state;
    let tabel3_b_3 = tabel3b3.map((d, i) => <tr>
      <If condition={d.sumberPembiayaan == "Jumlah"}>
        <Then>
          <td colSpan="2">{d.sumberPembiayaan}</td>
          <td>{d.ts2}</td>
          <td>{d.ts1}</td>
          <td>{d.ts}</td>
          <td>{d.jumlah}</td>
        </Then>
        <Else>
          <td>{i + 1}</td>
          <td className="text-left">{d.sumberPembiayaan}</td>
          <td>{d.ts2}</td>
          <td>{d.ts1}</td>
          <td>{d.ts}</td>
          <td>{d.jumlah}</td>
        </Else>
      </If>
    </tr>);

    const { tabel3b4Jurnal } = this.state;
    let ts2 = 0;
    let ts1 = 0;
    let ts = 0;
    let total = 0;
    let tabel3_b_4 = tabel3b4Jurnal.map((d, i) => {
      if (d.jenisPublikasi == "Jumlah") {
        ts2 = ts2 + d.ts2;
        ts1 = ts1 + d.ts1;
        ts = ts + d.ts;
        total = total + d.jumlah;
      }
      return <If condition={d.jenisPublikasi != "Jumlah"}>
        <Then>
          <tr>
            <td>{i + 1}</td>
            <td className="text-left">{d.jenisPublikasi}</td>
            <td>{d.ts2}</td>
            <td>{d.ts1}</td>
            <td>{d.ts}</td>
            <td>{d.jumlah}</td>
          </tr>
        </Then>
      </If>
    });

    const { tabel3b4Seminar } = this.state;
    let tabel3_b_4b = tabel3b4Seminar.map((d, i) => {
      if (d.jenisPublikasi == "Jumlah") {
        ts2 = ts2 + d.ts2;
        ts1 = ts1 + d.ts1;
        ts = ts + d.ts;
        total = total + d.jumlah;
      }
      return <If condition={d.jenisPublikasi != "Jumlah"}>
        <Then>
          <tr>
            <td>{i + 5}</td>
            <td className="text-left">{d.jenisPublikasi}</td>
            <td>{d.ts2}</td>
            <td>{d.ts1}</td>
            <td>{d.ts}</td>
            <td>{d.jumlah}</td>
          </tr>
        </Then>
      </If>
    });

    tabel3_b_4.push(tabel3_b_4b);

    const { tabel3b4Tulisan } = this.state;
    let tabel3_b_4c = tabel3b4Tulisan.map((d, i) => {
      if (d.jenisPublikasi == "Jumlah") {
        ts2 = ts2 + d.ts2;
        ts1 = ts1 + d.ts1;
        ts = ts + d.ts;
        total = total + d.jumlah;
      }
      return <If condition={d.jenisPublikasi != "Jumlah"}>
        <Then>
          <tr>
            <td>{i + 8}</td>
            <td className="text-left">{d.jenisPublikasi}</td>
            <td>{d.ts2}</td>
            <td>{d.ts1}</td>
            <td>{d.ts}</td>
            <td>{d.jumlah}</td>
          </tr>
        </Then>
      </If>
    });

    tabel3_b_4.push(tabel3_b_4c);

    const { tabel3b5 } = this.state;
    let tabel3_b_5 = tabel3b5.map((d5, j) => <tr>
      <If condition={d5.JudulLuaran == "Jumlah"}>
        <Then>
          <td colSpan="2" className="text-center">{d5.JudulLuaran}</td>
          <td>{d5.tahun}</td>
          <td>{d5.keterangan}</td>
        </Then>
        <Else>
          <td>{d5.Nomor}</td>
          <td>{d5.JudulLuaran}</td>
          <td>{d5.tahun}</td>
          <td>{d5.keterangan}</td>
        </Else>
      </If>
    </tr>);

    const { tabel3b6 } = this.state;
    let tabel3_b_6 = tabel3b6.map((d, i) => <tr>
      <td>{i + 1}</td>
      <td>{d.NamaDosen}</td>
      <td className="text-left">{d.JudulArtikel}</td>
      <td>{d.JumlahSitasi}</td>
    </tr>);


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
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <div>
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.b.1 Pengakuan/Rekognisi DTPS</h3>
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
                    {tabel3_b_1}
                  </tbody>
                </Table>
              </Container>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div>
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.b.2 Penelitian DTPS</h3>
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
                    {tabel3_b_2}
                  </tbody>
                </Table>
              </Container>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div>
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.b.3 Pengabdian Kepada Masyarakat (PkM) DTPS</h3>
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
                    {tabel3_b_3}
                  </tbody>
                </Table>
              </Container>
            </div>
          </TabPane>
          <TabPane tabId="4">
            <div>
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.b.4 Publikasi Ilmiah DTPS</h3>
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
                    {tabel3_b_4}
                    <tr>
                      <th colSpan="2">Jumlah</th>
                      <td>{ts2}</td>
                      <td>{ts1}</td>
                      <td>{ts}</td>
                      <td>{total}</td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
            </div>
          </TabPane>
          <TabPane tabId="6">
            <div>
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.b.6 Karya ilmiah DTPS yang disitasi dalam 3 tahun terakhir</h3>
            </div>
            <div className="cont_limit">
              <Container fluid="false">
                <Table striped bordered className="text-center">
                  <thead>
                    <tr>
                      <th class="align-middle">No.</th>
                      <th class="align-middle">Nama Dosen</th>
                      <th class="align-middle">Judul Artikel yang Disitasi (Jurnal/Buku, Volume, Tahun, Nomor, Halaman)</th>
                      <th class="align-middle">Jumlah Sitasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabel3_b_6}
                  </tbody>
                </Table>
              </Container>
            </div>
          </TabPane>
          <TabPane tabId="5">
            <div>
              <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.b.5 Luaran Penelitian/PkM Lainnya oleh DTPS</h3>
            </div>
            <div className="cont_limit">
              <Container fluid="true">
                <Table striped bordered>
                  <thead className="text-center">
                    <tr>
                      <th class="align-middle">No.</th>
                      <th class="align-middle">Judul Luaran Penelitian/PkM</th>
                      <th class="align-middle">Tahun</th>
                      <th class="align-middle">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabel3_b_5}
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
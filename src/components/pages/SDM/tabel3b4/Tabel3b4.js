import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import axios from "axios";
import { If, Then, Else } from 'react-if';
import './Tabel3b4.css';

class Tabel3b4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabel3b4Jurnal: [],
      tabel3b4Seminar: [],
      tabel3b4Tulisan: [],
    };
  }
  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel3b4Jurnal').then(data => {
      this.setState({ tabel3b4Jurnal: data.data.result });
    })
    axios.get('/back-end/index.php/api/tabel3b4Seminar').then(data => {
      this.setState({ tabel3b4Seminar: data.data.result });
    })
    axios.get('/back-end/index.php/api/tabel3b4Tulisan').then(data => {
      this.setState({ tabel3b4Tulisan: data.data.result });
    })
  }
  render() {
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
    return (
      <>
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
      </>
    )
  }
}
Tabel3b4.propTypes = {
}

export default Tabel3b4;
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Table } from 'reactstrap';
import axios from "axios";
import { If, Then, Else } from 'react-if';
import './Sarana.css';

class Sarana extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabel4: []
    };
  }

  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel4').then(data => {
      this.setState({ tabel4: data.data.result });
    })
  }

  render() {
    const { tabel4 } = this.state;
    let tabel_4 = tabel4.map((d, i) => <tr>
      <If condition={d.jenisPenggunaan === "Jumlah"}>
        <Then>
          <td colSpan="2">{d.jenisPenggunaan}</td>
        </Then>
        <Else>
          <td>{d.Nomor}</td>
          <td className="text-left">{d.jenisPenggunaan}</td>
        </Else>
      </If>
      <td>{d.TS_2_UPPS}</td>
      <td>{d.TS_1_UPPS}</td>
      <td>{d.TS_UPPS}</td>
      <td>{d.Rata_rata_UPPS}</td>
      <td>{d.TS_2_PS}</td>
      <td>{d.TS_1_PS}</td>
      <td>{d.TS_PS}</td>
      <td>{d.Rata_rata_PS}</td>
    </tr>);
    return (
      <>
        <div className="Sarana">
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 4 Penggunaan Dana</h3>
        </div>
        <div className="cont_limit">
          <Container fluid="true">
            <Table striped bordered responsive className="text-center">
              <thead className="text-center">
                <tr>
                  <th class="align-middle" rowSpan="2">No.</th>
                  <th class="align-middle" rowSpan="2">Jenis Kepengurusan</th>
                  <th class="align-middle" colSpan="4">Unit Pengelola Program Studi (Rp.)</th>
                  <th class="align-middle" colSpan="4">Program Studi (Rp.)</th>
                </tr>
                <tr>
                  <th class="align-middle max-width">TS-2</th>
                  <th class="align-middle max-width">TS-1</th>
                  <th class="align-middle max-width">TS</th>
                  <th class="align-middle max-width">Rata-rata</th>
                  <th class="align-middle max-width">TS-2</th>
                  <th class="align-middle max-width">TS-1</th>
                  <th class="align-middle max-width">TS</th>
                  <th class="align-middle max-width">Rata-rata</th>
                </tr>
              </thead>
              <tbody>
                {tabel_4}
              </tbody>
            </Table>
          </Container>
        </div>
      </>
    )
  }
}
Sarana.propTypes = {
}

export default Sarana;
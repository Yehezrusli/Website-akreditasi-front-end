import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import { If, Then, Else } from 'react-if';
import axios from "axios";
import './Tabel3b2.css';

class Tabel3b2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabel3b2: [],
    };
  }
  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel3b2').then(data => {
      this.setState({ tabel3b2: data.data.result });
    })
  }
  render() {
    const { tabel3b2 } = this.state;
    let tabel3_b_2 = tabel3b2.map((d, i) => <tr>
      <If condition={d.sumberPembiayaan === "Jumlah"}>
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
    return (
      <>
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
      </>
    )
  }
}
Tabel3b2.propTypes = {
}

export default Tabel3b2;
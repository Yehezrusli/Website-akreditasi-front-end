import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import axios from "axios";
import { If, Then, Else } from 'react-if';
import './Tabel3b5.css';

class Tabel3b5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabel3b5: []
    };
  }
  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel3b5').then(data => {
      this.setState({ tabel3b5: data.data.result });
    })
  }

  render() {
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

    return (
      <>
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
      </>
    )
  }
}
Tabel3b5.propTypes = {
}

export default Tabel3b5;
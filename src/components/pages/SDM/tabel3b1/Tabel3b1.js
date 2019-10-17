import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'reactstrap';
import axios from "axios";
import { When } from 'react-if';
import './Tabel3b1.css';

class Tabel3b1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabel3b1: [],
    };
  }

  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel3b1').then(data => {
      this.setState({ tabel3b1: data.data.result });
    })
  }

  render() {
    const { tabel3b1 } = this.state;
    let tabel3_b_1 = tabel3b1.map((d, i) => <tr>
      <td>{d.Nomor}</td>
      <td>{d.NamaDosen}</td>
      <td>{d["Bidang Keahlian"]}</td>
      <td>{d.Rekognisi}</td>
      <td>
        <When condition={d.Wilayah == "V"}>
          <FontAwesomeIcon icon={faCheck} />
        </When>
      </td>
      <td>
        <When condition={d.Nasional == "V"}>
          <FontAwesomeIcon icon={faCheck} />
        </When>
      </td>
      <td>
        <When condition={d.Internasional == "V"}>
          <FontAwesomeIcon icon={faCheck} />
        </When>
      </td>
      <td>{d.Tahun}</td>
    </tr>);
    return (
      <>
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
      </>
    )
  }
}
Tabel3b1.propTypes = {
}

export default Tabel3b1;
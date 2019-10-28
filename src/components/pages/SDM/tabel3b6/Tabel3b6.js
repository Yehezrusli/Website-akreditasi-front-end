import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import axios from "axios";
import { If, Then, Else } from 'react-if';
import './Tabel3b6.css';
class Tabel3b6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabel3b6: []
    };
  }
  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel3b6').then(data => {
      this.setState({ tabel3b6: data.data.result });
    })
  }

  render() {
    const { tabel3b6 } = this.state;
    let tabel3_b_6 = tabel3b6.map((d6, j) => <tr>
      <td>{j+1}</td>
      <td>{d6.NamaDosen}</td>
      <td>{d6.NamaProduk}</td>
      <td>{d6.Deskrispi}</td>
      <td>{d6.Bukti}</td>
    </tr >);

    return (
      <>
        <div>
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.b.6 Produk/jasa DTPS yang diadopsi oleh industri/masyarakat </h3>
        </div>
        <div className="cont_limit">
          <Container fluid="true">
            <Table striped bordered>
              <thead className="text-center">
                <tr>
                  <th class="align-middle">No.</th>
                  <th class="align-middle">Nama Dosen</th>
                  <th class="align-middle">Nama Produk/Jasa</th>
                  <th class="align-middle">Deskripsi Produk/Jasa</th>
                  <th class="align-middle">Bukti</th>
                </tr>
              </thead>
              <tbody>
                {tabel3_b_6}
              </tbody>
            </Table>
          </Container>
        </div>
      </>
    )
  }
}
Tabel3b6.propTypes = {
}

export default Tabel3b6;
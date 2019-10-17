import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { When } from 'react-if';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './Tabel3a4.css';

class Tabel3a4 extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
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
    axios.get('/back-end/index.php/api/tabel3a4').then(data => {
      this.setState({ tabel3a4: data.data.result });
    })
  }
  render() {
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
      </>
    )
  }
}
Tabel3a4.propTypes = {
}

export default Tabel3a4;
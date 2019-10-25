import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { When } from 'react-if';
import { Modal, ModalHeader, ModalBody } from 'reactstrap'; import './Tabel3a3.css';

class Tabel3a3 extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      tabel3a3: [],
      modal: false,
    };
  }
  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel3a3').then(data => {
      this.setState({ tabel3a3: data.data.result });
    })
  }

  render() {
    const { tabel3a3 } = this.state;
    let tabel3_a_3 = tabel3a3.map((d, i) => <tr>
      <td>{i+1}</td>
      <td>{d.Nama}</td>
      <td>
          <When condition={d.isDTPS == "1"}>
            <FontAwesomeIcon icon={faCheck} />
          </When>
      </td>
      <td>{d.PembelajaranPS}</td>
      <td>{d.PembelajaranPSLain}</td>
      <td>{d.PembelajaranPSLuar}</td>
      <td>{d.Penelitian}</td>
      <td>{d.Pkm}</td>
      <td>{d.Tambahan}</td>
      <td>{d.Jumlah}</td>
      <td>{d.Rata2}</td>

    </tr>);
    return (
      <>
        <div>
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.a.3  Ekuivalen Waktu Mengajar Penuh (EWMP) Dosen Tetap Perguruan Tinggi</h3>
        </div>
        <div className="cont_limit">
          <Container fluid={true}>
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
                  <th className="align-middle" colSpan="3">Pendidikan: <br></br>Pembelajaran dan Pembimbingan</th>
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
                {tabel3_a_3}
                <tr>
                  <td colSpan="9">Rata-rata DT</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan="9">Rata-rata DTPS</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </div>
      </>
    )
  }
}
Tabel3a3.propTypes = {
}

export default Tabel3a3;
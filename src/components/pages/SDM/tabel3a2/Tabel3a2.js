import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { When } from 'react-if';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './Tabel3a2.css';

class Tabel3a2 extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      tabel3a2: [],
      modal: false,
    };
  }

  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel3a2').then(data => {
      this.setState({ tabel3a2: data.data.result });
    })
  }

  render(){
    const { tabel3a2 } = this.state;
    let dtps = 0;
    let jumlah = 0;
    let jumlahdtps = 0;
    let tabel3_a_2 = tabel3a2.map((d, i) => {
      jumlah += d.Jumlah;
      if (d.isDTPS == '1') {
        dtps++;
        jumlahdtps += d.Jumlah;
      }
      return <tr>
        <td>{i + 1}</td>
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
      </tr>
    });

    return (
      <>
        <div>
                <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.a.2 Ekuivalen Waktu Mengajar Penuh (EWMP) Dosen Tetap Perguruan Tinggi</h3>
              </div>
              <div className="cont_limit">
                <Container fluid="true">
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
                        <th className="align-middle" colSpan="3">Pendidikan: Pembelajaran dan Pembimbingan</th>
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
                      {tabel3_a_2}
                      <tr>
                        <td colSpan="9">Rata-rata DT</td>
                        <td>{jumlah / tabel3_a_2.length}</td>
                      </tr>
                      <tr>
                        <td colSpan="9">Rata-rata DTPS</td>
                        <td>{jumlahdtps / dtps}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Container>
              </div>

      </>
    )
  }
}
Tabel3a2.propTypes = {
}

export default Tabel3a2;
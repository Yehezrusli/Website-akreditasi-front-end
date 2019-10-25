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
        <td>{d.Nomor}</td>
        <td>{d.NamaDosen}</td>
        <td>{d['TS-2']}</td>
        <td>{d['TS-1']}</td>
        <td>{d.TS}</td>
        <td>{d.Rata2}</td>
        <td>{d['TS-2b']}</td>
        <td>{d['TS-1b']}</td>
        <td>{d.TSb}</td>
        <td>{d.Rata2b}</td>
        <td>{d.Rata2_semua}</td>
      </tr>
    });

    return (
      <>
        <div>
                <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.a.2 Dosen Pembimbing Utama Tugas Akhir</h3>
              </div>
              <div className="cont_limit">
                <Container fluid={true}>
                  <Table striped bordered className="text-center">
                    <thead>
                      <tr>
                        <th className="align-middle" rowSpan="3">No.</th>
                        <th className="align-middle" rowSpan="3">Nama Dosen</th>
                        <th className="align-middle" colSpan="8">Jumlah Mahasiswa yang Dibimbing</th>
                        <th className="temp align-middle" rowSpan="3" >Rata-rata Jumlah Bimbingan di semua Program/ Semester</th>
                      </tr>
                      <tr>
                        <th className="align-middle" colSpan="4">pada PS yang Diakreditasi</th>
                        <th className="align-middle" colSpan="4">pada PS Lain di PT</th>
                      </tr>
                      <tr>
                        <th className="align-middle">TS-2</th>
                        <th className="align-middle">TS-1</th>
                        <th className="align-middle">TS</th>
                        <th className="align-middle">Rata-rata</th>
                        <th className="align-middle">TS-2</th>
                        <th className="align-middle">TS-1</th>
                        <th className="align-middle">TS</th>
                        <th className="align-middle">Rata-rata</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tabel3_a_2}
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
import React, { Component } from 'react';
import { Table, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Chart } from "react-google-charts";
import { Container } from 'reactstrap';
import './Mahasiswa.css';
import { Input, FormGroup } from 'reactstrap';
import axios from "axios";

class Mahasiswa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabel6a: [],
      tabel6: [],
      modal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  update(e) {
    var x = this.state.tabel3a;
    let searchQuery = e.target.value;
    let regexer = new RegExp(searchQuery, "i");
    this.setState({
      tabel6: this.state.tabel6a.filter(d => searchQuery.length == 0 || d.namaDosen.match(regexer))
    });
  }

  toggleModal() {
    if (this.state.modal == true) {
      this.setState({ modal: false });
    } else {
      this.setState({ modal: true });
    }
  }
  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel6a').then(data => {
      this.setState({ tabel6a: data.data.result, tabel6: data.data.result });
    })
  }

  render() {
    const { tabel6a, tabel6 } = this.state;
    let jml2016 = 0;
    let jml2017 = 0;
    let jml2018 = 0;
    let jml2019 = 0;
    let jml2020 = 0;
    let tabel_6_a = tabel6.map((d, i) => {
      if (d.tahun == 2016) {
        jml2016++;
      } else if (d.tahun == 2017) {
        jml2017++;
      } else if (d.tahun == 2018) {
        jml2018++;
      } else if (d.tahun == 2019) {
        jml2019++;
      } else {
        jml2020++;
      }
      return <tr>
        <td>{i + 1}</td>
        <td style={{textAlign:'left', width: 250}}>{d.namaDosen}</td>
        <td>{d.temaPenelitian}</td>
        <td>{d.namaMahasiswa}</td>
        <td className="text-left">{d.judulKegiatan}</td>
        <td>{d.tahun}</td>
      </tr>
    });

    return (
      <>
        <div className="Mahasiswa">
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 6 Penelitian DTPS yang melibatkan mahasiswa </h3>
        </div>
        <div className="cont_limit">
          <Container fluid="true">
            <Button color="primary" className="grafik" onClick={() => {
              this.setState({
                modal: true
              });
            }}>Grafik</Button>
            <Col md={3} className="go-right input">
              <FormGroup className="input">
                <Input type="text" onChange={this.update.bind(this)} placeholder="Cari Dosen" />
              </FormGroup>
            </Col>
            <Table striped bordered responsive className="text-center">
              <thead>
                <tr>
                  <th style={{width: 10}} className="align-middle">No.</th>
                  <th className="align-middle">Nama Dosen</th>
                  <th className="align-middle">Tema Penelitian Sesuai Roadmap</th>
                  <th className="align-middle">Nama Mahasiswa</th>
                  <th className="align-middle">Judul Kegiatan</th>
                  <th className="align-middle">Tahun</th>
                </tr>
              </thead>
              <tbody>
                {tabel_6_a}
                <tr>
                  <td colSpan="5">Jumlah </td>
                  <td>{tabel_6_a.length}</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </div>

        <div>
          <Modal size={'xl'} isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
            <ModalHeader toggle={this.toggleModal}>Grafik Tahun Penelitian yang Melibatkan Mahasiswa</ModalHeader>
            <ModalBody>
              <Container>
                <Col md={12} style={{ float: 'left' }}>
                  <Chart
                    width={'1000px'}
                    height={'450px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Tahun', 'Jumlah'],
                      ['2016', jml2016],
                      ['2017', jml2017],
                      ['2018', jml2018],
                      ['2019', jml2019],
                      ['2020', jml2020],
                    ]}
                    options={{
                      title: 'Penelitian yang Melibatkan Mahasiswa',
                      is3D: false,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                  />
                </Col>
              </Container>
            </ModalBody>
          </Modal>
        </div >
      </>
    )
  }
}
Mahasiswa.propTypes = {
}

export default Mahasiswa;
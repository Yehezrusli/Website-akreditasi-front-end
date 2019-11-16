import React, { Component } from 'react';
import { Table, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Chart } from "react-google-charts";
import { Container } from 'reactstrap'; 
import './Mahasiswa.css';
import axios from "axios";

class Mahasiswa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabel6a: [],
      modal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
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
      this.setState({ tabel6a: data.data.result });
    })
  }

  render() {
    const { tabel6a } = this.state;
    var tahun = [];
    let jml2016 = 0;
    let jml2017 = 0;
    let jml2018 = 0;
    let jml2019 = 0;
    let jml2020 = 0;
    let jmltotal = 0;
    let tabel_6_a = tabel6a.map((d, i) => {
      if (d.tahun == 2016){
        jml2016++;
      } else if (d.tahun == 2017){
        jml2017++;
      } else if (d.tahun == 2018){
        jml2018++;
      } else if (d.tahun == 2019){
        jml2019++;
      } else {
        jml2020++;
      }
      tahun[0] = jml2016;
      tahun[1] = jml2017;
      tahun[2] = jml2018;
      tahun[3] = jml2019;
      tahun[4] = jml2020;
      jmltotal++;

      console.log("TESTT", tahun[0]);
      console.log("TESTT", d.tahun%2016);

      return <tr>
        <td>{i + 1}</td>
        <td>{d.namaDosen}</td>
        <td>{d.temaPenelitian}</td>
        <td>{d.namaMahasiswa}</td>
        <td>{d.judulKegiatan}</td>
        <td>{d.tahun}</td>
      </tr>});

    return (
      <>
        <div className="Mahasiswa">
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 6.a Penelitian DTPS yang melibatkan mahasiswa </h3>
        </div>  
        <div className="cont_limit">
        <Container fluid="true">
          {/* --------- */}
            <Button color="primary" className="grafik" onClick={() => {
              this.setState({
                modal: true
              });
            }}>Grafik</Button>
            <Table striped bordered responsive className="text-center">
              <thead>
                <tr>
                  <th class="align-middle">No.</th>
                  <th class="align-middle">Nama Dosen</th>
                  <th class="align-middle">Tema Penelitian Sesuai Roadmap</th>
                  <th class="align-middle">Nama Mahasiswa</th>
                  <th class="align-middle">Judul Kegiatan</th>
                  <th class="align-middle">Tahun</th>
                </tr>
              </thead>
              <tbody>
                {tabel_6_a}
                <tr>
                  <td colSpan="5">Jumlah </td>
                  <td>{jmltotal}</td>
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
                    ['2016', tahun[0]],
                    ['2017', tahun[1]],
                    ['2018', tahun[2]],
                    ['2019', tahun[3]],
                    ['2020', tahun[4]],
                  ]}
                  options={{
                    title: 'Penelitian yang Melibatkan Mahasiswa',
                    is3D: true,
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
import React, { Component } from 'react';
import { Table, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Chart } from "react-google-charts";
import { Container } from 'reactstrap';
import axios from "axios";
import './PengabdianMasyarakat.css';

class PengabdianMasyarakat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabel7: [],
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
    axios.get('/back-end/index.php/api/tabel7').then(data => {
      this.setState({ tabel7: data.data.result });
    })
  }

  render() {
    const { tabel7 } = this.state;
    let jml2016 = 0;
    let jml2017 = 0;
    let jml2018 = 0;
    let jml2019 = 0;
    let jml2020 = 0;
    let tabel = tabel7.map((d, i) => {
      
      // console.log("TESTT", d.tahun.substr(0,4));

      if (d.tahun.substr(0,4) == "2016"){
        jml2016++;
      } else if (d.tahun.substr(0,4) == "2017"){
        jml2017++;
      } else if (d.tahun.substr(0,4) == "2018"){
        jml2018++;
      } else if (d.tahun.substr(0,4) == "2019"){
        jml2019++;
      } else {
        jml2020++;
      }
      console.log("TESTT", jml2018);

      return <tr>
        <td>{i + 1}</td>
        <td>{d.namaDosen}</td>
        <td>{d.temaPKM}</td>
        <td>{d.namaMahasiswa}</td>
        <td>{d.judulKegiatan}</td>
        <td>{d.tahun}</td>
      </tr>});

    return (
      <>
        <div className="TataPamong">
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 7 PkM DTPS yang melibatkan mahasiswa </h3>
        </div>
        <div className="cont_limit">
          <Container fluid="true">
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
                  <th class="align-middle">Tema PkM Sesuai Roadmap</th>
                  <th class="align-middle">Nama Mahasiswa</th>
                  <th class="align-middle">Judul Kegiatan</th>
                  <th class="align-middle">Tahun</th>
                </tr>
              </thead>
              <tbody>
                {tabel}
              </tbody>
            </Table>
          </Container>
        </div>

        <div>
          <Modal size={'xl'} isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
            <ModalHeader toggle={this.toggleModal}>Grafik Tahun PkM DTPS yang Melibatkan Mahasiswa</ModalHeader>
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
                    title: 'PkM DTPS yang Melibatkan Mahasiswa',
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
PengabdianMasyarakat.propTypes = {
}

export default PengabdianMasyarakat;
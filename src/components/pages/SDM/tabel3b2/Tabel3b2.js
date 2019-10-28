import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import { Table, Col } from 'reactstrap';
import { Container } from 'reactstrap';
import { If, Then, Else } from 'react-if';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";
import './Tabel3b2.css';

class Tabel3b2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabel3b2: [],
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
    axios.get('/back-end/index.php/api/tabel3b2').then(data => {
      this.setState({ tabel3b2: data.data.result });
    })
  }

  render() {
    const { tabel3b2 } = this.state;
    var jumlah = [];
    var ts2 = [];
    var ts1 = [];
    var ts = [];
    let tabel3_b_2 = tabel3b2.map((d, i) => {
      ts2[i] = d.ts2;
      ts1[i] = d.ts1;
      ts[i] = d.ts;
      jumlah[i] = d.jumlah;
      console.log("TESTT", jumlah[i]);
      return <tr>
        <If condition={d.sumberPembiayaan === "Jumlah"}>
          <Then>
            <td colSpan="2">{d.sumberPembiayaan}</td>
            <td>{d.ts2}</td>
            <td>{d.ts1}</td>
            <td>{d.ts}</td>
            <td>{d.jumlah}</td>
          </Then>
          <Else>
            <td>{i + 1}</td>
            <td className="text-left">{d.sumberPembiayaan}</td>
            <td>{d.ts2}</td>
            <td>{d.ts1}</td>
            <td>{d.ts}</td>
            <td>{d.jumlah}</td>
          </Else>
        </If>
      </tr>
    });
    return (
      <>
        <div>
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 3.b.2 Penelitian DTPS</h3>
        </div>
        <div className="cont_limit">
          <Container fluid="true">
            <Button color="primary" className="grafik" onClick={() => {
              console.log("masuk");
              this.setState({
                modal: true
              });
            }}>Tampilkan Grafik</Button>
            <Table striped bordered className="text-center">
              <thead>
                <tr>
                  <th class="align-middle" rowSpan="2">No.</th>
                  <th class="align-middle" rowSpan="2">Sumber Pembiayaan</th>
                  <th class="align-middle" colSpan="3">Jumlah Judul</th>
                  <th class="align-middle" rowSpan="2">Jumlah</th>
                </tr>
                <tr>
                  <th class="align-middle">TS-2</th>
                  <th class="align-middle">TS-1</th>
                  <th class="align-middle">TS</th>
                </tr>
              </thead>
              <tbody>
                {tabel3_b_2}
              </tbody>
            </Table>
          </Container>
        </div>

        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
            <ModalHeader toggle={this.toggleModal}>Grafik Pembiayaan Penelitian DTPS</ModalHeader>
            <ModalBody>
              <Container>
                <Chart
                  chartType="BarChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Sumber Pembiayaan', 'Jumlah'],
                    ['Perguruan Tingga dan Mandiri', ts2[0]],
                    ['Lembaga dalam Negeri', ts2[1]],
                    ['Lembaga Luar Negeri', ts2[2]],
                    ['Jumlah', ts2[3]],
                  ]}
                  options={{
                    title: 'Pembiyaan TS2',
                    chartArea: { width: '100%' },
                    hAxis: {
                      title: 'Data',
                      minValue: 0,
                    },
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
              </Container>
              <Container>
                <Chart
                  chartType="BarChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Sumber Pembiayaan', 'Jumlah'],
                    ['Perguruan Tingga dan Mandiri', ts1[0]],
                    ['Lembaga dalam Negeri', ts1[1]],
                    ['Lembaga Luar Negeri', ts1[2]],
                    ['Jumlah', ts1[3]],
                  ]}
                  options={{
                    title: 'Pembiyaan TS1',
                    chartArea: { width: '100%' },
                    hAxis: {
                      title: 'Data',
                      minValue: 0,
                    },
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
              </Container>
              <Container>
                <Chart
                  chartType="BarChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Sumber Pembiayaan', 'Jumlah'],
                    ['Perguruan Tingga dan Mandiri', ts[0]],
                    ['Lembaga dalam Negeri', ts[1]],
                    ['Lembaga Luar Negeri', ts[2]],
                    ['Jumlah', ts[3]],
                  ]}
                  options={{
                    title: 'Pembiyaan TS',
                    chartArea: { width: '100%' },
                    hAxis: {
                      title: 'Data',
                      minValue: 0,
                    },
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
              </Container>
              <Container>
                <Chart
                  chartType="BarChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Sumber Pembiayaan', 'Jumlah'],
                    ['Perguruan Tingga dan Mandiri', jumlah[0]],
                    ['Lembaga dalam Negeri', jumlah[1]],
                    ['Lembaga Luar Negeri', jumlah[2]],
                    ['Jumlah', jumlah[3]],
                  ]}
                  options={{
                    title: 'Jumlah',
                    chartArea: { width: '100%' },
                    hAxis: {
                      title: 'Data',
                      minValue: 0,
                    },
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
              </Container>
              <Container>
                <Chart
                  chartType="BarChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Sumber Pembiayaan', 'ts2', 'ts1', 'ts', 'jumlah'],
                    ['Perguruan Tingga dan Mandiri', ts2[0], ts1[0], ts[0], jumlah[0]],
                    ['Lembaga dalam Negeri', ts2[1], ts1[1], ts[1], jumlah[1]],
                    ['Jumlah', ts2[3], ts1[3], ts[3], jumlah[3]],
                  ]}
                  options={{
                    title: 'Jumlah',
                    chartArea: { width: '100%' },
                    hAxis: {
                      title: 'Data',
                      minValue: 0,
                    },
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
              </Container>
            </ModalBody>
          </Modal>
        </div>
      </>
    )
  }
}
Tabel3b2.propTypes = {
}

export default Tabel3b2;
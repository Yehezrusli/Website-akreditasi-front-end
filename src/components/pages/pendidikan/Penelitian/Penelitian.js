import React, {Component} from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap'; 
import axios from "axios";
import './Penelitian.css';

class Penelitian extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabel5b: []
    };
  }

  componentDidMount() {
    axios.get('/back-end/index.php/api/tabel5b').then(data => {
      this.setState({ tabel5b: data.data.result });
    })
  }

  render(){
    const { tabel5b } = this.state;
    let tabel_5_b = tabel5b.map((d, i) => <tr>
      <td>{i + 1}</td>
      <td>{d.judul}</td>
      <td>{d.dosen}</td>
      <td>{d.namaMatakuliah}</td>
      <td>{d.bentukIntegrasi}</td>
    </tr>);
    return (
      <>
        <div className="TataPamong">
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 5.b Integrasi Kegiatan Penelitian/PkM dalam Pembelajaran </h3>
        </div>  
        <div className="cont_limit">
          <Container fluid="true">
            <Table striped bordered responsive className="text-center">
              <thead>
                <tr>
                  <th class="align-middle">No.</th>
                  <th class="align-middle">Judul Penelitian/PkM</th>
                  <th class="align-middle">Nama Dosen</th>
                  <th class="align-middle">Mata Kuliah</th>
                  <th class="align-middle">Bentuk Integrasi</th>
                </tr>
              </thead>
              <tbody>
                {tabel_5_b}
              </tbody>
            </Table>
          </Container>
        </div>
      </>
    )
  }
}
Penelitian.propTypes = {
}

export default Penelitian;
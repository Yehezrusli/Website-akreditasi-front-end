import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TataPamong.css';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


class TataPamong extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="TataPamong">
          <h3 className="text-black font-weight-light my-5 text-center">Tabel 1. Kerjasama Tridharma</h3>
        </div>
        <Container>
          <Table striped bordered className="text-center">
            <thead>
              <tr>
                <th class="align-middle" rowSpan = "2">No.</th>
                <th class="align-middle" rowSpan = "2">Lembaga Mitra</th>
                <th class="align-middle" colSpan="3">Tingkat</th>
                <th class="align-middle" rowSpan = "2">Judul Kegiatan Kerjasama</th>
                <th class="align-middle" rowSpan = "2">Manfaat bagi PS yang Diakreditasi</th>
                <th class="align-middle" rowSpan = "2">Waktu dan Durasi</th>
                <th class="align-middle" rowSpan = "2">Bukti Kerjasama</th>
              </tr>
              <tr>
                <th>Internasional</th>
                <th>Nasional</th>
                <th>Lokal/Wilayah</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Own Games</td>
                <td></td>
                <td>V</td>
                <td></td>
                <td>Kerjasama Pendidikan</td>
                <td>Menambah relasi dan kinerja alumni</td>
                <td>2016 - 2019</td>
                <td>Piagam Kerjasama</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Jumlah</th>
                <td>1</td>
                <td></td>
                <td>1</td>
                <td></td>

              </tr>

            </tbody>
          </Table>

        </Container>

      </>
    )
  }
}
TataPamong.propTypes = {
}

export default TataPamong;
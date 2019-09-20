import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Tamong from './components/pages/tataPamong/TataPamong';
import Home from './components/pages/home/Home';
import Input from './components/pages/mahasiwa/Input/Input';
import Asing from './components/pages/mahasiwa/Asing/Asing';
import Profil from './components/pages/SDM/Profil/Profil';
import Kinerja from './components/pages/SDM/Kinerja/Kinerja';
import Sarana from './components/pages/sarana/Sarana';
import Kepuasan from './components/pages/pendidikan/Kepuasan/Kepuasan';
import Kurikulum from './components/pages/pendidikan/Kurikulum/Kurikulum';
import Penelitian from './components/pages/pendidikan/Penelitian/Penelitian';
import Mahasiswa from './components/pages/penelitian/Mahasiswa/Mahasiswa';
import Disertasi from './components/pages/penelitian/Disertasi/Disertasi';
import PengabdianMasyarakat from './components/pages/pengabdianMasyarakat/PengabdianMasyarakat';
import CapaianPembelajaran from './components/pages/capaian/capaianPembelajaran/CapaianPembelajaran';
import DayaSaing from './components/pages/capaian/DayaSaing/DayaSaing';
import KinerjaLulusan from './components/pages/capaian/KinerjaLulusan/KinerjaLulusan';
import PrestasiMahasiswa from './components/pages/capaian/prestasiMahasiswa/PrestasiMahasiswa';
import Produktivitas from './components/pages/capaian/Produktivitas/Produktivitas';
import PenelitianPkm from './components/pages/capaian/PenelitianPkM/PenelitianPkM';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tataPamong" component={Tamong} />
            <Route path="/inputMahasiswa" component={Input} />
            <Route path="/mahasiswaAsing" component={Asing} />
            <Route path="/profilDosen" component={Profil} />
            <Route path="/kinerjaDosen" component={Kinerja} />
            <Route path="/keuanganSarana" component={Sarana} />
            <Route path="/kepuasanMahasiswa" component={Kepuasan} />
            <Route path="/kurikulum" component={Kurikulum} />
            <Route path="/penelitian" component={Penelitian} />
            <Route path="/melibatkanMahasiswa" component={Mahasiswa} />
            <Route path="/rujukanDisertasi" component={Disertasi} />
            <Route path="/pengabdianMasyarakat" component={PengabdianMasyarakat} />
            <Route path="/capaianPembelajaran" component={CapaianPembelajaran} />
            <Route path="/kinerjaLulusan" component={KinerjaLulusan} />
            <Route path="/dayaSaing" component={DayaSaing} />
            <Route path="/prestasiMahasiswa" component={PrestasiMahasiswa} />
            <Route path="/produktivitas" component={Produktivitas} />
            <Route path="/penelitianPkm" component={PenelitianPkm} />
          </Switch>
        </Router>
      </div>
    )

  }
}
export default App;

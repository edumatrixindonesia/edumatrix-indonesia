import React from "react";
import "./landingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../asset/logo_edm.png";
import student from "../asset/foto_siswa_sd-sma.png";
import button from "../asset/telephone .png";
import siswaBelajar from "../asset/siswa_belajar.png";
import guru from "../asset/master_teacher.png";
import siswaBerhasil from "../asset/siswa_berhasil.png";
import tingkatKepuasan from "../asset/tingkat_kepuasan_siswa.png";
import mahasiswa from "../asset/foto_mahasiswa.png";
import wave from "../asset/wave.png"

const landingPage = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <img className="logo-edm" src={logo} alt="" />
      </div>

      <div className="main-box">
        <div className="main-title">
          <h1 className="title-edm">
            Edumatrix Indonesia, Bimbingan Belajar Les Privat
          </h1>
          <p className="main-paragraf">
            Hanya di Edumatrix Indonesia, program belajar SD, SMP, SMA untuk
            seluruh siswa di Indonesia disertai dengan layanan konsultasi
            akademik, dan kualitas belajar yang terukur.
          </p>

          <a
            className="btn-daftar"
            href="https://api.whatsapp.com/send?phone=+6281215523902&text=Halo%20Kak Eka%2C%20Saya%20ingin%20bertanya%20mengenai%20Bimbel%20di Edumatrix Indonesia%20Terima%20kasih."
          >
            <img className="btn-png" src={button} alt="" />
          </a>
        </div>

        <img className="img-student" src={student} alt="" />
      </div>

      <div className="parent-detail">
        <div className="box-detail">
          <div className="siswa-belajar">
            <img className="img-siswa-belajar" src={siswaBelajar} alt="" />
            <div className="desk-siswa-belajar">
              <p className="angka">
                7.312 + <br /> <span className="span-desk">Siswa Belajar</span>
              </p>
            </div>
          </div>

          {/* ------------------------------------------ */}

          <div className="siswa-belajar">
            <img className="img-siswa-belajar" src={guru} alt="" />
            <div className="desk-siswa-belajar">
              <p className="angka">
                2.613
                <br /> <span className="span-desk">Master Teacher</span>
              </p>
            </div>
          </div>

          {/* ------------------------------------------ */}

          <div className="siswa-belajar">
            <img className="img-siswa-belajar" src={siswaBerhasil} alt="" />
            <div className="desk-siswa-belajar">
              <p className="angka">
                90% <br /> <span className="span-desk">Siswa Berhasil</span>
              </p>
            </div>
          </div>

          {/* ------------------------------------------ */}

          <div className="siswa-belajar">
            <img className="img-siswa-belajar" src={tingkatKepuasan} alt="" />
            <div className="desk-siswa-belajar">
              <p className="angka">
                1/9 <br />{" "}
                <span className="span-desk">Tingkat Kepuasan Siswa</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*-----------------------WELCOME-----------------------*/}

      <div className="welcome-edm">
        <h1 className="title-welcome">Selamat Datang di Edumatrix Indonesia</h1>

        <div className="content-welcome">
          <div className="teks-welcome">
            <p className="p-welcome">
              Kami Adalah Lembaga Penyedia Jasa Guru Les Privat ke rumah untuk
              Calistung, TK, SD, SMP, SMA, UN, OSN, UTBK, Simak UI, dan SBMPTN
              di Jabodetabek Terbaik dan Pengalaman. Guru Datang ke Rumah
              Belajar Satu Guru Satu Siswa , Belajar Berdasarkan Keahlian Guru.
              Dengan Konsep Belajar Sesuai Dengan Kurikulum Yang di Terapkan di
              Sekolah.
            </p>
          </div>

          <img className="img-mahasiswa" src={mahasiswa} alt="" />
        </div>
      </div>

      <div className="icon-call">
        <div className="parent-boxcall1">
          <div className="box-call">
            Need Help? <strong>Chat with us</strong>
          </div>
        </div>
        <div className="whatsapp">
          <a href="https://api.whatsapp.com/send?phone=+6281215523902&text=Halo%20Kak Eka%2C%20Saya%20ingin%20bertanya%20mengenai%20Bimbel%20di Edumatrix Indonesia%20Terima%20kasih.">
            <FontAwesomeIcon className="icon-wa" icon={faWhatsapp} />
          </a>
        </div>

        <div className="parent-boxcall2">
          <div className="box-call">
            Need Help? <strong>Call with us</strong>
          </div>
        </div>
        <div className="phone">
          <a href="tel:+6281215523902" target="blank">
            <FontAwesomeIcon className="icon-phone" icon={faPhone} />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default landingPage;

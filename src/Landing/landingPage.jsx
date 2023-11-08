import React, { useState } from "react";
import "./landingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faCircle, faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../asset/logo_edm.png";
import student from "../asset/jumbotron.png";
import button from "../asset/telephone .png";
import siswaBelajar from "../asset/siswa_belajar.png";
import guru from "../asset/master_teacher.png";
import siswaBerhasil from "../asset/siswa_berhasil.png";
import tingkatKepuasan from "../asset/tingkat_kepuasan_siswa_2.png";
import mahasiswa from "../asset/foto_mahasiswa.png";
import Number from "../Number/number";
import univ from "../asset/kurikulum/univ.png";
import nasional from "../asset/kurikulum/kurikulum_nasional.png";
import internasional from "../asset/kurikulum/kurikulum_internasional.png";
import montessori from "../asset/kurikulum/kurikulum_montessori.png";
import ib from "../asset/kurikulum/international_baccalaureate.png";
import ipc from "../asset/kurikulum/ipc_.png";
import spc from "../asset/kurikulum/singapore_curriculum.png";
import cambridge from "../asset/kurikulum/cambridge.png";
import Slide from "../Carousel/Carousel";
import Accordion from "../Accordion/Accordion";
import sd from "../asset/sekolah/sd.png";
import smp from "../asset/sekolah/smp.png";
import sma from "../asset/sekolah/sma.png";
import osn from "../asset/sekolah/osn.png";
import Footer from "../Footer/Footer";
import ptnTernama from "../asset/kualifikasi/lulusan_PTN.png";
import berpengalamanMengajar from "../asset/kualifikasi/berpengalaman_mengajar.png";
import requestMt from "../asset/kualifikasi/Rquest_master.png";
import promo from "../asset/promo/promo_edit.png";
import top3 from "../asset/mt/top 3 title.png";
import mtTop3 from "../asset/mt/top teacher.png";
import testi from "../asset/testimoni/APA_KATA_MEREKA.png";
import model from "../asset/landing1.png";
// TESTIMONI
import shinta from "../asset/testimoni/shinta.png";
import yolanda from "../asset/testimoni/yolanda.png";
import natasya from "../asset/testimoni/natasha.jpeg";
import gabriela from "../asset/testimoni/gabriela.png";
import azlia from "../asset/testimoni/azlia.jpeg";
import novandi from "../asset/testimoni/novandi.jpeg";
import videoJesica from "../asset/testimoni/jessica.mp4";
import videoAidil from "../asset/testimoni/M. AIDIL S.mp4";
import videoCahaya from "../asset/testimoni/NI CAHAYA.mp4";
import videoGabriella from "../asset/testimoni/GABRIELLA M.mp4";
import thumbJessica from "../asset/testimoni/thumbnail-jessica.jpg";
// MASTER TAEACHER
import ai from "../asset/mt/Ai Fatmawati.png";
import firda from "../asset/mt/Firda Febriana Azahra.png";
import hairul from "../asset/mt/Hairul Umam.png";
import ika from "../asset/mt/Ika Istiana.png";
import ilman from "../asset/mt/Ilman Hajar.png";
import mella from "../asset/mt/Mella Narolita.png";
import arinal from "../asset/mt/Muhammad Arinal Haq.png";
import novia from "../asset/mt/Novia Rahmawaty Putri.png";
import paranti from "../asset/mt/Paranti.png";
import vicho from "../asset/mt/Vicho Afrianto.png";
import yona from "../asset/mt/Yona Tirta Sari.png";
import Marquee from "../Marquee/Marquee";

const landingPage = () => {
  // const [click, setClick] = useState(0);

  // const handleClick = () => {
  //   setClick(click+1)
  //   console.log(clic);
  // }

  return (
    <React.Fragment>
      <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia%2C%20Saya%20ingin%20daftar%20Bimbel%20di%20Edumatrix%20Indonesia%20menggunakan%20*PROMO%2011.11*%20Terima%20kasih.">
        <div className="banner-promo">
          <img className="img-promo" src={promo} alt="" />
          <button className="btn-promo">
            <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia%2C%20Saya%20ingin%20daftar%20Bimbel%20di%20Edumatrix%20Indonesia%20menggunakan%20*PROMO%2011.11*%20Terima%20kasih."></a>
          </button>
        </div>
      </a>
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
            href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia%2C%20Saya%20ingin%20bertanya%20mengenai%20Bimbel%20di%20Edumatrix%20Indonesia%20Terima%20kasih."
          >
            <img className="btn-png" src={button} alt="" />
          </a>
        </div>

        <img className="img-student" src={student} alt="" />
      </div>

      <div className="parent-detail">
        <div className="box-detail">
          <div className="siswa-belajar">
            <img className="img-siswa-belajar1" src={siswaBelajar} alt="" />
            <div className="desk-siswa-belajar">
              <p className="angka">
                <span className="animate-number">
                  <Number n={7312} /> +
                </span>{" "}
                <span className="span-desk">Siswa Belajar</span>
              </p>
            </div>
          </div>

          {/* ------------------------------------------ */}

          <div className="siswa-belajar">
            <img className="img-siswa-belajar" src={guru} alt="" />
            <div className="desk-siswa-belajar">
              <p className="angka">
                <span className="animate-number">
                  <Number n={2613} /> +
                </span>
                <span className="span-desk">Master Teacher</span>
              </p>
            </div>
          </div>

          {/* ------------------------------------------ */}

          <div className="siswa-belajar">
            <img className="img-siswa-belajar" src={siswaBerhasil} alt="" />
            <div className="desk-siswa-belajar">
              <p className="angka">
                <span className="animate-number">
                  <Number n={90} /> %
                </span>{" "}
                <span className="span-desk">Siswa Berhasil</span>
              </p>
            </div>
          </div>

          {/* ------------------------------------------ */}

          <div className="siswa-belajar">
            <img className="img-siswa-belajar" src={tingkatKepuasan} alt="" />
            <div className="desk-siswa-belajar">
              <p className="angka">
                <span className="animate-number">
                  <Number n={9} /> /10
                </span>{" "}
                <span className="span-desk">Tingkat Kepuasan Siswa</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*-----------------------WELCOME-----------------------*/}

      <div className="welcome-edm">
        <div className="content-welcome">
          <div className="teks-welcome">
            <h1 className="title-welcome">
              Edumatrix Indonesia, Program Belajar Terlengkap{" "}
            </h1>
            <p className="p-welcome">
              Lembaga bimbingan belajar terbaik untuk SD, SMP, SMA, OSN, SNBT &
              Ujian Mandiri. Dengan sistem belajar offline tatap muka, guru
              datang kerumah, atau online.
              <div className="point-welcome">
                <span className="metode-belajar-tersedia">
                  <h3 className="text-animation">Metode belajar kelas yang disediakan :</h3>
                </span>

                <div className="child-point-welcome">
                  <span className="point-kelas">
                    <FontAwesomeIcon
                      className="icon-metode-tersedia"
                      icon={faCheck}
                    />{" "}
                    Classroom
                  </span>

                  <span className="point-kelas">
                    <FontAwesomeIcon
                      className="icon-metode-tersedia"
                      icon={faCheck}
                    />{" "}
                    Privat 1 Guru 1 Siswa/ small class
                  </span>

                  <span className="point-kelas">
                    <FontAwesomeIcon
                      className="icon-metode-tersedia"
                      icon={faCheck}
                    />{" "}
                    Kurikulum Nasional & Internasional
                  </span>

                  <span className="point-kelas">
                    <FontAwesomeIcon
                      className="icon-metode-tersedia"
                      icon={faCheck}
                    />{" "}
                    Kegiatan belajar menyesuaikan kebutuhan siswa
                  </span>

                  <span className="point-kelas">
                    <FontAwesomeIcon
                      className="icon-metode-tersedia"
                      icon={faCheck}
                    />{" "}
                    Pengajar Profesional, muda dan Berpengalaman
                  </span>
                </div>
              </div>
            </p>
          </div>

          <img className="img-mahasiswa" src={mahasiswa} alt="" />
        </div>
      </div>

      {/* <div className="icon-call">
        <div className="parent-boxcall1">
          <div className="box-call">
            Need Help? <strong>Chat with us</strong>
          </div>
        </div>
        <div className="whatsapp">
          <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia%2C%20Saya%20ingin%20bertanya%20mengenai%20Bimbel%20di%20Edumatrix%20Indonesia%20Terima%20kasih.">
            <FontAwesomeIcon className="icon-wa" icon={faWhatsapp} />
          </a>
        </div>

        <div className="parent-boxcall2">
          <div className="box-call">
            Need Help? <strong>Call with us</strong>
          </div>
        </div>
        <div className="phone">
          <a href="tel:+6285600422188" target="blank">
            <FontAwesomeIcon className="icon-phone" icon={faPhone} />
          </a>
        </div>
      </div> */}

      {/*-----------------------PENGAJAR LULUSAN TERBAIK-----------------------*/}

      <div className="parent-pengajar">
        <div className="box-pengajar">
          <h1 className="title-pengajar">
            Pengajar berasal dari lulusan <br />
            Kampus terbaik
          </h1>
        </div>
        <div className="parent-paragraf">
          <p className="p-pengajar">
            Master Teacher Edumatrix adalah Guru Sekolah, Dosen, Awardee LPDP
            Dalam & Luar Negeri. Pengajar juga merupakan lulusan Perguruan
            Tinggi Negeri atau Luar Negeri terbaik seperti UI, UGM, ITB, UNAIR,
            UNPAD, STAN, STIS, UIN, The University of Adelaide, Università
            degli, Novosibirsk State University, The University of Manchester
            dan Perguruan Tinggi terbaik lainnya.
          </p>
        </div>
        <div className="parent-univ">
          <img className="img-univ" src={univ} alt="" />
        </div>

        <div className="parent-mt">
          <h1 className="title-mt">
            Master Teacher Edumatrix Bisa Mengajar Semua Kurikulum
          </h1>
        </div>
      </div>

      {/* NASIONAL */}
      <div className="big-parent-card">
        <div className="card">
          <div className="header-card">
            <h3 className="title-card-nasional">Kurikulum Nasional</h3>
          </div>
          <div className="parent-img-nasional">
            <img className="img-card-nasional" src={nasional} alt="" />
          </div>
          <div className="parent-desk">
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
              Kurikulum Merdeka
            </p>
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
              Kurikulum 2013
            </p>
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} /> Ujian
              Nasional/Assesmen Nasional Pengganti UN
            </p>
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} /> KTSP
            </p>
          </div>
        </div>

        {/* -------------------------------------------------- */}

        {/* INTERNASIONAL */}
        <div className="card">
          <div className="header-card">
            <h3 className="title-card-internasional">
              Kurikulum Internasional
            </h3>
          </div>
          <div className="parent-img-internasional">
            <img className="img-card" src={internasional} alt="" />
          </div>
          <div className="parent-desk">
            <p>
              Tidak hanya bimbingan belajar untuk kurikulum nasional, Edumatrix
              juga menyediakan pembelajaran bagi Siswa yang bersekolah dengan
              pengaplikasian kurikulum internasional
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------- */}

      {/* PENGAPLIKASIAN KURIKULUM INTERNSIONAL */}

      <div className="pengaplikasian-kurikulum">
        <h1 className="title-pengaplikasian">
          Berikut Pengaplikasian Kurikulum Internasional di Edumatrix
        </h1>
      </div>

      {/* INTERNASIONAL */}
      <div className="big-parent-card">
        <div className="card">
          <div className="header-card">
            <h3 className="title-card-internasional">Kurikulum Montessori</h3>
          </div>
          <div className="parent-img-internasional">
            <img className="img-card" src={montessori} alt="" />
          </div>
          <div className="parent-desk">
            <p className="icon-teks-pengaplikasian">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} /> Tahap
              Awal (0-6 tahun)
              <br />
              Fokus ke: Bahasa dan Matematika.
            </p>
            <p className="icon-teks-pengaplikasian">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} /> Tahap
              Kedua (6-12 tahun)
              <br />
              Fokus ke: pelajaran alam semesta dan aspek budaya.
            </p>
            <p className="icon-teks-pengaplikasian">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} /> Tahap
              Ketiga (12-18 tahun)
              <br />
              Fokus ke: pengenalan karakteristik remaja.
            </p>
            <p className="icon-teks-pengaplikasian">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} /> Tahap
              Keempat (18-24 tahun)
              <br />
              Fokus ke: pembelajaran dewasa.
            </p>
          </div>
        </div>

        {/* -------------------------------------------------- */}

        {/* INTERNASIONAL */}
        <div className="card">
          <div className="header-card">
            <h3 className="title-card-internasional">
              International Baccalaureate (IB)
            </h3>
          </div>
          <div className="parent-img-internasional">
            <img className="img-card-ib" src={ib} alt="" />
          </div>
          <div className="parent-teks-subject">
            <p className="subject-teks">Subjects</p>
          </div>
          <div className="parent-desk">
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
              Matematika
            </p>
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} /> Seni
            </p>
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
              Pelajaran sosial
            </p>
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} /> Bahasa
            </p>
          </div>
          <div className="parent-teks-subject">
            <p className="subject-teks">Komponen mata pelajaran</p>
          </div>
          <div className="parent-desk">
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
              Extended Essay
            </p>
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} /> TOK
              (Theory of Knowledge)
            </p>
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} /> CAS
              (Creative, Action, Service)
            </p>
          </div>
        </div>
      </div>

      {/* INTERNASIONAL */}
      <div className="big-parent-card">
        <div className="card">
          <div className="header-card">
            <h3 className="title-card-internasional-ipc">
              International Primary Curriculum (IPC)
            </h3>
          </div>
          <div className="parent-img-internasional">
            <img className="img-card-ipc" src={ipc} alt="" />
          </div>
          <div className="parent-teks-subject">
            <p className="subject-teks">Subjects</p>
          </div>
          <div className="parent-desk-ipc">
            <div className="line-1">
              <p className="icon-teks-pengaplikasian">
                <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                Language Arts
              </p>
              <p className="icon-teks-pengaplikasian">
                <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                Mathematics
              </p>
              <p className="icon-teks-pengaplikasian">
                <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                Science
              </p>
              <p className="icon-teks-pengaplikasian">
                <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                ICT
              </p>
              <p className="icon-teks-pengaplikasian">
                <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                Technology
              </p>
              <p className="icon-teks-pengaplikasian">
                <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                History
              </p>
            </div>

            <div className="line-2">
              <p className="icon-teks-pengaplikasian">
                <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                Geography
              </p>
              <p className="icon-teks-pengaplikasian">
                <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                Music
              </p>
              <p className="icon-teks-pengaplikasian">
                <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                Physical Education
              </p>
              <p className="icon-teks-pengaplikasian">
                <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                Art
              </p>
              <p className="icon-teks-pengaplikasian">
                <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                Society
              </p>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------- */}

        {/* INTERNASIONAL */}
        <div className="card">
          <div className="header-card">
            <h3 className="title-card-internasional-spc">
              Singaporean Primary School Curriculum (SPC)
            </h3>
          </div>
          <div className="parent-img-internasional">
            <img className="img-card-ib" src={spc} alt="" />
          </div>
          <div className="parent-desk">
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
              English Language
            </p>
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} /> Mother
              Tongue Language (MTL)
            </p>
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
              Mathematics
            </p>
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
              Science
            </p>
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} /> Art
            </p>
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} /> Music
            </p>
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
              Physical Education
            </p>
            <p className="icon-teks">
              <FontAwesomeIcon className="icon-circle" icon={faCircle} /> Social
              Studies
            </p>
          </div>
        </div>
      </div>

      {/* KURIKULUM CAMBRIDGE */}

      <div className="box-cambridge">
        <div className="card-cambridge">
          <div className="header-cambridge">
            <h3 className="title-cambridge">Kurikulum Cambridge</h3>
          </div>
          <div className="logo-cambridge">
            <img className="img-cambridge" src={cambridge} alt="" />
          </div>

          <div className="all-primary">
            {/* PRIMARY */}
            <div className="card-cambridge-primary">
              <div className="header-card">
                <h3 className="cambridge-primary">Cambridge Primary</h3>
              </div>
              <div className="parent-desk">
                <p className="icon-teks-primary">
                  <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
                  Kelas: 1-6 SD
                </p>
                <hr />
                <p className="icon-teks-primary">
                  <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                  Subject: English, Mathematics, dan Science
                </p>
              </div>
            </div>

            {/* LOWER */}
            <div className="card-cambridge-secondary">
              <div className="header-card">
                <h3 className="cambridge-secondary">
                  Cambridge Lower Secondary
                </h3>
              </div>
              <div className="parent-desk">
                <p className="icon-teks-primary">
                  <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
                  Kelas: 7-8 SD
                </p>
                <hr />
                <p className="icon-teks-primary">
                  <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                  Subject: English, Mathematics, dan Combine Science (Biology,
                  Physics, Chemistry)
                </p>
              </div>
            </div>

            {/* UPPER */}
            <div className="card-cambridge-upper">
              <div className="header-card">
                <h3 className="cambridge-upper">Cambridge Upper Secondary</h3>
              </div>
              <div className="parent-desk">
                <p className="icon-teks-primary">
                  <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
                  Program: ICGSE, O Level
                </p>
                <hr />
                <p className="icon-teks-primary">
                  <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
                  Kelas: 9-10 SD
                </p>
                <hr />
                <p className="icon-teks-primary">
                  <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                  Subject: English, Mathematics, dan Science, Biology, Physics,
                  Chemistry, dll.
                </p>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------ */}

          <div className="all-advance">
            {/* ADVANCE */}
            <div className="card-cambridge-advance">
              <div className="header-card">
                <h3 className="cambridge-advance">Cambridge Advanced</h3>
              </div>
              <div className="parent-desk">
                <p className="icon-teks-advance">
                  <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                  Program: Cambridge International A Levels
                </p>
                <hr />
                <p className="icon-teks-advance">
                  <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                  Kelas: 11 & 12 SMA
                </p>
                <hr />
                <p className="icon-teks-advance">
                  <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                  Subject: English, Mathematics, Science, Business, ICT
                  (Information, Computer, and Technology), dan Arts.
                </p>
              </div>
            </div>

            {/* ADVANCE */}
            <div className="card-cambridge-advance">
              <div className="header-card">
                <h3 className="cambridge-advance">Cambridge Advanced</h3>
              </div>
              <div className="parent-desk">
                <p className="icon-teks-advance">
                  <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
                  Program: Cambridge International AS Levels
                </p>
                <hr />
                <p className="icon-teks-advance">
                  <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
                  Kelas: 11 SMA
                </p>
                <hr />
                <p className="icon-teks-advance">
                  <FontAwesomeIcon className="icon-circle" icon={faCircle} />
                  Subject: English, Mathematics, Science, Business, ICT
                  (Information, Computer, and Technology), dan Arts.
                </p>
              </div>
            </div>

            {/* ADVANCE */}
            <div className="card-cambridge-advance">
              <div className="header-card">
                <h3 className="cambridge-advance">Cambridge Advanced</h3>
              </div>
              <div className="parent-desk">
                <p className="icon-teks-advance">
                  <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
                  Program: Cambridge Pre-U College (Pra-Universitas)
                </p>
                <hr />
                <p className="icon-teks-advance">
                  <FontAwesomeIcon className="icon-circle" icon={faCircle} />{" "}
                  Subject: Art & Design, Biology, Chemistry, Economics, English
                  Literature, French, Geography, dll.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="layanan-edm">
        <h1 className="title-layanan">Layanan Program Belajar Edumatrix</h1>
      </div>

      <Slide />

      <div className="all-accordion">
        <div className="box-sd">
          <div className="parent-img-sd">
            <img className="img-sd" src={sd} alt="" />
          </div>
          <div className="accordion-sd">
            <h3 className="title-sd">
              Berikut adalah berbagai macam bimbingan mata pelajaran yang kami
              sediakan, untuk sang buah hati.{" "}
            </h3>
            <Accordion
              title="Mata Pelajaran SD"
              content="
              1. Agama
              <br/>
              <br/>
              2. Pendidikan Kewarganegaraan (PKN)
              <br/>
              <br/>
              3. Bahasa Indonesia
              <br/>
              <br/>
              4. Matematika
              <br/>
              <br/>
              5. Ilmu Pengetahuan Alam
              <br/>
              <br/>
              6. Ilmu Pengetahuan Sosial
              <br/>
              <br/>
              7. Seni Budaya dan Prakarya
              <br/>
              <br/>
              8. Pendidikan Jasmani, Olah Raga dan Kesehatan
              <br/>
              <br/>
              9. Bahasa Jawa
              <br/>
              <br/>
              10. Bahasa Inggris
              "
            />
          </div>
        </div>

        {/* ------------------------------------------------ */}

        <div className="box-smp">
          <div className="parent-img-smp">
            <img className="img-smp" src={smp} alt="" />
          </div>
          <div className="accordion-smp">
            <h3 className="title-smp">
              Berbagai kebutuhan les mapel SMP juga tersedia di Edumatrix
            </h3>
            <Accordion
              title="Mata Pelajaran SMP"
              content="
              1. Pendidikan Agama dan Budi Pekerti
              <br/>
              <br/>
              2. Pendidikan Pancasila dan Kewarganegaraan
              <br/>
              <br/>
              3. Bahasa Indonesia
              <br/>
              <br/>
              4. Matematika
              <br/>
              <br/>
              5. Ilmu Pengetahuan Alam
              <br/>
              <br/>
              6. Ilmu Pengetahuan Sosial
              <br/>
              <br/>
              7. Bahasa Inggris
              "
            />
          </div>
        </div>

        {/* ------------------------------------------------ */}

        <div className="box-sma">
          <div className="parent-img-sma">
            <img className="img-sma" src={sma} alt="" />
          </div>
          <div className="accordion-sma">
            <h3 className="title-sma">
              Edumatrix menyediakan bimbingan belajar bagi Siswa yang
              berkebutuhan untuk les mapel wajib, maupun mapel kejuruan
            </h3>
            <Accordion
              title="Mata Pelajaran SMA"
              content="
              SMA (Mapel Wajib)
              <hr/>
              <br/>
              1. PPKn
              <br/>
              <br/>
              2. Pendidikan Agama
              <br/>
              <br/>
              3. Bahasa Indonesia
              <br/>
              <br/>
              4. Matematika
              <br/>
              <br/>
              5. Bahasa Inggris
              <br/>
              <br/>
              6. Seni dan Prakarya
              <br/>
              <br/>
              7. Pendidikan Jasmani
              <br/>
              <br/>
              8. Informatika
              <hr/>
              <br/>
              SMA IPA
              <hr/>
              <br/>
              1. Biologi
              <br/>
              <br/>
              2. Fisika
              <br/>
              <br/>
              3. Kimia
              <hr/>
              <br/>
              SMA IPS
              <hr/>
              <br/>
              1. Sosiologi
              <br/>
              <br/>
              2. Sejarah
              <br/>
              <br/>
              3. Geografi
              <br/>
              <br/>
              2. Ekonomi
              <br/>
              <br/>
              3. Antropologi
              <br/>
              <br/>
              2. Akuntansi
              <br/>
              <br/>
              3. Kewirausahaan
              "
            />
          </div>
        </div>
      </div>

      {/* ----------OSN---------- */}

      <div className="conatiner-osn">
        <div className="box-osn">
          <img className="img-osn" src={osn} alt="" />
          <h1 className="title-osn">Olimpiade Sains Nasional</h1>
        </div>
        <div className="container-isi-osn">
          <div className="mt-osn">
            <h3 className="h3-mt">
              Master Teacher kami akan memberikan bimbingan belajar OSN untuk
              tingkat:
            </h3>
          </div>
          <div className="paragraf-mt">
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} />{" "}
              Olimpiade Sains Nasional Tingkat Kab./Kota (OSN-K)
            </p>
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} />{" "}
              Olimpiade Sains Nasional Tingkat Provinsi (OSN-P)
            </p>
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} />{" "}
              Olimpiade Sains Nasional Tingkat Nasional
            </p>
          </div>

          {/* OSN SD */}
          <div className="osn-sd">
            <h3 className="title-osn-sd">OSN SD</h3>
          </div>
          <div className="paragraf-mt">
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} />{" "}
              Matematika
            </p>
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} /> IPA
              (Ilmu Pengetahuan Alam)
            </p>
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} /> IPS
              (Ilmu Pengetahuan Sosial)
            </p>
          </div>

          {/* OSN SMP */}
          <div className="osn-sd">
            <h3 className="title-osn-sd">OSN SMP</h3>
          </div>
          <div className="paragraf-mt">
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} />{" "}
              Matematika
            </p>
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} /> IPA
              (Ilmu Pengetahuan Alam)
            </p>
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} /> IPS
              (Ilmu Pengetahuan Sosial)
            </p>
          </div>

          {/* OSN SMA */}
          <div className="osn-sd">
            <h3 className="title-osn-sd">OSN SMA</h3>
          </div>
          <div className="paragraf-mt">
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} />{" "}
              Matematika
            </p>
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} />
              Fisika
            </p>
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} />
              Kimia
            </p>
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} />{" "}
              Informatika/Komputer
            </p>
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} />
              Biologi
            </p>
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} />
              Astronomi
            </p>
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} />{" "}
              Ekonomi
            </p>
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} />
              Kebumian
            </p>
            <p className="p-mt">
              <FontAwesomeIcon className="icon-bullet-mt" icon={faCircle} />
              Geografi
            </p>
          </div>
        </div>
      </div>

      <div className="container-kualifikasi">
        {/* <div className="kualifikasi-mt">
          <h1 className="h1-mt-edm">Kualifikasi Master Teacher di Edumatrix</h1>
        </div> */}

        <div className="animated-marque">
          <marquee behavior="" direction="">
            {/* <img
              className="img-mt"
              src="https://apps.edumatrix-indonesia.com/edumatrixapp/admin/assets/uploads/foto_pengajar/2df4c-img-20230418-wa0018.jpg"
              alt=""
            />
            <img
              className="img-mt"
              src="https://apps.edumatrix-indonesia.com/edumatrixapp/admin/assets/uploads/foto_pengajar/15a84-whatsapp-image-2023-04-18-at-12.53.02-2-.jpeg"
              alt=""
            />
            <img
              className="img-mt"
              src="https://apps.edumatrix-indonesia.com/edumatrixapp/admin/assets/uploads/foto_pengajar/e528d-hairul.png"
              alt=""
            /> */}
          </marquee>
        </div>
      </div>

      {/* KUALIFIKASI MT */}

      <div className="main-kualifikasi-mt">
        <div className="box-kualifikasi-mt">
          <h1 className="title-kualifikasi-mt">Kualifikasi Master Teacher</h1>
        </div>

        <div className="container-kualifikasi-mt">
          <div className="desk-kualifikasi-mt">
            <p className="kualifikasi-mt">
              Salah satu kunci dari kesuksesan belajar adalah bimbingan dari
              guru yang tepat dan kompeten. Master Teacher kami memiliki semua
              kualifikasi yang cocok untuk menjamin kesuksesan belajar Siswa.
              Berikut adalah kelebihan dari <strong>Master Teacher</strong>{" "}
              kami:
            </p>
          </div>
        </div>

        <div className="all-ptn-ternama">
          <div className="box-lulusan-ptn-ternama">
            <h1 className="title-ptn-ternama">Lulusan PTN Ternama</h1>
          </div>

          <div className="box-img-ptn-ternama">
            <img className="img-ptn-ternama" src={ptnTernama} alt="" />
          </div>

          <div className="desk-ptn-ternama">
            <p className="p-ptn-ternama">
              Master Teacher kami adalah lulusan S1, S2 dari UI, UGM, Unpad,
              Undip, Unair, dan Universitas ternama lainnya. Tentunya,
              kompetensi mengajar mereka tidak perlu dipertanyakan lagi.{" "}
            </p>
          </div>
        </div>

        <div className="berpengalaman-mengajar">
          <h1 className="title-berpengalaman-mengajar">
            Berpengalaman Mengajar
          </h1>
        </div>

        <div className="content-berpengalaman-mengajar">
          <p className="p-berpengalaman-mengajar">
            Dengan bertahun-tahun pengalaman mengajar, Master Teacher kami sudah
            mengetahui macam-macam karakteristik Siswa, dan metode belajar mana
            yang cocok diaplikasikan untuk Siswa tertentu.
          </p>
          <img
            className="img-berpengalaman-mengajar"
            src={berpengalamanMengajar}
            alt=""
          />
        </div>

        <div className="request-mt">
          <h1 className="title-request-mt">
            Request Master Teacher yang Sesuai dengan Kebutuhan
          </h1>
        </div>

        <div className="content-request-mt">
          <img className="img-request-mt" src={requestMt} alt="" />
          <p className="p-request-mt">
            Dengan bertahun-tahun pengalaman mengajar, Master Teacher kami sudah
            mengetahui macam-macam karakteristik Siswa, dan metode belajar mana
            yang cocok diaplikasikan untuk Siswa tertentu.
          </p>
        </div>
      </div>

      {/*  TOP 3 MT */}
      <div className="box-top-3">
        <img className="img-top3" src={top3} alt="" />
      </div>

      <div className="box-mt-top3">
        <div className="child-3mt">
          <img className="mt-top3" src={mtTop3} alt="" />
        </div>
        <div className="all-mt">
          <Marquee />
        </div>
      </div>

      {/* ASAL SEKOLAH SISWA  */}

      <div className="parent-sekolah-siswa">
        <h1 className="title-sekolah-siswa">
          Siswa Edumatrix berasal dari berbagai sekolah dan Universitas di
          seluruh Indonesia
        </h1>
      </div>

      <div className="all-asal-sekolah">
        {/* SMP */}
        <div className="parent-sekolah-smp">
          <button className="btn-smp">
            <h1>SMP</h1>
          </button>
          <div className="box-sekolah-smp">
            <div className="box-nama-asal-sekolah">
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMPK
                Harapan Bangsa Balikpapan
              </p>
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMP
                Negeri 1 Balikpapan
              </p>
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMP
                Muhammadiyah Plus Batam
              </p>
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMP
                Cikal
              </p>
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} /> Tunas
                Bangsa Christian School Gading Serpong
              </p>
            </div>
          </div>
        </div>

        {/* SMA */}
        <div className="parent-sekolah-smp">
          <button className="btn-smp">
            <h1>SMA</h1>
          </button>
          <div className="box-sekolah-sma">
            <div className="box-nama-asal-sekolah">
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMKN 57
                Jakarta
              </p>
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMA
                ISLAM TERPADU AL-MUSTHAFAWIYAH
              </p>
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMKN
                SUGIHWARAS BOJONEGORO
              </p>
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMAS
                Unggulan Ar-Rahman
              </p>
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMAN 1
                SURAKARTA
              </p>
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} /> Nurul
                Fikri Boarding School Serang
              </p>

              <div className="dropdown-menu">
                <input type="checkbox" id="menu" />
                <label className="readmore" htmlFor="menu">
                  Readmore
                </label>
                <div className="menu-content">
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    Presiden Boarding School
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    SMAN 2 PANGKALAN KERINCI
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    SABIS INTERNATIONAL SCHOOL
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    Pondok Pesantren Modern Putri IMMIM Pangkep
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMA
                    BUDI UTOMO
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMA
                    Bukit Asam
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> St
                    Fransiskus Assisi Samarinda
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    PONPES ASSHIDDIQIYAH JAKART
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    Harapan Bangsa
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    Heritage School
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    International islamic high school
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> MAS
                    Sunan Pandanaran
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMI
                    QHA IPA
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    SMAS Unklab Airmadidi
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMA
                    IT Al Bayyinah
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    SMAN 3 Denpasar
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMA
                    Madania Bogor
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    SMAN 1 Kaliwungu
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    SMAN 1 Semarapura
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> MBI
                    Amanatul Ummah
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    Temesek Independent School
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    SMAN 1 Bogor
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    Darunnajah
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMA
                    Sutomo 1
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMK
                    Pariwisata Adimulia Batam
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> MA
                    Darul madinah
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    SMAN 3 Makassar
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMK
                    NEGERI 1 TANJUNGPINANG
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> MA
                    ARRAHMANIYAH
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    SMAN 5 Kota Bengkulu
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMA
                    NEGERI 3 PURWOKERTO
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> MAN
                    2 Kota Serang
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> PPS
                    MINHAAJUSHSHOOBIRIIN
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> MAN
                    Tanjungpinang
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMA
                    Taman Rama
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    Ibnu Hajar Boarding School
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} /> SMA
                    3 Taruna Angkasa Madiun
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    SMAK Setia Bakti Ruteng
                  </p>
                  <p className="p-smp">
                    <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                    SMAN 01 Manokwari
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UNIVERSITAS */}
        <div className="parent-sekolah-smp">
          <button className="btn-smp">
            <h1>Universitas</h1>
          </button>
          <div className="box-sekolah-univ">
            <div className="box-nama-asal-sekolah">
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} /> UIN
                Bandung
              </p>
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                Universitas Trisakti
              </p>
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} /> STIPRAM
              </p>
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                Universitas Diponegoro
              </p>
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                University of Groningen
              </p>
              <p className="p-smp">
                <FontAwesomeIcon className="icon-smp" icon={faCircle} />{" "}
                Universitas Hasanuddin
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="title-testi">
        <img className="img-testi" src={testi} alt="" />
      </div>

      <div className="container-testi-siswa">
        <div className="box-shinta">
          <p className="p-shinta">
            les disini seruu, kakak adminnya cepat tanggap kalau di chat jadi
            mudah untuk komunikasinya kalau ada kendala. penjelasan dan
            pembahasan dari guru yang mengajar juga mudah dipahami dan gurunya
            sangat sabar mengajari saya dari awal karna saya masih belum terlalu
            mengerti dengan materinya :( terbaik pokoknya!!!
          </p>
          <h1 className="nama-shinta">Shinta</h1>
          <img className="img-shinta" src={shinta} alt="" />
        </div>
        {/* ---------------------------------------------------------- */}
        <div className="box-yolanda">
          <p className="p-yolanda">
            Hari pertama memiliki kesan yang baik karena di ajar oleh Master
            Teacher yang friendly dan memberi penjelasan yang dapat di pahami
          </p>
          <h1 className="nama-yolanda">Yolanda Febriana Sinaga</h1>
          <img className="img-yolanda" src={yolanda} alt="" />
        </div>
        {/* ---------------------------------------------------------- */}
        <div className="box-natasya">
          <p className="p-natasya">
            Rumah berproses yang konstruktif, aman dan nyaman. Terima kasih
            banyak dan makin jaya, Edumatrix Indonesia!
          </p>
          <h1 className="nama-natasya">Natasha Rizky</h1>
          <img className="img-natasya" src={natasya} alt="" />
        </div>
        {/* ---------------------------------------------------------- */}
        <div className="box-gabriela">
          <p className="p-gabriela">
            Sudah 5 kali pertemuan ,gurunya asik dan tidak membosankan,langsung
            bahas contoh soal UTBK Pas dikerjakan sendiri susah sekali,tapi
            semenjak ikut bimbel Edumatrix ternyata ngerjain contoh soal UTBK
            jadi mudah,paling suka kalau lagi bahas penalaran matematika........
            Menurut saya sangat bagus,dikasih contoh soal,dibahas sama
            gurunya,ditambah pembahasan dalam bentuk pdf juga.adminnya juga baik
            dan fast respond dijelaskan semua tentang Edumatrix walaupun awalnya
            hanya tanya-tanya harga Semoga bisa ikut bimbel ini sampai menjelang
            SNBT nanti
          </p>
          <h1 className="nama-gabriela">Gabriela Mahendriati Daman</h1>
          <img className="img-gabriela" src={gabriela} alt="" />
        </div>
        {/* ---------------------------------------------------------- */}
        <div className="box-azlia">
          <p className="p-azlia">
            master teacher nya seru-seru bangett, banyak trik yang awalnya nggak
            kepikiran jadi oh iya yaa, pembelajarannya menarik nggak ngebosenin
          </p>
          <h1 className="nama-azlia">Azlia Kamila A</h1>
          <img className="img-azlia" src={azlia} alt="" />
        </div>
        {/* ---------------------------------------------------------- */}
        <div className="box-novandi">
          <p className="p-novandi">
            Response Admin cepat, antusias dan Ramah,, selalu standby.... it's
            cool
          </p>
          <h1 className="nama-novandi">Muhammad Novandi</h1>
          <img className="img-novandi" src={novandi} alt="" />
        </div>
      </div>
      {/* ---------------------------------------------------------- */}
      <div className="container-testi-video">
        <div className="box-jesica">
          <video className="card-jesica" controls poster={thumbJessica}>
            <source
              className="video-jesica"
              src={videoJesica}
              type="video/mp4"
            />
          </video>
        </div>
        {/* ---------------------------------------------------------- */}
        <div className="box-aidil">
          <video className="card-aidil" controls>
            <source className="video-aidil" src={videoAidil} type="video/mp4" />
          </video>
        </div>
        {/* ---------------------------------------------------------- */}
        <div className="box-cahaya">
          <video className="card-cahaya" controls>
            <source
              className="video-cahaya"
              src={videoCahaya}
              type="video/mp4"
            />
          </video>
        </div>
        {/* ---------------------------------------------------------- */}
        <div className="box-gabriela-video">
          <video className="card-gabriela" controls>
            <source
              className="video-gabriela"
              src={videoGabriella}
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="container-child-footer">
        <div className="child-footer">
          <div className="text-child-footer">
            <h3 className="title-child-footer">
              Kini Saatnya Kamu Bergabung di Edumatrix Indonesia
            </h3>
            <p className="p-child-footer">
              Ribuan siswa telah mendapatkan pendampingan belajar terbaik. Saat
              ini adalah waktu terbaik untuk konsultasikan kebutuhan Anda,
              segera hubungi:
            </p>
            <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia%2C%20Saya%20ingin%20bertanya%20mengenai%20Bimbel%20di%20Edumatrix%20Indonesia%20Terima%20kasih.">
              <button className="btn-child-footer">HUBUNGI KAMI</button>{" "}
            </a>
          </div>
          <div className="img-child-footer">
            <img className="model-edm" src={model} alt="" />
          </div>
        </div>
      </div>
      {/* -------------------------------------------------- */}
      <div className="box-float-main">
        <a href="tel:+6285600422188">
        <div className="main-parent-call">
          <button className="btn-float-tlp">
            <span className="parent-icon-tlp">
              <FontAwesomeIcon icon={faPhone} />
            </span>{" "}
            TELEPON
          </button>
        </div>
        </a>
        <div className="main-parent-wa">
          <a
            className="parent-btn-wa"
            href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia%2C%20Saya%20ingin%20bertanya%20mengenai%20Bimbel%20di%20Edumatrix%20Indonesia%20Terima%20kasih."
          >
            <button className="btn-float-wa">
              <span className="parent-icon-wa">
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>{" "}
              WHATSAPP
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default landingPage;

import React from "react";
import "./landingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircle, faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../asset/logo_edm.png";
import student from "../asset/foto_siswa_sd-sma.png";
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
            <img className="img-siswa-belajar1" src={siswaBelajar} alt="" />
            <div className="desk-siswa-belajar">
              <p className="angka">
                <span className="animate-number">
                  <Number n={7312} /> +
                </span>{" "}
                <br /> <span className="span-desk">Siswa Belajar</span>
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
                <br /> <span className="span-desk">Master Teacher</span>
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
                <br /> <span className="span-desk">Siswa Berhasil</span>
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
                <br /> <span className="span-desk">Tingkat Kepuasan Siswa</span>
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
              datang kerumah, atau online. Edumatrix juga menyediakan metode
              belajar kelas, yakni Siswa datang langsung ke lokasi. Dengan
              kurikulum nasional & internasional, kegiatan belajar menyesuaikan
              kebutuhan siswa. Siswa dapat memilih metode privat 1 Guru 1 siswa,
              ataupun small class, didampingi dengan pengajar profesional, muda
              dan berpengalaman.
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
            dan Perguruan Tinggi terbaik lainnya. Master Teacher terfavorit kami
            telah berpengalaman mengajar sesuai dengan bidang keilmuwan yang
            dikuasai dan telah melewati proses seleksi akademik sesuai dengan
            standar Edumatrix.
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
    </React.Fragment>
  );
};

export default landingPage;

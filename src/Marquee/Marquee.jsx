import React from "react";
import "./Marquee.css";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUniversity } from "@fortawesome/free-solid-svg-icons";

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="track">
        <div className="content">
          <div className="flex-mt">
            <div className="box-ai">
              <img className="img-all-mt" src={ai} alt="" />
              <p className="nama-mt">AI FATMAWATI</p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faBook} /> Literasi
                Bahasa Inggris
              </p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faUniversity} />{" "}
                UNIVERSITAS PENDIDIKAN INDONESIA
              </p>
            </div>
            <div className="box-firda">
              <img className="img-all-mt" src={firda} alt="" />
              <p className="nama-mt">FIRDA FEBRIANA AZA HRA</p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faBook} /> Literasi
                Bahasa Inggris
              </p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faUniversity} />{" "}
                POLITEKNIK HASNUR BANJARMASIN
              </p>
            </div>
            <div className="box-hairul">
              <img className="img-all-mt" src={hairul} alt="" />
              <p className="nama-mt">HAIRUL UMAM</p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faBook} /> Matematika
              </p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faUniversity} />{" "}
                INSTITUT TEKNOLOGI BANDUNG
              </p>
            </div>
            <div className="box-ika">
              <img className="img-all-mt" src={ika} alt="" />
              <p className="nama-mt">IKA ISTIANA</p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faBook} /> Pemahaman
                Bacaaan dan Menulis
              </p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faUniversity} />{" "}
                UNIVERSITAS BRAWIJAYA
              </p>
            </div>
            <div className="box-ilman">
              <img className="img-all-mt" src={ilman} alt="" />
              <p className="nama-mt">ILMAN HAJAR</p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faBook} /> Matematika
              </p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faUniversity} />{" "}
                UNIVERSITAS PADJAJARAN
              </p>
            </div>
            <div className="box-mela">
              <img className="img-all-mt" src={mella} alt="" />
              <p className="nama-mt">MELLA NAROLITA</p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faBook} /> Literasi
                Bahasa Inggris
              </p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faUniversity} />{" "}
                UNIVERSITAS GADJAH MADA
              </p>
            </div>
            <div className="box-arinal">
              <img className="img-all-mt" src={arinal} alt="" />
              <p className="nama-mt">MUHAMMAD ARINAL HA Q</p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faBook} /> Matematika
              </p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faUniversity} />{" "}
                UNIVERSITAS GAJAH MADA
              </p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faUniversity} />{" "}
                UNIVERSITY OF MANCHESTER
              </p>
            </div>
            <div className="box-novia">
              <img className="img-all-mt" src={novia} alt="" />
              <p className="nama-mt">NOVIA RAHMAWATY PU TRI</p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faBook} /> Literasi
                Bahasa Inggris
              </p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faUniversity} />{" "}
                UNIVERSITAS NEGERI MEDAN
              </p>
            </div>
            <div className="box-paranti">
              <img className="img-all-mt" src={paranti} alt="" />
              <p className="nama-mt">PARANTI</p>

              <p>
                <FontAwesomeIcon className="icon-mt" icon={faBook} /> Literasi
                Bahasa Indonesia
              </p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faUniversity} />{" "}
                UNIVERSITAS PADJADJARAN
              </p>
            </div>
            <div className="box-vicho">
              <img className="img-all-mt" src={vicho} alt="" />
              <p className="nama-mt">VICHO AFRIANTO</p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faBook} /> Literasi
                Bahasa Inggris
              </p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faUniversity} />{" "}
                INSTITUT PERTANIAN BOGOR
              </p>
            </div>
            <div className="box-yona">
              <img className="img-all-mt" src={yona} alt="" />
              <p className="nama-mt">YONA TIRTA SARI</p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faBook} /> Bahasa
                Indonesia, UTBK SNBT
              </p>
              <p>
                <FontAwesomeIcon className="icon-mt" icon={faUniversity} />{" "}
                UNIVERSITAS TIDAR
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;

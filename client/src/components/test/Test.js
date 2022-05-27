import React from "react";
import "./test.css";
import img1 from "../images/inscriptionE for website.png";
import img2 from "../images/listeSeanceEtud.png";
import img3 from "../images/Etudiaintaccepterinseance.png";
import img4 from "../images/inscriptionEnseignant.png";
import img5 from "../images/accepterEtud.png";
import img6 from "../images/listeseanceEnse.png";

export default function () {
  return (
    <div className="divTestser9a">
      <section className="module2">
        <div className="how-it-works">
          <h2 className="row center-xs textclass">
            Comment fonctionne E-learning travail?
          </h2>
          <h3 className="row center-xs">
            C'est facile! séance en ligne avec enseignant
          </h3>
          <div className="row max-width separator">
            <div className="col-sm-5 col-xs-12 text-right">
              <div className="paragraph">
                Si vous êtes un étudiant, vous devez créer un compte et vous
                Connexion, ce qui vous permet de voir toutes les séances qui ont
                été approuvées par l'administration, et vous avez le droit de
                demander à rejoindre cette séance.
              </div>
            </div>
            <div className="col-sm-2 col-xs-12 first"></div>
            <div className="col-sm-5 col-xs-12">
              <img data-forceload="1" width="371" src={img1} />
            </div>
          </div>
          <div className="row max-width separator">
            <div className="col-sm-5 col-xs-12">
              <img
                style={{
                  height: "250px",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                data-forceload="1"
                className="align-image"
                width="371"
                src={img2}
              />
            </div>
            <div className="col-sm-2 col-xs-12 first"></div>
            <div className="col-sm-5 col-xs-12 first">
              <div className="paragraph">
                Pour voir les séances que vous avez demandées, entrez dans mes
                séances et les deux premiers paquets de séances qui attendent
                l'approbation du professeur pour vous rejoindre apparaîtront.
              </div>
            </div>
          </div>
          <div className="three-point">
            <div className="row max-width">
              <div className="col-sm-5 col-xs-12 text-right">
                <div className="paragraph">
                  Le deuxième paquet contient les séances auxquelles vous avez
                  été autorisé à participer. Lorsque vous entrez dans la
                  séeance, vous trouverez le lien pour la séance.
                </div>
              </div>
              <div className="col-sm-2 col-xs-12 first ">
                <div className="circle gradient">3</div>
              </div>
              <div className="col-sm-5 col-xs-12">
                <img data-forceload="1" width="371" src={img3} />
              </div>
            </div>
          </div>
          <div className="row max-width separator">
            <div className="col-sm-5 col-xs-12 text-right">
              <div className="paragraph">
                Si vous êtes enseignant, vous devez créer un compte et vous
                Connexion, ce qui vous permet de créer des séances et la demande
                d'acceptation est automatiquement envoyée à l'admin, Lorsque la
                demande d'acceptation est approuvée par l'administrateur,
              </div>
            </div>
            <div className="col-sm-2 col-xs-12 first"></div>
            <div className="col-sm-5 col-xs-12">
              <img
                data-forceload="1"
                width="371"
                style={{ marginTop: "10xp" }}
                src={img4}
              />
            </div>
          </div>
          <div className="row max-width separator">
            <div className="col-sm-5 col-xs-12">
              <img
                data-forceload="1"
                className="align-image"
                width="371"
                style={{ marginBottom: "10px" }}
                src={img5}
              />
            </div>
            <div className="col-sm-2 col-xs-12 first"></div>
            <div className="col-sm-5 col-xs-12 first">
              <div className="paragraph">
                Lorsque la demande d'acceptation est approuvée par
                l'administrateur, la session est présentée aux étudiants et ils
                commencent à envoyer des demandes d'adhésion, puis le enseignant
                accepte ou refus un étudiant, et lorsqu'un des étudiants est
                accepté, vous pouvez supprimer son inscription .
              </div>
            </div>
          </div>
          <div className="three-point">
            <div className="row max-width">
              <div className="col-sm-5 col-xs-12 text-right">
                <div className="paragraph">
                  Sur la page accueil, il y a un cards pour les sessions que
                  vous avez créées, et le card contient les informations sur la
                  session
                </div>
              </div>
              <div className="col-sm-2 col-xs-12 first ">
                <div className="circle gradient">3</div>
              </div>
              <div className="col-sm-5 col-xs-12">
                <img
                  data-forceload="1"
                  width="371"
                  style={{ marginBottom: "5px" }}
                  src={img6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

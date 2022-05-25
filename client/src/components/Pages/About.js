import React from "react";
import Footer from "../footer/Footer";
import NavBar from "./NavBar";
import "./About.css";
import Testfooter from "../Testfooter";
export default function About() {
  const x = window.location.href;
  console.log(x);
  return (
    <div>
      <NavBar />
      <div className="body">
        <h1>
          qui sommes-nous
          <br></br>
          <img
            src="https://image.ibb.co/nk616F/Layer_1_copy_21.png"
            width="47"
            height="11"
            align="center"
          />
        </h1>
        <article>
          <p>
            Nous sommes une entreprise fondée en 2022 par Elon Musk et Bill
            Gates. Notre objectif principal est d'augmenter la capacité
            intellectuelle des êtres humains et de renforcer les bases
            scientifiques pour les étudiants du monde entier. Nous fournissons
            des classes dont l'objectif principal est d'aborder et de développer
            les méthodes d'enseignement, car la plupart des centres
            d'enseignement tiennent à l'enseignement en personne et il se
            présente sous la forme de cours, mais nous nous appuyons sur un
            système de séeance La séance est en ligne et le lien vers la séance
            est inclus dans les informations relatives à la séance.
          </p>
        </article>
      </div>
      <Testfooter />
    </div>
  );
}

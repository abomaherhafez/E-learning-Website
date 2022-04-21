import React from "react";
import Card1 from "../components/cards/Card1";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";

export default function HomeaccountStudent() {
  return (
    <div>
      <NavBar />
      <h4>Mettre à jour votre profil </h4>
      <h4>Supprimer votre compte </h4>
      <h2 className="h2placment">bienvenue sur votre compte</h2>
      <h3 className="h2placment">votre seance </h3>
      <div className="center-cards">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <h3 className="h2placment">les autre seances</h3>
      <div className="center-cards">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">Generell informasjon</h2>
            <p className="mt-2 mb-4">
              Generell informasjon om dagen. Kommer snart!
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Se mer informasjon om dagen
            </Link>
          </Card>
          <Card bg="bg-teal-100">
            <h2 className="text-2xl font-bold">Hvordan kommer jeg meg dit?</h2>
            <p className="mt-2 mb-4">
              Her kommer det et interaktivt kart til Rambekk . I tillegg er det
              kanskje fint å få lagt til litt "howto" komme seg dit?
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-teal-500 text-white rounded-lg px-4 py-2 hover:bg-teal-600"
            >
              Mer informasjon
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;

import React, { useEffect, useState } from "react";
import PetList from "../components/PetList";
import { Owner, Pet, Toy } from "../api/types";
import { useAuthContext } from "../contexts/AuthContext";

function HomePage() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [owners, setOwners] = useState<Owner[]>([]);
  const [toys, setToys] = useState<Toy[]>([]);

  const fetchPets = async () => {
    try {
      const res = await fetch('/api/pets');
      const data = await res.json();
      setPets(data);
    } catch(e) {
      console.error(e);
    }
  };

  const fetchOwners = async () => {
    try {
      const res = await fetch('/api/owners');
      const data = await res.json();
      setOwners(data);
    } catch(e) {
      console.error(e);
    }
  };

  const fetchToys = async () => {
    try {
      const res = await fetch('/api/toys');
      const data = await res.json();
      setToys(data);
    } catch(e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPets();
    fetchOwners();
    fetchToys();
  }, [])

  return (
    <div>
      <PetList
        pets={pets}
        owners={owners}
        toys={toys}
      />
    </div>
  );
}

export default HomePage;

import React, { useEffect } from 'react';
import { Owner, Pet, Toy } from '../api/types';
import { useAuthContext } from '../contexts/AuthContext';

function PetList({pets, owners, toys}: {pets: Pet[]; owners: Owner[]; toys: Toy[]}) {
  const { user } = useAuthContext();
  const isAdmin = user?.role === 'admin';
  
  const getOwnerNameById = (id: string) => {
    return owners.find((owner) => owner.id === id)?.name;
  }

  const getToyNamesByIds = (ids: string[]) => {
    const toyNames: string[] = [];
    ids.forEach((id) =>  {
      const toyName = toys.find((toy) => toy.id === id)?.name;
      if (toyName) {
        toyNames.push(toyName);
      }
    });
    return toyNames.join(', ');
  }

  return (
    <div>
      <h1>Pet List</h1>
      {isAdmin && 
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>OwnerId</td>
              <td>FavoriteToys</td>
              <td>Breed</td>
              <td>Age</td>
              <td>CheckedIn</td>
            </tr>
          </thead>
          <tbody>
            {pets.map(pet => (
              <tr key={pet.id}>
                <td>{pet.name}</td>
                <td>{getOwnerNameById(pet.ownerId)}</td>
                <td>{getToyNamesByIds(pet.favoriteToys)}</td>
                <td>{pet.breed}</td>
                <td>{pet.age}</td>
                <td>{pet.checkedIn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export default PetList;

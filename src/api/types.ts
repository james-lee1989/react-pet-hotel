interface Owner {
  id: string;
  name: string;
  pets: string[]; // ids of pets
  phoneNumber: string;
  address: string;
  email: string;
}

interface Pet {
  id: string;
  name: string;
  favoriteToys: string[]; // ids of toys
  breed: string;
  age: number;
  ownerId: string; // id of owner
  type: "Dog" | "Cat";
  checkedIn: boolean;
}

interface Toy {
  id: string;
  name: string;
  available: boolean;
}

interface User {
  username: string;
  role: 'admin' | 'staff';
}

export type { Owner, Pet, Toy, User };

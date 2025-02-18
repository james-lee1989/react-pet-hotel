import { Owner, Pet, Toy, User } from "./types";

const USERS: User[] = [
  {
    username: "jane",
    role: "admin",
  },
  {
    username: "john",
    role: "staff",
  },
  {
    username: "sarah",
    role: "staff",
  },
  {
    username: "mike",
    role: "admin",
  },
];

const PETS: Pet[] = [
  {
    id: "1",
    name: "Fluffy",
    ownerId: "1",
    favoriteToys: ["1", "2"],
    breed: "Golden Retriever",
    age: 5,
    type: "Dog",
    checkedIn: true,
  },
  {
    id: "2",
    name: "Grover",
    ownerId: "2",
    favoriteToys: ["3", "8"],
    breed: "German Shorthaired Pointer",
    age: 10,
    type: "Dog",
    checkedIn: true,
  },
  {
    id: "3",
    name: "Sissy",
    ownerId: "3",
    favoriteToys: ["4", "9"],
    breed: "Orange Tabby",
    age: 2,
    type: "Cat",
    checkedIn: false,
  },
  {
    id: "4",
    name: "Mittens",
    ownerId: "4",
    favoriteToys: ["5"],
    breed: "Persian",
    age: 1,
    type: "Cat",
    checkedIn: false,
  },
  {
    id: "5",
    name: "Luna",
    ownerId: "2",
    favoriteToys: ["6", "8"],
    breed: "Siberian Husky",
    age: 3,
    type: "Dog",
    checkedIn: false,
  },
  {
    id: "6",
    name: "Shadow",
    ownerId: "3",
    favoriteToys: ["2", "3"],
    breed: "Labrador Retriever",
    age: 4,
    type: "Dog",
    checkedIn: false,
  },
  {
    id: "7",
    name: "Whiskers",
    ownerId: "1",
    favoriteToys: ["4", "7"],
    breed: "Maine Coon",
    age: 5,
    type: "Cat",
    checkedIn: true,
  },
  {
    id: "8",
    name: "Bella",
    ownerId: "4",
    favoriteToys: ["5", "7"],
    breed: "Siamese",
    age: 3,
    type: "Cat",
    checkedIn: true,
  },
  {
    id: "9",
    name: "Max",
    ownerId: "2",
    favoriteToys: ["3", "6"],
    breed: "French Bulldog",
    age: 2,
    type: "Dog",
    checkedIn: false,
  },
];

const OWNERS: Owner[] = [
  {
    id: "1",
    name: "John Doe",
    pets: ["1", "7"],
    phoneNumber: "321-321-3210",
    address: "123 Main St, Anytown, USA",
    email: "john.doe@example.com",
  },
  {
    id: "2",
    name: "Jane Doe",
    pets: ["2", "9"],
    phoneNumber: "321-987-6543",
    address: "123 Main St, Anytown, USA",
    email: "jane.doe@example.com",
  },
  {
    id: "3",
    name: "Jim Doe",
    pets: ["3", "6"],
    phoneNumber: "123-456-7891",
    address: "123 Main St, Anytown, USA",
    email: "jim.doe@example.com",
  },
  {
    id: "4",
    name: "Sarah Smith",
    pets: ["4", "8"],
    phoneNumber: "987-654-3210",
    address: "456 Oak Ave, Somewhere, USA",
    email: "sarah.smith@example.com",
  },
  {
    id: "5",
    name: "Michael Johnson",
    pets: [],
    phoneNumber: "555-444-3333",
    address: "789 Pine Rd, Elsewhere, USA",
    email: "michael.j@example.com",
  },
  {
    id: "6",
    name: "Emily Wilson",
    pets: ["5"],
    phoneNumber: "333-222-1111",
    address: "321 Maple Dr, Nowhere, USA",
    email: "emily.w@example.com",
  },
];

const TOYS: Toy[] = [
  {
    id: "1",
    name: "Bone",
    available: false,
  },
  {
    id: "2",
    name: "Ball",
    available: true,
  },
  {
    id: "3",
    name: "Rope",
    available: true,
  },
  {
    id: "4",
    name: "Laser Pointer",
    available: false,
  },
  {
    id: "5",
    name: "Plush Mouse",
    available: true,
  },
  {
    id: "6",
    name: "Squeaky Duck",
    available: true,
  },
  {
    id: "7",
    name: "Feather Wand",
    available: true,
  },
  {
    id: "8",
    name: "Tennis Ball",
    available: true,
  },
  {
    id: "9",
    name: "Crinkle Tunnel",
    available: true,
  },
];

export { USERS, PETS, OWNERS, TOYS };

const products = [
  {
    id: 0,
    name: "Camiseta 0",
    image: "../../../public/product-thumb-1.jpeg",
    price: 450.25,
    category: "Camisetas",
    description: "Descrição da Camiseta 0",
    size: "G"
  },
  {
    id: 1,
    name: "Calça 1",
    image: "../../../public/product-thumb-2.jpeg",
    price: 210.75,
    category: "Calças",
    description: "Descrição da Calça 1",
    size: "M"
  },
  {
    id: 2,
    name: "Boné 2",
    image: "../../../public/product-thumb-3.jpeg",
    price: 85.95,
    category: "Bonés",
    description: "Descrição do Boné 2",
    size: "P"
  },
  {
    id: 3,
    name: "Headphone 3",
    image: "../../../public/product-thumb-4.jpeg",
    price: 325.60,
    category: "Headphones",
    description: "Descrição do Headphone 3",
    size: "G"
  },
  {
    id: 4,
    name: "Tênis 4",
    image: "../../../public/product-thumb-5.jpeg",
    price: 195.45,
    category: "Tênis",
    description: "Descrição do Tênis 4",
    size: "M"
  },
  {
    id: 5,
    name: "Tênis 5",
    image: "../../../public/product-thumb-5.jpeg",
    price: 289.80,
    category: "Tênis",
    description: "Descrição do Tênis 5",
    size: "P"
  },
  {
    id: 6,
    name: "Tênis 6",
    image: "../../../public/product-thumb-5.jpeg",
    price: 179.99,
    priceDiscount: 150.50,
    category: "Tênis",
    description: "Descrição do Tênis 6",
    size: "G"
  },
  {
    id: 7,
    name: "Camiseta 7",
    image: "../../../public/product-thumb-1.jpeg",
    price: 49.99,
    category: "Camisetas",
    description: "Descrição da Camiseta 7",
    size: "M"
  },
  {
    id: 8,
    name: "Calça 8",
    image: "../../../public/product-thumb-2.jpeg",
    price: 102.50,
    category: "Calças",
    description: "Descrição da Calça 8",
    size: "G",
    color: "Verde"
  },
  {
    id: 9,
    name: "Boné 9",
    image: "../../../public/product-thumb-3.jpeg",
    price: 69.30,
    category: "Bonés",
    description: "Descrição do Boné 9",
    size: "M"
  },
  {
    id: 10,
    name: "Headphone 10",
    image: "../../../public/product-thumb-4.jpeg",
    price: 310.45,
    category: "Headphones",
    description: "Descrição do Headphone 10",
    size: "M"
  },
  {
    id: 11,
    name: "Tênis 11",
    image: "../../../public/product-thumb-5.jpeg",
    price: 155.60,
    category: "Tênis",
    description: "Descrição do Tênis 11",
    color: "Azul",
    size: "M"
  },
  {
    id: 12,
    name: "Tênis 12",
    image: "../../../public/product-thumb-5.jpeg",
    price: 192.80,
    category: "Tênis",
    description: "Descrição do Tênis 12",
    size: "M"
  },
  {
    id: 13,
    name: "Tênis 13",
    image: "../../../public/product-thumb-5.jpeg",
    price: 110.45,
    category: "Tênis",
    description: "Descrição do Tênis 13",
    color: "Vermelho",
    size: "P"
  },
  {
    id: 14,
    name: "Camiseta 14",
    image: "../../../public/product-thumb-1.jpeg",
    price: 220.10,
    category: "Camisetas",
    description: "Descrição da Camiseta 14",
    size: "G"
  },
  {
    id: 15,
    name: "Calça 15",
    image: "../../../public/product-thumb-2.jpeg",
    price: 130.75,
    category: "Calças",
    description: "Descrição da Calça 15",
    size: "M"
  },
  {
    id: 16,
    name: "Boné 16",
    image: "../../../public/product-thumb-3.jpeg",
    price: 55.50,
    category: "Bonés",
    description: "Descrição do Boné 16",
    size: "P"
  },
  {
    id: 17,
    name: "Headphone 17",
    image: "../../../public/product-thumb-4.jpeg",
    price: 390.75,
    category: "Headphones",
    description: "Descrição do Headphone 17",
    size: "G"
  },
  {
    id: 18,
    name: "Tênis 18",
    image: "../../../public/product-thumb-5.jpeg",
    price: 179.80,
    category: "Tênis",
    description: "Descrição do Tênis 18",
    size: "M"
  },
  {
    id: 19,
    name: "Tênis 19",
    image: "../../../public/product-thumb-5.jpeg",
    price: 140.30,
    category: "Tênis",
    description: "Descrição do Tênis 19",
    size: "P"
  },
  {
    id: 20,
    name: "Tênis 20",
    image: "../../../public/product-thumb-5.jpeg",
    price: 240.99,
    priceDiscount: 200.50,
    category: "Tênis",
    description: "Descrição do Tênis 20",
    size: "G",
    color: "Azul"
  },
  {
    id: 21,
    name: "Camiseta 21",
    image: "../../../public/product-thumb-1.jpeg",
    price: 59.40,
    category: "Camisetas",
    description: "Descrição da Camiseta 21",
    size: "M"
  },
  {
    id: 22,
    name: "Calça 22",
    image: "../../../public/product-thumb-2.jpeg",
    price: 175.25,
    category: "Calças",
    description: "Descrição da Calça 22",
    size: "G",
    color: "Verde"
  },
  {
    id: 23,
    name: "Boné 23",
    image: "../../../public/product-thumb-3.jpeg",
    price: 72.10,
    category: "Bonés",
    description: "Descrição do Boné 23",
    size: "M"
  },
  {
    id: 24,
    name: "Headphone 24",
    image: "../../../public/product-thumb-4.jpeg",
    price: 400.75,
    category: "Headphones",
    description: "Descrição do Headphone 24",
    size: "M"
  },
  {
    id: 25,
    name: "Tênis 25",
    image: "../../../public/product-thumb-5.jpeg",
    price: 190.50,
    category: "Tênis",
    description: "Descrição do Tênis 25",
    color: "Azul",
    size: "M"
  },
  {
    id: 26,
    name: "Tênis 26",
    image: "../../../public/product-thumb-5.jpeg",
    price: 149.9,
    category: "Tênis",
    description: "Descrição do Tênis 26",
    size: "M"
  },
  {
    id: 27,
    name: "Tênis 27",
    image: "../../../public/product-thumb-5.jpeg",
    price: 149.9,
    category: "Tênis",
    description: "Descrição do Tênis 27",
    color: "Vermelho",
    size: "P"
  },
  {
    id: 28,
    name: "Camiseta 28",
    image: "../../../public/product-thumb-1.jpeg",
    price: 49.9,
    category: "Camisetas",
    description: "Descrição da Camiseta 28",
    size: "G"
  },
  {
    id: 29,
    name: "Calça 29",
    image: "../../../public/product-thumb-2.jpeg",
    price: 99.9,
    category: "Calças",
    description: "Descrição da Calça 29",
    size: "M"
  },
  {
    id: 30,
    name: "Boné 30",
    image: "../../../public/product-thumb-3.jpeg",
    price: 29.9,
    category: "Bonés",
    description: "Descrição do Boné 30",
    size: "P"
  },
  {
    id: 31,
    name: "Headphone 31",
    image: "../../../public/product-thumb-4.jpeg",
    price: 199.9,
    category: "Headphones",
    description: "Descrição do Headphone 31",
    size: "G"
  },
  {
    id: 32,
    name: "Tênis 32",
    image: "../../../public/product-thumb-5.jpeg",
    price: 149.9,
    category: "Tênis",
    description: "Descrição do Tênis 32",
    size: "M"
  },
  {
    id: 33,
    name: "Tênis 33",
    image: "../../../public/product-thumb-5.jpeg",
    price: 149.9,
    category: "Tênis",
    description: "Descrição do Tênis 33",
    size: "P"
  },
  {
    id: 34,
    name: "Tênis 34",
    image: "../../../public/product-thumb-5.jpeg",
    price: 149.9,
    priceDiscount: 130.50,
    category: "Tênis",
    description: "Descrição do Tênis 34",
    size: "G"
  },

  {
    id: 35,
    name: "Camiseta 35",
    image: "../../../public/product-thumb-1.jpeg",
    price: 49.9,
    category: "Camisetas",
    description: "Descrição da Camiseta 35",
    size: "M"
  },
  {
    id: 36,
    name: "Calça 36",
    image: "../../../public/product-thumb-2.jpeg",
    price: 99.9,
    category: "Calças",
    description: "Descrição da Calça 36",
    size: "G",
    color: "Verde"
  },
  {
    id: 37,
    name: "Boné 37",
    image: "../../../public/product-thumb-3.jpeg",
    price: 29.9,
    category: "Bonés",
    description: "Descrição do Boné 37",
    size: "M"
  },
  {
    id: 38,
    name: "Headphone 38",
    image: "../../../public/product-thumb-4.jpeg",
    price: 199.9,
    category: "Headphones",
    description: "Descrição do Headphone 38",
    size: "M"
  },
  {
    id: 39,
    name: "Tênis 39",
    image: "../../../public/product-thumb-5.jpeg",
    price: 149.9,
    category: "Tênis",
    description: "Descrição do Tênis 39",
    color: "Azul",
    size: "M"
  },
  {
    id: 40,
    name: "Tênis 40",
    image: "../../../public/product-thumb-5.jpeg",
    price: 149.9,
    category: "Tênis",
    description: "Descrição do Tênis 40",
    size: "M"
  },
  {
    id: 41,
    name: "Tênis 41",
    image: "../../../public/product-thumb-5.jpeg",
    price: 149.9,
    category: "Tênis",
    description: "Descrição do Tênis 41",
    color: "Vermelho",
    size: "P"
  },
  {
    id: 42,
    name: "Camiseta 42",
    image: "../../../public/product-thumb-1.jpeg",
    price: 49.9,
    category: "Camisetas",
    description: "Descrição da Camiseta 42",
    size: "G"
  },
  {
    id: 43,
    name: "Calça 43",
    image: "../../../public/product-thumb-2.jpeg",
    price: 99.9,
    category: "Calças",
    description: "Descrição da Calça 43",
    size: "M"
  },
];

export default products;

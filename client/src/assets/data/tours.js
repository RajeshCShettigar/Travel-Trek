import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tajmahal from "../images/1_tajmahal.jpg";
import goldentemple from "../images/2_goldern_temple.jpg";
import dallake from "../images/3_dallake.jpg";
import manali from "../images/4_manali.jpg";

const tours = [
  {
    id: "01",
    title: "Taj Mahal",
    city: "Agra",
    distance: 300,
    price: 150,
    maxGroupSize: 12,
    address:"Tajganj, Agra, Uttar Pradesh 282001",
    desc: "The Taj Mahal is a magnificent mausoleum located in Agra, India. Built between 1632 and 1653 by the Mughal Emperor Shah Jahan, the Taj Mahal was constructed in memory of his beloved wife, Mumtaz Mahal, who died giving birth to their 14th child. The stunning white marble structure is renowned for its exquisite craftsmanship and intricate designs, including calligraphy, floral patterns, and geometric shapes. The Taj Mahal attracts millions of visitors each year, who come to marvel at its beauty and learn about its fascinating history. It is widely regarded as one of the most iconic and stunning examples of Mughal architecture in the world.",
    reviews: [
      {
        name: "Rajesh",
        rating: 4.6,
        reviewText:"Awesome place to visit.",
        createdAt: "2020-01-01",
      },
      {
        name: "Pavan",
        rating: 4.6,
        reviewText:"Worth visiting place",
        createdAt: "2022-02-01",
      },
      {
        name: "John Wick",
        rating: 4.6,
        reviewText:"Surprised by the beauty of this place",
        createdAt: "2023-02-01",
      },
    ],
    avgRating: 4.5,
    photo: "https://res.cloudinary.com/dsajqm6yg/image/upload/v1676897766/travel/1_taj_mahal_yfn7zj.jpg",
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    address:"somewhere on earth",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    address:"somewhere on earth",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,

    price: 99,
    maxGroupSize: 8,
    address:"somewhere on earth",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    address:"somewhere on earth",
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    address:"somewhere on earth",
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "09",
    title: "Taj Mahal",
    city: "Agra, India",
    distance: 400,
    price: 990,
    maxGroupSize: 4,
    address:"somewhere on earth",
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.3,
    photo: tajmahal,
    featured: false,
  },
  {
    id: "10",
    title: "Golden temple",
    city: "Amrithsar,India",
    distance: 500,
    price: 990,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: goldentemple,
    featured: true,
  },
  {
    id: "11",
    title: "Dal Lake",
    city: "Kashmir, India",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    address:"somewhere on earth",
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: dallake,
    featured: false,
  },
  {
    id: "12",
    title: "Manali",
    city: "Himachal-Pradesh, India",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
];

export default tours;
import python from "../../assets/images/courses/python.webp";
import java from "../../assets/images/courses/java.webp";
import excel from "../../assets/images/courses/excel.webp";
import powerpoint from "../../assets/images/courses/powerpoint.webp";
import javascript from "../../assets/images/courses/javascript.webp";
import amazonweb from "../../assets/images/courses/amazon.webp";
import machine from "../../assets/images/courses/machine.webp";
import amazonsecurity from "../../assets/images/courses/amazonsecurity.webp";

const popularCoursesData = [
  {
    id: 0,
    name: "Development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="120"
          y1="176"
          x2="88"
          y2="176"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="104"
          y1="216"
          x2="104"
          y2="176"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="36"
          y1="176"
          x2="36"
          y2="216"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="64"
          y1="176"
          x2="64"
          y2="216"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="36"
          y1="196"
          x2="64"
          y2="196"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <polyline
          points="212 176 212 216 236 216"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
        <polyline
          points="144 216 144 176 164 204 184 176 184 216"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
        <path
          d="M48,136V40a8,8,0,0,1,8-8h96l56,56v48"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <polyline
          points="152 32 152 88 208 88"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
      </svg>
    ),
    items: [
      {
        id: 0,
        name: "Development",
        img: python,
        ratings: 4.6,
        title: "Learning Advanced Python",
        author: "Jose Portilla",
        price: 190,
      },
      {
        id: 1,
        name: "Development",
        img: java,
        ratings: 3.6,
        title: "Object Oriented Programming",
        author: "Jose Somolex",
        price: 190,
      },
      {
        id: 2,
        name: "Development",
        img: excel,
        ratings: 4.6,
        title: "Microsoft Excel 2013",
        author: "Adam Smith",
        price: 180,
      },
      {
        id: 3,
        name: "Development",
        img: powerpoint,
        ratings: 4.6,
        title: "Powerpoint-Master Powerpoint",
        author: "Cristofer Jonas",
        price: 190,
      },
      {
        id: 4,
        name: "Development",
        img: javascript,
        ratings: 4.6,
        title: "Javascript.JS Road To Mastery.",
        author: "Jose Portilla",
        price: 190,
      },
      {
        id: 5,
        name: "Development",
        img: amazonweb,
        ratings: 4.6,
        title: "Amazon Web Services (AWS)",
        author: "Paul Jonas",
        price: 190,
      },
      {
        id: 6,
        name: "Development",
        img: machine,
        ratings: 4.6,
        title: "Complete Machine Learning",
        author: "Andrew Nagory",
        price: 190,
      },
      {
        id: 7,
        name: "Development",
        img: amazonsecurity,
        ratings: 4.6,
        title: "Amazon AWS Security Specialty",
        author: "Dev Smith",
        price: 190,
      },
    ],
  },

  {
    id: 1,
    name: "Business",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <rect
          x="32"
          y="72"
          width="192"
          height="144"
          rx="8"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></rect>
        <path
          d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <path
          d="M224,126.3A191.3,191.3,0,0,1,128,152a190.3,190.3,0,0,1-96-25.7"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <line
          x1="116"
          y1="120"
          x2="140"
          y2="120"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
      </svg>
    ),
    items: [
      {
        id: 0,
        name: "Business",
        img: java,
        ratings: 4.6,
        title: "Learning Advanced Python From Scratch",
        author: "Jose Portilla",
        price: 190,
      },
      {
        id: 1,
        name: "Business",
        img: python,
        ratings: 3.6,
        title: "Object Oriented Programming Basic",
        author: "Jose Somolex",
        price: 190,
      },
      {
        id: 2,
        name: "Business",
        img: powerpoint,
        ratings: 4.6,
        title: "Powerpoint 2016 2019 365 - Master Powerpoint",
        author: "Adam Smith",
        price: 180,
      },
      {
        id: 3,
        name: "Business",
        img: excel,
        ratings: 4.6,
        title: "Microsoft Excel 2013 Advanced(2023 Edition)",
        author: "Cristofer Jonas",
        price: 190,
      },
      {
        id: 4,
        name: "Business",
        img: javascript,
        ratings: 4.6,
        title: "Javascript.JS Road To Mastery (2022 Eidtion)",
        author: "Jose Portilla",
        price: 190,
      },
      {
        id: 5,
        name: "Business",
        img: amazonweb,
        ratings: 4.6,
        title: "Amazon Web Services (AWS) Certified 2022 - 4 .",
        author: "Paul Jonas",
        price: 190,
      },
      {
        id: 6,
        name: "Business",
        img: machine,
        ratings: 4.6,
        title: "Complete Machine Learning & Data Science Bootcamp 2023",
        author: "Andrew Nagory",
        price: 190,
      },
      {
        id: 7,
        name: "Business",
        img: amazonsecurity,
        ratings: 4.6,
        title: "Amazon AWS Security Specialty Practice Exams | 2023",
        author: "Developemnt Smith",
        price: 190,
      },
    ],
  },

  {
    id: 2,
    name: "Finance",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <circle
          cx="128"
          cy="128"
          r="24"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></circle>
        <circle
          cx="96"
          cy="56"
          r="24"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></circle>
        <circle
          cx="200"
          cy="104"
          r="24"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></circle>
        <circle
          cx="200"
          cy="184"
          r="24"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></circle>
        <circle
          cx="56"
          cy="192"
          r="24"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></circle>
        <line
          x1="118.3"
          y1="106.1"
          x2="105.7"
          y2="77.9"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="177.2"
          y1="111.6"
          x2="150.8"
          y2="120.4"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="181.1"
          y1="169.3"
          x2="146.9"
          y2="142.7"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="110.1"
          y1="143.9"
          x2="73.9"
          y2="176.1"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
      </svg>
    ),
    items: [
      {
        id: 0,
        name: "Finance",
        img: python,
        ratings: 4.6,
        title: "Learning Advanced Python From Scratch",
        author: "Jose Portilla",
        price: 190,
      },
      {
        id: 1,
        name: "Finance",
        img: java,
        ratings: 3.6,
        title: "Object Oriented Programming Basic",
        author: "Jose Somolex",
        price: 190,
      },
      {
        id: 2,
        name: "Finance",
        img: excel,
        ratings: 4.6,
        title: "Microsoft Excel 2013 Advanced(2023 Edition)",
        author: "Adam Smith",
        price: 180,
      },
      {
        id: 3,
        name: "Finance",
        img: powerpoint,
        ratings: 4.6,
        title: "Powerpoint 2016 2019 365 - Master Powerpoint",
        author: "Cristofer Jonas",
        price: 190,
      },
      {
        id: 4,
        name: "Finance",
        img: javascript,
        ratings: 4.6,
        title: "Javascript.JS Road To Mastery (2022 Eidtion)",
        author: "Jose Portilla",
        price: 190,
      },
      {
        id: 5,
        name: "Finance",
        img: amazonweb,
        ratings: 4.6,
        title: "Amazon Web Services (AWS) Certified 2022 - 4 .",
        author: "Paul Jonas",
        price: 190,
      },
      {
        id: 6,
        name: "Finance",
        img: machine,
        ratings: 4.6,
        title: "Complete Machine Learning & Data Science Bootcamp 2023",
        author: "Andrew Nagory",
        price: 190,
      },
      {
        id: 7,
        name: "Finance",
        img: amazonsecurity,
        ratings: 4.6,
        title: "Amazon AWS Security Specialty Practice Exams | 2023",
        author: "Developemnt Smith",
        price: 190,
      },
    ],
  },

  {
    id: 3,
    name: "Fitness",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <polyline
          points="32 128 72 128 88 104 120 152 136 128 160 128"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
        <path
          d="M28.1,96c-.1-1.3-.1-2.7-.1-4A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92c0,68-100,124-100,124s-39.9-22.4-69.3-56"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
      </svg>
    ),
    items: [
      {
        id: 0,
        name: "Fitness",
        img: python,
        ratings: 4.6,
        title: "Learning Advanced Python From Scratch",
        author: "Jose Portilla",
        price: 190,
      },
      {
        id: 1,
        name: "Fitness",
        img: java,
        ratings: 3.6,
        title: "Object Oriented Programming Basic",
        author: "Jose Somolex",
        price: 190,
      },
      {
        id: 2,
        name: "Fitness",
        img: excel,
        ratings: 4.6,
        title: "Microsoft Excel 2013 Advanced(2023 Edition)",
        author: "Adam Smith",
        price: 180,
      },
      {
        id: 3,
        name: "Fitness",
        img: powerpoint,
        ratings: 4.6,
        title: "Powerpoint 2016 2019 365 - Master Powerpoint",
        author: "Cristofer Jonas",
        price: 190,
      },
      {
        id: 4,
        name: "Fitness",
        img: javascript,
        ratings: 4.6,
        title: "Javascript.JS Road To Mastery (2022 Eidtion)",
        author: "Jose Portilla",
        price: 190,
      },
      {
        id: 5,
        name: "Fitness",
        img: amazonweb,
        ratings: 4.6,
        title: "Amazon Web Services (AWS) Certified 2022 - 4 .",
        author: "Paul Jonas",
        price: 190,
      },
      {
        id: 6,
        name: "Fitness",
        img: machine,
        ratings: 4.6,
        title: "Complete Machine Learning & Data Science Bootcamp 2023",
        author: "Andrew Nagory",
        price: 190,
      },
      {
        id: 7,
        name: "Fitness",
        img: amazonsecurity,
        ratings: 4.6,
        title: "Amazon AWS Security Specialty Practice Exams | 2023",
        author: "Developemnt Smith",
        price: 190,
      },
    ],
  },

  {
    id: 4,
    name: "Marketing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <circle
          cx="116"
          cy="140"
          r="20"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></circle>
        <line
          x1="32"
          y1="224"
          x2="101.9"
          y2="154.1"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <path
          d="M32,224l139.5-23.2a7.9,7.9,0,0,0,6.1-5.1L200,136,120,56,60.3,78.4a8.1,8.1,0,0,0-5.1,6.2Z"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <path
          d="M200,136l26.3-26.3a8,8,0,0,0,0-11.4L157.7,29.7a8,8,0,0,0-11.4,0L120,56"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
      </svg>
    ),
    items: [
      {
        id: 0,
        name: "Marketing",
        img: python,
        ratings: 4.6,
        title: "Learning Advanced Python From Scratch",
        author: "Jose Portilla",
        price: 190,
      },
      {
        id: 1,
        name: "Marketing",
        img: java,
        ratings: 3.6,
        title: "Object Oriented Programming Basic",
        author: "Jose Somolex",
        price: 190,
      },
      {
        id: 2,
        name: "Marketing",
        img: excel,
        ratings: 4.6,
        title: "Microsoft Excel 2013 Advanced(2023 Edition)",
        author: "Adam Smith",
        price: 180,
      },
      {
        id: 3,
        name: "Marketing",
        img: powerpoint,
        ratings: 4.6,
        title: "Powerpoint 2016 2019 365 - Master Powerpoint",
        author: "Cristofer Jonas",
        price: 190,
      },
      {
        id: 4,
        name: "Marketing",
        img: javascript,
        ratings: 4.6,
        title: "Javascript.JS Road To Mastery (2022 Eidtion)",
        author: "Jose Portilla",
        price: 190,
      },
      {
        id: 5,
        name: "Marketing",
        img: amazonweb,
        ratings: 4.6,
        title: "Amazon Web Services (AWS) Certified 2022 - 4 .",
        author: "Paul Jonas",
        price: 190,
      },
      {
        id: 6,
        name: "Marketing",
        img: machine,
        ratings: 4.6,
        title: "Complete Machine Learning & Data Science Bootcamp 2023",
        author: "Andrew Nagory",
        price: 190,
      },
      {
        id: 7,
        name: "Marketing",
        img: amazonsecurity,
        ratings: 4.6,
        title: "Amazon AWS Security Specialty Practice Exams | 2023",
        author: "Developemnt Smith",
        price: 190,
      },
    ],
  },
];

export { popularCoursesData };

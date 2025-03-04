import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const projectsData = [
  {
    id: 1,
    title: "Satudikti",
    url: "https://satudikti.id/",
    category: "Web Application",
    img: "/images/Satudikti.jpg",
    ProjectHeader: {
      title: "Satudikti",
      publishDate: "Agustus, 2022",
      tags: "Frontend Developer",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Satudikti",
        img: "/images/satudikti1.jpg",
      },
      {
        id: uuidv4(),
        title: "Satudikti",
        img: "/images/satudikti2.jpg",
      },
      {
        id: uuidv4(),
        title: "Satudikti",
        img: "/images/satudikti3.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Satudikti",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Web Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://satudikti.id/",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "-",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Membuat website Satudikti yang informatif dan edukatif untuk memperkenalkan aplikasi Satudikti dari Kemendikbudristek. Website ini bertujuan menyampaikan bahwa Satudikti mempersatukan berbagai layanan Dikti dalam satu platform, memudahkan akses dan meningkatkan efisiensi layanan pendidikan tinggi.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Next.js",
            "TailwindCSS",
            "Figma",
            "Git",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Salah satu tantangan utama dalam pembuatan website ini adalah melakukan riset yang mendalam untuk memastikan konten yang disajikan benar-benar informatif dan mampu mengedukasi pengunjung. Website ini harus mampu menjelaskan dengan jelas bahwa aplikasi Satudikti merupakan integrasi dari berbagai layanan pendidikan tinggi, seperti Kampus Merdeka, KedaiReka, PDDikti, SISTER, SINTA, dan lainnya. Hal ini membutuhkan pemahaman yang komprehensif terhadap setiap layanan tersebut agar informasi yang disampaikan akurat, mudah dipahami, dan bermanfaat bagi masyarakat luas.",
        },
        {
          id: uuidv4(),
          details:
            "Selain itu, tantangan lain adalah pengembangan halaman admin yang memungkinkan pengelola website untuk mengupload dan mengontrol berbagai konten, seperti berita, pengumuman, beasiswa, Gmagz, FAQ, dan Tracer Study. Halaman admin ini harus dirancang dengan antarmuka yang user-friendly namun memiliki fungsionalitas yang kuat, sehingga memudahkan tim dalam mengelola dan memperbarui konten secara berkala. Kombinasi antara desain yang intuitif dan sistem backend yang stabil menjadi kunci agar website dapat beroperasi secara efisien dan efektif.",
        },
      ],
      SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 2,
    title: "Pangkalan Data Pendidikan Tinggi",
    url: "https://pddikti.kemdiktisaintek.go.id/",
    category: "Web Application",
    img: "/images/PDDIKTI.jpg",
    ProjectHeader: {
      title: "Pangkalan Data Pendidikan Tinggi",
      publishDate: "Januari, 2024",
      tags: "Frontend Developer",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Pangkalan Data Pendidikan Tinggi",
        img: "/images/pddikti1.jpg",
      },
      {
        id: uuidv4(),
        title: "Pangkalan Data Pendidikan Tinggi",
        img: "/images/pddikti3.jpg",
      },
      {
        id: uuidv4(),
        title: "Pangkalan Data Pendidikan Tinggi",
        img: "/images/pddikti2.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Pangkalan Data Pendidikan Tinggi",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "High Education",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://pddikti.kemdiktisaintek.go.id/",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "-",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Merombak dan merenovasi tampilan website lama menjadi lebih fresh, modern, dan interaktif. Dengan pembaruan ini, diharapkan pengguna dapat merasakan pengalaman yang lebih baik dalam mengakses informasi, serta meningkatkan keterlibatan pengguna melalui desain yang menarik dan fungsionalitas yang lebih optimal.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Next.js",
            "TailwindCSS",
            "Figma",
            "Git",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Tantangan utama dalam pembuatan website PDDikti adalah memastikan website dapat diakses secara umum oleh publik, dengan tetap memperhatikan privasi dan keamanan data. Website ini harus mampu menampilkan data mahasiswa dan dosen secara transparan, namun hanya informasi yang sewajarnya saja yang dapat diakses. Selain itu, tampilan website harus dirancang secara informatif dan user-friendly agar informasi yang disampaikan dapat tersalurkan dengan baik kepada pengguna, baik dari kalangan akademisi maupun masyarakat umum.",
        },
      ],
      SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 3,
    title: "Caliana Indonesia",
    url: "https://www.caliana.id/",
    category: "Web Application",
    img: "/images/Caliana.jpg",
    ProjectHeader: {
      title: "Caliana Indonesia",
      publishDate: "September, 2024",
      tags: "Frontend Developer",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Caliana Indonesia",
        img: "/images/caliana1.jpg",
      },
      {
        id: uuidv4(),
        title: "Caliana Indonesia",
        img: "/images/caliana2.jpg",
      },
      {
        id: uuidv4(),
        title: "Caliana Indonesia",
        img: "/images/caliana3.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Caliana Indonesia",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Public Safety",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.caliana.id/",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "-",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Merombak tampilan homepage perusahaan agar lebih modern dan menarik, sekaligus meningkatkan pengalaman pengguna dengan navigasi yang lancar. Selain itu, pengembangan fitur-fitur baru pada produk-produk Caliana (seperti VMS, ACS, ISS, dan Command Center) dilakukan untuk memenuhi kebutuhan klien, sambil memastikan aplikasi internal tetap efisien dan sesuai dengan perkembangan perusahaan.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Next.js",
            "TailwindCSS",
            "Figma",
            "Git",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Salah satu tantangan utama dalam pembuatan website Caliana Indonesia adalah menciptakan desain yang menarik secara visual tanpa mengorbankan fungsionalitas dan kemudahan penggunaan. Hal ini membutuhkan keseimbangan antara estetika dan usability, terutama untuk platform yang kompleks seperti VMS, ACS, ISS, dan Command Center. Selain itu, mengimplementasikan fitur-fitur baru yang sesuai dengan kebutuhan klien sambil menjaga konsistensi antarmuka pengguna juga menjadi tantangan tersendiri.",
        },
        {
          id: uuidv4(),
          details:
            "Tantangan lain adalah memastikan pengalaman pengguna yang optimal di seluruh platform, mulai dari homepage hingga aplikasi internal. Proses ini melibatkan optimasi performa, navigasi yang intuitif, dan pemeliharaan rutin agar aplikasi internal tetap up-to-date dan efisien seiring dengan perkembangan perusahaan. Kombinasi antara inovasi dan stabilitas menjadi kunci utama dalam menghadapi tantangan ini.",
        },
      ],
      SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
];

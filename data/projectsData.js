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
    id: 4,
    title: "One Click Media",
    url: "https://oneclickmedia.co.id/",
    category: "Web Application",
    img: "/images/web-project-1.jpg",
    ProjectHeader: {
      title: "One Click Media",
      publishDate: "November, 2025",
      tags: "Frontend Developer",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "One Click Media",
        img: "/images/web-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "One Click Media",
        img: "/images/web-project-2.jpg",
      },
      {
        id: uuidv4(),
        title: "One Click Media",
        img: "/images/ui-project-1.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        { id: uuidv4(), title: "Name", details: "One Click Media" },
        { id: uuidv4(), title: "Services", details: "Digital Media" },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://oneclickmedia.co.id/",
        },
        { id: uuidv4(), title: "Phone", details: "-" },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Rebuild dan redeploy website One Click Media dari shared hosting ke VPS (Private Server), dengan memisahkan frontend dan backend menjadi arsitektur microservices. Website dikembangkan menggunakan Next.js 15+ App Router yang terpisah dari backend Express.js, dengan fokus pada performa, stabilitas, dan kemudahan pengelolaan konten.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Express.js",
            "Git",
            "VPS",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Tantangan utama adalah melakukan migrasi arsitektur dari monorepo menjadi microservices (Frontend & Backend terpisah) tanpa mengganggu layanan yang sedang berjalan. Proses ini membutuhkan perencanaan yang matang, termasuk pengelolaan environment variable, konfigurasi deployment di VPS, dan memastikan komunikasi antara frontend Next.js dan backend Express.js berjalan dengan lancar melalui fetch data dan error handling yang tepat.",
        },
        {
          id: uuidv4(),
          details:
            "Selain itu, proses go-live membutuhkan stabilisasi dan bug fixing intensif untuk memastikan website berjalan optimal di lingkungan produksi. Kolaborasi erat dengan DevOps Engineer dan Backend Developer dalam tim Agile menjadi kunci keberhasilan proyek ini, termasuk optimasi performa dan peningkatan user experience setelah deployment.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },
  {
    id: 5,
    title: "PT Data Integrasi Inovasi",
    url: "https://nuha.care/",
    category: "Web Application",
    img: "/images/web-project-2.jpg",
    ProjectHeader: {
      title: "PT Data Integrasi Inovasi",
      publishDate: "September, 2025",
      tags: "Frontend Developer",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "PT Data Integrasi Inovasi",
        img: "/images/web-project-2.jpg",
      },
      {
        id: uuidv4(),
        title: "PT Data Integrasi Inovasi",
        img: "/images/ui-project-2.jpg",
      },
      {
        id: uuidv4(),
        title: "PT Data Integrasi Inovasi",
        img: "/images/ui-project-1.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        { id: uuidv4(), title: "Name", details: "PT Data Integrasi Inovasi" },
        {
          id: uuidv4(),
          title: "Services",
          details: "Healthcare & HR Technology",
        },
        { id: uuidv4(), title: "Website", details: "https://nuha.care/" },
        { id: uuidv4(), title: "Phone", details: "-" },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Mengembangkan dan memelihara dua aplikasi utama: ASHA (Healthcare Information System) dan HRIS. Tujuan utama adalah membangun sistem yang memudahkan manajemen data pasien, tracking berkas dengan workflow otomatis, serta pengelolaan sumber daya manusia secara efisien melalui dashboard analytics yang informatif.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Zustand",
            "TanStack Query",
            "Recharts",
            "React Hook Form",
            "Git",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Tantangan utama adalah membangun fitur tracking berkas pasien dengan workflow otomatis yang kompleks, yang membutuhkan state management yang solid menggunakan Zustand dan React Context API. Selain itu, optimasi data fetching dengan TanStack Query diperlukan untuk memastikan performa dashboard analytics yang menampilkan data dalam jumlah besar tetap responsif dan efisien.",
        },
        {
          id: uuidv4(),
          details:
            "Membangun data visualization menggunakan Recharts dan menangani complex form dengan React Hook Form juga menjadi tantangan tersendiri, terutama dalam menjaga konsistensi antarmuka antara aplikasi ASHA dan HRIS. Kolaborasi dengan backend engineer dan QA dalam Agile sprint menjadi kunci untuk memastikan kualitas dan ketepatan waktu pengiriman fitur.",
        },
      ],
      SocialSharingHeading: "Share This",
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

export const bioData = {
    name: "Marcus Thorne",
    title: "Visual Director",
    tagline: "Shadows speak louder than light.",
    description: "Specializing in high-contrast narrative cinema. Exploring the silence between chaos.",
    stats: [
      { label: "Features", value: "05" },
      { label: "Shorts", value: "12" },
      { label: "Festivals", value: "24" }
    ],
    // BAGIAN BARU: Detail spesifik untuk halaman About (Poin A-I)
    details: {
      biodata: [
        { label: "Nama Lengkap", value: "Marcus Aurelius Thorne" },
        { label: "NIM", value: "13521000" },
        { label: "Jurusan", value: "Teknik Informatika" },
        { label: "Tempat, Tanggal Lahir", value: "Bandung, 12 Oktober 2002" },
        { label: "Hobi", value: "Analog Photography, Hiking" },
      ],
      lfmHistory: "Selama di LFM, saya aktif di divisi Sinematografi. Pernah menjabat sebagai Ketua Pelaksana Pameran Angkatan dan Head of Visual untuk proyek dokumenter tahunan. Saya belajar banyak tentang teknis kamera ARRI dan manajemen set.",
      memorableLFM: "Momen paling memorable adalah saat syuting 'Midnight Frequency' di hutan pinus Lembang selama 3 hari. Hujan deras turun tepat saat scene klimaks, dan kami memutuskan untuk tetap lanjut (roll camera) yang justru menghasilkan visual paling dramatis di film tersebut.",
      memorableEducation: "Berhasil menyelesaikan tugas besar Grafika Komputer (membuat engine render 3D) di minggu yang sama dengan deadline pasca-produksi film pendek festival.",
      lfmWorks: [
        "The Silent Echo (Director of Photography)",
        "Neon Rain (Colorist)",
        "Dust & Bones (Editor)",
        "Video Profil ITB 2023 (Camera Assistant)"
      ],
      messageInterviewer: "Terima kasih telah meluangkan waktu membedah portofolio ini. Saya harap diskusi kita bisa membuka perspektif baru tentang bagaimana visual storytelling bisa diterapkan di industri.",
      messageJuniors: "Untuk Ca-Kru 2025: Jangan takut terlihat bodoh saat belajar. LFM adalah tempat teraman untuk melakukan kesalahan dan memperbaikinya. Nikmati setiap proses capeknya, karena itu yang akan kalian rindukan.",
      favoriteCrewImage: "https://placehold.co/800x500/18181b/f97316?text=Foto+Bersama+Kru+Favorit"
    }
  };
  
  export const movies = [
    {
      id: 1,
      title: "Midnight Frequency",
      year: "2024",
      synopsis: "A radio host receives a distress call from a cosmonaut who claims to be orbiting a planet that doesn't exist.",
      duration: "1h 42m",
      genre: "Sci-Fi Thriller",
      image: "https://placehold.co/600x800/09090b/f97316?text=Midnight+Freq"
    },
    {
      id: 2,
      title: "The Concrete Garden",
      year: "2023",
      synopsis: "Two architects trapped in a Brutalist building realize the walls are shifting to keep them inside.",
      duration: "2h 05m",
      genre: "Psychological Horror",
      image: "https://placehold.co/600x800/09090b/f97316?text=Concrete+Garden"
    },
    {
      id: 3,
      title: "Echoes of Cobalt",
      year: "2021",
      synopsis: "A deep-sea welder discovers a sunken city that perfectly mimics his childhood home.",
      duration: "1h 30m",
      genre: "Mystery",
      image: "https://placehold.co/600x800/09090b/f97316?text=Echoes+of+Cobalt"
    },
    {
      id: 4,
      title: "Rust",
      year: "2020",
      synopsis: "In a world without water, a mechanic builds a machine to extract moisture from the air, making him a target for the local warlord.",
      duration: "1h 55m",
      genre: "Dystopian",
      image: "https://placehold.co/600x800/09090b/f97316?text=Rust"
    }
  ];
  
  export const blogPosts = [
    {
      id: 1,
      title: "The Art of Negative Space",
      date: "Nov 10, 2024",
      excerpt: "Why what you don't see in the frame is more frightening than what you do."
    },
    {
      id: 2,
      title: "Analog Grading in a Digital World",
      date: "Oct 05, 2024",
      excerpt: "Returning to 16mm film stock for 'The Concrete Garden' and the challenges of physical media."
    },
    {
      id: 3,
      title: "Soundscapes of Isolation",
      date: "Sep 12, 2024",
      excerpt: "Collaborating with Hans Zimmer's team to create silence that feels heavy."
    }
  ];
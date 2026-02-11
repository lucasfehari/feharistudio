export interface Project {
    id: string;
    client: string;
    category: string;
    size: string;
    image: string;
    desc: string;
    link?: string; // Optional link to specific Behance project or live site
}

export const projects: Project[] = [
    {
        id: "01",
        client: "Dr. Willian Ortega",
        category: "Desenvolvimento de Site",
        size: "col-span-1 md:col-span-2 row-span-2",
        image: "/portfolio/dr-willian-ortega.png",
        desc: "Desenvolvimento de site para o Dr. Willian Ortega.",
        link: "https://www.behance.net/gallery/242240123/Instituto-Willian-Ortega-Luxury-Aesthetics-UI"
    },
    {
        id: "02",
        client: "Goias Bank",
        category: "Posts Social Media",
        size: "col-span-1 md:col-span-1 row-span-1",
        image: "/portfolio/goiasbank.png",
        desc: "Posts para redes sociais."
    },
    {
        id: "03",
        client: "Codental",
        category: "Posts Social Media",
        size: "col-span-1 md:col-span-1 row-span-1",
        image: "/portfolio/codental.png",
        desc: "Posts para redes sociais."
    },
    {
        id: "04",
        client: "Filazilla app",
        category: "Desenvolvimento de App",
        size: "col-span-1 md:col-span-2 row-span-1",
        image: "/portfolio/filazilla.png",
        desc: "Desenvolvimento de app para agendamento de serviços.",
        link: "https://filazilla.app/"
    },
    {
        id: "05",
        client: "Nebula Finance",
        category: "Brand Identity",
        size: "col-span-1 md:col-span-2 row-span-1",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        desc: "Rebrand completo para fintech série B."
    },
    {
        id: "06",
        client: "G2 Company",
        category: "Identidade Visual",
        size: "col-span-1 md:col-span-2 row-span-1",
        image: "/portfolio/g2.png",
        desc: "Desenvolvimento de identidade visual para a G2 Company.",
        link: "https://www.behance.net/gallery/243825351/Identidade-Visual-G2-Company"
    },
    {
        id: "07",
        client: "Toyota Ramires",
        category: "Posts Social Media",
        size: "col-span-1 md:col-span-2 row-span-1",
        image: "/portfolio/toyota.png",
        desc: "Desenvolvimento de posts para redes sociais para a Toyota Ramires."
    },
    // Add more projects here following the pattern
];

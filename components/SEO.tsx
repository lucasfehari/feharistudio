import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    type?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = "Fehari | Braço Criativo Sob Demanda",
    description = "Design e tecnologia sob demanda. Construímos interfaces, marcas e experiências digitais para o futuro.",
    url = "https://fehari.com",
    image = "/og-image.jpg",
    type = "website"
}) => {
    const siteTitle = title === "Fehari | Braço Criativo Sob Demanda" ? title : `${title} | Fehari`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;

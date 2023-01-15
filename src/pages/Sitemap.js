import React from 'react';
import SubjectAreas from '../components/share/SubjectAreas';
import FreeResources from '../components/sitemap/FreeResources';
import PopularTopics from '../components/sitemap/PopularTopics';

import SIteMapBanner from '../components/sitemap/SIteMapBanner';

const Sitemap = () => {
    return (
        <div>
            <SIteMapBanner />
            <SubjectAreas />
            <PopularTopics />
            <FreeResources />
        </div>
    );
};

export default Sitemap;
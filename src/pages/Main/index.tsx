import {
    MainSection
} from './styles';

import { useEffect } from 'react';

//library
import "aos/dist/aos.css";
import Aos from 'aos';
import { AboutPage } from '../About';
import { ProjectsPage } from '../Projects';
import { ContactPage } from '../Contact';
import { HomePage } from '../Home';

export function MainPage() {

    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true
        });
    }, [])

    return (
        <MainSection>
            <HomePage />
            <AboutPage />
            <ProjectsPage />
            <ContactPage />
        </MainSection>
    )
}

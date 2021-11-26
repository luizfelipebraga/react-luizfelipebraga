import {
    MainSection
} from './styles';

import { AboutPage } from '../About';
import { ProjectsPage } from '../Projects';
import { ContactPage } from '../Contact';
import { HomePage } from '../Home';

export function MainPage() {

    if (typeof window !== 'undefined') {
        // eslint-disable-next-line global-require
        require('smooth-scroll')('a[href*="/"]');
    }

    return (
        <MainSection>
            <HomePage />
            <AboutPage />
            <ProjectsPage />
            <ContactPage />
        </MainSection>
    )
}

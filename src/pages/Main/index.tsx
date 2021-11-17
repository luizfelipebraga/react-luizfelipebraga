import {
    MainSection
} from './styles';

//library
import { AboutPage } from '../About';
import { ProjectsPage } from '../Projects';
import { ContactPage } from '../Contact';
import { HomePage } from '../Home';

export function MainPage() {

    return (
        <MainSection>
            <HomePage />
            <AboutPage />
            <ProjectsPage />
            <ContactPage />
        </MainSection>
    )
}

import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './components/home/HomePage';
import MeetTheTeam from './components/about/MeetTheTeam';
import Services from './components/services/Services';
import FrequentlyAskedQuestions from './components/services/FrequentyAskedQuestions';
import HelpfulInfo from './components/services/HelpfulInfo';
import ContactUs from './components/about/ContactUs';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'meet-the-team',
        element: <MeetTheTeam />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'faq',
        element: <FrequentlyAskedQuestions />
      },
      {
        path: 'helpful-info',
        element: <HelpfulInfo />
      },
      {
        path: 'contact',
        element: <ContactUs />
      }
    ]
  }
]);

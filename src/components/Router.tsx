import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import ServicesPage from '@/components/pages/ServicesPage';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';
import DoctorsPage from '@/components/pages/DoctorsPage';
import DoctorDetailPage from '@/components/pages/DoctorDetailPage';
import AppointmentPage from '@/components/pages/AppointmentPage';
import ContactPage from '@/components/pages/ContactPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "about",
        element: <AboutPage />,
        routeMetadata: {
          pageIdentifier: 'about',
        },
      },
      {
        path: "services",
        element: <ServicesPage />,
        routeMetadata: {
          pageIdentifier: 'services',
        },
      },
      {
        path: "services/:id",
        element: <ServiceDetailPage />,
        routeMetadata: {
          pageIdentifier: 'service-detail',
        },
      },
      {
        path: "doctors",
        element: <DoctorsPage />,
        routeMetadata: {
          pageIdentifier: 'doctors',
        },
      },
      {
        path: "doctors/:id",
        element: <DoctorDetailPage />,
        routeMetadata: {
          pageIdentifier: 'doctor-detail',
        },
      },
      {
        path: "appointment",
        element: <AppointmentPage />,
        routeMetadata: {
          pageIdentifier: 'appointment',
        },
      },
      {
        path: "contact",
        element: <ContactPage />,
        routeMetadata: {
          pageIdentifier: 'contact',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}

import { request } from 'utils/frontEnd';
import ClientTable from 'components/tables/clients';
import { IClients, IValues } from 'types';

interface IndexPageProps {
  clients: IClients[];
}

const Index: React.FC<IndexPageProps> = ({ clients }) => {
  const onRegister = async (formData: IValues) => {
    try {
      await request('POST', '/clients', formData);
    } catch (err) {
      console.log(err);
    }
  };

  return <ClientTable clients={clients} onRegister={onRegister} />;
};

export default Index;

/**
 * Trying to use getServerSideProps. if we fetch the data in the useEffect,
 * the page will have the loading time, and big amount of data cases,
 * it will affect the page performance even if it has the pagination
 */
export const getServerSideProps = async () => {
  try {
    // get clients with request function
    const res = await request('GET', '/clients');

    // validation: if clients is undefined or null, return notfound.
    if (!res?.body) return { notFound: true };

    return { props: { clients: res.body.clients } };
  } catch (err) {
    return { notFound: true };
  }
};

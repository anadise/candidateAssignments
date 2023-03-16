import { Fragment, FC, useState } from 'react';
import { IClients, IValues } from 'types';
import RegisterPannel from './RegisterPannel';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import MoalWrapper from 'components/common/modal';
import FormikWrapper from './FormikWrapper';

interface ClientTableProps {
  clients: IClients[];
  onRegister: (value: IValues) => void;
}

const ClientTable: FC<ClientTableProps> = ({ clients, onRegister }) => {
  const [modalIsOpen, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <RegisterPannel setOpen={setOpen} />
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flow-root">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <TableHeader />
                  <TableBody clients={clients} />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoalWrapper modalIsOpen={modalIsOpen} onClose={() => setOpen(false)}>
        <FormikWrapper setOpen={setOpen} onRegister={onRegister} />
      </MoalWrapper>
    </Fragment>
  );
};

export default ClientTable;

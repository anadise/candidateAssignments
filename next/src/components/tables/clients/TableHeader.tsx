import { ClientTableHeaderRow } from 'types';

const headerRows: ClientTableHeaderRow[] = [
  {
    title: 'Name',
    classes: 'pl-4 pr-3',
  },
  {
    title: 'Rate',
  },
  {
    title: 'Support Tier',
  },
];

const TableHeader = () => (
  <thead>
    <tr>
      {headerRows.map((i, k) => (
        <th
          key={k}
          scope="col"
          className={`px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0 ${i.classes}`}
        >
          {i.title}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;

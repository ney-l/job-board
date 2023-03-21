import {
  Center,
  Thead,
  Box,
  Table,
  Tr,
  Th,
  Text,
  Tbody,
  Td,
} from '@chakra-ui/react';

import { Entity } from '@/types';

import { Loading } from '../loading';

type DataTableColumn<Entry> = {
  title: string;
  field: keyof Entry;
  render?: ({ entry }: { entry: Entry }) => JSX.Element;
};

export type DataTableProps<Entry> = {
  isLoading: boolean;
  data?: Entry[];
  columns: DataTableColumn<Entry>[];
};

export const DataTable = <Entry extends Entity>({
  data,
  columns,
  isLoading,
}: DataTableProps<Entry>) => {
  if (isLoading) return <Loading />;

  if (data?.length === 0) return <NoData />;

  return (
    <Box
      h="full"
      rounded="md"
      borderWidth="1px"
      bg="whiteAlpha.400"
    >
      <Box overflowX="auto">
        <Table variant="striped" w="full">
          <TableHead columns={columns} />
          <Tbody>
            {data?.map((entry, entryIndex) => (
              <TableRow
                entry={entry}
                entryIndex={entryIndex}
                columns={columns}
                key={entry.id || entryIndex}
              />
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

function TableHead<Entry>({
  columns,
}: {
  columns: DataTableColumn<Entry>[];
}) {
  return (
    <Thead>
      <Tr>
        {columns.map((column, index) => (
          <Th key={column.title + index}>
            {column.title}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
}

function TableRow<Entry extends Entity>({
  entry,
  entryIndex,
  columns,
}: {
  entry: Entry;
  entryIndex: number;
  columns: DataTableColumn<Entry>[];
}) {
  return (
    <Tr key={entry.id || entryIndex}>
      {columns.map(
        ({ field, title, render }, columnIndex) => (
          <Td key={title + columnIndex}>
            <Text>
              {render
                ? render({ entry })
                : `${entry[field] ?? ''}`}
            </Text>
          </Td>
        )
      )}
    </Tr>
  );
}

function NoData() {
  return (
    <Center h="56" p="4" bg="gray.100" borderRadius="md">
      No Data
    </Center>
  );
}

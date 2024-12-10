import { dealStatus } from '../../utils/dealStatus';
import { Badge } from '@mantine/core';

export default function ContactStatus({ contactStatus }: { contactStatus: string }) {
  const status = dealStatus.find((status) => status.value === contactStatus);
  let badgeColor = 'gray';

  switch (status?.value) {
    case 'new':
      badgeColor = 'cyan';
      break;
    case 'contacted':
      badgeColor = 'cyan';
      break;
    case 'qualified':
      badgeColor = 'cyan';
      break;
    case 'unqualified':
      badgeColor = 'red';
      break;
    case 'negotiation':
      badgeColor = 'blue';
      break;
    case 'on_hold':
      badgeColor = 'yellow';
      break;
    case 'won':
      badgeColor = 'green';
      break;
    case 'lost':
      badgeColor = 'red';
      break;
    default:
      badgeColor = 'gray';
  }

  if (!status) {
    return <Badge color={badgeColor}>-</Badge>;
  }

  return (
    <Badge
      radius="sm"
      variant="light"
      color={badgeColor}
    >
      {status.label}
    </Badge>
  );
}

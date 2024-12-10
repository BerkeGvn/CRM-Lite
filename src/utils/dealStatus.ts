export interface DealStatus {
  label: string;
  value: string;
}

export const dealStatus = [
  {
    label: 'New',
    value: 'new',
  },
  {
    label: 'Contacted',
    value: 'contacted',
  },
  {
    label: 'Qualified',
    value: 'qualified',
  },
  {
    label: 'Unqualified',
    value: 'unqualified',
  },
  {
    label: 'Negotiation',
    value: 'negotiation',
  },
  {
    label: 'On Hold',
    value: 'on_hold',
  },
  {
    label: 'Won',
    value: 'won',
  },
  {
    label: 'Lost',
    value: 'lost',
  },
];

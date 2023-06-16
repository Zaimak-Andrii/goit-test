export const FilterStatuses = ['all', 'follow', 'following'] as const;
export type FilterStatus = (typeof FilterStatuses)[number];

import { createSelector } from 'reselect';

const directorySelector = (state) => state.directory;

export const directorySection = createSelector(
  [directorySelector],
  (directory) => directory.sections
);

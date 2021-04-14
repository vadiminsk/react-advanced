export const moviewList = () => {
  return {
    type: 'MOVIES_LIST',
    payload: [
      { id: 1, name: 'Pulp fiction' },
      { id: 2, name: 'Pulp rim' },
      { id: 3, name: 'Rambo' },
    ],
  };
};

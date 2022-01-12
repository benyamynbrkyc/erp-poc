import create from 'zustand';

import { IUser } from 'components/Posts';

interface IState {
  user: IUser | null;
  login: () => void;
  logout: () => void;
}

const useStore = create<IState>((set) => ({
  user: null,
  login: () =>
    set((state) => {
      set({ user: null });
    }),
  logout: () => {
    set({ user: null });
  },
}));

export default useStore;

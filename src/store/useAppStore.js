import { create } from 'zustand';

export const useAppStore = create(set => ({
  user: null,
  selectedTruckId: null,
  setUser: user => set({ user }),
  setSelectedTruckId: selectedTruckId => set({ selectedTruckId }),
  clearSession: () => set({ user: null, selectedTruckId: null }),
}));

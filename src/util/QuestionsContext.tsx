import { create } from "zustand";
import { ImageElementType } from "./references";

type QuestionMap = Map<number, ImageElementType>;

interface QuestionStore {
  chosenQuestions: QuestionMap;
  updateQuestions: (key: number, value: ImageElementType) => void;
  deleteFromQuestions: (key: number) => void;
  clearQuestions: () => void;
}
const useQuestionStore = create<QuestionStore>((set) => ({
  chosenQuestions: new Map(),
  updateQuestions: (key, value) =>
    set((state) => ({
      chosenQuestions: new Map(state.chosenQuestions.set(key, value)),
    })),
  deleteFromQuestions: (key) =>
    set((state) => {
      const tempMap = new Map(state.chosenQuestions);
      tempMap.delete(key);
      return { chosenQuestions: tempMap };
    }),
  clearQuestions: () => set({ chosenQuestions: new Map() }),
}));

export const useQuestionsContext = useQuestionStore;

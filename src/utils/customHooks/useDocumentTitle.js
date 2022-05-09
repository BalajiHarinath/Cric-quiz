import { useEffect } from "react";

export const useDocumentTitle = (text) => {
  useEffect(() => {
    document.title = text;
  }, []);
};

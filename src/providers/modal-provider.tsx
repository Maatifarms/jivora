"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { Dialog } from "@/components/ui/dialog";

export interface ModalState<T = unknown> {
  isOpen: boolean;
  modalType: string | null;
  data?: T;
}

interface ModalContextType {
  modalState: ModalState;
  openModal: <T>(modalType: string, data?: T) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    modalType: null,
    data: undefined,
  });

  const openModal = useCallback(<T,>(modalType: string, data?: T) => {
    setModalState({
      isOpen: true,
      modalType,
      data,
    });
  }, []);

  const closeModal = useCallback(() => {
    setModalState({
      isOpen: false,
      modalType: null,
      data: undefined,
    });
  }, []);

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

/**
 * Global Modal Container shell component.
 * Mounted once at the root level to display active global dialogs dynamically.
 */
export function ModalContainer() {
  const { modalState, closeModal } = useModal();

  if (!modalState.isOpen || !modalState.modalType) return null;

  return (
    <Dialog
      isOpen={modalState.isOpen}
      onClose={closeModal}
      title={modalState.modalType}
    >
      <div className="text-sm text-muted-foreground p-2">
        <p>Global Modal Infrastructure initialized for: <strong className="text-foreground">{modalState.modalType}</strong></p>
      </div>
    </Dialog>
  );
}

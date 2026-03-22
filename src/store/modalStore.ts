import { create } from "zustand";
import { Project, PhotoCategory, BrandingProject } from "@/types";

interface ModalState {
  isOpen: boolean;
  modalType: "project" | "photo" | "branding" | null;
  selectedProject: Project | null;
  selectedPhoto: PhotoCategory | null;
  selectedBranding: BrandingProject | null;
  currentImageIndex: number;
  
  openProjectModal: (project: Project) => void;
  openPhotoModal: (photo: PhotoCategory) => void;
  openBrandingModal: (branding: BrandingProject) => void;
  closeModal: () => void;
  setCurrentImageIndex: (index: number) => void;
  nextImage: () => void;
  prevImage: () => void;
}

export const useModalStore = create<ModalState>((set, get) => ({
  isOpen: false,
  modalType: null,
  selectedProject: null,
  selectedPhoto: null,
  selectedBranding: null,
  currentImageIndex: 0,

  openProjectModal: (project) =>
    set({
      isOpen: true,
      modalType: "project",
      selectedProject: project,
      selectedPhoto: null,
      selectedBranding: null,
      currentImageIndex: 0,
    }),

  openPhotoModal: (photo) =>
    set({
      isOpen: true,
      modalType: "photo",
      selectedPhoto: photo,
      selectedProject: null,
      selectedBranding: null,
      currentImageIndex: 0,
    }),

  openBrandingModal: (branding) =>
    set({
      isOpen: true,
      modalType: "branding",
      selectedBranding: branding,
      selectedProject: null,
      selectedPhoto: null,
      currentImageIndex: 0,
    }),

  closeModal: () =>
    set({
      isOpen: false,
      modalType: null,
      selectedProject: null,
      selectedPhoto: null,
      selectedBranding: null,
      currentImageIndex: 0,
    }),

  setCurrentImageIndex: (index) => set({ currentImageIndex: index }),

  nextImage: () => {
    const { modalType, selectedPhoto, selectedBranding, currentImageIndex } = get();
    let maxIndex = 0;
    
    if (modalType === "photo" && selectedPhoto) {
      maxIndex = selectedPhoto.images.length - 1;
    } else if (modalType === "branding" && selectedBranding) {
      maxIndex = selectedBranding.images.length - 1;
    }
    
    set({ currentImageIndex: currentImageIndex < maxIndex ? currentImageIndex + 1 : 0 });
  },

  prevImage: () => {
    const { modalType, selectedPhoto, selectedBranding, currentImageIndex } = get();
    let maxIndex = 0;
    
    if (modalType === "photo" && selectedPhoto) {
      maxIndex = selectedPhoto.images.length - 1;
    } else if (modalType === "branding" && selectedBranding) {
      maxIndex = selectedBranding.images.length - 1;
    }
    
    set({ currentImageIndex: currentImageIndex > 0 ? currentImageIndex - 1 : maxIndex });
  },
}));

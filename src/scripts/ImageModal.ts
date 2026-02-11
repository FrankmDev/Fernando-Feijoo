/**
 * Image Modal Controller
 * Manages a full-screen image gallery modal with navigation
 */

export class ImageModal {
  private modal: HTMLElement | null = null;
  private imageEl: HTMLImageElement | null = null;
  private currentEl: HTMLElement | null = null;
  private totalEl: HTMLElement | null = null;
  private closeBtn: HTMLElement | null = null;
  private prevBtn: HTMLElement | null = null;
  private nextBtn: HTMLElement | null = null;
  private loadingEl: HTMLElement | null = null;

  private images: string[] = [];
  private currentIndex = 0;
  private isOpen = false;

  constructor(modalId: string) {
    this.modal = document.getElementById(modalId);
    if (!this.modal) {
      console.error(`Modal with id "${modalId}" not found`);
      return;
    }

    this.imageEl = this.modal.querySelector(".modal-image");
    this.currentEl = this.modal.querySelector(".modal-current");
    this.totalEl = this.modal.querySelector(".modal-total");
    this.closeBtn = this.modal.querySelector(".modal-close");
    this.prevBtn = this.modal.querySelector(".modal-prev");
    this.nextBtn = this.modal.querySelector(".modal-next");
    this.loadingEl = this.modal.querySelector(".modal-loading");

    this.bindEvents();
  }

  /**
   * Opens the modal with a set of images starting at the specified index
   */
  openModal(images: string[], startIndex: number = 0): void {
    this.images = images;
    this.currentIndex = startIndex;
    this.isOpen = true;

    this.updateImage();
    this.updateCounter();
    this.show();

    document.body.classList.add("modal-open");
    document.addEventListener("keydown", this.handleKeydown);
  }

  /**
   * Closes the modal
   */
  close(): void {
    this.isOpen = false;
    this.hide();
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", this.handleKeydown);
  }

  /**
   * Shows the modal element
   */
  private show(): void {
    this.modal?.classList.remove("hidden");
    // Trigger reflow for transition
    void this.modal?.offsetHeight;
    this.modal?.classList.add("active");
  }

  /**
   * Hides the modal element
   */
  private hide(): void {
    this.modal?.classList.remove("active");
    setTimeout(() => {
      this.modal?.classList.add("hidden");
    }, 300);
  }

  /**
   * Navigates to the previous image
   */
  private prev(): void {
    if (this.images.length <= 1) return;
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
    this.updateImage();
    this.updateCounter();
  }

  /**
   * Navigates to the next image
   */
  private next(): void {
    if (this.images.length <= 1) return;
    this.currentIndex =
      this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
    this.updateImage();
    this.updateCounter();
  }

  /**
   * Updates the displayed image
   */
  private updateImage(): void {
    if (!this.imageEl || this.images.length === 0) return;

    const src = this.images[this.currentIndex];
    this.showLoading();

    const img = new Image();
    img.onload = () => {
      if (this.imageEl) {
        this.imageEl.src = src;
        this.imageEl.classList.remove("opacity-0");
        this.hideLoading();
      }
    };
    img.onerror = () => {
      this.hideLoading();
    };
    img.src = src;

    this.imageEl.classList.add("opacity-0");
  }

  /**
   * Updates the image counter display
   */
  private updateCounter(): void {
    if (this.currentEl) {
      this.currentEl.textContent = String(this.currentIndex + 1);
    }
    if (this.totalEl) {
      this.totalEl.textContent = String(this.images.length);
    }
  }

  /**
   * Shows the loading spinner
   */
  private showLoading(): void {
    if (this.loadingEl) {
      this.loadingEl.style.display = "flex";
    }
  }

  /**
   * Hides the loading spinner
   */
  private hideLoading(): void {
    if (this.loadingEl) {
      this.loadingEl.style.display = "none";
    }
  }

  /**
   * Handles keyboard navigation
   */
  private handleKeydown = (e: KeyboardEvent): void => {
    switch (e.key) {
      case "Escape":
        this.close();
        break;
      case "ArrowLeft":
        this.prev();
        break;
      case "ArrowRight":
        this.next();
        break;
    }
  };

  /**
   * Binds event listeners to controls
   */
  private bindEvents(): void {
    this.closeBtn?.addEventListener("click", () => this.close());
    this.prevBtn?.addEventListener("click", () => this.prev());
    this.nextBtn?.addEventListener("click", () => this.next());

    // Close on backdrop click
    this.modal?.addEventListener("click", (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });
  }
}

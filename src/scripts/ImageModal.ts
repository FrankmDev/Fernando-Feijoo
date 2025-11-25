export class ImageModal {
  private modal: HTMLElement;
  private modalImage!: HTMLImageElement;
  private modalCurrent!: HTMLElement;
  private modalTotal!: HTMLElement;
  private closeBtn!: HTMLElement;
  private prevBtn!: HTMLElement;
  private nextBtn!: HTMLElement;
  private images: string[] = [];
  private currentIndex: number = 0;

  constructor(modalId: string = "imageModal") {
    this.modal = document.getElementById(modalId) as HTMLElement;
    if (!this.modal) {
      console.warn(`Modal with id ${modalId} not found`);
      return;
    }

    this.modalImage = this.modal.querySelector(
      ".modal-image"
    ) as HTMLImageElement;
    this.modalCurrent = this.modal.querySelector(
      ".modal-current"
    ) as HTMLElement;
    this.modalTotal = this.modal.querySelector(".modal-total") as HTMLElement;
    this.closeBtn = this.modal.querySelector(".modal-close") as HTMLElement;
    this.prevBtn = this.modal.querySelector(".modal-prev") as HTMLElement;
    this.nextBtn = this.modal.querySelector(".modal-next") as HTMLElement;

    this.bindEvents();
    this.setupImageEvents();
  }

  private bindEvents() {
    // Close modal events
    this.closeBtn?.addEventListener("click", () => this.closeModal());
    this.modal?.addEventListener("click", (e) => {
      if (e.target === this.modal) this.closeModal();
    });

    // Navigation events
    this.prevBtn?.addEventListener("click", () => this.showPreviousImage());
    this.nextBtn?.addEventListener("click", () => this.showNextImage());

    // Keyboard events
    document.addEventListener("keydown", (e) => {
      if (!this.modal.classList.contains("hidden")) {
        switch (e.key) {
          case "Escape":
            this.closeModal();
            break;
          case "ArrowLeft":
            this.showPreviousImage();
            break;
          case "ArrowRight":
            this.showNextImage();
            break;
        }
      }
    });
  }

  private setupImageEvents() {
    if (this.modalImage) {
      this.modalImage.addEventListener("load", () => {
        this.hideLoading();
        this.modalImage.style.opacity = "1";
      });

      this.modalImage.addEventListener("error", () => {
        this.hideLoading();
        this.modalImage.style.opacity = "1";
      });
    }
  }

  private showLoading() {
    const loading = this.modal.querySelector(".modal-loading") as HTMLElement;
    if (loading) loading.style.display = "flex";
    this.modalImage.style.opacity = "0";
  }

  private hideLoading() {
    const loading = this.modal.querySelector(".modal-loading") as HTMLElement;
    if (loading) loading.style.display = "none";
  }

  public openModal(images: string[], startIndex: number = 0) {
    this.images = images;
    this.currentIndex = startIndex;

    if (this.images.length === 0) return;

    // Update total count
    if (this.modalTotal) {
      this.modalTotal.textContent = this.images.length.toString();
    }

    // Show/hide navigation buttons based on number of images
    const showNavigation = this.images.length > 1;
    if (this.prevBtn)
      this.prevBtn.style.display = showNavigation ? "block" : "none";
    if (this.nextBtn)
      this.nextBtn.style.display = showNavigation ? "block" : "none";

    this.showCurrentImage();
    this.modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  private showCurrentImage() {
    if (this.currentIndex < 0 || this.currentIndex >= this.images.length)
      return;

    this.showLoading();

    const imageSrc = this.images[this.currentIndex];
    this.modalImage.src = imageSrc;
    this.modalImage.alt = `Image ${this.currentIndex + 1} of ${this.images.length}`;

    if (this.modalCurrent) {
      this.modalCurrent.textContent = (this.currentIndex + 1).toString();
    }
  }

  private showPreviousImage() {
    if (this.images.length <= 1) return;
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
    this.showCurrentImage();
  }

  private showNextImage() {
    if (this.images.length <= 1) return;
    this.currentIndex =
      this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
    this.showCurrentImage();
  }

  private closeModal() {
    this.modal.classList.add("hidden");
    document.body.style.overflow = "";
    this.modalImage.src = "";
    this.hideLoading();
    this.modalImage.style.opacity = "0";
  }
}

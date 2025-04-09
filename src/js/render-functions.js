import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const container = document.querySelector('.gallery');

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  enableKeyboard: true,
  disableScroll: true,
  fadeSpeed: 400,
  overlayOpacity: 1,
});

export function createGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
    <a href="${largeImageURL}" class="gallery-item-link">
    <img class="gallery-item-img" src="${webformatURL}" alt="${tags}"/>
    </a>
    <div class="gallery-item-info-wrapper">
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Likes</h2>
        <p class="gallery-item-info-value">${likes}</p>
      </div>
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Views</h2>
        <p class="gallery-item-info-value">${views}</p>
      </div>
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Comments</h2>
        <p class="gallery-item-info-value">${comments}</p>
      </div>
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Downloads</h2>
        <p class="gallery-item-info-value">${downloads}</p>
      </div>
    </div>
  </li>`
    )
    .join('');
}

export function clearGallery() {
  container.innerHTML = '';
}

const loader = document.querySelector('.loader');

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export const loadMoreBtn = document.querySelector('.load-more');

export function showLoadMoreButton() {
  loadMoreBtn.hidden = false;
}

export function hideLoadMoreButton() {
  loadMoreBtn.hidden = true;
}

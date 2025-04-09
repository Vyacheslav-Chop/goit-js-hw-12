import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  container,
  lightbox,
  clearGallery,
  showLoader,
  createGallery,
  hideLoader,
  loadMoreBtn,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const iconPath = new URL('./img/iconError.svg', import.meta.url).href;

const form = document.querySelector('.form');
hideLoader();

let page = 1;
let query = '';

form.addEventListener('submit', handleSearch);

async function handleSearch(event) {
  event.preventDefault();

  clearGallery();
  page = 1;

  query = form.elements['search-text'].value.trim();
  if (!query) {
    form.reset();
    showErrorMessage('Please fill in the search field!');
    return;
  }

  showLoader();
  hideLoadMoreButton();

  try {
    const { hits, totalHits } = await getImagesByQuery(query, page);

    if (hits.length === 0) {
      showErrorMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      hideLoadMoreButton();
      return;
    }
    updateGallery(hits);
    checkEndOfCollection(totalHits);
  } catch (error) {
    showErrorMessage('Something went wrong. Please try again later!');
  } finally {
    hideLoader();
    form.reset();
  }
}

loadMoreBtn.addEventListener('click', loadMore);

async function loadMore(event) {
  
  const moreBtn = event.currentTarget;
  if (!moreBtn) return;

  page++;
  hideLoadMoreButton();
  moreBtn.disabled = true;
  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(query, page);

    updateGallery(hits);
    setTimeout(() => smoothScroll(), 0);
    checkEndOfCollection(totalHits);
    moreBtn.disabled = false;
  } catch (error) {
    showErrorMessage('Something went wrong. Please try again later!');
  } finally {
    hideLoader();
  }
}

function checkEndOfCollection(totalHits) {
  if (page * 15 >= totalHits) {
    showInfoMessage(
      "We're sorry, but you've reached the end of search results."
    );
    hideLoadMoreButton();
  } else {
    showLoadMoreButton();
  }
}

function showErrorMessage(message) {
  iziToast.error({
    message,
    position: 'topRight',
    backgroundColor: '#ef4040',
    messageColor: '#ffffff',
    maxWidth: '400',
    iconUrl: iconPath,
  });
}

function showInfoMessage(message) {
  iziToast.info({
    message,
    position: 'bottomCenter',
    maxWidth: '400',
  });
}

function smoothScroll() {
  const galleryItem = document.querySelector('.gallery-item');
  const rect = galleryItem.getBoundingClientRect();
  const heightItem = rect.height;

  window.scrollBy({
    top: heightItem * 2,
    behavior: 'smooth',
  });
}

function updateGallery(hits) {
  container.insertAdjacentHTML('beforeend', createGallery(hits));
  lightbox.refresh();
}

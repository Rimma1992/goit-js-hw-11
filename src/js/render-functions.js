import { lightbox } from '../main';
import { gallery } from '../main';

export function renderData(data) {
  // console.log(data);
  const img = data.hits;
  const arrayOfImg = img
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="list-link">

                            <a href="${largeImageURL}">
                            <img class="gallery-links" src="${webformatURL}" alt="${tags}"></a>

                            <div class="parameters">
                                <ul class="parameters-list">
                                    <li class="parameters-list-item">likes:</li>
                                    <li class="parameters-list-item">${likes}</li>
                                </ul>
                                <ul class="parameters-list">
                                    <li class="parameters-list-item">views:</li>
                                    <li class="parameters-list-item">${views}</li>
                                </ul>
                                <ul class="parameters-list">
                                    <li class="parameters-list-item">comments:</li>
                                    <li class="parameters-list-item">${comments}</li>
                                </ul>
                                <ul class="parameters-list">
                                    <li class="parameters-list-item">downloads:</li>
                                    <li class="parameters-list-item">${downloads}</li>
                                </ul>
                        </div>
                        </li>`;
      }
    )
    .join('');

  gallery.innerHTML = arrayOfImg;
  lightbox.refresh(
    'https://github.com/andreknieriem/simplelightbox#public-methods'
  );
}
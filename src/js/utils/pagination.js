import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const options = { 
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton: '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton: '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton: '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>'
  }
};
const pagination = new Pagination('#tui-pagination-container', options);
console.dir(pagination);

const page = pagination.getCurrentPage()

// fetchMoviesCard(page).then(({ images, totalItems }) => {pagination.reset(totalItems);renderImages(images)})
// async function fetchMoviesCard(page) {
//     const res = await fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}&per_page=10`);
//   const data = res.json;
//   return ({ images: data.hits, total: data.totalHits });
// }

// function renderImages (images) {
//   // console.log(images);
//   console.log(`render`);
// }
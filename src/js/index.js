
import Search from './models/Search';

/** GLOBAL STATE OF THE APP
 * -Search object
 * -Current recipe object
 * -Shopping list object 
 * -liked recipes
 */

const state = {};

const controlSearch = async () => {
  // 1) Get query from view
  const query = 'pizza' //TO DO will come from view

  if (query) {
    // 2) New search object and add it to state
    state.search = new Search(query);

    // 3) Prepare UI for results
    
    // 4) Search for recipes
    await state.search.getResults();

    // 5) Render Results on UI
    console.log(state.search.result);
  }
}

document.querySelector('.search').addEventListener('submit', e => {
   e.preventDefault();
   controlSearch();
});


import refs from './refs';
import countryCard from '../templates/country-card.hbs';
import countryList from '../templates/country-list.hbs';

export function renderCountryList(countries) {
  const markup = countryList(countries);
  refs.cardContainer.insertAdjacentHTML('beforeend', markup);
}

export function renderCountryCard(country) {
  const markup = countryCard(country);
  refs.cardContainer.insertAdjacentHTML('beforeend', markup);
}

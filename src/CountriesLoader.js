import axios from 'axios'

let loadCountriesInfo = () => {
  return axios.get('https://restcountries.eu/rest/v2/all'
  ).then(function (response) {
    return response.data
  }).catch(function (error) {
    return error.response
  })
}

let countriesInfo = loadCountriesInfo()

countriesInfo.then(function (value) {
  createCountriesList(value)
})

let countriesWithIcons = []

function createCountriesList (countriesCode) {
  countriesCode.map((v) => {
    countriesWithIcons.push(
      {
        iconUrl: 'https://www.countryflags.io/' + v.alpha2Code + '/flat/64.png',
        title: v.name,
        tooltip: '+' + v.callingCodes[0]
      }
    )
  })
}

export default {
  countriesWithIcons
}

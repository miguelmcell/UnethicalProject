module.exports = function(sortDirection, sortColumn, axios) {
  return {
    sortData: async function() {
      const columns = {"City": "QOL_idCity", "Housing": "Housing", "Cost of Living": "Cost_of_Living", "Commute": "Commute", "Healthcare": "Healthcare", "Education": "Education", "Environmental Quality": "Environmental_Quality", "Tax": "Tax"}
      let sortedData = []
      let tableRows =
        [
         {
           "Commute": 2,
           "Cost_of_Living": 4,
           "Education": 11,
           "Environmental_Quality": 2,
           "Healthcare": 5,
           "Housing": 5,
           "QOL_idCity": 1816,
           "Tax": 4
         },
         {
           "Commute": 7,
           "Cost_of_Living": 11,
           "Education": 4,
           "Environmental_Quality": 3,
           "Healthcare": 7,
           "Housing": 8,
           "QOL_idCity": 1817,
           "Tax": 8
         },
         {
           "Commute": 1,
           "Cost_of_Living": 8,
           "Education": 1,
           "Environmental_Quality": 2,
           "Healthcare": 2,
           "Housing": 11,
           "QOL_idCity": 1818,
           "Tax": 7
         }
      ];
      if(sortDirection === 'asc') {
        sortedData = tableRows.sort(function(a, b){return a[columns[sortColumn]]-b[columns[sortColumn]]})
      } else {
        sortedData = tableRows.sort(function(a, b){return b[columns[sortColumn]]-a[columns[sortColumn]]})
      }
      return sortedData;
    },
    checkCrime: async function (){
			return await axios.get('http://dev.movecity.live/v1/api/Crime')
        .then(function (response){
          return response.data;
        });
	  },
    checkCity: async function (){
			return await axios.get('http://dev.movecity.live/v1/api/City')
        .then(function (response){
          return response.data;
        });
	  },
    changePage: async function() {
      let selected = 1;
      return selected + 1;
    },
    onClickClimate: async function(){
			return await axios.get('http://dev.movecity.live/v1/api/Climate')
        .then(function(response){
          return response.data.objects.length;
      });
    },
    pageNotFound: async function(){
			return await axios.get('http://dev.movecity.live/dowakd')
        .then(function(response){
          return response.data;
      });
    },
    getCityImageLink: async function(){
			return await axios.get('http://dev.movecity.live/v1/getCityImage/Austin')
        .then(function(response){
          return response.data;
      });
    }
  };
};

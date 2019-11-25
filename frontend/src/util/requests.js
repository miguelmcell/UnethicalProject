const axios = require('axios').default;

module.exports = function(axios) {
    const elements = {
        backend: "http://dev.movecity.live/v1/status",
        gitlabIssuesAPI: "https://gitlab.com/api/v4/projects/14523582/issues",
        gitlabCommitsAPI: "https://gitlab.com/api/v4/projects/14523582/repository/commits/",
    };
    return {
        // url:  'https://movecity.live',
        elements: elements,
        hitTestEndpoint: async function() {
            let config = {
                headers: {
                    "PRIVATE-TOKEN": "ic7tQSERwW4SnsdxXfuD",
                    "Access-Control-Allow-Origin": "*",
                }
            }
            let data = {}
            return await axios.get(elements.backend, data, config)
                .then(function (response) {
                          // handle success
                          return response.data;
                  });

              // return axios.wait(until.elementLocated(elements.backend));
        },
        hitGitlabIssuesAPI: async function() {
            let config = {
                headers: {
                    "PRIVATE-TOKEN": "ic7tQSERwW4SnsdxXfuD",
                    "Access-Control-Allow-Origin": "*",
                }
            }
            let data = {}
            return await axios.get(elements.gitlabIssuesAPI, data, config)
                .then(function (response) {
                          // handle success
                          return response.data;
                  });

              // return axios.wait(until.elementLocated(elements.backend));
        },
        hitGitlabCommitsAPI: async function() {
            let config = {
                headers: {
                    "PRIVATE-TOKEN": "ic7tQSERwW4SnsdxXfuD",
                    "Access-Control-Allow-Origin": "*",
                }
            }
            let data = {}
            return await axios.get(elements.gitlabIssuesAPI, data, config)
                .then(function (response) {
                          // handle success
                          return response.data;
                  });

              // return axios.wait(until.elementLocated(elements.backend));
        },
    };
};

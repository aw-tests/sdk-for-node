const Service = require('../service.js');
const AppwriteException = require('../exception.js');
const InputFile = require('../inputFile.js');
const client = require('../client.js');
const Stream = require('stream');
const { promisify } = require('util');
const fs = require('fs');

class Graphql extends Service {

     constructor(client)
     {
        super(client);
     }


    /**
     * GraphQL Endpoint
     *
     * Execute a GraphQL query.
     *
     * @param {string} query
     * @param {string} operationName
     * @param {string} variables
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async 63a0228ea55af(query, operationName, variables) {
        let path = '/graphql';
        let payload = {};
        if (typeof query === 'undefined') {
            throw new AppwriteException('Missing required parameter: "query"');
        }


        if (typeof query !== 'undefined') {
            payload['query'] = query;
        }

        if (typeof operationName !== 'undefined') {
            payload['operationName'] = operationName;
        }

        if (typeof variables !== 'undefined') {
            payload['variables'] = variables;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * GraphQL Endpoint
     *
     * Execute a GraphQL mutation.
     *
     * @param {object} query
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async query(query) {
        let path = '/graphql';
        let payload = {};
        if (typeof query === 'undefined') {
            throw new AppwriteException('Missing required parameter: "query"');
        }


        if (typeof query !== 'undefined') {
            payload['query'] = query;
        }

        return await this.client.call('post', path, {
            'x-sdk-graphql': 'true',
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * GraphQL Endpoint
     *
     * Execute a GraphQL mutation.
     *
     * @param {object} query
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async mutation(query) {
        let path = '/graphql/mutation';
        let payload = {};
        if (typeof query === 'undefined') {
            throw new AppwriteException('Missing required parameter: "query"');
        }


        if (typeof query !== 'undefined') {
            payload['query'] = query;
        }

        return await this.client.call('post', path, {
            'x-sdk-graphql': 'true',
            'content-type': 'application/json',
        }, payload);
    }
}

module.exports = Graphql;

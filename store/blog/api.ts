import fetch from 'cross-fetch'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { BlogDetail } from './type.js'
import * as Queries from './queries.js';

const apiUrl = 'http://localhost:4000/graphql'

class BlogApi {
  private _apolloClient: ApolloClient<NormalizedCacheObject>

  public constructor() {
    // HTTP connection to the API
    const httpLink = {
      // You should use an absolute URL here
      uri: apiUrl,
      credentials: 'same-origin',
      fetch: fetch,
      headers: {} as {
        [key: string]: string
      }
    }

    // Create the apollo client
    this._apolloClient = new ApolloClient({
      link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }): void => {
          if (graphQLErrors) {
            graphQLErrors.map(({ message, locations, path }): void => {
              console.log(`[GraphQL Error] Message: ${message} Location: ${locations} Path: ${path}`)
            })
          }
          if (networkError) {
            console.log(`[Network Error] ${networkError}`)
          }
        }),
        new HttpLink(httpLink)
      ]),
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all'
        },
        mutate: {
          errorPolicy: 'all'
        }
      }
    })
  }

  public async getBlogList(): Promise<{ BlogList: Array<BlogDetail> }> {
    const result = await this._apolloClient.query({
      query: Queries.getBlogList
    })
    return { BlogList: result.data.blogs }
  }
}

let instance: BlogApi

export function getBlogApi(): BlogApi {
  if (!instance) instance = new BlogApi()

  return instance
}
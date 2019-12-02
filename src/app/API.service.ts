/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateUserInput = {
  id?: string | null;
  email: string;
  firstname?: string | null;
  lastname?: string | null;
  bio?: string | null;
  profilepic?: string | null;
};

export type UpdateUserInput = {
  id: string;
  email?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  bio?: string | null;
  profilepic?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateRestaurantInput = {
  addressLine?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  zipCode?: string | null;
  state?: string | null;
  country?: string | null;
};

export type UpdateRestaurantInput = {
  addressLine?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  zipCode?: string | null;
  state?: string | null;
  country?: string | null;
};

export type DeleteRestaurantInput = {
  id?: string | null;
};

export type CreateTestingEventInput = {
  startTime?: string | null;
  endTime?: string | null;
  eventPicture?: string | null;
};

export type UpdateTestingEventInput = {
  startTime?: string | null;
  endTime?: string | null;
  eventPicture?: string | null;
};

export type DeleteTestingEventInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null;
  email?: ModelStringFilterInput | null;
  firstname?: ModelStringFilterInput | null;
  lastname?: ModelStringFilterInput | null;
  bio?: ModelStringFilterInput | null;
  profilepic?: ModelStringFilterInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelRestaurantFilterInput = {
  addressLine?: ModelStringFilterInput | null;
  addressLine2?: ModelStringFilterInput | null;
  city?: ModelStringFilterInput | null;
  zipCode?: ModelStringFilterInput | null;
  state?: ModelStringFilterInput | null;
  country?: ModelStringFilterInput | null;
  and?: Array<ModelRestaurantFilterInput | null> | null;
  or?: Array<ModelRestaurantFilterInput | null> | null;
  not?: ModelRestaurantFilterInput | null;
};

export type ModelTestingEventFilterInput = {
  startTime?: ModelStringFilterInput | null;
  endTime?: ModelStringFilterInput | null;
  eventPicture?: ModelStringFilterInput | null;
  and?: Array<ModelTestingEventFilterInput | null> | null;
  or?: Array<ModelTestingEventFilterInput | null> | null;
  not?: ModelTestingEventFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  email: string;
  firstname: string | null;
  lastname: string | null;
  bio: string | null;
  profilepic: string | null;
  restaurant: {
    __typename: "Restaurant";
    addressLine: string | null;
    addressLine2: string | null;
    city: string | null;
    zipCode: string | null;
    state: string | null;
    country: string | null;
    testingEvent: {
      __typename: "TestingEvent";
      startTime: string | null;
      endTime: string | null;
      eventPicture: string | null;
    } | null;
  } | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  email: string;
  firstname: string | null;
  lastname: string | null;
  bio: string | null;
  profilepic: string | null;
  restaurant: {
    __typename: "Restaurant";
    addressLine: string | null;
    addressLine2: string | null;
    city: string | null;
    zipCode: string | null;
    state: string | null;
    country: string | null;
    testingEvent: {
      __typename: "TestingEvent";
      startTime: string | null;
      endTime: string | null;
      eventPicture: string | null;
    } | null;
  } | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  email: string;
  firstname: string | null;
  lastname: string | null;
  bio: string | null;
  profilepic: string | null;
  restaurant: {
    __typename: "Restaurant";
    addressLine: string | null;
    addressLine2: string | null;
    city: string | null;
    zipCode: string | null;
    state: string | null;
    country: string | null;
    testingEvent: {
      __typename: "TestingEvent";
      startTime: string | null;
      endTime: string | null;
      eventPicture: string | null;
    } | null;
  } | null;
};

export type CreateRestaurantMutation = {
  __typename: "Restaurant";
  addressLine: string | null;
  addressLine2: string | null;
  city: string | null;
  zipCode: string | null;
  state: string | null;
  country: string | null;
  testingEvent: {
    __typename: "TestingEvent";
    startTime: string | null;
    endTime: string | null;
    eventPicture: string | null;
  } | null;
};

export type UpdateRestaurantMutation = {
  __typename: "Restaurant";
  addressLine: string | null;
  addressLine2: string | null;
  city: string | null;
  zipCode: string | null;
  state: string | null;
  country: string | null;
  testingEvent: {
    __typename: "TestingEvent";
    startTime: string | null;
    endTime: string | null;
    eventPicture: string | null;
  } | null;
};

export type DeleteRestaurantMutation = {
  __typename: "Restaurant";
  addressLine: string | null;
  addressLine2: string | null;
  city: string | null;
  zipCode: string | null;
  state: string | null;
  country: string | null;
  testingEvent: {
    __typename: "TestingEvent";
    startTime: string | null;
    endTime: string | null;
    eventPicture: string | null;
  } | null;
};

export type CreateTestingEventMutation = {
  __typename: "TestingEvent";
  startTime: string | null;
  endTime: string | null;
  eventPicture: string | null;
};

export type UpdateTestingEventMutation = {
  __typename: "TestingEvent";
  startTime: string | null;
  endTime: string | null;
  eventPicture: string | null;
};

export type DeleteTestingEventMutation = {
  __typename: "TestingEvent";
  startTime: string | null;
  endTime: string | null;
  eventPicture: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  email: string;
  firstname: string | null;
  lastname: string | null;
  bio: string | null;
  profilepic: string | null;
  restaurant: {
    __typename: "Restaurant";
    addressLine: string | null;
    addressLine2: string | null;
    city: string | null;
    zipCode: string | null;
    state: string | null;
    country: string | null;
    testingEvent: {
      __typename: "TestingEvent";
      startTime: string | null;
      endTime: string | null;
      eventPicture: string | null;
    } | null;
  } | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    email: string;
    firstname: string | null;
    lastname: string | null;
    bio: string | null;
    profilepic: string | null;
    restaurant: {
      __typename: "Restaurant";
      addressLine: string | null;
      addressLine2: string | null;
      city: string | null;
      zipCode: string | null;
      state: string | null;
      country: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetRestaurantQuery = {
  __typename: "Restaurant";
  addressLine: string | null;
  addressLine2: string | null;
  city: string | null;
  zipCode: string | null;
  state: string | null;
  country: string | null;
  testingEvent: {
    __typename: "TestingEvent";
    startTime: string | null;
    endTime: string | null;
    eventPicture: string | null;
  } | null;
};

export type ListRestaurantsQuery = {
  __typename: "ModelRestaurantConnection";
  items: Array<{
    __typename: "Restaurant";
    addressLine: string | null;
    addressLine2: string | null;
    city: string | null;
    zipCode: string | null;
    state: string | null;
    country: string | null;
    testingEvent: {
      __typename: "TestingEvent";
      startTime: string | null;
      endTime: string | null;
      eventPicture: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetTestingEventQuery = {
  __typename: "TestingEvent";
  startTime: string | null;
  endTime: string | null;
  eventPicture: string | null;
};

export type ListTestingEventsQuery = {
  __typename: "ModelTestingEventConnection";
  items: Array<{
    __typename: "TestingEvent";
    startTime: string | null;
    endTime: string | null;
    eventPicture: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
  firstname: string | null;
  lastname: string | null;
  bio: string | null;
  profilepic: string | null;
  restaurant: {
    __typename: "Restaurant";
    addressLine: string | null;
    addressLine2: string | null;
    city: string | null;
    zipCode: string | null;
    state: string | null;
    country: string | null;
    testingEvent: {
      __typename: "TestingEvent";
      startTime: string | null;
      endTime: string | null;
      eventPicture: string | null;
    } | null;
  } | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
  firstname: string | null;
  lastname: string | null;
  bio: string | null;
  profilepic: string | null;
  restaurant: {
    __typename: "Restaurant";
    addressLine: string | null;
    addressLine2: string | null;
    city: string | null;
    zipCode: string | null;
    state: string | null;
    country: string | null;
    testingEvent: {
      __typename: "TestingEvent";
      startTime: string | null;
      endTime: string | null;
      eventPicture: string | null;
    } | null;
  } | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
  firstname: string | null;
  lastname: string | null;
  bio: string | null;
  profilepic: string | null;
  restaurant: {
    __typename: "Restaurant";
    addressLine: string | null;
    addressLine2: string | null;
    city: string | null;
    zipCode: string | null;
    state: string | null;
    country: string | null;
    testingEvent: {
      __typename: "TestingEvent";
      startTime: string | null;
      endTime: string | null;
      eventPicture: string | null;
    } | null;
  } | null;
};

export type OnCreateRestaurantSubscription = {
  __typename: "Restaurant";
  addressLine: string | null;
  addressLine2: string | null;
  city: string | null;
  zipCode: string | null;
  state: string | null;
  country: string | null;
  testingEvent: {
    __typename: "TestingEvent";
    startTime: string | null;
    endTime: string | null;
    eventPicture: string | null;
  } | null;
};

export type OnUpdateRestaurantSubscription = {
  __typename: "Restaurant";
  addressLine: string | null;
  addressLine2: string | null;
  city: string | null;
  zipCode: string | null;
  state: string | null;
  country: string | null;
  testingEvent: {
    __typename: "TestingEvent";
    startTime: string | null;
    endTime: string | null;
    eventPicture: string | null;
  } | null;
};

export type OnDeleteRestaurantSubscription = {
  __typename: "Restaurant";
  addressLine: string | null;
  addressLine2: string | null;
  city: string | null;
  zipCode: string | null;
  state: string | null;
  country: string | null;
  testingEvent: {
    __typename: "TestingEvent";
    startTime: string | null;
    endTime: string | null;
    eventPicture: string | null;
  } | null;
};

export type OnCreateTestingEventSubscription = {
  __typename: "TestingEvent";
  startTime: string | null;
  endTime: string | null;
  eventPicture: string | null;
};

export type OnUpdateTestingEventSubscription = {
  __typename: "TestingEvent";
  startTime: string | null;
  endTime: string | null;
  eventPicture: string | null;
};

export type OnDeleteTestingEventSubscription = {
  __typename: "TestingEvent";
  startTime: string | null;
  endTime: string | null;
  eventPicture: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          id
          email
          firstname
          lastname
          bio
          profilepic
          restaurant {
            __typename
            addressLine
            addressLine2
            city
            zipCode
            state
            country
            testingEvent {
              __typename
              startTime
              endTime
              eventPicture
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          id
          email
          firstname
          lastname
          bio
          profilepic
          restaurant {
            __typename
            addressLine
            addressLine2
            city
            zipCode
            state
            country
            testingEvent {
              __typename
              startTime
              endTime
              eventPicture
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          id
          email
          firstname
          lastname
          bio
          profilepic
          restaurant {
            __typename
            addressLine
            addressLine2
            city
            zipCode
            state
            country
            testingEvent {
              __typename
              startTime
              endTime
              eventPicture
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateRestaurant(
    input: CreateRestaurantInput
  ): Promise<CreateRestaurantMutation> {
    const statement = `mutation CreateRestaurant($input: CreateRestaurantInput!) {
        createRestaurant(input: $input) {
          __typename
          addressLine
          addressLine2
          city
          zipCode
          state
          country
          testingEvent {
            __typename
            startTime
            endTime
            eventPicture
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRestaurantMutation>response.data.createRestaurant;
  }
  async UpdateRestaurant(
    input: UpdateRestaurantInput
  ): Promise<UpdateRestaurantMutation> {
    const statement = `mutation UpdateRestaurant($input: UpdateRestaurantInput!) {
        updateRestaurant(input: $input) {
          __typename
          addressLine
          addressLine2
          city
          zipCode
          state
          country
          testingEvent {
            __typename
            startTime
            endTime
            eventPicture
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRestaurantMutation>response.data.updateRestaurant;
  }
  async DeleteRestaurant(
    input: DeleteRestaurantInput
  ): Promise<DeleteRestaurantMutation> {
    const statement = `mutation DeleteRestaurant($input: DeleteRestaurantInput!) {
        deleteRestaurant(input: $input) {
          __typename
          addressLine
          addressLine2
          city
          zipCode
          state
          country
          testingEvent {
            __typename
            startTime
            endTime
            eventPicture
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRestaurantMutation>response.data.deleteRestaurant;
  }
  async CreateTestingEvent(
    input: CreateTestingEventInput
  ): Promise<CreateTestingEventMutation> {
    const statement = `mutation CreateTestingEvent($input: CreateTestingEventInput!) {
        createTestingEvent(input: $input) {
          __typename
          startTime
          endTime
          eventPicture
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTestingEventMutation>response.data.createTestingEvent;
  }
  async UpdateTestingEvent(
    input: UpdateTestingEventInput
  ): Promise<UpdateTestingEventMutation> {
    const statement = `mutation UpdateTestingEvent($input: UpdateTestingEventInput!) {
        updateTestingEvent(input: $input) {
          __typename
          startTime
          endTime
          eventPicture
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTestingEventMutation>response.data.updateTestingEvent;
  }
  async DeleteTestingEvent(
    input: DeleteTestingEventInput
  ): Promise<DeleteTestingEventMutation> {
    const statement = `mutation DeleteTestingEvent($input: DeleteTestingEventInput!) {
        deleteTestingEvent(input: $input) {
          __typename
          startTime
          endTime
          eventPicture
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTestingEventMutation>response.data.deleteTestingEvent;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          email
          firstname
          lastname
          bio
          profilepic
          restaurant {
            __typename
            addressLine
            addressLine2
            city
            zipCode
            state
            country
            testingEvent {
              __typename
              startTime
              endTime
              eventPicture
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            email
            firstname
            lastname
            bio
            profilepic
            restaurant {
              __typename
              addressLine
              addressLine2
              city
              zipCode
              state
              country
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetRestaurant(id: string): Promise<GetRestaurantQuery> {
    const statement = `query GetRestaurant($id: ID!) {
        getRestaurant(id: $id) {
          __typename
          addressLine
          addressLine2
          city
          zipCode
          state
          country
          testingEvent {
            __typename
            startTime
            endTime
            eventPicture
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRestaurantQuery>response.data.getRestaurant;
  }
  async ListRestaurants(
    filter?: ModelRestaurantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRestaurantsQuery> {
    const statement = `query ListRestaurants($filter: ModelRestaurantFilterInput, $limit: Int, $nextToken: String) {
        listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            addressLine
            addressLine2
            city
            zipCode
            state
            country
            testingEvent {
              __typename
              startTime
              endTime
              eventPicture
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRestaurantsQuery>response.data.listRestaurants;
  }
  async GetTestingEvent(id: string): Promise<GetTestingEventQuery> {
    const statement = `query GetTestingEvent($id: ID!) {
        getTestingEvent(id: $id) {
          __typename
          startTime
          endTime
          eventPicture
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTestingEventQuery>response.data.getTestingEvent;
  }
  async ListTestingEvents(
    filter?: ModelTestingEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTestingEventsQuery> {
    const statement = `query ListTestingEvents($filter: ModelTestingEventFilterInput, $limit: Int, $nextToken: String) {
        listTestingEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            startTime
            endTime
            eventPicture
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTestingEventsQuery>response.data.listTestingEvents;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          email
          firstname
          lastname
          bio
          profilepic
          restaurant {
            __typename
            addressLine
            addressLine2
            city
            zipCode
            state
            country
            testingEvent {
              __typename
              startTime
              endTime
              eventPicture
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          email
          firstname
          lastname
          bio
          profilepic
          restaurant {
            __typename
            addressLine
            addressLine2
            city
            zipCode
            state
            country
            testingEvent {
              __typename
              startTime
              endTime
              eventPicture
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          email
          firstname
          lastname
          bio
          profilepic
          restaurant {
            __typename
            addressLine
            addressLine2
            city
            zipCode
            state
            country
            testingEvent {
              __typename
              startTime
              endTime
              eventPicture
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateRestaurantListener: Observable<
    OnCreateRestaurantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRestaurant {
        onCreateRestaurant {
          __typename
          addressLine
          addressLine2
          city
          zipCode
          state
          country
          testingEvent {
            __typename
            startTime
            endTime
            eventPicture
          }
        }
      }`
    )
  ) as Observable<OnCreateRestaurantSubscription>;

  OnUpdateRestaurantListener: Observable<
    OnUpdateRestaurantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRestaurant {
        onUpdateRestaurant {
          __typename
          addressLine
          addressLine2
          city
          zipCode
          state
          country
          testingEvent {
            __typename
            startTime
            endTime
            eventPicture
          }
        }
      }`
    )
  ) as Observable<OnUpdateRestaurantSubscription>;

  OnDeleteRestaurantListener: Observable<
    OnDeleteRestaurantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRestaurant {
        onDeleteRestaurant {
          __typename
          addressLine
          addressLine2
          city
          zipCode
          state
          country
          testingEvent {
            __typename
            startTime
            endTime
            eventPicture
          }
        }
      }`
    )
  ) as Observable<OnDeleteRestaurantSubscription>;

  OnCreateTestingEventListener: Observable<
    OnCreateTestingEventSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTestingEvent {
        onCreateTestingEvent {
          __typename
          startTime
          endTime
          eventPicture
        }
      }`
    )
  ) as Observable<OnCreateTestingEventSubscription>;

  OnUpdateTestingEventListener: Observable<
    OnUpdateTestingEventSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTestingEvent {
        onUpdateTestingEvent {
          __typename
          startTime
          endTime
          eventPicture
        }
      }`
    )
  ) as Observable<OnUpdateTestingEventSubscription>;

  OnDeleteTestingEventListener: Observable<
    OnDeleteTestingEventSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTestingEvent {
        onDeleteTestingEvent {
          __typename
          startTime
          endTime
          eventPicture
        }
      }`
    )
  ) as Observable<OnDeleteTestingEventSubscription>;
}

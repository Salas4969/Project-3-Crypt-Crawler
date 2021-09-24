const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }

  type Character {
    _id: ID!
    name: String
    weapons: [Weapons]
  }

  type Weapons {
    name: String
    option: {
      sword
      spear
      shield
    }
  }

  type Enemy {
    name: String
    weapons: [Weapons]
  }

  type Auth {
    token: ID!
    user: User
  }

    type Mutation {
    addCharacter(name: String!): Auth
    addWeapons(name: String!)
    addEnemy(name: String!)

  }
`;

module.exports = typeDefs;

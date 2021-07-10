const userRoles = {
  guest: 1,
  user: 2,
  admin: 4,
  superAdmin: 8
};

const config = {

  server: {
    portServer: 8082,
    host_dev: 'https://localhost',
    host_prod: 'https://www.lesophocle.zetools.fr',
  },

  email: {
    user: 'lesophocledev@gmail.com',
  },

  dbConfig: {
    port: 3306,
    host: '178.170.8.35',
    database: 'lesophocle',
    username: 'jfp',
    password: 'Zepadawan123',

  },

  configAccessLevels: {
    guest: userRoles.guest | userRoles.user | userRoles.admin | userRoles.superAdmin,
    user: userRoles.user | userRoles.admin | userRoles.superAdmin,
    admin: userRoles.admin | userRoles.superAdmin,
    superAdmin: userRoles.superAdmin,
  },

  secret: " Secret"

}

export default config;
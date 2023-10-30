const Client = require('./lib/client.js');
const Query = require('./lib/query.js');
const Permission = require('./lib/permission.js');
const Role = require('./lib/role.js');
const ID = require('./lib/id.js');
const InputFile = require('./lib/inputFile.js');
const AppwriteException = require('./lib/exception.js');
const Account = require('./lib/services/account.js');
const Avatars = require('./lib/services/avatars.js');
const Databases = require('./lib/services/databases.js');
const Functions = require('./lib/services/functions.js');
const Graphql = require('./lib/services/graphql.js');
const Health = require('./lib/services/health.js');
const Locale = require('./lib/services/locale.js');
const Storage = require('./lib/services/storage.js');
const Teams = require('./lib/services/teams.js');
const Users = require('./lib/services/users.js');
const Browser = require("./lib/enums/browser.js");
const CreditCard = require("./lib/enums/credit-card.js");
const Flag = require("./lib/enums/flag.js");
const RelationshipType = require("./lib/enums/relationship-type.js");
const RelationMutate = require("./lib/enums/relation-mutate.js");
const IndexType = require("./lib/enums/index-type.js");
const Runtime = require("./lib/enums/runtime.js");
const Method = require("./lib/enums/method.js");
const Compression = require("./lib/enums/compression.js");
const ImageGravity = require("./lib/enums/image-gravity.js");
const ImageFormat = require("./lib/enums/image-format.js");
const PasswordVersion = require("./lib/enums/password-version.js");

module.exports = {
    Client,
    Query,
    Permission,
    Role,
    ID,
    InputFile,
    AppwriteException,
    Account,
    Avatars,
    Databases,
    Functions,
    Graphql,
    Health,
    Locale,
    Storage,
    Teams,
    Users,
    Browser,
    CreditCard,
    Flag,
    RelationshipType,
    RelationMutate,
    IndexType,
    Runtime,
    Method,
    Compression,
    ImageGravity,
    ImageFormat,
    PasswordVersion,
};

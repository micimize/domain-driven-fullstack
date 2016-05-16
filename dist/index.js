require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Domains = exports.implementation = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _strictduck = __webpack_require__(3);
	
	var _strictduck2 = _interopRequireDefault(_strictduck);
	
	var _strictduckControlInverted = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DomainType = (0, _strictduck.extend)({
	    name: 'Domain',
	    methods: ['withPrefix', 'withoutPrefix', 'register', 'get']
	});
	
	var Domain = function () {
	    function Domain(_ref) {
	        var _this = this;
	
	        var _ref$name = _ref.name;
	        var name = _ref$name === undefined ? "" : _ref$name;
	
	        var subdomains = _objectWithoutProperties(_ref, ['name']);
	
	        _classCallCheck(this, Domain);
	
	        this.prefix = name;
	        Object.keys(subdomains).forEach(function (subName) {
	            return _this.registerSubdomain({ name: subName, domain: subdomains[subName] });
	        });
	    }
	
	    _createClass(Domain, [{
	        key: 'withPrefix',
	        value: function withPrefix(name) {
	            return (this.prefix == "" ? "" : this.prefix + "/") + name;
	        }
	    }, {
	        key: 'withoutPrefix',
	        value: function withoutPrefix(name) {
	            return name.replace(new RegExp('^' + this.prefix + '/'), '');
	        }
	    }, {
	        key: 'register',
	        value: function register(type, name, value) {
	            this[type] = this[type] || {};
	            this[type][name] = value;
	        }
	    }, {
	        key: 'registerSubdomain',
	        value: function registerSubdomain(_ref2) {
	            var _this2 = this;
	
	            var name = _ref2.name;
	            var domain = _ref2.domain;
	
	            if ((typeof domain === 'undefined' ? 'undefined' : _typeof(domain)) == 'object' && !Array.isArray(domain)) {
	                Object.keys(domain).forEach(function (key) {
	                    return _this2.register(name, key, domain[key]);
	                });
	            } else {
	                this[name] = domain;
	            }
	        }
	    }, {
	        key: 'get',
	        value: function get(type) {
	            return this[type] || {};
	        }
	    }]);
	
	    return Domain;
	}();
	
	exports.default = Domain;
	var implementation = exports.implementation = (0, _strictduck.implement)({ strictduck: DomainType, withClass: Domain });
	
	var Domains = exports.Domains = (0, _strictduckControlInverted.typedMap)({ name: 'Domains', strictduck: implementation });

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("strictduck-control-inverted");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("strictduck");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.implement = implement;
	
	var _strictduck = __webpack_require__(3);
	
	var _strictduckControlInverted = __webpack_require__(2);
	
	var _Domain = __webpack_require__(1);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var FullstackPlugin = (0, _strictduck.extend)({
	    name: 'FullstackPlugin',
	    methods: []
	});
	
	var StorePersistencePlugin = (0, _strictduck.extend)({
	    name: 'StorePersistencePlugin',
	    parent: FullstackPlugin,
	    methods: []
	});
	
	var DomainDrivenStorePersistencePlugin = (0, _strictduck.extend)({
	    name: 'DomainDrivenStorePersistencePlugin',
	    parent: StorePersistencePlugin,
	    methods: [/*'middlewareGenerator', 'configure'*/]
	});
	
	var implementDependent = (0, _strictduck.implementable)(_strictduckControlInverted.depends, {
	    parent: DomainDrivenStorePersistencePlugin,
	    dependencies: [_Domain.Domains],
	    constructor: function constructor(_ref) {
	        var Domains = _ref.Domains;
	        return _;
	    }
	});
	
	function implement(_ref2) {
	    var parent = _ref2.parent;
	    var constructor = _ref2.constructor;
	    var provider = _ref2.provider;
	    var name = _ref2.name;
	
	    var args = _objectWithoutProperties(_ref2, ['parent', 'constructor', 'provider', 'name']);
	
	    return (0, _strictduckControlInverted.provides)(_extends({
	        parent: implementDependent({ name: name + 'Dependent', constructor: constructor }),
	        name: name,
	        provider: provider
	    }, args));
	}
	
	exports.default = DomainDrivenStorePersistencePlugin;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DomainDrivenClient = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.implement = implement;
	
	var _strictduck = __webpack_require__(3);
	
	var _strictduckControlInverted = __webpack_require__(2);
	
	var _Domain = __webpack_require__(1);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Client = (0, _strictduck.extend)({
	    name: 'Client',
	    methods: [/*'render'*/]
	});
	
	var DomainDrivenClient = exports.DomainDrivenClient = (0, _strictduck.extend)({
	    name: 'DomainDrivenClient',
	    parent: Client,
	    methods: [/*'generateMiddleware'*/]
	});
	
	var implementDependent = (0, _strictduck.implementable)(_strictduckControlInverted.depends, {
	    parent: DomainDrivenClient,
	    dependencies: [_Domain.Domains],
	    constructor: function constructor(_ref) {
	        var Domains = _ref.Domains;
	        var client = _ref.client;
	        return client(Domains);
	    }
	});
	
	function implement(_ref2) {
	    var parent = _ref2.parent;
	    var name = _ref2.name;
	
	    var args = _objectWithoutProperties(_ref2, ['parent', 'name']);
	
	    return (0, _strictduckControlInverted.provides)(_extends({
	        parent: implementDependent(args),
	        name: name
	    }, args));
	}
	
	exports.default = DomainDrivenClient;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DomainDrivenClientStore = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.implement = implement;
	
	var _strictduck = __webpack_require__(3);
	
	var _strictduckControlInverted = __webpack_require__(2);
	
	var _Domain = __webpack_require__(1);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var ClientStore = (0, _strictduck.extend)({
	    name: 'ClientStore',
	    methods: ['getState', 'dispatch', 'subscribe', 'replaceReducer']
	});
	
	var DomainDrivenClientStore = exports.DomainDrivenClientStore = (0, _strictduck.extend)({
	    name: 'DomainDrivenClientStore',
	    parent: ClientStore,
	    methods: [/*'generateMiddleware'*/]
	});
	
	var implementDependent = (0, _strictduck.implementable)(_strictduckControlInverted.depends, {
	    parent: DomainDrivenClientStore,
	    dependencies: [_Domain.Domains]
	});
	
	function implement(_ref) {
	    var parent = _ref.parent;
	
	    var args = _objectWithoutProperties(_ref, ['parent']);
	
	    return (0, _strictduckControlInverted.provides)(_extends({
	        parent: implementDependent(_extends({ parent: parent }, args))
	    }, args));
	}
	
	exports.default = DomainDrivenClientStore;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DomainDrivenServer = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.implement = implement;
	
	var _strictduck = __webpack_require__(3);
	
	var _strictduckControlInverted = __webpack_require__(2);
	
	var _Domain = __webpack_require__(1);
	
	var _client = __webpack_require__(5);
	
	var _client2 = _interopRequireDefault(_client);
	
	var _domainDrivenStorePersistencePlugin = __webpack_require__(4);
	
	var _domainDrivenStorePersistencePlugin2 = _interopRequireDefault(_domainDrivenStorePersistencePlugin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Server = (0, _strictduck.extend)({
	    name: 'Server',
	    methods: ['use', 'listen']
	});
	
	var DomainDrivenServer = exports.DomainDrivenServer = (0, _strictduck.extend)({
	    name: 'DomainDrivenServer',
	    parent: Server,
	    methods: ['generateMiddleware']
	});
	
	var implementDependent = (0, _strictduck.implementable)(_strictduckControlInverted.depends, {
	    parent: DomainDrivenServer,
	    dependencies: [_Domain.Domains, _domainDrivenStorePersistencePlugin2.default],
	    constructor: function constructor(_ref) {
	        var Domains = _ref.Domains;
	        var server = _ref.server;
	        return server(Domains);
	    }
	});
	
	function implement(_ref2) {
	    var parent = _ref2.parent;
	    var constructor = _ref2.constructor;
	    var provider = _ref2.provider;
	    var name = _ref2.name;
	    var url = _ref2.url;
	
	    var args = _objectWithoutProperties(_ref2, ['parent', 'constructor', 'provider', 'name', 'url']);
	
	    return  true ? (0, _strictduckControlInverted.provides)(_extends({
	        parent: implementDependent({ name: name + 'Dependent', constructor: constructor }),
	        dependencies: [_client2.default],
	        name: name,
	        provider: provider,
	        url: url
	    }, args)) : { name: name, url: url };
	}
	
	exports.default = DomainDrivenServer;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _strictduckControlInverted = __webpack_require__(2);
	
	var _strictduck = __webpack_require__(3);
	
	var _client = __webpack_require__(5);
	
	var _server = __webpack_require__(7);
	
	var _domainDrivenStorePersistencePlugin = __webpack_require__(4);
	
	var _domainDrivenStorePersistencePlugin2 = _interopRequireDefault(_domainDrivenStorePersistencePlugin);
	
	var _Domain = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Fullstack = function (_Composit) {
	    _inherits(Fullstack, _Composit);
	
	    function Fullstack(_ref) {
	        var domainsObj = _ref.domains;
	        var server = _ref.server;
	        var client = _ref.client;
	        var persister = _ref.persister;
	        var _ref$context = _ref.context;
	        var context = _ref$context === undefined ? 'NODE' : _ref$context;
	
	        _classCallCheck(this, Fullstack);
	
	        if (!_strictduckControlInverted.resolve.satisfies({ provider: persister, dependency: _domainDrivenStorePersistencePlugin2.default })) {
	            console.log('Persister spec not satisfield by ' + (persister.name || persister.constructor.name) + ', dropping optional component from composition');
	            persister = undefined;
	        }
	
	        var domains = new _Domain.Domains(domainsObj);
	
	        var satisfied = {
	            domains: _strictduckControlInverted.resolve.satisfies({ provider: domains, dependency: _Domain.Domains }) && true,
	            Server: _strictduckControlInverted.resolve.satisfies({ provider: server, dependency: _server.DomainDrivenServer }) && true,
	            Client: _strictduckControlInverted.resolve.satisfies({ provider: client, dependency: _client.DomainDrivenClient }) && true
	        };
	
	        if (!Object.keys(satisfied).filter(function (v) {
	            return !satisfied[v];
	        }).length) {
	            var _Object$getPrototypeO;
	
	            var main = context == 'NODE' ? { Class: _server.DomainDrivenServer, method: 'provide' } : { Class: _client.DomainDrivenClient, method: 'provide' };
	
	            var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Fullstack)).call.apply(_Object$getPrototypeO, [this, { main: main }, { dependency: _Domain.Domains, provider: domains }].concat(_toConsumableArray(persister ? [{ dependency: _domainDrivenStorePersistencePlugin2.default, provider: persister }] : []), [{ dependency: _server.DomainDrivenServer, provider: server }, { dependency: _client.DomainDrivenClient, provider: client }])));
	        } else {
	            throw TypeError('Fullstack composition requirements not satisfield: \n ' + JSON.stringify(satisfied));
	        }
	        return _possibleConstructorReturn(_this);
	    }
	
	    return Fullstack;
	}(_strictduckControlInverted.Composit);
	
	exports.default = Fullstack;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.storePersistencePlugin = exports.Domain = exports.clientStore = exports.reactiveClient = exports.server = undefined;
	
	var _server2 = __webpack_require__(7);
	
	var _server = _interopRequireWildcard(_server2);
	
	var _reactiveClient2 = __webpack_require__(10);
	
	var _reactiveClient = _interopRequireWildcard(_reactiveClient2);
	
	var _clientStore2 = __webpack_require__(6);
	
	var _clientStore = _interopRequireWildcard(_clientStore2);
	
	var _Domain2 = __webpack_require__(1);
	
	var _Domain = _interopRequireWildcard(_Domain2);
	
	var _domainDrivenStorePersistencePlugin = __webpack_require__(4);
	
	var _storePersistencePlugin = _interopRequireWildcard(_domainDrivenStorePersistencePlugin);
	
	var _fullstack = __webpack_require__(8);
	
	var _fullstack2 = _interopRequireDefault(_fullstack);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.server = _server;
	exports.reactiveClient = _reactiveClient;
	exports.clientStore = _clientStore;
	exports.Domain = _Domain;
	exports.storePersistencePlugin = _storePersistencePlugin;
	exports.default = _fullstack2.default;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.implement = implement;
	
	var _strictduck = __webpack_require__(3);
	
	var _strictduckControlInverted = __webpack_require__(2);
	
	var _client = __webpack_require__(5);
	
	var _clientStore = __webpack_require__(6);
	
	var _clientStore2 = _interopRequireDefault(_clientStore);
	
	var _Domain = __webpack_require__(1);
	
	var _domainDrivenStorePersistencePlugin = __webpack_require__(4);
	
	var _domainDrivenStorePersistencePlugin2 = _interopRequireDefault(_domainDrivenStorePersistencePlugin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var implementDependent = (0, _strictduck.implementable)(_strictduckControlInverted.depends, {
	    name: 'DomainDrivenReactiveClient',
	    parent: _client.DomainDrivenClient,
	    dependencies: [_Domain.Domains, _clientStore2.default, _domainDrivenStorePersistencePlugin2.default]
	});
	
	function implement(_ref) {
	    var parent = _ref.parent;
	    var constructor = _ref.constructor;
	
	    var args = _objectWithoutProperties(_ref, ['parent', 'constructor']);
	
	    return (0, _strictduckControlInverted.provides)(_extends({
	        parent: implementDependent({ constructor: constructor })
	    }, args));
	}

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @nolint
 * @preventMunge
 * @preserve-invariant-messages
 */

"use strict";
var JSResourceReference = require("JSResourceReference"),
  ReactFlightDOMRelayServerIntegration = require("ReactFlightDOMRelayServerIntegration"),
  React = require("react");
function formatProdErrorMessage(code) {
  for (
    var url = "https://reactjs.org/docs/error-decoder.html?invariant=" + code,
      i = 1;
    i < arguments.length;
    i++
  )
    url += "&args[]=" + encodeURIComponent(arguments[i]);
  return (
    "Minified React error #" +
    code +
    "; visit " +
    url +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function convertModelToJSON(request, parent, key, model) {
  parent = resolveModelToJSON(request, parent, key, model);
  if ("object" === typeof parent && null !== parent) {
    if (Array.isArray(parent)) {
      var jsonArray = [];
      for (key = 0; key < parent.length; key++)
        jsonArray[key] = convertModelToJSON(
          request,
          parent,
          "" + key,
          parent[key]
        );
      return jsonArray;
    }
    key = {};
    for (jsonArray in parent)
      hasOwnProperty.call(parent, jsonArray) &&
        (key[jsonArray] = convertModelToJSON(
          request,
          parent,
          jsonArray,
          parent[jsonArray]
        ));
    return key;
  }
  return parent;
}
function writeChunk(destination, chunk) {
  ReactFlightDOMRelayServerIntegration.emitRow(destination, chunk);
  return !0;
}
var REACT_ELEMENT_TYPE = 60103,
  REACT_FRAGMENT_TYPE = 60107,
  REACT_FORWARD_REF_TYPE = 60112,
  REACT_MEMO_TYPE = 60115,
  REACT_LAZY_TYPE = 60116;
if ("function" === typeof Symbol && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor("react.element");
  REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
  REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
  REACT_MEMO_TYPE = symbolFor("react.memo");
  REACT_LAZY_TYPE = symbolFor("react.lazy");
}
var isArray = Array.isArray,
  ReactCurrentDispatcher =
    React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      .ReactCurrentDispatcher;
function createRequest(model, destination, bundlerConfig) {
  var pingedSegments = [],
    request = {
      destination: destination,
      bundlerConfig: bundlerConfig,
      cache: new Map(),
      nextChunkId: 0,
      pendingChunks: 0,
      pingedSegments: pingedSegments,
      completedModuleChunks: [],
      completedJSONChunks: [],
      completedErrorChunks: [],
      writtenSymbols: new Map(),
      writtenModules: new Map(),
      flowing: !1,
      toJSON: function(key, value) {
        return resolveModelToJSON(request, this, key, value);
      }
    };
  request.pendingChunks++;
  model = createSegment(request, model);
  pingedSegments.push(model);
  return request;
}
function attemptResolveElement(type, key, ref, props) {
  if (null !== ref && void 0 !== ref) throw Error(formatProdErrorMessage(379));
  if ("function" === typeof type) return type(props);
  if ("string" === typeof type) return [REACT_ELEMENT_TYPE, type, key, props];
  if ("symbol" === typeof type)
    return type === REACT_FRAGMENT_TYPE
      ? props.children
      : [REACT_ELEMENT_TYPE, type, key, props];
  if (null != type && "object" === typeof type) {
    if (type instanceof JSResourceReference)
      return [REACT_ELEMENT_TYPE, type, key, props];
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return (type = type.render), type(props, void 0);
      case REACT_MEMO_TYPE:
        return attemptResolveElement(type.type, key, ref, props);
    }
  }
  throw Error(formatProdErrorMessage(351, describeValueForErrorMessage(type)));
}
function createSegment(request, model) {
  var segment = {
    id: request.nextChunkId++,
    model: model,
    ping: function() {
      var pingedSegments = request.pingedSegments;
      pingedSegments.push(segment);
      1 === pingedSegments.length && performWork(request);
    }
  };
  return segment;
}
function objectName(object) {
  return Object.prototype.toString
    .call(object)
    .replace(/^\[object (.*)\]$/, function(m, p0) {
      return p0;
    });
}
function describeKeyForErrorMessage(key) {
  var encodedKey = JSON.stringify(key);
  return '"' + key + '"' === encodedKey ? key : encodedKey;
}
function describeValueForErrorMessage(value) {
  switch (typeof value) {
    case "string":
      return JSON.stringify(
        10 >= value.length ? value : value.substr(0, 10) + "..."
      );
    case "object":
      if (isArray(value)) return "[...]";
      value = objectName(value);
      return "Object" === value ? "{...}" : value;
    case "function":
      return "function";
    default:
      return String(value);
  }
}
function describeObjectForErrorMessage(objectOrArray, expandedName) {
  if (isArray(objectOrArray)) {
    for (var str = "[", i = 0; i < objectOrArray.length; i++) {
      0 < i && (str += ", ");
      if (6 < i) {
        str += "...";
        break;
      }
      var value = objectOrArray[i];
      str =
        "" + i === expandedName && "object" === typeof value && null !== value
          ? str + describeObjectForErrorMessage(value)
          : str + describeValueForErrorMessage(value);
    }
    return str + "]";
  }
  str = "{";
  i = Object.keys(objectOrArray);
  for (value = 0; value < i.length; value++) {
    0 < value && (str += ", ");
    if (6 < value) {
      str += "...";
      break;
    }
    var name = i[value];
    str += describeKeyForErrorMessage(name) + ": ";
    var value$3 = objectOrArray[name];
    str =
      name === expandedName && "object" === typeof value$3 && null !== value$3
        ? str + describeObjectForErrorMessage(value$3)
        : str + describeValueForErrorMessage(value$3);
  }
  return str + "}";
}
function resolveModelToJSON(request, parent, key, value) {
  switch (value) {
    case REACT_ELEMENT_TYPE:
      return "$";
    case REACT_LAZY_TYPE:
      throw Error(formatProdErrorMessage(352));
  }
  for (
    ;
    "object" === typeof value &&
    null !== value &&
    value.$$typeof === REACT_ELEMENT_TYPE;

  ) {
    var element = value;
    try {
      value = attemptResolveElement(
        element.type,
        element.key,
        element.ref,
        element.props
      );
    } catch (x) {
      if ("object" === typeof x && null !== x && "function" === typeof x.then)
        return (
          request.pendingChunks++,
          (request = createSegment(request, value)),
          (parent = request.ping),
          x.then(parent, parent),
          "@" + request.id.toString(16)
        );
      request.pendingChunks++;
      parent = request.nextChunkId++;
      emitErrorChunk(request, parent, x);
      return "@" + parent.toString(16);
    }
  }
  if (null === value) return null;
  if ("object" === typeof value) {
    if (value instanceof JSResourceReference) {
      element = request.writtenModules;
      var existingId = element.get(value);
      if (void 0 !== existingId)
        return parent[0] === REACT_ELEMENT_TYPE && "1" === key
          ? "@" + existingId.toString(16)
          : "$" + existingId.toString(16);
      try {
        var moduleMetaData = ReactFlightDOMRelayServerIntegration.resolveModuleMetaData(
          request.bundlerConfig,
          value
        );
        request.pendingChunks++;
        var moduleId = request.nextChunkId++;
        request.completedModuleChunks.push(["M", moduleId, moduleMetaData]);
        element.set(value, moduleId);
        return parent[0] === REACT_ELEMENT_TYPE && "1" === key
          ? "@" + moduleId.toString(16)
          : "$" + moduleId.toString(16);
      } catch (x$5) {
        return (
          request.pendingChunks++,
          (parent = request.nextChunkId++),
          emitErrorChunk(request, parent, x$5),
          "$" + parent.toString(16)
        );
      }
    }
    return value;
  }
  if ("string" === typeof value)
    return (
      (request = "$" === value[0] || "@" === value[0] ? "$" + value : value),
      request
    );
  if (
    "boolean" === typeof value ||
    "number" === typeof value ||
    "undefined" === typeof value
  )
    return value;
  if ("function" === typeof value) {
    if (/^on[A-Z]/.test(key))
      throw Error(
        formatProdErrorMessage(
          374,
          describeKeyForErrorMessage(key),
          describeObjectForErrorMessage(parent)
        )
      );
    throw Error(
      formatProdErrorMessage(
        375,
        describeKeyForErrorMessage(key),
        value.displayName || value.name || "function",
        describeObjectForErrorMessage(parent)
      )
    );
  }
  if ("symbol" === typeof value) {
    moduleMetaData = request.writtenSymbols;
    moduleId = moduleMetaData.get(value);
    if (void 0 !== moduleId) return "$" + moduleId.toString(16);
    moduleId = value.description;
    if (Symbol.for(moduleId) !== value)
      throw Error(
        formatProdErrorMessage(
          376,
          value.description,
          describeKeyForErrorMessage(key),
          describeObjectForErrorMessage(parent)
        )
      );
    request.pendingChunks++;
    parent = request.nextChunkId++;
    request.completedModuleChunks.push(["S", parent, moduleId]);
    moduleMetaData.set(value, parent);
    return "$" + parent.toString(16);
  }
  if ("bigint" === typeof value)
    throw Error(
      formatProdErrorMessage(
        377,
        value,
        describeKeyForErrorMessage(key),
        describeObjectForErrorMessage(parent)
      )
    );
  throw Error(
    formatProdErrorMessage(
      378,
      typeof value,
      describeKeyForErrorMessage(key),
      describeObjectForErrorMessage(parent)
    )
  );
}
function emitErrorChunk(request, id, error) {
  var stack = "";
  try {
    if (error instanceof Error) {
      var message = "" + error.message;
      stack = "" + error.stack;
    } else message = "Error: " + error;
  } catch (x) {
    message = "An error occurred but serializing the error message failed.";
  }
  request.completedErrorChunks.push([
    "E",
    id,
    { message: message, stack: stack }
  ]);
}
function performWork(request$jscomp$0) {
  var prevDispatcher = ReactCurrentDispatcher.current,
    prevCache = currentCache;
  ReactCurrentDispatcher.current = Dispatcher;
  currentCache = request$jscomp$0.cache;
  var pingedSegments = request$jscomp$0.pingedSegments;
  request$jscomp$0.pingedSegments = [];
  for (var i = 0; i < pingedSegments.length; i++) {
    var segment = pingedSegments[i];
    var request = request$jscomp$0;
    try {
      for (
        var value = segment.model;
        "object" === typeof value &&
        null !== value &&
        value.$$typeof === REACT_ELEMENT_TYPE;

      ) {
        var element = value;
        segment.model = value;
        value = attemptResolveElement(
          element.type,
          element.key,
          element.ref,
          element.props
        );
      }
      var id = segment.id,
        json = convertModelToJSON(request, {}, "", value);
      request.completedJSONChunks.push(["J", id, json]);
    } catch (x) {
      "object" === typeof x && null !== x && "function" === typeof x.then
        ? ((segment = segment.ping), x.then(segment, segment))
        : emitErrorChunk(request, segment.id, x);
    }
  }
  if (request$jscomp$0.flowing && !reentrant) {
    reentrant = !0;
    pingedSegments = request$jscomp$0.destination;
    try {
      var moduleChunks = request$jscomp$0.completedModuleChunks;
      for (i = 0; i < moduleChunks.length; i++)
        if (
          (request$jscomp$0.pendingChunks--,
          !writeChunk(pingedSegments, moduleChunks[i]))
        ) {
          request$jscomp$0.flowing = !1;
          i++;
          break;
        }
      moduleChunks.splice(0, i);
      var jsonChunks = request$jscomp$0.completedJSONChunks;
      for (i = 0; i < jsonChunks.length; i++)
        if (
          (request$jscomp$0.pendingChunks--,
          !writeChunk(pingedSegments, jsonChunks[i]))
        ) {
          request$jscomp$0.flowing = !1;
          i++;
          break;
        }
      jsonChunks.splice(0, i);
      var errorChunks = request$jscomp$0.completedErrorChunks;
      for (i = 0; i < errorChunks.length; i++)
        if (
          (request$jscomp$0.pendingChunks--,
          !writeChunk(pingedSegments, errorChunks[i]))
        ) {
          request$jscomp$0.flowing = !1;
          i++;
          break;
        }
      errorChunks.splice(0, i);
    } finally {
      reentrant = !1;
    }
    0 === request$jscomp$0.pendingChunks &&
      ReactFlightDOMRelayServerIntegration.close(pingedSegments);
  }
  ReactCurrentDispatcher.current = prevDispatcher;
  currentCache = prevCache;
}
var reentrant = !1;
function unsupportedHook() {
  throw Error(formatProdErrorMessage(373));
}
function unsupportedRefresh() {
  if (!currentCache) throw Error(formatProdErrorMessage(384));
}
var currentCache = null,
  Dispatcher = {
    useMemo: function(nextCreate) {
      return nextCreate();
    },
    useCallback: function(callback) {
      return callback;
    },
    useDebugValue: function() {},
    useDeferredValue: unsupportedHook,
    useTransition: unsupportedHook,
    getCacheForType: function(resourceType) {
      if (!currentCache) throw Error(formatProdErrorMessage(380));
      var entry = currentCache.get(resourceType);
      void 0 === entry &&
        ((entry = resourceType()), currentCache.set(resourceType, entry));
      return entry;
    },
    readContext: unsupportedHook,
    useContext: unsupportedHook,
    useReducer: unsupportedHook,
    useRef: unsupportedHook,
    useState: unsupportedHook,
    useLayoutEffect: unsupportedHook,
    useImperativeHandle: unsupportedHook,
    useEffect: unsupportedHook,
    useOpaqueIdentifier: unsupportedHook,
    useMutableSource: unsupportedHook,
    useCacheRefresh: function() {
      return unsupportedRefresh;
    }
  };
exports.render = function(model, destination, config) {
  model = createRequest(model, destination, config);
  model.flowing = !0;
  performWork(model);
};

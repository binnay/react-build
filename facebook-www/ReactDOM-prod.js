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

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
"use strict";
var React = require("react"),
  Scheduler = require("scheduler"),
  tracing = require("scheduler/tracing");
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
if (!React) throw Error(formatProdErrorMessage(227));
var dynamicFeatureFlags = require("ReactFeatureFlags"),
  disableInputAttributeSyncing =
    dynamicFeatureFlags.disableInputAttributeSyncing,
  enableTrustedTypesIntegration =
    dynamicFeatureFlags.enableTrustedTypesIntegration,
  enableFilterEmptyStringAttributesDOM =
    dynamicFeatureFlags.enableFilterEmptyStringAttributesDOM,
  enableLegacyFBSupport = dynamicFeatureFlags.enableLegacyFBSupport,
  deferRenderPhaseUpdateToNextBatch =
    dynamicFeatureFlags.deferRenderPhaseUpdateToNextBatch,
  skipUnmountedBoundaries = dynamicFeatureFlags.skipUnmountedBoundaries,
  enableStrictEffects = dynamicFeatureFlags.enableStrictEffects,
  createRootStrictEffectsByDefault =
    dynamicFeatureFlags.createRootStrictEffectsByDefault,
  enableUseRefAccessWarning = dynamicFeatureFlags.enableUseRefAccessWarning,
  disableNativeComponentFrames =
    dynamicFeatureFlags.disableNativeComponentFrames,
  disableSchedulerTimeoutInWorkLoop =
    dynamicFeatureFlags.disableSchedulerTimeoutInWorkLoop,
  enableSyncMicroTasks = dynamicFeatureFlags.enableSyncMicroTasks,
  enableLazyContextPropagation =
    dynamicFeatureFlags.enableLazyContextPropagation,
  allNativeEvents = new Set();
allNativeEvents.add("beforeblur");
allNativeEvents.add("afterblur");
var registrationNameDependencies = {};
function registerTwoPhaseEvent(registrationName, dependencies) {
  registerDirectEvent(registrationName, dependencies);
  registerDirectEvent(registrationName + "Capture", dependencies);
}
function registerDirectEvent(registrationName, dependencies) {
  registrationNameDependencies[registrationName] = dependencies;
  for (
    registrationName = 0;
    registrationName < dependencies.length;
    registrationName++
  )
    allNativeEvents.add(dependencies[registrationName]);
}
var canUseDOM = !(
    "undefined" === typeof window ||
    "undefined" === typeof window.document ||
    "undefined" === typeof window.document.createElement
  ),
  VALID_ATTRIBUTE_NAME_REGEX = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hasOwnProperty = Object.prototype.hasOwnProperty,
  illegalAttributeNameCache = {},
  validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
    return !0;
  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
    return (validatedAttributeNameCache[attributeName] = !0);
  illegalAttributeNameCache[attributeName] = !0;
  return !1;
}
function shouldRemoveAttributeWithWarning(
  name,
  value,
  propertyInfo,
  isCustomComponentTag
) {
  if (null !== propertyInfo && 0 === propertyInfo.type) return !1;
  switch (typeof value) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      if (isCustomComponentTag) return !1;
      if (null !== propertyInfo) return !propertyInfo.acceptsBooleans;
      name = name.toLowerCase().slice(0, 5);
      return "data-" !== name && "aria-" !== name;
    default:
      return !1;
  }
}
function shouldRemoveAttribute(
  name,
  value,
  propertyInfo,
  isCustomComponentTag
) {
  if (
    null === value ||
    "undefined" === typeof value ||
    shouldRemoveAttributeWithWarning(
      name,
      value,
      propertyInfo,
      isCustomComponentTag
    )
  )
    return !0;
  if (isCustomComponentTag) return !1;
  if (null !== propertyInfo) {
    if (
      enableFilterEmptyStringAttributesDOM &&
      propertyInfo.removeEmptyString &&
      "" === value
    )
      return !0;
    switch (propertyInfo.type) {
      case 3:
        return !value;
      case 4:
        return !1 === value;
      case 5:
        return isNaN(value);
      case 6:
        return isNaN(value) || 1 > value;
    }
  }
  return !1;
}
function PropertyInfoRecord(
  name,
  type,
  mustUseProperty,
  attributeName,
  attributeNamespace,
  sanitizeURL,
  removeEmptyString
) {
  this.acceptsBooleans = 2 === type || 3 === type || 4 === type;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
}
var properties = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function(name) {
    properties[name] = new PropertyInfoRecord(name, 0, !1, name, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"]
].forEach(function(_ref) {
  var name = _ref[0];
  properties[name] = new PropertyInfoRecord(name, 1, !1, _ref[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
  properties[name] = new PropertyInfoRecord(
    name,
    2,
    !1,
    name.toLowerCase(),
    null,
    !1,
    !1
  );
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha"
].forEach(function(name) {
  properties[name] = new PropertyInfoRecord(name, 2, !1, name, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function(name) {
    properties[name] = new PropertyInfoRecord(
      name,
      3,
      !1,
      name.toLowerCase(),
      null,
      !1,
      !1
    );
  });
["checked", "multiple", "muted", "selected"].forEach(function(name) {
  properties[name] = new PropertyInfoRecord(name, 3, !0, name, null, !1, !1);
});
["capture", "download"].forEach(function(name) {
  properties[name] = new PropertyInfoRecord(name, 4, !1, name, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(name) {
  properties[name] = new PropertyInfoRecord(name, 6, !1, name, null, !1, !1);
});
["rowSpan", "start"].forEach(function(name) {
  properties[name] = new PropertyInfoRecord(
    name,
    5,
    !1,
    name.toLowerCase(),
    null,
    !1,
    !1
  );
});
var CAMELIZE = /[\-:]([a-z])/g;
function capitalize(token) {
  return token[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function(attributeName) {
    var name = attributeName.replace(CAMELIZE, capitalize);
    properties[name] = new PropertyInfoRecord(
      name,
      1,
      !1,
      attributeName,
      null,
      !1,
      !1
    );
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function(attributeName) {
    var name = attributeName.replace(CAMELIZE, capitalize);
    properties[name] = new PropertyInfoRecord(
      name,
      1,
      !1,
      attributeName,
      "http://www.w3.org/1999/xlink",
      !1,
      !1
    );
  });
["xml:base", "xml:lang", "xml:space"].forEach(function(attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(
    name,
    1,
    !1,
    attributeName,
    "http://www.w3.org/XML/1998/namespace",
    !1,
    !1
  );
});
["tabIndex", "crossOrigin"].forEach(function(attributeName) {
  properties[attributeName] = new PropertyInfoRecord(
    attributeName,
    1,
    !1,
    attributeName.toLowerCase(),
    null,
    !1,
    !1
  );
});
properties.xlinkHref = new PropertyInfoRecord(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function(attributeName) {
  properties[attributeName] = new PropertyInfoRecord(
    attributeName,
    1,
    !1,
    attributeName.toLowerCase(),
    null,
    !0,
    !0
  );
});
var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function setValueForProperty(node, name, value, isCustomComponentTag) {
  var JSCompiler_inline_result = properties.hasOwnProperty(name)
    ? properties[name]
    : null;
  var JSCompiler_inline_result$jscomp$0 =
    null !== JSCompiler_inline_result
      ? 0 === JSCompiler_inline_result.type
      : isCustomComponentTag
      ? !1
      : !(2 < name.length) ||
        ("o" !== name[0] && "O" !== name[0]) ||
        ("n" !== name[1] && "N" !== name[1])
      ? !1
      : !0;
  if (!JSCompiler_inline_result$jscomp$0)
    if (
      (shouldRemoveAttribute(
        name,
        value,
        JSCompiler_inline_result,
        isCustomComponentTag
      ) && (value = null),
      isCustomComponentTag || null === JSCompiler_inline_result)
    )
      isAttributeNameSafe(name) &&
        (null === value
          ? node.removeAttribute(name)
          : node.setAttribute(
              name,
              enableTrustedTypesIntegration ? value : "" + value
            ));
    else if (JSCompiler_inline_result.mustUseProperty)
      node[JSCompiler_inline_result.propertyName] =
        null === value
          ? 3 === JSCompiler_inline_result.type
            ? !1
            : ""
          : value;
    else if (
      ((name = JSCompiler_inline_result.attributeName),
      (isCustomComponentTag = JSCompiler_inline_result.attributeNamespace),
      null === value)
    )
      node.removeAttribute(name);
    else {
      JSCompiler_inline_result$jscomp$0 = JSCompiler_inline_result.type;
      if (
        3 === JSCompiler_inline_result$jscomp$0 ||
        (4 === JSCompiler_inline_result$jscomp$0 && !0 === value)
      )
        value = "";
      else if (
        ((value = enableTrustedTypesIntegration ? value : "" + value),
        JSCompiler_inline_result.sanitizeURL &&
          isJavaScriptProtocol.test(value.toString()))
      )
        throw Error(formatProdErrorMessage(323));
      isCustomComponentTag
        ? node.setAttributeNS(isCustomComponentTag, name, value)
        : node.setAttribute(name, value);
    }
}
var ReactSharedInternals =
    React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  REACT_ELEMENT_TYPE = 60103,
  REACT_PORTAL_TYPE = 60106,
  REACT_FRAGMENT_TYPE = 60107,
  REACT_STRICT_MODE_TYPE = 60108,
  REACT_PROFILER_TYPE = 60114,
  REACT_PROVIDER_TYPE = 60109,
  REACT_CONTEXT_TYPE = 60110,
  REACT_FORWARD_REF_TYPE = 60112,
  REACT_SUSPENSE_TYPE = 60113,
  REACT_SUSPENSE_LIST_TYPE = 60120,
  REACT_MEMO_TYPE = 60115,
  REACT_LAZY_TYPE = 60116,
  REACT_SCOPE_TYPE = 60119,
  REACT_OPAQUE_ID_TYPE = 60128,
  REACT_DEBUG_TRACING_MODE_TYPE = 60129,
  REACT_OFFSCREEN_TYPE = 60130,
  REACT_LEGACY_HIDDEN_TYPE = 60131,
  REACT_CACHE_TYPE = 60132;
if ("function" === typeof Symbol && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor("react.element");
  REACT_PORTAL_TYPE = symbolFor("react.portal");
  REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
  REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
  REACT_PROFILER_TYPE = symbolFor("react.profiler");
  REACT_PROVIDER_TYPE = symbolFor("react.provider");
  REACT_CONTEXT_TYPE = symbolFor("react.context");
  REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
  REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
  REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
  REACT_MEMO_TYPE = symbolFor("react.memo");
  REACT_LAZY_TYPE = symbolFor("react.lazy");
  REACT_SCOPE_TYPE = symbolFor("react.scope");
  REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
  REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
  REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
  REACT_CACHE_TYPE = symbolFor("react.cache");
}
var MAYBE_ITERATOR_SYMBOL = "function" === typeof Symbol && Symbol.iterator;
function getIteratorFn(maybeIterable) {
  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
  maybeIterable =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable["@@iterator"];
  return "function" === typeof maybeIterable ? maybeIterable : null;
}
var prefix;
function describeBuiltInComponentFrame(name) {
  if (void 0 === prefix)
    try {
      throw Error();
    } catch (x) {
      var match = x.stack.trim().match(/\n( *(at )?)/);
      prefix = (match && match[1]) || "";
    }
  return "\n" + prefix + name;
}
var reentry = !1;
function describeNativeComponentFrame(fn, construct) {
  if (disableNativeComponentFrames || !fn || reentry) return "";
  reentry = !0;
  var previousPrepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (construct)
      if (
        ((construct = function() {
          throw Error();
        }),
        Object.defineProperty(construct.prototype, "props", {
          set: function() {
            throw Error();
          }
        }),
        "object" === typeof Reflect && Reflect.construct)
      ) {
        try {
          Reflect.construct(construct, []);
        } catch (x) {
          var control = x;
        }
        Reflect.construct(fn, [], construct);
      } else {
        try {
          construct.call();
        } catch (x$3) {
          control = x$3;
        }
        fn.call(construct.prototype);
      }
    else {
      try {
        throw Error();
      } catch (x$4) {
        control = x$4;
      }
      fn();
    }
  } catch (sample) {
    if (sample && control && "string" === typeof sample.stack) {
      for (
        var sampleLines = sample.stack.split("\n"),
          controlLines = control.stack.split("\n"),
          s = sampleLines.length - 1,
          c = controlLines.length - 1;
        1 <= s && 0 <= c && sampleLines[s] !== controlLines[c];

      )
        c--;
      for (; 1 <= s && 0 <= c; s--, c--)
        if (sampleLines[s] !== controlLines[c]) {
          if (1 !== s || 1 !== c) {
            do
              if ((s--, c--, 0 > c || sampleLines[s] !== controlLines[c]))
                return "\n" + sampleLines[s].replace(" at new ", " at ");
            while (1 <= s && 0 <= c);
          }
          break;
        }
    }
  } finally {
    (reentry = !1), (Error.prepareStackTrace = previousPrepareStackTrace);
  }
  return (fn = fn ? fn.displayName || fn.name : "")
    ? describeBuiltInComponentFrame(fn)
    : "";
}
function describeFiber(fiber) {
  switch (fiber.tag) {
    case 5:
      return describeBuiltInComponentFrame(fiber.type);
    case 16:
      return describeBuiltInComponentFrame("Lazy");
    case 13:
      return describeBuiltInComponentFrame("Suspense");
    case 19:
      return describeBuiltInComponentFrame("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (fiber = describeNativeComponentFrame(fiber.type, !1)), fiber;
    case 11:
      return (
        (fiber = describeNativeComponentFrame(fiber.type.render, !1)), fiber
      );
    case 1:
      return (fiber = describeNativeComponentFrame(fiber.type, !0)), fiber;
    default:
      return "";
  }
}
function getComponentNameFromType(type) {
  if (null == type) return null;
  if ("function" === typeof type) return type.displayName || type.name || null;
  if ("string" === typeof type) return type;
  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return "Fragment";
    case REACT_PORTAL_TYPE:
      return "Portal";
    case REACT_PROFILER_TYPE:
      return "Profiler";
    case REACT_STRICT_MODE_TYPE:
      return "StrictMode";
    case REACT_SUSPENSE_TYPE:
      return "Suspense";
    case REACT_SUSPENSE_LIST_TYPE:
      return "SuspenseList";
    case REACT_CACHE_TYPE:
      return "Cache";
  }
  if ("object" === typeof type)
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return (type.displayName || "Context") + ".Consumer";
      case REACT_PROVIDER_TYPE:
        return (type._context.displayName || "Context") + ".Provider";
      case REACT_FORWARD_REF_TYPE:
        var innerType = type.render;
        innerType = innerType.displayName || innerType.name || "";
        return (
          type.displayName ||
          ("" !== innerType ? "ForwardRef(" + innerType + ")" : "ForwardRef")
        );
      case REACT_MEMO_TYPE:
        return getComponentNameFromType(type.type);
      case REACT_LAZY_TYPE:
        innerType = type._payload;
        type = type._init;
        try {
          return getComponentNameFromType(type(innerType));
        } catch (x) {}
    }
  return null;
}
function getComponentNameFromFiber(fiber) {
  var type = fiber.type;
  switch (fiber.tag) {
    case 24:
      return "Cache";
    case 9:
      return (type.displayName || "Context") + ".Consumer";
    case 10:
      return (type._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (fiber = type.render),
        (fiber = fiber.displayName || fiber.name || ""),
        type.displayName ||
          ("" !== fiber ? "ForwardRef(" + fiber + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return type;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return getComponentNameFromType(type);
    case 23:
      return "LegacyHidden";
    case 8:
      return type === REACT_STRICT_MODE_TYPE ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof type)
        return type.displayName || type.name || null;
      if ("string" === typeof type) return type;
  }
  return null;
}
function getToStringValue(value) {
  switch (typeof value) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return value;
    default:
      return "";
  }
}
function isCheckable(elem) {
  var type = elem.type;
  return (
    (elem = elem.nodeName) &&
    "input" === elem.toLowerCase() &&
    ("checkbox" === type || "radio" === type)
  );
}
function trackValueOnNode(node) {
  var valueField = isCheckable(node) ? "checked" : "value",
    descriptor = Object.getOwnPropertyDescriptor(
      node.constructor.prototype,
      valueField
    ),
    currentValue = "" + node[valueField];
  if (
    !node.hasOwnProperty(valueField) &&
    "undefined" !== typeof descriptor &&
    "function" === typeof descriptor.get &&
    "function" === typeof descriptor.set
  ) {
    var get = descriptor.get,
      set = descriptor.set;
    Object.defineProperty(node, valueField, {
      configurable: !0,
      get: function() {
        return get.call(this);
      },
      set: function(value) {
        currentValue = "" + value;
        set.call(this, value);
      }
    });
    Object.defineProperty(node, valueField, {
      enumerable: descriptor.enumerable
    });
    return {
      getValue: function() {
        return currentValue;
      },
      setValue: function(value) {
        currentValue = "" + value;
      },
      stopTracking: function() {
        node._valueTracker = null;
        delete node[valueField];
      }
    };
  }
}
function track(node) {
  node._valueTracker || (node._valueTracker = trackValueOnNode(node));
}
function updateValueIfChanged(node) {
  if (!node) return !1;
  var tracker = node._valueTracker;
  if (!tracker) return !0;
  var lastValue = tracker.getValue();
  var value = "";
  node &&
    (value = isCheckable(node)
      ? node.checked
        ? "true"
        : "false"
      : node.value);
  node = value;
  return node !== lastValue ? (tracker.setValue(node), !0) : !1;
}
function getActiveElement(doc) {
  doc = doc || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof doc) return null;
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
function getHostProps(element, props) {
  var checked = props.checked;
  return Object.assign({}, props, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != checked ? checked : element._wrapperState.initialChecked
  });
}
function initWrapperState(element, props) {
  var defaultValue = null == props.defaultValue ? "" : props.defaultValue,
    JSCompiler_temp_const =
      null != props.checked ? props.checked : props.defaultChecked;
  defaultValue = getToStringValue(
    null != props.value ? props.value : defaultValue
  );
  element._wrapperState = {
    initialChecked: JSCompiler_temp_const,
    initialValue: defaultValue,
    controlled:
      "checkbox" === props.type || "radio" === props.type
        ? null != props.checked
        : null != props.value
  };
}
function updateChecked(element, props) {
  props = props.checked;
  null != props && setValueForProperty(element, "checked", props, !1);
}
function updateWrapper(element, props) {
  updateChecked(element, props);
  var value = getToStringValue(props.value),
    type = props.type;
  if (null != value)
    if ("number" === type) {
      if ((0 === value && "" === element.value) || element.value != value)
        element.value = "" + value;
    } else element.value !== "" + value && (element.value = "" + value);
  else if ("submit" === type || "reset" === type) {
    element.removeAttribute("value");
    return;
  }
  disableInputAttributeSyncing
    ? props.hasOwnProperty("defaultValue") &&
      setDefaultValue(element, props.type, getToStringValue(props.defaultValue))
    : props.hasOwnProperty("value")
    ? setDefaultValue(element, props.type, value)
    : props.hasOwnProperty("defaultValue") &&
      setDefaultValue(
        element,
        props.type,
        getToStringValue(props.defaultValue)
      );
  disableInputAttributeSyncing
    ? null == props.defaultChecked
      ? element.removeAttribute("checked")
      : (element.defaultChecked = !!props.defaultChecked)
    : null == props.checked &&
      null != props.defaultChecked &&
      (element.defaultChecked = !!props.defaultChecked);
}
function postMountWrapper(element, props, isHydrating) {
  if (props.hasOwnProperty("value") || props.hasOwnProperty("defaultValue")) {
    var type = props.type;
    if (
      (type = "submit" === type || "reset" === type) &&
      (void 0 === props.value || null === props.value)
    )
      return;
    var initialValue = "" + element._wrapperState.initialValue;
    if (!isHydrating)
      if (disableInputAttributeSyncing) {
        var value = getToStringValue(props.value);
        null == value ||
          (!type && value === element.value) ||
          (element.value = "" + value);
      } else initialValue !== element.value && (element.value = initialValue);
    disableInputAttributeSyncing
      ? ((type = getToStringValue(props.defaultValue)),
        null != type && (element.defaultValue = "" + type))
      : (element.defaultValue = initialValue);
  }
  type = element.name;
  "" !== type && (element.name = "");
  disableInputAttributeSyncing
    ? (isHydrating || updateChecked(element, props),
      props.hasOwnProperty("defaultChecked") &&
        ((element.defaultChecked = !element.defaultChecked),
        (element.defaultChecked = !!props.defaultChecked)))
    : (element.defaultChecked = !!element._wrapperState.initialChecked);
  "" !== type && (element.name = type);
}
function setDefaultValue(node, type, value) {
  if ("number" !== type || getActiveElement(node.ownerDocument) !== node)
    null == value
      ? (node.defaultValue = "" + node._wrapperState.initialValue)
      : node.defaultValue !== "" + value && (node.defaultValue = "" + value);
}
function flattenChildren(children) {
  var content = "";
  React.Children.forEach(children, function(child) {
    null != child && (content += child);
  });
  return content;
}
function getHostProps$1(element, props) {
  element = Object.assign({ children: void 0 }, props);
  if ((props = flattenChildren(props.children))) element.children = props;
  return element;
}
function updateOptions(node, multiple, propValue, setDefaultSelected) {
  node = node.options;
  if (multiple) {
    multiple = {};
    for (var i = 0; i < propValue.length; i++)
      multiple["$" + propValue[i]] = !0;
    for (propValue = 0; propValue < node.length; propValue++)
      (i = multiple.hasOwnProperty("$" + node[propValue].value)),
        node[propValue].selected !== i && (node[propValue].selected = i),
        i && setDefaultSelected && (node[propValue].defaultSelected = !0);
  } else {
    propValue = "" + getToStringValue(propValue);
    multiple = null;
    for (i = 0; i < node.length; i++) {
      if (node[i].value === propValue) {
        node[i].selected = !0;
        setDefaultSelected && (node[i].defaultSelected = !0);
        return;
      }
      null !== multiple || node[i].disabled || (multiple = node[i]);
    }
    null !== multiple && (multiple.selected = !0);
  }
}
function getHostProps$3(element, props) {
  if (null != props.dangerouslySetInnerHTML)
    throw Error(formatProdErrorMessage(91));
  return Object.assign({}, props, {
    value: void 0,
    defaultValue: void 0,
    children: "" + element._wrapperState.initialValue
  });
}
function initWrapperState$2(element, props) {
  var initialValue = props.value;
  null == initialValue &&
    ((props = props.defaultValue),
    null == props && (props = ""),
    (initialValue = props));
  element._wrapperState = { initialValue: getToStringValue(initialValue) };
}
function updateWrapper$1(element, props) {
  var value = getToStringValue(props.value),
    defaultValue = getToStringValue(props.defaultValue);
  null != value &&
    ((value = "" + value),
    value !== element.value && (element.value = value),
    null == props.defaultValue &&
      element.defaultValue !== value &&
      (element.defaultValue = value));
  null != defaultValue && (element.defaultValue = "" + defaultValue);
}
function postMountWrapper$3(element) {
  var textContent = element.textContent;
  textContent === element._wrapperState.initialValue &&
    "" !== textContent &&
    null !== textContent &&
    (element.value = textContent);
}
var Namespaces = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg"
};
function getIntrinsicNamespace(type) {
  switch (type) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function getChildNamespace(parentNamespace, type) {
  return null == parentNamespace ||
    "http://www.w3.org/1999/xhtml" === parentNamespace
    ? getIntrinsicNamespace(type)
    : "http://www.w3.org/2000/svg" === parentNamespace &&
      "foreignObject" === type
    ? "http://www.w3.org/1999/xhtml"
    : parentNamespace;
}
var reusableSVGContainer,
  setInnerHTML = (function(func) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
      ? function(arg0, arg1, arg2, arg3) {
          MSApp.execUnsafeLocalFunction(function() {
            return func(arg0, arg1, arg2, arg3);
          });
        }
      : func;
  })(function(node, html) {
    if (node.namespaceURI !== Namespaces.svg || "innerHTML" in node)
      node.innerHTML = html;
    else {
      reusableSVGContainer =
        reusableSVGContainer || document.createElement("div");
      reusableSVGContainer.innerHTML =
        "<svg>" + html.valueOf().toString() + "</svg>";
      for (html = reusableSVGContainer.firstChild; node.firstChild; )
        node.removeChild(node.firstChild);
      for (; html.firstChild; ) node.appendChild(html.firstChild);
    }
  });
function setTextContent(node, text) {
  if (text) {
    var firstChild = node.firstChild;
    if (
      firstChild &&
      firstChild === node.lastChild &&
      3 === firstChild.nodeType
    ) {
      firstChild.nodeValue = text;
      return;
    }
  }
  node.textContent = text;
}
var isUnitlessNumber = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  prefixes = ["Webkit", "ms", "Moz", "O"];
Object.keys(isUnitlessNumber).forEach(function(prop) {
  prefixes.forEach(function(prefix) {
    prefix = prefix + prop.charAt(0).toUpperCase() + prop.substring(1);
    isUnitlessNumber[prefix] = isUnitlessNumber[prop];
  });
});
function dangerousStyleValue(name, value, isCustomProperty) {
  return null == value || "boolean" === typeof value || "" === value
    ? ""
    : isCustomProperty ||
      "number" !== typeof value ||
      0 === value ||
      (isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])
    ? ("" + value).trim()
    : value + "px";
}
function setValueForStyles(node, styles) {
  node = node.style;
  for (var styleName in styles)
    if (styles.hasOwnProperty(styleName)) {
      var isCustomProperty = 0 === styleName.indexOf("--"),
        styleValue = dangerousStyleValue(
          styleName,
          styles[styleName],
          isCustomProperty
        );
      "float" === styleName && (styleName = "cssFloat");
      isCustomProperty
        ? node.setProperty(styleName, styleValue)
        : (node[styleName] = styleValue);
    }
}
var voidElementTags = Object.assign(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
);
function assertValidProps(tag, props) {
  if (props) {
    if (
      voidElementTags[tag] &&
      (null != props.children || null != props.dangerouslySetInnerHTML)
    )
      throw Error(formatProdErrorMessage(137, tag));
    if (null != props.dangerouslySetInnerHTML) {
      if (null != props.children) throw Error(formatProdErrorMessage(60));
      if (
        !(
          "object" === typeof props.dangerouslySetInnerHTML &&
          "__html" in props.dangerouslySetInnerHTML
        )
      )
        throw Error(formatProdErrorMessage(61));
    }
    if (null != props.style && "object" !== typeof props.style)
      throw Error(formatProdErrorMessage(62));
  }
}
function isCustomComponent(tagName, props) {
  if (-1 === tagName.indexOf("-")) return "string" === typeof props.is;
  switch (tagName) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
function getEventTarget(nativeEvent) {
  nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
  nativeEvent.correspondingUseElement &&
    (nativeEvent = nativeEvent.correspondingUseElement);
  return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
}
var restoreImpl = null,
  restoreTarget = null,
  restoreQueue = null;
function restoreStateOfTarget(target) {
  if ((target = getInstanceFromNode$1(target))) {
    if ("function" !== typeof restoreImpl)
      throw Error(formatProdErrorMessage(280));
    var stateNode = target.stateNode;
    stateNode &&
      ((stateNode = getFiberCurrentPropsFromNode(stateNode)),
      restoreImpl(target.stateNode, target.type, stateNode));
  }
}
function enqueueStateRestore(target) {
  restoreTarget
    ? restoreQueue
      ? restoreQueue.push(target)
      : (restoreQueue = [target])
    : (restoreTarget = target);
}
function restoreStateIfNeeded() {
  if (restoreTarget) {
    var target = restoreTarget,
      queuedTargets = restoreQueue;
    restoreQueue = restoreTarget = null;
    restoreStateOfTarget(target);
    if (queuedTargets)
      for (target = 0; target < queuedTargets.length; target++)
        restoreStateOfTarget(queuedTargets[target]);
  }
}
function batchedUpdatesImpl(fn, bookkeeping) {
  return fn(bookkeeping);
}
function discreteUpdatesImpl(fn, a, b, c, d) {
  return fn(a, b, c, d);
}
function flushDiscreteUpdatesImpl() {}
var batchedEventUpdatesImpl = batchedUpdatesImpl,
  isInsideEventHandler = !1,
  isBatchingEventUpdates = !1;
function finishEventHandler() {
  if (null !== restoreTarget || null !== restoreQueue)
    flushDiscreteUpdatesImpl(), restoreStateIfNeeded();
}
function batchedEventUpdates(fn, a, b) {
  if (isBatchingEventUpdates) return fn(a, b);
  isBatchingEventUpdates = !0;
  try {
    return batchedEventUpdatesImpl(fn, a, b);
  } finally {
    (isBatchingEventUpdates = !1), finishEventHandler();
  }
}
var lastFlushedEventTimeStamp = 0;
function getListener(inst, registrationName) {
  var stateNode = inst.stateNode;
  if (null === stateNode) return null;
  var props = getFiberCurrentPropsFromNode(stateNode);
  if (null === props) return null;
  stateNode = props[registrationName];
  a: switch (registrationName) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (props = !props.disabled) ||
        ((inst = inst.type),
        (props = !(
          "button" === inst ||
          "input" === inst ||
          "select" === inst ||
          "textarea" === inst
        )));
      inst = !props;
      break a;
    default:
      inst = !1;
  }
  if (inst) return null;
  if (stateNode && "function" !== typeof stateNode)
    throw Error(
      formatProdErrorMessage(231, registrationName, typeof stateNode)
    );
  return stateNode;
}
var passiveBrowserEventsSupported = !1;
if (canUseDOM)
  try {
    var options = {};
    Object.defineProperty(options, "passive", {
      get: function() {
        passiveBrowserEventsSupported = !0;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (e) {
    passiveBrowserEventsSupported = !1;
  }
var ReactFbErrorUtils = require("ReactFbErrorUtils");
if ("function" !== typeof ReactFbErrorUtils.invokeGuardedCallback)
  throw Error(formatProdErrorMessage(255));
function invokeGuardedCallbackImpl(name, func, context, a, b, c, d, e, f) {
  ReactFbErrorUtils.invokeGuardedCallback.apply(this, arguments);
}
var hasError = !1,
  caughtError = null,
  hasRethrowError = !1,
  rethrowError = null,
  reporter = {
    onError: function(error) {
      hasError = !0;
      caughtError = error;
    }
  };
function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
  hasError = !1;
  caughtError = null;
  invokeGuardedCallbackImpl.apply(reporter, arguments);
}
function invokeGuardedCallbackAndCatchFirstError(
  name,
  func,
  context,
  a,
  b,
  c,
  d,
  e,
  f
) {
  invokeGuardedCallback.apply(this, arguments);
  if (hasError) {
    if (hasError) {
      var error = caughtError;
      hasError = !1;
      caughtError = null;
    } else throw Error(formatProdErrorMessage(198));
    hasRethrowError || ((hasRethrowError = !0), (rethrowError = error));
  }
}
function getNearestMountedFiber(fiber) {
  var node = fiber,
    nearestMounted = fiber;
  if (fiber.alternate) for (; node.return; ) node = node.return;
  else {
    fiber = node;
    do
      (node = fiber),
        0 !== (node.flags & 2050) && (nearestMounted = node.return),
        (fiber = node.return);
    while (fiber);
  }
  return 3 === node.tag ? nearestMounted : null;
}
function getSuspenseInstanceFromFiber(fiber) {
  if (13 === fiber.tag) {
    var suspenseState = fiber.memoizedState;
    null === suspenseState &&
      ((fiber = fiber.alternate),
      null !== fiber && (suspenseState = fiber.memoizedState));
    if (null !== suspenseState) return suspenseState.dehydrated;
  }
  return null;
}
function assertIsMounted(fiber) {
  if (getNearestMountedFiber(fiber) !== fiber)
    throw Error(formatProdErrorMessage(188));
}
function findCurrentFiberUsingSlowPath(fiber) {
  var alternate = fiber.alternate;
  if (!alternate) {
    alternate = getNearestMountedFiber(fiber);
    if (null === alternate) throw Error(formatProdErrorMessage(188));
    return alternate !== fiber ? null : fiber;
  }
  for (var a = fiber, b = alternate; ; ) {
    var parentA = a.return;
    if (null === parentA) break;
    var parentB = parentA.alternate;
    if (null === parentB) {
      b = parentA.return;
      if (null !== b) {
        a = b;
        continue;
      }
      break;
    }
    if (parentA.child === parentB.child) {
      for (parentB = parentA.child; parentB; ) {
        if (parentB === a) return assertIsMounted(parentA), fiber;
        if (parentB === b) return assertIsMounted(parentA), alternate;
        parentB = parentB.sibling;
      }
      throw Error(formatProdErrorMessage(188));
    }
    if (a.return !== b.return) (a = parentA), (b = parentB);
    else {
      for (var didFindChild = !1, child$8 = parentA.child; child$8; ) {
        if (child$8 === a) {
          didFindChild = !0;
          a = parentA;
          b = parentB;
          break;
        }
        if (child$8 === b) {
          didFindChild = !0;
          b = parentA;
          a = parentB;
          break;
        }
        child$8 = child$8.sibling;
      }
      if (!didFindChild) {
        for (child$8 = parentB.child; child$8; ) {
          if (child$8 === a) {
            didFindChild = !0;
            a = parentB;
            b = parentA;
            break;
          }
          if (child$8 === b) {
            didFindChild = !0;
            b = parentB;
            a = parentA;
            break;
          }
          child$8 = child$8.sibling;
        }
        if (!didFindChild) throw Error(formatProdErrorMessage(189));
      }
    }
    if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
  }
  if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
  return a.stateNode.current === a ? fiber : alternate;
}
function findCurrentHostFiberImpl(node) {
  if (5 === node.tag || 6 === node.tag) return node;
  for (node = node.child; null !== node; ) {
    var match = findCurrentHostFiberImpl(node);
    if (null !== match) return match;
    node = node.sibling;
  }
  return null;
}
function isFiberSuspenseAndTimedOut(fiber) {
  var memoizedState = fiber.memoizedState;
  return (
    13 === fiber.tag &&
    null !== memoizedState &&
    null === memoizedState.dehydrated
  );
}
function doesFiberContain(parentFiber, childFiber) {
  for (
    var parentFiberAlternate = parentFiber.alternate;
    null !== childFiber;

  ) {
    if (childFiber === parentFiber || childFiber === parentFiberAlternate)
      return !0;
    childFiber = childFiber.return;
  }
  return !1;
}
var attemptSynchronousHydration,
  attemptDiscreteHydration,
  attemptContinuousHydration,
  attemptHydrationAtCurrentPriority,
  attemptHydrationAtPriority,
  hasScheduledReplayAttempt = !1,
  queuedDiscreteEvents = [],
  queuedFocus = null,
  queuedDrag = null,
  queuedMouse = null,
  queuedPointers = new Map(),
  queuedPointerCaptures = new Map(),
  queuedExplicitHydrationTargets = [],
  discreteReplayableEvents = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
    " "
  );
function createQueuedReplayableEvent(
  blockedOn,
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  return {
    blockedOn: blockedOn,
    domEventName: domEventName,
    eventSystemFlags: eventSystemFlags | 16,
    nativeEvent: nativeEvent,
    targetContainers: [targetContainer]
  };
}
function queueDiscreteEvent(
  blockedOn,
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  blockedOn = createQueuedReplayableEvent(
    blockedOn,
    domEventName,
    eventSystemFlags,
    targetContainer,
    nativeEvent
  );
  queuedDiscreteEvents.push(blockedOn);
  if (1 === queuedDiscreteEvents.length)
    for (; null !== blockedOn.blockedOn; ) {
      domEventName = getInstanceFromNode$1(blockedOn.blockedOn);
      if (null === domEventName) break;
      attemptSynchronousHydration(domEventName);
      if (null === blockedOn.blockedOn) replayUnblockedEvents();
      else break;
    }
}
function clearIfContinuousEvent(domEventName, nativeEvent) {
  switch (domEventName) {
    case "focusin":
    case "focusout":
      queuedFocus = null;
      break;
    case "dragenter":
    case "dragleave":
      queuedDrag = null;
      break;
    case "mouseover":
    case "mouseout":
      queuedMouse = null;
      break;
    case "pointerover":
    case "pointerout":
      queuedPointers.delete(nativeEvent.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      queuedPointerCaptures.delete(nativeEvent.pointerId);
  }
}
function accumulateOrCreateContinuousQueuedReplayableEvent(
  existingQueuedEvent,
  blockedOn,
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  if (
    null === existingQueuedEvent ||
    existingQueuedEvent.nativeEvent !== nativeEvent
  )
    return (
      (existingQueuedEvent = createQueuedReplayableEvent(
        blockedOn,
        domEventName,
        eventSystemFlags,
        targetContainer,
        nativeEvent
      )),
      null !== blockedOn &&
        ((blockedOn = getInstanceFromNode$1(blockedOn)),
        null !== blockedOn && attemptContinuousHydration(blockedOn)),
      existingQueuedEvent
    );
  existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
  blockedOn = existingQueuedEvent.targetContainers;
  null !== targetContainer &&
    -1 === blockedOn.indexOf(targetContainer) &&
    blockedOn.push(targetContainer);
  return existingQueuedEvent;
}
function queueIfContinuousEvent(
  blockedOn,
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  switch (domEventName) {
    case "focusin":
      return (
        (queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedFocus,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )),
        !0
      );
    case "dragenter":
      return (
        (queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedDrag,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )),
        !0
      );
    case "mouseover":
      return (
        (queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedMouse,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )),
        !0
      );
    case "pointerover":
      var pointerId = nativeEvent.pointerId;
      queuedPointers.set(
        pointerId,
        accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedPointers.get(pointerId) || null,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )
      );
      return !0;
    case "gotpointercapture":
      return (
        (pointerId = nativeEvent.pointerId),
        queuedPointerCaptures.set(
          pointerId,
          accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedPointerCaptures.get(pointerId) || null,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          )
        ),
        !0
      );
  }
  return !1;
}
function attemptExplicitHydrationTarget(queuedTarget) {
  var targetInst = getClosestInstanceFromNode(queuedTarget.target);
  if (null !== targetInst) {
    var nearestMounted = getNearestMountedFiber(targetInst);
    if (null !== nearestMounted)
      if (((targetInst = nearestMounted.tag), 13 === targetInst)) {
        if (
          ((targetInst = getSuspenseInstanceFromFiber(nearestMounted)),
          null !== targetInst)
        ) {
          queuedTarget.blockedOn = targetInst;
          attemptHydrationAtPriority(queuedTarget.lanePriority, function() {
            attemptHydrationAtCurrentPriority(nearestMounted);
          });
          return;
        }
      } else if (3 === targetInst && nearestMounted.stateNode.hydrate) {
        queuedTarget.blockedOn =
          3 === nearestMounted.tag
            ? nearestMounted.stateNode.containerInfo
            : null;
        return;
      }
  }
  queuedTarget.blockedOn = null;
}
function attemptReplayContinuousQueuedEvent(queuedEvent) {
  if (null !== queuedEvent.blockedOn) return !1;
  for (
    var targetContainers = queuedEvent.targetContainers;
    0 < targetContainers.length;

  ) {
    var nextBlockedOn = attemptToDispatchEvent(
      queuedEvent.domEventName,
      queuedEvent.eventSystemFlags,
      targetContainers[0],
      queuedEvent.nativeEvent
    );
    if (null !== nextBlockedOn)
      return (
        (targetContainers = getInstanceFromNode$1(nextBlockedOn)),
        null !== targetContainers &&
          attemptContinuousHydration(targetContainers),
        (queuedEvent.blockedOn = nextBlockedOn),
        !1
      );
    targetContainers.shift();
  }
  return !0;
}
function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
  attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
}
function replayUnblockedEvents() {
  for (hasScheduledReplayAttempt = !1; 0 < queuedDiscreteEvents.length; ) {
    var nextDiscreteEvent = queuedDiscreteEvents[0];
    if (null !== nextDiscreteEvent.blockedOn) {
      nextDiscreteEvent = getInstanceFromNode$1(nextDiscreteEvent.blockedOn);
      null !== nextDiscreteEvent && attemptDiscreteHydration(nextDiscreteEvent);
      break;
    }
    for (
      var targetContainers = nextDiscreteEvent.targetContainers;
      0 < targetContainers.length;

    ) {
      var nextBlockedOn = attemptToDispatchEvent(
        nextDiscreteEvent.domEventName,
        nextDiscreteEvent.eventSystemFlags,
        targetContainers[0],
        nextDiscreteEvent.nativeEvent
      );
      if (null !== nextBlockedOn) {
        nextDiscreteEvent.blockedOn = nextBlockedOn;
        break;
      }
      targetContainers.shift();
    }
    null === nextDiscreteEvent.blockedOn && queuedDiscreteEvents.shift();
  }
  null !== queuedFocus &&
    attemptReplayContinuousQueuedEvent(queuedFocus) &&
    (queuedFocus = null);
  null !== queuedDrag &&
    attemptReplayContinuousQueuedEvent(queuedDrag) &&
    (queuedDrag = null);
  null !== queuedMouse &&
    attemptReplayContinuousQueuedEvent(queuedMouse) &&
    (queuedMouse = null);
  queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
  queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
}
function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
  queuedEvent.blockedOn === unblocked &&
    ((queuedEvent.blockedOn = null),
    hasScheduledReplayAttempt ||
      ((hasScheduledReplayAttempt = !0),
      Scheduler.unstable_scheduleCallback(
        Scheduler.unstable_NormalPriority,
        replayUnblockedEvents
      )));
}
function retryIfBlockedOn(unblocked) {
  function unblock(queuedEvent) {
    return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
  }
  if (0 < queuedDiscreteEvents.length) {
    scheduleCallbackIfUnblocked(queuedDiscreteEvents[0], unblocked);
    for (var i = 1; i < queuedDiscreteEvents.length; i++) {
      var queuedEvent$jscomp$0 = queuedDiscreteEvents[i];
      queuedEvent$jscomp$0.blockedOn === unblocked &&
        (queuedEvent$jscomp$0.blockedOn = null);
    }
  }
  null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
  null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
  null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
  queuedPointers.forEach(unblock);
  queuedPointerCaptures.forEach(unblock);
  for (i = 0; i < queuedExplicitHydrationTargets.length; i++)
    (queuedEvent$jscomp$0 = queuedExplicitHydrationTargets[i]),
      queuedEvent$jscomp$0.blockedOn === unblocked &&
        (queuedEvent$jscomp$0.blockedOn = null);
  for (
    ;
    0 < queuedExplicitHydrationTargets.length &&
    ((i = queuedExplicitHydrationTargets[0]), null === i.blockedOn);

  )
    attemptExplicitHydrationTarget(i),
      null === i.blockedOn && queuedExplicitHydrationTargets.shift();
}
var Scheduler_scheduleCallback = Scheduler.unstable_scheduleCallback,
  Scheduler_cancelCallback = Scheduler.unstable_cancelCallback,
  Scheduler_shouldYield = Scheduler.unstable_shouldYield,
  Scheduler_requestPaint = Scheduler.unstable_requestPaint,
  Scheduler_now = Scheduler.unstable_now,
  Scheduler_getCurrentPriorityLevel =
    Scheduler.unstable_getCurrentPriorityLevel,
  Scheduler_ImmediatePriority = Scheduler.unstable_ImmediatePriority,
  Scheduler_UserBlockingPriority = Scheduler.unstable_UserBlockingPriority,
  Scheduler_NormalPriority = Scheduler.unstable_NormalPriority,
  Scheduler_LowPriority = Scheduler.unstable_LowPriority,
  Scheduler_IdlePriority = Scheduler.unstable_IdlePriority;
if (
  null == tracing.__interactionsRef ||
  null == tracing.__interactionsRef.current
)
  throw Error(formatProdErrorMessage(302));
var requestPaint =
    void 0 !== Scheduler_requestPaint ? Scheduler_requestPaint : function() {},
  syncQueue = null,
  immediateQueueCallbackNode = null,
  isFlushingSyncQueue = !1,
  initialTimeMs = Scheduler_now(),
  now =
    1e4 > initialTimeMs
      ? Scheduler_now
      : function() {
          return Scheduler_now() - initialTimeMs;
        };
function getCurrentPriorityLevel() {
  switch (Scheduler_getCurrentPriorityLevel()) {
    case Scheduler_ImmediatePriority:
      return 99;
    case Scheduler_UserBlockingPriority:
      return 98;
    case Scheduler_NormalPriority:
      return 97;
    case Scheduler_LowPriority:
      return 96;
    case Scheduler_IdlePriority:
      return 95;
    default:
      throw Error(formatProdErrorMessage(332));
  }
}
function reactPriorityToSchedulerPriority(reactPriorityLevel) {
  switch (reactPriorityLevel) {
    case 99:
      return Scheduler_ImmediatePriority;
    case 98:
      return Scheduler_UserBlockingPriority;
    case 97:
      return Scheduler_NormalPriority;
    case 96:
      return Scheduler_LowPriority;
    case 95:
      return Scheduler_IdlePriority;
    default:
      throw Error(formatProdErrorMessage(332));
  }
}
function scheduleCallback(reactPriorityLevel, callback, options) {
  reactPriorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
  return Scheduler_scheduleCallback(reactPriorityLevel, callback, options);
}
function flushSyncCallbackQueue() {
  if (null !== immediateQueueCallbackNode) {
    var node = immediateQueueCallbackNode;
    immediateQueueCallbackNode = null;
    Scheduler_cancelCallback(node);
  }
  flushSyncCallbackQueueImpl();
}
function flushSyncCallbackQueueImpl() {
  if (!isFlushingSyncQueue && null !== syncQueue) {
    isFlushingSyncQueue = !0;
    var i = 0,
      previousLanePriority = currentUpdateLanePriority;
    try {
      var queue = syncQueue;
      for (currentUpdateLanePriority = 15; i < queue.length; i++) {
        var callback = queue[i];
        do callback = callback(!0);
        while (null !== callback);
      }
      syncQueue = null;
    } catch (error) {
      throw (null !== syncQueue && (syncQueue = syncQueue.slice(i + 1)),
      Scheduler_scheduleCallback(
        Scheduler_ImmediatePriority,
        flushSyncCallbackQueue
      ),
      error);
    } finally {
      (currentUpdateLanePriority = previousLanePriority),
        (isFlushingSyncQueue = !1);
    }
  }
}
var currentUpdateLanePriority = 0,
  nextTransitionLane = 512,
  nextRetryLane = 8388608,
  return_highestLanePriority = 8;
function getHighestPriorityLanes(lanes) {
  switch (lanes & -lanes) {
    case 1:
      return (return_highestLanePriority = 15), 1;
    case 2:
      return (return_highestLanePriority = 14), 2;
    case 4:
      return (return_highestLanePriority = 13), 4;
    case 8:
      return (return_highestLanePriority = 12), 8;
    case 16:
      return (return_highestLanePriority = 11), 16;
    case 32:
      return (return_highestLanePriority = 10), 32;
    case 64:
      return (return_highestLanePriority = 9), 64;
    case 128:
      return (return_highestLanePriority = 8), 128;
    case 256:
      return (return_highestLanePriority = 7), 256;
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
      return (return_highestLanePriority = 6), lanes & 8388096;
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return (return_highestLanePriority = 5), lanes & 125829120;
    case 134217728:
      return (return_highestLanePriority = 4), 134217728;
    case 268435456:
      return (return_highestLanePriority = 3), 268435456;
    case 536870912:
      return (return_highestLanePriority = 2), 536870912;
    case 1073741824:
      return (return_highestLanePriority = 1), 1073741824;
    default:
      return (return_highestLanePriority = 8), lanes;
  }
}
function lanePriorityToSchedulerPriority(lanePriority) {
  switch (lanePriority) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(formatProdErrorMessage(358, lanePriority));
  }
}
function getNextLanes(root, wipLanes) {
  var pendingLanes = root.pendingLanes;
  if (0 === pendingLanes) return (return_highestLanePriority = 0);
  var nextLanes = 0,
    nextLanePriority = 0,
    expiredLanes = root.expiredLanes,
    suspendedLanes = root.suspendedLanes,
    pingedLanes = root.pingedLanes;
  0 !== expiredLanes
    ? ((nextLanes = expiredLanes),
      (nextLanePriority = return_highestLanePriority = 15))
    : ((expiredLanes = pendingLanes & 268435455),
      0 !== expiredLanes
        ? ((pendingLanes = expiredLanes & ~suspendedLanes),
          0 !== pendingLanes
            ? ((nextLanes = getHighestPriorityLanes(pendingLanes)),
              (nextLanePriority = return_highestLanePriority))
            : ((pingedLanes &= expiredLanes),
              0 !== pingedLanes &&
                ((nextLanes = getHighestPriorityLanes(pingedLanes)),
                (nextLanePriority = return_highestLanePriority))))
        : ((pendingLanes &= ~suspendedLanes),
          0 !== pendingLanes
            ? ((nextLanes = getHighestPriorityLanes(pendingLanes)),
              (nextLanePriority = return_highestLanePriority))
            : 0 !== pingedLanes &&
              ((nextLanes = getHighestPriorityLanes(pingedLanes)),
              (nextLanePriority = return_highestLanePriority))));
  if (0 === nextLanes) return 0;
  if (
    0 !== wipLanes &&
    wipLanes !== nextLanes &&
    0 === (wipLanes & suspendedLanes)
  ) {
    getHighestPriorityLanes(wipLanes);
    suspendedLanes = return_highestLanePriority;
    if (
      nextLanePriority <= suspendedLanes ||
      (8 === nextLanePriority && 6 === suspendedLanes)
    )
      return wipLanes;
    return_highestLanePriority = nextLanePriority;
  }
  wipLanes = root.entangledLanes;
  if (0 !== wipLanes)
    for (root = root.entanglements, wipLanes &= nextLanes; 0 < wipLanes; )
      (nextLanePriority = 31 - clz32(wipLanes)),
        (suspendedLanes = 1 << nextLanePriority),
        (nextLanes |= root[nextLanePriority]),
        (wipLanes &= ~suspendedLanes);
  return nextLanes;
}
function getLanesToRetrySynchronouslyOnError(root) {
  root = root.pendingLanes & -1073741825;
  return 0 !== root ? root : root & 1073741824 ? 1073741824 : 0;
}
function findUpdateLane(lanePriority) {
  switch (lanePriority) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return 1;
    case 10:
      return 32;
    case 8:
      return 128;
    case 2:
      return 536870912;
  }
  throw Error(formatProdErrorMessage(358, lanePriority));
}
function createLaneMap(initial) {
  for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
  return laneMap;
}
function markRootUpdated(root, updateLane, eventTime) {
  root.pendingLanes |= updateLane;
  536870912 !== updateLane &&
    ((root.suspendedLanes = 0), (root.pingedLanes = 0));
  root = root.eventTimes;
  updateLane = 31 - clz32(updateLane);
  root[updateLane] = eventTime;
}
function markRootFinished(root, remainingLanes) {
  var noLongerPendingLanes = root.pendingLanes & ~remainingLanes;
  root.pendingLanes = remainingLanes;
  root.suspendedLanes = 0;
  root.pingedLanes = 0;
  root.expiredLanes &= remainingLanes;
  root.mutableReadLanes &= remainingLanes;
  root.entangledLanes &= remainingLanes;
  0 === (root.pooledCacheLanes &= remainingLanes) && (root.pooledCache = null);
  remainingLanes = root.entanglements;
  var eventTimes = root.eventTimes;
  for (root = root.expirationTimes; 0 < noLongerPendingLanes; ) {
    var index$18 = 31 - clz32(noLongerPendingLanes),
      lane = 1 << index$18;
    remainingLanes[index$18] = 0;
    eventTimes[index$18] = -1;
    root[index$18] = -1;
    noLongerPendingLanes &= ~lane;
  }
}
function markRootEntangled(root, entangledLanes) {
  var rootEntangledLanes = (root.entangledLanes |= entangledLanes);
  for (root = root.entanglements; rootEntangledLanes; ) {
    var index$19 = 31 - clz32(rootEntangledLanes),
      lane = 1 << index$19;
    (lane & entangledLanes) | (root[index$19] & entangledLanes) &&
      (root[index$19] |= entangledLanes);
    rootEntangledLanes &= ~lane;
  }
}
var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback,
  log = Math.log,
  LN2 = Math.LN2;
function clz32Fallback(lanes) {
  return 0 === lanes ? 32 : (31 - ((log(lanes) / LN2) | 0)) | 0;
}
var Scheduler_now$1 = Scheduler.unstable_now;
if (
  null == tracing.__interactionsRef ||
  null == tracing.__interactionsRef.current
)
  throw Error(formatProdErrorMessage(302));
Scheduler_now$1();
function schedulerPriorityToLanePriority(schedulerPriorityLevel) {
  switch (schedulerPriorityLevel) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
var _enabled = !0;
function createEventListenerWrapperWithPriority(
  targetContainer,
  domEventName,
  eventSystemFlags
) {
  switch (getEventPriority(domEventName)) {
    case 12:
      var listenerWrapper = dispatchDiscreteEvent;
      break;
    case 10:
      listenerWrapper = dispatchContinuousEvent;
      break;
    default:
      listenerWrapper = dispatchEvent;
  }
  return listenerWrapper.bind(
    null,
    domEventName,
    eventSystemFlags,
    targetContainer
  );
}
function dispatchDiscreteEvent(
  domEventName,
  eventSystemFlags,
  container,
  nativeEvent
) {
  if (!enableLegacyFBSupport || 0 === (eventSystemFlags & 32)) {
    var timeStamp = nativeEvent.timeStamp;
    isInsideEventHandler ||
      (0 !== timeStamp && lastFlushedEventTimeStamp === timeStamp) ||
      ((lastFlushedEventTimeStamp = timeStamp), flushDiscreteUpdatesImpl());
  }
  timeStamp = dispatchEvent;
  var prevIsInsideEventHandler = isInsideEventHandler;
  isInsideEventHandler = !0;
  try {
    discreteUpdatesImpl(
      timeStamp,
      domEventName,
      eventSystemFlags,
      container,
      nativeEvent
    );
  } finally {
    (isInsideEventHandler = prevIsInsideEventHandler) || finishEventHandler();
  }
}
function dispatchContinuousEvent(
  domEventName,
  eventSystemFlags,
  container,
  nativeEvent
) {
  var previousPriority = currentUpdateLanePriority;
  try {
    (currentUpdateLanePriority = 10),
      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
  } finally {
    currentUpdateLanePriority = previousPriority;
  }
}
function dispatchEvent(
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  if (_enabled) {
    var allowReplay = 0 === (eventSystemFlags & 4);
    if (
      allowReplay &&
      0 < queuedDiscreteEvents.length &&
      -1 < discreteReplayableEvents.indexOf(domEventName)
    )
      queueDiscreteEvent(
        null,
        domEventName,
        eventSystemFlags,
        targetContainer,
        nativeEvent
      );
    else {
      var blockedOn = attemptToDispatchEvent(
        domEventName,
        eventSystemFlags,
        targetContainer,
        nativeEvent
      );
      if (null === blockedOn)
        allowReplay && clearIfContinuousEvent(domEventName, nativeEvent);
      else {
        if (allowReplay) {
          if (-1 < discreteReplayableEvents.indexOf(domEventName)) {
            queueDiscreteEvent(
              blockedOn,
              domEventName,
              eventSystemFlags,
              targetContainer,
              nativeEvent
            );
            return;
          }
          if (
            queueIfContinuousEvent(
              blockedOn,
              domEventName,
              eventSystemFlags,
              targetContainer,
              nativeEvent
            )
          )
            return;
          clearIfContinuousEvent(domEventName, nativeEvent);
        }
        dispatchEventForPluginEventSystem(
          domEventName,
          eventSystemFlags,
          nativeEvent,
          null,
          targetContainer
        );
      }
    }
  }
}
function attemptToDispatchEvent(
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  var nativeEventTarget = getEventTarget(nativeEvent);
  nativeEventTarget = getClosestInstanceFromNode(nativeEventTarget);
  if (null !== nativeEventTarget) {
    var nearestMounted = getNearestMountedFiber(nativeEventTarget);
    if (null === nearestMounted) nativeEventTarget = null;
    else {
      var tag = nearestMounted.tag;
      if (13 === tag) {
        nativeEventTarget = getSuspenseInstanceFromFiber(nearestMounted);
        if (null !== nativeEventTarget) return nativeEventTarget;
        nativeEventTarget = null;
      } else if (3 === tag) {
        if (nearestMounted.stateNode.hydrate)
          return 3 === nearestMounted.tag
            ? nearestMounted.stateNode.containerInfo
            : null;
        nativeEventTarget = null;
      } else nearestMounted !== nativeEventTarget && (nativeEventTarget = null);
    }
  }
  dispatchEventForPluginEventSystem(
    domEventName,
    eventSystemFlags,
    nativeEvent,
    nativeEventTarget,
    targetContainer
  );
  return null;
}
function getEventPriority(domEventName) {
  switch (domEventName) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 12;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
      return 10;
    case "message":
      return (
        (domEventName = getCurrentPriorityLevel()),
        schedulerPriorityToLanePriority(domEventName)
      );
    default:
      return 8;
  }
}
function addEventBubbleListener(target, eventType, listener) {
  target.addEventListener(eventType, listener, !1);
  return listener;
}
function addEventCaptureListener(target, eventType, listener) {
  target.addEventListener(eventType, listener, !0);
  return listener;
}
function addEventCaptureListenerWithPassiveFlag(
  target,
  eventType,
  listener,
  passive
) {
  target.addEventListener(eventType, listener, {
    capture: !0,
    passive: passive
  });
  return listener;
}
function addEventBubbleListenerWithPassiveFlag(
  target,
  eventType,
  listener,
  passive
) {
  target.addEventListener(eventType, listener, { passive: passive });
  return listener;
}
var root = null,
  startText = null,
  fallbackText = null;
function getData() {
  if (fallbackText) return fallbackText;
  var start,
    startValue = startText,
    startLength = startValue.length,
    end,
    endValue = "value" in root ? root.value : root.textContent,
    endLength = endValue.length;
  for (
    start = 0;
    start < startLength && startValue[start] === endValue[start];
    start++
  );
  var minEnd = startLength - start;
  for (
    end = 1;
    end <= minEnd &&
    startValue[startLength - end] === endValue[endLength - end];
    end++
  );
  return (fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0));
}
function getEventCharCode(nativeEvent) {
  var keyCode = nativeEvent.keyCode;
  "charCode" in nativeEvent
    ? ((nativeEvent = nativeEvent.charCode),
      0 === nativeEvent && 13 === keyCode && (nativeEvent = 13))
    : (nativeEvent = keyCode);
  10 === nativeEvent && (nativeEvent = 13);
  return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
}
function functionThatReturnsTrue() {
  return !0;
}
function functionThatReturnsFalse() {
  return !1;
}
function createSyntheticEvent(Interface) {
  function SyntheticBaseEvent(
    reactName,
    reactEventType,
    targetInst,
    nativeEvent,
    nativeEventTarget
  ) {
    this._reactName = reactName;
    this._targetInst = targetInst;
    this.type = reactEventType;
    this.nativeEvent = nativeEvent;
    this.target = nativeEventTarget;
    this.currentTarget = null;
    for (var propName in Interface)
      Interface.hasOwnProperty(propName) &&
        ((reactName = Interface[propName]),
        (this[propName] = reactName
          ? reactName(nativeEvent)
          : nativeEvent[propName]));
    this.isDefaultPrevented = (null != nativeEvent.defaultPrevented
    ? nativeEvent.defaultPrevented
    : !1 === nativeEvent.returnValue)
      ? functionThatReturnsTrue
      : functionThatReturnsFalse;
    this.isPropagationStopped = functionThatReturnsFalse;
    return this;
  }
  Object.assign(SyntheticBaseEvent.prototype, {
    preventDefault: function() {
      this.defaultPrevented = !0;
      var event = this.nativeEvent;
      event &&
        (event.preventDefault
          ? event.preventDefault()
          : "unknown" !== typeof event.returnValue && (event.returnValue = !1),
        (this.isDefaultPrevented = functionThatReturnsTrue));
    },
    stopPropagation: function() {
      var event = this.nativeEvent;
      event &&
        (event.stopPropagation
          ? event.stopPropagation()
          : "unknown" !== typeof event.cancelBubble &&
            (event.cancelBubble = !0),
        (this.isPropagationStopped = functionThatReturnsTrue));
    },
    persist: function() {},
    isPersistent: functionThatReturnsTrue
  });
  return SyntheticBaseEvent;
}
var EventInterface = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(event) {
      return event.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  SyntheticEvent = createSyntheticEvent(EventInterface),
  UIEventInterface = Object.assign({}, EventInterface, { view: 0, detail: 0 }),
  SyntheticUIEvent = createSyntheticEvent(UIEventInterface),
  lastMovementX,
  lastMovementY,
  lastMouseEvent,
  MouseEventInterface = Object.assign({}, UIEventInterface, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: getEventModifierState,
    button: 0,
    buttons: 0,
    relatedTarget: function(event) {
      return void 0 === event.relatedTarget
        ? event.fromElement === event.srcElement
          ? event.toElement
          : event.fromElement
        : event.relatedTarget;
    },
    movementX: function(event) {
      if ("movementX" in event) return event.movementX;
      event !== lastMouseEvent &&
        (lastMouseEvent && "mousemove" === event.type
          ? ((lastMovementX = event.screenX - lastMouseEvent.screenX),
            (lastMovementY = event.screenY - lastMouseEvent.screenY))
          : (lastMovementY = lastMovementX = 0),
        (lastMouseEvent = event));
      return lastMovementX;
    },
    movementY: function(event) {
      return "movementY" in event ? event.movementY : lastMovementY;
    }
  }),
  SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface),
  DragEventInterface = Object.assign({}, MouseEventInterface, {
    dataTransfer: 0
  }),
  SyntheticDragEvent = createSyntheticEvent(DragEventInterface),
  FocusEventInterface = Object.assign({}, UIEventInterface, {
    relatedTarget: 0
  }),
  SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface),
  AnimationEventInterface = Object.assign({}, EventInterface, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface),
  ClipboardEventInterface = Object.assign({}, EventInterface, {
    clipboardData: function(event) {
      return "clipboardData" in event
        ? event.clipboardData
        : window.clipboardData;
    }
  }),
  SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface),
  CompositionEventInterface = Object.assign({}, EventInterface, { data: 0 }),
  SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface),
  normalizeKey = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  translateToKey = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  modifierKeyToProp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
function modifierStateGetter(keyArg) {
  var nativeEvent = this.nativeEvent;
  return nativeEvent.getModifierState
    ? nativeEvent.getModifierState(keyArg)
    : (keyArg = modifierKeyToProp[keyArg])
    ? !!nativeEvent[keyArg]
    : !1;
}
function getEventModifierState() {
  return modifierStateGetter;
}
var KeyboardEventInterface = Object.assign({}, UIEventInterface, {
    key: function(nativeEvent) {
      if (nativeEvent.key) {
        var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
        if ("Unidentified" !== key) return key;
      }
      return "keypress" === nativeEvent.type
        ? ((nativeEvent = getEventCharCode(nativeEvent)),
          13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent))
        : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type
        ? translateToKey[nativeEvent.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: getEventModifierState,
    charCode: function(event) {
      return "keypress" === event.type ? getEventCharCode(event) : 0;
    },
    keyCode: function(event) {
      return "keydown" === event.type || "keyup" === event.type
        ? event.keyCode
        : 0;
    },
    which: function(event) {
      return "keypress" === event.type
        ? getEventCharCode(event)
        : "keydown" === event.type || "keyup" === event.type
        ? event.keyCode
        : 0;
    }
  }),
  SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface),
  PointerEventInterface = Object.assign({}, MouseEventInterface, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface),
  TouchEventInterface = Object.assign({}, UIEventInterface, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: getEventModifierState
  }),
  SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface),
  TransitionEventInterface = Object.assign({}, EventInterface, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface),
  WheelEventInterface = Object.assign({}, MouseEventInterface, {
    deltaX: function(event) {
      return "deltaX" in event
        ? event.deltaX
        : "wheelDeltaX" in event
        ? -event.wheelDeltaX
        : 0;
    },
    deltaY: function(event) {
      return "deltaY" in event
        ? event.deltaY
        : "wheelDeltaY" in event
        ? -event.wheelDeltaY
        : "wheelDelta" in event
        ? -event.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface),
  END_KEYCODES = [9, 13, 27, 32],
  canUseCompositionEvent = canUseDOM && "CompositionEvent" in window,
  documentMode = null;
canUseDOM &&
  "documentMode" in document &&
  (documentMode = document.documentMode);
var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode,
  useFallbackCompositionData =
    canUseDOM &&
    (!canUseCompositionEvent ||
      (documentMode && 8 < documentMode && 11 >= documentMode)),
  SPACEBAR_CHAR = String.fromCharCode(32),
  hasSpaceKeypress = !1;
function isFallbackCompositionEnd(domEventName, nativeEvent) {
  switch (domEventName) {
    case "keyup":
      return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
    case "keydown":
      return 229 !== nativeEvent.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function getDataFromCustomEvent(nativeEvent) {
  nativeEvent = nativeEvent.detail;
  return "object" === typeof nativeEvent && "data" in nativeEvent
    ? nativeEvent.data
    : null;
}
var isComposing = !1;
function getNativeBeforeInputChars(domEventName, nativeEvent) {
  switch (domEventName) {
    case "compositionend":
      return getDataFromCustomEvent(nativeEvent);
    case "keypress":
      if (32 !== nativeEvent.which) return null;
      hasSpaceKeypress = !0;
      return SPACEBAR_CHAR;
    case "textInput":
      return (
        (domEventName = nativeEvent.data),
        domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName
      );
    default:
      return null;
  }
}
function getFallbackBeforeInputChars(domEventName, nativeEvent) {
  if (isComposing)
    return "compositionend" === domEventName ||
      (!canUseCompositionEvent &&
        isFallbackCompositionEnd(domEventName, nativeEvent))
      ? ((domEventName = getData()),
        (fallbackText = startText = root = null),
        (isComposing = !1),
        domEventName)
      : null;
  switch (domEventName) {
    case "paste":
      return null;
    case "keypress":
      if (
        !(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) ||
        (nativeEvent.ctrlKey && nativeEvent.altKey)
      ) {
        if (nativeEvent.char && 1 < nativeEvent.char.length)
          return nativeEvent.char;
        if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
      }
      return null;
    case "compositionend":
      return useFallbackCompositionData && "ko" !== nativeEvent.locale
        ? null
        : nativeEvent.data;
    default:
      return null;
  }
}
var supportedInputTypes = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return "input" === nodeName
    ? !!supportedInputTypes[elem.type]
    : "textarea" === nodeName
    ? !0
    : !1;
}
function createAndAccumulateChangeEvent(
  dispatchQueue,
  inst,
  nativeEvent,
  target
) {
  enqueueStateRestore(target);
  inst = accumulateTwoPhaseListeners(inst, "onChange");
  0 < inst.length &&
    ((nativeEvent = new SyntheticEvent(
      "onChange",
      "change",
      null,
      nativeEvent,
      target
    )),
    dispatchQueue.push({ event: nativeEvent, listeners: inst }));
}
var activeElement = null,
  activeElementInst = null;
function runEventInBatch(dispatchQueue) {
  processDispatchQueue(dispatchQueue, 0);
}
function getInstIfValueChanged(targetInst) {
  var targetNode = getNodeFromInstance(targetInst);
  if (updateValueIfChanged(targetNode)) return targetInst;
}
function getTargetInstForChangeEvent(domEventName, targetInst) {
  if ("change" === domEventName) return targetInst;
}
var isInputEventSupported = !1;
if (canUseDOM) {
  var JSCompiler_inline_result$jscomp$157;
  if (canUseDOM) {
    var isSupported$jscomp$inline_281 = "oninput" in document;
    if (!isSupported$jscomp$inline_281) {
      var element$jscomp$inline_282 = document.createElement("div");
      element$jscomp$inline_282.setAttribute("oninput", "return;");
      isSupported$jscomp$inline_281 =
        "function" === typeof element$jscomp$inline_282.oninput;
    }
    JSCompiler_inline_result$jscomp$157 = isSupported$jscomp$inline_281;
  } else JSCompiler_inline_result$jscomp$157 = !1;
  isInputEventSupported =
    JSCompiler_inline_result$jscomp$157 &&
    (!document.documentMode || 9 < document.documentMode);
}
function stopWatchingForValueChange() {
  activeElement &&
    (activeElement.detachEvent("onpropertychange", handlePropertyChange),
    (activeElementInst = activeElement = null));
}
function handlePropertyChange(nativeEvent) {
  if (
    "value" === nativeEvent.propertyName &&
    getInstIfValueChanged(activeElementInst)
  ) {
    var dispatchQueue = [];
    createAndAccumulateChangeEvent(
      dispatchQueue,
      activeElementInst,
      nativeEvent,
      getEventTarget(nativeEvent)
    );
    nativeEvent = runEventInBatch;
    if (isInsideEventHandler) nativeEvent(dispatchQueue);
    else {
      isInsideEventHandler = !0;
      try {
        batchedUpdatesImpl(nativeEvent, dispatchQueue);
      } finally {
        (isInsideEventHandler = !1), finishEventHandler();
      }
    }
  }
}
function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
  "focusin" === domEventName
    ? (stopWatchingForValueChange(),
      (activeElement = target),
      (activeElementInst = targetInst),
      activeElement.attachEvent("onpropertychange", handlePropertyChange))
    : "focusout" === domEventName && stopWatchingForValueChange();
}
function getTargetInstForInputEventPolyfill(domEventName) {
  if (
    "selectionchange" === domEventName ||
    "keyup" === domEventName ||
    "keydown" === domEventName
  )
    return getInstIfValueChanged(activeElementInst);
}
function getTargetInstForClickEvent(domEventName, targetInst) {
  if ("click" === domEventName) return getInstIfValueChanged(targetInst);
}
function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
  if ("input" === domEventName || "change" === domEventName)
    return getInstIfValueChanged(targetInst);
}
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is,
  hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function shallowEqual(objA, objB) {
  if (objectIs(objA, objB)) return !0;
  if (
    "object" !== typeof objA ||
    null === objA ||
    "object" !== typeof objB ||
    null === objB
  )
    return !1;
  var keysA = Object.keys(objA),
    keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return !1;
  for (keysB = 0; keysB < keysA.length; keysB++)
    if (
      !hasOwnProperty$1.call(objB, keysA[keysB]) ||
      !objectIs(objA[keysA[keysB]], objB[keysA[keysB]])
    )
      return !1;
  return !0;
}
function getLeafNode(node) {
  for (; node && node.firstChild; ) node = node.firstChild;
  return node;
}
function getNodeForCharacterOffset(root, offset) {
  var node = getLeafNode(root);
  root = 0;
  for (var nodeEnd; node; ) {
    if (3 === node.nodeType) {
      nodeEnd = root + node.textContent.length;
      if (root <= offset && nodeEnd >= offset)
        return { node: node, offset: offset - root };
      root = nodeEnd;
    }
    a: {
      for (; node; ) {
        if (node.nextSibling) {
          node = node.nextSibling;
          break a;
        }
        node = node.parentNode;
      }
      node = void 0;
    }
    node = getLeafNode(node);
  }
}
function containsNode(outerNode, innerNode) {
  return outerNode && innerNode
    ? outerNode === innerNode
      ? !0
      : outerNode && 3 === outerNode.nodeType
      ? !1
      : innerNode && 3 === innerNode.nodeType
      ? containsNode(outerNode, innerNode.parentNode)
      : "contains" in outerNode
      ? outerNode.contains(innerNode)
      : outerNode.compareDocumentPosition
      ? !!(outerNode.compareDocumentPosition(innerNode) & 16)
      : !1
    : !1;
}
function getActiveElementDeep() {
  for (
    var win = window, element = getActiveElement();
    element instanceof win.HTMLIFrameElement;

  ) {
    try {
      var JSCompiler_inline_result =
        "string" === typeof element.contentWindow.location.href;
    } catch (err) {
      JSCompiler_inline_result = !1;
    }
    if (JSCompiler_inline_result) win = element.contentWindow;
    else break;
    element = getActiveElement(win.document);
  }
  return element;
}
function hasSelectionCapabilities(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return (
    nodeName &&
    (("input" === nodeName &&
      ("text" === elem.type ||
        "search" === elem.type ||
        "tel" === elem.type ||
        "url" === elem.type ||
        "password" === elem.type)) ||
      "textarea" === nodeName ||
      "true" === elem.contentEditable)
  );
}
function restoreSelection(priorSelectionInformation) {
  var curFocusedElem = getActiveElementDeep(),
    priorFocusedElem = priorSelectionInformation.focusedElem,
    priorSelectionRange = priorSelectionInformation.selectionRange;
  if (
    curFocusedElem !== priorFocusedElem &&
    priorFocusedElem &&
    priorFocusedElem.ownerDocument &&
    containsNode(
      priorFocusedElem.ownerDocument.documentElement,
      priorFocusedElem
    )
  ) {
    if (
      null !== priorSelectionRange &&
      hasSelectionCapabilities(priorFocusedElem)
    )
      if (
        ((curFocusedElem = priorSelectionRange.start),
        (priorSelectionInformation = priorSelectionRange.end),
        void 0 === priorSelectionInformation &&
          (priorSelectionInformation = curFocusedElem),
        "selectionStart" in priorFocusedElem)
      )
        (priorFocusedElem.selectionStart = curFocusedElem),
          (priorFocusedElem.selectionEnd = Math.min(
            priorSelectionInformation,
            priorFocusedElem.value.length
          ));
      else if (
        ((priorSelectionInformation =
          ((curFocusedElem = priorFocusedElem.ownerDocument || document) &&
            curFocusedElem.defaultView) ||
          window),
        priorSelectionInformation.getSelection)
      ) {
        priorSelectionInformation = priorSelectionInformation.getSelection();
        var length = priorFocusedElem.textContent.length,
          start = Math.min(priorSelectionRange.start, length);
        priorSelectionRange =
          void 0 === priorSelectionRange.end
            ? start
            : Math.min(priorSelectionRange.end, length);
        !priorSelectionInformation.extend &&
          start > priorSelectionRange &&
          ((length = priorSelectionRange),
          (priorSelectionRange = start),
          (start = length));
        length = getNodeForCharacterOffset(priorFocusedElem, start);
        var endMarker = getNodeForCharacterOffset(
          priorFocusedElem,
          priorSelectionRange
        );
        length &&
          endMarker &&
          (1 !== priorSelectionInformation.rangeCount ||
            priorSelectionInformation.anchorNode !== length.node ||
            priorSelectionInformation.anchorOffset !== length.offset ||
            priorSelectionInformation.focusNode !== endMarker.node ||
            priorSelectionInformation.focusOffset !== endMarker.offset) &&
          ((curFocusedElem = curFocusedElem.createRange()),
          curFocusedElem.setStart(length.node, length.offset),
          priorSelectionInformation.removeAllRanges(),
          start > priorSelectionRange
            ? (priorSelectionInformation.addRange(curFocusedElem),
              priorSelectionInformation.extend(
                endMarker.node,
                endMarker.offset
              ))
            : (curFocusedElem.setEnd(endMarker.node, endMarker.offset),
              priorSelectionInformation.addRange(curFocusedElem)));
      }
    curFocusedElem = [];
    for (
      priorSelectionInformation = priorFocusedElem;
      (priorSelectionInformation = priorSelectionInformation.parentNode);

    )
      1 === priorSelectionInformation.nodeType &&
        curFocusedElem.push({
          element: priorSelectionInformation,
          left: priorSelectionInformation.scrollLeft,
          top: priorSelectionInformation.scrollTop
        });
    "function" === typeof priorFocusedElem.focus && priorFocusedElem.focus();
    for (
      priorFocusedElem = 0;
      priorFocusedElem < curFocusedElem.length;
      priorFocusedElem++
    )
      (priorSelectionInformation = curFocusedElem[priorFocusedElem]),
        (priorSelectionInformation.element.scrollLeft =
          priorSelectionInformation.left),
        (priorSelectionInformation.element.scrollTop =
          priorSelectionInformation.top);
  }
}
var skipSelectionChangeEvent =
    canUseDOM && "documentMode" in document && 11 >= document.documentMode,
  activeElement$1 = null,
  activeElementInst$1 = null,
  lastSelection = null,
  mouseDown = !1;
function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
  var doc =
    nativeEventTarget.window === nativeEventTarget
      ? nativeEventTarget.document
      : 9 === nativeEventTarget.nodeType
      ? nativeEventTarget
      : nativeEventTarget.ownerDocument;
  mouseDown ||
    null == activeElement$1 ||
    activeElement$1 !== getActiveElement(doc) ||
    ((doc = activeElement$1),
    "selectionStart" in doc && hasSelectionCapabilities(doc)
      ? (doc = { start: doc.selectionStart, end: doc.selectionEnd })
      : ((doc = (
          (doc.ownerDocument && doc.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (doc = {
          anchorNode: doc.anchorNode,
          anchorOffset: doc.anchorOffset,
          focusNode: doc.focusNode,
          focusOffset: doc.focusOffset
        })),
    (lastSelection && shallowEqual(lastSelection, doc)) ||
      ((lastSelection = doc),
      (doc = accumulateTwoPhaseListeners(activeElementInst$1, "onSelect")),
      0 < doc.length &&
        ((nativeEvent = new SyntheticEvent(
          "onSelect",
          "select",
          null,
          nativeEvent,
          nativeEventTarget
        )),
        dispatchQueue.push({ event: nativeEvent, listeners: doc }),
        (nativeEvent.target = activeElement$1))));
}
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit" + styleProp] = "webkit" + eventName;
  prefixes["Moz" + styleProp] = "moz" + eventName;
  return prefixes;
}
var vendorPrefixes = {
    animationend: makePrefixMap("Animation", "AnimationEnd"),
    animationiteration: makePrefixMap("Animation", "AnimationIteration"),
    animationstart: makePrefixMap("Animation", "AnimationStart"),
    transitionend: makePrefixMap("Transition", "TransitionEnd")
  },
  prefixedEventNames = {},
  style = {};
canUseDOM &&
  ((style = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vendorPrefixes.animationend.animation,
    delete vendorPrefixes.animationiteration.animation,
    delete vendorPrefixes.animationstart.animation),
  "TransitionEvent" in window ||
    delete vendorPrefixes.transitionend.transition);
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
  if (!vendorPrefixes[eventName]) return eventName;
  var prefixMap = vendorPrefixes[eventName],
    styleProp;
  for (styleProp in prefixMap)
    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
      return (prefixedEventNames[eventName] = prefixMap[styleProp]);
  return eventName;
}
var ANIMATION_END = getVendorPrefixedEventName("animationend"),
  ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration"),
  ANIMATION_START = getVendorPrefixedEventName("animationstart"),
  TRANSITION_END = getVendorPrefixedEventName("transitionend"),
  topLevelEventsToReactNames = new Map(),
  simpleEventPluginEvents = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
topLevelEventsToReactNames.set("beforeblur", null);
topLevelEventsToReactNames.set("afterblur", null);
function registerSimpleEvent(domEventName, reactName) {
  topLevelEventsToReactNames.set(domEventName, reactName);
  registerTwoPhaseEvent(reactName, [domEventName]);
}
for (
  var i$jscomp$inline_322 = 0;
  i$jscomp$inline_322 < simpleEventPluginEvents.length;
  i$jscomp$inline_322++
) {
  var eventName$jscomp$inline_323 =
      simpleEventPluginEvents[i$jscomp$inline_322],
    domEventName$jscomp$inline_324 = eventName$jscomp$inline_323.toLowerCase(),
    capitalizedEvent$jscomp$inline_325 =
      eventName$jscomp$inline_323[0].toUpperCase() +
      eventName$jscomp$inline_323.slice(1);
  registerSimpleEvent(
    domEventName$jscomp$inline_324,
    "on" + capitalizedEvent$jscomp$inline_325
  );
}
registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
registerSimpleEvent(ANIMATION_START, "onAnimationStart");
registerSimpleEvent("dblclick", "onDoubleClick");
registerSimpleEvent("focusin", "onFocus");
registerSimpleEvent("focusout", "onBlur");
registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
registerTwoPhaseEvent(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
registerTwoPhaseEvent(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
registerTwoPhaseEvent("onBeforeInput", [
  "compositionend",
  "keypress",
  "textInput",
  "paste"
]);
registerTwoPhaseEvent(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
registerTwoPhaseEvent(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
registerTwoPhaseEvent(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var mediaEventTypes = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ),
  nonDelegatedEvents = new Set(
    "cancel close invalid load scroll toggle".split(" ").concat(mediaEventTypes)
  );
function executeDispatch(event, listener, currentTarget) {
  var type = event.type || "unknown-event";
  event.currentTarget = currentTarget;
  invokeGuardedCallbackAndCatchFirstError(type, listener, void 0, event);
  event.currentTarget = null;
}
function processDispatchQueue(dispatchQueue, eventSystemFlags) {
  eventSystemFlags = 0 !== (eventSystemFlags & 4);
  for (var i = 0; i < dispatchQueue.length; i++) {
    var _dispatchQueue$i = dispatchQueue[i],
      event = _dispatchQueue$i.event;
    _dispatchQueue$i = _dispatchQueue$i.listeners;
    a: {
      var previousInstance = void 0;
      if (eventSystemFlags)
        for (
          var i$jscomp$0 = _dispatchQueue$i.length - 1;
          0 <= i$jscomp$0;
          i$jscomp$0--
        ) {
          var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0],
            instance = _dispatchListeners$i.instance,
            currentTarget = _dispatchListeners$i.currentTarget;
          _dispatchListeners$i = _dispatchListeners$i.listener;
          if (instance !== previousInstance && event.isPropagationStopped())
            break a;
          executeDispatch(event, _dispatchListeners$i, currentTarget);
          previousInstance = instance;
        }
      else
        for (
          i$jscomp$0 = 0;
          i$jscomp$0 < _dispatchQueue$i.length;
          i$jscomp$0++
        ) {
          _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
          instance = _dispatchListeners$i.instance;
          currentTarget = _dispatchListeners$i.currentTarget;
          _dispatchListeners$i = _dispatchListeners$i.listener;
          if (instance !== previousInstance && event.isPropagationStopped())
            break a;
          executeDispatch(event, _dispatchListeners$i, currentTarget);
          previousInstance = instance;
        }
    }
  }
  if (hasRethrowError)
    throw ((dispatchQueue = rethrowError),
    (hasRethrowError = !1),
    (rethrowError = null),
    dispatchQueue);
}
function listenToNonDelegatedEvent(domEventName, targetElement) {
  var listenerSet = getEventListenerSet(targetElement),
    listenerSetKey = domEventName + "__bubble";
  listenerSet.has(listenerSetKey) ||
    (addTrappedEventListener(targetElement, domEventName, 2, !1),
    listenerSet.add(listenerSetKey));
}
function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
  var eventSystemFlags = 0;
  isCapturePhaseListener && (eventSystemFlags |= 4);
  addTrappedEventListener(
    target,
    domEventName,
    eventSystemFlags,
    isCapturePhaseListener
  );
}
var listeningMarker =
  "_reactListening" +
  Math.random()
    .toString(36)
    .slice(2);
function listenToAllSupportedEvents(rootContainerElement) {
  if (!rootContainerElement[listeningMarker]) {
    rootContainerElement[listeningMarker] = !0;
    allNativeEvents.forEach(function(domEventName) {
      "selectionchange" !== domEventName &&
        (nonDelegatedEvents.has(domEventName) ||
          listenToNativeEvent(domEventName, !1, rootContainerElement),
        listenToNativeEvent(domEventName, !0, rootContainerElement));
    });
    var ownerDocument =
      9 === rootContainerElement.nodeType
        ? rootContainerElement
        : rootContainerElement.ownerDocument;
    null === ownerDocument ||
      ownerDocument[listeningMarker] ||
      ((ownerDocument[listeningMarker] = !0),
      listenToNativeEvent("selectionchange", !1, ownerDocument));
  }
}
function addTrappedEventListener(
  targetContainer,
  domEventName,
  eventSystemFlags,
  isCapturePhaseListener,
  isDeferredListenerForLegacyFBSupport
) {
  eventSystemFlags = createEventListenerWrapperWithPriority(
    targetContainer,
    domEventName,
    eventSystemFlags
  );
  var isPassiveListener = void 0;
  !passiveBrowserEventsSupported ||
    ("touchstart" !== domEventName &&
      "touchmove" !== domEventName &&
      "wheel" !== domEventName) ||
    (isPassiveListener = !0);
  targetContainer =
    enableLegacyFBSupport && isDeferredListenerForLegacyFBSupport
      ? targetContainer.ownerDocument
      : targetContainer;
  if (enableLegacyFBSupport && isDeferredListenerForLegacyFBSupport) {
    var originalListener = eventSystemFlags;
    eventSystemFlags = function() {
      targetContainer.removeEventListener(
        domEventName,
        unsubscribeListener,
        isCapturePhaseListener
      );
      for (
        var _len = arguments.length, p = Array(_len), _key = 0;
        _key < _len;
        _key++
      )
        p[_key] = arguments[_key];
      return originalListener.apply(this, p);
    };
  }
  var unsubscribeListener = isCapturePhaseListener
    ? void 0 !== isPassiveListener
      ? addEventCaptureListenerWithPassiveFlag(
          targetContainer,
          domEventName,
          eventSystemFlags,
          isPassiveListener
        )
      : addEventCaptureListener(targetContainer, domEventName, eventSystemFlags)
    : void 0 !== isPassiveListener
    ? addEventBubbleListenerWithPassiveFlag(
        targetContainer,
        domEventName,
        eventSystemFlags,
        isPassiveListener
      )
    : addEventBubbleListener(targetContainer, domEventName, eventSystemFlags);
}
function dispatchEventForPluginEventSystem(
  domEventName,
  eventSystemFlags,
  nativeEvent,
  targetInst$jscomp$0,
  targetContainer
) {
  var ancestorInst = targetInst$jscomp$0;
  if (0 === (eventSystemFlags & 1) && 0 === (eventSystemFlags & 2)) {
    if (
      enableLegacyFBSupport &&
      "click" === domEventName &&
      0 === (eventSystemFlags & 52)
    ) {
      addTrappedEventListener(targetContainer, domEventName, 32, !1, !0);
      return;
    }
    if (null !== targetInst$jscomp$0)
      a: for (;;) {
        if (null === targetInst$jscomp$0) return;
        var nodeTag = targetInst$jscomp$0.tag;
        if (3 === nodeTag || 4 === nodeTag) {
          var container = targetInst$jscomp$0.stateNode.containerInfo;
          if (
            container === targetContainer ||
            (8 === container.nodeType &&
              container.parentNode === targetContainer)
          )
            break;
          if (4 === nodeTag)
            for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
              var grandTag = nodeTag.tag;
              if (3 === grandTag || 4 === grandTag)
                if (
                  ((grandTag = nodeTag.stateNode.containerInfo),
                  grandTag === targetContainer ||
                    (8 === grandTag.nodeType &&
                      grandTag.parentNode === targetContainer))
                )
                  return;
              nodeTag = nodeTag.return;
            }
          for (; null !== container; ) {
            nodeTag = getClosestInstanceFromNode(container);
            if (null === nodeTag) return;
            grandTag = nodeTag.tag;
            if (5 === grandTag || 6 === grandTag) {
              targetInst$jscomp$0 = ancestorInst = nodeTag;
              continue a;
            }
            container = container.parentNode;
          }
        }
        targetInst$jscomp$0 = targetInst$jscomp$0.return;
      }
  }
  batchedEventUpdates(function() {
    var targetInst = ancestorInst,
      nativeEventTarget = getEventTarget(nativeEvent),
      dispatchQueue = [];
    a: {
      var reactName = topLevelEventsToReactNames.get(domEventName);
      if (void 0 !== reactName) {
        var SyntheticEventCtor = SyntheticEvent,
          reactEventType = domEventName;
        switch (domEventName) {
          case "keypress":
            if (0 === getEventCharCode(nativeEvent)) break a;
          case "keydown":
          case "keyup":
            SyntheticEventCtor = SyntheticKeyboardEvent;
            break;
          case "focusin":
            reactEventType = "focus";
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "focusout":
            reactEventType = "blur";
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "beforeblur":
          case "afterblur":
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "click":
            if (2 === nativeEvent.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            SyntheticEventCtor = SyntheticMouseEvent;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            SyntheticEventCtor = SyntheticDragEvent;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            SyntheticEventCtor = SyntheticTouchEvent;
            break;
          case ANIMATION_END:
          case ANIMATION_ITERATION:
          case ANIMATION_START:
            SyntheticEventCtor = SyntheticAnimationEvent;
            break;
          case TRANSITION_END:
            SyntheticEventCtor = SyntheticTransitionEvent;
            break;
          case "scroll":
            SyntheticEventCtor = SyntheticUIEvent;
            break;
          case "wheel":
            SyntheticEventCtor = SyntheticWheelEvent;
            break;
          case "copy":
          case "cut":
          case "paste":
            SyntheticEventCtor = SyntheticClipboardEvent;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            SyntheticEventCtor = SyntheticPointerEvent;
        }
        var inCapturePhase = 0 !== (eventSystemFlags & 4);
        eventSystemFlags & 1
          ? ((inCapturePhase = accumulateEventHandleNonManagedNodeListeners(
              reactEventType,
              targetContainer,
              inCapturePhase
            )),
            0 < inCapturePhase.length &&
              ((reactName = new SyntheticEventCtor(
                reactName,
                reactEventType,
                null,
                nativeEvent,
                nativeEventTarget
              )),
              dispatchQueue.push({
                event: reactName,
                listeners: inCapturePhase
              })))
          : ((inCapturePhase = accumulateSinglePhaseListeners(
              targetInst,
              reactName,
              nativeEvent.type,
              inCapturePhase,
              !inCapturePhase && "scroll" === domEventName,
              nativeEvent
            )),
            0 < inCapturePhase.length &&
              ((reactName = new SyntheticEventCtor(
                reactName,
                reactEventType,
                null,
                nativeEvent,
                nativeEventTarget
              )),
              dispatchQueue.push({
                event: reactName,
                listeners: inCapturePhase
              })));
      }
    }
    if (0 === (eventSystemFlags & 7)) {
      a: {
        reactName =
          "mouseover" === domEventName || "pointerover" === domEventName;
        SyntheticEventCtor =
          "mouseout" === domEventName || "pointerout" === domEventName;
        if (
          reactName &&
          0 === (eventSystemFlags & 16) &&
          (reactEventType =
            nativeEvent.relatedTarget || nativeEvent.fromElement) &&
          (getClosestInstanceFromNode(reactEventType) ||
            reactEventType[internalContainerInstanceKey])
        )
          break a;
        if (SyntheticEventCtor || reactName) {
          reactName =
            nativeEventTarget.window === nativeEventTarget
              ? nativeEventTarget
              : (reactName = nativeEventTarget.ownerDocument)
              ? reactName.defaultView || reactName.parentWindow
              : window;
          if (SyntheticEventCtor) {
            if (
              ((reactEventType =
                nativeEvent.relatedTarget || nativeEvent.toElement),
              (SyntheticEventCtor = targetInst),
              (reactEventType = reactEventType
                ? getClosestInstanceFromNode(reactEventType)
                : null),
              null !== reactEventType &&
                ((inCapturePhase = getNearestMountedFiber(reactEventType)),
                reactEventType !== inCapturePhase ||
                  (5 !== reactEventType.tag && 6 !== reactEventType.tag)))
            )
              reactEventType = null;
          } else (SyntheticEventCtor = null), (reactEventType = targetInst);
          if (SyntheticEventCtor !== reactEventType) {
            var SyntheticEventCtor$jscomp$0 = SyntheticMouseEvent,
              leaveEventType = "onMouseLeave",
              enterEventType = "onMouseEnter",
              eventTypePrefix = "mouse";
            if ("pointerout" === domEventName || "pointerover" === domEventName)
              (SyntheticEventCtor$jscomp$0 = SyntheticPointerEvent),
                (leaveEventType = "onPointerLeave"),
                (enterEventType = "onPointerEnter"),
                (eventTypePrefix = "pointer");
            inCapturePhase =
              null == SyntheticEventCtor
                ? reactName
                : getNodeFromInstance(SyntheticEventCtor);
            var toNode =
              null == reactEventType
                ? reactName
                : getNodeFromInstance(reactEventType);
            reactName = new SyntheticEventCtor$jscomp$0(
              leaveEventType,
              eventTypePrefix + "leave",
              SyntheticEventCtor,
              nativeEvent,
              nativeEventTarget
            );
            reactName.target = inCapturePhase;
            reactName.relatedTarget = toNode;
            leaveEventType = null;
            getClosestInstanceFromNode(nativeEventTarget) === targetInst &&
              ((SyntheticEventCtor$jscomp$0 = new SyntheticEventCtor$jscomp$0(
                enterEventType,
                eventTypePrefix + "enter",
                reactEventType,
                nativeEvent,
                nativeEventTarget
              )),
              (SyntheticEventCtor$jscomp$0.target = toNode),
              (SyntheticEventCtor$jscomp$0.relatedTarget = inCapturePhase),
              (leaveEventType = SyntheticEventCtor$jscomp$0));
            inCapturePhase = leaveEventType;
            if (SyntheticEventCtor && reactEventType)
              b: {
                SyntheticEventCtor$jscomp$0 = SyntheticEventCtor;
                enterEventType = reactEventType;
                eventTypePrefix = 0;
                for (
                  toNode = SyntheticEventCtor$jscomp$0;
                  toNode;
                  toNode = getParent(toNode)
                )
                  eventTypePrefix++;
                toNode = 0;
                for (
                  leaveEventType = enterEventType;
                  leaveEventType;
                  leaveEventType = getParent(leaveEventType)
                )
                  toNode++;
                for (; 0 < eventTypePrefix - toNode; )
                  (SyntheticEventCtor$jscomp$0 = getParent(
                    SyntheticEventCtor$jscomp$0
                  )),
                    eventTypePrefix--;
                for (; 0 < toNode - eventTypePrefix; )
                  (enterEventType = getParent(enterEventType)), toNode--;
                for (; eventTypePrefix--; ) {
                  if (
                    SyntheticEventCtor$jscomp$0 === enterEventType ||
                    (null !== enterEventType &&
                      SyntheticEventCtor$jscomp$0 === enterEventType.alternate)
                  )
                    break b;
                  SyntheticEventCtor$jscomp$0 = getParent(
                    SyntheticEventCtor$jscomp$0
                  );
                  enterEventType = getParent(enterEventType);
                }
                SyntheticEventCtor$jscomp$0 = null;
              }
            else SyntheticEventCtor$jscomp$0 = null;
            null !== SyntheticEventCtor &&
              accumulateEnterLeaveListenersForEvent(
                dispatchQueue,
                reactName,
                SyntheticEventCtor,
                SyntheticEventCtor$jscomp$0,
                !1
              );
            null !== reactEventType &&
              null !== inCapturePhase &&
              accumulateEnterLeaveListenersForEvent(
                dispatchQueue,
                inCapturePhase,
                reactEventType,
                SyntheticEventCtor$jscomp$0,
                !0
              );
          }
        }
      }
      a: {
        reactName = targetInst ? getNodeFromInstance(targetInst) : window;
        SyntheticEventCtor =
          reactName.nodeName && reactName.nodeName.toLowerCase();
        if (
          "select" === SyntheticEventCtor ||
          ("input" === SyntheticEventCtor && "file" === reactName.type)
        )
          var getTargetInstFunc = getTargetInstForChangeEvent;
        else if (isTextInputElement(reactName))
          if (isInputEventSupported)
            getTargetInstFunc = getTargetInstForInputOrChangeEvent;
          else {
            getTargetInstFunc = getTargetInstForInputEventPolyfill;
            var handleEventFunc = handleEventsForInputEventPolyfill;
          }
        else
          (SyntheticEventCtor = reactName.nodeName) &&
            "input" === SyntheticEventCtor.toLowerCase() &&
            ("checkbox" === reactName.type || "radio" === reactName.type) &&
            (getTargetInstFunc = getTargetInstForClickEvent);
        if (
          getTargetInstFunc &&
          (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))
        ) {
          createAndAccumulateChangeEvent(
            dispatchQueue,
            getTargetInstFunc,
            nativeEvent,
            nativeEventTarget
          );
          break a;
        }
        handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
        "focusout" === domEventName &&
          (handleEventFunc = reactName._wrapperState) &&
          handleEventFunc.controlled &&
          "number" === reactName.type &&
          (disableInputAttributeSyncing ||
            setDefaultValue(reactName, "number", reactName.value));
      }
      handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
      switch (domEventName) {
        case "focusin":
          if (
            isTextInputElement(handleEventFunc) ||
            "true" === handleEventFunc.contentEditable
          )
            (activeElement$1 = handleEventFunc),
              (activeElementInst$1 = targetInst),
              (lastSelection = null);
          break;
        case "focusout":
          lastSelection = activeElementInst$1 = activeElement$1 = null;
          break;
        case "mousedown":
          mouseDown = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          mouseDown = !1;
          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
          break;
        case "selectionchange":
          if (skipSelectionChangeEvent) break;
        case "keydown":
        case "keyup":
          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
      }
      var fallbackData;
      if (canUseCompositionEvent)
        b: {
          switch (domEventName) {
            case "compositionstart":
              var eventType = "onCompositionStart";
              break b;
            case "compositionend":
              eventType = "onCompositionEnd";
              break b;
            case "compositionupdate":
              eventType = "onCompositionUpdate";
              break b;
          }
          eventType = void 0;
        }
      else
        isComposing
          ? isFallbackCompositionEnd(domEventName, nativeEvent) &&
            (eventType = "onCompositionEnd")
          : "keydown" === domEventName &&
            229 === nativeEvent.keyCode &&
            (eventType = "onCompositionStart");
      eventType &&
        (useFallbackCompositionData &&
          "ko" !== nativeEvent.locale &&
          (isComposing || "onCompositionStart" !== eventType
            ? "onCompositionEnd" === eventType &&
              isComposing &&
              (fallbackData = getData())
            : ((root = nativeEventTarget),
              (startText = "value" in root ? root.value : root.textContent),
              (isComposing = !0))),
        (handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType)),
        0 < handleEventFunc.length &&
          ((eventType = new SyntheticCompositionEvent(
            eventType,
            domEventName,
            null,
            nativeEvent,
            nativeEventTarget
          )),
          dispatchQueue.push({ event: eventType, listeners: handleEventFunc }),
          fallbackData
            ? (eventType.data = fallbackData)
            : ((fallbackData = getDataFromCustomEvent(nativeEvent)),
              null !== fallbackData && (eventType.data = fallbackData))));
      if (
        (fallbackData = canUseTextInputEvent
          ? getNativeBeforeInputChars(domEventName, nativeEvent)
          : getFallbackBeforeInputChars(domEventName, nativeEvent))
      )
        (targetInst = accumulateTwoPhaseListeners(targetInst, "onBeforeInput")),
          0 < targetInst.length &&
            ((nativeEventTarget = new SyntheticCompositionEvent(
              "onBeforeInput",
              "beforeinput",
              null,
              nativeEvent,
              nativeEventTarget
            )),
            dispatchQueue.push({
              event: nativeEventTarget,
              listeners: targetInst
            }),
            (nativeEventTarget.data = fallbackData));
    }
    processDispatchQueue(dispatchQueue, eventSystemFlags);
  });
}
function createDispatchListener(instance, listener, currentTarget) {
  return {
    instance: instance,
    listener: listener,
    currentTarget: currentTarget
  };
}
function accumulateSinglePhaseListeners(
  targetFiber,
  reactName,
  nativeEventType,
  inCapturePhase,
  accumulateTargetOnly,
  nativeEvent
) {
  reactName = inCapturePhase
    ? null !== reactName
      ? reactName + "Capture"
      : null
    : reactName;
  for (
    var listeners = [], instance = targetFiber, lastHostComponent = null;
    null !== instance;

  ) {
    var _instance = instance;
    targetFiber = _instance.stateNode;
    _instance = _instance.tag;
    5 === _instance && null !== targetFiber
      ? ((lastHostComponent = targetFiber),
        (targetFiber =
          lastHostComponent[internalEventHandlerListenersKey] || null),
        null !== targetFiber &&
          targetFiber.forEach(function(entry) {
            entry.type === nativeEventType &&
              entry.capture === inCapturePhase &&
              listeners.push(
                createDispatchListener(
                  instance,
                  entry.callback,
                  lastHostComponent
                )
              );
          }),
        null !== reactName &&
          ((targetFiber = getListener(instance, reactName)),
          null != targetFiber &&
            listeners.push(
              createDispatchListener(instance, targetFiber, lastHostComponent)
            )))
      : 21 === _instance &&
        null !== lastHostComponent &&
        null !== targetFiber &&
        ((targetFiber = targetFiber[internalEventHandlerListenersKey] || null),
        null !== targetFiber &&
          targetFiber.forEach(function(entry) {
            entry.type === nativeEventType &&
              entry.capture === inCapturePhase &&
              listeners.push(
                createDispatchListener(
                  instance,
                  entry.callback,
                  lastHostComponent
                )
              );
          }));
    if (accumulateTargetOnly) break;
    "beforeblur" === nativeEvent.type &&
      ((targetFiber = nativeEvent._detachedInterceptFiber),
      null === targetFiber ||
        (targetFiber !== instance && targetFiber !== instance.alternate) ||
        (listeners = []));
    instance = instance.return;
  }
  return listeners;
}
function accumulateTwoPhaseListeners(targetFiber, reactName) {
  for (
    var captureName = reactName + "Capture", listeners = [];
    null !== targetFiber;

  ) {
    var _instance2 = targetFiber,
      stateNode = _instance2.stateNode;
    5 === _instance2.tag &&
      null !== stateNode &&
      ((_instance2 = stateNode),
      (stateNode = getListener(targetFiber, captureName)),
      null != stateNode &&
        listeners.unshift(
          createDispatchListener(targetFiber, stateNode, _instance2)
        ),
      (stateNode = getListener(targetFiber, reactName)),
      null != stateNode &&
        listeners.push(
          createDispatchListener(targetFiber, stateNode, _instance2)
        ));
    targetFiber = targetFiber.return;
  }
  return listeners;
}
function getParent(inst) {
  if (null === inst) return null;
  do inst = inst.return;
  while (inst && 5 !== inst.tag);
  return inst ? inst : null;
}
function accumulateEnterLeaveListenersForEvent(
  dispatchQueue,
  event,
  target,
  common,
  inCapturePhase
) {
  for (
    var registrationName = event._reactName, listeners = [];
    null !== target && target !== common;

  ) {
    var _instance3 = target,
      alternate = _instance3.alternate,
      stateNode = _instance3.stateNode;
    if (null !== alternate && alternate === common) break;
    5 === _instance3.tag &&
      null !== stateNode &&
      ((_instance3 = stateNode),
      inCapturePhase
        ? ((alternate = getListener(target, registrationName)),
          null != alternate &&
            listeners.unshift(
              createDispatchListener(target, alternate, _instance3)
            ))
        : inCapturePhase ||
          ((alternate = getListener(target, registrationName)),
          null != alternate &&
            listeners.push(
              createDispatchListener(target, alternate, _instance3)
            )));
    target = target.return;
  }
  0 !== listeners.length &&
    dispatchQueue.push({ event: event, listeners: listeners });
}
function accumulateEventHandleNonManagedNodeListeners(
  reactEventType,
  currentTarget,
  inCapturePhase
) {
  var listeners = [],
    eventListeners = currentTarget[internalEventHandlerListenersKey] || null;
  null !== eventListeners &&
    eventListeners.forEach(function(entry) {
      entry.type === reactEventType &&
        entry.capture === inCapturePhase &&
        listeners.push(
          createDispatchListener(null, entry.callback, currentTarget)
        );
    });
  return listeners;
}
function noop() {}
var eventsEnabled = null,
  selectionInformation = null;
function shouldAutoFocusHostComponent(type, props) {
  switch (type) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!props.autoFocus;
  }
  return !1;
}
function shouldSetTextContent(type, props) {
  return (
    "textarea" === type ||
    "option" === type ||
    "noscript" === type ||
    "string" === typeof props.children ||
    "number" === typeof props.children ||
    ("object" === typeof props.dangerouslySetInnerHTML &&
      null !== props.dangerouslySetInnerHTML &&
      null != props.dangerouslySetInnerHTML.__html)
  );
}
var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0,
  cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0,
  scheduleMicrotask =
    "function" === typeof queueMicrotask
      ? queueMicrotask
      : "undefined" !== typeof Promise
      ? function(callback) {
          return Promise.resolve(null)
            .then(callback)
            .catch(handleErrorInNextTick);
        }
      : scheduleTimeout;
function handleErrorInNextTick(error) {
  setTimeout(function() {
    throw error;
  });
}
function createEvent(type, bubbles) {
  var event = document.createEvent("Event");
  event.initEvent(type, bubbles, !1);
  return event;
}
function dispatchBeforeDetachedBlur(target, internalInstanceHandle) {
  var event = createEvent("beforeblur", !0);
  event._detachedInterceptFiber = internalInstanceHandle;
  target.dispatchEvent(event);
}
function dispatchAfterDetachedBlur(target) {
  var event = createEvent("afterblur", !1);
  event.relatedTarget = target;
  document.dispatchEvent(event);
}
function clearSuspenseBoundary(parentInstance, suspenseInstance) {
  var node = suspenseInstance,
    depth = 0;
  do {
    var nextNode = node.nextSibling;
    parentInstance.removeChild(node);
    if (nextNode && 8 === nextNode.nodeType)
      if (((node = nextNode.data), "/$" === node)) {
        if (0 === depth) {
          parentInstance.removeChild(nextNode);
          retryIfBlockedOn(suspenseInstance);
          return;
        }
        depth--;
      } else ("$" !== node && "$?" !== node && "$!" !== node) || depth++;
    node = nextNode;
  } while (node);
  retryIfBlockedOn(suspenseInstance);
}
function clearContainer(container) {
  1 === container.nodeType
    ? (container.textContent = "")
    : 9 === container.nodeType &&
      ((container = container.body),
      null != container && (container.textContent = ""));
}
function getNextHydratable(node) {
  for (; null != node; node = node.nextSibling) {
    var nodeType = node.nodeType;
    if (1 === nodeType || 3 === nodeType) break;
    if (
      8 === nodeType &&
      ((nodeType = node.data),
      "$" === nodeType || "$!" === nodeType || "$?" === nodeType)
    )
      break;
  }
  return node;
}
function getParentSuspenseInstance(targetInstance) {
  targetInstance = targetInstance.previousSibling;
  for (var depth = 0; targetInstance; ) {
    if (8 === targetInstance.nodeType) {
      var data = targetInstance.data;
      if ("$" === data || "$!" === data || "$?" === data) {
        if (0 === depth) return targetInstance;
        depth--;
      } else "/$" === data && depth++;
    }
    targetInstance = targetInstance.previousSibling;
  }
  return null;
}
var clientId = 0;
function makeOpaqueHydratingObject(attemptToReadValue) {
  return {
    $$typeof: REACT_OPAQUE_ID_TYPE,
    toString: attemptToReadValue,
    valueOf: attemptToReadValue
  };
}
function getInstanceFromScope(scopeInstance) {
  scopeInstance = scopeInstance[internalInstanceKey] || null;
  return scopeInstance;
}
var randomKey = Math.random()
    .toString(36)
    .slice(2),
  internalInstanceKey = "__reactFiber$" + randomKey,
  internalPropsKey = "__reactProps$" + randomKey,
  internalContainerInstanceKey = "__reactContainer$" + randomKey,
  internalEventHandlersKey = "__reactEvents$" + randomKey,
  internalEventHandlerListenersKey = "__reactListeners$" + randomKey,
  internalEventHandlesSetKey = "__reactHandles$" + randomKey;
function getClosestInstanceFromNode(targetNode) {
  var targetInst = targetNode[internalInstanceKey];
  if (targetInst) return targetInst;
  for (var parentNode = targetNode.parentNode; parentNode; ) {
    if (
      (targetInst =
        parentNode[internalContainerInstanceKey] ||
        parentNode[internalInstanceKey])
    ) {
      parentNode = targetInst.alternate;
      if (
        null !== targetInst.child ||
        (null !== parentNode && null !== parentNode.child)
      )
        for (
          targetNode = getParentSuspenseInstance(targetNode);
          null !== targetNode;

        ) {
          if ((parentNode = targetNode[internalInstanceKey])) return parentNode;
          targetNode = getParentSuspenseInstance(targetNode);
        }
      return targetInst;
    }
    targetNode = parentNode;
    parentNode = targetNode.parentNode;
  }
  return null;
}
function getInstanceFromNode$1(node) {
  node = node[internalInstanceKey] || node[internalContainerInstanceKey];
  return !node ||
    (5 !== node.tag && 6 !== node.tag && 13 !== node.tag && 3 !== node.tag)
    ? null
    : node;
}
function getNodeFromInstance(inst) {
  if (5 === inst.tag || 6 === inst.tag) return inst.stateNode;
  throw Error(formatProdErrorMessage(33));
}
function getFiberCurrentPropsFromNode(node) {
  return node[internalPropsKey] || null;
}
function getEventListenerSet(node) {
  var elementListenerSet = node[internalEventHandlersKey];
  void 0 === elementListenerSet &&
    (elementListenerSet = node[internalEventHandlersKey] = new Set());
  return elementListenerSet;
}
function addEventHandleToTarget(target, eventHandle) {
  var eventHandles = target[internalEventHandlesSetKey];
  void 0 === eventHandles &&
    (eventHandles = target[internalEventHandlesSetKey] = new Set());
  eventHandles.add(eventHandle);
}
function doesTargetHaveEventHandle(target, eventHandle) {
  target = target[internalEventHandlesSetKey];
  return void 0 === target ? !1 : target.has(eventHandle);
}
var valueStack = [],
  index = -1;
function pop(cursor) {
  0 > index ||
    ((cursor.current = valueStack[index]), (valueStack[index] = null), index--);
}
function push(cursor, value) {
  index++;
  valueStack[index] = cursor.current;
  cursor.current = value;
}
var emptyContextObject = {},
  rendererID = null,
  injectedHook = null;
function onCommitRoot(root) {
  if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
    try {
      injectedHook.onCommitFiberRoot(
        rendererID,
        root,
        void 0,
        128 === (root.current.flags & 128)
      );
    } catch (err) {}
}
var ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig;
function resolveDefaultProps(Component, baseProps) {
  if (Component && Component.defaultProps) {
    baseProps = Object.assign({}, baseProps);
    Component = Component.defaultProps;
    for (var propName in Component)
      void 0 === baseProps[propName] &&
        (baseProps[propName] = Component[propName]);
    return baseProps;
  }
  return baseProps;
}
var valueCursor = { current: null },
  currentlyRenderingFiber = null,
  lastContextDependency = null,
  lastContextWithAllBitsObserved = null;
function resetContextDependencies() {
  lastContextWithAllBitsObserved = lastContextDependency = currentlyRenderingFiber = null;
}
function pushProvider(providerFiber, context, nextValue) {
  push(valueCursor, context._currentValue);
  context._currentValue = nextValue;
}
function popProvider(context) {
  var currentValue = valueCursor.current;
  pop(valueCursor);
  context._currentValue = currentValue;
}
function calculateChangedBits(context, newValue, oldValue) {
  return objectIs(oldValue, newValue)
    ? 0
    : ("function" === typeof context._calculateChangedBits
        ? context._calculateChangedBits(oldValue, newValue)
        : 1073741823) | 0;
}
function scheduleWorkOnParentPath(parent, renderLanes) {
  for (; null !== parent; ) {
    var alternate = parent.alternate;
    if ((parent.childLanes & renderLanes) === renderLanes)
      if (
        null === alternate ||
        (alternate.childLanes & renderLanes) === renderLanes
      )
        break;
      else alternate.childLanes |= renderLanes;
    else
      (parent.childLanes |= renderLanes),
        null !== alternate && (alternate.childLanes |= renderLanes);
    parent = parent.return;
  }
}
function propagateContextChange(
  workInProgress,
  context,
  changedBits,
  renderLanes
) {
  if (enableLazyContextPropagation)
    propagateContextChanges(
      workInProgress,
      [context, changedBits],
      renderLanes,
      !0
    );
  else if (!enableLazyContextPropagation) {
    var fiber = workInProgress.child;
    null !== fiber && (fiber.return = workInProgress);
    for (; null !== fiber; ) {
      var list = fiber.dependencies;
      if (null !== list) {
        var nextFiber = fiber.child;
        for (var dependency = list.firstContext; null !== dependency; ) {
          if (
            dependency.context === context &&
            0 !== (dependency.observedBits & changedBits)
          ) {
            if (1 === fiber.tag) {
              dependency = createUpdate(-1, renderLanes & -renderLanes);
              dependency.tag = 2;
              var updateQueue = fiber.updateQueue;
              if (null !== updateQueue) {
                updateQueue = updateQueue.shared;
                var pending = updateQueue.pending;
                null === pending
                  ? (dependency.next = dependency)
                  : ((dependency.next = pending.next),
                    (pending.next = dependency));
                updateQueue.pending = dependency;
              }
            }
            fiber.lanes |= renderLanes;
            dependency = fiber.alternate;
            null !== dependency && (dependency.lanes |= renderLanes);
            scheduleWorkOnParentPath(fiber.return, renderLanes);
            list.lanes |= renderLanes;
            break;
          }
          dependency = dependency.next;
        }
      } else if (10 === fiber.tag)
        nextFiber = fiber.type === workInProgress.type ? null : fiber.child;
      else if (18 === fiber.tag) {
        nextFiber = fiber.return;
        if (null === nextFiber) throw Error(formatProdErrorMessage(341));
        nextFiber.lanes |= renderLanes;
        list = nextFiber.alternate;
        null !== list && (list.lanes |= renderLanes);
        scheduleWorkOnParentPath(nextFiber, renderLanes);
        nextFiber = fiber.sibling;
      } else nextFiber = fiber.child;
      if (null !== nextFiber) nextFiber.return = fiber;
      else
        for (nextFiber = fiber; null !== nextFiber; ) {
          if (nextFiber === workInProgress) {
            nextFiber = null;
            break;
          }
          fiber = nextFiber.sibling;
          if (null !== fiber) {
            fiber.return = nextFiber.return;
            nextFiber = fiber;
            break;
          }
          nextFiber = nextFiber.return;
        }
      fiber = nextFiber;
    }
  }
}
function propagateContextChanges(
  workInProgress,
  contexts,
  renderLanes,
  forcePropagateEntireTree
) {
  if (enableLazyContextPropagation) {
    var fiber = workInProgress.child;
    null !== fiber && (fiber.return = workInProgress);
    for (; null !== fiber; ) {
      var list = fiber.dependencies;
      if (null !== list) {
        var nextFiber = fiber.child;
        list = list.firstContext;
        a: for (; null !== list; ) {
          var dependency = list;
          list = fiber;
          for (var i = 0; i < contexts.length; i += 2) {
            var changedBits = contexts[i + 1];
            if (
              dependency.context === contexts[i] &&
              0 !== (dependency.observedBits & changedBits)
            ) {
              list.lanes |= renderLanes;
              dependency = list.alternate;
              null !== dependency && (dependency.lanes |= renderLanes);
              scheduleWorkOnParentPath(list.return, renderLanes);
              forcePropagateEntireTree || (nextFiber = null);
              break a;
            }
          }
          list = dependency.next;
        }
      } else if (18 === fiber.tag) {
        nextFiber = fiber.return;
        if (null === nextFiber) throw Error(formatProdErrorMessage(341));
        nextFiber.lanes |= renderLanes;
        list = nextFiber.alternate;
        null !== list && (list.lanes |= renderLanes);
        scheduleWorkOnParentPath(nextFiber, renderLanes);
        nextFiber = null;
      } else nextFiber = fiber.child;
      if (null !== nextFiber) nextFiber.return = fiber;
      else
        for (nextFiber = fiber; null !== nextFiber; ) {
          if (nextFiber === workInProgress) {
            nextFiber = null;
            break;
          }
          fiber = nextFiber.sibling;
          if (null !== fiber) {
            fiber.return = nextFiber.return;
            nextFiber = fiber;
            break;
          }
          nextFiber = nextFiber.return;
        }
      fiber = nextFiber;
    }
  }
}
function propagateParentContextChanges(
  current,
  workInProgress,
  renderLanes,
  forcePropagateEntireTree
) {
  if (enableLazyContextPropagation) {
    current = null;
    for (
      var parent = workInProgress, isInsidePropagationBailout = !1;
      null !== parent;

    ) {
      if (!isInsidePropagationBailout)
        if (0 !== (parent.flags & 131072)) isInsidePropagationBailout = !0;
        else if (0 !== (parent.flags & 65536)) break;
      if (10 === parent.tag) {
        var currentParent = parent.alternate;
        if (null === currentParent) throw Error(formatProdErrorMessage(387));
        var oldProps = currentParent.memoizedProps;
        null !== oldProps &&
          ((currentParent = parent.type._context),
          (oldProps = calculateChangedBits(
            currentParent,
            parent.pendingProps.value,
            oldProps.value
          )),
          0 !== oldProps &&
            (null !== current
              ? current.push(currentParent, oldProps)
              : (current = [currentParent, oldProps])));
      }
      parent = parent.return;
    }
    null !== current &&
      propagateContextChanges(
        workInProgress,
        current,
        renderLanes,
        forcePropagateEntireTree
      );
    workInProgress.flags |= 65536;
  }
}
function checkIfContextChanged(currentDependencies) {
  if (!enableLazyContextPropagation) return !1;
  for (
    currentDependencies = currentDependencies.firstContext;
    null !== currentDependencies;

  ) {
    if (
      !objectIs(
        currentDependencies.context._currentValue,
        currentDependencies.memoizedValue
      )
    )
      return !0;
    currentDependencies = currentDependencies.next;
  }
  return !1;
}
function prepareToReadContext(workInProgress, renderLanes) {
  currentlyRenderingFiber = workInProgress;
  lastContextWithAllBitsObserved = lastContextDependency = null;
  workInProgress = workInProgress.dependencies;
  null !== workInProgress &&
    (enableLazyContextPropagation
      ? (workInProgress.firstContext = null)
      : null !== workInProgress.firstContext &&
        (0 !== (workInProgress.lanes & renderLanes) && (didReceiveUpdate = !0),
        (workInProgress.firstContext = null)));
}
function readContext(context, observedBits) {
  var value = context._currentValue;
  if (
    lastContextWithAllBitsObserved !== context &&
    !1 !== observedBits &&
    0 !== observedBits
  ) {
    if ("number" !== typeof observedBits || 1073741823 === observedBits)
      (lastContextWithAllBitsObserved = context), (observedBits = 1073741823);
    context = {
      context: context,
      observedBits: observedBits,
      memoizedValue: value,
      next: null
    };
    if (null === lastContextDependency) {
      if (null === currentlyRenderingFiber)
        throw Error(formatProdErrorMessage(308));
      lastContextDependency = context;
      currentlyRenderingFiber.dependencies = {
        lanes: 0,
        firstContext: context,
        responders: null
      };
      enableLazyContextPropagation && (currentlyRenderingFiber.flags |= 131072);
    } else lastContextDependency = lastContextDependency.next = context;
  }
  return value;
}
var interleavedQueues = null,
  hasForceUpdate = !1;
function initializeUpdateQueue(fiber) {
  fiber.updateQueue = {
    baseState: fiber.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  };
}
function cloneUpdateQueue(current, workInProgress) {
  current = current.updateQueue;
  workInProgress.updateQueue === current &&
    (workInProgress.updateQueue = {
      baseState: current.baseState,
      firstBaseUpdate: current.firstBaseUpdate,
      lastBaseUpdate: current.lastBaseUpdate,
      shared: current.shared,
      effects: current.effects
    });
}
function createUpdate(eventTime, lane) {
  return {
    eventTime: eventTime,
    lane: lane,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function enqueueUpdate(fiber, update) {
  var updateQueue = fiber.updateQueue;
  null !== updateQueue &&
    ((updateQueue = updateQueue.shared),
    null === workInProgressRoot ||
    0 === (fiber.mode & 1) ||
    (!deferRenderPhaseUpdateToNextBatch && 0 !== (executionContext & 8))
      ? ((fiber = updateQueue.pending),
        null === fiber
          ? (update.next = update)
          : ((update.next = fiber.next), (fiber.next = update)),
        (updateQueue.pending = update))
      : ((fiber = updateQueue.interleaved),
        null === fiber
          ? ((update.next = update),
            null === interleavedQueues
              ? (interleavedQueues = [updateQueue])
              : interleavedQueues.push(updateQueue))
          : ((update.next = fiber.next), (fiber.next = update)),
        (updateQueue.interleaved = update)));
}
function entangleTransitions(root, fiber, lane) {
  fiber = fiber.updateQueue;
  if (null !== fiber && ((fiber = fiber.shared), 0 !== (lane & 8388096))) {
    var queueLanes = fiber.lanes;
    queueLanes &= root.pendingLanes;
    lane |= queueLanes;
    fiber.lanes = lane;
    markRootEntangled(root, lane);
  }
}
function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
  var queue = workInProgress.updateQueue,
    current = workInProgress.alternate;
  if (
    null !== current &&
    ((current = current.updateQueue), queue === current)
  ) {
    var newFirst = null,
      newLast = null;
    queue = queue.firstBaseUpdate;
    if (null !== queue) {
      do {
        var clone = {
          eventTime: queue.eventTime,
          lane: queue.lane,
          tag: queue.tag,
          payload: queue.payload,
          callback: queue.callback,
          next: null
        };
        null === newLast
          ? (newFirst = newLast = clone)
          : (newLast = newLast.next = clone);
        queue = queue.next;
      } while (null !== queue);
      null === newLast
        ? (newFirst = newLast = capturedUpdate)
        : (newLast = newLast.next = capturedUpdate);
    } else newFirst = newLast = capturedUpdate;
    queue = {
      baseState: current.baseState,
      firstBaseUpdate: newFirst,
      lastBaseUpdate: newLast,
      shared: current.shared,
      effects: current.effects
    };
    workInProgress.updateQueue = queue;
    return;
  }
  workInProgress = queue.lastBaseUpdate;
  null === workInProgress
    ? (queue.firstBaseUpdate = capturedUpdate)
    : (workInProgress.next = capturedUpdate);
  queue.lastBaseUpdate = capturedUpdate;
}
function processUpdateQueue(
  workInProgress$jscomp$0,
  props,
  instance,
  renderLanes
) {
  var queue = workInProgress$jscomp$0.updateQueue;
  hasForceUpdate = !1;
  var firstBaseUpdate = queue.firstBaseUpdate,
    lastBaseUpdate = queue.lastBaseUpdate,
    pendingQueue = queue.shared.pending;
  if (null !== pendingQueue) {
    queue.shared.pending = null;
    var lastPendingUpdate = pendingQueue,
      firstPendingUpdate = lastPendingUpdate.next;
    lastPendingUpdate.next = null;
    null === lastBaseUpdate
      ? (firstBaseUpdate = firstPendingUpdate)
      : (lastBaseUpdate.next = firstPendingUpdate);
    lastBaseUpdate = lastPendingUpdate;
    var current = workInProgress$jscomp$0.alternate;
    null !== current &&
      ((current = current.updateQueue),
      (pendingQueue = current.lastBaseUpdate),
      pendingQueue !== lastBaseUpdate &&
        (null === pendingQueue
          ? (current.firstBaseUpdate = firstPendingUpdate)
          : (pendingQueue.next = firstPendingUpdate),
        (current.lastBaseUpdate = lastPendingUpdate)));
  }
  if (null !== firstBaseUpdate) {
    var newState = queue.baseState;
    lastBaseUpdate = 0;
    current = firstPendingUpdate = lastPendingUpdate = null;
    pendingQueue = firstBaseUpdate;
    do {
      var updateLane = pendingQueue.lane,
        updateEventTime = pendingQueue.eventTime;
      if ((renderLanes & updateLane) === updateLane) {
        null !== current &&
          (current = current.next = {
            eventTime: updateEventTime,
            lane: 0,
            tag: pendingQueue.tag,
            payload: pendingQueue.payload,
            callback: pendingQueue.callback,
            next: null
          });
        a: {
          var workInProgress = workInProgress$jscomp$0,
            update = pendingQueue;
          updateLane = props;
          updateEventTime = instance;
          switch (update.tag) {
            case 1:
              workInProgress = update.payload;
              if ("function" === typeof workInProgress) {
                newState = workInProgress.call(
                  updateEventTime,
                  newState,
                  updateLane
                );
                break a;
              }
              newState = workInProgress;
              break a;
            case 3:
              workInProgress.flags = (workInProgress.flags & -16385) | 128;
            case 0:
              workInProgress = update.payload;
              updateLane =
                "function" === typeof workInProgress
                  ? workInProgress.call(updateEventTime, newState, updateLane)
                  : workInProgress;
              if (null === updateLane || void 0 === updateLane) break a;
              newState = Object.assign({}, newState, updateLane);
              break a;
            case 2:
              hasForceUpdate = !0;
          }
        }
        null !== pendingQueue.callback &&
          ((workInProgress$jscomp$0.flags |= 64),
          (updateLane = queue.effects),
          null === updateLane
            ? (queue.effects = [pendingQueue])
            : updateLane.push(pendingQueue));
      } else
        (updateEventTime = {
          eventTime: updateEventTime,
          lane: updateLane,
          tag: pendingQueue.tag,
          payload: pendingQueue.payload,
          callback: pendingQueue.callback,
          next: null
        }),
          null === current
            ? ((firstPendingUpdate = current = updateEventTime),
              (lastPendingUpdate = newState))
            : (current = current.next = updateEventTime),
          (lastBaseUpdate |= updateLane);
      pendingQueue = pendingQueue.next;
      if (null === pendingQueue)
        if (((pendingQueue = queue.shared.pending), null === pendingQueue))
          break;
        else
          (updateLane = pendingQueue),
            (pendingQueue = updateLane.next),
            (updateLane.next = null),
            (queue.lastBaseUpdate = updateLane),
            (queue.shared.pending = null);
    } while (1);
    null === current && (lastPendingUpdate = newState);
    queue.baseState = lastPendingUpdate;
    queue.firstBaseUpdate = firstPendingUpdate;
    queue.lastBaseUpdate = current;
    props = queue.shared.interleaved;
    if (null !== props) {
      queue = props;
      do (lastBaseUpdate |= queue.lane), (queue = queue.next);
      while (queue !== props);
    } else null === firstBaseUpdate && (queue.shared.lanes = 0);
    workInProgressRootSkippedLanes |= lastBaseUpdate;
    workInProgress$jscomp$0.lanes = lastBaseUpdate;
    workInProgress$jscomp$0.memoizedState = newState;
  }
}
function commitUpdateQueue(finishedWork, finishedQueue, instance) {
  finishedWork = finishedQueue.effects;
  finishedQueue.effects = null;
  if (null !== finishedWork)
    for (
      finishedQueue = 0;
      finishedQueue < finishedWork.length;
      finishedQueue++
    ) {
      var effect = finishedWork[finishedQueue],
        callback = effect.callback;
      if (null !== callback) {
        effect.callback = null;
        effect = instance;
        if ("function" !== typeof callback)
          throw Error(formatProdErrorMessage(191, callback));
        callback.call(effect);
      }
    }
}
var emptyRefsObject = new React.Component().refs;
function applyDerivedStateFromProps(
  workInProgress,
  ctor,
  getDerivedStateFromProps,
  nextProps
) {
  ctor = workInProgress.memoizedState;
  getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
  getDerivedStateFromProps =
    null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps
      ? ctor
      : Object.assign({}, ctor, getDerivedStateFromProps);
  workInProgress.memoizedState = getDerivedStateFromProps;
  0 === workInProgress.lanes &&
    (workInProgress.updateQueue.baseState = getDerivedStateFromProps);
}
var classComponentUpdater = {
  isMounted: function(component) {
    return (component = component._reactInternals)
      ? getNearestMountedFiber(component) === component
      : !1;
  },
  enqueueSetState: function(inst, payload, callback) {
    inst = inst._reactInternals;
    var eventTime = requestEventTime(),
      lane = requestUpdateLane(inst),
      update = createUpdate(eventTime, lane);
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    enqueueUpdate(inst, update);
    payload = scheduleUpdateOnFiber(inst, lane, eventTime);
    null !== payload && entangleTransitions(payload, inst, lane);
  },
  enqueueReplaceState: function(inst, payload, callback) {
    inst = inst._reactInternals;
    var eventTime = requestEventTime(),
      lane = requestUpdateLane(inst),
      update = createUpdate(eventTime, lane);
    update.tag = 1;
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    enqueueUpdate(inst, update);
    payload = scheduleUpdateOnFiber(inst, lane, eventTime);
    null !== payload && entangleTransitions(payload, inst, lane);
  },
  enqueueForceUpdate: function(inst, callback) {
    inst = inst._reactInternals;
    var eventTime = requestEventTime(),
      lane = requestUpdateLane(inst),
      update = createUpdate(eventTime, lane);
    update.tag = 2;
    void 0 !== callback && null !== callback && (update.callback = callback);
    enqueueUpdate(inst, update);
    callback = scheduleUpdateOnFiber(inst, lane, eventTime);
    null !== callback && entangleTransitions(callback, inst, lane);
  }
};
function checkShouldComponentUpdate(
  workInProgress,
  ctor,
  oldProps,
  newProps,
  oldState,
  newState,
  nextContext
) {
  workInProgress = workInProgress.stateNode;
  return "function" === typeof workInProgress.shouldComponentUpdate
    ? workInProgress.shouldComponentUpdate(newProps, newState, nextContext)
    : ctor.prototype && ctor.prototype.isPureReactComponent
    ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
    : !0;
}
function constructClassInstance(workInProgress, ctor, props) {
  var context = emptyContextObject,
    contextType = ctor.contextType;
  "object" === typeof contextType &&
    null !== contextType &&
    (context = readContext(contextType));
  ctor = new ctor(props, context);
  workInProgress.memoizedState =
    null !== ctor.state && void 0 !== ctor.state ? ctor.state : null;
  ctor.updater = classComponentUpdater;
  workInProgress.stateNode = ctor;
  ctor._reactInternals = workInProgress;
  return ctor;
}
function callComponentWillReceiveProps(
  workInProgress,
  instance,
  newProps,
  nextContext
) {
  workInProgress = instance.state;
  "function" === typeof instance.componentWillReceiveProps &&
    instance.componentWillReceiveProps(newProps, nextContext);
  "function" === typeof instance.UNSAFE_componentWillReceiveProps &&
    instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
  instance.state !== workInProgress &&
    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
}
function mountClassInstance(workInProgress, ctor, newProps, renderLanes) {
  var instance = workInProgress.stateNode;
  instance.props = newProps;
  instance.state = workInProgress.memoizedState;
  instance.refs = emptyRefsObject;
  initializeUpdateQueue(workInProgress);
  var contextType = ctor.contextType;
  instance.context =
    "object" === typeof contextType && null !== contextType
      ? readContext(contextType)
      : emptyContextObject;
  processUpdateQueue(workInProgress, newProps, instance, renderLanes);
  instance.state = workInProgress.memoizedState;
  contextType = ctor.getDerivedStateFromProps;
  "function" === typeof contextType &&
    (applyDerivedStateFromProps(workInProgress, ctor, contextType, newProps),
    (instance.state = workInProgress.memoizedState));
  "function" === typeof ctor.getDerivedStateFromProps ||
    "function" === typeof instance.getSnapshotBeforeUpdate ||
    ("function" !== typeof instance.UNSAFE_componentWillMount &&
      "function" !== typeof instance.componentWillMount) ||
    ((ctor = instance.state),
    "function" === typeof instance.componentWillMount &&
      instance.componentWillMount(),
    "function" === typeof instance.UNSAFE_componentWillMount &&
      instance.UNSAFE_componentWillMount(),
    ctor !== instance.state &&
      classComponentUpdater.enqueueReplaceState(instance, instance.state, null),
    processUpdateQueue(workInProgress, newProps, instance, renderLanes),
    (instance.state = workInProgress.memoizedState));
  "function" === typeof instance.componentDidMount &&
    (workInProgress.flags |= 4);
}
var isArray = Array.isArray;
function coerceRef(returnFiber, current, element) {
  returnFiber = element.ref;
  if (
    null !== returnFiber &&
    "function" !== typeof returnFiber &&
    "object" !== typeof returnFiber
  ) {
    if (element._owner) {
      element = element._owner;
      if (element) {
        if (1 !== element.tag) throw Error(formatProdErrorMessage(309));
        var inst = element.stateNode;
      }
      if (!inst) throw Error(formatProdErrorMessage(147, returnFiber));
      var stringRef = "" + returnFiber;
      if (
        null !== current &&
        null !== current.ref &&
        "function" === typeof current.ref &&
        current.ref._stringRef === stringRef
      )
        return current.ref;
      current = function(value) {
        var refs = inst.refs;
        refs === emptyRefsObject && (refs = inst.refs = {});
        null === value ? delete refs[stringRef] : (refs[stringRef] = value);
      };
      current._stringRef = stringRef;
      return current;
    }
    if ("string" !== typeof returnFiber)
      throw Error(formatProdErrorMessage(284));
    if (!element._owner) throw Error(formatProdErrorMessage(290, returnFiber));
  }
  return returnFiber;
}
function throwOnInvalidObjectType(returnFiber, newChild) {
  if ("textarea" !== returnFiber.type)
    throw ((returnFiber = Object.prototype.toString.call(newChild)),
    Error(
      formatProdErrorMessage(
        31,
        "[object Object]" === returnFiber
          ? "object with keys {" + Object.keys(newChild).join(", ") + "}"
          : returnFiber
      )
    ));
}
function resolveLazy(lazyType) {
  var init = lazyType._init;
  return init(lazyType._payload);
}
function ChildReconciler(shouldTrackSideEffects) {
  function deleteChild(returnFiber, childToDelete) {
    if (shouldTrackSideEffects) {
      var deletions = returnFiber.deletions;
      null === deletions
        ? ((returnFiber.deletions = [childToDelete]), (returnFiber.flags |= 16))
        : deletions.push(childToDelete);
    }
  }
  function deleteRemainingChildren(returnFiber, currentFirstChild) {
    if (!shouldTrackSideEffects) return null;
    for (; null !== currentFirstChild; )
      deleteChild(returnFiber, currentFirstChild),
        (currentFirstChild = currentFirstChild.sibling);
    return null;
  }
  function mapRemainingChildren(returnFiber, currentFirstChild) {
    for (returnFiber = new Map(); null !== currentFirstChild; )
      null !== currentFirstChild.key
        ? returnFiber.set(currentFirstChild.key, currentFirstChild)
        : returnFiber.set(currentFirstChild.index, currentFirstChild),
        (currentFirstChild = currentFirstChild.sibling);
    return returnFiber;
  }
  function useFiber(fiber, pendingProps) {
    fiber = createWorkInProgress(fiber, pendingProps);
    fiber.index = 0;
    fiber.sibling = null;
    return fiber;
  }
  function placeChild(newFiber, lastPlacedIndex, newIndex) {
    newFiber.index = newIndex;
    if (!shouldTrackSideEffects) return lastPlacedIndex;
    newIndex = newFiber.alternate;
    if (null !== newIndex)
      return (
        (newIndex = newIndex.index),
        newIndex < lastPlacedIndex
          ? ((newFiber.flags |= 2), lastPlacedIndex)
          : newIndex
      );
    newFiber.flags |= 2;
    return lastPlacedIndex;
  }
  function placeSingleChild(newFiber) {
    shouldTrackSideEffects &&
      null === newFiber.alternate &&
      (newFiber.flags |= 2);
    return newFiber;
  }
  function updateTextNode(returnFiber, current, textContent, lanes) {
    if (null === current || 6 !== current.tag)
      return (
        (current = createFiberFromText(textContent, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, textContent);
    current.return = returnFiber;
    return current;
  }
  function updateElement(returnFiber, current, element, lanes) {
    var elementType = element.type;
    if (elementType === REACT_FRAGMENT_TYPE)
      return updateFragment(
        returnFiber,
        current,
        element.props.children,
        lanes,
        element.key
      );
    if (
      null !== current &&
      (current.elementType === elementType ||
        ("object" === typeof elementType &&
          null !== elementType &&
          elementType.$$typeof === REACT_LAZY_TYPE &&
          resolveLazy(elementType) === current.type))
    )
      return (
        (lanes = useFiber(current, element.props)),
        (lanes.ref = coerceRef(returnFiber, current, element)),
        (lanes.return = returnFiber),
        lanes
      );
    lanes = createFiberFromTypeAndProps(
      element.type,
      element.key,
      element.props,
      null,
      returnFiber.mode,
      lanes
    );
    lanes.ref = coerceRef(returnFiber, current, element);
    lanes.return = returnFiber;
    return lanes;
  }
  function updatePortal(returnFiber, current, portal, lanes) {
    if (
      null === current ||
      4 !== current.tag ||
      current.stateNode.containerInfo !== portal.containerInfo ||
      current.stateNode.implementation !== portal.implementation
    )
      return (
        (current = createFiberFromPortal(portal, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, portal.children || []);
    current.return = returnFiber;
    return current;
  }
  function updateFragment(returnFiber, current, fragment, lanes, key) {
    if (null === current || 7 !== current.tag)
      return (
        (current = createFiberFromFragment(
          fragment,
          returnFiber.mode,
          lanes,
          key
        )),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, fragment);
    current.return = returnFiber;
    return current;
  }
  function createChild(returnFiber, newChild, lanes) {
    if ("string" === typeof newChild || "number" === typeof newChild)
      return (
        (newChild = createFiberFromText(
          "" + newChild,
          returnFiber.mode,
          lanes
        )),
        (newChild.return = returnFiber),
        newChild
      );
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return (
            (lanes = createFiberFromTypeAndProps(
              newChild.type,
              newChild.key,
              newChild.props,
              null,
              returnFiber.mode,
              lanes
            )),
            (lanes.ref = coerceRef(returnFiber, null, newChild)),
            (lanes.return = returnFiber),
            lanes
          );
        case REACT_PORTAL_TYPE:
          return (
            (newChild = createFiberFromPortal(
              newChild,
              returnFiber.mode,
              lanes
            )),
            (newChild.return = returnFiber),
            newChild
          );
        case REACT_LAZY_TYPE:
          var init = newChild._init;
          return createChild(returnFiber, init(newChild._payload), lanes);
      }
      if (isArray(newChild) || getIteratorFn(newChild))
        return (
          (newChild = createFiberFromFragment(
            newChild,
            returnFiber.mode,
            lanes,
            null
          )),
          (newChild.return = returnFiber),
          newChild
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
    var key = null !== oldFiber ? oldFiber.key : null;
    if ("string" === typeof newChild || "number" === typeof newChild)
      return null !== key
        ? null
        : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return newChild.key === key
            ? updateElement(returnFiber, oldFiber, newChild, lanes)
            : null;
        case REACT_PORTAL_TYPE:
          return newChild.key === key
            ? updatePortal(returnFiber, oldFiber, newChild, lanes)
            : null;
        case REACT_LAZY_TYPE:
          return (
            (key = newChild._init),
            updateSlot(returnFiber, oldFiber, key(newChild._payload), lanes)
          );
      }
      if (isArray(newChild) || getIteratorFn(newChild))
        return null !== key
          ? null
          : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function updateFromMap(
    existingChildren,
    returnFiber,
    newIdx,
    newChild,
    lanes
  ) {
    if ("string" === typeof newChild || "number" === typeof newChild)
      return (
        (existingChildren = existingChildren.get(newIdx) || null),
        updateTextNode(returnFiber, existingChildren, "" + newChild, lanes)
      );
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return (
            (existingChildren =
              existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null),
            updateElement(returnFiber, existingChildren, newChild, lanes)
          );
        case REACT_PORTAL_TYPE:
          return (
            (existingChildren =
              existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null),
            updatePortal(returnFiber, existingChildren, newChild, lanes)
          );
        case REACT_LAZY_TYPE:
          var init = newChild._init;
          return updateFromMap(
            existingChildren,
            returnFiber,
            newIdx,
            init(newChild._payload),
            lanes
          );
      }
      if (isArray(newChild) || getIteratorFn(newChild))
        return (
          (existingChildren = existingChildren.get(newIdx) || null),
          updateFragment(returnFiber, existingChildren, newChild, lanes, null)
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function reconcileChildrenArray(
    returnFiber,
    currentFirstChild,
    newChildren,
    lanes
  ) {
    for (
      var resultingFirstChild = null,
        previousNewFiber = null,
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null;
      null !== oldFiber && newIdx < newChildren.length;
      newIdx++
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      var newFiber = updateSlot(
        returnFiber,
        oldFiber,
        newChildren[newIdx],
        lanes
      );
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        null === newFiber.alternate &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber
        ? (resultingFirstChild = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (newIdx === newChildren.length)
      return (
        deleteRemainingChildren(returnFiber, oldFiber), resultingFirstChild
      );
    if (null === oldFiber) {
      for (; newIdx < newChildren.length; newIdx++)
        (oldFiber = createChild(returnFiber, newChildren[newIdx], lanes)),
          null !== oldFiber &&
            ((currentFirstChild = placeChild(
              oldFiber,
              currentFirstChild,
              newIdx
            )),
            null === previousNewFiber
              ? (resultingFirstChild = oldFiber)
              : (previousNewFiber.sibling = oldFiber),
            (previousNewFiber = oldFiber));
      return resultingFirstChild;
    }
    for (
      oldFiber = mapRemainingChildren(returnFiber, oldFiber);
      newIdx < newChildren.length;
      newIdx++
    )
      (nextOldFiber = updateFromMap(
        oldFiber,
        returnFiber,
        newIdx,
        newChildren[newIdx],
        lanes
      )),
        null !== nextOldFiber &&
          (shouldTrackSideEffects &&
            null !== nextOldFiber.alternate &&
            oldFiber.delete(
              null === nextOldFiber.key ? newIdx : nextOldFiber.key
            ),
          (currentFirstChild = placeChild(
            nextOldFiber,
            currentFirstChild,
            newIdx
          )),
          null === previousNewFiber
            ? (resultingFirstChild = nextOldFiber)
            : (previousNewFiber.sibling = nextOldFiber),
          (previousNewFiber = nextOldFiber));
    shouldTrackSideEffects &&
      oldFiber.forEach(function(child) {
        return deleteChild(returnFiber, child);
      });
    return resultingFirstChild;
  }
  function reconcileChildrenIterator(
    returnFiber,
    currentFirstChild,
    newChildrenIterable,
    lanes
  ) {
    var iteratorFn = getIteratorFn(newChildrenIterable);
    if ("function" !== typeof iteratorFn)
      throw Error(formatProdErrorMessage(150));
    newChildrenIterable = iteratorFn.call(newChildrenIterable);
    if (null == newChildrenIterable) throw Error(formatProdErrorMessage(151));
    for (
      var previousNewFiber = (iteratorFn = null),
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null,
        step = newChildrenIterable.next();
      null !== oldFiber && !step.done;
      newIdx++, step = newChildrenIterable.next()
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        null === newFiber.alternate &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber
        ? (iteratorFn = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (step.done)
      return deleteRemainingChildren(returnFiber, oldFiber), iteratorFn;
    if (null === oldFiber) {
      for (; !step.done; newIdx++, step = newChildrenIterable.next())
        (step = createChild(returnFiber, step.value, lanes)),
          null !== step &&
            ((currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
            null === previousNewFiber
              ? (iteratorFn = step)
              : (previousNewFiber.sibling = step),
            (previousNewFiber = step));
      return iteratorFn;
    }
    for (
      oldFiber = mapRemainingChildren(returnFiber, oldFiber);
      !step.done;
      newIdx++, step = newChildrenIterable.next()
    )
      (step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes)),
        null !== step &&
          (shouldTrackSideEffects &&
            null !== step.alternate &&
            oldFiber.delete(null === step.key ? newIdx : step.key),
          (currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
          null === previousNewFiber
            ? (iteratorFn = step)
            : (previousNewFiber.sibling = step),
          (previousNewFiber = step));
    shouldTrackSideEffects &&
      oldFiber.forEach(function(child) {
        return deleteChild(returnFiber, child);
      });
    return iteratorFn;
  }
  function reconcileChildFibers(
    returnFiber,
    currentFirstChild,
    newChild,
    lanes
  ) {
    var isUnkeyedTopLevelFragment =
      "object" === typeof newChild &&
      null !== newChild &&
      newChild.type === REACT_FRAGMENT_TYPE &&
      null === newChild.key;
    isUnkeyedTopLevelFragment && (newChild = newChild.props.children);
    var isObject = "object" === typeof newChild && null !== newChild;
    if (isObject)
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          a: {
            isObject = newChild.key;
            for (
              isUnkeyedTopLevelFragment = currentFirstChild;
              null !== isUnkeyedTopLevelFragment;

            ) {
              if (isUnkeyedTopLevelFragment.key === isObject) {
                isObject = newChild.type;
                if (isObject === REACT_FRAGMENT_TYPE) {
                  if (7 === isUnkeyedTopLevelFragment.tag) {
                    deleteRemainingChildren(
                      returnFiber,
                      isUnkeyedTopLevelFragment.sibling
                    );
                    currentFirstChild = useFiber(
                      isUnkeyedTopLevelFragment,
                      newChild.props.children
                    );
                    currentFirstChild.return = returnFiber;
                    returnFiber = currentFirstChild;
                    break a;
                  }
                } else if (
                  isUnkeyedTopLevelFragment.elementType === isObject ||
                  ("object" === typeof isObject &&
                    null !== isObject &&
                    isObject.$$typeof === REACT_LAZY_TYPE &&
                    resolveLazy(isObject) === isUnkeyedTopLevelFragment.type)
                ) {
                  deleteRemainingChildren(
                    returnFiber,
                    isUnkeyedTopLevelFragment.sibling
                  );
                  currentFirstChild = useFiber(
                    isUnkeyedTopLevelFragment,
                    newChild.props
                  );
                  currentFirstChild.ref = coerceRef(
                    returnFiber,
                    isUnkeyedTopLevelFragment,
                    newChild
                  );
                  currentFirstChild.return = returnFiber;
                  returnFiber = currentFirstChild;
                  break a;
                }
                deleteRemainingChildren(returnFiber, isUnkeyedTopLevelFragment);
                break;
              } else deleteChild(returnFiber, isUnkeyedTopLevelFragment);
              isUnkeyedTopLevelFragment = isUnkeyedTopLevelFragment.sibling;
            }
            newChild.type === REACT_FRAGMENT_TYPE
              ? ((currentFirstChild = createFiberFromFragment(
                  newChild.props.children,
                  returnFiber.mode,
                  lanes,
                  newChild.key
                )),
                (currentFirstChild.return = returnFiber),
                (returnFiber = currentFirstChild))
              : ((lanes = createFiberFromTypeAndProps(
                  newChild.type,
                  newChild.key,
                  newChild.props,
                  null,
                  returnFiber.mode,
                  lanes
                )),
                (lanes.ref = coerceRef(
                  returnFiber,
                  currentFirstChild,
                  newChild
                )),
                (lanes.return = returnFiber),
                (returnFiber = lanes));
          }
          return placeSingleChild(returnFiber);
        case REACT_PORTAL_TYPE:
          a: {
            for (
              isUnkeyedTopLevelFragment = newChild.key;
              null !== currentFirstChild;

            ) {
              if (currentFirstChild.key === isUnkeyedTopLevelFragment)
                if (
                  4 === currentFirstChild.tag &&
                  currentFirstChild.stateNode.containerInfo ===
                    newChild.containerInfo &&
                  currentFirstChild.stateNode.implementation ===
                    newChild.implementation
                ) {
                  deleteRemainingChildren(
                    returnFiber,
                    currentFirstChild.sibling
                  );
                  currentFirstChild = useFiber(
                    currentFirstChild,
                    newChild.children || []
                  );
                  currentFirstChild.return = returnFiber;
                  returnFiber = currentFirstChild;
                  break a;
                } else {
                  deleteRemainingChildren(returnFiber, currentFirstChild);
                  break;
                }
              else deleteChild(returnFiber, currentFirstChild);
              currentFirstChild = currentFirstChild.sibling;
            }
            currentFirstChild = createFiberFromPortal(
              newChild,
              returnFiber.mode,
              lanes
            );
            currentFirstChild.return = returnFiber;
            returnFiber = currentFirstChild;
          }
          return placeSingleChild(returnFiber);
        case REACT_LAZY_TYPE:
          return (
            (isUnkeyedTopLevelFragment = newChild._init),
            reconcileChildFibers(
              returnFiber,
              currentFirstChild,
              isUnkeyedTopLevelFragment(newChild._payload),
              lanes
            )
          );
      }
    if ("string" === typeof newChild || "number" === typeof newChild)
      return (
        (newChild = "" + newChild),
        null !== currentFirstChild && 6 === currentFirstChild.tag
          ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling),
            (currentFirstChild = useFiber(currentFirstChild, newChild)),
            (currentFirstChild.return = returnFiber),
            (returnFiber = currentFirstChild))
          : (deleteRemainingChildren(returnFiber, currentFirstChild),
            (currentFirstChild = createFiberFromText(
              newChild,
              returnFiber.mode,
              lanes
            )),
            (currentFirstChild.return = returnFiber),
            (returnFiber = currentFirstChild)),
        placeSingleChild(returnFiber)
      );
    if (isArray(newChild))
      return reconcileChildrenArray(
        returnFiber,
        currentFirstChild,
        newChild,
        lanes
      );
    if (getIteratorFn(newChild))
      return reconcileChildrenIterator(
        returnFiber,
        currentFirstChild,
        newChild,
        lanes
      );
    isObject && throwOnInvalidObjectType(returnFiber, newChild);
    if ("undefined" === typeof newChild && !isUnkeyedTopLevelFragment)
      switch (returnFiber.tag) {
        case 1:
        case 0:
        case 11:
        case 15:
          throw Error(
            formatProdErrorMessage(
              152,
              getComponentNameFromFiber(returnFiber) || "Component"
            )
          );
      }
    return deleteRemainingChildren(returnFiber, currentFirstChild);
  }
  return reconcileChildFibers;
}
var reconcileChildFibers = ChildReconciler(!0),
  mountChildFibers = ChildReconciler(!1),
  NO_CONTEXT = {},
  contextStackCursor = { current: NO_CONTEXT },
  contextFiberStackCursor = { current: NO_CONTEXT },
  rootInstanceStackCursor = { current: NO_CONTEXT };
function requiredContext(c) {
  if (c === NO_CONTEXT) throw Error(formatProdErrorMessage(174));
  return c;
}
function pushHostContainer(fiber, nextRootInstance) {
  push(rootInstanceStackCursor, nextRootInstance);
  push(contextFiberStackCursor, fiber);
  push(contextStackCursor, NO_CONTEXT);
  fiber = nextRootInstance.nodeType;
  switch (fiber) {
    case 9:
    case 11:
      nextRootInstance = (nextRootInstance = nextRootInstance.documentElement)
        ? nextRootInstance.namespaceURI
        : getChildNamespace(null, "");
      break;
    default:
      (fiber = 8 === fiber ? nextRootInstance.parentNode : nextRootInstance),
        (nextRootInstance = fiber.namespaceURI || null),
        (fiber = fiber.tagName),
        (nextRootInstance = getChildNamespace(nextRootInstance, fiber));
  }
  pop(contextStackCursor);
  push(contextStackCursor, nextRootInstance);
}
function popHostContainer() {
  pop(contextStackCursor);
  pop(contextFiberStackCursor);
  pop(rootInstanceStackCursor);
}
function pushHostContext(fiber) {
  requiredContext(rootInstanceStackCursor.current);
  var context = requiredContext(contextStackCursor.current);
  var JSCompiler_inline_result = getChildNamespace(context, fiber.type);
  context !== JSCompiler_inline_result &&
    (push(contextFiberStackCursor, fiber),
    push(contextStackCursor, JSCompiler_inline_result));
}
function popHostContext(fiber) {
  contextFiberStackCursor.current === fiber &&
    (pop(contextStackCursor), pop(contextFiberStackCursor));
}
var suspenseStackCursor = { current: 0 };
function findFirstSuspended(row) {
  for (var node = row; null !== node; ) {
    if (13 === node.tag) {
      var state = node.memoizedState;
      if (
        null !== state &&
        ((state = state.dehydrated),
        null === state || "$?" === state.data || "$!" === state.data)
      )
        return node;
    } else if (19 === node.tag && void 0 !== node.memoizedProps.revealOrder) {
      if (0 !== (node.flags & 128)) return node;
    } else if (null !== node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === row) break;
    for (; null === node.sibling; ) {
      if (null === node.return || node.return === row) return null;
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
  return null;
}
var hydrationParentFiber = null,
  nextHydratableInstance = null,
  isHydrating = !1;
function deleteHydratableInstance(returnFiber, instance) {
  var fiber = createFiber(5, null, null, 0);
  fiber.elementType = "DELETED";
  fiber.stateNode = instance;
  fiber.return = returnFiber;
  instance = returnFiber.deletions;
  null === instance
    ? ((returnFiber.deletions = [fiber]), (returnFiber.flags |= 16))
    : instance.push(fiber);
}
function tryHydrate(fiber, nextInstance) {
  switch (fiber.tag) {
    case 5:
      var type = fiber.type;
      nextInstance =
        1 !== nextInstance.nodeType ||
        type.toLowerCase() !== nextInstance.nodeName.toLowerCase()
          ? null
          : nextInstance;
      return null !== nextInstance
        ? ((fiber.stateNode = nextInstance), !0)
        : !1;
    case 6:
      return (
        (nextInstance =
          "" === fiber.pendingProps || 3 !== nextInstance.nodeType
            ? null
            : nextInstance),
        null !== nextInstance ? ((fiber.stateNode = nextInstance), !0) : !1
      );
    case 13:
      return (
        (nextInstance = 8 !== nextInstance.nodeType ? null : nextInstance),
        null !== nextInstance
          ? ((fiber.memoizedState = {
              dehydrated: nextInstance,
              retryLane: 1073741824
            }),
            (type = createFiber(18, null, null, 0)),
            (type.stateNode = nextInstance),
            (type.return = fiber),
            (fiber.child = type),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function tryToClaimNextHydratableInstance(fiber) {
  if (isHydrating) {
    var nextInstance = nextHydratableInstance;
    if (nextInstance) {
      var firstAttemptedInstance = nextInstance;
      if (!tryHydrate(fiber, nextInstance)) {
        nextInstance = getNextHydratable(firstAttemptedInstance.nextSibling);
        if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
          fiber.flags = (fiber.flags & -2049) | 2;
          isHydrating = !1;
          hydrationParentFiber = fiber;
          return;
        }
        deleteHydratableInstance(hydrationParentFiber, firstAttemptedInstance);
      }
      hydrationParentFiber = fiber;
      nextHydratableInstance = getNextHydratable(nextInstance.firstChild);
    } else
      (fiber.flags = (fiber.flags & -2049) | 2),
        (isHydrating = !1),
        (hydrationParentFiber = fiber);
  }
}
function popToNextHostParent(fiber) {
  for (
    fiber = fiber.return;
    null !== fiber && 5 !== fiber.tag && 3 !== fiber.tag && 13 !== fiber.tag;

  )
    fiber = fiber.return;
  hydrationParentFiber = fiber;
}
function popHydrationState(fiber) {
  if (fiber !== hydrationParentFiber) return !1;
  if (!isHydrating) return popToNextHostParent(fiber), (isHydrating = !0), !1;
  var type = fiber.type;
  if (
    5 !== fiber.tag ||
    ("head" !== type &&
      "body" !== type &&
      !shouldSetTextContent(type, fiber.memoizedProps))
  )
    for (type = nextHydratableInstance; type; )
      deleteHydratableInstance(fiber, type),
        (type = getNextHydratable(type.nextSibling));
  popToNextHostParent(fiber);
  if (13 === fiber.tag) {
    fiber = fiber.memoizedState;
    fiber = null !== fiber ? fiber.dehydrated : null;
    if (!fiber) throw Error(formatProdErrorMessage(317));
    a: {
      fiber = fiber.nextSibling;
      for (type = 0; fiber; ) {
        if (8 === fiber.nodeType) {
          var data = fiber.data;
          if ("/$" === data) {
            if (0 === type) {
              nextHydratableInstance = getNextHydratable(fiber.nextSibling);
              break a;
            }
            type--;
          } else ("$" !== data && "$!" !== data && "$?" !== data) || type++;
        }
        fiber = fiber.nextSibling;
      }
      nextHydratableInstance = null;
    }
  } else
    nextHydratableInstance = hydrationParentFiber
      ? getNextHydratable(fiber.stateNode.nextSibling)
      : null;
  return !0;
}
function resetHydrationState() {
  nextHydratableInstance = hydrationParentFiber = null;
  isHydrating = !1;
}
var workInProgressSources = [];
function resetWorkInProgressVersions() {
  for (var i = 0; i < workInProgressSources.length; i++)
    workInProgressSources[i]._workInProgressVersionPrimary = null;
  workInProgressSources.length = 0;
}
var CacheContext = {
    $$typeof: REACT_CONTEXT_TYPE,
    Consumer: null,
    Provider: null,
    _calculateChangedBits: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  },
  pooledCache = null,
  prevFreshCacheOnStack = { current: null };
function popRootCachePool(root, renderLanes) {
  root.pooledCache = pooledCache;
  null !== pooledCache && (root.pooledCacheLanes |= renderLanes);
}
function restoreSpawnedCachePool(offscreenWorkInProgress, prevCachePool) {
  if (CacheContext._currentValue !== prevCachePool.parent) return null;
  push(prevFreshCacheOnStack, pooledCache);
  pooledCache = prevCachePool.pool;
  return prevCachePool;
}
var _suspendedPooledCache = null;
function popCachePool() {
  _suspendedPooledCache = pooledCache;
  pooledCache = prevFreshCacheOnStack.current;
  pop(prevFreshCacheOnStack);
}
function getSuspendedCachePool() {
  var pool = pooledCache;
  if (null === pool)
    if (null !== _suspendedPooledCache)
      (pool = _suspendedPooledCache), (_suspendedPooledCache = null);
    else return null;
  return { parent: CacheContext._currentValue, pool: pool };
}
var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher,
  ReactCurrentBatchConfig$1 = ReactSharedInternals.ReactCurrentBatchConfig,
  renderLanes = 0,
  currentlyRenderingFiber$1 = null,
  currentHook = null,
  workInProgressHook = null,
  didScheduleRenderPhaseUpdate = !1,
  didScheduleRenderPhaseUpdateDuringThisPass = !1;
function throwInvalidHookError() {
  throw Error(formatProdErrorMessage(321));
}
function areHookInputsEqual(nextDeps, prevDeps) {
  if (null === prevDeps) return !1;
  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
    if (!objectIs(nextDeps[i], prevDeps[i])) return !1;
  return !0;
}
function renderWithHooks(
  current,
  workInProgress,
  Component,
  props,
  secondArg,
  nextRenderLanes
) {
  renderLanes = nextRenderLanes;
  currentlyRenderingFiber$1 = workInProgress;
  workInProgress.memoizedState = null;
  workInProgress.updateQueue = null;
  workInProgress.lanes = 0;
  ReactCurrentDispatcher$1.current =
    null === current || null === current.memoizedState
      ? HooksDispatcherOnMount
      : HooksDispatcherOnUpdate;
  nextRenderLanes = Component(props, secondArg);
  if (didScheduleRenderPhaseUpdateDuringThisPass) {
    var numberOfReRenders = 0;
    do {
      didScheduleRenderPhaseUpdateDuringThisPass = !1;
      if (!(25 > numberOfReRenders)) throw Error(formatProdErrorMessage(301));
      numberOfReRenders += 1;
      workInProgressHook = currentHook = null;
      workInProgress.updateQueue = null;
      ReactCurrentDispatcher$1.current = HooksDispatcherOnRerender;
      nextRenderLanes = Component(props, secondArg);
    } while (didScheduleRenderPhaseUpdateDuringThisPass);
  }
  ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
  workInProgress = null !== currentHook && null !== currentHook.next;
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber$1 = null;
  didScheduleRenderPhaseUpdate = !1;
  if (workInProgress) throw Error(formatProdErrorMessage(300));
  enableLazyContextPropagation &&
    null !== current &&
    !didReceiveUpdate &&
    ((current = current.dependencies),
    null !== current &&
      checkIfContextChanged(current) &&
      (didReceiveUpdate = !0));
  return nextRenderLanes;
}
function mountWorkInProgressHook() {
  var hook = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  null === workInProgressHook
    ? (currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook)
    : (workInProgressHook = workInProgressHook.next = hook);
  return workInProgressHook;
}
function updateWorkInProgressHook() {
  if (null === currentHook) {
    var nextCurrentHook = currentlyRenderingFiber$1.alternate;
    nextCurrentHook =
      null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
  } else nextCurrentHook = currentHook.next;
  var nextWorkInProgressHook =
    null === workInProgressHook
      ? currentlyRenderingFiber$1.memoizedState
      : workInProgressHook.next;
  if (null !== nextWorkInProgressHook)
    (workInProgressHook = nextWorkInProgressHook),
      (currentHook = nextCurrentHook);
  else {
    if (null === nextCurrentHook) throw Error(formatProdErrorMessage(310));
    currentHook = nextCurrentHook;
    nextCurrentHook = {
      memoizedState: currentHook.memoizedState,
      baseState: currentHook.baseState,
      baseQueue: currentHook.baseQueue,
      queue: currentHook.queue,
      next: null
    };
    null === workInProgressHook
      ? (currentlyRenderingFiber$1.memoizedState = workInProgressHook = nextCurrentHook)
      : (workInProgressHook = workInProgressHook.next = nextCurrentHook);
  }
  return workInProgressHook;
}
function basicStateReducer(state, action) {
  return "function" === typeof action ? action(state) : action;
}
function updateReducer(reducer) {
  var hook = updateWorkInProgressHook(),
    queue = hook.queue;
  if (null === queue) throw Error(formatProdErrorMessage(311));
  queue.lastRenderedReducer = reducer;
  var current = currentHook,
    baseQueue = current.baseQueue,
    pendingQueue = queue.pending;
  if (null !== pendingQueue) {
    if (null !== baseQueue) {
      var baseFirst = baseQueue.next;
      baseQueue.next = pendingQueue.next;
      pendingQueue.next = baseFirst;
    }
    current.baseQueue = baseQueue = pendingQueue;
    queue.pending = null;
  }
  if (null !== baseQueue) {
    pendingQueue = baseQueue.next;
    current = current.baseState;
    var newBaseQueueFirst = (baseFirst = null),
      newBaseQueueLast = null,
      update = pendingQueue;
    do {
      var updateLane = update.lane;
      if ((renderLanes & updateLane) === updateLane)
        null !== newBaseQueueLast &&
          (newBaseQueueLast = newBaseQueueLast.next = {
            lane: 0,
            action: update.action,
            eagerReducer: update.eagerReducer,
            eagerState: update.eagerState,
            next: null
          }),
          (current =
            update.eagerReducer === reducer
              ? update.eagerState
              : reducer(current, update.action));
      else {
        var clone = {
          lane: updateLane,
          action: update.action,
          eagerReducer: update.eagerReducer,
          eagerState: update.eagerState,
          next: null
        };
        null === newBaseQueueLast
          ? ((newBaseQueueFirst = newBaseQueueLast = clone),
            (baseFirst = current))
          : (newBaseQueueLast = newBaseQueueLast.next = clone);
        currentlyRenderingFiber$1.lanes |= updateLane;
        workInProgressRootSkippedLanes |= updateLane;
      }
      update = update.next;
    } while (null !== update && update !== pendingQueue);
    null === newBaseQueueLast
      ? (baseFirst = current)
      : (newBaseQueueLast.next = newBaseQueueFirst);
    objectIs(current, hook.memoizedState) || (didReceiveUpdate = !0);
    hook.memoizedState = current;
    hook.baseState = baseFirst;
    hook.baseQueue = newBaseQueueLast;
    queue.lastRenderedState = current;
  }
  reducer = queue.interleaved;
  if (null !== reducer) {
    baseQueue = reducer;
    do
      (pendingQueue = baseQueue.lane),
        (currentlyRenderingFiber$1.lanes |= pendingQueue),
        (workInProgressRootSkippedLanes |= pendingQueue),
        (baseQueue = baseQueue.next);
    while (baseQueue !== reducer);
  } else null === baseQueue && (queue.lanes = 0);
  return [hook.memoizedState, queue.dispatch];
}
function rerenderReducer(reducer) {
  var hook = updateWorkInProgressHook(),
    queue = hook.queue;
  if (null === queue) throw Error(formatProdErrorMessage(311));
  queue.lastRenderedReducer = reducer;
  var dispatch = queue.dispatch,
    lastRenderPhaseUpdate = queue.pending,
    newState = hook.memoizedState;
  if (null !== lastRenderPhaseUpdate) {
    queue.pending = null;
    var update = (lastRenderPhaseUpdate = lastRenderPhaseUpdate.next);
    do (newState = reducer(newState, update.action)), (update = update.next);
    while (update !== lastRenderPhaseUpdate);
    objectIs(newState, hook.memoizedState) || (didReceiveUpdate = !0);
    hook.memoizedState = newState;
    null === hook.baseQueue && (hook.baseState = newState);
    queue.lastRenderedState = newState;
  }
  return [newState, dispatch];
}
function readFromUnsubcribedMutableSource(root, source, getSnapshot) {
  var getVersion = source._getVersion;
  getVersion = getVersion(source._source);
  var JSCompiler_inline_result = source._workInProgressVersionPrimary;
  if (null !== JSCompiler_inline_result)
    root = JSCompiler_inline_result === getVersion;
  else if (
    ((root = root.mutableReadLanes), (root = (renderLanes & root) === root))
  )
    (source._workInProgressVersionPrimary = getVersion),
      workInProgressSources.push(source);
  if (root) return getSnapshot(source._source);
  workInProgressSources.push(source);
  throw Error(formatProdErrorMessage(350));
}
function useMutableSource(hook, source, getSnapshot, subscribe) {
  var root = workInProgressRoot;
  if (null === root) throw Error(formatProdErrorMessage(349));
  var getVersion = source._getVersion,
    version = getVersion(source._source),
    dispatcher = ReactCurrentDispatcher$1.current,
    _dispatcher$useState = dispatcher.useState(function() {
      return readFromUnsubcribedMutableSource(root, source, getSnapshot);
    }),
    setSnapshot = _dispatcher$useState[1],
    snapshot = _dispatcher$useState[0];
  _dispatcher$useState = workInProgressHook;
  var memoizedState = hook.memoizedState,
    refs = memoizedState.refs,
    prevGetSnapshot = refs.getSnapshot,
    prevSource = memoizedState.source;
  memoizedState = memoizedState.subscribe;
  var fiber = currentlyRenderingFiber$1;
  hook.memoizedState = { refs: refs, source: source, subscribe: subscribe };
  dispatcher.useEffect(
    function() {
      refs.getSnapshot = getSnapshot;
      refs.setSnapshot = setSnapshot;
      var maybeNewVersion = getVersion(source._source);
      objectIs(version, maybeNewVersion) ||
        ((maybeNewVersion = getSnapshot(source._source)),
        objectIs(snapshot, maybeNewVersion) ||
          (setSnapshot(maybeNewVersion),
          (maybeNewVersion = requestUpdateLane(fiber)),
          (root.mutableReadLanes |= maybeNewVersion & root.pendingLanes)),
        markRootEntangled(root, root.mutableReadLanes));
    },
    [getSnapshot, source, subscribe]
  );
  dispatcher.useEffect(
    function() {
      return subscribe(source._source, function() {
        var latestGetSnapshot = refs.getSnapshot,
          latestSetSnapshot = refs.setSnapshot;
        try {
          latestSetSnapshot(latestGetSnapshot(source._source));
          var lane = requestUpdateLane(fiber);
          root.mutableReadLanes |= lane & root.pendingLanes;
        } catch (error) {
          latestSetSnapshot(function() {
            throw error;
          });
        }
      });
    },
    [source, subscribe]
  );
  (objectIs(prevGetSnapshot, getSnapshot) &&
    objectIs(prevSource, source) &&
    objectIs(memoizedState, subscribe)) ||
    ((hook = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: basicStateReducer,
      lastRenderedState: snapshot
    }),
    (hook.dispatch = setSnapshot = dispatchAction.bind(
      null,
      currentlyRenderingFiber$1,
      hook
    )),
    (_dispatcher$useState.queue = hook),
    (_dispatcher$useState.baseQueue = null),
    (snapshot = readFromUnsubcribedMutableSource(root, source, getSnapshot)),
    (_dispatcher$useState.memoizedState = _dispatcher$useState.baseState = snapshot));
  return snapshot;
}
function updateMutableSource(source, getSnapshot, subscribe) {
  var hook = updateWorkInProgressHook();
  return useMutableSource(hook, source, getSnapshot, subscribe);
}
function mountState(initialState) {
  var hook = mountWorkInProgressHook();
  "function" === typeof initialState && (initialState = initialState());
  hook.memoizedState = hook.baseState = initialState;
  initialState = hook.queue = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: initialState
  };
  initialState = initialState.dispatch = dispatchAction.bind(
    null,
    currentlyRenderingFiber$1,
    initialState
  );
  return [hook.memoizedState, initialState];
}
function pushEffect(tag, create, destroy, deps) {
  tag = { tag: tag, create: create, destroy: destroy, deps: deps, next: null };
  create = currentlyRenderingFiber$1.updateQueue;
  null === create
    ? ((create = { lastEffect: null }),
      (currentlyRenderingFiber$1.updateQueue = create),
      (create.lastEffect = tag.next = tag))
    : ((destroy = create.lastEffect),
      null === destroy
        ? (create.lastEffect = tag.next = tag)
        : ((deps = destroy.next),
          (destroy.next = tag),
          (tag.next = deps),
          (create.lastEffect = tag)));
  return tag;
}
function updateRef() {
  return updateWorkInProgressHook().memoizedState;
}
function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
  var hook = mountWorkInProgressHook();
  currentlyRenderingFiber$1.flags |= fiberFlags;
  hook.memoizedState = pushEffect(
    1 | hookFlags,
    create,
    void 0,
    void 0 === deps ? null : deps
  );
}
function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var destroy = void 0;
  if (null !== currentHook) {
    var prevEffect = currentHook.memoizedState;
    destroy = prevEffect.destroy;
    if (null !== deps && areHookInputsEqual(deps, prevEffect.deps)) {
      hook.memoizedState = pushEffect(hookFlags, create, destroy, deps);
      return;
    }
  }
  currentlyRenderingFiber$1.flags |= fiberFlags;
  hook.memoizedState = pushEffect(1 | hookFlags, create, destroy, deps);
}
function mountEffect(create, deps) {
  return mountEffectImpl(263168, 4, create, deps);
}
function updateEffect(create, deps) {
  return updateEffectImpl(1024, 4, create, deps);
}
function updateLayoutEffect(create, deps) {
  return updateEffectImpl(4, 2, create, deps);
}
function imperativeHandleEffect(create, ref) {
  if ("function" === typeof ref)
    return (
      (create = create()),
      ref(create),
      function() {
        ref(null);
      }
    );
  if (null !== ref && void 0 !== ref)
    return (
      (create = create()),
      (ref.current = create),
      function() {
        ref.current = null;
      }
    );
}
function updateImperativeHandle(ref, create, deps) {
  deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
  return updateEffectImpl(
    4,
    2,
    imperativeHandleEffect.bind(null, create, ref),
    deps
  );
}
function mountDebugValue() {}
function updateCallback(callback, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (
    null !== prevState &&
    null !== deps &&
    areHookInputsEqual(deps, prevState[1])
  )
    return prevState[0];
  hook.memoizedState = [callback, deps];
  return callback;
}
function updateMemo(nextCreate, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (
    null !== prevState &&
    null !== deps &&
    areHookInputsEqual(deps, prevState[1])
  )
    return prevState[0];
  nextCreate = nextCreate();
  hook.memoizedState = [nextCreate, deps];
  return nextCreate;
}
function startTransition(setPending, callback) {
  var previousLanePriority = currentUpdateLanePriority;
  currentUpdateLanePriority =
    0 !== previousLanePriority && 10 < previousLanePriority
      ? previousLanePriority
      : 10;
  setPending(!0);
  currentUpdateLanePriority = 8;
  var prevTransition = ReactCurrentBatchConfig$1.transition;
  ReactCurrentBatchConfig$1.transition = 1;
  try {
    setPending(!1), callback();
  } finally {
    (currentUpdateLanePriority = previousLanePriority),
      (ReactCurrentBatchConfig$1.transition = prevTransition);
  }
}
function updateRefresh() {
  return updateWorkInProgressHook().memoizedState;
}
function refreshCache(fiber, seedKey, seedValue) {
  for (fiber = fiber.return; null !== fiber; ) {
    switch (fiber.tag) {
      case 24:
      case 3:
        var lane = requestUpdateLane(fiber),
          eventTime = requestEventTime(),
          root$53 = scheduleUpdateOnFiber(fiber, lane, eventTime);
        null !== root$53 && entangleTransitions(root$53, fiber, lane);
        var seededCache = new Map();
        null !== seedKey &&
          void 0 !== seedKey &&
          null !== root$53 &&
          seededCache.set(seedKey, seedValue);
        seedKey = createUpdate(eventTime, lane);
        seedKey.payload = { cache: seededCache };
        enqueueUpdate(fiber, seedKey);
        return;
    }
    fiber = fiber.return;
  }
}
function dispatchAction(fiber, queue, action) {
  var eventTime = requestEventTime(),
    lane = requestUpdateLane(fiber),
    update = {
      lane: lane,
      action: action,
      eagerReducer: null,
      eagerState: null,
      next: null
    },
    alternate = fiber.alternate;
  if (
    fiber === currentlyRenderingFiber$1 ||
    (null !== alternate && alternate === currentlyRenderingFiber$1)
  )
    (didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = !0),
      (lane = queue.pending),
      null === lane
        ? (update.next = update)
        : ((update.next = lane.next), (lane.next = update)),
      (queue.pending = update);
  else {
    if (
      null === workInProgressRoot ||
      0 === (fiber.mode & 1) ||
      (!deferRenderPhaseUpdateToNextBatch && 0 !== (executionContext & 8))
    ) {
      var pending$54 = queue.pending;
      null === pending$54
        ? (update.next = update)
        : ((update.next = pending$54.next), (pending$54.next = update));
      queue.pending = update;
    } else
      (pending$54 = queue.interleaved),
        null === pending$54
          ? ((update.next = update),
            null === interleavedQueues
              ? (interleavedQueues = [queue])
              : interleavedQueues.push(queue))
          : ((update.next = pending$54.next), (pending$54.next = update)),
        (queue.interleaved = update);
    if (
      0 === fiber.lanes &&
      (null === alternate || 0 === alternate.lanes) &&
      ((alternate = queue.lastRenderedReducer), null !== alternate)
    )
      try {
        var currentState = queue.lastRenderedState,
          eagerState = alternate(currentState, action);
        update.eagerReducer = alternate;
        update.eagerState = eagerState;
        if (objectIs(eagerState, currentState)) return;
      } catch (error) {
      } finally {
      }
    update = scheduleUpdateOnFiber(fiber, lane, eventTime);
    0 !== (lane & 8388096) &&
      null !== update &&
      ((fiber = queue.lanes),
      (fiber &= update.pendingLanes),
      (lane |= fiber),
      (queue.lanes = lane),
      markRootEntangled(update, lane));
  }
}
function getCacheForType(resourceType) {
  var cache = readContext(CacheContext),
    cacheForType = cache.get(resourceType);
  void 0 === cacheForType &&
    ((cacheForType = resourceType()), cache.set(resourceType, cacheForType));
  return cacheForType;
}
var ContextOnlyDispatcher = {
  readContext: readContext,
  useCallback: throwInvalidHookError,
  useContext: throwInvalidHookError,
  useEffect: throwInvalidHookError,
  useImperativeHandle: throwInvalidHookError,
  useLayoutEffect: throwInvalidHookError,
  useMemo: throwInvalidHookError,
  useReducer: throwInvalidHookError,
  useRef: throwInvalidHookError,
  useState: throwInvalidHookError,
  useDebugValue: throwInvalidHookError,
  useDeferredValue: throwInvalidHookError,
  useTransition: throwInvalidHookError,
  useMutableSource: throwInvalidHookError,
  useOpaqueIdentifier: throwInvalidHookError,
  unstable_isNewReconciler: !1
};
ContextOnlyDispatcher.getCacheForType = getCacheForType;
ContextOnlyDispatcher.useCacheRefresh = throwInvalidHookError;
var HooksDispatcherOnMount = {
  readContext: readContext,
  useCallback: function(callback, deps) {
    mountWorkInProgressHook().memoizedState = [
      callback,
      void 0 === deps ? null : deps
    ];
    return callback;
  },
  useContext: readContext,
  useEffect: mountEffect,
  useImperativeHandle: function(ref, create, deps) {
    deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
    return mountEffectImpl(
      4,
      2,
      imperativeHandleEffect.bind(null, create, ref),
      deps
    );
  },
  useLayoutEffect: function(create, deps) {
    return mountEffectImpl(4, 2, create, deps);
  },
  useMemo: function(nextCreate, deps) {
    var hook = mountWorkInProgressHook();
    deps = void 0 === deps ? null : deps;
    nextCreate = nextCreate();
    hook.memoizedState = [nextCreate, deps];
    return nextCreate;
  },
  useReducer: function(reducer, initialArg, init) {
    var hook = mountWorkInProgressHook();
    initialArg = void 0 !== init ? init(initialArg) : initialArg;
    hook.memoizedState = hook.baseState = initialArg;
    reducer = hook.queue = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: reducer,
      lastRenderedState: initialArg
    };
    reducer = reducer.dispatch = dispatchAction.bind(
      null,
      currentlyRenderingFiber$1,
      reducer
    );
    return [hook.memoizedState, reducer];
  },
  useRef: function(initialValue) {
    var hook = mountWorkInProgressHook();
    if (enableUseRefAccessWarning)
      return (
        (initialValue = { current: initialValue }),
        (hook.memoizedState = initialValue)
      );
    initialValue = { current: initialValue };
    return (hook.memoizedState = initialValue);
  },
  useState: mountState,
  useDebugValue: mountDebugValue,
  useDeferredValue: function(value) {
    var _mountState = mountState(value),
      prevValue = _mountState[0],
      setValue = _mountState[1];
    mountEffect(
      function() {
        var prevTransition = ReactCurrentBatchConfig$1.transition;
        ReactCurrentBatchConfig$1.transition = 1;
        try {
          setValue(value);
        } finally {
          ReactCurrentBatchConfig$1.transition = prevTransition;
        }
      },
      [value]
    );
    return prevValue;
  },
  useTransition: function() {
    var _mountState2 = mountState(!1),
      isPending = _mountState2[0];
    _mountState2 = startTransition.bind(null, _mountState2[1]);
    mountWorkInProgressHook().memoizedState = _mountState2;
    return [_mountState2, isPending];
  },
  useMutableSource: function(source, getSnapshot, subscribe) {
    var hook = mountWorkInProgressHook();
    hook.memoizedState = {
      refs: { getSnapshot: getSnapshot, setSnapshot: null },
      source: source,
      subscribe: subscribe
    };
    return useMutableSource(hook, source, getSnapshot, subscribe);
  },
  useOpaqueIdentifier: function() {
    if (isHydrating) {
      var didUpgrade = !1,
        id = makeOpaqueHydratingObject(function() {
          didUpgrade ||
            ((didUpgrade = !0), setId("r:" + (clientId++).toString(36)));
          throw Error(formatProdErrorMessage(355));
        }),
        setId = mountState(id)[1];
      0 === (currentlyRenderingFiber$1.mode & 1) &&
        ((currentlyRenderingFiber$1.flags |= 1024),
        pushEffect(
          5,
          function() {
            setId("r:" + (clientId++).toString(36));
          },
          void 0,
          null
        ));
      return id;
    }
    id = "r:" + (clientId++).toString(36);
    mountState(id);
    return id;
  },
  unstable_isNewReconciler: !1
};
HooksDispatcherOnMount.getCacheForType = getCacheForType;
HooksDispatcherOnMount.useCacheRefresh = function() {
  return (mountWorkInProgressHook().memoizedState = refreshCache.bind(
    null,
    currentlyRenderingFiber$1
  ));
};
var HooksDispatcherOnUpdate = {
  readContext: readContext,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: updateReducer,
  useRef: updateRef,
  useState: function() {
    return updateReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function(value) {
    var _updateState = updateReducer(basicStateReducer),
      prevValue = _updateState[0],
      setValue = _updateState[1];
    updateEffect(
      function() {
        var prevTransition = ReactCurrentBatchConfig$1.transition;
        ReactCurrentBatchConfig$1.transition = 1;
        try {
          setValue(value);
        } finally {
          ReactCurrentBatchConfig$1.transition = prevTransition;
        }
      },
      [value]
    );
    return prevValue;
  },
  useTransition: function() {
    var isPending = updateReducer(basicStateReducer)[0];
    return [updateWorkInProgressHook().memoizedState, isPending];
  },
  useMutableSource: updateMutableSource,
  useOpaqueIdentifier: function() {
    return updateReducer(basicStateReducer)[0];
  },
  unstable_isNewReconciler: !1
};
HooksDispatcherOnUpdate.getCacheForType = getCacheForType;
HooksDispatcherOnUpdate.useCacheRefresh = updateRefresh;
var HooksDispatcherOnRerender = {
  readContext: readContext,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: rerenderReducer,
  useRef: updateRef,
  useState: function() {
    return rerenderReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function(value) {
    var _rerenderState = rerenderReducer(basicStateReducer),
      prevValue = _rerenderState[0],
      setValue = _rerenderState[1];
    updateEffect(
      function() {
        var prevTransition = ReactCurrentBatchConfig$1.transition;
        ReactCurrentBatchConfig$1.transition = 1;
        try {
          setValue(value);
        } finally {
          ReactCurrentBatchConfig$1.transition = prevTransition;
        }
      },
      [value]
    );
    return prevValue;
  },
  useTransition: function() {
    var isPending = rerenderReducer(basicStateReducer)[0];
    return [updateWorkInProgressHook().memoizedState, isPending];
  },
  useMutableSource: updateMutableSource,
  useOpaqueIdentifier: function() {
    return rerenderReducer(basicStateReducer)[0];
  },
  unstable_isNewReconciler: !1
};
HooksDispatcherOnRerender.getCacheForType = getCacheForType;
HooksDispatcherOnRerender.useCacheRefresh = updateRefresh;
var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner,
  didReceiveUpdate = !1;
function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
  workInProgress.child =
    null === current
      ? mountChildFibers(workInProgress, null, nextChildren, renderLanes)
      : reconcileChildFibers(
          workInProgress,
          current.child,
          nextChildren,
          renderLanes
        );
}
function updateForwardRef(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  Component = Component.render;
  var ref = workInProgress.ref;
  prepareToReadContext(workInProgress, renderLanes);
  nextProps = renderWithHooks(
    current,
    workInProgress,
    Component,
    nextProps,
    ref,
    renderLanes
  );
  if (null !== current && !didReceiveUpdate)
    return (
      (workInProgress.updateQueue = current.updateQueue),
      (workInProgress.flags &= -1029),
      (current.lanes &= ~renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  return workInProgress.child;
}
function updateMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  updateLanes,
  renderLanes
) {
  if (null === current) {
    var type = Component.type;
    if (
      "function" === typeof type &&
      !shouldConstruct(type) &&
      void 0 === type.defaultProps &&
      null === Component.compare &&
      void 0 === Component.defaultProps
    )
      return (
        (workInProgress.tag = 15),
        (workInProgress.type = type),
        updateSimpleMemoComponent(
          current,
          workInProgress,
          type,
          nextProps,
          updateLanes,
          renderLanes
        )
      );
    current = createFiberFromTypeAndProps(
      Component.type,
      null,
      nextProps,
      workInProgress,
      workInProgress.mode,
      renderLanes
    );
    current.ref = workInProgress.ref;
    current.return = workInProgress;
    return (workInProgress.child = current);
  }
  type = current.child;
  if (
    0 === (updateLanes & renderLanes) &&
    ((updateLanes = type.memoizedProps),
    (Component = Component.compare),
    (Component = null !== Component ? Component : shallowEqual),
    Component(updateLanes, nextProps) && current.ref === workInProgress.ref)
  )
    return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
  workInProgress.flags |= 1;
  current = createWorkInProgress(type, nextProps);
  current.ref = workInProgress.ref;
  current.return = workInProgress;
  return (workInProgress.child = current);
}
function updateSimpleMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  updateLanes,
  renderLanes
) {
  if (
    null !== current &&
    shallowEqual(current.memoizedProps, nextProps) &&
    current.ref === workInProgress.ref
  )
    if (((didReceiveUpdate = !1), 0 !== (renderLanes & updateLanes)))
      0 !== (current.flags & 32768) && (didReceiveUpdate = !0);
    else
      return (
        (workInProgress.lanes = current.lanes),
        bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
      );
  return updateFunctionComponent(
    current,
    workInProgress,
    Component,
    nextProps,
    renderLanes
  );
}
function updateOffscreenComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    nextChildren = nextProps.children,
    prevState = null !== current ? current.memoizedState : null,
    spawnedCachePool = null;
  if (
    "hidden" === nextProps.mode ||
    "unstable-defer-without-hiding" === nextProps.mode
  )
    if (0 === (workInProgress.mode & 1))
      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
        push(subtreeRenderLanesCursor, subtreeRenderLanes),
        (subtreeRenderLanes |= renderLanes);
    else if (0 !== (renderLanes & 1073741824))
      null !== prevState &&
        ((nextProps = prevState.cachePool),
        null !== nextProps &&
          (spawnedCachePool = restoreSpawnedCachePool(
            workInProgress,
            nextProps
          ))),
        (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
        (prevState = null !== prevState ? prevState.baseLanes : renderLanes),
        push(subtreeRenderLanesCursor, subtreeRenderLanes),
        (subtreeRenderLanes |= prevState);
    else
      return (
        null !== prevState
          ? ((nextChildren = prevState.baseLanes | renderLanes),
            (spawnedCachePool =
              null === pooledCache
                ? null
                : { parent: CacheContext._currentValue, pool: pooledCache }))
          : (nextChildren = renderLanes),
        markSpawnedWork(1073741824),
        (workInProgress.lanes = workInProgress.childLanes = 1073741824),
        (workInProgress.memoizedState = {
          baseLanes: nextChildren,
          cachePool: spawnedCachePool
        }),
        (workInProgress.updateQueue = null),
        (spawnedCachePool = nextChildren),
        push(subtreeRenderLanesCursor, subtreeRenderLanes),
        (subtreeRenderLanes |= spawnedCachePool),
        enableLazyContextPropagation &&
          null !== current &&
          propagateParentContextChanges(
            current,
            workInProgress,
            renderLanes,
            !0
          ),
        null
      );
  else
    null !== prevState
      ? ((nextProps = prevState.baseLanes | renderLanes),
        (prevState = prevState.cachePool),
        null !== prevState &&
          (spawnedCachePool = restoreSpawnedCachePool(
            workInProgress,
            prevState
          )),
        (workInProgress.memoizedState = null))
      : (nextProps = renderLanes),
      (prevState = nextProps),
      push(subtreeRenderLanesCursor, subtreeRenderLanes),
      (subtreeRenderLanes |= prevState);
  workInProgress.updateQueue = spawnedCachePool;
  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  return workInProgress.child;
}
function markRef(current, workInProgress) {
  var ref = workInProgress.ref;
  if (
    (null === current && null !== ref) ||
    (null !== current && current.ref !== ref)
  )
    workInProgress.flags |= 256;
}
function updateFunctionComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  prepareToReadContext(workInProgress, renderLanes);
  Component = renderWithHooks(
    current,
    workInProgress,
    Component,
    nextProps,
    void 0,
    renderLanes
  );
  if (null !== current && !didReceiveUpdate)
    return (
      (workInProgress.updateQueue = current.updateQueue),
      (workInProgress.flags &= -1029),
      (current.lanes &= ~renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, Component, renderLanes);
  return workInProgress.child;
}
function updateClassComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  prepareToReadContext(workInProgress, renderLanes);
  if (null === workInProgress.stateNode)
    null !== current &&
      ((current.alternate = null),
      (workInProgress.alternate = null),
      (workInProgress.flags |= 2)),
      constructClassInstance(workInProgress, Component, nextProps),
      mountClassInstance(workInProgress, Component, nextProps, renderLanes),
      (nextProps = !0);
  else if (null === current) {
    var instance = workInProgress.stateNode,
      oldProps = workInProgress.memoizedProps;
    instance.props = oldProps;
    var oldContext = instance.context,
      contextType = Component.contextType,
      nextContext = emptyContextObject;
    "object" === typeof contextType &&
      null !== contextType &&
      (nextContext = readContext(contextType));
    var getDerivedStateFromProps = Component.getDerivedStateFromProps;
    (contextType =
      "function" === typeof getDerivedStateFromProps ||
      "function" === typeof instance.getSnapshotBeforeUpdate) ||
      ("function" !== typeof instance.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof instance.componentWillReceiveProps) ||
      ((oldProps !== nextProps || oldContext !== nextContext) &&
        callComponentWillReceiveProps(
          workInProgress,
          instance,
          nextProps,
          nextContext
        ));
    hasForceUpdate = !1;
    var oldState = workInProgress.memoizedState;
    instance.state = oldState;
    processUpdateQueue(workInProgress, nextProps, instance, renderLanes);
    oldContext = workInProgress.memoizedState;
    oldProps !== nextProps || oldState !== oldContext || hasForceUpdate
      ? ("function" === typeof getDerivedStateFromProps &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            getDerivedStateFromProps,
            nextProps
          ),
          (oldContext = workInProgress.memoizedState)),
        (oldProps =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            oldProps,
            nextProps,
            oldState,
            oldContext,
            nextContext
          ))
          ? (contextType ||
              ("function" !== typeof instance.UNSAFE_componentWillMount &&
                "function" !== typeof instance.componentWillMount) ||
              ("function" === typeof instance.componentWillMount &&
                instance.componentWillMount(),
              "function" === typeof instance.UNSAFE_componentWillMount &&
                instance.UNSAFE_componentWillMount()),
            "function" === typeof instance.componentDidMount &&
              (workInProgress.flags |= 4))
          : ("function" === typeof instance.componentDidMount &&
              (workInProgress.flags |= 4),
            (workInProgress.memoizedProps = nextProps),
            (workInProgress.memoizedState = oldContext)),
        (instance.props = nextProps),
        (instance.state = oldContext),
        (instance.context = nextContext),
        (nextProps = oldProps))
      : ("function" === typeof instance.componentDidMount &&
          (workInProgress.flags |= 4),
        (nextProps = !1));
  } else {
    instance = workInProgress.stateNode;
    cloneUpdateQueue(current, workInProgress);
    nextContext = workInProgress.memoizedProps;
    contextType =
      workInProgress.type === workInProgress.elementType
        ? nextContext
        : resolveDefaultProps(workInProgress.type, nextContext);
    instance.props = contextType;
    getDerivedStateFromProps = workInProgress.pendingProps;
    var oldContext$jscomp$0 = instance.context;
    oldContext = Component.contextType;
    oldProps = emptyContextObject;
    "object" === typeof oldContext &&
      null !== oldContext &&
      (oldProps = readContext(oldContext));
    oldState = Component.getDerivedStateFromProps;
    (oldContext =
      "function" === typeof oldState ||
      "function" === typeof instance.getSnapshotBeforeUpdate) ||
      ("function" !== typeof instance.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof instance.componentWillReceiveProps) ||
      ((nextContext !== getDerivedStateFromProps ||
        oldContext$jscomp$0 !== oldProps) &&
        callComponentWillReceiveProps(
          workInProgress,
          instance,
          nextProps,
          oldProps
        ));
    hasForceUpdate = !1;
    oldContext$jscomp$0 = workInProgress.memoizedState;
    instance.state = oldContext$jscomp$0;
    processUpdateQueue(workInProgress, nextProps, instance, renderLanes);
    var newState = workInProgress.memoizedState;
    nextContext !== getDerivedStateFromProps ||
    oldContext$jscomp$0 !== newState ||
    hasForceUpdate ||
    (enableLazyContextPropagation &&
      null !== current &&
      null !== current.dependencies &&
      checkIfContextChanged(current.dependencies))
      ? ("function" === typeof oldState &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            oldState,
            nextProps
          ),
          (newState = workInProgress.memoizedState)),
        (contextType =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            contextType,
            nextProps,
            oldContext$jscomp$0,
            newState,
            oldProps
          ) ||
          (enableLazyContextPropagation &&
            null !== current &&
            null !== current.dependencies &&
            checkIfContextChanged(current.dependencies)))
          ? (oldContext ||
              ("function" !== typeof instance.UNSAFE_componentWillUpdate &&
                "function" !== typeof instance.componentWillUpdate) ||
              ("function" === typeof instance.componentWillUpdate &&
                instance.componentWillUpdate(nextProps, newState, oldProps),
              "function" === typeof instance.UNSAFE_componentWillUpdate &&
                instance.UNSAFE_componentWillUpdate(
                  nextProps,
                  newState,
                  oldProps
                )),
            "function" === typeof instance.componentDidUpdate &&
              (workInProgress.flags |= 4),
            "function" === typeof instance.getSnapshotBeforeUpdate &&
              (workInProgress.flags |= 512))
          : ("function" !== typeof instance.componentDidUpdate ||
              (nextContext === current.memoizedProps &&
                oldContext$jscomp$0 === current.memoizedState) ||
              (workInProgress.flags |= 4),
            "function" !== typeof instance.getSnapshotBeforeUpdate ||
              (nextContext === current.memoizedProps &&
                oldContext$jscomp$0 === current.memoizedState) ||
              (workInProgress.flags |= 512),
            (workInProgress.memoizedProps = nextProps),
            (workInProgress.memoizedState = newState)),
        (instance.props = nextProps),
        (instance.state = newState),
        (instance.context = oldProps),
        (nextProps = contextType))
      : ("function" !== typeof instance.componentDidUpdate ||
          (nextContext === current.memoizedProps &&
            oldContext$jscomp$0 === current.memoizedState) ||
          (workInProgress.flags |= 4),
        "function" !== typeof instance.getSnapshotBeforeUpdate ||
          (nextContext === current.memoizedProps &&
            oldContext$jscomp$0 === current.memoizedState) ||
          (workInProgress.flags |= 512),
        (nextProps = !1));
  }
  return finishClassComponent(
    current,
    workInProgress,
    Component,
    nextProps,
    !1,
    renderLanes
  );
}
function finishClassComponent(
  current,
  workInProgress,
  Component,
  shouldUpdate,
  hasContext,
  renderLanes
) {
  markRef(current, workInProgress);
  hasContext = 0 !== (workInProgress.flags & 128);
  if (!shouldUpdate && !hasContext)
    return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
  shouldUpdate = workInProgress.stateNode;
  ReactCurrentOwner$1.current = workInProgress;
  Component =
    hasContext && "function" !== typeof Component.getDerivedStateFromError
      ? null
      : shouldUpdate.render();
  workInProgress.flags |= 1;
  null !== current && hasContext
    ? ((workInProgress.child = reconcileChildFibers(
        workInProgress,
        current.child,
        null,
        renderLanes
      )),
      (workInProgress.child = reconcileChildFibers(
        workInProgress,
        null,
        Component,
        renderLanes
      )))
    : reconcileChildren(current, workInProgress, Component, renderLanes);
  workInProgress.memoizedState = shouldUpdate.state;
  return workInProgress.child;
}
var SUSPENDED_MARKER = { dehydrated: null, retryLane: 0 };
function mountSuspenseOffscreenState(renderLanes) {
  return { baseLanes: renderLanes, cachePool: getSuspendedCachePool() };
}
function updateSuspenseOffscreenState(prevOffscreenState, renderLanes) {
  var cachePool = prevOffscreenState.cachePool;
  if (null !== cachePool) {
    var parentCache = CacheContext._currentValue;
    cachePool =
      cachePool.parent !== parentCache
        ? { parent: parentCache, pool: parentCache }
        : cachePool;
  } else cachePool = getSuspendedCachePool();
  return {
    baseLanes: prevOffscreenState.baseLanes | renderLanes,
    cachePool: cachePool
  };
}
function updateSuspenseComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    suspenseContext = suspenseStackCursor.current,
    showFallback = !1,
    didSuspend = 0 !== (workInProgress.flags & 128),
    JSCompiler_temp;
  (JSCompiler_temp = didSuspend) ||
    (JSCompiler_temp =
      null !== current && null === current.memoizedState
        ? !1
        : 0 !== (suspenseContext & 2));
  JSCompiler_temp
    ? ((showFallback = !0), (workInProgress.flags &= -129))
    : (null !== current && null === current.memoizedState) ||
      void 0 === nextProps.fallback ||
      !0 === nextProps.unstable_avoidThisFallback ||
      (suspenseContext |= 1);
  push(suspenseStackCursor, suspenseContext & 1);
  if (null === current) {
    if (
      void 0 !== nextProps.fallback &&
      (tryToClaimNextHydratableInstance(workInProgress),
      (current = workInProgress.memoizedState),
      null !== current && ((current = current.dehydrated), null !== current))
    )
      return (
        0 === (workInProgress.mode & 1)
          ? (workInProgress.lanes = 1)
          : "$!" === current.data
          ? (markSpawnedWork(64), (workInProgress.lanes = 64))
          : ((workInProgress.lanes = 1073741824), markSpawnedWork(1073741824)),
        null
      );
    current = nextProps.children;
    var nextFallbackChildren = nextProps.fallback;
    return showFallback
      ? ((current = mountSuspenseFallbackChildren(
          workInProgress,
          current,
          nextFallbackChildren,
          renderLanes
        )),
        (workInProgress.child.memoizedState = mountSuspenseOffscreenState(
          renderLanes
        )),
        (workInProgress.memoizedState = SUSPENDED_MARKER),
        current)
      : "number" === typeof nextProps.unstable_expectedLoadTime
      ? ((current = mountSuspenseFallbackChildren(
          workInProgress,
          current,
          nextFallbackChildren,
          renderLanes
        )),
        (workInProgress.child.memoizedState = mountSuspenseOffscreenState(
          renderLanes
        )),
        (workInProgress.memoizedState = SUSPENDED_MARKER),
        (workInProgress.lanes = 8388608),
        markSpawnedWork(8388608),
        current)
      : mountSuspensePrimaryChildren(workInProgress, current, renderLanes);
  }
  suspenseContext = current.memoizedState;
  if (null !== suspenseContext) {
    JSCompiler_temp = suspenseContext.dehydrated;
    if (null !== JSCompiler_temp) {
      if (didSuspend) {
        if (null !== workInProgress.memoizedState)
          return (
            (workInProgress.child = current.child),
            (workInProgress.flags |= 128),
            null
          );
        showFallback = nextProps.fallback;
        nextFallbackChildren = workInProgress.mode;
        nextProps = createFiberFromOffscreen(
          nextProps.children,
          nextFallbackChildren,
          0,
          null
        );
        showFallback = createFiberFromFragment(
          showFallback,
          nextFallbackChildren,
          renderLanes,
          null
        );
        showFallback.flags |= 2;
        nextProps.return = workInProgress;
        showFallback.return = workInProgress;
        nextProps.sibling = showFallback;
        workInProgress.child = nextProps;
        0 !== (workInProgress.mode & 1) &&
          reconcileChildFibers(
            workInProgress,
            current.child,
            null,
            renderLanes
          );
        workInProgress.child.memoizedState = mountSuspenseOffscreenState(
          renderLanes
        );
        workInProgress.memoizedState = SUSPENDED_MARKER;
        return showFallback;
      }
      if (
        0 !== (executionContext & 32) ||
        0 === (workInProgress.mode & 1) ||
        "$!" === JSCompiler_temp.data
      )
        workInProgress = retrySuspenseComponentWithoutHydrating(
          current,
          workInProgress,
          renderLanes
        );
      else if (
        (enableLazyContextPropagation &&
          !didReceiveUpdate &&
          propagateParentContextChanges(
            current,
            workInProgress,
            renderLanes,
            !1
          ),
        (nextProps = 0 !== (renderLanes & current.childLanes)),
        didReceiveUpdate || nextProps)
      ) {
        nextProps = workInProgressRoot;
        if (null !== nextProps) {
          getHighestPriorityLanes(renderLanes);
          switch (return_highestLanePriority) {
            case 15:
            case 14:
              nextFallbackChildren = 0;
              break;
            case 13:
            case 12:
              nextFallbackChildren = 4;
              break;
            case 11:
            case 10:
              nextFallbackChildren = 16;
              break;
            case 9:
            case 8:
              nextFallbackChildren = 64;
              break;
            case 7:
            case 6:
              nextFallbackChildren = 256;
              break;
            case 5:
              nextFallbackChildren = 256;
              break;
            case 4:
              nextFallbackChildren = 134217728;
              break;
            case 3:
            case 2:
              nextFallbackChildren = 268435456;
              break;
            case 1:
            case 0:
              nextFallbackChildren = 0;
              break;
            default:
              throw Error(formatProdErrorMessage(360, nextFallbackChildren));
          }
          nextProps =
            0 !==
            (nextFallbackChildren & (nextProps.suspendedLanes | renderLanes))
              ? 0
              : nextFallbackChildren;
          0 !== nextProps &&
            nextProps !== suspenseContext.retryLane &&
            ((suspenseContext.retryLane = nextProps),
            scheduleUpdateOnFiber(current, nextProps, -1));
        }
        renderDidSuspendDelayIfPossible();
        workInProgress = retrySuspenseComponentWithoutHydrating(
          current,
          workInProgress,
          renderLanes
        );
      } else
        "$?" === JSCompiler_temp.data
          ? ((workInProgress.flags |= 128),
            (workInProgress.child = current.child),
            (workInProgress = retryDehydratedSuspenseBoundary.bind(
              null,
              current
            )),
            (workInProgress = tracing.unstable_wrap(workInProgress)),
            (JSCompiler_temp._reactRetry = workInProgress),
            (workInProgress = null))
          : ((nextHydratableInstance = getNextHydratable(
              JSCompiler_temp.nextSibling
            )),
            popToNextHostParent(workInProgress),
            (isHydrating = !0),
            (workInProgress = mountSuspensePrimaryChildren(
              workInProgress,
              workInProgress.pendingProps.children,
              renderLanes
            )),
            (workInProgress.flags |= 2048));
      return workInProgress;
    }
    if (showFallback)
      return (
        (nextProps = updateSuspenseFallbackChildren(
          current,
          workInProgress,
          nextProps.children,
          nextProps.fallback,
          renderLanes
        )),
        (showFallback = workInProgress.child),
        (nextFallbackChildren = current.child.memoizedState),
        (showFallback.memoizedState =
          null === nextFallbackChildren
            ? mountSuspenseOffscreenState(renderLanes)
            : updateSuspenseOffscreenState(nextFallbackChildren, renderLanes)),
        (showFallback.childLanes = current.childLanes & ~renderLanes),
        (workInProgress.memoizedState = SUSPENDED_MARKER),
        nextProps
      );
    renderLanes = updateSuspensePrimaryChildren(
      current,
      workInProgress,
      nextProps.children,
      renderLanes
    );
    workInProgress.memoizedState = null;
    return renderLanes;
  }
  if (showFallback)
    return (
      (nextProps = updateSuspenseFallbackChildren(
        current,
        workInProgress,
        nextProps.children,
        nextProps.fallback,
        renderLanes
      )),
      (showFallback = workInProgress.child),
      (nextFallbackChildren = current.child.memoizedState),
      (showFallback.memoizedState =
        null === nextFallbackChildren
          ? mountSuspenseOffscreenState(renderLanes)
          : updateSuspenseOffscreenState(nextFallbackChildren, renderLanes)),
      (showFallback.childLanes = current.childLanes & ~renderLanes),
      (workInProgress.memoizedState = SUSPENDED_MARKER),
      nextProps
    );
  renderLanes = updateSuspensePrimaryChildren(
    current,
    workInProgress,
    nextProps.children,
    renderLanes
  );
  workInProgress.memoizedState = null;
  return renderLanes;
}
function mountSuspensePrimaryChildren(
  workInProgress,
  primaryChildren,
  renderLanes
) {
  primaryChildren = createFiberFromOffscreen(
    { mode: "visible", children: primaryChildren },
    workInProgress.mode,
    renderLanes,
    null
  );
  primaryChildren.return = workInProgress;
  return (workInProgress.child = primaryChildren);
}
function mountSuspenseFallbackChildren(
  workInProgress,
  primaryChildren,
  fallbackChildren,
  renderLanes
) {
  var mode = workInProgress.mode,
    progressedPrimaryFragment = workInProgress.child;
  primaryChildren = { mode: "hidden", children: primaryChildren };
  0 === (mode & 1) && null !== progressedPrimaryFragment
    ? ((progressedPrimaryFragment.childLanes = 0),
      (progressedPrimaryFragment.pendingProps = primaryChildren))
    : (progressedPrimaryFragment = createFiberFromOffscreen(
        primaryChildren,
        mode,
        0,
        null
      ));
  fallbackChildren = createFiberFromFragment(
    fallbackChildren,
    mode,
    renderLanes,
    null
  );
  progressedPrimaryFragment.return = workInProgress;
  fallbackChildren.return = workInProgress;
  progressedPrimaryFragment.sibling = fallbackChildren;
  workInProgress.child = progressedPrimaryFragment;
  return fallbackChildren;
}
function updateSuspensePrimaryChildren(
  current,
  workInProgress,
  primaryChildren,
  renderLanes
) {
  var currentPrimaryChildFragment = current.child;
  current = currentPrimaryChildFragment.sibling;
  primaryChildren = createWorkInProgress(currentPrimaryChildFragment, {
    mode: "visible",
    children: primaryChildren
  });
  0 === (workInProgress.mode & 1) && (primaryChildren.lanes = renderLanes);
  primaryChildren.return = workInProgress;
  primaryChildren.sibling = null;
  null !== current &&
    ((renderLanes = workInProgress.deletions),
    null === renderLanes
      ? ((workInProgress.deletions = [current]), (workInProgress.flags |= 16))
      : renderLanes.push(current));
  return (workInProgress.child = primaryChildren);
}
function updateSuspenseFallbackChildren(
  current,
  workInProgress,
  primaryChildren,
  fallbackChildren,
  renderLanes
) {
  var mode = workInProgress.mode;
  current = current.child;
  var currentFallbackChildFragment = current.sibling,
    primaryChildProps = { mode: "hidden", children: primaryChildren };
  0 === (mode & 1) && workInProgress.child !== current
    ? ((primaryChildren = workInProgress.child),
      (primaryChildren.childLanes = 0),
      (primaryChildren.pendingProps = primaryChildProps),
      (workInProgress.deletions = null))
    : ((primaryChildren = createWorkInProgress(current, primaryChildProps)),
      (primaryChildren.subtreeFlags = current.subtreeFlags & 262144));
  null !== currentFallbackChildFragment
    ? (fallbackChildren = createWorkInProgress(
        currentFallbackChildFragment,
        fallbackChildren
      ))
    : ((fallbackChildren = createFiberFromFragment(
        fallbackChildren,
        mode,
        renderLanes,
        null
      )),
      (fallbackChildren.flags |= 2));
  fallbackChildren.return = workInProgress;
  primaryChildren.return = workInProgress;
  primaryChildren.sibling = fallbackChildren;
  workInProgress.child = primaryChildren;
  return fallbackChildren;
}
function retrySuspenseComponentWithoutHydrating(
  current,
  workInProgress,
  renderLanes
) {
  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
  current = mountSuspensePrimaryChildren(
    workInProgress,
    workInProgress.pendingProps.children,
    renderLanes
  );
  current.flags |= 2;
  workInProgress.memoizedState = null;
  return current;
}
function scheduleWorkOnFiber(fiber, renderLanes) {
  fiber.lanes |= renderLanes;
  var alternate = fiber.alternate;
  null !== alternate && (alternate.lanes |= renderLanes);
  scheduleWorkOnParentPath(fiber.return, renderLanes);
}
function initSuspenseListRenderState(
  workInProgress,
  isBackwards,
  tail,
  lastContentRow,
  tailMode
) {
  var renderState = workInProgress.memoizedState;
  null === renderState
    ? (workInProgress.memoizedState = {
        isBackwards: isBackwards,
        rendering: null,
        renderingStartTime: 0,
        last: lastContentRow,
        tail: tail,
        tailMode: tailMode
      })
    : ((renderState.isBackwards = isBackwards),
      (renderState.rendering = null),
      (renderState.renderingStartTime = 0),
      (renderState.last = lastContentRow),
      (renderState.tail = tail),
      (renderState.tailMode = tailMode));
}
function updateSuspenseListComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    revealOrder = nextProps.revealOrder,
    tailMode = nextProps.tail;
  reconcileChildren(current, workInProgress, nextProps.children, renderLanes);
  nextProps = suspenseStackCursor.current;
  if (0 !== (nextProps & 2))
    (nextProps = (nextProps & 1) | 2), (workInProgress.flags |= 128);
  else {
    if (null !== current && 0 !== (current.flags & 128))
      a: for (current = workInProgress.child; null !== current; ) {
        if (13 === current.tag)
          null !== current.memoizedState &&
            scheduleWorkOnFiber(current, renderLanes);
        else if (19 === current.tag) scheduleWorkOnFiber(current, renderLanes);
        else if (null !== current.child) {
          current.child.return = current;
          current = current.child;
          continue;
        }
        if (current === workInProgress) break a;
        for (; null === current.sibling; ) {
          if (null === current.return || current.return === workInProgress)
            break a;
          current = current.return;
        }
        current.sibling.return = current.return;
        current = current.sibling;
      }
    nextProps &= 1;
  }
  push(suspenseStackCursor, nextProps);
  if (0 === (workInProgress.mode & 1)) workInProgress.memoizedState = null;
  else
    switch (revealOrder) {
      case "forwards":
        renderLanes = workInProgress.child;
        for (revealOrder = null; null !== renderLanes; )
          (current = renderLanes.alternate),
            null !== current &&
              null === findFirstSuspended(current) &&
              (revealOrder = renderLanes),
            (renderLanes = renderLanes.sibling);
        renderLanes = revealOrder;
        null === renderLanes
          ? ((revealOrder = workInProgress.child),
            (workInProgress.child = null))
          : ((revealOrder = renderLanes.sibling), (renderLanes.sibling = null));
        initSuspenseListRenderState(
          workInProgress,
          !1,
          revealOrder,
          renderLanes,
          tailMode
        );
        break;
      case "backwards":
        renderLanes = null;
        revealOrder = workInProgress.child;
        for (workInProgress.child = null; null !== revealOrder; ) {
          current = revealOrder.alternate;
          if (null !== current && null === findFirstSuspended(current)) {
            workInProgress.child = revealOrder;
            break;
          }
          current = revealOrder.sibling;
          revealOrder.sibling = renderLanes;
          renderLanes = revealOrder;
          revealOrder = current;
        }
        initSuspenseListRenderState(
          workInProgress,
          !0,
          renderLanes,
          null,
          tailMode
        );
        break;
      case "together":
        initSuspenseListRenderState(workInProgress, !1, null, null, void 0);
        break;
      default:
        workInProgress.memoizedState = null;
    }
  return workInProgress.child;
}
function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
  null !== current && (workInProgress.dependencies = current.dependencies);
  workInProgressRootSkippedLanes |= workInProgress.lanes;
  if (0 === (renderLanes & workInProgress.childLanes))
    if (enableLazyContextPropagation && null !== current) {
      if (
        (propagateParentContextChanges(
          current,
          workInProgress,
          renderLanes,
          !1
        ),
        0 === (renderLanes & workInProgress.childLanes))
      )
        return null;
    } else return null;
  if (null !== current && workInProgress.child !== current.child)
    throw Error(formatProdErrorMessage(153));
  if (null !== workInProgress.child) {
    current = workInProgress.child;
    renderLanes = createWorkInProgress(current, current.pendingProps);
    workInProgress.child = renderLanes;
    for (renderLanes.return = workInProgress; null !== current.sibling; )
      (current = current.sibling),
        (renderLanes = renderLanes.sibling = createWorkInProgress(
          current,
          current.pendingProps
        )),
        (renderLanes.return = workInProgress);
    renderLanes.sibling = null;
  }
  return workInProgress.child;
}
var emptyObject = {};
function collectScopedNodesFromChildren(
  startingChild,
  fn$jscomp$0,
  scopedNodes$jscomp$0
) {
  for (; null !== startingChild; ) {
    var node = startingChild,
      fn = fn$jscomp$0,
      scopedNodes = scopedNodes$jscomp$0;
    if (5 === node.tag) {
      var type = node.type,
        memoizedProps = node.memoizedProps,
        instance = node.stateNode;
      null !== instance &&
        !0 === fn(type, memoizedProps || emptyObject, instance) &&
        scopedNodes.push(instance);
    }
    type = node.child;
    isFiberSuspenseAndTimedOut(node) && (type = node.child.sibling.child);
    null !== type && collectScopedNodesFromChildren(type, fn, scopedNodes);
    startingChild = startingChild.sibling;
  }
}
function collectFirstScopedNodeFromChildren(startingChild, fn$jscomp$0) {
  for (; null !== startingChild; ) {
    a: {
      var JSCompiler_inline_result = startingChild;
      var fn = fn$jscomp$0;
      if (5 === JSCompiler_inline_result.tag) {
        var type = JSCompiler_inline_result.type,
          memoizedProps = JSCompiler_inline_result.memoizedProps,
          instance = JSCompiler_inline_result.stateNode;
        if (null !== instance && !0 === fn(type, memoizedProps, instance)) {
          JSCompiler_inline_result = instance;
          break a;
        }
      }
      type = JSCompiler_inline_result.child;
      isFiberSuspenseAndTimedOut(JSCompiler_inline_result) &&
        (type = JSCompiler_inline_result.child.sibling.child);
      JSCompiler_inline_result =
        null !== type ? collectFirstScopedNodeFromChildren(type, fn) : null;
    }
    if (null !== JSCompiler_inline_result) return JSCompiler_inline_result;
    startingChild = startingChild.sibling;
  }
  return null;
}
function collectNearestChildContextValues(
  startingChild,
  context$jscomp$0,
  childContextValues$jscomp$0
) {
  for (; null !== startingChild; ) {
    var node = startingChild,
      context = context$jscomp$0,
      childContextValues = childContextValues$jscomp$0;
    if (10 === node.tag && node.type._context === context)
      childContextValues.push(node.memoizedProps.value);
    else {
      var child = node.child;
      isFiberSuspenseAndTimedOut(node) && (child = node.child.sibling.child);
      null !== child &&
        collectNearestChildContextValues(child, context, childContextValues);
    }
    startingChild = startingChild.sibling;
  }
}
function DO_NOT_USE_queryAllNodes(fn) {
  var currentFiber = getInstanceFromScope(this);
  if (null === currentFiber) return null;
  currentFiber = currentFiber.child;
  var scopedNodes = [];
  null !== currentFiber &&
    collectScopedNodesFromChildren(currentFiber, fn, scopedNodes);
  return 0 === scopedNodes.length ? null : scopedNodes;
}
function DO_NOT_USE_queryFirstNode(fn) {
  var currentFiber = getInstanceFromScope(this);
  if (null === currentFiber) return null;
  currentFiber = currentFiber.child;
  return null !== currentFiber
    ? collectFirstScopedNodeFromChildren(currentFiber, fn)
    : null;
}
function containsNode$1(node) {
  for (node = getClosestInstanceFromNode(node) || null; null !== node; ) {
    if (21 === node.tag && node.stateNode === this) return !0;
    node = node.return;
  }
  return !1;
}
function getChildContextValues(context) {
  var currentFiber = getInstanceFromScope(this);
  if (null === currentFiber) return [];
  currentFiber = currentFiber.child;
  var childContextValues = [];
  null !== currentFiber &&
    collectNearestChildContextValues(currentFiber, context, childContextValues);
  return childContextValues;
}
var appendAllChildren,
  updateHostContainer,
  updateHostComponent$1,
  updateHostText$1;
appendAllChildren = function(parent, workInProgress) {
  for (var node = workInProgress.child; null !== node; ) {
    if (5 === node.tag || 6 === node.tag) parent.appendChild(node.stateNode);
    else if (4 !== node.tag && null !== node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === workInProgress) break;
    for (; null === node.sibling; ) {
      if (null === node.return || node.return === workInProgress) return;
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
};
updateHostContainer = function() {};
updateHostComponent$1 = function(current, workInProgress, type, newProps) {
  var oldProps = current.memoizedProps;
  if (oldProps !== newProps) {
    current = workInProgress.stateNode;
    requiredContext(contextStackCursor.current);
    var updatePayload = null;
    switch (type) {
      case "input":
        oldProps = getHostProps(current, oldProps);
        newProps = getHostProps(current, newProps);
        updatePayload = [];
        break;
      case "option":
        oldProps = getHostProps$1(current, oldProps);
        newProps = getHostProps$1(current, newProps);
        updatePayload = [];
        break;
      case "select":
        oldProps = Object.assign({}, oldProps, { value: void 0 });
        newProps = Object.assign({}, newProps, { value: void 0 });
        updatePayload = [];
        break;
      case "textarea":
        oldProps = getHostProps$3(current, oldProps);
        newProps = getHostProps$3(current, newProps);
        updatePayload = [];
        break;
      default:
        "function" !== typeof oldProps.onClick &&
          "function" === typeof newProps.onClick &&
          (current.onclick = noop);
    }
    assertValidProps(type, newProps);
    var styleName;
    type = null;
    for (JSCompiler_inline_result in oldProps)
      if (
        !newProps.hasOwnProperty(JSCompiler_inline_result) &&
        oldProps.hasOwnProperty(JSCompiler_inline_result) &&
        null != oldProps[JSCompiler_inline_result]
      )
        if ("style" === JSCompiler_inline_result) {
          var lastStyle = oldProps[JSCompiler_inline_result];
          for (styleName in lastStyle)
            lastStyle.hasOwnProperty(styleName) &&
              (type || (type = {}), (type[styleName] = ""));
        } else
          "dangerouslySetInnerHTML" !== JSCompiler_inline_result &&
            "children" !== JSCompiler_inline_result &&
            "suppressContentEditableWarning" !== JSCompiler_inline_result &&
            "suppressHydrationWarning" !== JSCompiler_inline_result &&
            "autoFocus" !== JSCompiler_inline_result &&
            (registrationNameDependencies.hasOwnProperty(
              JSCompiler_inline_result
            )
              ? updatePayload || (updatePayload = [])
              : (updatePayload = updatePayload || []).push(
                  JSCompiler_inline_result,
                  null
                ));
    for (JSCompiler_inline_result in newProps) {
      var nextProp = newProps[JSCompiler_inline_result];
      lastStyle =
        null != oldProps ? oldProps[JSCompiler_inline_result] : void 0;
      if (
        newProps.hasOwnProperty(JSCompiler_inline_result) &&
        nextProp !== lastStyle &&
        (null != nextProp || null != lastStyle)
      )
        if ("style" === JSCompiler_inline_result)
          if (lastStyle) {
            for (styleName in lastStyle)
              !lastStyle.hasOwnProperty(styleName) ||
                (nextProp && nextProp.hasOwnProperty(styleName)) ||
                (type || (type = {}), (type[styleName] = ""));
            for (styleName in nextProp)
              nextProp.hasOwnProperty(styleName) &&
                lastStyle[styleName] !== nextProp[styleName] &&
                (type || (type = {}), (type[styleName] = nextProp[styleName]));
          } else
            type ||
              (updatePayload || (updatePayload = []),
              updatePayload.push(JSCompiler_inline_result, type)),
              (type = nextProp);
        else
          "dangerouslySetInnerHTML" === JSCompiler_inline_result
            ? ((nextProp = nextProp ? nextProp.__html : void 0),
              (lastStyle = lastStyle ? lastStyle.__html : void 0),
              null != nextProp &&
                lastStyle !== nextProp &&
                (updatePayload = updatePayload || []).push(
                  JSCompiler_inline_result,
                  nextProp
                ))
            : "children" === JSCompiler_inline_result
            ? ("string" !== typeof nextProp && "number" !== typeof nextProp) ||
              (updatePayload = updatePayload || []).push(
                JSCompiler_inline_result,
                "" + nextProp
              )
            : "suppressContentEditableWarning" !== JSCompiler_inline_result &&
              "suppressHydrationWarning" !== JSCompiler_inline_result &&
              (registrationNameDependencies.hasOwnProperty(
                JSCompiler_inline_result
              )
                ? (null != nextProp &&
                    "onScroll" === JSCompiler_inline_result &&
                    listenToNonDelegatedEvent("scroll", current),
                  updatePayload ||
                    lastStyle === nextProp ||
                    (updatePayload = []))
                : "object" === typeof nextProp &&
                  null !== nextProp &&
                  nextProp.$$typeof === REACT_OPAQUE_ID_TYPE
                ? nextProp.toString()
                : (updatePayload = updatePayload || []).push(
                    JSCompiler_inline_result,
                    nextProp
                  ));
    }
    type && (updatePayload = updatePayload || []).push("style", type);
    var JSCompiler_inline_result = updatePayload;
    if ((workInProgress.updateQueue = JSCompiler_inline_result))
      workInProgress.flags |= 4;
  }
};
updateHostText$1 = function(current, workInProgress, oldText, newText) {
  oldText !== newText && (workInProgress.flags |= 4);
};
function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
  if (!isHydrating)
    switch (renderState.tailMode) {
      case "hidden":
        hasRenderedATailFallback = renderState.tail;
        for (var lastTailNode = null; null !== hasRenderedATailFallback; )
          null !== hasRenderedATailFallback.alternate &&
            (lastTailNode = hasRenderedATailFallback),
            (hasRenderedATailFallback = hasRenderedATailFallback.sibling);
        null === lastTailNode
          ? (renderState.tail = null)
          : (lastTailNode.sibling = null);
        break;
      case "collapsed":
        lastTailNode = renderState.tail;
        for (var lastTailNode$97 = null; null !== lastTailNode; )
          null !== lastTailNode.alternate && (lastTailNode$97 = lastTailNode),
            (lastTailNode = lastTailNode.sibling);
        null === lastTailNode$97
          ? hasRenderedATailFallback || null === renderState.tail
            ? (renderState.tail = null)
            : (renderState.tail.sibling = null)
          : (lastTailNode$97.sibling = null);
    }
}
function bubbleProperties(completedWork) {
  var didBailout =
      null !== completedWork.alternate &&
      completedWork.alternate.child === completedWork.child,
    newChildLanes = 0,
    subtreeFlags = 0;
  if (didBailout)
    for (var child$98 = completedWork.child; null !== child$98; )
      (newChildLanes |= child$98.lanes | child$98.childLanes),
        (subtreeFlags |= child$98.subtreeFlags & 262144),
        (subtreeFlags |= child$98.flags & 262144),
        (child$98.return = completedWork),
        (child$98 = child$98.sibling);
  else
    for (child$98 = completedWork.child; null !== child$98; )
      (newChildLanes |= child$98.lanes | child$98.childLanes),
        (subtreeFlags |= child$98.subtreeFlags),
        (subtreeFlags |= child$98.flags),
        (child$98.return = completedWork),
        (child$98 = child$98.sibling);
  completedWork.subtreeFlags |= subtreeFlags;
  completedWork.childLanes = newChildLanes;
  return didBailout;
}
function completeWork(current, workInProgress, renderLanes) {
  var newProps = workInProgress.pendingProps;
  switch (workInProgress.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return bubbleProperties(workInProgress), null;
    case 1:
      return bubbleProperties(workInProgress), null;
    case 3:
      newProps = workInProgress.stateNode;
      popRootCachePool(newProps, renderLanes);
      popProvider(CacheContext);
      popHostContainer();
      resetWorkInProgressVersions();
      newProps.pendingContext &&
        ((newProps.context = newProps.pendingContext),
        (newProps.pendingContext = null));
      if (null === current || null === current.child)
        popHydrationState(workInProgress)
          ? (workInProgress.flags |= 4)
          : newProps.hydrate || (workInProgress.flags |= 512);
      updateHostContainer(current, workInProgress);
      bubbleProperties(workInProgress);
      return null;
    case 5:
      popHostContext(workInProgress);
      var rootContainerInstance = requiredContext(
        rootInstanceStackCursor.current
      );
      renderLanes = workInProgress.type;
      if (null !== current && null != workInProgress.stateNode)
        updateHostComponent$1(
          current,
          workInProgress,
          renderLanes,
          newProps,
          rootContainerInstance
        ),
          current.ref !== workInProgress.ref && (workInProgress.flags |= 256);
      else {
        if (!newProps) {
          if (null === workInProgress.stateNode)
            throw Error(formatProdErrorMessage(166));
          bubbleProperties(workInProgress);
          return null;
        }
        current = requiredContext(contextStackCursor.current);
        if (popHydrationState(workInProgress)) {
          newProps = workInProgress.stateNode;
          renderLanes = workInProgress.type;
          var props = workInProgress.memoizedProps;
          newProps[internalInstanceKey] = workInProgress;
          newProps[internalPropsKey] = props;
          switch (renderLanes) {
            case "dialog":
              listenToNonDelegatedEvent("cancel", newProps);
              listenToNonDelegatedEvent("close", newProps);
              break;
            case "iframe":
            case "object":
            case "embed":
              listenToNonDelegatedEvent("load", newProps);
              break;
            case "video":
            case "audio":
              for (current = 0; current < mediaEventTypes.length; current++)
                listenToNonDelegatedEvent(mediaEventTypes[current], newProps);
              break;
            case "source":
              listenToNonDelegatedEvent("error", newProps);
              break;
            case "img":
            case "image":
            case "link":
              listenToNonDelegatedEvent("error", newProps);
              listenToNonDelegatedEvent("load", newProps);
              break;
            case "details":
              listenToNonDelegatedEvent("toggle", newProps);
              break;
            case "input":
              initWrapperState(newProps, props);
              listenToNonDelegatedEvent("invalid", newProps);
              break;
            case "select":
              newProps._wrapperState = { wasMultiple: !!props.multiple };
              listenToNonDelegatedEvent("invalid", newProps);
              break;
            case "textarea":
              initWrapperState$2(newProps, props),
                listenToNonDelegatedEvent("invalid", newProps);
          }
          assertValidProps(renderLanes, props);
          current = null;
          for (var propKey in props)
            props.hasOwnProperty(propKey) &&
              ((rootContainerInstance = props[propKey]),
              "children" === propKey
                ? "string" === typeof rootContainerInstance
                  ? newProps.textContent !== rootContainerInstance &&
                    (current = ["children", rootContainerInstance])
                  : "number" === typeof rootContainerInstance &&
                    newProps.textContent !== "" + rootContainerInstance &&
                    (current = ["children", "" + rootContainerInstance])
                : registrationNameDependencies.hasOwnProperty(propKey) &&
                  null != rootContainerInstance &&
                  "onScroll" === propKey &&
                  listenToNonDelegatedEvent("scroll", newProps));
          switch (renderLanes) {
            case "input":
              track(newProps);
              postMountWrapper(newProps, props, !0);
              break;
            case "textarea":
              track(newProps);
              postMountWrapper$3(newProps);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof props.onClick && (newProps.onclick = noop);
          }
          newProps = current;
          workInProgress.updateQueue = newProps;
          null !== newProps && (workInProgress.flags |= 4);
        } else {
          propKey =
            9 === rootContainerInstance.nodeType
              ? rootContainerInstance
              : rootContainerInstance.ownerDocument;
          current === Namespaces.html &&
            (current = getIntrinsicNamespace(renderLanes));
          current === Namespaces.html
            ? "script" === renderLanes
              ? ((current = propKey.createElement("div")),
                (current.innerHTML = "<script>\x3c/script>"),
                (current = current.removeChild(current.firstChild)))
              : "string" === typeof newProps.is
              ? (current = propKey.createElement(renderLanes, {
                  is: newProps.is
                }))
              : ((current = propKey.createElement(renderLanes)),
                "select" === renderLanes &&
                  ((propKey = current),
                  newProps.multiple
                    ? (propKey.multiple = !0)
                    : newProps.size && (propKey.size = newProps.size)))
            : (current = propKey.createElementNS(current, renderLanes));
          current[internalInstanceKey] = workInProgress;
          current[internalPropsKey] = newProps;
          appendAllChildren(current, workInProgress, !1, !1);
          workInProgress.stateNode = current;
          propKey = isCustomComponent(renderLanes, newProps);
          switch (renderLanes) {
            case "dialog":
              listenToNonDelegatedEvent("cancel", current);
              listenToNonDelegatedEvent("close", current);
              rootContainerInstance = newProps;
              break;
            case "iframe":
            case "object":
            case "embed":
              listenToNonDelegatedEvent("load", current);
              rootContainerInstance = newProps;
              break;
            case "video":
            case "audio":
              for (
                rootContainerInstance = 0;
                rootContainerInstance < mediaEventTypes.length;
                rootContainerInstance++
              )
                listenToNonDelegatedEvent(
                  mediaEventTypes[rootContainerInstance],
                  current
                );
              rootContainerInstance = newProps;
              break;
            case "source":
              listenToNonDelegatedEvent("error", current);
              rootContainerInstance = newProps;
              break;
            case "img":
            case "image":
            case "link":
              listenToNonDelegatedEvent("error", current);
              listenToNonDelegatedEvent("load", current);
              rootContainerInstance = newProps;
              break;
            case "details":
              listenToNonDelegatedEvent("toggle", current);
              rootContainerInstance = newProps;
              break;
            case "input":
              initWrapperState(current, newProps);
              rootContainerInstance = getHostProps(current, newProps);
              listenToNonDelegatedEvent("invalid", current);
              break;
            case "option":
              rootContainerInstance = getHostProps$1(current, newProps);
              break;
            case "select":
              current._wrapperState = { wasMultiple: !!newProps.multiple };
              rootContainerInstance = Object.assign({}, newProps, {
                value: void 0
              });
              listenToNonDelegatedEvent("invalid", current);
              break;
            case "textarea":
              initWrapperState$2(current, newProps);
              rootContainerInstance = getHostProps$3(current, newProps);
              listenToNonDelegatedEvent("invalid", current);
              break;
            default:
              rootContainerInstance = newProps;
          }
          assertValidProps(renderLanes, rootContainerInstance);
          var nextProps = rootContainerInstance;
          for (props in nextProps)
            if (nextProps.hasOwnProperty(props)) {
              var nextProp = nextProps[props];
              "style" === props
                ? setValueForStyles(current, nextProp)
                : "dangerouslySetInnerHTML" === props
                ? ((nextProp = nextProp ? nextProp.__html : void 0),
                  null != nextProp && setInnerHTML(current, nextProp))
                : "children" === props
                ? "string" === typeof nextProp
                  ? ("textarea" !== renderLanes || "" !== nextProp) &&
                    setTextContent(current, nextProp)
                  : "number" === typeof nextProp &&
                    setTextContent(current, "" + nextProp)
                : "suppressContentEditableWarning" !== props &&
                  "suppressHydrationWarning" !== props &&
                  "autoFocus" !== props &&
                  (registrationNameDependencies.hasOwnProperty(props)
                    ? null != nextProp &&
                      "onScroll" === props &&
                      listenToNonDelegatedEvent("scroll", current)
                    : null != nextProp &&
                      setValueForProperty(current, props, nextProp, propKey));
            }
          switch (renderLanes) {
            case "input":
              track(current);
              postMountWrapper(current, newProps, !1);
              break;
            case "textarea":
              track(current);
              postMountWrapper$3(current);
              break;
            case "option":
              null != newProps.value &&
                current.setAttribute(
                  "value",
                  "" + getToStringValue(newProps.value)
                );
              break;
            case "select":
              current.multiple = !!newProps.multiple;
              props = newProps.value;
              null != props
                ? updateOptions(current, !!newProps.multiple, props, !1)
                : null != newProps.defaultValue &&
                  updateOptions(
                    current,
                    !!newProps.multiple,
                    newProps.defaultValue,
                    !0
                  );
              break;
            default:
              "function" === typeof rootContainerInstance.onClick &&
                (current.onclick = noop);
          }
          shouldAutoFocusHostComponent(renderLanes, newProps) &&
            (workInProgress.flags |= 4);
        }
        null !== workInProgress.ref && (workInProgress.flags |= 256);
      }
      bubbleProperties(workInProgress);
      return null;
    case 6:
      if (current && null != workInProgress.stateNode)
        updateHostText$1(
          current,
          workInProgress,
          current.memoizedProps,
          newProps
        );
      else {
        if ("string" !== typeof newProps && null === workInProgress.stateNode)
          throw Error(formatProdErrorMessage(166));
        renderLanes = requiredContext(rootInstanceStackCursor.current);
        requiredContext(contextStackCursor.current);
        popHydrationState(workInProgress)
          ? ((newProps = workInProgress.stateNode),
            (renderLanes = workInProgress.memoizedProps),
            (newProps[internalInstanceKey] = workInProgress),
            newProps.nodeValue !== renderLanes && (workInProgress.flags |= 4))
          : ((newProps = (9 === renderLanes.nodeType
              ? renderLanes
              : renderLanes.ownerDocument
            ).createTextNode(newProps)),
            (newProps[internalInstanceKey] = workInProgress),
            (workInProgress.stateNode = newProps));
      }
      bubbleProperties(workInProgress);
      return null;
    case 13:
      pop(suspenseStackCursor);
      newProps = workInProgress.memoizedState;
      if (null !== newProps && null !== newProps.dehydrated) {
        if (null === current) {
          if (!popHydrationState(workInProgress))
            throw Error(formatProdErrorMessage(318));
          newProps = workInProgress.memoizedState;
          newProps = null !== newProps ? newProps.dehydrated : null;
          if (!newProps) throw Error(formatProdErrorMessage(317));
          newProps[internalInstanceKey] = workInProgress;
          markSpawnedWork(1073741824);
        } else
          resetHydrationState(),
            0 === (workInProgress.flags & 128) &&
              (workInProgress.memoizedState = null),
            (workInProgress.flags |= 4);
        bubbleProperties(workInProgress);
        return null;
      }
      if (0 !== (workInProgress.flags & 128))
        return (workInProgress.lanes = renderLanes), workInProgress;
      newProps = null !== newProps;
      renderLanes = !1;
      null === current
        ? void 0 !== workInProgress.memoizedProps.fallback &&
          popHydrationState(workInProgress)
        : (renderLanes = null !== current.memoizedState);
      newProps &&
        !renderLanes &&
        0 !== (workInProgress.mode & 1) &&
        ((null === current &&
          !0 !== workInProgress.memoizedProps.unstable_avoidThisFallback) ||
        0 !== (suspenseStackCursor.current & 1)
          ? 0 === workInProgressRootExitStatus &&
            (workInProgressRootExitStatus = 3)
          : renderDidSuspendDelayIfPossible());
      if (newProps || renderLanes) workInProgress.flags |= 4;
      null !== workInProgress.updateQueue &&
        null != workInProgress.memoizedProps.suspenseCallback &&
        (workInProgress.flags |= 4);
      bubbleProperties(workInProgress);
      return null;
    case 4:
      return (
        popHostContainer(),
        updateHostContainer(current, workInProgress),
        null === current &&
          listenToAllSupportedEvents(workInProgress.stateNode.containerInfo),
        bubbleProperties(workInProgress),
        null
      );
    case 10:
      return (
        popProvider(workInProgress.type._context),
        bubbleProperties(workInProgress),
        null
      );
    case 17:
      return bubbleProperties(workInProgress), null;
    case 19:
      pop(suspenseStackCursor);
      props = workInProgress.memoizedState;
      if (null === props) return bubbleProperties(workInProgress), null;
      newProps = 0 !== (workInProgress.flags & 128);
      propKey = props.rendering;
      if (null === propKey)
        if (newProps) cutOffTailIfNeeded(props, !1);
        else {
          if (
            0 !== workInProgressRootExitStatus ||
            (null !== current && 0 !== (current.flags & 128))
          )
            for (current = workInProgress.child; null !== current; ) {
              propKey = findFirstSuspended(current);
              if (null !== propKey) {
                workInProgress.flags |= 128;
                cutOffTailIfNeeded(props, !1);
                newProps = propKey.updateQueue;
                null !== newProps &&
                  ((workInProgress.updateQueue = newProps),
                  (workInProgress.flags |= 4));
                workInProgress.subtreeFlags = 0;
                newProps = renderLanes;
                for (renderLanes = workInProgress.child; null !== renderLanes; )
                  (props = renderLanes),
                    (current = newProps),
                    (props.flags &= 262146),
                    (propKey = props.alternate),
                    null === propKey
                      ? ((props.childLanes = 0),
                        (props.lanes = current),
                        (props.child = null),
                        (props.subtreeFlags = 0),
                        (props.memoizedProps = null),
                        (props.memoizedState = null),
                        (props.updateQueue = null),
                        (props.dependencies = null),
                        (props.stateNode = null))
                      : ((props.childLanes = propKey.childLanes),
                        (props.lanes = propKey.lanes),
                        (props.child = propKey.child),
                        (props.subtreeFlags = 0),
                        (props.deletions = null),
                        (props.memoizedProps = propKey.memoizedProps),
                        (props.memoizedState = propKey.memoizedState),
                        (props.updateQueue = propKey.updateQueue),
                        (props.type = propKey.type),
                        (current = propKey.dependencies),
                        (props.dependencies =
                          null === current
                            ? null
                            : {
                                lanes: current.lanes,
                                firstContext: current.firstContext
                              })),
                    (renderLanes = renderLanes.sibling);
                push(
                  suspenseStackCursor,
                  (suspenseStackCursor.current & 1) | 2
                );
                return workInProgress.child;
              }
              current = current.sibling;
            }
          null !== props.tail &&
            now() > workInProgressRootRenderTargetTime &&
            ((workInProgress.flags |= 128),
            (newProps = !0),
            cutOffTailIfNeeded(props, !1),
            (workInProgress.lanes = 8388608),
            markSpawnedWork(8388608));
        }
      else {
        if (!newProps)
          if (((current = findFirstSuspended(propKey)), null !== current)) {
            if (
              ((workInProgress.flags |= 128),
              (newProps = !0),
              (renderLanes = current.updateQueue),
              null !== renderLanes &&
                ((workInProgress.updateQueue = renderLanes),
                (workInProgress.flags |= 4)),
              cutOffTailIfNeeded(props, !0),
              null === props.tail &&
                "hidden" === props.tailMode &&
                !propKey.alternate &&
                !isHydrating)
            )
              return bubbleProperties(workInProgress), null;
          } else
            2 * now() - props.renderingStartTime >
              workInProgressRootRenderTargetTime &&
              1073741824 !== renderLanes &&
              ((workInProgress.flags |= 128),
              (newProps = !0),
              cutOffTailIfNeeded(props, !1),
              (workInProgress.lanes = 8388608),
              markSpawnedWork(8388608));
        props.isBackwards
          ? ((propKey.sibling = workInProgress.child),
            (workInProgress.child = propKey))
          : ((renderLanes = props.last),
            null !== renderLanes
              ? (renderLanes.sibling = propKey)
              : (workInProgress.child = propKey),
            (props.last = propKey));
      }
      if (null !== props.tail)
        return (
          (workInProgress = props.tail),
          (props.rendering = workInProgress),
          (props.tail = workInProgress.sibling),
          (props.renderingStartTime = now()),
          (workInProgress.sibling = null),
          (renderLanes = suspenseStackCursor.current),
          push(
            suspenseStackCursor,
            newProps ? (renderLanes & 1) | 2 : renderLanes & 1
          ),
          workInProgress
        );
      bubbleProperties(workInProgress);
      return null;
    case 21:
      return (
        null === current
          ? ((newProps = {
              DO_NOT_USE_queryAllNodes: DO_NOT_USE_queryAllNodes,
              DO_NOT_USE_queryFirstNode: DO_NOT_USE_queryFirstNode,
              containsNode: containsNode$1,
              getChildContextValues: getChildContextValues
            }),
            (workInProgress.stateNode = newProps),
            (newProps[internalInstanceKey] = workInProgress),
            null !== workInProgress.ref &&
              ((workInProgress.flags |= 256), (workInProgress.flags |= 4)))
          : (null !== workInProgress.ref && (workInProgress.flags |= 4),
            current.ref !== workInProgress.ref &&
              (workInProgress.flags |= 256)),
        bubbleProperties(workInProgress),
        null
      );
    case 22:
    case 23:
      return (
        popRenderLanes(),
        (renderLanes = null !== workInProgress.memoizedState),
        null !== current &&
          (null !== current.memoizedState) !== renderLanes &&
          "unstable-defer-without-hiding" !== newProps.mode &&
          (workInProgress.flags |= 4),
        (renderLanes &&
          0 === (subtreeRenderLanes & 1073741824) &&
          0 !== (workInProgress.mode & 1)) ||
          bubbleProperties(workInProgress),
        null !== workInProgress.updateQueue && popCachePool(),
        null
      );
    case 24:
      return popProvider(CacheContext), bubbleProperties(workInProgress), null;
  }
  throw Error(formatProdErrorMessage(156, workInProgress.tag));
}
function unwindWork(workInProgress, renderLanes) {
  switch (workInProgress.tag) {
    case 1:
      return (
        (renderLanes = workInProgress.flags),
        renderLanes & 16384
          ? ((workInProgress.flags = (renderLanes & -16385) | 128),
            workInProgress)
          : null
      );
    case 3:
      popRootCachePool(workInProgress.stateNode, renderLanes);
      popProvider(CacheContext);
      popHostContainer();
      resetWorkInProgressVersions();
      renderLanes = workInProgress.flags;
      if (0 !== (renderLanes & 128)) throw Error(formatProdErrorMessage(285));
      workInProgress.flags = (renderLanes & -16385) | 128;
      return workInProgress;
    case 5:
      return popHostContext(workInProgress), null;
    case 13:
      pop(suspenseStackCursor);
      renderLanes = workInProgress.memoizedState;
      if (null !== renderLanes && null !== renderLanes.dehydrated) {
        if (null === workInProgress.alternate)
          throw Error(formatProdErrorMessage(340));
        resetHydrationState();
      }
      renderLanes = workInProgress.flags;
      return renderLanes & 16384
        ? ((workInProgress.flags = (renderLanes & -16385) | 128),
          workInProgress)
        : null;
    case 19:
      return pop(suspenseStackCursor), null;
    case 4:
      return popHostContainer(), null;
    case 10:
      return popProvider(workInProgress.type._context), null;
    case 22:
    case 23:
      return (
        popRenderLanes(),
        null !== workInProgress.updateQueue && popCachePool(),
        null
      );
    case 24:
      return popProvider(CacheContext), null;
    default:
      return null;
  }
}
function createCapturedValue(value, source) {
  try {
    var info = "",
      node = source;
    do (info += describeFiber(node)), (node = node.return);
    while (node);
    var JSCompiler_inline_result = info;
  } catch (x) {
    JSCompiler_inline_result =
      "\nError generating stack: " + x.message + "\n" + x.stack;
  }
  return { value: value, source: source, stack: JSCompiler_inline_result };
}
var ReactFiberErrorDialogWWW = require("ReactFiberErrorDialog");
if ("function" !== typeof ReactFiberErrorDialogWWW.showErrorDialog)
  throw Error(formatProdErrorMessage(320));
function logCapturedError(boundary, errorInfo) {
  try {
    !1 !==
      ReactFiberErrorDialogWWW.showErrorDialog({
        componentStack: null !== errorInfo.stack ? errorInfo.stack : "",
        error: errorInfo.value,
        errorBoundary:
          null !== boundary && 1 === boundary.tag ? boundary.stateNode : null
      }) && console.error(errorInfo.value);
  } catch (e$116) {
    setTimeout(function() {
      throw e$116;
    });
  }
}
var PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map;
function createRootErrorUpdate(fiber, errorInfo, lane) {
  lane = createUpdate(-1, lane);
  lane.tag = 3;
  lane.payload = { element: null };
  var error = errorInfo.value;
  lane.callback = function() {
    hasUncaughtError || ((hasUncaughtError = !0), (firstUncaughtError = error));
    logCapturedError(fiber, errorInfo);
  };
  return lane;
}
function createClassErrorUpdate(fiber, errorInfo, lane) {
  lane = createUpdate(-1, lane);
  lane.tag = 3;
  var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
  if ("function" === typeof getDerivedStateFromError) {
    var error = errorInfo.value;
    lane.payload = function() {
      logCapturedError(fiber, errorInfo);
      return getDerivedStateFromError(error);
    };
  }
  var inst = fiber.stateNode;
  null !== inst &&
    "function" === typeof inst.componentDidCatch &&
    (lane.callback = function() {
      "function" !== typeof getDerivedStateFromError &&
        (null === legacyErrorBoundariesThatAlreadyFailed
          ? (legacyErrorBoundariesThatAlreadyFailed = new Set([this]))
          : legacyErrorBoundariesThatAlreadyFailed.add(this),
        logCapturedError(fiber, errorInfo));
      var stack = errorInfo.stack;
      this.componentDidCatch(errorInfo.value, {
        componentStack: null !== stack ? stack : ""
      });
    });
  return lane;
}
var PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set,
  nextEffect = null;
function safelyDetachRef(current, nearestMountedAncestor) {
  var ref = current.ref;
  if (null !== ref)
    if ("function" === typeof ref)
      try {
        ref(null);
      } catch (refError) {
        captureCommitPhaseError(current, nearestMountedAncestor, refError);
      }
    else ref.current = null;
}
var focusedInstanceHandle = null,
  shouldFireAfterActiveInstanceBlur = !1;
function commitBeforeMutationEffects(root, firstChild) {
  eventsEnabled = _enabled;
  root = getActiveElementDeep();
  if (hasSelectionCapabilities(root)) {
    if ("selectionStart" in root)
      var JSCompiler_temp = {
        start: root.selectionStart,
        end: root.selectionEnd
      };
    else
      a: {
        JSCompiler_temp =
          ((JSCompiler_temp = root.ownerDocument) &&
            JSCompiler_temp.defaultView) ||
          window;
        var selection =
          JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
        if (selection && 0 !== selection.rangeCount) {
          JSCompiler_temp = selection.anchorNode;
          var anchorOffset = selection.anchorOffset,
            focusNode = selection.focusNode;
          selection = selection.focusOffset;
          try {
            JSCompiler_temp.nodeType, focusNode.nodeType;
          } catch (e$22) {
            JSCompiler_temp = null;
            break a;
          }
          var length = 0,
            start = -1,
            end = -1,
            indexWithinAnchor = 0,
            indexWithinFocus = 0,
            node = root,
            parentNode = null;
          b: for (;;) {
            for (var next; ; ) {
              node !== JSCompiler_temp ||
                (0 !== anchorOffset && 3 !== node.nodeType) ||
                (start = length + anchorOffset);
              node !== focusNode ||
                (0 !== selection && 3 !== node.nodeType) ||
                (end = length + selection);
              3 === node.nodeType && (length += node.nodeValue.length);
              if (null === (next = node.firstChild)) break;
              parentNode = node;
              node = next;
            }
            for (;;) {
              if (node === root) break b;
              parentNode === JSCompiler_temp &&
                ++indexWithinAnchor === anchorOffset &&
                (start = length);
              parentNode === focusNode &&
                ++indexWithinFocus === selection &&
                (end = length);
              if (null !== (next = node.nextSibling)) break;
              node = parentNode;
              parentNode = node.parentNode;
            }
            node = next;
          }
          JSCompiler_temp =
            -1 === start || -1 === end ? null : { start: start, end: end };
        } else JSCompiler_temp = null;
      }
    JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
  } else JSCompiler_temp = null;
  selectionInformation = { focusedElem: root, selectionRange: JSCompiler_temp };
  root = null;
  JSCompiler_temp = selectionInformation.focusedElem;
  null !== JSCompiler_temp &&
    (root = getClosestInstanceFromNode(JSCompiler_temp));
  _enabled = !1;
  focusedInstanceHandle = root;
  for (nextEffect = firstChild; null !== nextEffect; ) {
    firstChild = nextEffect;
    root = firstChild.deletions;
    if (null !== root)
      for (
        JSCompiler_temp = 0;
        JSCompiler_temp < root.length;
        JSCompiler_temp++
      )
        (anchorOffset = root[JSCompiler_temp]),
          doesFiberContain(anchorOffset, focusedInstanceHandle) &&
            ((_enabled = shouldFireAfterActiveInstanceBlur = !0),
            dispatchBeforeDetachedBlur(
              selectionInformation.focusedElem,
              anchorOffset
            ),
            (_enabled = !1));
    root = firstChild.child;
    if (0 !== (firstChild.subtreeFlags & 4628) && null !== root)
      (root.return = firstChild), (nextEffect = root);
    else
      for (; null !== nextEffect; ) {
        firstChild = nextEffect;
        try {
          var current = firstChild.alternate,
            flags = firstChild.flags,
            JSCompiler_temp$jscomp$0;
          if (
            (JSCompiler_temp$jscomp$0 =
              !shouldFireAfterActiveInstanceBlur &&
              null !== focusedInstanceHandle)
          ) {
            var JSCompiler_temp$jscomp$1;
            if ((JSCompiler_temp$jscomp$1 = 13 === firstChild.tag))
              a: {
                if (null !== current) {
                  var oldState = current.memoizedState;
                  if (null === oldState || null !== oldState.dehydrated) {
                    var newState = firstChild.memoizedState;
                    JSCompiler_temp$jscomp$1 =
                      null !== newState && null === newState.dehydrated;
                    break a;
                  }
                }
                JSCompiler_temp$jscomp$1 = !1;
              }
            JSCompiler_temp$jscomp$0 =
              JSCompiler_temp$jscomp$1 &&
              doesFiberContain(firstChild, focusedInstanceHandle);
          }
          JSCompiler_temp$jscomp$0 &&
            ((shouldFireAfterActiveInstanceBlur = !0),
            (root = firstChild),
            (_enabled = !0),
            dispatchBeforeDetachedBlur(selectionInformation.focusedElem, root),
            (_enabled = !1));
          if (0 !== (flags & 512))
            switch (firstChild.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== current) {
                  var prevProps = current.memoizedProps,
                    prevState = current.memoizedState,
                    instance = firstChild.stateNode,
                    snapshot = instance.getSnapshotBeforeUpdate(
                      firstChild.elementType === firstChild.type
                        ? prevProps
                        : resolveDefaultProps(firstChild.type, prevProps),
                      prevState
                    );
                  instance.__reactInternalSnapshotBeforeUpdate = snapshot;
                }
                break;
              case 3:
                clearContainer(firstChild.stateNode.containerInfo);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(formatProdErrorMessage(163));
            }
        } catch (error) {
          captureCommitPhaseError(firstChild, firstChild.return, error);
        }
        root = firstChild.sibling;
        if (null !== root) {
          root.return = firstChild.return;
          nextEffect = root;
          break;
        }
        nextEffect = firstChild.return;
      }
  }
  current = shouldFireAfterActiveInstanceBlur;
  shouldFireAfterActiveInstanceBlur = !1;
  focusedInstanceHandle = null;
  return current;
}
function commitHookEffectListUnmount(
  flags,
  finishedWork,
  nearestMountedAncestor$jscomp$0
) {
  var updateQueue = finishedWork.updateQueue;
  updateQueue = null !== updateQueue ? updateQueue.lastEffect : null;
  if (null !== updateQueue) {
    var effect = (updateQueue = updateQueue.next);
    do {
      if ((effect.tag & flags) === flags) {
        var destroy = effect.destroy;
        effect.destroy = void 0;
        if (void 0 !== destroy) {
          var current = finishedWork,
            nearestMountedAncestor = nearestMountedAncestor$jscomp$0;
          try {
            destroy();
          } catch (error) {
            captureCommitPhaseError(current, nearestMountedAncestor, error);
          }
        }
      }
      effect = effect.next;
    } while (effect !== updateQueue);
  }
}
function commitHookEffectListMount(tag, finishedWork) {
  finishedWork = finishedWork.updateQueue;
  finishedWork = null !== finishedWork ? finishedWork.lastEffect : null;
  if (null !== finishedWork) {
    var effect = (finishedWork = finishedWork.next);
    do {
      if ((effect.tag & tag) === tag) {
        var create = effect.create;
        effect.destroy = create();
      }
      effect = effect.next;
    } while (effect !== finishedWork);
  }
}
function hideOrUnhideAllChildren(finishedWork, isHidden) {
  for (var node = finishedWork; ; ) {
    if (5 === node.tag) {
      var instance = node.stateNode;
      if (isHidden)
        (instance = instance.style),
          "function" === typeof instance.setProperty
            ? instance.setProperty("display", "none", "important")
            : (instance.display = "none");
      else {
        instance = node.stateNode;
        var styleProp = node.memoizedProps.style;
        styleProp =
          void 0 !== styleProp &&
          null !== styleProp &&
          styleProp.hasOwnProperty("display")
            ? styleProp.display
            : null;
        instance.style.display = dangerousStyleValue("display", styleProp);
      }
    } else if (6 === node.tag)
      node.stateNode.nodeValue = isHidden ? "" : node.memoizedProps;
    else if (
      ((22 !== node.tag && 23 !== node.tag) ||
        null === node.memoizedState ||
        node === finishedWork) &&
      null !== node.child
    ) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === finishedWork) break;
    for (; null === node.sibling; ) {
      if (null === node.return || node.return === finishedWork) return;
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
}
function commitAttachRef(finishedWork) {
  var ref = finishedWork.ref;
  if (null !== ref) {
    var instance = finishedWork.stateNode;
    switch (finishedWork.tag) {
      case 5:
        var instanceToUse = instance;
        break;
      default:
        instanceToUse = instance;
    }
    21 === finishedWork.tag && (instanceToUse = instance);
    "function" === typeof ref
      ? ref(instanceToUse)
      : (ref.current = instanceToUse);
  }
}
function commitUnmount(finishedRoot, current, nearestMountedAncestor$jscomp$0) {
  if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
    try {
      injectedHook.onCommitFiberUnmount(rendererID, current);
    } catch (err) {}
  switch (current.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      finishedRoot = current.updateQueue;
      if (
        null !== finishedRoot &&
        ((finishedRoot = finishedRoot.lastEffect), null !== finishedRoot)
      ) {
        var effect = (finishedRoot = finishedRoot.next);
        do {
          var _effect = effect,
            destroy = _effect.destroy;
          _effect = _effect.tag;
          if (void 0 !== destroy && 0 !== (_effect & 2)) {
            _effect = current;
            var nearestMountedAncestor = nearestMountedAncestor$jscomp$0;
            try {
              destroy();
            } catch (error) {
              captureCommitPhaseError(_effect, nearestMountedAncestor, error);
            }
          }
          effect = effect.next;
        } while (effect !== finishedRoot);
      }
      break;
    case 1:
      safelyDetachRef(current, nearestMountedAncestor$jscomp$0);
      finishedRoot = current.stateNode;
      if ("function" === typeof finishedRoot.componentWillUnmount)
        try {
          (finishedRoot.props = current.memoizedProps),
            (finishedRoot.state = current.memoizedState),
            finishedRoot.componentWillUnmount();
        } catch (unmountError) {
          captureCommitPhaseError(
            current,
            nearestMountedAncestor$jscomp$0,
            unmountError
          );
        }
      break;
    case 5:
      safelyDetachRef(current, nearestMountedAncestor$jscomp$0);
      break;
    case 4:
      unmountHostComponents(
        finishedRoot,
        current,
        nearestMountedAncestor$jscomp$0
      );
      break;
    case 18:
      nearestMountedAncestor$jscomp$0 = finishedRoot.hydrationCallbacks;
      null !== nearestMountedAncestor$jscomp$0 &&
        (nearestMountedAncestor$jscomp$0 =
          nearestMountedAncestor$jscomp$0.onDeleted) &&
        nearestMountedAncestor$jscomp$0(current.stateNode);
      break;
    case 21:
      safelyDetachRef(current, nearestMountedAncestor$jscomp$0);
  }
}
function detachFiberAfterEffects(fiber) {
  fiber.alternate = null;
  fiber.child = null;
  fiber.deletions = null;
  fiber.dependencies = null;
  fiber.memoizedProps = null;
  fiber.memoizedState = null;
  fiber.pendingProps = null;
  fiber.sibling = null;
  fiber.stateNode = null;
  fiber.updateQueue = null;
}
function isHostParent(fiber) {
  return 5 === fiber.tag || 3 === fiber.tag || 4 === fiber.tag;
}
function commitPlacement(finishedWork) {
  a: {
    for (var parent = finishedWork.return; null !== parent; ) {
      if (isHostParent(parent)) break a;
      parent = parent.return;
    }
    throw Error(formatProdErrorMessage(160));
  }
  var parentFiber = parent;
  parent = parentFiber.stateNode;
  switch (parentFiber.tag) {
    case 5:
      var isContainer = !1;
      break;
    case 3:
      parent = parent.containerInfo;
      isContainer = !0;
      break;
    case 4:
      parent = parent.containerInfo;
      isContainer = !0;
      break;
    default:
      throw Error(formatProdErrorMessage(161));
  }
  parentFiber.flags & 32 &&
    (setTextContent(parent, ""), (parentFiber.flags &= -33));
  a: b: for (parentFiber = finishedWork; ; ) {
    for (; null === parentFiber.sibling; ) {
      if (null === parentFiber.return || isHostParent(parentFiber.return)) {
        parentFiber = null;
        break a;
      }
      parentFiber = parentFiber.return;
    }
    parentFiber.sibling.return = parentFiber.return;
    for (
      parentFiber = parentFiber.sibling;
      5 !== parentFiber.tag && 6 !== parentFiber.tag && 18 !== parentFiber.tag;

    ) {
      if (parentFiber.flags & 2) continue b;
      if (null === parentFiber.child || 4 === parentFiber.tag) continue b;
      else
        (parentFiber.child.return = parentFiber),
          (parentFiber = parentFiber.child);
    }
    if (!(parentFiber.flags & 2)) {
      parentFiber = parentFiber.stateNode;
      break a;
    }
  }
  isContainer
    ? insertOrAppendPlacementNodeIntoContainer(
        finishedWork,
        parentFiber,
        parent
      )
    : insertOrAppendPlacementNode(finishedWork, parentFiber, parent);
}
function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
  var tag = node.tag,
    isHost = 5 === tag || 6 === tag;
  if (isHost)
    (node = isHost ? node.stateNode : node.stateNode.instance),
      before
        ? 8 === parent.nodeType
          ? parent.parentNode.insertBefore(node, before)
          : parent.insertBefore(node, before)
        : (8 === parent.nodeType
            ? ((before = parent.parentNode), before.insertBefore(node, parent))
            : ((before = parent), before.appendChild(node)),
          (parent = parent._reactRootContainer),
          (null !== parent && void 0 !== parent) ||
            null !== before.onclick ||
            (before.onclick = noop));
  else if (4 !== tag && ((node = node.child), null !== node))
    for (
      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
        node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
        (node = node.sibling);
}
function insertOrAppendPlacementNode(node, before, parent) {
  var tag = node.tag,
    isHost = 5 === tag || 6 === tag;
  if (isHost)
    (node = isHost ? node.stateNode : node.stateNode.instance),
      before ? parent.insertBefore(node, before) : parent.appendChild(node);
  else if (4 !== tag && ((node = node.child), null !== node))
    for (
      insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNode(node, before, parent), (node = node.sibling);
}
function unmountHostComponents(
  finishedRoot$jscomp$0,
  current,
  nearestMountedAncestor$jscomp$0
) {
  for (
    var node = current,
      currentParentIsValid = !1,
      currentParent,
      currentParentIsContainer;
    ;

  ) {
    if (!currentParentIsValid) {
      currentParentIsValid = node.return;
      a: for (;;) {
        if (null === currentParentIsValid)
          throw Error(formatProdErrorMessage(160));
        currentParent = currentParentIsValid.stateNode;
        switch (currentParentIsValid.tag) {
          case 5:
            currentParentIsContainer = !1;
            break a;
          case 3:
            currentParent = currentParent.containerInfo;
            currentParentIsContainer = !0;
            break a;
          case 4:
            currentParent = currentParent.containerInfo;
            currentParentIsContainer = !0;
            break a;
        }
        currentParentIsValid = currentParentIsValid.return;
      }
      currentParentIsValid = !0;
    }
    if (5 === node.tag || 6 === node.tag) {
      a: for (
        var finishedRoot = finishedRoot$jscomp$0,
          root = node,
          nearestMountedAncestor = nearestMountedAncestor$jscomp$0,
          node$jscomp$0 = root;
        ;

      )
        if (
          (commitUnmount(finishedRoot, node$jscomp$0, nearestMountedAncestor),
          null !== node$jscomp$0.child && 4 !== node$jscomp$0.tag)
        )
          (node$jscomp$0.child.return = node$jscomp$0),
            (node$jscomp$0 = node$jscomp$0.child);
        else {
          if (node$jscomp$0 === root) break a;
          for (; null === node$jscomp$0.sibling; ) {
            if (null === node$jscomp$0.return || node$jscomp$0.return === root)
              break a;
            node$jscomp$0 = node$jscomp$0.return;
          }
          node$jscomp$0.sibling.return = node$jscomp$0.return;
          node$jscomp$0 = node$jscomp$0.sibling;
        }
      currentParentIsContainer
        ? ((finishedRoot = currentParent),
          (root = node.stateNode),
          8 === finishedRoot.nodeType
            ? finishedRoot.parentNode.removeChild(root)
            : finishedRoot.removeChild(root))
        : currentParent.removeChild(node.stateNode);
    } else if (18 === node.tag)
      (finishedRoot = finishedRoot$jscomp$0.hydrationCallbacks),
        null !== finishedRoot &&
          (finishedRoot = finishedRoot.onDeleted) &&
          finishedRoot(node.stateNode),
        currentParentIsContainer
          ? ((finishedRoot = currentParent),
            (root = node.stateNode),
            8 === finishedRoot.nodeType
              ? clearSuspenseBoundary(finishedRoot.parentNode, root)
              : 1 === finishedRoot.nodeType &&
                clearSuspenseBoundary(finishedRoot, root),
            retryIfBlockedOn(finishedRoot))
          : clearSuspenseBoundary(currentParent, node.stateNode);
    else if (4 === node.tag) {
      if (null !== node.child) {
        currentParent = node.stateNode.containerInfo;
        currentParentIsContainer = !0;
        node.child.return = node;
        node = node.child;
        continue;
      }
    } else if (
      (commitUnmount(
        finishedRoot$jscomp$0,
        node,
        nearestMountedAncestor$jscomp$0
      ),
      null !== node.child)
    ) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === current) break;
    for (; null === node.sibling; ) {
      if (null === node.return || node.return === current) return;
      node = node.return;
      4 === node.tag && (currentParentIsValid = !1);
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
}
function commitWork(current, finishedWork) {
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      commitHookEffectListUnmount(3, finishedWork, finishedWork.return);
      return;
    case 1:
      return;
    case 5:
      var instance = finishedWork.stateNode;
      if (null != instance) {
        var newProps = finishedWork.memoizedProps,
          oldProps = null !== current ? current.memoizedProps : newProps;
        current = finishedWork.type;
        var updatePayload = finishedWork.updateQueue;
        finishedWork.updateQueue = null;
        if (null !== updatePayload) {
          instance[internalPropsKey] = newProps;
          "input" === current &&
            "radio" === newProps.type &&
            null != newProps.name &&
            updateChecked(instance, newProps);
          isCustomComponent(current, oldProps);
          finishedWork = isCustomComponent(current, newProps);
          for (oldProps = 0; oldProps < updatePayload.length; oldProps += 2) {
            var propKey = updatePayload[oldProps],
              propValue = updatePayload[oldProps + 1];
            "style" === propKey
              ? setValueForStyles(instance, propValue)
              : "dangerouslySetInnerHTML" === propKey
              ? setInnerHTML(instance, propValue)
              : "children" === propKey
              ? setTextContent(instance, propValue)
              : setValueForProperty(instance, propKey, propValue, finishedWork);
          }
          switch (current) {
            case "input":
              updateWrapper(instance, newProps);
              break;
            case "textarea":
              updateWrapper$1(instance, newProps);
              break;
            case "select":
              (finishedWork = instance._wrapperState.wasMultiple),
                (instance._wrapperState.wasMultiple = !!newProps.multiple),
                (current = newProps.value),
                null != current
                  ? updateOptions(instance, !!newProps.multiple, current, !1)
                  : finishedWork !== !!newProps.multiple &&
                    (null != newProps.defaultValue
                      ? updateOptions(
                          instance,
                          !!newProps.multiple,
                          newProps.defaultValue,
                          !0
                        )
                      : updateOptions(
                          instance,
                          !!newProps.multiple,
                          newProps.multiple ? [] : "",
                          !1
                        ));
          }
        }
      }
      return;
    case 6:
      if (null === finishedWork.stateNode)
        throw Error(formatProdErrorMessage(162));
      finishedWork.stateNode.nodeValue = finishedWork.memoizedProps;
      return;
    case 3:
      instance = finishedWork.stateNode;
      instance.hydrate &&
        ((instance.hydrate = !1), retryIfBlockedOn(instance.containerInfo));
      return;
    case 12:
      return;
    case 13:
      instance = finishedWork.memoizedState;
      null !== instance &&
        ((globalMostRecentFallbackTime = now()),
        hideOrUnhideAllChildren(finishedWork.child, !0));
      null !== instance &&
        ((instance = finishedWork.memoizedProps.suspenseCallback),
        "function" === typeof instance &&
          ((newProps = finishedWork.updateQueue),
          null !== newProps && instance(new Set(newProps))));
      attachSuspenseRetryListeners(finishedWork);
      return;
    case 19:
      attachSuspenseRetryListeners(finishedWork);
      return;
    case 17:
      return;
    case 21:
      finishedWork.stateNode[internalInstanceKey] = finishedWork;
      return;
    case 22:
    case 23:
      hideOrUnhideAllChildren(
        finishedWork,
        null !== finishedWork.memoizedState
      );
      return;
  }
  throw Error(formatProdErrorMessage(163));
}
function attachSuspenseRetryListeners(finishedWork) {
  var wakeables = finishedWork.updateQueue;
  if (null !== wakeables) {
    finishedWork.updateQueue = null;
    var retryCache = finishedWork.stateNode;
    null === retryCache &&
      (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
    wakeables.forEach(function(wakeable) {
      var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
      retryCache.has(wakeable) ||
        (!0 !== wakeable.__reactDoNotTraceInteractions &&
          (retry = tracing.unstable_wrap(retry)),
        retryCache.add(wakeable),
        wakeable.then(retry, retry));
    });
  }
}
function commitMutationEffects(root, renderPriorityLevel, firstChild) {
  for (nextEffect = firstChild; null !== nextEffect; ) {
    renderPriorityLevel = nextEffect;
    firstChild = renderPriorityLevel.deletions;
    if (null !== firstChild)
      for (var i = 0; i < firstChild.length; i++) {
        var childToDelete = firstChild[i];
        try {
          unmountHostComponents(root, childToDelete, renderPriorityLevel);
          var alternate = childToDelete.alternate;
          childToDelete.return = null;
          null !== alternate && (alternate.return = null);
        } catch (error) {
          captureCommitPhaseError(childToDelete, renderPriorityLevel, error);
        }
      }
    firstChild = renderPriorityLevel.child;
    if (0 !== (renderPriorityLevel.subtreeFlags & 6454) && null !== firstChild)
      (firstChild.return = renderPriorityLevel), (nextEffect = firstChild);
    else
      for (; null !== nextEffect; ) {
        renderPriorityLevel = nextEffect;
        try {
          var flags = renderPriorityLevel.flags;
          flags & 32 && setTextContent(renderPriorityLevel.stateNode, "");
          if (flags & 256) {
            var current = renderPriorityLevel.alternate;
            if (null !== current) {
              var currentRef = current.ref;
              null !== currentRef &&
                ("function" === typeof currentRef
                  ? currentRef(null)
                  : (currentRef.current = null));
            }
            21 === renderPriorityLevel.tag &&
              commitAttachRef(renderPriorityLevel);
          }
          switch (flags & 2054) {
            case 2:
              commitPlacement(renderPriorityLevel);
              renderPriorityLevel.flags &= -3;
              break;
            case 6:
              commitPlacement(renderPriorityLevel);
              renderPriorityLevel.flags &= -3;
              commitWork(renderPriorityLevel.alternate, renderPriorityLevel);
              break;
            case 2048:
              renderPriorityLevel.flags &= -2049;
              break;
            case 2052:
              renderPriorityLevel.flags &= -2049;
              commitWork(renderPriorityLevel.alternate, renderPriorityLevel);
              break;
            case 4:
              commitWork(renderPriorityLevel.alternate, renderPriorityLevel);
          }
        } catch (error) {
          captureCommitPhaseError(
            renderPriorityLevel,
            renderPriorityLevel.return,
            error
          );
        }
        firstChild = renderPriorityLevel.sibling;
        if (null !== firstChild) {
          firstChild.return = renderPriorityLevel.return;
          nextEffect = firstChild;
          break;
        }
        nextEffect = renderPriorityLevel.return;
      }
  }
}
function commitLayoutEffects(finishedWork, root) {
  for (nextEffect = finishedWork; null !== nextEffect; ) {
    var fiber = nextEffect,
      firstChild = fiber.child;
    if (0 !== (fiber.subtreeFlags & 324) && null !== firstChild)
      (firstChild.return = fiber), (nextEffect = firstChild);
    else
      for (fiber = finishedWork, firstChild = root; null !== nextEffect; ) {
        var fiber$jscomp$0 = nextEffect;
        if (0 !== (fiber$jscomp$0.flags & 324)) {
          var current = fiber$jscomp$0.alternate;
          try {
            var finishedRoot = firstChild;
            if (0 !== (fiber$jscomp$0.flags & 68))
              switch (fiber$jscomp$0.tag) {
                case 0:
                case 11:
                case 15:
                  commitHookEffectListMount(3, fiber$jscomp$0);
                  break;
                case 1:
                  var instance = fiber$jscomp$0.stateNode;
                  if (fiber$jscomp$0.flags & 4)
                    if (null === current) instance.componentDidMount();
                    else {
                      var prevProps =
                        fiber$jscomp$0.elementType === fiber$jscomp$0.type
                          ? current.memoizedProps
                          : resolveDefaultProps(
                              fiber$jscomp$0.type,
                              current.memoizedProps
                            );
                      instance.componentDidUpdate(
                        prevProps,
                        current.memoizedState,
                        instance.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  var updateQueue = fiber$jscomp$0.updateQueue;
                  null !== updateQueue &&
                    commitUpdateQueue(fiber$jscomp$0, updateQueue, instance);
                  break;
                case 3:
                  var updateQueue$124 = fiber$jscomp$0.updateQueue;
                  if (null !== updateQueue$124) {
                    current = null;
                    if (null !== fiber$jscomp$0.child)
                      switch (fiber$jscomp$0.child.tag) {
                        case 5:
                          current = fiber$jscomp$0.child.stateNode;
                          break;
                        case 1:
                          current = fiber$jscomp$0.child.stateNode;
                      }
                    commitUpdateQueue(fiber$jscomp$0, updateQueue$124, current);
                  }
                  break;
                case 5:
                  var instance$126 = fiber$jscomp$0.stateNode;
                  null === current &&
                    fiber$jscomp$0.flags & 4 &&
                    ((current = instance$126),
                    shouldAutoFocusHostComponent(
                      fiber$jscomp$0.type,
                      fiber$jscomp$0.memoizedProps
                    ) && current.focus());
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  current = finishedRoot;
                  if (null === fiber$jscomp$0.memoizedState) {
                    var current$jscomp$0 = fiber$jscomp$0.alternate;
                    if (null !== current$jscomp$0) {
                      var prevState = current$jscomp$0.memoizedState;
                      if (null !== prevState) {
                        var suspenseInstance = prevState.dehydrated;
                        if (null !== suspenseInstance) {
                          retryIfBlockedOn(suspenseInstance);
                          var hydrationCallbacks = current.hydrationCallbacks;
                          if (null !== hydrationCallbacks) {
                            var onHydrated = hydrationCallbacks.onHydrated;
                            onHydrated && onHydrated(suspenseInstance);
                          }
                        }
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                  break;
                default:
                  throw Error(formatProdErrorMessage(163));
              }
            fiber$jscomp$0.flags & 256 &&
              21 !== fiber$jscomp$0.tag &&
              commitAttachRef(fiber$jscomp$0);
          } catch (error) {
            captureCommitPhaseError(
              fiber$jscomp$0,
              fiber$jscomp$0.return,
              error
            );
          }
        }
        if (fiber$jscomp$0 === fiber) {
          nextEffect = null;
          break;
        }
        current = fiber$jscomp$0.sibling;
        if (null !== current) {
          current.return = fiber$jscomp$0.return;
          nextEffect = current;
          break;
        }
        nextEffect = fiber$jscomp$0.return;
      }
  }
}
var ceil = Math.ceil,
  ReactCurrentDispatcher$2 = ReactSharedInternals.ReactCurrentDispatcher,
  ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner,
  executionContext = 0,
  workInProgressRoot = null,
  workInProgress = null,
  workInProgressRootRenderLanes = 0,
  subtreeRenderLanes = 0,
  subtreeRenderLanesCursor = { current: 0 },
  workInProgressRootExitStatus = 0,
  workInProgressRootFatalError = null,
  workInProgressRootSkippedLanes = 0,
  workInProgressRootUpdatedLanes = 0,
  workInProgressRootPingedLanes = 0,
  globalMostRecentFallbackTime = 0,
  workInProgressRootRenderTargetTime = Infinity;
function resetRenderTimer() {
  workInProgressRootRenderTargetTime = now() + 500;
}
var hasUncaughtError = !1,
  firstUncaughtError = null,
  legacyErrorBoundariesThatAlreadyFailed = null,
  rootDoesHavePassiveEffects = !1,
  rootWithPendingPassiveEffects = null,
  pendingPassiveEffectsRenderPriority = 0,
  pendingPassiveEffectsLanes = 0,
  nestedUpdateCount = 0,
  rootWithNestedUpdates = null,
  spawnedWorkDuringRender = null,
  currentEventTime = -1,
  currentEventTransitionLane = 0;
function requestEventTime() {
  return 0 !== (executionContext & 24)
    ? now()
    : -1 !== currentEventTime
    ? currentEventTime
    : (currentEventTime = now());
}
function requestUpdateLane(fiber) {
  fiber = fiber.mode;
  if (0 === (fiber & 1)) return 1;
  if (0 === (fiber & 1)) return 15 === currentUpdateLanePriority ? 1 : 2;
  if (
    !deferRenderPhaseUpdateToNextBatch &&
    0 !== (executionContext & 8) &&
    0 !== workInProgressRootRenderLanes
  )
    return workInProgressRootRenderLanes & -workInProgressRootRenderLanes;
  if (0 !== ReactCurrentBatchConfig.transition)
    return (
      0 === currentEventTransitionLane &&
        ((fiber = nextTransitionLane),
        (nextTransitionLane <<= 1),
        0 === (nextTransitionLane & 8388096) && (nextTransitionLane = 512),
        (currentEventTransitionLane = fiber)),
      currentEventTransitionLane
    );
  fiber = currentUpdateLanePriority;
  if (0 !== fiber) return findUpdateLane(fiber);
  fiber = window.event;
  fiber = void 0 === fiber ? 8 : getEventPriority(fiber.type);
  return findUpdateLane(fiber);
}
function scheduleUpdateOnFiber(fiber, lane, eventTime) {
  if (50 < nestedUpdateCount)
    throw ((nestedUpdateCount = 0),
    (rootWithNestedUpdates = null),
    Error(formatProdErrorMessage(185)));
  fiber = markUpdateLaneFromFiberToRoot(fiber, lane);
  if (null === fiber) return null;
  markRootUpdated(fiber, lane, eventTime);
  if (fiber === workInProgressRoot) {
    if (deferRenderPhaseUpdateToNextBatch || 0 === (executionContext & 8))
      workInProgressRootUpdatedLanes |= lane;
    4 === workInProgressRootExitStatus &&
      markRootSuspended$1(fiber, workInProgressRootRenderLanes);
  }
  1 === lane
    ? 0 !== (executionContext & 4) && 0 === (executionContext & 24)
      ? (schedulePendingInteractions(fiber, lane), performSyncWorkOnRoot(fiber))
      : (ensureRootIsScheduled(fiber, eventTime),
        schedulePendingInteractions(fiber, lane),
        0 === executionContext &&
          (resetRenderTimer(), flushSyncCallbackQueue()))
    : (ensureRootIsScheduled(fiber, eventTime),
      schedulePendingInteractions(fiber, lane));
  return fiber;
}
function markUpdateLaneFromFiberToRoot(sourceFiber, lane) {
  sourceFiber.lanes |= lane;
  var alternate = sourceFiber.alternate;
  null !== alternate && (alternate.lanes |= lane);
  alternate = sourceFiber;
  for (sourceFiber = sourceFiber.return; null !== sourceFiber; )
    (sourceFiber.childLanes |= lane),
      (alternate = sourceFiber.alternate),
      null !== alternate && (alternate.childLanes |= lane),
      (alternate = sourceFiber),
      (sourceFiber = sourceFiber.return);
  return 3 === alternate.tag ? alternate.stateNode : null;
}
function ensureRootIsScheduled(root, currentTime) {
  for (
    var existingCallbackNode = root.callbackNode,
      suspendedLanes = root.suspendedLanes,
      pingedLanes = root.pingedLanes,
      expirationTimes = root.expirationTimes,
      lanes = root.pendingLanes;
    0 < lanes;

  ) {
    var index$16 = 31 - clz32(lanes),
      lane = 1 << index$16,
      expirationTime = expirationTimes[index$16];
    if (-1 === expirationTime) {
      if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes)) {
        expirationTime = currentTime;
        getHighestPriorityLanes(lane);
        var priority = return_highestLanePriority;
        expirationTimes[index$16] =
          10 <= priority
            ? expirationTime + 250
            : 6 <= priority
            ? expirationTime + 5e3
            : -1;
      }
    } else expirationTime <= currentTime && (root.expiredLanes |= lane);
    lanes &= ~lane;
  }
  suspendedLanes = getNextLanes(
    root,
    root === workInProgressRoot ? workInProgressRootRenderLanes : 0
  );
  currentTime = return_highestLanePriority;
  0 === suspendedLanes
    ? (null !== existingCallbackNode &&
        Scheduler_cancelCallback(existingCallbackNode),
      (root.callbackNode = null),
      (root.callbackPriority = 0))
    : root.callbackPriority !== currentTime &&
      (null != existingCallbackNode &&
        Scheduler_cancelCallback(existingCallbackNode),
      15 === currentTime
        ? ((existingCallbackNode = performSyncWorkOnRoot.bind(null, root)),
          null === syncQueue
            ? ((syncQueue = [existingCallbackNode]),
              enableSyncMicroTasks
                ? scheduleMicrotask(flushSyncCallbackQueueImpl)
                : (immediateQueueCallbackNode = Scheduler_scheduleCallback(
                    Scheduler_ImmediatePriority,
                    flushSyncCallbackQueueImpl
                  )))
            : syncQueue.push(existingCallbackNode),
          (existingCallbackNode = null))
        : 14 === currentTime
        ? (existingCallbackNode = scheduleCallback(
            99,
            performSyncWorkOnRoot.bind(null, root)
          ))
        : ((existingCallbackNode = lanePriorityToSchedulerPriority(
            currentTime
          )),
          (existingCallbackNode = scheduleCallback(
            existingCallbackNode,
            performConcurrentWorkOnRoot.bind(null, root)
          ))),
      (root.callbackPriority = currentTime),
      (root.callbackNode = existingCallbackNode));
}
function performConcurrentWorkOnRoot(root, didTimeout) {
  currentEventTime = -1;
  currentEventTransitionLane = 0;
  if (0 !== (executionContext & 24)) throw Error(formatProdErrorMessage(327));
  var originalCallbackNode = root.callbackNode;
  if (flushPassiveEffects() && root.callbackNode !== originalCallbackNode)
    return null;
  var lanes = getNextLanes(
    root,
    root === workInProgressRoot ? workInProgressRootRenderLanes : 0
  );
  if (0 === lanes) return null;
  if (!disableSchedulerTimeoutInWorkLoop && didTimeout)
    return (
      (root.expiredLanes |= lanes & root.pendingLanes),
      ensureRootIsScheduled(root, now()),
      null
    );
  var lanes$jscomp$0 = lanes;
  didTimeout = executionContext;
  executionContext |= 8;
  var prevDispatcher = pushDispatcher();
  if (
    workInProgressRoot !== root ||
    workInProgressRootRenderLanes !== lanes$jscomp$0
  )
    resetRenderTimer(),
      prepareFreshStack(root, lanes$jscomp$0),
      startWorkOnPendingInteractions(root, lanes$jscomp$0);
  lanes$jscomp$0 = pushInteractions(root);
  do
    try {
      workLoopConcurrent();
      break;
    } catch (thrownValue) {
      handleError(root, thrownValue);
    }
  while (1);
  resetContextDependencies();
  tracing.__interactionsRef.current = lanes$jscomp$0;
  ReactCurrentDispatcher$2.current = prevDispatcher;
  executionContext = didTimeout;
  null !== workInProgress
    ? (didTimeout = 0)
    : ((workInProgressRoot = null),
      (workInProgressRootRenderLanes = 0),
      (didTimeout = workInProgressRootExitStatus));
  if (0 !== didTimeout) {
    2 === didTimeout &&
      ((executionContext |= 32),
      root.hydrate && ((root.hydrate = !1), clearContainer(root.containerInfo)),
      (lanes = getLanesToRetrySynchronouslyOnError(root)),
      0 !== lanes && (didTimeout = renderRootSync(root, lanes)));
    if (1 === didTimeout)
      throw ((originalCallbackNode = workInProgressRootFatalError),
      prepareFreshStack(root, 0),
      markRootSuspended$1(root, lanes),
      ensureRootIsScheduled(root, now()),
      originalCallbackNode);
    root.finishedWork = root.current.alternate;
    root.finishedLanes = lanes;
    switch (didTimeout) {
      case 0:
      case 1:
        throw Error(formatProdErrorMessage(345));
      case 2:
        commitRoot(root);
        break;
      case 3:
        markRootSuspended$1(root, lanes);
        if (
          (lanes & 125829120) === lanes &&
          ((didTimeout = globalMostRecentFallbackTime + 500 - now()),
          10 < didTimeout)
        ) {
          if (0 !== getNextLanes(root, 0)) break;
          prevDispatcher = root.suspendedLanes;
          if ((prevDispatcher & lanes) !== lanes) {
            requestEventTime();
            root.pingedLanes |= root.suspendedLanes & prevDispatcher;
            break;
          }
          root.timeoutHandle = scheduleTimeout(
            commitRoot.bind(null, root),
            didTimeout
          );
          break;
        }
        commitRoot(root);
        break;
      case 4:
        markRootSuspended$1(root, lanes);
        if ((lanes & 8388096) === lanes) break;
        didTimeout = root.eventTimes;
        for (prevDispatcher = -1; 0 < lanes; ) {
          var index$15 = 31 - clz32(lanes);
          lanes$jscomp$0 = 1 << index$15;
          index$15 = didTimeout[index$15];
          index$15 > prevDispatcher && (prevDispatcher = index$15);
          lanes &= ~lanes$jscomp$0;
        }
        lanes = prevDispatcher;
        lanes = now() - lanes;
        lanes =
          (120 > lanes
            ? 120
            : 480 > lanes
            ? 480
            : 1080 > lanes
            ? 1080
            : 1920 > lanes
            ? 1920
            : 3e3 > lanes
            ? 3e3
            : 4320 > lanes
            ? 4320
            : 1960 * ceil(lanes / 1960)) - lanes;
        if (10 < lanes) {
          root.timeoutHandle = scheduleTimeout(
            commitRoot.bind(null, root),
            lanes
          );
          break;
        }
        commitRoot(root);
        break;
      case 5:
        commitRoot(root);
        break;
      default:
        throw Error(formatProdErrorMessage(329));
    }
  }
  ensureRootIsScheduled(root, now());
  return root.callbackNode === originalCallbackNode
    ? performConcurrentWorkOnRoot.bind(null, root)
    : null;
}
function markRootSuspended$1(root, suspendedLanes) {
  suspendedLanes &= ~workInProgressRootPingedLanes;
  suspendedLanes &= ~workInProgressRootUpdatedLanes;
  root.suspendedLanes |= suspendedLanes;
  root.pingedLanes &= ~suspendedLanes;
  for (root = root.expirationTimes; 0 < suspendedLanes; ) {
    var index$17 = 31 - clz32(suspendedLanes),
      lane = 1 << index$17;
    root[index$17] = -1;
    suspendedLanes &= ~lane;
  }
}
function performSyncWorkOnRoot(root) {
  if (0 !== (executionContext & 24)) throw Error(formatProdErrorMessage(327));
  flushPassiveEffects();
  if (
    root === workInProgressRoot &&
    0 !== (root.expiredLanes & workInProgressRootRenderLanes)
  )
    var lanes = workInProgressRootRenderLanes;
  else if (((lanes = getNextLanes(root, 0)), 12 > return_highestLanePriority))
    return null;
  var exitStatus = renderRootSync(root, lanes);
  0 !== root.tag &&
    2 === exitStatus &&
    ((executionContext |= 32),
    root.hydrate && ((root.hydrate = !1), clearContainer(root.containerInfo)),
    (lanes = getLanesToRetrySynchronouslyOnError(root)),
    0 !== lanes && (exitStatus = renderRootSync(root, lanes)));
  if (1 === exitStatus)
    throw ((exitStatus = workInProgressRootFatalError),
    prepareFreshStack(root, 0),
    markRootSuspended$1(root, lanes),
    ensureRootIsScheduled(root, now()),
    exitStatus);
  root.finishedWork = root.current.alternate;
  root.finishedLanes = lanes;
  commitRoot(root);
  ensureRootIsScheduled(root, now());
  return null;
}
function batchedUpdates$1(fn, a) {
  var prevExecutionContext = executionContext;
  executionContext |= 1;
  try {
    return fn(a);
  } finally {
    (executionContext = prevExecutionContext),
      0 === executionContext && (resetRenderTimer(), flushSyncCallbackQueue());
  }
}
function flushSync(fn, a) {
  var prevExecutionContext = executionContext;
  if (0 !== (prevExecutionContext & 24)) return fn(a);
  executionContext |= 1;
  var previousLanePriority = currentUpdateLanePriority;
  try {
    if (((currentUpdateLanePriority = 15), fn)) return fn(a);
  } finally {
    (currentUpdateLanePriority = previousLanePriority),
      (executionContext = prevExecutionContext),
      flushSyncCallbackQueue();
  }
}
function popRenderLanes() {
  subtreeRenderLanes = subtreeRenderLanesCursor.current;
  pop(subtreeRenderLanesCursor);
}
function prepareFreshStack(root, lanes) {
  root.finishedWork = null;
  root.finishedLanes = 0;
  var timeoutHandle = root.timeoutHandle;
  -1 !== timeoutHandle &&
    ((root.timeoutHandle = -1), cancelTimeout(timeoutHandle));
  if (null !== workInProgress)
    for (timeoutHandle = workInProgress.return; null !== timeoutHandle; ) {
      var interruptedWork = timeoutHandle;
      switch (interruptedWork.tag) {
        case 3:
          popRootCachePool(
            interruptedWork.stateNode,
            workInProgressRootRenderLanes
          );
          popProvider(CacheContext);
          popHostContainer();
          resetWorkInProgressVersions();
          break;
        case 5:
          popHostContext(interruptedWork);
          break;
        case 4:
          popHostContainer();
          break;
        case 13:
          pop(suspenseStackCursor);
          break;
        case 19:
          pop(suspenseStackCursor);
          break;
        case 10:
          popProvider(interruptedWork.type._context);
          break;
        case 22:
        case 23:
          popRenderLanes();
          null !== interruptedWork.updateQueue && popCachePool();
          break;
        case 24:
          popProvider(CacheContext);
      }
      timeoutHandle = timeoutHandle.return;
    }
  workInProgressRoot = root;
  workInProgress = createWorkInProgress(root.current, null);
  workInProgressRootRenderLanes = subtreeRenderLanes = lanes;
  workInProgressRootExitStatus = 0;
  workInProgressRootFatalError = null;
  workInProgressRootPingedLanes = workInProgressRootUpdatedLanes = workInProgressRootSkippedLanes = 0;
  if (null !== interleavedQueues) {
    for (root = 0; root < interleavedQueues.length; root++)
      if (
        ((lanes = interleavedQueues[root]),
        (timeoutHandle = lanes.interleaved),
        null !== timeoutHandle)
      ) {
        lanes.interleaved = null;
        interruptedWork = timeoutHandle.next;
        var lastPendingUpdate = lanes.pending;
        if (null !== lastPendingUpdate) {
          var firstPendingUpdate = lastPendingUpdate.next;
          lastPendingUpdate.next = interruptedWork;
          timeoutHandle.next = firstPendingUpdate;
        }
        lanes.pending = timeoutHandle;
      }
    interleavedQueues = null;
  }
  spawnedWorkDuringRender = null;
}
function handleError(root$jscomp$0, thrownValue) {
  do {
    var erroredWork = workInProgress;
    try {
      resetContextDependencies();
      ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
      if (didScheduleRenderPhaseUpdate) {
        for (
          var hook = currentlyRenderingFiber$1.memoizedState;
          null !== hook;

        ) {
          var queue = hook.queue;
          null !== queue && (queue.pending = null);
          hook = hook.next;
        }
        didScheduleRenderPhaseUpdate = !1;
      }
      renderLanes = 0;
      workInProgressHook = currentHook = currentlyRenderingFiber$1 = null;
      didScheduleRenderPhaseUpdateDuringThisPass = !1;
      ReactCurrentOwner$2.current = null;
      if (null === erroredWork || null === erroredWork.return) {
        workInProgressRootExitStatus = 1;
        workInProgressRootFatalError = thrownValue;
        workInProgress = null;
        break;
      }
      a: {
        var root = root$jscomp$0,
          returnFiber = erroredWork.return,
          sourceFiber = erroredWork,
          value = thrownValue;
        thrownValue = workInProgressRootRenderLanes;
        sourceFiber.flags |= 8192;
        if (
          null !== value &&
          "object" === typeof value &&
          "function" === typeof value.then
        ) {
          if (enableLazyContextPropagation) {
            var currentSourceFiber = sourceFiber.alternate;
            null !== currentSourceFiber &&
              propagateParentContextChanges(
                currentSourceFiber,
                sourceFiber,
                thrownValue,
                !0
              );
          }
          var wakeable = value,
            tag = sourceFiber.tag;
          if (
            0 === (sourceFiber.mode & 1) &&
            (0 === tag || 11 === tag || 15 === tag)
          ) {
            var currentSource = sourceFiber.alternate;
            currentSource
              ? ((sourceFiber.updateQueue = currentSource.updateQueue),
                (sourceFiber.memoizedState = currentSource.memoizedState),
                (sourceFiber.lanes = currentSource.lanes))
              : ((sourceFiber.updateQueue = null),
                (sourceFiber.memoizedState = null));
          }
          var hasInvisibleParentBoundary =
              0 !== (suspenseStackCursor.current & 1),
            workInProgress$117 = returnFiber;
          do {
            var JSCompiler_temp;
            if ((JSCompiler_temp = 13 === workInProgress$117.tag)) {
              var nextState = workInProgress$117.memoizedState;
              if (null !== nextState)
                JSCompiler_temp = null !== nextState.dehydrated ? !0 : !1;
              else {
                var props = workInProgress$117.memoizedProps;
                JSCompiler_temp =
                  void 0 === props.fallback
                    ? !1
                    : !0 !== props.unstable_avoidThisFallback
                    ? !0
                    : hasInvisibleParentBoundary
                    ? !1
                    : !0;
              }
            }
            if (JSCompiler_temp) {
              var wakeables = workInProgress$117.updateQueue;
              if (null === wakeables) {
                var updateQueue = new Set();
                updateQueue.add(wakeable);
                workInProgress$117.updateQueue = updateQueue;
              } else wakeables.add(wakeable);
              if (
                0 === (workInProgress$117.mode & 1) &&
                workInProgress$117 !== returnFiber
              ) {
                workInProgress$117.flags |= 128;
                sourceFiber.flags |= 32768;
                sourceFiber.flags &= -10053;
                if (1 === sourceFiber.tag)
                  if (null === sourceFiber.alternate) sourceFiber.tag = 17;
                  else {
                    var update = createUpdate(-1, 1);
                    update.tag = 2;
                    enqueueUpdate(sourceFiber, update);
                  }
                sourceFiber.lanes |= 1;
                break a;
              }
              value = void 0;
              sourceFiber = thrownValue;
              var pingCache = root.pingCache;
              null === pingCache
                ? ((pingCache = root.pingCache = new PossiblyWeakMap()),
                  (value = new Set()),
                  pingCache.set(wakeable, value))
                : ((value = pingCache.get(wakeable)),
                  void 0 === value &&
                    ((value = new Set()), pingCache.set(wakeable, value)));
              if (!value.has(sourceFiber)) {
                value.add(sourceFiber);
                var ping = pingSuspendedRoot.bind(
                  null,
                  root,
                  wakeable,
                  sourceFiber
                );
                wakeable.then(ping, ping);
              }
              workInProgress$117.flags |= 16384;
              workInProgress$117.lanes = thrownValue;
              break a;
            }
            workInProgress$117 = workInProgress$117.return;
          } while (null !== workInProgress$117);
          value = Error(
            (getComponentNameFromFiber(sourceFiber) || "A React component") +
              " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
          );
        }
        5 !== workInProgressRootExitStatus &&
          (workInProgressRootExitStatus = 2);
        value = createCapturedValue(value, sourceFiber);
        workInProgress$117 = returnFiber;
        do {
          switch (workInProgress$117.tag) {
            case 3:
              root = value;
              workInProgress$117.flags |= 16384;
              thrownValue &= -thrownValue;
              workInProgress$117.lanes |= thrownValue;
              var update$119 = createRootErrorUpdate(
                workInProgress$117,
                root,
                thrownValue
              );
              enqueueCapturedUpdate(workInProgress$117, update$119);
              break a;
            case 1:
              root = value;
              var ctor = workInProgress$117.type,
                instance = workInProgress$117.stateNode;
              if (
                0 === (workInProgress$117.flags & 128) &&
                ("function" === typeof ctor.getDerivedStateFromError ||
                  (null !== instance &&
                    "function" === typeof instance.componentDidCatch &&
                    (null === legacyErrorBoundariesThatAlreadyFailed ||
                      !legacyErrorBoundariesThatAlreadyFailed.has(instance))))
              ) {
                workInProgress$117.flags |= 16384;
                thrownValue &= -thrownValue;
                workInProgress$117.lanes |= thrownValue;
                var update$122 = createClassErrorUpdate(
                  workInProgress$117,
                  root,
                  thrownValue
                );
                enqueueCapturedUpdate(workInProgress$117, update$122);
                break a;
              }
          }
          workInProgress$117 = workInProgress$117.return;
        } while (null !== workInProgress$117);
      }
      completeUnitOfWork(erroredWork);
    } catch (yetAnotherThrownValue) {
      thrownValue = yetAnotherThrownValue;
      workInProgress === erroredWork &&
        null !== erroredWork &&
        (workInProgress = erroredWork = erroredWork.return);
      continue;
    }
    break;
  } while (1);
}
function pushDispatcher() {
  var prevDispatcher = ReactCurrentDispatcher$2.current;
  ReactCurrentDispatcher$2.current = ContextOnlyDispatcher;
  return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
}
function pushInteractions(root) {
  var prevInteractions = tracing.__interactionsRef.current;
  tracing.__interactionsRef.current = root.memoizedInteractions;
  return prevInteractions;
}
function renderDidSuspendDelayIfPossible() {
  if (0 === workInProgressRootExitStatus || 3 === workInProgressRootExitStatus)
    workInProgressRootExitStatus = 4;
  null === workInProgressRoot ||
    (0 === (workInProgressRootSkippedLanes & 268435455) &&
      0 === (workInProgressRootUpdatedLanes & 268435455)) ||
    markRootSuspended$1(workInProgressRoot, workInProgressRootRenderLanes);
}
function renderRootSync(root, lanes) {
  var prevExecutionContext = executionContext;
  executionContext |= 8;
  var prevDispatcher = pushDispatcher();
  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes)
    prepareFreshStack(root, lanes), startWorkOnPendingInteractions(root, lanes);
  lanes = pushInteractions(root);
  do
    try {
      workLoopSync();
      break;
    } catch (thrownValue) {
      handleError(root, thrownValue);
    }
  while (1);
  resetContextDependencies();
  tracing.__interactionsRef.current = lanes;
  executionContext = prevExecutionContext;
  ReactCurrentDispatcher$2.current = prevDispatcher;
  if (null !== workInProgress) throw Error(formatProdErrorMessage(261));
  workInProgressRoot = null;
  workInProgressRootRenderLanes = 0;
  return workInProgressRootExitStatus;
}
function workLoopSync() {
  for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
}
function workLoopConcurrent() {
  for (; null !== workInProgress && !Scheduler_shouldYield(); )
    performUnitOfWork(workInProgress);
}
function performUnitOfWork(unitOfWork) {
  var next = beginWork$1(unitOfWork.alternate, unitOfWork, subtreeRenderLanes);
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
  ReactCurrentOwner$2.current = null;
}
function completeUnitOfWork(unitOfWork) {
  var completedWork = unitOfWork;
  do {
    var current = completedWork.alternate;
    unitOfWork = completedWork.return;
    if (0 === (completedWork.flags & 8192)) {
      if (
        ((current = completeWork(current, completedWork, subtreeRenderLanes)),
        null !== current)
      ) {
        workInProgress = current;
        return;
      }
    } else {
      current = unwindWork(completedWork, subtreeRenderLanes);
      if (null !== current) {
        current.flags &= 8191;
        workInProgress = current;
        return;
      }
      null !== unitOfWork &&
        ((unitOfWork.flags |= 8192),
        (unitOfWork.subtreeFlags = 0),
        (unitOfWork.deletions = null));
    }
    completedWork = completedWork.sibling;
    if (null !== completedWork) {
      workInProgress = completedWork;
      return;
    }
    workInProgress = completedWork = unitOfWork;
  } while (null !== completedWork);
  0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
}
function commitRoot(root) {
  var previousUpdateLanePriority = currentUpdateLanePriority;
  try {
    (currentUpdateLanePriority = 15),
      commitRootImpl(root, previousUpdateLanePriority);
  } finally {
    currentUpdateLanePriority = previousUpdateLanePriority;
  }
  return null;
}
function commitRootImpl(root, renderPriorityLevel) {
  do flushPassiveEffects();
  while (null !== rootWithPendingPassiveEffects);
  if (0 !== (executionContext & 24)) throw Error(formatProdErrorMessage(327));
  var finishedWork = root.finishedWork,
    lanes = root.finishedLanes;
  if (null === finishedWork) return null;
  root.finishedWork = null;
  root.finishedLanes = 0;
  if (finishedWork === root.current) throw Error(formatProdErrorMessage(177));
  root.callbackNode = null;
  root.callbackPriority = 0;
  var remainingLanes = finishedWork.lanes | finishedWork.childLanes;
  markRootFinished(root, remainingLanes);
  root === workInProgressRoot &&
    ((workInProgress = workInProgressRoot = null),
    (workInProgressRootRenderLanes = 0));
  (0 === (finishedWork.subtreeFlags & 1040) &&
    0 === (finishedWork.flags & 1040)) ||
    rootDoesHavePassiveEffects ||
    ((rootDoesHavePassiveEffects = !0),
    scheduleCallback(97, function() {
      flushPassiveEffects();
      return null;
    }));
  remainingLanes = 0 !== (finishedWork.flags & 8054);
  if (0 !== (finishedWork.subtreeFlags & 8054) || remainingLanes) {
    remainingLanes = currentUpdateLanePriority;
    currentUpdateLanePriority = 15;
    var prevExecutionContext = executionContext;
    executionContext |= 16;
    var prevInteractions = pushInteractions(root);
    ReactCurrentOwner$2.current = null;
    var shouldFireAfterActiveInstanceBlur$135 = commitBeforeMutationEffects(
      root,
      finishedWork
    );
    commitMutationEffects(root, renderPriorityLevel, finishedWork);
    shouldFireAfterActiveInstanceBlur$135 &&
      ((_enabled = !0),
      dispatchAfterDetachedBlur(selectionInformation.focusedElem),
      (_enabled = !1));
    restoreSelection(selectionInformation);
    _enabled = !!eventsEnabled;
    selectionInformation = eventsEnabled = null;
    root.current = finishedWork;
    commitLayoutEffects(finishedWork, root, lanes);
    requestPaint();
    tracing.__interactionsRef.current = prevInteractions;
    executionContext = prevExecutionContext;
    null != remainingLanes && (currentUpdateLanePriority = remainingLanes);
  } else root.current = finishedWork;
  if ((prevExecutionContext = rootDoesHavePassiveEffects))
    (rootDoesHavePassiveEffects = !1),
      (rootWithPendingPassiveEffects = root),
      (pendingPassiveEffectsLanes = lanes),
      (pendingPassiveEffectsRenderPriority =
        0 === renderPriorityLevel ? 8 : renderPriorityLevel);
  remainingLanes = root.pendingLanes;
  if (0 !== remainingLanes) {
    if (null !== spawnedWorkDuringRender)
      for (
        prevInteractions = spawnedWorkDuringRender,
          spawnedWorkDuringRender = null,
          shouldFireAfterActiveInstanceBlur$135 = 0;
        shouldFireAfterActiveInstanceBlur$135 < prevInteractions.length;
        shouldFireAfterActiveInstanceBlur$135++
      )
        scheduleInteractions(
          root,
          prevInteractions[shouldFireAfterActiveInstanceBlur$135],
          root.memoizedInteractions
        );
    schedulePendingInteractions(root, remainingLanes);
  } else legacyErrorBoundariesThatAlreadyFailed = null;
  prevExecutionContext || finishPendingInteractions(root, lanes);
  0 !== (remainingLanes & 1)
    ? root === rootWithNestedUpdates
      ? nestedUpdateCount++
      : ((nestedUpdateCount = 0), (rootWithNestedUpdates = root))
    : (nestedUpdateCount = 0);
  onCommitRoot(finishedWork.stateNode, renderPriorityLevel);
  ensureRootIsScheduled(root, now());
  if (hasUncaughtError)
    throw ((hasUncaughtError = !1),
    (root = firstUncaughtError),
    (firstUncaughtError = null),
    root);
  if (0 !== (executionContext & 4)) return null;
  flushSyncCallbackQueue();
  return null;
}
function flushPassiveEffects() {
  if (0 !== pendingPassiveEffectsRenderPriority) {
    var priorityLevel =
      8 < pendingPassiveEffectsRenderPriority
        ? 8
        : pendingPassiveEffectsRenderPriority;
    pendingPassiveEffectsRenderPriority = 0;
    var previousLanePriority = currentUpdateLanePriority;
    try {
      currentUpdateLanePriority = priorityLevel;
      if (null === rootWithPendingPassiveEffects)
        var JSCompiler_inline_result = !1;
      else {
        priorityLevel = rootWithPendingPassiveEffects;
        var lanes = pendingPassiveEffectsLanes;
        rootWithPendingPassiveEffects = null;
        pendingPassiveEffectsLanes = 0;
        if (0 !== (executionContext & 24))
          throw Error(formatProdErrorMessage(331));
        var prevExecutionContext = executionContext;
        executionContext |= 16;
        var prevInteractions = pushInteractions(priorityLevel);
        for (nextEffect = priorityLevel.current; null !== nextEffect; ) {
          var fiber = nextEffect,
            child = fiber.child;
          if (0 !== (nextEffect.flags & 16)) {
            var deletions = fiber.deletions;
            if (null !== deletions) {
              for (var i = 0; i < deletions.length; i++) {
                var fiberToDelete = deletions[i];
                for (nextEffect = fiberToDelete; null !== nextEffect; ) {
                  var fiber$jscomp$0 = nextEffect;
                  switch (fiber$jscomp$0.tag) {
                    case 0:
                    case 11:
                    case 15:
                      commitHookEffectListUnmount(4, fiber$jscomp$0, fiber);
                  }
                  var child$jscomp$0 = fiber$jscomp$0.child;
                  if (null !== child$jscomp$0)
                    (child$jscomp$0.return = fiber$jscomp$0),
                      (nextEffect = child$jscomp$0);
                  else
                    for (; null !== nextEffect; ) {
                      fiber$jscomp$0 = nextEffect;
                      if (fiber$jscomp$0 === fiberToDelete) {
                        nextEffect = null;
                        break;
                      }
                      var sibling = fiber$jscomp$0.sibling;
                      if (null !== sibling) {
                        sibling.return = fiber$jscomp$0.return;
                        nextEffect = sibling;
                        break;
                      }
                      nextEffect = fiber$jscomp$0.return;
                    }
                }
                var alternate = fiberToDelete.alternate;
                detachFiberAfterEffects(fiberToDelete);
                null !== alternate && detachFiberAfterEffects(alternate);
              }
              nextEffect = fiber;
            }
          }
          if (0 !== (fiber.subtreeFlags & 1040) && null !== child)
            (child.return = fiber), (nextEffect = child);
          else
            b: for (; null !== nextEffect; ) {
              fiber = nextEffect;
              if (0 !== (fiber.flags & 1024))
                switch (fiber.tag) {
                  case 0:
                  case 11:
                  case 15:
                    commitHookEffectListUnmount(5, fiber, fiber.return);
                }
              var sibling$jscomp$0 = fiber.sibling;
              if (null !== sibling$jscomp$0) {
                sibling$jscomp$0.return = fiber.return;
                nextEffect = sibling$jscomp$0;
                break b;
              }
              nextEffect = fiber.return;
            }
        }
        var finishedWork = priorityLevel.current;
        for (nextEffect = finishedWork; null !== nextEffect; ) {
          child = nextEffect;
          var firstChild = child.child;
          if (0 !== (child.subtreeFlags & 1040) && null !== firstChild)
            (firstChild.return = child), (nextEffect = firstChild);
          else
            b: for (child = finishedWork; null !== nextEffect; ) {
              deletions = nextEffect;
              if (0 !== (deletions.flags & 1024))
                try {
                  switch (deletions.tag) {
                    case 0:
                    case 11:
                    case 15:
                      commitHookEffectListMount(5, deletions);
                  }
                } catch (error) {
                  captureCommitPhaseError(deletions, deletions.return, error);
                }
              if (deletions === child) {
                nextEffect = null;
                break b;
              }
              var sibling$jscomp$1 = deletions.sibling;
              if (null !== sibling$jscomp$1) {
                sibling$jscomp$1.return = deletions.return;
                nextEffect = sibling$jscomp$1;
                break b;
              }
              nextEffect = deletions.return;
            }
        }
        tracing.__interactionsRef.current = prevInteractions;
        finishPendingInteractions(priorityLevel, lanes);
        executionContext = prevExecutionContext;
        flushSyncCallbackQueue();
        JSCompiler_inline_result = !0;
      }
      return JSCompiler_inline_result;
    } finally {
      currentUpdateLanePriority = previousLanePriority;
    }
  }
  return !1;
}
function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
  sourceFiber = createCapturedValue(error, sourceFiber);
  sourceFiber = createRootErrorUpdate(rootFiber, sourceFiber, 1);
  enqueueUpdate(rootFiber, sourceFiber);
  sourceFiber = requestEventTime();
  rootFiber = markUpdateLaneFromFiberToRoot(rootFiber, 1);
  null !== rootFiber &&
    (markRootUpdated(rootFiber, 1, sourceFiber),
    ensureRootIsScheduled(rootFiber, sourceFiber),
    schedulePendingInteractions(rootFiber, 1));
}
function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
  if (3 === sourceFiber.tag)
    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
  else
    for (
      nearestMountedAncestor = skipUnmountedBoundaries
        ? nearestMountedAncestor
        : sourceFiber.return;
      null !== nearestMountedAncestor;

    ) {
      if (3 === nearestMountedAncestor.tag) {
        captureCommitPhaseErrorOnRoot(
          nearestMountedAncestor,
          sourceFiber,
          error
        );
        break;
      } else if (1 === nearestMountedAncestor.tag) {
        var instance = nearestMountedAncestor.stateNode;
        if (
          "function" ===
            typeof nearestMountedAncestor.type.getDerivedStateFromError ||
          ("function" === typeof instance.componentDidCatch &&
            (null === legacyErrorBoundariesThatAlreadyFailed ||
              !legacyErrorBoundariesThatAlreadyFailed.has(instance)))
        ) {
          sourceFiber = createCapturedValue(error, sourceFiber);
          sourceFiber = createClassErrorUpdate(
            nearestMountedAncestor,
            sourceFiber,
            1
          );
          enqueueUpdate(nearestMountedAncestor, sourceFiber);
          sourceFiber = requestEventTime();
          nearestMountedAncestor = markUpdateLaneFromFiberToRoot(
            nearestMountedAncestor,
            1
          );
          null !== nearestMountedAncestor &&
            (markRootUpdated(nearestMountedAncestor, 1, sourceFiber),
            ensureRootIsScheduled(nearestMountedAncestor, sourceFiber),
            schedulePendingInteractions(nearestMountedAncestor, 1));
          break;
        }
      }
      nearestMountedAncestor = nearestMountedAncestor.return;
    }
}
function pingSuspendedRoot(root, wakeable, pingedLanes) {
  var pingCache = root.pingCache;
  null !== pingCache && pingCache.delete(wakeable);
  wakeable = requestEventTime();
  root.pingedLanes |= root.suspendedLanes & pingedLanes;
  workInProgressRoot === root &&
    (workInProgressRootRenderLanes & pingedLanes) === pingedLanes &&
    (4 === workInProgressRootExitStatus ||
    (3 === workInProgressRootExitStatus &&
      (workInProgressRootRenderLanes & 125829120) ===
        workInProgressRootRenderLanes &&
      500 > now() - globalMostRecentFallbackTime)
      ? prepareFreshStack(root, 0)
      : (workInProgressRootPingedLanes |= pingedLanes));
  ensureRootIsScheduled(root, wakeable);
  schedulePendingInteractions(root, pingedLanes);
}
function retryTimedOutBoundary(boundaryFiber, retryLane) {
  0 === retryLane &&
    ((retryLane = boundaryFiber.mode),
    0 === (retryLane & 1)
      ? (retryLane = 1)
      : 0 === (retryLane & 1)
      ? (retryLane = 15 === currentUpdateLanePriority ? 1 : 2)
      : ((retryLane = nextRetryLane),
        (nextRetryLane <<= 1),
        0 === (nextRetryLane & 125829120) && (nextRetryLane = 8388608)));
  var eventTime = requestEventTime();
  boundaryFiber = markUpdateLaneFromFiberToRoot(boundaryFiber, retryLane);
  null !== boundaryFiber &&
    (markRootUpdated(boundaryFiber, retryLane, eventTime),
    ensureRootIsScheduled(boundaryFiber, eventTime),
    schedulePendingInteractions(boundaryFiber, retryLane));
}
function retryDehydratedSuspenseBoundary(boundaryFiber) {
  var suspenseState = boundaryFiber.memoizedState,
    retryLane = 0;
  null !== suspenseState && (retryLane = suspenseState.retryLane);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function resolveRetryWakeable(boundaryFiber, wakeable) {
  var retryLane = 0;
  switch (boundaryFiber.tag) {
    case 13:
      var retryCache = boundaryFiber.stateNode;
      var suspenseState = boundaryFiber.memoizedState;
      null !== suspenseState && (retryLane = suspenseState.retryLane);
      break;
    case 19:
      retryCache = boundaryFiber.stateNode;
      break;
    default:
      throw Error(formatProdErrorMessage(314));
  }
  null !== retryCache && retryCache.delete(wakeable);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
var beginWork$1;
beginWork$1 = function(current, workInProgress, renderLanes) {
  var updateLanes = workInProgress.lanes;
  if (null !== current) {
    if (enableLazyContextPropagation && 0 === (renderLanes & updateLanes)) {
      var dependencies = current.dependencies;
      null !== dependencies &&
        checkIfContextChanged(dependencies) &&
        (updateLanes |= renderLanes);
    }
    if (current.memoizedProps !== workInProgress.pendingProps)
      didReceiveUpdate = !0;
    else if (0 !== (renderLanes & updateLanes))
      didReceiveUpdate = 0 !== (current.flags & 32768) ? !0 : !1;
    else {
      didReceiveUpdate = !1;
      switch (workInProgress.tag) {
        case 3:
          pushHostContainer(
            workInProgress,
            workInProgress.stateNode.containerInfo
          );
          updateLanes = workInProgress.stateNode;
          pushProvider(
            workInProgress,
            CacheContext,
            current.memoizedState.cache
          );
          pooledCache = updateLanes.pooledCache;
          resetHydrationState();
          break;
        case 5:
          pushHostContext(workInProgress);
          break;
        case 4:
          pushHostContainer(
            workInProgress,
            workInProgress.stateNode.containerInfo
          );
          break;
        case 10:
          pushProvider(
            workInProgress,
            workInProgress.type._context,
            workInProgress.memoizedProps.value
          );
          break;
        case 13:
          updateLanes = workInProgress.memoizedState;
          if (null !== updateLanes) {
            if (null !== updateLanes.dehydrated)
              return (
                push(suspenseStackCursor, suspenseStackCursor.current & 1),
                (workInProgress.flags |= 128),
                null
              );
            if (0 !== (renderLanes & workInProgress.child.childLanes))
              return updateSuspenseComponent(
                current,
                workInProgress,
                renderLanes
              );
            push(suspenseStackCursor, suspenseStackCursor.current & 1);
            workInProgress = bailoutOnAlreadyFinishedWork(
              current,
              workInProgress,
              renderLanes
            );
            return null !== workInProgress ? workInProgress.sibling : null;
          }
          push(suspenseStackCursor, suspenseStackCursor.current & 1);
          break;
        case 19:
          dependencies = 0 !== (current.flags & 128);
          updateLanes = 0 !== (renderLanes & workInProgress.childLanes);
          enableLazyContextPropagation &&
            !updateLanes &&
            (propagateParentContextChanges(
              current,
              workInProgress,
              renderLanes,
              !1
            ),
            (updateLanes = 0 !== (renderLanes & workInProgress.childLanes)));
          if (dependencies) {
            if (updateLanes)
              return updateSuspenseListComponent(
                current,
                workInProgress,
                renderLanes
              );
            workInProgress.flags |= 128;
          }
          dependencies = workInProgress.memoizedState;
          null !== dependencies &&
            ((dependencies.rendering = null),
            (dependencies.tail = null),
            (dependencies.lastEffect = null));
          push(suspenseStackCursor, suspenseStackCursor.current);
          if (updateLanes) break;
          else return null;
        case 22:
        case 23:
          return (
            (workInProgress.lanes = 0),
            updateOffscreenComponent(current, workInProgress, renderLanes)
          );
        case 24:
          pushProvider(
            workInProgress,
            CacheContext,
            current.memoizedState.cache
          );
      }
      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
    }
  } else didReceiveUpdate = !1;
  workInProgress.lanes = 0;
  switch (workInProgress.tag) {
    case 2:
      return (
        (updateLanes = workInProgress.type),
        null !== current &&
          ((current.alternate = null),
          (workInProgress.alternate = null),
          (workInProgress.flags |= 2)),
        (current = workInProgress.pendingProps),
        prepareToReadContext(workInProgress, renderLanes),
        (current = renderWithHooks(
          null,
          workInProgress,
          updateLanes,
          current,
          void 0,
          renderLanes
        )),
        (workInProgress.flags |= 1),
        (workInProgress.tag = 0),
        reconcileChildren(null, workInProgress, current, renderLanes),
        (workInProgress = workInProgress.child),
        workInProgress
      );
    case 16:
      dependencies = workInProgress.elementType;
      a: {
        null !== current &&
          ((current.alternate = null),
          (workInProgress.alternate = null),
          (workInProgress.flags |= 2));
        current = workInProgress.pendingProps;
        var init = dependencies._init;
        dependencies = init(dependencies._payload);
        workInProgress.type = dependencies;
        init = workInProgress.tag = resolveLazyComponentTag(dependencies);
        current = resolveDefaultProps(dependencies, current);
        switch (init) {
          case 0:
            workInProgress = updateFunctionComponent(
              null,
              workInProgress,
              dependencies,
              current,
              renderLanes
            );
            break a;
          case 1:
            workInProgress = updateClassComponent(
              null,
              workInProgress,
              dependencies,
              current,
              renderLanes
            );
            break a;
          case 11:
            workInProgress = updateForwardRef(
              null,
              workInProgress,
              dependencies,
              current,
              renderLanes
            );
            break a;
          case 14:
            workInProgress = updateMemoComponent(
              null,
              workInProgress,
              dependencies,
              resolveDefaultProps(dependencies.type, current),
              updateLanes,
              renderLanes
            );
            break a;
        }
        throw Error(formatProdErrorMessage(306, dependencies, ""));
      }
      return workInProgress;
    case 0:
      return (
        (updateLanes = workInProgress.type),
        (dependencies = workInProgress.pendingProps),
        (dependencies =
          workInProgress.elementType === updateLanes
            ? dependencies
            : resolveDefaultProps(updateLanes, dependencies)),
        updateFunctionComponent(
          current,
          workInProgress,
          updateLanes,
          dependencies,
          renderLanes
        )
      );
    case 1:
      return (
        (updateLanes = workInProgress.type),
        (dependencies = workInProgress.pendingProps),
        (dependencies =
          workInProgress.elementType === updateLanes
            ? dependencies
            : resolveDefaultProps(updateLanes, dependencies)),
        updateClassComponent(
          current,
          workInProgress,
          updateLanes,
          dependencies,
          renderLanes
        )
      );
    case 3:
      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
      updateLanes = workInProgress.updateQueue;
      if (null === current || null === updateLanes)
        throw Error(formatProdErrorMessage(282));
      dependencies = workInProgress.pendingProps;
      init = workInProgress.memoizedState;
      updateLanes = init.element;
      cloneUpdateQueue(current, workInProgress);
      processUpdateQueue(workInProgress, dependencies, null, renderLanes);
      var nextState = workInProgress.memoizedState;
      dependencies = workInProgress.stateNode;
      var nextCache = nextState.cache;
      pooledCache = dependencies.pooledCache;
      pushProvider(workInProgress, CacheContext, nextCache);
      nextCache !== init.cache &&
        propagateContextChange(
          workInProgress,
          CacheContext,
          1073741823,
          renderLanes
        );
      init = nextState.element;
      if (init === updateLanes)
        resetHydrationState(),
          (workInProgress = bailoutOnAlreadyFinishedWork(
            current,
            workInProgress,
            renderLanes
          ));
      else {
        if ((updateLanes = dependencies.hydrate))
          (nextHydratableInstance = getNextHydratable(
            workInProgress.stateNode.containerInfo.firstChild
          )),
            (hydrationParentFiber = workInProgress),
            (updateLanes = isHydrating = !0);
        if (updateLanes) {
          current = dependencies.mutableSourceEagerHydrationData;
          if (null != current)
            for (
              updateLanes = 0;
              updateLanes < current.length;
              updateLanes += 2
            )
              (dependencies = current[updateLanes]),
                (dependencies._workInProgressVersionPrimary =
                  current[updateLanes + 1]),
                workInProgressSources.push(dependencies);
          renderLanes = mountChildFibers(
            workInProgress,
            null,
            init,
            renderLanes
          );
          for (workInProgress.child = renderLanes; renderLanes; )
            (renderLanes.flags = (renderLanes.flags & -3) | 2048),
              (renderLanes = renderLanes.sibling);
        } else
          reconcileChildren(current, workInProgress, init, renderLanes),
            resetHydrationState();
        workInProgress = workInProgress.child;
      }
      return workInProgress;
    case 5:
      return (
        pushHostContext(workInProgress),
        null === current && tryToClaimNextHydratableInstance(workInProgress),
        (updateLanes = workInProgress.type),
        (dependencies = workInProgress.pendingProps),
        (init = null !== current ? current.memoizedProps : null),
        (nextState = dependencies.children),
        shouldSetTextContent(updateLanes, dependencies)
          ? (nextState = null)
          : null !== init &&
            shouldSetTextContent(updateLanes, init) &&
            (workInProgress.flags |= 32),
        markRef(current, workInProgress),
        reconcileChildren(current, workInProgress, nextState, renderLanes),
        workInProgress.child
      );
    case 6:
      return (
        null === current && tryToClaimNextHydratableInstance(workInProgress),
        null
      );
    case 13:
      return updateSuspenseComponent(current, workInProgress, renderLanes);
    case 4:
      return (
        pushHostContainer(
          workInProgress,
          workInProgress.stateNode.containerInfo
        ),
        (updateLanes = workInProgress.pendingProps),
        null === current
          ? (workInProgress.child = reconcileChildFibers(
              workInProgress,
              null,
              updateLanes,
              renderLanes
            ))
          : reconcileChildren(
              current,
              workInProgress,
              updateLanes,
              renderLanes
            ),
        workInProgress.child
      );
    case 11:
      return (
        (updateLanes = workInProgress.type),
        (dependencies = workInProgress.pendingProps),
        (dependencies =
          workInProgress.elementType === updateLanes
            ? dependencies
            : resolveDefaultProps(updateLanes, dependencies)),
        updateForwardRef(
          current,
          workInProgress,
          updateLanes,
          dependencies,
          renderLanes
        )
      );
    case 7:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps,
          renderLanes
        ),
        workInProgress.child
      );
    case 8:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 12:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 10:
      a: {
        updateLanes = workInProgress.type._context;
        dependencies = workInProgress.pendingProps;
        init = workInProgress.memoizedProps;
        nextState = dependencies.value;
        pushProvider(workInProgress, updateLanes, nextState);
        if (!enableLazyContextPropagation && null !== init)
          if (
            ((nextState = calculateChangedBits(
              updateLanes,
              nextState,
              init.value
            )),
            0 === nextState)
          ) {
            if (init.children === dependencies.children) {
              workInProgress = bailoutOnAlreadyFinishedWork(
                current,
                workInProgress,
                renderLanes
              );
              break a;
            }
          } else
            propagateContextChange(
              workInProgress,
              updateLanes,
              nextState,
              renderLanes
            );
        reconcileChildren(
          current,
          workInProgress,
          dependencies.children,
          renderLanes
        );
        workInProgress = workInProgress.child;
      }
      return workInProgress;
    case 9:
      return (
        (dependencies = workInProgress.type),
        (init = workInProgress.pendingProps),
        (updateLanes = init.children),
        prepareToReadContext(workInProgress, renderLanes),
        (dependencies = readContext(dependencies, init.unstable_observedBits)),
        (updateLanes = updateLanes(dependencies)),
        (workInProgress.flags |= 1),
        reconcileChildren(current, workInProgress, updateLanes, renderLanes),
        workInProgress.child
      );
    case 14:
      return (
        (dependencies = workInProgress.type),
        (init = resolveDefaultProps(dependencies, workInProgress.pendingProps)),
        (init = resolveDefaultProps(dependencies.type, init)),
        updateMemoComponent(
          current,
          workInProgress,
          dependencies,
          init,
          updateLanes,
          renderLanes
        )
      );
    case 15:
      return updateSimpleMemoComponent(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        updateLanes,
        renderLanes
      );
    case 17:
      return (
        (updateLanes = workInProgress.type),
        (dependencies = workInProgress.pendingProps),
        (dependencies =
          workInProgress.elementType === updateLanes
            ? dependencies
            : resolveDefaultProps(updateLanes, dependencies)),
        null !== current &&
          ((current.alternate = null),
          (workInProgress.alternate = null),
          (workInProgress.flags |= 2)),
        (workInProgress.tag = 1),
        prepareToReadContext(workInProgress, renderLanes),
        constructClassInstance(workInProgress, updateLanes, dependencies),
        mountClassInstance(
          workInProgress,
          updateLanes,
          dependencies,
          renderLanes
        ),
        finishClassComponent(
          null,
          workInProgress,
          updateLanes,
          !0,
          !1,
          renderLanes
        )
      );
    case 19:
      return updateSuspenseListComponent(current, workInProgress, renderLanes);
    case 21:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 22:
      return updateOffscreenComponent(current, workInProgress, renderLanes);
    case 23:
      return updateOffscreenComponent(current, workInProgress, renderLanes);
    case 24:
      return (
        (dependencies = updateLanes),
        prepareToReadContext(workInProgress, renderLanes),
        (updateLanes = readContext(CacheContext)),
        null === current
          ? (null === pooledCache && (pooledCache = new Map()),
            (dependencies = pooledCache),
            (workInProgress.memoizedState = {
              parent: updateLanes,
              cache: dependencies
            }),
            initializeUpdateQueue(workInProgress),
            pushProvider(workInProgress, CacheContext, dependencies))
          : (0 !== (renderLanes & dependencies) &&
              (cloneUpdateQueue(current, workInProgress),
              processUpdateQueue(workInProgress, null, null, renderLanes)),
            (dependencies = current.memoizedState),
            (init = workInProgress.memoizedState),
            dependencies.parent !== updateLanes
              ? ((dependencies = { parent: updateLanes, cache: updateLanes }),
                (workInProgress.memoizedState = dependencies),
                0 === workInProgress.lanes &&
                  (workInProgress.memoizedState = workInProgress.updateQueue.baseState = dependencies),
                pushProvider(workInProgress, CacheContext, updateLanes))
              : ((updateLanes = init.cache),
                pushProvider(workInProgress, CacheContext, updateLanes),
                updateLanes !== dependencies.cache &&
                  propagateContextChange(
                    workInProgress,
                    CacheContext,
                    1073741823,
                    renderLanes
                  ))),
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
  }
  throw Error(formatProdErrorMessage(156, workInProgress.tag));
};
function markSpawnedWork(lane) {
  null === spawnedWorkDuringRender
    ? (spawnedWorkDuringRender = [lane])
    : spawnedWorkDuringRender.push(lane);
}
function scheduleInteractions(root, lane, interactions) {
  if (0 < interactions.size) {
    var pendingInteractionMap = root.pendingInteractionMap,
      pendingInteractions = pendingInteractionMap.get(lane);
    null != pendingInteractions
      ? interactions.forEach(function(interaction) {
          pendingInteractions.has(interaction) || interaction.__count++;
          pendingInteractions.add(interaction);
        })
      : (pendingInteractionMap.set(lane, new Set(interactions)),
        interactions.forEach(function(interaction) {
          interaction.__count++;
        }));
    pendingInteractionMap = tracing.__subscriberRef.current;
    if (null !== pendingInteractionMap)
      pendingInteractionMap.onWorkScheduled(
        interactions,
        1e3 * lane + root.interactionThreadID
      );
  }
}
function schedulePendingInteractions(root, lane) {
  scheduleInteractions(root, lane, tracing.__interactionsRef.current);
}
function startWorkOnPendingInteractions(root, lanes) {
  var interactions = new Set();
  root.pendingInteractionMap.forEach(function(
    scheduledInteractions,
    scheduledLane
  ) {
    0 !== (lanes & scheduledLane) &&
      scheduledInteractions.forEach(function(interaction) {
        return interactions.add(interaction);
      });
  });
  root.memoizedInteractions = interactions;
  if (0 < interactions.size) {
    var subscriber = tracing.__subscriberRef.current;
    if (null !== subscriber) {
      root = 1e3 * lanes + root.interactionThreadID;
      try {
        subscriber.onWorkStarted(interactions, root);
      } catch (error) {
        scheduleCallback(99, function() {
          throw error;
        });
      }
    }
  }
}
function finishPendingInteractions(root, committedLanes) {
  var remainingLanesAfterCommit = root.pendingLanes;
  try {
    var subscriber = tracing.__subscriberRef.current;
    if (null !== subscriber && 0 < root.memoizedInteractions.size)
      subscriber.onWorkStopped(
        root.memoizedInteractions,
        1e3 * committedLanes + root.interactionThreadID
      );
  } catch (error) {
    scheduleCallback(99, function() {
      throw error;
    });
  } finally {
    var pendingInteractionMap = root.pendingInteractionMap;
    pendingInteractionMap.forEach(function(scheduledInteractions, lane) {
      0 === (remainingLanesAfterCommit & lane) &&
        (pendingInteractionMap.delete(lane),
        scheduledInteractions.forEach(function(interaction) {
          interaction.__count--;
          if (null !== subscriber && 0 === interaction.__count)
            try {
              subscriber.onInteractionScheduledWorkCompleted(interaction);
            } catch (error$137) {
              scheduleCallback(99, function() {
                throw error$137;
              });
            }
        }));
    });
  }
}
function FiberNode(tag, pendingProps, key, mode) {
  this.tag = tag;
  this.key = key;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = pendingProps;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = mode;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function createFiber(tag, pendingProps, key, mode) {
  return new FiberNode(tag, pendingProps, key, mode);
}
function shouldConstruct(Component) {
  Component = Component.prototype;
  return !(!Component || !Component.isReactComponent);
}
function resolveLazyComponentTag(Component) {
  if ("function" === typeof Component)
    return shouldConstruct(Component) ? 1 : 0;
  if (void 0 !== Component && null !== Component) {
    Component = Component.$$typeof;
    if (Component === REACT_FORWARD_REF_TYPE) return 11;
    if (Component === REACT_MEMO_TYPE) return 14;
  }
  return 2;
}
function createWorkInProgress(current, pendingProps) {
  var workInProgress = current.alternate;
  null === workInProgress
    ? ((workInProgress = createFiber(
        current.tag,
        pendingProps,
        current.key,
        current.mode
      )),
      (workInProgress.elementType = current.elementType),
      (workInProgress.type = current.type),
      (workInProgress.stateNode = current.stateNode),
      (workInProgress.alternate = current),
      (current.alternate = workInProgress))
    : ((workInProgress.pendingProps = pendingProps),
      (workInProgress.type = current.type),
      (workInProgress.flags = 0),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.deletions = null));
  workInProgress.flags = current.flags & 262144;
  workInProgress.childLanes = current.childLanes;
  workInProgress.lanes = current.lanes;
  workInProgress.child = current.child;
  workInProgress.memoizedProps = current.memoizedProps;
  workInProgress.memoizedState = current.memoizedState;
  workInProgress.updateQueue = current.updateQueue;
  pendingProps = current.dependencies;
  workInProgress.dependencies =
    null === pendingProps
      ? null
      : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
  workInProgress.sibling = current.sibling;
  workInProgress.index = current.index;
  workInProgress.ref = current.ref;
  return workInProgress;
}
function createFiberFromTypeAndProps(
  type,
  key,
  pendingProps,
  owner,
  mode,
  lanes
) {
  var fiberTag = 2;
  owner = type;
  if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
  else if ("string" === typeof type) fiberTag = 5;
  else
    a: switch (type) {
      case REACT_FRAGMENT_TYPE:
        return createFiberFromFragment(pendingProps.children, mode, lanes, key);
      case REACT_DEBUG_TRACING_MODE_TYPE:
        fiberTag = 8;
        mode |= 4;
        break;
      case REACT_STRICT_MODE_TYPE:
        fiberTag = 8;
        var level =
          null == pendingProps.unstable_level ? 1 : pendingProps.unstable_level;
        1 <= level && (mode |= 8);
        enableStrictEffects && 2 <= level && (mode |= 16);
        break;
      case REACT_PROFILER_TYPE:
        return (
          (type = createFiber(12, pendingProps, key, mode | 2)),
          (type.elementType = REACT_PROFILER_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_SUSPENSE_TYPE:
        return (
          (type = createFiber(13, pendingProps, key, mode)),
          (type.elementType = REACT_SUSPENSE_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_SUSPENSE_LIST_TYPE:
        return (
          (type = createFiber(19, pendingProps, key, mode)),
          (type.elementType = REACT_SUSPENSE_LIST_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_OFFSCREEN_TYPE:
        return createFiberFromOffscreen(pendingProps, mode, lanes, key);
      case REACT_LEGACY_HIDDEN_TYPE:
        return (
          (type = createFiber(23, pendingProps, key, mode)),
          (type.elementType = REACT_LEGACY_HIDDEN_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_SCOPE_TYPE:
        return (
          (key = createFiber(21, pendingProps, key, mode)),
          (key.type = type),
          (key.elementType = type),
          (key.lanes = lanes),
          key
        );
      case REACT_CACHE_TYPE:
        return (
          (type = createFiber(24, pendingProps, key, mode)),
          (type.elementType = REACT_CACHE_TYPE),
          (type.lanes = lanes),
          type
        );
      default:
        if ("object" === typeof type && null !== type)
          switch (type.$$typeof) {
            case REACT_PROVIDER_TYPE:
              fiberTag = 10;
              break a;
            case REACT_CONTEXT_TYPE:
              fiberTag = 9;
              break a;
            case REACT_FORWARD_REF_TYPE:
              fiberTag = 11;
              break a;
            case REACT_MEMO_TYPE:
              fiberTag = 14;
              break a;
            case REACT_LAZY_TYPE:
              fiberTag = 16;
              owner = null;
              break a;
          }
        throw Error(
          formatProdErrorMessage(130, null == type ? type : typeof type, "")
        );
    }
  key = createFiber(fiberTag, pendingProps, key, mode);
  key.elementType = type;
  key.type = owner;
  key.lanes = lanes;
  return key;
}
function createFiberFromFragment(elements, mode, lanes, key) {
  elements = createFiber(7, elements, key, mode);
  elements.lanes = lanes;
  return elements;
}
function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
  pendingProps = createFiber(22, pendingProps, key, mode);
  pendingProps.elementType = REACT_OFFSCREEN_TYPE;
  pendingProps.lanes = lanes;
  return pendingProps;
}
function createFiberFromText(content, mode, lanes) {
  content = createFiber(6, content, null, mode);
  content.lanes = lanes;
  return content;
}
function createFiberFromPortal(portal, mode, lanes) {
  mode = createFiber(
    4,
    null !== portal.children ? portal.children : [],
    portal.key,
    mode
  );
  mode.lanes = lanes;
  mode.stateNode = {
    containerInfo: portal.containerInfo,
    pendingChildren: null,
    implementation: portal.implementation
  };
  return mode;
}
function FiberRootNode(containerInfo, tag, hydrate) {
  this.tag = tag;
  this.containerInfo = containerInfo;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = hydrate;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = createLaneMap(0);
  this.expirationTimes = createLaneMap(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = createLaneMap(0);
  this.pooledCache = null;
  this.pooledCacheLanes = 0;
  this.mutableSourceEagerHydrationData = null;
  this.interactionThreadID = tracing.unstable_getThreadID();
  this.memoizedInteractions = new Set();
  this.pendingInteractionMap = new Map();
  this.hydrationCallbacks = null;
}
function createPortal(children, containerInfo, implementation) {
  var key =
    3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: REACT_PORTAL_TYPE,
    key: null == key ? null : "" + key,
    children: children,
    containerInfo: containerInfo,
    implementation: implementation
  };
}
function updateContainer(element, container, parentComponent, callback) {
  parentComponent = container.current;
  var eventTime = requestEventTime(),
    lane = requestUpdateLane(parentComponent);
  null === container.context
    ? (container.context = emptyContextObject)
    : (container.pendingContext = emptyContextObject);
  container = createUpdate(eventTime, lane);
  container.payload = { element: element };
  callback = void 0 === callback ? null : callback;
  null !== callback && (container.callback = callback);
  enqueueUpdate(parentComponent, container);
  element = scheduleUpdateOnFiber(parentComponent, lane, eventTime);
  null !== element && entangleTransitions(element, parentComponent, lane);
  return lane;
}
function markRetryLaneImpl(fiber, retryLane) {
  fiber = fiber.memoizedState;
  if (null !== fiber && null !== fiber.dehydrated) {
    var a = fiber.retryLane;
    fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
  }
}
function markRetryLaneIfNotHydrated(fiber, retryLane) {
  markRetryLaneImpl(fiber, retryLane);
  (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
}
function runWithPriority(priority, fn) {
  var previousPriority = currentUpdateLanePriority;
  try {
    return (currentUpdateLanePriority = priority), fn();
  } finally {
    currentUpdateLanePriority = previousPriority;
  }
}
function emptyFindFiberByHostInstance() {
  return null;
}
function ReactDOMRoot(container, options) {
  var mutableSources =
      (null != options &&
        null != options.hydrationOptions &&
        options.hydrationOptions.mutableSources) ||
      null,
    hydrationCallbacks = (null != options && options.hydrationOptions) || null,
    strictModeLevelOverride =
      null != options && null != options.unstable_strictModeLevel
        ? options.unstable_strictModeLevel
        : null;
  options = new FiberRootNode(
    container,
    1,
    null != options && !0 === options.hydrate
  );
  options.hydrationCallbacks = hydrationCallbacks;
  hydrationCallbacks = 1;
  null !== strictModeLevelOverride
    ? (1 <= strictModeLevelOverride && (hydrationCallbacks |= 8),
      enableStrictEffects &&
        2 <= strictModeLevelOverride &&
        (hydrationCallbacks |= 16))
    : (hydrationCallbacks =
        enableStrictEffects && createRootStrictEffectsByDefault
          ? hydrationCallbacks | 24
          : hydrationCallbacks | 8);
  strictModeLevelOverride = createFiber(3, null, null, hydrationCallbacks);
  options.current = strictModeLevelOverride;
  strictModeLevelOverride.stateNode = options;
  hydrationCallbacks = new Map();
  options.pooledCache = hydrationCallbacks;
  strictModeLevelOverride.memoizedState = {
    element: null,
    cache: hydrationCallbacks
  };
  initializeUpdateQueue(strictModeLevelOverride);
  container[internalContainerInstanceKey] = options.current;
  listenToAllSupportedEvents(
    8 === container.nodeType ? container.parentNode : container
  );
  if (mutableSources)
    for (container = 0; container < mutableSources.length; container++)
      (strictModeLevelOverride = mutableSources[container]),
        (hydrationCallbacks = strictModeLevelOverride._getVersion),
        (hydrationCallbacks = hydrationCallbacks(
          strictModeLevelOverride._source
        )),
        null == options.mutableSourceEagerHydrationData
          ? (options.mutableSourceEagerHydrationData = [
              strictModeLevelOverride,
              hydrationCallbacks
            ])
          : options.mutableSourceEagerHydrationData.push(
              strictModeLevelOverride,
              hydrationCallbacks
            );
  this._internalRoot = options;
}
ReactDOMRoot.prototype.render = function(children) {
  updateContainer(children, this._internalRoot, null, null);
};
ReactDOMRoot.prototype.unmount = function() {
  var root = this._internalRoot,
    container = root.containerInfo;
  updateContainer(null, root, null, function() {
    container[internalContainerInstanceKey] = null;
  });
};
function createRoot(container, options) {
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
  return new ReactDOMRoot(container, options);
}
function isValidContainer(node) {
  return !(
    !node ||
    (1 !== node.nodeType &&
      9 !== node.nodeType &&
      11 !== node.nodeType &&
      (8 !== node.nodeType ||
        " react-mount-point-unstable " !== node.nodeValue))
  );
}
function registerReactDOMEvent(target, domEventName, isCapturePhaseListener) {
  if (
    1 !== target.nodeType &&
    "function" !== typeof target.getChildContextValues
  )
    if ("function" === typeof target.addEventListener) {
      var eventSystemFlags = 1,
        listenerSet = getEventListenerSet(target),
        listenerSetKey =
          domEventName + "__" + (isCapturePhaseListener ? "capture" : "bubble");
      listenerSet.has(listenerSetKey) ||
        (isCapturePhaseListener && (eventSystemFlags |= 4),
        addTrappedEventListener(
          target,
          domEventName,
          eventSystemFlags,
          isCapturePhaseListener
        ),
        listenerSet.add(listenerSetKey));
    } else throw Error(formatProdErrorMessage(369));
}
attemptSynchronousHydration = function(fiber) {
  switch (fiber.tag) {
    case 3:
      var root$138 = fiber.stateNode;
      if (root$138.hydrate) {
        var lanes = getHighestPriorityLanes(root$138.pendingLanes);
        root$138.expiredLanes |= lanes & root$138.pendingLanes;
        ensureRootIsScheduled(root$138, now());
        0 === (executionContext & 24) &&
          (resetRenderTimer(), flushSyncCallbackQueue());
      }
      break;
    case 13:
      var eventTime = requestEventTime();
      flushSync(function() {
        return scheduleUpdateOnFiber(fiber, 1, eventTime);
      });
      markRetryLaneIfNotHydrated(fiber, 4);
  }
};
attemptDiscreteHydration = function(fiber) {
  if (13 === fiber.tag) {
    var eventTime = requestEventTime();
    scheduleUpdateOnFiber(fiber, 4, eventTime);
    markRetryLaneIfNotHydrated(fiber, 4);
  }
};
attemptContinuousHydration = function(fiber) {
  if (13 === fiber.tag) {
    var eventTime = requestEventTime();
    scheduleUpdateOnFiber(fiber, 134217728, eventTime);
    markRetryLaneIfNotHydrated(fiber, 134217728);
  }
};
attemptHydrationAtCurrentPriority = function(fiber) {
  if (13 === fiber.tag) {
    var eventTime = requestEventTime(),
      lane = requestUpdateLane(fiber);
    scheduleUpdateOnFiber(fiber, lane, eventTime);
    markRetryLaneIfNotHydrated(fiber, lane);
  }
};
attemptHydrationAtPriority = runWithPriority;
restoreImpl = function(domElement, tag, props) {
  switch (tag) {
    case "input":
      updateWrapper(domElement, props);
      tag = props.name;
      if ("radio" === props.type && null != tag) {
        for (props = domElement; props.parentNode; ) props = props.parentNode;
        props = props.querySelectorAll(
          "input[name=" + JSON.stringify("" + tag) + '][type="radio"]'
        );
        for (tag = 0; tag < props.length; tag++) {
          var otherNode = props[tag];
          if (otherNode !== domElement && otherNode.form === domElement.form) {
            var otherProps = getFiberCurrentPropsFromNode(otherNode);
            if (!otherProps) throw Error(formatProdErrorMessage(90));
            updateValueIfChanged(otherNode);
            updateWrapper(otherNode, otherProps);
          }
        }
      }
      break;
    case "textarea":
      updateWrapper$1(domElement, props);
      break;
    case "select":
      (tag = props.value),
        null != tag && updateOptions(domElement, !!props.multiple, tag, !1);
  }
};
batchedUpdatesImpl = batchedUpdates$1;
discreteUpdatesImpl = function(fn, a, b, c, d) {
  var previousLanePriority = currentUpdateLanePriority;
  try {
    return (currentUpdateLanePriority = 12), fn(a, b, c, d);
  } finally {
    (currentUpdateLanePriority = previousLanePriority),
      0 === executionContext && (resetRenderTimer(), flushSyncCallbackQueue());
  }
};
flushDiscreteUpdatesImpl = function() {
  0 === (executionContext & 25) &&
    (flushSyncCallbackQueue(), flushPassiveEffects());
};
batchedEventUpdatesImpl = function(fn, a) {
  var prevExecutionContext = executionContext;
  executionContext |= 2;
  try {
    return fn(a);
  } finally {
    (executionContext = prevExecutionContext),
      0 === executionContext && (resetRenderTimer(), flushSyncCallbackQueue());
  }
};
var Internals = {
    Events: [
      getInstanceFromNode$1,
      getNodeFromInstance,
      getFiberCurrentPropsFromNode,
      enqueueStateRestore,
      restoreStateIfNeeded,
      flushPassiveEffects,
      { current: !1 }
    ]
  },
  devToolsConfig$jscomp$inline_1388 = {
    findFiberByHostInstance: getClosestInstanceFromNode,
    bundleType: 0,
    version: "17.0.2",
    rendererPackageName: "react-dom"
  };
var internals$jscomp$inline_1784 = {
  bundleType: devToolsConfig$jscomp$inline_1388.bundleType,
  version: devToolsConfig$jscomp$inline_1388.version,
  rendererPackageName: devToolsConfig$jscomp$inline_1388.rendererPackageName,
  rendererConfig: devToolsConfig$jscomp$inline_1388.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: ReactSharedInternals.ReactCurrentDispatcher,
  findHostInstanceByFiber: function(fiber) {
    fiber = findCurrentFiberUsingSlowPath(fiber);
    fiber = null !== fiber ? findCurrentHostFiberImpl(fiber) : null;
    return null === fiber ? null : fiber.stateNode;
  },
  findFiberByHostInstance:
    devToolsConfig$jscomp$inline_1388.findFiberByHostInstance ||
    emptyFindFiberByHostInstance,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var hook$jscomp$inline_1785 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (
    !hook$jscomp$inline_1785.isDisabled &&
    hook$jscomp$inline_1785.supportsFiber
  )
    try {
      (rendererID = hook$jscomp$inline_1785.inject(
        internals$jscomp$inline_1784
      )),
        (injectedHook = hook$jscomp$inline_1785);
    } catch (err) {}
}
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Internals;
exports.createPortal = function(children, container) {
  var key =
    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(200));
  return createPortal(children, container, null, key);
};
exports.createRoot = createRoot;
exports.flushSync = flushSync;
exports.unstable_batchedUpdates = batchedUpdates$1;
exports.unstable_createEventHandle = function(type, options) {
  function eventHandle(target, callback) {
    if ("function" !== typeof callback)
      throw Error(formatProdErrorMessage(370));
    doesTargetHaveEventHandle(target, eventHandle) ||
      (addEventHandleToTarget(target, eventHandle),
      registerReactDOMEvent(target, type, isCapturePhaseListener));
    var listener = {
        callback: callback,
        capture: isCapturePhaseListener,
        type: type
      },
      targetListeners = target[internalEventHandlerListenersKey] || null;
    null === targetListeners &&
      ((targetListeners = new Set()),
      (target[internalEventHandlerListenersKey] = targetListeners));
    targetListeners.add(listener);
    return function() {
      targetListeners.delete(listener);
    };
  }
  if (!allNativeEvents.has(type))
    throw Error(formatProdErrorMessage(372, type));
  var isCapturePhaseListener = !1;
  null != options &&
    ((options = options.capture),
    "boolean" === typeof options && (isCapturePhaseListener = options));
  return eventHandle;
};
exports.unstable_createRoot = createRoot;
exports.unstable_flushControlled = function(fn) {
  var prevExecutionContext = executionContext;
  executionContext |= 1;
  var previousLanePriority = currentUpdateLanePriority;
  try {
    (currentUpdateLanePriority = 15), fn();
  } finally {
    (currentUpdateLanePriority = previousLanePriority),
      (executionContext = prevExecutionContext),
      0 === executionContext && (resetRenderTimer(), flushSyncCallbackQueue());
  }
};
exports.unstable_isNewReconciler = !1;
exports.unstable_runWithPriority = runWithPriority;
exports.unstable_scheduleHydration = function(target) {
  if (target) {
    var updateLanePriority = currentUpdateLanePriority;
    target = {
      blockedOn: null,
      target: target,
      lanePriority: updateLanePriority
    };
    for (
      var i = 0;
      i < queuedExplicitHydrationTargets.length &&
      !(updateLanePriority <= queuedExplicitHydrationTargets[i].lanePriority);
      i++
    );
    queuedExplicitHydrationTargets.splice(i, 0, target);
    0 === i && attemptExplicitHydrationTarget(target);
  }
};
exports.version = "17.0.2";

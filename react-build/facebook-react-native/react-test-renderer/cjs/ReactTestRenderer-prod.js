/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @nolint
 * @preventMunge
 * @generated
 */

"use strict";
var Scheduler = require("scheduler/unstable_mock"),
  React = require("react"),
  Scheduler$1 = require("scheduler");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1;
    descriptor.configurable = !0;
    "value" in descriptor && (descriptor.writable = !0);
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  protoProps && _defineProperties(Constructor.prototype, protoProps);
  staticProps && _defineProperties(Constructor, staticProps);
  return Constructor;
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
  symbolFor("react.scope");
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
function assertIsMounted(fiber) {
  if (getNearestMountedFiber(fiber) !== fiber)
    throw Error("Unable to find node on an unmounted component.");
}
function findCurrentFiberUsingSlowPath(fiber) {
  var alternate = fiber.alternate;
  if (!alternate) {
    alternate = getNearestMountedFiber(fiber);
    if (null === alternate)
      throw Error("Unable to find node on an unmounted component.");
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
      throw Error("Unable to find node on an unmounted component.");
    }
    if (a.return !== b.return) (a = parentA), (b = parentB);
    else {
      for (var didFindChild = !1, child$0 = parentA.child; child$0; ) {
        if (child$0 === a) {
          didFindChild = !0;
          a = parentA;
          b = parentB;
          break;
        }
        if (child$0 === b) {
          didFindChild = !0;
          b = parentA;
          a = parentB;
          break;
        }
        child$0 = child$0.sibling;
      }
      if (!didFindChild) {
        for (child$0 = parentB.child; child$0; ) {
          if (child$0 === a) {
            didFindChild = !0;
            a = parentB;
            b = parentA;
            break;
          }
          if (child$0 === b) {
            didFindChild = !0;
            b = parentB;
            a = parentA;
            break;
          }
          child$0 = child$0.sibling;
        }
        if (!didFindChild)
          throw Error(
            "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
          );
      }
    }
    if (a.alternate !== b)
      throw Error(
        "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
      );
  }
  if (3 !== a.tag)
    throw Error("Unable to find node on an unmounted component.");
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
var Scheduler_scheduleCallback = Scheduler$1.unstable_scheduleCallback,
  Scheduler_cancelCallback = Scheduler$1.unstable_cancelCallback,
  Scheduler_shouldYield = Scheduler$1.unstable_shouldYield,
  Scheduler_requestPaint = Scheduler$1.unstable_requestPaint,
  Scheduler_now = Scheduler$1.unstable_now,
  Scheduler_ImmediatePriority = Scheduler$1.unstable_ImmediatePriority,
  Scheduler_UserBlockingPriority = Scheduler$1.unstable_UserBlockingPriority,
  Scheduler_NormalPriority = Scheduler$1.unstable_NormalPriority,
  Scheduler_LowPriority = Scheduler$1.unstable_LowPriority,
  Scheduler_IdlePriority = Scheduler$1.unstable_IdlePriority,
  requestPaint =
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
      throw Error("Unknown priority level.");
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
      throw Error(
        "Invalid update priority: " + lanePriority + ". This is a bug in React."
      );
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
  throw Error(
    "Invalid update priority: " + lanePriority + ". This is a bug in React."
  );
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
  remainingLanes = root.entanglements;
  var eventTimes = root.eventTimes;
  for (root = root.expirationTimes; 0 < noLongerPendingLanes; ) {
    var index$5 = 31 - clz32(noLongerPendingLanes),
      lane = 1 << index$5;
    remainingLanes[index$5] = 0;
    eventTimes[index$5] = -1;
    root[index$5] = -1;
    noLongerPendingLanes &= ~lane;
  }
}
function markRootEntangled(root, entangledLanes) {
  var rootEntangledLanes = (root.entangledLanes |= entangledLanes);
  for (root = root.entanglements; rootEntangledLanes; ) {
    var index$6 = 31 - clz32(rootEntangledLanes),
      lane = 1 << index$6;
    (lane & entangledLanes) | (root[index$6] & entangledLanes) &&
      (root[index$6] |= entangledLanes);
    rootEntangledLanes &= ~lane;
  }
}
var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback,
  log = Math.log,
  LN2 = Math.LN2;
function clz32Fallback(lanes) {
  return 0 === lanes ? 32 : (31 - ((log(lanes) / LN2) | 0)) | 0;
}
var Scheduler_now$1 = Scheduler$1.unstable_now;
Scheduler_now$1();
function shim() {
  throw Error(
    "The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue."
  );
}
var NO_CONTEXT = {},
  UPDATE_SIGNAL = {},
  nodeToInstanceMap = new WeakMap();
function getPublicInstance(inst) {
  switch (inst.tag) {
    case "INSTANCE":
      var createNodeMock = inst.rootContainerInstance.createNodeMock;
      createNodeMock = createNodeMock({ type: inst.type, props: inst.props });
      "object" === typeof createNodeMock &&
        null !== createNodeMock &&
        nodeToInstanceMap.set(createNodeMock, inst);
      return createNodeMock;
    default:
      return inst;
  }
}
function appendChild(parentInstance, child) {
  var index = parentInstance.children.indexOf(child);
  -1 !== index && parentInstance.children.splice(index, 1);
  parentInstance.children.push(child);
}
function insertBefore(parentInstance, child, beforeChild) {
  var index = parentInstance.children.indexOf(child);
  -1 !== index && parentInstance.children.splice(index, 1);
  beforeChild = parentInstance.children.indexOf(beforeChild);
  parentInstance.children.splice(beforeChild, 0, child);
}
var scheduleTimeout = setTimeout,
  cancelTimeout = clearTimeout,
  clientId = 0;
function describeComponentFrame(name, source, ownerName) {
  source = "";
  ownerName && (source = " (created by " + ownerName + ")");
  return "\n    in " + (name || "Unknown") + source;
}
function describeFunctionComponentFrame(fn, source) {
  return fn
    ? describeComponentFrame(fn.displayName || fn.name || null, source, null)
    : "";
}
var valueStack = [],
  index = -1;
function createCursor(defaultValue) {
  return { current: defaultValue };
}
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
  contextStackCursor = createCursor(emptyContextObject),
  didPerformWorkStackCursor = createCursor(!1),
  previousContext = emptyContextObject;
function getMaskedContext(workInProgress, unmaskedContext) {
  var contextTypes = workInProgress.type.contextTypes;
  if (!contextTypes) return emptyContextObject;
  var instance = workInProgress.stateNode;
  if (
    instance &&
    instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext
  )
    return instance.__reactInternalMemoizedMaskedChildContext;
  var context = {},
    key;
  for (key in contextTypes) context[key] = unmaskedContext[key];
  instance &&
    ((workInProgress = workInProgress.stateNode),
    (workInProgress.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext),
    (workInProgress.__reactInternalMemoizedMaskedChildContext = context));
  return context;
}
function isContextProvider(type) {
  type = type.childContextTypes;
  return null !== type && void 0 !== type;
}
function popContext() {
  pop(didPerformWorkStackCursor);
  pop(contextStackCursor);
}
function pushTopLevelContextObject(fiber, context, didChange) {
  if (contextStackCursor.current !== emptyContextObject)
    throw Error(
      "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue."
    );
  push(contextStackCursor, context);
  push(didPerformWorkStackCursor, didChange);
}
function processChildContext(fiber, type, parentContext) {
  var instance = fiber.stateNode;
  type = type.childContextTypes;
  if ("function" !== typeof instance.getChildContext) return parentContext;
  instance = instance.getChildContext();
  for (var contextKey in instance)
    if (!(contextKey in type))
      throw Error(
        (getComponentNameFromFiber(fiber) || "Unknown") +
          '.getChildContext(): key "' +
          contextKey +
          '" is not defined in childContextTypes.'
      );
  return Object.assign({}, parentContext, instance);
}
function pushContextProvider(workInProgress) {
  workInProgress =
    ((workInProgress = workInProgress.stateNode) &&
      workInProgress.__reactInternalMemoizedMergedChildContext) ||
    emptyContextObject;
  previousContext = contextStackCursor.current;
  push(contextStackCursor, workInProgress);
  push(didPerformWorkStackCursor, didPerformWorkStackCursor.current);
  return !0;
}
function invalidateContextProvider(workInProgress, type, didChange) {
  var instance = workInProgress.stateNode;
  if (!instance)
    throw Error(
      "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue."
    );
  didChange
    ? ((workInProgress = processChildContext(
        workInProgress,
        type,
        previousContext
      )),
      (instance.__reactInternalMemoizedMergedChildContext = workInProgress),
      pop(didPerformWorkStackCursor),
      pop(contextStackCursor),
      push(contextStackCursor, workInProgress))
    : pop(didPerformWorkStackCursor);
  push(didPerformWorkStackCursor, didChange);
}
var rendererID = null,
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
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is,
  hasOwnProperty = Object.prototype.hasOwnProperty;
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
      !hasOwnProperty.call(objB, keysA[keysB]) ||
      !objectIs(objA[keysA[keysB]], objB[keysA[keysB]])
    )
      return !1;
  return !0;
}
function describeFiber(fiber) {
  switch (fiber.tag) {
    case 5:
      return describeComponentFrame(fiber.type, null, null);
    case 16:
      return describeComponentFrame("Lazy", null, null);
    case 13:
      return describeComponentFrame("Suspense", null, null);
    case 19:
      return describeComponentFrame("SuspenseList", null, null);
    case 0:
    case 2:
    case 15:
      return describeFunctionComponentFrame(fiber.type, null);
    case 11:
      return describeFunctionComponentFrame(fiber.type.render, null);
    case 1:
      return (fiber = describeFunctionComponentFrame(fiber.type, null)), fiber;
    default:
      return "";
  }
}
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
var valueCursor = createCursor(null),
  currentlyRenderingFiber = null,
  lastContextDependency = null,
  lastContextWithAllBitsObserved = null;
function resetContextDependencies() {
  lastContextWithAllBitsObserved = lastContextDependency = currentlyRenderingFiber = null;
}
function popProvider(context) {
  var currentValue = valueCursor.current;
  pop(valueCursor);
  context._currentValue2 = currentValue;
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
function prepareToReadContext(workInProgress, renderLanes) {
  currentlyRenderingFiber = workInProgress;
  lastContextWithAllBitsObserved = lastContextDependency = null;
  workInProgress = workInProgress.dependencies;
  null !== workInProgress &&
    null !== workInProgress.firstContext &&
    (0 !== (workInProgress.lanes & renderLanes) && (didReceiveUpdate = !0),
    (workInProgress.firstContext = null));
}
function readContext(context, observedBits) {
  var value = context._currentValue2;
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
        throw Error(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
        );
      lastContextDependency = context;
      currentlyRenderingFiber.dependencies = {
        lanes: 0,
        firstContext: context,
        responders: null
      };
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
    null !== workInProgressRoot && 0 !== (fiber.mode & 1)
      ? ((fiber = updateQueue.interleaved),
        null === fiber
          ? ((update.next = update),
            null === interleavedQueues
              ? (interleavedQueues = [updateQueue])
              : interleavedQueues.push(updateQueue))
          : ((update.next = fiber.next), (fiber.next = update)),
        (updateQueue.interleaved = update))
      : ((fiber = updateQueue.pending),
        null === fiber
          ? (update.next = update)
          : ((update.next = fiber.next), (fiber.next = update)),
        (updateQueue.pending = update)));
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
        if ("function" !== typeof callback)
          throw Error(
            "Invalid argument passed as callback. Expected a function. Instead received: " +
              callback
          );
        callback.call(instance);
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
  var isLegacyContextConsumer = !1,
    unmaskedContext = emptyContextObject;
  var context = ctor.contextType;
  "object" === typeof context && null !== context
    ? (context = readContext(context))
    : ((unmaskedContext = isContextProvider(ctor)
        ? previousContext
        : contextStackCursor.current),
      (isLegacyContextConsumer = ctor.contextTypes),
      (context = (isLegacyContextConsumer =
        null !== isLegacyContextConsumer && void 0 !== isLegacyContextConsumer)
        ? getMaskedContext(workInProgress, unmaskedContext)
        : emptyContextObject));
  ctor = new ctor(props, context);
  workInProgress.memoizedState =
    null !== ctor.state && void 0 !== ctor.state ? ctor.state : null;
  ctor.updater = classComponentUpdater;
  workInProgress.stateNode = ctor;
  ctor._reactInternals = workInProgress;
  isLegacyContextConsumer &&
    ((workInProgress = workInProgress.stateNode),
    (workInProgress.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext),
    (workInProgress.__reactInternalMemoizedMaskedChildContext = context));
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
  "object" === typeof contextType && null !== contextType
    ? (instance.context = readContext(contextType))
    : ((contextType = isContextProvider(ctor)
        ? previousContext
        : contextStackCursor.current),
      (instance.context = getMaskedContext(workInProgress, contextType)));
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
        if (1 !== element.tag)
          throw Error(
            "Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref"
          );
        var inst = element.stateNode;
      }
      if (!inst)
        throw Error(
          "Missing owner for string ref " +
            returnFiber +
            ". This error is likely caused by a bug in React. Please file an issue."
        );
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
      throw Error(
        "Expected ref to be a function, a string, an object returned by React.createRef(), or null."
      );
    if (!element._owner)
      throw Error(
        "Element ref was specified as a string (" +
          returnFiber +
          ") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information."
      );
  }
  return returnFiber;
}
function throwOnInvalidObjectType(returnFiber, newChild) {
  if ("textarea" !== returnFiber.type)
    throw ((returnFiber = Object.prototype.toString.call(newChild)),
    Error(
      "Objects are not valid as a React child (found: " +
        ("[object Object]" === returnFiber
          ? "object with keys {" + Object.keys(newChild).join(", ") + "}"
          : returnFiber) +
        "). If you meant to render a collection of children, use an array instead."
    ));
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
    if (null !== current && current.elementType === elementType)
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
      throw Error(
        "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
      );
    newChildrenIterable = iteratorFn.call(newChildrenIterable);
    if (null == newChildrenIterable)
      throw Error("An iterable object provided no iterator.");
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
  return function(returnFiber, currentFirstChild, newChild, lanes) {
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
                } else if (isUnkeyedTopLevelFragment.elementType === isObject) {
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
            (getComponentNameFromFiber(returnFiber) || "Component") +
              "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null."
          );
      }
    return deleteRemainingChildren(returnFiber, currentFirstChild);
  };
}
var reconcileChildFibers = ChildReconciler(!0),
  mountChildFibers = ChildReconciler(!1),
  NO_CONTEXT$1 = {},
  contextStackCursor$1 = createCursor(NO_CONTEXT$1),
  contextFiberStackCursor = createCursor(NO_CONTEXT$1),
  rootInstanceStackCursor = createCursor(NO_CONTEXT$1);
function requiredContext(c) {
  if (c === NO_CONTEXT$1)
    throw Error(
      "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
    );
  return c;
}
function pushHostContainer(fiber, nextRootInstance) {
  push(rootInstanceStackCursor, nextRootInstance);
  push(contextFiberStackCursor, fiber);
  push(contextStackCursor$1, NO_CONTEXT$1);
  pop(contextStackCursor$1);
  push(contextStackCursor$1, NO_CONTEXT);
}
function popHostContainer() {
  pop(contextStackCursor$1);
  pop(contextFiberStackCursor);
  pop(rootInstanceStackCursor);
}
function pushHostContext(fiber) {
  requiredContext(rootInstanceStackCursor.current);
  requiredContext(contextStackCursor$1.current) !== NO_CONTEXT &&
    (push(contextFiberStackCursor, fiber),
    push(contextStackCursor$1, NO_CONTEXT));
}
function popHostContext(fiber) {
  contextFiberStackCursor.current === fiber &&
    (pop(contextStackCursor$1), pop(contextFiberStackCursor));
}
var suspenseStackCursor = createCursor(0);
function findFirstSuspended(row) {
  for (var node = row; null !== node; ) {
    if (13 === node.tag) {
      var state = node.memoizedState;
      if (null !== state && (null === state.dehydrated || shim() || shim()))
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
var workInProgressSources = [];
function resetWorkInProgressVersions() {
  for (var i = 0; i < workInProgressSources.length; i++)
    workInProgressSources[i]._workInProgressVersionSecondary = null;
  workInProgressSources.length = 0;
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
  throw Error(
    "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."
  );
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
  current = Component(props, secondArg);
  if (didScheduleRenderPhaseUpdateDuringThisPass) {
    nextRenderLanes = 0;
    do {
      didScheduleRenderPhaseUpdateDuringThisPass = !1;
      if (!(25 > nextRenderLanes))
        throw Error(
          "Too many re-renders. React limits the number of renders to prevent an infinite loop."
        );
      nextRenderLanes += 1;
      workInProgressHook = currentHook = null;
      workInProgress.updateQueue = null;
      ReactCurrentDispatcher$1.current = HooksDispatcherOnRerender;
      current = Component(props, secondArg);
    } while (didScheduleRenderPhaseUpdateDuringThisPass);
  }
  ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
  workInProgress = null !== currentHook && null !== currentHook.next;
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber$1 = null;
  didScheduleRenderPhaseUpdate = !1;
  if (workInProgress)
    throw Error(
      "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
    );
  return current;
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
    if (null === nextCurrentHook)
      throw Error("Rendered more hooks than during the previous render.");
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
  if (null === queue)
    throw Error(
      "Should have a queue. This is likely a bug in React. Please file an issue."
    );
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
  if (null === queue)
    throw Error(
      "Should have a queue. This is likely a bug in React. Please file an issue."
    );
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
  var JSCompiler_inline_result = source._workInProgressVersionSecondary;
  if (null !== JSCompiler_inline_result)
    root = JSCompiler_inline_result === getVersion;
  else if (
    ((root = root.mutableReadLanes), (root = (renderLanes & root) === root))
  )
    (source._workInProgressVersionSecondary = getVersion),
      workInProgressSources.push(source);
  if (root) return getSnapshot(source._source);
  workInProgressSources.push(source);
  throw Error(
    "Cannot read from mutable source during the current render without tearing. This may be a bug in React. Please file an issue."
  );
}
function useMutableSource(hook, source, getSnapshot, subscribe) {
  var root = workInProgressRoot;
  if (null === root)
    throw Error(
      "Expected a work-in-progress root. This is a bug in React. Please file an issue."
    );
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
    if (null !== workInProgressRoot && 0 !== (fiber.mode & 1)) {
      var interleaved = queue.interleaved;
      null === interleaved
        ? ((update.next = update),
          null === interleavedQueues
            ? (interleavedQueues = [queue])
            : interleavedQueues.push(queue))
        : ((update.next = interleaved.next), (interleaved.next = update));
      queue.interleaved = update;
    } else
      (interleaved = queue.pending),
        null === interleaved
          ? (update.next = update)
          : ((update.next = interleaved.next), (interleaved.next = update)),
        (queue.pending = update);
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
  },
  HooksDispatcherOnMount = {
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
      var id = "c_" + (clientId++).toString(36);
      mountState(id);
      return id;
    },
    unstable_isNewReconciler: !1
  },
  HooksDispatcherOnUpdate = {
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
  },
  HooksDispatcherOnRerender = {
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
  },
  ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner,
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
  ) {
    didReceiveUpdate = !1;
    if (0 === (renderLanes & updateLanes))
      return (
        (workInProgress.lanes = current.lanes),
        bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
      );
    0 !== (current.flags & 32768) && (didReceiveUpdate = !0);
  }
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
    prevState = null !== current ? current.memoizedState : null;
  if (
    "hidden" === nextProps.mode ||
    "unstable-defer-without-hiding" === nextProps.mode
  )
    if (0 === (workInProgress.mode & 1))
      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
        push(subtreeRenderLanesCursor, subtreeRenderLanes),
        (subtreeRenderLanes |= renderLanes);
    else {
      if (0 === (renderLanes & 1073741824))
        return (
          (current =
            null !== prevState
              ? prevState.baseLanes | renderLanes
              : renderLanes),
          (workInProgress.lanes = workInProgress.childLanes = 1073741824),
          (workInProgress.memoizedState = {
            baseLanes: current,
            cachePool: null
          }),
          (workInProgress.updateQueue = null),
          push(subtreeRenderLanesCursor, subtreeRenderLanes),
          (subtreeRenderLanes |= current),
          null
        );
      workInProgress.memoizedState = { baseLanes: 0, cachePool: null };
      nextProps = null !== prevState ? prevState.baseLanes : renderLanes;
      push(subtreeRenderLanesCursor, subtreeRenderLanes);
      subtreeRenderLanes |= nextProps;
    }
  else
    null !== prevState
      ? ((nextProps = prevState.baseLanes | renderLanes),
        (workInProgress.memoizedState = null))
      : (nextProps = renderLanes),
      push(subtreeRenderLanesCursor, subtreeRenderLanes),
      (subtreeRenderLanes |= nextProps);
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
  var context = isContextProvider(Component)
    ? previousContext
    : contextStackCursor.current;
  context = getMaskedContext(workInProgress, context);
  prepareToReadContext(workInProgress, renderLanes);
  Component = renderWithHooks(
    current,
    workInProgress,
    Component,
    nextProps,
    context,
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
  if (isContextProvider(Component)) {
    var hasContext = !0;
    pushContextProvider(workInProgress);
  } else hasContext = !1;
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
      contextType = Component.contextType;
    "object" === typeof contextType && null !== contextType
      ? (contextType = readContext(contextType))
      : ((contextType = isContextProvider(Component)
          ? previousContext
          : contextStackCursor.current),
        (contextType = getMaskedContext(workInProgress, contextType)));
    var getDerivedStateFromProps = Component.getDerivedStateFromProps,
      hasNewLifecycles =
        "function" === typeof getDerivedStateFromProps ||
        "function" === typeof instance.getSnapshotBeforeUpdate;
    hasNewLifecycles ||
      ("function" !== typeof instance.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof instance.componentWillReceiveProps) ||
      ((oldProps !== nextProps || oldContext !== contextType) &&
        callComponentWillReceiveProps(
          workInProgress,
          instance,
          nextProps,
          contextType
        ));
    hasForceUpdate = !1;
    var oldState = workInProgress.memoizedState;
    instance.state = oldState;
    processUpdateQueue(workInProgress, nextProps, instance, renderLanes);
    oldContext = workInProgress.memoizedState;
    oldProps !== nextProps ||
    oldState !== oldContext ||
    didPerformWorkStackCursor.current ||
    hasForceUpdate
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
            contextType
          ))
          ? (hasNewLifecycles ||
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
        (instance.context = contextType),
        (nextProps = oldProps))
      : ("function" === typeof instance.componentDidMount &&
          (workInProgress.flags |= 4),
        (nextProps = !1));
  } else {
    instance = workInProgress.stateNode;
    cloneUpdateQueue(current, workInProgress);
    oldProps = workInProgress.memoizedProps;
    contextType =
      workInProgress.type === workInProgress.elementType
        ? oldProps
        : resolveDefaultProps(workInProgress.type, oldProps);
    instance.props = contextType;
    hasNewLifecycles = workInProgress.pendingProps;
    oldState = instance.context;
    oldContext = Component.contextType;
    "object" === typeof oldContext && null !== oldContext
      ? (oldContext = readContext(oldContext))
      : ((oldContext = isContextProvider(Component)
          ? previousContext
          : contextStackCursor.current),
        (oldContext = getMaskedContext(workInProgress, oldContext)));
    var getDerivedStateFromProps$jscomp$0 = Component.getDerivedStateFromProps;
    (getDerivedStateFromProps =
      "function" === typeof getDerivedStateFromProps$jscomp$0 ||
      "function" === typeof instance.getSnapshotBeforeUpdate) ||
      ("function" !== typeof instance.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof instance.componentWillReceiveProps) ||
      ((oldProps !== hasNewLifecycles || oldState !== oldContext) &&
        callComponentWillReceiveProps(
          workInProgress,
          instance,
          nextProps,
          oldContext
        ));
    hasForceUpdate = !1;
    oldState = workInProgress.memoizedState;
    instance.state = oldState;
    processUpdateQueue(workInProgress, nextProps, instance, renderLanes);
    var newState = workInProgress.memoizedState;
    oldProps !== hasNewLifecycles ||
    oldState !== newState ||
    didPerformWorkStackCursor.current ||
    hasForceUpdate
      ? ("function" === typeof getDerivedStateFromProps$jscomp$0 &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            getDerivedStateFromProps$jscomp$0,
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
            oldState,
            newState,
            oldContext
          ) ||
          !1)
          ? (getDerivedStateFromProps ||
              ("function" !== typeof instance.UNSAFE_componentWillUpdate &&
                "function" !== typeof instance.componentWillUpdate) ||
              ("function" === typeof instance.componentWillUpdate &&
                instance.componentWillUpdate(nextProps, newState, oldContext),
              "function" === typeof instance.UNSAFE_componentWillUpdate &&
                instance.UNSAFE_componentWillUpdate(
                  nextProps,
                  newState,
                  oldContext
                )),
            "function" === typeof instance.componentDidUpdate &&
              (workInProgress.flags |= 4),
            "function" === typeof instance.getSnapshotBeforeUpdate &&
              (workInProgress.flags |= 512))
          : ("function" !== typeof instance.componentDidUpdate ||
              (oldProps === current.memoizedProps &&
                oldState === current.memoizedState) ||
              (workInProgress.flags |= 4),
            "function" !== typeof instance.getSnapshotBeforeUpdate ||
              (oldProps === current.memoizedProps &&
                oldState === current.memoizedState) ||
              (workInProgress.flags |= 512),
            (workInProgress.memoizedProps = nextProps),
            (workInProgress.memoizedState = newState)),
        (instance.props = nextProps),
        (instance.state = newState),
        (instance.context = oldContext),
        (nextProps = contextType))
      : ("function" !== typeof instance.componentDidUpdate ||
          (oldProps === current.memoizedProps &&
            oldState === current.memoizedState) ||
          (workInProgress.flags |= 4),
        "function" !== typeof instance.getSnapshotBeforeUpdate ||
          (oldProps === current.memoizedProps &&
            oldState === current.memoizedState) ||
          (workInProgress.flags |= 512),
        (nextProps = !1));
  }
  return finishClassComponent(
    current,
    workInProgress,
    Component,
    nextProps,
    hasContext,
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
  var didCaptureError = 0 !== (workInProgress.flags & 128);
  if (!shouldUpdate && !didCaptureError)
    return (
      hasContext && invalidateContextProvider(workInProgress, Component, !1),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  shouldUpdate = workInProgress.stateNode;
  ReactCurrentOwner$1.current = workInProgress;
  var nextChildren =
    didCaptureError && "function" !== typeof Component.getDerivedStateFromError
      ? null
      : shouldUpdate.render();
  workInProgress.flags |= 1;
  null !== current && didCaptureError
    ? ((workInProgress.child = reconcileChildFibers(
        workInProgress,
        current.child,
        null,
        renderLanes
      )),
      (workInProgress.child = reconcileChildFibers(
        workInProgress,
        null,
        nextChildren,
        renderLanes
      )))
    : reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  workInProgress.memoizedState = shouldUpdate.state;
  hasContext && invalidateContextProvider(workInProgress, Component, !0);
  return workInProgress.child;
}
function pushHostRootContext(workInProgress) {
  var root = workInProgress.stateNode;
  root.pendingContext
    ? pushTopLevelContextObject(
        workInProgress,
        root.pendingContext,
        root.pendingContext !== root.context
      )
    : root.context &&
      pushTopLevelContextObject(workInProgress, root.context, !1);
  pushHostContainer(workInProgress, root.containerInfo);
}
var SUSPENDED_MARKER = { dehydrated: null, retryLane: 0 };
function mountSuspenseOffscreenState(renderLanes) {
  return { baseLanes: renderLanes, cachePool: null };
}
function updateSuspenseComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    suspenseContext = suspenseStackCursor.current,
    showFallback = !1,
    JSCompiler_temp;
  (JSCompiler_temp = 0 !== (workInProgress.flags & 128)) ||
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
    current = nextProps.children;
    suspenseContext = nextProps.fallback;
    if (showFallback)
      return (
        (current = mountSuspenseFallbackChildren(
          workInProgress,
          current,
          suspenseContext,
          renderLanes
        )),
        (workInProgress.child.memoizedState = mountSuspenseOffscreenState(
          renderLanes
        )),
        (workInProgress.memoizedState = SUSPENDED_MARKER),
        current
      );
    if ("number" === typeof nextProps.unstable_expectedLoadTime)
      return (
        (current = mountSuspenseFallbackChildren(
          workInProgress,
          current,
          suspenseContext,
          renderLanes
        )),
        (workInProgress.child.memoizedState = mountSuspenseOffscreenState(
          renderLanes
        )),
        (workInProgress.memoizedState = SUSPENDED_MARKER),
        (workInProgress.lanes = 8388608),
        current
      );
    renderLanes = createFiberFromOffscreen(
      { mode: "visible", children: current },
      workInProgress.mode,
      renderLanes,
      null
    );
    renderLanes.return = workInProgress;
    return (workInProgress.child = renderLanes);
  }
  if (null !== current.memoizedState) {
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
        (suspenseContext = current.child.memoizedState),
        (showFallback.memoizedState =
          null === suspenseContext
            ? mountSuspenseOffscreenState(renderLanes)
            : {
                baseLanes: suspenseContext.baseLanes | renderLanes,
                cachePool: null
              }),
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
      (suspenseContext = current.child.memoizedState),
      (showFallback.memoizedState =
        null === suspenseContext
          ? mountSuspenseOffscreenState(renderLanes)
          : {
              baseLanes: suspenseContext.baseLanes | renderLanes,
              cachePool: null
            }),
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
  if (0 === (renderLanes & workInProgress.childLanes)) return null;
  if (null !== current && workInProgress.child !== current.child)
    throw Error("Resuming work not yet implemented.");
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
var appendAllChildren,
  updateHostContainer,
  updateHostComponent$1,
  updateHostText$1;
appendAllChildren = function(parent, workInProgress) {
  for (var node = workInProgress.child; null !== node; ) {
    if (5 === node.tag || 6 === node.tag) {
      var parentInstance = parent,
        child = node.stateNode,
        index = parentInstance.children.indexOf(child);
      -1 !== index && parentInstance.children.splice(index, 1);
      parentInstance.children.push(child);
    } else if (4 !== node.tag && null !== node.child) {
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
  current.memoizedProps !== newProps &&
    (requiredContext(contextStackCursor$1.current),
    (workInProgress.updateQueue = UPDATE_SIGNAL)) &&
    (workInProgress.flags |= 4);
};
updateHostText$1 = function(current, workInProgress, oldText, newText) {
  oldText !== newText && (workInProgress.flags |= 4);
};
function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
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
      for (var lastTailNode$58 = null; null !== lastTailNode; )
        null !== lastTailNode.alternate && (lastTailNode$58 = lastTailNode),
          (lastTailNode = lastTailNode.sibling);
      null === lastTailNode$58
        ? hasRenderedATailFallback || null === renderState.tail
          ? (renderState.tail = null)
          : (renderState.tail.sibling = null)
        : (lastTailNode$58.sibling = null);
  }
}
function bubbleProperties(completedWork) {
  var didBailout =
      null !== completedWork.alternate &&
      completedWork.alternate.child === completedWork.child,
    newChildLanes = 0,
    subtreeFlags = 0;
  if (didBailout)
    for (var child$59 = completedWork.child; null !== child$59; )
      (newChildLanes |= child$59.lanes | child$59.childLanes),
        (subtreeFlags |= child$59.subtreeFlags & 262144),
        (subtreeFlags |= child$59.flags & 262144),
        (child$59.return = completedWork),
        (child$59 = child$59.sibling);
  else
    for (child$59 = completedWork.child; null !== child$59; )
      (newChildLanes |= child$59.lanes | child$59.childLanes),
        (subtreeFlags |= child$59.subtreeFlags),
        (subtreeFlags |= child$59.flags),
        (child$59.return = completedWork),
        (child$59 = child$59.sibling);
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
      return (
        isContextProvider(workInProgress.type) && popContext(),
        bubbleProperties(workInProgress),
        null
      );
    case 3:
      return (
        (newProps = workInProgress.stateNode),
        popHostContainer(),
        pop(didPerformWorkStackCursor),
        pop(contextStackCursor),
        resetWorkInProgressVersions(),
        newProps.pendingContext &&
          ((newProps.context = newProps.pendingContext),
          (newProps.pendingContext = null)),
        (null !== current && null !== current.child) ||
          newProps.hydrate ||
          (workInProgress.flags |= 512),
        updateHostContainer(current, workInProgress),
        bubbleProperties(workInProgress),
        null
      );
    case 5:
      popHostContext(workInProgress);
      renderLanes = requiredContext(rootInstanceStackCursor.current);
      var type = workInProgress.type;
      if (null !== current && null != workInProgress.stateNode)
        updateHostComponent$1(
          current,
          workInProgress,
          type,
          newProps,
          renderLanes
        ),
          current.ref !== workInProgress.ref && (workInProgress.flags |= 256);
      else {
        if (!newProps) {
          if (null === workInProgress.stateNode)
            throw Error(
              "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
            );
          bubbleProperties(workInProgress);
          return null;
        }
        requiredContext(contextStackCursor$1.current);
        current = {
          type: type,
          props: newProps,
          isHidden: !1,
          children: [],
          internalInstanceHandle: workInProgress,
          rootContainerInstance: renderLanes,
          tag: "INSTANCE"
        };
        appendAllChildren(current, workInProgress, !1, !1);
        workInProgress.stateNode = current;
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
          throw Error(
            "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
          );
        requiredContext(rootInstanceStackCursor.current);
        requiredContext(contextStackCursor$1.current);
        workInProgress.stateNode = {
          text: newProps,
          isHidden: !1,
          tag: "TEXT"
        };
      }
      bubbleProperties(workInProgress);
      return null;
    case 13:
      pop(suspenseStackCursor);
      newProps = workInProgress.memoizedState;
      if (0 !== (workInProgress.flags & 128))
        return (workInProgress.lanes = renderLanes), workInProgress;
      newProps = null !== newProps;
      renderLanes = !1;
      null !== current && (renderLanes = null !== current.memoizedState);
      if (newProps && !renderLanes && 0 !== (workInProgress.mode & 1))
        if (
          (null === current &&
            !0 !== workInProgress.memoizedProps.unstable_avoidThisFallback) ||
          0 !== (suspenseStackCursor.current & 1)
        )
          0 === workInProgressRootExitStatus &&
            (workInProgressRootExitStatus = 3);
        else {
          if (
            0 === workInProgressRootExitStatus ||
            3 === workInProgressRootExitStatus
          )
            workInProgressRootExitStatus = 4;
          null === workInProgressRoot ||
            (0 === (workInProgressRootSkippedLanes & 268435455) &&
              0 === (workInProgressRootUpdatedLanes & 268435455)) ||
            markRootSuspended$1(
              workInProgressRoot,
              workInProgressRootRenderLanes
            );
        }
      if (newProps || renderLanes) workInProgress.flags |= 4;
      bubbleProperties(workInProgress);
      return null;
    case 4:
      return (
        popHostContainer(),
        updateHostContainer(current, workInProgress),
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
      return (
        isContextProvider(workInProgress.type) && popContext(),
        bubbleProperties(workInProgress),
        null
      );
    case 19:
      pop(suspenseStackCursor);
      type = workInProgress.memoizedState;
      if (null === type) return bubbleProperties(workInProgress), null;
      newProps = 0 !== (workInProgress.flags & 128);
      var renderedTail = type.rendering;
      if (null === renderedTail)
        if (newProps) cutOffTailIfNeeded(type, !1);
        else {
          if (
            0 !== workInProgressRootExitStatus ||
            (null !== current && 0 !== (current.flags & 128))
          )
            for (current = workInProgress.child; null !== current; ) {
              renderedTail = findFirstSuspended(current);
              if (null !== renderedTail) {
                workInProgress.flags |= 128;
                cutOffTailIfNeeded(type, !1);
                current = renderedTail.updateQueue;
                null !== current &&
                  ((workInProgress.updateQueue = current),
                  (workInProgress.flags |= 4));
                workInProgress.subtreeFlags = 0;
                current = renderLanes;
                for (newProps = workInProgress.child; null !== newProps; )
                  (renderLanes = newProps),
                    (type = current),
                    (renderLanes.flags &= 262146),
                    (renderedTail = renderLanes.alternate),
                    null === renderedTail
                      ? ((renderLanes.childLanes = 0),
                        (renderLanes.lanes = type),
                        (renderLanes.child = null),
                        (renderLanes.subtreeFlags = 0),
                        (renderLanes.memoizedProps = null),
                        (renderLanes.memoizedState = null),
                        (renderLanes.updateQueue = null),
                        (renderLanes.dependencies = null),
                        (renderLanes.stateNode = null))
                      : ((renderLanes.childLanes = renderedTail.childLanes),
                        (renderLanes.lanes = renderedTail.lanes),
                        (renderLanes.child = renderedTail.child),
                        (renderLanes.subtreeFlags = 0),
                        (renderLanes.deletions = null),
                        (renderLanes.memoizedProps =
                          renderedTail.memoizedProps),
                        (renderLanes.memoizedState =
                          renderedTail.memoizedState),
                        (renderLanes.updateQueue = renderedTail.updateQueue),
                        (renderLanes.type = renderedTail.type),
                        (type = renderedTail.dependencies),
                        (renderLanes.dependencies =
                          null === type
                            ? null
                            : {
                                lanes: type.lanes,
                                firstContext: type.firstContext
                              })),
                    (newProps = newProps.sibling);
                push(
                  suspenseStackCursor,
                  (suspenseStackCursor.current & 1) | 2
                );
                return workInProgress.child;
              }
              current = current.sibling;
            }
          null !== type.tail &&
            now() > workInProgressRootRenderTargetTime &&
            ((workInProgress.flags |= 128),
            (newProps = !0),
            cutOffTailIfNeeded(type, !1),
            (workInProgress.lanes = 8388608));
        }
      else {
        if (!newProps)
          if (
            ((current = findFirstSuspended(renderedTail)), null !== current)
          ) {
            if (
              ((workInProgress.flags |= 128),
              (newProps = !0),
              (current = current.updateQueue),
              null !== current &&
                ((workInProgress.updateQueue = current),
                (workInProgress.flags |= 4)),
              cutOffTailIfNeeded(type, !0),
              null === type.tail &&
                "hidden" === type.tailMode &&
                !renderedTail.alternate)
            )
              return bubbleProperties(workInProgress), null;
          } else
            2 * now() - type.renderingStartTime >
              workInProgressRootRenderTargetTime &&
              1073741824 !== renderLanes &&
              ((workInProgress.flags |= 128),
              (newProps = !0),
              cutOffTailIfNeeded(type, !1),
              (workInProgress.lanes = 8388608));
        type.isBackwards
          ? ((renderedTail.sibling = workInProgress.child),
            (workInProgress.child = renderedTail))
          : ((current = type.last),
            null !== current
              ? (current.sibling = renderedTail)
              : (workInProgress.child = renderedTail),
            (type.last = renderedTail));
      }
      if (null !== type.tail)
        return (
          (workInProgress = type.tail),
          (type.rendering = workInProgress),
          (type.tail = workInProgress.sibling),
          (type.renderingStartTime = now()),
          (workInProgress.sibling = null),
          (current = suspenseStackCursor.current),
          push(suspenseStackCursor, newProps ? (current & 1) | 2 : current & 1),
          workInProgress
        );
      bubbleProperties(workInProgress);
      return null;
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
        null
      );
  }
  throw Error(
    "Unknown unit of work tag (" +
      workInProgress.tag +
      "). This error is likely caused by a bug in React. Please file an issue."
  );
}
function unwindWork(workInProgress) {
  switch (workInProgress.tag) {
    case 1:
      isContextProvider(workInProgress.type) && popContext();
      var flags = workInProgress.flags;
      return flags & 16384
        ? ((workInProgress.flags = (flags & -16385) | 128), workInProgress)
        : null;
    case 3:
      popHostContainer();
      pop(didPerformWorkStackCursor);
      pop(contextStackCursor);
      resetWorkInProgressVersions();
      flags = workInProgress.flags;
      if (0 !== (flags & 128))
        throw Error(
          "The root failed to unmount after an error. This is likely a bug in React. Please file an issue."
        );
      workInProgress.flags = (flags & -16385) | 128;
      return workInProgress;
    case 5:
      return popHostContext(workInProgress), null;
    case 13:
      return (
        pop(suspenseStackCursor),
        (flags = workInProgress.flags),
        flags & 16384
          ? ((workInProgress.flags = (flags & -16385) | 128), workInProgress)
          : null
      );
    case 19:
      return pop(suspenseStackCursor), null;
    case 4:
      return popHostContainer(), null;
    case 10:
      return popProvider(workInProgress.type._context), null;
    case 22:
    case 23:
      return popRenderLanes(), null;
    case 24:
      return null;
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
function logCapturedError(boundary, errorInfo) {
  try {
    console.error(errorInfo.value);
  } catch (e) {
    setTimeout(function() {
      throw e;
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
  focusedInstanceHandle = null;
  for (nextEffect = firstChild; null !== nextEffect; ) {
    root = nextEffect;
    firstChild = root.deletions;
    if (null !== firstChild)
      for (var i = 0; i < firstChild.length; i++)
        doesFiberContain(firstChild[i], focusedInstanceHandle) &&
          (shouldFireAfterActiveInstanceBlur = !0);
    firstChild = root.child;
    if (0 !== (root.subtreeFlags & 516) && null !== firstChild)
      (firstChild.return = root), (nextEffect = firstChild);
    else
      for (; null !== nextEffect; ) {
        root = nextEffect;
        try {
          var current = root.alternate,
            flags = root.flags;
          if (
            !shouldFireAfterActiveInstanceBlur &&
            null !== focusedInstanceHandle
          ) {
            var JSCompiler_temp;
            if ((JSCompiler_temp = 13 === root.tag))
              a: {
                if (null !== current) {
                  var oldState = current.memoizedState;
                  if (null === oldState || null !== oldState.dehydrated) {
                    var newState = root.memoizedState;
                    JSCompiler_temp =
                      null !== newState && null === newState.dehydrated;
                    break a;
                  }
                }
                JSCompiler_temp = !1;
              }
            JSCompiler_temp &&
              doesFiberContain(root, focusedInstanceHandle) &&
              (shouldFireAfterActiveInstanceBlur = !0);
          }
          if (0 !== (flags & 512))
            switch (root.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== current) {
                  var prevProps = current.memoizedProps,
                    prevState = current.memoizedState,
                    instance = root.stateNode,
                    snapshot = instance.getSnapshotBeforeUpdate(
                      root.elementType === root.type
                        ? prevProps
                        : resolveDefaultProps(root.type, prevProps),
                      prevState
                    );
                  instance.__reactInternalSnapshotBeforeUpdate = snapshot;
                }
                break;
              case 3:
                root.stateNode.containerInfo.children.splice(0);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                );
            }
        } catch (error) {
          captureCommitPhaseError(root, root.return, error);
        }
        firstChild = root.sibling;
        if (null !== firstChild) {
          firstChild.return = root.return;
          nextEffect = firstChild;
          break;
        }
        nextEffect = root.return;
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
        var create$76 = effect.create;
        effect.destroy = create$76();
      }
      effect = effect.next;
    } while (effect !== finishedWork);
  }
}
function hideOrUnhideAllChildren(finishedWork, isHidden) {
  for (var node = finishedWork; ; ) {
    if (5 === node.tag) {
      var instance = node.stateNode;
      isHidden ? (instance.isHidden = !0) : (node.stateNode.isHidden = !1);
    } else if (6 === node.tag) node.stateNode.isHidden = isHidden ? !0 : !1;
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
    throw Error(
      "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
    );
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
      throw Error(
        "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
      );
  }
  parentFiber.flags & 32 && (parentFiber.flags &= -33);
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
      before ? insertBefore(parent, node, before) : appendChild(parent, node);
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
      before ? insertBefore(parent, node, before) : appendChild(parent, node);
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
  for (var node = current, currentParentIsValid = !1, currentParent; ; ) {
    if (!currentParentIsValid) {
      currentParentIsValid = node.return;
      a: for (;;) {
        if (null === currentParentIsValid)
          throw Error(
            "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
          );
        currentParent = currentParentIsValid.stateNode;
        switch (currentParentIsValid.tag) {
          case 5:
            break a;
          case 3:
            currentParent = currentParent.containerInfo;
            break a;
          case 4:
            currentParent = currentParent.containerInfo;
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
      finishedRoot = currentParent;
      root = finishedRoot.children.indexOf(node.stateNode);
      finishedRoot.children.splice(root, 1);
    } else if (4 === node.tag) {
      if (null !== node.child) {
        currentParent = node.stateNode.containerInfo;
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
      current = finishedWork.stateNode;
      if (null != current) {
        var newProps = finishedWork.memoizedProps,
          type = finishedWork.type,
          updatePayload = finishedWork.updateQueue;
        finishedWork.updateQueue = null;
        null !== updatePayload &&
          ((current.type = type), (current.props = newProps));
      }
      return;
    case 6:
      if (null === finishedWork.stateNode)
        throw Error(
          "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
        );
      finishedWork.stateNode.text = finishedWork.memoizedProps;
      return;
    case 3:
      return;
    case 12:
      return;
    case 13:
      null !== finishedWork.memoizedState &&
        ((globalMostRecentFallbackTime = now()),
        hideOrUnhideAllChildren(finishedWork.child, !0));
      attachSuspenseRetryListeners(finishedWork);
      return;
    case 19:
      attachSuspenseRetryListeners(finishedWork);
      return;
    case 17:
      return;
    case 22:
    case 23:
      hideOrUnhideAllChildren(
        finishedWork,
        null !== finishedWork.memoizedState
      );
      return;
  }
  throw Error(
    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
  );
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
        (retryCache.add(wakeable), wakeable.then(retry, retry));
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
          if (flags & 256) {
            var current = renderPriorityLevel.alternate;
            if (null !== current) {
              var currentRef = current.ref;
              null !== currentRef &&
                ("function" === typeof currentRef
                  ? currentRef(null)
                  : (currentRef.current = null));
            }
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
function commitLayoutEffects(finishedWork) {
  for (nextEffect = finishedWork; null !== nextEffect; ) {
    var fiber = nextEffect,
      firstChild = fiber.child;
    if (0 !== (fiber.subtreeFlags & 324) && null !== firstChild)
      (firstChild.return = fiber), (nextEffect = firstChild);
    else
      for (fiber = finishedWork; null !== nextEffect; ) {
        firstChild = nextEffect;
        if (0 !== (firstChild.flags & 324)) {
          var current = firstChild.alternate;
          try {
            if (0 !== (firstChild.flags & 68))
              switch (firstChild.tag) {
                case 0:
                case 11:
                case 15:
                  commitHookEffectListMount(3, firstChild);
                  break;
                case 1:
                  var instance = firstChild.stateNode;
                  if (firstChild.flags & 4)
                    if (null === current) instance.componentDidMount();
                    else {
                      var prevProps =
                        firstChild.elementType === firstChild.type
                          ? current.memoizedProps
                          : resolveDefaultProps(
                              firstChild.type,
                              current.memoizedProps
                            );
                      instance.componentDidUpdate(
                        prevProps,
                        current.memoizedState,
                        instance.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  var updateQueue = firstChild.updateQueue;
                  null !== updateQueue &&
                    commitUpdateQueue(firstChild, updateQueue, instance);
                  break;
                case 3:
                  var updateQueue$77 = firstChild.updateQueue;
                  if (null !== updateQueue$77) {
                    current = null;
                    if (null !== firstChild.child)
                      switch (firstChild.child.tag) {
                        case 5:
                          current = getPublicInstance(
                            firstChild.child.stateNode
                          );
                          break;
                        case 1:
                          current = firstChild.child.stateNode;
                      }
                    commitUpdateQueue(firstChild, updateQueue$77, current);
                  }
                  break;
                case 5:
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                  break;
                default:
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
              }
            if (firstChild.flags & 256) {
              current = void 0;
              var ref = firstChild.ref;
              if (null !== ref) {
                var instance$jscomp$0 = firstChild.stateNode;
                switch (firstChild.tag) {
                  case 5:
                    current = getPublicInstance(instance$jscomp$0);
                    break;
                  default:
                    current = instance$jscomp$0;
                }
                "function" === typeof ref
                  ? ref(current)
                  : (ref.current = current);
              }
            }
          } catch (error) {
            captureCommitPhaseError(firstChild, firstChild.return, error);
          }
        }
        if (firstChild === fiber) {
          nextEffect = null;
          break;
        }
        current = firstChild.sibling;
        if (null !== current) {
          current.return = firstChild.return;
          nextEffect = current;
          break;
        }
        nextEffect = firstChild.return;
      }
  }
}
var enqueueTaskImpl = null;
function enqueueTask(task) {
  if (null === enqueueTaskImpl)
    try {
      var requireString = ("require" + Math.random()).slice(0, 7);
      enqueueTaskImpl = (module && module[requireString]).call(module, "timers")
        .setImmediate;
    } catch (_err) {
      enqueueTaskImpl = function(callback) {
        var channel = new MessageChannel();
        channel.port1.onmessage = callback;
        channel.port2.postMessage(void 0);
      };
    }
  return enqueueTaskImpl(task);
}
var ceil = Math.ceil,
  ReactCurrentDispatcher$2 = ReactSharedInternals.ReactCurrentDispatcher,
  ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner,
  IsSomeRendererActing = ReactSharedInternals.IsSomeRendererActing,
  executionContext = 0,
  workInProgressRoot = null,
  workInProgress = null,
  workInProgressRootRenderLanes = 0,
  subtreeRenderLanes = 0,
  subtreeRenderLanesCursor = createCursor(0),
  workInProgressRootExitStatus = 0,
  workInProgressRootFatalError = null,
  workInProgressRootSkippedLanes = 0,
  workInProgressRootUpdatedLanes = 0,
  workInProgressRootPingedLanes = 0,
  globalMostRecentFallbackTime = 0,
  workInProgressRootRenderTargetTime = Infinity,
  hasUncaughtError = !1,
  firstUncaughtError = null,
  legacyErrorBoundariesThatAlreadyFailed = null,
  rootDoesHavePassiveEffects = !1,
  rootWithPendingPassiveEffects = null,
  pendingPassiveEffectsRenderPriority = 0,
  nestedUpdateCount = 0,
  rootWithNestedUpdates = null,
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
  return 0 !== fiber ? findUpdateLane(fiber) : findUpdateLane(8);
}
function scheduleUpdateOnFiber(fiber, lane, eventTime) {
  if (50 < nestedUpdateCount)
    throw ((nestedUpdateCount = 0),
    (rootWithNestedUpdates = null),
    Error(
      "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
    ));
  fiber = markUpdateLaneFromFiberToRoot(fiber, lane);
  if (null === fiber) return null;
  markRootUpdated(fiber, lane, eventTime);
  fiber === workInProgressRoot &&
    ((workInProgressRootUpdatedLanes |= lane),
    4 === workInProgressRootExitStatus &&
      markRootSuspended$1(fiber, workInProgressRootRenderLanes));
  1 === lane
    ? 0 !== (executionContext & 4) && 0 === (executionContext & 24)
      ? performSyncWorkOnRoot(fiber)
      : (ensureRootIsScheduled(fiber, eventTime),
        0 === executionContext &&
          ((workInProgressRootRenderTargetTime = now() + 500),
          flushSyncCallbackQueue()))
    : ensureRootIsScheduled(fiber, eventTime);
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
    var index$3 = 31 - clz32(lanes),
      lane = 1 << index$3,
      expirationTime = expirationTimes[index$3];
    if (-1 === expirationTime) {
      if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes)) {
        expirationTime = currentTime;
        getHighestPriorityLanes(lane);
        var priority = return_highestLanePriority;
        expirationTimes[index$3] =
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
              (immediateQueueCallbackNode = Scheduler_scheduleCallback(
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
  if (0 !== (executionContext & 24))
    throw Error("Should not already be working.");
  var originalCallbackNode = root.callbackNode;
  if (flushPassiveEffects() && root.callbackNode !== originalCallbackNode)
    return null;
  var lanes = getNextLanes(
    root,
    root === workInProgressRoot ? workInProgressRootRenderLanes : 0
  );
  if (0 === lanes) return null;
  if (didTimeout)
    return (
      (root.expiredLanes |= lanes & root.pendingLanes),
      ensureRootIsScheduled(root, now()),
      null
    );
  didTimeout = lanes;
  var prevExecutionContext = executionContext;
  executionContext |= 8;
  var prevDispatcher = pushDispatcher();
  if (
    workInProgressRoot !== root ||
    workInProgressRootRenderLanes !== didTimeout
  )
    (workInProgressRootRenderTargetTime = now() + 500),
      prepareFreshStack(root, didTimeout);
  do
    try {
      workLoopConcurrent();
      break;
    } catch (thrownValue) {
      handleError(root, thrownValue);
    }
  while (1);
  resetContextDependencies();
  ReactCurrentDispatcher$2.current = prevDispatcher;
  executionContext = prevExecutionContext;
  null !== workInProgress
    ? (didTimeout = 0)
    : ((workInProgressRoot = null),
      (workInProgressRootRenderLanes = 0),
      (didTimeout = workInProgressRootExitStatus));
  if (0 !== didTimeout) {
    2 === didTimeout &&
      ((executionContext |= 32),
      root.hydrate &&
        ((root.hydrate = !1), root.containerInfo.children.splice(0)),
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
        throw Error("Root did not complete. This is a bug in React.");
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
          prevExecutionContext = root.suspendedLanes;
          if ((prevExecutionContext & lanes) !== lanes) {
            requestEventTime();
            root.pingedLanes |= root.suspendedLanes & prevExecutionContext;
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
        for (prevExecutionContext = -1; 0 < lanes; ) {
          var index$2 = 31 - clz32(lanes);
          prevDispatcher = 1 << index$2;
          index$2 = didTimeout[index$2];
          index$2 > prevExecutionContext && (prevExecutionContext = index$2);
          lanes &= ~prevDispatcher;
        }
        lanes = prevExecutionContext;
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
        throw Error("Unknown root exit status.");
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
    var index$4 = 31 - clz32(suspendedLanes),
      lane = 1 << index$4;
    root[index$4] = -1;
    suspendedLanes &= ~lane;
  }
}
function performSyncWorkOnRoot(root) {
  if (0 !== (executionContext & 24))
    throw Error("Should not already be working.");
  flushPassiveEffects();
  var lanes =
    root === workInProgressRoot &&
    0 !== (root.expiredLanes & workInProgressRootRenderLanes)
      ? workInProgressRootRenderLanes
      : getNextLanes(root, 0);
  var exitStatus = renderRootSync(root, lanes);
  0 !== root.tag &&
    2 === exitStatus &&
    ((executionContext |= 32),
    root.hydrate &&
      ((root.hydrate = !1), root.containerInfo.children.splice(0)),
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
function batchedUpdates(fn, a) {
  var prevExecutionContext = executionContext;
  executionContext |= 1;
  try {
    return fn(a);
  } finally {
    (executionContext = prevExecutionContext),
      0 === executionContext &&
        ((workInProgressRootRenderTargetTime = now() + 500),
        flushSyncCallbackQueue());
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
        case 1:
          interruptedWork = interruptedWork.type.childContextTypes;
          null !== interruptedWork &&
            void 0 !== interruptedWork &&
            popContext();
          break;
        case 3:
          popHostContainer();
          pop(didPerformWorkStackCursor);
          pop(contextStackCursor);
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
            workInProgress$71 = returnFiber;
          do {
            var JSCompiler_temp;
            if ((JSCompiler_temp = 13 === workInProgress$71.tag)) {
              var nextState = workInProgress$71.memoizedState;
              if (null !== nextState)
                JSCompiler_temp = null !== nextState.dehydrated ? !0 : !1;
              else {
                var props = workInProgress$71.memoizedProps;
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
              var wakeables = workInProgress$71.updateQueue;
              if (null === wakeables) {
                var updateQueue = new Set();
                updateQueue.add(wakeable);
                workInProgress$71.updateQueue = updateQueue;
              } else wakeables.add(wakeable);
              if (
                0 === (workInProgress$71.mode & 1) &&
                workInProgress$71 !== returnFiber
              ) {
                workInProgress$71.flags |= 128;
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
              workInProgress$71.flags |= 16384;
              workInProgress$71.lanes = thrownValue;
              break a;
            }
            workInProgress$71 = workInProgress$71.return;
          } while (null !== workInProgress$71);
          value = Error(
            (getComponentNameFromFiber(sourceFiber) || "A React component") +
              " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
          );
        }
        5 !== workInProgressRootExitStatus &&
          (workInProgressRootExitStatus = 2);
        value = createCapturedValue(value, sourceFiber);
        workInProgress$71 = returnFiber;
        do {
          switch (workInProgress$71.tag) {
            case 3:
              root = value;
              workInProgress$71.flags |= 16384;
              thrownValue &= -thrownValue;
              workInProgress$71.lanes |= thrownValue;
              var update$72 = createRootErrorUpdate(
                workInProgress$71,
                root,
                thrownValue
              );
              enqueueCapturedUpdate(workInProgress$71, update$72);
              break a;
            case 1:
              root = value;
              var ctor = workInProgress$71.type,
                instance = workInProgress$71.stateNode;
              if (
                0 === (workInProgress$71.flags & 128) &&
                ("function" === typeof ctor.getDerivedStateFromError ||
                  (null !== instance &&
                    "function" === typeof instance.componentDidCatch &&
                    (null === legacyErrorBoundariesThatAlreadyFailed ||
                      !legacyErrorBoundariesThatAlreadyFailed.has(instance))))
              ) {
                workInProgress$71.flags |= 16384;
                thrownValue &= -thrownValue;
                workInProgress$71.lanes |= thrownValue;
                var update$75 = createClassErrorUpdate(
                  workInProgress$71,
                  root,
                  thrownValue
                );
                enqueueCapturedUpdate(workInProgress$71, update$75);
                break a;
              }
          }
          workInProgress$71 = workInProgress$71.return;
        } while (null !== workInProgress$71);
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
function renderRootSync(root, lanes) {
  var prevExecutionContext = executionContext;
  executionContext |= 8;
  var prevDispatcher = pushDispatcher();
  (workInProgressRoot === root && workInProgressRootRenderLanes === lanes) ||
    prepareFreshStack(root, lanes);
  do
    try {
      workLoopSync();
      break;
    } catch (thrownValue) {
      handleError(root, thrownValue);
    }
  while (1);
  resetContextDependencies();
  executionContext = prevExecutionContext;
  ReactCurrentDispatcher$2.current = prevDispatcher;
  if (null !== workInProgress)
    throw Error(
      "Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue."
    );
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
      current = unwindWork(completedWork);
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
  if (0 !== (executionContext & 24))
    throw Error("Should not already be working.");
  var finishedWork = root.finishedWork,
    lanes = root.finishedLanes;
  if (null === finishedWork) return null;
  root.finishedWork = null;
  root.finishedLanes = 0;
  if (finishedWork === root.current)
    throw Error(
      "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
    );
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
    ReactCurrentOwner$2.current = null;
    commitBeforeMutationEffects(root, finishedWork);
    commitMutationEffects(root, renderPriorityLevel, finishedWork);
    root.current = finishedWork;
    commitLayoutEffects(finishedWork, root, lanes);
    requestPaint();
    executionContext = prevExecutionContext;
    null != remainingLanes && (currentUpdateLanePriority = remainingLanes);
  } else root.current = finishedWork;
  rootDoesHavePassiveEffects &&
    ((rootDoesHavePassiveEffects = !1),
    (rootWithPendingPassiveEffects = root),
    (pendingPassiveEffectsRenderPriority =
      0 === renderPriorityLevel ? 8 : renderPriorityLevel));
  remainingLanes = root.pendingLanes;
  0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
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
        var root = rootWithPendingPassiveEffects;
        rootWithPendingPassiveEffects = null;
        if (0 !== (executionContext & 24))
          throw Error("Cannot flush passive effects while already rendering.");
        priorityLevel = executionContext;
        executionContext |= 16;
        for (nextEffect = root.current; null !== nextEffect; ) {
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
        var finishedWork = root.current;
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
        executionContext = priorityLevel;
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
    ensureRootIsScheduled(rootFiber, sourceFiber));
}
function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
  if (3 === sourceFiber.tag)
    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
  else
    for (
      nearestMountedAncestor = sourceFiber.return;
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
            ensureRootIsScheduled(nearestMountedAncestor, sourceFiber));
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
}
function resolveRetryWakeable(boundaryFiber, wakeable) {
  var retryCache = boundaryFiber.stateNode;
  null !== retryCache && retryCache.delete(wakeable);
  wakeable = 0;
  0 === wakeable &&
    ((wakeable = boundaryFiber.mode),
    0 === (wakeable & 1)
      ? (wakeable = 1)
      : 0 === (wakeable & 1)
      ? (wakeable = 15 === currentUpdateLanePriority ? 1 : 2)
      : ((wakeable = nextRetryLane),
        (nextRetryLane <<= 1),
        0 === (nextRetryLane & 125829120) && (nextRetryLane = 8388608)));
  retryCache = requestEventTime();
  boundaryFiber = markUpdateLaneFromFiberToRoot(boundaryFiber, wakeable);
  null !== boundaryFiber &&
    (markRootUpdated(boundaryFiber, wakeable, retryCache),
    ensureRootIsScheduled(boundaryFiber, retryCache));
}
var beginWork$1;
beginWork$1 = function(current, workInProgress, renderLanes) {
  var updateLanes = workInProgress.lanes;
  if (null !== current)
    if (
      current.memoizedProps !== workInProgress.pendingProps ||
      didPerformWorkStackCursor.current
    )
      didReceiveUpdate = !0;
    else {
      if (0 === (renderLanes & updateLanes)) {
        didReceiveUpdate = !1;
        switch (workInProgress.tag) {
          case 3:
            pushHostRootContext(workInProgress);
            break;
          case 5:
            pushHostContext(workInProgress);
            break;
          case 1:
            isContextProvider(workInProgress.type) &&
              pushContextProvider(workInProgress);
            break;
          case 4:
            pushHostContainer(
              workInProgress,
              workInProgress.stateNode.containerInfo
            );
            break;
          case 10:
            updateLanes = workInProgress.type._context;
            var nextValue = workInProgress.memoizedProps.value;
            push(valueCursor, updateLanes._currentValue2);
            updateLanes._currentValue2 = nextValue;
            break;
          case 13:
            if (null !== workInProgress.memoizedState) {
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
            updateLanes = 0 !== (renderLanes & workInProgress.childLanes);
            if (0 !== (current.flags & 128)) {
              if (updateLanes)
                return updateSuspenseListComponent(
                  current,
                  workInProgress,
                  renderLanes
                );
              workInProgress.flags |= 128;
            }
            nextValue = workInProgress.memoizedState;
            null !== nextValue &&
              ((nextValue.rendering = null),
              (nextValue.tail = null),
              (nextValue.lastEffect = null));
            push(suspenseStackCursor, suspenseStackCursor.current);
            if (updateLanes) break;
            else return null;
          case 22:
          case 23:
            return (
              (workInProgress.lanes = 0),
              updateOffscreenComponent(current, workInProgress, renderLanes)
            );
        }
        return bailoutOnAlreadyFinishedWork(
          current,
          workInProgress,
          renderLanes
        );
      }
      didReceiveUpdate = 0 !== (current.flags & 32768) ? !0 : !1;
    }
  else didReceiveUpdate = !1;
  workInProgress.lanes = 0;
  switch (workInProgress.tag) {
    case 2:
      updateLanes = workInProgress.type;
      null !== current &&
        ((current.alternate = null),
        (workInProgress.alternate = null),
        (workInProgress.flags |= 2));
      current = workInProgress.pendingProps;
      nextValue = getMaskedContext(workInProgress, contextStackCursor.current);
      prepareToReadContext(workInProgress, renderLanes);
      nextValue = renderWithHooks(
        null,
        workInProgress,
        updateLanes,
        current,
        nextValue,
        renderLanes
      );
      workInProgress.flags |= 1;
      if (
        "object" === typeof nextValue &&
        null !== nextValue &&
        "function" === typeof nextValue.render &&
        void 0 === nextValue.$$typeof
      ) {
        workInProgress.tag = 1;
        workInProgress.memoizedState = null;
        workInProgress.updateQueue = null;
        if (isContextProvider(updateLanes)) {
          var hasContext = !0;
          pushContextProvider(workInProgress);
        } else hasContext = !1;
        workInProgress.memoizedState =
          null !== nextValue.state && void 0 !== nextValue.state
            ? nextValue.state
            : null;
        initializeUpdateQueue(workInProgress);
        var getDerivedStateFromProps = updateLanes.getDerivedStateFromProps;
        "function" === typeof getDerivedStateFromProps &&
          applyDerivedStateFromProps(
            workInProgress,
            updateLanes,
            getDerivedStateFromProps,
            current
          );
        nextValue.updater = classComponentUpdater;
        workInProgress.stateNode = nextValue;
        nextValue._reactInternals = workInProgress;
        mountClassInstance(workInProgress, updateLanes, current, renderLanes);
        workInProgress = finishClassComponent(
          null,
          workInProgress,
          updateLanes,
          !0,
          hasContext,
          renderLanes
        );
      } else
        (workInProgress.tag = 0),
          reconcileChildren(null, workInProgress, nextValue, renderLanes),
          (workInProgress = workInProgress.child);
      return workInProgress;
    case 16:
      nextValue = workInProgress.elementType;
      a: {
        null !== current &&
          ((current.alternate = null),
          (workInProgress.alternate = null),
          (workInProgress.flags |= 2));
        current = workInProgress.pendingProps;
        hasContext = nextValue._init;
        nextValue = hasContext(nextValue._payload);
        workInProgress.type = nextValue;
        hasContext = workInProgress.tag = resolveLazyComponentTag(nextValue);
        current = resolveDefaultProps(nextValue, current);
        switch (hasContext) {
          case 0:
            workInProgress = updateFunctionComponent(
              null,
              workInProgress,
              nextValue,
              current,
              renderLanes
            );
            break a;
          case 1:
            workInProgress = updateClassComponent(
              null,
              workInProgress,
              nextValue,
              current,
              renderLanes
            );
            break a;
          case 11:
            workInProgress = updateForwardRef(
              null,
              workInProgress,
              nextValue,
              current,
              renderLanes
            );
            break a;
          case 14:
            workInProgress = updateMemoComponent(
              null,
              workInProgress,
              nextValue,
              resolveDefaultProps(nextValue.type, current),
              updateLanes,
              renderLanes
            );
            break a;
        }
        throw Error(
          "Element type is invalid. Received a promise that resolves to: " +
            nextValue +
            ". Lazy element type must resolve to a class or function."
        );
      }
      return workInProgress;
    case 0:
      return (
        (updateLanes = workInProgress.type),
        (nextValue = workInProgress.pendingProps),
        (nextValue =
          workInProgress.elementType === updateLanes
            ? nextValue
            : resolveDefaultProps(updateLanes, nextValue)),
        updateFunctionComponent(
          current,
          workInProgress,
          updateLanes,
          nextValue,
          renderLanes
        )
      );
    case 1:
      return (
        (updateLanes = workInProgress.type),
        (nextValue = workInProgress.pendingProps),
        (nextValue =
          workInProgress.elementType === updateLanes
            ? nextValue
            : resolveDefaultProps(updateLanes, nextValue)),
        updateClassComponent(
          current,
          workInProgress,
          updateLanes,
          nextValue,
          renderLanes
        )
      );
    case 3:
      pushHostRootContext(workInProgress);
      updateLanes = workInProgress.updateQueue;
      if (null === current || null === updateLanes)
        throw Error(
          "If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue."
        );
      nextValue = workInProgress.pendingProps;
      updateLanes = workInProgress.memoizedState.element;
      cloneUpdateQueue(current, workInProgress);
      processUpdateQueue(workInProgress, nextValue, null, renderLanes);
      nextValue = workInProgress.memoizedState.element;
      nextValue === updateLanes
        ? (workInProgress = bailoutOnAlreadyFinishedWork(
            current,
            workInProgress,
            renderLanes
          ))
        : (reconcileChildren(current, workInProgress, nextValue, renderLanes),
          (workInProgress = workInProgress.child));
      return workInProgress;
    case 5:
      return (
        pushHostContext(workInProgress),
        (updateLanes = workInProgress.pendingProps.children),
        markRef(current, workInProgress),
        reconcileChildren(current, workInProgress, updateLanes, renderLanes),
        workInProgress.child
      );
    case 6:
      return null;
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
        (nextValue = workInProgress.pendingProps),
        (nextValue =
          workInProgress.elementType === updateLanes
            ? nextValue
            : resolveDefaultProps(updateLanes, nextValue)),
        updateForwardRef(
          current,
          workInProgress,
          updateLanes,
          nextValue,
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
        nextValue = workInProgress.pendingProps;
        getDerivedStateFromProps = workInProgress.memoizedProps;
        hasContext = nextValue.value;
        push(valueCursor, updateLanes._currentValue2);
        updateLanes._currentValue2 = hasContext;
        if (null !== getDerivedStateFromProps) {
          var oldValue = getDerivedStateFromProps.value;
          hasContext = objectIs(oldValue, hasContext)
            ? 0
            : ("function" === typeof updateLanes._calculateChangedBits
                ? updateLanes._calculateChangedBits(oldValue, hasContext)
                : 1073741823) | 0;
          if (0 === hasContext) {
            if (
              getDerivedStateFromProps.children === nextValue.children &&
              !didPerformWorkStackCursor.current
            ) {
              workInProgress = bailoutOnAlreadyFinishedWork(
                current,
                workInProgress,
                renderLanes
              );
              break a;
            }
          } else
            for (
              oldValue = workInProgress.child,
                null !== oldValue && (oldValue.return = workInProgress);
              null !== oldValue;

            ) {
              var list = oldValue.dependencies;
              if (null !== list) {
                getDerivedStateFromProps = oldValue.child;
                for (
                  var dependency = list.firstContext;
                  null !== dependency;

                ) {
                  if (
                    dependency.context === updateLanes &&
                    0 !== (dependency.observedBits & hasContext)
                  ) {
                    if (1 === oldValue.tag) {
                      dependency = createUpdate(-1, renderLanes & -renderLanes);
                      dependency.tag = 2;
                      var updateQueue = oldValue.updateQueue;
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
                    oldValue.lanes |= renderLanes;
                    dependency = oldValue.alternate;
                    null !== dependency && (dependency.lanes |= renderLanes);
                    scheduleWorkOnParentPath(oldValue.return, renderLanes);
                    list.lanes |= renderLanes;
                    break;
                  }
                  dependency = dependency.next;
                }
              } else
                getDerivedStateFromProps =
                  10 === oldValue.tag
                    ? oldValue.type === workInProgress.type
                      ? null
                      : oldValue.child
                    : oldValue.child;
              if (null !== getDerivedStateFromProps)
                getDerivedStateFromProps.return = oldValue;
              else
                for (
                  getDerivedStateFromProps = oldValue;
                  null !== getDerivedStateFromProps;

                ) {
                  if (getDerivedStateFromProps === workInProgress) {
                    getDerivedStateFromProps = null;
                    break;
                  }
                  oldValue = getDerivedStateFromProps.sibling;
                  if (null !== oldValue) {
                    oldValue.return = getDerivedStateFromProps.return;
                    getDerivedStateFromProps = oldValue;
                    break;
                  }
                  getDerivedStateFromProps = getDerivedStateFromProps.return;
                }
              oldValue = getDerivedStateFromProps;
            }
        }
        reconcileChildren(
          current,
          workInProgress,
          nextValue.children,
          renderLanes
        );
        workInProgress = workInProgress.child;
      }
      return workInProgress;
    case 9:
      return (
        (nextValue = workInProgress.type),
        (hasContext = workInProgress.pendingProps),
        (updateLanes = hasContext.children),
        prepareToReadContext(workInProgress, renderLanes),
        (nextValue = readContext(nextValue, hasContext.unstable_observedBits)),
        (updateLanes = updateLanes(nextValue)),
        (workInProgress.flags |= 1),
        reconcileChildren(current, workInProgress, updateLanes, renderLanes),
        workInProgress.child
      );
    case 14:
      return (
        (nextValue = workInProgress.type),
        (hasContext = resolveDefaultProps(
          nextValue,
          workInProgress.pendingProps
        )),
        (hasContext = resolveDefaultProps(nextValue.type, hasContext)),
        updateMemoComponent(
          current,
          workInProgress,
          nextValue,
          hasContext,
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
        (nextValue = workInProgress.pendingProps),
        (nextValue =
          workInProgress.elementType === updateLanes
            ? nextValue
            : resolveDefaultProps(updateLanes, nextValue)),
        null !== current &&
          ((current.alternate = null),
          (workInProgress.alternate = null),
          (workInProgress.flags |= 2)),
        (workInProgress.tag = 1),
        isContextProvider(updateLanes)
          ? ((current = !0), pushContextProvider(workInProgress))
          : (current = !1),
        prepareToReadContext(workInProgress, renderLanes),
        constructClassInstance(workInProgress, updateLanes, nextValue),
        mountClassInstance(workInProgress, updateLanes, nextValue, renderLanes),
        finishClassComponent(
          null,
          workInProgress,
          updateLanes,
          !0,
          current,
          renderLanes
        )
      );
    case 19:
      return updateSuspenseListComponent(current, workInProgress, renderLanes);
    case 22:
      return updateOffscreenComponent(current, workInProgress, renderLanes);
    case 23:
      return updateOffscreenComponent(current, workInProgress, renderLanes);
  }
  throw Error(
    "Unknown unit of work tag (" +
      workInProgress.tag +
      "). This error is likely caused by a bug in React. Please file an issue."
  );
};
var flushMockScheduler = Scheduler$1.unstable_flushAllWithoutAsserting,
  isSchedulerMocked = "function" === typeof flushMockScheduler;
function flushActWork() {
  if (void 0 !== flushMockScheduler) return flushMockScheduler();
  for (var didFlushWork = !1; flushPassiveEffects(); ) didFlushWork = !0;
  return didFlushWork;
}
function flushWorkAndMicroTasks(onDone) {
  try {
    flushActWork(),
      enqueueTask(function() {
        flushActWork() ? flushWorkAndMicroTasks(onDone) : onDone();
      });
  } catch (err) {
    onDone(err);
  }
}
var actingUpdatesScopeDepth = 0,
  didWarnAboutUsingActInProd = !1;
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
        1 <=
          (null == pendingProps.unstable_level
            ? 1
            : pendingProps.unstable_level) && (mode |= 8);
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
          "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " +
            (null == type ? type : typeof type) +
            "."
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
}
function createFiberRoot(
  containerInfo,
  tag,
  hydrate,
  hydrationCallbacks,
  strictModeLevelOverride
) {
  containerInfo = new FiberRootNode(containerInfo, tag, hydrate);
  1 === tag
    ? ((tag = 1),
      null !== strictModeLevelOverride
        ? 1 <= strictModeLevelOverride && (tag |= 8)
        : (tag |= 8))
    : (tag = 0);
  strictModeLevelOverride = createFiber(3, null, null, tag);
  containerInfo.current = strictModeLevelOverride;
  strictModeLevelOverride.stateNode = containerInfo;
  strictModeLevelOverride.memoizedState = { element: null };
  initializeUpdateQueue(strictModeLevelOverride);
  return containerInfo;
}
function updateContainer(element, container, parentComponent, callback) {
  var current = container.current,
    eventTime = requestEventTime(),
    lane = requestUpdateLane(current);
  a: if (parentComponent) {
    parentComponent = parentComponent._reactInternals;
    b: {
      if (
        getNearestMountedFiber(parentComponent) !== parentComponent ||
        1 !== parentComponent.tag
      )
        throw Error(
          "Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue."
        );
      var JSCompiler_inline_result = parentComponent;
      do {
        switch (JSCompiler_inline_result.tag) {
          case 3:
            JSCompiler_inline_result =
              JSCompiler_inline_result.stateNode.context;
            break b;
          case 1:
            if (isContextProvider(JSCompiler_inline_result.type)) {
              JSCompiler_inline_result =
                JSCompiler_inline_result.stateNode
                  .__reactInternalMemoizedMergedChildContext;
              break b;
            }
        }
        JSCompiler_inline_result = JSCompiler_inline_result.return;
      } while (null !== JSCompiler_inline_result);
      throw Error(
        "Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    if (1 === parentComponent.tag) {
      var Component = parentComponent.type;
      if (isContextProvider(Component)) {
        parentComponent = processChildContext(
          parentComponent,
          Component,
          JSCompiler_inline_result
        );
        break a;
      }
    }
    parentComponent = JSCompiler_inline_result;
  } else parentComponent = emptyContextObject;
  null === container.context
    ? (container.context = parentComponent)
    : (container.pendingContext = parentComponent);
  container = createUpdate(eventTime, lane);
  container.payload = { element: element };
  callback = void 0 === callback ? null : callback;
  null !== callback && (container.callback = callback);
  enqueueUpdate(current, container);
  element = scheduleUpdateOnFiber(current, lane, eventTime);
  null !== element && entangleTransitions(element, current, lane);
  return lane;
}
function emptyFindFiberByHostInstance() {
  return null;
}
var IsSomeRendererActing$1 = ReactSharedInternals.IsSomeRendererActing,
  defaultTestOptions = {
    createNodeMock: function() {
      return null;
    }
  };
function toJSON(inst) {
  if (inst.isHidden) return null;
  switch (inst.tag) {
    case "TEXT":
      return inst.text;
    case "INSTANCE":
      var _inst$props = inst.props;
      var excluded = ["children"];
      if (null == _inst$props) _inst$props = {};
      else {
        var target = {},
          sourceKeys = Object.keys(_inst$props),
          i;
        for (i = 0; i < sourceKeys.length; i++) {
          var key = sourceKeys[i];
          0 <= excluded.indexOf(key) || (target[key] = _inst$props[key]);
        }
        _inst$props = target;
      }
      excluded = null;
      if (inst.children && inst.children.length)
        for (target = 0; target < inst.children.length; target++)
          (sourceKeys = toJSON(inst.children[target])),
            null !== sourceKeys &&
              (null === excluded
                ? (excluded = [sourceKeys])
                : excluded.push(sourceKeys));
      inst = { type: inst.type, props: _inst$props, children: excluded };
      Object.defineProperty(inst, "$$typeof", {
        value: Symbol.for("react.test.json")
      });
      return inst;
    default:
      throw Error("Unexpected node type in toJSON: " + inst.tag);
  }
}
function childrenToTree(node) {
  if (!node) return null;
  node = nodeAndSiblingsArray(node);
  return 0 === node.length
    ? null
    : 1 === node.length
    ? toTree(node[0])
    : flatten(node.map(toTree));
}
function nodeAndSiblingsArray(nodeWithSibling) {
  for (var array = []; null != nodeWithSibling; )
    array.push(nodeWithSibling), (nodeWithSibling = nodeWithSibling.sibling);
  return array;
}
function flatten(arr) {
  var result = [];
  for (arr = [{ i: 0, array: arr }]; arr.length; )
    for (var n = arr.pop(); n.i < n.array.length; ) {
      var el = n.array[n.i];
      n.i += 1;
      if (Array.isArray(el)) {
        arr.push(n);
        arr.push({ i: 0, array: el });
        break;
      }
      result.push(el);
    }
  return result;
}
function toTree(node) {
  if (null == node) return null;
  switch (node.tag) {
    case 3:
      return childrenToTree(node.child);
    case 4:
      return childrenToTree(node.child);
    case 1:
      return {
        nodeType: "component",
        type: node.type,
        props: Object.assign({}, node.memoizedProps),
        instance: node.stateNode,
        rendered: childrenToTree(node.child)
      };
    case 0:
    case 15:
      return {
        nodeType: "component",
        type: node.type,
        props: Object.assign({}, node.memoizedProps),
        instance: null,
        rendered: childrenToTree(node.child)
      };
    case 5:
      return {
        nodeType: "host",
        type: node.type,
        props: Object.assign({}, node.memoizedProps),
        instance: null,
        rendered: flatten(nodeAndSiblingsArray(node.child).map(toTree))
      };
    case 6:
      return node.stateNode.text;
    case 7:
    case 10:
    case 9:
    case 8:
    case 12:
    case 11:
    case 14:
    case 17:
    case 21:
      return childrenToTree(node.child);
    default:
      throw Error(
        "toTree() does not yet know how to handle nodes with tag=" + node.tag
      );
  }
}
var validWrapperTypes = new Set([0, 1, 5, 11, 14, 15, 3]);
function getChildren(parent) {
  var children = [],
    node = parent;
  if (null === node.child) return children;
  node.child.return = node;
  node = node.child;
  a: for (;;) {
    var descend = !1;
    validWrapperTypes.has(node.tag)
      ? children.push(wrapFiber(node))
      : 6 === node.tag
      ? children.push("" + node.memoizedProps)
      : (descend = !0);
    if (descend && null !== node.child)
      (node.child.return = node), (node = node.child);
    else {
      for (; null === node.sibling; ) {
        if (node.return === parent) break a;
        node = node.return;
      }
      node.sibling.return = node.return;
      node = node.sibling;
    }
  }
  return children;
}
var ReactTestInstance = (function() {
  function ReactTestInstance(fiber) {
    if (!validWrapperTypes.has(fiber.tag))
      throw Error(
        "Unexpected object passed to ReactTestInstance constructor (tag: " +
          fiber.tag +
          "). This is probably a bug in React."
      );
    this._fiber = fiber;
  }
  var _proto = ReactTestInstance.prototype;
  _proto._currentFiber = function() {
    var fiber = findCurrentFiberUsingSlowPath(this._fiber);
    if (null === fiber)
      throw Error(
        "Can't read from currently-mounting component. This error is likely caused by a bug in React. Please file an issue."
      );
    return fiber;
  };
  _proto.find = function(predicate) {
    return expectOne(
      this.findAll(predicate, { deep: !1 }),
      "matching custom predicate: " + predicate.toString()
    );
  };
  _proto.findByType = function(type) {
    return expectOne(
      this.findAllByType(type, { deep: !1 }),
      'with node type: "' + (getComponentNameFromType(type) || "Unknown") + '"'
    );
  };
  _proto.findByProps = function(props) {
    return expectOne(
      this.findAllByProps(props, { deep: !1 }),
      "with props: " + JSON.stringify(props)
    );
  };
  _proto.findAll = function(predicate) {
    return _findAll(
      this,
      predicate,
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
    );
  };
  _proto.findAllByType = function(type) {
    return _findAll(
      this,
      function(node) {
        return node.type === type;
      },
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
    );
  };
  _proto.findAllByProps = function(props) {
    return _findAll(
      this,
      function(node) {
        var JSCompiler_temp;
        if ((JSCompiler_temp = node.props))
          a: {
            for (var key in props)
              if (node.props[key] !== props[key]) {
                JSCompiler_temp = !1;
                break a;
              }
            JSCompiler_temp = !0;
          }
        return JSCompiler_temp;
      },
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
    );
  };
  _createClass(ReactTestInstance, [
    {
      key: "instance",
      get: function() {
        return 5 === this._fiber.tag
          ? getPublicInstance(this._fiber.stateNode)
          : this._fiber.stateNode;
      }
    },
    {
      key: "type",
      get: function() {
        return this._fiber.type;
      }
    },
    {
      key: "props",
      get: function() {
        return this._currentFiber().memoizedProps;
      }
    },
    {
      key: "parent",
      get: function() {
        for (var parent = this._fiber.return; null !== parent; ) {
          if (validWrapperTypes.has(parent.tag)) {
            if (3 === parent.tag && 2 > getChildren(parent).length) break;
            return wrapFiber(parent);
          }
          parent = parent.return;
        }
        return null;
      }
    },
    {
      key: "children",
      get: function() {
        return getChildren(this._currentFiber());
      }
    }
  ]);
  return ReactTestInstance;
})();
function _findAll(root, predicate, options) {
  var deep = options ? options.deep : !0,
    results = [];
  if (predicate(root) && (results.push(root), !deep)) return results;
  root.children.forEach(function(child) {
    "string" !== typeof child &&
      results.push.apply(results, _findAll(child, predicate, options));
  });
  return results;
}
function expectOne(all, message) {
  if (1 === all.length) return all[0];
  throw Error(
    (0 === all.length
      ? "No instances found "
      : "Expected 1 but found " + all.length + " instances ") + message
  );
}
var fiberToWrapper = new WeakMap();
function wrapFiber(fiber) {
  var wrapper = fiberToWrapper.get(fiber);
  void 0 === wrapper &&
    null !== fiber.alternate &&
    (wrapper = fiberToWrapper.get(fiber.alternate));
  void 0 === wrapper &&
    ((wrapper = new ReactTestInstance(fiber)),
    fiberToWrapper.set(fiber, wrapper));
  return wrapper;
}
var devToolsConfig$jscomp$inline_817 = {
  findFiberByHostInstance: function() {
    throw Error("TestRenderer does not support findFiberByHostInstance()");
  },
  bundleType: 0,
  version: "17.0.2",
  rendererPackageName: "react-test-renderer"
};
var internals$jscomp$inline_1021 = {
  bundleType: devToolsConfig$jscomp$inline_817.bundleType,
  version: devToolsConfig$jscomp$inline_817.version,
  rendererPackageName: devToolsConfig$jscomp$inline_817.rendererPackageName,
  rendererConfig: devToolsConfig$jscomp$inline_817.rendererConfig,
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
    devToolsConfig$jscomp$inline_817.findFiberByHostInstance ||
    emptyFindFiberByHostInstance,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var hook$jscomp$inline_1022 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (
    !hook$jscomp$inline_1022.isDisabled &&
    hook$jscomp$inline_1022.supportsFiber
  )
    try {
      (rendererID = hook$jscomp$inline_1022.inject(
        internals$jscomp$inline_1021
      )),
        (injectedHook = hook$jscomp$inline_1022);
    } catch (err) {}
}
function flushActWork$1(resolve, reject) {
  jest.runOnlyPendingTimers();
  enqueueTask(function() {
    try {
      Scheduler.unstable_flushAllWithoutAsserting()
        ? flushActWork$1(resolve, reject)
        : resolve();
    } catch (error) {
      reject(error);
    }
  });
}
exports._Scheduler = Scheduler;
exports.act = function(callback) {
  function onDone() {
    actingUpdatesScopeDepth--;
    IsSomeRendererActing.current = previousIsSomeRendererActing;
  }
  !1 === didWarnAboutUsingActInProd &&
    ((didWarnAboutUsingActInProd = !0),
    console.error(
      "act(...) is not supported in production builds of React, and might not behave as expected."
    ));
  actingUpdatesScopeDepth++;
  var previousIsSomeRendererActing = IsSomeRendererActing.current;
  IsSomeRendererActing.current = !0;
  try {
    var result = batchedUpdates(callback);
  } catch (error) {
    throw (onDone(), error);
  }
  if (
    null !== result &&
    "object" === typeof result &&
    "function" === typeof result.then
  )
    return {
      then: function(resolve, reject) {
        result.then(
          function() {
            1 < actingUpdatesScopeDepth ||
            (!0 === isSchedulerMocked && !0 === previousIsSomeRendererActing)
              ? (onDone(), resolve())
              : flushWorkAndMicroTasks(function(err) {
                  onDone();
                  err ? reject(err) : resolve();
                });
          },
          function(err) {
            onDone();
            reject(err);
          }
        );
      }
    };
  try {
    1 !== actingUpdatesScopeDepth ||
      (!1 !== isSchedulerMocked && !1 !== previousIsSomeRendererActing) ||
      flushActWork(),
      onDone();
  } catch (err) {
    throw (onDone(), err);
  }
  return {
    then: function(resolve) {
      resolve();
    }
  };
};
exports.create = function(element, options) {
  var createNodeMock = defaultTestOptions.createNodeMock,
    isConcurrent = !1,
    strictModeLevel = null;
  "object" === typeof options &&
    null !== options &&
    ("function" === typeof options.createNodeMock &&
      (createNodeMock = options.createNodeMock),
    !0 === options.unstable_isConcurrent && (isConcurrent = !0),
    void 0 !== options.unstable_strictModeLevel &&
      (strictModeLevel = options.unstable_strictModeLevel));
  var container = {
      children: [],
      createNodeMock: createNodeMock,
      tag: "CONTAINER"
    },
    root = createFiberRoot(
      container,
      isConcurrent ? 1 : 0,
      !1,
      null,
      strictModeLevel
    );
  if (null == root) throw Error("something went wrong");
  updateContainer(element, root, null, null);
  element = {
    _Scheduler: Scheduler,
    root: void 0,
    toJSON: function() {
      if (
        null == root ||
        null == root.current ||
        null == container ||
        0 === container.children.length
      )
        return null;
      if (1 === container.children.length) return toJSON(container.children[0]);
      if (
        2 === container.children.length &&
        !0 === container.children[0].isHidden &&
        !1 === container.children[1].isHidden
      )
        return toJSON(container.children[1]);
      var renderedChildren = null;
      if (container.children && container.children.length)
        for (var i = 0; i < container.children.length; i++) {
          var renderedChild = toJSON(container.children[i]);
          null !== renderedChild &&
            (null === renderedChildren
              ? (renderedChildren = [renderedChild])
              : renderedChildren.push(renderedChild));
        }
      return renderedChildren;
    },
    toTree: function() {
      return null == root || null == root.current ? null : toTree(root.current);
    },
    update: function(newElement) {
      null != root &&
        null != root.current &&
        updateContainer(newElement, root, null, null);
    },
    unmount: function() {
      null != root &&
        null != root.current &&
        (updateContainer(null, root, null, null), (root = container = null));
    },
    getInstance: function() {
      if (null == root || null == root.current) return null;
      a: {
        var JSCompiler_inline_result = root.current;
        if (JSCompiler_inline_result.child)
          switch (JSCompiler_inline_result.child.tag) {
            case 5:
              JSCompiler_inline_result = getPublicInstance(
                JSCompiler_inline_result.child.stateNode
              );
              break a;
            default:
              JSCompiler_inline_result =
                JSCompiler_inline_result.child.stateNode;
          }
        else JSCompiler_inline_result = null;
      }
      return JSCompiler_inline_result;
    },
    unstable_flushSync: function(fn) {
      a: {
        var prevExecutionContext = executionContext;
        if (0 !== (prevExecutionContext & 24))
          var JSCompiler_inline_result = fn(void 0);
        else {
          executionContext |= 1;
          var previousLanePriority = currentUpdateLanePriority;
          try {
            currentUpdateLanePriority = 15;
            JSCompiler_inline_result = fn ? fn(void 0) : void 0;
            break a;
          } finally {
            (currentUpdateLanePriority = previousLanePriority),
              (executionContext = prevExecutionContext),
              flushSyncCallbackQueue();
          }
          JSCompiler_inline_result = void 0;
        }
      }
      return JSCompiler_inline_result;
    }
  };
  Object.defineProperty(element, "root", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      if (null === root)
        throw Error("Can't access .root on unmounted test renderer");
      var children = getChildren(root.current);
      if (0 === children.length)
        throw Error("Can't access .root on unmounted test renderer");
      return 1 === children.length ? children[0] : wrapFiber(root.current);
    }
  });
  return element;
};
exports.unstable_batchedUpdates = batchedUpdates;
exports.unstable_concurrentAct = function(scope) {
  if (void 0 === Scheduler.unstable_flushAllWithoutAsserting)
    throw Error(
      "This version of `act` requires a special mock build of Scheduler."
    );
  if (!0 !== setTimeout._isMockFunction)
    throw Error(
      "This version of `act` requires Jest's timer mocks (i.e. jest.useFakeTimers)."
    );
  var previousIsSomeRendererActing = IsSomeRendererActing$1.current;
  IsSomeRendererActing$1.current = !0;
  try {
    var thenable = batchedUpdates(scope);
    if (
      "object" === typeof thenable &&
      null !== thenable &&
      "function" === typeof thenable.then
    )
      return {
        then: function(resolve, reject) {
          thenable.then(
            function() {
              flushActWork$1(
                function() {
                  IsSomeRendererActing$1.current = previousIsSomeRendererActing;
                  resolve();
                },
                function(error) {
                  IsSomeRendererActing$1.current = previousIsSomeRendererActing;
                  reject(error);
                }
              );
            },
            function(error) {
              IsSomeRendererActing$1.current = previousIsSomeRendererActing;
              reject(error);
            }
          );
        }
      };
    try {
      do var didFlushWork = Scheduler.unstable_flushAllWithoutAsserting();
      while (didFlushWork);
    } finally {
      IsSomeRendererActing$1.current = previousIsSomeRendererActing;
    }
  } catch (error) {
    throw ((IsSomeRendererActing$1.current = previousIsSomeRendererActing),
    error);
  }
};

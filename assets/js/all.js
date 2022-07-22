"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory());
})(void 0, function () {
  'use strict';
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var _KEY_TO_DIRECTION;

  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000;
  var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  var toType = function toType(obj) {
    if (obj === null || obj === undefined) {
      return "".concat(obj);
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var getUID = function getUID(prefix) {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  var getSelector = function getSelector(element) {
    var selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      var hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = "#".concat(hrefAttr.split('#')[1]);
      }

      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
  };

  var getSelectorFromElement = function getSelectorFromElement(element) {
    var selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  var getElementFromSelector = function getElementFromSelector(element) {
    var selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    var _window$getComputedSt = window.getComputedStyle(element),
        transitionDuration = _window$getComputedSt.transitionDuration,
        transitionDelay = _window$getComputedSt.transitionDelay;

    var floatTransitionDuration = Number.parseFloat(transitionDuration);
    var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  var triggerTransitionEnd = function triggerTransitionEnd(element) {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  var isElement$1 = function isElement$1(obj) {
    if (!obj || _typeof(obj) !== 'object') {
      return false;
    }

    if (typeof obj.jquery !== 'undefined') {
      obj = obj[0];
    }

    return typeof obj.nodeType !== 'undefined';
  };

  var getElement = function getElement(obj) {
    if (isElement$1(obj)) {
      // it's a jQuery object or a node element
      return obj.jquery ? obj[0] : obj;
    }

    if (typeof obj === 'string' && obj.length > 0) {
      return document.querySelector(obj);
    }

    return null;
  };

  var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
    Object.keys(configTypes).forEach(function (property) {
      var expectedTypes = configTypes[property];
      var value = config[property];
      var valueType = value && isElement$1(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError("".concat(componentName.toUpperCase(), ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\"."));
      }
    });
  };

  var isVisible = function isVisible(element) {
    if (!isElement$1(element) || element.getClientRects().length === 0) {
      return false;
    }

    return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
  };

  var isDisabled = function isDisabled(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }

    if (element.classList.contains('disabled')) {
      return true;
    }

    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };

  var findShadowRoot = function findShadowRoot(element) {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      var root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  var noop = function noop() {};
  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */


  var reflow = function reflow(element) {
    // eslint-disable-next-line no-unused-expressions
    element.offsetHeight;
  };

  var getjQuery = function getjQuery() {
    var _window = window,
        jQuery = _window.jQuery;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  var DOMContentLoadedCallbacks = [];

  var onDOMContentLoaded = function onDOMContentLoaded(callback) {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', function () {
          DOMContentLoadedCallbacks.forEach(function (callback) {
            return callback();
          });
        });
      }

      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };

  var isRTL = function isRTL() {
    return document.documentElement.dir === 'rtl';
  };

  var defineJQueryPlugin = function defineJQueryPlugin(plugin) {
    onDOMContentLoaded(function () {
      var $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        var name = plugin.NAME;
        var JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = function () {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  var execute = function execute(callback) {
    if (typeof callback === 'function') {
      callback();
    }
  };

  var executeAfterTransition = function executeAfterTransition(callback, transitionElement) {
    var waitForTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (!waitForTransition) {
      execute(callback);
      return;
    }

    var durationPadding = 5;
    var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    var called = false;

    var handler = function handler(_ref5) {
      var target = _ref5.target;

      if (target !== transitionElement) {
        return;
      }

      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };

    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(function () {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */


  var getNextActiveElement = function getNextActiveElement(list, activeElement, shouldGetNext, isCycleAllowed) {
    var index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

    if (index === -1) {
      return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
    }

    var listLength = list.length;
    index += shouldGetNext ? 1 : -1;

    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }

    return list[Math.max(0, Math.min(index, listLength - 1))];
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {}; // Events storage

  var uidEvent = 1;
  var customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  var customEventsRegex = /^(mouseenter|mouseleave)/i;
  var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */

  function getUidEvent(element, uid) {
    return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
  }

  function getEvent(element) {
    var uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      var domElements = element.querySelectorAll(selector);

      for (var target = event.target; target && target !== this; target = target.parentNode) {
        for (var i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;

            if (handler.oneOff) {
              EventHandler.off(element, event.type, selector, fn);
            }

            return fn.apply(target, [event]);
          }
        }
      } // To please ESLint


      return null;
    };
  }

  function findHandler(events, handler) {
    var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var uidEventList = Object.keys(events);

    for (var i = 0, len = uidEventList.length; i < len; i++) {
      var event = events[uidEventList[i]];

      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }

    return null;
  }

  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    var delegation = typeof handler === 'string';
    var originalHandler = delegation ? delegationFn : handler;
    var typeEvent = getTypeEvent(originalTypeEvent);
    var isNative = nativeEvents.has(typeEvent);

    if (!isNative) {
      typeEvent = originalTypeEvent;
    }

    return [delegation, originalHandler, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does


    if (customEventsRegex.test(originalTypeEvent)) {
      var wrapFn = function wrapFn(fn) {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };

      if (delegationFn) {
        delegationFn = wrapFn(delegationFn);
      } else {
        handler = wrapFn(handler);
      }
    }

    var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
        _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
        delegation = _normalizeParams2[0],
        originalHandler = _normalizeParams2[1],
        typeEvent = _normalizeParams2[2];

    var events = getEvent(element);
    var handlers = events[typeEvent] || (events[typeEvent] = {});
    var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }

    var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    var fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (handlerKey) {
      if (handlerKey.includes(namespace)) {
        var event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }

  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }

  var EventHandler = {
    on: function on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },
    one: function one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },
    off: function off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      var _normalizeParams3 = normalizeParams(originalTypeEvent, handler, delegationFn),
          _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
          delegation = _normalizeParams4[0],
          originalHandler = _normalizeParams4[1],
          typeEvent = _normalizeParams4[2];

      var inNamespace = typeEvent !== originalTypeEvent;
      var events = getEvent(element);
      var isNamespace = originalTypeEvent.startsWith('.');

      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }

        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }

      if (isNamespace) {
        Object.keys(events).forEach(function (elementEvent) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }

      var storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(function (keyHandlers) {
        var handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          var event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },
    trigger: function trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      var $ = getjQuery();
      var typeEvent = getTypeEvent(event);
      var inNamespace = event !== typeEvent;
      var isNative = nativeEvents.has(typeEvent);
      var jQueryEvent;
      var bubbles = true;
      var nativeDispatch = true;
      var defaultPrevented = false;
      var evt = null;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles: bubbles,
          cancelable: true
        });
      } // merge custom information in our event


      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(function (key) {
          Object.defineProperty(evt, key, {
            get: function get() {
              return args[key];
            }
          });
        });
      }

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }

      return evt;
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var elementMap = new Map();
  var Data = {
    set: function set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      var instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
        return;
      }

      instanceMap.set(key, instance);
    },
    get: function get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }

      return null;
    },
    remove: function remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }

      var instanceMap = elementMap.get(element);
      instanceMap["delete"](key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap["delete"](element);
      }
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var VERSION = '5.1.3';

  var BaseComponent = /*#__PURE__*/function () {
    function BaseComponent(element) {
      _classCallCheck(this, BaseComponent);

      element = getElement(element);

      if (!element) {
        return;
      }

      this._element = element;
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    _createClass(BaseComponent, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;

        Data.remove(this._element, this.constructor.DATA_KEY);
        EventHandler.off(this._element, this.constructor.EVENT_KEY);
        Object.getOwnPropertyNames(this).forEach(function (propertyName) {
          _this[propertyName] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(callback, element) {
        var isAnimated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        executeAfterTransition(callback, element, isAnimated);
      }
      /** Static */

    }], [{
      key: "getInstance",
      value: function getInstance(element) {
        return Data.get(getElement(element), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(element) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(element) || new this(element, _typeof(config) === 'object' ? config : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }]);

    return BaseComponent;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  var enableDismissTrigger = function enableDismissTrigger(component) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hide';
    var clickEvent = "click.dismiss".concat(component.EVENT_KEY);
    var name = component.NAME;
    EventHandler.on(document, clickEvent, "[data-bs-dismiss=\"".concat(name, "\"]"), function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }

      if (isDisabled(this)) {
        return;
      }

      var target = getElementFromSelector(this) || this.closest(".".concat(name));
      var instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

      instance[method]();
    });
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$d = 'alert';
  var DATA_KEY$c = 'bs.alert';
  var EVENT_KEY$c = ".".concat(DATA_KEY$c);
  var EVENT_CLOSE = "close".concat(EVENT_KEY$c);
  var EVENT_CLOSED = "closed".concat(EVENT_KEY$c);
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_SHOW$8 = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function (_BaseComponent) {
    _inherits(Alert, _BaseComponent);

    var _super = _createSuper(Alert);

    function Alert() {
      _classCallCheck(this, Alert);

      return _super.apply(this, arguments);
    }

    _createClass(Alert, [{
      key: "close",
      value: // Public
      function close() {
        var _this2 = this;

        var closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

        if (closeEvent.defaultPrevented) {
          return;
        }

        this._element.classList.remove(CLASS_NAME_SHOW$8);

        var isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, isAnimated);
      } // Private

    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove();

        EventHandler.trigger(this._element, EVENT_CLOSED);
        this.dispose();
      } // Static

    }], [{
      key: "NAME",
      get: // Getters
      function get() {
        return NAME$d;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Alert.getOrCreateInstance(this);

          if (typeof config !== 'string') {
            return;
          }

          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config](this);
        });
      }
    }]);

    return Alert;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  enableDismissTrigger(Alert, 'close');
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Alert to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Alert);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$c = 'button';
  var DATA_KEY$b = 'bs.button';
  var EVENT_KEY$b = ".".concat(DATA_KEY$b);
  var DATA_API_KEY$7 = '.data-api';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  var EVENT_CLICK_DATA_API$6 = "click".concat(EVENT_KEY$b).concat(DATA_API_KEY$7);
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function (_BaseComponent2) {
    _inherits(Button, _BaseComponent2);

    var _super2 = _createSuper(Button);

    function Button() {
      _classCallCheck(this, Button);

      return _super2.apply(this, arguments);
    }

    _createClass(Button, [{
      key: "toggle",
      value: // Public
      function toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
      } // Static

    }], [{
      key: "NAME",
      get: // Getters
      function get() {
        return NAME$c;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Button.getOrCreateInstance(this);

          if (config === 'toggle') {
            data[config]();
          }
        });
      }
    }]);

    return Button;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (event) {
    event.preventDefault();
    var button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    var data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Button to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Button);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  function normalizeData(val) {
    if (val === 'true') {
      return true;
    }

    if (val === 'false') {
      return false;
    }

    if (val === Number(val).toString()) {
      return Number(val);
    }

    if (val === '' || val === 'null') {
      return null;
    }

    return val;
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, function (chr) {
      return "-".concat(chr.toLowerCase());
    });
  }

  var Manipulator = {
    setDataAttribute: function setDataAttribute(element, key, value) {
      element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
    },
    removeDataAttribute: function removeDataAttribute(element, key) {
      element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
    },
    getDataAttributes: function getDataAttributes(element) {
      if (!element) {
        return {};
      }

      var attributes = {};
      Object.keys(element.dataset).filter(function (key) {
        return key.startsWith('bs');
      }).forEach(function (key) {
        var pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      });
      return attributes;
    },
    getDataAttribute: function getDataAttribute(element, key) {
      return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
    },
    offset: function offset(element) {
      var rect = element.getBoundingClientRect();
      return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset
      };
    },
    position: function position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var NODE_TEXT = 3;
  var SelectorEngine = {
    find: function find(selector) {
      var _ref6;

      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref6 = []).concat.apply(_ref6, _toConsumableArray(Element.prototype.querySelectorAll.call(element, selector)));
    },
    findOne: function findOne(selector) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(element, selector);
    },
    children: function children(element, selector) {
      var _ref7;

      return (_ref7 = []).concat.apply(_ref7, _toConsumableArray(element.children)).filter(function (child) {
        return child.matches(selector);
      });
    },
    parents: function parents(element, selector) {
      var parents = [];
      var ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (ancestor.matches(selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents;
    },
    prev: function prev(element, selector) {
      var previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },
    next: function next(element, selector) {
      var next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    },
    focusableChildren: function focusableChildren(element) {
      var focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(function (selector) {
        return "".concat(selector, ":not([tabindex^=\"-\"])");
      }).join(', ');
      return this.find(focusables, element).filter(function (el) {
        return !isDisabled(el) && isVisible(el);
      });
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$b = 'carousel';
  var DATA_KEY$a = 'bs.carousel';
  var EVENT_KEY$a = ".".concat(DATA_KEY$a);
  var DATA_API_KEY$6 = '.data-api';
  var ARROW_LEFT_KEY = 'ArrowLeft';
  var ARROW_RIGHT_KEY = 'ArrowRight';
  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default$a = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType$a = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var ORDER_NEXT = 'next';
  var ORDER_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var KEY_TO_DIRECTION = (_KEY_TO_DIRECTION = {}, _defineProperty(_KEY_TO_DIRECTION, ARROW_LEFT_KEY, DIRECTION_RIGHT), _defineProperty(_KEY_TO_DIRECTION, ARROW_RIGHT_KEY, DIRECTION_LEFT), _KEY_TO_DIRECTION);
  var EVENT_SLIDE = "slide".concat(EVENT_KEY$a);
  var EVENT_SLID = "slid".concat(EVENT_KEY$a);
  var EVENT_KEYDOWN = "keydown".concat(EVENT_KEY$a);
  var EVENT_MOUSEENTER = "mouseenter".concat(EVENT_KEY$a);
  var EVENT_MOUSELEAVE = "mouseleave".concat(EVENT_KEY$a);
  var EVENT_TOUCHSTART = "touchstart".concat(EVENT_KEY$a);
  var EVENT_TOUCHMOVE = "touchmove".concat(EVENT_KEY$a);
  var EVENT_TOUCHEND = "touchend".concat(EVENT_KEY$a);
  var EVENT_POINTERDOWN = "pointerdown".concat(EVENT_KEY$a);
  var EVENT_POINTERUP = "pointerup".concat(EVENT_KEY$a);
  var EVENT_DRAG_START = "dragstart".concat(EVENT_KEY$a);
  var EVENT_LOAD_DATA_API$2 = "load".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);
  var EVENT_CLICK_DATA_API$5 = "click".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_END = 'carousel-item-end';
  var CLASS_NAME_START = 'carousel-item-start';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_INDICATOR = '[data-bs-target]';
  var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var POINTER_TYPE_TOUCH = 'touch';
  var POINTER_TYPE_PEN = 'pen';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function (_BaseComponent3) {
    _inherits(Carousel, _BaseComponent3);

    var _super3 = _createSuper(Carousel);

    function Carousel(element, config) {
      var _this3;

      _classCallCheck(this, Carousel);

      _this3 = _super3.call(this, element);
      _this3._items = null;
      _this3._interval = null;
      _this3._activeElement = null;
      _this3._isPaused = false;
      _this3._isSliding = false;
      _this3.touchTimeout = null;
      _this3.touchStartX = 0;
      _this3.touchDeltaX = 0;
      _this3._config = _this3._getConfig(config);
      _this3._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this3._element);
      _this3._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      _this3._pointerEvent = Boolean(window.PointerEvent);

      _this3._addEventListeners();

      return _this3;
    } // Getters


    _createClass(Carousel, [{
      key: "next",
      value: // Public
      function next() {
        this._slide(ORDER_NEXT);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && isVisible(this._element)) {
          this.next();
        }
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(ORDER_PREV);
      }
    }, {
      key: "pause",
      value: function pause(event) {
        if (!event) {
          this._isPaused = true;
        }

        if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
          triggerTransitionEnd(this._element);
          this.cycle(true);
        }

        clearInterval(this._interval);
        this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(event) {
        if (!event) {
          this._isPaused = false;
        }

        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }

        if (this._config && this._config.interval && !this._isPaused) {
          this._updateInterval();

          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      }
    }, {
      key: "to",
      value: function to(index) {
        var _this4 = this;

        this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

        var activeIndex = this._getItemIndex(this._activeElement);

        if (index > this._items.length - 1 || index < 0) {
          return;
        }

        if (this._isSliding) {
          EventHandler.one(this._element, EVENT_SLID, function () {
            return _this4.to(index);
          });
          return;
        }

        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }

        var order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

        this._slide(order, this._items[index]);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default$a), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
        typeCheckConfig(NAME$b, config, DefaultType$a);
        return config;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var absDeltax = Math.abs(this.touchDeltaX);

        if (absDeltax <= SWIPE_THRESHOLD) {
          return;
        }

        var direction = absDeltax / this.touchDeltaX;
        this.touchDeltaX = 0;

        if (!direction) {
          return;
        }

        this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;

        if (this._config.keyboard) {
          EventHandler.on(this._element, EVENT_KEYDOWN, function (event) {
            return _this5._keydown(event);
          });
        }

        if (this._config.pause === 'hover') {
          EventHandler.on(this._element, EVENT_MOUSEENTER, function (event) {
            return _this5.pause(event);
          });
          EventHandler.on(this._element, EVENT_MOUSELEAVE, function (event) {
            return _this5.cycle(event);
          });
        }

        if (this._config.touch && this._touchSupported) {
          this._addTouchEventListeners();
        }
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;

        var hasPointerPenTouch = function hasPointerPenTouch(event) {
          return _this6._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
        };

        var start = function start(event) {
          if (hasPointerPenTouch(event)) {
            _this6.touchStartX = event.clientX;
          } else if (!_this6._pointerEvent) {
            _this6.touchStartX = event.touches[0].clientX;
          }
        };

        var move = function move(event) {
          // ensure swiping with one touch and not pinching
          _this6.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - _this6.touchStartX;
        };

        var end = function end(event) {
          if (hasPointerPenTouch(event)) {
            _this6.touchDeltaX = event.clientX - _this6.touchStartX;
          }

          _this6._handleSwipe();

          if (_this6._config.pause === 'hover') {
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            _this6.pause();

            if (_this6.touchTimeout) {
              clearTimeout(_this6.touchTimeout);
            }

            _this6.touchTimeout = setTimeout(function (event) {
              return _this6.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this6._config.interval);
          }
        };

        SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (itemImg) {
          EventHandler.on(itemImg, EVENT_DRAG_START, function (event) {
            return event.preventDefault();
          });
        });

        if (this._pointerEvent) {
          EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
            return start(event);
          });
          EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
            return end(event);
          });

          this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
          EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
            return start(event);
          });
          EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
            return move(event);
          });
          EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
            return end(event);
          });
        }
      }
    }, {
      key: "_keydown",
      value: function _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }

        var direction = KEY_TO_DIRECTION[event.key];

        if (direction) {
          event.preventDefault();

          this._slide(direction);
        }
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(element) {
        this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
        return this._items.indexOf(element);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(order, activeElement) {
        var isNext = order === ORDER_NEXT;
        return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(relatedTarget, eventDirectionName) {
        var targetIndex = this._getItemIndex(relatedTarget);

        var fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

        return EventHandler.trigger(this._element, EVENT_SLIDE, {
          relatedTarget: relatedTarget,
          direction: eventDirectionName,
          from: fromIndex,
          to: targetIndex
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          var activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
          activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
          activeIndicator.removeAttribute('aria-current');
          var indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

          for (var i = 0; i < indicators.length; i++) {
            if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
              indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
              indicators[i].setAttribute('aria-current', 'true');
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

        if (!element) {
          return;
        }

        var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

        if (elementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = elementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }
      }
    }, {
      key: "_slide",
      value: function _slide(directionOrOrder, element) {
        var _this7 = this;

        var order = this._directionToOrder(directionOrOrder);

        var activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

        var activeElementIndex = this._getItemIndex(activeElement);

        var nextElement = element || this._getItemByOrder(order, activeElement);

        var nextElementIndex = this._getItemIndex(nextElement);

        var isCycling = Boolean(this._interval);
        var isNext = order === ORDER_NEXT;
        var directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        var orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

        var eventDirectionName = this._orderToDirection(order);

        if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
          this._isSliding = false;
          return;
        }

        if (this._isSliding) {
          return;
        }

        var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

        if (slideEvent.defaultPrevented) {
          return;
        }

        if (!activeElement || !nextElement) {
          // Some weirdness is happening, so we bail
          return;
        }

        this._isSliding = true;

        if (isCycling) {
          this.pause();
        }

        this._setActiveIndicatorElement(nextElement);

        this._activeElement = nextElement;

        var triggerSlidEvent = function triggerSlidEvent() {
          EventHandler.trigger(_this7._element, EVENT_SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
          });
        };

        if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
          nextElement.classList.add(orderClassName);
          reflow(nextElement);
          activeElement.classList.add(directionalClassName);
          nextElement.classList.add(directionalClassName);

          var completeCallBack = function completeCallBack() {
            nextElement.classList.remove(directionalClassName, orderClassName);
            nextElement.classList.add(CLASS_NAME_ACTIVE$2);
            activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
            _this7._isSliding = false;
            setTimeout(triggerSlidEvent, 0);
          };

          this._queueCallback(completeCallBack, activeElement, true);
        } else {
          activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
          nextElement.classList.add(CLASS_NAME_ACTIVE$2);
          this._isSliding = false;
          triggerSlidEvent();
        }

        if (isCycling) {
          this.cycle();
        }
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(direction) {
        if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
          return direction;
        }

        if (isRTL()) {
          return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
        }

        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(order) {
        if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
          return order;
        }

        if (isRTL()) {
          return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }

        return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$a;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$b;
      }
    }, {
      key: "carouselInterface",
      value: function carouselInterface(element, config) {
        var data = Carousel.getOrCreateInstance(element, config);
        var _config = data._config;

        if (_typeof(config) === 'object') {
          _config = _objectSpread(_objectSpread({}, _config), config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"".concat(action, "\""));
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          Carousel.carouselInterface(this, config);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(event) {
        var target = getElementFromSelector(this);

        if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
          return;
        }

        var config = _objectSpread(_objectSpread({}, Manipulator.getDataAttributes(target)), Manipulator.getDataAttributes(this));

        var slideIndex = this.getAttribute('data-bs-slide-to');

        if (slideIndex) {
          config.interval = false;
        }

        Carousel.carouselInterface(target, config);

        if (slideIndex) {
          Carousel.getInstance(target).to(slideIndex);
        }

        event.preventDefault();
      }
    }]);

    return Carousel;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
    var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (var i = 0, len = carousels.length; i < len; i++) {
      Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Carousel to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Carousel);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'collapse';
  var DATA_KEY$9 = 'bs.collapse';
  var EVENT_KEY$9 = ".".concat(DATA_KEY$9);
  var DATA_API_KEY$5 = '.data-api';
  var Default$9 = {
    toggle: true,
    parent: null
  };
  var DefaultType$9 = {
    toggle: 'boolean',
    parent: '(null|element)'
  };
  var EVENT_SHOW$5 = "show".concat(EVENT_KEY$9);
  var EVENT_SHOWN$5 = "shown".concat(EVENT_KEY$9);
  var EVENT_HIDE$5 = "hide".concat(EVENT_KEY$9);
  var EVENT_HIDDEN$5 = "hidden".concat(EVENT_KEY$9);
  var EVENT_CLICK_DATA_API$4 = "click".concat(EVENT_KEY$9).concat(DATA_API_KEY$5);
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var CLASS_NAME_DEEPER_CHILDREN = ":scope .".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE);
  var CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  var WIDTH = 'width';
  var HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function (_BaseComponent4) {
    _inherits(Collapse, _BaseComponent4);

    var _super4 = _createSuper(Collapse);

    function Collapse(element, config) {
      var _this8;

      _classCallCheck(this, Collapse);

      _this8 = _super4.call(this, element);
      _this8._isTransitioning = false;
      _this8._config = _this8._getConfig(config);
      _this8._triggerArray = [];
      var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = getSelectorFromElement(elem);
        var filterElement = SelectorEngine.find(selector).filter(function (foundElem) {
          return foundElem === _this8._element;
        });

        if (selector !== null && filterElement.length) {
          _this8._selector = selector;

          _this8._triggerArray.push(elem);
        }
      }

      _this8._initializeChildren();

      if (!_this8._config.parent) {
        _this8._addAriaAndCollapsedClass(_this8._triggerArray, _this8._isShown());
      }

      if (_this8._config.toggle) {
        _this8.toggle();
      }

      return _this8;
    } // Getters


    _createClass(Collapse, [{
      key: "toggle",
      value: // Public
      function toggle() {
        if (this._isShown()) {
          this.hide();
        } else {
          this.show();
        }
      }
    }, {
      key: "show",
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || this._isShown()) {
          return;
        }

        var actives = [];
        var activesData;

        if (this._config.parent) {
          var children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
          actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(function (elem) {
            return !children.includes(elem);
          }); // remove children if greater depth
        }

        var container = SelectorEngine.findOne(this._selector);

        if (actives.length) {
          var tempActiveData = actives.find(function (elem) {
            return container !== elem;
          });
          activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

        if (startEvent.defaultPrevented) {
          return;
        }

        actives.forEach(function (elemActive) {
          if (container !== elemActive) {
            Collapse.getOrCreateInstance(elemActive, {
              toggle: false
            }).hide();
          }

          if (!activesData) {
            Data.set(elemActive, DATA_KEY$9, null);
          }
        });

        var dimension = this._getDimension();

        this._element.classList.remove(CLASS_NAME_COLLAPSE);

        this._element.classList.add(CLASS_NAME_COLLAPSING);

        this._element.style[dimension] = 0;

        this._addAriaAndCollapsedClass(this._triggerArray, true);

        this._isTransitioning = true;

        var complete = function complete() {
          _this9._isTransitioning = false;

          _this9._element.classList.remove(CLASS_NAME_COLLAPSING);

          _this9._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

          _this9._element.style[dimension] = '';
          EventHandler.trigger(_this9._element, EVENT_SHOWN$5);
        };

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = "scroll".concat(capitalizedDimension);

        this._queueCallback(complete, this._element, true);

        this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this10 = this;

        if (this._isTransitioning || !this._isShown()) {
          return;
        }

        var startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

        if (startEvent.defaultPrevented) {
          return;
        }

        var dimension = this._getDimension();

        this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
        reflow(this._element);

        this._element.classList.add(CLASS_NAME_COLLAPSING);

        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

        var triggerArrayLength = this._triggerArray.length;

        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var elem = getElementFromSelector(trigger);

          if (elem && !this._isShown(elem)) {
            this._addAriaAndCollapsedClass([trigger], false);
          }
        }

        this._isTransitioning = true;

        var complete = function complete() {
          _this10._isTransitioning = false;

          _this10._element.classList.remove(CLASS_NAME_COLLAPSING);

          _this10._element.classList.add(CLASS_NAME_COLLAPSE);

          EventHandler.trigger(_this10._element, EVENT_HIDDEN$5);
        };

        this._element.style[dimension] = '';

        this._queueCallback(complete, this._element, true);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return element.classList.contains(CLASS_NAME_SHOW$7);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default$9), Manipulator.getDataAttributes(this._element)), config);
        config.toggle = Boolean(config.toggle); // Coerce string values

        config.parent = getElement(config.parent);
        typeCheckConfig(NAME$a, config, DefaultType$9);
        return config;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        var _this11 = this;

        if (!this._config.parent) {
          return;
        }

        var children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
        SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(function (elem) {
          return !children.includes(elem);
        }).forEach(function (element) {
          var selected = getElementFromSelector(element);

          if (selected) {
            _this11._addAriaAndCollapsedClass([element], _this11._isShown(selected));
          }
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) {
          return;
        }

        triggerArray.forEach(function (elem) {
          if (isOpen) {
            elem.classList.remove(CLASS_NAME_COLLAPSED);
          } else {
            elem.classList.add(CLASS_NAME_COLLAPSED);
          }

          elem.setAttribute('aria-expanded', isOpen);
        });
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$9;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$a;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var _config = {};

          if (typeof config === 'string' && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          var data = Collapse.getOrCreateInstance(this, _config);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Collapse;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }

    var selector = getSelectorFromElement(this);
    var selectorElements = SelectorEngine.find(selector);
    selectorElements.forEach(function (element) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Collapse to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Collapse);
  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getWindow(node) {
    if (node == null) {
      return window;
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }

  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }

    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  } // and applies them to the HTMLElements such as popper and arrow


  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$2,
    requires: ['computeStyles']
  };

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  } // import { isHTMLElement } from './instanceOf';


  function getBoundingClientRect(element, // eslint-disable-next-line unused-imports/no-unused-vars
  includeScale) {
    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1; // FIXME:
    // `offsetWidth` returns an integer while `getBoundingClientRect`
    // returns a float. This results in `scaleX` or `scaleY` being
    // non-1 when it should be for elements that aren't a full pixel in
    // width or height.
    // if (isHTMLElement(element) && includeScale) {
    //   const offsetHeight = element.offsetHeight;
    //   const offsetWidth = element.offsetWidth;
    //   // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    //   // Fallback to 1 in case both values are `0`
    //   if (offsetWidth > 0) {
    //     scaleX = rect.width / offsetWidth || 1;
    //   }
    //   if (offsetHeight > 0) {
    //     scaleY = rect.height / offsetHeight || 1;
    //   }
    // }

    return {
      width: rect.width / scaleX,
      height: rect.height / scaleY,
      top: rect.top / scaleY,
      right: rect.right / scaleX,
      bottom: rect.bottom / scaleY,
      left: rect.left / scaleX,
      x: rect.left / scaleX,
      y: rect.top / scaleY
    };
  } // means it doesn't take into account transforms.


  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;

        do {
          if (next && parent.isSameNode(next)) {
            return true;
          } // $FlowFixMe[prop-missing]: need a better way to handle this...


          next = next.parentNode || next.host;
        } while (next);
      } // Give up, the result is false


    return false;
  }

  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || ( // DOM Element detected
      isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle$1(element).position === 'fixed') {
      return null;
    }

    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var isIE = navigator.userAgent.indexOf('Trident') !== -1;

    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle$1(element);

      if (elementCss.position === 'fixed') {
        return null;
      }
    }

    var currentNode = getParentNode(element);

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name,
        options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect$1(_ref2) {
    var state = _ref2.state,
        options = _ref2.options;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }

    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
        y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(round(x * dpr) / dpr) || 0,
      y: round(round(y * dpr) / dpr) || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        variation = _ref2.variation,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive,
        roundOffsets = _ref2.roundOffsets;

    var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
        _ref3$x = _ref3.x,
        x = _ref3$x === void 0 ? 0 : _ref3$x,
        _ref3$y = _ref3.y,
        y = _ref3$y === void 0 ? 0 : _ref3$y;

    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);

        if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


      offsetParent = offsetParent;

      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom; // $FlowFixMe[prop-missing]

        y -= offsetParent[heightProp] - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right; // $FlowFixMe[prop-missing]

        x -= offsetParent[widthProp] - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref4) {
    var state = _ref4.state,
        options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
        _options$roundOffsets = options.roundOffsets,
        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };
  var passive = {
    passive: true
  };

  function effect(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
  };
  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };

  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: 'end',
    end: 'start'
  };

  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
      // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
      // errors due to floating point numbers, so we need to check precision.
      // Safari returns a number <= 0, usually < -1 when pinch-zoomed
      // Feature detection fails in mobile emulation mode in Chrome.
      // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
      // 0.001
      // Fallback here: "Not Safari" userAgent

      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  } // of the `<html>` and `<body>` rect bounds if horizontally scrollable


  function getDocumentRect(element) {
    var _element$ownerDocumen;

    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle$1(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle$1(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }
  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */


  function listScrollParents(element, list) {
    var _element$ownerDocumen;

    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name; // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step

    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis || checkAltAxis) {
      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
      var max$1 = popperOffsets[mainAxis] - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
      var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

      if (checkMainAxis) {
        var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
      }

      if (checkAltAxis) {
        var _mainSide = mainAxis === 'x' ? top : left;

        var _altSide = mainAxis === 'x' ? bottom : right;

        var _offset = popperOffsets[altAxis];

        var _min = _offset + overflow[_mainSide];

        var _max = _offset - overflow[_altSide];

        var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
      }
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = rect.width / element.offsetWidth || 1;
    var scaleY = rect.height / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  } // Returns the composite rect of an element relative to its offsetParent.
  // Composite means it takes into account transforms as well as layout.


  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(setOptionsAction) {
          var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          }); // Validate the provided modifiers so that the consumer will get warned

          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });

          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {
        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
              _ref3$options = _ref3.options,
              options = _ref3$options === void 0 ? {} : _ref3$options,
              effect = _ref3.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }

  var createPopper$2 = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
  var createPopper$1 = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers$1
  }); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  var Popper = /*#__PURE__*/Object.freeze({
    __proto__: null,
    popperGenerator: popperGenerator,
    detectOverflow: detectOverflow,
    createPopperBase: createPopper$2,
    createPopper: createPopper,
    createPopperLite: createPopper$1,
    top: top,
    bottom: bottom,
    right: right,
    left: left,
    auto: auto,
    basePlacements: basePlacements,
    start: start,
    end: end,
    clippingParents: clippingParents,
    viewport: viewport,
    popper: popper,
    reference: reference,
    variationPlacements: variationPlacements,
    placements: placements,
    beforeRead: beforeRead,
    read: read,
    afterRead: afterRead,
    beforeMain: beforeMain,
    main: main,
    afterMain: afterMain,
    beforeWrite: beforeWrite,
    write: write,
    afterWrite: afterWrite,
    modifierPhases: modifierPhases,
    applyStyles: applyStyles$1,
    arrow: arrow$1,
    computeStyles: computeStyles$1,
    eventListeners: eventListeners,
    flip: flip$1,
    hide: hide$1,
    offset: offset$1,
    popperOffsets: popperOffsets$1,
    preventOverflow: preventOverflow$1
  });
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'dropdown';
  var DATA_KEY$8 = 'bs.dropdown';
  var EVENT_KEY$8 = ".".concat(DATA_KEY$8);
  var DATA_API_KEY$4 = '.data-api';
  var ESCAPE_KEY$2 = 'Escape';
  var SPACE_KEY = 'Space';
  var TAB_KEY$1 = 'Tab';
  var ARROW_UP_KEY = 'ArrowUp';
  var ARROW_DOWN_KEY = 'ArrowDown';
  var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  var REGEXP_KEYDOWN = new RegExp("".concat(ARROW_UP_KEY, "|").concat(ARROW_DOWN_KEY, "|").concat(ESCAPE_KEY$2));
  var EVENT_HIDE$4 = "hide".concat(EVENT_KEY$8);
  var EVENT_HIDDEN$4 = "hidden".concat(EVENT_KEY$8);
  var EVENT_SHOW$4 = "show".concat(EVENT_KEY$8);
  var EVENT_SHOWN$4 = "shown".concat(EVENT_KEY$8);
  var EVENT_CLICK_DATA_API$3 = "click".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
  var EVENT_KEYDOWN_DATA_API = "keydown".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
  var EVENT_KEYUP_DATA_API = "keyup".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
  var CLASS_NAME_SHOW$6 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPEND = 'dropend';
  var CLASS_NAME_DROPSTART = 'dropstart';
  var CLASS_NAME_NAVBAR = 'navbar';
  var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  var PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  var PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  var PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  var PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  var PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  var Default$8 = {
    offset: [0, 2],
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null,
    autoClose: true
  };
  var DefaultType$8 = {
    offset: '(array|string|function)',
    boundary: '(string|element)',
    reference: '(string|element|object)',
    display: 'string',
    popperConfig: '(null|object|function)',
    autoClose: '(boolean|string)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function (_BaseComponent5) {
    _inherits(Dropdown, _BaseComponent5);

    var _super5 = _createSuper(Dropdown);

    function Dropdown(element, config) {
      var _this12;

      _classCallCheck(this, Dropdown);

      _this12 = _super5.call(this, element);
      _this12._popper = null;
      _this12._config = _this12._getConfig(config);
      _this12._menu = _this12._getMenuElement();
      _this12._inNavbar = _this12._detectNavbar();
      return _this12;
    } // Getters


    _createClass(Dropdown, [{
      key: "toggle",
      value: // Public
      function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (isDisabled(this._element) || this._isShown(this._menu)) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };
        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

        if (showEvent.defaultPrevented) {
          return;
        }

        var parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

        if (this._inNavbar) {
          Manipulator.setDataAttribute(this._menu, 'popper', 'none');
        } else {
          this._createPopper(parent);
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
          var _ref8;

          (_ref8 = []).concat.apply(_ref8, _toConsumableArray(document.body.children)).forEach(function (elem) {
            return EventHandler.on(elem, 'mouseover', noop);
          });
        }

        this._element.focus();

        this._element.setAttribute('aria-expanded', true);

        this._menu.classList.add(CLASS_NAME_SHOW$6);

        this._element.classList.add(CLASS_NAME_SHOW$6);

        EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
      }
    }, {
      key: "hide",
      value: function hide() {
        if (isDisabled(this._element) || !this._isShown(this._menu)) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };

        this._completeHide(relatedTarget);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        if (this._popper) {
          this._popper.destroy();
        }

        _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar();

        if (this._popper) {
          this._popper.update();
        }
      } // Private

    }, {
      key: "_completeHide",
      value: function _completeHide(relatedTarget) {
        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

        if (hideEvent.defaultPrevented) {
          return;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          var _ref9;

          (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children)).forEach(function (elem) {
            return EventHandler.off(elem, 'mouseover', noop);
          });
        }

        if (this._popper) {
          this._popper.destroy();
        }

        this._menu.classList.remove(CLASS_NAME_SHOW$6);

        this._element.classList.remove(CLASS_NAME_SHOW$6);

        this._element.setAttribute('aria-expanded', 'false');

        Manipulator.removeDataAttribute(this._menu, 'popper');
        EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), Manipulator.getDataAttributes(this._element)), config);
        typeCheckConfig(NAME$9, config, this.constructor.DefaultType);

        if (_typeof(config.reference) === 'object' && !isElement$1(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
          // Popper virtual elements require a getBoundingClientRect method
          throw new TypeError("".concat(NAME$9.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        }

        return config;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(parent) {
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (isElement$1(this._config.reference)) {
          referenceElement = getElement(this._config.reference);
        } else if (_typeof(this._config.reference) === 'object') {
          referenceElement = this._config.reference;
        }

        var popperConfig = this._getPopperConfig();

        var isDisplayStatic = popperConfig.modifiers.find(function (modifier) {
          return modifier.name === 'applyStyles' && modifier.enabled === false;
        });
        this._popper = createPopper(referenceElement, this._menu, popperConfig);

        if (isDisplayStatic) {
          Manipulator.setDataAttribute(this._menu, 'popper', 'static');
        }
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return element.classList.contains(CLASS_NAME_SHOW$6);
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var parentDropdown = this._element.parentNode;

        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
          return PLACEMENT_RIGHT;
        }

        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
          return PLACEMENT_LEFT;
        } // We need to trim the value because custom properties can also include spaces


        var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
          return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        }

        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return this._element.closest(".".concat(CLASS_NAME_NAVBAR)) !== null;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this13 = this;

        var offset = this._config.offset;

        if (typeof offset === 'string') {
          return offset.split(',').map(function (val) {
            return Number.parseInt(val, 10);
          });
        }

        if (typeof offset === 'function') {
          return function (popperData) {
            return offset(popperData, _this13._element);
          };
        }

        return offset;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var defaultBsPopperConfig = {
          placement: this._getPlacement(),
          modifiers: [{
            name: 'preventOverflow',
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: 'offset',
            options: {
              offset: this._getOffset()
            }
          }]
        }; // Disable Popper if we have a static display

        if (this._config.display === 'static') {
          defaultBsPopperConfig.modifiers = [{
            name: 'applyStyles',
            enabled: false
          }];
        }

        return _objectSpread(_objectSpread({}, defaultBsPopperConfig), typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref10) {
        var key = _ref10.key,
            target = _ref10.target;
        var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);

        if (!items.length) {
          return;
        } // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY


        getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$8;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$8;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$9;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Dropdown.getOrCreateInstance(this, config);

          if (typeof config !== 'string') {
            return;
          }

          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(event) {
        if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1)) {
          return;
        }

        var toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

        for (var i = 0, len = toggles.length; i < len; i++) {
          var context = Dropdown.getInstance(toggles[i]);

          if (!context || context._config.autoClose === false) {
            continue;
          }

          if (!context._isShown()) {
            continue;
          }

          var relatedTarget = {
            relatedTarget: context._element
          };

          if (event) {
            var composedPath = event.composedPath();
            var isMenuTarget = composedPath.includes(context._menu);

            if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
              continue;
            } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


            if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
              continue;
            }

            if (event.type === 'click') {
              relatedTarget.clickEvent = event;
            }
          }

          context._completeHide(relatedTarget);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(element) {
        return getElementFromSelector(element) || element.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(event) {
        // If not input/textarea:
        //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
        // If input/textarea:
        //  - If space key => not a dropdown command
        //  - If key is other than escape
        //    - If key is not up or down => not a dropdown command
        //    - If trigger inside the menu => not a dropdown command
        if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
          return;
        }

        var isActive = this.classList.contains(CLASS_NAME_SHOW$6);

        if (!isActive && event.key === ESCAPE_KEY$2) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (isDisabled(this)) {
          return;
        }

        var getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
        var instance = Dropdown.getOrCreateInstance(getToggleButton);

        if (event.key === ESCAPE_KEY$2) {
          instance.hide();
          return;
        }

        if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
          if (!isActive) {
            instance.show();
          }

          instance._selectMenuItem(event);

          return;
        }

        if (!isActive || event.key === SPACE_KEY) {
          Dropdown.clearMenus();
        }
      }
    }]);

    return Dropdown;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Dropdown to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Dropdown);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';

  var ScrollBarHelper = /*#__PURE__*/function () {
    function ScrollBarHelper() {
      _classCallCheck(this, ScrollBarHelper);

      this._element = document.body;
    }

    _createClass(ScrollBarHelper, [{
      key: "getWidth",
      value: function getWidth() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        var documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
      }
    }, {
      key: "hide",
      value: function hide() {
        var width = this.getWidth();

        this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


        this._setElementAttributes(this._element, 'paddingRight', function (calculatedValue) {
          return calculatedValue + width;
        }); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


        this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', function (calculatedValue) {
          return calculatedValue + width;
        });

        this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', function (calculatedValue) {
          return calculatedValue - width;
        });
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, 'overflow');

        this._element.style.overflow = 'hidden';
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(selector, styleProp, callback) {
        var _this14 = this;

        var scrollbarWidth = this.getWidth();

        var manipulationCallBack = function manipulationCallBack(element) {
          if (element !== _this14._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
            return;
          }

          _this14._saveInitialAttribute(element, styleProp);

          var calculatedValue = window.getComputedStyle(element)[styleProp];
          element.style[styleProp] = "".concat(callback(Number.parseFloat(calculatedValue)), "px");
        };

        this._applyManipulationCallback(selector, manipulationCallBack);
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, 'overflow');

        this._resetElementAttributes(this._element, 'paddingRight');

        this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

        this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(element, styleProp) {
        var actualValue = element.style[styleProp];

        if (actualValue) {
          Manipulator.setDataAttribute(element, styleProp, actualValue);
        }
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(selector, styleProp) {
        var manipulationCallBack = function manipulationCallBack(element) {
          var value = Manipulator.getDataAttribute(element, styleProp);

          if (typeof value === 'undefined') {
            element.style.removeProperty(styleProp);
          } else {
            Manipulator.removeDataAttribute(element, styleProp);
            element.style[styleProp] = value;
          }
        };

        this._applyManipulationCallback(selector, manipulationCallBack);
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(selector, callBack) {
        if (isElement$1(selector)) {
          callBack(selector);
        } else {
          SelectorEngine.find(selector, this._element).forEach(callBack);
        }
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }]);

    return ScrollBarHelper;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  var Default$7 = {
    className: 'modal-backdrop',
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    isAnimated: false,
    rootElement: 'body',
    // give the choice to place backdrop under different elements
    clickCallback: null
  };
  var DefaultType$7 = {
    className: 'string',
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: '(element|string)',
    clickCallback: '(function|null)'
  };
  var NAME$8 = 'backdrop';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME$8);

  var Backdrop = /*#__PURE__*/function () {
    function Backdrop(config) {
      _classCallCheck(this, Backdrop);

      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }

    _createClass(Backdrop, [{
      key: "show",
      value: function show(callback) {
        if (!this._config.isVisible) {
          execute(callback);
          return;
        }

        this._append();

        if (this._config.isAnimated) {
          reflow(this._getElement());
        }

        this._getElement().classList.add(CLASS_NAME_SHOW$5);

        this._emulateAnimation(function () {
          execute(callback);
        });
      }
    }, {
      key: "hide",
      value: function hide(callback) {
        var _this15 = this;

        if (!this._config.isVisible) {
          execute(callback);
          return;
        }

        this._getElement().classList.remove(CLASS_NAME_SHOW$5);

        this._emulateAnimation(function () {
          _this15.dispose();

          execute(callback);
        });
      } // Private

    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var backdrop = document.createElement('div');
          backdrop.className = this._config.className;

          if (this._config.isAnimated) {
            backdrop.classList.add(CLASS_NAME_FADE$4);
          }

          this._element = backdrop;
        }

        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread({}, Default$7), _typeof(config) === 'object' ? config : {}); // use getElement() with the default "body" to get a fresh Element on each instantiation

        config.rootElement = getElement(config.rootElement);
        typeCheckConfig(NAME$8, config, DefaultType$7);
        return config;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this16 = this;

        if (this._isAppended) {
          return;
        }

        this._config.rootElement.append(this._getElement());

        EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, function () {
          execute(_this16._config.clickCallback);
        });
        this._isAppended = true;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        if (!this._isAppended) {
          return;
        }

        EventHandler.off(this._element, EVENT_MOUSEDOWN);

        this._element.remove();

        this._isAppended = false;
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(callback) {
        executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
      }
    }]);

    return Backdrop;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  var Default$6 = {
    trapElement: null,
    // The element to trap focus inside of
    autofocus: true
  };
  var DefaultType$6 = {
    trapElement: 'element',
    autofocus: 'boolean'
  };
  var NAME$7 = 'focustrap';
  var DATA_KEY$7 = 'bs.focustrap';
  var EVENT_KEY$7 = ".".concat(DATA_KEY$7);
  var EVENT_FOCUSIN$1 = "focusin".concat(EVENT_KEY$7);
  var EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY$7);
  var TAB_KEY = 'Tab';
  var TAB_NAV_FORWARD = 'forward';
  var TAB_NAV_BACKWARD = 'backward';

  var FocusTrap = /*#__PURE__*/function () {
    function FocusTrap(config) {
      _classCallCheck(this, FocusTrap);

      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }

    _createClass(FocusTrap, [{
      key: "activate",
      value: function activate() {
        var _this17 = this;

        var _this$_config = this._config,
            trapElement = _this$_config.trapElement,
            autofocus = _this$_config.autofocus;

        if (this._isActive) {
          return;
        }

        if (autofocus) {
          trapElement.focus();
        }

        EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop

        EventHandler.on(document, EVENT_FOCUSIN$1, function (event) {
          return _this17._handleFocusin(event);
        });
        EventHandler.on(document, EVENT_KEYDOWN_TAB, function (event) {
          return _this17._handleKeydown(event);
        });
        this._isActive = true;
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        if (!this._isActive) {
          return;
        }

        this._isActive = false;
        EventHandler.off(document, EVENT_KEY$7);
      } // Private

    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(event) {
        var target = event.target;
        var trapElement = this._config.trapElement;

        if (target === document || target === trapElement || trapElement.contains(target)) {
          return;
        }

        var elements = SelectorEngine.focusableChildren(trapElement);

        if (elements.length === 0) {
          trapElement.focus();
        } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
          elements[elements.length - 1].focus();
        } else {
          elements[0].focus();
        }
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(event) {
        if (event.key !== TAB_KEY) {
          return;
        }

        this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread({}, Default$6), _typeof(config) === 'object' ? config : {});
        typeCheckConfig(NAME$7, config, DefaultType$6);
        return config;
      }
    }]);

    return FocusTrap;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'modal';
  var DATA_KEY$6 = 'bs.modal';
  var EVENT_KEY$6 = ".".concat(DATA_KEY$6);
  var DATA_API_KEY$3 = '.data-api';
  var ESCAPE_KEY$1 = 'Escape';
  var Default$5 = {
    backdrop: true,
    keyboard: true,
    focus: true
  };
  var DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
  };
  var EVENT_HIDE$3 = "hide".concat(EVENT_KEY$6);
  var EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY$6);
  var EVENT_HIDDEN$3 = "hidden".concat(EVENT_KEY$6);
  var EVENT_SHOW$3 = "show".concat(EVENT_KEY$6);
  var EVENT_SHOWN$3 = "shown".concat(EVENT_KEY$6);
  var EVENT_RESIZE = "resize".concat(EVENT_KEY$6);
  var EVENT_CLICK_DISMISS = "click.dismiss".concat(EVENT_KEY$6);
  var EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss".concat(EVENT_KEY$6);
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss".concat(EVENT_KEY$6);
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat(EVENT_KEY$6);
  var EVENT_CLICK_DATA_API$2 = "click".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var OPEN_SELECTOR$1 = '.modal.show';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function (_BaseComponent6) {
    _inherits(Modal, _BaseComponent6);

    var _super6 = _createSuper(Modal);

    function Modal(element, config) {
      var _this18;

      _classCallCheck(this, Modal);

      _this18 = _super6.call(this, element);
      _this18._config = _this18._getConfig(config);
      _this18._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, _this18._element);
      _this18._backdrop = _this18._initializeBackDrop();
      _this18._focustrap = _this18._initializeFocusTrap();
      _this18._isShown = false;
      _this18._ignoreBackdropClick = false;
      _this18._isTransitioning = false;
      _this18._scrollBar = new ScrollBarHelper();
      return _this18;
    } // Getters


    _createClass(Modal, [{
      key: "toggle",
      value: // Public
      function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: "show",
      value: function show(relatedTarget) {
        var _this19 = this;

        if (this._isShown || this._isTransitioning) {
          return;
        }

        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
          relatedTarget: relatedTarget
        });

        if (showEvent.defaultPrevented) {
          return;
        }

        this._isShown = true;

        if (this._isAnimated()) {
          this._isTransitioning = true;
        }

        this._scrollBar.hide();

        document.body.classList.add(CLASS_NAME_OPEN);

        this._adjustDialog();

        this._setEscapeEvent();

        this._setResizeEvent();

        EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
          EventHandler.one(_this19._element, EVENT_MOUSEUP_DISMISS, function (event) {
            if (event.target === _this19._element) {
              _this19._ignoreBackdropClick = true;
            }
          });
        });

        this._showBackdrop(function () {
          return _this19._showElement(relatedTarget);
        });
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this20 = this;

        if (!this._isShown || this._isTransitioning) {
          return;
        }

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

        if (hideEvent.defaultPrevented) {
          return;
        }

        this._isShown = false;

        var isAnimated = this._isAnimated();

        if (isAnimated) {
          this._isTransitioning = true;
        }

        this._setEscapeEvent();

        this._setResizeEvent();

        this._focustrap.deactivate();

        this._element.classList.remove(CLASS_NAME_SHOW$4);

        EventHandler.off(this._element, EVENT_CLICK_DISMISS);
        EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

        this._queueCallback(function () {
          return _this20._hideModal();
        }, this._element, isAnimated);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (htmlElement) {
          return EventHandler.off(htmlElement, EVENT_KEY$6);
        });

        this._backdrop.dispose();

        this._focustrap.deactivate();

        _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      } // Private

    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new Backdrop({
          isVisible: Boolean(this._config.backdrop),
          // 'static' option will be translated to true, and booleans will keep their value
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new FocusTrap({
          trapElement: this._element
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default$5), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
        typeCheckConfig(NAME$6, config, DefaultType$5);
        return config;
      }
    }, {
      key: "_showElement",
      value: function _showElement(relatedTarget) {
        var _this21 = this;

        var isAnimated = this._isAnimated();

        var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          // Don't move modal's DOM position
          document.body.append(this._element);
        }

        this._element.style.display = 'block';

        this._element.removeAttribute('aria-hidden');

        this._element.setAttribute('aria-modal', true);

        this._element.setAttribute('role', 'dialog');

        this._element.scrollTop = 0;

        if (modalBody) {
          modalBody.scrollTop = 0;
        }

        if (isAnimated) {
          reflow(this._element);
        }

        this._element.classList.add(CLASS_NAME_SHOW$4);

        var transitionComplete = function transitionComplete() {
          if (_this21._config.focus) {
            _this21._focustrap.activate();
          }

          _this21._isTransitioning = false;
          EventHandler.trigger(_this21._element, EVENT_SHOWN$3, {
            relatedTarget: relatedTarget
          });
        };

        this._queueCallback(transitionComplete, this._dialog, isAnimated);
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this22 = this;

        if (this._isShown) {
          EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function (event) {
            if (_this22._config.keyboard && event.key === ESCAPE_KEY$1) {
              event.preventDefault();

              _this22.hide();
            } else if (!_this22._config.keyboard && event.key === ESCAPE_KEY$1) {
              _this22._triggerBackdropTransition();
            }
          });
        } else {
          EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
        }
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this23 = this;

        if (this._isShown) {
          EventHandler.on(window, EVENT_RESIZE, function () {
            return _this23._adjustDialog();
          });
        } else {
          EventHandler.off(window, EVENT_RESIZE);
        }
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this24 = this;

        this._element.style.display = 'none';

        this._element.setAttribute('aria-hidden', true);

        this._element.removeAttribute('aria-modal');

        this._element.removeAttribute('role');

        this._isTransitioning = false;

        this._backdrop.hide(function () {
          document.body.classList.remove(CLASS_NAME_OPEN);

          _this24._resetAdjustments();

          _this24._scrollBar.reset();

          EventHandler.trigger(_this24._element, EVENT_HIDDEN$3);
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(callback) {
        var _this25 = this;

        EventHandler.on(this._element, EVENT_CLICK_DISMISS, function (event) {
          if (_this25._ignoreBackdropClick) {
            _this25._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this25._config.backdrop === true) {
            _this25.hide();
          } else if (_this25._config.backdrop === 'static') {
            _this25._triggerBackdropTransition();
          }
        });

        this._backdrop.show(callback);
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_FADE$3);
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this26 = this;

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

        if (hideEvent.defaultPrevented) {
          return;
        }

        var _this$_element = this._element,
            classList = _this$_element.classList,
            scrollHeight = _this$_element.scrollHeight,
            style = _this$_element.style;
        var isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

        if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
          return;
        }

        if (!isModalOverflowing) {
          style.overflowY = 'hidden';
        }

        classList.add(CLASS_NAME_STATIC);

        this._queueCallback(function () {
          classList.remove(CLASS_NAME_STATIC);

          if (!isModalOverflowing) {
            _this26._queueCallback(function () {
              style.overflowY = '';
            }, _this26._dialog);
          }
        }, this._dialog);

        this._element.focus();
      } // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // ----------------------------------------------------------------------

    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        var scrollbarWidth = this._scrollBar.getWidth();

        var isBodyOverflowing = scrollbarWidth > 0;

        if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
          this._element.style.paddingLeft = "".concat(scrollbarWidth, "px");
        }

        if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
          this._element.style.paddingRight = "".concat(scrollbarWidth, "px");
        }
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = Modal.getOrCreateInstance(this, config);

          if (typeof config !== 'string') {
            return;
          }

          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config](relatedTarget);
        });
      }
    }]);

    return Modal;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    var _this27 = this;

    var target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    EventHandler.one(target, EVENT_SHOW$3, function (showEvent) {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      EventHandler.one(target, EVENT_HIDDEN$3, function () {
        if (isVisible(_this27)) {
          _this27.focus();
        }
      });
    }); // avoid conflict when clicking moddal toggler while another one is open

    var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

    if (allReadyOpen) {
      Modal.getInstance(allReadyOpen).hide();
    }

    var data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Modal);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'offcanvas';
  var DATA_KEY$5 = 'bs.offcanvas';
  var EVENT_KEY$5 = ".".concat(DATA_KEY$5);
  var DATA_API_KEY$2 = '.data-api';
  var EVENT_LOAD_DATA_API$1 = "load".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
  var ESCAPE_KEY = 'Escape';
  var Default$4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType$4 = {
    backdrop: 'boolean',
    keyboard: 'boolean',
    scroll: 'boolean'
  };
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  var OPEN_SELECTOR = '.offcanvas.show';
  var EVENT_SHOW$2 = "show".concat(EVENT_KEY$5);
  var EVENT_SHOWN$2 = "shown".concat(EVENT_KEY$5);
  var EVENT_HIDE$2 = "hide".concat(EVENT_KEY$5);
  var EVENT_HIDDEN$2 = "hidden".concat(EVENT_KEY$5);
  var EVENT_CLICK_DATA_API$1 = "click".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY$5);
  var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Offcanvas = /*#__PURE__*/function (_BaseComponent7) {
    _inherits(Offcanvas, _BaseComponent7);

    var _super7 = _createSuper(Offcanvas);

    function Offcanvas(element, config) {
      var _this28;

      _classCallCheck(this, Offcanvas);

      _this28 = _super7.call(this, element);
      _this28._config = _this28._getConfig(config);
      _this28._isShown = false;
      _this28._backdrop = _this28._initializeBackDrop();
      _this28._focustrap = _this28._initializeFocusTrap();

      _this28._addEventListeners();

      return _this28;
    } // Getters


    _createClass(Offcanvas, [{
      key: "toggle",
      value: // Public
      function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: "show",
      value: function show(relatedTarget) {
        var _this29 = this;

        if (this._isShown) {
          return;
        }

        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
          relatedTarget: relatedTarget
        });

        if (showEvent.defaultPrevented) {
          return;
        }

        this._isShown = true;
        this._element.style.visibility = 'visible';

        this._backdrop.show();

        if (!this._config.scroll) {
          new ScrollBarHelper().hide();
        }

        this._element.removeAttribute('aria-hidden');

        this._element.setAttribute('aria-modal', true);

        this._element.setAttribute('role', 'dialog');

        this._element.classList.add(CLASS_NAME_SHOW$3);

        var completeCallBack = function completeCallBack() {
          if (!_this29._config.scroll) {
            _this29._focustrap.activate();
          }

          EventHandler.trigger(_this29._element, EVENT_SHOWN$2, {
            relatedTarget: relatedTarget
          });
        };

        this._queueCallback(completeCallBack, this._element, true);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this30 = this;

        if (!this._isShown) {
          return;
        }

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

        if (hideEvent.defaultPrevented) {
          return;
        }

        this._focustrap.deactivate();

        this._element.blur();

        this._isShown = false;

        this._element.classList.remove(CLASS_NAME_SHOW$3);

        this._backdrop.hide();

        var completeCallback = function completeCallback() {
          _this30._element.setAttribute('aria-hidden', true);

          _this30._element.removeAttribute('aria-modal');

          _this30._element.removeAttribute('role');

          _this30._element.style.visibility = 'hidden';

          if (!_this30._config.scroll) {
            new ScrollBarHelper().reset();
          }

          EventHandler.trigger(_this30._element, EVENT_HIDDEN$2);
        };

        this._queueCallback(completeCallback, this._element, true);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose();

        this._focustrap.deactivate();

        _get(_getPrototypeOf(Offcanvas.prototype), "dispose", this).call(this);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default$4), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
        typeCheckConfig(NAME$5, config, DefaultType$4);
        return config;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this31 = this;

        return new Backdrop({
          className: CLASS_NAME_BACKDROP,
          isVisible: this._config.backdrop,
          isAnimated: true,
          rootElement: this._element.parentNode,
          clickCallback: function clickCallback() {
            return _this31.hide();
          }
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new FocusTrap({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this32 = this;

        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this32._config.keyboard && event.key === ESCAPE_KEY) {
            _this32.hide();
          }
        });
      } // Static

    }], [{
      key: "NAME",
      get: function get() {
        return NAME$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Offcanvas.getOrCreateInstance(this, config);

          if (typeof config !== 'string') {
            return;
          }

          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config](this);
        });
      }
    }]);

    return Offcanvas;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    var _this33 = this;

    var target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$2, function () {
      // focus on trigger when it is closed
      if (isVisible(_this33)) {
        _this33.focus();
      }
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

    var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

    if (allReadyOpen && allReadyOpen !== target) {
      Offcanvas.getInstance(allReadyOpen).hide();
    }

    var data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
    return SelectorEngine.find(OPEN_SELECTOR).forEach(function (el) {
      return Offcanvas.getOrCreateInstance(el).show();
    });
  });
  enableDismissTrigger(Offcanvas);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  defineJQueryPlugin(Offcanvas);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  var allowedAttribute = function allowedAttribute(attribute, allowedAttributeList) {
    var attributeName = attribute.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attributeRegex) {
      return attributeRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (regExp[i].test(attributeName)) {
        return true;
      }
    }

    return false;
  };

  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };

  function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    var _ref11;

    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');

    var elements = (_ref11 = []).concat.apply(_ref11, _toConsumableArray(createdDocument.body.querySelectorAll('*')));

    var _loop2 = function _loop2(i, len) {
      var _ref12;

      var element = elements[i];
      var elementName = element.nodeName.toLowerCase();

      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        return "continue";
      }

      var attributeList = (_ref12 = []).concat.apply(_ref12, _toConsumableArray(element.attributes));

      var allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
      attributeList.forEach(function (attribute) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret2 = _loop2(i, len);

      if (_ret2 === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$4 = 'tooltip';
  var DATA_KEY$4 = 'bs.tooltip';
  var EVENT_KEY$4 = ".".concat(DATA_KEY$4);
  var CLASS_PREFIX$1 = 'bs-tooltip';
  var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  var DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  var Default$3 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [0, 0],
    container: false,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
  };
  var Event$2 = {
    HIDE: "hide".concat(EVENT_KEY$4),
    HIDDEN: "hidden".concat(EVENT_KEY$4),
    SHOW: "show".concat(EVENT_KEY$4),
    SHOWN: "shown".concat(EVENT_KEY$4),
    INSERTED: "inserted".concat(EVENT_KEY$4),
    CLICK: "click".concat(EVENT_KEY$4),
    FOCUSIN: "focusin".concat(EVENT_KEY$4),
    FOCUSOUT: "focusout".concat(EVENT_KEY$4),
    MOUSEENTER: "mouseenter".concat(EVENT_KEY$4),
    MOUSELEAVE: "mouseleave".concat(EVENT_KEY$4)
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_MODAL = 'modal';
  var CLASS_NAME_SHOW$2 = 'show';
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_MODAL = ".".concat(CLASS_NAME_MODAL);
  var EVENT_MODAL_HIDE = 'hide.bs.modal';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function (_BaseComponent8) {
    _inherits(Tooltip, _BaseComponent8);

    var _super8 = _createSuper(Tooltip);

    function Tooltip(element, config) {
      var _this34;

      _classCallCheck(this, Tooltip);

      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }

      _this34 = _super8.call(this, element); // private

      _this34._isEnabled = true;
      _this34._timeout = 0;
      _this34._hoverState = '';
      _this34._activeTrigger = {};
      _this34._popper = null; // Protected

      _this34._config = _this34._getConfig(config);
      _this34.tip = null;

      _this34._setListeners();

      return _this34;
    } // Getters


    _createClass(Tooltip, [{
      key: "enable",
      value: // Public
      function enable() {
        this._isEnabled = true;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = false;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(event) {
        if (!this._isEnabled) {
          return;
        }

        if (event) {
          var context = this._initializeOnDelegatedTarget(event);

          context._activeTrigger.click = !context._activeTrigger.click;

          if (context._isWithActiveTrigger()) {
            context._enter(null, context);
          } else {
            context._leave(null, context);
          }
        } else {
          if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) {
            this._leave(null, this);

            return;
          }

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout);
        EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

        if (this.tip) {
          this.tip.remove();
        }

        this._disposePopper();

        _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this35 = this;

        if (this._element.style.display === 'none') {
          throw new Error('Please use show on visible elements');
        }

        if (!(this.isWithContent() && this._isEnabled)) {
          return;
        }

        var showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
        var shadowRoot = findShadowRoot(this._element);
        var isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

        if (showEvent.defaultPrevented || !isInTheDom) {
          return;
        } // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
        // This will be removed later in favor of a `setContent` method


        if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML) {
          this._disposePopper();

          this.tip.remove();
          this.tip = null;
        }

        var tip = this.getTipElement();
        var tipId = getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);

        this._element.setAttribute('aria-describedby', tipId);

        if (this._config.animation) {
          tip.classList.add(CLASS_NAME_FADE$2);
        }

        var placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

        var attachment = this._getAttachment(placement);

        this._addAttachmentClass(attachment);

        var container = this._config.container;
        Data.set(tip, this.constructor.DATA_KEY, this);

        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
          container.append(tip);
          EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
        }

        if (this._popper) {
          this._popper.update();
        } else {
          this._popper = createPopper(this._element, tip, this._getPopperConfig(attachment));
        }

        tip.classList.add(CLASS_NAME_SHOW$2);

        var customClass = this._resolvePossibleFunction(this._config.customClass);

        if (customClass) {
          var _tip$classList;

          (_tip$classList = tip.classList).add.apply(_tip$classList, _toConsumableArray(customClass.split(' ')));
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        if ('ontouchstart' in document.documentElement) {
          var _ref13;

          (_ref13 = []).concat.apply(_ref13, _toConsumableArray(document.body.children)).forEach(function (element) {
            EventHandler.on(element, 'mouseover', noop);
          });
        }

        var complete = function complete() {
          var prevHoverState = _this35._hoverState;
          _this35._hoverState = null;
          EventHandler.trigger(_this35._element, _this35.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this35._leave(null, _this35);
          }
        };

        var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

        this._queueCallback(complete, this.tip, isAnimated);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this36 = this;

        if (!this._popper) {
          return;
        }

        var tip = this.getTipElement();

        var complete = function complete() {
          if (_this36._isWithActiveTrigger()) {
            return;
          }

          if (_this36._hoverState !== HOVER_STATE_SHOW) {
            tip.remove();
          }

          _this36._cleanTipClass();

          _this36._element.removeAttribute('aria-describedby');

          EventHandler.trigger(_this36._element, _this36.constructor.Event.HIDDEN);

          _this36._disposePopper();
        };

        var hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

        if (hideEvent.defaultPrevented) {
          return;
        }

        tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support

        if ('ontouchstart' in document.documentElement) {
          var _ref14;

          (_ref14 = []).concat.apply(_ref14, _toConsumableArray(document.body.children)).forEach(function (element) {
            return EventHandler.off(element, 'mouseover', noop);
          });
        }

        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;
        var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

        this._queueCallback(complete, this.tip, isAnimated);

        this._hoverState = '';
      }
    }, {
      key: "update",
      value: function update() {
        if (this._popper !== null) {
          this._popper.update();
        }
      } // Protected

    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) {
          return this.tip;
        }

        var element = document.createElement('div');
        element.innerHTML = this._config.template;
        var tip = element.children[0];
        this.setContent(tip);
        tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
        this.tip = tip;
        return this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent(tip) {
        this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
      }
    }, {
      key: "_sanitizeAndSetContent",
      value: function _sanitizeAndSetContent(template, content, selector) {
        var templateElement = SelectorEngine.findOne(selector, template);

        if (!content && templateElement) {
          templateElement.remove();
          return;
        } // we use append for html objects to maintain js events


        this.setElementContent(templateElement, content);
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(element, content) {
        if (element === null) {
          return;
        }

        if (isElement$1(content)) {
          content = getElement(content); // content is a DOM node or a jQuery

          if (this._config.html) {
            if (content.parentNode !== element) {
              element.innerHTML = '';
              element.append(content);
            }
          } else {
            element.textContent = content.textContent;
          }

          return;
        }

        if (this._config.html) {
          if (this._config.sanitize) {
            content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
          }

          element.innerHTML = content;
        } else {
          element.textContent = content;
        }
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var title = this._element.getAttribute('data-bs-original-title') || this._config.title;

        return this._resolvePossibleFunction(title);
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(attachment) {
        if (attachment === 'right') {
          return 'end';
        }

        if (attachment === 'left') {
          return 'start';
        }

        return attachment;
      } // Private

    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(event, context) {
        return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this37 = this;

        var offset = this._config.offset;

        if (typeof offset === 'string') {
          return offset.split(',').map(function (val) {
            return Number.parseInt(val, 10);
          });
        }

        if (typeof offset === 'function') {
          return function (popperData) {
            return offset(popperData, _this37._element);
          };
        }

        return offset;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(content) {
        return typeof content === 'function' ? content.call(this._element) : content;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(attachment) {
        var _this38 = this;

        var defaultBsPopperConfig = {
          placement: attachment,
          modifiers: [{
            name: 'flip',
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: 'offset',
            options: {
              offset: this._getOffset()
            }
          }, {
            name: 'preventOverflow',
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: 'arrow',
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: 'onChange',
            enabled: true,
            phase: 'afterWrite',
            fn: function fn(data) {
              return _this38._handlePopperPlacementChange(data);
            }
          }],
          onFirstUpdate: function onFirstUpdate(data) {
            if (data.options.placement !== data.placement) {
              _this38._handlePopperPlacementChange(data);
            }
          }
        };
        return _objectSpread(_objectSpread({}, defaultBsPopperConfig), typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(attachment) {
        this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(attachment)));
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this39 = this;

        var triggers = this._config.trigger.split(' ');

        triggers.forEach(function (trigger) {
          if (trigger === 'click') {
            EventHandler.on(_this39._element, _this39.constructor.Event.CLICK, _this39._config.selector, function (event) {
              return _this39.toggle(event);
            });
          } else if (trigger !== TRIGGER_MANUAL) {
            var eventIn = trigger === TRIGGER_HOVER ? _this39.constructor.Event.MOUSEENTER : _this39.constructor.Event.FOCUSIN;
            var eventOut = trigger === TRIGGER_HOVER ? _this39.constructor.Event.MOUSELEAVE : _this39.constructor.Event.FOCUSOUT;
            EventHandler.on(_this39._element, eventIn, _this39._config.selector, function (event) {
              return _this39._enter(event);
            });
            EventHandler.on(_this39._element, eventOut, _this39._config.selector, function (event) {
              return _this39._leave(event);
            });
          }
        });

        this._hideModalHandler = function () {
          if (_this39._element) {
            _this39.hide();
          }
        };

        EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

        if (this._config.selector) {
          this._config = _objectSpread(_objectSpread({}, this._config), {}, {
            trigger: 'manual',
            selector: ''
          });
        } else {
          this._fixTitle();
        }
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var title = this._element.getAttribute('title');

        var originalTitleType = _typeof(this._element.getAttribute('data-bs-original-title'));

        if (title || originalTitleType !== 'string') {
          this._element.setAttribute('data-bs-original-title', title || '');

          if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
            this._element.setAttribute('aria-label', title);
          }

          this._element.setAttribute('title', '');
        }
      }
    }, {
      key: "_enter",
      value: function _enter(event, context) {
        context = this._initializeOnDelegatedTarget(event, context);

        if (event) {
          context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
        }

        if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context._hoverState === HOVER_STATE_SHOW) {
          context._hoverState = HOVER_STATE_SHOW;
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_SHOW;

        if (!context._config.delay || !context._config.delay.show) {
          context.show();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HOVER_STATE_SHOW) {
            context.show();
          }
        }, context._config.delay.show);
      }
    }, {
      key: "_leave",
      value: function _leave(event, context) {
        context = this._initializeOnDelegatedTarget(event, context);

        if (event) {
          context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
        }

        if (context._isWithActiveTrigger()) {
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_OUT;

        if (!context._config.delay || !context._config.delay.hide) {
          context.hide();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HOVER_STATE_OUT) {
            context.hide();
          }
        }, context._config.delay.hide);
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        var dataAttributes = Manipulator.getDataAttributes(this._element);
        Object.keys(dataAttributes).forEach(function (dataAttr) {
          if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
            delete dataAttributes[dataAttr];
          }
        });
        config = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), dataAttributes), _typeof(config) === 'object' && config ? config : {});
        config.container = config.container === false ? document.body : getElement(config.container);

        if (typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }

        if (typeof config.title === 'number') {
          config.title = config.title.toString();
        }

        if (typeof config.content === 'number') {
          config.content = config.content.toString();
        }

        typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

        if (config.sanitize) {
          config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
        }

        return config;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var config = {};

        for (var key in this._config) {
          if (this.constructor.Default[key] !== this._config[key]) {
            config[key] = this._config[key];
          }
        } // In the future can be replaced with:
        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
        // `Object.fromEntries(keysWithDifferentValues)`


        return config;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var tip = this.getTipElement();
        var basicClassPrefixRegex = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), 'g');
        var tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

        if (tabClass !== null && tabClass.length > 0) {
          tabClass.map(function (token) {
            return token.trim();
          }).forEach(function (tClass) {
            return tip.classList.remove(tClass);
          });
        }
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return CLASS_PREFIX$1;
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(popperData) {
        var state = popperData.state;

        if (!state) {
          return;
        }

        this.tip = state.elements.popper;

        this._cleanTipClass();

        this._addAttachmentClass(this._getAttachment(state.placement));
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        if (this._popper) {
          this._popper.destroy();

          this._popper = null;
        }
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$4;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$3;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Tooltip.getOrCreateInstance(this, config);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Tooltip;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tooltip to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Tooltip);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'popover';
  var DATA_KEY$3 = 'bs.popover';
  var EVENT_KEY$3 = ".".concat(DATA_KEY$3);
  var CLASS_PREFIX = 'bs-popover';

  var Default$2 = _objectSpread(_objectSpread({}, Tooltip.Default), {}, {
    placement: 'right',
    offset: [0, 8],
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
  });

  var DefaultType$2 = _objectSpread(_objectSpread({}, Tooltip.DefaultType), {}, {
    content: '(string|element|function)'
  });

  var Event$1 = {
    HIDE: "hide".concat(EVENT_KEY$3),
    HIDDEN: "hidden".concat(EVENT_KEY$3),
    SHOW: "show".concat(EVENT_KEY$3),
    SHOWN: "shown".concat(EVENT_KEY$3),
    INSERTED: "inserted".concat(EVENT_KEY$3),
    CLICK: "click".concat(EVENT_KEY$3),
    FOCUSIN: "focusin".concat(EVENT_KEY$3),
    FOCUSOUT: "focusout".concat(EVENT_KEY$3),
    MOUSEENTER: "mouseenter".concat(EVENT_KEY$3),
    MOUSELEAVE: "mouseleave".concat(EVENT_KEY$3)
  };
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inherits(Popover, _Tooltip);

    var _super9 = _createSuper(Popover);

    function Popover() {
      _classCallCheck(this, Popover);

      return _super9.apply(this, arguments);
    }

    _createClass(Popover, [{
      key: "isWithContent",
      value: // Overrides
      function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent(tip) {
        this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TITLE);

        this._sanitizeAndSetContent(tip, this._getContent(), SELECTOR_CONTENT);
      } // Private

    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return CLASS_PREFIX;
      } // Static

    }], [{
      key: "Default",
      get: // Getters
      function get() {
        return Default$2;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$3;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Popover.getOrCreateInstance(this, config);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Popover to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Popover);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'scrollspy';
  var DATA_KEY$2 = 'bs.scrollspy';
  var EVENT_KEY$2 = ".".concat(DATA_KEY$2);
  var DATA_API_KEY$1 = '.data-api';
  var Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate".concat(EVENT_KEY$2);
  var EVENT_SCROLL = "scroll".concat(EVENT_KEY$2);
  var EVENT_LOAD_DATA_API = "load".concat(EVENT_KEY$2).concat(DATA_API_KEY$1);
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_LINK_ITEMS = "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS, ", .").concat(CLASS_NAME_DROPDOWN_ITEM);
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function (_BaseComponent9) {
    _inherits(ScrollSpy, _BaseComponent9);

    var _super10 = _createSuper(ScrollSpy);

    function ScrollSpy(element, config) {
      var _this40;

      _classCallCheck(this, ScrollSpy);

      _this40 = _super10.call(this, element);
      _this40._scrollElement = _this40._element.tagName === 'BODY' ? window : _this40._element;
      _this40._config = _this40._getConfig(config);
      _this40._offsets = [];
      _this40._targets = [];
      _this40._activeTarget = null;
      _this40._scrollHeight = 0;
      EventHandler.on(_this40._scrollElement, EVENT_SCROLL, function () {
        return _this40._process();
      });

      _this40.refresh();

      _this40._process();

      return _this40;
    } // Getters


    _createClass(ScrollSpy, [{
      key: "refresh",
      value: // Public
      function refresh() {
        var _this41 = this;

        var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
        var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
        var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        var targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
        targets.map(function (element) {
          var targetSelector = getSelectorFromElement(element);
          var target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

          if (target) {
            var targetBCR = target.getBoundingClientRect();

            if (targetBCR.width || targetBCR.height) {
              return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
            }
          }

          return null;
        }).filter(function (item) {
          return item;
        }).sort(function (a, b) {
          return a[0] - b[0];
        }).forEach(function (item) {
          _this41._offsets.push(item[0]);

          _this41._targets.push(item[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        EventHandler.off(this._scrollElement, EVENT_KEY$2);

        _get(_getPrototypeOf(ScrollSpy.prototype), "dispose", this).call(this);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default$1), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' && config ? config : {});
        config.target = getElement(config.target) || document.documentElement;
        typeCheckConfig(NAME$2, config, DefaultType$1);
        return config;
      }
    }, {
      key: "_getScrollTop",
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
    }, {
      key: "_getScrollHeight",
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: "_getOffsetHeight",
      value: function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
    }, {
      key: "_process",
      value: function _process() {
        var scrollTop = this._getScrollTop() + this._config.offset;

        var scrollHeight = this._getScrollHeight();

        var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

        if (this._scrollHeight !== scrollHeight) {
          this.refresh();
        }

        if (scrollTop >= maxScroll) {
          var target = this._targets[this._targets.length - 1];

          if (this._activeTarget !== target) {
            this._activate(target);
          }

          return;
        }

        if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
          this._activeTarget = null;

          this._clear();

          return;
        }

        for (var i = this._offsets.length; i--;) {
          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

          if (isActiveTarget) {
            this._activate(this._targets[i]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(target) {
        this._activeTarget = target;

        this._clear();

        var queries = SELECTOR_LINK_ITEMS.split(',').map(function (selector) {
          return "".concat(selector, "[data-bs-target=\"").concat(target, "\"],").concat(selector, "[href=\"").concat(target, "\"]");
        });
        var link = SelectorEngine.findOne(queries.join(','), this._config.target);
        link.classList.add(CLASS_NAME_ACTIVE$1);

        if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
          SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
        } else {
          SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(function (listGroup) {
            // Set triggered links parents as active
            // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
            SelectorEngine.prev(listGroup, "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS)).forEach(function (item) {
              return item.classList.add(CLASS_NAME_ACTIVE$1);
            }); // Handle special case when .nav-link is inside .nav-item

            SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(function (navItem) {
              SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(function (item) {
                return item.classList.add(CLASS_NAME_ACTIVE$1);
              });
            });
          });
        }

        EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
          relatedTarget: target
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(function (node) {
          return node.classList.contains(CLASS_NAME_ACTIVE$1);
        }).forEach(function (node) {
          return node.classList.remove(CLASS_NAME_ACTIVE$1);
        });
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$2;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = ScrollSpy.getOrCreateInstance(this, config);

          if (typeof config !== 'string') {
            return;
          }

          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        });
      }
    }]);

    return ScrollSpy;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
    SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (spy) {
      return new ScrollSpy(spy);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .ScrollSpy to jQuery only if jQuery is present
   */

  defineJQueryPlugin(ScrollSpy);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'tab';
  var DATA_KEY$1 = 'bs.tab';
  var EVENT_KEY$1 = ".".concat(DATA_KEY$1);
  var DATA_API_KEY = '.data-api';
  var EVENT_HIDE$1 = "hide".concat(EVENT_KEY$1);
  var EVENT_HIDDEN$1 = "hidden".concat(EVENT_KEY$1);
  var EVENT_SHOW$1 = "show".concat(EVENT_KEY$1);
  var EVENT_SHOWN$1 = "shown".concat(EVENT_KEY$1);
  var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY$1).concat(DATA_API_KEY);
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$1 = 'show';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_ACTIVE_UL = ':scope > li > .active';
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function (_BaseComponent10) {
    _inherits(Tab, _BaseComponent10);

    var _super11 = _createSuper(Tab);

    function Tab() {
      _classCallCheck(this, Tab);

      return _super11.apply(this, arguments);
    }

    _createClass(Tab, [{
      key: "show",
      value: // Public
      function show() {
        var _this42 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
          return;
        }

        var previous;
        var target = getElementFromSelector(this._element);

        var listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

        if (listElement) {
          var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
          previous = SelectorEngine.find(itemSelector, listElement);
          previous = previous[previous.length - 1];
        }

        var hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
          relatedTarget: this._element
        }) : null;
        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
          relatedTarget: previous
        });

        if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
          return;
        }

        this._activate(this._element, listElement);

        var complete = function complete() {
          EventHandler.trigger(previous, EVENT_HIDDEN$1, {
            relatedTarget: _this42._element
          });
          EventHandler.trigger(_this42._element, EVENT_SHOWN$1, {
            relatedTarget: previous
          });
        };

        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      } // Private

    }, {
      key: "_activate",
      value: function _activate(element, container, callback) {
        var _this43 = this;

        var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
        var active = activeElements[0];
        var isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

        var complete = function complete() {
          return _this43._transitionComplete(element, active, callback);
        };

        if (active && isTransitioning) {
          active.classList.remove(CLASS_NAME_SHOW$1);

          this._queueCallback(complete, element, true);
        } else {
          complete();
        }
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(element, active, callback) {
        if (active) {
          active.classList.remove(CLASS_NAME_ACTIVE);
          var dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

          if (dropdownChild) {
            dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
          }

          if (active.getAttribute('role') === 'tab') {
            active.setAttribute('aria-selected', false);
          }
        }

        element.classList.add(CLASS_NAME_ACTIVE);

        if (element.getAttribute('role') === 'tab') {
          element.setAttribute('aria-selected', true);
        }

        reflow(element);

        if (element.classList.contains(CLASS_NAME_FADE$1)) {
          element.classList.add(CLASS_NAME_SHOW$1);
        }

        var parent = element.parentNode;

        if (parent && parent.nodeName === 'LI') {
          parent = parent.parentNode;
        }

        if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
          var dropdownElement = element.closest(SELECTOR_DROPDOWN);

          if (dropdownElement) {
            SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(function (dropdown) {
              return dropdown.classList.add(CLASS_NAME_ACTIVE);
            });
          }

          element.setAttribute('aria-expanded', true);
        }

        if (callback) {
          callback();
        }
      } // Static

    }], [{
      key: "NAME",
      get: // Getters
      function get() {
        return NAME$1;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Tab.getOrCreateInstance(this);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Tab;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    var data = Tab.getOrCreateInstance(this);
    data.show();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tab to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Tab);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'toast';
  var DATA_KEY = 'bs.toast';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var EVENT_MOUSEOVER = "mouseover".concat(EVENT_KEY);
  var EVENT_MOUSEOUT = "mouseout".concat(EVENT_KEY);
  var EVENT_FOCUSIN = "focusin".concat(EVENT_KEY);
  var EVENT_FOCUSOUT = "focusout".concat(EVENT_KEY);
  var EVENT_HIDE = "hide".concat(EVENT_KEY);
  var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
  var EVENT_SHOW = "show".concat(EVENT_KEY);
  var EVENT_SHOWN = "shown".concat(EVENT_KEY);
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function (_BaseComponent11) {
    _inherits(Toast, _BaseComponent11);

    var _super12 = _createSuper(Toast);

    function Toast(element, config) {
      var _this44;

      _classCallCheck(this, Toast);

      _this44 = _super12.call(this, element);
      _this44._config = _this44._getConfig(config);
      _this44._timeout = null;
      _this44._hasMouseInteraction = false;
      _this44._hasKeyboardInteraction = false;

      _this44._setListeners();

      return _this44;
    } // Getters


    _createClass(Toast, [{
      key: "show",
      value: // Public
      function show() {
        var _this45 = this;

        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

        if (showEvent.defaultPrevented) {
          return;
        }

        this._clearTimeout();

        if (this._config.animation) {
          this._element.classList.add(CLASS_NAME_FADE);
        }

        var complete = function complete() {
          _this45._element.classList.remove(CLASS_NAME_SHOWING);

          EventHandler.trigger(_this45._element, EVENT_SHOWN);

          _this45._maybeScheduleHide();
        };

        this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


        reflow(this._element);

        this._element.classList.add(CLASS_NAME_SHOW);

        this._element.classList.add(CLASS_NAME_SHOWING);

        this._queueCallback(complete, this._element, this._config.animation);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this46 = this;

        if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
          return;
        }

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

        if (hideEvent.defaultPrevented) {
          return;
        }

        var complete = function complete() {
          _this46._element.classList.add(CLASS_NAME_HIDE); // @deprecated


          _this46._element.classList.remove(CLASS_NAME_SHOWING);

          _this46._element.classList.remove(CLASS_NAME_SHOW);

          EventHandler.trigger(_this46._element, EVENT_HIDDEN);
        };

        this._element.classList.add(CLASS_NAME_SHOWING);

        this._queueCallback(complete, this._element, this._config.animation);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout();

        if (this._element.classList.contains(CLASS_NAME_SHOW)) {
          this._element.classList.remove(CLASS_NAME_SHOW);
        }

        _get(_getPrototypeOf(Toast.prototype), "dispose", this).call(this);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' && config ? config : {});
        typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this47 = this;

        if (!this._config.autohide) {
          return;
        }

        if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
          return;
        }

        this._timeout = setTimeout(function () {
          _this47.hide();
        }, this._config.delay);
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(event, isInteracting) {
        switch (event.type) {
          case 'mouseover':
          case 'mouseout':
            this._hasMouseInteraction = isInteracting;
            break;

          case 'focusin':
          case 'focusout':
            this._hasKeyboardInteraction = isInteracting;
            break;
        }

        if (isInteracting) {
          this._clearTimeout();

          return;
        }

        var nextElement = event.relatedTarget;

        if (this._element === nextElement || this._element.contains(nextElement)) {
          return;
        }

        this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this48 = this;

        EventHandler.on(this._element, EVENT_MOUSEOVER, function (event) {
          return _this48._onInteraction(event, true);
        });
        EventHandler.on(this._element, EVENT_MOUSEOUT, function (event) {
          return _this48._onInteraction(event, false);
        });
        EventHandler.on(this._element, EVENT_FOCUSIN, function (event) {
          return _this48._onInteraction(event, true);
        });
        EventHandler.on(this._element, EVENT_FOCUSOUT, function (event) {
          return _this48._onInteraction(event, false);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
      } // Static

    }], [{
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Toast.getOrCreateInstance(this, config);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config](this);
          }
        });
      }
    }]);

    return Toast;
  }(BaseComponent);

  enableDismissTrigger(Toast);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Toast to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Toast);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var index_umd = {
    Alert: Alert,
    Button: Button,
    Carousel: Carousel,
    Collapse: Collapse,
    Dropdown: Dropdown,
    Modal: Modal,
    Offcanvas: Offcanvas,
    Popover: Popover,
    ScrollSpy: ScrollSpy,
    Tab: Tab,
    Toast: Toast,
    Tooltip: Tooltip
  };
  return index_umd;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (e, t) {
  "use strict";

  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      y = function e(t) {
    return null != t && t === t.window;
  },
      v = {
    type: !0,
    src: !0,
    noModule: !0
  };

  function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");
    if (o.text = e, n) for (i in v) {
      n[i] && (o[i] = n[i]);
    }
    t.head.appendChild(o).parentNode.removeChild(o);
  }

  function x(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? l[c.call(e)] || "object" : _typeof(e);
  }

  var b = "3.3.1",
      w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  w.fn = w.prototype = {
    jquery: "3.3.1",
    constructor: w,
    length: 0,
    toArray: function toArray() {
      return o.call(this);
    },
    get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return w.each(this, e);
    },
    map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, w.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e) {
      m(e);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (C(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
        (r = !t(e[o], o)) !== s && i.push(e[o]);
      }

      return i;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          s = [];
      if (C(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && s.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && s.push(i);
      }
      return a.apply([], s);
    },
    guid: 1,
    support: h
  }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });

  function C(e) {
    var t = !!e && "length" in e && e.length,
        n = x(e);
    return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  var E = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y,
        v,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        N = {}.hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function O(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = {
      ID: new RegExp("^#(" + R + ")"),
      CLASS: new RegExp("^\\.(" + R + ")"),
      TAG: new RegExp("^(" + R + "|[*])"),
      ATTR: new RegExp("^" + I),
      PSEUDO: new RegExp("^" + W),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + P + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var r = "0x" + t - 65536;
      return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function re() {
      p();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          f,
          h,
          v,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;
      if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;

      if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;
            if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
          if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }

        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;

            while (s--) {
              h[s] = "#" + c + " " + ve(h[s]);
            }

            v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
          }
          if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }

      return u(e.replace(B, "$1"), t, r, i);
    }

    function ae() {
      var e = [];

      function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }

      return t;
    }

    function se(e) {
      return e[b] = !0, e;
    }

    function ue(e) {
      var t = d.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function le(e, t) {
      var n = e.split("|"),
          i = n.length;

      while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }

    function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }

    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }

    function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }

    function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;

          while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }

    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }, p = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;
      return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = d.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
        if (i === o) return ce(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, d) : d;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = m.call(e, t);
        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}
      return oe(t, d, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);
      var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;

      if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }

        while (i--) {
          e.splice(r[i], 1);
        }
      }

      return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;

      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }

      return n;
    }, (r = oe.selectors = {
      cacheLength: 50,
      createPseudo: se,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = E[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);
            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                y = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !u && !s,
                x = !1;

            if (y) {
              if (o) {
                while (g) {
                  p = t;

                  while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  }

                  h = g = "only" === e && !h && "nextSibling";
                }

                return !0;
              }

              if (h = [a ? y.firstChild : y.lastChild], a && m) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];

                while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];
                    break;
                  }
                }
              } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
              }

              return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
          return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;

            while (a--) {
              e[r = O(e, o[a])] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        }
      },
      pseudos: {
        not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));
          return r[b] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;

            while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }),
        contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }),
        lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;

            do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function target(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function root(e) {
          return e === h;
        },
        focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: de(!1),
        disabled: de(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !r.pseudos.empty(e);
        },
        header: function header(e) {
          return Y.test(e.nodeName);
        },
        input: function input(e) {
          return G.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: he(function () {
          return [0];
        }),
        last: he(function (e, t) {
          return [t - 1];
        }),
        eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }

          return e;
        }),
        gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = r.pseudos.eq;

    for (t in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      r.pseudos[t] = fe(t);
    }

    for (t in {
      submit: !0,
      reset: !0
    }) {
      r.pseudos[t] = pe(t);
    }

    function ye() {}

    ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];
      if (c) return t ? 0 : c.slice(0);
      s = e, u = [], l = r.preFilter;

      while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(B, " ")
        }), s = s.slice(n.length));

        for (a in r.filter) {
          !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
            value: n,
            type: a,
            matches: i
          }), s = s.slice(n.length));
        }

        if (!n) break;
      }

      return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };

    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;
      return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || a) return e(t, n, i);
        }

        return !1;
      } : function (t, n, u) {
        var l,
            c,
            f,
            p = [T, s];

        if (u) {
          while (t = t[r]) {
            if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
            if (c[o] = p, p[2] = e(t, n, u)) return !0;
          }
        }

        return !1;
      };
    }

    function xe(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;

        while (i--) {
          if (!e[i](t, n, r)) return !1;
        }

        return !0;
      } : e[0];
    }

    function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) {
        oe(e, t[r], n);
      }

      return n;
    }

    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !o && t ? g : we(g, p, e, s, u),
            v = n ? i || (o ? e : h || r) ? [] : a : y;

        if (n && n(y, v, s, u), r) {
          l = we(v, d), r(l, [], s, u), c = l.length;

          while (c--) {
            (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
        }

        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;

              while (c--) {
                (f = v[c]) && l.push(y[c] = f);
              }

              i(null, v = [], l, u);
            }

            c = v.length;

            while (c--) {
              (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
            }
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }

    function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, s, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, s, !0), p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
        return t = null, i;
      }]; u < o; u++) {
        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) {
              if (r.relative[e[i].type]) break;
            }

            return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
              value: " " === e[u - 2].type ? "*" : ""
            })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
          }

          p.push(n);
        }
      }

      return xe(p);
    }

    function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, s, u, c) {
        var f,
            h,
            y,
            v = 0,
            m = "0",
            x = _o && [],
            b = [],
            w = l,
            C = _o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;

        for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === d || (p(f), s = !g);

            while (y = e[h++]) {
              if (y(f, a || d, s)) {
                u.push(f);
                break;
              }
            }

            c && (T = E);
          }

          n && ((f = !y && f) && v--, _o && x.push(f));
        }

        if (v += m, n && m !== v) {
          h = 0;

          while (y = t[h++]) {
            y(x, b, a, s);
          }

          if (_o) {
            if (v > 0) while (m--) {
              x[m] || b[m] || (b[m] = j.call(u));
            }
            b = we(b);
          }

          L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
        }

        return c && (T = E, l = w), x;
      };

      return n ? se(o) : o;
    }

    return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];

      if (!o) {
        t || (t = a(e)), n = t.length;

        while (n--) {
          (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        }

        (o = S(e, Ee(i, r))).selector = e;
      }

      return o;
    }, u = oe.select = function (e, t, n, i) {
      var o,
          u,
          l,
          c,
          f,
          p = "function" == typeof e && e,
          d = !i && a(e = p.selector || e);

      if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
          p && (t = t.parentNode), e = e.slice(u.shift().value.length);
        }

        o = V.needsContext.test(e) ? 0 : u.length;

        while (o--) {
          if (l = u[o], r.relative[c = l.type]) break;

          if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
            break;
          }
        }
      }

      return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(P, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);

  w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;

  var k = function k(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      D = w.expr.match.needsContext;

  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }

  w.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (w.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        w.find(e, i[t], n);
      }

      return r > 1 ? w.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
          g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }
        return this;
      }

      return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, q = w(r);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  w.fn.extend({
    has: function has(e) {
      var t = w(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);
      if (!D.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  w.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return k(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return k(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return k(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return k(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return k(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return k(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    }
  }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    };
  });
  var M = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    var t = {};
    return w.each(e.match(M) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }

  w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);

    var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function u() {
      for (i = i || e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();

        while (++s < o.length) {
          !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
        }
      }

      e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = {
      add: function add() {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
          });
        }(arguments), n && !t && u()), this;
      },
      remove: function remove() {
        return w.each(arguments, function (e, t) {
          var n;

          while ((n = w.inArray(t, o, n)) > -1) {
            o.splice(n, 1), n <= s && s--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      },
      empty: function empty() {
        return o && (o = []), this;
      },
      disable: function disable() {
        return i = a = [], o = n = "", this;
      },
      disabled: function disabled() {
        return !o;
      },
      lock: function lock() {
        return i = a = [], n || t || (o = n = ""), this;
      },
      locked: function locked() {
        return !!i;
      },
      fireWith: function fireWith(e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
      },
      fire: function fire() {
        return l.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!r;
      }
    };

    return l;
  };

  function I(e) {
    return e;
  }

  function W(e) {
    throw e;
  }

  function $(e, t, n, r) {
    var i;

    try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  w.extend({
    Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = {
        state: function state() {
          return r;
        },
        always: function always() {
          return o.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return i.then(null, e);
        },
        pipe: function pipe() {
          var e = arguments;
          return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];
              o[r[1]](function () {
                var e = i && i.apply(this, arguments);
                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        then: function then(t, r, i) {
          var o = 0;

          function a(t, n, r, i) {
            return function () {
              var s = this,
                  u = arguments,
                  l = function l() {
                var e, l;

                if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                  l = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                }
              };

              t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }

          return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? w.extend(e, i) : i;
        }
      },
          o = {};
      return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];
        i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    },
    when: function when(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function s(e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };

      if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();

      while (n--) {
        $(i[n], s(n), a.reject);
      }

      return a.promise();
    }
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };
  var F = w.Deferred();
  w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    }
  }), w.ready.then = F.then;

  function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }

  "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));

  var z = function z(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;

    if ("object" === x(n)) {
      i = !0;

      for (s in n) {
        z(e, t, s, n[s], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(w(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }

    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      X = /^-ms-/,
      U = /-([a-z])/g;

  function V(e, t) {
    return t.toUpperCase();
  }

  function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }

  var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Q() {
    this.expando = w.expando + Q.uid++;
  }

  Q.uid = 1, Q.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
        i[G(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !w.isEmptyObject(t);
    }
  };
  var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;

  function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }

  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = te(n);
      } catch (e) {}

      K.set(e, t, n);
    } else n = void 0;
    return n;
  }

  w.extend({
    hasData: function hasData(e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function data(e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      K.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      J.remove(e, t);
    }
  }), w.fn.extend({
    data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;

          while (n--) {
            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
          }

          J.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(e) ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;

        if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;
          if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    }
  }), w.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function a() {
        w.dequeue(e, t);
      };

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return J.get(e, n) || J.access(e, n, {
        empty: w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        })
      });
    }
  }), w.fn.extend({
    queue: function queue(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);
        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      se = function se(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    i = n.apply(e, r || []);

    for (o in t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function ue(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, w.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var le = {};

  function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];
    return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }

  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
      (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
    }

    for (o = 0; o < a; o++) {
      null != i[o] && (e[o].style.display = i[o]);
    }

    return e;
  }

  w.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

  function ye(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }

  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
  }

  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  !function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();
  var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;

  function Ee() {
    return !0;
  }

  function ke() {
    return !1;
  }

  function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }

  function De(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      "string" != typeof n && (r = r || n, n = void 0);

      for (s in t) {
        De(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }

  w.event = {
    global: {},
    add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.get(e);

      if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(M) || [""]).length;

        while (l--) {
          d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && w.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.hasData(e) && J.get(e);

      if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;

        while (l--) {
          if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
          } else for (d in u) {
            w.event.remove(e, d + t[l], n, r, !0);
          }
        }

        w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          s,
          u = new Array(arguments.length),
          l = (J.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};

      for (u[0] = t, n = 1; n < arguments.length; n++) {
        u[n] = arguments[n];
      }

      if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = w.event.handlers.call(this, t, l), n = 0;

        while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;

          while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
            t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        },
        set: function set(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === Se() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        },
        _default: function _default(e) {
          return N(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = {
    constructor: w.Event,
    isDefaultPrevented: ke,
    isPropagationStopped: ke,
    isImmediatePropagationStopped: ke,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, w.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, w.event.addProp), w.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    w.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
        return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), w.fn.extend({
    on: function on(e, t, n, r) {
      return De(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return De(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }

  function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};

        for (i in l) {
          for (n = 0, r = l[i].length; n < r; n++) {
            w.event.add(t, i, l[i][n]);
          }
        }
      }

      K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
    }
  }

  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }

  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i,
        o,
        s,
        u,
        l,
        c,
        f = 0,
        p = e.length,
        d = p - 1,
        y = t[0],
        v = g(y);
    if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = e.eq(i);
      v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
    });

    if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
        l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
      }

      if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
        l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
      }
    }

    return e;
  }

  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  w.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = w.contains(e.ownerDocument, e);
      if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
        Me(o[r], a[r]);
      }
      if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
        Pe(o[r], a[r]);
      } else Pe(e, s);
      return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (Y(n)) {
          if (t = n[J.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            }
            n[J.expando] = void 0;
          }

          n[K.expando] && (n[K.expando] = void 0);
        }
      }
    }
  }), w.fn.extend({
    detach: function detach(e) {
      return Ie(this, e, !0);
    },
    remove: function remove(e) {
      return Ie(this, e);
    },
    text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    },
    html: function html(e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var e = [];
      return Re(this, arguments, function (t) {
        var n = this.parentNode;
        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), w.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
        n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
      }

      return this.pushStack(r);
    };
  });

  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function $e(t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = new RegExp(oe.join("|"), "i");

  !function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
      }
    }

    function n(e) {
      return Math.round(parseFloat(e));
    }

    var i,
        o,
        a,
        s,
        u,
        l = r.createElement("div"),
        c = r.createElement("div");
    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
      boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      },
      pixelPosition: function pixelPosition() {
        return t(), i;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return t(), u;
      },
      scrollboxSize: function scrollboxSize() {
        return t(), a;
      }
    }));
  }();

  function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function _e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ve = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;

  function Qe(e) {
    if (e in Ye) return e;
    var t = e[0].toUpperCase() + e.slice(1),
        n = Ge.length;

    while (n--) {
      if ((e = Ge[n] + t) in Ye) return e;
    }
  }

  function Je(e) {
    var t = w.cssProps[e];
    return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }

  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
    }

    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
  }

  function et(e, t, n) {
    var r = $e(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;

    if (We.test(i)) {
      if (!n) return i;
      i = "auto";
    }

    return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }

  w.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = G(t),
            u = Xe.test(t),
            l = e.style;
        if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = G(t);
      return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = {
      get: function get(e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      },
      set: function set(e, n, r) {
        var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);
        return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
      }
    };
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    w.cssHooks[e + t] = {
      expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
        }

        return i;
      }
    }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
  }), w.fn.extend({
    css: function css(e, t) {
      return z(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) {
            o[t[a]] = w.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    }
  });

  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }

  w.Tween = tt, tt.prototype = {
    constructor: tt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = tt.propHooks[this.prop];
      return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = tt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    }
  }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, w.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, w.fx = tt.prototype.init, w.fx.step = {};
  var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;

  function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }

  function st() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = Date.now();
  }

  function ut(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function ct(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = J.get(e, "fxshow");
    n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));

    for (r in t) {
      if (i = t[r], it.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !y || void 0 === y[r]) continue;
          g = !0;
        }

        d[r] = y && y[r] || w.style(e, r);
      }
    }

    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;

      for (r in d) {
        u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
          display: l
        }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
          g || fe([e]), J.remove(e, "fxshow");

          for (r in d) {
            w.style(e, r, d[r]);
          }
        })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }
  }

  function ft(e, t) {
    var n, r, i, o, a;

    for (n in e) {
      if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
        o = a.expand(o), delete e[r];

        for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }

  function pt(e, t, n) {
    var r,
        i,
        o = 0,
        a = pt.prefilters.length,
        s = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;

      for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
        l.tweens[o].run(r);
      }

      return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
    },
        l = s.promise({
      elem: e,
      props: w.extend({}, t),
      opts: w.extend(!0, {
        specialEasing: {},
        easing: w.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: nt || st(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n) {
        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r), r;
      },
      stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;
        if (i) return this;

        for (i = !0; n < r; n++) {
          l.tweens[n].run(1);
        }

        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      }
    }),
        c = l.props;

    for (ft(c, l.opts.specialEasing); o < a; o++) {
      if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    }

    return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  w.Animation = w.extend(pt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return ue(n.elem, e, ie.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(M);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
      }
    },
    prefilters: [ct],
    prefilter: function prefilter(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    }
  }), w.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? w.extend({}, e) : {
      complete: n || !n && t || g(e) && e,
      duration: e,
      easing: n && t || t && !g(t) && t
    };
    return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function a() {
        var t = pt(this, w.extend({}, e), o);
        (i || J.get(this, "finish")) && t.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };

      return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);
        if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
          a[i] && a[i].stop && ot.test(i) && r(a[i]);
        }

        for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }

        !t && n || w.dequeue(this, e);
      });
    },
    finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;

        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }

        for (t = 0; t < a; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }

        delete n.finish;
      });
    }
  }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];

    w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({
    slideDown: ut("show"),
    slideUp: ut("hide"),
    slideToggle: ut("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;

    for (nt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);

      r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
    e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();
  var dt,
      ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    }
  }), w.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(M);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), dt = {
    set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;

    ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();
      return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });
  var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;
  w.fn.extend({
    prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    }
  }), w.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = w.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), h.optSelected || (w.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });

  function vt(e) {
    return (e.match(M) || []).join(" ");
  }

  function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }

  w.fn.extend({
    addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });
      if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = t[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = t[a++]) {
            while (r.indexOf(" " + o + " ") > -1) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = _typeof(e),
          r = "string" === n || Array.isArray(e);

      return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;

        if (r) {
          i = 0, o = w(this), a = xt(e);

          while (t = a[i++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
      }

      return !1;
    }
  });
  var bt = /\r/g;
  w.fn.extend({
    val: function val(e) {
      var t,
          n,
          r,
          i = this[0];
      {
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;
          1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });
        if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
      }
    }
  }), w.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = w.find.attr(e, "value");
          return null != t ? t : vt(w.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      }
    }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;

  var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function Tt(e) {
    e.stopPropagation();
  };

  w.extend(w.event, {
    trigger: function trigger(t, n, i, o) {
      var a,
          s,
          u,
          l,
          c,
          p,
          d,
          h,
          v = [i || r],
          m = f.call(t, "type") ? t.type : t,
          x = f.call(t, "namespace") ? t.namespace.split(".") : [];

      if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == _typeof(t) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), u = s;
          }

          u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }

        a = 0;

        while ((s = v[a++]) && !t.isPropagationStopped()) {
          h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
        }

        return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = w.extend(new w.Event(), n, {
        type: e,
        isSimulated: !0
      });
      w.event.trigger(r, null, t);
    }
  }), w.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return w.event.trigger(e, t, n, !0);
    }
  }), h.focusin || w.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };

    w.event.special[t] = {
      setup: function setup() {
        var r = this.ownerDocument || this,
            i = J.access(r, t);
        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      },
      teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;
        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      }
    };
  });
  var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;

  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;

    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }

    return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };

  var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;

  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == _typeof(i) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
      jt(e + "[" + i + "]", t[i], n, r);
    }
  }

  w.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = g(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      jt(n, e[n], t, i);
    }
    return r.join("&");
  }, w.fn.extend({
    serialize: function serialize() {
      return w.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");
        return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = w(this).val();
        return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Dt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Dt, "\r\n")
        };
      }).get();
    }
  });
  var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");
  Bt.href = Ct.href;

  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];
      if (g(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }

  function _t(e, t, n, r) {
    var i = {},
        o = e === Wt;

    function a(s) {
      var u;
      return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);
        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }

    return a(t.dataTypes[0]) || !i["*"] && a("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && w.extend(!0, e, r), e;
  }

  function Xt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;

    while ("*" === u[0]) {
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }

    if (r) for (i in s) {
      if (s[i] && s[i].test(r)) {
        u.unshift(i);
        break;
      }
    }
    if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }

        a || (a = i);
      }

      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }

  function Ut(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) {
      l[a.toLowerCase()] = e.converters[a];
    }
    o = c.shift();

    while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
            break;
          }
        }
        if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (e) {
          return {
            state: "parsererror",
            error: a ? e : "No conversion from " + u + " to " + o
          };
        }
      }
    }

    return {
      state: "success",
      data: t
    };
  }

  w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Pt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": w.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(It),
    ajaxTransport: Ft(Wt),
    ajax: function ajax(t, n) {
      "object" == _typeof(t) && (n = t, t = void 0), n = n || {};
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (c) {
            if (!s) {
              s = {};

              while (t = Ot.exec(a)) {
                s[t[1].toLowerCase()] = t[2];
              }
            }

            t = s[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == c && (h.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (c) E.always(e[E.status]);else for (t in e) {
            x[t] = [x[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || C;
          return i && i.abort(t), k(0, t), this;
        }
      };

      if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
        l = r.createElement("a");

        try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }

      if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
      (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);

      for (p in h.headers) {
        E.setRequestHeader(p, h.headers[p]);
      }

      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();

      if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
        h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout));

        try {
          c = !1, i.send(b, k);
        } catch (e) {
          if (c) throw e;
          k(-1, e);
        }
      } else k(-1, "No Transport");

      function k(t, n, r, s) {
        var l,
            p,
            d,
            b,
            T,
            C = n;
        c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }

      return E;
    },
    getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    }
  }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    });
  }, w.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = g(e);
      return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    }
  }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };
  var Vt = {
    0: 200,
    1223: 204
  },
      Gt = w.ajaxSettings.xhr();
  h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
    var _n, r;

    if (h.cors || Gt && !t.crossDomain) return {
      send: function send(i, o) {
        var a,
            s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
          s[a] = t.xhrFields[a];
        }
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");

        for (a in i) {
          s.setRequestHeader(a, i[a]);
        }

        _n = function n(e) {
          return function () {
            _n && (_n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n(), r = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            _n && r();
          });
        }, _n = _n("abort");

        try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      },
      abort: function abort() {
        _n && _n();
      }
    };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return w.globalEval(e), e;
      }
    }
  }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n2;

      return {
        send: function send(i, o) {
          t = w("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n2 = function n(e) {
            t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n2 && _n2();
        }
      };
    }
  });
  var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || w.expando + "_" + Et++;
      return this[e] = !0, e;
    }
  }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = function () {
    var e = r.implementation.createHTMLDocument("").body;
    return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];
    "boolean" == typeof t && (n = t, t = !1);
    var i, o, a;
    return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), a.length > 0 && w.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};
      "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    }
  }, w.fn.extend({
    offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });
      var t,
          n,
          r = this[0];
      if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: t.top + n.pageYOffset,
        left: t.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      };
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - w.css(r, "marginTop", !0),
          left: t.left - i.left - w.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === w.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || be;
      });
    }
  }), w.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = "pageYOffset" === t;

    w.fn[e] = function (r) {
      return z(this, function (e, r, i) {
        var o;
        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    w.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");
        return z(this, function (t, n, i) {
          var o;
          return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), w.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), w.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });
  var Jt = e.jQuery,
      Kt = e.$;
  return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, a) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : e.moment = a();
}(void 0, function () {
  "use strict";

  var e, n;

  function l() {
    return e.apply(null, arguments);
  }

  function _(e) {
    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
  }

  function i(e) {
    return null != e && "[object Object]" === Object.prototype.toString.call(e);
  }

  function o(e) {
    return void 0 === e;
  }

  function m(e) {
    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
  }

  function u(e) {
    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
  }

  function M(e, a) {
    var t,
        s = [];

    for (t = 0; t < e.length; ++t) {
      s.push(a(e[t], t));
    }

    return s;
  }

  function h(e, a) {
    return Object.prototype.hasOwnProperty.call(e, a);
  }

  function L(e, a) {
    for (var t in a) {
      h(a, t) && (e[t] = a[t]);
    }

    return h(a, "toString") && (e.toString = a.toString), h(a, "valueOf") && (e.valueOf = a.valueOf), e;
  }

  function c(e, a, t, s) {
    return va(e, a, t, s, !0).utc();
  }

  function Y(e) {
    return null == e._pf && (e._pf = {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1
    }), e._pf;
  }

  function y(e) {
    if (null == e._isValid) {
      var a = Y(e),
          t = n.call(a.parsedDateParts, function (e) {
        return null != e;
      }),
          s = !isNaN(e._d.getTime()) && a.overflow < 0 && !a.empty && !a.invalidMonth && !a.invalidWeekday && !a.weekdayMismatch && !a.nullInput && !a.invalidFormat && !a.userInvalidated && (!a.meridiem || a.meridiem && t);
      if (e._strict && (s = s && 0 === a.charsLeftOver && 0 === a.unusedTokens.length && void 0 === a.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;
      e._isValid = s;
    }

    return e._isValid;
  }

  function f(e) {
    var a = c(NaN);
    return null != e ? L(Y(a), e) : Y(a).userInvalidated = !0, a;
  }

  n = Array.prototype.some ? Array.prototype.some : function (e) {
    for (var a = Object(this), t = a.length >>> 0, s = 0; s < t; s++) {
      if (s in a && e.call(this, a[s], s, a)) return !0;
    }

    return !1;
  };
  var d = l.momentProperties = [];

  function k(e, a) {
    var t, s, n;
    if (o(a._isAMomentObject) || (e._isAMomentObject = a._isAMomentObject), o(a._i) || (e._i = a._i), o(a._f) || (e._f = a._f), o(a._l) || (e._l = a._l), o(a._strict) || (e._strict = a._strict), o(a._tzm) || (e._tzm = a._tzm), o(a._isUTC) || (e._isUTC = a._isUTC), o(a._offset) || (e._offset = a._offset), o(a._pf) || (e._pf = Y(a)), o(a._locale) || (e._locale = a._locale), 0 < d.length) for (t = 0; t < d.length; t++) {
      o(n = a[s = d[t]]) || (e[s] = n);
    }
    return e;
  }

  var a = !1;

  function p(e) {
    k(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === a && (a = !0, l.updateOffset(this), a = !1);
  }

  function D(e) {
    return e instanceof p || null != e && null != e._isAMomentObject;
  }

  function T(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }

  function g(e) {
    var a = +e,
        t = 0;
    return 0 !== a && isFinite(a) && (t = T(a)), t;
  }

  function r(e, a, t) {
    var s,
        n = Math.min(e.length, a.length),
        d = Math.abs(e.length - a.length),
        r = 0;

    for (s = 0; s < n; s++) {
      (t && e[s] !== a[s] || !t && g(e[s]) !== g(a[s])) && r++;
    }

    return r + d;
  }

  function w(e) {
    !1 === l.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e);
  }

  function t(n, d) {
    var r = !0;
    return L(function () {
      if (null != l.deprecationHandler && l.deprecationHandler(null, n), r) {
        for (var e, a = [], t = 0; t < arguments.length; t++) {
          if (e = "", "object" == _typeof(arguments[t])) {
            for (var s in e += "\n[" + t + "] ", arguments[0]) {
              e += s + ": " + arguments[0][s] + ", ";
            }

            e = e.slice(0, -2);
          } else e = arguments[t];

          a.push(e);
        }

        w(n + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + new Error().stack), r = !1;
      }

      return d.apply(this, arguments);
    }, d);
  }

  var s,
      v = {};

  function S(e, a) {
    null != l.deprecationHandler && l.deprecationHandler(e, a), v[e] || (w(a), v[e] = !0);
  }

  function H(e) {
    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
  }

  function b(e, a) {
    var t,
        s = L({}, e);

    for (t in a) {
      h(a, t) && (i(e[t]) && i(a[t]) ? (s[t] = {}, L(s[t], e[t]), L(s[t], a[t])) : null != a[t] ? s[t] = a[t] : delete s[t]);
    }

    for (t in e) {
      h(e, t) && !h(a, t) && i(e[t]) && (s[t] = L({}, s[t]));
    }

    return s;
  }

  function j(e) {
    null != e && this.set(e);
  }

  l.suppressDeprecationWarnings = !1, l.deprecationHandler = null, s = Object.keys ? Object.keys : function (e) {
    var a,
        t = [];

    for (a in e) {
      h(e, a) && t.push(a);
    }

    return t;
  };
  var x = {};

  function P(e, a) {
    var t = e.toLowerCase();
    x[t] = x[t + "s"] = x[a] = e;
  }

  function O(e) {
    return "string" == typeof e ? x[e] || x[e.toLowerCase()] : void 0;
  }

  function W(e) {
    var a,
        t,
        s = {};

    for (t in e) {
      h(e, t) && (a = O(t)) && (s[a] = e[t]);
    }

    return s;
  }

  var E = {};

  function A(e, a) {
    E[e] = a;
  }

  function F(e, a, t) {
    var s = "" + Math.abs(e),
        n = a - s.length;
    return (0 <= e ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + s;
  }

  var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      J = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      N = {},
      R = {};

  function I(e, a, t, s) {
    var n = s;
    "string" == typeof s && (n = function n() {
      return this[s]();
    }), e && (R[e] = n), a && (R[a[0]] = function () {
      return F(n.apply(this, arguments), a[1], a[2]);
    }), t && (R[t] = function () {
      return this.localeData().ordinal(n.apply(this, arguments), e);
    });
  }

  function C(e, a) {
    return e.isValid() ? (a = G(a, e.localeData()), N[a] = N[a] || function (s) {
      var e,
          n,
          a,
          d = s.match(z);

      for (e = 0, n = d.length; e < n; e++) {
        R[d[e]] ? d[e] = R[d[e]] : d[e] = (a = d[e]).match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
      }

      return function (e) {
        var a,
            t = "";

        for (a = 0; a < n; a++) {
          t += H(d[a]) ? d[a].call(e, s) : d[a];
        }

        return t;
      };
    }(a), N[a](e)) : e.localeData().invalidDate();
  }

  function G(e, a) {
    var t = 5;

    function s(e) {
      return a.longDateFormat(e) || e;
    }

    for (J.lastIndex = 0; 0 <= t && J.test(e);) {
      e = e.replace(J, s), J.lastIndex = 0, t -= 1;
    }

    return e;
  }

  var U = /\d/,
      V = /\d\d/,
      K = /\d{3}/,
      $ = /\d{4}/,
      Z = /[+-]?\d{6}/,
      B = /\d\d?/,
      q = /\d\d\d\d?/,
      Q = /\d\d\d\d\d\d?/,
      X = /\d{1,3}/,
      ee = /\d{1,4}/,
      ae = /[+-]?\d{1,6}/,
      te = /\d+/,
      se = /[+-]?\d+/,
      ne = /Z|[+-]\d\d:?\d\d/gi,
      de = /Z|[+-]\d\d(?::?\d\d)?/gi,
      re = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      _e = {};

  function ie(e, t, s) {
    _e[e] = H(t) ? t : function (e, a) {
      return e && s ? s : t;
    };
  }

  function oe(e, a) {
    return h(_e, e) ? _e[e](a._strict, a._locale) : new RegExp(me(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, a, t, s, n) {
      return a || t || s || n;
    })));
  }

  function me(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }

  var ue = {};

  function le(e, t) {
    var a,
        s = t;

    for ("string" == typeof e && (e = [e]), m(t) && (s = function s(e, a) {
      a[t] = g(e);
    }), a = 0; a < e.length; a++) {
      ue[e[a]] = s;
    }
  }

  function Me(e, n) {
    le(e, function (e, a, t, s) {
      t._w = t._w || {}, n(e, t._w, t, s);
    });
  }

  var he = 0,
      Le = 1,
      ce = 2,
      Ye = 3,
      ye = 4,
      fe = 5,
      ke = 6,
      pe = 7,
      De = 8;

  function Te(e) {
    return ge(e) ? 366 : 365;
  }

  function ge(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  }

  I("Y", 0, 0, function () {
    var e = this.year();
    return e <= 9999 ? "" + e : "+" + e;
  }), I(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  }), I(0, ["YYYY", 4], 0, "year"), I(0, ["YYYYY", 5], 0, "year"), I(0, ["YYYYYY", 6, !0], 0, "year"), P("year", "y"), A("year", 1), ie("Y", se), ie("YY", B, V), ie("YYYY", ee, $), ie("YYYYY", ae, Z), ie("YYYYYY", ae, Z), le(["YYYYY", "YYYYYY"], he), le("YYYY", function (e, a) {
    a[he] = 2 === e.length ? l.parseTwoDigitYear(e) : g(e);
  }), le("YY", function (e, a) {
    a[he] = l.parseTwoDigitYear(e);
  }), le("Y", function (e, a) {
    a[he] = parseInt(e, 10);
  }), l.parseTwoDigitYear = function (e) {
    return g(e) + (68 < g(e) ? 1900 : 2e3);
  };
  var we,
      ve = Se("FullYear", !0);

  function Se(a, t) {
    return function (e) {
      return null != e ? (be(this, a, e), l.updateOffset(this, t), this) : He(this, a);
    };
  }

  function He(e, a) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + a]() : NaN;
  }

  function be(e, a, t) {
    e.isValid() && !isNaN(t) && ("FullYear" === a && ge(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + a](t, e.month(), je(t, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + a](t));
  }

  function je(e, a) {
    if (isNaN(e) || isNaN(a)) return NaN;
    var t,
        s = (a % (t = 12) + t) % t;
    return e += (a - s) / 12, 1 === s ? ge(e) ? 29 : 28 : 31 - s % 7 % 2;
  }

  we = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
    var a;

    for (a = 0; a < this.length; ++a) {
      if (this[a] === e) return a;
    }

    return -1;
  }, I("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }), I("MMM", 0, 0, function (e) {
    return this.localeData().monthsShort(this, e);
  }), I("MMMM", 0, 0, function (e) {
    return this.localeData().months(this, e);
  }), P("month", "M"), A("month", 8), ie("M", B), ie("MM", B, V), ie("MMM", function (e, a) {
    return a.monthsShortRegex(e);
  }), ie("MMMM", function (e, a) {
    return a.monthsRegex(e);
  }), le(["M", "MM"], function (e, a) {
    a[Le] = g(e) - 1;
  }), le(["MMM", "MMMM"], function (e, a, t, s) {
    var n = t._locale.monthsParse(e, s, t._strict);

    null != n ? a[Le] = n : Y(t).invalidMonth = e;
  });
  var xe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      Pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
  var Oe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

  function We(e, a) {
    var t;
    if (!e.isValid()) return e;
    if ("string" == typeof a) if (/^\d+$/.test(a)) a = g(a);else if (!m(a = e.localeData().monthsParse(a))) return e;
    return t = Math.min(e.date(), je(e.year(), a)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](a, t), e;
  }

  function Ee(e) {
    return null != e ? (We(this, e), l.updateOffset(this, !0), this) : He(this, "Month");
  }

  var Ae = re;
  var Fe = re;

  function ze() {
    function e(e, a) {
      return a.length - e.length;
    }

    var a,
        t,
        s = [],
        n = [],
        d = [];

    for (a = 0; a < 12; a++) {
      t = c([2e3, a]), s.push(this.monthsShort(t, "")), n.push(this.months(t, "")), d.push(this.months(t, "")), d.push(this.monthsShort(t, ""));
    }

    for (s.sort(e), n.sort(e), d.sort(e), a = 0; a < 12; a++) {
      s[a] = me(s[a]), n[a] = me(n[a]);
    }

    for (a = 0; a < 24; a++) {
      d[a] = me(d[a]);
    }

    this._monthsRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
  }

  function Je(e) {
    var a = new Date(Date.UTC.apply(null, arguments));
    return e < 100 && 0 <= e && isFinite(a.getUTCFullYear()) && a.setUTCFullYear(e), a;
  }

  function Ne(e, a, t) {
    var s = 7 + a - t;
    return -((7 + Je(e, 0, s).getUTCDay() - a) % 7) + s - 1;
  }

  function Re(e, a, t, s, n) {
    var d,
        r,
        _ = 1 + 7 * (a - 1) + (7 + t - s) % 7 + Ne(e, s, n);

    return _ <= 0 ? r = Te(d = e - 1) + _ : _ > Te(e) ? (d = e + 1, r = _ - Te(e)) : (d = e, r = _), {
      year: d,
      dayOfYear: r
    };
  }

  function Ie(e, a, t) {
    var s,
        n,
        d = Ne(e.year(), a, t),
        r = Math.floor((e.dayOfYear() - d - 1) / 7) + 1;
    return r < 1 ? s = r + Ce(n = e.year() - 1, a, t) : r > Ce(e.year(), a, t) ? (s = r - Ce(e.year(), a, t), n = e.year() + 1) : (n = e.year(), s = r), {
      week: s,
      year: n
    };
  }

  function Ce(e, a, t) {
    var s = Ne(e, a, t),
        n = Ne(e + 1, a, t);
    return (Te(e) - s + n) / 7;
  }

  I("w", ["ww", 2], "wo", "week"), I("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), A("week", 5), A("isoWeek", 5), ie("w", B), ie("ww", B, V), ie("W", B), ie("WW", B, V), Me(["w", "ww", "W", "WW"], function (e, a, t, s) {
    a[s.substr(0, 1)] = g(e);
  });
  I("d", 0, "do", "day"), I("dd", 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e);
  }), I("ddd", 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e);
  }), I("dddd", 0, 0, function (e) {
    return this.localeData().weekdays(this, e);
  }), I("e", 0, 0, "weekday"), I("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"), A("day", 11), A("weekday", 11), A("isoWeekday", 11), ie("d", B), ie("e", B), ie("E", B), ie("dd", function (e, a) {
    return a.weekdaysMinRegex(e);
  }), ie("ddd", function (e, a) {
    return a.weekdaysShortRegex(e);
  }), ie("dddd", function (e, a) {
    return a.weekdaysRegex(e);
  }), Me(["dd", "ddd", "dddd"], function (e, a, t, s) {
    var n = t._locale.weekdaysParse(e, s, t._strict);

    null != n ? a.d = n : Y(t).invalidWeekday = e;
  }), Me(["d", "e", "E"], function (e, a, t, s) {
    a[s] = g(e);
  });
  var Ge = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
  var Ue = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
  var Ve = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  var Ke = re;
  var $e = re;
  var Ze = re;

  function Be() {
    function e(e, a) {
      return a.length - e.length;
    }

    var a,
        t,
        s,
        n,
        d,
        r = [],
        _ = [],
        i = [],
        o = [];

    for (a = 0; a < 7; a++) {
      t = c([2e3, 1]).day(a), s = this.weekdaysMin(t, ""), n = this.weekdaysShort(t, ""), d = this.weekdays(t, ""), r.push(s), _.push(n), i.push(d), o.push(s), o.push(n), o.push(d);
    }

    for (r.sort(e), _.sort(e), i.sort(e), o.sort(e), a = 0; a < 7; a++) {
      _[a] = me(_[a]), i[a] = me(i[a]), o[a] = me(o[a]);
    }

    this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
  }

  function qe() {
    return this.hours() % 12 || 12;
  }

  function Qe(e, a) {
    I(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), a);
    });
  }

  function Xe(e, a) {
    return a._meridiemParse;
  }

  I("H", ["HH", 2], 0, "hour"), I("h", ["hh", 2], 0, qe), I("k", ["kk", 2], 0, function () {
    return this.hours() || 24;
  }), I("hmm", 0, 0, function () {
    return "" + qe.apply(this) + F(this.minutes(), 2);
  }), I("hmmss", 0, 0, function () {
    return "" + qe.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2);
  }), I("Hmm", 0, 0, function () {
    return "" + this.hours() + F(this.minutes(), 2);
  }), I("Hmmss", 0, 0, function () {
    return "" + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2);
  }), Qe("a", !0), Qe("A", !1), P("hour", "h"), A("hour", 13), ie("a", Xe), ie("A", Xe), ie("H", B), ie("h", B), ie("k", B), ie("HH", B, V), ie("hh", B, V), ie("kk", B, V), ie("hmm", q), ie("hmmss", Q), ie("Hmm", q), ie("Hmmss", Q), le(["H", "HH"], Ye), le(["k", "kk"], function (e, a, t) {
    var s = g(e);
    a[Ye] = 24 === s ? 0 : s;
  }), le(["a", "A"], function (e, a, t) {
    t._isPm = t._locale.isPM(e), t._meridiem = e;
  }), le(["h", "hh"], function (e, a, t) {
    a[Ye] = g(e), Y(t).bigHour = !0;
  }), le("hmm", function (e, a, t) {
    var s = e.length - 2;
    a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s)), Y(t).bigHour = !0;
  }), le("hmmss", function (e, a, t) {
    var s = e.length - 4,
        n = e.length - 2;
    a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s, 2)), a[fe] = g(e.substr(n)), Y(t).bigHour = !0;
  }), le("Hmm", function (e, a, t) {
    var s = e.length - 2;
    a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s));
  }), le("Hmmss", function (e, a, t) {
    var s = e.length - 4,
        n = e.length - 2;
    a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s, 2)), a[fe] = g(e.substr(n));
  });
  var ea,
      aa = Se("Hours", !0),
      ta = {
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    longDateFormat: {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    },
    invalidDate: "Invalid date",
    ordinal: "%d",
    dayOfMonthOrdinalParse: /\d{1,2}/,
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    months: Pe,
    monthsShort: Oe,
    week: {
      dow: 0,
      doy: 6
    },
    weekdays: Ge,
    weekdaysMin: Ve,
    weekdaysShort: Ue,
    meridiemParse: /[ap]\.?m?\.?/i
  },
      sa = {},
      na = {};

  function da(e) {
    return e ? e.toLowerCase().replace("_", "-") : e;
  }

  function ra(e) {
    var a = null;
    if (!sa[e] && "undefined" != typeof module && module && module.exports) try {
      a = ea._abbr, require("./locale/" + e), _a(a);
    } catch (e) {}
    return sa[e];
  }

  function _a(e, a) {
    var t;
    return e && ((t = o(a) ? oa(e) : ia(e, a)) ? ea = t : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), ea._abbr;
  }

  function ia(e, a) {
    if (null !== a) {
      var t,
          s = ta;
      if (a.abbr = e, null != sa[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = sa[e]._config;else if (null != a.parentLocale) if (null != sa[a.parentLocale]) s = sa[a.parentLocale]._config;else {
        if (null == (t = ra(a.parentLocale))) return na[a.parentLocale] || (na[a.parentLocale] = []), na[a.parentLocale].push({
          name: e,
          config: a
        }), null;
        s = t._config;
      }
      return sa[e] = new j(b(s, a)), na[e] && na[e].forEach(function (e) {
        ia(e.name, e.config);
      }), _a(e), sa[e];
    }

    return delete sa[e], null;
  }

  function oa(e) {
    var a;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return ea;

    if (!_(e)) {
      if (a = ra(e)) return a;
      e = [e];
    }

    return function (e) {
      for (var a, t, s, n, d = 0; d < e.length;) {
        for (a = (n = da(e[d]).split("-")).length, t = (t = da(e[d + 1])) ? t.split("-") : null; 0 < a;) {
          if (s = ra(n.slice(0, a).join("-"))) return s;
          if (t && t.length >= a && r(n, t, !0) >= a - 1) break;
          a--;
        }

        d++;
      }

      return ea;
    }(e);
  }

  function ma(e) {
    var a,
        t = e._a;
    return t && -2 === Y(e).overflow && (a = t[Le] < 0 || 11 < t[Le] ? Le : t[ce] < 1 || t[ce] > je(t[he], t[Le]) ? ce : t[Ye] < 0 || 24 < t[Ye] || 24 === t[Ye] && (0 !== t[ye] || 0 !== t[fe] || 0 !== t[ke]) ? Ye : t[ye] < 0 || 59 < t[ye] ? ye : t[fe] < 0 || 59 < t[fe] ? fe : t[ke] < 0 || 999 < t[ke] ? ke : -1, Y(e)._overflowDayOfYear && (a < he || ce < a) && (a = ce), Y(e)._overflowWeeks && -1 === a && (a = pe), Y(e)._overflowWeekday && -1 === a && (a = De), Y(e).overflow = a), e;
  }

  function ua(e, a, t) {
    return null != e ? e : null != a ? a : t;
  }

  function la(e) {
    var a,
        t,
        s,
        n,
        d,
        r = [];

    if (!e._d) {
      var _, i;

      for (_ = e, i = new Date(l.now()), s = _._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()], e._w && null == e._a[ce] && null == e._a[Le] && function (e) {
        var a, t, s, n, d, r, _, i;

        if (null != (a = e._w).GG || null != a.W || null != a.E) d = 1, r = 4, t = ua(a.GG, e._a[he], Ie(Sa(), 1, 4).year), s = ua(a.W, 1), ((n = ua(a.E, 1)) < 1 || 7 < n) && (i = !0);else {
          d = e._locale._week.dow, r = e._locale._week.doy;
          var o = Ie(Sa(), d, r);
          t = ua(a.gg, e._a[he], o.year), s = ua(a.w, o.week), null != a.d ? ((n = a.d) < 0 || 6 < n) && (i = !0) : null != a.e ? (n = a.e + d, (a.e < 0 || 6 < a.e) && (i = !0)) : n = d;
        }
        s < 1 || s > Ce(t, d, r) ? Y(e)._overflowWeeks = !0 : null != i ? Y(e)._overflowWeekday = !0 : (_ = Re(t, s, n, d, r), e._a[he] = _.year, e._dayOfYear = _.dayOfYear);
      }(e), null != e._dayOfYear && (d = ua(e._a[he], s[he]), (e._dayOfYear > Te(d) || 0 === e._dayOfYear) && (Y(e)._overflowDayOfYear = !0), t = Je(d, 0, e._dayOfYear), e._a[Le] = t.getUTCMonth(), e._a[ce] = t.getUTCDate()), a = 0; a < 3 && null == e._a[a]; ++a) {
        e._a[a] = r[a] = s[a];
      }

      for (; a < 7; a++) {
        e._a[a] = r[a] = null == e._a[a] ? 2 === a ? 1 : 0 : e._a[a];
      }

      24 === e._a[Ye] && 0 === e._a[ye] && 0 === e._a[fe] && 0 === e._a[ke] && (e._nextDay = !0, e._a[Ye] = 0), e._d = (e._useUTC ? Je : function (e, a, t, s, n, d, r) {
        var _ = new Date(e, a, t, s, n, d, r);

        return e < 100 && 0 <= e && isFinite(_.getFullYear()) && _.setFullYear(e), _;
      }).apply(null, r), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ye] = 24), e._w && void 0 !== e._w.d && e._w.d !== n && (Y(e).weekdayMismatch = !0);
    }
  }

  var Ma = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      ha = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      La = /Z|[+-]\d\d(?::?\d\d)?/,
      ca = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
      Ya = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
      ya = /^\/?Date\((\-?\d+)/i;

  function fa(e) {
    var a,
        t,
        s,
        n,
        d,
        r,
        _ = e._i,
        i = Ma.exec(_) || ha.exec(_);

    if (i) {
      for (Y(e).iso = !0, a = 0, t = ca.length; a < t; a++) {
        if (ca[a][1].exec(i[1])) {
          n = ca[a][0], s = !1 !== ca[a][2];
          break;
        }
      }

      if (null == n) return void (e._isValid = !1);

      if (i[3]) {
        for (a = 0, t = Ya.length; a < t; a++) {
          if (Ya[a][1].exec(i[3])) {
            d = (i[2] || " ") + Ya[a][0];
            break;
          }
        }

        if (null == d) return void (e._isValid = !1);
      }

      if (!s && null != d) return void (e._isValid = !1);

      if (i[4]) {
        if (!La.exec(i[4])) return void (e._isValid = !1);
        r = "Z";
      }

      e._f = n + (d || "") + (r || ""), ga(e);
    } else e._isValid = !1;
  }

  var ka = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

  function pa(e, a, t, s, n, d) {
    var r = [function (e) {
      var a = parseInt(e, 10);
      {
        if (a <= 49) return 2e3 + a;
        if (a <= 999) return 1900 + a;
      }
      return a;
    }(e), Oe.indexOf(a), parseInt(t, 10), parseInt(s, 10), parseInt(n, 10)];
    return d && r.push(parseInt(d, 10)), r;
  }

  var Da = {
    UT: 0,
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
  };

  function Ta(e) {
    var a,
        t,
        s,
        n = ka.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));

    if (n) {
      var d = pa(n[4], n[3], n[2], n[5], n[6], n[7]);
      if (a = n[1], t = d, s = e, a && Ue.indexOf(a) !== new Date(t[0], t[1], t[2]).getDay() && (Y(s).weekdayMismatch = !0, !(s._isValid = !1))) return;
      e._a = d, e._tzm = function (e, a, t) {
        if (e) return Da[e];
        if (a) return 0;
        var s = parseInt(t, 10),
            n = s % 100;
        return (s - n) / 100 * 60 + n;
      }(n[8], n[9], n[10]), e._d = Je.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Y(e).rfc2822 = !0;
    } else e._isValid = !1;
  }

  function ga(e) {
    if (e._f !== l.ISO_8601) {
      if (e._f !== l.RFC_2822) {
        e._a = [], Y(e).empty = !0;

        var a,
            t,
            s,
            n,
            d,
            r,
            _,
            i,
            o = "" + e._i,
            m = o.length,
            u = 0;

        for (s = G(e._f, e._locale).match(z) || [], a = 0; a < s.length; a++) {
          n = s[a], (t = (o.match(oe(n, e)) || [])[0]) && (0 < (d = o.substr(0, o.indexOf(t))).length && Y(e).unusedInput.push(d), o = o.slice(o.indexOf(t) + t.length), u += t.length), R[n] ? (t ? Y(e).empty = !1 : Y(e).unusedTokens.push(n), r = n, i = e, null != (_ = t) && h(ue, r) && ue[r](_, i._a, i, r)) : e._strict && !t && Y(e).unusedTokens.push(n);
        }

        Y(e).charsLeftOver = m - u, 0 < o.length && Y(e).unusedInput.push(o), e._a[Ye] <= 12 && !0 === Y(e).bigHour && 0 < e._a[Ye] && (Y(e).bigHour = void 0), Y(e).parsedDateParts = e._a.slice(0), Y(e).meridiem = e._meridiem, e._a[Ye] = function (e, a, t) {
          var s;
          if (null == t) return a;
          return null != e.meridiemHour ? e.meridiemHour(a, t) : (null != e.isPM && ((s = e.isPM(t)) && a < 12 && (a += 12), s || 12 !== a || (a = 0)), a);
        }(e._locale, e._a[Ye], e._meridiem), la(e), ma(e);
      } else Ta(e);
    } else fa(e);
  }

  function wa(e) {
    var a,
        t,
        s,
        n,
        d = e._i,
        r = e._f;
    return e._locale = e._locale || oa(e._l), null === d || void 0 === r && "" === d ? f({
      nullInput: !0
    }) : ("string" == typeof d && (e._i = d = e._locale.preparse(d)), D(d) ? new p(ma(d)) : (u(d) ? e._d = d : _(r) ? function (e) {
      var a, t, s, n, d;
      if (0 === e._f.length) return Y(e).invalidFormat = !0, e._d = new Date(NaN);

      for (n = 0; n < e._f.length; n++) {
        d = 0, a = k({}, e), null != e._useUTC && (a._useUTC = e._useUTC), a._f = e._f[n], ga(a), y(a) && (d += Y(a).charsLeftOver, d += 10 * Y(a).unusedTokens.length, Y(a).score = d, (null == s || d < s) && (s = d, t = a));
      }

      L(e, t || a);
    }(e) : r ? ga(e) : o(t = (a = e)._i) ? a._d = new Date(l.now()) : u(t) ? a._d = new Date(t.valueOf()) : "string" == typeof t ? (s = a, null === (n = ya.exec(s._i)) ? (fa(s), !1 === s._isValid && (delete s._isValid, Ta(s), !1 === s._isValid && (delete s._isValid, l.createFromInputFallback(s)))) : s._d = new Date(+n[1])) : _(t) ? (a._a = M(t.slice(0), function (e) {
      return parseInt(e, 10);
    }), la(a)) : i(t) ? function (e) {
      if (!e._d) {
        var a = W(e._i);
        e._a = M([a.year, a.month, a.day || a.date, a.hour, a.minute, a.second, a.millisecond], function (e) {
          return e && parseInt(e, 10);
        }), la(e);
      }
    }(a) : m(t) ? a._d = new Date(t) : l.createFromInputFallback(a), y(e) || (e._d = null), e));
  }

  function va(e, a, t, s, n) {
    var d,
        r = {};
    return !0 !== t && !1 !== t || (s = t, t = void 0), (i(e) && function (e) {
      if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
      var a;

      for (a in e) {
        if (e.hasOwnProperty(a)) return !1;
      }

      return !0;
    }(e) || _(e) && 0 === e.length) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = n, r._l = t, r._i = e, r._f = a, r._strict = s, (d = new p(ma(wa(r))))._nextDay && (d.add(1, "d"), d._nextDay = void 0), d;
  }

  function Sa(e, a, t, s) {
    return va(e, a, t, s, !1);
  }

  l.createFromInputFallback = t("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }), l.ISO_8601 = function () {}, l.RFC_2822 = function () {};
  var Ha = t("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = Sa.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : f();
  }),
      ba = t("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = Sa.apply(null, arguments);
    return this.isValid() && e.isValid() ? this < e ? this : e : f();
  });

  function ja(e, a) {
    var t, s;
    if (1 === a.length && _(a[0]) && (a = a[0]), !a.length) return Sa();

    for (t = a[0], s = 1; s < a.length; ++s) {
      a[s].isValid() && !a[s][e](t) || (t = a[s]);
    }

    return t;
  }

  var xa = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

  function Pa(e) {
    var a = W(e),
        t = a.year || 0,
        s = a.quarter || 0,
        n = a.month || 0,
        d = a.week || 0,
        r = a.day || 0,
        _ = a.hour || 0,
        i = a.minute || 0,
        o = a.second || 0,
        m = a.millisecond || 0;

    this._isValid = function (e) {
      for (var a in e) {
        if (-1 === we.call(xa, a) || null != e[a] && isNaN(e[a])) return !1;
      }

      for (var t = !1, s = 0; s < xa.length; ++s) {
        if (e[xa[s]]) {
          if (t) return !1;
          parseFloat(e[xa[s]]) !== g(e[xa[s]]) && (t = !0);
        }
      }

      return !0;
    }(a), this._milliseconds = +m + 1e3 * o + 6e4 * i + 1e3 * _ * 60 * 60, this._days = +r + 7 * d, this._months = +n + 3 * s + 12 * t, this._data = {}, this._locale = oa(), this._bubble();
  }

  function Oa(e) {
    return e instanceof Pa;
  }

  function Wa(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
  }

  function Ea(e, t) {
    I(e, 0, 0, function () {
      var e = this.utcOffset(),
          a = "+";
      return e < 0 && (e = -e, a = "-"), a + F(~~(e / 60), 2) + t + F(~~e % 60, 2);
    });
  }

  Ea("Z", ":"), Ea("ZZ", ""), ie("Z", de), ie("ZZ", de), le(["Z", "ZZ"], function (e, a, t) {
    t._useUTC = !0, t._tzm = Fa(de, e);
  });
  var Aa = /([\+\-]|\d\d)/gi;

  function Fa(e, a) {
    var t = (a || "").match(e);
    if (null === t) return null;
    var s = ((t[t.length - 1] || []) + "").match(Aa) || ["-", 0, 0],
        n = 60 * s[1] + g(s[2]);
    return 0 === n ? 0 : "+" === s[0] ? n : -n;
  }

  function za(e, a) {
    var t, s;
    return a._isUTC ? (t = a.clone(), s = (D(e) || u(e) ? e.valueOf() : Sa(e).valueOf()) - t.valueOf(), t._d.setTime(t._d.valueOf() + s), l.updateOffset(t, !1), t) : Sa(e).local();
  }

  function Ja(e) {
    return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
  }

  function Na() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }

  l.updateOffset = function () {};

  var Ra = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      Ia = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function Ca(e, a) {
    var t,
        s,
        n,
        d = e,
        r = null;
    return Oa(e) ? d = {
      ms: e._milliseconds,
      d: e._days,
      M: e._months
    } : m(e) ? (d = {}, a ? d[a] = e : d.milliseconds = e) : (r = Ra.exec(e)) ? (t = "-" === r[1] ? -1 : 1, d = {
      y: 0,
      d: g(r[ce]) * t,
      h: g(r[Ye]) * t,
      m: g(r[ye]) * t,
      s: g(r[fe]) * t,
      ms: g(Wa(1e3 * r[ke])) * t
    }) : (r = Ia.exec(e)) ? (t = "-" === r[1] ? -1 : (r[1], 1), d = {
      y: Ga(r[2], t),
      M: Ga(r[3], t),
      w: Ga(r[4], t),
      d: Ga(r[5], t),
      h: Ga(r[6], t),
      m: Ga(r[7], t),
      s: Ga(r[8], t)
    }) : null == d ? d = {} : "object" == _typeof(d) && ("from" in d || "to" in d) && (n = function (e, a) {
      var t;
      if (!e.isValid() || !a.isValid()) return {
        milliseconds: 0,
        months: 0
      };
      a = za(a, e), e.isBefore(a) ? t = Ua(e, a) : ((t = Ua(a, e)).milliseconds = -t.milliseconds, t.months = -t.months);
      return t;
    }(Sa(d.from), Sa(d.to)), (d = {}).ms = n.milliseconds, d.M = n.months), s = new Pa(d), Oa(e) && h(e, "_locale") && (s._locale = e._locale), s;
  }

  function Ga(e, a) {
    var t = e && parseFloat(e.replace(",", "."));
    return (isNaN(t) ? 0 : t) * a;
  }

  function Ua(e, a) {
    var t = {
      milliseconds: 0,
      months: 0
    };
    return t.months = a.month() - e.month() + 12 * (a.year() - e.year()), e.clone().add(t.months, "M").isAfter(a) && --t.months, t.milliseconds = +a - +e.clone().add(t.months, "M"), t;
  }

  function Va(s, n) {
    return function (e, a) {
      var t;
      return null === a || isNaN(+a) || (S(n, "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), t = e, e = a, a = t), Ka(this, Ca(e = "string" == typeof e ? +e : e, a), s), this;
    };
  }

  function Ka(e, a, t, s) {
    var n = a._milliseconds,
        d = Wa(a._days),
        r = Wa(a._months);
    e.isValid() && (s = null == s || s, r && We(e, He(e, "Month") + r * t), d && be(e, "Date", He(e, "Date") + d * t), n && e._d.setTime(e._d.valueOf() + n * t), s && l.updateOffset(e, d || r));
  }

  Ca.fn = Pa.prototype, Ca.invalid = function () {
    return Ca(NaN);
  };
  var $a = Va(1, "add"),
      Za = Va(-1, "subtract");

  function Ba(e, a) {
    var t = 12 * (a.year() - e.year()) + (a.month() - e.month()),
        s = e.clone().add(t, "months");
    return -(t + (a - s < 0 ? (a - s) / (s - e.clone().add(t - 1, "months")) : (a - s) / (e.clone().add(t + 1, "months") - s))) || 0;
  }

  function qa(e) {
    var a;
    return void 0 === e ? this._locale._abbr : (null != (a = oa(e)) && (this._locale = a), this);
  }

  l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  var Qa = t("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
    return void 0 === e ? this.localeData() : this.locale(e);
  });

  function Xa() {
    return this._locale;
  }

  function et(e, a) {
    I(0, [e, e.length], 0, a);
  }

  function at(e, a, t, s, n) {
    var d;
    return null == e ? Ie(this, s, n).year : ((d = Ce(e, s, n)) < a && (a = d), function (e, a, t, s, n) {
      var d = Re(e, a, t, s, n),
          r = Je(d.year, 0, d.dayOfYear);
      return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this;
    }.call(this, e, a, t, s, n));
  }

  I(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }), I(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  }), et("gggg", "weekYear"), et("ggggg", "weekYear"), et("GGGG", "isoWeekYear"), et("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), A("weekYear", 1), A("isoWeekYear", 1), ie("G", se), ie("g", se), ie("GG", B, V), ie("gg", B, V), ie("GGGG", ee, $), ie("gggg", ee, $), ie("GGGGG", ae, Z), ie("ggggg", ae, Z), Me(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, a, t, s) {
    a[s.substr(0, 2)] = g(e);
  }), Me(["gg", "GG"], function (e, a, t, s) {
    a[s] = l.parseTwoDigitYear(e);
  }), I("Q", 0, "Qo", "quarter"), P("quarter", "Q"), A("quarter", 7), ie("Q", U), le("Q", function (e, a) {
    a[Le] = 3 * (g(e) - 1);
  }), I("D", ["DD", 2], "Do", "date"), P("date", "D"), A("date", 9), ie("D", B), ie("DD", B, V), ie("Do", function (e, a) {
    return e ? a._dayOfMonthOrdinalParse || a._ordinalParse : a._dayOfMonthOrdinalParseLenient;
  }), le(["D", "DD"], ce), le("Do", function (e, a) {
    a[ce] = g(e.match(B)[0]);
  });
  var tt = Se("Date", !0);
  I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), A("dayOfYear", 4), ie("DDD", X), ie("DDDD", K), le(["DDD", "DDDD"], function (e, a, t) {
    t._dayOfYear = g(e);
  }), I("m", ["mm", 2], 0, "minute"), P("minute", "m"), A("minute", 14), ie("m", B), ie("mm", B, V), le(["m", "mm"], ye);
  var st = Se("Minutes", !1);
  I("s", ["ss", 2], 0, "second"), P("second", "s"), A("second", 15), ie("s", B), ie("ss", B, V), le(["s", "ss"], fe);
  var nt,
      dt = Se("Seconds", !1);

  for (I("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }), I(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  }), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond();
  }), I(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond();
  }), I(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond();
  }), I(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond();
  }), I(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond();
  }), I(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond();
  }), P("millisecond", "ms"), A("millisecond", 16), ie("S", X, U), ie("SS", X, V), ie("SSS", X, K), nt = "SSSS"; nt.length <= 9; nt += "S") {
    ie(nt, te);
  }

  function rt(e, a) {
    a[ke] = g(1e3 * ("0." + e));
  }

  for (nt = "S"; nt.length <= 9; nt += "S") {
    le(nt, rt);
  }

  var _t = Se("Milliseconds", !1);

  I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");
  var it = p.prototype;

  function ot(e) {
    return e;
  }

  it.add = $a, it.calendar = function (e, a) {
    var t = e || Sa(),
        s = za(t, this).startOf("day"),
        n = l.calendarFormat(this, s) || "sameElse",
        d = a && (H(a[n]) ? a[n].call(this, t) : a[n]);
    return this.format(d || this.localeData().calendar(n, this, Sa(t)));
  }, it.clone = function () {
    return new p(this);
  }, it.diff = function (e, a, t) {
    var s, n, d;
    if (!this.isValid()) return NaN;
    if (!(s = za(e, this)).isValid()) return NaN;

    switch (n = 6e4 * (s.utcOffset() - this.utcOffset()), a = O(a)) {
      case "year":
        d = Ba(this, s) / 12;
        break;

      case "month":
        d = Ba(this, s);
        break;

      case "quarter":
        d = Ba(this, s) / 3;
        break;

      case "second":
        d = (this - s) / 1e3;
        break;

      case "minute":
        d = (this - s) / 6e4;
        break;

      case "hour":
        d = (this - s) / 36e5;
        break;

      case "day":
        d = (this - s - n) / 864e5;
        break;

      case "week":
        d = (this - s - n) / 6048e5;
        break;

      default:
        d = this - s;
    }

    return t ? d : T(d);
  }, it.endOf = function (e) {
    return void 0 === (e = O(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"));
  }, it.format = function (e) {
    e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
    var a = C(this, e);
    return this.localeData().postformat(a);
  }, it.from = function (e, a) {
    return this.isValid() && (D(e) && e.isValid() || Sa(e).isValid()) ? Ca({
      to: this,
      from: e
    }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate();
  }, it.fromNow = function (e) {
    return this.from(Sa(), e);
  }, it.to = function (e, a) {
    return this.isValid() && (D(e) && e.isValid() || Sa(e).isValid()) ? Ca({
      from: this,
      to: e
    }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate();
  }, it.toNow = function (e) {
    return this.to(Sa(), e);
  }, it.get = function (e) {
    return H(this[e = O(e)]) ? this[e]() : this;
  }, it.invalidAt = function () {
    return Y(this).overflow;
  }, it.isAfter = function (e, a) {
    var t = D(e) ? e : Sa(e);
    return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = O(o(a) ? "millisecond" : a)) ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(a).valueOf());
  }, it.isBefore = function (e, a) {
    var t = D(e) ? e : Sa(e);
    return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = O(o(a) ? "millisecond" : a)) ? this.valueOf() < t.valueOf() : this.clone().endOf(a).valueOf() < t.valueOf());
  }, it.isBetween = function (e, a, t, s) {
    return ("(" === (s = s || "()")[0] ? this.isAfter(e, t) : !this.isBefore(e, t)) && (")" === s[1] ? this.isBefore(a, t) : !this.isAfter(a, t));
  }, it.isSame = function (e, a) {
    var t,
        s = D(e) ? e : Sa(e);
    return !(!this.isValid() || !s.isValid()) && ("millisecond" === (a = O(a || "millisecond")) ? this.valueOf() === s.valueOf() : (t = s.valueOf(), this.clone().startOf(a).valueOf() <= t && t <= this.clone().endOf(a).valueOf()));
  }, it.isSameOrAfter = function (e, a) {
    return this.isSame(e, a) || this.isAfter(e, a);
  }, it.isSameOrBefore = function (e, a) {
    return this.isSame(e, a) || this.isBefore(e, a);
  }, it.isValid = function () {
    return y(this);
  }, it.lang = Qa, it.locale = qa, it.localeData = Xa, it.max = ba, it.min = Ha, it.parsingFlags = function () {
    return L({}, Y(this));
  }, it.set = function (e, a) {
    if ("object" == _typeof(e)) for (var t = function (e) {
      var a = [];

      for (var t in e) {
        a.push({
          unit: t,
          priority: E[t]
        });
      }

      return a.sort(function (e, a) {
        return e.priority - a.priority;
      }), a;
    }(e = W(e)), s = 0; s < t.length; s++) {
      this[t[s].unit](e[t[s].unit]);
    } else if (H(this[e = O(e)])) return this[e](a);
    return this;
  }, it.startOf = function (e) {
    switch (e = O(e)) {
      case "year":
        this.month(0);

      case "quarter":
      case "month":
        this.date(1);

      case "week":
      case "isoWeek":
      case "day":
      case "date":
        this.hours(0);

      case "hour":
        this.minutes(0);

      case "minute":
        this.seconds(0);

      case "second":
        this.milliseconds(0);
    }

    return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this;
  }, it.subtract = Za, it.toArray = function () {
    var e = this;
    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
  }, it.toObject = function () {
    var e = this;
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds()
    };
  }, it.toDate = function () {
    return new Date(this.valueOf());
  }, it.toISOString = function (e) {
    if (!this.isValid()) return null;
    var a = !0 !== e,
        t = a ? this.clone().utc() : this;
    return t.year() < 0 || 9999 < t.year() ? C(t, a ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : H(Date.prototype.toISOString) ? a ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", C(t, "Z")) : C(t, a ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }, it.inspect = function () {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var e = "moment",
        a = "";
    this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", a = "Z");
    var t = "[" + e + '("]',
        s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        n = a + '[")]';
    return this.format(t + s + "-MM-DD[T]HH:mm:ss.SSS" + n);
  }, it.toJSON = function () {
    return this.isValid() ? this.toISOString() : null;
  }, it.toString = function () {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }, it.unix = function () {
    return Math.floor(this.valueOf() / 1e3);
  }, it.valueOf = function () {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  }, it.creationData = function () {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }, it.year = ve, it.isLeapYear = function () {
    return ge(this.year());
  }, it.weekYear = function (e) {
    return at.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }, it.isoWeekYear = function (e) {
    return at.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
  }, it.quarter = it.quarters = function (e) {
    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
  }, it.month = Ee, it.daysInMonth = function () {
    return je(this.year(), this.month());
  }, it.week = it.weeks = function (e) {
    var a = this.localeData().week(this);
    return null == e ? a : this.add(7 * (e - a), "d");
  }, it.isoWeek = it.isoWeeks = function (e) {
    var a = Ie(this, 1, 4).week;
    return null == e ? a : this.add(7 * (e - a), "d");
  }, it.weeksInYear = function () {
    var e = this.localeData()._week;

    return Ce(this.year(), e.dow, e.doy);
  }, it.isoWeeksInYear = function () {
    return Ce(this.year(), 1, 4);
  }, it.date = tt, it.day = it.days = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var a,
        t,
        s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != e ? (a = e, t = this.localeData(), e = "string" != typeof a ? a : isNaN(a) ? "number" == typeof (a = t.weekdaysParse(a)) ? a : null : parseInt(a, 10), this.add(e - s, "d")) : s;
  }, it.weekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var a = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == e ? a : this.add(e - a, "d");
  }, it.isoWeekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;

    if (null != e) {
      var a = (t = e, s = this.localeData(), "string" == typeof t ? s.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
      return this.day(this.day() % 7 ? a : a - 7);
    }

    return this.day() || 7;
    var t, s;
  }, it.dayOfYear = function (e) {
    var a = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return null == e ? a : this.add(e - a, "d");
  }, it.hour = it.hours = aa, it.minute = it.minutes = st, it.second = it.seconds = dt, it.millisecond = it.milliseconds = _t, it.utcOffset = function (e, a, t) {
    var s,
        n = this._offset || 0;
    if (!this.isValid()) return null != e ? this : NaN;

    if (null != e) {
      if ("string" == typeof e) {
        if (null === (e = Fa(de, e))) return this;
      } else Math.abs(e) < 16 && !t && (e *= 60);

      return !this._isUTC && a && (s = Ja(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), n !== e && (!a || this._changeInProgress ? Ka(this, Ca(e - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this;
    }

    return this._isUTC ? n : Ja(this);
  }, it.utc = function (e) {
    return this.utcOffset(0, e);
  }, it.local = function (e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ja(this), "m")), this;
  }, it.parseZone = function () {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
      var e = Fa(ne, this._i);
      null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
    }
    return this;
  }, it.hasAlignedHourOffset = function (e) {
    return !!this.isValid() && (e = e ? Sa(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
  }, it.isDST = function () {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }, it.isLocal = function () {
    return !!this.isValid() && !this._isUTC;
  }, it.isUtcOffset = function () {
    return !!this.isValid() && this._isUTC;
  }, it.isUtc = Na, it.isUTC = Na, it.zoneAbbr = function () {
    return this._isUTC ? "UTC" : "";
  }, it.zoneName = function () {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }, it.dates = t("dates accessor is deprecated. Use date instead.", tt), it.months = t("months accessor is deprecated. Use month instead", Ee), it.years = t("years accessor is deprecated. Use year instead", ve), it.zone = t("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, a) {
    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, a), this) : -this.utcOffset();
  }), it.isDSTShifted = t("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
    if (!o(this._isDSTShifted)) return this._isDSTShifted;
    var e = {};

    if (k(e, this), (e = wa(e))._a) {
      var a = e._isUTC ? c(e._a) : Sa(e._a);
      this._isDSTShifted = this.isValid() && 0 < r(e._a, a.toArray());
    } else this._isDSTShifted = !1;

    return this._isDSTShifted;
  });
  var mt = j.prototype;

  function ut(e, a, t, s) {
    var n = oa(),
        d = c().set(s, a);
    return n[t](d, e);
  }

  function lt(e, a, t) {
    if (m(e) && (a = e, e = void 0), e = e || "", null != a) return ut(e, a, t, "month");
    var s,
        n = [];

    for (s = 0; s < 12; s++) {
      n[s] = ut(e, s, t, "month");
    }

    return n;
  }

  function Mt(e, a, t, s) {
    "boolean" == typeof e ? m(a) && (t = a, a = void 0) : (a = e, e = !1, m(t = a) && (t = a, a = void 0)), a = a || "";
    var n,
        d = oa(),
        r = e ? d._week.dow : 0;
    if (null != t) return ut(a, (t + r) % 7, s, "day");
    var _ = [];

    for (n = 0; n < 7; n++) {
      _[n] = ut(a, (n + r) % 7, s, "day");
    }

    return _;
  }

  mt.calendar = function (e, a, t) {
    var s = this._calendar[e] || this._calendar.sameElse;
    return H(s) ? s.call(a, t) : s;
  }, mt.longDateFormat = function (e) {
    var a = this._longDateFormat[e],
        t = this._longDateFormat[e.toUpperCase()];

    return a || !t ? a : (this._longDateFormat[e] = t.replace(/MMMM|MM|DD|dddd/g, function (e) {
      return e.slice(1);
    }), this._longDateFormat[e]);
  }, mt.invalidDate = function () {
    return this._invalidDate;
  }, mt.ordinal = function (e) {
    return this._ordinal.replace("%d", e);
  }, mt.preparse = ot, mt.postformat = ot, mt.relativeTime = function (e, a, t, s) {
    var n = this._relativeTime[t];
    return H(n) ? n(e, a, t, s) : n.replace(/%d/i, e);
  }, mt.pastFuture = function (e, a) {
    var t = this._relativeTime[0 < e ? "future" : "past"];
    return H(t) ? t(a) : t.replace(/%s/i, a);
  }, mt.set = function (e) {
    var a, t;

    for (t in e) {
      H(a = e[t]) ? this[t] = a : this["_" + t] = a;
    }

    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }, mt.months = function (e, a) {
    return e ? _(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || xe).test(a) ? "format" : "standalone"][e.month()] : _(this._months) ? this._months : this._months.standalone;
  }, mt.monthsShort = function (e, a) {
    return e ? _(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[xe.test(a) ? "format" : "standalone"][e.month()] : _(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }, mt.monthsParse = function (e, a, t) {
    var s, n, d;
    if (this._monthsParseExact) return function (e, a, t) {
      var s,
          n,
          d,
          r = e.toLocaleLowerCase();
      if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) {
        d = c([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(d, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(d, "").toLocaleLowerCase();
      }
      return t ? "MMM" === a ? -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : null : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : null : "MMM" === a ? -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : null : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : null;
    }.call(this, e, a, t);

    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
      if (n = c([2e3, s]), t && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(n, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(n, "").replace(".", "") + "$", "i")), t || this._monthsParse[s] || (d = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[s] = new RegExp(d.replace(".", ""), "i")), t && "MMMM" === a && this._longMonthsParse[s].test(e)) return s;
      if (t && "MMM" === a && this._shortMonthsParse[s].test(e)) return s;
      if (!t && this._monthsParse[s].test(e)) return s;
    }
  }, mt.monthsRegex = function (e) {
    return this._monthsParseExact ? (h(this, "_monthsRegex") || ze.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = Fe), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
  }, mt.monthsShortRegex = function (e) {
    return this._monthsParseExact ? (h(this, "_monthsRegex") || ze.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = Ae), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }, mt.week = function (e) {
    return Ie(e, this._week.dow, this._week.doy).week;
  }, mt.firstDayOfYear = function () {
    return this._week.doy;
  }, mt.firstDayOfWeek = function () {
    return this._week.dow;
  }, mt.weekdays = function (e, a) {
    return e ? _(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(a) ? "format" : "standalone"][e.day()] : _(this._weekdays) ? this._weekdays : this._weekdays.standalone;
  }, mt.weekdaysMin = function (e) {
    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
  }, mt.weekdaysShort = function (e) {
    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
  }, mt.weekdaysParse = function (e, a, t) {
    var s, n, d;
    if (this._weekdaysParseExact) return function (e, a, t) {
      var s,
          n,
          d,
          r = e.toLocaleLowerCase();
      if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) {
        d = c([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(d, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(d, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(d, "").toLocaleLowerCase();
      }
      return t ? "dddd" === a ? -1 !== (n = we.call(this._weekdaysParse, r)) ? n : null : "ddd" === a ? -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : null : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : "dddd" === a ? -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : "ddd" === a ? -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : null;
    }.call(this, e, a, t);

    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
      if (n = c([2e3, 1]).day(s), t && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(n, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (d = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[s] = new RegExp(d.replace(".", ""), "i")), t && "dddd" === a && this._fullWeekdaysParse[s].test(e)) return s;
      if (t && "ddd" === a && this._shortWeekdaysParse[s].test(e)) return s;
      if (t && "dd" === a && this._minWeekdaysParse[s].test(e)) return s;
      if (!t && this._weekdaysParse[s].test(e)) return s;
    }
  }, mt.weekdaysRegex = function (e) {
    return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = Ke), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }, mt.weekdaysShortRegex = function (e) {
    return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = $e), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }, mt.weekdaysMinRegex = function (e) {
    return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ze), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }, mt.isPM = function (e) {
    return "p" === (e + "").toLowerCase().charAt(0);
  }, mt.meridiem = function (e, a, t) {
    return 11 < e ? t ? "pm" : "PM" : t ? "am" : "AM";
  }, _a("en", {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(e) {
      var a = e % 10;
      return e + (1 === g(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    }
  }), l.lang = t("moment.lang is deprecated. Use moment.locale instead.", _a), l.langData = t("moment.langData is deprecated. Use moment.localeData instead.", oa);
  var ht = Math.abs;

  function Lt(e, a, t, s) {
    var n = Ca(a, t);
    return e._milliseconds += s * n._milliseconds, e._days += s * n._days, e._months += s * n._months, e._bubble();
  }

  function ct(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }

  function Yt(e) {
    return 4800 * e / 146097;
  }

  function yt(e) {
    return 146097 * e / 4800;
  }

  function ft(e) {
    return function () {
      return this.as(e);
    };
  }

  var kt = ft("ms"),
      pt = ft("s"),
      Dt = ft("m"),
      Tt = ft("h"),
      gt = ft("d"),
      wt = ft("w"),
      vt = ft("M"),
      St = ft("y");

  function Ht(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }

  var bt = Ht("milliseconds"),
      jt = Ht("seconds"),
      xt = Ht("minutes"),
      Pt = Ht("hours"),
      Ot = Ht("days"),
      Wt = Ht("months"),
      Et = Ht("years");
  var At = Math.round,
      Ft = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    M: 11
  };
  var zt = Math.abs;

  function Jt(e) {
    return (0 < e) - (e < 0) || +e;
  }

  function Nt() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e,
        a,
        t = zt(this._milliseconds) / 1e3,
        s = zt(this._days),
        n = zt(this._months);
    a = T((e = T(t / 60)) / 60), t %= 60, e %= 60;
    var d = T(n / 12),
        r = n %= 12,
        _ = s,
        i = a,
        o = e,
        m = t ? t.toFixed(3).replace(/\.?0+$/, "") : "",
        u = this.asSeconds();
    if (!u) return "P0D";
    var l = u < 0 ? "-" : "",
        M = Jt(this._months) !== Jt(u) ? "-" : "",
        h = Jt(this._days) !== Jt(u) ? "-" : "",
        L = Jt(this._milliseconds) !== Jt(u) ? "-" : "";
    return l + "P" + (d ? M + d + "Y" : "") + (r ? M + r + "M" : "") + (_ ? h + _ + "D" : "") + (i || o || m ? "T" : "") + (i ? L + i + "H" : "") + (o ? L + o + "M" : "") + (m ? L + m + "S" : "");
  }

  var Rt = Pa.prototype;
  Rt.isValid = function () {
    return this._isValid;
  }, Rt.abs = function () {
    var e = this._data;
    return this._milliseconds = ht(this._milliseconds), this._days = ht(this._days), this._months = ht(this._months), e.milliseconds = ht(e.milliseconds), e.seconds = ht(e.seconds), e.minutes = ht(e.minutes), e.hours = ht(e.hours), e.months = ht(e.months), e.years = ht(e.years), this;
  }, Rt.add = function (e, a) {
    return Lt(this, e, a, 1);
  }, Rt.subtract = function (e, a) {
    return Lt(this, e, a, -1);
  }, Rt.as = function (e) {
    if (!this.isValid()) return NaN;
    var a,
        t,
        s = this._milliseconds;
    if ("month" === (e = O(e)) || "year" === e) return a = this._days + s / 864e5, t = this._months + Yt(a), "month" === e ? t : t / 12;

    switch (a = this._days + Math.round(yt(this._months)), e) {
      case "week":
        return a / 7 + s / 6048e5;

      case "day":
        return a + s / 864e5;

      case "hour":
        return 24 * a + s / 36e5;

      case "minute":
        return 1440 * a + s / 6e4;

      case "second":
        return 86400 * a + s / 1e3;

      case "millisecond":
        return Math.floor(864e5 * a) + s;

      default:
        throw new Error("Unknown unit " + e);
    }
  }, Rt.asMilliseconds = kt, Rt.asSeconds = pt, Rt.asMinutes = Dt, Rt.asHours = Tt, Rt.asDays = gt, Rt.asWeeks = wt, Rt.asMonths = vt, Rt.asYears = St, Rt.valueOf = function () {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12) : NaN;
  }, Rt._bubble = function () {
    var e,
        a,
        t,
        s,
        n,
        d = this._milliseconds,
        r = this._days,
        _ = this._months,
        i = this._data;
    return 0 <= d && 0 <= r && 0 <= _ || d <= 0 && r <= 0 && _ <= 0 || (d += 864e5 * ct(yt(_) + r), _ = r = 0), i.milliseconds = d % 1e3, e = T(d / 1e3), i.seconds = e % 60, a = T(e / 60), i.minutes = a % 60, t = T(a / 60), i.hours = t % 24, _ += n = T(Yt(r += T(t / 24))), r -= ct(yt(n)), s = T(_ / 12), _ %= 12, i.days = r, i.months = _, i.years = s, this;
  }, Rt.clone = function () {
    return Ca(this);
  }, Rt.get = function (e) {
    return e = O(e), this.isValid() ? this[e + "s"]() : NaN;
  }, Rt.milliseconds = bt, Rt.seconds = jt, Rt.minutes = xt, Rt.hours = Pt, Rt.days = Ot, Rt.weeks = function () {
    return T(this.days() / 7);
  }, Rt.months = Wt, Rt.years = Et, Rt.humanize = function (e) {
    if (!this.isValid()) return this.localeData().invalidDate();

    var a,
        t,
        s,
        n,
        d,
        r,
        _,
        i,
        o,
        m,
        u,
        l = this.localeData(),
        M = (t = !e, s = l, n = Ca(a = this).abs(), d = At(n.as("s")), r = At(n.as("m")), _ = At(n.as("h")), i = At(n.as("d")), o = At(n.as("M")), m = At(n.as("y")), (u = d <= Ft.ss && ["s", d] || d < Ft.s && ["ss", d] || r <= 1 && ["m"] || r < Ft.m && ["mm", r] || _ <= 1 && ["h"] || _ < Ft.h && ["hh", _] || i <= 1 && ["d"] || i < Ft.d && ["dd", i] || o <= 1 && ["M"] || o < Ft.M && ["MM", o] || m <= 1 && ["y"] || ["yy", m])[2] = t, u[3] = 0 < +a, u[4] = s, function (e, a, t, s, n) {
      return n.relativeTime(a || 1, !!t, e, s);
    }.apply(null, u));

    return e && (M = l.pastFuture(+this, M)), l.postformat(M);
  }, Rt.toISOString = Nt, Rt.toString = Nt, Rt.toJSON = Nt, Rt.locale = qa, Rt.localeData = Xa, Rt.toIsoString = t("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Nt), Rt.lang = Qa, I("X", 0, 0, "unix"), I("x", 0, 0, "valueOf"), ie("x", se), ie("X", /[+-]?\d+(\.\d{1,3})?/), le("X", function (e, a, t) {
    t._d = new Date(1e3 * parseFloat(e, 10));
  }), le("x", function (e, a, t) {
    t._d = new Date(g(e));
  }), l.version = "2.22.2", e = Sa, l.fn = it, l.min = function () {
    return ja("isBefore", [].slice.call(arguments, 0));
  }, l.max = function () {
    return ja("isAfter", [].slice.call(arguments, 0));
  }, l.now = function () {
    return Date.now ? Date.now() : +new Date();
  }, l.utc = c, l.unix = function (e) {
    return Sa(1e3 * e);
  }, l.months = function (e, a) {
    return lt(e, a, "months");
  }, l.isDate = u, l.locale = _a, l.invalid = f, l.duration = Ca, l.isMoment = D, l.weekdays = function (e, a, t) {
    return Mt(e, a, t, "weekdays");
  }, l.parseZone = function () {
    return Sa.apply(null, arguments).parseZone();
  }, l.localeData = oa, l.isDuration = Oa, l.monthsShort = function (e, a) {
    return lt(e, a, "monthsShort");
  }, l.weekdaysMin = function (e, a, t) {
    return Mt(e, a, t, "weekdaysMin");
  }, l.defineLocale = ia, l.updateLocale = function (e, a) {
    if (null != a) {
      var t,
          s,
          n = ta;
      null != (s = ra(e)) && (n = s._config), (t = new j(a = b(n, a))).parentLocale = sa[e], sa[e] = t, _a(e);
    } else null != sa[e] && (null != sa[e].parentLocale ? sa[e] = sa[e].parentLocale : null != sa[e] && delete sa[e]);

    return sa[e];
  }, l.locales = function () {
    return s(sa);
  }, l.weekdaysShort = function (e, a, t) {
    return Mt(e, a, t, "weekdaysShort");
  }, l.normalizeUnits = O, l.relativeTimeRounding = function (e) {
    return void 0 === e ? At : "function" == typeof e && (At = e, !0);
  }, l.relativeTimeThreshold = function (e, a) {
    return void 0 !== Ft[e] && (void 0 === a ? Ft[e] : (Ft[e] = a, "s" === e && (Ft.ss = a - 1), !0));
  }, l.calendarFormat = function (e, a) {
    var t = e.diff(a, "days", !0);
    return t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse";
  }, l.prototype = it, l.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "YYYY-[W]WW",
    MONTH: "YYYY-MM"
  }, l.defineLocale("af", {
    months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
    monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
    weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
    weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
    weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
    meridiemParse: /vm|nm/i,
    isPM: function isPM(e) {
      return /^nm$/i.test(e);
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? t ? "vm" : "VM" : t ? "nm" : "NM";
    },
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Vandag om] LT",
      nextDay: "[M\xf4re om] LT",
      nextWeek: "dddd [om] LT",
      lastDay: "[Gister om] LT",
      lastWeek: "[Laas] dddd [om] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "oor %s",
      past: "%s gelede",
      s: "'n paar sekondes",
      ss: "%d sekondes",
      m: "'n minuut",
      mm: "%d minute",
      h: "'n uur",
      hh: "%d ure",
      d: "'n dag",
      dd: "%d dae",
      M: "'n maand",
      MM: "%d maande",
      y: "'n jaar",
      yy: "%d jaar"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(e) {
      return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de");
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("ar-dz", {
    months: "\u062C\u0627\u0646\u0641\u064A_\u0641\u064A\u0641\u0631\u064A_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064A\u0644_\u0645\u0627\u064A_\u062C\u0648\u0627\u0646_\u062C\u0648\u064A\u0644\u064A\u0629_\u0623\u0648\u062A_\u0633\u0628\u062A\u0645\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062F\u064A\u0633\u0645\u0628\u0631".split("_"),
    monthsShort: "\u062C\u0627\u0646\u0641\u064A_\u0641\u064A\u0641\u0631\u064A_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064A\u0644_\u0645\u0627\u064A_\u062C\u0648\u0627\u0646_\u062C\u0648\u064A\u0644\u064A\u0629_\u0623\u0648\u062A_\u0633\u0628\u062A\u0645\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062F\u064A\u0633\u0645\u0628\u0631".split("_"),
    weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"),
    weekdaysShort: "\u0627\u062D\u062F_\u0627\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"),
    weekdaysMin: "\u0623\u062D_\u0625\u062B_\u062B\u0644\u0627_\u0623\u0631_\u062E\u0645_\u062C\u0645_\u0633\u0628".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextDay: "[\u063A\u062F\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u0641\u064A %s",
      past: "\u0645\u0646\u0630 %s",
      s: "\u062B\u0648\u0627\u0646",
      ss: "%d \u062B\u0627\u0646\u064A\u0629",
      m: "\u062F\u0642\u064A\u0642\u0629",
      mm: "%d \u062F\u0642\u0627\u0626\u0642",
      h: "\u0633\u0627\u0639\u0629",
      hh: "%d \u0633\u0627\u0639\u0627\u062A",
      d: "\u064A\u0648\u0645",
      dd: "%d \u0623\u064A\u0627\u0645",
      M: "\u0634\u0647\u0631",
      MM: "%d \u0623\u0634\u0647\u0631",
      y: "\u0633\u0646\u0629",
      yy: "%d \u0633\u0646\u0648\u0627\u062A"
    },
    week: {
      dow: 0,
      doy: 4
    }
  }), l.defineLocale("ar-kw", {
    months: "\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648\u0632_\u063A\u0634\u062A_\u0634\u062A\u0646\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062F\u062C\u0646\u0628\u0631".split("_"),
    monthsShort: "\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648\u0632_\u063A\u0634\u062A_\u0634\u062A\u0646\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062F\u062C\u0646\u0628\u0631".split("_"),
    weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062A\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"),
    weekdaysShort: "\u0627\u062D\u062F_\u0627\u062A\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"),
    weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextDay: "[\u063A\u062F\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u0641\u064A %s",
      past: "\u0645\u0646\u0630 %s",
      s: "\u062B\u0648\u0627\u0646",
      ss: "%d \u062B\u0627\u0646\u064A\u0629",
      m: "\u062F\u0642\u064A\u0642\u0629",
      mm: "%d \u062F\u0642\u0627\u0626\u0642",
      h: "\u0633\u0627\u0639\u0629",
      hh: "%d \u0633\u0627\u0639\u0627\u062A",
      d: "\u064A\u0648\u0645",
      dd: "%d \u0623\u064A\u0627\u0645",
      M: "\u0634\u0647\u0631",
      MM: "%d \u0623\u0634\u0647\u0631",
      y: "\u0633\u0646\u0629",
      yy: "%d \u0633\u0646\u0648\u0627\u062A"
    },
    week: {
      dow: 0,
      doy: 12
    }
  });

  var It = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    0: "0"
  },
      Ct = function Ct(e) {
    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5;
  },
      Gt = {
    s: ["\u0623\u0642\u0644 \u0645\u0646 \u062B\u0627\u0646\u064A\u0629", "\u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629", ["\u062B\u0627\u0646\u064A\u062A\u0627\u0646", "\u062B\u0627\u0646\u064A\u062A\u064A\u0646"], "%d \u062B\u0648\u0627\u0646", "%d \u062B\u0627\u0646\u064A\u0629", "%d \u062B\u0627\u0646\u064A\u0629"],
    m: ["\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u0629", "\u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629", ["\u062F\u0642\u064A\u0642\u062A\u0627\u0646", "\u062F\u0642\u064A\u0642\u062A\u064A\u0646"], "%d \u062F\u0642\u0627\u0626\u0642", "%d \u062F\u0642\u064A\u0642\u0629", "%d \u062F\u0642\u064A\u0642\u0629"],
    h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629", ["\u0633\u0627\u0639\u062A\u0627\u0646", "\u0633\u0627\u0639\u062A\u064A\u0646"], "%d \u0633\u0627\u0639\u0627\u062A", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"],
    d: ["\u0623\u0642\u0644 \u0645\u0646 \u064A\u0648\u0645", "\u064A\u0648\u0645 \u0648\u0627\u062D\u062F", ["\u064A\u0648\u0645\u0627\u0646", "\u064A\u0648\u0645\u064A\u0646"], "%d \u0623\u064A\u0627\u0645", "%d \u064A\u0648\u0645\u064B\u0627", "%d \u064A\u0648\u0645"],
    M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062D\u062F", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064A\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"],
    y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062D\u062F", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064A\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064B\u0627", "%d \u0639\u0627\u0645"]
  },
      Ut = function Ut(r) {
    return function (e, a, t, s) {
      var n = Ct(e),
          d = Gt[r][Ct(e)];
      return 2 === n && (d = d[a ? 0 : 1]), d.replace(/%d/i, e);
    };
  },
      Vt = ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"];

  l.defineLocale("ar-ly", {
    months: Vt,
    monthsShort: Vt,
    weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"),
    weekdaysShort: "\u0623\u062D\u062F_\u0625\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"),
    weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "D/\u200FM/\u200FYYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0635|\u0645/,
    isPM: function isPM(e) {
      return "\u0645" === e;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0635" : "\u0645";
    },
    calendar: {
      sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextDay: "[\u063A\u062F\u064B\u0627 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextWeek: "dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastWeek: "dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u0628\u0639\u062F %s",
      past: "\u0645\u0646\u0630 %s",
      s: Ut("s"),
      ss: Ut("s"),
      m: Ut("m"),
      mm: Ut("m"),
      h: Ut("h"),
      hh: Ut("h"),
      d: Ut("d"),
      dd: Ut("d"),
      M: Ut("M"),
      MM: Ut("M"),
      y: Ut("y"),
      yy: Ut("y")
    },
    preparse: function preparse(e) {
      return e.replace(/\u060c/g, ",");
    },
    postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return It[e];
      }).replace(/,/g, "\u060C");
    },
    week: {
      dow: 6,
      doy: 12
    }
  }), l.defineLocale("ar-ma", {
    months: "\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648\u0632_\u063A\u0634\u062A_\u0634\u062A\u0646\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062F\u062C\u0646\u0628\u0631".split("_"),
    monthsShort: "\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648\u0632_\u063A\u0634\u062A_\u0634\u062A\u0646\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062F\u062C\u0646\u0628\u0631".split("_"),
    weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062A\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"),
    weekdaysShort: "\u0627\u062D\u062F_\u0627\u062A\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"),
    weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextDay: "[\u063A\u062F\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u0641\u064A %s",
      past: "\u0645\u0646\u0630 %s",
      s: "\u062B\u0648\u0627\u0646",
      ss: "%d \u062B\u0627\u0646\u064A\u0629",
      m: "\u062F\u0642\u064A\u0642\u0629",
      mm: "%d \u062F\u0642\u0627\u0626\u0642",
      h: "\u0633\u0627\u0639\u0629",
      hh: "%d \u0633\u0627\u0639\u0627\u062A",
      d: "\u064A\u0648\u0645",
      dd: "%d \u0623\u064A\u0627\u0645",
      M: "\u0634\u0647\u0631",
      MM: "%d \u0623\u0634\u0647\u0631",
      y: "\u0633\u0646\u0629",
      yy: "%d \u0633\u0646\u0648\u0627\u062A"
    },
    week: {
      dow: 6,
      doy: 12
    }
  });
  var Kt = {
    1: "\u0661",
    2: "\u0662",
    3: "\u0663",
    4: "\u0664",
    5: "\u0665",
    6: "\u0666",
    7: "\u0667",
    8: "\u0668",
    9: "\u0669",
    0: "\u0660"
  },
      $t = {
    "\u0661": "1",
    "\u0662": "2",
    "\u0663": "3",
    "\u0664": "4",
    "\u0665": "5",
    "\u0666": "6",
    "\u0667": "7",
    "\u0668": "8",
    "\u0669": "9",
    "\u0660": "0"
  };
  l.defineLocale("ar-sa", {
    months: "\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A\u0648_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648_\u0623\u063A\u0633\u0637\u0633_\u0633\u0628\u062A\u0645\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062F\u064A\u0633\u0645\u0628\u0631".split("_"),
    monthsShort: "\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A\u0648_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648_\u0623\u063A\u0633\u0637\u0633_\u0633\u0628\u062A\u0645\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062F\u064A\u0633\u0645\u0628\u0631".split("_"),
    weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"),
    weekdaysShort: "\u0623\u062D\u062F_\u0625\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"),
    weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0635|\u0645/,
    isPM: function isPM(e) {
      return "\u0645" === e;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0635" : "\u0645";
    },
    calendar: {
      sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextDay: "[\u063A\u062F\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u0641\u064A %s",
      past: "\u0645\u0646\u0630 %s",
      s: "\u062B\u0648\u0627\u0646",
      ss: "%d \u062B\u0627\u0646\u064A\u0629",
      m: "\u062F\u0642\u064A\u0642\u0629",
      mm: "%d \u062F\u0642\u0627\u0626\u0642",
      h: "\u0633\u0627\u0639\u0629",
      hh: "%d \u0633\u0627\u0639\u0627\u062A",
      d: "\u064A\u0648\u0645",
      dd: "%d \u0623\u064A\u0627\u0645",
      M: "\u0634\u0647\u0631",
      MM: "%d \u0623\u0634\u0647\u0631",
      y: "\u0633\u0646\u0629",
      yy: "%d \u0633\u0646\u0648\u0627\u062A"
    },
    preparse: function preparse(e) {
      return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (e) {
        return $t[e];
      }).replace(/\u060c/g, ",");
    },
    postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return Kt[e];
      }).replace(/,/g, "\u060C");
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), l.defineLocale("ar-tn", {
    months: "\u062C\u0627\u0646\u0641\u064A_\u0641\u064A\u0641\u0631\u064A_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064A\u0644_\u0645\u0627\u064A_\u062C\u0648\u0627\u0646_\u062C\u0648\u064A\u0644\u064A\u0629_\u0623\u0648\u062A_\u0633\u0628\u062A\u0645\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062F\u064A\u0633\u0645\u0628\u0631".split("_"),
    monthsShort: "\u062C\u0627\u0646\u0641\u064A_\u0641\u064A\u0641\u0631\u064A_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064A\u0644_\u0645\u0627\u064A_\u062C\u0648\u0627\u0646_\u062C\u0648\u064A\u0644\u064A\u0629_\u0623\u0648\u062A_\u0633\u0628\u062A\u0645\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062F\u064A\u0633\u0645\u0628\u0631".split("_"),
    weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"),
    weekdaysShort: "\u0623\u062D\u062F_\u0625\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"),
    weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextDay: "[\u063A\u062F\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u0641\u064A %s",
      past: "\u0645\u0646\u0630 %s",
      s: "\u062B\u0648\u0627\u0646",
      ss: "%d \u062B\u0627\u0646\u064A\u0629",
      m: "\u062F\u0642\u064A\u0642\u0629",
      mm: "%d \u062F\u0642\u0627\u0626\u0642",
      h: "\u0633\u0627\u0639\u0629",
      hh: "%d \u0633\u0627\u0639\u0627\u062A",
      d: "\u064A\u0648\u0645",
      dd: "%d \u0623\u064A\u0627\u0645",
      M: "\u0634\u0647\u0631",
      MM: "%d \u0623\u0634\u0647\u0631",
      y: "\u0633\u0646\u0629",
      yy: "%d \u0633\u0646\u0648\u0627\u062A"
    },
    week: {
      dow: 1,
      doy: 4
    }
  });

  var Zt = {
    1: "\u0661",
    2: "\u0662",
    3: "\u0663",
    4: "\u0664",
    5: "\u0665",
    6: "\u0666",
    7: "\u0667",
    8: "\u0668",
    9: "\u0669",
    0: "\u0660"
  },
      Bt = {
    "\u0661": "1",
    "\u0662": "2",
    "\u0663": "3",
    "\u0664": "4",
    "\u0665": "5",
    "\u0666": "6",
    "\u0667": "7",
    "\u0668": "8",
    "\u0669": "9",
    "\u0660": "0"
  },
      qt = function qt(e) {
    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5;
  },
      Qt = {
    s: ["\u0623\u0642\u0644 \u0645\u0646 \u062B\u0627\u0646\u064A\u0629", "\u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629", ["\u062B\u0627\u0646\u064A\u062A\u0627\u0646", "\u062B\u0627\u0646\u064A\u062A\u064A\u0646"], "%d \u062B\u0648\u0627\u0646", "%d \u062B\u0627\u0646\u064A\u0629", "%d \u062B\u0627\u0646\u064A\u0629"],
    m: ["\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u0629", "\u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629", ["\u062F\u0642\u064A\u0642\u062A\u0627\u0646", "\u062F\u0642\u064A\u0642\u062A\u064A\u0646"], "%d \u062F\u0642\u0627\u0626\u0642", "%d \u062F\u0642\u064A\u0642\u0629", "%d \u062F\u0642\u064A\u0642\u0629"],
    h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629", ["\u0633\u0627\u0639\u062A\u0627\u0646", "\u0633\u0627\u0639\u062A\u064A\u0646"], "%d \u0633\u0627\u0639\u0627\u062A", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"],
    d: ["\u0623\u0642\u0644 \u0645\u0646 \u064A\u0648\u0645", "\u064A\u0648\u0645 \u0648\u0627\u062D\u062F", ["\u064A\u0648\u0645\u0627\u0646", "\u064A\u0648\u0645\u064A\u0646"], "%d \u0623\u064A\u0627\u0645", "%d \u064A\u0648\u0645\u064B\u0627", "%d \u064A\u0648\u0645"],
    M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062D\u062F", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064A\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"],
    y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062D\u062F", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064A\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064B\u0627", "%d \u0639\u0627\u0645"]
  },
      Xt = function Xt(r) {
    return function (e, a, t, s) {
      var n = qt(e),
          d = Qt[r][qt(e)];
      return 2 === n && (d = d[a ? 0 : 1]), d.replace(/%d/i, e);
    };
  },
      es = ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"];

  l.defineLocale("ar", {
    months: es,
    monthsShort: es,
    weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"),
    weekdaysShort: "\u0623\u062D\u062F_\u0625\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"),
    weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "D/\u200FM/\u200FYYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0635|\u0645/,
    isPM: function isPM(e) {
      return "\u0645" === e;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0635" : "\u0645";
    },
    calendar: {
      sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextDay: "[\u063A\u062F\u064B\u0627 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      nextWeek: "dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      lastWeek: "dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u0628\u0639\u062F %s",
      past: "\u0645\u0646\u0630 %s",
      s: Xt("s"),
      ss: Xt("s"),
      m: Xt("m"),
      mm: Xt("m"),
      h: Xt("h"),
      hh: Xt("h"),
      d: Xt("d"),
      dd: Xt("d"),
      M: Xt("M"),
      MM: Xt("M"),
      y: Xt("y"),
      yy: Xt("y")
    },
    preparse: function preparse(e) {
      return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (e) {
        return Bt[e];
      }).replace(/\u060c/g, ",");
    },
    postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return Zt[e];
      }).replace(/,/g, "\u060C");
    },
    week: {
      dow: 6,
      doy: 12
    }
  });
  var as = {
    1: "-inci",
    5: "-inci",
    8: "-inci",
    70: "-inci",
    80: "-inci",
    2: "-nci",
    7: "-nci",
    20: "-nci",
    50: "-nci",
    3: "-\xfcnc\xfc",
    4: "-\xfcnc\xfc",
    100: "-\xfcnc\xfc",
    6: "-nc\u0131",
    9: "-uncu",
    10: "-uncu",
    30: "-uncu",
    60: "-\u0131nc\u0131",
    90: "-\u0131nc\u0131"
  };

  function ts(e, a, t) {
    var s, n;
    return "m" === t ? a ? "\u0445\u0432\u0456\u043B\u0456\u043D\u0430" : "\u0445\u0432\u0456\u043B\u0456\u043D\u0443" : "h" === t ? a ? "\u0433\u0430\u0434\u0437\u0456\u043D\u0430" : "\u0433\u0430\u0434\u0437\u0456\u043D\u0443" : e + " " + (s = +e, n = {
      ss: a ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434" : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434",
      mm: a ? "\u0445\u0432\u0456\u043B\u0456\u043D\u0430_\u0445\u0432\u0456\u043B\u0456\u043D\u044B_\u0445\u0432\u0456\u043B\u0456\u043D" : "\u0445\u0432\u0456\u043B\u0456\u043D\u0443_\u0445\u0432\u0456\u043B\u0456\u043D\u044B_\u0445\u0432\u0456\u043B\u0456\u043D",
      hh: a ? "\u0433\u0430\u0434\u0437\u0456\u043D\u0430_\u0433\u0430\u0434\u0437\u0456\u043D\u044B_\u0433\u0430\u0434\u0437\u0456\u043D" : "\u0433\u0430\u0434\u0437\u0456\u043D\u0443_\u0433\u0430\u0434\u0437\u0456\u043D\u044B_\u0433\u0430\u0434\u0437\u0456\u043D",
      dd: "\u0434\u0437\u0435\u043D\u044C_\u0434\u043D\u0456_\u0434\u0437\u0451\u043D",
      MM: "\u043C\u0435\u0441\u044F\u0446_\u043C\u0435\u0441\u044F\u0446\u044B_\u043C\u0435\u0441\u044F\u0446\u0430\u045E",
      yy: "\u0433\u043E\u0434_\u0433\u0430\u0434\u044B_\u0433\u0430\u0434\u043E\u045E"
    }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2]);
  }

  l.defineLocale("az", {
    months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
    monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
    weekdays: "Bazar_Bazar ert\u0259si_\xC7\u0259r\u015F\u0259nb\u0259 ax\u015Fam\u0131_\xC7\u0259r\u015F\u0259nb\u0259_C\xFCm\u0259 ax\u015Fam\u0131_C\xFCm\u0259_\u015E\u0259nb\u0259".split("_"),
    weekdaysShort: "Baz_BzE_\xC7Ax_\xC7\u0259r_CAx_C\xFCm_\u015E\u0259n".split("_"),
    weekdaysMin: "Bz_BE_\xC7A_\xC7\u0259_CA_C\xFC_\u015E\u0259".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[bug\xfcn saat] LT",
      nextDay: "[sabah saat] LT",
      nextWeek: "[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT",
      lastDay: "[d\xFCn\u0259n] LT",
      lastWeek: "[ke\xE7\u0259n h\u0259ft\u0259] dddd [saat] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s sonra",
      past: "%s \u0259vv\u0259l",
      s: "birne\xE7\u0259 saniy\u0259",
      ss: "%d saniy\u0259",
      m: "bir d\u0259qiq\u0259",
      mm: "%d d\u0259qiq\u0259",
      h: "bir saat",
      hh: "%d saat",
      d: "bir g\xfcn",
      dd: "%d g\xfcn",
      M: "bir ay",
      MM: "%d ay",
      y: "bir il",
      yy: "%d il"
    },
    meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,
    isPM: function isPM(e) {
      return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(e);
    },
    meridiem: function meridiem(e, a, t) {
      return e < 4 ? "gec\u0259" : e < 12 ? "s\u0259h\u0259r" : e < 17 ? "g\xfcnd\xfcz" : "ax\u015Fam";
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,
    ordinal: function ordinal(e) {
      if (0 === e) return e + "-\u0131nc\u0131";
      var a = e % 10;
      return e + (as[a] || as[e % 100 - a] || as[100 <= e ? 100 : null]);
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("be", {
    months: {
      format: "\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044F_\u043B\u044E\u0442\u0430\u0433\u0430_\u0441\u0430\u043A\u0430\u0432\u0456\u043A\u0430_\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A\u0430_\u0442\u0440\u0430\u045E\u043D\u044F_\u0447\u044D\u0440\u0432\u0435\u043D\u044F_\u043B\u0456\u043F\u0435\u043D\u044F_\u0436\u043D\u0456\u045E\u043D\u044F_\u0432\u0435\u0440\u0430\u0441\u043D\u044F_\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A\u0430_\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434\u0430_\u0441\u043D\u0435\u0436\u043D\u044F".split("_"),
      standalone: "\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044C_\u043B\u044E\u0442\u044B_\u0441\u0430\u043A\u0430\u0432\u0456\u043A_\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A_\u0442\u0440\u0430\u0432\u0435\u043D\u044C_\u0447\u044D\u0440\u0432\u0435\u043D\u044C_\u043B\u0456\u043F\u0435\u043D\u044C_\u0436\u043D\u0456\u0432\u0435\u043D\u044C_\u0432\u0435\u0440\u0430\u0441\u0435\u043D\u044C_\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A_\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434_\u0441\u043D\u0435\u0436\u0430\u043D\u044C".split("_")
    },
    monthsShort: "\u0441\u0442\u0443\u0434_\u043B\u044E\u0442_\u0441\u0430\u043A_\u043A\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044D\u0440\u0432_\u043B\u0456\u043F_\u0436\u043D\u0456\u0432_\u0432\u0435\u0440_\u043A\u0430\u0441\u0442_\u043B\u0456\u0441\u0442_\u0441\u043D\u0435\u0436".split("_"),
    weekdays: {
      format: "\u043D\u044F\u0434\u0437\u0435\u043B\u044E_\u043F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A_\u0430\u045E\u0442\u043E\u0440\u0430\u043A_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043F\u044F\u0442\u043D\u0456\u0446\u0443_\u0441\u0443\u0431\u043E\u0442\u0443".split("_"),
      standalone: "\u043D\u044F\u0434\u0437\u0435\u043B\u044F_\u043F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A_\u0430\u045E\u0442\u043E\u0440\u0430\u043A_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043F\u044F\u0442\u043D\u0456\u0446\u0430_\u0441\u0443\u0431\u043E\u0442\u0430".split("_"),
      isFormat: /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/
    },
    weekdaysShort: "\u043D\u0434_\u043F\u043D_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043F\u0442_\u0441\u0431".split("_"),
    weekdaysMin: "\u043D\u0434_\u043F\u043D_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043F\u0442_\u0441\u0431".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY \u0433.",
      LLL: "D MMMM YYYY \u0433., HH:mm",
      LLLL: "dddd, D MMMM YYYY \u0433., HH:mm"
    },
    calendar: {
      sameDay: "[\u0421\u0451\u043D\u043D\u044F \u045E] LT",
      nextDay: "[\u0417\u0430\u045E\u0442\u0440\u0430 \u045E] LT",
      lastDay: "[\u0423\u0447\u043E\u0440\u0430 \u045E] LT",
      nextWeek: function nextWeek() {
        return "[\u0423] dddd [\u045E] LT";
      },
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 5:
          case 6:
            return "[\u0423 \u043C\u0456\u043D\u0443\u043B\u0443\u044E] dddd [\u045E] LT";

          case 1:
          case 2:
          case 4:
            return "[\u0423 \u043C\u0456\u043D\u0443\u043B\u044B] dddd [\u045E] LT";
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "\u043F\u0440\u0430\u0437 %s",
      past: "%s \u0442\u0430\u043C\u0443",
      s: "\u043D\u0435\u043A\u0430\u043B\u044C\u043A\u0456 \u0441\u0435\u043A\u0443\u043D\u0434",
      m: ts,
      mm: ts,
      h: ts,
      hh: ts,
      d: "\u0434\u0437\u0435\u043D\u044C",
      dd: ts,
      M: "\u043C\u0435\u0441\u044F\u0446",
      MM: ts,
      y: "\u0433\u043E\u0434",
      yy: ts
    },
    meridiemParse: /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,
    isPM: function isPM(e) {
      return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e);
    },
    meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u043D\u043E\u0447\u044B" : e < 12 ? "\u0440\u0430\u043D\u0456\u0446\u044B" : e < 17 ? "\u0434\u043D\u044F" : "\u0432\u0435\u0447\u0430\u0440\u0430";
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
    ordinal: function ordinal(e, a) {
      switch (a) {
        case "M":
        case "d":
        case "DDD":
        case "w":
        case "W":
          return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-\u044B" : e + "-\u0456";

        case "D":
          return e + "-\u0433\u0430";

        default:
          return e;
      }
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("bg", {
    months: "\u044F\u043D\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438_\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438_\u043D\u043E\u0435\u043C\u0432\u0440\u0438_\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438".split("_"),
    monthsShort: "\u044F\u043D\u0440_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433_\u0441\u0435\u043F_\u043E\u043A\u0442_\u043D\u043E\u0435_\u0434\u0435\u043A".split("_"),
    weekdays: "\u043D\u0435\u0434\u0435\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u044F\u0434\u0430_\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A_\u043F\u0435\u0442\u044A\u043A_\u0441\u044A\u0431\u043E\u0442\u0430".split("_"),
    weekdaysShort: "\u043D\u0435\u0434_\u043F\u043E\u043D_\u0432\u0442\u043E_\u0441\u0440\u044F_\u0447\u0435\u0442_\u043F\u0435\u0442_\u0441\u044A\u0431".split("_"),
    weekdaysMin: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "D.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY H:mm",
      LLLL: "dddd, D MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[\u0414\u043D\u0435\u0441 \u0432] LT",
      nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT",
      nextWeek: "dddd [\u0432] LT",
      lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 6:
            return "[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0430\u0442\u0430] dddd [\u0432] LT";

          case 1:
          case 2:
          case 4:
          case 5:
            return "[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0438\u044F] dddd [\u0432] LT";
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "\u0441\u043B\u0435\u0434 %s",
      past: "\u043F\u0440\u0435\u0434\u0438 %s",
      s: "\u043D\u044F\u043A\u043E\u043B\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
      ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
      m: "\u043C\u0438\u043D\u0443\u0442\u0430",
      mm: "%d \u043C\u0438\u043D\u0443\u0442\u0438",
      h: "\u0447\u0430\u0441",
      hh: "%d \u0447\u0430\u0441\u0430",
      d: "\u0434\u0435\u043D",
      dd: "%d \u0434\u043D\u0438",
      M: "\u043C\u0435\u0441\u0435\u0446",
      MM: "%d \u043C\u0435\u0441\u0435\u0446\u0430",
      y: "\u0433\u043E\u0434\u0438\u043D\u0430",
      yy: "%d \u0433\u043E\u0434\u0438\u043D\u0438"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
    ordinal: function ordinal(e) {
      var a = e % 10,
          t = e % 100;
      return 0 === e ? e + "-\u0435\u0432" : 0 === t ? e + "-\u0435\u043D" : 10 < t && t < 20 ? e + "-\u0442\u0438" : 1 === a ? e + "-\u0432\u0438" : 2 === a ? e + "-\u0440\u0438" : 7 === a || 8 === a ? e + "-\u043C\u0438" : e + "-\u0442\u0438";
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("bm", {
    months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M\u025Bkalo_Zuw\u025Bnkalo_Zuluyekalo_Utikalo_S\u025Btanburukalo_\u0254kut\u0254burukalo_Nowanburukalo_Desanburukalo".split("_"),
    monthsShort: "Zan_Few_Mar_Awi_M\u025B_Zuw_Zul_Uti_S\u025Bt_\u0254ku_Now_Des".split("_"),
    weekdays: "Kari_Nt\u025Bn\u025Bn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
    weekdaysShort: "Kar_Nt\u025B_Tar_Ara_Ala_Jum_Sib".split("_"),
    weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "MMMM [tile] D [san] YYYY",
      LLL: "MMMM [tile] D [san] YYYY [l\u025Br\u025B] HH:mm",
      LLLL: "dddd MMMM [tile] D [san] YYYY [l\u025Br\u025B] HH:mm"
    },
    calendar: {
      sameDay: "[Bi l\u025Br\u025B] LT",
      nextDay: "[Sini l\u025Br\u025B] LT",
      nextWeek: "dddd [don l\u025Br\u025B] LT",
      lastDay: "[Kunu l\u025Br\u025B] LT",
      lastWeek: "dddd [t\u025Bm\u025Bnen l\u025Br\u025B] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s k\u0254n\u0254",
      past: "a b\u025B %s b\u0254",
      s: "sanga dama dama",
      ss: "sekondi %d",
      m: "miniti kelen",
      mm: "miniti %d",
      h: "l\u025Br\u025B kelen",
      hh: "l\u025Br\u025B %d",
      d: "tile kelen",
      dd: "tile %d",
      M: "kalo kelen",
      MM: "kalo %d",
      y: "san kelen",
      yy: "san %d"
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var ss = {
    1: "\u09E7",
    2: "\u09E8",
    3: "\u09E9",
    4: "\u09EA",
    5: "\u09EB",
    6: "\u09EC",
    7: "\u09ED",
    8: "\u09EE",
    9: "\u09EF",
    0: "\u09E6"
  },
      ns = {
    "\u09E7": "1",
    "\u09E8": "2",
    "\u09E9": "3",
    "\u09EA": "4",
    "\u09EB": "5",
    "\u09EC": "6",
    "\u09ED": "7",
    "\u09EE": "8",
    "\u09EF": "9",
    "\u09E6": "0"
  };
  l.defineLocale("bn", {
    months: "\u099C\u09BE\u09A8\u09C1\u09DF\u09BE\u09B0\u09C0_\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1\u09DF\u09BE\u09B0\u09BF_\u09AE\u09BE\u09B0\u09CD\u099A_\u098F\u09AA\u09CD\u09B0\u09BF\u09B2_\u09AE\u09C7_\u099C\u09C1\u09A8_\u099C\u09C1\u09B2\u09BE\u0987_\u0986\u0997\u09B8\u09CD\u099F_\u09B8\u09C7\u09AA\u09CD\u099F\u09C7\u09AE\u09CD\u09AC\u09B0_\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09B0_\u09A8\u09AD\u09C7\u09AE\u09CD\u09AC\u09B0_\u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0".split("_"),
    monthsShort: "\u099C\u09BE\u09A8\u09C1_\u09AB\u09C7\u09AC_\u09AE\u09BE\u09B0\u09CD\u099A_\u098F\u09AA\u09CD\u09B0_\u09AE\u09C7_\u099C\u09C1\u09A8_\u099C\u09C1\u09B2_\u0986\u0997_\u09B8\u09C7\u09AA\u09CD\u099F_\u0985\u0995\u09CD\u099F\u09CB_\u09A8\u09AD\u09C7_\u09A1\u09BF\u09B8\u09C7".split("_"),
    weekdays: "\u09B0\u09AC\u09BF\u09AC\u09BE\u09B0_\u09B8\u09CB\u09AE\u09AC\u09BE\u09B0_\u09AE\u0999\u09CD\u0997\u09B2\u09AC\u09BE\u09B0_\u09AC\u09C1\u09A7\u09AC\u09BE\u09B0_\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF\u09AC\u09BE\u09B0_\u09B6\u09C1\u0995\u09CD\u09B0\u09AC\u09BE\u09B0_\u09B6\u09A8\u09BF\u09AC\u09BE\u09B0".split("_"),
    weekdaysShort: "\u09B0\u09AC\u09BF_\u09B8\u09CB\u09AE_\u09AE\u0999\u09CD\u0997\u09B2_\u09AC\u09C1\u09A7_\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF_\u09B6\u09C1\u0995\u09CD\u09B0_\u09B6\u09A8\u09BF".split("_"),
    weekdaysMin: "\u09B0\u09AC\u09BF_\u09B8\u09CB\u09AE_\u09AE\u0999\u09CD\u0997_\u09AC\u09C1\u09A7_\u09AC\u09C3\u09B9\u0983_\u09B6\u09C1\u0995\u09CD\u09B0_\u09B6\u09A8\u09BF".split("_"),
    longDateFormat: {
      LT: "A h:mm \u09B8\u09AE\u09DF",
      LTS: "A h:mm:ss \u09B8\u09AE\u09DF",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm \u09B8\u09AE\u09DF",
      LLLL: "dddd, D MMMM YYYY, A h:mm \u09B8\u09AE\u09DF"
    },
    calendar: {
      sameDay: "[\u0986\u099C] LT",
      nextDay: "[\u0986\u0997\u09BE\u09AE\u09C0\u0995\u09BE\u09B2] LT",
      nextWeek: "dddd, LT",
      lastDay: "[\u0997\u09A4\u0995\u09BE\u09B2] LT",
      lastWeek: "[\u0997\u09A4] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u09AA\u09B0\u09C7",
      past: "%s \u0986\u0997\u09C7",
      s: "\u0995\u09DF\u09C7\u0995 \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1",
      ss: "%d \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1",
      m: "\u098F\u0995 \u09AE\u09BF\u09A8\u09BF\u099F",
      mm: "%d \u09AE\u09BF\u09A8\u09BF\u099F",
      h: "\u098F\u0995 \u0998\u09A8\u09CD\u099F\u09BE",
      hh: "%d \u0998\u09A8\u09CD\u099F\u09BE",
      d: "\u098F\u0995 \u09A6\u09BF\u09A8",
      dd: "%d \u09A6\u09BF\u09A8",
      M: "\u098F\u0995 \u09AE\u09BE\u09B8",
      MM: "%d \u09AE\u09BE\u09B8",
      y: "\u098F\u0995 \u09AC\u099B\u09B0",
      yy: "%d \u09AC\u099B\u09B0"
    },
    preparse: function preparse(e) {
      return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, function (e) {
        return ns[e];
      });
    },
    postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return ss[e];
      });
    },
    meridiemParse: /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u09B0\u09BE\u09A4" === a && 4 <= e || "\u09A6\u09C1\u09AA\u09C1\u09B0" === a && e < 5 || "\u09AC\u09BF\u0995\u09BE\u09B2" === a ? e + 12 : e;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u09B0\u09BE\u09A4" : e < 10 ? "\u09B8\u0995\u09BE\u09B2" : e < 17 ? "\u09A6\u09C1\u09AA\u09C1\u09B0" : e < 20 ? "\u09AC\u09BF\u0995\u09BE\u09B2" : "\u09B0\u09BE\u09A4";
    },
    week: {
      dow: 0,
      doy: 6
    }
  });
  var ds = {
    1: "\u0F21",
    2: "\u0F22",
    3: "\u0F23",
    4: "\u0F24",
    5: "\u0F25",
    6: "\u0F26",
    7: "\u0F27",
    8: "\u0F28",
    9: "\u0F29",
    0: "\u0F20"
  },
      rs = {
    "\u0F21": "1",
    "\u0F22": "2",
    "\u0F23": "3",
    "\u0F24": "4",
    "\u0F25": "5",
    "\u0F26": "6",
    "\u0F27": "7",
    "\u0F28": "8",
    "\u0F29": "9",
    "\u0F20": "0"
  };

  function _s(e, a, t) {
    return e + " " + function (e, a) {
      if (2 === a) return function (e) {
        var a = {
          m: "v",
          b: "v",
          d: "z"
        };
        if (void 0 === a[e.charAt(0)]) return e;
        return a[e.charAt(0)] + e.substring(1);
      }(e);
      return e;
    }({
      mm: "munutenn",
      MM: "miz",
      dd: "devezh"
    }[t], e);
  }

  function is(e, a, t) {
    var s = e + " ";

    switch (t) {
      case "ss":
        return s += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";

      case "m":
        return a ? "jedna minuta" : "jedne minute";

      case "mm":
        return s += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";

      case "h":
        return a ? "jedan sat" : "jednog sata";

      case "hh":
        return s += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";

      case "dd":
        return s += 1 === e ? "dan" : "dana";

      case "MM":
        return s += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";

      case "yy":
        return s += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina";
    }
  }

  l.defineLocale("bo", {
    months: "\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F51\u0F44\u0F0B\u0F54\u0F7C_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F42\u0F66\u0F74\u0F58\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F5E\u0F72\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F63\u0F94\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F51\u0FB2\u0F74\u0F42\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F51\u0F74\u0F53\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F62\u0F92\u0FB1\u0F51\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F51\u0F42\u0F74\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F45\u0F72\u0F42\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54".split("_"),
    monthsShort: "\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F51\u0F44\u0F0B\u0F54\u0F7C_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F42\u0F66\u0F74\u0F58\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F5E\u0F72\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F63\u0F94\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F51\u0FB2\u0F74\u0F42\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F51\u0F74\u0F53\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F62\u0F92\u0FB1\u0F51\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F51\u0F42\u0F74\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F45\u0F72\u0F42\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54".split("_"),
    weekdays: "\u0F42\u0F5F\u0F60\u0F0B\u0F49\u0F72\u0F0B\u0F58\u0F0B_\u0F42\u0F5F\u0F60\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F0B_\u0F42\u0F5F\u0F60\u0F0B\u0F58\u0F72\u0F42\u0F0B\u0F51\u0F58\u0F62\u0F0B_\u0F42\u0F5F\u0F60\u0F0B\u0F63\u0FB7\u0F42\u0F0B\u0F54\u0F0B_\u0F42\u0F5F\u0F60\u0F0B\u0F55\u0F74\u0F62\u0F0B\u0F56\u0F74_\u0F42\u0F5F\u0F60\u0F0B\u0F54\u0F0B\u0F66\u0F44\u0F66\u0F0B_\u0F42\u0F5F\u0F60\u0F0B\u0F66\u0FA4\u0F7A\u0F53\u0F0B\u0F54\u0F0B".split("_"),
    weekdaysShort: "\u0F49\u0F72\u0F0B\u0F58\u0F0B_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B_\u0F58\u0F72\u0F42\u0F0B\u0F51\u0F58\u0F62\u0F0B_\u0F63\u0FB7\u0F42\u0F0B\u0F54\u0F0B_\u0F55\u0F74\u0F62\u0F0B\u0F56\u0F74_\u0F54\u0F0B\u0F66\u0F44\u0F66\u0F0B_\u0F66\u0FA4\u0F7A\u0F53\u0F0B\u0F54\u0F0B".split("_"),
    weekdaysMin: "\u0F49\u0F72\u0F0B\u0F58\u0F0B_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B_\u0F58\u0F72\u0F42\u0F0B\u0F51\u0F58\u0F62\u0F0B_\u0F63\u0FB7\u0F42\u0F0B\u0F54\u0F0B_\u0F55\u0F74\u0F62\u0F0B\u0F56\u0F74_\u0F54\u0F0B\u0F66\u0F44\u0F66\u0F0B_\u0F66\u0FA4\u0F7A\u0F53\u0F0B\u0F54\u0F0B".split("_"),
    longDateFormat: {
      LT: "A h:mm",
      LTS: "A h:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm",
      LLLL: "dddd, D MMMM YYYY, A h:mm"
    },
    calendar: {
      sameDay: "[\u0F51\u0F72\u0F0B\u0F62\u0F72\u0F44] LT",
      nextDay: "[\u0F66\u0F44\u0F0B\u0F49\u0F72\u0F53] LT",
      nextWeek: "[\u0F56\u0F51\u0F74\u0F53\u0F0B\u0F55\u0FB2\u0F42\u0F0B\u0F62\u0F97\u0F7A\u0F66\u0F0B\u0F58], LT",
      lastDay: "[\u0F41\u0F0B\u0F66\u0F44] LT",
      lastWeek: "[\u0F56\u0F51\u0F74\u0F53\u0F0B\u0F55\u0FB2\u0F42\u0F0B\u0F58\u0F50\u0F60\u0F0B\u0F58] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u0F63\u0F0B",
      past: "%s \u0F66\u0F94\u0F53\u0F0B\u0F63",
      s: "\u0F63\u0F58\u0F0B\u0F66\u0F44",
      ss: "%d \u0F66\u0F90\u0F62\u0F0B\u0F46\u0F0D",
      m: "\u0F66\u0F90\u0F62\u0F0B\u0F58\u0F0B\u0F42\u0F45\u0F72\u0F42",
      mm: "%d \u0F66\u0F90\u0F62\u0F0B\u0F58",
      h: "\u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51\u0F0B\u0F42\u0F45\u0F72\u0F42",
      hh: "%d \u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51",
      d: "\u0F49\u0F72\u0F53\u0F0B\u0F42\u0F45\u0F72\u0F42",
      dd: "%d \u0F49\u0F72\u0F53\u0F0B",
      M: "\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F42\u0F45\u0F72\u0F42",
      MM: "%d \u0F5F\u0FB3\u0F0B\u0F56",
      y: "\u0F63\u0F7C\u0F0B\u0F42\u0F45\u0F72\u0F42",
      yy: "%d \u0F63\u0F7C"
    },
    preparse: function preparse(e) {
      return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, function (e) {
        return rs[e];
      });
    },
    postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return ds[e];
      });
    },
    meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0F58\u0F5A\u0F53\u0F0B\u0F58\u0F7C" === a && 4 <= e || "\u0F49\u0F72\u0F53\u0F0B\u0F42\u0F74\u0F44" === a && e < 5 || "\u0F51\u0F42\u0F7C\u0F44\u0F0B\u0F51\u0F42" === a ? e + 12 : e;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0F58\u0F5A\u0F53\u0F0B\u0F58\u0F7C" : e < 10 ? "\u0F5E\u0F7C\u0F42\u0F66\u0F0B\u0F40\u0F66" : e < 17 ? "\u0F49\u0F72\u0F53\u0F0B\u0F42\u0F74\u0F44" : e < 20 ? "\u0F51\u0F42\u0F7C\u0F44\u0F0B\u0F51\u0F42" : "\u0F58\u0F5A\u0F53\u0F0B\u0F58\u0F7C";
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), l.defineLocale("br", {
    months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
    monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
    weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
    weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
    weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "h[e]mm A",
      LTS: "h[e]mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D [a viz] MMMM YYYY",
      LLL: "D [a viz] MMMM YYYY h[e]mm A",
      LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
    },
    calendar: {
      sameDay: "[Hiziv da] LT",
      nextDay: "[Warc'hoazh da] LT",
      nextWeek: "dddd [da] LT",
      lastDay: "[Dec'h da] LT",
      lastWeek: "dddd [paset da] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "a-benn %s",
      past: "%s 'zo",
      s: "un nebeud segondenno\xf9",
      ss: "%d eilenn",
      m: "ur vunutenn",
      mm: _s,
      h: "un eur",
      hh: "%d eur",
      d: "un devezh",
      dd: _s,
      M: "ur miz",
      MM: _s,
      y: "ur bloaz",
      yy: function yy(e) {
        switch (function e(a) {
          return 9 < a ? e(a % 10) : a;
        }(e)) {
          case 1:
          case 3:
          case 4:
          case 5:
          case 9:
            return e + " bloaz";

          default:
            return e + " vloaz";
        }
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/,
    ordinal: function ordinal(e) {
      return e + (1 === e ? "a\xf1" : "vet");
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("bs", {
    months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
    monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split("_"),
    weekdaysShort: "ned._pon._uto._sri._\u010Det._pet._sub.".split("_"),
    weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd, D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[danas u] LT",
      nextDay: "[sutra u] LT",
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return "[u] [nedjelju] [u] LT";

          case 3:
            return "[u] [srijedu] [u] LT";

          case 6:
            return "[u] [subotu] [u] LT";

          case 1:
          case 2:
          case 4:
          case 5:
            return "[u] dddd [u] LT";
        }
      },
      lastDay: "[ju\u010Der u] LT",
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
            return "[pro\u0161lu] dddd [u] LT";

          case 6:
            return "[pro\u0161le] [subote] [u] LT";

          case 1:
          case 2:
          case 4:
          case 5:
            return "[pro\u0161li] dddd [u] LT";
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "prije %s",
      s: "par sekundi",
      ss: is,
      m: is,
      mm: is,
      h: is,
      hh: is,
      d: "dan",
      dd: is,
      M: "mjesec",
      MM: is,
      y: "godinu",
      yy: is
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("ca", {
    months: {
      standalone: "gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
      format: "de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
      isFormat: /D[oD]?(\s)+MMMM/
    },
    monthsShort: "gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
    monthsParseExact: !0,
    weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
    weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
    weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM [de] YYYY",
      ll: "D MMM YYYY",
      LLL: "D MMMM [de] YYYY [a les] H:mm",
      lll: "D MMM YYYY, H:mm",
      LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
      llll: "ddd D MMM YYYY, H:mm"
    },
    calendar: {
      sameDay: function sameDay() {
        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      },
      nextDay: function nextDay() {
        return "[dem\xe0 a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      },
      nextWeek: function nextWeek() {
        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      },
      lastDay: function lastDay() {
        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      },
      lastWeek: function lastWeek() {
        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "d'aqu\xed %s",
      past: "fa %s",
      s: "uns segons",
      ss: "%d segons",
      m: "un minut",
      mm: "%d minuts",
      h: "una hora",
      hh: "%d hores",
      d: "un dia",
      dd: "%d dies",
      M: "un mes",
      MM: "%d mesos",
      y: "un any",
      yy: "%d anys"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/,
    ordinal: function ordinal(e, a) {
      var t = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "\xe8";
      return "w" !== a && "W" !== a || (t = "a"), e + t;
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var os = "leden_\xFAnor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\xE1\u0159\xED_\u0159\xEDjen_listopad_prosinec".split("_"),
      ms = "led_\xFAno_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\xE1\u0159_\u0159\xEDj_lis_pro".split("_");

  function us(e) {
    return 1 < e && e < 5 && 1 != ~~(e / 10);
  }

  function ls(e, a, t, s) {
    var n = e + " ";

    switch (t) {
      case "s":
        return a || s ? "p\xe1r sekund" : "p\xe1r sekundami";

      case "ss":
        return a || s ? n + (us(e) ? "sekundy" : "sekund") : n + "sekundami";
        break;

      case "m":
        return a ? "minuta" : s ? "minutu" : "minutou";

      case "mm":
        return a || s ? n + (us(e) ? "minuty" : "minut") : n + "minutami";
        break;

      case "h":
        return a ? "hodina" : s ? "hodinu" : "hodinou";

      case "hh":
        return a || s ? n + (us(e) ? "hodiny" : "hodin") : n + "hodinami";
        break;

      case "d":
        return a || s ? "den" : "dnem";

      case "dd":
        return a || s ? n + (us(e) ? "dny" : "dn\xed") : n + "dny";
        break;

      case "M":
        return a || s ? "m\u011Bs\xEDc" : "m\u011Bs\xEDcem";

      case "MM":
        return a || s ? n + (us(e) ? "m\u011Bs\xEDce" : "m\u011Bs\xEDc\u016F") : n + "m\u011Bs\xEDci";
        break;

      case "y":
        return a || s ? "rok" : "rokem";

      case "yy":
        return a || s ? n + (us(e) ? "roky" : "let") : n + "lety";
        break;
    }
  }

  function Ms(e, a, t, s) {
    var n = {
      m: ["eine Minute", "einer Minute"],
      h: ["eine Stunde", "einer Stunde"],
      d: ["ein Tag", "einem Tag"],
      dd: [e + " Tage", e + " Tagen"],
      M: ["ein Monat", "einem Monat"],
      MM: [e + " Monate", e + " Monaten"],
      y: ["ein Jahr", "einem Jahr"],
      yy: [e + " Jahre", e + " Jahren"]
    };
    return a ? n[t][0] : n[t][1];
  }

  function hs(e, a, t, s) {
    var n = {
      m: ["eine Minute", "einer Minute"],
      h: ["eine Stunde", "einer Stunde"],
      d: ["ein Tag", "einem Tag"],
      dd: [e + " Tage", e + " Tagen"],
      M: ["ein Monat", "einem Monat"],
      MM: [e + " Monate", e + " Monaten"],
      y: ["ein Jahr", "einem Jahr"],
      yy: [e + " Jahre", e + " Jahren"]
    };
    return a ? n[t][0] : n[t][1];
  }

  function Ls(e, a, t, s) {
    var n = {
      m: ["eine Minute", "einer Minute"],
      h: ["eine Stunde", "einer Stunde"],
      d: ["ein Tag", "einem Tag"],
      dd: [e + " Tage", e + " Tagen"],
      M: ["ein Monat", "einem Monat"],
      MM: [e + " Monate", e + " Monaten"],
      y: ["ein Jahr", "einem Jahr"],
      yy: [e + " Jahre", e + " Jahren"]
    };
    return a ? n[t][0] : n[t][1];
  }

  l.defineLocale("cs", {
    months: os,
    monthsShort: ms,
    monthsParse: function (e, a) {
      var t,
          s = [];

      for (t = 0; t < 12; t++) {
        s[t] = new RegExp("^" + e[t] + "$|^" + a[t] + "$", "i");
      }

      return s;
    }(os, ms),
    shortMonthsParse: function (e) {
      var a,
          t = [];

      for (a = 0; a < 12; a++) {
        t[a] = new RegExp("^" + e[a] + "$", "i");
      }

      return t;
    }(ms),
    longMonthsParse: function (e) {
      var a,
          t = [];

      for (a = 0; a < 12; a++) {
        t[a] = new RegExp("^" + e[a] + "$", "i");
      }

      return t;
    }(os),
    weekdays: "ned\u011Ble_pond\u011Bl\xED_\xFAter\xFD_st\u0159eda_\u010Dtvrtek_p\xE1tek_sobota".split("_"),
    weekdaysShort: "ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"),
    weekdaysMin: "ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd D. MMMM YYYY H:mm",
      l: "D. M. YYYY"
    },
    calendar: {
      sameDay: "[dnes v] LT",
      nextDay: "[z\xedtra v] LT",
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return "[v ned\u011Bli v] LT";

          case 1:
          case 2:
            return "[v] dddd [v] LT";

          case 3:
            return "[ve st\u0159edu v] LT";

          case 4:
            return "[ve \u010Dtvrtek v] LT";

          case 5:
            return "[v p\xe1tek v] LT";

          case 6:
            return "[v sobotu v] LT";
        }
      },
      lastDay: "[v\u010Dera v] LT",
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return "[minulou ned\u011Bli v] LT";

          case 1:
          case 2:
            return "[minul\xe9] dddd [v] LT";

          case 3:
            return "[minulou st\u0159edu v] LT";

          case 4:
          case 5:
            return "[minul\xfd] dddd [v] LT";

          case 6:
            return "[minulou sobotu v] LT";
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "p\u0159ed %s",
      s: ls,
      ss: ls,
      m: ls,
      mm: ls,
      h: ls,
      hh: ls,
      d: ls,
      dd: ls,
      M: ls,
      MM: ls,
      y: ls,
      yy: ls
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("cv", {
    months: "\u043A\u04D1\u0440\u043B\u0430\u0447_\u043D\u0430\u0440\u04D1\u0441_\u043F\u0443\u0448_\u0430\u043A\u0430_\u043C\u0430\u0439_\u04AB\u04D7\u0440\u0442\u043C\u0435_\u0443\u0442\u04D1_\u04AB\u0443\u0440\u043B\u0430_\u0430\u0432\u04D1\u043D_\u044E\u043F\u0430_\u0447\u04F3\u043A_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"),
    monthsShort: "\u043A\u04D1\u0440_\u043D\u0430\u0440_\u043F\u0443\u0448_\u0430\u043A\u0430_\u043C\u0430\u0439_\u04AB\u04D7\u0440_\u0443\u0442\u04D1_\u04AB\u0443\u0440_\u0430\u0432\u043D_\u044E\u043F\u0430_\u0447\u04F3\u043A_\u0440\u0430\u0448".split("_"),
    weekdays: "\u0432\u044B\u0440\u0441\u0430\u0440\u043D\u0438\u043A\u0443\u043D_\u0442\u0443\u043D\u0442\u0438\u043A\u0443\u043D_\u044B\u0442\u043B\u0430\u0440\u0438\u043A\u0443\u043D_\u044E\u043D\u043A\u0443\u043D_\u043A\u04D7\u04AB\u043D\u0435\u0440\u043D\u0438\u043A\u0443\u043D_\u044D\u0440\u043D\u0435\u043A\u0443\u043D_\u0448\u04D1\u043C\u0430\u0442\u043A\u0443\u043D".split("_"),
    weekdaysShort: "\u0432\u044B\u0440_\u0442\u0443\u043D_\u044B\u0442\u043B_\u044E\u043D_\u043A\u04D7\u04AB_\u044D\u0440\u043D_\u0448\u04D1\u043C".split("_"),
    weekdaysMin: "\u0432\u0440_\u0442\u043D_\u044B\u0442_\u044E\u043D_\u043A\u04AB_\u044D\u0440_\u0448\u043C".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD-MM-YYYY",
      LL: "YYYY [\u04AB\u0443\u043B\u0445\u0438] MMMM [\u0443\u0439\u04D1\u0445\u04D7\u043D] D[-\u043C\u04D7\u0448\u04D7]",
      LLL: "YYYY [\u04AB\u0443\u043B\u0445\u0438] MMMM [\u0443\u0439\u04D1\u0445\u04D7\u043D] D[-\u043C\u04D7\u0448\u04D7], HH:mm",
      LLLL: "dddd, YYYY [\u04AB\u0443\u043B\u0445\u0438] MMMM [\u0443\u0439\u04D1\u0445\u04D7\u043D] D[-\u043C\u04D7\u0448\u04D7], HH:mm"
    },
    calendar: {
      sameDay: "[\u041F\u0430\u044F\u043D] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
      nextDay: "[\u042B\u0440\u0430\u043D] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
      lastDay: "[\u04D6\u043D\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
      nextWeek: "[\u04AA\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
      lastWeek: "[\u0418\u0440\u0442\u043D\u04D7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
      sameElse: "L"
    },
    relativeTime: {
      future: function future(e) {
        return e + (/\u0441\u0435\u0445\u0435\u0442$/i.exec(e) ? "\u0440\u0435\u043D" : /\u04ab\u0443\u043b$/i.exec(e) ? "\u0442\u0430\u043D" : "\u0440\u0430\u043D");
      },
      past: "%s \u043A\u0430\u044F\u043B\u043B\u0430",
      s: "\u043F\u04D7\u0440-\u0438\u043A \u04AB\u0435\u043A\u043A\u0443\u043D\u0442",
      ss: "%d \u04AB\u0435\u043A\u043A\u0443\u043D\u0442",
      m: "\u043F\u04D7\u0440 \u043C\u0438\u043D\u0443\u0442",
      mm: "%d \u043C\u0438\u043D\u0443\u0442",
      h: "\u043F\u04D7\u0440 \u0441\u0435\u0445\u0435\u0442",
      hh: "%d \u0441\u0435\u0445\u0435\u0442",
      d: "\u043F\u04D7\u0440 \u043A\u0443\u043D",
      dd: "%d \u043A\u0443\u043D",
      M: "\u043F\u04D7\u0440 \u0443\u0439\u04D1\u0445",
      MM: "%d \u0443\u0439\u04D1\u0445",
      y: "\u043F\u04D7\u0440 \u04AB\u0443\u043B",
      yy: "%d \u04AB\u0443\u043B"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-\u043c\u04d7\u0448/,
    ordinal: "%d-\u043C\u04D7\u0448",
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("cy", {
    months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
    monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
    weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
    weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
    weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Heddiw am] LT",
      nextDay: "[Yfory am] LT",
      nextWeek: "dddd [am] LT",
      lastDay: "[Ddoe am] LT",
      lastWeek: "dddd [diwethaf am] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "mewn %s",
      past: "%s yn \xf4l",
      s: "ychydig eiliadau",
      ss: "%d eiliad",
      m: "munud",
      mm: "%d munud",
      h: "awr",
      hh: "%d awr",
      d: "diwrnod",
      dd: "%d diwrnod",
      M: "mis",
      MM: "%d mis",
      y: "blwyddyn",
      yy: "%d flynedd"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
    ordinal: function ordinal(e) {
      var a = "";
      return 20 < e ? a = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : 0 < e && (a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + a;
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("da", {
    months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
    weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
    weekdaysShort: "s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"),
    weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY HH:mm",
      LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
    },
    calendar: {
      sameDay: "[i dag kl.] LT",
      nextDay: "[i morgen kl.] LT",
      nextWeek: "p\xe5 dddd [kl.] LT",
      lastDay: "[i g\xe5r kl.] LT",
      lastWeek: "[i] dddd[s kl.] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "om %s",
      past: "%s siden",
      s: "f\xe5 sekunder",
      ss: "%d sekunder",
      m: "et minut",
      mm: "%d minutter",
      h: "en time",
      hh: "%d timer",
      d: "en dag",
      dd: "%d dage",
      M: "en m\xe5ned",
      MM: "%d m\xe5neder",
      y: "et \xe5r",
      yy: "%d \xe5r"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("de-at", {
    months: "J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort: "J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
    monthsParseExact: !0,
    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY HH:mm",
      LLLL: "dddd, D. MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[heute um] LT [Uhr]",
      sameElse: "L",
      nextDay: "[morgen um] LT [Uhr]",
      nextWeek: "dddd [um] LT [Uhr]",
      lastDay: "[gestern um] LT [Uhr]",
      lastWeek: "[letzten] dddd [um] LT [Uhr]"
    },
    relativeTime: {
      future: "in %s",
      past: "vor %s",
      s: "ein paar Sekunden",
      ss: "%d Sekunden",
      m: Ms,
      mm: "%d Minuten",
      h: Ms,
      hh: "%d Stunden",
      d: Ms,
      dd: Ms,
      M: Ms,
      MM: Ms,
      y: Ms,
      yy: Ms
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("de-ch", {
    months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
    monthsParseExact: !0,
    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
    weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY HH:mm",
      LLLL: "dddd, D. MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[heute um] LT [Uhr]",
      sameElse: "L",
      nextDay: "[morgen um] LT [Uhr]",
      nextWeek: "dddd [um] LT [Uhr]",
      lastDay: "[gestern um] LT [Uhr]",
      lastWeek: "[letzten] dddd [um] LT [Uhr]"
    },
    relativeTime: {
      future: "in %s",
      past: "vor %s",
      s: "ein paar Sekunden",
      ss: "%d Sekunden",
      m: hs,
      mm: "%d Minuten",
      h: hs,
      hh: "%d Stunden",
      d: hs,
      dd: hs,
      M: hs,
      MM: hs,
      y: hs,
      yy: hs
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("de", {
    months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
    monthsParseExact: !0,
    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY HH:mm",
      LLLL: "dddd, D. MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[heute um] LT [Uhr]",
      sameElse: "L",
      nextDay: "[morgen um] LT [Uhr]",
      nextWeek: "dddd [um] LT [Uhr]",
      lastDay: "[gestern um] LT [Uhr]",
      lastWeek: "[letzten] dddd [um] LT [Uhr]"
    },
    relativeTime: {
      future: "in %s",
      past: "vor %s",
      s: "ein paar Sekunden",
      ss: "%d Sekunden",
      m: Ls,
      mm: "%d Minuten",
      h: Ls,
      hh: "%d Stunden",
      d: Ls,
      dd: Ls,
      M: Ls,
      MM: Ls,
      y: Ls,
      yy: Ls
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  });
  var cs = ["\u0796\u07AC\u0782\u07AA\u0787\u07A6\u0783\u07A9", "\u078A\u07AC\u0784\u07B0\u0783\u07AA\u0787\u07A6\u0783\u07A9", "\u0789\u07A7\u0783\u07A8\u0797\u07AA", "\u0787\u07AD\u0795\u07B0\u0783\u07A9\u078D\u07AA", "\u0789\u07AD", "\u0796\u07AB\u0782\u07B0", "\u0796\u07AA\u078D\u07A6\u0787\u07A8", "\u0787\u07AF\u078E\u07A6\u0790\u07B0\u0793\u07AA", "\u0790\u07AC\u0795\u07B0\u0793\u07AC\u0789\u07B0\u0784\u07A6\u0783\u07AA", "\u0787\u07AE\u0786\u07B0\u0793\u07AF\u0784\u07A6\u0783\u07AA", "\u0782\u07AE\u0788\u07AC\u0789\u07B0\u0784\u07A6\u0783\u07AA", "\u0791\u07A8\u0790\u07AC\u0789\u07B0\u0784\u07A6\u0783\u07AA"],
      Ys = ["\u0787\u07A7\u078B\u07A8\u0787\u07B0\u078C\u07A6", "\u0780\u07AF\u0789\u07A6", "\u0787\u07A6\u0782\u07B0\u078E\u07A7\u0783\u07A6", "\u0784\u07AA\u078B\u07A6", "\u0784\u07AA\u0783\u07A7\u0790\u07B0\u078A\u07A6\u078C\u07A8", "\u0780\u07AA\u0786\u07AA\u0783\u07AA", "\u0780\u07AE\u0782\u07A8\u0780\u07A8\u0783\u07AA"];
  l.defineLocale("dv", {
    months: cs,
    monthsShort: cs,
    weekdays: Ys,
    weekdaysShort: Ys,
    weekdaysMin: "\u0787\u07A7\u078B\u07A8_\u0780\u07AF\u0789\u07A6_\u0787\u07A6\u0782\u07B0_\u0784\u07AA\u078B\u07A6_\u0784\u07AA\u0783\u07A7_\u0780\u07AA\u0786\u07AA_\u0780\u07AE\u0782\u07A8".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "D/M/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0789\u0786|\u0789\u078a/,
    isPM: function isPM(e) {
      return "\u0789\u078A" === e;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0789\u0786" : "\u0789\u078A";
    },
    calendar: {
      sameDay: "[\u0789\u07A8\u0787\u07A6\u078B\u07AA] LT",
      nextDay: "[\u0789\u07A7\u078B\u07A6\u0789\u07A7] LT",
      nextWeek: "dddd LT",
      lastDay: "[\u0787\u07A8\u0787\u07B0\u0794\u07AC] LT",
      lastWeek: "[\u078A\u07A7\u0787\u07A8\u078C\u07AA\u0788\u07A8] dddd LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u078C\u07AC\u0783\u07AD\u078E\u07A6\u0787\u07A8 %s",
      past: "\u0786\u07AA\u0783\u07A8\u0782\u07B0 %s",
      s: "\u0790\u07A8\u0786\u07AA\u0782\u07B0\u078C\u07AA\u0786\u07AE\u0785\u07AC\u0787\u07B0",
      ss: "d% \u0790\u07A8\u0786\u07AA\u0782\u07B0\u078C\u07AA",
      m: "\u0789\u07A8\u0782\u07A8\u0793\u07AC\u0787\u07B0",
      mm: "\u0789\u07A8\u0782\u07A8\u0793\u07AA %d",
      h: "\u078E\u07A6\u0791\u07A8\u0787\u07A8\u0783\u07AC\u0787\u07B0",
      hh: "\u078E\u07A6\u0791\u07A8\u0787\u07A8\u0783\u07AA %d",
      d: "\u078B\u07AA\u0788\u07A6\u0780\u07AC\u0787\u07B0",
      dd: "\u078B\u07AA\u0788\u07A6\u0790\u07B0 %d",
      M: "\u0789\u07A6\u0780\u07AC\u0787\u07B0",
      MM: "\u0789\u07A6\u0790\u07B0 %d",
      y: "\u0787\u07A6\u0780\u07A6\u0783\u07AC\u0787\u07B0",
      yy: "\u0787\u07A6\u0780\u07A6\u0783\u07AA %d"
    },
    preparse: function preparse(e) {
      return e.replace(/\u060c/g, ",");
    },
    postformat: function postformat(e) {
      return e.replace(/,/g, "\u060C");
    },
    week: {
      dow: 7,
      doy: 12
    }
  }), l.defineLocale("el", {
    monthsNominativeEl: "\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2_\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2_\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2_\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2_\u039C\u03AC\u03B9\u03BF\u03C2_\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2_\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2_\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2_\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2_\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2_\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2_\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2".split("_"),
    monthsGenitiveEl: "\u0399\u03B1\u03BD\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5_\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5_\u039C\u03B1\u03C1\u03C4\u03AF\u03BF\u03C5_\u0391\u03C0\u03C1\u03B9\u03BB\u03AF\u03BF\u03C5_\u039C\u03B1\u0390\u03BF\u03C5_\u0399\u03BF\u03C5\u03BD\u03AF\u03BF\u03C5_\u0399\u03BF\u03C5\u03BB\u03AF\u03BF\u03C5_\u0391\u03C5\u03B3\u03BF\u03CD\u03C3\u03C4\u03BF\u03C5_\u03A3\u03B5\u03C0\u03C4\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5_\u039F\u03BA\u03C4\u03C9\u03B2\u03C1\u03AF\u03BF\u03C5_\u039D\u03BF\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5_\u0394\u03B5\u03BA\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5".split("_"),
    months: function months(e, a) {
      return e ? "string" == typeof a && /D/.test(a.substring(0, a.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl;
    },
    monthsShort: "\u0399\u03B1\u03BD_\u03A6\u03B5\u03B2_\u039C\u03B1\u03C1_\u0391\u03C0\u03C1_\u039C\u03B1\u03CA_\u0399\u03BF\u03C5\u03BD_\u0399\u03BF\u03C5\u03BB_\u0391\u03C5\u03B3_\u03A3\u03B5\u03C0_\u039F\u03BA\u03C4_\u039D\u03BF\u03B5_\u0394\u03B5\u03BA".split("_"),
    weekdays: "\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE_\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1_\u03A4\u03C1\u03AF\u03C4\u03B7_\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7_\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7_\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE_\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF".split("_"),
    weekdaysShort: "\u039A\u03C5\u03C1_\u0394\u03B5\u03C5_\u03A4\u03C1\u03B9_\u03A4\u03B5\u03C4_\u03A0\u03B5\u03BC_\u03A0\u03B1\u03C1_\u03A3\u03B1\u03B2".split("_"),
    weekdaysMin: "\u039A\u03C5_\u0394\u03B5_\u03A4\u03C1_\u03A4\u03B5_\u03A0\u03B5_\u03A0\u03B1_\u03A3\u03B1".split("_"),
    meridiem: function meridiem(e, a, t) {
      return 11 < e ? t ? "\u03BC\u03BC" : "\u039C\u039C" : t ? "\u03C0\u03BC" : "\u03A0\u039C";
    },
    isPM: function isPM(e) {
      return "\u03BC" === (e + "").toLowerCase()[0];
    },
    meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i,
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY h:mm A",
      LLLL: "dddd, D MMMM YYYY h:mm A"
    },
    calendarEl: {
      sameDay: "[\u03A3\u03AE\u03BC\u03B5\u03C1\u03B1 {}] LT",
      nextDay: "[\u0391\u03CD\u03C1\u03B9\u03BF {}] LT",
      nextWeek: "dddd [{}] LT",
      lastDay: "[\u03A7\u03B8\u03B5\u03C2 {}] LT",
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 6:
            return "[\u03C4\u03BF \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF] dddd [{}] LT";

          default:
            return "[\u03C4\u03B7\u03BD \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03B7] dddd [{}] LT";
        }
      },
      sameElse: "L"
    },
    calendar: function calendar(e, a) {
      var t = this._calendarEl[e],
          s = a && a.hours();
      return H(t) && (t = t.apply(a)), t.replace("{}", s % 12 == 1 ? "\u03C3\u03C4\u03B7" : "\u03C3\u03C4\u03B9\u03C2");
    },
    relativeTime: {
      future: "\u03C3\u03B5 %s",
      past: "%s \u03C0\u03C1\u03B9\u03BD",
      s: "\u03BB\u03AF\u03B3\u03B1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1",
      ss: "%d \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1",
      m: "\u03AD\u03BD\u03B1 \u03BB\u03B5\u03C0\u03C4\u03CC",
      mm: "%d \u03BB\u03B5\u03C0\u03C4\u03AC",
      h: "\u03BC\u03AF\u03B1 \u03CE\u03C1\u03B1",
      hh: "%d \u03CE\u03C1\u03B5\u03C2",
      d: "\u03BC\u03AF\u03B1 \u03BC\u03AD\u03C1\u03B1",
      dd: "%d \u03BC\u03AD\u03C1\u03B5\u03C2",
      M: "\u03AD\u03BD\u03B1\u03C2 \u03BC\u03AE\u03BD\u03B1\u03C2",
      MM: "%d \u03BC\u03AE\u03BD\u03B5\u03C2",
      y: "\u03AD\u03BD\u03B1\u03C2 \u03C7\u03C1\u03CC\u03BD\u03BF\u03C2",
      yy: "%d \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\u03b7/,
    ordinal: "%d\u03B7",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("en-au", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY h:mm A",
      LLLL: "dddd, D MMMM YYYY h:mm A"
    },
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(e) {
      var a = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("en-ca", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "YYYY-MM-DD",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    },
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(e) {
      var a = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    }
  }), l.defineLocale("en-gb", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(e) {
      var a = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("en-ie", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD-MM-YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(e) {
      var a = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("en-il", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(e) {
      var a = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    }
  }), l.defineLocale("en-nz", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY h:mm A",
      LLLL: "dddd, D MMMM YYYY h:mm A"
    },
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(e) {
      var a = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("eo", {
    months: "januaro_februaro_marto_aprilo_majo_junio_julio_a\u016Dgusto_septembro_oktobro_novembro_decembro".split("_"),
    monthsShort: "jan_feb_mar_apr_maj_jun_jul_a\u016Dg_sep_okt_nov_dec".split("_"),
    weekdays: "diman\u0109o_lundo_mardo_merkredo_\u0135a\u016Ddo_vendredo_sabato".split("_"),
    weekdaysShort: "dim_lun_mard_merk_\u0135a\u016D_ven_sab".split("_"),
    weekdaysMin: "di_lu_ma_me_\u0135a_ve_sa".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "D[-a de] MMMM, YYYY",
      LLL: "D[-a de] MMMM, YYYY HH:mm",
      LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
    },
    meridiemParse: /[ap]\.t\.m/i,
    isPM: function isPM(e) {
      return "p" === e.charAt(0).toLowerCase();
    },
    meridiem: function meridiem(e, a, t) {
      return 11 < e ? t ? "p.t.m." : "P.T.M." : t ? "a.t.m." : "A.T.M.";
    },
    calendar: {
      sameDay: "[Hodia\u016D je] LT",
      nextDay: "[Morga\u016D je] LT",
      nextWeek: "dddd [je] LT",
      lastDay: "[Hiera\u016D je] LT",
      lastWeek: "[pasinta] dddd [je] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "post %s",
      past: "anta\u016D %s",
      s: "sekundoj",
      ss: "%d sekundoj",
      m: "minuto",
      mm: "%d minutoj",
      h: "horo",
      hh: "%d horoj",
      d: "tago",
      dd: "%d tagoj",
      M: "monato",
      MM: "%d monatoj",
      y: "jaro",
      yy: "%d jaroj"
    },
    dayOfMonthOrdinalParse: /\d{1,2}a/,
    ordinal: "%da",
    week: {
      dow: 1,
      doy: 7
    }
  });
  var ys = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      fs = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
      ks = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
      ps = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
  l.defineLocale("es-do", {
    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
    monthsShort: function monthsShort(e, a) {
      return e ? /-MMM-/.test(a) ? fs[e.month()] : ys[e.month()] : ys;
    },
    monthsRegex: ps,
    monthsShortRegex: ps,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: ks,
    longMonthsParse: ks,
    shortMonthsParse: ks,
    weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
    weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
    weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY h:mm A",
      LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
    },
    calendar: {
      sameDay: function sameDay() {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      },
      nextDay: function nextDay() {
        return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      },
      nextWeek: function nextWeek() {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      },
      lastDay: function lastDay() {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      },
      lastWeek: function lastWeek() {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "en %s",
      past: "hace %s",
      s: "unos segundos",
      ss: "%d segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "una hora",
      hh: "%d horas",
      d: "un d\xeda",
      dd: "%d d\xedas",
      M: "un mes",
      MM: "%d meses",
      y: "un a\xf1o",
      yy: "%d a\xf1os"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%d\xba",
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Ds = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      Ts = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
  l.defineLocale("es-us", {
    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
    monthsShort: function monthsShort(e, a) {
      return e ? /-MMM-/.test(a) ? Ts[e.month()] : Ds[e.month()] : Ds;
    },
    monthsParseExact: !0,
    weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
    weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
    weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "MM/DD/YYYY",
      LL: "MMMM [de] D [de] YYYY",
      LLL: "MMMM [de] D [de] YYYY h:mm A",
      LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
    },
    calendar: {
      sameDay: function sameDay() {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      },
      nextDay: function nextDay() {
        return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      },
      nextWeek: function nextWeek() {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      },
      lastDay: function lastDay() {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      },
      lastWeek: function lastWeek() {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "en %s",
      past: "hace %s",
      s: "unos segundos",
      ss: "%d segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "una hora",
      hh: "%d horas",
      d: "un d\xeda",
      dd: "%d d\xedas",
      M: "un mes",
      MM: "%d meses",
      y: "un a\xf1o",
      yy: "%d a\xf1os"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%d\xba",
    week: {
      dow: 0,
      doy: 6
    }
  });
  var gs = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      ws = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
      vs = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
      Ss = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

  function Hs(e, a, t, s) {
    var n = {
      s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"],
      ss: [e + "sekundi", e + "sekundit"],
      m: ["\xfche minuti", "\xfcks minut"],
      mm: [e + " minuti", e + " minutit"],
      h: ["\xfche tunni", "tund aega", "\xfcks tund"],
      hh: [e + " tunni", e + " tundi"],
      d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"],
      M: ["kuu aja", "kuu aega", "\xfcks kuu"],
      MM: [e + " kuu", e + " kuud"],
      y: ["\xfche aasta", "aasta", "\xfcks aasta"],
      yy: [e + " aasta", e + " aastat"]
    };
    return a ? n[t][2] ? n[t][2] : n[t][1] : s ? n[t][0] : n[t][1];
  }

  l.defineLocale("es", {
    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
    monthsShort: function monthsShort(e, a) {
      return e ? /-MMM-/.test(a) ? ws[e.month()] : gs[e.month()] : gs;
    },
    monthsRegex: Ss,
    monthsShortRegex: Ss,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: vs,
    longMonthsParse: vs,
    shortMonthsParse: vs,
    weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
    weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
    weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY H:mm",
      LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
    },
    calendar: {
      sameDay: function sameDay() {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      },
      nextDay: function nextDay() {
        return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      },
      nextWeek: function nextWeek() {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      },
      lastDay: function lastDay() {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      },
      lastWeek: function lastWeek() {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "en %s",
      past: "hace %s",
      s: "unos segundos",
      ss: "%d segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "una hora",
      hh: "%d horas",
      d: "un d\xeda",
      dd: "%d d\xedas",
      M: "un mes",
      MM: "%d meses",
      y: "un a\xf1o",
      yy: "%d a\xf1os"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%d\xba",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("et", {
    months: "jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
    monthsShort: "jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
    weekdays: "p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"),
    weekdaysShort: "P_E_T_K_N_R_L".split("_"),
    weekdaysMin: "P_E_T_K_N_R_L".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd, D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[T\xe4na,] LT",
      nextDay: "[Homme,] LT",
      nextWeek: "[J\xe4rgmine] dddd LT",
      lastDay: "[Eile,] LT",
      lastWeek: "[Eelmine] dddd LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s p\xe4rast",
      past: "%s tagasi",
      s: Hs,
      ss: Hs,
      m: Hs,
      mm: Hs,
      h: Hs,
      hh: Hs,
      d: Hs,
      dd: "%d p\xe4eva",
      M: Hs,
      MM: Hs,
      y: Hs,
      yy: Hs
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("eu", {
    months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
    monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
    monthsParseExact: !0,
    weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
    weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
    weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "YYYY[ko] MMMM[ren] D[a]",
      LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
      LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
      l: "YYYY-M-D",
      ll: "YYYY[ko] MMM D[a]",
      lll: "YYYY[ko] MMM D[a] HH:mm",
      llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
    },
    calendar: {
      sameDay: "[gaur] LT[etan]",
      nextDay: "[bihar] LT[etan]",
      nextWeek: "dddd LT[etan]",
      lastDay: "[atzo] LT[etan]",
      lastWeek: "[aurreko] dddd LT[etan]",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s barru",
      past: "duela %s",
      s: "segundo batzuk",
      ss: "%d segundo",
      m: "minutu bat",
      mm: "%d minutu",
      h: "ordu bat",
      hh: "%d ordu",
      d: "egun bat",
      dd: "%d egun",
      M: "hilabete bat",
      MM: "%d hilabete",
      y: "urte bat",
      yy: "%d urte"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 7
    }
  });
  var bs = {
    1: "\u06F1",
    2: "\u06F2",
    3: "\u06F3",
    4: "\u06F4",
    5: "\u06F5",
    6: "\u06F6",
    7: "\u06F7",
    8: "\u06F8",
    9: "\u06F9",
    0: "\u06F0"
  },
      js = {
    "\u06F1": "1",
    "\u06F2": "2",
    "\u06F3": "3",
    "\u06F4": "4",
    "\u06F5": "5",
    "\u06F6": "6",
    "\u06F7": "7",
    "\u06F8": "8",
    "\u06F9": "9",
    "\u06F0": "0"
  };
  l.defineLocale("fa", {
    months: "\u0698\u0627\u0646\u0648\u06CC\u0647_\u0641\u0648\u0631\u06CC\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06CC\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06CC\u0647_\u0627\u0648\u062A_\u0633\u067E\u062A\u0627\u0645\u0628\u0631_\u0627\u06A9\u062A\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062F\u0633\u0627\u0645\u0628\u0631".split("_"),
    monthsShort: "\u0698\u0627\u0646\u0648\u06CC\u0647_\u0641\u0648\u0631\u06CC\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06CC\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06CC\u0647_\u0627\u0648\u062A_\u0633\u067E\u062A\u0627\u0645\u0628\u0631_\u0627\u06A9\u062A\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062F\u0633\u0627\u0645\u0628\u0631".split("_"),
    weekdays: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
    weekdaysShort: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
    weekdaysMin: "\u06CC_\u062F_\u0633_\u0686_\u067E_\u062C_\u0634".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,
    isPM: function isPM(e) {
      return /\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e);
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631" : "\u0628\u0639\u062F \u0627\u0632 \u0638\u0647\u0631";
    },
    calendar: {
      sameDay: "[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062A] LT",
      nextDay: "[\u0641\u0631\u062F\u0627 \u0633\u0627\u0639\u062A] LT",
      nextWeek: "dddd [\u0633\u0627\u0639\u062A] LT",
      lastDay: "[\u062F\u06CC\u0631\u0648\u0632 \u0633\u0627\u0639\u062A] LT",
      lastWeek: "dddd [\u067E\u06CC\u0634] [\u0633\u0627\u0639\u062A] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u062F\u0631 %s",
      past: "%s \u067E\u06CC\u0634",
      s: "\u0686\u0646\u062F \u062B\u0627\u0646\u06CC\u0647",
      ss: "\u062B\u0627\u0646\u06CC\u0647 d%",
      m: "\u06CC\u06A9 \u062F\u0642\u06CC\u0642\u0647",
      mm: "%d \u062F\u0642\u06CC\u0642\u0647",
      h: "\u06CC\u06A9 \u0633\u0627\u0639\u062A",
      hh: "%d \u0633\u0627\u0639\u062A",
      d: "\u06CC\u06A9 \u0631\u0648\u0632",
      dd: "%d \u0631\u0648\u0632",
      M: "\u06CC\u06A9 \u0645\u0627\u0647",
      MM: "%d \u0645\u0627\u0647",
      y: "\u06CC\u06A9 \u0633\u0627\u0644",
      yy: "%d \u0633\u0627\u0644"
    },
    preparse: function preparse(e) {
      return e.replace(/[\u06f0-\u06f9]/g, function (e) {
        return js[e];
      }).replace(/\u060c/g, ",");
    },
    postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return bs[e];
      }).replace(/,/g, "\u060C");
    },
    dayOfMonthOrdinalParse: /\d{1,2}\u0645/,
    ordinal: "%d\u0645",
    week: {
      dow: 6,
      doy: 12
    }
  });
  var xs = "nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),
      Ps = ["nolla", "yhden", "kahden", "kolmen", "nelj\xe4n", "viiden", "kuuden", xs[7], xs[8], xs[9]];

  function Os(e, a, t, s) {
    var n,
        d,
        r = "";

    switch (t) {
      case "s":
        return s ? "muutaman sekunnin" : "muutama sekunti";

      case "ss":
        return s ? "sekunnin" : "sekuntia";

      case "m":
        return s ? "minuutin" : "minuutti";

      case "mm":
        r = s ? "minuutin" : "minuuttia";
        break;

      case "h":
        return s ? "tunnin" : "tunti";

      case "hh":
        r = s ? "tunnin" : "tuntia";
        break;

      case "d":
        return s ? "p\xe4iv\xe4n" : "p\xe4iv\xe4";

      case "dd":
        r = s ? "p\xe4iv\xe4n" : "p\xe4iv\xe4\xe4";
        break;

      case "M":
        return s ? "kuukauden" : "kuukausi";

      case "MM":
        r = s ? "kuukauden" : "kuukautta";
        break;

      case "y":
        return s ? "vuoden" : "vuosi";

      case "yy":
        r = s ? "vuoden" : "vuotta";
        break;
    }

    return d = s, r = ((n = e) < 10 ? d ? Ps[n] : xs[n] : n) + " " + r;
  }

  l.defineLocale("fi", {
    months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
    monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"),
    weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
    weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
    weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
    longDateFormat: {
      LT: "HH.mm",
      LTS: "HH.mm.ss",
      L: "DD.MM.YYYY",
      LL: "Do MMMM[ta] YYYY",
      LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
      LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
      l: "D.M.YYYY",
      ll: "Do MMM YYYY",
      lll: "Do MMM YYYY, [klo] HH.mm",
      llll: "ddd, Do MMM YYYY, [klo] HH.mm"
    },
    calendar: {
      sameDay: "[t\xe4n\xe4\xe4n] [klo] LT",
      nextDay: "[huomenna] [klo] LT",
      nextWeek: "dddd [klo] LT",
      lastDay: "[eilen] [klo] LT",
      lastWeek: "[viime] dddd[na] [klo] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s p\xe4\xe4st\xe4",
      past: "%s sitten",
      s: Os,
      ss: Os,
      m: Os,
      mm: Os,
      h: Os,
      hh: Os,
      d: Os,
      dd: Os,
      M: Os,
      MM: Os,
      y: Os,
      yy: Os
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("fo", {
    months: "januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
    monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
    weekdays: "sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"),
    weekdaysShort: "sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"),
    weekdaysMin: "su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D. MMMM, YYYY HH:mm"
    },
    calendar: {
      sameDay: "[\xcd dag kl.] LT",
      nextDay: "[\xcd morgin kl.] LT",
      nextWeek: "dddd [kl.] LT",
      lastDay: "[\xcd gj\xe1r kl.] LT",
      lastWeek: "[s\xed\xf0stu] dddd [kl] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "um %s",
      past: "%s s\xed\xf0ani",
      s: "f\xe1 sekund",
      ss: "%d sekundir",
      m: "ein minutt",
      mm: "%d minuttir",
      h: "ein t\xedmi",
      hh: "%d t\xedmar",
      d: "ein dagur",
      dd: "%d dagar",
      M: "ein m\xe1na\xf0i",
      MM: "%d m\xe1na\xf0ir",
      y: "eitt \xe1r",
      yy: "%d \xe1r"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("fr-ca", {
    months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
    monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
    monthsParseExact: !0,
    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Aujourd\u2019hui \xE0] LT",
      nextDay: "[Demain \xe0] LT",
      nextWeek: "dddd [\xe0] LT",
      lastDay: "[Hier \xe0] LT",
      lastWeek: "dddd [dernier \xe0] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "dans %s",
      past: "il y a %s",
      s: "quelques secondes",
      ss: "%d secondes",
      m: "une minute",
      mm: "%d minutes",
      h: "une heure",
      hh: "%d heures",
      d: "un jour",
      dd: "%d jours",
      M: "un mois",
      MM: "%d mois",
      y: "un an",
      yy: "%d ans"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function ordinal(e, a) {
      switch (a) {
        default:
        case "M":
        case "Q":
        case "D":
        case "DDD":
        case "d":
          return e + (1 === e ? "er" : "e");

        case "w":
        case "W":
          return e + (1 === e ? "re" : "e");
      }
    }
  }), l.defineLocale("fr-ch", {
    months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
    monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
    monthsParseExact: !0,
    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Aujourd\u2019hui \xE0] LT",
      nextDay: "[Demain \xe0] LT",
      nextWeek: "dddd [\xe0] LT",
      lastDay: "[Hier \xe0] LT",
      lastWeek: "dddd [dernier \xe0] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "dans %s",
      past: "il y a %s",
      s: "quelques secondes",
      ss: "%d secondes",
      m: "une minute",
      mm: "%d minutes",
      h: "une heure",
      hh: "%d heures",
      d: "un jour",
      dd: "%d jours",
      M: "un mois",
      MM: "%d mois",
      y: "un an",
      yy: "%d ans"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function ordinal(e, a) {
      switch (a) {
        default:
        case "M":
        case "Q":
        case "D":
        case "DDD":
        case "d":
          return e + (1 === e ? "er" : "e");

        case "w":
        case "W":
          return e + (1 === e ? "re" : "e");
      }
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("fr", {
    months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
    monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
    monthsParseExact: !0,
    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Aujourd\u2019hui \xE0] LT",
      nextDay: "[Demain \xe0] LT",
      nextWeek: "dddd [\xe0] LT",
      lastDay: "[Hier \xe0] LT",
      lastWeek: "dddd [dernier \xe0] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "dans %s",
      past: "il y a %s",
      s: "quelques secondes",
      ss: "%d secondes",
      m: "une minute",
      mm: "%d minutes",
      h: "une heure",
      hh: "%d heures",
      d: "un jour",
      dd: "%d jours",
      M: "un mois",
      MM: "%d mois",
      y: "un an",
      yy: "%d ans"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal: function ordinal(e, a) {
      switch (a) {
        case "D":
          return e + (1 === e ? "er" : "");

        default:
        case "M":
        case "Q":
        case "DDD":
        case "d":
          return e + (1 === e ? "er" : "e");

        case "w":
        case "W":
          return e + (1 === e ? "re" : "e");
      }
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Ws = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
      Es = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
  l.defineLocale("fy", {
    months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
    monthsShort: function monthsShort(e, a) {
      return e ? /-MMM-/.test(a) ? Es[e.month()] : Ws[e.month()] : Ws;
    },
    monthsParseExact: !0,
    weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
    weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
    weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD-MM-YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[hjoed om] LT",
      nextDay: "[moarn om] LT",
      nextWeek: "dddd [om] LT",
      lastDay: "[juster om] LT",
      lastWeek: "[\xf4fr\xfbne] dddd [om] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "oer %s",
      past: "%s lyn",
      s: "in pear sekonden",
      ss: "%d sekonden",
      m: "ien min\xfat",
      mm: "%d minuten",
      h: "ien oere",
      hh: "%d oeren",
      d: "ien dei",
      dd: "%d dagen",
      M: "ien moanne",
      MM: "%d moannen",
      y: "ien jier",
      yy: "%d jierren"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(e) {
      return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de");
    },
    week: {
      dow: 1,
      doy: 4
    }
  });

  function As(e, a, t, s) {
    var n = {
      s: ["thodde secondanim", "thodde second"],
      ss: [e + " secondanim", e + " second"],
      m: ["eka mintan", "ek minute"],
      mm: [e + " mintanim", e + " mintam"],
      h: ["eka horan", "ek hor"],
      hh: [e + " horanim", e + " horam"],
      d: ["eka disan", "ek dis"],
      dd: [e + " disanim", e + " dis"],
      M: ["eka mhoinean", "ek mhoino"],
      MM: [e + " mhoineanim", e + " mhoine"],
      y: ["eka vorsan", "ek voros"],
      yy: [e + " vorsanim", e + " vorsam"]
    };
    return a ? n[t][0] : n[t][1];
  }

  l.defineLocale("gd", {
    months: ["Am Faoilleach", "An Gearran", "Am M\xe0rt", "An Giblean", "An C\xe8itean", "An t-\xd2gmhios", "An t-Iuchar", "An L\xf9nastal", "An t-Sultain", "An D\xe0mhair", "An t-Samhain", "An D\xf9bhlachd"],
    monthsShort: ["Faoi", "Gear", "M\xe0rt", "Gibl", "C\xe8it", "\xd2gmh", "Iuch", "L\xf9n", "Sult", "D\xe0mh", "Samh", "D\xf9bh"],
    monthsParseExact: !0,
    weekdays: ["Did\xf2mhnaich", "Diluain", "Dim\xe0irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
    weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
    weekdaysMin: ["D\xf2", "Lu", "M\xe0", "Ci", "Ar", "Ha", "Sa"],
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[An-diugh aig] LT",
      nextDay: "[A-m\xe0ireach aig] LT",
      nextWeek: "dddd [aig] LT",
      lastDay: "[An-d\xe8 aig] LT",
      lastWeek: "dddd [seo chaidh] [aig] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "ann an %s",
      past: "bho chionn %s",
      s: "beagan diogan",
      ss: "%d diogan",
      m: "mionaid",
      mm: "%d mionaidean",
      h: "uair",
      hh: "%d uairean",
      d: "latha",
      dd: "%d latha",
      M: "m\xecos",
      MM: "%d m\xecosan",
      y: "bliadhna",
      yy: "%d bliadhna"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
    ordinal: function ordinal(e) {
      return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("gl", {
    months: "xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
    monthsShort: "xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado".split("_"),
    weekdaysShort: "dom._lun._mar._m\xe9r._xov._ven._s\xe1b.".split("_"),
    weekdaysMin: "do_lu_ma_m\xe9_xo_ve_s\xe1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY H:mm",
      LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
    },
    calendar: {
      sameDay: function sameDay() {
        return "[hoxe " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT";
      },
      nextDay: function nextDay() {
        return "[ma\xf1\xe1 " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT";
      },
      nextWeek: function nextWeek() {
        return "dddd [" + (1 !== this.hours() ? "\xe1s" : "a") + "] LT";
      },
      lastDay: function lastDay() {
        return "[onte " + (1 !== this.hours() ? "\xe1" : "a") + "] LT";
      },
      lastWeek: function lastWeek() {
        return "[o] dddd [pasado " + (1 !== this.hours() ? "\xe1s" : "a") + "] LT";
      },
      sameElse: "L"
    },
    relativeTime: {
      future: function future(e) {
        return 0 === e.indexOf("un") ? "n" + e : "en " + e;
      },
      past: "hai %s",
      s: "uns segundos",
      ss: "%d segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "unha hora",
      hh: "%d horas",
      d: "un d\xeda",
      dd: "%d d\xedas",
      M: "un mes",
      MM: "%d meses",
      y: "un ano",
      yy: "%d anos"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%d\xba",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("gom-latn", {
    months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
    monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
    monthsParseExact: !0,
    weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
    weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
    weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "A h:mm [vazta]",
      LTS: "A h:mm:ss [vazta]",
      L: "DD-MM-YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY A h:mm [vazta]",
      LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
      llll: "ddd, D MMM YYYY, A h:mm [vazta]"
    },
    calendar: {
      sameDay: "[Aiz] LT",
      nextDay: "[Faleam] LT",
      nextWeek: "[Ieta to] dddd[,] LT",
      lastDay: "[Kal] LT",
      lastWeek: "[Fatlo] dddd[,] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s",
      past: "%s adim",
      s: As,
      ss: As,
      m: As,
      mm: As,
      h: As,
      hh: As,
      d: As,
      dd: As,
      M: As,
      MM: As,
      y: As,
      yy: As
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er)/,
    ordinal: function ordinal(e, a) {
      switch (a) {
        case "D":
          return e + "er";

        default:
        case "M":
        case "Q":
        case "DDD":
        case "d":
        case "w":
        case "W":
          return e;
      }
    },
    week: {
      dow: 1,
      doy: 4
    },
    meridiemParse: /rati|sokalli|donparam|sanje/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "rati" === a ? e < 4 ? e : e + 12 : "sokalli" === a ? e : "donparam" === a ? 12 < e ? e : e + 12 : "sanje" === a ? e + 12 : void 0;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati";
    }
  });
  var Fs = {
    1: "\u0AE7",
    2: "\u0AE8",
    3: "\u0AE9",
    4: "\u0AEA",
    5: "\u0AEB",
    6: "\u0AEC",
    7: "\u0AED",
    8: "\u0AEE",
    9: "\u0AEF",
    0: "\u0AE6"
  },
      zs = {
    "\u0AE7": "1",
    "\u0AE8": "2",
    "\u0AE9": "3",
    "\u0AEA": "4",
    "\u0AEB": "5",
    "\u0AEC": "6",
    "\u0AED": "7",
    "\u0AEE": "8",
    "\u0AEF": "9",
    "\u0AE6": "0"
  };
  l.defineLocale("gu", {
    months: "\u0A9C\u0ABE\u0AA8\u0ACD\u0AAF\u0AC1\u0A86\u0AB0\u0AC0_\u0AAB\u0AC7\u0AAC\u0ACD\u0AB0\u0AC1\u0A86\u0AB0\u0AC0_\u0AAE\u0ABE\u0AB0\u0ACD\u0A9A_\u0A8F\u0AAA\u0ACD\u0AB0\u0ABF\u0AB2_\u0AAE\u0AC7_\u0A9C\u0AC2\u0AA8_\u0A9C\u0AC1\u0AB2\u0ABE\u0A88_\u0A91\u0A97\u0AB8\u0ACD\u0A9F_\u0AB8\u0AAA\u0ACD\u0A9F\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0_\u0A91\u0A95\u0ACD\u0A9F\u0ACD\u0AAC\u0AB0_\u0AA8\u0AB5\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0_\u0AA1\u0ABF\u0AB8\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0".split("_"),
    monthsShort: "\u0A9C\u0ABE\u0AA8\u0ACD\u0AAF\u0AC1._\u0AAB\u0AC7\u0AAC\u0ACD\u0AB0\u0AC1._\u0AAE\u0ABE\u0AB0\u0ACD\u0A9A_\u0A8F\u0AAA\u0ACD\u0AB0\u0ABF._\u0AAE\u0AC7_\u0A9C\u0AC2\u0AA8_\u0A9C\u0AC1\u0AB2\u0ABE._\u0A91\u0A97._\u0AB8\u0AAA\u0ACD\u0A9F\u0AC7._\u0A91\u0A95\u0ACD\u0A9F\u0ACD._\u0AA8\u0AB5\u0AC7._\u0AA1\u0ABF\u0AB8\u0AC7.".split("_"),
    monthsParseExact: !0,
    weekdays: "\u0AB0\u0AB5\u0ABF\u0AB5\u0ABE\u0AB0_\u0AB8\u0ACB\u0AAE\u0AB5\u0ABE\u0AB0_\u0AAE\u0A82\u0A97\u0AB3\u0AB5\u0ABE\u0AB0_\u0AAC\u0AC1\u0AA7\u0ACD\u0AB5\u0ABE\u0AB0_\u0A97\u0AC1\u0AB0\u0AC1\u0AB5\u0ABE\u0AB0_\u0AB6\u0AC1\u0A95\u0ACD\u0AB0\u0AB5\u0ABE\u0AB0_\u0AB6\u0AA8\u0ABF\u0AB5\u0ABE\u0AB0".split("_"),
    weekdaysShort: "\u0AB0\u0AB5\u0ABF_\u0AB8\u0ACB\u0AAE_\u0AAE\u0A82\u0A97\u0AB3_\u0AAC\u0AC1\u0AA7\u0ACD_\u0A97\u0AC1\u0AB0\u0AC1_\u0AB6\u0AC1\u0A95\u0ACD\u0AB0_\u0AB6\u0AA8\u0ABF".split("_"),
    weekdaysMin: "\u0AB0_\u0AB8\u0ACB_\u0AAE\u0A82_\u0AAC\u0AC1_\u0A97\u0AC1_\u0AB6\u0AC1_\u0AB6".split("_"),
    longDateFormat: {
      LT: "A h:mm \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7",
      LTS: "A h:mm:ss \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7",
      LLLL: "dddd, D MMMM YYYY, A h:mm \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7"
    },
    calendar: {
      sameDay: "[\u0A86\u0A9C] LT",
      nextDay: "[\u0A95\u0ABE\u0AB2\u0AC7] LT",
      nextWeek: "dddd, LT",
      lastDay: "[\u0A97\u0A87\u0A95\u0ABE\u0AB2\u0AC7] LT",
      lastWeek: "[\u0AAA\u0ABE\u0A9B\u0AB2\u0ABE] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u0AAE\u0ABE",
      past: "%s \u0AAA\u0AC7\u0AB9\u0AB2\u0ABE",
      s: "\u0A85\u0AAE\u0AC1\u0A95 \u0AAA\u0AB3\u0ACB",
      ss: "%d \u0AB8\u0AC7\u0A95\u0A82\u0AA1",
      m: "\u0A8F\u0A95 \u0AAE\u0ABF\u0AA8\u0ABF\u0A9F",
      mm: "%d \u0AAE\u0ABF\u0AA8\u0ABF\u0A9F",
      h: "\u0A8F\u0A95 \u0A95\u0AB2\u0ABE\u0A95",
      hh: "%d \u0A95\u0AB2\u0ABE\u0A95",
      d: "\u0A8F\u0A95 \u0AA6\u0ABF\u0AB5\u0AB8",
      dd: "%d \u0AA6\u0ABF\u0AB5\u0AB8",
      M: "\u0A8F\u0A95 \u0AAE\u0AB9\u0ABF\u0AA8\u0ACB",
      MM: "%d \u0AAE\u0AB9\u0ABF\u0AA8\u0ACB",
      y: "\u0A8F\u0A95 \u0AB5\u0AB0\u0ACD\u0AB7",
      yy: "%d \u0AB5\u0AB0\u0ACD\u0AB7"
    },
    preparse: function preparse(e) {
      return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, function (e) {
        return zs[e];
      });
    },
    postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return Fs[e];
      });
    },
    meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0AB0\u0ABE\u0AA4" === a ? e < 4 ? e : e + 12 : "\u0AB8\u0AB5\u0ABE\u0AB0" === a ? e : "\u0AAC\u0AAA\u0ACB\u0AB0" === a ? 10 <= e ? e : e + 12 : "\u0AB8\u0ABE\u0A82\u0A9C" === a ? e + 12 : void 0;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0AB0\u0ABE\u0AA4" : e < 10 ? "\u0AB8\u0AB5\u0ABE\u0AB0" : e < 17 ? "\u0AAC\u0AAA\u0ACB\u0AB0" : e < 20 ? "\u0AB8\u0ABE\u0A82\u0A9C" : "\u0AB0\u0ABE\u0AA4";
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), l.defineLocale("he", {
    months: "\u05D9\u05E0\u05D5\u05D0\u05E8_\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8\u05D9\u05DC_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0\u05D9_\u05D9\u05D5\u05DC\u05D9_\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8_\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8_\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8_\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8_\u05D3\u05E6\u05DE\u05D1\u05E8".split("_"),
    monthsShort: "\u05D9\u05E0\u05D5\u05F3_\u05E4\u05D1\u05E8\u05F3_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8\u05F3_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0\u05D9_\u05D9\u05D5\u05DC\u05D9_\u05D0\u05D5\u05D2\u05F3_\u05E1\u05E4\u05D8\u05F3_\u05D0\u05D5\u05E7\u05F3_\u05E0\u05D5\u05D1\u05F3_\u05D3\u05E6\u05DE\u05F3".split("_"),
    weekdays: "\u05E8\u05D0\u05E9\u05D5\u05DF_\u05E9\u05E0\u05D9_\u05E9\u05DC\u05D9\u05E9\u05D9_\u05E8\u05D1\u05D9\u05E2\u05D9_\u05D7\u05DE\u05D9\u05E9\u05D9_\u05E9\u05D9\u05E9\u05D9_\u05E9\u05D1\u05EA".split("_"),
    weekdaysShort: "\u05D0\u05F3_\u05D1\u05F3_\u05D2\u05F3_\u05D3\u05F3_\u05D4\u05F3_\u05D5\u05F3_\u05E9\u05F3".split("_"),
    weekdaysMin: "\u05D0_\u05D1_\u05D2_\u05D3_\u05D4_\u05D5_\u05E9".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [\u05D1]MMMM YYYY",
      LLL: "D [\u05D1]MMMM YYYY HH:mm",
      LLLL: "dddd, D [\u05D1]MMMM YYYY HH:mm",
      l: "D/M/YYYY",
      ll: "D MMM YYYY",
      lll: "D MMM YYYY HH:mm",
      llll: "ddd, D MMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[\u05D4\u05D9\u05D5\u05DD \u05D1\u05BE]LT",
      nextDay: "[\u05DE\u05D7\u05E8 \u05D1\u05BE]LT",
      nextWeek: "dddd [\u05D1\u05E9\u05E2\u05D4] LT",
      lastDay: "[\u05D0\u05EA\u05DE\u05D5\u05DC \u05D1\u05BE]LT",
      lastWeek: "[\u05D1\u05D9\u05D5\u05DD] dddd [\u05D4\u05D0\u05D7\u05E8\u05D5\u05DF \u05D1\u05E9\u05E2\u05D4] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u05D1\u05E2\u05D5\u05D3 %s",
      past: "\u05DC\u05E4\u05E0\u05D9 %s",
      s: "\u05DE\u05E1\u05E4\u05E8 \u05E9\u05E0\u05D9\u05D5\u05EA",
      ss: "%d \u05E9\u05E0\u05D9\u05D5\u05EA",
      m: "\u05D3\u05E7\u05D4",
      mm: "%d \u05D3\u05E7\u05D5\u05EA",
      h: "\u05E9\u05E2\u05D4",
      hh: function hh(e) {
        return 2 === e ? "\u05E9\u05E2\u05EA\u05D9\u05D9\u05DD" : e + " \u05E9\u05E2\u05D5\u05EA";
      },
      d: "\u05D9\u05D5\u05DD",
      dd: function dd(e) {
        return 2 === e ? "\u05D9\u05D5\u05DE\u05D9\u05D9\u05DD" : e + " \u05D9\u05DE\u05D9\u05DD";
      },
      M: "\u05D7\u05D5\u05D3\u05E9",
      MM: function MM(e) {
        return 2 === e ? "\u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD" : e + " \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD";
      },
      y: "\u05E9\u05E0\u05D4",
      yy: function yy(e) {
        return 2 === e ? "\u05E9\u05E0\u05EA\u05D9\u05D9\u05DD" : e % 10 == 0 && 10 !== e ? e + " \u05E9\u05E0\u05D4" : e + " \u05E9\u05E0\u05D9\u05DD";
      }
    },
    meridiemParse: /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i,
    isPM: function isPM(e) {
      return /^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e);
    },
    meridiem: function meridiem(e, a, t) {
      return e < 5 ? "\u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05D5\u05E7\u05E8" : e < 10 ? "\u05D1\u05D1\u05D5\u05E7\u05E8" : e < 12 ? t ? "\u05DC\u05E4\u05E0\u05D4\"\u05E6" : "\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD" : e < 18 ? t ? "\u05D0\u05D7\u05D4\"\u05E6" : "\u05D0\u05D7\u05E8\u05D9 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD" : "\u05D1\u05E2\u05E8\u05D1";
    }
  });
  var Js = {
    1: "\u0967",
    2: "\u0968",
    3: "\u0969",
    4: "\u096A",
    5: "\u096B",
    6: "\u096C",
    7: "\u096D",
    8: "\u096E",
    9: "\u096F",
    0: "\u0966"
  },
      Ns = {
    "\u0967": "1",
    "\u0968": "2",
    "\u0969": "3",
    "\u096A": "4",
    "\u096B": "5",
    "\u096C": "6",
    "\u096D": "7",
    "\u096E": "8",
    "\u096F": "9",
    "\u0966": "0"
  };

  function Rs(e, a, t) {
    var s = e + " ";

    switch (t) {
      case "ss":
        return s += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";

      case "m":
        return a ? "jedna minuta" : "jedne minute";

      case "mm":
        return s += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";

      case "h":
        return a ? "jedan sat" : "jednog sata";

      case "hh":
        return s += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";

      case "dd":
        return s += 1 === e ? "dan" : "dana";

      case "MM":
        return s += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";

      case "yy":
        return s += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina";
    }
  }

  l.defineLocale("hi", {
    months: "\u091C\u0928\u0935\u0930\u0940_\u092B\u093C\u0930\u0935\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948\u0932_\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932\u093E\u0908_\u0905\u0917\u0938\u094D\u0924_\u0938\u093F\u0924\u092E\u094D\u092C\u0930_\u0905\u0915\u094D\u091F\u0942\u092C\u0930_\u0928\u0935\u092E\u094D\u092C\u0930_\u0926\u093F\u0938\u092E\u094D\u092C\u0930".split("_"),
    monthsShort: "\u091C\u0928._\u092B\u093C\u0930._\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948._\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932._\u0905\u0917._\u0938\u093F\u0924._\u0905\u0915\u094D\u091F\u0942._\u0928\u0935._\u0926\u093F\u0938.".split("_"),
    monthsParseExact: !0,
    weekdays: "\u0930\u0935\u093F\u0935\u093E\u0930_\u0938\u094B\u092E\u0935\u093E\u0930_\u092E\u0902\u0917\u0932\u0935\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u0917\u0941\u0930\u0942\u0935\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930_\u0936\u0928\u093F\u0935\u093E\u0930".split("_"),
    weekdaysShort: "\u0930\u0935\u093F_\u0938\u094B\u092E_\u092E\u0902\u0917\u0932_\u092C\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094D\u0930_\u0936\u0928\u093F".split("_"),
    weekdaysMin: "\u0930_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
    longDateFormat: {
      LT: "A h:mm \u092C\u091C\u0947",
      LTS: "A h:mm:ss \u092C\u091C\u0947",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm \u092C\u091C\u0947",
      LLLL: "dddd, D MMMM YYYY, A h:mm \u092C\u091C\u0947"
    },
    calendar: {
      sameDay: "[\u0906\u091C] LT",
      nextDay: "[\u0915\u0932] LT",
      nextWeek: "dddd, LT",
      lastDay: "[\u0915\u0932] LT",
      lastWeek: "[\u092A\u093F\u091B\u0932\u0947] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u092E\u0947\u0902",
      past: "%s \u092A\u0939\u0932\u0947",
      s: "\u0915\u0941\u091B \u0939\u0940 \u0915\u094D\u0937\u0923",
      ss: "%d \u0938\u0947\u0915\u0902\u0921",
      m: "\u090F\u0915 \u092E\u093F\u0928\u091F",
      mm: "%d \u092E\u093F\u0928\u091F",
      h: "\u090F\u0915 \u0918\u0902\u091F\u093E",
      hh: "%d \u0918\u0902\u091F\u0947",
      d: "\u090F\u0915 \u0926\u093F\u0928",
      dd: "%d \u0926\u093F\u0928",
      M: "\u090F\u0915 \u092E\u0939\u0940\u0928\u0947",
      MM: "%d \u092E\u0939\u0940\u0928\u0947",
      y: "\u090F\u0915 \u0935\u0930\u094D\u0937",
      yy: "%d \u0935\u0930\u094D\u0937"
    },
    preparse: function preparse(e) {
      return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (e) {
        return Ns[e];
      });
    },
    postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return Js[e];
      });
    },
    meridiemParse: /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0930\u093E\u0924" === a ? e < 4 ? e : e + 12 : "\u0938\u0941\u092C\u0939" === a ? e : "\u0926\u094B\u092A\u0939\u0930" === a ? 10 <= e ? e : e + 12 : "\u0936\u093E\u092E" === a ? e + 12 : void 0;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0930\u093E\u0924" : e < 10 ? "\u0938\u0941\u092C\u0939" : e < 17 ? "\u0926\u094B\u092A\u0939\u0930" : e < 20 ? "\u0936\u093E\u092E" : "\u0930\u093E\u0924";
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), l.defineLocale("hr", {
    months: {
      format: "sije\u010Dnja_velja\u010De_o\u017Eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
      standalone: "sije\u010Danj_velja\u010Da_o\u017Eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
    },
    monthsShort: "sij._velj._o\u017Eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
    monthsParseExact: !0,
    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split("_"),
    weekdaysShort: "ned._pon._uto._sri._\u010Det._pet._sub.".split("_"),
    weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd, D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[danas u] LT",
      nextDay: "[sutra u] LT",
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return "[u] [nedjelju] [u] LT";

          case 3:
            return "[u] [srijedu] [u] LT";

          case 6:
            return "[u] [subotu] [u] LT";

          case 1:
          case 2:
          case 4:
          case 5:
            return "[u] dddd [u] LT";
        }
      },
      lastDay: "[ju\u010Der u] LT",
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
            return "[pro\u0161lu] dddd [u] LT";

          case 6:
            return "[pro\u0161le] [subote] [u] LT";

          case 1:
          case 2:
          case 4:
          case 5:
            return "[pro\u0161li] dddd [u] LT";
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "prije %s",
      s: "par sekundi",
      ss: Rs,
      m: Rs,
      mm: Rs,
      h: Rs,
      hh: Rs,
      d: "dan",
      dd: Rs,
      M: "mjesec",
      MM: Rs,
      y: "godinu",
      yy: Rs
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 7
    }
  });
  var Is = "vas\xE1rnap h\xE9tf\u0151n kedden szerd\xE1n cs\xFCt\xF6rt\xF6k\xF6n p\xE9nteken szombaton".split(" ");

  function Cs(e, a, t, s) {
    var n = e;

    switch (t) {
      case "s":
        return s || a ? "n\xe9h\xe1ny m\xe1sodperc" : "n\xe9h\xe1ny m\xe1sodperce";

      case "ss":
        return n + (s || a) ? " m\xe1sodperc" : " m\xe1sodperce";

      case "m":
        return "egy" + (s || a ? " perc" : " perce");

      case "mm":
        return n + (s || a ? " perc" : " perce");

      case "h":
        return "egy" + (s || a ? " \xf3ra" : " \xf3r\xe1ja");

      case "hh":
        return n + (s || a ? " \xf3ra" : " \xf3r\xe1ja");

      case "d":
        return "egy" + (s || a ? " nap" : " napja");

      case "dd":
        return n + (s || a ? " nap" : " napja");

      case "M":
        return "egy" + (s || a ? " h\xf3nap" : " h\xf3napja");

      case "MM":
        return n + (s || a ? " h\xf3nap" : " h\xf3napja");

      case "y":
        return "egy" + (s || a ? " \xe9v" : " \xe9ve");

      case "yy":
        return n + (s || a ? " \xe9v" : " \xe9ve");
    }

    return "";
  }

  function Gs(e) {
    return (e ? "" : "[m\xfalt] ") + "[" + Is[this.day()] + "] LT[-kor]";
  }

  function Us(e) {
    return e % 100 == 11 || e % 10 != 1;
  }

  function Vs(e, a, t, s) {
    var n = e + " ";

    switch (t) {
      case "s":
        return a || s ? "nokkrar sek\xfandur" : "nokkrum sek\xfandum";

      case "ss":
        return Us(e) ? n + (a || s ? "sek\xfandur" : "sek\xfandum") : n + "sek\xfanda";

      case "m":
        return a ? "m\xedn\xfata" : "m\xedn\xfatu";

      case "mm":
        return Us(e) ? n + (a || s ? "m\xedn\xfatur" : "m\xedn\xfatum") : a ? n + "m\xedn\xfata" : n + "m\xedn\xfatu";

      case "hh":
        return Us(e) ? n + (a || s ? "klukkustundir" : "klukkustundum") : n + "klukkustund";

      case "d":
        return a ? "dagur" : s ? "dag" : "degi";

      case "dd":
        return Us(e) ? a ? n + "dagar" : n + (s ? "daga" : "d\xf6gum") : a ? n + "dagur" : n + (s ? "dag" : "degi");

      case "M":
        return a ? "m\xe1nu\xf0ur" : s ? "m\xe1nu\xf0" : "m\xe1nu\xf0i";

      case "MM":
        return Us(e) ? a ? n + "m\xe1nu\xf0ir" : n + (s ? "m\xe1nu\xf0i" : "m\xe1nu\xf0um") : a ? n + "m\xe1nu\xf0ur" : n + (s ? "m\xe1nu\xf0" : "m\xe1nu\xf0i");

      case "y":
        return a || s ? "\xe1r" : "\xe1ri";

      case "yy":
        return Us(e) ? n + (a || s ? "\xe1r" : "\xe1rum") : n + (a || s ? "\xe1r" : "\xe1ri");
    }
  }

  l.defineLocale("hu", {
    months: "janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),
    monthsShort: "jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"),
    weekdays: "vas\xE1rnap_h\xE9tf\u0151_kedd_szerda_cs\xFCt\xF6rt\xF6k_p\xE9ntek_szombat".split("_"),
    weekdaysShort: "vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),
    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "YYYY.MM.DD.",
      LL: "YYYY. MMMM D.",
      LLL: "YYYY. MMMM D. H:mm",
      LLLL: "YYYY. MMMM D., dddd H:mm"
    },
    meridiemParse: /de|du/i,
    isPM: function isPM(e) {
      return "u" === e.charAt(1).toLowerCase();
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? !0 === t ? "de" : "DE" : !0 === t ? "du" : "DU";
    },
    calendar: {
      sameDay: "[ma] LT[-kor]",
      nextDay: "[holnap] LT[-kor]",
      nextWeek: function nextWeek() {
        return Gs.call(this, !0);
      },
      lastDay: "[tegnap] LT[-kor]",
      lastWeek: function lastWeek() {
        return Gs.call(this, !1);
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "%s m\xfalva",
      past: "%s",
      s: Cs,
      ss: Cs,
      m: Cs,
      mm: Cs,
      h: Cs,
      hh: Cs,
      d: Cs,
      dd: Cs,
      M: Cs,
      MM: Cs,
      y: Cs,
      yy: Cs
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("hy-am", {
    months: {
      format: "\u0570\u0578\u0582\u0576\u057E\u0561\u0580\u056B_\u0583\u0565\u057F\u0580\u057E\u0561\u0580\u056B_\u0574\u0561\u0580\u057F\u056B_\u0561\u057A\u0580\u056B\u056C\u056B_\u0574\u0561\u0575\u056B\u057D\u056B_\u0570\u0578\u0582\u0576\u056B\u057D\u056B_\u0570\u0578\u0582\u056C\u056B\u057D\u056B_\u0585\u0563\u0578\u057D\u057F\u0578\u057D\u056B_\u057D\u0565\u057A\u057F\u0565\u0574\u0562\u0565\u0580\u056B_\u0570\u0578\u056F\u057F\u0565\u0574\u0562\u0565\u0580\u056B_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056B_\u0564\u0565\u056F\u057F\u0565\u0574\u0562\u0565\u0580\u056B".split("_"),
      standalone: "\u0570\u0578\u0582\u0576\u057E\u0561\u0580_\u0583\u0565\u057F\u0580\u057E\u0561\u0580_\u0574\u0561\u0580\u057F_\u0561\u057A\u0580\u056B\u056C_\u0574\u0561\u0575\u056B\u057D_\u0570\u0578\u0582\u0576\u056B\u057D_\u0570\u0578\u0582\u056C\u056B\u057D_\u0585\u0563\u0578\u057D\u057F\u0578\u057D_\u057D\u0565\u057A\u057F\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056F\u057F\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056F\u057F\u0565\u0574\u0562\u0565\u0580".split("_")
    },
    monthsShort: "\u0570\u0576\u057E_\u0583\u057F\u0580_\u0574\u0580\u057F_\u0561\u057A\u0580_\u0574\u0575\u057D_\u0570\u0576\u057D_\u0570\u056C\u057D_\u0585\u0563\u057D_\u057D\u057A\u057F_\u0570\u056F\u057F_\u0576\u0574\u0562_\u0564\u056F\u057F".split("_"),
    weekdays: "\u056F\u056B\u0580\u0561\u056F\u056B_\u0565\u0580\u056F\u0578\u0582\u0577\u0561\u0562\u0569\u056B_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B_\u0570\u056B\u0576\u0563\u0577\u0561\u0562\u0569\u056B_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569".split("_"),
    weekdaysShort: "\u056F\u0580\u056F_\u0565\u0580\u056F_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),
    weekdaysMin: "\u056F\u0580\u056F_\u0565\u0580\u056F_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY \u0569.",
      LLL: "D MMMM YYYY \u0569., HH:mm",
      LLLL: "dddd, D MMMM YYYY \u0569., HH:mm"
    },
    calendar: {
      sameDay: "[\u0561\u0575\u057D\u0585\u0580] LT",
      nextDay: "[\u057E\u0561\u0572\u0568] LT",
      lastDay: "[\u0565\u0580\u0565\u056F] LT",
      nextWeek: function nextWeek() {
        return "dddd [\u0585\u0580\u0568 \u056A\u0561\u0574\u0568] LT";
      },
      lastWeek: function lastWeek() {
        return "[\u0561\u0576\u0581\u0561\u056E] dddd [\u0585\u0580\u0568 \u056A\u0561\u0574\u0568] LT";
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u0570\u0565\u057F\u0578",
      past: "%s \u0561\u057C\u0561\u057B",
      s: "\u0574\u056B \u0584\u0561\u0576\u056B \u057E\u0561\u0575\u0580\u056F\u0575\u0561\u0576",
      ss: "%d \u057E\u0561\u0575\u0580\u056F\u0575\u0561\u0576",
      m: "\u0580\u0578\u057A\u0565",
      mm: "%d \u0580\u0578\u057A\u0565",
      h: "\u056A\u0561\u0574",
      hh: "%d \u056A\u0561\u0574",
      d: "\u0585\u0580",
      dd: "%d \u0585\u0580",
      M: "\u0561\u0574\u056B\u057D",
      MM: "%d \u0561\u0574\u056B\u057D",
      y: "\u057F\u0561\u0580\u056B",
      yy: "%d \u057F\u0561\u0580\u056B"
    },
    meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,
    isPM: function isPM(e) {
      return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e);
    },
    meridiem: function meridiem(e) {
      return e < 4 ? "\u0563\u056B\u0577\u0565\u0580\u057E\u0561" : e < 12 ? "\u0561\u057C\u0561\u057E\u0578\u057F\u057E\u0561" : e < 17 ? "\u0581\u0565\u0580\u0565\u056F\u057E\u0561" : "\u0565\u0580\u0565\u056F\u0578\u0575\u0561\u0576";
    },
    dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,
    ordinal: function ordinal(e, a) {
      switch (a) {
        case "DDD":
        case "w":
        case "W":
        case "DDDo":
          return 1 === e ? e + "-\u056B\u0576" : e + "-\u0580\u0564";

        default:
          return e;
      }
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("id", {
    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
    weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
    weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
    longDateFormat: {
      LT: "HH.mm",
      LTS: "HH.mm.ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY [pukul] HH.mm",
      LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
    },
    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "pagi" === a ? e : "siang" === a ? 11 <= e ? e : e + 12 : "sore" === a || "malam" === a ? e + 12 : void 0;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam";
    },
    calendar: {
      sameDay: "[Hari ini pukul] LT",
      nextDay: "[Besok pukul] LT",
      nextWeek: "dddd [pukul] LT",
      lastDay: "[Kemarin pukul] LT",
      lastWeek: "dddd [lalu pukul] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "dalam %s",
      past: "%s yang lalu",
      s: "beberapa detik",
      ss: "%d detik",
      m: "semenit",
      mm: "%d menit",
      h: "sejam",
      hh: "%d jam",
      d: "sehari",
      dd: "%d hari",
      M: "sebulan",
      MM: "%d bulan",
      y: "setahun",
      yy: "%d tahun"
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("is", {
    months: "jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"),
    monthsShort: "jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"),
    weekdays: "sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"),
    weekdaysShort: "sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),
    weekdaysMin: "Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY [kl.] H:mm",
      LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
    },
    calendar: {
      sameDay: "[\xed dag kl.] LT",
      nextDay: "[\xe1 morgun kl.] LT",
      nextWeek: "dddd [kl.] LT",
      lastDay: "[\xed g\xe6r kl.] LT",
      lastWeek: "[s\xed\xf0asta] dddd [kl.] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "eftir %s",
      past: "fyrir %s s\xed\xf0an",
      s: Vs,
      ss: Vs,
      m: Vs,
      mm: Vs,
      h: "klukkustund",
      hh: Vs,
      d: Vs,
      dd: Vs,
      M: Vs,
      MM: Vs,
      y: Vs,
      yy: Vs
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("it", {
    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
    weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),
    weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
    weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Oggi alle] LT",
      nextDay: "[Domani alle] LT",
      nextWeek: "dddd [alle] LT",
      lastDay: "[Ieri alle] LT",
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return "[la scorsa] dddd [alle] LT";

          default:
            return "[lo scorso] dddd [alle] LT";
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: function future(e) {
        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
      },
      past: "%s fa",
      s: "alcuni secondi",
      ss: "%d secondi",
      m: "un minuto",
      mm: "%d minuti",
      h: "un'ora",
      hh: "%d ore",
      d: "un giorno",
      dd: "%d giorni",
      M: "un mese",
      MM: "%d mesi",
      y: "un anno",
      yy: "%d anni"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%d\xba",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("ja", {
    months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
    weekdays: "\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split("_"),
    weekdaysShort: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
    weekdaysMin: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY\u5E74M\u6708D\u65E5",
      LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
      LLLL: "YYYY\u5E74M\u6708D\u65E5 dddd HH:mm",
      l: "YYYY/MM/DD",
      ll: "YYYY\u5E74M\u6708D\u65E5",
      lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
      llll: "YYYY\u5E74M\u6708D\u65E5(ddd) HH:mm"
    },
    meridiemParse: /\u5348\u524d|\u5348\u5f8c/i,
    isPM: function isPM(e) {
      return "\u5348\u5F8C" === e;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u5348\u524D" : "\u5348\u5F8C";
    },
    calendar: {
      sameDay: "[\u4ECA\u65E5] LT",
      nextDay: "[\u660E\u65E5] LT",
      nextWeek: function nextWeek(e) {
        return e.week() < this.week() ? "[\u6765\u9031]dddd LT" : "dddd LT";
      },
      lastDay: "[\u6628\u65E5] LT",
      lastWeek: function lastWeek(e) {
        return this.week() < e.week() ? "[\u5148\u9031]dddd LT" : "dddd LT";
      },
      sameElse: "L"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\u65e5/,
    ordinal: function ordinal(e, a) {
      switch (a) {
        case "d":
        case "D":
        case "DDD":
          return e + "\u65E5";

        default:
          return e;
      }
    },
    relativeTime: {
      future: "%s\u5F8C",
      past: "%s\u524D",
      s: "\u6570\u79D2",
      ss: "%d\u79D2",
      m: "1\u5206",
      mm: "%d\u5206",
      h: "1\u6642\u9593",
      hh: "%d\u6642\u9593",
      d: "1\u65E5",
      dd: "%d\u65E5",
      M: "1\u30F6\u6708",
      MM: "%d\u30F6\u6708",
      y: "1\u5E74",
      yy: "%d\u5E74"
    }
  }), l.defineLocale("jv", {
    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
    weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
    weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
    longDateFormat: {
      LT: "HH.mm",
      LTS: "HH.mm.ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY [pukul] HH.mm",
      LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
    },
    meridiemParse: /enjing|siyang|sonten|ndalu/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "enjing" === a ? e : "siyang" === a ? 11 <= e ? e : e + 12 : "sonten" === a || "ndalu" === a ? e + 12 : void 0;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu";
    },
    calendar: {
      sameDay: "[Dinten puniko pukul] LT",
      nextDay: "[Mbenjang pukul] LT",
      nextWeek: "dddd [pukul] LT",
      lastDay: "[Kala wingi pukul] LT",
      lastWeek: "dddd [kepengker pukul] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "wonten ing %s",
      past: "%s ingkang kepengker",
      s: "sawetawis detik",
      ss: "%d detik",
      m: "setunggal menit",
      mm: "%d menit",
      h: "setunggal jam",
      hh: "%d jam",
      d: "sedinten",
      dd: "%d dinten",
      M: "sewulan",
      MM: "%d wulan",
      y: "setaun",
      yy: "%d taun"
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("ka", {
    months: {
      standalone: "\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8_\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8_\u10DB\u10D0\u10E0\u10E2\u10D8_\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8_\u10DB\u10D0\u10D8\u10E1\u10D8_\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8_\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8_\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD_\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8_\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8_\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8_\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8".split("_"),
      format: "\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10E1_\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10E1_\u10DB\u10D0\u10E0\u10E2\u10E1_\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8\u10E1_\u10DB\u10D0\u10D8\u10E1\u10E1_\u10D8\u10D5\u10DC\u10D8\u10E1\u10E1_\u10D8\u10D5\u10DA\u10D8\u10E1\u10E1_\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10E1_\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10E1_\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10E1_\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10E1_\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10E1".split("_")
    },
    monthsShort: "\u10D8\u10D0\u10DC_\u10D7\u10D4\u10D1_\u10DB\u10D0\u10E0_\u10D0\u10DE\u10E0_\u10DB\u10D0\u10D8_\u10D8\u10D5\u10DC_\u10D8\u10D5\u10DA_\u10D0\u10D2\u10D5_\u10E1\u10D4\u10E5_\u10DD\u10E5\u10E2_\u10DC\u10DD\u10D4_\u10D3\u10D4\u10D9".split("_"),
    weekdays: {
      standalone: "\u10D9\u10D5\u10D8\u10E0\u10D0_\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8_\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8".split("_"),
      format: "\u10D9\u10D5\u10D8\u10E0\u10D0\u10E1_\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10E1_\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1".split("_"),
      isFormat: /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/
    },
    weekdaysShort: "\u10D9\u10D5\u10D8_\u10DD\u10E0\u10E8_\u10E1\u10D0\u10DB_\u10DD\u10D7\u10EE_\u10EE\u10E3\u10D7_\u10DE\u10D0\u10E0_\u10E8\u10D0\u10D1".split("_"),
    weekdaysMin: "\u10D9\u10D5_\u10DD\u10E0_\u10E1\u10D0_\u10DD\u10D7_\u10EE\u10E3_\u10DE\u10D0_\u10E8\u10D0".split("_"),
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY h:mm A",
      LLLL: "dddd, D MMMM YYYY h:mm A"
    },
    calendar: {
      sameDay: "[\u10D3\u10E6\u10D4\u10E1] LT[-\u10D6\u10D4]",
      nextDay: "[\u10EE\u10D5\u10D0\u10DA] LT[-\u10D6\u10D4]",
      lastDay: "[\u10D2\u10E3\u10E8\u10D8\u10DC] LT[-\u10D6\u10D4]",
      nextWeek: "[\u10E8\u10D4\u10DB\u10D3\u10D4\u10D2] dddd LT[-\u10D6\u10D4]",
      lastWeek: "[\u10EC\u10D8\u10DC\u10D0] dddd LT-\u10D6\u10D4",
      sameElse: "L"
    },
    relativeTime: {
      future: function future(e) {
        return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(e) ? e.replace(/\u10d8$/, "\u10E8\u10D8") : e + "\u10E8\u10D8";
      },
      past: function past(e) {
        return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e) ? e.replace(/(\u10d8|\u10d4)$/, "\u10D8\u10E1 \u10EC\u10D8\u10DC") : /\u10ec\u10d4\u10da\u10d8/.test(e) ? e.replace(/\u10ec\u10d4\u10da\u10d8$/, "\u10EC\u10DA\u10D8\u10E1 \u10EC\u10D8\u10DC") : void 0;
      },
      s: "\u10E0\u10D0\u10DB\u10D3\u10D4\u10DC\u10D8\u10DB\u10D4 \u10EC\u10D0\u10DB\u10D8",
      ss: "%d \u10EC\u10D0\u10DB\u10D8",
      m: "\u10EC\u10E3\u10D7\u10D8",
      mm: "%d \u10EC\u10E3\u10D7\u10D8",
      h: "\u10E1\u10D0\u10D0\u10D7\u10D8",
      hh: "%d \u10E1\u10D0\u10D0\u10D7\u10D8",
      d: "\u10D3\u10E6\u10D4",
      dd: "%d \u10D3\u10E6\u10D4",
      M: "\u10D7\u10D5\u10D4",
      MM: "%d \u10D7\u10D5\u10D4",
      y: "\u10EC\u10D4\u10DA\u10D8",
      yy: "%d \u10EC\u10D4\u10DA\u10D8"
    },
    dayOfMonthOrdinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,
    ordinal: function ordinal(e) {
      return 0 === e ? e : 1 === e ? e + "-\u10DA\u10D8" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "\u10DB\u10D4-" + e : e + "-\u10D4";
    },
    week: {
      dow: 1,
      doy: 7
    }
  });
  var Ks = {
    0: "-\u0448\u0456",
    1: "-\u0448\u0456",
    2: "-\u0448\u0456",
    3: "-\u0448\u0456",
    4: "-\u0448\u0456",
    5: "-\u0448\u0456",
    6: "-\u0448\u044B",
    7: "-\u0448\u0456",
    8: "-\u0448\u0456",
    9: "-\u0448\u044B",
    10: "-\u0448\u044B",
    20: "-\u0448\u044B",
    30: "-\u0448\u044B",
    40: "-\u0448\u044B",
    50: "-\u0448\u0456",
    60: "-\u0448\u044B",
    70: "-\u0448\u0456",
    80: "-\u0448\u0456",
    90: "-\u0448\u044B",
    100: "-\u0448\u0456"
  };
  l.defineLocale("kk", {
    months: "\u049B\u0430\u04A3\u0442\u0430\u0440_\u0430\u049B\u043F\u0430\u043D_\u043D\u0430\u0443\u0440\u044B\u0437_\u0441\u04D9\u0443\u0456\u0440_\u043C\u0430\u043C\u044B\u0440_\u043C\u0430\u0443\u0441\u044B\u043C_\u0448\u0456\u043B\u0434\u0435_\u0442\u0430\u043C\u044B\u0437_\u049B\u044B\u0440\u043A\u04AF\u0439\u0435\u043A_\u049B\u0430\u0437\u0430\u043D_\u049B\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D".split("_"),
    monthsShort: "\u049B\u0430\u04A3_\u0430\u049B\u043F_\u043D\u0430\u0443_\u0441\u04D9\u0443_\u043C\u0430\u043C_\u043C\u0430\u0443_\u0448\u0456\u043B_\u0442\u0430\u043C_\u049B\u044B\u0440_\u049B\u0430\u0437_\u049B\u0430\u0440_\u0436\u0435\u043B".split("_"),
    weekdays: "\u0436\u0435\u043A\u0441\u0435\u043D\u0431\u0456_\u0434\u04AF\u0439\u0441\u0435\u043D\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043D\u0431\u0456_\u0441\u04D9\u0440\u0441\u0435\u043D\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043D\u0431\u0456_\u0436\u04B1\u043C\u0430_\u0441\u0435\u043D\u0431\u0456".split("_"),
    weekdaysShort: "\u0436\u0435\u043A_\u0434\u04AF\u0439_\u0441\u0435\u0439_\u0441\u04D9\u0440_\u0431\u0435\u0439_\u0436\u04B1\u043C_\u0441\u0435\u043D".split("_"),
    weekdaysMin: "\u0436\u043A_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043C_\u0441\u043D".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[\u0411\u04AF\u0433\u0456\u043D \u0441\u0430\u0493\u0430\u0442] LT",
      nextDay: "[\u0415\u0440\u0442\u0435\u04A3 \u0441\u0430\u0493\u0430\u0442] LT",
      nextWeek: "dddd [\u0441\u0430\u0493\u0430\u0442] LT",
      lastDay: "[\u041A\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT",
      lastWeek: "[\u04E8\u0442\u043A\u0435\u043D \u0430\u043F\u0442\u0430\u043D\u044B\u04A3] dddd [\u0441\u0430\u0493\u0430\u0442] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u0456\u0448\u0456\u043D\u0434\u0435",
      past: "%s \u0431\u04B1\u0440\u044B\u043D",
      s: "\u0431\u0456\u0440\u043D\u0435\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434",
      ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434",
      m: "\u0431\u0456\u0440 \u043C\u0438\u043D\u0443\u0442",
      mm: "%d \u043C\u0438\u043D\u0443\u0442",
      h: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442",
      hh: "%d \u0441\u0430\u0493\u0430\u0442",
      d: "\u0431\u0456\u0440 \u043A\u04AF\u043D",
      dd: "%d \u043A\u04AF\u043D",
      M: "\u0431\u0456\u0440 \u0430\u0439",
      MM: "%d \u0430\u0439",
      y: "\u0431\u0456\u0440 \u0436\u044B\u043B",
      yy: "%d \u0436\u044B\u043B"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0448\u0456|\u0448\u044b)/,
    ordinal: function ordinal(e) {
      return e + (Ks[e] || Ks[e % 10] || Ks[100 <= e ? 100 : null]);
    },
    week: {
      dow: 1,
      doy: 7
    }
  });
  var $s = {
    1: "\u17E1",
    2: "\u17E2",
    3: "\u17E3",
    4: "\u17E4",
    5: "\u17E5",
    6: "\u17E6",
    7: "\u17E7",
    8: "\u17E8",
    9: "\u17E9",
    0: "\u17E0"
  },
      Zs = {
    "\u17E1": "1",
    "\u17E2": "2",
    "\u17E3": "3",
    "\u17E4": "4",
    "\u17E5": "5",
    "\u17E6": "6",
    "\u17E7": "7",
    "\u17E8": "8",
    "\u17E9": "9",
    "\u17E0": "0"
  };
  l.defineLocale("km", {
    months: "\u1798\u1780\u179A\u17B6_\u1780\u17BB\u1798\u17D2\u1797\u17C8_\u1798\u17B8\u1793\u17B6_\u1798\u17C1\u179F\u17B6_\u17A7\u179F\u1797\u17B6_\u1798\u17B7\u1790\u17BB\u1793\u17B6_\u1780\u1780\u17D2\u1780\u178A\u17B6_\u179F\u17B8\u17A0\u17B6_\u1780\u1789\u17D2\u1789\u17B6_\u178F\u17BB\u179B\u17B6_\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6_\u1792\u17D2\u1793\u17BC".split("_"),
    monthsShort: "\u1798\u1780\u179A\u17B6_\u1780\u17BB\u1798\u17D2\u1797\u17C8_\u1798\u17B8\u1793\u17B6_\u1798\u17C1\u179F\u17B6_\u17A7\u179F\u1797\u17B6_\u1798\u17B7\u1790\u17BB\u1793\u17B6_\u1780\u1780\u17D2\u1780\u178A\u17B6_\u179F\u17B8\u17A0\u17B6_\u1780\u1789\u17D2\u1789\u17B6_\u178F\u17BB\u179B\u17B6_\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6_\u1792\u17D2\u1793\u17BC".split("_"),
    weekdays: "\u17A2\u17B6\u1791\u17B7\u178F\u17D2\u1799_\u1785\u17D0\u1793\u17D2\u1791_\u17A2\u1784\u17D2\u1782\u17B6\u179A_\u1796\u17BB\u1792_\u1796\u17D2\u179A\u17A0\u179F\u17D2\u1794\u178F\u17B7\u17CD_\u179F\u17BB\u1780\u17D2\u179A_\u179F\u17C5\u179A\u17CD".split("_"),
    weekdaysShort: "\u17A2\u17B6_\u1785_\u17A2_\u1796_\u1796\u17D2\u179A_\u179F\u17BB_\u179F".split("_"),
    weekdaysMin: "\u17A2\u17B6_\u1785_\u17A2_\u1796_\u1796\u17D2\u179A_\u179F\u17BB_\u179F".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/,
    isPM: function isPM(e) {
      return "\u179B\u17D2\u1784\u17B6\u1785" === e;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u1796\u17D2\u179A\u17B9\u1780" : "\u179B\u17D2\u1784\u17B6\u1785";
    },
    calendar: {
      sameDay: "[\u1790\u17D2\u1784\u17C3\u1793\u17C1\u17C7 \u1798\u17C9\u17C4\u1784] LT",
      nextDay: "[\u179F\u17D2\u17A2\u17C2\u1780 \u1798\u17C9\u17C4\u1784] LT",
      nextWeek: "dddd [\u1798\u17C9\u17C4\u1784] LT",
      lastDay: "[\u1798\u17D2\u179F\u17B7\u179B\u1798\u17B7\u1789 \u1798\u17C9\u17C4\u1784] LT",
      lastWeek: "dddd [\u179F\u1794\u17D2\u178F\u17B6\u17A0\u17CD\u1798\u17BB\u1793] [\u1798\u17C9\u17C4\u1784] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s\u1791\u17C0\u178F",
      past: "%s\u1798\u17BB\u1793",
      s: "\u1794\u17C9\u17BB\u1793\u17D2\u1798\u17B6\u1793\u179C\u17B7\u1793\u17B6\u1791\u17B8",
      ss: "%d \u179C\u17B7\u1793\u17B6\u1791\u17B8",
      m: "\u1798\u17BD\u1799\u1793\u17B6\u1791\u17B8",
      mm: "%d \u1793\u17B6\u1791\u17B8",
      h: "\u1798\u17BD\u1799\u1798\u17C9\u17C4\u1784",
      hh: "%d \u1798\u17C9\u17C4\u1784",
      d: "\u1798\u17BD\u1799\u1790\u17D2\u1784\u17C3",
      dd: "%d \u1790\u17D2\u1784\u17C3",
      M: "\u1798\u17BD\u1799\u1781\u17C2",
      MM: "%d \u1781\u17C2",
      y: "\u1798\u17BD\u1799\u1786\u17D2\u1793\u17B6\u17C6",
      yy: "%d \u1786\u17D2\u1793\u17B6\u17C6"
    },
    dayOfMonthOrdinalParse: /\u1791\u17b8\d{1,2}/,
    ordinal: "\u1791\u17B8%d",
    preparse: function preparse(e) {
      return e.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g, function (e) {
        return Zs[e];
      });
    },
    postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return $s[e];
      });
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Bs = {
    1: "\u0CE7",
    2: "\u0CE8",
    3: "\u0CE9",
    4: "\u0CEA",
    5: "\u0CEB",
    6: "\u0CEC",
    7: "\u0CED",
    8: "\u0CEE",
    9: "\u0CEF",
    0: "\u0CE6"
  },
      qs = {
    "\u0CE7": "1",
    "\u0CE8": "2",
    "\u0CE9": "3",
    "\u0CEA": "4",
    "\u0CEB": "5",
    "\u0CEC": "6",
    "\u0CED": "7",
    "\u0CEE": "8",
    "\u0CEF": "9",
    "\u0CE6": "0"
  };
  l.defineLocale("kn", {
    months: "\u0C9C\u0CA8\u0CB5\u0CB0\u0CBF_\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0\u0CB5\u0CB0\u0CBF_\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD_\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF\u0CB2\u0CCD_\u0CAE\u0CC6\u0CD5_\u0C9C\u0CC2\u0CA8\u0CCD_\u0C9C\u0CC1\u0CB2\u0CC6\u0CD6_\u0C86\u0C97\u0CB8\u0CCD\u0C9F\u0CCD_\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82\u0CAC\u0CB0\u0CCD_\u0C85\u0C95\u0CCD\u0C9F\u0CC6\u0CC2\u0CD5\u0CAC\u0CB0\u0CCD_\u0CA8\u0CB5\u0CC6\u0C82\u0CAC\u0CB0\u0CCD_\u0CA1\u0CBF\u0CB8\u0CC6\u0C82\u0CAC\u0CB0\u0CCD".split("_"),
    monthsShort: "\u0C9C\u0CA8_\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0_\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD_\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF\u0CB2\u0CCD_\u0CAE\u0CC6\u0CD5_\u0C9C\u0CC2\u0CA8\u0CCD_\u0C9C\u0CC1\u0CB2\u0CC6\u0CD6_\u0C86\u0C97\u0CB8\u0CCD\u0C9F\u0CCD_\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82_\u0C85\u0C95\u0CCD\u0C9F\u0CC6\u0CC2\u0CD5_\u0CA8\u0CB5\u0CC6\u0C82_\u0CA1\u0CBF\u0CB8\u0CC6\u0C82".split("_"),
    monthsParseExact: !0,
    weekdays: "\u0CAD\u0CBE\u0CA8\u0CC1\u0CB5\u0CBE\u0CB0_\u0CB8\u0CC6\u0CC2\u0CD5\u0CAE\u0CB5\u0CBE\u0CB0_\u0CAE\u0C82\u0C97\u0CB3\u0CB5\u0CBE\u0CB0_\u0CAC\u0CC1\u0CA7\u0CB5\u0CBE\u0CB0_\u0C97\u0CC1\u0CB0\u0CC1\u0CB5\u0CBE\u0CB0_\u0CB6\u0CC1\u0C95\u0CCD\u0CB0\u0CB5\u0CBE\u0CB0_\u0CB6\u0CA8\u0CBF\u0CB5\u0CBE\u0CB0".split("_"),
    weekdaysShort: "\u0CAD\u0CBE\u0CA8\u0CC1_\u0CB8\u0CC6\u0CC2\u0CD5\u0CAE_\u0CAE\u0C82\u0C97\u0CB3_\u0CAC\u0CC1\u0CA7_\u0C97\u0CC1\u0CB0\u0CC1_\u0CB6\u0CC1\u0C95\u0CCD\u0CB0_\u0CB6\u0CA8\u0CBF".split("_"),
    weekdaysMin: "\u0CAD\u0CBE_\u0CB8\u0CC6\u0CC2\u0CD5_\u0CAE\u0C82_\u0CAC\u0CC1_\u0C97\u0CC1_\u0CB6\u0CC1_\u0CB6".split("_"),
    longDateFormat: {
      LT: "A h:mm",
      LTS: "A h:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm",
      LLLL: "dddd, D MMMM YYYY, A h:mm"
    },
    calendar: {
      sameDay: "[\u0C87\u0C82\u0CA6\u0CC1] LT",
      nextDay: "[\u0CA8\u0CBE\u0CB3\u0CC6] LT",
      nextWeek: "dddd, LT",
      lastDay: "[\u0CA8\u0CBF\u0CA8\u0CCD\u0CA8\u0CC6] LT",
      lastWeek: "[\u0C95\u0CC6\u0CC2\u0CA8\u0CC6\u0CAF] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u0CA8\u0C82\u0CA4\u0CB0",
      past: "%s \u0CB9\u0CBF\u0C82\u0CA6\u0CC6",
      s: "\u0C95\u0CC6\u0CB2\u0CB5\u0CC1 \u0C95\u0CCD\u0CB7\u0CA3\u0C97\u0CB3\u0CC1",
      ss: "%d \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CC1\u0C97\u0CB3\u0CC1",
      m: "\u0C92\u0C82\u0CA6\u0CC1 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7",
      mm: "%d \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7",
      h: "\u0C92\u0C82\u0CA6\u0CC1 \u0C97\u0C82\u0C9F\u0CC6",
      hh: "%d \u0C97\u0C82\u0C9F\u0CC6",
      d: "\u0C92\u0C82\u0CA6\u0CC1 \u0CA6\u0CBF\u0CA8",
      dd: "%d \u0CA6\u0CBF\u0CA8",
      M: "\u0C92\u0C82\u0CA6\u0CC1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1",
      MM: "%d \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1",
      y: "\u0C92\u0C82\u0CA6\u0CC1 \u0CB5\u0CB0\u0CCD\u0CB7",
      yy: "%d \u0CB5\u0CB0\u0CCD\u0CB7"
    },
    preparse: function preparse(e) {
      return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, function (e) {
        return qs[e];
      });
    },
    postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return Bs[e];
      });
    },
    meridiemParse: /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF" === a ? e < 4 ? e : e + 12 : "\u0CAC\u0CC6\u0CB3\u0CBF\u0C97\u0CCD\u0C97\u0CC6" === a ? e : "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CB9\u0CCD\u0CA8" === a ? 10 <= e ? e : e + 12 : "\u0CB8\u0C82\u0C9C\u0CC6" === a ? e + 12 : void 0;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF" : e < 10 ? "\u0CAC\u0CC6\u0CB3\u0CBF\u0C97\u0CCD\u0C97\u0CC6" : e < 17 ? "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CB9\u0CCD\u0CA8" : e < 20 ? "\u0CB8\u0C82\u0C9C\u0CC6" : "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF";
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/,
    ordinal: function ordinal(e) {
      return e + "\u0CA8\u0CC6\u0CD5";
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), l.defineLocale("ko", {
    months: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),
    monthsShort: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),
    weekdays: "\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_"),
    weekdaysShort: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),
    weekdaysMin: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),
    longDateFormat: {
      LT: "A h:mm",
      LTS: "A h:mm:ss",
      L: "YYYY.MM.DD.",
      LL: "YYYY\uB144 MMMM D\uC77C",
      LLL: "YYYY\uB144 MMMM D\uC77C A h:mm",
      LLLL: "YYYY\uB144 MMMM D\uC77C dddd A h:mm",
      l: "YYYY.MM.DD.",
      ll: "YYYY\uB144 MMMM D\uC77C",
      lll: "YYYY\uB144 MMMM D\uC77C A h:mm",
      llll: "YYYY\uB144 MMMM D\uC77C dddd A h:mm"
    },
    calendar: {
      sameDay: "\uC624\uB298 LT",
      nextDay: "\uB0B4\uC77C LT",
      nextWeek: "dddd LT",
      lastDay: "\uC5B4\uC81C LT",
      lastWeek: "\uC9C0\uB09C\uC8FC dddd LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \uD6C4",
      past: "%s \uC804",
      s: "\uBA87 \uCD08",
      ss: "%d\uCD08",
      m: "1\uBD84",
      mm: "%d\uBD84",
      h: "\uD55C \uC2DC\uAC04",
      hh: "%d\uC2DC\uAC04",
      d: "\uD558\uB8E8",
      dd: "%d\uC77C",
      M: "\uD55C \uB2EC",
      MM: "%d\uB2EC",
      y: "\uC77C \uB144",
      yy: "%d\uB144"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\uc77c|\uc6d4|\uc8fc)/,
    ordinal: function ordinal(e, a) {
      switch (a) {
        case "d":
        case "D":
        case "DDD":
          return e + "\uC77C";

        case "M":
          return e + "\uC6D4";

        case "w":
        case "W":
          return e + "\uC8FC";

        default:
          return e;
      }
    },
    meridiemParse: /\uc624\uc804|\uc624\ud6c4/,
    isPM: function isPM(e) {
      return "\uC624\uD6C4" === e;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\uC624\uC804" : "\uC624\uD6C4";
    }
  });
  var Qs = {
    0: "-\u0447\u04AF",
    1: "-\u0447\u0438",
    2: "-\u0447\u0438",
    3: "-\u0447\u04AF",
    4: "-\u0447\u04AF",
    5: "-\u0447\u0438",
    6: "-\u0447\u044B",
    7: "-\u0447\u0438",
    8: "-\u0447\u0438",
    9: "-\u0447\u0443",
    10: "-\u0447\u0443",
    20: "-\u0447\u044B",
    30: "-\u0447\u0443",
    40: "-\u0447\u044B",
    50: "-\u0447\u04AF",
    60: "-\u0447\u044B",
    70: "-\u0447\u0438",
    80: "-\u0447\u0438",
    90: "-\u0447\u0443",
    100: "-\u0447\u04AF"
  };

  function Xs(e, a, t, s) {
    var n = {
      m: ["eng Minutt", "enger Minutt"],
      h: ["eng Stonn", "enger Stonn"],
      d: ["een Dag", "engem Dag"],
      M: ["ee Mount", "engem Mount"],
      y: ["ee Joer", "engem Joer"]
    };
    return a ? n[t][0] : n[t][1];
  }

  function en(e) {
    if (e = parseInt(e, 10), isNaN(e)) return !1;
    if (e < 0) return !0;
    if (e < 10) return 4 <= e && e <= 7;

    if (e < 100) {
      var a = e % 10;
      return en(0 === a ? e / 10 : a);
    }

    if (e < 1e4) {
      for (; 10 <= e;) {
        e /= 10;
      }

      return en(e);
    }

    return en(e /= 1e3);
  }

  l.defineLocale("ky", {
    months: "\u044F\u043D\u0432\u0430\u0440\u044C_\u0444\u0435\u0432\u0440\u0430\u043B\u044C_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B\u044C_\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C_\u043E\u043A\u0442\u044F\u0431\u0440\u044C_\u043D\u043E\u044F\u0431\u0440\u044C_\u0434\u0435\u043A\u0430\u0431\u0440\u044C".split("_"),
    monthsShort: "\u044F\u043D\u0432_\u0444\u0435\u0432_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440_\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433_\u0441\u0435\u043D_\u043E\u043A\u0442_\u043D\u043E\u044F_\u0434\u0435\u043A".split("_"),
    weekdays: "\u0416\u0435\u043A\u0448\u0435\u043C\u0431\u0438_\u0414\u04AF\u0439\u0448\u04E9\u043C\u0431\u04AF_\u0428\u0435\u0439\u0448\u0435\u043C\u0431\u0438_\u0428\u0430\u0440\u0448\u0435\u043C\u0431\u0438_\u0411\u0435\u0439\u0448\u0435\u043C\u0431\u0438_\u0416\u0443\u043C\u0430_\u0418\u0448\u0435\u043C\u0431\u0438".split("_"),
    weekdaysShort: "\u0416\u0435\u043A_\u0414\u04AF\u0439_\u0428\u0435\u0439_\u0428\u0430\u0440_\u0411\u0435\u0439_\u0416\u0443\u043C_\u0418\u0448\u0435".split("_"),
    weekdaysMin: "\u0416\u043A_\u0414\u0439_\u0428\u0439_\u0428\u0440_\u0411\u0439_\u0416\u043C_\u0418\u0448".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[\u0411\u04AF\u0433\u04AF\u043D \u0441\u0430\u0430\u0442] LT",
      nextDay: "[\u042D\u0440\u0442\u0435\u04A3 \u0441\u0430\u0430\u0442] LT",
      nextWeek: "dddd [\u0441\u0430\u0430\u0442] LT",
      lastDay: "[\u041A\u0435\u0447\u0435 \u0441\u0430\u0430\u0442] LT",
      lastWeek: "[\u04E8\u0442\u043A\u0435\u043D \u0430\u043F\u0442\u0430\u043D\u044B\u043D] dddd [\u043A\u04AF\u043D\u04AF] [\u0441\u0430\u0430\u0442] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u0438\u0447\u0438\u043D\u0434\u0435",
      past: "%s \u043C\u0443\u0440\u0443\u043D",
      s: "\u0431\u0438\u0440\u043D\u0435\u0447\u0435 \u0441\u0435\u043A\u0443\u043D\u0434",
      ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434",
      m: "\u0431\u0438\u0440 \u043C\u04AF\u043D\u04E9\u0442",
      mm: "%d \u043C\u04AF\u043D\u04E9\u0442",
      h: "\u0431\u0438\u0440 \u0441\u0430\u0430\u0442",
      hh: "%d \u0441\u0430\u0430\u0442",
      d: "\u0431\u0438\u0440 \u043A\u04AF\u043D",
      dd: "%d \u043A\u04AF\u043D",
      M: "\u0431\u0438\u0440 \u0430\u0439",
      MM: "%d \u0430\u0439",
      y: "\u0431\u0438\u0440 \u0436\u044B\u043B",
      yy: "%d \u0436\u044B\u043B"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/,
    ordinal: function ordinal(e) {
      return e + (Qs[e] || Qs[e % 10] || Qs[100 <= e ? 100 : null]);
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("lb", {
    months: "Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
    monthsParseExact: !0,
    weekdays: "Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
    weekdaysShort: "So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"),
    weekdaysMin: "So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm [Auer]",
      LTS: "H:mm:ss [Auer]",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm [Auer]",
      LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
    },
    calendar: {
      sameDay: "[Haut um] LT",
      sameElse: "L",
      nextDay: "[Muer um] LT",
      nextWeek: "dddd [um] LT",
      lastDay: "[G\xebschter um] LT",
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 2:
          case 4:
            return "[Leschten] dddd [um] LT";

          default:
            return "[Leschte] dddd [um] LT";
        }
      }
    },
    relativeTime: {
      future: function future(e) {
        return en(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
      },
      past: function past(e) {
        return en(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
      },
      s: "e puer Sekonnen",
      ss: "%d Sekonnen",
      m: Xs,
      mm: "%d Minutten",
      h: Xs,
      hh: "%d Stonnen",
      d: Xs,
      dd: "%d Deeg",
      M: Xs,
      MM: "%d M\xe9int",
      y: Xs,
      yy: "%d Joer"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("lo", {
    months: "\u0EA1\u0EB1\u0E87\u0E81\u0EAD\u0E99_\u0E81\u0EB8\u0EA1\u0E9E\u0EB2_\u0EA1\u0EB5\u0E99\u0EB2_\u0EC0\u0EA1\u0EAA\u0EB2_\u0E9E\u0EB6\u0E94\u0EAA\u0EB0\u0E9E\u0EB2_\u0EA1\u0EB4\u0E96\u0EB8\u0E99\u0EB2_\u0E81\u0ECD\u0EA5\u0EB0\u0E81\u0EBB\u0E94_\u0EAA\u0EB4\u0E87\u0EAB\u0EB2_\u0E81\u0EB1\u0E99\u0E8D\u0EB2_\u0E95\u0EB8\u0EA5\u0EB2_\u0E9E\u0EB0\u0E88\u0EB4\u0E81_\u0E97\u0EB1\u0E99\u0EA7\u0EB2".split("_"),
    monthsShort: "\u0EA1\u0EB1\u0E87\u0E81\u0EAD\u0E99_\u0E81\u0EB8\u0EA1\u0E9E\u0EB2_\u0EA1\u0EB5\u0E99\u0EB2_\u0EC0\u0EA1\u0EAA\u0EB2_\u0E9E\u0EB6\u0E94\u0EAA\u0EB0\u0E9E\u0EB2_\u0EA1\u0EB4\u0E96\u0EB8\u0E99\u0EB2_\u0E81\u0ECD\u0EA5\u0EB0\u0E81\u0EBB\u0E94_\u0EAA\u0EB4\u0E87\u0EAB\u0EB2_\u0E81\u0EB1\u0E99\u0E8D\u0EB2_\u0E95\u0EB8\u0EA5\u0EB2_\u0E9E\u0EB0\u0E88\u0EB4\u0E81_\u0E97\u0EB1\u0E99\u0EA7\u0EB2".split("_"),
    weekdays: "\u0EAD\u0EB2\u0E97\u0EB4\u0E94_\u0E88\u0EB1\u0E99_\u0EAD\u0EB1\u0E87\u0E84\u0EB2\u0E99_\u0E9E\u0EB8\u0E94_\u0E9E\u0EB0\u0EAB\u0EB1\u0E94_\u0EAA\u0EB8\u0E81_\u0EC0\u0EAA\u0EBB\u0EB2".split("_"),
    weekdaysShort: "\u0E97\u0EB4\u0E94_\u0E88\u0EB1\u0E99_\u0EAD\u0EB1\u0E87\u0E84\u0EB2\u0E99_\u0E9E\u0EB8\u0E94_\u0E9E\u0EB0\u0EAB\u0EB1\u0E94_\u0EAA\u0EB8\u0E81_\u0EC0\u0EAA\u0EBB\u0EB2".split("_"),
    weekdaysMin: "\u0E97_\u0E88_\u0EAD\u0E84_\u0E9E_\u0E9E\u0EAB_\u0EAA\u0E81_\u0EAA".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "\u0EA7\u0EB1\u0E99dddd D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/,
    isPM: function isPM(e) {
      return "\u0E95\u0EAD\u0E99\u0EC1\u0EA5\u0E87" === e;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0E95\u0EAD\u0E99\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2" : "\u0E95\u0EAD\u0E99\u0EC1\u0EA5\u0E87";
    },
    calendar: {
      sameDay: "[\u0EA1\u0EB7\u0EC9\u0E99\u0EB5\u0EC9\u0EC0\u0EA7\u0EA5\u0EB2] LT",
      nextDay: "[\u0EA1\u0EB7\u0EC9\u0EAD\u0EB7\u0EC8\u0E99\u0EC0\u0EA7\u0EA5\u0EB2] LT",
      nextWeek: "[\u0EA7\u0EB1\u0E99]dddd[\u0EDC\u0EC9\u0EB2\u0EC0\u0EA7\u0EA5\u0EB2] LT",
      lastDay: "[\u0EA1\u0EB7\u0EC9\u0EA7\u0EB2\u0E99\u0E99\u0EB5\u0EC9\u0EC0\u0EA7\u0EA5\u0EB2] LT",
      lastWeek: "[\u0EA7\u0EB1\u0E99]dddd[\u0EC1\u0EA5\u0EC9\u0EA7\u0E99\u0EB5\u0EC9\u0EC0\u0EA7\u0EA5\u0EB2] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u0EAD\u0EB5\u0E81 %s",
      past: "%s\u0E9C\u0EC8\u0EB2\u0E99\u0EA1\u0EB2",
      s: "\u0E9A\u0ECD\u0EC8\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94\u0EA7\u0EB4\u0E99\u0EB2\u0E97\u0EB5",
      ss: "%d \u0EA7\u0EB4\u0E99\u0EB2\u0E97\u0EB5",
      m: "1 \u0E99\u0EB2\u0E97\u0EB5",
      mm: "%d \u0E99\u0EB2\u0E97\u0EB5",
      h: "1 \u0E8A\u0EBB\u0EC8\u0EA7\u0EC2\u0EA1\u0E87",
      hh: "%d \u0E8A\u0EBB\u0EC8\u0EA7\u0EC2\u0EA1\u0E87",
      d: "1 \u0EA1\u0EB7\u0EC9",
      dd: "%d \u0EA1\u0EB7\u0EC9",
      M: "1 \u0EC0\u0E94\u0EB7\u0EAD\u0E99",
      MM: "%d \u0EC0\u0E94\u0EB7\u0EAD\u0E99",
      y: "1 \u0E9B\u0EB5",
      yy: "%d \u0E9B\u0EB5"
    },
    dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/,
    ordinal: function ordinal(e) {
      return "\u0E97\u0EB5\u0EC8" + e;
    }
  });
  var an = {
    ss: "sekund\u0117_sekund\u017Ei\u0173_sekundes",
    m: "minut\u0117_minut\u0117s_minut\u0119",
    mm: "minut\u0117s_minu\u010Di\u0173_minutes",
    h: "valanda_valandos_valand\u0105",
    hh: "valandos_valand\u0173_valandas",
    d: "diena_dienos_dien\u0105",
    dd: "dienos_dien\u0173_dienas",
    M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012F",
    MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",
    y: "metai_met\u0173_metus",
    yy: "metai_met\u0173_metus"
  };

  function tn(e, a, t, s) {
    return a ? nn(t)[0] : s ? nn(t)[1] : nn(t)[2];
  }

  function sn(e) {
    return e % 10 == 0 || 10 < e && e < 20;
  }

  function nn(e) {
    return an[e].split("_");
  }

  function dn(e, a, t, s) {
    var n = e + " ";
    return 1 === e ? n + tn(0, a, t[0], s) : a ? n + (sn(e) ? nn(t)[1] : nn(t)[0]) : s ? n + nn(t)[1] : n + (sn(e) ? nn(t)[1] : nn(t)[2]);
  }

  l.defineLocale("lt", {
    months: {
      format: "sausio_vasario_kovo_baland\u017Eio_gegu\u017E\u0117s_bir\u017Eelio_liepos_rugpj\u016B\u010Dio_rugs\u0117jo_spalio_lapkri\u010Dio_gruod\u017Eio".split("_"),
      standalone: "sausis_vasaris_kovas_balandis_gegu\u017E\u0117_bir\u017Eelis_liepa_rugpj\u016Btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"),
      isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
    },
    monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
    weekdays: {
      format: "sekmadien\u012F_pirmadien\u012F_antradien\u012F_tre\u010Diadien\u012F_ketvirtadien\u012F_penktadien\u012F_\u0161e\u0161tadien\u012F".split("_"),
      standalone: "sekmadienis_pirmadienis_antradienis_tre\u010Diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"),
      isFormat: /dddd HH:mm/
    },
    weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"),
    weekdaysMin: "S_P_A_T_K_Pn_\u0160".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "YYYY [m.] MMMM D [d.]",
      LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
      LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
      l: "YYYY-MM-DD",
      ll: "YYYY [m.] MMMM D [d.]",
      lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
      llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
    },
    calendar: {
      sameDay: "[\u0160iandien] LT",
      nextDay: "[Rytoj] LT",
      nextWeek: "dddd LT",
      lastDay: "[Vakar] LT",
      lastWeek: "[Pra\u0117jus\u012F] dddd LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "po %s",
      past: "prie\u0161 %s",
      s: function s(e, a, t, _s2) {
        return a ? "kelios sekund\u0117s" : _s2 ? "keli\u0173 sekund\u017Ei\u0173" : "kelias sekundes";
      },
      ss: dn,
      m: tn,
      mm: dn,
      h: tn,
      hh: dn,
      d: tn,
      dd: dn,
      M: tn,
      MM: dn,
      y: tn,
      yy: dn
    },
    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
    ordinal: function ordinal(e) {
      return e + "-oji";
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var rn = {
    ss: "sekundes_sekund\u0113m_sekunde_sekundes".split("_"),
    m: "min\u016Btes_min\u016Bt\u0113m_min\u016Bte_min\u016Btes".split("_"),
    mm: "min\u016Btes_min\u016Bt\u0113m_min\u016Bte_min\u016Btes".split("_"),
    h: "stundas_stund\u0101m_stunda_stundas".split("_"),
    hh: "stundas_stund\u0101m_stunda_stundas".split("_"),
    d: "dienas_dien\u0101m_diena_dienas".split("_"),
    dd: "dienas_dien\u0101m_diena_dienas".split("_"),
    M: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),
    MM: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),
    y: "gada_gadiem_gads_gadi".split("_"),
    yy: "gada_gadiem_gads_gadi".split("_")
  };

  function _n(e, a, t) {
    return t ? a % 10 == 1 && a % 100 != 11 ? e[2] : e[3] : a % 10 == 1 && a % 100 != 11 ? e[0] : e[1];
  }

  function on(e, a, t) {
    return e + " " + _n(rn[t], e, a);
  }

  function mn(e, a, t) {
    return _n(rn[t], e, a);
  }

  l.defineLocale("lv", {
    months: "janv\u0101ris_febru\u0101ris_marts_apr\u012Blis_maijs_j\u016Bnijs_j\u016Blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
    monthsShort: "jan_feb_mar_apr_mai_j\u016Bn_j\u016Bl_aug_sep_okt_nov_dec".split("_"),
    weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),
    weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
    weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY.",
      LL: "YYYY. [gada] D. MMMM",
      LLL: "YYYY. [gada] D. MMMM, HH:mm",
      LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
    },
    calendar: {
      sameDay: "[\u0160odien pulksten] LT",
      nextDay: "[R\u012Bt pulksten] LT",
      nextWeek: "dddd [pulksten] LT",
      lastDay: "[Vakar pulksten] LT",
      lastWeek: "[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "p\u0113c %s",
      past: "pirms %s",
      s: function s(e, a) {
        return a ? "da\u017Eas sekundes" : "da\u017E\u0101m sekund\u0113m";
      },
      ss: on,
      m: mn,
      mm: on,
      h: mn,
      hh: on,
      d: mn,
      dd: on,
      M: mn,
      MM: on,
      y: mn,
      yy: on
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  });
  var un = {
    words: {
      ss: ["sekund", "sekunda", "sekundi"],
      m: ["jedan minut", "jednog minuta"],
      mm: ["minut", "minuta", "minuta"],
      h: ["jedan sat", "jednog sata"],
      hh: ["sat", "sata", "sati"],
      dd: ["dan", "dana", "dana"],
      MM: ["mjesec", "mjeseca", "mjeseci"],
      yy: ["godina", "godine", "godina"]
    },
    correctGrammaticalCase: function correctGrammaticalCase(e, a) {
      return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2];
    },
    translate: function translate(e, a, t) {
      var s = un.words[t];
      return 1 === t.length ? a ? s[0] : s[1] : e + " " + un.correctGrammaticalCase(e, s);
    }
  };

  function ln(e, a, t, s) {
    switch (t) {
      case "s":
        return a ? "\u0445\u044D\u0434\u0445\u044D\u043D \u0441\u0435\u043A\u0443\u043D\u0434" : "\u0445\u044D\u0434\u0445\u044D\u043D \u0441\u0435\u043A\u0443\u043D\u0434\u044B\u043D";

      case "ss":
        return e + (a ? " \u0441\u0435\u043A\u0443\u043D\u0434" : " \u0441\u0435\u043A\u0443\u043D\u0434\u044B\u043D");

      case "m":
      case "mm":
        return e + (a ? " \u043C\u0438\u043D\u0443\u0442" : " \u043C\u0438\u043D\u0443\u0442\u044B\u043D");

      case "h":
      case "hh":
        return e + (a ? " \u0446\u0430\u0433" : " \u0446\u0430\u0433\u0438\u0439\u043D");

      case "d":
      case "dd":
        return e + (a ? " \u04E9\u0434\u04E9\u0440" : " \u04E9\u0434\u0440\u0438\u0439\u043D");

      case "M":
      case "MM":
        return e + (a ? " \u0441\u0430\u0440" : " \u0441\u0430\u0440\u044B\u043D");

      case "y":
      case "yy":
        return e + (a ? " \u0436\u0438\u043B" : " \u0436\u0438\u043B\u0438\u0439\u043D");

      default:
        return e;
    }
  }

  l.defineLocale("me", {
    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split("_"),
    weekdaysShort: "ned._pon._uto._sri._\u010Det._pet._sub.".split("_"),
    weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd, D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[danas u] LT",
      nextDay: "[sjutra u] LT",
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return "[u] [nedjelju] [u] LT";

          case 3:
            return "[u] [srijedu] [u] LT";

          case 6:
            return "[u] [subotu] [u] LT";

          case 1:
          case 2:
          case 4:
          case 5:
            return "[u] dddd [u] LT";
        }
      },
      lastDay: "[ju\u010De u] LT",
      lastWeek: function lastWeek() {
        return ["[pro\u0161le] [nedjelje] [u] LT", "[pro\u0161log] [ponedjeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srijede] [u] LT", "[pro\u0161log] [\u010Detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()];
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "prije %s",
      s: "nekoliko sekundi",
      ss: un.translate,
      m: un.translate,
      mm: un.translate,
      h: un.translate,
      hh: un.translate,
      d: "dan",
      dd: un.translate,
      M: "mjesec",
      MM: un.translate,
      y: "godinu",
      yy: un.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("mi", {
    months: "Kohi-t\u0101te_Hui-tanguru_Pout\u016B-te-rangi_Paenga-wh\u0101wh\u0101_Haratua_Pipiri_H\u014Dngoingoi_Here-turi-k\u014Dk\u0101_Mahuru_Whiringa-\u0101-nuku_Whiringa-\u0101-rangi_Hakihea".split("_"),
    monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_H\u014Dngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
    monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
    weekdays: "R\u0101tapu_Mane_T\u016Brei_Wenerei_T\u0101ite_Paraire_H\u0101tarei".split("_"),
    weekdaysShort: "Ta_Ma_T\u016B_We_T\u0101i_Pa_H\u0101".split("_"),
    weekdaysMin: "Ta_Ma_T\u016B_We_T\u0101i_Pa_H\u0101".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY [i] HH:mm",
      LLLL: "dddd, D MMMM YYYY [i] HH:mm"
    },
    calendar: {
      sameDay: "[i teie mahana, i] LT",
      nextDay: "[apopo i] LT",
      nextWeek: "dddd [i] LT",
      lastDay: "[inanahi i] LT",
      lastWeek: "dddd [whakamutunga i] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "i roto i %s",
      past: "%s i mua",
      s: "te h\u0113kona ruarua",
      ss: "%d h\u0113kona",
      m: "he meneti",
      mm: "%d meneti",
      h: "te haora",
      hh: "%d haora",
      d: "he ra",
      dd: "%d ra",
      M: "he marama",
      MM: "%d marama",
      y: "he tau",
      yy: "%d tau"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%d\xba",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("mk", {
    months: "\u0458\u0430\u043D\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0458_\u0458\u0443\u043D\u0438_\u0458\u0443\u043B\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438_\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438_\u043D\u043E\u0435\u043C\u0432\u0440\u0438_\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438".split("_"),
    monthsShort: "\u0458\u0430\u043D_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0458_\u0458\u0443\u043D_\u0458\u0443\u043B_\u0430\u0432\u0433_\u0441\u0435\u043F_\u043E\u043A\u0442_\u043D\u043E\u0435_\u0434\u0435\u043A".split("_"),
    weekdays: "\u043D\u0435\u0434\u0435\u043B\u0430_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043E\u043A_\u043F\u0435\u0442\u043E\u043A_\u0441\u0430\u0431\u043E\u0442\u0430".split("_"),
    weekdaysShort: "\u043D\u0435\u0434_\u043F\u043E\u043D_\u0432\u0442\u043E_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043F\u0435\u0442_\u0441\u0430\u0431".split("_"),
    weekdaysMin: "\u043De_\u043Fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043F\u0435_\u0441a".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "D.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY H:mm",
      LLLL: "dddd, D MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[\u0414\u0435\u043D\u0435\u0441 \u0432\u043E] LT",
      nextDay: "[\u0423\u0442\u0440\u0435 \u0432\u043E] LT",
      nextWeek: "[\u0412\u043E] dddd [\u0432\u043E] LT",
      lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432\u043E] LT",
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 6:
            return "[\u0418\u0437\u043C\u0438\u043D\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043E] LT";

          case 1:
          case 2:
          case 4:
          case 5:
            return "[\u0418\u0437\u043C\u0438\u043D\u0430\u0442\u0438\u043E\u0442] dddd [\u0432\u043E] LT";
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "\u043F\u043E\u0441\u043B\u0435 %s",
      past: "\u043F\u0440\u0435\u0434 %s",
      s: "\u043D\u0435\u043A\u043E\u043B\u043A\u0443 \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
      ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
      m: "\u043C\u0438\u043D\u0443\u0442\u0430",
      mm: "%d \u043C\u0438\u043D\u0443\u0442\u0438",
      h: "\u0447\u0430\u0441",
      hh: "%d \u0447\u0430\u0441\u0430",
      d: "\u0434\u0435\u043D",
      dd: "%d \u0434\u0435\u043D\u0430",
      M: "\u043C\u0435\u0441\u0435\u0446",
      MM: "%d \u043C\u0435\u0441\u0435\u0446\u0438",
      y: "\u0433\u043E\u0434\u0438\u043D\u0430",
      yy: "%d \u0433\u043E\u0434\u0438\u043D\u0438"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
    ordinal: function ordinal(e) {
      var a = e % 10,
          t = e % 100;
      return 0 === e ? e + "-\u0435\u0432" : 0 === t ? e + "-\u0435\u043D" : 10 < t && t < 20 ? e + "-\u0442\u0438" : 1 === a ? e + "-\u0432\u0438" : 2 === a ? e + "-\u0440\u0438" : 7 === a || 8 === a ? e + "-\u043C\u0438" : e + "-\u0442\u0438";
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("ml", {
    months: "\u0D1C\u0D28\u0D41\u0D35\u0D30\u0D3F_\u0D2B\u0D46\u0D2C\u0D4D\u0D30\u0D41\u0D35\u0D30\u0D3F_\u0D2E\u0D3E\u0D7C\u0D1A\u0D4D\u0D1A\u0D4D_\u0D0F\u0D2A\u0D4D\u0D30\u0D3F\u0D7D_\u0D2E\u0D47\u0D2F\u0D4D_\u0D1C\u0D42\u0D7A_\u0D1C\u0D42\u0D32\u0D48_\u0D13\u0D17\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D_\u0D38\u0D46\u0D2A\u0D4D\u0D31\u0D4D\u0D31\u0D02\u0D2C\u0D7C_\u0D12\u0D15\u0D4D\u0D1F\u0D4B\u0D2C\u0D7C_\u0D28\u0D35\u0D02\u0D2C\u0D7C_\u0D21\u0D3F\u0D38\u0D02\u0D2C\u0D7C".split("_"),
    monthsShort: "\u0D1C\u0D28\u0D41._\u0D2B\u0D46\u0D2C\u0D4D\u0D30\u0D41._\u0D2E\u0D3E\u0D7C._\u0D0F\u0D2A\u0D4D\u0D30\u0D3F._\u0D2E\u0D47\u0D2F\u0D4D_\u0D1C\u0D42\u0D7A_\u0D1C\u0D42\u0D32\u0D48._\u0D13\u0D17._\u0D38\u0D46\u0D2A\u0D4D\u0D31\u0D4D\u0D31._\u0D12\u0D15\u0D4D\u0D1F\u0D4B._\u0D28\u0D35\u0D02._\u0D21\u0D3F\u0D38\u0D02.".split("_"),
    monthsParseExact: !0,
    weekdays: "\u0D1E\u0D3E\u0D2F\u0D31\u0D3E\u0D34\u0D4D\u0D1A_\u0D24\u0D3F\u0D19\u0D4D\u0D15\u0D33\u0D3E\u0D34\u0D4D\u0D1A_\u0D1A\u0D4A\u0D35\u0D4D\u0D35\u0D3E\u0D34\u0D4D\u0D1A_\u0D2C\u0D41\u0D27\u0D28\u0D3E\u0D34\u0D4D\u0D1A_\u0D35\u0D4D\u0D2F\u0D3E\u0D34\u0D3E\u0D34\u0D4D\u0D1A_\u0D35\u0D46\u0D33\u0D4D\u0D33\u0D3F\u0D2F\u0D3E\u0D34\u0D4D\u0D1A_\u0D36\u0D28\u0D3F\u0D2F\u0D3E\u0D34\u0D4D\u0D1A".split("_"),
    weekdaysShort: "\u0D1E\u0D3E\u0D2F\u0D7C_\u0D24\u0D3F\u0D19\u0D4D\u0D15\u0D7E_\u0D1A\u0D4A\u0D35\u0D4D\u0D35_\u0D2C\u0D41\u0D27\u0D7B_\u0D35\u0D4D\u0D2F\u0D3E\u0D34\u0D02_\u0D35\u0D46\u0D33\u0D4D\u0D33\u0D3F_\u0D36\u0D28\u0D3F".split("_"),
    weekdaysMin: "\u0D1E\u0D3E_\u0D24\u0D3F_\u0D1A\u0D4A_\u0D2C\u0D41_\u0D35\u0D4D\u0D2F\u0D3E_\u0D35\u0D46_\u0D36".split("_"),
    longDateFormat: {
      LT: "A h:mm -\u0D28\u0D41",
      LTS: "A h:mm:ss -\u0D28\u0D41",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm -\u0D28\u0D41",
      LLLL: "dddd, D MMMM YYYY, A h:mm -\u0D28\u0D41"
    },
    calendar: {
      sameDay: "[\u0D07\u0D28\u0D4D\u0D28\u0D4D] LT",
      nextDay: "[\u0D28\u0D3E\u0D33\u0D46] LT",
      nextWeek: "dddd, LT",
      lastDay: "[\u0D07\u0D28\u0D4D\u0D28\u0D32\u0D46] LT",
      lastWeek: "[\u0D15\u0D34\u0D3F\u0D1E\u0D4D\u0D1E] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u0D15\u0D34\u0D3F\u0D1E\u0D4D\u0D1E\u0D4D",
      past: "%s \u0D2E\u0D41\u0D7B\u0D2A\u0D4D",
      s: "\u0D05\u0D7D\u0D2A \u0D28\u0D3F\u0D2E\u0D3F\u0D37\u0D19\u0D4D\u0D19\u0D7E",
      ss: "%d \u0D38\u0D46\u0D15\u0D4D\u0D15\u0D7B\u0D21\u0D4D",
      m: "\u0D12\u0D30\u0D41 \u0D2E\u0D3F\u0D28\u0D3F\u0D31\u0D4D\u0D31\u0D4D",
      mm: "%d \u0D2E\u0D3F\u0D28\u0D3F\u0D31\u0D4D\u0D31\u0D4D",
      h: "\u0D12\u0D30\u0D41 \u0D2E\u0D23\u0D3F\u0D15\u0D4D\u0D15\u0D42\u0D7C",
      hh: "%d \u0D2E\u0D23\u0D3F\u0D15\u0D4D\u0D15\u0D42\u0D7C",
      d: "\u0D12\u0D30\u0D41 \u0D26\u0D3F\u0D35\u0D38\u0D02",
      dd: "%d \u0D26\u0D3F\u0D35\u0D38\u0D02",
      M: "\u0D12\u0D30\u0D41 \u0D2E\u0D3E\u0D38\u0D02",
      MM: "%d \u0D2E\u0D3E\u0D38\u0D02",
      y: "\u0D12\u0D30\u0D41 \u0D35\u0D7C\u0D37\u0D02",
      yy: "%d \u0D35\u0D7C\u0D37\u0D02"
    },
    meridiemParse: /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0D30\u0D3E\u0D24\u0D4D\u0D30\u0D3F" === a && 4 <= e || "\u0D09\u0D1A\u0D4D\u0D1A \u0D15\u0D34\u0D3F\u0D1E\u0D4D\u0D1E\u0D4D" === a || "\u0D35\u0D48\u0D15\u0D41\u0D28\u0D4D\u0D28\u0D47\u0D30\u0D02" === a ? e + 12 : e;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0D30\u0D3E\u0D24\u0D4D\u0D30\u0D3F" : e < 12 ? "\u0D30\u0D3E\u0D35\u0D3F\u0D32\u0D46" : e < 17 ? "\u0D09\u0D1A\u0D4D\u0D1A \u0D15\u0D34\u0D3F\u0D1E\u0D4D\u0D1E\u0D4D" : e < 20 ? "\u0D35\u0D48\u0D15\u0D41\u0D28\u0D4D\u0D28\u0D47\u0D30\u0D02" : "\u0D30\u0D3E\u0D24\u0D4D\u0D30\u0D3F";
    }
  }), l.defineLocale("mn", {
    months: "\u041D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0425\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04E9\u0440\u04E9\u0432\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043E\u043B\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041D\u0430\u0439\u043C\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043D \u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043D \u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split("_"),
    monthsShort: "1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split("_"),
    monthsParseExact: !0,
    weekdays: "\u041D\u044F\u043C_\u0414\u0430\u0432\u0430\u0430_\u041C\u044F\u0433\u043C\u0430\u0440_\u041B\u0445\u0430\u0433\u0432\u0430_\u041F\u04AF\u0440\u044D\u0432_\u0411\u0430\u0430\u0441\u0430\u043D_\u0411\u044F\u043C\u0431\u0430".split("_"),
    weekdaysShort: "\u041D\u044F\u043C_\u0414\u0430\u0432_\u041C\u044F\u0433_\u041B\u0445\u0430_\u041F\u04AF\u0440_\u0411\u0430\u0430_\u0411\u044F\u043C".split("_"),
    weekdaysMin: "\u041D\u044F_\u0414\u0430_\u041C\u044F_\u041B\u0445_\u041F\u04AF_\u0411\u0430_\u0411\u044F".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "YYYY \u043E\u043D\u044B MMMM\u044B\u043D D",
      LLL: "YYYY \u043E\u043D\u044B MMMM\u044B\u043D D HH:mm",
      LLLL: "dddd, YYYY \u043E\u043D\u044B MMMM\u044B\u043D D HH:mm"
    },
    meridiemParse: /\u04ae\u04e8|\u04ae\u0425/i,
    isPM: function isPM(e) {
      return "\u04AE\u0425" === e;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u04AE\u04E8" : "\u04AE\u0425";
    },
    calendar: {
      sameDay: "[\u04E8\u043D\u04E9\u04E9\u0434\u04E9\u0440] LT",
      nextDay: "[\u041C\u0430\u0440\u0433\u0430\u0430\u0448] LT",
      nextWeek: "[\u0418\u0440\u044D\u0445] dddd LT",
      lastDay: "[\u04E8\u0447\u0438\u0433\u0434\u04E9\u0440] LT",
      lastWeek: "[\u04E8\u043D\u0433\u04E9\u0440\u0441\u04E9\u043D] dddd LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u0434\u0430\u0440\u0430\u0430",
      past: "%s \u04E9\u043C\u043D\u04E9",
      s: ln,
      ss: ln,
      m: ln,
      mm: ln,
      h: ln,
      hh: ln,
      d: ln,
      dd: ln,
      M: ln,
      MM: ln,
      y: ln,
      yy: ln
    },
    dayOfMonthOrdinalParse: /\d{1,2} \u04e9\u0434\u04e9\u0440/,
    ordinal: function ordinal(e, a) {
      switch (a) {
        case "d":
        case "D":
        case "DDD":
          return e + " \u04E9\u0434\u04E9\u0440";

        default:
          return e;
      }
    }
  });
  var Mn = {
    1: "\u0967",
    2: "\u0968",
    3: "\u0969",
    4: "\u096A",
    5: "\u096B",
    6: "\u096C",
    7: "\u096D",
    8: "\u096E",
    9: "\u096F",
    0: "\u0966"
  },
      hn = {
    "\u0967": "1",
    "\u0968": "2",
    "\u0969": "3",
    "\u096A": "4",
    "\u096B": "5",
    "\u096C": "6",
    "\u096D": "7",
    "\u096E": "8",
    "\u096F": "9",
    "\u0966": "0"
  };

  function Ln(e, a, t, s) {
    var n = "";
    if (a) switch (t) {
      case "s":
        n = "\u0915\u093E\u0939\u0940 \u0938\u0947\u0915\u0902\u0926";
        break;

      case "ss":
        n = "%d \u0938\u0947\u0915\u0902\u0926";
        break;

      case "m":
        n = "\u090F\u0915 \u092E\u093F\u0928\u093F\u091F";
        break;

      case "mm":
        n = "%d \u092E\u093F\u0928\u093F\u091F\u0947";
        break;

      case "h":
        n = "\u090F\u0915 \u0924\u093E\u0938";
        break;

      case "hh":
        n = "%d \u0924\u093E\u0938";
        break;

      case "d":
        n = "\u090F\u0915 \u0926\u093F\u0935\u0938";
        break;

      case "dd":
        n = "%d \u0926\u093F\u0935\u0938";
        break;

      case "M":
        n = "\u090F\u0915 \u092E\u0939\u093F\u0928\u093E";
        break;

      case "MM":
        n = "%d \u092E\u0939\u093F\u0928\u0947";
        break;

      case "y":
        n = "\u090F\u0915 \u0935\u0930\u094D\u0937";
        break;

      case "yy":
        n = "%d \u0935\u0930\u094D\u0937\u0947";
        break;
    } else switch (t) {
      case "s":
        n = "\u0915\u093E\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093E\u0902";
        break;

      case "ss":
        n = "%d \u0938\u0947\u0915\u0902\u0926\u093E\u0902";
        break;

      case "m":
        n = "\u090F\u0915\u093E \u092E\u093F\u0928\u093F\u091F\u093E";
        break;

      case "mm":
        n = "%d \u092E\u093F\u0928\u093F\u091F\u093E\u0902";
        break;

      case "h":
        n = "\u090F\u0915\u093E \u0924\u093E\u0938\u093E";
        break;

      case "hh":
        n = "%d \u0924\u093E\u0938\u093E\u0902";
        break;

      case "d":
        n = "\u090F\u0915\u093E \u0926\u093F\u0935\u0938\u093E";
        break;

      case "dd":
        n = "%d \u0926\u093F\u0935\u0938\u093E\u0902";
        break;

      case "M":
        n = "\u090F\u0915\u093E \u092E\u0939\u093F\u0928\u094D\u092F\u093E";
        break;

      case "MM":
        n = "%d \u092E\u0939\u093F\u0928\u094D\u092F\u093E\u0902";
        break;

      case "y":
        n = "\u090F\u0915\u093E \u0935\u0930\u094D\u0937\u093E";
        break;

      case "yy":
        n = "%d \u0935\u0930\u094D\u0937\u093E\u0902";
        break;
    }
    return n.replace(/%d/i, e);
  }

  l.defineLocale("mr", {
    months: "\u091C\u093E\u0928\u0947\u0935\u093E\u0930\u0940_\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u093E\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u090F\u092A\u094D\u0930\u093F\u0932_\u092E\u0947_\u091C\u0942\u0928_\u091C\u0941\u0932\u0948_\u0911\u0917\u0938\u094D\u091F_\u0938\u092A\u094D\u091F\u0947\u0902\u092C\u0930_\u0911\u0915\u094D\u091F\u094B\u092C\u0930_\u0928\u094B\u0935\u094D\u0939\u0947\u0902\u092C\u0930_\u0921\u093F\u0938\u0947\u0902\u092C\u0930".split("_"),
    monthsShort: "\u091C\u093E\u0928\u0947._\u092B\u0947\u092C\u094D\u0930\u0941._\u092E\u093E\u0930\u094D\u091A._\u090F\u092A\u094D\u0930\u093F._\u092E\u0947._\u091C\u0942\u0928._\u091C\u0941\u0932\u0948._\u0911\u0917._\u0938\u092A\u094D\u091F\u0947\u0902._\u0911\u0915\u094D\u091F\u094B._\u0928\u094B\u0935\u094D\u0939\u0947\u0902._\u0921\u093F\u0938\u0947\u0902.".split("_"),
    monthsParseExact: !0,
    weekdays: "\u0930\u0935\u093F\u0935\u093E\u0930_\u0938\u094B\u092E\u0935\u093E\u0930_\u092E\u0902\u0917\u0933\u0935\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u0917\u0941\u0930\u0942\u0935\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930_\u0936\u0928\u093F\u0935\u093E\u0930".split("_"),
    weekdaysShort: "\u0930\u0935\u093F_\u0938\u094B\u092E_\u092E\u0902\u0917\u0933_\u092C\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094D\u0930_\u0936\u0928\u093F".split("_"),
    weekdaysMin: "\u0930_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
    longDateFormat: {
      LT: "A h:mm \u0935\u093E\u091C\u0924\u093E",
      LTS: "A h:mm:ss \u0935\u093E\u091C\u0924\u093E",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm \u0935\u093E\u091C\u0924\u093E",
      LLLL: "dddd, D MMMM YYYY, A h:mm \u0935\u093E\u091C\u0924\u093E"
    },
    calendar: {
      sameDay: "[\u0906\u091C] LT",
      nextDay: "[\u0909\u0926\u094D\u092F\u093E] LT",
      nextWeek: "dddd, LT",
      lastDay: "[\u0915\u093E\u0932] LT",
      lastWeek: "[\u092E\u093E\u0917\u0940\u0932] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s\u092E\u0927\u094D\u092F\u0947",
      past: "%s\u092A\u0942\u0930\u094D\u0935\u0940",
      s: Ln,
      ss: Ln,
      m: Ln,
      mm: Ln,
      h: Ln,
      hh: Ln,
      d: Ln,
      dd: Ln,
      M: Ln,
      MM: Ln,
      y: Ln,
      yy: Ln
    },
    preparse: function preparse(e) {
      return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (e) {
        return hn[e];
      });
    },
    postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return Mn[e];
      });
    },
    meridiemParse: /\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0930\u093E\u0924\u094D\u0930\u0940" === a ? e < 4 ? e : e + 12 : "\u0938\u0915\u093E\u0933\u0940" === a ? e : "\u0926\u0941\u092A\u093E\u0930\u0940" === a ? 10 <= e ? e : e + 12 : "\u0938\u093E\u092F\u0902\u0915\u093E\u0933\u0940" === a ? e + 12 : void 0;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0930\u093E\u0924\u094D\u0930\u0940" : e < 10 ? "\u0938\u0915\u093E\u0933\u0940" : e < 17 ? "\u0926\u0941\u092A\u093E\u0930\u0940" : e < 20 ? "\u0938\u093E\u092F\u0902\u0915\u093E\u0933\u0940" : "\u0930\u093E\u0924\u094D\u0930\u0940";
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), l.defineLocale("ms-my", {
    months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
    weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
    weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
    weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
    longDateFormat: {
      LT: "HH.mm",
      LTS: "HH.mm.ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY [pukul] HH.mm",
      LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
    },
    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "pagi" === a ? e : "tengahari" === a ? 11 <= e ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
    },
    calendar: {
      sameDay: "[Hari ini pukul] LT",
      nextDay: "[Esok pukul] LT",
      nextWeek: "dddd [pukul] LT",
      lastDay: "[Kelmarin pukul] LT",
      lastWeek: "dddd [lepas pukul] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "dalam %s",
      past: "%s yang lepas",
      s: "beberapa saat",
      ss: "%d saat",
      m: "seminit",
      mm: "%d minit",
      h: "sejam",
      hh: "%d jam",
      d: "sehari",
      dd: "%d hari",
      M: "sebulan",
      MM: "%d bulan",
      y: "setahun",
      yy: "%d tahun"
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("ms", {
    months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
    weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
    weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
    weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
    longDateFormat: {
      LT: "HH.mm",
      LTS: "HH.mm.ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY [pukul] HH.mm",
      LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
    },
    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "pagi" === a ? e : "tengahari" === a ? 11 <= e ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
    },
    calendar: {
      sameDay: "[Hari ini pukul] LT",
      nextDay: "[Esok pukul] LT",
      nextWeek: "dddd [pukul] LT",
      lastDay: "[Kelmarin pukul] LT",
      lastWeek: "dddd [lepas pukul] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "dalam %s",
      past: "%s yang lepas",
      s: "beberapa saat",
      ss: "%d saat",
      m: "seminit",
      mm: "%d minit",
      h: "sejam",
      hh: "%d jam",
      d: "sehari",
      dd: "%d hari",
      M: "sebulan",
      MM: "%d bulan",
      y: "setahun",
      yy: "%d tahun"
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("mt", {
    months: "Jannar_Frar_Marzu_April_Mejju_\u0120unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di\u010Bembru".split("_"),
    monthsShort: "Jan_Fra_Mar_Apr_Mej_\u0120un_Lul_Aww_Set_Ott_Nov_Di\u010B".split("_"),
    weekdays: "Il-\u0126add_It-Tnejn_It-Tlieta_L-Erbg\u0127a_Il-\u0126amis_Il-\u0120img\u0127a_Is-Sibt".split("_"),
    weekdaysShort: "\u0126ad_Tne_Tli_Erb_\u0126am_\u0120im_Sib".split("_"),
    weekdaysMin: "\u0126a_Tn_Tl_Er_\u0126a_\u0120i_Si".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Illum fil-]LT",
      nextDay: "[G\u0127ada fil-]LT",
      nextWeek: "dddd [fil-]LT",
      lastDay: "[Il-biera\u0127 fil-]LT",
      lastWeek: "dddd [li g\u0127adda] [fil-]LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "f\u2019 %s",
      past: "%s ilu",
      s: "ftit sekondi",
      ss: "%d sekondi",
      m: "minuta",
      mm: "%d minuti",
      h: "sieg\u0127a",
      hh: "%d sieg\u0127at",
      d: "\u0121urnata",
      dd: "%d \u0121ranet",
      M: "xahar",
      MM: "%d xhur",
      y: "sena",
      yy: "%d sni"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%d\xba",
    week: {
      dow: 1,
      doy: 4
    }
  });
  var cn = {
    1: "\u1041",
    2: "\u1042",
    3: "\u1043",
    4: "\u1044",
    5: "\u1045",
    6: "\u1046",
    7: "\u1047",
    8: "\u1048",
    9: "\u1049",
    0: "\u1040"
  },
      Yn = {
    "\u1041": "1",
    "\u1042": "2",
    "\u1043": "3",
    "\u1044": "4",
    "\u1045": "5",
    "\u1046": "6",
    "\u1047": "7",
    "\u1048": "8",
    "\u1049": "9",
    "\u1040": "0"
  };
  l.defineLocale("my", {
    months: "\u1007\u1014\u103A\u1014\u101D\u102B\u101B\u102E_\u1016\u1031\u1016\u1031\u102C\u103A\u101D\u102B\u101B\u102E_\u1019\u1010\u103A_\u1027\u1015\u103C\u102E_\u1019\u1031_\u1007\u103D\u1014\u103A_\u1007\u1030\u101C\u102D\u102F\u1004\u103A_\u101E\u103C\u1002\u102F\u1010\u103A_\u1005\u1000\u103A\u1010\u1004\u103A\u1018\u102C_\u1021\u1031\u102C\u1000\u103A\u1010\u102D\u102F\u1018\u102C_\u1014\u102D\u102F\u101D\u1004\u103A\u1018\u102C_\u1012\u102E\u1007\u1004\u103A\u1018\u102C".split("_"),
    monthsShort: "\u1007\u1014\u103A_\u1016\u1031_\u1019\u1010\u103A_\u1015\u103C\u102E_\u1019\u1031_\u1007\u103D\u1014\u103A_\u101C\u102D\u102F\u1004\u103A_\u101E\u103C_\u1005\u1000\u103A_\u1021\u1031\u102C\u1000\u103A_\u1014\u102D\u102F_\u1012\u102E".split("_"),
    weekdays: "\u1010\u1014\u1004\u103A\u1039\u1002\u1014\u103D\u1031_\u1010\u1014\u1004\u103A\u1039\u101C\u102C_\u1021\u1004\u103A\u1039\u1002\u102B_\u1017\u102F\u1012\u1039\u1013\u101F\u1030\u1038_\u1000\u103C\u102C\u101E\u1015\u1010\u1031\u1038_\u101E\u1031\u102C\u1000\u103C\u102C_\u1005\u1014\u1031".split("_"),
    weekdaysShort: "\u1014\u103D\u1031_\u101C\u102C_\u1002\u102B_\u101F\u1030\u1038_\u1000\u103C\u102C_\u101E\u1031\u102C_\u1014\u1031".split("_"),
    weekdaysMin: "\u1014\u103D\u1031_\u101C\u102C_\u1002\u102B_\u101F\u1030\u1038_\u1000\u103C\u102C_\u101E\u1031\u102C_\u1014\u1031".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[\u101A\u1014\u1031.] LT [\u1019\u103E\u102C]",
      nextDay: "[\u1019\u1014\u1000\u103A\u1016\u103C\u1014\u103A] LT [\u1019\u103E\u102C]",
      nextWeek: "dddd LT [\u1019\u103E\u102C]",
      lastDay: "[\u1019\u1014\u1031.\u1000] LT [\u1019\u103E\u102C]",
      lastWeek: "[\u1015\u103C\u102E\u1038\u1001\u1032\u1037\u101E\u1031\u102C] dddd LT [\u1019\u103E\u102C]",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u101C\u102C\u1019\u100A\u103A\u1037 %s \u1019\u103E\u102C",
      past: "\u101C\u103D\u1014\u103A\u1001\u1032\u1037\u101E\u1031\u102C %s \u1000",
      s: "\u1005\u1000\u1039\u1000\u1014\u103A.\u1021\u1014\u100A\u103A\u1038\u1004\u101A\u103A",
      ss: "%d \u1005\u1000\u1039\u1000\u1014\u1037\u103A",
      m: "\u1010\u1005\u103A\u1019\u102D\u1014\u1005\u103A",
      mm: "%d \u1019\u102D\u1014\u1005\u103A",
      h: "\u1010\u1005\u103A\u1014\u102C\u101B\u102E",
      hh: "%d \u1014\u102C\u101B\u102E",
      d: "\u1010\u1005\u103A\u101B\u1000\u103A",
      dd: "%d \u101B\u1000\u103A",
      M: "\u1010\u1005\u103A\u101C",
      MM: "%d \u101C",
      y: "\u1010\u1005\u103A\u1014\u103E\u1005\u103A",
      yy: "%d \u1014\u103E\u1005\u103A"
    },
    preparse: function preparse(e) {
      return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, function (e) {
        return Yn[e];
      });
    },
    postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return cn[e];
      });
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("nb", {
    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
    monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
    monthsParseExact: !0,
    weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
    weekdaysShort: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),
    weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY [kl.] HH:mm",
      LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
    },
    calendar: {
      sameDay: "[i dag kl.] LT",
      nextDay: "[i morgen kl.] LT",
      nextWeek: "dddd [kl.] LT",
      lastDay: "[i g\xe5r kl.] LT",
      lastWeek: "[forrige] dddd [kl.] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "om %s",
      past: "%s siden",
      s: "noen sekunder",
      ss: "%d sekunder",
      m: "ett minutt",
      mm: "%d minutter",
      h: "en time",
      hh: "%d timer",
      d: "en dag",
      dd: "%d dager",
      M: "en m\xe5ned",
      MM: "%d m\xe5neder",
      y: "ett \xe5r",
      yy: "%d \xe5r"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  });
  var yn = {
    1: "\u0967",
    2: "\u0968",
    3: "\u0969",
    4: "\u096A",
    5: "\u096B",
    6: "\u096C",
    7: "\u096D",
    8: "\u096E",
    9: "\u096F",
    0: "\u0966"
  },
      fn = {
    "\u0967": "1",
    "\u0968": "2",
    "\u0969": "3",
    "\u096A": "4",
    "\u096B": "5",
    "\u096C": "6",
    "\u096D": "7",
    "\u096E": "8",
    "\u096F": "9",
    "\u0966": "0"
  };
  l.defineLocale("ne", {
    months: "\u091C\u0928\u0935\u0930\u0940_\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u093F\u0932_\u092E\u0908_\u091C\u0941\u0928_\u091C\u0941\u0932\u093E\u0908_\u0905\u0917\u0937\u094D\u091F_\u0938\u0947\u092A\u094D\u091F\u0947\u092E\u094D\u092C\u0930_\u0905\u0915\u094D\u091F\u094B\u092C\u0930_\u0928\u094B\u092D\u0947\u092E\u094D\u092C\u0930_\u0921\u093F\u0938\u0947\u092E\u094D\u092C\u0930".split("_"),
    monthsShort: "\u091C\u0928._\u092B\u0947\u092C\u094D\u0930\u0941._\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u093F._\u092E\u0908_\u091C\u0941\u0928_\u091C\u0941\u0932\u093E\u0908._\u0905\u0917._\u0938\u0947\u092A\u094D\u091F._\u0905\u0915\u094D\u091F\u094B._\u0928\u094B\u092D\u0947._\u0921\u093F\u0938\u0947.".split("_"),
    monthsParseExact: !0,
    weekdays: "\u0906\u0907\u0924\u092C\u093E\u0930_\u0938\u094B\u092E\u092C\u093E\u0930_\u092E\u0919\u094D\u0917\u0932\u092C\u093E\u0930_\u092C\u0941\u0927\u092C\u093E\u0930_\u092C\u093F\u0939\u093F\u092C\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u092C\u093E\u0930_\u0936\u0928\u093F\u092C\u093E\u0930".split("_"),
    weekdaysShort: "\u0906\u0907\u0924._\u0938\u094B\u092E._\u092E\u0919\u094D\u0917\u0932._\u092C\u0941\u0927._\u092C\u093F\u0939\u093F._\u0936\u0941\u0915\u094D\u0930._\u0936\u0928\u093F.".split("_"),
    weekdaysMin: "\u0906._\u0938\u094B._\u092E\u0902._\u092C\u0941._\u092C\u093F._\u0936\u0941._\u0936.".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "A\u0915\u094B h:mm \u092C\u091C\u0947",
      LTS: "A\u0915\u094B h:mm:ss \u092C\u091C\u0947",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A\u0915\u094B h:mm \u092C\u091C\u0947",
      LLLL: "dddd, D MMMM YYYY, A\u0915\u094B h:mm \u092C\u091C\u0947"
    },
    preparse: function preparse(e) {
      return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (e) {
        return fn[e];
      });
    },
    postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return yn[e];
      });
    },
    meridiemParse: /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0930\u093E\u0924\u093F" === a ? e < 4 ? e : e + 12 : "\u092C\u093F\u0939\u093E\u0928" === a ? e : "\u0926\u093F\u0909\u0901\u0938\u094B" === a ? 10 <= e ? e : e + 12 : "\u0938\u093E\u0901\u091D" === a ? e + 12 : void 0;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 3 ? "\u0930\u093E\u0924\u093F" : e < 12 ? "\u092C\u093F\u0939\u093E\u0928" : e < 16 ? "\u0926\u093F\u0909\u0901\u0938\u094B" : e < 20 ? "\u0938\u093E\u0901\u091D" : "\u0930\u093E\u0924\u093F";
    },
    calendar: {
      sameDay: "[\u0906\u091C] LT",
      nextDay: "[\u092D\u094B\u0932\u093F] LT",
      nextWeek: "[\u0906\u0909\u0901\u0926\u094B] dddd[,] LT",
      lastDay: "[\u0939\u093F\u091C\u094B] LT",
      lastWeek: "[\u0917\u090F\u0915\u094B] dddd[,] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s\u092E\u093E",
      past: "%s \u0905\u0917\u093E\u0921\u093F",
      s: "\u0915\u0947\u0939\u0940 \u0915\u094D\u0937\u0923",
      ss: "%d \u0938\u0947\u0915\u0947\u0923\u094D\u0921",
      m: "\u090F\u0915 \u092E\u093F\u0928\u0947\u091F",
      mm: "%d \u092E\u093F\u0928\u0947\u091F",
      h: "\u090F\u0915 \u0918\u0923\u094D\u091F\u093E",
      hh: "%d \u0918\u0923\u094D\u091F\u093E",
      d: "\u090F\u0915 \u0926\u093F\u0928",
      dd: "%d \u0926\u093F\u0928",
      M: "\u090F\u0915 \u092E\u0939\u093F\u0928\u093E",
      MM: "%d \u092E\u0939\u093F\u0928\u093E",
      y: "\u090F\u0915 \u092C\u0930\u094D\u0937",
      yy: "%d \u092C\u0930\u094D\u0937"
    },
    week: {
      dow: 0,
      doy: 6
    }
  });
  var kn = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
      pn = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      Dn = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      Tn = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
  l.defineLocale("nl-be", {
    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
    monthsShort: function monthsShort(e, a) {
      return e ? /-MMM-/.test(a) ? pn[e.month()] : kn[e.month()] : kn;
    },
    monthsRegex: Tn,
    monthsShortRegex: Tn,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: Dn,
    longMonthsParse: Dn,
    shortMonthsParse: Dn,
    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[vandaag om] LT",
      nextDay: "[morgen om] LT",
      nextWeek: "dddd [om] LT",
      lastDay: "[gisteren om] LT",
      lastWeek: "[afgelopen] dddd [om] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "over %s",
      past: "%s geleden",
      s: "een paar seconden",
      ss: "%d seconden",
      m: "\xe9\xe9n minuut",
      mm: "%d minuten",
      h: "\xe9\xe9n uur",
      hh: "%d uur",
      d: "\xe9\xe9n dag",
      dd: "%d dagen",
      M: "\xe9\xe9n maand",
      MM: "%d maanden",
      y: "\xe9\xe9n jaar",
      yy: "%d jaar"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(e) {
      return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de");
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var gn = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
      wn = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      vn = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      Sn = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
  l.defineLocale("nl", {
    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
    monthsShort: function monthsShort(e, a) {
      return e ? /-MMM-/.test(a) ? wn[e.month()] : gn[e.month()] : gn;
    },
    monthsRegex: Sn,
    monthsShortRegex: Sn,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: vn,
    longMonthsParse: vn,
    shortMonthsParse: vn,
    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD-MM-YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[vandaag om] LT",
      nextDay: "[morgen om] LT",
      nextWeek: "dddd [om] LT",
      lastDay: "[gisteren om] LT",
      lastWeek: "[afgelopen] dddd [om] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "over %s",
      past: "%s geleden",
      s: "een paar seconden",
      ss: "%d seconden",
      m: "\xe9\xe9n minuut",
      mm: "%d minuten",
      h: "\xe9\xe9n uur",
      hh: "%d uur",
      d: "\xe9\xe9n dag",
      dd: "%d dagen",
      M: "\xe9\xe9n maand",
      MM: "%d maanden",
      y: "\xe9\xe9n jaar",
      yy: "%d jaar"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(e) {
      return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de");
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("nn", {
    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
    monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
    weekdays: "sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
    weekdaysShort: "sun_m\xe5n_tys_ons_tor_fre_lau".split("_"),
    weekdaysMin: "su_m\xe5_ty_on_to_fr_l\xf8".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY [kl.] H:mm",
      LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
    },
    calendar: {
      sameDay: "[I dag klokka] LT",
      nextDay: "[I morgon klokka] LT",
      nextWeek: "dddd [klokka] LT",
      lastDay: "[I g\xe5r klokka] LT",
      lastWeek: "[F\xf8reg\xe5ande] dddd [klokka] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "om %s",
      past: "%s sidan",
      s: "nokre sekund",
      ss: "%d sekund",
      m: "eit minutt",
      mm: "%d minutt",
      h: "ein time",
      hh: "%d timar",
      d: "ein dag",
      dd: "%d dagar",
      M: "ein m\xe5nad",
      MM: "%d m\xe5nader",
      y: "eit \xe5r",
      yy: "%d \xe5r"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Hn = {
    1: "\u0A67",
    2: "\u0A68",
    3: "\u0A69",
    4: "\u0A6A",
    5: "\u0A6B",
    6: "\u0A6C",
    7: "\u0A6D",
    8: "\u0A6E",
    9: "\u0A6F",
    0: "\u0A66"
  },
      bn = {
    "\u0A67": "1",
    "\u0A68": "2",
    "\u0A69": "3",
    "\u0A6A": "4",
    "\u0A6B": "5",
    "\u0A6C": "6",
    "\u0A6D": "7",
    "\u0A6E": "8",
    "\u0A6F": "9",
    "\u0A66": "0"
  };
  l.defineLocale("pa-in", {
    months: "\u0A1C\u0A28\u0A35\u0A30\u0A40_\u0A2B\u0A3C\u0A30\u0A35\u0A30\u0A40_\u0A2E\u0A3E\u0A30\u0A1A_\u0A05\u0A2A\u0A4D\u0A30\u0A48\u0A32_\u0A2E\u0A08_\u0A1C\u0A42\u0A28_\u0A1C\u0A41\u0A32\u0A3E\u0A08_\u0A05\u0A17\u0A38\u0A24_\u0A38\u0A24\u0A70\u0A2C\u0A30_\u0A05\u0A15\u0A24\u0A42\u0A2C\u0A30_\u0A28\u0A35\u0A70\u0A2C\u0A30_\u0A26\u0A38\u0A70\u0A2C\u0A30".split("_"),
    monthsShort: "\u0A1C\u0A28\u0A35\u0A30\u0A40_\u0A2B\u0A3C\u0A30\u0A35\u0A30\u0A40_\u0A2E\u0A3E\u0A30\u0A1A_\u0A05\u0A2A\u0A4D\u0A30\u0A48\u0A32_\u0A2E\u0A08_\u0A1C\u0A42\u0A28_\u0A1C\u0A41\u0A32\u0A3E\u0A08_\u0A05\u0A17\u0A38\u0A24_\u0A38\u0A24\u0A70\u0A2C\u0A30_\u0A05\u0A15\u0A24\u0A42\u0A2C\u0A30_\u0A28\u0A35\u0A70\u0A2C\u0A30_\u0A26\u0A38\u0A70\u0A2C\u0A30".split("_"),
    weekdays: "\u0A10\u0A24\u0A35\u0A3E\u0A30_\u0A38\u0A4B\u0A2E\u0A35\u0A3E\u0A30_\u0A2E\u0A70\u0A17\u0A32\u0A35\u0A3E\u0A30_\u0A2C\u0A41\u0A27\u0A35\u0A3E\u0A30_\u0A35\u0A40\u0A30\u0A35\u0A3E\u0A30_\u0A38\u0A3C\u0A41\u0A71\u0A15\u0A30\u0A35\u0A3E\u0A30_\u0A38\u0A3C\u0A28\u0A40\u0A1A\u0A30\u0A35\u0A3E\u0A30".split("_"),
    weekdaysShort: "\u0A10\u0A24_\u0A38\u0A4B\u0A2E_\u0A2E\u0A70\u0A17\u0A32_\u0A2C\u0A41\u0A27_\u0A35\u0A40\u0A30_\u0A38\u0A3C\u0A41\u0A15\u0A30_\u0A38\u0A3C\u0A28\u0A40".split("_"),
    weekdaysMin: "\u0A10\u0A24_\u0A38\u0A4B\u0A2E_\u0A2E\u0A70\u0A17\u0A32_\u0A2C\u0A41\u0A27_\u0A35\u0A40\u0A30_\u0A38\u0A3C\u0A41\u0A15\u0A30_\u0A38\u0A3C\u0A28\u0A40".split("_"),
    longDateFormat: {
      LT: "A h:mm \u0A35\u0A1C\u0A47",
      LTS: "A h:mm:ss \u0A35\u0A1C\u0A47",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm \u0A35\u0A1C\u0A47",
      LLLL: "dddd, D MMMM YYYY, A h:mm \u0A35\u0A1C\u0A47"
    },
    calendar: {
      sameDay: "[\u0A05\u0A1C] LT",
      nextDay: "[\u0A15\u0A32] LT",
      nextWeek: "[\u0A05\u0A17\u0A32\u0A3E] dddd, LT",
      lastDay: "[\u0A15\u0A32] LT",
      lastWeek: "[\u0A2A\u0A3F\u0A1B\u0A32\u0A47] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u0A35\u0A3F\u0A71\u0A1A",
      past: "%s \u0A2A\u0A3F\u0A1B\u0A32\u0A47",
      s: "\u0A15\u0A41\u0A1D \u0A38\u0A15\u0A3F\u0A70\u0A1F",
      ss: "%d \u0A38\u0A15\u0A3F\u0A70\u0A1F",
      m: "\u0A07\u0A15 \u0A2E\u0A3F\u0A70\u0A1F",
      mm: "%d \u0A2E\u0A3F\u0A70\u0A1F",
      h: "\u0A07\u0A71\u0A15 \u0A18\u0A70\u0A1F\u0A3E",
      hh: "%d \u0A18\u0A70\u0A1F\u0A47",
      d: "\u0A07\u0A71\u0A15 \u0A26\u0A3F\u0A28",
      dd: "%d \u0A26\u0A3F\u0A28",
      M: "\u0A07\u0A71\u0A15 \u0A2E\u0A39\u0A40\u0A28\u0A3E",
      MM: "%d \u0A2E\u0A39\u0A40\u0A28\u0A47",
      y: "\u0A07\u0A71\u0A15 \u0A38\u0A3E\u0A32",
      yy: "%d \u0A38\u0A3E\u0A32"
    },
    preparse: function preparse(e) {
      return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, function (e) {
        return bn[e];
      });
    },
    postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return Hn[e];
      });
    },
    meridiemParse: /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0A30\u0A3E\u0A24" === a ? e < 4 ? e : e + 12 : "\u0A38\u0A35\u0A47\u0A30" === a ? e : "\u0A26\u0A41\u0A2A\u0A39\u0A3F\u0A30" === a ? 10 <= e ? e : e + 12 : "\u0A38\u0A3C\u0A3E\u0A2E" === a ? e + 12 : void 0;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0A30\u0A3E\u0A24" : e < 10 ? "\u0A38\u0A35\u0A47\u0A30" : e < 17 ? "\u0A26\u0A41\u0A2A\u0A39\u0A3F\u0A30" : e < 20 ? "\u0A38\u0A3C\u0A3E\u0A2E" : "\u0A30\u0A3E\u0A24";
    },
    week: {
      dow: 0,
      doy: 6
    }
  });
  var jn = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split("_"),
      xn = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split("_");

  function Pn(e) {
    return e % 10 < 5 && 1 < e % 10 && ~~(e / 10) % 10 != 1;
  }

  function On(e, a, t) {
    var s = e + " ";

    switch (t) {
      case "ss":
        return s + (Pn(e) ? "sekundy" : "sekund");

      case "m":
        return a ? "minuta" : "minut\u0119";

      case "mm":
        return s + (Pn(e) ? "minuty" : "minut");

      case "h":
        return a ? "godzina" : "godzin\u0119";

      case "hh":
        return s + (Pn(e) ? "godziny" : "godzin");

      case "MM":
        return s + (Pn(e) ? "miesi\u0105ce" : "miesi\u0119cy");

      case "yy":
        return s + (Pn(e) ? "lata" : "lat");
    }
  }

  function Wn(e, a, t) {
    var s = " ";
    return (20 <= e % 100 || 100 <= e && e % 100 == 0) && (s = " de "), e + s + {
      ss: "secunde",
      mm: "minute",
      hh: "ore",
      dd: "zile",
      MM: "luni",
      yy: "ani"
    }[t];
  }

  function En(e, a, t) {
    var s, n;
    return "m" === t ? a ? "\u043C\u0438\u043D\u0443\u0442\u0430" : "\u043C\u0438\u043D\u0443\u0442\u0443" : e + " " + (s = +e, n = {
      ss: a ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434" : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434",
      mm: a ? "\u043C\u0438\u043D\u0443\u0442\u0430_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442" : "\u043C\u0438\u043D\u0443\u0442\u0443_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442",
      hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043E\u0432",
      dd: "\u0434\u0435\u043D\u044C_\u0434\u043D\u044F_\u0434\u043D\u0435\u0439",
      MM: "\u043C\u0435\u0441\u044F\u0446_\u043C\u0435\u0441\u044F\u0446\u0430_\u043C\u0435\u0441\u044F\u0446\u0435\u0432",
      yy: "\u0433\u043E\u0434_\u0433\u043E\u0434\u0430_\u043B\u0435\u0442"
    }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2]);
  }

  l.defineLocale("pl", {
    months: function months(e, a) {
      return e ? "" === a ? "(" + xn[e.month()] + "|" + jn[e.month()] + ")" : /D MMMM/.test(a) ? xn[e.month()] : jn[e.month()] : jn;
    },
    monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split("_"),
    weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split("_"),
    weekdaysShort: "ndz_pon_wt_\u015Br_czw_pt_sob".split("_"),
    weekdaysMin: "Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Dzi\u015B o] LT",
      nextDay: "[Jutro o] LT",
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return "[W niedziel\u0119 o] LT";

          case 2:
            return "[We wtorek o] LT";

          case 3:
            return "[W \u015Brod\u0119 o] LT";

          case 6:
            return "[W sobot\u0119 o] LT";

          default:
            return "[W] dddd [o] LT";
        }
      },
      lastDay: "[Wczoraj o] LT",
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";

          case 3:
            return "[W zesz\u0142\u0105 \u015Brod\u0119 o] LT";

          case 6:
            return "[W zesz\u0142\u0105 sobot\u0119 o] LT";

          default:
            return "[W zesz\u0142y] dddd [o] LT";
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "%s temu",
      s: "kilka sekund",
      ss: On,
      m: On,
      mm: On,
      h: On,
      hh: On,
      d: "1 dzie\u0144",
      dd: "%d dni",
      M: "miesi\u0105c",
      MM: On,
      y: "rok",
      yy: On
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("pt-br", {
    months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
    weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),
    weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),
    weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm",
      LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"
    },
    calendar: {
      sameDay: "[Hoje \xe0s] LT",
      nextDay: "[Amanh\xe3 \xe0s] LT",
      nextWeek: "dddd [\xe0s] LT",
      lastDay: "[Ontem \xe0s] LT",
      lastWeek: function lastWeek() {
        return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT";
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "em %s",
      past: "h\xe1 %s",
      s: "poucos segundos",
      ss: "%d segundos",
      m: "um minuto",
      mm: "%d minutos",
      h: "uma hora",
      hh: "%d horas",
      d: "um dia",
      dd: "%d dias",
      M: "um m\xeas",
      MM: "%d meses",
      y: "um ano",
      yy: "%d anos"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%d\xba"
  }), l.defineLocale("pt", {
    months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
    weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),
    weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),
    weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY HH:mm",
      LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Hoje \xe0s] LT",
      nextDay: "[Amanh\xe3 \xe0s] LT",
      nextWeek: "dddd [\xe0s] LT",
      lastDay: "[Ontem \xe0s] LT",
      lastWeek: function lastWeek() {
        return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT";
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "em %s",
      past: "h\xe1 %s",
      s: "segundos",
      ss: "%d segundos",
      m: "um minuto",
      mm: "%d minutos",
      h: "uma hora",
      hh: "%d horas",
      d: "um dia",
      dd: "%d dias",
      M: "um m\xeas",
      MM: "%d meses",
      y: "um ano",
      yy: "%d anos"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%d\xba",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("ro", {
    months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
    monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "duminic\u0103_luni_mar\u021Bi_miercuri_joi_vineri_s\xE2mb\u0103t\u0103".split("_"),
    weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"),
    weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY H:mm",
      LLLL: "dddd, D MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[azi la] LT",
      nextDay: "[m\xe2ine la] LT",
      nextWeek: "dddd [la] LT",
      lastDay: "[ieri la] LT",
      lastWeek: "[fosta] dddd [la] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "peste %s",
      past: "%s \xEEn urm\u0103",
      s: "c\xe2teva secunde",
      ss: Wn,
      m: "un minut",
      mm: Wn,
      h: "o or\u0103",
      hh: Wn,
      d: "o zi",
      dd: Wn,
      M: "o lun\u0103",
      MM: Wn,
      y: "un an",
      yy: Wn
    },
    week: {
      dow: 1,
      doy: 7
    }
  });
  var An = [/^\u044f\u043d\u0432/i, /^\u0444\u0435\u0432/i, /^\u043c\u0430\u0440/i, /^\u0430\u043f\u0440/i, /^\u043c\u0430[\u0439\u044f]/i, /^\u0438\u044e\u043d/i, /^\u0438\u044e\u043b/i, /^\u0430\u0432\u0433/i, /^\u0441\u0435\u043d/i, /^\u043e\u043a\u0442/i, /^\u043d\u043e\u044f/i, /^\u0434\u0435\u043a/i];
  l.defineLocale("ru", {
    months: {
      format: "\u044F\u043D\u0432\u0430\u0440\u044F_\u0444\u0435\u0432\u0440\u0430\u043B\u044F_\u043C\u0430\u0440\u0442\u0430_\u0430\u043F\u0440\u0435\u043B\u044F_\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F_\u043E\u043A\u0442\u044F\u0431\u0440\u044F_\u043D\u043E\u044F\u0431\u0440\u044F_\u0434\u0435\u043A\u0430\u0431\u0440\u044F".split("_"),
      standalone: "\u044F\u043D\u0432\u0430\u0440\u044C_\u0444\u0435\u0432\u0440\u0430\u043B\u044C_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B\u044C_\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C_\u043E\u043A\u0442\u044F\u0431\u0440\u044C_\u043D\u043E\u044F\u0431\u0440\u044C_\u0434\u0435\u043A\u0430\u0431\u0440\u044C".split("_")
    },
    monthsShort: {
      format: "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440._\u0430\u043F\u0440._\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_"),
      standalone: "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440\u0442_\u0430\u043F\u0440._\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_")
    },
    weekdays: {
      standalone: "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043E\u0442\u0430".split("_"),
      format: "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043E\u0442\u0443".split("_"),
      isFormat: /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/
    },
    weekdaysShort: "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
    weekdaysMin: "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
    monthsParse: An,
    longMonthsParse: An,
    shortMonthsParse: An,
    monthsRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
    monthsShortRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
    monthsStrictRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,
    monthsShortStrictRegex: /^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY \u0433.",
      LLL: "D MMMM YYYY \u0433., H:mm",
      LLLL: "dddd, D MMMM YYYY \u0433., H:mm"
    },
    calendar: {
      sameDay: "[\u0421\u0435\u0433\u043E\u0434\u043D\u044F, \u0432] LT",
      nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT",
      lastDay: "[\u0412\u0447\u0435\u0440\u0430, \u0432] LT",
      nextWeek: function nextWeek(e) {
        if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043E] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";

        switch (this.day()) {
          case 0:
            return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435] dddd, [\u0432] LT";

          case 1:
          case 2:
          case 4:
            return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439] dddd, [\u0432] LT";

          case 3:
          case 5:
          case 6:
            return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E] dddd, [\u0432] LT";
        }
      },
      lastWeek: function lastWeek(e) {
        if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043E] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";

        switch (this.day()) {
          case 0:
            return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u043E\u0435] dddd, [\u0432] LT";

          case 1:
          case 2:
          case 4:
            return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u044B\u0439] dddd, [\u0432] LT";

          case 3:
          case 5:
          case 6:
            return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u0443\u044E] dddd, [\u0432] LT";
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "\u0447\u0435\u0440\u0435\u0437 %s",
      past: "%s \u043D\u0430\u0437\u0430\u0434",
      s: "\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434",
      ss: En,
      m: En,
      mm: En,
      h: "\u0447\u0430\u0441",
      hh: En,
      d: "\u0434\u0435\u043D\u044C",
      dd: En,
      M: "\u043C\u0435\u0441\u044F\u0446",
      MM: En,
      y: "\u0433\u043E\u0434",
      yy: En
    },
    meridiemParse: /\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,
    isPM: function isPM(e) {
      return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e);
    },
    meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u043D\u043E\u0447\u0438" : e < 12 ? "\u0443\u0442\u0440\u0430" : e < 17 ? "\u0434\u043D\u044F" : "\u0432\u0435\u0447\u0435\u0440\u0430";
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,
    ordinal: function ordinal(e, a) {
      switch (a) {
        case "M":
        case "d":
        case "DDD":
          return e + "-\u0439";

        case "D":
          return e + "-\u0433\u043E";

        case "w":
        case "W":
          return e + "-\u044F";

        default:
          return e;
      }
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Fn = ["\u062C\u0646\u0648\u0631\u064A", "\u0641\u064A\u0628\u0631\u0648\u0631\u064A", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u064A\u0644", "\u0645\u0626\u064A", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u0621\u0650", "\u0622\u06AF\u0633\u067D", "\u0633\u064A\u067E\u067D\u0645\u0628\u0631", "\u0622\u06AA\u067D\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u068A\u0633\u0645\u0628\u0631"],
      zn = ["\u0622\u0686\u0631", "\u0633\u0648\u0645\u0631", "\u0627\u06B1\u0627\u0631\u0648", "\u0627\u0631\u0628\u0639", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639", "\u0687\u0646\u0687\u0631"];
  l.defineLocale("sd", {
    months: Fn,
    monthsShort: Fn,
    weekdays: zn,
    weekdaysShort: zn,
    weekdaysMin: zn,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd\u060C D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
    isPM: function isPM(e) {
      return "\u0634\u0627\u0645" === e;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0635\u0628\u062D" : "\u0634\u0627\u0645";
    },
    calendar: {
      sameDay: "[\u0627\u0684] LT",
      nextDay: "[\u0633\u0680\u0627\u06BB\u064A] LT",
      nextWeek: "dddd [\u0627\u06B3\u064A\u0646 \u0647\u0641\u062A\u064A \u062A\u064A] LT",
      lastDay: "[\u06AA\u0627\u0644\u0647\u0647] LT",
      lastWeek: "[\u06AF\u0632\u0631\u064A\u0644 \u0647\u0641\u062A\u064A] dddd [\u062A\u064A] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u067E\u0648\u0621",
      past: "%s \u0627\u06B3",
      s: "\u0686\u0646\u062F \u0633\u064A\u06AA\u0646\u068A",
      ss: "%d \u0633\u064A\u06AA\u0646\u068A",
      m: "\u0647\u06AA \u0645\u0646\u067D",
      mm: "%d \u0645\u0646\u067D",
      h: "\u0647\u06AA \u06AA\u0644\u0627\u06AA",
      hh: "%d \u06AA\u0644\u0627\u06AA",
      d: "\u0647\u06AA \u068F\u064A\u0646\u0647\u0646",
      dd: "%d \u068F\u064A\u0646\u0647\u0646",
      M: "\u0647\u06AA \u0645\u0647\u064A\u0646\u0648",
      MM: "%d \u0645\u0647\u064A\u0646\u0627",
      y: "\u0647\u06AA \u0633\u0627\u0644",
      yy: "%d \u0633\u0627\u0644"
    },
    preparse: function preparse(e) {
      return e.replace(/\u060c/g, ",");
    },
    postformat: function postformat(e) {
      return e.replace(/,/g, "\u060C");
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("se", {
    months: "o\u0111\u0111ajagem\xE1nnu_guovvam\xE1nnu_njuk\u010Dam\xE1nnu_cuo\u014Bom\xE1nnu_miessem\xE1nnu_geassem\xE1nnu_suoidnem\xE1nnu_borgem\xE1nnu_\u010Dak\u010Dam\xE1nnu_golggotm\xE1nnu_sk\xE1bmam\xE1nnu_juovlam\xE1nnu".split("_"),
    monthsShort: "o\u0111\u0111j_guov_njuk_cuo_mies_geas_suoi_borg_\u010Dak\u010D_golg_sk\xE1b_juov".split("_"),
    weekdays: "sotnabeaivi_vuoss\xE1rga_ma\u014B\u014Beb\xE1rga_gaskavahkku_duorastat_bearjadat_l\xE1vvardat".split("_"),
    weekdaysShort: "sotn_vuos_ma\u014B_gask_duor_bear_l\xE1v".split("_"),
    weekdaysMin: "s_v_m_g_d_b_L".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "MMMM D. [b.] YYYY",
      LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
      LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
    },
    calendar: {
      sameDay: "[otne ti] LT",
      nextDay: "[ihttin ti] LT",
      nextWeek: "dddd [ti] LT",
      lastDay: "[ikte ti] LT",
      lastWeek: "[ovddit] dddd [ti] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s gea\u017Ees",
      past: "ma\u014Bit %s",
      s: "moadde sekunddat",
      ss: "%d sekunddat",
      m: "okta minuhta",
      mm: "%d minuhtat",
      h: "okta diimmu",
      hh: "%d diimmut",
      d: "okta beaivi",
      dd: "%d beaivvit",
      M: "okta m\xe1nnu",
      MM: "%d m\xe1nut",
      y: "okta jahki",
      yy: "%d jagit"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("si", {
    months: "\u0DA2\u0DB1\u0DC0\u0DCF\u0DBB\u0DD2_\u0DB4\u0DD9\u0DB6\u0DBB\u0DC0\u0DCF\u0DBB\u0DD2_\u0DB8\u0DCF\u0DBB\u0DCA\u0DAD\u0DD4_\u0D85\u0DB4\u0DCA\u200D\u0DBB\u0DDA\u0DBD\u0DCA_\u0DB8\u0DD0\u0DBA\u0DD2_\u0DA2\u0DD6\u0DB1\u0DD2_\u0DA2\u0DD6\u0DBD\u0DD2_\u0D85\u0D9C\u0DDD\u0DC3\u0DCA\u0DAD\u0DD4_\u0DC3\u0DD0\u0DB4\u0DCA\u0DAD\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA_\u0D94\u0D9A\u0DCA\u0DAD\u0DDD\u0DB6\u0DBB\u0DCA_\u0DB1\u0DDC\u0DC0\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA_\u0DAF\u0DD9\u0DC3\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA".split("_"),
    monthsShort: "\u0DA2\u0DB1_\u0DB4\u0DD9\u0DB6_\u0DB8\u0DCF\u0DBB\u0DCA_\u0D85\u0DB4\u0DCA_\u0DB8\u0DD0\u0DBA\u0DD2_\u0DA2\u0DD6\u0DB1\u0DD2_\u0DA2\u0DD6\u0DBD\u0DD2_\u0D85\u0D9C\u0DDD_\u0DC3\u0DD0\u0DB4\u0DCA_\u0D94\u0D9A\u0DCA_\u0DB1\u0DDC\u0DC0\u0DD0_\u0DAF\u0DD9\u0DC3\u0DD0".split("_"),
    weekdays: "\u0D89\u0DBB\u0DD2\u0DAF\u0DCF_\u0DC3\u0DB3\u0DD4\u0DAF\u0DCF_\u0D85\u0D9F\u0DC4\u0DBB\u0DD4\u0DC0\u0DCF\u0DAF\u0DCF_\u0DB6\u0DAF\u0DCF\u0DAF\u0DCF_\u0DB6\u0DCA\u200D\u0DBB\u0DC4\u0DC3\u0DCA\u0DB4\u0DAD\u0DD2\u0DB1\u0DCA\u0DAF\u0DCF_\u0DC3\u0DD2\u0D9A\u0DD4\u0DBB\u0DCF\u0DAF\u0DCF_\u0DC3\u0DD9\u0DB1\u0DC3\u0DD4\u0DBB\u0DCF\u0DAF\u0DCF".split("_"),
    weekdaysShort: "\u0D89\u0DBB\u0DD2_\u0DC3\u0DB3\u0DD4_\u0D85\u0D9F_\u0DB6\u0DAF\u0DCF_\u0DB6\u0DCA\u200D\u0DBB\u0DC4_\u0DC3\u0DD2\u0D9A\u0DD4_\u0DC3\u0DD9\u0DB1".split("_"),
    weekdaysMin: "\u0D89_\u0DC3_\u0D85_\u0DB6_\u0DB6\u0DCA\u200D\u0DBB_\u0DC3\u0DD2_\u0DC3\u0DD9".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "a h:mm",
      LTS: "a h:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY MMMM D",
      LLL: "YYYY MMMM D, a h:mm",
      LLLL: "YYYY MMMM D [\u0DC0\u0DD0\u0DB1\u0DD2] dddd, a h:mm:ss"
    },
    calendar: {
      sameDay: "[\u0D85\u0DAF] LT[\u0DA7]",
      nextDay: "[\u0DC4\u0DD9\u0DA7] LT[\u0DA7]",
      nextWeek: "dddd LT[\u0DA7]",
      lastDay: "[\u0D8A\u0DBA\u0DDA] LT[\u0DA7]",
      lastWeek: "[\u0DB4\u0DC3\u0DD4\u0D9C\u0DD2\u0DBA] dddd LT[\u0DA7]",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s\u0D9A\u0DD2\u0DB1\u0DCA",
      past: "%s\u0D9A\u0DA7 \u0DB4\u0DD9\u0DBB",
      s: "\u0DAD\u0DAD\u0DCA\u0DB4\u0DBB \u0D9A\u0DD2\u0DC4\u0DD2\u0DB4\u0DBA",
      ss: "\u0DAD\u0DAD\u0DCA\u0DB4\u0DBB %d",
      m: "\u0DB8\u0DD2\u0DB1\u0DD2\u0DAD\u0DCA\u0DAD\u0DD4\u0DC0",
      mm: "\u0DB8\u0DD2\u0DB1\u0DD2\u0DAD\u0DCA\u0DAD\u0DD4 %d",
      h: "\u0DB4\u0DD0\u0DBA",
      hh: "\u0DB4\u0DD0\u0DBA %d",
      d: "\u0DAF\u0DD2\u0DB1\u0DBA",
      dd: "\u0DAF\u0DD2\u0DB1 %d",
      M: "\u0DB8\u0DCF\u0DC3\u0DBA",
      MM: "\u0DB8\u0DCF\u0DC3 %d",
      y: "\u0DC0\u0DC3\u0DBB",
      yy: "\u0DC0\u0DC3\u0DBB %d"
    },
    dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/,
    ordinal: function ordinal(e) {
      return e + " \u0DC0\u0DD0\u0DB1\u0DD2";
    },
    meridiemParse: /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./,
    isPM: function isPM(e) {
      return "\u0DB4.\u0DC0." === e || "\u0DB4\u0DC3\u0DCA \u0DC0\u0DBB\u0DD4" === e;
    },
    meridiem: function meridiem(e, a, t) {
      return 11 < e ? t ? "\u0DB4.\u0DC0." : "\u0DB4\u0DC3\u0DCA \u0DC0\u0DBB\u0DD4" : t ? "\u0DB4\u0DD9.\u0DC0." : "\u0DB4\u0DD9\u0DBB \u0DC0\u0DBB\u0DD4";
    }
  });
  var Jn = "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),
      Nn = "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");

  function Rn(e) {
    return 1 < e && e < 5;
  }

  function In(e, a, t, s) {
    var n = e + " ";

    switch (t) {
      case "s":
        return a || s ? "p\xe1r sek\xfand" : "p\xe1r sekundami";

      case "ss":
        return a || s ? n + (Rn(e) ? "sekundy" : "sek\xfand") : n + "sekundami";
        break;

      case "m":
        return a ? "min\xfata" : s ? "min\xfatu" : "min\xfatou";

      case "mm":
        return a || s ? n + (Rn(e) ? "min\xfaty" : "min\xfat") : n + "min\xfatami";
        break;

      case "h":
        return a ? "hodina" : s ? "hodinu" : "hodinou";

      case "hh":
        return a || s ? n + (Rn(e) ? "hodiny" : "hod\xedn") : n + "hodinami";
        break;

      case "d":
        return a || s ? "de\u0148" : "d\u0148om";

      case "dd":
        return a || s ? n + (Rn(e) ? "dni" : "dn\xed") : n + "d\u0148ami";
        break;

      case "M":
        return a || s ? "mesiac" : "mesiacom";

      case "MM":
        return a || s ? n + (Rn(e) ? "mesiace" : "mesiacov") : n + "mesiacmi";
        break;

      case "y":
        return a || s ? "rok" : "rokom";

      case "yy":
        return a || s ? n + (Rn(e) ? "roky" : "rokov") : n + "rokmi";
        break;
    }
  }

  function Cn(e, a, t, s) {
    var n = e + " ";

    switch (t) {
      case "s":
        return a || s ? "nekaj sekund" : "nekaj sekundami";

      case "ss":
        return n += 1 === e ? a ? "sekundo" : "sekundi" : 2 === e ? a || s ? "sekundi" : "sekundah" : e < 5 ? a || s ? "sekunde" : "sekundah" : "sekund";

      case "m":
        return a ? "ena minuta" : "eno minuto";

      case "mm":
        return n += 1 === e ? a ? "minuta" : "minuto" : 2 === e ? a || s ? "minuti" : "minutama" : e < 5 ? a || s ? "minute" : "minutami" : a || s ? "minut" : "minutami";

      case "h":
        return a ? "ena ura" : "eno uro";

      case "hh":
        return n += 1 === e ? a ? "ura" : "uro" : 2 === e ? a || s ? "uri" : "urama" : e < 5 ? a || s ? "ure" : "urami" : a || s ? "ur" : "urami";

      case "d":
        return a || s ? "en dan" : "enim dnem";

      case "dd":
        return n += 1 === e ? a || s ? "dan" : "dnem" : 2 === e ? a || s ? "dni" : "dnevoma" : a || s ? "dni" : "dnevi";

      case "M":
        return a || s ? "en mesec" : "enim mesecem";

      case "MM":
        return n += 1 === e ? a || s ? "mesec" : "mesecem" : 2 === e ? a || s ? "meseca" : "mesecema" : e < 5 ? a || s ? "mesece" : "meseci" : a || s ? "mesecev" : "meseci";

      case "y":
        return a || s ? "eno leto" : "enim letom";

      case "yy":
        return n += 1 === e ? a || s ? "leto" : "letom" : 2 === e ? a || s ? "leti" : "letoma" : e < 5 ? a || s ? "leta" : "leti" : a || s ? "let" : "leti";
    }
  }

  l.defineLocale("sk", {
    months: Jn,
    monthsShort: Nn,
    weekdays: "nede\u013Ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),
    weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"),
    weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[dnes o] LT",
      nextDay: "[zajtra o] LT",
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return "[v nede\u013Eu o] LT";

          case 1:
          case 2:
            return "[v] dddd [o] LT";

          case 3:
            return "[v stredu o] LT";

          case 4:
            return "[vo \u0161tvrtok o] LT";

          case 5:
            return "[v piatok o] LT";

          case 6:
            return "[v sobotu o] LT";
        }
      },
      lastDay: "[v\u010Dera o] LT",
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return "[minul\xFA nede\u013Eu o] LT";

          case 1:
          case 2:
            return "[minul\xfd] dddd [o] LT";

          case 3:
            return "[minul\xfa stredu o] LT";

          case 4:
          case 5:
            return "[minul\xfd] dddd [o] LT";

          case 6:
            return "[minul\xfa sobotu o] LT";
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "pred %s",
      s: In,
      ss: In,
      m: In,
      mm: In,
      h: In,
      hh: In,
      d: In,
      dd: In,
      M: In,
      MM: In,
      y: In,
      yy: In
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("sl", {
    months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
    monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "nedelja_ponedeljek_torek_sreda_\u010Detrtek_petek_sobota".split("_"),
    weekdaysShort: "ned._pon._tor._sre._\u010Det._pet._sob.".split("_"),
    weekdaysMin: "ne_po_to_sr_\u010De_pe_so".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd, D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[danes ob] LT",
      nextDay: "[jutri ob] LT",
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return "[v] [nedeljo] [ob] LT";

          case 3:
            return "[v] [sredo] [ob] LT";

          case 6:
            return "[v] [soboto] [ob] LT";

          case 1:
          case 2:
          case 4:
          case 5:
            return "[v] dddd [ob] LT";
        }
      },
      lastDay: "[v\u010Deraj ob] LT",
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return "[prej\u0161njo] [nedeljo] [ob] LT";

          case 3:
            return "[prej\u0161njo] [sredo] [ob] LT";

          case 6:
            return "[prej\u0161njo] [soboto] [ob] LT";

          case 1:
          case 2:
          case 4:
          case 5:
            return "[prej\u0161nji] dddd [ob] LT";
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "\u010Dez %s",
      past: "pred %s",
      s: Cn,
      ss: Cn,
      m: Cn,
      mm: Cn,
      h: Cn,
      hh: Cn,
      d: Cn,
      dd: Cn,
      M: Cn,
      MM: Cn,
      y: Cn,
      yy: Cn
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("sq", {
    months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split("_"),
    monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"),
    weekdays: "E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split("_"),
    weekdaysShort: "Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"),
    weekdaysMin: "D_H_Ma_M\xeb_E_P_Sh".split("_"),
    weekdaysParseExact: !0,
    meridiemParse: /PD|MD/,
    isPM: function isPM(e) {
      return "M" === e.charAt(0);
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? "PD" : "MD";
    },
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Sot n\xeb] LT",
      nextDay: "[Nes\xebr n\xeb] LT",
      nextWeek: "dddd [n\xeb] LT",
      lastDay: "[Dje n\xeb] LT",
      lastWeek: "dddd [e kaluar n\xeb] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "n\xeb %s",
      past: "%s m\xeb par\xeb",
      s: "disa sekonda",
      ss: "%d sekonda",
      m: "nj\xeb minut\xeb",
      mm: "%d minuta",
      h: "nj\xeb or\xeb",
      hh: "%d or\xeb",
      d: "nj\xeb dit\xeb",
      dd: "%d dit\xeb",
      M: "nj\xeb muaj",
      MM: "%d muaj",
      y: "nj\xeb vit",
      yy: "%d vite"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Gn = {
    words: {
      ss: ["\u0441\u0435\u043A\u0443\u043D\u0434\u0430", "\u0441\u0435\u043A\u0443\u043D\u0434\u0435", "\u0441\u0435\u043A\u0443\u043D\u0434\u0438"],
      m: ["\u0458\u0435\u0434\u0430\u043D \u043C\u0438\u043D\u0443\u0442", "\u0458\u0435\u0434\u043D\u0435 \u043C\u0438\u043D\u0443\u0442\u0435"],
      mm: ["\u043C\u0438\u043D\u0443\u0442", "\u043C\u0438\u043D\u0443\u0442\u0435", "\u043C\u0438\u043D\u0443\u0442\u0430"],
      h: ["\u0458\u0435\u0434\u0430\u043D \u0441\u0430\u0442", "\u0458\u0435\u0434\u043D\u043E\u0433 \u0441\u0430\u0442\u0430"],
      hh: ["\u0441\u0430\u0442", "\u0441\u0430\u0442\u0430", "\u0441\u0430\u0442\u0438"],
      dd: ["\u0434\u0430\u043D", "\u0434\u0430\u043D\u0430", "\u0434\u0430\u043D\u0430"],
      MM: ["\u043C\u0435\u0441\u0435\u0446", "\u043C\u0435\u0441\u0435\u0446\u0430", "\u043C\u0435\u0441\u0435\u0446\u0438"],
      yy: ["\u0433\u043E\u0434\u0438\u043D\u0430", "\u0433\u043E\u0434\u0438\u043D\u0435", "\u0433\u043E\u0434\u0438\u043D\u0430"]
    },
    correctGrammaticalCase: function correctGrammaticalCase(e, a) {
      return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2];
    },
    translate: function translate(e, a, t) {
      var s = Gn.words[t];
      return 1 === t.length ? a ? s[0] : s[1] : e + " " + Gn.correctGrammaticalCase(e, s);
    }
  };
  l.defineLocale("sr-cyrl", {
    months: "\u0458\u0430\u043D\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0458_\u0458\u0443\u043D_\u0458\u0443\u043B_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440_\u043E\u043A\u0442\u043E\u0431\u0430\u0440_\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440".split("_"),
    monthsShort: "\u0458\u0430\u043D._\u0444\u0435\u0431._\u043C\u0430\u0440._\u0430\u043F\u0440._\u043C\u0430\u0458_\u0458\u0443\u043D_\u0458\u0443\u043B_\u0430\u0432\u0433._\u0441\u0435\u043F._\u043E\u043A\u0442._\u043D\u043E\u0432._\u0434\u0435\u0446.".split("_"),
    monthsParseExact: !0,
    weekdays: "\u043D\u0435\u0434\u0435\u0459\u0430_\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A_\u0443\u0442\u043E\u0440\u0430\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043A_\u043F\u0435\u0442\u0430\u043A_\u0441\u0443\u0431\u043E\u0442\u0430".split("_"),
    weekdaysShort: "\u043D\u0435\u0434._\u043F\u043E\u043D._\u0443\u0442\u043E._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043F\u0435\u0442._\u0441\u0443\u0431.".split("_"),
    weekdaysMin: "\u043D\u0435_\u043F\u043E_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043F\u0435_\u0441\u0443".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd, D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[\u0434\u0430\u043D\u0430\u0441 \u0443] LT",
      nextDay: "[\u0441\u0443\u0442\u0440\u0430 \u0443] LT",
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return "[\u0443] [\u043D\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";

          case 3:
            return "[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";

          case 6:
            return "[\u0443] [\u0441\u0443\u0431\u043E\u0442\u0443] [\u0443] LT";

          case 1:
          case 2:
          case 4:
          case 5:
            return "[\u0443] dddd [\u0443] LT";
        }
      },
      lastDay: "[\u0458\u0443\u0447\u0435 \u0443] LT",
      lastWeek: function lastWeek() {
        return ["[\u043F\u0440\u043E\u0448\u043B\u0435] [\u043D\u0435\u0434\u0435\u0459\u0435] [\u0443] LT", "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u043A\u0430] [\u0443] LT", "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u0443\u0442\u043E\u0440\u043A\u0430] [\u0443] LT", "[\u043F\u0440\u043E\u0448\u043B\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT", "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043A\u0430] [\u0443] LT", "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u043F\u0435\u0442\u043A\u0430] [\u0443] LT", "[\u043F\u0440\u043E\u0448\u043B\u0435] [\u0441\u0443\u0431\u043E\u0442\u0435] [\u0443] LT"][this.day()];
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "\u0437\u0430 %s",
      past: "\u043F\u0440\u0435 %s",
      s: "\u043D\u0435\u043A\u043E\u043B\u0438\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
      ss: Gn.translate,
      m: Gn.translate,
      mm: Gn.translate,
      h: Gn.translate,
      hh: Gn.translate,
      d: "\u0434\u0430\u043D",
      dd: Gn.translate,
      M: "\u043C\u0435\u0441\u0435\u0446",
      MM: Gn.translate,
      y: "\u0433\u043E\u0434\u0438\u043D\u0443",
      yy: Gn.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 7
    }
  });
  var Un = {
    words: {
      ss: ["sekunda", "sekunde", "sekundi"],
      m: ["jedan minut", "jedne minute"],
      mm: ["minut", "minute", "minuta"],
      h: ["jedan sat", "jednog sata"],
      hh: ["sat", "sata", "sati"],
      dd: ["dan", "dana", "dana"],
      MM: ["mesec", "meseca", "meseci"],
      yy: ["godina", "godine", "godina"]
    },
    correctGrammaticalCase: function correctGrammaticalCase(e, a) {
      return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2];
    },
    translate: function translate(e, a, t) {
      var s = Un.words[t];
      return 1 === t.length ? a ? s[0] : s[1] : e + " " + Un.correctGrammaticalCase(e, s);
    }
  };
  l.defineLocale("sr", {
    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "nedelja_ponedeljak_utorak_sreda_\u010Detvrtak_petak_subota".split("_"),
    weekdaysShort: "ned._pon._uto._sre._\u010Det._pet._sub.".split("_"),
    weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd, D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[danas u] LT",
      nextDay: "[sutra u] LT",
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return "[u] [nedelju] [u] LT";

          case 3:
            return "[u] [sredu] [u] LT";

          case 6:
            return "[u] [subotu] [u] LT";

          case 1:
          case 2:
          case 4:
          case 5:
            return "[u] dddd [u] LT";
        }
      },
      lastDay: "[ju\u010De u] LT",
      lastWeek: function lastWeek() {
        return ["[pro\u0161le] [nedelje] [u] LT", "[pro\u0161log] [ponedeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srede] [u] LT", "[pro\u0161log] [\u010Detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()];
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "pre %s",
      s: "nekoliko sekundi",
      ss: Un.translate,
      m: Un.translate,
      mm: Un.translate,
      h: Un.translate,
      hh: Un.translate,
      d: "dan",
      dd: Un.translate,
      M: "mesec",
      MM: Un.translate,
      y: "godinu",
      yy: Un.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("ss", {
    months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
    monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
    weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
    weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
    weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY h:mm A",
      LLLL: "dddd, D MMMM YYYY h:mm A"
    },
    calendar: {
      sameDay: "[Namuhla nga] LT",
      nextDay: "[Kusasa nga] LT",
      nextWeek: "dddd [nga] LT",
      lastDay: "[Itolo nga] LT",
      lastWeek: "dddd [leliphelile] [nga] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "nga %s",
      past: "wenteka nga %s",
      s: "emizuzwana lomcane",
      ss: "%d mzuzwana",
      m: "umzuzu",
      mm: "%d emizuzu",
      h: "lihora",
      hh: "%d emahora",
      d: "lilanga",
      dd: "%d emalanga",
      M: "inyanga",
      MM: "%d tinyanga",
      y: "umnyaka",
      yy: "%d iminyaka"
    },
    meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
    meridiem: function meridiem(e, a, t) {
      return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku";
    },
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "ekuseni" === a ? e : "emini" === a ? 11 <= e ? e : e + 12 : "entsambama" === a || "ebusuku" === a ? 0 === e ? 0 : e + 12 : void 0;
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: "%d",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("sv", {
    months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
    weekdays: "s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"),
    weekdaysShort: "s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"),
    weekdaysMin: "s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY [kl.] HH:mm",
      LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
      lll: "D MMM YYYY HH:mm",
      llll: "ddd D MMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Idag] LT",
      nextDay: "[Imorgon] LT",
      lastDay: "[Ig\xe5r] LT",
      nextWeek: "[P\xe5] dddd LT",
      lastWeek: "[I] dddd[s] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "om %s",
      past: "f\xf6r %s sedan",
      s: "n\xe5gra sekunder",
      ss: "%d sekunder",
      m: "en minut",
      mm: "%d minuter",
      h: "en timme",
      hh: "%d timmar",
      d: "en dag",
      dd: "%d dagar",
      M: "en m\xe5nad",
      MM: "%d m\xe5nader",
      y: "ett \xe5r",
      yy: "%d \xe5r"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    ordinal: function ordinal(e) {
      var a = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === a ? "a" : 2 === a ? "a" : "e");
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("sw", {
    months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
    weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
    weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
    weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[leo saa] LT",
      nextDay: "[kesho saa] LT",
      nextWeek: "[wiki ijayo] dddd [saat] LT",
      lastDay: "[jana] LT",
      lastWeek: "[wiki iliyopita] dddd [saat] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s baadaye",
      past: "tokea %s",
      s: "hivi punde",
      ss: "sekunde %d",
      m: "dakika moja",
      mm: "dakika %d",
      h: "saa limoja",
      hh: "masaa %d",
      d: "siku moja",
      dd: "masiku %d",
      M: "mwezi mmoja",
      MM: "miezi %d",
      y: "mwaka mmoja",
      yy: "miaka %d"
    },
    week: {
      dow: 1,
      doy: 7
    }
  });
  var Vn = {
    1: "\u0BE7",
    2: "\u0BE8",
    3: "\u0BE9",
    4: "\u0BEA",
    5: "\u0BEB",
    6: "\u0BEC",
    7: "\u0BED",
    8: "\u0BEE",
    9: "\u0BEF",
    0: "\u0BE6"
  },
      Kn = {
    "\u0BE7": "1",
    "\u0BE8": "2",
    "\u0BE9": "3",
    "\u0BEA": "4",
    "\u0BEB": "5",
    "\u0BEC": "6",
    "\u0BED": "7",
    "\u0BEE": "8",
    "\u0BEF": "9",
    "\u0BE6": "0"
  };
  l.defineLocale("ta", {
    months: "\u0B9C\u0BA9\u0BB5\u0BB0\u0BBF_\u0BAA\u0BBF\u0BAA\u0BCD\u0BB0\u0BB5\u0BB0\u0BBF_\u0BAE\u0BBE\u0BB0\u0BCD\u0B9A\u0BCD_\u0B8F\u0BAA\u0BCD\u0BB0\u0BB2\u0BCD_\u0BAE\u0BC7_\u0B9C\u0BC2\u0BA9\u0BCD_\u0B9C\u0BC2\u0BB2\u0BC8_\u0B86\u0B95\u0BB8\u0BCD\u0B9F\u0BCD_\u0B9A\u0BC6\u0BAA\u0BCD\u0B9F\u0BC6\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD_\u0B85\u0B95\u0BCD\u0B9F\u0BC7\u0BBE\u0BAA\u0BB0\u0BCD_\u0BA8\u0BB5\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD_\u0B9F\u0BBF\u0B9A\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD".split("_"),
    monthsShort: "\u0B9C\u0BA9\u0BB5\u0BB0\u0BBF_\u0BAA\u0BBF\u0BAA\u0BCD\u0BB0\u0BB5\u0BB0\u0BBF_\u0BAE\u0BBE\u0BB0\u0BCD\u0B9A\u0BCD_\u0B8F\u0BAA\u0BCD\u0BB0\u0BB2\u0BCD_\u0BAE\u0BC7_\u0B9C\u0BC2\u0BA9\u0BCD_\u0B9C\u0BC2\u0BB2\u0BC8_\u0B86\u0B95\u0BB8\u0BCD\u0B9F\u0BCD_\u0B9A\u0BC6\u0BAA\u0BCD\u0B9F\u0BC6\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD_\u0B85\u0B95\u0BCD\u0B9F\u0BC7\u0BBE\u0BAA\u0BB0\u0BCD_\u0BA8\u0BB5\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD_\u0B9F\u0BBF\u0B9A\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD".split("_"),
    weekdays: "\u0B9E\u0BBE\u0BAF\u0BBF\u0BB1\u0BCD\u0BB1\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0BA4\u0BBF\u0B99\u0BCD\u0B95\u0B9F\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0B9A\u0BC6\u0BB5\u0BCD\u0BB5\u0BBE\u0BAF\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0BAA\u0BC1\u0BA4\u0BA9\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0BB5\u0BBF\u0BAF\u0BBE\u0BB4\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0BB5\u0BC6\u0BB3\u0BCD\u0BB3\u0BBF\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0B9A\u0BA9\u0BBF\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8".split("_"),
    weekdaysShort: "\u0B9E\u0BBE\u0BAF\u0BBF\u0BB1\u0BC1_\u0BA4\u0BBF\u0B99\u0BCD\u0B95\u0BB3\u0BCD_\u0B9A\u0BC6\u0BB5\u0BCD\u0BB5\u0BBE\u0BAF\u0BCD_\u0BAA\u0BC1\u0BA4\u0BA9\u0BCD_\u0BB5\u0BBF\u0BAF\u0BBE\u0BB4\u0BA9\u0BCD_\u0BB5\u0BC6\u0BB3\u0BCD\u0BB3\u0BBF_\u0B9A\u0BA9\u0BBF".split("_"),
    weekdaysMin: "\u0B9E\u0BBE_\u0BA4\u0BBF_\u0B9A\u0BC6_\u0BAA\u0BC1_\u0BB5\u0BBF_\u0BB5\u0BC6_\u0B9A".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, HH:mm",
      LLLL: "dddd, D MMMM YYYY, HH:mm"
    },
    calendar: {
      sameDay: "[\u0B87\u0BA9\u0BCD\u0BB1\u0BC1] LT",
      nextDay: "[\u0BA8\u0BBE\u0BB3\u0BC8] LT",
      nextWeek: "dddd, LT",
      lastDay: "[\u0BA8\u0BC7\u0BB1\u0BCD\u0BB1\u0BC1] LT",
      lastWeek: "[\u0B95\u0B9F\u0BA8\u0BCD\u0BA4 \u0BB5\u0BBE\u0BB0\u0BAE\u0BCD] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u0B87\u0BB2\u0BCD",
      past: "%s \u0BAE\u0BC1\u0BA9\u0BCD",
      s: "\u0B92\u0BB0\u0BC1 \u0B9A\u0BBF\u0BB2 \u0BB5\u0BBF\u0BA8\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BCD",
      ss: "%d \u0BB5\u0BBF\u0BA8\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BCD",
      m: "\u0B92\u0BB0\u0BC1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BAE\u0BCD",
      mm: "%d \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
      h: "\u0B92\u0BB0\u0BC1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      hh: "%d \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      d: "\u0B92\u0BB0\u0BC1 \u0BA8\u0BBE\u0BB3\u0BCD",
      dd: "%d \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD",
      M: "\u0B92\u0BB0\u0BC1 \u0BAE\u0BBE\u0BA4\u0BAE\u0BCD",
      MM: "%d \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
      y: "\u0B92\u0BB0\u0BC1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD",
      yy: "%d \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/,
    ordinal: function ordinal(e) {
      return e + "\u0BB5\u0BA4\u0BC1";
    },
    preparse: function preparse(e) {
      return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g, function (e) {
        return Kn[e];
      });
    },
    postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return Vn[e];
      });
    },
    meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,
    meridiem: function meridiem(e, a, t) {
      return e < 2 ? " \u0BAF\u0BBE\u0BAE\u0BAE\u0BCD" : e < 6 ? " \u0BB5\u0BC8\u0B95\u0BB1\u0BC8" : e < 10 ? " \u0B95\u0BBE\u0BB2\u0BC8" : e < 14 ? " \u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD" : e < 18 ? " \u0B8E\u0BB1\u0BCD\u0BAA\u0BBE\u0B9F\u0BC1" : e < 22 ? " \u0BAE\u0BBE\u0BB2\u0BC8" : " \u0BAF\u0BBE\u0BAE\u0BAE\u0BCD";
    },
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0BAF\u0BBE\u0BAE\u0BAE\u0BCD" === a ? e < 2 ? e : e + 12 : "\u0BB5\u0BC8\u0B95\u0BB1\u0BC8" === a || "\u0B95\u0BBE\u0BB2\u0BC8" === a ? e : "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD" === a && 10 <= e ? e : e + 12;
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), l.defineLocale("te", {
    months: "\u0C1C\u0C28\u0C35\u0C30\u0C3F_\u0C2B\u0C3F\u0C2C\u0C4D\u0C30\u0C35\u0C30\u0C3F_\u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C3F_\u0C0F\u0C2A\u0C4D\u0C30\u0C3F\u0C32\u0C4D_\u0C2E\u0C47_\u0C1C\u0C42\u0C28\u0C4D_\u0C1C\u0C42\u0C32\u0C46\u0C56_\u0C06\u0C17\u0C38\u0C4D\u0C1F\u0C41_\u0C38\u0C46\u0C2A\u0C4D\u0C1F\u0C46\u0C02\u0C2C\u0C30\u0C4D_\u0C05\u0C15\u0C4D\u0C1F\u0C4B\u0C2C\u0C30\u0C4D_\u0C28\u0C35\u0C02\u0C2C\u0C30\u0C4D_\u0C21\u0C3F\u0C38\u0C46\u0C02\u0C2C\u0C30\u0C4D".split("_"),
    monthsShort: "\u0C1C\u0C28._\u0C2B\u0C3F\u0C2C\u0C4D\u0C30._\u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C3F_\u0C0F\u0C2A\u0C4D\u0C30\u0C3F._\u0C2E\u0C47_\u0C1C\u0C42\u0C28\u0C4D_\u0C1C\u0C42\u0C32\u0C46\u0C56_\u0C06\u0C17._\u0C38\u0C46\u0C2A\u0C4D._\u0C05\u0C15\u0C4D\u0C1F\u0C4B._\u0C28\u0C35._\u0C21\u0C3F\u0C38\u0C46.".split("_"),
    monthsParseExact: !0,
    weekdays: "\u0C06\u0C26\u0C3F\u0C35\u0C3E\u0C30\u0C02_\u0C38\u0C4B\u0C2E\u0C35\u0C3E\u0C30\u0C02_\u0C2E\u0C02\u0C17\u0C33\u0C35\u0C3E\u0C30\u0C02_\u0C2C\u0C41\u0C27\u0C35\u0C3E\u0C30\u0C02_\u0C17\u0C41\u0C30\u0C41\u0C35\u0C3E\u0C30\u0C02_\u0C36\u0C41\u0C15\u0C4D\u0C30\u0C35\u0C3E\u0C30\u0C02_\u0C36\u0C28\u0C3F\u0C35\u0C3E\u0C30\u0C02".split("_"),
    weekdaysShort: "\u0C06\u0C26\u0C3F_\u0C38\u0C4B\u0C2E_\u0C2E\u0C02\u0C17\u0C33_\u0C2C\u0C41\u0C27_\u0C17\u0C41\u0C30\u0C41_\u0C36\u0C41\u0C15\u0C4D\u0C30_\u0C36\u0C28\u0C3F".split("_"),
    weekdaysMin: "\u0C06_\u0C38\u0C4B_\u0C2E\u0C02_\u0C2C\u0C41_\u0C17\u0C41_\u0C36\u0C41_\u0C36".split("_"),
    longDateFormat: {
      LT: "A h:mm",
      LTS: "A h:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm",
      LLLL: "dddd, D MMMM YYYY, A h:mm"
    },
    calendar: {
      sameDay: "[\u0C28\u0C47\u0C21\u0C41] LT",
      nextDay: "[\u0C30\u0C47\u0C2A\u0C41] LT",
      nextWeek: "dddd, LT",
      lastDay: "[\u0C28\u0C3F\u0C28\u0C4D\u0C28] LT",
      lastWeek: "[\u0C17\u0C24] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u0C32\u0C4B",
      past: "%s \u0C15\u0C4D\u0C30\u0C3F\u0C24\u0C02",
      s: "\u0C15\u0C4A\u0C28\u0C4D\u0C28\u0C3F \u0C15\u0C4D\u0C37\u0C23\u0C3E\u0C32\u0C41",
      ss: "%d \u0C38\u0C46\u0C15\u0C28\u0C4D\u0C32\u0C41",
      m: "\u0C12\u0C15 \u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C02",
      mm: "%d \u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C3E\u0C32\u0C41",
      h: "\u0C12\u0C15 \u0C17\u0C02\u0C1F",
      hh: "%d \u0C17\u0C02\u0C1F\u0C32\u0C41",
      d: "\u0C12\u0C15 \u0C30\u0C4B\u0C1C\u0C41",
      dd: "%d \u0C30\u0C4B\u0C1C\u0C41\u0C32\u0C41",
      M: "\u0C12\u0C15 \u0C28\u0C46\u0C32",
      MM: "%d \u0C28\u0C46\u0C32\u0C32\u0C41",
      y: "\u0C12\u0C15 \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C02",
      yy: "%d \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C3E\u0C32\u0C41"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\u0c35/,
    ordinal: "%d\u0C35",
    meridiemParse: /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F" === a ? e < 4 ? e : e + 12 : "\u0C09\u0C26\u0C2F\u0C02" === a ? e : "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02" === a ? 10 <= e ? e : e + 12 : "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02" === a ? e + 12 : void 0;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F" : e < 10 ? "\u0C09\u0C26\u0C2F\u0C02" : e < 17 ? "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02" : e < 20 ? "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02" : "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F";
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), l.defineLocale("tet", {
    months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xf1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
    monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
    weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
    weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
    weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Ohin iha] LT",
      nextDay: "[Aban iha] LT",
      nextWeek: "dddd [iha] LT",
      lastDay: "[Horiseik iha] LT",
      lastWeek: "dddd [semana kotuk] [iha] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "iha %s",
      past: "%s liuba",
      s: "minutu balun",
      ss: "minutu %d",
      m: "minutu ida",
      mm: "minutu %d",
      h: "oras ida",
      hh: "oras %d",
      d: "loron ida",
      dd: "loron %d",
      M: "fulan ida",
      MM: "fulan %d",
      y: "tinan ida",
      yy: "tinan %d"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(e) {
      var a = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var $n = {
    0: "-\u0443\u043C",
    1: "-\u0443\u043C",
    2: "-\u044E\u043C",
    3: "-\u044E\u043C",
    4: "-\u0443\u043C",
    5: "-\u0443\u043C",
    6: "-\u0443\u043C",
    7: "-\u0443\u043C",
    8: "-\u0443\u043C",
    9: "-\u0443\u043C",
    10: "-\u0443\u043C",
    12: "-\u0443\u043C",
    13: "-\u0443\u043C",
    20: "-\u0443\u043C",
    30: "-\u044E\u043C",
    40: "-\u0443\u043C",
    50: "-\u0443\u043C",
    60: "-\u0443\u043C",
    70: "-\u0443\u043C",
    80: "-\u0443\u043C",
    90: "-\u0443\u043C",
    100: "-\u0443\u043C"
  };
  l.defineLocale("tg", {
    months: "\u044F\u043D\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043B_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B_\u043C\u0430\u0439_\u0438\u044E\u043D_\u0438\u044E\u043B_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440_\u043E\u043A\u0442\u044F\u0431\u0440_\u043D\u043E\u044F\u0431\u0440_\u0434\u0435\u043A\u0430\u0431\u0440".split("_"),
    monthsShort: "\u044F\u043D\u0432_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0439_\u0438\u044E\u043D_\u0438\u044E\u043B_\u0430\u0432\u0433_\u0441\u0435\u043D_\u043E\u043A\u0442_\u043D\u043E\u044F_\u0434\u0435\u043A".split("_"),
    weekdays: "\u044F\u043A\u0448\u0430\u043D\u0431\u0435_\u0434\u0443\u0448\u0430\u043D\u0431\u0435_\u0441\u0435\u0448\u0430\u043D\u0431\u0435_\u0447\u043E\u0440\u0448\u0430\u043D\u0431\u0435_\u043F\u0430\u043D\u04B7\u0448\u0430\u043D\u0431\u0435_\u04B7\u0443\u043C\u044A\u0430_\u0448\u0430\u043D\u0431\u0435".split("_"),
    weekdaysShort: "\u044F\u0448\u0431_\u0434\u0448\u0431_\u0441\u0448\u0431_\u0447\u0448\u0431_\u043F\u0448\u0431_\u04B7\u0443\u043C_\u0448\u043D\u0431".split("_"),
    weekdaysMin: "\u044F\u0448_\u0434\u0448_\u0441\u0448_\u0447\u0448_\u043F\u0448_\u04B7\u043C_\u0448\u0431".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[\u0418\u043C\u0440\u04EF\u0437 \u0441\u043E\u0430\u0442\u0438] LT",
      nextDay: "[\u041F\u0430\u0433\u043E\u04B3 \u0441\u043E\u0430\u0442\u0438] LT",
      lastDay: "[\u0414\u0438\u0440\u04EF\u0437 \u0441\u043E\u0430\u0442\u0438] LT",
      nextWeek: "dddd[\u0438] [\u04B3\u0430\u0444\u0442\u0430\u0438 \u043E\u044F\u043D\u0434\u0430 \u0441\u043E\u0430\u0442\u0438] LT",
      lastWeek: "dddd[\u0438] [\u04B3\u0430\u0444\u0442\u0430\u0438 \u0433\u0443\u0437\u0430\u0448\u0442\u0430 \u0441\u043E\u0430\u0442\u0438] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u0431\u0430\u044A\u0434\u0438 %s",
      past: "%s \u043F\u0435\u0448",
      s: "\u044F\u043A\u0447\u0430\u043D\u0434 \u0441\u043E\u043D\u0438\u044F",
      m: "\u044F\u043A \u0434\u0430\u049B\u0438\u049B\u0430",
      mm: "%d \u0434\u0430\u049B\u0438\u049B\u0430",
      h: "\u044F\u043A \u0441\u043E\u0430\u0442",
      hh: "%d \u0441\u043E\u0430\u0442",
      d: "\u044F\u043A \u0440\u04EF\u0437",
      dd: "%d \u0440\u04EF\u0437",
      M: "\u044F\u043A \u043C\u043E\u04B3",
      MM: "%d \u043C\u043E\u04B3",
      y: "\u044F\u043A \u0441\u043E\u043B",
      yy: "%d \u0441\u043E\u043B"
    },
    meridiemParse: /\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0448\u0430\u0431" === a ? e < 4 ? e : e + 12 : "\u0441\u0443\u0431\u04B3" === a ? e : "\u0440\u04EF\u0437" === a ? 11 <= e ? e : e + 12 : "\u0431\u0435\u0433\u043E\u04B3" === a ? e + 12 : void 0;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0448\u0430\u0431" : e < 11 ? "\u0441\u0443\u0431\u04B3" : e < 16 ? "\u0440\u04EF\u0437" : e < 19 ? "\u0431\u0435\u0433\u043E\u04B3" : "\u0448\u0430\u0431";
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0443\u043c|\u044e\u043c)/,
    ordinal: function ordinal(e) {
      return e + ($n[e] || $n[e % 10] || $n[100 <= e ? 100 : null]);
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("th", {
    months: "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21_\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C_\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21_\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19_\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21_\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19_\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21_\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21_\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19_\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21_\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19_\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21".split("_"),
    monthsShort: "\u0E21.\u0E04._\u0E01.\u0E1E._\u0E21\u0E35.\u0E04._\u0E40\u0E21.\u0E22._\u0E1E.\u0E04._\u0E21\u0E34.\u0E22._\u0E01.\u0E04._\u0E2A.\u0E04._\u0E01.\u0E22._\u0E15.\u0E04._\u0E1E.\u0E22._\u0E18.\u0E04.".split("_"),
    monthsParseExact: !0,
    weekdays: "\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C_\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C_\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23_\u0E1E\u0E38\u0E18_\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35_\u0E28\u0E38\u0E01\u0E23\u0E4C_\u0E40\u0E2A\u0E32\u0E23\u0E4C".split("_"),
    weekdaysShort: "\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C_\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C_\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23_\u0E1E\u0E38\u0E18_\u0E1E\u0E24\u0E2B\u0E31\u0E2A_\u0E28\u0E38\u0E01\u0E23\u0E4C_\u0E40\u0E2A\u0E32\u0E23\u0E4C".split("_"),
    weekdaysMin: "\u0E2D\u0E32._\u0E08._\u0E2D._\u0E1E._\u0E1E\u0E24._\u0E28._\u0E2A.".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm",
      LLLL: "\u0E27\u0E31\u0E19dddd\u0E17\u0E35\u0E48 D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm"
    },
    meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,
    isPM: function isPM(e) {
      return "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07" === e;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07" : "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07";
    },
    calendar: {
      sameDay: "[\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",
      nextDay: "[\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",
      nextWeek: "dddd[\u0E2B\u0E19\u0E49\u0E32 \u0E40\u0E27\u0E25\u0E32] LT",
      lastDay: "[\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",
      lastWeek: "[\u0E27\u0E31\u0E19]dddd[\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E27\u0E25\u0E32] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u0E2D\u0E35\u0E01 %s",
      past: "%s\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
      s: "\u0E44\u0E21\u0E48\u0E01\u0E35\u0E48\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
      ss: "%d \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
      m: "1 \u0E19\u0E32\u0E17\u0E35",
      mm: "%d \u0E19\u0E32\u0E17\u0E35",
      h: "1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
      hh: "%d \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
      d: "1 \u0E27\u0E31\u0E19",
      dd: "%d \u0E27\u0E31\u0E19",
      M: "1 \u0E40\u0E14\u0E37\u0E2D\u0E19",
      MM: "%d \u0E40\u0E14\u0E37\u0E2D\u0E19",
      y: "1 \u0E1B\u0E35",
      yy: "%d \u0E1B\u0E35"
    }
  }), l.defineLocale("tl-ph", {
    months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
    monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
    weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
    weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
    weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "MM/D/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY HH:mm",
      LLLL: "dddd, MMMM DD, YYYY HH:mm"
    },
    calendar: {
      sameDay: "LT [ngayong araw]",
      nextDay: "[Bukas ng] LT",
      nextWeek: "LT [sa susunod na] dddd",
      lastDay: "LT [kahapon]",
      lastWeek: "LT [noong nakaraang] dddd",
      sameElse: "L"
    },
    relativeTime: {
      future: "sa loob ng %s",
      past: "%s ang nakalipas",
      s: "ilang segundo",
      ss: "%d segundo",
      m: "isang minuto",
      mm: "%d minuto",
      h: "isang oras",
      hh: "%d oras",
      d: "isang araw",
      dd: "%d araw",
      M: "isang buwan",
      MM: "%d buwan",
      y: "isang taon",
      yy: "%d taon"
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function ordinal(e) {
      return e;
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Zn = "pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

  function Bn(e, a, t, s) {
    var n = function (e) {
      var a = Math.floor(e % 1e3 / 100),
          t = Math.floor(e % 100 / 10),
          s = e % 10,
          n = "";
      0 < a && (n += Zn[a] + "vatlh");
      0 < t && (n += ("" !== n ? " " : "") + Zn[t] + "maH");
      0 < s && (n += ("" !== n ? " " : "") + Zn[s]);
      return "" === n ? "pagh" : n;
    }(e);

    switch (t) {
      case "ss":
        return n + " lup";

      case "mm":
        return n + " tup";

      case "hh":
        return n + " rep";

      case "dd":
        return n + " jaj";

      case "MM":
        return n + " jar";

      case "yy":
        return n + " DIS";
    }
  }

  l.defineLocale("tlh", {
    months: "tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019".split("_"),
    monthsShort: "jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019".split("_"),
    monthsParseExact: !0,
    weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
    weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
    weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[DaHjaj] LT",
      nextDay: "[wa\u2019leS] LT",
      nextWeek: "LLL",
      lastDay: "[wa\u2019Hu\u2019] LT",
      lastWeek: "LLL",
      sameElse: "L"
    },
    relativeTime: {
      future: function future(e) {
        var a = e;
        return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "nem" : a + " pIq";
      },
      past: function past(e) {
        var a = e;
        return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "Hu\u2019" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "ben" : a + " ret";
      },
      s: "puS lup",
      ss: Bn,
      m: "wa\u2019 tup",
      mm: Bn,
      h: "wa\u2019 rep",
      hh: Bn,
      d: "wa\u2019 jaj",
      dd: Bn,
      M: "wa\u2019 jar",
      MM: Bn,
      y: "wa\u2019 DIS",
      yy: Bn
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  });
  var qn = {
    1: "'inci",
    5: "'inci",
    8: "'inci",
    70: "'inci",
    80: "'inci",
    2: "'nci",
    7: "'nci",
    20: "'nci",
    50: "'nci",
    3: "'\xfcnc\xfc",
    4: "'\xfcnc\xfc",
    100: "'\xfcnc\xfc",
    6: "'nc\u0131",
    9: "'uncu",
    10: "'uncu",
    30: "'uncu",
    60: "'\u0131nc\u0131",
    90: "'\u0131nc\u0131"
  };

  function Qn(e, a, t, s) {
    var n = {
      s: ["viensas secunds", "'iensas secunds"],
      ss: [e + " secunds", e + " secunds"],
      m: ["'n m\xedut", "'iens m\xedut"],
      mm: [e + " m\xeduts", e + " m\xeduts"],
      h: ["'n \xfeora", "'iensa \xfeora"],
      hh: [e + " \xfeoras", e + " \xfeoras"],
      d: ["'n ziua", "'iensa ziua"],
      dd: [e + " ziuas", e + " ziuas"],
      M: ["'n mes", "'iens mes"],
      MM: [e + " mesen", e + " mesen"],
      y: ["'n ar", "'iens ar"],
      yy: [e + " ars", e + " ars"]
    };
    return s ? n[t][0] : a ? n[t][0] : n[t][1];
  }

  function Xn(e, a, t) {
    var s, n;
    return "m" === t ? a ? "\u0445\u0432\u0438\u043B\u0438\u043D\u0430" : "\u0445\u0432\u0438\u043B\u0438\u043D\u0443" : "h" === t ? a ? "\u0433\u043E\u0434\u0438\u043D\u0430" : "\u0433\u043E\u0434\u0438\u043D\u0443" : e + " " + (s = +e, n = {
      ss: a ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434" : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434",
      mm: a ? "\u0445\u0432\u0438\u043B\u0438\u043D\u0430_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D" : "\u0445\u0432\u0438\u043B\u0438\u043D\u0443_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D",
      hh: a ? "\u0433\u043E\u0434\u0438\u043D\u0430_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D" : "\u0433\u043E\u0434\u0438\u043D\u0443_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D",
      dd: "\u0434\u0435\u043D\u044C_\u0434\u043D\u0456_\u0434\u043D\u0456\u0432",
      MM: "\u043C\u0456\u0441\u044F\u0446\u044C_\u043C\u0456\u0441\u044F\u0446\u0456_\u043C\u0456\u0441\u044F\u0446\u0456\u0432",
      yy: "\u0440\u0456\u043A_\u0440\u043E\u043A\u0438_\u0440\u043E\u043A\u0456\u0432"
    }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2]);
  }

  function ed(e) {
    return function () {
      return e + "\u043E" + (11 === this.hours() ? "\u0431" : "") + "] LT";
    };
  }

  l.defineLocale("tr", {
    months: "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\xFCl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
    monthsShort: "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_"),
    weekdays: "Pazar_Pazartesi_Sal\u0131_\xC7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split("_"),
    weekdaysShort: "Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"),
    weekdaysMin: "Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[bug\xfcn saat] LT",
      nextDay: "[yar\u0131n saat] LT",
      nextWeek: "[gelecek] dddd [saat] LT",
      lastDay: "[d\xfcn] LT",
      lastWeek: "[ge\xe7en] dddd [saat] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s sonra",
      past: "%s \xf6nce",
      s: "birka\xe7 saniye",
      ss: "%d saniye",
      m: "bir dakika",
      mm: "%d dakika",
      h: "bir saat",
      hh: "%d saat",
      d: "bir g\xfcn",
      dd: "%d g\xfcn",
      M: "bir ay",
      MM: "%d ay",
      y: "bir y\u0131l",
      yy: "%d y\u0131l"
    },
    ordinal: function ordinal(e, a) {
      switch (a) {
        case "d":
        case "D":
        case "Do":
        case "DD":
          return e;

        default:
          if (0 === e) return e + "'\u0131nc\u0131";
          var t = e % 10;
          return e + (qn[t] || qn[e % 100 - t] || qn[100 <= e ? 100 : null]);
      }
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("tzl", {
    months: "Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split("_"),
    monthsShort: "Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
    weekdays: "S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split("_"),
    weekdaysShort: "S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split("_"),
    weekdaysMin: "S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"),
    longDateFormat: {
      LT: "HH.mm",
      LTS: "HH.mm.ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM [dallas] YYYY",
      LLL: "D. MMMM [dallas] YYYY HH.mm",
      LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
    },
    meridiemParse: /d\'o|d\'a/i,
    isPM: function isPM(e) {
      return "d'o" === e.toLowerCase();
    },
    meridiem: function meridiem(e, a, t) {
      return 11 < e ? t ? "d'o" : "D'O" : t ? "d'a" : "D'A";
    },
    calendar: {
      sameDay: "[oxhi \xe0] LT",
      nextDay: "[dem\xe0 \xe0] LT",
      nextWeek: "dddd [\xe0] LT",
      lastDay: "[ieiri \xe0] LT",
      lastWeek: "[s\xfcr el] dddd [lasteu \xe0] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "osprei %s",
      past: "ja%s",
      s: Qn,
      ss: Qn,
      m: Qn,
      mm: Qn,
      h: Qn,
      hh: Qn,
      d: Qn,
      dd: Qn,
      M: Qn,
      MM: Qn,
      y: Qn,
      yy: Qn
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("tzm-latn", {
    months: "innayr_br\u02E4ayr\u02E4_mar\u02E4s\u02E4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02E4wbr\u02E4_nwwanbir_dwjnbir".split("_"),
    monthsShort: "innayr_br\u02E4ayr\u02E4_mar\u02E4s\u02E4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02E4wbr\u02E4_nwwanbir_dwjnbir".split("_"),
    weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1E0Dyas".split("_"),
    weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1E0Dyas".split("_"),
    weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1E0Dyas".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[asdkh g] LT",
      nextDay: "[aska g] LT",
      nextWeek: "dddd [g] LT",
      lastDay: "[assant g] LT",
      lastWeek: "dddd [g] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "dadkh s yan %s",
      past: "yan %s",
      s: "imik",
      ss: "%d imik",
      m: "minu\u1E0D",
      mm: "%d minu\u1E0D",
      h: "sa\u025Ba",
      hh: "%d tassa\u025Bin",
      d: "ass",
      dd: "%d ossan",
      M: "ayowr",
      MM: "%d iyyirn",
      y: "asgas",
      yy: "%d isgasn"
    },
    week: {
      dow: 6,
      doy: 12
    }
  }), l.defineLocale("tzm", {
    months: "\u2D49\u2D4F\u2D4F\u2D30\u2D62\u2D54_\u2D31\u2D55\u2D30\u2D62\u2D55_\u2D4E\u2D30\u2D55\u2D5A_\u2D49\u2D31\u2D54\u2D49\u2D54_\u2D4E\u2D30\u2D62\u2D62\u2D53_\u2D62\u2D53\u2D4F\u2D62\u2D53_\u2D62\u2D53\u2D4D\u2D62\u2D53\u2D63_\u2D56\u2D53\u2D5B\u2D5C_\u2D5B\u2D53\u2D5C\u2D30\u2D4F\u2D31\u2D49\u2D54_\u2D3D\u2D5F\u2D53\u2D31\u2D55_\u2D4F\u2D53\u2D61\u2D30\u2D4F\u2D31\u2D49\u2D54_\u2D37\u2D53\u2D4A\u2D4F\u2D31\u2D49\u2D54".split("_"),
    monthsShort: "\u2D49\u2D4F\u2D4F\u2D30\u2D62\u2D54_\u2D31\u2D55\u2D30\u2D62\u2D55_\u2D4E\u2D30\u2D55\u2D5A_\u2D49\u2D31\u2D54\u2D49\u2D54_\u2D4E\u2D30\u2D62\u2D62\u2D53_\u2D62\u2D53\u2D4F\u2D62\u2D53_\u2D62\u2D53\u2D4D\u2D62\u2D53\u2D63_\u2D56\u2D53\u2D5B\u2D5C_\u2D5B\u2D53\u2D5C\u2D30\u2D4F\u2D31\u2D49\u2D54_\u2D3D\u2D5F\u2D53\u2D31\u2D55_\u2D4F\u2D53\u2D61\u2D30\u2D4F\u2D31\u2D49\u2D54_\u2D37\u2D53\u2D4A\u2D4F\u2D31\u2D49\u2D54".split("_"),
    weekdays: "\u2D30\u2D59\u2D30\u2D4E\u2D30\u2D59_\u2D30\u2D62\u2D4F\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D4F\u2D30\u2D59_\u2D30\u2D3D\u2D54\u2D30\u2D59_\u2D30\u2D3D\u2D61\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D4E\u2D61\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D39\u2D62\u2D30\u2D59".split("_"),
    weekdaysShort: "\u2D30\u2D59\u2D30\u2D4E\u2D30\u2D59_\u2D30\u2D62\u2D4F\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D4F\u2D30\u2D59_\u2D30\u2D3D\u2D54\u2D30\u2D59_\u2D30\u2D3D\u2D61\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D4E\u2D61\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D39\u2D62\u2D30\u2D59".split("_"),
    weekdaysMin: "\u2D30\u2D59\u2D30\u2D4E\u2D30\u2D59_\u2D30\u2D62\u2D4F\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D4F\u2D30\u2D59_\u2D30\u2D3D\u2D54\u2D30\u2D59_\u2D30\u2D3D\u2D61\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D4E\u2D61\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D39\u2D62\u2D30\u2D59".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[\u2D30\u2D59\u2D37\u2D45 \u2D34] LT",
      nextDay: "[\u2D30\u2D59\u2D3D\u2D30 \u2D34] LT",
      nextWeek: "dddd [\u2D34] LT",
      lastDay: "[\u2D30\u2D5A\u2D30\u2D4F\u2D5C \u2D34] LT",
      lastWeek: "dddd [\u2D34] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u2D37\u2D30\u2D37\u2D45 \u2D59 \u2D62\u2D30\u2D4F %s",
      past: "\u2D62\u2D30\u2D4F %s",
      s: "\u2D49\u2D4E\u2D49\u2D3D",
      ss: "%d \u2D49\u2D4E\u2D49\u2D3D",
      m: "\u2D4E\u2D49\u2D4F\u2D53\u2D3A",
      mm: "%d \u2D4E\u2D49\u2D4F\u2D53\u2D3A",
      h: "\u2D59\u2D30\u2D44\u2D30",
      hh: "%d \u2D5C\u2D30\u2D59\u2D59\u2D30\u2D44\u2D49\u2D4F",
      d: "\u2D30\u2D59\u2D59",
      dd: "%d o\u2D59\u2D59\u2D30\u2D4F",
      M: "\u2D30\u2D62o\u2D53\u2D54",
      MM: "%d \u2D49\u2D62\u2D62\u2D49\u2D54\u2D4F",
      y: "\u2D30\u2D59\u2D33\u2D30\u2D59",
      yy: "%d \u2D49\u2D59\u2D33\u2D30\u2D59\u2D4F"
    },
    week: {
      dow: 6,
      doy: 12
    }
  }), l.defineLocale("ug-cn", {
    months: "\u064A\u0627\u0646\u06CB\u0627\u0631_\u0641\u06D0\u06CB\u0631\u0627\u0644_\u0645\u0627\u0631\u062A_\u0626\u0627\u067E\u0631\u06D0\u0644_\u0645\u0627\u064A_\u0626\u0649\u064A\u06C7\u0646_\u0626\u0649\u064A\u06C7\u0644_\u0626\u0627\u06CB\u063A\u06C7\u0633\u062A_\u0633\u06D0\u0646\u062A\u06D5\u0628\u0649\u0631_\u0626\u06C6\u0643\u062A\u06D5\u0628\u0649\u0631_\u0646\u0648\u064A\u0627\u0628\u0649\u0631_\u062F\u06D0\u0643\u0627\u0628\u0649\u0631".split("_"),
    monthsShort: "\u064A\u0627\u0646\u06CB\u0627\u0631_\u0641\u06D0\u06CB\u0631\u0627\u0644_\u0645\u0627\u0631\u062A_\u0626\u0627\u067E\u0631\u06D0\u0644_\u0645\u0627\u064A_\u0626\u0649\u064A\u06C7\u0646_\u0626\u0649\u064A\u06C7\u0644_\u0626\u0627\u06CB\u063A\u06C7\u0633\u062A_\u0633\u06D0\u0646\u062A\u06D5\u0628\u0649\u0631_\u0626\u06C6\u0643\u062A\u06D5\u0628\u0649\u0631_\u0646\u0648\u064A\u0627\u0628\u0649\u0631_\u062F\u06D0\u0643\u0627\u0628\u0649\u0631".split("_"),
    weekdays: "\u064A\u06D5\u0643\u0634\u06D5\u0646\u0628\u06D5_\u062F\u06C8\u0634\u06D5\u0646\u0628\u06D5_\u0633\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5_\u0686\u0627\u0631\u0634\u06D5\u0646\u0628\u06D5_\u067E\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5_\u062C\u06C8\u0645\u06D5_\u0634\u06D5\u0646\u0628\u06D5".split("_"),
    weekdaysShort: "\u064A\u06D5_\u062F\u06C8_\u0633\u06D5_\u0686\u0627_\u067E\u06D5_\u062C\u06C8_\u0634\u06D5".split("_"),
    weekdaysMin: "\u064A\u06D5_\u062F\u06C8_\u0633\u06D5_\u0686\u0627_\u067E\u06D5_\u062C\u06C8_\u0634\u06D5".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "YYYY-\u064A\u0649\u0644\u0649M-\u0626\u0627\u064A\u0646\u0649\u06ADD-\u0643\u06C8\u0646\u0649",
      LLL: "YYYY-\u064A\u0649\u0644\u0649M-\u0626\u0627\u064A\u0646\u0649\u06ADD-\u0643\u06C8\u0646\u0649\u060C HH:mm",
      LLLL: "dddd\u060C YYYY-\u064A\u0649\u0644\u0649M-\u0626\u0627\u064A\u0646\u0649\u06ADD-\u0643\u06C8\u0646\u0649\u060C HH:mm"
    },
    meridiemParse: /\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u064A\u06D0\u0631\u0649\u0645 \u0643\u06D0\u0686\u06D5" === a || "\u0633\u06D5\u06BE\u06D5\u0631" === a || "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0628\u06C7\u0631\u06C7\u0646" === a ? e : "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u06D0\u064A\u0649\u0646" === a || "\u0643\u06D5\u0686" === a ? e + 12 : 11 <= e ? e : e + 12;
    },
    meridiem: function meridiem(e, a, t) {
      var s = 100 * e + a;
      return s < 600 ? "\u064A\u06D0\u0631\u0649\u0645 \u0643\u06D0\u0686\u06D5" : s < 900 ? "\u0633\u06D5\u06BE\u06D5\u0631" : s < 1130 ? "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0628\u06C7\u0631\u06C7\u0646" : s < 1230 ? "\u0686\u06C8\u0634" : s < 1800 ? "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u06D0\u064A\u0649\u0646" : "\u0643\u06D5\u0686";
    },
    calendar: {
      sameDay: "[\u0628\u06C8\u06AF\u06C8\u0646 \u0633\u0627\u0626\u06D5\u062A] LT",
      nextDay: "[\u0626\u06D5\u062A\u06D5 \u0633\u0627\u0626\u06D5\u062A] LT",
      nextWeek: "[\u0643\u06D0\u0644\u06D5\u0631\u0643\u0649] dddd [\u0633\u0627\u0626\u06D5\u062A] LT",
      lastDay: "[\u062A\u06C6\u0646\u06C8\u06AF\u06C8\u0646] LT",
      lastWeek: "[\u0626\u0627\u0644\u062F\u0649\u0646\u0642\u0649] dddd [\u0633\u0627\u0626\u06D5\u062A] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u0643\u06D0\u064A\u0649\u0646",
      past: "%s \u0628\u06C7\u0631\u06C7\u0646",
      s: "\u0646\u06D5\u0686\u0686\u06D5 \u0633\u06D0\u0643\u0648\u0646\u062A",
      ss: "%d \u0633\u06D0\u0643\u0648\u0646\u062A",
      m: "\u0628\u0649\u0631 \u0645\u0649\u0646\u06C7\u062A",
      mm: "%d \u0645\u0649\u0646\u06C7\u062A",
      h: "\u0628\u0649\u0631 \u0633\u0627\u0626\u06D5\u062A",
      hh: "%d \u0633\u0627\u0626\u06D5\u062A",
      d: "\u0628\u0649\u0631 \u0643\u06C8\u0646",
      dd: "%d \u0643\u06C8\u0646",
      M: "\u0628\u0649\u0631 \u0626\u0627\u064A",
      MM: "%d \u0626\u0627\u064A",
      y: "\u0628\u0649\u0631 \u064A\u0649\u0644",
      yy: "%d \u064A\u0649\u0644"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/,
    ordinal: function ordinal(e, a) {
      switch (a) {
        case "d":
        case "D":
        case "DDD":
          return e + "-\u0643\u06C8\u0646\u0649";

        case "w":
        case "W":
          return e + "-\u06BE\u06D5\u067E\u062A\u06D5";

        default:
          return e;
      }
    },
    preparse: function preparse(e) {
      return e.replace(/\u060c/g, ",");
    },
    postformat: function postformat(e) {
      return e.replace(/,/g, "\u060C");
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("uk", {
    months: {
      format: "\u0441\u0456\u0447\u043D\u044F_\u043B\u044E\u0442\u043E\u0433\u043E_\u0431\u0435\u0440\u0435\u0437\u043D\u044F_\u043A\u0432\u0456\u0442\u043D\u044F_\u0442\u0440\u0430\u0432\u043D\u044F_\u0447\u0435\u0440\u0432\u043D\u044F_\u043B\u0438\u043F\u043D\u044F_\u0441\u0435\u0440\u043F\u043D\u044F_\u0432\u0435\u0440\u0435\u0441\u043D\u044F_\u0436\u043E\u0432\u0442\u043D\u044F_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043D\u044F".split("_"),
      standalone: "\u0441\u0456\u0447\u0435\u043D\u044C_\u043B\u044E\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C_\u043A\u0432\u0456\u0442\u0435\u043D\u044C_\u0442\u0440\u0430\u0432\u0435\u043D\u044C_\u0447\u0435\u0440\u0432\u0435\u043D\u044C_\u043B\u0438\u043F\u0435\u043D\u044C_\u0441\u0435\u0440\u043F\u0435\u043D\u044C_\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C_\u0436\u043E\u0432\u0442\u0435\u043D\u044C_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043D\u044C".split("_")
    },
    monthsShort: "\u0441\u0456\u0447_\u043B\u044E\u0442_\u0431\u0435\u0440_\u043A\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043B\u0438\u043F_\u0441\u0435\u0440\u043F_\u0432\u0435\u0440_\u0436\u043E\u0432\u0442_\u043B\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"),
    weekdays: function weekdays(e, a) {
      var t = {
        nominative: "\u043D\u0435\u0434\u0456\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044F_\u0441\u0443\u0431\u043E\u0442\u0430".split("_"),
        accusative: "\u043D\u0435\u0434\u0456\u043B\u044E_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044E_\u0441\u0443\u0431\u043E\u0442\u0443".split("_"),
        genitive: "\u043D\u0435\u0434\u0456\u043B\u0456_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043A\u0430_\u0432\u0456\u0432\u0442\u043E\u0440\u043A\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u0456_\u0441\u0443\u0431\u043E\u0442\u0438".split("_")
      };
      return e ? t[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(a) ? "accusative" : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(a) ? "genitive" : "nominative"][e.day()] : t.nominative;
    },
    weekdaysShort: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
    weekdaysMin: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY \u0440.",
      LLL: "D MMMM YYYY \u0440., HH:mm",
      LLLL: "dddd, D MMMM YYYY \u0440., HH:mm"
    },
    calendar: {
      sameDay: ed("[\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 "),
      nextDay: ed("[\u0417\u0430\u0432\u0442\u0440\u0430 "),
      lastDay: ed("[\u0412\u0447\u043E\u0440\u0430 "),
      nextWeek: ed("[\u0423] dddd ["),
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 5:
          case 6:
            return ed("[\u041C\u0438\u043D\u0443\u043B\u043E\u0457] dddd [").call(this);

          case 1:
          case 2:
          case 4:
            return ed("[\u041C\u0438\u043D\u0443\u043B\u043E\u0433\u043E] dddd [").call(this);
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "\u0437\u0430 %s",
      past: "%s \u0442\u043E\u043C\u0443",
      s: "\u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434",
      ss: Xn,
      m: Xn,
      mm: Xn,
      h: "\u0433\u043E\u0434\u0438\u043D\u0443",
      hh: Xn,
      d: "\u0434\u0435\u043D\u044C",
      dd: Xn,
      M: "\u043C\u0456\u0441\u044F\u0446\u044C",
      MM: Xn,
      y: "\u0440\u0456\u043A",
      yy: Xn
    },
    meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,
    isPM: function isPM(e) {
      return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e);
    },
    meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u043D\u043E\u0447\u0456" : e < 12 ? "\u0440\u0430\u043D\u043A\u0443" : e < 17 ? "\u0434\u043D\u044F" : "\u0432\u0435\u0447\u043E\u0440\u0430";
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
    ordinal: function ordinal(e, a) {
      switch (a) {
        case "M":
        case "d":
        case "DDD":
        case "w":
        case "W":
          return e + "-\u0439";

        case "D":
          return e + "-\u0433\u043E";

        default:
          return e;
      }
    },
    week: {
      dow: 1,
      doy: 7
    }
  });
  var ad = ["\u062C\u0646\u0648\u0631\u06CC", "\u0641\u0631\u0648\u0631\u06CC", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u0626\u06CC", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u0626\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"],
      td = ["\u0627\u062A\u0648\u0627\u0631", "\u067E\u06CC\u0631", "\u0645\u0646\u06AF\u0644", "\u0628\u062F\u06BE", "\u062C\u0645\u0639\u0631\u0627\u062A", "\u062C\u0645\u0639\u06C1", "\u06C1\u0641\u062A\u06C1"];
  return l.defineLocale("ur", {
    months: ad,
    monthsShort: ad,
    weekdays: td,
    weekdaysShort: td,
    weekdaysMin: td,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd\u060C D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
    isPM: function isPM(e) {
      return "\u0634\u0627\u0645" === e;
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0635\u0628\u062D" : "\u0634\u0627\u0645";
    },
    calendar: {
      sameDay: "[\u0622\u062C \u0628\u0648\u0642\u062A] LT",
      nextDay: "[\u06A9\u0644 \u0628\u0648\u0642\u062A] LT",
      nextWeek: "dddd [\u0628\u0648\u0642\u062A] LT",
      lastDay: "[\u06AF\u0630\u0634\u062A\u06C1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062A] LT",
      lastWeek: "[\u06AF\u0630\u0634\u062A\u06C1] dddd [\u0628\u0648\u0642\u062A] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s \u0628\u0639\u062F",
      past: "%s \u0642\u0628\u0644",
      s: "\u0686\u0646\u062F \u0633\u06CC\u06A9\u0646\u0688",
      ss: "%d \u0633\u06CC\u06A9\u0646\u0688",
      m: "\u0627\u06CC\u06A9 \u0645\u0646\u0679",
      mm: "%d \u0645\u0646\u0679",
      h: "\u0627\u06CC\u06A9 \u06AF\u06BE\u0646\u0679\u06C1",
      hh: "%d \u06AF\u06BE\u0646\u0679\u06D2",
      d: "\u0627\u06CC\u06A9 \u062F\u0646",
      dd: "%d \u062F\u0646",
      M: "\u0627\u06CC\u06A9 \u0645\u0627\u06C1",
      MM: "%d \u0645\u0627\u06C1",
      y: "\u0627\u06CC\u06A9 \u0633\u0627\u0644",
      yy: "%d \u0633\u0627\u0644"
    },
    preparse: function preparse(e) {
      return e.replace(/\u060c/g, ",");
    },
    postformat: function postformat(e) {
      return e.replace(/,/g, "\u060C");
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("uz-latn", {
    months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
    monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
    weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
    weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
    weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "D MMMM YYYY, dddd HH:mm"
    },
    calendar: {
      sameDay: "[Bugun soat] LT [da]",
      nextDay: "[Ertaga] LT [da]",
      nextWeek: "dddd [kuni soat] LT [da]",
      lastDay: "[Kecha soat] LT [da]",
      lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
      sameElse: "L"
    },
    relativeTime: {
      future: "Yaqin %s ichida",
      past: "Bir necha %s oldin",
      s: "soniya",
      ss: "%d soniya",
      m: "bir daqiqa",
      mm: "%d daqiqa",
      h: "bir soat",
      hh: "%d soat",
      d: "bir kun",
      dd: "%d kun",
      M: "bir oy",
      MM: "%d oy",
      y: "bir yil",
      yy: "%d yil"
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("uz", {
    months: "\u044F\u043D\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043B_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B_\u043C\u0430\u0439_\u0438\u044E\u043D_\u0438\u044E\u043B_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440_\u043E\u043A\u0442\u044F\u0431\u0440_\u043D\u043E\u044F\u0431\u0440_\u0434\u0435\u043A\u0430\u0431\u0440".split("_"),
    monthsShort: "\u044F\u043D\u0432_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0439_\u0438\u044E\u043D_\u0438\u044E\u043B_\u0430\u0432\u0433_\u0441\u0435\u043D_\u043E\u043A\u0442_\u043D\u043E\u044F_\u0434\u0435\u043A".split("_"),
    weekdays: "\u042F\u043A\u0448\u0430\u043D\u0431\u0430_\u0414\u0443\u0448\u0430\u043D\u0431\u0430_\u0421\u0435\u0448\u0430\u043D\u0431\u0430_\u0427\u043E\u0440\u0448\u0430\u043D\u0431\u0430_\u041F\u0430\u0439\u0448\u0430\u043D\u0431\u0430_\u0416\u0443\u043C\u0430_\u0428\u0430\u043D\u0431\u0430".split("_"),
    weekdaysShort: "\u042F\u043A\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043E\u0440_\u041F\u0430\u0439_\u0416\u0443\u043C_\u0428\u0430\u043D".split("_"),
    weekdaysMin: "\u042F\u043A_\u0414\u0443_\u0421\u0435_\u0427\u043E_\u041F\u0430_\u0416\u0443_\u0428\u0430".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "D MMMM YYYY, dddd HH:mm"
    },
    calendar: {
      sameDay: "[\u0411\u0443\u0433\u0443\u043D \u0441\u043E\u0430\u0442] LT [\u0434\u0430]",
      nextDay: "[\u042D\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]",
      nextWeek: "dddd [\u043A\u0443\u043D\u0438 \u0441\u043E\u0430\u0442] LT [\u0434\u0430]",
      lastDay: "[\u041A\u0435\u0447\u0430 \u0441\u043E\u0430\u0442] LT [\u0434\u0430]",
      lastWeek: "[\u0423\u0442\u0433\u0430\u043D] dddd [\u043A\u0443\u043D\u0438 \u0441\u043E\u0430\u0442] LT [\u0434\u0430]",
      sameElse: "L"
    },
    relativeTime: {
      future: "\u042F\u043A\u0438\u043D %s \u0438\u0447\u0438\u0434\u0430",
      past: "\u0411\u0438\u0440 \u043D\u0435\u0447\u0430 %s \u043E\u043B\u0434\u0438\u043D",
      s: "\u0444\u0443\u0440\u0441\u0430\u0442",
      ss: "%d \u0444\u0443\u0440\u0441\u0430\u0442",
      m: "\u0431\u0438\u0440 \u0434\u0430\u043A\u0438\u043A\u0430",
      mm: "%d \u0434\u0430\u043A\u0438\u043A\u0430",
      h: "\u0431\u0438\u0440 \u0441\u043E\u0430\u0442",
      hh: "%d \u0441\u043E\u0430\u0442",
      d: "\u0431\u0438\u0440 \u043A\u0443\u043D",
      dd: "%d \u043A\u0443\u043D",
      M: "\u0431\u0438\u0440 \u043E\u0439",
      MM: "%d \u043E\u0439",
      y: "\u0431\u0438\u0440 \u0439\u0438\u043B",
      yy: "%d \u0439\u0438\u043B"
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), l.defineLocale("vi", {
    months: "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),
    monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
    monthsParseExact: !0,
    weekdays: "ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\xE1u_th\u1EE9 b\u1EA3y".split("_"),
    weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
    weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
    weekdaysParseExact: !0,
    meridiemParse: /sa|ch/i,
    isPM: function isPM(e) {
      return /^ch$/i.test(e);
    },
    meridiem: function meridiem(e, a, t) {
      return e < 12 ? t ? "sa" : "SA" : t ? "ch" : "CH";
    },
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM [n\u0103m] YYYY",
      LLL: "D MMMM [n\u0103m] YYYY HH:mm",
      LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm",
      l: "DD/M/YYYY",
      ll: "D MMM YYYY",
      lll: "D MMM YYYY HH:mm",
      llll: "ddd, D MMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[H\xf4m nay l\xfac] LT",
      nextDay: "[Ng\xe0y mai l\xfac] LT",
      nextWeek: "dddd [tu\u1EA7n t\u1EDBi l\xFAc] LT",
      lastDay: "[H\xf4m qua l\xfac] LT",
      lastWeek: "dddd [tu\u1EA7n r\u1ED3i l\xFAc] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s t\u1EDBi",
      past: "%s tr\u01B0\u1EDBc",
      s: "v\xe0i gi\xe2y",
      ss: "%d gi\xe2y",
      m: "m\u1ED9t ph\xFAt",
      mm: "%d ph\xfat",
      h: "m\u1ED9t gi\u1EDD",
      hh: "%d gi\u1EDD",
      d: "m\u1ED9t ng\xE0y",
      dd: "%d ng\xe0y",
      M: "m\u1ED9t th\xE1ng",
      MM: "%d th\xe1ng",
      y: "m\u1ED9t n\u0103m",
      yy: "%d n\u0103m"
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function ordinal(e) {
      return e;
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("x-pseudo", {
    months: "J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r".split("_"),
    monthsShort: "J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c".split("_"),
    monthsParseExact: !0,
    weekdays: "S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd".split("_"),
    weekdaysShort: "S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t".split("_"),
    weekdaysMin: "S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[T~\xf3d\xe1~\xfd \xe1t] LT",
      nextDay: "[T~\xf3m\xf3~rr\xf3~w \xe1t] LT",
      nextWeek: "dddd [\xe1t] LT",
      lastDay: "[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT",
      lastWeek: "[L~\xe1st] dddd [\xe1t] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "\xed~\xf1 %s",
      past: "%s \xe1~g\xf3",
      s: "\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds",
      ss: "%d s~\xe9c\xf3\xf1~ds",
      m: "\xe1 ~m\xed\xf1~\xfat\xe9",
      mm: "%d m~\xed\xf1\xfa~t\xe9s",
      h: "\xe1~\xf1 h\xf3~\xfar",
      hh: "%d h~\xf3\xfars",
      d: "\xe1 ~d\xe1\xfd",
      dd: "%d d~\xe1\xfds",
      M: "\xe1 ~m\xf3\xf1~th",
      MM: "%d m~\xf3\xf1t~hs",
      y: "\xe1 ~\xfd\xe9\xe1r",
      yy: "%d \xfd~\xe9\xe1rs"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(e) {
      var a = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("yo", {
    months: "S\u1EB9\u0301r\u1EB9\u0301_E\u0300re\u0300le\u0300_\u1EB8r\u1EB9\u0300na\u0300_I\u0300gbe\u0301_E\u0300bibi_O\u0300ku\u0300du_Ag\u1EB9mo_O\u0300gu\u0301n_Owewe_\u1ECC\u0300wa\u0300ra\u0300_Be\u0301lu\u0301_\u1ECC\u0300p\u1EB9\u0300\u0300".split("_"),
    monthsShort: "S\u1EB9\u0301r_E\u0300rl_\u1EB8rn_I\u0300gb_E\u0300bi_O\u0300ku\u0300_Ag\u1EB9_O\u0300gu\u0301_Owe_\u1ECC\u0300wa\u0300_Be\u0301l_\u1ECC\u0300p\u1EB9\u0300\u0300".split("_"),
    weekdays: "A\u0300i\u0300ku\u0301_Aje\u0301_I\u0300s\u1EB9\u0301gun_\u1ECCj\u1ECD\u0301ru\u0301_\u1ECCj\u1ECD\u0301b\u1ECD_\u1EB8ti\u0300_A\u0300ba\u0301m\u1EB9\u0301ta".split("_"),
    weekdaysShort: "A\u0300i\u0300k_Aje\u0301_I\u0300s\u1EB9\u0301_\u1ECCjr_\u1ECCjb_\u1EB8ti\u0300_A\u0300ba\u0301".split("_"),
    weekdaysMin: "A\u0300i\u0300_Aj_I\u0300s_\u1ECCr_\u1ECCb_\u1EB8t_A\u0300b".split("_"),
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY h:mm A",
      LLLL: "dddd, D MMMM YYYY h:mm A"
    },
    calendar: {
      sameDay: "[O\u0300ni\u0300 ni] LT",
      nextDay: "[\u1ECC\u0300la ni] LT",
      nextWeek: "dddd [\u1ECCs\u1EB9\u0300 to\u0301n'b\u1ECD] [ni] LT",
      lastDay: "[A\u0300na ni] LT",
      lastWeek: "dddd [\u1ECCs\u1EB9\u0300 to\u0301l\u1ECD\u0301] [ni] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "ni\u0301 %s",
      past: "%s k\u1ECDja\u0301",
      s: "i\u0300s\u1EB9ju\u0301 aaya\u0301 die",
      ss: "aaya\u0301 %d",
      m: "i\u0300s\u1EB9ju\u0301 kan",
      mm: "i\u0300s\u1EB9ju\u0301 %d",
      h: "wa\u0301kati kan",
      hh: "wa\u0301kati %d",
      d: "\u1ECDj\u1ECD\u0301 kan",
      dd: "\u1ECDj\u1ECD\u0301 %d",
      M: "osu\u0300 kan",
      MM: "osu\u0300 %d",
      y: "\u1ECDdu\u0301n kan",
      yy: "\u1ECDdu\u0301n %d"
    },
    dayOfMonthOrdinalParse: /\u1ecdj\u1ecd\u0301\s\d{1,2}/,
    ordinal: "\u1ECDj\u1ECD\u0301 %d",
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("zh-cn", {
    months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),
    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
    weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),
    weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"),
    weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY\u5E74M\u6708D\u65E5",
      LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206",
      LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206",
      l: "YYYY/M/D",
      ll: "YYYY\u5E74M\u6708D\u65E5",
      lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
      llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm"
    },
    meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u51CC\u6668" === a || "\u65E9\u4E0A" === a || "\u4E0A\u5348" === a ? e : "\u4E0B\u5348" === a || "\u665A\u4E0A" === a ? e + 12 : 11 <= e ? e : e + 12;
    },
    meridiem: function meridiem(e, a, t) {
      var s = 100 * e + a;
      return s < 600 ? "\u51CC\u6668" : s < 900 ? "\u65E9\u4E0A" : s < 1130 ? "\u4E0A\u5348" : s < 1230 ? "\u4E2D\u5348" : s < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
    },
    calendar: {
      sameDay: "[\u4ECA\u5929]LT",
      nextDay: "[\u660E\u5929]LT",
      nextWeek: "[\u4E0B]ddddLT",
      lastDay: "[\u6628\u5929]LT",
      lastWeek: "[\u4E0A]ddddLT",
      sameElse: "L"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/,
    ordinal: function ordinal(e, a) {
      switch (a) {
        case "d":
        case "D":
        case "DDD":
          return e + "\u65E5";

        case "M":
          return e + "\u6708";

        case "w":
        case "W":
          return e + "\u5468";

        default:
          return e;
      }
    },
    relativeTime: {
      future: "%s\u5185",
      past: "%s\u524D",
      s: "\u51E0\u79D2",
      ss: "%d \u79D2",
      m: "1 \u5206\u949F",
      mm: "%d \u5206\u949F",
      h: "1 \u5C0F\u65F6",
      hh: "%d \u5C0F\u65F6",
      d: "1 \u5929",
      dd: "%d \u5929",
      M: "1 \u4E2A\u6708",
      MM: "%d \u4E2A\u6708",
      y: "1 \u5E74",
      yy: "%d \u5E74"
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), l.defineLocale("zh-hk", {
    months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),
    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
    weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),
    weekdaysShort: "\u9031\u65E5_\u9031\u4E00_\u9031\u4E8C_\u9031\u4E09_\u9031\u56DB_\u9031\u4E94_\u9031\u516D".split("_"),
    weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY\u5E74M\u6708D\u65E5",
      LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
      LLLL: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm",
      l: "YYYY/M/D",
      ll: "YYYY\u5E74M\u6708D\u65E5",
      lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
      llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm"
    },
    meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u51CC\u6668" === a || "\u65E9\u4E0A" === a || "\u4E0A\u5348" === a ? e : "\u4E2D\u5348" === a ? 11 <= e ? e : e + 12 : "\u4E0B\u5348" === a || "\u665A\u4E0A" === a ? e + 12 : void 0;
    },
    meridiem: function meridiem(e, a, t) {
      var s = 100 * e + a;
      return s < 600 ? "\u51CC\u6668" : s < 900 ? "\u65E9\u4E0A" : s < 1130 ? "\u4E0A\u5348" : s < 1230 ? "\u4E2D\u5348" : s < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
    },
    calendar: {
      sameDay: "[\u4ECA\u5929]LT",
      nextDay: "[\u660E\u5929]LT",
      nextWeek: "[\u4E0B]ddddLT",
      lastDay: "[\u6628\u5929]LT",
      lastWeek: "[\u4E0A]ddddLT",
      sameElse: "L"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
    ordinal: function ordinal(e, a) {
      switch (a) {
        case "d":
        case "D":
        case "DDD":
          return e + "\u65E5";

        case "M":
          return e + "\u6708";

        case "w":
        case "W":
          return e + "\u9031";

        default:
          return e;
      }
    },
    relativeTime: {
      future: "%s\u5167",
      past: "%s\u524D",
      s: "\u5E7E\u79D2",
      ss: "%d \u79D2",
      m: "1 \u5206\u9418",
      mm: "%d \u5206\u9418",
      h: "1 \u5C0F\u6642",
      hh: "%d \u5C0F\u6642",
      d: "1 \u5929",
      dd: "%d \u5929",
      M: "1 \u500B\u6708",
      MM: "%d \u500B\u6708",
      y: "1 \u5E74",
      yy: "%d \u5E74"
    }
  }), l.defineLocale("zh-tw", {
    months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),
    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
    weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),
    weekdaysShort: "\u9031\u65E5_\u9031\u4E00_\u9031\u4E8C_\u9031\u4E09_\u9031\u56DB_\u9031\u4E94_\u9031\u516D".split("_"),
    weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY\u5E74M\u6708D\u65E5",
      LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
      LLLL: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm",
      l: "YYYY/M/D",
      ll: "YYYY\u5E74M\u6708D\u65E5",
      lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
      llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm"
    },
    meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
    meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u51CC\u6668" === a || "\u65E9\u4E0A" === a || "\u4E0A\u5348" === a ? e : "\u4E2D\u5348" === a ? 11 <= e ? e : e + 12 : "\u4E0B\u5348" === a || "\u665A\u4E0A" === a ? e + 12 : void 0;
    },
    meridiem: function meridiem(e, a, t) {
      var s = 100 * e + a;
      return s < 600 ? "\u51CC\u6668" : s < 900 ? "\u65E9\u4E0A" : s < 1130 ? "\u4E0A\u5348" : s < 1230 ? "\u4E2D\u5348" : s < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
    },
    calendar: {
      sameDay: "[\u4ECA\u5929] LT",
      nextDay: "[\u660E\u5929] LT",
      nextWeek: "[\u4E0B]dddd LT",
      lastDay: "[\u6628\u5929] LT",
      lastWeek: "[\u4E0A]dddd LT",
      sameElse: "L"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
    ordinal: function ordinal(e, a) {
      switch (a) {
        case "d":
        case "D":
        case "DDD":
          return e + "\u65E5";

        case "M":
          return e + "\u6708";

        case "w":
        case "W":
          return e + "\u9031";

        default:
          return e;
      }
    },
    relativeTime: {
      future: "%s\u5167",
      past: "%s\u524D",
      s: "\u5E7E\u79D2",
      ss: "%d \u79D2",
      m: "1 \u5206\u9418",
      mm: "%d \u5206\u9418",
      h: "1 \u5C0F\u6642",
      hh: "%d \u5C0F\u6642",
      d: "1 \u5929",
      dd: "%d \u5929",
      M: "1 \u500B\u6708",
      MM: "%d \u500B\u6708",
      y: "1 \u5E74",
      yy: "%d \u5E74"
    }
  }), l.locale("en"), l;
});
"use strict";

$(function () {
  //JS開頭
  var WINDOW = $(window).width(); //視窗寬度

  var WINDOWH = $(window).height(); //視窗高度
  //---------------------頁籤設定------------------------

  $('.js-toggle-menu').find(".js-toggle-button").click(function () {
    $(this).toggleClass("active");
    $(this).siblings('.js-toggle-button').removeClass('active');
  }); //手風琴按鈕切換設定

  $(".js-accordion-menu").find('button').click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
    } else {
      $(this).parents(".js-accordion-menu").find('button').removeClass('active');
      $(this).parents(".js-accordion-menu").find('button').find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
      $(this).addClass("active");
      $(this).find('span').removeClass('ti-angle-down').addClass('ti-angle-up');
    }
  }); //----------------gotop功能-----------------

  $(".gotop").click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 300);
    return false;
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      //若目前的位置距離網頁頂端>100px
      $(".gotop").fadeIn("fast");
      $("header").addClass("godown");
    } else {
      $(".gotop").stop().fadeOut("fast");
      $("header").removeClass("godown");
    }

    var index = 0; //各單元區塊順序

    var st = $(window).scrollTop(); //現在捲軸位置

    var wh = $(window).height(); //視窗高度
  }); //跳閱書籤設定

  $(".js-link-bookmark").click(function () {
    var section = $(this).attr("href");
    $("html,body").animate({
      scrollTop: $(section).offset().top - 150
    }, 300);
    return false;
  });
  RESIZE();
  /*$(window).resize(function () {
  	RESIZE();
  });*/

  function RESIZE() {
    WINDOWH = $(window).height();
    WINDOW = $(window).width();

    if (WINDOW < 768) {
      $('.js-side-menu').addClass("close");
      $(".js-side-content").addClass("close");
    }
  }
}); //JS尾端
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*@preserve
 * Tempus Dominus Bootstrap4 v5.0.0-alpha14 (https://tempusdominus.github.io/bootstrap-4/)
 * Copyright 2016-2017 Jonathan Peterson
 * Licensed under MIT (https://github.com/tempusdominus/bootstrap-3/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Tempus Dominus Bootstrap4's requires jQuery. jQuery must be included before Tempus Dominus Bootstrap4's JavaScript.");
if (+function (a) {
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (b[0] < 2 && b[1] < 9 || 1 === b[0] && 9 === b[1] && b[2] < 1 || b[0] >= 4) throw new Error("Tempus Dominus Bootstrap4's requires at least jQuery v1.9.1 but less than v4.0.0");
}(jQuery), "undefined" == typeof moment) throw new Error("Tempus Dominus Bootstrap4's requires moment.js. Moment.js must be included before Tempus Dominus Bootstrap4's JavaScript.");
var version = moment.version.split(".");
if (version[0] <= 2 && version[1] < 17 || version[0] >= 3) throw new Error("Tempus Dominus Bootstrap4's requires at least moment.js v2.17.0 but less than v3.0.0");
+function () {
  function a(a, b) {
    if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !b || "object" != _typeof(b) && "function" != typeof b ? a : b;
  }

  function b(a, b) {
    if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + _typeof(b));
    a.prototype = Object.create(b && b.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
  }

  function c(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
  }

  var d = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (a) {
    return _typeof(a);
  } : function (a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : _typeof(a);
  },
      e = function () {
    function a(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
      }
    }

    return function (b, c, d) {
      return c && a(b.prototype, c), d && a(b, d), b;
    };
  }(),
      f = function (a, b) {
    var d = "datetimepicker",
        f = "5.0.0-alpha12",
        g = "" + d,
        h = "." + g,
        i = g + ".",
        j = ".data-api",
        k = {
      DATA_TOGGLE: '[data-toggle="' + g + '"]'
    },
        l = {
      INPUT: d + "-input"
    },
        m = {
      CHANGE: "change" + h,
      BLUR: "blur" + h,
      KEYUP: "keyup" + h,
      KEYDOWN: "keydown" + h,
      FOCUS: "focus" + h,
      CLICK_DATA_API: "click" + h + j,
      UPDATE: i + "update",
      ERROR: i + "error",
      HIDE: i + "hide",
      SHOW: i + "show"
    },
        n = [{
      CLASS_NAME: "days",
      NAV_FUNCTION: "M",
      NAV_STEP: 1
    }, {
      CLASS_NAME: "months",
      NAV_FUNCTION: "y",
      NAV_STEP: 1
    }, {
      CLASS_NAME: "years",
      NAV_FUNCTION: "y",
      NAV_STEP: 10
    }, {
      CLASS_NAME: "decades",
      NAV_FUNCTION: "y",
      NAV_STEP: 100
    }],
        o = {
      up: 38,
      38: "up",
      down: 40,
      40: "down",
      left: 37,
      37: "left",
      right: 39,
      39: "right",
      tab: 9,
      9: "tab",
      escape: 27,
      27: "escape",
      enter: 13,
      13: "enter",
      pageUp: 33,
      33: "pageUp",
      pageDown: 34,
      34: "pageDown",
      shift: 16,
      16: "shift",
      control: 17,
      17: "control",
      space: 32,
      32: "space",
      t: 84,
      84: "t",
      "delete": 46,
      46: "delete"
    },
        p = ["times", "days", "months", "years", "decades"],
        q = {},
        r = {},
        s = 0,
        t = {
      timeZone: "",
      format: !1,
      dayViewHeaderFormat: "MMMM YYYY",
      extraFormats: !1,
      stepping: 1,
      minDate: !1,
      maxDate: !1,
      useCurrent: !0,
      collapse: !0,
      locale: b.locale(),
      defaultDate: !1,
      disabledDates: !1,
      enabledDates: !1,
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-arrow-up",
        down: "fa fa-arrow-down",
        previous: "fa fa-chevron-left",
        next: "fa fa-chevron-right",
        today: "fa fa-calendar-check-o",
        clear: "fa fa-delete",
        close: "fa fa-times"
      },
      tooltips: {
        today: "Go to today",
        clear: "Clear selection",
        close: "Close the picker",
        selectMonth: "Select Month",
        prevMonth: "Previous Month",
        nextMonth: "Next Month",
        selectYear: "Select Year",
        prevYear: "Previous Year",
        nextYear: "Next Year",
        selectDecade: "Select Decade",
        prevDecade: "Previous Decade",
        nextDecade: "Next Decade",
        prevCentury: "Previous Century",
        nextCentury: "Next Century",
        pickHour: "Pick Hour",
        incrementHour: "Increment Hour",
        decrementHour: "Decrement Hour",
        pickMinute: "Pick Minute",
        incrementMinute: "Increment Minute",
        decrementMinute: "Decrement Minute",
        pickSecond: "Pick Second",
        incrementSecond: "Increment Second",
        decrementSecond: "Decrement Second",
        togglePeriod: "Toggle Period",
        selectTime: "Select Time",
        selectDate: "Select Date"
      },
      useStrict: !1,
      sideBySide: !1,
      daysOfWeekDisabled: !1,
      calendarWeeks: !1,
      viewMode: "days",
      toolbarPlacement: "default",
      buttons: {
        showToday: !1,
        showClear: !1,
        showClose: !1
      },
      widgetPositioning: {
        horizontal: "auto",
        vertical: "auto"
      },
      widgetParent: null,
      ignoreReadonly: !1,
      keepOpen: !1,
      focusOnShow: !0,
      inline: !1,
      keepInvalid: !1,
      keyBinds: {
        up: function up() {
          if (!this.widget) return !1;
          var a = this._dates[0] || this.getMoment();
          return this.widget.find(".datepicker").is(":visible") ? this.date(a.clone().subtract(7, "d")) : this.date(a.clone().add(this.stepping(), "m")), !0;
        },
        down: function down() {
          if (!this.widget) return this.show(), !1;
          var a = this._dates[0] || this.getMoment();
          return this.widget.find(".datepicker").is(":visible") ? this.date(a.clone().add(7, "d")) : this.date(a.clone().subtract(this.stepping(), "m")), !0;
        },
        "control up": function controlUp() {
          if (!this.widget) return !1;
          var a = this._dates[0] || this.getMoment();
          return this.widget.find(".datepicker").is(":visible") ? this.date(a.clone().subtract(1, "y")) : this.date(a.clone().add(1, "h")), !0;
        },
        "control down": function controlDown() {
          if (!this.widget) return !1;
          var a = this._dates[0] || this.getMoment();
          return this.widget.find(".datepicker").is(":visible") ? this.date(a.clone().add(1, "y")) : this.date(a.clone().subtract(1, "h")), !0;
        },
        left: function left() {
          if (!this.widget) return !1;
          var a = this._dates[0] || this.getMoment();
          return this.widget.find(".datepicker").is(":visible") && this.date(a.clone().subtract(1, "d")), !0;
        },
        right: function right() {
          if (!this.widget) return !1;
          var a = this._dates[0] || this.getMoment();
          return this.widget.find(".datepicker").is(":visible") && this.date(a.clone().add(1, "d")), !0;
        },
        pageUp: function pageUp() {
          if (!this.widget) return !1;
          var a = this._dates[0] || this.getMoment();
          return this.widget.find(".datepicker").is(":visible") && this.date(a.clone().subtract(1, "M")), !0;
        },
        pageDown: function pageDown() {
          if (!this.widget) return !1;
          var a = this._dates[0] || this.getMoment();
          return this.widget.find(".datepicker").is(":visible") && this.date(a.clone().add(1, "M")), !0;
        },
        enter: function enter() {
          return this.hide(), !0;
        },
        escape: function escape() {
          return !!this.widget && (this.hide(), !0);
        },
        "control space": function controlSpace() {
          return !!this.widget && (this.widget.find(".timepicker").is(":visible") && this.widget.find('.btn[data-action="togglePeriod"]').click(), !0);
        },
        t: function t() {
          return this.date(this.getMoment()), !0;
        },
        "delete": function _delete() {
          return !!this.widget && (this.clear(), !0);
        }
      },
      debug: !1,
      allowInputToggle: !1,
      disabledTimeIntervals: !1,
      disabledHours: !1,
      enabledHours: !1,
      viewDate: !1,
      allowMultidate: !1,
      multidateSeparator: ","
    },
        u = function () {
      function i(a, b) {
        c(this, i), this._options = this._getOptions(b), this._element = a, this._dates = [], this._datesFormatted = [], this._viewDate = null, this.unset = !0, this.component = !1, this.widget = !1, this.use24Hours = null, this.actualFormat = null, this.parseFormats = null, this.currentViewMode = null, this._int();
      }

      return i.prototype._int = function () {
        var b = this._element.data("target-input");

        this._element.is("input") ? this.input = this._element : void 0 !== b && ("nearest" === b ? this.input = this._element.find("input") : this.input = a(b)), this._dates = [], this._dates[0] = this.getMoment(), this._viewDate = this.getMoment().clone(), a.extend(!0, this._options, this._dataToOptions()), this.options(this._options), this._initFormatting(), void 0 !== this.input && this.input.is("input") && 0 !== this.input.val().trim().length ? this._setValue(this._parseInputDate(this.input.val().trim()), 0) : this._options.defaultDate && void 0 !== this.input && void 0 === this.input.attr("placeholder") && this._setValue(this._options.defaultDate, 0), this._options.inline && this.show();
      }, i.prototype._update = function () {
        this.widget && (this._fillDate(), this._fillTime());
      }, i.prototype._setValue = function (a, b) {
        var c = this.unset ? null : this._dates[b],
            d = "";
        if (!a) return this._options.allowMultidate && 1 !== this._dates.length ? (d = this._element.data("date") + ",", d = d.replace(c.format(this.actualFormat) + ",", "").replace(",,", "").replace(/,\s*$/, ""), this._dates.splice(b, 1), this._datesFormatted.splice(b, 1)) : (this.unset = !0, this._dates = [], this._datesFormatted = []), void 0 !== this.input && (this.input.val(d), this.input.trigger("input")), this._element.data("date", d), this._notifyEvent({
          type: i.Event.CHANGE,
          date: !1,
          oldDate: c
        }), void this._update();

        if (a = a.clone().locale(this._options.locale), this._hasTimeZone() && a.tz(this._options.timeZone), 1 !== this._options.stepping && a.minutes(Math.round(a.minutes() / this._options.stepping) * this._options.stepping).seconds(0), this._isValid(a)) {
          if (this._dates[b] = a, this._datesFormatted[b] = a.format("YYYY-MM-DD"), this._viewDate = a.clone(), this._options.allowMultidate && this._dates.length > 1) {
            for (var e = 0; e < this._dates.length; e++) {
              d += "" + this._dates[e].format(this.actualFormat) + this._options.multidateSeparator;
            }

            d = d.replace(/,\s*$/, "");
          } else d = this._dates[b].format(this.actualFormat);

          void 0 !== this.input && (this.input.val(d), this.input.trigger("input")), this._element.data("date", d), this.unset = !1, this._update(), this._notifyEvent({
            type: i.Event.CHANGE,
            date: this._dates[b].clone(),
            oldDate: c
          });
        } else this._options.keepInvalid ? this._notifyEvent({
          type: i.Event.CHANGE,
          date: a,
          oldDate: c
        }) : void 0 !== this.input && (this.input.val("" + (this.unset ? "" : this._dates[b].format(this.actualFormat))), this.input.trigger("input")), this._notifyEvent({
          type: i.Event.ERROR,
          date: a,
          oldDate: c
        });
      }, i.prototype._change = function (b) {
        var c = a(b.target).val().trim(),
            d = c ? this._parseInputDate(c) : null;
        return this._setValue(d), b.stopImmediatePropagation(), !1;
      }, i.prototype._getOptions = function (b) {
        return b = a.extend(!0, {}, t, b);
      }, i.prototype._hasTimeZone = function () {
        return void 0 !== b.tz && void 0 !== this._options.timeZone && null !== this._options.timeZone && "" !== this._options.timeZone;
      }, i.prototype._isEnabled = function (a) {
        if ("string" != typeof a || a.length > 1) throw new TypeError("isEnabled expects a single character string parameter");

        switch (a) {
          case "y":
            return this.actualFormat.indexOf("Y") !== -1;

          case "M":
            return this.actualFormat.indexOf("M") !== -1;

          case "d":
            return this.actualFormat.toLowerCase().indexOf("d") !== -1;

          case "h":
          case "H":
            return this.actualFormat.toLowerCase().indexOf("h") !== -1;

          case "m":
            return this.actualFormat.indexOf("m") !== -1;

          case "s":
            return this.actualFormat.indexOf("s") !== -1;

          default:
            return !1;
        }
      }, i.prototype._hasTime = function () {
        return this._isEnabled("h") || this._isEnabled("m") || this._isEnabled("s");
      }, i.prototype._hasDate = function () {
        return this._isEnabled("y") || this._isEnabled("M") || this._isEnabled("d");
      }, i.prototype._dataToOptions = function () {
        var b = this._element.data(),
            c = {};

        return b.dateOptions && b.dateOptions instanceof Object && (c = a.extend(!0, c, b.dateOptions)), a.each(this._options, function (a) {
          var d = "date" + a.charAt(0).toUpperCase() + a.slice(1);
          void 0 !== b[d] ? c[a] = b[d] : delete c[a];
        }), c;
      }, i.prototype._notifyEvent = function (a) {
        a.type === i.Event.CHANGE && a.date && a.date.isSame(a.oldDate) || !a.date && !a.oldDate || this._element.trigger(a);
      }, i.prototype._viewUpdate = function (a) {
        "y" === a && (a = "YYYY"), this._notifyEvent({
          type: i.Event.UPDATE,
          change: a,
          viewDate: this._viewDate.clone()
        });
      }, i.prototype._showMode = function (a) {
        this.widget && (a && (this.currentViewMode = Math.max(s, Math.min(3, this.currentViewMode + a))), this.widget.find(".datepicker > div").hide().filter(".datepicker-" + n[this.currentViewMode].CLASS_NAME).show());
      }, i.prototype._isInDisabledDates = function (a) {
        return this._options.disabledDates[a.format("YYYY-MM-DD")] === !0;
      }, i.prototype._isInEnabledDates = function (a) {
        return this._options.enabledDates[a.format("YYYY-MM-DD")] === !0;
      }, i.prototype._isInDisabledHours = function (a) {
        return this._options.disabledHours[a.format("H")] === !0;
      }, i.prototype._isInEnabledHours = function (a) {
        return this._options.enabledHours[a.format("H")] === !0;
      }, i.prototype._isValid = function (b, c) {
        if (!b.isValid()) return !1;
        if (this._options.disabledDates && "d" === c && this._isInDisabledDates(b)) return !1;
        if (this._options.enabledDates && "d" === c && !this._isInEnabledDates(b)) return !1;
        if (this._options.minDate && b.isBefore(this._options.minDate, c)) return !1;
        if (this._options.maxDate && b.isAfter(this._options.maxDate, c)) return !1;
        if (this._options.daysOfWeekDisabled && "d" === c && this._options.daysOfWeekDisabled.indexOf(b.day()) !== -1) return !1;
        if (this._options.disabledHours && ("h" === c || "m" === c || "s" === c) && this._isInDisabledHours(b)) return !1;
        if (this._options.enabledHours && ("h" === c || "m" === c || "s" === c) && !this._isInEnabledHours(b)) return !1;

        if (this._options.disabledTimeIntervals && ("h" === c || "m" === c || "s" === c)) {
          var d = !1;
          if (a.each(this._options.disabledTimeIntervals, function () {
            if (b.isBetween(this[0], this[1])) return d = !0, !1;
          }), d) return !1;
        }

        return !0;
      }, i.prototype._parseInputDate = function (a) {
        return void 0 === this._options.parseInputDate ? b.isMoment(a) || (a = this.getMoment(a)) : a = this._options.parseInputDate(a), a;
      }, i.prototype._keydown = function (a) {
        var b = null,
            c = void 0,
            d = void 0,
            e = void 0,
            f = void 0,
            g = [],
            h = {},
            i = a.which,
            j = "p";
        q[i] = j;

        for (c in q) {
          q.hasOwnProperty(c) && q[c] === j && (g.push(c), parseInt(c, 10) !== i && (h[c] = !0));
        }

        for (c in this._options.keyBinds) {
          if (this._options.keyBinds.hasOwnProperty(c) && "function" == typeof this._options.keyBinds[c] && (e = c.split(" "), e.length === g.length && o[i] === e[e.length - 1])) {
            for (f = !0, d = e.length - 2; d >= 0; d--) {
              if (!(o[e[d]] in h)) {
                f = !1;
                break;
              }
            }

            if (f) {
              b = this._options.keyBinds[c];
              break;
            }
          }
        }

        b && b.call(this.widget) && (a.stopPropagation(), a.preventDefault());
      }, i.prototype._keyup = function (a) {
        q[a.which] = "r", r[a.which] && (r[a.which] = !1, a.stopPropagation(), a.preventDefault());
      }, i.prototype._indexGivenDates = function (b) {
        var c = {},
            d = this;
        return a.each(b, function () {
          var a = d._parseInputDate(this);

          a.isValid() && (c[a.format("YYYY-MM-DD")] = !0);
        }), !!Object.keys(c).length && c;
      }, i.prototype._indexGivenHours = function (b) {
        var c = {};
        return a.each(b, function () {
          c[this] = !0;
        }), !!Object.keys(c).length && c;
      }, i.prototype._initFormatting = function () {
        var a = this._options.format || "L LT",
            b = this;
        this.actualFormat = a.replace(/(\[[^\[]*])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (a) {
          return b._dates[0].localeData().longDateFormat(a) || a;
        }), this.parseFormats = this._options.extraFormats ? this._options.extraFormats.slice() : [], this.parseFormats.indexOf(a) < 0 && this.parseFormats.indexOf(this.actualFormat) < 0 && this.parseFormats.push(this.actualFormat), this.use24Hours = this.actualFormat.toLowerCase().indexOf("a") < 1 && this.actualFormat.replace(/\[.*?]/g, "").indexOf("h") < 1, this._isEnabled("y") && (s = 2), this._isEnabled("M") && (s = 1), this._isEnabled("d") && (s = 0), this.currentViewMode = Math.max(s, this.currentViewMode), this.unset || this._setValue(this._dates[0], 0);
      }, i.prototype._getLastPickedDate = function () {
        return this._dates[this._getLastPickedDateIndex()];
      }, i.prototype._getLastPickedDateIndex = function () {
        return this._dates.length - 1;
      }, i.prototype.getMoment = function (a) {
        var c = void 0;
        return c = void 0 === a || null === a ? b() : this._hasTimeZone() ? b.tz(a, this.parseFormats, this._options.useStrict, this._options.timeZone) : b(a, this.parseFormats, this._options.useStrict), this._hasTimeZone() && c.tz(this._options.timeZone), c;
      }, i.prototype.toggle = function () {
        return this.widget ? this.hide() : this.show();
      }, i.prototype.ignoreReadonly = function (a) {
        if (0 === arguments.length) return this._options.ignoreReadonly;
        if ("boolean" != typeof a) throw new TypeError("ignoreReadonly () expects a boolean parameter");
        this._options.ignoreReadonly = a;
      }, i.prototype.options = function (b) {
        if (0 === arguments.length) return a.extend(!0, {}, this._options);
        if (!(b instanceof Object)) throw new TypeError("options() this.options parameter should be an object");
        a.extend(!0, this._options, b);
        var c = this;
        a.each(this._options, function (a, b) {
          void 0 !== c[a] && c[a](b);
        });
      }, i.prototype.date = function (a, c) {
        if (c = c || 0, 0 === arguments.length) return this.unset ? null : this._options.allowMultidate ? this._dates.join(this._options.multidateSeparator) : this._dates[c].clone();
        if (!(null === a || "string" == typeof a || b.isMoment(a) || a instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]");

        this._setValue(null === a ? null : this._parseInputDate(a), c);
      }, i.prototype.format = function (a) {
        if (0 === arguments.length) return this._options.format;
        if ("string" != typeof a && ("boolean" != typeof a || a !== !1)) throw new TypeError("format() expects a string or boolean:false parameter " + a);
        this._options.format = a, this.actualFormat && this._initFormatting();
      }, i.prototype.timeZone = function (a) {
        if (0 === arguments.length) return this._options.timeZone;
        if ("string" != typeof a) throw new TypeError("newZone() expects a string parameter");
        this._options.timeZone = a;
      }, i.prototype.dayViewHeaderFormat = function (a) {
        if (0 === arguments.length) return this._options.dayViewHeaderFormat;
        if ("string" != typeof a) throw new TypeError("dayViewHeaderFormat() expects a string parameter");
        this._options.dayViewHeaderFormat = a;
      }, i.prototype.extraFormats = function (a) {
        if (0 === arguments.length) return this._options.extraFormats;
        if (a !== !1 && !(a instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter");
        this._options.extraFormats = a, this.parseFormats && this._initFormatting();
      }, i.prototype.disabledDates = function (b) {
        if (0 === arguments.length) return this._options.disabledDates ? a.extend({}, this._options.disabledDates) : this._options.disabledDates;
        if (!b) return this._options.disabledDates = !1, this._update(), !0;
        if (!(b instanceof Array)) throw new TypeError("disabledDates() expects an array parameter");
        this._options.disabledDates = this._indexGivenDates(b), this._options.enabledDates = !1, this._update();
      }, i.prototype.enabledDates = function (b) {
        if (0 === arguments.length) return this._options.enabledDates ? a.extend({}, this._options.enabledDates) : this._options.enabledDates;
        if (!b) return this._options.enabledDates = !1, this._update(), !0;
        if (!(b instanceof Array)) throw new TypeError("enabledDates() expects an array parameter");
        this._options.enabledDates = this._indexGivenDates(b), this._options.disabledDates = !1, this._update();
      }, i.prototype.daysOfWeekDisabled = function (a) {
        if (0 === arguments.length) return this._options.daysOfWeekDisabled.splice(0);
        if ("boolean" == typeof a && !a) return this._options.daysOfWeekDisabled = !1, this._update(), !0;
        if (!(a instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");
        if (this._options.daysOfWeekDisabled = a.reduce(function (a, b) {
          return b = parseInt(b, 10), b > 6 || b < 0 || isNaN(b) ? a : (a.indexOf(b) === -1 && a.push(b), a);
        }, []).sort(), this._options.useCurrent && !this._options.keepInvalid) for (var b = 0; b < this._dates.length; b++) {
          for (var c = 0; !this._isValid(this._dates[b], "d");) {
            if (this._dates[b].add(1, "d"), 31 === c) throw "Tried 31 times to find a valid date";
            c++;
          }

          this._setValue(this._dates[b], b);
        }

        this._update();
      }, i.prototype.maxDate = function (a) {
        if (0 === arguments.length) return this._options.maxDate ? this._options.maxDate.clone() : this._options.maxDate;
        if ("boolean" == typeof a && a === !1) return this._options.maxDate = !1, this._update(), !0;
        "string" == typeof a && ("now" !== a && "moment" !== a || (a = this.getMoment()));

        var b = this._parseInputDate(a);

        if (!b.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + a);
        if (this._options.minDate && b.isBefore(this._options.minDate)) throw new TypeError("maxDate() date parameter is before this.options.minDate: " + b.format(this.actualFormat));
        this._options.maxDate = b;

        for (var c = 0; c < this._dates.length; c++) {
          this._options.useCurrent && !this._options.keepInvalid && this._dates[c].isAfter(a) && this._setValue(this._options.maxDate, c);
        }

        this._viewDate.isAfter(b) && (this._viewDate = b.clone().subtract(this._options.stepping, "m")), this._update();
      }, i.prototype.minDate = function (a) {
        if (0 === arguments.length) return this._options.minDate ? this._options.minDate.clone() : this._options.minDate;
        if ("boolean" == typeof a && a === !1) return this._options.minDate = !1, this._update(), !0;
        "string" == typeof a && ("now" !== a && "moment" !== a || (a = this.getMoment()));

        var b = this._parseInputDate(a);

        if (!b.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + a);
        if (this._options.maxDate && b.isAfter(this._options.maxDate)) throw new TypeError("minDate() date parameter is after this.options.maxDate: " + b.format(this.actualFormat));
        this._options.minDate = b;

        for (var c = 0; c < this._dates.length; c++) {
          this._options.useCurrent && !this._options.keepInvalid && this._dates[c].isBefore(a) && this._setValue(this._options.minDate, c);
        }

        this._viewDate.isBefore(b) && (this._viewDate = b.clone().add(this._options.stepping, "m")), this._update();
      }, i.prototype.defaultDate = function (a) {
        if (0 === arguments.length) return this._options.defaultDate ? this._options.defaultDate.clone() : this._options.defaultDate;
        if (!a) return this._options.defaultDate = !1, !0;
        "string" == typeof a && (a = "now" === a || "moment" === a ? this.getMoment() : this.getMoment(a));

        var b = this._parseInputDate(a);

        if (!b.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + a);
        if (!this._isValid(b)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
        this._options.defaultDate = b, (this._options.defaultDate && this._options.inline || void 0 !== this.input && "" === this.input.val().trim()) && this._setValue(this._options.defaultDate, 0);
      }, i.prototype.locale = function (a) {
        if (0 === arguments.length) return this._options.locale;
        if (!b.localeData(a)) throw new TypeError("locale() locale " + a + " is not loaded from moment locales!");

        for (var c = 0; c < this._dates.length; c++) {
          this._dates[c].locale(this._options.locale);
        }

        this._viewDate.locale(this._options.locale), this.actualFormat && this._initFormatting(), this.widget && (this.hide(), this.show());
      }, i.prototype.stepping = function (a) {
        return 0 === arguments.length ? this._options.stepping : (a = parseInt(a, 10), (isNaN(a) || a < 1) && (a = 1), void (this._options.stepping = a));
      }, i.prototype.useCurrent = function (a) {
        var b = ["year", "month", "day", "hour", "minute"];
        if (0 === arguments.length) return this._options.useCurrent;
        if ("boolean" != typeof a && "string" != typeof a) throw new TypeError("useCurrent() expects a boolean or string parameter");
        if ("string" == typeof a && b.indexOf(a.toLowerCase()) === -1) throw new TypeError("useCurrent() expects a string parameter of " + b.join(", "));
        this._options.useCurrent = a;
      }, i.prototype.collapse = function (a) {
        if (0 === arguments.length) return this._options.collapse;
        if ("boolean" != typeof a) throw new TypeError("collapse() expects a boolean parameter");
        return this._options.collapse === a || (this._options.collapse = a, void (this.widget && (this.hide(), this.show())));
      }, i.prototype.icons = function (b) {
        if (0 === arguments.length) return a.extend({}, this._options.icons);
        if (!(b instanceof Object)) throw new TypeError("icons() expects parameter to be an Object");
        a.extend(this._options.icons, b), this.widget && (this.hide(), this.show());
      }, i.prototype.tooltips = function (b) {
        if (0 === arguments.length) return a.extend({}, this._options.tooltips);
        if (!(b instanceof Object)) throw new TypeError("tooltips() expects parameter to be an Object");
        a.extend(this._options.tooltips, b), this.widget && (this.hide(), this.show());
      }, i.prototype.useStrict = function (a) {
        if (0 === arguments.length) return this._options.useStrict;
        if ("boolean" != typeof a) throw new TypeError("useStrict() expects a boolean parameter");
        this._options.useStrict = a;
      }, i.prototype.sideBySide = function (a) {
        if (0 === arguments.length) return this._options.sideBySide;
        if ("boolean" != typeof a) throw new TypeError("sideBySide() expects a boolean parameter");
        this._options.sideBySide = a, this.widget && (this.hide(), this.show());
      }, i.prototype.viewMode = function (a) {
        if (0 === arguments.length) return this._options.viewMode;
        if ("string" != typeof a) throw new TypeError("viewMode() expects a string parameter");
        if (i.ViewModes.indexOf(a) === -1) throw new TypeError("viewMode() parameter must be one of (" + i.ViewModes.join(", ") + ") value");
        this._options.viewMode = a, this.currentViewMode = Math.max(i.ViewModes.indexOf(a) - 1, i.MinViewModeNumber), this._showMode();
      }, i.prototype.calendarWeeks = function (a) {
        if (0 === arguments.length) return this._options.calendarWeeks;
        if ("boolean" != typeof a) throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
        this._options.calendarWeeks = a, this._update();
      }, i.prototype.buttons = function (b) {
        if (0 === arguments.length) return a.extend({}, this._options.buttons);
        if (!(b instanceof Object)) throw new TypeError("buttons() expects parameter to be an Object");
        if (a.extend(this._options.buttons, b), "boolean" != typeof this._options.buttons.showToday) throw new TypeError("buttons.showToday expects a boolean parameter");
        if ("boolean" != typeof this._options.buttons.showClear) throw new TypeError("buttons.showClear expects a boolean parameter");
        if ("boolean" != typeof this._options.buttons.showClose) throw new TypeError("buttons.showClose expects a boolean parameter");
        this.widget && (this.hide(), this.show());
      }, i.prototype.keepOpen = function (a) {
        if (0 === arguments.length) return this._options.keepOpen;
        if ("boolean" != typeof a) throw new TypeError("keepOpen() expects a boolean parameter");
        this._options.keepOpen = a;
      }, i.prototype.focusOnShow = function (a) {
        if (0 === arguments.length) return this._options.focusOnShow;
        if ("boolean" != typeof a) throw new TypeError("focusOnShow() expects a boolean parameter");
        this._options.focusOnShow = a;
      }, i.prototype.inline = function (a) {
        if (0 === arguments.length) return this._options.inline;
        if ("boolean" != typeof a) throw new TypeError("inline() expects a boolean parameter");
        this._options.inline = a;
      }, i.prototype.clear = function () {
        this._setValue(null);
      }, i.prototype.keyBinds = function (a) {
        return 0 === arguments.length ? this._options.keyBinds : void (this._options.keyBinds = a);
      }, i.prototype.debug = function (a) {
        if ("boolean" != typeof a) throw new TypeError("debug() expects a boolean parameter");
        this._options.debug = a;
      }, i.prototype.allowInputToggle = function (a) {
        if (0 === arguments.length) return this._options.allowInputToggle;
        if ("boolean" != typeof a) throw new TypeError("allowInputToggle() expects a boolean parameter");
        this._options.allowInputToggle = a;
      }, i.prototype.keepInvalid = function (a) {
        if (0 === arguments.length) return this._options.keepInvalid;
        if ("boolean" != typeof a) throw new TypeError("keepInvalid() expects a boolean parameter");
        this._options.keepInvalid = a;
      }, i.prototype.datepickerInput = function (a) {
        if (0 === arguments.length) return this._options.datepickerInput;
        if ("string" != typeof a) throw new TypeError("datepickerInput() expects a string parameter");
        this._options.datepickerInput = a;
      }, i.prototype.parseInputDate = function (a) {
        if (0 === arguments.length) return this._options.parseInputDate;
        if ("function" != typeof a) throw new TypeError("parseInputDate() should be as function");
        this._options.parseInputDate = a;
      }, i.prototype.disabledTimeIntervals = function (b) {
        if (0 === arguments.length) return this._options.disabledTimeIntervals ? a.extend({}, this._options.disabledTimeIntervals) : this._options.disabledTimeIntervals;
        if (!b) return this._options.disabledTimeIntervals = !1, this._update(), !0;
        if (!(b instanceof Array)) throw new TypeError("disabledTimeIntervals() expects an array parameter");
        this._options.disabledTimeIntervals = b, this._update();
      }, i.prototype.disabledHours = function (b) {
        if (0 === arguments.length) return this._options.disabledHours ? a.extend({}, this._options.disabledHours) : this._options.disabledHours;
        if (!b) return this._options.disabledHours = !1, this._update(), !0;
        if (!(b instanceof Array)) throw new TypeError("disabledHours() expects an array parameter");
        if (this._options.disabledHours = this._indexGivenHours(b), this._options.enabledHours = !1, this._options.useCurrent && !this._options.keepInvalid) for (var c = 0; c < this._dates.length; c++) {
          for (var d = 0; !this._isValid(this._dates[c], "h");) {
            if (this._dates[c].add(1, "h"), 24 === d) throw "Tried 24 times to find a valid date";
            d++;
          }

          this._setValue(this._dates[c], c);
        }

        this._update();
      }, i.prototype.enabledHours = function (b) {
        if (0 === arguments.length) return this._options.enabledHours ? a.extend({}, this._options.enabledHours) : this._options.enabledHours;
        if (!b) return this._options.enabledHours = !1, this._update(), !0;
        if (!(b instanceof Array)) throw new TypeError("enabledHours() expects an array parameter");
        if (this._options.enabledHours = this._indexGivenHours(b), this._options.disabledHours = !1, this._options.useCurrent && !this._options.keepInvalid) for (var c = 0; c < this._dates.length; c++) {
          for (var d = 0; !this._isValid(this._dates[c], "h");) {
            if (this._dates[c].add(1, "h"), 24 === d) throw "Tried 24 times to find a valid date";
            d++;
          }

          this._setValue(this._dates[c], c);
        }

        this._update();
      }, i.prototype.viewDate = function (a) {
        if (0 === arguments.length) return this._viewDate.clone();
        if (!a) return this._viewDate = (this._dates[0] || this.getMoment()).clone(), !0;
        if (!("string" == typeof a || b.isMoment(a) || a instanceof Date)) throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
        this._viewDate = this._parseInputDate(a), this._viewUpdate();
      }, i.prototype.allowMultidate = function (a) {
        if ("boolean" != typeof a) throw new TypeError("allowMultidate() expects a boolean parameter");
        this._options.allowMultidate = a;
      }, i.prototype.multidateSeparator = function (a) {
        if (0 === arguments.length) return this._options.multidateSeparator;
        if ("string" != typeof a || a.length > 1) throw new TypeError("multidateSeparator expects a single character string parameter");
        this._options.multidateSeparator = a;
      }, e(i, null, [{
        key: "NAME",
        get: function get() {
          return d;
        }
      }, {
        key: "VERSION",
        get: function get() {
          return f;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return g;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return h;
        }
      }, {
        key: "DATA_API_KEY",
        get: function get() {
          return j;
        }
      }, {
        key: "DatePickerModes",
        get: function get() {
          return n;
        }
      }, {
        key: "ViewModes",
        get: function get() {
          return p;
        }
      }, {
        key: "MinViewModeNumber",
        get: function get() {
          return s;
        }
      }, {
        key: "Event",
        get: function get() {
          return m;
        }
      }, {
        key: "Selector",
        get: function get() {
          return k;
        }
      }, {
        key: "Default",
        get: function get() {
          return t;
        },
        set: function set(a) {
          t = a;
        }
      }, {
        key: "ClassName",
        get: function get() {
          return l;
        }
      }]), i;
    }();

    return u;
  }(jQuery, moment);

  (function (e) {
    var g = e.fn[f.NAME],
        h = ["top", "bottom", "auto"],
        i = ["left", "right", "auto"],
        j = ["default", "top", "bottom"],
        k = function k(a) {
      var b = a.data("target"),
          c = void 0;
      return b || (b = a.attr("href") || "", b = /^#[a-z]/i.test(b) ? b : null), c = e(b), 0 === c.length ? c : (c.data(f.DATA_KEY) || e.extend({}, c.data(), e(this).data()), c);
    },
        l = function (g) {
      function k(b, d) {
        c(this, k);
        var e = a(this, g.call(this, b, d));
        return e._init(), e;
      }

      return b(k, g), k.prototype._init = function () {
        if (this._element.hasClass("input-group")) {
          var a = this._element.find(".datepickerbutton");

          0 === a.length ? this.component = this._element.find(".input-group-append") : this.component = a;
        }
      }, k.prototype._getDatePickerTemplate = function () {
        var a = e("<thead>").append(e("<tr>").append(e("<th>").addClass("prev").attr("data-action", "previous").append(e("<span>").addClass(this._options.icons.previous))).append(e("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", "" + (this._options.calendarWeeks ? "6" : "5"))).append(e("<th>").addClass("next").attr("data-action", "next").append(e("<span>").addClass(this._options.icons.next)))),
            b = e("<tbody>").append(e("<tr>").append(e("<td>").attr("colspan", "" + (this._options.calendarWeeks ? "8" : "7"))));
        return [e("<div>").addClass("datepicker-days").append(e("<table>").addClass("table table-sm").append(a).append(e("<tbody>"))), e("<div>").addClass("datepicker-months").append(e("<table>").addClass("table-condensed").append(a.clone()).append(b.clone())), e("<div>").addClass("datepicker-years").append(e("<table>").addClass("table-condensed").append(a.clone()).append(b.clone())), e("<div>").addClass("datepicker-decades").append(e("<table>").addClass("table-condensed").append(a.clone()).append(b.clone()))];
      }, k.prototype._getTimePickerMainTemplate = function () {
        var a = e("<tr>"),
            b = e("<tr>"),
            c = e("<tr>");
        return this._isEnabled("h") && (a.append(e("<td>").append(e("<a>").attr({
          href: "#",
          tabindex: "-1",
          title: this._options.tooltips.incrementHour
        }).addClass("btn").attr("data-action", "incrementHours").append(e("<span>").addClass(this._options.icons.up)))), b.append(e("<td>").append(e("<span>").addClass("timepicker-hour").attr({
          "data-time-component": "hours",
          title: this._options.tooltips.pickHour
        }).attr("data-action", "showHours"))), c.append(e("<td>").append(e("<a>").attr({
          href: "#",
          tabindex: "-1",
          title: this._options.tooltips.decrementHour
        }).addClass("btn").attr("data-action", "decrementHours").append(e("<span>").addClass(this._options.icons.down))))), this._isEnabled("m") && (this._isEnabled("h") && (a.append(e("<td>").addClass("separator")), b.append(e("<td>").addClass("separator").html(":")), c.append(e("<td>").addClass("separator"))), a.append(e("<td>").append(e("<a>").attr({
          href: "#",
          tabindex: "-1",
          title: this._options.tooltips.incrementMinute
        }).addClass("btn").attr("data-action", "incrementMinutes").append(e("<span>").addClass(this._options.icons.up)))), b.append(e("<td>").append(e("<span>").addClass("timepicker-minute").attr({
          "data-time-component": "minutes",
          title: this._options.tooltips.pickMinute
        }).attr("data-action", "showMinutes"))), c.append(e("<td>").append(e("<a>").attr({
          href: "#",
          tabindex: "-1",
          title: this._options.tooltips.decrementMinute
        }).addClass("btn").attr("data-action", "decrementMinutes").append(e("<span>").addClass(this._options.icons.down))))), this._isEnabled("s") && (this._isEnabled("m") && (a.append(e("<td>").addClass("separator")), b.append(e("<td>").addClass("separator").html(":")), c.append(e("<td>").addClass("separator"))), a.append(e("<td>").append(e("<a>").attr({
          href: "#",
          tabindex: "-1",
          title: this._options.tooltips.incrementSecond
        }).addClass("btn").attr("data-action", "incrementSeconds").append(e("<span>").addClass(this._options.icons.up)))), b.append(e("<td>").append(e("<span>").addClass("timepicker-second").attr({
          "data-time-component": "seconds",
          title: this._options.tooltips.pickSecond
        }).attr("data-action", "showSeconds"))), c.append(e("<td>").append(e("<a>").attr({
          href: "#",
          tabindex: "-1",
          title: this._options.tooltips.decrementSecond
        }).addClass("btn").attr("data-action", "decrementSeconds").append(e("<span>").addClass(this._options.icons.down))))), this.use24Hours || (a.append(e("<td>").addClass("separator")), b.append(e("<td>").append(e("<button>").addClass("btn btn-primary").attr({
          "data-action": "togglePeriod",
          tabindex: "-1",
          title: this._options.tooltips.togglePeriod
        }))), c.append(e("<td>").addClass("separator"))), e("<div>").addClass("timepicker-picker").append(e("<table>").addClass("table-condensed").append([a, b, c]));
      }, k.prototype._getTimePickerTemplate = function () {
        var a = e("<div>").addClass("timepicker-hours").append(e("<table>").addClass("table-condensed")),
            b = e("<div>").addClass("timepicker-minutes").append(e("<table>").addClass("table-condensed")),
            c = e("<div>").addClass("timepicker-seconds").append(e("<table>").addClass("table-condensed")),
            d = [this._getTimePickerMainTemplate()];
        return this._isEnabled("h") && d.push(a), this._isEnabled("m") && d.push(b), this._isEnabled("s") && d.push(c), d;
      }, k.prototype._getToolbar = function () {
        var a = [];
        return this._options.buttons.showToday && a.push(e("<td>").append(e("<a>").attr({
          "data-action": "today",
          title: this._options.tooltips.today
        }).append(e("<span>").addClass(this._options.icons.today)))), !this._options.sideBySide && this._hasDate() && this._hasTime() && a.push(e("<td>").append(e("<a>").attr({
          "data-action": "togglePicker",
          title: this._options.tooltips.selectTime
        }).append(e("<span>").addClass(this._options.icons.time)))), this._options.buttons.showClear && a.push(e("<td>").append(e("<a>").attr({
          "data-action": "clear",
          title: this._options.tooltips.clear
        }).append(e("<span>").addClass(this._options.icons.clear)))), this._options.buttons.showClose && a.push(e("<td>").append(e("<a>").attr({
          "data-action": "close",
          title: this._options.tooltips.close
        }).append(e("<span>").addClass(this._options.icons.close)))), 0 === a.length ? "" : e("<table>").addClass("table-condensed").append(e("<tbody>").append(e("<tr>").append(a)));
      }, k.prototype._getTemplate = function () {
        var a = e("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
            b = e("<div>").addClass("datepicker").append(this._getDatePickerTemplate()),
            c = e("<div>").addClass("timepicker").append(this._getTimePickerTemplate()),
            d = e("<ul>").addClass("list-unstyled"),
            f = e("<li>").addClass("picker-switch" + (this._options.collapse ? " accordion-toggle" : "")).append(this._getToolbar());
        return this._options.inline && a.removeClass("dropdown-menu"), this.use24Hours && a.addClass("usetwentyfour"), this._isEnabled("s") && !this.use24Hours && a.addClass("wider"), this._options.sideBySide && this._hasDate() && this._hasTime() ? (a.addClass("timepicker-sbs"), "top" === this._options.toolbarPlacement && a.append(f), a.append(e("<div>").addClass("row").append(b.addClass("col-md-6")).append(c.addClass("col-md-6"))), "bottom" !== this._options.toolbarPlacement && "default" !== this._options.toolbarPlacement || a.append(f), a) : ("top" === this._options.toolbarPlacement && d.append(f), this._hasDate() && d.append(e("<li>").addClass(this._options.collapse && this._hasTime() ? "collapse" : "").addClass(this._options.collapse && this._hasTime() && "time" === this._options.viewMode ? "" : "show").append(b)), "default" === this._options.toolbarPlacement && d.append(f), this._hasTime() && d.append(e("<li>").addClass(this._options.collapse && this._hasDate() ? "collapse" : "").addClass(this._options.collapse && this._hasDate() && "time" === this._options.viewMode ? "show" : "").append(c)), "bottom" === this._options.toolbarPlacement && d.append(f), a.append(d));
      }, k.prototype._place = function (a) {
        var b = a && a.data && a.data.picker || this,
            c = b._options.widgetPositioning.vertical,
            d = b._options.widgetPositioning.horizontal,
            f = void 0,
            g = (b.component || b._element).position(),
            h = (b.component || b._element).offset();

        if (b._options.widgetParent) f = b._options.widgetParent.append(b.widget);else if (b._element.is("input")) f = b._element.after(b.widget).parent();else {
          if (b._options.inline) return void (f = b._element.append(b.widget));
          f = b._element, b._element.children().first().after(b.widget);
        }
        if ("auto" === c && (c = h.top + 1.5 * b.widget.height() >= e(window).height() + e(window).scrollTop() && b.widget.height() + b._element.outerHeight() < h.top ? "top" : "bottom"), "auto" === d && (d = f.width() < h.left + b.widget.outerWidth() / 2 && h.left + b.widget.outerWidth() > e(window).width() ? "right" : "left"), "top" === c ? b.widget.addClass("top").removeClass("bottom") : b.widget.addClass("bottom").removeClass("top"), "right" === d ? b.widget.addClass("float-right") : b.widget.removeClass("float-right"), "relative" !== f.css("position") && (f = f.parents().filter(function () {
          return "relative" === e(this).css("position");
        }).first()), 0 === f.length) throw new Error("datetimepicker component should be placed within a relative positioned container");
        b.widget.css({
          top: "top" === c ? "auto" : g.top + b._element.outerHeight() + "px",
          bottom: "top" === c ? f.outerHeight() - (f === b._element ? 0 : g.top) + "px" : "auto",
          left: "left" === d ? (f === b._element ? 0 : g.left) + "px" : "auto",
          right: "left" === d ? "auto" : f.outerWidth() - b._element.outerWidth() - (f === b._element ? 0 : g.left) + "px"
        });
      }, k.prototype._fillDow = function () {
        var a = e("<tr>"),
            b = this._viewDate.clone().startOf("w").startOf("d");

        for (this._options.calendarWeeks === !0 && a.append(e("<th>").addClass("cw").text("#")); b.isBefore(this._viewDate.clone().endOf("w"));) {
          a.append(e("<th>").addClass("dow").text(b.format("dd"))), b.add(1, "d");
        }

        this.widget.find(".datepicker-days thead").append(a);
      }, k.prototype._fillMonths = function () {
        for (var a = [], b = this._viewDate.clone().startOf("y").startOf("d"); b.isSame(this._viewDate, "y");) {
          a.push(e("<span>").attr("data-action", "selectMonth").addClass("month").text(b.format("MMM"))), b.add(1, "M");
        }

        this.widget.find(".datepicker-months td").empty().append(a);
      }, k.prototype._updateMonths = function () {
        var a = this.widget.find(".datepicker-months"),
            b = a.find("th"),
            c = a.find("tbody").find("span"),
            d = this;
        b.eq(0).find("span").attr("title", this._options.tooltips.prevYear), b.eq(1).attr("title", this._options.tooltips.selectYear), b.eq(2).find("span").attr("title", this._options.tooltips.nextYear), a.find(".disabled").removeClass("disabled"), this._isValid(this._viewDate.clone().subtract(1, "y"), "y") || b.eq(0).addClass("disabled"), b.eq(1).text(this._viewDate.year()), this._isValid(this._viewDate.clone().add(1, "y"), "y") || b.eq(2).addClass("disabled"), c.removeClass("active"), this._getLastPickedDate().isSame(this._viewDate, "y") && !this.unset && c.eq(this._getLastPickedDate().month()).addClass("active"), c.each(function (a) {
          d._isValid(d._viewDate.clone().month(a), "M") || e(this).addClass("disabled");
        });
      }, k.prototype._getStartEndYear = function (a, b) {
        var c = a / 10,
            d = Math.floor(b / a) * a,
            e = d + 9 * c,
            f = Math.floor(b / c) * c;
        return [d, e, f];
      }, k.prototype._updateYears = function () {
        var a = this.widget.find(".datepicker-years"),
            b = a.find("th"),
            c = this._getStartEndYear(10, this._viewDate.year()),
            d = this._viewDate.clone().year(c[0]),
            e = this._viewDate.clone().year(c[1]),
            f = "";

        for (b.eq(0).find("span").attr("title", this._options.tooltips.prevDecade), b.eq(1).attr("title", this._options.tooltips.selectDecade), b.eq(2).find("span").attr("title", this._options.tooltips.nextDecade), a.find(".disabled").removeClass("disabled"), this._options.minDate && this._options.minDate.isAfter(d, "y") && b.eq(0).addClass("disabled"), b.eq(1).text(d.year() + "-" + e.year()), this._options.maxDate && this._options.maxDate.isBefore(e, "y") && b.eq(2).addClass("disabled"), f += '<span data-action="selectYear" class="year old">' + (d.year() - 1) + "</span>"; !d.isAfter(e, "y");) {
          f += '<span data-action="selectYear" class="year' + (d.isSame(this._getLastPickedDate(), "y") && !this.unset ? " active" : "") + (this._isValid(d, "y") ? "" : " disabled") + '">' + d.year() + "</span>", d.add(1, "y");
        }

        f += '<span data-action="selectYear" class="year old">' + d.year() + "</span>", a.find("td").html(f);
      }, k.prototype._updateDecades = function () {
        var a = this.widget.find(".datepicker-decades"),
            b = a.find("th"),
            c = this._getStartEndYear(100, this._viewDate.year()),
            d = this._viewDate.clone().year(c[0]),
            e = this._viewDate.clone().year(c[1]),
            f = !1,
            g = !1,
            h = void 0,
            i = "";

        for (b.eq(0).find("span").attr("title", this._options.tooltips.prevCentury), b.eq(2).find("span").attr("title", this._options.tooltips.nextCentury), a.find(".disabled").removeClass("disabled"), (0 === d.year() || this._options.minDate && this._options.minDate.isAfter(d, "y")) && b.eq(0).addClass("disabled"), b.eq(1).text(d.year() + "-" + e.year()), this._options.maxDate && this._options.maxDate.isBefore(e, "y") && b.eq(2).addClass("disabled"), i += d.year() - 10 < 0 ? "<span>&nbsp;</span>" : '<span data-action="selectDecade" class="decade old" data-selection="' + (d.year() + 6) + '">' + (d.year() - 10) + "</span>"; !d.isAfter(e, "y");) {
          h = d.year() + 11, f = this._options.minDate && this._options.minDate.isAfter(d, "y") && this._options.minDate.year() <= h, g = this._options.maxDate && this._options.maxDate.isAfter(d, "y") && this._options.maxDate.year() <= h, i += '<span data-action="selectDecade" class="decade' + (this._getLastPickedDate().isAfter(d) && this._getLastPickedDate().year() <= h ? " active" : "") + (this._isValid(d, "y") || f || g ? "" : " disabled") + '" data-selection="' + (d.year() + 6) + '">' + d.year() + "</span>", d.add(10, "y");
        }

        i += '<span data-action="selectDecade" class="decade old" data-selection="' + (d.year() + 6) + '">' + d.year() + "</span>", a.find("td").html(i);
      }, k.prototype._fillDate = function () {
        var a = this.widget.find(".datepicker-days"),
            b = a.find("th"),
            c = [],
            d = void 0,
            f = void 0,
            g = void 0,
            h = void 0;

        if (this._hasDate()) {
          for (b.eq(0).find("span").attr("title", this._options.tooltips.prevMonth), b.eq(1).attr("title", this._options.tooltips.selectMonth), b.eq(2).find("span").attr("title", this._options.tooltips.nextMonth), a.find(".disabled").removeClass("disabled"), b.eq(1).text(this._viewDate.format(this._options.dayViewHeaderFormat)), this._isValid(this._viewDate.clone().subtract(1, "M"), "M") || b.eq(0).addClass("disabled"), this._isValid(this._viewDate.clone().add(1, "M"), "M") || b.eq(2).addClass("disabled"), d = this._viewDate.clone().startOf("M").startOf("w").startOf("d"), h = 0; h < 42; h++) {
            if (0 === d.weekday() && (f = e("<tr>"), this._options.calendarWeeks && f.append('<td class="cw">' + d.week() + "</td>"), c.push(f)), g = "", d.isBefore(this._viewDate, "M") && (g += " old"), d.isAfter(this._viewDate, "M") && (g += " new"), this._options.allowMultidate) {
              var i = this._datesFormatted.indexOf(d.format("YYYY-MM-DD"));

              i !== -1 && d.isSame(this._datesFormatted[i], "d") && !this.unset && (g += " active");
            } else d.isSame(this._getLastPickedDate(), "d") && !this.unset && (g += " active");

            this._isValid(d, "d") || (g += " disabled"), d.isSame(this.getMoment(), "d") && (g += " today"), 0 !== d.day() && 6 !== d.day() || (g += " weekend"), f.append('<td data-action="selectDay" data-day="' + d.format("L") + '" class="day' + g + '">' + d.date() + "</td>"), d.add(1, "d");
          }

          a.find("tbody").empty().append(c), this._updateMonths(), this._updateYears(), this._updateDecades();
        }
      }, k.prototype._fillHours = function () {
        var a = this.widget.find(".timepicker-hours table"),
            b = this._viewDate.clone().startOf("d"),
            c = [],
            d = e("<tr>");

        for (this._viewDate.hour() > 11 && !this.use24Hours && b.hour(12); b.isSame(this._viewDate, "d") && (this.use24Hours || this._viewDate.hour() < 12 && b.hour() < 12 || this._viewDate.hour() > 11);) {
          b.hour() % 4 === 0 && (d = e("<tr>"), c.push(d)), d.append('<td data-action="selectHour" class="hour' + (this._isValid(b, "h") ? "" : " disabled") + '">' + b.format(this.use24Hours ? "HH" : "hh") + "</td>"), b.add(1, "h");
        }

        a.empty().append(c);
      }, k.prototype._fillMinutes = function () {
        for (var a = this.widget.find(".timepicker-minutes table"), b = this._viewDate.clone().startOf("h"), c = [], d = 1 === this._options.stepping ? 5 : this._options.stepping, f = e("<tr>"); this._viewDate.isSame(b, "h");) {
          b.minute() % (4 * d) === 0 && (f = e("<tr>"), c.push(f)), f.append('<td data-action="selectMinute" class="minute' + (this._isValid(b, "m") ? "" : " disabled") + '">' + b.format("mm") + "</td>"), b.add(d, "m");
        }

        a.empty().append(c);
      }, k.prototype._fillSeconds = function () {
        for (var a = this.widget.find(".timepicker-seconds table"), b = this._viewDate.clone().startOf("m"), c = [], d = e("<tr>"); this._viewDate.isSame(b, "m");) {
          b.second() % 20 === 0 && (d = e("<tr>"), c.push(d)), d.append('<td data-action="selectSecond" class="second' + (this._isValid(b, "s") ? "" : " disabled") + '">' + b.format("ss") + "</td>"), b.add(5, "s");
        }

        a.empty().append(c);
      }, k.prototype._fillTime = function () {
        var a = void 0,
            b = void 0,
            c = this.widget.find(".timepicker span[data-time-component]");
        this.use24Hours || (a = this.widget.find(".timepicker [data-action=togglePeriod]"), b = this._getLastPickedDate().clone().add(this._getLastPickedDate().hours() >= 12 ? -12 : 12, "h"), a.text(this._getLastPickedDate().format("A")), this._isValid(b, "h") ? a.removeClass("disabled") : a.addClass("disabled")), c.filter("[data-time-component=hours]").text(this._getLastPickedDate().format("" + (this.use24Hours ? "HH" : "hh"))), c.filter("[data-time-component=minutes]").text(this._getLastPickedDate().format("mm")), c.filter("[data-time-component=seconds]").text(this._getLastPickedDate().format("ss")), this._fillHours(), this._fillMinutes(), this._fillSeconds();
      }, k.prototype._doAction = function (a, b) {
        var c = this._getLastPickedDate();

        if (e(a.currentTarget).is(".disabled")) return !1;

        switch (b = b || e(a.currentTarget).data("action")) {
          case "next":
            var d = f.DatePickerModes[this.currentViewMode].NAV_FUNCTION;
            this._viewDate.add(f.DatePickerModes[this.currentViewMode].NAV_STEP, d), this._fillDate(), this._viewUpdate(d);
            break;

          case "previous":
            var g = f.DatePickerModes[this.currentViewMode].NAV_FUNCTION;
            this._viewDate.subtract(f.DatePickerModes[this.currentViewMode].NAV_STEP, g), this._fillDate(), this._viewUpdate(g);
            break;

          case "pickerSwitch":
            this._showMode(1);

            break;

          case "selectMonth":
            var h = e(a.target).closest("tbody").find("span").index(e(a.target));
            this._viewDate.month(h), this.currentViewMode === f.MinViewModeNumber ? (this._setValue(c.clone().year(this._viewDate.year()).month(this._viewDate.month()), this._getLastPickedDateIndex()), this._options.inline || this.hide()) : (this._showMode(-1), this._fillDate()), this._viewUpdate("M");
            break;

          case "selectYear":
            var i = parseInt(e(a.target).text(), 10) || 0;
            this._viewDate.year(i), this.currentViewMode === f.MinViewModeNumber ? (this._setValue(c.clone().year(this._viewDate.year()), this._getLastPickedDateIndex()), this._options.inline || this.hide()) : (this._showMode(-1), this._fillDate()), this._viewUpdate("YYYY");
            break;

          case "selectDecade":
            var j = parseInt(e(a.target).data("selection"), 10) || 0;
            this._viewDate.year(j), this.currentViewMode === f.MinViewModeNumber ? (this._setValue(c.clone().year(this._viewDate.year()), this._getLastPickedDateIndex()), this._options.inline || this.hide()) : (this._showMode(-1), this._fillDate()), this._viewUpdate("YYYY");
            break;

          case "selectDay":
            var k = this._viewDate.clone();

            e(a.target).is(".old") && k.subtract(1, "M"), e(a.target).is(".new") && k.add(1, "M"), this._setValue(k.date(parseInt(e(a.target).text(), 10)), this._getLastPickedDateIndex()), this._hasTime() || this._options.keepOpen || this._options.inline || this.hide();
            break;

          case "incrementHours":
            var l = c.clone().add(1, "h");
            this._isValid(l, "h") && this._setValue(l, this._getLastPickedDateIndex());
            break;

          case "incrementMinutes":
            var m = c.clone().add(this._options.stepping, "m");
            this._isValid(m, "m") && this._setValue(m, this._getLastPickedDateIndex());
            break;

          case "incrementSeconds":
            var n = c.clone().add(1, "s");
            this._isValid(n, "s") && this._setValue(n, this._getLastPickedDateIndex());
            break;

          case "decrementHours":
            var o = c.clone().subtract(1, "h");
            this._isValid(o, "h") && this._setValue(o, this._getLastPickedDateIndex());
            break;

          case "decrementMinutes":
            var p = c.clone().subtract(this._options.stepping, "m");
            this._isValid(p, "m") && this._setValue(p, this._getLastPickedDateIndex());
            break;

          case "decrementSeconds":
            var q = c.clone().subtract(1, "s");
            this._isValid(q, "s") && this._setValue(q, this._getLastPickedDateIndex());
            break;

          case "togglePeriod":
            this._setValue(c.clone().add(c.hours() >= 12 ? -12 : 12, "h"), this._getLastPickedDateIndex());

            break;

          case "togglePicker":
            var r = e(a.target),
                s = r.closest("a"),
                t = r.closest("ul"),
                u = t.find(".show"),
                v = t.find(".collapse:not(.show)"),
                w = r.is("span") ? r : r.find("span"),
                x = void 0;

            if (u && u.length) {
              if (x = u.data("collapse"), x && x.transitioning) return !0;
              u.collapse ? (u.collapse("hide"), v.collapse("show")) : (u.removeClass("show"), v.addClass("show")), w.toggleClass(this._options.icons.time + " " + this._options.icons.date), w.hasClass(this._options.icons.date) ? s.attr("title", this._options.tooltips.selectDate) : s.attr("title", this._options.tooltips.selectTime);
            }

            break;

          case "showPicker":
            this.widget.find(".timepicker > div:not(.timepicker-picker)").hide(), this.widget.find(".timepicker .timepicker-picker").show();
            break;

          case "showHours":
            this.widget.find(".timepicker .timepicker-picker").hide(), this.widget.find(".timepicker .timepicker-hours").show();
            break;

          case "showMinutes":
            this.widget.find(".timepicker .timepicker-picker").hide(), this.widget.find(".timepicker .timepicker-minutes").show();
            break;

          case "showSeconds":
            this.widget.find(".timepicker .timepicker-picker").hide(), this.widget.find(".timepicker .timepicker-seconds").show();
            break;

          case "selectHour":
            var y = parseInt(e(a.target).text(), 10);
            this.use24Hours || (c.hours() >= 12 ? 12 !== y && (y += 12) : 12 === y && (y = 0)), this._setValue(c.clone().hours(y), this._getLastPickedDateIndex()), this._doAction(a, "showPicker");
            break;

          case "selectMinute":
            this._setValue(c.clone().minutes(parseInt(e(a.target).text(), 10)), this._getLastPickedDateIndex()), this._doAction(a, "showPicker");
            break;

          case "selectSecond":
            this._setValue(c.clone().seconds(parseInt(e(a.target).text(), 10)), this._getLastPickedDateIndex()), this._doAction(a, "showPicker");
            break;

          case "clear":
            this.clear();
            break;

          case "today":
            var z = this.getMoment();
            this._isValid(z, "d") && this._setValue(z, this._getLastPickedDateIndex());
        }

        return !1;
      }, k.prototype.hide = function () {
        var a = !1;
        this.widget && (this.widget.find(".collapse").each(function () {
          var b = e(this).data("collapse");
          return !b || !b.transitioning || (a = !0, !1);
        }), a || (this.component && this.component.hasClass("btn") && this.component.toggleClass("active"), this.widget.hide(), e(window).off("resize", this._place()), this.widget.off("click", "[data-action]"), this.widget.off("mousedown", !1), this.widget.remove(), this.widget = !1, this._notifyEvent({
          type: f.Event.HIDE,
          date: this._getLastPickedDate().clone()
        }), void 0 !== this.input && this.input.blur(), this._viewDate = this._getLastPickedDate().clone()));
      }, k.prototype.show = function () {
        var a = void 0,
            b = {
          year: function year(a) {
            return a.month(0).date(1).hours(0).seconds(0).minutes(0);
          },
          month: function month(a) {
            return a.date(1).hours(0).seconds(0).minutes(0);
          },
          day: function day(a) {
            return a.hours(0).seconds(0).minutes(0);
          },
          hour: function hour(a) {
            return a.seconds(0).minutes(0);
          },
          minute: function minute(a) {
            return a.seconds(0);
          }
        };

        if (void 0 !== this.input) {
          if (this.input.prop("disabled") || !this._options.ignoreReadonly && this.input.prop("readonly") || this.widget) return;
          void 0 !== this.input.val() && 0 !== this.input.val().trim().length ? this._setValue(this._parseInputDate(this.input.val().trim()), 0) : this.unset && this._options.useCurrent && (a = this.getMoment(), "string" == typeof this._options.useCurrent && (a = b[this._options.useCurrent](a)), this._setValue(a, 0));
        } else this.unset && this._options.useCurrent && (a = this.getMoment(), "string" == typeof this._options.useCurrent && (a = b[this._options.useCurrent](a)), this._setValue(a, 0));

        this.widget = this._getTemplate(), this._fillDow(), this._fillMonths(), this.widget.find(".timepicker-hours").hide(), this.widget.find(".timepicker-minutes").hide(), this.widget.find(".timepicker-seconds").hide(), this._update(), this._showMode(), e(window).on("resize", {
          picker: this
        }, this._place), this.widget.on("click", "[data-action]", e.proxy(this._doAction, this)), this.widget.on("mousedown", !1), this.component && this.component.hasClass("btn") && this.component.toggleClass("active"), this._place(), this.widget.show(), void 0 !== this.input && this._options.focusOnShow && !this.input.is(":focus") && this.input.focus(), this._notifyEvent({
          type: f.Event.SHOW
        });
      }, k.prototype.destroy = function () {
        this.hide(), this._element.removeData(f.DATA_KEY), this._element.removeData("date");
      }, k.prototype.disable = function () {
        this.hide(), this.component && this.component.hasClass("btn") && this.component.addClass("disabled"), void 0 !== this.input && this.input.prop("disabled", !0);
      }, k.prototype.enable = function () {
        this.component && this.component.hasClass("btn") && this.component.removeClass("disabled"), void 0 !== this.input && this.input.prop("disabled", !1);
      }, k.prototype.toolbarPlacement = function (a) {
        if (0 === arguments.length) return this._options.toolbarPlacement;
        if ("string" != typeof a) throw new TypeError("toolbarPlacement() expects a string parameter");
        if (j.indexOf(a) === -1) throw new TypeError("toolbarPlacement() parameter must be one of (" + j.join(", ") + ") value");
        this._options.toolbarPlacement = a, this.widget && (this.hide(), this.show());
      }, k.prototype.widgetPositioning = function (a) {
        if (0 === arguments.length) return e.extend({}, this._options.widgetPositioning);
        if ("[object Object]" !== {}.toString.call(a)) throw new TypeError("widgetPositioning() expects an object variable");

        if (a.horizontal) {
          if ("string" != typeof a.horizontal) throw new TypeError("widgetPositioning() horizontal variable must be a string");
          if (a.horizontal = a.horizontal.toLowerCase(), i.indexOf(a.horizontal) === -1) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + i.join(", ") + ")");
          this._options.widgetPositioning.horizontal = a.horizontal;
        }

        if (a.vertical) {
          if ("string" != typeof a.vertical) throw new TypeError("widgetPositioning() vertical variable must be a string");
          if (a.vertical = a.vertical.toLowerCase(), h.indexOf(a.vertical) === -1) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + h.join(", ") + ")");
          this._options.widgetPositioning.vertical = a.vertical;
        }

        this._update();
      }, k.prototype.widgetParent = function (a) {
        if (0 === arguments.length) return this._options.widgetParent;
        if ("string" == typeof a && (a = e(a)), null !== a && "string" != typeof a && !(a instanceof e)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
        this._options.widgetParent = a, this.widget && (this.hide(), this.show());
      }, k._jQueryHandleThis = function (a, b, c) {
        var g = e(a).data(f.DATA_KEY);

        if ("object" === ("undefined" == typeof b ? "undefined" : d(b)) && e.extend({}, f.Default, b), g || (g = new k(e(a), b), e(a).data(f.DATA_KEY, g)), "string" == typeof b) {
          if (void 0 === g[b]) throw new Error('No method named "' + b + '"');
          return void 0 === c ? g[b]() : g[b](c);
        }
      }, k._jQueryInterface = function (a, b) {
        return 1 === this.length ? k._jQueryHandleThis(this[0], a, b) : this.each(function () {
          k._jQueryHandleThis(this, a, b);
        });
      }, k;
    }(f);

    return e(document).on(f.Event.CLICK_DATA_API, f.Selector.DATA_TOGGLE, function () {
      var a = k(e(this));
      0 !== a.length && l._jQueryInterface.call(a, "toggle");
    }).on(f.Event.CHANGE, "." + f.ClassName.INPUT, function (a) {
      var b = k(e(this));
      0 !== b.length && l._jQueryInterface.call(b, "_change", a);
    }).on(f.Event.BLUR, "." + f.ClassName.INPUT, function (a) {
      var b = k(e(this)),
          c = b.data(f.DATA_KEY);
      0 !== b.length && (c._options.debug || window.debug || l._jQueryInterface.call(b, "hide", a));
    }).on(f.Event.KEYDOWN, "." + f.ClassName.INPUT, function (a) {
      var b = k(e(this));
      0 !== b.length && l._jQueryInterface.call(b, "_keydown", a);
    }).on(f.Event.KEYUP, "." + f.ClassName.INPUT, function (a) {
      var b = k(e(this));
      0 !== b.length && l._jQueryInterface.call(b, "_keyup", a);
    }).on(f.Event.FOCUS, "." + f.ClassName.INPUT, function (a) {
      var b = k(e(this)),
          c = b.data(f.DATA_KEY);
      0 !== b.length && c._options.allowInputToggle && l._jQueryInterface.call(b, c, a);
    }), e.fn[f.NAME] = l._jQueryInterface, e.fn[f.NAME].Constructor = l, e.fn[f.NAME].noConflict = function () {
      return e.fn[f.NAME] = g, l._jQueryInterface;
    }, l;
  })(jQuery);
}();
//# sourceMappingURL=all.js.map

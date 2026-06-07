/*! For license information please see index.js.LICENSE.txt */
(() => {
  var e, t, n = {
    6751: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => ne});
      var r = function () {
        function e(e) {
          var t = this;
          this._insertTag = function (e) {
            var n;
            n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e)
          }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null
        }
        
        var t = e.prototype;
        return t.hydrate = function (e) {
          e.forEach(this._insertTag)
        }, t.insert = function (e) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function (e) {
            var t = document.createElement("style");
            return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
          }(this));
          var t = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var n = function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
            }(t);
            try {
              n.insertRule(e, n.cssRules.length)
            } catch (e) {
            }
          } else t.appendChild(document.createTextNode(e));
          this.ctr++
        }, t.flush = function () {
          this.tags.forEach((function (e) {
            return e.parentNode && e.parentNode.removeChild(e)
          })), this.tags = [], this.ctr = 0
        }, e
      }(), o = Math.abs, a = String.fromCharCode, i = Object.assign;
      
      function l(e) {
        return e.trim()
      }
      
      function s(e, t, n) {
        return e.replace(t, n)
      }
      
      function c(e, t) {
        return e.indexOf(t)
      }
      
      function u(e, t) {
        return 0 | e.charCodeAt(t)
      }
      
      function d(e, t, n) {
        return e.slice(t, n)
      }
      
      function f(e) {
        return e.length
      }
      
      function p(e) {
        return e.length
      }
      
      function m(e, t) {
        return t.push(e), e
      }
      
      var h = 1, v = 1, g = 0, b = 0, y = 0, x = "";
      
      function C(e, t, n, r, o, a, i) {
        return {value: e, root: t, parent: n, type: r, props: o, children: a, line: h, column: v, length: i, return: ""}
      }
      
      function E(e, t) {
        return i(C("", null, null, "", null, null, 0), e, {length: -e.length}, t)
      }
      
      function w() {
        return y = b > 0 ? u(x, --b) : 0, v--, 10 === y && (v = 1, h--), y
      }
      
      function k() {
        return y = b < g ? u(x, b++) : 0, v++, 10 === y && (v = 1, h++), y
      }
      
      function F() {
        return u(x, b)
      }
      
      function S() {
        return b
      }
      
      function A(e, t) {
        return d(x, e, t)
      }
      
      function D(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1
        }
        return 0
      }
      
      function Z(e) {
        return h = v = 1, g = f(x = e), b = 0, []
      }
      
      function B(e) {
        return x = "", e
      }
      
      function j(e) {
        return l(A(b - 1, M(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
      }
      
      function P(e) {
        for (; (y = F()) && y < 33;) k();
        return D(e) > 2 || D(y) > 3 ? "" : " "
      }
      
      function R(e, t) {
        for (; --t && k() && !(y < 48 || y > 102 || y > 57 && y < 65 || y > 70 && y < 97);) ;
        return A(e, S() + (t < 6 && 32 == F() && 32 == k()))
      }
      
      function M(e) {
        for (; k();) switch (y) {
          case e:
            return b;
          case 34:
          case 39:
            34 !== e && 39 !== e && M(y);
            break;
          case 40:
            41 === e && M(e);
            break;
          case 92:
            k()
        }
        return b
      }
      
      function N(e, t) {
        for (; k() && e + y !== 57 && (e + y !== 84 || 47 !== F());) ;
        return "/*" + A(t, b - 1) + "*" + a(47 === e ? e : k())
      }
      
      function _(e) {
        for (; !D(F());) k();
        return A(e, b)
      }
      
      var T = "-ms-", O = "-webkit-", I = "comm", z = "rule", L = "decl", $ = "@keyframes";
      
      function W(e, t) {
        for (var n = "", r = p(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
        return n
      }
      
      function H(e, t, n, r) {
        switch (e.type) {
          case"@import":
          case L:
            return e.return = e.return || e.value;
          case I:
            return "";
          case $:
            return e.return = e.value + "{" + W(e.children, r) + "}";
          case z:
            e.value = e.props.join(",")
        }
        return f(n = W(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
      }
      
      function V(e) {
        return B(U("", null, null, null, [""], e = Z(e), 0, [0], e))
      }
      
      function U(e, t, n, r, o, i, l, d, p) {
        for (var h = 0, v = 0, g = l, b = 0, y = 0, x = 0, C = 1, E = 1, A = 1, D = 0, Z = "", B = o, M = i, T = r, O = Z; E;) switch (x = D, D = k()) {
          case 40:
            if (108 != x && 58 == u(O, g - 1)) {
              -1 != c(O += s(j(D), "&", "&\f"), "&\f") && (A = -1);
              break
            }
          case 34:
          case 39:
          case 91:
            O += j(D);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            O += P(x);
            break;
          case 92:
            O += R(S() - 1, 7);
            continue;
          case 47:
            switch (F()) {
              case 42:
              case 47:
                m(K(N(k(), S()), t, n), p);
                break;
              default:
                O += "/"
            }
            break;
          case 123 * C:
            d[h++] = f(O) * A;
          case 125 * C:
          case 59:
          case 0:
            switch (D) {
              case 0:
              case 125:
                E = 0;
              case 59 + v:
                y > 0 && f(O) - g && m(y > 32 ? G(O + ";", r, n, g - 1) : G(s(O, " ", "") + ";", r, n, g - 2), p);
                break;
              case 59:
                O += ";";
              default:
                if (m(T = q(O, t, n, h, v, o, d, Z, B = [], M = [], g), i), 123 === D) if (0 === v) U(O, t, T, T, B, i, g, d, M); else switch (99 === b && 110 === u(O, 3) ? 100 : b) {
                  case 100:
                  case 109:
                  case 115:
                    U(e, T, T, r && m(q(e, T, T, 0, 0, o, d, Z, o, B = [], g), M), o, M, g, d, r ? B : M);
                    break;
                  default:
                    U(O, T, T, T, [""], M, 0, d, M)
                }
            }
            h = v = y = 0, C = A = 1, Z = O = "", g = l;
            break;
          case 58:
            g = 1 + f(O), y = x;
          default:
            if (C < 1) if (123 == D) --C; else if (125 == D && 0 == C++ && 125 == w()) continue;
            switch (O += a(D), D * C) {
              case 38:
                A = v > 0 ? 1 : (O += "\f", -1);
                break;
              case 44:
                d[h++] = (f(O) - 1) * A, A = 1;
                break;
              case 64:
                45 === F() && (O += j(k())), b = F(), v = g = f(Z = O += _(S())), D++;
                break;
              case 45:
                45 === x && 2 == f(O) && (C = 0)
            }
        }
        return i
      }
      
      function q(e, t, n, r, a, i, c, u, f, m, h) {
        for (var v = a - 1, g = 0 === a ? i : [""], b = p(g), y = 0, x = 0, E = 0; y < r; ++y) for (var w = 0, k = d(e, v + 1, v = o(x = c[y])), F = e; w < b; ++w) (F = l(x > 0 ? g[w] + " " + k : s(k, /&\f/g, g[w]))) && (f[E++] = F);
        return C(e, t, n, 0 === a ? z : u, f, m, h)
      }
      
      function K(e, t, n) {
        return C(e, t, n, I, a(y), d(e, 2, -2), 0)
      }
      
      function G(e, t, n, r) {
        return C(e, t, n, L, d(e, 0, r), d(e, r + 1, -1), r)
      }
      
      var X = function (e, t, n) {
        for (var r = 0, o = 0; r = o, o = F(), 38 === r && 12 === o && (t[n] = 1), !D(o);) k();
        return A(e, b)
      }, Y = new WeakMap, Q = function (e) {
        if ("rule" === e.type && e.parent && !(e.length < 1)) {
          for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; "rule" !== n.type;) if (!(n = n.parent)) return;
          if ((1 !== e.props.length || 58 === t.charCodeAt(0) || Y.get(n)) && !r) {
            Y.set(e, !0);
            for (var o = [], i = function (e, t) {
              return B(function (e, t) {
                var n = -1, r = 44;
                do {
                  switch (D(r)) {
                    case 0:
                      38 === r && 12 === F() && (t[n] = 1), e[n] += X(b - 1, t, n);
                      break;
                    case 2:
                      e[n] += j(r);
                      break;
                    case 4:
                      if (44 === r) {
                        e[++n] = 58 === F() ? "&\f" : "", t[n] = e[n].length;
                        break
                      }
                    default:
                      e[n] += a(r)
                  }
                } while (r = k());
                return e
              }(Z(e), t))
            }(t, o), l = n.props, s = 0, c = 0; s < i.length; s++) for (var u = 0; u < l.length; u++, c++) e.props[c] = o[s] ? i[s].replace(/&\f/g, l[u]) : l[u] + " " + i[s]
          }
        }
      }, J = function (e) {
        if ("decl" === e.type) {
          var t = e.value;
          108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
        }
      };
      
      function ee(e, t) {
        switch (function (e, t) {
          return 45 ^ u(e, 0) ? (((t << 2 ^ u(e, 0)) << 2 ^ u(e, 1)) << 2 ^ u(e, 2)) << 2 ^ u(e, 3) : 0
        }(e, t)) {
          case 5103:
            return "-webkit-print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return O + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return O + e + "-moz-" + e + T + e + e;
          case 6828:
          case 4268:
            return O + e + T + e + e;
          case 6165:
            return O + e + T + "flex-" + e + e;
          case 5187:
            return O + e + s(e, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") + e;
          case 5443:
            return O + e + T + "flex-item-" + s(e, /flex-|-self/, "") + e;
          case 4675:
            return O + e + T + "flex-line-pack" + s(e, /align-content|flex-|-self/, "") + e;
          case 5548:
            return O + e + T + s(e, "shrink", "negative") + e;
          case 5292:
            return O + e + T + s(e, "basis", "preferred-size") + e;
          case 6060:
            return "-webkit-box-" + s(e, "-grow", "") + O + e + T + s(e, "grow", "positive") + e;
          case 4554:
            return O + s(e, /([^-])(transform)/g, "$1-webkit-$2") + e;
          case 6187:
            return s(s(s(e, /(zoom-|grab)/, "-webkit-$1"), /(image-set)/, "-webkit-$1"), e, "") + e;
          case 5495:
          case 3959:
            return s(e, /(image-set\([^]*)/, "-webkit-$1$`$1");
          case 4968:
            return s(s(e, /(.+:)(flex-)?(.*)/, "-webkit-box-pack:$3-ms-flex-pack:$3"), /s.+-b[^;]+/, "justify") + O + e + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return s(e, /(.+)-inline(.+)/, "-webkit-$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (f(e) - 1 - t > 6) switch (u(e, t + 1)) {
              case 109:
                if (45 !== u(e, t + 4)) break;
              case 102:
                return s(e, /(.+:)(.+)-([^]+)/, "$1-webkit-$2-$3$1-moz-" + (108 == u(e, t + 3) ? "$3" : "$2-$3")) + e;
              case 115:
                return ~c(e, "stretch") ? ee(s(e, "stretch", "fill-available"), t) + e : e
            }
            break;
          case 4949:
            if (115 !== u(e, t + 1)) break;
          case 6444:
            switch (u(e, f(e) - 3 - (~c(e, "!important") && 10))) {
              case 107:
                return s(e, ":", ":-webkit-") + e;
              case 101:
                return s(e, /(.+:)([^;!]+)(;|!.+)?/, "$1-webkit-" + (45 === u(e, 14) ? "inline-" : "") + "box$3$1-webkit-$2$3$1-ms-$2box$3") + e
            }
            break;
          case 5936:
            switch (u(e, t + 11)) {
              case 114:
                return O + e + T + s(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return O + e + T + s(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return O + e + T + s(e, /[svh]\w+-[tblr]{2}/, "lr") + e
            }
            return O + e + T + e + e
        }
        return e
      }
      
      var te = [function (e, t, n, r) {
        if (e.length > -1 && !e.return) switch (e.type) {
          case L:
            e.return = ee(e.value, e.length);
            break;
          case $:
            return W([E(e, {value: s(e.value, "@", "@-webkit-")})], r);
          case z:
            if (e.length) return function (e, t) {
              return e.map(t).join("")
            }(e.props, (function (t) {
              switch (function (e, t) {
                return (e = /(::plac\w+|:read-\w+)/.exec(e)) ? e[0] : e
              }(t)) {
                case":read-only":
                case":read-write":
                  return W([E(e, {props: [s(t, /:(read-\w+)/, ":-moz-$1")]})], r);
                case"::placeholder":
                  return W([E(e, {props: [s(t, /:(plac\w+)/, ":-webkit-input-$1")]}), E(e, {props: [s(t, /:(plac\w+)/, ":-moz-$1")]}), E(e, {props: [s(t, /:(plac\w+)/, "-ms-input-$1")]})], r)
              }
              return ""
            }))
        }
      }];
      const ne = function (e) {
        var t = e.key;
        if ("css" === t) {
          var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
          Array.prototype.forEach.call(n, (function (e) {
            -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
          }))
        }
        var o, a, i = e.stylisPlugins || te, l = {}, s = [];
        o = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function (e) {
          for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) l[t[n]] = !0;
          s.push(e)
        }));
        var c, u, d, f, m = [H, (f = function (e) {
          c.insert(e)
        }, function (e) {
          e.root || (e = e.return) && f(e)
        })], h = (u = [Q, J].concat(i, m), d = p(u), function (e, t, n, r) {
          for (var o = "", a = 0; a < d; a++) o += u[a](e, t, n, r) || "";
          return o
        });
        a = function (e, t, n, r) {
          c = n, W(V(e ? e + "{" + t.styles + "}" : t.styles), h), r && (v.inserted[t.name] = !0)
        };
        var v = {
          key: t,
          sheet: new r({
            key: t,
            container: o,
            nonce: e.nonce,
            speedy: e.speedy,
            prepend: e.prepend,
            insertionPoint: e.insertionPoint
          }),
          nonce: e.nonce,
          inserted: l,
          registered: {},
          insert: a
        };
        return v.sheet.hydrate(s), v
      }
    }, 5042: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => r});
      const r = function (e) {
        var t = Object.create(null);
        return function (n) {
          return void 0 === t[n] && (t[n] = e(n)), t[n]
        }
      }
    }, 2443: (e, t, n) => {
      "use strict";
      n.d(t, {T: () => l, w: () => i});
      var r = n(7294), o = n(6751),
        a = (n(6797), n(7278), (0, r.createContext)("undefined" != typeof HTMLElement ? (0, o.Z)({key: "css"}) : null));
      a.Provider;
      var i = function (e) {
        return (0, r.forwardRef)((function (t, n) {
          var o = (0, r.useContext)(a);
          return e(t, o, n)
        }))
      }, l = (0, r.createContext)({})
    }, 6797: (e, t, n) => {
      "use strict";
      n.d(t, {O: () => h});
      const r = function (e) {
        for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
        switch (o) {
          case 3:
            n ^= (255 & e.charCodeAt(r + 2)) << 16;
          case 2:
            n ^= (255 & e.charCodeAt(r + 1)) << 8;
          case 1:
            n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16)
        }
        return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
      }, o = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
      };
      var a = n(5042), i = /[A-Z]|^ms/g, l = /_EMO_([^_]+?)_([^]*?)_EMO_/g, s = function (e) {
        return 45 === e.charCodeAt(1)
      }, c = function (e) {
        return null != e && "boolean" != typeof e
      }, u = (0, a.Z)((function (e) {
        return s(e) ? e : e.replace(i, "-$&").toLowerCase()
      })), d = function (e, t) {
        switch (e) {
          case"animation":
          case"animationName":
            if ("string" == typeof t) return t.replace(l, (function (e, t, n) {
              return p = {name: t, styles: n, next: p}, t
            }))
        }
        return 1 === o[e] || s(e) || "number" != typeof t || 0 === t ? t : t + "px"
      };
      
      function f(e, t, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case"boolean":
            return "";
          case"object":
            if (1 === n.anim) return p = {name: n.name, styles: n.styles, next: p}, n.name;
            if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r) for (; void 0 !== r;) p = {name: r.name, styles: r.styles, next: p}, r = r.next;
              return n.styles + ";"
            }
            return function (e, t, n) {
              var r = "";
              if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += f(e, t, n[o]) + ";"; else for (var a in n) {
                var i = n[a];
                if ("object" != typeof i) null != t && void 0 !== t[i] ? r += a + "{" + t[i] + "}" : c(i) && (r += u(a) + ":" + d(a, i) + ";"); else if (!Array.isArray(i) || "string" != typeof i[0] || null != t && void 0 !== t[i[0]]) {
                  var l = f(e, t, i);
                  switch (a) {
                    case"animation":
                    case"animationName":
                      r += u(a) + ":" + l + ";";
                      break;
                    default:
                      r += a + "{" + l + "}"
                  }
                } else for (var s = 0; s < i.length; s++) c(i[s]) && (r += u(a) + ":" + d(a, i[s]) + ";")
              }
              return r
            }(e, t, n);
          case"function":
            if (void 0 !== e) {
              var o = p, a = n(e);
              return p = o, f(e, t, a)
            }
        }
        if (null == t) return n;
        var i = t[n];
        return void 0 !== i ? i : n
      }
      
      var p, m = /label:\s*([^\s;\n{]+)\s*(;|$)/g, h = function (e, t, n) {
        if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
        var o = !0, a = "";
        p = void 0;
        var i = e[0];
        null == i || void 0 === i.raw ? (o = !1, a += f(n, t, i)) : a += i[0];
        for (var l = 1; l < e.length; l++) a += f(n, t, e[l]), o && (a += i[l]);
        m.lastIndex = 0;
        for (var s, c = ""; null !== (s = m.exec(a));) c += "-" + s[1];
        return {name: r(a) + c, styles: a, next: p}
      }
    }, 7278: (e, t, n) => {
      "use strict";
      var r;
      n.d(t, {L: () => i, j: () => l});
      var o = n(7294), a = !!(r || (r = n.t(o, 2))).useInsertionEffect && (r || (r = n.t(o, 2))).useInsertionEffect,
        i = a || function (e) {
          return e()
        }, l = a || o.useLayoutEffect
    }, 444: (e, t, n) => {
      "use strict";
      
      function r(e, t, n) {
        var r = "";
        return n.split(" ").forEach((function (n) {
          void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " "
        })), r
      }
      
      n.d(t, {My: () => a, fp: () => r, hC: () => o});
      var o = function (e, t, n) {
        var r = e.key + "-" + t.name;
        !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles)
      }, a = function (e, t, n) {
        o(e, t, n);
        var r = e.key + "-" + t.name;
        if (void 0 === e.inserted[t.name]) {
          var a = t;
          do {
            e.insert(t === a ? "." + r : "", a, e.sheet, !0), a = a.next
          } while (void 0 !== a)
        }
      }
    }, 6540: (e, t, n) => {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o = r(n(4938)), a = n(5893),
        i = (0, o.default)((0, a.jsx)("path", {d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}), "Add");
      t.Z = i
    }, 1687: (e, t, n) => {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o = r(n(4938)), a = n(5893),
        i = (0, o.default)((0, a.jsx)("path", {d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}), "AddCircleOutline");
      t.Z = i
    }, 281: (e, t, n) => {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o = r(n(4938)), a = n(5893),
        i = (0, o.default)((0, a.jsx)("path", {d: "M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"}), "Brush");
      t.Z = i
    }, 7036: (e, t, n) => {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o = r(n(4938)), a = n(5893),
        i = (0, o.default)((0, a.jsx)("path", {d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}), "Check");
      t.Z = i
    }, 6214: (e, t, n) => {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o = r(n(4938)), a = n(5893),
        i = (0, o.default)((0, a.jsx)("path", {d: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}), "Code");
      t.Z = i
    }, 4534: (e, t, n) => {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o = r(n(4938)), a = n(5893),
        i = (0, o.default)((0, a.jsx)("path", {d: "m20.71 5.63-2.34-2.34a.9959.9959 0 0 0-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19 5 17.08l8.06-8.06 1.92 1.92L6.92 19z"}), "Colorize");
      t.Z = i
    }, 1899: (e, t, n) => {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o = r(n(4938)), a = n(5893),
        i = (0, o.default)((0, a.jsx)("path", {d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}), "ContentCopy");
      t.Z = i
    }, 1048: (e, t, n) => {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o = r(n(4938)), a = n(5893),
        i = (0, o.default)((0, a.jsx)("path", {d: "M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"}), "Crop");
      t.Z = i
    }, 5709: (e, t, n) => {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o = r(n(4938)), a = n(5893),
        i = (0, o.default)((0, a.jsx)("path", {d: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}), "Dashboard");
      t.Z = i
    }, 8364: (e, t, n) => {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o = r(n(4938)), a = n(5893),
        i = (0, o.default)((0, a.jsx)("path", {d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}), "DeleteForever");
      t.Z = i
    }, 7957: (e, t, n) => {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o = r(n(4938)), a = n(5893),
        i = (0, o.default)((0, a.jsx)("path", {d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}), "Edit");
      t.Z = i
    }, 299: (e, t, n) => {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o = r(n(4938)), a = n(5893),
        i = (0, o.default)((0, a.jsx)("path", {d: "M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"}), "Gradient");
      t.Z = i
    }, 6693: (e, t, n) => {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o = r(n(4938)), a = n(5893),
        i = (0, o.default)((0, a.jsx)("path", {d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}), "Image");
      t.Z = i
    }, 4957: (e, t, n) => {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o = r(n(4938)), a = n(5893),
        i = (0, o.default)((0, a.jsx)("path", {d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}), "Star");
      t.Z = i
    }, 7884: (e, t, n) => {
      "use strict";
      var r = n(4836);
      t.Z = void 0;
      var o = r(n(4938)), a = n(5893),
        i = (0, o.default)((0, a.jsx)("path", {d: "M4 18h2.5v-2.5H4V18zm0-4.75h2.5v-2.5H4v2.5zM4 8.5h2.5V6H4v2.5zM17.5 6v2.5H20V6h-2.5zM13 8.5h2.5V6H13v2.5zm4.5 9.5H20v-2.5h-2.5V18zm0-4.75H20v-2.5h-2.5v2.5zM8.5 18H11v-2.5H8.5V18zm4.5 0h2.5v-2.5H13V18zM8.5 8.5H11V6H8.5v2.5zm4.5 4.75h2.5v-2.5H13v2.5zm-4.5 0H11v-2.5H8.5v2.5z"}), "ViewCompact");
      t.Z = i
    }, 4938: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return r.createSvgIcon
        }
      });
      var r = n(1699)
    }, 8794: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => ce});
      var r = n(7462), o = n(3366), a = n(1387), i = n(9766), l = n(6268), s = n(8010), c = n(6523), u = n(1796);
      const d = {black: "#000", white: "#fff"}, f = {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          A100: "#f5f5f5",
          A200: "#eeeeee",
          A400: "#bdbdbd",
          A700: "#616161"
        }, p = "#f3e5f5", m = "#ce93d8", h = "#ba68c8", v = "#ab47bc", g = "#9c27b0", b = "#7b1fa2", y = "#e57373",
        x = "#ef5350", C = "#f44336", E = "#d32f2f", w = "#c62828", k = "#ffb74d", F = "#ffa726", S = "#ff9800",
        A = "#f57c00", D = "#e65100", Z = "#e3f2fd", B = "#90caf9", j = "#42a5f5", P = "#1976d2", R = "#1565c0",
        M = "#4fc3f7", N = "#29b6f6", _ = "#03a9f4", T = "#0288d1", O = "#01579b", I = "#81c784", z = "#66bb6a",
        L = "#4caf50", $ = "#388e3c", W = "#2e7d32", H = "#1b5e20", V = ["mode", "contrastThreshold", "tonalOffset"],
        U = {
          text: {primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)"},
          divider: "rgba(0, 0, 0, 0.12)",
          background: {paper: d.white, default: d.white},
          action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: .04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: .08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: .38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: .12,
            activatedOpacity: .12
          }
        }, q = {
          text: {
            primary: d.white,
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            icon: "rgba(255, 255, 255, 0.5)"
          },
          divider: "rgba(255, 255, 255, 0.12)",
          background: {paper: "#121212", default: "#121212"},
          action: {
            active: d.white,
            hover: "rgba(255, 255, 255, 0.08)",
            hoverOpacity: .08,
            selected: "rgba(255, 255, 255, 0.16)",
            selectedOpacity: .16,
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabledOpacity: .38,
            focus: "rgba(255, 255, 255, 0.12)",
            focusOpacity: .12,
            activatedOpacity: .24
          }
        };
      
      function K(e, t, n, r) {
        const o = r.light || r, a = r.dark || 1.5 * r;
        e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : "light" === t ? e.light = (0, u.$n)(e.main, o) : "dark" === t && (e.dark = (0, u._j)(e.main, a)))
      }
      
      const G = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"],
        X = {textTransform: "uppercase"}, Y = '"Roboto", "Helvetica", "Arial", sans-serif';
      
      function Q(e, t) {
        const n = "function" == typeof t ? t(e) : t, {
          fontFamily: a = Y,
          fontSize: l = 14,
          fontWeightLight: s = 300,
          fontWeightRegular: c = 400,
          fontWeightMedium: u = 500,
          fontWeightBold: d = 700,
          htmlFontSize: f = 16,
          allVariants: p,
          pxToRem: m
        } = n, h = (0, o.Z)(n, G), v = l / 14, g = m || (e => e / f * v + "rem"), b = (e, t, n, o, i) => {
          return (0, r.Z)({
            fontFamily: a,
            fontWeight: e,
            fontSize: g(t),
            lineHeight: n
          }, a === Y ? {letterSpacing: (l = o / t, Math.round(1e5 * l) / 1e5 + "em")} : {}, i, p);
          var l
        }, y = {
          h1: b(s, 96, 1.167, -1.5),
          h2: b(s, 60, 1.2, -.5),
          h3: b(c, 48, 1.167, 0),
          h4: b(c, 34, 1.235, .25),
          h5: b(c, 24, 1.334, 0),
          h6: b(u, 20, 1.6, .15),
          subtitle1: b(c, 16, 1.75, .15),
          subtitle2: b(u, 14, 1.57, .1),
          body1: b(c, 16, 1.5, .15),
          body2: b(c, 14, 1.43, .15),
          button: b(u, 14, 1.75, .4, X),
          caption: b(c, 12, 1.66, .4),
          overline: b(c, 12, 2.66, 1, X)
        };
        return (0, i.Z)((0, r.Z)({
          htmlFontSize: f,
          pxToRem: g,
          fontFamily: a,
          fontSize: l,
          fontWeightLight: s,
          fontWeightRegular: c,
          fontWeightMedium: u,
          fontWeightBold: d
        }, y), h, {clone: !1})
      }
      
      function J(...e) {
        return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`].join(",")
      }
      
      const ee = ["none", J(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), J(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), J(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), J(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), J(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), J(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), J(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), J(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), J(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), J(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), J(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), J(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), J(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), J(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), J(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), J(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), J(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), J(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), J(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), J(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), J(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), J(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), J(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), J(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)],
        te = ["duration", "easing", "delay"], ne = {
          easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
          easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
          easeIn: "cubic-bezier(0.4, 0, 1, 1)",
          sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
        }, re = {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195
        };
      
      function oe(e) {
        return `${Math.round(e)}ms`
      }
      
      function ae(e) {
        if (!e) return 0;
        const t = e / 36;
        return Math.round(10 * (4 + 15 * t ** .25 + t / 5))
      }
      
      function ie(e) {
        const t = (0, r.Z)({}, ne, e.easing), n = (0, r.Z)({}, re, e.duration);
        return (0, r.Z)({
          getAutoHeightDuration: ae, create: (e = ["all"], r = {}) => {
            const {duration: a = n.standard, easing: i = t.easeInOut, delay: l = 0} = r;
            return (0, o.Z)(r, te), (Array.isArray(e) ? e : [e]).map((e => `${e} ${"string" == typeof a ? a : oe(a)} ${i} ${"string" == typeof l ? l : oe(l)}`)).join(",")
          }
        }, e, {easing: t, duration: n})
      }
      
      const le = {
        mobileStepper: 1e3,
        fab: 1050,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500
      }, se = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
      const ce = function (e = {}, ...t) {
        const {mixins: n = {}, palette: G = {}, transitions: X = {}, typography: Y = {}} = e, J = (0, o.Z)(e, se);
        if (e.vars) throw new Error((0, a.Z)(18));
        const te = function (e) {
          const {mode: t = "light", contrastThreshold: n = 3, tonalOffset: l = .2} = e, s = (0, o.Z)(e, V),
            c = e.primary || function (e = "light") {
              return "dark" === e ? {main: B, light: Z, dark: j} : {main: P, light: j, dark: R}
            }(t), G = e.secondary || function (e = "light") {
              return "dark" === e ? {main: m, light: p, dark: v} : {main: g, light: h, dark: b}
            }(t), X = e.error || function (e = "light") {
              return "dark" === e ? {main: C, light: y, dark: E} : {main: E, light: x, dark: w}
            }(t), Y = e.info || function (e = "light") {
              return "dark" === e ? {main: N, light: M, dark: T} : {main: T, light: _, dark: O}
            }(t), Q = e.success || function (e = "light") {
              return "dark" === e ? {main: z, light: I, dark: $} : {main: W, light: L, dark: H}
            }(t), J = e.warning || function (e = "light") {
              return "dark" === e ? {main: F, light: k, dark: A} : {main: "#ed6c02", light: S, dark: D}
            }(t);
          
          function ee(e) {
            return (0, u.mi)(e, q.text.primary) >= n ? q.text.primary : U.text.primary
          }
          
          const te = ({color: e, name: t, mainShade: n = 500, lightShade: o = 300, darkShade: i = 700}) => {
            if (!(e = (0, r.Z)({}, e)).main && e[n] && (e.main = e[n]), !e.hasOwnProperty("main")) throw new Error((0, a.Z)(11, t ? ` (${t})` : "", n));
            if ("string" != typeof e.main) throw new Error((0, a.Z)(12, t ? ` (${t})` : "", JSON.stringify(e.main)));
            return K(e, "light", o, l), K(e, "dark", i, l), e.contrastText || (e.contrastText = ee(e.main)), e
          }, ne = {dark: q, light: U};
          return (0, i.Z)((0, r.Z)({
            common: (0, r.Z)({}, d),
            mode: t,
            primary: te({color: c, name: "primary"}),
            secondary: te({color: G, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700"}),
            error: te({color: X, name: "error"}),
            warning: te({color: J, name: "warning"}),
            info: te({color: Y, name: "info"}),
            success: te({color: Q, name: "success"}),
            grey: f,
            contrastThreshold: n,
            getContrastText: ee,
            augmentColor: te,
            tonalOffset: l
          }, ne[t]), s)
        }(G), ne = (0, l.Z)(e);
        let re = (0, i.Z)(ne, {
          mixins: (oe = ne.breakpoints, ae = n, (0, r.Z)({
            toolbar: {
              minHeight: 56,
              [oe.up("xs")]: {"@media (orientation: landscape)": {minHeight: 48}},
              [oe.up("sm")]: {minHeight: 64}
            }
          }, ae)), palette: te, shadows: ee.slice(), typography: Q(te, Y), transitions: ie(X), zIndex: (0, r.Z)({}, le)
        });
        var oe, ae;
        return re = (0, i.Z)(re, J), re = t.reduce(((e, t) => (0, i.Z)(e, t)), re), re.unstable_sxConfig = (0, r.Z)({}, s.Z, null == J ? void 0 : J.unstable_sxConfig), re.unstable_sx = function (e) {
          return (0, c.Z)({sx: e, theme: this})
        }, re
      }()
    }, 2077: (e, t, n) => {
      "use strict";
      n.d(t, {ZP: () => _, FO: () => R, Dz: () => M});
      var r = n(3366), o = n(7462), a = n(7294), i = n(5042),
        l = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
      const s = (0, i.Z)((function (e) {
        return l.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
      }));
      var c = n(2443), u = n(444), d = n(6797), f = n(7278), p = s, m = function (e) {
        return "theme" !== e
      }, h = function (e) {
        return "string" == typeof e && e.charCodeAt(0) > 96 ? p : m
      }, v = function (e, t, n) {
        var r;
        if (t) {
          var o = t.shouldForwardProp;
          r = e.__emotion_forwardProp && o ? function (t) {
            return e.__emotion_forwardProp(t) && o(t)
          } : o
        }
        return "function" != typeof r && n && (r = e.__emotion_forwardProp), r
      }, g = function (e) {
        var t = e.cache, n = e.serialized, r = e.isStringTag;
        return (0, u.hC)(t, n, r), (0, f.L)((function () {
          return (0, u.My)(t, n, r)
        })), null
      };
      var b = function e(t, n) {
        var r, i, l = t.__emotion_real === t, s = l && t.__emotion_base || t;
        void 0 !== n && (r = n.label, i = n.target);
        var f = v(t, n, l), p = f || h(s), m = !p("as");
        return function () {
          var b = arguments, y = l && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : [];
          if (void 0 !== r && y.push("label:" + r + ";"), null == b[0] || void 0 === b[0].raw) y.push.apply(y, b); else {
            y.push(b[0][0]);
            for (var x = b.length, C = 1; C < x; C++) y.push(b[C], b[0][C])
          }
          var E = (0, c.w)((function (e, t, n) {
            var r = m && e.as || s, o = "", l = [], v = e;
            if (null == e.theme) {
              for (var b in v = {}, e) v[b] = e[b];
              v.theme = (0, a.useContext)(c.T)
            }
            "string" == typeof e.className ? o = (0, u.fp)(t.registered, l, e.className) : null != e.className && (o = e.className + " ");
            var x = (0, d.O)(y.concat(l), t.registered, v);
            o += t.key + "-" + x.name, void 0 !== i && (o += " " + i);
            var C = m && void 0 === f ? h(r) : p, E = {};
            for (var w in e) m && "as" === w || C(w) && (E[w] = e[w]);
            return E.className = o, E.ref = n, (0, a.createElement)(a.Fragment, null, (0, a.createElement)(g, {
              cache: t,
              serialized: x,
              isStringTag: "string" == typeof r
            }), (0, a.createElement)(r, E))
          }));
          return E.displayName = void 0 !== r ? r : "Styled(" + ("string" == typeof s ? s : s.displayName || s.name || "Component") + ")", E.defaultProps = t.defaultProps, E.__emotion_real = E, E.__emotion_base = s, E.__emotion_styles = y, E.__emotion_forwardProp = f, Object.defineProperty(E, "toString", {
            value: function () {
              return "." + i
            }
          }), E.withComponent = function (t, r) {
            return e(t, (0, o.Z)({}, n, r, {shouldForwardProp: v(E, r, !0)})).apply(void 0, y)
          }, E
        }
      }.bind();
      ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach((function (e) {
        b[e] = b(e)
      }));
      const y = b;
      var x = n(6268), C = n(8320);
      const E = ["variant"];
      
      function w(e) {
        return 0 === e.length
      }
      
      function k(e) {
        const {variant: t} = e, n = (0, r.Z)(e, E);
        let o = t || "";
        return Object.keys(n).sort().forEach((t => {
          o += "color" === t ? w(o) ? e[t] : (0, C.Z)(e[t]) : `${w(o) ? t : (0, C.Z)(t)}${(0, C.Z)(e[t].toString())}`
        })), o
      }
      
      var F = n(6523);
      const S = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], A = ["theme"], D = ["theme"];
      
      function Z(e) {
        return 0 === Object.keys(e).length
      }
      
      function B(e) {
        return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e
      }
      
      const j = (0, x.Z)();
      var P = n(8794);
      const R = e => B(e) && "classes" !== e, M = B, N = function (e = {}) {
        const {defaultTheme: t = j, rootShouldForwardProp: n = B, slotShouldForwardProp: a = B} = e, i = e => {
          const n = Z(e.theme) ? t : e.theme;
          return (0, F.Z)((0, o.Z)({}, e, {theme: n}))
        };
        return i.__mui_systemSx = !0, (e, l = {}) => {
          ((e, t) => {
            Array.isArray(e.__emotion_styles) && (e.__emotion_styles = e.__emotion_styles.filter((e => !(null != e && e.__mui_systemSx))))
          })(e);
          const {name: s, slot: c, skipVariantsResolver: u, skipSx: d, overridesResolver: f} = l, p = (0, r.Z)(l, S),
            m = void 0 !== u ? u : c && "Root" !== c || !1, h = d || !1;
          let v = B;
          "Root" === c ? v = n : c ? v = a : function (e) {
            return "string" == typeof e && e.charCodeAt(0) > 96
          }(e) && (v = void 0);
          const g = function (e, t) {
            return y(e, t)
          }(e, (0, o.Z)({shouldForwardProp: v, label: void 0}, p)), b = (e, ...n) => {
            const a = n ? n.map((e => "function" == typeof e && e.__emotion_real !== e ? n => {
              let {theme: a} = n, i = (0, r.Z)(n, A);
              return e((0, o.Z)({theme: Z(a) ? t : a}, i))
            } : e)) : [];
            let l = e;
            s && f && a.push((e => {
              const n = Z(e.theme) ? t : e.theme,
                r = ((e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null)(s, n);
              if (r) {
                const t = {};
                return Object.entries(r).forEach((([r, a]) => {
                  t[r] = "function" == typeof a ? a((0, o.Z)({}, e, {theme: n})) : a
                })), f(e, t)
              }
              return null
            })), s && !m && a.push((e => {
              const n = Z(e.theme) ? t : e.theme;
              return ((e, t, n, r) => {
                var o, a;
                const {ownerState: i = {}} = e, l = [],
                  s = null == n || null == (o = n.components) || null == (a = o[r]) ? void 0 : a.variants;
                return s && s.forEach((n => {
                  let r = !0;
                  Object.keys(n.props).forEach((t => {
                    i[t] !== n.props[t] && e[t] !== n.props[t] && (r = !1)
                  })), r && l.push(t[k(n.props)])
                })), l
              })(e, ((e, t) => {
                let n = [];
                t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants);
                const r = {};
                return n.forEach((e => {
                  const t = k(e.props);
                  r[t] = e.style
                })), r
              })(s, n), n, s)
            })), h || a.push(i);
            const c = a.length - n.length;
            if (Array.isArray(e) && c > 0) {
              const t = new Array(c).fill("");
              l = [...e, ...t], l.raw = [...e.raw, ...t]
            } else "function" == typeof e && e.__emotion_real !== e && (l = n => {
              let {theme: a} = n, i = (0, r.Z)(n, D);
              return e((0, o.Z)({theme: Z(a) ? t : a}, i))
            });
            return g(l, ...a)
          };
          return g.withConfig && (b.withConfig = g.withConfig), b
        }
      }({defaultTheme: P.Z, rootShouldForwardProp: R}), _ = N
    }, 6122: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => i});
      var r = n(7925), o = n(6682);
      var a = n(8794);
      
      function i({props: e, name: t}) {
        return function ({props: e, name: t, defaultTheme: n}) {
          const a = function (e) {
            const {theme: t, name: n, props: o} = e;
            return t && t.components && t.components[n] && t.components[n].defaultProps ? (0, r.Z)(t.components[n].defaultProps, o) : o
          }({theme: (0, o.Z)(n), name: t, props: e});
          return a
        }({props: e, name: t, defaultTheme: a.Z})
      }
    }, 8216: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => r});
      const r = n(8320).Z
    }, 5949: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => y});
      var r = n(7462), o = n(7294), a = n(3366), i = n(6010), l = n(4780), s = n(8216), c = n(6122), u = n(2077),
        d = n(1588), f = n(4867);
      
      function p(e) {
        return (0, f.Z)("MuiSvgIcon", e)
      }
      
      (0, d.Z)("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
      var m = n(5893);
      const h = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"],
        v = (0, u.ZP)("svg", {
          name: "MuiSvgIcon", slot: "Root", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.root, "inherit" !== n.color && t[`color${(0, s.Z)(n.color)}`], t[`fontSize${(0, s.Z)(n.fontSize)}`]]
          }
        })((({theme: e, ownerState: t}) => {
          var n, r, o, a, i, l, s, c, u, d, f, p, m, h, v, g, b;
          return {
            userSelect: "none",
            width: "1em",
            height: "1em",
            display: "inline-block",
            fill: "currentColor",
            flexShrink: 0,
            transition: null == (n = e.transitions) || null == (r = n.create) ? void 0 : r.call(n, "fill", {duration: null == (o = e.transitions) || null == (a = o.duration) ? void 0 : a.shorter}),
            fontSize: {
              inherit: "inherit",
              small: (null == (i = e.typography) || null == (l = i.pxToRem) ? void 0 : l.call(i, 20)) || "1.25rem",
              medium: (null == (s = e.typography) || null == (c = s.pxToRem) ? void 0 : c.call(s, 24)) || "1.5rem",
              large: (null == (u = e.typography) || null == (d = u.pxToRem) ? void 0 : d.call(u, 35)) || "2.1875rem"
            }[t.fontSize],
            color: null != (f = null == (p = (e.vars || e).palette) || null == (m = p[t.color]) ? void 0 : m.main) ? f : {
              action: null == (h = (e.vars || e).palette) || null == (v = h.action) ? void 0 : v.active,
              disabled: null == (g = (e.vars || e).palette) || null == (b = g.action) ? void 0 : b.disabled,
              inherit: void 0
            }[t.color]
          }
        })), g = o.forwardRef((function (e, t) {
          const n = (0, c.Z)({props: e, name: "MuiSvgIcon"}), {
            children: o,
            className: u,
            color: d = "inherit",
            component: f = "svg",
            fontSize: g = "medium",
            htmlColor: b,
            inheritViewBox: y = !1,
            titleAccess: x,
            viewBox: C = "0 0 24 24"
          } = n, E = (0, a.Z)(n, h), w = (0, r.Z)({}, n, {
            color: d,
            component: f,
            fontSize: g,
            instanceFontSize: e.fontSize,
            inheritViewBox: y,
            viewBox: C
          }), k = {};
          y || (k.viewBox = C);
          const F = (e => {
            const {color: t, fontSize: n, classes: r} = e,
              o = {root: ["root", "inherit" !== t && `color${(0, s.Z)(t)}`, `fontSize${(0, s.Z)(n)}`]};
            return (0, l.Z)(o, p, r)
          })(w);
          return (0, m.jsxs)(v, (0, r.Z)({
            as: f,
            className: (0, i.Z)(F.root, u),
            focusable: "false",
            color: b,
            "aria-hidden": !x || void 0,
            role: x ? "img" : void 0,
            ref: t
          }, k, E, {ownerState: w, children: [o, x ? (0, m.jsx)("title", {children: x}) : null]}))
        }));
      g.muiName = "SvgIcon";
      const b = g;
      
      function y(e, t) {
        function n(n, o) {
          return (0, m.jsx)(b, (0, r.Z)({"data-testid": `${t}Icon`, ref: o}, n, {children: e}))
        }
        
        return n.muiName = b.muiName, o.memo(o.forwardRef(n))
      }
    }, 7144: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => r});
      const r = n(7596).Z
    }, 1699: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        capitalize: () => o.Z,
        createChainedFunction: () => a,
        createSvgIcon: () => i.Z,
        debounce: () => l.Z,
        deprecatedPropType: () => s,
        isMuiElement: () => c.Z,
        ownerDocument: () => u.Z,
        ownerWindow: () => d.Z,
        requirePropFactory: () => f,
        setRef: () => p,
        unstable_ClassNameGenerator: () => C,
        unstable_useEnhancedEffect: () => m.Z,
        unstable_useId: () => h.Z,
        unsupportedProp: () => v,
        useControlled: () => g.Z,
        useEventCallback: () => b.Z,
        useForkRef: () => y.Z,
        useIsFocusVisible: () => x.Z
      });
      var r = n(7078), o = n(8216);
      const a = n(9064).Z;
      var i = n(5949), l = n(7144);
      const s = function (e, t) {
        return () => null
      };
      var c = n(8502), u = n(8038), d = n(5340);
      n(7462);
      const f = function (e, t) {
        return () => null
      }, p = n(7960).Z;
      var m = n(8974), h = n(7909);
      const v = function (e, t, n, r, o) {
        return null
      };
      var g = n(2893), b = n(2068), y = n(1705), x = n(3511);
      const C = {
        configure: e => {
          r.Z.configure(e)
        }
      }
    }, 8502: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => o});
      var r = n(7294);
      const o = function (e, t) {
        return r.isValidElement(e) && -1 !== t.indexOf(e.type.muiName)
      }
    }, 8038: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => r});
      const r = n(7094).Z
    }, 5340: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => r});
      const r = n(8290).Z
    }, 2893: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => o});
      var r = n(7294);
      const o = function ({controlled: e, default: t, name: n, state: o = "value"}) {
        const {current: a} = r.useRef(void 0 !== e), [i, l] = r.useState(t);
        return [a ? e : i, r.useCallback((e => {
          a || l(e)
        }), [])]
      }
    }, 8974: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => r});
      const r = n(6600).Z
    }, 2068: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => r});
      const r = n(3633).Z
    }, 1705: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => r});
      const r = n(67).Z
    }, 7909: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => r});
      const r = n(7579).Z
    }, 3511: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => d});
      var r = n(7294);
      let o, a = !0, i = !1;
      const l = {
        text: !0,
        search: !0,
        url: !0,
        tel: !0,
        email: !0,
        password: !0,
        number: !0,
        date: !0,
        month: !0,
        week: !0,
        time: !0,
        datetime: !0,
        "datetime-local": !0
      };
      
      function s(e) {
        e.metaKey || e.altKey || e.ctrlKey || (a = !0)
      }
      
      function c() {
        a = !1
      }
      
      function u() {
        "hidden" === this.visibilityState && i && (a = !0)
      }
      
      const d = function () {
        const e = r.useCallback((e => {
          var t;
          null != e && ((t = e.ownerDocument).addEventListener("keydown", s, !0), t.addEventListener("mousedown", c, !0), t.addEventListener("pointerdown", c, !0), t.addEventListener("touchstart", c, !0), t.addEventListener("visibilitychange", u, !0))
        }), []), t = r.useRef(!1);
        return {
          isFocusVisibleRef: t, onFocus: function (e) {
            return !!function (e) {
              const {target: t} = e;
              try {
                return t.matches(":focus-visible")
              } catch (e) {
              }
              return a || function (e) {
                const {type: t, tagName: n} = e;
                return !("INPUT" !== n || !l[t] || e.readOnly) || "TEXTAREA" === n && !e.readOnly || !!e.isContentEditable
              }(t)
            }(e) && (t.current = !0, !0)
          }, onBlur: function () {
            return !!t.current && (i = !0, window.clearTimeout(o), o = window.setTimeout((() => {
              i = !1
            }), 100), t.current = !1, !0)
          }, ref: e
        }
      }
    }, 5408: (e, t, n) => {
      "use strict";
      n.d(t, {L7: () => l, VO: () => r, W8: () => i, k9: () => a});
      const r = {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536},
        o = {keys: ["xs", "sm", "md", "lg", "xl"], up: e => `@media (min-width:${r[e]}px)`};
      
      function a(e, t, n) {
        const a = e.theme || {};
        if (Array.isArray(t)) {
          const e = a.breakpoints || o;
          return t.reduce(((r, o, a) => (r[e.up(e.keys[a])] = n(t[a]), r)), {})
        }
        if ("object" == typeof t) {
          const e = a.breakpoints || o;
          return Object.keys(t).reduce(((o, a) => {
            if (-1 !== Object.keys(e.values || r).indexOf(a)) o[e.up(a)] = n(t[a], a); else {
              const e = a;
              o[e] = t[e]
            }
            return o
          }), {})
        }
        return n(t)
      }
      
      function i(e = {}) {
        var t;
        return (null == (t = e.keys) ? void 0 : t.reduce(((t, n) => (t[e.up(n)] = {}, t)), {})) || {}
      }
      
      function l(e, t) {
        return e.reduce(((e, t) => {
          const n = e[t];
          return (!n || 0 === Object.keys(n).length) && delete e[t], e
        }), t)
      }
    }, 1796: (e, t, n) => {
      "use strict";
      n.d(t, {$n: () => d, Fq: () => c, _4: () => f, _j: () => u, mi: () => s});
      var r = n(1387);
      
      function o(e, t = 0, n = 1) {
        return Math.min(Math.max(t, e), n)
      }
      
      function a(e) {
        if (e.type) return e;
        if ("#" === e.charAt(0)) return a(function (e) {
          e = e.slice(1);
          const t = new RegExp(`.{1,${e.length>=6?2:1}}`, "g");
          let n = e.match(t);
          return n && 1 === n[0].length && (n = n.map((e => e + e))), n ? `rgb${4 === n.length ? "a" : ""}(${n.map(((e, t) => t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3)).join(", ")})` : ""
        }(e));
        const t = e.indexOf("("), n = e.substring(0, t);
        if (-1 === ["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n)) throw new Error((0, r.Z)(9, e));
        let o, i = e.substring(t + 1, e.length - 1);
        if ("color" === n) {
          if (i = i.split(" "), o = i.shift(), 4 === i.length && "/" === i[3].charAt(0) && (i[3] = i[3].slice(1)), -1 === ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o)) throw new Error((0, r.Z)(10, o))
        } else i = i.split(",");
        return i = i.map((e => parseFloat(e))), {type: n, values: i, colorSpace: o}
      }
      
      function i(e) {
        const {type: t, colorSpace: n} = e;
        let {values: r} = e;
        return -1 !== t.indexOf("rgb") ? r = r.map(((e, t) => t < 3 ? parseInt(e, 10) : e)) : -1 !== t.indexOf("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), r = -1 !== t.indexOf("color") ? `${n} ${r.join(" ")}` : `${r.join(", ")}`, `${t}(${r})`
      }
      
      function l(e) {
        let t = "hsl" === (e = a(e)).type || "hsla" === e.type ? a(function (e) {
          e = a(e);
          const {values: t} = e, n = t[0], r = t[1] / 100, o = t[2] / 100, l = r * Math.min(o, 1 - o),
            s = (e, t = (e + n / 30) % 12) => o - l * Math.max(Math.min(t - 3, 9 - t, 1), -1);
          let c = "rgb";
          const u = [Math.round(255 * s(0)), Math.round(255 * s(8)), Math.round(255 * s(4))];
          return "hsla" === e.type && (c += "a", u.push(t[3])), i({type: c, values: u})
        }(e)).values : e.values;
        return t = t.map((t => ("color" !== e.type && (t /= 255), t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4))), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3))
      }
      
      function s(e, t) {
        const n = l(e), r = l(t);
        return (Math.max(n, r) + .05) / (Math.min(n, r) + .05)
      }
      
      function c(e, t) {
        return e = a(e), t = o(t), "rgb" !== e.type && "hsl" !== e.type || (e.type += "a"), "color" === e.type ? e.values[3] = `/${t}` : e.values[3] = t, i(e)
      }
      
      function u(e, t) {
        if (e = a(e), t = o(t), -1 !== e.type.indexOf("hsl")) e.values[2] *= 1 - t; else if (-1 !== e.type.indexOf("rgb") || -1 !== e.type.indexOf("color")) for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
        return i(e)
      }
      
      function d(e, t) {
        if (e = a(e), t = o(t), -1 !== e.type.indexOf("hsl")) e.values[2] += (100 - e.values[2]) * t; else if (-1 !== e.type.indexOf("rgb")) for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t; else if (-1 !== e.type.indexOf("color")) for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
        return i(e)
      }
      
      function f(e, t = .15) {
        return l(e) > .5 ? u(e, t) : d(e, t)
      }
    }, 6268: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => f});
      var r = n(7462), o = n(3366), a = n(9766);
      const i = ["values", "unit", "step"];
      const l = {borderRadius: 4};
      var s = n(2605), c = n(6523), u = n(8010);
      const d = ["breakpoints", "palette", "spacing", "shape"], f = function (e = {}, ...t) {
        const {breakpoints: n = {}, palette: f = {}, spacing: p, shape: m = {}} = e, h = (0, o.Z)(e, d),
          v = function (e) {
            const {values: t = {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536}, unit: n = "px", step: a = 5} = e,
              l = (0, o.Z)(e, i), s = (e => {
                const t = Object.keys(e).map((t => ({key: t, val: e[t]}))) || [];
                return t.sort(((e, t) => e.val - t.val)), t.reduce(((e, t) => (0, r.Z)({}, e, {[t.key]: t.val})), {})
              })(t), c = Object.keys(s);
            
            function u(e) {
              return `@media (min-width:${"number" == typeof t[e] ? t[e] : e}${n})`
            }
            
            function d(e) {
              return `@media (max-width:${("number" == typeof t[e] ? t[e] : e) - a / 100}${n})`
            }
            
            function f(e, r) {
              const o = c.indexOf(r);
              return `@media (min-width:${"number" == typeof t[e] ? t[e] : e}${n}) and (max-width:${(-1 !== o && "number" == typeof t[c[o]] ? t[c[o]] : r) - a / 100}${n})`
            }
            
            return (0, r.Z)({
              keys: c, values: s, up: u, down: d, between: f, only: function (e) {
                return c.indexOf(e) + 1 < c.length ? f(e, c[c.indexOf(e) + 1]) : u(e)
              }, not: function (e) {
                const t = c.indexOf(e);
                return 0 === t ? u(c[1]) : t === c.length - 1 ? d(c[t]) : f(e, c[c.indexOf(e) + 1]).replace("@media", "@media not all and")
              }, unit: n
            }, l)
          }(n), g = function (e = 8) {
            if (e.mui) return e;
            const t = (0, s.hB)({spacing: e}), n = (...e) => (0 === e.length ? [1] : e).map((e => {
              const n = t(e);
              return "number" == typeof n ? `${n}px` : n
            })).join(" ");
            return n.mui = !0, n
          }(p);
        let b = (0, a.Z)({
          breakpoints: v,
          direction: "ltr",
          components: {},
          palette: (0, r.Z)({mode: "light"}, f),
          spacing: g,
          shape: (0, r.Z)({}, l, m)
        }, h);
        return b = t.reduce(((e, t) => (0, a.Z)(e, t)), b), b.unstable_sxConfig = (0, r.Z)({}, u.Z, null == h ? void 0 : h.unstable_sxConfig), b.unstable_sx = function (e) {
          return (0, c.Z)({sx: e, theme: this})
        }, b
      }
    }, 7730: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => o});
      var r = n(9766);
      const o = function (e, t) {
        return t ? (0, r.Z)(e, t, {clone: !1}) : e
      }
    }, 2605: (e, t, n) => {
      "use strict";
      n.d(t, {hB: () => m, eI: () => p, NA: () => h, e6: () => g, o3: () => b});
      var r = n(5408), o = n(4844), a = n(7730);
      const i = {m: "margin", p: "padding"},
        l = {t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"]},
        s = {marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py"}, c = function (e) {
          const t = {};
          return e => (void 0 === t[e] && (t[e] = (e => {
            if (e.length > 2) {
              if (!s[e]) return [e];
              e = s[e]
            }
            const [t, n] = e.split(""), r = i[t], o = l[n] || "";
            return Array.isArray(o) ? o.map((e => r + e)) : [r + o]
          })(e)), t[e])
        }(),
        u = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"],
        d = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"],
        f = [...u, ...d];
      
      function p(e, t, n, r) {
        var a;
        const i = null != (a = (0, o.DW)(e, t, !1)) ? a : n;
        return "number" == typeof i ? e => "string" == typeof e ? e : i * e : Array.isArray(i) ? e => "string" == typeof e ? e : i[e] : "function" == typeof i ? i : () => {
        }
      }
      
      function m(e) {
        return p(e, "spacing", 8)
      }
      
      function h(e, t) {
        if ("string" == typeof t || null == t) return t;
        const n = e(Math.abs(t));
        return t >= 0 ? n : "number" == typeof n ? -n : `-${n}`
      }
      
      function v(e, t) {
        const n = m(e.theme);
        return Object.keys(e).map((o => function (e, t, n, o) {
          if (-1 === t.indexOf(n)) return null;
          const a = function (e, t) {
            return n => e.reduce(((e, r) => (e[r] = h(t, n), e)), {})
          }(c(n), o), i = e[n];
          return (0, r.k9)(e, i, a)
        }(e, t, o, n))).reduce(a.Z, {})
      }
      
      function g(e) {
        return v(e, u)
      }
      
      function b(e) {
        return v(e, d)
      }
      
      function y(e) {
        return v(e, f)
      }
      
      g.propTypes = {}, g.filterProps = u, b.propTypes = {}, b.filterProps = d, y.propTypes = {}, y.filterProps = f
    }, 4844: (e, t, n) => {
      "use strict";
      n.d(t, {DW: () => a, Jq: () => i, ZP: () => l});
      var r = n(8320), o = n(5408);
      
      function a(e, t, n = !0) {
        if (!t || "string" != typeof t) return null;
        if (e && e.vars && n) {
          const n = `vars.${t}`.split(".").reduce(((e, t) => e && e[t] ? e[t] : null), e);
          if (null != n) return n
        }
        return t.split(".").reduce(((e, t) => e && null != e[t] ? e[t] : null), e)
      }
      
      function i(e, t, n, r = n) {
        let o;
        return o = "function" == typeof e ? e(n) : Array.isArray(e) ? e[n] || r : a(e, n) || r, t && (o = t(o, r, e)), o
      }
      
      const l = function (e) {
        const {prop: t, cssProperty: n = e.prop, themeKey: l, transform: s} = e, c = e => {
          if (null == e[t]) return null;
          const c = e[t], u = a(e.theme, l) || {};
          return (0, o.k9)(e, c, (e => {
            let o = i(u, s, e);
            return e === o && "string" == typeof e && (o = i(u, s, `${t}${"default" === e ? "" : (0, r.Z)(e)}`, e)), !1 === n ? o : {[n]: o}
          }))
        };
        return c.propTypes = {}, c.filterProps = [t], c
      }
    }, 8010: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => j});
      var r = n(2605), o = n(4844), a = n(7730);
      const i = function (...e) {
        const t = e.reduce(((e, t) => (t.filterProps.forEach((n => {
          e[n] = t
        })), e)), {}), n = e => Object.keys(e).reduce(((n, r) => t[r] ? (0, a.Z)(n, t[r](e)) : n), {});
        return n.propTypes = {}, n.filterProps = e.reduce(((e, t) => e.concat(t.filterProps)), []), n
      };
      var l = n(5408);
      
      function s(e) {
        return "number" != typeof e ? e : `${e}px solid`
      }
      
      const c = (0, o.ZP)({prop: "border", themeKey: "borders", transform: s}),
        u = (0, o.ZP)({prop: "borderTop", themeKey: "borders", transform: s}),
        d = (0, o.ZP)({prop: "borderRight", themeKey: "borders", transform: s}),
        f = (0, o.ZP)({prop: "borderBottom", themeKey: "borders", transform: s}),
        p = (0, o.ZP)({prop: "borderLeft", themeKey: "borders", transform: s}),
        m = (0, o.ZP)({prop: "borderColor", themeKey: "palette"}),
        h = (0, o.ZP)({prop: "borderTopColor", themeKey: "palette"}),
        v = (0, o.ZP)({prop: "borderRightColor", themeKey: "palette"}),
        g = (0, o.ZP)({prop: "borderBottomColor", themeKey: "palette"}),
        b = (0, o.ZP)({prop: "borderLeftColor", themeKey: "palette"}), y = e => {
          if (void 0 !== e.borderRadius && null !== e.borderRadius) {
            const t = (0, r.eI)(e.theme, "shape.borderRadius", 4, "borderRadius"),
              n = e => ({borderRadius: (0, r.NA)(t, e)});
            return (0, l.k9)(e, e.borderRadius, n)
          }
          return null
        };
      y.propTypes = {}, y.filterProps = ["borderRadius"], i(c, u, d, f, p, m, h, v, g, b, y);
      const x = e => {
        if (void 0 !== e.gap && null !== e.gap) {
          const t = (0, r.eI)(e.theme, "spacing", 8, "gap"), n = e => ({gap: (0, r.NA)(t, e)});
          return (0, l.k9)(e, e.gap, n)
        }
        return null
      };
      x.propTypes = {}, x.filterProps = ["gap"];
      const C = e => {
        if (void 0 !== e.columnGap && null !== e.columnGap) {
          const t = (0, r.eI)(e.theme, "spacing", 8, "columnGap"), n = e => ({columnGap: (0, r.NA)(t, e)});
          return (0, l.k9)(e, e.columnGap, n)
        }
        return null
      };
      C.propTypes = {}, C.filterProps = ["columnGap"];
      const E = e => {
        if (void 0 !== e.rowGap && null !== e.rowGap) {
          const t = (0, r.eI)(e.theme, "spacing", 8, "rowGap"), n = e => ({rowGap: (0, r.NA)(t, e)});
          return (0, l.k9)(e, e.rowGap, n)
        }
        return null
      };
      
      function w(e, t) {
        return "grey" === t ? t : e
      }
      
      function k(e) {
        return e <= 1 && 0 !== e ? 100 * e + "%" : e
      }
      
      E.propTypes = {}, E.filterProps = ["rowGap"], i(x, C, E, (0, o.ZP)({prop: "gridColumn"}), (0, o.ZP)({prop: "gridRow"}), (0, o.ZP)({prop: "gridAutoFlow"}), (0, o.ZP)({prop: "gridAutoColumns"}), (0, o.ZP)({prop: "gridAutoRows"}), (0, o.ZP)({prop: "gridTemplateColumns"}), (0, o.ZP)({prop: "gridTemplateRows"}), (0, o.ZP)({prop: "gridTemplateAreas"}), (0, o.ZP)({prop: "gridArea"})), i((0, o.ZP)({
        prop: "color",
        themeKey: "palette",
        transform: w
      }), (0, o.ZP)({
        prop: "bgcolor",
        cssProperty: "backgroundColor",
        themeKey: "palette",
        transform: w
      }), (0, o.ZP)({prop: "backgroundColor", themeKey: "palette", transform: w}));
      const F = (0, o.ZP)({prop: "width", transform: k}), S = e => {
        if (void 0 !== e.maxWidth && null !== e.maxWidth) {
          const t = t => {
            var n, r, o;
            return {maxWidth: (null == (n = e.theme) || null == (r = n.breakpoints) || null == (o = r.values) ? void 0 : o[t]) || l.VO[t] || k(t)}
          };
          return (0, l.k9)(e, e.maxWidth, t)
        }
        return null
      };
      S.filterProps = ["maxWidth"];
      const A = (0, o.ZP)({prop: "minWidth", transform: k}), D = (0, o.ZP)({prop: "height", transform: k}),
        Z = (0, o.ZP)({prop: "maxHeight", transform: k}), B = (0, o.ZP)({prop: "minHeight", transform: k}),
        j = ((0, o.ZP)({prop: "size", cssProperty: "width", transform: k}), (0, o.ZP)({
          prop: "size",
          cssProperty: "height",
          transform: k
        }), i(F, S, A, D, Z, B, (0, o.ZP)({prop: "boxSizing"})), {
          border: {themeKey: "borders", transform: s},
          borderTop: {themeKey: "borders", transform: s},
          borderRight: {themeKey: "borders", transform: s},
          borderBottom: {themeKey: "borders", transform: s},
          borderLeft: {themeKey: "borders", transform: s},
          borderColor: {themeKey: "palette"},
          borderTopColor: {themeKey: "palette"},
          borderRightColor: {themeKey: "palette"},
          borderBottomColor: {themeKey: "palette"},
          borderLeftColor: {themeKey: "palette"},
          borderRadius: {themeKey: "shape.borderRadius", style: y},
          color: {themeKey: "palette", transform: w},
          bgcolor: {themeKey: "palette", cssProperty: "backgroundColor", transform: w},
          backgroundColor: {themeKey: "palette", transform: w},
          p: {style: r.o3},
          pt: {style: r.o3},
          pr: {style: r.o3},
          pb: {style: r.o3},
          pl: {style: r.o3},
          px: {style: r.o3},
          py: {style: r.o3},
          padding: {style: r.o3},
          paddingTop: {style: r.o3},
          paddingRight: {style: r.o3},
          paddingBottom: {style: r.o3},
          paddingLeft: {style: r.o3},
          paddingX: {style: r.o3},
          paddingY: {style: r.o3},
          paddingInline: {style: r.o3},
          paddingInlineStart: {style: r.o3},
          paddingInlineEnd: {style: r.o3},
          paddingBlock: {style: r.o3},
          paddingBlockStart: {style: r.o3},
          paddingBlockEnd: {style: r.o3},
          m: {style: r.e6},
          mt: {style: r.e6},
          mr: {style: r.e6},
          mb: {style: r.e6},
          ml: {style: r.e6},
          mx: {style: r.e6},
          my: {style: r.e6},
          margin: {style: r.e6},
          marginTop: {style: r.e6},
          marginRight: {style: r.e6},
          marginBottom: {style: r.e6},
          marginLeft: {style: r.e6},
          marginX: {style: r.e6},
          marginY: {style: r.e6},
          marginInline: {style: r.e6},
          marginInlineStart: {style: r.e6},
          marginInlineEnd: {style: r.e6},
          marginBlock: {style: r.e6},
          marginBlockStart: {style: r.e6},
          marginBlockEnd: {style: r.e6},
          displayPrint: {cssProperty: !1, transform: e => ({"@media print": {display: e}})},
          display: {},
          overflow: {},
          textOverflow: {},
          visibility: {},
          whiteSpace: {},
          flexBasis: {},
          flexDirection: {},
          flexWrap: {},
          justifyContent: {},
          alignItems: {},
          alignContent: {},
          order: {},
          flex: {},
          flexGrow: {},
          flexShrink: {},
          alignSelf: {},
          justifyItems: {},
          justifySelf: {},
          gap: {style: x},
          rowGap: {style: E},
          columnGap: {style: C},
          gridColumn: {},
          gridRow: {},
          gridAutoFlow: {},
          gridAutoColumns: {},
          gridAutoRows: {},
          gridTemplateColumns: {},
          gridTemplateRows: {},
          gridTemplateAreas: {},
          gridArea: {},
          position: {},
          zIndex: {themeKey: "zIndex"},
          top: {},
          right: {},
          bottom: {},
          left: {},
          boxShadow: {themeKey: "shadows"},
          width: {transform: k},
          maxWidth: {style: S},
          minWidth: {transform: k},
          height: {transform: k},
          maxHeight: {transform: k},
          minHeight: {transform: k},
          boxSizing: {},
          fontFamily: {themeKey: "typography"},
          fontSize: {themeKey: "typography"},
          fontStyle: {themeKey: "typography"},
          fontWeight: {themeKey: "typography"},
          letterSpacing: {},
          textTransform: {},
          lineHeight: {},
          textAlign: {},
          typography: {cssProperty: !1, themeKey: "typography"}
        })
    }, 6523: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => c});
      var r = n(8320), o = n(7730), a = n(4844), i = n(5408), l = n(8010);
      const s = function () {
        function e(e, t, n, o) {
          const l = {[e]: t, theme: n}, s = o[e];
          if (!s) return {[e]: t};
          const {cssProperty: c = e, themeKey: u, transform: d, style: f} = s;
          if (null == t) return null;
          const p = (0, a.DW)(n, u) || {};
          return f ? f(l) : (0, i.k9)(l, t, (t => {
            let n = (0, a.Jq)(p, d, t);
            return t === n && "string" == typeof t && (n = (0, a.Jq)(p, d, `${e}${"default" === t ? "" : (0, r.Z)(t)}`, t)), !1 === c ? n : {[c]: n}
          }))
        }
        
        return function t(n) {
          var r;
          const {sx: a, theme: s = {}} = n || {};
          if (!a) return null;
          const c = null != (r = s.unstable_sxConfig) ? r : l.Z;
          
          function u(n) {
            let r = n;
            if ("function" == typeof n) r = n(s); else if ("object" != typeof n) return n;
            if (!r) return null;
            const a = (0, i.W8)(s.breakpoints), l = Object.keys(a);
            let u = a;
            return Object.keys(r).forEach((n => {
              const a = "function" == typeof (l = r[n]) ? l(s) : l;
              var l;
              if (null != a) if ("object" == typeof a) if (c[n]) u = (0, o.Z)(u, e(n, a, s, c)); else {
                const e = (0, i.k9)({theme: s}, a, (e => ({[n]: e})));
                !function (...e) {
                  const t = e.reduce(((e, t) => e.concat(Object.keys(t))), []), n = new Set(t);
                  return e.every((e => n.size === Object.keys(e).length))
                }(e, a) ? u = (0, o.Z)(u, e) : u[n] = t({sx: a, theme: s})
              } else u = (0, o.Z)(u, e(n, a, s, c))
            })), (0, i.L7)(l, u)
          }
          
          return Array.isArray(a) ? a.map(u) : u(a)
        }
      }();
      s.filterProps = ["sx"];
      const c = s
    }, 6682: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => i});
      var r = n(6268), o = n(7103);
      const a = (0, r.Z)(), i = function (e = a) {
        return (0, o.Z)(e)
      }
    }, 7103: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => a});
      var r = n(7294);
      const o = r.createContext(null), a = function (e = null) {
        const t = r.useContext(o);
        return t && (n = t, 0 !== Object.keys(n).length) ? t : e;
        var n
      }
    }, 7078: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => o});
      const r = e => e, o = (() => {
        let e = r;
        return {
          configure(t) {
            e = t
          }, generate: t => e(t), reset() {
            e = r
          }
        }
      })()
    }, 8320: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => o});
      var r = n(1387);
      
      function o(e) {
        if ("string" != typeof e) throw new Error((0, r.Z)(7));
        return e.charAt(0).toUpperCase() + e.slice(1)
      }
    }, 4780: (e, t, n) => {
      "use strict";
      
      function r(e, t, n) {
        const r = {};
        return Object.keys(e).forEach((o => {
          r[o] = e[o].reduce(((e, r) => (r && (e.push(t(r)), n && n[r] && e.push(n[r])), e)), []).join(" ")
        })), r
      }
      
      n.d(t, {Z: () => r})
    }, 9064: (e, t, n) => {
      "use strict";
      
      function r(...e) {
        return e.reduce(((e, t) => null == t ? e : function (...n) {
          e.apply(this, n), t.apply(this, n)
        }), (() => {
        }))
      }
      
      n.d(t, {Z: () => r})
    }, 7596: (e, t, n) => {
      "use strict";
      
      function r(e, t = 166) {
        let n;
        
        function r(...r) {
          clearTimeout(n), n = setTimeout((() => {
            e.apply(this, r)
          }), t)
        }
        
        return r.clear = () => {
          clearTimeout(n)
        }, r
      }
      
      n.d(t, {Z: () => r})
    }, 9766: (e, t, n) => {
      "use strict";
      n.d(t, {P: () => o, Z: () => i});
      var r = n(7462);
      
      function o(e) {
        return null !== e && "object" == typeof e && e.constructor === Object
      }
      
      function a(e) {
        if (!o(e)) return e;
        const t = {};
        return Object.keys(e).forEach((n => {
          t[n] = a(e[n])
        })), t
      }
      
      function i(e, t, n = {clone: !0}) {
        const l = n.clone ? (0, r.Z)({}, e) : e;
        return o(e) && o(t) && Object.keys(t).forEach((r => {
          "__proto__" !== r && (o(t[r]) && r in e && o(e[r]) ? l[r] = i(e[r], t[r], n) : n.clone ? l[r] = o(t[r]) ? a(t[r]) : t[r] : l[r] = t[r])
        })), l
      }
    }, 1387: (e, t, n) => {
      "use strict";
      
      function r(e) {
        let t = "https://mui.com/production-error/?code=" + e;
        for (let e = 1; e < arguments.length; e += 1) t += "&args[]=" + encodeURIComponent(arguments[e]);
        return "Minified MUI error #" + e + "; visit " + t + " for the full message."
      }
      
      n.d(t, {Z: () => r})
    }, 4867: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => a});
      var r = n(7078);
      const o = {
        active: "active",
        checked: "checked",
        completed: "completed",
        disabled: "disabled",
        error: "error",
        expanded: "expanded",
        focused: "focused",
        focusVisible: "focusVisible",
        required: "required",
        selected: "selected"
      };
      
      function a(e, t, n = "Mui") {
        const a = o[t];
        return a ? `${n}-${a}` : `${r.Z.generate(e)}-${t}`
      }
    }, 1588: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => o});
      var r = n(4867);
      
      function o(e, t, n = "Mui") {
        const o = {};
        return t.forEach((t => {
          o[t] = (0, r.Z)(e, t, n)
        })), o
      }
    }, 7094: (e, t, n) => {
      "use strict";
      
      function r(e) {
        return e && e.ownerDocument || document
      }
      
      n.d(t, {Z: () => r})
    }, 8290: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => o});
      var r = n(7094);
      
      function o(e) {
        return (0, r.Z)(e).defaultView || window
      }
    }, 7925: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => o});
      var r = n(7462);
      
      function o(e, t) {
        const n = (0, r.Z)({}, t);
        return Object.keys(e).forEach((a => {
          if (a.toString().match(/^(components|slots)$/)) n[a] = (0, r.Z)({}, e[a], n[a]); else if (a.toString().match(/^(componentsProps|slotProps)$/)) {
            const i = e[a] || {}, l = t[a];
            n[a] = {}, l && Object.keys(l) ? i && Object.keys(i) ? (n[a] = (0, r.Z)({}, l), Object.keys(i).forEach((e => {
              n[a][e] = o(i[e], l[e])
            }))) : n[a] = l : n[a] = i
          } else void 0 === n[a] && (n[a] = e[a])
        })), n
      }
    }, 7960: (e, t, n) => {
      "use strict";
      
      function r(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t)
      }
      
      n.d(t, {Z: () => r})
    }, 6600: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => o});
      var r = n(7294);
      const o = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect
    }, 3633: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => a});
      var r = n(7294), o = n(6600);
      
      function a(e) {
        const t = r.useRef(e);
        return (0, o.Z)((() => {
          t.current = e
        })), r.useCallback(((...e) => (0, t.current)(...e)), [])
      }
    }, 67: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => a});
      var r = n(7294), o = n(7960);
      
      function a(...e) {
        return r.useMemo((() => e.every((e => null == e)) ? null : t => {
          e.forEach((e => {
            (0, o.Z)(e, t)
          }))
        }), e)
      }
    }, 7579: (e, t, n) => {
      "use strict";
      var r;
      n.d(t, {Z: () => l});
      var o = n(7294);
      let a = 0;
      const i = (r || (r = n.t(o, 2))).useId;
      
      function l(e) {
        if (void 0 !== i) {
          const t = i();
          return null != e ? e : t
        }
        return function (e) {
          const [t, n] = o.useState(e), r = e || t;
          return o.useEffect((() => {
            null == t && (a += 1, n(`mui-${a}`))
          }), [t]), r
        }(e)
      }
    }, 454: e => {
      "use strict";
      const t = (e, t, n) => {
        const r = t < 0 ? e.length + t : t;
        if (r >= 0 && r < e.length) {
          const r = n < 0 ? e.length + n : n, [o] = e.splice(t, 1);
          e.splice(r, 0, o)
        }
      };
      e.exports = (e, n, r) => (e = [...e], t(e, n, r), e), e.exports.mutate = t
    }, 6010: (e, t, n) => {
      "use strict";
      
      function r(e) {
        var t, n, o = "";
        if ("string" == typeof e || "number" == typeof e) o += e; else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = r(e[t])) && (o && (o += " "), o += n); else for (t in e) e[t] && (o && (o += " "), o += t);
        return o
      }
      
      n.d(t, {Z: () => o});
      const o = function () {
        for (var e, t, n = 0, o = ""; n < arguments.length;) (e = arguments[n++]) && (t = r(e)) && (o && (o += " "), o += t);
        return o
      }
    }, 5729: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => l});
      var r = n(8081), o = n.n(r), a = n(3645), i = n.n(a)()(o());
      i.push([e.id, ".collect-body {\n  padding: 20px;\n  box-sizing: border-box;\n  user-select: none;\n}\n.collect-body .collect-btn-add {\n  position: fixed;\n  right: 10px;\n  bottom: 10px;\n}\n.collect-body .collect-empty {\n  width: 100%;\n  color: #717171;\n  font-size: 13px;\n  text-align: center;\n}\n.collect-body .collect-grid {\n  user-select: none;\n  display: flex;\n  flex-wrap: wrap;\n}\n.collect-form-content {\n  display: flex;\n  align-items: center;\n}\n.collect-item {\n  cursor: pointer;\n  width: 25%;\n}\n.collect-item::before {\n  content: '';\n  padding-top: 50%;\n  float: left;\n}\n.collect-item > div {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n}\n.collect-item .collect-item-info {\n  flex: 1;\n  padding: 8px 8px 0 8px;\n  box-sizing: border-box;\n}\n.collect-item .collect-item-info > div {\n  font-size: 10px;\n  padding-bottom: 2px;\n}\n.collect-item .collect-item-info > div:first-child {\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.collect-item .collect-item-handle {\n  padding: 0 2px 2px 0;\n  box-sizing: border-box;\n  text-align: right;\n  display: none;\n}\n.collect-item .collect-item-handle > button:last-child {\n  margin-left: 2px;\n}\n.collect-item:hover .collect-item-handle {\n  display: block;\n}\n", ""]);
      const l = i
    }, 6639: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => l});
      var r = n(8081), o = n.n(r), a = n(3645), i = n.n(a)()(o());
      i.push([e.id, ".color-content {\n  padding: 28px 16px;\n  box-sizing: border-box;\n  height: 100%;\n}\n.color-content .color-info {\n  display: flex;\n  position: relative;\n  justify-content: space-between;\n}\n.color-content .color-screen-picker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.color-content .color-value {\n  padding: 5px 16px;\n}\n.color-content .color-value .color-title {\n  padding-top: 0;\n  font-weight: bold;\n  color: #212121;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.color-content .color-value .color-hub {\n  display: flex;\n  align-items: center;\n  padding-bottom: 12px;\n}\n.color-content .color-value .color-hub > div {\n  flex: 1;\n  display: flex;\n}\n.color-content .color-value .color-hub > div > span {\n  display: block;\n  margin-right: 8px;\n  width: 24px;\n  height: 24px;\n  border-radius: 2px;\n  cursor: pointer;\n  position: relative;\n}\n.color-content .color-value .color-checked::after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  bottom: -4px;\n  left: 0;\n  background-color: #1976d2;\n  border-radius: 1px;\n}\n.color-content .color-value > div {\n  padding: 6px 0;\n  display: flex;\n  align-items: center;\n}\n.color-content .color-value > div > div:first-child {\n  user-select: none;\n  width: 76px;\n}\n.color-content .color-value input {\n  outline: none;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  height: 28px;\n  padding: 0 6px;\n  font-size: 14px;\n  width: 168px;\n}\n.color-content .color-value input:focus {\n  border-color: #2A6ACD;\n  box-shadow: 0 0 2px #2A6ACD;\n}\n.color-content .color-value .css-code-copy {\n  padding-left: 10px;\n}\n.color-extend {\n  display: flex;\n  padding-top: 40px;\n  width: 100%;\n  box-sizing: border-box;\n  justify-content: space-between;\n}\n.color-extend .color-extend-paper {\n  box-sizing: border-box;\n  position: relative;\n  user-select: none;\n}\n.color-extend .color-extend-paper > div {\n  display: flex;\n}\n.color-extend .color-extend-paper > div > div {\n  flex: 1;\n  cursor: pointer;\n}\n.color-extend .color-extend-paper > div > div::before {\n  content: '';\n  padding-top: 100%;\n  float: left;\n}\n.IroColorPicker .IroHandle--isActive {\n  border-radius: 50%;\n  box-shadow: 0 0 0 2px #fff;\n}\n.IroColorPicker .IroSlider::after {\n  content: '饱和度';\n  position: absolute;\n  top: -20px;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  color: #fff;\n  font-size: 12px;\n  padding: 2px 10px;\n  box-sizing: border-box;\n  border-radius: 12px;\n  display: none;\n}\n.IroColorPicker .IroSlider:last-child::after {\n  top: 29px;\n  content: '明亮度';\n}\n.IroColorPicker .IroSlider:hover::after {\n  display: block;\n}\n", ""]);
      const l = i
    }, 2989: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => l});
      var r = n(8081), o = n.n(r), a = n(3645), i = n.n(a)()(o());
      i.push([e.id, ".gradient-body {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.gradient-filter {\n  padding: 10px 0;\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid #e6e6e6;\n}\n.gradient-filter > div {\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #FFF;\n  border: 2px solid #fff;\n}\n.gradient-content {\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 0 20px;\n  box-sizing: border-box;\n}\n.gradient-item {\n  width: 22.5%;\n  margin: 10px 0;\n  display: flex;\n  flex-direction: column;\n}\n.gradient-item > div:first-child {\n  flex: 1;\n  cursor: pointer;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.gradient-item > div:first-child::before {\n  content: '';\n  padding-top: 100%;\n  float: left;\n}\n.gradient-item > div:last-child {\n  display: flex;\n  padding: 5px;\n  box-sizing: border-box;\n  justify-content: space-between;\n}\n.gradient-item > div:last-child > div {\n  width: 16px;\n  height: 10px;\n  cursor: pointer;\n}\n.gradient-dialog .MuiPaper-root {\n  max-width: 540px;\n}\n.gradient-dialog-viewer {\n  width: 540px;\n  height: 270px;\n}\n.gradient-dialog-content {\n  display: flex;\n  padding: 10px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.gradient-dialog-content > div:first-child {\n  padding: 2px;\n  box-sizing: border-box;\n}\n.gradient-dialog-content .gradient-dialog-form {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.gradient-dialog-content .gradient-dialog-form > div {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n}\n.gradient-dialog-content .gradient-dialog-form > div > div:first-child {\n  flex: 1;\n  padding: 0 10px;\n  box-sizing: border-box;\n}\n.gradient-dialog-content .gradient-dialog-form > div > div:last-child {\n  display: flex;\n  align-items: center;\n}\n.gradient-dialog-content .gradient-dialog-image-output {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.gradient-dialog-content .gradient-dialog-image-output > div {\n  width: 48%;\n}\n.direction-editor {\n  width: 172px;\n  height: 172px;\n  box-sizing: border-box;\n  position: relative;\n}\n.direction-editor > svg {\n  overflow: visible;\n}\n.direction-editor .direction-editor-box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.direction-editor .direction-editor-polyline {\n  fill: #666;\n  stroke: #666;\n  stroke-width: 3px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  vector-effect: non-scaling-stroke;\n}\n.direction-editor .direction-editor-circle {\n  stroke-width: 3px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  vector-effect: non-scaling-stroke;\n  stroke: #1976d2;\n  fill: none;\n}\n.direction-editor .direction-editor-knob {\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  background-color: #fff;\n  box-shadow: 0 2px 16px hsla(0, 0%, 0%, 0.08), 0 0.25px 2px hsla(0, 0%, 0%, 0.16), inset 0 2px 16px transparent, inset 0 0.25px 2px transparent;\n  position: absolute;\n  transform: translate(-50%, -50%);\n}\n", ""]);
      const l = i
    }, 4419: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => l});
      var r = n(8081), o = n.n(r), a = n(3645), i = n.n(a)()(o());
      i.push([e.id, ".image-body {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.image-empty {\n  color: #888;\n  text-align: center;\n  padding-top: 100px;\n}\n.image-content {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n.image-content > div:first-child {\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.image-content > div:first-child > img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.image-content .image-colors {\n  width: 216px;\n  padding: 0 8px;\n  box-sizing: border-box;\n  border-left: 1px solid #eee;\n}\n.image-content .image-colors .image-colors-label {\n  padding: 8px;\n}\n.image-content .image-main-color {\n  padding: 8px;\n  box-sizing: border-box;\n}\n.image-content .image-main-color > div {\n  width: 100%;\n  height: 56px;\n  border-radius: 2px;\n  cursor: pointer;\n}\n.image-content .image-palette {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.image-content .image-palette > div {\n  width: 56px;\n  height: 56px;\n  margin-top: 8px;\n  border-radius: 28px;\n  cursor: pointer;\n}\n.image-from-btns {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  padding: 10px 0;\n}\n.image-from-btns > button {\n  margin-left: 20px;\n}\n", ""]);
      const l = i
    }, 3529: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => l});
      var r = n(8081), o = n.n(r), a = n(3645), i = n.n(a)()(o());
      i.push([e.id, ".traditional-body {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n}\n.traditional-nav {\n  border-bottom: 1px solid #e6e6e6;\n}\n.traditional-header {\n  display: flex;\n  padding: 12px 20px;\n  box-sizing: border-box;\n  align-items: center;\n}\n.traditional-header > div:first-child {\n  width: 20%;\n}\n.traditional-header > div:last-child {\n  display: flex;\n  flex: 1;\n  justify-content: space-around;\n}\n.traditional-header > div:last-child > div {\n  height: 24px;\n  width: 24px;\n  border-radius: 12px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #FFF;\n}\n.traditional-content {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n.traditional-japan {\n  display: flex;\n  flex-wrap: wrap;\n  color: #fff;\n  padding: 0 20px 20px 20px;\n}\n.traditional-japan > div {\n  width: 20%;\n  cursor: pointer;\n}\n.traditional-japan > div > div {\n  padding: 0 5px 2px 5px;\n  font-size: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.traditional-japan > div > div:first-child {\n  padding-top: 5px;\n  font-size: 14px;\n}\n.traditional-japan > div::before {\n  content: '';\n  padding-top: 50%;\n  float: left;\n}\n.traditional-gugong {\n  padding: 0 20px;\n}\n.traditional-gugong .traditional-gugong-box {\n  display: flex;\n  margin-bottom: 20px;\n}\n.traditional-gugong .traditional-gugong-title {\n  width: 20%;\n  margin: 0;\n}\n.traditional-gugong .traditional-gugong-colors {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-wrap: wrap;\n  color: #fff;\n}\n.traditional-gugong .traditional-gugong-colors > div {\n  width: 25%;\n  cursor: pointer;\n}\n.traditional-gugong .traditional-gugong-colors > div::before {\n  content: '';\n  padding-top: 50%;\n  float: left;\n}\n.traditional-gugong .traditional-gugong-colors > div > div {\n  font-size: 10px;\n  padding: 0 8px 2px 8px;\n}\n.traditional-gugong .traditional-gugong-colors > div > div:first-child {\n  padding-top: 8px;\n  font-size: 14px;\n}\n", ""]);
      const l = i
    }, 6071: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => l});
      var r = n(8081), o = n.n(r), a = n(3645), i = n.n(a)()(o());
      i.push([e.id, ".ui-content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  user-select: none;\n}\n.ui-content > div:first-child {\n  border-bottom: 1px solid #e6e6e6;\n}\n.ui-content > div:last-child {\n  flex: 1;\n  min-height: 0;\n}\n.ui-content .ui-tab {\n  text-transform: none;\n}\n.ui-color-body {\n  width: 100%;\n  height: 100%;\n  padding-bottom: 20px;\n  padding: 0 20px 20px 20px;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n}\n.flat-ui-box {\n  display: flex;\n  margin: 12px 0;\n}\n.flat-ui-box .flat-ui-title {\n  color: #666;\n  width: 100px;\n  display: flex;\n  align-items: center;\n  white-space: pre-wrap;\n  line-height: 20px;\n}\n.flat-ui-box .flat-ui-colors,\n.flat-ui-box .fluent-ui-colors {\n  flex: 1;\n  display: flex;\n  font-size: 1.5vw;\n}\n.flat-ui-box .flat-ui-colors > div,\n.flat-ui-box .fluent-ui-colors > div {\n  box-sizing: border-box;\n  padding: 0.5px;\n}\n.flat-ui-box .flat-ui-colors > div > div,\n.flat-ui-box .fluent-ui-colors > div > div {\n  padding-top: 100%;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  cursor: pointer;\n  position: relative;\n}\n.flat-ui-box .flat-ui-colors > div > div > span,\n.flat-ui-box .fluent-ui-colors > div > div > span {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #fff;\n  display: none;\n}\n.flat-ui-box .flat-ui-colors > div > div:hover,\n.flat-ui-box .fluent-ui-colors > div > div:hover {\n  border-radius: 50%;\n}\n.flat-ui-box .flat-ui-colors > div > div:hover > span,\n.flat-ui-box .fluent-ui-colors > div > div:hover > span {\n  display: block;\n}\n.flat-ui-box .flat-ui-colors > div {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.flat-ui-box .fluent-ui-colors {\n  flex-wrap: wrap;\n}\n.flat-ui-box .fluent-ui-colors > div {\n  width: 10%;\n}\n.ui-colors {\n  width: 100%;\n  display: flex;\n  padding-bottom: 10px;\n}\n.ui-colors > div {\n  flex: 1;\n  height: 36px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ui-colors > div span {\n  color: #fff;\n  display: none;\n  font-size: 12px;\n}\n.ui-colors > div:hover span {\n  display: block;\n}\n.ui-color-row,\n.ui-color-header {\n  display: flex;\n}\n.ui-color-row > div:first-child,\n.ui-color-header > div:first-child {\n  width: 100px;\n  display: flex;\n  align-items: center;\n  color: #666;\n}\n.ui-color-row > div:last-child,\n.ui-color-header > div:last-child {\n  flex: 1;\n  display: flex;\n}\n.ui-color-row > div:last-child > div,\n.ui-color-header > div:last-child > div {\n  flex: 1;\n  padding: 0.5px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.ui-color-row > div:last-child > div::before,\n.ui-color-header > div:last-child > div::before {\n  content: '';\n  padding-top: 100%;\n  float: left;\n}\n.ui-color-row > div:last-child > div > div,\n.ui-color-header > div:last-child > div > div {\n  width: 100%;\n  height: 100%;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ui-color-row > div:last-child > div > div > span,\n.ui-color-header > div:last-child > div > div > span {\n  display: none;\n}\n.ui-color-row > div:last-child > div:hover > div,\n.ui-color-header > div:last-child > div:hover > div {\n  border-radius: 50%;\n}\n.ui-color-row > div:last-child > div:hover > div > span,\n.ui-color-header > div:last-child > div:hover > div > span {\n  display: block;\n}\n.ui-color-header {\n  box-sizing: border-box;\n  position: sticky;\n  top: 0;\n  left: 0;\n  width: 100%;\n  font-size: 13px;\n  color: #666;\n  background-color: #fff;\n  text-align: center;\n  line-height: 28px;\n}\n.ui-color-header > div:last-child > div {\n  height: 28px;\n  cursor: default;\n}\n", ""]);
      const l = i
    }, 2242: (e, t, n) => {
      "use strict";
      n.d(t, {Z: () => l});
      var r = n(8081), o = n.n(r), a = n(3645), i = n.n(a)()(o());
      i.push([e.id, "html,\nbody {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #FFFFFF;\n}\n#root {\n  width: 100%;\n  height: 100%;\n}\n.app-body {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n.app-body .app-nav {\n  border-right: 1px solid #eee;\n  width: 136px;\n}\n.app-body .app-nav .app-nav-icon {\n  min-width: 32px;\n}\n.app-body .app-nav > ul {\n  padding-top: 0;\n}\n.app-body .app-content {\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.app-body .app-setting {\n  position: fixed;\n  left: 22px;\n  bottom: 6px;\n  color: #717171;\n}\n.app-body .app-setting .MuiCheckbox-root {\n  padding: 6px;\n}\n.app-body .app-setting .MuiSvgIcon-root {\n  font-size: 16px;\n}\n.app-body .app-setting .MuiFormControlLabel-label {\n  font-size: 12px;\n}\n", ""]);
      const l = i
    }, 3645: e => {
      "use strict";
      e.exports = function (e) {
        var t = [];
        return t.toString = function () {
          return this.map((function (t) {
            var n = "", r = void 0 !== t[5];
            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), r && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
          })).join("")
        }, t.i = function (e, n, r, o, a) {
          "string" == typeof e && (e = [[null, e, void 0]]);
          var i = {};
          if (r) for (var l = 0; l < this.length; l++) {
            var s = this[l][0];
            null != s && (i[s] = !0)
          }
          for (var c = 0; c < e.length; c++) {
            var u = [].concat(e[c]);
            r && i[u[0]] || (void 0 !== a && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = a), n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n) : u[2] = n), o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = o) : u[4] = "".concat(o)), t.push(u))
          }
        }, t
      }
    }, 8081: e => {
      "use strict";
      e.exports = function (e) {
        return e[1]
      }
    }, 8679: (e, t, n) => {
      "use strict";
      var r = n(1296), o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        }, a = {name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0},
        i = {$$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0}, l = {};
      
      function s(e) {
        return r.isMemo(e) ? i : l[e.$$typeof] || o
      }
      
      l[r.ForwardRef] = {$$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0}, l[r.Memo] = i;
      var c = Object.defineProperty, u = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, m = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (m) {
            var o = p(n);
            o && o !== m && e(t, o, r)
          }
          var i = u(n);
          d && (i = i.concat(d(n)));
          for (var l = s(t), h = s(n), v = 0; v < i.length; ++v) {
            var g = i[v];
            if (!(a[g] || r && r[g] || h && h[g] || l && l[g])) {
              var b = f(n, g);
              try {
                c(t, g, b)
              } catch (e) {
              }
            }
          }
        }
        return t
      }
    }, 6103: (e, t) => {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for, r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106, a = n ? Symbol.for("react.fragment") : 60107,
        i = n ? Symbol.for("react.strict_mode") : 60108, l = n ? Symbol.for("react.profiler") : 60114,
        s = n ? Symbol.for("react.provider") : 60109, c = n ? Symbol.for("react.context") : 60110,
        u = n ? Symbol.for("react.async_mode") : 60111, d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112, p = n ? Symbol.for("react.suspense") : 60113,
        m = n ? Symbol.for("react.suspense_list") : 60120, h = n ? Symbol.for("react.memo") : 60115,
        v = n ? Symbol.for("react.lazy") : 60116, g = n ? Symbol.for("react.block") : 60121,
        b = n ? Symbol.for("react.fundamental") : 60117, y = n ? Symbol.for("react.responder") : 60118,
        x = n ? Symbol.for("react.scope") : 60119;
      
      function C(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch (e = e.type) {
                case u:
                case d:
                case a:
                case l:
                case i:
                case p:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case f:
                    case v:
                    case h:
                    case s:
                      return e;
                    default:
                      return t
                  }
              }
            case o:
              return t
          }
        }
      }
      
      function E(e) {
        return C(e) === d
      }
      
      t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = s, t.Element = r, t.ForwardRef = f, t.Fragment = a, t.Lazy = v, t.Memo = h, t.Portal = o, t.Profiler = l, t.StrictMode = i, t.Suspense = p, t.isAsyncMode = function (e) {
        return E(e) || C(e) === u
      }, t.isConcurrentMode = E, t.isContextConsumer = function (e) {
        return C(e) === c
      }, t.isContextProvider = function (e) {
        return C(e) === s
      }, t.isElement = function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function (e) {
        return C(e) === f
      }, t.isFragment = function (e) {
        return C(e) === a
      }, t.isLazy = function (e) {
        return C(e) === v
      }, t.isMemo = function (e) {
        return C(e) === h
      }, t.isPortal = function (e) {
        return C(e) === o
      }, t.isProfiler = function (e) {
        return C(e) === l
      }, t.isStrictMode = function (e) {
        return C(e) === i
      }, t.isSuspense = function (e) {
        return C(e) === p
      }, t.isValidElementType = function (e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === d || e === l || e === i || e === p || e === m || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === h || e.$$typeof === s || e.$$typeof === c || e.$$typeof === f || e.$$typeof === b || e.$$typeof === y || e.$$typeof === x || e.$$typeof === g)
      }, t.typeOf = C
    }, 1296: (e, t, n) => {
      "use strict";
      e.exports = n(6103)
    }, 4448: (e, t, n) => {
      "use strict";
      var r = n(7294), o = n(3840);
      
      function a(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      }
      
      var i = new Set, l = {};
      
      function s(e, t) {
        c(e, t), c(e + "Capture", t)
      }
      
      function c(e, t) {
        for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e])
      }
      
      var u = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        d = Object.prototype.hasOwnProperty,
        f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        p = {}, m = {};
      
      function h(e, t, n, r, o, a, i) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i
      }
      
      var v = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
        v[e] = new h(e, 0, !1, e, null, !1, !1)
      })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) {
        var t = e[0];
        v[t] = new h(t, 1, !1, e[1], null, !1, !1)
      })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
        v[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1)
      })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
        v[e] = new h(e, 2, !1, e, null, !1, !1)
      })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
        v[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1)
      })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
        v[e] = new h(e, 3, !0, e, null, !1, !1)
      })), ["capture", "download"].forEach((function (e) {
        v[e] = new h(e, 4, !1, e, null, !1, !1)
      })), ["cols", "rows", "size", "span"].forEach((function (e) {
        v[e] = new h(e, 6, !1, e, null, !1, !1)
      })), ["rowSpan", "start"].forEach((function (e) {
        v[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1)
      }));
      var g = /[\-:]([a-z])/g;
      
      function b(e) {
        return e[1].toUpperCase()
      }
      
      function y(e, t, n, r) {
        var o = v.hasOwnProperty(t) ? v[t] : null;
        (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) {
          if (null == t || function (e, t, n, r) {
            if (null !== n && 0 === n.type) return !1;
            switch (typeof t) {
              case"function":
              case"symbol":
                return !0;
              case"boolean":
                return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
              default:
                return !1
            }
          }(e, t, n, r)) return !0;
          if (r) return !1;
          if (null !== n) switch (n.type) {
            case 3:
              return !t;
            case 4:
              return !1 === t;
            case 5:
              return isNaN(t);
            case 6:
              return isNaN(t) || 1 > t
          }
          return !1
        }(t, n, o, r) && (n = null), r || null === o ? function (e) {
          return !!d.call(m, e) || !d.call(p, e) && (f.test(e) ? m[e] = !0 : (p[e] = !0, !1))
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
      }
      
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
        var t = e.replace(g, b);
        v[t] = new h(t, 1, !1, e, null, !1, !1)
      })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
        var t = e.replace(g, b);
        v[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
      })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
        var t = e.replace(g, b);
        v[t] = new h(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
      })), ["tabIndex", "crossOrigin"].forEach((function (e) {
        v[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1)
      })), v.xlinkHref = new h("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) {
        v[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0)
      }));
      var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, C = Symbol.for("react.element"),
        E = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"),
        F = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), A = Symbol.for("react.context"),
        D = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"),
        j = Symbol.for("react.memo"), P = Symbol.for("react.lazy");
      Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
      var R = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
      var M = Symbol.iterator;
      
      function N(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof (e = M && e[M] || e["@@iterator"]) ? e : null
      }
      
      var _, T = Object.assign;
      
      function O(e) {
        if (void 0 === _) try {
          throw Error()
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          _ = t && t[1] || ""
        }
        return "\n" + _ + e
      }
      
      var I = !1;
      
      function z(e, t) {
        if (!e || I) return "";
        I = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t) if (t = function () {
            throw Error()
          }, Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error()
            }
          }), "object" == typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(t, [])
            } catch (e) {
              var r = e
            }
            Reflect.construct(e, [], t)
          } else {
            try {
              t.call()
            } catch (e) {
              r = e
            }
            e.call(t.prototype)
          } else {
            try {
              throw Error()
            } catch (e) {
              r = e
            }
            e()
          }
        } catch (t) {
          if (t && r && "string" == typeof t.stack) {
            for (var o = t.stack.split("\n"), a = r.stack.split("\n"), i = o.length - 1, l = a.length - 1; 1 <= i && 0 <= l && o[i] !== a[l];) l--;
            for (; 1 <= i && 0 <= l; i--, l--) if (o[i] !== a[l]) {
              if (1 !== i || 1 !== l) do {
                if (i--, 0 > --l || o[i] !== a[l]) {
                  var s = "\n" + o[i].replace(" at new ", " at ");
                  return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                }
              } while (1 <= i && 0 <= l);
              break
            }
          }
        } finally {
          I = !1, Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? O(e) : ""
      }
      
      function L(e) {
        switch (e.tag) {
          case 5:
            return O(e.type);
          case 16:
            return O("Lazy");
          case 13:
            return O("Suspense");
          case 19:
            return O("SuspenseList");
          case 0:
          case 2:
          case 15:
            return z(e.type, !1);
          case 11:
            return z(e.type.render, !1);
          case 1:
            return z(e.type, !0);
          default:
            return ""
        }
      }
      
      function $(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case w:
            return "Fragment";
          case E:
            return "Portal";
          case F:
            return "Profiler";
          case k:
            return "StrictMode";
          case Z:
            return "Suspense";
          case B:
            return "SuspenseList"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
          case A:
            return (e.displayName || "Context") + ".Consumer";
          case S:
            return (e._context.displayName || "Context") + ".Provider";
          case D:
            var t = e.render;
            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case j:
            return null !== (t = e.displayName || null) ? t : $(e.type) || "Memo";
          case P:
            t = e._payload, e = e._init;
            try {
              return $(e(t))
            } catch (e) {
            }
        }
        return null
      }
      
      function W(e) {
        var t = e.type;
        switch (e.tag) {
          case 24:
            return "Cache";
          case 9:
            return (t.displayName || "Context") + ".Consumer";
          case 10:
            return (t._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return t;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return $(t);
          case 8:
            return t === k ? "StrictMode" : "Mode";
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
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" == typeof t) return t.displayName || t.name || null;
            if ("string" == typeof t) return t
        }
        return null
      }
      
      function H(e) {
        switch (typeof e) {
          case"boolean":
          case"number":
          case"string":
          case"undefined":
          case"object":
            return e;
          default:
            return ""
        }
      }
      
      function V(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
      }
      
      function U(e) {
        e._valueTracker || (e._valueTracker = function (e) {
          var t = V(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
          if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var o = n.get, a = n.set;
            return Object.defineProperty(e, t, {
              configurable: !0, get: function () {
                return o.call(this)
              }, set: function (e) {
                r = "" + e, a.call(this, e)
              }
            }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
              getValue: function () {
                return r
              }, setValue: function (e) {
                r = "" + e
              }, stopTracking: function () {
                e._valueTracker = null, delete e[t]
              }
            }
          }
        }(e))
      }
      
      function q(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = V(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
      }
      
      function K(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
          return e.activeElement || e.body
        } catch (t) {
          return e.body
        }
      }
      
      function G(e, t) {
        var n = t.checked;
        return T({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked
        })
      }
      
      function X(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue, r = null != t.checked ? t.checked : t.defaultChecked;
        n = H(null != t.value ? t.value : n), e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
      }
      
      function Y(e, t) {
        null != (t = t.checked) && y(e, "checked", t, !1)
      }
      
      function Q(e, t) {
        Y(e, t);
        var n = H(t.value), r = t.type;
        if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, H(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
      }
      
      function J(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
          t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
      }
      
      function ee(e, t, n) {
        "number" === t && K(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
      }
      
      var te = Array.isArray;
      
      function ne(e, t, n, r) {
        if (e = e.options, t) {
          t = {};
          for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
          for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
        } else {
          for (n = "" + H(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) return e[o].selected = !0, void (r && (e[o].defaultSelected = !0));
            null !== t || e[o].disabled || (t = e[o])
          }
          null !== t && (t.selected = !0)
        }
      }
      
      function re(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
        return T({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
      }
      
      function oe(e, t) {
        var n = t.value;
        if (null == n) {
          if (n = t.children, t = t.defaultValue, null != n) {
            if (null != t) throw Error(a(92));
            if (te(n)) {
              if (1 < n.length) throw Error(a(93));
              n = n[0]
            }
            t = n
          }
          null == t && (t = ""), n = t
        }
        e._wrapperState = {initialValue: H(n)}
      }
      
      function ae(e, t) {
        var n = H(t.value), r = H(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
      }
      
      function ie(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
      }
      
      function le(e) {
        switch (e) {
          case"svg":
            return "http://www.w3.org/2000/svg";
          case"math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml"
        }
      }
      
      function se(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
      }
      
      var ce, ue, de = (ue = function (e, t) {
        if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t; else {
          for ((ce = ce || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ce.firstChild; e.firstChild;) e.removeChild(e.firstChild);
          for (; t.firstChild;) e.appendChild(t.firstChild)
        }
      }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
        MSApp.execUnsafeLocalFunction((function () {
          return ue(e, t)
        }))
      } : ue);
      
      function fe(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
        }
        e.textContent = t
      }
      
      var pe = {
        animationIterationCount: !0,
        aspectRatio: !0,
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
      }, me = ["Webkit", "ms", "Moz", "O"];
      
      function he(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
      }
      
      function ve(e, t) {
        for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"), o = he(n, t[n], r);
          "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
      }
      
      Object.keys(pe).forEach((function (e) {
        me.forEach((function (t) {
          t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]
        }))
      }));
      var ge = T({menuitem: !0}, {
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
      });
      
      function be(e, t) {
        if (t) {
          if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(a(60));
            if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61))
          }
          if (null != t.style && "object" != typeof t.style) throw Error(a(62))
        }
      }
      
      function ye(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
          case"annotation-xml":
          case"color-profile":
          case"font-face":
          case"font-face-src":
          case"font-face-uri":
          case"font-face-format":
          case"font-face-name":
          case"missing-glyph":
            return !1;
          default:
            return !0
        }
      }
      
      var xe = null;
      
      function Ce(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
      }
      
      var Ee = null, we = null, ke = null;
      
      function Fe(e) {
        if (e = xo(e)) {
          if ("function" != typeof Ee) throw Error(a(280));
          var t = e.stateNode;
          t && (t = Eo(t), Ee(e.stateNode, e.type, t))
        }
      }
      
      function Se(e) {
        we ? ke ? ke.push(e) : ke = [e] : we = e
      }
      
      function Ae() {
        if (we) {
          var e = we, t = ke;
          if (ke = we = null, Fe(e), t) for (e = 0; e < t.length; e++) Fe(t[e])
        }
      }
      
      function De(e, t) {
        return e(t)
      }
      
      function Ze() {
      }
      
      var Be = !1;
      
      function je(e, t, n) {
        if (Be) return e(t, n);
        Be = !0;
        try {
          return De(e, t, n)
        } finally {
          Be = !1, (null !== we || null !== ke) && (Ze(), Ae())
        }
      }
      
      function Pe(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = Eo(n);
        if (null === r) return null;
        n = r[t];
        e:switch (t) {
          case"onClick":
          case"onClickCapture":
          case"onDoubleClick":
          case"onDoubleClickCapture":
          case"onMouseDown":
          case"onMouseDownCapture":
          case"onMouseMove":
          case"onMouseMoveCapture":
          case"onMouseUp":
          case"onMouseUpCapture":
          case"onMouseEnter":
            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
            break e;
          default:
            e = !1
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
        return n
      }
      
      var Re = !1;
      if (u) try {
        var Me = {};
        Object.defineProperty(Me, "passive", {
          get: function () {
            Re = !0
          }
        }), window.addEventListener("test", Me, Me), window.removeEventListener("test", Me, Me)
      } catch (ue) {
        Re = !1
      }
      
      function Ne(e, t, n, r, o, a, i, l, s) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, c)
        } catch (e) {
          this.onError(e)
        }
      }
      
      var _e = !1, Te = null, Oe = !1, Ie = null, ze = {
        onError: function (e) {
          _e = !0, Te = e
        }
      };
      
      function Le(e, t, n, r, o, a, i, l, s) {
        _e = !1, Te = null, Ne.apply(ze, arguments)
      }
      
      function $e(e) {
        var t = e, n = e;
        if (e.alternate) for (; t.return;) t = t.return; else {
          e = t;
          do {
            0 != (4098 & (t = e).flags) && (n = t.return), e = t.return
          } while (e)
        }
        return 3 === t.tag ? n : null
      }
      
      function We(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated
        }
        return null
      }
      
      function He(e) {
        if ($e(e) !== e) throw Error(a(188))
      }
      
      function Ve(e) {
        return null !== (e = function (e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = $e(e))) throw Error(a(188));
            return t !== e ? null : e
          }
          for (var n = e, r = t; ;) {
            var o = n.return;
            if (null === o) break;
            var i = o.alternate;
            if (null === i) {
              if (null !== (r = o.return)) {
                n = r;
                continue
              }
              break
            }
            if (o.child === i.child) {
              for (i = o.child; i;) {
                if (i === n) return He(o), e;
                if (i === r) return He(o), t;
                i = i.sibling
              }
              throw Error(a(188))
            }
            if (n.return !== r.return) n = o, r = i; else {
              for (var l = !1, s = o.child; s;) {
                if (s === n) {
                  l = !0, n = o, r = i;
                  break
                }
                if (s === r) {
                  l = !0, r = o, n = i;
                  break
                }
                s = s.sibling
              }
              if (!l) {
                for (s = i.child; s;) {
                  if (s === n) {
                    l = !0, n = i, r = o;
                    break
                  }
                  if (s === r) {
                    l = !0, r = i, n = o;
                    break
                  }
                  s = s.sibling
                }
                if (!l) throw Error(a(189))
              }
            }
            if (n.alternate !== r) throw Error(a(190))
          }
          if (3 !== n.tag) throw Error(a(188));
          return n.stateNode.current === n ? e : t
        }(e)) ? Ue(e) : null
      }
      
      function Ue(e) {
        if (5 === e.tag || 6 === e.tag) return e;
        for (e = e.child; null !== e;) {
          var t = Ue(e);
          if (null !== t) return t;
          e = e.sibling
        }
        return null
      }
      
      var qe = o.unstable_scheduleCallback, Ke = o.unstable_cancelCallback, Ge = o.unstable_shouldYield,
        Xe = o.unstable_requestPaint, Ye = o.unstable_now, Qe = o.unstable_getCurrentPriorityLevel,
        Je = o.unstable_ImmediatePriority, et = o.unstable_UserBlockingPriority, tt = o.unstable_NormalPriority,
        nt = o.unstable_LowPriority, rt = o.unstable_IdlePriority, ot = null, at = null,
        it = Math.clz32 ? Math.clz32 : function (e) {
          return 0 == (e >>>= 0) ? 32 : 31 - (lt(e) / st | 0) | 0
        }, lt = Math.log, st = Math.LN2, ct = 64, ut = 4194304;
      
      function dt(e) {
        switch (e & -e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
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
            return 4194240 & e;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return 130023424 & e;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return e
        }
      }
      
      function ft(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return 0;
        var r = 0, o = e.suspendedLanes, a = e.pingedLanes, i = 268435455 & n;
        if (0 !== i) {
          var l = i & ~o;
          0 !== l ? r = dt(l) : 0 != (a &= i) && (r = dt(a))
        } else 0 != (i = n & ~o) ? r = dt(i) : 0 !== a && (r = dt(a));
        if (0 === r) return 0;
        if (0 !== t && t !== r && 0 == (t & o) && ((o = r & -r) >= (a = t & -t) || 16 === o && 0 != (4194240 & a))) return t;
        if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)) for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - it(t)), r |= e[n], t &= ~o;
        return r
      }
      
      function pt(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
            return t + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
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
            return t + 5e3;
          default:
            return -1
        }
      }
      
      function mt(e) {
        return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
      }
      
      function ht() {
        var e = ct;
        return 0 == (4194240 & (ct <<= 1)) && (ct = 64), e
      }
      
      function vt(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
      }
      
      function gt(e, t, n) {
        e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - it(t)] = n
      }
      
      function bt(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
          var r = 31 - it(n), o = 1 << r;
          o & t | e[r] & t && (e[r] |= t), n &= ~o
        }
      }
      
      var yt = 0;
      
      function xt(e) {
        return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1
      }
      
      var Ct, Et, wt, kt, Ft, St = !1, At = [], Dt = null, Zt = null, Bt = null, jt = new Map, Pt = new Map, Rt = [],
        Mt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      
      function Nt(e, t) {
        switch (e) {
          case"focusin":
          case"focusout":
            Dt = null;
            break;
          case"dragenter":
          case"dragleave":
            Zt = null;
            break;
          case"mouseover":
          case"mouseout":
            Bt = null;
            break;
          case"pointerover":
          case"pointerout":
            jt.delete(t.pointerId);
            break;
          case"gotpointercapture":
          case"lostpointercapture":
            Pt.delete(t.pointerId)
        }
      }
      
      function _t(e, t, n, r, o, a) {
        return null === e || e.nativeEvent !== a ? (e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: a,
          targetContainers: [o]
        }, null !== t && null !== (t = xo(t)) && Et(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
      }
      
      function Tt(e) {
        var t = yo(e.target);
        if (null !== t) {
          var n = $e(t);
          if (null !== n) if (13 === (t = n.tag)) {
            if (null !== (t = We(n))) return e.blockedOn = t, void Ft(e.priority, (function () {
              wt(n)
            }))
          } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
        }
        e.blockedOn = null
      }
      
      function Ot(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
          var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n) return null !== (t = xo(n)) && Et(t), e.blockedOn = n, !1;
          var r = new (n = e.nativeEvent).constructor(n.type, n);
          xe = r, n.target.dispatchEvent(r), xe = null, t.shift()
        }
        return !0
      }
      
      function It(e, t, n) {
        Ot(e) && n.delete(t)
      }
      
      function zt() {
        St = !1, null !== Dt && Ot(Dt) && (Dt = null), null !== Zt && Ot(Zt) && (Zt = null), null !== Bt && Ot(Bt) && (Bt = null), jt.forEach(It), Pt.forEach(It)
      }
      
      function Lt(e, t) {
        e.blockedOn === t && (e.blockedOn = null, St || (St = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, zt)))
      }
      
      function $t(e) {
        function t(t) {
          return Lt(t, e)
        }
        
        if (0 < At.length) {
          Lt(At[0], e);
          for (var n = 1; n < At.length; n++) {
            var r = At[n];
            r.blockedOn === e && (r.blockedOn = null)
          }
        }
        for (null !== Dt && Lt(Dt, e), null !== Zt && Lt(Zt, e), null !== Bt && Lt(Bt, e), jt.forEach(t), Pt.forEach(t), n = 0; n < Rt.length; n++) (r = Rt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn;) Tt(n), null === n.blockedOn && Rt.shift()
      }
      
      var Wt = x.ReactCurrentBatchConfig, Ht = !0;
      
      function Vt(e, t, n, r) {
        var o = yt, a = Wt.transition;
        Wt.transition = null;
        try {
          yt = 1, qt(e, t, n, r)
        } finally {
          yt = o, Wt.transition = a
        }
      }
      
      function Ut(e, t, n, r) {
        var o = yt, a = Wt.transition;
        Wt.transition = null;
        try {
          yt = 4, qt(e, t, n, r)
        } finally {
          yt = o, Wt.transition = a
        }
      }
      
      function qt(e, t, n, r) {
        if (Ht) {
          var o = Gt(e, t, n, r);
          if (null === o) Hr(e, t, r, Kt, n), Nt(e, r); else if (function (e, t, n, r, o) {
            switch (t) {
              case"focusin":
                return Dt = _t(Dt, e, t, n, r, o), !0;
              case"dragenter":
                return Zt = _t(Zt, e, t, n, r, o), !0;
              case"mouseover":
                return Bt = _t(Bt, e, t, n, r, o), !0;
              case"pointerover":
                var a = o.pointerId;
                return jt.set(a, _t(jt.get(a) || null, e, t, n, r, o)), !0;
              case"gotpointercapture":
                return a = o.pointerId, Pt.set(a, _t(Pt.get(a) || null, e, t, n, r, o)), !0
            }
            return !1
          }(o, e, t, n, r)) r.stopPropagation(); else if (Nt(e, r), 4 & t && -1 < Mt.indexOf(e)) {
            for (; null !== o;) {
              var a = xo(o);
              if (null !== a && Ct(a), null === (a = Gt(e, t, n, r)) && Hr(e, t, r, Kt, n), a === o) break;
              o = a
            }
            null !== o && r.stopPropagation()
          } else Hr(e, t, r, null, n)
        }
      }
      
      var Kt = null;
      
      function Gt(e, t, n, r) {
        if (Kt = null, null !== (e = yo(e = Ce(r)))) if (null === (t = $e(e))) e = null; else if (13 === (n = t.tag)) {
          if (null !== (e = We(t))) return e;
          e = null
        } else if (3 === n) {
          if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
          e = null
        } else t !== e && (e = null);
        return Kt = e, null
      }
      
      function Xt(e) {
        switch (e) {
          case"cancel":
          case"click":
          case"close":
          case"contextmenu":
          case"copy":
          case"cut":
          case"auxclick":
          case"dblclick":
          case"dragend":
          case"dragstart":
          case"drop":
          case"focusin":
          case"focusout":
          case"input":
          case"invalid":
          case"keydown":
          case"keypress":
          case"keyup":
          case"mousedown":
          case"mouseup":
          case"paste":
          case"pause":
          case"play":
          case"pointercancel":
          case"pointerdown":
          case"pointerup":
          case"ratechange":
          case"reset":
          case"resize":
          case"seeked":
          case"submit":
          case"touchcancel":
          case"touchend":
          case"touchstart":
          case"volumechange":
          case"change":
          case"selectionchange":
          case"textInput":
          case"compositionstart":
          case"compositionend":
          case"compositionupdate":
          case"beforeblur":
          case"afterblur":
          case"beforeinput":
          case"blur":
          case"fullscreenchange":
          case"focus":
          case"hashchange":
          case"popstate":
          case"select":
          case"selectstart":
            return 1;
          case"drag":
          case"dragenter":
          case"dragexit":
          case"dragleave":
          case"dragover":
          case"mousemove":
          case"mouseout":
          case"mouseover":
          case"pointermove":
          case"pointerout":
          case"pointerover":
          case"scroll":
          case"toggle":
          case"touchmove":
          case"wheel":
          case"mouseenter":
          case"mouseleave":
          case"pointerenter":
          case"pointerleave":
            return 4;
          case"message":
            switch (Qe()) {
              case Je:
                return 1;
              case et:
                return 4;
              case tt:
              case nt:
                return 16;
              case rt:
                return 536870912;
              default:
                return 16
            }
          default:
            return 16
        }
      }
      
      var Yt = null, Qt = null, Jt = null;
      
      function en() {
        if (Jt) return Jt;
        var e, t, n = Qt, r = n.length, o = "value" in Yt ? Yt.value : Yt.textContent, a = o.length;
        for (e = 0; e < r && n[e] === o[e]; e++) ;
        var i = r - e;
        for (t = 1; t <= i && n[r - t] === o[a - t]; t++) ;
        return Jt = o.slice(e, 1 < t ? 1 - t : void 0)
      }
      
      function tn(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
      }
      
      function nn() {
        return !0
      }
      
      function rn() {
        return !1
      }
      
      function on(e) {
        function t(t, n, r, o, a) {
          for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
          return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
        }
        
        return T(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
          }, stopPropagation: function () {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
          }, persist: function () {
          }, isPersistent: nn
        }), t
      }
      
      var an, ln, sn, cn = {
          eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
            return e.timeStamp || Date.now()
          }, defaultPrevented: 0, isTrusted: 0
        }, un = on(cn), dn = T({}, cn, {view: 0, detail: 0}), fn = on(dn), pn = T({}, dn, {
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
          getModifierState: Fn,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
          },
          movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== sn && (sn && "mousemove" === e.type ? (an = e.screenX - sn.screenX, ln = e.screenY - sn.screenY) : ln = an = 0, sn = e), an)
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : ln
          }
        }), mn = on(pn), hn = on(T({}, pn, {dataTransfer: 0})), vn = on(T({}, dn, {relatedTarget: 0})),
        gn = on(T({}, cn, {animationName: 0, elapsedTime: 0, pseudoElement: 0})), bn = T({}, cn, {
          clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
          }
        }), yn = on(bn), xn = on(T({}, cn, {data: 0})), Cn = {
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
        }, En = {
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
        }, wn = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
      
      function kn(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = wn[e]) && !!t[e]
      }
      
      function Fn() {
        return kn
      }
      
      var Sn = T({}, dn, {
        key: function (e) {
          if (e.key) {
            var t = Cn[e.key] || e.key;
            if ("Unidentified" !== t) return t
          }
          return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? En[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Fn,
        charCode: function (e) {
          return "keypress" === e.type ? tn(e) : 0
        },
        keyCode: function (e) {
          return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        },
        which: function (e) {
          return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        }
      }), An = on(Sn), Dn = on(T({}, pn, {
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
      })), Zn = on(T({}, dn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Fn
      })), Bn = on(T({}, cn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})), jn = T({}, pn, {
        deltaX: function (e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        }, deltaY: function (e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        }, deltaZ: 0, deltaMode: 0
      }), Pn = on(jn), Rn = [9, 13, 27, 32], Mn = u && "CompositionEvent" in window, Nn = null;
      u && "documentMode" in document && (Nn = document.documentMode);
      var _n = u && "TextEvent" in window && !Nn, Tn = u && (!Mn || Nn && 8 < Nn && 11 >= Nn),
        On = String.fromCharCode(32), In = !1;
      
      function zn(e, t) {
        switch (e) {
          case"keyup":
            return -1 !== Rn.indexOf(t.keyCode);
          case"keydown":
            return 229 !== t.keyCode;
          case"keypress":
          case"mousedown":
          case"focusout":
            return !0;
          default:
            return !1
        }
      }
      
      function Ln(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null
      }
      
      var $n = !1, Wn = {
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
      
      function Hn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Wn[e.type] : "textarea" === t
      }
      
      function Vn(e, t, n, r) {
        Se(r), 0 < (t = Ur(t, "onChange")).length && (n = new un("onChange", "change", null, n, r), e.push({
          event: n,
          listeners: t
        }))
      }
      
      var Un = null, qn = null;
      
      function Kn(e) {
        Or(e, 0)
      }
      
      function Gn(e) {
        if (q(Co(e))) return e
      }
      
      function Xn(e, t) {
        if ("change" === e) return t
      }
      
      var Yn = !1;
      if (u) {
        var Qn;
        if (u) {
          var Jn = "oninput" in document;
          if (!Jn) {
            var er = document.createElement("div");
            er.setAttribute("oninput", "return;"), Jn = "function" == typeof er.oninput
          }
          Qn = Jn
        } else Qn = !1;
        Yn = Qn && (!document.documentMode || 9 < document.documentMode)
      }
      
      function tr() {
        Un && (Un.detachEvent("onpropertychange", nr), qn = Un = null)
      }
      
      function nr(e) {
        if ("value" === e.propertyName && Gn(qn)) {
          var t = [];
          Vn(t, qn, e, Ce(e)), je(Kn, t)
        }
      }
      
      function rr(e, t, n) {
        "focusin" === e ? (tr(), qn = n, (Un = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
      }
      
      function or(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Gn(qn)
      }
      
      function ar(e, t) {
        if ("click" === e) return Gn(t)
      }
      
      function ir(e, t) {
        if ("input" === e || "change" === e) return Gn(t)
      }
      
      var lr = "function" == typeof Object.is ? Object.is : function (e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
      };
      
      function sr(e, t) {
        if (lr(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
          var o = n[r];
          if (!d.call(t, o) || !lr(e[o], t[o])) return !1
        }
        return !0
      }
      
      function cr(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
      }
      
      function ur(e, t) {
        var n, r = cr(e);
        for (e = 0; r;) {
          if (3 === r.nodeType) {
            if (n = e + r.textContent.length, e <= t && n >= t) return {node: r, offset: t - e};
            e = n
          }
          e:{
            for (; r;) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e
              }
              r = r.parentNode
            }
            r = void 0
          }
          r = cr(r)
        }
      }
      
      function dr(e, t) {
        return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
      }
      
      function fr() {
        for (var e = window, t = K(); t instanceof e.HTMLIFrameElement;) {
          try {
            var n = "string" == typeof t.contentWindow.location.href
          } catch (e) {
            n = !1
          }
          if (!n) break;
          t = K((e = t.contentWindow).document)
        }
        return t
      }
      
      function pr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
      }
      
      function mr(e) {
        var t = fr(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
          if (null !== r && pr(n)) if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
            e = e.getSelection();
            var o = n.textContent.length, a = Math.min(r.start, o);
            r = void 0 === r.end ? a : Math.min(r.end, o), !e.extend && a > r && (o = r, r = a, a = o), o = ur(n, a);
            var i = ur(n, r);
            o && i && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
          }
          for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
          });
          for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++) (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
      }
      
      var hr = u && "documentMode" in document && 11 >= document.documentMode, vr = null, gr = null, br = null, yr = !1;
      
      function xr(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        yr || null == vr || vr !== K(r) || (r = "selectionStart" in (r = vr) && pr(r) ? {
          start: r.selectionStart,
          end: r.selectionEnd
        } : {
          anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        }, br && sr(br, r) || (br = r, 0 < (r = Ur(gr, "onSelect")).length && (t = new un("onSelect", "select", null, t, n), e.push({
          event: t,
          listeners: r
        }), t.target = vr)))
      }
      
      function Cr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
      }
      
      var Er = {
        animationend: Cr("Animation", "AnimationEnd"),
        animationiteration: Cr("Animation", "AnimationIteration"),
        animationstart: Cr("Animation", "AnimationStart"),
        transitionend: Cr("Transition", "TransitionEnd")
      }, wr = {}, kr = {};
      
      function Fr(e) {
        if (wr[e]) return wr[e];
        if (!Er[e]) return e;
        var t, n = Er[e];
        for (t in n) if (n.hasOwnProperty(t) && t in kr) return wr[e] = n[t];
        return e
      }
      
      u && (kr = document.createElement("div").style, "AnimationEvent" in window || (delete Er.animationend.animation, delete Er.animationiteration.animation, delete Er.animationstart.animation), "TransitionEvent" in window || delete Er.transitionend.transition);
      var Sr = Fr("animationend"), Ar = Fr("animationiteration"), Dr = Fr("animationstart"), Zr = Fr("transitionend"),
        Br = new Map,
        jr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      
      function Pr(e, t) {
        Br.set(e, t), s(t, [e])
      }
      
      for (var Rr = 0; Rr < jr.length; Rr++) {
        var Mr = jr[Rr];
        Pr(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)))
      }
      Pr(Sr, "onAnimationEnd"), Pr(Ar, "onAnimationIteration"), Pr(Dr, "onAnimationStart"), Pr("dblclick", "onDoubleClick"), Pr("focusin", "onFocus"), Pr("focusout", "onBlur"), Pr(Zr, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var Nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        _r = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));
      
      function Tr(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, function (e, t, n, r, o, i, l, s, c) {
          if (Le.apply(this, arguments), _e) {
            if (!_e) throw Error(a(198));
            var u = Te;
            _e = !1, Te = null, Oe || (Oe = !0, Ie = u)
          }
        }(r, t, void 0, e), e.currentTarget = null
      }
      
      function Or(e, t) {
        t = 0 != (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n], o = r.event;
          r = r.listeners;
          e:{
            var a = void 0;
            if (t) for (var i = r.length - 1; 0 <= i; i--) {
              var l = r[i], s = l.instance, c = l.currentTarget;
              if (l = l.listener, s !== a && o.isPropagationStopped()) break e;
              Tr(o, l, c), a = s
            } else for (i = 0; i < r.length; i++) {
              if (s = (l = r[i]).instance, c = l.currentTarget, l = l.listener, s !== a && o.isPropagationStopped()) break e;
              Tr(o, l, c), a = s
            }
          }
        }
        if (Oe) throw e = Ie, Oe = !1, Ie = null, e
      }
      
      function Ir(e, t) {
        var n = t[vo];
        void 0 === n && (n = t[vo] = new Set);
        var r = e + "__bubble";
        n.has(r) || (Wr(t, e, 2, !1), n.add(r))
      }
      
      function zr(e, t, n) {
        var r = 0;
        t && (r |= 4), Wr(n, e, r, t)
      }
      
      var Lr = "_reactListening" + Math.random().toString(36).slice(2);
      
      function $r(e) {
        if (!e[Lr]) {
          e[Lr] = !0, i.forEach((function (t) {
            "selectionchange" !== t && (_r.has(t) || zr(t, !1, e), zr(t, !0, e))
          }));
          var t = 9 === e.nodeType ? e : e.ownerDocument;
          null === t || t[Lr] || (t[Lr] = !0, zr("selectionchange", !1, t))
        }
      }
      
      function Wr(e, t, n, r) {
        switch (Xt(t)) {
          case 1:
            var o = Vt;
            break;
          case 4:
            o = Ut;
            break;
          default:
            o = qt
        }
        n = o.bind(null, t, n, e), o = void 0, !Re || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
          capture: !0,
          passive: o
        }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {passive: o}) : e.addEventListener(t, n, !1)
      }
      
      function Hr(e, t, n, r, o) {
        var a = r;
        if (0 == (1 & t) && 0 == (2 & t) && null !== r) e:for (; ;) {
          if (null === r) return;
          var i = r.tag;
          if (3 === i || 4 === i) {
            var l = r.stateNode.containerInfo;
            if (l === o || 8 === l.nodeType && l.parentNode === o) break;
            if (4 === i) for (i = r.return; null !== i;) {
              var s = i.tag;
              if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === o || 8 === s.nodeType && s.parentNode === o)) return;
              i = i.return
            }
            for (; null !== l;) {
              if (null === (i = yo(l))) return;
              if (5 === (s = i.tag) || 6 === s) {
                r = a = i;
                continue e
              }
              l = l.parentNode
            }
          }
          r = r.return
        }
        je((function () {
          var r = a, o = Ce(n), i = [];
          e:{
            var l = Br.get(e);
            if (void 0 !== l) {
              var s = un, c = e;
              switch (e) {
                case"keypress":
                  if (0 === tn(n)) break e;
                case"keydown":
                case"keyup":
                  s = An;
                  break;
                case"focusin":
                  c = "focus", s = vn;
                  break;
                case"focusout":
                  c = "blur", s = vn;
                  break;
                case"beforeblur":
                case"afterblur":
                  s = vn;
                  break;
                case"click":
                  if (2 === n.button) break e;
                case"auxclick":
                case"dblclick":
                case"mousedown":
                case"mousemove":
                case"mouseup":
                case"mouseout":
                case"mouseover":
                case"contextmenu":
                  s = mn;
                  break;
                case"drag":
                case"dragend":
                case"dragenter":
                case"dragexit":
                case"dragleave":
                case"dragover":
                case"dragstart":
                case"drop":
                  s = hn;
                  break;
                case"touchcancel":
                case"touchend":
                case"touchmove":
                case"touchstart":
                  s = Zn;
                  break;
                case Sr:
                case Ar:
                case Dr:
                  s = gn;
                  break;
                case Zr:
                  s = Bn;
                  break;
                case"scroll":
                  s = fn;
                  break;
                case"wheel":
                  s = Pn;
                  break;
                case"copy":
                case"cut":
                case"paste":
                  s = yn;
                  break;
                case"gotpointercapture":
                case"lostpointercapture":
                case"pointercancel":
                case"pointerdown":
                case"pointermove":
                case"pointerout":
                case"pointerover":
                case"pointerup":
                  s = Dn
              }
              var u = 0 != (4 & t), d = !u && "scroll" === e, f = u ? null !== l ? l + "Capture" : null : l;
              u = [];
              for (var p, m = r; null !== m;) {
                var h = (p = m).stateNode;
                if (5 === p.tag && null !== h && (p = h, null !== f && null != (h = Pe(m, f)) && u.push(Vr(m, h, p))), d) break;
                m = m.return
              }
              0 < u.length && (l = new s(l, c, null, n, o), i.push({event: l, listeners: u}))
            }
          }
          if (0 == (7 & t)) {
            if (s = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === xe || !(c = n.relatedTarget || n.fromElement) || !yo(c) && !c[ho]) && (s || l) && (l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window, s ? (s = r, null !== (c = (c = n.relatedTarget || n.toElement) ? yo(c) : null) && (c !== (d = $e(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (s = null, c = r), s !== c)) {
              if (u = mn, h = "onMouseLeave", f = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (u = Dn, h = "onPointerLeave", f = "onPointerEnter", m = "pointer"), d = null == s ? l : Co(s), p = null == c ? l : Co(c), (l = new u(h, m + "leave", s, n, o)).target = d, l.relatedTarget = p, h = null, yo(o) === r && ((u = new u(f, m + "enter", c, n, o)).target = p, u.relatedTarget = d, h = u), d = h, s && c) e:{
                for (f = c, m = 0, p = u = s; p; p = qr(p)) m++;
                for (p = 0, h = f; h; h = qr(h)) p++;
                for (; 0 < m - p;) u = qr(u), m--;
                for (; 0 < p - m;) f = qr(f), p--;
                for (; m--;) {
                  if (u === f || null !== f && u === f.alternate) break e;
                  u = qr(u), f = qr(f)
                }
                u = null
              } else u = null;
              null !== s && Kr(i, l, s, u, !1), null !== c && null !== d && Kr(i, d, c, u, !0)
            }
            if ("select" === (s = (l = r ? Co(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type) var v = Xn; else if (Hn(l)) if (Yn) v = ir; else {
              v = or;
              var g = rr
            } else (s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (v = ar);
            switch (v && (v = v(e, r)) ? Vn(i, v, n, o) : (g && g(e, l, r), "focusout" === e && (g = l._wrapperState) && g.controlled && "number" === l.type && ee(l, "number", l.value)), g = r ? Co(r) : window, e) {
              case"focusin":
                (Hn(g) || "true" === g.contentEditable) && (vr = g, gr = r, br = null);
                break;
              case"focusout":
                br = gr = vr = null;
                break;
              case"mousedown":
                yr = !0;
                break;
              case"contextmenu":
              case"mouseup":
              case"dragend":
                yr = !1, xr(i, n, o);
                break;
              case"selectionchange":
                if (hr) break;
              case"keydown":
              case"keyup":
                xr(i, n, o)
            }
            var b;
            if (Mn) e:{
              switch (e) {
                case"compositionstart":
                  var y = "onCompositionStart";
                  break e;
                case"compositionend":
                  y = "onCompositionEnd";
                  break e;
                case"compositionupdate":
                  y = "onCompositionUpdate";
                  break e
              }
              y = void 0
            } else $n ? zn(e, n) && (y = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (y = "onCompositionStart");
            y && (Tn && "ko" !== n.locale && ($n || "onCompositionStart" !== y ? "onCompositionEnd" === y && $n && (b = en()) : (Qt = "value" in (Yt = o) ? Yt.value : Yt.textContent, $n = !0)), 0 < (g = Ur(r, y)).length && (y = new xn(y, e, null, n, o), i.push({
              event: y,
              listeners: g
            }), (b || null !== (b = Ln(n))) && (y.data = b))), (b = _n ? function (e, t) {
              switch (e) {
                case"compositionend":
                  return Ln(t);
                case"keypress":
                  return 32 !== t.which ? null : (In = !0, On);
                case"textInput":
                  return (e = t.data) === On && In ? null : e;
                default:
                  return null
              }
            }(e, n) : function (e, t) {
              if ($n) return "compositionend" === e || !Mn && zn(e, t) ? (e = en(), Jt = Qt = Yt = null, $n = !1, e) : null;
              switch (e) {
                case"paste":
                default:
                  return null;
                case"keypress":
                  if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                  }
                  return null;
                case"compositionend":
                  return Tn && "ko" !== t.locale ? null : t.data
              }
            }(e, n)) && 0 < (r = Ur(r, "onBeforeInput")).length && (o = new xn("onBeforeInput", "beforeinput", null, n, o), i.push({
              event: o,
              listeners: r
            }), o.data = b)
          }
          Or(i, t)
        }))
      }
      
      function Vr(e, t, n) {
        return {instance: e, listener: t, currentTarget: n}
      }
      
      function Ur(e, t) {
        for (var n = t + "Capture", r = []; null !== e;) {
          var o = e, a = o.stateNode;
          5 === o.tag && null !== a && (o = a, null != (a = Pe(e, n)) && r.unshift(Vr(e, a, o)), null != (a = Pe(e, t)) && r.push(Vr(e, a, o))), e = e.return
        }
        return r
      }
      
      function qr(e) {
        if (null === e) return null;
        do {
          e = e.return
        } while (e && 5 !== e.tag);
        return e || null
      }
      
      function Kr(e, t, n, r, o) {
        for (var a = t._reactName, i = []; null !== n && n !== r;) {
          var l = n, s = l.alternate, c = l.stateNode;
          if (null !== s && s === r) break;
          5 === l.tag && null !== c && (l = c, o ? null != (s = Pe(n, a)) && i.unshift(Vr(n, s, l)) : o || null != (s = Pe(n, a)) && i.push(Vr(n, s, l))), n = n.return
        }
        0 !== i.length && e.push({event: t, listeners: i})
      }
      
      var Gr = /\r\n?/g, Xr = /\u0000|\uFFFD/g;
      
      function Yr(e) {
        return ("string" == typeof e ? e : "" + e).replace(Gr, "\n").replace(Xr, "")
      }
      
      function Qr(e, t, n) {
        if (t = Yr(t), Yr(e) !== t && n) throw Error(a(425))
      }
      
      function Jr() {
      }
      
      var eo = null, to = null;
      
      function no(e, t) {
        return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
      }
      
      var ro = "function" == typeof setTimeout ? setTimeout : void 0,
        oo = "function" == typeof clearTimeout ? clearTimeout : void 0,
        ao = "function" == typeof Promise ? Promise : void 0,
        io = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== ao ? function (e) {
          return ao.resolve(null).then(e).catch(lo)
        } : ro;
      
      function lo(e) {
        setTimeout((function () {
          throw e
        }))
      }
      
      function so(e, t) {
        var n = t, r = 0;
        do {
          var o = n.nextSibling;
          if (e.removeChild(n), o && 8 === o.nodeType) if ("/$" === (n = o.data)) {
            if (0 === r) return e.removeChild(o), void $t(t);
            r--
          } else "$" !== n && "$?" !== n && "$!" !== n || r++;
          n = o
        } while (n);
        $t(t)
      }
      
      function co(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
          if (8 === t) {
            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
            if ("/$" === t) return null
          }
        }
        return e
      }
      
      function uo(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
              if (0 === t) return e;
              t--
            } else "/$" === n && t++
          }
          e = e.previousSibling
        }
        return null
      }
      
      var fo = Math.random().toString(36).slice(2), po = "__reactFiber$" + fo, mo = "__reactProps$" + fo,
        ho = "__reactContainer$" + fo, vo = "__reactEvents$" + fo, go = "__reactListeners$" + fo,
        bo = "__reactHandles$" + fo;
      
      function yo(e) {
        var t = e[po];
        if (t) return t;
        for (var n = e.parentNode; n;) {
          if (t = n[ho] || n[po]) {
            if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = uo(e); null !== e;) {
              if (n = e[po]) return n;
              e = uo(e)
            }
            return t
          }
          n = (e = n).parentNode
        }
        return null
      }
      
      function xo(e) {
        return !(e = e[po] || e[ho]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
      }
      
      function Co(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(a(33))
      }
      
      function Eo(e) {
        return e[mo] || null
      }
      
      var wo = [], ko = -1;
      
      function Fo(e) {
        return {current: e}
      }
      
      function So(e) {
        0 > ko || (e.current = wo[ko], wo[ko] = null, ko--)
      }
      
      function Ao(e, t) {
        ko++, wo[ko] = e.current, e.current = t
      }
      
      var Do = {}, Zo = Fo(Do), Bo = Fo(!1), jo = Do;
      
      function Po(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Do;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o, a = {};
        for (o in n) a[o] = t[o];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
      }
      
      function Ro(e) {
        return null != e.childContextTypes
      }
      
      function Mo() {
        So(Bo), So(Zo)
      }
      
      function No(e, t, n) {
        if (Zo.current !== Do) throw Error(a(168));
        Ao(Zo, t), Ao(Bo, n)
      }
      
      function _o(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
        for (var o in r = r.getChildContext()) if (!(o in t)) throw Error(a(108, W(e) || "Unknown", o));
        return T({}, n, r)
      }
      
      function To(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Do, jo = Zo.current, Ao(Zo, e), Ao(Bo, Bo.current), !0
      }
      
      function Oo(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(a(169));
        n ? (e = _o(e, t, jo), r.__reactInternalMemoizedMergedChildContext = e, So(Bo), So(Zo), Ao(Zo, e)) : So(Bo), Ao(Bo, n)
      }
      
      var Io = null, zo = !1, Lo = !1;
      
      function $o(e) {
        null === Io ? Io = [e] : Io.push(e)
      }
      
      function Wo() {
        if (!Lo && null !== Io) {
          Lo = !0;
          var e = 0, t = yt;
          try {
            var n = Io;
            for (yt = 1; e < n.length; e++) {
              var r = n[e];
              do {
                r = r(!0)
              } while (null !== r)
            }
            Io = null, zo = !1
          } catch (t) {
            throw null !== Io && (Io = Io.slice(e + 1)), qe(Je, Wo), t
          } finally {
            yt = t, Lo = !1
          }
        }
        return null
      }
      
      var Ho = [], Vo = 0, Uo = null, qo = 0, Ko = [], Go = 0, Xo = null, Yo = 1, Qo = "";
      
      function Jo(e, t) {
        Ho[Vo++] = qo, Ho[Vo++] = Uo, Uo = e, qo = t
      }
      
      function ea(e, t, n) {
        Ko[Go++] = Yo, Ko[Go++] = Qo, Ko[Go++] = Xo, Xo = e;
        var r = Yo;
        e = Qo;
        var o = 32 - it(r) - 1;
        r &= ~(1 << o), n += 1;
        var a = 32 - it(t) + o;
        if (30 < a) {
          var i = o - o % 5;
          a = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Yo = 1 << 32 - it(t) + o | n << o | r, Qo = a + e
        } else Yo = 1 << a | n << o | r, Qo = e
      }
      
      function ta(e) {
        null !== e.return && (Jo(e, 1), ea(e, 1, 0))
      }
      
      function na(e) {
        for (; e === Uo;) Uo = Ho[--Vo], Ho[Vo] = null, qo = Ho[--Vo], Ho[Vo] = null;
        for (; e === Xo;) Xo = Ko[--Go], Ko[Go] = null, Qo = Ko[--Go], Ko[Go] = null, Yo = Ko[--Go], Ko[Go] = null
      }
      
      var ra = null, oa = null, aa = !1, ia = null;
      
      function la(e, t) {
        var n = jc(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
      }
      
      function sa(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ra = e, oa = co(t.firstChild), !0);
          case 6:
            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ra = e, oa = null, !0);
          case 13:
            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Xo ? {
              id: Yo,
              overflow: Qo
            } : null, e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }, (n = jc(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, ra = e, oa = null, !0);
          default:
            return !1
        }
      }
      
      function ca(e) {
        return 0 != (1 & e.mode) && 0 == (128 & e.flags)
      }
      
      function ua(e) {
        if (aa) {
          var t = oa;
          if (t) {
            var n = t;
            if (!sa(e, t)) {
              if (ca(e)) throw Error(a(418));
              t = co(n.nextSibling);
              var r = ra;
              t && sa(e, t) ? la(r, n) : (e.flags = -4097 & e.flags | 2, aa = !1, ra = e)
            }
          } else {
            if (ca(e)) throw Error(a(418));
            e.flags = -4097 & e.flags | 2, aa = !1, ra = e
          }
        }
      }
      
      function da(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
        ra = e
      }
      
      function fa(e) {
        if (e !== ra) return !1;
        if (!aa) return da(e), aa = !0, !1;
        var t;
        if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !no(e.type, e.memoizedProps)), t && (t = oa)) {
          if (ca(e)) throw pa(), Error(a(418));
          for (; t;) la(e, t), t = co(t.nextSibling)
        }
        if (da(e), 13 === e.tag) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
          e:{
            for (e = e.nextSibling, t = 0; e;) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    oa = co(e.nextSibling);
                    break e
                  }
                  t--
                } else "$" !== n && "$!" !== n && "$?" !== n || t++
              }
              e = e.nextSibling
            }
            oa = null
          }
        } else oa = ra ? co(e.stateNode.nextSibling) : null;
        return !0
      }
      
      function pa() {
        for (var e = oa; e;) e = co(e.nextSibling)
      }
      
      function ma() {
        oa = ra = null, aa = !1
      }
      
      function ha(e) {
        null === ia ? ia = [e] : ia.push(e)
      }
      
      var va = x.ReactCurrentBatchConfig;
      
      function ga(e, t) {
        if (e && e.defaultProps) {
          for (var n in t = T({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
          return t
        }
        return t
      }
      
      var ba = Fo(null), ya = null, xa = null, Ca = null;
      
      function Ea() {
        Ca = xa = ya = null
      }
      
      function wa(e) {
        var t = ba.current;
        So(ba), e._currentValue = t
      }
      
      function ka(e, t, n) {
        for (; null !== e;) {
          var r = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
          e = e.return
        }
      }
      
      function Fa(e, t) {
        ya = e, Ca = xa = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (xl = !0), e.firstContext = null)
      }
      
      function Sa(e) {
        var t = e._currentValue;
        if (Ca !== e) if (e = {context: e, memoizedValue: t, next: null}, null === xa) {
          if (null === ya) throw Error(a(308));
          xa = e, ya.dependencies = {lanes: 0, firstContext: e}
        } else xa = xa.next = e;
        return t
      }
      
      var Aa = null;
      
      function Da(e) {
        null === Aa ? Aa = [e] : Aa.push(e)
      }
      
      function Za(e, t, n, r) {
        var o = t.interleaved;
        return null === o ? (n.next = n, Da(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ba(e, r)
      }
      
      function Ba(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
        return 3 === n.tag ? n.stateNode : null
      }
      
      var ja = !1;
      
      function Pa(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {pending: null, interleaved: null, lanes: 0},
          effects: null
        }
      }
      
      function Ra(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects
        })
      }
      
      function Ma(e, t) {
        return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
      }
      
      function Na(e, t, n) {
        var r = e.updateQueue;
        if (null === r) return null;
        if (r = r.shared, 0 != (2 & Ds)) {
          var o = r.pending;
          return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ba(e, n)
        }
        return null === (o = r.interleaved) ? (t.next = t, Da(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ba(e, n)
      }
      
      function _a(e, t, n) {
        if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
          var r = t.lanes;
          n |= r &= e.pendingLanes, t.lanes = n, bt(e, n)
        }
      }
      
      function Ta(e, t) {
        var n = e.updateQueue, r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var o = null, a = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var i = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null
              };
              null === a ? o = a = i : a = a.next = i, n = n.next
            } while (null !== n);
            null === a ? o = a = t : a = a.next = t
          } else o = a = t;
          return n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: a,
            shared: r.shared,
            effects: r.effects
          }, void (e.updateQueue = n)
        }
        null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
      }
      
      function Oa(e, t, n, r) {
        var o = e.updateQueue;
        ja = !1;
        var a = o.firstBaseUpdate, i = o.lastBaseUpdate, l = o.shared.pending;
        if (null !== l) {
          o.shared.pending = null;
          var s = l, c = s.next;
          s.next = null, null === i ? a = c : i.next = c, i = s;
          var u = e.alternate;
          null !== u && (l = (u = u.updateQueue).lastBaseUpdate) !== i && (null === l ? u.firstBaseUpdate = c : l.next = c, u.lastBaseUpdate = s)
        }
        if (null !== a) {
          var d = o.baseState;
          for (i = 0, u = c = s = null, l = a; ;) {
            var f = l.lane, p = l.eventTime;
            if ((r & f) === f) {
              null !== u && (u = u.next = {
                eventTime: p,
                lane: 0,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
              });
              e:{
                var m = e, h = l;
                switch (f = t, p = n, h.tag) {
                  case 1:
                    if ("function" == typeof (m = h.payload)) {
                      d = m.call(p, d, f);
                      break e
                    }
                    d = m;
                    break e;
                  case 3:
                    m.flags = -65537 & m.flags | 128;
                  case 0:
                    if (null == (f = "function" == typeof (m = h.payload) ? m.call(p, d, f) : m)) break e;
                    d = T({}, d, f);
                    break e;
                  case 2:
                    ja = !0
                }
              }
              null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (f = o.effects) ? o.effects = [l] : f.push(l))
            } else p = {
              eventTime: p,
              lane: f,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null
            }, null === u ? (c = u = p, s = d) : u = u.next = p, i |= f;
            if (null === (l = l.next)) {
              if (null === (l = o.shared.pending)) break;
              l = (f = l).next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null
            }
          }
          if (null === u && (s = d), o.baseState = s, o.firstBaseUpdate = c, o.lastBaseUpdate = u, null !== (t = o.shared.interleaved)) {
            o = t;
            do {
              i |= o.lane, o = o.next
            } while (o !== t)
          } else null === a && (o.shared.lanes = 0);
          _s |= i, e.lanes = i, e.memoizedState = d
        }
      }
      
      function Ia(e, t, n) {
        if (e = t.effects, t.effects = null, null !== e) for (t = 0; t < e.length; t++) {
          var r = e[t], o = r.callback;
          if (null !== o) {
            if (r.callback = null, r = n, "function" != typeof o) throw Error(a(191, o));
            o.call(r)
          }
        }
      }
      
      var za = (new r.Component).refs;
      
      function La(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : T({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
      }
      
      var $a = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && $e(e) === e
        }, enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = ec(), o = tc(e), a = Ma(r, o);
          a.payload = t, null != n && (a.callback = n), null !== (t = Na(e, a, o)) && (nc(t, e, o, r), _a(t, e, o))
        }, enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = ec(), o = tc(e), a = Ma(r, o);
          a.tag = 1, a.payload = t, null != n && (a.callback = n), null !== (t = Na(e, a, o)) && (nc(t, e, o, r), _a(t, e, o))
        }, enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = ec(), r = tc(e), o = Ma(n, r);
          o.tag = 2, null != t && (o.callback = t), null !== (t = Na(e, o, r)) && (nc(t, e, r, n), _a(t, e, r))
        }
      };
      
      function Wa(e, t, n, r, o, a, i) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !(t.prototype && t.prototype.isPureReactComponent && sr(n, r) && sr(o, a))
      }
      
      function Ha(e, t, n) {
        var r = !1, o = Do, a = t.contextType;
        return "object" == typeof a && null !== a ? a = Sa(a) : (o = Ro(t) ? jo : Zo.current, a = (r = null != (r = t.contextTypes)) ? Po(e, o) : Do), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = $a, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), t
      }
      
      function Va(e, t, n, r) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && $a.enqueueReplaceState(t, t.state, null)
      }
      
      function Ua(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = za, Pa(e);
        var a = t.contextType;
        "object" == typeof a && null !== a ? o.context = Sa(a) : (a = Ro(t) ? jo : Zo.current, o.context = Po(e, a)), o.state = e.memoizedState, "function" == typeof (a = t.getDerivedStateFromProps) && (La(e, t, a, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && $a.enqueueReplaceState(o, o.state, null), Oa(e, n, o, r), o.state = e.memoizedState), "function" == typeof o.componentDidMount && (e.flags |= 4194308)
      }
      
      function qa(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
          if (n._owner) {
            if (n = n._owner) {
              if (1 !== n.tag) throw Error(a(309));
              var r = n.stateNode
            }
            if (!r) throw Error(a(147, e));
            var o = r, i = "" + e;
            return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function (e) {
              var t = o.refs;
              t === za && (t = o.refs = {}), null === e ? delete t[i] : t[i] = e
            }, t._stringRef = i, t)
          }
          if ("string" != typeof e) throw Error(a(284));
          if (!n._owner) throw Error(a(290, e))
        }
        return e
      }
      
      function Ka(e, t) {
        throw e = Object.prototype.toString.call(t), Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
      }
      
      function Ga(e) {
        return (0, e._init)(e._payload)
      }
      
      function Xa(e) {
        function t(t, n) {
          if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
          }
        }
        
        function n(n, r) {
          if (!e) return null;
          for (; null !== r;) t(n, r), r = r.sibling;
          return null
        }
        
        function r(e, t) {
          for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
          return e
        }
        
        function o(e, t) {
          return (e = Rc(e, t)).index = 0, e.sibling = null, e
        }
        
        function i(t, n, r) {
          return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
        }
        
        function l(t) {
          return e && null === t.alternate && (t.flags |= 2), t
        }
        
        function s(e, t, n, r) {
          return null === t || 6 !== t.tag ? ((t = Tc(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
        }
        
        function c(e, t, n, r) {
          var a = n.type;
          return a === w ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" == typeof a && null !== a && a.$$typeof === P && Ga(a) === t.type) ? ((r = o(t, n.props)).ref = qa(e, t, n), r.return = e, r) : ((r = Mc(n.type, n.key, n.props, null, e.mode, r)).ref = qa(e, t, n), r.return = e, r)
        }
        
        function u(e, t, n, r) {
          return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Oc(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
        }
        
        function d(e, t, n, r, a) {
          return null === t || 7 !== t.tag ? ((t = Nc(n, e.mode, r, a)).return = e, t) : ((t = o(t, n)).return = e, t)
        }
        
        function f(e, t, n) {
          if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = Tc("" + t, e.mode, n)).return = e, t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case C:
                return (n = Mc(t.type, t.key, t.props, null, e.mode, n)).ref = qa(e, null, t), n.return = e, n;
              case E:
                return (t = Oc(t, e.mode, n)).return = e, t;
              case P:
                return f(e, (0, t._init)(t._payload), n)
            }
            if (te(t) || N(t)) return (t = Nc(t, e.mode, n, null)).return = e, t;
            Ka(e, t)
          }
          return null
        }
        
        function p(e, t, n, r) {
          var o = null !== t ? t.key : null;
          if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== o ? null : s(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case C:
                return n.key === o ? c(e, t, n, r) : null;
              case E:
                return n.key === o ? u(e, t, n, r) : null;
              case P:
                return p(e, t, (o = n._init)(n._payload), r)
            }
            if (te(n) || N(n)) return null !== o ? null : d(e, t, n, r, null);
            Ka(e, n)
          }
          return null
        }
        
        function m(e, t, n, r, o) {
          if ("string" == typeof r && "" !== r || "number" == typeof r) return s(t, e = e.get(n) || null, "" + r, o);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case C:
                return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
              case E:
                return u(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
              case P:
                return m(e, t, n, (0, r._init)(r._payload), o)
            }
            if (te(r) || N(r)) return d(t, e = e.get(n) || null, r, o, null);
            Ka(t, r)
          }
          return null
        }
        
        function h(o, a, l, s) {
          for (var c = null, u = null, d = a, h = a = 0, v = null; null !== d && h < l.length; h++) {
            d.index > h ? (v = d, d = null) : v = d.sibling;
            var g = p(o, d, l[h], s);
            if (null === g) {
              null === d && (d = v);
              break
            }
            e && d && null === g.alternate && t(o, d), a = i(g, a, h), null === u ? c = g : u.sibling = g, u = g, d = v
          }
          if (h === l.length) return n(o, d), aa && Jo(o, h), c;
          if (null === d) {
            for (; h < l.length; h++) null !== (d = f(o, l[h], s)) && (a = i(d, a, h), null === u ? c = d : u.sibling = d, u = d);
            return aa && Jo(o, h), c
          }
          for (d = r(o, d); h < l.length; h++) null !== (v = m(d, o, h, l[h], s)) && (e && null !== v.alternate && d.delete(null === v.key ? h : v.key), a = i(v, a, h), null === u ? c = v : u.sibling = v, u = v);
          return e && d.forEach((function (e) {
            return t(o, e)
          })), aa && Jo(o, h), c
        }
        
        function v(o, l, s, c) {
          var u = N(s);
          if ("function" != typeof u) throw Error(a(150));
          if (null == (s = u.call(s))) throw Error(a(151));
          for (var d = u = null, h = l, v = l = 0, g = null, b = s.next(); null !== h && !b.done; v++, b = s.next()) {
            h.index > v ? (g = h, h = null) : g = h.sibling;
            var y = p(o, h, b.value, c);
            if (null === y) {
              null === h && (h = g);
              break
            }
            e && h && null === y.alternate && t(o, h), l = i(y, l, v), null === d ? u = y : d.sibling = y, d = y, h = g
          }
          if (b.done) return n(o, h), aa && Jo(o, v), u;
          if (null === h) {
            for (; !b.done; v++, b = s.next()) null !== (b = f(o, b.value, c)) && (l = i(b, l, v), null === d ? u = b : d.sibling = b, d = b);
            return aa && Jo(o, v), u
          }
          for (h = r(o, h); !b.done; v++, b = s.next()) null !== (b = m(h, o, v, b.value, c)) && (e && null !== b.alternate && h.delete(null === b.key ? v : b.key), l = i(b, l, v), null === d ? u = b : d.sibling = b, d = b);
          return e && h.forEach((function (e) {
            return t(o, e)
          })), aa && Jo(o, v), u
        }
        
        return function e(r, a, i, s) {
          if ("object" == typeof i && null !== i && i.type === w && null === i.key && (i = i.props.children), "object" == typeof i && null !== i) {
            switch (i.$$typeof) {
              case C:
                e:{
                  for (var c = i.key, u = a; null !== u;) {
                    if (u.key === c) {
                      if ((c = i.type) === w) {
                        if (7 === u.tag) {
                          n(r, u.sibling), (a = o(u, i.props.children)).return = r, r = a;
                          break e
                        }
                      } else if (u.elementType === c || "object" == typeof c && null !== c && c.$$typeof === P && Ga(c) === u.type) {
                        n(r, u.sibling), (a = o(u, i.props)).ref = qa(r, u, i), a.return = r, r = a;
                        break e
                      }
                      n(r, u);
                      break
                    }
                    t(r, u), u = u.sibling
                  }
                  i.type === w ? ((a = Nc(i.props.children, r.mode, s, i.key)).return = r, r = a) : ((s = Mc(i.type, i.key, i.props, null, r.mode, s)).ref = qa(r, a, i), s.return = r, r = s)
                }
                return l(r);
              case E:
                e:{
                  for (u = i.key; null !== a;) {
                    if (a.key === u) {
                      if (4 === a.tag && a.stateNode.containerInfo === i.containerInfo && a.stateNode.implementation === i.implementation) {
                        n(r, a.sibling), (a = o(a, i.children || [])).return = r, r = a;
                        break e
                      }
                      n(r, a);
                      break
                    }
                    t(r, a), a = a.sibling
                  }
                  (a = Oc(i, r.mode, s)).return = r, r = a
                }
                return l(r);
              case P:
                return e(r, a, (u = i._init)(i._payload), s)
            }
            if (te(i)) return h(r, a, i, s);
            if (N(i)) return v(r, a, i, s);
            Ka(r, i)
          }
          return "string" == typeof i && "" !== i || "number" == typeof i ? (i = "" + i, null !== a && 6 === a.tag ? (n(r, a.sibling), (a = o(a, i)).return = r, r = a) : (n(r, a), (a = Tc(i, r.mode, s)).return = r, r = a), l(r)) : n(r, a)
        }
      }
      
      var Ya = Xa(!0), Qa = Xa(!1), Ja = {}, ei = Fo(Ja), ti = Fo(Ja), ni = Fo(Ja);
      
      function ri(e) {
        if (e === Ja) throw Error(a(174));
        return e
      }
      
      function oi(e, t) {
        switch (Ao(ni, t), Ao(ti, e), Ao(ei, Ja), e = t.nodeType) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
            break;
          default:
            t = se(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
        }
        So(ei), Ao(ei, t)
      }
      
      function ai() {
        So(ei), So(ti), So(ni)
      }
      
      function ii(e) {
        ri(ni.current);
        var t = ri(ei.current), n = se(t, e.type);
        t !== n && (Ao(ti, e), Ao(ei, n))
      }
      
      function li(e) {
        ti.current === e && (So(ei), So(ti))
      }
      
      var si = Fo(0);
      
      function ci(e) {
        for (var t = e; null !== t;) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (128 & t.flags)) return t
          } else if (null !== t.child) {
            t.child.return = t, t = t.child;
            continue
          }
          if (t === e) break;
          for (; null === t.sibling;) {
            if (null === t.return || t.return === e) return null;
            t = t.return
          }
          t.sibling.return = t.return, t = t.sibling
        }
        return null
      }
      
      var ui = [];
      
      function di() {
        for (var e = 0; e < ui.length; e++) ui[e]._workInProgressVersionPrimary = null;
        ui.length = 0
      }
      
      var fi = x.ReactCurrentDispatcher, pi = x.ReactCurrentBatchConfig, mi = 0, hi = null, vi = null, gi = null,
        bi = !1, yi = !1, xi = 0, Ci = 0;
      
      function Ei() {
        throw Error(a(321))
      }
      
      function wi(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!lr(e[n], t[n])) return !1;
        return !0
      }
      
      function ki(e, t, n, r, o, i) {
        if (mi = i, hi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fi.current = null === e || null === e.memoizedState ? ll : sl, e = n(r, o), yi) {
          i = 0;
          do {
            if (yi = !1, xi = 0, 25 <= i) throw Error(a(301));
            i += 1, gi = vi = null, t.updateQueue = null, fi.current = cl, e = n(r, o)
          } while (yi)
        }
        if (fi.current = il, t = null !== vi && null !== vi.next, mi = 0, gi = vi = hi = null, bi = !1, t) throw Error(a(300));
        return e
      }
      
      function Fi() {
        var e = 0 !== xi;
        return xi = 0, e
      }
      
      function Si() {
        var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
        return null === gi ? hi.memoizedState = gi = e : gi = gi.next = e, gi
      }
      
      function Ai() {
        if (null === vi) {
          var e = hi.alternate;
          e = null !== e ? e.memoizedState : null
        } else e = vi.next;
        var t = null === gi ? hi.memoizedState : gi.next;
        if (null !== t) gi = t, vi = e; else {
          if (null === e) throw Error(a(310));
          e = {
            memoizedState: (vi = e).memoizedState,
            baseState: vi.baseState,
            baseQueue: vi.baseQueue,
            queue: vi.queue,
            next: null
          }, null === gi ? hi.memoizedState = gi = e : gi = gi.next = e
        }
        return gi
      }
      
      function Di(e, t) {
        return "function" == typeof t ? t(e) : t
      }
      
      function Zi(e) {
        var t = Ai(), n = t.queue;
        if (null === n) throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = vi, o = r.baseQueue, i = n.pending;
        if (null !== i) {
          if (null !== o) {
            var l = o.next;
            o.next = i.next, i.next = l
          }
          r.baseQueue = o = i, n.pending = null
        }
        if (null !== o) {
          i = o.next, r = r.baseState;
          var s = l = null, c = null, u = i;
          do {
            var d = u.lane;
            if ((mi & d) === d) null !== c && (c = c.next = {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action); else {
              var f = {lane: d, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null};
              null === c ? (s = c = f, l = r) : c = c.next = f, hi.lanes |= d, _s |= d
            }
            u = u.next
          } while (null !== u && u !== i);
          null === c ? l = r : c.next = s, lr(r, t.memoizedState) || (xl = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = c, n.lastRenderedState = r
        }
        if (null !== (e = n.interleaved)) {
          o = e;
          do {
            i = o.lane, hi.lanes |= i, _s |= i, o = o.next
          } while (o !== e)
        } else null === o && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
      }
      
      function Bi(e) {
        var t = Ai(), n = t.queue;
        if (null === n) throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, i = t.memoizedState;
        if (null !== o) {
          n.pending = null;
          var l = o = o.next;
          do {
            i = e(i, l.action), l = l.next
          } while (l !== o);
          lr(i, t.memoizedState) || (xl = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
        }
        return [i, r]
      }
      
      function ji() {
      }
      
      function Pi(e, t) {
        var n = hi, r = Ai(), o = t(), i = !lr(r.memoizedState, o);
        if (i && (r.memoizedState = o, xl = !0), r = r.queue, Hi(Ni.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== gi && 1 & gi.memoizedState.tag) {
          if (n.flags |= 2048, Ii(9, Mi.bind(null, n, r, o, t), void 0, null), null === Zs) throw Error(a(349));
          0 != (30 & mi) || Ri(n, t, o)
        }
        return o
      }
      
      function Ri(e, t, n) {
        e.flags |= 16384, e = {getSnapshot: t, value: n}, null === (t = hi.updateQueue) ? (t = {
          lastEffect: null,
          stores: null
        }, hi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
      }
      
      function Mi(e, t, n, r) {
        t.value = n, t.getSnapshot = r, _i(t) && Ti(e)
      }
      
      function Ni(e, t, n) {
        return n((function () {
          _i(t) && Ti(e)
        }))
      }
      
      function _i(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !lr(e, n)
        } catch (e) {
          return !0
        }
      }
      
      function Ti(e) {
        var t = Ba(e, 1);
        null !== t && nc(t, e, 1, -1)
      }
      
      function Oi(e) {
        var t = Si();
        return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Di,
          lastRenderedState: e
        }, t.queue = e, e = e.dispatch = nl.bind(null, hi, e), [t.memoizedState, e]
      }
      
      function Ii(e, t, n, r) {
        return e = {
          tag: e,
          create: t,
          destroy: n,
          deps: r,
          next: null
        }, null === (t = hi.updateQueue) ? (t = {
          lastEffect: null,
          stores: null
        }, hi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
      }
      
      function zi() {
        return Ai().memoizedState
      }
      
      function Li(e, t, n, r) {
        var o = Si();
        hi.flags |= e, o.memoizedState = Ii(1 | t, n, void 0, void 0 === r ? null : r)
      }
      
      function $i(e, t, n, r) {
        var o = Ai();
        r = void 0 === r ? null : r;
        var a = void 0;
        if (null !== vi) {
          var i = vi.memoizedState;
          if (a = i.destroy, null !== r && wi(r, i.deps)) return void (o.memoizedState = Ii(t, n, a, r))
        }
        hi.flags |= e, o.memoizedState = Ii(1 | t, n, a, r)
      }
      
      function Wi(e, t) {
        return Li(8390656, 8, e, t)
      }
      
      function Hi(e, t) {
        return $i(2048, 8, e, t)
      }
      
      function Vi(e, t) {
        return $i(4, 2, e, t)
      }
      
      function Ui(e, t) {
        return $i(4, 4, e, t)
      }
      
      function qi(e, t) {
        return "function" == typeof t ? (e = e(), t(e), function () {
          t(null)
        }) : null != t ? (e = e(), t.current = e, function () {
          t.current = null
        }) : void 0
      }
      
      function Ki(e, t, n) {
        return n = null != n ? n.concat([e]) : null, $i(4, 4, qi.bind(null, t, e), n)
      }
      
      function Gi() {
      }
      
      function Xi(e, t) {
        var n = Ai();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && wi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
      }
      
      function Yi(e, t) {
        var n = Ai();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && wi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
      }
      
      function Qi(e, t, n) {
        return 0 == (21 & mi) ? (e.baseState && (e.baseState = !1, xl = !0), e.memoizedState = n) : (lr(n, t) || (n = ht(), hi.lanes |= n, _s |= n, e.baseState = !0), t)
      }
      
      function Ji(e, t) {
        var n = yt;
        yt = 0 !== n && 4 > n ? n : 4, e(!0);
        var r = pi.transition;
        pi.transition = {};
        try {
          e(!1), t()
        } finally {
          yt = n, pi.transition = r
        }
      }
      
      function el() {
        return Ai().memoizedState
      }
      
      function tl(e, t, n) {
        var r = tc(e);
        n = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, rl(e) ? ol(t, n) : null !== (n = Za(e, t, n, r)) && (nc(n, e, r, ec()), al(n, t, r))
      }
      
      function nl(e, t, n) {
        var r = tc(e), o = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
        if (rl(e)) ol(t, o); else {
          var a = e.alternate;
          if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
            var i = t.lastRenderedState, l = a(i, n);
            if (o.hasEagerState = !0, o.eagerState = l, lr(l, i)) {
              var s = t.interleaved;
              return null === s ? (o.next = o, Da(t)) : (o.next = s.next, s.next = o), void (t.interleaved = o)
            }
          } catch (e) {
          }
          null !== (n = Za(e, t, o, r)) && (nc(n, e, r, o = ec()), al(n, t, r))
        }
      }
      
      function rl(e) {
        var t = e.alternate;
        return e === hi || null !== t && t === hi
      }
      
      function ol(e, t) {
        yi = bi = !0;
        var n = e.pending;
        null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
      }
      
      function al(e, t, n) {
        if (0 != (4194240 & n)) {
          var r = t.lanes;
          n |= r &= e.pendingLanes, t.lanes = n, bt(e, n)
        }
      }
      
      var il = {
        readContext: Sa,
        useCallback: Ei,
        useContext: Ei,
        useEffect: Ei,
        useImperativeHandle: Ei,
        useInsertionEffect: Ei,
        useLayoutEffect: Ei,
        useMemo: Ei,
        useReducer: Ei,
        useRef: Ei,
        useState: Ei,
        useDebugValue: Ei,
        useDeferredValue: Ei,
        useTransition: Ei,
        useMutableSource: Ei,
        useSyncExternalStore: Ei,
        useId: Ei,
        unstable_isNewReconciler: !1
      }, ll = {
        readContext: Sa, useCallback: function (e, t) {
          return Si().memoizedState = [e, void 0 === t ? null : t], e
        }, useContext: Sa, useEffect: Wi, useImperativeHandle: function (e, t, n) {
          return n = null != n ? n.concat([e]) : null, Li(4194308, 4, qi.bind(null, t, e), n)
        }, useLayoutEffect: function (e, t) {
          return Li(4194308, 4, e, t)
        }, useInsertionEffect: function (e, t) {
          return Li(4, 2, e, t)
        }, useMemo: function (e, t) {
          var n = Si();
          return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
        }, useReducer: function (e, t, n) {
          var r = Si();
          return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
          }, r.queue = e, e = e.dispatch = tl.bind(null, hi, e), [r.memoizedState, e]
        }, useRef: function (e) {
          return e = {current: e}, Si().memoizedState = e
        }, useState: Oi, useDebugValue: Gi, useDeferredValue: function (e) {
          return Si().memoizedState = e
        }, useTransition: function () {
          var e = Oi(!1), t = e[0];
          return e = Ji.bind(null, e[1]), Si().memoizedState = e, [t, e]
        }, useMutableSource: function () {
        }, useSyncExternalStore: function (e, t, n) {
          var r = hi, o = Si();
          if (aa) {
            if (void 0 === n) throw Error(a(407));
            n = n()
          } else {
            if (n = t(), null === Zs) throw Error(a(349));
            0 != (30 & mi) || Ri(r, t, n)
          }
          o.memoizedState = n;
          var i = {value: n, getSnapshot: t};
          return o.queue = i, Wi(Ni.bind(null, r, i, e), [e]), r.flags |= 2048, Ii(9, Mi.bind(null, r, i, n, t), void 0, null), n
        }, useId: function () {
          var e = Si(), t = Zs.identifierPrefix;
          if (aa) {
            var n = Qo;
            t = ":" + t + "R" + (n = (Yo & ~(1 << 32 - it(Yo) - 1)).toString(32) + n), 0 < (n = xi++) && (t += "H" + n.toString(32)), t += ":"
          } else t = ":" + t + "r" + (n = Ci++).toString(32) + ":";
          return e.memoizedState = t
        }, unstable_isNewReconciler: !1
      }, sl = {
        readContext: Sa,
        useCallback: Xi,
        useContext: Sa,
        useEffect: Hi,
        useImperativeHandle: Ki,
        useInsertionEffect: Vi,
        useLayoutEffect: Ui,
        useMemo: Yi,
        useReducer: Zi,
        useRef: zi,
        useState: function () {
          return Zi(Di)
        },
        useDebugValue: Gi,
        useDeferredValue: function (e) {
          return Qi(Ai(), vi.memoizedState, e)
        },
        useTransition: function () {
          return [Zi(Di)[0], Ai().memoizedState]
        },
        useMutableSource: ji,
        useSyncExternalStore: Pi,
        useId: el,
        unstable_isNewReconciler: !1
      }, cl = {
        readContext: Sa,
        useCallback: Xi,
        useContext: Sa,
        useEffect: Hi,
        useImperativeHandle: Ki,
        useInsertionEffect: Vi,
        useLayoutEffect: Ui,
        useMemo: Yi,
        useReducer: Bi,
        useRef: zi,
        useState: function () {
          return Bi(Di)
        },
        useDebugValue: Gi,
        useDeferredValue: function (e) {
          var t = Ai();
          return null === vi ? t.memoizedState = e : Qi(t, vi.memoizedState, e)
        },
        useTransition: function () {
          return [Bi(Di)[0], Ai().memoizedState]
        },
        useMutableSource: ji,
        useSyncExternalStore: Pi,
        useId: el,
        unstable_isNewReconciler: !1
      };
      
      function ul(e, t) {
        try {
          var n = "", r = t;
          do {
            n += L(r), r = r.return
          } while (r);
          var o = n
        } catch (e) {
          o = "\nError generating stack: " + e.message + "\n" + e.stack
        }
        return {value: e, source: t, stack: o, digest: null}
      }
      
      function dl(e, t, n) {
        return {value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null}
      }
      
      function fl(e, t) {
        try {
          console.error(t.value)
        } catch (e) {
          setTimeout((function () {
            throw e
          }))
        }
      }
      
      var pl = "function" == typeof WeakMap ? WeakMap : Map;
      
      function ml(e, t, n) {
        (n = Ma(-1, n)).tag = 3, n.payload = {element: null};
        var r = t.value;
        return n.callback = function () {
          Hs || (Hs = !0, Vs = r), fl(0, t)
        }, n
      }
      
      function hl(e, t, n) {
        (n = Ma(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
          var o = t.value;
          n.payload = function () {
            return r(o)
          }, n.callback = function () {
            fl(0, t)
          }
        }
        var a = e.stateNode;
        return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function () {
          fl(0, t), "function" != typeof r && (null === Us ? Us = new Set([this]) : Us.add(this));
          var e = t.stack;
          this.componentDidCatch(t.value, {componentStack: null !== e ? e : ""})
        }), n
      }
      
      function vl(e, t, n) {
        var r = e.pingCache;
        if (null === r) {
          r = e.pingCache = new pl;
          var o = new Set;
          r.set(t, o)
        } else void 0 === (o = r.get(t)) && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = Fc.bind(null, e, t, n), t.then(e, e))
      }
      
      function gl(e) {
        do {
          var t;
          if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
          e = e.return
        } while (null !== e);
        return null
      }
      
      function bl(e, t, n, r, o) {
        return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Ma(-1, 1)).tag = 2, Na(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e)
      }
      
      var yl = x.ReactCurrentOwner, xl = !1;
      
      function Cl(e, t, n, r) {
        t.child = null === e ? Qa(t, null, n, r) : Ya(t, e.child, n, r)
      }
      
      function El(e, t, n, r, o) {
        n = n.render;
        var a = t.ref;
        return Fa(t, o), r = ki(e, t, n, r, a, o), n = Fi(), null === e || xl ? (aa && n && ta(t), t.flags |= 1, Cl(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Hl(e, t, o))
      }
      
      function wl(e, t, n, r, o) {
        if (null === e) {
          var a = n.type;
          return "function" != typeof a || Pc(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Mc(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, kl(e, t, a, r, o))
        }
        if (a = e.child, 0 == (e.lanes & o)) {
          var i = a.memoizedProps;
          if ((n = null !== (n = n.compare) ? n : sr)(i, r) && e.ref === t.ref) return Hl(e, t, o)
        }
        return t.flags |= 1, (e = Rc(a, r)).ref = t.ref, e.return = t, t.child = e
      }
      
      function kl(e, t, n, r, o) {
        if (null !== e) {
          var a = e.memoizedProps;
          if (sr(a, r) && e.ref === t.ref) {
            if (xl = !1, t.pendingProps = r = a, 0 == (e.lanes & o)) return t.lanes = e.lanes, Hl(e, t, o);
            0 != (131072 & e.flags) && (xl = !0)
          }
        }
        return Al(e, t, n, r, o)
      }
      
      function Fl(e, t, n) {
        var r = t.pendingProps, o = r.children, a = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode) if (0 == (1 & t.mode)) t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, Ao(Rs, Ps), Ps |= n; else {
          if (0 == (1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }, t.updateQueue = null, Ao(Rs, Ps), Ps |= e, null;
          t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
          }, r = null !== a ? a.baseLanes : n, Ao(Rs, Ps), Ps |= r
        } else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Ao(Rs, Ps), Ps |= r;
        return Cl(e, t, o, n), t.child
      }
      
      function Sl(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
      }
      
      function Al(e, t, n, r, o) {
        var a = Ro(n) ? jo : Zo.current;
        return a = Po(t, a), Fa(t, o), n = ki(e, t, n, r, a, o), r = Fi(), null === e || xl ? (aa && r && ta(t), t.flags |= 1, Cl(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Hl(e, t, o))
      }
      
      function Dl(e, t, n, r, o) {
        if (Ro(n)) {
          var a = !0;
          To(t)
        } else a = !1;
        if (Fa(t, o), null === t.stateNode) Wl(e, t), Ha(t, n, r), Ua(t, n, r, o), r = !0; else if (null === e) {
          var i = t.stateNode, l = t.memoizedProps;
          i.props = l;
          var s = i.context, c = n.contextType;
          c = "object" == typeof c && null !== c ? Sa(c) : Po(t, c = Ro(n) ? jo : Zo.current);
          var u = n.getDerivedStateFromProps,
            d = "function" == typeof u || "function" == typeof i.getSnapshotBeforeUpdate;
          d || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== r || s !== c) && Va(t, i, r, c), ja = !1;
          var f = t.memoizedState;
          i.state = f, Oa(t, r, i, o), s = t.memoizedState, l !== r || f !== s || Bo.current || ja ? ("function" == typeof u && (La(t, n, u, r), s = t.memoizedState), (l = ja || Wa(t, n, l, r, f, s, c)) ? (d || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = l) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
        } else {
          i = t.stateNode, Ra(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : ga(t.type, l), i.props = c, d = t.pendingProps, f = i.context, s = "object" == typeof (s = n.contextType) && null !== s ? Sa(s) : Po(t, s = Ro(n) ? jo : Zo.current);
          var p = n.getDerivedStateFromProps;
          (u = "function" == typeof p || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== d || f !== s) && Va(t, i, r, s), ja = !1, f = t.memoizedState, i.state = f, Oa(t, r, i, o);
          var m = t.memoizedState;
          l !== d || f !== m || Bo.current || ja ? ("function" == typeof p && (La(t, n, p, r), m = t.memoizedState), (c = ja || Wa(t, n, c, r, f, m, s) || !1) ? (u || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, m, s), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, m, s)), "function" == typeof i.componentDidUpdate && (t.flags |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), i.props = r, i.state = m, i.context = s, r = c) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return Zl(e, t, n, r, a, o)
      }
      
      function Zl(e, t, n, r, o, a) {
        Sl(e, t);
        var i = 0 != (128 & t.flags);
        if (!r && !i) return o && Oo(t, n, !1), Hl(e, t, a);
        r = t.stateNode, yl.current = t;
        var l = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return t.flags |= 1, null !== e && i ? (t.child = Ya(t, e.child, null, a), t.child = Ya(t, null, l, a)) : Cl(e, t, l, a), t.memoizedState = r.state, o && Oo(t, n, !0), t.child
      }
      
      function Bl(e) {
        var t = e.stateNode;
        t.pendingContext ? No(0, t.pendingContext, t.pendingContext !== t.context) : t.context && No(0, t.context, !1), oi(e, t.containerInfo)
      }
      
      function jl(e, t, n, r, o) {
        return ma(), ha(o), t.flags |= 256, Cl(e, t, n, r), t.child
      }
      
      var Pl, Rl, Ml, Nl = {dehydrated: null, treeContext: null, retryLane: 0};
      
      function _l(e) {
        return {baseLanes: e, cachePool: null, transitions: null}
      }
      
      function Tl(e, t, n) {
        var r, o = t.pendingProps, i = si.current, l = !1, s = 0 != (128 & t.flags);
        if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)), r ? (l = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), Ao(si, 1 & i), null === e) return ua(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (s = o.children, e = o.fallback, l ? (o = t.mode, l = t.child, s = {
          mode: "hidden",
          children: s
        }, 0 == (1 & o) && null !== l ? (l.childLanes = 0, l.pendingProps = s) : l = _c(s, o, 0, null), e = Nc(e, o, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = _l(n), t.memoizedState = Nl, e) : Ol(t, s));
        if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated)) return function (e, t, n, r, o, i, l) {
          if (n) return 256 & t.flags ? (t.flags &= -257, Il(e, t, l, r = dl(Error(a(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = _c({
            mode: "visible",
            children: r.children
          }, o, 0, null), (i = Nc(i, o, l, null)).flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, 0 != (1 & t.mode) && Ya(t, e.child, null, l), t.child.memoizedState = _l(l), t.memoizedState = Nl, i);
          if (0 == (1 & t.mode)) return Il(e, t, l, null);
          if ("$!" === o.data) {
            if (r = o.nextSibling && o.nextSibling.dataset) var s = r.dgst;
            return r = s, Il(e, t, l, r = dl(i = Error(a(419)), r, void 0))
          }
          if (s = 0 != (l & e.childLanes), xl || s) {
            if (null !== (r = Zs)) {
              switch (l & -l) {
                case 4:
                  o = 2;
                  break;
                case 16:
                  o = 8;
                  break;
                case 64:
                case 128:
                case 256:
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
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  o = 32;
                  break;
                case 536870912:
                  o = 268435456;
                  break;
                default:
                  o = 0
              }
              0 !== (o = 0 != (o & (r.suspendedLanes | l)) ? 0 : o) && o !== i.retryLane && (i.retryLane = o, Ba(e, o), nc(r, e, o, -1))
            }
            return hc(), Il(e, t, l, r = dl(Error(a(421))))
          }
          return "$?" === o.data ? (t.flags |= 128, t.child = e.child, t = Ac.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, oa = co(o.nextSibling), ra = t, aa = !0, ia = null, null !== e && (Ko[Go++] = Yo, Ko[Go++] = Qo, Ko[Go++] = Xo, Yo = e.id, Qo = e.overflow, Xo = t), (t = Ol(t, r.children)).flags |= 4096, t)
        }(e, t, s, o, r, i, n);
        if (l) {
          l = o.fallback, s = t.mode, r = (i = e.child).sibling;
          var c = {mode: "hidden", children: o.children};
          return 0 == (1 & s) && t.child !== i ? ((o = t.child).childLanes = 0, o.pendingProps = c, t.deletions = null) : (o = Rc(i, c)).subtreeFlags = 14680064 & i.subtreeFlags, null !== r ? l = Rc(r, l) : (l = Nc(l, s, n, null)).flags |= 2, l.return = t, o.return = t, o.sibling = l, t.child = o, o = l, l = t.child, s = null === (s = e.child.memoizedState) ? _l(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
          }, l.memoizedState = s, l.childLanes = e.childLanes & ~n, t.memoizedState = Nl, o
        }
        return e = (l = e.child).sibling, o = Rc(l, {
          mode: "visible",
          children: o.children
        }), 0 == (1 & t.mode) && (o.lanes = n), o.return = t, o.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o
      }
      
      function Ol(e, t) {
        return (t = _c({mode: "visible", children: t}, e.mode, 0, null)).return = e, e.child = t
      }
      
      function Il(e, t, n, r) {
        return null !== r && ha(r), Ya(t, e.child, null, n), (e = Ol(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
      }
      
      function zl(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        null !== r && (r.lanes |= t), ka(e.return, t, n)
      }
      
      function Ll(e, t, n, r, o) {
        var a = e.memoizedState;
        null === a ? e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: o
        } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = o)
      }
      
      function $l(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, a = r.tail;
        if (Cl(e, t, r.children, n), 0 != (2 & (r = si.current))) r = 1 & r | 2, t.flags |= 128; else {
          if (null !== e && 0 != (128 & e.flags)) e:for (e = t.child; null !== e;) {
            if (13 === e.tag) null !== e.memoizedState && zl(e, n, t); else if (19 === e.tag) zl(e, n, t); else if (null !== e.child) {
              e.child.return = e, e = e.child;
              continue
            }
            if (e === t) break e;
            for (; null === e.sibling;) {
              if (null === e.return || e.return === t) break e;
              e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
          }
          r &= 1
        }
        if (Ao(si, r), 0 == (1 & t.mode)) t.memoizedState = null; else switch (o) {
          case"forwards":
            for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === ci(e) && (o = n), n = n.sibling;
            null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ll(t, !1, o, n, a);
            break;
          case"backwards":
            for (n = null, o = t.child, t.child = null; null !== o;) {
              if (null !== (e = o.alternate) && null === ci(e)) {
                t.child = o;
                break
              }
              e = o.sibling, o.sibling = n, n = o, o = e
            }
            Ll(t, !0, n, null, a);
            break;
          case"together":
            Ll(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null
        }
        return t.child
      }
      
      function Wl(e, t) {
        0 == (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
      }
      
      function Hl(e, t, n) {
        if (null !== e && (t.dependencies = e.dependencies), _s |= t.lanes, 0 == (n & t.childLanes)) return null;
        if (null !== e && t.child !== e.child) throw Error(a(153));
        if (null !== t.child) {
          for (n = Rc(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Rc(e, e.pendingProps)).return = t;
          n.sibling = null
        }
        return t.child
      }
      
      function Vl(e, t) {
        if (!aa) switch (e.tailMode) {
          case"hidden":
            t = e.tail;
            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
            null === n ? e.tail = null : n.sibling = null;
            break;
          case"collapsed":
            n = e.tail;
            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
      }
      
      function Ul(e) {
        var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for (var o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o.return = e, o = o.sibling; else for (o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t
      }
      
      function ql(e, t, n) {
        var r = t.pendingProps;
        switch (na(t), t.tag) {
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
            return Ul(t), null;
          case 1:
          case 17:
            return Ro(t.type) && Mo(), Ul(t), null;
          case 3:
            return r = t.stateNode, ai(), So(Bo), So(Zo), di(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fa(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, null !== ia && (ic(ia), ia = null))), Ul(t), null;
          case 5:
            li(t);
            var o = ri(ni.current);
            if (n = t.type, null !== e && null != t.stateNode) Rl(e, t, n, r), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
              if (!r) {
                if (null === t.stateNode) throw Error(a(166));
                return Ul(t), null
              }
              if (e = ri(ei.current), fa(t)) {
                r = t.stateNode, n = t.type;
                var i = t.memoizedProps;
                switch (r[po] = t, r[mo] = i, e = 0 != (1 & t.mode), n) {
                  case"dialog":
                    Ir("cancel", r), Ir("close", r);
                    break;
                  case"iframe":
                  case"object":
                  case"embed":
                    Ir("load", r);
                    break;
                  case"video":
                  case"audio":
                    for (o = 0; o < Nr.length; o++) Ir(Nr[o], r);
                    break;
                  case"source":
                    Ir("error", r);
                    break;
                  case"img":
                  case"image":
                  case"link":
                    Ir("error", r), Ir("load", r);
                    break;
                  case"details":
                    Ir("toggle", r);
                    break;
                  case"input":
                    X(r, i), Ir("invalid", r);
                    break;
                  case"select":
                    r._wrapperState = {wasMultiple: !!i.multiple}, Ir("invalid", r);
                    break;
                  case"textarea":
                    oe(r, i), Ir("invalid", r)
                }
                for (var s in be(n, i), o = null, i) if (i.hasOwnProperty(s)) {
                  var c = i[s];
                  "children" === s ? "string" == typeof c ? r.textContent !== c && (!0 !== i.suppressHydrationWarning && Qr(r.textContent, c, e), o = ["children", c]) : "number" == typeof c && r.textContent !== "" + c && (!0 !== i.suppressHydrationWarning && Qr(r.textContent, c, e), o = ["children", "" + c]) : l.hasOwnProperty(s) && null != c && "onScroll" === s && Ir("scroll", r)
                }
                switch (n) {
                  case"input":
                    U(r), J(r, i, !0);
                    break;
                  case"textarea":
                    U(r), ie(r);
                    break;
                  case"select":
                  case"option":
                    break;
                  default:
                    "function" == typeof i.onClick && (r.onclick = Jr)
                }
                r = o, t.updateQueue = r, null !== r && (t.flags |= 4)
              } else {
                s = 9 === o.nodeType ? o : o.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = le(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = s.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = s.createElement(n, {is: r.is}) : (e = s.createElement(n), "select" === n && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[po] = t, e[mo] = r, Pl(e, t), t.stateNode = e;
                e:{
                  switch (s = ye(n, r), n) {
                    case"dialog":
                      Ir("cancel", e), Ir("close", e), o = r;
                      break;
                    case"iframe":
                    case"object":
                    case"embed":
                      Ir("load", e), o = r;
                      break;
                    case"video":
                    case"audio":
                      for (o = 0; o < Nr.length; o++) Ir(Nr[o], e);
                      o = r;
                      break;
                    case"source":
                      Ir("error", e), o = r;
                      break;
                    case"img":
                    case"image":
                    case"link":
                      Ir("error", e), Ir("load", e), o = r;
                      break;
                    case"details":
                      Ir("toggle", e), o = r;
                      break;
                    case"input":
                      X(e, r), o = G(e, r), Ir("invalid", e);
                      break;
                    case"option":
                    default:
                      o = r;
                      break;
                    case"select":
                      e._wrapperState = {wasMultiple: !!r.multiple}, o = T({}, r, {value: void 0}), Ir("invalid", e);
                      break;
                    case"textarea":
                      oe(e, r), o = re(e, r), Ir("invalid", e)
                  }
                  for (i in be(n, o), c = o) if (c.hasOwnProperty(i)) {
                    var u = c[i];
                    "style" === i ? ve(e, u) : "dangerouslySetInnerHTML" === i ? null != (u = u ? u.__html : void 0) && de(e, u) : "children" === i ? "string" == typeof u ? ("textarea" !== n || "" !== u) && fe(e, u) : "number" == typeof u && fe(e, "" + u) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (l.hasOwnProperty(i) ? null != u && "onScroll" === i && Ir("scroll", e) : null != u && y(e, i, u, s))
                  }
                  switch (n) {
                    case"input":
                      U(e), J(e, r, !1);
                      break;
                    case"textarea":
                      U(e), ie(e);
                      break;
                    case"option":
                      null != r.value && e.setAttribute("value", "" + H(r.value));
                      break;
                    case"select":
                      e.multiple = !!r.multiple, null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof o.onClick && (e.onclick = Jr)
                  }
                  switch (n) {
                    case"button":
                    case"input":
                    case"select":
                    case"textarea":
                      r = !!r.autoFocus;
                      break e;
                    case"img":
                      r = !0;
                      break e;
                    default:
                      r = !1
                  }
                }
                r && (t.flags |= 4)
              }
              null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
            }
            return Ul(t), null;
          case 6:
            if (e && null != t.stateNode) Ml(0, t, e.memoizedProps, r); else {
              if ("string" != typeof r && null === t.stateNode) throw Error(a(166));
              if (n = ri(ni.current), ri(ei.current), fa(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[po] = t, (i = r.nodeValue !== n) && null !== (e = ra)) switch (e.tag) {
                  case 3:
                    Qr(r.nodeValue, n, 0 != (1 & e.mode));
                    break;
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning && Qr(r.nodeValue, n, 0 != (1 & e.mode))
                }
                i && (t.flags |= 4)
              } else (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[po] = t, t.stateNode = r
            }
            return Ul(t), null;
          case 13:
            if (So(si), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
              if (aa && null !== oa && 0 != (1 & t.mode) && 0 == (128 & t.flags)) pa(), ma(), t.flags |= 98560, i = !1; else if (i = fa(t), null !== r && null !== r.dehydrated) {
                if (null === e) {
                  if (!i) throw Error(a(318));
                  if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(a(317));
                  i[po] = t
                } else ma(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                Ul(t), i = !1
              } else null !== ia && (ic(ia), ia = null), i = !0;
              if (!i) return 65536 & t.flags ? t : null
            }
            return 0 != (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 != (1 & t.mode) && (null === e || 0 != (1 & si.current) ? 0 === Ms && (Ms = 3) : hc())), null !== t.updateQueue && (t.flags |= 4), Ul(t), null);
          case 4:
            return ai(), null === e && $r(t.stateNode.containerInfo), Ul(t), null;
          case 10:
            return wa(t.type._context), Ul(t), null;
          case 19:
            if (So(si), null === (i = t.memoizedState)) return Ul(t), null;
            if (r = 0 != (128 & t.flags), null === (s = i.rendering)) if (r) Vl(i, !1); else {
              if (0 !== Ms || null !== e && 0 != (128 & e.flags)) for (e = t.child; null !== e;) {
                if (null !== (s = ci(e))) {
                  for (t.flags |= 128, Vl(i, !1), null !== (r = s.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (i = n).flags &= 14680066, null === (s = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = null === e ? null : {
                    lanes: e.lanes,
                    firstContext: e.firstContext
                  }), n = n.sibling;
                  return Ao(si, 1 & si.current | 2), t.child
                }
                e = e.sibling
              }
              null !== i.tail && Ye() > $s && (t.flags |= 128, r = !0, Vl(i, !1), t.lanes = 4194304)
            } else {
              if (!r) if (null !== (e = ci(s))) {
                if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Vl(i, !0), null === i.tail && "hidden" === i.tailMode && !s.alternate && !aa) return Ul(t), null
              } else 2 * Ye() - i.renderingStartTime > $s && 1073741824 !== n && (t.flags |= 128, r = !0, Vl(i, !1), t.lanes = 4194304);
              i.isBackwards ? (s.sibling = t.child, t.child = s) : (null !== (n = i.last) ? n.sibling = s : t.child = s, i.last = s)
            }
            return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ye(), t.sibling = null, n = si.current, Ao(si, r ? 1 & n | 2 : 1 & n), t) : (Ul(t), null);
          case 22:
          case 23:
            return dc(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 != (1 & t.mode) ? 0 != (1073741824 & Ps) && (Ul(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Ul(t), null;
          case 24:
          case 25:
            return null
        }
        throw Error(a(156, t.tag))
      }
      
      function Kl(e, t) {
        switch (na(t), t.tag) {
          case 1:
            return Ro(t.type) && Mo(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
          case 3:
            return ai(), So(Bo), So(Zo), di(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
          case 5:
            return li(t), null;
          case 13:
            if (So(si), null !== (e = t.memoizedState) && null !== e.dehydrated) {
              if (null === t.alternate) throw Error(a(340));
              ma()
            }
            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
          case 19:
            return So(si), null;
          case 4:
            return ai(), null;
          case 10:
            return wa(t.type._context), null;
          case 22:
          case 23:
            return dc(), null;
          default:
            return null
        }
      }
      
      Pl = function (e, t) {
        for (var n = t.child; null !== n;) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode); else if (4 !== n.tag && null !== n.child) {
            n.child.return = n, n = n.child;
            continue
          }
          if (n === t) break;
          for (; null === n.sibling;) {
            if (null === n.return || n.return === t) return;
            n = n.return
          }
          n.sibling.return = n.return, n = n.sibling
        }
      }, Rl = function (e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
          e = t.stateNode, ri(ei.current);
          var a, i = null;
          switch (n) {
            case"input":
              o = G(e, o), r = G(e, r), i = [];
              break;
            case"select":
              o = T({}, o, {value: void 0}), r = T({}, r, {value: void 0}), i = [];
              break;
            case"textarea":
              o = re(e, o), r = re(e, r), i = [];
              break;
            default:
              "function" != typeof o.onClick && "function" == typeof r.onClick && (e.onclick = Jr)
          }
          for (u in be(n, r), n = null, o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && null != o[u]) if ("style" === u) {
            var s = o[u];
            for (a in s) s.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
          } else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (l.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
          for (u in r) {
            var c = r[u];
            if (s = null != o ? o[u] : void 0, r.hasOwnProperty(u) && c !== s && (null != c || null != s)) if ("style" === u) if (s) {
              for (a in s) !s.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
              for (a in c) c.hasOwnProperty(a) && s[a] !== c[a] && (n || (n = {}), n[a] = c[a])
            } else n || (i || (i = []), i.push(u, n)), n = c; else "dangerouslySetInnerHTML" === u ? (c = c ? c.__html : void 0, s = s ? s.__html : void 0, null != c && s !== c && (i = i || []).push(u, c)) : "children" === u ? "string" != typeof c && "number" != typeof c || (i = i || []).push(u, "" + c) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (l.hasOwnProperty(u) ? (null != c && "onScroll" === u && Ir("scroll", e), i || s === c || (i = [])) : (i = i || []).push(u, c))
          }
          n && (i = i || []).push("style", n);
          var u = i;
          (t.updateQueue = u) && (t.flags |= 4)
        }
      }, Ml = function (e, t, n, r) {
        n !== r && (t.flags |= 4)
      };
      var Gl = !1, Xl = !1, Yl = "function" == typeof WeakSet ? WeakSet : Set, Ql = null;
      
      function Jl(e, t) {
        var n = e.ref;
        if (null !== n) if ("function" == typeof n) try {
          n(null)
        } catch (n) {
          kc(e, t, n)
        } else n.current = null
      }
      
      function es(e, t, n) {
        try {
          n()
        } catch (n) {
          kc(e, t, n)
        }
      }
      
      var ts = !1;
      
      function ns(e, t, n) {
        var r = t.updateQueue;
        if (null !== (r = null !== r ? r.lastEffect : null)) {
          var o = r = r.next;
          do {
            if ((o.tag & e) === e) {
              var a = o.destroy;
              o.destroy = void 0, void 0 !== a && es(t, n, a)
            }
            o = o.next
          } while (o !== r)
        }
      }
      
      function rs(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
          var n = t = t.next;
          do {
            if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r()
            }
            n = n.next
          } while (n !== t)
        }
      }
      
      function os(e) {
        var t = e.ref;
        if (null !== t) {
          var n = e.stateNode;
          e.tag, e = n, "function" == typeof t ? t(e) : t.current = e
        }
      }
      
      function as(e) {
        var t = e.alternate;
        null !== t && (e.alternate = null, as(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[po], delete t[mo], delete t[vo], delete t[go], delete t[bo]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
      }
      
      function is(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
      }
      
      function ls(e) {
        e:for (; ;) {
          for (; null === e.sibling;) {
            if (null === e.return || is(e.return)) return null;
            e = e.return
          }
          for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
            if (2 & e.flags) continue e;
            if (null === e.child || 4 === e.tag) continue e;
            e.child.return = e, e = e.child
          }
          if (!(2 & e.flags)) return e.stateNode
        }
      }
      
      function ss(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Jr)); else if (4 !== r && null !== (e = e.child)) for (ss(e, t, n), e = e.sibling; null !== e;) ss(e, t, n), e = e.sibling
      }
      
      function cs(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (4 !== r && null !== (e = e.child)) for (cs(e, t, n), e = e.sibling; null !== e;) cs(e, t, n), e = e.sibling
      }
      
      var us = null, ds = !1;
      
      function fs(e, t, n) {
        for (n = n.child; null !== n;) ps(e, t, n), n = n.sibling
      }
      
      function ps(e, t, n) {
        if (at && "function" == typeof at.onCommitFiberUnmount) try {
          at.onCommitFiberUnmount(ot, n)
        } catch (e) {
        }
        switch (n.tag) {
          case 5:
            Xl || Jl(n, t);
          case 6:
            var r = us, o = ds;
            us = null, fs(e, t, n), ds = o, null !== (us = r) && (ds ? (e = us, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : us.removeChild(n.stateNode));
            break;
          case 18:
            null !== us && (ds ? (e = us, n = n.stateNode, 8 === e.nodeType ? so(e.parentNode, n) : 1 === e.nodeType && so(e, n), $t(e)) : so(us, n.stateNode));
            break;
          case 4:
            r = us, o = ds, us = n.stateNode.containerInfo, ds = !0, fs(e, t, n), us = r, ds = o;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!Xl && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
              o = r = r.next;
              do {
                var a = o, i = a.destroy;
                a = a.tag, void 0 !== i && (0 != (2 & a) || 0 != (4 & a)) && es(n, t, i), o = o.next
              } while (o !== r)
            }
            fs(e, t, n);
            break;
          case 1:
            if (!Xl && (Jl(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount)) try {
              r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (e) {
              kc(n, t, e)
            }
            fs(e, t, n);
            break;
          case 21:
            fs(e, t, n);
            break;
          case 22:
            1 & n.mode ? (Xl = (r = Xl) || null !== n.memoizedState, fs(e, t, n), Xl = r) : fs(e, t, n);
            break;
          default:
            fs(e, t, n)
        }
      }
      
      function ms(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new Yl), t.forEach((function (t) {
            var r = Dc.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r))
          }))
        }
      }
      
      function hs(e, t) {
        var n = t.deletions;
        if (null !== n) for (var r = 0; r < n.length; r++) {
          var o = n[r];
          try {
            var i = e, l = t, s = l;
            e:for (; null !== s;) {
              switch (s.tag) {
                case 5:
                  us = s.stateNode, ds = !1;
                  break e;
                case 3:
                case 4:
                  us = s.stateNode.containerInfo, ds = !0;
                  break e
              }
              s = s.return
            }
            if (null === us) throw Error(a(160));
            ps(i, l, o), us = null, ds = !1;
            var c = o.alternate;
            null !== c && (c.return = null), o.return = null
          } catch (e) {
            kc(o, t, e)
          }
        }
        if (12854 & t.subtreeFlags) for (t = t.child; null !== t;) vs(t, e), t = t.sibling
      }
      
      function vs(e, t) {
        var n = e.alternate, r = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if (hs(t, e), gs(e), 4 & r) {
              try {
                ns(3, e, e.return), rs(3, e)
              } catch (t) {
                kc(e, e.return, t)
              }
              try {
                ns(5, e, e.return)
              } catch (t) {
                kc(e, e.return, t)
              }
            }
            break;
          case 1:
            hs(t, e), gs(e), 512 & r && null !== n && Jl(n, n.return);
            break;
          case 5:
            if (hs(t, e), gs(e), 512 & r && null !== n && Jl(n, n.return), 32 & e.flags) {
              var o = e.stateNode;
              try {
                fe(o, "")
              } catch (t) {
                kc(e, e.return, t)
              }
            }
            if (4 & r && null != (o = e.stateNode)) {
              var i = e.memoizedProps, l = null !== n ? n.memoizedProps : i, s = e.type, c = e.updateQueue;
              if (e.updateQueue = null, null !== c) try {
                "input" === s && "radio" === i.type && null != i.name && Y(o, i), ye(s, l);
                var u = ye(s, i);
                for (l = 0; l < c.length; l += 2) {
                  var d = c[l], f = c[l + 1];
                  "style" === d ? ve(o, f) : "dangerouslySetInnerHTML" === d ? de(o, f) : "children" === d ? fe(o, f) : y(o, d, f, u)
                }
                switch (s) {
                  case"input":
                    Q(o, i);
                    break;
                  case"textarea":
                    ae(o, i);
                    break;
                  case"select":
                    var p = o._wrapperState.wasMultiple;
                    o._wrapperState.wasMultiple = !!i.multiple;
                    var m = i.value;
                    null != m ? ne(o, !!i.multiple, m, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(o, !!i.multiple, i.defaultValue, !0) : ne(o, !!i.multiple, i.multiple ? [] : "", !1))
                }
                o[mo] = i
              } catch (t) {
                kc(e, e.return, t)
              }
            }
            break;
          case 6:
            if (hs(t, e), gs(e), 4 & r) {
              if (null === e.stateNode) throw Error(a(162));
              o = e.stateNode, i = e.memoizedProps;
              try {
                o.nodeValue = i
              } catch (t) {
                kc(e, e.return, t)
              }
            }
            break;
          case 3:
            if (hs(t, e), gs(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
              $t(t.containerInfo)
            } catch (t) {
              kc(e, e.return, t)
            }
            break;
          case 4:
          default:
            hs(t, e), gs(e);
            break;
          case 13:
            hs(t, e), gs(e), 8192 & (o = e.child).flags && (i = null !== o.memoizedState, o.stateNode.isHidden = i, !i || null !== o.alternate && null !== o.alternate.memoizedState || (Ls = Ye())), 4 & r && ms(e);
            break;
          case 22:
            if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Xl = (u = Xl) || d, hs(t, e), Xl = u) : hs(t, e), gs(e), 8192 & r) {
              if (u = null !== e.memoizedState, (e.stateNode.isHidden = u) && !d && 0 != (1 & e.mode)) for (Ql = e, d = e.child; null !== d;) {
                for (f = Ql = d; null !== Ql;) {
                  switch (m = (p = Ql).child, p.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      ns(4, p, p.return);
                      break;
                    case 1:
                      Jl(p, p.return);
                      var h = p.stateNode;
                      if ("function" == typeof h.componentWillUnmount) {
                        r = p, n = p.return;
                        try {
                          t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount()
                        } catch (e) {
                          kc(r, n, e)
                        }
                      }
                      break;
                    case 5:
                      Jl(p, p.return);
                      break;
                    case 22:
                      if (null !== p.memoizedState) {
                        Cs(f);
                        continue
                      }
                  }
                  null !== m ? (m.return = p, Ql = m) : Cs(f)
                }
                d = d.sibling
              }
              e:for (d = null, f = e; ;) {
                if (5 === f.tag) {
                  if (null === d) {
                    d = f;
                    try {
                      o = f.stateNode, u ? "function" == typeof (i = o.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (s = f.stateNode, l = null != (c = f.memoizedProps.style) && c.hasOwnProperty("display") ? c.display : null, s.style.display = he("display", l))
                    } catch (t) {
                      kc(e, e.return, t)
                    }
                  }
                } else if (6 === f.tag) {
                  if (null === d) try {
                    f.stateNode.nodeValue = u ? "" : f.memoizedProps
                  } catch (t) {
                    kc(e, e.return, t)
                  }
                } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                  f.child.return = f, f = f.child;
                  continue
                }
                if (f === e) break e;
                for (; null === f.sibling;) {
                  if (null === f.return || f.return === e) break e;
                  d === f && (d = null), f = f.return
                }
                d === f && (d = null), f.sibling.return = f.return, f = f.sibling
              }
            }
            break;
          case 19:
            hs(t, e), gs(e), 4 & r && ms(e);
          case 21:
        }
      }
      
      function gs(e) {
        var t = e.flags;
        if (2 & t) {
          try {
            e:{
              for (var n = e.return; null !== n;) {
                if (is(n)) {
                  var r = n;
                  break e
                }
                n = n.return
              }
              throw Error(a(160))
            }
            switch (r.tag) {
              case 5:
                var o = r.stateNode;
                32 & r.flags && (fe(o, ""), r.flags &= -33), cs(e, ls(e), o);
                break;
              case 3:
              case 4:
                var i = r.stateNode.containerInfo;
                ss(e, ls(e), i);
                break;
              default:
                throw Error(a(161))
            }
          } catch (t) {
            kc(e, e.return, t)
          }
          e.flags &= -3
        }
        4096 & t && (e.flags &= -4097)
      }
      
      function bs(e, t, n) {
        Ql = e, ys(e, t, n)
      }
      
      function ys(e, t, n) {
        for (var r = 0 != (1 & e.mode); null !== Ql;) {
          var o = Ql, a = o.child;
          if (22 === o.tag && r) {
            var i = null !== o.memoizedState || Gl;
            if (!i) {
              var l = o.alternate, s = null !== l && null !== l.memoizedState || Xl;
              l = Gl;
              var c = Xl;
              if (Gl = i, (Xl = s) && !c) for (Ql = o; null !== Ql;) s = (i = Ql).child, 22 === i.tag && null !== i.memoizedState ? Es(o) : null !== s ? (s.return = i, Ql = s) : Es(o);
              for (; null !== a;) Ql = a, ys(a, t, n), a = a.sibling;
              Ql = o, Gl = l, Xl = c
            }
            xs(e)
          } else 0 != (8772 & o.subtreeFlags) && null !== a ? (a.return = o, Ql = a) : xs(e)
        }
      }
      
      function xs(e) {
        for (; null !== Ql;) {
          var t = Ql;
          if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
              if (0 != (8772 & t.flags)) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  Xl || rs(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (4 & t.flags && !Xl) if (null === n) r.componentDidMount(); else {
                    var o = t.elementType === t.type ? n.memoizedProps : ga(t.type, n.memoizedProps);
                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                  }
                  var i = t.updateQueue;
                  null !== i && Ia(t, i, r);
                  break;
                case 3:
                  var l = t.updateQueue;
                  if (null !== l) {
                    if (n = null, null !== t.child) switch (t.child.tag) {
                      case 5:
                      case 1:
                        n = t.child.stateNode
                    }
                    Ia(t, l, n)
                  }
                  break;
                case 5:
                  var s = t.stateNode;
                  if (null === n && 4 & t.flags) {
                    n = s;
                    var c = t.memoizedProps;
                    switch (t.type) {
                      case"button":
                      case"input":
                      case"select":
                      case"textarea":
                        c.autoFocus && n.focus();
                        break;
                      case"img":
                        c.src && (n.src = c.src)
                    }
                  }
                  break;
                case 6:
                case 4:
                case 12:
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                case 13:
                  if (null === t.memoizedState) {
                    var u = t.alternate;
                    if (null !== u) {
                      var d = u.memoizedState;
                      if (null !== d) {
                        var f = d.dehydrated;
                        null !== f && $t(f)
                      }
                    }
                  }
                  break;
                default:
                  throw Error(a(163))
              }
              Xl || 512 & t.flags && os(t)
            } catch (e) {
              kc(t, t.return, e)
            }
          }
          if (t === e) {
            Ql = null;
            break
          }
          if (null !== (n = t.sibling)) {
            n.return = t.return, Ql = n;
            break
          }
          Ql = t.return
        }
      }
      
      function Cs(e) {
        for (; null !== Ql;) {
          var t = Ql;
          if (t === e) {
            Ql = null;
            break
          }
          var n = t.sibling;
          if (null !== n) {
            n.return = t.return, Ql = n;
            break
          }
          Ql = t.return
        }
      }
      
      function Es(e) {
        for (; null !== Ql;) {
          var t = Ql;
          try {
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                var n = t.return;
                try {
                  rs(4, t)
                } catch (e) {
                  kc(t, n, e)
                }
                break;
              case 1:
                var r = t.stateNode;
                if ("function" == typeof r.componentDidMount) {
                  var o = t.return;
                  try {
                    r.componentDidMount()
                  } catch (e) {
                    kc(t, o, e)
                  }
                }
                var a = t.return;
                try {
                  os(t)
                } catch (e) {
                  kc(t, a, e)
                }
                break;
              case 5:
                var i = t.return;
                try {
                  os(t)
                } catch (e) {
                  kc(t, i, e)
                }
            }
          } catch (e) {
            kc(t, t.return, e)
          }
          if (t === e) {
            Ql = null;
            break
          }
          var l = t.sibling;
          if (null !== l) {
            l.return = t.return, Ql = l;
            break
          }
          Ql = t.return
        }
      }
      
      var ws, ks = Math.ceil, Fs = x.ReactCurrentDispatcher, Ss = x.ReactCurrentOwner, As = x.ReactCurrentBatchConfig,
        Ds = 0, Zs = null, Bs = null, js = 0, Ps = 0, Rs = Fo(0), Ms = 0, Ns = null, _s = 0, Ts = 0, Os = 0, Is = null,
        zs = null, Ls = 0, $s = 1 / 0, Ws = null, Hs = !1, Vs = null, Us = null, qs = !1, Ks = null, Gs = 0, Xs = 0,
        Ys = null, Qs = -1, Js = 0;
      
      function ec() {
        return 0 != (6 & Ds) ? Ye() : -1 !== Qs ? Qs : Qs = Ye()
      }
      
      function tc(e) {
        return 0 == (1 & e.mode) ? 1 : 0 != (2 & Ds) && 0 !== js ? js & -js : null !== va.transition ? (0 === Js && (Js = ht()), Js) : 0 !== (e = yt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type)
      }
      
      function nc(e, t, n, r) {
        if (50 < Xs) throw Xs = 0, Ys = null, Error(a(185));
        gt(e, n, r), 0 != (2 & Ds) && e === Zs || (e === Zs && (0 == (2 & Ds) && (Ts |= n), 4 === Ms && lc(e, js)), rc(e, r), 1 === n && 0 === Ds && 0 == (1 & t.mode) && ($s = Ye() + 500, zo && Wo()))
      }
      
      function rc(e, t) {
        var n = e.callbackNode;
        !function (e, t) {
          for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
            var i = 31 - it(a), l = 1 << i, s = o[i];
            -1 === s ? 0 != (l & n) && 0 == (l & r) || (o[i] = pt(l, t)) : s <= t && (e.expiredLanes |= l), a &= ~l
          }
        }(e, t);
        var r = ft(e, e === Zs ? js : 0);
        if (0 === r) null !== n && Ke(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
          if (null != n && Ke(n), 1 === t) 0 === e.tag ? function (e) {
            zo = !0, $o(e)
          }(sc.bind(null, e)) : $o(sc.bind(null, e)), io((function () {
            0 == (6 & Ds) && Wo()
          })), n = null; else {
            switch (xt(r)) {
              case 1:
                n = Je;
                break;
              case 4:
                n = et;
                break;
              case 16:
              default:
                n = tt;
                break;
              case 536870912:
                n = rt
            }
            n = Zc(n, oc.bind(null, e))
          }
          e.callbackPriority = t, e.callbackNode = n
        }
      }
      
      function oc(e, t) {
        if (Qs = -1, Js = 0, 0 != (6 & Ds)) throw Error(a(327));
        var n = e.callbackNode;
        if (Ec() && e.callbackNode !== n) return null;
        var r = ft(e, e === Zs ? js : 0);
        if (0 === r) return null;
        if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = vc(e, r); else {
          t = r;
          var o = Ds;
          Ds |= 2;
          var i = mc();
          for (Zs === e && js === t || (Ws = null, $s = Ye() + 500, fc(e, t)); ;) try {
            bc();
            break
          } catch (t) {
            pc(e, t)
          }
          Ea(), Fs.current = i, Ds = o, null !== Bs ? t = 0 : (Zs = null, js = 0, t = Ms)
        }
        if (0 !== t) {
          if (2 === t && 0 !== (o = mt(e)) && (r = o, t = ac(e, o)), 1 === t) throw n = Ns, fc(e, 0), lc(e, r), rc(e, Ye()), n;
          if (6 === t) lc(e, r); else {
            if (o = e.current.alternate, 0 == (30 & r) && !function (e) {
              for (var t = e; ;) {
                if (16384 & t.flags) {
                  var n = t.updateQueue;
                  if (null !== n && null !== (n = n.stores)) for (var r = 0; r < n.length; r++) {
                    var o = n[r], a = o.getSnapshot;
                    o = o.value;
                    try {
                      if (!lr(a(), o)) return !1
                    } catch (e) {
                      return !1
                    }
                  }
                }
                if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n; else {
                  if (t === e) break;
                  for (; null === t.sibling;) {
                    if (null === t.return || t.return === e) return !0;
                    t = t.return
                  }
                  t.sibling.return = t.return, t = t.sibling
                }
              }
              return !0
            }(o) && (2 === (t = vc(e, r)) && 0 !== (i = mt(e)) && (r = i, t = ac(e, i)), 1 === t)) throw n = Ns, fc(e, 0), lc(e, r), rc(e, Ye()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
              case 0:
              case 1:
                throw Error(a(345));
              case 2:
              case 5:
                Cc(e, zs, Ws);
                break;
              case 3:
                if (lc(e, r), (130023424 & r) === r && 10 < (t = Ls + 500 - Ye())) {
                  if (0 !== ft(e, 0)) break;
                  if (((o = e.suspendedLanes) & r) !== r) {
                    ec(), e.pingedLanes |= e.suspendedLanes & o;
                    break
                  }
                  e.timeoutHandle = ro(Cc.bind(null, e, zs, Ws), t);
                  break
                }
                Cc(e, zs, Ws);
                break;
              case 4:
                if (lc(e, r), (4194240 & r) === r) break;
                for (t = e.eventTimes, o = -1; 0 < r;) {
                  var l = 31 - it(r);
                  i = 1 << l, (l = t[l]) > o && (o = l), r &= ~i
                }
                if (r = o, 10 < (r = (120 > (r = Ye() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ks(r / 1960)) - r)) {
                  e.timeoutHandle = ro(Cc.bind(null, e, zs, Ws), r);
                  break
                }
                Cc(e, zs, Ws);
                break;
              default:
                throw Error(a(329))
            }
          }
        }
        return rc(e, Ye()), e.callbackNode === n ? oc.bind(null, e) : null
      }
      
      function ac(e, t) {
        var n = Is;
        return e.current.memoizedState.isDehydrated && (fc(e, t).flags |= 256), 2 !== (e = vc(e, t)) && (t = zs, zs = n, null !== t && ic(t)), e
      }
      
      function ic(e) {
        null === zs ? zs = e : zs.push.apply(zs, e)
      }
      
      function lc(e, t) {
        for (t &= ~Os, t &= ~Ts, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
          var n = 31 - it(t), r = 1 << n;
          e[n] = -1, t &= ~r
        }
      }
      
      function sc(e) {
        if (0 != (6 & Ds)) throw Error(a(327));
        Ec();
        var t = ft(e, 0);
        if (0 == (1 & t)) return rc(e, Ye()), null;
        var n = vc(e, t);
        if (0 !== e.tag && 2 === n) {
          var r = mt(e);
          0 !== r && (t = r, n = ac(e, r))
        }
        if (1 === n) throw n = Ns, fc(e, 0), lc(e, t), rc(e, Ye()), n;
        if (6 === n) throw Error(a(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Cc(e, zs, Ws), rc(e, Ye()), null
      }
      
      function cc(e, t) {
        var n = Ds;
        Ds |= 1;
        try {
          return e(t)
        } finally {
          0 === (Ds = n) && ($s = Ye() + 500, zo && Wo())
        }
      }
      
      function uc(e) {
        null !== Ks && 0 === Ks.tag && 0 == (6 & Ds) && Ec();
        var t = Ds;
        Ds |= 1;
        var n = As.transition, r = yt;
        try {
          if (As.transition = null, yt = 1, e) return e()
        } finally {
          yt = r, As.transition = n, 0 == (6 & (Ds = t)) && Wo()
        }
      }
      
      function dc() {
        Ps = Rs.current, So(Rs)
      }
      
      function fc(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (-1 !== n && (e.timeoutHandle = -1, oo(n)), null !== Bs) for (n = Bs.return; null !== n;) {
          var r = n;
          switch (na(r), r.tag) {
            case 1:
              null != (r = r.type.childContextTypes) && Mo();
              break;
            case 3:
              ai(), So(Bo), So(Zo), di();
              break;
            case 5:
              li(r);
              break;
            case 4:
              ai();
              break;
            case 13:
            case 19:
              So(si);
              break;
            case 10:
              wa(r.type._context);
              break;
            case 22:
            case 23:
              dc()
          }
          n = n.return
        }
        if (Zs = e, Bs = e = Rc(e.current, null), js = Ps = t, Ms = 0, Ns = null, Os = Ts = _s = 0, zs = Is = null, null !== Aa) {
          for (t = 0; t < Aa.length; t++) if (null !== (r = (n = Aa[t]).interleaved)) {
            n.interleaved = null;
            var o = r.next, a = n.pending;
            if (null !== a) {
              var i = a.next;
              a.next = o, r.next = i
            }
            n.pending = r
          }
          Aa = null
        }
        return e
      }
      
      function pc(e, t) {
        for (; ;) {
          var n = Bs;
          try {
            if (Ea(), fi.current = il, bi) {
              for (var r = hi.memoizedState; null !== r;) {
                var o = r.queue;
                null !== o && (o.pending = null), r = r.next
              }
              bi = !1
            }
            if (mi = 0, gi = vi = hi = null, yi = !1, xi = 0, Ss.current = null, null === n || null === n.return) {
              Ms = 1, Ns = t, Bs = null;
              break
            }
            e:{
              var i = e, l = n.return, s = n, c = t;
              if (t = js, s.flags |= 32768, null !== c && "object" == typeof c && "function" == typeof c.then) {
                var u = c, d = s, f = d.tag;
                if (0 == (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                  var p = d.alternate;
                  p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
                }
                var m = gl(l);
                if (null !== m) {
                  m.flags &= -257, bl(m, l, s, 0, t), 1 & m.mode && vl(i, u, t), c = u;
                  var h = (t = m).updateQueue;
                  if (null === h) {
                    var v = new Set;
                    v.add(c), t.updateQueue = v
                  } else h.add(c);
                  break e
                }
                if (0 == (1 & t)) {
                  vl(i, u, t), hc();
                  break e
                }
                c = Error(a(426))
              } else if (aa && 1 & s.mode) {
                var g = gl(l);
                if (null !== g) {
                  0 == (65536 & g.flags) && (g.flags |= 256), bl(g, l, s, 0, t), ha(ul(c, s));
                  break e
                }
              }
              i = c = ul(c, s), 4 !== Ms && (Ms = 2), null === Is ? Is = [i] : Is.push(i), i = l;
              do {
                switch (i.tag) {
                  case 3:
                    i.flags |= 65536, t &= -t, i.lanes |= t, Ta(i, ml(0, c, t));
                    break e;
                  case 1:
                    s = c;
                    var b = i.type, y = i.stateNode;
                    if (0 == (128 & i.flags) && ("function" == typeof b.getDerivedStateFromError || null !== y && "function" == typeof y.componentDidCatch && (null === Us || !Us.has(y)))) {
                      i.flags |= 65536, t &= -t, i.lanes |= t, Ta(i, hl(i, s, t));
                      break e
                    }
                }
                i = i.return
              } while (null !== i)
            }
            xc(n)
          } catch (e) {
            t = e, Bs === n && null !== n && (Bs = n = n.return);
            continue
          }
          break
        }
      }
      
      function mc() {
        var e = Fs.current;
        return Fs.current = il, null === e ? il : e
      }
      
      function hc() {
        0 !== Ms && 3 !== Ms && 2 !== Ms || (Ms = 4), null === Zs || 0 == (268435455 & _s) && 0 == (268435455 & Ts) || lc(Zs, js)
      }
      
      function vc(e, t) {
        var n = Ds;
        Ds |= 2;
        var r = mc();
        for (Zs === e && js === t || (Ws = null, fc(e, t)); ;) try {
          gc();
          break
        } catch (t) {
          pc(e, t)
        }
        if (Ea(), Ds = n, Fs.current = r, null !== Bs) throw Error(a(261));
        return Zs = null, js = 0, Ms
      }
      
      function gc() {
        for (; null !== Bs;) yc(Bs)
      }
      
      function bc() {
        for (; null !== Bs && !Ge();) yc(Bs)
      }
      
      function yc(e) {
        var t = ws(e.alternate, e, Ps);
        e.memoizedProps = e.pendingProps, null === t ? xc(e) : Bs = t, Ss.current = null
      }
      
      function xc(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (e = t.return, 0 == (32768 & t.flags)) {
            if (null !== (n = ql(n, t, Ps))) return void (Bs = n)
          } else {
            if (null !== (n = Kl(n, t))) return n.flags &= 32767, void (Bs = n);
            if (null === e) return Ms = 6, void (Bs = null);
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
          }
          if (null !== (t = t.sibling)) return void (Bs = t);
          Bs = t = e
        } while (null !== t);
        0 === Ms && (Ms = 5)
      }
      
      function Cc(e, t, n) {
        var r = yt, o = As.transition;
        try {
          As.transition = null, yt = 1, function (e, t, n, r) {
            do {
              Ec()
            } while (null !== Ks);
            if (0 != (6 & Ds)) throw Error(a(327));
            n = e.finishedWork;
            var o = e.finishedLanes;
            if (null === n) return null;
            if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
            e.callbackNode = null, e.callbackPriority = 0;
            var i = n.lanes | n.childLanes;
            if (function (e, t) {
              var n = e.pendingLanes & ~t;
              e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
              var r = e.eventTimes;
              for (e = e.expirationTimes; 0 < n;) {
                var o = 31 - it(n), a = 1 << o;
                t[o] = 0, r[o] = -1, e[o] = -1, n &= ~a
              }
            }(e, i), e === Zs && (Bs = Zs = null, js = 0), 0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags) || qs || (qs = !0, Zc(tt, (function () {
              return Ec(), null
            }))), i = 0 != (15990 & n.flags), 0 != (15990 & n.subtreeFlags) || i) {
              i = As.transition, As.transition = null;
              var l = yt;
              yt = 1;
              var s = Ds;
              Ds |= 4, Ss.current = null, function (e, t) {
                if (eo = Ht, pr(e = fr())) {
                  if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd}; else e:{
                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                    if (r && 0 !== r.rangeCount) {
                      n = r.anchorNode;
                      var o = r.anchorOffset, i = r.focusNode;
                      r = r.focusOffset;
                      try {
                        n.nodeType, i.nodeType
                      } catch (e) {
                        n = null;
                        break e
                      }
                      var l = 0, s = -1, c = -1, u = 0, d = 0, f = e, p = null;
                      t:for (; ;) {
                        for (var m; f !== n || 0 !== o && 3 !== f.nodeType || (s = l + o), f !== i || 0 !== r && 3 !== f.nodeType || (c = l + r), 3 === f.nodeType && (l += f.nodeValue.length), null !== (m = f.firstChild);) p = f, f = m;
                        for (; ;) {
                          if (f === e) break t;
                          if (p === n && ++u === o && (s = l), p === i && ++d === r && (c = l), null !== (m = f.nextSibling)) break;
                          p = (f = p).parentNode
                        }
                        f = m
                      }
                      n = -1 === s || -1 === c ? null : {start: s, end: c}
                    } else n = null
                  }
                  n = n || {start: 0, end: 0}
                } else n = null;
                for (to = {
                  focusedElem: e,
                  selectionRange: n
                }, Ht = !1, Ql = t; null !== Ql;) if (e = (t = Ql).child, 0 != (1028 & t.subtreeFlags) && null !== e) e.return = t, Ql = e; else for (; null !== Ql;) {
                  t = Ql;
                  try {
                    var h = t.alternate;
                    if (0 != (1024 & t.flags)) switch (t.tag) {
                      case 0:
                      case 11:
                      case 15:
                      case 5:
                      case 6:
                      case 4:
                      case 17:
                        break;
                      case 1:
                        if (null !== h) {
                          var v = h.memoizedProps, g = h.memoizedState, b = t.stateNode,
                            y = b.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ga(t.type, v), g);
                          b.__reactInternalSnapshotBeforeUpdate = y
                        }
                        break;
                      case 3:
                        var x = t.stateNode.containerInfo;
                        1 === x.nodeType ? x.textContent = "" : 9 === x.nodeType && x.documentElement && x.removeChild(x.documentElement);
                        break;
                      default:
                        throw Error(a(163))
                    }
                  } catch (e) {
                    kc(t, t.return, e)
                  }
                  if (null !== (e = t.sibling)) {
                    e.return = t.return, Ql = e;
                    break
                  }
                  Ql = t.return
                }
                h = ts, ts = !1
              }(e, n), vs(n, e), mr(to), Ht = !!eo, to = eo = null, e.current = n, bs(n, e, o), Xe(), Ds = s, yt = l, As.transition = i
            } else e.current = n;
            if (qs && (qs = !1, Ks = e, Gs = o), 0 === (i = e.pendingLanes) && (Us = null), function (e) {
              if (at && "function" == typeof at.onCommitFiberRoot) try {
                at.onCommitFiberRoot(ot, e, void 0, 128 == (128 & e.current.flags))
              } catch (e) {
              }
            }(n.stateNode), rc(e, Ye()), null !== t) for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((o = t[n]).value, {
              componentStack: o.stack,
              digest: o.digest
            });
            if (Hs) throw Hs = !1, e = Vs, Vs = null, e;
            0 != (1 & Gs) && 0 !== e.tag && Ec(), 0 != (1 & (i = e.pendingLanes)) ? e === Ys ? Xs++ : (Xs = 0, Ys = e) : Xs = 0, Wo()
          }(e, t, n, r)
        } finally {
          As.transition = o, yt = r
        }
        return null
      }
      
      function Ec() {
        if (null !== Ks) {
          var e = xt(Gs), t = As.transition, n = yt;
          try {
            if (As.transition = null, yt = 16 > e ? 16 : e, null === Ks) var r = !1; else {
              if (e = Ks, Ks = null, Gs = 0, 0 != (6 & Ds)) throw Error(a(331));
              var o = Ds;
              for (Ds |= 4, Ql = e.current; null !== Ql;) {
                var i = Ql, l = i.child;
                if (0 != (16 & Ql.flags)) {
                  var s = i.deletions;
                  if (null !== s) {
                    for (var c = 0; c < s.length; c++) {
                      var u = s[c];
                      for (Ql = u; null !== Ql;) {
                        var d = Ql;
                        switch (d.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(8, d, i)
                        }
                        var f = d.child;
                        if (null !== f) f.return = d, Ql = f; else for (; null !== Ql;) {
                          var p = (d = Ql).sibling, m = d.return;
                          if (as(d), d === u) {
                            Ql = null;
                            break
                          }
                          if (null !== p) {
                            p.return = m, Ql = p;
                            break
                          }
                          Ql = m
                        }
                      }
                    }
                    var h = i.alternate;
                    if (null !== h) {
                      var v = h.child;
                      if (null !== v) {
                        h.child = null;
                        do {
                          var g = v.sibling;
                          v.sibling = null, v = g
                        } while (null !== v)
                      }
                    }
                    Ql = i
                  }
                }
                if (0 != (2064 & i.subtreeFlags) && null !== l) l.return = i, Ql = l; else e:for (; null !== Ql;) {
                  if (0 != (2048 & (i = Ql).flags)) switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ns(9, i, i.return)
                  }
                  var b = i.sibling;
                  if (null !== b) {
                    b.return = i.return, Ql = b;
                    break e
                  }
                  Ql = i.return
                }
              }
              var y = e.current;
              for (Ql = y; null !== Ql;) {
                var x = (l = Ql).child;
                if (0 != (2064 & l.subtreeFlags) && null !== x) x.return = l, Ql = x; else e:for (l = y; null !== Ql;) {
                  if (0 != (2048 & (s = Ql).flags)) try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        rs(9, s)
                    }
                  } catch (e) {
                    kc(s, s.return, e)
                  }
                  if (s === l) {
                    Ql = null;
                    break e
                  }
                  var C = s.sibling;
                  if (null !== C) {
                    C.return = s.return, Ql = C;
                    break e
                  }
                  Ql = s.return
                }
              }
              if (Ds = o, Wo(), at && "function" == typeof at.onPostCommitFiberRoot) try {
                at.onPostCommitFiberRoot(ot, e)
              } catch (e) {
              }
              r = !0
            }
            return r
          } finally {
            yt = n, As.transition = t
          }
        }
        return !1
      }
      
      function wc(e, t, n) {
        e = Na(e, t = ml(0, t = ul(n, t), 1), 1), t = ec(), null !== e && (gt(e, 1, t), rc(e, t))
      }
      
      function kc(e, t, n) {
        if (3 === e.tag) wc(e, e, n); else for (; null !== t;) {
          if (3 === t.tag) {
            wc(t, e, n);
            break
          }
          if (1 === t.tag) {
            var r = t.stateNode;
            if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Us || !Us.has(r))) {
              t = Na(t, e = hl(t, e = ul(n, e), 1), 1), e = ec(), null !== t && (gt(t, 1, e), rc(t, e));
              break
            }
          }
          t = t.return
        }
      }
      
      function Fc(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t), t = ec(), e.pingedLanes |= e.suspendedLanes & n, Zs === e && (js & n) === n && (4 === Ms || 3 === Ms && (130023424 & js) === js && 500 > Ye() - Ls ? fc(e, 0) : Os |= n), rc(e, t)
      }
      
      function Sc(e, t) {
        0 === t && (0 == (1 & e.mode) ? t = 1 : (t = ut, 0 == (130023424 & (ut <<= 1)) && (ut = 4194304)));
        var n = ec();
        null !== (e = Ba(e, t)) && (gt(e, t, n), rc(e, n))
      }
      
      function Ac(e) {
        var t = e.memoizedState, n = 0;
        null !== t && (n = t.retryLane), Sc(e, n)
      }
      
      function Dc(e, t) {
        var n = 0;
        switch (e.tag) {
          case 13:
            var r = e.stateNode, o = e.memoizedState;
            null !== o && (n = o.retryLane);
            break;
          case 19:
            r = e.stateNode;
            break;
          default:
            throw Error(a(314))
        }
        null !== r && r.delete(t), Sc(e, n)
      }
      
      function Zc(e, t) {
        return qe(e, t)
      }
      
      function Bc(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
      }
      
      function jc(e, t, n, r) {
        return new Bc(e, t, n, r)
      }
      
      function Pc(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
      }
      
      function Rc(e, t) {
        var n = e.alternate;
        return null === n ? ((n = jc(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
      }
      
      function Mc(e, t, n, r, o, i) {
        var l = 2;
        if (r = e, "function" == typeof e) Pc(e) && (l = 1); else if ("string" == typeof e) l = 5; else e:switch (e) {
          case w:
            return Nc(n.children, o, i, t);
          case k:
            l = 8, o |= 8;
            break;
          case F:
            return (e = jc(12, n, t, 2 | o)).elementType = F, e.lanes = i, e;
          case Z:
            return (e = jc(13, n, t, o)).elementType = Z, e.lanes = i, e;
          case B:
            return (e = jc(19, n, t, o)).elementType = B, e.lanes = i, e;
          case R:
            return _c(n, o, i, t);
          default:
            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
              case S:
                l = 10;
                break e;
              case A:
                l = 9;
                break e;
              case D:
                l = 11;
                break e;
              case j:
                l = 14;
                break e;
              case P:
                l = 16, r = null;
                break e
            }
            throw Error(a(130, null == e ? e : typeof e, ""))
        }
        return (t = jc(l, n, t, o)).elementType = e, t.type = r, t.lanes = i, t
      }
      
      function Nc(e, t, n, r) {
        return (e = jc(7, e, r, t)).lanes = n, e
      }
      
      function _c(e, t, n, r) {
        return (e = jc(22, e, r, t)).elementType = R, e.lanes = n, e.stateNode = {isHidden: !1}, e
      }
      
      function Tc(e, t, n) {
        return (e = jc(6, e, null, t)).lanes = n, e
      }
      
      function Oc(e, t, n) {
        return (t = jc(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }, t
      }
      
      function Ic(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
      }
      
      function zc(e, t, n, r, o, a, i, l, s) {
        return e = new Ic(e, t, n, l, s), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = jc(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        }, Pa(a), e
      }
      
      function Lc(e, t, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {$$typeof: E, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n}
      }
      
      function $c(e) {
        if (!e) return Do;
        e:{
          if ($e(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(a(170));
          var t = e;
          do {
            switch (t.tag) {
              case 3:
                t = t.stateNode.context;
                break e;
              case 1:
                if (Ro(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e
                }
            }
            t = t.return
          } while (null !== t);
          throw Error(a(171))
        }
        if (1 === e.tag) {
          var n = e.type;
          if (Ro(n)) return _o(e, n, t)
        }
        return t
      }
      
      function Wc(e, t, n, r, o, a, i, l, s) {
        return (e = zc(n, r, !0, e, 0, a, 0, l, s)).context = $c(null), n = e.current, (a = Ma(r = ec(), o = tc(n))).callback = null != t ? t : null, Na(n, a, o), e.current.lanes = o, gt(e, o, r), rc(e, r), e
      }
      
      function Hc(e, t, n, r) {
        var o = t.current, a = ec(), i = tc(o);
        return n = $c(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Ma(a, i)).payload = {element: e}, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Na(o, t, i)) && (nc(e, o, i, a), _a(e, o, i)), i
      }
      
      function Vc(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
      }
      
      function Uc(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t
        }
      }
      
      function qc(e, t) {
        Uc(e, t), (e = e.alternate) && Uc(e, t)
      }
      
      ws = function (e, t, n) {
        if (null !== e) if (e.memoizedProps !== t.pendingProps || Bo.current) xl = !0; else {
          if (0 == (e.lanes & n) && 0 == (128 & t.flags)) return xl = !1, function (e, t, n) {
            switch (t.tag) {
              case 3:
                Bl(t), ma();
                break;
              case 5:
                ii(t);
                break;
              case 1:
                Ro(t.type) && To(t);
                break;
              case 4:
                oi(t, t.stateNode.containerInfo);
                break;
              case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                Ao(ba, r._currentValue), r._currentValue = o;
                break;
              case 13:
                if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Ao(si, 1 & si.current), t.flags |= 128, null) : 0 != (n & t.child.childLanes) ? Tl(e, t, n) : (Ao(si, 1 & si.current), null !== (e = Hl(e, t, n)) ? e.sibling : null);
                Ao(si, 1 & si.current);
                break;
              case 19:
                if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
                  if (r) return $l(e, t, n);
                  t.flags |= 128
                }
                if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), Ao(si, si.current), r) break;
                return null;
              case 22:
              case 23:
                return t.lanes = 0, Fl(e, t, n)
            }
            return Hl(e, t, n)
          }(e, t, n);
          xl = 0 != (131072 & e.flags)
        } else xl = !1, aa && 0 != (1048576 & t.flags) && ea(t, qo, t.index);
        switch (t.lanes = 0, t.tag) {
          case 2:
            var r = t.type;
            Wl(e, t), e = t.pendingProps;
            var o = Po(t, Zo.current);
            Fa(t, n), o = ki(null, t, r, e, o, n);
            var i = Fi();
            return t.flags |= 1, "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ro(r) ? (i = !0, To(t)) : i = !1, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, Pa(t), o.updater = $a, t.stateNode = o, o._reactInternals = t, Ua(t, r, e, n), t = Zl(null, t, r, !0, i, n)) : (t.tag = 0, aa && i && ta(t), Cl(null, t, o, n), t = t.child), t;
          case 16:
            r = t.elementType;
            e:{
              switch (Wl(e, t), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = function (e) {
                if ("function" == typeof e) return Pc(e) ? 1 : 0;
                if (null != e) {
                  if ((e = e.$$typeof) === D) return 11;
                  if (e === j) return 14
                }
                return 2
              }(r), e = ga(r, e), o) {
                case 0:
                  t = Al(null, t, r, e, n);
                  break e;
                case 1:
                  t = Dl(null, t, r, e, n);
                  break e;
                case 11:
                  t = El(null, t, r, e, n);
                  break e;
                case 14:
                  t = wl(null, t, r, ga(r.type, e), n);
                  break e
              }
              throw Error(a(306, r, ""))
            }
            return t;
          case 0:
            return r = t.type, o = t.pendingProps, Al(e, t, r, o = t.elementType === r ? o : ga(r, o), n);
          case 1:
            return r = t.type, o = t.pendingProps, Dl(e, t, r, o = t.elementType === r ? o : ga(r, o), n);
          case 3:
            e:{
              if (Bl(t), null === e) throw Error(a(387));
              r = t.pendingProps, o = (i = t.memoizedState).element, Ra(e, t), Oa(t, r, null, n);
              var l = t.memoizedState;
              if (r = l.element, i.isDehydrated) {
                if (i = {
                  element: r,
                  isDehydrated: !1,
                  cache: l.cache,
                  pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                  transitions: l.transitions
                }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                  t = jl(e, t, r, n, o = ul(Error(a(423)), t));
                  break e
                }
                if (r !== o) {
                  t = jl(e, t, r, n, o = ul(Error(a(424)), t));
                  break e
                }
                for (oa = co(t.stateNode.containerInfo.firstChild), ra = t, aa = !0, ia = null, n = Qa(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
              } else {
                if (ma(), r === o) {
                  t = Hl(e, t, n);
                  break e
                }
                Cl(e, t, r, n)
              }
              t = t.child
            }
            return t;
          case 5:
            return ii(t), null === e && ua(t), r = t.type, o = t.pendingProps, i = null !== e ? e.memoizedProps : null, l = o.children, no(r, o) ? l = null : null !== i && no(r, i) && (t.flags |= 32), Sl(e, t), Cl(e, t, l, n), t.child;
          case 6:
            return null === e && ua(t), null;
          case 13:
            return Tl(e, t, n);
          case 4:
            return oi(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ya(t, null, r, n) : Cl(e, t, r, n), t.child;
          case 11:
            return r = t.type, o = t.pendingProps, El(e, t, r, o = t.elementType === r ? o : ga(r, o), n);
          case 7:
            return Cl(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Cl(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e:{
              if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, Ao(ba, r._currentValue), r._currentValue = l, null !== i) if (lr(i.value, l)) {
                if (i.children === o.children && !Bo.current) {
                  t = Hl(e, t, n);
                  break e
                }
              } else for (null !== (i = t.child) && (i.return = t); null !== i;) {
                var s = i.dependencies;
                if (null !== s) {
                  l = i.child;
                  for (var c = s.firstContext; null !== c;) {
                    if (c.context === r) {
                      if (1 === i.tag) {
                        (c = Ma(-1, n & -n)).tag = 2;
                        var u = i.updateQueue;
                        if (null !== u) {
                          var d = (u = u.shared).pending;
                          null === d ? c.next = c : (c.next = d.next, d.next = c), u.pending = c
                        }
                      }
                      i.lanes |= n, null !== (c = i.alternate) && (c.lanes |= n), ka(i.return, n, t), s.lanes |= n;
                      break
                    }
                    c = c.next
                  }
                } else if (10 === i.tag) l = i.type === t.type ? null : i.child; else if (18 === i.tag) {
                  if (null === (l = i.return)) throw Error(a(341));
                  l.lanes |= n, null !== (s = l.alternate) && (s.lanes |= n), ka(l, n, t), l = i.sibling
                } else l = i.child;
                if (null !== l) l.return = i; else for (l = i; null !== l;) {
                  if (l === t) {
                    l = null;
                    break
                  }
                  if (null !== (i = l.sibling)) {
                    i.return = l.return, l = i;
                    break
                  }
                  l = l.return
                }
                i = l
              }
              Cl(e, t, o.children, n), t = t.child
            }
            return t;
          case 9:
            return o = t.type, r = t.pendingProps.children, Fa(t, n), r = r(o = Sa(o)), t.flags |= 1, Cl(e, t, r, n), t.child;
          case 14:
            return o = ga(r = t.type, t.pendingProps), wl(e, t, r, o = ga(r.type, o), n);
          case 15:
            return kl(e, t, t.type, t.pendingProps, n);
          case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ga(r, o), Wl(e, t), t.tag = 1, Ro(r) ? (e = !0, To(t)) : e = !1, Fa(t, n), Ha(t, r, o), Ua(t, r, o, n), Zl(null, t, r, !0, e, n);
          case 19:
            return $l(e, t, n);
          case 22:
            return Fl(e, t, n)
        }
        throw Error(a(156, t.tag))
      };
      var Kc = "function" == typeof reportError ? reportError : function (e) {
        console.error(e)
      };
      
      function Gc(e) {
        this._internalRoot = e
      }
      
      function Xc(e) {
        this._internalRoot = e
      }
      
      function Yc(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
      }
      
      function Qc(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      }
      
      function Jc() {
      }
      
      function eu(e, t, n, r, o) {
        var a = n._reactRootContainer;
        if (a) {
          var i = a;
          if ("function" == typeof o) {
            var l = o;
            o = function () {
              var e = Vc(i);
              l.call(e)
            }
          }
          Hc(t, i, e, o)
        } else i = function (e, t, n, r, o) {
          if (o) {
            if ("function" == typeof r) {
              var a = r;
              r = function () {
                var e = Vc(i);
                a.call(e)
              }
            }
            var i = Wc(t, r, e, 0, null, !1, 0, "", Jc);
            return e._reactRootContainer = i, e[ho] = i.current, $r(8 === e.nodeType ? e.parentNode : e), uc(), i
          }
          for (; o = e.lastChild;) e.removeChild(o);
          if ("function" == typeof r) {
            var l = r;
            r = function () {
              var e = Vc(s);
              l.call(e)
            }
          }
          var s = zc(e, 0, !1, null, 0, !1, 0, "", Jc);
          return e._reactRootContainer = s, e[ho] = s.current, $r(8 === e.nodeType ? e.parentNode : e), uc((function () {
            Hc(t, s, n, r)
          })), s
        }(n, t, e, o, r);
        return Vc(i)
      }
      
      Xc.prototype.render = Gc.prototype.render = function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(a(409));
        Hc(e, t, null, null)
      }, Xc.prototype.unmount = Gc.prototype.unmount = function () {
        var e = this._internalRoot;
        if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          uc((function () {
            Hc(null, e, null, null)
          })), t[ho] = null
        }
      }, Xc.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var t = kt();
          e = {blockedOn: null, target: e, priority: t};
          for (var n = 0; n < Rt.length && 0 !== t && t < Rt[n].priority; n++) ;
          Rt.splice(n, 0, e), 0 === n && Tt(e)
        }
      }, Ct = function (e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
              var n = dt(t.pendingLanes);
              0 !== n && (bt(t, 1 | n), rc(t, Ye()), 0 == (6 & Ds) && ($s = Ye() + 500, Wo()))
            }
            break;
          case 13:
            uc((function () {
              var t = Ba(e, 1);
              if (null !== t) {
                var n = ec();
                nc(t, e, 1, n)
              }
            })), qc(e, 1)
        }
      }, Et = function (e) {
        if (13 === e.tag) {
          var t = Ba(e, 134217728);
          null !== t && nc(t, e, 134217728, ec()), qc(e, 134217728)
        }
      }, wt = function (e) {
        if (13 === e.tag) {
          var t = tc(e), n = Ba(e, t);
          null !== n && nc(n, e, t, ec()), qc(e, t)
        }
      }, kt = function () {
        return yt
      }, Ft = function (e, t) {
        var n = yt;
        try {
          return yt = e, t()
        } finally {
          yt = n
        }
      }, Ee = function (e, t, n) {
        switch (t) {
          case"input":
            if (Q(e, n), t = n.name, "radio" === n.type && null != t) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var o = Eo(r);
                  if (!o) throw Error(a(90));
                  q(r), Q(r, o)
                }
              }
            }
            break;
          case"textarea":
            ae(e, n);
            break;
          case"select":
            null != (t = n.value) && ne(e, !!n.multiple, t, !1)
        }
      }, De = cc, Ze = uc;
      var tu = {usingClientEntryPoint: !1, Events: [xo, Co, Eo, Se, Ae, cc]},
        nu = {findFiberByHostInstance: yo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"}, ru = {
          bundleType: nu.bundleType,
          version: nu.version,
          rendererPackageName: nu.rendererPackageName,
          rendererConfig: nu.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setErrorHandler: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: x.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = Ve(e)) ? null : e.stateNode
          },
          findFiberByHostInstance: nu.findFiberByHostInstance || function () {
            return null
          },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
          reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
        };
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var ou = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ou.isDisabled && ou.supportsFiber) try {
          ot = ou.inject(ru), at = ou
        } catch (ue) {
        }
      }
      t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu, t.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Yc(t)) throw Error(a(200));
        return Lc(e, t, null, n)
      }, t.createRoot = function (e, t) {
        if (!Yc(e)) throw Error(a(299));
        var n = !1, r = "", o = Kc;
        return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = zc(e, 1, !1, null, 0, n, 0, r, o), e[ho] = t.current, $r(8 === e.nodeType ? e.parentNode : e), new Gc(t)
      }, t.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
          if ("function" == typeof e.render) throw Error(a(188));
          throw e = Object.keys(e).join(","), Error(a(268, e))
        }
        return null === (e = Ve(t)) ? null : e.stateNode
      }, t.flushSync = function (e) {
        return uc(e)
      }, t.hydrate = function (e, t, n) {
        if (!Qc(t)) throw Error(a(200));
        return eu(null, e, t, !0, n)
      }, t.hydrateRoot = function (e, t, n) {
        if (!Yc(e)) throw Error(a(405));
        var r = null != n && n.hydratedSources || null, o = !1, i = "", l = Kc;
        if (null != n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)), t = Wc(t, null, e, 1, null != n ? n : null, o, 0, i, l), e[ho] = t.current, $r(e), r) for (e = 0; e < r.length; e++) o = (o = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
        return new Xc(t)
      }, t.render = function (e, t, n) {
        if (!Qc(t)) throw Error(a(200));
        return eu(null, e, t, !1, n)
      }, t.unmountComponentAtNode = function (e) {
        if (!Qc(e)) throw Error(a(40));
        return !!e._reactRootContainer && (uc((function () {
          eu(null, null, e, !1, (function () {
            e._reactRootContainer = null, e[ho] = null
          }))
        })), !0)
      }, t.unstable_batchedUpdates = cc, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Qc(n)) throw Error(a(200));
        if (null == e || void 0 === e._reactInternals) throw Error(a(38));
        return eu(e, t, n, !1, r)
      }, t.version = "18.2.0-next-9e3b772b8-20220608"
    }, 745: (e, t, n) => {
      "use strict";
      var r = n(3935);
      t.s = r.createRoot, r.hydrateRoot
    }, 3935: (e, t, n) => {
      "use strict";
      !function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (e) {
          console.error(e)
        }
      }(), e.exports = n(4448)
    }, 9921: (e, t) => {
      "use strict";
      Symbol.for("react.element"), Symbol.for("react.portal"), Symbol.for("react.fragment"), Symbol.for("react.strict_mode"), Symbol.for("react.profiler"), Symbol.for("react.provider"), Symbol.for("react.context"), Symbol.for("react.server_context"), Symbol.for("react.forward_ref"), Symbol.for("react.suspense"), Symbol.for("react.suspense_list"), Symbol.for("react.memo"), Symbol.for("react.lazy"), Symbol.for("react.offscreen");
      Symbol.for("react.module.reference")
    }, 9864: (e, t, n) => {
      "use strict";
      n(9921)
    }, 5251: (e, t, n) => {
      "use strict";
      var r = n(7294), o = Symbol.for("react.element"), a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty, l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {key: !0, ref: !0, __self: !0, __source: !0};
      
      function c(e, t, n) {
        var r, a = {}, c = null, u = null;
        for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) i.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps) for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
        return {$$typeof: o, type: e, key: c, ref: u, props: a, _owner: l.current}
      }
      
      t.Fragment = a, t.jsx = c, t.jsxs = c
    }, 2408: (e, t) => {
      "use strict";
      var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"),
        s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"),
        d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.iterator, m = {
          isMounted: function () {
            return !1
          }, enqueueForceUpdate: function () {
          }, enqueueReplaceState: function () {
          }, enqueueSetState: function () {
          }
        }, h = Object.assign, v = {};
      
      function g(e, t, n) {
        this.props = e, this.context = t, this.refs = v, this.updater = n || m
      }
      
      function b() {
      }
      
      function y(e, t, n) {
        this.props = e, this.context = t, this.refs = v, this.updater = n || m
      }
      
      g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
      }, g.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
      }, b.prototype = g.prototype;
      var x = y.prototype = new b;
      x.constructor = y, h(x, g.prototype), x.isPureReactComponent = !0;
      var C = Array.isArray, E = Object.prototype.hasOwnProperty, w = {current: null},
        k = {key: !0, ref: !0, __self: !0, __source: !0};
      
      function F(e, t, r) {
        var o, a = {}, i = null, l = null;
        if (null != t) for (o in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) E.call(t, o) && !k.hasOwnProperty(o) && (a[o] = t[o]);
        var s = arguments.length - 2;
        if (1 === s) a.children = r; else if (1 < s) {
          for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
          a.children = c
        }
        if (e && e.defaultProps) for (o in s = e.defaultProps) void 0 === a[o] && (a[o] = s[o]);
        return {$$typeof: n, type: e, key: i, ref: l, props: a, _owner: w.current}
      }
      
      function S(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
      }
      
      var A = /\/+/g;
      
      function D(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function (e) {
          var t = {"=": "=0", ":": "=2"};
          return "$" + e.replace(/[=:]/g, (function (e) {
            return t[e]
          }))
        }("" + e.key) : t.toString(36)
      }
      
      function Z(e, t, o, a, i) {
        var l = typeof e;
        "undefined" !== l && "boolean" !== l || (e = null);
        var s = !1;
        if (null === e) s = !0; else switch (l) {
          case"string":
          case"number":
            s = !0;
            break;
          case"object":
            switch (e.$$typeof) {
              case n:
              case r:
                s = !0
            }
        }
        if (s) return i = i(s = e), e = "" === a ? "." + D(s, 0) : a, C(i) ? (o = "", null != e && (o = e.replace(A, "$&/") + "/"), Z(i, t, o, "", (function (e) {
          return e
        }))) : null != i && (S(i) && (i = function (e, t) {
          return {$$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
        }(i, o + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(A, "$&/") + "/") + e)), t.push(i)), 1;
        if (s = 0, a = "" === a ? "." : a + ":", C(e)) for (var c = 0; c < e.length; c++) {
          var u = a + D(l = e[c], c);
          s += Z(l, t, o, u, i)
        } else if (u = function (e) {
          return null === e || "object" != typeof e ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null
        }(e), "function" == typeof u) for (e = u.call(e), c = 0; !(l = e.next()).done;) s += Z(l = l.value, t, o, u = a + D(l, c++), i); else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return s
      }
      
      function B(e, t, n) {
        if (null == e) return e;
        var r = [], o = 0;
        return Z(e, r, "", "", (function (e) {
          return t.call(n, e, o++)
        })), r
      }
      
      function j(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then((function (t) {
            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
          }), (function (t) {
            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
          })), -1 === e._status && (e._status = 0, e._result = t)
        }
        if (1 === e._status) return e._result.default;
        throw e._result
      }
      
      var P = {current: null}, R = {transition: null},
        M = {ReactCurrentDispatcher: P, ReactCurrentBatchConfig: R, ReactCurrentOwner: w};
      t.Children = {
        map: B, forEach: function (e, t, n) {
          B(e, (function () {
            t.apply(this, arguments)
          }), n)
        }, count: function (e) {
          var t = 0;
          return B(e, (function () {
            t++
          })), t
        }, toArray: function (e) {
          return B(e, (function (e) {
            return e
          })) || []
        }, only: function (e) {
          if (!S(e)) throw Error("React.Children.only expected to receive a single React element child.");
          return e
        }
      }, t.Component = g, t.Fragment = o, t.Profiler = i, t.PureComponent = y, t.StrictMode = a, t.Suspense = u, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M, t.cloneElement = function (e, t, r) {
        if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o = h({}, e.props), a = e.key, i = e.ref, l = e._owner;
        if (null != t) {
          if (void 0 !== t.ref && (i = t.ref, l = w.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
          for (c in t) E.call(t, c) && !k.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
        }
        var c = arguments.length - 2;
        if (1 === c) o.children = r; else if (1 < c) {
          s = Array(c);
          for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
          o.children = s
        }
        return {$$typeof: n, type: e.type, key: a, ref: i, props: o, _owner: l}
      }, t.createContext = function (e) {
        return (e = {
          $$typeof: s,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        }).Provider = {$$typeof: l, _context: e}, e.Consumer = e
      }, t.createElement = F, t.createFactory = function (e) {
        var t = F.bind(null, e);
        return t.type = e, t
      }, t.createRef = function () {
        return {current: null}
      }, t.forwardRef = function (e) {
        return {$$typeof: c, render: e}
      }, t.isValidElement = S, t.lazy = function (e) {
        return {$$typeof: f, _payload: {_status: -1, _result: e}, _init: j}
      }, t.memo = function (e, t) {
        return {$$typeof: d, type: e, compare: void 0 === t ? null : t}
      }, t.startTransition = function (e) {
        var t = R.transition;
        R.transition = {};
        try {
          e()
        } finally {
          R.transition = t
        }
      }, t.unstable_act = function () {
        throw Error("act(...) is not supported in production builds of React.")
      }, t.useCallback = function (e, t) {
        return P.current.useCallback(e, t)
      }, t.useContext = function (e) {
        return P.current.useContext(e)
      }, t.useDebugValue = function () {
      }, t.useDeferredValue = function (e) {
        return P.current.useDeferredValue(e)
      }, t.useEffect = function (e, t) {
        return P.current.useEffect(e, t)
      }, t.useId = function () {
        return P.current.useId()
      }, t.useImperativeHandle = function (e, t, n) {
        return P.current.useImperativeHandle(e, t, n)
      }, t.useInsertionEffect = function (e, t) {
        return P.current.useInsertionEffect(e, t)
      }, t.useLayoutEffect = function (e, t) {
        return P.current.useLayoutEffect(e, t)
      }, t.useMemo = function (e, t) {
        return P.current.useMemo(e, t)
      }, t.useReducer = function (e, t, n) {
        return P.current.useReducer(e, t, n)
      }, t.useRef = function (e) {
        return P.current.useRef(e)
      }, t.useState = function (e) {
        return P.current.useState(e)
      }, t.useSyncExternalStore = function (e, t, n) {
        return P.current.useSyncExternalStore(e, t, n)
      }, t.useTransition = function () {
        return P.current.useTransition()
      }, t.version = "18.2.0"
    }, 7294: (e, t, n) => {
      "use strict";
      e.exports = n(2408)
    }, 5893: (e, t, n) => {
      "use strict";
      e.exports = n(5251)
    }, 53: (e, t) => {
      "use strict";
      
      function n(e, t) {
        var n = e.length;
        e.push(t);
        e:for (; 0 < n;) {
          var r = n - 1 >>> 1, o = e[r];
          if (!(0 < a(o, t))) break e;
          e[r] = t, e[n] = o, n = r
        }
      }
      
      function r(e) {
        return 0 === e.length ? null : e[0]
      }
      
      function o(e) {
        if (0 === e.length) return null;
        var t = e[0], n = e.pop();
        if (n !== t) {
          e[0] = n;
          e:for (var r = 0, o = e.length, i = o >>> 1; r < i;) {
            var l = 2 * (r + 1) - 1, s = e[l], c = l + 1, u = e[c];
            if (0 > a(s, n)) c < o && 0 > a(u, s) ? (e[r] = u, e[c] = n, r = c) : (e[r] = s, e[l] = n, r = l); else {
              if (!(c < o && 0 > a(u, n))) break e;
              e[r] = u, e[c] = n, r = c
            }
          }
        }
        return t
      }
      
      function a(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id
      }
      
      if ("object" == typeof performance && "function" == typeof performance.now) {
        var i = performance;
        t.unstable_now = function () {
          return i.now()
        }
      } else {
        var l = Date, s = l.now();
        t.unstable_now = function () {
          return l.now() - s
        }
      }
      var c = [], u = [], d = 1, f = null, p = 3, m = !1, h = !1, v = !1,
        g = "function" == typeof setTimeout ? setTimeout : null,
        b = "function" == typeof clearTimeout ? clearTimeout : null,
        y = "undefined" != typeof setImmediate ? setImmediate : null;
      
      function x(e) {
        for (var t = r(u); null !== t;) {
          if (null === t.callback) o(u); else {
            if (!(t.startTime <= e)) break;
            o(u), t.sortIndex = t.expirationTime, n(c, t)
          }
          t = r(u)
        }
      }
      
      function C(e) {
        if (v = !1, x(e), !h) if (null !== r(c)) h = !0, R(E); else {
          var t = r(u);
          null !== t && M(C, t.startTime - e)
        }
      }
      
      function E(e, n) {
        h = !1, v && (v = !1, b(S), S = -1), m = !0;
        var a = p;
        try {
          for (x(n), f = r(c); null !== f && (!(f.expirationTime > n) || e && !Z());) {
            var i = f.callback;
            if ("function" == typeof i) {
              f.callback = null, p = f.priorityLevel;
              var l = i(f.expirationTime <= n);
              n = t.unstable_now(), "function" == typeof l ? f.callback = l : f === r(c) && o(c), x(n)
            } else o(c);
            f = r(c)
          }
          if (null !== f) var s = !0; else {
            var d = r(u);
            null !== d && M(C, d.startTime - n), s = !1
          }
          return s
        } finally {
          f = null, p = a, m = !1
        }
      }
      
      "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var w, k = !1, F = null, S = -1, A = 5, D = -1;
      
      function Z() {
        return !(t.unstable_now() - D < A)
      }
      
      function B() {
        if (null !== F) {
          var e = t.unstable_now();
          D = e;
          var n = !0;
          try {
            n = F(!0, e)
          } finally {
            n ? w() : (k = !1, F = null)
          }
        } else k = !1
      }
      
      if ("function" == typeof y) w = function () {
        y(B)
      }; else if ("undefined" != typeof MessageChannel) {
        var j = new MessageChannel, P = j.port2;
        j.port1.onmessage = B, w = function () {
          P.postMessage(null)
        }
      } else w = function () {
        g(B, 0)
      };
      
      function R(e) {
        F = e, k || (k = !0, w())
      }
      
      function M(e, n) {
        S = g((function () {
          e(t.unstable_now())
        }), n)
      }
      
      t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
        e.callback = null
      }, t.unstable_continueExecution = function () {
        h || m || (h = !0, R(E))
      }, t.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < e ? Math.floor(1e3 / e) : 5
      }, t.unstable_getCurrentPriorityLevel = function () {
        return p
      }, t.unstable_getFirstCallbackNode = function () {
        return r(c)
      }, t.unstable_next = function (e) {
        switch (p) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = p
        }
        var n = p;
        p = t;
        try {
          return e()
        } finally {
          p = n
        }
      }, t.unstable_pauseExecution = function () {
      }, t.unstable_requestPaint = function () {
      }, t.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3
        }
        var n = p;
        p = e;
        try {
          return t()
        } finally {
          p = n
        }
      }, t.unstable_scheduleCallback = function (e, o, a) {
        var i = t.unstable_now();
        switch (a = "object" == typeof a && null !== a && "number" == typeof (a = a.delay) && 0 < a ? i + a : i, e) {
          case 1:
            var l = -1;
            break;
          case 2:
            l = 250;
            break;
          case 5:
            l = 1073741823;
            break;
          case 4:
            l = 1e4;
            break;
          default:
            l = 5e3
        }
        return e = {
          id: d++,
          callback: o,
          priorityLevel: e,
          startTime: a,
          expirationTime: l = a + l,
          sortIndex: -1
        }, a > i ? (e.sortIndex = a, n(u, e), null === r(c) && e === r(u) && (v ? (b(S), S = -1) : v = !0, M(C, a - i))) : (e.sortIndex = l, n(c, e), h || m || (h = !0, R(E))), e
      }, t.unstable_shouldYield = Z, t.unstable_wrapCallback = function (e) {
        var t = p;
        return function () {
          var n = p;
          p = t;
          try {
            return e.apply(this, arguments)
          } finally {
            p = n
          }
        }
      }
    }, 3840: (e, t, n) => {
      "use strict";
      e.exports = n(53)
    }, 3379: e => {
      "use strict";
      var t = [];
      
      function n(e) {
        for (var n = -1, r = 0; r < t.length; r++) if (t[r].identifier === e) {
          n = r;
          break
        }
        return n
      }
      
      function r(e, r) {
        for (var a = {}, i = [], l = 0; l < e.length; l++) {
          var s = e[l], c = r.base ? s[0] + r.base : s[0], u = a[c] || 0, d = "".concat(c, " ").concat(u);
          a[c] = u + 1;
          var f = n(d), p = {css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5]};
          if (-1 !== f) t[f].references++, t[f].updater(p); else {
            var m = o(p, r);
            r.byIndex = l, t.splice(l, 0, {identifier: d, updater: m, references: 1})
          }
          i.push(d)
        }
        return i
      }
      
      function o(e, t) {
        var n = t.domAPI(t);
        return n.update(e), function (t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
            n.update(e = t)
          } else n.remove()
        }
      }
      
      e.exports = function (e, o) {
        var a = r(e = e || [], o = o || {});
        return function (e) {
          e = e || [];
          for (var i = 0; i < a.length; i++) {
            var l = n(a[i]);
            t[l].references--
          }
          for (var s = r(e, o), c = 0; c < a.length; c++) {
            var u = n(a[c]);
            0 === t[u].references && (t[u].updater(), t.splice(u, 1))
          }
          a = s
        }
      }
    }, 569: e => {
      "use strict";
      var t = {};
      e.exports = function (e, n) {
        var r = function (e) {
          if (void 0 === t[e]) {
            var n = document.querySelector(e);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
              n = n.contentDocument.head
            } catch (e) {
              n = null
            }
            t[e] = n
          }
          return t[e]
        }(e);
        if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        r.appendChild(n)
      }
    }, 9216: e => {
      "use strict";
      e.exports = function (e) {
        var t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
      }
    }, 3565: (e, t, n) => {
      "use strict";
      e.exports = function (e) {
        var t = n.nc;
        t && e.setAttribute("nonce", t)
      }
    }, 7795: e => {
      "use strict";
      e.exports = function (e) {
        var t = e.insertStyleElement(e);
        return {
          update: function (n) {
            !function (e, t, n) {
              var r = "";
              n.supports && (r += "@supports (".concat(n.supports, ") {")), n.media && (r += "@media ".concat(n.media, " {"));
              var o = void 0 !== n.layer;
              o && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), r += n.css, o && (r += "}"), n.media && (r += "}"), n.supports && (r += "}");
              var a = n.sourceMap;
              a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), t.styleTagTransform(r, e, t.options)
            }(t, e, n)
          }, remove: function () {
            !function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e)
            }(t)
          }
        }
      }
    }, 4589: e => {
      "use strict";
      e.exports = function (e, t) {
        if (t.styleSheet) t.styleSheet.cssText = e; else {
          for (; t.firstChild;) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(e))
        }
      }
    }, 4836: e => {
      e.exports = function (e) {
        return e && e.__esModule ? e : {default: e}
      }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, 8670: function (e) {
      e.exports = function () {
        "use strict";
        for (var e = function (e, t, n) {
          return void 0 === t && (t = 0), void 0 === n && (n = 1), e < t ? t : e > n ? n : e
        }, t = e, n = {}, r = 0, o = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; r < o.length; r += 1) {
          var a = o[r];
          n["[object " + a + "]"] = a.toLowerCase()
        }
        var i = function (e) {
          return n[Object.prototype.toString.call(e)] || "object"
        }, l = i, s = i, c = Math.PI, u = {
          clip_rgb: function (e) {
            e._clipped = !1, e._unclipped = e.slice(0);
            for (var n = 0; n <= 3; n++) n < 3 ? ((e[n] < 0 || e[n] > 255) && (e._clipped = !0), e[n] = t(e[n], 0, 255)) : 3 === n && (e[n] = t(e[n], 0, 1));
            return e
          }, limit: e, type: i, unpack: function (e, t) {
            return void 0 === t && (t = null), e.length >= 3 ? Array.prototype.slice.call(e) : "object" == l(e[0]) && t ? t.split("").filter((function (t) {
              return void 0 !== e[0][t]
            })).map((function (t) {
              return e[0][t]
            })) : e[0]
          }, last: function (e) {
            if (e.length < 2) return null;
            var t = e.length - 1;
            return "string" == s(e[t]) ? e[t].toLowerCase() : null
          }, PI: c, TWOPI: 2 * c, PITHIRD: c / 3, DEG2RAD: c / 180, RAD2DEG: 180 / c
        }, d = {format: {}, autodetect: []}, f = u.last, p = u.clip_rgb, m = u.type, h = d, v = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = this;
          if ("object" === m(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
          var r = f(e), o = !1;
          if (!r) {
            o = !0, h.sorted || (h.autodetect = h.autodetect.sort((function (e, t) {
              return t.p - e.p
            })), h.sorted = !0);
            for (var a = 0, i = h.autodetect; a < i.length; a += 1) {
              var l = i[a];
              if (r = l.test.apply(l, e)) break
            }
          }
          if (!h.format[r]) throw new Error("unknown format: " + e);
          var s = h.format[r].apply(null, o ? e : e.slice(0, -1));
          n._rgb = p(s), 3 === n._rgb.length && n._rgb.push(1)
        };
        v.prototype.toString = function () {
          return "function" == m(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]"
        };
        var g = v, b = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(b.Color, [null].concat(e)))
        };
        b.Color = g, b.version = "2.4.2";
        var y = b, x = u.unpack, C = Math.max, E = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = x(e, "rgb"), r = n[0], o = n[1], a = n[2], i = 1 - C(r /= 255, C(o /= 255, a /= 255)),
            l = i < 1 ? 1 / (1 - i) : 0;
          return [(1 - r - i) * l, (1 - o - i) * l, (1 - a - i) * l, i]
        }, w = u.unpack, k = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = (e = w(e, "cmyk"))[0], r = e[1], o = e[2], a = e[3], i = e.length > 4 ? e[4] : 1;
          return 1 === a ? [0, 0, 0, i] : [n >= 1 ? 0 : 255 * (1 - n) * (1 - a), r >= 1 ? 0 : 255 * (1 - r) * (1 - a), o >= 1 ? 0 : 255 * (1 - o) * (1 - a), i]
        }, F = y, S = g, A = d, D = u.unpack, Z = u.type, B = E;
        S.prototype.cmyk = function () {
          return B(this._rgb)
        }, F.cmyk = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(S, [null].concat(e, ["cmyk"])))
        }, A.format.cmyk = k, A.autodetect.push({
          p: 2, test: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            if (e = D(e, "cmyk"), "array" === Z(e) && 4 === e.length) return "cmyk"
          }
        });
        var j = u.unpack, P = u.last, R = function (e) {
            return Math.round(100 * e) / 100
          }, M = function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = j(e, "hsla"), r = P(e) || "lsa";
            return n[0] = R(n[0] || 0), n[1] = R(100 * n[1]) + "%", n[2] = R(100 * n[2]) + "%", "hsla" === r || n.length > 3 && n[3] < 1 ? (n[3] = n.length > 3 ? n[3] : 1, r = "hsla") : n.length = 3, r + "(" + n.join(",") + ")"
          }, N = u.unpack, _ = function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = (e = N(e, "rgba"))[0], r = e[1], o = e[2];
            n /= 255, r /= 255, o /= 255;
            var a, i, l = Math.min(n, r, o), s = Math.max(n, r, o), c = (s + l) / 2;
            return s === l ? (a = 0, i = Number.NaN) : a = c < .5 ? (s - l) / (s + l) : (s - l) / (2 - s - l), n == s ? i = (r - o) / (s - l) : r == s ? i = 2 + (o - n) / (s - l) : o == s && (i = 4 + (n - r) / (s - l)), (i *= 60) < 0 && (i += 360), e.length > 3 && void 0 !== e[3] ? [i, a, c, e[3]] : [i, a, c]
          }, T = u.unpack, O = u.last, I = M, z = _, L = Math.round, $ = function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = T(e, "rgba"), r = O(e) || "rgb";
            return "hsl" == r.substr(0, 3) ? I(z(n), r) : (n[0] = L(n[0]), n[1] = L(n[1]), n[2] = L(n[2]), ("rgba" === r || n.length > 3 && n[3] < 1) && (n[3] = n.length > 3 ? n[3] : 1, r = "rgba"), r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")")
          }, W = u.unpack, H = Math.round, V = function () {
            for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
            var r, o, a, i = (t = W(t, "hsl"))[0], l = t[1], s = t[2];
            if (0 === l) r = o = a = 255 * s; else {
              var c = [0, 0, 0], u = [0, 0, 0], d = s < .5 ? s * (1 + l) : s + l - s * l, f = 2 * s - d, p = i / 360;
              c[0] = p + 1 / 3, c[1] = p, c[2] = p - 1 / 3;
              for (var m = 0; m < 3; m++) c[m] < 0 && (c[m] += 1), c[m] > 1 && (c[m] -= 1), 6 * c[m] < 1 ? u[m] = f + 6 * (d - f) * c[m] : 2 * c[m] < 1 ? u[m] = d : 3 * c[m] < 2 ? u[m] = f + (d - f) * (2 / 3 - c[m]) * 6 : u[m] = f;
              r = (e = [H(255 * u[0]), H(255 * u[1]), H(255 * u[2])])[0], o = e[1], a = e[2]
            }
            return t.length > 3 ? [r, o, a, t[3]] : [r, o, a, 1]
          }, U = V, q = d, K = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
          G = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
          X = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
          Y = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
          Q = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
          J = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
          ee = Math.round, te = function (e) {
            var t;
            if (e = e.toLowerCase().trim(), q.format.named) try {
              return q.format.named(e)
            } catch (e) {
            }
            if (t = e.match(K)) {
              for (var n = t.slice(1, 4), r = 0; r < 3; r++) n[r] = +n[r];
              return n[3] = 1, n
            }
            if (t = e.match(G)) {
              for (var o = t.slice(1, 5), a = 0; a < 4; a++) o[a] = +o[a];
              return o
            }
            if (t = e.match(X)) {
              for (var i = t.slice(1, 4), l = 0; l < 3; l++) i[l] = ee(2.55 * i[l]);
              return i[3] = 1, i
            }
            if (t = e.match(Y)) {
              for (var s = t.slice(1, 5), c = 0; c < 3; c++) s[c] = ee(2.55 * s[c]);
              return s[3] = +s[3], s
            }
            if (t = e.match(Q)) {
              var u = t.slice(1, 4);
              u[1] *= .01, u[2] *= .01;
              var d = U(u);
              return d[3] = 1, d
            }
            if (t = e.match(J)) {
              var f = t.slice(1, 4);
              f[1] *= .01, f[2] *= .01;
              var p = U(f);
              return p[3] = +t[4], p
            }
          };
        te.test = function (e) {
          return K.test(e) || G.test(e) || X.test(e) || Y.test(e) || Q.test(e) || J.test(e)
        };
        var ne = y, re = g, oe = d, ae = u.type, ie = $, le = te;
        re.prototype.css = function (e) {
          return ie(this._rgb, e)
        }, ne.css = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(re, [null].concat(e, ["css"])))
        }, oe.format.css = le, oe.autodetect.push({
          p: 5, test: function (e) {
            for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
            if (!t.length && "string" === ae(e) && le.test(e)) return "css"
          }
        });
        var se = g, ce = y, ue = u.unpack;
        d.format.gl = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = ue(e, "rgba");
          return n[0] *= 255, n[1] *= 255, n[2] *= 255, n
        }, ce.gl = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(se, [null].concat(e, ["gl"])))
        }, se.prototype.gl = function () {
          var e = this._rgb;
          return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]]
        };
        var de = u.unpack, fe = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n, r = de(e, "rgb"), o = r[0], a = r[1], i = r[2], l = Math.min(o, a, i), s = Math.max(o, a, i),
            c = s - l, u = 100 * c / 255, d = l / (255 - c) * 100;
          return 0 === c ? n = Number.NaN : (o === s && (n = (a - i) / c), a === s && (n = 2 + (i - o) / c), i === s && (n = 4 + (o - a) / c), (n *= 60) < 0 && (n += 360)), [n, u, d]
        }, pe = u.unpack, me = Math.floor, he = function () {
          for (var e, t, n, r, o, a, i = [], l = arguments.length; l--;) i[l] = arguments[l];
          var s, c, u, d = (i = pe(i, "hcg"))[0], f = i[1], p = i[2];
          p *= 255;
          var m = 255 * f;
          if (0 === f) s = c = u = p; else {
            360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
            var h = me(d /= 60), v = d - h, g = p * (1 - f), b = g + m * (1 - v), y = g + m * v, x = g + m;
            switch (h) {
              case 0:
                s = (e = [x, y, g])[0], c = e[1], u = e[2];
                break;
              case 1:
                s = (t = [b, x, g])[0], c = t[1], u = t[2];
                break;
              case 2:
                s = (n = [g, x, y])[0], c = n[1], u = n[2];
                break;
              case 3:
                s = (r = [g, b, x])[0], c = r[1], u = r[2];
                break;
              case 4:
                s = (o = [y, g, x])[0], c = o[1], u = o[2];
                break;
              case 5:
                s = (a = [x, g, b])[0], c = a[1], u = a[2]
            }
          }
          return [s, c, u, i.length > 3 ? i[3] : 1]
        }, ve = u.unpack, ge = u.type, be = y, ye = g, xe = d, Ce = fe;
        ye.prototype.hcg = function () {
          return Ce(this._rgb)
        }, be.hcg = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(ye, [null].concat(e, ["hcg"])))
        }, xe.format.hcg = he, xe.autodetect.push({
          p: 1, test: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            if (e = ve(e, "hcg"), "array" === ge(e) && 3 === e.length) return "hcg"
          }
        });
        var Ee = u.unpack, we = u.last, ke = Math.round, Fe = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = Ee(e, "rgba"), r = n[0], o = n[1], a = n[2], i = n[3], l = we(e) || "auto";
          void 0 === i && (i = 1), "auto" === l && (l = i < 1 ? "rgba" : "rgb");
          var s = "000000" + ((r = ke(r)) << 16 | (o = ke(o)) << 8 | (a = ke(a))).toString(16);
          s = s.substr(s.length - 6);
          var c = "0" + ke(255 * i).toString(16);
          switch (c = c.substr(c.length - 2), l.toLowerCase()) {
            case"rgba":
              return "#" + s + c;
            case"argb":
              return "#" + c + s;
            default:
              return "#" + s
          }
        }, Se = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, Ae = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, De = function (e) {
          if (e.match(Se)) {
            4 !== e.length && 7 !== e.length || (e = e.substr(1)), 3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
            var t = parseInt(e, 16);
            return [t >> 16, t >> 8 & 255, 255 & t, 1]
          }
          if (e.match(Ae)) {
            5 !== e.length && 9 !== e.length || (e = e.substr(1)), 4 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
            var n = parseInt(e, 16);
            return [n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, Math.round((255 & n) / 255 * 100) / 100]
          }
          throw new Error("unknown hex color: " + e)
        }, Ze = y, Be = g, je = u.type, Pe = d, Re = Fe;
        Be.prototype.hex = function (e) {
          return Re(this._rgb, e)
        }, Ze.hex = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(Be, [null].concat(e, ["hex"])))
        }, Pe.format.hex = De, Pe.autodetect.push({
          p: 4, test: function (e) {
            for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
            if (!t.length && "string" === je(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) return "hex"
          }
        });
        var Me = u.unpack, Ne = u.TWOPI, _e = Math.min, Te = Math.sqrt, Oe = Math.acos, Ie = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n, r = Me(e, "rgb"), o = r[0], a = r[1], i = r[2], l = _e(o /= 255, a /= 255, i /= 255),
            s = (o + a + i) / 3, c = s > 0 ? 1 - l / s : 0;
          return 0 === c ? n = NaN : (n = (o - a + (o - i)) / 2, n /= Te((o - a) * (o - a) + (o - i) * (a - i)), n = Oe(n), i > a && (n = Ne - n), n /= Ne), [360 * n, c, s]
        }, ze = u.unpack, Le = u.limit, $e = u.TWOPI, We = u.PITHIRD, He = Math.cos, Ve = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n, r, o, a = (e = ze(e, "hsi"))[0], i = e[1], l = e[2];
          return isNaN(a) && (a = 0), isNaN(i) && (i = 0), a > 360 && (a -= 360), a < 0 && (a += 360), (a /= 360) < 1 / 3 ? r = 1 - ((o = (1 - i) / 3) + (n = (1 + i * He($e * a) / He(We - $e * a)) / 3)) : a < 2 / 3 ? o = 1 - ((n = (1 - i) / 3) + (r = (1 + i * He($e * (a -= 1 / 3)) / He(We - $e * a)) / 3)) : n = 1 - ((r = (1 - i) / 3) + (o = (1 + i * He($e * (a -= 2 / 3)) / He(We - $e * a)) / 3)), [255 * (n = Le(l * n * 3)), 255 * (r = Le(l * r * 3)), 255 * (o = Le(l * o * 3)), e.length > 3 ? e[3] : 1]
        }, Ue = u.unpack, qe = u.type, Ke = y, Ge = g, Xe = d, Ye = Ie;
        Ge.prototype.hsi = function () {
          return Ye(this._rgb)
        }, Ke.hsi = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(Ge, [null].concat(e, ["hsi"])))
        }, Xe.format.hsi = Ve, Xe.autodetect.push({
          p: 2, test: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            if (e = Ue(e, "hsi"), "array" === qe(e) && 3 === e.length) return "hsi"
          }
        });
        var Qe = u.unpack, Je = u.type, et = y, tt = g, nt = d, rt = _;
        tt.prototype.hsl = function () {
          return rt(this._rgb)
        }, et.hsl = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(tt, [null].concat(e, ["hsl"])))
        }, nt.format.hsl = V, nt.autodetect.push({
          p: 2, test: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            if (e = Qe(e, "hsl"), "array" === Je(e) && 3 === e.length) return "hsl"
          }
        });
        var ot = u.unpack, at = Math.min, it = Math.max, lt = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n, r, o, a = (e = ot(e, "rgb"))[0], i = e[1], l = e[2], s = at(a, i, l), c = it(a, i, l), u = c - s;
          return o = c / 255, 0 === c ? (n = Number.NaN, r = 0) : (r = u / c, a === c && (n = (i - l) / u), i === c && (n = 2 + (l - a) / u), l === c && (n = 4 + (a - i) / u), (n *= 60) < 0 && (n += 360)), [n, r, o]
        }, st = u.unpack, ct = Math.floor, ut = function () {
          for (var e, t, n, r, o, a, i = [], l = arguments.length; l--;) i[l] = arguments[l];
          var s, c, u, d = (i = st(i, "hsv"))[0], f = i[1], p = i[2];
          if (p *= 255, 0 === f) s = c = u = p; else {
            360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
            var m = ct(d /= 60), h = d - m, v = p * (1 - f), g = p * (1 - f * h), b = p * (1 - f * (1 - h));
            switch (m) {
              case 0:
                s = (e = [p, b, v])[0], c = e[1], u = e[2];
                break;
              case 1:
                s = (t = [g, p, v])[0], c = t[1], u = t[2];
                break;
              case 2:
                s = (n = [v, p, b])[0], c = n[1], u = n[2];
                break;
              case 3:
                s = (r = [v, g, p])[0], c = r[1], u = r[2];
                break;
              case 4:
                s = (o = [b, v, p])[0], c = o[1], u = o[2];
                break;
              case 5:
                s = (a = [p, v, g])[0], c = a[1], u = a[2]
            }
          }
          return [s, c, u, i.length > 3 ? i[3] : 1]
        }, dt = u.unpack, ft = u.type, pt = y, mt = g, ht = d, vt = lt;
        mt.prototype.hsv = function () {
          return vt(this._rgb)
        }, pt.hsv = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(mt, [null].concat(e, ["hsv"])))
        }, ht.format.hsv = ut, ht.autodetect.push({
          p: 2, test: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            if (e = dt(e, "hsv"), "array" === ft(e) && 3 === e.length) return "hsv"
          }
        });
        var gt = {
          Kn: 18,
          Xn: .95047,
          Yn: 1,
          Zn: 1.08883,
          t0: .137931034,
          t1: .206896552,
          t2: .12841855,
          t3: .008856452
        }, bt = gt, yt = u.unpack, xt = Math.pow, Ct = function (e) {
          return (e /= 255) <= .04045 ? e / 12.92 : xt((e + .055) / 1.055, 2.4)
        }, Et = function (e) {
          return e > bt.t3 ? xt(e, 1 / 3) : e / bt.t2 + bt.t0
        }, wt = function (e, t, n) {
          return e = Ct(e), t = Ct(t), n = Ct(n), [Et((.4124564 * e + .3575761 * t + .1804375 * n) / bt.Xn), Et((.2126729 * e + .7151522 * t + .072175 * n) / bt.Yn), Et((.0193339 * e + .119192 * t + .9503041 * n) / bt.Zn)]
        }, kt = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = yt(e, "rgb"), r = n[0], o = n[1], a = n[2], i = wt(r, o, a), l = i[0], s = i[1], c = 116 * s - 16;
          return [c < 0 ? 0 : c, 500 * (l - s), 200 * (s - i[2])]
        }, Ft = gt, St = u.unpack, At = Math.pow, Dt = function (e) {
          return 255 * (e <= .00304 ? 12.92 * e : 1.055 * At(e, 1 / 2.4) - .055)
        }, Zt = function (e) {
          return e > Ft.t1 ? e * e * e : Ft.t2 * (e - Ft.t0)
        }, Bt = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n, r, o, a = (e = St(e, "lab"))[0], i = e[1], l = e[2];
          return r = (a + 16) / 116, n = isNaN(i) ? r : r + i / 500, o = isNaN(l) ? r : r - l / 200, r = Ft.Yn * Zt(r), n = Ft.Xn * Zt(n), o = Ft.Zn * Zt(o), [Dt(3.2404542 * n - 1.5371385 * r - .4985314 * o), Dt(-.969266 * n + 1.8760108 * r + .041556 * o), Dt(.0556434 * n - .2040259 * r + 1.0572252 * o), e.length > 3 ? e[3] : 1]
        }, jt = u.unpack, Pt = u.type, Rt = y, Mt = g, Nt = d, _t = kt;
        Mt.prototype.lab = function () {
          return _t(this._rgb)
        }, Rt.lab = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(Mt, [null].concat(e, ["lab"])))
        }, Nt.format.lab = Bt, Nt.autodetect.push({
          p: 2, test: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            if (e = jt(e, "lab"), "array" === Pt(e) && 3 === e.length) return "lab"
          }
        });
        var Tt = u.unpack, Ot = u.RAD2DEG, It = Math.sqrt, zt = Math.atan2, Lt = Math.round, $t = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = Tt(e, "lab"), r = n[0], o = n[1], a = n[2], i = It(o * o + a * a), l = (zt(a, o) * Ot + 360) % 360;
          return 0 === Lt(1e4 * i) && (l = Number.NaN), [r, i, l]
        }, Wt = u.unpack, Ht = kt, Vt = $t, Ut = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = Wt(e, "rgb"), r = n[0], o = n[1], a = n[2], i = Ht(r, o, a), l = i[0], s = i[1], c = i[2];
          return Vt(l, s, c)
        }, qt = u.unpack, Kt = u.DEG2RAD, Gt = Math.sin, Xt = Math.cos, Yt = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = qt(e, "lch"), r = n[0], o = n[1], a = n[2];
          return isNaN(a) && (a = 0), [r, Xt(a *= Kt) * o, Gt(a) * o]
        }, Qt = u.unpack, Jt = Yt, en = Bt, tn = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = (e = Qt(e, "lch"))[0], r = e[1], o = e[2], a = Jt(n, r, o), i = a[0], l = a[1], s = a[2],
            c = en(i, l, s);
          return [c[0], c[1], c[2], e.length > 3 ? e[3] : 1]
        }, nn = u.unpack, rn = tn, on = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = nn(e, "hcl").reverse();
          return rn.apply(void 0, n)
        }, an = u.unpack, ln = u.type, sn = y, cn = g, un = d, dn = Ut;
        cn.prototype.lch = function () {
          return dn(this._rgb)
        }, cn.prototype.hcl = function () {
          return dn(this._rgb).reverse()
        }, sn.lch = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(cn, [null].concat(e, ["lch"])))
        }, sn.hcl = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(cn, [null].concat(e, ["hcl"])))
        }, un.format.lch = tn, un.format.hcl = on, ["lch", "hcl"].forEach((function (e) {
          return un.autodetect.push({
            p: 2, test: function () {
              for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
              if (t = an(t, e), "array" === ln(t) && 3 === t.length) return e
            }
          })
        }));
        var fn = {
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflower: "#6495ed",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgreen: "#006400",
          darkgrey: "#a9a9a9",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkslategrey: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          gold: "#ffd700",
          goldenrod: "#daa520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          grey: "#808080",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          indianred: "#cd5c5c",
          indigo: "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          laserlemon: "#ffff54",
          lavender: "#e6e6fa",
          lavenderblush: "#fff0f5",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrod: "#fafad2",
          lightgoldenrodyellow: "#fafad2",
          lightgray: "#d3d3d3",
          lightgreen: "#90ee90",
          lightgrey: "#d3d3d3",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          maroon2: "#7f0000",
          maroon3: "#b03060",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370db",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#db7093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          purple2: "#7f007f",
          purple3: "#a020f0",
          rebeccapurple: "#663399",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          steelblue: "#4682b4",
          tan: "#d2b48c",
          teal: "#008080",
          thistle: "#d8bfd8",
          tomato: "#ff6347",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32"
        }, pn = d, mn = u.type, hn = fn, vn = De, gn = Fe;
        g.prototype.name = function () {
          for (var e = gn(this._rgb, "rgb"), t = 0, n = Object.keys(hn); t < n.length; t += 1) {
            var r = n[t];
            if (hn[r] === e) return r.toLowerCase()
          }
          return e
        }, pn.format.named = function (e) {
          if (e = e.toLowerCase(), hn[e]) return vn(hn[e]);
          throw new Error("unknown color name: " + e)
        }, pn.autodetect.push({
          p: 5, test: function (e) {
            for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
            if (!t.length && "string" === mn(e) && hn[e.toLowerCase()]) return "named"
          }
        });
        var bn = u.unpack, yn = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = bn(e, "rgb");
          return (n[0] << 16) + (n[1] << 8) + n[2]
        }, xn = u.type, Cn = function (e) {
          if ("number" == xn(e) && e >= 0 && e <= 16777215) return [e >> 16, e >> 8 & 255, 255 & e, 1];
          throw new Error("unknown num color: " + e)
        }, En = y, wn = g, kn = d, Fn = u.type, Sn = yn;
        wn.prototype.num = function () {
          return Sn(this._rgb)
        }, En.num = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(wn, [null].concat(e, ["num"])))
        }, kn.format.num = Cn, kn.autodetect.push({
          p: 5, test: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            if (1 === e.length && "number" === Fn(e[0]) && e[0] >= 0 && e[0] <= 16777215) return "num"
          }
        });
        var An = y, Dn = g, Zn = d, Bn = u.unpack, jn = u.type, Pn = Math.round;
        Dn.prototype.rgb = function (e) {
          return void 0 === e && (e = !0), !1 === e ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Pn)
        }, Dn.prototype.rgba = function (e) {
          return void 0 === e && (e = !0), this._rgb.slice(0, 4).map((function (t, n) {
            return n < 3 ? !1 === e ? t : Pn(t) : t
          }))
        }, An.rgb = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(Dn, [null].concat(e, ["rgb"])))
        }, Zn.format.rgb = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = Bn(e, "rgba");
          return void 0 === n[3] && (n[3] = 1), n
        }, Zn.autodetect.push({
          p: 3, test: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            if (e = Bn(e, "rgba"), "array" === jn(e) && (3 === e.length || 4 === e.length && "number" == jn(e[3]) && e[3] >= 0 && e[3] <= 1)) return "rgb"
          }
        });
        var Rn = Math.log, Mn = function (e) {
          var t, n, r, o = e / 100;
          return o < 66 ? (t = 255, n = o < 6 ? 0 : -155.25485562709179 - .44596950469579133 * (n = o - 2) + 104.49216199393888 * Rn(n), r = o < 20 ? 0 : .8274096064007395 * (r = o - 10) - 254.76935184120902 + 115.67994401066147 * Rn(r)) : (t = 351.97690566805693 + .114206453784165 * (t = o - 55) - 40.25366309332127 * Rn(t), n = 325.4494125711974 + .07943456536662342 * (n = o - 50) - 28.0852963507957 * Rn(n), r = 255), [t, n, r, 1]
        }, Nn = Mn, _n = u.unpack, Tn = Math.round, On = y, In = g, zn = d, Ln = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          for (var n, r = _n(e, "rgb"), o = r[0], a = r[2], i = 1e3, l = 4e4, s = .4; l - i > s;) {
            var c = Nn(n = .5 * (l + i));
            c[2] / c[0] >= a / o ? l = n : i = n
          }
          return Tn(n)
        };
        In.prototype.temp = In.prototype.kelvin = In.prototype.temperature = function () {
          return Ln(this._rgb)
        }, On.temp = On.kelvin = On.temperature = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(In, [null].concat(e, ["temp"])))
        }, zn.format.temp = zn.format.kelvin = zn.format.temperature = Mn;
        var $n = u.unpack, Wn = Math.cbrt, Hn = Math.pow, Vn = Math.sign, Un = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = $n(e, "rgb"), r = n[0], o = n[1], a = n[2], i = [qn(r / 255), qn(o / 255), qn(a / 255)], l = i[0],
            s = i[1], c = i[2], u = Wn(.4122214708 * l + .5363325363 * s + .0514459929 * c),
            d = Wn(.2119034982 * l + .6806995451 * s + .1073969566 * c),
            f = Wn(.0883024619 * l + .2817188376 * s + .6299787005 * c);
          return [.2104542553 * u + .793617785 * d - .0040720468 * f, 1.9779984951 * u - 2.428592205 * d + .4505937099 * f, .0259040371 * u + .7827717662 * d - .808675766 * f]
        };
        
        function qn(e) {
          var t = Math.abs(e);
          return t < .04045 ? e / 12.92 : (Vn(e) || 1) * Hn((t + .055) / 1.055, 2.4)
        }
        
        var Kn = u.unpack, Gn = Math.pow, Xn = Math.sign, Yn = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = (e = Kn(e, "lab"))[0], r = e[1], o = e[2], a = Gn(n + .3963377774 * r + .2158037573 * o, 3),
            i = Gn(n - .1055613458 * r - .0638541728 * o, 3), l = Gn(n - .0894841775 * r - 1.291485548 * o, 3);
          return [255 * Qn(4.0767416621 * a - 3.3077115913 * i + .2309699292 * l), 255 * Qn(-1.2684380046 * a + 2.6097574011 * i - .3413193965 * l), 255 * Qn(-.0041960863 * a - .7034186147 * i + 1.707614701 * l), e.length > 3 ? e[3] : 1]
        };
        
        function Qn(e) {
          var t = Math.abs(e);
          return t > .0031308 ? (Xn(e) || 1) * (1.055 * Gn(t, 1 / 2.4) - .055) : 12.92 * e
        }
        
        var Jn = u.unpack, er = u.type, tr = y, nr = g, rr = d, or = Un;
        nr.prototype.oklab = function () {
          return or(this._rgb)
        }, tr.oklab = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(nr, [null].concat(e, ["oklab"])))
        }, rr.format.oklab = Yn, rr.autodetect.push({
          p: 3, test: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            if (e = Jn(e, "oklab"), "array" === er(e) && 3 === e.length) return "oklab"
          }
        });
        var ar = u.unpack, ir = Un, lr = $t, sr = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = ar(e, "rgb"), r = n[0], o = n[1], a = n[2], i = ir(r, o, a), l = i[0], s = i[1], c = i[2];
          return lr(l, s, c)
        }, cr = u.unpack, ur = Yt, dr = Yn, fr = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          var n = (e = cr(e, "lch"))[0], r = e[1], o = e[2], a = ur(n, r, o), i = a[0], l = a[1], s = a[2],
            c = dr(i, l, s);
          return [c[0], c[1], c[2], e.length > 3 ? e[3] : 1]
        }, pr = u.unpack, mr = u.type, hr = y, vr = g, gr = d, br = sr;
        vr.prototype.oklch = function () {
          return br(this._rgb)
        }, hr.oklch = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(vr, [null].concat(e, ["oklch"])))
        }, gr.format.oklch = fr, gr.autodetect.push({
          p: 3, test: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            if (e = pr(e, "oklch"), "array" === mr(e) && 3 === e.length) return "oklch"
          }
        });
        var yr = g, xr = u.type;
        yr.prototype.alpha = function (e, t) {
          return void 0 === t && (t = !1), void 0 !== e && "number" === xr(e) ? t ? (this._rgb[3] = e, this) : new yr([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb") : this._rgb[3]
        }, g.prototype.clipped = function () {
          return this._rgb._clipped || !1
        };
        var Cr = g, Er = gt;
        Cr.prototype.darken = function (e) {
          void 0 === e && (e = 1);
          var t = this.lab();
          return t[0] -= Er.Kn * e, new Cr(t, "lab").alpha(this.alpha(), !0)
        }, Cr.prototype.brighten = function (e) {
          return void 0 === e && (e = 1), this.darken(-e)
        }, Cr.prototype.darker = Cr.prototype.darken, Cr.prototype.brighter = Cr.prototype.brighten, g.prototype.get = function (e) {
          var t = e.split("."), n = t[0], r = t[1], o = this[n]();
          if (r) {
            var a = n.indexOf(r) - ("ok" === n.substr(0, 2) ? 2 : 0);
            if (a > -1) return o[a];
            throw new Error("unknown channel " + r + " in mode " + n)
          }
          return o
        };
        var wr = g, kr = u.type, Fr = Math.pow;
        wr.prototype.luminance = function (e) {
          if (void 0 !== e && "number" === kr(e)) {
            if (0 === e) return new wr([0, 0, 0, this._rgb[3]], "rgb");
            if (1 === e) return new wr([255, 255, 255, this._rgb[3]], "rgb");
            var t = this.luminance(), n = 20, r = function (t, o) {
              var a = t.interpolate(o, .5, "rgb"), i = a.luminance();
              return Math.abs(e - i) < 1e-7 || !n-- ? a : i > e ? r(t, a) : r(a, o)
            }, o = (t > e ? r(new wr([0, 0, 0]), this) : r(this, new wr([255, 255, 255]))).rgb();
            return new wr(o.concat([this._rgb[3]]))
          }
          return Sr.apply(void 0, this._rgb.slice(0, 3))
        };
        var Sr = function (e, t, n) {
          return .2126 * (e = Ar(e)) + .7152 * (t = Ar(t)) + .0722 * Ar(n)
        }, Ar = function (e) {
          return (e /= 255) <= .03928 ? e / 12.92 : Fr((e + .055) / 1.055, 2.4)
        }, Dr = {}, Zr = g, Br = u.type, jr = Dr, Pr = function (e, t, n) {
          void 0 === n && (n = .5);
          for (var r = [], o = arguments.length - 3; o-- > 0;) r[o] = arguments[o + 3];
          var a = r[0] || "lrgb";
          if (jr[a] || r.length || (a = Object.keys(jr)[0]), !jr[a]) throw new Error("interpolation mode " + a + " is not defined");
          return "object" !== Br(e) && (e = new Zr(e)), "object" !== Br(t) && (t = new Zr(t)), jr[a](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
        }, Rr = g, Mr = Pr;
        Rr.prototype.mix = Rr.prototype.interpolate = function (e, t) {
          void 0 === t && (t = .5);
          for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
          return Mr.apply(void 0, [this, e, t].concat(n))
        };
        var Nr = g;
        Nr.prototype.premultiply = function (e) {
          void 0 === e && (e = !1);
          var t = this._rgb, n = t[3];
          return e ? (this._rgb = [t[0] * n, t[1] * n, t[2] * n, n], this) : new Nr([t[0] * n, t[1] * n, t[2] * n, n], "rgb")
        };
        var _r = g, Tr = gt;
        _r.prototype.saturate = function (e) {
          void 0 === e && (e = 1);
          var t = this.lch();
          return t[1] += Tr.Kn * e, t[1] < 0 && (t[1] = 0), new _r(t, "lch").alpha(this.alpha(), !0)
        }, _r.prototype.desaturate = function (e) {
          return void 0 === e && (e = 1), this.saturate(-e)
        };
        var Or = g, Ir = u.type;
        Or.prototype.set = function (e, t, n) {
          void 0 === n && (n = !1);
          var r = e.split("."), o = r[0], a = r[1], i = this[o]();
          if (a) {
            var l = o.indexOf(a) - ("ok" === o.substr(0, 2) ? 2 : 0);
            if (l > -1) {
              if ("string" == Ir(t)) switch (t.charAt(0)) {
                case"+":
                case"-":
                  i[l] += +t;
                  break;
                case"*":
                  i[l] *= +t.substr(1);
                  break;
                case"/":
                  i[l] /= +t.substr(1);
                  break;
                default:
                  i[l] = +t
              } else {
                if ("number" !== Ir(t)) throw new Error("unsupported value for Color.set");
                i[l] = t
              }
              var s = new Or(i, o);
              return n ? (this._rgb = s._rgb, this) : s
            }
            throw new Error("unknown channel " + a + " in mode " + o)
          }
          return i
        };
        var zr = g;
        Dr.rgb = function (e, t, n) {
          var r = e._rgb, o = t._rgb;
          return new zr(r[0] + n * (o[0] - r[0]), r[1] + n * (o[1] - r[1]), r[2] + n * (o[2] - r[2]), "rgb")
        };
        var Lr = g, $r = Math.sqrt, Wr = Math.pow;
        Dr.lrgb = function (e, t, n) {
          var r = e._rgb, o = r[0], a = r[1], i = r[2], l = t._rgb, s = l[0], c = l[1], u = l[2];
          return new Lr($r(Wr(o, 2) * (1 - n) + Wr(s, 2) * n), $r(Wr(a, 2) * (1 - n) + Wr(c, 2) * n), $r(Wr(i, 2) * (1 - n) + Wr(u, 2) * n), "rgb")
        };
        var Hr = g;
        Dr.lab = function (e, t, n) {
          var r = e.lab(), o = t.lab();
          return new Hr(r[0] + n * (o[0] - r[0]), r[1] + n * (o[1] - r[1]), r[2] + n * (o[2] - r[2]), "lab")
        };
        var Vr = g, Ur = function (e, t, n, r) {
          var o, a, i, l, s, c, u, d, f, p, m, h, v;
          return "hsl" === r ? (i = e.hsl(), l = t.hsl()) : "hsv" === r ? (i = e.hsv(), l = t.hsv()) : "hcg" === r ? (i = e.hcg(), l = t.hcg()) : "hsi" === r ? (i = e.hsi(), l = t.hsi()) : "lch" === r || "hcl" === r ? (r = "hcl", i = e.hcl(), l = t.hcl()) : "oklch" === r && (i = e.oklch().reverse(), l = t.oklch().reverse()), "h" !== r.substr(0, 1) && "oklch" !== r || (s = (o = i)[0], u = o[1], f = o[2], c = (a = l)[0], d = a[1], p = a[2]), isNaN(s) || isNaN(c) ? isNaN(s) ? isNaN(c) ? h = Number.NaN : (h = c, 1 != f && 0 != f || "hsv" == r || (m = d)) : (h = s, 1 != p && 0 != p || "hsv" == r || (m = u)) : h = s + n * (c > s && c - s > 180 ? c - (s + 360) : c < s && s - c > 180 ? c + 360 - s : c - s), void 0 === m && (m = u + n * (d - u)), v = f + n * (p - f), new Vr("oklch" === r ? [v, m, h] : [h, m, v], r)
        }, qr = Ur, Kr = function (e, t, n) {
          return qr(e, t, n, "lch")
        };
        Dr.lch = Kr, Dr.hcl = Kr;
        var Gr = g;
        Dr.num = function (e, t, n) {
          var r = e.num(), o = t.num();
          return new Gr(r + n * (o - r), "num")
        };
        var Xr = Ur;
        Dr.hcg = function (e, t, n) {
          return Xr(e, t, n, "hcg")
        };
        var Yr = Ur;
        Dr.hsi = function (e, t, n) {
          return Yr(e, t, n, "hsi")
        };
        var Qr = Ur;
        Dr.hsl = function (e, t, n) {
          return Qr(e, t, n, "hsl")
        };
        var Jr = Ur;
        Dr.hsv = function (e, t, n) {
          return Jr(e, t, n, "hsv")
        };
        var eo = g;
        Dr.oklab = function (e, t, n) {
          var r = e.oklab(), o = t.oklab();
          return new eo(r[0] + n * (o[0] - r[0]), r[1] + n * (o[1] - r[1]), r[2] + n * (o[2] - r[2]), "oklab")
        };
        var to = Ur;
        Dr.oklch = function (e, t, n) {
          return to(e, t, n, "oklch")
        };
        var no = g, ro = u.clip_rgb, oo = Math.pow, ao = Math.sqrt, io = Math.PI, lo = Math.cos, so = Math.sin,
          co = Math.atan2, uo = function (e, t) {
            for (var n = e.length, r = [0, 0, 0, 0], o = 0; o < e.length; o++) {
              var a = e[o], i = t[o] / n, l = a._rgb;
              r[0] += oo(l[0], 2) * i, r[1] += oo(l[1], 2) * i, r[2] += oo(l[2], 2) * i, r[3] += l[3] * i
            }
            return r[0] = ao(r[0]), r[1] = ao(r[1]), r[2] = ao(r[2]), r[3] > .9999999 && (r[3] = 1), new no(ro(r))
          }, fo = y, po = u.type, mo = Math.pow, ho = function (e) {
            var t = "rgb", n = fo("#ccc"), r = 0, o = [0, 1], a = [], i = [0, 0], l = !1, s = [], c = !1, u = 0, d = 1,
              f = !1, p = {}, m = !0, h = 1, v = function (e) {
                if ((e = e || ["#fff", "#000"]) && "string" === po(e) && fo.brewer && fo.brewer[e.toLowerCase()] && (e = fo.brewer[e.toLowerCase()]), "array" === po(e)) {
                  1 === e.length && (e = [e[0], e[0]]), e = e.slice(0);
                  for (var t = 0; t < e.length; t++) e[t] = fo(e[t]);
                  a.length = 0;
                  for (var n = 0; n < e.length; n++) a.push(n / (e.length - 1))
                }
                return x(), s = e
              }, g = function (e) {
                return e
              }, b = function (e) {
                return e
              }, y = function (e, r) {
                var o, c;
                if (null == r && (r = !1), isNaN(e) || null === e) return n;
                c = r ? e : l && l.length > 2 ? function (e) {
                  if (null != l) {
                    for (var t = l.length - 1, n = 0; n < t && e >= l[n];) n++;
                    return n - 1
                  }
                  return 0
                }(e) / (l.length - 2) : d !== u ? (e - u) / (d - u) : 1, c = b(c), r || (c = g(c)), 1 !== h && (c = mo(c, h)), c = i[0] + c * (1 - i[0] - i[1]), c = Math.min(1, Math.max(0, c));
                var f = Math.floor(1e4 * c);
                if (m && p[f]) o = p[f]; else {
                  if ("array" === po(s)) for (var v = 0; v < a.length; v++) {
                    var y = a[v];
                    if (c <= y) {
                      o = s[v];
                      break
                    }
                    if (c >= y && v === a.length - 1) {
                      o = s[v];
                      break
                    }
                    if (c > y && c < a[v + 1]) {
                      c = (c - y) / (a[v + 1] - y), o = fo.interpolate(s[v], s[v + 1], c, t);
                      break
                    }
                  } else "function" === po(s) && (o = s(c));
                  m && (p[f] = o)
                }
                return o
              }, x = function () {
                return p = {}
              };
            v(e);
            var C = function (e) {
              var t = fo(y(e));
              return c && t[c] ? t[c]() : t
            };
            return C.classes = function (e) {
              if (null != e) {
                if ("array" === po(e)) l = e, o = [e[0], e[e.length - 1]]; else {
                  var t = fo.analyze(o);
                  l = 0 === e ? [t.min, t.max] : fo.limits(t, "e", e)
                }
                return C
              }
              return l
            }, C.domain = function (e) {
              if (!arguments.length) return o;
              u = e[0], d = e[e.length - 1], a = [];
              var t = s.length;
              if (e.length === t && u !== d) for (var n = 0, r = Array.from(e); n < r.length; n += 1) {
                var i = r[n];
                a.push((i - u) / (d - u))
              } else {
                for (var l = 0; l < t; l++) a.push(l / (t - 1));
                if (e.length > 2) {
                  var c = e.map((function (t, n) {
                    return n / (e.length - 1)
                  })), f = e.map((function (e) {
                    return (e - u) / (d - u)
                  }));
                  f.every((function (e, t) {
                    return c[t] === e
                  })) || (b = function (e) {
                    if (e <= 0 || e >= 1) return e;
                    for (var t = 0; e >= f[t + 1];) t++;
                    var n = (e - f[t]) / (f[t + 1] - f[t]);
                    return c[t] + n * (c[t + 1] - c[t])
                  })
                }
              }
              return o = [u, d], C
            }, C.mode = function (e) {
              return arguments.length ? (t = e, x(), C) : t
            }, C.range = function (e, t) {
              return v(e), C
            }, C.out = function (e) {
              return c = e, C
            }, C.spread = function (e) {
              return arguments.length ? (r = e, C) : r
            }, C.correctLightness = function (e) {
              return null == e && (e = !0), f = e, x(), g = f ? function (e) {
                for (var t = y(0, !0).lab()[0], n = y(1, !0).lab()[0], r = t > n, o = y(e, !0).lab()[0], a = t + (n - t) * e, i = o - a, l = 0, s = 1, c = 20; Math.abs(i) > .01 && c-- > 0;) r && (i *= -1), i < 0 ? (l = e, e += .5 * (s - e)) : (s = e, e += .5 * (l - e)), i = (o = y(e, !0).lab()[0]) - a;
                return e
              } : function (e) {
                return e
              }, C
            }, C.padding = function (e) {
              return null != e ? ("number" === po(e) && (e = [e, e]), i = e, C) : i
            }, C.colors = function (t, n) {
              arguments.length < 2 && (n = "hex");
              var r = [];
              if (0 === arguments.length) r = s.slice(0); else if (1 === t) r = [C(.5)]; else if (t > 1) {
                var a = o[0], i = o[1] - a;
                r = vo(0, t, !1).map((function (e) {
                  return C(a + e / (t - 1) * i)
                }))
              } else {
                e = [];
                var c = [];
                if (l && l.length > 2) for (var u = 1, d = l.length, f = 1 <= d; f ? u < d : u > d; f ? u++ : u--) c.push(.5 * (l[u - 1] + l[u])); else c = o;
                r = c.map((function (e) {
                  return C(e)
                }))
              }
              return fo[n] && (r = r.map((function (e) {
                return e[n]()
              }))), r
            }, C.cache = function (e) {
              return null != e ? (m = e, C) : m
            }, C.gamma = function (e) {
              return null != e ? (h = e, C) : h
            }, C.nodata = function (e) {
              return null != e ? (n = fo(e), C) : n
            }, C
          };
        
        function vo(e, t, n) {
          for (var r = [], o = e < t, a = n ? o ? t + 1 : t - 1 : t, i = e; o ? i < a : i > a; o ? i++ : i--) r.push(i);
          return r
        }
        
        var go = g, bo = ho, yo = y, xo = function (e, t, n) {
          if (!xo[n]) throw new Error("unknown blend mode " + n);
          return xo[n](e, t)
        }, Co = function (e) {
          return function (t, n) {
            var r = yo(n).rgb(), o = yo(t).rgb();
            return yo.rgb(e(r, o))
          }
        }, Eo = function (e) {
          return function (t, n) {
            var r = [];
            return r[0] = e(t[0], n[0]), r[1] = e(t[1], n[1]), r[2] = e(t[2], n[2]), r
          }
        };
        xo.normal = Co(Eo((function (e) {
          return e
        }))), xo.multiply = Co(Eo((function (e, t) {
          return e * t / 255
        }))), xo.screen = Co(Eo((function (e, t) {
          return 255 * (1 - (1 - e / 255) * (1 - t / 255))
        }))), xo.overlay = Co(Eo((function (e, t) {
          return t < 128 ? 2 * e * t / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255))
        }))), xo.darken = Co(Eo((function (e, t) {
          return e > t ? t : e
        }))), xo.lighten = Co(Eo((function (e, t) {
          return e > t ? e : t
        }))), xo.dodge = Co(Eo((function (e, t) {
          return 255 === e || (e = t / 255 * 255 / (1 - e / 255)) > 255 ? 255 : e
        }))), xo.burn = Co(Eo((function (e, t) {
          return 255 * (1 - (1 - t / 255) / (e / 255))
        })));
        for (var wo = xo, ko = u.type, Fo = u.clip_rgb, So = u.TWOPI, Ao = Math.pow, Do = Math.sin, Zo = Math.cos, Bo = y, jo = g, Po = Math.floor, Ro = Math.random, Mo = i, No = Math.log, _o = Math.pow, To = Math.floor, Oo = Math.abs, Io = function (e, t) {
          void 0 === t && (t = null);
          var n = {min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0};
          return "object" === Mo(e) && (e = Object.values(e)), e.forEach((function (e) {
            t && "object" === Mo(e) && (e = e[t]), null == e || isNaN(e) || (n.values.push(e), n.sum += e, e < n.min && (n.min = e), e > n.max && (n.max = e), n.count += 1)
          })), n.domain = [n.min, n.max], n.limits = function (e, t) {
            return zo(n, e, t)
          }, n
        }, zo = function (e, t, n) {
          void 0 === t && (t = "equal"), void 0 === n && (n = 7), "array" == Mo(e) && (e = Io(e));
          var r = e.min, o = e.max, a = e.values.sort((function (e, t) {
            return e - t
          }));
          if (1 === n) return [r, o];
          var i = [];
          if ("c" === t.substr(0, 1) && (i.push(r), i.push(o)), "e" === t.substr(0, 1)) {
            i.push(r);
            for (var l = 1; l < n; l++) i.push(r + l / n * (o - r));
            i.push(o)
          } else if ("l" === t.substr(0, 1)) {
            if (r <= 0) throw new Error("Logarithmic scales are only possible for values > 0");
            var s = Math.LOG10E * No(r), c = Math.LOG10E * No(o);
            i.push(r);
            for (var u = 1; u < n; u++) i.push(_o(10, s + u / n * (c - s)));
            i.push(o)
          } else if ("q" === t.substr(0, 1)) {
            i.push(r);
            for (var d = 1; d < n; d++) {
              var f = (a.length - 1) * d / n, p = To(f);
              if (p === f) i.push(a[p]); else {
                var m = f - p;
                i.push(a[p] * (1 - m) + a[p + 1] * m)
              }
            }
            i.push(o)
          } else if ("k" === t.substr(0, 1)) {
            var h, v = a.length, g = new Array(v), b = new Array(n), y = !0, x = 0, C = null;
            (C = []).push(r);
            for (var E = 1; E < n; E++) C.push(r + E / n * (o - r));
            for (C.push(o); y;) {
              for (var w = 0; w < n; w++) b[w] = 0;
              for (var k = 0; k < v; k++) for (var F = a[k], S = Number.MAX_VALUE, A = void 0, D = 0; D < n; D++) {
                var Z = Oo(C[D] - F);
                Z < S && (S = Z, A = D), b[A]++, g[k] = A
              }
              for (var B = new Array(n), j = 0; j < n; j++) B[j] = null;
              for (var P = 0; P < v; P++) null === B[h = g[P]] ? B[h] = a[P] : B[h] += a[P];
              for (var R = 0; R < n; R++) B[R] *= 1 / b[R];
              y = !1;
              for (var M = 0; M < n; M++) if (B[M] !== C[M]) {
                y = !0;
                break
              }
              C = B, ++x > 200 && (y = !1)
            }
            for (var N = {}, _ = 0; _ < n; _++) N[_] = [];
            for (var T = 0; T < v; T++) N[h = g[T]].push(a[T]);
            for (var O = [], I = 0; I < n; I++) O.push(N[I][0]), O.push(N[I][N[I].length - 1]);
            O = O.sort((function (e, t) {
              return e - t
            })), i.push(O[0]);
            for (var z = 1; z < O.length; z += 2) {
              var L = O[z];
              isNaN(L) || -1 !== i.indexOf(L) || i.push(L)
            }
          }
          return i
        }, Lo = {
          analyze: Io,
          limits: zo
        }, $o = g, Wo = g, Ho = Math.sqrt, Vo = Math.pow, Uo = Math.min, qo = Math.max, Ko = Math.atan2, Go = Math.abs, Xo = Math.cos, Yo = Math.sin, Qo = Math.exp, Jo = Math.PI, ea = g, ta = g, na = y, ra = ho, oa = {
          cool: function () {
            return ra([na.hsl(180, 1, .9), na.hsl(250, .7, .4)])
          }, hot: function () {
            return ra(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
          }
        }, aa = {
          OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
          PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
          BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
          Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
          BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
          YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
          YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
          Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
          RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
          Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
          YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
          Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
          GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
          Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
          YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
          PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
          Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
          PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
          Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
          Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
          RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
          RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
          PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
          PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
          RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
          BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
          RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
          PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
          Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
          Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
          Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
          Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
          Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
          Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
          Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
          Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
        }, ia = 0, la = Object.keys(aa); ia < la.length; ia += 1) {
          var sa = la[ia];
          aa[sa.toLowerCase()] = aa[sa]
        }
        var ca = aa, ua = y;
        return ua.average = function (e, t, n) {
          void 0 === t && (t = "lrgb"), void 0 === n && (n = null);
          var r = e.length;
          n || (n = Array.from(new Array(r)).map((function () {
            return 1
          })));
          var o = r / n.reduce((function (e, t) {
            return e + t
          }));
          if (n.forEach((function (e, t) {
            n[t] *= o
          })), e = e.map((function (e) {
            return new no(e)
          })), "lrgb" === t) return uo(e, n);
          for (var a = e.shift(), i = a.get(t), l = [], s = 0, c = 0, u = 0; u < i.length; u++) if (i[u] = (i[u] || 0) * n[0], l.push(isNaN(i[u]) ? 0 : n[0]), "h" === t.charAt(u) && !isNaN(i[u])) {
            var d = i[u] / 180 * io;
            s += lo(d) * n[0], c += so(d) * n[0]
          }
          var f = a.alpha() * n[0];
          e.forEach((function (e, r) {
            var o = e.get(t);
            f += e.alpha() * n[r + 1];
            for (var a = 0; a < i.length; a++) if (!isNaN(o[a])) if (l[a] += n[r + 1], "h" === t.charAt(a)) {
              var u = o[a] / 180 * io;
              s += lo(u) * n[r + 1], c += so(u) * n[r + 1]
            } else i[a] += o[a] * n[r + 1]
          }));
          for (var p = 0; p < i.length; p++) if ("h" === t.charAt(p)) {
            for (var m = co(c / l[p], s / l[p]) / io * 180; m < 0;) m += 360;
            for (; m >= 360;) m -= 360;
            i[p] = m
          } else i[p] = i[p] / l[p];
          return f /= r, new no(i, t).alpha(f > .99999 ? 1 : f, !0)
        }, ua.bezier = function (e) {
          var t = function (e) {
            var t, n, r, o, a, i, l;
            if (2 === (e = e.map((function (e) {
              return new go(e)
            }))).length) t = e.map((function (e) {
              return e.lab()
            })), a = t[0], i = t[1], o = function (e) {
              var t = [0, 1, 2].map((function (t) {
                return a[t] + e * (i[t] - a[t])
              }));
              return new go(t, "lab")
            }; else if (3 === e.length) n = e.map((function (e) {
              return e.lab()
            })), a = n[0], i = n[1], l = n[2], o = function (e) {
              var t = [0, 1, 2].map((function (t) {
                return (1 - e) * (1 - e) * a[t] + 2 * (1 - e) * e * i[t] + e * e * l[t]
              }));
              return new go(t, "lab")
            }; else if (4 === e.length) {
              var s;
              r = e.map((function (e) {
                return e.lab()
              })), a = r[0], i = r[1], l = r[2], s = r[3], o = function (e) {
                var t = [0, 1, 2].map((function (t) {
                  return (1 - e) * (1 - e) * (1 - e) * a[t] + 3 * (1 - e) * (1 - e) * e * i[t] + 3 * (1 - e) * e * e * l[t] + e * e * e * s[t]
                }));
                return new go(t, "lab")
              }
            } else {
              if (!(e.length >= 5)) throw new RangeError("No point in running bezier with only one color.");
              var c, u, d;
              c = e.map((function (e) {
                return e.lab()
              })), d = e.length - 1, u = function (e) {
                for (var t = [1, 1], n = 1; n < e; n++) {
                  for (var r = [1], o = 1; o <= t.length; o++) r[o] = (t[o] || 0) + t[o - 1];
                  t = r
                }
                return t
              }(d), o = function (e) {
                var t = 1 - e, n = [0, 1, 2].map((function (n) {
                  return c.reduce((function (r, o, a) {
                    return r + u[a] * Math.pow(t, d - a) * Math.pow(e, a) * o[n]
                  }), 0)
                }));
                return new go(n, "lab")
              }
            }
            return o
          }(e);
          return t.scale = function () {
            return bo(t)
          }, t
        }, ua.blend = wo, ua.cubehelix = function (e, t, n, r, o) {
          void 0 === e && (e = 300), void 0 === t && (t = -1.5), void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === o && (o = [0, 1]);
          var a, i = 0;
          "array" === ko(o) ? a = o[1] - o[0] : (a = 0, o = [o, o]);
          var l = function (l) {
            var s = So * ((e + 120) / 360 + t * l), c = Ao(o[0] + a * l, r),
              u = (0 !== i ? n[0] + l * i : n) * c * (1 - c) / 2, d = Zo(s), f = Do(s);
            return Bo(Fo([255 * (c + u * (-.14861 * d + 1.78277 * f)), 255 * (c + u * (-.29227 * d - .90649 * f)), 255 * (c + u * (1.97294 * d)), 1]))
          };
          return l.start = function (t) {
            return null == t ? e : (e = t, l)
          }, l.rotations = function (e) {
            return null == e ? t : (t = e, l)
          }, l.gamma = function (e) {
            return null == e ? r : (r = e, l)
          }, l.hue = function (e) {
            return null == e ? n : ("array" === ko(n = e) ? 0 == (i = n[1] - n[0]) && (n = n[1]) : i = 0, l)
          }, l.lightness = function (e) {
            return null == e ? o : ("array" === ko(e) ? (o = e, a = e[1] - e[0]) : (o = [e, e], a = 0), l)
          }, l.scale = function () {
            return Bo.scale(l)
          }, l.hue(n), l
        }, ua.mix = ua.interpolate = Pr, ua.random = function () {
          for (var e = "#", t = 0; t < 6; t++) e += "0123456789abcdef".charAt(Po(16 * Ro()));
          return new jo(e, "hex")
        }, ua.scale = ho, ua.analyze = Lo.analyze, ua.contrast = function (e, t) {
          e = new $o(e), t = new $o(t);
          var n = e.luminance(), r = t.luminance();
          return n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05)
        }, ua.deltaE = function (e, t, n, r, o) {
          void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === o && (o = 1);
          var a = function (e) {
            return 360 * e / (2 * Jo)
          }, i = function (e) {
            return 2 * Jo * e / 360
          };
          e = new Wo(e), t = new Wo(t);
          var l = Array.from(e.lab()), s = l[0], c = l[1], u = l[2], d = Array.from(t.lab()), f = d[0], p = d[1],
            m = d[2], h = (s + f) / 2, v = (Ho(Vo(c, 2) + Vo(u, 2)) + Ho(Vo(p, 2) + Vo(m, 2))) / 2,
            g = .5 * (1 - Ho(Vo(v, 7) / (Vo(v, 7) + Vo(25, 7)))), b = c * (1 + g), y = p * (1 + g),
            x = Ho(Vo(b, 2) + Vo(u, 2)), C = Ho(Vo(y, 2) + Vo(m, 2)), E = (x + C) / 2, w = a(Ko(u, b)), k = a(Ko(m, y)),
            F = w >= 0 ? w : w + 360, S = k >= 0 ? k : k + 360, A = Go(F - S) > 180 ? (F + S + 360) / 2 : (F + S) / 2,
            D = 1 - .17 * Xo(i(A - 30)) + .24 * Xo(i(2 * A)) + .32 * Xo(i(3 * A + 6)) - .2 * Xo(i(4 * A - 63)),
            Z = S - F;
          Z = Go(Z) <= 180 ? Z : S <= F ? Z + 360 : Z - 360, Z = 2 * Ho(x * C) * Yo(i(Z) / 2);
          var B = f - s, j = C - x, P = 1 + .015 * Vo(h - 50, 2) / Ho(20 + Vo(h - 50, 2)), R = 1 + .045 * E,
            M = 1 + .015 * E * D, N = 30 * Qo(-Vo((A - 275) / 25, 2)),
            _ = -2 * Ho(Vo(E, 7) / (Vo(E, 7) + Vo(25, 7))) * Yo(2 * i(N)),
            T = Ho(Vo(B / (n * P), 2) + Vo(j / (r * R), 2) + Vo(Z / (o * M), 2) + _ * (j / (r * R)) * (Z / (o * M)));
          return qo(0, Uo(100, T))
        }, ua.distance = function (e, t, n) {
          void 0 === n && (n = "lab"), e = new ea(e), t = new ea(t);
          var r = e.get(n), o = t.get(n), a = 0;
          for (var i in r) {
            var l = (r[i] || 0) - (o[i] || 0);
            a += l * l
          }
          return Math.sqrt(a)
        }, ua.limits = Lo.limits, ua.valid = function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          try {
            return new (Function.prototype.bind.apply(ta, [null].concat(e))), !0
          } catch (e) {
            return !1
          }
        }, ua.scales = oa, ua.colors = fn, ua.brewer = ca, ua
      }()
    }, 7462: (e, t, n) => {
      "use strict";
      
      function r() {
        return r = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, r.apply(this, arguments)
      }
      
      n.d(t, {Z: () => r})
    }, 3366: (e, t, n) => {
      "use strict";
      
      function r(e, t) {
        if (null == e) return {};
        var n, r, o = {}, a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }
      
      n.d(t, {Z: () => r})
    }
  }, r = {};
  
  function o(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var a = r[e] = {id: e, exports: {}};
    return n[e].call(a.exports, a, a.exports, o), a.exports
  }
  
  o.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return o.d(t, {a: t}), t
  }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, o.t = function (n, r) {
    if (1 & r && (n = this(n)), 8 & r) return n;
    if ("object" == typeof n && n) {
      if (4 & r && n.__esModule) return n;
      if (16 & r && "function" == typeof n.then) return n
    }
    var a = Object.create(null);
    o.r(a);
    var i = {};
    e = e || [null, t({}), t([]), t(t)];
    for (var l = 2 & r && n; "object" == typeof l && !~e.indexOf(l); l = t(l)) Object.getOwnPropertyNames(l).forEach((e => i[e] = () => n[e]));
    return i.default = () => n, o.d(a, i), a
  }, o.d = (e, t) => {
    for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
  }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, o.nc = void 0, (() => {
    "use strict";
    var e = o(7294), t = o(745), n = o(3379), r = o.n(n), a = o(7795), l = o.n(a), s = o(569), c = o.n(s), u = o(3565),
      d = o.n(u), f = o(9216), p = o.n(f), m = o(4589), h = o.n(m), v = o(2242), g = {};
    g.styleTagTransform = h(), g.setAttributes = d(), g.insert = c().bind(null, "head"), g.domAPI = l(), g.insertStyleElement = p(), r()(v.Z, g), v.Z && v.Z.locals && v.Z.locals;
    var b = o(3366), y = o(7462), x = o(6010), C = o(4780), E = o(2077), w = o(6122);
    const k = e.createContext({});
    var F = o(1588), S = o(4867);
    
    function A(e) {
      return (0, S.Z)("MuiList", e)
    }
    
    (0, F.Z)("MuiList", ["root", "padding", "dense", "subheader"]);
    var D = o(5893);
    const Z = ["children", "className", "component", "dense", "disablePadding", "subheader"], B = (0, E.ZP)("ul", {
        name: "MuiList", slot: "Root", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader]
        }
      })((({ownerState: e}) => (0, y.Z)({
        listStyle: "none",
        margin: 0,
        padding: 0,
        position: "relative"
      }, !e.disablePadding && {paddingTop: 8, paddingBottom: 8}, e.subheader && {paddingTop: 0}))),
      j = e.forwardRef((function (t, n) {
        const r = (0, w.Z)({props: t, name: "MuiList"}), {
            children: o,
            className: a,
            component: i = "ul",
            dense: l = !1,
            disablePadding: s = !1,
            subheader: c
          } = r, u = (0, b.Z)(r, Z), d = e.useMemo((() => ({dense: l})), [l]),
          f = (0, y.Z)({}, r, {component: i, dense: l, disablePadding: s}), p = (e => {
            const {classes: t, disablePadding: n, dense: r, subheader: o} = e,
              a = {root: ["root", !n && "padding", r && "dense", o && "subheader"]};
            return (0, C.Z)(a, A, t)
          })(f);
        return (0, D.jsx)(k.Provider, {
          value: d,
          children: (0, D.jsxs)(B, (0, y.Z)({
            as: i,
            className: (0, x.Z)(p.root, a),
            ref: n,
            ownerState: f
          }, u, {children: [c, o]}))
        })
      })), P = function (e) {
        return "string" == typeof e
      };
    var R = o(1796), M = o(1705), N = o(2068), _ = o(3511);
    
    function T(e, t) {
      return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e
      }, T(e, t)
    }
    
    function O(e, t) {
      e.prototype = Object.create(t.prototype), e.prototype.constructor = e, T(e, t)
    }
    
    const I = e.createContext(null);
    
    function z(t, n) {
      var r = Object.create(null);
      return t && e.Children.map(t, (function (e) {
        return e
      })).forEach((function (t) {
        r[t.key] = function (t) {
          return n && (0, e.isValidElement)(t) ? n(t) : t
        }(t)
      })), r
    }
    
    function L(e, t, n) {
      return null != n[t] ? n[t] : e.props[t]
    }
    
    function $(t, n, r) {
      var o = z(t.children), a = function (e, t) {
        function n(n) {
          return n in t ? t[n] : e[n]
        }
        
        e = e || {}, t = t || {};
        var r, o = Object.create(null), a = [];
        for (var i in e) i in t ? a.length && (o[i] = a, a = []) : a.push(i);
        var l = {};
        for (var s in t) {
          if (o[s]) for (r = 0; r < o[s].length; r++) {
            var c = o[s][r];
            l[o[s][r]] = n(c)
          }
          l[s] = n(s)
        }
        for (r = 0; r < a.length; r++) l[a[r]] = n(a[r]);
        return l
      }(n, o);
      return Object.keys(a).forEach((function (i) {
        var l = a[i];
        if ((0, e.isValidElement)(l)) {
          var s = i in n, c = i in o, u = n[i], d = (0, e.isValidElement)(u) && !u.props.in;
          !c || s && !d ? c || !s || d ? c && s && (0, e.isValidElement)(u) && (a[i] = (0, e.cloneElement)(l, {
            onExited: r.bind(null, l),
            in: u.props.in,
            exit: L(l, "exit", t),
            enter: L(l, "enter", t)
          })) : a[i] = (0, e.cloneElement)(l, {in: !1}) : a[i] = (0, e.cloneElement)(l, {
            onExited: r.bind(null, l),
            in: !0,
            exit: L(l, "exit", t),
            enter: L(l, "enter", t)
          })
        }
      })), a
    }
    
    var W = Object.values || function (e) {
      return Object.keys(e).map((function (t) {
        return e[t]
      }))
    }, H = function (t) {
      function n(e, n) {
        var r, o = (r = t.call(this, e, n) || this).handleExited.bind(function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(r));
        return r.state = {contextValue: {isMounting: !0}, handleExited: o, firstRender: !0}, r
      }
      
      O(n, t);
      var r = n.prototype;
      return r.componentDidMount = function () {
        this.mounted = !0, this.setState({contextValue: {isMounting: !1}})
      }, r.componentWillUnmount = function () {
        this.mounted = !1
      }, n.getDerivedStateFromProps = function (t, n) {
        var r, o, a = n.children, i = n.handleExited;
        return {
          children: n.firstRender ? (r = t, o = i, z(r.children, (function (t) {
            return (0, e.cloneElement)(t, {
              onExited: o.bind(null, t),
              in: !0,
              appear: L(t, "appear", r),
              enter: L(t, "enter", r),
              exit: L(t, "exit", r)
            })
          }))) : $(t, a, i), firstRender: !1
        }
      }, r.handleExited = function (e, t) {
        var n = z(this.props.children);
        e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function (t) {
          var n = (0, y.Z)({}, t.children);
          return delete n[e.key], {children: n}
        })))
      }, r.render = function () {
        var t = this.props, n = t.component, r = t.childFactory, o = (0, b.Z)(t, ["component", "childFactory"]),
          a = this.state.contextValue, i = W(this.state.children).map(r);
        return delete o.appear, delete o.enter, delete o.exit, null === n ? e.createElement(I.Provider, {value: a}, i) : e.createElement(I.Provider, {value: a}, e.createElement(n, o, i))
      }, n
    }(e.Component);
    H.propTypes = {}, H.defaultProps = {
      component: "div", childFactory: function (e) {
        return e
      }
    };
    const V = H;
    o(6751);
    var U = o(2443), q = (o(8679), o(444)), K = o(6797), G = o(7278), X = (0, U.w)((function (t, n) {
      var r = t.styles, o = (0, K.O)([r], void 0, (0, e.useContext)(U.T)), a = (0, e.useRef)();
      return (0, G.j)((function () {
        var e = n.key + "-global", t = new n.sheet.constructor({
          key: e,
          nonce: n.sheet.nonce,
          container: n.sheet.container,
          speedy: n.sheet.isSpeedy
        }), r = !1, i = document.querySelector('style[data-emotion="' + e + " " + o.name + '"]');
        return n.sheet.tags.length && (t.before = n.sheet.tags[0]), null !== i && (r = !0, i.setAttribute("data-emotion", e), t.hydrate([i])), a.current = [t, r], function () {
          t.flush()
        }
      }), [n]), (0, G.j)((function () {
        var e = a.current, t = e[0];
        if (e[1]) e[1] = !1; else {
          if (void 0 !== o.next && (0, q.My)(n, o.next, !0), t.tags.length) {
            var r = t.tags[t.tags.length - 1].nextElementSibling;
            t.before = r, t.flush()
          }
          n.insert("", o, t, !1)
        }
      }), [n, o.name]), null
    }));
    
    function Y() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return (0, K.O)(t)
    }
    
    var Q = function () {
      var e = Y.apply(void 0, arguments), t = "animation-" + e.name;
      return {
        name: t, styles: "@keyframes " + t + "{" + e.styles + "}", anim: 1, toString: function () {
          return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
        }
      }
    };
    const J = (0, F.Z)("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]),
      ee = ["center", "classes", "className"];
    let te, ne, re, oe, ae = e => e;
    const ie = Q(te || (te = ae`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), le = Q(ne || (ne = ae`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), se = Q(re || (re = ae`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), ce = (0, E.ZP)("span", {name: "MuiTouchRipple", slot: "Root"})({
        overflow: "hidden",
        pointerEvents: "none",
        position: "absolute",
        zIndex: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: "inherit"
      }), ue = (0, E.ZP)((function (t) {
        const {
            className: n,
            classes: r,
            pulsate: o = !1,
            rippleX: a,
            rippleY: i,
            rippleSize: l,
            in: s,
            onExited: c,
            timeout: u
          } = t, [d, f] = e.useState(!1), p = (0, x.Z)(n, r.ripple, r.rippleVisible, o && r.ripplePulsate),
          m = {width: l, height: l, top: -l / 2 + i, left: -l / 2 + a},
          h = (0, x.Z)(r.child, d && r.childLeaving, o && r.childPulsate);
        return s || d || f(!0), e.useEffect((() => {
          if (!s && null != c) {
            const e = setTimeout(c, u);
            return () => {
              clearTimeout(e)
            }
          }
        }), [c, s, u]), (0, D.jsx)("span", {className: p, style: m, children: (0, D.jsx)("span", {className: h})})
      }), {name: "MuiTouchRipple", slot: "Ripple"})(oe || (oe = ae`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), J.rippleVisible, ie, 550, (({theme: e}) => e.transitions.easing.easeInOut), J.ripplePulsate, (({theme: e}) => e.transitions.duration.shorter), J.child, J.childLeaving, le, 550, (({theme: e}) => e.transitions.easing.easeInOut), J.childPulsate, se, (({theme: e}) => e.transitions.easing.easeInOut)),
      de = e.forwardRef((function (t, n) {
        const r = (0, w.Z)({props: t, name: "MuiTouchRipple"}), {center: o = !1, classes: a = {}, className: i} = r,
          l = (0, b.Z)(r, ee), [s, c] = e.useState([]), u = e.useRef(0), d = e.useRef(null);
        e.useEffect((() => {
          d.current && (d.current(), d.current = null)
        }), [s]);
        const f = e.useRef(!1), p = e.useRef(null), m = e.useRef(null), h = e.useRef(null);
        e.useEffect((() => () => {
          clearTimeout(p.current)
        }), []);
        const v = e.useCallback((e => {
          const {pulsate: t, rippleX: n, rippleY: r, rippleSize: o, cb: i} = e;
          c((e => [...e, (0, D.jsx)(ue, {
            classes: {
              ripple: (0, x.Z)(a.ripple, J.ripple),
              rippleVisible: (0, x.Z)(a.rippleVisible, J.rippleVisible),
              ripplePulsate: (0, x.Z)(a.ripplePulsate, J.ripplePulsate),
              child: (0, x.Z)(a.child, J.child),
              childLeaving: (0, x.Z)(a.childLeaving, J.childLeaving),
              childPulsate: (0, x.Z)(a.childPulsate, J.childPulsate)
            }, timeout: 550, pulsate: t, rippleX: n, rippleY: r, rippleSize: o
          }, u.current)])), u.current += 1, d.current = i
        }), [a]), g = e.useCallback(((e = {}, t = {}, n = (() => {
        })) => {
          const {pulsate: r = !1, center: a = o || t.pulsate, fakeElement: i = !1} = t;
          if ("mousedown" === (null == e ? void 0 : e.type) && f.current) return void (f.current = !1);
          "touchstart" === (null == e ? void 0 : e.type) && (f.current = !0);
          const l = i ? null : h.current, s = l ? l.getBoundingClientRect() : {width: 0, height: 0, left: 0, top: 0};
          let c, u, d;
          if (a || void 0 === e || 0 === e.clientX && 0 === e.clientY || !e.clientX && !e.touches) c = Math.round(s.width / 2), u = Math.round(s.height / 2); else {
            const {clientX: t, clientY: n} = e.touches && e.touches.length > 0 ? e.touches[0] : e;
            c = Math.round(t - s.left), u = Math.round(n - s.top)
          }
          if (a) d = Math.sqrt((2 * s.width ** 2 + s.height ** 2) / 3), d % 2 == 0 && (d += 1); else {
            const e = 2 * Math.max(Math.abs((l ? l.clientWidth : 0) - c), c) + 2,
              t = 2 * Math.max(Math.abs((l ? l.clientHeight : 0) - u), u) + 2;
            d = Math.sqrt(e ** 2 + t ** 2)
          }
          null != e && e.touches ? null === m.current && (m.current = () => {
            v({pulsate: r, rippleX: c, rippleY: u, rippleSize: d, cb: n})
          }, p.current = setTimeout((() => {
            m.current && (m.current(), m.current = null)
          }), 80)) : v({pulsate: r, rippleX: c, rippleY: u, rippleSize: d, cb: n})
        }), [o, v]), C = e.useCallback((() => {
          g({}, {pulsate: !0})
        }), [g]), E = e.useCallback(((e, t) => {
          if (clearTimeout(p.current), "touchend" === (null == e ? void 0 : e.type) && m.current) return m.current(), m.current = null, void (p.current = setTimeout((() => {
            E(e, t)
          })));
          m.current = null, c((e => e.length > 0 ? e.slice(1) : e)), d.current = t
        }), []);
        return e.useImperativeHandle(n, (() => ({
          pulsate: C,
          start: g,
          stop: E
        })), [C, g, E]), (0, D.jsx)(ce, (0, y.Z)({
          className: (0, x.Z)(J.root, a.root, i),
          ref: h
        }, l, {children: (0, D.jsx)(V, {component: null, exit: !0, children: s})}))
      })), fe = de;
    
    function pe(e) {
      return (0, S.Z)("MuiButtonBase", e)
    }
    
    const me = (0, F.Z)("MuiButtonBase", ["root", "disabled", "focusVisible"]),
      he = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"],
      ve = (0, E.ZP)("button", {
        name: "MuiButtonBase",
        slot: "Root",
        overridesResolver: (e, t) => t.root
      })({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        MozAppearance: "none",
        WebkitAppearance: "none",
        textDecoration: "none",
        color: "inherit",
        "&::-moz-focus-inner": {borderStyle: "none"},
        [`&.${me.disabled}`]: {pointerEvents: "none", cursor: "default"},
        "@media print": {colorAdjust: "exact"}
      }), ge = e.forwardRef((function (t, n) {
        const r = (0, w.Z)({props: t, name: "MuiButtonBase"}), {
          action: o,
          centerRipple: a = !1,
          children: i,
          className: l,
          component: s = "button",
          disabled: c = !1,
          disableRipple: u = !1,
          disableTouchRipple: d = !1,
          focusRipple: f = !1,
          LinkComponent: p = "a",
          onBlur: m,
          onClick: h,
          onContextMenu: v,
          onDragLeave: g,
          onFocus: E,
          onFocusVisible: k,
          onKeyDown: F,
          onKeyUp: S,
          onMouseDown: A,
          onMouseLeave: Z,
          onMouseUp: B,
          onTouchEnd: j,
          onTouchMove: P,
          onTouchStart: R,
          tabIndex: T = 0,
          TouchRippleProps: O,
          touchRippleRef: I,
          type: z
        } = r, L = (0, b.Z)(r, he), $ = e.useRef(null), W = e.useRef(null), H = (0, M.Z)(W, I), {
          isFocusVisibleRef: V,
          onFocus: U,
          onBlur: q,
          ref: K
        } = (0, _.Z)(), [G, X] = e.useState(!1);
        c && G && X(!1), e.useImperativeHandle(o, (() => ({
          focusVisible: () => {
            X(!0), $.current.focus()
          }
        })), []);
        const [Y, Q] = e.useState(!1);
        e.useEffect((() => {
          Q(!0)
        }), []);
        const J = Y && !u && !c;
        
        function ee(e, t, n = d) {
          return (0, N.Z)((r => (t && t(r), !n && W.current && W.current[e](r), !0)))
        }
        
        e.useEffect((() => {
          G && f && !u && Y && W.current.pulsate()
        }), [u, f, G, Y]);
        const te = ee("start", A), ne = ee("stop", v), re = ee("stop", g), oe = ee("stop", B), ae = ee("stop", (e => {
          G && e.preventDefault(), Z && Z(e)
        })), ie = ee("start", R), le = ee("stop", j), se = ee("stop", P), ce = ee("stop", (e => {
          q(e), !1 === V.current && X(!1), m && m(e)
        }), !1), ue = (0, N.Z)((e => {
          $.current || ($.current = e.currentTarget), U(e), !0 === V.current && (X(!0), k && k(e)), E && E(e)
        })), de = () => {
          const e = $.current;
          return s && "button" !== s && !("A" === e.tagName && e.href)
        }, me = e.useRef(!1), ge = (0, N.Z)((e => {
          f && !me.current && G && W.current && " " === e.key && (me.current = !0, W.current.stop(e, (() => {
            W.current.start(e)
          }))), e.target === e.currentTarget && de() && " " === e.key && e.preventDefault(), F && F(e), e.target === e.currentTarget && de() && "Enter" === e.key && !c && (e.preventDefault(), h && h(e))
        })), be = (0, N.Z)((e => {
          f && " " === e.key && W.current && G && !e.defaultPrevented && (me.current = !1, W.current.stop(e, (() => {
            W.current.pulsate(e)
          }))), S && S(e), h && e.target === e.currentTarget && de() && " " === e.key && !e.defaultPrevented && h(e)
        }));
        let ye = s;
        "button" === ye && (L.href || L.to) && (ye = p);
        const xe = {};
        "button" === ye ? (xe.type = void 0 === z ? "button" : z, xe.disabled = c) : (L.href || L.to || (xe.role = "button"), c && (xe["aria-disabled"] = c));
        const Ce = (0, M.Z)(n, K, $), Ee = (0, y.Z)({}, r, {
          centerRipple: a,
          component: s,
          disabled: c,
          disableRipple: u,
          disableTouchRipple: d,
          focusRipple: f,
          tabIndex: T,
          focusVisible: G
        }), we = (e => {
          const {disabled: t, focusVisible: n, focusVisibleClassName: r, classes: o} = e,
            a = {root: ["root", t && "disabled", n && "focusVisible"]}, i = (0, C.Z)(a, pe, o);
          return n && r && (i.root += ` ${r}`), i
        })(Ee);
        return (0, D.jsxs)(ve, (0, y.Z)({
          as: ye,
          className: (0, x.Z)(we.root, l),
          ownerState: Ee,
          onBlur: ce,
          onClick: h,
          onContextMenu: ne,
          onFocus: ue,
          onKeyDown: ge,
          onKeyUp: be,
          onMouseDown: te,
          onMouseLeave: ae,
          onMouseUp: oe,
          onDragLeave: re,
          onTouchEnd: le,
          onTouchMove: se,
          onTouchStart: ie,
          ref: Ce,
          tabIndex: c ? -1 : T,
          type: z
        }, xe, L, {children: [i, J ? (0, D.jsx)(fe, (0, y.Z)({ref: H, center: a}, O)) : null]}))
      }));
    var be = o(8502), ye = o(8974);
    
    function xe(e) {
      return (0, S.Z)("MuiListItem", e)
    }
    
    const Ce = (0, F.Z)("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]);
    
    function Ee(e) {
      return (0, S.Z)("MuiListItemButton", e)
    }
    
    const we = (0, F.Z)("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]);
    
    function ke(e) {
      return (0, S.Z)("MuiListItemSecondaryAction", e)
    }
    
    (0, F.Z)("MuiListItemSecondaryAction", ["root", "disableGutters"]);
    const Fe = ["className"], Se = (0, E.ZP)("div", {
      name: "MuiListItemSecondaryAction", slot: "Root", overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, n.disableGutters && t.disableGutters]
      }
    })((({ownerState: e}) => (0, y.Z)({
      position: "absolute",
      right: 16,
      top: "50%",
      transform: "translateY(-50%)"
    }, e.disableGutters && {right: 0}))), Ae = e.forwardRef((function (t, n) {
      const r = (0, w.Z)({props: t, name: "MuiListItemSecondaryAction"}), {className: o} = r, a = (0, b.Z)(r, Fe),
        i = e.useContext(k), l = (0, y.Z)({}, r, {disableGutters: i.disableGutters}), s = (e => {
          const {disableGutters: t, classes: n} = e, r = {root: ["root", t && "disableGutters"]};
          return (0, C.Z)(r, ke, n)
        })(l);
      return (0, D.jsx)(Se, (0, y.Z)({className: (0, x.Z)(s.root, o), ownerState: l, ref: n}, a))
    }));
    Ae.muiName = "ListItemSecondaryAction";
    const De = Ae, Ze = ["className"],
      Be = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"],
      je = (0, E.ZP)("div", {
        name: "MuiListItem", slot: "Root", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.root, n.dense && t.dense, "flex-start" === n.alignItems && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.button && t.button, n.hasSecondaryAction && t.secondaryAction]
        }
      })((({theme: e, ownerState: t}) => (0, y.Z)({
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        width: "100%",
        boxSizing: "border-box",
        textAlign: "left"
      }, !t.disablePadding && (0, y.Z)({paddingTop: 8, paddingBottom: 8}, t.dense && {
        paddingTop: 4,
        paddingBottom: 4
      }, !t.disableGutters && {
        paddingLeft: 16,
        paddingRight: 16
      }, !!t.secondaryAction && {paddingRight: 48}), !!t.secondaryAction && {[`& > .${we.root}`]: {paddingRight: 48}}, {
        [`&.${Ce.focusVisible}`]: {backgroundColor: (e.vars || e).palette.action.focus},
        [`&.${Ce.selected}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : (0, R.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${Ce.focusVisible}`]: {backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : (0, R.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)}
        },
        [`&.${Ce.disabled}`]: {opacity: (e.vars || e).palette.action.disabledOpacity}
      }, "flex-start" === t.alignItems && {alignItems: "flex-start"}, t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box"
      }, t.button && {
        transition: e.transitions.create("background-color", {duration: e.transitions.duration.shortest}),
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": {backgroundColor: "transparent"}
        },
        [`&.${Ce.selected}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : (0, R.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
          "@media (hover: none)": {backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : (0, R.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity)}
        }
      }, t.hasSecondaryAction && {paddingRight: 48}))), Pe = (0, E.ZP)("li", {
        name: "MuiListItem",
        slot: "Container",
        overridesResolver: (e, t) => t.container
      })({position: "relative"}), Re = e.forwardRef((function (t, n) {
        const r = (0, w.Z)({props: t, name: "MuiListItem"}), {
            alignItems: o = "center",
            autoFocus: a = !1,
            button: i = !1,
            children: l,
            className: s,
            component: c,
            components: u = {},
            componentsProps: d = {},
            ContainerComponent: f = "li",
            ContainerProps: {className: p} = {},
            dense: m = !1,
            disabled: h = !1,
            disableGutters: v = !1,
            disablePadding: g = !1,
            divider: E = !1,
            focusVisibleClassName: F,
            secondaryAction: S,
            selected: A = !1,
            slotProps: Z = {},
            slots: B = {}
          } = r, j = (0, b.Z)(r.ContainerProps, Ze), R = (0, b.Z)(r, Be), N = e.useContext(k),
          _ = e.useMemo((() => ({dense: m || N.dense || !1, alignItems: o, disableGutters: v})), [o, N.dense, m, v]),
          T = e.useRef(null);
        (0, ye.Z)((() => {
          a && T.current && T.current.focus()
        }), [a]);
        const O = e.Children.toArray(l), I = O.length && (0, be.Z)(O[O.length - 1], ["ListItemSecondaryAction"]),
          z = (0, y.Z)({}, r, {
            alignItems: o,
            autoFocus: a,
            button: i,
            dense: _.dense,
            disabled: h,
            disableGutters: v,
            disablePadding: g,
            divider: E,
            hasSecondaryAction: I,
            selected: A
          }), L = (e => {
            const {
              alignItems: t,
              button: n,
              classes: r,
              dense: o,
              disabled: a,
              disableGutters: i,
              disablePadding: l,
              divider: s,
              hasSecondaryAction: c,
              selected: u
            } = e, d = {
              root: ["root", o && "dense", !i && "gutters", !l && "padding", s && "divider", a && "disabled", n && "button", "flex-start" === t && "alignItemsFlexStart", c && "secondaryAction", u && "selected"],
              container: ["container"]
            };
            return (0, C.Z)(d, xe, r)
          })(z), $ = (0, M.Z)(T, n), W = B.root || u.Root || je, H = Z.root || d.root || {},
          V = (0, y.Z)({className: (0, x.Z)(L.root, H.className, s), disabled: h}, R);
        let U = c || "li";
        return i && (V.component = c || "div", V.focusVisibleClassName = (0, x.Z)(Ce.focusVisible, F), U = ge), I ? (U = V.component || c ? U : "div", "li" === f && ("li" === U ? U = "div" : "li" === V.component && (V.component = "div")), (0, D.jsx)(k.Provider, {
          value: _,
          children: (0, D.jsxs)(Pe, (0, y.Z)({
            as: f,
            className: (0, x.Z)(L.container, p),
            ref: $,
            ownerState: z
          }, j, {
            children: [(0, D.jsx)(W, (0, y.Z)({}, H, !P(W) && {
              as: U,
              ownerState: (0, y.Z)({}, z, H.ownerState)
            }, V, {children: O})), O.pop()]
          }))
        })) : (0, D.jsx)(k.Provider, {
          value: _,
          children: (0, D.jsxs)(W, (0, y.Z)({}, H, {
            as: U,
            ref: $
          }, !P(W) && {ownerState: (0, y.Z)({}, z, H.ownerState)}, V, {children: [O, S && (0, D.jsx)(De, {children: S})]}))
        })
      }));
    
    function Me(e) {
      return (0, S.Z)("MuiListItemIcon", e)
    }
    
    (0, F.Z)("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
    const Ne = ["className"], _e = (0, E.ZP)("div", {
        name: "MuiListItemIcon", slot: "Root", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.root, "flex-start" === n.alignItems && t.alignItemsFlexStart]
        }
      })((({theme: e, ownerState: t}) => (0, y.Z)({
        minWidth: 56,
        color: (e.vars || e).palette.action.active,
        flexShrink: 0,
        display: "inline-flex"
      }, "flex-start" === t.alignItems && {marginTop: 8}))), Te = e.forwardRef((function (t, n) {
        const r = (0, w.Z)({props: t, name: "MuiListItemIcon"}), {className: o} = r, a = (0, b.Z)(r, Ne),
          i = e.useContext(k), l = (0, y.Z)({}, r, {alignItems: i.alignItems}), s = (e => {
            const {alignItems: t, classes: n} = e, r = {root: ["root", "flex-start" === t && "alignItemsFlexStart"]};
            return (0, C.Z)(r, Me, n)
          })(l);
        return (0, D.jsx)(_e, (0, y.Z)({className: (0, x.Z)(s.root, o), ownerState: l, ref: n}, a))
      })),
      Oe = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"],
      Ie = (0, E.ZP)(ge, {
        shouldForwardProp: e => (0, E.FO)(e) || "classes" === e,
        name: "MuiListItemButton",
        slot: "Root",
        overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.root, n.dense && t.dense, "flex-start" === n.alignItems && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters]
        }
      })((({theme: e, ownerState: t}) => (0, y.Z)({
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minWidth: 0,
        boxSizing: "border-box",
        textAlign: "left",
        paddingTop: 8,
        paddingBottom: 8,
        transition: e.transitions.create("background-color", {duration: e.transitions.duration.shortest}),
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": {backgroundColor: "transparent"}
        },
        [`&.${we.selected}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : (0, R.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${we.focusVisible}`]: {backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : (0, R.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)}
        },
        [`&.${we.selected}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : (0, R.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
          "@media (hover: none)": {backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : (0, R.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity)}
        },
        [`&.${we.focusVisible}`]: {backgroundColor: (e.vars || e).palette.action.focus},
        [`&.${we.disabled}`]: {opacity: (e.vars || e).palette.action.disabledOpacity}
      }, t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box"
      }, "flex-start" === t.alignItems && {alignItems: "flex-start"}, !t.disableGutters && {
        paddingLeft: 16,
        paddingRight: 16
      }, t.dense && {paddingTop: 4, paddingBottom: 4}))), ze = e.forwardRef((function (t, n) {
        const r = (0, w.Z)({props: t, name: "MuiListItemButton"}), {
            alignItems: o = "center",
            autoFocus: a = !1,
            component: i = "div",
            children: l,
            dense: s = !1,
            disableGutters: c = !1,
            divider: u = !1,
            focusVisibleClassName: d,
            selected: f = !1,
            className: p
          } = r, m = (0, b.Z)(r, Oe), h = e.useContext(k),
          v = e.useMemo((() => ({dense: s || h.dense || !1, alignItems: o, disableGutters: c})), [o, h.dense, s, c]),
          g = e.useRef(null);
        (0, ye.Z)((() => {
          a && g.current && g.current.focus()
        }), [a]);
        const E = (0, y.Z)({}, r, {alignItems: o, dense: v.dense, disableGutters: c, divider: u, selected: f}),
          F = (e => {
            const {alignItems: t, classes: n, dense: r, disabled: o, disableGutters: a, divider: i, selected: l} = e,
              s = {root: ["root", r && "dense", !a && "gutters", i && "divider", o && "disabled", "flex-start" === t && "alignItemsFlexStart", l && "selected"]},
              c = (0, C.Z)(s, Ee, n);
            return (0, y.Z)({}, n, c)
          })(E), S = (0, M.Z)(g, n);
        return (0, D.jsx)(k.Provider, {
          value: v,
          children: (0, D.jsx)(Ie, (0, y.Z)({
            ref: S,
            href: m.href || m.to,
            component: (m.href || m.to) && "div" === i ? "a" : i,
            focusVisibleClassName: (0, x.Z)(F.focusVisible, d),
            ownerState: E,
            className: (0, x.Z)(F.root, p)
          }, m, {classes: F, children: l}))
        })
      }));
    var Le = o(9766), $e = o(8010);
    const We = ["sx"];
    var He = o(8216);
    
    function Ve(e) {
      return (0, S.Z)("MuiTypography", e)
    }
    
    (0, F.Z)("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
    const Ue = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"],
      qe = (0, E.ZP)("span", {
        name: "MuiTypography", slot: "Root", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.root, n.variant && t[n.variant], "inherit" !== n.align && t[`align${(0, He.Z)(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph]
        }
      })((({
             theme: e,
             ownerState: t
           }) => (0, y.Z)({margin: 0}, t.variant && e.typography[t.variant], "inherit" !== t.align && {textAlign: t.align}, t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }, t.gutterBottom && {marginBottom: "0.35em"}, t.paragraph && {marginBottom: 16}))), Ke = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h6",
        subtitle2: "h6",
        body1: "p",
        body2: "p",
        inherit: "p"
      }, Ge = {
        primary: "primary.main",
        textPrimary: "text.primary",
        secondary: "secondary.main",
        textSecondary: "text.secondary",
        error: "error.main"
      }, Xe = e.forwardRef((function (e, t) {
        const n = (0, w.Z)({props: e, name: "MuiTypography"}), r = (e => Ge[e] || e)(n.color), o = function (e) {
          const {sx: t} = e, n = (0, b.Z)(e, We), {systemProps: r, otherProps: o} = (e => {
            var t, n;
            const r = {systemProps: {}, otherProps: {}},
              o = null != (t = null == e || null == (n = e.theme) ? void 0 : n.unstable_sxConfig) ? t : $e.Z;
            return Object.keys(e).forEach((t => {
              o[t] ? r.systemProps[t] = e[t] : r.otherProps[t] = e[t]
            })), r
          })(n);
          let a;
          return a = Array.isArray(t) ? [r, ...t] : "function" == typeof t ? (...e) => {
            const n = t(...e);
            return (0, Le.P)(n) ? (0, y.Z)({}, r, n) : r
          } : (0, y.Z)({}, r, t), (0, y.Z)({}, o, {sx: a})
        }((0, y.Z)({}, n, {color: r})), {
          align: a = "inherit",
          className: i,
          component: l,
          gutterBottom: s = !1,
          noWrap: c = !1,
          paragraph: u = !1,
          variant: d = "body1",
          variantMapping: f = Ke
        } = o, p = (0, b.Z)(o, Ue), m = (0, y.Z)({}, o, {
          align: a,
          color: r,
          className: i,
          component: l,
          gutterBottom: s,
          noWrap: c,
          paragraph: u,
          variant: d,
          variantMapping: f
        }), h = l || (u ? "p" : f[d] || Ke[d]) || "span", v = (e => {
          const {align: t, gutterBottom: n, noWrap: r, paragraph: o, variant: a, classes: i} = e,
            l = {root: ["root", a, "inherit" !== e.align && `align${(0, He.Z)(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]};
          return (0, C.Z)(l, Ve, i)
        })(m);
        return (0, D.jsx)(qe, (0, y.Z)({as: h, ref: t, ownerState: m, className: (0, x.Z)(v.root, i)}, p))
      }));
    
    function Ye(e) {
      return (0, S.Z)("MuiListItemText", e)
    }
    
    const Qe = (0, F.Z)("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]),
      Je = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"],
      et = (0, E.ZP)("div", {
        name: "MuiListItemText", slot: "Root", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [{[`& .${Qe.primary}`]: t.primary}, {[`& .${Qe.secondary}`]: t.secondary}, t.root, n.inset && t.inset, n.primary && n.secondary && t.multiline, n.dense && t.dense]
        }
      })((({ownerState: e}) => (0, y.Z)({
        flex: "1 1 auto",
        minWidth: 0,
        marginTop: 4,
        marginBottom: 4
      }, e.primary && e.secondary && {marginTop: 6, marginBottom: 6}, e.inset && {paddingLeft: 56}))),
      tt = e.forwardRef((function (t, n) {
        const r = (0, w.Z)({props: t, name: "MuiListItemText"}), {
          children: o,
          className: a,
          disableTypography: i = !1,
          inset: l = !1,
          primary: s,
          primaryTypographyProps: c,
          secondary: u,
          secondaryTypographyProps: d
        } = r, f = (0, b.Z)(r, Je), {dense: p} = e.useContext(k);
        let m = null != s ? s : o, h = u;
        const v = (0, y.Z)({}, r, {disableTypography: i, inset: l, primary: !!m, secondary: !!h, dense: p}), g = (e => {
          const {classes: t, inset: n, primary: r, secondary: o, dense: a} = e, i = {
            root: ["root", n && "inset", a && "dense", r && o && "multiline"],
            primary: ["primary"],
            secondary: ["secondary"]
          };
          return (0, C.Z)(i, Ye, t)
        })(v);
        return null == m || m.type === Xe || i || (m = (0, D.jsx)(Xe, (0, y.Z)({
          variant: p ? "body2" : "body1",
          className: g.primary,
          component: null != c && c.variant ? void 0 : "span",
          display: "block"
        }, c, {children: m}))), null == h || h.type === Xe || i || (h = (0, D.jsx)(Xe, (0, y.Z)({
          variant: "body2",
          className: g.secondary,
          color: "text.secondary",
          display: "block"
        }, d, {children: h}))), (0, D.jsxs)(et, (0, y.Z)({
          className: (0, x.Z)(g.root, a),
          ownerState: v,
          ref: n
        }, f, {children: [m, h]}))
      }));
    var nt = o(67), rt = o(3633), ot = o(7094);
    
    function at(e) {
      return e.substring(2).toLowerCase()
    }
    
    const it = function (t) {
      const {
        children: n,
        disableReactTree: r = !1,
        mouseEvent: o = "onClick",
        onClickAway: a,
        touchEvent: i = "onTouchEnd"
      } = t, l = e.useRef(!1), s = e.useRef(null), c = e.useRef(!1), u = e.useRef(!1);
      e.useEffect((() => (setTimeout((() => {
        c.current = !0
      }), 0), () => {
        c.current = !1
      })), []);
      const d = (0, nt.Z)(n.ref, s), f = (0, rt.Z)((e => {
        const t = u.current;
        u.current = !1;
        const n = (0, ot.Z)(s.current);
        if (!c.current || !s.current || "clientX" in e && function (e, t) {
          return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY
        }(e, n)) return;
        if (l.current) return void (l.current = !1);
        let o;
        o = e.composedPath ? e.composedPath().indexOf(s.current) > -1 : !n.documentElement.contains(e.target) || s.current.contains(e.target), o || !r && t || a(e)
      })), p = e => t => {
        u.current = !0;
        const r = n.props[e];
        r && r(t)
      }, m = {ref: d};
      return !1 !== i && (m[i] = p(i)), e.useEffect((() => {
        if (!1 !== i) {
          const e = at(i), t = (0, ot.Z)(s.current), n = () => {
            l.current = !0
          };
          return t.addEventListener(e, f), t.addEventListener("touchmove", n), () => {
            t.removeEventListener(e, f), t.removeEventListener("touchmove", n)
          }
        }
      }), [f, i]), !1 !== o && (m[o] = p(o)), e.useEffect((() => {
        if (!1 !== o) {
          const e = at(o), t = (0, ot.Z)(s.current);
          return t.addEventListener(e, f), () => {
            t.removeEventListener(e, f)
          }
        }
      }), [f, o]), (0, D.jsx)(e.Fragment, {children: e.cloneElement(n, m)})
    };
    var lt = o(6682), st = o(8794);
    
    function ct() {
      return (0, lt.Z)(st.Z)
    }
    
    var ut = o(3935);
    var dt = "unmounted", ft = "exited", pt = "entering", mt = "entered", ht = "exiting", vt = function (t) {
      function n(e, n) {
        var r;
        r = t.call(this, e, n) || this;
        var o, a = n && !n.isMounting ? e.enter : e.appear;
        return r.appearStatus = null, e.in ? a ? (o = ft, r.appearStatus = pt) : o = mt : o = e.unmountOnExit || e.mountOnEnter ? dt : ft, r.state = {status: o}, r.nextCallback = null, r
      }
      
      O(n, t), n.getDerivedStateFromProps = function (e, t) {
        return e.in && t.status === dt ? {status: ft} : null
      };
      var r = n.prototype;
      return r.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus)
      }, r.componentDidUpdate = function (e) {
        var t = null;
        if (e !== this.props) {
          var n = this.state.status;
          this.props.in ? n !== pt && n !== mt && (t = pt) : n !== pt && n !== mt || (t = ht)
        }
        this.updateStatus(!1, t)
      }, r.componentWillUnmount = function () {
        this.cancelNextCallback()
      }, r.getTimeouts = function () {
        var e, t, n, r = this.props.timeout;
        return e = t = n = r, null != r && "number" != typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
          exit: e,
          enter: t,
          appear: n
        }
      }, r.updateStatus = function (e, t) {
        if (void 0 === e && (e = !1), null !== t) if (this.cancelNextCallback(), t === pt) {
          if (this.props.unmountOnExit || this.props.mountOnEnter) {
            var n = this.props.nodeRef ? this.props.nodeRef.current : ut.findDOMNode(this);
            n && function (e) {
              e.scrollTop
            }(n)
          }
          this.performEnter(e)
        } else this.performExit(); else this.props.unmountOnExit && this.state.status === ft && this.setState({status: dt})
      }, r.performEnter = function (e) {
        var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e,
          o = this.props.nodeRef ? [r] : [ut.findDOMNode(this), r], a = o[0], i = o[1], l = this.getTimeouts(),
          s = r ? l.appear : l.enter;
        e || n ? (this.props.onEnter(a, i), this.safeSetState({status: pt}, (function () {
          t.props.onEntering(a, i), t.onTransitionEnd(s, (function () {
            t.safeSetState({status: mt}, (function () {
              t.props.onEntered(a, i)
            }))
          }))
        }))) : this.safeSetState({status: mt}, (function () {
          t.props.onEntered(a)
        }))
      }, r.performExit = function () {
        var e = this, t = this.props.exit, n = this.getTimeouts(),
          r = this.props.nodeRef ? void 0 : ut.findDOMNode(this);
        t ? (this.props.onExit(r), this.safeSetState({status: ht}, (function () {
          e.props.onExiting(r), e.onTransitionEnd(n.exit, (function () {
            e.safeSetState({status: ft}, (function () {
              e.props.onExited(r)
            }))
          }))
        }))) : this.safeSetState({status: ft}, (function () {
          e.props.onExited(r)
        }))
      }, r.cancelNextCallback = function () {
        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
      }, r.safeSetState = function (e, t) {
        t = this.setNextCallback(t), this.setState(e, t)
      }, r.setNextCallback = function (e) {
        var t = this, n = !0;
        return this.nextCallback = function (r) {
          n && (n = !1, t.nextCallback = null, e(r))
        }, this.nextCallback.cancel = function () {
          n = !1
        }, this.nextCallback
      }, r.onTransitionEnd = function (e, t) {
        this.setNextCallback(t);
        var n = this.props.nodeRef ? this.props.nodeRef.current : ut.findDOMNode(this),
          r = null == e && !this.props.addEndListener;
        if (n && !r) {
          if (this.props.addEndListener) {
            var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback], a = o[0], i = o[1];
            this.props.addEndListener(a, i)
          }
          null != e && setTimeout(this.nextCallback, e)
        } else setTimeout(this.nextCallback, 0)
      }, r.render = function () {
        var t = this.state.status;
        if (t === dt) return null;
        var n = this.props, r = n.children,
          o = (n.in, n.mountOnEnter, n.unmountOnExit, n.appear, n.enter, n.exit, n.timeout, n.addEndListener, n.onEnter, n.onEntering, n.onEntered, n.onExit, n.onExiting, n.onExited, n.nodeRef, (0, b.Z)(n, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
        return e.createElement(I.Provider, {value: null}, "function" == typeof r ? r(t, o) : e.cloneElement(e.Children.only(r), o))
      }, n
    }(e.Component);
    
    function gt() {
    }
    
    vt.contextType = I, vt.propTypes = {}, vt.defaultProps = {
      in: !1,
      mountOnEnter: !1,
      unmountOnExit: !1,
      appear: !1,
      enter: !0,
      exit: !0,
      onEnter: gt,
      onEntering: gt,
      onEntered: gt,
      onExit: gt,
      onExiting: gt,
      onExited: gt
    }, vt.UNMOUNTED = dt, vt.EXITED = ft, vt.ENTERING = pt, vt.ENTERED = mt, vt.EXITING = ht;
    const bt = vt, yt = e => e.scrollTop;
    
    function xt(e, t) {
      var n, r;
      const {timeout: o, easing: a, style: i = {}} = e;
      return {
        duration: null != (n = i.transitionDuration) ? n : "number" == typeof o ? o : o[t.mode] || 0,
        easing: null != (r = i.transitionTimingFunction) ? r : "object" == typeof a ? a[t.mode] : a,
        delay: i.transitionDelay
      }
    }
    
    const Ct = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
    
    function Et(e) {
      return `scale(${e}, ${e ** 2})`
    }
    
    const wt = {entering: {opacity: 1, transform: Et(1)}, entered: {opacity: 1, transform: "none"}},
      kt = "undefined" != typeof navigator && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
      Ft = e.forwardRef((function (t, n) {
        const {
            addEndListener: r,
            appear: o = !0,
            children: a,
            easing: i,
            in: l,
            onEnter: s,
            onEntered: c,
            onEntering: u,
            onExit: d,
            onExited: f,
            onExiting: p,
            style: m,
            timeout: h = "auto",
            TransitionComponent: v = bt
          } = t, g = (0, b.Z)(t, Ct), x = e.useRef(), C = e.useRef(), E = ct(), w = e.useRef(null),
          k = (0, M.Z)(w, a.ref, n), F = e => t => {
            if (e) {
              const n = w.current;
              void 0 === t ? e(n) : e(n, t)
            }
          }, S = F(u), A = F(((e, t) => {
            yt(e);
            const {duration: n, delay: r, easing: o} = xt({style: m, timeout: h, easing: i}, {mode: "enter"});
            let a;
            "auto" === h ? (a = E.transitions.getAutoHeightDuration(e.clientHeight), C.current = a) : a = n, e.style.transition = [E.transitions.create("opacity", {
              duration: a,
              delay: r
            }), E.transitions.create("transform", {
              duration: kt ? a : .666 * a,
              delay: r,
              easing: o
            })].join(","), s && s(e, t)
          })), Z = F(c), B = F(p), j = F((e => {
            const {duration: t, delay: n, easing: r} = xt({style: m, timeout: h, easing: i}, {mode: "exit"});
            let o;
            "auto" === h ? (o = E.transitions.getAutoHeightDuration(e.clientHeight), C.current = o) : o = t, e.style.transition = [E.transitions.create("opacity", {
              duration: o,
              delay: n
            }), E.transitions.create("transform", {
              duration: kt ? o : .666 * o,
              delay: kt ? n : n || .333 * o,
              easing: r
            })].join(","), e.style.opacity = 0, e.style.transform = Et(.75), d && d(e)
          })), P = F(f);
        return e.useEffect((() => () => {
          clearTimeout(x.current)
        }), []), (0, D.jsx)(v, (0, y.Z)({
          appear: o,
          in: l,
          nodeRef: w,
          onEnter: A,
          onEntered: Z,
          onEntering: S,
          onExit: j,
          onExited: P,
          onExiting: B,
          addEndListener: e => {
            "auto" === h && (x.current = setTimeout(e, C.current || 0)), r && r(w.current, e)
          },
          timeout: "auto" === h ? null : h
        }, g, {
          children: (t, n) => e.cloneElement(a, (0, y.Z)({
            style: (0, y.Z)({
              opacity: 0,
              transform: Et(.75),
              visibility: "exited" !== t || l ? void 0 : "hidden"
            }, wt[t], m, a.props.style), ref: k
          }, n))
        }))
      }));
    Ft.muiSupportAuto = !0;
    const St = Ft, At = e => {
      let t;
      return t = e < 1 ? 5.11916 * e ** 2 : 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2)
    };
    
    function Dt(e) {
      return (0, S.Z)("MuiPaper", e)
    }
    
    (0, F.Z)("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
    const Zt = ["className", "component", "elevation", "square", "variant"], Bt = (0, E.ZP)("div", {
      name: "MuiPaper", slot: "Root", overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, t[n.variant], !n.square && t.rounded, "elevation" === n.variant && t[`elevation${n.elevation}`]]
      }
    })((({theme: e, ownerState: t}) => {
      var n;
      return (0, y.Z)({
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow")
      }, !t.square && {borderRadius: e.shape.borderRadius}, "outlined" === t.variant && {border: `1px solid ${(e.vars || e).palette.divider}`}, "elevation" === t.variant && (0, y.Z)({boxShadow: (e.vars || e).shadows[t.elevation]}, !e.vars && "dark" === e.palette.mode && {backgroundImage: `linear-gradient(${(0, R.Fq)("#fff", At(t.elevation))}, ${(0, R.Fq)("#fff", At(t.elevation))})`}, e.vars && {backgroundImage: null == (n = e.vars.overlays) ? void 0 : n[t.elevation]}))
    })), jt = e.forwardRef((function (e, t) {
      const n = (0, w.Z)({props: e, name: "MuiPaper"}), {
        className: r,
        component: o = "div",
        elevation: a = 1,
        square: i = !1,
        variant: l = "elevation"
      } = n, s = (0, b.Z)(n, Zt), c = (0, y.Z)({}, n, {component: o, elevation: a, square: i, variant: l}), u = (e => {
        const {square: t, elevation: n, variant: r, classes: o} = e,
          a = {root: ["root", r, !t && "rounded", "elevation" === r && `elevation${n}`]};
        return (0, C.Z)(a, Dt, o)
      })(c);
      return (0, D.jsx)(Bt, (0, y.Z)({as: o, ownerState: c, className: (0, x.Z)(u.root, r), ref: t}, s))
    }));
    
    function Pt(e) {
      return (0, S.Z)("MuiSnackbarContent", e)
    }
    
    (0, F.Z)("MuiSnackbarContent", ["root", "message", "action"]);
    const Rt = ["action", "className", "message", "role"], Mt = (0, E.ZP)(jt, {
        name: "MuiSnackbarContent",
        slot: "Root",
        overridesResolver: (e, t) => t.root
      })((({theme: e}) => {
        const t = "light" === e.palette.mode ? .8 : .98, n = (0, R._4)(e.palette.background.default, t);
        return (0, y.Z)({}, e.typography.body2, {
          color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(n),
          backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : n,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          flexGrow: 1,
          [e.breakpoints.up("sm")]: {flexGrow: "initial", minWidth: 288}
        })
      })), Nt = (0, E.ZP)("div", {
        name: "MuiSnackbarContent",
        slot: "Message",
        overridesResolver: (e, t) => t.message
      })({padding: "8px 0"}), _t = (0, E.ZP)("div", {
        name: "MuiSnackbarContent",
        slot: "Action",
        overridesResolver: (e, t) => t.action
      })({display: "flex", alignItems: "center", marginLeft: "auto", paddingLeft: 16, marginRight: -8}),
      Tt = e.forwardRef((function (e, t) {
        const n = (0, w.Z)({props: e, name: "MuiSnackbarContent"}), {
          action: r,
          className: o,
          message: a,
          role: i = "alert"
        } = n, l = (0, b.Z)(n, Rt), s = n, c = (e => {
          const {classes: t} = e;
          return (0, C.Z)({root: ["root"], action: ["action"], message: ["message"]}, Pt, t)
        })(s);
        return (0, D.jsxs)(Mt, (0, y.Z)({
          role: i,
          square: !0,
          elevation: 6,
          className: (0, x.Z)(c.root, o),
          ownerState: s,
          ref: t
        }, l, {
          children: [(0, D.jsx)(Nt, {
            className: c.message,
            ownerState: s,
            children: a
          }), r ? (0, D.jsx)(_t, {className: c.action, ownerState: s, children: r}) : null]
        }))
      }));
    
    function Ot(e) {
      return (0, S.Z)("MuiSnackbar", e)
    }
    
    (0, F.Z)("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
    const It = ["onEnter", "onExited"],
      zt = ["action", "anchorOrigin", "autoHideDuration", "children", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"],
      Lt = (0, E.ZP)("div", {
        name: "MuiSnackbar", slot: "Root", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.root, t[`anchorOrigin${(0, He.Z)(n.anchorOrigin.vertical)}${(0, He.Z)(n.anchorOrigin.horizontal)}`]]
        }
      })((({theme: e, ownerState: t}) => (0, y.Z)({
        zIndex: (e.vars || e).zIndex.snackbar,
        position: "fixed",
        display: "flex",
        left: 8,
        right: 8,
        justifyContent: "center",
        alignItems: "center"
      }, "top" === t.anchorOrigin.vertical ? {top: 8} : {bottom: 8}, "left" === t.anchorOrigin.horizontal && {justifyContent: "flex-start"}, "right" === t.anchorOrigin.horizontal && {justifyContent: "flex-end"}, {
        [e.breakpoints.up("sm")]: (0, y.Z)({}, "top" === t.anchorOrigin.vertical ? {top: 24} : {bottom: 24}, "center" === t.anchorOrigin.horizontal && {
          left: "50%",
          right: "auto",
          transform: "translateX(-50%)"
        }, "left" === t.anchorOrigin.horizontal && {
          left: 24,
          right: "auto"
        }, "right" === t.anchorOrigin.horizontal && {right: 24, left: "auto"})
      }))), $t = e.forwardRef((function (t, n) {
        const r = (0, w.Z)({props: t, name: "MuiSnackbar"}), o = ct(),
          a = {enter: o.transitions.duration.enteringScreen, exit: o.transitions.duration.leavingScreen}, {
            action: i,
            anchorOrigin: {vertical: l, horizontal: s} = {vertical: "bottom", horizontal: "left"},
            autoHideDuration: c = null,
            children: u,
            className: d,
            ClickAwayListenerProps: f,
            ContentProps: p,
            disableWindowBlurListener: m = !1,
            message: h,
            onBlur: v,
            onClose: g,
            onFocus: E,
            onMouseEnter: k,
            onMouseLeave: F,
            open: S,
            resumeHideDuration: A,
            TransitionComponent: Z = St,
            transitionDuration: B = a,
            TransitionProps: {onEnter: j, onExited: P} = {}
          } = r, R = (0, b.Z)(r.TransitionProps, It), M = (0, b.Z)(r, zt),
          _ = (0, y.Z)({}, r, {anchorOrigin: {vertical: l, horizontal: s}}), T = (e => {
            const {classes: t, anchorOrigin: n} = e,
              r = {root: ["root", `anchorOrigin${(0, He.Z)(n.vertical)}${(0, He.Z)(n.horizontal)}`]};
            return (0, C.Z)(r, Ot, t)
          })(_), O = e.useRef(), [I, z] = e.useState(!0), L = (0, N.Z)(((...e) => {
            g && g(...e)
          })), $ = (0, N.Z)((e => {
            g && null != e && (clearTimeout(O.current), O.current = setTimeout((() => {
              L(null, "timeout")
            }), e))
          }));
        e.useEffect((() => (S && $(c), () => {
          clearTimeout(O.current)
        })), [S, c, $]);
        const W = () => {
          clearTimeout(O.current)
        }, H = e.useCallback((() => {
          null != c && $(null != A ? A : .5 * c)
        }), [c, A, $]);
        return e.useEffect((() => {
          if (!m && S) return window.addEventListener("focus", H), window.addEventListener("blur", W), () => {
            window.removeEventListener("focus", H), window.removeEventListener("blur", W)
          }
        }), [m, H, S]), e.useEffect((() => {
          if (S) return document.addEventListener("keydown", e), () => {
            document.removeEventListener("keydown", e)
          };
          
          function e(e) {
            e.defaultPrevented || "Escape" !== e.key && "Esc" !== e.key || g && g(e, "escapeKeyDown")
          }
        }), [I, S, g]), !S && I ? null : (0, D.jsx)(it, (0, y.Z)({
          onClickAway: e => {
            g && g(e, "clickaway")
          }
        }, f, {
          children: (0, D.jsx)(Lt, (0, y.Z)({
            className: (0, x.Z)(T.root, d), onBlur: e => {
              v && v(e), H()
            }, onFocus: e => {
              E && E(e), W()
            }, onMouseEnter: e => {
              k && k(e), W()
            }, onMouseLeave: e => {
              F && F(e), H()
            }, ownerState: _, ref: n, role: "presentation"
          }, M, {
            children: (0, D.jsx)(Z, (0, y.Z)({
              appear: !0,
              in: S,
              timeout: B,
              direction: "top" === l ? "down" : "up",
              onEnter: (e, t) => {
                z(!1), j && j(e, t)
              },
              onExited: e => {
                z(!0), P && P(e)
              }
            }, R, {children: u || (0, D.jsx)(Tt, (0, y.Z)({message: h, action: i}, p))}))
          }))
        }))
      }));
    var Wt = o(7925);
    
    function Ht(e) {
      return (0, S.Z)("MuiButton", e)
    }
    
    const Vt = (0, F.Z)("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]),
      Ut = e.createContext({}),
      qt = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"],
      Kt = e => (0, y.Z)({}, "small" === e.size && {"& > *:nth-of-type(1)": {fontSize: 18}}, "medium" === e.size && {"& > *:nth-of-type(1)": {fontSize: 20}}, "large" === e.size && {"& > *:nth-of-type(1)": {fontSize: 22}}),
      Gt = (0, E.ZP)(ge, {
        shouldForwardProp: e => (0, E.FO)(e) || "classes" === e,
        name: "MuiButton",
        slot: "Root",
        overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.root, t[n.variant], t[`${n.variant}${(0, He.Z)(n.color)}`], t[`size${(0, He.Z)(n.size)}`], t[`${n.variant}Size${(0, He.Z)(n.size)}`], "inherit" === n.color && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth]
        }
      })((({theme: e, ownerState: t}) => {
        var n, r;
        return (0, y.Z)({}, e.typography.button, {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {duration: e.transitions.duration.short}),
          "&:hover": (0, y.Z)({
            textDecoration: "none",
            backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, R.Fq)(e.palette.text.primary, e.palette.action.hoverOpacity),
            "@media (hover: none)": {backgroundColor: "transparent"}
          }, "text" === t.variant && "inherit" !== t.color && {
            backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, R.Fq)(e.palette[t.color].main, e.palette.action.hoverOpacity),
            "@media (hover: none)": {backgroundColor: "transparent"}
          }, "outlined" === t.variant && "inherit" !== t.color && {
            border: `1px solid ${(e.vars || e).palette[t.color].main}`,
            backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, R.Fq)(e.palette[t.color].main, e.palette.action.hoverOpacity),
            "@media (hover: none)": {backgroundColor: "transparent"}
          }, "contained" === t.variant && {
            backgroundColor: (e.vars || e).palette.grey.A100,
            boxShadow: (e.vars || e).shadows[4],
            "@media (hover: none)": {
              boxShadow: (e.vars || e).shadows[2],
              backgroundColor: (e.vars || e).palette.grey[300]
            }
          }, "contained" === t.variant && "inherit" !== t.color && {
            backgroundColor: (e.vars || e).palette[t.color].dark,
            "@media (hover: none)": {backgroundColor: (e.vars || e).palette[t.color].main}
          }),
          "&:active": (0, y.Z)({}, "contained" === t.variant && {boxShadow: (e.vars || e).shadows[8]}),
          [`&.${Vt.focusVisible}`]: (0, y.Z)({}, "contained" === t.variant && {boxShadow: (e.vars || e).shadows[6]}),
          [`&.${Vt.disabled}`]: (0, y.Z)({color: (e.vars || e).palette.action.disabled}, "outlined" === t.variant && {border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`}, "contained" === t.variant && {
            color: (e.vars || e).palette.action.disabled,
            boxShadow: (e.vars || e).shadows[0],
            backgroundColor: (e.vars || e).palette.action.disabledBackground
          })
        }, "text" === t.variant && {padding: "6px 8px"}, "text" === t.variant && "inherit" !== t.color && {color: (e.vars || e).palette[t.color].main}, "outlined" === t.variant && {
          padding: "5px 15px",
          border: "1px solid currentColor"
        }, "outlined" === t.variant && "inherit" !== t.color && {
          color: (e.vars || e).palette[t.color].main,
          border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${(0, R.Fq)(e.palette[t.color].main, .5)}`
        }, "contained" === t.variant && {
          color: e.vars ? e.vars.palette.text.primary : null == (n = (r = e.palette).getContrastText) ? void 0 : n.call(r, e.palette.grey[300]),
          backgroundColor: (e.vars || e).palette.grey[300],
          boxShadow: (e.vars || e).shadows[2]
        }, "contained" === t.variant && "inherit" !== t.color && {
          color: (e.vars || e).palette[t.color].contrastText,
          backgroundColor: (e.vars || e).palette[t.color].main
        }, "inherit" === t.color && {
          color: "inherit",
          borderColor: "currentColor"
        }, "small" === t.size && "text" === t.variant && {
          padding: "4px 5px",
          fontSize: e.typography.pxToRem(13)
        }, "large" === t.size && "text" === t.variant && {
          padding: "8px 11px",
          fontSize: e.typography.pxToRem(15)
        }, "small" === t.size && "outlined" === t.variant && {
          padding: "3px 9px",
          fontSize: e.typography.pxToRem(13)
        }, "large" === t.size && "outlined" === t.variant && {
          padding: "7px 21px",
          fontSize: e.typography.pxToRem(15)
        }, "small" === t.size && "contained" === t.variant && {
          padding: "4px 10px",
          fontSize: e.typography.pxToRem(13)
        }, "large" === t.size && "contained" === t.variant && {
          padding: "8px 22px",
          fontSize: e.typography.pxToRem(15)
        }, t.fullWidth && {width: "100%"})
      }), (({ownerState: e}) => e.disableElevation && {
        boxShadow: "none",
        "&:hover": {boxShadow: "none"},
        [`&.${Vt.focusVisible}`]: {boxShadow: "none"},
        "&:active": {boxShadow: "none"},
        [`&.${Vt.disabled}`]: {boxShadow: "none"}
      })), Xt = (0, E.ZP)("span", {
        name: "MuiButton", slot: "StartIcon", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.startIcon, t[`iconSize${(0, He.Z)(n.size)}`]]
        }
      })((({ownerState: e}) => (0, y.Z)({
        display: "inherit",
        marginRight: 8,
        marginLeft: -4
      }, "small" === e.size && {marginLeft: -2}, Kt(e)))), Yt = (0, E.ZP)("span", {
        name: "MuiButton", slot: "EndIcon", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.endIcon, t[`iconSize${(0, He.Z)(n.size)}`]]
        }
      })((({ownerState: e}) => (0, y.Z)({
        display: "inherit",
        marginRight: -4,
        marginLeft: 8
      }, "small" === e.size && {marginRight: -2}, Kt(e)))), Qt = e.forwardRef((function (t, n) {
        const r = e.useContext(Ut), o = (0, Wt.Z)(r, t), a = (0, w.Z)({props: o, name: "MuiButton"}), {
            children: i,
            color: l = "primary",
            component: s = "button",
            className: c,
            disabled: u = !1,
            disableElevation: d = !1,
            disableFocusRipple: f = !1,
            endIcon: p,
            focusVisibleClassName: m,
            fullWidth: h = !1,
            size: v = "medium",
            startIcon: g,
            type: E,
            variant: k = "text"
          } = a, F = (0, b.Z)(a, qt), S = (0, y.Z)({}, a, {
            color: l,
            component: s,
            disabled: u,
            disableElevation: d,
            disableFocusRipple: f,
            fullWidth: h,
            size: v,
            type: E,
            variant: k
          }), A = (e => {
            const {color: t, disableElevation: n, fullWidth: r, size: o, variant: a, classes: i} = e, l = {
              root: ["root", a, `${a}${(0, He.Z)(t)}`, `size${(0, He.Z)(o)}`, `${a}Size${(0, He.Z)(o)}`, "inherit" === t && "colorInherit", n && "disableElevation", r && "fullWidth"],
              label: ["label"],
              startIcon: ["startIcon", `iconSize${(0, He.Z)(o)}`],
              endIcon: ["endIcon", `iconSize${(0, He.Z)(o)}`]
            }, s = (0, C.Z)(l, Ht, i);
            return (0, y.Z)({}, i, s)
          })(S), Z = g && (0, D.jsx)(Xt, {className: A.startIcon, ownerState: S, children: g}),
          B = p && (0, D.jsx)(Yt, {className: A.endIcon, ownerState: S, children: p});
        return (0, D.jsxs)(Gt, (0, y.Z)({
          ownerState: S,
          className: (0, x.Z)(r.className, A.root, c),
          component: s,
          disabled: u,
          focusRipple: !f,
          focusVisibleClassName: (0, x.Z)(A.focusVisible, m),
          ref: n,
          type: E
        }, F, {classes: A, children: [Z, i, B]}))
      }));
    
    function Jt(e, t, n) {
      return void 0 === e || P(e) ? t : (0, y.Z)({}, t, {ownerState: (0, y.Z)({}, t.ownerState, n)})
    }
    
    var en = o(6600);
    
    function tn(e) {
      if (null == e) return window;
      if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return t && t.defaultView || window
      }
      return e
    }
    
    function nn(e) {
      return e instanceof tn(e).Element || e instanceof Element
    }
    
    function rn(e) {
      return e instanceof tn(e).HTMLElement || e instanceof HTMLElement
    }
    
    function on(e) {
      return "undefined" != typeof ShadowRoot && (e instanceof tn(e).ShadowRoot || e instanceof ShadowRoot)
    }
    
    var an = Math.max, ln = Math.min, sn = Math.round;
    
    function cn() {
      var e = navigator.userAgentData;
      return null != e && e.brands ? e.brands.map((function (e) {
        return e.brand + "/" + e.version
      })).join(" ") : navigator.userAgent
    }
    
    function un() {
      return !/^((?!chrome|android).)*safari/i.test(cn())
    }
    
    function dn(e, t, n) {
      void 0 === t && (t = !1), void 0 === n && (n = !1);
      var r = e.getBoundingClientRect(), o = 1, a = 1;
      t && rn(e) && (o = e.offsetWidth > 0 && sn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && sn(r.height) / e.offsetHeight || 1);
      var i = (nn(e) ? tn(e) : window).visualViewport, l = !un() && n, s = (r.left + (l && i ? i.offsetLeft : 0)) / o,
        c = (r.top + (l && i ? i.offsetTop : 0)) / a, u = r.width / o, d = r.height / a;
      return {width: u, height: d, top: c, right: s + u, bottom: c + d, left: s, x: s, y: c}
    }
    
    function fn(e) {
      var t = tn(e);
      return {scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset}
    }
    
    function pn(e) {
      return e ? (e.nodeName || "").toLowerCase() : null
    }
    
    function mn(e) {
      return ((nn(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }
    
    function hn(e) {
      return dn(mn(e)).left + fn(e).scrollLeft
    }
    
    function vn(e) {
      return tn(e).getComputedStyle(e)
    }
    
    function gn(e) {
      var t = vn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
      return /auto|scroll|overlay|hidden/.test(n + o + r)
    }
    
    function bn(e, t, n) {
      void 0 === n && (n = !1);
      var r, o, a = rn(t), i = rn(t) && function (e) {
        var t = e.getBoundingClientRect(), n = sn(t.width) / e.offsetWidth || 1, r = sn(t.height) / e.offsetHeight || 1;
        return 1 !== n || 1 !== r
      }(t), l = mn(t), s = dn(e, i, n), c = {scrollLeft: 0, scrollTop: 0}, u = {x: 0, y: 0};
      return (a || !a && !n) && (("body" !== pn(t) || gn(l)) && (c = (r = t) !== tn(r) && rn(r) ? {
        scrollLeft: (o = r).scrollLeft,
        scrollTop: o.scrollTop
      } : fn(r)), rn(t) ? ((u = dn(t, !0)).x += t.clientLeft, u.y += t.clientTop) : l && (u.x = hn(l))), {
        x: s.left + c.scrollLeft - u.x,
        y: s.top + c.scrollTop - u.y,
        width: s.width,
        height: s.height
      }
    }
    
    function yn(e) {
      var t = dn(e), n = e.offsetWidth, r = e.offsetHeight;
      return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: r
      }
    }
    
    function xn(e) {
      return "html" === pn(e) ? e : e.assignedSlot || e.parentNode || (on(e) ? e.host : null) || mn(e)
    }
    
    function Cn(e) {
      return ["html", "body", "#document"].indexOf(pn(e)) >= 0 ? e.ownerDocument.body : rn(e) && gn(e) ? e : Cn(xn(e))
    }
    
    function En(e, t) {
      var n;
      void 0 === t && (t = []);
      var r = Cn(e), o = r === (null == (n = e.ownerDocument) ? void 0 : n.body), a = tn(r),
        i = o ? [a].concat(a.visualViewport || [], gn(r) ? r : []) : r, l = t.concat(i);
      return o ? l : l.concat(En(xn(i)))
    }
    
    function wn(e) {
      return ["table", "td", "th"].indexOf(pn(e)) >= 0
    }
    
    function kn(e) {
      return rn(e) && "fixed" !== vn(e).position ? e.offsetParent : null
    }
    
    function Fn(e) {
      for (var t = tn(e), n = kn(e); n && wn(n) && "static" === vn(n).position;) n = kn(n);
      return n && ("html" === pn(n) || "body" === pn(n) && "static" === vn(n).position) ? t : n || function (e) {
        var t = /firefox/i.test(cn());
        if (/Trident/i.test(cn()) && rn(e) && "fixed" === vn(e).position) return null;
        var n = xn(e);
        for (on(n) && (n = n.host); rn(n) && ["html", "body"].indexOf(pn(n)) < 0;) {
          var r = vn(n);
          if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
          n = n.parentNode
        }
        return null
      }(e) || t
    }
    
    var Sn = "top", An = "bottom", Dn = "right", Zn = "left", Bn = "auto", jn = [Sn, An, Dn, Zn], Pn = "start",
      Rn = "end", Mn = "viewport", Nn = "popper", _n = jn.reduce((function (e, t) {
        return e.concat([t + "-" + Pn, t + "-" + Rn])
      }), []), Tn = [].concat(jn, [Bn]).reduce((function (e, t) {
        return e.concat([t, t + "-" + Pn, t + "-" + Rn])
      }), []),
      On = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
    
    function In(e) {
      var t = new Map, n = new Set, r = [];
      
      function o(e) {
        n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function (e) {
          if (!n.has(e)) {
            var r = t.get(e);
            r && o(r)
          }
        })), r.push(e)
      }
      
      return e.forEach((function (e) {
        t.set(e.name, e)
      })), e.forEach((function (e) {
        n.has(e.name) || o(e)
      })), r
    }
    
    var zn = {placement: "bottom", modifiers: [], strategy: "absolute"};
    
    function Ln() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return !t.some((function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect)
      }))
    }
    
    function $n(e) {
      void 0 === e && (e = {});
      var t = e, n = t.defaultModifiers, r = void 0 === n ? [] : n, o = t.defaultOptions, a = void 0 === o ? zn : o;
      return function (e, t, n) {
        void 0 === n && (n = a);
        var o, i, l = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, zn, a),
          modifiersData: {},
          elements: {reference: e, popper: t},
          attributes: {},
          styles: {}
        }, s = [], c = !1, u = {
          state: l, setOptions: function (n) {
            var o = "function" == typeof n ? n(l.options) : n;
            d(), l.options = Object.assign({}, a, l.options, o), l.scrollParents = {
              reference: nn(e) ? En(e) : e.contextElement ? En(e.contextElement) : [],
              popper: En(t)
            };
            var i, c, f = function (e) {
              var t = In(e);
              return On.reduce((function (e, n) {
                return e.concat(t.filter((function (e) {
                  return e.phase === n
                })))
              }), [])
            }((i = [].concat(r, l.options.modifiers), c = i.reduce((function (e, t) {
              var n = e[t.name];
              return e[t.name] = n ? Object.assign({}, n, t, {
                options: Object.assign({}, n.options, t.options),
                data: Object.assign({}, n.data, t.data)
              }) : t, e
            }), {}), Object.keys(c).map((function (e) {
              return c[e]
            }))));
            return l.orderedModifiers = f.filter((function (e) {
              return e.enabled
            })), l.orderedModifiers.forEach((function (e) {
              var t = e.name, n = e.options, r = void 0 === n ? {} : n, o = e.effect;
              if ("function" == typeof o) {
                var a = o({state: l, name: t, instance: u, options: r});
                s.push(a || function () {
                })
              }
            })), u.update()
          }, forceUpdate: function () {
            if (!c) {
              var e = l.elements, t = e.reference, n = e.popper;
              if (Ln(t, n)) {
                l.rects = {
                  reference: bn(t, Fn(n), "fixed" === l.options.strategy),
                  popper: yn(n)
                }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach((function (e) {
                  return l.modifiersData[e.name] = Object.assign({}, e.data)
                }));
                for (var r = 0; r < l.orderedModifiers.length; r++) if (!0 !== l.reset) {
                  var o = l.orderedModifiers[r], a = o.fn, i = o.options, s = void 0 === i ? {} : i, d = o.name;
                  "function" == typeof a && (l = a({state: l, options: s, name: d, instance: u}) || l)
                } else l.reset = !1, r = -1
              }
            }
          }, update: (o = function () {
            return new Promise((function (e) {
              u.forceUpdate(), e(l)
            }))
          }, function () {
            return i || (i = new Promise((function (e) {
              Promise.resolve().then((function () {
                i = void 0, e(o())
              }))
            }))), i
          }), destroy: function () {
            d(), c = !0
          }
        };
        if (!Ln(e, t)) return u;
        
        function d() {
          s.forEach((function (e) {
            return e()
          })), s = []
        }
        
        return u.setOptions(n).then((function (e) {
          !c && n.onFirstUpdate && n.onFirstUpdate(e)
        })), u
      }
    }
    
    var Wn = {passive: !0};
    const Hn = {
      name: "eventListeners", enabled: !0, phase: "write", fn: function () {
      }, effect: function (e) {
        var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = void 0 === o || o, i = r.resize,
          l = void 0 === i || i, s = tn(t.elements.popper),
          c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return a && c.forEach((function (e) {
          e.addEventListener("scroll", n.update, Wn)
        })), l && s.addEventListener("resize", n.update, Wn), function () {
          a && c.forEach((function (e) {
            e.removeEventListener("scroll", n.update, Wn)
          })), l && s.removeEventListener("resize", n.update, Wn)
        }
      }, data: {}
    };
    
    function Vn(e) {
      return e.split("-")[0]
    }
    
    function Un(e) {
      return e.split("-")[1]
    }
    
    function qn(e) {
      return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
    }
    
    function Kn(e) {
      var t, n = e.reference, r = e.element, o = e.placement, a = o ? Vn(o) : null, i = o ? Un(o) : null,
        l = n.x + n.width / 2 - r.width / 2, s = n.y + n.height / 2 - r.height / 2;
      switch (a) {
        case Sn:
          t = {x: l, y: n.y - r.height};
          break;
        case An:
          t = {x: l, y: n.y + n.height};
          break;
        case Dn:
          t = {x: n.x + n.width, y: s};
          break;
        case Zn:
          t = {x: n.x - r.width, y: s};
          break;
        default:
          t = {x: n.x, y: n.y}
      }
      var c = a ? qn(a) : null;
      if (null != c) {
        var u = "y" === c ? "height" : "width";
        switch (i) {
          case Pn:
            t[c] = t[c] - (n[u] / 2 - r[u] / 2);
            break;
          case Rn:
            t[c] = t[c] + (n[u] / 2 - r[u] / 2)
        }
      }
      return t
    }
    
    var Gn = {top: "auto", right: "auto", bottom: "auto", left: "auto"};
    
    function Xn(e) {
      var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, l = e.position,
        s = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = i.x, p = void 0 === f ? 0 : f,
        m = i.y, h = void 0 === m ? 0 : m, v = "function" == typeof u ? u({x: p, y: h}) : {x: p, y: h};
      p = v.x, h = v.y;
      var g = i.hasOwnProperty("x"), b = i.hasOwnProperty("y"), y = Zn, x = Sn, C = window;
      if (c) {
        var E = Fn(n), w = "clientHeight", k = "clientWidth";
        E === tn(n) && "static" !== vn(E = mn(n)).position && "absolute" === l && (w = "scrollHeight", k = "scrollWidth"), (o === Sn || (o === Zn || o === Dn) && a === Rn) && (x = An, h -= (d && E === C && C.visualViewport ? C.visualViewport.height : E[w]) - r.height, h *= s ? 1 : -1), o !== Zn && (o !== Sn && o !== An || a !== Rn) || (y = Dn, p -= (d && E === C && C.visualViewport ? C.visualViewport.width : E[k]) - r.width, p *= s ? 1 : -1)
      }
      var F, S = Object.assign({position: l}, c && Gn), A = !0 === u ? function (e) {
        var t = e.x, n = e.y, r = window.devicePixelRatio || 1;
        return {x: sn(t * r) / r || 0, y: sn(n * r) / r || 0}
      }({x: p, y: h}) : {x: p, y: h};
      return p = A.x, h = A.y, s ? Object.assign({}, S, ((F = {})[x] = b ? "0" : "", F[y] = g ? "0" : "", F.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", F)) : Object.assign({}, S, ((t = {})[x] = b ? h + "px" : "", t[y] = g ? p + "px" : "", t.transform = "", t))
    }
    
    const Yn = {
      name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (e) {
        var t = e.state, n = e.options, r = n.gpuAcceleration, o = void 0 === r || r, a = n.adaptive,
          i = void 0 === a || a, l = n.roundOffsets, s = void 0 === l || l, c = {
            placement: Vn(t.placement),
            variation: Un(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: o,
            isFixed: "fixed" === t.options.strategy
          };
        null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Xn(Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: s
        })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Xn(Object.assign({}, c, {
          offsets: t.modifiersData.arrow,
          position: "absolute",
          adaptive: !1,
          roundOffsets: s
        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {"data-popper-placement": t.placement})
      }, data: {}
    }, Qn = {
      name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (e) {
        var t = e.state, n = e.options, r = e.name, o = n.offset, a = void 0 === o ? [0, 0] : o,
          i = Tn.reduce((function (e, n) {
            return e[n] = function (e, t, n) {
              var r = Vn(e), o = [Zn, Sn].indexOf(r) >= 0 ? -1 : 1,
                a = "function" == typeof n ? n(Object.assign({}, t, {placement: e})) : n, i = a[0], l = a[1];
              return i = i || 0, l = (l || 0) * o, [Zn, Dn].indexOf(r) >= 0 ? {x: l, y: i} : {x: i, y: l}
            }(n, t.rects, a), e
          }), {}), l = i[t.placement], s = l.x, c = l.y;
        null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = i
      }
    };
    var Jn = {left: "right", right: "left", bottom: "top", top: "bottom"};
    
    function er(e) {
      return e.replace(/left|right|bottom|top/g, (function (e) {
        return Jn[e]
      }))
    }
    
    var tr = {start: "end", end: "start"};
    
    function nr(e) {
      return e.replace(/start|end/g, (function (e) {
        return tr[e]
      }))
    }
    
    function rr(e, t) {
      var n = t.getRootNode && t.getRootNode();
      if (e.contains(t)) return !0;
      if (n && on(n)) {
        var r = t;
        do {
          if (r && e.isSameNode(r)) return !0;
          r = r.parentNode || r.host
        } while (r)
      }
      return !1
    }
    
    function or(e) {
      return Object.assign({}, e, {left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height})
    }
    
    function ar(e, t, n) {
      return t === Mn ? or(function (e, t) {
        var n = tn(e), r = mn(e), o = n.visualViewport, a = r.clientWidth, i = r.clientHeight, l = 0, s = 0;
        if (o) {
          a = o.width, i = o.height;
          var c = un();
          (c || !c && "fixed" === t) && (l = o.offsetLeft, s = o.offsetTop)
        }
        return {width: a, height: i, x: l + hn(e), y: s}
      }(e, n)) : nn(t) ? function (e, t) {
        var n = dn(e, !1, "fixed" === t);
        return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
      }(t, n) : or(function (e) {
        var t, n = mn(e), r = fn(e), o = null == (t = e.ownerDocument) ? void 0 : t.body,
          a = an(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
          i = an(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
          l = -r.scrollLeft + hn(e), s = -r.scrollTop;
        return "rtl" === vn(o || n).direction && (l += an(n.clientWidth, o ? o.clientWidth : 0) - a), {
          width: a,
          height: i,
          x: l,
          y: s
        }
      }(mn(e)))
    }
    
    function ir(e) {
      return Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}, e)
    }
    
    function lr(e, t) {
      return t.reduce((function (t, n) {
        return t[n] = e, t
      }), {})
    }
    
    function sr(e, t) {
      void 0 === t && (t = {});
      var n = t, r = n.placement, o = void 0 === r ? e.placement : r, a = n.strategy, i = void 0 === a ? e.strategy : a,
        l = n.boundary, s = void 0 === l ? "clippingParents" : l, c = n.rootBoundary, u = void 0 === c ? Mn : c,
        d = n.elementContext, f = void 0 === d ? Nn : d, p = n.altBoundary, m = void 0 !== p && p, h = n.padding,
        v = void 0 === h ? 0 : h, g = ir("number" != typeof v ? v : lr(v, jn)), b = f === Nn ? "reference" : Nn,
        y = e.rects.popper, x = e.elements[m ? b : f], C = function (e, t, n, r) {
          var o = "clippingParents" === t ? function (e) {
            var t = En(xn(e)), n = ["absolute", "fixed"].indexOf(vn(e).position) >= 0 && rn(e) ? Fn(e) : e;
            return nn(n) ? t.filter((function (e) {
              return nn(e) && rr(e, n) && "body" !== pn(e)
            })) : []
          }(e) : [].concat(t), a = [].concat(o, [n]), i = a[0], l = a.reduce((function (t, n) {
            var o = ar(e, n, r);
            return t.top = an(o.top, t.top), t.right = ln(o.right, t.right), t.bottom = ln(o.bottom, t.bottom), t.left = an(o.left, t.left), t
          }), ar(e, i, r));
          return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l
        }(nn(x) ? x : x.contextElement || mn(e.elements.popper), s, u, i), E = dn(e.elements.reference),
        w = Kn({reference: E, element: y, strategy: "absolute", placement: o}), k = or(Object.assign({}, y, w)),
        F = f === Nn ? k : E, S = {
          top: C.top - F.top + g.top,
          bottom: F.bottom - C.bottom + g.bottom,
          left: C.left - F.left + g.left,
          right: F.right - C.right + g.right
        }, A = e.modifiersData.offset;
      if (f === Nn && A) {
        var D = A[o];
        Object.keys(S).forEach((function (e) {
          var t = [Dn, An].indexOf(e) >= 0 ? 1 : -1, n = [Sn, An].indexOf(e) >= 0 ? "y" : "x";
          S[e] += D[n] * t
        }))
      }
      return S
    }
    
    const cr = {
      name: "flip", enabled: !0, phase: "main", fn: function (e) {
        var t = e.state, n = e.options, r = e.name;
        if (!t.modifiersData[r]._skip) {
          for (var o = n.mainAxis, a = void 0 === o || o, i = n.altAxis, l = void 0 === i || i, s = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = void 0 === p || p, h = n.allowedAutoPlacements, v = t.options.placement, g = Vn(v), b = s || (g !== v && m ? function (e) {
            if (Vn(e) === Bn) return [];
            var t = er(e);
            return [nr(e), t, nr(t)]
          }(v) : [er(v)]), y = [v].concat(b).reduce((function (e, n) {
            return e.concat(Vn(n) === Bn ? function (e, t) {
              void 0 === t && (t = {});
              var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, i = n.padding, l = n.flipVariations,
                s = n.allowedAutoPlacements, c = void 0 === s ? Tn : s, u = Un(r),
                d = u ? l ? _n : _n.filter((function (e) {
                  return Un(e) === u
                })) : jn, f = d.filter((function (e) {
                  return c.indexOf(e) >= 0
                }));
              0 === f.length && (f = d);
              var p = f.reduce((function (t, n) {
                return t[n] = sr(e, {placement: n, boundary: o, rootBoundary: a, padding: i})[Vn(n)], t
              }), {});
              return Object.keys(p).sort((function (e, t) {
                return p[e] - p[t]
              }))
            }(t, {
              placement: n,
              boundary: u,
              rootBoundary: d,
              padding: c,
              flipVariations: m,
              allowedAutoPlacements: h
            }) : n)
          }), []), x = t.rects.reference, C = t.rects.popper, E = new Map, w = !0, k = y[0], F = 0; F < y.length; F++) {
            var S = y[F], A = Vn(S), D = Un(S) === Pn, Z = [Sn, An].indexOf(A) >= 0, B = Z ? "width" : "height",
              j = sr(t, {placement: S, boundary: u, rootBoundary: d, altBoundary: f, padding: c}),
              P = Z ? D ? Dn : Zn : D ? An : Sn;
            x[B] > C[B] && (P = er(P));
            var R = er(P), M = [];
            if (a && M.push(j[A] <= 0), l && M.push(j[P] <= 0, j[R] <= 0), M.every((function (e) {
              return e
            }))) {
              k = S, w = !1;
              break
            }
            E.set(S, M)
          }
          if (w) for (var N = function (e) {
            var t = y.find((function (t) {
              var n = E.get(t);
              if (n) return n.slice(0, e).every((function (e) {
                return e
              }))
            }));
            if (t) return k = t, "break"
          }, _ = m ? 3 : 1; _ > 0 && "break" !== N(_); _--) ;
          t.placement !== k && (t.modifiersData[r]._skip = !0, t.placement = k, t.reset = !0)
        }
      }, requiresIfExists: ["offset"], data: {_skip: !1}
    };
    
    function ur(e, t, n) {
      return an(e, ln(t, n))
    }
    
    const dr = {
      name: "preventOverflow", enabled: !0, phase: "main", fn: function (e) {
        var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = void 0 === o || o, i = n.altAxis,
          l = void 0 !== i && i, s = n.boundary, c = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether,
          p = void 0 === f || f, m = n.tetherOffset, h = void 0 === m ? 0 : m,
          v = sr(t, {boundary: s, rootBoundary: c, padding: d, altBoundary: u}), g = Vn(t.placement),
          b = Un(t.placement), y = !b, x = qn(g), C = "x" === x ? "y" : "x", E = t.modifiersData.popperOffsets,
          w = t.rects.reference, k = t.rects.popper,
          F = "function" == typeof h ? h(Object.assign({}, t.rects, {placement: t.placement})) : h,
          S = "number" == typeof F ? {mainAxis: F, altAxis: F} : Object.assign({mainAxis: 0, altAxis: 0}, F),
          A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {x: 0, y: 0};
        if (E) {
          if (a) {
            var Z, B = "y" === x ? Sn : Zn, j = "y" === x ? An : Dn, P = "y" === x ? "height" : "width", R = E[x],
              M = R + v[B], N = R - v[j], _ = p ? -k[P] / 2 : 0, T = b === Pn ? w[P] : k[P],
              O = b === Pn ? -k[P] : -w[P], I = t.elements.arrow, z = p && I ? yn(I) : {width: 0, height: 0},
              L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              }, $ = L[B], W = L[j], H = ur(0, w[P], z[P]),
              V = y ? w[P] / 2 - _ - H - $ - S.mainAxis : T - H - $ - S.mainAxis,
              U = y ? -w[P] / 2 + _ + H + W + S.mainAxis : O + H + W + S.mainAxis,
              q = t.elements.arrow && Fn(t.elements.arrow),
              K = q ? "y" === x ? q.clientTop || 0 : q.clientLeft || 0 : 0,
              G = null != (Z = null == A ? void 0 : A[x]) ? Z : 0, X = R + U - G,
              Y = ur(p ? ln(M, R + V - G - K) : M, R, p ? an(N, X) : N);
            E[x] = Y, D[x] = Y - R
          }
          if (l) {
            var Q, J = "x" === x ? Sn : Zn, ee = "x" === x ? An : Dn, te = E[C], ne = "y" === C ? "height" : "width",
              re = te + v[J], oe = te - v[ee], ae = -1 !== [Sn, Zn].indexOf(g),
              ie = null != (Q = null == A ? void 0 : A[C]) ? Q : 0, le = ae ? re : te - w[ne] - k[ne] - ie + S.altAxis,
              se = ae ? te + w[ne] + k[ne] - ie - S.altAxis : oe, ce = p && ae ? function (e, t, n) {
                var r = ur(e, t, n);
                return r > n ? n : r
              }(le, te, se) : ur(p ? le : re, te, p ? se : oe);
            E[C] = ce, D[C] = ce - te
          }
          t.modifiersData[r] = D
        }
      }, requiresIfExists: ["offset"]
    }, fr = {
      name: "arrow", enabled: !0, phase: "main", fn: function (e) {
        var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, i = n.modifiersData.popperOffsets,
          l = Vn(n.placement), s = qn(l), c = [Zn, Dn].indexOf(l) >= 0 ? "height" : "width";
        if (a && i) {
          var u = function (e, t) {
              return ir("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {placement: t.placement})) : e) ? e : lr(e, jn))
            }(o.padding, n), d = yn(a), f = "y" === s ? Sn : Zn, p = "y" === s ? An : Dn,
            m = n.rects.reference[c] + n.rects.reference[s] - i[s] - n.rects.popper[c], h = i[s] - n.rects.reference[s],
            v = Fn(a), g = v ? "y" === s ? v.clientHeight || 0 : v.clientWidth || 0 : 0, b = m / 2 - h / 2, y = u[f],
            x = g - d[c] - u[p], C = g / 2 - d[c] / 2 + b, E = ur(y, C, x), w = s;
          n.modifiersData[r] = ((t = {})[w] = E, t.centerOffset = E - C, t)
        }
      }, effect: function (e) {
        var t = e.state, n = e.options.element, r = void 0 === n ? "[data-popper-arrow]" : n;
        null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && rr(t.elements.popper, r) && (t.elements.arrow = r)
      }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]
    };
    
    function pr(e, t, n) {
      return void 0 === n && (n = {x: 0, y: 0}), {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x
      }
    }
    
    function mr(e) {
      return [Sn, Dn, An, Zn].some((function (t) {
        return e[t] >= 0
      }))
    }
    
    var hr = $n({
      defaultModifiers: [Hn, {
        name: "popperOffsets", enabled: !0, phase: "read", fn: function (e) {
          var t = e.state, n = e.name;
          t.modifiersData[n] = Kn({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement
          })
        }, data: {}
      }, Yn, {
        name: "applyStyles", enabled: !0, phase: "write", fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach((function (e) {
            var n = t.styles[e] || {}, r = t.attributes[e] || {}, o = t.elements[e];
            rn(o) && pn(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function (e) {
              var t = r[e];
              !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
            })))
          }))
        }, effect: function (e) {
          var t = e.state, n = {
            popper: {position: t.options.strategy, left: "0", top: "0", margin: "0"},
            arrow: {position: "absolute"},
            reference: {}
          };
          return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () {
            Object.keys(t.elements).forEach((function (e) {
              var r = t.elements[e], o = t.attributes[e] || {},
                a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function (e, t) {
                  return e[t] = "", e
                }), {});
              rn(r) && pn(r) && (Object.assign(r.style, a), Object.keys(o).forEach((function (e) {
                r.removeAttribute(e)
              })))
            }))
          }
        }, requires: ["computeStyles"]
      }, Qn, cr, dr, fr, {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (e) {
          var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow,
            i = sr(t, {elementContext: "reference"}), l = sr(t, {altBoundary: !0}), s = pr(i, r), c = pr(l, o, a),
            u = mr(s), d = mr(c);
          t.modifiersData[n] = {
            referenceClippingOffsets: s,
            popperEscapeOffsets: c,
            isReferenceHidden: u,
            hasPopperEscaped: d
          }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": u,
            "data-popper-escaped": d
          })
        }
      }]
    }), vr = o(7960);
    const gr = e.forwardRef((function (t, n) {
      const {children: r, container: o, disablePortal: a = !1} = t, [i, l] = e.useState(null),
        s = (0, nt.Z)(e.isValidElement(r) ? r.ref : null, n);
      if ((0, en.Z)((() => {
        a || l(function (e) {
          return "function" == typeof e ? e() : e
        }(o) || document.body)
      }), [o, a]), (0, en.Z)((() => {
        if (i && !a) return (0, vr.Z)(n, i), () => {
          (0, vr.Z)(n, null)
        }
      }), [n, i, a]), a) {
        if (e.isValidElement(r)) {
          const t = {ref: s};
          return e.cloneElement(r, t)
        }
        return (0, D.jsx)(e.Fragment, {children: r})
      }
      return (0, D.jsx)(e.Fragment, {children: i ? ut.createPortal(r, i) : i})
    }));
    
    function br(e) {
      return (0, S.Z)("MuiPopperUnstyled", e)
    }
    
    function yr(e) {
      if (void 0 === e) return {};
      const t = {};
      return Object.keys(e).filter((t => !(t.match(/^on[A-Z]/) && "function" == typeof e[t]))).forEach((n => {
        t[n] = e[n]
      })), t
    }
    
    function xr(e, t) {
      return "function" == typeof e ? e(t) : e
    }
    
    (0, F.Z)("MuiPopperUnstyled", ["root"]);
    const Cr = ["elementType", "externalSlotProps", "ownerState"];
    
    function Er(e) {
      var t;
      const {elementType: n, externalSlotProps: r, ownerState: o} = e, a = (0, b.Z)(e, Cr), i = xr(r, o), {
          props: l,
          internalRef: s
        } = function (e) {
          const {getSlotProps: t, additionalProps: n, externalSlotProps: r, externalForwardedProps: o, className: a} = e;
          if (!t) {
            const e = (0, x.Z)(null == o ? void 0 : o.className, null == r ? void 0 : r.className, a, null == n ? void 0 : n.className),
              t = (0, y.Z)({}, null == n ? void 0 : n.style, null == o ? void 0 : o.style, null == r ? void 0 : r.style),
              i = (0, y.Z)({}, n, o, r);
            return e.length > 0 && (i.className = e), Object.keys(t).length > 0 && (i.style = t), {
              props: i,
              internalRef: void 0
            }
          }
          const i = function (e, t = []) {
              if (void 0 === e) return {};
              const n = {};
              return Object.keys(e).filter((n => n.match(/^on[A-Z]/) && "function" == typeof e[n] && !t.includes(n))).forEach((t => {
                n[t] = e[t]
              })), n
            }((0, y.Z)({}, o, r)), l = yr(r), s = yr(o), c = t(i),
            u = (0, x.Z)(null == c ? void 0 : c.className, null == n ? void 0 : n.className, a, null == o ? void 0 : o.className, null == r ? void 0 : r.className),
            d = (0, y.Z)({}, null == c ? void 0 : c.style, null == n ? void 0 : n.style, null == o ? void 0 : o.style, null == r ? void 0 : r.style),
            f = (0, y.Z)({}, c, n, s, l);
          return u.length > 0 && (f.className = u), Object.keys(d).length > 0 && (f.style = d), {
            props: f,
            internalRef: c.ref
          }
        }((0, y.Z)({}, a, {externalSlotProps: i})),
        c = (0, nt.Z)(s, null == i ? void 0 : i.ref, null == (t = e.additionalProps) ? void 0 : t.ref);
      return Jt(n, (0, y.Z)({}, l, {ref: c}), o)
    }
    
    const wr = ["anchorEl", "children", "component", "direction", "disablePortal", "modifiers", "open", "ownerState", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps"],
      kr = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
    
    function Fr(e) {
      return "function" == typeof e ? e() : e
    }
    
    const Sr = {}, Ar = e.forwardRef((function (t, n) {
      var r;
      const {
          anchorEl: o,
          children: a,
          component: i,
          direction: l,
          disablePortal: s,
          modifiers: c,
          open: u,
          ownerState: d,
          placement: f,
          popperOptions: p,
          popperRef: m,
          slotProps: h = {},
          slots: v = {},
          TransitionProps: g
        } = t, x = (0, b.Z)(t, wr), E = e.useRef(null), w = (0, nt.Z)(E, n), k = e.useRef(null), F = (0, nt.Z)(k, m),
        S = e.useRef(F);
      (0, en.Z)((() => {
        S.current = F
      }), [F]), e.useImperativeHandle(m, (() => k.current), []);
      const A = function (e, t) {
        if ("ltr" === t) return e;
        switch (e) {
          case"bottom-end":
            return "bottom-start";
          case"bottom-start":
            return "bottom-end";
          case"top-end":
            return "top-start";
          case"top-start":
            return "top-end";
          default:
            return e
        }
      }(f, l), [Z, B] = e.useState(A), [j, P] = e.useState(Fr(o));
      e.useEffect((() => {
        k.current && k.current.forceUpdate()
      })), e.useEffect((() => {
        o && P(Fr(o))
      }), [o]), (0, en.Z)((() => {
        if (!j || !u) return;
        let e = [{name: "preventOverflow", options: {altBoundary: s}}, {
          name: "flip",
          options: {altBoundary: s}
        }, {
          name: "onUpdate", enabled: !0, phase: "afterWrite", fn: ({state: e}) => {
            B(e.placement)
          }
        }];
        null != c && (e = e.concat(c)), p && null != p.modifiers && (e = e.concat(p.modifiers));
        const t = hr(j, E.current, (0, y.Z)({placement: A}, p, {modifiers: e}));
        return S.current(t), () => {
          t.destroy(), S.current(null)
        }
      }), [j, s, c, u, p, A]);
      const R = {placement: Z};
      null !== g && (R.TransitionProps = g);
      const M = (0, C.Z)({root: ["root"]}, br, {}), N = null != (r = null != i ? i : v.root) ? r : "div", _ = Er({
        elementType: N,
        externalSlotProps: h.root,
        externalForwardedProps: x,
        additionalProps: {role: "tooltip", ref: w},
        ownerState: (0, y.Z)({}, t, d),
        className: M.root
      });
      return (0, D.jsx)(N, (0, y.Z)({}, _, {children: "function" == typeof a ? a(R) : a}))
    })), Dr = e.forwardRef((function (t, n) {
      const {
        anchorEl: r,
        children: o,
        container: a,
        direction: i = "ltr",
        disablePortal: l = !1,
        keepMounted: s = !1,
        modifiers: c,
        open: u,
        placement: d = "bottom",
        popperOptions: f = Sr,
        popperRef: p,
        style: m,
        transition: h = !1,
        slotProps: v = {},
        slots: g = {}
      } = t, x = (0, b.Z)(t, kr), [C, E] = e.useState(!0);
      if (!s && !u && (!h || C)) return null;
      let w;
      if (a) w = a; else if (r) {
        const e = Fr(r);
        w = e && void 0 !== e.nodeType ? (0, ot.Z)(e).body : (0, ot.Z)(null).body
      }
      const k = u || !s || h && !C ? void 0 : "none", F = h ? {
        in: u, onEnter: () => {
          E(!1)
        }, onExited: () => {
          E(!0)
        }
      } : void 0;
      return (0, D.jsx)(gr, {
        disablePortal: l,
        container: w,
        children: (0, D.jsx)(Ar, (0, y.Z)({
          anchorEl: r,
          direction: i,
          disablePortal: l,
          modifiers: c,
          ref: n,
          open: h ? !C : u,
          placement: d,
          popperOptions: f,
          popperRef: p,
          slotProps: v,
          slots: g
        }, x, {style: (0, y.Z)({position: "fixed", top: 0, left: 0, display: k}, m), TransitionProps: F, children: o}))
      })
    }));
    var Zr = o(7103);
    const Br = ["components", "componentsProps", "slots", "slotProps"],
      jr = (0, E.ZP)(Dr, {name: "MuiPopper", slot: "Root", overridesResolver: (e, t) => t.root})({}),
      Pr = e.forwardRef((function (e, t) {
        var n;
        const r = (0, Zr.Z)(), o = (0, w.Z)({props: e, name: "MuiPopper"}), {
          components: a,
          componentsProps: i,
          slots: l,
          slotProps: s
        } = o, c = (0, b.Z)(o, Br), u = null != (n = null == l ? void 0 : l.root) ? n : null == a ? void 0 : a.Root;
        return (0, D.jsx)(jr, (0, y.Z)({
          direction: null == r ? void 0 : r.direction,
          slots: {root: u},
          slotProps: null != s ? s : i
        }, c, {ref: t}))
      }));
    var Rr = o(7909), Mr = o(2893);
    
    function Nr(e) {
      return (0, S.Z)("MuiTooltip", e)
    }
    
    const _r = (0, F.Z)("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]),
      Tr = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"],
      Or = (0, E.ZP)(Pr, {
        name: "MuiTooltip", slot: "Popper", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose]
        }
      })((({theme: e, ownerState: t, open: n}) => (0, y.Z)({
        zIndex: (e.vars || e).zIndex.tooltip,
        pointerEvents: "none"
      }, !t.disableInteractive && {pointerEvents: "auto"}, !n && {pointerEvents: "none"}, t.arrow && {
        [`&[data-popper-placement*="bottom"] .${_r.arrow}`]: {
          top: 0,
          marginTop: "-0.71em",
          "&::before": {transformOrigin: "0 100%"}
        },
        [`&[data-popper-placement*="top"] .${_r.arrow}`]: {
          bottom: 0,
          marginBottom: "-0.71em",
          "&::before": {transformOrigin: "100% 0"}
        },
        [`&[data-popper-placement*="right"] .${_r.arrow}`]: (0, y.Z)({}, t.isRtl ? {
          right: 0,
          marginRight: "-0.71em"
        } : {left: 0, marginLeft: "-0.71em"}, {
          height: "1em",
          width: "0.71em",
          "&::before": {transformOrigin: "100% 100%"}
        }),
        [`&[data-popper-placement*="left"] .${_r.arrow}`]: (0, y.Z)({}, t.isRtl ? {
          left: 0,
          marginLeft: "-0.71em"
        } : {right: 0, marginRight: "-0.71em"}, {height: "1em", width: "0.71em", "&::before": {transformOrigin: "0 0"}})
      }))), Ir = (0, E.ZP)("div", {
        name: "MuiTooltip", slot: "Tooltip", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${(0, He.Z)(n.placement.split("-")[0])}`]]
        }
      })((({
             theme: e,
             ownerState: t
           }) => (0, y.Z)({
        backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : (0, R.Fq)(e.palette.grey[700], .92),
        borderRadius: (e.vars || e).shape.borderRadius,
        color: (e.vars || e).palette.common.white,
        fontFamily: e.typography.fontFamily,
        padding: "4px 8px",
        fontSize: e.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: "break-word",
        fontWeight: e.typography.fontWeightMedium
      }, t.arrow && {position: "relative", margin: 0}, t.touch && {
        padding: "8px 16px",
        fontSize: e.typography.pxToRem(14),
        lineHeight: (16 / 14, Math.round(114285.71428571428) / 1e5 + "em"),
        fontWeight: e.typography.fontWeightRegular
      }, {
        [`.${_r.popper}[data-popper-placement*="left"] &`]: (0, y.Z)({transformOrigin: "right center"}, t.isRtl ? (0, y.Z)({marginLeft: "14px"}, t.touch && {marginLeft: "24px"}) : (0, y.Z)({marginRight: "14px"}, t.touch && {marginRight: "24px"})),
        [`.${_r.popper}[data-popper-placement*="right"] &`]: (0, y.Z)({transformOrigin: "left center"}, t.isRtl ? (0, y.Z)({marginRight: "14px"}, t.touch && {marginRight: "24px"}) : (0, y.Z)({marginLeft: "14px"}, t.touch && {marginLeft: "24px"})),
        [`.${_r.popper}[data-popper-placement*="top"] &`]: (0, y.Z)({
          transformOrigin: "center bottom",
          marginBottom: "14px"
        }, t.touch && {marginBottom: "24px"}),
        [`.${_r.popper}[data-popper-placement*="bottom"] &`]: (0, y.Z)({
          transformOrigin: "center top",
          marginTop: "14px"
        }, t.touch && {marginTop: "24px"})
      }))), zr = (0, E.ZP)("span", {
        name: "MuiTooltip",
        slot: "Arrow",
        overridesResolver: (e, t) => t.arrow
      })((({theme: e}) => ({
        overflow: "hidden",
        position: "absolute",
        width: "1em",
        height: "0.71em",
        boxSizing: "border-box",
        color: e.vars ? e.vars.palette.Tooltip.bg : (0, R.Fq)(e.palette.grey[700], .9),
        "&::before": {
          content: '""',
          margin: "auto",
          display: "block",
          width: "100%",
          height: "100%",
          backgroundColor: "currentColor",
          transform: "rotate(45deg)"
        }
      })));
    let Lr = !1, $r = null;
    
    function Wr(e, t) {
      return n => {
        t && t(n), e(n)
      }
    }
    
    const Hr = e.forwardRef((function (t, n) {
      var r, o, a, i, l, s, c, u, d, f, p, m, h, v, g, E, k, F, S;
      const A = (0, w.Z)({props: t, name: "MuiTooltip"}), {
          arrow: Z = !1,
          children: B,
          components: j = {},
          componentsProps: P = {},
          describeChild: R = !1,
          disableFocusListener: T = !1,
          disableHoverListener: O = !1,
          disableInteractive: I = !1,
          disableTouchListener: z = !1,
          enterDelay: L = 100,
          enterNextDelay: $ = 0,
          enterTouchDelay: W = 700,
          followCursor: H = !1,
          id: V,
          leaveDelay: U = 0,
          leaveTouchDelay: q = 1500,
          onClose: K,
          onOpen: G,
          open: X,
          placement: Y = "bottom",
          PopperComponent: Q,
          PopperProps: J = {},
          slotProps: ee = {},
          slots: te = {},
          title: ne,
          TransitionComponent: re = St,
          TransitionProps: oe
        } = A, ae = (0, b.Z)(A, Tr), ie = ct(),
        le = "rtl" === ie.direction, [se, ce] = e.useState(), [ue, de] = e.useState(null), fe = e.useRef(!1),
        pe = I || H, me = e.useRef(), he = e.useRef(), ve = e.useRef(),
        ge = e.useRef(), [be, ye] = (0, Mr.Z)({controlled: X, default: !1, name: "Tooltip", state: "open"});
      let xe = be;
      const Ce = (0, Rr.Z)(V), Ee = e.useRef(), we = e.useCallback((() => {
        void 0 !== Ee.current && (document.body.style.WebkitUserSelect = Ee.current, Ee.current = void 0), clearTimeout(ge.current)
      }), []);
      e.useEffect((() => () => {
        clearTimeout(me.current), clearTimeout(he.current), clearTimeout(ve.current), we()
      }), [we]);
      const ke = e => {
        clearTimeout($r), Lr = !0, ye(!0), G && !xe && G(e)
      }, Fe = (0, N.Z)((e => {
        clearTimeout($r), $r = setTimeout((() => {
          Lr = !1
        }), 800 + U), ye(!1), K && xe && K(e), clearTimeout(me.current), me.current = setTimeout((() => {
          fe.current = !1
        }), ie.transitions.duration.shortest)
      })), Se = e => {
        fe.current && "touchstart" !== e.type || (se && se.removeAttribute("title"), clearTimeout(he.current), clearTimeout(ve.current), L || Lr && $ ? he.current = setTimeout((() => {
          ke(e)
        }), Lr ? $ : L) : ke(e))
      }, Ae = e => {
        clearTimeout(he.current), clearTimeout(ve.current), ve.current = setTimeout((() => {
          Fe(e)
        }), U)
      }, {isFocusVisibleRef: De, onBlur: Ze, onFocus: Be, ref: je} = (0, _.Z)(), [, Pe] = e.useState(!1), Re = e => {
        Ze(e), !1 === De.current && (Pe(!1), Ae(e))
      }, Me = e => {
        se || ce(e.currentTarget), Be(e), !0 === De.current && (Pe(!0), Se(e))
      }, Ne = e => {
        fe.current = !0;
        const t = B.props;
        t.onTouchStart && t.onTouchStart(e)
      }, _e = Se, Te = Ae;
      e.useEffect((() => {
        if (xe) return document.addEventListener("keydown", e), () => {
          document.removeEventListener("keydown", e)
        };
        
        function e(e) {
          "Escape" !== e.key && "Esc" !== e.key || Fe(e)
        }
      }), [Fe, xe]);
      const Oe = (0, M.Z)(B.ref, je, ce, n);
      ne || 0 === ne || (xe = !1);
      const Ie = e.useRef({x: 0, y: 0}), ze = e.useRef(), Le = {}, $e = "string" == typeof ne;
      R ? (Le.title = xe || !$e || O ? null : ne, Le["aria-describedby"] = xe ? Ce : null) : (Le["aria-label"] = $e ? ne : null, Le["aria-labelledby"] = xe && !$e ? Ce : null);
      const We = (0, y.Z)({}, Le, ae, B.props, {
        className: (0, x.Z)(ae.className, B.props.className),
        onTouchStart: Ne,
        ref: Oe
      }, H ? {
        onMouseMove: e => {
          const t = B.props;
          t.onMouseMove && t.onMouseMove(e), Ie.current = {
            x: e.clientX,
            y: e.clientY
          }, ze.current && ze.current.update()
        }
      } : {}), Ve = {};
      z || (We.onTouchStart = e => {
        Ne(e), clearTimeout(ve.current), clearTimeout(me.current), we(), Ee.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", ge.current = setTimeout((() => {
          document.body.style.WebkitUserSelect = Ee.current, Se(e)
        }), W)
      }, We.onTouchEnd = e => {
        B.props.onTouchEnd && B.props.onTouchEnd(e), we(), clearTimeout(ve.current), ve.current = setTimeout((() => {
          Fe(e)
        }), q)
      }), O || (We.onMouseOver = Wr(_e, We.onMouseOver), We.onMouseLeave = Wr(Te, We.onMouseLeave), pe || (Ve.onMouseOver = _e, Ve.onMouseLeave = Te)), T || (We.onFocus = Wr(Me, We.onFocus), We.onBlur = Wr(Re, We.onBlur), pe || (Ve.onFocus = Me, Ve.onBlur = Re));
      const Ue = e.useMemo((() => {
          var e;
          let t = [{name: "arrow", enabled: Boolean(ue), options: {element: ue, padding: 4}}];
          return null != (e = J.popperOptions) && e.modifiers && (t = t.concat(J.popperOptions.modifiers)), (0, y.Z)({}, J.popperOptions, {modifiers: t})
        }), [ue, J]), qe = (0, y.Z)({}, A, {
          isRtl: le,
          arrow: Z,
          disableInteractive: pe,
          placement: Y,
          PopperComponentProp: Q,
          touch: fe.current
        }), Ke = (e => {
          const {classes: t, disableInteractive: n, arrow: r, touch: o, placement: a} = e, i = {
            popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
            tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${(0, He.Z)(a.split("-")[0])}`],
            arrow: ["arrow"]
          };
          return (0, C.Z)(i, Nr, t)
        })(qe), Ge = null != (r = null != (o = te.popper) ? o : j.Popper) ? r : Or,
        Xe = null != (a = null != (i = null != (l = te.transition) ? l : j.Transition) ? i : re) ? a : St,
        Ye = null != (s = null != (c = te.tooltip) ? c : j.Tooltip) ? s : Ir,
        Qe = null != (u = null != (d = te.arrow) ? d : j.Arrow) ? u : zr,
        Je = Jt(Ge, (0, y.Z)({}, J, null != (f = ee.popper) ? f : P.popper, {className: (0, x.Z)(Ke.popper, null == J ? void 0 : J.className, null == (p = null != (m = ee.popper) ? m : P.popper) ? void 0 : p.className)}), qe),
        et = Jt(Xe, (0, y.Z)({}, oe, null != (h = ee.transition) ? h : P.transition), qe),
        tt = Jt(Ye, (0, y.Z)({}, null != (v = ee.tooltip) ? v : P.tooltip, {className: (0, x.Z)(Ke.tooltip, null == (g = null != (E = ee.tooltip) ? E : P.tooltip) ? void 0 : g.className)}), qe),
        nt = Jt(Qe, (0, y.Z)({}, null != (k = ee.arrow) ? k : P.arrow, {className: (0, x.Z)(Ke.arrow, null == (F = null != (S = ee.arrow) ? S : P.arrow) ? void 0 : F.className)}), qe);
      return (0, D.jsxs)(e.Fragment, {
        children: [e.cloneElement(B, We), (0, D.jsx)(Ge, (0, y.Z)({
          as: null != Q ? Q : Pr,
          placement: Y,
          anchorEl: H ? {
            getBoundingClientRect: () => ({
              top: Ie.current.y,
              left: Ie.current.x,
              right: Ie.current.x,
              bottom: Ie.current.y,
              width: 0,
              height: 0
            })
          } : se,
          popperRef: ze,
          open: !!se && xe,
          id: Ce,
          transition: !0
        }, Ve, Je, {
          popperOptions: Ue,
          children: ({TransitionProps: e}) => (0, D.jsx)(Xe, (0, y.Z)({timeout: ie.transitions.duration.shorter}, e, et, {children: (0, D.jsxs)(Ye, (0, y.Z)({}, tt, {children: [ne, Z ? (0, D.jsx)(Qe, (0, y.Z)({}, nt, {ref: de})) : null]}))}))
        }))]
      })
    }));
    var Vr = o(6693);
    const Ur = e.createContext(void 0);
    
    function qr() {
      return e.useContext(Ur)
    }
    
    function Kr(e) {
      return (0, S.Z)("MuiFormControlLabel", e)
    }
    
    const Gr = (0, F.Z)("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error"]);
    
    function Xr({props: e, states: t, muiFormControl: n}) {
      return t.reduce(((t, r) => (t[r] = e[r], n && void 0 === e[r] && (t[r] = n[r]), t)), {})
    }
    
    const Yr = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "slotProps", "value"],
      Qr = (0, E.ZP)("label", {
        name: "MuiFormControlLabel", slot: "Root", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [{[`& .${Gr.label}`]: t.label}, t.root, t[`labelPlacement${(0, He.Z)(n.labelPlacement)}`]]
        }
      })((({theme: e, ownerState: t}) => (0, y.Z)({
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        verticalAlign: "middle",
        WebkitTapHighlightColor: "transparent",
        marginLeft: -11,
        marginRight: 16,
        [`&.${Gr.disabled}`]: {cursor: "default"}
      }, "start" === t.labelPlacement && {
        flexDirection: "row-reverse",
        marginLeft: 16,
        marginRight: -11
      }, "top" === t.labelPlacement && {
        flexDirection: "column-reverse",
        marginLeft: 16
      }, "bottom" === t.labelPlacement && {
        flexDirection: "column",
        marginLeft: 16
      }, {[`& .${Gr.label}`]: {[`&.${Gr.disabled}`]: {color: (e.vars || e).palette.text.disabled}}}))),
      Jr = e.forwardRef((function (t, n) {
        var r;
        const o = (0, w.Z)({props: t, name: "MuiFormControlLabel"}), {
          className: a,
          componentsProps: i = {},
          control: l,
          disabled: s,
          disableTypography: c,
          label: u,
          labelPlacement: d = "end",
          slotProps: f = {}
        } = o, p = (0, b.Z)(o, Yr), m = qr();
        let h = s;
        void 0 === h && void 0 !== l.props.disabled && (h = l.props.disabled), void 0 === h && m && (h = m.disabled);
        const v = {disabled: h};
        ["checked", "name", "onChange", "value", "inputRef"].forEach((e => {
          void 0 === l.props[e] && void 0 !== o[e] && (v[e] = o[e])
        }));
        const g = Xr({props: o, muiFormControl: m, states: ["error"]}),
          E = (0, y.Z)({}, o, {disabled: h, labelPlacement: d, error: g.error}), k = (e => {
            const {classes: t, disabled: n, labelPlacement: r, error: o} = e, a = {
              root: ["root", n && "disabled", `labelPlacement${(0, He.Z)(r)}`, o && "error"],
              label: ["label", n && "disabled"]
            };
            return (0, C.Z)(a, Kr, t)
          })(E), F = null != (r = f.typography) ? r : i.typography;
        let S = u;
        return null == S || S.type === Xe || c || (S = (0, D.jsx)(Xe, (0, y.Z)({component: "span"}, F, {
          className: (0, x.Z)(k.label, null == F ? void 0 : F.className),
          children: S
        }))), (0, D.jsxs)(Qr, (0, y.Z)({
          className: (0, x.Z)(k.root, a),
          ownerState: E,
          ref: n
        }, p, {children: [e.cloneElement(l, v), S]}))
      }));
    
    function eo(e) {
      return (0, S.Z)("PrivateSwitchBase", e)
    }
    
    (0, F.Z)("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
    const to = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"],
      no = (0, E.ZP)(ge)((({ownerState: e}) => (0, y.Z)({
        padding: 9,
        borderRadius: "50%"
      }, "start" === e.edge && {marginLeft: "small" === e.size ? -3 : -12}, "end" === e.edge && {marginRight: "small" === e.size ? -3 : -12}))),
      ro = (0, E.ZP)("input")({
        cursor: "inherit",
        position: "absolute",
        opacity: 0,
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        zIndex: 1
      }), oo = e.forwardRef((function (e, t) {
        const {
          autoFocus: n,
          checked: r,
          checkedIcon: o,
          className: a,
          defaultChecked: i,
          disabled: l,
          disableFocusRipple: s = !1,
          edge: c = !1,
          icon: u,
          id: d,
          inputProps: f,
          inputRef: p,
          name: m,
          onBlur: h,
          onChange: v,
          onFocus: g,
          readOnly: E,
          required: w,
          tabIndex: k,
          type: F,
          value: S
        } = e, A = (0, b.Z)(e, to), [Z, B] = (0, Mr.Z)({
          controlled: r,
          default: Boolean(i),
          name: "SwitchBase",
          state: "checked"
        }), j = qr();
        let P = l;
        j && void 0 === P && (P = j.disabled);
        const R = "checkbox" === F || "radio" === F,
          M = (0, y.Z)({}, e, {checked: Z, disabled: P, disableFocusRipple: s, edge: c}), N = (e => {
            const {classes: t, checked: n, disabled: r, edge: o} = e,
              a = {root: ["root", n && "checked", r && "disabled", o && `edge${(0, He.Z)(o)}`], input: ["input"]};
            return (0, C.Z)(a, eo, t)
          })(M);
        return (0, D.jsxs)(no, (0, y.Z)({
          component: "span",
          className: (0, x.Z)(N.root, a),
          centerRipple: !0,
          focusRipple: !s,
          disabled: P,
          tabIndex: null,
          role: void 0,
          onFocus: e => {
            g && g(e), j && j.onFocus && j.onFocus(e)
          },
          onBlur: e => {
            h && h(e), j && j.onBlur && j.onBlur(e)
          },
          ownerState: M,
          ref: t
        }, A, {
          children: [(0, D.jsx)(ro, (0, y.Z)({
            autoFocus: n,
            checked: r,
            defaultChecked: i,
            className: N.input,
            disabled: P,
            id: R && d,
            name: m,
            onChange: e => {
              if (e.nativeEvent.defaultPrevented) return;
              const t = e.target.checked;
              B(t), v && v(e, t)
            },
            readOnly: E,
            ref: p,
            required: w,
            ownerState: M,
            tabIndex: k,
            type: F
          }, "checkbox" === F && void 0 === S ? {} : {value: S}, f)), Z ? o : u]
        }))
      }));
    var ao = o(5949);
    const io = (0, ao.Z)((0, D.jsx)("path", {d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}), "CheckBoxOutlineBlank"),
      lo = (0, ao.Z)((0, D.jsx)("path", {d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}), "CheckBox"),
      so = (0, ao.Z)((0, D.jsx)("path", {d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}), "IndeterminateCheckBox");
    
    function co(e) {
      return (0, S.Z)("MuiCheckbox", e)
    }
    
    const uo = (0, F.Z)("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary"]),
      fo = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"],
      po = (0, E.ZP)(oo, {
        shouldForwardProp: e => (0, E.FO)(e) || "classes" === e,
        name: "MuiCheckbox",
        slot: "Root",
        overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.root, n.indeterminate && t.indeterminate, "default" !== n.color && t[`color${(0, He.Z)(n.color)}`]]
        }
      })((({
             theme: e,
             ownerState: t
           }) => (0, y.Z)({color: (e.vars || e).palette.text.secondary}, !t.disableRipple && {
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${"default" === t.color ? e.vars.palette.action.activeChannel : e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, R.Fq)("default" === t.color ? e.palette.action.active : e.palette[t.color].main, e.palette.action.hoverOpacity),
          "@media (hover: none)": {backgroundColor: "transparent"}
        }
      }, "default" !== t.color && {
        [`&.${uo.checked}, &.${uo.indeterminate}`]: {color: (e.vars || e).palette[t.color].main},
        [`&.${uo.disabled}`]: {color: (e.vars || e).palette.action.disabled}
      }))), mo = (0, D.jsx)(lo, {}), ho = (0, D.jsx)(io, {}), vo = (0, D.jsx)(so, {}),
      go = e.forwardRef((function (t, n) {
        var r, o;
        const a = (0, w.Z)({props: t, name: "MuiCheckbox"}), {
            checkedIcon: i = mo,
            color: l = "primary",
            icon: s = ho,
            indeterminate: c = !1,
            indeterminateIcon: u = vo,
            inputProps: d,
            size: f = "medium",
            className: p
          } = a, m = (0, b.Z)(a, fo), h = c ? u : s, v = c ? u : i,
          g = (0, y.Z)({}, a, {color: l, indeterminate: c, size: f}), E = (e => {
            const {classes: t, indeterminate: n, color: r} = e,
              o = {root: ["root", n && "indeterminate", `color${(0, He.Z)(r)}`]}, a = (0, C.Z)(o, co, t);
            return (0, y.Z)({}, t, a)
          })(g);
        return (0, D.jsx)(po, (0, y.Z)({
          type: "checkbox",
          inputProps: (0, y.Z)({"data-indeterminate": c}, d),
          icon: e.cloneElement(h, {fontSize: null != (r = h.props.fontSize) ? r : f}),
          checkedIcon: e.cloneElement(v, {fontSize: null != (o = v.props.fontSize) ? o : f}),
          ownerState: g,
          ref: n,
          className: (0, x.Z)(E.root, p)
        }, m, {classes: E}))
      }));
    var bo = o(5709), yo = o(281), xo = o(299), Co = o(4957), Eo = o(7884), wo = o(8670), ko = o.n(wo);
    
    function Fo(e) {
      return (0, S.Z)("MuiIconButton", e)
    }
    
    const So = (0, F.Z)("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]),
      Ao = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], Do = (0, E.ZP)(ge, {
        name: "MuiIconButton", slot: "Root", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.root, "default" !== n.color && t[`color${(0, He.Z)(n.color)}`], n.edge && t[`edge${(0, He.Z)(n.edge)}`], t[`size${(0, He.Z)(n.size)}`]]
        }
      })((({theme: e, ownerState: t}) => (0, y.Z)({
        textAlign: "center",
        flex: "0 0 auto",
        fontSize: e.typography.pxToRem(24),
        padding: 8,
        borderRadius: "50%",
        overflow: "visible",
        color: (e.vars || e).palette.action.active,
        transition: e.transitions.create("background-color", {duration: e.transitions.duration.shortest})
      }, !t.disableRipple && {
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, R.Fq)(e.palette.action.active, e.palette.action.hoverOpacity),
          "@media (hover: none)": {backgroundColor: "transparent"}
        }
      }, "start" === t.edge && {marginLeft: "small" === t.size ? -3 : -12}, "end" === t.edge && {marginRight: "small" === t.size ? -3 : -12})), (({
                                                                                                                                                    theme: e,
                                                                                                                                                    ownerState: t
                                                                                                                                                  }) => {
        var n;
        const r = null == (n = (e.vars || e).palette) ? void 0 : n[t.color];
        return (0, y.Z)({}, "inherit" === t.color && {color: "inherit"}, "inherit" !== t.color && "default" !== t.color && (0, y.Z)({color: null == r ? void 0 : r.main}, !t.disableRipple && {"&:hover": (0, y.Z)({}, r && {backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, R.Fq)(r.main, e.palette.action.hoverOpacity)}, {"@media (hover: none)": {backgroundColor: "transparent"}})}), "small" === t.size && {
          padding: 5,
          fontSize: e.typography.pxToRem(18)
        }, "large" === t.size && {
          padding: 12,
          fontSize: e.typography.pxToRem(28)
        }, {[`&.${So.disabled}`]: {backgroundColor: "transparent", color: (e.vars || e).palette.action.disabled}})
      })), Zo = e.forwardRef((function (e, t) {
        const n = (0, w.Z)({props: e, name: "MuiIconButton"}), {
            edge: r = !1,
            children: o,
            className: a,
            color: i = "default",
            disabled: l = !1,
            disableFocusRipple: s = !1,
            size: c = "medium"
          } = n, u = (0, b.Z)(n, Ao), d = (0, y.Z)({}, n, {edge: r, color: i, disabled: l, disableFocusRipple: s, size: c}),
          f = (e => {
            const {classes: t, disabled: n, color: r, edge: o, size: a} = e,
              i = {root: ["root", n && "disabled", "default" !== r && `color${(0, He.Z)(r)}`, o && `edge${(0, He.Z)(o)}`, `size${(0, He.Z)(a)}`]};
            return (0, C.Z)(i, Fo, t)
          })(d);
        return (0, D.jsx)(Do, (0, y.Z)({
          className: (0, x.Z)(f.root, a),
          centerRipple: !0,
          focusRipple: !s,
          disabled: l,
          ref: t,
          ownerState: d
        }, u, {children: o}))
      }));
    
    function Bo(e) {
      return (0, S.Z)("MuiFab", e)
    }
    
    const jo = (0, F.Z)("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]),
      Po = ["children", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"],
      Ro = (0, E.ZP)(ge, {
        name: "MuiFab",
        slot: "Root",
        shouldForwardProp: e => (0, E.FO)(e) || "classes" === e,
        overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.root, t[n.variant], t[`size${(0, He.Z)(n.size)}`], "inherit" === n.color && t.colorInherit, t[(0, He.Z)(n.size)], t[n.color]]
        }
      })((({theme: e, ownerState: t}) => {
        var n, r;
        return (0, y.Z)({}, e.typography.button, {
          minHeight: 36,
          transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {duration: e.transitions.duration.short}),
          borderRadius: "50%",
          padding: 0,
          minWidth: 0,
          width: 56,
          height: 56,
          zIndex: (e.vars || e).zIndex.fab,
          boxShadow: (e.vars || e).shadows[6],
          "&:active": {boxShadow: (e.vars || e).shadows[12]},
          color: e.vars ? e.vars.palette.text.primary : null == (n = (r = e.palette).getContrastText) ? void 0 : n.call(r, e.palette.grey[300]),
          backgroundColor: (e.vars || e).palette.grey[300],
          "&:hover": {
            backgroundColor: (e.vars || e).palette.grey.A100,
            "@media (hover: none)": {backgroundColor: (e.vars || e).palette.grey[300]},
            textDecoration: "none"
          },
          [`&.${jo.focusVisible}`]: {boxShadow: (e.vars || e).shadows[6]}
        }, "small" === t.size && {width: 40, height: 40}, "medium" === t.size && {
          width: 48,
          height: 48
        }, "extended" === t.variant && {
          borderRadius: 24,
          padding: "0 16px",
          width: "auto",
          minHeight: "auto",
          minWidth: 48,
          height: 48
        }, "extended" === t.variant && "small" === t.size && {
          width: "auto",
          padding: "0 8px",
          borderRadius: 17,
          minWidth: 34,
          height: 34
        }, "extended" === t.variant && "medium" === t.size && {
          width: "auto",
          padding: "0 16px",
          borderRadius: 20,
          minWidth: 40,
          height: 40
        }, "inherit" === t.color && {color: "inherit"})
      }), (({
              theme: e,
              ownerState: t
            }) => (0, y.Z)({}, "inherit" !== t.color && "default" !== t.color && null != (e.vars || e).palette[t.color] && {
        color: (e.vars || e).palette[t.color].contrastText,
        backgroundColor: (e.vars || e).palette[t.color].main,
        "&:hover": {
          backgroundColor: (e.vars || e).palette[t.color].dark,
          "@media (hover: none)": {backgroundColor: (e.vars || e).palette[t.color].main}
        }
      })), (({theme: e}) => ({
        [`&.${jo.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }))), Mo = e.forwardRef((function (e, t) {
        const n = (0, w.Z)({props: e, name: "MuiFab"}), {
            children: r,
            className: o,
            color: a = "default",
            component: i = "button",
            disabled: l = !1,
            disableFocusRipple: s = !1,
            focusVisibleClassName: c,
            size: u = "large",
            variant: d = "circular"
          } = n, f = (0, b.Z)(n, Po),
          p = (0, y.Z)({}, n, {color: a, component: i, disabled: l, disableFocusRipple: s, size: u, variant: d}),
          m = (e => {
            const {color: t, variant: n, classes: r, size: o} = e,
              a = {root: ["root", n, `size${(0, He.Z)(o)}`, "inherit" === t ? "colorInherit" : t]},
              i = (0, C.Z)(a, Bo, r);
            return (0, y.Z)({}, r, i)
          })(p);
        return (0, D.jsx)(Ro, (0, y.Z)({
          className: (0, x.Z)(m.root, o),
          component: i,
          disabled: l,
          focusRipple: !s,
          focusVisibleClassName: (0, x.Z)(m.focusVisible, c),
          ownerState: p,
          ref: t
        }, f, {classes: m, children: r}))
      }));
    var No, _o, To, Oo, Io, zo = o(4534), Lo = o(1899), $o = o(1687), Wo = {}, Ho = [],
      Vo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
    
    function Uo(e, t) {
      for (var n in t) e[n] = t[n];
      return e
    }
    
    function qo(e) {
      var t = e.parentNode;
      t && t.removeChild(e)
    }
    
    function Ko(e, t, n) {
      var r, o, a, i, l = arguments;
      if (t = Uo({}, t), arguments.length > 3) for (n = [n], r = 3; r < arguments.length; r++) n.push(l[r]);
      if (null != n && (t.children = n), null != e && null != e.defaultProps) for (o in e.defaultProps) void 0 === t[o] && (t[o] = e.defaultProps[o]);
      return i = t.key, null != (a = t.ref) && delete t.ref, null != i && delete t.key, Go(e, t, i, a)
    }
    
    function Go(e, t, n, r) {
      var o = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __p: null,
        __b: 0,
        __e: null,
        l: null,
        __c: null,
        constructor: void 0
      };
      return No.vnode && No.vnode(o), o
    }
    
    function Xo(e) {
      return e.children
    }
    
    function Yo(e, t) {
      this.props = e, this.context = t
    }
    
    function Qo(e, t) {
      if (null == t) return e.__p ? Qo(e.__p, e.__p.__k.indexOf(e) + 1) : null;
      for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
      return "function" == typeof e.type ? Qo(e) : null
    }
    
    function Jo(e) {
      var t, n;
      if (null != (e = e.__p) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break
        }
        return Jo(e)
      }
    }
    
    function ea(e) {
      (!e.__d && (e.__d = !0) && 1 === _o.push(e) || Oo !== No.debounceRendering) && (Oo = No.debounceRendering, (No.debounceRendering || To)(ta))
    }
    
    function ta() {
      var e, t, n, r, o, a, i, l;
      for (_o.sort((function (e, t) {
        return t.__v.__b - e.__v.__b
      })); e = _o.pop();) e.__d && (n = void 0, r = void 0, a = (o = (t = e).__v).__e, i = t.__P, l = t.u, t.u = !1, i && (n = [], r = la(i, o, Uo({}, o), t.__n, void 0 !== i.ownerSVGElement, null, n, l, null == a ? Qo(o) : a), sa(n, o), r != a && Jo(o)))
    }
    
    function na(e, t, n, r, o, a, i, l, s) {
      var c, u, d, f, p, m, h, v = n && n.__k || Ho, g = v.length;
      if (l == Wo && (l = null != a ? a[0] : g ? Qo(n, 0) : null), c = 0, t.__k = ra(t.__k, (function (n) {
        if (null != n) {
          if (n.__p = t, n.__b = t.__b + 1, null === (d = v[c]) || d && n.key == d.key && n.type === d.type) v[c] = void 0; else for (u = 0; u < g; u++) {
            if ((d = v[u]) && n.key == d.key && n.type === d.type) {
              v[u] = void 0;
              break
            }
            d = null
          }
          if (f = la(e, n, d = d || Wo, r, o, a, i, null, l, s), (u = n.ref) && d.ref != u && (h || (h = [])).push(u, n.__c || f, n), null != f) {
            if (null == m && (m = f), null != n.l) f = n.l, n.l = null; else if (a == d || f != l || null == f.parentNode) {
              e:if (null == l || l.parentNode !== e) e.appendChild(f); else {
                for (p = l, u = 0; (p = p.nextSibling) && u < g; u += 2) if (p == f) break e;
                e.insertBefore(f, l)
              }
              "option" == t.type && (e.value = "")
            }
            l = f.nextSibling, "function" == typeof t.type && (t.l = f)
          }
        }
        return c++, n
      })), t.__e = m, null != a && "function" != typeof t.type) for (c = a.length; c--;) null != a[c] && qo(a[c]);
      for (c = g; c--;) null != v[c] && da(v[c], v[c]);
      if (h) for (c = 0; c < h.length; c++) ua(h[c], h[++c], h[++c])
    }
    
    function ra(e, t, n) {
      if (null == n && (n = []), null == e || "boolean" == typeof e) t && n.push(t(null)); else if (Array.isArray(e)) for (var r = 0; r < e.length; r++) ra(e[r], t, n); else n.push(t ? t(function (e) {
        if (null == e || "boolean" == typeof e) return null;
        if ("string" == typeof e || "number" == typeof e) return Go(null, e, null, null);
        if (null != e.__e || null != e.__c) {
          var t = Go(e.type, e.props, e.key, null);
          return t.__e = e.__e, t
        }
        return e
      }(e)) : e);
      return n
    }
    
    function oa(e, t, n) {
      "-" === t[0] ? e.setProperty(t, n) : e[t] = "number" == typeof n && !1 === Vo.test(t) ? n + "px" : null == n ? "" : n
    }
    
    function aa(e, t, n, r, o) {
      var a, i, l, s, c;
      if ("key" === (t = o ? "className" === t ? "class" : t : "class" === t ? "className" : t) || "children" === t) ; else if ("style" === t) if (a = e.style, "string" == typeof n) a.cssText = n; else {
        if ("string" == typeof r && (a.cssText = "", r = null), r) for (i in r) n && i in n || oa(a, i, "");
        if (n) for (l in n) r && n[l] === r[l] || oa(a, l, n[l])
      } else "o" === t[0] && "n" === t[1] ? (s = t !== (t = t.replace(/Capture$/, "")), c = t.toLowerCase(), t = (c in e ? c : t).slice(2), n ? (r || e.addEventListener(t, ia, s), (e.t || (e.t = {}))[t] = n) : e.removeEventListener(t, ia, s)) : "list" !== t && "tagName" !== t && "form" !== t && !o && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n ? e.removeAttribute(t) : e.setAttribute(t, n))
    }
    
    function ia(e) {
      return this.t[e.type](No.event ? No.event(e) : e)
    }
    
    function la(e, t, n, r, o, a, i, l, s, c) {
      var u, d, f, p, m, h, v, g, b, y, x = t.type;
      if (void 0 !== t.constructor) return null;
      (u = No.__b) && u(t);
      try {
        e:if ("function" == typeof x) {
          if (g = t.props, b = (u = x.contextType) && r[u.__c], y = u ? b ? b.props.value : u.__p : r, n.__c ? v = (d = t.__c = n.__c).__p = d.__E : ("prototype" in x && x.prototype.render ? t.__c = d = new x(g, y) : (t.__c = d = new Yo(g, y), d.constructor = x, d.render = fa), b && b.sub(d), d.props = g, d.state || (d.state = {}), d.context = y, d.__n = r, f = d.__d = !0, d.__h = []), null == d.__s && (d.__s = d.state), null != x.getDerivedStateFromProps && Uo(d.__s == d.state ? d.__s = Uo({}, d.__s) : d.__s, x.getDerivedStateFromProps(g, d.__s)), f) null == x.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && i.push(d); else {
            if (null == x.getDerivedStateFromProps && null == l && null != d.componentWillReceiveProps && d.componentWillReceiveProps(g, y), !l && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(g, d.__s, y)) {
              for (d.props = g, d.state = d.__s, d.__d = !1, d.__v = t, t.__e = null != s ? s !== n.__e ? s : n.__e : null, t.__k = n.__k, u = 0; u < t.__k.length; u++) t.__k[u] && (t.__k[u].__p = t);
              break e
            }
            null != d.componentWillUpdate && d.componentWillUpdate(g, d.__s, y)
          }
          for (p = d.props, m = d.state, d.context = y, d.props = g, d.state = d.__s, (u = No.__r) && u(t), d.__d = !1, d.__v = t, d.__P = e, u = d.render(d.props, d.state, d.context), t.__k = ra(null != u && u.type == Xo && null == u.key ? u.props.children : u), null != d.getChildContext && (r = Uo(Uo({}, r), d.getChildContext())), f || null == d.getSnapshotBeforeUpdate || (h = d.getSnapshotBeforeUpdate(p, m)), na(e, t, n, r, o, a, i, s, c), d.base = t.__e; u = d.__h.pop();) d.__s && (d.state = d.__s), u.call(d);
          f || null == p || null == d.componentDidUpdate || d.componentDidUpdate(p, m, h), v && (d.__E = d.__p = null)
        } else t.__e = ca(n.__e, t, n, r, o, a, i, c);
        (u = No.diffed) && u(t)
      } catch (e) {
        No.__e(e, t, n)
      }
      return t.__e
    }
    
    function sa(e, t) {
      for (var n; n = e.pop();) try {
        n.componentDidMount()
      } catch (e) {
        No.__e(e, n.__v)
      }
      No.__c && No.__c(t)
    }
    
    function ca(e, t, n, r, o, a, i, l) {
      var s, c, u, d, f = n.props, p = t.props;
      if (o = "svg" === t.type || o, null == e && null != a) for (s = 0; s < a.length; s++) if (null != (c = a[s]) && (null === t.type ? 3 === c.nodeType : c.localName === t.type)) {
        e = c, a[s] = null;
        break
      }
      if (null == e) {
        if (null === t.type) return document.createTextNode(p);
        e = o ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type), a = null
      }
      return null === t.type ? f !== p && (null != a && (a[a.indexOf(e)] = null), e.data = p) : t !== n && (null != a && (a = Ho.slice.call(e.childNodes)), u = (f = n.props || Wo).dangerouslySetInnerHTML, d = p.dangerouslySetInnerHTML, l || (d || u) && (d && u && d.__html == u.__html || (e.innerHTML = d && d.__html || "")), function (e, t, n, r, o) {
        var a;
        for (a in n) a in t || aa(e, a, null, n[a], r);
        for (a in t) o && "function" != typeof t[a] || "value" === a || "checked" === a || n[a] === t[a] || aa(e, a, t[a], n[a], r)
      }(e, p, f, o, l), t.__k = t.props.children, d || na(e, t, n, r, "foreignObject" !== t.type && o, a, i, Wo, l), l || ("value" in p && void 0 !== p.value && p.value !== e.value && (e.value = null == p.value ? "" : p.value), "checked" in p && void 0 !== p.checked && p.checked !== e.checked && (e.checked = p.checked))), e
    }
    
    function ua(e, t, n) {
      try {
        "function" == typeof e ? e(t) : e.current = t
      } catch (e) {
        No.__e(e, n)
      }
    }
    
    function da(e, t, n) {
      var r, o, a;
      if (No.unmount && No.unmount(e), (r = e.ref) && ua(r, null, t), n || "function" == typeof e.type || (n = null != (o = e.__e)), e.__e = e.l = null, null != (r = e.__c)) {
        if (r.componentWillUnmount) try {
          r.componentWillUnmount()
        } catch (e) {
          No.__e(e, t)
        }
        r.base = r.__P = null
      }
      if (r = e.__k) for (a = 0; a < r.length; a++) r[a] && da(r[a], t, n);
      null != o && qo(o)
    }
    
    function fa(e, t, n) {
      return this.constructor(e, n)
    }
    
    function pa(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    
    function ma() {
      return ma = Object.assign || function (e) {
        for (var t = arguments, n = 1; n < arguments.length; n++) {
          var r = t[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
        }
        return e
      }, ma.apply(this, arguments)
    }
    
    No = {}, Yo.prototype.setState = function (e, t) {
      var n = this.__s !== this.state && this.__s || (this.__s = Uo({}, this.state));
      ("function" != typeof e || (e = e(n, this.props))) && Uo(n, e), null != e && this.__v && (this.u = !1, t && this.__h.push(t), ea(this))
    }, Yo.prototype.forceUpdate = function (e) {
      this.__v && (e && this.__h.push(e), this.u = !0, ea(this))
    }, Yo.prototype.render = Xo, _o = [], To = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Oo = No.debounceRendering, No.__e = function (e, t, n) {
      for (var r; t = t.__p;) if ((r = t.__c) && !r.__p) try {
        if (r.constructor && null != r.constructor.getDerivedStateFromError) r.setState(r.constructor.getDerivedStateFromError(e)); else {
          if (null == r.componentDidCatch) continue;
          r.componentDidCatch(e)
        }
        return ea(r.__E = r)
      } catch (t) {
        e = t
      }
      throw e
    }, Io = Wo;
    var ha = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
      va = "[\\s|\\(]+(" + ha + ")[,|\\s]+(" + ha + ")[,|\\s]+(" + ha + ")\\s*\\)?",
      ga = "[\\s|\\(]+(" + ha + ")[,|\\s]+(" + ha + ")[,|\\s]+(" + ha + ")[,|\\s]+(" + ha + ")\\s*\\)?",
      ba = new RegExp("rgb" + va), ya = new RegExp("rgba" + ga), xa = new RegExp("hsl" + va),
      Ca = new RegExp("hsla" + ga), Ea = "^(?:#?|0x?)", wa = "([0-9a-fA-F]{1})", ka = "([0-9a-fA-F]{2})",
      Fa = new RegExp(Ea + wa + wa + wa + "$"), Sa = new RegExp(Ea + wa + wa + wa + wa + "$"),
      Aa = new RegExp(Ea + ka + ka + ka + "$"), Da = new RegExp(Ea + ka + ka + ka + ka + "$"), Za = Math.log,
      Ba = Math.round, ja = Math.floor;
    
    function Pa(e, t, n) {
      return Math.min(Math.max(e, t), n)
    }
    
    function Ra(e, t) {
      var n = e.indexOf("%") > -1, r = parseFloat(e);
      return n ? t / 100 * r : r
    }
    
    function Ma(e) {
      return parseInt(e, 16)
    }
    
    function Na(e) {
      return e.toString(16).padStart(2, "0")
    }
    
    var _a = function () {
      function e(e, t) {
        this.$ = {h: 0, s: 0, v: 0, a: 1}, e && this.set(e), this.onChange = t, this.initialValue = ma({}, this.$)
      }
      
      var t, n, r = e.prototype;
      return r.set = function (t) {
        if ("string" == typeof t) /^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t) ? this.hexString = t : /^rgba?/.test(t) ? this.rgbString = t : /^hsla?/.test(t) && (this.hslString = t); else {
          if ("object" != typeof t) throw new Error("Invalid color value");
          t instanceof e ? this.hsva = t.hsva : "r" in t && "g" in t && "b" in t ? this.rgb = t : "h" in t && "s" in t && "v" in t ? this.hsv = t : "h" in t && "s" in t && "l" in t ? this.hsl = t : "kelvin" in t && (this.kelvin = t.kelvin)
        }
      }, r.setChannel = function (e, t, n) {
        var r;
        this[e] = ma({}, this[e], ((r = {})[t] = n, r))
      }, r.reset = function () {
        this.hsva = this.initialValue
      }, r.clone = function () {
        return new e(this)
      }, r.unbind = function () {
        this.onChange = void 0
      }, e.hsvToRgb = function (e) {
        var t = e.h / 60, n = e.s / 100, r = e.v / 100, o = ja(t), a = t - o, i = r * (1 - n), l = r * (1 - a * n),
          s = r * (1 - (1 - a) * n), c = o % 6, u = [s, r, r, l, i, i][c], d = [i, i, s, r, r, l][c];
        return {r: Pa(255 * [r, l, i, i, s, r][c], 0, 255), g: Pa(255 * u, 0, 255), b: Pa(255 * d, 0, 255)}
      }, e.rgbToHsv = function (e) {
        var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.max(t, n, r), a = Math.min(t, n, r), i = o - a, l = 0,
          s = o, c = 0 === o ? 0 : i / o;
        switch (o) {
          case a:
            l = 0;
            break;
          case t:
            l = (n - r) / i + (n < r ? 6 : 0);
            break;
          case n:
            l = (r - t) / i + 2;
            break;
          case r:
            l = (t - n) / i + 4
        }
        return {h: 60 * l % 360, s: Pa(100 * c, 0, 100), v: Pa(100 * s, 0, 100)}
      }, e.hsvToHsl = function (e) {
        var t = e.s / 100, n = e.v / 100, r = (2 - t) * n, o = r <= 1 ? r : 2 - r, a = o < 1e-9 ? 0 : t * n / o;
        return {h: e.h, s: Pa(100 * a, 0, 100), l: Pa(50 * r, 0, 100)}
      }, e.hslToHsv = function (e) {
        var t = 2 * e.l, n = e.s * (t <= 100 ? t : 200 - t) / 100, r = t + n < 1e-9 ? 0 : 2 * n / (t + n);
        return {h: e.h, s: Pa(100 * r, 0, 100), v: Pa((t + n) / 2, 0, 100)}
      }, e.kelvinToRgb = function (e) {
        var t, n, r, o = e / 100;
        return o < 66 ? (t = 255, n = -155.25485562709179 - .44596950469579133 * (n = o - 2) + 104.49216199393888 * Za(n), r = o < 20 ? 0 : .8274096064007395 * (r = o - 10) - 254.76935184120902 + 115.67994401066147 * Za(r)) : (t = 351.97690566805693 + .114206453784165 * (t = o - 55) - 40.25366309332127 * Za(t), n = 325.4494125711974 + .07943456536662342 * (n = o - 50) - 28.0852963507957 * Za(n), r = 255), {
          r: Pa(ja(t), 0, 255),
          g: Pa(ja(n), 0, 255),
          b: Pa(ja(r), 0, 255)
        }
      }, e.rgbToKelvin = function (t) {
        for (var n, r = t.r, o = t.b, a = 2e3, i = 4e4; i - a > .4;) {
          n = .5 * (i + a);
          var l = e.kelvinToRgb(n);
          l.b / l.r >= o / r ? i = n : a = n
        }
        return n
      }, t = e, n = [{
        key: "hsv", get: function () {
          var e = this.$;
          return {h: e.h, s: e.s, v: e.v}
        }, set: function (e) {
          var t = this.$;
          if (e = ma({}, t, e), this.onChange) {
            var n = {h: !1, v: !1, s: !1, a: !1};
            for (var r in t) n[r] = e[r] != t[r];
            this.$ = e, (n.h || n.s || n.v || n.a) && this.onChange(this, n)
          } else this.$ = e
        }
      }, {
        key: "hsva", get: function () {
          return ma({}, this.$)
        }, set: function (e) {
          this.hsv = e
        }
      }, {
        key: "hue", get: function () {
          return this.$.h
        }, set: function (e) {
          this.hsv = {h: e}
        }
      }, {
        key: "saturation", get: function () {
          return this.$.s
        }, set: function (e) {
          this.hsv = {s: e}
        }
      }, {
        key: "value", get: function () {
          return this.$.v
        }, set: function (e) {
          this.hsv = {v: e}
        }
      }, {
        key: "alpha", get: function () {
          return this.$.a
        }, set: function (e) {
          this.hsv = ma({}, this.hsv, {a: e})
        }
      }, {
        key: "kelvin", get: function () {
          return e.rgbToKelvin(this.rgb)
        }, set: function (t) {
          this.rgb = e.kelvinToRgb(t)
        }
      }, {
        key: "red", get: function () {
          return this.rgb.r
        }, set: function (e) {
          this.rgb = ma({}, this.rgb, {r: e})
        }
      }, {
        key: "green", get: function () {
          return this.rgb.g
        }, set: function (e) {
          this.rgb = ma({}, this.rgb, {g: e})
        }
      }, {
        key: "blue", get: function () {
          return this.rgb.b
        }, set: function (e) {
          this.rgb = ma({}, this.rgb, {b: e})
        }
      }, {
        key: "rgb", get: function () {
          var t = e.hsvToRgb(this.$), n = t.r, r = t.g, o = t.b;
          return {r: Ba(n), g: Ba(r), b: Ba(o)}
        }, set: function (t) {
          this.hsv = ma({}, e.rgbToHsv(t), {a: void 0 === t.a ? 1 : t.a})
        }
      }, {
        key: "rgba", get: function () {
          return ma({}, this.rgb, {a: this.alpha})
        }, set: function (e) {
          this.rgb = e
        }
      }, {
        key: "hsl", get: function () {
          var t = e.hsvToHsl(this.$), n = t.h, r = t.s, o = t.l;
          return {h: Ba(n), s: Ba(r), l: Ba(o)}
        }, set: function (t) {
          this.hsv = ma({}, e.hslToHsv(t), {a: void 0 === t.a ? 1 : t.a})
        }
      }, {
        key: "hsla", get: function () {
          return ma({}, this.hsl, {a: this.alpha})
        }, set: function (e) {
          this.hsl = e
        }
      }, {
        key: "rgbString", get: function () {
          var e = this.rgb;
          return "rgb(" + e.r + ", " + e.g + ", " + e.b + ")"
        }, set: function (e) {
          var t, n, r, o, a = 1;
          if ((t = ba.exec(e)) ? (n = Ra(t[1], 255), r = Ra(t[2], 255), o = Ra(t[3], 255)) : (t = ya.exec(e)) && (n = Ra(t[1], 255), r = Ra(t[2], 255), o = Ra(t[3], 255), a = Ra(t[4], 1)), !t) throw new Error("Invalid rgb string");
          this.rgb = {r: n, g: r, b: o, a}
        }
      }, {
        key: "rgbaString", get: function () {
          var e = this.rgba;
          return "rgba(" + e.r + ", " + e.g + ", " + e.b + ", " + e.a + ")"
        }, set: function (e) {
          this.rgbString = e
        }
      }, {
        key: "hexString", get: function () {
          var e = this.rgb;
          return "#" + Na(e.r) + Na(e.g) + Na(e.b)
        }, set: function (e) {
          var t, n, r, o, a = 255;
          if ((t = Fa.exec(e)) ? (n = 17 * Ma(t[1]), r = 17 * Ma(t[2]), o = 17 * Ma(t[3])) : (t = Sa.exec(e)) ? (n = 17 * Ma(t[1]), r = 17 * Ma(t[2]), o = 17 * Ma(t[3]), a = 17 * Ma(t[4])) : (t = Aa.exec(e)) ? (n = Ma(t[1]), r = Ma(t[2]), o = Ma(t[3])) : (t = Da.exec(e)) && (n = Ma(t[1]), r = Ma(t[2]), o = Ma(t[3]), a = Ma(t[4])), !t) throw new Error("Invalid hex string");
          this.rgb = {r: n, g: r, b: o, a: a / 255}
        }
      }, {
        key: "hex8String", get: function () {
          var e = this.rgba;
          return "#" + Na(e.r) + Na(e.g) + Na(e.b) + Na(ja(255 * e.a))
        }, set: function (e) {
          this.hexString = e
        }
      }, {
        key: "hslString", get: function () {
          var e = this.hsl;
          return "hsl(" + e.h + ", " + e.s + "%, " + e.l + "%)"
        }, set: function (e) {
          var t, n, r, o, a = 1;
          if ((t = xa.exec(e)) ? (n = Ra(t[1], 360), r = Ra(t[2], 100), o = Ra(t[3], 100)) : (t = Ca.exec(e)) && (n = Ra(t[1], 360), r = Ra(t[2], 100), o = Ra(t[3], 100), a = Ra(t[4], 1)), !t) throw new Error("Invalid hsl string");
          this.hsl = {h: n, s: r, l: o, a}
        }
      }, {
        key: "hslaString", get: function () {
          var e = this.hsla;
          return "hsla(" + e.h + ", " + e.s + "%, " + e.l + "%, " + e.a + ")"
        }, set: function (e) {
          this.hslString = e
        }
      }], n && pa(t.prototype, n), e
    }();
    
    function Ta(e) {
      var t, n = e.width, r = e.sliderSize, o = e.borderWidth, a = e.handleRadius, i = e.padding, l = e.sliderShape,
        s = "horizontal" === e.layoutDirection;
      return r = null != (t = r) ? t : 2 * i + 2 * a, "circle" === l ? {
        handleStart: e.padding + e.handleRadius,
        handleRange: n - 2 * i - 2 * a,
        width: n,
        height: n,
        cx: n / 2,
        cy: n / 2,
        radius: n / 2 - o / 2
      } : {handleStart: r / 2, handleRange: n - r, radius: r / 2, x: 0, y: 0, width: s ? r : n, height: s ? n : r}
    }
    
    var Oa, Ia = 2 * Math.PI, za = function (e, t) {
      return Math.sqrt(e * e + t * t)
    };
    
    function La(e) {
      return e.width / 2 - e.padding - e.handleRadius - e.borderWidth
    }
    
    function $a(e) {
      var t = e.width / 2;
      return {width: e.width, radius: t - e.borderWidth, cx: t, cy: t}
    }
    
    function Wa(e, t, n) {
      var r = e.wheelAngle, o = e.wheelDirection;
      return n && "clockwise" === o ? t = r + t : "clockwise" === o ? t = 360 - r + t : n && "anticlockwise" === o ? t = r + 180 - t : "anticlockwise" === o && (t = r - t), function (e, t) {
        return (e % 360 + 360) % 360
      }(t)
    }
    
    function Ha(e, t, n) {
      var r = $a(e), o = r.cx, a = r.cy, i = La(e);
      t = o - t, n = a - n;
      var l = Wa(e, Math.atan2(-n, -t) * (360 / Ia)), s = Math.min(za(t, n), i);
      return {h: Math.round(l), s: Math.round(100 / i * s)}
    }
    
    function Va(e) {
      var t = e.width, n = e.boxHeight;
      return {width: t, height: null != n ? n : t, radius: e.padding + e.handleRadius}
    }
    
    function Ua(e, t, n) {
      var r = Va(e), o = r.width, a = r.height, i = r.radius, l = (t - i) / (o - 2 * i) * 100,
        s = (n - i) / (a - 2 * i) * 100;
      return {s: Math.max(0, Math.min(l, 100)), v: Math.max(0, Math.min(100 - s, 100))}
    }
    
    function qa(e) {
      Oa || (Oa = document.getElementsByTagName("base"));
      var t = window.navigator.userAgent, n = /^((?!chrome|android).)*safari/i.test(t), r = /iPhone|iPod|iPad/i.test(t),
        o = window.location;
      return (n || r) && Oa.length > 0 ? o.protocol + "//" + o.host + o.pathname + o.search + e : e
    }
    
    function Ka(e, t, n, r) {
      for (var o = 0; o < r.length; o++) {
        var a = r[o].x - t, i = r[o].y - n;
        if (Math.sqrt(a * a + i * i) < e.handleRadius) return o
      }
      return null
    }
    
    function Ga(e) {
      return {boxSizing: "border-box", border: e.borderWidth + "px solid " + e.borderColor}
    }
    
    function Xa(e, t, n) {
      return e + "-gradient(" + t + ", " + n.map((function (e) {
        var t = e[0];
        return e[1] + " " + t + "%"
      })).join(",") + ")"
    }
    
    function Ya(e) {
      return "string" == typeof e ? e : e + "px"
    }
    
    var Qa = ["mousemove", "touchmove", "mouseup", "touchend"], Ja = function (e) {
      function t(t) {
        e.call(this, t), this.uid = (Math.random() + 1).toString(36).substring(5)
      }
      
      return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.render = function (e) {
        var t = this.handleEvent.bind(this), n = {onMouseDown: t, ontouchstart: t},
          r = "horizontal" === e.layoutDirection, o = null === e.margin ? e.sliderMargin : e.margin,
          a = {overflow: "visible", display: r ? "inline-block" : "block"};
        return e.index > 0 && (a[r ? "marginLeft" : "marginTop"] = o), Ko(Xo, null, e.children(this.uid, n, a))
      }, t.prototype.handleEvent = function (e) {
        var t = this, n = this.props.onInput, r = this.base.getBoundingClientRect();
        e.preventDefault();
        var o = e.touches ? e.changedTouches[0] : e, a = o.clientX - r.left, i = o.clientY - r.top;
        switch (e.type) {
          case"mousedown":
          case"touchstart":
            !1 !== n(a, i, 0) && Qa.forEach((function (e) {
              document.addEventListener(e, t, {passive: !1})
            }));
            break;
          case"mousemove":
          case"touchmove":
            n(a, i, 1);
            break;
          case"mouseup":
          case"touchend":
            n(a, i, 2), Qa.forEach((function (e) {
              document.removeEventListener(e, t, {passive: !1})
            }))
        }
      }, t
    }(Yo);
    
    function ei(e) {
      var t = e.r, n = e.url, r = t, o = t;
      return Ko("svg", {
        className: "IroHandle IroHandle--" + e.index + " " + (e.isActive ? "IroHandle--isActive" : ""),
        style: {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0);",
          transform: "translate(" + Ya(e.x) + ", " + Ya(e.y) + ")",
          willChange: "transform",
          top: Ya(-t),
          left: Ya(-t),
          width: Ya(2 * t),
          height: Ya(2 * t),
          position: "absolute",
          overflow: "visible"
        }
      }, n && Ko("use", Object.assign({xlinkHref: qa(n)}, e.props)), !n && Ko("circle", {
        cx: r,
        cy: o,
        r: t,
        fill: "none",
        "stroke-width": 2,
        stroke: "#000"
      }), !n && Ko("circle", {cx: r, cy: o, r: t - 2, fill: e.fill, "stroke-width": 2, stroke: "#fff"}))
    }
    
    function ti(e) {
      var t = e.activeIndex, n = void 0 !== t && t < e.colors.length ? e.colors[t] : e.color, r = Ta(e), o = r.width,
        a = r.height, i = r.radius, l = function (e, t) {
          var n = Ta(e), r = n.width, o = n.height, a = n.handleRange, i = n.handleStart,
            l = "horizontal" === e.layoutDirection, s = function (e, t) {
              var n = t.hsva, r = t.rgb;
              switch (e.sliderType) {
                case"red":
                  return r.r / 2.55;
                case"green":
                  return r.g / 2.55;
                case"blue":
                  return r.b / 2.55;
                case"alpha":
                  return 100 * n.a;
                case"kelvin":
                  var o = e.minTemperature, a = e.maxTemperature - o, i = (t.kelvin - o) / a * 100;
                  return Math.max(0, Math.min(i, 100));
                case"hue":
                  return n.h /= 3.6;
                case"saturation":
                  return n.s;
                default:
                  return n.v
              }
            }(e, t), c = l ? r / 2 : o / 2, u = i + s / 100 * a;
          return l && (u = -1 * u + a + 2 * i), {x: l ? c : u, y: l ? u : c}
        }(e, n), s = function (e, t) {
          var n = t.hsv, r = t.rgb;
          switch (e.sliderType) {
            case"red":
              return [[0, "rgb(0," + r.g + "," + r.b + ")"], [100, "rgb(255," + r.g + "," + r.b + ")"]];
            case"green":
              return [[0, "rgb(" + r.r + ",0," + r.b + ")"], [100, "rgb(" + r.r + ",255," + r.b + ")"]];
            case"blue":
              return [[0, "rgb(" + r.r + "," + r.g + ",0)"], [100, "rgb(" + r.r + "," + r.g + ",255)"]];
            case"alpha":
              return [[0, "rgba(" + r.r + "," + r.g + "," + r.b + ",0)"], [100, "rgb(" + r.r + "," + r.g + "," + r.b + ")"]];
            case"kelvin":
              for (var o = [], a = e.minTemperature, i = e.maxTemperature, l = i - a, s = a, c = 0; s < i; s += l / 8, c += 1) {
                var u = _a.kelvinToRgb(s), d = u.r, f = u.g, p = u.b;
                o.push([12.5 * c, "rgb(" + d + "," + f + "," + p + ")"])
              }
              return o;
            case"hue":
              return [[0, "#f00"], [16.666, "#ff0"], [33.333, "#0f0"], [50, "#0ff"], [66.666, "#00f"], [83.333, "#f0f"], [100, "#f00"]];
            case"saturation":
              var m = _a.hsvToHsl({h: n.h, s: 0, v: n.v}), h = _a.hsvToHsl({h: n.h, s: 100, v: n.v});
              return [[0, "hsl(" + m.h + "," + m.s + "%," + m.l + "%)"], [100, "hsl(" + h.h + "," + h.s + "%," + h.l + "%)"]];
            default:
              var v = _a.hsvToHsl({h: n.h, s: n.s, v: 100});
              return [[0, "#000"], [100, "hsl(" + v.h + "," + v.s + "%," + v.l + "%)"]]
          }
        }(e, n);
      return Ko(Ja, Object.assign({}, e, {
        onInput: function (t, r, o) {
          var a = function (e, t, n) {
            var r, o = Ta(e), a = o.handleRange, i = o.handleStart;
            r = "horizontal" === e.layoutDirection ? -1 * n + a + i : t - i, r = Math.max(Math.min(r, a), 0);
            var l = Math.round(100 / a * r);
            switch (e.sliderType) {
              case"kelvin":
                var s = e.minTemperature;
                return s + (e.maxTemperature - s) * (l / 100);
              case"alpha":
                return l / 100;
              case"hue":
                return 3.6 * l;
              case"red":
              case"blue":
              case"green":
                return 2.55 * l;
              default:
                return l
            }
          }(e, t, r);
          e.parent.inputActive = !0, n[e.sliderType] = a, e.onInput(o, e.id)
        }
      }), (function (t, r, c) {
        return Ko("div", Object.assign({}, r, {
          className: "IroSlider",
          style: Object.assign({}, {
            position: "relative",
            width: Ya(o),
            height: Ya(a),
            borderRadius: Ya(i),
            background: "conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",
            backgroundSize: "8px 8px"
          }, c)
        }), Ko("div", {
          className: "IroSliderGradient",
          style: Object.assign({}, {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: Ya(i),
            background: Xa("linear", "horizontal" === e.layoutDirection ? "to top" : "to right", s)
          }, Ga(e))
        }), Ko(ei, {
          isActive: !0,
          index: n.index,
          r: e.handleRadius,
          url: e.handleSvg,
          props: e.handleProps,
          x: l.x,
          y: l.y
        }))
      }))
    }
    
    function ni(e) {
      var t = Va(e), n = t.width, r = t.height, o = t.radius, a = e.colors, i = e.parent, l = e.activeIndex,
        s = void 0 !== l && l < e.colors.length ? e.colors[l] : e.color,
        c = [[[0, "#fff"], [100, "hsl(" + s.hue + ",100%,50%)"]], [[0, "rgba(0,0,0,0)"], [100, "#000"]]],
        u = a.map((function (t) {
          return function (e, t) {
            var n = Va(e), r = n.width, o = n.height, a = n.radius, i = t.hsv, l = a, s = r - 2 * a, c = o - 2 * a;
            return {x: l + i.s / 100 * s, y: l + (c - i.v / 100 * c)}
          }(e, t)
        }));
      return Ko(Ja, Object.assign({}, e, {
        onInput: function (t, n, r) {
          if (0 === r) {
            var o = Ka(e, t, n, u);
            null !== o ? i.setActiveColor(o) : (i.inputActive = !0, s.hsv = Ua(e, t, n), e.onInput(r, e.id))
          } else 1 === r && (i.inputActive = !0, s.hsv = Ua(e, t, n));
          e.onInput(r, e.id)
        }
      }), (function (t, i, l) {
        return Ko("div", Object.assign({}, i, {
          className: "IroBox",
          style: Object.assign({}, {width: Ya(n), height: Ya(r), position: "relative"}, l)
        }), Ko("div", {
          className: "IroBox",
          style: Object.assign({}, {
            width: "100%",
            height: "100%",
            borderRadius: Ya(o)
          }, Ga(e), {background: Xa("linear", "to bottom", c[1]) + "," + Xa("linear", "to right", c[0])})
        }), a.filter((function (e) {
          return e !== s
        })).map((function (t) {
          return Ko(ei, {
            isActive: !1,
            index: t.index,
            fill: t.hslString,
            r: e.handleRadius,
            url: e.handleSvg,
            props: e.handleProps,
            x: u[t.index].x,
            y: u[t.index].y
          })
        })), Ko(ei, {
          isActive: !0,
          index: s.index,
          fill: s.hslString,
          r: e.activeHandleRadius || e.handleRadius,
          url: e.handleSvg,
          props: e.handleProps,
          x: u[s.index].x,
          y: u[s.index].y
        }))
      }))
    }
    
    function ri(e) {
      var t = $a(e).width, n = e.colors, r = (e.borderWidth, e.parent), o = e.color, a = o.hsv,
        i = n.map((function (t) {
          return function (e, t) {
            var n = t.hsv, r = $a(e), o = r.cx, a = r.cy, i = La(e), l = (180 + Wa(e, n.h, !0)) * (Ia / 360),
              s = n.s / 100 * i, c = "clockwise" === e.wheelDirection ? -1 : 1;
            return {x: o + s * Math.cos(l) * c, y: a + s * Math.sin(l) * c}
          }(e, t)
        })), l = {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          boxSizing: "border-box"
        };
      return Ko(Ja, Object.assign({}, e, {
        onInput: function (t, n, a) {
          if (0 === a) {
            if (!function (e, t, n) {
              var r = $a(e), o = r.cx, a = r.cy, i = e.width / 2;
              return za(o - t, a - n) < i
            }(e, t, n)) return !1;
            var l = Ka(e, t, n, i);
            null !== l ? r.setActiveColor(l) : (r.inputActive = !0, o.hsv = Ha(e, t, n), e.onInput(a, e.id))
          } else 1 === a && (r.inputActive = !0, o.hsv = Ha(e, t, n));
          e.onInput(a, e.id)
        }
      }), (function (r, s, c) {
        return Ko("div", Object.assign({}, s, {
          className: "IroWheel",
          style: Object.assign({}, {width: Ya(t), height: Ya(t), position: "relative"}, c)
        }), Ko("div", {
          className: "IroWheelHue",
          style: Object.assign({}, l, {
            transform: "rotateZ(" + (e.wheelAngle + 90) + "deg)",
            background: "clockwise" === e.wheelDirection ? "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)" : "conic-gradient(red, magenta, blue, aqua, lime, yellow, red)"
          })
        }), Ko("div", {
          className: "IroWheelSaturation",
          style: Object.assign({}, l, {background: "radial-gradient(circle closest-side, #fff, transparent)"})
        }), e.wheelLightness && Ko("div", {
          className: "IroWheelLightness",
          style: Object.assign({}, l, {background: "#000", opacity: 1 - a.v / 100})
        }), Ko("div", {className: "IroWheelBorder", style: Object.assign({}, l, Ga(e))}), n.filter((function (e) {
          return e !== o
        })).map((function (t) {
          return Ko(ei, {
            isActive: !1,
            index: t.index,
            fill: t.hslString,
            r: e.handleRadius,
            url: e.handleSvg,
            props: e.handleProps,
            x: i[t.index].x,
            y: i[t.index].y
          })
        })), Ko(ei, {
          isActive: !0,
          index: o.index,
          fill: o.hslString,
          r: e.activeHandleRadius || e.handleRadius,
          url: e.handleSvg,
          props: e.handleProps,
          x: i[o.index].x,
          y: i[o.index].y
        }))
      }))
    }
    
    ei.defaultProps = {
      fill: "none",
      x: 0,
      y: 0,
      r: 8,
      url: null,
      props: {x: 0, y: 0}
    }, ti.defaultProps = Object.assign({}, {
      sliderShape: "bar",
      sliderType: "value",
      minTemperature: 2200,
      maxTemperature: 11e3
    });
    var oi = function (e) {
      function t(t) {
        var n = this;
        e.call(this, t), this.colors = [], this.inputActive = !1, this.events = {}, this.activeEvents = {}, this.deferredEvents = {}, this.id = t.id, (t.colors.length > 0 ? t.colors : [t.color]).forEach((function (e) {
          return n.addColor(e)
        })), this.setActiveColor(0), this.state = Object.assign({}, t, {
          color: this.color,
          colors: this.colors,
          layout: t.layout
        })
      }
      
      return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.addColor = function (e, t) {
        void 0 === t && (t = this.colors.length);
        var n = new _a(e, this.onColorChange.bind(this));
        this.colors.splice(t, 0, n), this.colors.forEach((function (e, t) {
          return e.index = t
        })), this.state && this.setState({colors: this.colors}), this.deferredEmit("color:init", n)
      }, t.prototype.removeColor = function (e) {
        var t = this.colors.splice(e, 1)[0];
        t.unbind(), this.colors.forEach((function (e, t) {
          return e.index = t
        })), this.state && this.setState({colors: this.colors}), t.index === this.color.index && this.setActiveColor(0), this.emit("color:remove", t)
      }, t.prototype.setActiveColor = function (e) {
        this.color = this.colors[e], this.state && this.setState({color: this.color}), this.emit("color:setActive", this.color)
      }, t.prototype.setColors = function (e, t) {
        var n = this;
        void 0 === t && (t = 0), this.colors.forEach((function (e) {
          return e.unbind()
        })), this.colors = [], e.forEach((function (e) {
          return n.addColor(e)
        })), this.setActiveColor(t), this.emit("color:setAll", this.colors)
      }, t.prototype.on = function (e, t) {
        var n = this, r = this.events;
        (Array.isArray(e) ? e : [e]).forEach((function (e) {
          (r[e] || (r[e] = [])).push(t), n.deferredEvents[e] && (n.deferredEvents[e].forEach((function (e) {
            t.apply(null, e)
          })), n.deferredEvents[e] = [])
        }))
      }, t.prototype.off = function (e, t) {
        var n = this;
        (Array.isArray(e) ? e : [e]).forEach((function (e) {
          var r = n.events[e];
          r && r.splice(r.indexOf(t), 1)
        }))
      }, t.prototype.emit = function (e) {
        for (var t = this, n = [], r = arguments.length - 1; r-- > 0;) n[r] = arguments[r + 1];
        var o = this.activeEvents, a = !!o.hasOwnProperty(e) && o[e];
        if (!a) {
          o[e] = !0;
          var i = this.events[e] || [];
          i.forEach((function (e) {
            return e.apply(t, n)
          })), o[e] = !1
        }
      }, t.prototype.deferredEmit = function (e) {
        for (var t, n = [], r = arguments.length - 1; r-- > 0;) n[r] = arguments[r + 1];
        var o = this.deferredEvents;
        (t = this).emit.apply(t, [e].concat(n)), (o[e] || (o[e] = [])).push(n)
      }, t.prototype.setOptions = function (e) {
        this.setState(e)
      }, t.prototype.resize = function (e) {
        this.setOptions({width: e})
      }, t.prototype.reset = function () {
        this.colors.forEach((function (e) {
          return e.reset()
        })), this.setState({colors: this.colors})
      }, t.prototype.onMount = function (e) {
        this.el = e, this.deferredEmit("mount", this)
      }, t.prototype.onColorChange = function (e, t) {
        this.setState({color: this.color}), this.inputActive && (this.inputActive = !1, this.emit("input:change", e, t)), this.emit("color:change", e, t)
      }, t.prototype.emitInputEvent = function (e, t) {
        0 === e ? this.emit("input:start", this.color, t) : 1 === e ? this.emit("input:move", this.color, t) : 2 === e && this.emit("input:end", this.color, t)
      }, t.prototype.render = function (e, t) {
        var n = this, r = t.layout;
        return Array.isArray(r) || (r = [{component: ri}, {component: ti}], t.transparency && r.push({
          component: ti,
          options: {sliderType: "alpha"}
        })), Ko("div", {class: "IroColorPicker", id: t.id, style: {display: t.display}}, r.map((function (e, r) {
          var o = e.component, a = e.options;
          return Ko(o, Object.assign({}, t, a, {ref: void 0, onInput: n.emitInputEvent.bind(n), parent: n, index: r}))
        })))
      }, t
    }(Yo);
    oi.defaultProps = Object.assign({}, {
      width: 300,
      height: 300,
      color: "#fff",
      colors: [],
      padding: 6,
      layoutDirection: "vertical",
      borderColor: "#fff",
      borderWidth: 0,
      handleRadius: 8,
      activeHandleRadius: null,
      handleSvg: null,
      handleProps: {x: 0, y: 0},
      wheelLightness: !0,
      wheelAngle: 0,
      wheelDirection: "anticlockwise",
      sliderSize: null,
      sliderMargin: 12,
      boxHeight: null
    }, {colors: [], display: "block", id: null, layout: "default", margin: null});
    var ai, ii, li, si = (ii = function (e, t) {
      var n, r = document.createElement("div");
      
      function o() {
        var t = e instanceof Element ? e : document.querySelector(e);
        t.appendChild(n.base), n.onMount(t)
      }
      
      return function (e, t, n) {
        var r, o, a;
        No.__p && No.__p(e, t), o = (r = n === Io) ? null : t.__k, e = Ko(Xo, null, [e]), a = [], la(t, t.__k = e, o || Wo, Wo, void 0 !== t.ownerSVGElement, o ? null : Ho.slice.call(t.childNodes), a, !1, Wo, r), sa(a, e)
      }(Ko(ai, Object.assign({}, {
        ref: function (e) {
          return n = e
        }
      }, t)), r), "loading" !== document.readyState ? o() : document.addEventListener("DOMContentLoaded", o), n
    }, ii.prototype = (ai = oi).prototype, Object.assign(ii, ai), ii.__component = ai, ii);
    !function (e) {
      var t;
      e.version = "5.5.2", e.Color = _a, e.ColorPicker = si, (t = e.ui || (e.ui = {})).h = Ko, t.ComponentBase = Ja, t.Handle = ei, t.Slider = ti, t.Wheel = ri, t.Box = ni
    }(li || (li = {}));
    const ci = li;
    
    class ui extends e.PureComponent {
      componentDidMount() {
        this.colorPicker = new ci.ColorPicker("#picker", {
          width: 280,
          borderWidth: 1,
          handleSvg: "#handle",
          colors: this.props.colors.map((e => "hsl(" + e.hsl + ")")),
          layout: [{
            component: ci.ui.Wheel,
            options: {wheelDirection: "clockwise", wheelAngle: -90}
          }, {component: ci.ui.Slider, options: {sliderType: "saturation"}}, {component: ci.ui.Slider}]
        }), this.colorPicker.on("color:change", this.props.onChange), this.colorPicker.on("color:setActive", this.props.onSetActive), this.colorPicker.setActiveColor(this.props.activeIndex)
      }
      
      componentDidUpdate(e) {
        e.colors !== this.props.colors && (this.colorPicker.setColors(this.props.colors.map((e => "hsl(" + e.hsl + ")"))), this.colorPicker.setActiveColor(this.props.activeIndex))
      }
      
      render() {
        return e.createElement(e.Fragment, null, e.createElement("svg", {style: {display: "none"}}, e.createElement("defs", null, e.createElement("g", {id: "handle"}, e.createElement("circle", {
          cx: "8",
          cy: "8",
          r: "8",
          fill: "none",
          strokeWidth: "1",
          stroke: "#fff"
        })))), e.createElement("div", {id: "picker"}))
      }
    }
    
    var di = o(6639), fi = {};
    
    function pi(e, t) {
      if ("hex" === e) return /^[0-9a-fA-F]{6}$/.test(t) ? ko()("#" + t) : null;
      if ("rgb" === e) {
        if (/((?:(?:25[0-5]|2[0-4]\d|1?\d{1,2})(?:, *| +)){2}(?:25[0-5]|2[0-4]\d|1?\d{1,2}))/.test(t)) {
          const e = RegExp.$1.split(/, *| +/).map((e => parseInt(e.trim())));
          return ko().rgb.apply(null, e)
        }
        return null
      }
      if ("cmyk" === e) {
        if (/((?:(?:100|\d{1,2})%?, ?){3}(?:100|\d{1,2})%?|(?:(?:1|0|0\.\d{1,2}), ?){3}(?:1|0|0\.\d{1,2}))/.test(t)) {
          const e = RegExp.$1.replace(/%/g, "").split(",").map((e => parseFloat(e.trim()))).map((e => e > 1 ? e / 100 : e));
          return ko().cmyk.apply(null, e)
        }
        return null
      }
      if ("hsl" === e || "hsi" === e || "hsv" === e) {
        if (/((?:360|((?:3[0-5]\d|[1-2]\d{2}|\d{1,2})(?:\.\d{1,15})?))(?:deg)?(?:, *| +)(?:100|\d{1,2}(?:\.\d{1,15})?)%?(?:, *| +)(?:100|\d{1,2}(?:\.\d{1,15})?)%?)/.test(t)) {
          const t = RegExp.$1.replace(/[^\d., ]/g, "").split(/, *| +/).map((e => parseFloat(e.trim())));
          return t[1] > 1 && (t[1] = t[1] / 100), t[2] > 1 && (t[2] = t[2] / 100), ko()[e](t[0], t[1], t[2])
        }
        return null
      }
      if ("lab" === e) {
        if (/((?:100|\d{1,2}(?:\.\d{1,15})?)(?:(?:, *| +)-?(?:100|\d{1,2}(?:\.\d{1,15})?)){2})/.test(t)) {
          const e = RegExp.$1.split(/, *| +/).map((e => parseFloat(e)));
          return ko().lab.apply(null, e)
        }
        return null
      }
      return null
    }
    
    function mi(e) {
      if (!e || e.length < 4) return null;
      let t;
      return /^(?:#[a-f0-9]{3}|#?[a-f0-9]{6}|#[a-f0-9]{8});?$/i.test(e) ? (t = "hex", 3 === (e = e.replace(/[^0-9a-fA-F]/gi, "")).length ? e += e : 8 === e.length && (e = e.substr(2))) : t = /^(?:(?:25[0-5]|2[0-4]\d|1?\d{1,2})(?:, *| +)){2}(?:25[0-5]|2[0-4]\d|1?\d{1,2})$/.test(e) ? "rgb" : e.substr(0, 3).toLowerCase(), pi(t, e)
    }
    
    function hi(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
    
    fi.styleTagTransform = h(), fi.setAttributes = d(), fi.insert = c().bind(null, "head"), fi.domAPI = l(), fi.insertStyleElement = p(), r()(di.Z, fi), di.Z && di.Z.locals && di.Z.locals;
    const vi = e => e >= 0 ? Math.round(100 * (e > 360 ? e - 360 : e)) / 100 + ", " : Math.round(100 * (360 + e)) / 100 + ", ";
    let gi;
    
    class bi extends e.Component {
      constructor(e) {
        let t;
        if (super(e), hi(this, "setNewColor", (e => {
          const t = [...this.state.colors, e];
          t.length > 8 && t.shift(), this.setState({colors: t, activeIndex: t.length - 1})
        })), hi(this, "convertStateColor", (e => {
          this._currentChromaColor = e;
          const t = e.hex(), n = e.rgb().join(", "), r = e.hsl(), o = isNaN(r[0]) ? 0 : r[0],
            a = Math.round(1e4 * r[1]) / 100 + "%, " + Math.round(1e4 * r[2]) / 100 + "%", i = vi(o) + a;
          let l = e.hsv();
          l = (isNaN(l[0]) ? 0 : Math.round(100 * l[0]) / 100) + ", " + Math.round(1e4 * l[1]) / 100 + "%, " + Math.round(1e4 * l[2]) / 100 + "%";
          let s = e.hsi();
          s = (isNaN(s[0]) ? 0 : Math.round(100 * s[0]) / 100) + ", " + Math.round(1e4 * s[1]) / 100 + "%, " + Math.round(1e4 * s[2]) / 100 + "%";
          const c = ["hsl(" + vi(o + 180) + a + ")"],
            u = ["hsl(" + vi(o - 30) + a + ")", "hsl(" + vi(o + 30) + a + ")"],
            d = ["hsl(" + vi(o + 120) + a + ")", "hsl(" + vi(o + 240) + a + ")"],
            f = ["hsl(" + vi(o + 90) + a + ")", "hsl(" + vi(o + 180) + a + ")", "hsl(" + vi(o + 270) + a + ")"];
          return {
            hex: t,
            rgb: n,
            hsl: i,
            cmyk: e.cmyk().map((e => Math.round(100 * e) + "%")).join(", "),
            hsv: l,
            hsi: s,
            lab: e.lab().map((e => Math.round(1e3 * e) / 1e3 || 0)).join(", "),
            hslExtend: {complementary: c, analogous: u, triadic: d, tetradic: f}
          }
        })), hi(this, "handleScreenColorPicker", (() => {
          window.ztools.screenColorPick((({hex: e, rgb: t}) => {
            this.setNewColor(this.convertStateColor(ko()(e)))
          }))
        })), hi(this, "handleColorHubNew", (() => {
          this.setNewColor(this.convertStateColor(ko().random()))
        })), hi(this, "handleColorSelect", (e => {
          const t = [...e.currentTarget.parentNode.childNodes].indexOf(e.currentTarget);
          t !== this.state.activeIndex && this.setState({colors: [...this.state.colors], activeIndex: t})
        })), hi(this, "handleCssCodeCopy", (e => () => {
          const t = this.state.colors[this.state.activeIndex];
          let n;
          if (this.props.setting) if ("hex" === e) n = t.hex.substr(1); else if ("rgb" === e) n = t.rgb; else if ("cmyk" === e) n = t.cmyk; else if (["hsl", "hsi", "hsv"].includes(e)) n = t[e]; else {
            if ("lab" !== e) return;
            n = t.lab
          } else if ("hex" === e) n = t.hex; else if ("rgb" === e) n = "rgb(" + t.rgb + ")"; else if ("cmyk" === e) n = "cmyk(" + t.cmyk + ")"; else if (["hsl", "hsi", "hsv"].includes(e)) n = e + "(" + t[e] + ")"; else {
            if ("lab" !== e) return;
            n = "lab(" + t.lab + ")"
          }
          window.ztools.copyText(n)
        })), hi(this, "handleValueChange", (e => t => {
          const n = t.target.value, r = pi(e, n), {colors: o, activeIndex: a} = this.state;
          r ? o[a] = this.convertStateColor(r) : o[a][e + "Input"] = n, this.forceUpdate()
        })), hi(this, "handleColorWheelSetActive", (e => {
          this.setState({activeIndex: e.index})
        })), hi(this, "handleColorWheelChnage", (e => {
          const t = this.convertStateColor(ko().hsv(e.hsv.h, e.hsv.s / 100, e.hsv.v / 100));
          this.state.colors[e.index] = t, this.forceUpdate()
        })), e.value?.[0]) {
          const n = mi(e.value[0]);
          e.value[0] = null, n && (t = this.convertStateColor(n))
        }
        if (gi) return t && (gi.colors.push(t), gi.colors.length > 8 && gi.colors.shift(), gi.activeIndex = gi.colors.length - 1), void (this.state = gi);
        t || (t = this.convertStateColor(ko().random())), this.state = {colors: [t], activeIndex: 0}
      }
      
      componentWillUnmount() {
        gi = this.state
      }
      
      componentDidUpdate(e) {
        if (e.value !== this.props.value) {
          const e = mi(this.props.value?.[0]);
          e && (this.props.value[0] = null, this.setNewColor(this.convertStateColor(e)))
        }
      }
      
      render() {
        const {colors: t, activeIndex: n} = this.state, {setting: r, onColorClick: o} = this.props, a = t[n];
        return e.createElement("div", {
          className: "color-content",
          style: {backgroundColor: a.hex}
        }, e.createElement("div", {className: "color-info"}, e.createElement("div", null, e.createElement(Hr, {
          placement: "right",
          title: "屏幕取色"
        }, e.createElement(Mo, {
          disableFocusRipple: !0,
          tabIndex: -1,
          size: "small",
          onClick: this.handleScreenColorPicker,
          className: "color-screen-picker"
        }, e.createElement(zo.Z, null))), e.createElement(ui, {
          colors: t,
          activeIndex: n,
          onChange: this.handleColorWheelChnage,
          onSetActive: this.handleColorWheelSetActive
        })), e.createElement(jt, {className: "color-value"}, e.createElement("div", {className: "color-hub"}, e.createElement("div", null, t.map(((t, r) => e.createElement("span", {
          onClick: this.handleColorSelect,
          key: r,
          className: r === n ? "color-checked" : "",
          style: {backgroundColor: t.hex}
        })))), e.createElement(Hr, {placement: "left", title: "增加颜色"}, e.createElement(Zo, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.handleColorHubNew,
          color: "primary",
          size: "small"
        }, e.createElement($o.Z, null)))), e.createElement("div", null, e.createElement("div", null, "HEX"), e.createElement("div", null, e.createElement("input", {
          type: "text",
          value: "string" == typeof a.hexInput ? a.hexInput : a.hex.replace("#", ""),
          onChange: this.handleValueChange("hex")
        })), e.createElement("div", {className: "css-code-copy"}, e.createElement(Hr, {
          placement: "right",
          title: '复制 "' + (r ? a.hex.substr(1) : a.hex) + '"'
        }, e.createElement(Zo, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.handleCssCodeCopy("hex"),
          size: "small"
        }, e.createElement(Lo.Z, null))))), e.createElement("div", null, e.createElement("div", null, "RGB"), e.createElement("div", null, e.createElement("input", {
          type: "text",
          value: "string" == typeof a.rgbInput ? a.rgbInput : a.rgb,
          onChange: this.handleValueChange("rgb")
        })), e.createElement("div", {className: "css-code-copy"}, e.createElement(Hr, {
          placement: "right",
          title: '复制 "' + (r ? a.rgb : "rgb(" + a.rgb + ")") + '"'
        }, e.createElement(Zo, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.handleCssCodeCopy("rgb"),
          size: "small"
        }, e.createElement(Lo.Z, null))))), e.createElement("div", null, e.createElement("div", null, "HSV/HSB"), e.createElement("div", null, e.createElement("input", {
          type: "text",
          value: "string" == typeof a.hsvInput ? a.hsvInput : a.hsv,
          onChange: this.handleValueChange("hsv")
        })), e.createElement("div", {className: "css-code-copy"}, e.createElement(Hr, {
          placement: "right",
          title: '复制 "' + (r ? a.hsv : "hsv(" + a.hsv + ")") + '"'
        }, e.createElement(Zo, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.handleCssCodeCopy("hsv"),
          size: "small"
        }, e.createElement(Lo.Z, null))))), e.createElement("div", null, e.createElement("div", null, "HSL"), e.createElement("div", null, e.createElement("input", {
          type: "text",
          value: "string" == typeof a.hslInput ? a.hslInput : a.hsl,
          onChange: this.handleValueChange("hsl")
        })), e.createElement("div", {className: "css-code-copy"}, e.createElement(Hr, {
          placement: "right",
          title: '复制 "' + (r ? a.hsl : "hsl(" + a.hsl + ")") + '"'
        }, e.createElement(Zo, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.handleCssCodeCopy("hsl"),
          size: "small"
        }, e.createElement(Lo.Z, null))))), e.createElement("div", null, e.createElement("div", null, "CMYK"), e.createElement("div", null, e.createElement("input", {
          type: "text",
          value: "string" == typeof a.cmykInput ? a.cmykInput : a.cmyk,
          onChange: this.handleValueChange("cmyk")
        })), e.createElement("div", {className: "css-code-copy"}, e.createElement(Hr, {
          placement: "right",
          title: '复制 "' + (r ? a.cmyk : "cmyk(" + a.cmyk + ")") + '"'
        }, e.createElement(Zo, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.handleCssCodeCopy("cmyk"),
          size: "small"
        }, e.createElement(Lo.Z, null))))), e.createElement("div", null, e.createElement("div", null, "HSI"), e.createElement("div", null, e.createElement("input", {
          type: "text",
          value: "string" == typeof a.hsiInput ? a.hsiInput : a.hsi,
          onChange: this.handleValueChange("hsi")
        })), e.createElement("div", {className: "css-code-copy"}, e.createElement(Hr, {
          placement: "right",
          title: '复制 "' + (r ? a.hsi : "hsi(" + a.hsi + ")") + '"'
        }, e.createElement(Zo, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.handleCssCodeCopy("hsi"),
          size: "small"
        }, e.createElement(Lo.Z, null))))), e.createElement("div", null, e.createElement("div", null, "CIE-LAB"), e.createElement("div", null, e.createElement("input", {
          type: "text",
          value: "string" == typeof a.labInput ? a.labInput : a.lab,
          onChange: this.handleValueChange("lab")
        })), e.createElement("div", {className: "css-code-copy"}, e.createElement(Hr, {
          placement: "right",
          title: '复制 "' + (r ? a.lab : "lab(" + a.lab + ")") + '"'
        }, e.createElement(Zo, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.handleCssCodeCopy("lab"),
          size: "small"
        }, e.createElement(Lo.Z, null))))))), e.createElement("div", {className: "color-extend"}, e.createElement("div", {
          style: {width: "11%"},
          className: "color-extend-paper"
        }, e.createElement(Hr, {title: "互补色"}, e.createElement("div", null, e.createElement("div", {
          onClick: o,
          style: {backgroundColor: a.hslExtend.complementary[0]}
        })))), e.createElement("div", {
          style: {width: "22%"},
          className: "color-extend-paper"
        }, e.createElement(Hr, {title: "类似色"}, e.createElement("div", null, e.createElement("div", {
          onClick: o,
          style: {backgroundColor: a.hslExtend.analogous[0]}
        }), e.createElement("div", {
          onClick: o,
          style: {backgroundColor: a.hslExtend.analogous[1]}
        })))), e.createElement("div", {
          style: {width: "22%"},
          className: "color-extend-paper"
        }, e.createElement(Hr, {title: "对比色"}, e.createElement("div", null, e.createElement("div", {
          onClick: o,
          style: {backgroundColor: a.hslExtend.triadic[0]}
        }), e.createElement("div", {
          onClick: o,
          style: {backgroundColor: a.hslExtend.triadic[1]}
        })))), e.createElement("div", {
          style: {width: "33%"},
          className: "color-extend-paper"
        }, e.createElement(Hr, {title: "中差色"}, e.createElement("div", null, e.createElement("div", {
          onClick: o,
          style: {backgroundColor: a.hslExtend.tetradic[0]}
        }), e.createElement("div", {
          onClick: o,
          style: {backgroundColor: a.hslExtend.tetradic[1]}
        }), e.createElement("div", {onClick: o, style: {backgroundColor: a.hslExtend.tetradic[2]}}))))))
      }
    }
    
    o(9864);
    var yi = o(7144);
    let xi;
    
    function Ci() {
      if (xi) return xi;
      const e = document.createElement("div"), t = document.createElement("div");
      return t.style.width = "10px", t.style.height = "1px", e.appendChild(t), e.dir = "rtl", e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), xi = "reverse", e.scrollLeft > 0 ? xi = "default" : (e.scrollLeft = 1, 0 === e.scrollLeft && (xi = "negative")), document.body.removeChild(e), xi
    }
    
    function Ei(e, t) {
      const n = e.scrollLeft;
      if ("rtl" !== t) return n;
      switch (Ci()) {
        case"negative":
          return e.scrollWidth - e.clientWidth + n;
        case"reverse":
          return e.scrollWidth - e.clientWidth - n;
        default:
          return n
      }
    }
    
    function wi(e) {
      return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2
    }
    
    var ki = o(5340);
    const Fi = ["onChange"], Si = {width: 99, height: 99, position: "absolute", top: -9999, overflow: "scroll"},
      Ai = (0, ao.Z)((0, D.jsx)("path", {d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}), "KeyboardArrowLeft"),
      Di = (0, ao.Z)((0, D.jsx)("path", {d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}), "KeyboardArrowRight");
    
    function Zi(e) {
      return (0, S.Z)("MuiTabScrollButton", e)
    }
    
    const Bi = (0, F.Z)("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]);
    var ji, Pi;
    const Ri = ["className", "direction", "orientation", "disabled"], Mi = (0, E.ZP)(ge, {
      name: "MuiTabScrollButton", slot: "Root", overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, n.orientation && t[n.orientation]]
      }
    })((({ownerState: e}) => (0, y.Z)({
      width: 40,
      flexShrink: 0,
      opacity: .8,
      [`&.${Bi.disabled}`]: {opacity: 0}
    }, "vertical" === e.orientation && {
      width: "100%",
      height: 40,
      "& svg": {transform: `rotate(${e.isRtl ? -90 : 90}deg)`}
    }))), Ni = e.forwardRef((function (e, t) {
      const n = (0, w.Z)({props: e, name: "MuiTabScrollButton"}), {className: r, direction: o} = n, a = (0, b.Z)(n, Ri),
        i = "rtl" === ct().direction, l = (0, y.Z)({isRtl: i}, n), s = (e => {
          const {classes: t, orientation: n, disabled: r} = e, o = {root: ["root", n, r && "disabled"]};
          return (0, C.Z)(o, Zi, t)
        })(l);
      return (0, D.jsx)(Mi, (0, y.Z)({
        component: "div",
        className: (0, x.Z)(s.root, r),
        ref: t,
        role: null,
        ownerState: l,
        tabIndex: null
      }, a, {children: "left" === o ? ji || (ji = (0, D.jsx)(Ai, {fontSize: "small"})) : Pi || (Pi = (0, D.jsx)(Di, {fontSize: "small"}))}))
    }));
    
    function _i(e) {
      return (0, S.Z)("MuiTabs", e)
    }
    
    const Ti = (0, F.Z)("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]);
    var Oi = o(8038);
    const Ii = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"],
      zi = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild,
      Li = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild,
      $i = (e, t, n) => {
        let r = !1, o = n(e, t);
        for (; o;) {
          if (o === e.firstChild) {
            if (r) return;
            r = !0
          }
          const t = o.disabled || "true" === o.getAttribute("aria-disabled");
          if (o.hasAttribute("tabindex") && !t) return void o.focus();
          o = n(e, o)
        }
      }, Wi = (0, E.ZP)("div", {
        name: "MuiTabs", slot: "Root", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [{[`& .${Ti.scrollButtons}`]: t.scrollButtons}, {[`& .${Ti.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile}, t.root, n.vertical && t.vertical]
        }
      })((({ownerState: e, theme: t}) => (0, y.Z)({
        overflow: "hidden",
        minHeight: 48,
        WebkitOverflowScrolling: "touch",
        display: "flex"
      }, e.vertical && {flexDirection: "column"}, e.scrollButtonsHideMobile && {[`& .${Ti.scrollButtons}`]: {[t.breakpoints.down("sm")]: {display: "none"}}}))),
      Hi = (0, E.ZP)("div", {
        name: "MuiTabs", slot: "Scroller", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.scroller, n.fixed && t.fixed, n.hideScrollbar && t.hideScrollbar, n.scrollableX && t.scrollableX, n.scrollableY && t.scrollableY]
        }
      })((({ownerState: e}) => (0, y.Z)({
        position: "relative",
        display: "inline-block",
        flex: "1 1 auto",
        whiteSpace: "nowrap"
      }, e.fixed && {overflowX: "hidden", width: "100%"}, e.hideScrollbar && {
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {display: "none"}
      }, e.scrollableX && {overflowX: "auto", overflowY: "hidden"}, e.scrollableY && {
        overflowY: "auto",
        overflowX: "hidden"
      }))), Vi = (0, E.ZP)("div", {
        name: "MuiTabs", slot: "FlexContainer", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.flexContainer, n.vertical && t.flexContainerVertical, n.centered && t.centered]
        }
      })((({ownerState: e}) => (0, y.Z)({display: "flex"}, e.vertical && {flexDirection: "column"}, e.centered && {justifyContent: "center"}))),
      Ui = (0, E.ZP)("span", {
        name: "MuiTabs",
        slot: "Indicator",
        overridesResolver: (e, t) => t.indicator
      })((({ownerState: e, theme: t}) => (0, y.Z)({
        position: "absolute",
        height: 2,
        bottom: 0,
        width: "100%",
        transition: t.transitions.create()
      }, "primary" === e.indicatorColor && {backgroundColor: (t.vars || t).palette.primary.main}, "secondary" === e.indicatorColor && {backgroundColor: (t.vars || t).palette.secondary.main}, e.vertical && {
        height: "100%",
        width: 2,
        right: 0
      }))), qi = (0, E.ZP)((function (t) {
        const {onChange: n} = t, r = (0, b.Z)(t, Fi), o = e.useRef(), a = e.useRef(null), i = () => {
          o.current = a.current.offsetHeight - a.current.clientHeight
        };
        return e.useEffect((() => {
          const e = (0, yi.Z)((() => {
            const e = o.current;
            i(), e !== o.current && n(o.current)
          })), t = (0, ki.Z)(a.current);
          return t.addEventListener("resize", e), () => {
            e.clear(), t.removeEventListener("resize", e)
          }
        }), [n]), e.useEffect((() => {
          i(), n(o.current)
        }), [n]), (0, D.jsx)("div", (0, y.Z)({style: Si, ref: a}, r))
      }), {name: "MuiTabs", slot: "ScrollbarSize"})({
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {display: "none"}
      }), Ki = {}, Gi = e.forwardRef((function (t, n) {
        const r = (0, w.Z)({props: t, name: "MuiTabs"}), o = ct(), a = "rtl" === o.direction, {
            "aria-label": i,
            "aria-labelledby": l,
            action: s,
            centered: c = !1,
            children: u,
            className: d,
            component: f = "div",
            allowScrollButtonsMobile: p = !1,
            indicatorColor: m = "primary",
            onChange: h,
            orientation: v = "horizontal",
            ScrollButtonComponent: g = Ni,
            scrollButtons: E = "auto",
            selectionFollowsFocus: k,
            TabIndicatorProps: F = {},
            TabScrollButtonProps: S = {},
            textColor: A = "primary",
            value: Z,
            variant: B = "standard",
            visibleScrollbar: j = !1
          } = r, P = (0, b.Z)(r, Ii), R = "scrollable" === B, M = "vertical" === v, _ = M ? "scrollTop" : "scrollLeft",
          T = M ? "top" : "left", O = M ? "bottom" : "right", I = M ? "clientHeight" : "clientWidth",
          z = M ? "height" : "width", L = (0, y.Z)({}, r, {
            component: f,
            allowScrollButtonsMobile: p,
            indicatorColor: m,
            orientation: v,
            vertical: M,
            scrollButtons: E,
            textColor: A,
            variant: B,
            visibleScrollbar: j,
            fixed: !R,
            hideScrollbar: R && !j,
            scrollableX: R && !M,
            scrollableY: R && M,
            centered: c && !R,
            scrollButtonsHideMobile: !p
          }), $ = (e => {
            const {
              vertical: t,
              fixed: n,
              hideScrollbar: r,
              scrollableX: o,
              scrollableY: a,
              centered: i,
              scrollButtonsHideMobile: l,
              classes: s
            } = e, c = {
              root: ["root", t && "vertical"],
              scroller: ["scroller", n && "fixed", r && "hideScrollbar", o && "scrollableX", a && "scrollableY"],
              flexContainer: ["flexContainer", t && "flexContainerVertical", i && "centered"],
              indicator: ["indicator"],
              scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"],
              scrollableX: [o && "scrollableX"],
              hideScrollbar: [r && "hideScrollbar"]
            };
            return (0, C.Z)(c, _i, s)
          })(L), [W, H] = e.useState(!1), [V, U] = e.useState(Ki), [q, K] = e.useState({
            start: !1,
            end: !1
          }), [G, X] = e.useState({overflow: "hidden", scrollbarWidth: 0}), Y = new Map, Q = e.useRef(null),
          J = e.useRef(null), ee = () => {
            const e = Q.current;
            let t, n;
            if (e) {
              const n = e.getBoundingClientRect();
              t = {
                clientWidth: e.clientWidth,
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop,
                scrollLeftNormalized: Ei(e, o.direction),
                scrollWidth: e.scrollWidth,
                top: n.top,
                bottom: n.bottom,
                left: n.left,
                right: n.right
              }
            }
            if (e && !1 !== Z) {
              const e = J.current.children;
              if (e.length > 0) {
                const t = e[Y.get(Z)];
                n = t ? t.getBoundingClientRect() : null
              }
            }
            return {tabsMeta: t, tabMeta: n}
          }, te = (0, N.Z)((() => {
            const {tabsMeta: e, tabMeta: t} = ee();
            let n, r = 0;
            if (M) n = "top", t && e && (r = t.top - e.top + e.scrollTop); else if (n = a ? "right" : "left", t && e) {
              const o = a ? e.scrollLeftNormalized + e.clientWidth - e.scrollWidth : e.scrollLeft;
              r = (a ? -1 : 1) * (t[n] - e[n] + o)
            }
            const o = {[n]: r, [z]: t ? t[z] : 0};
            if (isNaN(V[n]) || isNaN(V[z])) U(o); else {
              const e = Math.abs(V[n] - o[n]), t = Math.abs(V[z] - o[z]);
              (e >= 1 || t >= 1) && U(o)
            }
          })), ne = (e, {animation: t = !0} = {}) => {
            t ? function (e, t, n, r = {}, o = (() => {
            })) {
              const {ease: a = wi, duration: i = 300} = r;
              let l = null;
              const s = t[e];
              let c = !1;
              const u = r => {
                if (c) return void o(new Error("Animation cancelled"));
                null === l && (l = r);
                const d = Math.min(1, (r - l) / i);
                t[e] = a(d) * (n - s) + s, d >= 1 ? requestAnimationFrame((() => {
                  o(null)
                })) : requestAnimationFrame(u)
              };
              s === n ? o(new Error("Element already at target position")) : requestAnimationFrame(u)
            }(_, Q.current, e, {duration: o.transitions.duration.standard}) : Q.current[_] = e
          }, re = e => {
            let t = Q.current[_];
            M ? t += e : (t += e * (a ? -1 : 1), t *= a && "reverse" === Ci() ? -1 : 1), ne(t)
          }, oe = () => {
            const e = Q.current[I];
            let t = 0;
            const n = Array.from(J.current.children);
            for (let r = 0; r < n.length; r += 1) {
              const o = n[r];
              if (t + o[I] > e) {
                0 === r && (t = e);
                break
              }
              t += o[I]
            }
            return t
          }, ae = () => {
            re(-1 * oe())
          }, ie = () => {
            re(oe())
          }, le = e.useCallback((e => {
            X({overflow: null, scrollbarWidth: e})
          }), []), se = (0, N.Z)((e => {
            const {tabsMeta: t, tabMeta: n} = ee();
            if (n && t) if (n[T] < t[T]) {
              const r = t[_] + (n[T] - t[T]);
              ne(r, {animation: e})
            } else if (n[O] > t[O]) {
              const r = t[_] + (n[O] - t[O]);
              ne(r, {animation: e})
            }
          })), ce = (0, N.Z)((() => {
            if (R && !1 !== E) {
              const {scrollTop: e, scrollHeight: t, clientHeight: n, scrollWidth: r, clientWidth: i} = Q.current;
              let l, s;
              if (M) l = e > 1, s = e < t - n - 1; else {
                const e = Ei(Q.current, o.direction);
                l = a ? e < r - i - 1 : e > 1, s = a ? e > 1 : e < r - i - 1
              }
              l === q.start && s === q.end || K({start: l, end: s})
            }
          }));
        e.useEffect((() => {
          const e = (0, yi.Z)((() => {
            Q.current && (te(), ce())
          })), t = (0, ki.Z)(Q.current);
          let n;
          return t.addEventListener("resize", e), "undefined" != typeof ResizeObserver && (n = new ResizeObserver(e), Array.from(J.current.children).forEach((e => {
            n.observe(e)
          }))), () => {
            e.clear(), t.removeEventListener("resize", e), n && n.disconnect()
          }
        }), [te, ce]);
        const ue = e.useMemo((() => (0, yi.Z)((() => {
          ce()
        }))), [ce]);
        e.useEffect((() => () => {
          ue.clear()
        }), [ue]), e.useEffect((() => {
          H(!0)
        }), []), e.useEffect((() => {
          te(), ce()
        })), e.useEffect((() => {
          se(Ki !== V)
        }), [se, V]), e.useImperativeHandle(s, (() => ({updateIndicator: te, updateScrollButtons: ce})), [te, ce]);
        const de = (0, D.jsx)(Ui, (0, y.Z)({}, F, {
          className: (0, x.Z)($.indicator, F.className),
          ownerState: L,
          style: (0, y.Z)({}, V, F.style)
        }));
        let fe = 0;
        const pe = e.Children.map(u, (t => {
          if (!e.isValidElement(t)) return null;
          const n = void 0 === t.props.value ? fe : t.props.value;
          Y.set(n, fe);
          const r = n === Z;
          return fe += 1, e.cloneElement(t, (0, y.Z)({
            fullWidth: "fullWidth" === B,
            indicator: r && !W && de,
            selected: r,
            selectionFollowsFocus: k,
            onChange: h,
            textColor: A,
            value: n
          }, 1 !== fe || !1 !== Z || t.props.tabIndex ? {} : {tabIndex: 0}))
        })), me = (() => {
          const e = {};
          e.scrollbarSizeListener = R ? (0, D.jsx)(qi, {
            onChange: le,
            className: (0, x.Z)($.scrollableX, $.hideScrollbar)
          }) : null;
          const t = q.start || q.end, n = R && ("auto" === E && t || !0 === E);
          return e.scrollButtonStart = n ? (0, D.jsx)(g, (0, y.Z)({
            orientation: v,
            direction: a ? "right" : "left",
            onClick: ae,
            disabled: !q.start
          }, S, {className: (0, x.Z)($.scrollButtons, S.className)})) : null, e.scrollButtonEnd = n ? (0, D.jsx)(g, (0, y.Z)({
            orientation: v,
            direction: a ? "left" : "right",
            onClick: ie,
            disabled: !q.end
          }, S, {className: (0, x.Z)($.scrollButtons, S.className)})) : null, e
        })();
        return (0, D.jsxs)(Wi, (0, y.Z)({
          className: (0, x.Z)($.root, d),
          ownerState: L,
          ref: n,
          as: f
        }, P, {
          children: [me.scrollButtonStart, me.scrollbarSizeListener, (0, D.jsxs)(Hi, {
            className: $.scroller,
            ownerState: L,
            style: {
              overflow: G.overflow,
              [M ? "margin" + (a ? "Left" : "Right") : "marginBottom"]: j ? void 0 : -G.scrollbarWidth
            },
            ref: Q,
            onScroll: ue,
            children: [(0, D.jsx)(Vi, {
              "aria-label": i,
              "aria-labelledby": l,
              "aria-orientation": "vertical" === v ? "vertical" : null,
              className: $.flexContainer,
              ownerState: L,
              onKeyDown: e => {
                const t = J.current, n = (0, Oi.Z)(t).activeElement;
                if ("tab" !== n.getAttribute("role")) return;
                let r = "horizontal" === v ? "ArrowLeft" : "ArrowUp", o = "horizontal" === v ? "ArrowRight" : "ArrowDown";
                switch ("horizontal" === v && a && (r = "ArrowRight", o = "ArrowLeft"), e.key) {
                  case r:
                    e.preventDefault(), $i(t, n, Li);
                    break;
                  case o:
                    e.preventDefault(), $i(t, n, zi);
                    break;
                  case"Home":
                    e.preventDefault(), $i(t, null, zi);
                    break;
                  case"End":
                    e.preventDefault(), $i(t, null, Li)
                }
              },
              ref: J,
              role: "tablist",
              children: pe
            }), W && de]
          }), me.scrollButtonEnd]
        }))
      })), Xi = Gi;
    
    function Yi(e) {
      return (0, S.Z)("MuiTab", e)
    }
    
    const Qi = (0, F.Z)("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]),
      Ji = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"],
      el = (0, E.ZP)(ge, {
        name: "MuiTab", slot: "Root", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${(0, He.Z)(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped]
        }
      })((({theme: e, ownerState: t}) => (0, y.Z)({}, e.typography.button, {
        maxWidth: 360,
        minWidth: 90,
        position: "relative",
        minHeight: 48,
        flexShrink: 0,
        padding: "12px 16px",
        overflow: "hidden",
        whiteSpace: "normal",
        textAlign: "center"
      }, t.label && {flexDirection: "top" === t.iconPosition || "bottom" === t.iconPosition ? "column" : "row"}, {lineHeight: 1.25}, t.icon && t.label && {
        minHeight: 72,
        paddingTop: 9,
        paddingBottom: 9,
        [`& > .${Qi.iconWrapper}`]: (0, y.Z)({}, "top" === t.iconPosition && {marginBottom: 6}, "bottom" === t.iconPosition && {marginTop: 6}, "start" === t.iconPosition && {marginRight: e.spacing(1)}, "end" === t.iconPosition && {marginLeft: e.spacing(1)})
      }, "inherit" === t.textColor && {
        color: "inherit",
        opacity: .6,
        [`&.${Qi.selected}`]: {opacity: 1},
        [`&.${Qi.disabled}`]: {opacity: (e.vars || e).palette.action.disabledOpacity}
      }, "primary" === t.textColor && {
        color: (e.vars || e).palette.text.secondary,
        [`&.${Qi.selected}`]: {color: (e.vars || e).palette.primary.main},
        [`&.${Qi.disabled}`]: {color: (e.vars || e).palette.text.disabled}
      }, "secondary" === t.textColor && {
        color: (e.vars || e).palette.text.secondary,
        [`&.${Qi.selected}`]: {color: (e.vars || e).palette.secondary.main},
        [`&.${Qi.disabled}`]: {color: (e.vars || e).palette.text.disabled}
      }, t.fullWidth && {
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: 0,
        maxWidth: "none"
      }, t.wrapped && {fontSize: e.typography.pxToRem(12)}))), tl = e.forwardRef((function (t, n) {
        const r = (0, w.Z)({props: t, name: "MuiTab"}), {
            className: o,
            disabled: a = !1,
            disableFocusRipple: i = !1,
            fullWidth: l,
            icon: s,
            iconPosition: c = "top",
            indicator: u,
            label: d,
            onChange: f,
            onClick: p,
            onFocus: m,
            selected: h,
            selectionFollowsFocus: v,
            textColor: g = "inherit",
            value: E,
            wrapped: k = !1
          } = r, F = (0, b.Z)(r, Ji), S = (0, y.Z)({}, r, {
            disabled: a,
            disableFocusRipple: i,
            selected: h,
            icon: !!s,
            iconPosition: c,
            label: !!d,
            fullWidth: l,
            textColor: g,
            wrapped: k
          }), A = (e => {
            const {classes: t, textColor: n, fullWidth: r, wrapped: o, icon: a, label: i, selected: l, disabled: s} = e,
              c = {
                root: ["root", a && i && "labelIcon", `textColor${(0, He.Z)(n)}`, r && "fullWidth", o && "wrapped", l && "selected", s && "disabled"],
                iconWrapper: ["iconWrapper"]
              };
            return (0, C.Z)(c, Yi, t)
          })(S),
          Z = s && d && e.isValidElement(s) ? e.cloneElement(s, {className: (0, x.Z)(A.iconWrapper, s.props.className)}) : s;
        return (0, D.jsxs)(el, (0, y.Z)({
          focusRipple: !i,
          className: (0, x.Z)(A.root, o),
          ref: n,
          role: "tab",
          "aria-selected": h,
          disabled: a,
          onClick: e => {
            !h && f && f(e, E), p && p(e)
          },
          onFocus: e => {
            v && !h && f && f(e, E), m && m(e)
          },
          ownerState: S,
          tabIndex: h ? 0 : -1
        }, F, {children: ["top" === c || "start" === c ? (0, D.jsxs)(e.Fragment, {children: [Z, d]}) : (0, D.jsxs)(e.Fragment, {children: [d, Z]}), u]}))
      }));
    
    class nl extends e.PureComponent {
      constructor(...e) {
        var t, n, r;
        super(...e), t = this, r = [{
          title: "主题\nTheme",
          colors: ["#004578", "#005a9e", "#106ebe", "#0078d4", "#2b88d8", "#71afe5", "#c7e0f4", "#deecf9", "#eff6fc"]
        }, {
          title: "中性\nNeutral",
          colors: ["#000000", "#201f1e", "#323130", "#3b3a39", "#605e5c", "#8a8886", "#a19f9d", "#c8c6c4", "#d2d0ce", "#e1dfdd", "#edebe9", "#f3f2f1", "#faf9f8"]
        }, {
          title: "强调\nAccent",
          colors: ["#d29200", "#ffb900", "#fff100", "#d83b01", "#ea4300", "#ff8c00", "#a4262c", "#d13438", "#5c005c", "#b4009e", "#e3008c", "#32145a", "#5c2d91", "#b4a0ff", "#002050", "#00188f", "#0078d4", "#00bcf2", "#004b50", "#008272", "#00b294", "#004b1c", "#107c10", "#bad80a"]
        }, {
          title: "消息\nMessage",
          colors: ["#fff4ce", "#797673", "#fed9cc", "#d83b01", "#fde7e9", "#a80000", "#dff6dd", "#107c10"]
        }], (n = function (e) {
          var t = function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t);
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e, "string");
          return "symbol" == typeof t ? t : String(t)
        }(n = "data")) in t ? Object.defineProperty(t, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = r
      }
      
      render() {
        return e.createElement("div", {className: "ui-color-body"}, this.data.map(((t, n) => e.createElement("div", {
          className: "flat-ui-box",
          key: n
        }, e.createElement("div", {className: "flat-ui-title"}, t.title), e.createElement("div", {className: "fluent-ui-colors"}, t.colors.map((t => e.createElement("div", {key: t}, e.createElement("div", {
          style: {backgroundColor: t},
          onClick: this.props.onColorClick
        }, e.createElement("span", null, t.substr(1)))))))))))
      }
    }
    
    class rl extends e.PureComponent {
      constructor(...e) {
        var t, n, r;
        super(...e), t = this, r = [{
          title: "默认\nDefault",
          colors: [["#1abc9c", "#16a085"], ["#2ecc71", "#27ae60"], ["#3498db", "#2980b9"], ["#9b59b6", "#8e44ad"], ["#34495e", "#2c3e50"], ["#f1c40f", "#f39c12"], ["#e67e22", "#d35400"], ["#e74c3c", "#c0392b"], ["#ecf0f1", "#bdc3c7"], ["#95a5a6", "#7f8c8d"]]
        }, {
          title: "中国\nChinese",
          colors: [["#eccc68", "#ffa502"], ["#ff7f50", "#ff6348"], ["#ff6b81", "#ff4757"], ["#a4b0be", "#747d8c"], ["#57606f", "#2f3542"], ["#7bed9f", "#2ed573"], ["#70a1ff", "#1e90ff"], ["#5352ed", "#3742fa"], ["#ffffff", "#f1f2f6"], ["#dfe4ea", "#ced6e0"]]
        }, {
          title: "美国\nAmerican",
          colors: [["#55efc4", "#00b894"], ["#81ecec", "#00cec9"], ["#74b9ff", "#0984e3"], ["#a29bfe", "#6c5ce7"], ["#dfe6e9", "#b2bec3"], ["#ffeaa7", "#fdcb6e"], ["#fab1a0", "#e17055"], ["#ff7675", "#d63031"], ["#fd79a8", "#e84393"], ["#636e72", "#2d3436"]]
        }, {
          title: "澳大利亚\nAussie",
          colors: [["#f6e58d", "#f9ca24"], ["#ffbe76", "#f0932b"], ["#ff7979", "#eb4d4b"], ["#badc58", "#6ab04c"], ["#dff9fb", "#c7ecee"], ["#7ed6df", "#22a6b3"], ["#e056fd", "#be2edd"], ["#686de0", "#4834d4"], ["#30336b", "#130f40"], ["#95afc0", "#535c68"]]
        }, {
          title: "英国\nBritish",
          colors: [["#00a8ff", "#0097e6"], ["#9c88ff", "#8c7ae6"], ["#fbc531", "#e1b12c"], ["#4cd137", "#44bd32"], ["#487eb0", "#40739e"], ["#e84118", "#c23616"], ["#f5f6fa", "#dcdde1"], ["#7f8fa6", "#718093"], ["#273c75", "#192a56"], ["#353b48", "#2f3640"]]
        }, {
          title: "加拿大\nCanadian",
          colors: [["#ff9ff3", "#f368e0"], ["#feca57", "#ff9f43"], ["#ff6b6b", "#ee5253"], ["#48dbfb", "#0abde3"], ["#1dd1a1", "#10ac84"], ["#00d2d3", "#01a3a4"], ["#54a0ff", "#2e86de"], ["#5f27cd", "#341f97"], ["#c8d6e5", "#8395a7"], ["#576574", "#222f3e"]]
        }, {
          title: "荷兰\nDutch",
          colors: [["#ffc312", "#f79f1f"], ["#c4e538", "#a3cb38"], ["#12cbc4", "#1289a7"], ["#fda7df", "#d980fa"], ["#ed4c67", "#b53471"], ["#ee5a24", "#ea2027"], ["#009432", "#006266"], ["#0652dd", "#1b1464"], ["#9980fa", "#5758bb"], ["#833471", "#6f1e51"]]
        }, {
          title: "法国\nFrench",
          colors: [["#fad390", "#f6b93b"], ["#f8c291", "#e55039"], ["#6a89cc", "#4a69bd"], ["#82ccdd", "#60a3bc"], ["#b8e994", "#78e08f"], ["#fa983a", "#e58e26"], ["#eb2f06", "#b71540"], ["#1e3799", "#0c2461"], ["#3c6382", "#0a3d62"], ["#38ada9", "#079992"]]
        }, {
          title: "德国\nGerman",
          colors: [["#fc5c65", "#eb3b5a"], ["#fd9644", "#fa8231"], ["#fed330", "#f7b731"], ["#26de81", "#20bf6b"], ["#2bcbba", "#0fb9b1"], ["#45aaf2", "#2d98da"], ["#4b7bec", "#3867d6"], ["#a55eea", "#8854d0"], ["#d1d8e0", "#a5b1c2"], ["#778ca3", "#4b6584"]]
        }, {
          title: "印度\nIndian",
          colors: [["#fea47f", "#f97f51"], ["#25ccf7", "#1b9cfc"], ["#eab543", "#f8efba"], ["#55e6c1", "#58b19f"], ["#cad3c8", "#2c3a47"], ["#b33771", "#6d214f"], ["#3b3b98", "#182c61"], ["#fd7272", "#fc427b"], ["#9aecdb", "#bdc581"], ["#d6a2e8", "#82589f"]]
        }, {
          title: "俄罗斯\nRussian",
          colors: [["#f3a683", "#f19066"], ["#f7d794", "#f5cd79"], ["#778beb", "#546de5"], ["#e77f67", "#e15f41"], ["#cf6a87", "#c44569"], ["#786fa6", "#574b90"], ["#f8a5c2", "#f78fb3"], ["#63cdda", "#3dc1d3"], ["#ea8685", "#e66767"], ["#596275", "#303952"]]
        }, {
          title: "西班牙\nSpanish",
          colors: [["#40407a", "#2c2c54"], ["#706fd3", "#474787"], ["#f7f1e3", "#aaa69d"], ["#34ace0", "#227093"], ["#33d9b2", "#218c74"], ["#ff5252", "#b33939"], ["#ff793f", "#cd6133"], ["#d1ccc0", "#84817a"], ["#ffb142", "#cc8e35"], ["#ffda79", "#ccae62"]]
        }, {
          title: "瑞典\nSwedish",
          colors: [["#ef5777", "#f53b57"], ["#575fcf", "#3c40c6"], ["#4bcffa", "#0fbcf9"], ["#34e7e4", "#00d8d6"], ["#0be881", "#05c46b"], ["#ffc048", "#ffa801"], ["#ffdd59", "#ffd32a"], ["#ff5e57", "#ff3f34"], ["#d2dae2", "#808e9b"], ["#485460", "#1e272e"]]
        }, {
          title: "土耳其\nTurkish",
          colors: [["#cd84f1", "#c56cf0"], ["#ffcccc", "#ffb8b8"], ["#ff4d4d", "#ff3838"], ["#ffaf40", "#ff9f1a"], ["#fffa65", "#fff200"], ["#32ff7e", "#3ae374"], ["#7efff5", "#67e6dc"], ["#18dcff", "#17c0eb"], ["#7d5fff", "#7158e2"], ["#4b4b4b", "#3d3d3d"]]
        }], (n = function (e) {
          var t = function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t);
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e, "string");
          return "symbol" == typeof t ? t : String(t)
        }(n = "data")) in t ? Object.defineProperty(t, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = r
      }
      
      render() {
        return e.createElement("div", {className: "ui-color-body"}, this.data.map(((t, n) => e.createElement("div", {
          className: "flat-ui-box",
          key: n
        }, e.createElement("div", {className: "flat-ui-title"}, t.title), e.createElement("div", {className: "flat-ui-colors"}, t.colors.map(((t, n) => e.createElement("div", {key: n}, t.map((t => e.createElement("div", {
          key: t,
          style: {backgroundColor: t},
          onClick: this.props.onColorClick
        }, e.createElement("span", null, t.substr(1)))))))))))))
      }
    }
    
    class ol extends e.PureComponent {
      constructor(...e) {
        var t, n, r;
        super(...e), t = this, r = [{
          title: "中性",
          description: "平稳、中性",
          colors: ["#f5f5f5", "#f0f0f0", "#d9d9d9", "#bfbfbf", "#8c8c8c", "#595959", "#434343", "#262626", "#1f1f1f", "#141414"]
        }, {
          title: "薄暮",
          description: "斗志、奔放",
          colors: ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"]
        }, {
          title: "火山",
          description: "醒目、澎湃",
          colors: ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"]
        }, {
          title: "日暮",
          description: "温暖、欢快",
          colors: ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"]
        }, {
          title: "金盏花",
          description: "活力、积极",
          colors: ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"]
        }, {
          title: "日出",
          description: "出生、阳光",
          colors: ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"]
        }, {
          title: "青柠",
          description: "自然、生机",
          colors: ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"]
        }, {
          title: "极光绿",
          description: "健康、创新",
          colors: ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"]
        }, {
          title: "明青",
          description: "希望、坚强",
          colors: ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"]
        }, {
          title: "拂晓蓝",
          description: "包容、科技、普惠",
          colors: ["#e6f7ff", "#bae7ff", "#91d5ff", "#69c0ff", "#40a9ff", "#1890ff", "#096dd9", "#0050b3", "#003a8c", "#002766"]
        }, {
          title: "极客蓝",
          description: "探索、钻研",
          colors: ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"]
        }, {
          title: "酱紫",
          description: "优雅、浪漫",
          colors: ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"]
        }, {
          title: "法式洋红",
          description: "明快、感性",
          colors: ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"]
        }], (n = function (e) {
          var t = function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t);
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e, "string");
          return "symbol" == typeof t ? t : String(t)
        }(n = "data")) in t ? Object.defineProperty(t, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = r
      }
      
      render() {
        return e.createElement("div", {className: "ui-color-body"}, e.createElement("div", {className: "ui-color-header"}, e.createElement("div", null), e.createElement("div", null, e.createElement("div", null, "1"), e.createElement("div", null, "2"), e.createElement("div", null, "3"), e.createElement("div", null, "4"), e.createElement("div", null, "5"), e.createElement("div", null, "6"), e.createElement("div", null, "7"), e.createElement("div", null, "8"), e.createElement("div", null, "9"), e.createElement("div", null, "10"))), e.createElement("div", null, this.data.map(((t, n) => e.createElement("div", {
          key: n,
          className: "ui-color-row"
        }, e.createElement("div", null, t.title), e.createElement("div", {style: {fontSize: "1.5vw"}}, t.colors.map(((t, n) => e.createElement("div", {key: n}, e.createElement("div", {
          style: {backgroundColor: t},
          onClick: this.props.onColorClick
        }, e.createElement("span", {style: {color: n < 5 ? "#000" : "#FFF"}}, t.substr(1))))))))))))
      }
    }
    
    class al extends e.PureComponent {
      constructor(...e) {
        var t, n, r;
        super(...e), t = this, r = [{
          title: "Red",
          colors: ["#ffebee", "#ffcdd2", "#ef9a9a", "#e57373", "#ef5350", "#f44336", "#e53935", "#d32f2f", "#c62828", "#b71c1c", "#ff8a80", "#ff5252", "#ff1744", "#d50000"]
        }, {
          title: "Pink",
          colors: ["#fce4ec", "#f8bbd0", "#f48fb1", "#f06292", "#ec407a", "#e91e63", "#d81b60", "#c2185b", "#ad1457", "#880e4f", "#ff80ab", "#ff4081", "#f50057", "#c51162"]
        }, {
          title: "Purple",
          colors: ["#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c", "#ea80fc", "#e040fb", "#d500f9", "#aa00ff"]
        }, {
          title: "Deep Purple",
          colors: ["#ede7f6", "#d1c4e9", "#b39ddb", "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92", "#b388ff", "#7c4dff", "#651fff", "#6200ea"]
        }, {
          title: "Indigo",
          colors: ["#e8eaf6", "#c5cae9", "#9fa8da", "#7986cb", "#5c6bc0", "#3f51b5", "#3949ab", "#303f9f", "#283593", "#1a237e", "#8c9eff", "#536dfe", "#3d5afe", "#304ffe"]
        }, {
          title: "Blue",
          colors: ["#e3f2fd", "#bbdefb", "#90caf9", "#64b5f6", "#42a5f5", "#2196f3", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1", "#82b1ff", "#448aff", "#2979ff", "#2962ff"]
        }, {
          title: "Light Blue",
          colors: ["#e1f5fe", "#b3e5fc", "#81d4fa", "#4fc3f7", "#29b6f6", "#03a9f4", "#039be5", "#0288d1", "#0277bd", "#01579b", "#80d8ff", "#40c4ff", "#00b0ff", "#0091ea"]
        }, {
          title: "Cyan",
          colors: ["#e0f7fa", "#b2ebf2", "#80deea", "#4dd0e1", "#26c6da", "#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064", "#84ffff", "#18ffff", "#00e5ff", "#00b8d4"]
        }, {
          title: "Teal",
          colors: ["#e0f2f1", "#b2dfdb", "#80cbc4", "#4db6ac", "#26a69a", "#009688", "#00897b", "#00796b", "#00695c", "#004d40", "#a7ffeb", "#64ffda", "#1de9b6", "#00bfa5"]
        }, {
          title: "Green",
          colors: ["#e8f5e9", "#c8e6c9", "#a5d6a7", "#81c784", "#66bb6a", "#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20", "#b9f6ca", "#69f0ae", "#00e676", "#00c853"]
        }, {
          title: "Light Green",
          colors: ["#f1f8e9", "#dcedc8", "#c5e1a5", "#aed581", "#9ccc65", "#8bc34a", "#7cb342", "#689f38", "#558b2f", "#33691e", "#ccff90", "#b2ff59", "#76ff03", "#64dd17"]
        }, {
          title: "Lime",
          colors: ["#f9fbe7", "#f0f4c3", "#e6ee9c", "#dce775", "#d4e157", "#cddc39", "#c0ca33", "#afb42b", "#9e9d24", "#827717", "#f4ff81", "#eeff41", "#c6ff00", "#aeea00"]
        }, {
          title: "Yellow",
          colors: ["#fffde7", "#fff9c4", "#fff59d", "#fff176", "#ffee58", "#ffeb3b", "#fdd835", "#fbc02d", "#f9a825", "#f57f17", "#ffff8d", "#ffff00", "#ffea00", "#ffd600"]
        }, {
          title: "Amber",
          colors: ["#fff8e1", "#ffecb3", "#ffe082", "#ffd54f", "#ffca28", "#ffc107", "#ffb300", "#ffa000", "#ff8f00", "#ff6f00", "#ffe57f", "#ffd740", "#ffc400", "#ffab00"]
        }, {
          title: "Orange",
          colors: ["#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100", "#ffd180", "#ffab40", "#ff9100", "#ff6d00"]
        }, {
          title: "Deep Orange",
          colors: ["#fbe9e7", "#ffccbc", "#ffab91", "#ff8a65", "#ff7043", "#ff5722", "#f4511e", "#e64a19", "#d84315", "#bf360c", "#ff9e80", "#ff6e40", "#ff3d00", "#dd2c00"]
        }, {
          title: "Brown",
          colors: ["#efebe9", "#d7ccc8", "#bcaaa4", "#a1887f", "#8d6e63", "#795548", "#6d4c41", "#5d4037", "#4e342e", "#3e2723", "", "", "", ""]
        }, {
          title: "Grey",
          colors: ["#fafafa", "#f5f5f5", "#eeeeee", "#e0e0e0", "#bdbdbd", "#9e9e9e", "#757575", "#616161", "#424242", "#212121", "", "", "", ""]
        }, {
          title: "Blue Grey",
          colors: ["#eceff1", "#cfd8dc", "#b0bec5", "#90a4ae", "#78909c", "#607d8b", "#546e7a", "#455a64", "#37474f", "#263238", "", "", "", ""]
        }], (n = function (e) {
          var t = function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t);
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e, "string");
          return "symbol" == typeof t ? t : String(t)
        }(n = "data")) in t ? Object.defineProperty(t, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = r
      }
      
      render() {
        return e.createElement("div", {className: "ui-color-body"}, e.createElement("div", {className: "ui-color-header"}, e.createElement("div", null), e.createElement("div", null, e.createElement("div", null, "50"), e.createElement("div", null, "100"), e.createElement("div", null, "200"), e.createElement("div", null, "300"), e.createElement("div", null, "400"), e.createElement("div", null, "500"), e.createElement("div", null, "600"), e.createElement("div", null, "700"), e.createElement("div", null, "800"), e.createElement("div", null, "900"), e.createElement("div", {
          style: {
            borderLeft: "1px solid #EEE",
            marginLeft: "-1px"
          }
        }, "A100"), e.createElement("div", null, "A200"), e.createElement("div", null, "A300"), e.createElement("div", null, "A400"))), e.createElement("div", null, this.data.map(((t, n) => e.createElement("div", {
          key: n,
          className: "ui-color-row"
        }, e.createElement("div", null, t.title), e.createElement("div", {style: {fontSize: "1.1vw"}}, t.colors.map(((t, n) => e.createElement("div", {key: n}, e.createElement("div", {
          style: {backgroundColor: t},
          onClick: this.props.onColorClick
        }, e.createElement("span", {style: {color: n < 5 || n > 9 && n < 12 ? "#000" : "#FFF"}}, t.substr(1))))))))))))
      }
    }
    
    class il extends e.PureComponent {
      constructor(...e) {
        var t, n, r;
        super(...e), t = this, r = [{
          title: "Gray",
          colors: ["#f8f9fa", "#f1f3f5", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#868e96", "#495057", "#343a40", "#212529"]
        }, {
          title: "Red",
          colors: ["#fff5f5", "#ffe3e3", "#ffc9c9", "#ffa8a8", "#ff8787", "#ff6b6b", "#fa5252", "#f03e3e", "#e03131", "#c92a2a"]
        }, {
          title: "Pink",
          colors: ["#fff0f6", "#ffdeeb", "#fcc2d7", "#faa2c1", "#f783ac", "#f06595", "#e64980", "#d6336c", "#c2255c", "#a61e4d"]
        }, {
          title: "Grape",
          colors: ["#f8f0fc", "#f3d9fa", "#eebefa", "#e599f7", "#da77f2", "#cc5de8", "#be4bdb", "#ae3ec9", "#9c36b5", "#862e9c"]
        }, {
          title: "Violet",
          colors: ["#f3f0ff", "#e5dbff", "#d0bfff", "#b197fc", "#9775fa", "#845ef7", "#7950f2", "#7048e8", "#6741d9", "#5f3dc4"]
        }, {
          title: "Indigo",
          colors: ["#edf2ff", "#dbe4ff", "#bac8ff", "#91a7ff", "#748ffc", "#5c7cfa", "#4c6ef5", "#4263eb", "#3b5bdb", "#364fc7"]
        }, {
          title: "Blue",
          colors: ["#e7f5ff", "#d0ebff", "#a5d8ff", "#74c0fc", "#4dabf7", "#339af0", "#228be6", "#1c7ed6", "#1971c2", "#1864ab"]
        }, {
          title: "Cyan",
          colors: ["#e3fafc", "#c5f6fa", "#99e9f2", "#66d9e8", "#3bc9db", "#22b8cf", "#15aabf", "#1098ad", "#0c8599", "#0b7285"]
        }, {
          title: "Teal",
          colors: ["#e6fcf5", "#c3fae8", "#96f2d7", "#63e6be", "#38d9a9", "#20c997", "#12b886", "#0ca678", "#099268", "#087f5b"]
        }, {
          title: "Green",
          colors: ["#ebfbee", "#d3f9d8", "#b2f2bb", "#8ce99a", "#69db7c", "#51cf66", "#40c057", "#37b24d", "#2f9e44", "#2b8a3e"]
        }, {
          title: "Lime",
          colors: ["#f4fce3", "#e9fac8", "#d8f5a2", "#c0eb75", "#a9e34b", "#94d82d", "#82c91e", "#74b816", "#66a80f", "#5c940d"]
        }, {
          title: "Yellow",
          colors: ["#fff9db", "#fff3bf", "#ffec99", "#ffe066", "#ffd43b", "#fcc419", "#fab005", "#f59f00", "#f08c00", "#e67700"]
        }, {
          title: "Orange",
          colors: ["#fff4e6", "#ffe8cc", "#ffd8a8", "#ffc078", "#ffa94d", "#ff922b", "#fd7e14", "#f76707", "#e8590c", "#d9480f"]
        }], (n = function (e) {
          var t = function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t);
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e, "string");
          return "symbol" == typeof t ? t : String(t)
        }(n = "data")) in t ? Object.defineProperty(t, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = r
      }
      
      render() {
        return e.createElement("div", {className: "ui-color-body"}, e.createElement("div", {className: "ui-color-header"}, e.createElement("div", null), e.createElement("div", null, e.createElement("div", null, "0"), e.createElement("div", null, "1"), e.createElement("div", null, "2"), e.createElement("div", null, "3"), e.createElement("div", null, "4"), e.createElement("div", null, "5"), e.createElement("div", null, "6"), e.createElement("div", null, "7"), e.createElement("div", null, "8"), e.createElement("div", null, "9"))), e.createElement("div", null, this.data.map(((t, n) => e.createElement("div", {
          key: n,
          className: "ui-color-row"
        }, e.createElement("div", null, t.title), e.createElement("div", {style: {fontSize: "1.5vw"}}, t.colors.map(((t, n) => e.createElement("div", {key: n}, e.createElement("div", {
          style: {backgroundColor: t},
          onClick: this.props.onColorClick
        }, e.createElement("span", {style: {color: n < 5 ? "#000" : "#FFF"}}, t.substr(1))))))))))))
      }
    }
    
    var ll = o(6071), sl = {};
    
    function cl(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
    
    sl.styleTagTransform = h(), sl.setAttributes = d(), sl.insert = c().bind(null, "head"), sl.domAPI = l(), sl.insertStyleElement = p(), r()(ll.Z, sl), ll.Z && ll.Z.locals && ll.Z.locals;
    
    class ul extends e.Component {
      constructor(t) {
        super(t), cl(this, "handleTabChange", ((e, t) => {
          this.setState({ui: t})
        })), cl(this, "getTabContent", (() => {
          switch (this.state.ui) {
            case"flat":
              return e.createElement(rl, {onColorClick: this.props.onColorClick});
            case"fluent":
              return e.createElement(nl, {onColorClick: this.props.onColorClick});
            case"open":
              return e.createElement(il, {onColorClick: this.props.onColorClick});
            case"antd":
              return e.createElement(ol, {onColorClick: this.props.onColorClick});
            case"material":
              return e.createElement(al, {onColorClick: this.props.onColorClick});
            default:
              return !1
          }
        }));
        const n = window.ztools.db.get("uicolor");
        let r = "flat";
        n && ["flat", "fluent", "open", "antd", "material"].includes(n.ui) && (r = n.ui), this.state = {ui: r}
      }
      
      componentWillUnmount() {
        const e = window.ztools.db.get("uicolor") || {_id: "uicolor", ui: "flat"};
        e.ui !== this.state.ui && (e.ui = this.state.ui, window.ztools.db.put(e))
      }
      
      render() {
        const {ui: t} = this.state;
        return e.createElement("div", {className: "ui-content"}, e.createElement("div", null, e.createElement(Xi, {
          value: t,
          onChange: this.handleTabChange
        }, e.createElement(tl, {
          className: "ui-tab",
          disableFocusRipple: !0,
          value: "flat",
          label: "Flat UI"
        }), e.createElement(tl, {
          className: "ui-tab",
          disableFocusRipple: !0,
          value: "fluent",
          label: "Fluent Design"
        }), e.createElement(tl, {
          className: "ui-tab",
          disableFocusRipple: !0,
          value: "open",
          label: "Open Color"
        }), e.createElement(tl, {
          className: "ui-tab",
          disableFocusRipple: !0,
          value: "antd",
          label: "Ant Design"
        }), e.createElement(tl, {
          className: "ui-tab",
          disableFocusRipple: !0,
          value: "material",
          label: "Material Design"
        }))), e.createElement("div", null, this.getTabContent()))
      }
    }
    
    var dl = o(7036), fl = o(7579), pl = o(1387), ml = o(8290), hl = o(7596);
    const vl = ["onChange", "maxRows", "minRows", "style", "value"];
    
    function gl(e, t) {
      return parseInt(e[t], 10) || 0
    }
    
    const bl = {
      visibility: "hidden",
      position: "absolute",
      overflow: "hidden",
      height: 0,
      top: 0,
      left: 0,
      transform: "translateZ(0)"
    };
    
    function yl(e) {
      return null == e || 0 === Object.keys(e).length
    }
    
    const xl = e.forwardRef((function (t, n) {
      const {onChange: r, maxRows: o, minRows: a = 1, style: i, value: l} = t,
        s = (0, b.Z)(t, vl), {current: c} = e.useRef(null != l), u = e.useRef(null), d = (0, nt.Z)(n, u),
        f = e.useRef(null), p = e.useRef(0), [m, h] = e.useState({}), v = e.useCallback((() => {
          const e = u.current, n = (0, ml.Z)(e).getComputedStyle(e);
          if ("0px" === n.width) return {};
          const r = f.current;
          r.style.width = n.width, r.value = e.value || t.placeholder || "x", "\n" === r.value.slice(-1) && (r.value += " ");
          const i = n["box-sizing"], l = gl(n, "padding-bottom") + gl(n, "padding-top"),
            s = gl(n, "border-bottom-width") + gl(n, "border-top-width"), c = r.scrollHeight;
          r.value = "x";
          const d = r.scrollHeight;
          let p = c;
          return a && (p = Math.max(Number(a) * d, p)), o && (p = Math.min(Number(o) * d, p)), p = Math.max(p, d), {
            outerHeightStyle: p + ("border-box" === i ? l + s : 0),
            overflow: Math.abs(p - c) <= 1
          }
        }), [o, a, t.placeholder]), g = (e, t) => {
          const {outerHeightStyle: n, overflow: r} = t;
          return p.current < 20 && (n > 0 && Math.abs((e.outerHeightStyle || 0) - n) > 1 || e.overflow !== r) ? (p.current += 1, {
            overflow: r,
            outerHeightStyle: n
          }) : e
        }, x = e.useCallback((() => {
          const e = v();
          yl(e) || h((t => g(t, e)))
        }), [v]);
      return e.useEffect((() => {
        const e = (0, hl.Z)((() => {
          p.current = 0, u.current && (() => {
            const e = v();
            yl(e) || (0, ut.flushSync)((() => {
              h((t => g(t, e)))
            }))
          })()
        })), t = (0, ml.Z)(u.current);
        let n;
        return t.addEventListener("resize", e), "undefined" != typeof ResizeObserver && (n = new ResizeObserver(e), n.observe(u.current)), () => {
          e.clear(), t.removeEventListener("resize", e), n && n.disconnect()
        }
      })), (0, en.Z)((() => {
        x()
      })), e.useEffect((() => {
        p.current = 0
      }), [l]), (0, D.jsxs)(e.Fragment, {
        children: [(0, D.jsx)("textarea", (0, y.Z)({
          value: l, onChange: e => {
            p.current = 0, c || x(), r && r(e)
          }, ref: d, rows: a, style: (0, y.Z)({height: m.outerHeightStyle, overflow: m.overflow ? "hidden" : null}, i)
        }, s)), (0, D.jsx)("textarea", {
          "aria-hidden": !0,
          className: t.className,
          readOnly: !0,
          ref: f,
          tabIndex: -1,
          style: (0, y.Z)({}, bl, i, {padding: 0})
        })]
      })
    }));
    
    function Cl(e) {
      const {styles: t, defaultTheme: n = {}} = e, r = "function" == typeof t ? e => {
        return t(null == (r = e) || 0 === Object.keys(r).length ? n : e);
        var r
      } : t;
      return (0, D.jsx)(X, {styles: r})
    }
    
    const El = function (e) {
      return (0, D.jsx)(Cl, (0, y.Z)({}, e, {defaultTheme: st.Z}))
    };
    
    function wl(e) {
      return null != e && !(Array.isArray(e) && 0 === e.length)
    }
    
    function kl(e, t = !1) {
      return e && (wl(e.value) && "" !== e.value || t && wl(e.defaultValue) && "" !== e.defaultValue)
    }
    
    function Fl(e) {
      return (0, S.Z)("MuiInputBase", e)
    }
    
    const Sl = (0, F.Z)("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]),
      Al = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"],
      Dl = (e, t) => {
        const {ownerState: n} = e;
        return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, "small" === n.size && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${(0, He.Z)(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel]
      }, Zl = (e, t) => {
        const {ownerState: n} = e;
        return [t.input, "small" === n.size && t.inputSizeSmall, n.multiline && t.inputMultiline, "search" === n.type && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel]
      }, Bl = (0, E.ZP)("div", {name: "MuiInputBase", slot: "Root", overridesResolver: Dl})((({
                                                                                                theme: e,
                                                                                                ownerState: t
                                                                                              }) => (0, y.Z)({}, e.typography.body1, {
        color: (e.vars || e).palette.text.primary,
        lineHeight: "1.4375em",
        boxSizing: "border-box",
        position: "relative",
        cursor: "text",
        display: "inline-flex",
        alignItems: "center",
        [`&.${Sl.disabled}`]: {color: (e.vars || e).palette.text.disabled, cursor: "default"}
      }, t.multiline && (0, y.Z)({padding: "4px 0 5px"}, "small" === t.size && {paddingTop: 1}), t.fullWidth && {width: "100%"}))),
      jl = (0, E.ZP)("input", {name: "MuiInputBase", slot: "Input", overridesResolver: Zl})((({
                                                                                                theme: e,
                                                                                                ownerState: t
                                                                                              }) => {
        const n = "light" === e.palette.mode,
          r = (0, y.Z)({color: "currentColor"}, e.vars ? {opacity: e.vars.opacity.inputPlaceholder} : {opacity: n ? .42 : .5}, {transition: e.transitions.create("opacity", {duration: e.transitions.duration.shorter})}),
          o = {opacity: "0 !important"},
          a = e.vars ? {opacity: e.vars.opacity.inputPlaceholder} : {opacity: n ? .42 : .5};
        return (0, y.Z)({
          font: "inherit",
          letterSpacing: "inherit",
          color: "currentColor",
          padding: "4px 0 5px",
          border: 0,
          boxSizing: "content-box",
          background: "none",
          height: "1.4375em",
          margin: 0,
          WebkitTapHighlightColor: "transparent",
          display: "block",
          minWidth: 0,
          width: "100%",
          animationName: "mui-auto-fill-cancel",
          animationDuration: "10ms",
          "&::-webkit-input-placeholder": r,
          "&::-moz-placeholder": r,
          "&:-ms-input-placeholder": r,
          "&::-ms-input-placeholder": r,
          "&:focus": {outline: 0},
          "&:invalid": {boxShadow: "none"},
          "&::-webkit-search-decoration": {WebkitAppearance: "none"},
          [`label[data-shrink=false] + .${Sl.formControl} &`]: {
            "&::-webkit-input-placeholder": o,
            "&::-moz-placeholder": o,
            "&:-ms-input-placeholder": o,
            "&::-ms-input-placeholder": o,
            "&:focus::-webkit-input-placeholder": a,
            "&:focus::-moz-placeholder": a,
            "&:focus:-ms-input-placeholder": a,
            "&:focus::-ms-input-placeholder": a
          },
          [`&.${Sl.disabled}`]: {opacity: 1, WebkitTextFillColor: (e.vars || e).palette.text.disabled},
          "&:-webkit-autofill": {animationDuration: "5000s", animationName: "mui-auto-fill"}
        }, "small" === t.size && {paddingTop: 1}, t.multiline && {
          height: "auto",
          resize: "none",
          padding: 0,
          paddingTop: 0
        }, "search" === t.type && {MozAppearance: "textfield"})
      })), Pl = (0, D.jsx)(El, {
        styles: {
          "@keyframes mui-auto-fill": {from: {display: "block"}},
          "@keyframes mui-auto-fill-cancel": {from: {display: "block"}}
        }
      }), Rl = e.forwardRef((function (t, n) {
        var r;
        const o = (0, w.Z)({props: t, name: "MuiInputBase"}), {
            "aria-describedby": a,
            autoComplete: i,
            autoFocus: l,
            className: s,
            components: c = {},
            componentsProps: u = {},
            defaultValue: d,
            disabled: f,
            disableInjectingGlobalStyles: p,
            endAdornment: m,
            fullWidth: h = !1,
            id: v,
            inputComponent: g = "input",
            inputProps: E = {},
            inputRef: k,
            maxRows: F,
            minRows: S,
            multiline: A = !1,
            name: Z,
            onBlur: B,
            onChange: j,
            onClick: R,
            onFocus: N,
            onKeyDown: _,
            onKeyUp: T,
            placeholder: O,
            readOnly: I,
            renderSuffix: z,
            rows: L,
            slotProps: $ = {},
            slots: W = {},
            startAdornment: H,
            type: V = "text",
            value: U
          } = o, q = (0, b.Z)(o, Al), K = null != E.value ? E.value : U, {current: G} = e.useRef(null != K), X = e.useRef(),
          Y = e.useCallback((e => {
          }), []), Q = (0, M.Z)(X, k, E.ref, Y), [J, ee] = e.useState(!1), te = qr(), ne = Xr({
            props: o,
            muiFormControl: te,
            states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
          });
        ne.focused = te ? te.focused : J, e.useEffect((() => {
          !te && f && J && (ee(!1), B && B())
        }), [te, f, J, B]);
        const re = te && te.onFilled, oe = te && te.onEmpty, ae = e.useCallback((e => {
          kl(e) ? re && re() : oe && oe()
        }), [re, oe]);
        (0, ye.Z)((() => {
          G && ae({value: K})
        }), [K, ae, G]), e.useEffect((() => {
          ae(X.current)
        }), []);
        let ie = g, le = E;
        A && "input" === ie && (le = L ? (0, y.Z)({type: void 0, minRows: L, maxRows: L}, le) : (0, y.Z)({
          type: void 0,
          maxRows: F,
          minRows: S
        }, le), ie = xl), e.useEffect((() => {
          te && te.setAdornedStart(Boolean(H))
        }), [te, H]);
        const se = (0, y.Z)({}, o, {
          color: ne.color || "primary",
          disabled: ne.disabled,
          endAdornment: m,
          error: ne.error,
          focused: ne.focused,
          formControl: te,
          fullWidth: h,
          hiddenLabel: ne.hiddenLabel,
          multiline: A,
          size: ne.size,
          startAdornment: H,
          type: V
        }), ce = (e => {
          const {
            classes: t,
            color: n,
            disabled: r,
            error: o,
            endAdornment: a,
            focused: i,
            formControl: l,
            fullWidth: s,
            hiddenLabel: c,
            multiline: u,
            readOnly: d,
            size: f,
            startAdornment: p,
            type: m
          } = e, h = {
            root: ["root", `color${(0, He.Z)(n)}`, r && "disabled", o && "error", s && "fullWidth", i && "focused", l && "formControl", "small" === f && "sizeSmall", u && "multiline", p && "adornedStart", a && "adornedEnd", c && "hiddenLabel", d && "readOnly"],
            input: ["input", r && "disabled", "search" === m && "inputTypeSearch", u && "inputMultiline", "small" === f && "inputSizeSmall", c && "inputHiddenLabel", p && "inputAdornedStart", a && "inputAdornedEnd", d && "readOnly"]
          };
          return (0, C.Z)(h, Fl, t)
        })(se), ue = W.root || c.Root || Bl, de = $.root || u.root || {}, fe = W.input || c.Input || jl;
        return le = (0, y.Z)({}, le, null != (r = $.input) ? r : u.input), (0, D.jsxs)(e.Fragment, {
          children: [!p && Pl, (0, D.jsxs)(ue, (0, y.Z)({}, de, !P(ue) && {ownerState: (0, y.Z)({}, se, de.ownerState)}, {
            ref: n,
            onClick: e => {
              X.current && e.currentTarget === e.target && X.current.focus(), R && R(e)
            }
          }, q, {
            className: (0, x.Z)(ce.root, de.className, s),
            children: [H, (0, D.jsx)(Ur.Provider, {
              value: null,
              children: (0, D.jsx)(fe, (0, y.Z)({
                ownerState: se,
                "aria-invalid": ne.error,
                "aria-describedby": a,
                autoComplete: i,
                autoFocus: l,
                defaultValue: d,
                disabled: ne.disabled,
                id: v,
                onAnimationStart: e => {
                  ae("mui-auto-fill-cancel" === e.animationName ? X.current : {value: "x"})
                },
                name: Z,
                placeholder: O,
                readOnly: I,
                required: ne.required,
                rows: L,
                value: K,
                onKeyDown: _,
                onKeyUp: T,
                type: V
              }, le, !P(fe) && {as: ie, ownerState: (0, y.Z)({}, se, le.ownerState)}, {
                ref: Q,
                className: (0, x.Z)(ce.input, le.className),
                onBlur: e => {
                  B && B(e), E.onBlur && E.onBlur(e), te && te.onBlur ? te.onBlur(e) : ee(!1)
                },
                onChange: (e, ...t) => {
                  if (!G) {
                    const t = e.target || X.current;
                    if (null == t) throw new Error((0, pl.Z)(1));
                    ae({value: t.value})
                  }
                  E.onChange && E.onChange(e, ...t), j && j(e, ...t)
                },
                onFocus: e => {
                  ne.disabled ? e.stopPropagation() : (N && N(e), E.onFocus && E.onFocus(e), te && te.onFocus ? te.onFocus(e) : ee(!0))
                }
              }))
            }), m, z ? z((0, y.Z)({}, ne, {startAdornment: H})) : null]
          }))]
        })
      })), Ml = Rl;
    
    function Nl(e) {
      return (0, S.Z)("MuiInput", e)
    }
    
    const _l = (0, y.Z)({}, Sl, (0, F.Z)("MuiInput", ["root", "underline", "input"])),
      Tl = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"],
      Ol = (0, E.ZP)(Bl, {
        shouldForwardProp: e => (0, E.FO)(e) || "classes" === e,
        name: "MuiInput",
        slot: "Root",
        overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [...Dl(e, t), !n.disableUnderline && t.underline]
        }
      })((({theme: e, ownerState: t}) => {
        let n = "light" === e.palette.mode ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
        return e.vars && (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), (0, y.Z)({position: "relative"}, t.formControl && {"label + &": {marginTop: 16}}, !t.disableUnderline && {
          "&:after": {
            borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut
            }),
            pointerEvents: "none"
          },
          [`&.${_l.focused}:after`]: {transform: "scaleX(1) translateX(0)"},
          [`&.${_l.error}`]: {"&:before, &:after": {borderBottomColor: (e.vars || e).palette.error.main}},
          "&:before": {
            borderBottom: `1px solid ${n}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", {duration: e.transitions.duration.shorter}),
            pointerEvents: "none"
          },
          [`&:hover:not(.${_l.disabled}, .${_l.error}):before`]: {
            borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
            "@media (hover: none)": {borderBottom: `1px solid ${n}`}
          },
          [`&.${_l.disabled}:before`]: {borderBottomStyle: "dotted"}
        })
      })), Il = (0, E.ZP)(jl, {name: "MuiInput", slot: "Input", overridesResolver: Zl})({}),
      zl = e.forwardRef((function (e, t) {
        var n, r, o, a;
        const i = (0, w.Z)({props: e, name: "MuiInput"}), {
            disableUnderline: l,
            components: s = {},
            componentsProps: c,
            fullWidth: u = !1,
            inputComponent: d = "input",
            multiline: f = !1,
            slotProps: p,
            slots: m = {},
            type: h = "text"
          } = i, v = (0, b.Z)(i, Tl), g = (e => {
            const {classes: t, disableUnderline: n} = e, r = {root: ["root", !n && "underline"], input: ["input"]},
              o = (0, C.Z)(r, Nl, t);
            return (0, y.Z)({}, t, o)
          })(i), x = {root: {ownerState: {disableUnderline: l}}},
          E = (null != p ? p : c) ? (0, Le.Z)(null != p ? p : c, x) : x,
          k = null != (n = null != (r = m.root) ? r : s.Root) ? n : Ol,
          F = null != (o = null != (a = m.input) ? a : s.Input) ? o : Il;
        return (0, D.jsx)(Ml, (0, y.Z)({
          slots: {root: k, input: F},
          slotProps: E,
          fullWidth: u,
          inputComponent: d,
          multiline: f,
          ref: t,
          type: h
        }, v, {classes: g}))
      }));
    zl.muiName = "Input";
    const Ll = zl;
    
    function $l(e) {
      return (0, S.Z)("MuiFilledInput", e)
    }
    
    const Wl = (0, y.Z)({}, Sl, (0, F.Z)("MuiFilledInput", ["root", "underline", "input"])),
      Hl = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"],
      Vl = (0, E.ZP)(Bl, {
        shouldForwardProp: e => (0, E.FO)(e) || "classes" === e,
        name: "MuiFilledInput",
        slot: "Root",
        overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [...Dl(e, t), !n.disableUnderline && t.underline]
        }
      })((({theme: e, ownerState: t}) => {
        var n;
        const r = "light" === e.palette.mode, o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
          a = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
          i = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
          l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
        return (0, y.Z)({
          position: "relative",
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a,
          borderTopLeftRadius: (e.vars || e).shape.borderRadius,
          borderTopRightRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          "&:hover": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : i,
            "@media (hover: none)": {backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a}
          },
          [`&.${Wl.focused}`]: {backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a},
          [`&.${Wl.disabled}`]: {backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l}
        }, !t.disableUnderline && {
          "&:after": {
            borderBottom: `2px solid ${null == (n = (e.vars || e).palette[t.color || "primary"]) ? void 0 : n.main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut
            }),
            pointerEvents: "none"
          },
          [`&.${Wl.focused}:after`]: {transform: "scaleX(1) translateX(0)"},
          [`&.${Wl.error}`]: {"&:before, &:after": {borderBottomColor: (e.vars || e).palette.error.main}},
          "&:before": {
            borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", {duration: e.transitions.duration.shorter}),
            pointerEvents: "none"
          },
          [`&:hover:not(.${Wl.disabled}, .${Wl.error}):before`]: {borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`},
          [`&.${Wl.disabled}:before`]: {borderBottomStyle: "dotted"}
        }, t.startAdornment && {paddingLeft: 12}, t.endAdornment && {paddingRight: 12}, t.multiline && (0, y.Z)({padding: "25px 12px 8px"}, "small" === t.size && {
          paddingTop: 21,
          paddingBottom: 4
        }, t.hiddenLabel && {paddingTop: 16, paddingBottom: 17}))
      })), Ul = (0, E.ZP)(jl, {name: "MuiFilledInput", slot: "Input", overridesResolver: Zl})((({
                                                                                                  theme: e,
                                                                                                  ownerState: t
                                                                                                }) => (0, y.Z)({
        paddingTop: 25,
        paddingRight: 12,
        paddingBottom: 8,
        paddingLeft: 12
      }, !e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow: "light" === e.palette.mode ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: "light" === e.palette.mode ? null : "#fff",
          caretColor: "light" === e.palette.mode ? null : "#fff",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit"
        }
      }, e.vars && {
        "&:-webkit-autofill": {borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit"},
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff"
          }
        }
      }, "small" === t.size && {paddingTop: 21, paddingBottom: 4}, t.hiddenLabel && {
        paddingTop: 16,
        paddingBottom: 17
      }, t.multiline && {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
      }, t.startAdornment && {paddingLeft: 0}, t.endAdornment && {paddingRight: 0}, t.hiddenLabel && "small" === t.size && {
        paddingTop: 8,
        paddingBottom: 9
      }))), ql = e.forwardRef((function (e, t) {
        var n, r, o, a;
        const i = (0, w.Z)({props: e, name: "MuiFilledInput"}), {
            components: l = {},
            componentsProps: s,
            fullWidth: c = !1,
            inputComponent: u = "input",
            multiline: d = !1,
            slotProps: f,
            slots: p = {},
            type: m = "text"
          } = i, h = (0, b.Z)(i, Hl), v = (0, y.Z)({}, i, {fullWidth: c, inputComponent: u, multiline: d, type: m}),
          g = (e => {
            const {classes: t, disableUnderline: n} = e, r = {root: ["root", !n && "underline"], input: ["input"]},
              o = (0, C.Z)(r, $l, t);
            return (0, y.Z)({}, t, o)
          })(i), x = {root: {ownerState: v}, input: {ownerState: v}},
          E = (null != f ? f : s) ? (0, Le.Z)(null != f ? f : s, x) : x,
          k = null != (n = null != (r = p.root) ? r : l.Root) ? n : Vl,
          F = null != (o = null != (a = p.input) ? a : l.Input) ? o : Ul;
        return (0, D.jsx)(Ml, (0, y.Z)({
          slots: {root: k, input: F},
          componentsProps: E,
          fullWidth: c,
          inputComponent: u,
          multiline: d,
          ref: t,
          type: m
        }, h, {classes: g}))
      }));
    ql.muiName = "Input";
    const Kl = ql;
    var Gl;
    const Xl = ["children", "classes", "className", "label", "notched"], Yl = (0, E.ZP)("fieldset")({
      textAlign: "left",
      position: "absolute",
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: "0 8px",
      pointerEvents: "none",
      borderRadius: "inherit",
      borderStyle: "solid",
      borderWidth: 1,
      overflow: "hidden",
      minWidth: "0%"
    }), Ql = (0, E.ZP)("legend")((({ownerState: e, theme: t}) => (0, y.Z)({
      float: "unset",
      width: "auto",
      overflow: "hidden"
    }, !e.withLabel && {
      padding: 0,
      lineHeight: "11px",
      transition: t.transitions.create("width", {duration: 150, easing: t.transitions.easing.easeOut})
    }, e.withLabel && (0, y.Z)({
      display: "block",
      padding: 0,
      height: 11,
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: .01,
      transition: t.transitions.create("max-width", {duration: 50, easing: t.transitions.easing.easeOut}),
      whiteSpace: "nowrap",
      "& > span": {paddingLeft: 5, paddingRight: 5, display: "inline-block", opacity: 0, visibility: "visible"}
    }, e.notched && {
      maxWidth: "100%",
      transition: t.transitions.create("max-width", {duration: 100, easing: t.transitions.easing.easeOut, delay: 50})
    }))));
    
    function Jl(e) {
      return (0, S.Z)("MuiOutlinedInput", e)
    }
    
    const es = (0, y.Z)({}, Sl, (0, F.Z)("MuiOutlinedInput", ["root", "notchedOutline", "input"])),
      ts = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"],
      ns = (0, E.ZP)(Bl, {
        shouldForwardProp: e => (0, E.FO)(e) || "classes" === e,
        name: "MuiOutlinedInput",
        slot: "Root",
        overridesResolver: Dl
      })((({theme: e, ownerState: t}) => {
        const n = "light" === e.palette.mode ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
        return (0, y.Z)({
          position: "relative",
          borderRadius: (e.vars || e).shape.borderRadius,
          [`&:hover .${es.notchedOutline}`]: {borderColor: (e.vars || e).palette.text.primary},
          "@media (hover: none)": {[`&:hover .${es.notchedOutline}`]: {borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n}},
          [`&.${es.focused} .${es.notchedOutline}`]: {borderColor: (e.vars || e).palette[t.color].main, borderWidth: 2},
          [`&.${es.error} .${es.notchedOutline}`]: {borderColor: (e.vars || e).palette.error.main},
          [`&.${es.disabled} .${es.notchedOutline}`]: {borderColor: (e.vars || e).palette.action.disabled}
        }, t.startAdornment && {paddingLeft: 14}, t.endAdornment && {paddingRight: 14}, t.multiline && (0, y.Z)({padding: "16.5px 14px"}, "small" === t.size && {padding: "8.5px 14px"}))
      })), rs = (0, E.ZP)((function (e) {
        const {className: t, label: n, notched: r} = e, o = (0, b.Z)(e, Xl), a = null != n && "" !== n,
          i = (0, y.Z)({}, e, {notched: r, withLabel: a});
        return (0, D.jsx)(Yl, (0, y.Z)({
          "aria-hidden": !0,
          className: t,
          ownerState: i
        }, o, {
          children: (0, D.jsx)(Ql, {
            ownerState: i,
            children: a ? (0, D.jsx)("span", {children: n}) : Gl || (Gl = (0, D.jsx)("span", {
              className: "notranslate",
              children: "​"
            }))
          })
        }))
      }), {
        name: "MuiOutlinedInput",
        slot: "NotchedOutline",
        overridesResolver: (e, t) => t.notchedOutline
      })((({theme: e}) => {
        const t = "light" === e.palette.mode ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
        return {borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t}
      })), os = (0, E.ZP)(jl, {name: "MuiOutlinedInput", slot: "Input", overridesResolver: Zl})((({
                                                                                                    theme: e,
                                                                                                    ownerState: t
                                                                                                  }) => (0, y.Z)({padding: "16.5px 14px"}, !e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow: "light" === e.palette.mode ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: "light" === e.palette.mode ? null : "#fff",
          caretColor: "light" === e.palette.mode ? null : "#fff",
          borderRadius: "inherit"
        }
      }, e.vars && {
        "&:-webkit-autofill": {borderRadius: "inherit"},
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff"
          }
        }
      }, "small" === t.size && {padding: "8.5px 14px"}, t.multiline && {padding: 0}, t.startAdornment && {paddingLeft: 0}, t.endAdornment && {paddingRight: 0}))),
      as = e.forwardRef((function (t, n) {
        var r, o, a, i, l;
        const s = (0, w.Z)({props: t, name: "MuiOutlinedInput"}), {
            components: c = {},
            fullWidth: u = !1,
            inputComponent: d = "input",
            label: f,
            multiline: p = !1,
            notched: m,
            slots: h = {},
            type: v = "text"
          } = s, g = (0, b.Z)(s, ts), x = (e => {
            const {classes: t} = e,
              n = (0, C.Z)({root: ["root"], notchedOutline: ["notchedOutline"], input: ["input"]}, Jl, t);
            return (0, y.Z)({}, t, n)
          })(s), E = qr(), k = Xr({props: s, muiFormControl: E, states: ["required"]}), F = (0, y.Z)({}, s, {
            color: k.color || "primary",
            disabled: k.disabled,
            error: k.error,
            focused: k.focused,
            formControl: E,
            fullWidth: u,
            hiddenLabel: k.hiddenLabel,
            multiline: p,
            size: k.size,
            type: v
          }), S = null != (r = null != (o = h.root) ? o : c.Root) ? r : ns,
          A = null != (a = null != (i = h.input) ? i : c.Input) ? a : os;
        return (0, D.jsx)(Ml, (0, y.Z)({
          slots: {root: S, input: A},
          renderSuffix: t => (0, D.jsx)(rs, {
            ownerState: F,
            className: x.notchedOutline,
            label: null != f && "" !== f && k.required ? l || (l = (0, D.jsxs)(e.Fragment, {children: [f, " ", "*"]})) : f,
            notched: void 0 !== m ? m : Boolean(t.startAdornment || t.filled || t.focused)
          }),
          fullWidth: u,
          inputComponent: d,
          multiline: p,
          ref: n,
          type: v
        }, g, {classes: (0, y.Z)({}, x, {notchedOutline: null})}))
      }));
    as.muiName = "Input";
    const is = as;
    
    function ls(e) {
      return (0, S.Z)("MuiFormLabel", e)
    }
    
    const ss = (0, F.Z)("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]),
      cs = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"],
      us = (0, E.ZP)("label", {
        name: "MuiFormLabel",
        slot: "Root",
        overridesResolver: ({ownerState: e}, t) => (0, y.Z)({}, t.root, "secondary" === e.color && t.colorSecondary, e.filled && t.filled)
      })((({
             theme: e,
             ownerState: t
           }) => (0, y.Z)({color: (e.vars || e).palette.text.secondary}, e.typography.body1, {
        lineHeight: "1.4375em",
        padding: 0,
        position: "relative",
        [`&.${ss.focused}`]: {color: (e.vars || e).palette[t.color].main},
        [`&.${ss.disabled}`]: {color: (e.vars || e).palette.text.disabled},
        [`&.${ss.error}`]: {color: (e.vars || e).palette.error.main}
      }))), ds = (0, E.ZP)("span", {
        name: "MuiFormLabel",
        slot: "Asterisk",
        overridesResolver: (e, t) => t.asterisk
      })((({theme: e}) => ({[`&.${ss.error}`]: {color: (e.vars || e).palette.error.main}}))),
      fs = e.forwardRef((function (e, t) {
        const n = (0, w.Z)({props: e, name: "MuiFormLabel"}), {children: r, className: o, component: a = "label"} = n,
          i = (0, b.Z)(n, cs), l = Xr({
            props: n,
            muiFormControl: qr(),
            states: ["color", "required", "focused", "disabled", "error", "filled"]
          }), s = (0, y.Z)({}, n, {
            color: l.color || "primary",
            component: a,
            disabled: l.disabled,
            error: l.error,
            filled: l.filled,
            focused: l.focused,
            required: l.required
          }), c = (e => {
            const {classes: t, color: n, focused: r, disabled: o, error: a, filled: i, required: l} = e, s = {
              root: ["root", `color${(0, He.Z)(n)}`, o && "disabled", a && "error", i && "filled", r && "focused", l && "required"],
              asterisk: ["asterisk", a && "error"]
            };
            return (0, C.Z)(s, ls, t)
          })(s);
        return (0, D.jsxs)(us, (0, y.Z)({
          as: a,
          ownerState: s,
          className: (0, x.Z)(c.root, o),
          ref: t
        }, i, {
          children: [r, l.required && (0, D.jsxs)(ds, {
            ownerState: s,
            "aria-hidden": !0,
            className: c.asterisk,
            children: [" ", "*"]
          })]
        }))
      }));
    
    function ps(e) {
      return (0, S.Z)("MuiInputLabel", e)
    }
    
    (0, F.Z)("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
    const ms = ["disableAnimation", "margin", "shrink", "variant", "className"], hs = (0, E.ZP)(fs, {
      shouldForwardProp: e => (0, E.FO)(e) || "classes" === e,
      name: "MuiInputLabel",
      slot: "Root",
      overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [{[`& .${ss.asterisk}`]: t.asterisk}, t.root, n.formControl && t.formControl, "small" === n.size && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, t[n.variant]]
      }
    })((({theme: e, ownerState: t}) => (0, y.Z)({
      display: "block",
      transformOrigin: "top left",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100%"
    }, t.formControl && {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "translate(0, 20px) scale(1)"
    }, "small" === t.size && {transform: "translate(0, 17px) scale(1)"}, t.shrink && {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }, !t.disableAnimation && {
      transition: e.transitions.create(["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      })
    }, "filled" === t.variant && (0, y.Z)({
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }, "small" === t.size && {transform: "translate(12px, 13px) scale(1)"}, t.shrink && (0, y.Z)({
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }, "small" === t.size && {transform: "translate(12px, 4px) scale(0.75)"})), "outlined" === t.variant && (0, y.Z)({
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }, "small" === t.size && {transform: "translate(14px, 9px) scale(1)"}, t.shrink && {
      userSelect: "none",
      pointerEvents: "auto",
      maxWidth: "calc(133% - 24px)",
      transform: "translate(14px, -9px) scale(0.75)"
    })))), vs = e.forwardRef((function (e, t) {
      const n = (0, w.Z)({name: "MuiInputLabel", props: e}), {disableAnimation: r = !1, shrink: o, className: a} = n,
        i = (0, b.Z)(n, ms), l = qr();
      let s = o;
      void 0 === s && l && (s = l.filled || l.focused || l.adornedStart);
      const c = Xr({props: n, muiFormControl: l, states: ["size", "variant", "required"]}), u = (0, y.Z)({}, n, {
        disableAnimation: r,
        formControl: l,
        shrink: s,
        size: c.size,
        variant: c.variant,
        required: c.required
      }), d = (e => {
        const {classes: t, formControl: n, size: r, shrink: o, disableAnimation: a, variant: i, required: l} = e, s = {
          root: ["root", n && "formControl", !a && "animated", o && "shrink", "small" === r && "sizeSmall", i],
          asterisk: [l && "asterisk"]
        }, c = (0, C.Z)(s, ps, t);
        return (0, y.Z)({}, t, c)
      })(u);
      return (0, D.jsx)(hs, (0, y.Z)({
        "data-shrink": s,
        ownerState: u,
        ref: t,
        className: (0, x.Z)(d.root, a)
      }, i, {classes: d}))
    }));
    
    function gs(e) {
      return (0, S.Z)("MuiFormControl", e)
    }
    
    (0, F.Z)("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
    const bs = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"],
      ys = (0, E.ZP)("div", {
        name: "MuiFormControl",
        slot: "Root",
        overridesResolver: ({ownerState: e}, t) => (0, y.Z)({}, t.root, t[`margin${(0, He.Z)(e.margin)}`], e.fullWidth && t.fullWidth)
      })((({ownerState: e}) => (0, y.Z)({
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top"
      }, "normal" === e.margin && {marginTop: 16, marginBottom: 8}, "dense" === e.margin && {
        marginTop: 8,
        marginBottom: 4
      }, e.fullWidth && {width: "100%"}))), xs = e.forwardRef((function (t, n) {
        const r = (0, w.Z)({props: t, name: "MuiFormControl"}), {
          children: o,
          className: a,
          color: i = "primary",
          component: l = "div",
          disabled: s = !1,
          error: c = !1,
          focused: u,
          fullWidth: d = !1,
          hiddenLabel: f = !1,
          margin: p = "none",
          required: m = !1,
          size: h = "medium",
          variant: v = "outlined"
        } = r, g = (0, b.Z)(r, bs), E = (0, y.Z)({}, r, {
          color: i,
          component: l,
          disabled: s,
          error: c,
          fullWidth: d,
          hiddenLabel: f,
          margin: p,
          required: m,
          size: h,
          variant: v
        }), k = (e => {
          const {classes: t, margin: n, fullWidth: r} = e,
            o = {root: ["root", "none" !== n && `margin${(0, He.Z)(n)}`, r && "fullWidth"]};
          return (0, C.Z)(o, gs, t)
        })(E), [F, S] = e.useState((() => {
          let t = !1;
          return o && e.Children.forEach(o, (e => {
            if (!(0, be.Z)(e, ["Input", "Select"])) return;
            const n = (0, be.Z)(e, ["Select"]) ? e.props.input : e;
            n && n.props.startAdornment && (t = !0)
          })), t
        })), [A, Z] = e.useState((() => {
          let t = !1;
          return o && e.Children.forEach(o, (e => {
            (0, be.Z)(e, ["Input", "Select"]) && kl(e.props, !0) && (t = !0)
          })), t
        })), [B, j] = e.useState(!1);
        s && B && j(!1);
        const P = void 0 === u || s ? B : u;
        let R;
        const M = e.useMemo((() => ({
          adornedStart: F,
          setAdornedStart: S,
          color: i,
          disabled: s,
          error: c,
          filled: A,
          focused: P,
          fullWidth: d,
          hiddenLabel: f,
          size: h,
          onBlur: () => {
            j(!1)
          },
          onEmpty: () => {
            Z(!1)
          },
          onFilled: () => {
            Z(!0)
          },
          onFocus: () => {
            j(!0)
          },
          registerEffect: R,
          required: m,
          variant: v
        })), [F, i, s, c, A, P, d, f, R, m, h, v]);
        return (0, D.jsx)(Ur.Provider, {
          value: M,
          children: (0, D.jsx)(ys, (0, y.Z)({
            as: l,
            ownerState: E,
            className: (0, x.Z)(k.root, a),
            ref: n
          }, g, {children: o}))
        })
      }));
    
    function Cs(e) {
      return (0, S.Z)("MuiFormHelperText", e)
    }
    
    const Es = (0, F.Z)("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
    var ws;
    const ks = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"],
      Fs = (0, E.ZP)("p", {
        name: "MuiFormHelperText", slot: "Root", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.root, n.size && t[`size${(0, He.Z)(n.size)}`], n.contained && t.contained, n.filled && t.filled]
        }
      })((({
             theme: e,
             ownerState: t
           }) => (0, y.Z)({color: (e.vars || e).palette.text.secondary}, e.typography.caption, {
        textAlign: "left",
        marginTop: 3,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        [`&.${Es.disabled}`]: {color: (e.vars || e).palette.text.disabled},
        [`&.${Es.error}`]: {color: (e.vars || e).palette.error.main}
      }, "small" === t.size && {marginTop: 4}, t.contained && {marginLeft: 14, marginRight: 14}))),
      Ss = e.forwardRef((function (e, t) {
        const n = (0, w.Z)({props: e, name: "MuiFormHelperText"}), {children: r, className: o, component: a = "p"} = n,
          i = (0, b.Z)(n, ks), l = Xr({
            props: n,
            muiFormControl: qr(),
            states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
          }), s = (0, y.Z)({}, n, {
            component: a,
            contained: "filled" === l.variant || "outlined" === l.variant,
            variant: l.variant,
            size: l.size,
            disabled: l.disabled,
            error: l.error,
            filled: l.filled,
            focused: l.focused,
            required: l.required
          }), c = (e => {
            const {classes: t, contained: n, size: r, disabled: o, error: a, filled: i, focused: l, required: s} = e,
              c = {root: ["root", o && "disabled", a && "error", r && `size${(0, He.Z)(r)}`, n && "contained", l && "focused", i && "filled", s && "required"]};
            return (0, C.Z)(c, Cs, t)
          })(s);
        return (0, D.jsx)(Fs, (0, y.Z)({
          as: a,
          ownerState: s,
          className: (0, x.Z)(c.root, o),
          ref: t
        }, i, {children: " " === r ? ws || (ws = (0, D.jsx)("span", {className: "notranslate", children: "​"})) : r}))
      }));
    
    function As(e) {
      const t = e.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t)
    }
    
    const Ds = As,
      Zs = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
    
    function Bs(e, t, n) {
      return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild
    }
    
    function js(e, t, n) {
      return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild
    }
    
    function Ps(e, t) {
      if (void 0 === t) return !0;
      let n = e.innerText;
      return void 0 === n && (n = e.textContent), n = n.trim().toLowerCase(), 0 !== n.length && (t.repeating ? n[0] === t.keys[0] : 0 === n.indexOf(t.keys.join("")))
    }
    
    function Rs(e, t, n, r, o, a) {
      let i = !1, l = o(e, t, !!t && n);
      for (; l;) {
        if (l === e.firstChild) {
          if (i) return !1;
          i = !0
        }
        const t = !r && (l.disabled || "true" === l.getAttribute("aria-disabled"));
        if (l.hasAttribute("tabindex") && Ps(l, a) && !t) return l.focus(), !0;
        l = o(e, l, n)
      }
      return !1
    }
    
    const Ms = e.forwardRef((function (t, n) {
      const {
          actions: r,
          autoFocus: o = !1,
          autoFocusItem: a = !1,
          children: i,
          className: l,
          disabledItemsFocusable: s = !1,
          disableListWrap: c = !1,
          onKeyDown: u,
          variant: d = "selectedMenu"
        } = t, f = (0, b.Z)(t, Zs), p = e.useRef(null),
        m = e.useRef({keys: [], repeating: !0, previousKeyMatched: !0, lastTime: null});
      (0, ye.Z)((() => {
        o && p.current.focus()
      }), [o]), e.useImperativeHandle(r, (() => ({
        adjustStyleForScrollbar: (e, t) => {
          const n = !p.current.style.width;
          if (e.clientHeight < p.current.clientHeight && n) {
            const n = `${Ds((0, Oi.Z)(e))}px`;
            p.current.style["rtl" === t.direction ? "paddingLeft" : "paddingRight"] = n, p.current.style.width = `calc(100% + ${n})`
          }
          return p.current
        }
      })), []);
      const h = (0, M.Z)(p, n);
      let v = -1;
      e.Children.forEach(i, ((t, n) => {
        e.isValidElement(t) && (t.props.disabled || ("selectedMenu" === d && t.props.selected || -1 === v) && (v = n))
      }));
      const g = e.Children.map(i, ((t, n) => {
        if (n === v) {
          const n = {};
          return a && (n.autoFocus = !0), void 0 === t.props.tabIndex && "selectedMenu" === d && (n.tabIndex = 0), e.cloneElement(t, n)
        }
        return t
      }));
      return (0, D.jsx)(j, (0, y.Z)({
        role: "menu", ref: h, className: l, onKeyDown: e => {
          const t = p.current, n = e.key, r = (0, Oi.Z)(t).activeElement;
          if ("ArrowDown" === n) e.preventDefault(), Rs(t, r, c, s, Bs); else if ("ArrowUp" === n) e.preventDefault(), Rs(t, r, c, s, js); else if ("Home" === n) e.preventDefault(), Rs(t, null, c, s, Bs); else if ("End" === n) e.preventDefault(), Rs(t, null, c, s, js); else if (1 === n.length) {
            const o = m.current, a = n.toLowerCase(), i = performance.now();
            o.keys.length > 0 && (i - o.lastTime > 500 ? (o.keys = [], o.repeating = !0, o.previousKeyMatched = !0) : o.repeating && a !== o.keys[0] && (o.repeating = !1)), o.lastTime = i, o.keys.push(a);
            const l = r && !o.repeating && Ps(r, o);
            o.previousKeyMatched && (l || Rs(t, r, !1, s, Bs, o)) ? e.preventDefault() : o.previousKeyMatched = !1
          }
          u && u(e)
        }, tabIndex: o ? 0 : -1
      }, f, {children: g}))
    }));
    var Ns = o(9064);
    
    function _s(e, t) {
      t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
    }
    
    function Ts(e) {
      return parseInt((0, ml.Z)(e).getComputedStyle(e).paddingRight, 10) || 0
    }
    
    function Os(e, t, n, r, o) {
      const a = [t, n, ...r];
      [].forEach.call(e.children, (e => {
        const t = -1 === a.indexOf(e), n = !function (e) {
          const t = -1 !== ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName),
            n = "INPUT" === e.tagName && "hidden" === e.getAttribute("type");
          return t || n
        }(e);
        t && n && _s(e, o)
      }))
    }
    
    function Is(e, t) {
      let n = -1;
      return e.some(((e, r) => !!t(e) && (n = r, !0))), n
    }
    
    const zs = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
    
    function Ls(e) {
      const t = [], n = [];
      return Array.from(e.querySelectorAll(zs)).forEach(((e, r) => {
        const o = function (e) {
          const t = parseInt(e.getAttribute("tabindex") || "", 10);
          return Number.isNaN(t) ? "true" === e.contentEditable || ("AUDIO" === e.nodeName || "VIDEO" === e.nodeName || "DETAILS" === e.nodeName) && null === e.getAttribute("tabindex") ? 0 : e.tabIndex : t
        }(e);
        -1 !== o && function (e) {
          return !(e.disabled || "INPUT" === e.tagName && "hidden" === e.type || function (e) {
            if ("INPUT" !== e.tagName || "radio" !== e.type) return !1;
            if (!e.name) return !1;
            const t = t => e.ownerDocument.querySelector(`input[type="radio"] ${t}`);
            let n = t(`[name="${e.name}"]:checked`);
            return n || (n = t(`[name="${e.name}"]`)), n !== e
          }(e))
        }(e) && (0 === o ? t.push(e) : n.push({documentOrder: r, tabIndex: o, node: e}))
      })), n.sort(((e, t) => e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex)).map((e => e.node)).concat(t)
    }
    
    function $s() {
      return !0
    }
    
    const Ws = function (t) {
      const {
          children: n,
          disableAutoFocus: r = !1,
          disableEnforceFocus: o = !1,
          disableRestoreFocus: a = !1,
          getTabbable: i = Ls,
          isEnabled: l = $s,
          open: s
        } = t, c = e.useRef(!1), u = e.useRef(null), d = e.useRef(null), f = e.useRef(null), p = e.useRef(null),
        m = e.useRef(!1), h = e.useRef(null), v = (0, nt.Z)(n.ref, h), g = e.useRef(null);
      e.useEffect((() => {
        s && h.current && (m.current = !r)
      }), [r, s]), e.useEffect((() => {
        if (!s || !h.current) return;
        const e = (0, ot.Z)(h.current);
        return h.current.contains(e.activeElement) || (h.current.hasAttribute("tabIndex") || h.current.setAttribute("tabIndex", "-1"), m.current && h.current.focus()), () => {
          a || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null)
        }
      }), [s]), e.useEffect((() => {
        if (!s || !h.current) return;
        const e = (0, ot.Z)(h.current), t = t => {
          const {current: n} = h;
          if (null !== n) if (e.hasFocus() && !o && l() && !c.current) {
            if (!n.contains(e.activeElement)) {
              if (t && p.current !== t.target || e.activeElement !== p.current) p.current = null; else if (null !== p.current) return;
              if (!m.current) return;
              let o = [];
              if (e.activeElement !== u.current && e.activeElement !== d.current || (o = i(h.current)), o.length > 0) {
                var r, a;
                const e = Boolean((null == (r = g.current) ? void 0 : r.shiftKey) && "Tab" === (null == (a = g.current) ? void 0 : a.key)),
                  t = o[0], n = o[o.length - 1];
                "string" != typeof t && "string" != typeof n && (e ? n.focus() : t.focus())
              } else n.focus()
            }
          } else c.current = !1
        }, n = t => {
          g.current = t, !o && l() && "Tab" === t.key && e.activeElement === h.current && t.shiftKey && (c.current = !0, d.current && d.current.focus())
        };
        e.addEventListener("focusin", t), e.addEventListener("keydown", n, !0);
        const r = setInterval((() => {
          e.activeElement && "BODY" === e.activeElement.tagName && t(null)
        }), 50);
        return () => {
          clearInterval(r), e.removeEventListener("focusin", t), e.removeEventListener("keydown", n, !0)
        }
      }), [r, o, a, l, s, i]);
      const b = e => {
        null === f.current && (f.current = e.relatedTarget), m.current = !0
      };
      return (0, D.jsxs)(e.Fragment, {
        children: [(0, D.jsx)("div", {
          tabIndex: s ? 0 : -1,
          onFocus: b,
          ref: u,
          "data-testid": "sentinelStart"
        }), e.cloneElement(n, {
          ref: v, onFocus: e => {
            null === f.current && (f.current = e.relatedTarget), m.current = !0, p.current = e.target;
            const t = n.props.onFocus;
            t && t(e)
          }
        }), (0, D.jsx)("div", {tabIndex: s ? 0 : -1, onFocus: b, ref: d, "data-testid": "sentinelEnd"})]
      })
    };
    
    function Hs(e) {
      return (0, S.Z)("MuiModal", e)
    }
    
    (0, F.Z)("MuiModal", ["root", "hidden"]);
    const Vs = ["children", "classes", "closeAfterTransition", "component", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"],
      Us = new class {
        constructor() {
          this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = []
        }
        
        add(e, t) {
          let n = this.modals.indexOf(e);
          if (-1 !== n) return n;
          n = this.modals.length, this.modals.push(e), e.modalRef && _s(e.modalRef, !1);
          const r = function (e) {
            const t = [];
            return [].forEach.call(e.children, (e => {
              "true" === e.getAttribute("aria-hidden") && t.push(e)
            })), t
          }(t);
          Os(t, e.mount, e.modalRef, r, !0);
          const o = Is(this.containers, (e => e.container === t));
          return -1 !== o ? (this.containers[o].modals.push(e), n) : (this.containers.push({
            modals: [e],
            container: t,
            restore: null,
            hiddenSiblings: r
          }), n)
        }
        
        mount(e, t) {
          const n = Is(this.containers, (t => -1 !== t.modals.indexOf(e))), r = this.containers[n];
          r.restore || (r.restore = function (e, t) {
            const n = [], r = e.container;
            if (!t.disableScrollLock) {
              if (function (e) {
                const t = (0, ot.Z)(e);
                return t.body === e ? (0, ml.Z)(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
              }(r)) {
                const e = As((0, ot.Z)(r));
                n.push({
                  value: r.style.paddingRight,
                  property: "padding-right",
                  el: r
                }), r.style.paddingRight = `${Ts(r) + e}px`;
                const t = (0, ot.Z)(r).querySelectorAll(".mui-fixed");
                [].forEach.call(t, (t => {
                  n.push({
                    value: t.style.paddingRight,
                    property: "padding-right",
                    el: t
                  }), t.style.paddingRight = `${Ts(t) + e}px`
                }))
              }
              let e;
              if (r.parentNode instanceof DocumentFragment) e = (0, ot.Z)(r).body; else {
                const t = r.parentElement, n = (0, ml.Z)(r);
                e = "HTML" === (null == t ? void 0 : t.nodeName) && "scroll" === n.getComputedStyle(t).overflowY ? t : r
              }
              n.push({value: e.style.overflow, property: "overflow", el: e}, {
                value: e.style.overflowX,
                property: "overflow-x",
                el: e
              }, {value: e.style.overflowY, property: "overflow-y", el: e}), e.style.overflow = "hidden"
            }
            return () => {
              n.forEach((({value: e, el: t, property: n}) => {
                e ? t.style.setProperty(n, e) : t.style.removeProperty(n)
              }))
            }
          }(r, t))
        }
        
        remove(e, t = !0) {
          const n = this.modals.indexOf(e);
          if (-1 === n) return n;
          const r = Is(this.containers, (t => -1 !== t.modals.indexOf(e))), o = this.containers[r];
          if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(n, 1), 0 === o.modals.length) o.restore && o.restore(), e.modalRef && _s(e.modalRef, t), Os(o.container, e.mount, e.modalRef, o.hiddenSiblings, !1), this.containers.splice(r, 1); else {
            const e = o.modals[o.modals.length - 1];
            e.modalRef && _s(e.modalRef, !1)
          }
          return n
        }
        
        isTopModal(e) {
          return this.modals.length > 0 && this.modals[this.modals.length - 1] === e
        }
      }, qs = e.forwardRef((function (t, n) {
        var r, o;
        const {
            children: a,
            classes: i,
            closeAfterTransition: l = !1,
            component: s,
            container: c,
            disableAutoFocus: u = !1,
            disableEnforceFocus: d = !1,
            disableEscapeKeyDown: f = !1,
            disablePortal: p = !1,
            disableRestoreFocus: m = !1,
            disableScrollLock: h = !1,
            hideBackdrop: v = !1,
            keepMounted: g = !1,
            manager: x = Us,
            onBackdropClick: E,
            onClose: w,
            onKeyDown: k,
            open: F,
            onTransitionEnter: S,
            onTransitionExited: A,
            slotProps: Z = {},
            slots: B = {}
          } = t, j = (0, b.Z)(t, Vs), [P, R] = e.useState(!F), M = e.useRef({}), N = e.useRef(null), _ = e.useRef(null),
          T = (0, nt.Z)(_, n), O = function (e) {
            return !!e && e.props.hasOwnProperty("in")
          }(a), I = null == (r = t["aria-hidden"]) || r,
          z = () => (M.current.modalRef = _.current, M.current.mountNode = N.current, M.current), L = () => {
            x.mount(z(), {disableScrollLock: h}), _.current && (_.current.scrollTop = 0)
          }, $ = (0, rt.Z)((() => {
            const e = function (e) {
              return "function" == typeof e ? e() : e
            }(c) || (0, ot.Z)(N.current).body;
            x.add(z(), e), _.current && L()
          })), W = e.useCallback((() => x.isTopModal(z())), [x]), H = (0, rt.Z)((e => {
            N.current = e, e && _.current && (F && W() ? L() : _s(_.current, I))
          })), V = e.useCallback((() => {
            x.remove(z(), I)
          }), [x, I]);
        e.useEffect((() => () => {
          V()
        }), [V]), e.useEffect((() => {
          F ? $() : O && l || V()
        }), [F, V, O, l, $]);
        const U = (0, y.Z)({}, t, {
          classes: i,
          closeAfterTransition: l,
          disableAutoFocus: u,
          disableEnforceFocus: d,
          disableEscapeKeyDown: f,
          disablePortal: p,
          disableRestoreFocus: m,
          disableScrollLock: h,
          exited: P,
          hideBackdrop: v,
          keepMounted: g
        }), q = (e => {
          const {open: t, exited: n, classes: r} = e, o = {root: ["root", !t && n && "hidden"], backdrop: ["backdrop"]};
          return (0, C.Z)(o, Hs, r)
        })(U), K = {};
        void 0 === a.props.tabIndex && (K.tabIndex = "-1"), O && (K.onEnter = (0, Ns.Z)((() => {
          R(!1), S && S()
        }), a.props.onEnter), K.onExited = (0, Ns.Z)((() => {
          R(!0), A && A(), l && V()
        }), a.props.onExited));
        const G = null != (o = null != s ? s : B.root) ? o : "div", X = Er({
          elementType: G,
          externalSlotProps: Z.root,
          externalForwardedProps: j,
          additionalProps: {
            ref: T, role: "presentation", onKeyDown: e => {
              k && k(e), "Escape" === e.key && W() && (f || (e.stopPropagation(), w && w(e, "escapeKeyDown")))
            }
          },
          className: q.root,
          ownerState: U
        }), Y = B.backdrop, Q = Er({
          elementType: Y, externalSlotProps: Z.backdrop, additionalProps: {
            "aria-hidden": !0, onClick: e => {
              e.target === e.currentTarget && (E && E(e), w && w(e, "backdropClick"))
            }, open: F
          }, className: q.backdrop, ownerState: U
        });
        return g || F || O && !P ? (0, D.jsx)(gr, {
          ref: H,
          container: c,
          disablePortal: p,
          children: (0, D.jsxs)(G, (0, y.Z)({}, X, {
            children: [!v && Y ? (0, D.jsx)(Y, (0, y.Z)({}, Q)) : null, (0, D.jsx)(Ws, {
              disableEnforceFocus: d,
              disableAutoFocus: u,
              disableRestoreFocus: m,
              isEnabled: W,
              open: F,
              children: e.cloneElement(a, K)
            })]
          }))
        }) : null
      })),
      Ks = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"],
      Gs = {entering: {opacity: 1}, entered: {opacity: 1}}, Xs = e.forwardRef((function (t, n) {
        const r = ct(), o = {
          enter: r.transitions.duration.enteringScreen,
          exit: r.transitions.duration.leavingScreen
        }, {
          addEndListener: a,
          appear: i = !0,
          children: l,
          easing: s,
          in: c,
          onEnter: u,
          onEntered: d,
          onEntering: f,
          onExit: p,
          onExited: m,
          onExiting: h,
          style: v,
          timeout: g = o,
          TransitionComponent: x = bt
        } = t, C = (0, b.Z)(t, Ks), E = e.useRef(null), w = (0, M.Z)(E, l.ref, n), k = e => t => {
          if (e) {
            const n = E.current;
            void 0 === t ? e(n) : e(n, t)
          }
        }, F = k(f), S = k(((e, t) => {
          yt(e);
          const n = xt({style: v, timeout: g, easing: s}, {mode: "enter"});
          e.style.webkitTransition = r.transitions.create("opacity", n), e.style.transition = r.transitions.create("opacity", n), u && u(e, t)
        })), A = k(d), Z = k(h), B = k((e => {
          const t = xt({style: v, timeout: g, easing: s}, {mode: "exit"});
          e.style.webkitTransition = r.transitions.create("opacity", t), e.style.transition = r.transitions.create("opacity", t), p && p(e)
        })), j = k(m);
        return (0, D.jsx)(x, (0, y.Z)({
          appear: i,
          in: c,
          nodeRef: E,
          onEnter: S,
          onEntered: A,
          onEntering: F,
          onExit: B,
          onExited: j,
          onExiting: Z,
          addEndListener: e => {
            a && a(E.current, e)
          },
          timeout: g
        }, C, {
          children: (t, n) => e.cloneElement(l, (0, y.Z)({
            style: (0, y.Z)({
              opacity: 0,
              visibility: "exited" !== t || c ? void 0 : "hidden"
            }, Gs[t], v, l.props.style), ref: w
          }, n))
        }))
      }));
    
    function Ys(e) {
      return (0, S.Z)("MuiBackdrop", e)
    }
    
    (0, F.Z)("MuiBackdrop", ["root", "invisible"]);
    const Qs = ["children", "component", "components", "componentsProps", "className", "invisible", "open", "slotProps", "slots", "transitionDuration", "TransitionComponent"],
      Js = (0, E.ZP)("div", {
        name: "MuiBackdrop", slot: "Root", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.root, n.invisible && t.invisible]
        }
      })((({ownerState: e}) => (0, y.Z)({
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent"
      }, e.invisible && {backgroundColor: "transparent"}))), ec = e.forwardRef((function (e, t) {
        var n, r, o;
        const a = (0, w.Z)({props: e, name: "MuiBackdrop"}), {
          children: i,
          component: l = "div",
          components: s = {},
          componentsProps: c = {},
          className: u,
          invisible: d = !1,
          open: f,
          slotProps: p = {},
          slots: m = {},
          transitionDuration: h,
          TransitionComponent: v = Xs
        } = a, g = (0, b.Z)(a, Qs), E = (0, y.Z)({}, a, {component: l, invisible: d}), k = (e => {
          const {classes: t, invisible: n} = e, r = {root: ["root", n && "invisible"]};
          return (0, C.Z)(r, Ys, t)
        })(E), F = null != (n = p.root) ? n : c.root;
        return (0, D.jsx)(v, (0, y.Z)({
          in: f,
          timeout: h
        }, g, {
          children: (0, D.jsx)(Js, (0, y.Z)({"aria-hidden": !0}, F, {
            as: null != (r = null != (o = m.root) ? o : s.Root) ? r : l,
            className: (0, x.Z)(k.root, u, null == F ? void 0 : F.className),
            ownerState: (0, y.Z)({}, E, null == F ? void 0 : F.ownerState),
            classes: k,
            ref: t,
            children: i
          }))
        }))
      })),
      tc = ["BackdropComponent", "BackdropProps", "closeAfterTransition", "children", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "slotProps", "slots", "theme"],
      nc = (0, E.ZP)("div", {
        name: "MuiModal", slot: "Root", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.root, !n.open && n.exited && t.hidden]
        }
      })((({theme: e, ownerState: t}) => (0, y.Z)({
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0
      }, !t.open && t.exited && {visibility: "hidden"}))),
      rc = (0, E.ZP)(ec, {name: "MuiModal", slot: "Backdrop", overridesResolver: (e, t) => t.backdrop})({zIndex: -1}),
      oc = e.forwardRef((function (t, n) {
        var r, o, a, i, l, s;
        const c = (0, w.Z)({name: "MuiModal", props: t}), {
            BackdropComponent: u = rc,
            BackdropProps: d,
            closeAfterTransition: f = !1,
            children: p,
            component: m,
            components: h = {},
            componentsProps: v = {},
            disableAutoFocus: g = !1,
            disableEnforceFocus: x = !1,
            disableEscapeKeyDown: C = !1,
            disablePortal: E = !1,
            disableRestoreFocus: k = !1,
            disableScrollLock: F = !1,
            hideBackdrop: S = !1,
            keepMounted: A = !1,
            slotProps: Z,
            slots: B,
            theme: j
          } = c, R = (0, b.Z)(c, tc), [M, N] = e.useState(!0), _ = {
            closeAfterTransition: f,
            disableAutoFocus: g,
            disableEnforceFocus: x,
            disableEscapeKeyDown: C,
            disablePortal: E,
            disableRestoreFocus: k,
            disableScrollLock: F,
            hideBackdrop: S,
            keepMounted: A
          }, T = (0, y.Z)({}, c, _, {exited: M}), O = (e => e.classes)(T),
          I = null != (r = null != (o = null == B ? void 0 : B.root) ? o : h.Root) ? r : nc,
          z = null != (a = null != (i = null == B ? void 0 : B.backdrop) ? i : h.Backdrop) ? a : u,
          L = null != (l = null == Z ? void 0 : Z.root) ? l : v.root,
          $ = null != (s = null == Z ? void 0 : Z.backdrop) ? s : v.backdrop;
        return (0, D.jsx)(qs, (0, y.Z)({
          slots: {root: I, backdrop: z},
          slotProps: {
            root: () => (0, y.Z)({}, xr(L, T), !P(I) && {as: m, theme: j}),
            backdrop: () => (0, y.Z)({}, d, xr($, T))
          },
          onTransitionEnter: () => N(!1),
          onTransitionExited: () => N(!0),
          ref: n
        }, R, {classes: O}, _, {children: p}))
      }));
    
    function ac(e) {
      return (0, S.Z)("MuiPopover", e)
    }
    
    (0, F.Z)("MuiPopover", ["root", "paper"]);
    const ic = ["onEntering"],
      lc = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
    
    function sc(e, t) {
      let n = 0;
      return "number" == typeof t ? n = t : "center" === t ? n = e.height / 2 : "bottom" === t && (n = e.height), n
    }
    
    function cc(e, t) {
      let n = 0;
      return "number" == typeof t ? n = t : "center" === t ? n = e.width / 2 : "right" === t && (n = e.width), n
    }
    
    function uc(e) {
      return [e.horizontal, e.vertical].map((e => "number" == typeof e ? `${e}px` : e)).join(" ")
    }
    
    function dc(e) {
      return "function" == typeof e ? e() : e
    }
    
    const fc = (0, E.ZP)(oc, {name: "MuiPopover", slot: "Root", overridesResolver: (e, t) => t.root})({}),
      pc = (0, E.ZP)(jt, {
        name: "MuiPopover",
        slot: "Paper",
        overridesResolver: (e, t) => t.paper
      })({
        position: "absolute",
        overflowY: "auto",
        overflowX: "hidden",
        minWidth: 16,
        minHeight: 16,
        maxWidth: "calc(100% - 32px)",
        maxHeight: "calc(100% - 32px)",
        outline: 0
      }), mc = e.forwardRef((function (t, n) {
        const r = (0, w.Z)({props: t, name: "MuiPopover"}), {
            action: o,
            anchorEl: a,
            anchorOrigin: i = {vertical: "top", horizontal: "left"},
            anchorPosition: l,
            anchorReference: s = "anchorEl",
            children: c,
            className: u,
            container: d,
            elevation: f = 8,
            marginThreshold: p = 16,
            open: m,
            PaperProps: h = {},
            transformOrigin: v = {vertical: "top", horizontal: "left"},
            TransitionComponent: g = St,
            transitionDuration: E = "auto",
            TransitionProps: {onEntering: k} = {}
          } = r, F = (0, b.Z)(r.TransitionProps, ic), S = (0, b.Z)(r, lc), A = e.useRef(), Z = (0, M.Z)(A, h.ref),
          B = (0, y.Z)({}, r, {
            anchorOrigin: i,
            anchorReference: s,
            elevation: f,
            marginThreshold: p,
            PaperProps: h,
            transformOrigin: v,
            TransitionComponent: g,
            transitionDuration: E,
            TransitionProps: F
          }), j = (e => {
            const {classes: t} = e;
            return (0, C.Z)({root: ["root"], paper: ["paper"]}, ac, t)
          })(B), P = e.useCallback((() => {
            if ("anchorPosition" === s) return l;
            const e = dc(a), t = (e && 1 === e.nodeType ? e : (0, Oi.Z)(A.current).body).getBoundingClientRect();
            return {top: t.top + sc(t, i.vertical), left: t.left + cc(t, i.horizontal)}
          }), [a, i.horizontal, i.vertical, l, s]), R = e.useCallback((e => ({
            vertical: sc(e, v.vertical),
            horizontal: cc(e, v.horizontal)
          })), [v.horizontal, v.vertical]), N = e.useCallback((e => {
            const t = {width: e.offsetWidth, height: e.offsetHeight}, n = R(t);
            if ("none" === s) return {top: null, left: null, transformOrigin: uc(n)};
            const r = P();
            let o = r.top - n.vertical, i = r.left - n.horizontal;
            const l = o + t.height, c = i + t.width, u = (0, ki.Z)(dc(a)), d = u.innerHeight - p, f = u.innerWidth - p;
            if (o < p) {
              const e = o - p;
              o -= e, n.vertical += e
            } else if (l > d) {
              const e = l - d;
              o -= e, n.vertical += e
            }
            if (i < p) {
              const e = i - p;
              i -= e, n.horizontal += e
            } else if (c > f) {
              const e = c - f;
              i -= e, n.horizontal += e
            }
            return {top: `${Math.round(o)}px`, left: `${Math.round(i)}px`, transformOrigin: uc(n)}
          }), [a, s, P, R, p]), [_, T] = e.useState(m), O = e.useCallback((() => {
            const e = A.current;
            if (!e) return;
            const t = N(e);
            null !== t.top && (e.style.top = t.top), null !== t.left && (e.style.left = t.left), e.style.transformOrigin = t.transformOrigin, T(!0)
          }), [N]);
        e.useEffect((() => {
          m && O()
        })), e.useImperativeHandle(o, (() => m ? {
          updatePosition: () => {
            O()
          }
        } : null), [m, O]), e.useEffect((() => {
          if (!m) return;
          const e = (0, yi.Z)((() => {
            O()
          })), t = (0, ki.Z)(a);
          return t.addEventListener("resize", e), () => {
            e.clear(), t.removeEventListener("resize", e)
          }
        }), [a, m, O]);
        let I = E;
        "auto" !== E || g.muiSupportAuto || (I = void 0);
        const z = d || (a ? (0, Oi.Z)(dc(a)).body : void 0);
        return (0, D.jsx)(fc, (0, y.Z)({
          BackdropProps: {invisible: !0},
          className: (0, x.Z)(j.root, u),
          container: z,
          open: m,
          ref: n,
          ownerState: B
        }, S, {
          children: (0, D.jsx)(g, (0, y.Z)({
            appear: !0, in: m, onEntering: (e, t) => {
              k && k(e, t), O()
            }, onExited: () => {
              T(!1)
            }, timeout: I
          }, F, {
            children: (0, D.jsx)(pc, (0, y.Z)({elevation: f}, h, {
              ref: Z,
              className: (0, x.Z)(j.paper, h.className)
            }, _ ? void 0 : {style: (0, y.Z)({}, h.style, {opacity: 0})}, {ownerState: B, children: c}))
          }))
        }))
      })), hc = mc;
    
    function vc(e) {
      return (0, S.Z)("MuiMenu", e)
    }
    
    (0, F.Z)("MuiMenu", ["root", "paper", "list"]);
    const gc = ["onEntering"],
      bc = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"],
      yc = {vertical: "top", horizontal: "right"}, xc = {vertical: "top", horizontal: "left"}, Cc = (0, E.ZP)(hc, {
        shouldForwardProp: e => (0, E.FO)(e) || "classes" === e,
        name: "MuiMenu",
        slot: "Root",
        overridesResolver: (e, t) => t.root
      })({}), Ec = (0, E.ZP)(jt, {
        name: "MuiMenu",
        slot: "Paper",
        overridesResolver: (e, t) => t.paper
      })({maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch"}),
      wc = (0, E.ZP)(Ms, {name: "MuiMenu", slot: "List", overridesResolver: (e, t) => t.list})({outline: 0}),
      kc = e.forwardRef((function (t, n) {
        const r = (0, w.Z)({props: t, name: "MuiMenu"}), {
            autoFocus: o = !0,
            children: a,
            disableAutoFocusItem: i = !1,
            MenuListProps: l = {},
            onClose: s,
            open: c,
            PaperProps: u = {},
            PopoverClasses: d,
            transitionDuration: f = "auto",
            TransitionProps: {onEntering: p} = {},
            variant: m = "selectedMenu"
          } = r, h = (0, b.Z)(r.TransitionProps, gc), v = (0, b.Z)(r, bc), g = ct(), E = "rtl" === g.direction,
          k = (0, y.Z)({}, r, {
            autoFocus: o,
            disableAutoFocusItem: i,
            MenuListProps: l,
            onEntering: p,
            PaperProps: u,
            transitionDuration: f,
            TransitionProps: h,
            variant: m
          }), F = (e => {
            const {classes: t} = e;
            return (0, C.Z)({root: ["root"], paper: ["paper"], list: ["list"]}, vc, t)
          })(k), S = o && !i && c, A = e.useRef(null);
        let Z = -1;
        return e.Children.map(a, ((t, n) => {
          e.isValidElement(t) && (t.props.disabled || ("selectedMenu" === m && t.props.selected || -1 === Z) && (Z = n))
        })), (0, D.jsx)(Cc, (0, y.Z)({
          onClose: s,
          anchorOrigin: {vertical: "bottom", horizontal: E ? "right" : "left"},
          transformOrigin: E ? yc : xc,
          PaperProps: (0, y.Z)({component: Ec}, u, {classes: (0, y.Z)({}, u.classes, {root: F.paper})}),
          className: F.root,
          open: c,
          ref: n,
          transitionDuration: f,
          TransitionProps: (0, y.Z)({
            onEntering: (e, t) => {
              A.current && A.current.adjustStyleForScrollbar(e, g), p && p(e, t)
            }
          }, h),
          ownerState: k
        }, v, {
          classes: d, children: (0, D.jsx)(wc, (0, y.Z)({
            onKeyDown: e => {
              "Tab" === e.key && (e.preventDefault(), s && s(e, "tabKeyDown"))
            }, actions: A, autoFocus: o && (-1 === Z || i), autoFocusItem: S, variant: m
          }, l, {className: (0, x.Z)(F.list, l.className), children: a}))
        }))
      }));
    
    function Fc(e) {
      return (0, S.Z)("MuiNativeSelect", e)
    }
    
    const Sc = (0, F.Z)("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput"]),
      Ac = ["className", "disabled", "IconComponent", "inputRef", "variant"],
      Dc = ({ownerState: e, theme: t}) => (0, y.Z)({
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": (0, y.Z)({}, t.vars ? {backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`} : {backgroundColor: "light" === t.palette.mode ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"}, {borderRadius: 0}),
        "&::-ms-expand": {display: "none"},
        [`&.${Sc.disabled}`]: {cursor: "default"},
        "&[multiple]": {height: "auto"},
        "&:not([multiple]) option, &:not([multiple]) optgroup": {backgroundColor: (t.vars || t).palette.background.paper},
        "&&&": {paddingRight: 24, minWidth: 16}
      }, "filled" === e.variant && {"&&&": {paddingRight: 32}}, "outlined" === e.variant && {
        borderRadius: (t.vars || t).shape.borderRadius,
        "&:focus": {borderRadius: (t.vars || t).shape.borderRadius},
        "&&&": {paddingRight: 32}
      }), Zc = (0, E.ZP)("select", {
        name: "MuiNativeSelect",
        slot: "Select",
        shouldForwardProp: E.FO,
        overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.select, t[n.variant], {[`&.${Sc.multiple}`]: t.multiple}]
        }
      })(Dc), Bc = ({ownerState: e, theme: t}) => (0, y.Z)({
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (t.vars || t).palette.action.active,
        [`&.${Sc.disabled}`]: {color: (t.vars || t).palette.action.disabled}
      }, e.open && {transform: "rotate(180deg)"}, "filled" === e.variant && {right: 7}, "outlined" === e.variant && {right: 7}),
      jc = (0, E.ZP)("svg", {
        name: "MuiNativeSelect", slot: "Icon", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.icon, n.variant && t[`icon${(0, He.Z)(n.variant)}`], n.open && t.iconOpen]
        }
      })(Bc), Pc = e.forwardRef((function (t, n) {
        const {className: r, disabled: o, IconComponent: a, inputRef: i, variant: l = "standard"} = t,
          s = (0, b.Z)(t, Ac), c = (0, y.Z)({}, t, {disabled: o, variant: l}), u = (e => {
            const {classes: t, variant: n, disabled: r, multiple: o, open: a} = e, i = {
              select: ["select", n, r && "disabled", o && "multiple"],
              icon: ["icon", `icon${(0, He.Z)(n)}`, a && "iconOpen", r && "disabled"]
            };
            return (0, C.Z)(i, Fc, t)
          })(c);
        return (0, D.jsxs)(e.Fragment, {
          children: [(0, D.jsx)(Zc, (0, y.Z)({
            ownerState: c,
            className: (0, x.Z)(u.select, r),
            disabled: o,
            ref: i || n
          }, s)), t.multiple ? null : (0, D.jsx)(jc, {as: a, ownerState: c, className: u.icon})]
        })
      }));
    
    function Rc(e) {
      return (0, S.Z)("MuiSelect", e)
    }
    
    const Mc = (0, F.Z)("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput"]);
    var Nc;
    const _c = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"],
      Tc = (0, E.ZP)("div", {
        name: "MuiSelect", slot: "Select", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [{[`&.${Mc.select}`]: t.select}, {[`&.${Mc.select}`]: t[n.variant]}, {[`&.${Mc.multiple}`]: t.multiple}]
        }
      })(Dc, {
        [`&.${Mc.select}`]: {
          height: "auto",
          minHeight: "1.4375em",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden"
        }
      }), Oc = (0, E.ZP)("svg", {
        name: "MuiSelect", slot: "Icon", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.icon, n.variant && t[`icon${(0, He.Z)(n.variant)}`], n.open && t.iconOpen]
        }
      })(Bc), Ic = (0, E.ZP)("input", {
        shouldForwardProp: e => (0, E.Dz)(e) && "classes" !== e,
        name: "MuiSelect",
        slot: "NativeInput",
        overridesResolver: (e, t) => t.nativeInput
      })({
        bottom: 0,
        left: 0,
        position: "absolute",
        opacity: 0,
        pointerEvents: "none",
        width: "100%",
        boxSizing: "border-box"
      });
    
    function zc(e, t) {
      return "object" == typeof t && null !== t ? e === t : String(e) === String(t)
    }
    
    function Lc(e) {
      return null == e || "string" == typeof e && !e.trim()
    }
    
    const $c = e.forwardRef((function (t, n) {
      const {
          "aria-describedby": r,
          "aria-label": o,
          autoFocus: a,
          autoWidth: i,
          children: l,
          className: s,
          defaultOpen: c,
          defaultValue: u,
          disabled: d,
          displayEmpty: f,
          IconComponent: p,
          inputRef: m,
          labelId: h,
          MenuProps: v = {},
          multiple: g,
          name: E,
          onBlur: w,
          onChange: k,
          onClose: F,
          onFocus: S,
          onOpen: A,
          open: Z,
          readOnly: B,
          renderValue: j,
          SelectDisplayProps: P = {},
          tabIndex: R,
          value: N,
          variant: _ = "standard"
        } = t, T = (0, b.Z)(t, _c), [O, I] = (0, Mr.Z)({
          controlled: N,
          default: u,
          name: "Select"
        }), [z, L] = (0, Mr.Z)({controlled: Z, default: c, name: "Select"}), $ = e.useRef(null),
        W = e.useRef(null), [H, V] = e.useState(null), {current: U} = e.useRef(null != Z), [q, K] = e.useState(),
        G = (0, M.Z)(n, m), X = e.useCallback((e => {
          W.current = e, e && V(e)
        }), []), Y = null == H ? void 0 : H.parentNode;
      e.useImperativeHandle(G, (() => ({
        focus: () => {
          W.current.focus()
        }, node: $.current, value: O
      })), [O]), e.useEffect((() => {
        c && z && H && !U && (K(i ? null : Y.clientWidth), W.current.focus())
      }), [H, i]), e.useEffect((() => {
        a && W.current.focus()
      }), [a]), e.useEffect((() => {
        if (!h) return;
        const e = (0, Oi.Z)(W.current).getElementById(h);
        if (e) {
          const t = () => {
            getSelection().isCollapsed && W.current.focus()
          };
          return e.addEventListener("click", t), () => {
            e.removeEventListener("click", t)
          }
        }
      }), [h]);
      const Q = (e, t) => {
        e ? A && A(t) : F && F(t), U || (K(i ? null : Y.clientWidth), L(e))
      }, J = e.Children.toArray(l), ee = e => t => {
        let n;
        if (t.currentTarget.hasAttribute("tabindex")) {
          if (g) {
            n = Array.isArray(O) ? O.slice() : [];
            const t = O.indexOf(e.props.value);
            -1 === t ? n.push(e.props.value) : n.splice(t, 1)
          } else n = e.props.value;
          if (e.props.onClick && e.props.onClick(t), O !== n && (I(n), k)) {
            const r = t.nativeEvent || t, o = new r.constructor(r.type, r);
            Object.defineProperty(o, "target", {writable: !0, value: {value: n, name: E}}), k(o, e)
          }
          g || Q(!1, t)
        }
      }, te = null !== H && z;
      let ne, re;
      delete T["aria-invalid"];
      const oe = [];
      let ae = !1, ie = !1;
      (kl({value: O}) || f) && (j ? ne = j(O) : ae = !0);
      const le = J.map(((t, n, r) => {
        var o, a, i, l;
        if (!e.isValidElement(t)) return null;
        let s;
        if (g) {
          if (!Array.isArray(O)) throw new Error((0, pl.Z)(2));
          s = O.some((e => zc(e, t.props.value))), s && ae && oe.push(t.props.children)
        } else s = zc(O, t.props.value), s && ae && (re = t.props.children);
        return s && (ie = !0), void 0 === t.props.value ? e.cloneElement(t, {
          "aria-readonly": !0,
          role: "option"
        }) : e.cloneElement(t, {
          "aria-selected": s ? "true" : "false",
          onClick: ee(t),
          onKeyUp: e => {
            " " === e.key && e.preventDefault(), t.props.onKeyUp && t.props.onKeyUp(e)
          },
          role: "option",
          selected: void 0 === (null == (o = r[0]) || null == (a = o.props) ? void 0 : a.value) || !0 === (null == (i = r[0]) || null == (l = i.props) ? void 0 : l.disabled) ? (() => {
            if (O) return s;
            const e = r.find((e => {
              var t;
              return void 0 !== (null == e || null == (t = e.props) ? void 0 : t.value) && !0 !== e.props.disabled
            }));
            return t === e || s
          })() : s,
          value: void 0,
          "data-value": t.props.value
        })
      }));
      ae && (ne = g ? 0 === oe.length ? null : oe.reduce(((e, t, n) => (e.push(t), n < oe.length - 1 && e.push(", "), e)), []) : re);
      let se, ce = q;
      !i && U && H && (ce = Y.clientWidth), se = void 0 !== R ? R : d ? null : 0;
      const ue = P.id || (E ? `mui-component-select-${E}` : void 0),
        de = (0, y.Z)({}, t, {variant: _, value: O, open: te}), fe = (e => {
          const {classes: t, variant: n, disabled: r, multiple: o, open: a} = e, i = {
            select: ["select", n, r && "disabled", o && "multiple"],
            icon: ["icon", `icon${(0, He.Z)(n)}`, a && "iconOpen", r && "disabled"],
            nativeInput: ["nativeInput"]
          };
          return (0, C.Z)(i, Rc, t)
        })(de);
      return (0, D.jsxs)(e.Fragment, {
        children: [(0, D.jsx)(Tc, (0, y.Z)({
          ref: X,
          tabIndex: se,
          role: "button",
          "aria-disabled": d ? "true" : void 0,
          "aria-expanded": te ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": o,
          "aria-labelledby": [h, ue].filter(Boolean).join(" ") || void 0,
          "aria-describedby": r,
          onKeyDown: e => {
            B || -1 !== [" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(e.key) && (e.preventDefault(), Q(!0, e))
          },
          onMouseDown: d || B ? null : e => {
            0 === e.button && (e.preventDefault(), W.current.focus(), Q(!0, e))
          },
          onBlur: e => {
            !te && w && (Object.defineProperty(e, "target", {writable: !0, value: {value: O, name: E}}), w(e))
          },
          onFocus: S
        }, P, {
          ownerState: de,
          className: (0, x.Z)(P.className, fe.select, s),
          id: ue,
          children: Lc(ne) ? Nc || (Nc = (0, D.jsx)("span", {className: "notranslate", children: "​"})) : ne
        })), (0, D.jsx)(Ic, (0, y.Z)({
          value: Array.isArray(O) ? O.join(",") : O,
          name: E,
          ref: $,
          "aria-hidden": !0,
          onChange: e => {
            const t = J.map((e => e.props.value)).indexOf(e.target.value);
            if (-1 === t) return;
            const n = J[t];
            I(n.props.value), k && k(e, n)
          },
          tabIndex: -1,
          disabled: d,
          className: fe.nativeInput,
          autoFocus: a,
          ownerState: de
        }, T)), (0, D.jsx)(Oc, {
          as: p,
          className: fe.icon,
          ownerState: de
        }), (0, D.jsx)(kc, (0, y.Z)({
          id: `menu-${E || ""}`,
          anchorEl: Y,
          open: te,
          onClose: e => {
            Q(!1, e)
          },
          anchorOrigin: {vertical: "bottom", horizontal: "center"},
          transformOrigin: {vertical: "top", horizontal: "center"}
        }, v, {
          MenuListProps: (0, y.Z)({"aria-labelledby": h, role: "listbox", disableListWrap: !0}, v.MenuListProps),
          PaperProps: (0, y.Z)({}, v.PaperProps, {style: (0, y.Z)({minWidth: ce}, null != v.PaperProps ? v.PaperProps.style : null)}),
          children: le
        }))]
      })
    })), Wc = $c, Hc = (0, ao.Z)((0, D.jsx)("path", {d: "M7 10l5 5 5-5z"}), "ArrowDropDown");
    var Vc, Uc;
    const qc = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"],
      Kc = {
        name: "MuiSelect",
        overridesResolver: (e, t) => t.root,
        shouldForwardProp: e => (0, E.FO)(e) && "variant" !== e,
        slot: "Root"
      }, Gc = (0, E.ZP)(Ll, Kc)(""), Xc = (0, E.ZP)(is, Kc)(""), Yc = (0, E.ZP)(Kl, Kc)(""),
      Qc = e.forwardRef((function (t, n) {
        const r = (0, w.Z)({name: "MuiSelect", props: t}), {
            autoWidth: o = !1,
            children: a,
            classes: i = {},
            className: l,
            defaultOpen: s = !1,
            displayEmpty: c = !1,
            IconComponent: u = Hc,
            id: d,
            input: f,
            inputProps: p,
            label: m,
            labelId: h,
            MenuProps: v,
            multiple: g = !1,
            native: C = !1,
            onClose: E,
            onOpen: k,
            open: F,
            renderValue: S,
            SelectDisplayProps: A,
            variant: Z = "outlined"
          } = r, B = (0, b.Z)(r, qc), j = C ? Pc : Wc,
          P = Xr({props: r, muiFormControl: qr(), states: ["variant"]}).variant || Z, R = f || {
            standard: Vc || (Vc = (0, D.jsx)(Gc, {})),
            outlined: (0, D.jsx)(Xc, {label: m}),
            filled: Uc || (Uc = (0, D.jsx)(Yc, {}))
          }[P], N = (e => {
            const {classes: t} = e;
            return t
          })((0, y.Z)({}, r, {variant: P, classes: i})), _ = (0, M.Z)(n, R.ref);
        return (0, D.jsx)(e.Fragment, {
          children: e.cloneElement(R, (0, y.Z)({
            inputComponent: j,
            inputProps: (0, y.Z)({
              children: a,
              IconComponent: u,
              variant: P,
              type: void 0,
              multiple: g
            }, C ? {id: d} : {
              autoWidth: o,
              defaultOpen: s,
              displayEmpty: c,
              labelId: h,
              MenuProps: v,
              onClose: E,
              onOpen: k,
              open: F,
              renderValue: S,
              SelectDisplayProps: (0, y.Z)({id: d}, A)
            }, p, {classes: p ? (0, Le.Z)(N, p.classes) : N}, f ? f.props.inputProps : {})
          }, g && C && "outlined" === P ? {notched: !0} : {}, {
            ref: _,
            className: (0, x.Z)(R.props.className, l)
          }, !f && {variant: P}, B))
        })
      }));
    Qc.muiName = "Select";
    const Jc = Qc;
    
    function eu(e) {
      return (0, S.Z)("MuiTextField", e)
    }
    
    (0, F.Z)("MuiTextField", ["root"]);
    const tu = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"],
      nu = {standard: Ll, filled: Kl, outlined: is},
      ru = (0, E.ZP)(xs, {name: "MuiTextField", slot: "Root", overridesResolver: (e, t) => t.root})({}),
      ou = e.forwardRef((function (e, t) {
        const n = (0, w.Z)({props: e, name: "MuiTextField"}), {
          autoComplete: r,
          autoFocus: o = !1,
          children: a,
          className: i,
          color: l = "primary",
          defaultValue: s,
          disabled: c = !1,
          error: u = !1,
          FormHelperTextProps: d,
          fullWidth: f = !1,
          helperText: p,
          id: m,
          InputLabelProps: h,
          inputProps: v,
          InputProps: g,
          inputRef: E,
          label: k,
          maxRows: F,
          minRows: S,
          multiline: A = !1,
          name: Z,
          onBlur: B,
          onChange: j,
          onFocus: P,
          placeholder: R,
          required: M = !1,
          rows: N,
          select: _ = !1,
          SelectProps: T,
          type: O,
          value: I,
          variant: z = "outlined"
        } = n, L = (0, b.Z)(n, tu), $ = (0, y.Z)({}, n, {
          autoFocus: o,
          color: l,
          disabled: c,
          error: u,
          fullWidth: f,
          multiline: A,
          required: M,
          select: _,
          variant: z
        }), W = (e => {
          const {classes: t} = e;
          return (0, C.Z)({root: ["root"]}, eu, t)
        })($), H = {};
        "outlined" === z && (h && void 0 !== h.shrink && (H.notched = h.shrink), H.label = k), _ && (T && T.native || (H.id = void 0), H["aria-describedby"] = void 0);
        const V = (0, fl.Z)(m), U = p && V ? `${V}-helper-text` : void 0, q = k && V ? `${V}-label` : void 0, K = nu[z],
          G = (0, D.jsx)(K, (0, y.Z)({
            "aria-describedby": U,
            autoComplete: r,
            autoFocus: o,
            defaultValue: s,
            fullWidth: f,
            multiline: A,
            name: Z,
            rows: N,
            maxRows: F,
            minRows: S,
            type: O,
            value: I,
            id: V,
            inputRef: E,
            onBlur: B,
            onChange: j,
            onFocus: P,
            placeholder: R,
            inputProps: v
          }, H, g));
        return (0, D.jsxs)(ru, (0, y.Z)({
          className: (0, x.Z)(W.root, i),
          disabled: c,
          error: u,
          fullWidth: f,
          ref: t,
          required: M,
          color: l,
          variant: z,
          ownerState: $
        }, L, {
          children: [null != k && "" !== k && (0, D.jsx)(vs, (0, y.Z)({
            htmlFor: V,
            id: q
          }, h, {children: k})), _ ? (0, D.jsx)(Jc, (0, y.Z)({
            "aria-describedby": U,
            id: V,
            labelId: q,
            value: I,
            input: G
          }, T, {children: a})) : G, p && (0, D.jsx)(Ss, (0, y.Z)({id: U}, d, {children: p}))]
        }))
      }));
    var au = o(3529), iu = {};
    iu.styleTagTransform = h(), iu.setAttributes = d(), iu.insert = c().bind(null, "head"), iu.domAPI = l(), iu.insertStyleElement = p(), r()(au.Z, iu), au.Z && au.Z.locals && au.Z.locals;
    const lu = JSON.parse('[{"name":"桜色","jname":"さくらいろ","color":"#FEF4F4"},{"name":"小豆色","jname":"あずきいろ","color":"#96514D"},{"name":"黄金","jname":"こがね","color":"#E6B422"},{"name":"萌葱色","jname":"もえぎいろ","color":"#006E54"},{"name":"古代紫","jname":"こだいむらさき","color":"#895B8A"},{"name":"薄桜","jname":"うすざくら","color":"#FDEFF2"},{"name":"枯茶","jname":"からちゃ","color":"#8D6449"},{"name":"櫨染","jname":"はじぞめ","color":"#D9A62E"},{"name":"花緑青","jname":"はなろくしょう","color":"#00A381"},{"name":"茄子紺","jname":"なすこん","color":"#824880"},{"name":"桜鼠","jname":"さくらねず","color":"#E9DFE5"},{"name":"飴色","jname":"あめいろ","color":"#DEB068"},{"name":"黄朽葉色","jname":"きくちばいろ","color":"#D3A243"},{"name":"翡翠色","jname":"ひすいいろ","color":"#38B48B"},{"name":"二藍","jname":"ふたあい","color":"#915C8B"},{"name":"鴇鼠","jname":"ときねず","color":"#E4D2D8"},{"name":"駱駝色","jname":"らくだいろ","color":"#BF794E"},{"name":"山吹茶","jname":"やまぶきちゃ","color":"#C89932"},{"name":"青緑","jname":"あおみどり","color":"#00A497"},{"name":"京紫","jname":"きょうむらさき","color":"#9D5B8B"},{"name":"虹色","jname":"にじいろ","color":"#F6BFBC"},{"name":"土色","jname":"つちいろ","color":"#BC763C"},{"name":"芥子色","jname":"からしいろ","color":"#D0AF4C"},{"name":"水浅葱","jname":"みずあさぎ","color":"#80ABA9"},{"name":"蒲葡","jname":"えびぞめ","color":"#7A4171"},{"name":"珊瑚色","jname":"さんごいろ","color":"#F5B1AA"},{"name":"黄唐茶","jname":"きがらちゃ","color":"#B98C46"},{"name":"豆がら茶","jname":"まめがらちゃ","color":"#8B968D"},{"name":"錆浅葱","jname":"さびあさぎ","color":"#5C9291"},{"name":"若紫","jname":"わかむらさき","color":"#BC64A4"},{"name":"一斤染","jname":"いっこんぞめ","color":"#F5B199"},{"name":"桑染","jname":"くわぞめ","color":"#B79B5B"},{"name":"麹塵","jname":"きくじん","color":"#6E7955"},{"name":"青碧","jname":"せいへき","color":"#478384"},{"name":"紅紫","jname":"べにむらさき","color":"#B44C97"},{"name":"宍色","jname":"ししいろ","color":"#EFAB93"},{"name":"櫨色","jname":"はじいろ","color":"#B77B57"},{"name":"山鳩色","jname":"やまばといろ","color":"#767C6B"},{"name":"御召茶","jname":"おめしちゃ","color":"#43676B"},{"name":"梅紫","jname":"うめむらさき","color":"#AA4C8F"},{"name":"紅梅色","jname":"こうばいいろ","color":"#F2A0A1"},{"name":"黄橡","jname":"きつるばみ","color":"#B68D4C"},{"name":"利休鼠","jname":"りきゅうねずみ","color":"#888E7E"},{"name":"湊鼠","jname":"みなとねずみ","color":"#80989B"},{"name":"菖蒲色","jname":"あやめいろ","color":"#CC7EB1"},{"name":"薄紅","jname":"うすべに","color":"#F0908D"},{"name":"丁字染","jname":"ちょうじぞめ","color":"#AD7D4C"},{"name":"海松茶","jname":"みるちゃ","color":"#5A544B"},{"name":"高麗納戸","jname":"こうらいなんど","color":"#2C4F54"},{"name":"紅藤色","jname":"べにふじいろ","color":"#CCA6BF"},{"name":"甚三紅","jname":"じんざもみ","color":"#EE827C"},{"name":"香染","jname":"こうぞめ","color":"#AD7D4C"},{"name":"藍海松茶","jname":"あいみるちゃ","color":"#56564B"},{"name":"百入茶","jname":"ももしおちゃ","color":"#1F3134"},{"name":"浅紫","jname":"あさむらさき","color":"#C4A3BF"},{"name":"桃色","jname":"ももいろ","color":"#F09199"},{"name":"枇杷茶","jname":"びわちゃ","color":"#AE7C4F"},{"name":"藍媚茶","jname":"あいこびちゃ","color":"#555647"},{"name":"錆鼠","jname":"さびねず","color":"#47585C"},{"name":"紫水晶","jname":"むらさきすいしょう","color":"#E7E7EB"},{"name":"鴇色","jname":"ときいろ","color":"#F4B3C2"},{"name":"芝翫茶","jname":"しかんちゃ","color":"#AD7E4E"},{"name":"千歳茶","jname":"せんさいちゃ","color":"#494A41"},{"name":"錆鉄御納戸","jname":"さびてつおなんど","color":"#485859"},{"name":"薄梅鼠","jname":"うすうめねず","color":"#DCD6D9"},{"name":"撫子色","jname":"なでしこいろ","color":"#EEBBCB"},{"name":"焦香","jname":"こがれこう","color":"#AE7C58"},{"name":"岩井茶","jname":"いわいちゃ","color":"#6B6F59"},{"name":"藍鼠","jname":"あいねず","color":"#6C848D"},{"name":"暁鼠","jname":"あかつきねず","color":"#D3CFD9"},{"name":"灰梅","jname":"はいうめ","color":"#E8D3C7"},{"name":"胡桃色","jname":"くるみいろ","color":"#A86F4C"},{"name":"仙斎茶","jname":"せんさいちゃ","color":"#474B42"},{"name":"錆御納戸","jname":"さびおなんど","color":"#53727D"},{"name":"牡丹鼠","jname":"ぼたんねず","color":"#D3CCD6"},{"name":"灰桜","jname":"はいざくら","color":"#E8D3D1"},{"name":"渋紙色","jname":"しぶかみいろ","color":"#946243"},{"name":"黒緑","jname":"くろみどり","color":"#333631"},{"name":"舛花色","jname":"ますはないろ","color":"#5B7E91"},{"name":"霞色","jname":"かすみいろ","color":"#C8C2C6"},{"name":"淡紅藤","jname":"あわべにふじ","color":"#E6CDE3"},{"name":"朽葉色","jname":"くちばいろ","color":"#917347"},{"name":"柳煤竹","jname":"やなぎすすたけ","color":"#5B6356"},{"name":"熨斗目花色","jname":"のしめはないろ","color":"#426579"},{"name":"藤鼠","jname":"ふじねず","color":"#A6A5C4"},{"name":"石竹色","jname":"せきちくいろ","color":"#E5ABBE"},{"name":"桑茶","jname":"くわちゃ","color":"#956F29"},{"name":"樺茶色","jname":"かばちゃいろ","color":"#726250"},{"name":"御召御納戸","jname":"おめしおなんど","color":"#4C6473"},{"name":"半色","jname":"はしたいろ","color":"#A69ABD"},{"name":"薄紅梅","jname":"うすこうばい","color":"#E597B2"},{"name":"路考茶","jname":"ろこうちゃ","color":"#8C7042"},{"name":"空五倍子色","jname":"うつぶしいろ","color":"#9D896C"},{"name":"鉄御納戸","jname":"てつおなんど","color":"#455765"},{"name":"薄色","jname":"うすいろ","color":"#A89DAC"},{"name":"桃花色","jname":"ももはないろ","color":"#E198B4"},{"name":"国防色","jname":"こくぼうしょく","color":"#7B6C3E"},{"name":"生壁色","jname":"なまかべいろ","color":"#94846A"},{"name":"紺鼠","jname":"こんねず","color":"#44617B"},{"name":"薄鼠","jname":"うすねず","color":"#9790A4"},{"name":"水柿","jname":"みずがき","color":"#E4AB9B"},{"name":"伽羅色","jname":"きゃらいろ","color":"#D8A373"},{"name":"肥後煤竹","jname":"ひごすすたけ","color":"#897858"},{"name":"藍鉄","jname":"あいてつ","color":"#393F4C"},{"name":"鳩羽鼠","jname":"はとばねずみ","color":"#9E8B8E"},{"name":"ときがら茶","jname":"ときがらちゃ","color":"#E09E87"},{"name":"江戸茶","jname":"えどちゃ","color":"#CD8C5C"},{"name":"媚茶","jname":"こびちゃ","color":"#716246"},{"name":"青褐","jname":"あおかち","color":"#393E4F"},{"name":"鳩羽色","jname":"はとばいろ","color":"#95859C"},{"name":"退紅","jname":"あらぞめ","color":"#D69090"},{"name":"樺色","jname":"かばいろ","color":"#CD5E3C"},{"name":"白橡","jname":"しろつるばみ","color":"#CBB994"},{"name":"褐返","jname":"かちかえし","color":"#203744"},{"name":"桔梗鼠","jname":"ききょうねず","color":"#95949A"},{"name":"薄柿","jname":"うすがき","color":"#D4ACAD"},{"name":"紅鬱金","jname":"べにうこん","color":"#CB8347"},{"name":"亜麻色","jname":"あまいろ","color":"#D6C6AF"},{"name":"褐色","jname":"かちいろ","color":"#4D4C61"},{"name":"紫鼠","jname":"むらさきねず","color":"#71686C"},{"name":"長春色","jname":"ちょうしゅんいろ","color":"#C97586"},{"name":"土器色","jname":"かわらけいろ","color":"#C37854"},{"name":"榛色","jname":"はしばみいろ","color":"#BFA46F"},{"name":"月白","jname":"げっぱく","color":"#EAF4FC"},{"name":"葡萄鼠","jname":"ぶどうねずみ","color":"#705B67"},{"name":"梅鼠","jname":"うめねず","color":"#C099A0"},{"name":"狐色","jname":"きつねいろ","color":"#C38743"},{"name":"灰汁色","jname":"あくいろ","color":"#9E9478"},{"name":"白菫色","jname":"しろすみれいろ","color":"#EAEDF7"},{"name":"濃色","jname":"こきいろ","color":"#634950"},{"name":"鴇浅葱","jname":"ときあさぎ","color":"#B88884"},{"name":"黄土色","jname":"おうどいろ","color":"#C39143"},{"name":"利休茶","jname":"りきゅうちゃ","color":"#A59564"},{"name":"白花色","jname":"しらはないろ","color":"#E8ECEF"},{"name":"紫鳶","jname":"むらさきとび","color":"#5F414B"},{"name":"梅染","jname":"うめぞめ","color":"#B48A76"},{"name":"琥珀色","jname":"こはくいろ","color":"#BF783A"},{"name":"鶯茶","jname":"うぐいすちゃ","color":"#715C1F"},{"name":"藍白","jname":"あいじろ","color":"#EBF6F7"},{"name":"濃鼠","jname":"こいねず","color":"#4F455C"},{"name":"蘇芳香","jname":"すおうこう","color":"#A86965"},{"name":"赤茶","jname":"あかちゃ","color":"#BB5535"},{"name":"木蘭色","jname":"もくらんじき","color":"#C7B370"},{"name":"白藍","jname":"しらあい","color":"#C1E4E9"},{"name":"藤煤竹","jname":"ふじすすたけ","color":"#5A5359"},{"name":"浅蘇芳","jname":"あさすおう","color":"#A25768"},{"name":"代赭","jname":"たいしゃ","color":"#BB5520"},{"name":"砂色","jname":"すないろ","color":"#DCD3B2"},{"name":"水色","jname":"みずいろ","color":"#BCE2E8"},{"name":"滅紫","jname":"けしむらさき","color":"#594255"},{"name":"真朱","jname":"まそお","color":"#EC6D71"},{"name":"煉瓦色","jname":"れんがいろ","color":"#B55233"},{"name":"油色","jname":"あぶらいろ","color":"#A19361"},{"name":"瓶覗","jname":"かめのぞき","color":"#A2D7DD"},{"name":"紅消鼠","jname":"べにけしねずみ","color":"#524748"},{"name":"赤紫","jname":"あかむらさき","color":"#EB6EA5"},{"name":"雀茶","jname":"すずめちゃ","color":"#AA4F37"},{"name":"利休色","jname":"りきゅういろ","color":"#8F8667"},{"name":"秘色色","jname":"ひそくいろ","color":"#ABCED8"},{"name":"似せ紫","jname":"にせむらさき","color":"#513743"},{"name":"躑躅色","jname":"つつじいろ","color":"#E95295"},{"name":"団十郎茶","jname":"だんじゅうろうちゃ","color":"#9F563A"},{"name":"梅幸茶","jname":"ばいこうちゃ","color":"#887938"},{"name":"空色","jname":"そらいろ","color":"#A0D8EF"},{"name":"灰黄緑","jname":"はいきみどり","color":"#E6EAE3"},{"name":"牡丹色","jname":"ぼたんいろ","color":"#E7609E"},{"name":"柿渋色","jname":"かきしぶいろ","color":"#9F563A"},{"name":"璃寛茶","jname":"りかんちゃ","color":"#6A5D21"},{"name":"勿忘草色","jname":"わすれなぐさいろ","color":"#89C3EB"},{"name":"蕎麦切色","jname":"そばきりいろ","color":"#D4DCD6"},{"name":"今様色","jname":"いまよういろ","color":"#D0576B"},{"name":"紅鳶","jname":"べにとび","color":"#9A493F"},{"name":"黄海松茶","jname":"きみるちゃ","color":"#918754"},{"name":"青藤色","jname":"あおふじいろ","color":"#84A2D4"},{"name":"薄雲鼠","jname":"うすくもねず","color":"#D4DCDA"},{"name":"中紅","jname":"なかべに","color":"#C85179"},{"name":"灰茶","jname":"はいちゃ","color":"#98623C"},{"name":"菜種油色","jname":"なたねゆいろ","color":"#A69425"},{"name":"白群","jname":"びゃくぐん","color":"#83CCD2"},{"name":"枯野色","jname":"かれのいろ","color":"#D3CBC6"},{"name":"薔薇色","jname":"ばらいろ","color":"#E9546B"},{"name":"茶色","jname":"ちゃいろ","color":"#965042"},{"name":"青朽葉","jname":"あおくちば","color":"#ADA250"},{"name":"浅縹","jname":"あさはなだ","color":"#84B9CB"},{"name":"潤色","jname":"うるみいろ","color":"#C8C2BE"},{"name":"韓紅","jname":"からくれない","color":"#E95464"},{"name":"檜皮色","jname":"ひわだいろ","color":"#965036"},{"name":"根岸色","jname":"ねぎしいろ","color":"#938B4B"},{"name":"薄花色","jname":"うすはないろ","color":"#698AAB"},{"name":"利休白茶","jname":"りきゅうしろちゃ","color":"#B3ADA0"},{"name":"銀朱","jname":"ぎんしゅ","color":"#C85554"},{"name":"鳶色","jname":"とびいろ","color":"#95483F"},{"name":"鶸茶","jname":"ひわちゃ","color":"#8C8861"},{"name":"納戸色","jname":"なんどいろ","color":"#008899"},{"name":"茶鼠","jname":"ちゃねずみ","color":"#A99E93"},{"name":"赤紅","jname":"あかべに","color":"#C53D43"},{"name":"柿茶","jname":"かきちゃ","color":"#954E2A"},{"name":"柳茶","jname":"やなぎちゃ","color":"#A1A46D"},{"name":"浅葱色","jname":"あさぎいろ","color":"#00A3AF"},{"name":"胡桃染","jname":"くるみぞめ","color":"#A58F86"},{"name":"紅緋","jname":"べにひ","color":"#E83929"},{"name":"弁柄色","jname":"べんがらいろ","color":"#8F2E14"},{"name":"海松色","jname":"みるいろ","color":"#726D40"},{"name":"花浅葱","jname":"はなあさぎ","color":"#2A83A2"},{"name":"江戸鼠","jname":"えどねず","color":"#928178"},{"name":"赤","jname":"あか","color":"#E60033"},{"name":"赤錆色","jname":"あかさびいろ","color":"#8A3319"},{"name":"鶯色","jname":"うぐいすいろ","color":"#928C36"},{"name":"新橋色","jname":"しんばしいろ","color":"#59B9C6"},{"name":"煤色","jname":"すすいろ","color":"#887F7A"},{"name":"猩々緋","jname":"しょうじょうひ","color":"#E2041B"},{"name":"褐色","jname":"かっしょく","color":"#8A3B00"},{"name":"緑黄色","jname":"りょくおうしょく","color":"#DCCB18"},{"name":"天色","jname":"あまいろ","color":"#2CA9E1"},{"name":"丁子茶","jname":"ちょうじちゃ","color":"#B4866B"},{"name":"紅","jname":"くれない","color":"#D7003A"},{"name":"栗梅","jname":"くりうめ","color":"#852E19"},{"name":"鶸色","jname":"ひわいろ","color":"#D7CF3A"},{"name":"露草色","jname":"つゆくさいろ","color":"#38A1DB"},{"name":"柴染","jname":"ふしぞめ","color":"#B28C6E"},{"name":"深緋","jname":"こきひ","color":"#C9171E"},{"name":"紅檜皮","jname":"べにひはだ","color":"#7B4741"},{"name":"抹茶色","jname":"まっちゃいろ","color":"#C5C56A"},{"name":"青","jname":"あお","color":"#0095D9"},{"name":"宗伝唐茶","jname":"そうでんからちゃ","color":"#A16D5D"},{"name":"緋色","jname":"ひいろ","color":"#D3381C"},{"name":"海老茶","jname":"えびちゃ","color":"#773C30"},{"name":"若草色","jname":"わかくさいろ","color":"#C3D825"},{"name":"薄藍","jname":"うすあい","color":"#0094C8"},{"name":"砺茶","jname":"とのちゃ","color":"#9F6F55"},{"name":"赤丹","jname":"あかに","color":"#CE5242"},{"name":"唐茶","jname":"からちゃ","color":"#783C1D"},{"name":"黄緑","jname":"きみどり","color":"#B8D200"},{"name":"縹色","jname":"はなだいろ","color":"#2792C3"},{"name":"煎茶色","jname":"せんちゃいろ","color":"#8C6450"},{"name":"紅赤","jname":"べにあか","color":"#D9333F"},{"name":"栗色","jname":"くりいろ","color":"#762F07"},{"name":"若芽色","jname":"わかめいろ","color":"#E0EBAF"},{"name":"紺碧","jname":"こんぺき","color":"#007BBB"},{"name":"銀煤竹","jname":"ぎんすすだけ","color":"#856859"},{"name":"臙脂","jname":"えんじ","color":"#B94047"},{"name":"赤銅色","jname":"しゃくどういろ","color":"#752100"},{"name":"若菜色","jname":"わかないろ","color":"#D8E698"},{"name":"薄群青","jname":"うすぐんじょう","color":"#5383C3"},{"name":"黄枯茶","jname":"きがらちゃ","color":"#765C47"},{"name":"朱・緋","jname":"あけ","color":"#BA2636"},{"name":"錆色","jname":"さびいろ","color":"#6C3524"},{"name":"若苗色","jname":"わかなえいろ","color":"#C7DC68"},{"name":"薄花桜","jname":"うすはなざくら","color":"#5A79BA"},{"name":"煤竹色","jname":"すすたけいろ","color":"#6F514C"},{"name":"茜色","jname":"あかねいろ","color":"#B7282E"},{"name":"赤褐色","jname":"せっかっしょく","color":"#683F36"},{"name":"青丹","jname":"あおに","color":"#99AB4E"},{"name":"群青色","jname":"ぐんじょういろ","color":"#4C6CB3"},{"name":"焦茶","jname":"こげちゃ","color":"#6F4B3E"},{"name":"紅海老茶","jname":"べにえびちゃ","color":"#A73836"},{"name":"茶褐色","jname":"ちゃかっしょく","color":"#664032"},{"name":"草色","jname":"くさいろ","color":"#7B8D42"},{"name":"杜若色","jname":"かきつばたいろ","color":"#3E62AD"},{"name":"黒橡","jname":"くろつるばみ","color":"#544A47"},{"name":"蘇芳","jname":"すおう","color":"#9E3D3F"},{"name":"栗皮茶","jname":"くりかわちゃ","color":"#6D3C32"},{"name":"苔色","jname":"こけいろ","color":"#69821B"},{"name":"瑠璃色","jname":"るりいろ","color":"#1E50A2"},{"name":"憲法色","jname":"けんぽういろ","color":"#543F32"},{"name":"真紅","jname":"しんく","color":"#A22041"},{"name":"黒茶","jname":"くろちゃ","color":"#583822"},{"name":"萌黄","jname":"もえぎ","color":"#AACF53"},{"name":"薄縹","jname":"うすはなだ","color":"#507EA4"},{"name":"涅色","jname":"くりいろ","color":"#554738"},{"name":"濃紅","jname":"こいくれない","color":"#A22041"},{"name":"葡萄茶","jname":"えびちゃ","color":"#6C2C2F"},{"name":"苗色","jname":"なえいろ","color":"#B0CA71"},{"name":"瑠璃紺","jname":"るりこん","color":"#19448E"},{"name":"檳榔子染","jname":"びんろうじぞめ","color":"#433D3C"},{"name":"象牙色","jname":"ぞうげいろ","color":"#F8F4E6"},{"name":"葡萄色","jname":"えびいろ","color":"#640125"},{"name":"若葉色","jname":"わかばいろ","color":"#B9D08B"},{"name":"紺瑠璃","jname":"こんるり","color":"#164A84"},{"name":"黒鳶","jname":"くろとび","color":"#432F2F"},{"name":"練色","jname":"ねりいろ","color":"#EDE4CD"},{"name":"萱草色","jname":"かんぞういろ","color":"#F8B862"},{"name":"松葉色","jname":"まつばいろ","color":"#839B5C"},{"name":"藍色","jname":"あいいろ","color":"#165E83"},{"name":"赤墨","jname":"あかすみ","color":"#3F312B"},{"name":"灰白色","jname":"かいはくしょく","color":"#E9E4D4"},{"name":"柑子色","jname":"こうじいろ","color":"#F6AD49"},{"name":"夏虫色","jname":"なつむしいろ","color":"#CEE4AE"},{"name":"青藍","jname":"せいらん","color":"#274A78"},{"name":"黒紅","jname":"くろべに","color":"#302833"},{"name":"蒸栗色","jname":"むしぐりいろ","color":"#EBE1A9"},{"name":"金茶","jname":"きんちゃ","color":"#F39800"},{"name":"鶸萌黄","jname":"ひわもえぎ","color":"#82AE46"},{"name":"深縹","jname":"こきはなだ","color":"#2A4073"},{"name":"白","jname":"しろ","color":"#FFFFFF"},{"name":"女郎花","jname":"おみなえし","color":"#F2F2B0"},{"name":"蜜柑色","jname":"みかんいろ","color":"#F08300"},{"name":"柳色","jname":"やなぎいろ","color":"#A8C97F"},{"name":"紺色","jname":"こんいろ","color":"#223A70"},{"name":"胡粉色","jname":"ごふんいろ","color":"#FFFFFC"},{"name":"枯草色","jname":"かれくさいろ","color":"#E4DC8A"},{"name":"鉛丹色","jname":"えんたんいろ","color":"#EC6D51"},{"name":"青白橡","jname":"あおしろつるばみ","color":"#9BA88D"},{"name":"紺青","jname":"こんじょう","color":"#192F60"},{"name":"卯の花色","jname":"うのはないろ","color":"#F7FCFE"},{"name":"淡黄","jname":"たんこう","color":"#F8E58C"},{"name":"黄丹","jname":"おうに","color":"#EE7948"},{"name":"柳鼠","jname":"やなぎねず","color":"#C8D5BB"},{"name":"留紺","jname":"とめこん","color":"#1C305C"},{"name":"白磁","jname":"はくじ","color":"#F8FBF8"},{"name":"白茶","jname":"しらちゃ","color":"#DDBB99"},{"name":"柿色","jname":"かきいろ","color":"#ED6D3D"},{"name":"裏葉柳","jname":"うらはやなぎ","color":"#C1D8AC"},{"name":"濃藍","jname":"こいあい","color":"#0F2350"},{"name":"生成り色","jname":"きなりいろ","color":"#FBFAF5"},{"name":"赤白橡","jname":"あかしろつるばみ","color":"#D7A98C"},{"name":"黄赤","jname":"きあか","color":"#EC6800"},{"name":"山葵色","jname":"わさびいろ","color":"#A8BF93"},{"name":"鉄紺","jname":"てつこん","color":"#17184B"},{"name":"乳白色","jname":"にゅうはくしょく","color":"#F3F3F3"},{"name":"洗柿","jname":"あらいがき","color":"#F2C9AC"},{"name":"人参色","jname":"にんじんいろ","color":"#EC6800"},{"name":"老竹色","jname":"おいたけいろ","color":"#769164"},{"name":"漆黒","jname":"しっこく","color":"#0D0015"},{"name":"白練","jname":"しろねり","color":"#F3F3F2"},{"name":"鳥の子色","jname":"とりのこいろ","color":"#FFF1CF"},{"name":"橙色","jname":"だいだいいろ","color":"#EE7800"},{"name":"白緑","jname":"びゃくろく","color":"#D6E9CA"},{"name":"淡藤色","jname":"あわふじいろ","color":"#BBC8E6"},{"name":"素色","jname":"そしょく","color":"#EAE5E3"},{"name":"蜂蜜色","jname":"はちみついろ","color":"#FDDEA5"},{"name":"照柿","jname":"てりがき","color":"#EB6238"},{"name":"淡萌黄","jname":"うすもえぎ","color":"#93CA76"},{"name":"藤色","jname":"ふじいろ","color":"#BBBCDE"},{"name":"白梅鼠","jname":"しらうめねず","color":"#E5E4E6"},{"name":"肌色","jname":"はだいろ","color":"#FCE2C4"},{"name":"赤橙","jname":"あかだいだい","color":"#EA5506"},{"name":"柳染","jname":"やなぎぞめ","color":"#93B881"},{"name":"紅掛空色","jname":"べにかけそらいろ","color":"#8491C3"},{"name":"白鼠","jname":"しろねず","color":"#DCDDDD"},{"name":"薄卵色","jname":"うすたまごいろ","color":"#FDE8D0"},{"name":"金赤","jname":"きんあか","color":"#EA5506"},{"name":"薄萌葱","jname":"うすもえぎ","color":"#BADCAD"},{"name":"紅碧","jname":"べにみどり","color":"#8491C3"},{"name":"絹鼠","jname":"きぬねず","color":"#DDDCD6"},{"name":"雄黄","jname":"ゆうおう","color":"#F9C89B"},{"name":"朱色","jname":"しゅいろ","color":"#EB6101"},{"name":"深川鼠","jname":"ふかがわねずみ","color":"#97A791"},{"name":"紺桔梗","jname":"こんききょう","color":"#4D5AAF"},{"name":"灰青","jname":"はいあお","color":"#C0C6C9"},{"name":"洒落柿","jname":"しゃれがき","color":"#F7BD8F"},{"name":"小麦色","jname":"こむぎいろ","color":"#E49E61"},{"name":"若緑","jname":"わかみどり","color":"#98D98E"},{"name":"花色","jname":"はないろ","color":"#4D5AAF"},{"name":"銀鼠","jname":"ぎんねず","color":"#AFAFB0"},{"name":"赤香","jname":"あかこう","color":"#F6B894"},{"name":"丹色","jname":"にいろ","color":"#E45E32"},{"name":"浅緑","jname":"あさみどり","color":"#88CB7F"},{"name":"紺藍","jname":"こんあい","color":"#4A488E"},{"name":"薄鈍","jname":"うすにび","color":"#ADADAD"},{"name":"砥粉色","jname":"とのこいろ","color":"#F4DDA5"},{"name":"黄茶","jname":"きちゃ","color":"#E17B34"},{"name":"薄緑","jname":"うすみどり","color":"#69B076"},{"name":"紅桔梗","jname":"べにききょう","color":"#4D4398"},{"name":"薄墨色","jname":"うすずみいろ","color":"#A3A3A2"},{"name":"肉色","jname":"にくいろ","color":"#F1BF99"},{"name":"肉桂色","jname":"にっけいいろ","color":"#DD7A56"},{"name":"青鈍","jname":"あおにび","color":"#6B7B6E"},{"name":"桔梗色","jname":"ききょういろ","color":"#5654A2"},{"name":"錫色","jname":"すずいろ","color":"#9EA1A3"},{"name":"人色","jname":"ひといろ","color":"#F1BF99"},{"name":"赤朽葉色","jname":"あかくちばいろ","color":"#DB8449"},{"name":"青磁鼠","jname":"せいじねず","color":"#BED2C3"},{"name":"藤納戸","jname":"ふじなんど","color":"#706CAA"},{"name":"素鼠","jname":"すねずみ","color":"#9FA0A0"},{"name":"丁子色","jname":"ちょうじいろ","color":"#EFCD9A"},{"name":"黄櫨染","jname":"こうろぜん","color":"#D66A35"},{"name":"薄青","jname":"うすあお","color":"#93B69C"},{"name":"紅掛花色","jname":"べにかけはないろ","color":"#68699B"},{"name":"鼠色","jname":"ねずみいろ","color":"#949495"},{"name":"香色","jname":"こういろ","color":"#EFCD9A"},{"name":"蒲公英色","jname":"たんぽぽいろ","color":"#FFD900"},{"name":"錆青磁","jname":"さびせいじ","color":"#A6C8B2"},{"name":"紫苑色","jname":"しおんいろ","color":"#867BA9"},{"name":"源氏鼠","jname":"げんじねず","color":"#888084"},{"name":"薄香","jname":"うすこう","color":"#F0CFA0"},{"name":"黄色","jname":"きいろ","color":"#FFD900"},{"name":"緑青色","jname":"ろくしょういろ","color":"#47885E"},{"name":"白藤色","jname":"しらふじいろ","color":"#DBD0E6"},{"name":"灰色","jname":"はいいろ","color":"#7D7D7D"},{"name":"浅黄","jname":"うすき","color":"#EDD3A1"},{"name":"中黄","jname":"ちゅうき","color":"#FFEA00"},{"name":"千歳緑","jname":"ちとせみどり","color":"#316745"},{"name":"藤紫","jname":"ふじむらさき","color":"#A59ACA"},{"name":"鉛色","jname":"なまりいろ","color":"#7B7C7D"},{"name":"枯色","jname":"かれいろ","color":"#E0C38C"},{"name":"菜の花色","jname":"なのはないろ","color":"#FFEC47"},{"name":"若竹色","jname":"わかたけいろ","color":"#68BE8D"},{"name":"菫色","jname":"すみれいろ","color":"#7058A3"},{"name":"鈍色","jname":"にびいろ","color":"#727171"},{"name":"淡香","jname":"うすこう","color":"#F3BF88"},{"name":"黄檗色","jname":"きはだいろ","color":"#FEF263"},{"name":"緑","jname":"みどり","color":"#3EB370"},{"name":"青紫","jname":"あおむらさき","color":"#674598"},{"name":"墨","jname":"すみ","color":"#595857"},{"name":"杏色","jname":"あんずいろ","color":"#F7B977"},{"name":"卵色","jname":"たまごいろ","color":"#FCD575"},{"name":"常磐色","jname":"ときわいろ","color":"#007B43"},{"name":"菖蒲色","jname":"しょうぶいろ","color":"#674196"},{"name":"丼鼠","jname":"どぶねずみ","color":"#595455"},{"name":"東雲色","jname":"しののめいろ","color":"#F19072"},{"name":"花葉色","jname":"はなばいろ","color":"#FBD26B"},{"name":"千草鼠","jname":"ちぐさねず","color":"#BED3CA"},{"name":"竜胆色","jname":"りんどういろ","color":"#9079AD"},{"name":"消炭色","jname":"けしずみいろ","color":"#524E4D"},{"name":"曙色","jname":"あけぼのいろ","color":"#F19072"},{"name":"刈安色","jname":"かりやすいろ","color":"#F5E56B"},{"name":"千草色","jname":"ちぐさいろ","color":"#92B5A9"},{"name":"江戸紫","jname":"えどむらさき","color":"#745399"},{"name":"藍墨茶","jname":"あいすみちゃ","color":"#474A4D"},{"name":"珊瑚朱色","jname":"さんごしゅいろ","color":"#EE836F"},{"name":"玉蜀黍色","jname":"とうもろこしいろ","color":"#EEC362"},{"name":"青磁色","jname":"せいじいろ","color":"#7EBEA5"},{"name":"本紫","jname":"ほんむらさき","color":"#65318E"},{"name":"羊羹色","jname":"ようかんいろ","color":"#383C3C"},{"name":"深支子","jname":"こきくちなし","color":"#EB9B6F"},{"name":"金糸雀色","jname":"かなりあいろ","color":"#EBD842"},{"name":"青竹色","jname":"あおたけいろ","color":"#7EBEAB"},{"name":"葡萄色","jname":"ぶどういろ","color":"#522F60"},{"name":"蝋色","jname":"ろういろ","color":"#2B2B2B"},{"name":"纁","jname":"そひ","color":"#E0815E"},{"name":"黄支子色","jname":"きくちなしいろ","color":"#FFDB4F"},{"name":"常磐緑","jname":"ときわみどり","color":"#028760"},{"name":"深紫","jname":"ふかむらさき","color":"#493759"},{"name":"黒","jname":"くろ","color":"#2B2B2B"},{"name":"浅緋","jname":"うすきひ","color":"#DF7163"},{"name":"支子色","jname":"くちなしいろ","color":"#FBCA4D"},{"name":"木賊色","jname":"とくさいろ","color":"#3B7960"},{"name":"紫黒","jname":"しこく","color":"#2E2930"},{"name":"烏羽色","jname":"からすばいろ","color":"#180614"},{"name":"真赭","jname":"まそほ","color":"#D57C6B"},{"name":"向日葵色","jname":"ひまわりいろ","color":"#FCC800"},{"name":"天鵞絨","jname":"びろうど","color":"#2F5D50"},{"name":"紫","jname":"むらさき","color":"#884898"},{"name":"鉄黒","jname":"てつぐろ","color":"#281A14"},{"name":"洗朱","jname":"あらいしゅ","color":"#D0826C"},{"name":"山吹色","jname":"やまぶきいろ","color":"#F8B500"},{"name":"虫襖","jname":"むしあお","color":"#3A5B52"},{"name":"薄葡萄","jname":"うすぶどう","color":"#C0A2C7"},{"name":"濡羽色","jname":"ぬればいろ","color":"#000B00"},{"name":"遠州茶","jname":"えんしゅうちゃ","color":"#CA8269"},{"name":"鬱金色","jname":"うこんいろ","color":"#FABF14"},{"name":"革色","jname":"かわいろ","color":"#475950"},{"name":"紫紺","jname":"しこん","color":"#460E44"},{"name":"黒檀","jname":"こくたん","color":"#250D00"},{"name":"紅樺色","jname":"べにかばいろ","color":"#BB5548"},{"name":"藤黄","jname":"とうおう","color":"#F7C114"},{"name":"深緑","jname":"ふかみどり","color":"#00552E"},{"name":"暗紅色","jname":"あんこうしょく","color":"#74325C"},{"name":"憲法黒茶","jname":"けんぽうくろちゃ","color":"#241A08"},{"name":"赭","jname":"そほ","color":"#AB6953"},{"name":"金色","jname":"こんじき","color":"#E6B422"},{"name":"鉄色","jname":"てついろ","color":"#005243"},{"name":"桑の実色","jname":"くわのみいろ","color":"#55295B"},{"name":"暗黒色","jname":"あんこくしょく","color":"#16160E"}]');
    
    function su(e) {
      const t = ko()(e);
      let [n, r, o] = t.hsl();
      const a = t.get("lab.l") < 70;
      let i;
      return n = isNaN(n) ? 0 : n, i = o < .2 ? "black" : o > .85 ? "white" : r < .2 ? "gray" : n < 26 ? "red" : n < 50 ? "orange" : n < 70 ? "yellow" : n < 165 ? "green" : n < 190 ? "cyan" : n < 265 ? "blue" : n < 320 ? "magenta" : "red", {
        tag: i,
        dark: a
      }
    }
    
    function cu(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
    
    class uu extends e.Component {
      constructor(e) {
        super(e), cu(this, "filterBySearchName", (() => {
          const e = lu.filter((e => -1 !== e.name.indexOf(this.props.searchName) || -1 !== e.jname.indexOf(this.props.searchName)));
          return this.setState({colors: e})
        })), cu(this, "filterByFilterColor", (() => {
          const e = lu.filter((e => e.attr.tag === this.props.filterColor));
          this.setState({colors: e})
        })), lu[0].attr || lu.forEach((e => {
          e.attr = su(e.color)
        })), this.state = {colors: lu}
      }
      
      componentDidMount() {
        if (this.props.searchName) return this.filterBySearchName();
        this.props.filterColor && this.filterByFilterColor()
      }
      
      componentDidUpdate(e) {
        if (e.searchName !== this.props.searchName) {
          if (this.props.searchName) return this.filterBySearchName();
          if (e.filterColor === this.props.filterColor) return this.setState({colors: lu})
        }
        e.filterColor !== this.props.filterColor && (this.props.filterColor ? this.filterByFilterColor() : this.setState({colors: lu}))
      }
      
      render() {
        const {colors: t} = this.state;
        return e.createElement("div", {className: "traditional-japan"}, t.map(((t, n) => e.createElement("div", {
          key: n,
          onClick: this.props.onColorClick,
          style: {backgroundColor: t.color, color: t.attr.dark ? "#fff" : "#333"}
        }, e.createElement("div", null, t.name), e.createElement("div", null, t.jname), e.createElement("div", null, t.color)))))
      }
    }
    
    const du = JSON.parse('[{"title":"立春","colors":[{"name":"黄白游","color":"#FFF799"},{"name":"松花","color":"#FFEE6F"},{"name":"缃叶","color":"#ECD452"},{"name":"苍黄","color":"#B6A014"},{"name":"天缥","color":"#D5EBE1"},{"name":"沧浪","color":"#B1D5C8"},{"name":"苍筤","color":"#99BCAC"},{"name":"缥碧","color":"#80A492"},{"name":"流黄","color":"#8B7042"},{"name":"栗壳","color":"#775039"},{"name":"龙战","color":"#5F4321"},{"name":"青骊","color":"#422517"},{"name":"海天霞","color":"#F3A694"},{"name":"缙云","color":"#EE7959"},{"name":"纁黄","color":"#BA5140"},{"name":"珊瑚赫","color":"#C12C1F"}]},{"title":"雨水","colors":[{"name":"盈盈","color":"#F9D3E3"},{"name":"水红","color":"#ECB0C1"},{"name":"苏梅 ","color":"#DD7694"},{"name":"紫茎屏风","color":"#A76283"},{"name":"葭灰","color":"#BEB1AA"},{"name":"黄埃","color":"#B49273"},{"name":"老僧衣","color":"#A46244"},{"name":"玄天","color":"#6B5458"},{"name":"黄河琉璃","color":"#E5A84B"},{"name":"库金","color":"#E18A3B"},{"name":"缊韨","color":"#984F31"},{"name":"紫瓯","color":"#7C461E"},{"name":"欧碧","color":"#C0D695"},{"name":"春辰","color":"#A9BE7B"},{"name":"碧山","color":"#779649"},{"name":"青青","color":"#4F6F46"}]},{"title":"惊蛰","colors":[{"name":"赤缇","color":"#BA5B49"},{"name":"朱草","color":"#A64036"},{"name":"綪茷","color":"#9E2A22"},{"name":"顺圣","color":"#7C191E"},{"name":"桃夭","color":"#F6BEC8"},{"name":"杨妃","color":"#F091A0"},{"name":"长春","color":"#DC6B82"},{"name":"牙绯","color":"#C35C5D"},{"name":"黄栗留","color":"#FEDC5E"},{"name":"栀子","color":"#FAC03D"},{"name":"黄不老","color":"#DB9B34"},{"name":"柘黄","color":"#C67915"},{"name":"青鸾","color":"#9AA7B1"},{"name":"菘蓝","color":"#6B798E"},{"name":"青黛","color":"#45465E"},{"name":"绀蝶","color":"#2C2F3B"}]},{"title":"春分","colors":[{"name":"皦玉","color":"#EBEEE8"},{"name":"吉量","color":"#EBEDDF"},{"name":"韶粉","color":"#E0E0D0"},{"name":"霜地","color":"#C7C6B6"},{"name":"夏籥","color":"#D2AF9D"},{"name":"紫磨金","color":"#BC836B"},{"name":"檀色","color":"#B26D5D"},{"name":"赭罗","color":"#9A6655"},{"name":"黄丹","color":"#EA5514"},{"name":"洛神珠","color":"#D23918"},{"name":"丹雘","color":"#C8161D"},{"name":"水华朱","color":"#A72126"},{"name":"青冥","color":"#3271AE"},{"name":"青雘","color":"#007175"},{"name":"青緺","color":"#284852"},{"name":"骐驎","color":"#12264F"}]},{"title":"清明","colors":[{"name":"紫蒲","color":"#A6559D"},{"name":"赪紫","color":"#8A1874"},{"name":"齐紫","color":"#6C216D"},{"name":"凝夜紫","color":"#422256"},{"name":"冻缥","color":"#BEC2B3"},{"name":"春碧","color":"#9D9D82"},{"name":"执大象","color":"#919177"},{"name":"苔古","color":"#79836C"},{"name":"香炉紫烟","color":"#D3CCD6"},{"name":"紫菂","color":"#9B8EA9"},{"name":"拂紫绵","color":"#7E527F"},{"name":"三公子","color":"#663D74"},{"name":"琅玕紫","color":"#CB5C83"},{"name":"红踯躅","color":"#B83570"},{"name":"魏红","color":"#A73766"},{"name":"魏紫","color":"#903754"}]},{"title":"谷雨","colors":[{"name":"昌荣","color":"#DCC7E1"},{"name":"紫薄汗","color":"#BBA1CB"},{"name":"茈藐","color":"#A67EB7"},{"name":"紫紶","color":"#7D5284"},{"name":"苍葭","color":"#A8BF8F"},{"name":"庭芜绿","color":"#68945C"},{"name":"翠微","color":"#4C8045"},{"name":"翠虬","color":"#446A37"},{"name":"碧落","color":"#AED0EE"},{"name":"挼蓝","color":"#6E9BC5"},{"name":"青雀头黛","color":"#354E6B"},{"name":"螺子黛","color":"#13393E"},{"name":"露褐","color":"#BD8253"},{"name":"檀褐","color":"#945635"},{"name":"緅絺","color":"#804C2E"},{"name":"目童子","color":"#5B3222"}]},{"title":"立夏","colors":[{"name":"青粲","color":"#C3D94E"},{"name":"翠缥","color":"#B7D332"},{"name":"人籁","color":"#9EBC19"},{"name":"水龙吟","color":"#84A729"},{"name":"地籁","color":"#DFCEB4"},{"name":"大块","color":"#BFA782"},{"name":"养生主","color":"#B49B7F"},{"name":"大云","color":"#94784F"},{"name":"溶溶月","color":"#BEC2BC"},{"name":"绍衣","color":"#A8A19C"},{"name":"石莲褐","color":"#92897B"},{"name":"黑朱","color":"#70695D"},{"name":"朱颜酡","color":"#F29A76"},{"name":"苕荣","color":"#ED6D3D"},{"name":"檎丹","color":"#E94829"},{"name":"丹罽","color":"#E60012"}]},{"title":"小满","colors":[{"name":"彤管","color":"#E2A2AC"},{"name":"渥赭","color":"#DD6B7B"},{"name":"唇脂","color":"#C25160"},{"name":"朱孔阳","color":"#B81A35"},{"name":"石发","color":"#6A8D52"},{"name":"漆姑","color":"#5D8351"},{"name":"芰荷","color":"#4F794A"},{"name":"官绿","color":"#2A6E3F"},{"name":"仙米","color":"#D4C9AA"},{"name":"黄螺","color":"#B4A379"},{"name":"降真香","color":"#9E8358"},{"name":"远志","color":"#81663B"},{"name":"嫩鹅黄","color":"#F2C867"},{"name":"鞠衣","color":"#D3A237"},{"name":"郁金裙","color":"#D08635"},{"name":"黄流","color":"#9F6027"}]},{"title":"芒种","colors":[{"name":"筠雾","color":"#D5D1AE"},{"name":"瓷秘","color":"#BFC096"},{"name":"琬琰","color":"#A9A886"},{"name":"青圭","color":"#92905D"},{"name":"鸣珂","color":"#B3B59C"},{"name":"青玉案","color":"#A8B092"},{"name":"出岫","color":"#A9A773"},{"name":"风入松","color":"#868C4E"},{"name":"如梦令","color":"#DDBB99"},{"name":"芸黄","color":"#D2A36C"},{"name":"金埒","color":"#BE9457"},{"name":"雌黄","color":"#B4884D"},{"name":"曾青","color":"#535164"},{"name":"䒌靘","color":"#454659"},{"name":"璆琳","color":"#343041"},{"name":"瑾瑜","color":"#1E2732"}]},{"title":"夏至","colors":[{"name":"赩炽","color":"#CB523E"},{"name":"石榴裙","color":"#B13B2E"},{"name":"朱湛","color":"#95302E"},{"name":"大繎","color":"#822327"},{"name":"月魄","color":"#B2B6B6"},{"name":"不皂","color":"#A7AAA1"},{"name":"雷雨垂","color":"#7A7B78"},{"name":"石涅","color":"#686A67"},{"name":"扶光","color":"#F0C2A2"},{"name":"椒房","color":"#DB9C5E"},{"name":"红友","color":"#D9883D"},{"name":"光明砂","color":"#CC5D20"},{"name":"山矾","color":"#F5F3F2"},{"name":"玉頩","color":"#EAE5E3"},{"name":"二目鱼","color":"#DFE0D9"},{"name":"明月珰","color":"#D4D3CA"}]},{"title":"小暑","colors":[{"name":"骍刚","color":"#F5B087"},{"name":"赪霞","color":"#F18F60"},{"name":"赪尾","color":"#EF845D"},{"name":"朱柿","color":"#ED6D46"},{"name":"天球","color":"#E0DFC6"},{"name":"行香子","color":"#BFB99C"},{"name":"王刍","color":"#A99F70"},{"name":"荩箧","color":"#877D52"},{"name":"赤灵","color":"#954024"},{"name":"丹秫","color":"#873424"},{"name":"木兰","color":"#662B1F"},{"name":"麒麟竭","color":"#4C1E1A"},{"name":"柔蓝","color":"#106898"},{"name":"碧城","color":"#12507B"},{"name":"蓝采和","color":"#06436F"},{"name":"帝释青","color":"#003460"}]},{"title":"大暑","colors":[{"name":"夕岚","color":"#E3ADB9"},{"name":"雌霓","color":"#CF929E"},{"name":"绛纱","color":"#B27777"},{"name":"茹藘","color":"#A35F65"},{"name":"葱青","color":"#EDF1BB"},{"name":"少艾","color":"#E3EB98"},{"name":"绮钱","color":"#D8DE8A"},{"name":"翠樽","color":"#CDD171"},{"name":"石蜜","color":"#D4BF89"},{"name":"沙饧","color":"#BFA670"},{"name":"巨吕","color":"#AA8E59"},{"name":"吉金","color":"#896D47"},{"name":"山岚","color":"#BED2BB"},{"name":"渌波","color":"#9BB496"},{"name":"青楸","color":"#81A380"},{"name":"菉竹","color":"#698E6A"}]},{"title":"立秋","colors":[{"name":"窃蓝","color":"#88ABDA"},{"name":"监德","color":"#6F94CD"},{"name":"苍苍","color":"#5976BA"},{"name":"群青","color":"#2E59A7"},{"name":"白青","color":"#98B6C2"},{"name":"竹月","color":"#7F9FAF"},{"name":"空青","color":"#66889E"},{"name":"太师青","color":"#547689"},{"name":"缟羽","color":"#EFEFEF"},{"name":"香皮","color":"#D8D1C5"},{"name":"云母","color":"#C6BEB1"},{"name":"佩玖","color":"#AC9F8A"},{"name":"麹尘","color":"#C0D09D"},{"name":"绿沈","color":"#938F4C"},{"name":"绞衣","color":"#7F754C"},{"name":"素綦","color":"#595333"}]},{"title":"处暑","colors":[{"name":"退红","color":"#F0CFE3"},{"name":"樱花","color":"#E4B8D5"},{"name":"丁香","color":"#CE93BF"},{"name":"木槿","color":"#BA79B1"},{"name":"余白","color":"#C9CFC1"},{"name":"兰苕","color":"#A8B78C"},{"name":"碧滋","color":"#90A07D"},{"name":"葱倩","color":"#6C8650"},{"name":"云门","color":"#A2D2E2"},{"name":"西子","color":"#87C0CA"},{"name":"天水碧","color":"#5AA4AE"},{"name":"法翠","color":"#108B96"},{"name":"桑蕾","color":"#EAD89A"},{"name":"太一余粮","color":"#D5B45C"},{"name":"秋香","color":"#BF9C46"},{"name":"老茯神","color":"#AA8534"}]},{"title":"白露","colors":[{"name":"凝脂","color":"#F5F2E9"},{"name":"玉色","color":"#EAE4D1"},{"name":"黄润","color":"#DFD6B8"},{"name":"缣缃","color":"#D5C8A0"},{"name":"蕉月","color":"#86908A"},{"name":"千山翠","color":"#6B7D73"},{"name":"结绿","color":"#555F4D"},{"name":"绿云","color":"#45493D"},{"name":"藕丝秋半","color":"#D3CBC5"},{"name":"苍烟落照","color":"#C8B5B3"},{"name":"红藤杖","color":"#928187"},{"name":"紫鼠","color":"#594C57"},{"name":"黄粱","color":"#C4B798"},{"name":"蒸栗","color":"#A58A5F"},{"name":"射干","color":"#7C623F"},{"name":"油葫芦","color":"#644D31"}]},{"title":"秋分","colors":[{"name":"卵色","color":"#D5E3D4"},{"name":"葭菼","color":"#CAD7C5"},{"name":"冰台","color":"#BECAB7"},{"name":"青古","color":"#B3BDA9"},{"name":"栾华","color":"#C0AD5E"},{"name":"大赤","color":"#AA9649"},{"name":"佛赤","color":"#8F3D2C"},{"name":"蜜褐","color":"#683632"},{"name":"孔雀蓝","color":"#4994C4"},{"name":"吐绶蓝","color":"#4182A4"},{"name":"鱼师青","color":"#32788A"},{"name":"软翠","color":"#006D87"},{"name":"浅云","color":"#EAEEF1"},{"name":"素采","color":"#D4DDE1"},{"name":"影青","color":"#BDCBD2"},{"name":"逍遥游","color":"#B2BFC3"}]},{"title":"寒露","colors":[{"name":"醽醁","color":"#A6BAB1"},{"name":"翠涛","color":"#819D8E"},{"name":"青梅","color":"#778A77"},{"name":"翕赩","color":"#5F766A"},{"name":"九斤黄","color":"#DDB078"},{"name":"杏子","color":"#DA9233"},{"name":"媚蝶","color":"#BC6E37"},{"name":"韎韐","color":"#9F5221"},{"name":"东方既白","color":"#8BA3C7"},{"name":"绀宇","color":"#003D74"},{"name":"佛头青","color":"#19325F"},{"name":"花青","color":"#1A2847"},{"name":"弗肯红","color":"#ECD9C7"},{"name":"赤璋","color":"#E1C199"},{"name":"茧色","color":"#C6A268"},{"name":"密陀僧","color":"#B3934B"}]},{"title":"霜降","colors":[{"name":"银朱","color":"#D12920"},{"name":"胭脂虫","color":"#AB1D22"},{"name":"朱樱","color":"#8F1D22"},{"name":"爵头","color":"#631216"},{"name":"甘石","color":"#BDB2B2"},{"name":"迷楼灰","color":"#91828F"},{"name":"鸦雏","color":"#6A5B6D"},{"name":"烟墨","color":"#5C4F55"},{"name":"十样锦","color":"#F8C6B5"},{"name":"檀唇","color":"#DA9E8C"},{"name":"琼琚","color":"#D77F66"},{"name":"棠梨","color":"#B15A43"},{"name":"蜜合","color":"#DFD7C2"},{"name":"假山南","color":"#D4C1A6"},{"name":"紫花布","color":"#BEA78B"},{"name":"沉香","color":"#99806C"}]},{"title":"立冬","colors":[{"name":"半见","color":"#FFFBC7"},{"name":"女贞黄","color":"#F7EEAD"},{"name":"绢纨","color":"#ECE093"},{"name":"姜黄","color":"#D6C560"},{"name":"繱犗","color":"#88BFB8"},{"name":"二绿","color":"#5DA39D"},{"name":"铜青","color":"#3D8E86"},{"name":"石绿","color":"#206864"},{"name":"黄琮","color":"#9E8C6B"},{"name":"茶色","color":"#887657"},{"name":"伽罗","color":"#6D5C3D"},{"name":"苍艾","color":"#5A4B3B"},{"name":"藕丝褐","color":"#A88787"},{"name":"葡萄褐","color":"#9E696D"},{"name":"苏方","color":"#81474C"},{"name":"福色","color":"#662B2F"}]},{"title":"小雪","colors":[{"name":"龙膏烛","color":"#DE82A7"},{"name":"黪紫","color":"#CC73A0"},{"name":"胭脂水","color":"#B95A89"},{"name":"胭脂紫","color":"#B0436F"},{"name":"小红","color":"#E67762"},{"name":"岱赭","color":"#DD6B4F"},{"name":"鹤顶红","color":"#D24735"},{"name":"朱殷","color":"#B93A26"},{"name":"月白","color":"#D4E5EF"},{"name":"星郎","color":"#BCD4E7"},{"name":"晴山","color":"#A3BBDB"},{"name":"品月","color":"#8AABCC"},{"name":"明茶褐","color":"#9E8368"},{"name":"荆褐","color":"#906C4A"},{"name":"驼褐","color":"#7C5B3E"},{"name":"椒褐","color":"#72453A"}]},{"title":"大雪","colors":[{"name":"粉米","color":"#EFC4CE"},{"name":"縓缘","color":"#CE8892"},{"name":"美人祭","color":"#C35C6A"},{"name":"鞓红","color":"#B04552"},{"name":"米汤娇","color":"#EEEAD9"},{"name":"草白","color":"#BFC1A9"},{"name":"玄校","color":"#A9A082"},{"name":"綟绶","color":"#756C4B"},{"name":"雀梅","color":"#788A6F"},{"name":"油绿","color":"#5D7259"},{"name":"莓莓","color":"#4E6548"},{"name":"螺青","color":"#3F503B"},{"name":"暮山紫","color":"#A4ABD6"},{"name":"紫苑","color":"#757CBB"},{"name":"优昙瑞","color":"#615EA8"},{"name":"延维","color":"#4A4B9D"}]},{"title":"冬至","colors":[{"name":"银红","color":"#E7CAD3"},{"name":"莲红","color":"#D9A0B3"},{"name":"紫梅","color":"#BB7A8C"},{"name":"紫矿","color":"#9E4E56"},{"name":"咸池","color":"#DAA9A9"},{"name":"红䵂","color":"#CD7372"},{"name":"蚩尤旗","color":"#A85858"},{"name":"霁红","color":"#7C4449"},{"name":"莺儿","color":"#EBE1A9"},{"name":"禹余粮","color":"#E1D279"},{"name":"姚黄","color":"#D6BC46"},{"name":"蛾黄","color":"#BE8A2F"},{"name":"濯绛","color":"#796860"},{"name":"墨黪","color":"#585248"},{"name":"驖骊","color":"#46433B"},{"name":"京元","color":"#31322C"}]},{"title":"小寒","colors":[{"name":"酂白","color":"#F6F9E4"},{"name":"断肠","color":"#ECEBC2"},{"name":"田赤","color":"#E1D384"},{"name":"黄封","color":"#CAB272"},{"name":"丁香褐","color":"#BD9683"},{"name":"棠梨褐","color":"#955A42"},{"name":"朱石栗","color":"#81492C"},{"name":"枣褐","color":"#68361A"},{"name":"秋蓝","color":"#7D929F"},{"name":"育阳染","color":"#576470"},{"name":"霁蓝","color":"#3C4654"},{"name":"獭见","color":"#151D29"},{"name":"井天","color":"#A4C9CC"},{"name":"正青","color":"#6CA8AF"},{"name":"扁青","color":"#509296"},{"name":"䌦色","color":"#226B68"}]},{"title":"大寒","colors":[{"name":"紫府","color":"#995D7F"},{"name":"地血","color":"#814662"},{"name":"芥拾紫","color":"#602641"},{"name":"油紫","color":"#420B2F"},{"name":"骨缥","color":"#EBE3C7"},{"name":"青白玉","color":"#CAC5A0"},{"name":"绿豆褐","color":"#92896B"},{"name":"冥色","color":"#665F4D"},{"name":"肉红","color":"#DDC5B8"},{"name":"珠子褐","color":"#BEA89D"},{"name":"鹰背褐","color":"#8F6D5F"},{"name":"麝香褐","color":"#694B3C"},{"name":"石英","color":"#C8B6BB"},{"name":"银褐","color":"#9C8D9B"},{"name":"烟红","color":"#9D858F"},{"name":"紫诰","color":"#76555D"}]}]');
    
    function fu(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
    
    class pu extends e.Component {
      constructor(e) {
        super(e), fu(this, "filterBySearchName", (() => {
          const e = [];
          du.forEach((t => {
            const n = t.colors.filter((e => -1 !== e.name.indexOf(this.props.searchName)));
            n.length > 0 && e.push({title: t.title, colors: n})
          })), this.setState({colors: e})
        })), fu(this, "filterByFilterColor", (() => {
          const e = [];
          du.forEach((t => {
            const n = t.colors.filter((e => e.attr.tag === this.props.filterColor));
            n.length > 0 && e.push({title: t.title, colors: n})
          })), this.setState({colors: e})
        })), du[0].colors[0].attr || du.forEach((e => {
          e.colors.forEach((e => {
            e.attr = su(e.color)
          }))
        })), this.state = {colors: du}
      }
      
      componentDidMount() {
        if (this.props.searchName) return this.filterBySearchName();
        this.props.filterColor && this.filterByFilterColor()
      }
      
      componentDidUpdate(e) {
        if (e.searchName !== this.props.searchName) {
          if (this.props.searchName) return this.filterBySearchName();
          if (e.filterColor === this.props.filterColor) return this.setState({colors: du})
        }
        e.filterColor !== this.props.filterColor && (this.props.filterColor ? this.filterByFilterColor() : this.setState({colors: du}))
      }
      
      render() {
        const {colors: t} = this.state;
        return e.createElement("div", {className: "traditional-gugong"}, t.map(((t, n) => e.createElement("div", {
          className: "traditional-gugong-box",
          key: n
        }, e.createElement("h1", {className: "traditional-gugong-title"}, t.title), e.createElement("div", {className: "traditional-gugong-colors"}, t.colors.map(((t, r) => e.createElement("div", {
          key: n + "-" + r,
          onClick: this.props.onColorClick,
          style: {backgroundColor: t.color, color: t.attr.dark ? "#fff" : "#212121"}
        }, e.createElement("div", null, t.name), e.createElement("div", null, t.color)))))))))
      }
    }
    
    function mu(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
    
    const hu = [{id: "red", color: "#D7003A"}, {id: "orange", color: "#EE7800"}, {
      id: "yellow",
      color: "#FFD900"
    }, {id: "green", color: "#3EB370"}, {id: "cyan", color: "#0095D9"}, {id: "blue", color: "#165E83"}, {
      id: "magenta",
      color: "#884898"
    }, {id: "white", color: "#eaeaea"}, {id: "gray", color: "#c0c0cb"}, {id: "black", color: "#333333"}];
    
    class vu extends e.Component {
      constructor(...e) {
        super(...e), mu(this, "state", {
          nav: "china",
          searchName: "",
          filterColor: ""
        }), mu(this, "handleTabChange", ((e, t) => {
          this.setState({nav: t}), this.contentRef.scrollTop > 0 && (this.contentRef.scrollTop = 0)
        })), mu(this, "handleSearchInputChange", (e => {
          this.contentRef.scrollTop > 0 && (this.contentRef.scrollTop = 0), this.setState({
            searchName: e.target.value,
            filterColor: ""
          })
        })), mu(this, "handleFilterColor", (e => () => {
          if (this.contentRef.scrollTop > 0 && (this.contentRef.scrollTop = 0), e === this.state.filterColor) return this.setState({
            searchName: "",
            filterColor: ""
          });
          this.setState({searchName: "", filterColor: e})
        }))
      }
      
      render() {
        const {nav: t, searchName: n, filterColor: r} = this.state;
        return e.createElement("div", {className: "traditional-body"}, e.createElement("div", {className: "traditional-nav"}, e.createElement(Xi, {
          value: t,
          onChange: this.handleTabChange
        }, e.createElement(tl, {
          disableFocusRipple: !0,
          value: "china",
          label: "中国传统色 • 故宫 24 节气"
        }), e.createElement(tl, {
          disableFocusRipple: !0,
          value: "japan",
          label: "日本传统色"
        }))), e.createElement("div", {className: "traditional-header"}, e.createElement("div", null, e.createElement(ou, {
          value: n,
          onChange: this.handleSearchInputChange,
          size: "small",
          variant: "standard",
          fullWidth: !0,
          placeholder: "名称搜索"
        })), e.createElement("div", null, hu.map((t => e.createElement("div", {
          title: "只显示相近颜色",
          key: t.id,
          onClick: this.handleFilterColor(t.id),
          style: {backgroundColor: t.color}
        }, r === t.id && e.createElement(dl.Z, null)))))), e.createElement("div", {
          ref: e => {
            this.contentRef = e
          }, className: "traditional-content"
        }, "china" === t && e.createElement(pu, {
          onColorClick: this.props.onColorClick,
          searchName: n,
          filterColor: r
        }), "japan" === t && e.createElement(uu, {
          onColorClick: this.props.onColorClick,
          searchName: n,
          filterColor: r
        })))
      }
    }
    
    var gu = function () {
      return gu = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e
      }, gu.apply(this, arguments)
    };
    Object.create, Object.create;
    var bu = o(454), yu = o.n(bu), xu = function (e, t, n) {
      for (var r = e.x, o = e.y, a = (void 0 === n ? {} : n).fallbackToClosest, i = void 0 !== a && a, l = 1e4, s = -1, c = 0; c < t.length; c += 1) {
        var u = t[c];
        if (r >= u.left && r < u.right && o >= u.top && o < u.bottom) return c;
        if (i) {
          var d = (u.left + u.right) / 2, f = (u.top + u.bottom) / 2,
            p = Math.sqrt(Math.pow(r - d, 2) + Math.pow(o - f, 2));
          p < l && (l = p, s = c)
        }
      }
      return s
    }, Cu = function (e) {
      return {x: Number(e.clientX), y: Number(e.clientY)}
    }, Eu = function (e) {
      return {x: Number(e.clientX), y: Number(e.clientY)}
    }, wu = function (e, t) {
      return {x: e.x - t.x, y: e.y - t.y}
    }, ku = function (e) {
      e.preventDefault()
    }, Fu = function () {
      window.removeEventListener("contextmenu", ku)
    }, Su = e.createContext(void 0), Au = function (t) {
      var n = t.children, r = e.useContext(Su);
      if (!r) throw new Error("SortableItem must be a child of SortableList");
      var o = r.registerItem, a = r.removeItem, i = e.useRef(null);
      return e.useEffect((function () {
        var e = i.current;
        return e && o(e), function () {
          e && a(e)
        }
      }), [o, a, n]), e.cloneElement(n, {ref: i})
    };
    const Du = function (t) {
      var n = t.children, r = t.allowDrag, o = void 0 === r || r, a = t.onSortEnd, i = t.draggedItemClassName, l = t.as,
        s = t.lockAxis, c = t.customHolderRef, u = function (e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
          }
          return n
        }(t, ["children", "allowDrag", "onSortEnd", "draggedItemClassName", "as", "lockAxis", "customHolderRef"]),
        d = e.useRef([]), f = e.useRef([]), p = e.useRef([]), m = e.useRef(null), h = e.useRef(null),
        v = e.useRef(void 0), g = e.useRef(void 0), b = e.useRef({x: 0, y: 0});
      e.useEffect((function () {
        var e = (null == c ? void 0 : c.current) || document.body;
        return function () {
          h.current && e.removeChild(h.current)
        }
      }), [c]);
      var y = function (e) {
        if (h.current && void 0 !== v.current) {
          var t = b.current, n = f.current[v.current], r = "y" === s ? n.left : e.x - t.x,
            o = "x" === s ? n.top : e.y - t.y;
          h.current.style.transform = "translate3d(" + r + "px, " + o + "px, 0px)"
        }
      }, x = e.useCallback((function (e) {
        if (m.current) {
          var t = d.current[e], n = f.current[e], r = t.cloneNode(!0);
          i && i.split(" ").forEach((function (e) {
            return r.classList.add(e)
          })), r.style.width = n.width + "px", r.style.height = n.height + "px", r.style.position = "fixed", r.style.margin = "0", r.style.top = "0", r.style.left = "0";
          var o = t.querySelectorAll("canvas");
          r.querySelectorAll("canvas").forEach((function (e, t) {
            var n;
            null === (n = e.getContext("2d")) || void 0 === n || n.drawImage(o[t], 0, 0)
          })), ((null == c ? void 0 : c.current) || document.body).appendChild(r), h.current = r
        }
      }), [c, i]), C = function (t) {
        var n = t.onStart, r = t.onMove, o = t.onEnd, a = t.allowDrag, i = void 0 === a || a, l = t.containerRef,
          s = t.knobs, c = e.useRef({x: 0, y: 0}), u = e.useRef(void 0), d = e.useRef(!1),
          f = e.useRef({onStart: n, onMove: r, onEnd: o}), p = e.useState(!1), m = p[0], h = p[1];
        e.useEffect((function () {
          f.current = {onStart: n, onMove: r, onEnd: o}
        }), [n, r, o]);
        var v = function () {
          u.current && window.clearTimeout(u.current)
        }, g = e.useCallback((function () {
          if (l.current) {
            var e = l.current.getBoundingClientRect();
            c.current = {x: e.left, y: e.top}
          }
        }), [l]), b = e.useCallback((function (e) {
          var t = wu(e, c.current);
          f.current.onMove && f.current.onMove({pointInWindow: e, point: t})
        }), []), y = e.useCallback((function (e) {
          if (d.current) {
            d.current = !1;
            var t = Cu(e), n = wu(t, c.current);
            f.current.onStart && f.current.onStart({point: n, pointInWindow: t})
          } else b(Cu(e))
        }), [b]), x = e.useCallback((function (e) {
          e.cancelable ? (e.preventDefault(), b(Eu(e.touches[0]))) : (document.removeEventListener("touchmove", x), f.current.onEnd && f.current.onEnd())
        }), [b]), C = e.useCallback((function () {
          d.current = !1, document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", C), f.current.onEnd && f.current.onEnd()
        }), [y]), E = e.useCallback((function () {
          document.removeEventListener("touchmove", x), document.removeEventListener("touchend", E), Fu(), f.current.onEnd && f.current.onEnd()
        }), [x]), w = e.useCallback((function (e) {
          0 === e.button && ((null == s ? void 0 : s.length) && !s.find((function (t) {
            return t.contains(e.target)
          })) || (document.addEventListener("mousemove", y), document.addEventListener("mouseup", C), g(), d.current = !0))
        }), [y, C, g, s]), k = e.useCallback((function (e, t) {
          document.addEventListener("touchmove", x, {
            capture: !1,
            passive: !1
          }), document.addEventListener("touchend", E), window.addEventListener("contextmenu", ku, {
            capture: !0,
            passive: !1
          }), f.current.onStart && f.current.onStart({point: e, pointInWindow: t})
        }), [E, x]), F = e.useCallback((function (e) {
          if (!(null == s ? void 0 : s.length) || s.find((function (t) {
            return t.contains(e.target)
          }))) {
            g();
            var t = Eu(e.touches[0]), n = wu(t, c.current);
            u.current = window.setTimeout((function () {
              return k(n, t)
            }), 120)
          }
        }), [k, g, s]), S = e.useCallback((function () {
          h(!0), document.removeEventListener("touchstart", S)
        }), []), A = e.useCallback((function () {
          v()
        }), []);
        return e.useLayoutEffect((function () {
          if (m) {
            var e = l.current;
            return i && (null == e || e.addEventListener("touchstart", F, {
              capture: !0,
              passive: !1
            }), document.addEventListener("touchmove", A, {
              capture: !1,
              passive: !1
            }), document.addEventListener("touchend", A, {capture: !1, passive: !1})), function () {
              null == e || e.removeEventListener("touchstart", F, {capture: !0}), document.removeEventListener("touchmove", A, {capture: !1}), document.removeEventListener("touchend", A, {capture: !1}), document.removeEventListener("touchmove", x), document.removeEventListener("touchend", E), Fu(), v()
            }
          }
          return document.addEventListener("touchstart", S), function () {
            document.removeEventListener("touchstart", S), document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", C)
          }
        }), [m, i, S, y, x, A, E, C, l, F]), m ? {} : {onMouseDown: w}
      }({
        allowDrag: o, containerRef: m, knobs: p.current, onStart: function (e) {
          var t = e.pointInWindow;
          if (m.current) {
            f.current = d.current.map((function (e) {
              return e.getBoundingClientRect()
            }));
            var n = xu(t, f.current);
            if (-1 !== n) {
              v.current = n, x(n);
              var r = d.current[n];
              r.style.opacity = "0", r.style.visibility = "hidden";
              var o = r.getBoundingClientRect();
              b.current = {
                x: t.x - o.left,
                y: t.y - o.top
              }, y(t), window.navigator.vibrate && window.navigator.vibrate(100)
            }
          }
        }, onMove: function (e) {
          var t = e.pointInWindow;
          y(t);
          var n = v.current;
          if (void 0 !== n && void 0 !== v.current) {
            var r = f.current[v.current], o = {x: "y" === s ? r.left : t.x, y: "x" === s ? r.top : t.y},
              a = xu(o, f.current, {fallbackToClosest: !0});
            if (-1 !== a) {
              g.current = a;
              for (var i = n < a, l = 0; l < d.current.length; l += 1) {
                var c = d.current[l], u = f.current[l];
                if (i && l >= n && l <= a || !i && l >= a && l <= n) {
                  var p = f.current[i ? l - 1 : l + 1];
                  if (p) {
                    var m = p.left - u.left, h = p.top - u.top;
                    c.style.transform = "translate3d(" + m + "px, " + h + "px, 0px)"
                  }
                } else c.style.transform = "translate3d(0,0,0)";
                c.style.transitionDuration = "300ms"
              }
            }
          }
        }, onEnd: function () {
          for (var e = 0; e < d.current.length; e += 1) {
            var t = d.current[e];
            t.style.transform = "", t.style.transitionDuration = ""
          }
          var n = v.current;
          if (void 0 !== n) {
            var r = d.current[n];
            r && (r.style.opacity = "1", r.style.visibility = "");
            var o = g.current;
            void 0 !== o && n !== o && (d.current = yu()(d.current, n, o), a(n, o))
          }
          v.current = void 0, g.current = void 0, h.current && (((null == c ? void 0 : c.current) || document.body).removeChild(h.current), h.current = null)
        }
      }), E = e.useCallback((function (e) {
        d.current.push(e)
      }), []), w = e.useCallback((function (e) {
        var t = d.current.indexOf(e);
        -1 !== t && d.current.splice(t, 1)
      }), []), k = e.useCallback((function (e) {
        p.current.push(e)
      }), []), F = e.useCallback((function (e) {
        var t = p.current.indexOf(e);
        -1 !== t && p.current.splice(t, 1)
      }), []), S = e.useMemo((function () {
        return {registerItem: E, removeItem: w, registerKnob: k, removeKnob: F}
      }), [E, w, k, F]);
      return e.createElement(l || "div", gu(gu(gu({}, o ? C : {}), u), {ref: m}), e.createElement(Su.Provider, {value: S}, n))
    };
    var Zu = o(5729), Bu = {};
    Bu.styleTagTransform = h(), Bu.setAttributes = d(), Bu.insert = c().bind(null, "head"), Bu.domAPI = l(), Bu.insertStyleElement = p(), r()(Zu.Z, Bu), Zu.Z && Zu.Z.locals && Zu.Z.locals;
    var ju = o(6540), Pu = o(8364), Ru = o(7957);
    
    function Mu(e) {
      return (0, S.Z)("MuiAlert", e)
    }
    
    const Nu = (0, F.Z)("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]),
      _u = (0, ao.Z)((0, D.jsx)("path", {d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}), "SuccessOutlined"),
      Tu = (0, ao.Z)((0, D.jsx)("path", {d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}), "ReportProblemOutlined"),
      Ou = (0, ao.Z)((0, D.jsx)("path", {d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}), "ErrorOutline"),
      Iu = (0, ao.Z)((0, D.jsx)("path", {d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}), "InfoOutlined"),
      zu = (0, ao.Z)((0, D.jsx)("path", {d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}), "Close"),
      Lu = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"],
      $u = (0, E.ZP)(jt, {
        name: "MuiAlert", slot: "Root", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.root, t[n.variant], t[`${n.variant}${(0, He.Z)(n.color || n.severity)}`]]
        }
      })((({theme: e, ownerState: t}) => {
        const n = "light" === e.palette.mode ? R._j : R.$n, r = "light" === e.palette.mode ? R.$n : R._j,
          o = t.color || t.severity;
        return (0, y.Z)({}, e.typography.body2, {
          backgroundColor: "transparent",
          display: "flex",
          padding: "6px 16px"
        }, o && "standard" === t.variant && {
          color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, .6),
          backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : r(e.palette[o].light, .9),
          [`& .${Nu.icon}`]: e.vars ? {color: e.vars.palette.Alert[`${o}IconColor`]} : {color: e.palette[o].main}
        }, o && "outlined" === t.variant && {
          color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, .6),
          border: `1px solid ${(e.vars || e).palette[o].light}`,
          [`& .${Nu.icon}`]: e.vars ? {color: e.vars.palette.Alert[`${o}IconColor`]} : {color: e.palette[o].main}
        }, o && "filled" === t.variant && (0, y.Z)({fontWeight: e.typography.fontWeightMedium}, e.vars ? {
          color: e.vars.palette.Alert[`${o}FilledColor`],
          backgroundColor: e.vars.palette.Alert[`${o}FilledBg`]
        } : {
          backgroundColor: "dark" === e.palette.mode ? e.palette[o].dark : e.palette[o].main,
          color: e.palette.getContrastText(e.palette[o].main)
        }))
      })), Wu = (0, E.ZP)("div", {name: "MuiAlert", slot: "Icon", overridesResolver: (e, t) => t.icon})({
        marginRight: 12,
        padding: "7px 0",
        display: "flex",
        fontSize: 22,
        opacity: .9
      }), Hu = (0, E.ZP)("div", {
        name: "MuiAlert",
        slot: "Message",
        overridesResolver: (e, t) => t.message
      })({padding: "8px 0", minWidth: 0, overflow: "auto"}),
      Vu = (0, E.ZP)("div", {name: "MuiAlert", slot: "Action", overridesResolver: (e, t) => t.action})({
        display: "flex",
        alignItems: "flex-start",
        padding: "4px 0 0 16px",
        marginLeft: "auto",
        marginRight: -8
      }), Uu = {
        success: (0, D.jsx)(_u, {fontSize: "inherit"}),
        warning: (0, D.jsx)(Tu, {fontSize: "inherit"}),
        error: (0, D.jsx)(Ou, {fontSize: "inherit"}),
        info: (0, D.jsx)(Iu, {fontSize: "inherit"})
      }, qu = e.forwardRef((function (e, t) {
        var n, r, o, a, i, l;
        const s = (0, w.Z)({props: e, name: "MuiAlert"}), {
            action: c,
            children: u,
            className: d,
            closeText: f = "Close",
            color: p,
            components: m = {},
            componentsProps: h = {},
            icon: v,
            iconMapping: g = Uu,
            onClose: E,
            role: k = "alert",
            severity: F = "success",
            slotProps: S = {},
            slots: A = {},
            variant: Z = "standard"
          } = s, B = (0, b.Z)(s, Lu), j = (0, y.Z)({}, s, {color: p, severity: F, variant: Z}), P = (e => {
            const {variant: t, color: n, severity: r, classes: o} = e, a = {
              root: ["root", `${t}${(0, He.Z)(n || r)}`, `${t}`],
              icon: ["icon"],
              message: ["message"],
              action: ["action"]
            };
            return (0, C.Z)(a, Mu, o)
          })(j), R = null != (n = null != (r = A.closeButton) ? r : m.CloseButton) ? n : Zo,
          M = null != (o = null != (a = A.closeIcon) ? a : m.CloseIcon) ? o : zu,
          N = null != (i = S.closeButton) ? i : h.closeButton, _ = null != (l = S.closeIcon) ? l : h.closeIcon;
        return (0, D.jsxs)($u, (0, y.Z)({
          role: k,
          elevation: 0,
          ownerState: j,
          className: (0, x.Z)(P.root, d),
          ref: t
        }, B, {
          children: [!1 !== v ? (0, D.jsx)(Wu, {
            ownerState: j,
            className: P.icon,
            children: v || g[F] || Uu[F]
          }) : null, (0, D.jsx)(Hu, {
            ownerState: j,
            className: P.message,
            children: u
          }), null != c ? (0, D.jsx)(Vu, {
            ownerState: j,
            className: P.action,
            children: c
          }) : null, null == c && E ? (0, D.jsx)(Vu, {
            ownerState: j,
            className: P.action,
            children: (0, D.jsx)(R, (0, y.Z)({
              size: "small",
              "aria-label": f,
              title: f,
              color: "inherit",
              onClick: E
            }, N, {children: (0, D.jsx)(M, (0, y.Z)({fontSize: "small"}, _))}))
          }) : null]
        }))
      }));
    
    function Ku(e) {
      return (0, S.Z)("MuiDialog", e)
    }
    
    const Gu = (0, F.Z)("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]),
      Xu = (0, e.createContext)({}),
      Yu = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"],
      Qu = (0, E.ZP)(ec, {name: "MuiDialog", slot: "Backdrop", overrides: (e, t) => t.backdrop})({zIndex: -1}),
      Ju = (0, E.ZP)(oc, {
        name: "MuiDialog",
        slot: "Root",
        overridesResolver: (e, t) => t.root
      })({"@media print": {position: "absolute !important"}}), ed = (0, E.ZP)("div", {
        name: "MuiDialog", slot: "Container", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.container, t[`scroll${(0, He.Z)(n.scroll)}`]]
        }
      })((({ownerState: e}) => (0, y.Z)({
        height: "100%",
        "@media print": {height: "auto"},
        outline: 0
      }, "paper" === e.scroll && {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }, "body" === e.scroll && {
        overflowY: "auto",
        overflowX: "hidden",
        textAlign: "center",
        "&:after": {content: '""', display: "inline-block", verticalAlign: "middle", height: "100%", width: "0"}
      }))), td = (0, E.ZP)(jt, {
        name: "MuiDialog", slot: "Paper", overridesResolver: (e, t) => {
          const {ownerState: n} = e;
          return [t.paper, t[`scrollPaper${(0, He.Z)(n.scroll)}`], t[`paperWidth${(0, He.Z)(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen]
        }
      })((({theme: e, ownerState: t}) => (0, y.Z)({
        margin: 32,
        position: "relative",
        overflowY: "auto",
        "@media print": {overflowY: "visible", boxShadow: "none"}
      }, "paper" === t.scroll && {
        display: "flex",
        flexDirection: "column",
        maxHeight: "calc(100% - 64px)"
      }, "body" === t.scroll && {
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "left"
      }, !t.maxWidth && {maxWidth: "calc(100% - 64px)"}, "xs" === t.maxWidth && {
        maxWidth: "px" === e.breakpoints.unit ? Math.max(e.breakpoints.values.xs, 444) : `${e.breakpoints.values.xs}${e.breakpoints.unit}`,
        [`&.${Gu.paperScrollBody}`]: {[e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 64)]: {maxWidth: "calc(100% - 64px)"}}
      }, t.maxWidth && "xs" !== t.maxWidth && {
        maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
        [`&.${Gu.paperScrollBody}`]: {[e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 64)]: {maxWidth: "calc(100% - 64px)"}}
      }, t.fullWidth && {width: "calc(100% - 64px)"}, t.fullScreen && {
        margin: 0,
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "none",
        borderRadius: 0,
        [`&.${Gu.paperScrollBody}`]: {margin: 0, maxWidth: "100%"}
      }))), nd = e.forwardRef((function (t, n) {
        const r = (0, w.Z)({props: t, name: "MuiDialog"}), o = ct(), a = {
            enter: o.transitions.duration.enteringScreen,
            exit: o.transitions.duration.leavingScreen
          }, {
            "aria-describedby": i,
            "aria-labelledby": l,
            BackdropComponent: s,
            BackdropProps: c,
            children: u,
            className: d,
            disableEscapeKeyDown: f = !1,
            fullScreen: p = !1,
            fullWidth: m = !1,
            maxWidth: h = "sm",
            onBackdropClick: v,
            onClose: g,
            open: E,
            PaperComponent: k = jt,
            PaperProps: F = {},
            scroll: S = "paper",
            TransitionComponent: A = Xs,
            transitionDuration: Z = a,
            TransitionProps: B
          } = r, j = (0, b.Z)(r, Yu),
          P = (0, y.Z)({}, r, {disableEscapeKeyDown: f, fullScreen: p, fullWidth: m, maxWidth: h, scroll: S}), R = (e => {
            const {classes: t, scroll: n, maxWidth: r, fullWidth: o, fullScreen: a} = e, i = {
              root: ["root"],
              container: ["container", `scroll${(0, He.Z)(n)}`],
              paper: ["paper", `paperScroll${(0, He.Z)(n)}`, `paperWidth${(0, He.Z)(String(r))}`, o && "paperFullWidth", a && "paperFullScreen"]
            };
            return (0, C.Z)(i, Ku, t)
          })(P), M = e.useRef(), N = (0, fl.Z)(l), _ = e.useMemo((() => ({titleId: N})), [N]);
        return (0, D.jsx)(Ju, (0, y.Z)({
          className: (0, x.Z)(R.root, d),
          closeAfterTransition: !0,
          components: {Backdrop: Qu},
          componentsProps: {backdrop: (0, y.Z)({transitionDuration: Z, as: s}, c)},
          disableEscapeKeyDown: f,
          onClose: g,
          open: E,
          ref: n,
          onClick: e => {
            M.current && (M.current = null, v && v(e), g && g(e, "backdropClick"))
          },
          ownerState: P
        }, j, {
          children: (0, D.jsx)(A, (0, y.Z)({
            appear: !0,
            in: E,
            timeout: Z,
            role: "presentation"
          }, B, {
            children: (0, D.jsx)(ed, {
              className: (0, x.Z)(R.container),
              onMouseDown: e => {
                M.current = e.target === e.currentTarget
              },
              ownerState: P,
              children: (0, D.jsx)(td, (0, y.Z)({
                as: k,
                elevation: 24,
                role: "dialog",
                "aria-describedby": i,
                "aria-labelledby": N
              }, F, {
                className: (0, x.Z)(R.paper, F.className),
                ownerState: P,
                children: (0, D.jsx)(Xu.Provider, {value: _, children: u})
              }))
            })
          }))
        }))
      }));
    
    function rd(e) {
      return (0, S.Z)("MuiDialogActions", e)
    }
    
    (0, F.Z)("MuiDialogActions", ["root", "spacing"]);
    const od = ["className", "disableSpacing"], ad = (0, E.ZP)("div", {
      name: "MuiDialogActions", slot: "Root", overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, !n.disableSpacing && t.spacing]
      }
    })((({ownerState: e}) => (0, y.Z)({
      display: "flex",
      alignItems: "center",
      padding: 8,
      justifyContent: "flex-end",
      flex: "0 0 auto"
    }, !e.disableSpacing && {"& > :not(:first-of-type)": {marginLeft: 8}}))), id = e.forwardRef((function (e, t) {
      const n = (0, w.Z)({props: e, name: "MuiDialogActions"}), {className: r, disableSpacing: o = !1} = n,
        a = (0, b.Z)(n, od), i = (0, y.Z)({}, n, {disableSpacing: o}), l = (e => {
          const {classes: t, disableSpacing: n} = e, r = {root: ["root", !n && "spacing"]};
          return (0, C.Z)(r, rd, t)
        })(i);
      return (0, D.jsx)(ad, (0, y.Z)({className: (0, x.Z)(l.root, r), ownerState: i, ref: t}, a))
    }));
    
    function ld(e) {
      return (0, S.Z)("MuiDialogContent", e)
    }
    
    function sd(e) {
      return (0, S.Z)("MuiDialogTitle", e)
    }
    
    (0, F.Z)("MuiDialogContent", ["root", "dividers"]);
    const cd = (0, F.Z)("MuiDialogTitle", ["root"]), ud = ["className", "dividers"], dd = (0, E.ZP)("div", {
      name: "MuiDialogContent", slot: "Root", overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, n.dividers && t.dividers]
      }
    })((({theme: e, ownerState: t}) => (0, y.Z)({
      flex: "1 1 auto",
      WebkitOverflowScrolling: "touch",
      overflowY: "auto",
      padding: "20px 24px"
    }, t.dividers ? {
      padding: "16px 24px",
      borderTop: `1px solid ${(e.vars || e).palette.divider}`,
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    } : {[`.${cd.root} + &`]: {paddingTop: 0}}))), fd = e.forwardRef((function (e, t) {
      const n = (0, w.Z)({props: e, name: "MuiDialogContent"}), {className: r, dividers: o = !1} = n,
        a = (0, b.Z)(n, ud), i = (0, y.Z)({}, n, {dividers: o}), l = (e => {
          const {classes: t, dividers: n} = e, r = {root: ["root", n && "dividers"]};
          return (0, C.Z)(r, ld, t)
        })(i);
      return (0, D.jsx)(dd, (0, y.Z)({className: (0, x.Z)(l.root, r), ownerState: i, ref: t}, a))
    })), pd = ["className", "id"], md = (0, E.ZP)(Xe, {
      name: "MuiDialogTitle",
      slot: "Root",
      overridesResolver: (e, t) => t.root
    })({padding: "16px 24px", flex: "0 0 auto"}), hd = e.forwardRef((function (t, n) {
      const r = (0, w.Z)({props: t, name: "MuiDialogTitle"}), {className: o, id: a} = r, i = (0, b.Z)(r, pd), l = r,
        s = (e => {
          const {classes: t} = e;
          return (0, C.Z)({root: ["root"]}, sd, t)
        })(l), {titleId: c = a} = e.useContext(Xu);
      return (0, D.jsx)(md, (0, y.Z)({
        component: "h2",
        className: (0, x.Z)(s.root, o),
        ownerState: l,
        ref: n,
        variant: "h6",
        id: c
      }, i))
    }));
    
    function vd(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
    
    class gd extends e.PureComponent {
      constructor(...e) {
        super(...e), vd(this, "state", {open: !1, name: "", color: "", error: ""}), vd(this, "handleClose", (() => {
          this.setState({open: !1})
        })), vd(this, "handleOk", (() => {
          const {name: e, color: t} = this.state;
          if (e && e.length > 64) return this.setState({error: "名称长度太长"});
          this.props.formData.name = e;
          const n = Boolean(this.props.formData._id);
          if (!n) {
            const e = mi(t);
            if (!e) return this.setState({error: "错误的色值"});
            const n = e.hex(), r = "color/" + n.substring(1).toLowerCase();
            if (window.ztools.db.get(r)) return this.setState({error: "该颜色已收藏!"});
            this.props.formData._id = r, this.props.formData.color = n.toUpperCase(), this.props.formData.dark = e.get("lab.l") < 70
          }
          const r = window.ztools.db.put(this.props.formData);
          if (r.error) return this.setState({error: "保存失败"});
          this.props.formData._rev = r.rev, this.setState({open: !1}), this.props.onSubmit(n)
        })), vd(this, "handleNameInputChange", (e => {
          this.setState({name: e.target.value})
        })), vd(this, "handleColorInputChange", (e => {
          this.setState({color: e.target.value})
        })), vd(this, "handleColorPicker", (() => {
          window.ztools.screenColorPick((({hex: e, rgb: t}) => {
            this.setState({color: e})
          }))
        }))
      }
      
      componentDidUpdate(e) {
        this.props.formData && e.formData !== this.props.formData && this.setState({
          open: !0,
          name: this.props.formData.name,
          color: this.props.formData.color,
          error: ""
        })
      }
      
      render() {
        const {formData: t} = this.props;
        if (!t) return !1;
        const {open: n, name: r, color: o, error: a} = this.state, i = Boolean(t.color);
        return e.createElement(nd, {
          open: n,
          onClose: this.handleClose
        }, e.createElement(hd, null, t._id ? "修改名称" : "收藏新颜色", " "), e.createElement(fd, {className: "collect-form-content"}, e.createElement(ou, {
          autoFocus: i,
          value: r,
          onChange: this.handleNameInputChange,
          label: "名称",
          variant: "standard",
          helperText: "为颜色取个名称(可为空)"
        }), e.createElement(ou, {
          disabled: i,
          autoFocus: !i,
          value: o,
          onChange: this.handleColorInputChange,
          style: {marginLeft: 20},
          label: "色值",
          variant: "standard",
          helperText: "任意格式的色值"
        }), e.createElement(Hr, {
          placement: "left",
          title: "取色"
        }, e.createElement("span", null, e.createElement(Zo, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.handleColorPicker,
          disabled: i
        }, e.createElement(zo.Z, null)))), a && e.createElement(qu, {
          style: {marginTop: 20},
          severity: "error"
        }, a)), e.createElement(id, null, e.createElement(Qt, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.handleClose
        }, "取消"), e.createElement(Qt, {disableFocusRipple: !0, tabIndex: -1, onClick: this.handleOk}, "确定")))
      }
    }
    
    function bd(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
    
    class yd extends e.Component {
      constructor(...e) {
        super(...e), bd(this, "state", {open: !1}), bd(this, "handleClose", (() => {
          this.setState({open: !1})
        }))
      }
      
      shouldComponentUpdate(e, t) {
        return e.deleteData !== this.props.deleteData || t.open !== this.state.open
      }
      
      componentDidUpdate(e) {
        this.props.deleteData && e.deleteData !== this.props.deleteData && this.setState({open: !0})
      }
      
      render() {
        const {deleteData: t} = this.props;
        if (!t) return !1;
        const {open: n} = this.state;
        return e.createElement(nd, {
          open: n,
          onClose: this.handleClose
        }, e.createElement(hd, null, "确认删除该颜色？"), e.createElement(fd, null, e.createElement("div", {
          style: {
            backgroundColor: t.color,
            width: 200,
            height: 100
          }
        })), e.createElement(id, null, e.createElement(Qt, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.handleClose
        }, "取消"), e.createElement(Qt, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.props.onSubmit,
          color: "secondary",
          autoFocus: !0
        }, "删除")))
      }
    }
    
    function xd(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
    
    class Cd extends e.Component {
      constructor(e) {
        super(e), xd(this, "handleOpenNewForm", (() => {
          this.setState({colorForm: {name: "", color: ""}})
        })), xd(this, "handleOpenEditForm", (e => t => {
          t.stopPropagation(), this.setState({colorForm: {...e}})
        })), xd(this, "handleOpenDeleteConfirm", (e => t => {
          t.stopPropagation(), this.setState({openDeleteData: {...e}})
        })), xd(this, "handleDeleteSubmit", (() => {
          const {colors: e, openDeleteData: t} = this.state;
          if (!t) return;
          if (window.ztools.db.remove(t).error) return;
          const n = e.findIndex((e => e._id === t._id));
          -1 !== n && (e.splice(n, 1), this.setState({openDeleteData: null}))
        })), xd(this, "handleFormSubmit", (e => {
          const {colors: t, colorForm: n} = this.state;
          if (n) {
            if (e) {
              const e = t.findIndex((e => e._id === n._id));
              if (-1 === e) return;
              t.splice(e, 1, n)
            } else t.push(n), window.ztools.dbStorage.setItem("collectsort", t.map((e => e._id)));
            this.setState({})
          }
        })), xd(this, "handleSortEnd", ((e, t) => {
          const n = this.state.colors, [r] = n.splice(e, 1);
          n.splice(t, 0, r), window.ztools.dbStorage.setItem("collectsort", n.map((e => e._id))), this.setState({})
        }));
        const t = window.ztools.db.allDocs();
        let n, r, o = [];
        t.forEach((e => {
          e._id.startsWith("color/") ? o.push(e) : "collectsort" === e._id ? n = e : "markercolor" === e._id && (r = e)
        })), r && (r.colors.forEach((e => {
          const t = e.toUpperCase();
          if (!/^#[A-F0-9]{6}$/.test(t)) return;
          if (o.find((e => e.color === t))) return;
          const n = ko()(e).get("lab.l") < 70,
            r = {_id: "color/" + e.substring(1).toLowerCase(), name: "", color: t, dark: n},
            a = window.ztools.db.put(r);
          a.ok && (r._rev = a.rev, o.push(r))
        })), window.ztools.db.remove(r), window.ztools.dbStorage.setItem("collectsort", o.map((e => e._id)))), n && (o = o.sort(((e, t) => {
          let r = n.value.indexOf(e._id), o = n.value.indexOf(t._id);
          return -1 === r && (r = 9999999), -1 === o && (o = 9999999), r - o
        }))), this.state = {colors: o, colorForm: null, openDeleteData: null}
      }
      
      render() {
        const {colors: t, colorForm: n, openDeleteData: r} = this.state;
        return e.createElement("div", {className: "collect-body"}, e.createElement(Du, {
          onSortEnd: this.handleSortEnd,
          className: "collect-grid"
        }, t.map((t => e.createElement(Au, {key: t._id}, e.createElement("div", {
          className: "collect-item",
          onClick: this.props.onColorClick,
          style: {backgroundColor: t.color, color: t.dark ? "#fff" : "#333"}
        }, e.createElement("div", null, e.createElement("div", {className: "collect-item-info"}, t.name && e.createElement("div", null, t.name), e.createElement("div", null, t.color)), e.createElement("div", {className: "collect-item-handle"}, e.createElement(Zo, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.handleOpenEditForm(t),
          size: "small"
        }, e.createElement(Ru.Z, {fontSize: "small"})), e.createElement(Zo, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.handleOpenDeleteConfirm(t),
          size: "small"
        }, e.createElement(Pu.Z, {fontSize: "small"}))))))))), 0 === t.length && e.createElement("div", {className: "collect-empty"}, "~~ 无收藏记录 ~~"), e.createElement(gd, {
          formData: n,
          onSubmit: this.handleFormSubmit
        }), e.createElement(yd, {
          deleteData: r,
          onSubmit: this.handleDeleteSubmit
        }), e.createElement(Mo, {
          color: "primary",
          onClick: this.handleOpenNewForm,
          className: "collect-btn-add"
        }, e.createElement(ju.Z, null)))
      }
    }
    
    var Ed = o(2989), wd = {};
    wd.styleTagTransform = h(), wd.setAttributes = d(), wd.insert = c().bind(null, "head"), wd.domAPI = l(), wd.insertStyleElement = p(), r()(Ed.Z, wd), Ed.Z && Ed.Z.locals && Ed.Z.locals;
    const kd = JSON.parse('[["#FCE38A","#F38181"],["#F54EA2","#FF7676"],["#17EAD9","#6078EA"],["#622774","#C53364"],["#7117EA","#EA6060"],["#42E695","#3BB2B8"],["#F02FC2","#6094EA"],["#65799B","#5E2563"],["#184E68","#57CA85"],["#5B247A","#1BCEDF"]]'),
      Fd = JSON.parse('[["#FDEB71","#F8D800"],["#ABDCFF","#0396FF"],["#FEB692","#EA5455"],["#CE9FFC","#7367F0"],["#90F7EC","#32CCBC"],["#FFF6B7","#F6416C"],["#81FBB8","#28C76F"],["#E2B0FF","#9F44D3"],["#F97794","#623AA2"],["#FCCF31","#F55555"],["#F761A1","#8C1BAB"],["#43CBFF","#9708CC"],["#5EFCE8","#736EFE"],["#FAD7A1","#E96D71"],["#FFD26F","#3677FF"],["#A0FE65","#FA016D"],["#FFDB01","#0E197D"],["#FEC163","#DE4313"],["#92FFC0","#002661"],["#EEAD92","#6018DC"],["#F6CEEC","#D939CD"],["#52E5E7","#130CB7"],["#F1CA74","#A64DB6"],["#E8D07A","#5312D6"],["#EECE13","#B210FF"],["#79F1A4","#0E5CAD"],["#FDD819","#E80505"],["#FFF3B0","#CA26FF"],["#FFF5C3","#9452A5"],["#F05F57","#360940"],["#2AFADF","#4C83FF"],["#FFF886","#F072B6"],["#97ABFF","#123597"],["#F5CBFF","#C346C2"],["#FFF720","#3CD500"],["#FF6FD8","#3813C2"],["#EE9AE5","#5961F9"],["#FFD3A5","#FD6585"],["#C2FFD8","#465EFB"],["#FD6585","#0D25B9"],["#FD6E6A","#FFC600"],["#65FDF0","#1D6FA3"],["#6B73FF","#000DFF"],["#FF7AF5","#513162"],["#F0FF00","#58CFFB"],["#FFE985","#FA742B"],["#FFA6B7","#1E2AD2"],["#FFAA85","#B3315F"],["#72EDF2","#5151E5"],["#FF9D6C","#BB4E75"],["#F6D242","#FF52E5"],["#69FF97","#00E4FF"],["#3B2667","#BC78EC"],["#70F570","#49C628"],["#3C8CE7","#00EAFF"],["#FAB2FF","#1904E5"],["#81FFEF","#F067B4"],["#FFA8A8","#FCFF00"],["#FFCF71","#2376DD"],["#FF96F9","#C32BAC"]]'),
      Sd = JSON.parse('[["#091E3A","#2F80ED","#2D9EE0"],["#9400D3","#4B0082"],["#C84E89","#F15F79"],["#00F5A0","#00D9F5"],["#F7941E","#72C6EF","#00A651"],["#F7941E","#004E8F"],["#72C6EF","#004E8F"],["#FD8112","#0085CA"],["#BF5AE0","#A811DA"],["#00416A","#E4E5E6"],["#FBED96","#ABECD6"],["#FFE000","#799F0C"],["#F7F8F8","#ACBB78"],["#00416A","#799F0C","#FFE000"],["#334D50","#CBCAA5"],["#0052D4","#4364F7","#6FB1FC"],["#5433FF","#20BDFF","#A5FECB"],["#799F0C","#ACBB78"],["#FFE259","#FFA751"],["#00416A","#E4E5E6"],["#FFE000","#799F0C"],["#ACB6E5","#86FDE8"],["#536976","#292E49"],["#BBD2C5","#536976","#292E49"],["#B79891","#94716B"],["#9796F0","#FBC7D4"],["#BBD2C5","#536976"],["#076585","#FFF"],["#00467F","#A5CC82"],["#000C40","#607D8B"],["#1488CC","#2B32B2"],["#EC008C","#FC6767"],["#CC2B5E","#753A88"],["#2193B0","#6DD5ED"],["#E65C00","#F9D423"],["#2B5876","#4E4376"],["#314755","#26A0DA"],["#77A1D3","#79CBCA","#E684AE"],["#FF6E7F","#BFE9FF"],["#E52D27","#B31217"],["#603813","#B29F94"],["#16A085","#F4D03F"],["#D31027","#EA384D"],["#EDE574","#E1F5C4"],["#02AAB0","#00CDAC"],["#DA22FF","#9733EE"],["#348F50","#56B4D3"],["#3CA55C","#B5AC49"],["#CC95C0","#DBD4B4","#7AA1D2"],["#003973","#E5E5BE"],["#E55D87","#5FC3E4"],["#403B4A","#E7E9BB"],["#F09819","#EDDE5D"],["#FF512F","#DD2476"],["#AA076B","#61045F"],["#1A2980","#26D0CE"],["#FF512F","#F09819"],["#1D2B64","#F8CDDA"],["#1FA2FF","#12D8FA","#A6FFCB"],["#4CB8C4","#3CD3AD"],["#DD5E89","#F7BB97"],["#EB3349","#F45C43"],["#1D976C","#93F9B9"],["#FF8008","#FFC837"],["#16222A","#3A6073"],["#1F1C2C","#928DAB"],["#614385","#516395"],["#4776E6","#8E54E9"],["#085078","#85D8CE"],["#2BC0E4","#EAECC6"],["#134E5E","#71B280"],["#5C258D","#4389A2"],["#757F9A","#D7DDE8"],["#232526","#414345"],["#1CD8D2","#93EDC7"],["#3D7EAA","#FFE47A"],["#283048","#859398"],["#24C6DC","#514A9D"],["#DC2424","#4A569D"],["#ED4264","#FFEDBC"],["#DAE2F8","#D6A4A4"],["#ECE9E6","#FFFFFF"],["#7474BF","#348AC7"],["#EC6F66","#F3A183"],["#5F2C82","#49A09D"],["#C04848","#480048"],["#E43A15","#E65245"],["#414D0B","#727A17"],["#FC354C","#0ABFBC"],["#4B6CB7","#182848"],["#F857A6","#FF5858"],["#A73737","#7A2828"],["#D53369","#CBAD6D"],["#E9D362","#333333"],["#DE6262","#FFB88C"],["#666600","#999966"],["#FFEEEE","#DDEFBB"],["#EFEFBB","#D4D3DD"],["#C21500","#FFC500"],["#215F00","#E4E4D9"],["#50C9C3","#96DEDA"],["#616161","#9BC5C3"],["#DDD6F3","#FAACA8"],["#5D4157","#A8CABA"],["#E6DADA","#274046"],["#F2709C","#FF9472"],["#DAD299","#B0DAB9"],["#D3959B","#BFE6BA"],["#00D2FF","#3A7BD5"],["#870000","#190A05"],["#B993D6","#8CA6DB"],["#649173","#DBD5A4"],["#C9FFBF","#FFAFBD"],["#606C88","#3F4C6B"],["#FBD3E9","#BB377D"],["#ADD100","#7B920A"],["#FF4E50","#F9D423"],["#F0C27B","#4B1248"],["#000000","#E74C3C"],["#AAFFA9","#11FFBD"],["#B3FFAB","#12FFF7"],["#780206","#061161"],["#9D50BB","#6E48AA"],["#556270","#FF6B6B"],["#70E1F5","#FFD194"],["#00C6FF","#0072FF"],["#FE8C00","#F83600"],["#52C234","#061700"],["#485563","#29323C"],["#83A4D4","#B6FBFF"],["#FDFC47","#24FE41"],["#ABBAAB","#FFFFFF"],["#73C8A9","#373B44"],["#D38312","#A83279"],["#1E130C","#9A8478"],["#948E99","#2E1437"],["#360033","#0B8793"],["#FFA17F","#00223E"],["#43CEA2","#185A9D"],["#FFB347","#FFCC33"],["#6441A5","#2A0845"],["#FEAC5E","#C779D0","#4BC0C8"],["#833AB4","#FD1D1D","#FCB045"],["#FF0084","#33001B"],["#00BF8F","#001510"],["#136A8A","#267871"],["#8E9EAB","#EEF2F3"],["#7B4397","#DC2430"],["#D1913C","#FFD194"],["#F1F2B5","#135058"],["#6A9113","#141517"],["#004FF9","#FFF94C"],["#525252","#3D72B4"],["#BA8B02","#181818"],["#EE9CA7","#FFDDE1"],["#304352","#D7D2CC"],["#CCCCB2","#757519"],["#2C3E50","#3498DB"],["#FC00FF","#00DBDE"],["#E53935","#E35D5B"],["#005C97","#363795"],["#F46B45","#EEA849"],["#00C9FF","#92FE9D"],["#673AB7","#512DA8"],["#76B852","#8DC26F"],["#8E0E00","#1F1C18"],["#FFB75E","#ED8F03"],["#C2E59C","#64B3F4"],["#403A3E","#BE5869"],["#C02425","#F0CB35"],["#B24592","#F15F79"],["#457FCA","#5691C8"],["#6A3093","#A044FF"],["#EACDA3","#D6AE7B"],["#FD746C","#FF9068"],["#114357","#F29492"],["#1E3C72","#2A5298"],["#2F7336","#AA3A38"],["#5614B0","#DBD65C"],["#4DA0B0","#D39D38"],["#5A3F37","#2C7744"],["#2980B9","#2C3E50"],["#0099F7","#F11712"],["#834D9B","#D04ED6"],["#4B79A1","#283E51"],["#000000","#434343"],["#4CA1AF","#C4E0E5"],["#E0EAFC","#CFDEF3"],["#BA5370","#F4E2D8"],["#FF4B1F","#1FDDFF"],["#F7FF00","#DB36A4"],["#A80077","#66FF00"],["#1D4350","#A43931"],["#EECDA3","#EF629F"],["#16BFFD","#CB3066"],["#FF4B1F","#FF9068"],["#FF5F6D","#FFC371"],["#2196F3","#F44336"],["#00D2FF","#928DAB"],["#3A7BD5","#3A6073"],["#0B486B","#F56217"],["#E96443","#904E95"],["#2C3E50","#4CA1AF"],["#2C3E50","#FD746C"],["#F00000","#DC281E"],["#141E30","#243B55"],["#42275A","#734B6D"],["#000428","#004E92"],["#56AB2F","#A8E063"],["#CB2D3E","#EF473A"],["#F79D00","#64F38C"],["#F85032","#E73827"],["#FCEABB","#F8B500"],["#808080","#3FADA8"],["#FFD89B","#19547B"],["#BDC3C7","#2C3E50"],["#BE93C5","#7BC6CC"],["#A1FFCE","#FAFFD1"],["#4ECDC4","#556270"],["#3A6186","#89253E"],["#EF32D9","#89FFFD"],["#DE6161","#2657EB"],["#FF00CC","#333399"],["#FFFC00","#FFFFFF"],["#FF7E5F","#FEB47B"],["#00C3FF","#FFFF1C"],["#F4C4F3","#FC67FA"],["#41295A","#2F0743"],["#A770EF","#CF8BF3","#FDB99B"],["#EE0979","#FF6A00"],["#F3904F","#3B4371"],["#67B26F","#4CA2CD"],["#3494E6","#EC6EAD"],["#DBE6F6","#C5796D"],["#9CECFB","#65C7F7","#0052D4"],["#C0C0AA","#1CEFFF"],["#DCE35B","#45B649"],["#E8CBC0","#636FA4"],["#F0F2F0","#000C40"],["#FFAFBD","#FFC3A0"],["#43C6AC","#F8FFAE"],["#093028","#237A57"],["#43C6AC","#191654"],["#4568DC","#B06AB3"],["#0575E6","#021B79"],["#200122","#6F0000"],["#44A08D","#093637"],["#6190E8","#A7BFE8"],["#34E89E","#0F3443"],["#F7971E","#FFD200"],["#C33764","#1D2671"],["#20002C","#CBB4D4"],["#D66D75","#E29587"],["#30E8BF","#FF8235"],["#B2FEFA","#0ED2F7"],["#4AC29A","#BDFFF3"],["#E44D26","#F16529"],["#EB5757","#000000"],["#F2994A","#F2C94C"],["#56CCF2","#2F80ED"],["#007991","#78FFD6"],["#000046","#1CB5E0"],["#159957","#155799"],["#C0392B","#8E44AD"],["#EF3B36","#FFFFFF"],["#283C86","#45A247"],["#3A1C71","#D76D77","#FFAF7B"],["#CB356B","#BD3F32"],["#36D1DC","#5B86E5"],["#000000","#0F9B0F"],["#1C92D2","#F2FCFE"],["#642B73","#C6426E"],["#06BEB6","#48B1BF"],["#0CEBEB","#20E3B2","#29FFC6"],["#D9A7C7","#FFFCDC"],["#396AFC","#2948FF"],["#C9D6FF","#E2E2E2"],["#7F00FF","#E100FF"],["#FF9966","#FF5E62"],["#22C1C3","#FDBB2D"],["#1A2A6C","#B21F1F","#FDBB2D"],["#E1EEC3","#F05053"],["#ADA996","#F2F2F2","#DBDBDB","#EAEAEA"],["#667DB6","#0082C8","#0082C8","#667DB6"],["#03001E","#7303C0","#EC38BC","#FDEFF9"],["#6D6027","#D3CBB8"],["#74EBD5","#ACB6E5"],["#FC4A1A","#F7B733"],["#00F260","#0575E6"],["#800080","#FFC0CB"],["#CAC531","#F3F9A7"],["#3C3B3F","#605C3C"],["#D3CCE3","#E9E4F0"],["#00B09B","#96C93D"],["#0F0C29","#302B63","#24243E"],["#FFFBD5","#B20A2C"],["#23074D","#CC5333"],["#C94B4B","#4B134F"],["#FC466B","#3F5EFB"],["#FC5C7D","#6A82FB"],["#108DC7","#EF8E38"],["#11998E","#38EF7D"],["#3E5151","#DECBA4"],["#40E0D0","#FF8C00","#FF0080"],["#BC4E9C","#F80759"],["#355C7D","#6C5B7B","#C06C84"],["#4E54C8","#8F94FB"],["#333333","#DD1818"],["#A8C0FF","#3F2B96"],["#AD5389","#3C1053"],["#636363","#A2AB58"],["#DA4453","#89216B"],["#005AA7","#FFFDE4"],["#59C173","#A17FE0","#5D26C1"],["#FFEFBA","#FFFFFF"],["#00B4DB","#0083B0"],["#FDC830","#F37335"],["#ED213A","#93291E"],["#1E9600","#FFF200","#FF0000"],["#A8FF78","#78FFD6"],["#8A2387","#E94057","#F27121"],["#FF416C","#FF4B2B"],["#654EA3","#EAAFC8"],["#009FFF","#EC2F4B"],["#544A7D","#FFD452"],["#8360C3","#2EBF91"],["#DD3E54","#6BE585"],["#659999","#F4791F"],["#F12711","#F5AF19"],["#C31432","#240B36"],["#7F7FD5","#86A8E7","#91EAE4"],["#F953C6","#B91D73"],["#1F4037","#99F2C8"],["#8E2DE2","#4A00E0"],["#AA4B6B","#6B6B83","#3B8D99"],["#FF0099","#493240"],["#2980B9","#6DD5FA","#FFFFFF"],["#373B44","#4286F4"],["#B92B27","#1565C0"],["#12C2E9","#C471ED","#F64F59"],["#0F2027","#203A43","#2C5364"],["#C6FFDD","#FBD786","#F7797D"],["#2193B0","#6DD5ED"],["#EE9CA7","#FFDDE1"],["#BDC3C7","#2C3E50"],["#F36222","#5CB644","#007FC3"],["#2A2D3E","#FECB6E"],["#8A2BE2","#0000CD","#228B22","#CCFF00"],["#051937","#004D7A","#008793","#00BF72","#A8EB12"],["#6025F5","#FF5555"],["#8A2BE2","#FFA500","#F8F8FF"],["#2774AE","#002E5D","#002E5D"],["#004680","#4484BA"],["#7EC6BC","#EBE717"],["#FF1E56","#F9C942","#1E90FF"],["#DE8A41","#2ADA53"],["#F7F0AC","#ACF7F0","#F0ACF7"],["#FF0000","#FDCF58"],["#36B1C7","#960B33"],["#1DA1F2","#009FFC"],["#6DA6BE","#4B859E","#6DA6BE"],["#B5B9FF","#2B2C49"],["#9FA0A8","#5C7852"],["#DCFFBD","#CC86D1"],["#8BDEDA","#43ADD0","#998EE0","#E17DC2","#EF9393"],["#E6AE8C","#A8CECF"],["#00FFF0","#0083FE"],["#333333","#A2AB58","#A43931"],["#0C0C6D","#DE512B","#98D0C1","#5BB226","#023C0D"],["#05386B","#5CDB95"],["#4284DB","#29EAC4"],["#554023","#C99846"],["#516B8B","#056B3B"],["#D70652","#FF025E"],["#152331","#000000"],["#F7F7F7","#B9A0A0","#794747","#4E2020","#111111"],["#59CDE9","#0A2A88"],["#EB0000","#95008A","#3300FC"],["#FF75C3","#FFA647","#FFE83F","#9FFF5B","#70E2FF","#CD93FF"],["#81FF8A","#64965E"],["#D4FC79","#96E6A1"],["#003D4D","#00C996"]]');
    var Ad = o(6214);
    
    function Dd(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
    
    class Zd extends e.PureComponent {
      constructor(...e) {
        super(...e), Dd(this, "handleKnobMouseDown", (() => {
          const e = this.directionEditorRef.getBoundingClientRect();
          this._centerPoint = {
            x: e.x + e.width / 2,
            y: e.y + e.height / 2
          }, window.addEventListener("mousemove", this.handleKnobMouseMove), window.addEventListener("mouseup", this.handleKnobMouseUp)
        })), Dd(this, "handleKnobMouseMove", (e => {
          const t = e.clientX - this._centerPoint.x, n = this._centerPoint.y - e.clientY;
          let r = 90 - 180 * Math.atan2(n, t) / Math.PI;
          r < 0 && (r = 360 + r), this.props.onChange(Math.round(r))
        })), Dd(this, "handleKnobMouseUp", (() => {
          window.removeEventListener("mousemove", this.handleKnobMouseMove), window.removeEventListener("mouseup", this.handleKnobMouseUp)
        }))
      }
      
      getPointByAngle(e) {
        const t = 2 * Math.PI / 360 * e;
        return {x: 50 + 30 * Math.sin(t), y: 50 - 30 * Math.cos(t)}
      }
      
      render() {
        const t = this.props.angle, n = this.getPointByAngle(t);
        return e.createElement("div", {
          ref: e => {
            this.directionEditorRef = e
          }, className: "direction-editor"
        }, e.createElement("svg", {
          viewBox: "0 0 1 1",
          className: "direction-editor-box"
        }, e.createElement("polyline", {
          transform: `rotate(${t} .5 .5)`,
          points: ".5 1 .5 0 .44 .06 .56 .06 .5 0",
          className: "direction-editor-polyline"
        })), e.createElement("div", {className: "direction-editor-box"}, e.createElement("svg", {viewBox: "0 0 1 1"}, e.createElement("circle", {
          cx: "0.5",
          cy: "0.5",
          r: ".3",
          className: "direction-editor-circle"
        })), e.createElement("div", {
          onMouseDown: this.handleKnobMouseDown,
          className: "direction-editor-knob",
          style: {left: n.x + "%", top: n.y + "%"}
        })))
      }
    }
    
    function Bd(e, t, n, r) {
      const o = e - n, a = t - r;
      return Math.sqrt(o * o + a * a)
    }
    
    function jd(e, t) {
      return {x1: e.x, y1: e.y, x2: e.x + 100 * Math.cos(t + Math.PI / 2), y2: e.y + 100 * Math.sin(t + Math.PI / 2)}
    }
    
    function Pd(e, t) {
      var n = e.x1, r = e.y1, o = e.x2, a = e.y2, i = t.x1, l = t.y1, s = t.x2, c = a - r, u = n - o, d = c * n + u * r,
        f = t.y2 - l, p = i - s, m = f * i + p * l, h = c * p - f * u;
      return 0 !== h && {x: Math.round((p * d - u * m) / h * 100) / 100, y: Math.round((c * m - f * d) / h * 100) / 100}
    }
    
    function Rd(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
    
    const Md = "1000";
    
    class Nd extends e.Component {
      constructor(...e) {
        super(...e), Rd(this, "state", {
          open: !1,
          angle: 135,
          imageWidth: Md,
          imageHeight: Md
        }), Rd(this, "handleClose", (() => {
          this.setState({open: !1})
        })), Rd(this, "handleDirectionChange", (e => {
          this.setState({angle: e})
        })), Rd(this, "handleImageWidthChange", (e => {
          const t = e.target.value;
          /^\d*$/.test(t) && this.setState({imageWidth: t})
        })), Rd(this, "handleImageHeightChange", (e => {
          const t = e.target.value;
          /^\d*$/.test(t) && this.setState({imageHeight: t})
        })), Rd(this, "handleCssCodeCopy", (() => {
          const e = `linear-gradient(${this.state.angle}deg,${this.props.gradientData.join(",").toLowerCase()})`;
          window.ztools.copyText(e), window.ztools.hideMainWindow()
        })), Rd(this, "handleImageExport", (() => {
          const {angle: e, imageWidth: t, imageHeight: n} = this.state, r = parseInt(t), o = parseInt(n);
          if (r < 1 || o < 1) return;
          const a = document.createElement("canvas");
          a.width = r, a.height = o, a.style.zIndex = 0, a.style.position = "fixed", document.body.appendChild(a);
          const i = a.getContext("2d"), l = function (e, t, n) {
            let r, o, a, i;
            n = n * Math.PI / 180 + Math.PI / 2;
            const l = Math.sqrt(e / 2 * e / 2 + t / 2 * t / 2),
              s = {x1: Math.cos(n) * l + e / 2, y1: Math.sin(n) * l + t / 2, x2: e / 2, y2: t / 2};
            for (var c = [jd({x: 0, y: 0}, n), jd({x: e, y: 0}, n), jd({x: e, y: t}, n), jd({
              x: 0,
              y: t
            }, n)], u = [], d = 0; d < c.length; d++) {
              var f = Pd(c[d], s);
              u.push(f)
            }
            if (Bd(e / 2, t / 2, u[0].x, u[0].y) > Bd(e / 2, t / 2, u[1].x, u[1].y) ? (r = u[0].x, o = u[0].y) : (r = u[1].x, o = u[1].y), Bd(e / 2, t / 2, u[2].x, u[2].y) > Bd(e / 2, t / 2, u[3].x, u[3].y) ? (a = u[2].x, i = u[2].y) : (a = u[3].x, i = u[3].y), Math.round(100 * Math.atan2(t / 2 - o, e / 2 - r)) / 100 == Math.round(n % (2 * Math.PI) * 100) / 100) {
              var p = r, m = o;
              r = a, o = i, a = p, i = m
            }
            return {tx: Math.round(r), ty: Math.round(o), bx: Math.round(a), by: Math.round(i)}
          }(r, o, e), s = i.createLinearGradient(l.tx, l.ty, l.bx, l.by), c = [0];
          if (this.props.gradientData.length > 2) {
            const e = this.props.gradientData.length - 1;
            for (let t = 1; t < e; t++) c.push(t / e)
          }
          c.push(1), c.forEach(((e, t) => {
            s.addColorStop(e, this.props.gradientData[t])
          })), i.fillStyle = s, i.fillRect(0, 0, r, o), window.ztools.copyImage(a.toDataURL()), a.remove(), window.ztools.hideMainWindow()
        }))
      }
      
      componentDidUpdate(e) {
        this.props.gradientData && e.gradientData !== this.props.gradientData && this.setState({open: !0})
      }
      
      render() {
        const {gradientData: t} = this.props;
        if (!t) return !1;
        const {open: n, angle: r, imageWidth: o, imageHeight: a} = this.state,
          i = `linear-gradient(${r}deg,${t.join(",").toLowerCase()})`;
        return e.createElement(nd, {
          className: "gradient-dialog",
          open: n,
          onClose: this.handleClose
        }, e.createElement("div", {
          className: "gradient-dialog-viewer",
          style: {background: i}
        }), e.createElement("div", {className: "gradient-dialog-content"}, e.createElement("div", null, e.createElement(Zd, {
          onChange: this.handleDirectionChange,
          angle: r
        })), e.createElement("div", {className: "gradient-dialog-form"}, e.createElement("div", null, e.createElement("div", null, e.createElement(ou, {
          disabled: !0,
          value: i,
          fullWidth: !0,
          label: "CSS 代码",
          variant: "outlined"
        })), e.createElement("div", null, e.createElement(Qt, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.handleCssCodeCopy,
          variant: "contained",
          startIcon: e.createElement(Ad.Z, null)
        }, "复制代码"))), e.createElement("div", null, e.createElement("div", {className: "gradient-dialog-image-output"}, e.createElement("div", null, e.createElement(ou, {
          fullWidth: !0,
          type: "number",
          onChange: this.handleImageWidthChange,
          value: o,
          label: "图片宽度",
          variant: "outlined"
        })), e.createElement("div", null, e.createElement(ou, {
          fullWidth: !0,
          type: "number",
          onChange: this.handleImageHeightChange,
          value: a,
          label: "图片高度",
          variant: "outlined"
        }))), e.createElement("div", null, e.createElement(Qt, {
          disableFocusRipple: !0,
          tabIndex: -1,
          onClick: this.handleImageExport,
          variant: "contained",
          startIcon: e.createElement(Vr.Z, null)
        }, "复制图片"))))))
      }
    }
    
    function _d(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
    
    let Td = null;
    const Od = [{id: "red", color: "#D7003A"}, {id: "orange", color: "#EE7800"}, {
      id: "yellow",
      color: "#FFD900"
    }, {id: "green", color: "#3EB370"}, {id: "cyan", color: "#0095D9"}, {id: "blue", color: "#165E83"}, {
      id: "magenta",
      color: "#884898"
    }, {id: "white", color: "#eaeaea"}, {id: "gray", color: "#c0c0cb"}, {id: "black", color: "#333333"}];
    
    class Id extends e.Component {
      constructor(e) {
        super(e), _d(this, "handleFilterColor", (e => () => {
          if (this.gradientContentRef.scrollTop > 0 && (this.gradientContentRef.scrollTop = 0), e === this.state.filterColor) return this.setState({
            gradients: Td,
            filterColor: ""
          });
          const t = Td.filter((t => t.tags.includes(e)));
          this.setState({gradients: t, filterColor: e})
        })), _d(this, "handleGradientOpen", (e => () => {
          this.setState({gradientData: [...e.colors]})
        })), Td || (Td = [], [kd, Fd, Sd].forEach((e => {
          e.forEach((e => {
            Td.push({
              colors: e, tags: e.map((e => (e => {
                let [t, n, r] = ko()(e).hsl();
                return t = isNaN(t) ? 0 : t, r < .2 ? "black" : r > .85 ? "white" : n < .2 ? "gray" : t < 26 ? "red" : t < 50 ? "orange" : t < 70 ? "yellow" : t < 165 ? "green" : t < 190 ? "cyan" : t < 265 ? "blue" : t < 320 ? "magenta" : "red"
              })(e)))
            })
          }))
        }))), this.state = {gradients: Td, filterColor: "", gradientData: null}
      }
      
      render() {
        const {gradients: t, filterColor: n, gradientData: r} = this.state;
        return e.createElement("div", {className: "gradient-body"}, e.createElement("div", {className: "gradient-filter"}, Od.map((t => e.createElement("div", {
          title: "只显示相近颜色",
          key: t.id,
          onClick: this.handleFilterColor(t.id),
          style: {backgroundColor: t.color, boxShadow: n === t.id ? "0 0 0 2px " + t.color : "none"}
        })))), e.createElement("div", {
          ref: e => {
            this.gradientContentRef = e
          }, className: "gradient-content"
        }, t.map(((t, n) => e.createElement(jt, {
          className: "gradient-item",
          key: n
        }, e.createElement("div", {
          onClick: this.handleGradientOpen(t),
          style: {background: "linear-gradient(135deg, " + t.colors.join(",") + ")"}
        }), e.createElement("div", null, t.colors.map(((t, r) => e.createElement("div", {
          onClick: this.props.onColorClick,
          key: n + "-" + r,
          title: t,
          style: {backgroundColor: t}
        })))))))), e.createElement(Nd, {gradientData: r}))
      }
    }
    
    var zd = o(1048);
    if (!Ld) var Ld = {
      map: function (e, t) {
        var n = {};
        return t ? e.map((function (e, r) {
          return n.index = r, t.call(n, e)
        })) : e.slice()
      }, naturalOrder: function (e, t) {
        return e < t ? -1 : e > t ? 1 : 0
      }, sum: function (e, t) {
        var n = {};
        return e.reduce(t ? function (e, r, o) {
          return n.index = o, e + t.call(n, r)
        } : function (e, t) {
          return e + t
        }, 0)
      }, max: function (e, t) {
        return Math.max.apply(null, t ? Ld.map(e, t) : e)
      }
    };
    var $d = function () {
      function e(e, t, n) {
        return (e << 10) + (t << 5) + n
      }
      
      function t(e) {
        var t = [], n = !1;
        
        function r() {
          t.sort(e), n = !0
        }
        
        return {
          push: function (e) {
            t.push(e), n = !1
          }, peek: function (e) {
            return n || r(), void 0 === e && (e = t.length - 1), t[e]
          }, pop: function () {
            return n || r(), t.pop()
          }, size: function () {
            return t.length
          }, map: function (e) {
            return t.map(e)
          }, debug: function () {
            return n || r(), t
          }
        }
      }
      
      function n(e, t, n, r, o, a, i) {
        this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = r, this.b1 = o, this.b2 = a, this.histo = i
      }
      
      function r() {
        this.vboxes = new t((function (e, t) {
          return Ld.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
        }))
      }
      
      function o(t, n) {
        if (n.count()) {
          var r = n.r2 - n.r1 + 1, o = n.g2 - n.g1 + 1, a = Ld.max([r, o, n.b2 - n.b1 + 1]);
          if (1 == n.count()) return [n.copy()];
          var i, l, s, c, u = 0, d = [], f = [];
          if (a == r) for (i = n.r1; i <= n.r2; i++) {
            for (c = 0, l = n.g1; l <= n.g2; l++) for (s = n.b1; s <= n.b2; s++) c += t[e(i, l, s)] || 0;
            d[i] = u += c
          } else if (a == o) for (i = n.g1; i <= n.g2; i++) {
            for (c = 0, l = n.r1; l <= n.r2; l++) for (s = n.b1; s <= n.b2; s++) c += t[e(l, i, s)] || 0;
            d[i] = u += c
          } else for (i = n.b1; i <= n.b2; i++) {
            for (c = 0, l = n.r1; l <= n.r2; l++) for (s = n.g1; s <= n.g2; s++) c += t[e(l, s, i)] || 0;
            d[i] = u += c
          }
          return d.forEach((function (e, t) {
            f[t] = u - e
          })), function (e) {
            var t, r, o, a, l, s = e + "1", c = e + "2", p = 0;
            for (i = n[s]; i <= n[c]; i++) if (d[i] > u / 2) {
              for (o = n.copy(), a = n.copy(), l = (t = i - n[s]) <= (r = n[c] - i) ? Math.min(n[c] - 1, ~~(i + r / 2)) : Math.max(n[s], ~~(i - 1 - t / 2)); !d[l];) l++;
              for (p = f[l]; !p && d[l - 1];) p = f[--l];
              return o[c] = l, a[s] = o[c] + 1, [o, a]
            }
          }(a == r ? "r" : a == o ? "g" : "b")
        }
      }
      
      return n.prototype = {
        volume: function (e) {
          return this._volume && !e || (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
        }, count: function (t) {
          var n = this.histo;
          if (!this._count_set || t) {
            var r, o, a, i = 0;
            for (r = this.r1; r <= this.r2; r++) for (o = this.g1; o <= this.g2; o++) for (a = this.b1; a <= this.b2; a++) i += n[e(r, o, a)] || 0;
            this._count = i, this._count_set = !0
          }
          return this._count
        }, copy: function () {
          return new n(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
        }, avg: function (t) {
          var n = this.histo;
          if (!this._avg || t) {
            var r, o, a, i, l = 0, s = 0, c = 0, u = 0;
            for (o = this.r1; o <= this.r2; o++) for (a = this.g1; a <= this.g2; a++) for (i = this.b1; i <= this.b2; i++) l += r = n[e(o, a, i)] || 0, s += r * (o + .5) * 8, c += r * (a + .5) * 8, u += r * (i + .5) * 8;
            this._avg = l ? [~~(s / l), ~~(c / l), ~~(u / l)] : [~~(8 * (this.r1 + this.r2 + 1) / 2), ~~(8 * (this.g1 + this.g2 + 1) / 2), ~~(8 * (this.b1 + this.b2 + 1) / 2)]
          }
          return this._avg
        }, contains: function (e) {
          var t = e[0] >> 3;
          return gval = e[1] >> 3, bval = e[2] >> 3, t >= this.r1 && t <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
        }
      }, r.prototype = {
        push: function (e) {
          this.vboxes.push({vbox: e, color: e.avg()})
        }, palette: function () {
          return this.vboxes.map((function (e) {
            return e.color
          }))
        }, size: function () {
          return this.vboxes.size()
        }, map: function (e) {
          for (var t = this.vboxes, n = 0; n < t.size(); n++) if (t.peek(n).vbox.contains(e)) return t.peek(n).color;
          return this.nearest(e)
        }, nearest: function (e) {
          for (var t, n, r, o = this.vboxes, a = 0; a < o.size(); a++) ((n = Math.sqrt(Math.pow(e[0] - o.peek(a).color[0], 2) + Math.pow(e[1] - o.peek(a).color[1], 2) + Math.pow(e[2] - o.peek(a).color[2], 2))) < t || void 0 === t) && (t = n, r = o.peek(a).color);
          return r
        }, forcebw: function () {
          var e = this.vboxes;
          e.sort((function (e, t) {
            return Ld.naturalOrder(Ld.sum(e.color), Ld.sum(t.color))
          }));
          var t = e[0].color;
          t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
          var n = e.length - 1, r = e[n].color;
          r[0] > 251 && r[1] > 251 && r[2] > 251 && (e[n].color = [255, 255, 255])
        }
      }, {
        quantize: function (a, i) {
          if (!a.length || i < 2 || i > 256) return !1;
          var l = function (t) {
            var n, r = new Array(32768);
            return t.forEach((function (t) {
              n = e(t[0] >> 3, t[1] >> 3, t[2] >> 3), r[n] = (r[n] || 0) + 1
            })), r
          }(a);
          l.forEach((function () {
          }));
          var s = function (e, t) {
            var r, o, a, i = 1e6, l = 0, s = 1e6, c = 0, u = 1e6, d = 0;
            return e.forEach((function (e) {
              (r = e[0] >> 3) < i ? i = r : r > l && (l = r), (o = e[1] >> 3) < s ? s = o : o > c && (c = o), (a = e[2] >> 3) < u ? u = a : a > d && (d = a)
            })), new n(i, l, s, c, u, d, t)
          }(a, l), c = new t((function (e, t) {
            return Ld.naturalOrder(e.count(), t.count())
          }));
          
          function u(e, t) {
            for (var n, r = e.size(), a = 0; a < 1e3;) {
              if (r >= t) return;
              if (a++ > 1e3) return;
              if ((n = e.pop()).count()) {
                var i = o(l, n), s = i[0], c = i[1];
                if (!s) return;
                e.push(s), c && (e.push(c), r++)
              } else e.push(n), a++
            }
          }
          
          c.push(s), u(c, .75 * i);
          for (var d = new t((function (e, t) {
            return Ld.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
          })); c.size();) d.push(c.pop());
          u(d, i);
          for (var f = new r; d.size();) f.push(d.pop());
          return f
        }
      }
    }().quantize, Wd = function (e) {
      this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.width = this.canvas.width = e.naturalWidth, this.height = this.canvas.height = e.naturalHeight, this.context.drawImage(e, 0, 0, this.width, this.height)
    };
    Wd.prototype.getImageData = function () {
      return this.context.getImageData(0, 0, this.width, this.height)
    };
    var Hd = function () {
    };
    Hd.prototype.getColor = function (e, t) {
      return void 0 === t && (t = 10), this.getPalette(e, 5, t)[0]
    }, Hd.prototype.getPalette = function (e, t, n) {
      var r = function (e) {
        var t = e.colorCount, n = e.quality;
        if (void 0 !== t && Number.isInteger(t)) {
          if (1 === t) throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");
          t = Math.max(t, 2), t = Math.min(t, 20)
        } else t = 10;
        return (void 0 === n || !Number.isInteger(n) || n < 1) && (n = 10), {colorCount: t, quality: n}
      }({colorCount: t, quality: n}), o = new Wd(e), a = function (e, t, n) {
        for (var r = e, o = [], a = 0, i = void 0, l = void 0, s = void 0, c = void 0, u = void 0; a < t; a += n) l = r[0 + (i = 4 * a)], s = r[i + 1], c = r[i + 2], (void 0 === (u = r[i + 3]) || u >= 125) && (l > 250 && s > 250 && c > 250 || o.push([l, s, c]));
        return o
      }(o.getImageData().data, o.width * o.height, r.quality), i = $d(a, r.colorCount);
      return i ? i.palette() : null
    }, Hd.prototype.getColorFromUrl = function (e, t, n) {
      var r = this, o = document.createElement("img");
      o.addEventListener("load", (function () {
        var a = r.getPalette(o, 5, n);
        t(a[0], e)
      })), o.src = e
    }, Hd.prototype.getImageData = function (e, t) {
      var n = new XMLHttpRequest;
      n.open("GET", e, !0), n.responseType = "arraybuffer", n.onload = function () {
        if (200 == this.status) {
          var e = new Uint8Array(this.response);
          i = e.length;
          for (var n = new Array(i), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
          var o = n.join(""), a = window.btoa(o);
          t("data:image/png;base64," + a)
        }
      }, n.send()
    }, Hd.prototype.getColorAsync = function (e, t, n) {
      var r = this;
      this.getImageData(e, (function (e) {
        var o = document.createElement("img");
        o.addEventListener("load", (function () {
          var e = r.getPalette(o, 5, n);
          t(e[0], this)
        })), o.src = e
      }))
    };
    const Vd = Hd;
    var Ud = o(4419), qd = {};
    
    function Kd(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
    
    qd.styleTagTransform = h(), qd.setAttributes = d(), qd.insert = c().bind(null, "head"), qd.domAPI = l(), qd.insertStyleElement = p(), r()(Ud.Z, qd), Ud.Z && Ud.Z.locals && Ud.Z.locals;
    let Gd = null;
    const Xd = e => "#" + e.map((e => {
      const t = e.toString(16);
      return 1 === t.length ? "0" + t : t
    })).join("");
    
    class Yd extends e.Component {
      constructor(e) {
        super(e), Kd(this, "handleImgLoad", (e => {
          try {
            const t = new Vd, n = Xd(t.getColor(e.target)), r = t.getPalette(e.target).map((e => Xd(e)));
            this.setState({mainColor: n, paletteColors: r})
          } catch (e) {
          }
        })), Kd(this, "handleDialogSelectImage", (() => {
          const e = window.ztools.showOpenDialog({
            filters: [{name: "图片", extensions: ["png", "jpg", "jpeg"]}],
            properties: ["openFile"]
          });
          e && this.setState({imageFile: e[0]})
        })), Kd(this, "handleScreenCapture", (() => {
          window.ztools.screenCapture((e => {
            this.setState({imageFile: e})
          }))
        })), this.state = {imageFile: e.payload || Gd, mainColor: null, paletteColors: null}
      }
      
      componentWillUnmount() {
        this.state.imageFile && (Gd = this.state.imageFile)
      }
      
      render() {
        const {imageFile: t, mainColor: n, paletteColors: r} = this.state;
        return e.createElement("div", {className: "image-body"}, t ? e.createElement("div", {className: "image-content"}, e.createElement("div", null, e.createElement("img", {
          onLoad: this.handleImgLoad,
          src: t,
          alt: ""
        })), n && e.createElement("div", {className: "image-colors"}, e.createElement("div", null, e.createElement("div", {className: "image-colors-label"}, "主色"), e.createElement("div", {className: "image-main-color"}, e.createElement("div", {
          onClick: this.props.onColorClick,
          style: {backgroundColor: n}
        }))), e.createElement("div", null, e.createElement("div", {className: "image-colors-label"}, "配色"), e.createElement("div", {className: "image-palette"}, r.map((t => e.createElement("div", {
          key: t,
          onClick: this.props.onColorClick,
          style: {backgroundColor: t}
        }))))))) : e.createElement("div", {className: "image-empty"}, "左下角选择图片或屏幕截图"), e.createElement("div", {className: "image-from-btns"}, e.createElement(Hr, {
          disableFocusListener: !0,
          placement: "top",
          title: "选择图片文件"
        }, e.createElement(Mo, {
          onClick: this.handleDialogSelectImage,
          disableFocusRipple: !0,
          color: "primary",
          size: "small"
        }, e.createElement(Vr.Z, null))), e.createElement(Hr, {
          disableFocusListener: !0,
          placement: "top",
          title: "屏幕截图"
        }, e.createElement(Mo, {
          onClick: this.handleScreenCapture,
          disableFocusRipple: !0,
          color: "primary",
          size: "small"
        }, e.createElement(zd.Z, null)))))
      }
    }
    
    function Qd(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }(t)) in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
    
    class Jd extends e.Component {
      constructor(e) {
        super(e), Qd(this, "handleNavChange", (e => t => {
          t.currentTarget.blur(), this.setState({nav: e})
        })), Qd(this, "handleColorClick", (e => {
          const t = (n = e.currentTarget.style.backgroundColor, `${this.state.setting ? "" : "#"}${n.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map((e => parseInt(e, 10).toString(16).padStart(2, "0"))).join("")}`);
          var n;
          window.ztools.copyText(t), this.setState({messageData: {color: t, key: Date.now()}, openMessage: !0})
        })), Qd(this, "handleViewColorInfo", (() => {
          this.state.messageData.color && this.setState({
            nav: "color",
            colorValue: [this.state.messageData.color],
            openMessage: !1
          })
        })), Qd(this, "handleSnackbarClose", ((e, t) => {
          "clickaway" !== t && this.setState({openMessage: !1})
        })), Qd(this, "showMessage", (e => {
          this.setState({messageData: {key: Date.now(), body: e}, openMessage: !0})
        })), Qd(this, "handleSettingCheckboxChange", (e => {
          e.target.checked ? window.ztools.dbStorage.setItem("setting", !0) : window.ztools.dbStorage.removeItem("setting"), this.setState({setting: e.target.checked})
        })), this.state = {nav: "", colorValue: [], openMessage: !1, messageData: {key: 0, color: ""}, setting: !1}
      }
      
      componentDidMount() {
        window.ztools.onPluginEnter((({code: e, type: t, payload: n}) => {
          const r = !!window.ztools.dbStorage.getItem("setting");
          if ("image" === e) this.imageEnterPayload = "img" === t ? n : "files" === t ? n[0].path : null; else {
            if ("pickercolor" === e) return void window.ztools.screenColorPick((({hex: e, rgb: t}) => {
              this.setState({nav: "color", colorValue: [e], setting: r})
            }));
            if ("color" === e && "regex" === t) return void this.setState({nav: "color", colorValue: [n], setting: r})
          }
          this.setState({nav: e, setting: r})
        })), window.ztools.onPluginOut((() => {
          this.setState({nav: "", openMessage: !1})
        }))
      }
      
      render() {
        const {nav: t, colorValue: n, openMessage: r, messageData: o, setting: a} = this.state;
        let i;
        switch (t) {
          case"color":
            i = e.createElement(bi, {
              value: n,
              onColorClick: this.handleColorClick,
              setting: a,
              showMessage: this.showMessage
            });
            break;
          case"ui":
            i = e.createElement(ul, {onColorClick: this.handleColorClick});
            break;
          case"traditional":
            i = e.createElement(vu, {onColorClick: this.handleColorClick});
            break;
          case"gradient":
            i = e.createElement(Id, {onColorClick: this.handleColorClick});
            break;
          case"image":
            i = e.createElement(Yd, {payload: this.imageEnterPayload, onColorClick: this.handleColorClick});
            break;
          case"collect":
            i = e.createElement(Cd, {onColorClick: this.handleColorClick});
            break;
          default:
            i = !1
        }
        return e.createElement("div", {className: "app-body"}, e.createElement("div", {className: "app-nav"}, e.createElement(j, null, e.createElement(Re, {disablePadding: !0}, e.createElement(ze, {
          tabIndex: -1,
          selected: "color" === t,
          onClick: this.handleNavChange("color")
        }, e.createElement(Te, {className: "app-nav-icon"}, e.createElement(bo.Z, null)), e.createElement(tt, {primary: "颜色"}))), e.createElement(Re, {disablePadding: !0}, e.createElement(ze, {
          tabIndex: -1,
          selected: "ui" === t,
          onClick: this.handleNavChange("ui")
        }, e.createElement(Te, {className: "app-nav-icon"}, e.createElement(Eo.Z, null)), e.createElement(tt, {primary: "UI 色卡"}))), e.createElement(Re, {disablePadding: !0}, e.createElement(ze, {
          tabIndex: -1,
          selected: "traditional" === t,
          onClick: this.handleNavChange("traditional")
        }, e.createElement(Te, {className: "app-nav-icon"}, e.createElement(yo.Z, null)), e.createElement(tt, {primary: "传统色"}))), e.createElement(Re, {disablePadding: !0}, e.createElement(ze, {
          tabIndex: -1,
          selected: "gradient" === t,
          onClick: this.handleNavChange("gradient")
        }, e.createElement(Te, {className: "app-nav-icon"}, e.createElement(xo.Z, null)), e.createElement(tt, {primary: "渐变色"}))), e.createElement(Re, {disablePadding: !0}, e.createElement(ze, {
          tabIndex: -1,
          selected: "image" === t,
          onClick: this.handleNavChange("image")
        }, e.createElement(Te, {className: "app-nav-icon"}, e.createElement(Vr.Z, null)), e.createElement(tt, {primary: "颜色提取"}))), e.createElement(Re, {disablePadding: !0}, e.createElement(ze, {
          tabIndex: -1,
          selected: "collect" === t,
          onClick: this.handleNavChange("collect")
        }, e.createElement(Te, {className: "app-nav-icon"}, e.createElement(Co.Z, null)), e.createElement(tt, {primary: "收藏颜色"})))), e.createElement(Hr, {
          disableFocusListener: !0,
          placement: "right",
          title: '点击复制的色值不包含 "#"、"rgb"... 标识'
        }, e.createElement(Jr, {
          onChange: this.handleSettingCheckboxChange,
          checked: a,
          className: "app-setting",
          control: e.createElement(go, {disableFocusRipple: !0, tabIndex: -1, color: "default", size: "small"}),
          label: '色值去 "#"'
        }))), e.createElement("div", {className: "app-content"}, i), e.createElement($t, {
          key: o.key,
          anchorOrigin: {horizontal: "right", vertical: "top"},
          open: r,
          autoHideDuration: 3e3,
          onClose: this.handleSnackbarClose,
          message: o.color ? '已复制 "' + o.color + '"' : o.body,
          action: o.color && e.createElement(Qt, {
            disableFocusRipple: !0,
            tabIndex: -1,
            startIcon: e.createElement(bo.Z, null),
            style: {marginRight: "10px"},
            variant: "contained",
            color: "primary",
            size: "small",
            onClick: this.handleViewColorInfo
          }, "查看颜色")
        }))
      }
    }
    
    (0, t.s)(document.getElementById("root")).render(e.createElement(Jd, null))
  })()
})();
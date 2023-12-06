import React from "react";
import Script from "next/script";

const Adblock = () => {
  return (
    <>
      <Script async src="https://fundingchoicesmessages.google.com/i/pub-4588218925754368?ers=1"
              nonce="9-WEEcaxuxQ-ALLj8YXbWw"></Script>
      <Script nonce="9-WEEcaxuxQ-ALLj8YXbWw" id={"googleAdsAdBlockPrevent"}>
        {`(function() {
          function signalGooglefcPresent() {
            if (!window.frames["googlefcPresent"]) {
              if (document.body) {
                const iframe = document.createElement("iframe");
                iframe.style = "width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;";
                iframe.style.display = "none";
                iframe.name = "googlefcPresent";
                document.body.appendChild(iframe);
              } else {
                setTimeout(signalGooglefcPresent, 0);
              }
            }
          };

          signalGooglefcPresent();
        })();`}
      </Script>
      <Script id={"googleAdsAdBlockPrevent2"}>{
        `(function() {
        "use strict";

        function aa(a) {
          var b = 0;
          return function() {
            return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
          };
        }

        var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };

        function ea(a) {
          a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
          for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c;
          }
          throw Error("Cannot find global object");
        }

        var fa = ea(this);

        function ha(a, b) {
          if (b) a:{
            var c = fa;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
              var e = a[d];
              if (!(e in c)) break a;
              c = c[e];
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ba(c, a, { configurable: !0, writable: !0, value: b });
          }
        }

        var ia = "function" == typeof Object.create ? Object.create : function(a) {
          function b() {
          }

          b.prototype = a;
          return new b;
        }, l;
        if ("function" == typeof Object.setPrototypeOf) l = Object.setPrototypeOf; else {
          var m;
          a:{
            var ja = { a: !0 }, ka = {};
            try {
              ka.__proto__ = ja;
              m = ka.a;
              break a;
            } catch (a) {
            }
            m = !1;
          }
          l = m ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a;
          } : null;
        }
        var la = l;

        function n(a, b) {
          a.prototype = ia(b.prototype);
          a.prototype.constructor = a;
          if (la) la(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
          a.A = b.prototype;
        }

        function ma() {
          for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
          return b;
        }

        var na = "function" == typeof Object.assign ? Object.assign : function(a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
          }
          return a;
        };
        ha("Object.assign", function(a) {
          return a || na;
        });/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var p = this || self;

        function q(a) {
          return a;
        };var t, u;
        a:{
          for (var oa = ["CLOSURE_FLAGS"], v = p, x = 0; x < oa.length; x++) if (v = v[oa[x]], null == v) {
            u = null;
            break a;
          }
          u = v;
        }
        var pa = u && u[610401301];
        t = null != pa ? pa : !1;
        var z, qa = p.navigator;
        z = qa ? qa.userAgentData || null : null;

        function A(a) {
          return t ? z ? z.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a);
          }) : !1 : !1;
        }

        function B(a) {
          var b;
          a:{
            if (b = p.navigator) if (b = b.userAgent) break a;
            b = "";
          }
          return -1 != b.indexOf(a);
        };

        function C() {
          return t ? !!z && 0 < z.brands.length : !1;
        }

        function D() {
          return C() ? A("Chromium") : (B("Chrome") || B("CriOS")) && !(C() ? 0 : B("Edge")) || B("Silk");
        };var ra = C() ? !1 : B("Trident") || B("MSIE");
        !B("Android") || D();
        D();
        B("Safari") && (D() || (C() ? 0 : B("Coast")) || (C() ? 0 : B("Opera")) || (C() ? 0 : B("Edge")) || (C() ? A("Microsoft Edge") : B("Edg/")) || C() && A("Opera"));
        var sa = {}, E = null;
        var ta = "undefined" !== typeof Uint8Array, ua = !ra && "function" === typeof btoa;
        var F = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0,
          G = F ? function(a, b) {
            a[F] |= b;
          } : function(a, b) {
            void 0 !== a.g ? a.g |= b : Object.defineProperties(a, {
              g: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1,
              },
            });
          };

        function va(a) {
          var b = H(a);
          1 !== (b & 1) && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), I(a, b | 1));
        }

        var H = F ? function(a) {
          return a[F] | 0;
        } : function(a) {
          return a.g | 0;
        }, J = F ? function(a) {
          return a[F];
        } : function(a) {
          return a.g;
        }, I = F ? function(a, b) {
          a[F] = b;
        } : function(a, b) {
          void 0 !== a.g ? a.g = b : Object.defineProperties(a, {
            g: {
              value: b,
              configurable: !0,
              writable: !0,
              enumerable: !1,
            },
          });
        };

        function wa() {
          var a = [];
          G(a, 1);
          return a;
        }

        function xa(a, b) {
          I(b, (a | 0) & -99);
        }

        function K(a, b) {
          I(b, (a | 34) & -73);
        }

        function L(a) {
          a = a >> 11 & 1023;
          return 0 === a ? 536870912 : a;
        };var M = {};

        function N(a) {
          return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
        }

        var O, ya = [];
        I(ya, 39);
        O = Object.freeze(ya);
        var P;

        function Q(a, b) {
          P = b;
          a = new a(b);
          P = void 0;
          return a;
        }

        function R(a, b, c) {
          null == a && (a = P);
          P = void 0;
          if (null == a) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -2095105 | (b & 1023) << 11);
          } else {
            if (!Array.isArray(a)) throw Error();
            d = H(a);
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error();
            a:{
              c = a;
              var e = c.length;
              if (e) {
                var f = e - 1, g = c[f];
                if (N(g)) {
                  d |= 256;
                  b = (d >> 9 & 1) - 1;
                  e = f - b;
                  1024 <= e && (za(c, b, g), e = 1023);
                  d = d & -2095105 | (e & 1023) << 11;
                  break a;
                }
              }
              b && (g = (d >> 9 & 1) - 1, b = Math.max(b, e - g), 1024 < b && (za(c, g, {}), d |= 256, b = 1023), d = d & -2095105 | (b & 1023) << 11);
            }
          }
          I(a, d);
          return a;
        }

        function za(a, b, c) {
          for (var d = 1023 + b, e = a.length, f = d; f < e; f++) {
            var g = a[f];
            null != g && g !== c && (c[f - b] = g);
          }
          a.length = d + 1;
          a[d] = c;
        };

        function Aa(a) {
          switch (typeof a) {
            case "number":
              return isFinite(a) ? a : String(a);
            case "boolean":
              return a ? 1 : 0;
            case "object":
              if (a && !Array.isArray(a) && ta && null != a && a instanceof Uint8Array) {
                if (ua) {
                  for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                  b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                  a = btoa(b);
                } else {
                  void 0 === b && (b = 0);
                  if (!E) {
                    E = {};
                    c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
                    d = ["+/=", "+/", "-_=", "-_.", "-_"];
                    for (var e =
                      0; 5 > e; e++) {
                      var f = c.concat(d[e].split(""));
                      sa[e] = f;
                      for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        void 0 === E[h] && (E[h] = g);
                      }
                    }
                  }
                  b = sa[b];
                  c = Array(Math.floor(a.length / 3));
                  d = b[64] || "";
                  for (e = f = 0; f < a.length - 2; f += 3) {
                    var k = a[f], w = a[f + 1];
                    h = a[f + 2];
                    g = b[k >> 2];
                    k = b[(k & 3) << 4 | w >> 4];
                    w = b[(w & 15) << 2 | h >> 6];
                    h = b[h & 63];
                    c[e++] = g + k + w + h;
                  }
                  g = 0;
                  h = d;
                  switch (a.length - f) {
                    case 2:
                      g = a[f + 1], h = b[(g & 15) << 2] || d;
                    case 1:
                      a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d;
                  }
                  a = c.join("");
                }
                return a;
              }
          }
          return a;
        };

        function Ba(a, b, c) {
          a = Array.prototype.slice.call(a);
          var d = a.length, e = b & 256 ? a[d - 1] : void 0;
          d += e ? -1 : 0;
          for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
          if (e) {
            b = a[b] = {};
            for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]));
          }
          return a;
        }

        function Da(a, b, c, d, e, f) {
          if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && H(a) & 1 ? void 0 : f && H(a) & 2 ? a : Ea(a, b, c, void 0 !== d, e, f); else if (N(a)) {
              var g = {}, h;
              for (h in a) Object.prototype.hasOwnProperty.call(a, h) && (g[h] = Da(a[h], b, c, d, e, f));
              a = g;
            } else a = b(a, d);
            return a;
          }
        }

        function Ea(a, b, c, d, e, f) {
          var g = d || c ? H(a) : 0;
          d = d ? !!(g & 32) : void 0;
          a = Array.prototype.slice.call(a);
          for (var h = 0; h < a.length; h++) a[h] = Da(a[h], b, c, d, e, f);
          c && c(g, a);
          return a;
        }

        function Fa(a) {
          return a.s === M ? a.toJSON() : Aa(a);
        };

        function Ga(a, b, c) {
          c = void 0 === c ? K : c;
          if (null != a) {
            if (ta && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
              var d = H(a);
              if (d & 2) return a;
              if (b && !(d & 64) && (d & 32 || 0 === d)) return I(a, d | 34), a;
              a = Ea(a, Ga, d & 4 ? K : c, !0, !1, !0);
              b = H(a);
              b & 4 && b & 2 && Object.freeze(a);
              return a;
            }
            a.s === M && (b = a.h, c = J(b), a = c & 2 ? a : Q(a.constructor, Ha(b, c, !0)));
            return a;
          }
        }

        function Ha(a, b, c) {
          var d = c || b & 2 ? K : xa, e = !!(b & 32);
          a = Ba(a, b, function(f) {
            return Ga(f, e, d);
          });
          G(a, 32 | (c ? 2 : 0));
          return a;
        };

        function Ia(a, b) {
          a = a.h;
          return Ja(a, J(a), b);
        }

        function Ja(a, b, c, d) {
          if (-1 === c) return null;
          if (c >= L(b)) {
            if (b & 256) return a[a.length - 1][c];
          } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + ((b >> 9 & 1) - 1);
            if (b < e) return a[b];
          }
        }

        function Ka(a, b, c, d, e) {
          var f = L(b);
          if (c >= f || e) {
            e = b;
            if (b & 256) f = a[a.length - 1]; else {
              if (null == d) return;
              f = a[f + ((b >> 9 & 1) - 1)] = {};
              e |= 256;
            }
            f[c] = d;
            e &= -1025;
            e !== b && I(a, e);
          } else a[c + ((b >> 9 & 1) - 1)] = d, b & 256 && (d = a[a.length - 1], c in d && delete d[c]), b & 1024 && I(a, b & -1025);
        }

        function La(a, b) {
          var c = Ma;
          var d = void 0 === d ? !1 : d;
          var e = a.h;
          var f = J(e), g = Ja(e, f, b, d);
          var h = !1;
          if (null == g || "object" !== typeof g || (h = Array.isArray(g)) || g.s !== M) if (h) {
            var k = h = H(g);
            0 === k && (k |= f & 32);
            k |= f & 2;
            k !== h && I(g, k);
            c = new c(g);
          } else c = void 0; else c = g;
          c !== g && null != c && Ka(e, f, b, c, d);
          e = c;
          if (null == e) return e;
          a = a.h;
          f = J(a);
          f & 2 || (g = e, c = g.h, h = J(c), g = h & 2 ? Q(g.constructor, Ha(c, h, !1)) : g, g !== e && (e = g, Ka(a, f, b, e, d)));
          return e;
        }

        function Na(a, b) {
          a = Ia(a, b);
          return null == a || "string" === typeof a ? a : void 0;
        }

        function Oa(a, b) {
          a = Ia(a, b);
          return null != a ? a : 0;
        }

        function S(a, b) {
          a = Na(a, b);
          return null != a ? a : "";
        };

        function T(a, b, c) {
          this.h = R(a, b, c);
        }

        T.prototype.toJSON = function() {
          var a = Ea(this.h, Fa, void 0, void 0, !1, !1);
          return Pa(this, a, !0);
        };
        T.prototype.s = M;
        T.prototype.toString = function() {
          return Pa(this, this.h, !1).toString();
        };

        function Pa(a, b, c) {
          var d = a.constructor.v, e = L(J(c ? a.h : b)), f = !1;
          if (d) {
            if (!c) {
              b = Array.prototype.slice.call(b);
              var g;
              if (b.length && N(g = b[b.length - 1])) for (f = 0; f < d.length; f++) if (d[f] >= e) {
                Object.assign(b[b.length - 1] = {}, g);
                break;
              }
              f = !0;
            }
            e = b;
            c = !c;
            g = J(a.h);
            a = L(g);
            g = (g >> 9 & 1) - 1;
            for (var h, k, w = 0; w < d.length; w++) if (k = d[w], k < a) {
              k += g;
              var r = e[k];
              null == r ? e[k] = c ? O : wa() : c && r !== O && va(r);
            } else h || (r = void 0, e.length && N(r = e[e.length - 1]) ? h = r : e.push(h = {})), r = h[k], null == h[k] ? h[k] = c ? O : wa() : c && r !== O && va(r);
          }
          d = b.length;
          if (!d) return b;
          var Ca;
          if (N(h = b[d - 1])) {
            a:{
              var y = h;
              e = {};
              c = !1;
              for (var ca in y) Object.prototype.hasOwnProperty.call(y, ca) && (a = y[ca], Array.isArray(a) && a != a && (c = !0), null != a ? e[ca] = a : c = !0);
              if (c) {
                for (var rb in e) {
                  y = e;
                  break a;
                }
                y = null;
              }
            }
            y != h && (Ca = !0);
            d--;
          }
          for (; 0 < d; d--) {
            h = b[d - 1];
            if (null != h) break;
            var cb = !0;
          }
          if (!Ca && !cb) return b;
          var da;
          f ? da = b : da = Array.prototype.slice.call(b, 0, d);
          b = da;
          f && (b.length = d);
          y && b.push(y);
          return b;
        };

        function Qa(a) {
          return function(b) {
            if (null == b || "" == b) b = new a; else {
              b = JSON.parse(b);
              if (!Array.isArray(b)) throw Error(void 0);
              G(b, 32);
              b = Q(a, b);
            }
            return b;
          };
        };

        function Ra(a) {
          this.h = R(a);
        }

        n(Ra, T);
        var Sa = Qa(Ra);
        var U;

        function V(a) {
          this.g = a;
        }

        V.prototype.toString = function() {
          return this.g + "";
        };
        var Ta = {};

        function Ua() {
          return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36);
        };

        function Va(a, b) {
          b = String(b);
          "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
          return a.createElement(b);
        }

        function Wa(a) {
          this.g = a || p.document || document;
        }

        Wa.prototype.appendChild = function(a, b) {
          a.appendChild(b);
        };/*

 SPDX-License-Identifier: Apache-2.0
*/
        function Xa(a, b) {
          a.src = b instanceof V && b.constructor === V ? b.g : "type_error:TrustedResourceUrl";
          var c, d;
          (c = (b = null == (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c);
        };

        function Ya(a) {
          a = void 0 === a ? document : a;
          return a.createElement("script");
        };

        function Za(a, b, c, d, e, f) {
          try {
            var g = a.g, h = Ya(g);
            h.async = !0;
            Xa(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", function() {
              e();
              d && g.head.removeChild(h);
            });
            h.addEventListener("error", function() {
              0 < c ? Za(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f());
            });
          } catch (k) {
            f();
          }
        };var $a = p.atob("aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaW1hZ2VzL2ljb25zL21hdGVyaWFsL3N5c3RlbS8xeC93YXJuaW5nX2FtYmVyXzI0ZHAucG5n"),
          ab = p.atob("WW91IGFyZSBzZWVpbmcgdGhpcyBtZXNzYWdlIGJlY2F1c2UgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlIGlzIGludGVyZmVyaW5nIHdpdGggdGhpcyBwYWdlLg=="),
          bb = p.atob("RGlzYWJsZSBhbnkgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlLCB0aGVuIHJlbG9hZCB0aGlzIHBhZ2Uu");

        function db(a, b, c) {
          this.i = a;
          this.l = new Wa(this.i);
          this.g = null;
          this.j = [];
          this.m = !1;
          this.u = b;
          this.o = c;
        }

        function eb(a) {
          if (a.i.body && !a.m) {
            var b = function() {
              fb(a);
              p.setTimeout(function() {
                return gb(a, 3);
              }, 50);
            };
            Za(a.l, a.u, 2, !0, function() {
              p[a.o] || b();
            }, b);
            a.m = !0;
          }
        }

        function fb(a) {
          for (var b = W(1, 5), c = 0; c < b; c++) {
            var d = X(a);
            a.i.body.appendChild(d);
            a.j.push(d);
          }
          b = X(a);
          b.style.bottom = "0";
          b.style.left = "0";
          b.style.position = "fixed";
          b.style.width = W(100, 110).toString() + "%";
          b.style.zIndex = W(2147483544, 2147483644).toString();
          b.style["background-color"] = hb(249, 259, 242, 252, 219, 229);
          b.style["box-shadow"] = "0 0 12px #888";
          b.style.color = hb(0, 10, 0, 10, 0, 10);
          b.style.display = "flex";
          b.style["justify-content"] = "center";
          b.style["font-family"] = "Roboto, Arial";
          c = X(a);
          c.style.width = W(80,
            85).toString() + "%";
          c.style.maxWidth = W(750, 775).toString() + "px";
          c.style.margin = "24px";
          c.style.display = "flex";
          c.style["align-items"] = "flex-start";
          c.style["justify-content"] = "center";
          d = Va(a.l.g, "IMG");
          d.className = Ua();
          d.src = $a;
          d.alt = "Warning icon";
          d.style.height = "24px";
          d.style.width = "24px";
          d.style["padding-right"] = "16px";
          var e = X(a), f = X(a);
          f.style["font-weight"] = "bold";
          f.textContent = ab;
          var g = X(a);
          g.textContent = bb;
          Y(a, e, f);
          Y(a, e, g);
          Y(a, c, d);
          Y(a, c, e);
          Y(a, b, c);
          a.g = b;
          a.i.body.appendChild(a.g);
          b = W(1, 5);
          for (c =
                 0; c < b; c++) d = X(a), a.i.body.appendChild(d), a.j.push(d);
        }

        function Y(a, b, c) {
          for (var d = W(1, 5), e = 0; e < d; e++) {
            var f = X(a);
            b.appendChild(f);
          }
          b.appendChild(c);
          c = W(1, 5);
          for (d = 0; d < c; d++) e = X(a), b.appendChild(e);
        }

        function W(a, b) {
          return Math.floor(a + Math.random() * (b - a));
        }

        function hb(a, b, c, d, e, f) {
          return "rgb(" + W(Math.max(a, 0), Math.min(b, 255)).toString() + "," + W(Math.max(c, 0), Math.min(d, 255)).toString() + "," + W(Math.max(e, 0), Math.min(f, 255)).toString() + ")";
        }

        function X(a) {
          a = Va(a.l.g, "DIV");
          a.className = Ua();
          return a;
        }

        function gb(a, b) {
          0 >= b || null != a.g && 0 != a.g.offsetHeight && 0 != a.g.offsetWidth || (ib(a), fb(a), p.setTimeout(function() {
            return gb(a, b - 1);
          }, 50));
        }

        function ib(a) {
          var b = a.j;
          var c = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
          if (c) b = c.call(b); else if ("number" == typeof b.length) b = { next: aa(b) }; else throw Error(String(b) + " is not an iterable or ArrayLike");
          for (c = b.next(); !c.done; c = b.next()) (c = c.value) && c.parentNode && c.parentNode.removeChild(c);
          a.j = [];
          (b = a.g) && b.parentNode && b.parentNode.removeChild(b);
          a.g = null;
        };

        function jb(a, b, c, d, e) {
          function f(k) {
            document.body ? g(document.body) : 0 < k ? p.setTimeout(function() {
              f(k - 1);
            }, e) : b();
          }

          function g(k) {
            k.appendChild(h);
            p.setTimeout(function() {
              h ? (0 !== h.offsetHeight && 0 !== h.offsetWidth ? b() : a(), h.parentNode && h.parentNode.removeChild(h)) : a();
            }, d);
          }

          var h = kb(c);
          f(3);
        }

        function kb(a) {
          var b = document.createElement("div");
          b.className = a;
          b.style.width = "1px";
          b.style.height = "1px";
          b.style.position = "absolute";
          b.style.left = "-10000px";
          b.style.top = "-10000px";
          b.style.zIndex = "-10000";
          return b;
        };

        function Ma(a) {
          this.h = R(a);
        }

        n(Ma, T);

        function lb(a) {
          this.h = R(a);
        }

        n(lb, T);
        var mb = Qa(lb);

        function nb(a) {
          a = Na(a, 4) || "";
          if (void 0 === U) {
            var b = null;
            var c = p.trustedTypes;
            if (c && c.createPolicy) {
              try {
                b = c.createPolicy("goog#html", { createHTML: q, createScript: q, createScriptURL: q });
              } catch (d) {
                p.console && p.console.error(d.message);
              }
              U = b;
            } else U = b;
          }
          a = (b = U) ? b.createScriptURL(a) : a;
          return new V(a, Ta);
        };

        function ob(a, b) {
          this.m = a;
          this.o = new Wa(a.document);
          this.g = b;
          this.j = S(this.g, 1);
          this.u = nb(La(this.g, 2));
          this.i = !1;
          b = nb(La(this.g, 13));
          this.l = new db(a.document, b, S(this.g, 12));
        }

        ob.prototype.start = function() {
          pb(this);
        };

        function pb(a) {
          qb(a);
          Za(a.o, a.u, 3, !1, function() {
            a:{
              var b = a.j;
              var c = p.btoa(b);
              if (c = p[c]) {
                try {
                  var d = Sa(p.atob(c));
                } catch (e) {
                  b = !1;
                  break a;
                }
                b = b === Na(d, 1);
              } else b = !1;
            }
            b ? Z(a, S(a.g, 14)) : (Z(a, S(a.g, 8)), eb(a.l));
          }, function() {
            jb(function() {
              Z(a, S(a.g, 7));
              eb(a.l);
            }, function() {
              return Z(a, S(a.g, 6));
            }, S(a.g, 9), Oa(a.g, 10), Oa(a.g, 11));
          });
        }

        function Z(a, b) {
          a.i || (a.i = !0, a = new a.m.XMLHttpRequest, a.open("GET", b, !0), a.send());
        }

        function qb(a) {
          var b = p.btoa(a.j);
          a.m[b] && Z(a, S(a.g, 5));
        };(function(a, b) {
          p[a] = function() {
            var c = ma.apply(0, arguments);
            p[a] = function() {
            };
            b.apply(null, c);
          };
        })("__h82AlnkH6D91__", function(a) {
          "function" === typeof window.atob && (new ob(window, mb(window.atob(a)))).start();
        });
      }).call(this);

        window.__h82AlnkH6D91__("WyJwdWItNDU4ODIxODkyNTc1NDM2OCIsW251bGwsbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9iL3B1Yi00NTg4MjE4OTI1NzU0MzY4Il0sbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9lbC9BR1NLV3hYbTZrelpSaUlJSFpJZTFkWXJ5WTI3bFBpYXBjY0xENWxZaXJudWlmWDAwM29mZm9lVXZGMFR4T3E4emdRakNwLVJIRW41bTJuSWFCeHJnU3JzRnREN0dBXHUwMDNkXHUwMDNkP3RlXHUwMDNkVE9LRU5fRVhQT1NFRCIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2VsL0FHU0tXeFhrYXlEVW4yc0x4dFd0QlpVLUJjRjktdXR5SENwTzQ1dXh3ZU1LNm5TamNBNF9rLWgweVoyZWhwS01QSWZDc0tZeXJ0TzcxcTdMYXl1U29GQ3Azalk4SFFcdTAwM2RcdTAwM2Q/YWJcdTAwM2QxXHUwMDI2c2JmXHUwMDNkMSIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2VsL0FHU0tXeFVKU2hxZjJYUnFjQm1OYTRZTC15dGJYcHdyUmJiYllhXzJ2dE5laFNCS21ZTjdlUWVVWWFRNXV3STFMR0ZHX1pzN2plcjZzNzdmV1FCV0RCY3hMSEpiMHdcdTAwM2RcdTAwM2Q/YWJcdTAwM2QyXHUwMDI2c2JmXHUwMDNkMSIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2VsL0FHU0tXeFhidmt4ZTgzMHZuMkEwMVdHWE1yTHBZaDNrZDJ1RVpvaThiVW5TSlR6Z01xWV9CdC1CMGZLZUYyUjRkb1M5QmV5YVFDSDJZMXptTDRjV0F4bERST0lsekFcdTAwM2RcdTAwM2Q/c2JmXHUwMDNkMiIsImRpdi1ncHQtYWQiLDIwLDEwMCwiY0hWaUxUUTFPRGd5TVRnNU1qVTNOVFF6TmpnXHUwMDNkIixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tLzBlbW4vZi9wL3B1Yi00NTg4MjE4OTI1NzU0MzY4LmpzP3VzcXBcdTAwM2RDQkkiXSwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vZWwvQUdTS1d4VmtTUFkyTUJKZTVJX0ZHQ3dVczIwcTNNMnZVSzNRcXBYcDRGbG9XOTZ4c3Blc1dzNVpLSG5kMUFQS09idTV1TENoczBqdGtRaDlNeVJiU2U0anBOYXlUUVx1MDAzZFx1MDAzZCJd");
      `}</Script>
    </>
  );
};

export default Adblock;
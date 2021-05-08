!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 79));
})([
  function (t, e, n) {
    (function (e) {
      var n = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof e && e) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }.call(this, n(81)));
  },
  function (t, e, n) {
    var r = n(0),
      o = n(46),
      i = n(4),
      a = n(47),
      c = n(55),
      u = n(88),
      s = o("wks"),
      l = r.Symbol,
      f = u ? l : (l && l.withoutSetter) || a;
    t.exports = function (t) {
      return (
        i(s, t) || (c && i(l, t) ? (s[t] = l[t]) : (s[t] = f("Symbol." + t))),
        s[t]
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, n) {
    var r = n(6);
    t.exports = function (t) {
      if (!r(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return n.call(t, e);
    };
  },
  function (t, e, n) {
    var r = n(2);
    t.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(27).f,
      i = n(8),
      a = n(10),
      c = n(31),
      u = n(83),
      s = n(52);
    t.exports = function (t, e) {
      var n,
        l,
        f,
        h,
        p,
        d = t.target,
        v = t.global,
        g = t.stat;
      if ((n = v ? r : g ? r[d] || c(d, {}) : (r[d] || {}).prototype))
        for (l in e) {
          if (
            ((h = e[l]),
            (f = t.noTargetGet ? (p = o(n, l)) && p.value : n[l]),
            !s(v ? l : d + (g ? "." : "#") + l, t.forced) && void 0 !== f)
          ) {
            if (typeof h == typeof f) continue;
            u(h, f);
          }
          (t.sham || (f && f.sham)) && i(h, "sham", !0), a(n, l, h, t);
        }
    };
  },
  function (t, e, n) {
    var r = n(5),
      o = n(9),
      i = n(16);
    t.exports = r
      ? function (t, e, n) {
          return o.f(t, e, i(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        };
  },
  function (t, e, n) {
    var r = n(5),
      o = n(45),
      i = n(3),
      a = n(29),
      c = Object.defineProperty;
    e.f = r
      ? c
      : function (t, e, n) {
          if ((i(t), (e = a(e, !0)), i(n), o))
            try {
              return c(t, e, n);
            } catch (t) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported");
          return "value" in n && (t[e] = n.value), t;
        };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(8),
      i = n(4),
      a = n(31),
      c = n(32),
      u = n(13),
      s = u.get,
      l = u.enforce,
      f = String(String).split("String");
    (t.exports = function (t, e, n, c) {
      var u,
        s = !!c && !!c.unsafe,
        h = !!c && !!c.enumerable,
        p = !!c && !!c.noTargetGet;
      "function" == typeof n &&
        ("string" != typeof e || i(n, "name") || o(n, "name", e),
        (u = l(n)).source ||
          (u.source = f.join("string" == typeof e ? e : ""))),
        t !== r
          ? (s ? !p && t[e] && (h = !0) : delete t[e],
            h ? (t[e] = n) : o(t, e, n))
          : h
          ? (t[e] = n)
          : a(e, n);
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && s(this).source) || c(this);
    });
  },
  function (t, e, n) {
    var r = n(28),
      o = n(17);
    t.exports = function (t) {
      return r(o(t));
    };
  },
  function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  },
  function (t, e, n) {
    var r,
      o,
      i,
      a = n(82),
      c = n(0),
      u = n(6),
      s = n(8),
      l = n(4),
      f = n(33),
      h = n(34),
      p = n(35),
      d = c.WeakMap;
    if (a) {
      var v = f.state || (f.state = new d()),
        g = v.get,
        m = v.has,
        y = v.set;
      (r = function (t, e) {
        return (e.facade = t), y.call(v, t, e), e;
      }),
        (o = function (t) {
          return g.call(v, t) || {};
        }),
        (i = function (t) {
          return m.call(v, t);
        });
    } else {
      var b = h("state");
      (p[b] = !0),
        (r = function (t, e) {
          return (e.facade = t), s(t, b, e), e;
        }),
        (o = function (t) {
          return l(t, b) ? t[b] : {};
        }),
        (i = function (t) {
          return l(t, b);
        });
    }
    t.exports = {
      set: r,
      get: o,
      has: i,
      enforce: function (t) {
        return i(t) ? o(t) : r(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!u(e) || (n = o(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      },
    };
  },
  function (t, e, n) {
    var r = n(85),
      o = n(0),
      i = function (t) {
        return "function" == typeof t ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2
        ? i(r[t]) || i(o[t])
        : (r[t] && r[t][e]) || (o[t] && o[t][e]);
    };
  },
  function (t, e, n) {
    var r = n(21),
      o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = n(9).f,
      o = n(4),
      i = n(1)("toStringTag");
    t.exports = function (t, e, n) {
      t &&
        !o((t = n ? t : t.prototype), i) &&
        r(t, i, { configurable: !0, value: e });
    };
  },
  function (t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
    };
  },
  function (t, e, n) {
    var r = n(17);
    t.exports = function (t) {
      return Object(r(t));
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(23);
    t.exports = function (t, e, n) {
      if ((r(t), void 0 === e)) return t;
      switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function (n, r, o) {
            return t.call(e, n, r, o);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e, n) {
    var r = n(40),
      o = n(19),
      i = n(1)("iterator");
    t.exports = function (t) {
      if (null != t) return t[i] || t["@@iterator"] || o[r(t)];
    };
  },
  function (t, e, n) {
    "use strict";
    var r,
      o,
      i = n(108),
      a = n(109),
      c = RegExp.prototype.exec,
      u = String.prototype.replace,
      s = c,
      l =
        ((r = /a/),
        (o = /b*/g),
        c.call(r, "a"),
        c.call(o, "a"),
        0 !== r.lastIndex || 0 !== o.lastIndex),
      f = a.UNSUPPORTED_Y || a.BROKEN_CARET,
      h = void 0 !== /()??/.exec("")[1];
    (l || h || f) &&
      (s = function (t) {
        var e,
          n,
          r,
          o,
          a = this,
          s = f && a.sticky,
          p = i.call(a),
          d = a.source,
          v = 0,
          g = t;
        return (
          s &&
            (-1 === (p = p.replace("y", "")).indexOf("g") && (p += "g"),
            (g = String(t).slice(a.lastIndex)),
            a.lastIndex > 0 &&
              (!a.multiline || (a.multiline && "\n" !== t[a.lastIndex - 1])) &&
              ((d = "(?: " + d + ")"), (g = " " + g), v++),
            (n = new RegExp("^(?:" + d + ")", p))),
          h && (n = new RegExp("^" + d + "$(?!\\s)", p)),
          l && (e = a.lastIndex),
          (r = c.call(s ? n : a, g)),
          s
            ? r
              ? ((r.input = r.input.slice(v)),
                (r[0] = r[0].slice(v)),
                (r.index = a.lastIndex),
                (a.lastIndex += r[0].length))
              : (a.lastIndex = 0)
            : l && r && (a.lastIndex = a.global ? r.index + r[0].length : e),
          h &&
            r &&
            r.length > 1 &&
            u.call(r[0], n, function () {
              for (o = 1; o < arguments.length - 2; o++)
                void 0 === arguments[o] && (r[o] = void 0);
            }),
          r
        );
      }),
      (t.exports = s);
  },
  function (t, e, n) {
    var r = n(5),
      o = n(44),
      i = n(16),
      a = n(11),
      c = n(29),
      u = n(4),
      s = n(45),
      l = Object.getOwnPropertyDescriptor;
    e.f = r
      ? l
      : function (t, e) {
          if (((t = a(t)), (e = c(e, !0)), s))
            try {
              return l(t, e);
            } catch (t) {}
          if (u(t, e)) return i(!o.f.call(t, e), t[e]);
        };
  },
  function (t, e, n) {
    var r = n(2),
      o = n(12),
      i = "".split;
    t.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == o(t) ? i.call(t, "") : Object(t);
        }
      : Object;
  },
  function (t, e, n) {
    var r = n(6);
    t.exports = function (t, e) {
      if (!r(t)) return t;
      var n, o;
      if (e && "function" == typeof (n = t.toString) && !r((o = n.call(t))))
        return o;
      if ("function" == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
      if (!e && "function" == typeof (n = t.toString) && !r((o = n.call(t))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(6),
      i = r.document,
      a = o(i) && o(i.createElement);
    t.exports = function (t) {
      return a ? i.createElement(t) : {};
    };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(8);
    t.exports = function (t, e) {
      try {
        o(r, t, e);
      } catch (n) {
        r[t] = e;
      }
      return e;
    };
  },
  function (t, e, n) {
    var r = n(33),
      o = Function.toString;
    "function" != typeof r.inspectSource &&
      (r.inspectSource = function (t) {
        return o.call(t);
      }),
      (t.exports = r.inspectSource);
  },
  function (t, e, n) {
    var r = n(0),
      o = n(31),
      i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(46),
      o = n(47),
      i = r("keys");
    t.exports = function (t) {
      return i[t] || (i[t] = o(t));
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (t, e, n) {
    "use strict";
    var r = n(11),
      o = n(87),
      i = n(19),
      a = n(13),
      c = n(59),
      u = a.set,
      s = a.getterFor("Array Iterator");
    (t.exports = c(
      Array,
      "Array",
      function (t, e) {
        u(this, { type: "Array Iterator", target: r(t), index: 0, kind: e });
      },
      function () {
        var t = s(this),
          e = t.target,
          n = t.kind,
          r = t.index++;
        return !e || r >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : "keys" == n
          ? { value: r, done: !1 }
          : "values" == n
          ? { value: e[r], done: !1 }
          : { value: [r, e[r]], done: !1 };
      },
      "values"
    )),
      (i.Arguments = i.Array),
      o("keys"),
      o("values"),
      o("entries");
  },
  function (t, e, n) {
    var r,
      o = n(3),
      i = n(56),
      a = n(36),
      c = n(35),
      u = n(58),
      s = n(30),
      l = n(34),
      f = l("IE_PROTO"),
      h = function () {},
      p = function (t) {
        return "<script>" + t + "</script>";
      },
      d = function () {
        try {
          r = document.domain && new ActiveXObject("htmlfile");
        } catch (t) {}
        var t, e;
        d = r
          ? (function (t) {
              t.write(p("")), t.close();
              var e = t.parentWindow.Object;
              return (t = null), e;
            })(r)
          : (((e = s("iframe")).style.display = "none"),
            u.appendChild(e),
            (e.src = String("javascript:")),
            (t = e.contentWindow.document).open(),
            t.write(p("document.F=Object")),
            t.close(),
            t.F);
        for (var n = a.length; n--; ) delete d.prototype[a[n]];
        return d();
      };
    (c[f] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var n;
          return (
            null !== t
              ? ((h.prototype = o(t)),
                (n = new h()),
                (h.prototype = null),
                (n[f] = t))
              : (n = d()),
            void 0 === e ? n : i(n, e)
          );
        });
  },
  function (t, e, n) {
    var r = {};
    (r[n(1)("toStringTag")] = "z"), (t.exports = "[object z]" === String(r));
  },
  function (t, e, n) {
    var r = n(39),
      o = n(12),
      i = n(1)("toStringTag"),
      a =
        "Arguments" ==
        o(
          (function () {
            return arguments;
          })()
        );
    t.exports = r
      ? o
      : function (t) {
          var e, n, r;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (n = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), i))
            ? n
            : a
            ? o(e)
            : "Object" == (r = o(e)) && "function" == typeof e.callee
            ? "Arguments"
            : r;
        };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      if (!(t instanceof e))
        throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(12),
      o = n(0);
    t.exports = "process" == r(o.process);
  },
  function (t, e, n) {
    var r = n(21),
      o = n(17),
      i = function (t) {
        return function (e, n) {
          var i,
            a,
            c = String(o(e)),
            u = r(n),
            s = c.length;
          return u < 0 || u >= s
            ? t
              ? ""
              : void 0
            : (i = c.charCodeAt(u)) < 55296 ||
              i > 56319 ||
              u + 1 === s ||
              (a = c.charCodeAt(u + 1)) < 56320 ||
              a > 57343
            ? t
              ? c.charAt(u)
              : i
            : t
            ? c.slice(u, u + 2)
            : a - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: i(!1), charAt: i(!0) };
  },
  function (t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({ 1: 2 }, 1);
    e.f = i
      ? function (t) {
          var e = o(this, t);
          return !!e && e.enumerable;
        }
      : r;
  },
  function (t, e, n) {
    var r = n(5),
      o = n(2),
      i = n(30);
    t.exports =
      !r &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(i("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, n) {
    var r = n(18),
      o = n(33);
    (t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.8.0",
      mode: r ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++n + r).toString(36)
      );
    };
  },
  function (t, e, n) {
    var r = n(4),
      o = n(11),
      i = n(49).indexOf,
      a = n(35);
    t.exports = function (t, e) {
      var n,
        c = o(t),
        u = 0,
        s = [];
      for (n in c) !r(a, n) && r(c, n) && s.push(n);
      for (; e.length > u; ) r(c, (n = e[u++])) && (~i(s, n) || s.push(n));
      return s;
    };
  },
  function (t, e, n) {
    var r = n(11),
      o = n(15),
      i = n(50),
      a = function (t) {
        return function (e, n, a) {
          var c,
            u = r(e),
            s = o(u.length),
            l = i(a, s);
          if (t && n != n) {
            for (; s > l; ) if ((c = u[l++]) != c) return !0;
          } else
            for (; s > l; l++)
              if ((t || l in u) && u[l] === n) return t || l || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: a(!0), indexOf: a(!1) };
  },
  function (t, e, n) {
    var r = n(21),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, e) {
      var n = r(t);
      return n < 0 ? o(n + e, 0) : i(n, e);
    };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, n) {
    var r = n(2),
      o = /#|\.prototype\./,
      i = function (t, e) {
        var n = c[a(t)];
        return n == s || (n != u && ("function" == typeof e ? r(e) : !!e));
      },
      a = (i.normalize = function (t) {
        return String(t).replace(o, ".").toLowerCase();
      }),
      c = (i.data = {}),
      u = (i.NATIVE = "N"),
      s = (i.POLYFILL = "P");
    t.exports = i;
  },
  function (t, e, n) {
    "use strict";
    var r = n(2);
    t.exports = function (t, e) {
      var n = [][t];
      return (
        !!n &&
        r(function () {
          n.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  function (t, e, n) {
    var r = n(5),
      o = n(2),
      i = n(4),
      a = Object.defineProperty,
      c = {},
      u = function (t) {
        throw t;
      };
    t.exports = function (t, e) {
      if (i(c, t)) return c[t];
      e || (e = {});
      var n = [][t],
        s = !!i(e, "ACCESSORS") && e.ACCESSORS,
        l = i(e, 0) ? e[0] : u,
        f = i(e, 1) ? e[1] : void 0;
      return (c[t] =
        !!n &&
        !o(function () {
          if (s && !r) return !0;
          var t = { length: -1 };
          s ? a(t, 1, { enumerable: !0, get: u }) : (t[1] = 1), n.call(t, l, f);
        }));
    };
  },
  function (t, e, n) {
    var r = n(2);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !r(function () {
        return !String(Symbol());
      });
  },
  function (t, e, n) {
    var r = n(5),
      o = n(9),
      i = n(3),
      a = n(57);
    t.exports = r
      ? Object.defineProperties
      : function (t, e) {
          i(t);
          for (var n, r = a(e), c = r.length, u = 0; c > u; )
            o.f(t, (n = r[u++]), e[n]);
          return t;
        };
  },
  function (t, e, n) {
    var r = n(48),
      o = n(36);
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, o);
      };
  },
  function (t, e, n) {
    var r = n(14);
    t.exports = r("document", "documentElement");
  },
  function (t, e, n) {
    "use strict";
    var r = n(7),
      o = n(60),
      i = n(62),
      a = n(90),
      c = n(20),
      u = n(8),
      s = n(10),
      l = n(1),
      f = n(18),
      h = n(19),
      p = n(61),
      d = p.IteratorPrototype,
      v = p.BUGGY_SAFARI_ITERATORS,
      g = l("iterator"),
      m = function () {
        return this;
      };
    t.exports = function (t, e, n, l, p, y, b) {
      o(n, e, l);
      var x,
        w,
        S,
        E = function (t) {
          if (t === p && j) return j;
          if (!v && t in L) return L[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this);
          };
        },
        A = e + " Iterator",
        k = !1,
        L = t.prototype,
        R = L[g] || L["@@iterator"] || (p && L[p]),
        j = (!v && R) || E(p),
        O = ("Array" == e && L.entries) || R;
      if (
        (O &&
          ((x = i(O.call(new t()))),
          d !== Object.prototype &&
            x.next &&
            (f ||
              i(x) === d ||
              (a ? a(x, d) : "function" != typeof x[g] && u(x, g, m)),
            c(x, A, !0, !0),
            f && (h[A] = m))),
        "values" == p &&
          R &&
          "values" !== R.name &&
          ((k = !0),
          (j = function () {
            return R.call(this);
          })),
        (f && !b) || L[g] === j || u(L, g, j),
        (h[e] = j),
        p)
      )
        if (
          ((w = {
            values: E("values"),
            keys: y ? j : E("keys"),
            entries: E("entries"),
          }),
          b)
        )
          for (S in w) (v || k || !(S in L)) && s(L, S, w[S]);
        else r({ target: e, proto: !0, forced: v || k }, w);
      return w;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(61).IteratorPrototype,
      o = n(38),
      i = n(16),
      a = n(20),
      c = n(19),
      u = function () {
        return this;
      };
    t.exports = function (t, e, n) {
      var s = e + " Iterator";
      return (
        (t.prototype = o(r, { next: i(1, n) })), a(t, s, !1, !0), (c[s] = u), t
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r,
      o,
      i,
      a = n(62),
      c = n(8),
      u = n(4),
      s = n(1),
      l = n(18),
      f = s("iterator"),
      h = !1;
    [].keys &&
      ("next" in (i = [].keys())
        ? (o = a(a(i))) !== Object.prototype && (r = o)
        : (h = !0)),
      null == r && (r = {}),
      l ||
        u(r, f) ||
        c(r, f, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: h });
  },
  function (t, e, n) {
    var r = n(4),
      o = n(22),
      i = n(34),
      a = n(89),
      c = i("IE_PROTO"),
      u = Object.prototype;
    t.exports = a
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = o(t)),
            r(t, c)
              ? t[c]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? u
              : null
          );
        };
  },
  function (t, e, n) {
    "use strict";
    var r = n(29),
      o = n(9),
      i = n(16);
    t.exports = function (t, e, n) {
      var a = r(e);
      a in t ? o.f(t, a, i(0, n)) : (t[a] = n);
    };
  },
  function (t, e, n) {
    var r,
      o,
      i = n(0),
      a = n(65),
      c = i.process,
      u = c && c.versions,
      s = u && u.v8;
    s
      ? (o = (r = s.split("."))[0] + r[1])
      : a &&
        (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
        (r = a.match(/Chrome\/(\d+)/)) &&
        (o = r[1]),
      (t.exports = o && +o);
  },
  function (t, e, n) {
    var r = n(14);
    t.exports = r("navigator", "userAgent") || "";
  },
  function (t, e, n) {
    var r = n(10);
    t.exports = function (t, e, n) {
      for (var o in e) r(t, o, e[o], n);
      return t;
    };
  },
  function (t, e, n) {
    var r = n(1),
      o = n(19),
      i = r("iterator"),
      a = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (o.Array === t || a[i] === t);
    };
  },
  function (t, e, n) {
    var r = n(3);
    t.exports = function (t) {
      var e = t.return;
      if (void 0 !== e) return r(e.call(t)).value;
    };
  },
  function (t, e, n) {
    var r = n(3),
      o = n(23),
      i = n(1)("species");
    t.exports = function (t, e) {
      var n,
        a = r(t).constructor;
      return void 0 === a || null == (n = r(a)[i]) ? e : o(n);
    };
  },
  function (t, e, n) {
    var r,
      o,
      i,
      a = n(0),
      c = n(2),
      u = n(24),
      s = n(58),
      l = n(30),
      f = n(71),
      h = n(42),
      p = a.location,
      d = a.setImmediate,
      v = a.clearImmediate,
      g = a.process,
      m = a.MessageChannel,
      y = a.Dispatch,
      b = 0,
      x = {},
      w = function (t) {
        if (x.hasOwnProperty(t)) {
          var e = x[t];
          delete x[t], e();
        }
      },
      S = function (t) {
        return function () {
          w(t);
        };
      },
      E = function (t) {
        w(t.data);
      },
      A = function (t) {
        a.postMessage(t + "", p.protocol + "//" + p.host);
      };
    (d && v) ||
      ((d = function (t) {
        for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
        return (
          (x[++b] = function () {
            ("function" == typeof t ? t : Function(t)).apply(void 0, e);
          }),
          r(b),
          b
        );
      }),
      (v = function (t) {
        delete x[t];
      }),
      h
        ? (r = function (t) {
            g.nextTick(S(t));
          })
        : y && y.now
        ? (r = function (t) {
            y.now(S(t));
          })
        : m && !f
        ? ((i = (o = new m()).port2),
          (o.port1.onmessage = E),
          (r = u(i.postMessage, i, 1)))
        : a.addEventListener &&
          "function" == typeof postMessage &&
          !a.importScripts &&
          p &&
          "file:" !== p.protocol &&
          !c(A)
        ? ((r = A), a.addEventListener("message", E, !1))
        : (r =
            "onreadystatechange" in l("script")
              ? function (t) {
                  s.appendChild(l("script")).onreadystatechange = function () {
                    s.removeChild(this), w(t);
                  };
                }
              : function (t) {
                  setTimeout(S(t), 0);
                })),
      (t.exports = { set: d, clear: v });
  },
  function (t, e, n) {
    var r = n(65);
    t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
  },
  function (t, e, n) {
    "use strict";
    var r = n(23),
      o = function (t) {
        var e, n;
        (this.promise = new t(function (t, r) {
          if (void 0 !== e || void 0 !== n)
            throw TypeError("Bad Promise constructor");
          (e = t), (n = r);
        })),
          (this.resolve = r(e)),
          (this.reject = r(n));
      };
    t.exports.f = function (t) {
      return new o(t);
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(7),
      o = n(26);
    r({ target: "RegExp", proto: !0, forced: /./.exec !== o }, { exec: o });
  },
  function (t, e, n) {
    "use strict";
    var r = n(43).charAt,
      o = n(13),
      i = n(59),
      a = o.set,
      c = o.getterFor("String Iterator");
    i(
      String,
      "String",
      function (t) {
        a(this, { type: "String Iterator", string: String(t), index: 0 });
      },
      function () {
        var t,
          e = c(this),
          n = e.string,
          o = e.index;
        return o >= n.length
          ? { value: void 0, done: !0 }
          : ((t = r(n, o)), (e.index += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, e, n) {
    "use strict";
    n(73);
    var r = n(10),
      o = n(2),
      i = n(1),
      a = n(26),
      c = n(8),
      u = i("species"),
      s = !o(function () {
        var t = /./;
        return (
          (t.exec = function () {
            var t = [];
            return (t.groups = { a: "7" }), t;
          }),
          "7" !== "".replace(t, "$<a>")
        );
      }),
      l = "$0" === "a".replace(/./, "$0"),
      f = i("replace"),
      h = !!/./[f] && "" === /./[f]("a", "$0"),
      p = !o(function () {
        var t = /(?:)/,
          e = t.exec;
        t.exec = function () {
          return e.apply(this, arguments);
        };
        var n = "ab".split(t);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
      });
    t.exports = function (t, e, n, f) {
      var d = i(t),
        v = !o(function () {
          var e = {};
          return (
            (e[d] = function () {
              return 7;
            }),
            7 != ""[t](e)
          );
        }),
        g =
          v &&
          !o(function () {
            var e = !1,
              n = /a/;
            return (
              "split" === t &&
                (((n = {}).constructor = {}),
                (n.constructor[u] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[d] = /./[d])),
              (n.exec = function () {
                return (e = !0), null;
              }),
              n[d](""),
              !e
            );
          });
      if (
        !v ||
        !g ||
        ("replace" === t && (!s || !l || h)) ||
        ("split" === t && !p)
      ) {
        var m = /./[d],
          y = n(
            d,
            ""[t],
            function (t, e, n, r, o) {
              return e.exec === a
                ? v && !o
                  ? { done: !0, value: m.call(e, n, r) }
                  : { done: !0, value: t.call(n, e, r) }
                : { done: !1 };
            },
            {
              REPLACE_KEEPS_$0: l,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: h,
            }
          ),
          b = y[0],
          x = y[1];
        r(String.prototype, t, b),
          r(
            RegExp.prototype,
            d,
            2 == e
              ? function (t, e) {
                  return x.call(t, this, e);
                }
              : function (t) {
                  return x.call(t, this);
                }
          );
      }
      f && c(RegExp.prototype[d], "sham", !0);
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(43).charAt;
    t.exports = function (t, e, n) {
      return e + (n ? r(t, e).length : 1);
    };
  },
  function (t, e, n) {
    var r = n(12),
      o = n(26);
    t.exports = function (t, e) {
      var n = t.exec;
      if ("function" == typeof n) {
        var i = n.call(t, e);
        if ("object" != typeof i)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return i;
      }
      if ("RegExp" !== r(t))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return o.call(t, e);
    };
  },
  function (t, e, n) {
    var r = n(2),
      o = n(1),
      i = n(18),
      a = o("iterator");
    t.exports = !r(function () {
      var t = new URL("b?a=1&b=2&c=3", "http://a"),
        e = t.searchParams,
        n = "";
      return (
        (t.pathname = "c%20d"),
        e.forEach(function (t, r) {
          e.delete("b"), (n += r + t);
        }),
        (i && !t.toJSON) ||
          !e.sort ||
          "http://a/c%20d?a=1&c=3" !== t.href ||
          "3" !== e.get("c") ||
          "a=1" !== String(new URLSearchParams("?a=1")) ||
          !e[a] ||
          "a" !== new URL("https://a@b").username ||
          "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
          "xn--e1aybc" !== new URL("http://тест").host ||
          "#%D0%B1" !== new URL("http://a#б").hash ||
          "a1c3" !== n ||
          "x" !== new URL("http://x", void 0).host
      );
    });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    n(80),
      n(37),
      n(92),
      n(93),
      n(96),
      n(97),
      n(99),
      n(73),
      n(74),
      n(110),
      n(111),
      n(113),
      n(115),
      n(122),
      n(123);
    var r,
      o,
      i,
      a,
      c,
      u,
      s,
      l,
      f,
      h,
      p,
      d,
      v,
      g,
      m,
      y,
      b,
      x,
      w,
      S,
      E,
      A,
      k,
      L,
      R,
      j,
      O,
      C,
      I,
      T,
      P = document.querySelector(".send"),
      U = document.querySelector(".txtarea"),
      _ = document.querySelector(".player"),
      M = document.querySelector(".download"),
      F = document.querySelector(".download-btn"),
      z = document.getElementById("voice"),
      B = document.getElementById("emotion"),
      q = document.getElementById("speed"),
      N = "";
    P.addEventListener("click", function () {
      F.classList.add("hide"),
        _.classList.add("hide"),
        P.classList.remove("btn-primary"),
        P.classList.add("btn-danger"),
        (P.textContent = "Загрузка"),
        fetch("/api/speech", {
          method: "post",
          body: JSON.stringify({
            text: U.value,
            speed: q.options[q.options.selectedIndex].value,
            voice: z.options[z.options.selectedIndex].value,
            emotion: B.options[B.options.selectedIndex].value,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then(function (t) {
            return t.ok
              ? t.blob()
              : Promise.reject("Ошибка: ".concat(t.status));
          })
          .then(function (t) {
            _.classList.remove("hide"),
              P.classList.add("btn-primary"),
              P.classList.remove("btn-danger"),
              (P.textContent = "Сгенерировать"),
              (N = URL.createObjectURL(t)),
              (_.src = N),
              M.setAttribute("href", N),
              F.classList.remove("hide"),
              _.play();
          })
          .catch(function (t) {
            (U.value = "Произошла ошибка запроса!"),
              P.classList.add("btn-primary"),
              P.classList.remove("btn-danger"),
              (P.textContent = "Сгенерировать"),
              console.log(t);
          });
    }),
      (r = window.document),
      (o = r.location),
      (i = window.Math),
      (a = window.HTMLElement),
      (c = window.XMLHttpRequest),
      (u = "https://buttons.github.io/buttons.html"),
      (s = "github.com"),
      (l = c && "prototype" in c && "withCredentials" in c.prototype),
      (f =
        l &&
        a &&
        "attachShadow" in a.prototype &&
        !("prototype" in a.prototype.attachShadow)),
      (h = function (t, e, n, r) {
        null == e && (e = "&"),
          null == n && (n = "="),
          null == r && (r = window.decodeURIComponent);
        for (var o = {}, i = t.split(e), a = 0, c = i.length; a < c; a++) {
          var u = i[a];
          if ("" !== u) {
            var s = u.split(n);
            o[r(s[0])] = null != s[1] ? r(s.slice(1).join(n)) : void 0;
          }
        }
        return o;
      }),
      (p = function (t, e, n) {
        t.addEventListener
          ? t.addEventListener(e, n, !1)
          : t.attachEvent("on" + e, n);
      }),
      (d = function (t, e, n) {
        t.removeEventListener
          ? t.removeEventListener(e, n, !1)
          : t.detachEvent("on" + e, n);
      }),
      (v = function (t, e, n) {
        p(t, e, function r() {
          return d(t, e, r), n.apply(this, arguments);
        });
      }),
      (g = function (t, e, n) {
        var r = "readystatechange";
        p(t, r, function o() {
          if (e.test(t.readyState)) return d(t, r, o), n.apply(this, arguments);
        });
      }),
      (y = (m = function (t) {
        return function (e, n, r) {
          var o = t.createElement(e);
          if (null != n)
            for (var i in n) {
              var a = n[i];
              null != a && (null != o[i] ? (o[i] = a) : o.setAttribute(i, a));
            }
          if (null != r)
            for (var c = 0, u = r.length; c < u; c++) {
              var s = r[c];
              o.appendChild("string" == typeof s ? t.createTextNode(s) : s);
            }
          return o;
        };
      })(r)),
      (b = function (t) {
        var e;
        return function () {
          e || ((e = 1), t.apply(this, arguments));
        };
      }),
      (x = function (t, e) {
        return {}.hasOwnProperty.call(t, e);
      }),
      (w = function (t) {
        return ("" + t).toLowerCase();
      }),
      (S = {
        light:
          ".btn{color:#24292e;background-color:#eff3f6;border-color:#c5c9cc;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-position:-0.5em;border-color:#9fa4a9;border-color:rgba(27,31,35,.35);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#a1a4a8;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",
        dark:
          ".btn{color:#fafbfc;background-color:#202428;border-color:#1f2327;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-position:-0.5em;border-color:#1b1f23;border-color:rgba(27,31,35,.5);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;border-color:#1a1d21;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}",
      }),
      (E = function (t, e) {
        return (
          "@media(prefers-color-scheme:" + t + "){" + S[x(S, e) ? e : t] + "}"
        );
      }),
      (A = {
        "mark-github": {
          heights: {
            16: {
              width: 16,
              path:
                '<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>',
            },
          },
        },
        heart: {
          heights: {
            16: {
              width: 16,
              path:
                '<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>',
            },
          },
        },
        eye: {
          heights: {
            16: {
              width: 16,
              path:
                '<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>',
            },
          },
        },
        star: {
          heights: {
            16: {
              width: 16,
              path:
                '<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>',
            },
          },
        },
        "repo-forked": {
          heights: {
            16: {
              width: 16,
              path:
                '<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>',
            },
          },
        },
        "repo-template": {
          heights: {
            16: {
              width: 16,
              path:
                '<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>',
            },
          },
        },
        "issue-opened": {
          heights: {
            16: {
              width: 16,
              path:
                '<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>',
            },
          },
        },
        download: {
          heights: {
            16: {
              width: 16,
              path:
                '<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>',
            },
          },
        },
      }),
      (k = function (t, e) {
        (t = w(t).replace(/^octicon-/, "")), x(A, t) || (t = "mark-github");
        var n = e >= 24 && 24 in A[t].heights ? 24 : 16,
          r = A[t].heights[n];
        return (
          '<svg viewBox="0 0 ' +
          r.width +
          " " +
          n +
          '" width="' +
          (e * r.width) / n +
          '" height="' +
          e +
          '" class="octicon octicon-' +
          t +
          '" aria-hidden="true">' +
          r.path +
          "</svg>"
        );
      }),
      (L = {}),
      (R = function (t, e) {
        var n = L[t] || (L[t] = []);
        if (!(n.push(e) > 1)) {
          var r = b(function () {
            for (delete L[t]; (e = n.shift()); ) e.apply(null, arguments);
          });
          if (l) {
            var o = new c();
            p(o, "abort", r),
              p(o, "error", r),
              p(o, "load", function () {
                var t;
                try {
                  t = JSON.parse(this.responseText);
                } catch (t) {
                  return void r(t);
                }
                r(200 !== this.status, t);
              }),
              o.open("GET", t),
              o.send();
          } else {
            var i = this || window;
            i._ = function (t) {
              (i._ = null), r(200 !== t.meta.status, t.data);
            };
            var a = m(i.document)("script", {
                async: !0,
                src: t + (-1 !== t.indexOf("?") ? "&" : "?") + "callback=_",
              }),
              u = function () {
                i._ && i._({ meta: {} });
              };
            p(a, "load", u),
              p(a, "error", u),
              a.readyState && g(a, /de|m/, u),
              i.document.getElementsByTagName("head")[0].appendChild(a);
          }
        }
      }),
      (j = function (t, e, n) {
        var r = m(t.ownerDocument),
          o = t.appendChild(r("style", { type: "text/css" })),
          i =
            "body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}" +
            (function (t) {
              if (null == t) return S.light;
              if (x(S, t)) return S[t];
              var e = h(t, ";", ":", function (t) {
                return t.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g, "");
              });
              return (
                S[x(S, e["no-preference"]) ? e["no-preference"] : "light"] +
                E("light", e.light) +
                E("dark", e.dark)
              );
            })(e["data-color-scheme"]);
        o.styleSheet
          ? (o.styleSheet.cssText = i)
          : o.appendChild(t.ownerDocument.createTextNode(i));
        var a = "large" === w(e["data-size"]),
          c = r(
            "a",
            {
              className: "btn",
              href: e.href,
              rel: "noopener",
              target: "_blank",
              title: e.title || void 0,
              "aria-label": e["aria-label"] || void 0,
              innerHTML: k(e["data-icon"], a ? 16 : 14),
            },
            [" ", r("span", {}, [e["data-text"] || ""])]
          ),
          u = t.appendChild(
            r("div", { className: "widget" + (a ? " widget-lg" : "") }, [c])
          ),
          l = c.hostname.replace(/\.$/, "");
        if (
          l.length < s.length ||
          ("." + l).substring(l.length - s.length) !== "." + s
        )
          return c.removeAttribute("href"), void n(u);
        var f = (" /" + c.pathname).split(/\/+/);
        if (
          ((((l === s || l === "gist." + s) && "archive" === f[3]) ||
            (l === s &&
              "releases" === f[3] &&
              ("download" === f[4] ||
                ("latest" === f[4] && "download" === f[5]))) ||
            l === "codeload." + s) &&
            (c.target = "_top"),
          "true" === w(e["data-show-count"]) && l === s)
        ) {
          var p, d;
          if (!f[2] && f[1]) (d = "followers"), (p = "?tab=followers");
          else if (!f[3] && f[2]) (d = "stargazers_count"), (p = "/stargazers");
          else if (f[4] || "subscription" !== f[3])
            if (f[4] || "fork" !== f[3]) {
              if ("issues" !== f[3]) return void n(u);
              (d = "open_issues_count"), (p = "/issues");
            } else (d = "forks_count"), (p = "/network/members");
          else (d = "subscribers_count"), (p = "/watchers");
          var v = f[2] ? "/repos/" + f[1] + "/" + f[2] : "/users/" + f[1];
          R.call(this, "https://api.github.com" + v, function (t, e) {
            if (!t) {
              var o = e[d];
              u.appendChild(
                r(
                  "a",
                  {
                    className: "social-count",
                    href: e.html_url + p,
                    rel: "noopener",
                    target: "_blank",
                    "aria-label":
                      o +
                      " " +
                      d
                        .replace(/_count$/, "")
                        .replace("_", " ")
                        .slice(0, o < 2 ? -1 : void 0) +
                      " on GitHub",
                  },
                  [("" + o).replace(/\B(?=(\d{3})+(?!\d))/g, ",")]
                )
              );
            }
            n(u);
          });
        } else n(u);
      }),
      (O = window.devicePixelRatio || 1),
      (C = function (t) {
        return (O > 1 ? i.ceil((i.round(t * O) / O) * 2) / 2 : i.ceil(t)) || 0;
      }),
      (I = function (t, e) {
        (t.style.width = e[0] + "px"), (t.style.height = e[1] + "px");
      }),
      (T = function (t, e) {
        if (null != t && null != e)
          if (
            (t.getAttribute &&
              (t = (function (t) {
                for (
                  var e = {
                      href: t.href,
                      title: t.title,
                      "aria-label": t.getAttribute("aria-label"),
                    },
                    n = ["icon", "color-scheme", "text", "size", "show-count"],
                    r = 0,
                    o = n.length;
                  r < o;
                  r++
                ) {
                  var i = "data-" + n[r];
                  e[i] = t.getAttribute(i);
                }
                return (
                  null == e["data-text"] &&
                    (e["data-text"] = t.textContent || t.innerText),
                  e
                );
              })(t)),
            f)
          ) {
            var n = y("span");
            j(n.attachShadow({ mode: "closed" }), t, function () {
              e(n);
            });
          } else {
            var o = y("iframe", {
              src: "javascript:0",
              title: t.title || void 0,
              allowtransparency: !0,
              scrolling: "no",
              frameBorder: 0,
            });
            I(o, [0, 0]),
              (o.style.border = "none"),
              p(o, "load", function n() {
                var a,
                  c = o.contentWindow;
                try {
                  a = c.document.body;
                } catch (t) {
                  return void r.body.appendChild(o.parentNode.removeChild(o));
                }
                d(o, "load", n),
                  j.call(c, a, t, function (n) {
                    var r = (function (t) {
                      var e = t.offsetWidth,
                        n = t.offsetHeight;
                      if (t.getBoundingClientRect) {
                        var r = t.getBoundingClientRect();
                        (e = i.max(e, C(r.width))), (n = i.max(n, C(r.height)));
                      }
                      return [e, n];
                    })(n);
                    o.parentNode.removeChild(o),
                      v(o, "load", function () {
                        I(o, r);
                      }),
                      (o.src =
                        u +
                        "#" +
                        (o.name = (function (t, e, n, r) {
                          null == e && (e = "&"),
                            null == n && (n = "="),
                            null == r && (r = window.encodeURIComponent);
                          var o = [];
                          for (var i in t) {
                            var a = t[i];
                            null != a && o.push(r(i) + n + r(a));
                          }
                          return o.join(e);
                        })(t))),
                      e(o);
                  });
              }),
              r.body.appendChild(o);
          }
      }),
      o.protocol + "//" + o.host + o.pathname === u
        ? j(r.body, h(window.name || o.hash.replace(/^#/, "")), function () {})
        : (function (t) {
            if (
              "complete" === r.readyState ||
              ("loading" !== r.readyState && !r.documentElement.doScroll)
            )
              setTimeout(t);
            else if (r.addEventListener) {
              var e = b(t);
              v(r, "DOMContentLoaded", e), v(window, "load", e);
            } else g(r, /m/, t);
          })(function () {
            for (
              var t = r.querySelectorAll
                  ? r.querySelectorAll("a.github-button")
                  : (function () {
                      for (
                        var t = [],
                          e = r.getElementsByTagName("a"),
                          n = 0,
                          o = e.length;
                        n < o;
                        n++
                      )
                        -1 !==
                          (" " + e[n].className + " ")
                            .replace(/[ \t\n\f\r]+/g, " ")
                            .indexOf(" github-button ") && t.push(e[n]);
                      return t;
                    })(),
                e = 0,
                n = t.length;
              e < n;
              e++
            )
              !(function (t) {
                T(t, function (e) {
                  t.parentNode.replaceChild(e, t);
                });
              })(t[e]);
          });
  },
  function (t, e, n) {
    "use strict";
    var r = n(7),
      o = n(49).indexOf,
      i = n(53),
      a = n(54),
      c = [].indexOf,
      u = !!c && 1 / [1].indexOf(1, -0) < 0,
      s = i("indexOf"),
      l = a("indexOf", { ACCESSORS: !0, 1: 0 });
    r(
      { target: "Array", proto: !0, forced: u || !s || !l },
      {
        indexOf: function (t) {
          return u
            ? c.apply(this, arguments) || 0
            : o(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    var r = n(0),
      o = n(32),
      i = r.WeakMap;
    t.exports = "function" == typeof i && /native code/.test(o(i));
  },
  function (t, e, n) {
    var r = n(4),
      o = n(84),
      i = n(27),
      a = n(9);
    t.exports = function (t, e) {
      for (var n = o(e), c = a.f, u = i.f, s = 0; s < n.length; s++) {
        var l = n[s];
        r(t, l) || c(t, l, u(e, l));
      }
    };
  },
  function (t, e, n) {
    var r = n(14),
      o = n(86),
      i = n(51),
      a = n(3);
    t.exports =
      r("Reflect", "ownKeys") ||
      function (t) {
        var e = o.f(a(t)),
          n = i.f;
        return n ? e.concat(n(t)) : e;
      };
  },
  function (t, e, n) {
    var r = n(0);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(48),
      o = n(36).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return r(t, o);
      };
  },
  function (t, e, n) {
    var r = n(1),
      o = n(38),
      i = n(9),
      a = r("unscopables"),
      c = Array.prototype;
    null == c[a] && i.f(c, a, { configurable: !0, value: o(null) }),
      (t.exports = function (t) {
        c[a][t] = !0;
      });
  },
  function (t, e, n) {
    var r = n(55);
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (t, e, n) {
    var r = n(2);
    t.exports = !r(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, e, n) {
    var r = n(3),
      o = n(91);
    t.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              n = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(n, []),
                (e = n instanceof Array);
            } catch (t) {}
            return function (n, i) {
              return r(n), o(i), e ? t.call(n, i) : (n.__proto__ = i), n;
            };
          })()
        : void 0);
  },
  function (t, e, n) {
    var r = n(6);
    t.exports = function (t) {
      if (!r(t) && null !== t)
        throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(7),
      o = n(28),
      i = n(11),
      a = n(53),
      c = [].join,
      u = o != Object,
      s = a("join", ",");
    r(
      { target: "Array", proto: !0, forced: u || !s },
      {
        join: function (t) {
          return c.call(i(this), void 0 === t ? "," : t);
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(7),
      o = n(6),
      i = n(94),
      a = n(50),
      c = n(15),
      u = n(11),
      s = n(63),
      l = n(1),
      f = n(95),
      h = n(54),
      p = f("slice"),
      d = h("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
      v = l("species"),
      g = [].slice,
      m = Math.max;
    r(
      { target: "Array", proto: !0, forced: !p || !d },
      {
        slice: function (t, e) {
          var n,
            r,
            l,
            f = u(this),
            h = c(f.length),
            p = a(t, h),
            d = a(void 0 === e ? h : e, h);
          if (
            i(f) &&
            ("function" != typeof (n = f.constructor) ||
            (n !== Array && !i(n.prototype))
              ? o(n) && null === (n = n[v]) && (n = void 0)
              : (n = void 0),
            n === Array || void 0 === n)
          )
            return g.call(f, p, d);
          for (
            r = new (void 0 === n ? Array : n)(m(d - p, 0)), l = 0;
            p < d;
            p++, l++
          )
            p in f && s(r, l, f[p]);
          return (r.length = l), r;
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(12);
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == r(t);
      };
  },
  function (t, e, n) {
    var r = n(2),
      o = n(1),
      i = n(64),
      a = o("species");
    t.exports = function (t) {
      return (
        i >= 51 ||
        !r(function () {
          var e = [];
          return (
            ((e.constructor = {})[a] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    };
  },
  function (t, e, n) {
    var r = n(5),
      o = n(9).f,
      i = Function.prototype,
      a = i.toString,
      c = /^\s*function ([^ (]*)/;
    r &&
      !("name" in i) &&
      o(i, "name", {
        configurable: !0,
        get: function () {
          try {
            return a.call(this).match(c)[1];
          } catch (t) {
            return "";
          }
        },
      });
  },
  function (t, e, n) {
    var r = n(39),
      o = n(10),
      i = n(98);
    r || o(Object.prototype, "toString", i, { unsafe: !0 });
  },
  function (t, e, n) {
    "use strict";
    var r = n(39),
      o = n(40);
    t.exports = r
      ? {}.toString
      : function () {
          return "[object " + o(this) + "]";
        };
  },
  function (t, e, n) {
    "use strict";
    var r,
      o,
      i,
      a,
      c = n(7),
      u = n(18),
      s = n(0),
      l = n(14),
      f = n(100),
      h = n(10),
      p = n(66),
      d = n(20),
      v = n(101),
      g = n(6),
      m = n(23),
      y = n(41),
      b = n(32),
      x = n(102),
      w = n(103),
      S = n(69),
      E = n(70).set,
      A = n(104),
      k = n(105),
      L = n(106),
      R = n(72),
      j = n(107),
      O = n(13),
      C = n(52),
      I = n(1),
      T = n(42),
      P = n(64),
      U = I("species"),
      _ = "Promise",
      M = O.get,
      F = O.set,
      z = O.getterFor(_),
      B = f,
      q = s.TypeError,
      N = s.document,
      D = s.process,
      G = l("fetch"),
      $ = R.f,
      H = $,
      V = !!(N && N.createEvent && s.dispatchEvent),
      X = "function" == typeof PromiseRejectionEvent,
      W = C(_, function () {
        if (!(b(B) !== String(B))) {
          if (66 === P) return !0;
          if (!T && !X) return !0;
        }
        if (u && !B.prototype.finally) return !0;
        if (P >= 51 && /native code/.test(B)) return !1;
        var t = B.resolve(1),
          e = function (t) {
            t(
              function () {},
              function () {}
            );
          };
        return (
          ((t.constructor = {})[U] = e), !(t.then(function () {}) instanceof e)
        );
      }),
      K =
        W ||
        !w(function (t) {
          B.all(t).catch(function () {});
        }),
      Y = function (t) {
        var e;
        return !(!g(t) || "function" != typeof (e = t.then)) && e;
      },
      J = function (t, e) {
        if (!t.notified) {
          t.notified = !0;
          var n = t.reactions;
          A(function () {
            for (var r = t.value, o = 1 == t.state, i = 0; n.length > i; ) {
              var a,
                c,
                u,
                s = n[i++],
                l = o ? s.ok : s.fail,
                f = s.resolve,
                h = s.reject,
                p = s.domain;
              try {
                l
                  ? (o || (2 === t.rejection && et(t), (t.rejection = 1)),
                    !0 === l
                      ? (a = r)
                      : (p && p.enter(), (a = l(r)), p && (p.exit(), (u = !0))),
                    a === s.promise
                      ? h(q("Promise-chain cycle"))
                      : (c = Y(a))
                      ? c.call(a, f, h)
                      : f(a))
                  : h(r);
              } catch (t) {
                p && !u && p.exit(), h(t);
              }
            }
            (t.reactions = []), (t.notified = !1), e && !t.rejection && Q(t);
          });
        }
      },
      Z = function (t, e, n) {
        var r, o;
        V
          ? (((r = N.createEvent("Event")).promise = e),
            (r.reason = n),
            r.initEvent(t, !1, !0),
            s.dispatchEvent(r))
          : (r = { promise: e, reason: n }),
          !X && (o = s["on" + t])
            ? o(r)
            : "unhandledrejection" === t && L("Unhandled promise rejection", n);
      },
      Q = function (t) {
        E.call(s, function () {
          var e,
            n = t.facade,
            r = t.value;
          if (
            tt(t) &&
            ((e = j(function () {
              T
                ? D.emit("unhandledRejection", r, n)
                : Z("unhandledrejection", n, r);
            })),
            (t.rejection = T || tt(t) ? 2 : 1),
            e.error)
          )
            throw e.value;
        });
      },
      tt = function (t) {
        return 1 !== t.rejection && !t.parent;
      },
      et = function (t) {
        E.call(s, function () {
          var e = t.facade;
          T ? D.emit("rejectionHandled", e) : Z("rejectionhandled", e, t.value);
        });
      },
      nt = function (t, e, n) {
        return function (r) {
          t(e, r, n);
        };
      },
      rt = function (t, e, n) {
        t.done ||
          ((t.done = !0), n && (t = n), (t.value = e), (t.state = 2), J(t, !0));
      },
      ot = function (t, e, n) {
        if (!t.done) {
          (t.done = !0), n && (t = n);
          try {
            if (t.facade === e) throw q("Promise can't be resolved itself");
            var r = Y(e);
            r
              ? A(function () {
                  var n = { done: !1 };
                  try {
                    r.call(e, nt(ot, n, t), nt(rt, n, t));
                  } catch (e) {
                    rt(n, e, t);
                  }
                })
              : ((t.value = e), (t.state = 1), J(t, !1));
          } catch (e) {
            rt({ done: !1 }, e, t);
          }
        }
      };
    W &&
      ((B = function (t) {
        y(this, B, _), m(t), r.call(this);
        var e = M(this);
        try {
          t(nt(ot, e), nt(rt, e));
        } catch (t) {
          rt(e, t);
        }
      }),
      ((r = function (t) {
        F(this, {
          type: _,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: 0,
          value: void 0,
        });
      }).prototype = p(B.prototype, {
        then: function (t, e) {
          var n = z(this),
            r = $(S(this, B));
          return (
            (r.ok = "function" != typeof t || t),
            (r.fail = "function" == typeof e && e),
            (r.domain = T ? D.domain : void 0),
            (n.parent = !0),
            n.reactions.push(r),
            0 != n.state && J(n, !1),
            r.promise
          );
        },
        catch: function (t) {
          return this.then(void 0, t);
        },
      })),
      (o = function () {
        var t = new r(),
          e = M(t);
        (this.promise = t),
          (this.resolve = nt(ot, e)),
          (this.reject = nt(rt, e));
      }),
      (R.f = $ = function (t) {
        return t === B || t === i ? new o(t) : H(t);
      }),
      u ||
        "function" != typeof f ||
        ((a = f.prototype.then),
        h(
          f.prototype,
          "then",
          function (t, e) {
            var n = this;
            return new B(function (t, e) {
              a.call(n, t, e);
            }).then(t, e);
          },
          { unsafe: !0 }
        ),
        "function" == typeof G &&
          c(
            { global: !0, enumerable: !0, forced: !0 },
            {
              fetch: function (t) {
                return k(B, G.apply(s, arguments));
              },
            }
          ))),
      c({ global: !0, wrap: !0, forced: W }, { Promise: B }),
      d(B, _, !1, !0),
      v(_),
      (i = l(_)),
      c(
        { target: _, stat: !0, forced: W },
        {
          reject: function (t) {
            var e = $(this);
            return e.reject.call(void 0, t), e.promise;
          },
        }
      ),
      c(
        { target: _, stat: !0, forced: u || W },
        {
          resolve: function (t) {
            return k(u && this === i ? B : this, t);
          },
        }
      ),
      c(
        { target: _, stat: !0, forced: K },
        {
          all: function (t) {
            var e = this,
              n = $(e),
              r = n.resolve,
              o = n.reject,
              i = j(function () {
                var n = m(e.resolve),
                  i = [],
                  a = 0,
                  c = 1;
                x(t, function (t) {
                  var u = a++,
                    s = !1;
                  i.push(void 0),
                    c++,
                    n.call(e, t).then(function (t) {
                      s || ((s = !0), (i[u] = t), --c || r(i));
                    }, o);
                }),
                  --c || r(i);
              });
            return i.error && o(i.value), n.promise;
          },
          race: function (t) {
            var e = this,
              n = $(e),
              r = n.reject,
              o = j(function () {
                var o = m(e.resolve);
                x(t, function (t) {
                  o.call(e, t).then(n.resolve, r);
                });
              });
            return o.error && r(o.value), n.promise;
          },
        }
      );
  },
  function (t, e, n) {
    var r = n(0);
    t.exports = r.Promise;
  },
  function (t, e, n) {
    "use strict";
    var r = n(14),
      o = n(9),
      i = n(1),
      a = n(5),
      c = i("species");
    t.exports = function (t) {
      var e = r(t),
        n = o.f;
      a &&
        e &&
        !e[c] &&
        n(e, c, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (t, e, n) {
    var r = n(3),
      o = n(67),
      i = n(15),
      a = n(24),
      c = n(25),
      u = n(68),
      s = function (t, e) {
        (this.stopped = t), (this.result = e);
      };
    t.exports = function (t, e, n) {
      var l,
        f,
        h,
        p,
        d,
        v,
        g,
        m = n && n.that,
        y = !(!n || !n.AS_ENTRIES),
        b = !(!n || !n.IS_ITERATOR),
        x = !(!n || !n.INTERRUPTED),
        w = a(e, m, 1 + y + x),
        S = function (t) {
          return l && u(l), new s(!0, t);
        },
        E = function (t) {
          return y
            ? (r(t), x ? w(t[0], t[1], S) : w(t[0], t[1]))
            : x
            ? w(t, S)
            : w(t);
        };
      if (b) l = t;
      else {
        if ("function" != typeof (f = c(t)))
          throw TypeError("Target is not iterable");
        if (o(f)) {
          for (h = 0, p = i(t.length); p > h; h++)
            if ((d = E(t[h])) && d instanceof s) return d;
          return new s(!1);
        }
        l = f.call(t);
      }
      for (v = l.next; !(g = v.call(l)).done; ) {
        try {
          d = E(g.value);
        } catch (t) {
          throw (u(l), t);
        }
        if ("object" == typeof d && d && d instanceof s) return d;
      }
      return new s(!1);
    };
  },
  function (t, e, n) {
    var r = n(1)("iterator"),
      o = !1;
    try {
      var i = 0,
        a = {
          next: function () {
            return { done: !!i++ };
          },
          return: function () {
            o = !0;
          },
        };
      (a[r] = function () {
        return this;
      }),
        Array.from(a, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !o) return !1;
      var n = !1;
      try {
        var i = {};
        (i[r] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          t(i);
      } catch (t) {}
      return n;
    };
  },
  function (t, e, n) {
    var r,
      o,
      i,
      a,
      c,
      u,
      s,
      l,
      f = n(0),
      h = n(27).f,
      p = n(70).set,
      d = n(71),
      v = n(42),
      g = f.MutationObserver || f.WebKitMutationObserver,
      m = f.document,
      y = f.process,
      b = f.Promise,
      x = h(f, "queueMicrotask"),
      w = x && x.value;
    w ||
      ((r = function () {
        var t, e;
        for (v && (t = y.domain) && t.exit(); o; ) {
          (e = o.fn), (o = o.next);
          try {
            e();
          } catch (t) {
            throw (o ? a() : (i = void 0), t);
          }
        }
        (i = void 0), t && t.enter();
      }),
      !d && !v && g && m
        ? ((c = !0),
          (u = m.createTextNode("")),
          new g(r).observe(u, { characterData: !0 }),
          (a = function () {
            u.data = c = !c;
          }))
        : b && b.resolve
        ? ((s = b.resolve(void 0)),
          (l = s.then),
          (a = function () {
            l.call(s, r);
          }))
        : (a = v
            ? function () {
                y.nextTick(r);
              }
            : function () {
                p.call(f, r);
              })),
      (t.exports =
        w ||
        function (t) {
          var e = { fn: t, next: void 0 };
          i && (i.next = e), o || ((o = e), a()), (i = e);
        });
  },
  function (t, e, n) {
    var r = n(3),
      o = n(6),
      i = n(72);
    t.exports = function (t, e) {
      if ((r(t), o(e) && e.constructor === t)) return e;
      var n = i.f(t);
      return (0, n.resolve)(e), n.promise;
    };
  },
  function (t, e, n) {
    var r = n(0);
    t.exports = function (t, e) {
      var n = r.console;
      n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return { error: !1, value: t() };
      } catch (t) {
        return { error: !0, value: t };
      }
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(3);
    t.exports = function () {
      var t = r(this),
        e = "";
      return (
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(2);
    function o(t, e) {
      return RegExp(t, e);
    }
    (e.UNSUPPORTED_Y = r(function () {
      var t = o("a", "y");
      return (t.lastIndex = 2), null != t.exec("abcd");
    })),
      (e.BROKEN_CARET = r(function () {
        var t = o("^r", "gy");
        return (t.lastIndex = 2), null != t.exec("str");
      }));
  },
  function (t, e, n) {
    "use strict";
    var r = n(75),
      o = n(3),
      i = n(22),
      a = n(15),
      c = n(21),
      u = n(17),
      s = n(76),
      l = n(77),
      f = Math.max,
      h = Math.min,
      p = Math.floor,
      d = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      v = /\$([$&'`]|\d\d?)/g;
    r("replace", 2, function (t, e, n, r) {
      var g = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
        m = r.REPLACE_KEEPS_$0,
        y = g ? "$" : "$0";
      return [
        function (n, r) {
          var o = u(this),
            i = null == n ? void 0 : n[t];
          return void 0 !== i ? i.call(n, o, r) : e.call(String(o), n, r);
        },
        function (t, r) {
          if ((!g && m) || ("string" == typeof r && -1 === r.indexOf(y))) {
            var i = n(e, t, this, r);
            if (i.done) return i.value;
          }
          var u = o(t),
            p = String(this),
            d = "function" == typeof r;
          d || (r = String(r));
          var v = u.global;
          if (v) {
            var x = u.unicode;
            u.lastIndex = 0;
          }
          for (var w = []; ; ) {
            var S = l(u, p);
            if (null === S) break;
            if ((w.push(S), !v)) break;
            "" === String(S[0]) && (u.lastIndex = s(p, a(u.lastIndex), x));
          }
          for (var E, A = "", k = 0, L = 0; L < w.length; L++) {
            S = w[L];
            for (
              var R = String(S[0]),
                j = f(h(c(S.index), p.length), 0),
                O = [],
                C = 1;
              C < S.length;
              C++
            )
              O.push(void 0 === (E = S[C]) ? E : String(E));
            var I = S.groups;
            if (d) {
              var T = [R].concat(O, j, p);
              void 0 !== I && T.push(I);
              var P = String(r.apply(void 0, T));
            } else P = b(R, p, j, O, I, r);
            j >= k && ((A += p.slice(k, j) + P), (k = j + R.length));
          }
          return A + p.slice(k);
        },
      ];
      function b(t, n, r, o, a, c) {
        var u = r + t.length,
          s = o.length,
          l = v;
        return (
          void 0 !== a && ((a = i(a)), (l = d)),
          e.call(c, l, function (e, i) {
            var c;
            switch (i.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return t;
              case "`":
                return n.slice(0, r);
              case "'":
                return n.slice(u);
              case "<":
                c = a[i.slice(1, -1)];
                break;
              default:
                var l = +i;
                if (0 === l) return e;
                if (l > s) {
                  var f = p(l / 10);
                  return 0 === f
                    ? e
                    : f <= s
                    ? void 0 === o[f - 1]
                      ? i.charAt(1)
                      : o[f - 1] + i.charAt(1)
                    : e;
                }
                c = o[l - 1];
            }
            return void 0 === c ? "" : c;
          })
        );
      }
    });
  },
  function (t, e, n) {
    "use strict";
    var r = n(75),
      o = n(112),
      i = n(3),
      a = n(17),
      c = n(69),
      u = n(76),
      s = n(15),
      l = n(77),
      f = n(26),
      h = n(2),
      p = [].push,
      d = Math.min,
      v = !h(function () {
        return !RegExp(4294967295, "y");
      });
    r(
      "split",
      2,
      function (t, e, n) {
        var r;
        return (
          (r =
            "c" == "abbc".split(/(b)*/)[1] ||
            4 != "test".split(/(?:)/, -1).length ||
            2 != "ab".split(/(?:ab)*/).length ||
            4 != ".".split(/(.?)(.?)/).length ||
            ".".split(/()()/).length > 1 ||
            "".split(/.?/).length
              ? function (t, n) {
                  var r = String(a(this)),
                    i = void 0 === n ? 4294967295 : n >>> 0;
                  if (0 === i) return [];
                  if (void 0 === t) return [r];
                  if (!o(t)) return e.call(r, t, i);
                  for (
                    var c,
                      u,
                      s,
                      l = [],
                      h =
                        (t.ignoreCase ? "i" : "") +
                        (t.multiline ? "m" : "") +
                        (t.unicode ? "u" : "") +
                        (t.sticky ? "y" : ""),
                      d = 0,
                      v = new RegExp(t.source, h + "g");
                    (c = f.call(v, r)) &&
                    !(
                      (u = v.lastIndex) > d &&
                      (l.push(r.slice(d, c.index)),
                      c.length > 1 &&
                        c.index < r.length &&
                        p.apply(l, c.slice(1)),
                      (s = c[0].length),
                      (d = u),
                      l.length >= i)
                    );

                  )
                    v.lastIndex === c.index && v.lastIndex++;
                  return (
                    d === r.length
                      ? (!s && v.test("")) || l.push("")
                      : l.push(r.slice(d)),
                    l.length > i ? l.slice(0, i) : l
                  );
                }
              : "0".split(void 0, 0).length
              ? function (t, n) {
                  return void 0 === t && 0 === n ? [] : e.call(this, t, n);
                }
              : e),
          [
            function (e, n) {
              var o = a(this),
                i = null == e ? void 0 : e[t];
              return void 0 !== i ? i.call(e, o, n) : r.call(String(o), e, n);
            },
            function (t, o) {
              var a = n(r, t, this, o, r !== e);
              if (a.done) return a.value;
              var f = i(t),
                h = String(this),
                p = c(f, RegExp),
                g = f.unicode,
                m =
                  (f.ignoreCase ? "i" : "") +
                  (f.multiline ? "m" : "") +
                  (f.unicode ? "u" : "") +
                  (v ? "y" : "g"),
                y = new p(v ? f : "^(?:" + f.source + ")", m),
                b = void 0 === o ? 4294967295 : o >>> 0;
              if (0 === b) return [];
              if (0 === h.length) return null === l(y, h) ? [h] : [];
              for (var x = 0, w = 0, S = []; w < h.length; ) {
                y.lastIndex = v ? w : 0;
                var E,
                  A = l(y, v ? h : h.slice(w));
                if (
                  null === A ||
                  (E = d(s(y.lastIndex + (v ? 0 : w)), h.length)) === x
                )
                  w = u(h, w, g);
                else {
                  if ((S.push(h.slice(x, w)), S.length === b)) return S;
                  for (var k = 1; k <= A.length - 1; k++)
                    if ((S.push(A[k]), S.length === b)) return S;
                  w = x = E;
                }
              }
              return S.push(h.slice(x)), S;
            },
          ]
        );
      },
      !v
    );
  },
  function (t, e, n) {
    var r = n(6),
      o = n(12),
      i = n(1)("match");
    t.exports = function (t) {
      var e;
      return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t));
    };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(114),
      i = n(37),
      a = n(8),
      c = n(1),
      u = c("iterator"),
      s = c("toStringTag"),
      l = i.values;
    for (var f in o) {
      var h = r[f],
        p = h && h.prototype;
      if (p) {
        if (p[u] !== l)
          try {
            a(p, u, l);
          } catch (t) {
            p[u] = l;
          }
        if ((p[s] || a(p, s, f), o[f]))
          for (var d in i)
            if (p[d] !== i[d])
              try {
                a(p, d, i[d]);
              } catch (t) {
                p[d] = i[d];
              }
      }
    }
  },
  function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (t, e, n) {
    "use strict";
    n(74);
    var r,
      o = n(7),
      i = n(5),
      a = n(78),
      c = n(0),
      u = n(56),
      s = n(10),
      l = n(41),
      f = n(4),
      h = n(116),
      p = n(117),
      d = n(43).codeAt,
      v = n(119),
      g = n(20),
      m = n(120),
      y = n(13),
      b = c.URL,
      x = m.URLSearchParams,
      w = m.getState,
      S = y.set,
      E = y.getterFor("URL"),
      A = Math.floor,
      k = Math.pow,
      L = /[A-Za-z]/,
      R = /[\d+-.A-Za-z]/,
      j = /\d/,
      O = /^(0x|0X)/,
      C = /^[0-7]+$/,
      I = /^\d+$/,
      T = /^[\dA-Fa-f]+$/,
      P = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
      U = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
      _ = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
      M = /[\u0009\u000A\u000D]/g,
      F = function (t, e) {
        var n, r, o;
        if ("[" == e.charAt(0)) {
          if ("]" != e.charAt(e.length - 1)) return "Invalid host";
          if (!(n = B(e.slice(1, -1)))) return "Invalid host";
          t.host = n;
        } else if (X(t)) {
          if (((e = v(e)), P.test(e))) return "Invalid host";
          if (null === (n = z(e))) return "Invalid host";
          t.host = n;
        } else {
          if (U.test(e)) return "Invalid host";
          for (n = "", r = p(e), o = 0; o < r.length; o++) n += H(r[o], N);
          t.host = n;
        }
      },
      z = function (t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          c,
          u = t.split(".");
        if ((u.length && "" == u[u.length - 1] && u.pop(), (e = u.length) > 4))
          return t;
        for (n = [], r = 0; r < e; r++) {
          if ("" == (o = u[r])) return t;
          if (
            ((i = 10),
            o.length > 1 &&
              "0" == o.charAt(0) &&
              ((i = O.test(o) ? 16 : 8), (o = o.slice(8 == i ? 1 : 2))),
            "" === o)
          )
            a = 0;
          else {
            if (!(10 == i ? I : 8 == i ? C : T).test(o)) return t;
            a = parseInt(o, i);
          }
          n.push(a);
        }
        for (r = 0; r < e; r++)
          if (((a = n[r]), r == e - 1)) {
            if (a >= k(256, 5 - e)) return null;
          } else if (a > 255) return null;
        for (c = n.pop(), r = 0; r < n.length; r++) c += n[r] * k(256, 3 - r);
        return c;
      },
      B = function (t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          c,
          u = [0, 0, 0, 0, 0, 0, 0, 0],
          s = 0,
          l = null,
          f = 0,
          h = function () {
            return t.charAt(f);
          };
        if (":" == h()) {
          if (":" != t.charAt(1)) return;
          (f += 2), (l = ++s);
        }
        for (; h(); ) {
          if (8 == s) return;
          if (":" != h()) {
            for (e = n = 0; n < 4 && T.test(h()); )
              (e = 16 * e + parseInt(h(), 16)), f++, n++;
            if ("." == h()) {
              if (0 == n) return;
              if (((f -= n), s > 6)) return;
              for (r = 0; h(); ) {
                if (((o = null), r > 0)) {
                  if (!("." == h() && r < 4)) return;
                  f++;
                }
                if (!j.test(h())) return;
                for (; j.test(h()); ) {
                  if (((i = parseInt(h(), 10)), null === o)) o = i;
                  else {
                    if (0 == o) return;
                    o = 10 * o + i;
                  }
                  if (o > 255) return;
                  f++;
                }
                (u[s] = 256 * u[s] + o), (2 != ++r && 4 != r) || s++;
              }
              if (4 != r) return;
              break;
            }
            if (":" == h()) {
              if ((f++, !h())) return;
            } else if (h()) return;
            u[s++] = e;
          } else {
            if (null !== l) return;
            f++, (l = ++s);
          }
        }
        if (null !== l)
          for (a = s - l, s = 7; 0 != s && a > 0; )
            (c = u[s]), (u[s--] = u[l + a - 1]), (u[l + --a] = c);
        else if (8 != s) return;
        return u;
      },
      q = function (t) {
        var e, n, r, o;
        if ("number" == typeof t) {
          for (e = [], n = 0; n < 4; n++) e.unshift(t % 256), (t = A(t / 256));
          return e.join(".");
        }
        if ("object" == typeof t) {
          for (
            e = "",
              r = (function (t) {
                for (var e = null, n = 1, r = null, o = 0, i = 0; i < 8; i++)
                  0 !== t[i]
                    ? (o > n && ((e = r), (n = o)), (r = null), (o = 0))
                    : (null === r && (r = i), ++o);
                return o > n && ((e = r), (n = o)), e;
              })(t),
              n = 0;
            n < 8;
            n++
          )
            (o && 0 === t[n]) ||
              (o && (o = !1),
              r === n
                ? ((e += n ? ":" : "::"), (o = !0))
                : ((e += t[n].toString(16)), n < 7 && (e += ":")));
          return "[" + e + "]";
        }
        return t;
      },
      N = {},
      D = h({}, N, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
      G = h({}, D, { "#": 1, "?": 1, "{": 1, "}": 1 }),
      $ = h({}, G, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1,
      }),
      H = function (t, e) {
        var n = d(t, 0);
        return n > 32 && n < 127 && !f(e, t) ? t : encodeURIComponent(t);
      },
      V = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
      X = function (t) {
        return f(V, t.scheme);
      },
      W = function (t) {
        return "" != t.username || "" != t.password;
      },
      K = function (t) {
        return !t.host || t.cannotBeABaseURL || "file" == t.scheme;
      },
      Y = function (t, e) {
        var n;
        return (
          2 == t.length &&
          L.test(t.charAt(0)) &&
          (":" == (n = t.charAt(1)) || (!e && "|" == n))
        );
      },
      J = function (t) {
        var e;
        return (
          t.length > 1 &&
          Y(t.slice(0, 2)) &&
          (2 == t.length ||
            "/" === (e = t.charAt(2)) ||
            "\\" === e ||
            "?" === e ||
            "#" === e)
        );
      },
      Z = function (t) {
        var e = t.path,
          n = e.length;
        !n || ("file" == t.scheme && 1 == n && Y(e[0], !0)) || e.pop();
      },
      Q = function (t) {
        return "." === t || "%2e" === t.toLowerCase();
      },
      tt = {},
      et = {},
      nt = {},
      rt = {},
      ot = {},
      it = {},
      at = {},
      ct = {},
      ut = {},
      st = {},
      lt = {},
      ft = {},
      ht = {},
      pt = {},
      dt = {},
      vt = {},
      gt = {},
      mt = {},
      yt = {},
      bt = {},
      xt = {},
      wt = function (t, e, n, o) {
        var i,
          a,
          c,
          u,
          s,
          l = n || tt,
          h = 0,
          d = "",
          v = !1,
          g = !1,
          m = !1;
        for (
          n ||
            ((t.scheme = ""),
            (t.username = ""),
            (t.password = ""),
            (t.host = null),
            (t.port = null),
            (t.path = []),
            (t.query = null),
            (t.fragment = null),
            (t.cannotBeABaseURL = !1),
            (e = e.replace(_, ""))),
            e = e.replace(M, ""),
            i = p(e);
          h <= i.length;

        ) {
          switch (((a = i[h]), l)) {
            case tt:
              if (!a || !L.test(a)) {
                if (n) return "Invalid scheme";
                l = nt;
                continue;
              }
              (d += a.toLowerCase()), (l = et);
              break;
            case et:
              if (a && (R.test(a) || "+" == a || "-" == a || "." == a))
                d += a.toLowerCase();
              else {
                if (":" != a) {
                  if (n) return "Invalid scheme";
                  (d = ""), (l = nt), (h = 0);
                  continue;
                }
                if (
                  n &&
                  (X(t) != f(V, d) ||
                    ("file" == d && (W(t) || null !== t.port)) ||
                    ("file" == t.scheme && !t.host))
                )
                  return;
                if (((t.scheme = d), n))
                  return void (
                    X(t) &&
                    V[t.scheme] == t.port &&
                    (t.port = null)
                  );
                (d = ""),
                  "file" == t.scheme
                    ? (l = pt)
                    : X(t) && o && o.scheme == t.scheme
                    ? (l = rt)
                    : X(t)
                    ? (l = ct)
                    : "/" == i[h + 1]
                    ? ((l = ot), h++)
                    : ((t.cannotBeABaseURL = !0), t.path.push(""), (l = yt));
              }
              break;
            case nt:
              if (!o || (o.cannotBeABaseURL && "#" != a))
                return "Invalid scheme";
              if (o.cannotBeABaseURL && "#" == a) {
                (t.scheme = o.scheme),
                  (t.path = o.path.slice()),
                  (t.query = o.query),
                  (t.fragment = ""),
                  (t.cannotBeABaseURL = !0),
                  (l = xt);
                break;
              }
              l = "file" == o.scheme ? pt : it;
              continue;
            case rt:
              if ("/" != a || "/" != i[h + 1]) {
                l = it;
                continue;
              }
              (l = ut), h++;
              break;
            case ot:
              if ("/" == a) {
                l = st;
                break;
              }
              l = mt;
              continue;
            case it:
              if (((t.scheme = o.scheme), a == r))
                (t.username = o.username),
                  (t.password = o.password),
                  (t.host = o.host),
                  (t.port = o.port),
                  (t.path = o.path.slice()),
                  (t.query = o.query);
              else if ("/" == a || ("\\" == a && X(t))) l = at;
              else if ("?" == a)
                (t.username = o.username),
                  (t.password = o.password),
                  (t.host = o.host),
                  (t.port = o.port),
                  (t.path = o.path.slice()),
                  (t.query = ""),
                  (l = bt);
              else {
                if ("#" != a) {
                  (t.username = o.username),
                    (t.password = o.password),
                    (t.host = o.host),
                    (t.port = o.port),
                    (t.path = o.path.slice()),
                    t.path.pop(),
                    (l = mt);
                  continue;
                }
                (t.username = o.username),
                  (t.password = o.password),
                  (t.host = o.host),
                  (t.port = o.port),
                  (t.path = o.path.slice()),
                  (t.query = o.query),
                  (t.fragment = ""),
                  (l = xt);
              }
              break;
            case at:
              if (!X(t) || ("/" != a && "\\" != a)) {
                if ("/" != a) {
                  (t.username = o.username),
                    (t.password = o.password),
                    (t.host = o.host),
                    (t.port = o.port),
                    (l = mt);
                  continue;
                }
                l = st;
              } else l = ut;
              break;
            case ct:
              if (((l = ut), "/" != a || "/" != d.charAt(h + 1))) continue;
              h++;
              break;
            case ut:
              if ("/" != a && "\\" != a) {
                l = st;
                continue;
              }
              break;
            case st:
              if ("@" == a) {
                v && (d = "%40" + d), (v = !0), (c = p(d));
                for (var y = 0; y < c.length; y++) {
                  var b = c[y];
                  if (":" != b || m) {
                    var x = H(b, $);
                    m ? (t.password += x) : (t.username += x);
                  } else m = !0;
                }
                d = "";
              } else if (
                a == r ||
                "/" == a ||
                "?" == a ||
                "#" == a ||
                ("\\" == a && X(t))
              ) {
                if (v && "" == d) return "Invalid authority";
                (h -= p(d).length + 1), (d = ""), (l = lt);
              } else d += a;
              break;
            case lt:
            case ft:
              if (n && "file" == t.scheme) {
                l = vt;
                continue;
              }
              if (":" != a || g) {
                if (
                  a == r ||
                  "/" == a ||
                  "?" == a ||
                  "#" == a ||
                  ("\\" == a && X(t))
                ) {
                  if (X(t) && "" == d) return "Invalid host";
                  if (n && "" == d && (W(t) || null !== t.port)) return;
                  if ((u = F(t, d))) return u;
                  if (((d = ""), (l = gt), n)) return;
                  continue;
                }
                "[" == a ? (g = !0) : "]" == a && (g = !1), (d += a);
              } else {
                if ("" == d) return "Invalid host";
                if ((u = F(t, d))) return u;
                if (((d = ""), (l = ht), n == ft)) return;
              }
              break;
            case ht:
              if (!j.test(a)) {
                if (
                  a == r ||
                  "/" == a ||
                  "?" == a ||
                  "#" == a ||
                  ("\\" == a && X(t)) ||
                  n
                ) {
                  if ("" != d) {
                    var w = parseInt(d, 10);
                    if (w > 65535) return "Invalid port";
                    (t.port = X(t) && w === V[t.scheme] ? null : w), (d = "");
                  }
                  if (n) return;
                  l = gt;
                  continue;
                }
                return "Invalid port";
              }
              d += a;
              break;
            case pt:
              if (((t.scheme = "file"), "/" == a || "\\" == a)) l = dt;
              else {
                if (!o || "file" != o.scheme) {
                  l = mt;
                  continue;
                }
                if (a == r)
                  (t.host = o.host),
                    (t.path = o.path.slice()),
                    (t.query = o.query);
                else if ("?" == a)
                  (t.host = o.host),
                    (t.path = o.path.slice()),
                    (t.query = ""),
                    (l = bt);
                else {
                  if ("#" != a) {
                    J(i.slice(h).join("")) ||
                      ((t.host = o.host), (t.path = o.path.slice()), Z(t)),
                      (l = mt);
                    continue;
                  }
                  (t.host = o.host),
                    (t.path = o.path.slice()),
                    (t.query = o.query),
                    (t.fragment = ""),
                    (l = xt);
                }
              }
              break;
            case dt:
              if ("/" == a || "\\" == a) {
                l = vt;
                break;
              }
              o &&
                "file" == o.scheme &&
                !J(i.slice(h).join("")) &&
                (Y(o.path[0], !0) ? t.path.push(o.path[0]) : (t.host = o.host)),
                (l = mt);
              continue;
            case vt:
              if (a == r || "/" == a || "\\" == a || "?" == a || "#" == a) {
                if (!n && Y(d)) l = mt;
                else if ("" == d) {
                  if (((t.host = ""), n)) return;
                  l = gt;
                } else {
                  if ((u = F(t, d))) return u;
                  if (("localhost" == t.host && (t.host = ""), n)) return;
                  (d = ""), (l = gt);
                }
                continue;
              }
              d += a;
              break;
            case gt:
              if (X(t)) {
                if (((l = mt), "/" != a && "\\" != a)) continue;
              } else if (n || "?" != a)
                if (n || "#" != a) {
                  if (a != r && ((l = mt), "/" != a)) continue;
                } else (t.fragment = ""), (l = xt);
              else (t.query = ""), (l = bt);
              break;
            case mt:
              if (
                a == r ||
                "/" == a ||
                ("\\" == a && X(t)) ||
                (!n && ("?" == a || "#" == a))
              ) {
                if (
                  (".." === (s = (s = d).toLowerCase()) ||
                  "%2e." === s ||
                  ".%2e" === s ||
                  "%2e%2e" === s
                    ? (Z(t), "/" == a || ("\\" == a && X(t)) || t.path.push(""))
                    : Q(d)
                    ? "/" == a || ("\\" == a && X(t)) || t.path.push("")
                    : ("file" == t.scheme &&
                        !t.path.length &&
                        Y(d) &&
                        (t.host && (t.host = ""), (d = d.charAt(0) + ":")),
                      t.path.push(d)),
                  (d = ""),
                  "file" == t.scheme && (a == r || "?" == a || "#" == a))
                )
                  for (; t.path.length > 1 && "" === t.path[0]; )
                    t.path.shift();
                "?" == a
                  ? ((t.query = ""), (l = bt))
                  : "#" == a && ((t.fragment = ""), (l = xt));
              } else d += H(a, G);
              break;
            case yt:
              "?" == a
                ? ((t.query = ""), (l = bt))
                : "#" == a
                ? ((t.fragment = ""), (l = xt))
                : a != r && (t.path[0] += H(a, N));
              break;
            case bt:
              n || "#" != a
                ? a != r &&
                  ("'" == a && X(t)
                    ? (t.query += "%27")
                    : (t.query += "#" == a ? "%23" : H(a, N)))
                : ((t.fragment = ""), (l = xt));
              break;
            case xt:
              a != r && (t.fragment += H(a, D));
          }
          h++;
        }
      },
      St = function (t) {
        var e,
          n,
          r = l(this, St, "URL"),
          o = arguments.length > 1 ? arguments[1] : void 0,
          a = String(t),
          c = S(r, { type: "URL" });
        if (void 0 !== o)
          if (o instanceof St) e = E(o);
          else if ((n = wt((e = {}), String(o)))) throw TypeError(n);
        if ((n = wt(c, a, null, e))) throw TypeError(n);
        var u = (c.searchParams = new x()),
          s = w(u);
        s.updateSearchParams(c.query),
          (s.updateURL = function () {
            c.query = String(u) || null;
          }),
          i ||
            ((r.href = At.call(r)),
            (r.origin = kt.call(r)),
            (r.protocol = Lt.call(r)),
            (r.username = Rt.call(r)),
            (r.password = jt.call(r)),
            (r.host = Ot.call(r)),
            (r.hostname = Ct.call(r)),
            (r.port = It.call(r)),
            (r.pathname = Tt.call(r)),
            (r.search = Pt.call(r)),
            (r.searchParams = Ut.call(r)),
            (r.hash = _t.call(r)));
      },
      Et = St.prototype,
      At = function () {
        var t = E(this),
          e = t.scheme,
          n = t.username,
          r = t.password,
          o = t.host,
          i = t.port,
          a = t.path,
          c = t.query,
          u = t.fragment,
          s = e + ":";
        return (
          null !== o
            ? ((s += "//"),
              W(t) && (s += n + (r ? ":" + r : "") + "@"),
              (s += q(o)),
              null !== i && (s += ":" + i))
            : "file" == e && (s += "//"),
          (s += t.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : ""),
          null !== c && (s += "?" + c),
          null !== u && (s += "#" + u),
          s
        );
      },
      kt = function () {
        var t = E(this),
          e = t.scheme,
          n = t.port;
        if ("blob" == e)
          try {
            return new URL(e.path[0]).origin;
          } catch (t) {
            return "null";
          }
        return "file" != e && X(t)
          ? e + "://" + q(t.host) + (null !== n ? ":" + n : "")
          : "null";
      },
      Lt = function () {
        return E(this).scheme + ":";
      },
      Rt = function () {
        return E(this).username;
      },
      jt = function () {
        return E(this).password;
      },
      Ot = function () {
        var t = E(this),
          e = t.host,
          n = t.port;
        return null === e ? "" : null === n ? q(e) : q(e) + ":" + n;
      },
      Ct = function () {
        var t = E(this).host;
        return null === t ? "" : q(t);
      },
      It = function () {
        var t = E(this).port;
        return null === t ? "" : String(t);
      },
      Tt = function () {
        var t = E(this),
          e = t.path;
        return t.cannotBeABaseURL ? e[0] : e.length ? "/" + e.join("/") : "";
      },
      Pt = function () {
        var t = E(this).query;
        return t ? "?" + t : "";
      },
      Ut = function () {
        return E(this).searchParams;
      },
      _t = function () {
        var t = E(this).fragment;
        return t ? "#" + t : "";
      },
      Mt = function (t, e) {
        return { get: t, set: e, configurable: !0, enumerable: !0 };
      };
    if (
      (i &&
        u(Et, {
          href: Mt(At, function (t) {
            var e = E(this),
              n = String(t),
              r = wt(e, n);
            if (r) throw TypeError(r);
            w(e.searchParams).updateSearchParams(e.query);
          }),
          origin: Mt(kt),
          protocol: Mt(Lt, function (t) {
            var e = E(this);
            wt(e, String(t) + ":", tt);
          }),
          username: Mt(Rt, function (t) {
            var e = E(this),
              n = p(String(t));
            if (!K(e)) {
              e.username = "";
              for (var r = 0; r < n.length; r++) e.username += H(n[r], $);
            }
          }),
          password: Mt(jt, function (t) {
            var e = E(this),
              n = p(String(t));
            if (!K(e)) {
              e.password = "";
              for (var r = 0; r < n.length; r++) e.password += H(n[r], $);
            }
          }),
          host: Mt(Ot, function (t) {
            var e = E(this);
            e.cannotBeABaseURL || wt(e, String(t), lt);
          }),
          hostname: Mt(Ct, function (t) {
            var e = E(this);
            e.cannotBeABaseURL || wt(e, String(t), ft);
          }),
          port: Mt(It, function (t) {
            var e = E(this);
            K(e) || ("" == (t = String(t)) ? (e.port = null) : wt(e, t, ht));
          }),
          pathname: Mt(Tt, function (t) {
            var e = E(this);
            e.cannotBeABaseURL || ((e.path = []), wt(e, t + "", gt));
          }),
          search: Mt(Pt, function (t) {
            var e = E(this);
            "" == (t = String(t))
              ? (e.query = null)
              : ("?" == t.charAt(0) && (t = t.slice(1)),
                (e.query = ""),
                wt(e, t, bt)),
              w(e.searchParams).updateSearchParams(e.query);
          }),
          searchParams: Mt(Ut),
          hash: Mt(_t, function (t) {
            var e = E(this);
            "" != (t = String(t))
              ? ("#" == t.charAt(0) && (t = t.slice(1)),
                (e.fragment = ""),
                wt(e, t, xt))
              : (e.fragment = null);
          }),
        }),
      s(
        Et,
        "toJSON",
        function () {
          return At.call(this);
        },
        { enumerable: !0 }
      ),
      s(
        Et,
        "toString",
        function () {
          return At.call(this);
        },
        { enumerable: !0 }
      ),
      b)
    ) {
      var Ft = b.createObjectURL,
        zt = b.revokeObjectURL;
      Ft &&
        s(St, "createObjectURL", function (t) {
          return Ft.apply(b, arguments);
        }),
        zt &&
          s(St, "revokeObjectURL", function (t) {
            return zt.apply(b, arguments);
          });
    }
    g(St, "URL"), o({ global: !0, forced: !a, sham: !i }, { URL: St });
  },
  function (t, e, n) {
    "use strict";
    var r = n(5),
      o = n(2),
      i = n(57),
      a = n(51),
      c = n(44),
      u = n(22),
      s = n(28),
      l = Object.assign,
      f = Object.defineProperty;
    t.exports =
      !l ||
      o(function () {
        if (
          r &&
          1 !==
            l(
              { b: 1 },
              l(
                f({}, "a", {
                  enumerable: !0,
                  get: function () {
                    f(this, "b", { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          e = {},
          n = Symbol();
        return (
          (t[n] = 7),
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            e[t] = t;
          }),
          7 != l({}, t)[n] || "abcdefghijklmnopqrst" != i(l({}, e)).join("")
        );
      })
        ? function (t, e) {
            for (
              var n = u(t), o = arguments.length, l = 1, f = a.f, h = c.f;
              o > l;

            )
              for (
                var p,
                  d = s(arguments[l++]),
                  v = f ? i(d).concat(f(d)) : i(d),
                  g = v.length,
                  m = 0;
                g > m;

              )
                (p = v[m++]), (r && !h.call(d, p)) || (n[p] = d[p]);
            return n;
          }
        : l;
  },
  function (t, e, n) {
    "use strict";
    var r = n(24),
      o = n(22),
      i = n(118),
      a = n(67),
      c = n(15),
      u = n(63),
      s = n(25);
    t.exports = function (t) {
      var e,
        n,
        l,
        f,
        h,
        p,
        d = o(t),
        v = "function" == typeof this ? this : Array,
        g = arguments.length,
        m = g > 1 ? arguments[1] : void 0,
        y = void 0 !== m,
        b = s(d),
        x = 0;
      if (
        (y && (m = r(m, g > 2 ? arguments[2] : void 0, 2)),
        null == b || (v == Array && a(b)))
      )
        for (n = new v((e = c(d.length))); e > x; x++)
          (p = y ? m(d[x], x) : d[x]), u(n, x, p);
      else
        for (h = (f = b.call(d)).next, n = new v(); !(l = h.call(f)).done; x++)
          (p = y ? i(f, m, [l.value, x], !0) : l.value), u(n, x, p);
      return (n.length = x), n;
    };
  },
  function (t, e, n) {
    var r = n(3),
      o = n(68);
    t.exports = function (t, e, n, i) {
      try {
        return i ? e(r(n)[0], n[1]) : e(n);
      } catch (e) {
        throw (o(t), e);
      }
    };
  },
  function (t, e, n) {
    "use strict";
    var r = /[^\0-\u007E]/,
      o = /[.\u3002\uFF0E\uFF61]/g,
      i = "Overflow: input needs wider integers to process",
      a = Math.floor,
      c = String.fromCharCode,
      u = function (t) {
        return t + 22 + 75 * (t < 26);
      },
      s = function (t, e, n) {
        var r = 0;
        for (t = n ? a(t / 700) : t >> 1, t += a(t / e); t > 455; r += 36)
          t = a(t / 35);
        return a(r + (36 * t) / (t + 38));
      },
      l = function (t) {
        var e,
          n,
          r = [],
          o = (t = (function (t) {
            for (var e = [], n = 0, r = t.length; n < r; ) {
              var o = t.charCodeAt(n++);
              if (o >= 55296 && o <= 56319 && n < r) {
                var i = t.charCodeAt(n++);
                56320 == (64512 & i)
                  ? e.push(((1023 & o) << 10) + (1023 & i) + 65536)
                  : (e.push(o), n--);
              } else e.push(o);
            }
            return e;
          })(t)).length,
          l = 128,
          f = 0,
          h = 72;
        for (e = 0; e < t.length; e++) (n = t[e]) < 128 && r.push(c(n));
        var p = r.length,
          d = p;
        for (p && r.push("-"); d < o; ) {
          var v = 2147483647;
          for (e = 0; e < t.length; e++) (n = t[e]) >= l && n < v && (v = n);
          var g = d + 1;
          if (v - l > a((2147483647 - f) / g)) throw RangeError(i);
          for (f += (v - l) * g, l = v, e = 0; e < t.length; e++) {
            if ((n = t[e]) < l && ++f > 2147483647) throw RangeError(i);
            if (n == l) {
              for (var m = f, y = 36; ; y += 36) {
                var b = y <= h ? 1 : y >= h + 26 ? 26 : y - h;
                if (m < b) break;
                var x = m - b,
                  w = 36 - b;
                r.push(c(u(b + (x % w)))), (m = a(x / w));
              }
              r.push(c(u(m))), (h = s(f, g, d == p)), (f = 0), ++d;
            }
          }
          ++f, ++l;
        }
        return r.join("");
      };
    t.exports = function (t) {
      var e,
        n,
        i = [],
        a = t.toLowerCase().replace(o, ".").split(".");
      for (e = 0; e < a.length; e++)
        (n = a[e]), i.push(r.test(n) ? "xn--" + l(n) : n);
      return i.join(".");
    };
  },
  function (t, e, n) {
    "use strict";
    n(37);
    var r = n(7),
      o = n(14),
      i = n(78),
      a = n(10),
      c = n(66),
      u = n(20),
      s = n(60),
      l = n(13),
      f = n(41),
      h = n(4),
      p = n(24),
      d = n(40),
      v = n(3),
      g = n(6),
      m = n(38),
      y = n(16),
      b = n(121),
      x = n(25),
      w = n(1),
      S = o("fetch"),
      E = o("Headers"),
      A = w("iterator"),
      k = l.set,
      L = l.getterFor("URLSearchParams"),
      R = l.getterFor("URLSearchParamsIterator"),
      j = /\+/g,
      O = Array(4),
      C = function (t) {
        return (
          O[t - 1] || (O[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi"))
        );
      },
      I = function (t) {
        try {
          return decodeURIComponent(t);
        } catch (e) {
          return t;
        }
      },
      T = function (t) {
        var e = t.replace(j, " "),
          n = 4;
        try {
          return decodeURIComponent(e);
        } catch (t) {
          for (; n; ) e = e.replace(C(n--), I);
          return e;
        }
      },
      P = /[!'()~]|%20/g,
      U = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
      },
      _ = function (t) {
        return U[t];
      },
      M = function (t) {
        return encodeURIComponent(t).replace(P, _);
      },
      F = function (t, e) {
        if (e)
          for (var n, r, o = e.split("&"), i = 0; i < o.length; )
            (n = o[i++]).length &&
              ((r = n.split("=")),
              t.push({ key: T(r.shift()), value: T(r.join("=")) }));
      },
      z = function (t) {
        (this.entries.length = 0), F(this.entries, t);
      },
      B = function (t, e) {
        if (t < e) throw TypeError("Not enough arguments");
      },
      q = s(
        function (t, e) {
          k(this, {
            type: "URLSearchParamsIterator",
            iterator: b(L(t).entries),
            kind: e,
          });
        },
        "Iterator",
        function () {
          var t = R(this),
            e = t.kind,
            n = t.iterator.next(),
            r = n.value;
          return (
            n.done ||
              (n.value =
                "keys" === e
                  ? r.key
                  : "values" === e
                  ? r.value
                  : [r.key, r.value]),
            n
          );
        }
      ),
      N = function () {
        f(this, N, "URLSearchParams");
        var t,
          e,
          n,
          r,
          o,
          i,
          a,
          c,
          u,
          s = arguments.length > 0 ? arguments[0] : void 0,
          l = this,
          p = [];
        if (
          (k(l, {
            type: "URLSearchParams",
            entries: p,
            updateURL: function () {},
            updateSearchParams: z,
          }),
          void 0 !== s)
        )
          if (g(s))
            if ("function" == typeof (t = x(s)))
              for (n = (e = t.call(s)).next; !(r = n.call(e)).done; ) {
                if (
                  (a = (i = (o = b(v(r.value))).next).call(o)).done ||
                  (c = i.call(o)).done ||
                  !i.call(o).done
                )
                  throw TypeError("Expected sequence with length 2");
                p.push({ key: a.value + "", value: c.value + "" });
              }
            else for (u in s) h(s, u) && p.push({ key: u, value: s[u] + "" });
          else
            F(
              p,
              "string" == typeof s
                ? "?" === s.charAt(0)
                  ? s.slice(1)
                  : s
                : s + ""
            );
      },
      D = N.prototype;
    c(
      D,
      {
        append: function (t, e) {
          B(arguments.length, 2);
          var n = L(this);
          n.entries.push({ key: t + "", value: e + "" }), n.updateURL();
        },
        delete: function (t) {
          B(arguments.length, 1);
          for (
            var e = L(this), n = e.entries, r = t + "", o = 0;
            o < n.length;

          )
            n[o].key === r ? n.splice(o, 1) : o++;
          e.updateURL();
        },
        get: function (t) {
          B(arguments.length, 1);
          for (var e = L(this).entries, n = t + "", r = 0; r < e.length; r++)
            if (e[r].key === n) return e[r].value;
          return null;
        },
        getAll: function (t) {
          B(arguments.length, 1);
          for (
            var e = L(this).entries, n = t + "", r = [], o = 0;
            o < e.length;
            o++
          )
            e[o].key === n && r.push(e[o].value);
          return r;
        },
        has: function (t) {
          B(arguments.length, 1);
          for (var e = L(this).entries, n = t + "", r = 0; r < e.length; )
            if (e[r++].key === n) return !0;
          return !1;
        },
        set: function (t, e) {
          B(arguments.length, 1);
          for (
            var n,
              r = L(this),
              o = r.entries,
              i = !1,
              a = t + "",
              c = e + "",
              u = 0;
            u < o.length;
            u++
          )
            (n = o[u]).key === a &&
              (i ? o.splice(u--, 1) : ((i = !0), (n.value = c)));
          i || o.push({ key: a, value: c }), r.updateURL();
        },
        sort: function () {
          var t,
            e,
            n,
            r = L(this),
            o = r.entries,
            i = o.slice();
          for (o.length = 0, n = 0; n < i.length; n++) {
            for (t = i[n], e = 0; e < n; e++)
              if (o[e].key > t.key) {
                o.splice(e, 0, t);
                break;
              }
            e === n && o.push(t);
          }
          r.updateURL();
        },
        forEach: function (t) {
          for (
            var e,
              n = L(this).entries,
              r = p(t, arguments.length > 1 ? arguments[1] : void 0, 3),
              o = 0;
            o < n.length;

          )
            r((e = n[o++]).value, e.key, this);
        },
        keys: function () {
          return new q(this, "keys");
        },
        values: function () {
          return new q(this, "values");
        },
        entries: function () {
          return new q(this, "entries");
        },
      },
      { enumerable: !0 }
    ),
      a(D, A, D.entries),
      a(
        D,
        "toString",
        function () {
          for (var t, e = L(this).entries, n = [], r = 0; r < e.length; )
            (t = e[r++]), n.push(M(t.key) + "=" + M(t.value));
          return n.join("&");
        },
        { enumerable: !0 }
      ),
      u(N, "URLSearchParams"),
      r({ global: !0, forced: !i }, { URLSearchParams: N }),
      i ||
        "function" != typeof S ||
        "function" != typeof E ||
        r(
          { global: !0, enumerable: !0, forced: !0 },
          {
            fetch: function (t) {
              var e,
                n,
                r,
                o = [t];
              return (
                arguments.length > 1 &&
                  (g((e = arguments[1])) &&
                    ((n = e.body),
                    "URLSearchParams" === d(n) &&
                      ((r = e.headers ? new E(e.headers) : new E()).has(
                        "content-type"
                      ) ||
                        r.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ),
                      (e = m(e, { body: y(0, String(n)), headers: y(0, r) })))),
                  o.push(e)),
                S.apply(this, o)
              );
            },
          }
        ),
      (t.exports = { URLSearchParams: N, getState: L });
  },
  function (t, e, n) {
    var r = n(3),
      o = n(25);
    t.exports = function (t) {
      var e = o(t);
      if ("function" != typeof e)
        throw TypeError(String(t) + " is not iterable");
      return r(e.call(t));
    };
  },
  function (t, e, n) {},
  function (t, e, n) {},
]);

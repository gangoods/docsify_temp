!(function (e) {
  var n = {};
  function t(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (t.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var i in e)
          t.d(
            r,
            i,
            function (n) {
              return e[n];
            }.bind(null, i)
          );
      return r;
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = ""),
    t((t.s = 0));
})([
  function (e, n, t) {
    "use strict";
    t.r(n),
      (window.$docsify = window.$docsify || {}),
      (window.$docsify.plugins = (window.$docsify.plugins || []).concat(
        function (e) {
          const n = /__[\w -|]+__/gm;
          e.beforeEach((e) =>
            e.replace(n, function (e, n) {
              const t = e.replace(/__/gi, "").split("|");
              let retArr = [];
              retArr.push(`<span  data-icon="${t[0]}" `);
              if (t[1] == "b") {
                retArr.push(`class="iconify iconify-block"`);
              } else {
                retArr.push(`class="iconify-inline"`);
              }
              if (t[2]) {
                retArr.push(`style="color: ${t[2]};"`);
              }
              if (t[3]) {
                retArr.push(`data-width="${t[3]}" data-height="${t[3]}"`);
              }
              if (t[4] == "v") {
                retArr.push(`data-flip="vertical"`);
              }
              retArr.push(`></span>`);
              return retArr.join(" ");
            })
          ),
            e.afterEach(function (e, t) {
              t(
                e.replace(n, function (e, n) {
                  const t = e.replace(/__/gi, "").split("|");
                  let retArr = [];
                  retArr.push(`<span  data-icon="${t[0]}"`);
                  if (t[1] == "b") {
                    retArr.push(`class="iconify iconify-block"`);
                  } else {
                    retArr.push(`class="iconify-inline"`);
                  }
                  if (t[2]) {
                    retArr.push(`style="color: ${t[2]};"`);
                  }
                  if (t[3]) {
                    retArr.push(`data-width="${t[3]}" data-height="${t[3]}"`);
                  }
                  if (t[4] == "v") {
                    retArr.push(`data-flip="vertical"`);
                  }
                  retArr.push(`></span>`);
                  return retArr.join(" ");
                })
              );
            });
        }
      ));
  },
]);

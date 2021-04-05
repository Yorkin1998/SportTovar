/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty,
        k = "".trim, l = {}, m = "1.11.0", n = function (a, b) {
            return new n.fn.init(a, b)
        }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return n.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === n.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return a - parseFloat(a) >= 0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        }, isPlainObject: function (a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (l.ownLast) for (b in a) return j.call(a, b);
            for (b in a) ;
            return void 0 === b || j.call(a, b)
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (b) {
            b && n.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++) if (d = b.apply(a[e], c), d === !1) break
                } else for (e in a) if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break
            } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        }, trim: k && !k.call("\ufeff\xa0") ? function (a) {
            return null == a ? "" : k.call(a)
        } : function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c
            }
            return -1
        }, merge: function (a, b) {
            var c = +b.length, d = 0, e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || n.guid++, e) : void 0
        }, now: function () {
            return +new Date
        }, support: l
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date, t = a.document, u = 0, v = 0,
            w = eb(), x = eb(), y = eb(), z = function (a, b) {
                return a === b && (j = !0), 0
            }, A = "undefined", B = 1 << 31, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice,
            I = D.indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", M = L.replace("w", "w#"),
            N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
            O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(O),
            U = new RegExp("^" + M + "$"), V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = /'|\\/g,
            ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), bb = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType
        } catch (cb) {
            G = {
                apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1
                }
            }
        }

        function db(a, b, d, e) {
            var f, g, h, i, j, m, p, q, u, v;
            if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (i = b.nodeType) && 9 !== i) return [];
            if (n && !e) {
                if (f = Z.exec(a)) if (h = f[1]) {
                    if (9 === i) {
                        if (g = b.getElementById(h), !g || !g.parentNode) return d;
                        if (g.id === h) return d.push(g), d
                    } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d
                } else {
                    if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                    if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d
                }
                if (c.qsa && (!o || !o.test(a))) {
                    if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                        m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length;
                        while (j--) m[j] = q + pb(m[j]);
                        u = $.test(a) && mb(b.parentNode) || b, v = m.join(",")
                    }
                    if (v) try {
                        return G.apply(d, u.querySelectorAll(v)), d
                    } catch (w) {
                    } finally {
                        p || b.removeAttribute("id")
                    }
                }
            }
            return xb(a.replace(P, "$1"), b, d, e)
        }

        function eb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function fb(a) {
            return a[s] = !0, a
        }

        function gb(a) {
            var b = l.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function hb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ib(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1
        }

        function jb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function kb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function lb(a) {
            return fb(function (b) {
                return b = +b, fb(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function mb(a) {
            return a && typeof a.getElementsByTagName !== A && a
        }

        c = db.support = {}, f = db.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, k = db.setDocument = function (a) {
            var b, e = a ? a.ownerDocument || a : t, g = e.defaultView;
            return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
                k()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
                k()
            })), c.attributes = gb(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = gb(function (a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function (a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = gb(function (a) {
                return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if (typeof b.getElementById !== A && n) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ab, bb);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ab, bb);
                return function (a) {
                    var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0
            }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function (a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked")
            }), gb(function (a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:")
            })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function (a) {
                c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O)
            }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1
            }, z = b ? function (a, b) {
                if (a === b) return j = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return j = !0, 0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], k = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;
                if (f === g) return ib(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) k.unshift(c);
                while (h[d] === k[d]) d++;
                return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
            }, e) : l
        }, db.matches = function (a, b) {
            return db(a, null, null, b)
        }, db.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try {
                var d = q.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {
            }
            return db(b, l, null, [a]).length > 0
        }, db.contains = function (a, b) {
            return (a.ownerDocument || a) !== l && k(a), r(a, b)
        }, db.attr = function (a, b) {
            (a.ownerDocument || a) !== l && k(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
            return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, db.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, db.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return i = null, a
        }, e = db.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else while (b = a[d++]) c += e(b);
            return c
        }, d = db.selectors = {
            cacheLength: 50,
            createPseudo: fb,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[5] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ab, bb).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = w[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = db.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), t = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && t) {
                                k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [u, n, m];
                                    break
                                }
                            } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);
                    return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = I.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: fb(function (a) {
                    var b = [], c = [], d = g(a.replace(P, "$1"));
                    return d[s] ? fb(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }), has: fb(function (a) {
                    return function (b) {
                        return db(a, b).length > 0
                    }
                }), contains: fb(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: fb(function (a) {
                    return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(), function (b) {
                        var c;
                        do if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === m
                }, focus: function (a) {
                    return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return X.test(a.nodeName)
                }, input: function (a) {
                    return W.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: lb(function () {
                    return [0]
                }), last: lb(function (a, b) {
                    return [b - 1]
                }), eq: lb(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: lb(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }), odd: lb(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }), lt: lb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }), gt: lb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) d.pseudos[b] = jb(b);
        for (b in {submit: !0, reset: !0}) d.pseudos[b] = kb(b);

        function nb() {
        }

        nb.prototype = d.filters = d.pseudos, d.setFilters = new nb;

        function ob(a, b) {
            var c, e, f, g, h, i, j, k = x[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? db.error(a) : x(a, i).slice(0)
        }

        function pb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function qb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = v++;
            return b.first ? function (b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [u, f];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0
                }
            }
        }

        function rb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function sb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function tb(a, b, c, d, e, f) {
            return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || wb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : sb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = sb(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ub(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function (a) {
                return a === b
            }, i, !0), l = qb(function (a) {
                return I.call(b, a) > -1
            }, i, !0), m = [function (a, c, d) {
                return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }]; f > j; j++) if (c = d.relative[a[j].type]) m = [qb(rb(m), c)]; else {
                if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
                    for (e = ++j; f > e; e++) if (d.relative[a[e].type]) break;
                    return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({value: " " === a[j - 2].type ? "*" : ""})).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a))
                }
                m.push(c)
            }
            return rb(m)
        }

        function vb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, i, j, k) {
                var m, n, o, p = 0, q = "0", r = f && [], s = [], t = h, v = f || e && d.find.TAG("*", k),
                    w = u += null == t ? 1 : Math.random() || .1, x = v.length;
                for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
                    if (e && m) {
                        n = 0;
                        while (o = a[n++]) if (o(m, g, i)) {
                            j.push(m);
                            break
                        }
                        k && (u = w)
                    }
                    c && ((m = !o && m) && p--, f && r.push(m))
                }
                if (p += q, c && q !== p) {
                    n = 0;
                    while (o = b[n++]) o(r, s, g, i);
                    if (f) {
                        if (p > 0) while (q--) r[q] || s[q] || (s[q] = E.call(j));
                        s = sb(s)
                    }
                    G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j)
                }
                return k && (u = w, h = t), r
            };
            return c ? fb(f) : f
        }

        g = db.compile = function (a, b) {
            var c, d = [], e = [], f = y[a + " "];
            if (!f) {
                b || (b = ob(a)), c = b.length;
                while (c--) f = ub(b[c]), f[s] ? d.push(f) : e.push(f);
                f = y(a, vb(e, d))
            }
            return f
        };

        function wb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) db(a, b[d], c);
            return c
        }

        function xb(a, b, e, f) {
            var h, i, j, k, l, m = ob(a);
            if (!f && 1 === m.length) {
                if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e;
                    a = a.slice(i.shift().value.length)
                }
                h = V.needsContext.test(a) ? 0 : i.length;
                while (h--) {
                    if (j = i[h], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
                        if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e;
                        break
                    }
                }
            }
            return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e
        }

        return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function (a) {
            return 1 & a.compareDocumentPosition(l.createElement("div"))
        }), gb(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || hb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && gb(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || hb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), gb(function (a) {
            return null == a.getAttribute("disabled")
        }) || hb(J, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), db
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return n.inArray(a, b) >= 0 !== c
        })
    }

    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        }, filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        }, is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = a.document, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, B = n.fn.init = function (a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = z.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2]) return y.find(a);
                this.length = 1, this[0] = d
            }
            return this.context = z, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    B.prototype = n.fn, y = n(z);
    var C = /^(?:parents|prev(?:Until|All))/, D = {children: !0, contents: !0, next: !0, prev: !0};
    n.extend({
        dir: function (a, b, c) {
            var d = [], e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b, c = n(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function E(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return n.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        }, next: function (a) {
            return E(a, "nextSibling")
        }, prev: function (a) {
            return E(a, "previousSibling")
        }, nextAll: function (a) {
            return n.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return n.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return n.sibling(a.firstChild)
        }, contents: function (a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var F = /\S+/g, G = {};

    function H(a) {
        var b = G[a] = {};
        return n.each(a.match(F) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    n.Callbacks = function (a) {
        a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break
            }
            b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        n.each(b, function (b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments), b ? e = h.length : c && (g = d, j(c))
                }
                return this
            }, remove: function () {
                return h && n.each(arguments, function (a, c) {
                    var d;
                    while ((d = n.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                }), this
            }, has: function (a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], e = 0, this
            }, disable: function () {
                return h = i = c = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, c || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, c) {
                return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!d
            }
        };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                }, i, j, k;
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            if (a === !0 ? !--n.readyWait : !n.isReady) {
                if (!z.body) return setTimeout(n.ready);
                n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready"))
            }
        }
    });

    function J() {
        z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready())
    }

    n.ready.promise = function (b) {
        if (!I) if (I = n.Deferred(), "complete" === z.readyState) setTimeout(n.ready); else if (z.addEventListener) z.addEventListener("DOMContentLoaded", K, !1), a.addEventListener("load", K, !1); else {
            z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && z.documentElement
            } catch (d) {
            }
            c && c.doScroll && !function e() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    };
    var L = "undefined", M;
    for (M in n(l)) break;
    l.ownLast = "0" !== M, l.inlineBlockNeedsLayout = !1, n(function () {
        var a, b, c = z.getElementsByTagName("body")[0];
        c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
    }), function () {
        var a = z.createElement("div");
        if (null == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
        }
        a = null
    }(), n.acceptData = function (a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {
                }
                n.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a) if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (n.acceptData(a)) {
            var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {toJSON: n.noop}), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (n.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? n.cache : a, h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }
                (c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }

    n.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
        },
        data: function (a, b, c) {
            return R(a, b, c)
        },
        removeData: function (a, b) {
            return S(a, b)
        },
        _data: function (a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return S(a, b, !0)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d]));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        }, removeData: function (a) {
            return this.each(function () {
                n.removeData(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function () {
                    n._removeData(a, b + "queue"), n._removeData(a, c)
                })
            })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, U = ["Top", "Right", "Bottom", "Left"], V = function (a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }, W = n.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(n(a), c)
        })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, X = /^(?:checkbox|radio)$/i;
    !function () {
        var a = z.createDocumentFragment(), b = z.createElement("div"), c = z.createElement("input");
        if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !!b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
            l.noCloneEvent = !1
        }), b.cloneNode(!0).click()), null == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                l.deleteExpando = !1
            }
        }
        a = b = c = null
    }(), function () {
        var b, c, d = z.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + b, (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var Y = /^(?:input|select|textarea)$/i, Z = /^key/, $ = /^(?:mouse|contextmenu)|click/,
        _ = /^(?:focusinfocus|focusoutblur)$/, ab = /^([^.]*)(?:\.(.+)|)$/;

    function bb() {
        return !0
    }

    function cb() {
        return !1
    }

    function db() {
        try {
            return z.activeElement
        } catch (a) {
        }
    }

    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(F) || [""], h = b.length;
                while (h--) f = ab.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(F) || [""], j = b.length;
                while (j--) if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                    while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, l, m, o = [d || z], p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !n.isWindow(d)) {
                    for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a)
                }
                m = 0;
                while ((h = o[m++]) && !b.isPropagationStopped()) b.type = m > 1 ? i : k.bindType || p, f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) {
                    l = d[g], l && (d[g] = null), n.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {
                    }
                    n.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length), e[c] && e.push(d);
                e.length && g.push({elem: i, handlers: e})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== db() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === db() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = z.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb : cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: cb,
        isPropagationStopped: cb,
        isImmediatePropagationStopped: cb,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = bb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = bb, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = bb, this.stopPropagation()
        }
    }, n.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        n.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submitBubbles || (n.event.special.submit = {
        setup: function () {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target, c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form : void 0;
                c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), n._data(c, "submitBubbles", !0))
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.changeBubbles || (n.event.special.change = {
        setup: function () {
            return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), n.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, a, !0)
            })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0)
                }), n._data(b, "changeBubbles", !0))
            })
        }, handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return n.event.remove(this, "._change"), !Y.test(this.nodeName)
        }
    }), l.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = cb; else if (!d) return this;
            return 1 === e && (g = d, d = function (a) {
                return n().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = cb), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });

    function eb(a) {
        var b = fb.split("|"), c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }

    var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gb = / jQuery\d+="(?:null|\d+)"/g, hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"), ib = /^\s+/,
        jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, kb = /<([\w:]+)/,
        lb = /<tbody/i, mb = /<|&#?\w+;/, nb = /<(?:script|style|link)/i, ob = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pb = /^$|\/(?:java|ecma)script/i, qb = /^true\/(.*)/, rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, sb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, tb = eb(z), ub = tb.appendChild(z.createElement("div"));
    sb.optgroup = sb.option, sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead, sb.th = sb.td;

    function vb(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0;
        if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function wb(a) {
        X.test(a.type) && (a.defaultChecked = a.checked)
    }

    function xb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function yb(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function zb(a) {
        var b = qb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ab(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }

    function Bb(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Cb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g) d[g] && Cb(e, d[g]);
            if (b) if (c) for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++) Bb(e, d[g]); else Bb(a, f);
            return d = vb(f, "script"), d.length > 0 && Ab(d, !i && vb(a, "script")), d = h = e = null, f
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0; m > q; q++) if (f = a[q], f || 0 === f) if ("object" === n.type(f)) n.merge(p, f.nodeType ? [f] : f); else if (mb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (kb.exec(f) || ["", ""])[1].toLowerCase(), k = sb[i] || sb._default, h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2], e = k[0];
                while (e--) h = h.lastChild;
                if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody) {
                    f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                n.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), l.appendChecked || n.grep(vb(p, "input"), wb), q = 0;
            while (f = p[q++]) if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c)) {
                e = 0;
                while (f = h[e++]) pb.test(f.type || "") && c.push(f)
            }
            return h = null, o
        }, cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.deleteExpando, m = n.event.special; null != (d = a[h]); h++) if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) {
                if (g.events) for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f))
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return W(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a))
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(vb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(vb(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return W(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0;
                if (!("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(jb, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(vb(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, k = this.length, m = this, o = k - 1, p = a[0], q = n.isFunction(p);
            if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)) return this.each(function (c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++) d = i, j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))), b.call(this[j], d, j);
                if (f) for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++) d = g[j], pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, "")));
                i = c = null
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Db, Eb = {};

    function Fb(b, c) {
        var d = n(c.createElement(b)).appendTo(c.body),
            e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : n.css(d[0], "display");
        return d.detach(), e
    }

    function Gb(a) {
        var b = z, c = Eb[a];
        return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c), c
    }

    !function () {
        var a, b, c = z.createElement("div"),
            d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(a.style.opacity), l.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, l.shrinkWrapBlocks = function () {
            var a, c, e, f;
            if (null == b) {
                if (a = z.getElementsByTagName("body")[0], !a) return;
                f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = z.createElement("div"), e = z.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
            }
            return b
        }
    }();
    var Hb = /^margin/, Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"), Jb, Kb, Lb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Jb = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Kb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : z.documentElement.currentStyle && (Jb = function (a) {
        return a.currentStyle
    }, Kb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Mb(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d, e, f, g, h = z.createElement("div"),
            i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            j = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = h.getElementsByTagName("a")[0], b.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(b.style.opacity), l.cssFloat = !!b.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, b = h = null, n.extend(l, {
            reliableHiddenOffsets: function () {
                if (null != c) return c;
                var a, b, d, e = z.createElement("div"), f = z.getElementsByTagName("body")[0];
                if (f) return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = i, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = d && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, c
            }, boxSizing: function () {
                return null == d && k(), d
            }, boxSizingReliable: function () {
                return null == e && k(), e
            }, pixelPosition: function () {
                return null == f && k(), f
            }, reliableMarginRight: function () {
                var b, c, d, e;
                if (null == g && a.getComputedStyle) {
                    if (b = z.getElementsByTagName("body")[0], !b) return;
                    c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = i, b.appendChild(c).appendChild(d), e = d.appendChild(z.createElement("div")), e.style.cssText = d.style.cssText = j, e.style.marginRight = e.style.width = "0", d.style.width = "1px", g = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
                }
                return g
            }
        });

        function k() {
            var b, c, h = z.getElementsByTagName("body")[0];
            h && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = i, h.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(h, null != h.style.zoom ? {zoom: 1} : {}, function () {
                d = 4 === c.offsetWidth
            }), e = !0, f = !1, g = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || {width: "4px"}).width), h.removeChild(b), c = h = null)
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Nb = /alpha\([^)]*\)/i, Ob = /opacity\s*=\s*([^)]*)/, Pb = /^(none|table(?!-c[ea]).+)/,
        Qb = new RegExp("^(" + T + ")(.*)$", "i"), Rb = new RegExp("^([+-])=(" + T + ")", "i"),
        Sb = {position: "absolute", visibility: "hidden", display: "block"}, Tb = {letterSpacing: 0, fontWeight: 400},
        Ub = ["Webkit", "O", "Moz", "ms"];

    function Vb(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ub.length;
        while (e--) if (b = Ub[e] + c, b in a) return b;
        return d
    }

    function Wb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Xb(a, b, c) {
        var d = Qb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Yb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Zb(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Jb(a),
            g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Kb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": l.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = "", i[b] = c
                } catch (j) {
                }
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Kb(a, b, d)), "normal" === f && b in Tb && (f = Tb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb, function () {
                    return Zb(a, b, d)
                }) : Zb(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && Jb(a);
                return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function (a, b) {
            return Ob.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Mb(l.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {display: "inline-block"}, Kb, [a, "marginRight"]) : void 0
    }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Hb.test(a) || (n.cssHooks[a + b].set = Xb)
    }), n.fn.extend({
        css: function (a, b) {
            return W(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Jb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Wb(this, !0)
        }, hide: function () {
            return Wb(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function $b(a, b, c, d, e) {
        return new $b.prototype.init(a, b, c, d, e)
    }

    n.Tween = $b, $b.prototype = {
        constructor: $b, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = $b.propHooks[this.prop];
            return a && a.get ? a.get(this) : $b.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = $b.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $b.propHooks._default.set(this), this
        }
    }, $b.prototype.init.prototype = $b.prototype, $b.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, $b.propHooks.scrollTop = $b.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = $b.prototype.init, n.fx.step = {};
    var _b, ac, bc = /^(?:toggle|show|hide)$/, cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        dc = /queueHooks$/, ec = [jc], fc = {
            "*": [function (a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = cc.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function gc() {
        return setTimeout(function () {
            _b = void 0
        }), _b = n.now()
    }

    function hc(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function ic(a, b, c) {
        for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }

    function jc(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && V(a), r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, m.always(function () {
            m.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], bc.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                if ("show" !== e || !r || void 0 === r[d]) continue;
                q = !0
            }
            o[d] = r && r[d] || n.style(a, d)
        }
        if (!n.isEmptyObject(o)) {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
                n(a).hide()
            }), m.done(function () {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = ic(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function kc(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function lc(a, b, c) {
        var d, e, f = 0, g = ec.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e) return !1;
            for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: _b || gc(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (kc(k, j.opts.specialEasing); g > f; f++) if (d = ec[f].call(j, a, k, j.opts)) return d;
        return n.map(k, ic, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    n.Animation = n.extend(lc, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], fc[c] = fc[c] || [], fc[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? ec.unshift(a) : ec.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = lc(this, n.extend({}, a), f);
                (e || n._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = n._data(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && dc.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: hc("show"),
        slideUp: hc("hide"),
        slideToggle: hc("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = n.timers, c = 0;
        for (_b = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(), _b = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        ac || (ac = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        clearInterval(ac), ac = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a, b, c, d, e = z.createElement("div");
        e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = z.createElement("select"), d = c.appendChild(z.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== e.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = d.selected, l.enctype = !!z.createElement("form").enctype, c.disabled = !0, l.optDisabled = !d.disabled, b = z.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value, a = b = c = d = e = null
    }();
    var mc = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.text(a)
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--) if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try {
                        d.selected = c = !0
                    } catch (h) {
                        d.scrollHeight
                    } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var nc, oc, pc = n.expr.attrHandle, qc = /^(?:checked|selected)$/i, rc = l.getSetAttribute, sc = l.input;
    n.fn.extend({
        attr: function (a, b) {
            return W(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(F);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(rc ? c : d)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), oc = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = pc[b] || n.find.attr;
        pc[b] = sc && rc || !qc.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f), e
        } : function (a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), sc && rc || (n.attrHooks.value = {
        set: function (a, b, c) {
            return n.nodeName(a, "input") ? void (a.defaultValue = b) : nc && nc.set(a, b, c)
        }
    }), rc || (nc = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, pc.id = pc.name = pc.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        }, set: nc.set
    }, n.attrHooks.contenteditable = {
        set: function (a, b, c) {
            nc.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function (a, b) {
        n.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        }, set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var tc = /^(?:input|select|textarea|button|object)$/i, uc = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return W(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return a = n.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {
                }
            })
        }
    }), n.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
        n.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var vc = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (j) for (b = (a || "").match(F) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) {
                f = 0;
                while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (j) for (b = (a || "").match(F) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) {
                f = 0;
                while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(F) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else (c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : n._data(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var wc = n.now(), xc = /\?/,
        yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null, e = n.trim(b + "");
        return e && !n.trim(e.replace(yc, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var zc, Ac, Bc = /#.*$/, Cc = /([?&])_=[^&]*/, Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Fc = /^(?:GET|HEAD)$/, Gc = /^\/\//,
        Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ic = {}, Jc = {}, Kc = "*/".concat("*");
    try {
        Ac = location.href
    } catch (Lc) {
        Ac = z.createElement("a"), Ac.href = "", Ac = Ac.href
    }
    zc = Hc.exec(Ac.toLowerCase()) || [];

    function Mc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(F) || [];
            if (n.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Nc(a, b, c, d) {
        var e = {}, f = a === Jc;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Oc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Pc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e) for (g in h) if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Qc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ac,
            type: "GET",
            isLocal: Ec.test(zc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a)
        },
        ajaxPrefilter: Mc(Ic),
        ajaxTransport: Mc(Jc),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(),
                p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Dc.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === t ? f : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    }, overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                        return this
                    }, abort: function (a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (zc[3] || ("http:" === zc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fc.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)), k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {success: 1, error: 1, complete: 1}) v[d](k[d]);
            if (i = Nc(Jc, k, b, v)) {
                v.readyState = 1, h && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, n.fn.extend({
        wrapAll: function (a) {
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b))
            } : function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display"))
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var Rc = /%20/g, Sc = /\[\]$/, Tc = /\r?\n/g, Uc = /^(?:submit|button|image|reset|file)$/i,
        Vc = /^(?:input|select|textarea|keygen)/i;

    function Wc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Wc(a + "[" + e + "]", b[e], c, d)
    }

    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a) Wc(c, a[c], b, e);
        return d.join("&").replace(Rc, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {name: b.name, value: a.replace(Tc, "\r\n")}
                }) : {name: b.name, value: c.replace(Tc, "\r\n")}
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c()
    } : $c;
    var Xc = 0, Yc = {}, Zc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function () {
        for (var a in Yc) Yc[a](void 0, !0)
    }), l.cors = !!Zc && "withCredentials" in Zc, Zc = l.ajax = !!Zc, Zc && n.ajaxTransport(function (a) {
        if (!a.crossDomain || l.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(), g = ++Xc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState)) if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e) 4 !== f.readyState && f.abort(); else {
                            j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                            try {
                                i = f.statusText
                            } catch (k) {
                                i = ""
                            }
                            h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                        }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b()
                }, abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function $c() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function _c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = z.head || n("head")[0] || z.documentElement;
            return {
                send: function (d, e) {
                    b = z.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                }, abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ad = [], bd = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = ad.pop() || n.expando + "_" + wc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || z;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var cd = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && cd) return cd.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var dd = a.document.documentElement;

    function ed(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        }, position: function () {
            if (this[0]) {
                var a, b, c = {top: 0, left: 0}, d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || dd;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || dd
            })
        }
    }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function (d) {
            return W(this, function (a, d, e) {
                var f = ed(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = Mb(l.pixelPosition, function (a, c) {
            return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({Height: "height", Width: "width"}, function (a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return W(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var fd = a.jQuery, gd = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = gd), b && a.jQuery === n && (a.jQuery = fd), n
    }, typeof b === L && (a.jQuery = a.$ = n), n
});

jQuery.browser = {};
jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit    /.test(navigator.userAgent.toLowerCase());
jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
;(function ($) {

    var AutocompleterDefaults = {
        appendToElement: document.body,
        onSuccess: null,
        delay: 400,
        max: 100,
        minChars: 1,
    };

    $.fn.extend({
        autocomplete: function (urlOrData, options) {
            options = $.extend({}, AutocompleterDefaults, options);
            new $.Autocompleter(this, options);
        }
    });


    $.Autocompleter = function (input, options) {

        var KEY = {
            UP: 38,
            DOWN: 40,
            DEL: 46,
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            COMMA: 188,
            PAGEUP: 33,
            PAGEDOWN: 34,
            BACKSPACE: 8
        };

        var timeout;

        var $input = $(input).attr("autocomplete", "off");

        var currentSearchstring;


        $input.keyup(onKeyupHandler);
        $input.on("input", onInputHandler);

        function onInputHandler(e) {
            var currentValue = $.trim($input.val());

            switch (currentValue) {
                case "":
                    reset();
                    break;
                default:
                    if (currentSearchstring !== currentValue) {
                        $("#searchResultLoader").show();
                        clearTimeout(timeout);
                        timeout = setTimeout(triggerAutocomplete, options.delay);
                    }
            }
        }

        function onKeyupHandler(e) {
            switch (e.which) {
                case KEY.ESC:
                    reset();
                    break;
                default:
                    onInputHandler();
            }
        }

        function reset() {
            $(this).val("");
            options.appendToElement.html("");
            return;
        }


        function triggerAutocomplete() {
            currentSearchstring = $.trim($input.val());

            if (!currentSearchstring) {
                options.appendToElement.html("");
                return;
            }

            var url = options.url;//'http://'+ shop_host +'/'+ currentLang +'/renderSecureComponent/search/autocomplete';

            //jsonp call
            $.ajax({
                type: "GET",
                url: url,
                data: {
                    q: currentSearchstring,
                    limit: options.max
                },
                dataType: 'jsonp',
                jsonp: 'jsonp',
                crossDomain: true,
                success: function (response) {
                    options.appendToElement.html("");
                    options.appendToElement.append(response.html);
                    if (typeof options.onSuccess == 'function') {
                        options.onSuccess(response);
                    }
                }
            });

        }

    }

})(jQuery);/*!
 * jQuery Form Plugin
 * version: 3.50.0-2014.02.05
 * Requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */

// AMD support
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // using AMD; register as anon module
        define(['jquery'], factory);
    } else {
        // no AMD; invoke directly
        factory((typeof (jQuery) != 'undefined') ? jQuery : window.Zepto);
    }
}

(function ($) {
    "use strict";

    /*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

    /**
     * Feature detection
     */
    var feature = {};
    feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
    feature.formdata = window.FormData !== undefined;

    var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
    $.fn.attr2 = function () {
        if (!hasProp) {
            return this.attr.apply(this, arguments);
        }
        var val = this.prop.apply(this, arguments);
        if ((val && val.jquery) || typeof val === 'string') {
            return val;
        }
        return this.attr.apply(this, arguments);
    };

    /**
     * ajaxSubmit() provides a mechanism for immediately submitting
     * an HTML form using AJAX.
     */
    $.fn.ajaxSubmit = function (options) {
        /*jshint scripturl:true */

        // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
        if (!this.length) {
            log('ajaxSubmit: skipping submit process - no element selected');
            return this;
        }

        var method, action, url, $form = this;

        if (typeof options == 'function') {
            options = {success: options};
        } else if (options === undefined) {
            options = {};
        }

        method = options.type || this.attr2('method');
        action = options.url || this.attr2('action');

        url = (typeof action === 'string') ? $.trim(action) : '';
        url = url || window.location.href || '';
        if (url) {
            // clean url (don't include hash vaue)
            url = (url.match(/^([^#]+)/) || [])[1];
        }

        options = $.extend(true, {
            url: url,
            success: $.ajaxSettings.success,
            type: method || $.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
        }, options);

        // hook for manipulating the form data before it is extracted;
        // convenient for use with rich editors like tinyMCE or FCKEditor
        var veto = {};
        this.trigger('form-pre-serialize', [this, options, veto]);
        if (veto.veto) {
            log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
            return this;
        }

        // provide opportunity to alter form data before it is serialized
        if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
            log('ajaxSubmit: submit aborted via beforeSerialize callback');
            return this;
        }

        var traditional = options.traditional;
        if (traditional === undefined) {
            traditional = $.ajaxSettings.traditional;
        }

        var elements = [];
        var qx, a = this.formToArray(options.semantic, elements);
        if (options.data) {
            options.extraData = options.data;
            qx = $.param(options.data, traditional);
        }

        // give pre-submit callback an opportunity to abort the submit
        if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
            log('ajaxSubmit: submit aborted via beforeSubmit callback');
            return this;
        }

        // fire vetoable 'validate' event
        this.trigger('form-submit-validate', [a, this, options, veto]);
        if (veto.veto) {
            log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
            return this;
        }

        var q = $.param(a, traditional);
        if (qx) {
            q = (q ? (q + '&' + qx) : qx);
        }
        if (options.type.toUpperCase() == 'GET') {
            options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
            options.data = null;  // data is null for 'get'
        } else {
            options.data = q; // data is the query string for 'post'
        }

        var callbacks = [];
        if (options.resetForm) {
            callbacks.push(function () {
                $form.resetForm();
            });
        }
        if (options.clearForm) {
            callbacks.push(function () {
                $form.clearForm(options.includeHidden);
            });
        }

        // perform a load on the target only if dataType is not provided
        if (!options.dataType && options.target) {
            var oldSuccess = options.success || function () {
            };
            callbacks.push(function (data) {
                var fn = options.replaceTarget ? 'replaceWith' : 'html';
                $(options.target)[fn](data).each(oldSuccess, arguments);
            });
        } else if (options.success) {
            callbacks.push(options.success);
        }

        options.success = function (data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
            var context = options.context || this;    // jQuery 1.4+ supports scope context
            for (var i = 0, max = callbacks.length; i < max; i++) {
                callbacks[i].apply(context, [data, status, xhr || $form, $form]);
            }
        };

        if (options.error) {
            var oldError = options.error;
            options.error = function (xhr, status, error) {
                var context = options.context || this;
                oldError.apply(context, [xhr, status, error, $form]);
            };
        }

        if (options.complete) {
            var oldComplete = options.complete;
            options.complete = function (xhr, status) {
                var context = options.context || this;
                oldComplete.apply(context, [xhr, status, $form]);
            };
        }

        // are there files to upload?

        // [value] (issue #113), also see comment:
        // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
        var fileInputs = $('input[type=file]:enabled', this).filter(function () {
            return $(this).val() !== '';
        });

        var hasFileInputs = fileInputs.length > 0;
        var mp = 'multipart/form-data';
        var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

        var fileAPI = feature.fileapi && feature.formdata;
        log("fileAPI :" + fileAPI);
        var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

        var jqxhr;

        // options.iframe allows user to force iframe mode
        // 06-NOV-09: now defaulting to iframe mode if file input is detected
        if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
            // hack to fix Safari hang (thanks to Tim Molendijk for this)
            // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
            if (options.closeKeepAlive) {
                $.get(options.closeKeepAlive, function () {
                    jqxhr = fileUploadIframe(a);
                });
            } else {
                jqxhr = fileUploadIframe(a);
            }
        } else if ((hasFileInputs || multipart) && fileAPI) {
            jqxhr = fileUploadXhr(a);
        } else {
            jqxhr = $.ajax(options);
        }

        $form.removeData('jqxhr').data('jqxhr', jqxhr);

        // clear element array
        for (var k = 0; k < elements.length; k++) {
            elements[k] = null;
        }

        // fire 'notify' event
        this.trigger('form-submit-notify', [this, options]);
        return this;

        // utility fn for deep serialization
        function deepSerialize(extraData) {
            var serialized = $.param(extraData, options.traditional).split('&');
            var len = serialized.length;
            var result = [];
            var i, part;
            for (i = 0; i < len; i++) {
                // #252; undo param space replacement
                serialized[i] = serialized[i].replace(/\+/g, ' ');
                part = serialized[i].split('=');
                // #278; use array instead of object storage, favoring array serializations
                result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
            }
            return result;
        }

        // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
        function fileUploadXhr(a) {
            var formdata = new FormData();

            for (var i = 0; i < a.length; i++) {
                formdata.append(a[i].name, a[i].value);
            }

            if (options.extraData) {
                var serializedData = deepSerialize(options.extraData);
                for (i = 0; i < serializedData.length; i++) {
                    if (serializedData[i]) {
                        formdata.append(serializedData[i][0], serializedData[i][1]);
                    }
                }
            }

            options.data = null;

            var s = $.extend(true, {}, $.ajaxSettings, options, {
                contentType: false,
                processData: false,
                cache: false,
                type: method || 'POST'
            });

            if (options.uploadProgress) {
                // workaround because jqXHR does not expose upload property
                s.xhr = function () {
                    var xhr = $.ajaxSettings.xhr();
                    if (xhr.upload) {
                        xhr.upload.addEventListener('progress', function (event) {
                            var percent = 0;
                            var position = event.loaded || event.position; /*event.position is deprecated*/
                            var total = event.total;
                            if (event.lengthComputable) {
                                percent = Math.ceil(position / total * 100);
                            }
                            options.uploadProgress(event, position, total, percent);
                        }, false);
                    }
                    return xhr;
                };
            }

            s.data = null;
            var beforeSend = s.beforeSend;
            s.beforeSend = function (xhr, o) {
                //Send FormData() provided by user
                if (options.formData) {
                    o.data = options.formData;
                } else {
                    o.data = formdata;
                }
                if (beforeSend) {
                    beforeSend.call(this, xhr, o);
                }
            };
            return $.ajax(s);
        }

        // private function for handling file uploads (hat tip to YAHOO!)
        function fileUploadIframe(a) {
            var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
            var deferred = $.Deferred();

            // #341
            deferred.abort = function (status) {
                xhr.abort(status);
            };

            if (a) {
                // ensure that every serialized input is still enabled
                for (i = 0; i < elements.length; i++) {
                    el = $(elements[i]);
                    if (hasProp) {
                        el.prop('disabled', false);
                    } else {
                        el.removeAttr('disabled');
                    }
                }
            }

            s = $.extend(true, {}, $.ajaxSettings, options);
            s.context = s.context || s;
            id = 'jqFormIO' + (new Date().getTime());
            if (s.iframeTarget) {
                $io = $(s.iframeTarget);
                n = $io.attr2('name');
                if (!n) {
                    $io.attr2('name', id);
                } else {
                    id = n;
                }
            } else {
                $io = $('<iframe name="' + id + '" src="' + s.iframeSrc + '" />');
                $io.css({position: 'absolute', top: '-1000px', left: '-1000px'});
            }
            io = $io[0];


            xhr = { // mock object
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: 'n/a',
                getAllResponseHeaders: function () {
                },
                getResponseHeader: function () {
                },
                setRequestHeader: function () {
                },
                abort: function (status) {
                    var e = (status === 'timeout' ? 'timeout' : 'aborted');
                    log('aborting upload... ' + e);
                    this.aborted = 1;

                    try { // #214, #257
                        if (io.contentWindow.document.execCommand) {
                            io.contentWindow.document.execCommand('Stop');
                        }
                    } catch (ignore) {
                    }

                    $io.attr('src', s.iframeSrc); // abort op in progress
                    xhr.error = e;
                    if (s.error) {
                        s.error.call(s.context, xhr, e, status);
                    }
                    if (g) {
                        $.event.trigger("ajaxError", [xhr, s, e]);
                    }
                    if (s.complete) {
                        s.complete.call(s.context, xhr, e);
                    }
                }
            };

            g = s.global;
            // trigger ajax global events so that activity/block indicators work like normal
            if (g && 0 === $.active++) {
                $.event.trigger("ajaxStart");
            }
            if (g) {
                $.event.trigger("ajaxSend", [xhr, s]);
            }

            if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
                if (s.global) {
                    $.active--;
                }
                deferred.reject();
                return deferred;
            }
            if (xhr.aborted) {
                deferred.reject();
                return deferred;
            }

            // add submitting element to data if we know it
            sub = form.clk;
            if (sub) {
                n = sub.name;
                if (n && !sub.disabled) {
                    s.extraData = s.extraData || {};
                    s.extraData[n] = sub.value;
                    if (sub.type == "image") {
                        s.extraData[n + '.x'] = form.clk_x;
                        s.extraData[n + '.y'] = form.clk_y;
                    }
                }
            }

            var CLIENT_TIMEOUT_ABORT = 1;
            var SERVER_ABORT = 2;

            function getDoc(frame) {
                /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */

                var doc = null;

                // IE8 cascading access check
                try {
                    if (frame.contentWindow) {
                        doc = frame.contentWindow.document;
                    }
                } catch (err) {
                    // IE8 access denied under ssl & missing protocol
                    log('cannot get iframe.contentWindow document: ' + err);
                }

                if (doc) { // successful getting content
                    return doc;
                }

                try { // simply checking may throw in ie8 under ssl or mismatched protocol
                    doc = frame.contentDocument ? frame.contentDocument : frame.document;
                } catch (err) {
                    // last attempt
                    log('cannot get iframe.contentDocument: ' + err);
                    doc = frame.document;
                }
                return doc;
            }

            // Rails CSRF hack (thanks to Yvan Barthelemy)
            var csrf_token = $('meta[name=csrf-token]').attr('content');
            var csrf_param = $('meta[name=csrf-param]').attr('content');
            if (csrf_param && csrf_token) {
                s.extraData = s.extraData || {};
                s.extraData[csrf_param] = csrf_token;
            }

            // take a breath so that pending repaints get some cpu time before the upload starts
            function doSubmit() {
                // make sure form attrs are set
                var t = $form.attr2('target'),
                    a = $form.attr2('action'),
                    mp = 'multipart/form-data',
                    et = $form.attr('enctype') || $form.attr('encoding') || mp;

                // update form attrs in IE friendly way
                form.setAttribute('target', id);
                if (!method || /post/i.test(method)) {
                    form.setAttribute('method', 'POST');
                }
                if (a != s.url) {
                    form.setAttribute('action', s.url);
                }

                // ie borks in some cases when setting encoding
                if (!s.skipEncodingOverride && (!method || /post/i.test(method))) {
                    $form.attr({
                        encoding: 'multipart/form-data',
                        enctype: 'multipart/form-data'
                    });
                }

                // support timout
                if (s.timeout) {
                    timeoutHandle = setTimeout(function () {
                        timedOut = true;
                        cb(CLIENT_TIMEOUT_ABORT);
                    }, s.timeout);
                }

                // look for server aborts
                function checkState() {
                    try {
                        var state = getDoc(io).readyState;
                        log('state = ' + state);
                        if (state && state.toLowerCase() == 'uninitialized') {
                            setTimeout(checkState, 50);
                        }
                    } catch (e) {
                        log('Server abort: ', e, ' (', e.name, ')');
                        cb(SERVER_ABORT);
                        if (timeoutHandle) {
                            clearTimeout(timeoutHandle);
                        }
                        timeoutHandle = undefined;
                    }
                }

                // add "extra" data to form if provided in options
                var extraInputs = [];
                try {
                    if (s.extraData) {
                        for (var n in s.extraData) {
                            if (s.extraData.hasOwnProperty(n)) {
                                // if using the $.param format that allows for multiple values with the same name
                                if ($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                                    extraInputs.push(
                                        $('<input type="hidden" name="' + s.extraData[n].name + '">').val(s.extraData[n].value)
                                            .appendTo(form)[0]);
                                } else {
                                    extraInputs.push(
                                        $('<input type="hidden" name="' + n + '">').val(s.extraData[n])
                                            .appendTo(form)[0]);
                                }
                            }
                        }
                    }

                    if (!s.iframeTarget) {
                        // add iframe to doc and submit the form
                        $io.appendTo('body');
                    }
                    if (io.attachEvent) {
                        io.attachEvent('onload', cb);
                    } else {
                        io.addEventListener('load', cb, false);
                    }
                    setTimeout(checkState, 15);

                    try {
                        form.submit();
                    } catch (err) {
                        // just in case form has element with name/id of 'submit'
                        var submitFn = document.createElement('form').submit;
                        submitFn.apply(form);
                    }
                } finally {
                    // reset attrs and remove "extra" input elements
                    form.setAttribute('action', a);
                    form.setAttribute('enctype', et); // #380
                    if (t) {
                        form.setAttribute('target', t);
                    } else {
                        $form.removeAttr('target');
                    }
                    $(extraInputs).remove();
                }
            }

            if (s.forceSync) {
                doSubmit();
            } else {
                setTimeout(doSubmit, 10); // this lets dom updates render
            }

            var data, doc, domCheckCount = 50, callbackProcessed;

            function cb(e) {
                if (xhr.aborted || callbackProcessed) {
                    return;
                }

                doc = getDoc(io);
                if (!doc) {
                    log('cannot access response document');
                    e = SERVER_ABORT;
                }
                if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                    xhr.abort('timeout');
                    deferred.reject(xhr, 'timeout');
                    return;
                } else if (e == SERVER_ABORT && xhr) {
                    xhr.abort('server abort');
                    deferred.reject(xhr, 'error', 'server abort');
                    return;
                }

                if (!doc || doc.location.href == s.iframeSrc) {
                    // response not received yet
                    if (!timedOut) {
                        return;
                    }
                }
                if (io.detachEvent) {
                    io.detachEvent('onload', cb);
                } else {
                    io.removeEventListener('load', cb, false);
                }

                var status = 'success', errMsg;
                try {
                    if (timedOut) {
                        throw 'timeout';
                    }

                    var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                    log('isXml=' + isXml);
                    if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                        if (--domCheckCount) {
                            // in some browsers (Opera) the iframe DOM is not always traversable when
                            // the onload callback fires, so we loop a bit to accommodate
                            log('requeing onLoad callback, DOM not available');
                            setTimeout(cb, 250);
                            return;
                        }
                        // let this fall through because server response could be an empty document
                        //log('Could not access iframe DOM after mutiple tries.');
                        //throw 'DOMException: not available';
                    }

                    //log('response detected');
                    var docRoot = doc.body ? doc.body : doc.documentElement;
                    xhr.responseText = docRoot ? docRoot.innerHTML : null;
                    xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                    if (isXml) {
                        s.dataType = 'xml';
                    }
                    xhr.getResponseHeader = function (header) {
                        var headers = {'content-type': s.dataType};
                        return headers[header.toLowerCase()];
                    };
                    // support for XHR 'status' & 'statusText' emulation :
                    if (docRoot) {
                        xhr.status = Number(docRoot.getAttribute('status')) || xhr.status;
                        xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                    }

                    var dt = (s.dataType || '').toLowerCase();
                    var scr = /(json|script|text)/.test(dt);
                    if (scr || s.textarea) {
                        // see if user embedded response in textarea
                        var ta = doc.getElementsByTagName('textarea')[0];
                        if (ta) {
                            xhr.responseText = ta.value;
                            // support for XHR 'status' & 'statusText' emulation :
                            xhr.status = Number(ta.getAttribute('status')) || xhr.status;
                            xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                        } else if (scr) {
                            // account for browsers injecting pre around json response
                            var pre = doc.getElementsByTagName('pre')[0];
                            var b = doc.getElementsByTagName('body')[0];
                            if (pre) {
                                xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                            } else if (b) {
                                xhr.responseText = b.textContent ? b.textContent : b.innerText;
                            }
                        }
                    } else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                        xhr.responseXML = toXml(xhr.responseText);
                    }

                    try {
                        data = httpData(xhr, dt, s);
                    } catch (err) {
                        status = 'parsererror';
                        xhr.error = errMsg = (err || status);
                    }
                } catch (err) {
                    log('error caught: ', err);
                    status = 'error';
                    xhr.error = errMsg = (err || status);
                }

                if (xhr.aborted) {
                    log('upload aborted');
                    status = null;
                }

                if (xhr.status) { // we've set xhr.status
                    status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
                }

                // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
                if (status === 'success') {
                    if (s.success) {
                        s.success.call(s.context, data, 'success', xhr);
                    }
                    deferred.resolve(xhr.responseText, 'success', xhr);
                    if (g) {
                        $.event.trigger("ajaxSuccess", [xhr, s]);
                    }
                } else if (status) {
                    if (errMsg === undefined) {
                        errMsg = xhr.statusText;
                    }
                    if (s.error) {
                        s.error.call(s.context, xhr, status, errMsg);
                    }
                    deferred.reject(xhr, 'error', errMsg);
                    if (g) {
                        $.event.trigger("ajaxError", [xhr, s, errMsg]);
                    }
                }

                if (g) {
                    $.event.trigger("ajaxComplete", [xhr, s]);
                }

                if (g && !--$.active) {
                    $.event.trigger("ajaxStop");
                }

                if (s.complete) {
                    s.complete.call(s.context, xhr, status);
                }

                callbackProcessed = true;
                if (s.timeout) {
                    clearTimeout(timeoutHandle);
                }

                // clean up
                setTimeout(function () {
                    if (!s.iframeTarget) {
                        $io.remove();
                    } else { //adding else to clean up existing iframe response.
                        $io.attr('src', s.iframeSrc);
                    }
                    xhr.responseXML = null;
                }, 100);
            }

            var toXml = $.parseXML || function (s, doc) { // use parseXML if available (jQuery 1.5+)
                if (window.ActiveXObject) {
                    doc = new ActiveXObject('Microsoft.XMLDOM');
                    doc.async = 'false';
                    doc.loadXML(s);
                } else {
                    doc = (new DOMParser()).parseFromString(s, 'text/xml');
                }
                return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
            };
            var parseJSON = $.parseJSON || function (s) {
                /*jslint evil:true */
                return window['eval']('(' + s + ')');
            };

            var httpData = function (xhr, type, s) { // mostly lifted from jq1.4.4

                var ct = xhr.getResponseHeader('content-type') || '',
                    xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                    data = xml ? xhr.responseXML : xhr.responseText;

                if (xml && data.documentElement.nodeName === 'parsererror') {
                    if ($.error) {
                        $.error('parsererror');
                    }
                }
                if (s && s.dataFilter) {
                    data = s.dataFilter(data, type);
                }
                if (typeof data === 'string') {
                    if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                        data = parseJSON(data);
                    } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                        $.globalEval(data);
                    }
                }
                return data;
            };

            return deferred;
        }
    };

    /**
     * ajaxForm() provides a mechanism for fully automating form submission.
     *
     * The advantages of using this method instead of ajaxSubmit() are:
     *
     * 1: This method will include coordinates for <input type="image" /> elements (if the element
     *    is used to submit the form).
     * 2. This method will include the submit element's name/value data (for the element that was
     *    used to submit the form).
     * 3. This method binds the submit() method to the form for you.
     *
     * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
     * passes the options argument along after properly binding events for submit elements and
     * the form itself.
     */
    $.fn.ajaxForm = function (options) {
        options = options || {};
        options.delegation = options.delegation && $.isFunction($.fn.on);

        // in jQuery 1.3+ we can fix mistakes with the ready state
        if (!options.delegation && this.length === 0) {
            var o = {s: this.selector, c: this.context};
            if (!$.isReady && o.s) {
                log('DOM not ready, queuing ajaxForm');
                $(function () {
                    $(o.s, o.c).ajaxForm(options);
                });
                return this;
            }
            // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
            log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
            return this;
        }

        if (options.delegation) {
            $(document)
                .off('submit.form-plugin', this.selector, doAjaxSubmit)
                .off('click.form-plugin', this.selector, captureSubmittingElement)
                .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
                .on('click.form-plugin', this.selector, options, captureSubmittingElement);
            return this;
        }

        return this.ajaxFormUnbind()
            .bind('submit.form-plugin', options, doAjaxSubmit)
            .bind('click.form-plugin', options, captureSubmittingElement);
    };

// private event handlers
    function doAjaxSubmit(e) {
        /*jshint validthis:true */
        var options = e.data;
        if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
            e.preventDefault();
            $(e.target).ajaxSubmit(options); // #365
        }
    }

    function captureSubmittingElement(e) {
        /*jshint validthis:true */
        var target = e.target;
        var $el = $(target);
        if (!($el.is("[type=submit],[type=image]"))) {
            // is this a child element of the submit el?  (ex: a span within a button)
            var t = $el.closest('[type=submit]');
            if (t.length === 0) {
                return;
            }
            target = t[0];
        }
        var form = this;
        form.clk = target;
        if (target.type == 'image') {
            if (e.offsetX !== undefined) {
                form.clk_x = e.offsetX;
                form.clk_y = e.offsetY;
            } else if (typeof $.fn.offset == 'function') {
                var offset = $el.offset();
                form.clk_x = e.pageX - offset.left;
                form.clk_y = e.pageY - offset.top;
            } else {
                form.clk_x = e.pageX - target.offsetLeft;
                form.clk_y = e.pageY - target.offsetTop;
            }
        }
        // clear form vars
        setTimeout(function () {
            form.clk = form.clk_x = form.clk_y = null;
        }, 100);
    }


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
    $.fn.ajaxFormUnbind = function () {
        return this.unbind('submit.form-plugin click.form-plugin');
    };

    /**
     * formToArray() gathers form element data into an array of objects that can
     * be passed to any of the following ajax functions: $.get, $.post, or load.
     * Each object in the array has both a 'name' and 'value' property.  An example of
     * an array for a simple login form might be:
     *
     * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
     *
     * It is this array that is passed to pre-submit callback functions provided to the
     * ajaxSubmit() and ajaxForm() methods.
     */
    $.fn.formToArray = function (semantic, elements) {
        var a = [];
        if (this.length === 0) {
            return a;
        }

        var form = this[0];
        var formId = this.attr('id');
        var els = semantic ? form.getElementsByTagName('*') : form.elements;
        var els2;

        if (els && !/MSIE [678]/.test(navigator.userAgent)) { // #390
            els = $(els).get();  // convert to standard array
        }

        // #386; account for inputs outside the form which use the 'form' attribute
        if (formId) {
            els2 = $(':input[form=' + formId + ']').get();
            if (els2.length) {
                els = (els || []).concat(els2);
            }
        }

        if (!els || !els.length) {
            return a;
        }

        var i, j, n, v, el, max, jmax;
        for (i = 0, max = els.length; i < max; i++) {
            el = els[i];
            n = el.name;
            if (!n || el.disabled) {
                continue;
            }

            if (semantic && form.clk && el.type == "image") {
                // handle image inputs on the fly when semantic == true
                if (form.clk == el) {
                    a.push({name: n, value: $(el).val(), type: el.type});
                    a.push({name: n + '.x', value: form.clk_x}, {name: n + '.y', value: form.clk_y});
                }
                continue;
            }

            v = $.fieldValue(el, true);
            if (v && v.constructor == Array) {
                if (elements) {
                    elements.push(el);
                }
                for (j = 0, jmax = v.length; j < jmax; j++) {
                    a.push({name: n, value: v[j]});
                }
            } else if (feature.fileapi && el.type == 'file') {
                if (elements) {
                    elements.push(el);
                }
                var files = el.files;
                if (files.length) {
                    for (j = 0; j < files.length; j++) {
                        a.push({name: n, value: files[j], type: el.type});
                    }
                } else {
                    // #180
                    a.push({name: n, value: '', type: el.type});
                }
            } else if (v !== null && typeof v != 'undefined') {
                if (elements) {
                    elements.push(el);
                }
                a.push({name: n, value: v, type: el.type, required: el.required});
            }
        }

        if (!semantic && form.clk) {
            // input type=='image' are not found in elements array! handle it here
            var $input = $(form.clk), input = $input[0];
            n = input.name;
            if (n && !input.disabled && input.type == 'image') {
                a.push({name: n, value: $input.val()});
                a.push({name: n + '.x', value: form.clk_x}, {name: n + '.y', value: form.clk_y});
            }
        }
        return a;
    };

    /**
     * Serializes form data into a 'submittable' string. This method will return a string
     * in the format: name1=value1&amp;name2=value2
     */
    $.fn.formSerialize = function (semantic) {
        //hand off to jQuery.param for proper encoding
        return $.param(this.formToArray(semantic));
    };

    /**
     * Serializes all field elements in the jQuery object into a query string.
     * This method will return a string in the format: name1=value1&amp;name2=value2
     */
    $.fn.fieldSerialize = function (successful) {
        var a = [];
        this.each(function () {
            var n = this.name;
            if (!n) {
                return;
            }
            var v = $.fieldValue(this, successful);
            if (v && v.constructor == Array) {
                for (var i = 0, max = v.length; i < max; i++) {
                    a.push({name: n, value: v[i]});
                }
            } else if (v !== null && typeof v != 'undefined') {
                a.push({name: this.name, value: v});
            }
        });
        //hand off to jQuery.param for proper encoding
        return $.param(a);
    };

    /**
     * Returns the value(s) of the element in the matched set.  For example, consider the following form:
     *
     *  <form><fieldset>
     *      <input name="A" type="text" />
     *      <input name="A" type="text" />
     *      <input name="B" type="checkbox" value="B1" />
     *      <input name="B" type="checkbox" value="B2"/>
     *      <input name="C" type="radio" value="C1" />
     *      <input name="C" type="radio" value="C2" />
     *  </fieldset></form>
     *
     *  var v = $('input[type=text]').fieldValue();
     *  // if no values are entered into the text inputs
     *  v == ['','']
     *  // if values entered into the text inputs are 'foo' and 'bar'
     *  v == ['foo','bar']
     *
     *  var v = $('input[type=checkbox]').fieldValue();
     *  // if neither checkbox is checked
     *  v === undefined
     *  // if both checkboxes are checked
     *  v == ['B1', 'B2']
     *
     *  var v = $('input[type=radio]').fieldValue();
     *  // if neither radio is checked
     *  v === undefined
     *  // if first radio is checked
     *  v == ['C1']
     *
     * The successful argument controls whether or not the field element must be 'successful'
     * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
     * The default value of the successful argument is true.  If this value is false the value(s)
     * for each element is returned.
     *
     * Note: This method *always* returns an array.  If no valid value can be determined the
     *    array will be empty, otherwise it will contain one or more values.
     */
    $.fn.fieldValue = function (successful) {
        for (var val = [], i = 0, max = this.length; i < max; i++) {
            var el = this[i];
            var v = $.fieldValue(el, successful);
            if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
                continue;
            }
            if (v.constructor == Array) {
                $.merge(val, v);
            } else {
                val.push(v);
            }
        }
        return val;
    };

    /**
     * Returns the value of the field element.
     */
    $.fieldValue = function (el, successful) {
        var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
        if (successful === undefined) {
            successful = true;
        }

        if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
            (t == 'checkbox' || t == 'radio') && !el.checked ||
            (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
            tag == 'select' && el.selectedIndex == -1)) {
            return null;
        }

        if (tag == 'select') {
            var index = el.selectedIndex;
            if (index < 0) {
                return null;
            }
            var a = [], ops = el.options;
            var one = (t == 'select-one');
            var max = (one ? index + 1 : ops.length);
            for (var i = (one ? index : 0); i < max; i++) {
                var op = ops[i];
                if (op.selected) {
                    var v = op.value;
                    if (!v) { // extra pain for IE...
                        v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                    }
                    if (one) {
                        return v;
                    }
                    a.push(v);
                }
            }
            return a;
        }
        return $(el).val();
    };

    /**
     * Clears the form data.  Takes the following actions on the form's input fields:
     *  - input text fields will have their 'value' property set to the empty string
     *  - select elements will have their 'selectedIndex' property set to -1
     *  - checkbox and radio inputs will have their 'checked' property set to false
     *  - inputs of type submit, button, reset, and hidden will *not* be effected
     *  - button elements will *not* be effected
     */
    $.fn.clearForm = function (includeHidden) {
        return this.each(function () {
            $('input,select,textarea', this).clearFields(includeHidden);
        });
    };

    /**
     * Clears the selected form elements.
     */
    $.fn.clearFields = $.fn.clearInputs = function (includeHidden) {
        var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
        return this.each(function () {
            var t = this.type, tag = this.tagName.toLowerCase();
            if (re.test(t) || tag == 'textarea') {
                this.value = '';
            } else if (t == 'checkbox' || t == 'radio') {
                this.checked = false;
            } else if (tag == 'select') {
                this.selectedIndex = -1;
            } else if (t == "file") {
                if (/MSIE/.test(navigator.userAgent)) {
                    $(this).replaceWith($(this).clone(true));
                } else {
                    $(this).val('');
                }
            } else if (includeHidden) {
                // includeHidden can be the value true, or it can be a selector string
                // indicating a special test; for example:
                //  $('#myForm').clearForm('.special:hidden')
                // the above would clean hidden inputs that have the class of 'special'
                if ((includeHidden === true && /hidden/.test(t)) ||
                    (typeof includeHidden == 'string' && $(this).is(includeHidden))) {
                    this.value = '';
                }
            }
        });
    };

    /**
     * Resets the form data.  Causes all form elements to be reset to their original value.
     */
    $.fn.resetForm = function () {
        return this.each(function () {
            // guard against an input with the name of 'reset'
            // note that IE reports the reset function as an 'object'
            if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
                this.reset();
            }
        });
    };

    /**
     * Enables or disables any matching elements.
     */
    $.fn.enable = function (b) {
        if (b === undefined) {
            b = true;
        }
        return this.each(function () {
            this.disabled = !b;
        });
    };

    /**
     * Checks/unchecks any matching checkboxes or radio buttons and
     * selects/deselects and matching option elements.
     */
    $.fn.selected = function (select) {
        if (select === undefined) {
            select = true;
        }
        return this.each(function () {
            var t = this.type;
            if (t == 'checkbox' || t == 'radio') {
                this.checked = select;
            } else if (this.tagName.toLowerCase() == 'option') {
                var $sel = $(this).parent('select');
                if (select && $sel[0] && $sel[0].type == 'select-one') {
                    // deselect all other options
                    $sel.find('option').selected(false);
                }
                this.selected = select;
            }
        });
    };

// expose debug var
    $.fn.ajaxSubmit.debug = false;

// helper fn for console logging
    function log() {
        if (!$.fn.ajaxSubmit.debug) {
            return;
        }
        var msg = '[jquery.form] ' + Array.prototype.join.call(arguments, '');
        if (window.console && window.console.log) {
            window.console.log(msg);
        } else if (window.opera && window.opera.postError) {
            window.opera.postError(msg);
        }
    }

}));

;(function ($, window, undefined) {
    'use strict';

    $.fn.foundationAccordion = function (options) {

        // DRY up the logic used to determine if the event logic should execute.
        var hasHover = function (accordion) {
            return accordion.hasClass('hover') && !Modernizr.touch
        };

        $(document).on('mouseenter', '.accordion li', function () {
                var p = $(this).parent();

                if (hasHover(p)) {
                    var flyout = $(this).children('.content').first();

                    $('.content', p).not(flyout).hide().parent('li').removeClass('active');
                    flyout.show(0, function () {
                        flyout.parent('li').addClass('active');
                    });
                }
            }
        );

        $(document).on('click.fndtn', '.accordion li .title', function () {
                var li = $(this).closest('li'),
                    p = li.parent();

                if (!hasHover(p)) {
                    var flyout = li.children('.content').first();

                    if (li.hasClass('active')) {
                        p.find('li').removeClass('active').end().find('.content').hide();
                    } else {
                        $('.content', p).not(flyout).hide().parent('li').removeClass('active');
                        flyout.show(0, function () {
                            flyout.parent('li').addClass('active');
                        });
                    }
                }
            }
        );

    };

})(jQuery, this);

;(function ($, window, undefined) {
    'use strict';

    $.fn.foundationAlerts = function (options) {
        var settings = $.extend({
            callback: $.noop
        }, options);

        $(document).on("click", ".alert-box a.close", function (e) {
            e.preventDefault();
            $(this).closest(".alert-box").fadeOut(function () {
                $(this).remove();
                // Do something else after the alert closes
                settings.callback();
            });
        });

    };

})(jQuery, this);
;(function ($, window, undefined) {
    'use strict';

    $.fn.foundationButtons = function (options) {
        var $doc = $(document),
            config = $.extend({
                dropdownAsToggle: false,
                activeClass: 'active'
            }, options),

            // close all dropdowns except for the dropdown passed
            closeDropdowns = function (dropdown) {
                // alert(dropdown.html());
                $('.button.dropdown').find('ul').not(dropdown).removeClass('show-dropdown');
            },
            // reset all toggle states except for the button passed
            resetToggles = function (button) {
                // alert(button.html());
                var buttons = $('.button.dropdown').not(button);
                buttons.add($('> span.' + config.activeClass, buttons)).removeClass(config.activeClass);
            };

        // Prevent event propagation on disabled buttons
        $doc.on('click.fndtn', '.button.disabled', function (e) {
            e.preventDefault();
        });

        $('.button.dropdown > ul', this).addClass('no-hover');

        // reset other active states
        $doc.on('click.fndtn', '.button.dropdown:not(.split), .button.dropdown.split span', function (e) {
            var $el = $(this),
                button = $el.closest('.button.dropdown'),
                dropdown = $('> ul', button);

            // If the click is registered on an actual link or on button element then do not preventDefault which stops the browser from following the link
            if ($.inArray(e.target.nodeName, ['A', 'BUTTON'])) {
                e.preventDefault();
            }

            // close other dropdowns
            setTimeout(function () {
                closeDropdowns(config.dropdownAsToggle ? '' : dropdown);
                dropdown.toggleClass('show-dropdown');

                if (config.dropdownAsToggle) {
                    resetToggles(button);
                    $el.toggleClass(config.activeClass);
                }
            }, 0);
        });

        // close all dropdowns and deactivate all buttons
        $doc.on('click.fndtn', 'body, html', function (e) {
            if (undefined == e.originalEvent) {
                return;
            }
            // check original target instead of stopping event propagation to play nice with other events
            if (!$(e.originalEvent.target).is('.button.dropdown:not(.split), .button.dropdown.split span')) {
                closeDropdowns();
                if (config.dropdownAsToggle) {
                    resetToggles();
                }
            }
        });

        // Positioning the Flyout List
        var normalButtonHeight = $('.button.dropdown:not(.large):not(.small):not(.tiny):visible', this).outerHeight() - 1,
            largeButtonHeight = $('.button.large.dropdown:visible', this).outerHeight() - 1,
            smallButtonHeight = $('.button.small.dropdown:visible', this).outerHeight() - 1,
            tinyButtonHeight = $('.button.tiny.dropdown:visible', this).outerHeight() - 1;

        $('.button.dropdown:not(.large):not(.small):not(.tiny) > ul', this).css('top', normalButtonHeight);
        $('.button.dropdown.large > ul', this).css('top', largeButtonHeight);
        $('.button.dropdown.small > ul', this).css('top', smallButtonHeight);
        $('.button.dropdown.tiny > ul', this).css('top', tinyButtonHeight);

        $('.button.dropdown.up:not(.large):not(.small):not(.tiny) > ul', this).css('top', 'auto').css('bottom', normalButtonHeight - 2);
        $('.button.dropdown.up.large > ul', this).css('top', 'auto').css('bottom', largeButtonHeight - 2);
        $('.button.dropdown.up.small > ul', this).css('top', 'auto').css('bottom', smallButtonHeight - 2);
        $('.button.dropdown.up.tiny > ul', this).css('top', 'auto').css('bottom', tinyButtonHeight - 2);

    };

})(jQuery, this);
;(function ($, window, undefined) {
    'use strict';

    $.fn.foundationMediaQueryViewer = function (options) {
        var settings = $.extend(options, {toggleKey: 77}), // Press 'M'
            $doc = $(document);

        $doc.on("keyup.mediaQueryViewer", ":input", function (e) {
            if (e.which === settings.toggleKey) {
                e.stopPropagation();
            }
        });
        $doc.on("keyup.mediaQueryViewer", function (e) {
            var $mqViewer = $('#fqv');

            if (e.which === settings.toggleKey) {
                if ($mqViewer.length > 0) {
                    $mqViewer.remove();
                } else {
                    $('body').prepend('<div id="fqv" style="position:fixed;top:4px;left:4px;z-index:999;color:#fff;"><p style="font-size:12px;background:rgba(0,0,0,0.75);padding:5px;margin-bottom:1px;line-height:1.2;"><span class="left">Media:</span> <span style="font-weight:bold;" class="show-for-xlarge">Extra Large</span><span style="font-weight:bold;" class="show-for-large">Large</span><span style="font-weight:bold;" class="show-for-medium">Medium</span><span style="font-weight:bold;" class="show-for-small">Small</span><span style="font-weight:bold;" class="show-for-landscape">Landscape</span><span style="font-weight:bold;" class="show-for-portrait">Portrait</span><span style="font-weight:bold;" class="show-for-touch">Touch</span></p></div>');
                }
            }
        });

    };

})(jQuery, this);
;(function ($, window, undefined) {
    'use strict';

    $.fn.foundationNavigation = function (options) {

        var lockNavBar = false;
        // Windows Phone, sadly, does not register touch events :(
        if (Modernizr.touch || navigator.userAgent.match(/Windows Phone/i)) {
            $(document).on('click.fndtn touchstart.fndtn', '.nav-bar a.flyout-toggle', function (e) {
                e.preventDefault();
                var flyout = $(this).siblings('.flyout').first();
                if (lockNavBar === false) {
                    $('.nav-bar .flyout').not(flyout).slideUp(500);
                    flyout.slideToggle(500, function () {
                        lockNavBar = false;
                    });
                }
                lockNavBar = true;
            });
            $('.nav-bar>li.has-flyout', this).addClass('is-touch');
        } else {
            $('.nav-bar>li.has-flyout', this).on('mouseenter mouseleave', function (e) {
                if (e.type == 'mouseenter') {
                    $('.nav-bar').find('.flyout').hide();
                    $(this).children('.flyout').show();
                }

                if (e.type == 'mouseleave') {
                    var flyout = $(this).children('.flyout'),
                        inputs = flyout.find('input'),
                        hasFocus = function (inputs) {
                            var focus;
                            if (inputs.length > 0) {
                                inputs.each(function () {
                                    if ($(this).is(":focus")) {
                                        focus = true;
                                    }
                                });
                                return focus;
                            }

                            return false;
                        };

                    if (!hasFocus(inputs)) {
                        $(this).children('.flyout').hide();
                    }
                }

            });
        }

    };

})(jQuery, this);
/*
 * jQuery Reveal Plugin 1.1
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
/*globals jQuery */

(function ($) {
    'use strict';
    //
    // Global variable.
    // Helps us determine if the current modal is being queued for display.
    //
    var modalQueued = false;

    //
    // Bind the live 'click' event to all anchor elemnets with the data-reveal-id attribute.
    //
    $(document).on('click', 'a[data-reveal-id]', function (event) {
        //
        // Prevent default action of the event.
        //
        event.preventDefault();
        //
        // Get the clicked anchor data-reveal-id attribute value.
        //
        var modalLocation = $(this).attr('data-reveal-id');
        //
        // Find the element with that modalLocation id and call the reveal plugin.
        //
        $('#' + modalLocation).reveal($(this).data());

    });

    /**
     * @module reveal
     * @property {Object} [options] Reveal options
     */
    $.fn.reveal = function (options) {
        /*
       * Cache the document object.
       */
        var $doc = $(document),
            /*
         * Default property values.
         */
            defaults = {
                /**
                 * Possible options: fade, fadeAndPop, none
                 *
                 * @property animation
                 * @type {String}
                 * @default fadeAndPop
                 */
                animation: 'fadeAndPop',
                /**
                 * Speed at which the reveal should show. How fast animtions are.
                 *
                 * @property animationSpeed
                 * @type {Integer}
                 * @default 300
                 */
                animationSpeed: 300,
                /**
                 * Should the modal close when the background is clicked?
                 *
                 * @property closeOnBackgroundClick
                 * @type {Boolean}
                 * @default true
                 */
                closeOnBackgroundClick: true,
                /**
                 * Specify a class name for the 'close modal' element.
                 * This element will close an open modal.
                 *
                 @example
                 <a href='#close' class='close-reveal-modal'>Close Me</a>
                 *
                 * @property dismissModalClass
                 * @type {String}
                 * @default close-reveal-modal
                 */
                dismissModalClass: 'close-reveal-modal',
                /**
                 * Specify a callback function that triggers 'before' the modal opens.
                 *
                 * @property open
                 * @type {Function}
                 * @default function(){}
                 */
                open: $.noop,
                /**
                 * Specify a callback function that triggers 'after' the modal is opened.
                 *
                 * @property opened
                 * @type {Function}
                 * @default function(){}
                 */
                opened: $.noop,
                /**
                 * Specify a callback function that triggers 'before' the modal prepares to close.
                 *
                 * @property close
                 * @type {Function}
                 * @default function(){}
                 */
                close: $.noop,
                /**
                 * Specify a callback function that triggers 'after' the modal is closed.
                 *
                 * @property closed
                 * @type {Function}
                 * @default function(){}
                 */
                closed: $.noop
            }
        ;
        //
        // Extend the default options.
        // This replaces the passed in option (options) values with default values.
        //
        options = $.extend({}, defaults, options);

        //
        // Apply the plugin functionality to each element in the jQuery collection.
        //
        return this.not('.reveal-modal.open').each(function () {
            //
            // Cache the modal element
            //
            var modal = $(this),
                //
                // Get the current css 'top' property value in decimal format.
                //
                topMeasure = parseInt(modal.css('top'), 10),
                //
                // Calculate the top offset.
                //
                topOffset = modal.height() + topMeasure,
                //
                // Helps determine if the modal is locked.
                // This way we keep the modal from triggering while it's in the middle of animating.
                //
                locked = false,
                //
                // Get the modal background element.
                //
                modalBg = $('.reveal-modal-bg'),
                //
                // Show modal properties
                //
                cssOpts = {
                    //
                    // Used, when we show the modal.
                    //
                    open: {
                        //
                        // Set the 'top' property to the document scroll minus the calculated top offset.
                        //
                        'top': 0,
                        //
                        // Opacity gets set to 0.
                        //
                        'opacity': 0,
                        //
                        // Show the modal
                        //
                        'visibility': 'visible',
                        //
                        // Ensure it's displayed as a block element.
                        //
                        'display': 'block'
                    },
                    //
                    // Used, when we hide the modal.
                    //
                    close: {
                        //
                        // Set the default 'top' property value.
                        //
                        'top': topMeasure,
                        //
                        // Has full opacity.
                        //
                        'opacity': 1,
                        //
                        // Hide the modal
                        //
                        'visibility': 'hidden',
                        //
                        // Ensure the elment is hidden.
                        //
                        'display': 'none'
                    }

                },
                //
                // Initial closeButton variable.
                //
                $closeButton
            ;

            //
            // Do we have a modal background element?
            //
            if (modalBg.length === 0) {
                //
                // No we don't. So, let's create one.
                //
                modalBg = $('<div />', {'class': 'reveal-modal-bg'})
                    //
                    // Then insert it after the modal element.
                    //
                    .insertAfter(modal);
                //
                // Now, fade it out a bit.
                //
                modalBg.fadeTo('fast', 0.8);
            }

            //
            // Helper Methods
            //

            /**
             * Unlock the modal for animation.
             *
             * @method unlockModal
             */
            function unlockModal() {
                locked = false;
            }

            /**
             * Lock the modal to prevent further animation.
             *
             * @method lockModal
             */
            function lockModal() {
                locked = true;
            }

            /**
             * Closes all open modals.
             *
             * @method closeOpenModal
             */
            function closeOpenModals() {
                //
                // Get all reveal-modal elements with the .open class.
                //
                var $openModals = $(".reveal-modal.open");
                //
                // Do we have modals to close?
                //
                if ($openModals.length === 1) {
                    //
                    // Set the modals for animation queuing.
                    //
                    modalQueued = true;
                    //
                    // Trigger the modal close event.
                    //
                    $openModals.trigger("reveal:close");
                }

            }

            /**
             * Animates the modal opening.
             * Handles the modal 'open' event.
             *
             * @method openAnimation
             */
            function openAnimation() {
                //
                // First, determine if we're in the middle of animation.
                //
                if (!locked) {
                    //
                    // We're not animating, let's lock the modal for animation.
                    //
                    lockModal();
                    //
                    // Close any opened modals.
                    //
                    closeOpenModals();
                    //
                    // Now, add the open class to this modal.
                    //
                    modal.addClass("open");

                    //
                    // Are we executing the 'fadeAndPop' animation?
                    //
                    if (options.animation === "fadeAndPop") {
                        //
                        // Yes, we're doing the 'fadeAndPop' animation.
                        // Okay, set the modal css properties.
                        //
                        //
                        // Set the 'top' property to the document scroll minus the calculated top offset.
                        //
                        cssOpts.open.top = $doc.scrollTop() - topOffset;
                        //
                        // Flip the opacity to 0.
                        //
                        cssOpts.open.opacity = 0;
                        //
                        // Set the css options.
                        //
                        modal.css(cssOpts.open);
                        //
                        // Fade in the background element, at half the speed of the modal element.
                        // So, faster than the modal element.
                        //
                        modalBg.fadeIn(options.animationSpeed / 2);

                        //
                        // Let's delay the next animation queue.
                        // We'll wait until the background element is faded in.
                        //
                        modal.delay(options.animationSpeed / 2)
                            //
                            // Animate the following css properties.
                            //
                            .animate({
                                    //
                                    // Set the 'top' property to the document scroll plus the calculated top measure.
                                    //
                                    "top": $doc.scrollTop() + topMeasure + 'px',
                                    //
                                    // Set it to full opacity.
                                    //
                                    "opacity": 1

                                },
                                /*
             * Fade speed.
             */
                                options.animationSpeed,
                                /*
             * End of animation callback.
             */
                                function () {
                                    //
                                    // Trigger the modal reveal:opened event.
                                    // This should trigger the functions set in the options.opened property.
                                    //
                                    modal.trigger('reveal:opened');

                                }); // end of animate.

                    } // end if 'fadeAndPop'

                    //
                    // Are executing the 'fade' animation?
                    //
                    if (options.animation === "fade") {
                        //
                        // Yes, were executing 'fade'.
                        // Okay, let's set the modal properties.
                        //
                        cssOpts.open.top = $doc.scrollTop() + topMeasure;
                        //
                        // Flip the opacity to 0.
                        //
                        cssOpts.open.opacity = 0;
                        //
                        // Set the css options.
                        //
                        modal.css(cssOpts.open);
                        //
                        // Fade in the modal background at half the speed of the modal.
                        // So, faster than modal.
                        //
                        modalBg.fadeIn(options.animationSpeed / 2);

                        //
                        // Delay the modal animation.
                        // Wait till the modal background is done animating.
                        //
                        modal.delay(options.animationSpeed / 2)
                            //
                            // Now animate the modal.
                            //
                            .animate({
                                    //
                                    // Set to full opacity.
                                    //
                                    "opacity": 1
                                },

                                /*
             * Animation speed.
             */
                                options.animationSpeed,

                                /*
             * End of animation callback.
             */
                                function () {
                                    //
                                    // Trigger the modal reveal:opened event.
                                    // This should trigger the functions set in the options.opened property.
                                    //
                                    modal.trigger('reveal:opened');

                                });

                    } // end if 'fade'

                    //
                    // Are we not animating?
                    //
                    if (options.animation === "none") {
                        //
                        // We're not animating.
                        // Okay, let's set the modal css properties.
                        //
                        //
                        // Set the top property.
                        //
                        cssOpts.open.top = $doc.scrollTop() + topMeasure;
                        //
                        // Set the opacity property to full opacity, since we're not fading (animating).
                        //
                        cssOpts.open.opacity = 1;
                        //
                        // Set the css property.
                        //
                        modal.css(cssOpts.open);
                        //
                        // Show the modal Background.
                        //
                        modalBg.css({"display": "block"});
                        //
                        // Trigger the modal opened event.
                        //
                        modal.trigger('reveal:opened');

                    } // end if animating 'none'

                }// end if !locked

            }// end openAnimation


            function openVideos() {
                var video = modal.find('.flex-video'),
                    iframe = video.find('iframe');
                if (iframe.length > 0) {
                    iframe.attr("src", iframe.data("src"));
                    video.fadeIn(100);
                }
            }

            //
            // Bind the reveal 'open' event.
            // When the event is triggered, openAnimation is called
            // along with any function set in the options.open property.
            //
            modal.bind('reveal:open.reveal', openAnimation);
            modal.bind('reveal:open.reveal', openVideos);

            /**
             * Closes the modal element(s)
             * Handles the modal 'close' event.
             *
             * @method closeAnimation
             */
            function closeAnimation() {
                //
                // First, determine if we're in the middle of animation.
                //
                if (!locked) {
                    //
                    // We're not animating, let's lock the modal for animation.
                    //
                    lockModal();
                    //
                    // Clear the modal of the open class.
                    //
                    modal.removeClass("open");

                    //
                    // Are we using the 'fadeAndPop' animation?
                    //
                    if (options.animation === "fadeAndPop") {
                        //
                        // Yes, okay, let's set the animation properties.
                        //
                        modal.animate({
                                //
                                // Set the top property to the document scrollTop minus calculated topOffset.
                                //
                                "top": $doc.scrollTop() - topOffset + 'px',
                                //
                                // Fade the modal out, by using the opacity property.
                                //
                                "opacity": 0

                            },
                            /*
             * Fade speed.
             */
                            options.animationSpeed / 2,
                            /*
             * End of animation callback.
             */
                            function () {
                                //
                                // Set the css hidden options.
                                //
                                modal.css(cssOpts.close);

                            });
                        //
                        // Is the modal animation queued?
                        //
                        if (!modalQueued) {
                            //
                            // Oh, the modal(s) are mid animating.
                            // Let's delay the animation queue.
                            //
                            modalBg.delay(options.animationSpeed)
                                //
                                // Fade out the modal background.
                                //
                                .fadeOut(
                                    /*
               * Animation speed.
               */
                                    options.animationSpeed,
                                    /*
              * End of animation callback.
              */
                                    function () {
                                        //
                                        // Trigger the modal 'closed' event.
                                        // This should trigger any method set in the options.closed property.
                                        //
                                        modal.trigger('reveal:closed');

                                    });

                        } else {
                            //
                            // We're not mid queue.
                            // Trigger the modal 'closed' event.
                            // This should trigger any method set in the options.closed propety.
                            //
                            modal.trigger('reveal:closed');

                        } // end if !modalQueued

                    } // end if animation 'fadeAndPop'

                    //
                    // Are we using the 'fade' animation.
                    //
                    if (options.animation === "fade") {
                        //
                        // Yes, we're using the 'fade' animation.
                        //
                        modal.animate({"opacity": 0},
                            /*
               * Animation speed.
               */
                            options.animationSpeed,
                            /*
               * End of animation callback.
               */
                            function () {
                                //
                                // Set the css close options.
                                //
                                modal.css(cssOpts.close);

                            }); // end animate

                        //
                        // Are we mid animating the modal(s)?
                        //
                        if (!modalQueued) {
                            //
                            // Oh, the modal(s) are mid animating.
                            // Let's delay the animation queue.
                            //
                            modalBg.delay(options.animationSpeed)
                                //
                                // Let's fade out the modal background element.
                                //
                                .fadeOut(
                                    /*
               * Animation speed.
               */
                                    options.animationSpeed,
                                    /*
                 * End of animation callback.
                 */
                                    function () {
                                        //
                                        // Trigger the modal 'closed' event.
                                        // This should trigger any method set in the options.closed propety.
                                        //
                                        modal.trigger('reveal:closed');

                                    }); // end fadeOut

                        } else {
                            //
                            // We're not mid queue.
                            // Trigger the modal 'closed' event.
                            // This should trigger any method set in the options.closed propety.
                            //
                            modal.trigger('reveal:closed');

                        } // end if !modalQueued

                    } // end if animation 'fade'

                    //
                    // Are we not animating?
                    //
                    if (options.animation === "none") {
                        //
                        // We're not animating.
                        // Set the modal close css options.
                        //
                        modal.css(cssOpts.close);
                        //
                        // Is the modal in the middle of an animation queue?
                        //
                        if (!modalQueued) {
                            //
                            // It's not mid queueu. Just hide it.
                            //
                            modalBg.css({'display': 'none'});
                        }
                        //
                        // Trigger the modal 'closed' event.
                        // This should trigger any method set in the options.closed propety.
                        //
                        modal.trigger('reveal:closed');

                    } // end if not animating
                    //
                    // Reset the modalQueued variable.
                    //
                    modalQueued = false;
                } // end if !locked

            } // end closeAnimation

            /**
             * Destroys the modal and it's events.
             *
             * @method destroy
             */
            function destroy() {
                //
                // Unbind all .reveal events from the modal.
                //
                modal.unbind('.reveal');
                //
                // Unbind all .reveal events from the modal background.
                //
                modalBg.unbind('.reveal');
                //
                // Unbind all .reveal events from the modal 'close' button.
                //
                $closeButton.unbind('.reveal');
                //
                // Unbind all .reveal events from the body.
                //
                $('body').unbind('.reveal');

            }

            function closeVideos() {
                var video = modal.find('.flex-video'),
                    iframe = video.find('iframe');
                if (iframe.length > 0) {
                    iframe.data("src", iframe.attr("src"));
                    iframe.attr("src", "");
                    video.fadeOut(100);
                }
            }

            //
            // Bind the modal 'close' event
            //
            modal.bind('reveal:close.reveal', closeAnimation);
            modal.bind('reveal:closed.reveal', closeVideos);
            //
            // Bind the modal 'opened' + 'closed' event
            // Calls the unlockModal method.
            //
            modal.bind('reveal:opened.reveal reveal:closed.reveal', unlockModal);
            //
            // Bind the modal 'closed' event.
            // Calls the destroy method.
            //
            modal.bind('reveal:closed.reveal', destroy);
            //
            // Bind the modal 'open' event
            // Handled by the options.open property function.
            //
            modal.bind('reveal:open.reveal', options.open);
            //
            // Bind the modal 'opened' event.
            // Handled by the options.opened property function.
            //
            modal.bind('reveal:opened.reveal', options.opened);
            //
            // Bind the modal 'close' event.
            // Handled by the options.close property function.
            //
            modal.bind('reveal:close.reveal', options.close);
            //
            // Bind the modal 'closed' event.
            // Handled by the options.closed property function.
            //
            modal.bind('reveal:closed.reveal', options.closed);

            //
            // We're running this for the first time.
            // Trigger the modal 'open' event.
            //
            modal.trigger('reveal:open');

            //
            // Get the closeButton variable element(s).
            //
            $closeButton = $('.' + options.dismissModalClass)
                //
                // Bind the element 'click' event and handler.
                //
                .bind('click.reveal', function () {
                    //
                    // Trigger the modal 'close' event.
                    //
                    modal.trigger('reveal:close');

                });

            //
            // Should we close the modal background on click?
            //
            if (options.closeOnBackgroundClick) {
                //
                // Yes, close the modal background on 'click'
                // Set the modal background css 'cursor' propety to pointer.
                // Adds a pointer symbol when you mouse over the modal background.
                //
                modalBg.css({"cursor": "pointer"});
                //
                // Bind a 'click' event handler to the modal background.
                //
                modalBg.bind('click.reveal', function () {
                    //
                    // Trigger the modal 'close' event.
                    //
                    modal.trigger('reveal:close');

                });

            }

            //
            // Bind keyup functions on the body element.
            // We'll want to close the modal when the 'escape' key is hit.
            //
            $('body').bind('keyup.reveal', function (event) {
                //
                // Did the escape key get triggered?
                //
                if (event.which === 27) { // 27 is the keycode for the Escape key
                    //
                    // Escape key was triggered.
                    // Trigger the modal 'close' event.
                    //
                    modal.trigger('reveal:close');
                }

            }); // end $(body)

        }); // end this.each

    }; // end $.fn

}(jQuery));
/*
 * jQuery Foundation Tooltips 2.0.2
 * http://foundation.zurb.com
 * Copyright 2012, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, undefined) {
    'use strict';

    var settings = {
            bodyHeight: 0,
            selector: '.has-tip',
            additionalInheritableClasses: [],
            tooltipClass: '.tooltip',
            tipTemplate: function (selector, content) {
                return '<span data-selector="' + selector + '" class="' + settings.tooltipClass.substring(1) + '">' + content + '<span class="nub"></span></span>';
            }
        },
        methods = {
            init: function (options) {
                settings = $.extend(settings, options);

                // alias the old targetClass option
                settings.selector = settings.targetClass ? settings.targetClass : settings.selector;

                return this.each(function () {
                    var $body = $('body');

                    if (Modernizr.touch) {
                        $body.on('click.tooltip touchstart.tooltip touchend.tooltip', settings.selector, function (e) {
                            e.preventDefault();
                            $(settings.tooltipClass).hide();
                            methods.showOrCreateTip($(this));
                        });
                        $body.on('click.tooltip touchstart.tooltip touchend.tooltip', settings.tooltipClass, function (e) {
                            e.preventDefault();
                            $(this).fadeOut(150);
                        });
                    } else {
                        $body.on('mouseenter.tooltip mouseleave.tooltip', settings.selector, function (e) {
                            var $this = $(this);

                            if (e.type === 'mouseenter') {
                                methods.showOrCreateTip($this);
                            } else if (e.type === 'mouseleave') {
                                methods.hide($this);
                            }
                        });
                    }

                    $(this).data('tooltips', true);

                });
            },
            showOrCreateTip: function ($target, content) {
                var $tip = methods.getTip($target);

                if ($tip && $tip.length > 0) {
                    methods.show($target);
                } else {
                    methods.create($target, content);
                }
            },
            getTip: function ($target) {
                var selector = methods.selector($target),
                    tip = null;

                if (selector) {
                    tip = $('span[data-selector=' + selector + ']' + settings.tooltipClass);
                }
                return (tip.length > 0) ? tip : false;
            },
            selector: function ($target) {
                var id = $target.attr('id'),
                    dataSelector = $target.data('selector');

                if (id === undefined && dataSelector === undefined) {
                    dataSelector = 'tooltip' + Math.random().toString(36).substring(7);
                    $target.attr('data-selector', dataSelector);
                }
                return (id) ? id : dataSelector;
            },
            create: function ($target, content) {
                var $tip = $(settings.tipTemplate(methods.selector($target),
                    $('<div>').html(content ? content : $target.attr('title')).html())),
                    classes = methods.inheritable_classes($target);

                $tip.addClass(classes).appendTo('body');
                if (Modernizr.touch) {
                    $tip.append('<span class="tap-to-close">tap to close </span>');
                }
                $target.removeAttr('title');
                methods.show($target);
            },
            reposition: function (target, tip, classes) {
                var width, nub, nubHeight, nubWidth, column, objPos;

                tip.css('visibility', 'hidden').show();

                width = target.data('width');
                nub = tip.children('.nub');
                nubHeight = nub.outerHeight();
                nubWidth = nub.outerWidth();

                objPos = function (obj, top, right, bottom, left, width) {
                    return obj.css({
                        'top': top,
                        'bottom': bottom,
                        'left': left,
                        'right': right,
                        'max-width': (width) ? width : 'auto'
                    }).end();
                };

                objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', target.offset().left, width);
                objPos(nub, -nubHeight, 'auto', 'auto', 10);

                if ($(window).width() < 767) {
                    if (target.data('mobile-width')) {
                        tip.width(target.data('mobile-width')).css('left', 15).addClass('tip-override');
                    } else {
                        column = target.closest('.columns');
                        if (column.length < 0) {
                            // if not using Foundation
                            column = $('body');
                        }
                        if (column.outerWidth()) {
                            tip.width(column.outerWidth() - 25).css('left', 15).addClass('tip-override');
                        } else {
                            var tmp_width = Math.ceil($(window).width() * 0.9);
                            tip.width(tmp_width).css('left', 15).addClass('tip-override');
                        }
                    }
                    objPos(nub, -nubHeight, 'auto', 'auto', target.offset().left);
                } else {
                    if (classes && classes.indexOf('tip-top') > -1) {
                        objPos(tip, (target.offset().top - tip.outerHeight() - nubHeight), 'auto', 'auto', target.offset().left, width)
                            .removeClass('tip-override');
                        objPos(nub, 'auto', 'auto', -nubHeight, 'auto');
                    } else if (classes && classes.indexOf('tip-left') > -1) {
                        objPos(tip, (target.offset().top + (target.outerHeight() / 2) - nubHeight), 'auto', 'auto', (target.offset().left - tip.outerWidth() - 10), width)
                            .removeClass('tip-override');
                        objPos(nub, (tip.outerHeight() / 2) - (nubHeight / 2), -nubHeight, 'auto', 'auto');
                    } else if (classes && classes.indexOf('tip-right') > -1) {
                        objPos(tip, (target.offset().top + (target.outerHeight() / 2) - nubHeight), 'auto', 'auto', (target.offset().left + target.outerWidth() + 10), width)
                            .removeClass('tip-override');
                        objPos(nub, (tip.outerHeight() / 2) - (nubHeight / 2), 'auto', 'auto', -nubHeight);
                    } else if (classes && classes.indexOf('tip-centered-top') > -1) {
                        objPos(tip, (target.offset().top - tip.outerHeight() - nubHeight), 'auto', 'auto', (target.offset().left + ((target.outerWidth() - tip.outerWidth()) / 2)), width)
                            .removeClass('tip-override');
                        objPos(nub, 'auto', ((tip.outerWidth() / 2) - (nubHeight / 2)), -nubHeight, 'auto');
                    } else if (classes && classes.indexOf('tip-centered-bottom') > -1) {
                        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', (target.offset().left + ((target.outerWidth() - tip.outerWidth()) / 2)), width)
                            .removeClass('tip-override');
                        objPos(nub, -nubHeight, ((tip.outerWidth() / 2) - (nubHeight / 2)), 'auto', 'auto');
                    }
                }
                tip.css('visibility', 'visible').hide();
            },
            inheritable_classes: function (target) {
                var inheritables = ['tip-top', 'tip-left', 'tip-bottom', 'tip-right', 'tip-centered-top', 'tip-centered-bottom', 'noradius'].concat(settings.additionalInheritableClasses),
                    classes = target.attr('class'),
                    filtered = classes ? $.map(classes.split(' '), function (el, i) {
                        if ($.inArray(el, inheritables) !== -1) {
                            return el;
                        }
                    }).join(' ') : '';

                return $.trim(filtered);
            },
            show: function ($target) {
                var $tip = methods.getTip($target);

                methods.reposition($target, $tip, $target.attr('class'));
                $tip.fadeIn(150);
            },
            hide: function ($target) {
                var $tip = methods.getTip($target);

                $tip.fadeOut(150);
            },
            reload: function () {
                var $self = $(this);

                return ($self.data('tooltips')) ? $self.foundationTooltips('destroy').foundationTooltips('init') : $self.foundationTooltips('init');
            },
            destroy: function () {
                return this.each(function () {
                    $(window).off('.tooltip');
                    $(settings.selector).off('.tooltip');
                    $(settings.tooltipClass).each(function (i) {
                        $($(settings.selector).get(i)).attr('title', $(this).text());
                    }).remove();
                });
            }
        };

    $.fn.foundationTooltips = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.foundationTooltips');
        }
    };
}(jQuery, this));
/*
 * jQuery Reveal Plugin 1.1
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
/*globals jQuery */

(function ($) {
    'use strict';
    //
    // Global variable.
    // Helps us determine if the current modal is being queued for display.
    //
    var modalQueued = false;

    //
    // Bind the live 'click' event to all anchor elemnets with the data-reveal-id attribute.
    //
    $(document).on('click', 'a[data-reveal-id]', function (event) {
        //
        // Prevent default action of the event.
        //
        event.preventDefault();
        //
        // Get the clicked anchor data-reveal-id attribute value.
        //
        var modalLocation = $(this).attr('data-reveal-id');
        //
        // Find the element with that modalLocation id and call the reveal plugin.
        //
        $('#' + modalLocation).reveal($(this).data());

    });

    /**
     * @module reveal
     * @property {Object} [options] Reveal options
     */
    $.fn.reveal = function (options) {
        /*
       * Cache the document object.
       */
        var $doc = $(document),
            /*
         * Default property values.
         */
            defaults = {
                /**
                 * Possible options: fade, fadeAndPop, none
                 *
                 * @property animation
                 * @type {String}
                 * @default fadeAndPop
                 */
                animation: 'fadeAndPop',
                /**
                 * Speed at which the reveal should show. How fast animtions are.
                 *
                 * @property animationSpeed
                 * @type {Integer}
                 * @default 300
                 */
                animationSpeed: 300,
                /**
                 * Should the modal close when the background is clicked?
                 *
                 * @property closeOnBackgroundClick
                 * @type {Boolean}
                 * @default true
                 */
                closeOnBackgroundClick: true,
                /**
                 * Specify a class name for the 'close modal' element.
                 * This element will close an open modal.
                 *
                 @example
                 <a href='#close' class='close-reveal-modal'>Close Me</a>
                 *
                 * @property dismissModalClass
                 * @type {String}
                 * @default close-reveal-modal
                 */
                dismissModalClass: 'close-reveal-modal',
                /**
                 * Specify a callback function that triggers 'before' the modal opens.
                 *
                 * @property open
                 * @type {Function}
                 * @default function(){}
                 */
                open: $.noop,
                /**
                 * Specify a callback function that triggers 'after' the modal is opened.
                 *
                 * @property opened
                 * @type {Function}
                 * @default function(){}
                 */
                opened: $.noop,
                /**
                 * Specify a callback function that triggers 'before' the modal prepares to close.
                 *
                 * @property close
                 * @type {Function}
                 * @default function(){}
                 */
                close: $.noop,
                /**
                 * Specify a callback function that triggers 'after' the modal is closed.
                 *
                 * @property closed
                 * @type {Function}
                 * @default function(){}
                 */
                closed: $.noop
            }
        ;
        //
        // Extend the default options.
        // This replaces the passed in option (options) values with default values.
        //
        options = $.extend({}, defaults, options);

        //
        // Apply the plugin functionality to each element in the jQuery collection.
        //
        return this.not('.reveal-modal.open').each(function () {
            //
            // Cache the modal element
            //
            var modal = $(this),
                //
                // Get the current css 'top' property value in decimal format.
                //
                topMeasure = parseInt(modal.css('top'), 10),
                //
                // Calculate the top offset.
                //
                topOffset = modal.height() + topMeasure,
                //
                // Helps determine if the modal is locked.
                // This way we keep the modal from triggering while it's in the middle of animating.
                //
                locked = false,
                //
                // Get the modal background element.
                //
                modalBg = $('.reveal-modal-bg'),
                //
                // Show modal properties
                //
                cssOpts = {
                    //
                    // Used, when we show the modal.
                    //
                    open: {
                        //
                        // Set the 'top' property to the document scroll minus the calculated top offset.
                        //
                        'top': 0,
                        //
                        // Opacity gets set to 0.
                        //
                        'opacity': 0,
                        //
                        // Show the modal
                        //
                        'visibility': 'visible',
                        //
                        // Ensure it's displayed as a block element.
                        //
                        'display': 'block'
                    },
                    //
                    // Used, when we hide the modal.
                    //
                    close: {
                        //
                        // Set the default 'top' property value.
                        //
                        'top': topMeasure,
                        //
                        // Has full opacity.
                        //
                        'opacity': 1,
                        //
                        // Hide the modal
                        //
                        'visibility': 'hidden',
                        //
                        // Ensure the elment is hidden.
                        //
                        'display': 'none'
                    }

                },
                //
                // Initial closeButton variable.
                //
                $closeButton
            ;

            //
            // Do we have a modal background element?
            //
            if (modalBg.length === 0) {
                //
                // No we don't. So, let's create one.
                //
                modalBg = $('<div />', {'class': 'reveal-modal-bg'})
                    //
                    // Then insert it after the modal element.
                    //
                    .insertAfter(modal);
                //
                // Now, fade it out a bit.
                //
                modalBg.fadeTo('fast', 0.8);
            }

            //
            // Helper Methods
            //

            /**
             * Unlock the modal for animation.
             *
             * @method unlockModal
             */
            function unlockModal() {
                locked = false;
            }

            /**
             * Lock the modal to prevent further animation.
             *
             * @method lockModal
             */
            function lockModal() {
                locked = true;
            }

            /**
             * Closes all open modals.
             *
             * @method closeOpenModal
             */
            function closeOpenModals() {
                //
                // Get all reveal-modal elements with the .open class.
                //
                var $openModals = $(".reveal-modal.open");
                //
                // Do we have modals to close?
                //
                if ($openModals.length === 1) {
                    //
                    // Set the modals for animation queuing.
                    //
                    modalQueued = true;
                    //
                    // Trigger the modal close event.
                    //
                    $openModals.trigger("reveal:close");
                }

            }

            /**
             * Animates the modal opening.
             * Handles the modal 'open' event.
             *
             * @method openAnimation
             */
            function openAnimation() {
                //
                // First, determine if we're in the middle of animation.
                //
                if (!locked) {
                    //
                    // We're not animating, let's lock the modal for animation.
                    //
                    lockModal();
                    //
                    // Close any opened modals.
                    //
                    closeOpenModals();
                    //
                    // Now, add the open class to this modal.
                    //
                    modal.addClass("open");

                    //
                    // Are we executing the 'fadeAndPop' animation?
                    //
                    if (options.animation === "fadeAndPop") {
                        //
                        // Yes, we're doing the 'fadeAndPop' animation.
                        // Okay, set the modal css properties.
                        //
                        //
                        // Set the 'top' property to the document scroll minus the calculated top offset.
                        //
                        cssOpts.open.top = $doc.scrollTop() - topOffset;
                        //
                        // Flip the opacity to 0.
                        //
                        cssOpts.open.opacity = 0;
                        //
                        // Set the css options.
                        //
                        modal.css(cssOpts.open);
                        //
                        // Fade in the background element, at half the speed of the modal element.
                        // So, faster than the modal element.
                        //
                        modalBg.fadeIn(options.animationSpeed / 2);

                        //
                        // Let's delay the next animation queue.
                        // We'll wait until the background element is faded in.
                        //
                        modal.delay(options.animationSpeed / 2)
                            //
                            // Animate the following css properties.
                            //
                            .animate({
                                    //
                                    // Set the 'top' property to the document scroll plus the calculated top measure.
                                    //
                                    "top": $doc.scrollTop() + topMeasure + 'px',
                                    //
                                    // Set it to full opacity.
                                    //
                                    "opacity": 1

                                },
                                /*
             * Fade speed.
             */
                                options.animationSpeed,
                                /*
             * End of animation callback.
             */
                                function () {
                                    //
                                    // Trigger the modal reveal:opened event.
                                    // This should trigger the functions set in the options.opened property.
                                    //
                                    modal.trigger('reveal:opened');

                                }); // end of animate.

                    } // end if 'fadeAndPop'

                    //
                    // Are executing the 'fade' animation?
                    //
                    if (options.animation === "fade") {
                        //
                        // Yes, were executing 'fade'.
                        // Okay, let's set the modal properties.
                        //
                        cssOpts.open.top = $doc.scrollTop() + topMeasure;
                        //
                        // Flip the opacity to 0.
                        //
                        cssOpts.open.opacity = 0;
                        //
                        // Set the css options.
                        //
                        modal.css(cssOpts.open);
                        //
                        // Fade in the modal background at half the speed of the modal.
                        // So, faster than modal.
                        //
                        modalBg.fadeIn(options.animationSpeed / 2);

                        //
                        // Delay the modal animation.
                        // Wait till the modal background is done animating.
                        //
                        modal.delay(options.animationSpeed / 2)
                            //
                            // Now animate the modal.
                            //
                            .animate({
                                    //
                                    // Set to full opacity.
                                    //
                                    "opacity": 1
                                },

                                /*
             * Animation speed.
             */
                                options.animationSpeed,

                                /*
             * End of animation callback.
             */
                                function () {
                                    //
                                    // Trigger the modal reveal:opened event.
                                    // This should trigger the functions set in the options.opened property.
                                    //
                                    modal.trigger('reveal:opened');

                                });

                    } // end if 'fade'

                    //
                    // Are we not animating?
                    //
                    if (options.animation === "none") {
                        //
                        // We're not animating.
                        // Okay, let's set the modal css properties.
                        //
                        //
                        // Set the top property.
                        //
                        cssOpts.open.top = $doc.scrollTop() + topMeasure;
                        //
                        // Set the opacity property to full opacity, since we're not fading (animating).
                        //
                        cssOpts.open.opacity = 1;
                        //
                        // Set the css property.
                        //
                        modal.css(cssOpts.open);
                        //
                        // Show the modal Background.
                        //
                        modalBg.css({"display": "block"});
                        //
                        // Trigger the modal opened event.
                        //
                        modal.trigger('reveal:opened');

                    } // end if animating 'none'

                }// end if !locked

            }// end openAnimation


            function openVideos() {
                var video = modal.find('.flex-video'),
                    iframe = video.find('iframe');
                if (iframe.length > 0) {
                    iframe.attr("src", iframe.data("src"));
                    video.fadeIn(100);
                }
            }

            //
            // Bind the reveal 'open' event.
            // When the event is triggered, openAnimation is called
            // along with any function set in the options.open property.
            //
            modal.bind('reveal:open.reveal', openAnimation);
            modal.bind('reveal:open.reveal', openVideos);

            /**
             * Closes the modal element(s)
             * Handles the modal 'close' event.
             *
             * @method closeAnimation
             */
            function closeAnimation() {
                //
                // First, determine if we're in the middle of animation.
                //
                if (!locked) {
                    //
                    // We're not animating, let's lock the modal for animation.
                    //
                    lockModal();
                    //
                    // Clear the modal of the open class.
                    //
                    modal.removeClass("open");

                    //
                    // Are we using the 'fadeAndPop' animation?
                    //
                    if (options.animation === "fadeAndPop") {
                        //
                        // Yes, okay, let's set the animation properties.
                        //
                        modal.animate({
                                //
                                // Set the top property to the document scrollTop minus calculated topOffset.
                                //
                                "top": $doc.scrollTop() - topOffset + 'px',
                                //
                                // Fade the modal out, by using the opacity property.
                                //
                                "opacity": 0

                            },
                            /*
             * Fade speed.
             */
                            options.animationSpeed / 2,
                            /*
             * End of animation callback.
             */
                            function () {
                                //
                                // Set the css hidden options.
                                //
                                modal.css(cssOpts.close);

                            });
                        //
                        // Is the modal animation queued?
                        //
                        if (!modalQueued) {
                            //
                            // Oh, the modal(s) are mid animating.
                            // Let's delay the animation queue.
                            //
                            modalBg.delay(options.animationSpeed)
                                //
                                // Fade out the modal background.
                                //
                                .fadeOut(
                                    /*
               * Animation speed.
               */
                                    options.animationSpeed,
                                    /*
              * End of animation callback.
              */
                                    function () {
                                        //
                                        // Trigger the modal 'closed' event.
                                        // This should trigger any method set in the options.closed property.
                                        //
                                        modal.trigger('reveal:closed');

                                    });

                        } else {
                            //
                            // We're not mid queue.
                            // Trigger the modal 'closed' event.
                            // This should trigger any method set in the options.closed propety.
                            //
                            modal.trigger('reveal:closed');

                        } // end if !modalQueued

                    } // end if animation 'fadeAndPop'

                    //
                    // Are we using the 'fade' animation.
                    //
                    if (options.animation === "fade") {
                        //
                        // Yes, we're using the 'fade' animation.
                        //
                        modal.animate({"opacity": 0},
                            /*
               * Animation speed.
               */
                            options.animationSpeed,
                            /*
               * End of animation callback.
               */
                            function () {
                                //
                                // Set the css close options.
                                //
                                modal.css(cssOpts.close);

                            }); // end animate

                        //
                        // Are we mid animating the modal(s)?
                        //
                        if (!modalQueued) {
                            //
                            // Oh, the modal(s) are mid animating.
                            // Let's delay the animation queue.
                            //
                            modalBg.delay(options.animationSpeed)
                                //
                                // Let's fade out the modal background element.
                                //
                                .fadeOut(
                                    /*
               * Animation speed.
               */
                                    options.animationSpeed,
                                    /*
                 * End of animation callback.
                 */
                                    function () {
                                        //
                                        // Trigger the modal 'closed' event.
                                        // This should trigger any method set in the options.closed propety.
                                        //
                                        modal.trigger('reveal:closed');

                                    }); // end fadeOut

                        } else {
                            //
                            // We're not mid queue.
                            // Trigger the modal 'closed' event.
                            // This should trigger any method set in the options.closed propety.
                            //
                            modal.trigger('reveal:closed');

                        } // end if !modalQueued

                    } // end if animation 'fade'

                    //
                    // Are we not animating?
                    //
                    if (options.animation === "none") {
                        //
                        // We're not animating.
                        // Set the modal close css options.
                        //
                        modal.css(cssOpts.close);
                        //
                        // Is the modal in the middle of an animation queue?
                        //
                        if (!modalQueued) {
                            //
                            // It's not mid queueu. Just hide it.
                            //
                            modalBg.css({'display': 'none'});
                        }
                        //
                        // Trigger the modal 'closed' event.
                        // This should trigger any method set in the options.closed propety.
                        //
                        modal.trigger('reveal:closed');

                    } // end if not animating
                    //
                    // Reset the modalQueued variable.
                    //
                    modalQueued = false;
                } // end if !locked

            } // end closeAnimation

            /**
             * Destroys the modal and it's events.
             *
             * @method destroy
             */
            function destroy() {
                //
                // Unbind all .reveal events from the modal.
                //
                modal.unbind('.reveal');
                //
                // Unbind all .reveal events from the modal background.
                //
                modalBg.unbind('.reveal');
                //
                // Unbind all .reveal events from the modal 'close' button.
                //
                $closeButton.unbind('.reveal');
                //
                // Unbind all .reveal events from the body.
                //
                $('body').unbind('.reveal');

            }

            function closeVideos() {
                var video = modal.find('.flex-video'),
                    iframe = video.find('iframe');
                if (iframe.length > 0) {
                    iframe.data("src", iframe.attr("src"));
                    iframe.attr("src", "");
                    video.fadeOut(100);
                }
            }

            //
            // Bind the modal 'close' event
            //
            modal.bind('reveal:close.reveal', closeAnimation);
            modal.bind('reveal:closed.reveal', closeVideos);
            //
            // Bind the modal 'opened' + 'closed' event
            // Calls the unlockModal method.
            //
            modal.bind('reveal:opened.reveal reveal:closed.reveal', unlockModal);
            //
            // Bind the modal 'closed' event.
            // Calls the destroy method.
            //
            modal.bind('reveal:closed.reveal', destroy);
            //
            // Bind the modal 'open' event
            // Handled by the options.open property function.
            //
            modal.bind('reveal:open.reveal', options.open);
            //
            // Bind the modal 'opened' event.
            // Handled by the options.opened property function.
            //
            modal.bind('reveal:opened.reveal', options.opened);
            //
            // Bind the modal 'close' event.
            // Handled by the options.close property function.
            //
            modal.bind('reveal:close.reveal', options.close);
            //
            // Bind the modal 'closed' event.
            // Handled by the options.closed property function.
            //
            modal.bind('reveal:closed.reveal', options.closed);

            //
            // We're running this for the first time.
            // Trigger the modal 'open' event.
            //
            modal.trigger('reveal:open');

            //
            // Get the closeButton variable element(s).
            //
            $closeButton = $('.' + options.dismissModalClass)
                //
                // Bind the element 'click' event and handler.
                //
                .bind('click.reveal', function () {
                    //
                    // Trigger the modal 'close' event.
                    //
                    modal.trigger('reveal:close');

                });

            //
            // Should we close the modal background on click?
            //
            if (options.closeOnBackgroundClick) {
                //
                // Yes, close the modal background on 'click'
                // Set the modal background css 'cursor' propety to pointer.
                // Adds a pointer symbol when you mouse over the modal background.
                //
                modalBg.css({"cursor": "pointer"});
                //
                // Bind a 'click' event handler to the modal background.
                //
                modalBg.bind('click.reveal', function () {
                    //
                    // Trigger the modal 'close' event.
                    //
                    modal.trigger('reveal:close');

                });

            }

            //
            // Bind keyup functions on the body element.
            // We'll want to close the modal when the 'escape' key is hit.
            //
            $('body').bind('keyup.reveal', function (event) {
                //
                // Did the escape key get triggered?
                //
                if (event.which === 27) { // 27 is the keycode for the Escape key
                    //
                    // Escape key was triggered.
                    // Trigger the modal 'close' event.
                    //
                    modal.trigger('reveal:close');
                }

            }); // end $(body)

        }); // end this.each

    }; // end $.fn

}(jQuery));
;(function ($, window, document, undefined) {
    'use strict';

    var settings = {
            callback: $.noop,
            deep_linking: true,
            init: false
        },

        methods = {
            init: function (options) {
                settings = $.extend({}, settings, options);

                return this.each(function () {
                    if (!settings.init) methods.events();

                    if (settings.deep_linking) methods.from_hash();
                });
            },

            events: function () {
                $(document).on('click.fndtn', '.tabs a', function (e) {
                    methods.set_tab($(this).parent('dd, li'), e);
                });

                settings.init = true;
            },

            set_tab: function ($tab, e) {
                var $activeTab = $tab.closest('dl, ul').find('.active'),
                    target = $tab.children('a').attr("href"),
                    hasHash = /^#/.test(target),
                    $content = $(target + 'Tab');

                if (hasHash && $content.length > 0) {
                    // Show tab content
                    if (e && !settings.deep_linking) e.preventDefault();
                    $content.closest('.tabs-content').children('li').removeClass('active').hide();
                    $content.css('display', 'block').addClass('active');
                }

                // Make active tab
                $activeTab.removeClass('active');
                $tab.addClass('active');

                settings.callback();
            },

            from_hash: function () {
                var hash = window.location.hash;
                if (hash != '') {
                    var $tab = $('a[href="' + hash + '"]');
                    $tab.trigger('click.fndtn');
                }
            }
        }

    $.fn.foundationTabs = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.foundationTabs');
        }
    };
}(jQuery, this, this.document));
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function (window, document, $) {

    var isInputSupported = 'placeholder' in document.createElement('input'),
        isTextareaSupported = 'placeholder' in document.createElement('textarea'),
        prototype = $.fn,
        valHooks = $.valHooks,
        hooks,
        placeholder;

    if (isInputSupported && isTextareaSupported) {

        placeholder = prototype.placeholder = function () {
            return this;
        };

        placeholder.input = placeholder.textarea = true;

    } else {

        placeholder = prototype.placeholder = function () {
            var $this = this;
            $this
                .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
                .not('.placeholder')
                .bind({
                    'focus.placeholder': clearPlaceholder,
                    'blur.placeholder': setPlaceholder
                })
                .data('placeholder-enabled', true)
                .trigger('blur.placeholder');
            return $this;
        };

        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;

        hooks = {
            'get': function (element) {
                var $element = $(element);
                return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
            },
            'set': function (element, value) {
                var $element = $(element);
                if (!$element.data('placeholder-enabled')) {
                    return element.value = value;
                }
                if (value == '') {
                    element.value = value;
                    // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
                    if (element != document.activeElement) {
                        // We can't use `triggerHandler` here because of dummy text/password inputs :(
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass('placeholder')) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
                return $element;
            }
        };

        isInputSupported || (valHooks.input = hooks);
        isTextareaSupported || (valHooks.textarea = hooks);

        $(function () {
            // Look for forms
            $(document).delegate('form', 'submit.placeholder', function () {
                // Clear the placeholder values so they don't get submitted
                var $inputs = $('.placeholder', this).each(clearPlaceholder);
                setTimeout(function () {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });

        // Clear placeholder values upon page reload
        $(window).bind('beforeunload.placeholder', function () {
            $('.placeholder').each(function () {
                this.value = '';
            });
        });

    }

    function args(elem) {
        // Return an object of element attributes
        var newAttrs = {},
            rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function (i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }

    function clearPlaceholder(event, value) {
        var input = this,
            $input = $(input);
        if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
            if ($input.data('placeholder-password')) {
                $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                // If `clearPlaceholder` was called from `$.valHooks.input.set`
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = '';
                $input.removeClass('placeholder');
                input == document.activeElement && input.select();
            }
        }
    }

    function setPlaceholder() {
        var $replacement,
            input = this,
            $input = $(input),
            $origInput = $input,
            id = this.id;
        if (input.value == '') {
            if (input.type == 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().attr({'type': 'text'});
                    } catch (e) {
                        $replacement = $('<input>').attr($.extend(args(this), {'type': 'text'}));
                    }
                    $replacement
                        .removeAttr('name')
                        .data({
                            'placeholder-password': true,
                            'placeholder-id': id
                        })
                        .bind('focus.placeholder', clearPlaceholder);
                    $input
                        .data({
                            'placeholder-textinput': $replacement,
                            'placeholder-id': id
                        })
                        .before($replacement);
                }
                $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
                // Note: `$input[0] != input` now!
            }
            $input.addClass('placeholder');
            $input[0].value = $input.attr('placeholder');
        } else {
            $input.removeClass('placeholder');
        }
    }

}(this, document, jQuery));
/*
 * jQuery Reveal Plugin 1.1
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
/*globals jQuery */

(function ($) {
    'use strict';
    //
    // Global variable.
    // Helps us determine if the current modal is being queued for display.
    //
    var modalQueued = false;

    //
    // Bind the live 'click' event to all anchor elemnets with the data-reveal-id attribute.
    //
    $(document).on('click', 'a[data-reveal-id]', function (event) {
        //
        // Prevent default action of the event.
        //
        event.preventDefault();
        //
        // Get the clicked anchor data-reveal-id attribute value.
        //
        var modalLocation = $(this).attr('data-reveal-id');
        //
        // Find the element with that modalLocation id and call the reveal plugin.
        //
        $('#' + modalLocation).reveal($(this).data());

    });

    /**
     * @module reveal
     * @property {Object} [options] Reveal options
     */
    $.fn.reveal = function (options) {
        /*
       * Cache the document object.
       */
        var $doc = $(document),
            /*
         * Default property values.
         */
            defaults = {
                /**
                 * Possible options: fade, fadeAndPop, none
                 *
                 * @property animation
                 * @type {String}
                 * @default fadeAndPop
                 */
                animation: 'fadeAndPop',
                /**
                 * Speed at which the reveal should show. How fast animtions are.
                 *
                 * @property animationSpeed
                 * @type {Integer}
                 * @default 300
                 */
                animationSpeed: 300,
                /**
                 * Should the modal close when the background is clicked?
                 *
                 * @property closeOnBackgroundClick
                 * @type {Boolean}
                 * @default true
                 */
                closeOnBackgroundClick: true,
                /**
                 * Specify a class name for the 'close modal' element.
                 * This element will close an open modal.
                 *
                 @example
                 <a href='#close' class='close-reveal-modal'>Close Me</a>
                 *
                 * @property dismissModalClass
                 * @type {String}
                 * @default close-reveal-modal
                 */
                dismissModalClass: 'close-reveal-modal',
                /**
                 * Specify a callback function that triggers 'before' the modal opens.
                 *
                 * @property open
                 * @type {Function}
                 * @default function(){}
                 */
                open: $.noop,
                /**
                 * Specify a callback function that triggers 'after' the modal is opened.
                 *
                 * @property opened
                 * @type {Function}
                 * @default function(){}
                 */
                opened: $.noop,
                /**
                 * Specify a callback function that triggers 'before' the modal prepares to close.
                 *
                 * @property close
                 * @type {Function}
                 * @default function(){}
                 */
                close: $.noop,
                /**
                 * Specify a callback function that triggers 'after' the modal is closed.
                 *
                 * @property closed
                 * @type {Function}
                 * @default function(){}
                 */
                closed: $.noop
            }
        ;
        //
        // Extend the default options.
        // This replaces the passed in option (options) values with default values.
        //
        options = $.extend({}, defaults, options);

        //
        // Apply the plugin functionality to each element in the jQuery collection.
        //
        return this.not('.reveal-modal.open').each(function () {
            //
            // Cache the modal element
            //
            var modal = $(this),
                //
                // Get the current css 'top' property value in decimal format.
                //
                topMeasure = parseInt(modal.css('top'), 10),
                //
                // Calculate the top offset.
                //
                topOffset = modal.height() + topMeasure,
                //
                // Helps determine if the modal is locked.
                // This way we keep the modal from triggering while it's in the middle of animating.
                //
                locked = false,
                //
                // Get the modal background element.
                //
                modalBg = $('.reveal-modal-bg'),
                //
                // Show modal properties
                //
                cssOpts = {
                    //
                    // Used, when we show the modal.
                    //
                    open: {
                        //
                        // Set the 'top' property to the document scroll minus the calculated top offset.
                        //
                        'top': 0,
                        //
                        // Opacity gets set to 0.
                        //
                        'opacity': 0,
                        //
                        // Show the modal
                        //
                        'visibility': 'visible',
                        //
                        // Ensure it's displayed as a block element.
                        //
                        'display': 'block'
                    },
                    //
                    // Used, when we hide the modal.
                    //
                    close: {
                        //
                        // Set the default 'top' property value.
                        //
                        'top': topMeasure,
                        //
                        // Has full opacity.
                        //
                        'opacity': 1,
                        //
                        // Hide the modal
                        //
                        'visibility': 'hidden',
                        //
                        // Ensure the elment is hidden.
                        //
                        'display': 'none'
                    }

                },
                //
                // Initial closeButton variable.
                //
                $closeButton
            ;

            //
            // Do we have a modal background element?
            //
            if (modalBg.length === 0) {
                //
                // No we don't. So, let's create one.
                //
                modalBg = $('<div />', {'class': 'reveal-modal-bg'})
                    //
                    // Then insert it after the modal element.
                    //
                    .insertAfter(modal);
                //
                // Now, fade it out a bit.
                //
                modalBg.fadeTo('fast', 0.8);
            }

            //
            // Helper Methods
            //

            /**
             * Unlock the modal for animation.
             *
             * @method unlockModal
             */
            function unlockModal() {
                locked = false;
            }

            /**
             * Lock the modal to prevent further animation.
             *
             * @method lockModal
             */
            function lockModal() {
                locked = true;
            }

            /**
             * Closes all open modals.
             *
             * @method closeOpenModal
             */
            function closeOpenModals() {
                //
                // Get all reveal-modal elements with the .open class.
                //
                var $openModals = $(".reveal-modal.open");
                //
                // Do we have modals to close?
                //
                if ($openModals.length === 1) {
                    //
                    // Set the modals for animation queuing.
                    //
                    modalQueued = true;
                    //
                    // Trigger the modal close event.
                    //
                    $openModals.trigger("reveal:close");
                }

            }

            /**
             * Animates the modal opening.
             * Handles the modal 'open' event.
             *
             * @method openAnimation
             */
            function openAnimation() {
                //
                // First, determine if we're in the middle of animation.
                //
                if (!locked) {
                    //
                    // We're not animating, let's lock the modal for animation.
                    //
                    lockModal();
                    //
                    // Close any opened modals.
                    //
                    closeOpenModals();
                    //
                    // Now, add the open class to this modal.
                    //
                    modal.addClass("open");

                    //
                    // Are we executing the 'fadeAndPop' animation?
                    //
                    if (options.animation === "fadeAndPop") {
                        //
                        // Yes, we're doing the 'fadeAndPop' animation.
                        // Okay, set the modal css properties.
                        //
                        //
                        // Set the 'top' property to the document scroll minus the calculated top offset.
                        //
                        cssOpts.open.top = $doc.scrollTop() - topOffset;
                        //
                        // Flip the opacity to 0.
                        //
                        cssOpts.open.opacity = 0;
                        //
                        // Set the css options.
                        //
                        modal.css(cssOpts.open);
                        //
                        // Fade in the background element, at half the speed of the modal element.
                        // So, faster than the modal element.
                        //
                        modalBg.fadeIn(options.animationSpeed / 2);

                        //
                        // Let's delay the next animation queue.
                        // We'll wait until the background element is faded in.
                        //
                        modal.delay(options.animationSpeed / 2)
                            //
                            // Animate the following css properties.
                            //
                            .animate({
                                    //
                                    // Set the 'top' property to the document scroll plus the calculated top measure.
                                    //
                                    "top": $doc.scrollTop() + topMeasure + 'px',
                                    //
                                    // Set it to full opacity.
                                    //
                                    "opacity": 1

                                },
                                /*
             * Fade speed.
             */
                                options.animationSpeed,
                                /*
             * End of animation callback.
             */
                                function () {
                                    //
                                    // Trigger the modal reveal:opened event.
                                    // This should trigger the functions set in the options.opened property.
                                    //
                                    modal.trigger('reveal:opened');

                                }); // end of animate.

                    } // end if 'fadeAndPop'

                    //
                    // Are executing the 'fade' animation?
                    //
                    if (options.animation === "fade") {
                        //
                        // Yes, were executing 'fade'.
                        // Okay, let's set the modal properties.
                        //
                        cssOpts.open.top = $doc.scrollTop() + topMeasure;
                        //
                        // Flip the opacity to 0.
                        //
                        cssOpts.open.opacity = 0;
                        //
                        // Set the css options.
                        //
                        modal.css(cssOpts.open);
                        //
                        // Fade in the modal background at half the speed of the modal.
                        // So, faster than modal.
                        //
                        modalBg.fadeIn(options.animationSpeed / 2);

                        //
                        // Delay the modal animation.
                        // Wait till the modal background is done animating.
                        //
                        modal.delay(options.animationSpeed / 2)
                            //
                            // Now animate the modal.
                            //
                            .animate({
                                    //
                                    // Set to full opacity.
                                    //
                                    "opacity": 1
                                },

                                /*
             * Animation speed.
             */
                                options.animationSpeed,

                                /*
             * End of animation callback.
             */
                                function () {
                                    //
                                    // Trigger the modal reveal:opened event.
                                    // This should trigger the functions set in the options.opened property.
                                    //
                                    modal.trigger('reveal:opened');

                                });

                    } // end if 'fade'

                    //
                    // Are we not animating?
                    //
                    if (options.animation === "none") {
                        //
                        // We're not animating.
                        // Okay, let's set the modal css properties.
                        //
                        //
                        // Set the top property.
                        //
                        cssOpts.open.top = $doc.scrollTop() + topMeasure;
                        //
                        // Set the opacity property to full opacity, since we're not fading (animating).
                        //
                        cssOpts.open.opacity = 1;
                        //
                        // Set the css property.
                        //
                        modal.css(cssOpts.open);
                        //
                        // Show the modal Background.
                        //
                        modalBg.css({"display": "block"});
                        //
                        // Trigger the modal opened event.
                        //
                        modal.trigger('reveal:opened');

                    } // end if animating 'none'

                }// end if !locked

            }// end openAnimation


            function openVideos() {
                var video = modal.find('.flex-video'),
                    iframe = video.find('iframe');
                if (iframe.length > 0) {
                    iframe.attr("src", iframe.data("src"));
                    video.fadeIn(100);
                }
            }

            //
            // Bind the reveal 'open' event.
            // When the event is triggered, openAnimation is called
            // along with any function set in the options.open property.
            //
            modal.bind('reveal:open.reveal', openAnimation);
            modal.bind('reveal:open.reveal', openVideos);

            /**
             * Closes the modal element(s)
             * Handles the modal 'close' event.
             *
             * @method closeAnimation
             */
            function closeAnimation() {
                //
                // First, determine if we're in the middle of animation.
                //
                if (!locked) {
                    //
                    // We're not animating, let's lock the modal for animation.
                    //
                    lockModal();
                    //
                    // Clear the modal of the open class.
                    //
                    modal.removeClass("open");

                    //
                    // Are we using the 'fadeAndPop' animation?
                    //
                    if (options.animation === "fadeAndPop") {
                        //
                        // Yes, okay, let's set the animation properties.
                        //
                        modal.animate({
                                //
                                // Set the top property to the document scrollTop minus calculated topOffset.
                                //
                                "top": $doc.scrollTop() - topOffset + 'px',
                                //
                                // Fade the modal out, by using the opacity property.
                                //
                                "opacity": 0

                            },
                            /*
             * Fade speed.
             */
                            options.animationSpeed / 2,
                            /*
             * End of animation callback.
             */
                            function () {
                                //
                                // Set the css hidden options.
                                //
                                modal.css(cssOpts.close);

                            });
                        //
                        // Is the modal animation queued?
                        //
                        if (!modalQueued) {
                            //
                            // Oh, the modal(s) are mid animating.
                            // Let's delay the animation queue.
                            //
                            modalBg.delay(options.animationSpeed)
                                //
                                // Fade out the modal background.
                                //
                                .fadeOut(
                                    /*
               * Animation speed.
               */
                                    options.animationSpeed,
                                    /*
              * End of animation callback.
              */
                                    function () {
                                        //
                                        // Trigger the modal 'closed' event.
                                        // This should trigger any method set in the options.closed property.
                                        //
                                        modal.trigger('reveal:closed');

                                    });

                        } else {
                            //
                            // We're not mid queue.
                            // Trigger the modal 'closed' event.
                            // This should trigger any method set in the options.closed propety.
                            //
                            modal.trigger('reveal:closed');

                        } // end if !modalQueued

                    } // end if animation 'fadeAndPop'

                    //
                    // Are we using the 'fade' animation.
                    //
                    if (options.animation === "fade") {
                        //
                        // Yes, we're using the 'fade' animation.
                        //
                        modal.animate({"opacity": 0},
                            /*
               * Animation speed.
               */
                            options.animationSpeed,
                            /*
               * End of animation callback.
               */
                            function () {
                                //
                                // Set the css close options.
                                //
                                modal.css(cssOpts.close);

                            }); // end animate

                        //
                        // Are we mid animating the modal(s)?
                        //
                        if (!modalQueued) {
                            //
                            // Oh, the modal(s) are mid animating.
                            // Let's delay the animation queue.
                            //
                            modalBg.delay(options.animationSpeed)
                                //
                                // Let's fade out the modal background element.
                                //
                                .fadeOut(
                                    /*
               * Animation speed.
               */
                                    options.animationSpeed,
                                    /*
                 * End of animation callback.
                 */
                                    function () {
                                        //
                                        // Trigger the modal 'closed' event.
                                        // This should trigger any method set in the options.closed propety.
                                        //
                                        modal.trigger('reveal:closed');

                                    }); // end fadeOut

                        } else {
                            //
                            // We're not mid queue.
                            // Trigger the modal 'closed' event.
                            // This should trigger any method set in the options.closed propety.
                            //
                            modal.trigger('reveal:closed');

                        } // end if !modalQueued

                    } // end if animation 'fade'

                    //
                    // Are we not animating?
                    //
                    if (options.animation === "none") {
                        //
                        // We're not animating.
                        // Set the modal close css options.
                        //
                        modal.css(cssOpts.close);
                        //
                        // Is the modal in the middle of an animation queue?
                        //
                        if (!modalQueued) {
                            //
                            // It's not mid queueu. Just hide it.
                            //
                            modalBg.css({'display': 'none'});
                        }
                        //
                        // Trigger the modal 'closed' event.
                        // This should trigger any method set in the options.closed propety.
                        //
                        modal.trigger('reveal:closed');

                    } // end if not animating
                    //
                    // Reset the modalQueued variable.
                    //
                    modalQueued = false;
                } // end if !locked

            } // end closeAnimation

            /**
             * Destroys the modal and it's events.
             *
             * @method destroy
             */
            function destroy() {
                //
                // Unbind all .reveal events from the modal.
                //
                modal.unbind('.reveal');
                //
                // Unbind all .reveal events from the modal background.
                //
                modalBg.unbind('.reveal');
                //
                // Unbind all .reveal events from the modal 'close' button.
                //
                $closeButton.unbind('.reveal');
                //
                // Unbind all .reveal events from the body.
                //
                $('body').unbind('.reveal');

            }

            function closeVideos() {
                var video = modal.find('.flex-video'),
                    iframe = video.find('iframe');
                if (iframe.length > 0) {
                    iframe.data("src", iframe.attr("src"));
                    iframe.attr("src", "");
                    video.fadeOut(100);
                }
            }

            //
            // Bind the modal 'close' event
            //
            modal.bind('reveal:close.reveal', closeAnimation);
            modal.bind('reveal:closed.reveal', closeVideos);
            //
            // Bind the modal 'opened' + 'closed' event
            // Calls the unlockModal method.
            //
            modal.bind('reveal:opened.reveal reveal:closed.reveal', unlockModal);
            //
            // Bind the modal 'closed' event.
            // Calls the destroy method.
            //
            modal.bind('reveal:closed.reveal', destroy);
            //
            // Bind the modal 'open' event
            // Handled by the options.open property function.
            //
            modal.bind('reveal:open.reveal', options.open);
            //
            // Bind the modal 'opened' event.
            // Handled by the options.opened property function.
            //
            modal.bind('reveal:opened.reveal', options.opened);
            //
            // Bind the modal 'close' event.
            // Handled by the options.close property function.
            //
            modal.bind('reveal:close.reveal', options.close);
            //
            // Bind the modal 'closed' event.
            // Handled by the options.closed property function.
            //
            modal.bind('reveal:closed.reveal', options.closed);

            //
            // We're running this for the first time.
            // Trigger the modal 'open' event.
            //
            modal.trigger('reveal:open');

            //
            // Get the closeButton variable element(s).
            //
            $closeButton = $('.' + options.dismissModalClass)
                //
                // Bind the element 'click' event and handler.
                //
                .bind('click.reveal', function () {
                    //
                    // Trigger the modal 'close' event.
                    //
                    modal.trigger('reveal:close');

                });

            //
            // Should we close the modal background on click?
            //
            if (options.closeOnBackgroundClick) {
                //
                // Yes, close the modal background on 'click'
                // Set the modal background css 'cursor' propety to pointer.
                // Adds a pointer symbol when you mouse over the modal background.
                //
                modalBg.css({"cursor": "pointer"});
                //
                // Bind a 'click' event handler to the modal background.
                //
                modalBg.bind('click.reveal', function () {
                    //
                    // Trigger the modal 'close' event.
                    //
                    modal.trigger('reveal:close');

                });

            }

            //
            // Bind keyup functions on the body element.
            // We'll want to close the modal when the 'escape' key is hit.
            //
            $('body').bind('keyup.reveal', function (event) {
                //
                // Did the escape key get triggered?
                //
                if (event.which === 27) { // 27 is the keycode for the Escape key
                    //
                    // Escape key was triggered.
                    // Trigger the modal 'close' event.
                    //
                    modal.trigger('reveal:close');
                }

            }); // end $(body)

        }); // end this.each

    }; // end $.fn

}(jQuery));
;(function ($, window, document, undefined) {
    'use strict';

    var settings = {
            callback: $.noop,
            deep_linking: true,
            init: false
        },

        methods = {
            init: function (options) {
                settings = $.extend({}, settings, options);

                return this.each(function () {
                    if (!settings.init) methods.events();

                    if (settings.deep_linking) methods.from_hash();
                });
            },

            events: function () {
                $(document).on('click.fndtn', '.tabs a', function (e) {
                    methods.set_tab($(this).parent('dd, li'), e);
                });

                settings.init = true;
            },

            set_tab: function ($tab, e) {
                var $activeTab = $tab.closest('dl, ul').find('.active'),
                    target = $tab.children('a').attr("href"),
                    hasHash = /^#/.test(target),
                    $content = $(target + 'Tab');

                if (hasHash && $content.length > 0) {
                    // Show tab content
                    if (e && !settings.deep_linking) e.preventDefault();
                    $content.closest('.tabs-content').children('li').removeClass('active').hide();
                    $content.css('display', 'block').addClass('active');
                }

                // Make active tab
                $activeTab.removeClass('active');
                $tab.addClass('active');

                settings.callback();
            },

            from_hash: function () {
                var hash = window.location.hash;
                if (hash != '') {
                    var $tab = $('a[href="' + hash + '"]');
                    $tab.trigger('click.fndtn');
                }
            }
        }

    $.fn.foundationTabs = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.foundationTabs');
        }
    };
}(jQuery, this, this.document));
/*! $.noUiSlider
 @version 5.0.0
 @author Leon Gersen https://twitter.com/LeonGersen
 @license WTFPL http://www.wtfpl.net/about/
 @documentation http://refreshless.com/nouislider/
*/

// ==ClosureCompiler==
// @externs_url http://refreshless.com/externs/jquery-1.8.js
// @compilation_level ADVANCED_OPTIMIZATIONS
// @warning_level VERBOSE
// ==/ClosureCompiler==

/*jshint laxcomma: true */
/*jshint smarttabs: true */
/*jshint sub: true */

/*jslint browser: true */
/*jslint continue: true */
/*jslint plusplus: true */
/*jslint white: true */
/*jslint sub: true */

(function ($) {

    'use strict';

    if ($['zepto'] && !$.fn.removeData) {
        throw new ReferenceError('Zepto is loaded without the data module.');
    }

    $.fn['noUiSlider'] = function (options, rebuild) {

        var
            // Cache the document and body selectors;
            doc = $(document)
            , body = $('body')

            // Namespace for binding and unbinding slider events;
            , namespace = '.nui'

            // Copy of the current value function;
            , $VAL = $.fn.val

            // Re-usable list of classes;
            , clsList = [
                /*  0 */  'noUi-base'
                /*  1 */, 'noUi-origin'
                /*  2 */, 'noUi-handle'
                /*  3 */, 'noUi-input'
                /*  4 */, 'noUi-active'
                /*  5 */, 'noUi-state-tap'
                /*  6 */, 'noUi-target'
                /*  7 */, '-lower'
                /*  8 */, '-upper'
                /*  9 */, 'noUi-connect'
                /* 10 */, 'noUi-horizontal'
                /* 11 */, 'noUi-vertical'
                /* 12 */, 'noUi-background'
                /* 13 */, 'noUi-stacking'
                /* 14 */, 'noUi-block'
                /* 15 */, 'noUi-state-blocked'
                /* 16 */, 'noUi-ltr'
                /* 17 */, 'noUi-rtl'
                /* 18 */, 'noUi-dragable'
                /* 19 */, 'noUi-extended'
                /* 20 */, 'noUi-state-drag'
            ]

            // Determine the events to bind. IE11 implements pointerEvents without
            // a prefix, which breaks compatibility with the IE10 implementation.
            , actions = window.navigator['pointerEnabled'] ? {
                start: 'pointerdown'
                , move: 'pointermove'
                , end: 'pointerup'
            } : window.navigator['msPointerEnabled'] ? {
                start: 'MSPointerDown'
                , move: 'MSPointerMove'
                , end: 'MSPointerUp'
            } : {
                start: 'mousedown touchstart'
                , move: 'mousemove touchmove'
                , end: 'mouseup touchend'
            };


// Percentage calculation

        // (percentage) How many percent is this value of this range?
        function fromPercentage(range, value) {
            return (value * 100) / (range[1] - range[0]);
        }

        // (percentage) Where is this value on this range?
        function toPercentage(range, value) {
            return fromPercentage(range, range[0] < 0 ?
                value + Math.abs(range[0]) :
                value - range[0]);
        }

        // (value) How much is this percentage on this range?
        function isPercentage(range, value) {
            return ((value * (range[1] - range[0])) / 100) + range[0];
        }


// Type tests

        // Test in an object is an instance of jQuery or Zepto.
        function isInstance(a) {
            return a instanceof $ || ($['zepto'] && $['zepto']['isZ'](a));
        }

        // Checks whether a value is numerical.
        function isNumeric(a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
        }


// General helper functions

        // Test an array of objects, and calls them if they are a function.
        function call(functions, scope) {

            // Allow the passing of an unwrapped function.
            // Leaves other code a more comprehensible.
            if (!$.isArray(functions)) {
                functions = [functions];
            }

            $.each(functions, function () {
                if (typeof this === 'function') {
                    this.call(scope);
                }
            });
        }

        // Returns a proxy to set a target using the public value method.
        function setN(target, number) {

            return function () {

                // Determine the correct position to set,
                // leave the other one unchanged.
                var val = [null, null];
                val[number] = $(this).val();

                // Trigger the 'set' callback
                target.val(val, true);
            };
        }

        // Round a value to the closest 'to'.
        function closest(value, to) {
            return Math.round(value / to) * to;
        }

        // Format output value to specified standards.
        function format(value, options) {

            // Round the value to the resolution that was set
            // with the serialization options.
            value = value.toFixed(options['decimals']);

            // Rounding away decimals might cause a value of -0
            // when using very small ranges. Remove those cases.
            if (parseFloat(value) === 0) {
                value = value.replace('-0', '0');
            }

            // Apply the proper decimal mark to the value.
            return value.replace('.', options['serialization']['mark']);
        }

        // Determine the handle closest to an event.
        function closestHandle(handles, location, style) {

            if (handles.length === 1) {
                return handles[0];
            }

            var total = handles[0].offset()[style] +
                handles[1].offset()[style];

            return handles[location < total / 2 ? 0 : 1];
        }

        // Round away small numbers in floating point implementation.
        function digits(value, round) {
            return parseFloat(value.toFixed(round));
        }

// Event abstraction

        // Provide a clean event with standardized offset values.
        function fixEvent(e) {

            // Prevent scrolling and panning on touch events, while
            // attempting to slide. The tap event also depends on this.
            e.preventDefault();

            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf('touch') === 0
                , mouse = e.type.indexOf('mouse') === 0
                , pointer = e.type.indexOf('pointer') === 0
                , x, y, event = e;

            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf('MSPointer') === 0) {
                pointer = true;
            }

            // Get the originalEvent, if the event has been wrapped
            // by jQuery. Zepto doesn't wrap the event.
            if (e.originalEvent) {
                e = e.originalEvent;
            }

            if (touch) {
                // noUiSlider supports one movement at a time,
                // so we can select the first 'changedTouch'.
                x = e.changedTouches[0].pageX;
                y = e.changedTouches[0].pageY;
            }
            if (mouse || pointer) {

                // Polyfill the pageXOffset and pageYOffset
                // variables for IE7 and IE8;
                if (!pointer && window.pageXOffset === undefined) {
                    window.pageXOffset = document.documentElement.scrollLeft;
                    window.pageYOffset = document.documentElement.scrollTop;
                }

                x = e.clientX + window.pageXOffset;
                y = e.clientY + window.pageYOffset;
            }

            return $.extend(event, {
                'pointX': x
                , 'pointY': y
                , cursor: mouse
            });
        }

        // Handler for attaching events trough a proxy
        function attach(events, element, callback, pass) {

            var target = pass.target;

            // Add the noUiSlider namespace to all events.
            events = events.replace(/\s/g, namespace + ' ') + namespace;

            // Bind a closure on the target.
            return element.on(events, function (e) {

                // jQuery and Zepto handle unset attributes differently.
                var disabled = target.attr('disabled');
                disabled = !(disabled === undefined || disabled === null);

                // Test if there is anything that should prevent an event
                // from being handled, such as a disabled state or an active
                // 'tap' transition.
                if (target.hasClass('noUi-state-tap') || disabled) {
                    return false;
                }

                // Call the event handler with three arguments:
                // - The event;
                // - An object with data for the event;
                // - The slider options;
                // Having the slider options as a function parameter prevents
                // getting it in every function, which muddies things up.
                callback(
                    fixEvent(e)
                    , pass
                    , target.data('base').data('options')
                );
            });
        }


// Serialization and value storage

        // Store a value on all serialization targets, or get the current value.
        function serialize(a) {

            /*jshint validthis: true */

            // Re-scope target for availability within .each;
            var target = this.target;

            // Get the value for this handle
            if (a === undefined) {
                return this.element.data('value');
            }

            // Write the value to all serialization objects
            // or store a new value on the handle
            if (a === true) {
                a = this.element.data('value');
            } else {
                this.element.data('value', a);
            }

            // Prevent a serialization call if the value wasn't initialized.
            if (a === undefined) {
                return;
            }

            // If the provided element was a function,
            // call it with the slider as scope. Otherwise,
            // simply call the function on the object.
            $.each(this.elements, function () {
                if (typeof this === 'function') {
                    this.call(target, a);
                } else {
                    this[0][this[1]](a);
                }
            });
        }

        // Map serialization to [ element, method ]. Attach events where required.
        function storeElement(handle, item, number) {

            // Add a change event to the supplied jQuery objects,
            // which triggers the value-setting function on the target.
            if (isInstance(item)) {

                var elements = [], target = handle.data('target');

                // Link the field to the other handle if the
                // slider is inverted.
                if (handle.data('options').direction) {
                    number = number ? 0 : 1;
                }

                // Loop all items so the change event is properly bound,
                // and the items can individually be added to the array.
                item.each(function () {

                    // Bind the change event.
                    $(this).on('change' + namespace, setN(target, number));

                    // Store the element with the proper handler.
                    elements.push([$(this), 'val']);
                });

                return elements;
            }

            // Append a new input to the noUiSlider base.
            // Prevent the change event from flowing upward.
            if (typeof item === 'string') {

                item = [$('<input type="hidden" name="' + item + '">')
                    .appendTo(handle)
                    .addClass(clsList[3])
                    .change(function (e) {
                        e.stopPropagation();
                    }), 'val'];
            }

            return [item];
        }

        // Access point and abstraction for serialization.
        function store(handle, i, serialization) {

            var elements = [];

            // Loops all items in the provided serialization setting,
            // add the proper events to them or create new input fields,
            // and add them as data to the handle so they can be kept
            // in sync with the slider value.
            $.each(serialization['to'][i], function (index) {
                elements = elements.concat(
                    storeElement(handle, serialization['to'][i][index], i)
                );
            });

            return {
                element: handle
                , elements: elements
                , target: handle.data('target')
                , 'val': serialize
            };
        }


// Handle placement

        // Fire callback on unsuccessful handle movement.
        function block(base, stateless) {

            var target = base.data('target');

            if (!target.hasClass(clsList[14])) {

                // The visual effects should not always be applied.
                if (!stateless) {
                    target.addClass(clsList[15]);
                    setTimeout(function () {
                        target.removeClass(clsList[15]);
                    }, 450);
                }

                target.addClass(clsList[14]);
                call(base.data('options').block, target);
            }
        }

        // Change inline style and apply proper classes.
        function placeHandle(handle, to) {

            var settings = handle.data('options');

            to = digits(to, 7);

            // If the slider can move, remove the class
            // indicating the block state.
            handle.data('target').removeClass(clsList[14]);

            // Set handle to new location
            handle.css(settings['style'], to + '%').data('pct', to);

            // Force proper handle stacking
            if (handle.is(':first-child')) {
                handle.toggleClass(clsList[13], to > 50);
            }

            if (settings['direction']) {
                to = 100 - to;
            }

            // Write the value to the serialization object.
            handle.data('store').val(
                format(isPercentage(settings['range'], to), settings)
            );
        }

        // Test suggested values and apply margin, step.
        function setHandle(handle, to) {

            var base = handle.data('base'), settings = base.data('options'),
                handles = base.data('handles'), lower = 0, upper = 100;

            // Catch invalid user input
            if (!isNumeric(to)) {
                return false;
            }

            // Handle the step option.
            if (settings['step']) {
                to = closest(to, settings['step']);
            }

            if (handles.length > 1) {
                if (handle[0] !== handles[0][0]) {
                    lower = digits(handles[0].data('pct') + settings['margin'], 7);
                } else {
                    upper = digits(handles[1].data('pct') - settings['margin'], 7);
                }
            }

            // Limit position to boundaries. When the handles aren't set yet,
            // they return -1 as a percentage value.
            to = Math.min(Math.max(to, lower), upper < 0 ? 100 : upper);

            // Stop handling this call if the handle can't move past another.
            // Return an array containing the hit limit, so the caller can
            // provide feedback. ( block callback ).
            if (to === handle.data('pct')) {
                return [!lower ? false : lower, upper === 100 ? false : upper];
            }

            placeHandle(handle, to);
            return true;
        }

        // Handles movement by tapping
        function jump(base, handle, to, callbacks) {

            // Flag the slider as it is now in a transitional state.
            // Transition takes 300 ms, so re-enable the slider afterwards.
            base.addClass(clsList[5]);
            setTimeout(function () {
                base.removeClass(clsList[5]);
            }, 300);

            // Move the handle to the new position.
            setHandle(handle, to);

            // Trigger the 'slide' and 'set' callbacks,
            // pass the target so that it is 'this'.
            call(callbacks, base.data('target'));

            base.data('target').change();
        }


// Event handlers

        // Handle movement on document for handle and range drag.
        function move(event, Dt, Op) {

            // Map event movement to a slider percentage.
            var handles = Dt.handles, limits,
                proposal = event[Dt.point] - Dt.start[Dt.point];

            proposal = (proposal * 100) / Dt.size;

            if (handles.length === 1) {

                // Run handle placement, receive true for success or an
                // array with potential limits.
                limits = setHandle(handles[0], Dt.positions[0] + proposal);

                if (limits !== true) {

                    if ($.inArray(handles[0].data('pct'), limits) >= 0) {
                        block(Dt.base, !Op['margin']);
                    }
                    return;
                }

            } else {

                // Dragging the range could be implemented by forcing the
                // 'move' event on both handles, but this solution proved
                // lagging on slower devices, resulting in range errors. The
                // slightly ugly solution below is considerably faster, and
                // it can't move the handle out of sync. Bypass the standard
                // setting method, as other checks are needed.

                var l1, u1, l2, u2;

                // Round the proposal to the step setting.
                if (Op['step']) {
                    proposal = closest(proposal, Op['step']);
                }

                // Determine the new position, store it twice. Once for
                // limiting, once for checking whether placement should occur.
                l1 = l2 = Dt.positions[0] + proposal;
                u1 = u2 = Dt.positions[1] + proposal;

                // Round the values within a sensible range.
                if (l1 < 0) {
                    u1 += -1 * l1;
                    l1 = 0;
                } else if (u1 > 100) {
                    l1 -= (u1 - 100);
                    u1 = 100;
                }

                // Don't perform placement if no handles are to be changed.
                // Check if the lowest value is set to zero.
                if (l2 < 0 && !l1 && !handles[0].data('pct')) {
                    return;
                }
                // The highest value is limited to 100%.
                if (u1 === 100 && u2 > 100 && handles[1].data('pct') === 100) {
                    return;
                }

                placeHandle(handles[0], l1);
                placeHandle(handles[1], u1);
            }

            // Trigger the 'slide' event, if the handle was moved.
            call(Op['slide'], Dt.target);
        }

        // Unbind move events on document, call callbacks.
        function end(event, Dt, Op) {

            // The handle is no longer active, so remove the class.
            if (Dt.handles.length === 1) {
                Dt.handles[0].data('grab').removeClass(clsList[4]);
            }

            // Remove cursor styles and text-selection events bound to the body.
            if (event.cursor) {
                body.css('cursor', '').off(namespace);
            }

            // Unbind the move and end events, which are added on 'start'.
            doc.off(namespace);

            // Trigger the change event.
            Dt.target.removeClass(clsList[14] + ' ' + clsList[20]).change();

            // Trigger the 'end' callback.
            call(Op['set'], Dt.target);
        }

        // Bind move events on document.
        function start(event, Dt, Op) {

            // Mark the handle as 'active' so it can be styled.
            if (Dt.handles.length === 1) {
                Dt.handles[0].data('grab').addClass(clsList[4]);
            }

            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();

            // Attach the move event.
            attach(actions.move, doc, move, {
                start: event
                , base: Dt.base
                , target: Dt.target
                , handles: Dt.handles
                , positions: [Dt.handles[0].data('pct')
                    , Dt.handles[Dt.handles.length - 1].data('pct')]
                , point: Op['orientation'] ? 'pointY' : 'pointX'
                , size: Op['orientation'] ? Dt.base.height() : Dt.base.width()
            });

            // Unbind all movement when the drag ends.
            attach(actions.end, doc, end, {
                target: Dt.target
                , handles: Dt.handles
            });

            // Text selection isn't an issue on touch devices,
            // so adding additional callbacks isn't required.
            if (event.cursor) {

                // Prevent the 'I' cursor and extend the range-drag cursor.
                body.css('cursor', $(event.target).css('cursor'));

                // Mark the target with a dragging state.
                if (Dt.handles.length > 1) {
                    Dt.target.addClass(clsList[20]);
                }

                // Prevent text selection when dragging the handles.
                body.on('selectstart' + namespace, function () {
                    return false;
                });
            }
        }

        // Move closest handle to tapped location.
        function tap(event, Dt, Op) {

            var base = Dt.base, handle, to, point, size;

            // The tap event shouldn't propagate up to trigger 'edge'.
            event.stopPropagation();

            // Determine the direction of the slider.
            if (Op['orientation']) {
                point = event['pointY'];
                size = base.height();
            } else {
                point = event['pointX'];
                size = base.width();
            }

            // Find the closest handle and calculate the tapped point.
            handle = closestHandle(base.data('handles'), point, Op['style']);
            to = ((point - base.offset()[Op['style']]) * 100) / size;

            // The set handle to the new position.
            jump(base, handle, to, [Op['slide'], Op['set']]);
        }

        // Move handle to edges when target gets tapped.
        function edge(event, Dt, Op) {

            var handles = Dt.base.data('handles'), to, i;

            i = Op['orientation'] ? event['pointY'] : event['pointX'];
            i = i < Dt.base.offset()[Op['style']];

            to = i ? 0 : 100;
            i = i ? 0 : handles.length - 1;

            jump(Dt.base, handles[i], to, [Op['slide'], Op['set']]);
        }

// API

        // Validate and standardize input.
        function test(input, sliders) {

            /*	Every input option is tested and parsed. This'll prevent
		endless validation in internal methods. These tests are
		structured with an item for every option available. An
		option can be marked as required by setting the 'r' flag.
		The testing function is provided with three arguments:
			- The provided value for the option;
			- A reference to the options object;
			- The name for the option;

		The testing function returns false when an error is detected,
		or true when everything is OK. It can also modify the option
		object, to make sure all values can be correctly looped elsewhere. */

            function values(a) {

                if (a.length !== 2) {
                    return false;
                }

                // Convert the array to floats
                a = [parseFloat(a[0]), parseFloat(a[1])];

                // Test if all values are numerical
                if (!isNumeric(a[0]) || !isNumeric(a[1])) {
                    return false;
                }

                // The lowest value must really be the lowest value.
                if (a[1] < a[0]) {
                    return false;
                }

                return a;
            }

            var serialization = {
                resolution: function (q, o) {

                    // Parse the syntactic sugar that is the serialization
                    // resolution option to a usable integer.
                    // Checking for a string '1', since the resolution needs
                    // to be cast to a string to split in on the period.
                    switch (q) {
                        case 1:
                        case 0.1:
                        case 0.01:
                        case 0.001:
                        case 0.0001:
                        case 0.00001:
                            q = q.toString().split('.');
                            o['decimals'] = q[0] === '1' ? 0 : q[1].length;
                            break;
                        case undefined:
                            o['decimals'] = 2;
                            break;
                        default:
                            return false;
                    }

                    return true;
                }
                , mark: function (q, o, w) {

                    if (!q) {
                        o[w]['mark'] = '.';
                        return true;
                    }

                    switch (q) {
                        case '.':
                        case ',':
                            return true;
                        default:
                            return false;
                    }
                }
                , to: function (q, o, w) {

                    // Checks whether a variable is a candidate to be a
                    // valid serialization target.
                    function ser(r) {
                        return isInstance(r) ||
                            typeof r === 'string' ||
                            typeof r === 'function' ||
                            r === false ||
                            (isInstance(r[0]) &&
                                typeof r[0][r[1]] === 'function');
                    }

                    // Flatten the serialization array into a reliable
                    // set of elements, which can be tested and looped.
                    function filter(value) {

                        var items = [[], []];

                        // If a single value is provided it can be pushed
                        // immediately.
                        if (ser(value)) {
                            items[0].push(value);
                        } else {

                            // Otherwise, determine whether this is an
                            // array of single elements or sets.
                            $.each(value, function (i, val) {

                                // Don't handle an overflow of elements.
                                if (i > 1) {
                                    return;
                                }

                                // Decide if this is a group or not
                                if (ser(val)) {
                                    items[i].push(val);
                                } else {
                                    items[i] = items[i].concat(val);
                                }
                            });
                        }

                        return items;
                    }

                    if (!q) {
                        o[w]['to'] = [[], []];
                    } else {

                        var i, j;

                        // Flatten the serialization array
                        q = filter(q);

                        // Reverse the API for RTL sliders.
                        if (o['direction'] && q[1].length) {
                            q.reverse();
                        }

                        // Test all elements in the flattened array.
                        for (i = 0; i < o['handles']; i++) {
                            for (j = 0; j < q[i].length; j++) {

                                // Return false on invalid input
                                if (!ser(q[i][j])) {
                                    return false;
                                }

                                // Remove 'false' elements, since those
                                // won't be handled anyway.
                                if (!q[i][j]) {
                                    q[i].splice(j, 1);
                                }
                            }
                        }

                        // Write the new values back
                        o[w]['to'] = q;
                    }

                    return true;
                }
            }, tests = {
                /*	Handles.
				 *	Has default, can be 1 or 2.
				 */
                'handles': {
                    'r': true
                    , 't': function (q) {
                        q = parseInt(q, 10);
                        return (q === 1 || q === 2);
                    }
                }
                /*	Range.
				 *	Must be an array of two numerical floats,
				 *	which can't be identical.
				 */
                , 'range': {
                    'r': true
                    , 't': function (q, o, w) {

                        o[w] = values(q);

                        // The values can't be identical.
                        return o[w] && o[w][0] !== o[w][1];
                    }
                }
                /*	Start.
				 *	Must be an array of two numerical floats when handles = 2;
				 *	Uses 'range' test.
				 *	When handles = 1, a single float is also allowed.
				 */
                , 'start': {
                    'r': true
                    , 't': function (q, o, w) {
                        if (o['handles'] === 1) {
                            if ($.isArray(q)) {
                                q = q[0];
                            }
                            q = parseFloat(q);
                            o.start = [q];
                            return isNumeric(q);
                        }

                        o[w] = values(q);
                        return !!o[w];
                    }
                }
                /*	Connect.
				 *	Must be true or false when handles = 2;
				 *	Can use 'lower' and 'upper' when handles = 1.
				 */
                , 'connect': {
                    'r': true
                    , 't': function (q, o, w) {

                        if (q === 'lower') {
                            o[w] = 1;
                        } else if (q === 'upper') {
                            o[w] = 2;
                        } else if (q === true) {
                            o[w] = 3;
                        } else if (q === false) {
                            o[w] = 0;
                        } else {
                            return false;
                        }

                        return true;
                    }
                }
                /*	Connect.
				 *	Will default to horizontal, not required.
				 */
                , 'orientation': {
                    't': function (q, o, w) {
                        switch (q) {
                            case 'horizontal':
                                o[w] = 0;
                                break;
                            case 'vertical':
                                o[w] = 1;
                                break;
                            default:
                                return false;
                        }
                        return true;
                    }
                }
                /*	Margin.
				 *	Must be a float, has a default value.
				 */
                , 'margin': {
                    'r': true
                    , 't': function (q, o, w) {
                        q = parseFloat(q);
                        o[w] = fromPercentage(o['range'], q);
                        return isNumeric(q);
                    }
                }
                /*	Direction.
				 *	Required, can be 'ltr' or 'rtl'.
				 */
                , 'direction': {
                    'r': true
                    , 't': function (q, o, w) {

                        switch (q) {
                            case 'ltr':
                                o[w] = 0;
                                break;
                            case 'rtl':
                                o[w] = 1;
                                // Invert connection for RTL sliders;
                                o['connect'] = [0, 2, 1, 3][o['connect']];
                                break;
                            default:
                                return false;
                        }

                        return true;
                    }
                }
                /*	Behaviour.
				 *	Required, defines responses to tapping and
				 *	dragging elements.
				 */
                , 'behaviour': {
                    'r': true
                    , 't': function (q, o, w) {

                        o[w] = {
                            'tap': q !== (q = q.replace('tap', ''))
                            , 'extend': q !== (q = q.replace('extend', ''))
                            , 'drag': q !== (q = q.replace('drag', ''))
                            , 'fixed': q !== (q = q.replace('fixed', ''))
                        };

                        return !q.replace('none', '').replace(/\-/g, '');
                    }
                }
                /*	Serialization.
				 *	Required, but has default. Must be an array
				 *	when using two handles, can be a single value when using
				 *	one handle. 'mark' can be period (.) or comma (,).
				 */
                , 'serialization': {
                    'r': true
                    , 't': function (q, o, w) {

                        return serialization.to(q['to'], o, w) &&
                            serialization.resolution(q['resolution'], o) &&
                            serialization.mark(q['mark'], o, w);
                    }
                }
                /*	Slide.
				 *	Not required. Must be a function.
				 */
                , 'slide': {
                    't': function (q) {
                        return $.isFunction(q);
                    }
                }
                /*	Set.
				 *	Not required. Must be a function.
				 *	Tested using the 'slide' test.
				 */
                , 'set': {
                    't': function (q) {
                        return $.isFunction(q);
                    }
                }
                /*	Block.
				 *	Not required. Must be a function.
				 *	Tested using the 'slide' test.
				 */
                , 'block': {
                    't': function (q) {
                        return $.isFunction(q);
                    }
                }
                /*	Step.
				 *	Not required.
				 */
                , 'step': {
                    't': function (q, o, w) {
                        q = parseFloat(q);
                        o[w] = fromPercentage(o['range'], q);
                        return isNumeric(q);
                    }
                }
            };

            $.each(tests, function (name, test) {

                /*jslint devel: true */

                var value = input[name], isSet = value !== undefined;

                // If the value is required but not set, fail.
                if ((test['r'] && !isSet) ||
                    // If the test returns false, fail.
                    (isSet && !test['t'](value, input, name))) {

                    // For debugging purposes it might be very useful to know
                    // what option caused the trouble. Since throwing an error
                    // will prevent further script execution, log the error
                    // first. Test for console, as it might not be available.
                    if (console && console.log && console.group) {
                        console.group('Invalid noUiSlider initialisation:');
                        console.log('Option:\t', name);
                        console.log('Value:\t', value);
                        console.log('Slider(s):\t', sliders);
                        console.groupEnd();
                    }

                    throw new RangeError('noUiSlider');
                }
            });
        }

        // Parse options, add classes, attach events, create HTML.
        function create(options) {

            /*jshint validthis: true */

            // Store the original set of options on all targets,
            // so they can be re-used and re-tested later.
            // Make sure to break the relation with the options,
            // which will be changed by the 'test' function.
            this.data('options', $.extend(true, {}, options));

            // Set defaults where applicable;
            options = $.extend({
                'handles': 2
                , 'margin': 0
                , 'connect': false
                , 'direction': 'ltr'
                , 'behaviour': 'tap'
                , 'orientation': 'horizontal'
            }, options);

            // Make sure the test for serialization runs.
            options['serialization'] = options['serialization'] || {};

            // Run all options through a testing mechanism to ensure correct
            // input. The test function will throw errors, so there is
            // no need to capture the result of this call. It should be noted
            // that options might get modified to be handled properly. E.g.
            // wrapping integers in arrays.
            test(options, this);

            // Pre-define the styles.
            options['style'] = options['orientation'] ? 'top' : 'left';

            return this.each(function () {

                var target = $(this), i, dragable, handles = [], handle,
                    base = $('<div/>').appendTo(target);

                // Throw an error if the slider was already initialized.
                if (target.data('base')) {
                    throw new Error('Slider was already initialized.');
                }

                // Apply classes and data to the target.
                target.data('base', base).addClass([
                    clsList[6]
                    , clsList[16 + options['direction']]
                    , clsList[10 + options['orientation']]].join(' '));

                for (i = 0; i < options['handles']; i++) {

                    handle = $('<div><div/></div>').appendTo(base);

                    // Add all default and option-specific classes to the
                    // origins and handles.
                    handle.addClass(clsList[1]);

                    handle.children().addClass([
                        clsList[2]
                        , clsList[2] + clsList[7 + options['direction'] +
                        (options['direction'] ? -1 * i : i)]].join(' '));

                    // Make sure every handle has access to all variables.
                    handle.data({
                        'base': base
                        , 'target': target
                        , 'options': options
                        , 'grab': handle.children()
                        , 'pct': -1
                    }).attr('data-style', options['style']);

                    // Every handle has a storage point, which takes care
                    // of triggering the proper serialization callbacks.
                    handle.data({
                        'store': store(handle, i, options['serialization'])
                    });

                    // Store handles on the base
                    handles.push(handle);
                }

                // Apply the required connection classes to the elements
                // that need them. Some classes are made up for several
                // segments listed in the class list, to allow easy
                // renaming and provide a minor compression benefit.
                switch (options['connect']) {
                    case 1:
                        target.addClass(clsList[9]);
                        handles[0].addClass(clsList[12]);
                        break;
                    case 3:
                        handles[1].addClass(clsList[12]);
                    /* falls through */
                    case 2:
                        handles[0].addClass(clsList[9]);
                    /* falls through */
                    case 0:
                        target.addClass(clsList[12]);
                        break;
                }

                // Merge base classes with default,
                // and store relevant data on the base element.
                base.addClass(clsList[0]).data({
                    'target': target
                    , 'options': options
                    , 'handles': handles
                });

                // Use the public value method to set the start values.
                target.val(options['start']);

                // Attach the standard drag event to the handles.
                if (!options['behaviour']['fixed']) {
                    for (i = 0; i < handles.length; i++) {

                        // These events are only bound to the visual handle
                        // element, not the 'real' origin element.
                        attach(actions.start, handles[i].children(), start, {
                            base: base
                            , target: target
                            , handles: [handles[i]]
                        });
                    }
                }

                // Attach the tap event to the slider base.
                if (options['behaviour']['tap']) {
                    attach(actions.start, base, tap, {
                        base: base
                        , target: target
                    });
                }

                // Extend tapping behaviour to target
                if (options['behaviour']['extend']) {

                    target.addClass(clsList[19]);

                    if (options['behaviour']['tap']) {
                        attach(actions.start, target, edge, {
                            base: base
                            , target: target
                        });
                    }
                }

                // Make the range dragable.
                if (options['behaviour']['drag']) {

                    dragable = base.find('.' + clsList[9]).addClass(clsList[18]);

                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (options['behaviour']['fixed']) {
                        dragable = dragable
                            .add(base.children().not(dragable).data('grab'));
                    }

                    attach(actions.start, dragable, start, {
                        base: base
                        , target: target
                        , handles: handles
                    });
                }
            });
        }

        // Return value for the slider, relative to 'range'.
        function getValue() {

            /*jshint validthis: true */

            var base = $(this).data('base'), answer = [];

            // Loop the handles, and get the value from the input
            // for every handle on its' own.
            $.each(base.data('handles'), function () {
                answer.push($(this).data('store').val());
            });

            // If the slider has just one handle, return a single value.
            // Otherwise, return an array, which is in reverse order
            // if the slider is used RTL.
            if (answer.length === 1) {
                return answer[0];
            }

            if (base.data('options').direction) {
                return answer.reverse();
            }

            return answer;
        }

        // Set value for the slider, relative to 'range'.
        function setValue(args, set) {

            /*jshint validthis: true */

            // If the value is to be set to a number, which is valid
            // when using a one-handle slider, wrap it in an array.
            if (!$.isArray(args)) {
                args = [args];
            }

            // Setting is handled properly for each slider in the data set.
            return this.each(function () {

                var b = $(this).data('base'), to, i,
                    handles = Array.prototype.slice.call(b.data('handles'), 0),
                    settings = b.data('options');

                // If there are multiple handles to be set run the setting
                // mechanism twice for the first handle, to make sure it
                // can be bounced of the second one properly.
                if (handles.length > 1) {
                    handles[2] = handles[0];
                }

                // The RTL settings is implemented by reversing the front-end,
                // internal mechanisms are the same.
                if (settings['direction']) {
                    args.reverse();
                }

                for (i = 0; i < handles.length; i++) {

                    // Calculate a new position for the handle.
                    to = args[i % 2];

                    // The set request might want to ignore this handle.
                    // Test for 'undefined' too, as a two-handle slider
                    // can still be set with an integer.
                    if (to === null || to === undefined) {
                        continue;
                    }

                    // Add support for the comma (,) as a decimal symbol.
                    // Replace it by a period so it is handled properly by
                    // parseFloat. Omitting this would result in a removal
                    // of decimals. This way, the developer can also
                    // input a comma separated string.
                    if ($.type(to) === 'string') {
                        to = to.replace(',', '.');
                    }

                    // Calculate the new handle position
                    to = toPercentage(settings['range'], parseFloat(to));

                    // Invert the value if this is an right-to-left slider.
                    if (settings['direction']) {
                        to = 100 - to;
                    }

                    // If the value of the input doesn't match the slider,
                    // reset it. Sometimes the input is changed to a value the
                    // slider has rejected. This can occur when using 'select'
                    // or 'input[type="number"]' elements. In this case, set
                    // the value back to the input.
                    if (setHandle(handles[i], to) !== true) {
                        handles[i].data('store').val(true);
                    }

                    // Optionally trigger the 'set' event.
                    if (set === true) {
                        call(settings['set'], $(this));
                    }
                }
            });
        }

        // Unbind all attached events, remove classed and HTML.
        function destroy(target) {

            // Start the list of elements to be unbound with the target.
            var elements = [[target, '']];

            // Get the fields bound to both handles.
            $.each(target.data('base').data('handles'), function () {
                elements = elements.concat($(this).data('store').elements);
            });

            // Remove all events added by noUiSlider.
            $.each(elements, function () {
                if (this.length > 1) {
                    this[0].off(namespace);
                }
            });

            // Remove all classes from the target.
            target.removeClass(clsList.join(' '));

            // Empty the target and remove all data.
            target.empty().removeData('base options');
        }

        // Merge options with current initialization, destroy slider
        // and reinitialize.
        function build(options) {

            /*jshint validthis: true */

            return this.each(function () {

                // When uninitialised, jQuery will return '',
                // Zepto returns undefined. Both are falsy.
                var values = $(this).val() || false,
                    current = $(this).data('options'),
                    // Extend the current setup with the new options.
                    setup = $.extend({}, current, options);

                // If there was a slider initialised, remove it first.
                if (values !== false) {
                    destroy($(this));
                }

                // Make the destroy method publicly accessible.
                if (!options) {
                    return;
                }

                // Create a new slider
                $(this)['noUiSlider'](setup);

                // Set the slider values back. If the start options changed,
                // it gets precedence.
                if (values !== false && setup.start === current.start) {
                    $(this).val(values);
                }
            });
        }

        // Overwrite the native jQuery value function
        // with a simple handler. noUiSlider will use the internal
        // value method, anything else will use the standard method.
        $.fn.val = function () {

            // If the function is called without arguments,
            // act as a 'getter'. Call the getValue function
            // in the same scope as this call.
            if (this.hasClass(clsList[6])) {
                return arguments.length ?
                    setValue.apply(this, arguments) :
                    getValue.apply(this);
            }

            // If this isn't noUiSlider, continue with jQuery's
            // original method.
            return $VAL.apply(this, arguments);
        };

        return (rebuild ? build : create).call(this, options);
    };

}(window['jQuery'] || window['Zepto']));
/*! Sidr - v1.1.1 - 2013-03-14
 * https://github.com/artberri/sidr
 * Copyright (c) 2013 Alberto Varela; Licensed MIT */
(function (e) {
    var t = !1, i = !1, o = {
        isUrl: function (e) {
            var t = RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
            return t.test(e) ? !0 : !1
        }, loadContent: function (e, t) {
            e.html(t)
        }, addPrefix: function (e) {
            var t = e.attr("id"), i = e.attr("class");
            "string" == typeof t && "" !== t && e.attr("id", t.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-id-$1")), "string" == typeof i && "" !== i && "sidr-inner" !== i && e.attr("class", i.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-class-$1")), e.removeAttr("style")
        }, execute: function (o, n, s) {
            "function" == typeof n ? (s = n, n = "sidr") : n || (n = "sidr");
            var a, d, l, c = e("#" + n), f = e(c.data("body")), u = e("html"), p = c.outerWidth(!0),
                y = c.data("speed"), v = c.data("side");
            if ("open" === o || "toogle" === o && !c.is(":visible")) {
                if (c.is(":visible") || t) return;
                if (i !== !1) return r.close(i, function () {
                    r.open(n)
                }), void 0;
                t = !0, "left" === v ? (a = {left: p + "px"}, d = {left: "0px"}) : (a = {right: p + "px"}, d = {right: "0px"}), l = u.scrollTop(), u.css("overflow-x", "hidden").scrollTop(l), f.css({
                    width: f.width(),
                    position: "absolute"
                }).animate(a, y), c.css("display", "block").animate(d, y, function () {
                    t = !1, i = n, "function" == typeof s && s(n)
                })
            } else {
                if (!c.is(":visible") || t) return;
                t = !0, "left" === v ? (a = {left: 0}, d = {left: "-" + p + "px"}) : (a = {right: 0}, d = {right: "-" + p + "px"}), l = u.scrollTop(), u.removeAttr("style").scrollTop(l), f.animate(a, y), c.animate(d, y, function () {
                    c.removeAttr("style"), f.removeAttr("style"), e("html").removeAttr("style"), t = !1, i = !1, "function" == typeof s && s(n)
                })
            }
        }
    }, r = {
        open: function (e, t) {
            o.execute("open", e, t)
        }, close: function (e, t) {
            o.execute("close", e, t)
        }, toogle: function (e, t) {
            o.execute("toogle", e, t)
        }
    };
    e.sidr = function (t) {
        return r[t] ? r[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof t && "string" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.sidr"), void 0) : r.toogle.apply(this, arguments)
    }, e.fn.sidr = function (t) {
        var i = e.extend({name: "sidr", speed: 200, side: "left", source: null, renaming: !0, body: "body"}, t),
            n = i.name, s = e("#" + n);
        if (0 === s.length && (s = e("<div />").attr("id", n).appendTo(e("body"))), s.addClass("sidr").addClass(i.side).data({
            speed: i.speed,
            side: i.side,
            body: i.body
        }), "function" == typeof i.source) {
            var a = i.source(n);
            o.loadContent(s, a)
        } else if ("string" == typeof i.source && o.isUrl(i.source)) e.get(i.source, function (e) {
            o.loadContent(s, e)
        }); else if ("string" == typeof i.source) {
            var d = "", l = i.source.split(",");
            if (e.each(l, function (t, i) {
                d += '<div class="sidr-inner">' + e(i).html() + "</div>"
            }), i.renaming) {
                var c = e("<div />").html(d);
                c.find("*").each(function (t, i) {
                    var r = e(i);
                    o.addPrefix(r)
                }), d = c.html()
            }
            o.loadContent(s, d)
        } else null !== i.source && e.error("Invalid Sidr Source");
        return this.each(function () {
            var t = e(this), i = t.data("sidr");
            i || (t.data("sidr", n), t.click(function (e) {
                e.preventDefault(), r.toogle(n)
            }))
        })
    }
})(jQuery);
typeof JSON != "object" && (JSON = {}), function () {
    "use strict";

    function f(e) {
        return e < 10 ? "0" + e : e
    }

    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
            var t = meta[e];
            return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }

    function str(e, t) {
        var n, r, i, s, o = gap, u, a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
            case"string":
                return quote(a);
            case"number":
                return isFinite(a) ? String(a) : "null";
            case"boolean":
            case"null":
                return String(a);
            case"object":
                if (!a) return "null";
                gap += indent, u = [];
                if (Object.prototype.toString.apply(a) === "[object Array]") {
                    s = a.length;
                    for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                    return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                }
                if (rep && typeof rep == "object") {
                    s = rep.length;
                    for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                } else for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
        }
    }

    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent,
        meta = {"\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function (e, t, n) {
        var r;
        gap = "", indent = "";
        if (typeof n == "number") for (r = 0; r < n; r += 1) indent += " "; else typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {"": e});
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && typeof i == "object") for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }

        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), function (e, t) {
    "use strict";
    var n = e.History = e.History || {}, r = e.jQuery;
    if (typeof n.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
    n.Adapter = {
        bind: function (e, t, n) {
            r(e).bind(t, n)
        }, trigger: function (e, t, n) {
            r(e).trigger(t, n)
        }, extractEventData: function (e, n, r) {
            var i = n && n.originalEvent && n.originalEvent[e] || r && r[e] || t;
            return i
        }, onDomLoad: function (e) {
            r(e)
        }
    }, typeof n.init != "undefined" && n.init()
}(window), function (e, t) {
    "use strict";
    var n = e.document, r = e.setTimeout || r, i = e.clearTimeout || i, s = e.setInterval || s,
        o = e.History = e.History || {};
    if (typeof o.initHtml4 != "undefined") throw new Error("History.js HTML4 Support has already been loaded...");
    o.initHtml4 = function () {
        if (typeof o.initHtml4.initialized != "undefined") return !1;
        o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [], o.isLastHash = function (e) {
            var t = o.getHashByIndex(), n;
            return n = e === t, n
        }, o.isHashEqual = function (e, t) {
            return e = encodeURIComponent(e).replace(/%25/g, "%"), t = encodeURIComponent(t).replace(/%25/g, "%"), e === t
        }, o.saveHash = function (e) {
            return o.isLastHash(e) ? !1 : (o.savedHashes.push(e), !0)
        }, o.getHashByIndex = function (e) {
            var t = null;
            return typeof e == "undefined" ? t = o.savedHashes[o.savedHashes.length - 1] : e < 0 ? t = o.savedHashes[o.savedHashes.length + e] : t = o.savedHashes[e], t
        }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState = function (e, t, n) {
            var r = o.getHashByState(e), i;
            return i = {discardedState: e, backState: n, forwardState: t}, o.discardedStates[r] = i, !0
        }, o.discardHash = function (e, t, n) {
            var r = {discardedHash: e, backState: n, forwardState: t};
            return o.discardedHashes[e] = r, !0
        }, o.discardedState = function (e) {
            var t = o.getHashByState(e), n;
            return n = o.discardedStates[t] || !1, n
        }, o.discardedHash = function (e) {
            var t = o.discardedHashes[e] || !1;
            return t
        }, o.recycleState = function (e) {
            var t = o.getHashByState(e);
            return o.discardedState(e) && delete o.discardedStates[t], !0
        }, o.emulated.hashChange && (o.hashChangeInit = function () {
            o.checkerFunction = null;
            var t = "", r, i, u, a, f = Boolean(o.getHash());
            return o.isInternetExplorer() ? (r = "historyjs-iframe", i = n.createElement("iframe"), i.setAttribute("id", r), i.setAttribute("src", "#"), i.style.display = "none", n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), u = "", a = !1, o.checkerFunction = function () {
                if (a) return !1;
                a = !0;
                var n = o.getHash(), r = o.getHash(i.contentWindow.document);
                return n !== t ? (t = n, r !== n && (u = r = n, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = o.escapeHash(n)), o.Adapter.trigger(e, "hashchange")) : r !== u && (u = r, f && r === "" ? o.back() : o.setHash(r, !1)), a = !1, !0
            }) : o.checkerFunction = function () {
                var n = o.getHash() || "";
                return n !== t && (t = n, o.Adapter.trigger(e, "hashchange")), !0
            }, o.intervalList.push(s(o.checkerFunction, o.options.hashChangeInterval)), !0
        }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState && (o.onHashChange = function (t) {
            var n = t && t.newURL || o.getLocationHref(), r = o.getHashByUrl(n), i = null, s = null, u = null, a;
            return o.isLastHash(r) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(r), r && o.isTraditionalAnchor(r) ? (o.Adapter.trigger(e, "anchorchange"), o.busy(!1), !1) : (i = o.extractState(o.getFullUrl(r || o.getLocationHref()), !0), o.isLastSavedState(i) ? (o.busy(!1), !1) : (s = o.getHashByState(i), a = o.discardedState(i), a ? (o.getHashByIndex(-2) === o.getHashByState(a.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(i.data, i.title, encodeURI(i.url), !1), !0))))
        }, o.Adapter.bind(e, "hashchange", o.onHashChange), o.pushState = function (t, n, r, i) {
            r = encodeURI(r).replace(/%25/g, "%");
            if (o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (i !== !1 && o.busy()) return o.pushQueue({
                scope: o,
                callback: o.pushState,
                args: arguments,
                queue: i
            }), !1;
            o.busy(!0);
            var s = o.createStateObject(t, n, r), u = o.getHashByState(s), a = o.getState(!1), f = o.getHashByState(a),
                l = o.getHash(), c = o.expectedStateId == s.id;
            return o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), u === f ? (o.busy(!1), !1) : (o.saveState(s), c || o.Adapter.trigger(e, "statechange"), !o.isHashEqual(u, l) && !o.isHashEqual(u, o.getShortUrl(o.getLocationHref())) && o.setHash(u, !1), o.busy(!1), !0)
        }, o.replaceState = function (t, n, r, i) {
            r = encodeURI(r).replace(/%25/g, "%");
            if (o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (i !== !1 && o.busy()) return o.pushQueue({
                scope: o,
                callback: o.replaceState,
                args: arguments,
                queue: i
            }), !1;
            o.busy(!0);
            var s = o.createStateObject(t, n, r), u = o.getHashByState(s), a = o.getState(!1), f = o.getHashByState(a),
                l = o.getStateByIndex(-2);
            return o.discardState(a, s, l), u === f ? (o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), o.saveState(s), o.Adapter.trigger(e, "statechange"), o.busy(!1)) : o.pushState(s.data, s.title, s.url, !1), !0
        }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function () {
            o.Adapter.trigger(e, "hashchange")
        })
    }, typeof o.init != "undefined" && o.init()
}(window), function (e, t) {
    "use strict";
    var n = e.console || t, r = e.document, i = e.navigator, s = !1, o = e.setTimeout, u = e.clearTimeout,
        a = e.setInterval, f = e.clearInterval, l = e.JSON, c = e.alert, h = e.History = e.History || {}, p = e.history;
    try {
        s = e.sessionStorage, s.setItem("TEST", "1"), s.removeItem("TEST")
    } catch (d) {
        s = !1
    }
    l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode;
    if (typeof h.init != "undefined") throw new Error("History.js Core has already been loaded...");
    h.init = function (e) {
        return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0)
    }, h.initCore = function (d) {
        if (typeof h.initCore.initialized != "undefined") return !1;
        h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || r.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function () {
            var e, t = h.intervalList;
            if (typeof t != "undefined" && t !== null) {
                for (e = 0; e < t.length; e++) f(t[e]);
                h.intervalList = null
            }
        }, h.debug = function () {
            (h.options.debug || !1) && h.log.apply(h, arguments)
        }, h.log = function () {
            var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined",
                t = r.getElementById("log"), i, s, o, u, a;
            e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";
            for (s = 1, o = arguments.length; s < o; ++s) {
                a = arguments[s];
                if (typeof a == "object" && typeof l != "undefined") try {
                    a = l.stringify(a)
                } catch (f) {
                }
                i += "\n" + a + "\n"
            }
            return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0
        }, h.getInternetExplorerMajorVersion = function () {
            var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached : function () {
                var e = 3, t = r.createElement("div"), n = t.getElementsByTagName("i");
                while ((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0]) ;
                return e > 4 ? e : !1
            }();
            return e
        }, h.isInternetExplorer = function () {
            var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
            return e
        }, h.options.html4Mode ? h.emulated = {
            pushState: !0,
            hashChange: !0
        } : h.emulated = {
            pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
            hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
        }, h.enabled = !h.emulated.pushState, h.bugs = {
            setHash: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            safariPoll: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
            hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
        }, h.isEmptyObject = function (e) {
            for (var t in e) if (e.hasOwnProperty(t)) return !1;
            return !0
        }, h.cloneObject = function (e) {
            var t, n;
            return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n
        }, h.getRootUrl = function () {
            var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
            if (r.location.port || !1) e += ":" + r.location.port;
            return e += "/", e
        }, h.getBaseHref = function () {
            var e = r.getElementsByTagName("base"), t = null, n = "";
            return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
        }, h.getBaseUrl = function () {
            var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
            return e
        }, h.getPageUrl = function () {
            var e = h.getState(!1, !1), t = (e || {}).url || h.getLocationHref(), n;
            return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function (e, t, n) {
                return /\./.test(e) ? e : e + "/"
            }), n
        }, h.getBasePageUrl = function () {
            var e = h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function (e, t, n) {
                return /[^\/]$/.test(e) ? "" : e
            }).replace(/\/+$/, "") + "/";
            return e
        }, h.getFullUrl = function (e, t) {
            var n = e, r = e.substring(0, 1);
            return t = typeof t == "undefined" ? !0 : t, /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
        }, h.getShortUrl = function (e) {
            var t = e, n = h.getBaseUrl(), r = h.getRootUrl();
            return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), t
        }, h.getLocationHref = function (e) {
            return e = e || r, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : e.URL.indexOf("#") == -1 && e.location.href.indexOf("#") != -1 ? e.location.href : e.URL || e.location.href
        }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function () {
            h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
        }, h.getState = function (e, t) {
            typeof e == "undefined" && (e = !0), typeof t == "undefined" && (t = !0);
            var n = h.getLastSavedState();
            return !n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
        }, h.getIdByState = function (e) {
            var t = h.extractId(e.url), n;
            if (!t) {
                n = h.getStateString(e);
                if (typeof h.stateToId[n] != "undefined") t = h.stateToId[n]; else if (typeof h.store.stateToId[n] != "undefined") t = h.store.stateToId[n]; else {
                    for (; ;) {
                        t = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                        if (typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined") break
                    }
                    h.stateToId[n] = t, h.idToState[t] = e
                }
            }
            return t
        }, h.normalizeState = function (e) {
            var t, n;
            if (!e || typeof e != "object") e = {};
            if (typeof e.normalized != "undefined") return e;
            if (!e.data || typeof e.data != "object") e.data = {};
            return t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data), (t.title || n) && h.options.disableSuid !== !0 && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t
        }, h.createStateObject = function (e, t, n) {
            var r = {data: e, title: t, url: n};
            return r = h.normalizeState(r), r
        }, h.getStateById = function (e) {
            e = String(e);
            var n = h.idToState[e] || h.store.idToState[e] || t;
            return n
        }, h.getStateString = function (e) {
            var t, n, r;
            return t = h.normalizeState(e), n = {data: t.data, title: e.title, url: e.url}, r = l.stringify(n), r
        }, h.getStateId = function (e) {
            var t, n;
            return t = h.normalizeState(e), n = t.id, n
        }, h.getHashByState = function (e) {
            var t, n;
            return t = h.normalizeState(e), n = t.hash, n
        }, h.extractId = function (e) {
            var t, n, r, i;
            return e.indexOf("#") != -1 ? i = e.split("#")[0] : i = e, n = /(.*)\&_suid=([0-9]+)$/.exec(i), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
        }, h.isTraditionalAnchor = function (e) {
            var t = !/[\/\?\.]/.test(e);
            return t
        }, h.extractState = function (e, t) {
            var n = null, r, i;
            return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n
        }, h.getIdByUrl = function (e) {
            var n = h.urlToId[e] || h.store.urlToId[e] || t;
            return n
        }, h.getLastSavedState = function () {
            return h.savedStates[h.savedStates.length - 1] || t
        }, h.getLastStoredState = function () {
            return h.storedStates[h.storedStates.length - 1] || t
        }, h.hasUrlDuplicate = function (e) {
            var t = !1, n;
            return n = h.extractState(e.url), t = n && n.id !== e.id, t
        }, h.storeState = function (e) {
            return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
        }, h.isLastSavedState = function (e) {
            var t = !1, n, r, i;
            return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t
        }, h.saveState = function (e) {
            return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0)
        }, h.getStateByIndex = function (e) {
            var t = null;
            return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e], t
        }, h.getCurrentIndex = function () {
            var e = null;
            return h.savedStates.length < 1 ? e = 0 : e = h.savedStates.length - 1, e
        }, h.getHash = function (e) {
            var t = h.getLocationHref(e), n;
            return n = h.getHashByUrl(t), n
        }, h.unescapeHash = function (e) {
            var t = h.normalizeHash(e);
            return t = decodeURIComponent(t), t
        }, h.normalizeHash = function (e) {
            var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
            return t
        }, h.setHash = function (e, t) {
            var n, i;
            return t !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.setHash,
                args: arguments,
                queue: t
            }), !1) : (h.busy(!0), n = h.extractState(e, !0), n && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== e && (h.bugs.setHash ? (i = h.getPageUrl(), h.pushState(null, null, i + "#" + e, !1)) : r.location.hash = e), h)
        }, h.escapeHash = function (t) {
            var n = h.normalizeHash(t);
            return n = e.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
        }, h.getHashByUrl = function (e) {
            var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            return t = h.unescapeHash(t), t
        }, h.setTitle = function (e) {
            var t = e.title, n;
            t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
            try {
                r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
            } catch (i) {
            }
            return r.title = t, h
        }, h.queues = [], h.busy = function (e) {
            typeof e != "undefined" ? h.busy.flag = e : typeof h.busy.flag == "undefined" && (h.busy.flag = !1);
            if (!h.busy.flag) {
                u(h.busy.timeout);
                var t = function () {
                    var e, n, r;
                    if (h.busy.flag) return;
                    for (e = h.queues.length - 1; e >= 0; --e) {
                        n = h.queues[e];
                        if (n.length === 0) continue;
                        r = n.shift(), h.fireQueueItem(r), h.busy.timeout = o(t, h.options.busyDelay)
                    }
                };
                h.busy.timeout = o(t, h.options.busyDelay)
            }
            return h.busy.flag
        }, h.busy.flag = !1, h.fireQueueItem = function (e) {
            return e.callback.apply(e.scope || h, e.args || [])
        }, h.pushQueue = function (e) {
            return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
        }, h.queue = function (e, t) {
            return typeof e == "function" && (e = {callback: e}), typeof t != "undefined" && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
        }, h.clearQueue = function () {
            return h.busy.flag = !1, h.queues = [], h
        }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function () {
            return h.stateChanged = !0, h.doubleCheckClear(), h
        }, h.doubleCheckClear = function () {
            return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h
        }, h.doubleCheck = function (e) {
            return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function () {
                return h.doubleCheckClear(), h.stateChanged || e(), !0
            }, h.options.doubleCheckInterval)), h
        }, h.safariStatePoll = function () {
            var t = h.extractState(h.getLocationHref()), n;
            if (!h.isLastSavedState(t)) return n = t, n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h;
            return
        }, h.back = function (e) {
            return e !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.back,
                args: arguments,
                queue: e
            }), !1) : (h.busy(!0), h.doubleCheck(function () {
                h.back(!1)
            }), p.go(-1), !0)
        }, h.forward = function (e) {
            return e !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.forward,
                args: arguments,
                queue: e
            }), !1) : (h.busy(!0), h.doubleCheck(function () {
                h.forward(!1)
            }), p.go(1), !0)
        }, h.go = function (e, t) {
            var n;
            if (e > 0) for (n = 1; n <= e; ++n) h.forward(t); else {
                if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                for (n = -1; n >= e; --n) h.back(t)
            }
            return h
        };
        if (h.emulated.pushState) {
            var v = function () {
            };
            h.pushState = h.pushState || v, h.replaceState = h.replaceState || v
        } else h.onPopState = function (t, n) {
            var r = !1, i = !1, s, o;
            return h.doubleCheckComplete(), s = h.getHash(), s ? (o = h.extractState(s || h.getLocationHref(), !0), o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (r = h.Adapter.extractEventData("state", t, n) || !1, r ? i = h.getStateById(r) : h.expectedStateId ? i = h.getStateById(h.expectedStateId) : i = h.extractState(h.getLocationHref()), i || (i = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(i) ? (h.busy(!1), !1) : (h.storeState(i), h.saveState(i), h.setTitle(i), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
        }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function (t, n, r, i) {
            if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (i !== !1 && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.pushState,
                args: arguments,
                queue: i
            }), !1;
            h.busy(!0);
            var s = h.createStateObject(t, n, r);
            return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
        }, h.replaceState = function (t, n, r, i) {
            if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (i !== !1 && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.replaceState,
                args: arguments,
                queue: i
            }), !1;
            h.busy(!0);
            var s = h.createStateObject(t, n, r);
            return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
        };
        if (s) {
            try {
                h.store = l.parse(s.getItem("History.store")) || {}
            } catch (m) {
                h.store = {}
            }
            h.normalizeStore()
        } else h.store = {}, h.normalizeStore();
        h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), s && (h.onUnload = function () {
            var e, t, n;
            try {
                e = l.parse(s.getItem("History.store")) || {}
            } catch (r) {
                e = {}
            }
            e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
            for (t in h.idToState) {
                if (!h.idToState.hasOwnProperty(t)) continue;
                e.idToState[t] = h.idToState[t]
            }
            for (t in h.urlToId) {
                if (!h.urlToId.hasOwnProperty(t)) continue;
                e.urlToId[t] = h.urlToId[t]
            }
            for (t in h.stateToId) {
                if (!h.stateToId.hasOwnProperty(t)) continue;
                e.stateToId[t] = h.stateToId[t]
            }
            h.store = e, h.normalizeStore(), n = l.stringify(e);
            try {
                s.setItem("History.store", n)
            } catch (i) {
                if (i.code !== DOMException.QUOTA_EXCEEDED_ERR) throw i;
                s.length && (s.removeItem("History.store"), s.setItem("History.store", n))
            }
        }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));
        if (!h.emulated.pushState) {
            h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
            if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla") h.Adapter.bind(e, "hashchange", function () {
                h.Adapter.trigger(e, "popstate")
            }), h.getHash() && h.Adapter.onDomLoad(function () {
                h.Adapter.trigger(e, "hashchange")
            })
        }
    }, (!h.options || !h.options.delayInit) && h.init()
}(window)/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia = window.matchMedia || (function (e, f) {
    var c, a = e.documentElement, b = a.firstElementChild || a.firstChild, d = e.createElement("body"),
        g = e.createElement("div");
    g.id = "mq-test-1";
    g.style.cssText = "position:absolute;top:-100em";
    d.appendChild(g);
    return function (h) {
        g.innerHTML = '&shy;<style media="' + h + '"> #mq-test-1 { width: 42px; }</style>';
        a.insertBefore(d, b);
        c = g.offsetWidth == 42;
        a.removeChild(d);
        return {matches: c, media: h}
    }
})(document);/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function (window, document, $) {

    var isInputSupported = 'placeholder' in document.createElement('input'),
        isTextareaSupported = 'placeholder' in document.createElement('textarea'),
        prototype = $.fn,
        valHooks = $.valHooks,
        hooks,
        placeholder;

    if (isInputSupported && isTextareaSupported) {

        placeholder = prototype.placeholder = function () {
            return this;
        };

        placeholder.input = placeholder.textarea = true;

    } else {

        placeholder = prototype.placeholder = function () {
            var $this = this;
            $this
                .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
                .not('.placeholder')
                .bind({
                    'focus.placeholder': clearPlaceholder,
                    'blur.placeholder': setPlaceholder
                })
                .data('placeholder-enabled', true)
                .trigger('blur.placeholder');
            return $this;
        };

        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;

        hooks = {
            'get': function (element) {
                var $element = $(element);
                return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
            },
            'set': function (element, value) {
                var $element = $(element);
                if (!$element.data('placeholder-enabled')) {
                    return element.value = value;
                }
                if (value == '') {
                    element.value = value;
                    // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
                    if (element != document.activeElement) {
                        // We can't use `triggerHandler` here because of dummy text/password inputs :(
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass('placeholder')) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
                return $element;
            }
        };

        isInputSupported || (valHooks.input = hooks);
        isTextareaSupported || (valHooks.textarea = hooks);

        $(function () {
            // Look for forms
            $(document).delegate('form', 'submit.placeholder', function () {
                // Clear the placeholder values so they don't get submitted
                var $inputs = $('.placeholder', this).each(clearPlaceholder);
                setTimeout(function () {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });

        // Clear placeholder values upon page reload
        $(window).bind('beforeunload.placeholder', function () {
            $('.placeholder').each(function () {
                this.value = '';
            });
        });

    }

    function args(elem) {
        // Return an object of element attributes
        var newAttrs = {},
            rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function (i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }

    function clearPlaceholder(event, value) {
        var input = this,
            $input = $(input);
        if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
            if ($input.data('placeholder-password')) {
                $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                // If `clearPlaceholder` was called from `$.valHooks.input.set`
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = '';
                $input.removeClass('placeholder');
                input == document.activeElement && input.select();
            }
        }
    }

    function setPlaceholder() {
        var $replacement,
            input = this,
            $input = $(input),
            $origInput = $input,
            id = this.id;
        if (input.value == '') {
            if (input.type == 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().attr({'type': 'text'});
                    } catch (e) {
                        $replacement = $('<input>').attr($.extend(args(this), {'type': 'text'}));
                    }
                    $replacement
                        .removeAttr('name')
                        .data({
                            'placeholder-password': true,
                            'placeholder-id': id
                        })
                        .bind('focus.placeholder', clearPlaceholder);
                    $input
                        .data({
                            'placeholder-textinput': $replacement,
                            'placeholder-id': id
                        })
                        .before($replacement);
                }
                $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
                // Note: `$input[0] != input` now!
            }
            $input.addClass('placeholder');
            $input[0].value = $input.attr('placeholder');
        } else {
            $input.removeClass('placeholder');
        }
    }

}(this, document, jQuery));

function ajaxLoadSecureComponent(wrapper, moduleName, componentName, params, callBack, callBackParams) {
    jQuery.ajax({
        type: "GET",
        url: 'https://' + shop_host + '/' + currentLang + '/renderSecureComponent/' + moduleName + '/' + componentName,
        data: params,
        dataType: 'jsonp',
        jsonp: 'jsonp',
        jsonpCallback: 'jsonpCallbackFunction',
        crossDomain: true,
        success: function (response) {
            if (callBack) {
                callBackParams.html = response.html;
                window[callBack](callBackParams);
            }
        }
    });

}

function ajaxLoadSecurePartial(wrapper, moduleName, partialName, params, callBack, callBackParams) {
    jQuery.ajax({
        type: "GET",
        url: 'https://' + shop_host + '/' + currentLang + '/renderSecurePartial/' + moduleName + '/' + partialName,
        data: params,
        dataType: 'jsonp',
        jsonp: 'jsonp',
        jsonpCallback: 'jsonpCallbackFunction',
        crossDomain: true,
        success: function (response) {
            if (callBack) {
                callBackParams.html = response.html;
                window[callBack](callBackParams);
            }
        }
    });

}


//empty function to satisfy jsonp
function jsonpCallbackFunction(json) {

}

function fillModalContent(callBackParams) {

    if (typeof callBackParams.html !== 'undefined' && (callBackParams.html.indexOf("REDIRECT__") >= 0)) {
        var matches = callBackParams.html.match("REDIRECT__(.*)__");
        window.location.href = matches[1];

        return;
    }

    jQuery('#' + callBackParams.modalId + ' .modalContent').html(callBackParams.html);

    //bind the form
    jQuery(callBackParams.jqFormSelector).submit(function (e) {
        e.preventDefault();
        delete callBackParams.openModal;
        ajaxSubmitSecureModalForm(callBackParams);
    });


    if (callBackParams.openModal) {
        $("#" + callBackParams.modalId).reveal({animation: 'none'});
    }

    if (callBackParams.hideElement) {
        $(callBackParams.hideElement).hide();
    }

    if (callBackParams.additionalCallback) {
        window[callBackParams.additionalCallback]();
    }


}


$.fn.formToJSON = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });

    return o;
};


function ajaxSubmitSecureModalForm(passThroughCallBackParams) {

    var myform = $(passThroughCallBackParams.jqFormSelector);

    // Find disabled inputs, and remove the "disabled" attribute
    var disabled = myform.find(':input:disabled').removeAttr('disabled');

    //LOAD LOGIN FORM
    var callBack = 'fillModalContent';
    var callBackParams = passThroughCallBackParams;
    var moduleName = passThroughCallBackParams.moduleName != undefined ? passThroughCallBackParams.moduleName : "sfGuardAuth";

    ajaxLoadSecureComponent(passThroughCallBackParams.modalContentWrapper, moduleName, passThroughCallBackParams.componentName, myform.formToJSON(), callBack, callBackParams);

    disabled.attr('disabled', 'disabled');

}

//add pop() and shift() to JavaScript
(function ($) {
    $.fn.pop = function () {
        var top = this.get(-1);
        this.splice(this.length - 1, 1);
        return top;
    };

    $.fn.shift = function () {
        var bottom = this.get(0);
        this.splice(0, 1);
        return bottom;
    };
})(jQuery);

function isNumber(event) {
    if (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode != 190 && charCode > 31 &&
            (charCode < 48 || charCode > 57) &&
            (charCode < 96 || charCode > 105) &&
            (charCode < 37 || charCode > 40) &&
            charCode != 110 && charCode != 8 && charCode != 46)
            return false;
    }
    return true;
}

var $doc = $(document);

/* JAVASCRIPT KICK-OFF */
;(function ($, window, undefined) {
    'use strict';

    // var Modernizr = window.Modernizr;

    /* DOCUMENT.READY */
    $(document).ready(function () {

        //IN CUSTOM.JS
        initializeBasicLayout();
        initializeCurrentPage();
        ////////////////

    });

})(jQuery, this);


function ajaxLoadPartial(wrapper, moduleName, partialName, params, callBack, callBackParams) {
    jQuery.ajax({
        type: "POST",
        url: '/' + currentLang + '/ajaxLoadPartial/' + moduleName + '/' + partialName,
        data: {params: params},
        async: true
    }).done(function (returnString) {
        returnObject = jQuery.parseJSON(returnString);
        jQuery(wrapper).html(returnObject.html);
        if (callBack !== null) {
            callBack(callBackParams);
        }
    });

}


function ajaxLoadComponent(wrapper, moduleName, componentName, params, callBack, callBackParams) {

    jQuery.ajax({
        type: "POST",
        url: '/' + currentLang + '/ajaxLoadComponent/' + moduleName + '/' + componentName,
        data: params
    }).done(function (returnString) {
        returnObject = jQuery.parseJSON(returnString);
        jQuery(wrapper).html(returnObject.html);
        if (callBack !== null) {
            window[callBack](callBackParams);
        }
    });

}


function changePorto() {
    var countryId = jQuery('#deliverycountryId').val();
    var params = {params: {deliverycountryId: countryId, submit_url: ''}};
    jQuery.ajax({
        type: "POST",
        url: '/' + currentLang + '/ajaxLoadPartial/content/shippingMethodsForCountry',
        data: params
    }).done(function (returnString) {
        returnObject = jQuery.parseJSON(returnString);
        jQuery('#boxShippingCostsCountry').replaceWith(returnObject.html);
    });

}


function initializeLoginModal() {
    $("#forgotPasswordRevealButton").click(function () {
        //INITIALIZE forgotPassword FORM
        var callBack = 'fillModalContent';
        var callBackParams = {
            modalId: 'forgotPassword',
            jqFormSelector: '#forgot_pw',
            modalContentWrapper: '#forgotPassword > .modalContent',
            componentName: 'modalForgotPassword',
            openModal: true
        };

        ajaxLoadSecureComponent('#forgotPassword > .modalContent', 'sfGuardAuth', 'modalForgotPassword', null, callBack, callBackParams);

        return true;
    });
}


function fillModalContentStandard(callBackParams) {
    if (callBackParams.openModal) {
        $("#" + callBackParams.modalId).reveal({animation: 'none'});
    }

    if (callBackParams.additionalCallback) {
        window[callBackParams.additionalCallback]();
    }

}


//Submit Form on 'enter' DIESE FUNKTION IST zZ nur für die COUPONS relevant
function submitOnEnter(formId, e) {

    var input = jQuery("<input>").attr("type", "hidden").attr("name", "cashVoucher_x").val("");
    jQuery('#' + formId).append(jQuery(input));

    var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;

    if (keycode == 13) {
        jQuery("#" + formId).submit();
        return false;
    } else
        return true;
}


function preComputeShippingCosts(country_id) {
    if (country_id > 0) {
        var callBack = 'fillPreComputedShippingCosts';
        var callBackParams = {wrapper: '#blockOrderSumsWrapper'};
        var params = {ajax_reload: true, country_id: country_id};

        ajaxLoadSecurePartial('#blockOrderSumsWrapper', 'cart', 'blockOrderSums', {params: params}, callBack, callBackParams);
    }
}

function fillPreComputedShippingCosts(params) {
    //jQuery(params.wrapper).html(params.html);

    window.location.reload();
}


function showPaymentDescription(initial) {
    var selectedPaymentId = jQuery('input[name=payment_method_id]:radio:checked').val();

    if (!initial) {
        jQuery.each(jQuery('.payment_notice'), function () {
            jQuery(this).css('display', 'none');
        });

        jQuery.each(jQuery('.payment_error'), function () {
            jQuery(this).css('display', 'none');
        });

        if (jQuery('#payment_notice_' + selectedPaymentId).length > 0) {
            jQuery('#payment_notice_' + selectedPaymentId).css('display', 'block');
        }
    }

}


function getProductVariantId(productBsId, attributeValueId) {

    var requestString = 'chosen_attribute_value=' + attributeValueId;

    jQuery.ajax({
        type: "POST",
        url: '/' + currentLang + '/ajaxLoadProduct/' + productBsId + '?' + requestString,
        data: {loadProductVariantId: true},
        async: true
    }).done(function (html) {
        jQuery('#productIdForCartBtn').val(html);
        jQuery('html, body').animate({scrollTop: 258}, 'slow');
    });

}


/*
*
*
*
*   FILTER FUNCTIONALITY
*
*
*/

function removeFilterValue(filterUrlName, filterValueUrlName) {
    var filterElement = jQuery('.filter[urlname="' + filterUrlName + '"]');
    var filterValueElement;


    if (filterElement.length !== 0) {
        if (filterElement.attr('displaytoken') == 'selectbox') {
            //for selectbox unselect selected option
            jQuery('option:selected', filterElement).remove();
        } else if (filterElement.attr('displaytoken') == 'slider') {
            var slider = filterElement.find('.noUiSlider');
            var min = filterElement.find('.minValue').val();
            var max = filterElement.find('.maxValue').val();

            filterElement.find('.from').val(min);
            filterElement.find('.to').val(max);
        } else {
            // filter values werden als listenElemente abgebildet
            filterValueElement = filterElement.find('[urlname="' + filterValueUrlName + '"]');
            filterValueElement.closest('li').not('.active').addClass('active');
        }
        sendFilter(filterValueElement);
    } else {

        //ein url producerFilter ist gesetzt , oder es ist ein Fehler aufgetreten.
        //die aktuelle Kategorie wird ohne url Filter neu aufgerufen

        ajaxLoadCategory(jQuery('#categoryId').val());
    }

}


function standardFilterValues() {
    var filterValues = {};

    jQuery('.sliderFilter').each(function () {

        var urlname = jQuery(this).attr('urlname');

        filterValues[urlname + "From"] = jQuery("#" + urlname + "From").val();
        filterValues[urlname + "To"] = jQuery("#" + urlname + "To").val();
    });

    // PRODUCER FILTER
    jQuery('#filterForm').find('*[filterToken]').each(function (index) {

        var filterToken = jQuery(this).attr('filterToken');
        var urlname = jQuery(this).attr('urlname');

        if (filterToken == 'producer') {
            filterValues[urlname] = {};
            filterValues[urlname][0] = 'filterall';
        }
    });
    ////////////////////


    return filterValues;
}


function getFilterValues(categoryId) {
    var activeFilterSettings = false;

    var filterString = '';

    var filterValues = new standardFilterValues();

    //FILTER FORM
    if (jQuery("#filterForm").length > 0 && jQuery("#categoryId").val() == categoryId) {

        jQuery('#filterForm').find('*[filterToken]').each(function (index) {
            var filterToken = jQuery(this).attr('filterToken');
            var displayToken = jQuery(this).attr('displayToken');
            var urlname = jQuery(this).attr('urlname');

            ///////////////////
            /// SLIDER FILTER
            if (displayToken == 'slider') {
                filterValues[urlname + 'From'] = jQuery(this).find('.from').val();
                filterValues[urlname + 'To'] = jQuery(this).find('.to').val();
            }

            ////////////////////
            /// SELECTBOX FILTER
            if (displayToken == 'selectbox') {
                filterValues[urlname] = jQuery(this).find(':selected').attr('value');
            }

            ////////////////////
            /// MULTI-CHECKBOXBOX FILTER
            if (displayToken == 'multiCheckbox' || displayToken == 'colorFilter') {
                if (typeof filterValues[urlname] === 'undefined') filterValues[urlname] = {};
                var checkboxElements = jQuery(this).find("li.active .checkboxElement");
                var i = 0;

                jQuery.each(checkboxElements, function () {
                    filterValues[urlname][i] = jQuery(this).attr('urlname');
                    i++;
                });
            }
        });

    }

    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    ///// FILTER STRING CONSTRUCTION

    filterString = '';

    jQuery('#filterForm').find('*[filterToken]').each(function (index) {
        var filterToken = jQuery(this).attr('filterToken');
        var displayToken = jQuery(this).attr('displayToken');
        var urlname = jQuery(this).attr('urlname');

        var mainFilter = jQuery(this).attr('mainFilter');

        // SLIDER FILTER
        if (displayToken == 'slider') {
            filterString += '__' + urlname + '_slider.' + filterValues[urlname + 'From'] + '.' + filterValues[urlname + 'To'];
            activeFilterSettings = true;
        }

        // SELECTBOX FILTER
        if (displayToken == 'selectbox') {
            filterString += '__' + urlname + '_' + filterValues[urlname];
            if (filterValues[urlname] != 'filterall') {
                activeFilterSettings = true;
            }
        }

        // MULTICHECKBOX FILTER
        if (displayToken == 'multiCheckbox' || displayToken == 'colorFilter') {
            var multiCheckboxfilterString = '';
            jQuery.each(filterValues[urlname], function (key, value) {
                multiCheckboxfilterString += value + '.';
            });
            if (multiCheckboxfilterString === '') {
                multiCheckboxfilterString = 'filterall';
            } else {
                activeFilterSettings = true;
                multiCheckboxfilterString = multiCheckboxfilterString.substr(0, multiCheckboxfilterString.length - 1);
            }
            filterString = filterString + '__' + urlname + '_' + multiCheckboxfilterString;
        }

    });

    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

    filterValues.filterRequestString = filterString;
    //filterValues.filterRequestStringMD5 = MD5(filterString);
    filterValues.activeFilterSettings = activeFilterSettings;


    return filterValues;
}


function sendFilter(node) {
    jQuery(node).closest('li').toggleClass('active');

    jQuery('#filterLoader').show();
    jQuery('#filterForm').submit();
}


/*
*
*
*
*   AJAX RELOAD FUNCTIONS
*
*
*/

function addViewOptionsToRequestString(requestString) {
    if (jQuery(".sortProducts").length > 0) {
        requestString += jQuery('.sortProducts').val() !== '' ? '&sort=' + jQuery('.sortProducts').val() : '';
    }

    if (jQuery('#listStyleSelect').length > 0) {
        requestString += '&listStyle=' + jQuery('#listStyleSelect').val();
    }

    if (jQuery(".perpage-select").length > 0) {
        var perpage = jQuery(".perpage-select").val();
        requestString += '&perpage=' + perpage;
    }

    return requestString;
}


function addViewOptionsToRequestObject(requestObject) {
    if (jQuery("#sortOrder").length > 0 && !!jQuery('#sortOrder').val()) {
        requestObject.sort = jQuery('#sortOrder').val();
    }

    if (jQuery(".perpage-select").length > 0 && !!jQuery(".perpage-select").val()) {
        var perpage = jQuery(".perpage-select").val();
        perpage = perpage > 0 ? perpage : 60;
        requestObject.perpage = perpage;
    }
}

function ajaxLoadCategory(categoryId, page) {
    var filterRequestString;
    if (page === undefined) {
        page = 1;
    }

    var requestObject = {
        filter: null
    };
    requestObject.page = page;
    addViewOptionsToRequestObject(requestObject);

    var filterValues = null;
    if (jQuery("#categoryId").val() == categoryId) {
        filterValues = getFilterValues(categoryId);
        filterRequestString = filterValues.filterRequestString;
        //requestString += 'filterMD5='+filterValues.filterRequestStringMD5;
    }

    var requestString = '';

    requestString = addViewOptionsToRequestString(requestString);

    requestString += '&page=' + page;

    var data = {};

    if (filterValues !== null && filterValues.activeFilterSettings) {
        data = {filter: filterRequestString};
    } else {
        data = {filter: '___'};
    }


    jQuery.ajax({
        type: "POST",
        url: '/' + currentLang + '/ajaxLoadCategory/' + categoryId + '?' + requestString,
        data: data,
        async: true
    }).done(function (html) {
        jQuery('#page-content').replaceWith(html);
        jQuery('#filterLoader').hide();
//    jQuery('html, body').animate({ scrollTop: currentPageInfo.scrollTop }, 'slow');
        initializeProductCategory();

        requestObject.filter = filterRequestString;
        urlString = "?";
        for (var key in requestObject) {
            if (!!requestObject[key]) {
                if (urlString != '?') {
                    urlString += "&";
                }
                urlString += "" + key + "=" + requestObject[key];
            }
        }
        var productlistBaseUrl = $("#productlistBaseUrl").val();
        var newUrl = '/' + productlistBaseUrl + urlString;
        manualStateChange = false;
        History.pushState({url: newUrl}, document.title, newUrl);

    });

}


function ajaxLoadSearch(searchstring, page) {
    var filterRequestString;

    if (page === undefined) {
        page = 1;
    }

    var requestObject = {
        filter: null
    };
    requestObject.page = page;
    addViewOptionsToRequestObject(requestObject);

    var requestString = '';

    var filterValues = null;
    if (jQuery("#categoryId").val() == 'search') {
        filterValues = getFilterValues('search');
        filterRequestString = filterValues.filterRequestString;
    }

    requestString = addViewOptionsToRequestString(requestString);

    requestString += '&page=' + page;

    jQuery.ajax({
        type: "POST",
        url: '/' + currentLang + '/ajax_reload_search/' + searchstring + '?' + requestString,
        data: {filter: filterRequestString},
        async: true
    }).done(function (html) {
        jQuery('#page-content').replaceWith(html);
        initializeProductCategory();
        jQuery('html, body').animate({scrollTop: currentPageInfo.scrollTop}, 'slow');

        requestObject.filter = filterRequestString;
        urlString = "?";
        for (var key in requestObject) {
            if (!!requestObject[key]) {
                if (urlString != '?') {
                    urlString += "&";
                }
                urlString += "" + key + "=" + requestObject[key];
            }
        }
        var productlistBaseUrl = $("#productlistBaseUrl").val();
        var newUrl = '/' + productlistBaseUrl + urlString;
        manualStateChange = false;
        History.pushState({url: newUrl}, document.title, newUrl);

    });

}


function ajaxLoadProducer(producerId, page) {
    var filterRequestString = '';

    if (page === undefined) {
        page = 1;
    }
    var requestObject = {
        filter: null
    };
    requestObject.page = page;
    addViewOptionsToRequestObject(requestObject);

    var requestString = '';

    requestString = addViewOptionsToRequestString(requestString);

    requestString += '&page=' + page;

    if (jQuery("#categoryId").val() == 'producer') {
        filterValues = getFilterValues('producer');
        filterRequestString = filterValues.filterRequestString;
    }

    jQuery.ajax({
        type: "POST",
        url: '/' + currentLang + '/ajax_reload_producer/' + producerId + '?' + requestString,
        data: {filter: filterRequestString},
        async: true
    }).done(function (html) {
        jQuery('#page-content').replaceWith(html);
        initializeProductCategory();
        jQuery('html, body').animate({scrollTop: currentPageInfo.scrollTop}, 'slow');

        requestObject.filter = filterRequestString;
        urlString = "?";
        for (var key in requestObject) {
            if (!!requestObject[key]) {
                if (urlString != '?') {
                    urlString += "&";
                }
                urlString += "" + key + "=" + requestObject[key];
            }
        }
        var productlistBaseUrl = $("#productlistBaseUrl").val();
        var newUrl = '/' + productlistBaseUrl + urlString;
        manualStateChange = false;
        History.pushState({url: newUrl}, document.title, newUrl);

    });

}


function ajaxLoadContentPage(contentPageId, page) {
    var filterRequestString = '';

    if (page === undefined) {
        page = 1;
    }

    var filterValues = null;


    if (jQuery("#categoryId").val() == 'contentPage') {
        filterValues = getFilterValues('contentPage');
        filterRequestString = filterValues.filterRequestString;
        //requestString += 'filterMD5='+filterValues.filterRequestStringMD5;
    }

    var requestObject = {
        filter: null
    };
    requestObject.page = page;
    addViewOptionsToRequestObject(requestObject);

    var requestString = '';

    requestString = addViewOptionsToRequestString(requestString);

    requestString += '&page=' + page;


    jQuery.ajax({
        type: "POST",
        url: '/' + currentLang + '/ajaxLoadContent/' + contentPageId + '?' + requestString,
        data: {filter: filterRequestString},
        async: true
    }).done(function (html) {
        jQuery('#page-content').replaceWith(html);
        initializeProductCategory();
        jQuery('html, body').animate({scrollTop: currentPageInfo.scrollTop}, 'slow');

        requestObject.filter = filterRequestString;
        urlString = "?";
        for (var key in requestObject) {
            if (!!requestObject[key]) {
                if (urlString != '?') {
                    urlString += "&";
                }
                urlString += "" + key + "=" + requestObject[key];
            }
        }
        var productlistBaseUrl = $("#productlistBaseUrl").val();
        var newUrl = '/' + productlistBaseUrl + urlString;
        manualStateChange = false;
        History.pushState({url: newUrl}, document.title, newUrl);

    });


}


function ajaxReloadRelatedProductsPage(productBsId, type, page) {
    var filterRequestString = '';

    if (page === undefined) {
        page = 1;
    }

    var filterValues = null;
    if (jQuery("#categoryId").val() == 'relatedProducts') {
        filterValues = getFilterValues('relatedProducts');
        filterRequestString = filterValues.filterRequestString;
        //requestString += 'filterMD5='+filterValues.filterRequestStringMD5;
    }

    var requestObject = {
        filter: null
    };
    requestObject.page = page;
    addViewOptionsToRequestObject(requestObject);

    var requestString = '';

    requestString = addViewOptionsToRequestString(requestString);

    requestString += '&page=' + page;

    var data = {};

    if (filterValues !== null && filterValues.activeFilterSettings) {
        data = {filter: filterRequestString};
    } else {
        data = {filter: '___'};
    }


    jQuery.ajax({
        type: "POST",
        url: '/' + currentLang + '/ajax-related-products/' + productBsId + '/' + type + '?' + requestString,
        data: {filter: filterRequestString},
        async: true
    }).done(function (html) {
        jQuery('#page-content').replaceWith(html);
        initializeProductCategory();
        jQuery('html, body').animate({scrollTop: currentPageInfo.scrollTop}, 'slow');

        requestObject.filter = filterRequestString;
        urlString = "?";
        for (var key in requestObject) {
            if (!!requestObject[key]) {
                if (urlString != '?') {
                    urlString += "&";
                }
                urlString += "" + key + "=" + requestObject[key];
            }
        }
        var productlistBaseUrl = $("#productlistBaseUrl").val();
        var newUrl = '/' + productlistBaseUrl + urlString;
        manualStateChange = false;
        History.pushState({url: newUrl}, document.title, newUrl);

    });


}


function initializeBasicLayout() {

    $.fn.foundationAlerts ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar ? $doc.foundationTopBar() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs ? $doc.foundationTabs() : null;
    $.fn.foundationTooltips ? $doc.foundationTooltips() : null;
    $.fn.placeholder ? $('input, textarea').placeholder() : null;

    if (!Modernizr.svg) {

        $('img[src$="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });

    }


    // slick: customer reviews
    $('.unique-selling-points').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2500
                }
            }
        ]
    });

    $(".close-topbar").click(function (event) {
        $("#page-topbar").slideToggle("fast");
        event.preventDefault();
        return jQuery.ajax({
            type: "POST",
            url: "/remoteMethodInvocation",
            data: {
                class: "GeoIpSwitcher",
                method: "rememberTopbarDecision",
                params: {
                    type: 'mobile-topbar'
                }
            }
        });
    });


    // TOOGLE MAINNAV FOR MOBILE
    $("a.openPrimaryNav").click(function (e) {
        $("#primaryNav").toggleClass("open");
        $('a.openPrimaryNav').toggleClass("open");
        $('.mobileLayer').toggleClass("open");
        $('#mainnav').toggleClass("active");
        $(".lines-button").toggleClass("close");
        e.preventDefault();
    });
    $(".has-dropdown > a").click(function (e) {
        if (!$(this).parent().hasClass("open") && $(this).parent().parent().hasClass('mobileNav')) {
            e.preventDefault();
            $('.mobileNav > li.open').each(function () {
                $(this).toggleClass("open");
                $(this).children("ul:first").slideToggle("300");
                $(this).children("div:first").slideToggle("300");
            });
            $(this).parent().find(".has-dropdown.open").each(function () {
                $(this).toggleClass("open");
                $(this).children("ul:first").slideToggle("300");
                $(this).children("div:first").slideToggle("300");
            });
        }
        $(this).parent().toggleClass("open");
        $(this).parent().children("ul:first").slideToggle("300");
        $(this).parent().children("div:first").slideToggle("300");
    });

    // General Expander
    $(".toggle").on("click", function (e) {
        var t = $(this);
        t.toggleClass("open").toggleClass("closed");
        $(t.data("hide")).slideToggle('fast');
        e.preventDefault();
    });
    // focus search in mainnav
    $("#pageSearchDesktop input").on('focus', function () {
        $(".nav-bar-custom .search").addClass("grow");
    });
    $("#pageSearchDesktop input").on('blur', function () {
        $(".nav-bar-custom .search").removeClass("grow");
    });

    // MouseOver VariantGroup Selector
    $(".variantSelectorSelect").on("click", function () {
        var displayGroup = $(this).attr("displaygroup");
        $(this).parent().parent().parent().find(".variantSelectorSelect").removeClass("active");
        $(this).addClass("active");

        $(this).parent().parent().parent().find("[" + displayGroup + "]").each(function () {
            $(this).html($(this).attr(displayGroup));
        });
    });

    $("#search_word").focus(function () {
        $(this).addClass('active');
        $('.focusOnSearch').addClass('active');
        $('#search_word').parent().css('z-index', 600);
    });
    $(".focusOnSearch").on("click", function () {
        $('.focusOnSearch').removeClass('active');
        $(this).parent().css('z-index', 1);
        $('#searchResultContainer').html("");
        $("#search_word").removeClass('active');
        $("#search_word").val("");
    });

    $("#search_word").autocomplete(
        "/search/autocomplete",
        {
            delay: 1000, // default is 400ms
            appendToElement: $('#searchResultContainer'),
            url: $("#search_word").data("url"),
            onSuccess: function () {
                $('#search_word').parent().css('z-index', 600);
            }
        }
    );


    /* MODALS */

    //bind ajax functionality on quickLoginFormModal
    $(".quickLoginFormRevealButton").click(function () {
        //INITIALIZE LOGIN FORM
        var callBack = 'fillModalContent';
        var callBackParams = {
            modalId: 'quickLoginForm',
            jqFormSelector: '#auth',
            modalContentWrapper: '#quickLoginForm > .modalContent',
            componentName: 'modalSignin',
            openModal: true,
            additionalCallback: 'initializeLoginModal'
        };
        var modalParams = {};
        if ($(this).attr('data-login-target')) {
            modalParams.redirect_route = $(this).attr('data-login-target');
        }
        ajaxLoadSecureComponent('#quickLoginForm > .modalContent', 'sfGuardAuth', 'modalSignin', modalParams, callBack, callBackParams);
        return false;
    });

    $("#snapchatModalButton").click(function () {
        $("#snapchatModal").reveal({
            animation: 'none'
        });
        return false;
    });


    //slide/show shippingAddressForm on radio button click
    $('#shippingAddressRadioSelectorWrapper').find('input:radio.formClassRadio').click(function () {

        var formClass = 'formClassContainer';
        jQuery('.' + formClass).each(function () {
            jQuery(this).slideUp();
        });
        var id = jQuery(this).attr('id');
        jQuery('#' + id + 'Form').slideDown();

    });

    History.Adapter.bind(window, 'statechange', function () {
        if (manualStateChange == true) {
            window.location.href = document.location;
        }
        manualStateChange = true;
    });
}

var manualStateChange = true;


function rememberGeoDecision(type) {
    // send ajax to remember decision
    // in user session
    return jQuery.ajax({
        type: "POST",
        url: "/remoteMethodInvocation",
        data: {
            class: "GeoIpSwitcher",
            method: "rememberDecision",
            params: {
                type: type
            }
        }
    });
}

/* INITIALIZE CURRENT PAGE */
function initializeCurrentPage() {

    if (showGeoLocationModal) {
        $("#geoLocationModal").reveal({
            animation: 'none',
            close: function () {
                rememberGeoDecision("language");
            }
        });

        // if a language is selected, never show the layer again
        $("#geoLocationModal").find(".language-selector a").on("click", function (e) {
            e.preventDefault();
            var href = this.getAttribute("href");
            rememberGeoDecision("language").then(function () {
                $("#geoLocationModal").trigger('reveal:close');
                window.location = href;
            });
        });
    }

    $(".close-geo-shipping").on("click", function (e) {
        jQuery(".geo-ip-shipping").remove();
        rememberGeoDecision("shipping_country");
    });


    if (currentPageInfo.module == 'cart' && currentPageInfo.action == 'stepAddress') {
        //INITIALIZE LOGIN FORM
        var callBack = 'fillModalContent';
        var callBackParams = {
            modalId: 'inlineLoginForm',
            jqFormSelector: '#inlineLoginForm #auth',
            modalContentWrapper: '#inlineLoginForm > .modalContent',
            componentName: 'modalSignin',
            openModal: false,
            hideElement: ".newCustomerBox, .loginBox > h3",
            additionalCallback: 'initializeLoginModal'
        };
        var modalParams = {};
        modalParams.redirect_route = '@cart_address';
        ajaxLoadSecureComponent('#inlineLoginForm .modalContent', 'sfGuardAuth', 'modalSignin', modalParams, callBack, callBackParams);
    }
    if (currentPageInfo.module == 'content' && currentPageInfo.action == 'show') {
        // initializeContentPage();
        if (currentPageInfo.isLandingPage === true) {
            initializeProductCategory();
        } else {
            $('.image-popup').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-img-mobile',
                image: {
                    verticalFit: true
                }
            });
            $('.magnific').each(function () { // the containers for all your galleries
                $(this).magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    mainClass: 'mfp-img-mobile',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0, 1],
                        tCounter: '<span class="mfp-counter">%curr% / %total%</span>'
                    },
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                    }
                });
            });
        }
    }
    if (currentPageInfo.id == 'homepage') {
        initializeHomepage();
    }
    if (currentPageInfo.id == 'pageMainCategory') {
        initializeProductCategory();
    }
    if (currentPageInfo.id == 'producer') {
        initializeProductCategory();
    }
    if (currentPageInfo.action == 'landingPage') {
        initializeProductCategory();
    }
    if (currentPageInfo.id == 'search') {
        initializeProductCategory();
    }
    if (currentPageInfo.id == 'pageSubCategory') {
        initializeProductCategory();
    }
    if (currentPageInfo.id == 'productDetail') {
        initializeProductDetail();
    }
    if (currentPageInfo.id == 'leaflet') {
        initializeLeaflet();
    }
    if (currentPageInfo.id == 'register') {
        var myInput = document.getElementById('personal_email_repeat');
        myInput.onpaste = function (e) {
            e.preventDefault();
        };
    }
    if (currentPageInfo.id == 'cartStepAddress') {
        var myInput = document.getElementById('guestdata_email_repeat');
        if (myInput) {
            myInput.onpaste = function (e) {
                e.preventDefault();
            };
        }
        $('#chk-create-account').on('click', function () {
            $('#password-box').toggle($(this).checked);
        });
    }
    if (currentPageInfo.id == 'cart') {
        jQuery('#btnUpdateCart').click(function () {
            jQuery('#updatecart').submit();
        });
    }
    if (currentPageInfo.id == 'cartStepPayment') {
        // slideDown/show Checkout paymentMethodDetails on radio button click
        $('.paymentMethod').each(function () {
            var paymentMethodDiv = jQuery(this);
            paymentMethodDiv.find(':radio').click(function () {
                jQuery('.paymentMethod').each(function () {
                    if (paymentMethodDiv.attr('class') != jQuery(this).attr('class')) {
                        jQuery(this).find('.paymentMethodDetails').slideUp();
                    }
                });
                paymentMethodDiv.find('.paymentMethodDetails').slideDown();
            });
        });
        // AJAX LOAD STEP SHIPPING INTO STEP PAYMENT

        // BIND ON SELECT PAYMENT METHOD
        var url = jQuery('#shipping').attr('step_shipping_url');
        $('input[name="payment_method_id"]:radio').click(function () {
            //BLOCK NEXT STEP BUTTON
            jQuery('input[name=next_x]').attr('disabled', true);
            var selectedPaymentmethodId = $('input[name=payment_method_id]:checked').val();
            $('#shipping').load(url + '?payment_method_id=' + selectedPaymentmethodId + ' #stepShippingReloadWrapper', function () {
                //UN-BLOCK NEXT STEP BUTTON
                jQuery('input[name="next_x"]').removeAttr('disabled');

            });
        });
    }
    if (currentPageInfo.id == 'cartStepAddress') {
        // slideDown/show Checkout paymentMethodDetails on radio button click
        $('.paymentMethod').each(function () {
            var paymentMethodDiv = jQuery(this);
            paymentMethodDiv.find(':radio').click(function () {
                jQuery('.paymentMethod').each(function () {
                    if (paymentMethodDiv.attr('class') != jQuery(this).attr('class')) {
                        jQuery(this).find('.paymentMethodDetails').slideUp();
                    }
                });
                paymentMethodDiv.find('.paymentMethodDetails').slideDown();
            });
        });
    }
    if (currentPageInfo.id == 'signin') {
        $("#forgotPasswordRevealButtonStatic").click(function () {
            //INITIALIZE forgotPassword FORM
            var callBack = 'fillModalContent';
            var callBackParams = {
                modalId: 'forgotPassword',
                jqFormSelector: '#forgot_pw',
                modalContentWrapper: '#forgotPassword > .modalContent',
                componentName: 'modalForgotPassword',
                openModal: true
            };

            ajaxLoadSecureComponent('#forgotPassword > .modalContent', 'sfGuardAuth', 'modalForgotPassword', null, callBack, callBackParams);

            return false;
        });
    }
    if (currentPageInfo.id == 'accountIndex') {
        jQuery('#acceptProductReminder').click(function () {
            var md5hash = jQuery(this).attr('md5hash');
            var url = jQuery(this).attr('checked') ? '/cpar/' : '/upar/';

            jQuery.ajax({
                type: "POST",
                url: url + md5hash
            }).done(function (returnString) {
                returnObject = jQuery.parseJSON(returnString);
                jQuery(wrapper).html(returnObject.html);
                if (callBack != null) {
                    window[callBack](callBackParams);
                }
            });

        });
    }

}

//////////////////////////////////////


function ajaxReloadModalProductReminder(node) {
    var productBsId = jQuery('#productReminderModal').find('#productBsId').val();
    var chosen_attribute_value = jQuery(node).val();
    var callBack = 'initializeProductReminderModal';
    var callBackParams = {};

    ajaxLoadComponent('#productReminderModal > .modalContent', 'product', 'modalProductReminder', {
        productBsId: productBsId,
        chosen_attribute_value: chosen_attribute_value
    }, callBack, callBackParams);
}


function initializeProductReminderModal() {

    (function bindAjaxFormToProductReminderform() {

        var productBsId = jQuery('#productReminderModal').find('#productBsId').val();

        $('#productReminderForm').ajaxForm({
            data: {ajax: true, bsId: productBsId},
            complete: function (response) {
                var data = jQuery.parseJSON(response.responseText);
                jQuery('#resendId').val(data.resendId);
                jQuery('.availability-reminder-message').hide();
                if (data.success > 0) {
                    jQuery('#productReminderForm').hide();
                    jQuery('#success-message-' + data.success).show();
                } else if (data.error > 0) {
                    jQuery('#productReminderForm').show();
                    if (data.error == 1 || data.error == 3) {
                        jQuery('#error-message-1').show();
                    }
                    if (data.error == 2 || data.error == 3) {
                        jQuery('#error-message-2').show();
                    }
                }
            }
        });
    })();

    jQuery('#reminder-email').focus();
    jQuery(".alert-box a").click(function (event) {
        jQuery('.alert-box').hide();
        event.preventDefault();
        $('#productReminderForm').submit();
    });

}


function initializeBuybox() {
    onLoadRecaptcha();

    (function bindAjaxFormToAddToShoppingCart() {
        var url = $('form.addtoshoppingcart', '#detail').attr('data-action');
        $('form.addtoshoppingcart', '#detail').ajaxForm({
            url: url,
            method: 'POST',
            data: {
                ajax: true,
                forward: {'module': 'cart', 'action': 'wasadded'},
                addToCart: null,
                returnHtmlSnippets: {
                    'partials': [
                        {
                            'module': 'cart',
                            'partialName': 'cartHeader',
                            'params': {'template': 'default'}
                        },
                        {
                            'module': 'cart',
                            'partialName': 'cartHeader',
                            'returnName': 'stickyCartHeader',
                            'params': {'template': 'sticky'}
                        },
                        {
                            'module': 'cart',
                            'partialName': 'modalWasadded'
                        }
                    ]
                }
            },
            beforeSubmit: function () {
                jQuery('#submitAddToCart').attr('disabled', true);
            },
            complete: function (response) {
                var returnObject = JSON.parse(response.responseText);
                jQuery('#cartPreview').html(returnObject.partials.cartHeader);
                jQuery('#cartHeaderStickyNavbar').html(returnObject.partials.stickyCartHeader);
                jQuery('#wasAddedToCart').html(returnObject.partials.modalWasadded);

                $('#wasAddedToCart').reveal({animation: 'none'});

                var basketFadeout = $('.cartHeader .topbar_dropdown');
                basketFadeout.stop().fadeIn().delay(5000).fadeOut();

                //ADD CURRENT VARIANT_BS_ID TO RELOAD VARIANT DETAIL PAGE
                var productUrl = window.location.pathname + '-' + jQuery("input[name=product_bs_id]").val();

                jQuery('#detailRight').load(productUrl + ' #detailRight > *', function () {
                    initializeProductDetail();
                    //unblock submit
                    jQuery('#submitAddToCart').attr('disabled', false);
                });

            }
        });
    })();

    //bind ajax functionality on productReminderModal
    $(".productReminderRevealButton:not(option)").click(function () {
        if ($('#productBsId').val() == "") {
            // show error
            $(".selectVariants > .dropdown").addClass("error");
            return false;
        }
        var productBsId = $('#productBsId').val();
        var chosen_attribute_value = $(this).attr('value');

        //INITIALIZE PRODUCT REMINDER FORM
        var callBack = 'fillModalContentStandard';
        var callBackParams = {
            modalId: 'productReminderModal',
            jqFormSelector: '#productReminderForm',
            modalContentWrapper: '#productReminderModal > .modalContent',
            componentName: 'modalSignin',
            openModal: true,
            additionalCallback: 'initializeProductReminderModal'
        };

        ajaxLoadComponent('#productReminderModal > .modalContent', 'product', 'modalProductReminder', {
            productBsId: productBsId,
            disabled: true,
            chosen_attribute_value: chosen_attribute_value
        }, callBack, callBackParams);
    });

    $("#shippingCostModalButton").click(function () {
        $("#shippingCostsModal").reveal();
    });


    $("#sizeguideModalButton").click(function () {
        $("#sizeguideModal").reveal();
    });

    // jQuery EasyDropDown
    var $selects = $('.customSelectBox');
    $selects.easyDropDown({
        onChange: function (selected, option) {
            reloadProduct($('#productBsId'), selected.value);
            return false;
        }
    });

    // MouseOver VariantGroup Selector
    $(".variantSelectorSelect").on("click", function () {
        var displayGroup = $(this).attr("displaygroup");
        $(this).parent().parent().parent().find(".variantSelectorSelect").removeClass("active");
        $(this).addClass("active");

        $(this).parent().parent().parent().find("[" + displayGroup + "]").each(function () {
            $(this).html($(this).attr(displayGroup));
        });
    });

}

function initializeProductDetail() {

    initializeBuybox();


    // General Expander
    $(".toggle").off("click");
    // General Expander
    $(".toggle").on("click", function (e) {
        var t = $(this);
        t.toggleClass("open").toggleClass("closed");
        $(t.data("hide")).slideToggle('fast');
        e.preventDefault();
    });

}


function initializeHomepage() {

    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false
    });

}


function initializeProductCategory() {

    // General Expander
    $(".toggle").off("click");
    // General Expander
    $(".toggle").on("click", function (e) {
        var t = $(this);
        t.toggleClass("open").toggleClass("closed");
        $(t.data("hide")).slideToggle('fast');
        e.preventDefault()
    });

    // FILTERS OPEN/CLOSE
    $(".filter .selector").click(function (e) {
        $(this).next("ul, div").slideToggle("fast");
        $(this).toggleClass("open");
        $(this).next("ul, div").css('display', 'block');
        e.preventDefault()
    });


    initializeFilterBar();

}


function initializeFilterBar() {

    lazyLoadInstance.update();

    // TOOGLE HEADLINES FOR FILTERS
    $(".filter h5").click(function (e) {
        $(this).next("ul, nav, div, form").slideToggle("fast");
        $(this).toggleClass("open closed");
        e.preventDefault()
    });

    // show/hide filterContainer /MOBILE
    $(".toggleFilter h5").click(function (event) {
        $(".filterContainer").toggleClass("active");
        $(this).toggleClass("open closed");
        event.preventDefault();
    });

    initializeSliderFilter();
}


function initializeLeaflet() {
    initializeProductCategory();

    var cartUrl = jQuery('#cart_href').val();

    // ein Produkt in den Warenkorb
    jQuery('.leaflet_into_cart_link').click(function () {
        var item = jQuery(this).closest('.item');
        var product_id = item.attr('product_id');
        var amount = item.find('.leaflet-amount').val();

        jQuery.ajax({
            type: 'post',
            url: jQuery(this).attr('href'),
            data: {
                ajax: true,
                amount: amount,
                product_id: product_id,
                forward: {'module': 'cart', 'action': 'wasadded'},
                addToCart: null,
                returnHtmlSnippets: {
                    'partials': [
                        {
                            'module': 'cart',
                            'partialName': 'cartHeader',
                            'params': {'template': 'default'}
                        },
                        {
                            'module': 'cart',
                            'partialName': 'cartHeader',
                            'returnName': 'cartHeaderStickyNavbar',
                            'params': {'template': 'sticky'}
                        },
                        {
                            'module': 'cart',
                            'partialName': 'modalWasadded'
                        }
                    ]
                }
            },
            beforeSend: function () {
                // jQuery(".leaflet_into_cart_link").off("click");
            },
            success: function (response) {
                var returnObject = JSON.parse(response);
                jQuery('.cartHeader').html(returnObject.partials.cartHeader);
                jQuery('#cartHeaderStickyNavbar').html(returnObject.partials.cartHeaderStickyNavbar);
                jQuery('#wasAddedToCart').html(returnObject.partials.modalWasadded);

                $('#wasAddedToCart').reveal({animation: 'none'});

                // jQuery('#submitAddToCart').attr('disabled', false);

            }
        });

        return false;
    });

    // alle in den Warenkorb
    jQuery('#button_addtocart_all').click(function () {
        var products = {};
        jQuery.each(jQuery('.item'), function () {

            item = jQuery(this);
            var product_id = item.attr('product_id');
            var amount = item.find('.leaflet-amount').val();

            if (amount > 0) {
                products[product_id] = amount;
            }


        });
        jQuery.ajax({
            type: 'post',
            url: jQuery('#button_addtocart_all').attr('href'),
            data: {
                ajax: true,
                products: products
            },
            success: function (response) {
                var returnObject = JSON.parse(response);
                if (returnObject.success) {
                    window.location.href = cartUrl;
                } else {
                    alert(returnObject.message);
                    window.location.href = cartUrl;
                }
            }
        });

        return false;
    });

}


function initializeSliderFilter() {

    // Slider for filterPrice & filterSlider
    jQuery(".noUiSlider").each(function () {

        var values;
        var trigger = false;

        var sliderFilterElement = jQuery(this).closest('.filter');

        // //MIMIC "ON SLIDE STOP" EVENT
        // sliderFilterElement.find('.noUi-handle').mousedown(function(){
        //   alert(sliderFilterElement.find('.noUi-handle'));
        //   trigger = true;
        // });
        // jQuery(window).mouseup(function(){
        //   alert('mu')
        //   if(trigger){
        //     alert('up');
        //     trigger = false;
        //     sliderFilterElement.find('.from').val(values[0]);
        //     sliderFilterElement.find('.to').val(values[1]);
        //     sendFilter();
        //   }
        // });

        // // SAME FOR MOBILE
        // sliderFilterElement.find('.noUi-handle').bind('touchstart', function(){
        //   trigger = true;
        // });
        // sliderFilterElement.find('.noUi-handle').bind('touchend', function(){
        //   if(trigger){
        //     trigger = false;
        //     sliderFilterElement.find('.from').val(values[0]);
        //     sliderFilterElement.find('.to').val(values[1]);
        //     sendFilter();
        //   }
        // });

        var unitname = sliderFilterElement.attr('unitname');

        var min = sliderFilterElement.find('.min').val();
        var max = sliderFilterElement.find('.max').val();
        var from = sliderFilterElement.find('.from').val();
        var to = sliderFilterElement.find('.to').val();

        jQuery(this).noUiSlider({
            range: [min, max]
            , start: [from, to]
            , step: 1
            , slide: function () {
                values = jQuery(this).val();
                sliderFilterElement.find('.filterSliderValues').text(
                    Math.round(values[0]) +
                    " - " +
                    Math.round(values[1]) +
                    " " + unitname
                );
            }
            , set: function () {
                sliderFilterElement.find('.from').val(Math.round(values[0]));
                sliderFilterElement.find('.to').val(Math.round(values[1]));
                sendFilter();
            }
        });
    });

}


// ONLY RELOAD ProductBsId
function reloadProduct(productSelected, attributeValueId) {
    $('#submitAddToCart').attr('disabled', true);

    var data = {
        chosen_attribute_value: attributeValueId,
        returnHtmlSnippets: {
            'partials': [
                {
                    module: 'product',
                    path: '_productDetail',
                    partialName: 'buybox',
                }
            ]
        }
    };

    jQuery.ajax({
        type: "POST",
        url: window.location.pathname,
        data: data,
        async: true
    }).done(function (returnObj) {
        $('.buybox').replaceWith(returnObj.partials.buybox);
        initializeBuybox();
        if (productSelected) {
            var initializedProduct = returnObj.initializedProduct;
            $('#productBsId').val(initializedProduct.bsId);
            if (initializedProduct.availabilityForProductDetail.purchasePossible) {
                $('#submitAddToCart').attr('disabled', false);
            }
        } else {
            $('#productBsId').val("");
        }
    });
}

function onLoadRecaptcha() {
    if (window.grecaptcha && typeof window.grecaptcha.render == 'function' && $('#g-recaptcha').length > 0 && $('#g-recaptcha').attr('initialized') != 1) {
        $('#g-recaptcha').attr('initialized', 1);
        grecaptcha.render('g-recaptcha');
    }
}

function checkCaptchaResult() {
    var data = {
        grecaptcha: grecaptcha.getResponse(),
        returnHtmlSnippets: {
            'partials': [
                {
                    module: 'product',
                    path: '_productDetail',
                    partialName: 'buybox',
                }
            ]
        }
    };
    jQuery.ajax({
        type: "POST",
        url: '/' + currentLang + '/captcha/buybox/' + $('#g-recaptcha').attr('data-id'),
        data: data,
        async: true
    }).done(function (returnObj) {
        $('.buybox').replaceWith(returnObj.partials.buybox);
        initializeBuybox();
    });
}

/*
*
*
*
*   FILTER FUNCTIONALITY
*
*
*/

function removeFilterValue(filterUrlName, filterValueUrlName) {
    var filterElement = jQuery('.filter[urlname="' + filterUrlName + '"]');
    var filterValueElement;
    filterValueUrlName = filterValueUrlName.split("::")[0];


    if (filterElement.length !== 0) {
        if (filterElement.attr('displaytoken') == 'selectbox') {
            //for selectbox unselect selected option
            jQuery('option:selected', filterElement).remove();
        } else if (filterElement.attr('displaytoken') == 'slider') {
            var slider = filterElement.find('.noUiSlider');
            var min = filterElement.find('.minValue').val();
            var max = filterElement.find('.maxValue').val();

            filterElement.find('.from').val(min);
            filterElement.find('.to').val(max);
        } else {
            // filter values werden als listenElemente abgebildet
            filterValueElement = filterElement.find('[urlname="' + filterValueUrlName + '"]');
            filterValueElement.closest('li').not('.active').addClass('active');
        }
        sendFilter(filterValueElement);
    } else {
        //ein url producerFilter ist gesetzt , oder es ist ein Fehler aufgetreten.
        //die aktuelle Kategorie wird ohne url Filter neu aufgerufen

        ajaxLoadCategory(jQuery('#categoryId').val());
    }

}

// charcheck
const REGEX_LATIN_RANGES = '\u0020-\u007E \u00A0-\u00FF \u0152-\u0153 \u0160-\u0161 \u0178 \u017D-\u017E \u0192 \u02C6 \u02DC \u2013-\u2014 \u2018-\u201A \u201C-\u201E \u2020-\u2022 \u2026 \u2030 \u2039-\u203A \u20AC \u2122'
var availableRegex = {
    notOnlySpaces: /^\s*$/, // match one or only whitespaces
    email: /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
    onlyLatin: new RegExp('^[' + REGEX_LATIN_RANGES + ']+$', 'u'),
    matchAllCharactersThereAreNotLatin: new RegExp('[^' + REGEX_LATIN_RANGES + '+]', 'ug'),
}

$('.charcheck').on('input', function () {
    charCheckForOnlyLatin($(this))
});

function charCheckForOnlyLatin(currentElement) {
    hideErrorField(currentElement)
    if (currentElement.hasClass('only-latin')) {
        var isIllegalCharacterDetected = checkForIllegalCharacter(currentElement)
        if (isIllegalCharacterDetected) {
            fillAndShowErrorField(currentElement, 'error_following_invalid_characters', getAllIllegalCharacters(currentElement))
            return;
        } else {
            hideErrorField($(currentElement))
        }
    }
}

function fillAndShowErrorField(currentTarget, errorMessageClass, errorMessageAddition) {
    currentTarget.addClass('charcheck-error')
    currentTarget.parent().find('small.charcheck-error').show()
    currentTarget.parent().find('small.charcheck-error').html(currentTarget.parent().find('.' + errorMessageClass).text())
    if (errorMessageAddition.length > 0) {
        currentTarget.parent().find('small.charcheck-error').append('<br>' + errorMessageAddition)
    }
}

function hideErrorField(currentTarget) {
    currentTarget.removeClass('charcheck-error')
    if (currentTarget.parent().find('small.charcheck-error')) {
        currentTarget.parent().find('small.charcheck-error').hide()
    }
}

function checkForIllegalCharacter(currentElement) {
    var currentContent = currentElement.val()
    for (var charIndex = currentContent.length; charIndex > 0; charIndex--) {
        var currentChar = currentContent.charAt(charIndex - 1)
        if (!availableRegex.onlyLatin.test(currentChar)) {
            return true
        }
    }
    return false
}

function getAllIllegalCharacters(currentContent) {
    var matchedCharacters = currentContent.val().match(availableRegex.matchAllCharactersThereAreNotLatin)
    var matchesOutput = ''
    for (i = 0; i < matchedCharacters.length; i++) {
        matchesOutput += matchedCharacters[i]
        if (i + 1 < matchedCharacters.length) {
            matchesOutput += ', '
        }
    }
    return matchesOutput
}

function getTranslations(toTranslate, language) {
    var requestLanguage = language ? language : currentLang
    var jqXHR = jQuery.ajax({
        type: "POST",
        url: '/' + requestLanguage + '/translate',
        data: {toTranslate: toTranslate},
        async: false
    });
    return jQuery.parseJSON(jqXHR.responseText);
}


!function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function (i) {
    "use strict";
    var e = window.Slick || {};
    (e = function () {
        var e = 0;
        return function (t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null; else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({height: e}, i.options.speed)
        }
    }, e.prototype.animateSlide = function (e, t) {
        var o = {}, s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({left: e}, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({top: e}, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({animStart: s.currentLeft}).animate({animStart: e}, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function (i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function () {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function () {
        var e = this, t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function () {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function (i) {
        var e = this, t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function () {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var i = this, e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function (e, t) {
        var o, s, n, r = this, l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case"previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case"next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case"index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1]; else for (var o in e) {
            if (i < e[o]) {
                i = t;
                break
            }
            t = e[o]
        }
        return i
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function (i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function (i) {
        var e = this, t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function (i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({zIndex: t.options.zIndex}), t.$slides.eq(i).animate({opacity: 1}, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function () {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function (i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, e.prototype.getDotCount = function () {
        var i = this, e = 0, t = 0, o = 0;
        if (!0 === i.options.infinite) if (i.slideCount <= i.options.slidesToShow) ++o; else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (!0 === i.options.centerMode) o = i.slideCount; else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function (i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
        return this.options[i]
    }, e.prototype.getNavigableIndexes = function () {
        var i, e = this, t = 0, o = 0, s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
        }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
        this.changeSlide({data: {message: "index", index: parseInt(i)}}, e)
    }, e.prototype.init = function (e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this, t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function (i) {
                return i >= 0 && i < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), -1 !== s && i(this).attr({"aria-describedby": "slick-slide-control" + e.instanceUid + s})
        }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
            var n = o[s];
            i(this).attr({role: "presentation"}), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function (i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: !0 === e.options.rtl ? "next" : "previous"}}) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: !0 === e.options.rtl ? "previous" : "next"}}))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            i("img[data-lazy]", e).each(function () {
                var e = i(this), t = i(this).attr("data-lazy"), o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r = document.createElement("img");
                r.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }, r.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                }, r.src = t
            })
        }

        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, e.prototype.loadSlider = function () {
        var i = this;
        i.setPosition(), i.$slideTrack.css({opacity: 1}), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, e.prototype.orientationChange = function () {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, e.prototype.preventDefault = function (i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function (e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {currentSlide: t}), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
            }
            s.breakpoints.sort(function (i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.setCSS = function (i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function () {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({padding: "0px " + i.options.centerPadding}) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({padding: i.options.centerPadding + " 0px"})), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, t = this;
        t.$slides.each(function (o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0})
        }), t.$slides.eq(t.currentSlide).css({zIndex: t.options.zIndex - 1, opacity: 1})
    }, e.prototype.setHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, t, o, s, n, r = this, l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s; else if ("multiple" === n) i.each(o, function (i, e) {
            r.options[i] = e
        }); else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]]; else {
            for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
            r.options.responsive.push(s[t])
        }
        l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function () {
        var i = this, e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, e.prototype.setSlideClasses = function (i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function (i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function (e) {
        var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }, e.prototype.slideHandler = function (i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o)); else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o)); else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
                a.postSlide(s)
            })) : a.postSlide(s), void a.animateHeight();
            !0 !== t ? a.animateSlide(d, function () {
                a.postSlide(s)
            }) : a.postSlide(s)
        }
    }, e.prototype.startLoad = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case"left":
                case"down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function (i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case"start":
                e.swipeStart(i);
                break;
            case"move":
                e.swipeMove(i);
                break;
            case"end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function (i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, e.prototype.swipeStart = function (i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function () {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for (i = 0; i < r; i++) if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        return o
    }
});
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse",
        m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close",
        t = function () {
        }, u = !!window.jQuery, v = a(window), w = function (a, c) {
            b.ev.on(o + a + p, c)
        }, x = function (b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        }, y = function (c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        }, z = function (c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        }, A = function () {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        }, B = function () {
            var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;) if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t, init: function () {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        }, open: function (c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                    b.index = e;
                    break
                }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function () {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(), n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        }, close: function () {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
                b._close()
            }, b.st.removalDelay)) : b._close())
        }, _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {marginRight: ""};
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        }, updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        }, updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        }, appendContent: function (a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        }, parseEl: function (c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {el: a(e)} : (d = e.type, e = {data: e, src: e.src}), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass("mfp-" + f[g])) {
                    d = f[g];
                    break
                }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        }, addGroup: function (a, c) {
            var d = function (d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        }, _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g) if (a.isFunction(g)) {
                    if (!g.call(b)) return !0
                } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        }, updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {status: a, text: d};
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        }, _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        }, _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        }, _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        }, _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        }, _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        }, _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        }, _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function () {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function (b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function (c) {
        A();
        var d = a(this);
        if ("string" == typeof c) if ("open" === c) {
            var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
            f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({mfpEl: e}, d, f)
        } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline", G = function () {
        E && (D.after(E.addClass(C)).detach(), E = null)
    };
    a.magnificPopup.registerModule(F, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                b.types.push(F), w(h + "." + F, function () {
                    G()
                })
            }, getInline: function (c, d) {
                if (G(), c.src) {
                    var e = b.st.inline, f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax", J = function () {
        H && a(document.body).removeClass(H)
    }, K = function () {
        J(), b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            }, getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src, success: function (d, e, f) {
                        var g = {data: d, xhr: f};
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    }, error: function () {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function (c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var c = b.st.image, d = ".image";
                b.types.push("image"), w(m + d, function () {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function () {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            }, resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            }, _onImageHasSize: function (a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            }, findImageSize: function (a) {
                var c = 0, d = a.img[0], e = function (f) {
                    L && clearInterval(L), L = setInterval(function () {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                    }, f)
                };
                e(1)
            }, getImage: function (c, d) {
                var e = 0, f = function () {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                }, g = function () {
                    c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                }, h = b.st.image, i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function () {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) {
                return a.is("img") ? a : a.find("img")
            }
        }, proto: {
            initZoom: function () {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function (a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            d = "all " + c.duration / 1e3 + "s " + c.easing, e = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            }, f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                    }, k = function () {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                                f.css(b._getOffset(!0)), e = setTimeout(function () {
                                    k(), setTimeout(function () {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function () {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === b.currItem.type
            }, _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1
            }, _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f};
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe", Q = "//about:blank", R = function (a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                b.types.push(P), w("BeforeChange", function (a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function () {
                    R()
                })
            }, getIframe: function (c, d) {
                var e = c.src, f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function (a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }, T = function (a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var c = b.st.gallery, e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function (a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function (a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function (a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function () {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function () {
                            b.prev()
                        }), f.click(function () {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function () {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function () {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            }, next: function () {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            }, prev: function () {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            }, goTo: function (a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            }, preloadNearbyImages: function () {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            }, _preloadItem: function (c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                        d.hasSize = !0
                    }).on("error.mfploader", function () {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina, c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
                        b.img.css({"max-width": b.img[0].naturalWidth / c, width: "100%"})
                    }), w("ElementParse." + U, function (b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});
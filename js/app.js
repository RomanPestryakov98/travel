(() => {
    var __webpack_modules__ = {
        957: function(module) {
            var t;
            this, t = function() {
                "use strict";
                function e(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        }))), n.push.apply(n, r);
                    }
                    return n;
                }
                function t(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var i = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? e(Object(i), !0).forEach((function(e) {
                            r(t, e, i[e]);
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                        }));
                    }
                    return t;
                }
                function n(e) {
                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, n(e);
                }
                function r(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                function i(e) {
                    return function(e) {
                        if (Array.isArray(e)) return s(e);
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                    }(e) || o(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function o(e, t) {
                    if (e) {
                        if ("string" == typeof e) return s(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0;
                    }
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                var u = function(e) {
                    return "string" == typeof e ? document.querySelector(e) : e();
                }, a = function(e, t) {
                    var n = "string" == typeof e ? document.createElement(e) : e;
                    for (var r in t) {
                        var i = t[r];
                        if ("inside" === r) i.append(n); else if ("dest" === r) u(i[0]).insertAdjacentElement(i[1], n); else if ("around" === r) {
                            var o = i;
                            o.parentNode.insertBefore(n, o), n.append(o), null != o.getAttribute("autofocus") && o.focus();
                        } else r in n ? n[r] = i : n.setAttribute(r, i);
                    }
                    return n;
                }, c = function(e, t) {
                    return e = String(e).toLowerCase(), t ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").normalize("NFC") : e;
                }, l = function(e, n) {
                    return a("mark", t({
                        innerHTML: e
                    }, "string" == typeof n && {
                        class: n
                    })).outerHTML;
                }, f = function(e, t) {
                    t.input.dispatchEvent(new CustomEvent(e, {
                        bubbles: !0,
                        detail: t.feedback,
                        cancelable: !0
                    }));
                }, p = function(e, t, n) {
                    var r = n || {}, i = r.mode, o = r.diacritics, s = r.highlight, u = c(t, o);
                    if (t = String(t), e = c(e, o), "loose" === i) {
                        var a = (e = e.replace(/ /g, "")).length, f = 0, p = Array.from(t).map((function(t, n) {
                            return f < a && u[n] === e[f] && (t = s ? l(t, s) : t, f++), t;
                        })).join("");
                        if (f === a) return p;
                    } else {
                        var d = u.indexOf(e);
                        if (~d) return e = t.substring(d, d + e.length), d = s ? t.replace(e, l(e, s)) : t;
                    }
                }, d = function(e, t) {
                    return new Promise((function(n, r) {
                        var i;
                        return (i = e.data).cache && i.store ? n() : new Promise((function(e, n) {
                            return "function" == typeof i.src ? i.src(t).then(e, n) : e(i.src);
                        })).then((function(t) {
                            try {
                                return e.feedback = i.store = t, f("response", e), n();
                            } catch (e) {
                                return r(e);
                            }
                        }), r);
                    }));
                }, h = function(e, t) {
                    var n = t.data, r = t.searchEngine, i = [];
                    n.store.forEach((function(s, u) {
                        var a = function(n) {
                            var o = n ? s[n] : s, u = "function" == typeof r ? r(e, o) : p(e, o, {
                                mode: r,
                                diacritics: t.diacritics,
                                highlight: t.resultItem.highlight
                            });
                            if (u) {
                                var a = {
                                    match: u,
                                    value: s
                                };
                                n && (a.key = n), i.push(a);
                            }
                        };
                        if (n.keys) {
                            var c, l = function(e, t) {
                                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!n) {
                                    if (Array.isArray(e) || (n = o(e)) || t && e && "number" == typeof e.length) {
                                        n && (e = n);
                                        var r = 0, i = function() {};
                                        return {
                                            s: i,
                                            n: function() {
                                                return r >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[r++]
                                                };
                                            },
                                            e: function(e) {
                                                throw e;
                                            },
                                            f: i
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var s, u = !0, a = !1;
                                return {
                                    s: function() {
                                        n = n.call(e);
                                    },
                                    n: function() {
                                        var e = n.next();
                                        return u = e.done, e;
                                    },
                                    e: function(e) {
                                        a = !0, s = e;
                                    },
                                    f: function() {
                                        try {
                                            u || null == n.return || n.return();
                                        } finally {
                                            if (a) throw s;
                                        }
                                    }
                                };
                            }(n.keys);
                            try {
                                for (l.s(); !(c = l.n()).done; ) a(c.value);
                            } catch (e) {
                                l.e(e);
                            } finally {
                                l.f();
                            }
                        } else a();
                    })), n.filter && (i = n.filter(i));
                    var s = i.slice(0, t.resultsList.maxResults);
                    t.feedback = {
                        query: e,
                        matches: i,
                        results: s
                    }, f("results", t);
                }, m = "aria-expanded", b = "aria-activedescendant", y = "aria-selected", v = function(e, n) {
                    e.feedback.selection = t({
                        index: n
                    }, e.feedback.results[n]);
                }, g = function(e) {
                    e.isOpen || ((e.wrapper || e.input).setAttribute(m, !0), e.list.removeAttribute("hidden"), 
                    e.isOpen = !0, f("open", e));
                }, w = function(e) {
                    e.isOpen && ((e.wrapper || e.input).setAttribute(m, !1), e.input.setAttribute(b, ""), 
                    e.list.setAttribute("hidden", ""), e.isOpen = !1, f("close", e));
                }, O = function(e, t) {
                    var n = t.resultItem, r = t.list.getElementsByTagName(n.tag), o = !!n.selected && n.selected.split(" ");
                    if (t.isOpen && r.length) {
                        var s, u, a = t.cursor;
                        e >= r.length && (e = 0), e < 0 && (e = r.length - 1), t.cursor = e, a > -1 && (r[a].removeAttribute(y), 
                        o && (u = r[a].classList).remove.apply(u, i(o))), r[e].setAttribute(y, !0), o && (s = r[e].classList).add.apply(s, i(o)), 
                        t.input.setAttribute(b, r[t.cursor].id), t.list.scrollTop = r[e].offsetTop - t.list.clientHeight + r[e].clientHeight + 5, 
                        t.feedback.cursor = t.cursor, v(t, e), f("navigate", t);
                    }
                }, A = function(e) {
                    O(e.cursor + 1, e);
                }, k = function(e) {
                    O(e.cursor - 1, e);
                }, L = function(e, t, n) {
                    (n = n >= 0 ? n : e.cursor) < 0 || (e.feedback.event = t, v(e, n), f("selection", e), 
                    w(e));
                };
                function j(e, n) {
                    var r = this;
                    return new Promise((function(i, o) {
                        var s, u;
                        return s = n || ((u = e.input) instanceof HTMLInputElement || u instanceof HTMLTextAreaElement ? u.value : u.innerHTML), 
                        function(e, t, n) {
                            return t ? t(e) : e.length >= n;
                        }(s = e.query ? e.query(s) : s, e.trigger, e.threshold) ? d(e, s).then((function(n) {
                            try {
                                return e.feedback instanceof Error ? i() : (h(s, e), e.resultsList && function(e) {
                                    var n = e.resultsList, r = e.list, i = e.resultItem, o = e.feedback, s = o.matches, u = o.results;
                                    if (e.cursor = -1, r.innerHTML = "", s.length || n.noResults) {
                                        var c = new DocumentFragment;
                                        u.forEach((function(e, n) {
                                            var r = a(i.tag, t({
                                                id: "".concat(i.id, "_").concat(n),
                                                role: "option",
                                                innerHTML: e.match,
                                                inside: c
                                            }, i.class && {
                                                class: i.class
                                            }));
                                            i.element && i.element(r, e);
                                        })), r.append(c), n.element && n.element(r, o), g(e);
                                    } else w(e);
                                }(e), c.call(r));
                            } catch (e) {
                                return o(e);
                            }
                        }), o) : (w(e), c.call(r));
                        function c() {
                            return i();
                        }
                    }));
                }
                var S = function(e, t) {
                    for (var n in e) for (var r in e[n]) t(n, r);
                }, T = function(e) {
                    var n, r, i, o = e.events, s = (n = function() {
                        return j(e);
                    }, r = e.debounce, function() {
                        clearTimeout(i), i = setTimeout((function() {
                            return n();
                        }), r);
                    }), u = e.events = t({
                        input: t({}, o && o.input)
                    }, e.resultsList && {
                        list: o ? t({}, o.list) : {}
                    }), a = {
                        input: {
                            input: function() {
                                s();
                            },
                            keydown: function(t) {
                                !function(e, t) {
                                    switch (e.keyCode) {
                                      case 40:
                                      case 38:
                                        e.preventDefault(), 40 === e.keyCode ? A(t) : k(t);
                                        break;

                                      case 13:
                                        t.submit || e.preventDefault(), t.cursor >= 0 && L(t, e);
                                        break;

                                      case 9:
                                        t.resultsList.tabSelect && t.cursor >= 0 && L(t, e);
                                        break;

                                      case 27:
                                        t.input.value = "", w(t);
                                    }
                                }(t, e);
                            },
                            blur: function() {
                                w(e);
                            }
                        },
                        list: {
                            mousedown: function(e) {
                                e.preventDefault();
                            },
                            click: function(t) {
                                !function(e, t) {
                                    var n = t.resultItem.tag.toUpperCase(), r = Array.from(t.list.querySelectorAll(n)), i = e.target.closest(n);
                                    i && i.nodeName === n && L(t, e, r.indexOf(i));
                                }(t, e);
                            }
                        }
                    };
                    S(a, (function(t, n) {
                        (e.resultsList || "input" === n) && (u[t][n] || (u[t][n] = a[t][n]));
                    })), S(u, (function(t, n) {
                        e[t].addEventListener(n, u[t][n]);
                    }));
                };
                function E(e) {
                    var n = this;
                    return new Promise((function(r, i) {
                        var o, s, u;
                        if (o = e.placeHolder, u = {
                            role: "combobox",
                            "aria-owns": (s = e.resultsList).id,
                            "aria-haspopup": !0,
                            "aria-expanded": !1
                        }, a(e.input, t(t({
                            "aria-controls": s.id,
                            "aria-autocomplete": "both"
                        }, o && {
                            placeholder: o
                        }), !e.wrapper && t({}, u))), e.wrapper && (e.wrapper = a("div", t({
                            around: e.input,
                            class: e.name + "_wrapper"
                        }, u))), s && (e.list = a(s.tag, t({
                            dest: [ s.destination, s.position ],
                            id: s.id,
                            role: "listbox",
                            hidden: "hidden"
                        }, s.class && {
                            class: s.class
                        }))), T(e), e.data.cache) return d(e).then((function(e) {
                            try {
                                return c.call(n);
                            } catch (e) {
                                return i(e);
                            }
                        }), i);
                        function c() {
                            return f("init", e), r();
                        }
                        return c.call(n);
                    }));
                }
                function x(e) {
                    var t = e.prototype;
                    t.init = function() {
                        E(this);
                    }, t.start = function(e) {
                        j(this, e);
                    }, t.unInit = function() {
                        if (this.wrapper) {
                            var e = this.wrapper.parentNode;
                            e.insertBefore(this.input, this.wrapper), e.removeChild(this.wrapper);
                        }
                        var t;
                        S((t = this).events, (function(e, n) {
                            t[e].removeEventListener(n, t.events[e][n]);
                        }));
                    }, t.open = function() {
                        g(this);
                    }, t.close = function() {
                        w(this);
                    }, t.goTo = function(e) {
                        O(e, this);
                    }, t.next = function() {
                        A(this);
                    }, t.previous = function() {
                        k(this);
                    }, t.select = function(e) {
                        L(this, null, e);
                    }, t.search = function(e, t, n) {
                        return p(e, t, n);
                    };
                }
                return function e(t) {
                    this.options = t, this.id = e.instances = (e.instances || 0) + 1, this.name = "autoComplete", 
                    this.wrapper = 1, this.threshold = 1, this.debounce = 0, this.resultsList = {
                        position: "afterend",
                        tag: "ul",
                        maxResults: 5
                    }, this.resultItem = {
                        tag: "li"
                    }, function(e) {
                        var t = e.name, r = e.options, i = e.resultsList, o = e.resultItem;
                        for (var s in r) if ("object" === n(r[s])) for (var a in e[s] || (e[s] = {}), r[s]) e[s][a] = r[s][a]; else e[s] = r[s];
                        e.selector = e.selector || "#" + t, i.destination = i.destination || e.selector, 
                        i.id = i.id || t + "_list_" + e.id, o.id = o.id || t + "_result", e.input = u(e.selector);
                    }(this), x.call(this, e), E(this);
                };
            }, true ? module.exports = t() : 0;
        },
        754: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var self = module.exports = {
                all: {},
                cache: {},
                findByIso2: code => x(self.all[code]),
                findByIso3: code => find("iso3", code),
                findByName: name => find("name", name),
                findByCapital: name => find("capital", name),
                findByCurrency: code => find("currency", code),
                findByProvince(name) {
                    if (!self.cache.province) self.cache.province = {};
                    if (self.cache.province[name]) return self.cache.province[name].map((o => x(o)));
                    return self.cache.province[name] = Object.keys(self.all).map((k => self.all[k])).filter((o => o.provinces)).filter((o => o.provinces.filter((o => o.name == name || (o.alias || []).indexOf(name) > -1)).length > 0)).map((o => x(o))).unpack(void 0);
                },
                findByPhoneNbr(nbr) {
                    nbr = nbr.replace(/\D/g, "");
                    return phones.filter((o => o.nbr && nbr.startsWith(o.nbr))).map((o => x(self.all[o.code]))).unpack(void 0);
                },
                ls(field) {
                    return Object.keys(this.all).map((k => this.all[k][field]));
                },
                continents() {
                    return this.ls("continent").unique();
                },
                names() {
                    return this.ls("name");
                },
                capitals() {
                    return this.ls("capital");
                }
            };
            function x(o) {
                if (!o) return;
                if (Array.isArray(o)) return o.map(x(o));
                var ret = Object.assign({}, o);
                ret.currency = {
                    code: ret.currency,
                    symbol: ret.currency_symbol,
                    decimal: ret.currency_decimal
                };
                ret.code = {
                    iso2: ret.iso2,
                    iso3: ret.iso3
                };
                for (var k of "iso2|iso3|currency_symbol|currency_decimal".split("|")) delete ret[k];
                return ret;
            }
            function find(prop, val) {
                if (!(prop in self.cache)) self.cache[prop] = {};
                if (self.cache[prop][val]) return self.cache[prop][val];
                return self.cache[prop][val] = Object.keys(self.all).filter((k => self.all[k][prop] == val)).map((k => x(self.all[k]))).unpack(void 0);
            }
            var continents = __webpack_require__(931);
            var continent = __webpack_require__(14);
            var iso_alpha_3 = __webpack_require__(619);
            var capital = __webpack_require__(413);
            var currency = __webpack_require__(829);
            var currency_info = __webpack_require__(708);
            var names = __webpack_require__(87);
            var phone = __webpack_require__(132);
            var regions = __webpack_require__(138);
            var provinces = __webpack_require__(250);
            Object.keys(iso_alpha_3).forEach((function(k) {
                self.all[k] = {
                    iso2: k,
                    iso3: iso_alpha_3[k],
                    name: names[k],
                    continent: continents[continent[k]],
                    region: regions[k],
                    capital: capital[k],
                    currency: currency[k],
                    currency_symbol: currency_info[currency[k]].symbol,
                    currency_decimal: currency_info[currency[k]].decimal,
                    dialing_code: phone[k],
                    provinces: provinces[k]
                };
            }));
            continents = continent = iso_alpha_3 = capital = currency = currency_info = names = regions = provinces = null;
            var phones = Object.keys(phone).map((function(k) {
                return {
                    code: k,
                    nbr: phone[k].replace(/\D/g, "")
                };
            }));
            phones.sort(((a, b) => a.nbr.length < b.nbr.length ? 1 : -1));
            phone = null;
            Array.prototype.unpack = function() {
                var l = this.length;
                return l == 1 ? this[0] : l == 0 && arguments.length > 0 ? void 0 : this;
            };
            Array.prototype.unique = function() {
                return this.filter(((e, pos) => this.indexOf(e) == pos));
            };
        },
        413: module => {
            "use strict";
            module.exports = JSON.parse('{"BD":"Dhaka","BE":"Brussels","BF":"Ouagadougou","BG":"Sofia","BA":"Sarajevo","BB":"Bridgetown","WF":"Mata Utu","BL":"Gustavia","BM":"Hamilton","BN":"Bandar Seri Begawan","BO":"Sucre","BH":"Manama","BI":"Bujumbura","BJ":"Porto-Novo","BT":"Thimphu","JM":"Kingston","BV":"","BW":"Gaborone","WS":"Apia","BQ":"","BR":"Brasilia","BS":"Nassau","JE":"Saint Helier","BY":"Minsk","BZ":"Belmopan","RU":"Moscow","RW":"Kigali","RS":"Belgrade","TL":"Dili","RE":"Saint-Denis","TM":"Ashgabat","TJ":"Dushanbe","RO":"Bucharest","TK":"","GW":"Bissau","GU":"Hagatna","GT":"Guatemala City","GS":"Grytviken","GR":"Athens","GQ":"Malabo","GP":"Basse-Terre","JP":"Tokyo","GY":"Georgetown","GG":"St Peter Port","GF":"Cayenne","GE":"Tbilisi","GD":"St. George\'s","GB":"London","GA":"Libreville","SV":"San Salvador","GN":"Conakry","GM":"Banjul","GL":"Nuuk","GI":"Gibraltar","GH":"Accra","OM":"Muscat","TN":"Tunis","JO":"Amman","HR":"Zagreb","HT":"Port-au-Prince","HU":"Budapest","HK":"Hong Kong","HN":"Tegucigalpa","HM":"","VE":"Caracas","PR":"San Juan","PS":"East Jerusalem","PW":"Melekeok","PT":"Lisbon","SJ":"Longyearbyen","PY":"Asuncion","IQ":"Baghdad","PA":"Panama City","PF":"Papeete","PG":"Port Moresby","PE":"Lima","PK":"Islamabad","PH":"Manila","PN":"Adamstown","PL":"Warsaw","PM":"Saint-Pierre","ZM":"Lusaka","EH":"El-Aaiun","EE":"Tallinn","EG":"Cairo","ZA":"Pretoria","EC":"Quito","IT":"Rome","VN":"Hanoi","SB":"Honiara","ET":"Addis Ababa","SO":"Mogadishu","ZW":"Harare","SA":"Riyadh","ES":"Madrid","ER":"Asmara","ME":"Podgorica","MD":"Chisinau","MG":"Antananarivo","MF":"Marigot","MA":"Rabat","MC":"Monaco","UZ":"Tashkent","MM":"Nay Pyi Taw","ML":"Bamako","MO":"Macao","MN":"Ulan Bator","MH":"Majuro","MK":"Skopje","MU":"Port Louis","MT":"Valletta","MW":"Lilongwe","MV":"Male","MQ":"Fort-de-France","MP":"Saipan","MS":"Plymouth","MR":"Nouakchott","IM":"Douglas, Isle of Man","UG":"Kampala","TZ":"Dodoma","MY":"Kuala Lumpur","MX":"Mexico City","IL":"Jerusalem","FR":"Paris","IO":"Diego Garcia","SH":"Jamestown","FI":"Helsinki","FJ":"Suva","FK":"Stanley","FM":"Palikir","FO":"Torshavn","NI":"Managua","NL":"Amsterdam","NO":"Oslo","NA":"Windhoek","VU":"Port Vila","NC":"Noumea","NE":"Niamey","NF":"Kingston","NG":"Abuja","NZ":"Wellington","NP":"Kathmandu","NR":"Yaren","NU":"Alofi","CK":"Avarua","XK":"Pristina","CI":"Yamoussoukro","CH":"Berne","CO":"Bogota","CN":"Beijing","CM":"Yaounde","CL":"Santiago","CC":"West Island","CA":"Ottawa","CG":"Brazzaville","CF":"Bangui","CD":"Kinshasa","CZ":"Prague","CY":"Nicosia","CX":"Flying Fish Cove","CR":"San Jose","CW":" Willemstad","CV":"Praia","CU":"Havana","SZ":"Mbabane","SY":"Damascus","SX":"Philipsburg","KG":"Bishkek","KE":"Nairobi","SS":"Juba","SR":"Paramaribo","KI":"Tarawa","KH":"Phnom Penh","KN":"Basseterre","KM":"Moroni","ST":"Sao Tome","SK":"Bratislava","KR":"Seoul","SI":"Ljubljana","KP":"Pyongyang","KW":"Kuwait City","SN":"Dakar","SM":"San Marino","SL":"Freetown","SC":"Victoria","KZ":"Astana","KY":"George Town","SG":"Singapur","SE":"Stockholm","SD":"Khartoum","DO":"Santo Domingo","DM":"Roseau","DJ":"Djibouti","DK":"Copenhagen","VG":"Road Town","DE":"Berlin","YE":"Sanaa","DZ":"Algiers","US":"Washington","UY":"Montevideo","YT":"Mamoudzou","UM":"","LB":"Beirut","LC":"Castries","LA":"Vientiane","TV":"Funafuti","TW":"Taipei","TT":"Port of Spain","TR":"Ankara","LK":"Colombo","LI":"Vaduz","LV":"Riga","TO":"Nuku\'alofa","LT":"Vilnius","LU":"Luxembourg","LR":"Monrovia","LS":"Maseru","TH":"Bangkok","TF":"Port-aux-Francais","TG":"Lome","TD":"N\'Djamena","TC":"Cockburn Town","LY":"Tripolis","VA":"Vatican City","VC":"Kingstown","AE":"Abu Dhabi","AD":"Andorra la Vella","AG":"St. John\'s","AF":"Kabul","AI":"The Valley","VI":"Charlotte Amalie","IS":"Reykjavik","IR":"Tehran","AM":"Yerevan","AL":"Tirana","AO":"Luanda","AQ":"","AS":"Pago Pago","AR":"Buenos Aires","AU":"Canberra","AT":"Vienna","AW":"Oranjestad","IN":"New Delhi","AX":"Mariehamn","AZ":"Baku","IE":"Dublin","ID":"Jakarta","UA":"Kiev","QA":"Doha","MZ":"Maputo"}');
        },
        14: module => {
            "use strict";
            module.exports = JSON.parse('{"BD":"AS","BE":"EU","BF":"AF","BG":"EU","BA":"EU","BB":"NA","WF":"OC","BL":"NA","BM":"NA","BN":"AS","BO":"SA","BH":"AS","BI":"AF","BJ":"AF","BT":"AS","JM":"NA","BV":"AN","BW":"AF","WS":"OC","BQ":"NA","BR":"SA","BS":"NA","JE":"EU","BY":"EU","BZ":"NA","RU":"EU","RW":"AF","RS":"EU","TL":"OC","RE":"AF","TM":"AS","TJ":"AS","RO":"EU","TK":"OC","GW":"AF","GU":"OC","GT":"NA","GS":"AN","GR":"EU","GQ":"AF","GP":"NA","JP":"AS","GY":"SA","GG":"EU","GF":"SA","GE":"AS","GD":"NA","GB":"EU","GA":"AF","SV":"NA","GN":"AF","GM":"AF","GL":"NA","GI":"EU","GH":"AF","OM":"AS","TN":"AF","JO":"AS","HR":"EU","HT":"NA","HU":"EU","HK":"AS","HN":"NA","HM":"AN","VE":"SA","PR":"NA","PS":"AS","PW":"OC","PT":"EU","SJ":"EU","PY":"SA","IQ":"AS","PA":"NA","PF":"OC","PG":"OC","PE":"SA","PK":"AS","PH":"AS","PN":"OC","PL":"EU","PM":"NA","ZM":"AF","EH":"AF","EE":"EU","EG":"AF","ZA":"AF","EC":"SA","IT":"EU","VN":"AS","SB":"OC","ET":"AF","SO":"AF","ZW":"AF","SA":"AS","ES":"EU","ER":"AF","ME":"EU","MD":"EU","MG":"AF","MF":"NA","MA":"AF","MC":"EU","UZ":"AS","MM":"AS","ML":"AF","MO":"AS","MN":"AS","MH":"OC","MK":"EU","MU":"AF","MT":"EU","MW":"AF","MV":"AS","MQ":"NA","MP":"OC","MS":"NA","MR":"AF","IM":"EU","UG":"AF","TZ":"AF","MY":"AS","MX":"NA","IL":"AS","FR":"EU","IO":"AS","SH":"AF","FI":"EU","FJ":"OC","FK":"SA","FM":"OC","FO":"EU","NI":"NA","NL":"EU","NO":"EU","NA":"AF","VU":"OC","NC":"OC","NE":"AF","NF":"OC","NG":"AF","NZ":"OC","NP":"AS","NR":"OC","NU":"OC","CK":"OC","XK":"EU","CI":"AF","CH":"EU","CO":"SA","CN":"AS","CM":"AF","CL":"SA","CC":"AS","CA":"NA","CG":"AF","CF":"AF","CD":"AF","CZ":"EU","CY":"EU","CX":"AS","CR":"NA","CW":"NA","CV":"AF","CU":"NA","SZ":"AF","SY":"AS","SX":"NA","KG":"AS","KE":"AF","SS":"AF","SR":"SA","KI":"OC","KH":"AS","KN":"NA","KM":"AF","ST":"AF","SK":"EU","KR":"AS","SI":"EU","KP":"AS","KW":"AS","SN":"AF","SM":"EU","SL":"AF","SC":"AF","KZ":"AS","KY":"NA","SG":"AS","SE":"EU","SD":"AF","DO":"NA","DM":"NA","DJ":"AF","DK":"EU","VG":"NA","DE":"EU","YE":"AS","DZ":"AF","US":"NA","UY":"SA","YT":"AF","UM":"OC","LB":"AS","LC":"NA","LA":"AS","TV":"OC","TW":"AS","TT":"NA","TR":"AS","LK":"AS","LI":"EU","LV":"EU","TO":"OC","LT":"EU","LU":"EU","LR":"AF","LS":"AF","TH":"AS","TF":"AN","TG":"AF","TD":"AF","TC":"NA","LY":"AF","VA":"EU","VC":"NA","AE":"AS","AD":"EU","AG":"NA","AF":"AS","AI":"NA","VI":"NA","IS":"EU","IR":"AS","AM":"AS","AL":"EU","AO":"AF","AQ":"AN","AS":"OC","AR":"SA","AU":"OC","AT":"EU","AW":"NA","IN":"AS","AX":"EU","AZ":"AS","IE":"EU","ID":"AS","UA":"EU","QA":"AS","MZ":"AF"}');
        },
        931: module => {
            "use strict";
            module.exports = JSON.parse('{"AS":"Asia","EU":"Europe","AF":"Africa","NA":"North America","SA":"South America","AN":"Antarctica","OC":"Oceania"}');
        },
        829: module => {
            "use strict";
            module.exports = JSON.parse('{"BD":"BDT","BE":"EUR","BF":"XOF","BG":"BGN","BA":"BAM","BB":"BBD","WF":"XPF","BL":"EUR","BM":"BMD","BN":"BND","BO":"BOB","BH":"BHD","BI":"BIF","BJ":"XOF","BT":"BTN","JM":"JMD","BV":"NOK","BW":"BWP","WS":"WST","BQ":"USD","BR":"BRL","BS":"BSD","JE":"GBP","BY":"BYR","BZ":"BZD","RU":"RUB","RW":"RWF","RS":"RSD","TL":"USD","RE":"EUR","TM":"TMT","TJ":"TJS","RO":"RON","TK":"NZD","GW":"XOF","GU":"USD","GT":"GTQ","GS":"GBP","GR":"EUR","GQ":"XAF","GP":"EUR","JP":"JPY","GY":"GYD","GG":"GBP","GF":"EUR","GE":"GEL","GD":"XCD","GB":"GBP","GA":"XAF","SV":"USD","GN":"GNF","GM":"GMD","GL":"DKK","GI":"GIP","GH":"GHS","OM":"OMR","TN":"TND","JO":"JOD","HR":"HRK","HT":"HTG","HU":"HUF","HK":"HKD","HN":"HNL","HM":"AUD","VE":"VEF","PR":"USD","PS":"ILS","PW":"USD","PT":"EUR","SJ":"NOK","PY":"PYG","IQ":"IQD","PA":"PAB","PF":"XPF","PG":"PGK","PE":"PEN","PK":"PKR","PH":"PHP","PN":"NZD","PL":"PLN","PM":"EUR","ZM":"ZMK","EH":"MAD","EE":"EUR","EG":"EGP","ZA":"ZAR","EC":"USD","IT":"EUR","VN":"VND","SB":"SBD","ET":"ETB","SO":"SOS","ZW":"ZWL","SA":"SAR","ES":"EUR","ER":"ERN","ME":"EUR","MD":"MDL","MG":"MGA","MF":"EUR","MA":"MAD","MC":"EUR","UZ":"UZS","MM":"MMK","ML":"XOF","MO":"MOP","MN":"MNT","MH":"USD","MK":"MKD","MU":"MUR","MT":"EUR","MW":"MWK","MV":"MVR","MQ":"EUR","MP":"USD","MS":"XCD","MR":"MRO","IM":"GBP","UG":"UGX","TZ":"TZS","MY":"MYR","MX":"MXN","IL":"ILS","FR":"EUR","IO":"USD","SH":"SHP","FI":"EUR","FJ":"FJD","FK":"FKP","FM":"USD","FO":"DKK","NI":"NIO","NL":"EUR","NO":"NOK","NA":"NAD","VU":"VUV","NC":"XPF","NE":"XOF","NF":"AUD","NG":"NGN","NZ":"NZD","NP":"NPR","NR":"AUD","NU":"NZD","CK":"NZD","XK":"EUR","CI":"XOF","CH":"CHF","CO":"COP","CN":"CNY","CM":"XAF","CL":"CLP","CC":"AUD","CA":"CAD","CG":"XAF","CF":"XAF","CD":"CDF","CZ":"CZK","CY":"EUR","CX":"AUD","CR":"CRC","CW":"ANG","CV":"CVE","CU":"CUP","SZ":"SZL","SY":"SYP","SX":"ANG","KG":"KGS","KE":"KES","SS":"SSP","SR":"SRD","KI":"AUD","KH":"KHR","KN":"XCD","KM":"KMF","ST":"STD","SK":"EUR","KR":"KRW","SI":"EUR","KP":"KPW","KW":"KWD","SN":"XOF","SM":"EUR","SL":"SLL","SC":"SCR","KZ":"KZT","KY":"KYD","SG":"SGD","SE":"SEK","SD":"SDG","DO":"DOP","DM":"XCD","DJ":"DJF","DK":"DKK","VG":"USD","DE":"EUR","YE":"YER","DZ":"DZD","US":"USD","UY":"UYU","YT":"EUR","UM":"USD","LB":"LBP","LC":"XCD","LA":"LAK","TV":"AUD","TW":"TWD","TT":"TTD","TR":"TRY","LK":"LKR","LI":"CHF","LV":"EUR","TO":"TOP","LT":"LTL","LU":"EUR","LR":"LRD","LS":"LSL","TH":"THB","TF":"EUR","TG":"XOF","TD":"XAF","TC":"USD","LY":"LYD","VA":"EUR","VC":"XCD","AE":"AED","AD":"EUR","AG":"XCD","AF":"AFN","AI":"XCD","VI":"USD","IS":"ISK","IR":"IRR","AM":"AMD","AL":"ALL","AO":"AOA","AQ":"XCD","AS":"USD","AR":"ARS","AU":"AUD","AT":"EUR","AW":"AWG","IN":"INR","AX":"EUR","AZ":"AZN","IE":"EUR","ID":"IDR","UA":"UAH","QA":"QAR","MZ":"MZN"}');
        },
        708: module => {
            "use strict";
            module.exports = JSON.parse('{"USD":{"symbol":"$","decimal":"2"},"CAD":{"symbol":"CA$","decimal":"2"},"EUR":{"symbol":"€","decimal":"2"},"AED":{"symbol":"AED","decimal":"2"},"AFN":{"symbol":"Af","decimal":"0"},"ALL":{"symbol":"ALL","decimal":"0"},"AMD":{"symbol":"AMD","decimal":"0"},"ARS":{"symbol":"AR$","decimal":"2"},"AUD":{"symbol":"AU$","decimal":"2"},"AZN":{"symbol":"man.","decimal":"2"},"BAM":{"symbol":"KM","decimal":"2"},"BDT":{"symbol":"Tk","decimal":"2"},"BGN":{"symbol":"BGN","decimal":"2"},"BHD":{"symbol":"BD","decimal":"3"},"BIF":{"symbol":"FBu","decimal":"0"},"BND":{"symbol":"BN$","decimal":"2"},"BOB":{"symbol":"Bs","decimal":"2"},"BRL":{"symbol":"R$","decimal":"2"},"BWP":{"symbol":"BWP","decimal":"2"},"BYR":{"symbol":"BYR","decimal":"0"},"BZD":{"symbol":"BZ$","decimal":"2"},"CDF":{"symbol":"CDF","decimal":"2"},"CHF":{"symbol":"CHF","decimal":"2"},"CLP":{"symbol":"CL$","decimal":"0"},"CNY":{"symbol":"CN¥","decimal":"2"},"COP":{"symbol":"CO$","decimal":"0"},"CRC":{"symbol":"₡","decimal":"0"},"CVE":{"symbol":"CV$","decimal":"2"},"CZK":{"symbol":"Kč","decimal":"2"},"DJF":{"symbol":"Fdj","decimal":"0"},"DKK":{"symbol":"Dkr","decimal":"2"},"DOP":{"symbol":"RD$","decimal":"2"},"DZD":{"symbol":"DA","decimal":"2"},"EEK":{"symbol":"Ekr","decimal":"2"},"EGP":{"symbol":"EGP","decimal":"2"},"ERN":{"symbol":"Nfk","decimal":"2"},"ETB":{"symbol":"Br","decimal":"2"},"GBP":{"symbol":"£","decimal":"2"},"GEL":{"symbol":"GEL","decimal":"2"},"GHS":{"symbol":"GH₵","decimal":"2"},"GNF":{"symbol":"FG","decimal":"0"},"GTQ":{"symbol":"GTQ","decimal":"2"},"HKD":{"symbol":"HK$","decimal":"2"},"HNL":{"symbol":"HNL","decimal":"2"},"HRK":{"symbol":"kn","decimal":"2"},"HUF":{"symbol":"Ft","decimal":"0"},"IDR":{"symbol":"Rp","decimal":"0"},"ILS":{"symbol":"₪","decimal":"2"},"INR":{"symbol":"Rs","decimal":"2"},"IQD":{"symbol":"IQD","decimal":"0"},"IRR":{"symbol":"IRR","decimal":"0"},"ISK":{"symbol":"Ikr","decimal":"0"},"JMD":{"symbol":"J$","decimal":"2"},"JOD":{"symbol":"JD","decimal":"3"},"JPY":{"symbol":"¥","decimal":"0"},"KES":{"symbol":"Ksh","decimal":"2"},"KHR":{"symbol":"KHR","decimal":"2"},"KMF":{"symbol":"CF","decimal":"0"},"KRW":{"symbol":"₩","decimal":"0"},"KWD":{"symbol":"KD","decimal":"3"},"KZT":{"symbol":"KZT","decimal":"2"},"LBP":{"symbol":"LB£","decimal":"0"},"LKR":{"symbol":"SLRs","decimal":"2"},"LTL":{"symbol":"Lt","decimal":"2"},"LVL":{"symbol":"Ls","decimal":"2"},"LYD":{"symbol":"LD","decimal":"3"},"MAD":{"symbol":"MAD","decimal":"2"},"MDL":{"symbol":"MDL","decimal":"2"},"MGA":{"symbol":"MGA","decimal":"0"},"MKD":{"symbol":"MKD","decimal":"2"},"MMK":{"symbol":"MMK","decimal":"0"},"MOP":{"symbol":"MOP$","decimal":"2"},"MUR":{"symbol":"MURs","decimal":"0"},"MXN":{"symbol":"MX$","decimal":"2"},"MYR":{"symbol":"RM","decimal":"2"},"MZN":{"symbol":"MTn","decimal":"2"},"NAD":{"symbol":"N$","decimal":"2"},"NGN":{"symbol":"₦","decimal":"2"},"NIO":{"symbol":"C$","decimal":"2"},"NOK":{"symbol":"Nkr","decimal":"2"},"NPR":{"symbol":"NPRs","decimal":"2"},"NZD":{"symbol":"NZ$","decimal":"2"},"OMR":{"symbol":"OMR","decimal":"3"},"PAB":{"symbol":"B/.","decimal":"2"},"PEN":{"symbol":"S/.","decimal":"2"},"PHP":{"symbol":"₱","decimal":"2"},"PKR":{"symbol":"PKRs","decimal":"0"},"PLN":{"symbol":"zł","decimal":"2"},"PYG":{"symbol":"₲","decimal":"0"},"QAR":{"symbol":"QR","decimal":"2"},"RON":{"symbol":"RON","decimal":"2"},"RSD":{"symbol":"din.","decimal":"0"},"RUB":{"symbol":"RUB","decimal":"2"},"RWF":{"symbol":"RWF","decimal":"0"},"SAR":{"symbol":"SR","decimal":"2"},"SDG":{"symbol":"SDG","decimal":"2"},"SEK":{"symbol":"Skr","decimal":"2"},"SGD":{"symbol":"S$","decimal":"2"},"SOS":{"symbol":"Ssh","decimal":"0"},"SYP":{"symbol":"SY£","decimal":"0"},"THB":{"symbol":"฿","decimal":"2"},"TND":{"symbol":"DT","decimal":"3"},"TOP":{"symbol":"T$","decimal":"2"},"TRY":{"symbol":"TL","decimal":"2"},"TTD":{"symbol":"TT$","decimal":"2"},"TWD":{"symbol":"NT$","decimal":"2"},"TZS":{"symbol":"TSh","decimal":"0"},"UAH":{"symbol":"₴","decimal":"2"},"UGX":{"symbol":"USh","decimal":"0"},"UYU":{"symbol":"$U","decimal":"2"},"UZS":{"symbol":"UZS","decimal":"0"},"VEF":{"symbol":"Bs.F.","decimal":"2"},"VND":{"symbol":"₫","decimal":"0"},"XAF":{"symbol":"FCFA","decimal":"0"},"XOF":{"symbol":"CFA","decimal":"0"},"YER":{"symbol":"YR","decimal":"0"},"ZAR":{"symbol":"R","decimal":"2"},"ZMK":{"symbol":"ZK","decimal":"0"},"BBD":{"symbol":"Bds$","decimal":"2"},"XPF":{"symbol":"F","decimal":"0"},"BMD":{"symbol":"BD$","decimal":"2"},"BTN":{"symbol":"Ch","decimal":"2"},"WST":{"symbol":"WS$","decimal":"2"},"BSD":{"symbol":"BS$","decimal":"2"},"TMT":{"symbol":"m","decimal":"2"},"TJS":{"symbol":"TJS","decimal":"2"},"GYD":{"symbol":"G$","decimal":"2"},"XCD":{"symbol":"EC$","decimal":"2"},"GMD":{"symbol":"D","decimal":"2"},"GIP":{"symbol":"£","decimal":"2"},"HTG":{"symbol":"G","decimal":"2"},"PGK":{"symbol":"K","decimal":"2"},"SBD":{"symbol":"SI$","decimal":"2"},"ZWL":{"symbol":"Z$","decimal":"2"},"MNT":{"symbol":"₮","decimal":"2"},"MWK":{"symbol":"MK","decimal":"2"},"MVR":{"symbol":"ރ","decimal":"2"},"MRO":{"symbol":"UM","decimal":"0"},"SHP":{"symbol":"£","decimal":"2"},"FJD":{"symbol":"FJ$","decimal":"2"},"FKP":{"symbol":"£","decimal":"2"},"VUV":{"symbol":"VT","decimal":"0"},"ANG":{"symbol":"ƒ","decimal":"2"},"CUP":{"symbol":"$MN","decimal":"2"},"SZL":{"symbol":"L","decimal":"0"},"KGS":{"symbol":"som","decimal":"2"},"SSP":{"symbol":"£","decimal":"2"},"SRD":{"symbol":"$","decimal":"2"},"STD":{"symbol":"Db","decimal":"2"},"KPW":{"symbol":"₩","decimal":"2"},"SLL":{"symbol":"Le","decimal":"2"},"SCR":{"symbol":"SR","decimal":"2"},"KYD":{"symbol":"CI$","decimal":"2"},"LAK":{"symbol":"₭","decimal":"2"},"LRD":{"symbol":"L$","decimal":"2"},"LSL":{"symbol":"L","decimal":"2"},"AOA":{"symbol":"Kz","decimal":"2"},"AWG":{"symbol":"Afl.","decimal":"2"}}');
        },
        619: module => {
            "use strict";
            module.exports = JSON.parse('{"BD":"BGD","BE":"BEL","BF":"BFA","BG":"BGR","BA":"BIH","BB":"BRB","WF":"WLF","BL":"BLM","BM":"BMU","BN":"BRN","BO":"BOL","BH":"BHR","BI":"BDI","BJ":"BEN","BT":"BTN","JM":"JAM","BV":"BVT","BW":"BWA","WS":"WSM","BQ":"BES","BR":"BRA","BS":"BHS","JE":"JEY","BY":"BLR","BZ":"BLZ","RU":"RUS","RW":"RWA","RS":"SRB","TL":"TLS","RE":"REU","TM":"TKM","TJ":"TJK","RO":"ROU","TK":"TKL","GW":"GNB","GU":"GUM","GT":"GTM","GS":"SGS","GR":"GRC","GQ":"GNQ","GP":"GLP","JP":"JPN","GY":"GUY","GG":"GGY","GF":"GUF","GE":"GEO","GD":"GRD","GB":"GBR","GA":"GAB","SV":"SLV","GN":"GIN","GM":"GMB","GL":"GRL","GI":"GIB","GH":"GHA","OM":"OMN","TN":"TUN","JO":"JOR","HR":"HRV","HT":"HTI","HU":"HUN","HK":"HKG","HN":"HND","HM":"HMD","VE":"VEN","PR":"PRI","PS":"PSE","PW":"PLW","PT":"PRT","SJ":"SJM","PY":"PRY","IQ":"IRQ","PA":"PAN","PF":"PYF","PG":"PNG","PE":"PER","PK":"PAK","PH":"PHL","PN":"PCN","PL":"POL","PM":"SPM","ZM":"ZMB","EH":"ESH","EE":"EST","EG":"EGY","ZA":"ZAF","EC":"ECU","IT":"ITA","VN":"VNM","SB":"SLB","ET":"ETH","SO":"SOM","ZW":"ZWE","SA":"SAU","ES":"ESP","ER":"ERI","ME":"MNE","MD":"MDA","MG":"MDG","MF":"MAF","MA":"MAR","MC":"MCO","UZ":"UZB","MM":"MMR","ML":"MLI","MO":"MAC","MN":"MNG","MH":"MHL","MK":"MKD","MU":"MUS","MT":"MLT","MW":"MWI","MV":"MDV","MQ":"MTQ","MP":"MNP","MS":"MSR","MR":"MRT","IM":"IMN","UG":"UGA","TZ":"TZA","MY":"MYS","MX":"MEX","IL":"ISR","FR":"FRA","IO":"IOT","SH":"SHN","FI":"FIN","FJ":"FJI","FK":"FLK","FM":"FSM","FO":"FRO","NI":"NIC","NL":"NLD","NO":"NOR","NA":"NAM","VU":"VUT","NC":"NCL","NE":"NER","NF":"NFK","NG":"NGA","NZ":"NZL","NP":"NPL","NR":"NRU","NU":"NIU","CK":"COK","XK":"XKX","CI":"CIV","CH":"CHE","CO":"COL","CN":"CHN","CM":"CMR","CL":"CHL","CC":"CCK","CA":"CAN","CG":"COG","CF":"CAF","CD":"COD","CZ":"CZE","CY":"CYP","CX":"CXR","CR":"CRI","CW":"CUW","CV":"CPV","CU":"CUB","SZ":"SWZ","SY":"SYR","SX":"SXM","KG":"KGZ","KE":"KEN","SS":"SSD","SR":"SUR","KI":"KIR","KH":"KHM","KN":"KNA","KM":"COM","ST":"STP","SK":"SVK","KR":"KOR","SI":"SVN","KP":"PRK","KW":"KWT","SN":"SEN","SM":"SMR","SL":"SLE","SC":"SYC","KZ":"KAZ","KY":"CYM","SG":"SGP","SE":"SWE","SD":"SDN","DO":"DOM","DM":"DMA","DJ":"DJI","DK":"DNK","VG":"VGB","DE":"DEU","YE":"YEM","DZ":"DZA","US":"USA","UY":"URY","YT":"MYT","UM":"UMI","LB":"LBN","LC":"LCA","LA":"LAO","TV":"TUV","TW":"TWN","TT":"TTO","TR":"TUR","LK":"LKA","LI":"LIE","LV":"LVA","TO":"TON","LT":"LTU","LU":"LUX","LR":"LBR","LS":"LSO","TH":"THA","TF":"ATF","TG":"TGO","TD":"TCD","TC":"TCA","LY":"LBY","VA":"VAT","VC":"VCT","AE":"ARE","AD":"AND","AG":"ATG","AF":"AFG","AI":"AIA","VI":"VIR","IS":"ISL","IR":"IRN","AM":"ARM","AL":"ALB","AO":"AGO","AQ":"ATA","AS":"ASM","AR":"ARG","AU":"AUS","AT":"AUT","AW":"ABW","IN":"IND","AX":"ALA","AZ":"AZE","IE":"IRL","ID":"IDN","UA":"UKR","QA":"QAT","MZ":"MOZ"}');
        },
        87: module => {
            "use strict";
            module.exports = JSON.parse('{"BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BA":"Bosnia and Herzegovina","BB":"Barbados","WF":"Wallis and Futuna","BL":"Saint Barthelemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BT":"Bhutan","JM":"Jamaica","BV":"Bouvet Island","BW":"Botswana","WS":"Samoa","BQ":"Bonaire, Saint Eustatius and Saba ","BR":"Brazil","BS":"Bahamas","JE":"Jersey","BY":"Belarus","BZ":"Belize","RU":"Russia","RW":"Rwanda","RS":"Serbia","TL":"East Timor","RE":"Reunion","TM":"Turkmenistan","TJ":"Tajikistan","RO":"Romania","TK":"Tokelau","GW":"Guinea-Bissau","GU":"Guam","GT":"Guatemala","GS":"South Georgia and the South Sandwich Islands","GR":"Greece","GQ":"Equatorial Guinea","GP":"Guadeloupe","JP":"Japan","GY":"Guyana","GG":"Guernsey","GF":"French Guiana","GE":"Georgia","GD":"Grenada","GB":"United Kingdom","GA":"Gabon","SV":"El Salvador","GN":"Guinea","GM":"Gambia","GL":"Greenland","GI":"Gibraltar","GH":"Ghana","OM":"Oman","TN":"Tunisia","JO":"Jordan","HR":"Croatia","HT":"Haiti","HU":"Hungary","HK":"Hong Kong","HN":"Honduras","HM":"Heard Island and McDonald Islands","VE":"Venezuela","PR":"Puerto Rico","PS":"Palestinian Territory","PW":"Palau","PT":"Portugal","SJ":"Svalbard and Jan Mayen","PY":"Paraguay","IQ":"Iraq","PA":"Panama","PF":"French Polynesia","PG":"Papua New Guinea","PE":"Peru","PK":"Pakistan","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PM":"Saint Pierre and Miquelon","ZM":"Zambia","EH":"Western Sahara","EE":"Estonia","EG":"Egypt","ZA":"South Africa","EC":"Ecuador","IT":"Italy","VN":"Vietnam","SB":"Solomon Islands","ET":"Ethiopia","SO":"Somalia","ZW":"Zimbabwe","SA":"Saudi Arabia","ES":"Spain","ER":"Eritrea","ME":"Montenegro","MD":"Moldova","MG":"Madagascar","MF":"Saint Martin","MA":"Morocco","MC":"Monaco","UZ":"Uzbekistan","MM":"Myanmar","ML":"Mali","MO":"Macao","MN":"Mongolia","MH":"Marshall Islands","MK":"Macedonia","MU":"Mauritius","MT":"Malta","MW":"Malawi","MV":"Maldives","MQ":"Martinique","MP":"Northern Mariana Islands","MS":"Montserrat","MR":"Mauritania","IM":"Isle of Man","UG":"Uganda","TZ":"Tanzania","MY":"Malaysia","MX":"Mexico","IL":"Israel","FR":"France","IO":"British Indian Ocean Territory","SH":"Saint Helena","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands","FM":"Micronesia","FO":"Faroe Islands","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NA":"Namibia","VU":"Vanuatu","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NZ":"New Zealand","NP":"Nepal","NR":"Nauru","NU":"Niue","CK":"Cook Islands","XK":"Kosovo","CI":"Ivory Coast","CH":"Switzerland","CO":"Colombia","CN":"China","CM":"Cameroon","CL":"Chile","CC":"Cocos Islands","CA":"Canada","CG":"Republic of the Congo","CF":"Central African Republic","CD":"Democratic Republic of the Congo","CZ":"Czech Republic","CY":"Cyprus","CX":"Christmas Island","CR":"Costa Rica","CW":"Curacao","CV":"Cape Verde","CU":"Cuba","SZ":"Swaziland","SY":"Syria","SX":"Sint Maarten","KG":"Kyrgyzstan","KE":"Kenya","SS":"South Sudan","SR":"Suriname","KI":"Kiribati","KH":"Cambodia","KN":"Saint Kitts and Nevis","KM":"Comoros","ST":"Sao Tome and Principe","SK":"Slovakia","KR":"South Korea","SI":"Slovenia","KP":"North Korea","KW":"Kuwait","SN":"Senegal","SM":"San Marino","SL":"Sierra Leone","SC":"Seychelles","KZ":"Kazakhstan","KY":"Cayman Islands","SG":"Singapore","SE":"Sweden","SD":"Sudan","DO":"Dominican Republic","DM":"Dominica","DJ":"Djibouti","DK":"Denmark","VG":"British Virgin Islands","DE":"Germany","YE":"Yemen","DZ":"Algeria","US":"United States","UY":"Uruguay","YT":"Mayotte","UM":"United States Minor Outlying Islands","LB":"Lebanon","LC":"Saint Lucia","LA":"Laos","TV":"Tuvalu","TW":"Taiwan","TT":"Trinidad and Tobago","TR":"Turkey","LK":"Sri Lanka","LI":"Liechtenstein","LV":"Latvia","TO":"Tonga","LT":"Lithuania","LU":"Luxembourg","LR":"Liberia","LS":"Lesotho","TH":"Thailand","TF":"French Southern Territories","TG":"Togo","TD":"Chad","TC":"Turks and Caicos Islands","LY":"Libya","VA":"Vatican","VC":"Saint Vincent and the Grenadines","AE":"United Arab Emirates","AD":"Andorra","AG":"Antigua and Barbuda","AF":"Afghanistan","AI":"Anguilla","VI":"U.S. Virgin Islands","IS":"Iceland","IR":"Iran","AM":"Armenia","AL":"Albania","AO":"Angola","AQ":"Antarctica","AS":"American Samoa","AR":"Argentina","AU":"Australia","AT":"Austria","AW":"Aruba","IN":"India","AX":"Aland Islands","AZ":"Azerbaijan","IE":"Ireland","ID":"Indonesia","UA":"Ukraine","QA":"Qatar","MZ":"Mozambique"}');
        },
        132: module => {
            "use strict";
            module.exports = JSON.parse('{"BD":"880","BE":"32","BF":"226","BG":"359","BA":"387","BB":"+1-246","WF":"681","BL":"590","BM":"+1-441","BN":"673","BO":"591","BH":"973","BI":"257","BJ":"229","BT":"975","JM":"+1-876","BV":"","BW":"267","WS":"685","BQ":"599","BR":"55","BS":"+1-242","JE":"+44-1534","BY":"375","BZ":"501","RU":"7","RW":"250","RS":"381","TL":"670","RE":"262","TM":"993","TJ":"992","RO":"40","TK":"690","GW":"245","GU":"+1-671","GT":"502","GS":"","GR":"30","GQ":"240","GP":"590","JP":"81","GY":"592","GG":"+44-1481","GF":"594","GE":"995","GD":"+1-473","GB":"44","GA":"241","SV":"503","GN":"224","GM":"220","GL":"299","GI":"350","GH":"233","OM":"968","TN":"216","JO":"962","HR":"385","HT":"509","HU":"36","HK":"852","HN":"504","HM":" ","VE":"58","PR":"+1-787 and 1-939","PS":"970","PW":"680","PT":"351","SJ":"47","PY":"595","IQ":"964","PA":"507","PF":"689","PG":"675","PE":"51","PK":"92","PH":"63","PN":"870","PL":"48","PM":"508","ZM":"260","EH":"212","EE":"372","EG":"20","ZA":"27","EC":"593","IT":"39","VN":"84","SB":"677","ET":"251","SO":"252","ZW":"263","SA":"966","ES":"34","ER":"291","ME":"382","MD":"373","MG":"261","MF":"590","MA":"212","MC":"377","UZ":"998","MM":"95","ML":"223","MO":"853","MN":"976","MH":"692","MK":"389","MU":"230","MT":"356","MW":"265","MV":"960","MQ":"596","MP":"+1-670","MS":"+1-664","MR":"222","IM":"+44-1624","UG":"256","TZ":"255","MY":"60","MX":"52","IL":"972","FR":"33","IO":"246","SH":"290","FI":"358","FJ":"679","FK":"500","FM":"691","FO":"298","NI":"505","NL":"31","NO":"47","NA":"264","VU":"678","NC":"687","NE":"227","NF":"672","NG":"234","NZ":"64","NP":"977","NR":"674","NU":"683","CK":"682","XK":"","CI":"225","CH":"41","CO":"57","CN":"86","CM":"237","CL":"56","CC":"61","CA":"1","CG":"242","CF":"236","CD":"243","CZ":"420","CY":"357","CX":"61","CR":"506","CW":"599","CV":"238","CU":"53","SZ":"268","SY":"963","SX":"599","KG":"996","KE":"254","SS":"211","SR":"597","KI":"686","KH":"855","KN":"+1-869","KM":"269","ST":"239","SK":"421","KR":"82","SI":"386","KP":"850","KW":"965","SN":"221","SM":"378","SL":"232","SC":"248","KZ":"7","KY":"+1-345","SG":"65","SE":"46","SD":"249","DO":"+1-809 and 1-829","DM":"+1-767","DJ":"253","DK":"45","VG":"+1-284","DE":"49","YE":"967","DZ":"213","US":"1","UY":"598","YT":"262","UM":"1","LB":"961","LC":"+1-758","LA":"856","TV":"688","TW":"886","TT":"+1-868","TR":"90","LK":"94","LI":"423","LV":"371","TO":"676","LT":"370","LU":"352","LR":"231","LS":"266","TH":"66","TF":"","TG":"228","TD":"235","TC":"+1-649","LY":"218","VA":"379","VC":"+1-784","AE":"971","AD":"376","AG":"+1-268","AF":"93","AI":"+1-264","VI":"+1-340","IS":"354","IR":"98","AM":"374","AL":"355","AO":"244","AQ":"","AS":"+1-684","AR":"54","AU":"61","AT":"43","AW":"297","IN":"91","AX":"+358-18","AZ":"994","IE":"353","ID":"62","UA":"380","QA":"974","MZ":"258"}');
        },
        250: module => {
            "use strict";
            module.exports = JSON.parse('{"AR":[{"name":"Ciudad Autónoma de Buenos Aires","alias":["Ciudad Autonoma de Buenos Aires"]},{"name":"Buenos Aires","alias":null},{"name":"Catamarca","alias":null},{"name":"Chaco","alias":null},{"name":"Chubut","alias":null},{"name":"Córdoba","alias":["Cordoba"]},{"name":"Corrientes","alias":null},{"name":"Entre Ríos","alias":["Entre Rios"]},{"name":"Formosa","alias":null},{"name":"Jujuy","alias":null},{"name":"La Pampa","alias":null},{"name":"La Rioja","alias":null},{"name":"Mendoza","alias":null},{"name":"Misiones","alias":null},{"name":"Neuquén","alias":["Neuquen"]},{"name":"Río Negro","alias":["Rio Negro"]},{"name":"Salta","alias":null},{"name":"San Juan","alias":null},{"name":"San Luis","alias":null},{"name":"Santa Cruz","alias":null},{"name":"Santa Fe","alias":null},{"name":"Santiago del Estero","alias":null},{"name":"Tierra del Fuego, Antártida e Islas del Atlántico Sur","alias":["Tierra del Fuego, Antartida e Islas del Atlantico Sur"]},{"name":"Tucumán","alias":["Tucuman"]}],"AT":[{"short":"B","name":"Burgenland","alias":null},{"short":"K","name":"Kärnten","alias":["Karnten"]},{"short":"NÖ","name":"Niederösterreich","alias":["Niederosterreich"]},{"short":"OÖ","name":"Oberösterreich","alias":["Oberosterreich"]},{"short":"S","name":"Salzburg","alias":null},{"short":"ST","name":"Steiermark","alias":null},{"short":"T","name":"Tirol","alias":null},{"short":"V","name":"Vorarlberg","alias":null},{"short":"W","name":"Wien","alias":null}],"AU":[{"name":"Ashmore and Cartier Islands","alias":null},{"name":"Australian Antarctic Territory","alias":null},{"short":"ACT","name":"Australian Capital Territory","alias":null},{"short":"CX","name":"Christmas Island","alias":null},{"short":"CC","name":"Cocos Islands","alias":["Keeling Islands"]},{"name":"Coral Sea Islands","alias":null},{"short":"HM","name":"Heard Island and McDonald Islands","alias":null},{"short":"JBT","name":"Jervis Bay Territory","alias":null},{"short":"NSW","name":"New South Wales","alias":null},{"short":"NF","name":"Norfolk Island","alias":null},{"short":"NT","name":"Northern Territory","alias":null},{"short":"QLD","name":"Queensland","alias":null},{"short":"SA","name":"South Australia","alias":null},{"short":"TAS","name":"Tasmania","alias":null},{"short":"VIC","name":"Victoria","alias":null},{"short":"WA","name":"Western Australia","alias":null}],"BD":[{"name":"বরগুনা","region":"Barisal","alias":["Barguna"]},{"name":"বরিশাল","region":"Barisal","alias":["Barisal"]},{"name":"ভোলা","region":"Barisal","alias":["Bhola"]},{"name":"ঝালকাঠি","region":"Barisal","alias":["Jhalokati"]},{"name":"পটুয়াখালী","region":"Barisal","alias":["Patuakhali"]},{"name":"পিরোজপুর","region":"Barisal","alias":["Pirojpur"]},{"name":"বান্দরবান","region":"Chittagong","alias":["Bandarban"]},{"name":"ব্রাহ্মণবাড়ীয়া","region":"Chittagong","alias":["Brahmanbaria"]},{"name":"চাঁদপুর","region":"Chittagong","alias":["Chandpur"]},{"name":"চট্টগ্রাম","region":"Chittagong","alias":["Chittagong"]},{"name":"কুমিল্লা","region":"Chittagong","alias":["Comilla"]},{"name":"কক্সবাজার","region":"Chittagong","alias":["Cox\'s Bazar"]},{"name":"ফেনী","region":"Chittagong","alias":["Feni"]},{"name":"খাগড়াছড়ি","region":"Chittagong","alias":["Khagrachhari"]},{"name":"লক্ষীপুর","region":"Chittagong","alias":["Lakshmipur"]},{"name":"নোয়াখালী","region":"Chittagong","alias":["Noakhali"]},{"name":"রাঙ্গামাটি","region":"Chittagong","alias":["Rangamati"]},{"name":"ঢাকা","region":"Dhaka","alias":["Dhaka"]},{"name":"ফরিদপুর","region":"Dhaka","alias":["Faridpur"]},{"name":"গাজীপুর","region":"Dhaka","alias":["Gazipur"]},{"name":"গোপালগঞ্জ","region":"Dhaka","alias":["Gopalganj"]},{"name":"জামালপুর","region":"Dhaka","alias":["Jamalpur"]},{"name":"কিশোরগঞ্জ","region":"Dhaka","alias":["Kishoreganj"]},{"name":"মাদারীপুর","region":"Dhaka","alias":["Madaripur"]},{"name":"মানিকগঞ্জ","region":"Dhaka","alias":["Manikganj"]},{"name":"মুন্সীগঞ্জ","region":"Dhaka","alias":["Munshiganj"]},{"name":"ময়মনসিংহ","region":"Dhaka","alias":["Mymensingh"]},{"name":"নারায়ণগঞ্জ","region":"Dhaka","alias":["Narayanganj"]},{"name":"নরসিংদী","region":"Dhaka","alias":["Narsingdi"]},{"name":"নেত্রকোনা","region":"Dhaka","alias":["Netrakona"]},{"name":"রাজবাড়ী","region":"Dhaka","alias":["Rajbari"]},{"name":"শরীয়তপুর","region":"Dhaka","alias":["Shariatpur"]},{"name":"শেরপুর","region":"Dhaka","alias":["Sherpur"]},{"name":"টাঙ্গাইল","region":"Dhaka","alias":["Tangail"]},{"name":"বাগেরহাট","region":"Khulna","alias":["Bagerhat"]},{"name":"চুয়াডাঙ্গা","region":"Khulna","alias":["Chuadanga"]},{"name":"যশোর","region":"Khulna","alias":["Jessore"]},{"name":"ঝিনাইদহ","region":"Khulna","alias":["Jhenaidah"]},{"name":"খুলনা","region":"Khulna","alias":["Khulna"]},{"name":"কুষ্টিয়া","region":"Khulna","alias":["Kushtia"]},{"name":"মাগুরা","region":"Khulna","alias":["Magura"]},{"name":"মেহেরপুর","region":"Khulna","alias":["Meherpur"]},{"name":"নড়াইল","region":"Khulna","alias":["Narail"]},{"name":"সাতক্ষিরা","region":"Khulna","alias":["Satkhira"]},{"name":"বগুড়া","region":"Rajshahi","alias":["Bogra"]},{"name":"জয়পুরহাট","region":"Rajshahi","alias":["Joypurhat"]},{"name":"নওগাঁ","region":"Rajshahi","alias":["Naogaon"]},{"name":"নাটোর","region":"Rajshahi","alias":["Natore"]},{"name":"নওয়াবগঞ্জ","region":"Rajshahi","alias":["Chapainawabganj"]},{"name":"পাবনা","region":"Rajshahi","alias":["Pabna"]},{"name":"রাজশাহী","region":"Rajshahi","alias":["Rajshahi"]},{"name":"সিরাজগঞ্জ","region":"Rajshahi","alias":["Sirajganj"]},{"name":"দিনাজপুর","region":"Rangpur","alias":["Dinajpur"]},{"name":"গাইবান্ধা","region":"Rangpur","alias":["Gaibandha"]},{"name":"কুড়িগ্রাম","region":"Rangpur","alias":["Kurigram"]},{"name":"লালমনিরহাট","region":"Rangpur","alias":["Lalmonirhat"]},{"name":"নীলফামারী","region":"Rangpur","alias":["Nilphamari"]},{"name":"পঞ্চগড়","region":"Rangpur","alias":["Panchagarh"]},{"name":"রংপুর","region":"Rangpur","alias":["Rangpur"]},{"name":"ঠাকুরগাঁ","region":"Rangpur","alias":["Thakurgaon"]},{"name":"হবিগঞ্জ","region":"Sylhet","alias":["Habiganj"]},{"name":"মৌলভীবাজার","region":"Sylhet","alias":["Moulvibazar"]},{"name":"সুনামগঞ্জ","region":"Sylhet","alias":["Sunamganj"]},{"name":"সিলেট","region":"Sylhet","alias":["Sylhet"]}],"BE":[{"short":"ANT","name":"Antwerpen","alias":null},{"short":"HAI","name":"Henegouwen","alias":["Hainaut"]},{"short":"LIE","name":"Luik","alias":["Liège","Liege"]},{"short":"LIM","name":"Limburg","alias":null},{"short":"LUX","name":"Luxemburg","alias":null},{"short":"NAM","name":"Namen","alias":null},{"short":"OVL","name":"Oost-Vlaanderen","alias":["Oost Vlaanderen"]},{"short":"VBR","name":"Vlaams-Brabant","alias":["Vlaams Brabant"]},{"short":"WBR","name":"Waals-Brabant","alias":["Waals Brabant"]},{"short":"WVL","name":"West-Vlaanderen","alias":["West Vlaanderen"]}],"BO":[{"name":"Cercado","region":"Beni","alias":null},{"name":"Iténez","region":"Beni","alias":["Itenez"]},{"name":"José Ballivián","region":"Beni","alias":["Jose Ballivian"]},{"name":"Mamoré","region":"Beni","alias":["Mamore"]},{"name":"Marbán","region":"Beni","alias":["Marban"]},{"name":"Moxos","region":"Beni","alias":null},{"name":"Vaca Díez","region":"Beni","alias":["Vaca Diez"]},{"name":"Yacuma","region":"Beni","alias":null},{"name":"Azurduy","region":"Chuquisaca","alias":null},{"name":"Belisario Boeto","region":"Chuquisaca","alias":null},{"name":"Hernando Siles","region":"Chuquisaca","alias":null},{"name":"Jaime Zudáñez","region":"Chuquisaca","alias":["Jaime Zudanez"]},{"name":"Luis Calvo","region":"Chuquisaca","alias":null},{"name":"Nor Cinti","region":"Chuquisaca","alias":null},{"name":"Oropeza","region":"Chuquisaca","alias":null},{"name":"Sud Cinti","region":"Chuquisaca","alias":null},{"name":"Tomina","region":"Chuquisaca","alias":null},{"name":"Yamparáez","region":"Chuquisaca","alias":["Yamparaez"]},{"name":"Arani","region":"Cochabamba","alias":null},{"name":"Arque","region":"Cochabamba","alias":null},{"name":"Ayopaya","region":"Cochabamba","alias":null},{"name":"Capinota","region":"Cochabamba","alias":null},{"name":"Carrasco","region":"Cochabamba","alias":null},{"name":"Cercado","region":"Cochabamba","alias":null},{"name":"Chapare","region":"Cochabamba","alias":null},{"name":"Esteban Arce","region":"Cochabamba","alias":null},{"name":"Germán Jordán","region":"Cochabamba","alias":["German Jordan"]},{"name":"Mizque","region":"Cochabamba","alias":null},{"name":"Campero","region":"Cochabamba","alias":null},{"name":"Punata","region":"Cochabamba","alias":null},{"name":"Quillacollo","region":"Cochabamba","alias":null},{"name":"Bolívar","region":"Cochabamba","alias":["Bolivar"]},{"name":"Tapacarí","region":"Cochabamba","alias":["Tapacari"]},{"name":"Tiraque","region":"Cochabamba","alias":null},{"name":"Abel Iturralde","region":"La Paz","alias":null},{"name":"Aroma","region":"La Paz","alias":null},{"name":"Bautista Saavedra","region":"La Paz","alias":null},{"name":"Caranavi","region":"La Paz","alias":null},{"name":"Eliodoro Camacho","region":"La Paz","alias":null},{"name":"Franz Tamayo","region":"La Paz","alias":null},{"name":"Gualberto Villarroel","region":"La Paz","alias":null},{"name":"Ingavi","region":"La Paz","alias":null},{"name":"Inquisivi","region":"La Paz","alias":null},{"name":"José Manuel Pando","region":"La Paz","alias":["Jose Manuel Pando"]},{"name":"Larecaja","region":"La Paz","alias":null},{"name":"Loayza","region":"La Paz","alias":null},{"name":"Los Andes","region":"La Paz","alias":null},{"name":"Manco Kapac","region":"La Paz","alias":null},{"name":"Muñecas","region":"La Paz","alias":["Munecas"]},{"name":"Nor Yungas","region":"La Paz","alias":null},{"name":"Omasuyos","region":"La Paz","alias":null},{"name":"Pacajes","region":"La Paz","alias":null},{"name":"Murillo","region":"La Paz","alias":null},{"name":"Sud Yungas","region":"La Paz","alias":null},{"name":"Atahuallpa","region":"Oruro","alias":null},{"name":"Carangas","region":"Oruro","alias":null},{"name":"Cercado","region":"Oruro","alias":null},{"name":"Eduardo Avaroa","region":"Oruro","alias":null},{"name":"Ladislao Cabrera","region":"Oruro","alias":null},{"name":"Litoral","region":"Oruro","alias":null},{"name":"Nor Carangas","region":"Oruro","alias":null},{"name":"Pantaléon Dalence","region":"Oruro","alias":["Pantaleon Dalence"]},{"name":"Poopó","region":"Oruro","alias":["Poopo"]},{"name":"Puerto de Mejillones","region":"Oruro","alias":null},{"name":"Sajama","region":"Oruro","alias":null},{"name":"San Pedro de Totora","region":"Oruro","alias":null},{"name":"Saucarí","region":"Oruro","alias":["Saucari"]},{"name":"Sebastián Pagador","region":"Oruro","alias":["Sebastian Pagador"]},{"name":"Sud Carangas","region":"Oruro","alias":null},{"name":"Tomas Barrón","region":"Oruro","alias":["Tomas Barron"]},{"name":"Abuná","region":"Pando","alias":["Abuna"]},{"name":"Federico Román","region":"Pando","alias":["Federico Roman"]},{"name":"Madre de Dios","region":"Pando","alias":null},{"name":"Manuripi","region":"Pando","alias":null},{"name":"Nicolás Suárez","region":"Pando","alias":["Nicolas Suarez"]},{"name":"Alonso de Ibáñez","region":"Potosí","alias":["Alonso de Ibanez"]},{"name":"Antonio Quijarro","region":"Potosí","alias":null},{"name":"Bernardino Bilbao","region":"Potosí","alias":null},{"name":"Charcas","region":"Potosí","alias":null},{"name":"Chayanta","region":"Potosí","alias":null},{"name":"Cornelio Saavedra","region":"Potosí","alias":null},{"name":"Daniel Campos","region":"Potosí","alias":null},{"name":"Enrique Baldivieso","region":"Potosí","alias":null},{"name":"José María Linares","region":"Potosí","alias":["José Maria Linares"]},{"name":"Modesto Omiste","region":"Potosí","alias":null},{"name":"Nor Chichas","region":"Potosí","alias":null},{"name":"Nor Lípez","region":"Potosí","alias":["Nor Lipez"]},{"name":"Rafael Bustillo","region":"Potosí","alias":null},{"name":"Sur Chichas","region":"Potosí","alias":null},{"name":"Sur Lípez","region":"Potosí","alias":["Sur Lipez"]},{"name":"Tomás Frías","region":"Potosí","alias":["Tomas Frias"]},{"name":"Andrés Ibáñez","region":"Santa Cruz","alias":["Andres Ibanez"]},{"name":"Ángel Sandoval","region":"Santa Cruz","alias":["Angel Sandoval"]},{"name":"Chiquitos","region":"Santa Cruz","alias":null},{"name":"Cordillera","region":"Santa Cruz","alias":null},{"name":"Florida","region":"Santa Cruz","alias":null},{"name":"Germán Busch","region":"Santa Cruz","alias":["German Busch"]},{"name":"Guarayos","region":"Santa Cruz","alias":null},{"name":"Ichilo","region":"Santa Cruz","alias":null},{"name":"Ignacio Warnes","region":"Santa Cruz","alias":null},{"name":"José Miguel de Velasco","region":"Santa Cruz","alias":["Jose Miguel de Velasco"]},{"name":"Manuel María Caballero","region":"Santa Cruz","alias":["Manuel Maria Caballero"]},{"name":"Ñuflo de Chávez","region":"Santa Cruz","alias":["Nuflo de Chavez"]},{"name":"Obispo Santistevan","region":"Santa Cruz","alias":null},{"name":"Sara","region":"Santa Cruz","alias":null},{"name":"Vallegrande","region":"Santa Cruz","alias":null},{"name":"Aniceto Arce","region":"Tarija","alias":null},{"name":"Burnet O\'Connor","region":"Tarija","alias":null},{"name":"Cercado","region":"Tarija","alias":null},{"name":"Eustaquio Méndez","region":"Tarija","alias":["Eustaquio Mendez"]},{"name":"Gran Chaco","region":"Tarija","alias":null},{"name":"José María Avilés","region":"Tarija","alias":["Jose María Aviles"]}],"BR":[{"short":"AC","name":"Acre","alias":null},{"short":"AL","name":"Alagoas","alias":null},{"short":"AP","name":"Amapá","alias":["Amapa"]},{"short":"AM","name":"Amazonas","alias":null},{"short":"BA","name":"Bahia","alias":null},{"short":"CE","name":"Ceará","alias":["Ceara"]},{"short":"DF","name":"Distrito Federal","alias":null},{"short":"ES","name":"Espírito Santo","alias":["Espirito Santo"]},{"short":"GO","name":"Goiás","alias":["Goias"]},{"short":"MA","name":"Maranhão","alias":["Maranhao"]},{"short":"MT","name":"Mato Grosso","alias":null},{"short":"MS","name":"Mato Grosso do Sul","alias":null},{"short":"MG","name":"Minas Gerais","alias":null},{"short":"PA","name":"Pará","alias":["Para"]},{"short":"PB","name":"Paraíba","alias":["Paraiba"]},{"short":"PR","name":"Paraná","alias":["Parana"]},{"short":"PE","name":"Pernambuco","alias":null},{"short":"PI","name":"Piauí","alias":["Piaui"]},{"short":"RJ","name":"Rio de Janeiro","alias":null},{"short":"RN","name":"Rio Grande do Norte","alias":null},{"short":"RS","name":"Rio Grande do Sul","alias":null},{"short":"RO","name":"Rondônia","alias":["Rondonia"]},{"short":"RR","name":"Roraima","alias":null},{"short":"SC","name":"Santa Catarina","alias":null},{"short":"SP","name":"São Paulo","alias":["Sao Paulo"]},{"short":"SE","name":"Sergipe","alias":null},{"short":"TO","name":"Tocantins","alias":null}],"CA":[{"short":"AB","name":"Alberta","alias":null},{"short":"BC","name":"British Columbia","alias":null},{"short":"MB","name":"Manitoba","alias":null},{"short":"NB","name":"New Brunswick","alias":null},{"short":"NL","name":"Newfoundland and Labrador","alias":["Newfoundland","Labrador"]},{"short":"NS","name":"Nova Scotia","alias":null},{"short":"NU","name":"Nunavut","alias":null},{"short":"NT","name":"Northwest Territories","alias":null},{"short":"ON","name":"Ontario","alias":null},{"short":"PE","name":"Prince Edward Island","alias":null},{"short":"QC","name":"Quebec","alias":null},{"short":"SK","name":"Saskatchewan","alias":null},{"short":"YT","name":"Yukon","alias":null}],"CL":[{"name":"Arica","region":"XV Arica and Parinacota","alias":null},{"name":"Parinacota","region":"XV Arica and Parinacota","alias":null},{"name":"Iquique","region":"I Tarapacá","alias":null},{"name":"Tamarugal","region":"I Tarapacá","alias":null},{"name":"Antofagasta","region":"II Antofagasta","alias":null},{"name":"El Loa","region":"II Antofagasta","alias":null},{"name":"Tocopilla","region":"II Antofagasta","alias":null},{"name":"Copiapó","region":"III Atacama","alias":["Copiapo"]},{"name":"Huasco","region":"III Atacama","alias":null},{"name":"Chañaral","region":"III Atacama","alias":["Chanaral"]},{"name":"Elqui","region":"IV Coquimbo","alias":null},{"name":"Limarí","region":"IV Coquimbo","alias":["Limari"]},{"name":"Choapa","region":"IV Coquimbo","alias":null},{"name":"Isla de Pascua","region":"V Valparaíso","alias":null},{"name":"Los Andes","region":"V Valparaíso","alias":null},{"name":"Marga Marga","region":"V Valparaíso","alias":null},{"name":"Petorca","region":"V Valparaíso","alias":null},{"name":"Quillota","region":"V Valparaíso","alias":null},{"name":"San Antonio","region":"V Valparaíso","alias":null},{"name":"San Felipe de Aconcagua","region":"V Valparaíso","alias":null},{"name":"Valparaíso","region":"V Valparaíso","alias":["Valparaiso"]},{"name":"Cachapoal","region":"VI O\'Higgins","alias":null},{"name":"Colchagua","region":"VI O\'Higgins","alias":null},{"name":"Cardenal Caro","region":"VI O\'Higgins","alias":null},{"name":"Talca","region":"VII Maule","alias":null},{"name":"Linares","region":"VII Maule","alias":null},{"name":"Curicó","region":"VII Maule","alias":["Curico"]},{"name":"Cauquenes","region":"VII Maule","alias":null},{"name":"Concepción","region":"VIII Biobío","alias":["Concepcion"]},{"name":"Ñuble","region":"VIII Biobío","alias":["Nuble"]},{"name":"Biobío","region":"VIII Biobío","alias":["Biobio"]},{"name":"Arauco","region":"VIII Biobío","alias":null},{"name":"Cautin","region":"IX Araucanía","alias":null},{"name":"Malleco","region":"IX Araucanía","alias":null},{"name":"Valdivia","region":"XIV Los Ríos","alias":null},{"name":"Ranco","region":"XIV Los Ríos","alias":null},{"name":"Llanquihue","region":"X Los Lagos","alias":null},{"name":"Osorno","region":"X Los Lagos","alias":null},{"name":"Chiloe","region":"X Los Lagos","alias":null},{"name":"Palena","region":"X Los Lagos","alias":null},{"name":"Coihaique","region":"XI Aisén","alias":null},{"name":"Aisén","region":"XI Aisén","alias":["Aisen"]},{"name":"General Carrera","region":"XI Aisén","alias":null},{"name":"Capitan Prat","region":"XI Aisén","alias":null},{"name":"Magallanes","region":"XII Magallanes","alias":null},{"name":"Ultima Esperanza","region":"XII Magallanes","alias":null},{"name":"Tierra del Fuego","region":"XII Magallanes","alias":null},{"name":"Antártica Chilena","region":"XII Magallanes","alias":["Antartica Chilena"]},{"name":"Santiago","region":"RM Santiago Metropolitan","alias":null},{"name":"Cordillera","region":"RM Santiago Metropolitan","alias":null},{"name":"Maipo","region":"RM Santiago Metropolitan","alias":null},{"name":"Talagante","region":"RM Santiago Metropolitan","alias":null},{"name":"Melipilla","region":"RM Santiago Metropolitan","alias":null},{"name":"Chacabuco","region":"RM Santiago Metropolitan","alias":null}],"CN":[{"name":"Chongqing","short":"CQ","alias":["重庆","渝","Chongqing Shi"]},{"name":"Heilongjiang","short":"HL","alias":["黑龙江","黑","Heilongjiang Sheng"]},{"name":"Jilin","short":"JL","alias":["吉林","吉","Jilin Sheng"]},{"name":"Hainan","short":"HI","alias":["海南","琼","Hainan Sheng"]},{"name":"Beijing","short":"BJ","alias":["北京","京","Beijing Shi"]},{"name":"Liaoning","short":"LN","alias":["辽宁","辽","Liaoning Sheng"]},{"name":"Inner Mongolia","short":"NM","alias":["内蒙古","蒙","Nei Menggu Zizhiqu"]},{"name":"Tibet","short":"XZ","alias":["Xizang","西藏","藏","Xizang Zizhiqu"]},{"name":"Qinghai","short":"QH","alias":["青海","青","Qinghai Sheng"]},{"name":"Ningxia","short":"NX","alias":["宁夏","宁","Ningxia Huizu Zizhiqu"]},{"name":"Xinjiang","short":"XJ","alias":["新疆","新","Xinjiang Weiwuer Zizhiqu"]},{"name":"Gansu","short":"GS","alias":["甘肃","甘","Gansu Sheng"]},{"name":"Hebei","short":"HE","alias":["河北","冀","Hebei Sheng"]},{"name":"Henan","short":"HA","alias":["河南","豫","Henan Sheng"]},{"name":"Hubei","short":"HB","alias":["湖北","鄂","Hubei Sheng"]},{"name":"Hunan","short":"HN","alias":["湖南","湘","Hunan Sheng"]},{"name":"Shandong","short":"SD","alias":["山东","鲁","Shandong Sheng"]},{"name":"Jiangsu","short":"JS","alias":["江苏","苏","Jiangsu Sheng"]},{"name":"Anhui","short":"AH","alias":["安徽","皖","Anhui Sheng"]},{"name":"Shanxi","short":"SX","alias":["山西","晋","Shānxī Sheng"]},{"name":"Shaanxi","short":"SN","alias":["陕西","陕","Shǎnxī Sheng"]},{"name":"Sichuan","short":"SC","alias":["四川","川","Sichuan Sheng"]},{"name":"Yunnan","short":"YN","alias":["云南","滇","Yunnan Sheng"]},{"name":"Guizhou","short":"GZ","alias":["贵州","黔","Guizhou Sheng"]},{"name":"Zhejiang","short":"ZJ","alias":["浙江","浙","Zhejiang Sheng"]},{"name":"Fujian","short":"FJ","alias":["福建","闽","Fujian Sheng"]},{"name":"Guangxi","short":"GX","alias":["广西","桂","Guangxi Zhuangzu Zizhiqu"]},{"name":"Shanghai","short":"SH","alias":["上海","沪","Shanghai Shi"]},{"name":"Tianjin","short":"TJ","alias":["天津","津","Tianjin Shi"]},{"name":"Hong Kong","short":"HK","alias":["Xianggang","香港","港","Xianggang Tebie Xingzhengqu"]},{"name":"Macau","short":"MC","alias":["Aomen","澳门","澳","Aomen Tebie Xingzhengqu"]},{"name":"Taiwan","short":"TW","alias":["台湾","台","Taiwan Shi"]},{"name":"Jiangxi","short":"JX ","alias":["江西","赣","Jiangxi Sheng"]},{"name":"Guangdong","short":"GD","alias":["广东","粤","Guangdong Sheng"]}],"CU":[{"name":"Camagüey","alias":["Camaguey"]},{"name":"Ciego de Ávila","alias":["Ciego de Avila"]},{"name":"Cienfuegos","alias":null},{"name":"Havana","alias":null},{"name":"Bayamo","alias":null},{"name":"Guantánamo","alias":["Guantanamo"]},{"name":"Holguín","alias":["Holguin"]},{"name":"Nueva Gerona","alias":null},{"name":"Artemisa","alias":null},{"name":"Las Tunas","alias":null},{"name":"Matanzas","alias":null},{"name":"San José de las Lajas","alias":["San Jose de las Lajas"]},{"name":"Pinar del Río","alias":["Pinar del Rio"]},{"name":"Sancti Spíritus","alias":["Sancti Spiritus"]},{"name":"Santiago de Cuba","alias":null},{"name":"Santa Clara","alias":null}],"DE":[{"short":"BW","name":"Baden-Württemberg","alias":["Baden-Wurttemberg","Baden Württemberg","Baden Wurttemberg"]},{"short":"BY","name":"Bayern","alias":null},{"short":"BE","name":"Berlin","alias":null},{"short":"BB","name":"Brandenburg","alias":null},{"short":"HB","name":"Bremen","alias":null},{"short":"HH","name":"Hamburg","alias":null},{"short":"HE","name":"Hessen","alias":null},{"short":"MV","name":"Mecklenburg-Vorpommern","alias":["Mecklenburg Vorpommern"]},{"short":"NI","name":"Niedersachsen","alias":null},{"short":"NW","name":"Nordrhein-Westfalen","alias":["Nordrhein Westfalen"]},{"short":"RP","name":"Rheinland-Pfalz","alias":["Rheinland Pfalz"]},{"short":"SL","name":"Saarland","alias":null},{"short":"SN","name":"Sachsen","alias":null},{"short":"ST","name":"Sachsen-Anhalt","alias":["Sachsen Anhalt"]},{"short":"SH","name":"Schleswig-Holstein","alias":["Schleswig Holstein"]},{"short":"TH","name":"Thüringen","alias":["Thuringen"]}],"DK":[{"name":"Hovedstaden","alias":null},{"name":"Midtjylland","alias":null},{"name":"Nordjylland","alias":null},{"name":"Sjælland","alias":["Zealand"]},{"name":"Syddanmark","alias":null}],"ES":[{"name":"La Coruña","short":"C","alias":["La Coruna"]},{"name":"Lugo","short":"LU","alias":null},{"name":"Vizcaya","short":"BI","alias":null},{"name":"Guipúzcoa","short":"SS","alias":["Guipuzcoa"]},{"name":"Huesca","short":"HU","alias":null},{"name":"Lérida","short":"L","alias":["Lerida"]},{"name":"Gerona","short":"GI","alias":null},{"name":"Barcelona","short":"B","alias":null},{"name":"Tarragona","short":"T","alias":null},{"name":"Castellón","short":"CS","alias":["Castellon"]},{"name":"Valencia","short":"V","alias":null},{"name":"Alicante","short":"A","alias":null},{"name":"Murcia","short":"MU","alias":null},{"name":"Zaragoza","short":"Z","alias":null},{"name":"Teruel","short":"TE","alias":null},{"name":"Cuenca","short":"CU","alias":null},{"name":"Albacete","short":"AB","alias":null},{"name":"Almeria","short":"AL","alias":null},{"name":"Granada","short":"GR","alias":null},{"name":"Málaga","short":"MA","alias":["Malaga"]},{"name":"Tenerife","short":"TF","alias":null},{"name":"Cádiz","short":"CA","alias":["Cadiz"]},{"name":"Sevilla","short":"SE","alias":null},{"name":"Huelva","short":"H","alias":null},{"name":"Las Palmas","short":"GC","alias":null},{"name":"Madrid","short":"M","alias":null},{"name":"Badajoz","short":"BA","alias":null},{"name":"Cáceres","short":"CC","alias":["Caceres"]},{"name":"Toledo","short":"TO","alias":null},{"name":"Ciudad Real","short":"CR","alias":null},{"name":"Salamanca","short":"SA","alias":null},{"name":"Córdoba","short":"CO","alias":["Cordoba"]},{"name":"Jaén","short":"J","alias":["Jaen"]},{"name":"Ávila","short":"AV","alias":["Avila"]},{"name":"Valladolid","short":"VA","alias":null},{"name":"Zamora","short":"ZA","alias":null},{"name":"Álava","short":"VI","alias":["Alava"]},{"name":"Segovia","short":"SG","alias":null},{"name":"Burgos","short":"BU","alias":null},{"name":"Pontevedra","short":"PO","alias":null},{"name":"León","short":"LE","alias":["Leon"]},{"name":"Orense","short":"OU","alias":null},{"name":"Palencia","short":"P","alias":null},{"name":"La Rioja","short":"LO","alias":null},{"name":"Soria","short":"SO","alias":null},{"name":"Guadalajara","short":"GU","alias":null}],"ET":[{"name":"Addis Ababa","alias":null},{"name":"Afar Region","alias":null},{"name":"Amhara Region","alias":null},{"name":"Benishangul-Gumuz","alias":["Benishangul Gumuz"]},{"name":"Dire Dawa","alias":null},{"name":"Gambela","alias":null},{"name":"Harari","alias":null},{"name":"Oromia","alias":null},{"name":"Somali","alias":null},{"name":"Southern Nations, Nationalities, and Peoples\' Region","alias":"SNNPR"},{"name":"Tigray Region","alias":null}],"ID":[{"short":"ID-AC","name":"Special Region of Aceh","alias":null},{"short":"ID-BA","name":"Bali","alias":null},{"short":"ID-BB","name":"Bangka–Belitung Islands","alias":["Bangka Belitung Islands"]},{"short":"ID-BT","name":"Banten","alias":null},{"short":"ID-BE","name":"Bengkulu","alias":null},{"short":"ID-JT","name":"Central Java","alias":null},{"short":"ID-KT","name":"Central Kalimantan","alias":null},{"short":"ID-ST","name":"Central Sulawesi","alias":null},{"short":"ID-JI","name":"East Java","alias":null},{"short":"ID-KI","name":"East Kalimantan","alias":null},{"short":"ID-NT","name":"East Nusa Tenggara","alias":null},{"short":"ID-GO","name":"Gorontalo","alias":null},{"short":"ID-JK","name":"Jakarta Special Capital Region","alias":null},{"short":"ID-JA","name":"Jambi","alias":null},{"short":"ID-LA","name":"Lampung","alias":null},{"short":"ID-MA","name":"Maluku","alias":null},{"short":"ID-KU","name":"North Kalimantan","alias":null},{"short":"ID-MU","name":"North Maluku","alias":null},{"short":"ID-SA","name":"North Sulawesi","alias":null},{"short":"ID-SU","name":"North Sumatra","alias":null},{"short":"ID-PA","name":"Special Region of Papua","alias":null},{"short":"ID-RI","name":"Riau","alias":null},{"short":"ID-KR","name":"Riau Islands","alias":null},{"short":"ID-SG","name":"Southeast Sulawesi","alias":null},{"short":"ID-KS","name":"South Kalimantan","alias":null},{"short":"ID-SN","name":"South Sulawesi","alias":null},{"short":"ID-SS","name":"South Sumatra","alias":null},{"short":"ID-JB","name":"West Java","alias":null},{"short":"ID-KB","name":"West Kalimantan","alias":null},{"short":"ID-NB","name":"West Nusa Tenggara","alias":null},{"short":"ID-PB","name":"Special Region of West Papua","alias":null},{"short":"ID-SR","name":"West Sulawesi","alias":null},{"short":"ID-SB","name":"West Sumatra","alias":null},{"short":"ID-YO","name":"Special Region of Yogyakarta","alias":null}],"IN":[{"short":"AP","name":"Andhra Pradesh","alias":null},{"short":"AR","name":"Arunachal Pradesh","alias":null},{"short":"AS","name":"Assam","alias":null},{"short":"BR","name":"Bihar","alias":null},{"short":"CT","name":"Chhattisgarh","alias":null},{"short":"GA","name":"Goa","alias":null},{"short":"GJ","name":"Gujarat","alias":null},{"short":"HR","name":"Haryana","alias":null},{"short":"HP","name":"Himachal Pradesh","alias":null},{"short":"JK","name":"Jammu and Kashmir","alias":null},{"short":"JH","name":"Jharkhand","alias":null},{"short":"KA","name":"Karnataka","alias":null},{"short":"KL","name":"Kerala","alias":null},{"short":"MP","name":"Madhya Pradesh","alias":null},{"short":"MH","name":"Maharashtra","alias":null},{"short":"MN","name":"Manipur","alias":null},{"short":"ML","name":"Meghalaya","alias":null},{"short":"MZ","name":"Mizoram","alias":null},{"short":"NL","name":"Nagaland","alias":null},{"short":"OR","name":"Odisha","alias":null},{"short":"PB","name":"Punjab","alias":null},{"short":"RJ","name":"Rajasthan","alias":null},{"short":"SK","name":"Sikkim","alias":null},{"short":"TN","name":"Tamil Nadu","alias":null},{"short":"TG","name":"Telangana","alias":null},{"short":"TR","name":"Tripura","alias":null},{"short":"UP","name":"Uttar Pradesh","alias":null},{"short":"UT","name":"Uttarakhand","alias":null},{"short":"WB","name":"West Bengal","alias":null},{"short":"AN","name":"Andaman and Nicobar Islands","alias":null},{"short":"CH","name":"Chandigarh","alias":null},{"short":"DN","name":"Dadra and Nagar Haveli","alias":null},{"short":"DD","name":"Daman and Diu","alias":null},{"short":"LD","name":"Lakshadweep","alias":null},{"short":"DL","name":"National Capital Territory of Delhi","alias":null},{"short":"PY","name":"Puducherry","alias":null}],"JO":[{"name":"Irbid","alias":null},{"name":"Ajloun","alias":null},{"name":"Jerash","alias":null},{"name":"Mafraq","alias":null},{"name":"Balqa","alias":null},{"name":"Amman","alias":null},{"name":"Zarqa","alias":null},{"name":"Madaba","alias":null},{"name":"Karak","alias":null},{"name":"Tafilah","alias":null},{"name":"Ma\'an","alias":null},{"name":"Aqaba","alias":null}],"JP":[{"name":"愛知県","alias":["Aichi"]},{"name":"秋田県","alias":["Akita"]},{"name":"青森県","alias":["Aomori"]},{"name":"千葉県","alias":["Chiba"]},{"name":"愛媛県","alias":["Ehime"]},{"name":"福井県","alias":["Fukui"]},{"name":"福岡県","alias":["Fukuoka"]},{"name":"福島県","alias":["Fukushima"]},{"name":"岐阜県","alias":["Gifu"]},{"name":"群馬県","alias":["Gunma"]},{"name":"広島県","alias":["Hiroshima"]},{"name":"北海道","alias":["Hokkaidō"]},{"name":"兵庫県","alias":["Hyōgo","Hyogo"]},{"name":"茨城県","alias":["Ibaraki"]},{"name":"石川県","alias":["Ishikawa"]},{"name":"岩手県","alias":["Iwate"]},{"name":"香川県","alias":["Kagawa"]},{"name":"鹿児島県","alias":["Kagoshima"]},{"name":"神奈川県","alias":["Kanagawa"]},{"name":"高知県","alias":["Kōchi","Kochi"]},{"name":"熊本県","alias":["Kumamoto"]},{"name":"京都府","alias":["Kyōto","Kyoto"]},{"name":"三重県","alias":["Mie"]},{"name":"宮城県","alias":["Miyagi"]},{"name":"宮崎県","alias":["Miyazaki"]},{"name":"長野県","alias":["Nagano"]},{"name":"長崎県","alias":["Nagasaki"]},{"name":"奈良県","alias":["Nara"]},{"name":"新潟県","alias":["Niigata"]},{"name":"大分県","alias":["Ōita","Oita"]},{"name":"岡山県","alias":["Okayama"]},{"name":"沖縄県","alias":["Okinawa"]},{"name":"大阪府","alias":["Ōsaka"]},{"name":"佐賀県","alias":["Saga"]},{"name":"埼玉県","alias":["Saitama"]},{"name":"滋賀県","alias":["Shiga"]},{"name":"島根県","alias":["Shimane"]},{"name":"静岡県","alias":["Shizuoka"]},{"name":"栃木県","alias":["Tochigi"]},{"name":"徳島県","alias":["Tokushima"]},{"name":"東京都","alias":["Tōkyō","Tokyo"]},{"name":"鳥取県","alias":["Tottori"]},{"name":"富山県","alias":["Toyama"]},{"name":"和歌山県","alias":["Wakayama"]},{"name":"山形県","alias":["Yamagata"]},{"name":"山口県","alias":["Yamaguchi"]},{"name":"山梨県","alias":["Yamanashi"]}],"KH":[{"name":"ភ្នំពេញ","alias":["Phnom Penh Municipality"]},{"name":"បន្ទាយមានជ័យ","alias":["Banteay Meanchey"]},{"name":"បាត់ដំបង","alias":["Battambang"]},{"name":"កំពង់ចាម","alias":["Kampong Cham"]},{"name":"កំពង់ឆ្នាំង","alias":["Kampong Chhnang"]},{"name":"កំពង់ស្ពឺ","alias":["Kampong Speu"]},{"name":"កំពង់ធំ","alias":["Kampong Thom"]},{"name":"កំពត","alias":["Kampot"]},{"name":"កណ្តាល","alias":["Kandal"]},{"name":"កោះកុង","alias":["Koh Kong"]},{"name":"កែប","alias":["Kep"]},{"name":"ក្រចេះ","alias":["Kratié","Kratie"]},{"name":"មណ្ឌលគីរី","alias":["Mondulkiri"]},{"name":"ឧត្តរមានជ័យ","alias":["Oddar Meanchey"]},{"name":"បៃលិន","alias":["Pailin"]},{"name":"ព្រះសីហនុ","alias":["Preah Sihanouk"]},{"name":"ព្រះវិហារ","alias":["Preah Vihear"]},{"name":"ពោធិ៍សាត់","alias":["Pursat"]},{"name":"ព្រៃវែង","alias":["Prey Veng"]},{"name":"រតនគីរី","alias":["Ratanakiri"]},{"name":"សៀមរាប","alias":["Siem Reap"]},{"name":"ស្ទឹងត្រែង","alias":["Stung Treng"]},{"name":"ស្វាយរៀង","alias":["Svay Rieng"]},{"name":"តាកែវ","alias":["Takéo","Takeo"]},{"name":"ត្បូងឃ្មុំ","alias":["Tbong Khmum"]}],"MX":[{"name":"Aguascalientes","short":"AG","alias":["AGS"]},{"name":"Baja California","short":"BC","alias":["BCN"]},{"name":"Baja California Sur","short":"BS","alias":["BCS"]},{"name":"Campeche","short":"CM","alias":["Camp","CAM"]},{"name":"Chiapas","short":"CS","alias":["Chis","CHP"]},{"name":"Chihuahua","short":"CH","alias":["Chih","CHH"]},{"name":"Coahuila","short":"MX","alias":["Coah","COA"]},{"name":"Colima","short":"CL","alias":["COL"]},{"name":"Federal District","short":"DF","alias":["DIF"]},{"name":"Durango","short":"DG","alias":["Dgo","DUR"]},{"name":"Guanajuato","short":"GT","alias":["Gto","GUA"]},{"name":"Guerrero","short":"GR","alias":["Gro","GRO"]},{"name":"Hidalgo","short":"HG","alias":["Hgo","HID"]},{"name":"Jalisco","short":"JA","alias":["Jal","JAL"]},{"name":"Mexico","short":"ME","alias":["Edomex","MEX"]},{"name":"Michoacán","short":"MI","alias":["Mich","MIC","Michoacan"]},{"name":"Morelos","short":"MO","alias":["Mor","MOR"]},{"name":"Nayarit","short":"NA","alias":["Nay","NAY"]},{"name":"Nuevo León","short":"NL","alias":["NLE","Nuevo Leon"]},{"name":"Oaxaca","short":"OA","alias":["Oax","OAX"]},{"name":"Puebla","short":"PU","alias":["Pue","PUE"]},{"name":"Querétaro","short":"QE","alias":["Qro","QUE","Queretaro"]},{"name":"Quintana Roo","short":"QR","alias":["Q Roo","ROO"]},{"name":"San Luis Potosí","short":"SL","alias":["SLP","San Luis Potosi"]},{"name":"Sinaloa","short":"SI","alias":["SIN"]},{"name":"Sonora","short":"SO","alias":["SON"]},{"name":"Tabasco","short":"TB","alias":["TAB"]},{"name":"Tamaulipas","short":"TM","alias":["Tamps","TAM"]},{"name":"Tlaxcala","short":"TL","alias":["Tlax","TLA"]},{"name":"Veracruz","short":"VE","alias":["VER"]},{"name":"Yucatán","short":"YU","alias":["YUC","Yucatan"]},{"name":"Zacatecas","short":"ZA","alias":["ZAC"]}],"NG":[{"name":"Anambra","alias":null},{"name":"Enugu","alias":null},{"name":"Akwa Ibom","alias":null},{"name":"Adamawa","alias":null},{"name":"Abia","alias":null},{"name":"Bauchi","alias":null},{"name":"Bayelsa","alias":null},{"name":"Benue","alias":null},{"name":"Borno","alias":null},{"name":"Cross River","alias":null},{"name":"Delta","alias":null},{"name":"Ebonyi","alias":null}],"NL":[{"short":"DR","name":"Drenthe","alias":null},{"short":"FL","name":"Flevoland","alias":null},{"short":"FR","name":"Friesland","alias":null},{"short":"GD","name":"Gelderland","alias":null},{"short":"GR","name":"Groningen","alias":null},{"short":"LB","name":"Limburg","alias":null},{"short":"NB","name":"Noord-Brabant","alias":["Noord Brabant"]},{"short":"NH","name":"Noord-Holland","alias":["Noord Holland"]},{"short":"OV","name":"Overijssel","alias":null},{"short":"UT","name":"Utrecht","alias":null},{"short":"ZH","name":"Zuid-Holland","alias":["Zuid Holland"]},{"short":"ZL","name":"Zeeland","alias":null},{"short":"AW","name":"Aruba","alias":null},{"short":"BQ","name":"Bonaire","alias":null},{"short":"BQ2","name":"Saba","alias":null},{"short":"BQ3","name":"Sint Eustatius","alias":null},{"short":"CW","name":"Curaçao","alias":null},{"short":"SX","name":"Sint Maarten","alias":null}],"PE":[{"name":"Chachapoyas","region":"Amazonas","alias":null},{"name":"Bagua","region":"Amazonas","alias":null},{"name":"Bongará","region":"Amazonas","alias":["Bongara"]},{"name":"Condorcanqui","region":"Amazonas","alias":null},{"name":"Luya","region":"Amazonas","alias":null},{"name":"Rodríguez de Mendoza","region":"Amazonas","alias":["Rodriguez de Mendoza"]},{"name":"Utcubamba","region":"Amazonas","alias":null},{"name":"Huaraz","region":"Ancash","alias":null},{"name":"Aija","region":"Ancash","alias":null},{"name":"Antonio Raymondi","region":"Ancash","alias":null},{"name":"Asunción","region":"Ancash","alias":["Asuncion"]},{"name":"Bolognesi","region":"Ancash","alias":null},{"name":"Carhuaz","region":"Ancash","alias":null},{"name":"Carlos Fermín Fitzcarrald","region":"Ancash","alias":["Carlos Fermin Fitzcarrald"]},{"name":"Casma","region":"Ancash","alias":null},{"name":"Corongo","region":"Ancash","alias":null},{"name":"Huari","region":"Ancash","alias":null},{"name":"Huarmey","region":"Ancash","alias":null},{"name":"Huaylas","region":"Ancash","alias":null},{"name":"Mariscal Luzuriaga","region":"Ancash","alias":null},{"name":"Ocros","region":"Ancash","alias":null},{"name":"Pallasca","region":"Ancash","alias":null},{"name":"Pomabamba","region":"Ancash","alias":null},{"name":"Recuay","region":"Ancash","alias":null},{"name":"Santa","region":"Ancash","alias":null},{"name":"Sihuas","region":"Ancash","alias":null},{"name":"Yungay","region":"Ancash","alias":null},{"name":"Abancay","region":"Apurímac","alias":null},{"name":"Andahuaylas","region":"Apurímac","alias":null},{"name":"Antabamba","region":"Apurímac","alias":null},{"name":"Aymaraes","region":"Apurímac","alias":null},{"name":"Cotabambas","region":"Apurímac","alias":null},{"name":"Chincheros","region":"Apurímac","alias":null},{"name":"Grau","region":"Apurímac","alias":null},{"name":"Arequipa","region":"Arequipa","alias":null},{"name":"Camaná","region":"Arequipa","alias":["Camana"]},{"name":"Caravelí","region":"Arequipa","alias":["Caraveli"]},{"name":"Castilla","region":"Arequipa","alias":null},{"name":"Caylloma","region":"Arequipa","alias":null},{"name":"Condesuyos","region":"Arequipa","alias":null},{"name":"Islay","region":"Arequipa","alias":null},{"name":"La Unión","region":"Arequipa","alias":["La Union"]},{"name":"Huamanga","region":"Ayacucho","alias":null},{"name":"Cangallo","region":"Ayacucho","alias":null},{"name":"Huanca Sancos","region":"Ayacucho","alias":null},{"name":"Huanta","region":"Ayacucho","alias":null},{"name":"La Mar","region":"Ayacucho","alias":null},{"name":"Lucanas","region":"Ayacucho","alias":null},{"name":"Parinacochas","region":"Ayacucho","alias":null},{"name":"Páucar del Sara Sara","region":"Ayacucho","alias":["Paucar del Sara Sara"]},{"name":"Sucre","region":"Ayacucho","alias":null},{"name":"Víctor Fajardo","region":"Ayacucho","alias":["Victor Fajardo"]},{"name":"Vilcas Huamán","region":"Ayacucho","alias":["Vilcas Huaman"]},{"name":"Cajamarca","region":"Cajamarca","alias":null},{"name":"Cajabamba","region":"Cajamarca","alias":null},{"name":"Celendín","region":"Cajamarca","alias":["Celendin"]},{"name":"Chota","region":"Cajamarca","alias":null},{"name":"Contumazá","region":"Cajamarca","alias":["Contumaza"]},{"name":"Cutervo","region":"Cajamarca","alias":null},{"name":"Hualgayoc","region":"Cajamarca","alias":null},{"name":"Jaén","region":"Cajamarca","alias":["Jaen"]},{"name":"San Ignacio","region":"Cajamarca","alias":null},{"name":"San Marcos","region":"Cajamarca","alias":null},{"name":"San Miguel","region":"Cajamarca","alias":null},{"name":"San Pablo","region":"Cajamarca","alias":null},{"name":"Santa Cruz","region":"Cajamarca","alias":null},{"name":"Callao","region":"Callao","alias":null},{"name":"Cusco","region":"Cusco","alias":null},{"name":"Acomayo","region":"Cusco","alias":null},{"name":"Anta","region":"Cusco","alias":null},{"name":"Calca","region":"Cusco","alias":null},{"name":"Canas","region":"Cusco","alias":null},{"name":"Canchis","region":"Cusco","alias":null},{"name":"Chumbivilcas","region":"Cusco","alias":null},{"name":"Espinar","region":"Cusco","alias":null},{"name":"La Convención","region":"Cusco","alias":["La Convencion"]},{"name":"Paruro","region":"Cusco","alias":null},{"name":"Paucartambo","region":"Cusco","alias":null},{"name":"Quispicanchi","region":"Cusco","alias":null},{"name":"Urubamba","region":"Cusco","alias":null},{"name":"Huancavelica","region":"Huancavelica","alias":null},{"name":"Acobamba","region":"Huancavelica","alias":null},{"name":"Angaraes","region":"Huancavelica","alias":null},{"name":"Castrovirreyna","region":"Huancavelica","alias":null},{"name":"Churcampa","region":"Huancavelica","alias":null},{"name":"Huaytará","region":"Huancavelica","alias":["Huaytara"]},{"name":"Tayacaja","region":"Huancavelica","alias":null},{"name":"Huánuco","region":"Huánuco","alias":["Huanuco"]},{"name":"Ambo","region":"Huánuco","alias":null},{"name":"Dos de Mayo","region":"Huánuco","alias":null},{"name":"Huacaybamba","region":"Huánuco","alias":null},{"name":"Huamalíes","region":"Huánuco","alias":["Huamalies"]},{"name":"Leoncio Prado","region":"Huánuco","alias":null},{"name":"Marañón","region":"Huánuco","alias":["Maranon"]},{"name":"Pachitea","region":"Huánuco","alias":null},{"name":"Puerto Inca","region":"Huánuco","alias":null},{"name":"Lauricocha","region":"Huánuco","alias":null},{"name":"Yarowilca","region":"Huánuco","alias":null},{"name":"Ica","region":"Ica","alias":null},{"name":"Chincha","region":"Ica","alias":null},{"name":"Nazca","region":"Ica","alias":null},{"name":"Palpa","region":"Ica","alias":null},{"name":"Pisco","region":"Ica","alias":null},{"name":"Huancayo","region":"Junín","alias":null},{"name":"Concepción","region":"Junín","alias":["Concepcion"]},{"name":"Chanchamayo","region":"Junín","alias":null},{"name":"Jauja","region":"Junín","alias":null},{"name":"Junín","region":"Junín","alias":["Junin"]},{"name":"Satipo","region":"Junín","alias":null},{"name":"Tarma","region":"Junín","alias":null},{"name":"Yauli","region":"Junín","alias":null},{"name":"Chupaca","region":"Junín","alias":null},{"name":"Trujillo","region":"La Libertad","alias":null},{"name":"Ascope","region":"La Libertad","alias":null},{"name":"Bolívar","region":"La Libertad","alias":["Bolivar"]},{"name":"Chepén","region":"La Libertad","alias":["Chepen"]},{"name":"Julcán","region":"La Libertad","alias":["Julcan"]},{"name":"Otuzco","region":"La Libertad","alias":null},{"name":"Pacasmayo","region":"La Libertad","alias":null},{"name":"Pataz","region":"La Libertad","alias":null},{"name":"Sánchez Carrión","region":"La Libertad","alias":["Sanchez Carrion"]},{"name":"Santiago de Chuco","region":"La Libertad","alias":null},{"name":"Gran Chimú","region":"La Libertad","alias":["Gran Chimu"]},{"name":"Virú","region":"La Libertad","alias":["Viru"]},{"name":"Chiclayo","region":"Lambayeque","alias":null},{"name":"Ferreñafe","region":"Lambayeque","alias":["Ferrenafe"]},{"name":"Lambayeque","region":"Lambayeque","alias":null},{"name":"Lima","region":"autonomous","alias":null},{"name":"Huaura","region":"Lima","alias":null},{"name":"Barranca","region":"Lima","alias":null},{"name":"Cajatambo","region":"Lima","alias":null},{"name":"Canta","region":"Lima","alias":null},{"name":"Cañete","region":"Lima","alias":["Canete"]},{"name":"Huaral","region":"Lima","alias":null},{"name":"Huarochirí","region":"Lima","alias":null},{"name":"Oyón","region":"Lima","alias":["Oyon"]},{"name":"Yauyos","region":"Lima","alias":null},{"name":"Maynas","region":"Loreto","alias":null},{"name":"Aliaso Amazonas","region":"Loreto","alias":null},{"name":"Loreto","region":"Loreto","alias":null},{"name":"Mariscal Ramón Castilla","region":"Loreto","alias":["Mariscal Ramon Castilla"]},{"name":"Putumayo","region":"Loreto","alias":null},{"name":"Requena","region":"Loreto","alias":null},{"name":"Ucayali","region":"Loreto","alias":null},{"name":"Datem del Marañón","region":"Loreto","alias":["Datem del Maranon"]},{"name":"Tambopata","region":"Madre de Dios","alias":null},{"name":"Manú","region":"Madre de Dios","alias":["Manu"]},{"name":"Tahuamanu","region":"Madre de Dios","alias":null},{"name":"Mariscal Nieto","region":"Moquegua","alias":null},{"name":"General Sánchez Cerro","region":"Moquegua","alias":["General Sanchez Cerro"]},{"name":"Ilo","region":"Moquegua","alias":null},{"name":"Pasco","region":"Pasco","alias":null},{"name":"Daniel Alcídes Carrión","region":"Pasco","alias":["Daniel Alcides Carrion"]},{"name":"Oxapampa","region":"Pasco","alias":null},{"name":"Piura","region":"Piura","alias":null},{"name":"Ayabaca","region":"Piura","alias":null},{"name":"Huancabamba","region":"Piura","alias":null},{"name":"Morropón","region":"Piura","alias":["Morropon"]},{"name":"Paita","region":"Piura","alias":null},{"name":"Sullana","region":"Piura","alias":null},{"name":"Talara","region":"Piura","alias":null},{"name":"Sechura","region":"Piura","alias":null},{"name":"Puno","region":"Puno","alias":null},{"name":"Azángaro","region":"Puno","alias":["Azangaro"]},{"name":"Carabaya","region":"Puno","alias":null},{"name":"Chucuito","region":"Puno","alias":null},{"name":"El Collao","region":"Puno","alias":null},{"name":"Huancané","region":"Puno","alias":["Huancane"]},{"name":"Lampa","region":"Puno","alias":null},{"name":"Melgar","region":"Puno","alias":null},{"name":"Moho","region":"Puno","alias":null},{"name":"San Antonio de Putina","region":"Puno","alias":null},{"name":"San Román","region":"Puno","alias":["San Roman"]},{"name":"Sandia","region":"Puno","alias":null},{"name":"Yunguyo","region":"Puno","alias":null},{"name":"Moyobamba","region":"San Martín","alias":null},{"name":"Bellavista","region":"San Martín","alias":null},{"name":"El Dorado","region":"San Martín","alias":null},{"name":"Huallaga","region":"San Martín","alias":null},{"name":"Lamas","region":"San Martín","alias":null},{"name":"Mariscal Cáceres","region":"San Martín","alias":["Mariscal Caceres"]},{"name":"Picota","region":"San Martín","alias":null},{"name":"Rioja","region":"San Martín","alias":null},{"name":"San Martín","region":"San Martín","alias":["San Martin"]},{"name":"Tocache","region":"San Martín","alias":null},{"name":"Tacna","region":"Tacna","alias":null},{"name":"Candarave","region":"Tacna","alias":null},{"name":"Jorge Basadre","region":"Tacna","alias":null},{"name":"Tarata","region":"Tacna","alias":null},{"name":"Tumbes","region":"Tumbes","alias":null},{"name":"Contralmirante Villar","region":"Tumbes","alias":null},{"name":"Zarumilla","region":"Tumbes","alias":null},{"name":"Coronel Portillo","region":"Ucayali","alias":null},{"name":"Atalaya","region":"Ucayali","alias":null},{"name":"Padre Abad","region":"Ucayali","alias":null},{"name":"Purús","region":"Ucayali","alias":["Purus"]}],"PH":[{"name":"Abra","alias":null},{"name":"Agusan del Norte","alias":null},{"name":"Agusan del Sur","alias":null},{"name":"Aklan","alias":null},{"name":"Albay","alias":null},{"name":"Antique","alias":null},{"name":"Apayao","alias":null},{"name":"Aurora","alias":null},{"name":"Basilan","alias":null},{"name":"Bataan","alias":null},{"name":"Batanes","alias":null},{"name":"Batangas","alias":null},{"name":"Benguet","alias":null},{"name":"Biliran","alias":null},{"name":"Bohol","alias":null},{"name":"Bukidnon","alias":null},{"name":"Bulacan","alias":null},{"name":"Cagayan","alias":null},{"name":"Camarines Norte","alias":null},{"name":"Camarines Sur","alias":null},{"name":"Camiguin","alias":null},{"name":"Capiz","alias":null},{"name":"Catanduanes","alias":null},{"name":"Cavite","alias":null},{"name":"Cebu","alias":null},{"name":"Compostela Valley","alias":null},{"name":"Cotabato","alias":null},{"name":"Davao del Norte","alias":null},{"name":"Davao del Sur","alias":null},{"name":"Davao Occidental","alias":null},{"name":"Davao Oriental","alias":null},{"name":"Dinagat Islands","alias":null},{"name":"Eastern Samar","alias":null},{"name":"Guimaras","alias":null},{"name":"Ifugao","alias":null},{"name":"Ilocos Norte","alias":null},{"name":"Ilocos Sur","alias":null},{"name":"Iloilo","alias":null},{"name":"Isabela","alias":null},{"name":"Kalinga","alias":null},{"name":"La Union","alias":null},{"name":"Laguna","alias":null},{"name":"Lanao del Norte","alias":null},{"name":"Lanao del Sur","alias":null},{"name":"Leyte","alias":null},{"name":"Maguindanao","alias":null},{"name":"Marinduque","alias":null},{"name":"Masbate","alias":null},{"name":"Misamis Occidental","alias":null},{"name":"Misamis Oriental","alias":null},{"name":"Mountain Province","alias":null},{"name":"Negros Occidental","alias":null},{"name":"Negros Oriental","alias":null},{"name":"Northern Samar","alias":null},{"name":"Nueva Ecija","alias":null},{"name":"Nueva Vizcaya","alias":null},{"name":"Occidental Mindoro","alias":null},{"name":"Oriental Mindoro","alias":null},{"name":"Palawan","alias":null},{"name":"Pampanga","alias":null},{"name":"Pangasinan","alias":null},{"name":"Quezon","alias":null},{"name":"Quirino","alias":null},{"name":"Rizal","alias":null},{"name":"Romblon","alias":null},{"name":"Samar","alias":null},{"name":"Sarangani","alias":null},{"name":"Siquijor","alias":null},{"name":"Sorsogon","alias":null},{"name":"South Cotabato","alias":null},{"name":"Southern Leyte","alias":null},{"name":"Sultan Kudarat","alias":null},{"name":"Sulu","alias":null},{"name":"Surigao del Norte","alias":null},{"name":"Surigao del Sur","alias":null},{"name":"Tarlac","alias":null},{"name":"Tawi-Tawi","alias":["Tawi Tawi"]},{"name":"Zambales","alias":null},{"name":"Zamboanga del Norte","alias":null},{"name":"Zamboanga del Sur","alias":null},{"name":"Zamboanga Sibugay","alias":null},{"name":"Metro Manila","alias":null}],"PK":[{"name":"Azad Kashmir","alias":null},{"name":"Bahawalpur","alias":null},{"name":"Bannu","alias":null},{"name":"Dera Ghazi Khan","alias":null},{"name":"Dera Ismail Khan","alias":null},{"name":"Faisalabad","alias":null},{"name":"Federally Administered Tribal Areas","alias":["FATA","F.A.T.A."]},{"name":"Gujranwala","alias":null},{"name":"Hazara","alias":null},{"name":"Hyderabad","alias":null},{"name":"Islamabad","alias":null},{"name":"Kalat","alias":null},{"name":"Karachi","alias":null},{"name":"Kohat","alias":null},{"name":"Lahore","alias":null},{"name":"Larkana","alias":null},{"name":"Makran","alias":null},{"name":"Malakand","alias":null},{"name":"Mardan","alias":null},{"name":"Mirpur Khas","alias":null},{"name":"Multan","alias":null},{"name":"Nasirabad","alias":null},{"name":"Northern Areas","alias":null},{"name":"Peshawar","alias":null},{"name":"Quetta","alias":null},{"name":"Rawalpindi","alias":null},{"name":"Sargodha","alias":null},{"name":"Sahiwal","alias":null},{"name":"Sibi","alias":null},{"name":"Sukkur","alias":null},{"name":"Zhob","alias":null}],"TR":[{"name":"Adana","alias":null},{"name":"Adıyaman","alias":["Adiyaman"]},{"name":"Afyonkarahisar","alias":null},{"name":"Ağrı","alias":["Agri"]},{"name":"Amasya","alias":null},{"name":"Ankara","alias":null},{"name":"Antalya","alias":null},{"name":"Artvin","alias":null},{"name":"Aydın","alias":["Aydin"]},{"name":"Balıkesir","alias":["Balikesir"]},{"name":"Bilecik","alias":null},{"name":"Bingöl","alias":["Bingol"]},{"name":"Bitlis","alias":null},{"name":"Bolu","alias":null},{"name":"Burdur","alias":null},{"name":"Bursa","alias":null},{"name":"Çanakkale","alias":["Canakkale"]},{"name":"Çankırı","alias":["Cankiri"]},{"name":"Çorum","alias":["Corum"]},{"name":"Denizli","alias":null},{"name":"Diyarbakır","alias":["Diyarbakir"]},{"name":"Edirne","alias":null},{"name":"Elazığ","alias":["Elazig"]},{"name":"Erzincan","alias":null},{"name":"Erzurum","alias":null},{"name":"Eskişehir","alias":["Eskisehir"]},{"name":"Gaziantep","alias":null},{"name":"Giresun","alias":null},{"name":"Gümüşhane","alias":["Gumushane"]},{"name":"Hakkâri","alias":["Hakkari"]},{"name":"Hatay","alias":null},{"name":"Isparta","alias":null},{"name":"Mersin","alias":null},{"name":"Istanbul","alias":null},{"name":"İzmir","alias":["Izmir"]},{"name":"Kars","alias":null},{"name":"Kastamonu","alias":null},{"name":"Kayseri","alias":null},{"name":"Kırklareli","alias":null},{"name":"Kırşehir","alias":["Kırsehir"]},{"name":"Kocaeli","alias":null},{"name":"Konya","alias":null},{"name":"Kütahya","alias":["Kutahya"]},{"name":"Malatya","alias":null},{"name":"Manisa","alias":null},{"name":"Kahramanmaraş","alias":["Kahramanmaras"]},{"name":"Mardin","alias":null},{"name":"Muğla","alias":"Mugla"},{"name":"Muş","alias":["Mus"]},{"name":"Nevşehir","alias":["Nevsehir"]},{"name":"Niğde","alias":["Nigde"]},{"name":"Ordu","alias":null},{"name":"Rize","alias":null},{"name":"Sakarya","alias":null},{"name":"Samsun","alias":null},{"name":"Siirt","alias":null},{"name":"Sinop","alias":null},{"name":"Sivas","alias":null},{"name":"Tekirdağ","alias":["Tekirdag"]},{"name":"Tokat","alias":null},{"name":"Trabzon","alias":null},{"name":"Tunceli","alias":null},{"name":"Şanlıurfa","alias":["Sanliurfa"]},{"name":"Uşak","alias":["Usak"]},{"name":"Van","alias":null},{"name":"Yozgat","alias":null},{"name":"Zonguldak","alias":null},{"name":"Aksaray","alias":null},{"name":"Bayburt","alias":null},{"name":"Karaman","alias":null},{"name":"Kırıkkale","alias":["Kirikkale"]},{"name":"Batman","alias":null},{"name":"Şırnak","alias":["Sirnak"]},{"name":"Bartın","alias":["Bartin"]},{"name":"Ardahan","alias":null},{"name":"Iğdır","alias":["Igdir"]},{"name":"Yalova","alias":null},{"name":"Karabük","alias":["Karabuk"]},{"name":"Kilis","alias":null},{"name":"Osmaniye","alias":null},{"name":"Düzce","alias":["Duzce"]}],"GB":[{"name":"Avon","region":"England","alias":null},{"name":"Bedfordshire","region":"England","alias":null},{"name":"Berkshire","region":"England","alias":null},{"name":"Borders","region":"England","alias":null},{"name":"Bristol","region":"England","alias":null},{"name":"Buckinghamshire","region":"England","alias":null},{"name":"Cambridgeshire","region":"England","alias":null},{"name":"Channel Islands","region":"England","alias":null},{"name":"Cheshire","region":"England","alias":null},{"name":"Cleveland","region":"England","alias":null},{"name":"Cornwall","region":"England","alias":null},{"name":"Cumbria","region":"England","alias":null},{"name":"Derbyshire","region":"England","alias":null},{"name":"Devon","region":"England","alias":null},{"name":"Dorset","region":"England","alias":null},{"name":"Durham","region":"England","alias":null},{"name":"East Riding of Yorkshire","region":"England","alias":["East Yorkshire"]},{"name":"East Sussex","region":"England","alias":null},{"name":"Essex","region":"England","alias":null},{"name":"Gloucestershire","region":"England","alias":null},{"name":"Greater Manchester","region":"England","alias":null},{"name":"Hampshire","region":"England","alias":null},{"name":"Herefordshire","region":"England","alias":null},{"name":"Hertfordshire","region":"England","alias":null},{"name":"Humberside","region":"England","alias":null},{"name":"Isle of Man","region":"England","alias":null},{"name":"Isle of Wight","region":"England","alias":null},{"name":"Isles of Scilly","region":"England","alias":null},{"name":"Kent","region":"England","alias":null},{"name":"Lancashire","region":"England","alias":null},{"name":"Leicestershire","region":"England","alias":null},{"name":"Lincolnshire","region":"England","alias":null},{"name":"London","region":"England","alias":null},{"name":"Merseyside","region":"England","alias":null},{"name":"Middlesex","region":"England","alias":null},{"name":"Norfolk","region":"England","alias":null},{"name":"North Yorkshire","region":"England","alias":null},{"name":"Northamptonshire","region":"England","alias":null},{"name":"Northumberland","region":"England","alias":null},{"name":"Nottinghamshire","region":"England","alias":null},{"name":"Oxfordshire","region":"England","alias":null},{"name":"Rutland","region":"England","alias":null},{"name":"Shropshire","region":"England","alias":null},{"name":"Somerset","region":"England","alias":null},{"name":"South Yorkshire","region":"England","alias":null},{"name":"Staffordshire","region":"England","alias":null},{"name":"Suffolk","region":"England","alias":null},{"name":"Surrey","region":"England","alias":null},{"name":"Tyne and Wear","region":"England","alias":null},{"name":"Warwickshire","region":"England","alias":null},{"name":"West Midlands","region":"England","alias":null},{"name":"West Sussex","region":"England","alias":null},{"name":"West Yorkshire","region":"England","alias":null},{"name":"Wiltshire","region":"England","alias":null},{"name":"Worcestershire","region":"England","alias":null},{"name":"Antrim","region":"Northern Ireland","alias":null},{"name":"Down","region":"Northern Ireland","alias":null},{"name":"Fermanagh","region":"Northern Ireland","alias":null},{"name":"Londonderry","region":"Northern Ireland","alias":null},{"name":"Tyrone","region":"Northern Ireland","alias":null},{"name":"Aberdeen City","region":"Scotland","alias":null},{"name":"Aberdeenshire","region":"Scotland","alias":null},{"name":"Angus","region":"Scotland","alias":null},{"name":"Argyll and Bute","region":"Scotland","alias":null},{"name":"Armagh","region":"Scotland","alias":null},{"name":"Carmarthenshire","region":"Scotland","alias":null},{"name":"Clackmannan","region":"Scotland","alias":null},{"name":"Dumfries and Galloway","region":"Scotland","alias":null},{"name":"East Ayrshire","region":"Scotland","alias":null},{"name":"East Dunbartonshire","region":"Scotland","alias":null},{"name":"East Lothian","region":"Scotland","alias":null},{"name":"East Renfrewshire","region":"Scotland","alias":null},{"name":"Edinburgh City","region":"Scotland","alias":null},{"name":"Falkirk","region":"Scotland","alias":null},{"name":"Fife","region":"Scotland","alias":null},{"name":"Glasgow","region":"Scotland","alias":null},{"name":"Highland","region":"Scotland","alias":null},{"name":"Inverclyde","region":"Scotland","alias":null},{"name":"Midlothian","region":"Scotland","alias":null},{"name":"Moray","region":"Scotland","alias":null},{"name":"North Ayrshire","region":"Scotland","alias":null},{"name":"North Lanarkshire","region":"Scotland","alias":null},{"name":"Orkney","region":"Scotland","alias":null},{"name":"Perthshire and Kinross","region":"Scotland","alias":null},{"name":"Renfrewshire","region":"Scotland","alias":null},{"name":"Roxburghshire","region":"Scotland","alias":null},{"name":"Shetland","region":"Scotland","alias":null},{"name":"South Ayrshire","region":"Scotland","alias":null},{"name":"South Lanarkshire","region":"Scotland","alias":null},{"name":"Stirling","region":"Scotland","alias":null},{"name":"West Dunbartonshire","region":"Scotland","alias":null},{"name":"West Lothian","region":"Scotland","alias":null},{"name":"Western Isles","region":"Scotland","alias":null},{"name":"Blaenau Gwent","region":"Wales","alias":null},{"name":"Bridgend","region":"Wales","alias":null},{"name":"Caerphilly","region":"Wales","alias":null},{"name":"Cardiff","region":"Wales","alias":null},{"name":"Ceredigion","region":"Wales","alias":null},{"name":"Conwy","region":"Wales","alias":null},{"name":"Denbighshire","region":"Wales","alias":null},{"name":"Flintshire","region":"Wales","alias":null},{"name":"Gwynedd","region":"Wales","alias":null},{"name":"Isle of Anglesey","region":"Wales","alias":null},{"name":"Merthyr Tydfil","region":"Wales","alias":null},{"name":"Monmouthshire","region":"Wales","alias":null},{"name":"Neath Port Talbot","region":"Wales","alias":null},{"name":"Newport","region":"Wales","alias":null},{"name":"Pembrokeshire","region":"Wales","alias":null},{"name":"Powys","region":"Wales","alias":null},{"name":"Rhondda Cynon Taff","region":"Wales","alias":null},{"name":"Swansea","region":"Wales","alias":null},{"name":"The Vale of Glamorgan","region":"Wales","alias":["The Vale"]},{"name":"Torfaen","region":"Wales","alias":null},{"name":"Wrexham","region":"Wales","alias":null}],"US":[{"short":"AL","name":"Alabama","alias":null},{"short":"AK","name":"Alaska","alias":null},{"short":"AZ","name":"Arizona","alias":null},{"short":"AR","name":"Arkansas","alias":null},{"short":"CA","name":"California","alias":null},{"short":"CO","name":"Colorado","alias":null},{"short":"CT","name":"Connecticut","alias":null},{"short":"DC","name":"District of Columbia","alias":null},{"short":"DE","name":"Delaware","alias":null},{"short":"FL","name":"Florida","alias":null},{"short":"FM","name":"Micronesia","alias":null},{"short":"GA","name":"Georgia","alias":null},{"short":"HI","name":"Hawaii","alias":null},{"short":"ID","name":"Idaho","alias":null},{"short":"IL","name":"Illinois","alias":null},{"short":"IN","name":"Indiana","alias":null},{"short":"IA","name":"Iowa","alias":null},{"short":"KS","name":"Kansas","alias":null},{"short":"KY","name":"Kentucky","alias":null},{"short":"LA","name":"Louisiana","alias":null},{"short":"ME","name":"Maine","alias":null},{"short":"MD","name":"Maryland","alias":null},{"short":"MA","name":"Massachusetts","alias":null},{"short":"MI","name":"Michigan","alias":null},{"short":"MN","name":"Minnesota","alias":null},{"short":"MH","name":"Marshall Islands","alias":null},{"short":"MS","name":"Mississippi","alias":null},{"short":"MO","name":"Missouri","alias":null},{"short":"MT","name":"Montana","alias":null},{"short":"NE","name":"Nebraska","alias":null},{"short":"NV","name":"Nevada","alias":null},{"short":"NH","name":"New Hampshire","alias":null},{"short":"NJ","name":"New Jersey","alias":null},{"short":"NM","name":"New Mexico","alias":null},{"short":"NY","name":"New York","alias":null},{"short":"NC","name":"North Carolina","alias":null},{"short":"ND","name":"North Dakota","alias":null},{"short":"OH","name":"Ohio","alias":null},{"short":"OK","name":"Oklahoma","alias":null},{"short":"OR","name":"Oregon","alias":null},{"short":"PA","name":"Pennsylvania","alias":null},{"short":"PW","name":"Palau","alias":null},{"short":"RI","name":"Rhode Island","alias":null},{"short":"SC","name":"South Carolina","alias":null},{"short":"SD","name":"South Dakota","alias":null},{"short":"TN","name":"Tennessee","alias":null},{"short":"TX","name":"Texas","alias":null},{"short":"UT","name":"Utah","alias":null},{"short":"VT","name":"Vermont","alias":null},{"short":"VA","name":"Virginia","alias":null},{"short":"WA","name":"Washington","alias":null},{"short":"WV","name":"West Virginia","alias":null},{"short":"WI","name":"Wisconsin","alias":null},{"short":"WY","name":"Wyoming","alias":null},{"short":"AS","name":"American Samoa","alias":null},{"short":"GU","name":"Guam","alias":null},{"short":"MP","name":"Northern Mariana Islands","alias":null},{"short":"PR","name":"Puerto Rico","alias":null},{"short":"UM","name":"United States Minor Outlying Islands","alias":null},{"short":"VI","name":"Virgin Islands","alias":null}],"VN":[{"name":"Hà Nội","alias":["Ha Noi"]},{"name":"Hà Giang","alias":["Ha Giang"]},{"name":"Cao Bằng","alias":["Cao Bang"]},{"name":"Bắc Kạn","alias":["Bac Kan"]},{"name":"Tuyên Quang","alias":["Tuyen Quang"]},{"name":"Lào Cai","alias":["Lao Cai"]},{"name":"Điện Biên","alias":["Dien Bien"]},{"name":"Lai Châu","alias":["Lai Chau"]},{"name":"Sơn La","alias":["Son La"]},{"name":"Yên Bái","alias":["Yen Bai"]},{"name":"Hòa Bình","alias":["Hoa Binh"]},{"name":"Thái Nguyên","alias":["Thai Nguyen"]},{"name":"Lạng Sơn","alias":["Lang Son"]},{"name":"Quảng Ninh","alias":["Quang Ninh"]},{"name":"Bắc Giang","alias":["Bac Giang"]},{"name":"Phú Thọ","alias":["Phu Tho"]},{"name":"Vĩnh Phúc","alias":["Vinh Phuc"]},{"name":"Bắc Ninh","alias":["Bac Ninh"]},{"name":"Hải Dương","alias":["Hai Duong"]},{"name":"Hải Phòng","alias":["Hai Phong"]},{"name":"Hưng Yên","alias":["Hung Yen"]},{"name":"Thái Bình","alias":["Thai Binh"]},{"name":"Hà Nam","alias":["Ha Nam"]},{"name":"Nam Định","alias":["Nam Dinh"]},{"name":"Ninh Bình","alias":["Ninh Binh"]},{"name":"Thanh Hóa","alias":["Thanh Hoa"]},{"name":"Nghệ An","alias":["Nghe An"]},{"name":"Hà Tĩnh","alias":["Ha Tinh"]},{"name":"Quảng Bình","alias":["Quang Binh"]},{"name":"Quảng Trị","alias":["Quang Tri"]},{"name":"Thừa Thiên–Huế","alias":["Thua Thien–Hue","Thua Thien Hue"]},{"name":"Đà Nẵng","alias":["Da Nang"]},{"name":"Quảng Nam","alias":["Quang Nam"]},{"name":"Quảng Ngãi","alias":["Quang Ngai"]},{"name":"Bình Định","alias":["Binh Dinh"]},{"name":"Phú Yên","alias":["Phu Yen"]},{"name":"Khánh Hòa","alias":["Khanh Hoa"]},{"name":"Ninh Thuận","alias":["Ninh Thuan"]},{"name":"Bình Thuận","alias":["Binh Thuan"]},{"name":"Kon Tum","alias":null},{"name":"Gia Lai","alias":null},{"name":"Đắk Lắk","alias":["Dak Lak"]},{"name":"Đắk Nông","alias":["Dak Nong"]},{"name":"Lâm Đồng","alias":["Lam Dong"]},{"name":"Bình Phước","alias":"Binh Phuoc"},{"name":"Tây Ninh","alias":["Tay Ninh"]},{"name":"Bình Dương","alias":["Binh Duong"]},{"name":"Đồng Nai","alias":["Dong Nai"]},{"name":"Bà Rịa–Vũng Tàu","alias":["Ba Ria–Vung Tau","Ba Ria Vung Tau"]},{"name":"Thành phố Hồ Chí Minh","alias":["Thanh pho Ho Chi Minh"]},{"name":"Long An","alias":null},{"name":"Tiền Giang","alias":["Tien Giang"]},{"name":"Bến Tre","alias":["Ben Tre"]},{"name":"Trà Vinh","alias":["Tra Vinh"]},{"name":"Vĩnh Long","alias":["Vinh Long"]},{"name":"Đồng Tháp","alias":["Dong Thap"]},{"name":"An Giang","alias":null},{"name":"Kiên Giang","alias":["Kien Giang"]},{"name":"Cần Thơ","alias":["Can Thơ"]},{"name":"Hậu Giang","alias":["Hau Giang"]},{"name":"Sóc Trăng","alias":["Soc Trang"]},{"name":"Bạc Liêu","alias":["Bac Lieu"]},{"name":"Cà Mau","alias":["Ca Mau"]}]}');
        },
        138: module => {
            "use strict";
            module.exports = JSON.parse('{"AD":"Southern Europe","AE":"Western Asia, Middle East","AF":"Central Asia","AG":"Caribbean","AI":"Caribbean","AL":"Balkans","AM":"Western Asia","AO":"Central Africa","AQ":"Antarctica","AR":"South America","AS":"American Samoa","AT":"Western Europe","AU":"Oceania","AW":"Caribbean","AX":"Scandinavia","AZ":"Western Asia","BA":"Balkans","BB":"Caribbean","BD":"Southern Asia","BE":"Western Europe","BF":"Western Africa","BG":"Central Europe","BH":"Western Asia, Middle East","BI":"East Africa, Central Africa","BJ":"Western Africa","BL":"Caribbean","BM":"Caribbean, North America","BN":"South-East Asia","BO":"South America","BQ":"Caribbean","BR":"South America","BS":"Caribbean","BT":"Southern Asia","BV":"Scandinavia, Nordic Countries","BW":"Southern Africa","BY":"Central Europe","BZ":"Caribbean","CA":"North America","CC":"Central America","CD":"Central Africa","CF":"Central Africa","CG":"Central Africa","CH":"Western Europe","CI":"Western Africa","CK":"Oceania","CL":"South America","CM":"Central Africa","CN":"East Asia","CO":"South America","CR":"Central America","CU":"Caribbean","CV":"Western Africa","CW":"Caribbean","CX":"Oceania","CY":"Western Asia","CZ":"Central Europe","DE":"Western Europe","DJ":"East Africa","DK":"Scandinavia, Nordic Countries","DM":"Caribbean","DO":"Caribbean","DZ":"Northern Africa","EC":"South America","EE":"Baltic Countries","EG":"Northern Africa","EH":"Western Sahara","ER":"East Africa","ES":"Southern Europe","ET":"East Africa","FI":"Nordic Countries","FJ":"Oceania","FK":"South America","FM":"Oceania","FO":"Scandinavia, Nordic Countries","FR":"Western Europe","GA":"Central Africa","GB":"Western Europe","GD":"Caribbean","GE":"Western Asia","GF":"South America","GG":"Western Europe","GH":"Western African","GI":"Southern Europe","GL":"North America","GM":"Western Africa","GN":"Western Africa","GP":"Caribbean","GQ":"Central Africa","GR":"Southern Europe","GS":"South America","GT":"Central America","GU":"Oceania","GW":"Western Africa","GY":"Caribbean","HK":"East Asia","HM":"Oceania","HN":"Central America","HR":"Balkans","HT":"Caribbean","HU":"Central Europe","ID":"South-East Asia, Oceania","IE":"Western Europe","IL":"Western Asia, Middle East","IM":"Western Europe","IN":"Southern Asia","IO":"Southern Asia","IQ":"Western Asia, Middle East","IR":"Western Asia, Middle East","IS":"Scandinavia, Nordic Countries","IT":"Southern Europe","JE":"Western Europe","JM":"Caribbean","JO":"Western Asia, Middle East","JP":"East Asia","KE":"East Africa","KG":"Central Asia","KH":"South-East Asia","KI":"Oceania","KM":"East Africa","KN":"Caribbean","KP":"East Asia","KR":"East Asia","KW":"Western Asia, Middle East","KY":"Caribbean","KZ":"Central Asia","LA":"South-East Asia","LB":"Western Asia, Middle East","LC":"Caribbean","LI":"Western Europe","LK":"Southern Asia","LR":"Western Africa","LS":"Southern Africa","LT":"Baltic Countries","LU":"Western Europe","LV":"Baltic Countries","LY":"Northern Africa","MA":"Northern Africa","MC":"Western Europe","MD":"Central Europe","ME":"Balkans","MF":"Caribbean","MG":"East Africa, Southern Africa","MH":"Oceania","MK":"Balkans","ML":"Western Africa","MM":"South-East Asia","MN":"East Asia","MO":"East Asia","MP":"South-East Asia","MQ":"Caribbean","MR":"Western Africa","MS":"Caribbean","MT":"Southern Europe","MU":"East Africa","MV":"Southern Asia","MW":"East Africa, Southern Africa","MX":"North America","MY":"South-East Asia","MZ":"East Africa, Southern Africa","NA":"Southern Africa","NC":"Oceania","NE":"Western Africa","NF":"Oceania","NG":"Western Africa","NI":"Central America","NL":"Western Europe, Nordic Countries","NO":"Scandinavia, Nordic Countries","NP":"Southern Asia","NR":"Oceania","NU":"Oceania","NZ":"Oceania","OM":"Western Asia, Middle East","PA":"Central America","PE":"South America","PF":"Oceania","PG":"Oceania","PH":"South-East Asia","PK":"Southern Asia","PL":"Central Europe","PM":"North America","PN":"Oceania","PR":"Caribbean","PS":"Western Asia, Middle East","PT":"Southern Europe","PW":"Oceania","PY":"South America","QA":"Western Asia, Middle East","RE":"East Africa","RO":"Central Europe","RS":"Balkans","RU":"Eastern Europe","RW":"East Africa, Central Africa","SA":"Western Asia, Middle East","SB":"Oceania","SC":"East Africa","SD":"Northern Africa, East Africa","SE":"Scandinavia, Nordic Countries","SG":"South-East Asia","SH":"Western Africa","SI":"Balkans","SJ":"Scandinavia","SK":"Central Europe","SL":"Western Africa","SM":"Southern Europe","SN":"Western Africa","SO":"East Africa","SR":"South America","SS":"East Africa, Northern Africa","ST":"Central Africa","SV":"Central America","SX":"Caribbean","SY":"Western Asia, Middle East","SZ":"Southern Africa","TC":"Caribbean","TD":"Central Africa","TF":"Oceania","TG":"Western Africa","TH":"South-East Asia","TJ":"Central Asia","TK":"Oceania","TL":"South-East Asia","TM":"Central Asia","TN":"Northern Africa","TO":"Oceania","TR":"Western Asia, Middle East","TT":"Caribbean","TV":"Oceania","TW":"East Asia","TZ":"East Africa","UA":"Central Europe","UG":"East Africa","UM":"Oceania","US":"North America","UY":"South America","UZ":"Central Asia","VA":"Southern Europe","VC":"Caribbean","VE":"South America","VG":"Caribbean","VI":"Caribbean","VN":"South-East Asia","VU":"Oceania","WF":"Oceania","WS":"Oceania","XK":"Balkans","YE":"Western Asia, Middle East","YT":"East Africa","ZA":"Southern Africa","ZM":"East Africa, Southern Africa","ZW":"East Africa, Southern Africa"}');
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                document.addEventListener("click", setSpollerAction);
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerItems = spollersBlock.querySelectorAll("details");
                    if (spollerItems.length) spollerItems.forEach((spollerItem => {
                        let spollerTitle = spollerItem.querySelector("summary");
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerItem.hasAttribute("data-open")) {
                                spollerItem.open = false;
                                spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.classList.add("_spoller-active");
                                spollerItem.open = true;
                            }
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.classList.remove("_spoller-active");
                            spollerItem.open = true;
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    }));
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("summary") && el.closest("[data-spollers]")) {
                        e.preventDefault();
                        if (el.closest("[data-spollers]").classList.contains("_spoller-init")) {
                            const spollerTitle = el.closest("summary");
                            const spollerBlock = spollerTitle.closest("details");
                            const spollersBlock = spollerTitle.closest("[data-spollers]");
                            const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                            const scrollSpoller = spollerBlock.hasAttribute("data-spoller-scroll");
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            if (!spollersBlock.querySelectorAll("._slide").length) {
                                if (oneSpoller && !spollerBlock.open) hideSpollersBody(spollersBlock);
                                !spollerBlock.open ? spollerBlock.open = true : setTimeout((() => {
                                    spollerBlock.open = false;
                                }), spollerSpeed);
                                spollerTitle.classList.toggle("_spoller-active");
                                _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                                if (scrollSpoller && spollerTitle.classList.contains("_spoller-active")) {
                                    const scrollSpollerValue = spollerBlock.dataset.spollerScroll;
                                    const scrollSpollerOffset = +scrollSpollerValue ? +scrollSpollerValue : 0;
                                    const scrollSpollerNoHeader = spollerBlock.hasAttribute("data-spoller-scroll-noheader") ? document.querySelector(".header").offsetHeight : 0;
                                    window.scrollTo({
                                        top: spollerBlock.offsetTop - (scrollSpollerOffset + scrollSpollerNoHeader),
                                        behavior: "smooth"
                                    });
                                }
                            }
                        }
                    }
                    if (!el.closest("[data-spollers]")) {
                        const spollersClose = document.querySelectorAll("[data-spoller-close]");
                        if (spollersClose.length) spollersClose.forEach((spollerClose => {
                            const spollersBlock = spollerClose.closest("[data-spollers]");
                            const spollerCloseBlock = spollerClose.parentNode;
                            if (spollersBlock.classList.contains("_spoller-init")) {
                                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                                spollerClose.classList.remove("_spoller-active");
                                _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                                setTimeout((() => {
                                    spollerCloseBlock.open = false;
                                }), spollerSpeed);
                            }
                        }));
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveBlock = spollersBlock.querySelector("details[open]");
                    if (spollerActiveBlock && !spollersBlock.querySelectorAll("._slide").length) {
                        const spollerActiveTitle = spollerActiveBlock.querySelector("summary");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                        setTimeout((() => {
                            spollerActiveBlock.open = false;
                        }), spollerSpeed);
                    }
                }
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : [ classes ]);
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function utils_elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            return {
                isSafari: needPerspectiveFix || isSafari(),
                needPerspectiveFix,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.hostEl);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.hostEl, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? utils_elementOuterSize(slide, "width", true) : utils_elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (!lazyEl && swiper.isElement) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (swiper.slides[activeIndex]) realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10); else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = e.closest(`.${params.slideClass}, swiper-slide`);
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) {
                swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
            }
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else newIndex = swiper.getSlideIndexByData(newIndex);
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach(((el, index) => {
                el.setAttribute("data-swiper-slide-index", index);
            }));
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
            let loopedSlides = params.loopedSlides || slidesPerView;
            if (loopedSlides % params.slidesPerGroup !== 0) loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
            swiper.loopedSlides = loopedSlides;
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            if (activeSlideIndex < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    prependSlidesIndexes.push(slides.length - index - 1);
                }
            } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
                slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    appendSlidesIndexes.push(index);
                }
            }
            if (isPrev) prependSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides();
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) {
                            swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                            swiper.touchEventsData.currentTranslate = swiper.translate;
                        }
                    }
                } else if (setTranslate) {
                    swiper.slideToLoop(slideRealIndex, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                        swiper.touchEventsData.currentTranslate = swiper.translate;
                    }
                }
            } else swiper.slideToLoop(slideRealIndex, 0, false, true);
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            data.evCache.push(event);
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if (edgeSwipeDetection === "prevent") event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === e.pointerId));
            if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
            const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        prevX: swiper.touches.currentX,
                        prevY: swiper.touches.currentY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            if (!data.isMoved) {
                if (isLoop) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
                swiper.loopFix({
                    direction: swiper.swipeDirection,
                    setTranslate: true
                });
                loopFixed = true;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === event.pointerId));
            if (pointerIndex >= 0) data.evCache.splice(pointerIndex, 1);
            if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(event.type)) {
                const proceed = [ "pointercancel", "contextmenu" ].includes(event.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("contextmenu", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            if (!dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopedSlides: null,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class swiper_core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new swiper_core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: []
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                lazyElements.forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!swiper_core_Swiper.prototype.__modules__) swiper_core_Swiper.prototype.__modules__ = [];
                const modules = swiper_core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => swiper_core_Swiper.installModule(m)));
                    return swiper_core_Swiper;
                }
                swiper_core_Swiper.installModule(module);
                return swiper_core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                swiper_core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        swiper_core_Swiper.use([ Resize, Observer ]);
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            const makeElementsArray = el => (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList[swiper.enabled ? "remove" : "add"](swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function Autoplay(_ref) {
            let {swiper, extendParams, on, emit, params} = _ref;
            swiper.autoplay = {
                running: false,
                paused: false,
                timeLeft: 0
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            let timeout;
            let raf;
            let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayTimeLeft;
            let autoplayStartTime = (new Date).getTime;
            let wasPaused;
            let isTouched;
            let pausedByTouch;
            let touchStartTimeout;
            let slideChanged;
            let pausedByInteraction;
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
                if (e.target !== swiper.wrapperEl) return;
                swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
                resume();
            }
            const calcTimeLeft = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.autoplay.paused) wasPaused = true; else if (wasPaused) {
                    autoplayDelayCurrent = autoplayTimeLeft;
                    wasPaused = false;
                }
                const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (new Date).getTime();
                swiper.autoplay.timeLeft = timeLeft;
                emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
                raf = requestAnimationFrame((() => {
                    calcTimeLeft();
                }));
            };
            const getSlideDelay = () => {
                let activeSlideEl;
                if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.filter((slideEl => slideEl.classList.contains("swiper-slide-active")))[0]; else activeSlideEl = swiper.slides[swiper.activeIndex];
                if (!activeSlideEl) return;
                const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
                return currentSlideDelay;
            };
            const run = delayForce => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                cancelAnimationFrame(raf);
                calcTimeLeft();
                let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
                autoplayDelayTotal = swiper.params.autoplay.delay;
                autoplayDelayCurrent = swiper.params.autoplay.delay;
                const currentSlideDelay = getSlideDelay();
                if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
                    delay = currentSlideDelay;
                    autoplayDelayTotal = currentSlideDelay;
                    autoplayDelayCurrent = currentSlideDelay;
                }
                autoplayTimeLeft = delay;
                const speed = swiper.params.speed;
                const proceed = () => {
                    if (!swiper || swiper.destroyed) return;
                    if (swiper.params.autoplay.reverseDirection) {
                        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                            swiper.slidePrev(speed, true, true);
                            emit("autoplay");
                        } else if (!swiper.params.autoplay.stopOnLastSlide) {
                            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                            emit("autoplay");
                        }
                    } else if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                        swiper.slideNext(speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(0, speed, true, true);
                        emit("autoplay");
                    }
                    if (swiper.params.cssMode) {
                        autoplayStartTime = (new Date).getTime();
                        requestAnimationFrame((() => {
                            run();
                        }));
                    }
                };
                if (delay > 0) {
                    clearTimeout(timeout);
                    timeout = setTimeout((() => {
                        proceed();
                    }), delay);
                } else requestAnimationFrame((() => {
                    proceed();
                }));
                return delay;
            };
            const start = () => {
                swiper.autoplay.running = true;
                run();
                emit("autoplayStart");
            };
            const stop = () => {
                swiper.autoplay.running = false;
                clearTimeout(timeout);
                cancelAnimationFrame(raf);
                emit("autoplayStop");
            };
            const pause = (internal, reset) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                clearTimeout(timeout);
                if (!internal) pausedByInteraction = true;
                const proceed = () => {
                    emit("autoplayPause");
                    if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd); else resume();
                };
                swiper.autoplay.paused = true;
                if (reset) {
                    if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
                    slideChanged = false;
                    proceed();
                    return;
                }
                const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
                autoplayTimeLeft = delay - ((new Date).getTime() - autoplayStartTime);
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
                if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
                proceed();
            };
            const resume = () => {
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
                autoplayStartTime = (new Date).getTime();
                if (pausedByInteraction) {
                    pausedByInteraction = false;
                    run(autoplayTimeLeft);
                } else run();
                swiper.autoplay.paused = false;
                emit("autoplayResume");
            };
            const onVisibilityChange = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                const document = ssr_window_esm_getDocument();
                if (document.visibilityState === "hidden") {
                    pausedByInteraction = true;
                    pause(true);
                }
                if (document.visibilityState === "visible") resume();
            };
            const onPointerEnter = e => {
                if (e.pointerType !== "mouse") return;
                pausedByInteraction = true;
                if (swiper.animating || swiper.autoplay.paused) return;
                pause(true);
            };
            const onPointerLeave = e => {
                if (e.pointerType !== "mouse") return;
                if (swiper.autoplay.paused) resume();
            };
            const attachMouseEvents = () => {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.el.addEventListener("pointerenter", onPointerEnter);
                    swiper.el.addEventListener("pointerleave", onPointerLeave);
                }
            };
            const detachMouseEvents = () => {
                swiper.el.removeEventListener("pointerenter", onPointerEnter);
                swiper.el.removeEventListener("pointerleave", onPointerLeave);
            };
            const attachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.addEventListener("visibilitychange", onVisibilityChange);
            };
            const detachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            };
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    attachMouseEvents();
                    attachDocumentEvents();
                    autoplayStartTime = (new Date).getTime();
                    start();
                }
            }));
            on("destroy", (() => {
                detachMouseEvents();
                detachDocumentEvents();
                if (swiper.autoplay.running) stop();
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.params.autoplay.disableOnInteraction) {
                    stop();
                    return;
                }
                isTouched = true;
                pausedByTouch = false;
                pausedByInteraction = false;
                touchStartTimeout = setTimeout((() => {
                    pausedByInteraction = true;
                    pausedByTouch = true;
                    pause(true);
                }), 200);
            }));
            on("touchEnd", (() => {
                if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
                clearTimeout(touchStartTimeout);
                clearTimeout(timeout);
                if (swiper.params.autoplay.disableOnInteraction) {
                    pausedByTouch = false;
                    isTouched = false;
                    return;
                }
                if (pausedByTouch && swiper.params.cssMode) resume();
                pausedByTouch = false;
                isTouched = false;
            }));
            on("slideChange", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                slideChanged = true;
            }));
            Object.assign(swiper.autoplay, {
                start,
                stop,
                pause,
                resume
            });
        }
        function initSliders() {
            let swiperColumn, swiperRow;
            const configHorizontal = {
                modules: [ Navigation, Autoplay ],
                slidesPerView: 1,
                spaceBetween: 40,
                autoHeight: true,
                ally: false,
                freeMode: true,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false
                },
                speed: 5e3,
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                        autoHeight: true
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    }
                },
                navigation: {
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                },
                on: {}
            };
            const configVertical = {
                modules: [ Autoplay ],
                direction: "vertical",
                slidesPerView: "auto",
                spaceBetween: 32,
                grabCursor: true,
                ally: false,
                freeMode: true,
                loop: true,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false
                },
                speed: 5e3
            };
            const breakPoint = window.matchMedia("(max-width: 991.98px)");
            function breakpointChecker(isMobileSize) {
                if (isMobileSize === true) {
                    swiperRow = new swiper_core_Swiper(".testimonial__row", configHorizontal);
                    if (swiperColumn !== void 0) swiperColumn.forEach((slider => {
                        slider.destroy();
                    }));
                } else if (isMobileSize === false) {
                    swiperColumn = new swiper_core_Swiper(".testimonial__column", configVertical);
                    if (swiperRow !== void 0) swiperRow.destroy();
                }
            }
            breakpointChecker(breakPoint.matches);
            breakPoint.addEventListener("change", (function(event) {
                breakpointChecker(event.matches);
            }));
            if (document.querySelector(".popular-destinations__slider")) new swiper_core_Swiper(".popular-destinations__slider", {
                modules: [ Navigation ],
                slidesPerView: 1,
                spaceBetween: 32,
                autoHeight: true,
                navigation: {
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 32,
                        autoHeight: true
                    },
                    479.98: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        autoHeight: true
                    },
                    767.98: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1230: {
                        slidesPerView: 4,
                        spaceBetween: 32
                    }
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        class DynamicAdapt {
            constructor(type) {
                this.type = type;
            }
            init() {
                this.оbjects = [];
                this.daClassname = "_dynamic_adapt_";
                this.nodes = [ ...document.querySelectorAll("[data-da]") ];
                this.nodes.forEach((node => {
                    const data = node.dataset.da.trim();
                    const dataArray = data.split(",");
                    const оbject = {};
                    оbject.element = node;
                    оbject.parent = node.parentNode;
                    оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
                    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.оbjects.push(оbject);
                }));
                this.arraySort(this.оbjects);
                this.mediaQueries = this.оbjects.map((({breakpoint}) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)).filter(((item, index, self) => self.indexOf(item) === index));
                this.mediaQueries.forEach((media => {
                    const mediaSplit = media.split(",");
                    const matchMedia = window.matchMedia(mediaSplit[0]);
                    const mediaBreakpoint = mediaSplit[1];
                    const оbjectsFilter = this.оbjects.filter((({breakpoint}) => breakpoint === mediaBreakpoint));
                    matchMedia.addEventListener("change", (() => {
                        this.mediaHandler(matchMedia, оbjectsFilter);
                    }));
                    this.mediaHandler(matchMedia, оbjectsFilter);
                }));
            }
            mediaHandler(matchMedia, оbjects) {
                if (matchMedia.matches) оbjects.forEach((оbject => {
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                })); else оbjects.forEach((({parent, element, index}) => {
                    if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
                }));
            }
            moveTo(place, element, destination) {
                element.classList.add(this.daClassname);
                if (place === "last" || place >= destination.children.length) {
                    destination.append(element);
                    return;
                }
                if (place === "first") {
                    destination.prepend(element);
                    return;
                }
                destination.children[place].before(element);
            }
            moveBack(parent, element, index) {
                element.classList.remove(this.daClassname);
                if (parent.children[index] !== void 0) parent.children[index].before(element); else parent.append(element);
            }
            indexInParent(parent, element) {
                return [ ...parent.children ].indexOf(element);
            }
            arraySort(arr) {
                if (this.type === "min") arr.sort(((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return -1;
                        if (a.place === "last" || b.place === "first") return 1;
                        return 0;
                    }
                    return a.breakpoint - b.breakpoint;
                })); else {
                    arr.sort(((a, b) => {
                        if (a.breakpoint === b.breakpoint) {
                            if (a.place === b.place) return 0;
                            if (a.place === "first" || b.place === "last") return 1;
                            if (a.place === "last" || b.place === "first") return -1;
                            return 0;
                        }
                        return b.breakpoint - a.breakpoint;
                    }));
                    return;
                }
            }
        }
        const da = new DynamicAdapt("max");
        da.init();
        class t extends Date {
            static parseDateTime(e, i = "YYYY-MM-DD", n = "en-US") {
                if (!e) return new Date((new Date).setHours(0, 0, 0, 0));
                if (e instanceof t) return e.toJSDate();
                if (e instanceof Date) return e;
                if (/^-?\d{10,}$/.test(String(e))) return new Date(Number(e));
                if ("string" == typeof e) {
                    const s = [];
                    let o = null;
                    for (;null != (o = t.regex.exec(i)); ) "\\" !== o[1] && s.push(o);
                    if (s.length) {
                        const i = {
                            year: null,
                            month: null,
                            shortMonth: null,
                            longMonth: null,
                            day: null,
                            hour: 0,
                            minute: 0,
                            second: 0,
                            ampm: null,
                            value: ""
                        };
                        s[0].index > 0 && (i.value += ".*?");
                        for (const [e, o] of Object.entries(s)) {
                            const s = Number(e), {group: a, pattern: r} = t.formatPatterns(o[0], n);
                            i[a] = s + 1, i.value += r, i.value += ".*?";
                        }
                        const o = new RegExp(`^${i.value}$`);
                        if (o.test(e)) {
                            const s = o.exec(e), a = Number(s[i.year]);
                            let r = null;
                            i.month ? r = Number(s[i.month]) - 1 : i.shortMonth ? r = t.shortMonths(n).indexOf(s[i.shortMonth]) : i.longMonth && (r = t.longMonths(n).indexOf(s[i.longMonth]));
                            const c = Number(s[i.day]) || 1, l = Number(s[i.hour]);
                            let h = Number.isNaN(l) ? 0 : l;
                            const d = Number(s[i.minute]), p = Number.isNaN(d) ? 0 : d, u = Number(s[i.second]), g = Number.isNaN(u) ? 0 : u, m = s[i.ampm];
                            return m && "PM" === m && (h += 12, 24 === h && (h = 0)), new Date(a, r, c, h, p, g, 0);
                        }
                    }
                }
                return new Date((new Date).setHours(0, 0, 0, 0));
            }
            static regex=/(\\)?(Y{2,4}|M{1,4}|D{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|A|a)/g;
            static MONTH_JS=[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
            static shortMonths(e) {
                return t.MONTH_JS.map((t => new Date(2019, t).toLocaleString(e, {
                    month: "short"
                })));
            }
            static longMonths(e) {
                return t.MONTH_JS.map((t => new Date(2019, t).toLocaleString(e, {
                    month: "long"
                })));
            }
            static formatPatterns(e, i) {
                switch (e) {
                  case "YY":
                  case "YYYY":
                    return {
                        group: "year",
                        pattern: `(\\d{${e.length}})`
                    };

                  case "M":
                    return {
                        group: "month",
                        pattern: "(\\d{1,2})"
                    };

                  case "MM":
                    return {
                        group: "month",
                        pattern: "(\\d{2})"
                    };

                  case "MMM":
                    return {
                        group: "shortMonth",
                        pattern: `(${t.shortMonths(i).join("|")})`
                    };

                  case "MMMM":
                    return {
                        group: "longMonth",
                        pattern: `(${t.longMonths(i).join("|")})`
                    };

                  case "D":
                    return {
                        group: "day",
                        pattern: "(\\d{1,2})"
                    };

                  case "DD":
                    return {
                        group: "day",
                        pattern: "(\\d{2})"
                    };

                  case "h":
                  case "H":
                    return {
                        group: "hour",
                        pattern: "(\\d{1,2})"
                    };

                  case "hh":
                  case "HH":
                    return {
                        group: "hour",
                        pattern: "(\\d{2})"
                    };

                  case "m":
                    return {
                        group: "minute",
                        pattern: "(\\d{1,2})"
                    };

                  case "mm":
                    return {
                        group: "minute",
                        pattern: "(\\d{2})"
                    };

                  case "s":
                    return {
                        group: "second",
                        pattern: "(\\d{1,2})"
                    };

                  case "ss":
                    return {
                        group: "second",
                        pattern: "(\\d{2})"
                    };

                  case "a":
                  case "A":
                    return {
                        group: "ampm",
                        pattern: "(AM|PM|am|pm)"
                    };
                }
            }
            lang;
            constructor(e = null, i = "YYYY-MM-DD", n = "en-US") {
                super(t.parseDateTime(e, i, n)), this.lang = n;
            }
            getWeek(t) {
                const e = new Date(this.midnight_ts(this)), i = (this.getDay() + (7 - t)) % 7;
                e.setDate(e.getDate() - i);
                const n = e.getTime();
                return e.setMonth(0, 1), e.getDay() !== t && e.setMonth(0, 1 + (4 - e.getDay() + 7) % 7), 
                1 + Math.ceil((n - e.getTime()) / 6048e5);
            }
            clone() {
                return new t(this);
            }
            toJSDate() {
                return new Date(this);
            }
            inArray(t, e = "[]") {
                return t.some((t => t instanceof Array ? this.isBetween(t[0], t[1], e) : this.isSame(t, "day")));
            }
            isBetween(t, e, i = "()") {
                switch (i) {
                  default:
                  case "()":
                    return this.midnight_ts(this) > this.midnight_ts(t) && this.midnight_ts(this) < this.midnight_ts(e);

                  case "[)":
                    return this.midnight_ts(this) >= this.midnight_ts(t) && this.midnight_ts(this) < this.midnight_ts(e);

                  case "(]":
                    return this.midnight_ts(this) > this.midnight_ts(t) && this.midnight_ts(this) <= this.midnight_ts(e);

                  case "[]":
                    return this.midnight_ts() >= this.midnight_ts(t) && this.midnight_ts() <= this.midnight_ts(e);
                }
            }
            isBefore(t, e = "days") {
                switch (e) {
                  case "day":
                  case "days":
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() > new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();

                  case "month":
                  case "months":
                    return new Date(t.getFullYear(), t.getMonth(), 1).getTime() > new Date(this.getFullYear(), this.getMonth(), 1).getTime();

                  case "year":
                  case "years":
                    return t.getFullYear() > this.getFullYear();
                }
                throw new Error("isBefore: Invalid unit!");
            }
            isSameOrBefore(t, e = "days") {
                switch (e) {
                  case "day":
                  case "days":
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() >= new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();

                  case "month":
                  case "months":
                    return new Date(t.getFullYear(), t.getMonth(), 1).getTime() >= new Date(this.getFullYear(), this.getMonth(), 1).getTime();
                }
                throw new Error("isSameOrBefore: Invalid unit!");
            }
            isAfter(t, e = "days") {
                switch (e) {
                  case "day":
                  case "days":
                    return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() > new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();

                  case "month":
                  case "months":
                    return new Date(this.getFullYear(), this.getMonth(), 1).getTime() > new Date(t.getFullYear(), t.getMonth(), 1).getTime();

                  case "year":
                  case "years":
                    return this.getFullYear() > t.getFullYear();
                }
                throw new Error("isAfter: Invalid unit!");
            }
            isSameOrAfter(t, e = "days") {
                switch (e) {
                  case "day":
                  case "days":
                    return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() >= new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();

                  case "month":
                  case "months":
                    return new Date(this.getFullYear(), this.getMonth(), 1).getTime() >= new Date(t.getFullYear(), t.getMonth(), 1).getTime();
                }
                throw new Error("isSameOrAfter: Invalid unit!");
            }
            isSame(t, e = "days") {
                switch (e) {
                  case "day":
                  case "days":
                    return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() === new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();

                  case "month":
                  case "months":
                    return new Date(this.getFullYear(), this.getMonth(), 1).getTime() === new Date(t.getFullYear(), t.getMonth(), 1).getTime();
                }
                throw new Error("isSame: Invalid unit!");
            }
            add(t, e = "days") {
                switch (e) {
                  case "day":
                  case "days":
                    this.setDate(this.getDate() + t);
                    break;

                  case "month":
                  case "months":
                    this.setMonth(this.getMonth() + t);
                }
                return this;
            }
            subtract(t, e = "days") {
                switch (e) {
                  case "day":
                  case "days":
                    this.setDate(this.getDate() - t);
                    break;

                  case "month":
                  case "months":
                    this.setMonth(this.getMonth() - t);
                }
                return this;
            }
            diff(t, e = "days") {
                switch (e) {
                  default:
                  case "day":
                  case "days":
                    return Math.round((this.midnight_ts() - this.midnight_ts(t)) / 864e5);

                  case "month":
                  case "months":
                    let e = 12 * (t.getFullYear() - this.getFullYear());
                    return e -= t.getMonth(), e += this.getMonth(), e;
                }
            }
            format(e, i = "en-US") {
                let n = "";
                const s = [];
                let o = null;
                for (;null != (o = t.regex.exec(e)); ) "\\" !== o[1] && s.push(o);
                if (s.length) {
                    s[0].index > 0 && (n += e.substring(0, s[0].index));
                    for (const [t, o] of Object.entries(s)) {
                        const a = Number(t);
                        n += this.formatTokens(o[0], i), s[a + 1] && (n += e.substring(o.index + o[0].length, s[a + 1].index)), 
                        a === s.length - 1 && (n += e.substring(o.index + o[0].length));
                    }
                }
                return n.replace(/\\/g, "");
            }
            midnight_ts(t) {
                return t ? new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0).getTime() : new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0, 0).getTime();
            }
            formatTokens(e, i) {
                switch (e) {
                  case "YY":
                    return String(this.getFullYear()).slice(-2);

                  case "YYYY":
                    return String(this.getFullYear());

                  case "M":
                    return String(this.getMonth() + 1);

                  case "MM":
                    return `0${this.getMonth() + 1}`.slice(-2);

                  case "MMM":
                    return t.shortMonths(i)[this.getMonth()];

                  case "MMMM":
                    return t.longMonths(i)[this.getMonth()];

                  case "D":
                    return String(this.getDate());

                  case "DD":
                    return `0${this.getDate()}`.slice(-2);

                  case "H":
                    return String(this.getHours());

                  case "HH":
                    return `0${this.getHours()}`.slice(-2);

                  case "h":
                    return String(this.getHours() % 12 || 12);

                  case "hh":
                    return `0${this.getHours() % 12 || 12}`.slice(-2);

                  case "m":
                    return String(this.getMinutes());

                  case "mm":
                    return `0${this.getMinutes()}`.slice(-2);

                  case "s":
                    return String(this.getSeconds());

                  case "ss":
                    return `0${this.getSeconds()}`.slice(-2);

                  case "a":
                    return this.getHours() < 12 || 24 === this.getHours() ? "am" : "pm";

                  case "A":
                    return this.getHours() < 12 || 24 === this.getHours() ? "AM" : "PM";

                  default:
                    return "";
                }
            }
        }
        class e {
            picker;
            constructor(t) {
                this.picker = t;
            }
            render(e, i) {
                e || (e = new t), e.setDate(1), e.setHours(0, 0, 0, 0), "function" == typeof this[`get${i}View`] && this[`get${i}View`](e);
            }
            getContainerView(t) {
                this.picker.ui.container.innerHTML = "", this.picker.options.header && this.picker.trigger("render", {
                    date: t.clone(),
                    view: "Header"
                }), this.picker.trigger("render", {
                    date: t.clone(),
                    view: "Main"
                }), this.picker.options.autoApply || this.picker.trigger("render", {
                    date: t.clone(),
                    view: "Footer"
                });
            }
            getHeaderView(t) {
                const e = document.createElement("header");
                this.picker.options.header instanceof HTMLElement && e.appendChild(this.picker.options.header), 
                "string" == typeof this.picker.options.header && (e.innerHTML = this.picker.options.header), 
                this.picker.ui.container.appendChild(e), this.picker.trigger("view", {
                    target: e,
                    date: t.clone(),
                    view: "Header"
                });
            }
            getMainView(t) {
                const e = document.createElement("main");
                this.picker.ui.container.appendChild(e);
                const i = document.createElement("div");
                i.className = `calendars grid-${this.picker.options.grid}`;
                for (let e = 0; e < this.picker.options.calendars; e++) {
                    const n = document.createElement("div");
                    n.className = "calendar", i.appendChild(n);
                    const s = this.getCalendarHeaderView(t.clone());
                    n.appendChild(s), this.picker.trigger("view", {
                        date: t.clone(),
                        view: "CalendarHeader",
                        index: e,
                        target: s
                    });
                    const o = this.getCalendarDayNamesView();
                    n.appendChild(o), this.picker.trigger("view", {
                        date: t.clone(),
                        view: "CalendarDayNames",
                        index: e,
                        target: o
                    });
                    const a = this.getCalendarDaysView(t.clone());
                    n.appendChild(a), this.picker.trigger("view", {
                        date: t.clone(),
                        view: "CalendarDays",
                        index: e,
                        target: a
                    });
                    const r = this.getCalendarFooterView(this.picker.options.lang, t.clone());
                    n.appendChild(r), this.picker.trigger("view", {
                        date: t.clone(),
                        view: "CalendarFooter",
                        index: e,
                        target: r
                    }), this.picker.trigger("view", {
                        date: t.clone(),
                        view: "CalendarItem",
                        index: e,
                        target: n
                    }), t.add(1, "month");
                }
                e.appendChild(i), this.picker.trigger("view", {
                    date: t.clone(),
                    view: "Calendars",
                    target: i
                }), this.picker.trigger("view", {
                    date: t.clone(),
                    view: "Main",
                    target: e
                });
            }
            getFooterView(t) {
                const e = document.createElement("footer"), i = document.createElement("div");
                i.className = "footer-buttons";
                const n = document.createElement("button");
                n.className = "cancel-button unit", n.innerHTML = this.picker.options.locale.cancel, 
                i.appendChild(n);
                const s = document.createElement("button");
                s.className = "apply-button unit", s.innerHTML = this.picker.options.locale.apply, 
                s.disabled = !0, i.appendChild(s), e.appendChild(i), this.picker.ui.container.appendChild(e), 
                this.picker.trigger("view", {
                    date: t,
                    target: e,
                    view: "Footer"
                });
            }
            getCalendarHeaderView(t) {
                const e = document.createElement("div");
                e.className = "header";
                const i = document.createElement("div");
                i.className = "month-name", i.innerHTML = `<span>${t.toLocaleString(this.picker.options.lang, {
                    month: "long"
                })}</span> ${t.format("YYYY")}`, e.appendChild(i);
                const n = document.createElement("button");
                n.className = "previous-button unit", n.innerHTML = this.picker.options.locale.previousMonth, 
                e.appendChild(n);
                const s = document.createElement("button");
                return s.className = "next-button unit", s.innerHTML = this.picker.options.locale.nextMonth, 
                e.appendChild(s), e;
            }
            getCalendarDayNamesView() {
                const t = document.createElement("div");
                t.className = "daynames-row";
                for (let e = 1; e <= 7; e++) {
                    const i = 3 + this.picker.options.firstDay + e, n = document.createElement("div");
                    n.className = "dayname", n.innerHTML = new Date(1970, 0, i, 12, 0, 0, 0).toLocaleString(this.picker.options.lang, {
                        weekday: "short"
                    }), n.title = new Date(1970, 0, i, 12, 0, 0, 0).toLocaleString(this.picker.options.lang, {
                        weekday: "long"
                    }), t.appendChild(n), this.picker.trigger("view", {
                        dayIdx: i,
                        view: "CalendarDayName",
                        target: n
                    });
                }
                return t;
            }
            getCalendarDaysView(t) {
                const e = document.createElement("div");
                e.className = "days-grid";
                const i = this.calcOffsetDays(t, this.picker.options.firstDay), n = 32 - new Date(t.getFullYear(), t.getMonth(), 32).getDate();
                for (let t = 0; t < i; t++) {
                    const t = document.createElement("div");
                    t.className = "offset", e.appendChild(t);
                }
                for (let i = 1; i <= n; i++) {
                    t.setDate(i);
                    const n = this.getCalendarDayView(t);
                    e.appendChild(n), this.picker.trigger("view", {
                        date: t,
                        view: "CalendarDay",
                        target: n
                    });
                }
                return e;
            }
            getCalendarDayView(e) {
                const i = this.picker.options.date ? new t(this.picker.options.date) : null, n = new t, s = document.createElement("div");
                return s.className = "day unit", s.innerHTML = e.format("D"), s.dataset.time = String(e.getTime()), 
                e.isSame(n, "day") && s.classList.add("today"), [ 0, 6 ].includes(e.getDay()) && s.classList.add("weekend"), 
                this.picker.datePicked.length ? this.picker.datePicked[0].isSame(e, "day") && s.classList.add("selected") : i && e.isSame(i, "day") && s.classList.add("selected"), 
                this.picker.trigger("view", {
                    date: e,
                    view: "CalendarDay",
                    target: s
                }), s;
            }
            getCalendarFooterView(t, e) {
                const i = document.createElement("div");
                return i.className = "footer", i;
            }
            calcOffsetDays(t, e) {
                let i = t.getDay() - e;
                return i < 0 && (i += 7), i;
            }
        }
        class i {
            picker;
            instances={};
            constructor(t) {
                this.picker = t;
            }
            initialize() {
                const t = [];
                this.picker.options.plugins.forEach((e => {
                    "function" == typeof e ? t.push(new e) : "string" == typeof e && "undefined" != typeof easepick && Object.prototype.hasOwnProperty.call(easepick, e) ? t.push(new easepick[e]) : console.warn(`easepick: ${e} not found.`);
                })), t.sort(((t, e) => t.priority > e.priority ? -1 : t.priority < e.priority || t.dependencies.length > e.dependencies.length ? 1 : t.dependencies.length < e.dependencies.length ? -1 : 0)), 
                t.forEach((t => {
                    t.attach(this.picker), this.instances[t.getName()] = t;
                }));
            }
            getInstance(t) {
                return this.instances[t];
            }
            addInstance(t) {
                if (Object.prototype.hasOwnProperty.call(this.instances, t)) console.warn(`easepick: ${t} already added.`); else {
                    if ("undefined" != typeof easepick && Object.prototype.hasOwnProperty.call(easepick, t)) {
                        const e = new easepick[t];
                        return e.attach(this.picker), this.instances[e.getName()] = e, e;
                    }
                    if ("undefined" !== this.getPluginFn(t)) {
                        const e = new (this.getPluginFn(t));
                        return e.attach(this.picker), this.instances[e.getName()] = e, e;
                    }
                    console.warn(`easepick: ${t} not found.`);
                }
                return null;
            }
            removeInstance(t) {
                return t in this.instances && this.instances[t].detach(), delete this.instances[t];
            }
            reloadInstance(t) {
                return this.removeInstance(t), this.addInstance(t);
            }
            getPluginFn(t) {
                return [ ...this.picker.options.plugins ].filter((e => "function" == typeof e && (new e).getName() === t)).shift();
            }
        }
        class n {
            Calendar=new e(this);
            PluginManager=new i(this);
            calendars=[];
            datePicked=[];
            cssLoaded=0;
            binds={
                hidePicker: this.hidePicker.bind(this),
                show: this.show.bind(this)
            };
            options={
                doc: document,
                css: [],
                element: null,
                firstDay: 1,
                grid: 1,
                calendars: 1,
                lang: "en-US",
                date: null,
                format: "YYYY-MM-DD",
                readonly: !0,
                autoApply: !0,
                header: !1,
                inline: !1,
                scrollToDate: !0,
                locale: {
                    nextMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero"/></svg>',
                    previousMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fill-rule="nonzero"/></svg>',
                    cancel: "Cancel",
                    apply: "Apply"
                },
                documentClick: this.binds.hidePicker,
                plugins: []
            };
            ui={
                container: null,
                shadowRoot: null,
                wrapper: null
            };
            version="1.2.1";
            constructor(t) {
                const e = {
                    ...this.options.locale,
                    ...t.locale
                };
                this.options = {
                    ...this.options,
                    ...t
                }, this.options.locale = e, this.handleOptions(), this.ui.wrapper = document.createElement("span"), 
                this.ui.wrapper.style.display = "none", this.ui.wrapper.style.position = "absolute", 
                this.ui.wrapper.style.pointerEvents = "none", this.ui.wrapper.className = "easepick-wrapper", 
                this.ui.wrapper.attachShadow({
                    mode: "open"
                }), this.ui.shadowRoot = this.ui.wrapper.shadowRoot, this.ui.container = document.createElement("div"), 
                this.ui.container.className = "container", this.options.zIndex && (this.ui.container.style.zIndex = String(this.options.zIndex)), 
                this.options.inline && (this.ui.wrapper.style.position = "relative", this.ui.container.classList.add("inline")), 
                this.ui.shadowRoot.appendChild(this.ui.container), this.options.element.after(this.ui.wrapper), 
                this.handleCSS(), this.options.element.addEventListener("click", this.binds.show), 
                this.on("view", this.onView.bind(this)), this.on("render", this.onRender.bind(this)), 
                this.PluginManager.initialize(), this.parseValues(), "function" == typeof this.options.setup && this.options.setup(this), 
                this.on("click", this.onClick.bind(this));
                const i = this.options.scrollToDate ? this.getDate() : null;
                this.renderAll(i);
            }
            on(t, e, i = {}) {
                this.ui.container.addEventListener(t, e, i);
            }
            off(t, e, i = {}) {
                this.ui.container.removeEventListener(t, e, i);
            }
            trigger(t, e = {}) {
                return this.ui.container.dispatchEvent(new CustomEvent(t, {
                    detail: e
                }));
            }
            destroy() {
                this.options.element.removeEventListener("click", this.binds.show), "function" == typeof this.options.documentClick && document.removeEventListener("click", this.options.documentClick, !0), 
                Object.keys(this.PluginManager.instances).forEach((t => {
                    this.PluginManager.removeInstance(t);
                })), this.ui.wrapper.remove();
            }
            onRender(t) {
                const {view: e, date: i} = t.detail;
                this.Calendar.render(i, e);
            }
            onView(t) {
                const {view: e, target: i} = t.detail;
                "Footer" === e && this.datePicked.length && (i.querySelector(".apply-button").disabled = !1);
            }
            onClickHeaderButton(t) {
                this.isCalendarHeaderButton(t) && (t.classList.contains("next-button") ? this.calendars[0].add(1, "month") : this.calendars[0].subtract(1, "month"), 
                this.renderAll(this.calendars[0]));
            }
            onClickCalendarDay(e) {
                if (this.isCalendarDay(e)) {
                    const i = new t(e.dataset.time);
                    this.options.autoApply ? (this.setDate(i), this.trigger("select", {
                        date: this.getDate()
                    }), this.hide()) : (this.datePicked[0] = i, this.trigger("preselect", {
                        date: this.getDate()
                    }), this.renderAll());
                }
            }
            onClickApplyButton(t) {
                if (this.isApplyButton(t)) {
                    if (this.datePicked[0] instanceof Date) {
                        const t = this.datePicked[0].clone();
                        this.setDate(t);
                    }
                    this.hide(), this.trigger("select", {
                        date: this.getDate()
                    });
                }
            }
            onClickCancelButton(t) {
                this.isCancelButton(t) && this.hide();
            }
            onClick(t) {
                const e = t.target;
                if (e instanceof HTMLElement) {
                    const t = e.closest(".unit");
                    if (!(t instanceof HTMLElement)) return;
                    this.onClickHeaderButton(t), this.onClickCalendarDay(t), this.onClickApplyButton(t), 
                    this.onClickCancelButton(t);
                }
            }
            isShown() {
                return this.ui.container.classList.contains("inline") || this.ui.container.classList.contains("show");
            }
            show(t) {
                if (this.isShown()) return;
                const e = t && "target" in t ? t.target : this.options.element, {top: i, left: n} = this.adjustPosition(e);
                this.ui.container.style.top = `${i}px`, this.ui.container.style.left = `${n}px`, 
                this.ui.container.classList.add("show"), this.trigger("show", {
                    target: e
                });
            }
            hide() {
                this.ui.container.classList.remove("show"), this.datePicked.length = 0, this.renderAll(), 
                this.trigger("hide");
            }
            setDate(e) {
                const i = new t(e, this.options.format);
                this.options.date = i.clone(), this.updateValues(), this.calendars.length && this.renderAll();
            }
            getDate() {
                return this.options.date instanceof t ? this.options.date.clone() : null;
            }
            parseValues() {
                this.options.date ? this.setDate(this.options.date) : this.options.element instanceof HTMLInputElement && this.options.element.value.length && this.setDate(this.options.element.value), 
                this.options.date instanceof Date || (this.options.date = null);
            }
            updateValues() {
                const t = this.getDate(), e = t instanceof Date ? t.format(this.options.format, this.options.lang) : "", i = this.options.element;
                i instanceof HTMLInputElement ? i.value = e : i instanceof HTMLElement && (i.innerText = e);
            }
            hidePicker(t) {
                let e = t.target, i = null;
                e.shadowRoot && (e = t.composedPath()[0], i = e.getRootNode().host), this.isShown() && i !== this.ui.wrapper && e !== this.options.element && this.hide();
            }
            renderAll(t) {
                this.trigger("render", {
                    view: "Container",
                    date: (t || this.calendars[0]).clone()
                });
            }
            isCalendarHeaderButton(t) {
                return [ "previous-button", "next-button" ].some((e => t.classList.contains(e)));
            }
            isCalendarDay(t) {
                return t.classList.contains("day");
            }
            isApplyButton(t) {
                return t.classList.contains("apply-button");
            }
            isCancelButton(t) {
                return t.classList.contains("cancel-button");
            }
            gotoDate(e) {
                const i = new t(e, this.options.format);
                i.setDate(1), this.calendars[0] = i.clone(), this.renderAll();
            }
            clear() {
                this.options.date = null, this.datePicked.length = 0, this.updateValues(), this.renderAll(), 
                this.trigger("clear");
            }
            handleOptions() {
                this.options.element instanceof HTMLElement || (this.options.element = this.options.doc.querySelector(this.options.element)), 
                "function" == typeof this.options.documentClick && document.addEventListener("click", this.options.documentClick, !0), 
                this.options.element instanceof HTMLInputElement && (this.options.element.readOnly = this.options.readonly), 
                this.options.date ? this.calendars[0] = new t(this.options.date, this.options.format) : this.calendars[0] = new t;
            }
            handleCSS() {
                if (Array.isArray(this.options.css)) this.options.css.forEach((t => {
                    const e = document.createElement("link");
                    e.href = t, e.rel = "stylesheet";
                    const i = () => {
                        this.cssLoaded++, this.cssLoaded === this.options.css.length && (this.ui.wrapper.style.display = "");
                    };
                    e.addEventListener("load", i), e.addEventListener("error", i), this.ui.shadowRoot.append(e);
                })); else if ("string" == typeof this.options.css) {
                    const t = document.createElement("style"), e = document.createTextNode(this.options.css);
                    t.appendChild(e), this.ui.shadowRoot.append(t), this.ui.wrapper.style.display = "";
                } else "function" == typeof this.options.css && (this.options.css.call(this, this), 
                this.ui.wrapper.style.display = "");
            }
            adjustPosition(t) {
                const e = t.getBoundingClientRect(), i = this.ui.wrapper.getBoundingClientRect();
                this.ui.container.classList.add("calc");
                const n = this.ui.container.getBoundingClientRect();
                this.ui.container.classList.remove("calc");
                let s = e.bottom - i.bottom, o = e.left - i.left;
                return "undefined" != typeof window && (window.innerHeight < s + n.height && s - n.height >= 0 && (s = e.top - i.top - n.height), 
                window.innerWidth < o + n.width && e.right - n.width >= 0 && (o = e.right - i.right - n.width)), 
                {
                    left: o,
                    top: s
                };
            }
        }
        var s = Object.freeze({
            __proto__: null,
            Core: n,
            create: n
        });
        class o {
            picker;
            options;
            priority=0;
            dependencies=[];
            attach(t) {
                const e = this.getName(), i = {
                    ...this.options
                };
                this.options = {
                    ...this.options,
                    ...t.options[e] || {}
                };
                for (const n of Object.keys(i)) if (null !== i[n] && "object" == typeof i[n] && Object.keys(i[n]).length && e in t.options && n in t.options[e]) {
                    const s = {
                        ...t.options[e][n]
                    };
                    null !== s && "object" == typeof s && Object.keys(s).length && Object.keys(s).every((t => Object.keys(i[n]).includes(t))) && (this.options[n] = {
                        ...i[n],
                        ...s
                    });
                }
                if (this.picker = t, this.dependenciesNotFound()) {
                    const t = this.dependencies.filter((t => !this.pluginsAsStringArray().includes(t)));
                    return void console.warn(`${this.getName()}: required dependencies (${t.join(", ")}).`);
                }
                const n = this.camelCaseToKebab(this.getName());
                this.picker.ui.container.classList.add(n), this.onAttach();
            }
            detach() {
                const t = this.camelCaseToKebab(this.getName());
                this.picker.ui.container.classList.remove(t), "function" == typeof this.onDetach && this.onDetach();
            }
            dependenciesNotFound() {
                return this.dependencies.length && !this.dependencies.every((t => this.pluginsAsStringArray().includes(t)));
            }
            pluginsAsStringArray() {
                return this.picker.options.plugins.map((t => "function" == typeof t ? (new t).getName() : t));
            }
            camelCaseToKebab(t) {
                return t.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
            }
        }
        class l extends o {
            options={
                native: !1,
                seconds: !1,
                stepHours: 1,
                stepMinutes: 5,
                stepSeconds: 5,
                format12: !1
            };
            rangePlugin;
            timePicked={
                input: null,
                start: null,
                end: null
            };
            timePrePicked={
                input: null,
                start: null,
                end: null
            };
            binds={
                getDate: this.getDate.bind(this),
                getStartDate: this.getStartDate.bind(this),
                getEndDate: this.getEndDate.bind(this),
                onView: this.onView.bind(this),
                onInput: this.onInput.bind(this),
                onChange: this.onChange.bind(this),
                onClick: this.onClick.bind(this),
                setTime: this.setTime.bind(this),
                setStartTime: this.setStartTime.bind(this),
                setEndTime: this.setEndTime.bind(this)
            };
            getName() {
                return "TimePlugin";
            }
            onAttach() {
                this.binds._getDate = this.picker.getDate, this.binds._getStartDate = this.picker.getStartDate, 
                this.binds._getEndDate = this.picker.getEndDate, Object.defineProperties(this.picker, {
                    getDate: {
                        configurable: !0,
                        value: this.binds.getDate
                    },
                    getStartDate: {
                        configurable: !0,
                        value: this.binds.getStartDate
                    },
                    getEndDate: {
                        configurable: !0,
                        value: this.binds.getEndDate
                    },
                    setTime: {
                        configurable: !0,
                        value: this.binds.setTime
                    },
                    setStartTime: {
                        configurable: !0,
                        value: this.binds.setStartTime
                    },
                    setEndTime: {
                        configurable: !0,
                        value: this.binds.setEndTime
                    }
                }), this.rangePlugin = this.picker.PluginManager.getInstance("RangePlugin"), this.parseValues(), 
                this.picker.on("view", this.binds.onView), this.picker.on("input", this.binds.onInput), 
                this.picker.on("change", this.binds.onChange), this.picker.on("click", this.binds.onClick);
            }
            onDetach() {
                delete this.picker.setTime, delete this.picker.setStartTime, delete this.picker.setEndTime, 
                Object.defineProperties(this.picker, {
                    getDate: {
                        configurable: !0,
                        value: this.binds._getDate
                    },
                    getStartDate: {
                        configurable: !0,
                        value: this.binds._getStartDate
                    },
                    getEndDate: {
                        configurable: !0,
                        value: this.binds._getEndDate
                    }
                }), this.picker.off("view", this.binds.onView), this.picker.off("input", this.binds.onInput), 
                this.picker.off("change", this.binds.onChange), this.picker.off("click", this.binds.onClick);
            }
            onView(t) {
                const {view: e, target: i} = t.detail;
                if ("Main" === e) {
                    this.rangePlugin = this.picker.PluginManager.getInstance("RangePlugin");
                    const t = document.createElement("div");
                    if (t.className = "time-plugin-container", this.rangePlugin) {
                        const e = this.getStartInput();
                        t.appendChild(e), this.picker.trigger("view", {
                            view: "TimePluginInput",
                            target: e
                        });
                        const i = this.getEndInput();
                        t.appendChild(i), this.picker.trigger("view", {
                            view: "TimePluginInput",
                            target: i
                        });
                    } else {
                        const e = this.getSingleInput();
                        t.appendChild(e), this.picker.trigger("view", {
                            view: "TimePluginInput",
                            target: e
                        });
                    }
                    i.appendChild(t), this.picker.trigger("view", {
                        view: "TimePluginContainer",
                        target: t
                    });
                }
            }
            onInput(e) {
                const i = e.target;
                if (i instanceof HTMLInputElement && i.classList.contains("time-plugin-input")) {
                    const e = this.timePicked[i.name] || new t, [n, s] = i.value.split(":");
                    e.setHours(Number(n) || 0, Number(s) || 0, 0, 0), this.picker.options.autoApply ? (this.timePicked[i.name] = e, 
                    this.picker.updateValues()) : this.timePrePicked[i.name] = e;
                }
            }
            onChange(e) {
                const i = e.target;
                if (i instanceof HTMLSelectElement && i.classList.contains("time-plugin-custom-input")) {
                    const e = /(\w+)\[(\w+)\]/, [, n, s] = i.name.match(e), o = Number(i.value);
                    let a = new t;
                    switch (!this.picker.options.autoApply && this.timePrePicked[n] instanceof Date ? a = this.timePrePicked[n].clone() : this.timePicked[n] instanceof Date && (a = this.timePicked[n].clone()), 
                    s) {
                      case "HH":
                        if (this.options.format12) {
                            const t = i.closest(".time-plugin-custom-block").querySelector(`select[name="${n}[period]"]`).value, e = this.handleFormat12(t, a, o);
                            a.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), 0);
                        } else a.setHours(o, a.getMinutes(), a.getSeconds(), 0);
                        break;

                      case "mm":
                        a.setHours(a.getHours(), o, a.getSeconds(), 0);
                        break;

                      case "ss":
                        a.setHours(a.getHours(), a.getMinutes(), o, 0);
                        break;

                      case "period":
                        if (this.options.format12) {
                            const t = i.closest(".time-plugin-custom-block").querySelector(`select[name="${n}[HH]"]`).value, e = this.handleFormat12(i.value, a, Number(t));
                            a.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), 0);
                        }
                    }
                    if (this.picker.options.autoApply) this.timePicked[n] = a, this.picker.updateValues(); else {
                        this.timePrePicked[n] = a;
                        const t = this.picker.ui.container.querySelector(".apply-button");
                        if (this.rangePlugin) {
                            const e = this.rangePlugin.options, i = this.picker.datePicked, n = e.strict && 2 === i.length || !e.strict && i.length > 0 || !i.length && e.strict && e.startDate instanceof Date && e.endDate instanceof Date || !i.length && !e.strict && (e.startDate instanceof Date || e.endDate instanceof Date);
                            t.disabled = !n;
                        } else this.picker.datePicked.length && (t.disabled = !1);
                    }
                }
            }
            onClick(t) {
                const e = t.target;
                if (e instanceof HTMLElement) {
                    const t = e.closest(".unit");
                    if (!(t instanceof HTMLElement)) return;
                    this.picker.isApplyButton(t) && (Object.keys(this.timePicked).forEach((t => {
                        this.timePrePicked[t] instanceof Date && (this.timePicked[t] = this.timePrePicked[t].clone());
                    })), this.picker.updateValues(), this.timePrePicked = {
                        input: null,
                        start: null,
                        end: null
                    }), this.picker.isCancelButton(t) && (this.timePrePicked = {
                        input: null,
                        start: null,
                        end: null
                    }, this.picker.renderAll());
                }
            }
            setTime(t) {
                const e = this.handleTimeString(t);
                this.timePicked.input = e.clone(), this.picker.renderAll(), this.picker.updateValues();
            }
            setStartTime(t) {
                const e = this.handleTimeString(t);
                this.timePicked.start = e.clone(), this.picker.renderAll(), this.picker.updateValues();
            }
            setEndTime(t) {
                const e = this.handleTimeString(t);
                this.timePicked.end = e.clone(), this.picker.renderAll(), this.picker.updateValues();
            }
            handleTimeString(e) {
                const i = new t, [n, s, o] = e.split(":").map((t => Number(t))), a = n && !Number.isNaN(n) ? n : 0, r = s && !Number.isNaN(s) ? s : 0, c = o && !Number.isNaN(o) ? o : 0;
                return i.setHours(a, r, c, 0), i;
            }
            getDate() {
                if (this.picker.options.date instanceof Date) {
                    const e = new t(this.picker.options.date, this.picker.options.format);
                    if (this.timePicked.input instanceof Date) {
                        const t = this.timePicked.input;
                        e.setHours(t.getHours(), t.getMinutes(), t.getSeconds(), 0);
                    }
                    return e;
                }
                return null;
            }
            getStartDate() {
                if (this.rangePlugin.options.startDate instanceof Date) {
                    const e = new t(this.rangePlugin.options.startDate, this.picker.options.format);
                    if (this.timePicked.start instanceof Date) {
                        const t = this.timePicked.start;
                        e.setHours(t.getHours(), t.getMinutes(), t.getSeconds(), 0);
                    }
                    return e;
                }
                return null;
            }
            getEndDate() {
                if (this.rangePlugin.options.endDate instanceof Date) {
                    const e = new t(this.rangePlugin.options.endDate, this.picker.options.format);
                    if (this.timePicked.end instanceof Date) {
                        const t = this.timePicked.end;
                        e.setHours(t.getHours(), t.getMinutes(), t.getSeconds(), 0);
                    }
                    return e;
                }
                return null;
            }
            getSingleInput() {
                return this.options.native ? this.getNativeInput("input") : this.getCustomInput("input");
            }
            getStartInput() {
                return this.options.native ? this.getNativeInput("start") : this.getCustomInput("start");
            }
            getEndInput() {
                return this.options.native ? this.getNativeInput("end") : this.getCustomInput("end");
            }
            getNativeInput(t) {
                const e = document.createElement("input");
                e.type = "time", e.name = t, e.className = "time-plugin-input unit";
                const i = this.timePicked[t];
                if (i) {
                    const t = `0${i.getHours()}`.slice(-2), n = `0${i.getMinutes()}`.slice(-2);
                    e.value = `${t}:${n}`;
                }
                return e;
            }
            getCustomInput(t) {
                const e = document.createElement("div");
                e.className = "time-plugin-custom-block";
                const i = document.createElement("select");
                i.className = "time-plugin-custom-input unit", i.name = `${t}[HH]`;
                const n = this.options.format12 ? 1 : 0, s = this.options.format12 ? 13 : 24;
                let o = null;
                !this.picker.options.autoApply && this.timePrePicked[t] instanceof Date ? o = this.timePrePicked[t].clone() : this.timePicked[t] instanceof Date && (o = this.timePicked[t].clone());
                for (let t = n; t < s; t += this.options.stepHours) {
                    const e = document.createElement("option");
                    e.value = String(t), e.text = String(t), o && (this.options.format12 ? (o.getHours() % 12 ? o.getHours() % 12 : 12) === t && (e.selected = !0) : o.getHours() === t && (e.selected = !0)), 
                    i.appendChild(e);
                }
                e.appendChild(i);
                const a = document.createElement("select");
                a.className = "time-plugin-custom-input unit", a.name = `${t}[mm]`;
                for (let t = 0; t < 60; t += this.options.stepMinutes) {
                    const e = document.createElement("option");
                    e.value = `0${String(t)}`.slice(-2), e.text = `0${String(t)}`.slice(-2), o && o.getMinutes() === t && (e.selected = !0), 
                    a.appendChild(e);
                }
                if (e.appendChild(a), this.options.seconds) {
                    const i = document.createElement("select");
                    i.className = "time-plugin-custom-input unit", i.name = `${t}[ss]`;
                    const n = 60;
                    for (let t = 0; t < n; t += this.options.stepSeconds) {
                        const e = document.createElement("option");
                        e.value = `0${String(t)}`.slice(-2), e.text = `0${String(t)}`.slice(-2), o && o.getSeconds() === t && (e.selected = !0), 
                        i.appendChild(e);
                    }
                    e.appendChild(i);
                }
                if (this.options.format12) {
                    const i = document.createElement("select");
                    i.className = "time-plugin-custom-input unit", i.name = `${t}[period]`, [ "AM", "PM" ].forEach((t => {
                        const e = document.createElement("option");
                        e.value = t, e.text = t, o && "PM" === t && o.getHours() >= 12 && (e.selected = !0), 
                        i.appendChild(e);
                    })), e.appendChild(i);
                }
                return e;
            }
            handleFormat12(t, e, i) {
                const n = e.clone();
                switch (t) {
                  case "AM":
                    12 === i ? n.setHours(0, n.getMinutes(), n.getSeconds(), 0) : n.setHours(i, n.getMinutes(), n.getSeconds(), 0);
                    break;

                  case "PM":
                    12 !== i ? n.setHours(i + 12, n.getMinutes(), n.getSeconds(), 0) : n.setHours(i, n.getMinutes(), n.getSeconds(), 0);
                }
                return n;
            }
            parseValues() {
                if (this.rangePlugin) {
                    if (this.rangePlugin.options.strict) {
                        if (this.rangePlugin.options.startDate && this.rangePlugin.options.endDate) {
                            const e = new t(this.rangePlugin.options.startDate, this.picker.options.format), i = new t(this.rangePlugin.options.endDate, this.picker.options.format);
                            this.timePicked.start = e.clone(), this.timePicked.end = i.clone();
                        }
                    } else {
                        if (this.rangePlugin.options.startDate) {
                            const e = new t(this.rangePlugin.options.startDate, this.picker.options.format);
                            this.timePicked.start = e.clone();
                        }
                        if (this.rangePlugin.options.endDate) {
                            const e = new t(this.rangePlugin.options.endDate, this.picker.options.format);
                            this.timePicked.end = e.clone();
                        }
                    }
                    if (this.rangePlugin.options.elementEnd) if (this.rangePlugin.options.strict) {
                        if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length && this.rangePlugin.options.elementEnd instanceof HTMLInputElement && this.rangePlugin.options.elementEnd.value.length) {
                            const e = new t(this.picker.options.element.value, this.picker.options.format), i = new t(this.rangePlugin.options.elementEnd.value, this.picker.options.format);
                            this.timePicked.start = e.clone(), this.timePicked.end = i.clone();
                        }
                    } else {
                        if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length) {
                            const e = new t(this.picker.options.element.value, this.picker.options.format);
                            this.timePicked.start = e.clone();
                        }
                        if (this.rangePlugin.options.elementEnd instanceof HTMLInputElement && this.rangePlugin.options.elementEnd.value.length) {
                            const e = new t(this.rangePlugin.options.elementEnd.value, this.picker.options.format);
                            this.timePicked.start = e.clone();
                        }
                    } else if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length) {
                        const [e, i] = this.picker.options.element.value.split(this.rangePlugin.options.delimiter);
                        if (this.rangePlugin.options.strict) {
                            if (e && i) {
                                const n = new t(e, this.picker.options.format), s = new t(i, this.picker.options.format);
                                this.timePicked.start = n.clone(), this.timePicked.end = s.clone();
                            }
                        } else {
                            if (e) {
                                const i = new t(e, this.picker.options.format);
                                this.timePicked.start = i.clone();
                            }
                            if (i) {
                                const e = new t(i, this.picker.options.format);
                                this.timePicked.start = e.clone();
                            }
                        }
                    }
                } else {
                    if (this.picker.options.date) {
                        const e = new t(this.picker.options.date, this.picker.options.format);
                        this.timePicked.input = e.clone();
                    }
                    if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length) {
                        const e = new t(this.picker.options.element.value, this.picker.options.format);
                        this.timePicked.input = e.clone();
                    }
                }
            }
        }
        new s.create({
            element: "#datepicker",
            css: [ "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css" ],
            zIndex: 100,
            format: "HH:mm, DD/MM/YY",
            plugins: [ l ]
        });
        var autoComplete_min = __webpack_require__(957);
        var country_list_js = __webpack_require__(754);
        const res = [];
        for (let key in country_list_js.all) res.push(`${country_list_js.all[key]["capital"]}, ${country_list_js.all[key]["name"]}`);
        const autoCompleteJS = new autoComplete_min({
            selector: "#autoComplete",
            placeHolder: "e.g Bali, Indonesia",
            data: {
                src: res
            },
            resultItem: {
                highlight: true
            },
            events: {
                input: {
                    selection: event => {
                        const selection = event.detail.selection.value;
                        autoCompleteJS.input.value = selection;
                    }
                }
            }
        });
        /*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
        function isDomNode(x) {
            return typeof window.Node === "object" ? x instanceof window.Node : x !== null && typeof x === "object" && typeof x.nodeType === "number" && typeof x.nodeName === "string";
        }
        const is_dom_node_es = isDomNode;
        /*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
        function isDomNodeList(x) {
            var prototypeToString = Object.prototype.toString.call(x);
            var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;
            return typeof window.NodeList === "object" ? x instanceof window.NodeList : x !== null && typeof x === "object" && typeof x.length === "number" && regex.test(prototypeToString) && (x.length === 0 || is_dom_node_es(x[0]));
        }
        const is_dom_node_list_es = isDomNodeList;
        /*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
        function tealight(target, context) {
            if (context === void 0) context = document;
            if (target instanceof Array) return target.filter(is_dom_node_es);
            if (is_dom_node_es(target)) return [ target ];
            if (is_dom_node_list_es(target)) return Array.prototype.slice.call(target);
            if (typeof target === "string") try {
                var query = context.querySelectorAll(target);
                return Array.prototype.slice.call(query);
            } catch (err) {
                return [];
            }
            return [];
        }
        const tealight_es = tealight;
        /*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
        function format(source) {
            if (source.constructor !== Array) throw new TypeError("Expected array.");
            if (source.length === 16) return source;
            if (source.length === 6) {
                var matrix = identity();
                matrix[0] = source[0];
                matrix[1] = source[1];
                matrix[4] = source[2];
                matrix[5] = source[3];
                matrix[12] = source[4];
                matrix[13] = source[5];
                return matrix;
            }
            throw new RangeError("Expected array with either 6 or 16 values.");
        }
        function identity() {
            var matrix = [];
            for (var i = 0; i < 16; i++) i % 5 == 0 ? matrix.push(1) : matrix.push(0);
            return matrix;
        }
        function multiply(m, x) {
            var fm = format(m);
            var fx = format(x);
            var product = [];
            for (var i = 0; i < 4; i++) {
                var row = [ fm[i], fm[i + 4], fm[i + 8], fm[i + 12] ];
                for (var j = 0; j < 4; j++) {
                    var k = j * 4;
                    var col = [ fx[k], fx[k + 1], fx[k + 2], fx[k + 3] ];
                    var result = row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];
                    product[i + k] = result;
                }
            }
            return product;
        }
        function parse(source) {
            if (typeof source === "string") {
                var match = source.match(/matrix(3d)?\(([^)]+)\)/);
                if (match) {
                    var raw = match[2].split(", ").map(parseFloat);
                    return format(raw);
                }
            }
            return identity();
        }
        function rotateX(angle) {
            var theta = Math.PI / 180 * angle;
            var matrix = identity();
            matrix[5] = matrix[10] = Math.cos(theta);
            matrix[6] = matrix[9] = Math.sin(theta);
            matrix[9] *= -1;
            return matrix;
        }
        function rotateY(angle) {
            var theta = Math.PI / 180 * angle;
            var matrix = identity();
            matrix[0] = matrix[10] = Math.cos(theta);
            matrix[2] = matrix[8] = Math.sin(theta);
            matrix[2] *= -1;
            return matrix;
        }
        function rotateZ(angle) {
            var theta = Math.PI / 180 * angle;
            var matrix = identity();
            matrix[0] = matrix[5] = Math.cos(theta);
            matrix[1] = matrix[4] = Math.sin(theta);
            matrix[4] *= -1;
            return matrix;
        }
        function scale(scalar, scalarY) {
            var matrix = identity();
            matrix[0] = scalar;
            matrix[5] = typeof scalarY === "number" ? scalarY : scalar;
            return matrix;
        }
        function translateX(distance) {
            var matrix = identity();
            matrix[12] = distance;
            return matrix;
        }
        function translateY(distance) {
            var matrix = identity();
            matrix[13] = distance;
            return matrix;
        }
        /*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
        var polyfill = function() {
            var clock = Date.now();
            return function(callback) {
                var currentTime = Date.now();
                if (currentTime - clock > 16) {
                    clock = currentTime;
                    callback(currentTime);
                } else setTimeout((function() {
                    return polyfill(callback);
                }), 0);
            };
        }();
        var index = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || polyfill;
        const miniraf_es = index;
        /*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
        var scrollreveal_es_defaults = {
            delay: 0,
            distance: "0",
            duration: 600,
            easing: "cubic-bezier(0.5, 0, 0, 1)",
            interval: 0,
            opacity: 0,
            origin: "bottom",
            rotate: {
                x: 0,
                y: 0,
                z: 0
            },
            scale: 1,
            cleanup: false,
            container: document.documentElement,
            desktop: true,
            mobile: true,
            reset: false,
            useDelay: "always",
            viewFactor: 0,
            viewOffset: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            afterReset: function afterReset() {},
            afterReveal: function afterReveal() {},
            beforeReset: function beforeReset() {},
            beforeReveal: function beforeReveal() {}
        };
        function failure() {
            document.documentElement.classList.remove("sr");
            return {
                clean: function clean() {},
                destroy: function destroy() {},
                reveal: function reveal() {},
                sync: function sync() {},
                get noop() {
                    return true;
                }
            };
        }
        function success() {
            document.documentElement.classList.add("sr");
            if (document.body) document.body.style.height = "100%"; else document.addEventListener("DOMContentLoaded", (function() {
                document.body.style.height = "100%";
            }));
        }
        var mount = {
            success,
            failure
        };
        function scrollreveal_es_isObject(x) {
            return x !== null && x instanceof Object && (x.constructor === Object || Object.prototype.toString.call(x) === "[object Object]");
        }
        function each(collection, callback) {
            if (scrollreveal_es_isObject(collection)) {
                var keys = Object.keys(collection);
                return keys.forEach((function(key) {
                    return callback(collection[key], key, collection);
                }));
            }
            if (collection instanceof Array) return collection.forEach((function(item, i) {
                return callback(item, i, collection);
            }));
            throw new TypeError("Expected either an array or object literal.");
        }
        function logger(message) {
            var details = [], len = arguments.length - 1;
            while (len-- > 0) details[len] = arguments[len + 1];
            if (this.constructor.debug && console) {
                var report = "%cScrollReveal: " + message;
                details.forEach((function(detail) {
                    return report += "\n — " + detail;
                }));
                console.log(report, "color: #ea654b;");
            }
        }
        function rinse() {
            var this$1 = this;
            var struct = function() {
                return {
                    active: [],
                    stale: []
                };
            };
            var elementIds = struct();
            var sequenceIds = struct();
            var containerIds = struct();
            try {
                each(tealight_es("[data-sr-id]"), (function(node) {
                    var id = parseInt(node.getAttribute("data-sr-id"));
                    elementIds.active.push(id);
                }));
            } catch (e) {
                throw e;
            }
            each(this.store.elements, (function(element) {
                if (elementIds.active.indexOf(element.id) === -1) elementIds.stale.push(element.id);
            }));
            each(elementIds.stale, (function(staleId) {
                return delete this$1.store.elements[staleId];
            }));
            each(this.store.elements, (function(element) {
                if (containerIds.active.indexOf(element.containerId) === -1) containerIds.active.push(element.containerId);
                if (element.hasOwnProperty("sequence")) if (sequenceIds.active.indexOf(element.sequence.id) === -1) sequenceIds.active.push(element.sequence.id);
            }));
            each(this.store.containers, (function(container) {
                if (containerIds.active.indexOf(container.id) === -1) containerIds.stale.push(container.id);
            }));
            each(containerIds.stale, (function(staleId) {
                var stale = this$1.store.containers[staleId].node;
                stale.removeEventListener("scroll", this$1.delegate);
                stale.removeEventListener("resize", this$1.delegate);
                delete this$1.store.containers[staleId];
            }));
            each(this.store.sequences, (function(sequence) {
                if (sequenceIds.active.indexOf(sequence.id) === -1) sequenceIds.stale.push(sequence.id);
            }));
            each(sequenceIds.stale, (function(staleId) {
                return delete this$1.store.sequences[staleId];
            }));
        }
        var getPrefixedCssProp = function() {
            var properties = {};
            var style = document.documentElement.style;
            function getPrefixedCssProperty(name, source) {
                if (source === void 0) source = style;
                if (name && typeof name === "string") {
                    if (properties[name]) return properties[name];
                    if (typeof source[name] === "string") return properties[name] = name;
                    if (typeof source["-webkit-" + name] === "string") return properties[name] = "-webkit-" + name;
                    throw new RangeError('Unable to find "' + name + '" style property.');
                }
                throw new TypeError("Expected a string.");
            }
            getPrefixedCssProperty.clearCache = function() {
                return properties = {};
            };
            return getPrefixedCssProperty;
        }();
        function style(element) {
            var computed = window.getComputedStyle(element.node);
            var position = computed.position;
            var config = element.config;
            var inline = {};
            var inlineStyle = element.node.getAttribute("style") || "";
            var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
            inline.computed = inlineMatch ? inlineMatch.map((function(m) {
                return m.trim();
            })).join("; ") + ";" : "";
            inline.generated = inlineMatch.some((function(m) {
                return m.match(/visibility\s?:\s?visible/i);
            })) ? inline.computed : inlineMatch.concat([ "visibility: visible" ]).map((function(m) {
                return m.trim();
            })).join("; ") + ";";
            var computedOpacity = parseFloat(computed.opacity);
            var configOpacity = !isNaN(parseFloat(config.opacity)) ? parseFloat(config.opacity) : parseFloat(computed.opacity);
            var opacity = {
                computed: computedOpacity !== configOpacity ? "opacity: " + computedOpacity + ";" : "",
                generated: computedOpacity !== configOpacity ? "opacity: " + configOpacity + ";" : ""
            };
            var transformations = [];
            if (parseFloat(config.distance)) {
                var axis = config.origin === "top" || config.origin === "bottom" ? "Y" : "X";
                var distance = config.distance;
                if (config.origin === "top" || config.origin === "left") distance = /^-/.test(distance) ? distance.substr(1) : "-" + distance;
                var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
                var value = ref[0];
                var unit = ref[1];
                switch (unit) {
                  case "em":
                    distance = parseInt(computed.fontSize) * value;
                    break;

                  case "px":
                    distance = value;
                    break;

                  case "%":
                    distance = axis === "Y" ? element.node.getBoundingClientRect().height * value / 100 : element.node.getBoundingClientRect().width * value / 100;
                    break;

                  default:
                    throw new RangeError("Unrecognized or missing distance unit.");
                }
                if (axis === "Y") transformations.push(translateY(distance)); else transformations.push(translateX(distance));
            }
            if (config.rotate.x) transformations.push(rotateX(config.rotate.x));
            if (config.rotate.y) transformations.push(rotateY(config.rotate.y));
            if (config.rotate.z) transformations.push(rotateZ(config.rotate.z));
            if (config.scale !== 1) if (config.scale === 0) transformations.push(scale(2e-4)); else transformations.push(scale(config.scale));
            var transform = {};
            if (transformations.length) {
                transform.property = getPrefixedCssProp("transform");
                transform.computed = {
                    raw: computed[transform.property],
                    matrix: parse(computed[transform.property])
                };
                transformations.unshift(transform.computed.matrix);
                var product = transformations.reduce(multiply);
                transform.generated = {
                    initial: transform.property + ": matrix3d(" + product.join(", ") + ");",
                    final: transform.property + ": matrix3d(" + transform.computed.matrix.join(", ") + ");"
                };
            } else transform.generated = {
                initial: "",
                final: ""
            };
            var transition = {};
            if (opacity.generated || transform.generated.initial) {
                transition.property = getPrefixedCssProp("transition");
                transition.computed = computed[transition.property];
                transition.fragments = [];
                var delay = config.delay;
                var duration = config.duration;
                var easing = config.easing;
                if (opacity.generated) transition.fragments.push({
                    delayed: "opacity " + duration / 1e3 + "s " + easing + " " + delay / 1e3 + "s",
                    instant: "opacity " + duration / 1e3 + "s " + easing + " 0s"
                });
                if (transform.generated.initial) transition.fragments.push({
                    delayed: transform.property + " " + duration / 1e3 + "s " + easing + " " + delay / 1e3 + "s",
                    instant: transform.property + " " + duration / 1e3 + "s " + easing + " 0s"
                });
                var hasCustomTransition = transition.computed && !transition.computed.match(/all 0s|none 0s/);
                if (hasCustomTransition) transition.fragments.unshift({
                    delayed: transition.computed,
                    instant: transition.computed
                });
                var composed = transition.fragments.reduce((function(composition, fragment, i) {
                    composition.delayed += i === 0 ? fragment.delayed : ", " + fragment.delayed;
                    composition.instant += i === 0 ? fragment.instant : ", " + fragment.instant;
                    return composition;
                }), {
                    delayed: "",
                    instant: ""
                });
                transition.generated = {
                    delayed: transition.property + ": " + composed.delayed + ";",
                    instant: transition.property + ": " + composed.instant + ";"
                };
            } else transition.generated = {
                delayed: "",
                instant: ""
            };
            return {
                inline,
                opacity,
                position,
                transform,
                transition
            };
        }
        function applyStyle(el, declaration) {
            declaration.split(";").forEach((function(pair) {
                var ref = pair.split(":");
                var property = ref[0];
                var value = ref.slice(1);
                if (property && value) el.style[property.trim()] = value.join(":");
            }));
        }
        function clean(target) {
            var this$1 = this;
            var dirty;
            try {
                each(tealight_es(target), (function(node) {
                    var id = node.getAttribute("data-sr-id");
                    if (id !== null) {
                        dirty = true;
                        var element = this$1.store.elements[id];
                        if (element.callbackTimer) window.clearTimeout(element.callbackTimer.clock);
                        applyStyle(element.node, element.styles.inline.generated);
                        node.removeAttribute("data-sr-id");
                        delete this$1.store.elements[id];
                    }
                }));
            } catch (e) {
                return logger.call(this, "Clean failed.", e.message);
            }
            if (dirty) try {
                rinse.call(this);
            } catch (e) {
                return logger.call(this, "Clean failed.", e.message);
            }
        }
        function destroy() {
            var this$1 = this;
            each(this.store.elements, (function(element) {
                applyStyle(element.node, element.styles.inline.generated);
                element.node.removeAttribute("data-sr-id");
            }));
            each(this.store.containers, (function(container) {
                var target = container.node === document.documentElement ? window : container.node;
                target.removeEventListener("scroll", this$1.delegate);
                target.removeEventListener("resize", this$1.delegate);
            }));
            this.store = {
                containers: {},
                elements: {},
                history: [],
                sequences: {}
            };
        }
        function deepAssign(target) {
            var sources = [], len = arguments.length - 1;
            while (len-- > 0) sources[len] = arguments[len + 1];
            if (scrollreveal_es_isObject(target)) {
                each(sources, (function(source) {
                    each(source, (function(data, key) {
                        if (scrollreveal_es_isObject(data)) {
                            if (!target[key] || !scrollreveal_es_isObject(target[key])) target[key] = {};
                            deepAssign(target[key], data);
                        } else target[key] = data;
                    }));
                }));
                return target;
            } else throw new TypeError("Target must be an object literal.");
        }
        function scrollreveal_es_isMobile(agent) {
            if (agent === void 0) agent = navigator.userAgent;
            return /Android|iPhone|iPad|iPod/i.test(agent);
        }
        var nextUniqueId = function() {
            var uid = 0;
            return function() {
                return uid++;
            };
        }();
        function initialize() {
            var this$1 = this;
            rinse.call(this);
            each(this.store.elements, (function(element) {
                var styles = [ element.styles.inline.generated ];
                if (element.visible) {
                    styles.push(element.styles.opacity.computed);
                    styles.push(element.styles.transform.generated.final);
                    element.revealed = true;
                } else {
                    styles.push(element.styles.opacity.generated);
                    styles.push(element.styles.transform.generated.initial);
                    element.revealed = false;
                }
                applyStyle(element.node, styles.filter((function(s) {
                    return s !== "";
                })).join(" "));
            }));
            each(this.store.containers, (function(container) {
                var target = container.node === document.documentElement ? window : container.node;
                target.addEventListener("scroll", this$1.delegate);
                target.addEventListener("resize", this$1.delegate);
            }));
            this.delegate();
            this.initTimeout = null;
        }
        function animate(element, force) {
            if (force === void 0) force = {};
            var pristine = force.pristine || this.pristine;
            var delayed = element.config.useDelay === "always" || element.config.useDelay === "onload" && pristine || element.config.useDelay === "once" && !element.seen;
            var shouldReveal = element.visible && !element.revealed;
            var shouldReset = !element.visible && element.revealed && element.config.reset;
            if (force.reveal || shouldReveal) return triggerReveal.call(this, element, delayed);
            if (force.reset || shouldReset) return triggerReset.call(this, element);
        }
        function triggerReveal(element, delayed) {
            var styles = [ element.styles.inline.generated, element.styles.opacity.computed, element.styles.transform.generated.final ];
            if (delayed) styles.push(element.styles.transition.generated.delayed); else styles.push(element.styles.transition.generated.instant);
            element.revealed = element.seen = true;
            applyStyle(element.node, styles.filter((function(s) {
                return s !== "";
            })).join(" "));
            registerCallbacks.call(this, element, delayed);
        }
        function triggerReset(element) {
            var styles = [ element.styles.inline.generated, element.styles.opacity.generated, element.styles.transform.generated.initial, element.styles.transition.generated.instant ];
            element.revealed = false;
            applyStyle(element.node, styles.filter((function(s) {
                return s !== "";
            })).join(" "));
            registerCallbacks.call(this, element);
        }
        function registerCallbacks(element, isDelayed) {
            var this$1 = this;
            var duration = isDelayed ? element.config.duration + element.config.delay : element.config.duration;
            var beforeCallback = element.revealed ? element.config.beforeReveal : element.config.beforeReset;
            var afterCallback = element.revealed ? element.config.afterReveal : element.config.afterReset;
            var elapsed = 0;
            if (element.callbackTimer) {
                elapsed = Date.now() - element.callbackTimer.start;
                window.clearTimeout(element.callbackTimer.clock);
            }
            beforeCallback(element.node);
            element.callbackTimer = {
                start: Date.now(),
                clock: window.setTimeout((function() {
                    afterCallback(element.node);
                    element.callbackTimer = null;
                    if (element.revealed && !element.config.reset && element.config.cleanup) clean.call(this$1, element.node);
                }), duration - elapsed)
            };
        }
        function sequence(element, pristine) {
            if (pristine === void 0) pristine = this.pristine;
            if (!element.visible && element.revealed && element.config.reset) return animate.call(this, element, {
                reset: true
            });
            var seq = this.store.sequences[element.sequence.id];
            var i = element.sequence.index;
            if (seq) {
                var visible = new SequenceModel(seq, "visible", this.store);
                var revealed = new SequenceModel(seq, "revealed", this.store);
                seq.models = {
                    visible,
                    revealed
                };
                if (!revealed.body.length) {
                    var nextId = seq.members[visible.body[0]];
                    var nextElement = this.store.elements[nextId];
                    if (nextElement) {
                        cue.call(this, seq, visible.body[0], -1, pristine);
                        cue.call(this, seq, visible.body[0], +1, pristine);
                        return animate.call(this, nextElement, {
                            reveal: true,
                            pristine
                        });
                    }
                }
                if (!seq.blocked.head && i === [].concat(revealed.head).pop() && i >= [].concat(visible.body).shift()) {
                    cue.call(this, seq, i, -1, pristine);
                    return animate.call(this, element, {
                        reveal: true,
                        pristine
                    });
                }
                if (!seq.blocked.foot && i === [].concat(revealed.foot).shift() && i <= [].concat(visible.body).pop()) {
                    cue.call(this, seq, i, +1, pristine);
                    return animate.call(this, element, {
                        reveal: true,
                        pristine
                    });
                }
            }
        }
        function Sequence(interval) {
            var i = Math.abs(interval);
            if (!isNaN(i)) {
                this.id = nextUniqueId();
                this.interval = Math.max(i, 16);
                this.members = [];
                this.models = {};
                this.blocked = {
                    head: false,
                    foot: false
                };
            } else throw new RangeError("Invalid sequence interval.");
        }
        function SequenceModel(seq, prop, store) {
            var this$1 = this;
            this.head = [];
            this.body = [];
            this.foot = [];
            each(seq.members, (function(id, index) {
                var element = store.elements[id];
                if (element && element[prop]) this$1.body.push(index);
            }));
            if (this.body.length) each(seq.members, (function(id, index) {
                var element = store.elements[id];
                if (element && !element[prop]) if (index < this$1.body[0]) this$1.head.push(index); else this$1.foot.push(index);
            }));
        }
        function cue(seq, i, direction, pristine) {
            var this$1 = this;
            var blocked = [ "head", null, "foot" ][1 + direction];
            var nextId = seq.members[i + direction];
            var nextElement = this.store.elements[nextId];
            seq.blocked[blocked] = true;
            setTimeout((function() {
                seq.blocked[blocked] = false;
                if (nextElement) sequence.call(this$1, nextElement, pristine);
            }), seq.interval);
        }
        function reveal(target, options, syncing) {
            var this$1 = this;
            if (options === void 0) options = {};
            if (syncing === void 0) syncing = false;
            var containerBuffer = [];
            var sequence$$1;
            var interval = options.interval || scrollreveal_es_defaults.interval;
            try {
                if (interval) sequence$$1 = new Sequence(interval);
                var nodes = tealight_es(target);
                if (!nodes.length) throw new Error("Invalid reveal target.");
                var elements = nodes.reduce((function(elementBuffer, elementNode) {
                    var element = {};
                    var existingId = elementNode.getAttribute("data-sr-id");
                    if (existingId) {
                        deepAssign(element, this$1.store.elements[existingId]);
                        applyStyle(element.node, element.styles.inline.computed);
                    } else {
                        element.id = nextUniqueId();
                        element.node = elementNode;
                        element.seen = false;
                        element.revealed = false;
                        element.visible = false;
                    }
                    var config = deepAssign({}, element.config || this$1.defaults, options);
                    if (!config.mobile && scrollreveal_es_isMobile() || !config.desktop && !scrollreveal_es_isMobile()) {
                        if (existingId) clean.call(this$1, element);
                        return elementBuffer;
                    }
                    var containerNode = tealight_es(config.container)[0];
                    if (!containerNode) throw new Error("Invalid container.");
                    if (!containerNode.contains(elementNode)) return elementBuffer;
                    var containerId;
                    containerId = getContainerId(containerNode, containerBuffer, this$1.store.containers);
                    if (containerId === null) {
                        containerId = nextUniqueId();
                        containerBuffer.push({
                            id: containerId,
                            node: containerNode
                        });
                    }
                    element.config = config;
                    element.containerId = containerId;
                    element.styles = style(element);
                    if (sequence$$1) {
                        element.sequence = {
                            id: sequence$$1.id,
                            index: sequence$$1.members.length
                        };
                        sequence$$1.members.push(element.id);
                    }
                    elementBuffer.push(element);
                    return elementBuffer;
                }), []);
                each(elements, (function(element) {
                    this$1.store.elements[element.id] = element;
                    element.node.setAttribute("data-sr-id", element.id);
                }));
            } catch (e) {
                return logger.call(this, "Reveal failed.", e.message);
            }
            each(containerBuffer, (function(container) {
                this$1.store.containers[container.id] = {
                    id: container.id,
                    node: container.node
                };
            }));
            if (sequence$$1) this.store.sequences[sequence$$1.id] = sequence$$1;
            if (syncing !== true) {
                this.store.history.push({
                    target,
                    options
                });
                if (this.initTimeout) window.clearTimeout(this.initTimeout);
                this.initTimeout = window.setTimeout(initialize.bind(this), 0);
            }
        }
        function getContainerId(node) {
            var collections = [], len = arguments.length - 1;
            while (len-- > 0) collections[len] = arguments[len + 1];
            var id = null;
            each(collections, (function(collection) {
                each(collection, (function(container) {
                    if (id === null && container.node === node) id = container.id;
                }));
            }));
            return id;
        }
        function sync() {
            var this$1 = this;
            each(this.store.history, (function(record) {
                reveal.call(this$1, record.target, record.options, true);
            }));
            initialize.call(this);
        }
        var scrollreveal_es_polyfill = function(x) {
            return (x > 0) - (x < 0) || +x;
        };
        var mathSign = Math.sign || scrollreveal_es_polyfill;
        function getGeometry(target, isContainer) {
            var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
            var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;
            var offsetTop = 0;
            var offsetLeft = 0;
            var node = target.node;
            do {
                if (!isNaN(node.offsetTop)) offsetTop += node.offsetTop;
                if (!isNaN(node.offsetLeft)) offsetLeft += node.offsetLeft;
                node = node.offsetParent;
            } while (node);
            return {
                bounds: {
                    top: offsetTop,
                    right: offsetLeft + width,
                    bottom: offsetTop + height,
                    left: offsetLeft
                },
                height,
                width
            };
        }
        function getScrolled(container) {
            var top, left;
            if (container.node === document.documentElement) {
                top = window.pageYOffset;
                left = window.pageXOffset;
            } else {
                top = container.node.scrollTop;
                left = container.node.scrollLeft;
            }
            return {
                top,
                left
            };
        }
        function isElementVisible(element) {
            if (element === void 0) element = {};
            var container = this.store.containers[element.containerId];
            if (!container) return;
            var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
            var viewOffset = element.config.viewOffset;
            var elementBounds = {
                top: element.geometry.bounds.top + element.geometry.height * viewFactor,
                right: element.geometry.bounds.right - element.geometry.width * viewFactor,
                bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
                left: element.geometry.bounds.left + element.geometry.width * viewFactor
            };
            var containerBounds = {
                top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
                right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
                bottom: container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
                left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
            };
            return elementBounds.top < containerBounds.bottom && elementBounds.right > containerBounds.left && elementBounds.bottom > containerBounds.top && elementBounds.left < containerBounds.right || element.styles.position === "fixed";
        }
        function delegate(event, elements) {
            var this$1 = this;
            if (event === void 0) event = {
                type: "init"
            };
            if (elements === void 0) elements = this.store.elements;
            miniraf_es((function() {
                var stale = event.type === "init" || event.type === "resize";
                each(this$1.store.containers, (function(container) {
                    if (stale) container.geometry = getGeometry.call(this$1, container, true);
                    var scroll = getScrolled.call(this$1, container);
                    if (container.scroll) container.direction = {
                        x: mathSign(scroll.left - container.scroll.left),
                        y: mathSign(scroll.top - container.scroll.top)
                    };
                    container.scroll = scroll;
                }));
                each(elements, (function(element) {
                    if (stale || element.geometry === void 0) element.geometry = getGeometry.call(this$1, element);
                    element.visible = isElementVisible.call(this$1, element);
                }));
                each(elements, (function(element) {
                    if (element.sequence) sequence.call(this$1, element); else animate.call(this$1, element);
                }));
                this$1.pristine = false;
            }));
        }
        function isTransformSupported() {
            var style = document.documentElement.style;
            return "transform" in style || "WebkitTransform" in style;
        }
        function isTransitionSupported() {
            var style = document.documentElement.style;
            return "transition" in style || "WebkitTransition" in style;
        }
        var version = "4.0.9";
        var boundDelegate;
        var boundDestroy;
        var boundReveal;
        var boundClean;
        var boundSync;
        var config;
        var debug;
        var instance;
        function ScrollReveal(options) {
            if (options === void 0) options = {};
            var invokedWithoutNew = typeof this === "undefined" || Object.getPrototypeOf(this) !== ScrollReveal.prototype;
            if (invokedWithoutNew) return new ScrollReveal(options);
            if (!ScrollReveal.isSupported()) {
                logger.call(this, "Instantiation failed.", "This browser is not supported.");
                return mount.failure();
            }
            var buffer;
            try {
                buffer = config ? deepAssign({}, config, options) : deepAssign({}, scrollreveal_es_defaults, options);
            } catch (e) {
                logger.call(this, "Invalid configuration.", e.message);
                return mount.failure();
            }
            try {
                var container = tealight_es(buffer.container)[0];
                if (!container) throw new Error("Invalid container.");
            } catch (e) {
                logger.call(this, e.message);
                return mount.failure();
            }
            config = buffer;
            if (!config.mobile && scrollreveal_es_isMobile() || !config.desktop && !scrollreveal_es_isMobile()) {
                logger.call(this, "This device is disabled.", "desktop: " + config.desktop, "mobile: " + config.mobile);
                return mount.failure();
            }
            mount.success();
            this.store = {
                containers: {},
                elements: {},
                history: [],
                sequences: {}
            };
            this.pristine = true;
            boundDelegate = boundDelegate || delegate.bind(this);
            boundDestroy = boundDestroy || destroy.bind(this);
            boundReveal = boundReveal || reveal.bind(this);
            boundClean = boundClean || clean.bind(this);
            boundSync = boundSync || sync.bind(this);
            Object.defineProperty(this, "delegate", {
                get: function() {
                    return boundDelegate;
                }
            });
            Object.defineProperty(this, "destroy", {
                get: function() {
                    return boundDestroy;
                }
            });
            Object.defineProperty(this, "reveal", {
                get: function() {
                    return boundReveal;
                }
            });
            Object.defineProperty(this, "clean", {
                get: function() {
                    return boundClean;
                }
            });
            Object.defineProperty(this, "sync", {
                get: function() {
                    return boundSync;
                }
            });
            Object.defineProperty(this, "defaults", {
                get: function() {
                    return config;
                }
            });
            Object.defineProperty(this, "version", {
                get: function() {
                    return version;
                }
            });
            Object.defineProperty(this, "noop", {
                get: function() {
                    return false;
                }
            });
            return instance ? instance : instance = this;
        }
        ScrollReveal.isSupported = function() {
            return isTransformSupported() && isTransitionSupported();
        };
        Object.defineProperty(ScrollReveal, "debug", {
            get: function() {
                return debug || false;
            },
            set: function(value) {
                return debug = typeof value === "boolean" ? value : debug;
            }
        });
        ScrollReveal();
        const scrollreveal_es = ScrollReveal;
        scrollreveal_es({
            distance: "60px",
            duration: 2800
        });
        scrollreveal_es().reveal(".header, .partners", {
            origin: "top",
            distance: "50px"
        });
        scrollreveal_es().reveal(".main-block__title, .main-block__product", {
            origin: "left"
        });
        scrollreveal_es().reveal(".main-block__subtitle, .main-block__scroll", {
            origin: "right"
        });
        scrollreveal_es().reveal(".main-block__form, .main-block__image", {
            origin: "bottom"
        });
        window["FLS"] = true;
        isWebp();
        menuInit();
        spollers();
    })();
})();
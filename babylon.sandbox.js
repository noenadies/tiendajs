
var miglobal=null;

!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t(require("babylonjs"), require("babylonjs-loaders")))
        : "function" == typeof define && define.amd
        ? define(["babylonjs", "babylonjs-loaders"], t)
        : "object" == typeof exports
        ? (exports.SANDBOX = t(require("babylonjs"), require("babylonjs-loaders")))
        : (e.SANDBOX = t(e.BABYLON, e.BABYLON));
})("undefined" != typeof self ? self : "undefined" != typeof global ? global : this, function (e, t) 
{
    return (function (e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var o in e)
                        n.d(
                            r,
                            o,
                            function (t) {
                                return e[t];
                            }.bind(null, o)
                        );
                return r;
            }),
            (n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = "/"),
            n((n.s = 8))
        );
    })([
        function (e, t, n) {
            "use strict";
            e.exports = n(10);
        },
        function (t, n) {
            t.exports = e;
        },
        function (e, t, n) {
            "use strict";
            var r,
                o = function () {
                    return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
                },
                i = (function () {
                    var e = {};
                    return function (t) {
                        if (void 0 === e[t]) {
                            var n = document.querySelector(t);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head;
                                } catch (e) {
                                    n = null;
                                }
                            e[t] = n;
                        }
                        return e[t];
                    };
                })(),
                l = [];
            function a(e) {
                for (var t = -1, n = 0; n < l.length; n++)
                    if (l[n].identifier === e) {
                        t = n;
                        break;
                    }
                return t;
            }
            function u(e, t) {
                for (var n = {}, r = [], o = 0; o < e.length; o++) {
                    var i = e[o],
                        u = t.base ? i[0] + t.base : i[0],
                        s = n[u] || 0,
                        c = "".concat(u, " ").concat(s);
                    n[u] = s + 1;
                    var f = a(c),
                        d = { css: i[1], media: i[2], sourceMap: i[3] };
                    -1 !== f ? (l[f].references++, l[f].updater(d)) : l.push({ identifier: c, updater: g(d, t), references: 1 }), r.push(c);
                }
                return r;
            }
            function s(e) {
                var t = document.createElement("style"),
                    r = e.attributes || {};
                if (void 0 === r.nonce) {
                    var o = n.nc;
                    o && (r.nonce = o);
                }
                if (
                    (Object.keys(r).forEach(function (e) {
                        t.setAttribute(e, r[e]);
                    }),
                    "function" == typeof e.insert)
                )
                    e.insert(t);
                else {
                    var l = i(e.insert || "head");
                    if (!l) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    l.appendChild(t);
                }
                return t;
            }
            var c,
                f =
                    ((c = []),
                    function (e, t) {
                        return (c[e] = t), c.filter(Boolean).join("\n");
                    });
            function d(e, t, n, r) {
                var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet) e.styleSheet.cssText = f(t, o);
                else {
                    var i = document.createTextNode(o),
                        l = e.childNodes;
                    l[t] && e.removeChild(l[t]), l.length ? e.insertBefore(i, l[t]) : e.appendChild(i);
                }
            }
            function p(e, t, n) {
                var r = n.css,
                    o = n.media,
                    i = n.sourceMap;
                if (
                    (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
                    i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
                    e.styleSheet)
                )
                    e.styleSheet.cssText = r;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r));
                }
            }
            var h = null,
                m = 0;
            function g(e, t) {
                var n, r, o;
                if (t.singleton) {
                    var i = m++;
                    (n = h || (h = s(t))), (r = d.bind(null, n, i, !1)), (o = d.bind(null, n, i, !0));
                } else
                    (n = s(t)),
                        (r = p.bind(null, n, t)),
                        (o = function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(n);
                        });
                return (
                    r(e),
                    function (t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                            r((e = t));
                        } else o();
                    }
                );
            }
            e.exports = function (e, t) {
                (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = o());
                var n = u((e = e || []), t);
                return function (e) {
                    if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                        for (var r = 0; r < n.length; r++) {
                            var o = a(n[r]);
                            l[o].references--;
                        }
                        for (var i = u(e, t), s = 0; s < n.length; s++) {
                            var c = a(n[s]);
                            0 === l[c].references && (l[c].updater(), l.splice(c, 1));
                        }
                        n = i;
                    }
                };
            };
        },
        function (e, t, n) {
            "use strict";
            e.exports = function (e) {
                var t = [];
                return (
                    (t.toString = function () {
                        return this.map(function (t) {
                            var n = (function (e, t) {
                                var n = e[1] || "",
                                    r = e[3];
                                if (!r) return n;
                                if (t && "function" == typeof btoa) {
                                    var o = ((l = r), (a = btoa(unescape(encodeURIComponent(JSON.stringify(l))))), (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a)), "/*# ".concat(u, " */")),
                                        i = r.sources.map(function (e) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                                        });
                                    return [n].concat(i).concat([o]).join("\n");
                                }
                                var l, a, u;
                                return [n].join("\n");
                            })(t, e);
                            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                        }).join("");
                    }),
                    (t.i = function (e, n, r) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var o = {};
                        if (r)
                            for (var i = 0; i < this.length; i++) {
                                var l = this[i][0];
                                null != l && (o[l] = !0);
                            }
                        for (var a = 0; a < e.length; a++) {
                            var u = [].concat(e[a]);
                            (r && o[u[0]]) || (n && (u[2] ? (u[2] = "".concat(n, " and ").concat(u[2])) : (u[2] = n)), t.push(u));
                        }
                    }),
                    t
                );
            };
        },
        function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return _;
            });
            /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
            var r = function (e, t) {
                return (r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                            e.__proto__ = t;
                        }) ||
                    function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    })(e, t);
            };
            function o(e, t) {
                function n() {
                    this.constructor = e;
                }
                r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }
            var i = n(0),
                l = n(6),
                a = n(1),
                u = (function () {
                    function e() {
                        (this.onSceneLoaded = new a.Observable()),
                            (this.onError = new a.Observable()),
                            (this.onEnvironmentChanged = new a.Observable()),
                            (this.onRequestClickInterceptor = new a.Observable()),
                            (this.onClickInterceptorClicked = new a.Observable()),
                            (this.isDebugLayerEnabled = !1);
                    }
                    return (
                        (e.prototype.showDebugLayer = function () {
                            (this.isDebugLayerEnabled = !0), this.currentScene && this.currentScene.debugLayer.show();
                        }),
                        (e.prototype.hideDebugLayer = function () {
                            (this.isDebugLayerEnabled = !1), this.currentScene && this.currentScene.debugLayer.hide();
                        }),
                        e
                    );
                })(),
                s = n(7),
                c = (function () {
                    function e() {}
                    return (
                        (e.ReadLocalStorageValue = function (e, t) {
                            return "undefined" != typeof Storage && null !== localStorage.getItem(e) ? parseInt(localStorage.getItem(e)) : t;
                        }),
                        e
                    );
                })(),
                f = (function () {
                    function e() {}
                    return (
                        (e.LoadSkyboxPathTexture = function (e) {
                            var t = Math.max(0, c.ReadLocalStorageValue("defaultSkyboxId", 0)),
                                n = this.SkyboxPath || this.Skyboxes[t];
                            return n.indexOf(".hdr") === n.length - 4 ? new a.HDRCubeTexture(n, e, 256, !1, !0, !1, !0) : a.CubeTexture.CreateFromPrefilteredData(n, e);
                        }),
                        (e.HookWithEnvironmentChange = function (t) {
                            var n = this;
                            t.onEnvironmentChanged.add(function (t) {
                                n.SkyboxPath = "";
                                var r = e.SkyboxesNames.indexOf(t);
                                "undefined" != typeof Storage && localStorage.setItem("defaultSkyboxId", r.toString());
                                var o = a.Engine.LastCreatedScene;
                                o.environmentTexture = n.LoadSkyboxPathTexture(o);
                                for (var i = 0; i < o.materials.length; i++) {
                                    var l = o.materials[i];
                                    if ("skyBox" === l.name) {
                                        var u = l.reflectionTexture;
                                        u && u.coordinatesMode === a.Texture.SKYBOX_MODE && ((l.reflectionTexture = o.environmentTexture.clone()), l.reflectionTexture && (l.reflectionTexture.coordinatesMode = a.Texture.SKYBOX_MODE));
                                    }
                                }
                            });
                        }),
                        (e.SkyboxPath = ""),
                        (e.Skyboxes = ["https://assets.babylonjs.com/environments/environmentSpecular.env", "https://assets.babylonjs.com/environments/studio.env"]),
                        (e.SkyboxesNames = ["Default", "Studio"]),
                        e
                    );
                })();
            n(14);
            var d = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        o(t, e),
                        (t.prototype.initEngine = function () {
                            miglobal=this;
                            var e = this;
                            console.log("this sssssssss");
                            console.log(this);
                            (this._canvas = document.getElementById("renderCanvas")),
                                (this._engine = new a.Engine(this._canvas, !0, { premultipliedAlpha: !1, preserveDrawingBuffer: !0 })),
                                (this._engine.loadingUIBackgroundColor = "#000000"),
                                window.addEventListener("resize", function () {
                                    e._engine.resize();
                                }),
                                this.loadAsset();
                            var t = new a.FilesInput(
                                this._engine,
                                null,
                                function (t, n) {
                                    (e._scene = n), e.onSceneLoaded(t.name);
                                    console.log("onSceneLoaded 22")
                                    console.log("t.name");
                                    console.log(t.name);
                                    //aca carga y llama a la scena giovanni
                                },
                                null,
                                null,
                                null,
                                function () {
                                    a.Tools.ClearLogCache(),
                                        e._scene && ((e.props.globalState.isDebugLayerEnabled = e.props.globalState.currentScene.debugLayer.isVisible()), e.props.globalState.isDebugLayerEnabled && e._scene.debugLayer.hide());
                                },
                                null,
                                function (t, n, r) {
                                    e.props.globalState.onError.notifyObservers({ message: r });
                                }
                            );
                            (t.onProcessFileCallback = function (e, n, r) {
                                console.log("entrada de  objetos");
                                console.log(e.correctName);
                                return (
                                    !t.filesToLoad ||
                                    1 !== t.filesToLoad.length ||
                                    !r ||
                                    ("dds" !== r.toLowerCase() && "env" !== r.toLowerCase() && "hdr" !== r.toLowerCase()) ||
                                    ((a.FilesInput.FilesToLoad[n] = e),
                                     (f.SkyboxPath = "file:" + e.correctName), !1)
                                );
                            }),
                                t.monitorElementForDragNDrop(this._canvas),
                                (this.props.globalState.filesInput = t),
                                window.addEventListener("keydown", function (n) {
                                    82 === n.keyCode && n.target && "INPUT" !== n.target.nodeName && e._scene && (e.props.assetUrl ? e.loadAssetFromUrl() : t.reload());
                                });
                        }),
                        (t.prototype.prepareCamera = function () {
                            var e;
                            if (!this._scene.activeCamera || 0 === this._scene.lights.length) {
                                if ((this._scene.createDefaultCamera(!0), (e = this._scene.activeCamera), this.props.cameraPosition)) e.setPosition(this.props.cameraPosition);
                                else {
                                    "gltf" === this._currentPluginName && (e.alpha += Math.PI), (e.useFramingBehavior = !0);
                                    var t = e.getBehaviorByName("Framing");
                                    if (((t.framingTime = 0), (t.elevationReturnTime = -1), this._scene.meshes.length)) {
                                        e.lowerRadiusLimit = null;
                                        var n = this._scene.getWorldExtends(function (e) {
                                            return e.isVisible && e.isEnabled();
                                        });
                                        t.zoomOnBoundingInfo(n.min, n.max);
                                    }
                                }
                                (e.pinchPrecision = 200 / e.radius), (e.upperRadiusLimit = 5 * e.radius), (e.wheelDeltaPercentage = 0.01), (e.pinchDeltaPercentage = 0.01);
                            }
                            this._scene.activeCamera.attachControl();
                        }),
                        (t.prototype.handleErrors = function () {
                            if (0 === this._scene.meshes.length && 1 === this._scene.clearColor.r && 0 === this._scene.clearColor.g && 0 === this._scene.clearColor.b)
                                (this._canvas.style.opacity = "0"), this.props.globalState.onError.notifyObservers({ scene: this._scene, message: "No mesh found in your scene" });
                            else {
                                a.Tools.errorsCount > 0 && this.props.globalState.onError.notifyObservers({ scene: this._scene, message: "Scene loaded but several errors were found" });
                                var e = this._scene.activeCamera;
                                e.keysUp && (e.keysUp.push(90), e.keysUp.push(87), e.keysDown.push(83), e.keysLeft.push(65), e.keysLeft.push(81), e.keysRight.push(69), e.keysRight.push(68));
                            }
                        }),
                        (t.prototype.prepareLighting = function () {
                            if ("gltf" === this._currentPluginName)
                                this._scene.environmentTexture || (this._scene.environmentTexture = f.LoadSkyboxPathTexture(this._scene)),
                                    this._scene.environmentTexture && this._scene.createDefaultSkybox(this._scene.environmentTexture, !0, (this._scene.activeCamera.maxZ - this._scene.activeCamera.minZ) / 2, 0.3, !1);
                            else {
                                for (var e = !1, t = 0; t < this._scene.materials.length; t++)
                                    if (void 0 !== this._scene.materials[t].transparencyMode) {
                                        e = !0;
                                        break;
                                    }
                                e ? this._scene.environmentTexture || (this._scene.environmentTexture = f.LoadSkyboxPathTexture(this._scene)) : this._scene.createDefaultLight();
                            }
                        }),
                        (t.prototype.onSceneLoaded = function (e) {
                            console.log("onSceneLoaded 11");
                            console.log("onSceneLoaded 11");
                            console.log(e);
                          //  miglobal =this,
                            this._engine.clearInternalTexturesCache(),
                                (this._scene.skipFrustumClipping = !0),
                                this.props.globalState.onSceneLoaded.notifyObservers({ scene: this._scene, filename: e }),
                                this.prepareCamera(),
                                this.prepareLighting(),
                                this.handleErrors(),
                                this.props.globalState.isDebugLayerEnabled && this.props.globalState.showDebugLayer();
                        }),
                        (t.prototype.loadAssetFromUrl = function (durl) { // giovanni carga con url

                         //   alert(durl);
                        var e = this,
                                t =durl;// this.props.assetUrl,
                                n = a.Tools.GetFolderPath(t),
                                r = a.Tools.GetFilename(t);
                            a.SceneLoader.LoadAsync(n, r, this._engine)
                                .then(function (t) {
                                    e._scene && e._scene.dispose(),
                                        (e._scene = t),
                                        e.onSceneLoaded(r),
                                        t.whenReadyAsync().then(function () {
                                            e._engine.runRenderLoop(function () {
                                                t.render();
                                            });
                                        });
                                })
                                .catch(function (t) {
                                    e.props.globalState.onError.notifyObservers({ message: t.message });
                                }); 
                        }),
                        (t.prototype.loadAsset = function () {
                            this.props.assetUrl && this.loadAssetFromUrl();
                        }),
                        (t.prototype.componentDidMount = function () {
                            var e = this;
                            a.Engine.isSupported() &&
                                ((a.Engine.ShadersRepository = "/src/Shaders/"),
                                (a.Animation.AllowMatricesInterpolation = !0),
                                (s.GLTFFileLoader.IncrementalLoading = !1),
                                a.SceneLoader.OnPluginActivatedObservable.add(function (t) {
                                    (e._currentPluginName = t.name),
                                        "gltf" === e._currentPluginName &&
                                            t.onValidatedObservable.add(function (t) {
                                                t.issues.numErrors > 0 && e.props.globalState.showDebugLayer();
                                            });
                                }),
                                this.initEngine());
                        }),
                        (t.prototype.shouldComponentUpdate = function (e) {
                            var t = this;
                            return (
                                e.expanded !== this.props.expanded &&
                                (setTimeout(function () {
                                    return t._engine.resize();
                                }),
                                !0)
                            );
                        }),
                        (t.prototype.render = function () {
                            return i.createElement(
                                "div",
                                { id: "canvasZone", className: this.props.expanded ? "expanded" : "" },
                                i.createElement("canvas", {
                                    id: "renderCanvas",
                                    "touch-action": "none",
                                    onContextMenu: function (e) {
                                        return e.preventDefault();
                                    },
                                })
                            );
                        }),
                        t
                    );
                })(i.Component),
                p = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        o(t, e),
                        (t.prototype.render = function () {
                            var e = this;
                            return this.props.enabled
                                ? i.createElement(
                                      "div",
                                      {
                                          className: "button",
                                          onClick: function () {
                                              return e.props.onClick();
                                          },
                                      },
                                      i.createElement("img", { src: this.props.icon, alt: this.props.label, title: this.props.label })
                                  )
                                : null;
                        }),
                        t
                    );
                })(i.Component),
                h = n(16),
                m = n(17),
                g = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.state = { isOpen: !1 }),
                            (n._onClickInterceptorClickedObserver = t.globalState.onClickInterceptorClicked.add(function () {
                                n.setState({ isOpen: !1 });
                            })),
                            n
                        );
                    }
                    return (
                        o(t, e),
                        (t.prototype.componentWillUnmount = function () {
                            this.props.globalState.onClickInterceptorClicked.remove(this._onClickInterceptorClickedObserver);
                        }),
                        (t.prototype.switchDropUp = function () {
                            this.props.globalState.onRequestClickInterceptor.notifyObservers(), this.setState({ isOpen: !this.state.isOpen });
                        }),
                        (t.prototype.clickOption = function (e) {
                            this.switchDropUp(), this.props.onOptionPicked(e);
                        }),
                        (t.prototype.render = function () {
                            var e = this;
                            return this.props.enabled
                                ? i.createElement(
                                      "div",
                                      { className: "dropup" },
                                      this.props.icon &&
                                          i.createElement(
                                              "div",
                                              {
                                                  className: "button" + (this.state.isOpen ? " active" : ""),
                                                  onClick: function () {
                                                      return e.switchDropUp();
                                                  },
                                              },
                                              i.createElement("img", { src: this.props.icon, alt: this.props.label, title: this.props.label })
                                          ),
                                      this.props.selectedOption &&
                                          i.createElement(
                                              "div",
                                              {
                                                  className: "button long" + (this.state.isOpen ? " active" : ""),
                                                  onClick: function () {
                                                      return e.switchDropUp();
                                                  },
                                              },
                                              this.state.isOpen && i.createElement("img", { className: "button-icon", src: m, alt: "Close the list", title: "Close the list" }),
                                              !this.state.isOpen && i.createElement("img", { className: "button-icon", src: h, alt: "Open the list", title: "Open the list" }),
                                              i.createElement("div", { className: "button-text", title: this.props.selectedOption }, this.props.selectedOption)
                                          ),
                                      this.state.isOpen &&
                                          i.createElement(
                                              "div",
                                              { className: "dropup-content" + (this.props.selectedOption ? " long-mode" : "") },
                                              this.props.options.map(function (t) {
                                                  return i.createElement(
                                                      "div",
                                                      {
                                                          key: t,
                                                          onClick: function () {
                                                              return e.clickOption(t);
                                                          },
                                                      },
                                                      t
                                                  );
                                              })
                                          )
                                  )
                                : null;
                        }),
                        t
                    );
                })(i.Component),
                v = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        o(t, e),
                        (t.prototype.onFilePicked = function (e) {
                            this.props.onFilesPicked(e.nativeEvent, e.target.files);
                        }),
                        (t.prototype.render = function () {
                            var e = this;
                            return this.props.enabled
                                ? i.createElement(
                                      "div",
                                      { className: "custom-upload", title: this.props.label },
                                      i.createElement("img", { src: this.props.icon }),
                                      i.createElement("input", {
                                          type: "file",
                                          id: "files",
                                          multiple: !0,
                                          onChange: function (t) {
                                              return e.onFilePicked(t);
                                          },
                                      })
                                  )
                                : null;
                        }),
                        t
                    );
                })(i.Component),
                y = n(18),
                b = n(19);
            n(20);
            var w = (function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return (
                        (n._sliderRef = i.createRef()),
                        (n.state = { groupIndex: 0 }),
                        t.globalState.onSceneLoaded.add(function (e) {
                            n.registerBeforeRender(e.scene);
                        }),
                        n.props.globalState.currentScene && n.registerBeforeRender(n.props.globalState.currentScene),
                        n
                    );
                }
                return (
                    o(t, e),
                    (t.prototype.getCurrentPosition = function () {
                        if (!this._currentGroup) return "0";
                        if (this._currentGroup.targetedAnimations.length > 0) {
                            var e = this._currentGroup.targetedAnimations[0].animation.runtimeAnimations;
                            if (e.length > 0) return e[0].currentFrame.toString();
                        }
                        return "0";
                    }),
                    (t.prototype.registerBeforeRender = function (e) {
                        var t = this;
                        this._currentScene && this._currentScene.onBeforeRenderObservable.remove(this._sliderSyncObserver),
                            (this._currentScene = e),
                            (this._sliderSyncObserver = this._currentScene.onBeforeRenderObservable.add(function () {
                                t._currentGroup && t._sliderRef.current && ((t._sliderRef.current.value = t.getCurrentPosition()), t._currentPlayingState !== t._currentGroup.isPlaying && t.forceUpdate());
                            }));
                    }),
                    (t.prototype.pause = function () {
                        this._currentGroup && (this._currentGroup.pause(), this.forceUpdate());
                    }),
                    (t.prototype.play = function () {
                        this._currentGroup && (this._currentGroup.play(), this.forceUpdate());
                    }),
                    (t.prototype.sliderInput = function (e) {
                        if (this._currentGroup) {
                            var t = parseFloat(e.target.value);
                            this._currentGroup.isPlaying ? this._currentGroup.goToFrame(t) : (this._currentGroup.play(!0), this._currentGroup.goToFrame(t), this._currentGroup.pause());
                        }
                    }),
                    (t.prototype.render = function () {
                        var e = this;
                        if (!this.props.enabled) return (this._currentGroup = null), null;
                        var t = this.props.globalState.currentScene;
                        if (0 === t.animationGroups.length) return (this._currentGroup = null), null;
                        var n = t.animationGroups.map(function (e) {
                            return e.name;
                        });
                        return (
                            (this._currentGroup = t.animationGroups[this.state.groupIndex]),
                            (this._currentPlayingState = this._currentGroup.isPlaying),
                            i.createElement(
                                "div",
                                { className: "animationBar" },
                                i.createElement(
                                    "div",
                                    { className: "row" },
                                    i.createElement(
                                        "button",
                                        { id: "playBtn" },
                                        this._currentGroup.isPlaying &&
                                            i.createElement("img", {
                                                id: "pauseImg",
                                                src: b,
                                                onClick: function () {
                                                    return e.pause();
                                                },
                                            }),
                                        !this._currentGroup.isPlaying &&
                                            i.createElement("img", {
                                                id: "playImg",
                                                src: y,
                                                onClick: function () {
                                                    return e.play();
                                                },
                                            })
                                    ),
                                    i.createElement("input", {
                                        ref: this._sliderRef,
                                        className: "slider",
                                        type: "range",
                                        onInput: function (t) {
                                            return e.sliderInput(t);
                                        },
                                        min: this._currentGroup.from,
                                        max: this._currentGroup.to,
                                        onChange: function () {},
                                        value: this.getCurrentPosition(),
                                        step: "any",
                                    })
                                ),
                                i.createElement(g, {
                                    globalState: this.props.globalState,
                                    label: "Active animation group",
                                    options: n,
                                    selectedOption: this._currentGroup.name,
                                    onOptionPicked: function (r) {
                                        e._currentGroup.stop();
                                        var o = n.indexOf(r);
                                        e.setState({ groupIndex: o }), t.animationGroups[o].play(!0);
                                    },
                                    enabled: !0,
                                })
                            )
                        );
                    }),
                    t
                );
            })(i.Component);
            n(22);
            var E = n(24),
                x = n(25),
                k = n(26),
                C = n(27),
                S = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            t.globalState.onSceneLoaded.add(function (e) {
                                n.forceUpdate();
                            }),
                            n
                        );
                    }
                    return (
                        o(t, e),
                        (t.prototype.showInspector = function () {
                            this.props.globalState.currentScene && (this.props.globalState.currentScene.debugLayer.isVisible() ? this.props.globalState.hideDebugLayer() : this.props.globalState.showDebugLayer());
                        }),
                        (t.prototype.render = function () {
                            var e = this;
                            return i.createElement(
                                "div",
                                { id: "footer", className: "footer" },
                                i.createElement("div", { className: "footerLeft" }, i.createElement("img", { id: "logoImg", src: "https://img.itch.zone/aW1nLzM0OTE4MDMucG5n/347x500/%2FiOQ4E.png" })),
                                i.createElement(w, { globalState: this.props.globalState, enabled: !!this.props.globalState.currentScene }),
                                i.createElement(
                                    "div",
                                    { className: "footerRight" },
                                    i.createElement(v, {
                                        globalState: this.props.globalState,
                                        enabled: !0,
                                        icon: k,
                                        onFilesPicked: function (t, n) {
                                            e.props.globalState.filesInput.loadFiles(t);
                                        },
                                        label: "Open your scene from your hard drive (.babylon, .gltf, .glb, .obj)",
                                    }),
                                    i.createElement(g, {
                                        globalState: this.props.globalState,
                                        icon: C,
                                        label: "Select environment",
                                        options: f.SkyboxesNames,
                                        onOptionPicked: function (t) {
                                            return e.props.globalState.onEnvironmentChanged.notifyObservers(t);
                                        },
                                        enabled: !!this.props.globalState.currentScene,
                                    }),
                                    i.createElement(p, {
                                        globalState: this.props.globalState,
                                        icon: x,
                                        label: "Display inspector",
                                        onClick: function () {
                                            return e.showInspector();
                                        },
                                        enabled: !!this.props.globalState.currentScene,
                                    })
                                )
                            );
                        }),
                        t
                    );
                })(i.Component);
            n(28);
            var T = n(30),
                _ = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n._globalState = new u()),
                            (n._logoRef = i.createRef()),
                            (n._dropTextRef = i.createRef()),
                            (n._clickInterceptorRef = i.createRef()),
                            (n.state = { isFooterVisible: !0, errorMessage: "" }),
                            n.checkUrl(),
                            f.HookWithEnvironmentChange(n._globalState),
                            n._globalState.onSceneLoaded.add(function (e) {
                                (document.title = "Babylon.js - " + e.filename),
                                    (n._globalState.currentScene = e.scene),
                                    0 === n._globalState.currentScene.meshes.length && 1 === n._globalState.currentScene.clearColor.r && 0 === n._globalState.currentScene.clearColor.g && 0 === n._globalState.currentScene.clearColor.b
                                        ? (n._logoRef.current.className = "")
                                        : ((n._logoRef.current.className = "hidden"), (n._dropTextRef.current.className = "hidden"));
                            }),
                            n._globalState.onError.add(function (e) {
                                e.scene && n._globalState.showDebugLayer(), e.message && n.setState({ errorMessage: e.message });
                            }),
                            n._globalState.onRequestClickInterceptor.add(function () {
                                var e = n._clickInterceptorRef.current;
                                e.classList.contains("hidden") ? e.classList.remove("hidden") : e.classList.add("hidden");
                            }),
                            window.addEventListener("keydown", function (e) {
                                32 === e.keyCode && e.target && "INPUT" !== e.target.nodeName && n.setState({ isFooterVisible: !n.state.isFooterVisible });
                            }),
                            n
                        );
                    }
                    return (
                        o(t, e),
                        (t.prototype.checkUrl = function () {
                            var e = location.href.indexOf("?");
                            if (-1 !== e)
                                for (var t = location.href.substr(e + 1).split("&"), n = 0; n < t.length; n++) {
                                    var r = t[n].split("="),
                                        o = r[0],
                                        i = r[1];
                                    switch (o) {
                                        case "assetUrl":
                                            this._assetUrl = i;
                                            break;
                                        case "cameraPosition":
                                            this._cameraPosition = a.Vector3.FromArray(
                                                i.split(",").map(function (e) {
                                                    return +e;
                                                })
                                            );
                                            break;
                                        case "kiosk":
                                            this.state = { isFooterVisible: "true" !== i, errorMessage: "" };
                                    }
                                }
                        }),
                        (t.prototype.componentDidUpdate = function () {
                            (this._assetUrl = void 0), (this._cameraPosition = void 0);
                        }),
                        (t.prototype.render = function () {
                            var e = this;
                            console.log("render" );
                            console.log(this);
                            return i.createElement(
                                "div",
                                { id: "root" },
                                i.createElement("p", { id: "droptext", ref: this._dropTextRef }, "arrastra y suelta gltf, glb, obj "),
                                i.createElement(d, { globalState: this._globalState, assetUrl: this._assetUrl, cameraPosition: this._cameraPosition, expanded: !this.state.isFooterVisible }),
                                i.createElement("div", {
                                    ref: this._clickInterceptorRef,
                                    onClick: function () {
                                        e._globalState.onClickInterceptorClicked.notifyObservers(), e._clickInterceptorRef.current.classList.add("hidden");
                                    },
                                    className: "clickInterceptor hidden",
                                }),
                                this.state.isFooterVisible && i.createElement(S, { globalState: this._globalState }),
                                i.createElement("div", { id: "logoContainer" }, i.createElement("img", { id: "logo", src: T, ref: this._logoRef })),//
                                this.state.errorMessage &&
                                    i.createElement(
                                        "div",
                                        { id: "errorZone" },
                                        i.createElement("div", { className: "message" }, this.state.errorMessage),
                                        i.createElement(
                                            "button",
                                            {
                                                type: "button",
                                                className: "close",
                                                onClick: function () {
                                                    return e.setState({ errorMessage: "" });
                                                },
                                                "data-dismiss": "alert",
                                            },
                                            "×"
                                        )
                                    )
                            );
                        }),
                        (t.Show = function (e) {
                            var n = i.createElement(t, {});
                            l.render(n, e);
                        }),
                        t
                    );
                })(i.Component);
        },
        function (e, t, n) {
            "use strict";
            /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable;
            function l(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e);
            }
            e.exports = (function () {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    if (
                        "0123456789" !==
                        Object.getOwnPropertyNames(t)
                            .map(function (e) {
                                return t[e];
                            })
                            .join("")
                    )
                        return !1;
                    var r = {};
                    return (
                        "abcdefghijklmnopqrst".split("").forEach(function (e) {
                            r[e] = e;
                        }),
                        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                    );
                } catch (e) {
                    return !1;
                }
            })()
                ? Object.assign
                : function (e, t) {
                      for (var n, a, u = l(e), s = 1; s < arguments.length; s++) {
                          for (var c in (n = Object(arguments[s]))) o.call(n, c) && (u[c] = n[c]);
                          if (r) {
                              a = r(n);
                              for (var f = 0; f < a.length; f++) i.call(n, a[f]) && (u[a[f]] = n[a[f]]);
                          }
                      }
                      return u;
                  };
        },
        function (e, t, n) {
            "use strict";
            !(function e() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
                    0;
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                    } catch (e) {
                        console.error(e);
                    }
                }
            })(),
                (e.exports = n(11));
        },
        function (e, n) {
            e.exports = t;
        },
        function (e, t, n) {
            "use strict";
            n.r(t),
                function (e) {
                    var r = n(4);
                    n.d(t, "Sandbox", function () {
                        return r.a;
                    });
                    var o = void 0 !== e ? e : "undefined" != typeof window ? window : void 0;
                    void 0 !== o && ((o.BABYLON = o.BABYLON || {}), (o.BABYLON.Sandbox = r.a));
                }.call(this, n(9));
        },
        function (e, t) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function("return this")();
            } catch (e) {
                "object" == typeof window && (n = window);
            }
            e.exports = n;
        },
        function (e, t, n) {
            "use strict";
            /** @license React v16.13.1
             * react.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var r = n(5),
                o = "function" == typeof Symbol && Symbol.for,
                i = o ? Symbol.for("react.element") : 60103,
                l = o ? Symbol.for("react.portal") : 60106,
                a = o ? Symbol.for("react.fragment") : 60107,
                u = o ? Symbol.for("react.strict_mode") : 60108,
                s = o ? Symbol.for("react.profiler") : 60114,
                c = o ? Symbol.for("react.provider") : 60109,
                f = o ? Symbol.for("react.context") : 60110,
                d = o ? Symbol.for("react.forward_ref") : 60112,
                p = o ? Symbol.for("react.suspense") : 60113,
                h = o ? Symbol.for("react.memo") : 60115,
                m = o ? Symbol.for("react.lazy") : 60116,
                g = "function" == typeof Symbol && Symbol.iterator;
            function v(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            }
            var y = {
                    isMounted: function () {
                        return !1;
                    },
                    enqueueForceUpdate: function () {},
                    enqueueReplaceState: function () {},
                    enqueueSetState: function () {},
                },
                b = {};
            function w(e, t, n) {
                (this.props = e), (this.context = t), (this.refs = b), (this.updater = n || y);
            }
            function E() {}
            function x(e, t, n) {
                (this.props = e), (this.context = t), (this.refs = b), (this.updater = n || y);
            }
            (w.prototype.isReactComponent = {}),
                (w.prototype.setState = function (e, t) {
                    if ("object" != typeof e && "function" != typeof e && null != e) throw Error(v(85));
                    this.updater.enqueueSetState(this, e, t, "setState");
                }),
                (w.prototype.forceUpdate = function (e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
                }),
                (E.prototype = w.prototype);
            var k = (x.prototype = new E());
            (k.constructor = x), r(k, w.prototype), (k.isPureReactComponent = !0);
            var C = { current: null },
                S = Object.prototype.hasOwnProperty,
                T = { key: !0, ref: !0, __self: !0, __source: !0 };
            function _(e, t, n) {
                var r,
                    o = {},
                    l = null,
                    a = null;
                if (null != t) for (r in (void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (l = "" + t.key), t)) S.call(t, r) && !T.hasOwnProperty(r) && (o[r] = t[r]);
                var u = arguments.length - 2;
                if (1 === u) o.children = n;
                else if (1 < u) {
                    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
                    o.children = s;
                }
                if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === o[r] && (o[r] = u[r]);
                return { $$typeof: i, type: e, key: l, ref: a, props: o, _owner: C.current };
            }
            function P(e) {
                return "object" == typeof e && null !== e && e.$$typeof === i;
            }
            var N = /\/+/g,
                O = [];
            function L(e, t, n, r) {
                if (O.length) {
                    var o = O.pop();
                    return (o.result = e), (o.keyPrefix = t), (o.func = n), (o.context = r), (o.count = 0), o;
                }
                return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
            }
            function M(e) {
                (e.result = null), (e.keyPrefix = null), (e.func = null), (e.context = null), (e.count = 0), 10 > O.length && O.push(e);
            }
            function R(e, t, n) {
                return null == e
                    ? 0
                    : (function e(t, n, r, o) {
                          var a = typeof t;
                          ("undefined" !== a && "boolean" !== a) || (t = null);
                          var u = !1;
                          if (null === t) u = !0;
                          else
                              switch (a) {
                                  case "string":
                                  case "number":
                                      u = !0;
                                      break;
                                  case "object":
                                      switch (t.$$typeof) {
                                          case i:
                                          case l:
                                              u = !0;
                                      }
                              }
                          if (u) return r(o, t, "" === n ? "." + I(t, 0) : n), 1;
                          if (((u = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
                              for (var s = 0; s < t.length; s++) {
                                  var c = n + I((a = t[s]), s);
                                  u += e(a, c, r, o);
                              }
                          else if ((null === t || "object" != typeof t ? (c = null) : (c = "function" == typeof (c = (g && t[g]) || t["@@iterator"]) ? c : null), "function" == typeof c))
                              for (t = c.call(t), s = 0; !(a = t.next()).done; ) u += e((a = a.value), (c = n + I(a, s++)), r, o);
                          else if ("object" === a) throw ((r = "" + t), Error(v(31, "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, "")));
                          return u;
                      })(e, "", t, n);
            }
            function I(e, t) {
                return "object" == typeof e && null !== e && null != e.key
                    ? (function (e) {
                          var t = { "=": "=0", ":": "=2" };
                          return (
                              "$" +
                              ("" + e).replace(/[=:]/g, function (e) {
                                  return t[e];
                              })
                          );
                      })(e.key)
                    : t.toString(36);
            }
            function z(e, t) {
                e.func.call(e.context, t, e.count++);
            }
            function D(e, t, n) {
                var r = e.result,
                    o = e.keyPrefix;
                (e = e.func.call(e.context, t, e.count++)),
                    Array.isArray(e)
                        ? F(e, r, n, function (e) {
                              return e;
                          })
                        : null != e &&
                          (P(e) &&
                              (e = (function (e, t) {
                                  return { $$typeof: i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                              })(e, o + (!e.key || (t && t.key === e.key) ? "" : ("" + e.key).replace(N, "$&/") + "/") + n)),
                          r.push(e));
            }
            function F(e, t, n, r, o) {
                var i = "";
                null != n && (i = ("" + n).replace(N, "$&/") + "/"), R(e, D, (t = L(t, i, r, o))), M(t);
            }
            var A = { current: null };
            function B() {
                var e = A.current;
                if (null === e) throw Error(v(321));
                return e;
            }
            var U = { ReactCurrentDispatcher: A, ReactCurrentBatchConfig: { suspense: null }, ReactCurrentOwner: C, IsSomeRendererActing: { current: !1 }, assign: r };
            (t.Children = {
                map: function (e, t, n) {
                    if (null == e) return e;
                    var r = [];
                    return F(e, r, null, t, n), r;
                },
                forEach: function (e, t, n) {
                    if (null == e) return e;
                    R(e, z, (t = L(null, null, t, n))), M(t);
                },
                count: function (e) {
                    return R(
                        e,
                        function () {
                            return null;
                        },
                        null
                    );
                },
                toArray: function (e) {
                    var t = [];
                    return (
                        F(e, t, null, function (e) {
                            return e;
                        }),
                        t
                    );
                },
                only: function (e) {
                    if (!P(e)) throw Error(v(143));
                    return e;
                },
            }),
                (t.Component = w),
                (t.Fragment = a),
                (t.Profiler = s),
                (t.PureComponent = x),
                (t.StrictMode = u),
                (t.Suspense = p),
                (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
                (t.cloneElement = function (e, t, n) {
                    if (null == e) throw Error(v(267, e));
                    var o = r({}, e.props),
                        l = e.key,
                        a = e.ref,
                        u = e._owner;
                    if (null != t) {
                        if ((void 0 !== t.ref && ((a = t.ref), (u = C.current)), void 0 !== t.key && (l = "" + t.key), e.type && e.type.defaultProps)) var s = e.type.defaultProps;
                        for (c in t) S.call(t, c) && !T.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
                    }
                    var c = arguments.length - 2;
                    if (1 === c) o.children = n;
                    else if (1 < c) {
                        s = Array(c);
                        for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
                        o.children = s;
                    }
                    return { $$typeof: i, type: e.type, key: l, ref: a, props: o, _owner: u };
                }),
                (t.createContext = function (e, t) {
                    return (
                        void 0 === t && (t = null),
                        ((e = { $$typeof: f, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }).Provider = { $$typeof: c, _context: e }),
                        (e.Consumer = e)
                    );
                }),
                (t.createElement = _),
                (t.createFactory = function (e) {
                    var t = _.bind(null, e);
                    return (t.type = e), t;
                }),
                (t.createRef = function () {
                    return { current: null };
                }),
                (t.forwardRef = function (e) {
                    return { $$typeof: d, render: e };
                }),
                (t.isValidElement = P),
                (t.lazy = function (e) {
                    return { $$typeof: m, _ctor: e, _status: -1, _result: null };
                }),
                (t.memo = function (e, t) {
                    return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
                }),
                (t.useCallback = function (e, t) {
                    return B().useCallback(e, t);
                }),
                (t.useContext = function (e, t) {
                    return B().useContext(e, t);
                }),
                (t.useDebugValue = function () {}),
                (t.useEffect = function (e, t) {
                    return B().useEffect(e, t);
                }),
                (t.useImperativeHandle = function (e, t, n) {
                    return B().useImperativeHandle(e, t, n);
                }),
                (t.useLayoutEffect = function (e, t) {
                    return B().useLayoutEffect(e, t);
                }),
                (t.useMemo = function (e, t) {
                    return B().useMemo(e, t);
                }),
                (t.useReducer = function (e, t, n) {
                    return B().useReducer(e, t, n);
                }),
                (t.useRef = function (e) {
                    return B().useRef(e);
                }),
                (t.useState = function (e) {
                    return B().useState(e);
                }),
                (t.version = "16.13.1");
        },
        function (e, t, n) {
            "use strict";
            /** @license React v16.13.1
             * react-dom.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var r = n(0),
                o = n(5),
                i = n(12);
            function l(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            }
            if (!r) throw Error(l(227));
            function a(e, t, n, r, o, i, l, a, u) {
                var s = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, s);
                } catch (e) {
                    this.onError(e);
                }
            }
            var u = !1,
                s = null,
                c = !1,
                f = null,
                d = {
                    onError: function (e) {
                        (u = !0), (s = e);
                    },
                };
            function p(e, t, n, r, o, i, l, c, f) {
                (u = !1), (s = null), a.apply(d, arguments);
            }
            var h = null,
                m = null,
                g = null;
            function v(e, t, n) {
                var r = e.type || "unknown-event";
                (e.currentTarget = g(n)),
                    (function (e, t, n, r, o, i, a, d, h) {
                        if ((p.apply(this, arguments), u)) {
                            if (!u) throw Error(l(198));
                            var m = s;
                            (u = !1), (s = null), c || ((c = !0), (f = m));
                        }
                    })(r, t, void 0, e),
                    (e.currentTarget = null);
            }
            var y = null,
                b = {};
            function w() {
                if (y)
                    for (var e in b) {
                        var t = b[e],
                            n = y.indexOf(e);
                        if (!(-1 < n)) throw Error(l(96, e));
                        if (!x[n]) {
                            if (!t.extractEvents) throw Error(l(97, e));
                            for (var r in ((x[n] = t), (n = t.eventTypes))) {
                                var o = void 0,
                                    i = n[r],
                                    a = t,
                                    u = r;
                                if (k.hasOwnProperty(u)) throw Error(l(99, u));
                                k[u] = i;
                                var s = i.phasedRegistrationNames;
                                if (s) {
                                    for (o in s) s.hasOwnProperty(o) && E(s[o], a, u);
                                    o = !0;
                                } else i.registrationName ? (E(i.registrationName, a, u), (o = !0)) : (o = !1);
                                if (!o) throw Error(l(98, r, e));
                            }
                        }
                    }
            }
            function E(e, t, n) {
                if (C[e]) throw Error(l(100, e));
                (C[e] = t), (S[e] = t.eventTypes[n].dependencies);
            }
            var x = [],
                k = {},
                C = {},
                S = {};
            function T(e) {
                var t,
                    n = !1;
                for (t in e)
                    if (e.hasOwnProperty(t)) {
                        var r = e[t];
                        if (!b.hasOwnProperty(t) || b[t] !== r) {
                            if (b[t]) throw Error(l(102, t));
                            (b[t] = r), (n = !0);
                        }
                    }
                n && w();
            }
            var _ = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
                P = null,
                N = null,
                O = null;
            function L(e) {
                if ((e = m(e))) {
                    if ("function" != typeof P) throw Error(l(280));
                    var t = e.stateNode;
                    t && ((t = h(t)), P(e.stateNode, e.type, t));
                }
            }
            function M(e) {
                N ? (O ? O.push(e) : (O = [e])) : (N = e);
            }
            function R() {
                if (N) {
                    var e = N,
                        t = O;
                    if (((O = N = null), L(e), t)) for (e = 0; e < t.length; e++) L(t[e]);
                }
            }
            function I(e, t) {
                return e(t);
            }
            function z(e, t, n, r, o) {
                return e(t, n, r, o);
            }
            function D() {}
            var F = I,
                A = !1,
                B = !1;
            function U() {
                (null === N && null === O) || (D(), R());
            }
            function j(e, t, n) {
                if (B) return e(t, n);
                B = !0;
                try {
                    return F(e, t, n);
                } finally {
                    (B = !1), U();
                }
            }
            var V = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                H = Object.prototype.hasOwnProperty,
                W = {},
                Q = {};
            function Z(e, t, n, r, o, i) {
                (this.acceptsBooleans = 2 === t || 3 === t || 4 === t), (this.attributeName = r), (this.attributeNamespace = o), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = i);
            }
            var $ = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
                $[e] = new Z(e, 0, !1, e, null, !1);
            }),
                [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"],
                ].forEach(function (e) {
                    var t = e[0];
                    $[t] = new Z(t, 1, !1, e[1], null, !1);
                }),
                ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
                    $[e] = new Z(e, 2, !1, e.toLowerCase(), null, !1);
                }),
                ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
                    $[e] = new Z(e, 2, !1, e, null, !1);
                }),
                "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
                    .split(" ")
                    .forEach(function (e) {
                        $[e] = new Z(e, 3, !1, e.toLowerCase(), null, !1);
                    }),
                ["checked", "multiple", "muted", "selected"].forEach(function (e) {
                    $[e] = new Z(e, 3, !0, e, null, !1);
                }),
                ["capture", "download"].forEach(function (e) {
                    $[e] = new Z(e, 4, !1, e, null, !1);
                }),
                ["cols", "rows", "size", "span"].forEach(function (e) {
                    $[e] = new Z(e, 6, !1, e, null, !1);
                }),
                ["rowSpan", "start"].forEach(function (e) {
                    $[e] = new Z(e, 5, !1, e.toLowerCase(), null, !1);
                });
            var G = /[\-:]([a-z])/g;
            function K(e) {
                return e[1].toUpperCase();
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
                .split(" ")
                .forEach(function (e) {
                    var t = e.replace(G, K);
                    $[t] = new Z(t, 1, !1, e, null, !1);
                }),
                "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
                    var t = e.replace(G, K);
                    $[t] = new Z(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
                }),
                ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
                    var t = e.replace(G, K);
                    $[t] = new Z(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
                }),
                ["tabIndex", "crossOrigin"].forEach(function (e) {
                    $[e] = new Z(e, 1, !1, e.toLowerCase(), null, !1);
                }),
                ($.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0)),
                ["src", "href", "action", "formAction"].forEach(function (e) {
                    $[e] = new Z(e, 1, !1, e.toLowerCase(), null, !0);
                });
            var q = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            function Y(e, t, n, r) {
                var o = $.hasOwnProperty(t) ? $[t] : null;
                (null !== o ? 0 === o.type : !r && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) ||
                    ((function (e, t, n, r) {
                        if (
                            null == t ||
                            (function (e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1;
                                }
                            })(e, t, n, r)
                        )
                            return !0;
                        if (r) return !1;
                        if (null !== n)
                            switch (n.type) {
                                case 3:
                                    return !t;
                                case 4:
                                    return !1 === t;
                                case 5:
                                    return isNaN(t);
                                case 6:
                                    return isNaN(t) || 1 > t;
                            }
                        return !1;
                    })(t, n, o, r) && (n = null),
                    r || null === o
                        ? (function (e) {
                              return !!H.call(Q, e) || (!H.call(W, e) && (V.test(e) ? (Q[e] = !0) : ((W[e] = !0), !1)));
                          })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
                        : o.mustUseProperty
                        ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
                        : ((t = o.attributeName), (r = o.attributeNamespace), null === n ? e.removeAttribute(t) : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
            }
            q.hasOwnProperty("ReactCurrentDispatcher") || (q.ReactCurrentDispatcher = { current: null }), q.hasOwnProperty("ReactCurrentBatchConfig") || (q.ReactCurrentBatchConfig = { suspense: null });
            var X = /^(.*)[\\\/]/,
                J = "function" == typeof Symbol && Symbol.for,
                ee = J ? Symbol.for("react.element") : 60103,
                te = J ? Symbol.for("react.portal") : 60106,
                ne = J ? Symbol.for("react.fragment") : 60107,
                re = J ? Symbol.for("react.strict_mode") : 60108,
                oe = J ? Symbol.for("react.profiler") : 60114,
                ie = J ? Symbol.for("react.provider") : 60109,
                le = J ? Symbol.for("react.context") : 60110,
                ae = J ? Symbol.for("react.concurrent_mode") : 60111,
                ue = J ? Symbol.for("react.forward_ref") : 60112,
                se = J ? Symbol.for("react.suspense") : 60113,
                ce = J ? Symbol.for("react.suspense_list") : 60120,
                fe = J ? Symbol.for("react.memo") : 60115,
                de = J ? Symbol.for("react.lazy") : 60116,
                pe = J ? Symbol.for("react.block") : 60121,
                he = "function" == typeof Symbol && Symbol.iterator;
            function me(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof (e = (he && e[he]) || e["@@iterator"]) ? e : null;
            }
            function ge(e) {
                if (null == e) return null;
                if ("function" == typeof e) return e.displayName || e.name || null;
                if ("string" == typeof e) return e;
                switch (e) {
                    case ne:
                        return "Fragment";
                    case te:
                        return "Portal";
                    case oe:
                        return "Profiler";
                    case re:
                        return "StrictMode";
                    case se:
                        return "Suspense";
                    case ce:
                        return "SuspenseList";
                }
                if ("object" == typeof e)
                    switch (e.$$typeof) {
                        case le:
                            return "Context.Consumer";
                        case ie:
                            return "Context.Provider";
                        case ue:
                            var t = e.render;
                            return (t = t.displayName || t.name || ""), e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                        case fe:
                            return ge(e.type);
                        case pe:
                            return ge(e.render);
                        case de:
                            if ((e = 1 === e._status ? e._result : null)) return ge(e);
                    }
                return null;
            }
            function ve(e) {
                var t = "";
                do {
                    e: switch (e.tag) {
                        case 3:
                        case 4:
                        case 6:
                        case 7:
                        case 10:
                        case 9:
                            var n = "";
                            break e;
                        default:
                            var r = e._debugOwner,
                                o = e._debugSource,
                                i = ge(e.type);
                            (n = null), r && (n = ge(r.type)), (r = i), (i = ""), o ? (i = " (at " + o.fileName.replace(X, "") + ":" + o.lineNumber + ")") : n && (i = " (created by " + n + ")"), (n = "\n    in " + (r || "Unknown") + i);
                    }
                    (t += n), (e = e.return);
                } while (e);
                return t;
            }
            function ye(e) {
                switch (typeof e) {
                    case "boolean":
                    case "number":
                    case "object":
                    case "string":
                    case "undefined":
                        return e;
                    default:
                        return "";
                }
            }
            function be(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
            }
            function we(e) {
                e._valueTracker ||
                    (e._valueTracker = (function (e) {
                        var t = be(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                            var o = n.get,
                                i = n.set;
                            return (
                                Object.defineProperty(e, t, {
                                    configurable: !0,
                                    get: function () {
                                        return o.call(this);
                                    },
                                    set: function (e) {
                                        (r = "" + e), i.call(this, e);
                                    },
                                }),
                                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                                {
                                    getValue: function () {
                                        return r;
                                    },
                                    setValue: function (e) {
                                        r = "" + e;
                                    },
                                    stopTracking: function () {
                                        (e._valueTracker = null), delete e[t];
                                    },
                                }
                            );
                        }
                    })(e));
            }
            function Ee(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(),
                    r = "";
                return e && (r = be(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
            }
            function xe(e, t) {
                var n = t.checked;
                return o({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked });
            }
            function ke(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue,
                    r = null != t.checked ? t.checked : t.defaultChecked;
                (n = ye(null != t.value ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value });
            }
            function Ce(e, t) {
                null != (t = t.checked) && Y(e, "checked", t, !1);
            }
            function Se(e, t) {
                Ce(e, t);
                var n = ye(t.value),
                    r = t.type;
                if (null != n) "number" === r ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? _e(e, t.type, n) : t.hasOwnProperty("defaultValue") && _e(e, t.type, ye(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
            }
            function Te(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!(("submit" !== r && "reset" !== r) || (void 0 !== t.value && null !== t.value))) return;
                    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
                }
                "" !== (n = e.name) && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), "" !== n && (e.name = n);
            }
            function _e(e, t, n) {
                ("number" === t && e.ownerDocument.activeElement === e) || (null == n ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
            }
            function Pe(e, t) {
                return (
                    (e = o({ children: void 0 }, t)),
                    (t = (function (e) {
                        var t = "";
                        return (
                            r.Children.forEach(e, function (e) {
                                null != e && (t += e);
                            }),
                            t
                        );
                    })(t.children)) && (e.children = t),
                    e
                );
            }
            function Ne(e, t, n, r) {
                if (((e = e.options), t)) {
                    t = {};
                    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
                    for (n = 0; n < e.length; n++) (o = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
                } else {
                    for (n = "" + ye(n), t = null, o = 0; o < e.length; o++) {
                        if (e[o].value === n) return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
                        null !== t || e[o].disabled || (t = e[o]);
                    }
                    null !== t && (t.selected = !0);
                }
            }
            function Oe(e, t) {
                if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
                return o({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
            }
            function Le(e, t) {
                var n = t.value;
                if (null == n) {
                    if (((n = t.children), (t = t.defaultValue), null != n)) {
                        if (null != t) throw Error(l(92));
                        if (Array.isArray(n)) {
                            if (!(1 >= n.length)) throw Error(l(93));
                            n = n[0];
                        }
                        t = n;
                    }
                    null == t && (t = ""), (n = t);
                }
                e._wrapperState = { initialValue: ye(n) };
            }
            function Me(e, t) {
                var n = ye(t.value),
                    r = ye(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r);
            }
            function Re(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
            }
            var Ie = "http://www.w3.org/1999/xhtml",
                ze = "http://www.w3.org/2000/svg";
            function De(e) {
                switch (e) {
                    case "svg":
                        return "http://www.w3.org/2000/svg";
                    case "math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml";
                }
            }
            function Fe(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? De(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e;
            }
            var Ae,
                Be = (function (e) {
                    return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
                        ? function (t, n, r, o) {
                              MSApp.execUnsafeLocalFunction(function () {
                                  return e(t, n);
                              });
                          }
                        : e;
                })(function (e, t) {
                    if (e.namespaceURI !== ze || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((Ae = Ae || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ae.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
                        for (; t.firstChild; ) e.appendChild(t.firstChild);
                    }
                });
            function Ue(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
                }
                e.textContent = t;
            }
            function je(e, t) {
                var n = {};
                return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
            }
            var Ve = { animationend: je("Animation", "AnimationEnd"), animationiteration: je("Animation", "AnimationIteration"), animationstart: je("Animation", "AnimationStart"), transitionend: je("Transition", "TransitionEnd") },
                He = {},
                We = {};
            function Qe(e) {
                if (He[e]) return He[e];
                if (!Ve[e]) return e;
                var t,
                    n = Ve[e];
                for (t in n) if (n.hasOwnProperty(t) && t in We) return (He[e] = n[t]);
                return e;
            }
            _ &&
                ((We = document.createElement("div").style),
                "AnimationEvent" in window || (delete Ve.animationend.animation, delete Ve.animationiteration.animation, delete Ve.animationstart.animation),
                "TransitionEvent" in window || delete Ve.transitionend.transition);
            var Ze = Qe("animationend"),
                $e = Qe("animationiteration"),
                Ge = Qe("animationstart"),
                Ke = Qe("transitionend"),
                qe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
                    " "
                ),
                Ye = new ("function" == typeof WeakMap ? WeakMap : Map)();
            function Xe(e) {
                var t = Ye.get(e);
                return void 0 === t && ((t = new Map()), Ye.set(e, t)), t;
            }
            function Je(e) {
                var t = e,
                    n = e;
                if (e.alternate) for (; t.return; ) t = t.return;
                else {
                    e = t;
                    do {
                        0 != (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
                    } while (e);
                }
                return 3 === t.tag ? n : null;
            }
            function et(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
                }
                return null;
            }
            function tt(e) {
                if (Je(e) !== e) throw Error(l(188));
            }
            function nt(e) {
                if (
                    !(e = (function (e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = Je(e))) throw Error(l(188));
                            return t !== e ? null : e;
                        }
                        for (var n = e, r = t; ; ) {
                            var o = n.return;
                            if (null === o) break;
                            var i = o.alternate;
                            if (null === i) {
                                if (null !== (r = o.return)) {
                                    n = r;
                                    continue;
                                }
                                break;
                            }
                            if (o.child === i.child) {
                                for (i = o.child; i; ) {
                                    if (i === n) return tt(o), e;
                                    if (i === r) return tt(o), t;
                                    i = i.sibling;
                                }
                                throw Error(l(188));
                            }
                            if (n.return !== r.return) (n = o), (r = i);
                            else {
                                for (var a = !1, u = o.child; u; ) {
                                    if (u === n) {
                                        (a = !0), (n = o), (r = i);
                                        break;
                                    }
                                    if (u === r) {
                                        (a = !0), (r = o), (n = i);
                                        break;
                                    }
                                    u = u.sibling;
                                }
                                if (!a) {
                                    for (u = i.child; u; ) {
                                        if (u === n) {
                                            (a = !0), (n = i), (r = o);
                                            break;
                                        }
                                        if (u === r) {
                                            (a = !0), (r = i), (n = o);
                                            break;
                                        }
                                        u = u.sibling;
                                    }
                                    if (!a) throw Error(l(189));
                                }
                            }
                            if (n.alternate !== r) throw Error(l(190));
                        }
                        if (3 !== n.tag) throw Error(l(188));
                        return n.stateNode.current === n ? e : t;
                    })(e))
                )
                    return null;
                for (var t = e; ; ) {
                    if (5 === t.tag || 6 === t.tag) return t;
                    if (t.child) (t.child.return = t), (t = t.child);
                    else {
                        if (t === e) break;
                        for (; !t.sibling; ) {
                            if (!t.return || t.return === e) return null;
                            t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                    }
                }
                return null;
            }
            function rt(e, t) {
                if (null == t) throw Error(l(30));
                return null == e ? t : Array.isArray(e) ? (Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e)) : Array.isArray(t) ? [e].concat(t) : [e, t];
            }
            function ot(e, t, n) {
                Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
            }
            var it = null;
            function lt(e) {
                if (e) {
                    var t = e._dispatchListeners,
                        n = e._dispatchInstances;
                    if (Array.isArray(t)) for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) v(e, t[r], n[r]);
                    else t && v(e, t, n);
                    (e._dispatchListeners = null), (e._dispatchInstances = null), e.isPersistent() || e.constructor.release(e);
                }
            }
            function at(e) {
                if ((null !== e && (it = rt(it, e)), (e = it), (it = null), e)) {
                    if ((ot(e, lt), it)) throw Error(l(95));
                    if (c) throw ((e = f), (c = !1), (f = null), e);
                }
            }
            function ut(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
            }
            function st(e) {
                if (!_) return !1;
                var t = (e = "on" + e) in document;
                return t || ((t = document.createElement("div")).setAttribute(e, "return;"), (t = "function" == typeof t[e])), t;
            }
            var ct = [];
            function ft(e) {
                (e.topLevelType = null), (e.nativeEvent = null), (e.targetInst = null), (e.ancestors.length = 0), 10 > ct.length && ct.push(e);
            }
            function dt(e, t, n, r) {
                if (ct.length) {
                    var o = ct.pop();
                    return (o.topLevelType = e), (o.eventSystemFlags = r), (o.nativeEvent = t), (o.targetInst = n), o;
                }
                return { topLevelType: e, eventSystemFlags: r, nativeEvent: t, targetInst: n, ancestors: [] };
            }
            function pt(e) {
                var t = e.targetInst,
                    n = t;
                do {
                    if (!n) {
                        e.ancestors.push(n);
                        break;
                    }
                    var r = n;
                    if (3 === r.tag) r = r.stateNode.containerInfo;
                    else {
                        for (; r.return; ) r = r.return;
                        r = 3 !== r.tag ? null : r.stateNode.containerInfo;
                    }
                    if (!r) break;
                    (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = _n(r));
                } while (n);
                for (n = 0; n < e.ancestors.length; n++) {
                    t = e.ancestors[n];
                    var o = ut(e.nativeEvent);
                    r = e.topLevelType;
                    var i = e.nativeEvent,
                        l = e.eventSystemFlags;
                    0 === n && (l |= 64);
                    for (var a = null, u = 0; u < x.length; u++) {
                        var s = x[u];
                        s && (s = s.extractEvents(r, t, i, o, l)) && (a = rt(a, s));
                    }
                    at(a);
                }
            }
            function ht(e, t, n) {
                if (!n.has(e)) {
                    switch (e) {
                        case "scroll":
                            Gt(t, "scroll", !0);
                            break;
                        case "focus":
                        case "blur":
                            Gt(t, "focus", !0), Gt(t, "blur", !0), n.set("blur", null), n.set("focus", null);
                            break;
                        case "cancel":
                        case "close":
                            st(e) && Gt(t, e, !0);
                            break;
                        case "invalid":
                        case "submit":
                        case "reset":
                            break;
                        default:
                            -1 === qe.indexOf(e) && $t(e, t);
                    }
                    n.set(e, null);
                }
            }
            var mt,
                gt,
                vt,
                yt = !1,
                bt = [],
                wt = null,
                Et = null,
                xt = null,
                kt = new Map(),
                Ct = new Map(),
                St = [],
                Tt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
                    " "
                ),
                _t = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
            function Pt(e, t, n, r, o) {
                return { blockedOn: e, topLevelType: t, eventSystemFlags: 32 | n, nativeEvent: o, container: r };
            }
            function Nt(e, t) {
                switch (e) {
                    case "focus":
                    case "blur":
                        wt = null;
                        break;
                    case "dragenter":
                    case "dragleave":
                        Et = null;
                        break;
                    case "mouseover":
                    case "mouseout":
                        xt = null;
                        break;
                    case "pointerover":
                    case "pointerout":
                        kt.delete(t.pointerId);
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                        Ct.delete(t.pointerId);
                }
            }
            function Ot(e, t, n, r, o, i) {
                return null === e || e.nativeEvent !== i ? ((e = Pt(t, n, r, o, i)), null !== t && null !== (t = Pn(t)) && gt(t), e) : ((e.eventSystemFlags |= r), e);
            }
            function Lt(e) {
                var t = _n(e.target);
                if (null !== t) {
                    var n = Je(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = et(n)))
                                return (
                                    (e.blockedOn = t),
                                    void i.unstable_runWithPriority(e.priority, function () {
                                        vt(n);
                                    })
                                );
                        } else if (3 === t && n.stateNode.hydrate) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
                }
                e.blockedOn = null;
            }
            function Mt(e) {
                if (null !== e.blockedOn) return !1;
                var t = Xt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
                if (null !== t) {
                    var n = Pn(t);
                    return null !== n && gt(n), (e.blockedOn = t), !1;
                }
                return !0;
            }
            function Rt(e, t, n) {
                Mt(e) && n.delete(t);
            }
            function It() {
                for (yt = !1; 0 < bt.length; ) {
                    var e = bt[0];
                    if (null !== e.blockedOn) {
                        null !== (e = Pn(e.blockedOn)) && mt(e);
                        break;
                    }
                    var t = Xt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
                    null !== t ? (e.blockedOn = t) : bt.shift();
                }
                null !== wt && Mt(wt) && (wt = null), null !== Et && Mt(Et) && (Et = null), null !== xt && Mt(xt) && (xt = null), kt.forEach(Rt), Ct.forEach(Rt);
            }
            function zt(e, t) {
                e.blockedOn === t && ((e.blockedOn = null), yt || ((yt = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, It)));
            }
            function Dt(e) {
                function t(t) {
                    return zt(t, e);
                }
                if (0 < bt.length) {
                    zt(bt[0], e);
                    for (var n = 1; n < bt.length; n++) {
                        var r = bt[n];
                        r.blockedOn === e && (r.blockedOn = null);
                    }
                }
                for (null !== wt && zt(wt, e), null !== Et && zt(Et, e), null !== xt && zt(xt, e), kt.forEach(t), Ct.forEach(t), n = 0; n < St.length; n++) (r = St[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < St.length && null === (n = St[0]).blockedOn; ) Lt(n), null === n.blockedOn && St.shift();
            }
            var Ft = {},
                At = new Map(),
                Bt = new Map(),
                Ut = [
                    "abort",
                    "abort",
                    Ze,
                    "animationEnd",
                    $e,
                    "animationIteration",
                    Ge,
                    "animationStart",
                    "canplay",
                    "canPlay",
                    "canplaythrough",
                    "canPlayThrough",
                    "durationchange",
                    "durationChange",
                    "emptied",
                    "emptied",
                    "encrypted",
                    "encrypted",
                    "ended",
                    "ended",
                    "error",
                    "error",
                    "gotpointercapture",
                    "gotPointerCapture",
                    "load",
                    "load",
                    "loadeddata",
                    "loadedData",
                    "loadedmetadata",
                    "loadedMetadata",
                    "loadstart",
                    "loadStart",
                    "lostpointercapture",
                    "lostPointerCapture",
                    "playing",
                    "playing",
                    "progress",
                    "progress",
                    "seeking",
                    "seeking",
                    "stalled",
                    "stalled",
                    "suspend",
                    "suspend",
                    "timeupdate",
                    "timeUpdate",
                    Ke,
                    "transitionEnd",
                    "waiting",
                    "waiting",
                ];
            function jt(e, t) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n],
                        o = e[n + 1],
                        i = "on" + (o[0].toUpperCase() + o.slice(1));
                    (i = { phasedRegistrationNames: { bubbled: i, captured: i + "Capture" }, dependencies: [r], eventPriority: t }), Bt.set(r, t), At.set(r, i), (Ft[o] = i);
                }
            }
            jt(
                "blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
                    " "
                ),
                0
            ),
                jt(
                    "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
                        " "
                    ),
                    1
                ),
                jt(Ut, 2);
            for (var Vt = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Ht = 0; Ht < Vt.length; Ht++) Bt.set(Vt[Ht], 0);
            var Wt = i.unstable_UserBlockingPriority,
                Qt = i.unstable_runWithPriority,
                Zt = !0;
            function $t(e, t) {
                Gt(t, e, !1);
            }
            function Gt(e, t, n) {
                var r = Bt.get(t);
                switch (void 0 === r ? 2 : r) {
                    case 0:
                        r = Kt.bind(null, t, 1, e);
                        break;
                    case 1:
                        r = qt.bind(null, t, 1, e);
                        break;
                    default:
                        r = Yt.bind(null, t, 1, e);
                }
                n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
            }
            function Kt(e, t, n, r) {
                A || D();
                var o = Yt,
                    i = A;
                A = !0;
                try {
                    z(o, e, t, n, r);
                } finally {
                    (A = i) || U();
                }
            }
            function qt(e, t, n, r) {
                Qt(Wt, Yt.bind(null, e, t, n, r));
            }
            function Yt(e, t, n, r) {
                if (Zt)
                    if (0 < bt.length && -1 < Tt.indexOf(e)) (e = Pt(null, e, t, n, r)), bt.push(e);
                    else {
                        var o = Xt(e, t, n, r);
                        if (null === o) Nt(e, r);
                        else if (-1 < Tt.indexOf(e)) (e = Pt(o, e, t, n, r)), bt.push(e);
                        else if (
                            !(function (e, t, n, r, o) {
                                switch (t) {
                                    case "focus":
                                        return (wt = Ot(wt, e, t, n, r, o)), !0;
                                    case "dragenter":
                                        return (Et = Ot(Et, e, t, n, r, o)), !0;
                                    case "mouseover":
                                        return (xt = Ot(xt, e, t, n, r, o)), !0;
                                    case "pointerover":
                                        var i = o.pointerId;
                                        return kt.set(i, Ot(kt.get(i) || null, e, t, n, r, o)), !0;
                                    case "gotpointercapture":
                                        return (i = o.pointerId), Ct.set(i, Ot(Ct.get(i) || null, e, t, n, r, o)), !0;
                                }
                                return !1;
                            })(o, e, t, n, r)
                        ) {
                            Nt(e, r), (e = dt(e, r, null, t));
                            try {
                                j(pt, e);
                            } finally {
                                ft(e);
                            }
                        }
                    }
            }
            function Xt(e, t, n, r) {
                if (null !== (n = _n((n = ut(r))))) {
                    var o = Je(n);
                    if (null === o) n = null;
                    else {
                        var i = o.tag;
                        if (13 === i) {
                            if (null !== (n = et(o))) return n;
                            n = null;
                        } else if (3 === i) {
                            if (o.stateNode.hydrate) return 3 === o.tag ? o.stateNode.containerInfo : null;
                            n = null;
                        } else o !== n && (n = null);
                    }
                }
                e = dt(e, r, n, t);
                try {
                    j(pt, e);
                } finally {
                    ft(e);
                }
                return null;
            }
            var Jt = {
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
                    strokeWidth: !0,
                },
                en = ["Webkit", "ms", "Moz", "O"];
            function tn(e, t, n) {
                return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || (Jt.hasOwnProperty(e) && Jt[e]) ? ("" + t).trim() : t + "px";
            }
            function nn(e, t) {
                for (var n in ((e = e.style), t))
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--"),
                            o = tn(n, t[n], r);
                        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
                    }
            }
            Object.keys(Jt).forEach(function (e) {
                en.forEach(function (t) {
                    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jt[t] = Jt[e]);
                });
            });
            var rn = o({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
            function on(e, t) {
                if (t) {
                    if (rn[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(l(137, e, ""));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw Error(l(60));
                        if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
                    }
                    if (null != t.style && "object" != typeof t.style) throw Error(l(62, ""));
                }
            }
            function ln(e, t) {
                if (-1 === e.indexOf("-")) return "string" == typeof t.is;
                switch (e) {
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
            var an = Ie;
            function un(e, t) {
                var n = Xe((e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument));
                t = S[t];
                for (var r = 0; r < t.length; r++) ht(t[r], e, n);
            }
            function sn() {}
            function cn(e) {
                if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body;
                } catch (t) {
                    return e.body;
                }
            }
            function fn(e) {
                for (; e && e.firstChild; ) e = e.firstChild;
                return e;
            }
            function dn(e, t) {
                var n,
                    r = fn(e);
                for (e = 0; r; ) {
                    if (3 === r.nodeType) {
                        if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
                        e = n;
                    }
                    e: {
                        for (; r; ) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e;
                            }
                            r = r.parentNode;
                        }
                        r = void 0;
                    }
                    r = fn(r);
                }
            }
            function pn() {
                for (var e = window, t = cn(); t instanceof e.HTMLIFrameElement; ) {
                    try {
                        var n = "string" == typeof t.contentWindow.location.href;
                    } catch (e) {
                        n = !1;
                    }
                    if (!n) break;
                    t = cn((e = t.contentWindow).document);
                }
                return t;
            }
            function hn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && (("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) || "textarea" === t || "true" === e.contentEditable);
            }
            var mn = null,
                gn = null;
            function vn(e, t) {
                switch (e) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        return !!t.autoFocus;
                }
                return !1;
            }
            function yn(e, t) {
                return (
                    "textarea" === e ||
                    "option" === e ||
                    "noscript" === e ||
                    "string" == typeof t.children ||
                    "number" == typeof t.children ||
                    ("object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html)
                );
            }
            var bn = "function" == typeof setTimeout ? setTimeout : void 0,
                wn = "function" == typeof clearTimeout ? clearTimeout : void 0;
            function En(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break;
                }
                return e;
            }
            function xn(e) {
                e = e.previousSibling;
                for (var t = 0; e; ) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t) return e;
                            t--;
                        } else "/$" === n && t++;
                    }
                    e = e.previousSibling;
                }
                return null;
            }
            var kn = Math.random().toString(36).slice(2),
                Cn = "__reactInternalInstance$" + kn,
                Sn = "__reactEventHandlers$" + kn,
                Tn = "__reactContainere$" + kn;
            function _n(e) {
                var t = e[Cn];
                if (t) return t;
                for (var n = e.parentNode; n; ) {
                    if ((t = n[Tn] || n[Cn])) {
                        if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                            for (e = xn(e); null !== e; ) {
                                if ((n = e[Cn])) return n;
                                e = xn(e);
                            }
                        return t;
                    }
                    n = (e = n).parentNode;
                }
                return null;
            }
            function Pn(e) {
                return !(e = e[Cn] || e[Tn]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
            }
            function Nn(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw Error(l(33));
            }
            function On(e) {
                return e[Sn] || null;
            }
            function Ln(e) {
                do {
                    e = e.return;
                } while (e && 5 !== e.tag);
                return e || null;
            }
            function Mn(e, t) {
                var n = e.stateNode;
                if (!n) return null;
                var r = h(n);
                if (!r) return null;
                n = r[t];
                e: switch (t) {
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
                        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), (e = !r);
                        break e;
                    default:
                        e = !1;
                }
                if (e) return null;
                if (n && "function" != typeof n) throw Error(l(231, t, typeof n));
                return n;
            }
            function Rn(e, t, n) {
                (t = Mn(e, n.dispatchConfig.phasedRegistrationNames[t])) && ((n._dispatchListeners = rt(n._dispatchListeners, t)), (n._dispatchInstances = rt(n._dispatchInstances, e)));
            }
            function In(e) {
                if (e && e.dispatchConfig.phasedRegistrationNames) {
                    for (var t = e._targetInst, n = []; t; ) n.push(t), (t = Ln(t));
                    for (t = n.length; 0 < t--; ) Rn(n[t], "captured", e);
                    for (t = 0; t < n.length; t++) Rn(n[t], "bubbled", e);
                }
            }
            function zn(e, t, n) {
                e && n && n.dispatchConfig.registrationName && (t = Mn(e, n.dispatchConfig.registrationName)) && ((n._dispatchListeners = rt(n._dispatchListeners, t)), (n._dispatchInstances = rt(n._dispatchInstances, e)));
            }
            function Dn(e) {
                e && e.dispatchConfig.registrationName && zn(e._targetInst, null, e);
            }
            function Fn(e) {
                ot(e, In);
            }
            var An = null,
                Bn = null,
                Un = null;
            function jn() {
                if (Un) return Un;
                var e,
                    t,
                    n = Bn,
                    r = n.length,
                    o = "value" in An ? An.value : An.textContent,
                    i = o.length;
                for (e = 0; e < r && n[e] === o[e]; e++);
                var l = r - e;
                for (t = 1; t <= l && n[r - t] === o[i - t]; t++);
                return (Un = o.slice(e, 1 < t ? 1 - t : void 0));
            }
            function Vn() {
                return !0;
            }
            function Hn() {
                return !1;
            }
            function Wn(e, t, n, r) {
                for (var o in ((this.dispatchConfig = e), (this._targetInst = t), (this.nativeEvent = n), (e = this.constructor.Interface)))
                    e.hasOwnProperty(o) && ((t = e[o]) ? (this[o] = t(n)) : "target" === o ? (this.target = r) : (this[o] = n[o]));
                return (this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Vn : Hn), (this.isPropagationStopped = Hn), this;
            }
            function Qn(e, t, n, r) {
                if (this.eventPool.length) {
                    var o = this.eventPool.pop();
                    return this.call(o, e, t, n, r), o;
                }
                return new this(e, t, n, r);
            }
            function Zn(e) {
                if (!(e instanceof this)) throw Error(l(279));
                e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
            }
            function $n(e) {
                (e.eventPool = []), (e.getPooled = Qn), (e.release = Zn);
            }
            o(Wn.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), (this.isDefaultPrevented = Vn));
                },
                stopPropagation: function () {
                    var e = this.nativeEvent;
                    e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), (this.isPropagationStopped = Vn));
                },
                persist: function () {
                    this.isPersistent = Vn;
                },
                isPersistent: Hn,
                destructor: function () {
                    var e,
                        t = this.constructor.Interface;
                    for (e in t) this[e] = null;
                    (this.nativeEvent = this._targetInst = this.dispatchConfig = null), (this.isPropagationStopped = this.isDefaultPrevented = Hn), (this._dispatchInstances = this._dispatchListeners = null);
                },
            }),
                (Wn.Interface = {
                    type: null,
                    target: null,
                    currentTarget: function () {
                        return null;
                    },
                    eventPhase: null,
                    bubbles: null,
                    cancelable: null,
                    timeStamp: function (e) {
                        return e.timeStamp || Date.now();
                    },
                    defaultPrevented: null,
                    isTrusted: null,
                }),
                (Wn.extend = function (e) {
                    function t() {}
                    function n() {
                        return r.apply(this, arguments);
                    }
                    var r = this;
                    t.prototype = r.prototype;
                    var i = new t();
                    return o(i, n.prototype), (n.prototype = i), (n.prototype.constructor = n), (n.Interface = o({}, r.Interface, e)), (n.extend = r.extend), $n(n), n;
                }),
                $n(Wn);
            var Gn = Wn.extend({ data: null }),
                Kn = Wn.extend({ data: null }),
                qn = [9, 13, 27, 32],
                Yn = _ && "CompositionEvent" in window,
                Xn = null;
            _ && "documentMode" in document && (Xn = document.documentMode);
            var Jn = _ && "TextEvent" in window && !Xn,
                er = _ && (!Yn || (Xn && 8 < Xn && 11 >= Xn)),
                tr = String.fromCharCode(32),
                nr = {
                    beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] },
                    compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") },
                    compositionStart: { phasedRegistrationNames: { bubbled: "onCompositionStart", captured: "onCompositionStartCapture" }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") },
                    compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") },
                },
                rr = !1;
            function or(e, t) {
                switch (e) {
                    case "keyup":
                        return -1 !== qn.indexOf(t.keyCode);
                    case "keydown":
                        return 229 !== t.keyCode;
                    case "keypress":
                    case "mousedown":
                    case "blur":
                        return !0;
                    default:
                        return !1;
                }
            }
            function ir(e) {
                return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
            }
            var lr = !1;
            var ar = {
                    eventTypes: nr,
                    extractEvents: function (e, t, n, r) {
                        var o;
                        if (Yn)
                            e: {
                                switch (e) {
                                    case "compositionstart":
                                        var i = nr.compositionStart;
                                        break e;
                                    case "compositionend":
                                        i = nr.compositionEnd;
                                        break e;
                                    case "compositionupdate":
                                        i = nr.compositionUpdate;
                                        break e;
                                }
                                i = void 0;
                            }
                        else lr ? or(e, n) && (i = nr.compositionEnd) : "keydown" === e && 229 === n.keyCode && (i = nr.compositionStart);
                        return (
                            i
                                ? (er && "ko" !== n.locale && (lr || i !== nr.compositionStart ? i === nr.compositionEnd && lr && (o = jn()) : ((Bn = "value" in (An = r) ? An.value : An.textContent), (lr = !0))),
                                  (i = Gn.getPooled(i, t, n, r)),
                                  o ? (i.data = o) : null !== (o = ir(n)) && (i.data = o),
                                  Fn(i),
                                  (o = i))
                                : (o = null),
                            (e = Jn
                                ? (function (e, t) {
                                      switch (e) {
                                          case "compositionend":
                                              return ir(t);
                                          case "keypress":
                                              return 32 !== t.which ? null : ((rr = !0), tr);
                                          case "textInput":
                                              return (e = t.data) === tr && rr ? null : e;
                                          default:
                                              return null;
                                      }
                                  })(e, n)
                                : (function (e, t) {
                                      if (lr) return "compositionend" === e || (!Yn && or(e, t)) ? ((e = jn()), (Un = Bn = An = null), (lr = !1), e) : null;
                                      switch (e) {
                                          case "paste":
                                              return null;
                                          case "keypress":
                                              if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                                                  if (t.char && 1 < t.char.length) return t.char;
                                                  if (t.which) return String.fromCharCode(t.which);
                                              }
                                              return null;
                                          case "compositionend":
                                              return er && "ko" !== t.locale ? null : t.data;
                                          default:
                                              return null;
                                      }
                                  })(e, n))
                                ? (((t = Kn.getPooled(nr.beforeInput, t, n, r)).data = e), Fn(t))
                                : (t = null),
                            null === o ? t : null === t ? o : [o, t]
                        );
                    },
                },
                ur = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
            function sr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!ur[e.type] : "textarea" === t;
            }
            var cr = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };
            function fr(e, t, n) {
                return ((e = Wn.getPooled(cr.change, e, t, n)).type = "change"), M(n), Fn(e), e;
            }
            var dr = null,
                pr = null;
            function hr(e) {
                at(e);
            }
            function mr(e) {
                if (Ee(Nn(e))) return e;
            }
            function gr(e, t) {
                if ("change" === e) return t;
            }
            var vr = !1;
            function yr() {
                dr && (dr.detachEvent("onpropertychange", br), (pr = dr = null));
            }
            function br(e) {
                if ("value" === e.propertyName && mr(pr))
                    if (((e = fr(pr, e, ut(e))), A)) at(e);
                    else {
                        A = !0;
                        try {
                            I(hr, e);
                        } finally {
                            (A = !1), U();
                        }
                    }
            }
            function wr(e, t, n) {
                "focus" === e ? (yr(), (pr = n), (dr = t).attachEvent("onpropertychange", br)) : "blur" === e && yr();
            }
            function Er(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return mr(pr);
            }
            function xr(e, t) {
                if ("click" === e) return mr(t);
            }
            function kr(e, t) {
                if ("input" === e || "change" === e) return mr(t);
            }
            _ && (vr = st("input") && (!document.documentMode || 9 < document.documentMode));
            var Cr = {
                    eventTypes: cr,
                    _isInputEventSupported: vr,
                    extractEvents: function (e, t, n, r) {
                        var o = t ? Nn(t) : window,
                            i = o.nodeName && o.nodeName.toLowerCase();
                        if ("select" === i || ("input" === i && "file" === o.type)) var l = gr;
                        else if (sr(o))
                            if (vr) l = kr;
                            else {
                                l = Er;
                                var a = wr;
                            }
                        else (i = o.nodeName) && "input" === i.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (l = xr);
                        if (l && (l = l(e, t))) return fr(l, n, r);
                        a && a(e, o, t), "blur" === e && (e = o._wrapperState) && e.controlled && "number" === o.type && _e(o, "number", o.value);
                    },
                },
                Sr = Wn.extend({ view: null, detail: null }),
                Tr = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
            function _r(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = Tr[e]) && !!t[e];
            }
            function Pr() {
                return _r;
            }
            var Nr = 0,
                Or = 0,
                Lr = !1,
                Mr = !1,
                Rr = Sr.extend({
                    screenX: null,
                    screenY: null,
                    clientX: null,
                    clientY: null,
                    pageX: null,
                    pageY: null,
                    ctrlKey: null,
                    shiftKey: null,
                    altKey: null,
                    metaKey: null,
                    getModifierState: Pr,
                    button: null,
                    buttons: null,
                    relatedTarget: function (e) {
                        return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
                    },
                    movementX: function (e) {
                        if ("movementX" in e) return e.movementX;
                        var t = Nr;
                        return (Nr = e.screenX), Lr ? ("mousemove" === e.type ? e.screenX - t : 0) : ((Lr = !0), 0);
                    },
                    movementY: function (e) {
                        if ("movementY" in e) return e.movementY;
                        var t = Or;
                        return (Or = e.screenY), Mr ? ("mousemove" === e.type ? e.screenY - t : 0) : ((Mr = !0), 0);
                    },
                }),
                Ir = Rr.extend({ pointerId: null, width: null, height: null, pressure: null, tangentialPressure: null, tiltX: null, tiltY: null, twist: null, pointerType: null, isPrimary: null }),
                zr = {
                    mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] },
                    mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] },
                    pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] },
                    pointerLeave: { registrationName: "onPointerLeave", dependencies: ["pointerout", "pointerover"] },
                },
                Dr = {
                    eventTypes: zr,
                    extractEvents: function (e, t, n, r, o) {
                        var i = "mouseover" === e || "pointerover" === e,
                            l = "mouseout" === e || "pointerout" === e;
                        if ((i && 0 == (32 & o) && (n.relatedTarget || n.fromElement)) || (!l && !i)) return null;
                        ((i = r.window === r ? r : (i = r.ownerDocument) ? i.defaultView || i.parentWindow : window), l)
                            ? ((l = t), null !== (t = (t = n.relatedTarget || n.toElement) ? _n(t) : null) && (t !== Je(t) || (5 !== t.tag && 6 !== t.tag)) && (t = null))
                            : (l = null);
                        if (l === t) return null;
                        if ("mouseout" === e || "mouseover" === e)
                            var a = Rr,
                                u = zr.mouseLeave,
                                s = zr.mouseEnter,
                                c = "mouse";
                        else ("pointerout" !== e && "pointerover" !== e) || ((a = Ir), (u = zr.pointerLeave), (s = zr.pointerEnter), (c = "pointer"));
                        if (
                            ((e = null == l ? i : Nn(l)),
                            (i = null == t ? i : Nn(t)),
                            ((u = a.getPooled(u, l, n, r)).type = c + "leave"),
                            (u.target = e),
                            (u.relatedTarget = i),
                            ((n = a.getPooled(s, t, n, r)).type = c + "enter"),
                            (n.target = i),
                            (n.relatedTarget = e),
                            (c = t),
                            (r = l) && c)
                        )
                            e: {
                                for (s = c, l = 0, e = a = r; e; e = Ln(e)) l++;
                                for (e = 0, t = s; t; t = Ln(t)) e++;
                                for (; 0 < l - e; ) (a = Ln(a)), l--;
                                for (; 0 < e - l; ) (s = Ln(s)), e--;
                                for (; l--; ) {
                                    if (a === s || a === s.alternate) break e;
                                    (a = Ln(a)), (s = Ln(s));
                                }
                                a = null;
                            }
                        else a = null;
                        for (s = a, a = []; r && r !== s && (null === (l = r.alternate) || l !== s); ) a.push(r), (r = Ln(r));
                        for (r = []; c && c !== s && (null === (l = c.alternate) || l !== s); ) r.push(c), (c = Ln(c));
                        for (c = 0; c < a.length; c++) zn(a[c], "bubbled", u);
                        for (c = r.length; 0 < c--; ) zn(r[c], "captured", n);
                        return 0 == (64 & o) ? [u] : [u, n];
                    },
                };
            var Fr =
                    "function" == typeof Object.is
                        ? Object.is
                        : function (e, t) {
                              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                          },
                Ar = Object.prototype.hasOwnProperty;
            function Br(e, t) {
                if (Fr(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++) if (!Ar.call(t, n[r]) || !Fr(e[n[r]], t[n[r]])) return !1;
                return !0;
            }
            var Ur = _ && "documentMode" in document && 11 >= document.documentMode,
                jr = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ") } },
                Vr = null,
                Hr = null,
                Wr = null,
                Qr = !1;
            function Zr(e, t) {
                var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
                return Qr || null == Vr || Vr !== cn(n)
                    ? null
                    : ("selectionStart" in (n = Vr) && hn(n)
                          ? (n = { start: n.selectionStart, end: n.selectionEnd })
                          : (n = { anchorNode: (n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()).anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }),
                      Wr && Br(Wr, n) ? null : ((Wr = n), ((e = Wn.getPooled(jr.select, Hr, e, t)).type = "select"), (e.target = Vr), Fn(e), e));
            }
            var $r = {
                    eventTypes: jr,
                    extractEvents: function (e, t, n, r, o, i) {
                        if (!(i = !(o = i || (r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument)))) {
                            e: {
                                (o = Xe(o)), (i = S.onSelect);
                                for (var l = 0; l < i.length; l++)
                                    if (!o.has(i[l])) {
                                        o = !1;
                                        break e;
                                    }
                                o = !0;
                            }
                            i = !o;
                        }
                        if (i) return null;
                        switch (((o = t ? Nn(t) : window), e)) {
                            case "focus":
                                (sr(o) || "true" === o.contentEditable) && ((Vr = o), (Hr = t), (Wr = null));
                                break;
                            case "blur":
                                Wr = Hr = Vr = null;
                                break;
                            case "mousedown":
                                Qr = !0;
                                break;
                            case "contextmenu":
                            case "mouseup":
                            case "dragend":
                                return (Qr = !1), Zr(n, r);
                            case "selectionchange":
                                if (Ur) break;
                            case "keydown":
                            case "keyup":
                                return Zr(n, r);
                        }
                        return null;
                    },
                },
                Gr = Wn.extend({ animationName: null, elapsedTime: null, pseudoElement: null }),
                Kr = Wn.extend({
                    clipboardData: function (e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
                    },
                }),
                qr = Sr.extend({ relatedTarget: null });
            function Yr(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
            }
            var Xr = {
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
                    MozPrintableKey: "Unidentified",
                },
                Jr = {
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
                    224: "Meta",
                },
                eo = Sr.extend({
                    key: function (e) {
                        if (e.key) {
                            var t = Xr[e.key] || e.key;
                            if ("Unidentified" !== t) return t;
                        }
                        return "keypress" === e.type ? (13 === (e = Yr(e)) ? "Enter" : String.fromCharCode(e)) : "keydown" === e.type || "keyup" === e.type ? Jr[e.keyCode] || "Unidentified" : "";
                    },
                    location: null,
                    ctrlKey: null,
                    shiftKey: null,
                    altKey: null,
                    metaKey: null,
                    repeat: null,
                    locale: null,
                    getModifierState: Pr,
                    charCode: function (e) {
                        return "keypress" === e.type ? Yr(e) : 0;
                    },
                    keyCode: function (e) {
                        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                    },
                    which: function (e) {
                        return "keypress" === e.type ? Yr(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                    },
                }),
                to = Rr.extend({ dataTransfer: null }),
                no = Sr.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: Pr }),
                ro = Wn.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }),
                oo = Rr.extend({
                    deltaX: function (e) {
                        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
                    },
                    deltaY: function (e) {
                        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
                    },
                    deltaZ: null,
                    deltaMode: null,
                }),
                io = {
                    eventTypes: Ft,
                    extractEvents: function (e, t, n, r) {
                        var o = At.get(e);
                        if (!o) return null;
                        switch (e) {
                            case "keypress":
                                if (0 === Yr(n)) return null;
                            case "keydown":
                            case "keyup":
                                e = eo;
                                break;
                            case "blur":
                            case "focus":
                                e = qr;
                                break;
                            case "click":
                                if (2 === n.button) return null;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                e = Rr;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                e = to;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                e = no;
                                break;
                            case Ze:
                            case $e:
                            case Ge:
                                e = Gr;
                                break;
                            case Ke:
                                e = ro;
                                break;
                            case "scroll":
                                e = Sr;
                                break;
                            case "wheel":
                                e = oo;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                e = Kr;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                e = Ir;
                                break;
                            default:
                                e = Wn;
                        }
                        return Fn((t = e.getPooled(o, t, n, r))), t;
                    },
                };
            if (y) throw Error(l(101));
            (y = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "))),
                w(),
                (h = On),
                (m = Pn),
                (g = Nn),
                T({ SimpleEventPlugin: io, EnterLeaveEventPlugin: Dr, ChangeEventPlugin: Cr, SelectEventPlugin: $r, BeforeInputEventPlugin: ar });
            var lo = [],
                ao = -1;
            function uo(e) {
                0 > ao || ((e.current = lo[ao]), (lo[ao] = null), ao--);
            }
            function so(e, t) {
                ao++, (lo[ao] = e.current), (e.current = t);
            }
            var co = {},
                fo = { current: co },
                po = { current: !1 },
                ho = co;
            function mo(e, t) {
                var n = e.type.contextTypes;
                if (!n) return co;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                var o,
                    i = {};
                for (o in n) i[o] = t[o];
                return r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i;
            }
            function go(e) {
                return null != (e = e.childContextTypes);
            }
            function vo() {
                uo(po), uo(fo);
            }
            function yo(e, t, n) {
                if (fo.current !== co) throw Error(l(168));
                so(fo, t), so(po, n);
            }
            function bo(e, t, n) {
                var r = e.stateNode;
                if (((e = t.childContextTypes), "function" != typeof r.getChildContext)) return n;
                for (var i in (r = r.getChildContext())) if (!(i in e)) throw Error(l(108, ge(t) || "Unknown", i));
                return o({}, n, {}, r);
            }
            function wo(e) {
                return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || co), (ho = fo.current), so(fo, e), so(po, po.current), !0;
            }
            function Eo(e, t, n) {
                var r = e.stateNode;
                if (!r) throw Error(l(169));
                n ? ((e = bo(e, t, ho)), (r.__reactInternalMemoizedMergedChildContext = e), uo(po), uo(fo), so(fo, e)) : uo(po), so(po, n);
            }
            var xo = i.unstable_runWithPriority,
                ko = i.unstable_scheduleCallback,
                Co = i.unstable_cancelCallback,
                So = i.unstable_requestPaint,
                To = i.unstable_now,
                _o = i.unstable_getCurrentPriorityLevel,
                Po = i.unstable_ImmediatePriority,
                No = i.unstable_UserBlockingPriority,
                Oo = i.unstable_NormalPriority,
                Lo = i.unstable_LowPriority,
                Mo = i.unstable_IdlePriority,
                Ro = {},
                Io = i.unstable_shouldYield,
                zo = void 0 !== So ? So : function () {},
                Do = null,
                Fo = null,
                Ao = !1,
                Bo = To(),
                Uo =
                    1e4 > Bo
                        ? To
                        : function () {
                              return To() - Bo;
                          };
            function jo() {
                switch (_o()) {
                    case Po:
                        return 99;
                    case No:
                        return 98;
                    case Oo:
                        return 97;
                    case Lo:
                        return 96;
                    case Mo:
                        return 95;
                    default:
                        throw Error(l(332));
                }
            }
            function Vo(e) {
                switch (e) {
                    case 99:
                        return Po;
                    case 98:
                        return No;
                    case 97:
                        return Oo;
                    case 96:
                        return Lo;
                    case 95:
                        return Mo;
                    default:
                        throw Error(l(332));
                }
            }
            function Ho(e, t) {
                return (e = Vo(e)), xo(e, t);
            }
            function Wo(e, t, n) {
                return (e = Vo(e)), ko(e, t, n);
            }
            function Qo(e) {
                return null === Do ? ((Do = [e]), (Fo = ko(Po, $o))) : Do.push(e), Ro;
            }
            function Zo() {
                if (null !== Fo) {
                    var e = Fo;
                    (Fo = null), Co(e);
                }
                $o();
            }
            function $o() {
                if (!Ao && null !== Do) {
                    Ao = !0;
                    var e = 0;
                    try {
                        var t = Do;
                        Ho(99, function () {
                            for (; e < t.length; e++) {
                                var n = t[e];
                                do {
                                    n = n(!0);
                                } while (null !== n);
                            }
                        }),
                            (Do = null);
                    } catch (t) {
                        throw (null !== Do && (Do = Do.slice(e + 1)), ko(Po, Zo), t);
                    } finally {
                        Ao = !1;
                    }
                }
            }
            function Go(e, t, n) {
                return 1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n;
            }
            function Ko(e, t) {
                if (e && e.defaultProps) for (var n in ((t = o({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
                return t;
            }
            var qo = { current: null },
                Yo = null,
                Xo = null,
                Jo = null;
            function ei() {
                Jo = Xo = Yo = null;
            }
            function ti(e) {
                var t = qo.current;
                uo(qo), (e.type._context._currentValue = t);
            }
            function ni(e, t) {
                for (; null !== e; ) {
                    var n = e.alternate;
                    if (e.childExpirationTime < t) (e.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
                    else {
                        if (!(null !== n && n.childExpirationTime < t)) break;
                        n.childExpirationTime = t;
                    }
                    e = e.return;
                }
            }
            function ri(e, t) {
                (Yo = e), (Jo = Xo = null), null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Ol = !0), (e.firstContext = null));
            }
            function oi(e, t) {
                if (Jo !== e && !1 !== t && 0 !== t)
                    if ((("number" == typeof t && 1073741823 !== t) || ((Jo = e), (t = 1073741823)), (t = { context: e, observedBits: t, next: null }), null === Xo)) {
                        if (null === Yo) throw Error(l(308));
                        (Xo = t), (Yo.dependencies = { expirationTime: 0, firstContext: t, responders: null });
                    } else Xo = Xo.next = t;
                return e._currentValue;
            }
            var ii = !1;
            function li(e) {
                e.updateQueue = { baseState: e.memoizedState, baseQueue: null, shared: { pending: null }, effects: null };
            }
            function ai(e, t) {
                (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, baseQueue: e.baseQueue, shared: e.shared, effects: e.effects });
            }
            function ui(e, t) {
                return ((e = { expirationTime: e, suspenseConfig: t, tag: 0, payload: null, callback: null, next: null }).next = e);
            }
            function si(e, t) {
                if (null !== (e = e.updateQueue)) {
                    var n = (e = e.shared).pending;
                    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
                }
            }
            function ci(e, t) {
                var n = e.alternate;
                null !== n && ai(n, e), null === (n = (e = e.updateQueue).baseQueue) ? ((e.baseQueue = t.next = t), (t.next = t)) : ((t.next = n.next), (n.next = t));
            }
            function fi(e, t, n, r) {
                var i = e.updateQueue;
                ii = !1;
                var l = i.baseQueue,
                    a = i.shared.pending;
                if (null !== a) {
                    if (null !== l) {
                        var u = l.next;
                        (l.next = a.next), (a.next = u);
                    }
                    (l = a), (i.shared.pending = null), null !== (u = e.alternate) && null !== (u = u.updateQueue) && (u.baseQueue = a);
                }
                if (null !== l) {
                    u = l.next;
                    var s = i.baseState,
                        c = 0,
                        f = null,
                        d = null,
                        p = null;
                    if (null !== u)
                        for (var h = u; ; ) {
                            if ((a = h.expirationTime) < r) {
                                var m = { expirationTime: h.expirationTime, suspenseConfig: h.suspenseConfig, tag: h.tag, payload: h.payload, callback: h.callback, next: null };
                                null === p ? ((d = p = m), (f = s)) : (p = p.next = m), a > c && (c = a);
                            } else {
                                null !== p && (p = p.next = { expirationTime: 1073741823, suspenseConfig: h.suspenseConfig, tag: h.tag, payload: h.payload, callback: h.callback, next: null }), iu(a, h.suspenseConfig);
                                e: {
                                    var g = e,
                                        v = h;
                                    switch (((a = t), (m = n), v.tag)) {
                                        case 1:
                                            if ("function" == typeof (g = v.payload)) {
                                                s = g.call(m, s, a);
                                                break e;
                                            }
                                            s = g;
                                            break e;
                                        case 3:
                                            g.effectTag = (-4097 & g.effectTag) | 64;
                                        case 0:
                                            if (null == (a = "function" == typeof (g = v.payload) ? g.call(m, s, a) : g)) break e;
                                            s = o({}, s, a);
                                            break e;
                                        case 2:
                                            ii = !0;
                                    }
                                }
                                null !== h.callback && ((e.effectTag |= 32), null === (a = i.effects) ? (i.effects = [h]) : a.push(h));
                            }
                            if (null === (h = h.next) || h === u) {
                                if (null === (a = i.shared.pending)) break;
                                (h = l.next = a.next), (a.next = u), (i.baseQueue = l = a), (i.shared.pending = null);
                            }
                        }
                    null === p ? (f = s) : (p.next = d), (i.baseState = f), (i.baseQueue = p), lu(c), (e.expirationTime = c), (e.memoizedState = s);
                }
            }
            function di(e, t, n) {
                if (((e = t.effects), (t.effects = null), null !== e))
                    for (t = 0; t < e.length; t++) {
                        var r = e[t],
                            o = r.callback;
                        if (null !== o) {
                            if (((r.callback = null), (r = o), (o = n), "function" != typeof r)) throw Error(l(191, r));
                            r.call(o);
                        }
                    }
            }
            var pi = q.ReactCurrentBatchConfig,
                hi = new r.Component().refs;
            function mi(e, t, n, r) {
                (n = null == (n = n(r, (t = e.memoizedState))) ? t : o({}, t, n)), (e.memoizedState = n), 0 === e.expirationTime && (e.updateQueue.baseState = n);
            }
            var gi = {
                isMounted: function (e) {
                    return !!(e = e._reactInternalFiber) && Je(e) === e;
                },
                enqueueSetState: function (e, t, n) {
                    e = e._reactInternalFiber;
                    var r = Za(),
                        o = pi.suspense;
                    ((o = ui((r = $a(r, e, o)), o)).payload = t), null != n && (o.callback = n), si(e, o), Ga(e, r);
                },
                enqueueReplaceState: function (e, t, n) {
                    e = e._reactInternalFiber;
                    var r = Za(),
                        o = pi.suspense;
                    ((o = ui((r = $a(r, e, o)), o)).tag = 1), (o.payload = t), null != n && (o.callback = n), si(e, o), Ga(e, r);
                },
                enqueueForceUpdate: function (e, t) {
                    e = e._reactInternalFiber;
                    var n = Za(),
                        r = pi.suspense;
                    ((r = ui((n = $a(n, e, r)), r)).tag = 2), null != t && (r.callback = t), si(e, r), Ga(e, n);
                },
            };
            function vi(e, t, n, r, o, i, l) {
                return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, l) : !t.prototype || !t.prototype.isPureReactComponent || !Br(n, r) || !Br(o, i);
            }
            function yi(e, t, n) {
                var r = !1,
                    o = co,
                    i = t.contextType;
                return (
                    "object" == typeof i && null !== i ? (i = oi(i)) : ((o = go(t) ? ho : fo.current), (i = (r = null != (r = t.contextTypes)) ? mo(e, o) : co)),
                    (t = new t(n, i)),
                    (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
                    (t.updater = gi),
                    (e.stateNode = t),
                    (t._reactInternalFiber = e),
                    r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o), (e.__reactInternalMemoizedMaskedChildContext = i)),
                    t
                );
            }
            function bi(e, t, n, r) {
                (e = t.state),
                    "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                    "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
                    t.state !== e && gi.enqueueReplaceState(t, t.state, null);
            }
            function wi(e, t, n, r) {
                var o = e.stateNode;
                (o.props = n), (o.state = e.memoizedState), (o.refs = hi), li(e);
                var i = t.contextType;
                "object" == typeof i && null !== i ? (o.context = oi(i)) : ((i = go(t) ? ho : fo.current), (o.context = mo(e, i))),
                    fi(e, n, o, r),
                    (o.state = e.memoizedState),
                    "function" == typeof (i = t.getDerivedStateFromProps) && (mi(e, t, i, n), (o.state = e.memoizedState)),
                    "function" == typeof t.getDerivedStateFromProps ||
                        "function" == typeof o.getSnapshotBeforeUpdate ||
                        ("function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount) ||
                        ((t = o.state),
                        "function" == typeof o.componentWillMount && o.componentWillMount(),
                        "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
                        t !== o.state && gi.enqueueReplaceState(o, o.state, null),
                        fi(e, n, o, r),
                        (o.state = e.memoizedState)),
                    "function" == typeof o.componentDidMount && (e.effectTag |= 4);
            }
            var Ei = Array.isArray;
            function xi(e, t, n) {
                if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                    if (n._owner) {
                        if ((n = n._owner)) {
                            if (1 !== n.tag) throw Error(l(309));
                            var r = n.stateNode;
                        }
                        if (!r) throw Error(l(147, e));
                        var o = "" + e;
                        return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o
                            ? t.ref
                            : (((t = function (e) {
                                  var t = r.refs;
                                  t === hi && (t = r.refs = {}), null === e ? delete t[o] : (t[o] = e);
                              })._stringRef = o),
                              t);
                    }
                    if ("string" != typeof e) throw Error(l(284));
                    if (!n._owner) throw Error(l(290, e));
                }
                return e;
            }
            function ki(e, t) {
                if ("textarea" !== e.type) throw Error(l(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""));
            }
            function Ci(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.lastEffect;
                        null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n), (n.nextEffect = null), (n.effectTag = 8);
                    }
                }
                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r; ) t(n, r), (r = r.sibling);
                    return null;
                }
                function r(e, t) {
                    for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
                    return e;
                }
                function o(e, t) {
                    return ((e = Tu(e, t)).index = 0), (e.sibling = null), e;
                }
                function i(t, n, r) {
                    return (t.index = r), e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.effectTag = 2), n) : r) : ((t.effectTag = 2), n)) : n;
                }
                function a(t) {
                    return e && null === t.alternate && (t.effectTag = 2), t;
                }
                function u(e, t, n, r) {
                    return null === t || 6 !== t.tag ? (((t = Nu(n, e.mode, r)).return = e), t) : (((t = o(t, n)).return = e), t);
                }
                function s(e, t, n, r) {
                    return null !== t && t.elementType === n.type ? (((r = o(t, n.props)).ref = xi(e, t, n)), (r.return = e), r) : (((r = _u(n.type, n.key, n.props, null, e.mode, r)).ref = xi(e, t, n)), (r.return = e), r);
                }
                function c(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation
                        ? (((t = Ou(n, e.mode, r)).return = e), t)
                        : (((t = o(t, n.children || [])).return = e), t);
                }
                function f(e, t, n, r, i) {
                    return null === t || 7 !== t.tag ? (((t = Pu(n, e.mode, r, i)).return = e), t) : (((t = o(t, n)).return = e), t);
                }
                function d(e, t, n) {
                    if ("string" == typeof t || "number" == typeof t) return ((t = Nu("" + t, e.mode, n)).return = e), t;
                    if ("object" == typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case ee:
                                return ((n = _u(t.type, t.key, t.props, null, e.mode, n)).ref = xi(e, null, t)), (n.return = e), n;
                            case te:
                                return ((t = Ou(t, e.mode, n)).return = e), t;
                        }
                        if (Ei(t) || me(t)) return ((t = Pu(t, e.mode, n, null)).return = e), t;
                        ki(e, t);
                    }
                    return null;
                }
                function p(e, t, n, r) {
                    var o = null !== t ? t.key : null;
                    if ("string" == typeof n || "number" == typeof n) return null !== o ? null : u(e, t, "" + n, r);
                    if ("object" == typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case ee:
                                return n.key === o ? (n.type === ne ? f(e, t, n.props.children, r, o) : s(e, t, n, r)) : null;
                            case te:
                                return n.key === o ? c(e, t, n, r) : null;
                        }
                        if (Ei(n) || me(n)) return null !== o ? null : f(e, t, n, r, null);
                        ki(e, n);
                    }
                    return null;
                }
                function h(e, t, n, r, o) {
                    if ("string" == typeof r || "number" == typeof r) return u(t, (e = e.get(n) || null), "" + r, o);
                    if ("object" == typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case ee:
                                return (e = e.get(null === r.key ? n : r.key) || null), r.type === ne ? f(t, e, r.props.children, o, r.key) : s(t, e, r, o);
                            case te:
                                return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                        }
                        if (Ei(r) || me(r)) return f(t, (e = e.get(n) || null), r, o, null);
                        ki(t, r);
                    }
                    return null;
                }
                function m(o, l, a, u) {
                    for (var s = null, c = null, f = l, m = (l = 0), g = null; null !== f && m < a.length; m++) {
                        f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
                        var v = p(o, f, a[m], u);
                        if (null === v) {
                            null === f && (f = g);
                            break;
                        }
                        e && f && null === v.alternate && t(o, f), (l = i(v, l, m)), null === c ? (s = v) : (c.sibling = v), (c = v), (f = g);
                    }
                    if (m === a.length) return n(o, f), s;
                    if (null === f) {
                        for (; m < a.length; m++) null !== (f = d(o, a[m], u)) && ((l = i(f, l, m)), null === c ? (s = f) : (c.sibling = f), (c = f));
                        return s;
                    }
                    for (f = r(o, f); m < a.length; m++) null !== (g = h(f, o, m, a[m], u)) && (e && null !== g.alternate && f.delete(null === g.key ? m : g.key), (l = i(g, l, m)), null === c ? (s = g) : (c.sibling = g), (c = g));
                    return (
                        e &&
                            f.forEach(function (e) {
                                return t(o, e);
                            }),
                        s
                    );
                }
                function g(o, a, u, s) {
                    var c = me(u);
                    if ("function" != typeof c) throw Error(l(150));
                    if (null == (u = c.call(u))) throw Error(l(151));
                    for (var f = (c = null), m = a, g = (a = 0), v = null, y = u.next(); null !== m && !y.done; g++, y = u.next()) {
                        m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
                        var b = p(o, m, y.value, s);
                        if (null === b) {
                            null === m && (m = v);
                            break;
                        }
                        e && m && null === b.alternate && t(o, m), (a = i(b, a, g)), null === f ? (c = b) : (f.sibling = b), (f = b), (m = v);
                    }
                    if (y.done) return n(o, m), c;
                    if (null === m) {
                        for (; !y.done; g++, y = u.next()) null !== (y = d(o, y.value, s)) && ((a = i(y, a, g)), null === f ? (c = y) : (f.sibling = y), (f = y));
                        return c;
                    }
                    for (m = r(o, m); !y.done; g++, y = u.next())
                        null !== (y = h(m, o, g, y.value, s)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), (a = i(y, a, g)), null === f ? (c = y) : (f.sibling = y), (f = y));
                    return (
                        e &&
                            m.forEach(function (e) {
                                return t(o, e);
                            }),
                        c
                    );
                }
                return function (e, r, i, u) {
                    var s = "object" == typeof i && null !== i && i.type === ne && null === i.key;
                    s && (i = i.props.children);
                    var c = "object" == typeof i && null !== i;
                    if (c)
                        switch (i.$$typeof) {
                            case ee:
                                e: {
                                    for (c = i.key, s = r; null !== s; ) {
                                        if (s.key === c) {
                                            switch (s.tag) {
                                                case 7:
                                                    if (i.type === ne) {
                                                        n(e, s.sibling), ((r = o(s, i.props.children)).return = e), (e = r);
                                                        break e;
                                                    }
                                                    break;
                                                default:
                                                    if (s.elementType === i.type) {
                                                        n(e, s.sibling), ((r = o(s, i.props)).ref = xi(e, s, i)), (r.return = e), (e = r);
                                                        break e;
                                                    }
                                            }
                                            n(e, s);
                                            break;
                                        }
                                        t(e, s), (s = s.sibling);
                                    }
                                    i.type === ne ? (((r = Pu(i.props.children, e.mode, u, i.key)).return = e), (e = r)) : (((u = _u(i.type, i.key, i.props, null, e.mode, u)).ref = xi(e, r, i)), (u.return = e), (e = u));
                                }
                                return a(e);
                            case te:
                                e: {
                                    for (s = i.key; null !== r; ) {
                                        if (r.key === s) {
                                            if (4 === r.tag && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
                                                n(e, r.sibling), ((r = o(r, i.children || [])).return = e), (e = r);
                                                break e;
                                            }
                                            n(e, r);
                                            break;
                                        }
                                        t(e, r), (r = r.sibling);
                                    }
                                    ((r = Ou(i, e.mode, u)).return = e), (e = r);
                                }
                                return a(e);
                        }
                    if ("string" == typeof i || "number" == typeof i) return (i = "" + i), null !== r && 6 === r.tag ? (n(e, r.sibling), ((r = o(r, i)).return = e), (e = r)) : (n(e, r), ((r = Nu(i, e.mode, u)).return = e), (e = r)), a(e);
                    if (Ei(i)) return m(e, r, i, u);
                    if (me(i)) return g(e, r, i, u);
                    if ((c && ki(e, i), void 0 === i && !s))
                        switch (e.tag) {
                            case 1:
                            case 0:
                                throw ((e = e.type), Error(l(152, e.displayName || e.name || "Component")));
                        }
                    return n(e, r);
                };
            }
            var Si = Ci(!0),
                Ti = Ci(!1),
                _i = {},
                Pi = { current: _i },
                Ni = { current: _i },
                Oi = { current: _i };
            function Li(e) {
                if (e === _i) throw Error(l(174));
                return e;
            }
            function Mi(e, t) {
                switch ((so(Oi, t), so(Ni, e), so(Pi, _i), (e = t.nodeType))) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : Fe(null, "");
                        break;
                    default:
                        t = Fe((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
                }
                uo(Pi), so(Pi, t);
            }
            function Ri() {
                uo(Pi), uo(Ni), uo(Oi);
            }
            function Ii(e) {
                Li(Oi.current);
                var t = Li(Pi.current),
                    n = Fe(t, e.type);
                t !== n && (so(Ni, e), so(Pi, n));
            }
            function zi(e) {
                Ni.current === e && (uo(Pi), uo(Ni));
            }
            var Di = { current: 0 };
            function Fi(e) {
                for (var t = e; null !== t; ) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t;
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 != (64 & t.effectTag)) return t;
                    } else if (null !== t.child) {
                        (t.child.return = t), (t = t.child);
                        continue;
                    }
                    if (t === e) break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return;
                    }
                    (t.sibling.return = t.return), (t = t.sibling);
                }
                return null;
            }
            function Ai(e, t) {
                return { responder: e, props: t };
            }
            var Bi = q.ReactCurrentDispatcher,
                Ui = q.ReactCurrentBatchConfig,
                ji = 0,
                Vi = null,
                Hi = null,
                Wi = null,
                Qi = !1;
            function Zi() {
                throw Error(l(321));
            }
            function $i(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++) if (!Fr(e[n], t[n])) return !1;
                return !0;
            }
            function Gi(e, t, n, r, o, i) {
                if (((ji = i), (Vi = t), (t.memoizedState = null), (t.updateQueue = null), (t.expirationTime = 0), (Bi.current = null === e || null === e.memoizedState ? vl : yl), (e = n(r, o)), t.expirationTime === ji)) {
                    i = 0;
                    do {
                        if (((t.expirationTime = 0), !(25 > i))) throw Error(l(301));
                        (i += 1), (Wi = Hi = null), (t.updateQueue = null), (Bi.current = bl), (e = n(r, o));
                    } while (t.expirationTime === ji);
                }
                if (((Bi.current = gl), (t = null !== Hi && null !== Hi.next), (ji = 0), (Wi = Hi = Vi = null), (Qi = !1), t)) throw Error(l(300));
                return e;
            }
            function Ki() {
                var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
                return null === Wi ? (Vi.memoizedState = Wi = e) : (Wi = Wi.next = e), Wi;
            }
            function qi() {
                if (null === Hi) {
                    var e = Vi.alternate;
                    e = null !== e ? e.memoizedState : null;
                } else e = Hi.next;
                var t = null === Wi ? Vi.memoizedState : Wi.next;
                if (null !== t) (Wi = t), (Hi = e);
                else {
                    if (null === e) throw Error(l(310));
                    (e = { memoizedState: (Hi = e).memoizedState, baseState: Hi.baseState, baseQueue: Hi.baseQueue, queue: Hi.queue, next: null }), null === Wi ? (Vi.memoizedState = Wi = e) : (Wi = Wi.next = e);
                }
                return Wi;
            }
            function Yi(e, t) {
                return "function" == typeof t ? t(e) : t;
            }
            function Xi(e) {
                var t = qi(),
                    n = t.queue;
                if (null === n) throw Error(l(311));
                n.lastRenderedReducer = e;
                var r = Hi,
                    o = r.baseQueue,
                    i = n.pending;
                if (null !== i) {
                    if (null !== o) {
                        var a = o.next;
                        (o.next = i.next), (i.next = a);
                    }
                    (r.baseQueue = o = i), (n.pending = null);
                }
                if (null !== o) {
                    (o = o.next), (r = r.baseState);
                    var u = (a = i = null),
                        s = o;
                    do {
                        var c = s.expirationTime;
                        if (c < ji) {
                            var f = { expirationTime: s.expirationTime, suspenseConfig: s.suspenseConfig, action: s.action, eagerReducer: s.eagerReducer, eagerState: s.eagerState, next: null };
                            null === u ? ((a = u = f), (i = r)) : (u = u.next = f), c > Vi.expirationTime && ((Vi.expirationTime = c), lu(c));
                        } else
                            null !== u && (u = u.next = { expirationTime: 1073741823, suspenseConfig: s.suspenseConfig, action: s.action, eagerReducer: s.eagerReducer, eagerState: s.eagerState, next: null }),
                                iu(c, s.suspenseConfig),
                                (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
                        s = s.next;
                    } while (null !== s && s !== o);
                    null === u ? (i = r) : (u.next = a), Fr(r, t.memoizedState) || (Ol = !0), (t.memoizedState = r), (t.baseState = i), (t.baseQueue = u), (n.lastRenderedState = r);
                }
                return [t.memoizedState, n.dispatch];
            }
            function Ji(e) {
                var t = qi(),
                    n = t.queue;
                if (null === n) throw Error(l(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch,
                    o = n.pending,
                    i = t.memoizedState;
                if (null !== o) {
                    n.pending = null;
                    var a = (o = o.next);
                    do {
                        (i = e(i, a.action)), (a = a.next);
                    } while (a !== o);
                    Fr(i, t.memoizedState) || (Ol = !0), (t.memoizedState = i), null === t.baseQueue && (t.baseState = i), (n.lastRenderedState = i);
                }
                return [i, r];
            }
            function el(e) {
                var t = Ki();
                return (
                    "function" == typeof e && (e = e()),
                    (t.memoizedState = t.baseState = e),
                    (e = (e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: Yi, lastRenderedState: e }).dispatch = ml.bind(null, Vi, e)),
                    [t.memoizedState, e]
                );
            }
            function tl(e, t, n, r) {
                return (
                    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
                    null === (t = Vi.updateQueue)
                        ? ((t = { lastEffect: null }), (Vi.updateQueue = t), (t.lastEffect = e.next = e))
                        : null === (n = t.lastEffect)
                        ? (t.lastEffect = e.next = e)
                        : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
                    e
                );
            }
            function nl() {
                return qi().memoizedState;
            }
            function rl(e, t, n, r) {
                var o = Ki();
                (Vi.effectTag |= e), (o.memoizedState = tl(1 | t, n, void 0, void 0 === r ? null : r));
            }
            function ol(e, t, n, r) {
                var o = qi();
                r = void 0 === r ? null : r;
                var i = void 0;
                if (null !== Hi) {
                    var l = Hi.memoizedState;
                    if (((i = l.destroy), null !== r && $i(r, l.deps))) return void tl(t, n, i, r);
                }
                (Vi.effectTag |= e), (o.memoizedState = tl(1 | t, n, i, r));
            }
            function il(e, t) {
                return rl(516, 4, e, t);
            }
            function ll(e, t) {
                return ol(516, 4, e, t);
            }
            function al(e, t) {
                return ol(4, 2, e, t);
            }
            function ul(e, t) {
                return "function" == typeof t
                    ? ((e = e()),
                      t(e),
                      function () {
                          t(null);
                      })
                    : null != t
                    ? ((e = e()),
                      (t.current = e),
                      function () {
                          t.current = null;
                      })
                    : void 0;
            }
            function sl(e, t, n) {
                return (n = null != n ? n.concat([e]) : null), ol(4, 2, ul.bind(null, t, e), n);
            }
            function cl() {}
            function fl(e, t) {
                return (Ki().memoizedState = [e, void 0 === t ? null : t]), e;
            }
            function dl(e, t) {
                var n = qi();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && $i(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
            }
            function pl(e, t) {
                var n = qi();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && $i(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
            }
            function hl(e, t, n) {
                var r = jo();
                Ho(98 > r ? 98 : r, function () {
                    e(!0);
                }),
                    Ho(97 < r ? 97 : r, function () {
                        var r = Ui.suspense;
                        Ui.suspense = void 0 === t ? null : t;
                        try {
                            e(!1), n();
                        } finally {
                            Ui.suspense = r;
                        }
                    });
            }
            function ml(e, t, n) {
                var r = Za(),
                    o = pi.suspense;
                o = { expirationTime: (r = $a(r, e, o)), suspenseConfig: o, action: n, eagerReducer: null, eagerState: null, next: null };
                var i = t.pending;
                if ((null === i ? (o.next = o) : ((o.next = i.next), (i.next = o)), (t.pending = o), (i = e.alternate), e === Vi || (null !== i && i === Vi))) (Qi = !0), (o.expirationTime = ji), (Vi.expirationTime = ji);
                else {
                    if (0 === e.expirationTime && (null === i || 0 === i.expirationTime) && null !== (i = t.lastRenderedReducer))
                        try {
                            var l = t.lastRenderedState,
                                a = i(l, n);
                            if (((o.eagerReducer = i), (o.eagerState = a), Fr(a, l))) return;
                        } catch (e) {}
                    Ga(e, r);
                }
            }
            var gl = {
                    readContext: oi,
                    useCallback: Zi,
                    useContext: Zi,
                    useEffect: Zi,
                    useImperativeHandle: Zi,
                    useLayoutEffect: Zi,
                    useMemo: Zi,
                    useReducer: Zi,
                    useRef: Zi,
                    useState: Zi,
                    useDebugValue: Zi,
                    useResponder: Zi,
                    useDeferredValue: Zi,
                    useTransition: Zi,
                },
                vl = {
                    readContext: oi,
                    useCallback: fl,
                    useContext: oi,
                    useEffect: il,
                    useImperativeHandle: function (e, t, n) {
                        return (n = null != n ? n.concat([e]) : null), rl(4, 2, ul.bind(null, t, e), n);
                    },
                    useLayoutEffect: function (e, t) {
                        return rl(4, 2, e, t);
                    },
                    useMemo: function (e, t) {
                        var n = Ki();
                        return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
                    },
                    useReducer: function (e, t, n) {
                        var r = Ki();
                        return (
                            (t = void 0 !== n ? n(t) : t),
                            (r.memoizedState = r.baseState = t),
                            (e = (e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }).dispatch = ml.bind(null, Vi, e)),
                            [r.memoizedState, e]
                        );
                    },
                    useRef: function (e) {
                        return (e = { current: e }), (Ki().memoizedState = e);
                    },
                    useState: el,
                    useDebugValue: cl,
                    useResponder: Ai,
                    useDeferredValue: function (e, t) {
                        var n = el(e),
                            r = n[0],
                            o = n[1];
                        return (
                            il(
                                function () {
                                    var n = Ui.suspense;
                                    Ui.suspense = void 0 === t ? null : t;
                                    try {
                                        o(e);
                                    } finally {
                                        Ui.suspense = n;
                                    }
                                },
                                [e, t]
                            ),
                            r
                        );
                    },
                    useTransition: function (e) {
                        var t = el(!1),
                            n = t[0];
                        return (t = t[1]), [fl(hl.bind(null, t, e), [t, e]), n];
                    },
                },
                yl = {
                    readContext: oi,
                    useCallback: dl,
                    useContext: oi,
                    useEffect: ll,
                    useImperativeHandle: sl,
                    useLayoutEffect: al,
                    useMemo: pl,
                    useReducer: Xi,
                    useRef: nl,
                    useState: function () {
                        return Xi(Yi);
                    },
                    useDebugValue: cl,
                    useResponder: Ai,
                    useDeferredValue: function (e, t) {
                        var n = Xi(Yi),
                            r = n[0],
                            o = n[1];
                        return (
                            ll(
                                function () {
                                    var n = Ui.suspense;
                                    Ui.suspense = void 0 === t ? null : t;
                                    try {
                                        o(e);
                                    } finally {
                                        Ui.suspense = n;
                                    }
                                },
                                [e, t]
                            ),
                            r
                        );
                    },
                    useTransition: function (e) {
                        var t = Xi(Yi),
                            n = t[0];
                        return (t = t[1]), [dl(hl.bind(null, t, e), [t, e]), n];
                    },
                },
                bl = {
                    readContext: oi,
                    useCallback: dl,
                    useContext: oi,
                    useEffect: ll,
                    useImperativeHandle: sl,
                    useLayoutEffect: al,
                    useMemo: pl,
                    useReducer: Ji,
                    useRef: nl,
                    useState: function () {
                        return Ji(Yi);
                    },
                    useDebugValue: cl,
                    useResponder: Ai,
                    useDeferredValue: function (e, t) {
                        var n = Ji(Yi),
                            r = n[0],
                            o = n[1];
                        return (
                            ll(
                                function () {
                                    var n = Ui.suspense;
                                    Ui.suspense = void 0 === t ? null : t;
                                    try {
                                        o(e);
                                    } finally {
                                        Ui.suspense = n;
                                    }
                                },
                                [e, t]
                            ),
                            r
                        );
                    },
                    useTransition: function (e) {
                        var t = Ji(Yi),
                            n = t[0];
                        return (t = t[1]), [dl(hl.bind(null, t, e), [t, e]), n];
                    },
                },
                wl = null,
                El = null,
                xl = !1;
            function kl(e, t) {
                var n = Cu(5, null, null, 0);
                (n.elementType = "DELETED"), (n.type = "DELETED"), (n.stateNode = t), (n.return = e), (n.effectTag = 8), null !== e.lastEffect ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n)) : (e.firstEffect = e.lastEffect = n);
            }
            function Cl(e, t) {
                switch (e.tag) {
                    case 5:
                        var n = e.type;
                        return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && ((e.stateNode = t), !0);
                    case 6:
                        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), !0);
                    case 13:
                    default:
                        return !1;
                }
            }
            function Sl(e) {
                if (xl) {
                    var t = El;
                    if (t) {
                        var n = t;
                        if (!Cl(e, t)) {
                            if (!(t = En(n.nextSibling)) || !Cl(e, t)) return (e.effectTag = (-1025 & e.effectTag) | 2), (xl = !1), void (wl = e);
                            kl(wl, n);
                        }
                        (wl = e), (El = En(t.firstChild));
                    } else (e.effectTag = (-1025 & e.effectTag) | 2), (xl = !1), (wl = e);
                }
            }
            function Tl(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
                wl = e;
            }
            function _l(e) {
                if (e !== wl) return !1;
                if (!xl) return Tl(e), (xl = !0), !1;
                var t = e.type;
                if (5 !== e.tag || ("head" !== t && "body" !== t && !yn(t, e.memoizedProps))) for (t = El; t; ) kl(e, t), (t = En(t.nextSibling));
                if ((Tl(e), 13 === e.tag)) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
                    e: {
                        for (e = e.nextSibling, t = 0; e; ) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        El = En(e.nextSibling);
                                        break e;
                                    }
                                    t--;
                                } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                            }
                            e = e.nextSibling;
                        }
                        El = null;
                    }
                } else El = wl ? En(e.stateNode.nextSibling) : null;
                return !0;
            }
            function Pl() {
                (El = wl = null), (xl = !1);
            }
            var Nl = q.ReactCurrentOwner,
                Ol = !1;
            function Ll(e, t, n, r) {
                t.child = null === e ? Ti(t, null, n, r) : Si(t, e.child, n, r);
            }
            function Ml(e, t, n, r, o) {
                n = n.render;
                var i = t.ref;
                return (
                    ri(t, o),
                    (r = Gi(e, t, n, r, i, o)),
                    null === e || Ol ? ((t.effectTag |= 1), Ll(e, t, r, o), t.child) : ((t.updateQueue = e.updateQueue), (t.effectTag &= -517), e.expirationTime <= o && (e.expirationTime = 0), Gl(e, t, o))
                );
            }
            function Rl(e, t, n, r, o, i) {
                if (null === e) {
                    var l = n.type;
                    return "function" != typeof l || Su(l) || void 0 !== l.defaultProps || null !== n.compare || void 0 !== n.defaultProps
                        ? (((e = _u(n.type, null, r, null, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
                        : ((t.tag = 15), (t.type = l), Il(e, t, l, r, o, i));
                }
                return (l = e.child), o < i && ((o = l.memoizedProps), (n = null !== (n = n.compare) ? n : Br)(o, r) && e.ref === t.ref) ? Gl(e, t, i) : ((t.effectTag |= 1), ((e = Tu(l, r)).ref = t.ref), (e.return = t), (t.child = e));
            }
            function Il(e, t, n, r, o, i) {
                return null !== e && Br(e.memoizedProps, r) && e.ref === t.ref && ((Ol = !1), o < i) ? ((t.expirationTime = e.expirationTime), Gl(e, t, i)) : Dl(e, t, n, r, i);
            }
            function zl(e, t) {
                var n = t.ref;
                ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.effectTag |= 128);
            }
            function Dl(e, t, n, r, o) {
                var i = go(n) ? ho : fo.current;
                return (
                    (i = mo(t, i)),
                    ri(t, o),
                    (n = Gi(e, t, n, r, i, o)),
                    null === e || Ol ? ((t.effectTag |= 1), Ll(e, t, n, o), t.child) : ((t.updateQueue = e.updateQueue), (t.effectTag &= -517), e.expirationTime <= o && (e.expirationTime = 0), Gl(e, t, o))
                );
            }
            function Fl(e, t, n, r, o) {
                if (go(n)) {
                    var i = !0;
                    wo(t);
                } else i = !1;
                if ((ri(t, o), null === t.stateNode)) null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)), yi(t, n, r), wi(t, n, r, o), (r = !0);
                else if (null === e) {
                    var l = t.stateNode,
                        a = t.memoizedProps;
                    l.props = a;
                    var u = l.context,
                        s = n.contextType;
                    "object" == typeof s && null !== s ? (s = oi(s)) : (s = mo(t, (s = go(n) ? ho : fo.current)));
                    var c = n.getDerivedStateFromProps,
                        f = "function" == typeof c || "function" == typeof l.getSnapshotBeforeUpdate;
                    f || ("function" != typeof l.UNSAFE_componentWillReceiveProps && "function" != typeof l.componentWillReceiveProps) || ((a !== r || u !== s) && bi(t, l, r, s)), (ii = !1);
                    var d = t.memoizedState;
                    (l.state = d),
                        fi(t, r, l, o),
                        (u = t.memoizedState),
                        a !== r || d !== u || po.current || ii
                            ? ("function" == typeof c && (mi(t, n, c, r), (u = t.memoizedState)),
                              (a = ii || vi(t, n, a, r, d, u, s))
                                  ? (f ||
                                        ("function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount) ||
                                        ("function" == typeof l.componentWillMount && l.componentWillMount(), "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()),
                                    "function" == typeof l.componentDidMount && (t.effectTag |= 4))
                                  : ("function" == typeof l.componentDidMount && (t.effectTag |= 4), (t.memoizedProps = r), (t.memoizedState = u)),
                              (l.props = r),
                              (l.state = u),
                              (l.context = s),
                              (r = a))
                            : ("function" == typeof l.componentDidMount && (t.effectTag |= 4), (r = !1));
                } else
                    (l = t.stateNode),
                        ai(e, t),
                        (a = t.memoizedProps),
                        (l.props = t.type === t.elementType ? a : Ko(t.type, a)),
                        (u = l.context),
                        "object" == typeof (s = n.contextType) && null !== s ? (s = oi(s)) : (s = mo(t, (s = go(n) ? ho : fo.current))),
                        (f = "function" == typeof (c = n.getDerivedStateFromProps) || "function" == typeof l.getSnapshotBeforeUpdate) ||
                            ("function" != typeof l.UNSAFE_componentWillReceiveProps && "function" != typeof l.componentWillReceiveProps) ||
                            ((a !== r || u !== s) && bi(t, l, r, s)),
                        (ii = !1),
                        (u = t.memoizedState),
                        (l.state = u),
                        fi(t, r, l, o),
                        (d = t.memoizedState),
                        a !== r || u !== d || po.current || ii
                            ? ("function" == typeof c && (mi(t, n, c, r), (d = t.memoizedState)),
                              (c = ii || vi(t, n, a, r, u, d, s))
                                  ? (f ||
                                        ("function" != typeof l.UNSAFE_componentWillUpdate && "function" != typeof l.componentWillUpdate) ||
                                        ("function" == typeof l.componentWillUpdate && l.componentWillUpdate(r, d, s), "function" == typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, d, s)),
                                    "function" == typeof l.componentDidUpdate && (t.effectTag |= 4),
                                    "function" == typeof l.getSnapshotBeforeUpdate && (t.effectTag |= 256))
                                  : ("function" != typeof l.componentDidUpdate || (a === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 4),
                                    "function" != typeof l.getSnapshotBeforeUpdate || (a === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 256),
                                    (t.memoizedProps = r),
                                    (t.memoizedState = d)),
                              (l.props = r),
                              (l.state = d),
                              (l.context = s),
                              (r = c))
                            : ("function" != typeof l.componentDidUpdate || (a === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 4),
                              "function" != typeof l.getSnapshotBeforeUpdate || (a === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 256),
                              (r = !1));
                return Al(e, t, n, r, i, o);
            }
            function Al(e, t, n, r, o, i) {
                zl(e, t);
                var l = 0 != (64 & t.effectTag);
                if (!r && !l) return o && Eo(t, n, !1), Gl(e, t, i);
                (r = t.stateNode), (Nl.current = t);
                var a = l && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                return (t.effectTag |= 1), null !== e && l ? ((t.child = Si(t, e.child, null, i)), (t.child = Si(t, null, a, i))) : Ll(e, t, a, i), (t.memoizedState = r.state), o && Eo(t, n, !0), t.child;
            }
            function Bl(e) {
                var t = e.stateNode;
                t.pendingContext ? yo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && yo(0, t.context, !1), Mi(e, t.containerInfo);
            }
            var Ul,
                jl,
                Vl,
                Hl = { dehydrated: null, retryTime: 0 };
            function Wl(e, t, n) {
                var r,
                    o = t.mode,
                    i = t.pendingProps,
                    l = Di.current,
                    a = !1;
                if (
                    ((r = 0 != (64 & t.effectTag)) || (r = 0 != (2 & l) && (null === e || null !== e.memoizedState)),
                    r ? ((a = !0), (t.effectTag &= -65)) : (null !== e && null === e.memoizedState) || void 0 === i.fallback || !0 === i.unstable_avoidThisFallback || (l |= 1),
                    so(Di, 1 & l),
                    null === e)
                ) {
                    if ((void 0 !== i.fallback && Sl(t), a)) {
                        if (((a = i.fallback), ((i = Pu(null, o, 0, null)).return = t), 0 == (2 & t.mode))) for (e = null !== t.memoizedState ? t.child.child : t.child, i.child = e; null !== e; ) (e.return = i), (e = e.sibling);
                        return ((n = Pu(a, o, n, null)).return = t), (i.sibling = n), (t.memoizedState = Hl), (t.child = i), n;
                    }
                    return (o = i.children), (t.memoizedState = null), (t.child = Ti(t, null, o, n));
                }
                if (null !== e.memoizedState) {
                    if (((o = (e = e.child).sibling), a)) {
                        if (((i = i.fallback), ((n = Tu(e, e.pendingProps)).return = t), 0 == (2 & t.mode) && (a = null !== t.memoizedState ? t.child.child : t.child) !== e.child))
                            for (n.child = a; null !== a; ) (a.return = n), (a = a.sibling);
                        return ((o = Tu(o, i)).return = t), (n.sibling = o), (n.childExpirationTime = 0), (t.memoizedState = Hl), (t.child = n), o;
                    }
                    return (n = Si(t, e.child, i.children, n)), (t.memoizedState = null), (t.child = n);
                }
                if (((e = e.child), a)) {
                    if (((a = i.fallback), ((i = Pu(null, o, 0, null)).return = t), (i.child = e), null !== e && (e.return = i), 0 == (2 & t.mode)))
                        for (e = null !== t.memoizedState ? t.child.child : t.child, i.child = e; null !== e; ) (e.return = i), (e = e.sibling);
                    return ((n = Pu(a, o, n, null)).return = t), (i.sibling = n), (n.effectTag |= 2), (i.childExpirationTime = 0), (t.memoizedState = Hl), (t.child = i), n;
                }
                return (t.memoizedState = null), (t.child = Si(t, e, i.children, n));
            }
            function Ql(e, t) {
                e.expirationTime < t && (e.expirationTime = t);
                var n = e.alternate;
                null !== n && n.expirationTime < t && (n.expirationTime = t), ni(e.return, t);
            }
            function Zl(e, t, n, r, o, i) {
                var l = e.memoizedState;
                null === l
                    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailExpiration: 0, tailMode: o, lastEffect: i })
                    : ((l.isBackwards = t), (l.rendering = null), (l.renderingStartTime = 0), (l.last = r), (l.tail = n), (l.tailExpiration = 0), (l.tailMode = o), (l.lastEffect = i));
            }
            function $l(e, t, n) {
                var r = t.pendingProps,
                    o = r.revealOrder,
                    i = r.tail;
                if ((Ll(e, t, r.children, n), 0 != (2 & (r = Di.current)))) (r = (1 & r) | 2), (t.effectTag |= 64);
                else {
                    if (null !== e && 0 != (64 & e.effectTag))
                        e: for (e = t.child; null !== e; ) {
                            if (13 === e.tag) null !== e.memoizedState && Ql(e, n);
                            else if (19 === e.tag) Ql(e, n);
                            else if (null !== e.child) {
                                (e.child.return = e), (e = e.child);
                                continue;
                            }
                            if (e === t) break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return;
                            }
                            (e.sibling.return = e.return), (e = e.sibling);
                        }
                    r &= 1;
                }
                if ((so(Di, r), 0 == (2 & t.mode))) t.memoizedState = null;
                else
                    switch (o) {
                        case "forwards":
                            for (n = t.child, o = null; null !== n; ) null !== (e = n.alternate) && null === Fi(e) && (o = n), (n = n.sibling);
                            null === (n = o) ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)), Zl(t, !1, o, n, i, t.lastEffect);
                            break;
                        case "backwards":
                            for (n = null, o = t.child, t.child = null; null !== o; ) {
                                if (null !== (e = o.alternate) && null === Fi(e)) {
                                    t.child = o;
                                    break;
                                }
                                (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                            }
                            Zl(t, !0, n, null, i, t.lastEffect);
                            break;
                        case "together":
                            Zl(t, !1, null, null, void 0, t.lastEffect);
                            break;
                        default:
                            t.memoizedState = null;
                    }
                return t.child;
            }
            function Gl(e, t, n) {
                null !== e && (t.dependencies = e.dependencies);
                var r = t.expirationTime;
                if ((0 !== r && lu(r), t.childExpirationTime < n)) return null;
                if (null !== e && t.child !== e.child) throw Error(l(153));
                if (null !== t.child) {
                    for (n = Tu((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; ) (e = e.sibling), ((n = n.sibling = Tu(e, e.pendingProps)).return = t);
                    n.sibling = null;
                }
                return t.child;
            }
            function Kl(e, t) {
                switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                        null === n ? (e.tail = null) : (n.sibling = null);
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                        null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
                }
            }
            function ql(e, t, n) {
                var r = t.pendingProps;
                switch (t.tag) {
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
                        return null;
                    case 1:
                        return go(t.type) && vo(), null;
                    case 3:
                        return Ri(), uo(po), uo(fo), (n = t.stateNode).pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)), (null !== e && null !== e.child) || !_l(t) || (t.effectTag |= 4), null;
                    case 5:
                        zi(t), (n = Li(Oi.current));
                        var i = t.type;
                        if (null !== e && null != t.stateNode) jl(e, t, i, r, n), e.ref !== t.ref && (t.effectTag |= 128);
                        else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(l(166));
                                return null;
                            }
                            if (((e = Li(Pi.current)), _l(t))) {
                                (r = t.stateNode), (i = t.type);
                                var a = t.memoizedProps;
                                switch (((r[Cn] = t), (r[Sn] = a), i)) {
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        $t("load", r);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (e = 0; e < qe.length; e++) $t(qe[e], r);
                                        break;
                                    case "source":
                                        $t("error", r);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        $t("error", r), $t("load", r);
                                        break;
                                    case "form":
                                        $t("reset", r), $t("submit", r);
                                        break;
                                    case "details":
                                        $t("toggle", r);
                                        break;
                                    case "input":
                                        ke(r, a), $t("invalid", r), un(n, "onChange");
                                        break;
                                    case "select":
                                        (r._wrapperState = { wasMultiple: !!a.multiple }), $t("invalid", r), un(n, "onChange");
                                        break;
                                    case "textarea":
                                        Le(r, a), $t("invalid", r), un(n, "onChange");
                                }
                                for (var u in (on(i, a), (e = null), a))
                                    if (a.hasOwnProperty(u)) {
                                        var s = a[u];
                                        "children" === u
                                            ? "string" == typeof s
                                                ? r.textContent !== s && (e = ["children", s])
                                                : "number" == typeof s && r.textContent !== "" + s && (e = ["children", "" + s])
                                            : C.hasOwnProperty(u) && null != s && un(n, u);
                                    }
                                switch (i) {
                                    case "input":
                                        we(r), Te(r, a, !0);
                                        break;
                                    case "textarea":
                                        we(r), Re(r);
                                        break;
                                    case "select":
                                    case "option":
                                        break;
                                    default:
                                        "function" == typeof a.onClick && (r.onclick = sn);
                                }
                                (n = e), (t.updateQueue = n), null !== n && (t.effectTag |= 4);
                            } else {
                                switch (
                                    ((u = 9 === n.nodeType ? n : n.ownerDocument),
                                    e === an && (e = De(i)),
                                    e === an
                                        ? "script" === i
                                            ? (((e = u.createElement("div")).innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                                            : "string" == typeof r.is
                                            ? (e = u.createElement(i, { is: r.is }))
                                            : ((e = u.createElement(i)), "select" === i && ((u = e), r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))
                                        : (e = u.createElementNS(e, i)),
                                    (e[Cn] = t),
                                    (e[Sn] = r),
                                    Ul(e, t),
                                    (t.stateNode = e),
                                    (u = ln(i, r)),
                                    i)
                                ) {
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        $t("load", e), (s = r);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (s = 0; s < qe.length; s++) $t(qe[s], e);
                                        s = r;
                                        break;
                                    case "source":
                                        $t("error", e), (s = r);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        $t("error", e), $t("load", e), (s = r);
                                        break;
                                    case "form":
                                        $t("reset", e), $t("submit", e), (s = r);
                                        break;
                                    case "details":
                                        $t("toggle", e), (s = r);
                                        break;
                                    case "input":
                                        ke(e, r), (s = xe(e, r)), $t("invalid", e), un(n, "onChange");
                                        break;
                                    case "option":
                                        s = Pe(e, r);
                                        break;
                                    case "select":
                                        (e._wrapperState = { wasMultiple: !!r.multiple }), (s = o({}, r, { value: void 0 })), $t("invalid", e), un(n, "onChange");
                                        break;
                                    case "textarea":
                                        Le(e, r), (s = Oe(e, r)), $t("invalid", e), un(n, "onChange");
                                        break;
                                    default:
                                        s = r;
                                }
                                on(i, s);
                                var c = s;
                                for (a in c)
                                    if (c.hasOwnProperty(a)) {
                                        var f = c[a];
                                        "style" === a
                                            ? nn(e, f)
                                            : "dangerouslySetInnerHTML" === a
                                            ? null != (f = f ? f.__html : void 0) && Be(e, f)
                                            : "children" === a
                                            ? "string" == typeof f
                                                ? ("textarea" !== i || "" !== f) && Ue(e, f)
                                                : "number" == typeof f && Ue(e, "" + f)
                                            : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (C.hasOwnProperty(a) ? null != f && un(n, a) : null != f && Y(e, a, f, u));
                                    }
                                switch (i) {
                                    case "input":
                                        we(e), Te(e, r, !1);
                                        break;
                                    case "textarea":
                                        we(e), Re(e);
                                        break;
                                    case "option":
                                        null != r.value && e.setAttribute("value", "" + ye(r.value));
                                        break;
                                    case "select":
                                        (e.multiple = !!r.multiple), null != (n = r.value) ? Ne(e, !!r.multiple, n, !1) : null != r.defaultValue && Ne(e, !!r.multiple, r.defaultValue, !0);
                                        break;
                                    default:
                                        "function" == typeof s.onClick && (e.onclick = sn);
                                }
                                vn(i, r) && (t.effectTag |= 4);
                            }
                            null !== t.ref && (t.effectTag |= 128);
                        }
                        return null;
                    case 6:
                        if (e && null != t.stateNode) Vl(0, t, e.memoizedProps, r);
                        else {
                            if ("string" != typeof r && null === t.stateNode) throw Error(l(166));
                            (n = Li(Oi.current)),
                                Li(Pi.current),
                                _l(t) ? ((n = t.stateNode), (r = t.memoizedProps), (n[Cn] = t), n.nodeValue !== r && (t.effectTag |= 4)) : (((n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Cn] = t), (t.stateNode = n));
                        }
                        return null;
                    case 13:
                        return (
                            uo(Di),
                            (r = t.memoizedState),
                            0 != (64 & t.effectTag)
                                ? ((t.expirationTime = n), t)
                                : ((n = null !== r),
                                  (r = !1),
                                  null === e
                                      ? void 0 !== t.memoizedProps.fallback && _l(t)
                                      : ((r = null !== (i = e.memoizedState)),
                                        n ||
                                            null === i ||
                                            (null !== (i = e.child.sibling) && (null !== (a = t.firstEffect) ? ((t.firstEffect = i), (i.nextEffect = a)) : ((t.firstEffect = t.lastEffect = i), (i.nextEffect = null)), (i.effectTag = 8)))),
                                  n &&
                                      !r &&
                                      0 != (2 & t.mode) &&
                                      ((null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback) || 0 != (1 & Di.current)
                                          ? _a === wa && (_a = Ea)
                                          : ((_a !== wa && _a !== Ea) || (_a = xa), 0 !== Ma && null !== Ca && (Ru(Ca, Ta), Iu(Ca, Ma)))),
                                  (n || r) && (t.effectTag |= 4),
                                  null)
                        );
                    case 4:
                        return Ri(), null;
                    case 10:
                        return ti(t), null;
                    case 17:
                        return go(t.type) && vo(), null;
                    case 19:
                        if ((uo(Di), null === (r = t.memoizedState))) return null;
                        if (((i = 0 != (64 & t.effectTag)), null === (a = r.rendering))) {
                            if (i) Kl(r, !1);
                            else if (_a !== wa || (null !== e && 0 != (64 & e.effectTag)))
                                for (a = t.child; null !== a; ) {
                                    if (null !== (e = Fi(a))) {
                                        for (
                                            t.effectTag |= 64, Kl(r, !1), null !== (i = e.updateQueue) && ((t.updateQueue = i), (t.effectTag |= 4)), null === r.lastEffect && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = t.child;
                                            null !== r;

                                        )
                                            (a = n),
                                                ((i = r).effectTag &= 2),
                                                (i.nextEffect = null),
                                                (i.firstEffect = null),
                                                (i.lastEffect = null),
                                                null === (e = i.alternate)
                                                    ? ((i.childExpirationTime = 0), (i.expirationTime = a), (i.child = null), (i.memoizedProps = null), (i.memoizedState = null), (i.updateQueue = null), (i.dependencies = null))
                                                    : ((i.childExpirationTime = e.childExpirationTime),
                                                      (i.expirationTime = e.expirationTime),
                                                      (i.child = e.child),
                                                      (i.memoizedProps = e.memoizedProps),
                                                      (i.memoizedState = e.memoizedState),
                                                      (i.updateQueue = e.updateQueue),
                                                      (a = e.dependencies),
                                                      (i.dependencies = null === a ? null : { expirationTime: a.expirationTime, firstContext: a.firstContext, responders: a.responders })),
                                                (r = r.sibling);
                                        return so(Di, (1 & Di.current) | 2), t.child;
                                    }
                                    a = a.sibling;
                                }
                        } else {
                            if (!i)
                                if (null !== (e = Fi(a))) {
                                    if (((t.effectTag |= 64), (i = !0), null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.effectTag |= 4)), Kl(r, !0), null === r.tail && "hidden" === r.tailMode && !a.alternate))
                                        return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
                                } else 2 * Uo() - r.renderingStartTime > r.tailExpiration && 1 < n && ((t.effectTag |= 64), (i = !0), Kl(r, !1), (t.expirationTime = t.childExpirationTime = n - 1));
                            r.isBackwards ? ((a.sibling = t.child), (t.child = a)) : (null !== (n = r.last) ? (n.sibling = a) : (t.child = a), (r.last = a));
                        }
                        return null !== r.tail
                            ? (0 === r.tailExpiration && (r.tailExpiration = Uo() + 500),
                              (n = r.tail),
                              (r.rendering = n),
                              (r.tail = n.sibling),
                              (r.lastEffect = t.lastEffect),
                              (r.renderingStartTime = Uo()),
                              (n.sibling = null),
                              (t = Di.current),
                              so(Di, i ? (1 & t) | 2 : 1 & t),
                              n)
                            : null;
                }
                throw Error(l(156, t.tag));
            }
            function Yl(e) {
                switch (e.tag) {
                    case 1:
                        go(e.type) && vo();
                        var t = e.effectTag;
                        return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
                    case 3:
                        if ((Ri(), uo(po), uo(fo), 0 != (64 & (t = e.effectTag)))) throw Error(l(285));
                        return (e.effectTag = (-4097 & t) | 64), e;
                    case 5:
                        return zi(e), null;
                    case 13:
                        return uo(Di), 4096 & (t = e.effectTag) ? ((e.effectTag = (-4097 & t) | 64), e) : null;
                    case 19:
                        return uo(Di), null;
                    case 4:
                        return Ri(), null;
                    case 10:
                        return ti(e), null;
                    default:
                        return null;
                }
            }
            function Xl(e, t) {
                return { value: e, source: t, stack: ve(t) };
            }
            (Ul = function (e, t) {
                for (var n = t.child; null !== n; ) {
                    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        (n.child.return = n), (n = n.child);
                        continue;
                    }
                    if (n === t) break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === t) return;
                        n = n.return;
                    }
                    (n.sibling.return = n.return), (n = n.sibling);
                }
            }),
                (jl = function (e, t, n, r, i) {
                    var l = e.memoizedProps;
                    if (l !== r) {
                        var a,
                            u,
                            s = t.stateNode;
                        switch ((Li(Pi.current), (e = null), n)) {
                            case "input":
                                (l = xe(s, l)), (r = xe(s, r)), (e = []);
                                break;
                            case "option":
                                (l = Pe(s, l)), (r = Pe(s, r)), (e = []);
                                break;
                            case "select":
                                (l = o({}, l, { value: void 0 })), (r = o({}, r, { value: void 0 })), (e = []);
                                break;
                            case "textarea":
                                (l = Oe(s, l)), (r = Oe(s, r)), (e = []);
                                break;
                            default:
                                "function" != typeof l.onClick && "function" == typeof r.onClick && (s.onclick = sn);
                        }
                        for (a in (on(n, r), (n = null), l))
                            if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && null != l[a])
                                if ("style" === a) for (u in (s = l[a])) s.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
                                else
                                    "dangerouslySetInnerHTML" !== a &&
                                        "children" !== a &&
                                        "suppressContentEditableWarning" !== a &&
                                        "suppressHydrationWarning" !== a &&
                                        "autoFocus" !== a &&
                                        (C.hasOwnProperty(a) ? e || (e = []) : (e = e || []).push(a, null));
                        for (a in r) {
                            var c = r[a];
                            if (((s = null != l ? l[a] : void 0), r.hasOwnProperty(a) && c !== s && (null != c || null != s)))
                                if ("style" === a)
                                    if (s) {
                                        for (u in s) !s.hasOwnProperty(u) || (c && c.hasOwnProperty(u)) || (n || (n = {}), (n[u] = ""));
                                        for (u in c) c.hasOwnProperty(u) && s[u] !== c[u] && (n || (n = {}), (n[u] = c[u]));
                                    } else n || (e || (e = []), e.push(a, n)), (n = c);
                                else
                                    "dangerouslySetInnerHTML" === a
                                        ? ((c = c ? c.__html : void 0), (s = s ? s.__html : void 0), null != c && s !== c && (e = e || []).push(a, c))
                                        : "children" === a
                                        ? s === c || ("string" != typeof c && "number" != typeof c) || (e = e || []).push(a, "" + c)
                                        : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && (C.hasOwnProperty(a) ? (null != c && un(i, a), e || s === c || (e = [])) : (e = e || []).push(a, c));
                        }
                        n && (e = e || []).push("style", n), (i = e), (t.updateQueue = i) && (t.effectTag |= 4);
                    }
                }),
                (Vl = function (e, t, n, r) {
                    n !== r && (t.effectTag |= 4);
                });
            var Jl = "function" == typeof WeakSet ? WeakSet : Set;
            function ea(e, t) {
                var n = t.source,
                    r = t.stack;
                null === r && null !== n && (r = ve(n)), null !== n && ge(n.type), (t = t.value), null !== e && 1 === e.tag && ge(e.type);
                try {
                    console.error(t);
                } catch (e) {
                    setTimeout(function () {
                        throw e;
                    });
                }
            }
            function ta(e) {
                var t = e.ref;
                if (null !== t)
                    if ("function" == typeof t)
                        try {
                            t(null);
                        } catch (t) {
                            yu(e, t);
                        }
                    else t.current = null;
            }
            function na(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        return;
                    case 1:
                        if (256 & t.effectTag && null !== e) {
                            var n = e.memoizedProps,
                                r = e.memoizedState;
                            (t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Ko(t.type, n), r)), (e.__reactInternalSnapshotBeforeUpdate = t);
                        }
                        return;
                    case 3:
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        return;
                }
                throw Error(l(163));
            }
            function ra(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = (t = t.next);
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.destroy;
                            (n.destroy = void 0), void 0 !== r && r();
                        }
                        n = n.next;
                    } while (n !== t);
                }
            }
            function oa(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = (t = t.next);
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.create;
                            n.destroy = r();
                        }
                        n = n.next;
                    } while (n !== t);
                }
            }
            function ia(e, t, n) {
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        return void oa(3, n);
                    case 1:
                        if (((e = n.stateNode), 4 & n.effectTag))
                            if (null === t) e.componentDidMount();
                            else {
                                var r = n.elementType === n.type ? t.memoizedProps : Ko(n.type, t.memoizedProps);
                                e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate);
                            }
                        return void (null !== (t = n.updateQueue) && di(n, t, e));
                    case 3:
                        if (null !== (t = n.updateQueue)) {
                            if (((e = null), null !== n.child))
                                switch (n.child.tag) {
                                    case 5:
                                        e = n.child.stateNode;
                                        break;
                                    case 1:
                                        e = n.child.stateNode;
                                }
                            di(n, t, e);
                        }
                        return;
                    case 5:
                        return (e = n.stateNode), void (null === t && 4 & n.effectTag && vn(n.type, n.memoizedProps) && e.focus());
                    case 6:
                    case 4:
                    case 12:
                        return;
                    case 13:
                        return void (null === n.memoizedState && ((n = n.alternate), null !== n && ((n = n.memoizedState), null !== n && ((n = n.dehydrated), null !== n && Dt(n)))));
                    case 19:
                    case 17:
                    case 20:
                    case 21:
                        return;
                }
                throw Error(l(163));
            }
            function la(e, t, n) {
                switch (("function" == typeof xu && xu(t), t.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                            var r = e.next;
                            Ho(97 < n ? 97 : n, function () {
                                var e = r;
                                do {
                                    var n = e.destroy;
                                    if (void 0 !== n) {
                                        var o = t;
                                        try {
                                            n();
                                        } catch (e) {
                                            yu(o, e);
                                        }
                                    }
                                    e = e.next;
                                } while (e !== r);
                            });
                        }
                        break;
                    case 1:
                        ta(t),
                            "function" == typeof (n = t.stateNode).componentWillUnmount &&
                                (function (e, t) {
                                    try {
                                        (t.props = e.memoizedProps), (t.state = e.memoizedState), t.componentWillUnmount();
                                    } catch (t) {
                                        yu(e, t);
                                    }
                                })(t, n);
                        break;
                    case 5:
                        ta(t);
                        break;
                    case 4:
                        ca(e, t, n);
                }
            }
            function aa(e) {
                var t = e.alternate;
                (e.return = null),
                    (e.child = null),
                    (e.memoizedState = null),
                    (e.updateQueue = null),
                    (e.dependencies = null),
                    (e.alternate = null),
                    (e.firstEffect = null),
                    (e.lastEffect = null),
                    (e.pendingProps = null),
                    (e.memoizedProps = null),
                    (e.stateNode = null),
                    null !== t && aa(t);
            }
            function ua(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag;
            }
            function sa(e) {
                e: {
                    for (var t = e.return; null !== t; ) {
                        if (ua(t)) {
                            var n = t;
                            break e;
                        }
                        t = t.return;
                    }
                    throw Error(l(160));
                }
                switch (((t = n.stateNode), n.tag)) {
                    case 5:
                        var r = !1;
                        break;
                    case 3:
                    case 4:
                        (t = t.containerInfo), (r = !0);
                        break;
                    default:
                        throw Error(l(161));
                }
                16 & n.effectTag && (Ue(t, ""), (n.effectTag &= -17));
                e: t: for (n = e; ; ) {
                    for (; null === n.sibling; ) {
                        if (null === n.return || ua(n.return)) {
                            n = null;
                            break e;
                        }
                        n = n.return;
                    }
                    for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
                        if (2 & n.effectTag) continue t;
                        if (null === n.child || 4 === n.tag) continue t;
                        (n.child.return = n), (n = n.child);
                    }
                    if (!(2 & n.effectTag)) {
                        n = n.stateNode;
                        break e;
                    }
                }
                r
                    ? (function e(t, n, r) {
                          var o = t.tag,
                              i = 5 === o || 6 === o;
                          if (i)
                              (t = i ? t.stateNode : t.stateNode.instance),
                                  n
                                      ? 8 === r.nodeType
                                          ? r.parentNode.insertBefore(t, n)
                                          : r.insertBefore(t, n)
                                      : (8 === r.nodeType ? (n = r.parentNode).insertBefore(t, r) : (n = r).appendChild(t), (null !== (r = r._reactRootContainer) && void 0 !== r) || null !== n.onclick || (n.onclick = sn));
                          else if (4 !== o && null !== (t = t.child)) for (e(t, n, r), t = t.sibling; null !== t; ) e(t, n, r), (t = t.sibling);
                      })(e, n, t)
                    : (function e(t, n, r) {
                          var o = t.tag,
                              i = 5 === o || 6 === o;
                          if (i) (t = i ? t.stateNode : t.stateNode.instance), n ? r.insertBefore(t, n) : r.appendChild(t);
                          else if (4 !== o && null !== (t = t.child)) for (e(t, n, r), t = t.sibling; null !== t; ) e(t, n, r), (t = t.sibling);
                      })(e, n, t);
            }
            function ca(e, t, n) {
                for (var r, o, i = t, a = !1; ; ) {
                    if (!a) {
                        a = i.return;
                        e: for (;;) {
                            if (null === a) throw Error(l(160));
                            switch (((r = a.stateNode), a.tag)) {
                                case 5:
                                    o = !1;
                                    break e;
                                case 3:
                                case 4:
                                    (r = r.containerInfo), (o = !0);
                                    break e;
                            }
                            a = a.return;
                        }
                        a = !0;
                    }
                    if (5 === i.tag || 6 === i.tag) {
                        e: for (var u = e, s = i, c = n, f = s; ; )
                            if ((la(u, f, c), null !== f.child && 4 !== f.tag)) (f.child.return = f), (f = f.child);
                            else {
                                if (f === s) break e;
                                for (; null === f.sibling; ) {
                                    if (null === f.return || f.return === s) break e;
                                    f = f.return;
                                }
                                (f.sibling.return = f.return), (f = f.sibling);
                            }
                        o ? ((u = r), (s = i.stateNode), 8 === u.nodeType ? u.parentNode.removeChild(s) : u.removeChild(s)) : r.removeChild(i.stateNode);
                    } else if (4 === i.tag) {
                        if (null !== i.child) {
                            (r = i.stateNode.containerInfo), (o = !0), (i.child.return = i), (i = i.child);
                            continue;
                        }
                    } else if ((la(e, i, n), null !== i.child)) {
                        (i.child.return = i), (i = i.child);
                        continue;
                    }
                    if (i === t) break;
                    for (; null === i.sibling; ) {
                        if (null === i.return || i.return === t) return;
                        4 === (i = i.return).tag && (a = !1);
                    }
                    (i.sibling.return = i.return), (i = i.sibling);
                }
            }
            function fa(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        return void ra(3, t);
                    case 1:
                        return;
                    case 5:
                        var n = t.stateNode;
                        if (null != n) {
                            var r = t.memoizedProps,
                                o = null !== e ? e.memoizedProps : r;
                            e = t.type;
                            var i = t.updateQueue;
                            if (((t.updateQueue = null), null !== i)) {
                                for (n[Sn] = r, "input" === e && "radio" === r.type && null != r.name && Ce(n, r), ln(e, o), t = ln(e, r), o = 0; o < i.length; o += 2) {
                                    var a = i[o],
                                        u = i[o + 1];
                                    "style" === a ? nn(n, u) : "dangerouslySetInnerHTML" === a ? Be(n, u) : "children" === a ? Ue(n, u) : Y(n, a, u, t);
                                }
                                switch (e) {
                                    case "input":
                                        Se(n, r);
                                        break;
                                    case "textarea":
                                        Me(n, r);
                                        break;
                                    case "select":
                                        (t = n._wrapperState.wasMultiple),
                                            (n._wrapperState.wasMultiple = !!r.multiple),
                                            null != (e = r.value) ? Ne(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? Ne(n, !!r.multiple, r.defaultValue, !0) : Ne(n, !!r.multiple, r.multiple ? [] : "", !1));
                                }
                            }
                        }
                        return;
                    case 6:
                        if (null === t.stateNode) throw Error(l(162));
                        return void (t.stateNode.nodeValue = t.memoizedProps);
                    case 3:
                        return void ((t = t.stateNode).hydrate && ((t.hydrate = !1), Dt(t.containerInfo)));
                    case 12:
                        return;
                    case 13:
                        if (((n = t), null === t.memoizedState ? (r = !1) : ((r = !0), (n = t.child), (Ia = Uo())), null !== n))
                            e: for (e = n; ; ) {
                                if (5 === e.tag)
                                    (i = e.stateNode),
                                        r
                                            ? "function" == typeof (i = i.style).setProperty
                                                ? i.setProperty("display", "none", "important")
                                                : (i.display = "none")
                                            : ((i = e.stateNode), (o = null != (o = e.memoizedProps.style) && o.hasOwnProperty("display") ? o.display : null), (i.style.display = tn("display", o)));
                                else if (6 === e.tag) e.stateNode.nodeValue = r ? "" : e.memoizedProps;
                                else {
                                    if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                                        ((i = e.child.sibling).return = e), (e = i);
                                        continue;
                                    }
                                    if (null !== e.child) {
                                        (e.child.return = e), (e = e.child);
                                        continue;
                                    }
                                }
                                if (e === n) break;
                                for (; null === e.sibling; ) {
                                    if (null === e.return || e.return === n) break e;
                                    e = e.return;
                                }
                                (e.sibling.return = e.return), (e = e.sibling);
                            }
                        return void da(t);
                    case 19:
                        return void da(t);
                    case 17:
                        return;
                }
                throw Error(l(163));
            }
            function da(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new Jl()),
                        t.forEach(function (t) {
                            var r = wu.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r));
                        });
                }
            }
            var pa = "function" == typeof WeakMap ? WeakMap : Map;
            function ha(e, t, n) {
                ((n = ui(n, null)).tag = 3), (n.payload = { element: null });
                var r = t.value;
                return (
                    (n.callback = function () {
                        Da || ((Da = !0), (Fa = r)), ea(e, t);
                    }),
                    n
                );
            }
            function ma(e, t, n) {
                (n = ui(n, null)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" == typeof r) {
                    var o = t.value;
                    n.payload = function () {
                        return ea(e, t), r(o);
                    };
                }
                var i = e.stateNode;
                return (
                    null !== i &&
                        "function" == typeof i.componentDidCatch &&
                        (n.callback = function () {
                            "function" != typeof r && (null === Aa ? (Aa = new Set([this])) : Aa.add(this), ea(e, t));
                            var n = t.stack;
                            this.componentDidCatch(t.value, { componentStack: null !== n ? n : "" });
                        }),
                    n
                );
            }
            var ga,
                va = Math.ceil,
                ya = q.ReactCurrentDispatcher,
                ba = q.ReactCurrentOwner,
                wa = 0,
                Ea = 3,
                xa = 4,
                ka = 0,
                Ca = null,
                Sa = null,
                Ta = 0,
                _a = wa,
                Pa = null,
                Na = 1073741823,
                Oa = 1073741823,
                La = null,
                Ma = 0,
                Ra = !1,
                Ia = 0,
                za = null,
                Da = !1,
                Fa = null,
                Aa = null,
                Ba = !1,
                Ua = null,
                ja = 90,
                Va = null,
                Ha = 0,
                Wa = null,
                Qa = 0;
            function Za() {
                return 0 != (48 & ka) ? 1073741821 - ((Uo() / 10) | 0) : 0 !== Qa ? Qa : (Qa = 1073741821 - ((Uo() / 10) | 0));
            }
            function $a(e, t, n) {
                if (0 == (2 & (t = t.mode))) return 1073741823;
                var r = jo();
                if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
                if (0 != (16 & ka)) return Ta;
                if (null !== n) e = Go(e, 0 | n.timeoutMs || 5e3, 250);
                else
                    switch (r) {
                        case 99:
                            e = 1073741823;
                            break;
                        case 98:
                            e = Go(e, 150, 100);
                            break;
                        case 97:
                        case 96:
                            e = Go(e, 5e3, 250);
                            break;
                        case 95:
                            e = 2;
                            break;
                        default:
                            throw Error(l(326));
                    }
                return null !== Ca && e === Ta && --e, e;
            }
            function Ga(e, t) {
                if (50 < Ha) throw ((Ha = 0), (Wa = null), Error(l(185)));
                if (null !== (e = Ka(e, t))) {
                    var n = jo();
                    1073741823 === t ? (0 != (8 & ka) && 0 == (48 & ka) ? Ja(e) : (Ya(e), 0 === ka && Zo())) : Ya(e),
                        0 == (4 & ka) || (98 !== n && 99 !== n) || (null === Va ? (Va = new Map([[e, t]])) : (void 0 === (n = Va.get(e)) || n > t) && Va.set(e, t));
                }
            }
            function Ka(e, t) {
                e.expirationTime < t && (e.expirationTime = t);
                var n = e.alternate;
                null !== n && n.expirationTime < t && (n.expirationTime = t);
                var r = e.return,
                    o = null;
                if (null === r && 3 === e.tag) o = e.stateNode;
                else
                    for (; null !== r; ) {
                        if (((n = r.alternate), r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag)) {
                            o = r.stateNode;
                            break;
                        }
                        r = r.return;
                    }
                return null !== o && (Ca === o && (lu(t), _a === xa && Ru(o, Ta)), Iu(o, t)), o;
            }
            function qa(e) {
                var t = e.lastExpiredTime;
                if (0 !== t) return t;
                if (!Mu(e, (t = e.firstPendingTime))) return t;
                var n = e.lastPingedTime;
                return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e ? 0 : e;
            }
            function Ya(e) {
                if (0 !== e.lastExpiredTime) (e.callbackExpirationTime = 1073741823), (e.callbackPriority = 99), (e.callbackNode = Qo(Ja.bind(null, e)));
                else {
                    var t = qa(e),
                        n = e.callbackNode;
                    if (0 === t) null !== n && ((e.callbackNode = null), (e.callbackExpirationTime = 0), (e.callbackPriority = 90));
                    else {
                        var r = Za();
                        if ((1073741823 === t ? (r = 99) : 1 === t || 2 === t ? (r = 95) : (r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95), null !== n)) {
                            var o = e.callbackPriority;
                            if (e.callbackExpirationTime === t && o >= r) return;
                            n !== Ro && Co(n);
                        }
                        (e.callbackExpirationTime = t), (e.callbackPriority = r), (t = 1073741823 === t ? Qo(Ja.bind(null, e)) : Wo(r, Xa.bind(null, e), { timeout: 10 * (1073741821 - t) - Uo() })), (e.callbackNode = t);
                    }
                }
            }
            function Xa(e, t) {
                if (((Qa = 0), t)) return zu(e, (t = Za())), Ya(e), null;
                var n = qa(e);
                if (0 !== n) {
                    if (((t = e.callbackNode), 0 != (48 & ka))) throw Error(l(327));
                    if ((mu(), (e === Ca && n === Ta) || nu(e, n), null !== Sa)) {
                        var r = ka;
                        ka |= 16;
                        for (var o = ou(); ; )
                            try {
                                uu();
                                break;
                            } catch (t) {
                                ru(e, t);
                            }
                        if ((ei(), (ka = r), (ya.current = o), 1 === _a)) throw ((t = Pa), nu(e, n), Ru(e, n), Ya(e), t);
                        if (null === Sa)
                            switch (((o = e.finishedWork = e.current.alternate), (e.finishedExpirationTime = n), (r = _a), (Ca = null), r)) {
                                case wa:
                                case 1:
                                    throw Error(l(345));
                                case 2:
                                    zu(e, 2 < n ? 2 : n);
                                    break;
                                case Ea:
                                    if ((Ru(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = fu(o)), 1073741823 === Na && 10 < (o = Ia + 500 - Uo()))) {
                                        if (Ra) {
                                            var i = e.lastPingedTime;
                                            if (0 === i || i >= n) {
                                                (e.lastPingedTime = n), nu(e, n);
                                                break;
                                            }
                                        }
                                        if (0 !== (i = qa(e)) && i !== n) break;
                                        if (0 !== r && r !== n) {
                                            e.lastPingedTime = r;
                                            break;
                                        }
                                        e.timeoutHandle = bn(du.bind(null, e), o);
                                        break;
                                    }
                                    du(e);
                                    break;
                                case xa:
                                    if ((Ru(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = fu(o)), Ra && (0 === (o = e.lastPingedTime) || o >= n))) {
                                        (e.lastPingedTime = n), nu(e, n);
                                        break;
                                    }
                                    if (0 !== (o = qa(e)) && o !== n) break;
                                    if (0 !== r && r !== n) {
                                        e.lastPingedTime = r;
                                        break;
                                    }
                                    if (
                                        (1073741823 !== Oa
                                            ? (r = 10 * (1073741821 - Oa) - Uo())
                                            : 1073741823 === Na
                                            ? (r = 0)
                                            : ((r = 10 * (1073741821 - Na) - 5e3),
                                              0 > (r = (o = Uo()) - r) && (r = 0),
                                              (n = 10 * (1073741821 - n) - o) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * va(r / 1960)) - r) && (r = n)),
                                        10 < r)
                                    ) {
                                        e.timeoutHandle = bn(du.bind(null, e), r);
                                        break;
                                    }
                                    du(e);
                                    break;
                                case 5:
                                    if (1073741823 !== Na && null !== La) {
                                        i = Na;
                                        var a = La;
                                        if ((0 >= (r = 0 | a.busyMinDurationMs) ? (r = 0) : ((o = 0 | a.busyDelayMs), (r = (i = Uo() - (10 * (1073741821 - i) - (0 | a.timeoutMs || 5e3))) <= o ? 0 : o + r - i)), 10 < r)) {
                                            Ru(e, n), (e.timeoutHandle = bn(du.bind(null, e), r));
                                            break;
                                        }
                                    }
                                    du(e);
                                    break;
                                default:
                                    throw Error(l(329));
                            }
                        if ((Ya(e), e.callbackNode === t)) return Xa.bind(null, e);
                    }
                }
                return null;
            }
            function Ja(e) {
                var t = e.lastExpiredTime;
                if (((t = 0 !== t ? t : 1073741823), 0 != (48 & ka))) throw Error(l(327));
                if ((mu(), (e === Ca && t === Ta) || nu(e, t), null !== Sa)) {
                    var n = ka;
                    ka |= 16;
                    for (var r = ou(); ; )
                        try {
                            au();
                            break;
                        } catch (t) {
                            ru(e, t);
                        }
                    if ((ei(), (ka = n), (ya.current = r), 1 === _a)) throw ((n = Pa), nu(e, t), Ru(e, t), Ya(e), n);
                    if (null !== Sa) throw Error(l(261));
                    (e.finishedWork = e.current.alternate), (e.finishedExpirationTime = t), (Ca = null), du(e), Ya(e);
                }
                return null;
            }
            function eu(e, t) {
                var n = ka;
                ka |= 1;
                try {
                    return e(t);
                } finally {
                    0 === (ka = n) && Zo();
                }
            }
            function tu(e, t) {
                var n = ka;
                (ka &= -2), (ka |= 8);
                try {
                    return e(t);
                } finally {
                    0 === (ka = n) && Zo();
                }
            }
            function nu(e, t) {
                (e.finishedWork = null), (e.finishedExpirationTime = 0);
                var n = e.timeoutHandle;
                if ((-1 !== n && ((e.timeoutHandle = -1), wn(n)), null !== Sa))
                    for (n = Sa.return; null !== n; ) {
                        var r = n;
                        switch (r.tag) {
                            case 1:
                                null != (r = r.type.childContextTypes) && vo();
                                break;
                            case 3:
                                Ri(), uo(po), uo(fo);
                                break;
                            case 5:
                                zi(r);
                                break;
                            case 4:
                                Ri();
                                break;
                            case 13:
                            case 19:
                                uo(Di);
                                break;
                            case 10:
                                ti(r);
                        }
                        n = n.return;
                    }
                (Ca = e), (Sa = Tu(e.current, null)), (Ta = t), (_a = wa), (Pa = null), (Oa = Na = 1073741823), (La = null), (Ma = 0), (Ra = !1);
            }
            function ru(e, t) {
                for (;;) {
                    try {
                        if ((ei(), (Bi.current = gl), Qi))
                            for (var n = Vi.memoizedState; null !== n; ) {
                                var r = n.queue;
                                null !== r && (r.pending = null), (n = n.next);
                            }
                        if (((ji = 0), (Wi = Hi = Vi = null), (Qi = !1), null === Sa || null === Sa.return)) return (_a = 1), (Pa = t), (Sa = null);
                        e: {
                            var o = e,
                                i = Sa.return,
                                l = Sa,
                                a = t;
                            if (((t = Ta), (l.effectTag |= 2048), (l.firstEffect = l.lastEffect = null), null !== a && "object" == typeof a && "function" == typeof a.then)) {
                                var u = a;
                                if (0 == (2 & l.mode)) {
                                    var s = l.alternate;
                                    s ? ((l.updateQueue = s.updateQueue), (l.memoizedState = s.memoizedState), (l.expirationTime = s.expirationTime)) : ((l.updateQueue = null), (l.memoizedState = null));
                                }
                                var c = 0 != (1 & Di.current),
                                    f = i;
                                do {
                                    var d;
                                    if ((d = 13 === f.tag)) {
                                        var p = f.memoizedState;
                                        if (null !== p) d = null !== p.dehydrated;
                                        else {
                                            var h = f.memoizedProps;
                                            d = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !c);
                                        }
                                    }
                                    if (d) {
                                        var m = f.updateQueue;
                                        if (null === m) {
                                            var g = new Set();
                                            g.add(u), (f.updateQueue = g);
                                        } else m.add(u);
                                        if (0 == (2 & f.mode)) {
                                            if (((f.effectTag |= 64), (l.effectTag &= -2981), 1 === l.tag))
                                                if (null === l.alternate) l.tag = 17;
                                                else {
                                                    var v = ui(1073741823, null);
                                                    (v.tag = 2), si(l, v);
                                                }
                                            l.expirationTime = 1073741823;
                                            break e;
                                        }
                                        (a = void 0), (l = t);
                                        var y = o.pingCache;
                                        if ((null === y ? ((y = o.pingCache = new pa()), (a = new Set()), y.set(u, a)) : void 0 === (a = y.get(u)) && ((a = new Set()), y.set(u, a)), !a.has(l))) {
                                            a.add(l);
                                            var b = bu.bind(null, o, u, l);
                                            u.then(b, b);
                                        }
                                        (f.effectTag |= 4096), (f.expirationTime = t);
                                        break e;
                                    }
                                    f = f.return;
                                } while (null !== f);
                                a = Error(
                                    (ge(l.type) || "A React component") +
                                        " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                                        ve(l)
                                );
                            }
                            5 !== _a && (_a = 2), (a = Xl(a, l)), (f = i);
                            do {
                                switch (f.tag) {
                                    case 3:
                                        (u = a), (f.effectTag |= 4096), (f.expirationTime = t), ci(f, ha(f, u, t));
                                        break e;
                                    case 1:
                                        u = a;
                                        var w = f.type,
                                            E = f.stateNode;
                                        if (0 == (64 & f.effectTag) && ("function" == typeof w.getDerivedStateFromError || (null !== E && "function" == typeof E.componentDidCatch && (null === Aa || !Aa.has(E))))) {
                                            (f.effectTag |= 4096), (f.expirationTime = t), ci(f, ma(f, u, t));
                                            break e;
                                        }
                                }
                                f = f.return;
                            } while (null !== f);
                        }
                        Sa = cu(Sa);
                    } catch (e) {
                        t = e;
                        continue;
                    }
                    break;
                }
            }
            function ou() {
                var e = ya.current;
                return (ya.current = gl), null === e ? gl : e;
            }
            function iu(e, t) {
                e < Na && 2 < e && (Na = e), null !== t && e < Oa && 2 < e && ((Oa = e), (La = t));
            }
            function lu(e) {
                e > Ma && (Ma = e);
            }
            function au() {
                for (; null !== Sa; ) Sa = su(Sa);
            }
            function uu() {
                for (; null !== Sa && !Io(); ) Sa = su(Sa);
            }
            function su(e) {
                var t = ga(e.alternate, e, Ta);
                return (e.memoizedProps = e.pendingProps), null === t && (t = cu(e)), (ba.current = null), t;
            }
            function cu(e) {
                Sa = e;
                do {
                    var t = Sa.alternate;
                    if (((e = Sa.return), 0 == (2048 & Sa.effectTag))) {
                        if (((t = ql(t, Sa, Ta)), 1 === Ta || 1 !== Sa.childExpirationTime)) {
                            for (var n = 0, r = Sa.child; null !== r; ) {
                                var o = r.expirationTime,
                                    i = r.childExpirationTime;
                                o > n && (n = o), i > n && (n = i), (r = r.sibling);
                            }
                            Sa.childExpirationTime = n;
                        }
                        if (null !== t) return t;
                        null !== e &&
                            0 == (2048 & e.effectTag) &&
                            (null === e.firstEffect && (e.firstEffect = Sa.firstEffect),
                            null !== Sa.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Sa.firstEffect), (e.lastEffect = Sa.lastEffect)),
                            1 < Sa.effectTag && (null !== e.lastEffect ? (e.lastEffect.nextEffect = Sa) : (e.firstEffect = Sa), (e.lastEffect = Sa)));
                    } else {
                        if (null !== (t = Yl(Sa))) return (t.effectTag &= 2047), t;
                        null !== e && ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
                    }
                    if (null !== (t = Sa.sibling)) return t;
                    Sa = e;
                } while (null !== Sa);
                return _a === wa && (_a = 5), null;
            }
            function fu(e) {
                var t = e.expirationTime;
                return t > (e = e.childExpirationTime) ? t : e;
            }
            function du(e) {
                var t = jo();
                return Ho(99, pu.bind(null, e, t)), null;
            }
            function pu(e, t) {
                do {
                    mu();
                } while (null !== Ua);
                if (0 != (48 & ka)) throw Error(l(327));
                var n = e.finishedWork,
                    r = e.finishedExpirationTime;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedExpirationTime = 0), n === e.current)) throw Error(l(177));
                (e.callbackNode = null), (e.callbackExpirationTime = 0), (e.callbackPriority = 90), (e.nextKnownPendingLevel = 0);
                var o = fu(n);
                if (
                    ((e.firstPendingTime = o),
                    r <= e.lastSuspendedTime ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0) : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
                    r <= e.lastPingedTime && (e.lastPingedTime = 0),
                    r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
                    e === Ca && ((Sa = Ca = null), (Ta = 0)),
                    1 < n.effectTag ? (null !== n.lastEffect ? ((n.lastEffect.nextEffect = n), (o = n.firstEffect)) : (o = n)) : (o = n.firstEffect),
                    null !== o)
                ) {
                    var i = ka;
                    (ka |= 32), (ba.current = null), (mn = Zt);
                    var a = pn();
                    if (hn(a)) {
                        if ("selectionStart" in a) var u = { start: a.selectionStart, end: a.selectionEnd };
                        else
                            e: {
                                var s = (u = ((u = a.ownerDocument) && u.defaultView) || window).getSelection && u.getSelection();
                                if (s && 0 !== s.rangeCount) {
                                    u = s.anchorNode;
                                    var c = s.anchorOffset,
                                        f = s.focusNode;
                                    s = s.focusOffset;
                                    try {
                                        u.nodeType, f.nodeType;
                                    } catch (e) {
                                        u = null;
                                        break e;
                                    }
                                    var d = 0,
                                        p = -1,
                                        h = -1,
                                        m = 0,
                                        g = 0,
                                        v = a,
                                        y = null;
                                    t: for (;;) {
                                        for (
                                            var b;
                                            v !== u || (0 !== c && 3 !== v.nodeType) || (p = d + c), v !== f || (0 !== s && 3 !== v.nodeType) || (h = d + s), 3 === v.nodeType && (d += v.nodeValue.length), null !== (b = v.firstChild);

                                        )
                                            (y = v), (v = b);
                                        for (;;) {
                                            if (v === a) break t;
                                            if ((y === u && ++m === c && (p = d), y === f && ++g === s && (h = d), null !== (b = v.nextSibling))) break;
                                            y = (v = y).parentNode;
                                        }
                                        v = b;
                                    }
                                    u = -1 === p || -1 === h ? null : { start: p, end: h };
                                } else u = null;
                            }
                        u = u || { start: 0, end: 0 };
                    } else u = null;
                    (gn = { activeElementDetached: null, focusedElem: a, selectionRange: u }), (Zt = !1), (za = o);
                    do {
                        try {
                            hu();
                        } catch (e) {
                            if (null === za) throw Error(l(330));
                            yu(za, e), (za = za.nextEffect);
                        }
                    } while (null !== za);
                    za = o;
                    do {
                        try {
                            for (a = e, u = t; null !== za; ) {
                                var w = za.effectTag;
                                if ((16 & w && Ue(za.stateNode, ""), 128 & w)) {
                                    var E = za.alternate;
                                    if (null !== E) {
                                        var x = E.ref;
                                        null !== x && ("function" == typeof x ? x(null) : (x.current = null));
                                    }
                                }
                                switch (1038 & w) {
                                    case 2:
                                        sa(za), (za.effectTag &= -3);
                                        break;
                                    case 6:
                                        sa(za), (za.effectTag &= -3), fa(za.alternate, za);
                                        break;
                                    case 1024:
                                        za.effectTag &= -1025;
                                        break;
                                    case 1028:
                                        (za.effectTag &= -1025), fa(za.alternate, za);
                                        break;
                                    case 4:
                                        fa(za.alternate, za);
                                        break;
                                    case 8:
                                        ca(a, (c = za), u), aa(c);
                                }
                                za = za.nextEffect;
                            }
                        } catch (e) {
                            if (null === za) throw Error(l(330));
                            yu(za, e), (za = za.nextEffect);
                        }
                    } while (null !== za);
                    if (
                        ((x = gn),
                        (E = pn()),
                        (w = x.focusedElem),
                        (u = x.selectionRange),
                        E !== w &&
                            w &&
                            w.ownerDocument &&
                            (function e(t, n) {
                                return (
                                    !(!t || !n) &&
                                    (t === n || ((!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n)))))
                                );
                            })(w.ownerDocument.documentElement, w))
                    ) {
                        null !== u &&
                            hn(w) &&
                            ((E = u.start),
                            void 0 === (x = u.end) && (x = E),
                            "selectionStart" in w
                                ? ((w.selectionStart = E), (w.selectionEnd = Math.min(x, w.value.length)))
                                : (x = ((E = w.ownerDocument || document) && E.defaultView) || window).getSelection &&
                                  ((x = x.getSelection()),
                                  (c = w.textContent.length),
                                  (a = Math.min(u.start, c)),
                                  (u = void 0 === u.end ? a : Math.min(u.end, c)),
                                  !x.extend && a > u && ((c = u), (u = a), (a = c)),
                                  (c = dn(w, a)),
                                  (f = dn(w, u)),
                                  c &&
                                      f &&
                                      (1 !== x.rangeCount || x.anchorNode !== c.node || x.anchorOffset !== c.offset || x.focusNode !== f.node || x.focusOffset !== f.offset) &&
                                      ((E = E.createRange()).setStart(c.node, c.offset), x.removeAllRanges(), a > u ? (x.addRange(E), x.extend(f.node, f.offset)) : (E.setEnd(f.node, f.offset), x.addRange(E))))),
                            (E = []);
                        for (x = w; (x = x.parentNode); ) 1 === x.nodeType && E.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
                        for ("function" == typeof w.focus && w.focus(), w = 0; w < E.length; w++) ((x = E[w]).element.scrollLeft = x.left), (x.element.scrollTop = x.top);
                    }
                    (Zt = !!mn), (gn = mn = null), (e.current = n), (za = o);
                    do {
                        try {
                            for (w = e; null !== za; ) {
                                var k = za.effectTag;
                                if ((36 & k && ia(w, za.alternate, za), 128 & k)) {
                                    E = void 0;
                                    var C = za.ref;
                                    if (null !== C) {
                                        var S = za.stateNode;
                                        switch (za.tag) {
                                            case 5:
                                                E = S;
                                                break;
                                            default:
                                                E = S;
                                        }
                                        "function" == typeof C ? C(E) : (C.current = E);
                                    }
                                }
                                za = za.nextEffect;
                            }
                        } catch (e) {
                            if (null === za) throw Error(l(330));
                            yu(za, e), (za = za.nextEffect);
                        }
                    } while (null !== za);
                    (za = null), zo(), (ka = i);
                } else e.current = n;
                if (Ba) (Ba = !1), (Ua = e), (ja = t);
                else for (za = o; null !== za; ) (t = za.nextEffect), (za.nextEffect = null), (za = t);
                if ((0 === (t = e.firstPendingTime) && (Aa = null), 1073741823 === t ? (e === Wa ? Ha++ : ((Ha = 0), (Wa = e))) : (Ha = 0), "function" == typeof Eu && Eu(n.stateNode, r), Ya(e), Da))
                    throw ((Da = !1), (e = Fa), (Fa = null), e);
                return 0 != (8 & ka) || Zo(), null;
            }
            function hu() {
                for (; null !== za; ) {
                    var e = za.effectTag;
                    0 != (256 & e) && na(za.alternate, za),
                        0 == (512 & e) ||
                            Ba ||
                            ((Ba = !0),
                            Wo(97, function () {
                                return mu(), null;
                            })),
                        (za = za.nextEffect);
                }
            }
            function mu() {
                if (90 !== ja) {
                    var e = 97 < ja ? 97 : ja;
                    return (ja = 90), Ho(e, gu);
                }
            }
            function gu() {
                if (null === Ua) return !1;
                var e = Ua;
                if (((Ua = null), 0 != (48 & ka))) throw Error(l(331));
                var t = ka;
                for (ka |= 32, e = e.current.firstEffect; null !== e; ) {
                    try {
                        var n = e;
                        if (0 != (512 & n.effectTag))
                            switch (n.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 22:
                                    ra(5, n), oa(5, n);
                            }
                    } catch (t) {
                        if (null === e) throw Error(l(330));
                        yu(e, t);
                    }
                    (n = e.nextEffect), (e.nextEffect = null), (e = n);
                }
                return (ka = t), Zo(), !0;
            }
            function vu(e, t, n) {
                si(e, (t = ha(e, (t = Xl(n, t)), 1073741823))), null !== (e = Ka(e, 1073741823)) && Ya(e);
            }
            function yu(e, t) {
                if (3 === e.tag) vu(e, e, t);
                else
                    for (var n = e.return; null !== n; ) {
                        if (3 === n.tag) {
                            vu(n, e, t);
                            break;
                        }
                        if (1 === n.tag) {
                            var r = n.stateNode;
                            if ("function" == typeof n.type.getDerivedStateFromError || ("function" == typeof r.componentDidCatch && (null === Aa || !Aa.has(r)))) {
                                si(n, (e = ma(n, (e = Xl(t, e)), 1073741823))), null !== (n = Ka(n, 1073741823)) && Ya(n);
                                break;
                            }
                        }
                        n = n.return;
                    }
            }
            function bu(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t),
                    Ca === e && Ta === n ? (_a === xa || (_a === Ea && 1073741823 === Na && Uo() - Ia < 500) ? nu(e, Ta) : (Ra = !0)) : Mu(e, n) && ((0 !== (t = e.lastPingedTime) && t < n) || ((e.lastPingedTime = n), Ya(e)));
            }
            function wu(e, t) {
                var n = e.stateNode;
                null !== n && n.delete(t), 0 === (t = 0) && (t = $a((t = Za()), e, null)), null !== (e = Ka(e, t)) && Ya(e);
            }
            ga = function (e, t, n) {
                var r = t.expirationTime;
                if (null !== e) {
                    var o = t.pendingProps;
                    if (e.memoizedProps !== o || po.current) Ol = !0;
                    else {
                        if (r < n) {
                            switch (((Ol = !1), t.tag)) {
                                case 3:
                                    Bl(t), Pl();
                                    break;
                                case 5:
                                    if ((Ii(t), 4 & t.mode && 1 !== n && o.hidden)) return (t.expirationTime = t.childExpirationTime = 1), null;
                                    break;
                                case 1:
                                    go(t.type) && wo(t);
                                    break;
                                case 4:
                                    Mi(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    (r = t.memoizedProps.value), (o = t.type._context), so(qo, o._currentValue), (o._currentValue = r);
                                    break;
                                case 13:
                                    if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) && r >= n ? Wl(e, t, n) : (so(Di, 1 & Di.current), null !== (t = Gl(e, t, n)) ? t.sibling : null);
                                    so(Di, 1 & Di.current);
                                    break;
                                case 19:
                                    if (((r = t.childExpirationTime >= n), 0 != (64 & e.effectTag))) {
                                        if (r) return $l(e, t, n);
                                        t.effectTag |= 64;
                                    }
                                    if ((null !== (o = t.memoizedState) && ((o.rendering = null), (o.tail = null)), so(Di, Di.current), !r)) return null;
                            }
                            return Gl(e, t, n);
                        }
                        Ol = !1;
                    }
                } else Ol = !1;
                switch (((t.expirationTime = 0), t.tag)) {
                    case 2:
                        if (
                            ((r = t.type),
                            null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
                            (e = t.pendingProps),
                            (o = mo(t, fo.current)),
                            ri(t, n),
                            (o = Gi(null, t, r, e, o, n)),
                            (t.effectTag |= 1),
                            "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof)
                        ) {
                            if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), go(r))) {
                                var i = !0;
                                wo(t);
                            } else i = !1;
                            (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null), li(t);
                            var a = r.getDerivedStateFromProps;
                            "function" == typeof a && mi(t, r, a, e), (o.updater = gi), (t.stateNode = o), (o._reactInternalFiber = t), wi(t, r, e, n), (t = Al(null, t, r, !0, i, n));
                        } else (t.tag = 0), Ll(null, t, o, n), (t = t.child);
                        return t;
                    case 16:
                        e: {
                            if (
                                ((o = t.elementType),
                                null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
                                (e = t.pendingProps),
                                (function (e) {
                                    if (-1 === e._status) {
                                        e._status = 0;
                                        var t = e._ctor;
                                        (t = t()),
                                            (e._result = t),
                                            t.then(
                                                function (t) {
                                                    0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
                                                },
                                                function (t) {
                                                    0 === e._status && ((e._status = 2), (e._result = t));
                                                }
                                            );
                                    }
                                })(o),
                                1 !== o._status)
                            )
                                throw o._result;
                            switch (
                                ((o = o._result),
                                (t.type = o),
                                (i = t.tag = (function (e) {
                                    if ("function" == typeof e) return Su(e) ? 1 : 0;
                                    if (null != e) {
                                        if ((e = e.$$typeof) === ue) return 11;
                                        if (e === fe) return 14;
                                    }
                                    return 2;
                                })(o)),
                                (e = Ko(o, e)),
                                i)
                            ) {
                                case 0:
                                    t = Dl(null, t, o, e, n);
                                    break e;
                                case 1:
                                    t = Fl(null, t, o, e, n);
                                    break e;
                                case 11:
                                    t = Ml(null, t, o, e, n);
                                    break e;
                                case 14:
                                    t = Rl(null, t, o, Ko(o.type, e), r, n);
                                    break e;
                            }
                            throw Error(l(306, o, ""));
                        }
                        return t;
                    case 0:
                        return (r = t.type), (o = t.pendingProps), Dl(e, t, r, (o = t.elementType === r ? o : Ko(r, o)), n);
                    case 1:
                        return (r = t.type), (o = t.pendingProps), Fl(e, t, r, (o = t.elementType === r ? o : Ko(r, o)), n);
                    case 3:
                        if ((Bl(t), (r = t.updateQueue), null === e || null === r)) throw Error(l(282));
                        if (((r = t.pendingProps), (o = null !== (o = t.memoizedState) ? o.element : null), ai(e, t), fi(t, r, null, n), (r = t.memoizedState.element) === o)) Pl(), (t = Gl(e, t, n));
                        else {
                            if (((o = t.stateNode.hydrate) && ((El = En(t.stateNode.containerInfo.firstChild)), (wl = t), (o = xl = !0)), o))
                                for (n = Ti(t, null, r, n), t.child = n; n; ) (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
                            else Ll(e, t, r, n), Pl();
                            t = t.child;
                        }
                        return t;
                    case 5:
                        return (
                            Ii(t),
                            null === e && Sl(t),
                            (r = t.type),
                            (o = t.pendingProps),
                            (i = null !== e ? e.memoizedProps : null),
                            (a = o.children),
                            yn(r, o) ? (a = null) : null !== i && yn(r, i) && (t.effectTag |= 16),
                            zl(e, t),
                            4 & t.mode && 1 !== n && o.hidden ? ((t.expirationTime = t.childExpirationTime = 1), (t = null)) : (Ll(e, t, a, n), (t = t.child)),
                            t
                        );
                    case 6:
                        return null === e && Sl(t), null;
                    case 13:
                        return Wl(e, t, n);
                    case 4:
                        return Mi(t, t.stateNode.containerInfo), (r = t.pendingProps), null === e ? (t.child = Si(t, null, r, n)) : Ll(e, t, r, n), t.child;
                    case 11:
                        return (r = t.type), (o = t.pendingProps), Ml(e, t, r, (o = t.elementType === r ? o : Ko(r, o)), n);
                    case 7:
                        return Ll(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return Ll(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        e: {
                            (r = t.type._context), (o = t.pendingProps), (a = t.memoizedProps), (i = o.value);
                            var u = t.type._context;
                            if ((so(qo, u._currentValue), (u._currentValue = i), null !== a))
                                if (((u = a.value), 0 === (i = Fr(u, i) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, i) : 1073741823)))) {
                                    if (a.children === o.children && !po.current) {
                                        t = Gl(e, t, n);
                                        break e;
                                    }
                                } else
                                    for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                                        var s = u.dependencies;
                                        if (null !== s) {
                                            a = u.child;
                                            for (var c = s.firstContext; null !== c; ) {
                                                if (c.context === r && 0 != (c.observedBits & i)) {
                                                    1 === u.tag && (((c = ui(n, null)).tag = 2), si(u, c)),
                                                        u.expirationTime < n && (u.expirationTime = n),
                                                        null !== (c = u.alternate) && c.expirationTime < n && (c.expirationTime = n),
                                                        ni(u.return, n),
                                                        s.expirationTime < n && (s.expirationTime = n);
                                                    break;
                                                }
                                                c = c.next;
                                            }
                                        } else a = 10 === u.tag && u.type === t.type ? null : u.child;
                                        if (null !== a) a.return = u;
                                        else
                                            for (a = u; null !== a; ) {
                                                if (a === t) {
                                                    a = null;
                                                    break;
                                                }
                                                if (null !== (u = a.sibling)) {
                                                    (u.return = a.return), (a = u);
                                                    break;
                                                }
                                                a = a.return;
                                            }
                                        u = a;
                                    }
                            Ll(e, t, o.children, n), (t = t.child);
                        }
                        return t;
                    case 9:
                        return (o = t.type), (r = (i = t.pendingProps).children), ri(t, n), (r = r((o = oi(o, i.unstable_observedBits)))), (t.effectTag |= 1), Ll(e, t, r, n), t.child;
                    case 14:
                        return (i = Ko((o = t.type), t.pendingProps)), Rl(e, t, o, (i = Ko(o.type, i)), r, n);
                    case 15:
                        return Il(e, t, t.type, t.pendingProps, r, n);
                    case 17:
                        return (
                            (r = t.type),
                            (o = t.pendingProps),
                            (o = t.elementType === r ? o : Ko(r, o)),
                            null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
                            (t.tag = 1),
                            go(r) ? ((e = !0), wo(t)) : (e = !1),
                            ri(t, n),
                            yi(t, r, o),
                            wi(t, r, o, n),
                            Al(null, t, r, !0, e, n)
                        );
                    case 19:
                        return $l(e, t, n);
                }
                throw Error(l(156, t.tag));
            };
            var Eu = null,
                xu = null;
            function ku(e, t, n, r) {
                (this.tag = e),
                    (this.key = n),
                    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
                    (this.index = 0),
                    (this.ref = null),
                    (this.pendingProps = t),
                    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
                    (this.mode = r),
                    (this.effectTag = 0),
                    (this.lastEffect = this.firstEffect = this.nextEffect = null),
                    (this.childExpirationTime = this.expirationTime = 0),
                    (this.alternate = null);
            }
            function Cu(e, t, n, r) {
                return new ku(e, t, n, r);
            }
            function Su(e) {
                return !(!(e = e.prototype) || !e.isReactComponent);
            }
            function Tu(e, t) {
                var n = e.alternate;
                return (
                    null === n
                        ? (((n = Cu(e.tag, t, e.key, e.mode)).elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
                        : ((n.pendingProps = t), (n.effectTag = 0), (n.nextEffect = null), (n.firstEffect = null), (n.lastEffect = null)),
                    (n.childExpirationTime = e.childExpirationTime),
                    (n.expirationTime = e.expirationTime),
                    (n.child = e.child),
                    (n.memoizedProps = e.memoizedProps),
                    (n.memoizedState = e.memoizedState),
                    (n.updateQueue = e.updateQueue),
                    (t = e.dependencies),
                    (n.dependencies = null === t ? null : { expirationTime: t.expirationTime, firstContext: t.firstContext, responders: t.responders }),
                    (n.sibling = e.sibling),
                    (n.index = e.index),
                    (n.ref = e.ref),
                    n
                );
            }
            function _u(e, t, n, r, o, i) {
                var a = 2;
                if (((r = e), "function" == typeof e)) Su(e) && (a = 1);
                else if ("string" == typeof e) a = 5;
                else
                    e: switch (e) {
                        case ne:
                            return Pu(n.children, o, i, t);
                        case ae:
                            (a = 8), (o |= 7);
                            break;
                        case re:
                            (a = 8), (o |= 1);
                            break;
                        case oe:
                            return ((e = Cu(12, n, t, 8 | o)).elementType = oe), (e.type = oe), (e.expirationTime = i), e;
                        case se:
                            return ((e = Cu(13, n, t, o)).type = se), (e.elementType = se), (e.expirationTime = i), e;
                        case ce:
                            return ((e = Cu(19, n, t, o)).elementType = ce), (e.expirationTime = i), e;
                        default:
                            if ("object" == typeof e && null !== e)
                                switch (e.$$typeof) {
                                    case ie:
                                        a = 10;
                                        break e;
                                    case le:
                                        a = 9;
                                        break e;
                                    case ue:
                                        a = 11;
                                        break e;
                                    case fe:
                                        a = 14;
                                        break e;
                                    case de:
                                        (a = 16), (r = null);
                                        break e;
                                    case pe:
                                        a = 22;
                                        break e;
                                }
                            throw Error(l(130, null == e ? e : typeof e, ""));
                    }
                return ((t = Cu(a, n, t, o)).elementType = e), (t.type = r), (t.expirationTime = i), t;
            }
            function Pu(e, t, n, r) {
                return ((e = Cu(7, e, r, t)).expirationTime = n), e;
            }
            function Nu(e, t, n) {
                return ((e = Cu(6, e, null, t)).expirationTime = n), e;
            }
            function Ou(e, t, n) {
                return ((t = Cu(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
            }
            function Lu(e, t, n) {
                (this.tag = t),
                    (this.current = null),
                    (this.containerInfo = e),
                    (this.pingCache = this.pendingChildren = null),
                    (this.finishedExpirationTime = 0),
                    (this.finishedWork = null),
                    (this.timeoutHandle = -1),
                    (this.pendingContext = this.context = null),
                    (this.hydrate = n),
                    (this.callbackNode = null),
                    (this.callbackPriority = 90),
                    (this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0);
            }
            function Mu(e, t) {
                var n = e.firstSuspendedTime;
                return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
            }
            function Ru(e, t) {
                var n = e.firstSuspendedTime,
                    r = e.lastSuspendedTime;
                n < t && (e.firstSuspendedTime = t), (r > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
            }
            function Iu(e, t) {
                t > e.firstPendingTime && (e.firstPendingTime = t);
                var n = e.firstSuspendedTime;
                0 !== n && (t >= n ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0) : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
            }
            function zu(e, t) {
                var n = e.lastExpiredTime;
                (0 === n || n > t) && (e.lastExpiredTime = t);
            }
            function Du(e, t, n, r) {
                var o = t.current,
                    i = Za(),
                    a = pi.suspense;
                i = $a(i, o, a);
                e: if (n) {
                    t: {
                        if (Je((n = n._reactInternalFiber)) !== n || 1 !== n.tag) throw Error(l(170));
                        var u = n;
                        do {
                            switch (u.tag) {
                                case 3:
                                    u = u.stateNode.context;
                                    break t;
                                case 1:
                                    if (go(u.type)) {
                                        u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break t;
                                    }
                            }
                            u = u.return;
                        } while (null !== u);
                        throw Error(l(171));
                    }
                    if (1 === n.tag) {
                        var s = n.type;
                        if (go(s)) {
                            n = bo(n, s, u);
                            break e;
                        }
                    }
                    n = u;
                } else n = co;
                return null === t.context ? (t.context = n) : (t.pendingContext = n), ((t = ui(i, a)).payload = { element: e }), null !== (r = void 0 === r ? null : r) && (t.callback = r), si(o, t), Ga(o, i), i;
            }
            function Fu(e) {
                if (!(e = e.current).child) return null;
                switch (e.child.tag) {
                    case 5:
                    default:
                        return e.child.stateNode;
                }
            }
            function Au(e, t) {
                null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t);
            }
            function Bu(e, t) {
                Au(e, t), (e = e.alternate) && Au(e, t);
            }
            function Uu(e, t, n) {
                var r = new Lu(e, t, (n = null != n && !0 === n.hydrate)),
                    o = Cu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
                (r.current = o),
                    (o.stateNode = r),
                    li(o),
                    (e[Tn] = r.current),
                    n &&
                        0 !== t &&
                        (function (e, t) {
                            var n = Xe(t);
                            Tt.forEach(function (e) {
                                ht(e, t, n);
                            }),
                                _t.forEach(function (e) {
                                    ht(e, t, n);
                                });
                        })(0, 9 === e.nodeType ? e : e.ownerDocument),
                    (this._internalRoot = r);
            }
            function ju(e) {
                return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)));
            }
            function Vu(e, t, n, r, o) {
                var i = n._reactRootContainer;
                if (i) {
                    var l = i._internalRoot;
                    if ("function" == typeof o) {
                        var a = o;
                        o = function () {
                            var e = Fu(l);
                            a.call(e);
                        };
                    }
                    Du(t, l, e, o);
                } else {
                    if (
                        ((i = n._reactRootContainer = (function (e, t) {
                            if ((t || (t = !(!(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)) for (var n; (n = e.lastChild); ) e.removeChild(n);
                            return new Uu(e, 0, t ? { hydrate: !0 } : void 0);
                        })(n, r)),
                        (l = i._internalRoot),
                        "function" == typeof o)
                    ) {
                        var u = o;
                        o = function () {
                            var e = Fu(l);
                            u.call(e);
                        };
                    }
                    tu(function () {
                        Du(t, l, e, o);
                    });
                }
                return Fu(l);
            }
            function Hu(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return { $$typeof: te, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
            }
            function Wu(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!ju(t)) throw Error(l(200));
                return Hu(e, t, null, n);
            }
            (Uu.prototype.render = function (e) {
                Du(e, this._internalRoot, null, null);
            }),
                (Uu.prototype.unmount = function () {
                    var e = this._internalRoot,
                        t = e.containerInfo;
                    Du(null, e, null, function () {
                        t[Tn] = null;
                    });
                }),
                (mt = function (e) {
                    if (13 === e.tag) {
                        var t = Go(Za(), 150, 100);
                        Ga(e, t), Bu(e, t);
                    }
                }),
                (gt = function (e) {
                    13 === e.tag && (Ga(e, 3), Bu(e, 3));
                }),
                (vt = function (e) {
                    if (13 === e.tag) {
                        var t = Za();
                        Ga(e, (t = $a(t, e, null))), Bu(e, t);
                    }
                }),
                (P = function (e, t, n) {
                    switch (t) {
                        case "input":
                            if ((Se(e, n), (t = n.name), "radio" === n.type && null != t)) {
                                for (n = e; n.parentNode; ) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var o = On(r);
                                        if (!o) throw Error(l(90));
                                        Ee(r), Se(r, o);
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            Me(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && Ne(e, !!n.multiple, t, !1);
                    }
                }),
                (I = eu),
                (z = function (e, t, n, r, o) {
                    var i = ka;
                    ka |= 4;
                    try {
                        return Ho(98, e.bind(null, t, n, r, o));
                    } finally {
                        0 === (ka = i) && Zo();
                    }
                }),
                (D = function () {
                    0 == (49 & ka) &&
                        ((function () {
                            if (null !== Va) {
                                var e = Va;
                                (Va = null),
                                    e.forEach(function (e, t) {
                                        zu(t, e), Ya(t);
                                    }),
                                    Zo();
                            }
                        })(),
                        mu());
                }),
                (F = function (e, t) {
                    var n = ka;
                    ka |= 2;
                    try {
                        return e(t);
                    } finally {
                        0 === (ka = n) && Zo();
                    }
                });
            var Qu,
                Zu,
                $u = {
                    Events: [
                        Pn,
                        Nn,
                        On,
                        T,
                        k,
                        Fn,
                        function (e) {
                            ot(e, Dn);
                        },
                        M,
                        R,
                        Yt,
                        at,
                        mu,
                        { current: !1 },
                    ],
                };
            (Zu = (Qu = { findFiberByHostInstance: _n, bundleType: 0, version: "16.13.1", rendererPackageName: "react-dom" }).findFiberByHostInstance),
                (function (e) {
                    if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (t.isDisabled || !t.supportsFiber) return !0;
                    try {
                        var n = t.inject(e);
                        (Eu = function (e) {
                            try {
                                t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag));
                            } catch (e) {}
                        }),
                            (xu = function (e) {
                                try {
                                    t.onCommitFiberUnmount(n, e);
                                } catch (e) {}
                            });
                    } catch (e) {}
                })(
                    o({}, Qu, {
                        overrideHookState: null,
                        overrideProps: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: q.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function (e) {
                            return null === (e = nt(e)) ? null : e.stateNode;
                        },
                        findFiberByHostInstance: function (e) {
                            return Zu ? Zu(e) : null;
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                    })
                ),
                (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $u),
                (t.createPortal = Wu),
                (t.findDOMNode = function (e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternalFiber;
                    if (void 0 === t) {
                        if ("function" == typeof e.render) throw Error(l(188));
                        throw Error(l(268, Object.keys(e)));
                    }
                    return (e = null === (e = nt(t)) ? null : e.stateNode);
                }),
                (t.flushSync = function (e, t) {
                    if (0 != (48 & ka)) throw Error(l(187));
                    var n = ka;
                    ka |= 1;
                    try {
                        return Ho(99, e.bind(null, t));
                    } finally {
                        (ka = n), Zo();
                    }
                }),
                (t.hydrate = function (e, t, n) {
                    if (!ju(t)) throw Error(l(200));
                    return Vu(null, e, t, !0, n);
                }),
                (t.render = function (e, t, n) {
                    if (!ju(t)) throw Error(l(200));
                    return Vu(null, e, t, !1, n);
                }),
                (t.unmountComponentAtNode = function (e) {
                    if (!ju(e)) throw Error(l(40));
                    return (
                        !!e._reactRootContainer &&
                        (tu(function () {
                            Vu(null, null, e, !1, function () {
                                (e._reactRootContainer = null), (e[Tn] = null);
                            });
                        }),
                        !0)
                    );
                }),
                (t.unstable_batchedUpdates = eu),
                (t.unstable_createPortal = function (e, t) {
                    return Wu(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
                }),
                (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
                    if (!ju(n)) throw Error(l(200));
                    if (null == e || void 0 === e._reactInternalFiber) throw Error(l(38));
                    return Vu(e, t, n, !1, r);
                }),
                (t.version = "16.13.1");
        },
        function (e, t, n) {
            "use strict";
            e.exports = n(13);
        },
        function (e, t, n) {
            "use strict";
            /** @license React v0.19.1
             * scheduler.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var r, o, i, l, a;
            if ("undefined" == typeof window || "function" != typeof MessageChannel) {
                var u = null,
                    s = null,
                    c = function () {
                        if (null !== u)
                            try {
                                var e = t.unstable_now();
                                u(!0, e), (u = null);
                            } catch (e) {
                                throw (setTimeout(c, 0), e);
                            }
                    },
                    f = Date.now();
                (t.unstable_now = function () {
                    return Date.now() - f;
                }),
                    (r = function (e) {
                        null !== u ? setTimeout(r, 0, e) : ((u = e), setTimeout(c, 0));
                    }),
                    (o = function (e, t) {
                        s = setTimeout(e, t);
                    }),
                    (i = function () {
                        clearTimeout(s);
                    }),
                    (l = function () {
                        return !1;
                    }),
                    (a = t.unstable_forceFrameRate = function () {});
            } else {
                var d = window.performance,
                    p = window.Date,
                    h = window.setTimeout,
                    m = window.clearTimeout;
                if ("undefined" != typeof console) {
                    var g = window.cancelAnimationFrame;
                    "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
                        "function" != typeof g && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
                }
                if ("object" == typeof d && "function" == typeof d.now)
                    t.unstable_now = function () {
                        return d.now();
                    };
                else {
                    var v = p.now();
                    t.unstable_now = function () {
                        return p.now() - v;
                    };
                }
                var y = !1,
                    b = null,
                    w = -1,
                    E = 5,
                    x = 0;
                (l = function () {
                    return t.unstable_now() >= x;
                }),
                    (a = function () {}),
                    (t.unstable_forceFrameRate = function (e) {
                        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : (E = 0 < e ? Math.floor(1e3 / e) : 5);
                    });
                var k = new MessageChannel(),
                    C = k.port2;
                (k.port1.onmessage = function () {
                    if (null !== b) {
                        var e = t.unstable_now();
                        x = e + E;
                        try {
                            b(!0, e) ? C.postMessage(null) : ((y = !1), (b = null));
                        } catch (e) {
                            throw (C.postMessage(null), e);
                        }
                    } else y = !1;
                }),
                    (r = function (e) {
                        (b = e), y || ((y = !0), C.postMessage(null));
                    }),
                    (o = function (e, n) {
                        w = h(function () {
                            e(t.unstable_now());
                        }, n);
                    }),
                    (i = function () {
                        m(w), (w = -1);
                    });
            }
            function S(e, t) {
                var n = e.length;
                e.push(t);
                e: for (;;) {
                    var r = (n - 1) >>> 1,
                        o = e[r];
                    if (!(void 0 !== o && 0 < P(o, t))) break e;
                    (e[r] = t), (e[n] = o), (n = r);
                }
            }
            function T(e) {
                return void 0 === (e = e[0]) ? null : e;
            }
            function _(e) {
                var t = e[0];
                if (void 0 !== t) {
                    var n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, o = e.length; r < o; ) {
                            var i = 2 * (r + 1) - 1,
                                l = e[i],
                                a = i + 1,
                                u = e[a];
                            if (void 0 !== l && 0 > P(l, n)) void 0 !== u && 0 > P(u, l) ? ((e[r] = u), (e[a] = n), (r = a)) : ((e[r] = l), (e[i] = n), (r = i));
                            else {
                                if (!(void 0 !== u && 0 > P(u, n))) break e;
                                (e[r] = u), (e[a] = n), (r = a);
                            }
                        }
                    }
                    return t;
                }
                return null;
            }
            function P(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id;
            }
            var N = [],
                O = [],
                L = 1,
                M = null,
                R = 3,
                I = !1,
                z = !1,
                D = !1;
            function F(e) {
                for (var t = T(O); null !== t; ) {
                    if (null === t.callback) _(O);
                    else {
                        if (!(t.startTime <= e)) break;
                        _(O), (t.sortIndex = t.expirationTime), S(N, t);
                    }
                    t = T(O);
                }
            }
            function A(e) {
                if (((D = !1), F(e), !z))
                    if (null !== T(N)) (z = !0), r(B);
                    else {
                        var t = T(O);
                        null !== t && o(A, t.startTime - e);
                    }
            }
            function B(e, n) {
                (z = !1), D && ((D = !1), i()), (I = !0);
                var r = R;
                try {
                    for (F(n), M = T(N); null !== M && (!(M.expirationTime > n) || (e && !l())); ) {
                        var a = M.callback;
                        if (null !== a) {
                            (M.callback = null), (R = M.priorityLevel);
                            var u = a(M.expirationTime <= n);
                            (n = t.unstable_now()), "function" == typeof u ? (M.callback = u) : M === T(N) && _(N), F(n);
                        } else _(N);
                        M = T(N);
                    }
                    if (null !== M) var s = !0;
                    else {
                        var c = T(O);
                        null !== c && o(A, c.startTime - n), (s = !1);
                    }
                    return s;
                } finally {
                    (M = null), (R = r), (I = !1);
                }
            }
            function U(e) {
                switch (e) {
                    case 1:
                        return -1;
                    case 2:
                        return 250;
                    case 5:
                        return 1073741823;
                    case 4:
                        return 1e4;
                    default:
                        return 5e3;
                }
            }
            var j = a;
            (t.unstable_IdlePriority = 5),
                (t.unstable_ImmediatePriority = 1),
                (t.unstable_LowPriority = 4),
                (t.unstable_NormalPriority = 3),
                (t.unstable_Profiling = null),
                (t.unstable_UserBlockingPriority = 2),
                (t.unstable_cancelCallback = function (e) {
                    e.callback = null;
                }),
                (t.unstable_continueExecution = function () {
                    z || I || ((z = !0), r(B));
                }),
                (t.unstable_getCurrentPriorityLevel = function () {
                    return R;
                }),
                (t.unstable_getFirstCallbackNode = function () {
                    return T(N);
                }),
                (t.unstable_next = function (e) {
                    switch (R) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = R;
                    }
                    var n = R;
                    R = t;
                    try {
                        return e();
                    } finally {
                        R = n;
                    }
                }),
                (t.unstable_pauseExecution = function () {}),
                (t.unstable_requestPaint = j),
                (t.unstable_runWithPriority = function (e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3;
                    }
                    var n = R;
                    R = e;
                    try {
                        return t();
                    } finally {
                        R = n;
                    }
                }),
                (t.unstable_scheduleCallback = function (e, n, l) {
                    var a = t.unstable_now();
                    if ("object" == typeof l && null !== l) {
                        var u = l.delay;
                        (u = "number" == typeof u && 0 < u ? a + u : a), (l = "number" == typeof l.timeout ? l.timeout : U(e));
                    } else (l = U(e)), (u = a);
                    return (
                        (e = { id: L++, callback: n, priorityLevel: e, startTime: u, expirationTime: (l = u + l), sortIndex: -1 }),
                        u > a ? ((e.sortIndex = u), S(O, e), null === T(N) && e === T(O) && (D ? i() : (D = !0), o(A, u - a))) : ((e.sortIndex = l), S(N, e), z || I || ((z = !0), r(B))),
                        e
                    );
                }),
                (t.unstable_shouldYield = function () {
                    var e = t.unstable_now();
                    F(e);
                    var n = T(N);
                    return (n !== M && null !== M && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < M.expirationTime) || l();
                }),
                (t.unstable_wrapCallback = function (e) {
                    var t = R;
                    return function () {
                        var n = R;
                        R = t;
                        try {
                            return e.apply(this, arguments);
                        } finally {
                            R = n;
                        }
                    };
                });
        },
        function (e, t, n) {
            var r = n(2),
                o = n(15);
            "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
            var i = { insert: "head", singleton: !1 };
            r(o, i);
            e.exports = o.locals || {};
        },
        function (e, t, n) {
            (t = n(3)(!1)).push([
                e.i,
                "#canvasZone{display:block;padding:0;margin:0;overflow:hidden;width:100%;height:calc(100% - var(--footer-height))}#canvasZone.expanded{height:100%}#renderCanvas{position:relative;overflow:hidden;width:100%;height:100%;margin:0;padding:0;touch-action:none;-ms-touch-action:none;display:block;border:0;outline:0}\n",
                "",
            ]),
                (e.exports = t);
        },
        function (e, t) {
            e.exports =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 70 70'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D.cls-2%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EUpArrowIcon%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Redlines'%3E%3Cpath class='cls-1' d='M34.85,29.78,24.56,40.06l-1.42-1.41L34.85,26.94l11.7,11.71-1.42,1.41Z'/%3E%3Crect class='cls-2' width='70' height='70'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        },
        function (e, t) {
            e.exports =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 70 70'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D.cls-2%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EDownArrowIcon%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Redlines'%3E%3Cpath class='cls-1' d='M23.14,30.07l1.42-1.42L34.85,38.94,45.14,28.65l1.41,1.42L34.85,41.78Z'/%3E%3Crect class='cls-2' width='70' height='70'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        },
        function (e, t) {
            e.exports =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 70 70'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;%7D.cls-2%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EPlayIcon%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Redlines'%3E%3Crect class='cls-1' width='70' height='70'/%3E%3Cpath class='cls-2' d='M28.83,25.13l16,10-16,10Zm2,3.61V41.52l10.22-6.39Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        },
        function (e, t) {
            e.exports =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 70 70'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;%7D.cls-2%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EPauseIcon%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Redlines'%3E%3Crect class='cls-1' width='70' height='70'/%3E%3Cpath class='cls-2' d='M28.83,44.37v-20h2v20Zm10-20h2v20h-2Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        },
        function (e, t, n) {
            var r = n(2),
                o = n(21);
            "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
            var i = { insert: "head", singleton: !1 };
            r(o, i);
            e.exports = o.locals || {};
        },
        function (e, t, n) {
            (t = n(3)(!1)).push([
                e.i,
                ".animationBar{align-items:center;color:white;min-height:30px;height:var(--footer-height);background-color:var(--footer-background);grid-column:2;grid-row:1;margin-left:10px;display:flex}.animationBar *{padding:0px;margin:0px}.animationBar .row{display:flex;flex-direction:row;justify-content:center;flex-grow:10;align-items:center}.animationBar #playBtn{display:flex;align-items:center;height:var(--footer-height);width:var(--footer-height);border:none;background-color:inherit;cursor:pointer}.animationBar #playBtn img{width:var(--footer-height);height:var(--footer-height)}.animationBar #playBtn:hover{background-color:var(--button-hover-color)}.animationBar #playBtn:active{background-color:var(--button-hover-background)}.animationBar #playBtn:focus{outline:none !important;border:none}.animationBar .slider{-webkit-appearance:none;cursor:pointer;width:100%;max-width:820px;height:var(--footer-height);outline:none;margin-left:20px;margin-right:10px;background-color:transparent}.animationBar .slider::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border:2px solid white;border-radius:50%;background:var(--footer-background);margin-top:-10px}.animationBar .slider::-webkit-slider-runnable-track{height:2px;-webkit-appearance:none;background-color:white}.animationBar .slider::-moz-range-progress{background-color:white;height:2px}.animationBar .slider::-moz-range-thumb{width:20px;height:20px;border:2px solid white;border-radius:50%;background:var(--footer-background)}.animationBar .slider::-moz-range-track{background:white;height:2px}.animationBar .slider::-ms-track{height:2px;background:transparent;border-color:transparent;border-width:10px 0;color:transparent}.animationBar .slider::-ms-fill-lower{background:white;border-radius:5px}.animationBar .slider::-ms-fill-upper{background:white;border-radius:5px}.animationBar .slider::-ms-thumb{width:16px;height:16px;border:2px solid white;border-radius:50%;background:var(--footer-background);margin-top:0px}@media (max-width: 768px){.animationBar{margin-left:0}}\n",
                "",
            ]),
                (e.exports = t);
        },
        function (e, t, n) {
            var r = n(2),
                o = n(23);
            "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
            var i = { insert: "head", singleton: !1 };
            r(o, i);
            e.exports = o.locals || {};
        },
        function (e, t, n) {
            (t = n(3)(!1)).push([
                e.i,
                ".footer{position:relative;width:100%;height:var(--footer-height);margin:0;padding:0;background-color:var(--footer-background);font-size:0;display:grid;grid-template-rows:100%;grid-template-columns:201px 1fr 210px}.footer .footerLeft{display:grid;grid-column:1;grid-row:1;padding-left:40px;align-content:center;overflow:hidden}.footer .footerLeft #logoImg{height:var(--footer-height);width:161px}.footer .button{float:left;width:var(--footer-height);height:var(--footer-height);margin:0px;padding:0;transition:all 0.3s ease;display:grid;align-content:center;justify-content:center;cursor:pointer}.footer .button.long{width:200px;grid-template-columns:var(--footer-height) calc(200px - var(--footer-height))}.footer .button.long .button-icon{grid-row:1;grid-column:1}.footer .button.long .button-text{grid-row:1;grid-column:2;align-self:center;justify-self:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--font-size)}.footer .button.active{background-color:var(--button-hover-color)}.footer .button img{width:var(--footer-height);height:var(--footer-height)}.footer .button:hover{background-color:var(--button-hover-color)}.footer .button:active{background-color:var(--button-hover-background)}.footer .dropup{position:relative}.footer .dropup .dropup-content{position:absolute;bottom:var(--footer-height);left:0px;z-index:100;width:calc(2 * var(--footer-height))}.footer .dropup .dropup-content.long-mode{width:200px}.footer .dropup .dropup-content div{background-color:var(--button-hover-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--font-size);width:100%;color:white;cursor:pointer;height:40px;box-sizing:border-box;padding:0;margin:0;display:grid;align-content:center;justify-content:center}.footer .dropup .dropup-content div:hover{background-color:var(--button-hover-hover);transition:all 0.3s ease}.footer .dropup .dropup-content div:active{background-color:var(--button-hover-background);transition:all 0.3s ease}.footer .footerRight{display:flex;flex-direction:row-reverse;grid-column:3;grid-row:1}.footer .footerRight .custom-upload{position:relative;background-position:center right;background-repeat:no-repeat;width:var(--footer-height);height:var(--footer-height);cursor:pointer;display:grid}.footer .footerRight .custom-upload img{grid-row:1;grid-column:1;width:var(--footer-height);height:var(--footer-height);pointer-events:none}.footer .footerRight .custom-upload:hover{background-color:var(--button-hover-color)}.footer .footerRight .custom-upload:active{background-color:var(--button-hover-background)}.footer .footerRight .custom-upload input[type=file]{grid-row:1;grid-column:1;outline:none;position:relative;text-align:right;-moz-opacity:0;opacity:0;z-index:2;width:100%;height:100%;filter:alpha(opacity=0)}@media (max-width: 768px){.footer{grid-template-columns:0px 1fr 150px}.footer .dropup .dropup-content{width:100px}.footer .button.long{width:100px;grid-template-columns:var(--footer-height) calc(100px - var(--footer-height))}}\n",
                "",
            ]),
                (e.exports = t);
        },
        function (e, t) {
            e.exports =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160.63 40.18'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23d5d2ca;%7D.cls-2%7Bfill:%23fff;%7D.cls-3%7Bfill:%23e0684b;%7D.cls-4%7Bfill:%2334fff1;%7D.cls-5%7Bfill:%23e0ded8;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EBabylonIdentity%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Page_Elements' data-name='Page Elements'%3E%3Cpath class='cls-1' d='M41.27,10h3.41v7.65c.61-1,1.82-2,4.21-2,3.74,0,5.78,3.08,5.78,7.13s-2.12,7.68-6.16,7.68c-2.15,0-3.17-.72-3.85-1.85a11.47,11.47,0,0,1-.14,1.52H41.24c0-1.55,0-3.11,0-4.68Zm6.63,8.42c-2.47,0-3.38,1.65-3.38,4.68,0,2.59.8,4.59,3.33,4.59,2.14,0,3.33-1.92,3.33-4.84C51.18,20.27,50.13,18.43,47.9,18.43Z'/%3E%3Cpath class='cls-1' d='M68.59,26.66a26.61,26.61,0,0,0,.2,3.47H65.51a7.37,7.37,0,0,1-.22-1.55c-.49.86-1.51,1.88-4.1,1.88-3.38,0-4.81-2.23-4.81-4.41,0-3.19,2.56-4.67,6.71-4.67h2.15v-1c0-1.1-.36-2.25-2.48-2.25-1.87,0-2.26.85-2.45,1.89H57c.19-2.31,1.65-4.43,5.86-4.4,3.68,0,5.69,1.49,5.69,4.79Zm-3.33-3.14H63.42c-2.5,0-3.6.74-3.6,2.34A2,2,0,0,0,62.1,28c2.81,0,3.16-1.92,3.16-4Z'/%3E%3Cpath class='cls-1' d='M71.67,10h3.42v7.65c.6-1,1.81-2,4.21-2,3.74,0,5.77,3.08,5.77,7.13S83,30.46,78.91,30.46c-2.15,0-3.16-.72-3.85-1.85a10,10,0,0,1-.14,1.52H71.65c0-1.55,0-3.11,0-4.68Zm6.64,8.42c-2.48,0-3.39,1.65-3.39,4.68,0,2.59.8,4.59,3.33,4.59,2.15,0,3.33-1.92,3.33-4.84C81.58,20.27,80.53,18.43,78.31,18.43Z'/%3E%3Cpath class='cls-1' d='M89.37,16c1.76,5.53,3,9.66,3.3,11h0c.35-1.49,1.23-4.68,3.13-11h3.41L94.37,30.62c-1.37,4.1-2.47,5.26-5.69,5.26A15.34,15.34,0,0,1,87,35.77V33c.3,0,.71,0,1.07,0,1.54,0,2.25-.57,2.89-2.42L85.71,16Z'/%3E%3Cpath class='cls-1' d='M100.76,30.13V10h3.41V30.13Z'/%3E%3Cpath class='cls-1' d='M120.32,23c0,4.21-2.48,7.43-6.91,7.43s-6.79-3.14-6.79-7.38,2.56-7.43,7-7.43C117.68,15.65,120.32,18.6,120.32,23Zm-10.23,0c0,2.87,1.29,4.68,3.41,4.68s3.33-1.79,3.33-4.65c0-3-1.19-4.7-3.39-4.7S110.09,20,110.09,23.05Z'/%3E%3Cpath class='cls-1' d='M122.8,19.53c0-1.21,0-2.47,0-3.55h3.3a15.77,15.77,0,0,1,.14,2,4.32,4.32,0,0,1,4.21-2.31c2.78,0,4.7,1.82,4.7,5.45v9h-3.41V21.49c0-1.77-.63-3-2.5-3s-3,1.29-3,3.91v7.76H122.8Z'/%3E%3Cpath class='cls-1' d='M138.37,30.13V25.56H142v4.57Z'/%3E%3Cpath class='cls-1' d='M147.67,16.28V30.87c0,3.77-.91,5-3.6,5-.11,0-.66,0-.86,0V34.2c.2,0,.42,0,.58,0,1.84,0,2-1,2-3.08V16.28Zm-1.84-3.57V9.87h1.84v2.84Z'/%3E%3Cpath class='cls-1' d='M151.85,26.25a3.45,3.45,0,0,0,3.69,2.66c2.26,0,3.16-1,3.16-2.44s-.63-2.15-3.52-2.84c-3.77-.91-4.62-2.06-4.62-3.91S152,16,155.32,16s4.81,2,5,3.94h-1.81a3,3,0,0,0-3.28-2.39c-2.2,0-2.83,1.07-2.83,2.09s.61,1.73,3.25,2.36c4,1,4.95,2.31,4.95,4.38,0,2.47-2,4.13-5.15,4.13-3.35,0-5.11-1.74-5.47-4.21Z'/%3E%3Cpolygon class='cls-2' points='17.4 0 0 10.04 0 30.13 17.4 40.18 34.8 30.13 34.8 10.04 17.4 0'/%3E%3Cpolygon class='cls-3' points='34.8 10.04 29.35 6.9 24.11 9.93 29.56 13.07 34.8 10.04'/%3E%3Cpolygon class='cls-3' points='5.24 13.07 22.64 3.02 17.4 0 0 10.04 5.24 13.07'/%3E%3Cpolygon class='cls-3' points='11.95 23.23 17.4 26.38 22.84 23.23 17.4 20.09 11.95 23.23'/%3E%3Cpolygon class='cls-4' points='29.56 13.07 29.56 27.11 17.4 34.13 5.24 27.11 5.24 13.07 0 10.04 0 30.13 17.4 40.18 34.8 30.13 34.8 10.04 29.56 13.07'/%3E%3Cpolygon class='cls-4' points='17.4 13.8 11.95 16.95 11.95 23.23 17.4 20.09 22.84 23.23 22.84 16.95 17.4 13.8'/%3E%3Cpolygon class='cls-5' points='29.56 13.07 22.84 16.95 22.84 23.23 17.4 26.38 17.4 34.13 29.56 27.11 29.56 13.07'/%3E%3Cpolygon class='cls-1' points='5.24 13.07 11.95 16.95 11.95 23.23 17.4 26.38 17.4 34.13 5.24 27.11 5.24 13.07'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        },
        function (e, t) {
            e.exports =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 70 70'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D.cls-2%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EEditIcon%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Page_Elements' data-name='Page Elements'%3E%3Cpath class='cls-1' d='M44.25,30.78a2.56,2.56,0,0,1,1-.64,3.64,3.64,0,0,1,1.17-.2,3.29,3.29,0,0,1,1.21.23,2.73,2.73,0,0,1,1,.62,3,3,0,0,1,.65,1A2.84,2.84,0,0,1,49.5,33a3.14,3.14,0,0,1-.23,1.18,2.84,2.84,0,0,1-.67,1L37.52,46.25l-5.85,1.46,1.46-5.84Zm3,3a1.06,1.06,0,0,0,.33-.79,1,1,0,0,0-.32-.78,1.16,1.16,0,0,0-.8-.29A1.23,1.23,0,0,0,46,32a.88.88,0,0,0-.36.21L34.93,42.89,34.4,45l2.09-.52Z'/%3E%3Cpath class='cls-1' d='M31.94,41.2l1-1V31.9l5.94-3v5.32l2-2V26.73L32,22.27l-8.92,4.46V38.5l8.5,4.26Zm0-16.7,5.7,2.85L32,30.18l-5.71-2.83ZM25,37.27V28.94l5.94,3v8.34Z'/%3E%3Crect class='cls-2' width='70' height='70'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        },
        function (e, t) {
            e.exports =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 70 70'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D.cls-2%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EAsset 11%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Page_Elements' data-name='Page Elements'%3E%3Cpath class='cls-1' d='M26.67,44.77H41.88v1.52H25.15V22H38.4l6.52,6.52v5.64H43.4V29.56H37.31V23.48H26.67ZM38.83,28h3.49l-3.49-3.48Zm8,12.13-1.93-1.92v8H43.4v-8l-1.94,1.92L40.39,39.1l3.77-3.77,3.76,3.77Z'/%3E%3Crect class='cls-2' width='70' height='70'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        },
        function (e, t) {
            e.exports =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 70 70'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D.cls-2%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EEnvironmentIcon%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Page_Elements' data-name='Page Elements'%3E%3Cpath class='cls-1' d='M34.89,21.24A13.19,13.19,0,1,0,48.07,34.42,13.19,13.19,0,0,0,34.89,21.24ZM34,33.43a.31.31,0,0,0,.44,0l1.13-1.14a.29.29,0,0,0,0-.32h.46a2.38,2.38,0,0,0,2.6.12l.61,0a.36.36,0,0,0,.07.17l1.14,1.14a.31.31,0,0,0,.22.09.3.3,0,0,0,.21-.09A.3.3,0,0,0,41,33l-.78-.79c3.69.41,6.21,1.23,6.21,2.18,0,1.36-5.14,2.46-11.49,2.46S23.4,35.78,23.4,34.42,28.54,32,34.89,32h.17l-1,1A.32.32,0,0,0,34,33.43Zm3.48-1.61A1.84,1.84,0,1,1,39.34,30,1.84,1.84,0,0,1,37.5,31.82Zm-2.61-8.9A11.5,11.5,0,0,1,46.35,33.54c-1.13-1-4.17-1.56-7.14-1.81A2.42,2.42,0,0,0,40,30a2.45,2.45,0,1,0-4.89,0,2.41,2.41,0,0,0,.58,1.57h-.75c-3.53,0-9.76.45-11.46,2A11.5,11.5,0,0,1,34.89,22.92Zm0,23a11.48,11.48,0,0,1-11.4-10.07c2.68,1.81,10.36,1.87,11.4,1.87s8.72-.06,11.4-1.87A11.48,11.48,0,0,1,34.89,45.92Z'/%3E%3Cpath class='cls-1' d='M37.52,27.3h0a.31.31,0,0,0,.31-.3V24.89a.3.3,0,0,0-.3-.31h0a.31.31,0,0,0-.31.31V27A.31.31,0,0,0,37.52,27.3Z'/%3E%3Cpath class='cls-1' d='M35.19,28.07a.31.31,0,0,0,.22.09.27.27,0,0,0,.21-.09.3.3,0,0,0,0-.43L34.49,26.5a.3.3,0,0,0-.43,0,.31.31,0,0,0,0,.43Z'/%3E%3Cpath class='cls-1' d='M39.63,28.19a.31.31,0,0,0,.22-.09L41,27a.3.3,0,1,0-.43-.43l-1.14,1.14a.3.3,0,0,0,0,.43A.31.31,0,0,0,39.63,28.19Z'/%3E%3Cpath class='cls-1' d='M38.6,27.4l.07,0a.19.19,0,0,0,.17-.12l.25-.61a.2.2,0,0,0-.1-.25.2.2,0,0,0-.25.11l-.25.61A.19.19,0,0,0,38.6,27.4Z'/%3E%3Cpath class='cls-1' d='M36.21,27.29a.18.18,0,0,0,.17.11l.07,0a.17.17,0,0,0,.1-.24l-.26-.61a.18.18,0,0,0-.24-.1.19.19,0,0,0-.1.24Z'/%3E%3Cpath class='cls-1' d='M34.82,28.65l-.61-.25a.18.18,0,0,0-.24.1.19.19,0,0,0,.1.24l.61.25h.07a.18.18,0,0,0,.07-.35Z'/%3E%3Cpath class='cls-1' d='M34.67,30.93l-.61.26a.18.18,0,0,0-.1.24.18.18,0,0,0,.17.11h.07l.61-.26a.18.18,0,0,0,.1-.24A.19.19,0,0,0,34.67,30.93Z'/%3E%3Cpath class='cls-1' d='M36,33.51l.07,0a.18.18,0,0,0,.17-.12l.25-.61a.18.18,0,0,0-.1-.24.18.18,0,0,0-.24.1l-.25.61A.18.18,0,0,0,36,33.51Z'/%3E%3Cpath class='cls-1' d='M38.71,33.43a.18.18,0,0,0,.17.11H39a.18.18,0,0,0,.09-.25l-.25-.61a.19.19,0,1,0-.34.15Z'/%3E%3Cpath class='cls-1' d='M40.94,31.22,40.32,31a.19.19,0,0,0-.24.1.18.18,0,0,0,.1.24l.62.25.07,0a.19.19,0,0,0,.17-.12A.19.19,0,0,0,40.94,31.22Z'/%3E%3Cpath class='cls-1' d='M40.27,29h.07l.61-.26a.18.18,0,0,0-.14-.34l-.61.26a.18.18,0,0,0-.1.24A.18.18,0,0,0,40.27,29Z'/%3E%3Cpath class='cls-1' d='M32.41,30.26h2.11a.31.31,0,1,0,0-.61H32.41a.31.31,0,0,0,0,.61Z'/%3E%3Cpath class='cls-1' d='M37.48,35.38h0a.32.32,0,0,0,.31-.31V33a.31.31,0,0,0-.31-.3h0a.3.3,0,0,0-.3.3v2.11A.31.31,0,0,0,37.48,35.38Z'/%3E%3Cpath class='cls-1' d='M40.49,29.69a.31.31,0,1,0,0,.62H42.6a.31.31,0,0,0,.3-.31.3.3,0,0,0-.3-.3Z'/%3E%3Crect class='cls-2' width='70' height='70'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        },
        function (e, t, n) {
            var r = n(2),
                o = n(29);
            "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
            var i = { insert: "head", singleton: !1 };
            r(o, i);
            e.exports = o.locals || {};
        },
        function (e, t, n) {
            (t = n(3)(!1)).push([
                e.i,
                'html{--background: rgba(0, 0, 0, 0.455);;--footer-background: rgba(10, 10, 10, 0.425);;--footer-height: 70px;--button-hover-color: #34fff1;--button-hover-hover: #e0684b;--button-hover-background:  #162D3A;--font-size: 20px}html,body,#root{width:100%;height:100%;padding:0;margin:0;overflow:hidden;font-size:var(--font-size);background:var(--background);font-family:"acumin-pro-condensed";font-weight:normal}.hidden{display:none !important}.clickInterceptor{position:absolute;width:100%;height:100%;z-index:99;top:0;left:0}#droptext{position:absolute;text-align:center;color:#fff;height:50px;width:100%;bottom:50px}#logoContainer{position:absolute;top:0;left:0;width:100%;height:calc(100% - 70px);pointer-events:none;display:grid;grid-template-rows:100%;grid-template-columns:100%;align-items:center;justify-items:center}#logo{width:150px;pointer-events:none}#errorZone{position:absolute;width:50%;left:25%;bottom:80px;background-color:#C73228;padding:20px;border-radius:5px;color:white;display:grid;grid-template-columns:1fr 32px}#errorZone .message{grid-column:1;grid-row:1;align-self:center}#errorZone button{grid-column:2;grid-row:1;padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none;color:#000;text-shadow:0 1px 0 #fff;opacity:.4;font-size:1.8em}#errorZone button:hover{transform:scale(1.2)}@media (max-width: 768px){html{--footer-height: 50px;--font-size: 16px}}\n',
                "",
            ]),
                (e.exports = t);
        },
        function (e, t) {
            e.exports =
                "https://img.itch.zone/aW1nLzM0OTE4MDMucG5n/347x500/%2FiOQ4E.png";
        },
    ]);
});

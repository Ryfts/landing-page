jQuery(document).ready(function(t) {
    "use strict";

    function e() {
        t(".bg-image").vegas({
            slides: [{
                src: background_image_image
            }],
            delay: 10,
            transitionDuration: 10,
            timer: !1
        })
    }

    function n() {
        t(".grcs_background_content .bg-image").vegas({
            slides: background_slider_slides,
            transition: background_slider_transition,
            delay: background_slider_timeout,
            transitionDuration: background_slider_transition_duration,
            firstTransitionDuration: 1,
            timer: !1,
            walk: function(e, n) {
                t(".grcs_text_slider").cycle("next")
            }
        })
    }

    function o() {
        t(".grcs_background_content .bg-image").vegas({
            slides: background_kenburns_slides,
            transition: background_kenburns_transition,
            delay: background_kenburns_timeout,
            transitionDuration: background_kenburns_transition_duration,
            firstTransitionDuration: 1,
            timer: !1,
            animation: background_kenburns_effect,
            walk: function(e, n) {
                t(".grcs_text_slider").cycle("next")
            }
        })
    }

    function a() {
        if (jQuery.browser.mobile) return void t(".grcs_background_content .bg-image").vegas({
            slides: [{
                src: background_youtube_fallback_image
            }],
            delay: 100,
            transitionDuration: 100,
            timer: !1
        });
        1 == background_youtube_controls && t("body").append('<div class="grcs_youtube_controls"><i class="volume-button fa fa-volume-up"></i> <i class="pause-button ti-control-pause"></i></div>'), 1 == background_youtube_sound ? background_youtube_sound = 0 : (background_youtube_sound = 1, t(".grcs_youtube_controls .volume-button").removeClass("fa-volume-up").addClass("fa-volume-off")), t(".grcs_background_content .bg-video").append('<div id="bg-youtube" class="player showOn-video-bg"></div>'), t("#bg-youtube").attr("data-property", '{videoURL:background_youtube_url,containment:".bg-video",autoPlay:true,mute:background_youtube_sound,startAt: background_youtube_start_point,stopAt: background_youtube_end_point,opacity:1,stopMovieOnBlur:false,showControls:false}'), t(".player").mb_YTPlayer(), t(".grcs_youtube_controls .volume-button").click(function() {
            t("#bg-youtube").hasClass("isMuted") ? (t("#bg-youtube").YTPUnmute(), t(".grcs_youtube_controls .volume-button").removeClass("fa-volume-off").addClass("fa-volume-up")) : (t("#bg-youtube").YTPMute(), t(".grcs_youtube_controls .volume-button").removeClass("fa-volume-up").addClass("fa-volume-off"))
        });
        var e = !0;
        t("#bg-youtube").on("YTPPause", function() {
            e = !1
        }), t("#bg-youtube").on("YTPPlay", function() {
            e = !0
        }), t(".grcs_youtube_controls .pause-button").click(function() {
            1 == e ? (t("#bg-youtube").YTPPause(), t(".grcs_youtube_controls .pause-button").removeClass("ti-control-pause").addClass("ti-control-play")) : (t("#bg-youtube").YTPPlay(), t(".grcs_youtube_controls .pause-button").removeClass("ti-control-play").addClass("ti-control-pause"))
        })
    }

    function i() {
        t(".grcs_background_content .bg-color").css("background", background_color_color), t(".grcs_background_content .bg-color").css("opacity", "1"), t(".grcs_background_content .bg-pattern").remove(), t(".grcs_background_content .bg-overlay").remove()
    }

    function s() {
        function e(t) {
            t = t.replace("#", "");
            var e = parseInt(t, 16),
                n = e >> 16 & 255,
                o = e >> 8 & 255,
                a = 255 & e;
            return [n, o, a]
        }

        function n() {
            var t = o[s[0]],
                e = o[s[1]],
                n = o[s[2]],
                c = o[s[3]],
                u = 1 - a,
                h = Math.round(u * t[0] + a * e[0]),
                l = Math.round(u * t[1] + a * e[1]),
                d = Math.round(u * t[2] + a * e[2]),
                g = "rgb(" + h + "," + l + "," + d + ")",
                _ = Math.round(u * n[0] + a * c[0]),
                m = Math.round(u * n[1] + a * c[1]),
                b = Math.round(u * n[2] + a * c[2]),
                v = "rgb(" + _ + "," + m + "," + b + ")";
            i.css({
                background: "-webkit-gradient(linear, left top, right top, from(" + g + "), to(" + v + "))"
            }).css({
                background: "-moz-linear-gradient(left, " + g + " 0%, " + v + " 100%)"
            }), a += r, a >= 1 && (a %= 1, s[0] = s[1], s[2] = s[3], s[1] = (s[1] + Math.floor(1 + Math.random() * (o.length - 1))) % o.length, s[3] = (s[3] + Math.floor(1 + Math.random() * (o.length - 1))) % o.length)
        }
        var o = new Array(e(background_gradient_color_1), e(background_gradient_color_2), e(background_gradient_color_3), e(background_gradient_color_4), e(background_gradient_color_5), e(background_gradient_color_6)),
            a = 0,
            i = t(".grcs_background_content .bg-color"),
            s = [0, 1, 2, 3],
            r = parseFloat(background_gradient_speed) / 4e4;
        setInterval(n, 1), t(".grcs_background_content .bg-color").css("opacity", "1"), t(".grcs_background_content .bg-pattern").remove(), t(".grcs_background_content .bg-overlay").remove()
    }

    function r() {
        function e() {
            var t, e;
            t = document.createElement("div"), document.getElementById("canvas").appendChild(t), c = new THREE.PerspectiveCamera(75, l / d, 1, 1e4), c.position.z = 10 * background_sphere_distance, u = new THREE.Scene, h = new THREE.CanvasRenderer, h.setPixelRatio(window.devicePixelRatio), h.setSize(l, d), t.appendChild(h.domElement), h.setClearColor(background_sphere_background_color);
            for (var s = 2 * Math.PI, r = new THREE.SpriteCanvasMaterial({
                    color: background_sphere_dot_color,
                    program: function(t) {
                        t.beginPath(), t.arc(0, 0, .5, 0, s, !0), t.fill()
                    }
                }), g = 0; 1e3 > g; g++) e = new THREE.Sprite(r), e.position.x = 2 * Math.random() - 1, e.position.y = 2 * Math.random() - 1, e.position.z = 2 * Math.random() - 1, e.position.normalize(), e.position.multiplyScalar(10 * Math.random() + 450), e.scale.multiplyScalar(2), u.add(e);
            for (var g = 0; 300 > g; g++) {
                var _ = new THREE.Geometry,
                    m = new THREE.Vector3(2 * Math.random() - 1, 2 * Math.random() - 1, 2 * Math.random() - 1);
                m.normalize(), m.multiplyScalar(450), _.vertices.push(m);
                var b = m.clone();
                b.multiplyScalar(.3 * Math.random() + 1), _.vertices.push(b);
                var v = new THREE.Line(_, new THREE.LineBasicMaterial({
                    color: background_sphere_line_color,
                    opacity: Math.random()
                }));
                u.add(v)
            }
            document.addEventListener("mousemove", o, !1), document.addEventListener("touchstart", a, !1), document.addEventListener("touchmove", i, !1), window.addEventListener("resize", n, !1)
        }

        function n() {
            var e = t(".grcs_background_content .level-1").width(),
                n = t(".grcs_background_content .level-1").height();
            b = n / 2, c.aspect = e / n, c.updateProjectionMatrix(), h.setSize(e, n)
        }

        function o(t) {
            g = t.clientX - m, _ = t.clientY - b
        }

        function a(t) {
            t.touches.length > 1 && (t.preventDefault(), g = t.touches[0].pageX - m, _ = t.touches[0].pageY - b)
        }

        function i(t) {
            1 === t.touches.length && (t.preventDefault(), g = t.touches[0].pageX - m, _ = t.touches[0].pageY - b)
        }

        function s() {
            requestAnimationFrame(s), r()
        }

        function r() {
            c.position.x += .05 * (g - c.position.x), c.position.y += .05 * (-_ + 200 - c.position.y), c.lookAt(u.position), u.rotation.y += background_sphere_rotation_speed / 1e4, h.render(u, c)
        }
        t(".grcs_background_content .bg-overlay").remove(), t(".grcs_background_content .bg-pattern").remove();
        var c, u, h, l = t(".grcs_background_content .level-1").width(),
            d = t(".grcs_background_content .level-1").height(),
            g = 0,
            _ = 0,
            m = l / 2,
            b = d / 2;
        e(), s()
    }

    function c() {
        function e() {
            c = document.createElement("div"), document.getElementById("canvas").appendChild(c), u = new THREE.PerspectiveCamera(75, v / f, 1, 1e4), u.position.z = 100 * background_waves_distance, h = new THREE.Scene, d = new Array;
            for (var t = 2 * Math.PI, e = new THREE.SpriteCanvasMaterial({
                    color: "#747474",
                    program: function(e) {
                        e.beginPath(), e.arc(0, 0, .5, 0, t, !0), e.fill()
                    }
                }), s = 0, r = 0; m > r; r++)
                for (var p = 0; b > p; p++) g = d[s++] = new THREE.Sprite(e), g.position.x = r * _ - m * _ / 2, g.position.z = p * _ - b * _ / 2, h.add(g);
            l = new THREE.CanvasRenderer( { alpha: true } ), l.setPixelRatio(window.devicePixelRatio), l.setSize(v, f), c.appendChild(l.domElement), l.setClearColor(  0xffffff, 0 ), document.addEventListener("mousemove", o, !1), document.addEventListener("touchstart", a, !1), document.addEventListener("touchmove", i, !1), window.addEventListener("resize", n, !1)
        }

        function n() {
            var e = t(".grcs_background_content .level-1").width(),
                n = t(".grcs_background_content .level-1").height();
            S = e / 2, x = n / 2, u.aspect = e / n, u.updateProjectionMatrix(), l.setSize(e, n)
        }

        function o(t) {
            y = t.clientX - S, k = - x
            /*console(S + ' ' + x);*/
        }

        function a(t) {
            1 === t.touches.length && (t.preventDefault(), y = t.touches[0].pageX - S, k = t.touches[0].pageY - x)
        }

        function i(t) {
            1 === t.touches.length && (t.preventDefault(), y = t.touches[0].pageX - S, k = t.touches[0].pageY - x)
        }

        function s() {
            requestAnimationFrame(s), r()
        }

        function r() {
            u.position.x += .05 * (y - u.position.x), u.position.y += .05 * (-k - u.position.y), u.lookAt(h.position);
            for (var t = 0, e = 0; m > e; e++)
                for (var n = 0; b > n; n++) g = d[t++], g.position.y = Math.sin(.3 * (e + p)) * background_waves_dot_intensity * 5 + Math.sin(.5 * (n + p)) * background_waves_dot_intensity * 5, g.scale.x = g.scale.y = (Math.sin(.3 * (e + p)) + 1) * (background_waves_dot_expansion / 1.25) + (Math.sin(.5 * (n + p)) + 1) * (background_waves_dot_expansion / 1.25);
            l.render(h, u), p += .1
        }
        t(".grcs_background_content .bg-overlay").remove(), t(".grcs_background_content .bg-pattern").remove();
        var c, u, h, l, d, g, _ = background_waves_dot_spacing,
            m = background_waves_dot_amount_x,
            b = background_waves_dot_amount_y-3,
            v = t(".grcs_background_content .level-1").width()+20,
            f = t(".grcs_background_content .level-1").height(),
            p = 0,
            y = 0,
            k = -400,
            S = v / 2,
            x = f / 2;
        e(), s()
    }

    function u() {
        function e(t) {
            this.x = t.x, this.y = t.y, this.xBase = this.x, this.yBase = this.y, this.offset = n(0, 1e3), this.duration = n(20, 60), this.range = n(5, 5), this.dir = n(0, 1) > .5 ? 1 : -1, this.rad = n(2, 4)
        }

        function n(t, e) {
            return Math.random() * (e - t) + t
        }

        function o(t, e) {
            var n = t.x - e.x,
                o = t.y - e.y;
            return Math.atan2(o, n)
        }

        function a() {
            l = document.createElement("canvas"), d = l.getContext("2d"), y = {
                x: 0,
                y: 0
            }, w = [], m = parseFloat(background_mesh_line_mesh_size), b = .22 * m, document.getElementById("canvas").appendChild(l), i(), u()
        }

        function i() {
            g = t(".grcs_background_content .level-1").width(), _ = t(".grcs_background_content .level-1").height(), l.width = g, l.height = _, y.x = g / 2, y.y = _ / 2, k = !1, S = 0, x = 0, w.length = 0, M = 0, s(), d.strokeStyle = background_mesh_line_color, d.lineWidth = 2
        }

        function s() {
            for (var t = -m / 2; g + m > t; t += m) {
                S++;
                for (var o = -m / 2; _ + m > o; o += m) t == -m / 2 && x++, w.push(new e({
                    x: ~~(t + n(-b, b)),
                    y: ~~(o + n(-b, b))
                }))
            }
        }

        function r() {
            k || (y.x = g / 2 + 90 * Math.cos(M / 40), y.y = _ / 2 + 90 * Math.sin(M / 40)), w.forEach(function(t) {
                t.step()
            }), M++
        }

        function c() {
            d.clearRect(0, 0, g, _), d.beginPath();
            for (var t = 0; S > t; t++)
                for (var e = 0; x > e; e++) v = w[t * x + e], f = t === S - 1 ? null : w[(t + 1) * x + e], p = e === x - 1 ? null : w[t * x + e + 1], f && (d.moveTo(v.x, v.y), d.lineTo(f.x, f.y)), p && (d.moveTo(v.x, v.y), d.lineTo(p.x, p.y));
            d.stroke(), d.fillStyle = "red", w.forEach(function(t) {
                d.save(), d.beginPath(), d.translate(t.x, t.y), d.rotate(Math.PI / 4), d.rect(0, 0, 0, 0), d.fill(), d.stroke(), d.restore()
            });
            var n = d.createRadialGradient(y.x, y.y, 0, y.x, y.y, background_mesh_spotlight_size);
            n.addColorStop(0, "hsla(0, 0%, 0%, 0.1)"), n.addColorStop(1, "hsla(0, 0%, 0%, 0.96)"), d.fillStyle = n, d.fillRect(0, 0, g, _)
        }

        function u() {
            requestAnimationFrame(u), r(), c()
        }

        function h(t) {
            k = !0, y.x = t.pageX, y.y = t.pageY
        }
        var l, d, g, _, m, b, v, f, p, y, k, S, x, w, M;
        e.prototype.step = function() {
            this.x = this.xBase + this.dir * Math.sin((M + this.offset) / this.duration) * this.range, this.y = this.yBase + this.dir * Math.cos((M + this.offset) / this.duration) * this.range;
            var t = o(this, y);
            this.x = this.x + 100 * Math.cos(t), this.y = this.y + 100 * Math.sin(t)
        }, window.addEventListener("resize", i), window.addEventListener("mousemove", h), a(), t(".grcs_background_content .bg-overlay").remove(), t(".grcs_background_content .bg-pattern").remove()
    }

    function h() {
        t(".grcs_background_content .bg-pattern").remove(),
            function(t, e, n, o) {
                var a, i, s, r = function(e, n) {
                        this.el = e, this.$el = t(e), this.options = n, s = this
                    },
                    c = !1,
                    u = !1;
                ! function() {
                    for (var t = 0, n = ["ms", "moz", "webkit", "o"], o = 0; o < n.length && !e.requestAnimationFrame; ++o) e.requestAnimationFrame = e[n[o] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[n[o] + "CancelAnimationFrame"] || e[n[o] + "CancelRequestAnimationFrame"];
                    e.requestAnimationFrame || (e.requestAnimationFrame = function(n, o) {
                        var a = (new Date).getTime(),
                            i = Math.max(0, 16 - (a - t)),
                            s = e.setTimeout(function() {
                                n(a + i)
                            }, i);
                        return t = a + i, s
                    }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function(t) {
                        clearTimeout(t)
                    })
                }(), r.prototype = {
                    defaults: {
                        starColor: background_space_star_color,
                        bgColor: background_space_background_color,
                        mouseMove: parseFloat(background_space_mouse_interaction),
                        speed: background_space_star_speed / 20,
                        quantity: background_space_star_amount,
                        ratio: background_space_star_amount / 2,
                        divclass: "starfield"
                    },
                    resizer: function() {
                        var t = this.star,
                            e = this.context.canvas.width,
                            n = this.context.canvas.height;
                        this.w = this.$el.width(), this.h = this.$el.height(), this.x = Math.round(this.w / 2), this.y = Math.round(this.h / 2);
                        var o = this.w / e,
                            a = this.h / n;
                        this.context.canvas.width = this.w, this.context.canvas.height = this.h;
                        for (var i = 0; i < this.n; i++) this.star[i][0] = t[i][0] * o, this.star[i][1] = t[i][1] * a, this.star[i][3] = this.x + this.star[i][0] / this.star[i][2] * this.star_ratio, this.star[i][4] = this.y + this.star[i][1] / this.star[i][2] * this.star_ratio;
                        s.context.fillStyle = s.settings.bgColor, this.context.strokeStyle = this.settings.starColor
                    },
                    init: function() {
                        this.settings = t.extend({}, this.defaults, this.options);
                        n.location.href;
                        this.n = parseInt(this.settings.quantity), this.flag = !0, this.test = !0, this.w = 0, this.h = 0, this.x = 0, this.y = 0, this.z = 0, this.star_color_ratio = 0, this.star_x_save = 0, this.star_y_save = 0, this.star_ratio = this.settings.ratio, this.star_speed = this.settings.speed, this.star_speed_save = 0, this.star = new Array(this.n), this.color = this.settings.starColor, this.opacity = .1, this.cursor_x = 0, this.cursor_y = 0, this.mouse_x = 0, this.mouse_y = 0, this.canvas_x = 0, this.canvas_y = 0, this.canvas_w = 0, this.canvas_h = 0, this.fps = this.settings.fps, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|IEMobile)/), this.orientationSupport = e.DeviceOrientationEvent !== o, this.portrait = null;
                        var a = function() {
                            s.w = s.$el.width(), s.h = s.$el.height(), s.initW = s.w, s.initH = s.h, s.portrait = s.w < s.h, s.wrapper = t("<canvas />").addClass(s.settings.divclass), s.wrapper.appendTo(s.el), s.starz = t("canvas", s.el), s.starz[0].getContext && (s.context = s.starz[0].getContext("2d"), u = !0), s.context.canvas.width = s.w, s.context.canvas.height = s.h
                        };
                        a();
                        var i = function() {
                            if (u) {
                                s.x = Math.round(s.w / 2), s.y = Math.round(s.h / 2), s.z = (s.w + s.h) / 2, s.star_color_ratio = 1 / s.z, s.cursor_x = s.x, s.cursor_y = s.y;
                                for (var t = 0; t < s.n; t++) s.star[t] = new Array(5), s.star[t][0] = Math.random() * s.w * 2 - 2 * s.x, s.star[t][1] = Math.random() * s.h * 2 - 2 * s.y, s.star[t][2] = Math.round(Math.random() * s.z), s.star[t][3] = 0, s.star[t][4] = 0;
                                s.context.fillStyle = s.settings.bgColor, s.context.strokeStyle = s.settings.starColor
                            }
                        };
                        i(), c = !0
                    },
                    anim: function() {
                        this.mouse_x = this.cursor_x - this.x, this.mouse_y = this.cursor_y - this.y, this.context.fillRect(0, 0, this.w, this.h);
                        for (var t = 0; t < this.n; t++) this.test = !0, this.star_x_save = this.star[t][3], this.star_y_save = this.star[t][4], this.star[t][0] += this.mouse_x >> 4, this.star[t][0] > this.x << 1 && (this.star[t][0] -= this.w << 1, this.test = !1), this.star[t][0] < -this.x << 1 && (this.star[t][0] += this.w << 1, this.test = !1), this.star[t][1] += this.mouse_y >> 4, this.star[t][1] > this.y << 1 && (this.star[t][1] -= this.h << 1, this.test = !1), this.star[t][1] < -this.y << 1 && (this.star[t][1] += this.h << 1, this.test = !1), this.star[t][2] -= this.star_speed, this.star[t][2] > this.z && (this.star[t][2] -= this.z, this.test = !1), this.star[t][2] < 0 && (this.star[t][2] += this.z, this.test = !1), this.star[t][3] = this.x + this.star[t][0] / this.star[t][2] * this.star_ratio, this.star[t][4] = this.y + this.star[t][1] / this.star[t][2] * this.star_ratio, this.star_x_save > 0 && this.star_x_save < this.w && this.star_y_save > 0 && this.star_y_save < this.h && this.test && (this.context.lineWidth = 2 * (1 - this.star_color_ratio * this.star[t][2]), this.context.beginPath(), this.context.moveTo(this.star_x_save, this.star_y_save), this.context.lineTo(this.star[t][3], this.star[t][4]), this.context.stroke(), this.context.closePath())
                    },
                    loop: function() {
                        this.anim(), i = e.requestAnimationFrame(function() {
                            s.loop()
                        })
                    },
                    move: function() {
                        function t(t) {
                            if (null !== t.beta && null !== t.gamma) {
                                var e = t.gamma,
                                    n = t.beta;
                                s.portrait || (e = -1 * t.beta, n = t.gamma), s.cursor_x = s.w / 2 + 5 * e, s.cursor_y = s.h / 2 + 5 * n
                            }
                        }

                        function o(t) {
                            s.cursor_x = t.pageX || t.clientX + a.scrollLeft - a.clientLeft, s.cursor_y = t.pageY || t.clientY + a.scrollTop - a.clientTop
                        }
                        var a = n.documentElement;
                        this.orientationSupport && !this.desktop ? e.addEventListener("deviceorientation", t, !1) : e.addEventListener("mousemove", o, !1)
                    },
                    stop: function() {
                        e.cancelAnimationFrame(i), a = !1
                    },
                    start: function() {
                        return c || (c = !0, this.init()), a || (a = !0, this.loop()), e.addEventListener("resize", function() {
                            s.resizer()
                        }, !1), e.addEventListener("orientati onchange", function() {
                            s.resizer()
                        }, !1), this.settings.mouseMove && this.move(), this
                    }
                }, r.defaults = r.prototype.defaults, t.fn.starfield = function(t) {
                    return this.each(function() {
                        new r(this, t).start()
                    })
                }, e.Starfield = r
            }(jQuery, window, document), t("#canvas").starfield()
    }

    function l() {
        function e() {
            n(), a(), i(), s(), l(), r(F.offsetWidth, F.offsetHeight), c()
        }

        function n() {
            p = new FSS.CanvasRenderer, o(x.renderer)
        }

        function o(t) {
            _ && z.removeChild(_.element), _ = p, _.setSize(F.offsetWidth, F.offsetHeight), z.appendChild(_.element)
        }

        function a() {
            m = new FSS.Scene
        }

        function i() {
            m.remove(b), _.clear(), v = new FSS.Plane(k.width * _.width, k.height * _.height, k.segments, k.slices), f = new FSS.Material(k.ambient, k.diffuse), b = new FSS.Mesh(v, f), m.add(b);
            var t, e;
            for (t = v.vertices.length - 1; t >= 0; t--) e = v.vertices[t], e.anchor = FSS.Vector3.clone(e.position), e.step = FSS.Vector3.create(Math.randomInRange(.2, 1), Math.randomInRange(.2, 1), Math.randomInRange(.2, 1)), e.time = Math.randomInRange(0, Math.PIM2)
        }

        function s() {
            var t, e;
            for (t = m.lights.length - 1; t >= 0; t--) e = m.lights[t], m.remove(e);
            for (_.clear(), t = 0; t < S.count; t++) e = new FSS.Light(S.ambient, S.diffuse), e.ambientHex = e.ambient.format(), e.diffuseHex = e.diffuse.format(), m.add(e), e.mass = Math.randomInRange(.5, 1), e.velocity = FSS.Vector3.create(), e.acceleration = FSS.Vector3.create(), e.force = FSS.Vector3.create(), e.ring = document.createElementNS(FSS.SVGNS, "circle"), e.ring.setAttributeNS(null, "stroke", e.ambientHex), e.ring.setAttributeNS(null, "stroke-width", "0.5"), e.ring.setAttributeNS(null, "fill", "none"), e.ring.setAttributeNS(null, "r", "10"), e.core = document.createElementNS(FSS.SVGNS, "circle"), e.core.setAttributeNS(null, "fill", e.diffuseHex), e.core.setAttributeNS(null, "r", "4")
        }

        function r(t, e) {
            _.setSize(t, e), FSS.Vector3.set(M, _.halfWidth, _.halfHeight), i()
        }

        function c() {
            g = Date.now() - w, u(), h(), requestAnimationFrame(c)
        }

        function u() {
            var t, e, n, o, a, i, s, r = k.depth / 2;
            for (FSS.Vector3.copy(S.bounds, M), FSS.Vector3.multiplyScalar(S.bounds, S.xyScalar), FSS.Vector3.setZ(E, S.zOffset), S.autopilot && (t = Math.sin(S.step[0] * g * S.speed), e = Math.cos(S.step[1] * g * S.speed), FSS.Vector3.set(E, S.bounds[0] * t, S.bounds[1] * e, S.zOffset)), o = m.lights.length - 1; o >= 0; o--) {
                a = m.lights[o], FSS.Vector3.setZ(a.position, S.zOffset);
                var c = Math.clamp(FSS.Vector3.distanceSquared(a.position, E), S.minDistance, S.maxDistance),
                    u = S.gravity * a.mass / c;
                FSS.Vector3.subtractVectors(a.force, E, a.position), FSS.Vector3.normalise(a.force), FSS.Vector3.multiplyScalar(a.force, u), FSS.Vector3.set(a.acceleration), FSS.Vector3.add(a.acceleration, a.force), FSS.Vector3.add(a.velocity, a.acceleration), FSS.Vector3.multiplyScalar(a.velocity, S.dampening), FSS.Vector3.limit(a.velocity, S.minLimit, S.maxLimit), FSS.Vector3.add(a.position, a.velocity)
            }
            for (i = v.vertices.length - 1; i >= 0; i--) s = v.vertices[i], t = Math.sin(s.time + s.step[0] * g * k.speed), e = Math.cos(s.time + s.step[1] * g * k.speed), n = Math.sin(s.time + s.step[2] * g * k.speed), FSS.Vector3.set(s.position, k.xRange * v.segmentWidth * t, k.yRange * v.sliceHeight * e, k.zRange * r * n - r), FSS.Vector3.add(s.position, s.anchor);
            v.dirty = !0
        }

        function h() {
            if (_.render(m), S.draw) {
                var t, e, n, o;
                for (t = m.lights.length - 1; t >= 0; t--) o = m.lights[t], e = o.position[0], n = o.position[1], _.context.lineWidth = .5, _.context.beginPath(), _.context.arc(e, n, 10, 0, Math.PIM2), _.context.strokeStyle = o.ambientHex, _.context.stroke(), _.context.beginPath(), _.context.arc(e, n, 4, 0, Math.PIM2), _.context.fillStyle = o.diffuseHex, _.context.fill()
            }
        }

        function l() {
            window.addEventListener("resize", d)
        }

        function d(t) {
            r(F.offsetWidth, F.offsetHeight), h()
        }
        t(".grcs_background_content .bg-pattern").remove(), t(".grcs_background_content .bg-overlay").remove();
        var g, _, m, b, v, f, p, y = setInterval(function() {
                t(".grcs_background_content .level-1 #canvas").offset().top <= 0 && (t(".grcs_background_content .level-1 #canvas").css({
                    WebkitTransition: "all .4s",
                    transition: "all .4s"
                }), t(".grcs_background_content .level-1 #canvas").css("background", background_abstract_background_color), clearInterval(y))
            }, 50),
            k = {
                width: background_abstract_shader_width / 100,
                height: 1.8,
                depth: 60,
                segments: 9,
                slices: 8,
                xRange: background_abstract_width_expansion,
                yRange: .1,
                zRange: 1,
                ambient: "#666666",
                diffuse: "#fff",
                speed: background_abstract_move_speed / 1e4
            },
            S = {
                count: 2,
                xyScalar: 1,
                zOffset: 100,
                ambient: "#fff",
                diffuse: "#b3b3b3",
                speed: 2e-4,
                gravity: 500,
                dampening: .95,
                minLimit: 10,
                maxLimit: null,
                minDistance: 20,
                maxDistance: 400,
                autopilot: !0,
                draw: !1,
                bounds: FSS.Vector3.create(),
                step: FSS.Vector3.create(Math.randomInRange(.2, 1), Math.randomInRange(.2, 1), Math.randomInRange(.2, 1))
            },
            x = {
                renderer: "canvas"
            },
            w = Date.now(),
            M = FSS.Vector3.create(),
            E = FSS.Vector3.create(),
            F = document.getElementById("canvas"),
            z = document.getElementById("canvas");
        if (e(), canvas.getContext) {
            var C = canvas.getContext("2d"),
                T = !0;
            canvas.height = screen.height - 60, canvas.width = screen.width + 20, initialize(), initialize();
            setInterval(function() {
                for (var t = 1; 1e3 >= t; t++) C.beginPath(), T ? (C.moveTo(0, randomize(canvas.height + 10)), T = !1) : (C.moveTo(randomize(canvas.width + 10), 0), T = !0), C.lineTo(randomize(canvas.width + 50), randomize(canvas.height + 50)), C.lineTo(randomize(canvas.width + 50), randomize(canvas.height + 50)), C.fillStyle = getRndColor(), C.fill()
            }, 5e3)
        }
    }

    function d() {
        var e = "background-image: url('" + background_glitch_image + "')";
        t(".grcs_background_content .level-2 .bg-image").append('<div class="glitch-img" style="' + e + '"></div>'), console.log(background_glitch_scale_toggle), t(".grcs_background_content .glitch-img").mgGlitch({
            destroy: !1,
            glitch: !0,
            scale: Boolean(background_glitch_scale_toggle),
            blend: !0,
            blendModeType: "hue",
            glitch1TimeMin: 600,
            glitch1TimeMax: 900,
            glitch2TimeMin: 10,
            glitch2TimeMax: 115,
            zIndexStart: 8
        })
    }
    switch (background_mode) {
        case "image":
            e();
            break;
        case "slider":
            n();
            break;
        case "kenburns":
            o();
            break;
        case "youtube":
            a();
            break;
        case "color":
            i();
            break;
        case "gradient":
            s();
            break;
        case "sphere":
            r();
            break;
        case "waves":
            c();
            break;
        case "mesh":
            u();
            break;
        case "space":
            h();
            break;
        case "abstract":
            l();
            break;
        case "glitch":
            d();
            break;
        default:
            alert("Error! No background is set or something went wrong"), console.log("Error! No background is set or something went wrong")
    }
});

jQuery( window ).load(function() {
	/*var canvas = jQuery("#canvas").find("canvas")[0];*/
	var canvas = jQuery("canvas")[2];
    var context = canvas.getContext('2d');
    /*var context2 = canvas2.getContext('2d');
    var context3 = canvas3.getContext('2d');
    clone = canvas.cloneNode();    
    cloneCtx = clone.getContext('2d');
    */
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    /*
    context.clearRect(0,0,width,height);
    context2.clearRect(0,0,width,height);
    context3.clearRect(0,0,width,height);
    context1.globalAlpha = '.8';
    context2.globalAlpha = '.8';
	context3.globalAlpha = '.8';

    clear( cloneCtx, context, canvasWidth, canvasHeight);*/

    // Store the current transformation matrix
	context.save();

	// Use the identity matrix while clearing the canvas
	context.setTransform(1, 0, 0, 1, 0, 0);
	context.clearRect(0, 0, canvasWidth, canvasHeight);

	// Restore the transform
	context.restore();
});

var clear = function( cloneCtx, context, canvasWidth, canvasHeight ){
 // clear the clone canvas  
 cloneCtx.clearRect(0,0,canvasWidth, canvasHeight);
 // this should be needed at init and when canvas is resized but for demo I leave it here
 cloneCtx.globalAlpha = '.8';
 // draw ou visible canvas, a bit less opaque
 cloneCtx.drawImage(context.canvas, 0,0);
 // clear the visible canvas
 context.clearRect(0,0,canvasWidth, canvasHeight);
 // draw back our saved less-opaque image
 context.drawImage(clone, 0,0);
}
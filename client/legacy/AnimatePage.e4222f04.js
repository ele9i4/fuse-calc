import { a as _inherits, b as _classCallCheck, c as _possibleConstructorReturn, d as _getPrototypeOf, i as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, S as SvelteComponentDev, I as create_slot, h as element, j as claim_element, k as children, m as detach_dev, o as attr_dev, q as add_location, r as insert_dev, v as _slicedToArray, J as get_slot_context, K as get_slot_changes, C as transition_in, T as add_render_callback, U as create_in_transition, D as transition_out, V as create_out_transition } from './index.425cd525.js';

function cubicOut(t) {
  var f = t - 1.0;
  return f * f * f + 1.0;
}

function fly(node, _ref3) {
  var _ref3$delay = _ref3.delay,
      delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
      _ref3$duration = _ref3.duration,
      duration = _ref3$duration === void 0 ? 400 : _ref3$duration,
      _ref3$easing = _ref3.easing,
      easing = _ref3$easing === void 0 ? cubicOut : _ref3$easing,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y,
      _ref3$opacity = _ref3.opacity,
      opacity = _ref3$opacity === void 0 ? 0 : _ref3$opacity;
  var style = getComputedStyle(node);
  var target_opacity = +style.opacity;
  var transform = style.transform === 'none' ? '' : style.transform;
  var od = target_opacity * (1 - opacity);
  return {
    delay: delay,
    duration: duration,
    easing: easing,
    css: function css(t, u) {
      return "\n\t\t\ttransform: ".concat(transform, " translate(").concat((1 - t) * x, "px, ").concat((1 - t) * y, "px);\n\t\t\topacity: ").concat(target_opacity - od * u);
    }
  };
}

var file = "src/components/AnimatePage.svelte";

function create_fragment(ctx) {
  var div;
  var div_intro;
  var div_outro;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[1].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[0], null);
  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "svelte-1uwj4pi");
      add_location(div, file, 4, 0, 63);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot && default_slot.p && dirty &
      /*$$scope*/
      1) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[0], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[0], dirty, null));
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      add_render_callback(function () {
        if (div_outro) div_outro.end(1);
        if (!div_intro) div_intro = create_in_transition(div, fly, {
          x: 200,
          duration: 300
        });
        div_intro.start();
      });
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      if (div_intro) div_intro.invalidate();
      div_outro = create_out_transition(div, fly, {
        x: -200,
        duration: 300
      });
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
      if (detaching && div_outro) div_outro.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;

  $$self.$set = function ($$props) {
    if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {};

  return [$$scope, $$slots];
}

var AnimatePage =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(AnimatePage, _SvelteComponentDev);

  function AnimatePage(options) {
    var _this;

    _classCallCheck(this, AnimatePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AnimatePage).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "AnimatePage",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return AnimatePage;
}(SvelteComponentDev);

export { AnimatePage as A };

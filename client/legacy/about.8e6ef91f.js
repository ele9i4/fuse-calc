import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, G as space, H as create_component, Z as query_selector_all, k as detach_dev, I as claim_space, J as claim_component, n as insert_dev, L as mount_component, o as _slicedToArray, t as transition_in, v as transition_out, M as destroy_component, D as text, E as claim_text } from './client.b00bd549.js';
import { A as AnimPage } from './AnimatePage.44590afb.js';

function create_default_slot(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("About page");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "About page");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(9:0) <AnimPage>",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t;
  var current;
  var animpage = new AnimPage({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t = space();
      create_component(animpage.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1myew8g\"]", document.head);
      head_nodes.forEach(detach_dev);
      t = claim_space(nodes);
      claim_component(animpage.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      document.title = "About";
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
      mount_component(animpage, target, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var animpage_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        animpage_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      animpage.$set(animpage_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(animpage.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(animpage.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
      destroy_component(animpage, detaching);
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

var About =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(About, _SvelteComponentDev);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(About).call(this, options));
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "About",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return About;
}(SvelteComponentDev);

export default About;

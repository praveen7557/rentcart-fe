import StepThree from "@/components/ListItem/StepThree.vue";
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import VeeValidate from "vee-validate";
import BootstrapVue from 'bootstrap-vue'
import { customizer } from '../helpers';
import mergeWith from "lodash.mergewith";
import AppButton from "@/components/AppButton.vue";
import flushPromises from "flush-promises";
import createStore from "./store";
import Vuex from "vuex";

const Vue = createLocalVue();
Vue.use(VeeValidate);
Vue.use(BootstrapVue);
Vue.use(Vuex);

const createWrapper = (overrides) => {
  let defaultOptions = {
    localVue: Vue,
    store: createStore(),
    mocks: {
      "app-button": "div"
    }
  };

  return shallowMount(StepThree, mergeWith(defaultOptions, overrides, customizer));
}

describe('Step Three in ListItem', () => {
  test("Check StepThree validations", async () => {
    expect.assertions(1);
    let wrapper = createWrapper();
    let vm = wrapper.vm;

    await vm.$validator.validate();
    expect(vm.$validator.errors.any()).toBe(true);
  })

  test('should emit event when submitted', async () => {
    expect.assertions(2);
    let mutations = {
      "UPDATE_LISTING_STEP": jest.fn(() => Promise.resolve())
    };
    let store = createStore({ mutations });
    const wrapper = createWrapper({ store });
    let vm = wrapper.vm;

    vm.price = 200;
    vm.caution = 2000;

    wrapper.find("app-button").trigger("click");
    await flushPromises();

    expect(mutations.UPDATE_LISTING_STEP).toBeCalled();
    expect(wrapper.emitted().stepClick[0]).toEqual([4]);
  })
})


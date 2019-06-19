import StepOne from "@/components/ListItem/StepOne.vue";
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import VeeValidate from "vee-validate";
import BootstrapVue from 'bootstrap-vue'
import { customizer } from '../helpers';
import mergeWith from "lodash.mergewith";

const Vue = createLocalVue();
Vue.use(VeeValidate);
Vue.use(BootstrapVue);

const createWrapper = (overrides) => {
  let defaultOptions = {
    localVue: Vue
  };

  return shallowMount(StepOne, mergeWith(defaultOptions, overrides, customizer));
}
test("Check StepOne validations", async () => {
  let stepOneWrapper = createWrapper();
  let vm = stepOneWrapper.vm;
  vm.itemName = "Hello";
  await vm.$validator.validate();
  expect(vm.$validator.errors.any()).toBe(true);
})

// Wasn't able to this because didn't know how to test file input.

// test('should emit stepClick event when submit', () => {
//   let stepOneWrapper = createWrapper();
//   let vm = stepOneWrapper.vm;
//   vm.itemName = "Hello";

// })


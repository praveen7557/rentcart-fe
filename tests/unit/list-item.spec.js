import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import VeeValidate from "vee-validate";
import BootstrapVue from 'bootstrap-vue'

import ListItem from '@/views/ListItem.vue'
import { addMockFunctionsToSchema } from 'graphql-tools';
import schema from '../mockSchema';

import StepOne from "@/components/ListItem/StepOne.vue";
import StepTwo from "@/components/ListItem/StepTwo.vue";
import StepThree from "@/components/ListItem/StepThree.vue";
import StepFour from "@/components/ListItem/StepFour.vue";


const Vue = createLocalVue();
Vue.use(VeeValidate);
Vue.use(BootstrapVue);


let wrapper, vm;

beforeEach(() => {
  wrapper = shallowMount(ListItem, {
    localVue: Vue
  });
  vm = wrapper.vm;
  addMockFunctionsToSchema({
    schema,
    preserveResolvers: true,
  });
})

test("Check if steps works in ListItem", () => {
  wrapper.setData({
    activeStep: 2
  })
  expect(wrapper.contains(StepTwo)).toBe(true);
  expect(wrapper.contains(StepOne)).toBe(false);
});




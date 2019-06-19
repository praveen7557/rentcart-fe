import StepTwo from "@/components/ListItem/StepTwo.vue";
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import VeeValidate from "vee-validate";
import BootstrapVue from 'bootstrap-vue'
import { customizer } from '../helpers';
import mergeWith from "lodash.mergewith";
import AppButton from "@/components/AppButton.vue";
import { graphql } from 'graphql';
import { addMockFunctionsToSchema } from 'graphql-tools';
import schema from '../../mockSchema';
import flushPromises from "flush-promises";
import createStore from "./store";
import Vuex from "vuex";

const Vue = createLocalVue();
Vue.use(VeeValidate);
Vue.use(BootstrapVue);
Vue.use(Vuex);

let categories = [{ "id": "5ce254e190baeea8ea3cde5f", "name": "Sports" }, { "id": "5ce6935eb4f34212b5b3f120", "name": "Clothes" }, { "id": "5ce69377b4f34212b5b3f121", "name": "Chicks" }, { "id": "5cf5043f7303d349593c393d", "name": "Electronics" }, { "id": "5cf504897303d349593c393e", "name": "Others" }];

const createWrapper = (overrides) => {
  let defaultOptions = {
    localVue: Vue,
    mocks: {
      $apollo: {
        query: jest.fn(() => Promise.resolve({
          data: {
            categories,
            subCategories: categories
          }
        }))
      }
    },
    store: createStore()
  };

  return mount(StepTwo, mergeWith(defaultOptions, overrides, customizer));
}

describe('StepTwo in ListItem', () => {
  test("should emit event when submitted", async () => {
    const query = `query getCategories {
      categories {
        id,
        name
      }
    }`;
    expect.assertions(7);
    let mutations = {
      "UPDATE_LISTING_STEP": jest.fn(() => Promise.resolve())
    };
    let store = createStore({ mutations });
    const wrapper = createWrapper({ store });

    let result = await graphql(schema, query);
    let vm = wrapper.vm;
    try {
      expect(vm.categoriesData[0].options[0].name).toBe("Sports");
      vm.multiSelected({
        name: "category",
        option: result.data.categories[0],
        idx: 0
      })
      await flushPromises();

      expect(vm.categoriesData[0].selected).toBe(result.data.categories[0]);
      expect(vm.categoriesData.length).toBe(2);

      vm.multiSelected({
        name: "subCategory",
        option: result.data.categories[1],
        idx: 1
      })
      await flushPromises();

      expect(vm.categoriesData[1].selected).toBe(result.data.categories[1]);
      vm.description = "Tempo";
      wrapper.find(AppButton).trigger("click");
      await flushPromises();

      expect(mutations.UPDATE_LISTING_STEP).toBeCalled();

      expect(wrapper.emitted().stepClick.length).toBe(1);
      expect(wrapper.emitted().stepClick[0]).toEqual([3]);
    } catch (ex) {
      console.log(ex);
      expect(true).toBeFalsy();
    }
  })

  test('should throw validation error when category is not selected', async () => {
    expect.assertions(1);
    let wrapper = createWrapper();
    let vm = wrapper.vm;
    vm.description = "Tempo";
    wrapper.find(AppButton).trigger("click");
    await flushPromises();

    expect(vm.categoriesData[0].error).toBe("Category is required");
  })

  // test('should throw validation error when description is not entered', async () => {
  //   expect.assertions(1);
  //   let wrapper = createWrapper();
  //   let vm = wrapper.vm;

  //   vm.multiSelected({
  //     name: "category",
  //     option: categories[0],
  //     idx: 0
  //   })
  //   await flushPromises();

  //   wrapper.find(AppButton).trigger("click");
  //   await flushPromises();

  //   console.log(JSON.stringify(vm.errors.items));
  //   expect(vm.errors.items.field).toBe("description");
  // })

})



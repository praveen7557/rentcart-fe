import StepFour from "@/components/ListItem/StepFour.vue";
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
            cities: categories,
            areas: categories
          }
        })),
        mutate: jest.fn(() => Promise.resolve())
      },
      "app-button": "div"
    },
    store: createStore()
  };

  let options = mergeWith(defaultOptions, overrides, customizer);
  return mount(StepFour, options);
}

describe('StepFour in ListItem', () => {
  test("should call mutate when submitted", async () => {
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
    let state = {
      stepData: {
        StepOne: {
          itemName: "",
          images: ""
        },
        StepTwo: {
          categories: [{
            selected: {
              id: 1
            }
          }],
          description: ""
        },
        StepThree: {
          price: 20,
          caution: 20
        },
        StepFour: {
          cities: [{
            selected: {
              id: 1
            }
          }, {
            selected: {
              id: 1
            }
          }],
          address: ""
        }
      }
    }
    let store = createStore({ mutations, state });

    let mocks = {
      $apollo: {
        mutate: jest.fn(() => Promise.resolve())
      },
      $router: {
        push: jest.fn()
      }
    }

    const wrapper = createWrapper({ store, mocks });

    let result = await graphql(schema, query);
    let vm = wrapper.vm;
    try {
      expect(vm.cities[0].options[0].name).toBe("Sports");
      vm.multiSelected({
        name: "city",
        option: result.data.categories[0],
        idx: 0
      })
      await flushPromises();

      expect(vm.cities[0].selected).toBe(result.data.categories[0]);
      expect(vm.cities.length).toBe(2);

      vm.multiSelected({
        name: "area",
        option: result.data.categories[1],
        idx: 1
      })
      await flushPromises();

      expect(vm.cities[1].selected).toBe(result.data.categories[1]);
      vm.address = "Tempo";
      wrapper.find("app-button").trigger("click");
      await flushPromises();

      expect(mutations.UPDATE_LISTING_STEP).toBeCalled();

      expect(mocks.$apollo.mutate).toBeCalled();
      expect(mocks.$router.push).toBeCalledWith('/')
    } catch (ex) {
      console.log(ex);
      expect(true).toBeFalsy();
    }
  })

  test('should throw validation error when city is not selected', async () => {
    expect.assertions(1);
    let wrapper = createWrapper();
    let vm = wrapper.vm;
    vm.address = "Tempo";
    wrapper.find("app-button").trigger("click");
    await flushPromises();

    expect(vm.cities[0].error).toBe("City is required");
  })
})



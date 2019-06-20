import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import AppCard from "@/components/AppCard.vue";
import CardSlider from "@/components/CardSlider.vue";
import flushPromises from "flush-promises";

let createWrapper = () => {
  return shallowMount(CardSlider, {
    propsData: {
      type: "Items",
      typeData: [{}, {}, {}, 2, 2]
    }
  });
}

describe('Card Slider', () => {
  test('should have five app card components', () => {
    expect.assertions(2);
    let wrapper = createWrapper();
    expect(wrapper.find(".cards-type").text()).toBe("Items");
    expect(wrapper.findAll(AppCard).length).toBe(5)
  })

  test('nav buttons should work as expected', async () => {
    let wrapper = createWrapper();
    let vm = wrapper.vm;
    jest.useFakeTimers();


    expect.assertions(4);
    expect(vm.rightShow).toBe(true);
    expect(wrapper.find(".slide-button.right").exists()).toBe(true);
    expect(wrapper.find(".slide-button.left").exists()).toBe(false);

    wrapper.find(".slide-button.right").trigger("click");
    await flushPromises();
    jest.runAllTimers();
    expect(wrapper.find(".slide-button.left").exists()).toBe(true);

  })
})

import { shallowMount } from '@vue/test-utils'
import AppCard from "@/components/AppCard.vue";

describe('App Card', () => {
  test('should fetch card with correct details', () => {
    let cardData = {
      images: ["https://assets.fatllama.com/images/medium/sony-a7sii--3-lenses-14877375.jpg"],
      name: "Camera",
      price: 3000,
      city: {
        name: "Hyderabad"
      }
    };
    let wrapper = shallowMount(AppCard, {
      propsData: {
        cardData
      }
    });

    expect.assertions(4);

    expect(wrapper.find(".card-title").text()).toBe(cardData.name);
    expect(wrapper.find(".card-price").text()).toBe(`₹ ${cardData.price} / day,`);
    expect(wrapper.find(".card-location").text()).toBe(cardData.city.name);
    expect(wrapper.find(".card-image").attributes('src')).toBe(cardData.images[0]);
  })

})

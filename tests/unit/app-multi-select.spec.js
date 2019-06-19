import { mount } from '@vue/test-utils'
import AppMultiSelect from "@/components/AppMultiSelect.vue";

let options = [{ "id": "5ce254e190baeea8ea3cde5f", "name": "Sports" }, { "id": "5ce6935eb4f34212b5b3f120", "name": "Clothes" }, { "id": "5ce69377b4f34212b5b3f121", "name": "Chicks" }, { "id": "5cf5043f7303d349593c393d", "name": "Electronics" }, { "id": "5cf504897303d349593c393e", "name": "Others" }];

test('AppMultiSelect', async () => {
  let multiSelectWrapper = mount(AppMultiSelect, {
    propsData: {
      options,
      placeholder: "Select Category",
      name: "category"
    }
  });

  let vm = multiSelectWrapper.vm;
  vm.onSelect({
    id: "5ce6935eb4f34212b5b3f120",
    name: "Clothes"
  })
  expect(multiSelectWrapper.emitted('selected')).toBeTruthy();
  expect(multiSelectWrapper.emitted('selected')[0][0].option.id).toBe('5ce6935eb4f34212b5b3f120');
})
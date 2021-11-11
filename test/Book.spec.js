import { mount, shallowMount } from '@vue/test-utils'
import Book from '@/components/Book.vue'

describe('Book', () => {
  it('renders the inputs',() => {
    const wrapper = mount(Book)
    const inputs = wrapper.findAll('input')
    expect(inputs.length).toBe(2)
  })
})

describe('Book', () => {
  it('is writing a email?', async () => {
    const wrapper = shallowMount(Book)
    const emailInput = wrapper.find('#email')
    const value = "ahmet.zumberoglu@modanisa.com"
    await emailInput.setValue(value)
    expect(emailInput.element.value).toBe(value)
  })
})

describe('Book', () => {
  it('is writing a message?', async () => {
    const wrapper = shallowMount(Book)
    const emailInput = wrapper.find('#message')
    await emailInput.setValue("hello")
    expect(emailInput.element.value).toBe("hello")
  })
})
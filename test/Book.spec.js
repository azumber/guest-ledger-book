import { mount } from '@vue/test-utils'
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
    const wrapper = mount(Book)
    const emailInput = wrapper.find('#email')
    const value = "ahmet.zumberoglu@modanisa.com"
    await emailInput.setValue(value)
    expect(emailInput.element.value).toBe(value)
  })
})

describe('Book', () => {
  it('is writing a message?', async () => {
    const wrapper = mount(Book)
    const emailInput = wrapper.find('#message')
    await emailInput.setValue("hello")
    expect(emailInput.element.value).toBe("hello")
  })
})

describe('Book', () => {
  it('adding to list new card', async () => {
    const wrapper = mount(Book)
    expect(wrapper.findAll('[data-test="item"]')).toHaveLength(0)

    await wrapper.get('[data-test="mail"]').setValue("mailll")
    await wrapper.get('[data-test="mail"]').setValue("hellogg")
    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="item"]')).toHaveLength(1)
  })
})
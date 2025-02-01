import { mount } from '@vue/test-utils';
import App from '../src/App.vue';
import { describe, it, expect } from 'vitest';

describe('App.vue', () => {
    it('add task', async () => {
        const wrapper = mount(App);
        const input = wrapper.find('input');
        const button = wrapper.find('button');

        await input.setValue('New Task');
        await button.trigger('click');

        expect(wrapper.html()).toContain('New Task');
    });

    it('delete task', async () => {
        const wrapper = mount(App);

        // Add a new Task
        const input = wrapper.find('input');
        const button = wrapper.find('button');
        await input.setValue('Task to Delete');
        await button.trigger('click');

        // Clicl Delete button
        await wrapper.find('.text-red-500').trigger('click');

        expect(wrapper.html()).not.toContain('Task to Delete');
    });

    it('change task status', async () => {
        const wrapper = mount(App);

        // add Task 
        const input = wrapper.find('input');
        const button = wrapper.find('button');
        await input.setValue('Task to Complete');
        await button.trigger('click');

        // Complete button click
        await wrapper.find('.text-blue-500').trigger('click');

        expect(wrapper.find('span').classes()).toContain('line-through');
    });
});

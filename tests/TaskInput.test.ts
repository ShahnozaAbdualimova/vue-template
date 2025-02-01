import { mount } from '@vue/test-utils';
import TaskInput from '../src/components/TaskInput.vue';
import { describe, it, expect, vi } from 'vitest';

describe('TaskInput.vue', () => {
    it('new task kiritilganda va tugma bosilganda, @add-task event chaqiriladi', async () => {
        const wrapper = mount(TaskInput);
        const input = wrapper.find('input');
        const button = wrapper.find('button');

        await input.setValue('New Task');
        await button.trigger('click');

        expect(wrapper.emitted('add-task')).toBeTruthy();
        expect(wrapper.emitted('add-task')![0]).toEqual(['New Task']);
    });

    it('input ichidagi qiymat event yuborilgandan keyin tozalanadi', async () => {
        const wrapper = mount(TaskInput);
        const input = wrapper.find('input');

        await input.setValue('Another Task');
        await wrapper.find('button').trigger('click');

        expect(input.element.value).toBe('');
    });
});

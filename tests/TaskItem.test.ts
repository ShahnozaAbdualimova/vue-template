import { mount } from '@vue/test-utils';
import TaskItem from '../src/components/TaskItem.vue';
import { describe, it, expect, vi } from 'vitest';

describe('TaskItem.vue', () => {
    const task = { text: 'Sample Task', completed: false };

    it('toggle-task event tugmani bosganda chaqiriladi', async () => {
        const wrapper = mount(TaskItem, {
            props: { task, index: 0 },
        });

        await wrapper.find('button.text-blue-500').trigger('click');

        expect(wrapper.emitted('toggle-task')).toBeTruthy();
        expect(wrapper.emitted('toggle-task')![0]).toEqual([0]);
    });

    it('remove-task event delete tugmasi bosilganda chaqiriladi', async () => {
        const wrapper = mount(TaskItem, {
            props: { task, index: 0 },
        });

        await wrapper.find('button.text-red-500').trigger('click');

        expect(wrapper.emitted('remove-task')).toBeTruthy();
        expect(wrapper.emitted('remove-task')![0]).toEqual([0]);
    });

    it('task.completed true bo‘lsa, matn chizib tashlanishi kerak', () => {
        const wrapper = mount(TaskItem, {
            props: { task: { text: 'Done Task', completed: true }, index: 1 },
        });

        expect(wrapper.find('span').classes()).toContain('line-through');
    });
});

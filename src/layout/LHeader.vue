<template>
    <header class="p-4 h-24">
        <div class="container mx-auto flex justify-between items-center">
            <a href="#"><img src="/images/logo.svg" alt=""></a>

            <ul class="flex gap-10 items-center">
                <li class="text-blue-100 text-base leading-8 cursor-pointer">Home</li>
                <li class="text-blue-100 text-base leading-8 cursor-pointer flex justify-center gap-2 items-center">Advertise <svg
                        :class="{ 'rotate-180': isOpen }" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5999 9.60001L11.9999 14.4L6.3999 9.60001" stroke="#6F6F6F" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </li>
                <li class="text-blue-100 text-base leading-8 cursor-pointer flex justify-center gap-2 items-center">Supports <svg
                        :class="{ 'rotate-180': isOpen }" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5999 9.60001L11.9999 14.4L6.3999 9.60001" stroke="#6F6F6F" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </li>
                <li class="text-blue-100 text-base leading-8 cursor-pointer">Contact</li>
            </ul>
            <button type="button"
                class="py-4 px-8 border rounded-full border-red-100 text-red-100 text-base font-medium leading-6 duration-200 ease-in hover:bg-red-100 hover:text-white">Get
                Started</button>
        </div>
    </header>

</template>

<script setup>

</script>

<style lang="scss" scoped></style>
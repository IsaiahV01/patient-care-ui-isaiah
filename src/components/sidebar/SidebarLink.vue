<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { collapsed } from './sidebarState';

export default {
    props: {
        to: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const route = useRoute();
        const isActive = computed(() => route.path === props.to);
        return { isActive, collapsed }
    }
}
</script>

<template>
    <router-link :to="to" :class="['link', { 'router-link-exact-active': isActive, 'active-link': isActive }]">
        <font-awesome-icon class="icon" :icon="icon" />
        <transition name="fade">
        <span v-if="!collapsed">
            <slot />
        </span>
    </transition>
    </router-link>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@100&display=swap');

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.1s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.link {
    font-family: "Montserrat", serif bold;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    font-weight: 400;
    user-select: none;

    margin: 0.1em 0;
    padding: 0.4em;
    border-radius: 0.25em;
    height: 1.5em;

    color: #806DF1;
    text-decoration: none;
}

.link:hover {
    background-color: var(--sidebar-item-active);
    color: white;
}

.link .icon {
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
}

.active-link {
    background-color: var(--sidebar-item-active);
    color: white;
}
</style>
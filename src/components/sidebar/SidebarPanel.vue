<script>
import { collapsed, toggleSidebar, sidebarWidth } from '@/components/sidebar/sidebarState';


export default {
    props: {},
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth }
    }
}
</script>

<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <font-awesome-icon icon="angles-left" @click="toggleSidebar" class="collapse-icons" />
    </div>
</template>

<style>
:root {
    --sidebar-bg-color: #2f855a;
    --sidebar-item-color: #38a169;
    --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
    background-color: var(--sidebar-bg-color);
    color: white;
    
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}
</style>
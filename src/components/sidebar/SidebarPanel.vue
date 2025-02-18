<script>
import SidebarLink from './SidebarLink.vue';
import { collapsed, toggleSidebar, sidebarWidth } from '@/components/sidebar/sidebarState';


export default {
    props: {},
    components: {
        SidebarLink
    },
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth }
    }
}
</script>

<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <h1>
            <span v-if="collapsed">
                <div>N</div>
                <div>C</div>
            </span>
            <span v-else>NeuroCorp</span>   
        </h1>
        <SidebarLink to="/" icon="home">Home</SidebarLink>
        <SidebarLink to="/patients" icon="user">Patients</SidebarLink>
        <SidebarLink to="/caretakers" icon="hands-holding-child">Caretakers</SidebarLink>
        <SidebarLink to="/therapists" icon="user-doctor">Therapists</SidebarLink>
        <SidebarLink to="/appointments" icon="calendar">Appointments</SidebarLink>
        <SidebarLink to="/payments" icon="file-invoice-dollar">Payments</SidebarLink>
        <span class="collapse-icon" :class="{ 'rotate-180': collapsed}">
            <font-awesome-icon icon="angles-left" @click="toggleSidebar" />
        </span>
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

.collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;

    color: rgba(255, 255, 255, 0.7);

    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>
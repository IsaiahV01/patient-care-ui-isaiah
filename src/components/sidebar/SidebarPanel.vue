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
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@100&display=swap'); /* Example Google Font */

:root {
    --sidebar-bg-color: #ffffff;
    --sidebar-item-color: #806DF1;
    --sidebar-item-active: #806DF1;
}

.sidebar h1 {
    font-family: "Montserrat", serif; 
}
</style>

<style scoped>
.sidebar {
    border-right: #806DF1 1px solid;
    background-color: var(--sidebar-bg-color);
    color: #806DF1;
    
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

    color: #806DF1;

    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
/* Sidebar responsiveness */
@media (max-width: 1024px) {  /* Tablets */
    .sidebar {
        width: 100%;
        height: 5vh;
        position: fixed; /* ✅ Moves sidebar to the top */
        top: 0;
        left: 0;
        right: 0;
        border-bottom: #806DF1 1px solid;
        border-right: none;
        display: flex;
        flex-direction: row; /* ✅ Makes items align in a row */
        align-items: center;
        padding: 0.5em 1em;
    }

    .sidebar h1 {
        flex-grow: 1; /* ✅ Pushes text to the left */
        font-size: 1.5rem;
        text-align: left;
    }

    .sidebar .collapse-icon {
        display: none;
    }
}

@media (max-width: 768px) {  /* Phones */
    .sidebar {
        width: 100%;
        height: auto;
        position: fixed; /* ✅ Moves sidebar to the top */
        top: 0;
        left: 0;
        right: 0;
        border-bottom: #806DF1 1px solid;
        border-right: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.5em 1em;
    }

    .sidebar h1 {
        flex-grow: 1;
        font-size: 1.2rem;
        text-align: left;
    }

    .sidebar .collapse-icon {
        display: none;
    }
}
</style>
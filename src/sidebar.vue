<template>
    <div class="sidebar" >
    <button class="sidebar__compose" @click.prevent="updateCurrentView('mailmessagebox')"><span class="material-icons"> add </span>Compose</button>
    <div class="sidebarOption index" :class="{sidebarOption__active : activeView == 'mailinbox'}" @click.prevent="updateCurrentView('mailinbox')">
        <h3>Inbox ({{allmessages.length}})</h3>
    </div>

    <div class="sidebarOption" @click.prevent="updateCurrentView('mailimportant')" :class="{sidebarOption__active : activeView == 'mailimportant'}">
        <h3>Important ({{importantMessages.length}})</h3>
    </div>

    <div class="sidebarOption" @click.prevent="updateCurrentView('mailsent')" :class="{sidebarOption__active : activeView == 'mailsent'}">
        <h3>Sent ({{sentMessages.length}})</h3>
    </div>

    <div class="sidebarOption" @click.prevent="updateCurrentView('mailtrash')" :class="{sidebarOption__active : activeView == 'mailtrash'}">
        <h3>Trash ({{trashedMessages.length}})</h3>
    </div>

</div>
</template>

<script>
import {
    eventBus
} from './main'
export default {
    data() {
        return {
            activeView : ''
        }
    },
    props:{
        messages: {
            type: Array,
            required: true
        }
    },
    methods: {
        updateCurrentView(value){
            this.activeView = value,
             eventBus.$emit('changeView', {
                    tag : this.activeView
                });
        }
    },
   
    created() {
            eventBus.$on('changeView', (data) => {
                this.activeView = data.tag;
            });
        },
    computed: {
        allmessages() {
            return this.messages.filter(function (message) {
                return (message.type == 'incoming' &&  !message.isDeleted);
            });
        },
        sentMessages() {
            return this.messages.filter(function (message) {
                return (message.type == 'outgoing' && !message.isDeleted);
            });
        },
        importantMessages() {
            return this.messages.filter(function (message) {
                return (message.type == 'incoming' && message.isImportant === true && !message.isDeleted);
            });
        },
        trashedMessages() {
            return this.messages.filter(function (message) {
                return message.isDeleted === true;
            });
        }
    }
}
</script>
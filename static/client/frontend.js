import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import PostController from '../../PostController.js'


// Vue.component('loader', {
//     template: `
//     <div style="display: flex;justify-content: center;align-items: center">
//       <div class="spinner-border" role="status">
//         <span class="sr-only">Loading...</span>
//       </div>
//     </div>
//   `
// })

new Vue({
    el: '#app',
    data() {
        return {
            form: {
                name: '',
                value: ''
            },

            contacts: [

            ]
        }
    },

    computed: {
        canCreate() {
            return this.form.name.trim() && this.form.value.trim()
        }
    },

    methods: {
        // async createContact() {
        //     const { ...contact } = this.form
        //     const newContact = await request('/api/contacts', 'POST', contact)

        //     this.contacts.push(newContact)

        //     this.form.name = this.form.value = ''
        // },

        // async markContact(id) {
        //     const contact = this.contacts.find(c => c.id === id)
        //     const update = await request(`/api/contacts/${id}`, 'PUT', {
        //         ...contact,
        //         marked: true
        //     })
        //     contact.marked = update.marked;
        // },

        // async removeContact(id) {
        //     await request(`/api/contacts/${id}`, 'DELETE')
        //     this.contacts.splice(this.contacts.indexOf(id), 1)
        // }

    },
    async mounted() {
        this.contacts = PostController.getAll

    }

})


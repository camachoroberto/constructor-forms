export default {
    name: "EmailComponent",
    props: {
        nome: String,
        index: Number,
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    data() {
        return {}
    }
}

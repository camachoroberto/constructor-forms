import TextComponent from '@/components/text/TextComponent.vue'
import TextAreaComponent from "@/components/textArea/TextAreaComponent";
import TelefoneComponent from "@/components/telefone/TelefoneComponent";
import EmailComponent from "@/components/email/EmailComponent";

export default {
    name: 'Home',
    components: {
        TextComponent,
        TextAreaComponent,
        TelefoneComponent,
        EmailComponent
    },
    data() {
        return {
            textos: [],
            textosLongos: [],
            telefone: [],
            email: [],
            titulo: {
                nome: ''
            }

        }
    },
    methods: {
        onSubmit(dado, tipo) {
            if (!dado.length) {
                this.$swal('Precisa adicionar uma pergunta no campo!!!');
                return
            }
            switch (tipo) {
                case 'textoCurto':
                    this.novoTextoCurto(dado)
                    break;
                case 'textoLongo':
                    this.novoTextoLongo(dado)
                    break
                case 'telefone':
                    this.novoTelefone(dado)
                    break
                case 'email':
                    this.novoEmail(dado)
                    break
            }
        },

        novoTextoCurto(dado) {
            this.textos.push(dado);
            this.titulo.nome = '';
        },

        novoTextoLongo(dado) {
            this.textosLongos.push(dado);
            this.titulo.nome = '';
        },

        novoTelefone(dado){
            this.telefone.push(dado);
            this.titulo.nome = '';
        },

        novoEmail(dado){
            this.email.push(dado);
            this.titulo.nome = '';
        },

        excluirTexto(index, tipo) {
            switch (tipo) {
                case 'textoCurto':
                    this.textos.splice(index, 1);
                    break;
                case 'textoLongo':
                    this.textosLongos.splice(index, 1);
                    break
                case 'telefone':
                    this.telefone.splice(index, 1);
                    break
                case 'email':
                    this.email.splice(index, 1);
                    break
            }
        },
    }
}

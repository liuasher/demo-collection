// mixins
export const myMixin = {
    created() {
        (this as any).hello();
    },
    methods: {
        hello() {
            console.log('hello from mixin!');
        }
    }
};

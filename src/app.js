export const dva = {
  config: {
    onError(e) {
      e.preventDefault();
      console.error(e.message);
    },
    onHmr() {
      console.log('xxx');
    }
  },
  plugins: [
    require('dva-logger')(),
  ],
};

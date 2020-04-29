import { mapGetters } from 'vuex';

export default {
  name: 'AuthControl',
  computed: {
    ...mapGetters('auth', {
      authStatus: 'getUserAuths'
    })
  }
};

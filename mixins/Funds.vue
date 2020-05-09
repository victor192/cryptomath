<script>
  export default {
    name: "FundsMixin",
    methods: {
      fundLogoSrc(id) {
        switch (id) {
          case 1:
            return '/images/funds/lms.jpg'
          case 2:
            return '/images/funds/stanford.png'
          case 3:
            return '/images/funds/ethereum.png'
          case 4:
            return '/images/funds/ripple.jpg'
          case 5:
            return '/images/funds/oxbc.jpeg'
          case 6:
            return '/images/funds/pearson.png'
        }

        return '/images/funds/unknown.jpg'
      },
    }
  }
</script>

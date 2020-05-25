import addWeeks from 'date-fns/addWeeks'
import addMonths from 'date-fns/addMonths'
import formatISO from 'date-fns/formatISO'

const getIsoDate = (date) => formatISO(date, { representation: 'date' })

export default {
  name: 'DatesMixin',
  methods: {
    getNowDate() {
      return getIsoDate(new Date())
    },
    getWeekAgoDate() {
      return getIsoDate(addWeeks(new Date(), -1))
    },
    getMonthAgoDate() {
      return getIsoDate(addMonths(new Date(), -1))
    }
  }
}

import { fetchAccounts } from './actions/index'

const fetchAccountsList = () => {
  return dispatch => {
    fetch('http://localhost:8080/accounts')
      .then(res => res.json())
      .then(res => {
        console.log('ciagniemy dane')
        console.log(res)
        dispatch(fetchAccounts(res))
        return res
      })
  }
}

export default { fetchAccountsList }
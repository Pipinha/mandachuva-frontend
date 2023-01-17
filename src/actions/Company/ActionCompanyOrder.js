let actionCompanyOrderSendMessage = (data) => (dispatch) => {
    // Helper.request(dispatch, 'POST', 'auth', data, (data) => {
    dispatch({
        type: 'ORDER_SEND_MESSAGE',
        payload: data
    })
    // })
}

export { actionCompanyOrderSendMessage }
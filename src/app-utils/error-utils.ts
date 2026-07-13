export function apiErrorMsg(err: any, msg = '') {
    // console.log({err})
    if (err?.data?.message && Array.isArray(err.data.message)) {
        return err.data.message[0]
    }
    return err?.data?.message || err?.message || msg || ''
}

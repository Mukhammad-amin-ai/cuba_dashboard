const token = localStorage.getItem('token')

function Decode(){
    const parts = token.split('.');
    const exp = parts[1]
    const decodedPayload = JSON.parse(atob(exp));
    const experition = decodedPayload.exp
    const date = new Date(experition * 1000)
    const now  = new Date()
    if( now  >= date){
        localStorage.removeItem('token')
        window.location.href='/login'
    }
}

export default Decode


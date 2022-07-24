const authUser = () => {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve({isAuth: true})
     }, 1000)
    })
}
const getUser = (authStatus) => {
  return new Promise((resolve,reject) => {
     if(!authStatus.isAuth){
          reject("auth faild")
     }
     else{
         setTimeout(() => {
            resolve({ name: 'Max' })
        }, 1000)
     }

  })
}

authUser().then(authStatus => {
    return getUser(authStatus)
}).then(user => {
    console.log("Loggedin user: "+ user.name)
}, reject => {
    console.log(reject)
})
